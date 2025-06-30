import Container from 'react-bootstrap/Container';

function HomePage() {
  return (
    <Container fluid={true}>
      <h2 className='titel'>Home</h2>
      <span style={{backgroundColor:'#ffc107'}}>Home</span>
    </Container>    
  );
}

export default HomePage;
