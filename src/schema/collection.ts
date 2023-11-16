import {z} from "zod";

export const collectionResponseSchema = <ItemType extends z.ZodTypeAny>(
    itemSchema: ItemType
) => {
    return  z.object({
        data: itemSchema.array(),
        total: z.number().gte(0),
        totalPages: z.number().gte(0),
    });
}