import Link from "next/link";

export function Footer() {
  return (
    <footer className="w-full bg-[#050505] border-t border-[#262626]">
      <div className="px-6 lg:px-16 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="space-y-4">
            <Link href="/mn" className="text-[#F59E0B] text-2xl font-bold tracking-[2px]">
              SMOTO
            </Link>
            <p className="text-[#737373] text-sm leading-relaxed">
              Монголын №1 мотоциклийн дэлгүүр. Дэлхийн шилдэг брэндүүдийн албан ёсны дистрибьютор.
            </p>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Цэс</h4>
            <ul className="space-y-2">
              {["Нүүр", "Бараа", "Брэндүүд", "Бидний тухай"].map((item) => (
                <li key={item}>
                  <Link
                    href="/mn"
                    className="text-[#737373] text-sm hover:text-[#F59E0B] transition-colors"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Тусламж</h4>
            <ul className="space-y-2">
              {["Хүргэлт", "Буцаалт", "Үйлчилгээний нөхцөл", "Нууцлал"].map((item) => (
                <li key={item}>
                  <span className="text-[#737373] text-sm cursor-pointer hover:text-[#F59E0B] transition-colors">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Холбоо барих</h4>
            <ul className="space-y-2">
              <li className="text-[#737373] text-sm">📞 +976 9911-2233</li>
              <li className="text-[#737373] text-sm">✉️ info@smoto.mn</li>
              <li className="text-[#737373] text-sm">📍 Улаанбаатар, Монгол</li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-[#262626] text-center">
          <p className="text-[#525252] text-sm">
            © 2026 SMOTO. Бүх эрх хуулиар хамгаалагдсан.
          </p>
        </div>
      </div>
    </footer>
  );
}
