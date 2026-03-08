import React from 'react';
import * as LucideIcons from 'lucide-react';
import { Zap } from 'lucide-react';

export const renderHeroTitle = (title: string | React.ReactNode, baseColor: string = "text-white") => {
  if (typeof title !== 'string') return title;
  
  // Unified parser for |, \\, \n, literal \n, and ^
  // We use a more flexible regex for \n transitions to handle potential spaces
  const parts = title.split(/(\||\n|\\\\|\\n|\^)/);
  
  let isAccent = false;
  const renderedContent: React.ReactNode[] = [];
  let currentText = "";
  
  for (let i = 0; i < parts.length; i++) {
    const part = parts[i];
    
    // Check if part is a separator
    if (part === '|') {
      if (currentText) {
        renderedContent.push(
          <span key={`text-${i}`} className={isAccent ? "text-[#f99d1c]" : baseColor}>
            {formatQuotesToBold(currentText)}
          </span>
        );
      }
      renderedContent.push(<br key={`br-${i}`} />);
      isAccent = !isAccent;
      currentText = "";
    } else if (part === '^') {
      if (currentText) {
        renderedContent.push(
          <span key={`text-${i}`} className={isAccent ? "text-[#f99d1c]" : baseColor}>
            {formatQuotesToBold(currentText)}
          </span>
        );
      }
      isAccent = !isAccent;
      currentText = "";
    } else if (part === '\\\\' || part === '\n' || part === '\\n') {
      if (currentText) {
        renderedContent.push(
          <span key={`text-${i}`} className={isAccent ? "text-[#f99d1c]" : baseColor}>
            {formatQuotesToBold(currentText)}
          </span>
        );
      }
      renderedContent.push(<br key={`br-${i}`} />);
      currentText = "";
    } else {
      currentText += part;
    }
  }
  
  if (currentText) {
    renderedContent.push(
      <span key="text-final" className={isAccent ? "text-[#f99d1c]" : baseColor}>
        {formatQuotesToBold(currentText)}
      </span>
    );
  }

  if (renderedContent.length === 0) {
    return formatQuotesToBold(title);
  }

  return <>{renderedContent}</>;
};

export const renderDynamicIcon = (iconType: string, lucideName: string, imageObj: any, size: number = 32) => {
  const isImageType = String(iconType || "").toLowerCase().includes("image");
  const imageUrl = typeof imageObj === "string"
    ? imageObj
    : (imageObj?.mediaItemUrl || imageObj?.sourceUrl || imageObj?.node?.mediaItemUrl || imageObj?.node?.sourceUrl || imageObj?.url);

  if (isImageType && imageUrl) {
    return <img src={imageUrl} alt="icon" className="object-contain" style={{ width: size, height: size }} />;
  }

  const IconComponent = (LucideIcons as any)[lucideName] || Zap;
  return <IconComponent size={size} />;
};

export const formatQuotesToBold = (text: string) => {
  if (!text) return text;
  // Support straight quotes, smart quotes, and single quotes
  // We split by quotes but now REMOVE them when bolding
  const parts = text.split(/(["“'‘].*?["”'’])/g);
  return parts.map((part, i) => {
    if (i % 2 === 1) {
      // Remove first and last characters (the quotes)
      const content = part.slice(1, -1);
      return <span key={i} className="font-bold">{content}</span>;
    }
    return part;
  });
};
