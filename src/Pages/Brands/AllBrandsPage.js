import React from 'react'
import BrandContainer from '../../Components/Brand/BrandContainer'
import PaginationCompontent from '../../Components/Utility/Pagination'

const AllBrands = () => {
    return (
        <div style={{ minHeight: '670px' }}>
            <BrandContainer />
            <PaginationCompontent />
        </div>
    )
}

export default AllBrands
