export interface Product {
  id: number;
  name: string;
  sku: string;
  image: string;
  category: string;
  price: number;
  sales: number;
  revenue: number;
  returns: number;
  profit: number;
  margin: number;
  rating: number;
}

export interface DailyStat {
  date: string;
  revenue: number;
  orders: number;
  returns: number;
  profit: number;
}

export const mockProducts: Product[] = [
  { id: 1, name: "Кроссовки мужские спортивные", sku: "WB-10234", image: "👟", category: "Обувь", price: 3490, sales: 842, revenue: 2940580, returns: 67, profit: 588116, margin: 20, rating: 4.7 },
  { id: 2, name: "Платье летнее женское", sku: "WB-20891", image: "👗", category: "Одежда", price: 2190, sales: 1253, revenue: 2744070, returns: 156, profit: 823221, margin: 30, rating: 4.5 },
  { id: 3, name: "Рюкзак городской", sku: "WB-30456", image: "🎒", category: "Аксессуары", price: 1890, sales: 634, revenue: 1198260, returns: 28, profit: 359478, margin: 30, rating: 4.8 },
  { id: 4, name: "Наушники беспроводные", sku: "WB-40123", image: "🎧", category: "Электроника", price: 4990, sales: 421, revenue: 2100790, returns: 42, profit: 420158, margin: 20, rating: 4.3 },
  { id: 5, name: "Крем для лица увлажняющий", sku: "WB-50789", image: "🧴", category: "Красота", price: 890, sales: 2103, revenue: 1871670, returns: 84, profit: 748668, margin: 40, rating: 4.6 },
  { id: 6, name: "Футболка хлопковая унисекс", sku: "WB-60345", image: "👕", category: "Одежда", price: 990, sales: 3241, revenue: 3208590, returns: 195, profit: 641718, margin: 20, rating: 4.4 },
  { id: 7, name: "Чехол для iPhone 15", sku: "WB-70912", image: "📱", category: "Аксессуары", price: 590, sales: 4521, revenue: 2667390, returns: 112, profit: 1066956, margin: 40, rating: 4.2 },
  { id: 8, name: "Набор кистей для макияжа", sku: "WB-80567", image: "💄", category: "Красота", price: 1490, sales: 876, revenue: 1305240, returns: 35, profit: 456834, margin: 35, rating: 4.9 },
];

export const mockDailyStats: DailyStat[] = Array.from({ length: 30 }, (_, i) => {
  const date = new Date(2026, 1, i + 1);
  const base = 300000 + Math.random() * 200000;
  const orders = Math.floor(80 + Math.random() * 60);
  return {
    date: date.toLocaleDateString("ru-RU", { day: "2-digit", month: "2-digit" }),
    revenue: Math.round(base),
    orders,
    returns: Math.floor(orders * (0.05 + Math.random() * 0.05)),
    profit: Math.round(base * (0.2 + Math.random() * 0.1)),
  };
});

export const summaryMetrics = {
  totalRevenue: 16036600,
  totalOrders: 13891,
  totalReturns: 719,
  totalProfit: 5105149,
  avgMargin: 28.6,
  avgRating: 4.55,
  revenueChange: 12.4,
  ordersChange: 8.7,
  returnsChange: -3.2,
  profitChange: 15.1,
};
