import { faHome, faSignOutAlt } from "@fortawesome/free-solid-svg-icons";
import { NavbarItem, Icon } from "components";
import { routes } from "consts";
import { Brand, NavbarItemsUl, NavbarStyled } from "./mol.header-nav.styles";

export const HeaderNavbar: React.FC<any> = () => {
  return (
    <NavbarStyled>
      <Brand>Callcenter Manager</Brand>
      <NavbarItemsUl>
        <NavbarItem routeTo={routes.home}><Icon icon={faHome} size="2x" /></NavbarItem>
        <NavbarItem routeTo={routes.userRoutes.logout}><Icon icon={faSignOutAlt} size="2x" /></NavbarItem>
      </NavbarItemsUl>
    </NavbarStyled>
  );
}