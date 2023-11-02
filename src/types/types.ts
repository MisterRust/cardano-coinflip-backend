import { Document } from "mongoose";

// Define the Flip interface for TypeScript
export interface IFlip extends Document {
    sender: string;
    receiver: string;
    token: string;
    amount: number;
    isWin: boolean;
}