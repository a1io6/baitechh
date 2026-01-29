"use client";

import React, { useState } from 'react';
import './UsersTable.scss';

const UsersTable = () => {
  // Пример данных (в реальности придут из API)
  const users = Array(10).fill({
    name: 'Аскарова Лейла Тилековна',
    phone: '708 266 543',
    email: 'vguu@gmail.com'
  });

  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = 40;

  return (
    <div className="users-container">
      <h2 className="users-title">Пользователи</h2>
      
      <div className="table-wrapper">
        <table className="users-table">
          <thead>
            <tr>
              <th>Ф.И.О</th>
              <th>Номер</th>
              <th>Электронная почта</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <tr key={index}>
                <td>{user.name}</td>
                <td>{user.phone}</td>
                <td>{user.email}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="pagination">
        <button className="page-btn arrow" disabled>&lt;</button>
        
        <button className={`page-btn ${currentPage === 1 ? 'active' : ''}`}>1</button>
        <button className="page-btn">2</button>
        <button className="page-btn">3</button>
        <button className="page-btn">4</button>
        <span className="dots">...</span>
        <button className="page-btn">{totalPages}</button>
        
        <button className="page-btn arrow">&gt;</button>
      </div>
    </div>
  );
};

export default UsersTable;