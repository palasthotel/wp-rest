import {GetMediaByIdRequestArgs, GetMediaRequestArgs} from "../@types";
import {SearchParamable, searchParamsAdd, trimEndSlash} from "../util";

export const getMediaItemsRequest = <T extends GetMediaRequestArgs>(args: T): URL => {

    const {
        baseUrl,
        ...rest
    } = args;

    const url = new URL(`${trimEndSlash(baseUrl)}/wp-json/wp/v2/media`);

    searchParamsAdd(url.searchParams, rest as SearchParamable);

    return url;
}

export const getMediaRequest = (
    args: GetMediaByIdRequestArgs,
): URL => {
    const {
        baseUrl,
        id,
    } = args;
    return new URL(`${trimEndSlash(baseUrl)}/wp-json/wp/v2/media/${id}`);
}
