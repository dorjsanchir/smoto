"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

const categories = ["Бүгд", "Sport", "Naked", "Adventure", "Cruiser"];

const products = [
  { id: "1", name: "YZF-R1", brand: "Yamaha", category: "Sport", price: "₮125,000,000", specs: "998cc | 200HP", image: "https://images.unsplash.com/photo-1762012507757-b18cdd13791b?w=600" },
  { id: "2", name: "Ninja H2R", brand: "Kawasaki", category: "Sport", price: "₮189,000,000", specs: "998cc | 310HP", image: "https://images.unsplash.com/photo-1655484246919-c63b7dec2d73?w=600" },
  { id: "3", name: "CBR1000RR-R", brand: "Honda", category: "Sport", price: "₮149,000,000", specs: "1000cc | 217HP", image: "https://images.unsplash.com/photo-1627919544121-c9bb9c4b7d4a?w=600" },
  { id: "4", name: "1290 Super Duke R", brand: "KTM", category: "Naked", price: "₮169,000,000", specs: "1301cc | 180HP", image: "https://images.unsplash.com/photo-1568227441146-d9d774c4fd97?w=600" },
  { id: "5", name: "Road King Special", brand: "Harley Davidson", category: "Cruiser", price: "₮89,900,000", specs: "1868cc | 107HP", image: "https://images.unsplash.com/photo-1776073455776-f6eb705a2aab?w=600" },
  { id: "6", name: "EC 350F", brand: "GasGas", category: "Adventure", price: "₮55,000,000", specs: "350cc | 4-stroke", image: "https://images.unsplash.com/photo-1512074590169-3bf81e1b64d1?w=600" },
];

export default function ProductsPage() {
  const [selectedCategory, setSelectedCategory] = useState("Бүгд");
  const [searchValue, setSearchValue] = useState("");

  const filtered = products.filter((p) => {
    const matchesCategory = selectedCategory === "Бүгд" || p.category === selectedCategory;
    const matchesSearch = p.name.toLowerCase().includes(searchValue.toLowerCase()) || 
                         p.brand.toLowerCase().includes(searchValue.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-[#0a0a0a] py-8 px-6 lg:px-16">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-extrabold text-white mb-8">Мотоциклийн бүтээгдэхүүн</h1>

        <div className="flex flex-col sm:flex-row gap-4 mb-8">
          <input
            type="text"
            placeholder="Хайх..."
            value={searchValue}
            onChange={(e) => setSearchValue(e.target.value)}
            className="flex-1 px-6 py-3 bg-[#1a1a1a] border border-[#333333] rounded-xl text-white placeholder:text-[#737373] focus:outline-none focus:border-[#F59E0B]"
          />
        </div>

        <div className="flex gap-2 overflow-x-auto pb-4 mb-8">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-6 py-2 rounded-lg font-medium whitespace-nowrap transition-colors ${
                selectedCategory === cat
                  ? "bg-[#F59E0B] text-[#0a0a0a]"
                  : "bg-[#1a1a1a] text-[#e5e5e5] hover:bg-[#222222]"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((product) => (
            <Link
              key={product.id}
              href={`/products/${product.id}`}
              className="group block bg-[#111111] rounded-3xl overflow-hidden border border-[#222222] hover:border-[#F59E0B]/30 transition-all"
            >
              <div className="aspect-[4/3] relative overflow-hidden">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <p className="text-sm text-[#F59E0B] font-medium mb-1">{product.brand}</p>
                <h3 className="text-xl font-bold text-white mb-2">{product.name}</h3>
                <p className="text-sm text-[#737373] mb-4">{product.specs}</p>
                <p className="text-2xl font-extrabold text-[#F59E0B]">{product.price}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
