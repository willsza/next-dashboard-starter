'use client'

import { getUsers } from "@/src/actions/user"
import { useToast } from "@/src/hooks/use-toast"
import { User } from "@/src/models"
import { useEffect, useState } from "react"
import { columns } from "./columns"
import { DataTable } from "./data-table"

export default function UsersPage() {
  const [data, setData] = useState<User[]>([])
  const [loading, setLoading] = useState(true)
  const { toast } = useToast()

  useEffect(() => {
    async function loadUsers() {
      try {
        const users = await getUsers()
        setData(users)
      } catch (error) {
        toast({
          variant: "destructive",
          title: "Erro ao carregar usuários",
          description: error instanceof Error ? error.message : "Ocorreu um erro ao carregar os usuários",
        })
      } finally {
        setLoading(false)
      }
    }

    loadUsers()
  }, [toast])

  return (
    <div className="p-6">
      <div className="mb-8">
        <h1 className="text-3xl font-bold tracking-tight">Usuários</h1>
        <p className="text-muted-foreground">
          Gerencie os usuários do sistema
        </p>
      </div>
      <DataTable columns={columns} data={data} onDataChange={setData} loading={loading} />
    </div>
  )
}
