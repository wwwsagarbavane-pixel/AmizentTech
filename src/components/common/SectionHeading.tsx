import React from 'react';

interface SectionHeadingProps {
  badge?: string;
  title: string;
  highlightedText?: string;
  subtitle?: string;
  align?: 'left' | 'center';
  className?: string;
  size?: 'normal' | 'large';
}

export const SectionHeading: React.FC<SectionHeadingProps> = ({
  badge,
  title,
  highlightedText,
  subtitle,
  align = 'left',
  className = '',
  size = 'normal',
}) => {
  const alignClasses = align === 'center' ? 'text-center mx-auto items-center' : 'text-left items-start';
  const maxWidth = align === 'center' ? 'max-w-3xl' : 'max-w-2xl';

  return (
    <div className={`flex flex-col ${alignClasses} ${maxWidth} ${className}`}>
      {badge && (
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold tracking-wider uppercase text-[#12457F] bg-[#DCE7F2]/80 border border-[#C8D7E8] mb-3.5">
          <span className="w-1.5 h-1.5 rounded-full bg-[#1B58A6] animate-pulse"></span>
          {badge}
        </div>
      )}
      
      <h2 className={`${size === 'large' ? 'text-3xl md:text-5xl' : 'text-2xl md:text-4xl'} font-extrabold text-[#12457F] tracking-tight leading-[1.18] mb-3.5`}>
        {title}
        {highlightedText && (
          <span className="block text-[#1B58A6] font-extrabold mt-1">
            {highlightedText}
          </span>
        )}
      </h2>

      {subtitle && (
        <p className="text-[#4A607A] text-base md:text-lg leading-relaxed">
          {subtitle}
        </p>
      )}
    </div>
  );
};
