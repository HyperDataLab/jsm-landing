# Windows installer releases

The `Windows installer release` workflow runs when a version tag such as
`v1.0.0` is pushed to this repository. It builds the installer from the FE and
BE refs selected by the `JSM_FE_REF` and `JSM_BE_REF` repository variables. The
defaults point to the current desktop FE and Windows packager branches. It then
creates a draft GitHub Release in `HyperDataLab/jsm-landing` with
`JSM-Setup.exe`. The draft stays unpublished until a maintainer reviews and
publishes it.

The GitHub Release uses this repository's `GITHUB_TOKEN` with `contents: write`,
so a separate release token is not needed. The FE and BE source repositories
are currently public. If either becomes private, add the repository secret
`JSM_SOURCE_REPO_READ_TOKEN` with read access to both repositories.

Before tagging, confirm `ProductVersion` in the selected BE ref's
`packaging/windows/installer.iss` matches the version tag. No snapshot is passed
to the build, so the installer starts with an empty local journal database.

To publish a new draft after the workflow is merged:

```powershell
git tag v1.0.0
git push origin v1.0.0
```

The download link used by the landing page points to the latest published
release. Draft releases are not public downloads.
