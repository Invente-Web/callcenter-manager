import {
  Container,
  Col,
  Row,
  DashboardIndicators,
  DashboardCharts,
  PageHeader,
} from 'components';
import { MainLayout } from 'components/layouts/main/main';

export default function Index() {
  const pageTitle = "Dashboard";

  return (
    <MainLayout pageTitle={pageTitle}>
      <Container fluid>
        <Row>
          <Col>
            <PageHeader pageName="Dashboard" />
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
