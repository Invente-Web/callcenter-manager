import {
  Container,
  Col,
  Row,
  DashboardIndicators,
  DashboardCharts,
} from 'components';
import { MainLayout } from 'components/layouts/main/main';

export default function Index() {
  return (
    <MainLayout>
      <Container fluid>
        <Row>
          <Col>
            <h1>Dashboard</h1>
          </Col>
        </Row>
        <Row>
          <Col xs={12} md={4}>
            <DashboardIndicators />
          </Col>
          <Col xs={12} md={8}>
            <DashboardCharts />
          </Col>
        </Row>
      </Container>
    </MainLayout>
  );
}
