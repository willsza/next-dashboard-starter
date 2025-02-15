'use client'

import { ArrowLeft } from "lucide-react"
import Link from "next/link"

import { forgotPasswordAction } from "@/src/actions/auth"
import { Button } from "@/src/components/ui/button"
import { Input } from "@/src/components/ui/input"

export default function ForgotPasswordPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8 bg-white p-8 rounded-lg shadow-lg">
        <div>
          <div className="w-20 h-20 bg-primary rounded-2xl mx-auto" />
          <h2 className="mt-6 text-center text-3xl font-bold tracking-tight">
            Recuperar senha
          </h2>
          <p className="mt-2 text-center text-sm text-muted-foreground">
            Digite seu email para receber as instruções de recuperação
          </p>
        </div>

        <form className="mt-8 space-y-6">
          <div>
            <label htmlFor="email" className="sr-only">
              Email
            </label>
            <Input
              id="email"
              name="email"
              type="email"
              autoComplete="email"
              required
              className="appearance-none relative block w-full"
              placeholder="Email"
            />
          </div>

          <div className="flex flex-col gap-4">
            <Button className="w-full" formAction={forgotPasswordAction}>
              Enviar email de recuperação
            </Button>

            <Button asChild variant="outline">
              <Link href="/sign-in" className="flex items-center gap-2">
                <ArrowLeft className="h-4 w-4" />
                Voltar para o login
              </Link>
            </Button>
          </div>
        </form>
      </div>
    </div>
  )
}
