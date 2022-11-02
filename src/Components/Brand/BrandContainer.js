import { Container, Row } from "react-bootstrap";
import BrandCard from "./BrandCard";
import brand1 from "../../Assets/Images/brand1.png";
import brand2 from "../../Assets/Images/brand2.png";
import brand3 from "../../Assets/Images/brand3.png";
const BrandContainer = () => {
  return (
    <div className="my-3">
      <Container>
        <div className="admin-content-text ">كل الماركات</div>
        <Row className="my-1 justify-content-between">
          <BrandCard img={brand1} />
          <BrandCard img={brand2} />
          <BrandCard img={brand3} />
          <BrandCard img={brand2} />
          <BrandCard img={brand1} />
          <BrandCard img={brand3} />
          <BrandCard img={brand1} />
          <BrandCard img={brand2} />
          <BrandCard img={brand3} />
          <BrandCard img={brand2} />
          <BrandCard img={brand1} />
          <BrandCard img={brand3} />
          <BrandCard img={brand1} />
          <BrandCard img={brand2} />
          <BrandCard img={brand3} />
          <BrandCard img={brand2} />
          <BrandCard img={brand1} />
          <BrandCard img={brand3} />
          <BrandCard img={brand2} />
          <BrandCard img={brand1} />
          <BrandCard img={brand1} />
          <BrandCard img={brand2} />
          <BrandCard img={brand2} />
          <BrandCard img={brand3} />
        </Row>
      </Container>
    </div>
  );
};

export default BrandContainer;
