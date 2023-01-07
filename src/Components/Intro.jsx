import {Col, Container, Row} from 'react-bootstrap';

const IntroApp = () => {
    return(
        <div>
            <Container>
                <Col>
                    <Row>
                        <div className='title' id='home'>My News Private</div>
                    </Row>
                </Col>
            </Container>
        </div>
    );
}

export default IntroApp