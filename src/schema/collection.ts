import {z, ZodSchema} from "zod";

export const getCollectionResponseSchema = (item: ZodSchema) => {
    return z.object({
        data: z.array(item),
        total: z.number().gte(0),
        totalPages: z.number().gte(0),
    });
}