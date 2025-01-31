const API_URL = 'https://uselessfacts.jsph.pl/random.json?language=en';

export const fetchRandomFact = async (): Promise<string> => {
    try {
        const response = await fetch(API_URL);
        const data = await response.json();
        return data.text; // the API returns a 'text' field with a random fact
    } catch (error) {
        console.error('Error fetching random fact:', error);
        return 'Sorry, we couldn\'t fetch a random fact at the moment.';
    }
};


