import React from 'react';

interface SchemaProps {
  jsonLd: Record<string, any>;
}

export const Schema: React.FC<SchemaProps> = ({ jsonLd }) => {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
};
