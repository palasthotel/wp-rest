import {GetTermByIdRequestArgs, GetTermsRequestArgs} from "../@types/terms";
import {trimEndSlash} from "../util/string";
import {SearchParamable, searchParamsAdd} from "../util/search-params";

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