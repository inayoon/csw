import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import SignUp from "./pages/SignUp";
import SignIn from "./pages/Signin";
import Header from "./components/Header";
import FooterCom from "./components/Footer";
import DiyKit from "./pages/DiyKit";
import Rabbit from "./pages/Rabbit";
import Bear from "./pages/Bear";
import Cart from "./pages/Cart";
import { useDispatch, useSelector } from "react-redux";
import { IRootState } from "./redux/store";
import NotAuthRoutes from "./components/NotAuthRoutes";
import Favorite from "./pages/Favorite";
import NewProduct from "./pages/NewProduct";

function App() {
  const dispatch = useDispatch();
  const isAuth = useSelector<IRootState, boolean>(
    (state) => state.user?.isAuth
  );
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<NotAuthRoutes isAuth={isAuth} />}>
          <Route path="/sign-in" element={<SignIn />}></Route>
          <Route path="/sign-up" element={<SignUp />}></Route>
        </Route>

        <Route
          element={
            <>
              <Header isAuth={isAuth} />
              <Outlet />
              <FooterCom />
            </>
          }
        >
          <Route path="/" element={<Home />}></Route>
          <Route path="/product/rabbit" element={<Rabbit />}></Route>
          <Route path="/product/bear" element={<Bear />}></Route>
          <Route path="/product/diy-kit" element={<DiyKit />}></Route>
          <Route path="/product/new" element={<NewProduct />}></Route>
          <Route path="/cart" element={<Cart />}></Route>
          <Route path="/favorite" element={<Favorite />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
