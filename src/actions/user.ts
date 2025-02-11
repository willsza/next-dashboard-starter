'use server'

import { supabase } from "@/src/lib/supabase"
import { UserFormValues } from "@/src/schemas/user.schema"

export async function createUser(data: UserFormValues) {
  try {
    const { data: newUser, error } = await supabase
      .from('users')
      .insert([
        {
          name: data.name,
          email: data.email,
          role: data.role,
          status: 'Ativo',
          last_access: new Date().toISOString()
        }
      ])
      .select()
      .single()

    if (error) {
      throw new Error(error.message)
    }

    return {
      id: newUser.id,
      name: newUser.name,
      email: newUser.email,
      role: newUser.role,
      status: newUser.status,
      lastAccess: new Date(newUser.last_access).toISOString().split('T')[0]
    }
  } catch (error) {
    throw error
  }
}