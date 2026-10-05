import React from "react";
import { useParams, Link } from "react-router-dom";

// 1. Data Produk Sepatu Lengkap dengan Berbagai Kategori
export const PRODUCTS = [
  {
    id: 1,
    name: "Aero Running Pro 2.0",
    category: "Running",
    price: 750000,
    stock: 5,
    description: "Sepatu lari super ringan dengan bantalan empuk untuk kenyamanan berlari jarak jauh.",
    image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=500",
  },
  {
    id: 2,
    name: "Urban Sneaker White Edition",
    category: "Casual",
    price: 520000,
    stock: 0, // Testing Stok Habis
    description: "Desain minimalis dan trendi, cocok untuk gaya kasual harian.",
    image: "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?w=500",
  },
  {
    id: 3,
    name: "Court High Basketball",
    category: "Basketball",
    price: 1200000,
    stock: 3,
    description: "Performa tinggi dengan pelindung pergelangan kaki untuk aksi melompat di lapangan.",
    image: "https://images.unsplash.com/photo-1552346154-21d32810aba3?w=500",
  },
  {
    id: 4,
    name: "Speed Striker FG",
    category: "Football",
    price: 890000,
    stock: 8,
    description: "Sepatu sepak bola dengan pul kuat untuk traksi maksimal di lapangan rumput.",
    image: "https://images.unsplash.com/photo-1511556532299-8f662fc26c06?w=500",
  },
  {
    id: 5,
    name: "Retro Classic Canvas",
    category: "Casual",
    price: 450000,
    stock: 12,
    description: "Model klasik bergaya vintage, cocok dipadukan dengan celana jeans.",
    image: "https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?w=500",
  },
  {
    id: 6,
    name: "Zoom Trail Runner",
    category: "Running",
    price: 980000,
    stock: 4,
    description: "Dirancang khusus untuk trek lari *off-road* dan medan berat.",
    image: "https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?w=500",
  }
];

function ProductDetail() {
  const { id } = useParams();
  const product = PRODUCTS.find((p) => p.id === Number(id)) || PRODUCTS[0];

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white rounded-lg shadow-md my-8">
      <Link to="/" className="text-blue-600 hover:underline mb-4 inline-block">
        &larr; Kembali ke Katalog
      </Link>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-80 object-cover rounded-lg"
        />
        <div>
          <span className="text-xs text-blue-600 font-semibold uppercase tracking-wider">
            {product.category}
          </span>
          <h1 className="text-3xl font-bold text-gray-800 mt-1">{product.name}</h1>
          <p className="text-2xl font-semibold text-gray-900 mt-2">
            Rp {product.price.toLocaleString("id-ID")}
          </p>

          <div className="mt-4">
            {product.stock > 0 ? (
              <span className="bg-green-100 text-green-800 text-xs font-semibold px-2.5 py-0.5 rounded">
                Stok Tersedia ({product.stock})
              </span>
            ) : (
              <span className="bg-red-100 text-red-800 text-xs font-semibold px-2.5 py-0.5 rounded">
                Stok Habis
              </span>
            )}
          </div>

          <p className="text-gray-600 mt-4">{product.description}</p>

          <button
            disabled={product.stock === 0}
            className={`w-full mt-6 py-3 rounded-lg text-white font-medium transition ${
              product.stock > 0
                ? "bg-blue-600 hover:bg-blue-700"
                : "bg-gray-400 cursor-not-allowed"
            }`}
          >
            {product.stock > 0 ? "+ Tambah ke Keranjang" : "Stok Tidak Tersedia"}
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProductDetail;