import {BaseRequestArgs, UserId} from "./general";
import {z} from "zod";
import {userResponseSchema} from "../schema";

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

export type UserResponse = z.infer<typeof userResponseSchema>

export type GetUserRequestArgs = BaseRequestArgs & {
    id: UserId
}