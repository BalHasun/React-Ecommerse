import React from 'react'
import CategoryContiner from '../../Components/Category/CategoryContiner'
import PaginationCompontent from '../../Components/Utility/Pagination'
import HookCategoryPage from '../../hook/category-hooks/HookCategoryPage'


const AllCategory = () => {

    const [category, loading, pageCount, getCategoryPage] = HookCategoryPage()
    return (
        <div style={{ minHeight: '670px' }}>
            <CategoryContiner category={category} loading={loading} />

            {/* delete pagination bar if there is one page */}
            {pageCount > 1 ? <PaginationCompontent pageCount={pageCount} onPress={getCategoryPage} /> : null}
        </div>
    )
}

export default AllCategory