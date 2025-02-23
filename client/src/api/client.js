import axios from 'axios';

const API_URL = `${import.meta.env.VITE_BACKEND_URL}/api/contact/message`;

export const sendContactForm = async (formData) => {
  console.log(formData);
  try {
    const response = await axios.post(API_URL, formData, {
      headers: { 'Content-Type': 'application/json' },
    });
    return response.data;
  } catch (error) {
    throw error.response?.data || error.message;
  }
};
