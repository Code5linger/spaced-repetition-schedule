import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import SpacedRepetitionScheduler from './App.jsx';
import './style.css';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <SpacedRepetitionScheduler />
  </StrictMode>
);
