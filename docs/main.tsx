import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import Router from '../docs/router/router.tsx';
import { SpreadsheetCellProvider } from '../src/context/SpreadsheetCellContext.tsx';
import './index.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <SpreadsheetCellProvider>
      <Router  />
    </SpreadsheetCellProvider>
  </StrictMode>
);
