import { z } from "zod";
import {schemaMessages} from "../../services/database.ts";

const emailSchema = z.object({
  email: z
    .string()
    .max(120, "O e-mail não pode ultrapassar 120 caracteres")
    .trim()
    .toLowerCase()
    .email(schemaMessages.email)
    .min(8),
});
export default emailSchema;
