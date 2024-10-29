import {mediaResponseSchema} from "../src";

const dummyMediaResponse = {
    id: 1,
    date: "2024-10-29T14:26:25",
    date_gmt: "2024-10-29T13:26:25",
    guid: {
        rendered: "http://example.com/wp-content/uploads/2024/10/anonymized-image.jpg"
    },
    modified: "2024-10-29T14:26:25",
    modified_gmt: "2024-10-29T13:26:25",
    slug: "anonymized-image-12345",
    status: "inherit",
    type: "attachment",
    link: "http://example.com/sample-page/anonymized-image-12345/",
    title: {
        rendered: "Anonymized Image 12345"
    },
    author: 0,
    featured_media: 0,
    comment_status: "open",
    ping_status: "closed",
    template: "",
    meta: [],
    class_list: [
        "post-1",
        "attachment",
        "type-attachment",
        "status-inherit",
        "hentry"
    ],
    locale: null,
    locales: [],
    description: {
        rendered: '<p class="attachment"><a href="http://example.com/wp-content/uploads/2024/10/anonymized-image-12345-scaled.jpg"><img loading="lazy" decoding="async" width="300" height="171" src="http://example.com/wp-content/uploads/2024/10/anonymized-image-12345-300x171.jpg" class="attachment-medium size-medium" alt="" srcset="http://example.com/wp-content/uploads/2024/10/anonymized-image-12345-300x171.jpg 300w, http://example.com/wp-content/uploads/2024/10/anonymized-image-12345-1024x585.jpg 1024w, http://example.com/wp-content/uploads/2024/10/anonymized-image-12345-768x439.jpg 768w, http://example.com/wp-content/uploads/2024/10/anonymized-image-12345-1536x878.jpg 1536w, http://example.com/wp-content/uploads/2024/10/anonymized-image-12345-2048x1170.jpg 2048w" sizes="(max-width: 300px) 100vw, 300px" /></a></p>'
    },
    caption: {
        rendered: ""
    },
    alt_text: "",
    media_type: "image",
    mime_type: "image/jpeg",
    media_details: {
        width: 2560,
        height: 1463,
        file: "2024/10/anonymized-image-12345-scaled.jpg",
        filesize: 963225,
        sizes: {
            medium: {
                file: "anonymized-image-12345-300x171.jpg",
                width: 300,
                height: 171,
                filesize: 25367,
                mime_type: "image/jpeg",
                source_url: "http://example.com/wp-content/uploads/2024/10/anonymized-image-12345-300x171.jpg"
            },
            large: {
                file: "anonymized-image-12345-1024x585.jpg",
                width: 1024,
                height: 585,
                filesize: 221483,
                mime_type: "image/jpeg",
                source_url: "http://example.com/wp-content/uploads/2024/10/anonymized-image-12345-1024x585.jpg"
            },
            thumbnail: {
                file: "anonymized-image-12345-150x150.jpg",
                width: 150,
                height: 150,
                filesize: 11513,
                mime_type: "image/jpeg",
                source_url: "http://example.com/wp-content/uploads/2024/10/anonymized-image-12345-150x150.jpg"
            },
            medium_large: {
                file: "anonymized-image-12345-768x439.jpg",
                width: 768,
                height: 439,
                filesize: 135271,
                mime_type: "image/jpeg",
                source_url: "http://example.com/wp-content/uploads/2024/10/anonymized-image-12345-768x439.jpg"
            },
            "1536x1536": {
                file: "anonymized-image-12345-1536x878.jpg",
                width: 1536,
                height: 878,
                filesize: 436224,
                mime_type: "image/jpeg",
                source_url: "http://example.com/wp-content/uploads/2024/10/anonymized-image-12345-1536x878.jpg"
            },
            "2048x2048": {
                file: "anonymized-image-12345-2048x1170.jpg",
                width: 2048,
                height: 1170,
                filesize: 687213,
                mime_type: "image/jpeg",
                source_url: "http://example.com/wp-content/uploads/2024/10/anonymized-image-12345-2048x1170.jpg"
            },
            full: {
                file: "anonymized-image-12345-scaled.jpg",
                width: 2560,
                height: 1463,
                mime_type: "image/jpeg",
                source_url: "http://example.com/wp-content/uploads/2024/10/anonymized-image-12345-scaled.jpg"
            }
        },
        image_meta: {
            aperture: "0",
            credit: "",
            camera: "",
            caption: "",
            created_timestamp: "0",
            copyright: "",
            focal_length: "0",
            iso: "0",
            shutter_speed: "0",
            title: "",
            orientation: "0",
            keywords: []
        },
        original_image: "anonymized-image-12345.jpg"
    },
    post: 0,
    source_url: "http://example.com/wp-content/uploads/2024/10/anonymized-image-12345-scaled.jpg",
    _links: {
        self: [
            {
                href: "http://example.com/wp-json/wp/v2/media/1"
            }
        ],
        collection: [
            {
                href: "http://example.com/wp-json/wp/v2/media"
            }
        ],
        about: [
            {
                href: "http://example.com/wp-json/wp/v2/types/attachment"
            }
        ],
        author: [
            {
                embeddable: true,
                href: "http://example.com/wp-json/wp/v2/users/0"
            }
        ],
        replies: [
            {
                embeddable: true,
                href: "http://example.com/wp-json/wp/v2/comments?post=1"
            }
        ]
    }
}

test("Should parse empty meta as array", ()=>{
    const result = mediaResponseSchema.safeParse(dummyMediaResponse);
    expect(result.success).toBeTruthy();
});
