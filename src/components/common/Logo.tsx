import React from 'react';

interface LogoProps {
  className?: string;
  variant?: 'navbar' | 'footer' | 'large';
  onClick?: () => void;
}

export const Logo: React.FC<LogoProps> = ({ className = '', variant = 'navbar', onClick }) => {
  // Exact client dimensions & sizing with strict proportions and transparent background
  const dimensions = {
    navbar: 'h-10 w-auto max-w-[210px]',
    footer: 'h-11 w-auto max-w-[230px]',
    large: 'h-14 w-auto max-w-[280px]',
  }[variant];

  return (
    <div 
      className={`inline-flex items-center gap-3 cursor-pointer select-none group transition-transform duration-200 active:scale-[0.98] ${className}`}
      onClick={onClick}
      role="button"
      tabIndex={0}
      aria-label="AmIzent Tech Services - Home"
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          onClick?.();
        }
      }}
    >
      <img
        src="/amizent-logo.svg"
        alt="AmIzent Tech Services - Your Friendly Agent to Upskill"
        className={`${dimensions} object-contain transition-opacity duration-200 group-hover:opacity-95`}
        loading="eager"
      />
    </div>
  );
};
