import {BaseRequestArgs, PostId, TaxonomySlug, TermId} from "./general";
import {z} from "zod";
import {commentResponseSchema, termResponseSchema} from "../schema";

export type GetTermsRequestArgs = BaseRequestArgs & {
    taxonomy?: TaxonomySlug
    search?: string
    include?: TermId | string
    exclude?: TermId | string
    hide_empty?: boolean
    page?: number
    per_page?: number
    order?: "asc" | "desc"
    orderby?: "name" | "id" | "include" | "slug" | "include_slugs" | "term_group" | "description" | "count"
    post?: PostId
    slug?: string
}

export type TermResponse = z.infer<typeof termResponseSchema>


export type GetTermByIdRequestArgs = BaseRequestArgs & {
    id: TermId
    taxonomy?: TaxonomySlug
}