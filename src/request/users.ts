import {trimEndSlash} from "../util/string";
import {SearchParamable, setupSearchParams} from "../util/search-params";
import {GetUserRequestArgs, GetUsersRequestArgs} from "../@types/users";

export const getUsersRequest = <T extends GetUsersRequestArgs>(args: T): URL => {

    const {
        baseUrl,
        ...rest
    } = args;

    const url = new URL(`${trimEndSlash(baseUrl)}/wp-json/wp/v2/users`);

    setupSearchParams(url.searchParams, rest as SearchParamable);

    return url;
}

export const getUserRequest = (
    args: GetUserRequestArgs
) => {
    const {
        baseUrl,
        id,
    } = args;
    return new URL(`${trimEndSlash(baseUrl)}/wp-json/wp/v2/users/${id}`);
}