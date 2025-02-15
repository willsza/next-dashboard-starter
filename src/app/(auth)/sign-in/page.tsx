'use client'

import { Eye, EyeOff } from "lucide-react"
import Link from "next/link"
import { useState } from "react"

import { signInAction } from "@/src/actions/auth"
import { Button } from "@/src/components/ui/button"
import { Input } from "@/src/components/ui/input"

export default function LoginPage() {
  const [showPassword, setShowPassword] = useState(false)

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8 bg-white p-8 rounded-lg shadow-lg">
        <div>
          <div className="w-20 h-20 bg-primary rounded-2xl mx-auto" />
          <h2 className="mt-6 text-center text-3xl font-bold tracking-tight">
            Bem-vindo de volta
          </h2>
          <p className="mt-2 text-center text-sm text-muted-foreground">
            Entre com suas credenciais para acessar o painel
          </p>
        </div>
        <form className="mt-8 space-y-6">
          <div className="space-y-4 rounded-md">
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
            <div className="relative">
              <label htmlFor="password" className="sr-only">
                Senha
              </label>
              <Input
                id="password"
                name="password"
                type={showPassword ? "text" : "password"}
                autoComplete="current-password"
                required
                className="appearance-none relative block w-full"
                placeholder="Senha"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-2.5 text-gray-400 hover:text-gray-600"
              >
                {showPassword ? (
                  <EyeOff className="h-5 w-5" />
                ) : (
                  <Eye className="h-5 w-5" />
                )}
              </button>
            </div>
          </div>

          <div className="flex flex-col gap-4">
            <Button
              type="submit"
              className="w-full"
              formAction={signInAction}
            >
              Entrar
            </Button>

            <div className="text-center">
              <Link
                href="/forgot-password"
                className="text-sm font-medium text-primary hover:text-primary/90"
              >
                Esqueceu sua senha?
              </Link>
            </div>
          </div>
        </form>
      </div>
    </div>
  )
}
