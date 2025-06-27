import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Image from 'react-bootstrap/Image';
import UpperBodyPage from './UpperBodyPage';

function App() {
  return (
    <div className="App">
       <Navbar expand="lg" className="bg-body-tertiary"  sticky="top">
          <Container>
            <Navbar.Brand href="#home">YoFitness</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link href="#home">Home</Nav.Link>
                <Nav.Link href="#link">Food</Nav.Link>
                <NavDropdown title="WrokoutPlan" id="basic-nav-dropdown">
                  <NavDropdown.Item href="#action/3.1">Cardio</NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#action/3.4">Body Workout</NavDropdown.Item>
                </NavDropdown>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
        <Image src="https://gunsmithfitness.com/cdn/shop/files/category-banner.jpg?v=1705639433&width=3000" fluid />

      <UpperBodyPage />
    </div>
  );
}

export default App;
