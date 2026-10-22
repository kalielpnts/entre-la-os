import React from 'react';

export const Logo = ({ className = "w-full h-full" }) => {
  return (
    <img 
      src="/logo.png" 
      alt="Logo EntreLaços" 
      className={`${className} object-contain border-0 outline-none shadow-none block`}
    />
  );
};
