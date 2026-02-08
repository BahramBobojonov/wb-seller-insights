import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { mockDailyStats } from "@/data/mockData";

const OrdersChart = () => {
  return (
    <div className="glass-card p-5 opacity-0 animate-fade-in" style={{ animationDelay: "400ms" }}>
      <div className="flex items-center justify-between mb-4">
        <h3 className="font-semibold text-lg">Заказы и возвраты</h3>
        <span className="text-xs text-muted-foreground px-3 py-1 rounded-full bg-secondary">
          Последние 30 дней
        </span>
      </div>
      <div className="h-[280px]">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={mockDailyStats}>
            <CartesianGrid strokeDasharray="3 3" stroke="hsl(220, 14%, 20%)" />
            <XAxis
              dataKey="date"
              tick={{ fill: "hsl(215, 15%, 55%)", fontSize: 12 }}
              axisLine={{ stroke: "hsl(220, 14%, 20%)" }}
              tickLine={false}
            />
            <YAxis
              tick={{ fill: "hsl(215, 15%, 55%)", fontSize: 12 }}
              axisLine={false}
              tickLine={false}
            />
            <Tooltip
              contentStyle={{
                backgroundColor: "hsl(220, 18%, 13%)",
                border: "1px solid hsl(220, 14%, 20%)",
                borderRadius: "8px",
                color: "hsl(210, 20%, 92%)",
              }}
            />
            <Bar
              dataKey="orders"
              name="Заказы"
              fill="hsl(170, 70%, 45%)"
              radius={[4, 4, 0, 0]}
            />
            <Bar
              dataKey="returns"
              name="Возвраты"
              fill="hsl(0, 72%, 55%)"
              radius={[4, 4, 0, 0]}
            />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default OrdersChart;
