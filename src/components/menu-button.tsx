import { AlignJustify } from "lucide-react"

interface MenuButtonProps {
  onClick: () => void
  className?: string
}

export function MenuButton({ onClick, className }: MenuButtonProps) {
  return (
    <button
      onClick={onClick}
      className={`${className} flex items-center justify-center hover:bg-accent hover:text-primary rounded-md p-2 -m-2 transition-colors`}
    >
      <AlignJustify className="h-5 w-5" />
    </button>
  )
}
