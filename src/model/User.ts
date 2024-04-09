import { CONSTANTS } from "@/constants";
import mongoose, { Schema, Document } from "mongoose";

export interface Message extends Document {
    content: string,
    createdAt: Date
}

const MessageSchema: Schema<Message> = new Schema({
    content: {
        type: String,
        required: true
    },
    createdAt: {
        type: Date,
        required: true,
        default: Date.now
    }
});


export interface User extends Document {
    username: string,
    email: string,
    password: string,
    verifyCode: string,
    verifyCodeExpiry: Date,
    isVerified: boolean,
    isAcceptingMessage: boolean,
    messages: Message[]
}

const UserSchema: Schema<User> = new Schema({
    username: {
        type: String,
        required: [true, CONSTANTS.MESSAGES.USERNAME_REQUIRED],
        trim: true,
        unique: true
    },
    email: {
        type: String,
        required: [true, CONSTANTS.MESSAGES.EMAIL_REQUIRED],
        unique: true,
        match: [CONSTANTS.REGEX.EMAIL_REGEX, CONSTANTS.MESSAGES.VALID_EMAIL]
    },
    password: {
        type: String,
        required: [true, CONSTANTS.MESSAGES.PASSWORD_REQUIRED],
    },
    verifyCode: {
        type: String,
        required: [true, CONSTANTS.MESSAGES.VERIFY_CODE_REQUIRED],
    },
    verifyCodeExpiry: {
        type: Date,
        required: [true, CONSTANTS.MESSAGES.VERIFY_CODE_EXPIRY_REQUIRED],
    },
    isVerified: {
        type: Boolean,
        default: false
    },
    isAcceptingMessage: {
        type: Boolean,
        default: true
    },
    messages: [MessageSchema],
});

// to check if mongoose is already created or not and create accordingly
const UserModel = (mongoose.models.User as mongoose.Model<User>) || mongoose.model<User>("User", UserSchema);

export default UserModel;
