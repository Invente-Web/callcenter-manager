import { IMenuItem } from 'components';
import { MenuItem } from 'components/molecules';
import { routes } from 'consts';
import { AsideMenuWrapper, StyledUl } from './org.menu.styles';

export const Menu: React.FC<any> = () => {
  const menuItems: IMenuItem[] = [
    { to: routes.dashboard, children: 'Dashboard' },
    { to: routes.callHistory, children: 'Histórico de Ligações' },
    { to: routes.callsReports, children: 'Relatórios de Ligações' },
    { to: '/', children: 'Usuários' },
    { to: '/', children: 'Configurações' },
    { to: '/user/logout', children: 'Sair' },
  ]
  return <AsideMenuWrapper>
    <StyledUl>
      {menuItems.map((item, index) => <MenuItem key={index} to={item.to}>{item.children}</MenuItem>)}
    </StyledUl>
  </AsideMenuWrapper>;
};
