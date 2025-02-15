'use client'

import { LogOut } from 'lucide-react'

import { signOut } from '@/src/actions/login'
import { Avatar, AvatarFallback, AvatarImage } from '@/src/components/ui/avatar'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/src/components/ui/dropdown-menu'
import { useToast } from '@/src/hooks/use-toast'

export function UserMenu() {
  const { toast } = useToast()

  async function handleLogout() {
    try {
      await signOut()
    } catch (error) {
      // Ignora o erro de redirecionamento do Next.js
      if (!(error instanceof Error) || !error.message.includes('NEXT_REDIRECT')) {
        toast({
          variant: 'destructive',
          title: 'Erro ao fazer logout',
          description: error instanceof Error ? error.message : 'Ocorreu um erro ao fazer logout',
        })
      }
    }
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="outline-none">
        <Avatar>
          <AvatarImage src="https://github.com/shadcn.png" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem onClick={handleLogout} className="text-red-600 cursor-pointer">
          <LogOut className="mr-2 h-4 w-4" />
          Sair
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
