
import Cart from './pages/Cart'
import Home from './pages/Home'
import Login from './pages/Login'
import Register from './pages/Register'
import ProductList from './pages/ProductList';
import { Navigate, Route, Routes } from 'react-router-dom';
import Product from './pages/Product'
import { useSelector } from 'react-redux';
import Store from './Component/Store/Store';
import Accesories from './Component/Accesories/Accesories';
import BestSellerItemList from './Component/BestSellerItemList/BestSellerItemList';
import BestSellerItem from './Component/BestSellerItem/BestSellerItem';
import Bestseller from './Component/Bestseller/Bestseller';
import Profile from './Component/Profile/Profile';
import Iphone from './Component/Iphone/Iphone';
function App() {
  const user=useSelector((state)=>state.user.currentUser);
  console.log(null);
  return (
    <>
      <Routes>
        <Route exect path="/" element={<Home/>} />
        <Route exect path="/store" element={<Store/>} />
        <Route exect path="/store/:Accesories" element={<Accesories/>} />
        <Route exect path="/bestseller/:category" element={<ProductList/>}/>
        <Route exect path="/iphone" element={<Iphone/>}/>
        <Route exect path="/ipad" element={<Iphone/>}/>
        <Route exect path="/macbook" element={<Iphone/>}/>
        {/* <Route path="/products/:category" element={<ProductList />} /> */}
        <Route path="/profile" element={<Profile/>}/>
        <Route path="/product/:id" element={<Product />} />
        <Route path="/Cart" element={<Cart />}/>
        <Route path="/login" element={user? <Navigate replace to="/" />:<Login />}/>
        <Route path="/register" element={user ? <Navigate replace to="/" />:<Register />}/>
      </Routes>
    </>
  )
}

export default App