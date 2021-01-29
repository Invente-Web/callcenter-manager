import { Col, Row, DashboardCard } from 'components';
import { Colors } from 'consts';
import {
  faClock,
  faHeadset,
  faPauseCircle,
  faPhone,
  faPhoneSlash,
  faSignInAlt,
  faStopwatch,
  faUsers,
} from '@fortawesome/free-solid-svg-icons';

export const DashboardIndicators: React.FC = () => (
  <>
    <Row>
      <Col xs={12} md={6}>
        <DashboardCard
          text="Total Calls"
          value="10"
          color={Colors.carrot}
          icon={faPhone}
        />
      </Col>
      <Col xs={12} md={6}>
        <DashboardCard
          text="Total Callers"
          value="10"
          color={Colors.peterRiver}
          icon={faHeadset}
        />
      </Col>
    </Row>
    <Row>
      <Col xs={12} md={6}>
        <DashboardCard
          text="Total Avaiable Agents"
          value="10"
          color={Colors.nephritis}
          icon={faUsers}
        />
      </Col>
      <Col xs={12} md={6}>
        <DashboardCard
          text="Total Loggedin Agents"
          value="10"
          color={Colors.nephritis}
          icon={faSignInAlt}
        />
      </Col>
    </Row>
    <Row>
      <Col xs={12} md={6}>
        <DashboardCard
          text="Total Abandoned Calls"
          value="10"
          color={Colors.pomegranate}
          icon={faPhoneSlash}
        />
      </Col>
      <Col xs={12} md={6}>
        <DashboardCard
          text="Avg Hold Time"
          value="600"
          dataType="time"
          color={Colors.orange}
          icon={faPauseCircle}
        />
      </Col>
    </Row>
    <Row>
      <Col xs={12} md={6}>
        <DashboardCard
          text="Avg Talk Time"
          value="600"
          dataType="time"
          color={Colors.peterRiver}
          icon={faStopwatch}
        />
      </Col>
      <Col xs={12} md={6}>
        <DashboardCard
          text="Max Waiting Calls"
          value="10"
          color={Colors.orange}
          icon={faClock}
        />
      </Col>
    </Row>
  </>
);
