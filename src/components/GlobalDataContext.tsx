"use client";

import React, { createContext, useContext } from 'react';

interface GlobalDataContextType {
  globalSettings: any;
}

const GlobalDataContext = createContext<GlobalDataContextType | undefined>(undefined);

export function GlobalDataProvider({ 
  children, 
  value 
}: { 
  children: React.ReactNode; 
  value: GlobalDataContextType 
}) {
  return (
    <GlobalDataContext.Provider value={value}>
      {children}
    </GlobalDataContext.Provider>
  );
}

export function useGlobalData() {
  const context = useContext(GlobalDataContext);
  return context;
}
