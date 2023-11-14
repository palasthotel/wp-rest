import {GetPostByIdRequestArgs, GetPostsRequestArgs} from "../@types/posts";
import {trimEndSlash} from "../util/string";
import {SearchParamable, setupSearchParams} from "../util/search-params";

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
