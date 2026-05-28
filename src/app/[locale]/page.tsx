import Link from "next/link";
import Image from "next/image";

const brands = [
  { name: "Yamaha", color: "#1E3A5F", slug: "yamaha" },
  { name: "Kawasaki", color: "#16A34A", slug: "kawasaki" },
  { name: "Honda", color: "#DC2626", slug: "honda" },
  { name: "KTM", color: "#EA580C", slug: "ktm" },
  { name: "Harley Davidson", color: "#78716C", slug: "harley" },
  { name: "GasGas", color: "#DC2626", slug: "gasgas" },
];

const featuredProducts = [
  {
    id: "1",
    name: "YZF-R1",
    brand: "Yamaha",
    price: "₮125,000,000",
    specs: "998cc | 200HP",
    image: "https://images.unsplash.com/photo-1762012507757-b18cdd13791b?w=600",
  },
  {
    id: "2",
    name: "Ninja H2R",
    brand: "Kawasaki",
    price: "₮189,000,000",
    specs: "998cc | 310HP",
    image: "https://images.unsplash.com/photo-1655484246919-c63b7dec2d73?w=600",
  },
  {
    id: "3",
    name: "CBR1000RR-R",
    brand: "Honda",
    price: "₮149,000,000",
    specs: "1000cc | 217HP",
    image: "https://images.unsplash.com/photo-1627919544121-c9bb9c4b7d4a?w=600",
  },
  {
    id: "4",
    name: "1290 Super Duke R",
    brand: "KTM",
    price: "₮169,000,000",
    specs: "1301cc | 180HP",
    image: "https://images.unsplash.com/photo-1568227441146-d9d774c4fd97?w=600",
  },
];

export default function HomePage() {
  return (
    <div className="min-h-screen bg-[#0a0a0a]">
      {/* Hero Section */}
      <section className="relative h-[700px] flex items-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#1E3A5F]/20 via-[#0a0a0a] to-[#0a0a0a]" />
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-16 w-full">
          <div className="max-w-2xl">
            <span className="inline-block px-4 py-2 rounded-full bg-[#F59E0B]/10 text-[#F59E0B] text-sm font-semibold tracking-wider mb-6">
              2024 COLLECTION
            </span>
            <h1 className="text-5xl lg:text-7xl font-extrabold text-white leading-tight mb-6">
              Мотоциклийн
              <br />
              <span className="text-[#F59E0B]">ертөнцөд</span>
              <br />
              тавтай морил
            </h1>
            <p className="text-lg text-[#a3a3a3] mb-8 max-w-lg">
              Дэлхийн шилдэг брэндүүдийн албан ёсны дистрибьютор. Таны мөрөөдлийн мотоцикл эндээс эхэлнэ.
            </p>
            <div className="flex gap-4">
              <Link
                href="/products"
                className="px-8 py-4 bg-[#F59E0B] text-[#0a0a0a] font-bold rounded-xl hover:bg-[#F59E0B]/90 transition-colors"
              >
                Бараа үзэх
              </Link>
              <Link
                href="/brands"
                className="px-8 py-4 border border-[#333333] text-white font-bold rounded-xl hover:border-[#F59E0B] hover:text-[#F59E0B] transition-colors"
              >
                Брэндүүд
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-20 px-6 lg:px-16">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between mb-12">
            <h2 className="text-3xl font-bold text-white">Шилдэг мотоциклүүд</h2>
            <Link
              href="/products"
              className="text-[#F59E0B] font-semibold hover:underline"
            >
              Бүгдийг харах →
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredProducts.map((product) => (
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
      </section>

      {/* Brands */}
      <section className="py-20 px-6 lg:px-16 bg-[#111111]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <span className="text-[#F59E0B] text-sm font-semibold tracking-wider">БРЭНДҮҮД</span>
            <h2 className="text-3xl lg:text-4xl font-bold text-white mt-4">Дэлхийн шилдэг брэндүүд</h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {brands.map((brand) => (
              <Link
                key={brand.slug}
                href={`/brands/${brand.slug}`}
                className="group relative bg-[#0a0a0a] rounded-2xl p-8 text-center border border-[#222222] hover:border-[#F59E0B]/30 transition-all"
              >
                <div
                  className="w-16 h-16 mx-auto rounded-full flex items-center justify-center text-white font-extrabold text-lg mb-4"
                  style={{ backgroundColor: brand.color }}
                >
                  {brand.name.slice(0, 2).toUpperCase()}
                </div>
                <h3 className="text-white font-bold group-hover:text-[#F59E0B] transition-colors">
                  {brand.name}
                </h3>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-20 px-6 lg:px-16">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-4">SMOTO мэдээлэл авах</h2>
          <p className="text-[#a3a3a3] mb-8">
            Шинэ бараа, хямдрал болон мотоциклийн мэдээллийг имэйлээр хүлээн аваарай.
          </p>
          <div className="flex gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Имэйл хаягаа оруулна уу..."
              className="flex-1 px-6 py-4 bg-[#1a1a1a] border border-[#333333] rounded-xl text-white placeholder:text-[#737373] focus:outline-none focus:border-[#F59E0B]"
            />
            <button className="px-8 py-4 bg-[#F59E0B] text-[#0a0a0a] font-bold rounded-xl hover:bg-[#F59E0B]/90 transition-colors">
              Бүртгүүлэх
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
