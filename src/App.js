import { BrowserRouter, Route, Routes } from "react-router-dom";
import Footer from "./Components/Utility/Footer";
import NavBarLogin from "./Components/Utility/NavBarLogin";
import LoginPage from './Pages/Auth/LoginPage'
import RigesterPage from './Pages/Auth/RigesterPage'
import AllBrandsPage from "./Pages/Brands/AllBrandsPage";
import AllCategory from "./Pages/Category/AllCategory";
import HomePage from "./Pages/Home/HomePage";
import ProductDetalisPage from "./Pages/Products/ProductDetalisPage";
import ShopProducsPage from "./Pages/Products/ShopProducsPage";

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
          <Route path="/allproducts" element={<ShopProducsPage />} />
          <Route path="/product/:id" element={<ProductDetalisPage />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;