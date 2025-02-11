'use client'

import { zodResolver } from "@hookform/resolvers/zod"
import { Plus } from "lucide-react"
import { useState } from "react"
import { useForm } from "react-hook-form"

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
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/src/components/ui/form"
import { Input } from "@/src/components/ui/input"
import { useToast } from "@/src/hooks/use-toast"
import { userFormSchema, UserFormValues } from "@/src/schemas/user.schema"
import { User } from "./columns"
import { supabase } from "@/src/lib/supabase"

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
      const { data: newUser, error } = await supabase
        .from('users')
        .insert([
          {
            name: data.name,
            email: data.email,
            role: data.role,
            status: 'Ativo',
            last_access: new Date().toISOString()
          }
        ])
        .select()
        .single()

      if (error) throw error

      onUserCreated({
        id: newUser.id,
        name: newUser.name,
        email: newUser.email,
        role: newUser.role,
        status: newUser.status,
        lastAccess: new Date(newUser.last_access).toISOString().split('T')[0]
      })

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
