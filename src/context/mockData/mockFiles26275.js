export default [
  {
    sha: "fd6e51a0872bcf78f1dcd5d18502dc0b7f4739cc",
    filename: "packages/react-reconciler/src/ReactFiberWorkLoop.js",
    status: "modified",
    additions: 28,
    deletions: 13,
    changes: 41,
    blob_url:
      "https://github.com/facebook/react/blob/d20f72cc728d24320cd7a18c0c4834478f9493db/packages%2Freact-reconciler%2Fsrc%2FReactFiberWorkLoop.js",
    raw_url:
      "https://github.com/facebook/react/raw/d20f72cc728d24320cd7a18c0c4834478f9493db/packages%2Freact-reconciler%2Fsrc%2FReactFiberWorkLoop.js",
    contents_url:
      "https://api.github.com/repos/facebook/react/contents/packages%2Freact-reconciler%2Fsrc%2FReactFiberWorkLoop.js?ref=d20f72cc728d24320cd7a18c0c4834478f9493db",
    patch:
      "@@ -1846,19 +1846,34 @@ function handleThrow(root: FiberRoot, thrownValue: any): void {\n \n   if (enableSchedulingProfiler) {\n     markComponentRenderStopped();\n-    if (workInProgressSuspendedReason !== SuspendedOnError) {\n-      const wakeable: Wakeable = (thrownValue: any);\n-      markComponentSuspended(\n-        erroredWork,\n-        wakeable,\n-        workInProgressRootRenderLanes,\n-      );\n-    } else {\n-      markComponentErrored(\n-        erroredWork,\n-        thrownValue,\n-        workInProgressRootRenderLanes,\n-      );\n+    switch (workInProgressSuspendedReason) {\n+      case SuspendedOnError: {\n+        markComponentErrored(\n+          erroredWork,\n+          thrownValue,\n+          workInProgressRootRenderLanes,\n+        );\n+        break;\n+      }\n+      case SuspendedOnData:\n+      case SuspendedOnImmediate:\n+      case SuspendedOnDeprecatedThrowPromise:\n+      case SuspendedAndReadyToUnwind: {\n+        const wakeable: Wakeable = (thrownValue: any);\n+        markComponentSuspended(\n+          erroredWork,\n+          wakeable,\n+          workInProgressRootRenderLanes,\n+        );\n+        break;\n+      }\n+      case SuspendedOnHydration: {\n+        // This is conceptually like a suspend, but it's not associated with\n+        // a particular wakeable. DevTools doesn't seem to care about this case,\n+        // currently. It's similar to if the component were interrupted, which\n+        // we don't mark with a special function.\n+        break;\n+      }\n     }\n   }\n }",
  },
];
