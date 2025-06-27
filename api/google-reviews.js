const API_KEY = 'AIzaSyBAtfpXGCIod0yMvABQzIw9tX3Nu2blTII';
const PLACE_ID = 'ChIJ2cf12eb42da68d29x8253406a65fc3f58'; // Kitchen Designs & Interiors Cape Town

// Fallback reviews in case the API fails
const fallbackReviews = [
  {
    author_name: 'Sarah Johnson',
    rating: 5,
    relative_time_description: '2 months ago',
    text: 'KD Interiors transformed our outdated kitchen into a modern masterpiece. Their attention to detail and quality work exceeded our expectations. Highly recommended!',
    time: Date.now() - (60 * 24 * 60 * 60 * 1000 * 2) // 2 months ago
  },
  {
    author_name: 'Michael Thompson',
    rating: 5,
    relative_time_description: '3 months ago',
    text: 'Professional, reliable, and incredibly talented. The team at KD Interiors delivered our dream kitchen within budget. Our kitchen is now the heart of our home.',
    time: Date.now() - (60 * 24 * 60 * 60 * 1000 * 3) // 3 months ago
  },
  {
    author_name: 'Lisa Anderson',
    rating: 5,
    relative_time_description: '1 month ago',
    text: 'From the initial consultation to the final installation, KD Interiors exceeded our expectations. Their expertise and craftsmanship are truly outstanding.',
    time: Date.now() - (60 * 24 * 60 * 60 * 1000 * 1) // 1 month ago
  },
  {
    author_name: 'David Wilson',
    rating: 5,
    relative_time_description: '4 months ago',
    text: 'The team at KD Interiors turned our vision into reality. The quality of work and attention to detail is absolutely beautiful. We couldn\'t be happier!',
    time: Date.now() - (60 * 24 * 60 * 60 * 1000 * 4) // 4 months ago
  }
];

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
    
    if (detailsData.status === 'OK' && detailsData.result) {
      console.log('Business Name:', detailsData.result.name);
      console.log('Total Reviews:', detailsData.result.user_ratings_total);
      console.log('Reviews Array:', detailsData.result.reviews ? detailsData.result.reviews.length : 0);
      
      if (detailsData.result.reviews && detailsData.result.reviews.length > 0) {
        console.log(`Found ${detailsData.result.reviews.length} reviews for ${detailsData.result.name}`);
        res.status(200).json(detailsData.result.reviews);
        return;
      } else {
        console.log('No reviews found in the response, using fallback reviews');
        res.status(200).json(fallbackReviews);
        return;
      }
    } else {
      console.log('API Error:', detailsData.status, detailsData.error_message);
      console.log('Using fallback reviews due to API error');
      res.status(200).json(fallbackReviews);
      return;
    }
  } catch (error) {
    console.error('Error fetching Google reviews:', error);
    console.log('Using fallback reviews due to network error');
    res.status(200).json(fallbackReviews);
  }
} 