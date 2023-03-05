export default [
  {
    sha: "aff4fa6ce48bca766c1a48eeac453efb669ce2d9",
    filename: ".eslintrc.js",
    status: "modified",
    additions: 1,
    deletions: 0,
    changes: 1,
    blob_url:
      "https://github.com/facebook/react/blob/8aadd4fce92ceb42b2596f32363dc6b3e0c9cb9e/.eslintrc.js",
    raw_url:
      "https://github.com/facebook/react/raw/8aadd4fce92ceb42b2596f32363dc6b3e0c9cb9e/.eslintrc.js",
    contents_url:
      "https://api.github.com/repos/facebook/react/contents/.eslintrc.js?ref=8aadd4fce92ceb42b2596f32363dc6b3e0c9cb9e",
    patch:
      "@@ -325,6 +325,7 @@ module.exports = {\n         'packages/react-native-renderer/**/*.js',\n         'packages/eslint-plugin-react-hooks/**/*.js',\n         'packages/jest-react/**/*.js',\n+        'packages/internal-test-utils/**/*.js',\n         'packages/**/__tests__/*.js',\n         'packages/**/npm/*.js',\n       ],",
  },
  {
    sha: "db47ff910ca86d2a70f1f4419587c839458a42df",
    filename: "packages/internal-test-utils/ReactInternalTestUtils.js",
    status: "added",
    additions: 182,
    deletions: 0,
    changes: 182,
    blob_url:
      "https://github.com/facebook/react/blob/8aadd4fce92ceb42b2596f32363dc6b3e0c9cb9e/packages%2Finternal-test-utils%2FReactInternalTestUtils.js",
    raw_url:
      "https://github.com/facebook/react/raw/8aadd4fce92ceb42b2596f32363dc6b3e0c9cb9e/packages%2Finternal-test-utils%2FReactInternalTestUtils.js",
    contents_url:
      "https://api.github.com/repos/facebook/react/contents/packages%2Finternal-test-utils%2FReactInternalTestUtils.js?ref=8aadd4fce92ceb42b2596f32363dc6b3e0c9cb9e",
    patch:
      "@@ -0,0 +1,182 @@\n+/**\n+ * Copyright (c) Meta Platforms, Inc. and affiliates.\n+ *\n+ * This source code is licensed under the MIT license found in the\n+ * LICENSE file in the root directory of this source tree.\n+ */\n+\n+// TODO: Move `internalAct` and other test helpers to this package, too\n+\n+import * as SchedulerMock from 'scheduler/unstable_mock';\n+import {diff} from 'jest-diff';\n+import {equals} from '@jest/expect-utils';\n+\n+function assertYieldsWereCleared(Scheduler) {\n+  const actualYields = Scheduler.unstable_clearYields();\n+  if (actualYields.length !== 0) {\n+    const error = Error(\n+      'The event log is not empty. Call assertLog(...) first.',\n+    );\n+    Error.captureStackTrace(error, assertYieldsWereCleared);\n+    throw error;\n+  }\n+}\n+\n+export async function waitFor(expectedLog) {\n+  assertYieldsWereCleared(SchedulerMock);\n+\n+  // Create the error object before doing any async work, to get a better\n+  // stack trace.\n+  const error = new Error();\n+  Error.captureStackTrace(error, waitFor);\n+\n+  const actualLog = [];\n+  do {\n+    // Wait until end of current task/microtask.\n+    await null;\n+    if (SchedulerMock.unstable_hasPendingWork()) {\n+      SchedulerMock.unstable_flushNumberOfYields(\n+        expectedLog.length - actualLog.length,\n+      );\n+      actualLog.push(...SchedulerMock.unstable_clearYields());\n+      if (expectedLog.length > actualLog.length) {\n+        // Continue flushing until we've logged the expected number of items.\n+      } else {\n+        // Once we've reached the expected sequence, wait one more microtask to\n+        // flush any remaining synchronous work.\n+        await null;\n+        actualLog.push(...SchedulerMock.unstable_clearYields());\n+        break;\n+      }\n+    } else {\n+      // There's no pending work, even after a microtask.\n+      break;\n+    }\n+  } while (true);\n+\n+  if (equals(actualLog, expectedLog)) {\n+    return;\n+  }\n+\n+  error.message = `\n+Expected sequence of events did not occur.\n+\n+${diff(expectedLog, actualLog)}\n+`;\n+  throw error;\n+}\n+\n+export async function waitForAll(expectedLog) {\n+  assertYieldsWereCleared(SchedulerMock);\n+\n+  // Create the error object before doing any async work, to get a better\n+  // stack trace.\n+  const error = new Error();\n+  Error.captureStackTrace(error, waitFor);\n+\n+  do {\n+    // Wait until end of current task/microtask.\n+    await null;\n+    if (!SchedulerMock.unstable_hasPendingWork()) {\n+      // There's no pending work, even after a microtask. Stop flushing.\n+      break;\n+    }\n+    SchedulerMock.unstable_flushAllWithoutAsserting();\n+  } while (true);\n+\n+  const actualLog = SchedulerMock.unstable_clearYields();\n+  if (equals(actualLog, expectedLog)) {\n+    return;\n+  }\n+\n+  error.message = `\n+Expected sequence of events did not occur.\n+\n+${diff(expectedLog, actualLog)}\n+`;\n+  throw error;\n+}\n+\n+export async function waitForThrow(expectedError: mixed) {\n+  assertYieldsWereCleared(SchedulerMock);\n+\n+  // Create the error object before doing any async work, to get a better\n+  // stack trace.\n+  const error = new Error();\n+  Error.captureStackTrace(error, waitFor);\n+\n+  do {\n+    // Wait until end of current task/microtask.\n+    await null;\n+    if (!SchedulerMock.unstable_hasPendingWork()) {\n+      // There's no pending work, even after a microtask. Stop flushing.\n+      error.message = 'Expected something to throw, but nothing did.';\n+      throw error;\n+    }\n+    try {\n+      SchedulerMock.unstable_flushAllWithoutAsserting();\n+    } catch (x) {\n+      if (equals(x, expectedError)) {\n+        return;\n+      }\n+      if (typeof x === 'object' && x !== null && x.message === expectedError) {\n+        return;\n+      }\n+      error.message = `\n+Expected error was not thrown.\n+\n+${diff(expectedError, x)}\n+`;\n+      throw error;\n+    }\n+  } while (true);\n+}\n+\n+// TODO: This name is a bit misleading currently because it will stop as soon as\n+// React yields for any reason, not just for a paint. I've left it this way for\n+// now because that's how untable_flushUntilNextPaint already worked, but maybe\n+// we should split these use cases into separate APIs.\n+export async function waitForPaint(expectedLog) {\n+  assertYieldsWereCleared(SchedulerMock);\n+\n+  // Create the error object before doing any async work, to get a better\n+  // stack trace.\n+  const error = new Error();\n+  Error.captureStackTrace(error, waitFor);\n+\n+  // Wait until end of current task/microtask.\n+  await null;\n+  if (SchedulerMock.unstable_hasPendingWork()) {\n+    // Flush until React yields.\n+    SchedulerMock.unstable_flushUntilNextPaint();\n+    // Wait one more microtask to flush any remaining synchronous work.\n+    await null;\n+  }\n+\n+  const actualLog = SchedulerMock.unstable_clearYields();\n+  if (equals(actualLog, expectedLog)) {\n+    return;\n+  }\n+\n+  error.message = `\n+Expected sequence of events did not occur.\n+\n+${diff(expectedLog, actualLog)}\n+`;\n+  throw error;\n+}\n+\n+export function assertLog(expectedLog) {\n+  const actualLog = SchedulerMock.unstable_clearYields();\n+  if (equals(actualLog, expectedLog)) {\n+    return;\n+  }\n+\n+  const error = new Error(`\n+Expected sequence of events did not occur.\n+\n+${diff(expectedLog, actualLog)}\n+`);\n+  Error.captureStackTrace(error, assertLog);\n+  throw error;\n+}",
  },
  {
    sha: "7b6e30be3728fda02d7329428b00aeb33fdfa040",
    filename: "packages/internal-test-utils/index.js",
    status: "added",
    additions: 1,
    deletions: 0,
    changes: 1,
    blob_url:
      "https://github.com/facebook/react/blob/8aadd4fce92ceb42b2596f32363dc6b3e0c9cb9e/packages%2Finternal-test-utils%2Findex.js",
    raw_url:
      "https://github.com/facebook/react/raw/8aadd4fce92ceb42b2596f32363dc6b3e0c9cb9e/packages%2Finternal-test-utils%2Findex.js",
    contents_url:
      "https://api.github.com/repos/facebook/react/contents/packages%2Finternal-test-utils%2Findex.js?ref=8aadd4fce92ceb42b2596f32363dc6b3e0c9cb9e",
    patch: "@@ -0,0 +1 @@\n+export * from './ReactInternalTestUtils';",
  },
  {
    sha: "4748827d8003a3f46a17338e6c257382228e26cd",
    filename: "packages/internal-test-utils/package.json",
    status: "added",
    additions: 5,
    deletions: 0,
    changes: 5,
    blob_url:
      "https://github.com/facebook/react/blob/8aadd4fce92ceb42b2596f32363dc6b3e0c9cb9e/packages%2Finternal-test-utils%2Fpackage.json",
    raw_url:
      "https://github.com/facebook/react/raw/8aadd4fce92ceb42b2596f32363dc6b3e0c9cb9e/packages%2Finternal-test-utils%2Fpackage.json",
    contents_url:
      "https://api.github.com/repos/facebook/react/contents/packages%2Finternal-test-utils%2Fpackage.json?ref=8aadd4fce92ceb42b2596f32363dc6b3e0c9cb9e",
    patch:
      '@@ -0,0 +1,5 @@\n+{\n+  "private": true,\n+  "name": "internal-test-utils",\n+  "version": "0.0.0"\n+}',
  },
  {
    sha: "a46dc8d2ac1bc0ab67ccec9e060636a97e6d431f",
    filename: "packages/jest-react/src/JestReact.js",
    status: "modified",
    additions: 3,
    deletions: 1,
    changes: 4,
    blob_url:
      "https://github.com/facebook/react/blob/8aadd4fce92ceb42b2596f32363dc6b3e0c9cb9e/packages%2Fjest-react%2Fsrc%2FJestReact.js",
    raw_url:
      "https://github.com/facebook/react/raw/8aadd4fce92ceb42b2596f32363dc6b3e0c9cb9e/packages%2Fjest-react%2Fsrc%2FJestReact.js",
    contents_url:
      "https://api.github.com/repos/facebook/react/contents/packages%2Fjest-react%2Fsrc%2FJestReact.js?ref=8aadd4fce92ceb42b2596f32363dc6b3e0c9cb9e",
    patch:
      "@@ -31,10 +31,12 @@ function assertYieldsWereCleared(root) {\n   const Scheduler = root._Scheduler;\n   const actualYields = Scheduler.unstable_clearYields();\n   if (actualYields.length !== 0) {\n-    throw new Error(\n+    const error = Error(\n       'Log of yielded values is not empty. ' +\n         'Call expect(ReactTestRenderer).unstable_toHaveYielded(...) first.',\n     );\n+    Error.captureStackTrace(error, assertYieldsWereCleared);\n+    throw error;\n   }\n }\n ",
  },
  {
    sha: "31326a338e84008d4643784897b0dc79b0602278",
    filename:
      "packages/react-reconciler/src/__tests__/ReactSuspenseWithNoopRenderer-test.js",
    status: "modified",
    additions: 13,
    deletions: 7,
    changes: 20,
    blob_url:
      "https://github.com/facebook/react/blob/8aadd4fce92ceb42b2596f32363dc6b3e0c9cb9e/packages%2Freact-reconciler%2Fsrc%2F__tests__%2FReactSuspenseWithNoopRenderer-test.js",
    raw_url:
      "https://github.com/facebook/react/raw/8aadd4fce92ceb42b2596f32363dc6b3e0c9cb9e/packages%2Freact-reconciler%2Fsrc%2F__tests__%2FReactSuspenseWithNoopRenderer-test.js",
    contents_url:
      "https://api.github.com/repos/facebook/react/contents/packages%2Freact-reconciler%2Fsrc%2F__tests__%2FReactSuspenseWithNoopRenderer-test.js?ref=8aadd4fce92ceb42b2596f32363dc6b3e0c9cb9e",
    patch:
      "@@ -3,6 +3,10 @@ let Fragment;\n let ReactNoop;\n let Scheduler;\n let act;\n+let waitFor;\n+let waitForAll;\n+let assertLog;\n+let waitForPaint;\n let Suspense;\n let getCacheForType;\n \n@@ -19,6 +23,11 @@ describe('ReactSuspenseWithNoopRenderer', () => {\n     Scheduler = require('scheduler');\n     act = require('jest-react').act;\n     Suspense = React.Suspense;\n+    const InternalTestUtils = require('internal-test-utils');\n+    waitFor = InternalTestUtils.waitFor;\n+    waitForAll = InternalTestUtils.waitForAll;\n+    waitForPaint = InternalTestUtils.waitForPaint;\n+    assertLog = InternalTestUtils.assertLog;\n \n     getCacheForType = React.unstable_getCacheForType;\n \n@@ -208,7 +217,7 @@ describe('ReactSuspenseWithNoopRenderer', () => {\n     React.startTransition(() => {\n       ReactNoop.render(<Foo />);\n     });\n-    expect(Scheduler).toFlushAndYieldThrough([\n+    await waitFor([\n       'Foo',\n       'Bar',\n       // A suspends\n@@ -226,7 +235,7 @@ describe('ReactSuspenseWithNoopRenderer', () => {\n \n     // Even though the promise has resolved, we should now flush\n     // and commit the in progress render instead of restarting.\n-    expect(Scheduler).toFlushAndYield(['D']);\n+    await waitForPaint(['D']);\n     expect(ReactNoop).toMatchRenderedOutput(\n       <>\n         <span prop=\"Loading...\" />\n@@ -235,11 +244,8 @@ describe('ReactSuspenseWithNoopRenderer', () => {\n       </>,\n     );\n \n-    // Await one micro task to attach the retry listeners.\n-    await null;\n-\n     // Next, we'll flush the complete content.\n-    expect(Scheduler).toFlushAndYield(['Bar', 'A', 'B']);\n+    await waitForAll(['Bar', 'A', 'B']);\n \n     expect(ReactNoop).toMatchRenderedOutput(\n       <>\n@@ -544,7 +550,7 @@ describe('ReactSuspenseWithNoopRenderer', () => {\n     ReactNoop.flushSync(() => {\n       ReactNoop.render(<App highPri=\"B\" lowPri=\"1\" />);\n     });\n-    expect(Scheduler).toHaveYielded(['B', '1']);\n+    assertLog(['B', '1']);\n     expect(ReactNoop).toMatchRenderedOutput(\n       <>\n         <span prop=\"B\" />",
  },
  {
    sha: "9b8d328a509e72ff993cafa92bddf884ff98883e",
    filename: "scripts/jest/config.build.js",
    status: "modified",
    additions: 6,
    deletions: 0,
    changes: 6,
    blob_url:
      "https://github.com/facebook/react/blob/8aadd4fce92ceb42b2596f32363dc6b3e0c9cb9e/scripts%2Fjest%2Fconfig.build.js",
    raw_url:
      "https://github.com/facebook/react/raw/8aadd4fce92ceb42b2596f32363dc6b3e0c9cb9e/scripts%2Fjest%2Fconfig.build.js",
    contents_url:
      "https://api.github.com/repos/facebook/react/contents/scripts%2Fjest%2Fconfig.build.js?ref=8aadd4fce92ceb42b2596f32363dc6b3e0c9cb9e",
    patch:
      "@@ -12,6 +12,12 @@ const NODE_MODULES_DIR =\n // Find all folders in packages/* with package.json\n const packagesRoot = join(__dirname, '..', '..', 'packages');\n const packages = readdirSync(packagesRoot).filter(dir => {\n+  if (dir === 'internal-test-utils') {\n+    // This is an internal package used only for testing. It's OK to read\n+    // from source.\n+    // TODO: Maybe let's have some convention for this?\n+    return false;\n+  }\n   if (dir.charAt(0) === '.') {\n     return false;\n   }",
  },
  {
    sha: "645d8a58cc59f68fbf449ef4e9a1740adb7f6087",
    filename: "scripts/jest/matchers/schedulerTestMatchers.js",
    status: "modified",
    additions: 4,
    deletions: 1,
    changes: 5,
    blob_url:
      "https://github.com/facebook/react/blob/8aadd4fce92ceb42b2596f32363dc6b3e0c9cb9e/scripts%2Fjest%2Fmatchers%2FschedulerTestMatchers.js",
    raw_url:
      "https://github.com/facebook/react/raw/8aadd4fce92ceb42b2596f32363dc6b3e0c9cb9e/scripts%2Fjest%2Fmatchers%2FschedulerTestMatchers.js",
    contents_url:
      "https://api.github.com/repos/facebook/react/contents/scripts%2Fjest%2Fmatchers%2FschedulerTestMatchers.js?ref=8aadd4fce92ceb42b2596f32363dc6b3e0c9cb9e",
    patch:
      "@@ -18,11 +18,14 @@ function captureAssertion(fn) {\n \n function assertYieldsWereCleared(Scheduler) {\n   const actualYields = Scheduler.unstable_clearYields();\n+\n   if (actualYields.length !== 0) {\n-    throw new Error(\n+    const error = Error(\n       'Log of yielded values is not empty. ' +\n         'Call expect(Scheduler).toHaveYielded(...) first.'\n     );\n+    Error.captureStackTrace(error, assertYieldsWereCleared);\n+    throw error;\n   }\n }\n ",
  },
];
