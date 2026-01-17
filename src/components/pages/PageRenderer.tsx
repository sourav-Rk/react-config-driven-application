import { ComponentResolver } from '../resolver/ComponentResolver';
import { PageLayout } from '../layout/PageLayout';
import { usePageConfig } from '../../hooks/useAppConfig';
import { useTheme } from '../../hooks/useTheme';
import type { ComponentConfig } from '../../config/types';

interface PageRendererProps {
  pageId: string;
}

export function PageRenderer({ pageId }: PageRendererProps) {
  const pageConfig = usePageConfig(pageId);
  const { theme } = useTheme();

  if (!pageConfig) {
    return (
      <div className="text-center py-8" style={{ color: theme.colors.primary }}>
        Page not found: {pageId}
      </div>
    );
  }

  return (
    <PageLayout layout={pageConfig.layout}>
      {pageConfig.components.map((componentConfig: ComponentConfig, index: number) => (
        <ComponentResolver key={componentConfig.id || index} config={componentConfig} />
      ))}
    </PageLayout>
  );
}

