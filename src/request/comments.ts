import {GetCommentByIdRequestArgs, GetCommentsRequestArgs} from "../@types/comments";
import {trimEndSlash} from "../util/string";
import {SearchParamable, setupSearchParams} from "../util/search-params";

export const getCommentsRequest = <T extends GetCommentsRequestArgs>( args: T ) => {
    const {
        baseUrl,
        ...rest
    } = args;

    const url = new URL(`${trimEndSlash(baseUrl)}/wp-json/wp/v2/comments`);

    setupSearchParams(url.searchParams, rest as SearchParamable);

    return url;
}

export const getCommentRequest = (
    args: GetCommentByIdRequestArgs
) => {
    const {
        baseUrl,
        id,
        ...rest
    } = args;

    const url = new URL(`${trimEndSlash(baseUrl)}/wp-json/wp/v2/comments/${id}`);

    setupSearchParams(url.searchParams, rest as SearchParamable);

    return url;
}