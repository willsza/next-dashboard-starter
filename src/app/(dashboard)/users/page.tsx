'use client'

import { useUsers } from "@/src/hooks/use-users"
import { columns } from "./columns"
import { DataTable } from "./data-table"

export default function UsersPage() {
  const { data = [], isLoading, error } = useUsers()

  if (error) {
    return (
      <div className="p-6">
        <div className="text-red-500">
          Erro ao carregar usuários: {error instanceof Error ? error.message : 'Erro desconhecido'}
        </div>
      </div>
    )
  }

  return (
    <div className="p-6">
      <div className="mb-8">
        <h1 className="text-3xl font-bold tracking-tight">Usuários</h1>
        <p className="text-muted-foreground">
          Gerencie os usuários do sistema
        </p>
      </div>
      <DataTable columns={columns} data={data} loading={isLoading} />
    </div>
  )
}
