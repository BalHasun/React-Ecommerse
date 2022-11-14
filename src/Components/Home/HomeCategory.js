import React, { useEffect } from 'react'
import { Container, Row, Spinner } from 'react-bootstrap'
import CategoryCard from '../Category/CategoryCard'
import SubTitle from '../Utility/SubTitle'
// import pic from '../../Assets/Images/pic.png'
// import cat2 from '../../Assets/Images/cat2.png'
// import laptop from '../../Assets/Images/labtop.png'
import { useDispatch, useSelector } from 'react-redux'
import { getAllCategory } from '../../redux/actions/categoryAction'

const HomeCategory = ({ pathText }) => {

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getAllCategory());
        
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    const category = useSelector(state => state.allcategory.category)
    const loading = useSelector(state => state.allcategory.loading)

    console.log(category)
    console.log(loading)
    const colors = ["#FFD3E8", "#F4DBA5", "#55CFDF", "#FF6262", "#0034FF", "#FFD3E8"]

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
