import { Container, Row, Spinner } from "react-bootstrap";
import BrandCard from "./BrandCard";
import SubTitle from "../Utility/SubTitle.js";
import HookBrandHomeComponent from "../../hook/brand-hooks/HookBrandHomeComponent";
const BrandFeatured = () => {

  const [loading, brand] = HookBrandHomeComponent();


  return (
    <div className="my-3">

      <Container>
        <SubTitle title="اشهر الماركات" btntitle="المزيد" pathText='/allbrands' />
        <Row className='d-flex justify-content-between my-2'>
          {
            loading === false ? (
              brand.data ? (
                brand.data.slice(0, 5).map((item, index) => {
                  return (<BrandCard key={index} img={item.image} />)
                })
              ) : <h4>لا يوجد تصنيفات</h4>
            ) : <Spinner animation="border" variant="primary" />
          }
        </Row>
      </Container >
    </div >
  );
};

export default BrandFeatured;
