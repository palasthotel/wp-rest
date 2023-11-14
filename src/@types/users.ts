import {BaseRequestArgs, UserId} from "./general";

export type GetUsersRequestArgs = BaseRequestArgs & {
    page?: number
    per_page?: number
    search?: string
    exclude?: string
    include?: string
    offset?: number
    order?:"asc" | "desc"
    orderby?: "id"| "include"| "name"| "registered_date"| "slug" | "include_slugs"| "email" | "url"
    slug?: string
    roles?: string
}

export type GetUserRequestArgs = BaseRequestArgs & {
    id: UserId
}