import React from 'react'
import { Container, Row } from 'react-bootstrap'
import CategoryCard from '../Category/CategoryCard'
import SubTitle from '../Utility/SubTitle'
import pic from '../../Assets/Images/pic.png'
import cat2 from '../../Assets/Images/cat2.png'
import laptop from '../../Assets/Images/labtop.png'

const HomeCategory = ({pathText}) => {
    return (
        <Container>
            <SubTitle title={'التصنيفات'} btntitle={'المزيد...'} pathText={pathText}/>
            <Row className='d-flex justify-content-between my-2'>
                <CategoryCard background='#F4DBA4' img={pic} title={'تخفيضات'} />
                <CategoryCard background='#0034FF' img={cat2} title={'عروض'} />
                <CategoryCard background='#0034FF' img={cat2} title={'عروض'} />
                <CategoryCard background='#FF6262' img={laptop} title={'لابتوبات'} />
                <CategoryCard background='#F4DBA4' img={laptop} title={'لابتوبات'} />
                <CategoryCard background='#FF6262' img={pic} title={'تخفيضات'} />
            </Row>
        </Container>
    )
}

export default HomeCategory
