import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";

export default function MainLayout() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Header/Navbar Utama */}
      <Navbar />

      {/* Main Section untuk menampilkan Halaman (Dashboard, ProductDetail, dll) */}
      <main className="flex-1">
        <Outlet />
      </main>

      {/* Footer */}
      <footer className="bg-gray-800 text-white text-center p-4 mt-8">
        <p>© 2026 E-Commerce ShoeStore | Version 1.0</p>
      </footer>
    </div>
  );
}