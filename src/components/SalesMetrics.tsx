import { TrendingUp, TrendingDown } from "lucide-react";
import { salesMetrics, profitSummary } from "@/data/mockData";

const ChangeIndicator = ({ value }: { value: number }) => {
  const isPositive = value > 0;
  return (
    <span className={`inline-flex items-center gap-0.5 text-xs font-medium ${isPositive ? "text-success" : "text-destructive"}`}>
      {isPositive ? <TrendingUp className="w-3 h-3" /> : <TrendingDown className="w-3 h-3" />}
      {isPositive ? "+" : ""}{value.toFixed(2)}&nbsp;%
    </span>
  );
};

const SalesMetrics = () => {
  return (
    <div className="space-y-4 opacity-0 animate-fade-in" style={{ animationDelay: "0ms" }}>
      {/* Profit hero card */}
      <div className="glass-card metric-glow p-5">
        <div className="flex items-center justify-between mb-1">
          <span className="text-sm font-medium text-muted-foreground">Прибыль</span>
          <ChangeIndicator value={profitSummary.change} />
        </div>
        <div className="text-3xl font-bold mb-2">{profitSummary.value}</div>
        <div className="flex items-center gap-4 text-sm">
          <span className="text-muted-foreground">
            Маржа: <span className="text-foreground font-medium">{profitSummary.marginPercent}%</span>
          </span>
          <ChangeIndicator value={profitSummary.marginChange} />
        </div>
      </div>

      {/* Metric grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
        {salesMetrics.map((m, i) => (
          <div
            key={m.label}
            className="glass-card p-4 opacity-0 animate-fade-in"
            style={{ animationDelay: `${(i + 1) * 60}ms` }}
          >
            <span className="text-xs text-muted-foreground block mb-1.5">{m.label}</span>
            <div className="text-lg font-semibold mb-1">{m.value}</div>
            <ChangeIndicator value={m.change} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default SalesMetrics;
