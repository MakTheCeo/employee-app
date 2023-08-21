import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { addEmployee } from '../services/addEmployeeAPI';

const AddEmployee: React.FC = () => {
  const { t } = useTranslation();
  const [visaDates, setVisaDates] = useState<{ begin: string; end: string }>({ begin: '', end: '' });
  const [agreementDates, setAgreementDates] = useState<{ begin: string; end: string }>({ begin: '', end: '' });
  const [submissionStatus, setSubmissionStatus] = useState<string | null>(null);
  const [employeeData, setEmployeeData] = useState({
    registrationNumber: '',
    firstName: '',
    lastName: '',
    nation: '',
    task: '',
    visaType: '',
    phoneNumber: '',
    agreement: '',
    salary: '',
    unSalary: '',
    notes: ''
  });

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Check for empty mandatory fields
    if (!employeeData.registrationNumber ||
        !employeeData.firstName ||
        !employeeData.lastName ||
        !employeeData.phoneNumber ||
        !employeeData.salary ||
        !employeeData.unSalary ||
        !visaDates.begin ||
        !visaDates.end ||
        !agreementDates.begin ||
        !agreementDates.end) {
      setSubmissionStatus('Please fill the missing fields');
      return;
    }

    if (new Date(visaDates.end) < new Date(visaDates.begin)) {
      setSubmissionStatus('Visa end date must be after start date');
      return;
    }

    if (new Date(agreementDates.end) < new Date(agreementDates.begin)) {
      setSubmissionStatus('Agreement end date must be after start date');
      return;
    }

    const employeeDetails = {
      ...employeeData,
      visaStartDate: visaDates.begin,
      visaEndDate: visaDates.end,
      agreementStartDate: agreementDates.begin,
      agreementEndDate: agreementDates.end,
    };

    try {
      await addEmployee(employeeDetails);
      setSubmissionStatus('success');
    } catch (error) {
      console.error('An error occurred while adding an employee:', error);
      setSubmissionStatus('failure');
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;

    if (name === 'salary' || name === 'unSalary') {
      // Ensure that the salary and unSalary fields only accept numbers and decimal points
      if (!/^(\d+\.?\d*|\.\d+)?$/.test(value)) {
        return; // Ignore the input if it contains text or symbols
      }
    }

    setEmployeeData((prevState) => ({ ...prevState, [name]: value }));
  };
  return (
    <div className="container">
      <h1 className="text-center mb-4">{t('addEmployeeTitle')}</h1>
      <form style={{ maxWidth: '600px', margin: '0 auto' }} onSubmit={handleSubmit}>
        <div className="mb-3">
          <label className="form-label">{t('registrationNumber')} *</label>
          <input type="text" name="registrationNumber" className="form-control" onChange={handleChange} />
          {employeeData.registrationNumber && !/^\d+$/.test(employeeData.registrationNumber) && <div className="text-danger">Registration number should be an integer</div>}
        </div>
        <div className="mb-3">
  <label className="form-label">{t('name')} *</label>
  <input type="text" name="firstName" className="form-control" onChange={handleChange} />
  {employeeData.firstName && /\d/.test(employeeData.firstName) && <div className="text-danger">Name should not contain a number</div>}
</div>
<div className="mb-3">
  <label className="form-label">{t('surname')} *</label>
  <input type="text" name="lastName" className="form-control" onChange={handleChange} />
  {employeeData.lastName && /\d/.test(employeeData.lastName) && <div className="text-danger">Surname should not contain a number</div>}
</div>

        <div className="mb-3">
          <label className="form-label">{t('nation')} *</label>
          <select name="nation" className="form-select" onChange={handleChange}>
            <option>{t('russia')}</option>
            <option>{t('uzbekistan')}</option>
          </select>
        </div>
        <div className="mb-3">
          <label className="form-label">{t('task')} *</label>
          <select name="task" className="form-select" onChange={handleChange}>
            <option>{t('engineer')}</option>
            <option>{t('manager')}</option>
            <option>{t('worker')}</option>
          </select>
        </div>
        <div className="mb-3">
          <label className="form-label">{t('visa')} *</label>
          <select name="visaType" className="form-select" onChange={handleChange}>
            <option>{t('tourist')}</option>
            <option>{t('resident')}</option>
            <option>{t('workVisa')}</option>
          </select>
          <div className="row">
            <div className="col">
              <label className="form-label">{t('beginDateOfVisa')} *</label>
              <input type="date" className="form-control" value={visaDates.begin} onChange={(e) => setVisaDates({ ...visaDates, begin: e.target.value })} />
            </div>
            <div className="col">
              <label className="form-label">{t('endDateOfVisa')} *</label>
              <input type="date" className="form-control" value={visaDates.end} onChange={(e) => setVisaDates({ ...visaDates, end: e.target.value })} />
            </div>
          </div>
          {visaDates.end && new Date(visaDates.end) < new Date(visaDates.begin) && <div className="text-danger">End date of the visa should be after the beginning date</div>}
        </div>
        <div className="form-group">
          <label className="form-label">{t('phone')} *</label>
          <div className="input-group">
            <span className="input-prefix">+</span>
            <input type="tel" pattern="[0-9]*" name="phoneNumber" className="form-control input-with-prefix" onChange={handleChange} />
          </div>
          {employeeData.phoneNumber && !/^\d+$/.test(employeeData.phoneNumber) && <div className="text-danger">Phone number should be a number</div>}
        </div>
        <div className="mb-3">
          <label className="form-label">{t('agreement')} *</label>
          <input type="text" name="agreement" className="form-control" onChange={handleChange} />
          <div className="row">
            <div className="col">
              <label className="form-label">{t('beginningDateOfAgreement')} *</label>
              <input type="date" className="form-control" value={agreementDates.begin} onChange={(e) => setAgreementDates({ ...agreementDates, begin: e.target.value })} />
            </div>
            <div className="col">
              <label className="form-label">{t('endDateOfAgreement')} *</label>
              <input type="date" className="form-control" value={agreementDates.end} onChange={(e) => setAgreementDates({ ...agreementDates, end: e.target.value })} />
            </div>
          </div>
          {agreementDates.end && new Date(agreementDates.end) < new Date(agreementDates.begin) && <div className="text-danger">End date of the agreement should be after the beginning date</div>}
        </div>
        <div className="form-group">
          <label className="form-label">{t('salary')} *</label>
          <div className="input-group">
            <span className="input-prefix">₽</span>
            <input type="number" min="0" step="0.01" name="salary" className="form-control input-with-prefix" placeholder="0.00" onChange={handleChange} />
            {employeeData.salary && isNaN(Number(employeeData.salary)) && <div className="text-danger">Salary should not contain text or symbols</div>}
          </div>
        </div>
        <div className="form-group">
          <label className="form-label">{t('unSalary')} *</label>
          <div className="input-group">
            <span className="input-prefix">₽</span>
            <input type="number" min="0" step="0.01" name="unSalary" className="form-control input-with-prefix" placeholder="0.00" onChange={handleChange} />
            {employeeData.unSalary && isNaN(Number(employeeData.unSalary)) && <div className="text-danger">Unified salary should not contain text or symbols</div>}
          </div>
        </div>
        <div className="mb-3">
          <label className="form-label">{t('notes')}</label>
          <textarea name="notes" className="form-control" rows={3} onChange={handleChange}></textarea>
        </div>
        {submissionStatus === 'success' && <div className="text-center text-success mb-4">Employee Added</div>}
        {submissionStatus === 'failure' && <div className="text-center text-danger mb-4">Sorry, the form is not submitted</div>}
        {submissionStatus === 'Please fill the missing fields' && <div className="text-center text-danger mb-4">Please fill the missing fields</div>}
      <div className="text-center" style={{ gap: '60px', display: 'flex', justifyContent: 'center' }}>
        <button type="submit" className="btn btn-primary">{t('save')}</button>
        <button type="button" className="btn btn-secondary">{t('cancel')}</button>
      </div>
      </form>
    </div>
  );
  
};

export default AddEmployee;
