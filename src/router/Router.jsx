import { BrowserRouter, Route, Routes } from "react-router-dom";

import ProductsPage from "../pages/ProductsPage";
import LoginPage from "../pages/LoginPage";
import RegistrationPage from "../pages/RegistrationPage";
import NotFoundPage from "../pages/NotFoundPage";
import ProtectedLoginPage from "./protectedRoutes/ProtectedLoginPage";

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="" element={<ProtectedLoginPage />}>
          <Route path="/" element={<ProductsPage />} />
          <Route path="/login" element={<LoginPage />} />
        </Route>
        <Route path="/registration" element={<RegistrationPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
