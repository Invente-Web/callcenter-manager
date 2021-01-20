import { Container, Col, Row } from "components";
import { MainLayout } from "components/layouts/main/main";

export default function Index() {
    return (
        <MainLayout>
            <Container>
                <Row>
                    <Col>
                        <h1>Hello World!</h1>
                    </Col>
                </Row>
            </Container>
        </MainLayout>
    )
}
