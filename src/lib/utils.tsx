
import React from 'react';

export const renderHeroTitle = (title: string | React.ReactNode) => {
  if (typeof title !== 'string') return title;
  
  // Handle break without color change (using \\ or \n)
  const hasPipe = title.includes('|');
  const hasDoubleBackslash = title.includes('\\\\');
  
  if (hasPipe) {
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

  if (hasDoubleBackslash) {
    const parts = title.split('\\\\');
    return (
      <>
        {parts[0].trim()} <br />
        {parts.slice(1).join(' ')}
      </>
    );
  }
  
  // Handle newlines as breaks
  if (title.includes('\n')) {
    return (
      <>
        {title.split('\n').map((line, i) => (
          <React.Fragment key={i}>
            {line}
            {i < title.split('\n').length - 1 && <br />}
          </React.Fragment>
        ))}
      </>
    );
  }

  return <span dangerouslySetInnerHTML={{ __html: title }} />;
};
