import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useAppConfig } from './hooks/useAppConfig';
import { Navigation } from './components/layout/Navigation';
import { PageRenderer } from './components/pages/PageRenderer';
import { useTheme } from './hooks/useTheme';

function App() {
  const config = useAppConfig();
  useTheme(); // Initialize theme

  return (
    <Router>
      <Navigation />
      <Routes>
        {Object.entries(config.pages).map(([pageId, pageConfig]) => (
          <Route
            key={pageId}
            path={pageConfig.route}
            element={<PageRenderer pageId={pageId} />}
          />
        ))}
      </Routes>
    </Router>
  );
}

export default App;
