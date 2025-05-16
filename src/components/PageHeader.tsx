import React from 'react';

interface PageHeaderProps {
  title: string;
  subtitle?: string;
  className?: string;
}

const PageHeader: React.FC<PageHeaderProps> = ({ 
  title, 
  subtitle,
  className = ''
}) => {
  return (
    <div className={`text-center mb-12 ${className}`}>
      <h1 className="heading-xl mb-4 text-center">{title}</h1>
      {subtitle && (
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">{subtitle}</p>
      )}
    </div>
  );
};

export default PageHeader;