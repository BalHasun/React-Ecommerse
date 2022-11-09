import { BrowserRouter, Route, Routes } from "react-router-dom";
import Footer from "./Components/Utility/Footer";
import NavBarLogin from "./Components/Utility/NavBarLogin";
import LoginPage from './Pages/Auth/LoginPage'
import RigesterPage from './Pages/Auth/RigesterPage'
import AllBrandsPage from "./Pages/Brands/AllBrandsPage";
import AllCategory from "./Pages/Category/AllCategory";
import HomePage from "./Pages/Home/HomePage";
import CartPage from './Pages/Cart/CartPage'
import ProductDetalisPage from "./Pages/Products/ProductDetalisPage";
import ShopProducsPage from "./Pages/Products/ShopProducsPage";
import AdminAllProductsPage from "./Pages/Admin/AdminAllProductsPage";
import AdminAllOrdersPage from "./Pages/Admin/AdminAllOrdersPage";
import AdminOrderDetalisPage from "./Pages/Admin/AdminOrderDetalisPage";
import AdminAddBrandPage from "./Pages/Admin/AdminAddBrandPage";
import AdminAddCategoryPage from "./Pages/Admin/AdminAddCategoryPage";
import AdminAddSubCategoryPage from "./Pages/Admin/AdminAddSubCategoryPage";
import AdminAddProductsPage from "./Pages/Admin/AdminAddProductsPage";
import UserAllOrdersPage from "./Pages/User/UserAllOrdersPage";
import UserFavoriteProductsPage from "./Pages/User/UserFavoriteProductsPage";
import UserAllAddresPage from './Pages/User/UserAllAddresPage';
import UserAddAddressPage from './Pages/User/UserAddAddressPage';
import UserEditAddressPage from './Pages/User/UserEditAddressPage';
import UserProfilePage from "./Pages/User/UserProfilePage";

function App() {
  return (
    <div className="font">
      <NavBarLogin />
      <BrowserRouter>
        <Routes>
          <Route index element={<HomePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RigesterPage />} />
          <Route path="/allcatecory" element={<AllCategory />} />
          <Route path="/allbrands" element={<AllBrandsPage />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/allproducts" element={<ShopProducsPage />} />
          <Route path="/product/:id" element={<ProductDetalisPage />} />
          <Route path="/admin/allproducts" element={<AdminAllProductsPage />} />
          <Route path="/admin/allorders" element={<AdminAllOrdersPage />} />
          <Route path="/admin/orders/23" element={<AdminOrderDetalisPage />} />
          <Route path="/admin/addbrand" element={<AdminAddBrandPage />} />
          <Route path="/admin/addcategory" element={<AdminAddCategoryPage />} />
          <Route path="/admin/addsubcategory" element={<AdminAddSubCategoryPage />} />
          <Route path="/admin/addproduct" element={<AdminAddProductsPage />} />
          <Route path="/user/allorders" element={<UserAllOrdersPage />} />
          <Route path="/user/addresses" element={<UserAllAddresPage />} />
          <Route path="/user/add-address" element={<UserAddAddressPage />} />
          <Route path="/user/edit-address" element={<UserEditAddressPage />} />
          <Route path="/user/profile" element={<UserProfilePage />} />
          <Route path="/user/favoriteproducts" element={<UserFavoriteProductsPage />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;