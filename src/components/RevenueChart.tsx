import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { mockDailyStats } from "@/data/mockData";

const RevenueChart = () => {
  return (
    <div className="glass-card p-5 opacity-0 animate-fade-in" style={{ animationDelay: "300ms" }}>
      <div className="flex items-center justify-between mb-4">
        <h3 className="font-semibold text-lg">Выручка и прибыль</h3>
        <span className="text-xs text-muted-foreground px-3 py-1 rounded-full bg-secondary">
          Последние 30 дней
        </span>
      </div>
      <div className="h-[280px]">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={mockDailyStats}>
            <defs>
              <linearGradient id="colorRevenue" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="hsl(170, 70%, 45%)" stopOpacity={0.3} />
                <stop offset="95%" stopColor="hsl(170, 70%, 45%)" stopOpacity={0} />
              </linearGradient>
              <linearGradient id="colorProfit" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="hsl(200, 70%, 50%)" stopOpacity={0.3} />
                <stop offset="95%" stopColor="hsl(200, 70%, 50%)" stopOpacity={0} />
              </linearGradient>
            </defs>
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
              tickFormatter={(v) => `${(v / 1000).toFixed(0)}к`}
            />
            <Tooltip
              contentStyle={{
                backgroundColor: "hsl(220, 18%, 13%)",
                border: "1px solid hsl(220, 14%, 20%)",
                borderRadius: "8px",
                color: "hsl(210, 20%, 92%)",
              }}
              formatter={(value: number) => [`${value.toLocaleString("ru-RU")} ₽`]}
            />
            <Area
              type="monotone"
              dataKey="revenue"
              name="Выручка"
              stroke="hsl(170, 70%, 45%)"
              strokeWidth={2}
              fill="url(#colorRevenue)"
            />
            <Area
              type="monotone"
              dataKey="profit"
              name="Прибыль"
              stroke="hsl(200, 70%, 50%)"
              strokeWidth={2}
              fill="url(#colorProfit)"
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default RevenueChart;
