import Helmet from "../components/helmet/helmet";
import CommonSection from "../components/UI/commonSection";
import carData from "../assets/data/carData";
import CarItem from "../components/UI/carItem";
import { Container, Row, Col } from "reactstrap";
const CarsList = () => {
  return (
    <Helmet>
      <CommonSection title="Cars List" />
      <section>
        <Container>
          <Row>
            <Col lg="12">
              <div className=" d-flex align-items-center gap-3 mb-5">
                <span className=" d-flex align-items-center gap-2">
                  <i class="ri-sort-asc"></i> Sort By
                </span>

                <select>
                  <option>Select</option>
                  <option value="low">Low to High</option>
                  <option value="high">High to Low</option>
                </select>
              </div>
            </Col>

            {carData.map((item) => (
              <CarItem item={item} key={item.id} />
            ))}
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};
export default CarsList;
