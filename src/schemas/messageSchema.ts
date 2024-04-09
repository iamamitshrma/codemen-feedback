import { CONSTANTS } from "@/constants";
import { z } from "zod";

export const messageSchema = z.object({
  content: z
    .string()
    .min(CONSTANTS.LENGTH.MIN_MESSAGE, { message: CONSTANTS.VALIDATION_MESSAGES.MESSAGE_MIN_CHAR })
    .max(CONSTANTS.LENGTH.MAX_MESSAGE, { message: CONSTANTS.VALIDATION_MESSAGES.MESSAGE_MAX_CHAR }),
});
