type Product = {
  _id: string;
  title: string;
  description: string;
  oldPrice: number;
  price: number;
  brand: string;
  image: string;
  isNew: boolean;
  category: string;
  quantity: number;
  made: string;
  stone: string;
  ranking: number;
  material: string;
  gender: string;
};

export const ProductData: Product[] = [
  {
    _id: "1",
    title: "Gold Plated Hoop Earrings",
    description: "Elegant gold plated hoop earrings for everyday wear.",
    oldPrice: 35.99,
    price: 1125.99,
    brand: "FashionJewels",
    image: "https://picsum.photos//id/789/780/420",
    isNew: false,
    quantity: 1,
    made: "handmade",
    category: "earring",
    stone: "pearl",
    ranking: 3,
    material: "silver",
    gender: "woman",
  },
  {
    _id: "2",
    title: "Silver Diamond Necklace",
    description: "Stunning silver necklace with a sparkling diamond pendant.",
    oldPrice: 89.99,
    price: 6129.99,
    brand: "LuxuryGems",
    image: "https://picsum.photos//id/3/780/420",
    isNew: true,
    category: "Necklaces",
    quantity: 1,
    made: "handMade",
    stone: "diamond",
    ranking: 4,
    material: "silver",
    gender: "woman",
  },
  {
    _id: "3",
    title: "Rose Gold Bangle Bracelet",
    description: "Chic rose gold bangle bracelet to complement any outfit.",
    oldPrice: 45.99,
    price: 3559.99,
    brand: "TrendyAccessories",
    image: "https://picsum.photos//id/1/780/420",
    isNew: true,
    category: "Bracelets",
    quantity: 1,
    made: "handMade",
    stone: "none",
    ranking: 2,
    material: "rose gold",
    gender: "woman",
  },
  {
    _id: "20",
    title: "Sapphire and Diamond Ring",
    description: "Exquisite sapphire and diamond ring for a touch of luxury.",
    oldPrice: 299.99,
    price: 2549.99,
    brand: "GlamourGems",
    image: "https://picsum.photos//id/543/780/420",
    isNew: false,
    category: "Rings",
    quantity: 1,
    made: "handMade",
    stone: "sapphire and diamond",
    ranking: 5,
    material: "gold",
    gender: "woman",
  },
  {
    _id: "21",
    title: "Pearl Stud Earrings",
    description: "Classic pearl stud earrings that never go out of style.",
    oldPrice: 19.99,
    price: 214.99,
    brand: "TimelessPearls",
    image: "https://picsum.photos//id/4/780/420",
    isNew: true,
    category: "Earrings",
    quantity: 1,
    made: "handMade",
    stone: "pearl",
    ranking: 4,
    material: "silver",
    gender: "woman",
  },
  {
    _id: "22",
    title: "Diamond Tennis Bracelet",
    description:
      "Elegant diamond tennis bracelet for a touch of sophistication.",
    oldPrice: 199.99,
    price: 4179.99,
    brand: "LuxuryGems",
    image: "https://picsum.photos//id/32/780/420",
    isNew: false,
    category: "Bracelets",
    quantity: 1,
    made: "handMade",
    stone: "diamond",
    ranking: 4,
    material: "gold",
    gender: "man",
  },
  {
    _id: "23",
    title: "Emerald Pendant Necklace",
    description: "Gorgeous emerald pendant necklace that catches the eye.",
    oldPrice: 79.99,
    price: 759.99,
    brand: "GlamourGems",
    image: "https://picsum.photos//id/8/780/420",
    isNew: true,
    category: "Necklaces",
    quantity: 1,
    made: "handMade",
    stone: "no gem",
    ranking: 4,
    material: "gold",
    gender: "woman",
  },
  {
    _id: "24",
    title: "Silver and Turquoise Ring",
    description: "Stunning silver ring with a turquoise gemstone.",
    oldPrice: 34.99,
    price: 629.99,
    brand: "TrendyAccessories",
    image: "https://picsum.photos//id/456/780/420",
    isNew: true,
    category: "Rings",
    quantity: 1,
    made: "handMade",
    stone: "turquoise",
    ranking: 3,
    material: "silver",
    gender: "woman",
  },
  {
    _id: "25",
    title: "Charm Bracelet",
    description: "Adorable charm bracelet with various cute charms.",
    oldPrice: 27.99,
    price: 519.99,
    brand: "FashionJewels",
    image: "https://picsum.photos//id/789/780/420",
    isNew: false,
    category: "Bracelets",
    quantity: 1,
    made: "handMade",
    stone: "noGem",
    ranking: 3,
    material: "gold",
    gender: "man",
  },
  {
    _id: "26",
    title: "Diamond Cluster Earrings",
    description: "Glamorous diamond cluster earrings for special occasions.",
    oldPrice: 89.99,
    price: 69.99,
    brand: "LuxuryGems",
    image: "https://picsum.photos//id/321/780/420",
    isNew: true,
    category: "Earrings",
    quantity: 1,
    made: "manufacture",
    stone: "diamond",
    ranking: 4,
    material: "gold",
    gender: "woman",
  },
  {
    _id: "27",
    title: "Ruby and Diamond Ring",
    description: "Exquisite ruby and diamond ring that commands attention.",
    oldPrice: 249.99,
    price: 199.99,
    brand: "GlamourGems",
    image: "https://picsum.photos//id/12/780/420",
    isNew: false,
    category: "Rings",
    quantity: 1,
    made: "handMade",
    stone: "ruby and diamond",
    ranking: 5,
    material: "gold",
    gender: "both",
  },
  {
    _id: "28",
    title: "Gold Chain Necklace",
    description: "Simple and elegant gold chain necklace for everyday wear.",
    oldPrice: 39.99,
    price: 29.99,
    brand: "TimelessPearls",
    image: "https://picsum.photos//id/21/780/420",
    isNew: false,
    category: "Necklaces",
    quantity: 1,
    made: "handMade",
    stone: "none",
    ranking: 2,
    material: "gold",
    gender: "woman",
  },
  {
    _id: "29",
    title: "Cubic Zirconia Stud Earrings",
    description: "Affordable yet stunning cubic zirconia stud earrings.",
    oldPrice: 12.99,
    price: 449.99,
    brand: "FashionJewels",
    image: "https://picsum.photos//id/42/780/420",
    isNew: true,
    category: "Earrings",
    quantity: 1,
    made: "manufacture",
    stone: "cubic zirconia",
    ranking: 3,
    material: "silver",
    gender: "both",
  },
  {
    _id: "30",
    title: "Rose Gold Anklet",
    description: "Trendy rose gold anklet to add some flair to your style.",
    oldPrice: 22.99,
    price: 6618.99,
    brand: "TrendyAccessories",
    image: "https://picsum.photos//id/12/780/420",
    isNew: true,
    category: "Anklets",
    quantity: 1,
    made: "manufacture",
    stone: "none",
    ranking: 2,
    material: "rose gold",
    gender: "woman",
  },
  {
    _id: "31",
    title: "Sapphire and Pearl Necklace",
    description:
      "A beautiful combination of sapphires and pearls in a necklace.",
    oldPrice: 159.99,
    price: 88139.99,
    brand: "ElegantJewels",
    image: "https://picsum.photos//id/123/780/420",
    isNew: true,
    category: "Necklaces",
    quantity: 1,
    made: "handMade",
    stone: "sapphire and pearl",
    ranking: 4,
    material: "white gold",
    gender: "woman",
  },
  {
    _id: "32",
    title: "Men's Stainless Steel Bracelet",
    description: "Stylish stainless steel bracelet designed for men.",
    oldPrice: 49.99,
    price: 4439.99,
    brand: "ModernMens",
    image: "https://picsum.photos//id/789/780/420",
    isNew: false,
    category: "Bracelets",
    quantity: 1,
    made: "handMade",
    stone: "none",
    ranking: 3,
    material: "stainless steel",
    gender: "man",
  },
  {
    _id: "33",
    title: "Ruby Heart Pendant",
    description: "A romantic ruby heart pendant for a special someone.",
    oldPrice: 69.99,
    price: 3359.99,
    brand: "RomanticJewels",
    image: "https://picsum.photos//id/456/780/420",
    isNew: true,
    category: "Necklaces",
    quantity: 1,
    made: "handMade",
    stone: "ruby",
    ranking: 4,
    material: "gold",
    gender: "woman",
  },
  {
    _id: "34",
    title: "Leather Wrap Bracelet",
    description: "Trendy leather wrap bracelet with multiple layers.",
    oldPrice: 29.99,
    price: 1124.99,
    brand: "UrbanStyle",
    image: "https://picsum.photos//id/21/780/420",
    isNew: false,
    category: "Bracelets",
    quantity: 1,
    made: "handMade",
    stone: "none",
    ranking: 3,
    material: "leather",
    gender: "both",
  },
  {
    _id: "456",
    title: "Charm Bracelet",
    description: "Adorable charm bracelet with various cute charms.",
    oldPrice: 27.99,
    price: 519.99,
    brand: "FashionJewels",
    image: "https://picsum.photos//id/789/780/420",
    isNew: false,
    category: "Bracelets",
    quantity: 1,
    made: "handMade",
    stone: "noGem",
    ranking: 3,
    material: "gold",
    gender: "man",
  },
  {
    _id: "123",
    title: "Diamond Cluster Earrings",
    description: "Glamorous diamond cluster earrings for special occasions.",
    oldPrice: 89.99,
    price: 69.99,
    brand: "LuxuryGems",
    image: "https://picsum.photos//id/321/780/420",
    isNew: true,
    category: "Earrings",
    quantity: 1,
    made: "manufacture",
    stone: "diamond",
    ranking: 4,
    material: "gold",
    gender: "woman",
  },
  {
    _id: "53456",
    title: "Ruby and Diamond Ring",
    description: "Exquisite ruby and diamond ring that commands attention.",
    oldPrice: 249.99,
    price: 199.99,
    brand: "GlamourGems",
    image: "https://picsum.photos//id/12/780/420",
    isNew: false,
    category: "Rings",
    quantity: 1,
    made: "handMade",
    stone: "ruby and diamond",
    ranking: 5,
    material: "gold",
    gender: "both",
  },
  {
    _id: "5634",
    title: "Gold Chain Necklace",
    description: "Simple and elegant gold chain necklace for everyday wear.",
    oldPrice: 39.99,
    price: 29.99,
    brand: "TimelessPearls",
    image: "https://picsum.photos//id/21/780/420",
    isNew: false,
    category: "Necklaces",
    quantity: 1,
    made: "handMade",
    stone: "none",
    ranking: 2,
    material: "gold",
    gender: "woman",
  },
  {
    _id: "31231",
    title: "Cubic Zirconia Stud Earrings",
    description: "Affordable yet stunning cubic zirconia stud earrings.",
    oldPrice: 12.99,
    price: 449.99,
    brand: "FashionJewels",
    image: "https://picsum.photos//id/42/780/420",
    isNew: true,
    category: "Earrings",
    quantity: 1,
    made: "manufacture",
    stone: "cubic zirconia",
    ranking: 3,
    material: "silver",
    gender: "both",
  },
  {
    _id: "267",
    title: "Rose Gold Anklet",
    description: "Trendy rose gold anklet to add some flair to your style.",
    oldPrice: 22.99,
    price: 6618.99,
    brand: "TrendyAccessories",
    image: "https://picsum.photos//id/12/780/420",
    isNew: true,
    category: "Anklets",
    quantity: 1,
    made: "manufacture",
    stone: "none",
    ranking: 2,
    material: "rose gold",
    gender: "woman",
  },
  {
    _id: "897",
    title: "Sapphire and Pearl Necklace",
    description:
      "A beautiful combination of sapphires and pearls in a necklace.",
    oldPrice: 159.99,
    price: 88139.99,
    brand: "ElegantJewels",
    image: "https://picsum.photos//id/123/780/420",
    isNew: true,
    category: "Necklaces",
    quantity: 1,
    made: "handMade",
    stone: "sapphire and pearl",
    ranking: 4,
    material: "white gold",
    gender: "woman",
  },
  {
    _id: "3241",
    title: "Men's Stainless Steel Bracelet",
    description: "Stylish stainless steel bracelet designed for men.",
    oldPrice: 49.99,
    price: 4439.99,
    brand: "ModernMens",
    image: "https://picsum.photos//id/789/780/420",
    isNew: false,
    category: "Bracelets",
    quantity: 1,
    made: "handMade",
    stone: "none",
    ranking: 3,
    material: "stainless steel",
    gender: "man",
  },
  {
    _id: "3245",
    title: "Ruby Heart Pendant",
    description: "A romantic ruby heart pendant for a special someone.",
    oldPrice: 69.99,
    price: 3359.99,
    brand: "RomanticJewels",
    image: "https://picsum.photos//id/456/780/420",
    isNew: true,
    category: "Necklaces",
    quantity: 1,
    made: "handMade",
    stone: "ruby",
    ranking: 4,
    material: "gold",
    gender: "woman",
  },
  {
    _id: "231",
    title: "Leather Wrap Bracelet",
    description: "Trendy leather wrap bracelet with multiple layers.",
    oldPrice: 29.99,
    price: 1124.99,
    brand: "UrbanStyle",
    image: "https://picsum.photos//id/21/780/420",
    isNew: false,
    category: "Bracelets",
    quantity: 1,
    made: "handMade",
    stone: "none",
    ranking: 3,
    material: "leather",
    gender: "both",
  },
];
