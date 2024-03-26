import {z} from "zod";
import {entityMetaSchema, userCapabilitiesSchema, userIdSchema, userRoleSchema, userSlugSchema} from "./base";

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
    registered_date: z.string(),
    roles: userRoleSchema.array(),
    capabilities: userCapabilitiesSchema,
    extra_capabilities: userCapabilitiesSchema,
});

export const userCreateOrUpdateBodySchema = z.object({
    username: z.string(),
    name: z.string(),
    first_name: z.string(),
    last_name: z.string(),
    email: z.string().email(),
    url: z.string().url(),
    description: z.string(),
    locale: z.string(),
    nickname: z.string(),
    slug: z.string(),
    roles: userRoleSchema.array(),
    meta: z.record(z.string()),
}).partial()