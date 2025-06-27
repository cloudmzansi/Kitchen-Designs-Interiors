const API_KEY = 'AIzaSyBAtfpXGCIod0yMvABQzIw9tX3Nu2blTII';
const PLACE_ID = 'ChIJN1t_tDeuEmsRUsoyG83frY4'; // Kitchen Designs & Interiors Cape Town

export default async function handler(req, res) {
  // Enable CORS
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    res.status(200).end();
    return;
  }

  try {
    console.log('Fetching reviews for Place ID:', PLACE_ID);
    
    // Fetch place details including reviews using the specific Place ID
    const detailsResponse = await fetch(
      `https://maps.googleapis.com/maps/api/place/details/json?place_id=${PLACE_ID}&fields=place_id,name,rating,user_ratings_total,reviews&key=${API_KEY}`
    );
    
    const detailsData = await detailsResponse.json();
    console.log('API Response Status:', detailsData.status);
    console.log('API Response:', JSON.stringify(detailsData, null, 2));
    
    if (detailsData.status === 'OK' && detailsData.result) {
      console.log('Business Name:', detailsData.result.name);
      console.log('Total Reviews:', detailsData.result.user_ratings_total);
      console.log('Reviews Array:', detailsData.result.reviews ? detailsData.result.reviews.length : 0);
      
      if (detailsData.result.reviews && detailsData.result.reviews.length > 0) {
        console.log(`Found ${detailsData.result.reviews.length} reviews for ${detailsData.result.name}`);
        console.log('First review:', JSON.stringify(detailsData.result.reviews[0], null, 2));
        res.status(200).json(detailsData.result.reviews);
        return;
      } else {
        console.log('No reviews found in the response');
        res.status(200).json({ 
          error: 'No reviews found', 
          business: detailsData.result.name,
          total_reviews: detailsData.result.user_ratings_total,
          message: 'The business has no reviews in the API response'
        });
        return;
      }
    } else {
      console.log('API Error:', detailsData.status, detailsData.error_message);
      res.status(200).json({ 
        error: 'Google API Error', 
        status: detailsData.status, 
        message: detailsData.error_message,
        full_response: detailsData
      });
      return;
    }
  } catch (error) {
    console.error('Error fetching Google reviews:', error);
    res.status(200).json({ 
      error: 'Network Error', 
      message: error.message,
      details: error.toString()
    });
  }
} 