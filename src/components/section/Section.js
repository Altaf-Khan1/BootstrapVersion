import React from "react";
import { Row, Col, Button } from "react-bootstrap";
import { Banner } from "./Scroll";
import "./Section.css";

const images = [
  "https://images.pexels.com/photos/2647714/pexels-photo-2647714.jpeg?auto=compress&cs=tinysrgb&w=600",
  "https://images.pexels.com/photos/2029665/pexels-photo-2029665.jpeg?auto=compress&cs=tinysrgb&w=400",
  "https://images.pexels.com/photos/1571459/pexels-photo-1571459.jpeg?auto=compress&cs=tinysrgb&w=400",
  "https://images.pexels.com/photos/3623785/pexels-photo-3623785.jpeg?auto=compress&cs=tinysrgb&w=400",
  "https://images.pexels.com/photos/271816/pexels-photo-271816.jpeg?auto=compress&cs=tinysrgb&w=400",
  "https://images.pexels.com/photos/106936/pexels-photo-106936.jpeg?auto=compress&cs=tinysrgb&w=400",
  "https://images.pexels.com/photos/2030037/pexels-photo-2030037.jpeg?auto=compress&cs=tinysrgb&w=400",
].map((image) => ({
  id: crypto.randomUUID(),
  image,
}));

function Section() {
  return (
    <div className="SectionScroll">
      <div className="Services">
        <div className="services1">
          <Row>
            <Col>
              <h2 className="services">Services</h2>
              <p className="services1">
                What Do you have in Mind? <br /> Get in Touch and we Will turn
                your dream project into a reality!!! <br /> <br /> <br /> <br />{" "}
                <Button variant="dark">Contact Us</Button>
              </p>
            </Col>
          </Row>
        </div>
        <div className="scrolli">
          <Banner images={images} speed={5000} />
        </div>
      </div>
      </div>
  );
}

export default Section;
