'use client'

import { Plus } from "lucide-react"
import { useState } from "react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import * as z from "zod"

import { Button } from "@/src/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/src/components/ui/dialog"
import { Input } from "@/src/components/ui/input"
import { useToast } from "@/src/hooks/use-toast"
import { User } from "./columns"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/src/components/ui/form"

const userFormSchema = z.object({
  name: z.string().min(1, "O nome é obrigatório"),
  email: z.string().email("Email inválido"),
  role: z.string().min(1, "O cargo é obrigatório"),
})

type UserFormValues = z.infer<typeof userFormSchema>

interface UserDialogProps {
  onUserCreated: (user: User) => void
}

export function UserDialog({ onUserCreated }: UserDialogProps) {
  const [open, setOpen] = useState(false)
  const { toast } = useToast()

  const form = useForm<UserFormValues>({
    resolver: zodResolver(userFormSchema),
    defaultValues: {
      name: "",
      email: "",
      role: "",
    },
  })

  const onSubmit = async (data: UserFormValues) => {
    try {
      // Simula uma chamada assíncrona
      await new Promise((resolve) => setTimeout(resolve, 1000))

      // Simula criação de usuário
      const newUser: User = {
        id: Math.random().toString(36).substr(2, 9),
        name: data.name,
        email: data.email,
        role: data.role,
        status: "Ativo",
        lastAccess: new Date().toISOString().split('T')[0],
      }

      onUserCreated(newUser)
      setOpen(false)
      form.reset()

      toast({
        title: "Usuário criado",
        description: "O usuário foi criado com sucesso!",
      })
    } catch (error) {
      toast({
        variant: "destructive",
        title: "Erro ao criar usuário",
        description: error instanceof Error ? error.message : "Ocorreu um erro ao criar o usuário",
      })
    }
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button>
          <Plus className="h-4 w-4 mr-2" />
          Novo usuário
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)}>
            <DialogHeader>
              <DialogTitle>Novo usuário</DialogTitle>
              <DialogDescription>
                Preencha os dados abaixo para criar um novo usuário.
              </DialogDescription>
            </DialogHeader>
            <div className="grid gap-4 py-4">
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Nome</FormLabel>
                    <FormControl>
                      <Input {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                      <Input {...field} type="email" />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="role"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Cargo</FormLabel>
                    <FormControl>
                      <Input {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <DialogFooter>
              <Button type="submit" disabled={form.formState.isSubmitting}>
                {form.formState.isSubmitting ? "Criando..." : "Criar usuário"}
              </Button>
            </DialogFooter>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  )
}
