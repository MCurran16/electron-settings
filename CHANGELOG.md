# Changelog

All notable changes to this project will be documented in this file. See [standard-version](https://github.com/conventional-changelog/standard-version) for commit guidelines.

## [4.1.0](https://github.com/nathanbuchar/electron-settings/compare/v4.0.3...v4.1.0) (2021-08-29)


### Features

* add `keys` and `keysSync` ([cb6baee](https://github.com/nathanbuchar/electron-settings/commit/cb6baee4e2a432056de28dc56ca996eb4f56c231))
* add `settings` and `settingsSync` ([851536f](https://github.com/nathanbuchar/electron-settings/commit/851536fb2de82bbecf022284c79d4ae38b8948d6))

### [4.0.3](https://github.com/nathanbuchar/electron-settings/compare/v4.0.2...v4.0.3) (2021-08-29)

### [4.0.2](https://github.com/nathanbuchar/electron-settings/compare/v4.0.1...v4.0.2) (2020-06-27)


### Bug Fixes

* Fix module export for node ([9064b0f](https://github.com/nathanbuchar/electron-settings/commit/9064b0f71f9a508add7b7a76b0c9a830697beb80))

### [4.0.1](https://github.com/nathanbuchar/electron-settings/compare/v4.0.0...v4.0.1) (2020-06-20)

## [4.0.0](https://github.com/nathanbuchar/electron-settings/compare/v3.1.4...v4.0.0) (2020-06-07)


### ⚠ BREAKING CHANGES

* `has()` is now async. Use `hasSync()` for sync.
* `get()` is now async. Use `getSync()` for sync.
* `set()` is now async. Use `setSync()` for sync.
* `delete()` has been removed. Use `unset()` instead, or
`unsetSync()` for sync.
* `setPath()` has been removed. Use `configure()`
instead.
* `clearPath()` has been removed. Use `configure()`
instead.
* `getAll()` has been removed. Use `get()` instead.
* `setAll()` has been removed. Use `set()` instead.
* `deleteAll()` has been removed. Use `unset()` instead.
* The default settings file name has been changed from
`Settings` to `settings.json`.
* Key path observers have been removed.

### Features

* Electron Settings v4 ([6199f8b](https://github.com/nathanbuchar/electron-settings/commit/6199f8b2ce27adaac1d1f5b57e03d8550fa2d565))
