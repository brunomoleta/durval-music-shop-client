import { z } from "zod";
import {schemaMessages} from "../../services/database.ts";

const passwordSchema = z
  .object({
    password: z
      .string()
      .trim()
      .min(8, "O tamanho mínimo é de 8 caracteres :)")
      .regex(/[A-Z]/, "A senha deve conter pelo menos uma letra maiúscula")
      .regex(/[a-z]/, "A senha deve conter pelo menos uma letra minúscula")
      .regex(/\d/, "A senha deve conter pelo menos um número")
      .regex(
        /[!@#$%^&*()_+{}[\]:;<>,.?~\\-]/,
        "A senha deve conter pelo menos um caractere especial",
      ),
    confirmPassword: z.string().nonempty(schemaMessages.noConfirmation),
  })
  .refine(({ password, confirmPassword }) => password === confirmPassword, {
    message: schemaMessages.equalPassword,
    path: ["confirmPassword"],
  });

export default passwordSchema;
