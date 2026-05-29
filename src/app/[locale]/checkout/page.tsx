"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function CheckoutPage() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    address: "",
    description: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    router.push("/mn/verify");
  };

  const orderItems = [
    { name: "YZF-R1", qty: 1, price: 125000000 },
    { name: "Ninja H2R", qty: 1, price: 189000000 },
  ];

  const total = orderItems.reduce((sum, i) => sum + i.price * i.qty, 0);
  const formatPrice = (p: number) => "₮" + p.toLocaleString("mn-MN");

  return (
    <div className="min-h-screen bg-[#0a0a0a] py-8 px-6 lg:px-16">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-extrabold text-white mb-8">Төлбөр тооцоо</h1>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Delivery Info */}
          <div className="bg-[#111111] rounded-3xl p-8 border border-[#222222]">
            <h2 className="text-2xl font-bold text-white mb-6">Хүргэлтийн мэдээлэл</h2>
            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-[#a3a3a3] text-sm mb-2">Нэр</label>
                  <input
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-[#1a1a1a] border border-[#333333] rounded-xl text-white placeholder:text-[#737373] focus:outline-none focus:border-[#F59E0B]"
                    placeholder="Нэр"
                  />
                </div>
                <div>
                  <label className="block text-[#a3a3a3] text-sm mb-2">Овог</label>
                  <input
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-[#1a1a1a] border border-[#333333] rounded-xl text-white placeholder:text-[#737373] focus:outline-none focus:border-[#F59E0B]"
                    placeholder="Овог"
                  />
                </div>
              </div>

              <div>
                <label className="block text-[#a3a3a3] text-sm mb-2">Имэйл</label>
                <input
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-[#1a1a1a] border border-[#333333] rounded-xl text-white placeholder:text-[#737373] focus:outline-none focus:border-[#F59E0B]"
                  placeholder="Имэйл хаяг"
                />
              </div>

              <div>
                <label className="block text-[#a3a3a3] text-sm mb-2">Утас</label>
                <input
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-[#1a1a1a] border border-[#333333] rounded-xl text-white placeholder:text-[#737373] focus:outline-none focus:border-[#F59E0B]"
                  placeholder="Утасны дугаар"
                />
              </div>

              <div>
                <label className="block text-[#a3a3a3] text-sm mb-2">Хаяг</label>
                <input
                  name="address"
                  value={formData.address}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-[#1a1a1a] border border-[#333333] rounded-xl text-white placeholder:text-[#737373] focus:outline-none focus:border-[#F59E0B]"
                  placeholder="Хүргэлтийн хаяг"
                />
              </div>

              <div>
                <label className="block text-[#a3a3a3] text-sm mb-2">Нэмэлт тайлбар</label>
                <textarea
                  name="description"
                  value={formData.description}
                  onChange={handleChange}
                  rows={3}
                  className="w-full px-4 py-3 bg-[#1a1a1a] border border-[#333333] rounded-xl text-white placeholder:text-[#737373] focus:outline-none focus:border-[#F59E0B] resize-none"
                  placeholder="Нэмэлт мэдээлэл"
                />
              </div>
            </div>
          </div>

          {/* Order Summary */}
          <div className="bg-[#111111] rounded-3xl p-8 border border-[#222222] h-fit">
            <h2 className="text-2xl font-bold text-white mb-6">Захиалгын хураангуй</h2>
            <div className="space-y-4 mb-6">
              {orderItems.map((item) => (
                <div key={item.name} className="flex justify-between">
                  <span className="text-[#e5e5e5]">{item.name} x {item.qty}</span>
                  <span className="text-[#F59E0B] font-semibold">{formatPrice(item.price * item.qty)}</span>
                </div>
              ))}
              <div className="border-t border-[#333333] pt-4">
                <div className="flex justify-between text-lg font-bold">
                  <span className="text-white">Нийт</span>
                  <span className="text-[#F59E0B] text-2xl">{formatPrice(total)}</span>
                </div>
              </div>
            </div>

            <div className="mb-6">
              <p className="text-white font-semibold mb-3">Төлбөрийн хэрэгсэл</p>
              <div className="space-y-2">
                <div className="p-4 bg-[#1a1a1a] border border-[#F59E0B] rounded-xl">
                  <p className="text-white">QPay - Гар утасны банк</p>
                </div>
                <div className="p-4 bg-[#1a1a1a] border border-[#333333] rounded-xl">
                  <p className="text-[#e5e5e5]">Банкны шилжүүлэг</p>
                </div>
              </div>
            </div>

            <button
              onClick={handleSubmit}
              className="w-full py-4 bg-[#F59E0B] text-[#0a0a0a] font-bold rounded-xl hover:bg-[#F59E0B]/90 transition-colors"
            >
              Захиалга баталгаажуулах
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
