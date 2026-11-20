# @palasthotel/wp-rest

[Zod](https://zod.dev) schemas, TypeScript types and request builders for the
[WordPress REST API](https://developer.wordpress.org/rest-api/) (`/wp-json/wp/v2`):
posts and custom post types, pages, media, terms, users, comments and revisions.

## Installation

From npmjs.org:

```sh
npm install @palasthotel/wp-rest zod
```

`zod` (v4) is a dependency of the package; install it in your project as well when you
use its schemas or types directly.

The same versions are published to GitHub Packages. To install from there, point the
scope to it in your project's `.npmrc` (GitHub Packages needs a token with
`read:packages`, even for public packages):

```ini
@palasthotel:registry=https://npm.pkg.github.com
//npm.pkg.github.com/:_authToken=${GITHUB_TOKEN}
```

The package ships ESM and CommonJS, each with type declarations.

## Usage

```ts
import {
	getPostsRequest,
	postResponseSchema,
	responseAsCollection,
	isError,
	isParseError,
} from '@palasthotel/wp-rest';

const url = getPostsRequest( {
	baseUrl: 'https://example.org',
	type: 'pages',
	per_page: 10,
} );
// https://example.org/wp-json/wp/v2/pages?per_page=10

const result = await fetch( url ).then(
	responseAsCollection( postResponseSchema.array() )
);

if ( isError( result ) || isParseError( result ) ) {
	// network/JSON error, or the response does not match the schema
} else {
	result.data; // the posts
	result.total; // X-WP-Total
	result.totalPages; // X-WP-TotalPages
}
```

What is exported:

| | |
|---|---|
| Request builders | `getPostsRequest`, `getPostRequest`, `getMediaItemsRequest`, `getMediaRequest`, `getTermsRequest`, `getTermRequest`, `getUsersRequest`, `getUserRequest`, `getCommentsRequest`, `getCommentRequest`, `getRevisionsRequest`, `getRevisionByIdRequest` - each returns a `URL` |
| Schemas | `postResponseSchema`, `mediaResponseSchema`, `termResponseSchema`, `userResponseSchema`, `commentResponseSchema`, `revisionResponseSchema` and the field schemas they are built from |
| Responses | `responseAsEntity`, `responseAsCollection`, `isError`, `isParseError`, `getPaginationHeaders` |
| Helpers | `authorizationHeaders` (Basic auth, e.g. with an application password), `postsAsHierarchy`, `termsAsHierarchy`, `commentsAsHierarchy`, `sustainingParse`, `logIssues` |
| Types | `PostResponse`, `GetPostsRequestArgs` and the like for every endpoint |

A response that validates is returned as it came, with fields the schema does not know
about (`sustainingParse`), so plugin fields in the response are not lost.

## Development

Node version: see `.nvmrc`.

```sh
npm ci
npm run lint    # tsc --noEmit
npm test        # vitest
npm run build   # tsdown → dist/
```

`dist/` is not in the repository; the release workflow builds it.

## Releases

Versions come from [Conventional Commits](https://www.conventionalcommits.org/) via
[release-please](https://github.com/googleapis/release-please) - see
[CONTRIBUTING.md](CONTRIBUTING.md). Merging the release PR tags `v<version>`, which
publishes the package to npmjs.org (with provenance) and GitHub Packages and sends its
SBOM to Dependency-Track. Changes are listed in [CHANGELOG.md](CHANGELOG.md).

Releases up to 1.0.2 were tagged without the `v` (`1.0.2`).

## License

[GPL-3.0-or-later](LICENSE), from version 2.0.0 on.

The 1.x versions were published under the MIT license and remain available under it.
