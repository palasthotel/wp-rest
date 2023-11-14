import {getPostsRequest} from "../src";

const baseUrl = "https://www.palasthotel.de/";

describe('Basic requests', () => {

    test("Should be a simple get posts request", ()=>{
        const url = getPostsRequest({
            baseUrl: "https://www.palasthotel.de/",
        });
        expect(
            decodeURIComponent(url.toString())
        ).toEqual(`https://www.palasthotel.de/wp-json/wp/v2/posts`)
    });

    test("Should get post types", ()=>{
        const basic = {
            baseUrl: "https://www.palasthotel.de/",
        }

        const postsUrl= getPostsRequest({
            ...basic,
            type: "posts",
        });

        expect(
            decodeURIComponent(postsUrl.toString())
        ).toEqual(`https://www.palasthotel.de/wp-json/wp/v2/posts`);

        const pagesUrl= getPostsRequest({
            ...basic,
            type: "pages",
        });

        expect(
            decodeURIComponent(pagesUrl.toString())
        ).toEqual(`https://www.palasthotel.de/wp-json/wp/v2/pages`);


    })
});

describe('Pagination', () => {

    test("Should get page 2", ()=>{

        const url = getPostsRequest({
            baseUrl: "https://www.palasthotel.de/",
            page: 2,
        });

        expect(
            decodeURIComponent(url.toString())
        ).toEqual(`https://www.palasthotel.de/wp-json/wp/v2/posts?page=2`)
    });


    test("Should get per_page 4", ()=>{

        const url = getPostsRequest({
            baseUrl: "https://www.palasthotel.de/",
            per_page: 4,
        });

        expect(
            decodeURIComponent(url.toString())
        ).toEqual(`https://www.palasthotel.de/wp-json/wp/v2/posts?per_page=4`)
    })
});

describe('Taxonomies', () => {

    test("Should get posts by category", ()=>{

        const basic = getPostsRequest({
            baseUrl,
            categories: "1,2"
        });

        expect(
            decodeURIComponent(basic.toString())
        ).toEqual(`https://www.palasthotel.de/wp-json/wp/v2/posts?categories=1,2`)

        const url = getPostsRequest({
            baseUrl,
            categories: {
                operator: "AND",
                terms: [1,2]
            }
        });

        expect(
            decodeURIComponent(url.toString())
        ).toEqual(`https://www.palasthotel.de/wp-json/wp/v2/posts?categories[operator]=AND&categories[terms]=1,2`);


    })

    test("Should get posts by tags", ()=>{

        const url = getPostsRequest({
            baseUrl: "https://www.palasthotel.de/",
            tags: {
                operator: "AND",
                terms: [1,2]
            }
        });

        expect(
            decodeURIComponent(url.toString())
        ).toEqual(`https://www.palasthotel.de/wp-json/wp/v2/posts?tags[operator]=AND&tags[terms]=1,2`)
    });

    test("Should get posts by custom tax", ()=>{

        const url = getPostsRequest({
            baseUrl: "https://www.palasthotel.de/",
            my_taxonomy: {
                operator: "AND",
                terms: [1,2]
            }
        });

        expect(
            decodeURIComponent(url.toString())
        ).toEqual(`https://www.palasthotel.de/wp-json/wp/v2/posts?my_taxonomy[operator]=AND&my_taxonomy[terms]=1,2`)
    });
});

