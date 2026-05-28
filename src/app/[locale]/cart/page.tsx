"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation";

const initialItems = [
  { id: "1", name: "YZF-R1", price: 125000000, qty: 1, image: "https://images.unsplash.com/photo-1762012507757-b18cdd13791b?w=200" },
  { id: "2", name: "Ninja H2R", price: 189000000, qty: 1, image: "https://images.unsplash.com/photo-1655484246919-c63b7dec2d73?w=200" },
];

export default function CartPage() {
  const [items, setItems] = useState(initialItems);
  const router = useRouter();

  const updateQty = (id: string, qty: number) => {
    if (qty <= 0) {
      setItems(items.filter((i) => i.id !== id));
      return;
    }
    setItems(items.map((i) => (i.id === id ? { ...i, qty } : i)));
  };

  const total = items.reduce((sum, i) => sum + i.price * i.qty, 0);

  const formatPrice = (p: number) => "₮" + p.toLocaleString("mn-MN");

  if (items.length === 0) {
    return (
      <div className="min-h-screen bg-[#0a0a0a] py-16 px-6 text-center">
        <h1 className="text-3xl font-bold text-white mb-4">Сагс</h1>
        <p className="text-[#a3a3a3] mb-8">Сагс хоосон байна</p>
        <Link href="/products" className="px-8 py-4 bg-[#F59E0B] text-[#0a0a0a] font-bold rounded-xl">
          Бараа үзэх
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#0a0a0a] py-8 px-6 lg:px-16">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold text-white mb-8">Сагс</h1>

        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-4">
            {items.map((item) => (
              <div key={item.id} className="flex gap-4 bg-[#111111] rounded-2xl p-4 border border-[#222222]">
                <div className="w-24 h-24 relative rounded-xl overflow-hidden shrink-0">
                  <Image src={item.image} alt={item.name} fill className="object-cover" />
                </div>
                <div className="flex-1">
                  <h3 className="text-white font-bold">{item.name}</h3>
                  <p className="text-[#F59E0B] font-bold">{formatPrice(item.price)}</p>
                  <div className="flex items-center gap-2 mt-2">
                    <button onClick={() => updateQty(item.id, item.qty - 1)} className="px-3 py-1 bg-[#1a1a1a] rounded text-white">-</button>
                    <span className="text-white px-3">{item.qty}</span>
                    <button onClick={() => updateQty(item.id, item.qty + 1)} className="px-3 py-1 bg-[#1a1a1a] rounded text-white">+</button>
                    <button onClick={() => updateQty(item.id, 0)} className="ml-auto text-red-500 text-sm">Устгах</button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="bg-[#111111] rounded-2xl p-6 border border-[#222222] h-fit">
            <h2 className="text-xl font-bold text-white mb-6">Захиалгын хураангуй</h2>
            <div className="space-y-2 mb-6">
              <div className="flex justify-between text-[#a3a3a3]">
                <span>Бараа</span>
                <span className="text-white">{formatPrice(total)}</span>
              </div>
              <div className="flex justify-between text-[#a3a3a3]">
                <span>Хүргэлт</span>
                <span className="text-green-500">Үнэгүй</span>
              </div>
              <div className="border-t border-[#333333] pt-2 flex justify-between">
                <span className="text-white font-bold">Нийт</span>
                <span className="text-[#F59E0B] font-bold text-xl">{formatPrice(total)}</span>
              </div>
            </div>
            <button
              onClick={() => router.push("/checkout")}
              className="w-full py-4 bg-[#F59E0B] text-[#0a0a0a] font-bold rounded-xl hover:bg-[#F59E0B]/90 transition-colors"
            >
              Төлбөр төлөх
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
