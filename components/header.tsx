import { Input } from "@/components/ui/input"
import { MenuButton } from "@/components/menu-button"
import { Search } from "lucide-react"

interface HeaderProps {
  onMenuClick: () => void
}

export function Header({ onMenuClick }: HeaderProps) {
  return (
    <header className="border-b bg-background w-full">
      <div className="flex items-center justify-between h-16 px-6">
        <div className="flex items-center gap-4">
          <MenuButton onClick={onMenuClick} />
          <div className="h-8 w-8 bg-red-500 rounded-md" />
          <span className="font-semibold">Hotmart</span>
        </div>
        <div className="flex items-center gap-4">
          <div className="relative">
            <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input placeholder="Pesquisar" className="pl-8 w-[300px] bg-white" />
          </div>
          <div className="h-8 w-8 rounded-full bg-slate-200" />
        </div>
      </div>
    </header>
  )
}
