# Releases

## [2.0.0](https://github.com/palasthotel/wp-rest/compare/1.0.2...v2.0.0) (2026-11-20)


### ⚠ BREAKING CHANGES

* the package is licensed under GPL-3.0-or-later instead of MIT. Check that this fits the license of your project before upgrading from 1.x.

### Bug Fixes

* **deps:** require zod 4.6.7 or later ([443bf5e](https://github.com/palasthotel/wp-rest/commit/443bf5e6f6b54ebc5115d439a37cf33cf037da24))
* encode the post type, taxonomy and ids in request urls ([4d9ce35](https://github.com/palasthotel/wp-rest/commit/4d9ce35066582974ea618a61f8f0fa7a162cdc8f))


### Miscellaneous

* license under GPL-3.0-or-later ([f84c6aa](https://github.com/palasthotel/wp-rest/commit/f84c6aac749e446408e0074657220d3a73899a61))

## [1.0.2]
* allow empty string for comment_status in media schema because that happens, when a media file is initially uploaded not to a post

## [1.0.1]
* fix missing types by re-enabling unbundling

## [1.0]
* Update dependencies
* Migrate form Zod v3 to v4
* Switch bundler from _tsup_ to _tsdown_ (_tsup_ is officially deprecated)
