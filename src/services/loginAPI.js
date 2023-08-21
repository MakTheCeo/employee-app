/*import axios from 'axios';

const BASE_URL = 'https://twocerpimage-o6qa34rflq-uc.a.run.app';

export const login = async (email, password) => {
  try {
    const response = await axios.post(`${BASE_URL}/api/Auth/login`, null, {
      params: { email, password },
    });
    return response.data; // Returning the response data (e.g., a token or user info)
  } catch (error) {
    console.error('An error occurred while logging in:', error);
    throw error; // Rethrowing the error to handle it in the calling code
  }
};

*/

  
export const login = async (email, password) => {
    try {
      console.log('Logging in with email:', email, 'and password:', password);
  
      // Simulating a successful login response with fake data
      const fakeResponseData = {
        token: 'fake-token',
        user: {
          email: email,
          name: 'Admin User',
        },
      };
  
      return fakeResponseData; // Returning the fake response data
    } catch (error) {
      console.error('An error occurred while logging in:', error);
      throw error;
    }
  };
  