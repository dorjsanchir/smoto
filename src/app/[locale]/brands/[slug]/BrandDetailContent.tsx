"use client";

import Link from "next/link";
import Image from "next/image";

interface Model {
  name: string;
  price: string;
  specs: string;
  engine: string;
  power: string;
  weight: string;
  category: string;
  image: string;
  description: string;
}

interface BrandInfo {
  name: string;
  color: string;
  year: string;
  tagline: string;
  description: string;
  longDescription: string;
  history: string[];
  stats: { label: string; value: string }[];
  models: Model[];
  features: string[];
}

const brandData: Record<string, BrandInfo> = {
  yamaha: {
    name: "YAMAHA",
    color: "#1E3A5F",
    year: "1955",
    tagline: "Revs Your Heart",
    description: "Япон гаралтай, performance ба өдөр тутмын хэрэглээнд тэнцвэртэй. Sport touring-оос эхлээд commuter хүртэл олон төрлийн загвар үйлдвэрлэдэг.",
    longDescription: "Yamaha Motor Co., Ltd. нь 1955 онд байгуулагдсан бөгөөд дэлхийн хамгийн том мотоцикл үйлдвэрлэгчдийн нэг. Performance, найдвартай байдал, инноваци гэсэн гурван үндсэн зарчмыг баримталдаг.",
    history: [
      "1955 - Yamaha Motor Co., Ltd. байгуулагдсан",
      "1961 - Дэлхийн анхны 5 хурдтай мотоцикл гаргасан",
      "1985 - FZ750 загварыг танилцуулсан - анхны 5 клапантай хөдөлгүүр",
      "1998 - YZF-R1 загвар гаргасан - супербайк салбарыг өөрчлөсөн",
      "2009 - Crossplane crankshaft технологийг нэвтрүүлсэн",
      "2024 - R1 25 жилийн ойн хувилбарыг гаргасан"
    ],
    stats: [
      { label: "Жилийн түүх", value: "70+" },
      { label: "Загварын тоо", value: "200+" },
      { label: "Нийт борлуулалт", value: "40M+" },
      { label: "Улсад борлуулдаг", value: "180+" },
      { label: "Ажилтны тоо", value: "50,000+" },
      { label: "R&D хөрөнгө оруулалт", value: "$1B+" }
    ],
    features: [
      "Crossplane Crankshaft технологи",
      "Deltabox frame бүтэц",
      "Yamaha Chip Controlled Throttle (YCC-T)",
      "6-axis IMU мэдрэгч систем",
      "Quick Shift System (QSS)",
      "Slide Control System (SCS)"
    ],
    models: [
      { 
        name: "YZF-R1", 
        price: "₮125,000,000", 
        specs: "998cc | 200HP | 201kg",
        engine: "998cc Inline-4",
        power: "200 HP @ 13,500 rpm",
        weight: "201 kg",
        category: "Супербайк",
        image: "https://images.unsplash.com/photo-1762012507757-b18cdd13791b?w=600",
        description: "YZF-R1 нь MotoGP технологийг замын хэрэглээнд оруулсан шилдэг супербайк. Crossplane crankshaft технологитой."
      },
      { 
        name: "YZF-R6", 
        price: "₮89,000,000", 
        specs: "599cc | 117HP | 190kg",
        engine: "599cc Inline-4",
        power: "117 HP @ 14,500 rpm",
        weight: "190 kg",
        category: "Суперспорт",
        image: "https://images.unsplash.com/photo-1710894981262-9056f5f74b4f?w=600",
        description: "YZF-R6 нь дунд ангиллын хамгийн хүчтэй суперспорт мотоцикл. Track-day болон өдөр тутмын хэрэглээнд тохиромжтой."
      },
      { 
        name: "YZF-R3", 
        price: "₮45,000,000", 
        specs: "321cc | 42HP | 171kg",
        engine: "321cc Parallel Twin",
        power: "42 HP @ 10,750 rpm",
        weight: "171 kg",
        category: "Спорт",
        image: "https://images.unsplash.com/photo-1619592800344-8c912f61c5af?w=600",
        description: "YZF-R3 нь эхлэн суралцагчдад зориулсан спорт мотоцикл. Хөнгөн, удирдахад хялбар, загварлаг дизайнтай."
      },
      { 
        name: "MT-09", 
        price: "₮65,000,000", 
        specs: "890cc | 117HP | 189kg",
        engine: "890cc Inline-3 (CP3)",
        power: "117 HP @ 10,000 rpm",
        weight: "189 kg",
        category: "Нейкед",
        image: "https://images.unsplash.com/photo-1558981403-c5f9899a28bc?w=600",
        description: "MT-09 нь Yamaha-ийн алдартай CP3 хөдөлгүүртэй нейкед байк. Хүч чадал, уян хатан байдал, хөнгөн жинийг хослуулсан."
      },
      { 
        name: "XSR900", 
        price: "₮72,000,000", 
        specs: "890cc | 117HP | 193kg",
        engine: "890cc Inline-3 (CP3)",
        power: "117 HP @ 10,000 rpm",
        weight: "193 kg",
        category: "Ретро/Модерн",
        image: "https://images.unsplash.com/photo-1558981403-c5f9899a28bc?w=600",
        description: "XSR900 нь классик дизайн болон орчин үеийн технологийн хослол. Yard Built цувралын сүнслэг үргэлжлэл."
      }
    ]
  },
  kawasaki: {
    name: "KAWASAKI",
    color: "#16A34A",
    year: "1896",
    tagline: "Let the Good Times Roll",
    description: "Хүчтэй sport DNA, хурц ногоон racing identity. Supercharger технологиороо алдартай, track-дээш чиглэсэн performance брэнд.",
    longDescription: "Kawasaki Heavy Industries-ийн хэсэг болох Kawasaki Motors нь 1896 онд байгуулагдсан. Supercharger технологиороо дэлхийд алдартай, хамгийн хүчтэй серийн мотоциклуудыг үйлдвэрлэдэг.",
    history: [
      "1896 - Kawasaki Shipyard байгуулагдсан",
      "1966 - A1 Samurai загварыг гаргасан",
      "1972 - H2 Mach IV - дэлхийн хамгийн хурдан серийн мотоцикл",
      "1984 - Ninja гэр бүрийг эхлүүлсэн",
      "2015 - Ninja H2/H2R суперчаржертай мотоцикл гаргасан",
      "2023 - ZX-4RR - анхны 400cc inline-4"
    ],
    stats: [
      { label: "Жилийн түүх", value: "125+" },
      { label: "Загварын тоо", value: "231" },
      { label: "Нийт борлуулалт", value: "35M+" },
      { label: "Supercharged загвар", value: "3" },
      { label: "WorldSBK түрүү", value: "8" },
      { label: "R&D төв", value: "12" }
    ],
    features: [
      "Supercharged Engine технологи",
      "Kawasaki River Mark дизайн",
      "Kawasaki Traction Control (KTRC)",
      "Kawasaki Intelligent anti-lock Brake System (KIBS)",
      "Electronic Cruise Control",
      "Kawasaki Quick Shifter (KQS)"
    ],
    models: [
      { 
        name: "Ninja H2R", 
        price: "₮189,000,000", 
        specs: "998cc | 310HP | 216kg",
        engine: "998cc Inline-4 Supercharged",
        power: "310 HP @ 14,000 rpm",
        weight: "216 kg",
        category: "Супербайк (Track Only)",
        image: "https://images.unsplash.com/photo-1655484246919-c63b7dec2d73?w=600",
        description: "Ninja H2R нь дэлхийн хамгийн хүчтэй серийн мотоцикл. 310 морины хүчтэй supercharged хөдөлгүүртэй. Зөвхөн замаар биш хурдны замд гүйцэтгэнэ."
      },
      { 
        name: "Ninja ZX-10R", 
        price: "₮135,000,000", 
        specs: "998cc | 203HP | 207kg",
        engine: "998cc Inline-4",
        power: "203 HP @ 13,200 rpm",
        weight: "207 kg",
        category: "Супербайк",
        image: "https://images.unsplash.com/photo-1626840362735-afb64615318d?w=600",
        description: "ZX-10R нь WorldSBK-д хэрэглэгддэг хамгийн амжилттай супербайк. Kawasaki Racing Team-ийн технологийг шууд агуулсан."
      },
      { 
        name: "Ninja 650", 
        price: "₮65,000,000", 
        specs: "649cc | 68HP | 196kg",
        engine: "649cc Parallel Twin",
        power: "68 HP @ 8,000 rpm",
        weight: "196 kg",
        category: "Спорт Туринг",
        image: "https://images.unsplash.com/photo-1761582363195-e5835fa2c4ef?w=600",
        description: "Ninja 650 нь спорт дизайн, туринг аяллын тохиромжтой байрлал, хөнгөн жинг хослуулсан. Эхлэн суралцагчдад тохиромжтой."
      },
      { 
        name: "Z900", 
        price: "₮72,000,000", 
        specs: "948cc | 125HP | 212kg",
        engine: "948cc Inline-4",
        power: "125 HP @ 9,500 rpm",
        weight: "212 kg",
        category: "Нейкед",
        image: "https://images.unsplash.com/photo-1558981403-c5f9899a28bc?w=600",
        description: "Z900 нь Sugomi дизайн философитой хүчтэй нейкед байк. 948cc inline-4 хөдөлгүүр, хөнгөн жин, уян хатан байдлын хослол."
      },
      { 
        name: "Versys 650", 
        price: "₮58,000,000", 
        specs: "649cc | 68HP | 219kg",
        engine: "649cc Parallel Twin",
        power: "68 HP @ 8,500 rpm",
        weight: "219 kg",
        category: "Адвенчер",
        image: "https://images.unsplash.com/photo-1558981403-c5f9899a28bc?w=600",
        description: "Versys 650 нь зам болон замын бус замд зориулсан адвенчер мотоцикл. Өндөр байрлал, зөөлөн аялал, олон талт чадвар."
      }
    ]
  },
  honda: {
    name: "HONDA",
    color: "#DC2626",
    year: "1948",
    tagline: "The Power of Dreams",
    description: "Найдвартай, өргөн хэрэглээтэй, анхны сонголтод ээлтэй. Дэлхийн хамгийн том мотоцикл үйлдвэрлэгчдийн нэг.",
    longDescription: "Honda Motor Co., Ltd. нь 1948 онд Соичиро Хондагийн үүсгэн байгуулсан. Дэлхийн хамгийн том мотоцикл үйлдвэрлэгч бөгөөд 400 сая гаруй мотоцикл зарсан. Инноваци, найдвартай байдал, өргөн хүрээний загваруудаараа алдартай.",
    history: [
      "1948 - Honda Motor Co. байгуулагдсан",
      "1958 - Super Cub анхны 100 сая борлуулалтанд хүрсэн",
      "1969 - CB750 Four - 'Супербайкийн эцэг'",
      "1992 - CBR900RR - Fireblade анхны спортбайк",
      "2004 - CBR1000RR-R анхны MotoGP технологи",
      "2020 - Africa Twin Adventure Sports ES"
    ],
    stats: [
      { label: "Жилийн түүх", value: "75+" },
      { label: "Нийт борлуулалт", value: "400M+" },
      { label: "Улсад борлуулдаг", value: "160+" },
      { label: "Super Cub борлуулалт", value: "100M+" },
      { label: "MotoGP түрүү", value: "25+" },
      { label: "Ажилтны тоо", value: "200,000+" }
    ],
    features: [
      "Honda Selectable Torque Control (HSTC)",
      "Throttle By Wire технологи",
      "Six-axis Inertial Measurement Unit (IMU)",
      "Honda Electronic Steering Damper (HESD)",
      "Dual Clutch Transmission (DCT)",
      "Honda Smartphone Voice Control"
    ],
    models: [
      { 
        name: "CBR1000RR-R", 
        price: "₮149,000,000", 
        specs: "1000cc | 217HP | 201kg",
        engine: "1000cc Inline-4",
        power: "217 HP @ 14,500 rpm",
        weight: "201 kg",
        category: "Супербайк",
        image: "https://images.unsplash.com/photo-1627919544121-c9bb9c4b7d4a?w=600",
        description: "CBR1000RR-R SP нь MotoGP-ээс шууд технологи шилжүүлсэн дэлхийн хамгийн өндөр технологийн супербайк. Öhlins suspension, Brembo brakes."
      },
      { 
        name: "CBR650R", 
        price: "₮79,000,000", 
        specs: "649cc | 95HP | 206kg",
        engine: "649cc Inline-4",
        power: "95 HP @ 12,000 rpm",
        weight: "206 kg",
        category: "Спорт",
        image: "https://images.unsplash.com/photo-1637679649762-5b4a2370a068?w=600",
        description: "CBR650R нь CBR дизайн, inline-4 хөдөлгүүрийн тэнцвэртэй хослол. Өдөр тутмын хэрэглээнд тохиромжтой спорт мотоцикл."
      },
      { 
        name: "CBR500R", 
        price: "₮49,000,000", 
        specs: "471cc | 47HP | 192kg",
        engine: "471cc Parallel Twin",
        power: "47 HP @ 8,500 rpm",
        weight: "192 kg",
        category: "Спорт",
        image: "https://images.unsplash.com/photo-1710894981262-9056f5f74b4f?w=600",
        description: "CBR500R нь A2 лицензээр унах боломжтой спорт мотоцикл. Хөнгөн, удирдахад хялбар, CBR гэр бүрийн загвар."
      },
      { 
        name: "Africa Twin", 
        price: "₮95,000,000", 
        specs: "1084cc | 101HP | 226kg",
        engine: "1084cc Parallel Twin",
        power: "101 HP @ 7,500 rpm",
        weight: "226 kg",
        category: "Адвенчер",
        image: "https://images.unsplash.com/photo-1558981403-c5f9899a28bc?w=600",
        description: "Africa Twin Adventure Sports нь Дакар раллид суурилсан адвенчер мотоцикл. DCT автомат хурдны хайрцагтай."
      },
      { 
        name: "Gold Wing", 
        price: "₮110,000,000", 
        specs: "1833cc | 126HP | 384kg",
        engine: "1833cc Flat-6",
        power: "126 HP @ 5,500 rpm",
        weight: "384 kg",
        category: "Туринг",
        image: "https://images.unsplash.com/photo-1558981403-c5f9899a28bc?w=600",
        description: "Gold Wing нь дэлхийн хамгийн тансаг туринг мотоцикл. 1833cc 6 цилиндр, Apple CarPlay, heated seats, авто хурдны хайрцаг."
      }
    ]
  },
  ktm: {
    name: "KTM",
    color: "#EA580C",
    year: "1934",
    tagline: "Ready to Race",
    description: "Австри гаралтай off-road, adventure, racing шинжтэй. Дакар раллид давамгайлах мотоциклуудаараа дэлхийд алдартай.",
    longDescription: "KTM AG (Kraftfahrzeug Trunkenpolz Mattighofen) нь 1934 онд Австрийн Маттигхофенд байгуулагдсан. Off-road, motocross, enduro, адвенчер мотоциклуудаараа дэлхийд тэргүүлдэг. Дакар раллид хамгийн олон түрүү авсан брэнд.",
    history: [
      "1934 - Hans Trunkenpolz зураг төсөл гараж байгуулсан",
      "1953 - KTM анхны мотоцикл (R100) гаргасан",
      "1974 - Motocross World Championship-д анхны түрүү",
      "1994 - Дакар раллид анхны түрүү",
      "2007 - KTM X-Bow спорт машин гаргасан",
      "2023 - 350cc Enduro шинэ үеийн хөдөлгүүр"
    ],
    stats: [
      { label: "Жилийн түүх", value: "90+" },
      { label: "Enduro загвар", value: "19" },
      { label: "Дакар түрүү", value: "19" },
      { label: "Motocross WC", value: "40+" },
      { label: "Хоногт үйлдвэрлэл", value: "500+" },
      { label: "Улсад борлуулдаг", value: "90+" }
    ],
    features: [
      "WP Suspension систем",
      "KTM Ride Mode сонголт",
      "KTM My Ride апп",
      "Cornering ABS",
      "Motor Slip Regulation (MSR)",
      "Off-road Pro режим"
    ],
    models: [
      { 
        name: "RC 8C", 
        price: "₮159,000,000", 
        specs: "889cc | 140HP | 140kg",
        engine: "889cc LC8c Parallel Twin",
        power: "140 HP @ 10,000 rpm",
        weight: "140 kg",
        category: "Track Only",
        image: "https://images.unsplash.com/photo-1568227441146-d9d774c4fd97?w=600",
        description: "RC 8C нь зөвхөн хурдны замд зориулсан мотоцикл. Кальчаг карбон бие, 140 кг жин, Kramer Racing-ийн хамт хөгжүүлсэн."
      },
      { 
        name: "1290 Super Duke R", 
        price: "₮169,000,000", 
        specs: "1301cc | 180HP | 189kg",
        engine: "1301cc LC8 V-Twin",
        power: "180 HP @ 9,500 rpm",
        weight: "189 kg",
        category: "Супер Нейкед",
        image: "https://images.unsplash.com/photo-1568227441146-d9d774c4fd97?w=600",
        description: "1290 Super Duke R 'The Beast' нь хамгийн хүчтэй нейкед мотоцикл. 180 морины хүч, WP Apex suspension, Brembo Stylema."
      },
      { 
        name: "390 Duke", 
        price: "₮39,000,000", 
        specs: "373cc | 44HP | 149kg",
        engine: "373cc Single",
        power: "44 HP @ 9,000 rpm",
        weight: "149 kg",
        category: "Нейкед",
        image: "https://images.unsplash.com/photo-1672659604580-a23e2128d098?w=600",
        description: "390 Duke нь 'Corner Rocket' хочтой хөнгөн нейкед. A2 лицензээр унах боломжтой, хамгийн хөнгөн ангиллдаа."
      },
      { 
        name: "890 Adventure R", 
        price: "₮85,000,000", 
        specs: "889cc | 105HP | 210 kg",
        engine: "889cc LC8c Parallel Twin",
        power: "105 HP @ 8,000 rpm",
        weight: "210 kg",
        category: "Адвенчер",
        image: "https://images.unsplash.com/photo-1558981403-c5f9899a28bc?w=600",
        description: "890 Adventure R нь off-road чадвартай адвенчер мотоцикл. Rally Raid suspension, 21/18 inch дугуй, long-travel suspension."
      },
      { 
        name: "450 SX-F", 
        price: "₮55,000,000", 
        specs: "450cc | 63HP | 100kg",
        engine: "450cc Single",
        power: "63 HP @ 9,500 rpm",
        weight: "100 kg",
        category: "Motocross",
        image: "https://images.unsplash.com/photo-1512074590169-3bf81e1b64d1?w=600",
        description: "450 SX-F Factory Edition нь AMA Supercross-д хэрэглэгддэг мотоцикл. Brembo brakes, WP Cone Valve suspension."
      }
    ]
  },
  harley: {
    name: "HARLEY DAVIDSON",
    color: "#78716C",
    year: "1903",
    tagline: "Live to Ride",
    description: "Америк cruiser соёл, classic heavy silhouette. Чөлөөт сэтгэлгээ, хүчтэй V-twin engine, онгодтой замын аялал.",
    longDescription: "Harley-Davidson Motor Company нь 1903 онд Милуокид байгуулагдсан. Америкийн соёлын дүр төрх болсон cruiser мотоциклуудаараа дэлхийд алдартай. H.O.G. (Harley Owners Group) нь дэлхийн хамгийн том мотоциклийн клуб.",
    history: [
      "1903 - William Harley ба Arthur Davidson анхны мотоцикл хийсэн",
      "1909 - V-twin хөдөлгүүр анх гарсан",
      "1936 - Knucklehead хөдөлгүүр гарсан",
      "1983 - H.O.G. (Harley Owners Group) байгуулагдсан",
      "1999 - Twin Cam 88 хөдөлгүүр",
      "2017 - Milwaukee-Eight хөдөлгүүр гарсан"
    ],
    stats: [
      { label: "Жилийн түүх", value: "120+" },
      { label: "H.O.G. Гишүүн", value: "1M+" },
      { label: "Хамгийн том cc", value: "1923" },
      { label: "Улсад борлуулдаг", value: "100+" },
      { label: "Жилийн борлуулалт", value: "200K+" },
      { label: "Дилерийн тоо", value: "1,400+" }
    ],
    features: [
      "Milwaukee-Eight V-Twin хөдөлгүүр",
      "Reflex Defensive Rider Systems (RDRS)",
      "Boom! Box GTS мэдээллийн систем",
      "Daymaker LED гэрэл",
      "High Performance Touring chassis",
      "Cruise Control ба Heated Grips"
    ],
    models: [
      { 
        name: "Road King Special", 
        price: "₮89,900,000", 
        specs: "1868cc | 107HP | 380kg",
        engine: "Milwaukee-Eight 114 V-Twin",
        power: "107 HP @ 5,020 rpm",
        weight: "380 kg",
        category: "Туринг",
        image: "https://images.unsplash.com/photo-1776073455776-f6eb705a2aab?w=600",
        description: "Road King Special нь классик touring загвар. Milwaukee-Eight 114, дугуй дугуй, stripped-down харагдах байдал."
      },
      { 
        name: "Fat Boy 114", 
        price: "₮79,900,000", 
        specs: "1868cc | 107HP | 317kg",
        engine: "Milwaukee-Eight 114 V-Twin",
        power: "107 HP @ 5,020 rpm",
        weight: "317 kg",
        category: "Софтейл",
        image: "https://images.unsplash.com/photo-1776073455776-f6eb705a2aab?w=600",
        description: "Fat Boy нь Harley-ийн хамгийн танил загвар. Solid-disc хөнгөн цагаан дугуй, 240mm арын дугуй, мэтлэг дизайн."
      },
      { 
        name: "Iron 883", 
        price: "₮45,900,000", 
        specs: "883cc | 53HP | 256kg",
        engine: "Evolution 883 V-Twin",
        power: "53 HP @ 6,000 rpm",
        weight: "256 kg",
        category: "Спортстер",
        image: "https://images.unsplash.com/photo-1776073455776-f6eb705a2aab?w=600",
        description: "Iron 883 нь бүдүүлэг, stripped-down Sportster. Blacked-out хөдөлгүүр, mid-mount controls, bobber стиль."
      },
      { 
        name: "Street Glide", 
        price: "₮95,000,000", 
        specs: "1868cc | 107HP | 375kg",
        engine: "Milwaukee-Eight 114 V-Twin",
        power: "107 HP @ 5,020 rpm",
        weight: "375 kg",
        category: "Туринг",
        image: "https://images.unsplash.com/photo-1776073455776-f6eb705a2aab?w=600",
        description: "Street Glide нь Harley-ийн хамгийн алдартай touring загвар. Batwing fairing, Boom! Box GTS, cruise control."
      },
      { 
        name: "Breakout 117", 
        price: "₮85,000,000", 
        specs: "1923cc | 117HP | 305 kg",
        engine: "Milwaukee-Eight 117 V-Twin",
        power: "117 HP @ 5,020 rpm",
        weight: "305 kg",
        category: "Софтейл",
        image: "https://images.unsplash.com/photo-1776073455776-f6eb705a2aab?w=600",
        description: "Breakout 117 нь хамгийн хүчтэй Softail. 1923cc Milwaukee-Eight 117, drag-style, 240mm арын дугуй."
      }
    ]
  },
  gasgas: {
    name: "GASGAS",
    color: "#DC2626",
    year: "1985",
    tagline: "Born to Win",
    description: "Испани off-road ба trial racing heritage-тай. Enduro, motocross, trial дэлхийн аварга шалгаруулах тэмцээнд идэвхтэй оролцдог.",
    longDescription: "GasGas Motos нь 1985 онд Испанийн Жирона хотод байгуулагдсан. Off-road мотоцикл, enduro, motocross, trial мотоциклуудаараа дэлхийд алдартай. 2021 онд KTM AG-ийн хэсэг болсон.",
    history: [
      "1985 - GasGas анх байгуулагдсан",
      "1993 - Trial World Championship анхны түрүү",
      "2000 - Enduro World Championship-д оролцох эхлэл",
      "2013 - Dakar Rally-д анхны оролцоо",
      "2021 - Pierer Mobility AG (KTM) худалдан авсан",
      "2023 - GasGas Factory Racing Team байгуулагдсан"
    ],
    stats: [
      { label: "Жилийн түүх", value: "40+" },
      { label: "Enduro загвар", value: "20+" },
      { label: "Trial WC түрүү", value: "15+" },
      { label: "Enduro WC түрүү", value: "10+" },
      { label: "Улсад борлуулдаг", value: "50+" },
      { label: "Dakar түрүү", value: "2" }
    ],
    features: [
      "KTM хөдөлгүүр технологи",
      "GasGas Factory Racing DNA",
      "WP XACT Suspension",
      "Brembo braking систем",
      "Electronically controlled exhaust",
      "Map Select Switch"
    ],
    models: [
      { 
        name: "EC 350F", 
        price: "₮55,000,000", 
        specs: "350cc | 4-stroke | 106kg",
        engine: "350cc 4-Stroke Single",
        power: "58 HP @ 11,000 rpm",
        weight: "106 kg",
        category: "Enduro",
        image: "https://images.unsplash.com/photo-1512074590169-3bf81e1b64d1?w=600",
        description: "EC 350F нь дунд ангиллын хамгийн хүчтэй enduro мотоцикл. 4-stroke хөдөлгүүр, WP XACT suspension, Brembo brakes."
      },
      { 
        name: "EC 250", 
        price: "₮45,000,000", 
        specs: "250cc | 2-stroke | 105kg",
        engine: "250cc 2-Stroke Single",
        power: "50 HP @ 10,500 rpm",
        weight: "105 kg",
        category: "Enduro",
        image: "https://images.unsplash.com/photo-1512074590169-3bf81e1b64d1?w=600",
        description: "EC 250 нь хөнгөн, хүчтэй 2-stroke enduro мотоцикл. Хөнгөн жин, өндөр хүчний жин харьцаа, уян хатан."
      },
      { 
        name: "TXT Racing 300", 
        price: "₮42,000,000", 
        specs: "300cc | 2-stroke | 69kg",
        engine: "300cc 2-Stroke Single",
        power: "35 HP @ 7,500 rpm",
        weight: "69 kg",
        category: "Trial",
        image: "https://images.unsplash.com/photo-1512074590169-3bf81e1b64d1?w=600",
        description: "TXT Racing 300 нь дэлхийн шилдэг trial мотоцикл. Хөнгөн карбон бие, дээд зэргийн удирдлага, Toni Bou-ийн сонголт."
      },
      { 
        name: "MC 450F", 
        price: "₮52,000,000", 
        specs: "450cc | 4-stroke | 102kg",
        engine: "450cc 4-Stroke Single",
        power: "63 HP @ 9,500 rpm",
        weight: "102 kg",
        category: "Motocross",
        image: "https://images.unsplash.com/photo-1512074590169-3bf81e1b64d1?w=600",
        description: "MC 450F нь AMA Supercross ба MXGP-д хэрэглэгддэг мотоцикл. KTM 450 SX-F-тэй ижил платформ, GasGas branding."
      },
      { 
        name: "ES 700", 
        price: "₮62,000,000", 
        specs: "693cc | 74HP | 182kg",
        engine: "693cc Single",
        power: "74 HP @ 8,000 rpm",
        weight: "182 kg",
        category: "Супермото",
        image: "https://images.unsplash.com/photo-1512074590169-3bf81e1b64d1?w=600",
        description: "ES 700 нь supermoto ба адвенчер хослол. 693cc KTM хөдөлгүүр, 17'' дугуй, хурдан замын чадвартай."
      }
    ]
  }
};

