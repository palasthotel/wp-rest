import {z} from "zod";
import {postResponseSchema} from "./posts";
import {revisionIdSchema} from "./base";

export const revisionResponseSchema = z.object({
    id: revisionIdSchema
}).and(
    postResponseSchema.pick({
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
)