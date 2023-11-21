import {postResponseSchema} from "./posts";
import {revisionIdSchema, revisionSlugSchema} from "./base";

export const revisionResponseSchema = postResponseSchema.pick({
        author: true,
        date: true,
        date_gmt: true,
        guid: true,
        modified: true,
        parent: true,
        title: true,
        content: true,
        excerpt: true,
}).extend({
        id: revisionIdSchema,
        slug: revisionSlugSchema,
})