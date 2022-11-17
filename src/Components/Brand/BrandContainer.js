import { Container, Row, Spinner } from "react-bootstrap";
import BrandCard from "./BrandCard";

const BrandContainer = ({ brand, loading }) => {

  return (
    <div className="my-3">
      <Container>
        <div className="admin-content-text ">كل الماركات</div>
        <Row className='d-flex justify-content-between my-2'>
          {
            loading === false ? (
              brand.data ? (
                brand.data.map((item, index) => {
                  return (<BrandCard key={index} img={item.image} />)
                })
              ) : <h4>لا يوجد ماركات</h4>
            ) : <Spinner animation="border" variant="primary" />
          }
        </Row>
      </Container>
    </div>
  );
};

export default BrandContainer;
