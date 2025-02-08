import { Search } from "lucide-react"

import { Logo } from "@/src/components/logo"
import { MenuButton } from "@/src/components/menu-button"
import { Avatar, AvatarFallback, AvatarImage } from "@/src/components/ui/avatar"
import { Input } from "@/src/components/ui/input"

interface HeaderProps {
  onMenuClick: () => void
}

export function Header({ onMenuClick }: HeaderProps) {
  return (
    <header className="border-b bg-background w-full">
      <div className="flex items-center justify-between h-16 px-4 md:px-7">
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
          <Avatar>
            <AvatarImage src="https://github.com/shadcn.png" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
        </div>
      </div>
    </header>
  )
}
