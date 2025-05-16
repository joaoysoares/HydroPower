import React, { ReactNode } from 'react';
import { DivideIcon as LucideIcon } from 'lucide-react';

interface CardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  color?: string;
  className?: string;
}

const Card: React.FC<CardProps> = ({ 
  title, 
  description, 
  icon: Icon,
  color = 'text-primary-500',
  className = ''
}) => {
  return (
    <div className={`card group p-6 hover:translate-y-[-5px] ${className}`}>
      <div className={`${color} mb-4`}>
        <Icon size={40} strokeWidth={1.5} />
      </div>
      <h3 className="heading-md mb-3">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

export default Card;