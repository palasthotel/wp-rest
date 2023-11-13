import {postResponseSchema} from "./posts";
import {ZodSchema} from "zod";
import {getCollectionResponseSchema} from "./collection";

export const revisionResponseSchema = postResponseSchema.pick({
    id: true,
    author: true,
    date: true,
    date_gmt: true,
    guid: true,
    modified: true,
    parent: true,
    slug: true,
    title: true,
    content: true,
    excerpt: true,
})

export const getRevisionsResponseSchema = (revision: ZodSchema = revisionResponseSchema) =>
    getCollectionResponseSchema(revision)