// Debug script for Google Reviews API
// Copy and paste this into your browser console on https://kdinteriors.co.za

console.log('=== Google Reviews API Debug ===');

// Test 1: Check if we're in production mode
const isDevelopment = window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1';
console.log('Environment:', isDevelopment ? 'Development' : 'Production');
console.log('Hostname:', window.location.hostname);

// Test 2: Test the serverless function
async function testAPI() {
    try {
        console.log('Testing serverless function...');
        const response = await fetch('/api/google-reviews');
        console.log('Response status:', response.status);
        console.log('Response headers:', Object.fromEntries(response.headers.entries()));
        
        if (response.ok) {
            const reviews = await response.json();
            console.log('Reviews returned:', reviews.length);
            console.log('Reviews data:', reviews);
            
            // Check if these are fallback reviews
            const isFallback = reviews.some(review => 
                review.author_name === 'Sarah Johnson' || 
                review.author_name === 'Michael Thompson' ||
                review.author_name === 'Lisa Anderson' ||
                review.author_name === 'David Wilson'
            );
            
            console.log('Are these fallback reviews?', isFallback);
            
            if (isFallback) {
                console.log('❌ API is returning fallback reviews - this means the Google API call failed');
            } else {
                console.log('✅ API is returning real reviews!');
            }
        } else {
            const errorText = await response.text();
            console.error('API Error:', errorText);
        }
    } catch (error) {
        console.error('Network Error:', error);
    }
}

// Test 3: Test direct Google API (will likely fail due to referer restrictions)
async function testDirectGoogleAPI() {
    try {
        console.log('Testing direct Google API...');
        const API_KEY = 'AIzaSyBAtfpXGCIod0yMvABQzIw9tX3Nu2blTII';
        const PLACE_ID = 'ChIJN1t_tDeuEmsRUsoyG83frY4';
        
        const response = await fetch(
            `https://maps.googleapis.com/maps/api/place/details/json?place_id=${PLACE_ID}&fields=place_id,name,rating,user_ratings_total,reviews&key=${API_KEY}`
        );
        
        const data = await response.json();
        console.log('Direct API response:', data);
        
        if (data.status === 'OK') {
            console.log('✅ Direct API works!');
            console.log('Business:', data.result.name);
            console.log('Total reviews:', data.result.user_ratings_total);
            console.log('Reviews in response:', data.result.reviews ? data.result.reviews.length : 0);
        } else {
            console.log('❌ Direct API failed:', data.status, data.error_message);
        }
    } catch (error) {
        console.error('Direct API Error:', error);
    }
}

// Run the tests
console.log('Running tests...');
testAPI().then(() => {
    console.log('---');
    testDirectGoogleAPI();
});

console.log('Check the console output above for results'); 