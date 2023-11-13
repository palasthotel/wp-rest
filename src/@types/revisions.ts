import {BaseRequestArgs, PostId, PostType, RevisionId} from "./general";

export type GetRevisionsRequestArgs = BaseRequestArgs & {
    post: PostId
    type?: PostType
    page?: number
    per_page?: number
    offset?: number
    exclude?: PostId | string
    include?: PostId | string
    order?: "asc" | "desc"
    orderby?: "date" | "id" | "include" | "relevance" | "slug" |
        "include_slugs" | "title"
}

export type GetRevisionByIdRequestArgs = BaseRequestArgs & {
    type?: PostType
    post: PostId
    revision: RevisionId
}