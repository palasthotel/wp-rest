import {z} from "zod";
import {BaseRequestArgs,PostId, PostType, TaxonomyQuery, TermId} from "./general";
import {postResponseSchema} from "../schema";

export type GetPostsRequestArgs = BaseRequestArgs & {
    type?: PostType
    page?: number
    per_page?: number
    offset?: number
    search?: string
    after?: string
    author?: string
    author_exclude?: string
    before?: string
    exclude?: PostId | string
    include?: PostId | string
    order?: "asc" | "desc"
    orderby?: "author" | "date" | "id" | "include" |
        "modified" | "parent" | "relevance" | "slug" |
        "include_slugs" | "title" | "menu_order"
    slug?: string
    status?: string
    tax_relation?: "AND" | "OR"
    categories?: TaxonomyQuery | TermId | string
    categories_exclude?: TaxonomyQuery | TermId | string
    tags?: TaxonomyQuery | TermId | string
    tags_exclude?: TaxonomyQuery | TermId | string
    sticky?: boolean
    parent?: string
    parent_exclude?: string
}

export type PostResponse = z.infer<typeof postResponseSchema>

export type GetPostByIdRequestArgs = BaseRequestArgs & {
    id: PostId
    type?: PostType
}

