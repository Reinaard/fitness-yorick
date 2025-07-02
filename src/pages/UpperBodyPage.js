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
          <Col sm className="btn-container">
            <h3>Lat Pulldown</h3>
            <div className='button' onclick="alert('you done clicked the button')">
              <div className='button-plus'></div>
            </div>
          </Col>
          <Col sm className="btn-container">
            <h3>Lat Row</h3>
             <div className='button' onclick="alert('you done clicked the button')">
              <div className='button-plus'></div>
            </div>
          </Col>
          <Col sm className="btn-container">
            <h3>Lat Pullover</h3>
            <div className='button' onclick="alert('you done clicked the button')">
              <div className='button-plus'></div>
            </div>
          </Col>
          <Col sm className="btn-container">
            <h3>Preacher Curl</h3>
            <div className='button' onclick="alert('you done clicked the button')">
              <div className='button-plus'></div>
            </div>
          </Col>
        </Row>
        <Row className="exercise-grid">
          <Col sm className="btn-container">
            <h3>Bicep Curl</h3>
            <div className='button' onclick="alert('you done clicked the button')">
              <div className='button-plus'></div>
            </div>
          </Col>
          <Col sm className="btn-container">
            <h3>Hammer Curl</h3>
            <div className='button' onclick="alert('you done clicked the button')">
              <div className='button-plus'></div>
            </div>
          </Col>
          <Col sm className="btn-container">
            <h3>Tricep Press</h3>
            <div className='button' onclick="alert('you done clicked the button')">
              <div className='button-plus'></div>
            </div>
          </Col>
          <Col sm className="btn-container">
            <h3>Tricep Pushdown</h3>
            <div className='button' onclick="alert('you done clicked the button')">
              <div className='button-plus'></div>
            </div>
          </Col>
        </Row>
        <Row className="exercise-grid">
          <Col sm className="btn-container">
            <h3>Lateral Raises</h3>
            <div className='button' onclick="alert('you done clicked the button')">
              <div className='button-plus'></div>
            </div>
          </Col>
          <Col sm className="btn-container">
            <h3>Shoudler Press</h3>
            <div className='button' onclick="alert('you done clicked the button')">
              <div className='button-plus'></div>
            </div>
          </Col>
          <Col sm className="btn-container">
            <h3>Chest press</h3>
            <div className='button' onclick="alert('you done clicked the button')">
              <div className='button-plus'></div>
            </div>
          </Col>
          <Col sm className="btn-container">
            <h3>Incline press</h3>
            <div className='button' onclick="alert('you done clicked the button')">
              <div className='button-plus'></div>
            </div>
          </Col>
        </Row>
        <Row className="exercise-grid">
          <Col sm className="btn-container">
            <h3>Chest Fly</h3>
            <div className='button' onclick="alert('you done clicked the button')">
              <div className='button-plus'></div>
            </div>
          </Col>
          <Col sm className="btn-container">
            <h3>Abs Upper</h3>
            <div className='button' onclick="alert('you done clicked the button')">
              <div className='button-plus'></div>
            </div>
          </Col>
          <Col sm className="btn-container">
            <h3>Abs Lower</h3>
            <div className='button' onclick="alert('you done clicked the button')">
              <div className='button-plus'></div>
            </div>
          </Col>
          <Col sm className="btn-container">
            <h3>Fore Arms</h3>
            <div className='button' onclick="alert('you done clicked the button')">
              <div className='button-plus'></div>
            </div>
          </Col>
        </Row>
     </Container>    
    </>
  );
}

export default UpperBodyPage;