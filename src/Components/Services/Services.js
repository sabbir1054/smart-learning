import React, { useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import Service from '../Service/Service';

const Services = () => {
    const [datas, setDatas] = useState([]);
    useEffect(() => {
        fetch('./fakeData/fakeData.JSON')
            .then(res => res.json())
            .then(data => setDatas(data))
        
    },[])
    return (
      <div className="bg-light">
        <div className="about-heading service-heading py-5">
          <h1 className="py-5 display-2 fw-normal text-center heading">
            Our Services
          </h1>
        </div>
        <Container className="mt-5">
          <Row xs={1} md={3} className="g-4">
            {datas.map((data) => (
              <Service data={data}></Service>
            ))}
          </Row>
        </Container>
      </div>
    );
};

export default Services;