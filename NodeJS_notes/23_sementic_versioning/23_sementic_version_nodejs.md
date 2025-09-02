## Sementic Versioning System in Nodejs:

1. Most of the npm packages and Nodejs also uses `Sementic Versioning System SVS` or `SemVer`.
2. Some packages like `TypeScript` and `React Native` don't follow it.

## Version Format like (22.1.6)

`MAJOR.MINOR.PATCH`

# MAJOR Version (20.X.X)

1. Introduces `big changes`.
2. Not backwar-compatible `(old code may break)`.
3. Example: moving from `19.x.x` -> `20.x.x`.

# MINOR Version (X.11.X)

1. Adds `new features`.
2. It is backword-compatible `(old code still works)`.
3. Example: 20.10.0 -> 20.11.0.

# PATCH Version (X.X.1)

1. Introduces `bug fixes`, `performance improvments` or `security patches`.
2. No new feature added, just fixes
3. Example `20.11.0` -> `20.11.1`.

# Example Breakdown: 20.11.1

20 -> Major Release
11 -> Minor Release
1 -> Patch Release

## Extra Info

1. `LTS (Long Term Support)` stable version for production. Recommended for most apps.
2. `Current` latest features, but may bot be as stable, Best for testing new things.
