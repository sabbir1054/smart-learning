import Button from "@restart/ui/esm/Button";
import React from "react";
import { Card, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

const Service = (props) => {
  const { courseName, fee, img, rating, tutor } = props.data;
  return (
    <>
      <Col>
        <Card className="bg-secondary text-white">
          <Card.Img variant="top" src={img} width="300" />
          <Card.Body>
            <Card.Title>{courseName}</Card.Title>
            <Card.Text>
              <p>
                Tutor: {tutor} <span className="ms-3">Rating:{rating}</span>
              </p>
              <h3 className="text-warning">Course Fee: ${fee}</h3>
              <Link to="/admission">
                <Button className="btn-warning btn">Select Course</Button>
              </Link>
            </Card.Text>
          </Card.Body>
        </Card>
      </Col>
    </>
  );
};

export default Service;
