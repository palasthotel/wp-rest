import {z, ZodSchema} from "zod";
import {
    authorIdSchema,
    commentStatusSchema,
    entityMetaSchema,
    pingStatusSchema,
    postFormatSchema,
    postIdSchema,
    postSlugSchema,
    postStatusSchema,
    postTypeSchema
} from "./base";
import {getCollectionResponseSchema} from "./collection";

export const postResponseSchema = z.object({
    id: postIdSchema, // posts, pages
    date: z.string().datetime(), // posts, pages
    date_gmt: z.string().datetime(), // posts, pages
    guid: z.object({ // posts, pages
        rendered: z.string()
    }),
    modified: z.string().datetime(), // posts, pages
    modified_gmt: z.string().datetime(), // posts, pages
    slug: postSlugSchema, // posts, pages
    status: postStatusSchema, // posts, pages
    type: postTypeSchema, // posts, pages
    link: z.string(), // posts, pages
    title: z.object({ // posts, pages
        rendered: z.string()
    }),
    content: z.object({ // posts, pages
        rendered: z.string(),
        protected: z.boolean()
    }).optional(),
    excerpt: z.object({ // posts, pages
        rendered: z.string(),
        protected: z.boolean()
    }).optional(),
    author: authorIdSchema, // posts, pages
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
    )
});

export const getPostsResponseSchema = (post: ZodSchema = postResponseSchema) => getCollectionResponseSchema(post);