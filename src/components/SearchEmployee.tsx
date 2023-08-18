import React from 'react';
import '../styles/SearchEmployee.css'; // Import custom CSS

const SearchEmployee: React.FC = () => {
  return (
    <div className="container mt-3">
      <h6 className="text-primary mb-3" style={{ marginTop: '20px' }}>Search Filters</h6>
      <div className="row mb-3 align-items-end">
        <div className="col-md-3">
          <label className="form-label">Registration Number</label>
          <select className="form-select"></select>
        </div>
        <div className="col-md-3">
          <label className="form-label">Name</label>
          <select className="form-select"></select>
        </div>
        <div className="col-md-3">
          <label className="form-label">Surname</label>
          <select className="form-select"></select>
        </div>
        <div className="col-md-3">
          <button className="btn btn-primary">Search</button>
        </div>
      </div>
      <h6 className="text-primary mb-3">Results - 7</h6>
      <table className="table table-resizable">
        <thead>
          <tr>
            <th style={{ width: '15%' }}>Registration Number</th>
            <th>Name</th>
            <th>Surname</th>
            <th>Task</th>
            <th>Nation</th>
            <th>Balance</th>
            <th>Delete</th> 
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
          <button className="btn btn-primary w-100">Edit Info</button>
        </div>
        <div className="col-md-6">
          <button className="btn btn-secondary w-100">Edit Expenses</button>
        </div>
      </div>
    </div>
  );
};

export default SearchEmployee;
