import logo from './logo.svg';
import './App.css';
import { Button,Navbar,Container,Nav,Form,NavDropdown } from 'react-bootstrap';


function App() {
  return (
    <div className="App">
<Navbar bg="light" expand="lg">
      <Container fluid>
        <Navbar.Brand href="#">츄룽지Shop</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link href="#action1">메인</Nav.Link>
            <Nav.Link href="#action2">간식</Nav.Link>
            <NavDropdown title="장난감" id="navbarScrollingDropdown">
              <NavDropdown.Item href="#action3">낚싯대 장난감</NavDropdown.Item>
              <NavDropdown.Item href="#action4">
                쥐돌이 장난감
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action5">
                더보기
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#" disabled>
              오늘의 간식
            </Nav.Link>
          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="검색"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </div>
  );
}



export default App;
