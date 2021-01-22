import { faHome, faSignOutAlt } from '@fortawesome/free-solid-svg-icons';
import { NavbarItem, Icon } from 'components';
import { routes } from 'consts';
import { getEnv } from 'helpers';
import { Brand, NavbarItemsUl, NavbarStyled } from './mol.header-nav.styles';

export const HeaderNavbar: React.FC<any> = () => {
  const appName = getEnv('APP_NAME');

  return (
    <NavbarStyled>
      <Brand>{appName}</Brand>
      <NavbarItemsUl>
        <NavbarItem routeTo={routes.home}>
          <Icon icon={faHome} size="2x" />
        </NavbarItem>
        <NavbarItem routeTo={routes.userRoutes.logout}>
          <Icon icon={faSignOutAlt} size="2x" />
        </NavbarItem>
      </NavbarItemsUl>
    </NavbarStyled>
  );
};

export default HeaderNavbar;
