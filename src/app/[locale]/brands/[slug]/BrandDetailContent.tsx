"use client";

import Link from "next/link";
import Image from "next/image";

const brandData: Record<string, {
  name: string;
  color: string;
  year: string;
  tagline: string;
  description: string;
  stats: { label: string; value: string }[];
  models: { name: string; price: string; specs: string; image: string }[];
}> = {
  yamaha: {
    name: "YAMAHA",
    color: "#1E3A5F",
    year: "1955",
    tagline: "Revs Your Heart",
    description: "Япон гаралтай, performance ба өдөр тутмын хэрэглээнд тэнцвэртэй. Sport touring-оос эхлээд commuter хүртэл олон төрлийн загвар үйлдвэрлэдэг.",
    stats: [
      { label: "Жилийн түүх", value: "70+" },
      { label: "Загвар", value: "200+" },
      { label: "Борлуулалт", value: "40M" },
    ],
    models: [
      { name: "YZF-R1", price: "₮125,000,000", specs: "998cc | 200HP", image: "https://images.unsplash.com/photo-1762012507757-b18cdd13791b?w=600" },
      { name: "YZF-R6", price: "₮89,000,000", specs: "599cc | 117HP", image: "https://images.unsplash.com/photo-1710894981262-9056f5f74b4f?w=600" },
      { name: "YZF-R3", price: "₮45,000,000", specs: "321cc | 42HP", image: "https://images.unsplash.com/photo-1619592800344-8c912f61c5af?w=600" },
    ],
  },
  kawasaki: {
    name: "KAWASAKI",
    color: "#16A34A",
    year: "1896",
    tagline: "Let the Good Times Roll",
    description: "Хүчтэй sport DNA, хурц ногоон racing identity. Supercharger технологиороо алдартай, track-дээш чиглэсэн performance брэнд.",
    stats: [
      { label: "Жилийн түүх", value: "125+" },
      { label: "Загвар", value: "231" },
      { label: "Борлуулалт", value: "35" },
    ],
    models: [
      { name: "Ninja H2R", price: "₮189,000,000", specs: "998cc | 310HP", image: "https://images.unsplash.com/photo-1655484246919-c63b7dec2d73?w=600" },
      { name: "Ninja ZX-10R", price: "₮135,000,000", specs: "998cc | 203HP", image: "https://images.unsplash.com/photo-1626840362735-afb64615318d?w=600" },
      { name: "Ninja 650", price: "₮65,000,000", specs: "649cc | 68HP", image: "https://images.unsplash.com/photo-1761582363195-e5835fa2c4ef?w=600" },
    ],
  },
  honda: {
    name: "HONDA",
    color: "#DC2626",
    year: "1948",
    tagline: "The Power of Dreams",
    description: "Найдвартай, өргөн хэрэглээтэй, анхны сонголтод ээлтэй. Дэлхийн хамгийн том мотоцикл үйлдвэрлэгчдийн нэг.",
    stats: [
      { label: "Жилийн түүх", value: "75+" },
      { label: "Загвар", value: "400M+" },
      { label: "Борлуулалт", value: "150+" },
    ],
    models: [
      { name: "CBR1000RR-R", price: "₮149,000,000", specs: "1000cc | 217HP", image: "https://images.unsplash.com/photo-1627919544121-c9bb9c4b7d4a?w=600" },
      { name: "CBR650R", price: "₮79,000,000", specs: "649cc | 95HP", image: "https://images.unsplash.com/photo-1637679649762-5b4a2370a068?w=600" },
      { name: "CBR500R", price: "₮49,000,000", specs: "471cc | 47HP", image: "https://images.unsplash.com/photo-1710894981262-9056f5f74b4f?w=600" },
    ],
  },
  ktm: {
    name: "KTM",
    color: "#EA580C",
    year: "1934",
    tagline: "Ready to Race",
    description: "Австри гаралтай off-road, adventure, racing шинжтэй. Дакар раллид давамгайлах мотоциклуудаараа дэлхийд алдартай.",
    stats: [
      { label: "Жилийн түүх", value: "90+" },
      { label: "Загвар", value: "19" },
      { label: "Борлуулалт", value: "320+" },
    ],
    models: [
      { name: "RC 8C", price: "₮159,000,000", specs: "889cc | 140HP", image: "https://images.unsplash.com/photo-1568227441146-d9d774c4fd97?w=600" },
      { name: "1290 Super Duke R", price: "₮169,000,000", specs: "1301cc | 180HP", image: "https://images.unsplash.com/photo-1568227441146-d9d774c4fd97?w=600" },
      { name: "390 Duke", price: "₮39,000,000", specs: "373cc | 44HP", image: "https://images.unsplash.com/photo-1672659604580-a23e2128d098?w=600" },
    ],
  },
  harley: {
    name: "HARLEY DAVIDSON",
    color: "#78716C",
    year: "1903",
    tagline: "Live to Ride",
    description: "Америк cruiser соёл, classic heavy silhouette. Чөлөөт сэтгэлгээ, хүчтэй V-twin engine, онгодтой замын аялал.",
    stats: [
      { label: "Жилийн түүх", value: "120+" },
      { label: "H.O.G. Гишүүн", value: "1M+" },
      { label: "Хамгийн том cc", value: "1923" },
    ],
    models: [
      { name: "Road King Special", price: "₮89,900,000", specs: "1868cc | 107HP", image: "https://images.unsplash.com/photo-1776073455776-f6eb705a2aab?w=600" },
      { name: "Fat Boy 114", price: "₮79,900,000", specs: "1868cc | 107HP", image: "https://images.unsplash.com/photo-1776073455776-f6eb705a2aab?w=600" },
      { name: "Iron 883", price: "₮45,900,000", specs: "883cc | 53HP", image: "https://images.unsplash.com/photo-1776073455776-f6eb705a2aab?w=600" },
    ],
  },
  gasgas: {
    name: "GASGAS",
    color: "#DC2626",
    year: "1985",
    tagline: "Born to Win",
    description: "Испани off-road ба trial racing heritage-тай. Enduro, motocross, trial дэлхийн аварга шалгаруулах тэмцээнд идэвхтэй оролцдог.",
    stats: [
      { label: "Жилийн түүх", value: "40+" },
      { label: "Загвар", value: "20+" },
      { label: "Борлуулалт", value: "69" },
    ],
    models: [
      { name: "EC 350F", price: "₮55,000,000", specs: "350cc | 4-stroke", image: "https://images.unsplash.com/photo-1512074590169-3bf81e1b64d1?w=600" },
      { name: "EC 250", price: "₮45,000,000", specs: "250cc | 2-stroke", image: "https://images.unsplash.com/photo-1512074590169-3bf81e1b64d1?w=600" },
      { name: "TXT Racing 300", price: "₮42,000,000", specs: "300cc | 2-stroke", image: "https://images.unsplash.com/photo-1512074590169-3bf81e1b64d1?w=600" },
    ],
  },
};

