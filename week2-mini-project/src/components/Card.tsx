import React from 'react';

interface CardProps {
  children: React.ReactNode;
  variant?: 'light' | 'dark';
  className?: string; // Allow passing extra classes
}

const Card: React.FC<CardProps> = ({ children, variant = 'light', className = '' }) => {
  const baseStyles = 'rounded-lg shadow-lg p-6';
  
  const variantStyles = {
    light: 'bg-white text-slate-800',
    dark: 'bg-slate-800 text-white',
  };

  return (
    <div className={`${baseStyles} ${variantStyles[variant]} ${className}`}>
      {children}
    </div>
  );
};

export default Card;