import axios from 'axios';

// Use relative path to call API from same domain
const API_URL = `/api/contact/message`;

export const sendContactForm = async (formData) => {

  try {
    const response = await axios.post(API_URL, formData, {
      headers: { 'Content-Type': 'application/json' },
    });
    return response.data;
  } catch (error) {
    throw error.response?.data || error.message;
  }
};
