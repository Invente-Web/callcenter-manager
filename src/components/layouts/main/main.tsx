import { Header, Menu } from 'components';

interface IMainLayout {
  children: React.ReactNode;
}

export const MainLayout: React.FC<IMainLayout> = ({ children }) => {
  return (
    <>
      <Header />
      <Menu />
      <div style={{ marginLeft: '15vw', zIndex: 0 }}>{children}</div>
    </>
  );
};
