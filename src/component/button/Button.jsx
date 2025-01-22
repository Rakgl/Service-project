import React from 'react';
import './button.scss';

const Button = ({ children, type = 'button', onClick, className = '', ...props }) => {
  return (
    <button
      type={type}
      className={`btn btn-outline-primary  ${className}`}
      onClick={onClick}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;