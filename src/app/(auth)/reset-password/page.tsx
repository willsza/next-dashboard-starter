'use client'

import { Eye, EyeOff } from "lucide-react"
import { useState } from "react"

import { resetPasswordAction } from "@/src/actions/auth"
import { Button } from "@/src/components/ui/button"
import { Input } from "@/src/components/ui/input"

export default function ResetPasswordPage() {
  const [showPassword, setShowPassword] = useState(false)

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8 bg-white p-8 rounded-lg shadow-lg">
        <div>
          <div className="w-20 h-20 bg-primary rounded-2xl mx-auto" />
          <h2 className="mt-6 text-center text-3xl font-bold tracking-tight">
            Nova senha
          </h2>
          <p className="mt-2 text-center text-sm text-muted-foreground">
            Digite sua nova senha
          </p>
        </div>

        <form className="mt-8 space-y-6">
          <div className="relative">
            <label htmlFor="password" className="sr-only">
              Nova senha
            </label>
            <Input
              id="password"
              name="password"
              type={showPassword ? "text" : "password"}
              required
              className="appearance-none relative block w-full"
              placeholder="Nova senha"
              minLength={6}
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

          <div className="relative">
            <label htmlFor="confirmPassword" className="sr-only">
              Confirmar senha
            </label>
            <Input
              id="confirmPassword"
              name="confirmPassword"
              type={showPassword ? "text" : "password"}
              required
              className="appearance-none relative block w-full"
              placeholder="Confirmar senha"
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

          <Button type="submit" className="w-full" formAction={resetPasswordAction}>
            Atualizar senha
          </Button>
        </form>
      </div>
    </div>
  )
}
