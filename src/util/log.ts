import {z} from "zod";

export const logIssues = (error: z.ZodError) => {
    error.errors.forEach(console.error);
}