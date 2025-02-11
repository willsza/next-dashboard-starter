import * as z from "zod";

export const userFormSchema = z.object({
  name: z.string().min(1, "O nome é obrigatório"),
  email: z.string().email("Email inválido"),
  role: z.string().min(1, "O cargo é obrigatório"),
});

export type UserFormValues = z.infer<typeof userFormSchema>;
