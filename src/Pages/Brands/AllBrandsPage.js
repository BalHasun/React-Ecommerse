import React from 'react'
import BrandContainer from '../../Components/Brand/BrandContainer'
import PaginationCompontent from '../../Components/Utility/Pagination'
import HookBrandPage from '../../hook/brand-hooks/HookBrandPage'

const AllBrands = () => {

    const [brand, loading, pageCount, getBrandPage] = HookBrandPage();

    return (
        <div style={{ minHeight: '670px' }}>
            <BrandContainer brand={brand} loading={loading} />

            {/* delete pagination bar if there is one page */}
            {pageCount > 1 ? <PaginationCompontent pageCount={pageCount} onPress={getBrandPage} /> : null}
        </div>
    )
}

export default AllBrands
