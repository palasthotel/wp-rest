import {z} from "zod";
import {entityMetaSchema, userIdSchema, userSlugSchema} from "./base";

export const userResponseSchema = z.object({
    id: userIdSchema,
    name: z.string(),
    url: z.string(),
    description: z.string(),
    link: z.string(),
    slug: userSlugSchema,
    avatar_urls: z.record(z.string()),
    meta: entityMetaSchema.optional(),
    _links: z.record(
        z.array(
            z.object({
                href: z.string()
            })
        )
    ).optional()
});

export const userContextEditResponseSchema = userResponseSchema.extend({
    username: z.string(),
    first_name: z.string(),
    last_name: z.string(),
    email: z.string(),
    locale: z.string(),
    nickname: z.string(),
})