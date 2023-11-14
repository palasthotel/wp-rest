import {z} from "zod";

export const collectionResponseSchema = z.object({
    data: z.array(z.any()),
    total: z.number().gte(0),
    totalPages: z.number().gte(0),
});