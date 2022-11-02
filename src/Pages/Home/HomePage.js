import React from 'react'
import BrandFeatured from '../../Components/Brand/BrandFeatured'
import DiscountSection from '../../Components/Home/DiscountSection'
import HomeCategory from '../../Components/Home/HomeCategory'
import Slider from '../../Components/Home/Slider'
import CardProductsContainer from '../../Components/Products/CardProductsContainer'
const HomePage = () => {
    return (
        <div>
            <Slider />
            <HomeCategory pathText={'/allcatecory'} />
            <CardProductsContainer title={'الأكثر مبيعا'} btntitle={'المزيد...'} pathText={'/allproducts'} />
            <CardProductsContainer title={'الأكثر تقييما'} btntitle={'المزيد...'} pathText={'/allproducts'} />
            <DiscountSection />
            <CardProductsContainer title={'الأكثر عرضا'} btntitle={'المزيد...'} pathText={'/allproducts'} />
            <BrandFeatured />
        </div>
    )
}

export default HomePage