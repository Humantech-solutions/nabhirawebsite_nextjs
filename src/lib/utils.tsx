
import React from 'react';

export const renderHeroTitle = (title: string | React.ReactNode) => {
  if (typeof title !== 'string') return title;
  
  if (title.includes('|')) {
    const parts = title.split('|');
    return (
      <>
        {parts[0].trim()} <br />
        {parts.slice(1).map((part, index) => (
          <span 
            key={index} 
            className={index % 2 === 0 ? "text-[#f99d1c]" : "text-white"}
          >
            {index === 0 ? "" : " "}{part.trim()}
          </span>
        ))}
      </>
    );
  }
  return <span dangerouslySetInnerHTML={{ __html: title }} />;
};
