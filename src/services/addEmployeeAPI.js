import axios from 'axios';

const BASE_URL = 'https://twocerpimage-o6qa34rflq-uc.a.run.app';

export const addEmployee = async (employeeData) => {
  try {
    const response = await axios.post(`${BASE_URL}/api/Employee/create`, employeeData);
    return response.data;
  } catch (error) {
    console.error('An error occurred while adding an employee:', error);
    throw error;
  }
};
