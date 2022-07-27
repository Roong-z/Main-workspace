import { Button,Navbar,Container,Nav,Form,NavDropdown } from 'react-bootstrap';
import { Routes, Route, Link, useNavigate, Outlet } from 'react-router-dom'


function Detail(props){
  return(
<>
  <Navbbar></Navbbar>
  <div className="container">
    <div className="row">
      <div className="col-md-6">
        <img src="http://localhost:3000/img/1.jpg" width="100%" />
      </div>
    <div className="col-md-6">
      <h4 className="pt-5">{props.goods[0].title}</h4>
      <p>{props.goods[0].content}</p>
      <p>{props.goods[0].price}</p>
      <button className="btn btn-danger">주문하기</button> 
    </div>
  </div>
</div>
</> 
  )
}

function Navbbar(props){
  const navigate = useNavigate();
  return (
    <Navbar bg="light" expand="lg">
      <Container fluid>
        <Navbar.Brand onClick={()=>{ navigate('/') }}>BonitoRoong</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link href="#action1">메인</Nav.Link>
            <Nav.Link onClick={()=>{ navigate('/detail') }}>간식</Nav.Link>
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
  )
}

export default Detail;