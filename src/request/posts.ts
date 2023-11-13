import {ZodSchema} from "zod";
import {GetPostByIdRequestArgs, GetPostsRequestArgs} from "../@types/posts";
import {trimEndSlash} from "../util/string";
import {SearchParamable, setupSearchParams} from "../util/search-params";
import {getPostsResponseSchema, postResponseSchema} from "../schema";

export const getPostsRequest = <T extends GetPostsRequestArgs>(args: T): URL => {

    const {
        baseUrl,
        type = "posts",
        ...rest
    } = args;

    const url = new URL(`${trimEndSlash(baseUrl)}/wp-json/wp/v2/${type}`);

    setupSearchParams(url.searchParams, rest as SearchParamable);

    return url;
}

export const asPostsResponse = (post: ZodSchema = postResponseSchema) => async (res: Response) => {
    return getPostsResponseSchema(post).parse({
        data: await res.json(),
        total: parseInt(res.headers.get("x-wp-total") ?? "0"),
        totalPages: parseInt(res.headers.get("x-wp-totalpages") ?? "0")
    });
}

export const getPostRequest = (
    args: GetPostByIdRequestArgs,
): URL => {
    const {
        baseUrl,
        type = "posts",
        id,
    } = args;
    return new URL(`${trimEndSlash(baseUrl)}/wp-json/wp/v2/${type}/${id}`);
}

export const asPostResponse = (post: ZodSchema = postResponseSchema)=> async (res: Response) => {
    return post.parse(await res.json());
}

