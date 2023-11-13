import {setupSearchParams, addTaxonomyQuery} from "./util/search-params";
import {asPostResponse, asPostsResponse, getPostRequest, getPostsRequest} from 'request/posts';
import {authorizationHeaders} from "./util/auth";
import * as schema from './schema';
import {asTermResponse, asTermsResponse, getTermRequest, getTermsRequest} from "./request/terms";
import {asRevisionResponse, asRevisionsResponse, getRevisionByIdRequest, getRevisionsRequest} from "./request/revision";

export default {
    searchParams: {
        setupSearchParams,
        addTaxonomyQuery,
    },
    headers: {
        authorization: authorizationHeaders,
    },
    request: {
        posts: {
            get: getPostRequest,
            getAll: getPostsRequest,
        },
        revisions: {
            get: getRevisionByIdRequest,
            getAll: getRevisionsRequest,
        },
        terms: {
            get: getTermRequest,
            getAll: getTermsRequest,
        },
    },
    resolve: {
        asPostResponse,
        asPostsResponse,
        asTermResponse,
        asTermsResponse,
        asRevisionsResponse,
        asRevisionResponse,
    },
    schema,
}

export type * from './@types/general';
export type * from './@types/posts';
export type * from './@types/terms';
export type * from './@types/revisions';