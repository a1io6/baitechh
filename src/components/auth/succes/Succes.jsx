import React from 'react';
import './Succses.scss';
import {Check} from 'lucide-react';
import { useNavigate } from 'react-router';
import CloseRegister from '@/components/ui/auth/closeregister';


function Succses() {
    const nav = useNavigate()
  return (
    <div className="succses-page-container">
        <CloseRegister onClose={() => {nav("/")}}/>
      <div className="succses-page">
        <div className="succses-page__icon">
          <Check size={48} color="#4CAF50" />
        </div>
        <h2 className="succses-page__title">Успешно!</h2>
        <h4 className="succses-page__subtitle">Новый пароль был установлен</h4>
      </div>
      
    </div>
  );
}

export default Succses;