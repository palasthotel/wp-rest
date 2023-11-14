import {z, ZodSchema} from "zod";
import {entityMetaSchema, userIdSchema, userSlugSchema} from "./base";
import {getCollectionResponseSchema} from "./collection";

export const userResponseSchema = z.object({
    id: userIdSchema,
    name: z.string(),
    url: z.string(),
    description: z.string(),
    link: z.string(),
    slug: userSlugSchema,
    avatar_urls: z.record(z.string()),
    meta: entityMetaSchema,
    _links: z.record(
        z.array(
            z.object({
                href: z.string()
            })
        )
    )
});

export const getUsersResponseSchema = (user: ZodSchema = userResponseSchema) => getCollectionResponseSchema(user);