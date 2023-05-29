import "./App.css";
import {
  Nav,
  Navbar,
  Container,
  NavDropdown,
  Form,
  Button,
  Carousel,
  // Figure,
  // Card,
  Row,
  Col
} from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <header>
      <Navbar>
        <Container fluid>
          <Navbar.Brand href="#">HOME</Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: "100px" }}
              navbarScroll
            >
              <Nav.Link href="#action1">About Us</Nav.Link>
              <Nav.Link href="#action2">Projects</Nav.Link>
              <NavDropdown title="More" id="navbarScrollingDropdown">
                <NavDropdown.Item href="#action3">Goa Decor</NavDropdown.Item>
                <NavDropdown.Item href="#action4">Contact Us</NavDropdown.Item>
              </NavDropdown>
            </Nav>
            <Form className="d-flex">
              <Form.Control
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
              />
              <Button variant="outline-success">Search</Button>
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <Carousel fade>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://images.unsplash.com/photo-1616046229478-9901c5536a45?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aG9tZSUyMGRlY29yfGVufDB8fDB8fHww&auto=format&fit=crop&w=1000&q=60"
            alt="First slide"
            height="600px"
          />
          <Carousel.Caption>
            <p id="caption">SHOWCASING YOUR DREAM HOME WITH US!!!</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://images.unsplash.com/photo-1534349762230-e0cadf78f5da?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8aG9tZSUyMGRlY29yfGVufDB8fDB8fHww&auto=format&fit=crop&w=1000&q=60"
            alt="Second slide"
            height="600px"
          />

          <Carousel.Caption>
            <p id="caption">TRANSFORMING SPACE INTO A DREAM COME TRUE!!! </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://images.unsplash.com/photo-1617103996702-96ff29b1c467?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8aG9tZSUyMGRlY29yfGVufDB8fDB8fHww&auto=format&fit=crop&w=1000&q=60"
            alt="Third slide"
            height="600px"
          />

          <Carousel.Caption>
            <p id="caption">GIVE YOUR DREAMS A SHAPE OF REALITY</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
      <Container className="thirdSection">
      <Row>
        <Col><img className="columnImage" src="https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGhvbWUlMjBkZWNvcnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=1000&q=60" alt=""></img></Col>
        <Col><p className="columnText">'Criativo – The Design Lounge' is a design studio with a co-working
            team of talented designers and artists. At Criativo, our
            architectural and interior designs aim at providing solutions that
            incorporate user-friendliness, cost-effectiveness and optimal
            utilisation of space in a single design.<br/><br/>Ar. Roopa N.K.<br/> <small>Proprietor and Director</small></p> <Button variant="dark">About Us</Button></Col>
      </Row>
    </Container>
    </header>
  );
}

export default App;
