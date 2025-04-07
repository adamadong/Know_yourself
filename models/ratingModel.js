let storedRatings = [];
let sumGroups = [];

/**
 * Add new ratings to the stored ratings array
 */
export function addRatings(newRatings) {
    storedRatings = storedRatings.concat(newRatings);
    console.log('Current storedRatings:', storedRatings);
    console.log('Data type of storedRatings:', typeof storedRatings);
    
    // Calculate results if we have all 40 ratings
    if (storedRatings.length === 40) {
        calculateResults();
    }
    
    return storedRatings;
}

/**
 * Calculate the sum groups based on stored ratings
 */
export function calculateResults() {
    sumGroups = [];
    
    for (let i = 0; i < 8; i++) {
        const sum = storedRatings[i] + 
                    storedRatings[i + 8] + 
                    storedRatings[i + 16] + 
                    storedRatings[i + 24] + 
                    storedRatings[i + 32];
        sumGroups.push(sum);
    }
    
    console.log('Sum groups calculated:', sumGroups);
    return sumGroups;
}

/**
 * Get the calculated results
 */
export function getResults() {
    return sumGroups;
}

/**
 * Reset all stored data
 */
export function resetData() {
    storedRatings = [];
    sumGroups = [];
}
