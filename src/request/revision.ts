import {GetRevisionByIdRequestArgs, GetRevisionsRequestArgs} from "../@types/revisions";
import {trimEndSlash} from "../util/string";
import {SearchParamable, setupSearchParams} from "../util/search-params";
import {ZodSchema} from "zod";
import {postResponseSchema} from "../schema";
import {getRevisionsResponseSchema, revisionResponseSchema} from "../schema/revisions";

export const getRevisionsRequest = ( args: GetRevisionsRequestArgs) => {
    const {
        baseUrl,
        post,
        type = "posts",
        ...rest
    } = args;

    const url = new URL(`${trimEndSlash(baseUrl)}/wp-json/wp/v2/${type}/${post}/revisions`);

    setupSearchParams(url.searchParams, rest as SearchParamable);

    return url;
}

export const asRevisionsResponse = (revision: ZodSchema = postResponseSchema) => async (res: Response) => {
    return getRevisionsResponseSchema(revision).parse({
        data: await res.json(),
        total: parseInt(res.headers.get("x-wp-total") ?? "0"),
        totalPages: parseInt(res.headers.get("x-wp-totalpages") ?? "0")
    });
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

export const asRevisionResponse = (revision: ZodSchema = revisionResponseSchema)=> async (res: Response) => {
    return revision.parse(await res.json());
}
