import axios from 'axios';

const API_BASE_URL = 'https://frontend-take-home-service.fetch.com';

// Create an Axios instance with default settings
const api = axios.create({
  baseURL: API_BASE_URL,
  withCredentials: true,
  headers: {
    'Content-Type': 'application/json',
  },
});

/**
 * Login the user
 * @param {string} name
 * @param {string} email
 * @returns {Promise<boolean>}
 */
export const loginUser = async (name, email) => {
  try {
    await axios.post(`${API_BASE_URL}/auth/login`, { name, email });
    return true;
  } catch (error) {
    console.error('Login failed:', error.response?.data || error.message);
    return false;
  }
};

/**
 * Fetch available breeds
 * @returns {Promise<string[]>} List of breeds
 */
export const fetchBreeds = async (setBreeds) => {
  try {
    const response = await api.get('/dogs/breeds');
    setBreeds(response.data); 
  } catch (error) {
    console.error('Error fetching breeds:', error.response?.data || error.message);
    return [];
  }
};

/**
 * Fetch dogs ids based on filters
 * @param {Object} params Query parameters
 * @returns {Promise<{ resultIds: string[], total: number, next?: string }>} Dogs data
 */
export const fetchDogIds = async (setDogs, params) => {
  try {
    const response = await api.get('/dogs/search', { params });
    const dogs = await fetchDogs(response.data.resultIds);
    setDogs(dogs)
  } catch (error) {
    console.error('Error fetching dogs:', error.response?.data || error.message);
    return { resultIds: [], total: 0 };
  }
};

/**
 * Fetch dogs by IDs
 * @param {string[]} dogIds Array of dog IDs
 * @returns {Promise<Object[]>} List of dog objects
 */
export const fetchDogs = async (dogIds) => {
  try {
    const response = await api.post('/dogs', dogIds);
    return response.data;
  } catch (error) {
    console.error('Logout failed:', error.response?.data || error.message);
    return false;
  }
};

/**
 * Get a match from a list of favorite dogs
 * @param {string[]} dogIds List of selected dog IDs
 * @returns {Promise<string>} Matched dog ID
 */
export const getMatch = async (dogIds) => {
  try {
    const response = await api.post('/dogs/match', dogIds);
    return response.data.match;
  } catch (error) {
    console.error('Error fetching match:', error.response?.data || error.message);
    return null;
  }
};


