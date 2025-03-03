import React from 'react';

export interface TextProps {
  text: string;
}

const SectionTitle: React.FC<TextProps> = ({ text }) => {
  return (
    <div className="text-2xl font-bold mb-8 text-center sm:text-left">
      <span>{text}</span>
    </div>
  );
};

export default SectionTitle;
