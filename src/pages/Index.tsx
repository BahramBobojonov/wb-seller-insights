import { DollarSign, ShoppingCart, RotateCcw, TrendingUp, Calendar } from "lucide-react";
import MetricCard from "@/components/MetricCard";
import RevenueChart from "@/components/RevenueChart";
import OrdersChart from "@/components/OrdersChart";
import ProductsTable from "@/components/ProductsTable";
import DashboardSidebar from "@/components/DashboardSidebar";
import { summaryMetrics } from "@/data/mockData";

const formatCurrency = (n: number) =>
  new Intl.NumberFormat("ru-RU", { style: "currency", currency: "RUB", maximumFractionDigits: 0 }).format(n);

const Index = () => {
  return (
    <div className="flex min-h-screen">
      <DashboardSidebar />

      <main className="flex-1 overflow-auto">
        {/* Header */}
        <header className="flex items-center justify-between px-8 py-5 border-b border-border">
          <div>
            <h2 className="text-2xl font-bold">Статистика продаж</h2>
            <p className="text-sm text-muted-foreground mt-0.5">Обзор ключевых метрик вашего магазина</p>
          </div>
          <div className="flex items-center gap-2 px-4 py-2 rounded-lg bg-secondary text-sm text-secondary-foreground">
            <Calendar className="w-4 h-4" />
            <span>01.01.2026 – 30.01.2026</span>
          </div>
        </header>

        {/* Content */}
        <div className="p-8 space-y-6">
          {/* Metric cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4">
            <MetricCard
              title="Выручка"
              value={formatCurrency(summaryMetrics.totalRevenue)}
              change={summaryMetrics.revenueChange}
              icon={<DollarSign className="w-4 h-4" />}
              delay={0}
            />
            <MetricCard
              title="Заказы"
              value={summaryMetrics.totalOrders.toLocaleString("ru-RU")}
              change={summaryMetrics.ordersChange}
              icon={<ShoppingCart className="w-4 h-4" />}
              delay={100}
            />
            <MetricCard
              title="Возвраты"
              value={summaryMetrics.totalReturns.toLocaleString("ru-RU")}
              change={summaryMetrics.returnsChange}
              icon={<RotateCcw className="w-4 h-4" />}
              delay={200}
            />
            <MetricCard
              title="Прибыль"
              value={formatCurrency(summaryMetrics.totalProfit)}
              change={summaryMetrics.profitChange}
              icon={<TrendingUp className="w-4 h-4" />}
              delay={300}
            />
          </div>

          {/* Charts */}
          <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">
            <RevenueChart />
            <OrdersChart />
          </div>

          {/* Table */}
          <ProductsTable />
        </div>
      </main>
    </div>
  );
};

export default Index;
