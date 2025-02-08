interface LogoProps {
  className?: string
}

export function Logo({ className }: LogoProps) {
  return (
    <div className={`flex items-center gap-2 ${className}`}>
      <div className="h-6 w-6 md:h-8 md:w-8 bg-primary rounded-md shrink-0" />
      <span className="font-semibold truncate">Dashboard</span>
    </div>
  )
}
