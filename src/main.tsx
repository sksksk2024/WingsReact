import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom'; // Import BrowserRouter
import App from './App.tsx';
import './index.css';

const rootElement = document.getElementById('root');

if (rootElement) {
  createRoot(rootElement).render(
    <StrictMode>
      <BrowserRouter>  {/* Wrap the app in BrowserRouter */}
        <App />
      </BrowserRouter>
    </StrictMode>,
  );
} else {
  console.error("Root element not found!");
}