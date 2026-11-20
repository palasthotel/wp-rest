import {GetCommentByIdRequestArgs, GetCommentsRequestArgs} from "../@types";
import {trimEndSlash, SearchParamable, searchParamsAdd} from "../util";
import {pathSegment} from "./path-segment";

export const getCommentsRequest = <T extends GetCommentsRequestArgs>( args: T ) => {
    const {
        baseUrl,
        ...rest
    } = args;

    const url = new URL(`${trimEndSlash(baseUrl)}/wp-json/wp/v2/comments`);

    searchParamsAdd(url.searchParams, rest as SearchParamable);

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

    const url = new URL(`${trimEndSlash(baseUrl)}/wp-json/wp/v2/comments/${pathSegment(id)}`);

    searchParamsAdd(url.searchParams, rest as SearchParamable);

    return url;
}