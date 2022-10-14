import React from 'react'
import BrandFeatured from '../../Components/Brand/BrandFeatured'
import DiscountSection from '../../Components/Home/DiscountSection'
import HomeCategory from '../../Components/Home/HomeCategory'
import Slider from '../../Components/Home/Slider'
import CardProductsContainer from '../../Components/Products/CardProductsContainer'
import Footer from '../../Components/Utility/Footer'
import NavBarLogin from '../../Components/Utility/NavBarLogin'

const HomePage = () => {
    return (
        <div>
            <NavBarLogin />
            <Slider />
            <HomeCategory />
            <CardProductsContainer title={'الأكثر مبيعا'} btntitle={'المزيد...'} />
            <CardProductsContainer title={'الأكثر تقييما'} btntitle={'المزيد...'} />
            <DiscountSection />
            <CardProductsContainer title={'الأكثر عرضا'} btntitle={'المزيد...'} />
            <BrandFeatured />
            <Footer />
        </div>
    )
}

export default HomePage