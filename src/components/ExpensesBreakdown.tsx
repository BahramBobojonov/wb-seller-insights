import { TrendingUp, TrendingDown, ChevronDown } from "lucide-react";
import { expenseMetrics, expensesSummary } from "@/data/mockData";

const ChangeIndicator = ({ value, className = "" }: { value: number; className?: string }) => {
  const isPositive = value > 0;
  return (
    <span className={`inline-flex items-center gap-0.5 text-xs font-medium ${isPositive ? "text-destructive" : "text-success"} ${className}`}>
      {isPositive ? <TrendingUp className="w-3 h-3" /> : <TrendingDown className="w-3 h-3" />}
      {isPositive ? "+" : ""}{value.toFixed(1)}%
    </span>
  );
};

const ShareChange = ({ value }: { value: number }) => {
  if (value === 0) return <span className="text-xs text-muted-foreground">0.0&nbsp;%</span>;
  const isPositive = value > 0;
  return (
    <span className={`text-xs font-medium ${isPositive ? "text-destructive" : "text-success"}`}>
      {isPositive ? "+" : ""}{value.toFixed(1)}&nbsp;%
    </span>
  );
};

const ExpensesBreakdown = () => {
  return (
    <div className="glass-card p-5 opacity-0 animate-fade-in" style={{ animationDelay: "200ms" }}>
      {/* Header */}
      <div className="flex items-center justify-between mb-1">
        <span className="text-sm font-medium text-muted-foreground">Расходы</span>
        <ChangeIndicator value={expensesSummary.change} />
      </div>
      <div className="text-2xl font-bold mb-1">{expensesSummary.value}</div>
      <div className="flex items-center gap-4 text-sm mb-5">
        <span className="text-muted-foreground">
          Доля от выручки: <span className="text-foreground font-medium">{expensesSummary.sharePercent}%</span>
        </span>
        <ShareChange value={expensesSummary.shareChange} />
      </div>

      {/* Expense rows */}
      <div className="space-y-0 divide-y divide-border/50">
        {expenseMetrics.map((e) => (
          <div key={e.label} className="flex items-center py-3 gap-3">
            {/* Label + badge */}
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-2">
                <span className="text-sm font-medium truncate">{e.label}</span>
                {e.badge && (
                  <span className="text-[10px] px-1.5 py-0.5 rounded bg-secondary text-muted-foreground font-medium shrink-0">
                    {e.badge}
                  </span>
                )}
              </div>
            </div>

            {/* Value */}
            <div className="text-sm font-semibold text-right min-w-[110px]">{e.value}</div>

            {/* Share percent */}
            <div className="text-xs text-muted-foreground text-right min-w-[45px]">{e.percent.toFixed(1)}%</div>

            {/* Change */}
            <div className="text-right min-w-[65px]">
              <ChangeIndicator value={e.change} />
            </div>

            {/* Share change */}
            <div className="text-right min-w-[50px]">
              <ShareChange value={e.shareChange} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ExpensesBreakdown;
