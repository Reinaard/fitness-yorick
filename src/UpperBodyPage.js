import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Stack from 'react-bootstrap/Stack';

function UpperBodyPage() {
  return (
    <>
      <Container fluid={true}>
        <h2 className='titel'>UpperBody</h2>
        <Row>
          <Col className="exersise-header">
            Exersise
          </Col>
          <Col className="exersise-header">
            How to
          </Col>
        </Row>

      <Stack direction="vertical"gap={10}>
         <Row>
          <Col>
           
            <ul className="exersise-list">
              <li>Back</li> 
              <li>Chest</li>
              <li>Triceps</li>
              <li>Biceps</li>
              <li>Ahoulders</li>
              <li>Abs</li>
            </ul>
          </Col>
        
          <Col>
          
            <ul className="exersise-list">
              <li>First item</li>
              <li>Second item</li>
              <li>Third item</li>
            </ul>
          </Col>
        </Row>
      </Stack> 
     </Container>    
         
      
    </>
  );
}

export default UpperBodyPage;