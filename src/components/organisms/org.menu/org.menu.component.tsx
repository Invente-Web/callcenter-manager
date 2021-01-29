import { IMenuItem } from 'components';
import { MenuItem } from 'components/molecules';
import { AsideMenuWrapper, StyledUl } from './org.menu.styles';

export const Menu: React.FC<any> = () => {
  const menuItems: IMenuItem[] = [
    { to: '/', children: 'Dashboard' },
    { to: '/', children: 'Histórico de Ligações' },
    { to: '/', children: 'Relatórios' },
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
