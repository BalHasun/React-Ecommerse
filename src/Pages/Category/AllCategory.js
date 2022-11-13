import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import CategoryContiner from '../../Components/Category/CategoryContiner'
import PaginationCompontent from '../../Components/Utility/Pagination'

import { getAllCategory } from '../../redux/actions/categoryAction'

const AllCategory = () => {

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getAllCategory());
    }, [])

    const data = useSelector(state => state.allcategory.category)
    const loading = useSelector(state => state.allcategory.loading)

    console.log(data)
    console.log(loading)
    
    return (
        <div style={{ minHeight: '670px' }}>
            <CategoryContiner />
            <PaginationCompontent />
        </div>
    )
}

export default AllCategory