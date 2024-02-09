export interface IProduct {
  id: string;
  title: string;
  description: string;
  slug: string;
  priceLevel: 1 | 2 | 3;
  basePrice: number;
  originalUrl?: string;
  status: "available" | "sold" | "soon";
  images: string[];
  pickUpBonus: boolean;
  sellingPoints?: string[];
}

export const products = [
  {
    id: "treadmill",
    title: "Treadmill",
    description: "",
    priceLevel: 3,
    basePrice: 300,
    originalUrl: "",
    status: "available",
    images: [
      "https://5.imimg.com/data5/SELLER/Default/2022/8/AW/FB/QC/145955337/commercial-threadmill.webp",
      "https://5.imimg.com/data5/SELLER/Default/2022/8/AW/FB/QC/145955337/commercial-threadmill.webp",
    ],
    pickUpBonus: true,
  },
  {
    id: "s-desk",
    title: "Standing Desk",
    description: "An amazing product, like the best thing ever",
    priceLevel: 3,
    basePrice: 300,
    originalUrl: "asd",
    status: "available",
    images: [
      "https://5.imimg.com/data5/SELLER/Default/2022/8/AW/FB/QC/145955337/commercial-threadmill.webp",
      "https://5.imimg.com/data5/SELLER/Default/2022/8/AW/FB/QC/145955337/commercial-threadmill.webp",
      "https://5.imimg.com/data5/SELLER/Default/2022/8/AW/FB/QC/145955337/commercial-threadmill.webp",
      "https://5.imimg.com/data5/SELLER/Default/2022/8/AW/FB/QC/145955337/commercial-threadmill.webp",
      "https://5.imimg.com/data5/SELLER/Default/2022/8/AW/FB/QC/145955337/commercial-threadmill.webp",
    ],
    pickUpBonus: true,
  },
  {
    id: "l-desk",
    title: "L-shaped Desk",
    description: "",
    priceLevel: 1,
    basePrice: 300,
    originalUrl: "",
    status: "available",
    images: [
      "https://5.imimg.com/data5/SELLER/Default/2022/8/AW/FB/QC/145955337/commercial-threadmill.webp",
    ],
    pickUpBonus: true,
  },
  {
    id: "alarm",
    title: "Light Alarm",
    description: "",
    priceLevel: 2,
    basePrice: 300,
    originalUrl: "",
    status: "available",
    images: [
      "https://5.imimg.com/data5/SELLER/Default/2022/8/AW/FB/QC/145955337/commercial-threadmill.webp",
    ],
    pickUpBonus: false,
  },
  {
    id: "keyboard",
    title: "Keyboard",
    description: "",
    priceLevel: 1,
    basePrice: 300,
    originalUrl: "",
    status: "available",
    images: [
      "https://5.imimg.com/data5/SELLER/Default/2022/8/AW/FB/QC/145955337/commercial-threadmill.webp",
    ],
    pickUpBonus: false,
  },
  {
    id: "guitar",
    title: "Guitar",
    description: "",
    priceLevel: 2,
    basePrice: 300,
    originalUrl: "",
    status: "available",
    images: [
      "https://5.imimg.com/data5/SELLER/Default/2022/8/AW/FB/QC/145955337/commercial-threadmill.webp",
    ],
    pickUpBonus: false,
  },
  {
    id: "tv",
    title: "Bush TV",
    description: "",
    priceLevel: 2,
    basePrice: 300,
    originalUrl: "",
    status: "available",
    images: [
      "https://5.imimg.com/data5/SELLER/Default/2022/8/AW/FB/QC/145955337/commercial-threadmill.webp",
    ],
    pickUpBonus: false,
  },
  {
    id: "monitor",
    title: "Gaming Monitor",
    description: "",
    priceLevel: 3,
    basePrice: 300,
    status: "available",
    images: [
      "https://5.imimg.com/data5/SELLER/Default/2022/8/AW/FB/QC/145955337/commercial-threadmill.webp",
    ],
    pickUpBonus: false,
  },
  {
    id: "chair",
    title: "Gaming Chair",
    description: "",
    priceLevel: 1,
    basePrice: 300,
    originalUrl: "",
    status: "available",
    images: [
      "https://5.imimg.com/data5/SELLER/Default/2022/8/AW/FB/QC/145955337/commercial-threadmill.webp",
    ],
    pickUpBonus: true,
  },
  {
    id: "drawer",
    title: "Compact Drawers",
    description: "",
    priceLevel: 2,
    basePrice: 300,
    status: "available",
    images: [
      "https://5.imimg.com/data5/SELLER/Default/2022/8/AW/FB/QC/145955337/commercial-threadmill.webp",
    ],
    pickUpBonus: true,
  },
  {
    id: "weight",
    title: "Adjustable Weights",
    description: "",
    priceLevel: 3,
    basePrice: 300,
    status: "available",
    images: [
      "https://5.imimg.com/data5/SELLER/Default/2022/8/AW/FB/QC/145955337/commercial-threadmill.webp",
    ],
    pickUpBonus: true,
  },
];
