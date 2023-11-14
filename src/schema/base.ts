import {z} from "zod"

export const postDateSchema = z.string()
export const postIdSchema = z.number()
export const postSlugSchema = z.string()
export const postTypeSchema = z.string()
export const postStatusSchema = z.union([
    z.literal("auto-draft"),
    z.literal("draft"),
    z.literal("future"),
    z.literal("publish"),
    z.literal("pending"),
    z.literal("private"),
    z.literal("trash"),
    z.literal("inherit"),
])

export const postFormatSchema = z.union([
        z.literal("standard"),
        z.literal("aside"),
        z.literal("chat"),
        z.literal("gallery"),
        z.literal("link"),
        z.literal("image"),
        z.literal("quote"),
        z.literal("status"),
        z.literal("video"),
        z.literal("audio"),
])

export const revisionIdSchema = z.number()

export const revisionSlugSchema = z.string()

export const userIdSchema = z.number()

export const userSlugSchema = z.string()

export const authorIdSchema = userIdSchema

export const commentIdSchema = z.number()
export const commentStatusSchema = z.union([
        z.literal("open"),
        z.literal("closed"),
])

export const pingStatusSchema = commentStatusSchema

export const comaSeparatedIdsSchema = z.string()

export const termIdSchema = z.number()

export const taxonomySlugSchema = z.string()

export const entityMetaSchema = z.record(
    z.union([
        z.string(),
        z.array(z.string()),
        z.number(),
        z.array(z.number()),
        z.boolean(),
    ])
)

export const contextSchema = z.union([
    z.literal("view"),
    z.literal("embed"),
    z.literal("edit")
])

export const taxonomyQuerySchema =
    z.object({
        operator: z.union([z.literal("AND"), z.literal("OR")]),
        terms: z.array(z.number()).nonempty().or(z.string()),
    })