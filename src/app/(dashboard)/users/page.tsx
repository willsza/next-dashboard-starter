'use client'

import { useState } from "react"
import { columns, User } from "./columns"
import { DataTable } from "./data-table"

// Dados de exemplo
const initialData: User[] = [
  {
    id: "728ed52f",
    name: "João Silva",
    email: "joao@exemplo.com",
    role: "Desenvolvedor",
    status: "Ativo",
    lastAccess: "2024-01-23",
  },
  {
    id: "489e1d42",
    name: "Maria Santos",
    email: "maria@exemplo.com",
    role: "Designer",
    status: "Inativo",
    lastAccess: "2024-01-20",
  },
]

export default function UsersPage() {
  const [data, setData] = useState<User[]>(initialData)

  return (
    <div className="p-6">
      <div className="mb-8">
        <h1 className="text-3xl font-bold tracking-tight">Usuários</h1>
        <p className="text-muted-foreground">
          Gerencie os usuários do sistema
        </p>
      </div>
      <DataTable columns={columns} data={data} onDataChange={setData} />
    </div>
  )
}
