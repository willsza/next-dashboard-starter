import { Logo } from "@/components/logo"
import { MenuButton } from "@/components/menu-button"
import { Input } from "@/components/ui/input"
import { Search } from "lucide-react"

interface HeaderProps {
  onMenuClick: () => void
}

export function Header({ onMenuClick }: HeaderProps) {
  return (
    <header className="border-b bg-background w-full">
      <div className="flex items-center justify-between h-16 px-4 md:px-8">
        <div className="flex items-center gap-2 md:gap-8">
          <MenuButton onClick={onMenuClick} />
          <Logo />
        </div>
        <div className="flex items-center gap-2 md:gap-4">
          <div className="relative hidden md:block">
            <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Pesquisar"
              className="pl-8 w-[300px] bg-white"
            />
          </div>
          <div className="h-8 w-8 rounded-full bg-slate-200 shrink-0" />
        </div>
      </div>
    </header>
  )
}
