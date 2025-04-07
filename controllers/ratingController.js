import { addRatings, calculateResults } from '../models/ratingModel.js';

/**
 * Handle rating submission
 */
export function submitRating(req, res) {
    const ratings = req.body.ratings;
  
    if (!ratings || !Array.isArray(ratings)) {
        return res.status(400).json({ 
            success: false, 
            message: 'Invalid ratings data.' 
        });
    }
    
    // Process the ratings
    const currentRatings = ratings.map(item => parseInt(item.rating, 10));
    addRatings(currentRatings);
    
    // Send response
    const responseData = {
        success: true,
        message: 'Ratings received successfully.',
        ratings: ratings
    };
    
    return res.json(responseData);
}
