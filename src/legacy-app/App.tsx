"use client";

import React from 'react';
import { RouterProvider } from 'react-router';
import { router } from './routes';

// Forcing rebuild after Cloud suite updates
// Rebuild: AI Engineering page update
// Rebuild: Data Analytics Solution page added
// Rebuild: Route structure consolidated and file extensions updated
// Rebuild: Triggering fresh compilation to resolve loadModule error
function App() {
  // Final functional change to trigger re-compilation
  return <RouterProvider router={router} />;
}

export default App;