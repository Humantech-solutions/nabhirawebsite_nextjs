"use client";
import Image from "next/image";

import React, { useState } from 'react'

const ERROR_IMG_SRC =
  'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iODgiIGhlaWdodD0iODgiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgc3Ryb2tlPSIjMDAwIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBvcGFjaXR5PSIuMyIgZmlsbD0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIzLjciPjxyZWN0IHg9IjE2IiB5PSIxNiIgd2lkdGg9IjU2IiBoZWlnaHQ9IjU2IiByeD0iNiIvPjxwYXRoIGQ9Im0xNiA1OCAxNi0xOCAzMiAzMiIvPjxjaXJjbGUgY3g9IjUzIiBjeT0iMzUiIHI9IjciLz48L3N2Zz4KCg=='

export function ImageWithFallback(props: any) {
  const [didError, setDidError] = useState(false);

  const handleError = () => {
    setDidError(true);
  };

  const { src, alt, style, className, fill, ...rest } = props;
  const currentSrc = didError ? ERROR_IMG_SRC : (src || ERROR_IMG_SRC);
  
  // Detect if we need 'fill' logic
  const isStringSrc = typeof currentSrc === 'string';
  const hasDimensions = rest.width && rest.height;
  const useFill = fill || (isStringSrc && !hasDimensions);

  if (!useFill) {
    return (
      <Image
        {...rest}
        src={currentSrc}
        alt={alt || "image"}
        className={className}
        style={style}
        onError={handleError}
      />
    );
  }

  // If using fill, we wrap in a relative container to ensure it shows up
  // next/image 'fill' requires a relative/absolute/fixed parent.
  return (
    <div 
      className={`relative overflow-hidden ${className || ''}`} 
      style={{ ...style, minHeight: style?.height || style?.minHeight || '100%', minWidth: style?.width || style?.minWidth || '100%' }}
    >
      <Image
        src={currentSrc}
        alt={alt || "image"}
        onError={handleError}
        fill
        style={{ objectFit: 'cover', ...style }}
        {...rest}
      />
    </div>
  );
}
