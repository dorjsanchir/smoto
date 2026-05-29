import BrandDetailContent from "./BrandDetailContent";

export function generateStaticParams() {
  return [
    { locale: "mn", slug: "yamaha" },
    { locale: "mn", slug: "kawasaki" },
    { locale: "mn", slug: "honda" },
    { locale: "mn", slug: "ktm" },
    { locale: "mn", slug: "harley" },
    { locale: "mn", slug: "gasgas" },
    { locale: "en", slug: "yamaha" },
    { locale: "en", slug: "kawasaki" },
    { locale: "en", slug: "honda" },
    { locale: "en", slug: "ktm" },
    { locale: "en", slug: "harley" },
    { locale: "en", slug: "gasgas" },
  ];
}

export default function BrandDetailPage() {
  return <BrandDetailContent />;
}
