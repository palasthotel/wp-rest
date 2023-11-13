import {BaseRequestArgs, PostId, TaxonomySlug, TermId} from "./general";

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


export type GetTermByIdRequestArgs = BaseRequestArgs & {
    id: TermId
    taxonomy?: TaxonomySlug
}