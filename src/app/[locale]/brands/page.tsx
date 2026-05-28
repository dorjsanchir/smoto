import Link from "next/link";

const brands = [
  { name: "Yamaha", color: "#1E3A5F", slug: "yamaha", stats: { years: "70+", models: "200+", sales: "40M" } },
  { name: "Kawasaki", color: "#16A34A", slug: "kawasaki", stats: { years: "125+", models: "231", sales: "35" } },
  { name: "Honda", color: "#DC2626", slug: "honda", stats: { years: "75+", models: "400M+", sales: "150+" } },
  { name: "KTM", color: "#EA580C", slug: "ktm", stats: { years: "90+", models: "19", sales: "320+" } },
  { name: "Harley Davidson", color: "#78716C", slug: "harley", stats: { years: "120+", models: "1M+", sales: "1923" } },
  { name: "GasGas", color: "#DC2626", slug: "gasgas", stats: { years: "40+", models: "20+", sales: "69" } },
];

export default function BrandsPage() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] py-8 px-6 lg:px-16">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-[#F59E0B] text-sm font-semibold tracking-wider">БРЭНДҮҮД</span>
          <h1 className="text-4xl lg:text-5xl font-extrabold text-white mt-4 mb-4">Дэлхийн шилдэг брэндүүд</h1>
          <p className="text-[#a3a3a3] max-w-2xl mx-auto">
            Дэлхийн шилдэг мотоциклийн брэндүүдийн албан ёсны дистрибьютор
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {brands.map((brand) => (
            <Link
              key={brand.slug}
              href={`/brands/${brand.slug}`}
              className="group relative bg-[#111111] rounded-3xl overflow-hidden border border-[#222222] hover:border-[#F59E0B]/30 transition-all"
            >
              <div
                className="h-2"
                style={{ backgroundColor: brand.color }}
              />
              <div className="p-8">
                <div className="flex items-center gap-4 mb-6">
                  <div
                    className="w-16 h-16 rounded-full flex items-center justify-center text-white font-extrabold"
                    style={{ backgroundColor: brand.color }}
                  >
                    {brand.name.slice(0, 2).toUpperCase()}
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white group-hover:text-[#F59E0B] transition-colors">
                      {brand.name}
                    </h3>
                  </div>
                </div>

                <div className="grid grid-cols-3 gap-4">
                  <div className="bg-[#1a1a1a] rounded-xl p-4 text-center">
                    <p className="text-[#F59E0B] font-bold text-xl">{brand.stats.years}</p>
                    <p className="text-[#737373] text-xs">Жил</p>
                  </div>
                  <div className="bg-[#1a1a1a] rounded-xl p-4 text-center">
                    <p className="text-[#F59E0B] font-bold text-xl">{brand.stats.models}</p>
                    <p className="text-[#737373] text-xs">Загвар</p>
                  </div>
                  <div className="bg-[#1a1a1a] rounded-xl p-4 text-center">
                    <p className="text-[#F59E0B] font-bold text-xl">{brand.stats.sales}</p>
                    <p className="text-[#737373] text-xs">Борлуулалт</p>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
