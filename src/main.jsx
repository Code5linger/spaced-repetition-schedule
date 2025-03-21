import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import SpacedRepetitionScheduler from './App.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <SpacedRepetitionScheduler />
  </StrictMode>
);
