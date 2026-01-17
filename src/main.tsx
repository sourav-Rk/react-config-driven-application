import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { AppConfigProvider } from "./context/AppConfigContext";
import { ProductFiltersProvider } from "./context/ProductFiltersContext";
import { ThemeProvider } from "./context/ThemeContext.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <AppConfigProvider>
      <ThemeProvider>
        <ProductFiltersProvider>
          <App />
        </ProductFiltersProvider>
      </ThemeProvider>
    </AppConfigProvider>
  </StrictMode>
);
