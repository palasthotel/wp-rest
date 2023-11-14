import {BaseRequestArgs, ComaSeparatedIds, CommentId, Context, PostId, UserId} from "./general";
import {z} from "zod";
import {commentResponseSchema} from "../schema";

export type GetCommentsRequestArgs = BaseRequestArgs & {
    context?: Context
    page?: number
    per_page?: number
    search?: string
    after?: string
    author?: UserId | ComaSeparatedIds
    author_exclude?: UserId | ComaSeparatedIds
    author_email?: string
    before?: string
    exclude?: CommentId | ComaSeparatedIds
    include?: CommentId | ComaSeparatedIds
    offset?: number
    order?: "asc" | "desc"
    orderby?:  "date" | "date_gmt" | "id" | "include" | "post" | "parent" | "type"
    parent?: CommentId | ComaSeparatedIds
    parent_exclude?: CommentId | ComaSeparatedIds
    post?: PostId | ComaSeparatedIds
    status?: string
    type?: string
    password?: string
}

export type CommentResponse = z.infer<typeof commentResponseSchema>

export type GetCommentByIdRequestArgs = BaseRequestArgs & {
    id: CommentId
    context?: Context
    password?: string
}