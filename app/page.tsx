'use client'

import { Header } from "@/components/header"
import { Sidebar } from "@/components/sidebar"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { useState } from "react"

export default function Home() {
  const [isOpen, setIsOpen] = useState(true)

  return (
    <div className="flex flex-col h-screen">
      <div className="fixed top-0 left-0 right-0 z-50">
        <Header onMenuClick={() => setIsOpen(!isOpen)} />
      </div>

      <div className="flex flex-1 overflow-hidden pt-16">
        <Sidebar isOpen={isOpen} />

        <main className="flex-1 overflow-auto w-full bg-slate-50">
          <div className="p-4 md:p-6 max-w-[1600px] mx-auto">
            <h1 className="text-xl md:text-2xl font-semibold mb-4">Produtos</h1>
            <div className="flex flex-col md:flex-row gap-4 mb-6">
              <Select defaultValue="todos">
                <SelectTrigger className="w-full md:w-[200px] bg-white">
                  <SelectValue placeholder="Todos os Produtos" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="todos">Todos os Produtos</SelectItem>
                </SelectContent>
              </Select>
              <Select defaultValue="30">
                <SelectTrigger className="w-full md:w-[200px] bg-white">
                  <SelectValue placeholder="Últimos 30 dias" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="30">Últimos 30 dias</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <Card className="shadow-none border mb-6">
              <CardHeader>
                <CardTitle>Desempenho de vendas</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="h-[200px] bg-slate-100 rounded-lg" />
              </CardContent>
            </Card>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
              <Card className="shadow-none border">
                <CardHeader>
                  <CardTitle className="text-sm">Receita líquida total</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-2xl font-semibold">R$ 0,00</p>
                </CardContent>
              </Card>
              <Card className="shadow-none border">
                <CardHeader>
                  <CardTitle className="text-sm">Reembolsos</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-2xl font-semibold">R$ 0,00</p>
                  <div className="flex justify-between mt-2">
                    <span className="text-sm text-muted-foreground">Vendas reembolsadas</span>
                    <span className="text-sm">0</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-muted-foreground">Taxa de reembolso</span>
                    <span className="text-sm">0%</span>
                  </div>
                </CardContent>
              </Card>
              <Card className="shadow-none border">
                <CardHeader>
                  <CardTitle className="text-sm">Vendas</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex justify-between">
                    <span className="text-sm text-muted-foreground">Vendas em real brasileiro</span>
                    <span className="text-sm">R$ 0,00</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-muted-foreground">Vendas totais</span>
                    <span className="text-sm">R$ 0,00</span>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}
