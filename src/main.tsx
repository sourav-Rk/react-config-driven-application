import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.tsx';
import { AppConfigProvider } from './context/AppConfigContext';
import { ProductFiltersProvider } from './context/ProductFiltersContext';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <AppConfigProvider>
      <ProductFiltersProvider>
        <App />
      </ProductFiltersProvider>
    </AppConfigProvider>
  </StrictMode>,
);
