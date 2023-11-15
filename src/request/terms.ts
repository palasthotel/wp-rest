import {GetTermByIdRequestArgs, GetTermsRequestArgs} from "../@types";
import {trimEndSlash, SearchParamable, searchParamsAdd} from "../util";

export const getTermsRequest = <T extends GetTermsRequestArgs>(args: T): URL => {
    const {
        baseUrl,
        taxonomy= "categories",
        ...rest
    } = args;

    const url = new URL(`${trimEndSlash(baseUrl)}/wp-json/wp/v2/${taxonomy}`);

    searchParamsAdd(url.searchParams, rest as SearchParamable);

    return url;
}

export const getTermRequest = (args: GetTermByIdRequestArgs)=> {
    const {
        baseUrl,
        taxonomy = "categories",
        id,
    } = args;
    return new URL(`${trimEndSlash(baseUrl)}/wp-json/wp/v2/${taxonomy}/${id}`);
}