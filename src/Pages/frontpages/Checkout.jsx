import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useCart } from "../../context/CartContext";

export default function Checkout() {
  const { cart, totalPrice, clearCart } = useCart();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    address: "",
    paymentMethod: "transfer",
  });

  const [errors, setErrors] = useState({});
  const [isSuccessModalOpen, setIsSuccessModalOpen] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
    setErrors({
      ...errors,
      [e.target.name]: "",
    });
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.fullName.trim()) newErrors.fullName = "Nama lengkap wajib diisi";
    if (!formData.phone.trim()) newErrors.phone = "Nomor WhatsApp/Telepon wajib diisi";
    if (!formData.address.trim()) newErrors.address = "Alamat pengiriman wajib diisi";
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validateForm();

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setIsSuccessModalOpen(true);
  };

  const handleFinishTransaction = () => {
    clearCart();
    setIsSuccessModalOpen(false);
    navigate("/");
  };

  if (cart.length === 0 && !isSuccessModalOpen) {
    return (
      <div className="bg-neutral-950 text-neutral-100 min-h-[80vh] flex flex-col items-center justify-center p-6">
        <h2 className="text-3xl font-black uppercase italic mb-2">
          CHECKOUT <span className="text-orange-500">TIDAK TERSERDA</span>
        </h2>
        <p className="text-neutral-400 text-sm mb-6">
          Keranjang belanja Anda kosong. Tambahkan sepatu terlebih dahulu.
        </p>
        <Link
          to="/"
          className="bg-orange-500 hover:bg-orange-400 text-black font-black text-xs px-6 py-3 rounded-xl uppercase tracking-wider transition-all"
        >
          Lihat Katalog &rarr;
        </Link>
      </div>
    );
  }

  return (
    <div className="bg-neutral-950 text-neutral-100 min-h-screen py-12 px-6">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-3xl font-black uppercase italic mb-8 pb-4 border-b border-neutral-800">
          FORMULIR <span className="text-orange-500">PEMBAYARAN</span>
        </h1>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <form onSubmit={handleSubmit} className="lg:col-span-2 space-y-6">
            <div className="bg-neutral-900 border border-neutral-800 rounded-2xl p-6 space-y-4">
              <h2 className="text-lg font-black uppercase tracking-wider text-orange-400 mb-2">
                Informasi Pengiriman
              </h2>

              <div>
                <label className="block text-xs font-bold uppercase text-neutral-300 mb-1">
                  Nama Lengkap
                </label>
                <input
                  type="text"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  placeholder="Masukkan nama lengkap Anda"
                  className="w-full bg-neutral-950 border border-neutral-800 rounded-xl px-4 py-3 text-sm text-neutral-200 focus:outline-none focus:border-orange-500"
                />
                {errors.fullName && (
                  <p className="text-red-500 text-xs mt-1 font-bold">{errors.fullName}</p>
                )}
              </div>

              <div>
                <label className="block text-xs font-bold uppercase text-neutral-300 mb-1">
                  Nomor WhatsApp / Telepon
                </label>
                <input
                  type="text"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="Contoh: 081234567890"
                  className="w-full bg-neutral-950 border border-neutral-800 rounded-xl px-4 py-3 text-sm text-neutral-200 focus:outline-none focus:border-orange-500"
                />
                {errors.phone && (
                  <p className="text-red-500 text-xs mt-1 font-bold">{errors.phone}</p>
                )}
              </div>

              <div>
                <label className="block text-xs font-bold uppercase text-neutral-300 mb-1">
                  Alamat Lengkap
                </label>
                <textarea
                  name="address"
                  rows="3"
                  value={formData.address}
                  onChange={handleChange}
                  placeholder="Nama jalan, nomor rumah, kecamatan, kota..."
                  className="w-full bg-neutral-950 border border-neutral-800 rounded-xl px-4 py-3 text-sm text-neutral-200 focus:outline-none focus:border-orange-500"
                ></textarea>
                {errors.address && (
                  <p className="text-red-500 text-xs mt-1 font-bold">{errors.address}</p>
                )}
              </div>
            </div>

            <div className="bg-neutral-900 border border-neutral-800 rounded-2xl p-6">
              <h2 className="text-lg font-black uppercase tracking-wider text-orange-400 mb-4">
                Metode Pembayaran
              </h2>
              <div className="space-y-3">
                <label className="flex items-center gap-3 p-3 bg-neutral-950 border border-neutral-800 rounded-xl cursor-pointer hover:border-orange-500/50">
                  <input
                    type="radio"
                    name="paymentMethod"
                    value="transfer"
                    checked={formData.paymentMethod === "transfer"}
                    onChange={handleChange}
                    className="accent-orange-500"
                  />
                  <span className="text-sm font-bold">Transfer Bank (BCA / Mandiri)</span>
                </label>
                <label className="flex items-center gap-3 p-3 bg-neutral-950 border border-neutral-800 rounded-xl cursor-pointer hover:border-orange-500/50">
                  <input
                    type="radio"
                    name="paymentMethod"
                    value="ewallet"
                    checked={formData.paymentMethod === "ewallet"}
                    onChange={handleChange}
                    className="accent-orange-500"
                  />
                  <span className="text-sm font-bold">E-Wallet (GoPay / ShopeePay / QRIS)</span>
                </label>
              </div>
            </div>

            <button
              type="submit"
              className="w-full bg-orange-500 hover:bg-orange-400 text-black font-black text-xs py-4 rounded-xl uppercase tracking-wider transition-all shadow-lg shadow-orange-500/20 active:scale-95"
            >
              Konfirmasi & Bayar Sekarang
            </button>
          </form>

          <div className="bg-neutral-900 border border-neutral-800 rounded-2xl p-6 h-fit space-y-4">
            <h2 className="text-lg font-black uppercase tracking-wider border-b border-neutral-800 pb-3">
              Rincian Item
            </h2>
            <div className="space-y-3">
              {cart.map((item) => (
                <div key={item.id} className="flex justify-between items-center text-xs">
                  <div>
                    <p className="font-bold text-white">{item.name}</p>
                    <p className="text-neutral-400">{item.qty} x Rp {item.price.toLocaleString("id-ID")}</p>
                  </div>
                  <span className="font-bold text-neutral-200">
                    Rp {(item.price * item.qty).toLocaleString("id-ID")}
                  </span>
                </div>
              ))}
            </div>
            <div className="pt-4 border-t border-neutral-800 flex justify-between items-center">
              <span className="font-bold text-sm">Total Bayar</span>
              <span className="text-xl font-black text-orange-500">
                Rp {totalPrice.toLocaleString("id-ID")}
              </span>
            </div>
          </div>
        </div>
      </div>

      {isSuccessModalOpen && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-neutral-900 border border-neutral-800 rounded-3xl p-8 max-w-md w-full text-center">
            <div className="w-16 h-16 bg-orange-500/10 border border-orange-500 text-orange-400 text-3xl font-black rounded-full flex items-center justify-center mx-auto mb-4">
              ✓
            </div>
            <h3 className="text-2xl font-black uppercase italic text-white mb-2">
              PEMBAYARAN <span className="text-orange-500">BERHASIL!</span>
            </h3>
            <p className="text-xs text-neutral-400 mb-6">
              Pesanan atas nama <strong className="text-white">{formData.fullName}</strong> telah diterima dan siap diproses.
            </p>
            <button
              onClick={handleFinishTransaction}
              className="w-full bg-orange-500 hover:bg-orange-400 text-black font-black text-xs py-3.5 rounded-xl uppercase tracking-wider transition-all"
            >
              Kembali ke Katalog Utama
            </button>
          </div>
        </div>
      )}
    </div>
  );
}