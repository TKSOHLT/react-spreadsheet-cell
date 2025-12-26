import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import SpreadsheetProvider from './context/SpreadsheetCellContext.tsx';
import Router from './router/router.tsx';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <SpreadsheetProvider>
      <Router />
    </SpreadsheetProvider>
  </StrictMode>
);
