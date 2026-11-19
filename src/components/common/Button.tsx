import React from 'react';
import { ArrowRight } from 'lucide-react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'ghost' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  withArrow?: boolean;
  children: React.ReactNode;
  icon?: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  size = 'md',
  withArrow = false,
  children,
  icon,
  className = '',
  ...props
}) => {
  const baseStyles = 'inline-flex items-center justify-center font-semibold rounded-xl transition-all duration-200 select-none focus:outline-none focus:ring-2 focus:ring-[#1B58A6]/40 focus:ring-offset-2 active:scale-[0.98] disabled:opacity-50 disabled:pointer-events-none cursor-pointer';

  const sizeStyles = {
    sm: 'text-xs px-3.5 py-2 gap-1.5',
    md: 'text-sm px-5 py-2.5 gap-2',
    lg: 'text-base px-6 py-3.5 gap-2.5',
  }[size];

  const variantStyles = {
    primary: 'bg-[#1B58A6] text-white hover:bg-[#154583] shadow-md hover:shadow-lg shadow-[#1B58A6]/20 border border-[#1B58A6]',
    secondary: 'bg-white text-[#12457F] border border-[#C8D7E8] hover:border-[#1B58A6] hover:text-[#1B58A6] hover:bg-[#F8FBFF] shadow-sm',
    outline: 'bg-transparent text-[#12457F] border border-[#C8D7E8] hover:border-[#1B58A6] hover:text-[#1B58A6] hover:bg-[#DCE7F2]/40',
    ghost: 'bg-transparent text-[#4A607A] hover:text-[#12457F] hover:bg-[#DCE7F2]/50',
  }[variant];

  return (
    <button
      className={`${baseStyles} ${sizeStyles} ${variantStyles} ${className}`}
      {...props}
    >
      {icon && <span className="shrink-0">{icon}</span>}
      <span>{children}</span>
      {withArrow && (
        <ArrowRight className="w-4 h-4 shrink-0 transition-transform duration-200 group-hover:translate-x-0.5" />
      )}
    </button>
  );
};
