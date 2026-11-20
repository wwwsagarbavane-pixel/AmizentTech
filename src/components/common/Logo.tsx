import React from 'react';

interface LogoProps {
  className?: string;
  variant?: 'navbar' | 'footer' | 'large';
  onClick?: () => void;
}

export const Logo: React.FC<LogoProps> = ({ className = '', variant = 'navbar', onClick }) => {
  // Exact client dimensions & sizing with strict proportions and transparent background
  const dimensions = {
    navbar: 'h-8 sm:h-9 md:h-10 w-auto',
    footer: 'h-9 sm:h-10 md:h-11 w-auto',
    large: 'h-11 sm:h-13 md:h-14 w-auto',
  }[variant];

  const logoSrc = variant === 'footer' ? '/amizent-logo-white.png' : '/amizent-logo.png';

  return (
    <div 
      className={`inline-flex items-center cursor-pointer select-none group transition-transform duration-200 active:scale-[0.98] ${className}`}
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
        src={logoSrc}
        alt="AmIzent Tech Services"
        className={`${dimensions} object-contain transition-opacity duration-200 group-hover:opacity-95`}
        loading="eager"
      />
    </div>
  );
};
