import { Routes, Route, BrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import Login from "../pages/Login";
import NotFound from "../pages/NotFound";
import Pay from "../pages/Pay";
import CandyStore from "../pages/CandyStore";
import Layout from "../containers/Layout";
import { ShoppingCartContextProvider } from "../context/ShoppingCartContext";

const App = () => {
  return (
    <ShoppingCartContextProvider>
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/login" element={<Login />} />
            <Route exact path="/dulceria" element={<CandyStore />} />
            <Route exact path="/pago" element={<Pay />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </ShoppingCartContextProvider>
  );
};

export default App;
