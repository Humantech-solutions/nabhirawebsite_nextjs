
import React from 'react';

export const renderHeroTitle = (title: string | React.ReactNode) => {
  if (typeof title !== 'string') return title;
  
  // Unified parser for |, \\, and \n
  // Rules:
  // 1. Any of these separators cause a line break (<br />)
  // 2. | toggles the accent color (orange)
  // 3. \\ and \n maintain the current color but still break the line
  
  // Use regex to split by any of the separators while keeping them in the result
  const parts = title.split(/(\||\n|\\\\)/);
  
  let isAccent = false;
  const renderedContent: React.ReactNode[] = [];
  
  let currentText = "";
  
  for (let i = 0; i < parts.length; i++) {
    const part = parts[i];
    
    if (part === '|') {
      // Toggle accent and force break
      if (currentText.trim()) {
        renderedContent.push(
          <span key={`text-${i}`} className={isAccent ? "text-[#f99d1c]" : "text-white"}>
            {currentText}
          </span>
        );
      }
      renderedContent.push(<br key={`br-${i}`} />);
      isAccent = !isAccent;
      currentText = "";
    } else if (part === '\\\\' || part === '\n') {
      // Maintain accent and force break
      if (currentText.trim()) {
        renderedContent.push(
          <span key={`text-${i}`} className={isAccent ? "text-[#f99d1c]" : "text-white"}>
            {currentText}
          </span>
        );
      }
      renderedContent.push(<br key={`br-${i}`} />);
      currentText = "";
    } else {
      currentText += part;
    }
  }
  
  // Push remaining text
  if (currentText.trim()) {
    renderedContent.push(
      <span key="text-final" className={isAccent ? "text-[#f99d1c]" : "text-white"}>
        {currentText}
      </span>
    );
  }

  // If no separators were found, fallback to dangerouslySetInnerHTML for backwards compatibility with raw HTML
  if (renderedContent.length === 0) {
    return <span dangerouslySetInnerHTML={{ __html: title }} />;
  }

  return <>{renderedContent}</>;
};
