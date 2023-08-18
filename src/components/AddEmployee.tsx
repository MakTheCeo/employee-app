import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';

const AddEmployee: React.FC = () => {
  const { t } = useTranslation();
  const [visaDates, setVisaDates] = useState<{ begin: string; end: string }>({ begin: '', end: '' });
  const [agreementDates, setAgreementDates] = useState<{ begin: string; end: string }>({ begin: '', end: '' });

  return (
    <div className="container">
      <h1 className="text-center mb-4">{t('addEmployeeTitle')}</h1>
      <form style={{ maxWidth: '600px', margin: '0 auto' }}>
        <div className="mb-3">
          <label className="form-label">{t('registrationNumber')}</label>
          <input type="text" className="form-control" />
        </div>
        <div className="mb-3">
          <label className="form-label">{t('name')}</label>
          <input type="text" className="form-control" />
        </div>
        <div className="mb-3">
          <label className="form-label">{t('surname')}</label>
          <input type="text" className="form-control" />
        </div>
        <div className="mb-3">
          <label className="form-label">{t('nation')}</label>
          <select className="form-select">
            <option>{t('russia')}</option>
            <option>{t('uzbekistan')}</option>
          </select>
        </div>
        <div className="mb-3">
          <label className="form-label">{t('task')}</label>
          <select className="form-select">
            <option>{t('engineer')}</option>
            <option>{t('manager')}</option>
            <option>{t('worker')}</option>
          </select>
        </div>
        <div className="mb-3">
          <label className="form-label">{t('visa')}</label>
          <select className="form-select">
            <option>{t('tourist')}</option>
            <option>{t('resident')}</option>
            <option>{t('workVisa')}</option>
          </select>
          <div className="row">
            <div className="col">
              <label className="form-label">{t('beginDateOfVisa')}</label>
              <input type="date" className="form-control" value={visaDates.begin} onChange={(e) => setVisaDates({ ...visaDates, begin: e.target.value })} />
            </div>
            <div className="col">
              <label className="form-label">{t('endDateOfVisa')}</label>
              <input type="date" className="form-control" value={visaDates.end} onChange={(e) => setVisaDates({ ...visaDates, end: e.target.value })} />
            </div>
          </div>
        </div>
        <div className="form-group">
          <label className="form-label">{t('phone')}</label>
          <div className="input-group">
            <span className="input-prefix">+</span>
            <input type="text" className="form-control input-with-prefix" />
          </div>
        </div>
        <div className="mb-3">
          <label className="form-label">{t('agreement')}</label>
        <input type="text" className="form-control" />
          <div className="row">
            <div className="col">
              <label className="form-label">{t('beginningDateOfAgreement')}</label>
              <input type="date" className="form-control" value={agreementDates.begin} onChange={(e) => setAgreementDates({ ...agreementDates, begin: e.target.value })} />
            </div>
            <div className="col">
              <label className="form-label">{t('endDateOfAgreement')}</label>
              <input type="date" className="form-control" value={agreementDates.end} onChange={(e) => setAgreementDates({ ...agreementDates, end: e.target.value })} />
            </div>
          </div>
        </div>
        <div className="form-group">
          <label className="form-label">{t('salary')}</label>
          <div className="input-group">
            <span className="input-prefix">₽</span>
            <input type="text" className="form-control input-with-prefix" placeholder="0.00" />
          </div>
        </div>
        <div className="form-group">
          <label className="form-label">{t('unSalary')}</label>
          <div className="input-group">
            <span className="input-prefix">₽</span>
            <input type="text" className="form-control input-with-prefix" placeholder="0.00" />
          </div>
        </div>
        <div className="mb-3">
          <label className="form-label">{t('notes')}</label>
          <textarea className="form-control" rows={3}></textarea>
        </div>
        <div className="text-center">
          <button type="submit" className="btn btn-primary me-2">
            {t('save')}
          </button>
          <button type="button" className="btn btn-secondary">
            {t('cancel')}
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddEmployee;
