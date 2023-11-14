import {addTaxonomyQuery, setupSearchParams} from "./util/search-params";
import {getPostRequest, getPostsRequest} from 'request/posts';
import {authorizationHeaders} from "./util/auth";
import * as schema from './schema';
import {getTermRequest, getTermsRequest} from "./request/terms";
import {getRevisionByIdRequest, getRevisionsRequest} from "./request/revision";
import {getCommentRequest, getCommentsRequest} from "./request/comments";
import {getUserRequest, getUsersRequest} from "./request/users";
import {commentsAsHierarchy, postsAsHierarchy, termsAsHierarchy} from "./util/hierarchy";
import {getPaginationHeaders} from "./util/response-headers";

export default {
    searchParams: {
        setupSearchParams,
        addTaxonomyQuery,
    },
    headers: {
        request: {
            authorization: authorizationHeaders,
        },
        response: {
            pagination: getPaginationHeaders,
        }
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
        comments: {
            get: getCommentRequest,
            getAll: getCommentsRequest,
        },
        users: {
            get: getUserRequest,
            getAll: getUsersRequest,
        }
    },
    asHierarchy: {
        posts: postsAsHierarchy,
        terms: termsAsHierarchy,
        comments: commentsAsHierarchy,
    },
    schema,
}

export type * from './@types/general';
export type * from './@types/posts';
export type * from './@types/terms';
export type * from './@types/revisions';