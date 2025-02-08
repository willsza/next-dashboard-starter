import { Button } from "@/components/ui/button"
import { BarChart3, FileText, LayoutDashboard, ShoppingCart } from "lucide-react"

interface SidebarProps {
  isOpen: boolean
}

export function Sidebar({ isOpen }: SidebarProps) {
  return (
    <aside
      className={`
        hidden md:flex
        flex-col
        border-r 
        bg-background
        transition-all
        duration-300
        ease-in-out
        ${isOpen ? "w-[280px]" : "w-[64px]"}
      `}
    >
      <nav className="p-4 space-y-2">
        <Button variant="ghost" className={`w-full justify-start ${!isOpen && "px-2"}`}>
          <LayoutDashboard className="h-4 w-4 shrink-0" />
          {isOpen && <span className="ml-2">Dashboard</span>}
        </Button>
        <Button variant="ghost" className={`w-full justify-start ${!isOpen && "px-2"}`}>
          <ShoppingCart className="h-4 w-4 shrink-0" />
          {isOpen && <span className="ml-2">Produtos</span>}
        </Button>
        <Button variant="ghost" className={`w-full justify-start ${!isOpen && "px-2"}`}>
          <BarChart3 className="h-4 w-4 shrink-0" />
          {isOpen && <span className="ml-2">Vendas</span>}
        </Button>
        <Button variant="ghost" className={`w-full justify-start ${!isOpen && "px-2"}`}>
          <FileText className="h-4 w-4 shrink-0" />
          {isOpen && <span className="ml-2">Relatórios</span>}
        </Button>
      </nav>
    </aside>
  )
}
