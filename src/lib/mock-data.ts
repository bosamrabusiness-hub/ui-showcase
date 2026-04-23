// Shared mock data for Gamers Unlimited UI
import game1 from "@/assets/game-1.jpg";
import game2 from "@/assets/game-2.jpg";
import game3 from "@/assets/game-3.jpg";
import game4 from "@/assets/game-4.jpg";
import game5 from "@/assets/game-5.jpg";
import game6 from "@/assets/game-6.jpg";
import hero1 from "@/assets/hero-1.jpg";
import hero2 from "@/assets/hero-2.jpg";
import hero3 from "@/assets/hero-3.jpg";

export type OrderStatus =
  | "PENDING_PAYMENT"
  | "PROOF_UPLOADED"
  | "UNDER_REVIEW"
  | "REJECTED_NEEDS_PROOF"
  | "APPROVED"
  | "DELIVERED";

export interface Product {
  id: string;
  slug: string;
  title: string;
  cover: string;
  price: number;
  oldPrice?: number;
  discount?: number;
  category: string;
  platform: string;
  type: string;
  region: string;
  rating: number;
  shortDesc: string;
}

export const heroes = [
  { id: 1, image: hero1, title: "Neon Realms: Ascension", subtitle: "Open-world cyber RPG", tag: "New Release" },
  { id: 2, image: hero2, title: "Velocity Grid 2077", subtitle: "Hover-racing reborn", tag: "Hot Deal" },
  { id: 3, image: hero3, title: "Dragonfall Saga", subtitle: "Epic fantasy adventure", tag: "Pre-order" },
];

export const products: Product[] = [
  { id: "p1", slug: "shadow-cathedral", title: "Shadow Cathedral", cover: game1, price: 39.9, oldPrice: 59.9, discount: 33, category: "RPG", platform: "PC", type: "Offline account", region: "Region Free", rating: 4.8, shortDesc: "A gothic action RPG of cursed knights and divine fire." },
  { id: "p2", slug: "starbound-legion", title: "Starbound Legion", cover: game2, price: 49.9, category: "Shooter", platform: "PC", type: "Offline account", region: "Region Free", rating: 4.6, shortDesc: "Co-op sci-fi shooter across the alien frontier." },
  { id: "p3", slug: "ashen-streets", title: "Ashen Streets", cover: game3, price: 29.9, oldPrice: 44.9, discount: 33, category: "Survival", platform: "PC", type: "Offline account", region: "Region Free", rating: 4.4, shortDesc: "Post-apocalyptic survival in a fallen neon megacity." },
  { id: "p4", slug: "blossom-blade", title: "Blossom Blade", cover: game4, price: 34.9, category: "Action", platform: "PC", type: "Offline account", region: "Region Free", rating: 4.7, shortDesc: "A poetic samurai journey under endless cherry skies." },
  { id: "p5", slug: "arcane-veil", title: "Arcane Veil", cover: game5, price: 24.9, oldPrice: 39.9, discount: 38, category: "RPG", platform: "PC", type: "Offline account", region: "Region Free", rating: 4.5, shortDesc: "Weave forbidden magic in a forest that breathes." },
  { id: "p6", slug: "tempest-tides", title: "Tempest Tides", cover: game6, price: 44.9, category: "Adventure", platform: "PC", type: "Offline account", region: "Region Free", rating: 4.3, shortDesc: "Sail dangerous seas, hunt krakens, raid empires." },
];

export const categories = ["All goods", "Offline account", "Online account", "Pre-orders", "Subscriptions", "Gift cards"];

export const news = [
  { slug: "winter-sale-2026", title: "Winter Sale 2026: up to 70% off premium titles", excerpt: "Our biggest sale of the year is live across all platforms.", date: "Apr 18, 2026", cover: hero2, category: "Sales" },
  { slug: "neon-realms-launch", title: "Neon Realms: Ascension launches worldwide", excerpt: "The hotly anticipated cyber RPG is finally here.", date: "Apr 15, 2026", cover: hero1, category: "Releases" },
  { slug: "denuvo-update", title: "Updated DRM compatibility list", excerpt: "Check our latest matrix of supported titles.", date: "Apr 10, 2026", cover: game1, category: "Tech" },
  { slug: "spring-tournament", title: "Gamers Unlimited Spring Tournament announced", excerpt: "Compete for $25k prize pool across 4 titles.", date: "Apr 02, 2026", cover: game2, category: "Esports" },
];

