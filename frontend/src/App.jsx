import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { LanguageProvider } from "./context/LanguageContext";

// Pages
import Home from "./pages/Home";
import Products from "./pages/Products";
import About from "./pages/About";
import Logistics from "./pages/Logistics";
import AdminProducts from "./pages/AdminProducts";
import SuperadminPage from "./pages/SuperadminPage";
import Login from "./pages/Login";

// Components
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ScrollToTop from "./utils/ScrollToTop";
import ProtectedRoute from "./components/ProtectedRoute";
import SuperadminRoute from "./components/SuperadminRoute";
import NotFound from "./pages/NotFound"; 

function App() {
  return (
    <LanguageProvider>
      <Router>
        <Navbar />
        <ScrollToTop />

        <Routes>
          {/* Public routes */}
          <Route path="/" element={<Home />} />
          <Route path="/aboutus" element={<About />} />
          <Route path="/products" element={<Products />} />
          <Route path="/logistics" element={<Logistics />} />
          <Route path="/admin/login" element={<Login />} />

          {/* Protected routes */}
          <Route
            path="/admin/products"
            element={
              <ProtectedRoute allowedRoles={["admin", "superadmin"]}>
                <AdminProducts />
              </ProtectedRoute>
            }
          />

          {/* Superadmin only */}
          <Route
            path="/admin/superadmin"
            element={
              <SuperadminRoute>
                <SuperadminPage />
              </SuperadminRoute>
            }
          />

          {/* Catch-all 404 */}
          <Route path="*" element={<NotFound />} />
        </Routes>

        <Footer />
      </Router>
    </LanguageProvider>
  );
}

export default App;
