"use server";

import { Client } from "@/src/models";
import { ClientFormValues } from "@/src/schemas/client.schema";
import { createClient } from "@/src/utils/supabase/server";

export async function addClient(data: ClientFormValues) {
  try {
    const supabase = await createClient();
    const { data: newClient, error } = await supabase
      .from("clients")
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
      id: newClient.id,
      name: newClient.name,
      email: newClient.email,
      role: newClient.role,
      status: newClient.status,
      lastAccess: new Date(newClient.last_access).toISOString().split("T")[0],
    };
  } catch (error) {
    throw error;
  }
}

export async function getClients(): Promise<Client[]> {
  try {
    const supabase = await createClient();
    const { data, error } = await supabase.from("clients").select("*");

    if (error) {
      throw new Error(error.message);
    }

    return data.map((client) => ({
      id: client.id,
      name: client.name,
      email: client.email,
      role: client.role,
      status: client.status,
      lastAccess: new Date(client.last_access).toISOString().split("T")[0],
    }));
  } catch (error) {
    throw error;
  }
}
