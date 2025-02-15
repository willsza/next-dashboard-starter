"use server";

import { supabase } from "@/src/lib/supabase";
import { User } from "@/src/models";
import { UserFormValues } from "@/src/schemas/user.schema";

export async function createUser(data: UserFormValues) {
  try {
    const { data: newUser, error } = await supabase
      .from("users")
      .insert([
        {
          name: data.name,
          email: data.email,
          role: data.role,
          status: "Ativo",
          last_access: new Date().toISOString(),
        },
      ])
      .select()
      .single();

    if (error) {
      throw new Error(error.message);
    }

    return {
      id: newUser.id,
      name: newUser.name,
      email: newUser.email,
      role: newUser.role,
      status: newUser.status,
      lastAccess: new Date(newUser.last_access).toISOString().split("T")[0],
    };
  } catch (error) {
    throw error;
  }
}

export async function getUsers(): Promise<User[]> {
  try {
    const { data, error } = await supabase
      .from("users")
      .select("*")
      .order("name");

    if (error) {
      throw new Error(error.message);
    }

    return data.map((user) => ({
      id: user.id,
      name: user.name,
      email: user.email,
      role: user.role,
      status: user.status,
      lastAccess: new Date(user.last_access).toISOString().split("T")[0],
    }));
  } catch (error) {
    throw error;
  }
}

export async function resetPassword(email: string) {
  try {
    const { error } = await supabase.auth.resetPasswordForEmail(email, {
      redirectTo: `${process.env.NEXT_PUBLIC_APP_URL}/update-password`,
    });

    if (error) {
      throw new Error(error.message);
    }
  } catch (error) {
    throw error;
  }
}

export async function updatePassword(password: string) {
  try {
    const { error } = await supabase.auth.updateUser({
      password: password,
    });

    if (error) {
      throw new Error(error.message);
    }
  } catch (error) {
    throw error;
  }
}
