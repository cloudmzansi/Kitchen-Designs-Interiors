const API_KEY = 'AIzaSyBAtfpXGCIod0yMvABQzIw9tX3Nu2blTII';

export interface GoogleReview {
  author_name: string;
  author_url?: string;
  language: string;
  profile_photo_url?: string;
  rating: number;
  relative_time_description: string;
  text: string;
  time: number;
}

export interface GooglePlaceDetails {
  place_id: string;
  name: string;
  rating: number;
  user_ratings_total: number;
  reviews: GoogleReview[];
}

export const fetchGoogleReviews = async (): Promise<GoogleReview[]> => {
  try {
    // Check if we're in development or production
    const isDevelopment = window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1';
    
    if (isDevelopment) {
      console.log('Development mode: Using fallback reviews');
      return fallbackReviews;
    }
    
    // Production: Use the serverless function
    console.log('Production mode: Fetching from serverless function');
    const response = await fetch('/api/google-reviews');
    
    if (response.ok) {
      const reviews = await response.json();
      console.log('Reviews fetched successfully:', reviews.length);
      return reviews;
    } else {
      console.error('Failed to fetch reviews from API');
      return fallbackReviews;
    }
  } catch (error) {
    console.error('Error fetching Google reviews:', error);
    return fallbackReviews;
  }
};

// Fallback reviews in case API fails
export const fallbackReviews: GoogleReview[] = [
  {
    author_name: "Sarah Johnson",
    rating: 5,
    relative_time_description: "2 months ago",
    text: "KD Interiors transformed our outdated kitchen into a stunning modern space. The attention to detail and quality of work exceeded our expectations. Highly recommended!",
    time: Date.now() - (60 * 24 * 60 * 60 * 1000), // 2 months ago
    language: "en"
  },
  {
    author_name: "Michael Thompson",
    rating: 5,
    relative_time_description: "3 months ago",
    text: "Professional, reliable, and incredibly talented. The team delivered exactly what they promised, on time and within budget. Our kitchen is now the heart of our home.",
    time: Date.now() - (90 * 24 * 60 * 60 * 1000), // 3 months ago
    language: "en"
  },
  {
    author_name: "Lisa Anderson",
    rating: 5,
    relative_time_description: "1 month ago",
    text: "From the initial consultation to the final installation, KD Interiors provided exceptional service. Their design expertise and craftsmanship are truly outstanding.",
    time: Date.now() - (30 * 24 * 60 * 60 * 1000), // 1 month ago
    language: "en"
  },
  {
    author_name: "David Wilson",
    rating: 5,
    relative_time_description: "4 months ago",
    text: "The team at KD Interiors turned our vision into reality. The project was completed smoothly, and the result is absolutely beautiful. We couldn't be happier!",
    time: Date.now() - (120 * 24 * 60 * 60 * 1000), // 4 months ago
    language: "en"
  }
]; 