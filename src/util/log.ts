import {z} from "zod";

export const logIssues = (error: z.ZodError) => {
    error.issues.forEach(console.error);
}