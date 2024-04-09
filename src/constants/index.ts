export const CONSTANTS = {
    LENGTH: {
        MIN_MESSAGE: 10,
        MAX_MESSAGE: 300,
        MIN_USERNAME: 2,
        MAX_USERNAME: 20,
        MIN_PASSWORD: 8,
        MIN_VERIFICATION_CODE: 6
    },
    MESSAGES: {
        USERNAME_REQUIRED: "Username is required",
        EMAIL_REQUIRED: "Email is required",
        PASSWORD_REQUIRED: "Password is required",
        VERIFY_CODE_REQUIRED: "Verify code is required",
        VERIFY_CODE_EXPIRY_REQUIRED: "Verify code expiry is required",
        VALID_EMAIL: "Please use a valid email address",
    },
    REGEX: {
        EMAIL_REGEX: /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/g,
        USERNAME_REGEX: /^[a-zA-Z0-9_]+$/
    },
    VALIDATION_MESSAGES: {
        VERIFICATION_CODE_DIGIT: "Verification code must be 6 digits",
        USERNAME_MIN_CHAR: "Username must be atleast 2 characters",
        USERNAME_MAX_CHAR: "Username must be no more than 20 characters",
        USERNAME_NO_SPECIAL_CHAR: "Username must not contain special characters",
        INVALID_EMAIL: "Invalid email address",
        PASSWORD_ATLEAST: "Password must be atleast 8 characters",
        MESSAGE_MIN_CHAR: "Content must be atleast of 10 characters",
        MESSAGE_MAX_CHAR: "Content must be no longer than 300 characters",
    }
}