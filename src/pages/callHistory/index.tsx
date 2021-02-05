import {
  Container,
  Col,
  Row,
  PageHeader,
} from 'components';
import { MainLayout } from 'components/layouts/main/main';

export default function Index() {
  const pageTitle = "Histórico de Ligações";

  return (
    <MainLayout pageTitle={pageTitle}>
      <Container>
        <Row>
          <Col>
            <PageHeader pageName="Histórico de Ligações" />
          </Col>
        </Row>
        <Row>
          <Col>
            <label htmlFor="startDate">Data Inicial</label><br />
            <input type="datetime-local" id="startDate" name="startDate" />
          </Col>
          <Col>
            <label htmlFor="startDate">Data Final</label><br />
            <input type="datetime-local" id="endDate" name="endDate" />
          </Col>
          <Col>
            <label htmlFor="queue">Fila de Ramais</label><br />
            <select id="queue" name="queue">
              <option value="queue1">queue 1</option>
              <option value="queue2">queue 2</option>
              <option value="queue3">queue 3</option>
            </select>
          </Col>
          <Col>
            <label htmlFor="extension">Ramais</label><br />
            <select id="extension" name="extension">
              <option value="extension1">extension 1</option>
              <option value="extension2">extension 2</option>
              <option value="extension3">extension 3</option>
            </select>
          </Col>
          <Col>
            <label htmlFor="type">Tipo de ligação</label><br />
            <select id="type" name="type">
              <option value="incoming">entrantes</option>
              <option value="outgoing">saíntes</option>
            </select>
          </Col>
          <Col>
            <label htmlFor="status">Status</label><br />
            <select id="status" name="status">
              <option value="awsered">Atendida</option>
              <option value="notAnswered">Não atendida</option>
            </select>
          </Col>
          <Col>
            <br />
            <button type="button">Procurar</button>
          </Col>
        </Row>
      </Container>
    </MainLayout >
  );
}
