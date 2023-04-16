import type { Endpoints } from "@octokit/types";
type pullsDetailReposResponse =
  Endpoints["GET /repos/{owner}/{repo}/pulls/{pull_number}/files"]["response"];

const mockFiles26274: pullsDetailReposResponse["data"] = [
  {
    sha: "3e2eb6cc60a711933439cf0e5e0512d18d26b65d",
    filename:
      "packages/react-devtools-shared/src/backend/views/TraceUpdates/canvas.js",
    status: "modified",
    additions: 17,
    deletions: 15,
    changes: 32,
    blob_url:
      "https://github.com/facebook/react/blob/850671322cadf4df3007896bb4c6684c3d404af2/packages%2Freact-devtools-shared%2Fsrc%2Fbackend%2Fviews%2FTraceUpdates%2Fcanvas.js",
    raw_url:
      "https://github.com/facebook/react/raw/850671322cadf4df3007896bb4c6684c3d404af2/packages%2Freact-devtools-shared%2Fsrc%2Fbackend%2Fviews%2FTraceUpdates%2Fcanvas.js",
    contents_url:
      "https://api.github.com/repos/facebook/react/contents/packages%2Freact-devtools-shared%2Fsrc%2Fbackend%2Fviews%2FTraceUpdates%2Fcanvas.js?ref=850671322cadf4df3007896bb4c6684c3d404af2",
    patch:
      "@@ -112,19 +112,21 @@ export function destroy(agent: Agent): void {\n }\n \n function initialize(): void {\n-  canvas = window.document.createElement('canvas');\n-  canvas.style.cssText = `\n-    xx-background-color: red;\n-    xx-opacity: 0.5;\n-    bottom: 0;\n-    left: 0;\n-    pointer-events: none;\n-    position: fixed;\n-    right: 0;\n-    top: 0;\n-    z-index: 1000000000;\n-  `;\n-\n-  const root = window.document.documentElement;\n-  root.insertBefore(canvas, root.firstChild);\n+  if (typeof window !== 'undefined') {\n+    canvas = window.document.createElement('canvas');\n+    canvas.style.cssText = `\n+      xx-background-color: red;\n+      xx-opacity: 0.5;\n+      bottom: 0;\n+      left: 0;\n+      pointer-events: none;\n+      position: fixed;\n+      right: 0;\n+      top: 0;\n+      z-index: 1000000000;\n+    `;\n+\n+    const root = window.document.documentElement;\n+    root.insertBefore(canvas, root.firstChild);\n+  }\n }",
  },
];
export default mockFiles26274;
