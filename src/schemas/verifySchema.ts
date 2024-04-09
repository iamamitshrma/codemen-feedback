import { CONSTANTS } from "@/constants";
import { z } from "zod";

export const verifySchema = z.object({
    code: z.string().length(CONSTANTS.LENGTH.MIN_VERIFICATION_CODE, CONSTANTS.VALIDATION_MESSAGES.VERIFICATION_CODE_DIGIT)
});