import { Col, DefaultCard, Row } from 'components';
import { Colors } from 'consts';
import { ChartData, Line } from 'react-chartjs-2';

export const DashboardCharts: React.FC<any> = () => {
  const hourLabels = [...Array(24)].map(
    (_value, index) => `${String(index).length === 1 ? `0${index}` : index}:00`
  );

  const randomValues = () =>
    [...Array(24)].map(() => Math.floor(Math.random() * 11));

  const mockEntrantesSaintes = {
    labels: hourLabels,
    datasets: [
      {
        label: 'Entrantes',
        borderColor: Colors.greenSea,
        // backgroundColor: `${Colors.greenSea}50`,
        backgroundColor: 'transparent',
        data: randomValues(),
      },
      {
        label: 'Saíntes',
        borderColor: Colors.red,
        // backgroundColor: `${Colors.red}50`,
        backgroundColor: 'transparent',
        data: randomValues(),
      },
    ],
  };

  const mockAbandonadasNaoAtendidas = {
    labels: hourLabels,
    datasets: [
      {
        label: 'Abandonadas',
        borderColor: Colors.sunFlowers,
        // backgroundColor: `${Colors.sunFlowers}50`,
        backgroundColor: 'transparent',
        data: randomValues(),
      },
      {
        label: 'Não Atendidas',
        borderColor: Colors.red,
        // backgroundColor: `${Colors.red}50`,
        backgroundColor: 'transparent',
        data: randomValues(),
      },
    ],
  };

  const mockMaxFila = {
    labels: hourLabels,
    datasets: [
      {
        label: 'Max de ligações em Fila',
        borderColor: Colors.sunFlowers,
        // backgroundColor: `${Colors.sunFlowers}50`,
        backgroundColor: 'transparent',
        data: randomValues(),
      },
    ],
  };

  const mockDisponibilidadeAgentes: ChartData<any> = {
    labels: hourLabels,
    datasets: [
      {
        label: 'Agentes Logados',
        borderColor: Colors.greenSea,
        // backgroundColor: `${Colors.greenSea}50`,
        backgroundColor: 'transparent',
        data: randomValues(),
      },
      {
        label: 'Agentes em Pausa',
        borderColor: Colors.sunFlowers,
        // backgroundColor: `${Colors.sunFlowers}50`,
        backgroundColor: 'transparent',
        data: randomValues(),
      },
    ],
  };

  return (
    <Row>
      <Col xs={12} md={6}>
        <DefaultCard>
          <h3>Ligações entrentes e saíntes por hora</h3>
          <Line data={mockEntrantesSaintes} />
        </DefaultCard>
      </Col>
      <Col xs={12} md={6}>
        <DefaultCard>
          <h3>Ligações abandonadas e não atendidas por hora</h3>
          <Line data={mockAbandonadasNaoAtendidas} />
        </DefaultCard>
      </Col>
      <Col xs={12} md={6}>
        <DefaultCard>
          <h3>Máximo de ligações em fila por hora</h3>
          <Line data={mockMaxFila} />
        </DefaultCard>
      </Col>
      <Col xs={12} md={6}>
        <DefaultCard>
          <h3>Disponibilidade de agentes por hora</h3>
          <Line data={mockDisponibilidadeAgentes} />
        </DefaultCard>
      </Col>
    </Row>
  );
};
