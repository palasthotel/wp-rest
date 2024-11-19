import {z} from "zod";
import {entityMetaSchema, taxonomySlugSchema, termIdSchema} from "./base";

export const termResponseSchema = z.object({
    id: termIdSchema,
    count: z.coerce.number(),
    description: z.string(),
    link: z.string(),
    name: z.string(),
    slug: z.string(),
    taxonomy: taxonomySlugSchema,
    parent: termIdSchema.optional(),
    meta: entityMetaSchema.optional(),
});
