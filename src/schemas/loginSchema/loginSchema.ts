import { z } from "zod";
import {schemaMessages} from "../../services/database.ts";

const loginSchema = z.object({
  email: z
    .string()
    .trim()
    .toLowerCase()
    .email(schemaMessages.email)
    .refine((value) => value !== "", {
      message: "Favor colocar o e-mail :)",
    }),
  password: z
    .string()
    .trim()
    .refine((value) => value !== "", {
      message: "Favor colocar a senha :)",
    }),
});

export default loginSchema;
