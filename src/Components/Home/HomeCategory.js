import { Container, Row, Spinner } from 'react-bootstrap'
import HookCategoryHomeComponent from '../../hook/category-hooks/HookCategoryHomeComponent'
import CategoryCard from '../Category/CategoryCard'
import SubTitle from '../Utility/SubTitle'

const HomeCategory = ({ pathText }) => {

    const [loading, category, colors] = HookCategoryHomeComponent();

    return (
        <Container>
            <SubTitle title={'التصنيفات'} btntitle={'المزيد...'} pathText={pathText} />
            <Row className='d-flex justify-content-between my-2'>
                {
                    loading === false ? (
                        category.data ? (
                            category.data.slice(0, 5).map((item, index) => {
                                return (<CategoryCard key={index} title={item.name} img={item.image} background={colors[index]} />)
                            })
                        ) : <h4>لا يوجد تصنيفات</h4>
                    ) : <Spinner animation="border" variant="primary" />

                }
            </Row>
        </Container>
    )
}

export default HomeCategory
