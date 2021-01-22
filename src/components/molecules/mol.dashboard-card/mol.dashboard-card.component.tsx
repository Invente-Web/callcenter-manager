import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { faPhone } from '@fortawesome/free-solid-svg-icons';
import { Icon } from 'components';
import { Colors } from 'consts';
import { formatSecondsInHours } from 'helpers';
import { CardWrapper } from './mol.dashboard-card.styles';

type dataTypeTypes = 'text' | 'time';
interface IDashboardCard {
  value: string;
  text: string;
  dataType?: dataTypeTypes;
  color?: string;
  icon?: IconProp;
}

export const DashboardCard: React.FC<IDashboardCard> = ({
  text,
  value,
  dataType,
  color,
  icon,
}: IDashboardCard) => {
  const formatedValue =
    dataType === 'time' ? formatSecondsInHours(Number(value)) : value;

  return (
    <CardWrapper backgroundColor={color}>
      <div>
        <h1>{formatedValue}</h1>
        <div>{text}</div>
      </div>
      {icon && (
        <div>
          <Icon icon={icon} className="dashboard-icon" />
        </div>
      )}
    </CardWrapper>
  );
};

DashboardCard.defaultProps = {
  dataType: 'text',
  color: Colors.clouds,
  icon: faPhone,
};
