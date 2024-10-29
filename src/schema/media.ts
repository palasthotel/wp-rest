import {z} from 'zod';
import {entityMetaSchema, postDateSchema, postStatusSchema} from "./base.ts";

const mediaSizeSchema = z.object({
    file: z.string(),
    width: z.number(),
    height: z.number(),
    mime_type: z.string(),
    source_url: z.string(),
}).optional();

const mediaDetailsSchema = z.object({
    width: z.number(),
    height: z.number(),
    file: z.string(),
    filesize: z.number().optional(),
    sizes: z.record(
        z.string(),
        mediaSizeSchema
    ).optional(),
    image_meta: z.object({
        aperture: z.string(),
        credit: z.string(),
        camera: z.string(),
        caption: z.string(),
        created_timestamp: z.string(),
        copyright: z.string(),
        focal_length: z.string(),
        iso: z.string(),
        shutter_speed: z.string(),
        title: z.string(),
        orientation: z.string(),
        keywords: z.array(z.string()),
    }).optional(),
});

const renderedFieldSchema = z.object({
    rendered: z.string(),
    raw: z.string().optional(),
});

export const mediaResponseSchema = z.object({
    id: z.number(),
    date: postDateSchema,
    date_gmt: postDateSchema,
    guid: renderedFieldSchema,
    modified: postDateSchema,
    modified_gmt: postDateSchema,
    slug: z.string(),
    status: postStatusSchema,
    type: z.literal('attachment'),
    link: z.string().url(),
    title: renderedFieldSchema,
    author: z.number(),
    comment_status: z.enum(['open', 'closed']),
    ping_status: z.enum(['open', 'closed']),
    template: z.string().nullable(),
    meta: entityMetaSchema.optional(),
    description: renderedFieldSchema,
    caption: renderedFieldSchema,
    alt_text: z.string(),
    media_type: z.enum(['image', 'file', 'video', 'audio']),
    mime_type: z.string().optional(),
    media_details: mediaDetailsSchema,
    post: z.coerce.number().nullable(),
    source_url: z.string().url(),
    missing_image_sizes: z.array(z.string()).optional(),
    _links: z.record(
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

