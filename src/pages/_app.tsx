import type { AppProps } from 'next/app';
import { gridTheme, styledTheme } from 'consts';
import { GridThemeProvider, BaseCSS } from 'styled-bootstrap-grid';
import { ThemeProvider } from 'styled-components';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider
      theme={styledTheme}
    >
      <GridThemeProvider
        gridTheme={gridTheme}
      >
        <>
          <BaseCSS />
          <Component {...pageProps} />
        </>
      </GridThemeProvider>
    </ThemeProvider>
  );
}

export default MyApp;
