import { Header } from "components";

export const MainLayout: React.FC<any> = ({ children }) => {
  return (
    <>
      <Header />
      {children}
    </>
  );
}