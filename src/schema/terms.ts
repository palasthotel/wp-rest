import {z, ZodSchema} from "zod";
import {entityMetaSchema, taxonomySlugSchema, termIdSchema} from "./base";
import {getCollectionResponseSchema} from "./collection";

export const termResponseSchema = z.object({
    id: termIdSchema,
    count: z.number(),
    description: z.string(),
    link: z.string(),
    name: z.string(),
    slug: z.string(),
    taxonomy: taxonomySlugSchema,
    parent: termIdSchema.optional(),
    meta: entityMetaSchema
});

export const getTermsResponseSchema = (term: ZodSchema = termResponseSchema) => getCollectionResponseSchema(term);