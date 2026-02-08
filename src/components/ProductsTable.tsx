import { mockProducts } from "@/data/mockData";
import { ArrowUpDown } from "lucide-react";

const ProductsTable = () => {
  return (
    <div className="glass-card p-5 opacity-0 animate-fade-in" style={{ animationDelay: "500ms" }}>
      <div className="flex items-center justify-between mb-4">
        <h3 className="font-semibold text-lg">Топ товаров</h3>
        <span className="text-xs text-muted-foreground px-3 py-1 rounded-full bg-secondary">
          {mockProducts.length} товаров
        </span>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-border">
              {["Товар", "Артикул", "Цена", "Продажи", "Выручка", "Возвраты", "Прибыль", "Маржа", "Рейтинг"].map(
                (h) => (
                  <th
                    key={h}
                    className="text-left py-3 px-2 text-muted-foreground font-medium whitespace-nowrap"
                  >
                    <span className="flex items-center gap-1 cursor-pointer hover:text-foreground transition-colors">
                      {h}
                      <ArrowUpDown className="w-3 h-3" />
                    </span>
                  </th>
                )
              )}
            </tr>
          </thead>
          <tbody>
            {mockProducts.map((p) => (
              <tr
                key={p.id}
                className="border-b border-border/50 hover:bg-secondary/30 transition-colors"
              >
                <td className="py-3 px-2">
                  <div className="flex items-center gap-2">
                    <span className="text-xl">{p.image}</span>
                    <span className="font-medium truncate max-w-[180px]">{p.name}</span>
                  </div>
                </td>
                <td className="py-3 px-2 text-muted-foreground">{p.sku}</td>
                <td className="py-3 px-2">{p.price.toLocaleString("ru-RU")} ₽</td>
                <td className="py-3 px-2">{p.sales.toLocaleString("ru-RU")}</td>
                <td className="py-3 px-2 font-medium">{p.revenue.toLocaleString("ru-RU")} ₽</td>
                <td className="py-3 px-2 text-destructive">{p.returns}</td>
                <td className="py-3 px-2 text-success font-medium">
                  {p.profit.toLocaleString("ru-RU")} ₽
                </td>
                <td className="py-3 px-2">{p.margin}%</td>
                <td className="py-3 px-2">
                  <span className="flex items-center gap-1">
                    ⭐ {p.rating}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ProductsTable;
