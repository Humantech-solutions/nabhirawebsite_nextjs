import React from 'react';
import * as LucideIcons from 'lucide-react';
import { Zap } from 'lucide-react';

export const renderHeroTitle = (title: string | React.ReactNode) => {
  if (typeof title !== 'string') return title;
  
  // Unified parser for |, \\, \n, and ^
  // Rules:
  // 1. |, \\, \n cause a line break (<br />)
  // 2. | and ^ toggle the accent color (orange)
  // 3. \\ and \n maintain the current color but still break the line
  // 4. ^ toggles the accent color WITHOUT breaking the line
  
  // Use regex to split by any of the separators while keeping them in the result
  const parts = title.split(/(\||\n|\\\\|\^)/);
  
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
    } else if (part === '^') {
      // Toggle accent WITHOUT break
      if (currentText.trim()) {
        renderedContent.push(
          <span key={`text-${i}`} className={isAccent ? "text-[#f99d1c]" : "text-white"}>
            {currentText}
          </span>
        );
      }
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
  const parts = text.split(/"(.*?)"/g);
  return parts.map((part, i) => i % 2 === 1 ? <span key={i} className="font-bold">{part}</span> : part);
};
