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

export const formatEventDate = (dateString: string) => {
  if (!dateString) return "";
  try {
    const date = new Date(dateString);
    if (isNaN(date.getTime())) return dateString;
    return date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  } catch (e) {
    return dateString;
  }
};

export const formatEventRange = (start: string, end: string) => {
  if (!start) return "";
  if (!end || start.split('T')[0] === end.split('T')[0]) {
    return formatEventDate(start);
  }

  const startDate = new Date(start);
  const endDate = new Date(end);

  if (isNaN(startDate.getTime()) || isNaN(endDate.getTime())) {
    return `${start} - ${end}`;
  }

  const sMonth = startDate.toLocaleString('en-US', { month: 'long' });
  const eMonth = endDate.toLocaleString('en-US', { month: 'long' });
  const sYear = startDate.getFullYear();
  const eYear = endDate.getFullYear();
  const sDay = startDate.getDate();
  const eDay = endDate.getDate();

  if (sMonth === eMonth && sYear === eYear) {
    return `${sMonth} ${sDay}-${eDay}, ${sYear}`;
  }

  return `${formatEventDate(start)} - ${formatEventDate(end)}`;
};

/**
 * Helper to check if an ACF component (object) has any populated fields
 */
function isACFObjectPopulated(obj: any): boolean {
  if (obj === null || obj === undefined) return false;
  if (typeof obj !== 'object') return obj !== "";
  
  for (const key of Object.keys(obj)) {
    const val = obj[key];
    if (val !== null && val !== undefined && val !== "" && (!Array.isArray(val) || val.length > 0)) {
      if (typeof val === 'object' && !Array.isArray(val)) {
        if (isACFObjectPopulated(val)) return true;
      } else {
        return true;
      }
    }
  }
  return false;
}

/**
 * Component-level merge for ACF data.
 * If a top-level component (like heroSlides or limitlessTogether) is populated on the page,
 * it completely overrides the fallback component. It does NOT merge individual fields.
 */
export function mergeACFData(pageData: any, fallbackData: any): any {
  if (pageData === null || pageData === undefined) return fallbackData;
  if (fallbackData === null || fallbackData === undefined) return pageData;
  
  const result = { ...fallbackData };
  
  for (const key of Object.keys(pageData)) {
    const pageVal = pageData[key];
    
    // If the component has any data, we use it entirely, ignoring the fallback's sub-fields.
    if (isACFObjectPopulated(pageVal)) {
      result[key] = pageVal;
    }
  }
  
  return result;
}
