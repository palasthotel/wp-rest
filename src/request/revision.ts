import {GetRevisionByIdRequestArgs, GetRevisionsRequestArgs} from "../@types";
import {trimEndSlash, SearchParamable, searchParamsAdd} from "../util";

export const getRevisionsRequest = ( args: GetRevisionsRequestArgs) => {
    const {
        baseUrl,
        post,
        type = "posts",
        ...rest
    } = args;

    const url = new URL(`${trimEndSlash(baseUrl)}/wp-json/wp/v2/${type}/${post}/revisions`);

    searchParamsAdd(url.searchParams, rest as SearchParamable);

    return url;
}

export const getRevisionByIdRequest = (args: GetRevisionByIdRequestArgs) => {
    const {
        baseUrl,
        type = "posts",
        post,
        revision,
    } = args;

    return new URL(`${trimEndSlash(baseUrl)}/wp-json/wp/v2/${type}/${post}/revisions/${revision}`);
}