import React from 'react';

import "./SectionT.css";


import { Button, Container, Row, Col } from 'react-bootstrap'

function SectionT() {
  return (
    <div>
        <Container className="thirdSection">
        <Row>
          <Col>
            <img
              className="columnImage"
              src="https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGhvbWUlMjBkZWNvcnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=1000&q=60"
              alt=""
            ></img>
          </Col>
          <Col>
            <p className="columnText">
              'Criativo – The Design Lounge' is a design studio with a
              co-working team of talented designers and artists. At Criativo,
              our architectural and interior designs aim at providing solutions
              that incorporate user-friendliness, cost-effectiveness and optimal
              utilisation of space in a single design.
              <br />
              <br />
              Ar. Roopa N.K.
              <br /> <small>Proprietor and Director</small>
            </p>{" "}
            <Button variant="dark">About Us</Button>
          </Col>
        </Row>
      </Container>

    </div>
  )
}

export default SectionT