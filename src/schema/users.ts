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

export const userCreateBodySchema = z.object({
    username: z.string(),
    name: z.string().optional(),
    first_name: z.string().optional(),
    last_name: z.string().optional(),
    email: z.string().email(),
    url: z.string().url().optional(),
    description: z.string().optional(),
    locale: z.string().optional(),
    nickname: z.string().optional(),
    slug: z.string().optional(),
    roles: userRoleSchema.array().optional(),
    password: z.string(),
    meta: z.record(z.string()).optional(),
});

export const userUpdateBodySchema = userCreateBodySchema.partial()
