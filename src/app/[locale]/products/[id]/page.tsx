import ProductDetailContent from "./ProductDetailContent";

export function generateStaticParams() {
  return [
    { locale: "mn", id: "1" },
    { locale: "mn", id: "2" },
    { locale: "mn", id: "3" },
    { locale: "mn", id: "4" },
    { locale: "mn", id: "5" },
    { locale: "mn", id: "6" },
    { locale: "en", id: "1" },
    { locale: "en", id: "2" },
    { locale: "en", id: "3" },
    { locale: "en", id: "4" },
    { locale: "en", id: "5" },
    { locale: "en", id: "6" },
  ];
}

export default function ProductDetailPage({ params }: { params: { id: string } }) {
  return <ProductDetailContent id={params.id} />;
}
