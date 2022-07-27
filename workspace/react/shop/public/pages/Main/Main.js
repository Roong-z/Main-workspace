import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button,Navbar,Container,Nav,Form,NavDropdown } from 'react-bootstrap';
import data from './data.js';


function Main(){
    let [ goods, setGoods ] = useState(data);
  
    return(
      <>
      <Navbbar></Navbbar>
      <div className='main-bg'></div>
        <div className="container">
          <div className="row">
        {
          goods.map(function(a, i){
          return(
          <Product goods={goods[i]} i={i}/>
          )})
        }
        </div>
      </div>
      </>
    )
  }

  function Product(props){
    return (
      <div className="col-md-4">
        <img className='snack' src={process.env.PUBLIC_URL + '/img/'+ (props.i+1) +'.jpg'}/>
        <h4>{ props.goods.title }</h4>
        <p>{ props.goods.content }</p>
        <p>{ props.goods.price }</p>
      </div>
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

  export default Main;