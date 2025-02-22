'use client';

import { useClients } from "@/src/hooks/use-clients";
import { columns } from "./columns";
import { DataTable } from "./data-table";

export function ClientList() {
  const { data: clients, isLoading } = useClients();

  return (
    <div className="p-6">
      <div className="mb-8">
        <h2 className="text-3xl font-bold tracking-tight">Clientes</h2>
        <p className="text-muted-foreground">
          Gerencie os clientes do sistema
        </p>
      </div>
      <DataTable columns={columns} data={clients || []} loading={isLoading} />
    </div>
  )
}