import React, { useEffect, useState } from "react";
import { Row } from "react-bootstrap";
import Hero from "../Hero/Hero";
import Service from "../Service/Service";

const Home = () => {
  const [datas, setdatas] = useState([]);
  useEffect(() => {
    fetch("./fakeData/data2.JSON")
      .then((res) => res.json())
      .then((data) => setdatas(data));
  }, []);
  return (
    <div>
          <Hero></Hero>
          {/* Our service section */}
      <div className="container mt-5">
        <h3 className="text-center text-warning display-2 fw-normal">Our Service</h3>
        <Row xs={1} md={2} className="g-4">
          {datas.map((data) => (
            <Service data={data}></Service>
          ))}
        </Row>
      </div>
    </div>
  );
};

export default Home;
