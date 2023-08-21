import React from 'react';
import { useTranslation } from 'react-i18next'; // Import useTranslation
import '../styles/SearchEmployee.css';

const SearchEmployee: React.FC = () => {
  const { t } = useTranslation();

  return (
    <div className="container mt-3">
      <h6 className="text-primary mb-3" style={{ marginTop: '20px' }}>
        {t('searchFilters')}
      </h6>
      <div className="row mb-3 align-items-end">
        <div className="col-md-3">
          <label className="form-label">{t('registrationNumber')}</label>
          <select className="form-select"></select>
        </div>
        <div className="col-md-3">
          <label className="form-label">{t('name')}</label>
          <select className="form-select"></select>
        </div>
        <div className="col-md-3">
          <label className="form-label">{t('surname')}</label>
          <select className="form-select"></select>
        </div>
        <div className="col-md-3">
          <button className="btn btn-primary">{t('search')}</button>
        </div>
      </div>
      <h6 className="text-primary mb-3">{t('results')} - 7</h6>
      <table className="table table-resizable">
        <thead>
          <tr>
            <th style={{ width: '15%' }}>{t('registrationNumber')}</th>
            <th>{t('name')}</th>
            <th>{t('surname')}</th>
            <th>{t('task')}</th>
            <th>{t('nation')}</th>
            <th>{t('balance')}</th>
            <th>{t('delete')}</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>12345</td>
            <td>John</td>
            <td>Doe</td>
            <td>Engineer</td>
            <td>Brazil</td>
            <td>1000 ₽</td>
            <td>
              <button className="btn btn-danger">
                <i className="bi bi-trash"></i>
              </button>
            </td>
          </tr>
          <tr>
            <td>12345</td>
            <td>John</td>
            <td>Doe</td>
            <td>Engineer</td>
            <td>Brazil</td>
            <td>1000 ₽</td>
            <td>
              <button className="btn btn-danger">
                <i className="bi bi-trash"></i>
              </button>
            </td>
          </tr>
          <tr>
            <td>12345</td>
            <td>John</td>
            <td>Doe</td>
            <td>Engineer</td>
            <td>Brazil</td>
            <td>1000 ₽</td>
            <td>
              <button className="btn btn-danger">
                <i className="bi bi-trash"></i>
              </button>
            </td>
          </tr>
          <tr>
            <td>12345</td>
            <td>John</td>
            <td>Doe</td>
            <td>Engineer</td>
            <td>Brazil</td>
            <td>1000 ₽</td>
            <td>
              <button className="btn btn-danger">
                <i className="bi bi-trash"></i>
              </button>
            </td>
          </tr>
          <tr>
            <td>12345</td>
            <td>John</td>
            <td>Doe</td>
            <td>Engineer</td>
            <td>Brazil</td>
            <td>1000 ₽</td>
            <td>
              <button className="btn btn-danger">
                <i className="bi bi-trash"></i>
              </button>
            </td>
          </tr>
          
        </tbody>
        </table>
      <div className="row mt-3">
        <div className="col-md-6">
          <button className="btn btn-primary w-100">{t('editInfo')}</button>
        </div>
        <div className="col-md-6">
          <button className="btn btn-secondary w-100">{t('editExpenses')}</button>
        </div>
      </div>
    </div>
  );
};

export default SearchEmployee;