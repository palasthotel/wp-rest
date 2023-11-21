import {z} from "zod";
import {authorIdSchema, commentIdSchema, entityMetaSchema, postIdSchema, postTypeSchema} from "./base";

export const commentResponseSchema = z.object({
    id: commentIdSchema,
    author: authorIdSchema,
    author_name: z.string(),
    author_url: z.string(),
    content: z.object({
        rendered: z.string()
    }),
    date: z.string(),
    date_gmt: z.string(),
    link: z.string(),
    parent: commentIdSchema,
    post: postIdSchema,
    status: z.string(),
    type: z.string(),
    author_avatar_urls: z.record(z.string()).optional(),
    meta: entityMetaSchema.optional(),
    _links: z.record(
        z.array(
            z.object({
                href: z.string(),
                embeddable: z.boolean().optional(),
                post_type: postTypeSchema.optional(),
                count: z.number().optional(),
                taxonomy: z.string().optional(),
                name: z.string().optional()
            })
        )
    ).optional()
})
