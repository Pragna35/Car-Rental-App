import "../../styles/servicesList.css";
import React from "react";
import { Col } from "reactstrap";
import servicesData from "../../assets/data/serviceData";

const ServicesList = () => {
  return (
    <>
      {servicesData.map((item) => (
        //sending the item(getting from serviceData component) as a prop to the child(serviceItem)
        <ServiceItem item={item} key={item.id} />
      ))}
    </>
  );
};

//we are getting item as a prop (with in the same page) from parent serviceList
const ServiceItem = ({ item }) => {
  // console.log(item, "prop");
  return (
    <Col lg="4" md="4" sm="6" className="mb-3">
      <div className="service__item">
        <span className="mb-3 d-inline-block">
          <i class={item.icon} />
        </span>

        <h6>{item.title}</h6>
        <p className="section__description">{item.desc}</p>
      </div>
    </Col>
  );
};

export default ServicesList;
