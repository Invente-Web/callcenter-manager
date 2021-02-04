import { Col, DefaultCard, Row, H3 } from 'components';
import { Colors } from 'consts';
import { ChartData, Line } from 'react-chartjs-2';

export const DashboardCharts: React.FC<any> = () => {
  const options = {
    scales: {
      xAxes: [{
        gridLines: {
          display: false,
        }
      }]
    },
    tooltips: {
      mode: 'label',
    }
  }

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
        borderWidth: 2,
        pointBorderWidth: 5,
        pointHoverRadius: 5,
        data: randomValues(),
      },
      {
        label: 'Saíntes',
        borderColor: Colors.red,
        // backgroundColor: `${Colors.red}50`,
        backgroundColor: 'transparent',
        borderWidth: 2,
        pointBorderWidth: 5,
        pointHoverRadius: 5,
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
        borderWidth: 2,
        pointBorderWidth: 5,
        pointHoverRadius: 5,
        data: randomValues(),
      },
      {
        label: 'Não Atendidas',
        borderColor: Colors.red,
        // backgroundColor: `${Colors.red}50`,
        backgroundColor: 'transparent',
        borderWidth: 2,
        pointBorderWidth: 5,
        pointHoverRadius: 5,
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
        borderWidth: 2,
        pointBorderWidth: 5,
        pointHoverRadius: 5,
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
        borderWidth: 2,
        pointBorderWidth: 5,
        pointHoverRadius: 5,
        data: randomValues(),
      },
      {
        label: 'Agentes em Pausa',
        borderColor: Colors.sunFlowers,
        // backgroundColor: `${Colors.sunFlowers}50`,
        backgroundColor: 'transparent',
        borderWidth: 2,
        pointBorderWidth: 5,
        pointHoverRadius: 5,
        data: randomValues(),
      },
    ],
  };

  return (
    <Row>
      <Col xs={12} md={6}>
        <DefaultCard>
          <H3 style={{ textAlign: 'center' }}>Ligações entrentes e saíntes por hora</H3>
          <Line data={mockEntrantesSaintes} options={options} />
        </DefaultCard>
      </Col>
      <Col xs={12} md={6}>
        <DefaultCard>
          <H3 style={{ textAlign: 'center' }}>Ligações abandonadas e não atendidas por hora</H3>
          <Line data={mockAbandonadasNaoAtendidas} options={options} />
        </DefaultCard>
      </Col>
      <Col xs={12} md={6}>
        <DefaultCard>
          <H3 style={{ textAlign: 'center' }}>Máximo de ligações em fila por hora</H3>
          <Line data={mockMaxFila} options={options} />
        </DefaultCard>
      </Col>
      <Col xs={12} md={6}>
        <DefaultCard>
          <H3 style={{ textAlign: 'center' }}>Disponibilidade de agentes por hora</H3>
          <Line data={mockDisponibilidadeAgentes} options={options} />
        </DefaultCard>
      </Col>
    </Row>
  );
};
