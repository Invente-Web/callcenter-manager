import { INavbarItem } from 'interfaces/navbar';
import { useRouter } from 'next/router';
import { NavbarItemLi } from './atm.header-nav-item.styles';

export const NavbarItem: React.FC<INavbarItem> = ({ children, routeTo }) => {
  const router = useRouter();

  const handleClick = () => {
    router.push(routeTo);
  };

  return <NavbarItemLi onClick={handleClick}>{children}</NavbarItemLi>;
};
