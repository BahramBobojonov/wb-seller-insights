import {
  BarChart3,
  ShoppingCart,
  TrendingUp,
  Package,
  Wallet,
  Settings,
  HelpCircle,
  LayoutDashboard,
  Search,
} from "lucide-react";
import { NavLink } from "@/components/NavLink";

const navItems = [
  { icon: LayoutDashboard, label: "Дашборд", to: "/" },
  { icon: BarChart3, label: "Аналитика", to: "/analytics" },
  { icon: ShoppingCart, label: "Заказы", to: "/orders" },
  { icon: Package, label: "Товары", to: "/products" },
  { icon: TrendingUp, label: "Продвижение", to: "/marketing" },
  { icon: Wallet, label: "Финансы", to: "/finances" },
];

const bottomItems = [
  { icon: Settings, label: "Настройки", to: "/settings" },
  { icon: HelpCircle, label: "Поддержка", to: "/support" },
];

const DashboardSidebar = () => {
  return (
    <aside className="w-64 min-h-screen bg-sidebar border-r border-sidebar-border flex flex-col">
      {/* Logo */}
      <div className="p-5 border-b border-sidebar-border">
        <h1 className="text-xl font-bold gradient-text">WB Analytics</h1>
        <p className="text-xs text-muted-foreground mt-0.5">Аналитика продавца</p>
      </div>

      {/* Search */}
      <div className="px-3 py-3">
        <div className="flex items-center gap-2 px-3 py-2 rounded-lg bg-secondary/50 text-muted-foreground">
          <Search className="w-4 h-4" />
          <span className="text-sm">Поиск...</span>
        </div>
      </div>

      {/* Main nav */}
      <nav className="flex-1 px-3 space-y-1">
        <p className="text-xs text-muted-foreground uppercase tracking-wider px-3 mb-2">Меню</p>
        {navItems.map((item) => (
          <NavLink
            key={item.to}
            to={item.to}
            end={item.to === "/"}
            className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-sidebar-foreground hover:bg-sidebar-accent hover:text-sidebar-accent-foreground transition-colors text-sm"
            activeClassName="bg-primary/10 text-primary font-medium"
          >
            <item.icon className="w-4.5 h-4.5" />
            <span>{item.label}</span>
          </NavLink>
        ))}
      </nav>

      {/* Bottom nav */}
      <div className="px-3 pb-4 space-y-1 border-t border-sidebar-border pt-3">
        {bottomItems.map((item) => (
          <NavLink
            key={item.to}
            to={item.to}
            className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-sidebar-foreground hover:bg-sidebar-accent hover:text-sidebar-accent-foreground transition-colors text-sm"
            activeClassName="bg-primary/10 text-primary font-medium"
          >
            <item.icon className="w-4.5 h-4.5" />
            <span>{item.label}</span>
          </NavLink>
        ))}

        {/* User */}
        <div className="flex items-center gap-3 px-3 py-3 mt-2 rounded-lg bg-secondary/30">
          <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center text-primary font-semibold text-sm">
            АМ
          </div>
          <div>
            <p className="text-sm font-medium">Алексей М.</p>
            <p className="text-xs text-muted-foreground">Pro план</p>
          </div>
        </div>
      </div>
    </aside>
  );
};

export default DashboardSidebar;
