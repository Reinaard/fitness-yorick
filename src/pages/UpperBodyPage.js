import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function UpperBodyPage() {
  return (
    <>
      <Container fluid={true}>
        <h2 className='titel'>UpperBody exercises</h2>
        <Row className="exercise-grid">
          <Col sm>
            <h3>Arm curl</h3>
          </Col>
          <Col sm>
            <h3>Push up</h3>
          </Col>
          <Col sm>
            <h3>Chest press</h3>
          </Col>
          <Col sm>
            <h3>Incline press</h3>
          </Col>
        </Row>
        <Row className="exercise-grid">
          <Col sm>
            <h3>Arm curl</h3>
          </Col>
          <Col sm>
            <h3>Push up</h3>
          </Col>
          <Col sm>
            <h3>Chest press</h3>
          </Col>
          <Col sm>
            <h3>Incline press</h3>
          </Col>
        </Row>
        <Row className="exercise-grid">
          <Col sm>
            <h3>Arm curl</h3>
          </Col>
          <Col sm>
            <h3>Push up</h3>
          </Col>
          <Col sm>
            <h3>Chest press</h3>
          </Col>
          <Col sm>
            <h3>Incline press</h3>
          </Col>
        </Row>
     </Container>    
    </>
  );
}

export default UpperBodyPage;