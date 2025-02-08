import { BarChart3, FileText, LayoutDashboard, Search, ShoppingCart } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

interface SidebarProps {
  isOpen: boolean
}

export function Sidebar({ isOpen }: SidebarProps) {
  return (
    <aside
      className={`
        flex
        flex-col
        border-r 
        bg-background
        transition-all
        duration-300
        ease-in-out
        h-[calc(100vh-64px)]
        z-40
        overflow-hidden
        ${isOpen ? "w-[280px] translate-x-0" : "w-0 -translate-x-full md:w-[74px] md:translate-x-0"}
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
          <Button variant="ghost" className={`w-full justify-start h-12 ${!isOpen && "px-2"}`}>
            <LayoutDashboard className="!h-6 !w-6 shrink-0" />
            {isOpen && <span className="ml-4 text-base">Dashboard</span>}
          </Button>
          <Button variant="ghost" className={`w-full justify-start h-12 ${!isOpen && "px-2"}`}>
            <ShoppingCart className="!h-6 !w-6 shrink-0" />
            {isOpen && <span className="ml-4 text-base">Produtos</span>}
          </Button>
          <Button variant="ghost" className={`w-full justify-start h-12 ${!isOpen && "px-2"}`}>
            <BarChart3 className="!h-6 !w-6 shrink-0" />
            {isOpen && <span className="ml-4 text-base">Vendas</span>}
          </Button>
          <Button variant="ghost" className={`w-full justify-start h-12 ${!isOpen && "px-2"}`}>
            <FileText className="!h-6 !w-6 shrink-0" />
            {isOpen && <span className="ml-4 text-base">Relatórios</span>}
          </Button>
        </nav>
      </div>
    </aside>
  )
}
