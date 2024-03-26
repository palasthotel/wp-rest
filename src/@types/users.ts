import {BaseRequestArgs, Context, UserId} from "./general";
import {z} from "zod";
import {userContextEditResponseSchema, userCreateBodySchema, userResponseSchema, userUpdateBodySchema} from "../schema";

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
    context?: Context
}

export type UserResponse = z.infer<typeof userResponseSchema>
export type UserContextEditResponse = z.infer<typeof userContextEditResponseSchema>

export type GetUserRequestArgs = BaseRequestArgs & {
    id: UserId
    context?: Context
}

export type UserCreateBody = z.infer<typeof userCreateBodySchema>
export type UserUpdateBody = z.infer<typeof userUpdateBodySchema>