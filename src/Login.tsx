import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom'; 

const Login: React.FC = () => {
  const navigate = useNavigate(); 
  const { t, i18n } = useTranslation();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLanguageChange = (language: string) => {
    i18n.changeLanguage(language);
  };

  const handleSubmit = () => {
    navigate('/dashboard'); 
  };

  return (
    <div className="container">
      <div className="row justify-content-center align-items-center vh-100">
        <div className="col-md-4">
          <div className="card">
            <div className="card-body">
              <h1 className="text-center">{t('login')}</h1>
              <div className="mb-3">
                <label className="form-label">{t('username')}:</label>
                <input type="text" className="form-control" value={username} onChange={e => setUsername(e.target.value)} />
              </div>
              <div className="mb-3">
                <label className="form-label">{t('password')}:</label>
                <input type="password" className="form-control" value={password} onChange={e => setPassword(e.target.value)} />
              </div>
              <button className="btn btn-primary w-100" onClick={handleSubmit}>{t('loginButton')}</button>
              <select className="form-select mt-3" onChange={e => handleLanguageChange(e.target.value)}>
                <option value="en">English</option>
                <option value="tr">Türkçe</option>
                <option value="ru">Русский</option>
              </select>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
