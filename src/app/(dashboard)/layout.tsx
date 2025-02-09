import { Template } from "@/src/components/template"

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <Template>{children}</Template>
}
