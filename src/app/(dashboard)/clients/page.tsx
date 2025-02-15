'use client'

import { useClients } from "@/src/hooks/use-clients"
import { columns } from "./columns"
import { DataTable } from "./data-table"

export default function ClientsPage() {
  const { data = [], isLoading, error } = useClients()

  if (error) {
    return (
      <div className="p-6">
        <div className="text-red-500">
          Erro ao carregar clientes: {error instanceof Error ? error.message : 'Erro desconhecido'}
        </div>
      </div>
    )
  }

  return (
    <div className="p-6">
      <div className="mb-8">
        <h1 className="text-3xl font-bold tracking-tight">Clientes</h1>
        <p className="text-muted-foreground">
          Gerencie os clientes do sistema
        </p>
      </div>
      <DataTable columns={columns} data={data} loading={isLoading} />
    </div>
  )
}
