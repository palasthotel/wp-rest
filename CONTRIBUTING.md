# Contributing

## Conventional Commits

Commit messages decide the next version and the changelog, via
[release-please](https://github.com/googleapis/release-please):

| Prefix | Release | Example |
|---|---|---|
| `fix:` | patch | `fix: allow an empty comment_status in the media schema` |
| `feat:` | minor | `feat: add a request builder for menus` |
| `feat!:`, `fix!:` or `BREAKING CHANGE:` in the footer | **major** | `feat!: require zod 5` |
| `chore:`, `build:`, `ci:`, `docs:`, `refactor:`, `test:` | none | `ci: run the tests on Node 26` |

### Which changes get `fix:` or `feat:`

Only changes that matter to a project that installs the package: the exported
functions, schemas and types, what ends up in `dist/`, and the runtime dependencies in
`dependencies`. The line becomes the changelog entry those projects read.

Everything else releases nothing: workflows, tests, build tooling, devDependencies,
repository documentation, refactoring without a change in behaviour. A change confined
to files outside `src/` and the `dependencies` of `package.json` is almost never a
`fix:`.

Removing or renaming an export, making a schema stricter so that responses that passed
before fail, or raising the major version of `zod` breaks consumers: that is a major
release.

### Dependencies

Dependabot writes `fix(deps): …` for the runtime dependencies (raising the minimum
version consumers get is a release) and `chore(deps-dev): …` for the devDependencies
(no release).

## Workflow

```
branch → pull request to main → PR checks → merge
                                   │
            audit of the runtime dependencies, tsc, vitest, build, entry points, npm pack
```

After a merge, release-please opens or updates the release PR. Merging it tags
`v<version>`; the tag starts `publish.yml` (npmjs.org and GitHub Packages) and
`sbom.yml` (SBOM to the GitHub release and to Dependency-Track).

Don't edit `.release-please-manifest.json`, the version in `package.json` or the
`CHANGELOG.md` by hand - release-please maintains them. Never force-push `main`: it
decouples release-please from the history.

## Local setup

```sh
npm ci
npm run lint
npm test
npm run build
```

## For maintainers

| | |
|---|---|
| `vars.RELEASE_BOT_APP_ID`, `secrets.RELEASE_BOT_PRIVATE_KEY` | the org's release bot; the app has to be installed on this repository. Its token is what makes the release tag start the publish workflows - a tag pushed with `GITHUB_TOKEN` starts nothing |
| npmjs.org | trusted publisher for `@palasthotel/wp-rest`: GitHub Actions, repository `palasthotel/wp-rest`, workflow `publish.yml`. No npm token is stored, and none should be |
| GitHub Packages | `GITHUB_TOKEN` of the publish job, nothing to set up |
| Dependency-Track | OIDC with the immutable subject (`use_immutable_subject` on this repository), see [docs/sbom.md](https://github.com/palasthotel/github-workflows/blob/main/docs/sbom.md) of github-workflows |
| Immutable releases | off: `sbom.yml` attaches the SBOM to the release after it is created |
