// src/actions/index.js
import axios from 'axios';

// Define the API endpoint
const apiUrl = process.env.REACT_APP_API_URL || 'http://localhost:8080/api/v1/userActivities';

export const setFilter = (filter) => ({
  type: 'SET_FILTER',
  payload: filter,
});

export const fetchDataRequest = () => {
  return async (dispatch) => {
    dispatch({ type: 'FETCH_DATA_REQUEST' });

    try {
      const response = await axios.get(apiUrl);
      dispatch({ type: 'FETCH_DATA_SUCCESS', payload: response.data });
    } catch (error) {
      dispatch({ type: 'FETCH_DATA_FAILURE', payload: error.message });
    }
  };
};
