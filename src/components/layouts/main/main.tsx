import { Header, Menu, GoogleFonts } from 'components';
import { getEnv } from 'helpers';
import Head from 'next/head'

interface IMainLayout {
  pageTitle?: string;
  children: React.ReactNode;
}

export const MainLayout: React.FC<IMainLayout> = ({ pageTitle, children }) => {
  const appName = getEnv('APP_NAME');
  const title = pageTitle ? `${pageTitle} - ${appName}` : appName;
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta property="og:title" content={title} key="title" />
        <GoogleFonts />
      </Head>
      <Header />
      <Menu />
      <div style={{ marginLeft: '15vw', zIndex: 0 }}>{children}</div>
    </>
  );
};