export default function BrandDetailContent({ slug }: { slug: string }) {
  const brand = brandData[slug] || brandData.yamaha;

  return (
    <div className="min-h-screen bg-[#0a0a0a]">
      <section className="relative h-[500px] flex items-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-[#0a0a0a] via-transparent to-[#0a0a0a]" />
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-16 w-full">
          <div className="flex items-center gap-8">
            <div
              className="w-28 h-28 rounded-full flex items-center justify-center text-white font-extrabold text-2xl"
              style={{ backgroundColor: brand.color }}
            >
              {brand.name.slice(0, 2)}
            </div>
            <div>
              <p className="text-[#F59E0B] text-sm font-semibold tracking-wider mb-2">{brand.year}</p>
              <h1 className="text-5xl lg:text-7xl font-extrabold text-white">{brand.name}</h1>
              <p className="text-xl text-[#a3a3a3] italic mt-2">{brand.tagline}</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 px-6 lg:px-16 bg-[#0a0a0a]">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-3 gap-6">
            {brand.stats.map((stat) => (
              <div key={stat.label} className="bg-[#1a1a1a] rounded-2xl p-6 text-center">
                <p className="text-[#F59E0B] text-3xl font-extrabold">{stat.value}</p>
                <p className="text-[#a3a3a3] text-sm mt-2">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 px-6 lg:px-16">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-white mb-8">{brand.name} загварууд</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {brand.models.map((model) => (
              <Link
                key={model.name}
                href="/mn/products"
                className="group block bg-[#111111] rounded-3xl overflow-hidden border border-[#222222] hover:border-[#F59E0B]/30 transition-all"
              >
                <div className="aspect-[4/3] relative overflow-hidden">
                  <Image
                    src={model.image}
                    alt={model.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-white mb-2">{model.name}</h3>
                  <p className="text-sm text-[#737373] mb-4">{model.specs}</p>
                  <p className="text-2xl font-extrabold text-[#F59E0B]">{model.price}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