export const articles = [
  { slug: "buy-safely", title: "How to buy game accounts safely", excerpt: "A buyer's guide to verified delivery.", date: "Apr 12, 2026", cover: game3, category: "Guide" },
  { slug: "offline-vs-online", title: "Offline vs online accounts: what's the difference?", excerpt: "Choose the right account type for your needs.", date: "Apr 08, 2026", cover: game4, category: "Guide" },
  { slug: "warranty-explained", title: "Our warranty, explained in 3 minutes", excerpt: "Coverage, limits, and how to claim.", date: "Apr 04, 2026", cover: game5, category: "Help" },
];

export const reviews = [
  { id: "r1", user: "Marcus L.", product: "Shadow Cathedral", rating: 5, date: "Apr 19, 2026", text: "Smooth purchase, license arrived in chat within 15 minutes. Flawless." },
  { id: "r2", user: "Aiko T.", product: "Blossom Blade", rating: 5, date: "Apr 18, 2026", text: "Verified and trustworthy. Will buy again." },
  { id: "r3", user: "Diego R.", product: "Starbound Legion", rating: 4, date: "Apr 17, 2026", text: "Fast support, friendly admin. Took ~30 min total." },
  { id: "r4", user: "Priya N.", product: "Arcane Veil", rating: 5, date: "Apr 15, 2026", text: "Best store I've used. Reveal license worked instantly." },
];

export interface Order {
  id: string;
  ref: string;
  product: Product;
  status: OrderStatus;
  createdAt: string;
  amount: number;
  license?: string;
}

export const orders: Order[] = [
  { id: "ord_001", ref: "GU-7F2A91", product: products[0], status: "DELIVERED", createdAt: "Apr 20, 2026 · 14:22", amount: 39.9, license: "XQR7-NMVB-9K3L-ZP4T-WY81" },
  { id: "ord_002", ref: "GU-A82B40", product: products[3], status: "UNDER_REVIEW", createdAt: "Apr 22, 2026 · 09:11", amount: 34.9 },
  { id: "ord_003", ref: "GU-D14C77", product: products[2], status: "PENDING_PAYMENT", createdAt: "Apr 23, 2026 · 08:02", amount: 29.9 },
  { id: "ord_004", ref: "GU-B903E1", product: products[4], status: "REJECTED_NEEDS_PROOF", createdAt: "Apr 19, 2026 · 18:40", amount: 24.9 },
];

export const adminQueue = [
  { id: "ord_002", ref: "GU-A82B40", buyer: "marcus@example.com", product: "Blossom Blade", status: "UNDER_REVIEW" as OrderStatus, proofs: 1, slaMinutes: 12, amount: 34.9 },
  { id: "ord_005", ref: "GU-E55A02", buyer: "aiko@example.com", product: "Shadow Cathedral", status: "PROOF_UPLOADED" as OrderStatus, proofs: 1, slaMinutes: 4, amount: 39.9 },
  { id: "ord_006", ref: "GU-1F88C9", buyer: "diego@example.com", product: "Tempest Tides", status: "UNDER_REVIEW" as OrderStatus, proofs: 2, slaMinutes: 38, amount: 44.9 },
  { id: "ord_007", ref: "GU-77BD12", buyer: "priya@example.com", product: "Arcane Veil", status: "PENDING_PAYMENT" as OrderStatus, proofs: 0, slaMinutes: 0, amount: 24.9 },
  { id: "ord_008", ref: "GU-22EE45", buyer: "lina@example.com", product: "Starbound Legion", status: "APPROVED" as OrderStatus, proofs: 1, slaMinutes: 56, amount: 49.9 },
];
