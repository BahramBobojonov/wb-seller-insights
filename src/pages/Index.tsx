import { Calendar } from "lucide-react";
import SalesMetrics from "@/components/SalesMetrics";
import ExpensesBreakdown from "@/components/ExpensesBreakdown";
import RevenueChart from "@/components/RevenueChart";
import OrdersChart from "@/components/OrdersChart";
import ProductsTable from "@/components/ProductsTable";
import DashboardSidebar from "@/components/DashboardSidebar";

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
          {/* Sales metrics */}
          <SalesMetrics />

          {/* Expenses breakdown */}
          <ExpensesBreakdown />

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
