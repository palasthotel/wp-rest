import {getPostRequest, getPostsRequest, getRevisionByIdRequest, getTermRequest, getUserRequest} from "../src";

const baseUrl = "https://example.org";

describe('Path segments', () => {

    test("Should keep regular segments as they are", () => {
        expect(getPostRequest({baseUrl, type: "pages", id: 12}).pathname)
            .toEqual("/wp-json/wp/v2/pages/12");
        expect(getTermRequest({baseUrl, taxonomy: "my_tax-1", id: 3}).pathname)
            .toEqual("/wp-json/wp/v2/my_tax-1/3");
        expect(getRevisionByIdRequest({baseUrl, post: 5, revision: 7}).pathname)
            .toEqual("/wp-json/wp/v2/posts/5/revisions/7");
    });

    test("Should keep every value in its own segment", () => {
        const url = getPostRequest({baseUrl, type: "a/b?c=d#e", id: 1});
        expect(url.pathname).toEqual("/wp-json/wp/v2/a%2Fb%3Fc%3Dd%23e/1");
        expect(url.search).toEqual("");
        expect(url.hash).toEqual("");

        const user = getUserRequest({baseUrl, id: "1/../2" as unknown as number});
        expect(user.pathname).toEqual("/wp-json/wp/v2/users/1%2F..%2F2");
    });

    test("Should refuse dot segments", () => {
        for (const type of [".", "..", "%2e%2E", ".%2e"]) {
            expect(() => getPostsRequest({baseUrl, type})).toThrow(TypeError);
        }
        expect(() => getTermRequest({baseUrl, taxonomy: "", id: 1})).toThrow(TypeError);
    });
});
