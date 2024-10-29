import {z} from "zod";
import {BaseRequestArgs, Context, PostId} from "./general";
import {mediaResponseSchema} from "../schema";

export type GetMediaRequestArgs = BaseRequestArgs & {
    context?: Context
    page?: number
    per_page?: number
    offset?: number
    search?: string
    after?: string
    modified_after?: string
    author?: string
    author_exclude?: string
    before?: string
    exclude?: PostId | string
    include?: PostId | string
    order?: "asc" | "desc"
    orderby?: "author" | "date" | "id" | "include" |
        "modified" | "parent" | "relevance" | "slug" |
        "include_slugs" | "title"
    slug?: string
    status?: string
    parent?: string
    parent_exclude?: string
    media_type?: string
    mime_type?: string
}

export type MediaResponse = z.infer<typeof mediaResponseSchema>

export type GetMediaByIdRequestArgs = BaseRequestArgs & {
    id: PostId
}

