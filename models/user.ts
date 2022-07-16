import { Schema, model, models } from "mongoose";

export interface IUser {
    firstName: string;
    lastName: string;
    email: string;
    gender: number;
    country: string;
    profilePicture: string;
    accountVisibility: number;
    password: string;
    token: string
}


const userSchema = new Schema<IUser>({
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    gender: {
        type: Number,
        required: true
    },
    country: {
        type: String,
        required: true
    },
    profilePicture: {
        type: String,
        required: false,
        default: ''
    },
    accountVisibility: {
        type: Number,
        required: true,
        default: 1
    },
    token:{
        type: String
    },
    password: {
        type: String,
        required: true
    }
}, {
    timestamps: true
});

const UserModel = models.User || model<IUser>('User', userSchema);

export default UserModel;