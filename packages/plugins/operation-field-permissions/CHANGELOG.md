# @envelop/operation-field-permissions

## 4.0.7

### Patch Changes

- Updated dependencies
  [[`a36925c7`](https://github.com/n1ru4l/envelop/commit/a36925c7df0538f88b51682e4e23f4b16f6fae2b)]:
  - @envelop/core@3.0.7
- Updated dependencies []:
  - @envelop/extended-validation@2.0.7

## 4.0.6

### Patch Changes

- [#1725](https://github.com/n1ru4l/envelop/pull/1725)
  [`c1eb2c09`](https://github.com/n1ru4l/envelop/commit/c1eb2c09ac535b076a5c13430c3892d98f7ef957)
  Thanks [@n1ru4l](https://github.com/n1ru4l)! - dependencies updates:

  - Updated dependency [`tslib@^2.5.0` ↗︎](https://www.npmjs.com/package/tslib/v/2.5.0) (from
    `^2.4.0`, in `dependencies`)

- Updated dependencies
  [[`c1eb2c09`](https://github.com/n1ru4l/envelop/commit/c1eb2c09ac535b076a5c13430c3892d98f7ef957)]:
  - @envelop/core@3.0.6
- Updated dependencies
  [[`c1eb2c09`](https://github.com/n1ru4l/envelop/commit/c1eb2c09ac535b076a5c13430c3892d98f7ef957)]:
  - @envelop/extended-validation@2.0.6

## 4.0.5

### Patch Changes

- Updated dependencies
  [[`270249cf`](https://github.com/n1ru4l/envelop/commit/270249cfb7650f8ad64f0167bb45a99475a03b04)]:
  - @envelop/core@3.0.5
- Updated dependencies []:
  - @envelop/extended-validation@2.0.5

## 4.0.4

### Patch Changes

- Updated dependencies []:
  - @envelop/core@3.0.4
- Updated dependencies []:
  - @envelop/extended-validation@2.0.4

## 4.0.3

### Patch Changes

- Updated dependencies
  [[`6b48ef96`](https://github.com/n1ru4l/envelop/commit/6b48ef962020eb7dfd2918626b8a394bff673e4f)]:
  - @envelop/core@3.0.3
- Updated dependencies []:
  - @envelop/extended-validation@2.0.3

## 4.0.2

### Patch Changes

- Updated dependencies
  [[`22f5ccfb`](https://github.com/n1ru4l/envelop/commit/22f5ccfbe69eb052cda6c1908425b63e3d906243)]:
  - @envelop/core@3.0.2
- Updated dependencies []:
  - @envelop/extended-validation@2.0.2

## 4.0.0

### Major Changes

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

- Updated dependencies []:
  - @envelop/extended-validation@2.0.0

## 3.6.0

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

### Patch Changes

- Updated dependencies
  [[`1f7af02b`](https://github.com/n1ru4l/envelop/commit/1f7af02b9f1a16058a6d69fcd48425a93be655c6)]:
  - @envelop/extended-validation@1.9.0

## 3.5.0

### Minor Changes

- Updated dependencies
  [[`5a5f5c04`](https://github.com/n1ru4l/envelop/commit/5a5f5c04177b9e1379fd77db5d6383160879d449),
  [`d828f129`](https://github.com/n1ru4l/envelop/commit/d828f1291254a0f9dfdc3654611087859e4c9708)]:
  - @envelop/core@2.5.0

### Patch Changes

- Updated dependencies []:
  - @envelop/extended-validation@1.8.0

## 3.4.2

### Patch Changes

- 071f946: Fix CommonJS TypeScript resolution with `moduleResolution` `node16` or `nodenext`
- Updated dependencies [071f946]
  - @envelop/core@2.4.2
- Updated dependencies [071f946]
  - @envelop/extended-validation@1.7.2

## 3.4.1

### Patch Changes

- Updated dependencies [787d28a2]
  - @envelop/core@2.4.1
  - @envelop/extended-validation@1.7.1

## 3.4.0

### Minor Changes

- 8bb2738: Support TypeScript module resolution.
- Updated dependencies [8bb2738]
  - @envelop/core@2.4.0

### Patch Changes

- 646de1e: remove unused code import statement
- Updated dependencies [8bb2738]
  - @envelop/extended-validation@1.7.0

## 3.3.4

### Patch Changes

- 2e79ae1: use EnvelopError instead of GraphQLError for preventing the error message from being
  masked

## 3.3.3

### Patch Changes

- fbf6155: update package.json repository links to point to the new home
- Updated dependencies [fbf6155]
  - @envelop/core@2.3.3
- Updated dependencies [fbf6155]
  - @envelop/extended-validation@1.6.3

## 3.3.2

### Patch Changes

- Updated dependencies [07d029b]
  - @envelop/core@2.3.2
  - @envelop/extended-validation@1.6.2

## 3.3.1

### Patch Changes

- Updated dependencies [d5c2c9a]
  - @envelop/core@2.3.1
  - @envelop/extended-validation@1.6.1

## 3.3.0

### Minor Changes

- Updated dependencies [af23408]
  - @envelop/core@2.3.0

### Patch Changes

- @envelop/extended-validation@1.6.0

## 3.2.0

### Minor Changes

- Updated dependencies [ada7fb0]
- Updated dependencies [d5115b4]
- Updated dependencies [d5115b4]
  - @envelop/core@2.2.0

### Patch Changes

- @envelop/extended-validation@1.5.0

## 3.1.1

### Patch Changes

- Updated dependencies [01c8dd6]
  - @envelop/extended-validation@1.4.1

## 3.1.0

### Minor Changes

- Updated dependencies [78b3db2]
- Updated dependencies [f5eb436]
  - @envelop/core@2.1.0

### Patch Changes

- Updated dependencies [78b3db2]
- Updated dependencies [8030244]
  - @envelop/extended-validation@1.4.0

## 3.0.0

### Patch Changes

- Updated dependencies [4106e08]
- Updated dependencies [aac65ef]
- Updated dependencies [4106e08]
  - @envelop/core@2.0.0
  - @envelop/extended-validation@1.3.3

## 2.0.0

### Patch Changes

- Updated dependencies [d9cfb7c]
  - @envelop/core@1.7.0

## 1.2.3

### Patch Changes

- 9d5ae8a: make `@envelop/core` a peer dependency.
- 0bdd63f: use caret version range for `@envelop/extended-validation`

## 1.2.2

### Patch Changes

- Updated dependencies [f272b28]
  - @envelop/core@1.6.2

## 1.2.1

### Patch Changes

- 07c39b5: Simplify code and add comments to the code.
- Updated dependencies [b1a0331]
- Updated dependencies [07c39b5]
  - @envelop/core@1.6.1
  - @envelop/extended-validation@1.3.1

## 1.2.0

### Minor Changes

- 090cae4: GraphQL v16 support

### Patch Changes

- Updated dependencies [090cae4]
  - @envelop/core@1.6.0
  - @envelop/extended-validation@1.3.0

## 1.1.0

### Minor Changes

- 04120de: add support for GraphQL.js 16

### Patch Changes

- a0b2da3: Fix handling of introspection queries and disallow authorization bypassing. Previously,
  it was possible to bypass authorization by adding `\_\_schema` to query
- Updated dependencies [a0b2da3]
- Updated dependencies [3458917]
- Updated dependencies [04120de]
  - @envelop/extended-validation@1.2.0
  - @envelop/core@1.5.0

## 1.0.10

### Patch Changes

- Updated dependencies [365a982]
  - @envelop/core@1.4.0

## 1.0.9

### Patch Changes

- 50f263f: Ignore introspection query
- Updated dependencies [d65e35d]
- Updated dependencies [26475c9]
  - @envelop/core@1.3.0

## 1.0.8

### Patch Changes

- Updated dependencies [eb0a4bd]
  - @envelop/core@1.2.0

## 1.0.7

### Patch Changes

- Updated dependencies [422a6c6]
  - @envelop/extended-validation@1.1.1

## 1.0.6

### Patch Changes

- Updated dependencies [7704fc3]
- Updated dependencies [7704fc3]
- Updated dependencies [7704fc3]
  - @envelop/core@1.1.0

## 1.0.5

### Patch Changes

- Updated dependencies [35c85a7]
  - @envelop/core@1.0.4

## 1.0.4

### Patch Changes

- ed3c528: handle union and interface fields

## 1.0.3

### Patch Changes

- Updated dependencies [452af8f]
  - @envelop/core@1.0.3

## 1.0.2

### Patch Changes

- Updated dependencies [94db02d]
- Updated dependencies [94db02d]
  - @envelop/core@1.0.2

## 1.0.1

### Patch Changes

- Updated dependencies [c24a8fd]
- Updated dependencies [7c897ae]
- Updated dependencies [f45c0bf]
- Updated dependencies [8021229]
- Updated dependencies [adca399]
  - @envelop/core@1.0.1
  - @envelop/extended-validation@1.1.0

## 1.0.0

### Major Changes

- 40bc444: v1 major release for envelop packages

### Patch Changes

- Updated dependencies [dbb241d]
- Updated dependencies [40bc444]
  - @envelop/core@1.0.0
  - @envelop/extended-validation@1.0.0

## 0.0.6

### Patch Changes

- Updated dependencies [bcbaccb]
  - @envelop/core@0.5.2

## 0.0.5

### Patch Changes

- Updated dependencies [932f6a8]
  - @envelop/core@0.5.1

## 0.0.4

### Patch Changes

- Updated dependencies [cca1e39]
- Updated dependencies [50dffaa]
- Updated dependencies [778c207]
  - @envelop/core@0.5.0

## 0.0.3

### Patch Changes

- 28ad742: Improve TypeScript types
- Updated dependencies [28ad742]
- Updated dependencies [d82e2d0]
- Updated dependencies [d82e2d0]
- Updated dependencies [28ad742]
- Updated dependencies [2113527]
- Updated dependencies [d82e2d0]
- Updated dependencies [28ad742]
  - @envelop/core@0.4.0
  - @envelop/extended-validation@0.2.2

## 0.0.2

### Patch Changes

- a99327a: New plugin: operation-field-permissions
- Updated dependencies [7fd2f7b]
  - @envelop/extended-validation@0.2.1
