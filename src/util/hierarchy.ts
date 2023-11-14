import {Hierarchy} from "../@types/general";
import {PostResponse} from "../@types/posts";
import {TermResponse} from "../@types/terms";
import {CommentResponse} from "../@types/comments";

export function postsAsHierarchy(
    posts: PostResponse[]
): Hierarchy<PostResponse>[] {
    return buildHierarchy<PostResponse>(
        posts,
        (post) => post.id,
        (post) => post.parent && post.parent > 0 ? post.parent : false,
    );
}

export function termsAsHierarchy(
    terms: TermResponse[],
){
    return buildHierarchy<TermResponse>(
        terms,
        (item) => item.id,
        (item) => item.parent && item.parent > 0 ? item.parent : false,
    )
}

export function commentsAsHierarchy(
    comments: CommentResponse[]
): Hierarchy<CommentResponse>[] {
    return buildHierarchy<CommentResponse>(
        comments,
        (comment) => comment.id,
        (comment) => comment.parent > 0 ? comment.parent : false,
    );
}

export function buildHierarchy<T>(
    items: T[],
    getId: (item: T) => number,
    getParentId: ( item:T ) => false | number
): Hierarchy<T>[] {

    if (items.length === 0) return [];

    const childrenMap: { [parentId: number]: T[] } = {};

    items.forEach(item => {
        const parentId = getParentId(item);
        if (parentId === false) {
            return;
        }

        if (!Array.isArray(childrenMap[parentId])) {
            childrenMap[parentId] = [];
        }
        childrenMap[parentId].push({...item});
    });

    return recursiveHierarchy(items, childrenMap, getId).filter(item => {
        return getParentId(item.item) === false;
    });
}

const recursiveHierarchy = <T>(
    items: T[],
    childrenMap: { [parentId: number]: T[] },
    getId: (item: T) => number
): Hierarchy<T>[] => {
    return items.map(item => {
        const id = getId(item);
        return {
            item,
            children: childrenMap[id] ?
                recursiveHierarchy(childrenMap[id], childrenMap, getId)
                :
                []
        }
    })
}