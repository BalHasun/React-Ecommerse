import { Container, Row } from "react-bootstrap";
import BrandCard from "./BrandCard";
import SubTitle from "../Utility/SubTitle.js";
import brand1 from "../../Assets/Images/brand1.png";
import brand2 from "../../Assets/Images/brand2.png";
import brand3 from "../../Assets/Images/brand3.png";
const BrandFeatured = ({ title, btntitle }) => {
  return (
    <div className="my-3">
      <Container>
        <SubTitle title="اشهر الماركات" btntitle="المزيد" />

        <Row className="my-1 justify-content-between">
          <BrandCard img={brand1} />
          <BrandCard img={brand2} />
          <BrandCard img={brand3} />
          <BrandCard img={brand2} />
          <BrandCard img={brand1} />
          <BrandCard img={brand3} />
        </Row>
      </Container>
    </div>
  );
};

export default BrandFeatured;
