import { RouterProvider } from 'next/link';
import { router } from './routes';

// Forcing rebuild after Cloud suite updates
// Rebuild: AI Engineering page update
// Rebuild: Data Analytics Solution page added
function App() {
  return <RouterProvider router={router} />;
}

export default App;