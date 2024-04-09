import { CONSTANTS } from "@/constants";
import { z } from "zod";

export const usernameValidation = z
  .string()
  .min(CONSTANTS.LENGTH.MIN_USERNAME, CONSTANTS.VALIDATION_MESSAGES.USERNAME_MIN_CHAR)
  .max(CONSTANTS.LENGTH.MAX_USERNAME, CONSTANTS.VALIDATION_MESSAGES.USERNAME_MAX_CHAR)
  .regex(CONSTANTS.REGEX.USERNAME_REGEX, CONSTANTS.VALIDATION_MESSAGES.USERNAME_NO_SPECIAL_CHAR);

export const signUpSchema = z.object({
  username: usernameValidation,
  email: z.string().email({message: CONSTANTS.VALIDATION_MESSAGES.INVALID_EMAIL}),
  password: z.string().min(CONSTANTS.LENGTH.MIN_PASSWORD, {message: CONSTANTS.VALIDATION_MESSAGES.PASSWORD_ATLEAST})
});
