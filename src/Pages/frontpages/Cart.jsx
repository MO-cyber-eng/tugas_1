import React, { useState } from "react";
import { Link } from "react-router-dom";
import { PRODUCTS } from "./ProductDetail";
import { useCart } from "../../context/CartContext";

export default function Dashboard() {
  const [selectedCategory, setSelectedCategory] = useState("Semua");
  const [searchQuery, setSearchQuery] = useState("");
  const { addToCart } = useCart();

  const categories = [
    "Semua",
    ...new Set(PRODUCTS.map((item) => item.category)),
  ];

  const filteredProducts = PRODUCTS.filter((product) => {
    const matchesCategory =
      selectedCategory === "Semua" || product.category === selectedCategory;
    const matchesSearch = product.name
      .toLowerCase()
      .includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="bg-neutral-950 text-neutral-100 min-h-screen pb-20">
      <div className="relative overflow-hidden bg-neutral-900 border-b border-neutral-800 py-12 px-6 mb-10">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-start md:items-end justify-between gap-6">
          <div>
            <span className="inline-block bg-orange-500/10 border border-orange-500/30 text-orange-400 text-xs font-bold px-3 py-1 rounded-md uppercase tracking-widest mb-3">
              Koleksi Sepatu 2026
            </span>
            <h1 className="text-4xl md:text-5xl font-black uppercase tracking-tight italic">
              KATALOG <span className="text-orange-500">SEPATU</span>
            </h1>
            <p className="text-neutral-400 mt-2 max-w-lg text-sm">
              Pilihan sepatu olahraga dan gaya hidup terbaik dengan harga
              transparan dan kualitas terjamin.
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-4 justify-between items-center mb-10 bg-neutral-900 p-3 rounded-2xl border border-neutral-800">
          <div className="relative w-full lg:w-96">
            <input
              type="text"
              placeholder="Cari nama sepatu..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-neutral-950 border border-neutral-800 rounded-xl px-4 py-3 text-sm text-neutral-200 placeholder-neutral-500 focus:outline-none focus:border-orange-500 transition-colors"
            />
          </div>

          <div className="flex flex-wrap gap-2 w-full lg:w-auto">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-5 py-2.5 rounded-xl text-xs font-bold uppercase tracking-wider transition-all ${
                  selectedCategory === category
                    ? "bg-orange-500 text-black shadow-lg shadow-orange-500/20"
                    : "bg-neutral-950 text-neutral-400 border border-neutral-800 hover:border-neutral-700 hover:text-white"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filteredProducts.map((product) => (
            <div
              key={product.id}
              className="group bg-neutral-900 border border-neutral-800 hover:border-orange-500/50 rounded-2xl p-4 transition-all duration-300 flex flex-col sm:flex-row gap-5 items-center justify-between"
            >
              <div className="w-full sm:w-48 h-48 bg-neutral-950 rounded-xl overflow-hidden flex-shrink-0 relative border border-neutral-800">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <span className="absolute top-2 left-2 bg-neutral-900/90 text-orange-400 text-[10px] font-black px-2.5 py-1 rounded-md border border-neutral-800 uppercase">
                  {product.category}
                </span>
              </div>

              <div className="flex flex-col justify-between w-full h-full py-1">
                <div>
                  <h2 className="text-lg font-bold text-white group-hover:text-orange-500 transition-colors">
                    {product.name}
                  </h2>
                  <p className="text-xs text-neutral-400 mt-1 line-clamp-2">
                    {product.description ||
                      "Sepatu kualitas terbaik dengan kenyamanan penggunaan maksimal harian."}
                  </p>
                  <div className="mt-3">
                    <span className="text-2xl font-black text-white">
                      Rp {product.price.toLocaleString("id-ID")}
                    </span>
                  </div>
                </div>

                <div className="mt-4 pt-3 border-t border-neutral-800 flex items-center justify-between gap-3">
                  <Link
                    to="/checkout"
                    className="block text-center w-full bg-orange-500 hover:bg-orange-400 text-black font-black text-xs py-3.5 rounded-xl uppercase tracking-wider transition-all shadow-lg shadow-orange-500/20 active:scale-95"
                  >
                    Lanjut Ke Checkout
                  </Link>

                  <button
                    onClick={() => addToCart(product)}
                    disabled={product.stock === 0}
                    className={`text-xs px-4 py-2.5 rounded-xl font-bold uppercase transition-all ${
                      product.stock > 0
                        ? "bg-orange-500 hover:bg-orange-400 text-black shadow-md shadow-orange-500/20 active:scale-95"
                        : "bg-neutral-800 text-neutral-500 cursor-not-allowed"
                    }`}
                  >
                    {product.stock > 0 ? "+ Beli" : "Habis"}
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
