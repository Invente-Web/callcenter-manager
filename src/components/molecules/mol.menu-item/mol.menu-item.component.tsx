import { StyledLi } from './mol.menu-item.styles';
import Link from 'next/link';

export interface IMenuItem {
  to: string;
  children: React.ReactNode | string;
}

export const MenuItem: React.FC<IMenuItem> = ({ to, children }) => {
  return (
    <StyledLi>
      <Link href={to}>{children}</Link>
    </StyledLi>
  );
};