export default function BrandDetailContent({ slug }: { slug: string }) {
  const brand = brandData[slug];

  if (!brand) {
    return (
      <div className="min-h-screen bg-[#0a0a0a] flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-white mb-4">Брэнд олдсонгүй</h1>
          <Link href="/mn/brands" className="text-[#F59E0B] hover:underline">
            Брэндүүд руу буцах
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#0a0a0a]">
      {/* Hero Section */}
      <section className="relative h-[600px] flex items-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-[#0a0a0a] via-transparent to-[#0a0a0a]" />
        <div className="absolute inset-0 opacity-20" style={{ backgroundColor: brand.color }} />
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-16 w-full">
          <div className="flex items-center gap-8">
            <div
              className="w-32 h-32 rounded-full flex items-center justify-center text-white font-extrabold text-3xl shadow-2xl"
              style={{ backgroundColor: brand.color }}
            >
              {brand.name.slice(0, 2)}
            </div>
            <div>
              <p className="text-[#F59E0B] text-sm font-semibold tracking-wider mb-2">{brand.year}</p>
              <h1 className="text-5xl lg:text-8xl font-extrabold text-white">{brand.name}</h1>
              <p className="text-2xl text-[#a3a3a3] italic mt-2">{brand.tagline}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Grid */}
      <section className="py-16 px-6 lg:px-16 bg-[#0a0a0a]">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {brand.stats.map((stat) => (
              <div key={stat.label} className="bg-[#1a1a1a] rounded-2xl p-6 text-center border border-[#222222] hover:border-[#F59E0B]/30 transition-all">
                <p className="text-[#F59E0B] text-3xl font-extrabold">{stat.value}</p>
                <p className="text-[#a3a3a3] text-sm mt-2">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 px-6 lg:px-16">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold text-white mb-6">{brand.name}-ийн тухай</h2>
              <p className="text-[#a3a3a3] text-lg leading-relaxed mb-6">{brand.description}</p>
              <p className="text-[#737373] leading-relaxed">{brand.longDescription}</p>
              
              <div className="mt-8">
                <h3 className="text-xl font-bold text-white mb-4">Түүхэн замнал</h3>
                <div className="space-y-3">
                  {brand.history.map((item, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <div className="w-2 h-2 rounded-full bg-[#F59E0B] mt-2 shrink-0" />
                      <p className="text-[#a3a3a3]">{item}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            
            <div>
              <h3 className="text-xl font-bold text-white mb-4">Технологийн онцлог</h3>
              <div className="space-y-3">
                {brand.features.map((feature, index) => (
                  <div key={index} className="bg-[#111111] rounded-xl p-4 border border-[#222222] flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full flex items-center justify-center text-[#0a0a0a] font-bold text-sm" style={{ backgroundColor: brand.color }}>
                      {index + 1}
                    </div>
                    <span className="text-white font-medium">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Models Section */}
      <section className="py-16 px-6 lg:px-16 bg-[#111111]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <span className="text-[#F59E0B] text-sm font-semibold tracking-wider">ЗАГВАРУУД</span>
            <h2 className="text-3xl lg:text-4xl font-bold text-white mt-4">{brand.name} загварууд</h2>
            <p className="text-[#737373] mt-4 max-w-2xl mx-auto">
              Дэлхийн шилдэг технологи, хүч чадал, загварын хослол
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {brand.models.map((model) => (
              <div
                key={model.name}
                className="group bg-[#0a0a0a] rounded-3xl overflow-hidden border border-[#222222] hover:border-[#F59E0B]/30 transition-all hover:shadow-2xl hover:shadow-[#F59E0B]/5"
              >
                <div className="aspect-[4/3] relative overflow-hidden">
                  <Image
                    src={model.image}
                    alt={model.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-4 right-4">
                    <span 
                      className="px-3 py-1 rounded-full text-xs font-semibold text-white"
                      style={{ backgroundColor: brand.color }}
                    >
                      {model.category}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-white mb-2">{model.name}</h3>
                  <p className="text-sm text-[#737373] mb-4">{model.description}</p>
                  
                  <div className="grid grid-cols-2 gap-2 mb-4">
                    <div className="bg-[#1a1a1a] rounded-lg p-3">
                      <p className="text-[#F59E0B] text-xs font-semibold">Хөдөлгүүр</p>
                      <p className="text-white text-sm">{model.engine}</p>
                    </div>
                    <div className="bg-[#1a1a1a] rounded-lg p-3">
                      <p className="text-[#F59E0B] text-xs font-semibold">Хүч</p>
                      <p className="text-white text-sm">{model.power}</p>
                    </div>
                    <div className="bg-[#1a1a1a] rounded-lg p-3">
                      <p className="text-[#F59E0B] text-xs font-semibold">Жин</p>
                      <p className="text-white text-sm">{model.weight}</p>
                    </div>
                    <div className="bg-[#1a1a1a] rounded-lg p-3">
                      <p className="text-[#F59E0B] text-xs font-semibold">Үзүүлэлт</p>
                      <p className="text-white text-sm">{model.specs}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between pt-4 border-t border-[#222222]">
                    <p className="text-2xl font-extrabold text-[#F59E0B]">{model.price}</p>
                    <Link
                      href="/mn/products"
                      className="px-4 py-2 bg-[#1a1a1a] text-white text-sm font-semibold rounded-lg hover:bg-[#F59E0B] hover:text-[#0a0a0a] transition-colors"
                    >
                      Дэлгэрэнгүй
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-6 lg:px-16">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            {brand.name} мотоцикл худалдаж авахыг хүсч байна уу?
          </h2>
          <p className="text-[#a3a3a3] mb-8">
            Бид танд зөвлөгөө өгөх, туршилтын жолоодлого хийх, санхүүжилтийн боломжуудыг тайлбарлахад бэлэн.
          </p>
          <div className="flex gap-4 justify-center">
            <Link
              href="/mn/products"
              className="px-8 py-4 bg-[#F59E0B] text-[#0a0a0a] font-bold rounded-xl hover:bg-[#F59E0B]/90 transition-colors"
            >
              Бүх бараа үзэх
            </Link>
            <Link
              href="/mn"
              className="px-8 py-4 border border-[#333333] text-white font-bold rounded-xl hover:border-[#F59E0B] hover:text-[#F59E0B] transition-colors"
            >
              Нүүр хуудас
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
