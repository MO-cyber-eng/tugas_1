import React from "react";
import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";

export default function Navbar() {
  const { totalItem } = useCart();

  return (
    <nav className="bg-neutral-950 border-b border-neutral-800 text-white sticky top-0 z-50 backdrop-blur-md bg-opacity-90">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2 group">
          <div className="bg-orange-500 text-black font-black p-2 rounded-tr-xl rounded-bl-xl group-hover:rotate-12 transition-transform duration-300">
            Shoes
          </div>
          <span className="text-2xl font-black tracking-wider uppercase italic">
            SHOP<span className="text-orange-500">.</span>
          </span>
        </Link>
        
        <div className="flex items-center gap-8 text-sm font-semibold tracking-wide uppercase">
          <Link to="/" className="text-neutral-300 hover:text-orange-500 transition-colors">
            Katalog
          </Link>
          <Link to="/cart" className="relative group flex items-center gap-2 bg-neutral-900 border border-neutral-800 hover:border-orange-500/50 px-4 py-2 rounded-full transition-all">
            <span className="text-neutral-200">Keranjang</span>
            <span className="bg-orange-500 text-black text-xs font-black w-5 h-5 rounded-full flex items-center justify-center">
              {totalItem}
            </span>
          </Link>
        </div>
      </div>
    </nav>
  );
}