import { Container, Col, Row, DashboardIndicators } from 'components';
import { MainLayout } from 'components/layouts/main/main';

export default function Index() {
  return (
    <MainLayout>
      <Container>
        <Row>
          <Col>
            <h1>Dashboard</h1>
          </Col>
        </Row>
        <DashboardIndicators />
      </Container>
    </MainLayout>
  );
}
