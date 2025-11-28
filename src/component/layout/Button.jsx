import React from 'react';
import './scss/Button.scss';

const Button = ({ title, onClick }) => {
  return (
    <button className={`miu-btn`} onClick={onClick}>
      {title}
    </button>
  );
};

export default Button;
