import { TrendingUp, TrendingDown } from "lucide-react";

interface MetricCardProps {
  title: string;
  value: string;
  change: number;
  icon: React.ReactNode;
  delay?: number;
}

const MetricCard = ({ title, value, change, icon, delay = 0 }: MetricCardProps) => {
  const isPositive = change > 0;

  return (
    <div
      className="glass-card metric-glow p-5 opacity-0 animate-fade-in"
      style={{ animationDelay: `${delay}ms` }}
    >
      <div className="flex items-center justify-between mb-3">
        <span className="text-sm text-muted-foreground">{title}</span>
        <div className="p-2 rounded-lg bg-primary/10 text-primary">{icon}</div>
      </div>
      <div className="text-2xl font-bold mb-1">{value}</div>
      <div className={`flex items-center gap-1 text-sm ${isPositive ? "text-success" : "text-destructive"}`}>
        {isPositive ? <TrendingUp className="w-3.5 h-3.5" /> : <TrendingDown className="w-3.5 h-3.5" />}
        <span>{isPositive ? "+" : ""}{change}%</span>
        <span className="text-muted-foreground ml-1">vs прошлый период</span>
      </div>
    </div>
  );
};

export default MetricCard;
