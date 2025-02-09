'use client'

import { type User, columns } from "./columns"
import { DataTable } from "./data-table"

const users: User[] = [
  {
    id: "1",
    name: "João Silva",
    email: "joao.silva@example.com",
    role: "Admin",
    status: "Ativo",
    lastAccess: "2024-02-08",
  },
  {
    id: "2",
    name: "Maria Santos",
    email: "maria.santos@example.com",
    role: "Editor",
    status: "Ativo",
    lastAccess: "2024-02-07",
  },
  {
    id: "3",
    name: "Pedro Oliveira",
    email: "pedro.oliveira@example.com",
    role: "Usuário",
    status: "Inativo",
    lastAccess: "2024-01-15",
  },
  {
    id: "4",
    name: "Ana Costa",
    email: "ana.costa@example.com",
    role: "Editor",
    status: "Ativo",
    lastAccess: "2024-02-08",
  },
  {
    id: "5",
    name: "Lucas Ferreira",
    email: "lucas.ferreira@example.com",
    role: "Usuário",
    status: "Ativo",
    lastAccess: "2024-02-06",
  },
]

export default function UsersPage() {
  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h1 className="text-xl md:text-2xl font-semibold">Usuários</h1>
      </div>

      <DataTable columns={columns} data={users} />
    </div>
  )
}
