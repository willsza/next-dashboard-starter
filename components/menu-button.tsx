import { AlignJustify } from "lucide-react"

interface MenuButtonProps {
  onClick: () => void
}

export function MenuButton({ onClick }: MenuButtonProps) {
  return (
    <button
      onClick={onClick}
      className="hidden md:flex items-center justify-center hover:bg-accent hover:text-accent-foreground rounded-md p-2 -m-2 transition-colors"
    >
      <AlignJustify className="h-5 w-5" />
    </button>
  )
}
