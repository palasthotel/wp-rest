import {GetTermByIdRequestArgs, GetTermsRequestArgs} from "../@types/terms";
import {trimEndSlash} from "../util/string";
import {SearchParamable, setupSearchParams} from "../util/search-params";
import {ZodSchema} from "zod";
import {getTermsResponseSchema, termResponseSchema} from "../schema";

export const getTermsRequest = <T extends GetTermsRequestArgs>(args: T): URL => {
    const {
        baseUrl,
        taxonomy= "categories",
        ...rest
    } = args;

    const url = new URL(`${trimEndSlash(baseUrl)}/wp-json/wp/v2/${taxonomy}`);

    setupSearchParams(url.searchParams, rest as SearchParamable);

    return url;
}


export const asTermsResponse = (term: ZodSchema = termResponseSchema) => async (res: Response) => {
    return getTermsResponseSchema(term).parse({
        data: await res.json(),
        total: parseInt(res.headers.get("x-wp-total") ?? "0"),
        totalPages: parseInt(res.headers.get("x-wp-totalpages") ?? "0")
    });
}

export const getTermRequest = (args: GetTermByIdRequestArgs)=> {
    const {
        baseUrl,
        taxonomy = "categories",
        id,
    } = args;
    return new URL(`${trimEndSlash(baseUrl)}/wp-json/wp/v2/${taxonomy}/${id}`);
}

export const asTermResponse = (term: ZodSchema = termResponseSchema) => async (res: Response) => {
    return term.parse(res);
}