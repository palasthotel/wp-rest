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

export const commentContextEditResponseSchema = commentResponseSchema.extend({
    author_email: z.string(),
    author_ip: z.string(),
    author_user_agent: z.string(),
});

export const commentUpdateBodySchema = z.object({
    author: z.number(),
    author_email: z.string(),
    autor_ip: z.string(),
    author_name: z.string(),
    author_url: z.string(),
    author_user_agent: z.string(),
    content: z.string(),
    date: z.string(),
    date_gmt: z.string(),
    parent: z.number(),
    post: z.number(),
    status: z.string(),
    meta: z.record(z.string()),
}).partial();

export const commentCreateBodySchema = commentUpdateBodySchema;