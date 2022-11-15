import React from 'react'
import { Container, Row, Spinner } from 'react-bootstrap'
import CategoryCard from './CategoryCard'


const CategoryContiner = ({ category, loading }) => {


    const colors = ["#FFD3E8", "#F4DBA5", "#55CFDF", "#FF6262", "#0034FF", "#FFD3E8"]

    return (
        <Container>
            <div className='admin-content-text mt-4'>كل التصنيفات ...</div>
            <Row className='d-flex justify-content-between my-2'>
                {
                    loading === false ? (
                        category.data ? (
                            category.data.map((item, index) => {
                                return (<CategoryCard key={index} title={item.name} img={item.image} background={colors[Math.floor(Math.random() * 5) + 1]} />)
                            })
                        ) : <h4>لا يوجد تصنيفات</h4>
                    ) : <Spinner animation="border" variant="primary" />
                }
            </Row>
        </Container>
    )
}

export default CategoryContiner
