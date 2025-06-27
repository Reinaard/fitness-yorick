import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Image from 'react-bootstrap/Image';
import LowerBodyPage from './pages/LowerBodyPage';
import FoodPage from './pages/FoodPage';
import UpperBodyPage from './pages/UpperBodyPage';
import HomePage from './pages/HomePage';
import NotFoundPage from './pages/NotFoundPage';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
       <Navbar expand="lg" className="bg-body-tertiary"  sticky="top">
          <Container>
            <Navbar.Brand href="/">YoFitness</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link href="/">Home</Nav.Link>
                <Nav.Link href="/food_page">Food</Nav.Link>
                <NavDropdown title="WrokoutPlan" id="basic-nav-dropdown">
                  <NavDropdown.Item href="/upper_body">Upper body</NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="/lower_body">Lower body</NavDropdown.Item>
                </NavDropdown>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
        <Image src="https://gunsmithfitness.com/cdn/shop/files/category-banner.jpg?v=1705639433&width=3000" fluid />
        <Router>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/upper_body" element={<UpperBodyPage />}></Route>
            <Route path="/food_page" element={<FoodPage />}></Route>
            <Route path="/lower_body" element={<LowerBodyPage />}></Route>
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </Router>
    </div>
  );
}

export default App;
