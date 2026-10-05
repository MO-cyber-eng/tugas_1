import { useState } from "react";
import "./index.css";
import MainLayout from "./layouts/MainLayout";
import Dashboard from "./Pages/frontpages/Dashboard";
import ProductDetail from "./Pages/frontpages/ProductDetail";
import Cart from "./Pages/frontpages/Cart"; // Fix import Cart
import { Route, Routes } from "react-router-dom";
import AdminLayout from "./layouts/AdminLayout";
import AdminDashboard from "./Pages/adminpages/AdminDashboard";
import AboutPage from "./Pages/adminpages/AboutPage";
import Checkout from "./Pages/frontpages/Checkout";

function App() {
  return (
    // <>
    //   <div className="min-h-screen bg-gray-100 flex items-center justify-center">
    //     <div className="bg-white p-8 rounded-md shadow-md text-center max-w-md">
    //       <h1 className="text-2xl font-bold text-blue-600 mb-3">
    //         Welcome to My Admin
    //       </h1>
    //       <p className="text-gray-600">
    //         Your Tailwind CSS React app is ready!
    //       </p>
    //     </div>
    //   </div>

    // </>

    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<Dashboard />} />
        <Route path="product/:id" element={<ProductDetail />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="checkout" element= {<Checkout/>}/>
      </Route>

      <Route path="/admin" element={<AdminLayout />}>
        {/* Default route di dalam AdminLayout */}
        {/* mapping path ke component page, gunakan autocompletion */}
        <Route path="dashboard" element={<AdminDashboard />} />
        <Route path="about" element={<AboutPage />} />
      </Route>
    </Routes>
  );
}

export default App;
