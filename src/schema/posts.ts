import {z} from "zod";
import {
    authorIdSchema,
    commentStatusSchema,
    entityMetaSchema,
    pingStatusSchema,
    postDateSchema,
    postFormatSchema,
    postIdSchema,
    postSlugSchema,
    postStatusSchema,
    postTypeSchema
} from "./base";

export const postResponseSchema = z.object({
    id: postIdSchema, // posts, pages
    date: postDateSchema, // posts, pages
    date_gmt: postDateSchema, // posts, pages
    guid: z.object({ // posts, pages
        rendered: z.string()
    }).optional(),
    modified: postDateSchema, // posts, pages
    modified_gmt: postDateSchema, // posts, pages
    slug: postSlugSchema, // posts, pages
    status: postStatusSchema, // posts, pages
    type: postTypeSchema, // posts, pages
    link: z.string(), // posts, pages
    title: z.object({ // posts, pages
        rendered: z.string().optional(),
    }).optional(),
    content: z.object({ // posts, pages
        rendered: z.string().optional(),
        protected: z.boolean().optional(),
    }).optional(),
    excerpt: z.object({ // posts, pages
        rendered: z.string().optional(),
        protected: z.boolean().optional(),
    }).optional(),
    author: authorIdSchema.optional(), // posts, pages
    featured_media: z.number().optional(), // posts, pages
    parent: postIdSchema.optional(), // pages
    comment_status: commentStatusSchema.optional(), // posts, pages
    ping_status: pingStatusSchema.optional(), // posts, pages
    sticky: z.boolean().optional(), // posts
    template: z.string().optional(), // posts, pages
    format: postFormatSchema.optional(), // posts
    meta: entityMetaSchema.optional(), // posts, pages
    categories: z.array(z.number()).optional(), // posts
    tags: z.array(z.number()).optional(), // posts
    _links: z.record(  // posts, pages
        z.array(
            z.object({
                href: z.string(),
                embeddable: z.boolean().optional(),
                count: z.number().optional(),
                taxonomy: z.string().optional(),
                name: z.string().optional()
            })
        )
    ).optional()
});