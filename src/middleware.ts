import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
  const isAuthenticated = request.cookies.has('auth_token') // TODO: Implementar verificação real do token

  // Lista de rotas públicas que não precisam de autenticação
  const publicRoutes = ['/login']

  // Verifica se a rota atual é pública
  const isPublicRoute = publicRoutes.includes(request.nextUrl.pathname)

  // Se não estiver autenticado e tentar acessar uma rota protegida
  if (!isAuthenticated && !isPublicRoute) {
    return NextResponse.redirect(new URL('/login', request.url))
  }

  // Se estiver autenticado e tentar acessar o login
  if (isAuthenticated && isPublicRoute) {
    return NextResponse.redirect(new URL('/', request.url))
  }

  return NextResponse.next()
}

export const config = {
  matcher: ['/((?!api|_next/static|_next/image|favicon.ico).*)'],
}
