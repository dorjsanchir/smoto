"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

const products = [
  { id: "1", name: "YZF-R1", brand: "Yamaha", price: 125000000, specs: "998cc | 200HP | 201kg", image: "https://images.unsplash.com/photo-1762012507757-b18cdd13791b?w=800", description: "YZF-R1 нь Yamaha-ийн шилдэг супербайк. Crossplane crankshaft технологитой." },
  { id: "2", name: "Ninja H2R", brand: "Kawasaki", price: 189000000, specs: "998cc | 310HP | 216kg", image: "https://images.unsplash.com/photo-1655484246919-c63b7dec2d73?w=800", description: "Kawasaki-ийн хамгийн хүчтэй мотоцикл. Supercharger технологитой." },
  { id: "3", name: "CBR1000RR-R", brand: "Honda", price: 149000000, specs: "1000cc | 217HP | 201kg", image: "https://images.unsplash.com/photo-1627919544121-c9bb9c4b7d4a?w=800", description: "Honda-ийн шилдэг спорт мотоцикл. MotoGP технологиор бүтээгдсэн." },
  { id: "4", name: "1290 Super Duke R", brand: "KTM", price: 169000000, specs: "1301cc | 180HP | 189kg", image: "https://images.unsplash.com/photo-1568227441146-d9d774c4fd97?w=800", description: "KTM-ийн хамгийн хүчтэй нейкед байк. The Beast гэж нэрлэдэг." },
  { id: "5", name: "Road King Special", brand: "Harley Davidson", price: 89900000, specs: "1868cc | 107HP | 380kg", image: "https://images.unsplash.com/photo-1776073455776-f6eb705a2aab?w=800", description: "Harley-ийн классик cruiser. Milwaukee-Eight 114 engine." },
  { id: "6", name: "EC 350F", brand: "GasGas", price: 55000000, specs: "350cc | 4-stroke | 106kg", image: "https://images.unsplash.com/photo-1512074590169-3bf81e1b64d1?w=800", description: "GasGas-ийн шилдэг эндуро мотоцикл. Off-road хүч чадал." },
];

const relatedProducts = [
  { id: "2", name: "Ninja H2R", brand: "Kawasaki", price: "₮189,000,000", image: "https://images.unsplash.com/photo-1655484246919-c63b7dec2d73?w=400" },
  { id: "3", name: "CBR1000RR-R", brand: "Honda", price: "₮149,000,000", image: "https://images.unsplash.com/photo-1627919544121-c9bb9c4b7d4a?w=400" },
  { id: "4", name: "1290 Super Duke", brand: "KTM", price: "₮169,000,000", image: "https://images.unsplash.com/photo-1568227441146-d9d774c4fd97?w=400" },
];

export default function ProductDetailContent({ id }: { id: string }) {
  const [quantity, setQuantity] = useState(1);

  const product = products.find((p) => p.id === id) || products[0];

  const formatPrice = (price: number) => {
    return "₮" + price.toLocaleString("mn-MN");
  };

  return (
    <div className="min-h-screen bg-[#0a0a0a] py-8 px-6 lg:px-16">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center gap-2 text-sm text-[#737373] mb-8">
          <Link href="/mn" className="hover:text-[#F59E0B]">Нүүр</Link>
          <span>/</span>
          <Link href="/mn/products" className="hover:text-[#F59E0B]">Бараа</Link>
          <span>/</span>
          <span className="text-white">{product.name}</span>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          <div className="bg-[#111111] rounded-3xl overflow-hidden aspect-square relative">
            <Image
              src={product.image}
              alt={product.name}
              fill
              className="object-cover"
            />
          </div>

          <div className="space-y-6">
            <p className="text-[#F59E0B] font-semibold">{product.brand}</p>
            <h1 className="text-4xl lg:text-5xl font-extrabold text-white">{product.name}</h1>
            <p className="text-3xl font-bold text-[#F59E0B]">{formatPrice(product.price)}</p>
            <p className="text-[#a3a3a3] leading-relaxed">{product.description}</p>

            <div className="bg-[#111111] rounded-2xl p-6 space-y-4">
              <h3 className="text-white font-semibold">Техник үзүүлэлт</h3>
              <div className="grid grid-cols-3 gap-4">
                {product.specs.split(" | ").map((spec, i) => (
                  <div key={i} className="bg-[#1a1a1a] rounded-xl p-4 text-center">
                    <p className="text-[#F59E0B] font-bold text-lg">{spec.split(" ")[0]}</p>
                    <p className="text-[#737373] text-sm">{spec.split(" ").slice(1).join(" ")}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex items-center gap-4">
              <span className="text-white">Тоо хэмжээ:</span>
              <div className="flex items-center bg-[#1a1a1a] rounded-xl">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="px-4 py-2 text-white hover:text-[#F59E0B]"
                >-</button>
                <span className="px-4 text-white font-bold">{quantity}</span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="px-4 py-2 text-white hover:text-[#F59E0B]"
                >+</button>
              </div>
            </div>

            <div className="flex gap-4">
              <button className="flex-1 py-4 bg-[#F59E0B] text-[#0a0a0a] font-bold rounded-xl hover:bg-[#F59E0B]/90 transition-colors">
                Сагсанд нэмэх
              </button>
              <button className="px-6 py-4 border border-[#333333] text-white rounded-xl hover:border-[#F59E0B] transition-colors">
                ❤️
              </button>
            </div>
          </div>
        </div>

        <div className="mt-20">
          <h2 className="text-2xl font-bold text-white mb-8">Төстэй бараанууд</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {relatedProducts.map((p) => (
              <Link
                key={p.id}
                href={`/mn/products/${p.id}`}
                className="group block bg-[#111111] rounded-2xl overflow-hidden border border-[#222222] hover:border-[#F59E0B]/30 transition-all"
              >
                <div className="aspect-[4/3] relative overflow-hidden">
                  <Image src={p.image} alt={p.name} fill className="object-cover group-hover:scale-105 transition-transform" />
                </div>
                <div className="p-4">
                  <p className="text-sm text-[#F59E0B]">{p.brand}</p>
                  <h3 className="text-white font-bold">{p.name}</h3>
                  <p className="text-[#F59E0B] font-bold">{p.price}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
