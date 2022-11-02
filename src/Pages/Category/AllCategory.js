import React from 'react'
import CategoryContiner from '../../Components/Category/CategoryContiner'
import PaginationCompontent from '../../Components/Utility/Pagination'

const AllCategory = () => {
    return (
        <div style={{ minHeight: '670px' }}>
            <CategoryContiner />
            <PaginationCompontent />
        </div>
    )
}

export default AllCategory