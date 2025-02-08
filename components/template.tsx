'use client'

import { ReactNode, useState } from "react"
import { Header } from "./header"
import { Sidebar } from "./sidebar"

interface TemplateProps {
  children: ReactNode
}

export function Template({ children }: TemplateProps) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)

  return (
    <div className="min-h-screen flex flex-col">
      <Header onMenuClick={() => setIsSidebarOpen(!isSidebarOpen)} />
      
      <div className="flex-1 flex">
        <Sidebar isOpen={isSidebarOpen} />
        <main className="flex-1 p-4 md:p-6 bg-slate-50">
          {children}
        </main>
      </div>
    </div>
  )
}
