import Helmet from "../components/helmet/helmet";
import CommonSection from "../components/UI/commonSection";
import carData from "../assets/data/carData";
import CarItem from "../components/UI/carItem";
import { Container, Row, Col } from "reactstrap";
import { useState } from "react";

const CarsList = () => {
  const [sortOption, setSortOption] = useState("");

  const handlePriceFilter = (e) => {
    setSortOption(e.target.value);
  };

  //using spread operator to copy the carData to avoid modifying the original carData
  const sortedCarData = [...carData];

  if (sortOption === "low") {
    sortedCarData.sort((a, b) => {
      return a.price - b.price;
    }); //this comparision fun inside sort method will sort from low to high
  } else if (sortOption === "high") {
    sortedCarData.sort((a, b) => {
      return b.price - a.price; //sort from high to low
    });
  }
  return (
    <Helmet title="Cars">
      <CommonSection title="Cars List" />

      <section>
        <Container>
          <Row>
            <Col lg="12">
              <div className=" d-flex align-items-center gap-3 mb-5">
                <span className=" d-flex align-items-center gap-2">
                  <i class="ri-sort-asc"></i> Sort By
                </span>

                <select value={sortOption} onChange={handlePriceFilter}>
                  <option>Select</option>
                  <option value="low">Low to High</option>
                  <option value="high">High to Low</option>
                </select>
              </div>
            </Col>

            {sortedCarData.map((item) => (
              <CarItem item={item} key={item.id} />
            ))}
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};
export default CarsList;
