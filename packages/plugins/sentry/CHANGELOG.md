# @envelop/sentry

## 5.1.2

### Patch Changes

- [#1728](https://github.com/n1ru4l/envelop/pull/1728)
  [`a36925c7`](https://github.com/n1ru4l/envelop/commit/a36925c7df0538f88b51682e4e23f4b16f6fae2b)
  Thanks [@ardatan](https://github.com/ardatan)! - - Memoize parsed document string result and use
  it wherever possible, and export `getDocumentString` function to allow users to use it as well.
  - Use `WeakMap`s with `DocumentNode` wherever possible instead of using LRU Cache with strings. It
    is more optimal if a parser caching is used
- Updated dependencies
  [[`a36925c7`](https://github.com/n1ru4l/envelop/commit/a36925c7df0538f88b51682e4e23f4b16f6fae2b)]:
  - @envelop/core@3.0.7

## 5.1.1

### Patch Changes

- [#1725](https://github.com/n1ru4l/envelop/pull/1725)
  [`c1eb2c09`](https://github.com/n1ru4l/envelop/commit/c1eb2c09ac535b076a5c13430c3892d98f7ef957)
  Thanks [@n1ru4l](https://github.com/n1ru4l)! - dependencies updates:

  - Updated dependency [`tslib@^2.5.0` ↗︎](https://www.npmjs.com/package/tslib/v/2.5.0) (from
    `^2.4.0`, in `dependencies`)

- Updated dependencies
  [[`c1eb2c09`](https://github.com/n1ru4l/envelop/commit/c1eb2c09ac535b076a5c13430c3892d98f7ef957)]:
  - @envelop/core@3.0.6

## 5.1.0

### Minor Changes

- [#1632](https://github.com/n1ru4l/envelop/pull/1632)
  [`2a175b47`](https://github.com/n1ru4l/envelop/commit/2a175b476a47d17225946277ff00f0a90ae50044)
  Thanks [@jeengbe](https://github.com/jeengbe)! - feat: add cache for printed documents

### Patch Changes

- Updated dependencies
  [[`270249cf`](https://github.com/n1ru4l/envelop/commit/270249cfb7650f8ad64f0167bb45a99475a03b04)]:
  - @envelop/core@3.0.5

## 5.0.0

### Major Changes

- [#1583](https://github.com/n1ru4l/envelop/pull/1583)
  [`f6361e86`](https://github.com/n1ru4l/envelop/commit/f6361e864e8d0a434a539a78679b263fc78964f7)
  Thanks [@n1ru4l](https://github.com/n1ru4l)! - Remove `trackResolvers` functionality.

  This feature resulted in errors being reported multiple times. In the future we might re-add it as
  a standalone plugin, right now we don't see any benefit from it.

### Patch Changes

- [#1583](https://github.com/n1ru4l/envelop/pull/1583)
  [`f6361e86`](https://github.com/n1ru4l/envelop/commit/f6361e864e8d0a434a539a78679b263fc78964f7)
  Thanks [@n1ru4l](https://github.com/n1ru4l)! - dependencies updates:

  - Removed dependency
    [`@envelop/on-resolve@^2.0.4` ↗︎](https://www.npmjs.com/package/@envelop/on-resolve/v/2.0.4)
    (from `dependencies`)

- [#1583](https://github.com/n1ru4l/envelop/pull/1583)
  [`f6361e86`](https://github.com/n1ru4l/envelop/commit/f6361e864e8d0a434a539a78679b263fc78964f7)
  Thanks [@n1ru4l](https://github.com/n1ru4l)! - Fix synergy together with the masked error plugin
  by copying over the original error when attaching the sentry event id

## 4.0.4

### Patch Changes

- Updated dependencies []:
  - @envelop/core@3.0.4
- Updated dependencies []:
  - @envelop/on-resolve@2.0.4

## 4.0.3

### Patch Changes

- [#1571](https://github.com/n1ru4l/envelop/pull/1571)
  [`6b48ef96`](https://github.com/n1ru4l/envelop/commit/6b48ef962020eb7dfd2918626b8a394bff673e4f)
  Thanks [@ardatan](https://github.com/ardatan)! - Deeply check if it is an original GraphQL Error

- Updated dependencies
  [[`6b48ef96`](https://github.com/n1ru4l/envelop/commit/6b48ef962020eb7dfd2918626b8a394bff673e4f)]:
  - @envelop/core@3.0.3
- Updated dependencies []:
  - @envelop/on-resolve@2.0.3

## 4.0.2

### Patch Changes

- Updated dependencies
  [[`22f5ccfb`](https://github.com/n1ru4l/envelop/commit/22f5ccfbe69eb052cda6c1908425b63e3d906243)]:
  - @envelop/core@3.0.2
- Updated dependencies []:
  - @envelop/on-resolve@2.0.2

## 4.0.0

### Major Changes

- [#1487](https://github.com/n1ru4l/envelop/pull/1487)
  [`dc1e24b5`](https://github.com/n1ru4l/envelop/commit/dc1e24b5340ed7eba300a702b17f9be5cff65a8f)
  Thanks [@saihaj](https://github.com/saihaj)! - Default skip reporting `GraphQLError`

- Updated dependencies
  [[`dc1e24b5`](https://github.com/n1ru4l/envelop/commit/dc1e24b5340ed7eba300a702b17f9be5cff65a8f),
  [`dc1e24b5`](https://github.com/n1ru4l/envelop/commit/dc1e24b5340ed7eba300a702b17f9be5cff65a8f),
  [`dc1e24b5`](https://github.com/n1ru4l/envelop/commit/dc1e24b5340ed7eba300a702b17f9be5cff65a8f),
  [`dc1e24b5`](https://github.com/n1ru4l/envelop/commit/dc1e24b5340ed7eba300a702b17f9be5cff65a8f),
  [`dc1e24b5`](https://github.com/n1ru4l/envelop/commit/dc1e24b5340ed7eba300a702b17f9be5cff65a8f),
  [`dc1e24b5`](https://github.com/n1ru4l/envelop/commit/dc1e24b5340ed7eba300a702b17f9be5cff65a8f),
  [`dc1e24b5`](https://github.com/n1ru4l/envelop/commit/dc1e24b5340ed7eba300a702b17f9be5cff65a8f),
  [`dc1e24b5`](https://github.com/n1ru4l/envelop/commit/dc1e24b5340ed7eba300a702b17f9be5cff65a8f),
  [`dc1e24b5`](https://github.com/n1ru4l/envelop/commit/dc1e24b5340ed7eba300a702b17f9be5cff65a8f),
  [`dc1e24b5`](https://github.com/n1ru4l/envelop/commit/dc1e24b5340ed7eba300a702b17f9be5cff65a8f),
  [`dc1e24b5`](https://github.com/n1ru4l/envelop/commit/dc1e24b5340ed7eba300a702b17f9be5cff65a8f),
  [`dc1e24b5`](https://github.com/n1ru4l/envelop/commit/dc1e24b5340ed7eba300a702b17f9be5cff65a8f),
  [`dc1e24b5`](https://github.com/n1ru4l/envelop/commit/dc1e24b5340ed7eba300a702b17f9be5cff65a8f),
  [`dc1e24b5`](https://github.com/n1ru4l/envelop/commit/dc1e24b5340ed7eba300a702b17f9be5cff65a8f)]:
  - @envelop/core@3.0.0

### Patch Changes

- Updated dependencies
  [[`dc1e24b5`](https://github.com/n1ru4l/envelop/commit/dc1e24b5340ed7eba300a702b17f9be5cff65a8f)]:
  - @envelop/on-resolve@2.0.0

## 3.8.1

### Patch Changes

- [#1526](https://github.com/n1ru4l/envelop/pull/1526)
  [`4a583b7a`](https://github.com/n1ru4l/envelop/commit/4a583b7aa81f23e8938d15a853949bdce420f178)
  Thanks [@kamilkisiela](https://github.com/kamilkisiela)! - fix: EnvelopError was not skipped by
  default

## 3.8.0

### Minor Changes

- [#1499](https://github.com/n1ru4l/envelop/pull/1499)
  [`1f7af02b`](https://github.com/n1ru4l/envelop/commit/1f7af02b9f1a16058a6d69fcd48425a93be655c6)
  Thanks [@viniciuspalma](https://github.com/viniciuspalma)! - Adding tslib to package dependencies

  Projects that currently are using yarn Berry with PnP or any strict dependency resolver, that
  requires that all dependencies are specified on package.json otherwise it would endue in an error
  if not treated correct

  Since https://www.typescriptlang.org/tsconfig#importHelpers is currently being used, tslib should
  be exported as a dependency to external runners get the proper import.

  Change on each package:

  ```json
  // package.json
  {
    "dependencies": {
      "tslib": "^2.4.0"
    }
  }
  ```

- Updated dependencies
  [[`1f7af02b`](https://github.com/n1ru4l/envelop/commit/1f7af02b9f1a16058a6d69fcd48425a93be655c6),
  [`ae7bc9a3`](https://github.com/n1ru4l/envelop/commit/ae7bc9a36abd595b0a91f7b4e133017d3eb99a4a)]:
  - @envelop/core@2.6.0

## 3.7.0

### Minor Changes

- Updated dependencies
  [[`5a5f5c04`](https://github.com/n1ru4l/envelop/commit/5a5f5c04177b9e1379fd77db5d6383160879d449),
  [`d828f129`](https://github.com/n1ru4l/envelop/commit/d828f1291254a0f9dfdc3654611087859e4c9708)]:
  - @envelop/core@2.5.0

## 3.6.3

### Patch Changes

- 071f946: Fix CommonJS TypeScript resolution with `moduleResolution` `node16` or `nodenext`
- Updated dependencies [071f946]
  - @envelop/core@2.4.2

## 3.6.2

### Patch Changes

- d54091f: Fix interoperability between the plugin and Sentry Integrations

## 3.6.1

### Patch Changes

- Updated dependencies [787d28a2]
  - @envelop/core@2.4.1

## 3.6.0

### Minor Changes

- 79ebe78: New feature: `traceparentData` (default: `{}`) - Adds tracing data to be sent to Sentry -
  this includes traceId, parentId and more. This can be used in connection with headers from the
  request to add the tracing details for Sentry.

## 3.5.0

### Minor Changes

- 8bb2738: Support TypeScript module resolution.
- Updated dependencies [8bb2738]
  - @envelop/core@2.4.0

### Patch Changes

- b1851eb: Create a more friendly error message in case the Sentry SDK is not properly configured.

## 3.4.2

### Patch Changes

- 3612010: supporting sentry v7.0.0
- fbf6155: update package.json repository links to point to the new home
- Updated dependencies [fbf6155]
  - @envelop/core@2.3.3

## 3.4.1

### Patch Changes

- Updated dependencies [07d029b]
  - @envelop/core@2.3.2

## 3.4.0

### Minor Changes

- 0be88fe: Expose sentry event id in error extensions

### Patch Changes

- Updated dependencies [d5c2c9a]
  - @envelop/core@2.3.1

## 3.3.0

### Minor Changes

- Updated dependencies [af23408]
  - @envelop/core@2.3.0

## 3.2.0

### Minor Changes

- Updated dependencies [ada7fb0]
- Updated dependencies [d5115b4]
- Updated dependencies [d5115b4]
  - @envelop/core@2.2.0

## 3.1.1

### Patch Changes

- b96ca65: Handle errors in async iterables, defer and stream queries. Better grouping of errors in
  lists by mapping the index number to a constant: `$index`

## 3.1.0

### Minor Changes

- Updated dependencies [78b3db2]
- Updated dependencies [f5eb436]
  - @envelop/core@2.1.0

## 3.0.0

### Patch Changes

- Updated dependencies [4106e08]
- Updated dependencies [aac65ef]
- Updated dependencies [4106e08]
  - @envelop/core@2.0.0

## 2.0.0

### Patch Changes

- Updated dependencies [d9cfb7c]
  - @envelop/core@1.7.0

## 1.5.1

### Patch Changes

- ccd86fe: Patch for defaultSkipError, which should return true if the error is an EnvelopError
  instance.

## 1.5.0

### Minor Changes

- 450abd4: Adds a new `skipError` option, which allows users to skip certain errors.

  It's useful in the case where a user has defined custom error types, such as `ValidationError`
  which may be used to validate resolver arguments.

## 1.4.1

### Patch Changes

- b1a0331: Properly list `@envelop/core` as a `peerDependency` in plugins.

  This resolves issues where the bundled envelop plugins published to npm had logic inlined from the
  `@envelop/core` package, causing `instanceof` check of `EnvelopError` to fail.

- Updated dependencies [b1a0331]
  - @envelop/core@1.6.1

## 1.4.0

### Minor Changes

- 090cae4: GraphQL v16 support

## 1.3.0

### Minor Changes

- 04120de: add support for GraphQL.js 16

## 1.2.1

### Patch Changes

- 016bbe2: do not report Envelop Error to sentry

## 1.2.0

### Minor Changes

- 1e2be95: Add configureScope option

## 1.1.0

### Minor Changes

- b5bdcad: Adds "skip" to indicate whether or not to skip the entire Sentry flow for given GraphQL
  operation

## 1.0.2

### Patch Changes

- 94db02d: Update usage of plugins to use the correct `isAsyncIterable` and new helper
  `handleStreamOrSingleExecutionResult`

## 1.0.1

### Patch Changes

- 8021229: fix ESM graphql import

## 1.0.0

### Major Changes

- 40bc444: v1 major release for envelop packages

## 0.3.1

### Patch Changes

- 28ad742: Improve TypeScript types

## 0.3.0

### Minor Changes

- eb6f53b: ESM Support for all plugins and envelop core

## 0.2.1

### Patch Changes

- f4924c7: Fix defaults

## 0.2.0

### Minor Changes

- e55c50a: Add trackResolvers
- e55c50a: Allow to reuse existing transaction

## 0.1.1

### Patch Changes

- 5fc65a4: Improved type-safety for internal context

## 0.1.0

### Minor Changes

- 2fba0b4: Initial version bump

## 0.0.2

### Patch Changes

- b1333b0: Initial packages release

## 0.0.1

### Patch Changes

- c499ae8: First bump as envelop
- 2cfc726: Fixes
