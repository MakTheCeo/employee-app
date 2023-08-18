import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next'; // Import useTranslation
import '../styles/EmployeeDashboard.css';

const EmployeeDashboard: React.FC = () => {
  const navigate = useNavigate();
  const { t } = useTranslation();

  const handleSearchEmployeeClick = () => {
    navigate('/search-employee'); // Navigate to the Search Employee page
  };
  const handleAddEmployeeClick = () => {
    navigate('/add-employee');
  };

  return (
    <div className="container">
      <div className="row justify-content-center align-items-center vh-100">
        <div className="col-md-3">
          <button
            className="btn employee-button add-employee-button w-100"
            onClick={handleAddEmployeeClick}
          >
            {t('addEmployee')} 
          </button>
        </div>
        <div className="col-md-3">
    <button
      className="btn employee-button search-employee-button w-100"
      onClick={handleSearchEmployeeClick} // Handle the click event
    >
      {t('searchEmployee')}
    </button>
  </div>
      </div>
    </div>

    
  );
};

export default EmployeeDashboard;
