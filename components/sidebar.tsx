import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { BarChart3, FileText, LayoutDashboard, Search, ShoppingCart } from "lucide-react"

interface SidebarProps {
  isOpen: boolean
}

export function Sidebar({ isOpen }: SidebarProps) {
  return (
    <aside
      className={`
        fixed md:relative
        flex
        flex-col
        border-r 
        bg-background
        transition-all
        duration-300
        ease-in-out
        h-full
        z-40
        overflow-hidden
        ${isOpen ? "w-[280px] translate-x-0" : "w-0 -translate-x-full md:w-[64px] md:translate-x-0"}
      `}
    >
      <div className={`p-4 ${!isOpen && "md:visible invisible"}`}>
        <div className="relative mb-4 md:hidden">
          <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input 
            placeholder="Pesquisar" 
            className="pl-8 w-full bg-white" 
          />
        </div>
        <nav className="space-y-2">
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
      </div>
    </aside>
  )
}
