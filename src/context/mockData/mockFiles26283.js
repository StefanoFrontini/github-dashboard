export default [
  {
    sha: "8b78bdc8296c6543dc33a354ae39ac4fa237f0ce",
    filename: "packages/react-native-renderer/src/ReactFabric.js",
    status: "modified",
    additions: 1,
    deletions: 15,
    changes: 16,
    blob_url:
      "https://github.com/facebook/react/blob/90fff0651139c055696b5770b7bbc42ce633117b/packages%2Freact-native-renderer%2Fsrc%2FReactFabric.js",
    raw_url:
      "https://github.com/facebook/react/raw/90fff0651139c055696b5770b7bbc42ce633117b/packages%2Freact-native-renderer%2Fsrc%2FReactFabric.js",
    contents_url:
      "https://api.github.com/repos/facebook/react/contents/packages%2Freact-native-renderer%2Fsrc%2FReactFabric.js?ref=90fff0651139c055696b5770b7bbc42ce633117b",
    patch:
      "@@ -90,15 +90,6 @@ function findHostInstance_DEPRECATED<TElementType: ElementType>(\n     hostInstance = findHostInstance(componentOrHandle);\n   }\n \n-  if (hostInstance == null) {\n-    return hostInstance;\n-  }\n-  if ((hostInstance: any).canonical) {\n-    // Fabric\n-    return (hostInstance: any).canonical;\n-  }\n-  // $FlowFixMe[incompatible-return]\n-  // $FlowFixMe[incompatible-exact]\n   return hostInstance;\n }\n \n@@ -146,12 +137,7 @@ function findNodeHandle(componentOrHandle: any): ?number {\n   if (hostInstance == null) {\n     return hostInstance;\n   }\n-  // TODO: the code is right but the types here are wrong.\n-  // https://github.com/facebook/react/pull/12863\n-  if ((hostInstance: any).canonical) {\n-    // Fabric\n-    return (hostInstance: any).canonical._nativeTag;\n-  }\n+\n   return hostInstance._nativeTag;\n }\n ",
  },
  {
    sha: "30982a7ad0ee0ae0af61375d6d40596bb2a9a258",
    filename: "packages/react-native-renderer/src/ReactFabricHostConfig.js",
    status: "modified",
    additions: 12,
    deletions: 7,
    changes: 19,
    blob_url:
      "https://github.com/facebook/react/blob/90fff0651139c055696b5770b7bbc42ce633117b/packages%2Freact-native-renderer%2Fsrc%2FReactFabricHostConfig.js",
    raw_url:
      "https://github.com/facebook/react/raw/90fff0651139c055696b5770b7bbc42ce633117b/packages%2Freact-native-renderer%2Fsrc%2FReactFabricHostConfig.js",
    contents_url:
      "https://api.github.com/repos/facebook/react/contents/packages%2Freact-native-renderer%2Fsrc%2FReactFabricHostConfig.js?ref=90fff0651139c055696b5770b7bbc42ce633117b",
    patch:
      "@@ -110,7 +110,7 @@ if (registerEventHandler) {\n /**\n  * This is used for refs on host components.\n  */\n-class ReactFabricHostComponent {\n+class ReactFabricHostComponent implements NativeMethods {\n   _nativeTag: number;\n   viewConfig: ViewConfig;\n   currentProps: Props;\n@@ -215,10 +215,6 @@ class ReactFabricHostComponent {\n   }\n }\n \n-// $FlowFixMe[class-object-subtyping] found when upgrading Flow\n-// $FlowFixMe[method-unbinding] found when upgrading Flow\n-(ReactFabricHostComponent.prototype: $ReadOnly<{...NativeMethods, ...}>);\n-\n export * from 'react-reconciler/src/ReactFiberHostConfigWithNoMutation';\n export * from 'react-reconciler/src/ReactFiberHostConfigWithNoHydration';\n export * from 'react-reconciler/src/ReactFiberHostConfigWithNoScopes';\n@@ -342,8 +338,17 @@ export function getChildHostContext(\n   }\n }\n \n-export function getPublicInstance(instance: Instance): * {\n-  return instance.canonical;\n+export function getPublicInstance(instance: Instance): null | PublicInstance {\n+  if (instance.canonical) {\n+    return instance.canonical;\n+  }\n+\n+  // For compatibility with Paper\n+  if (instance._nativeTag != null) {\n+    return instance;\n+  }\n+\n+  return null;\n }\n \n export function prepareForCommit(containerInfo: Container): null | Object {",
  },
  {
    sha: "daf9f6774751aeffa8a74dd518330f7aa0ccebe7",
    filename:
      "packages/react-native-renderer/src/ReactNativeFiberHostComponent.js",
    status: "modified",
    additions: 1,
    deletions: 5,
    changes: 6,
    blob_url:
      "https://github.com/facebook/react/blob/90fff0651139c055696b5770b7bbc42ce633117b/packages%2Freact-native-renderer%2Fsrc%2FReactNativeFiberHostComponent.js",
    raw_url:
      "https://github.com/facebook/react/raw/90fff0651139c055696b5770b7bbc42ce633117b/packages%2Freact-native-renderer%2Fsrc%2FReactNativeFiberHostComponent.js",
    contents_url:
      "https://api.github.com/repos/facebook/react/contents/packages%2Freact-native-renderer%2Fsrc%2FReactNativeFiberHostComponent.js?ref=90fff0651139c055696b5770b7bbc42ce633117b",
    patch:
      "@@ -30,7 +30,7 @@ import {\n   warnForStyleProps,\n } from './NativeMethodsMixinUtils';\n \n-class ReactNativeFiberHostComponent {\n+class ReactNativeFiberHostComponent implements NativeMethods {\n   _children: Array<Instance | number>;\n   _nativeTag: number;\n   _internalFiberInstanceHandleDEV: Object;\n@@ -127,8 +127,4 @@ class ReactNativeFiberHostComponent {\n   }\n }\n \n-// $FlowFixMe[class-object-subtyping] found when upgrading Flow\n-// $FlowFixMe[method-unbinding] found when upgrading Flow\n-(ReactNativeFiberHostComponent.prototype: $ReadOnly<{...NativeMethods, ...}>);\n-\n export default ReactNativeFiberHostComponent;",
  },
  {
    sha: "a3b58315205f379ffa3773915643609f5c544528",
    filename: "packages/react-native-renderer/src/ReactNativeHostConfig.js",
    status: "modified",
    additions: 5,
    deletions: 0,
    changes: 5,
    blob_url:
      "https://github.com/facebook/react/blob/90fff0651139c055696b5770b7bbc42ce633117b/packages%2Freact-native-renderer%2Fsrc%2FReactNativeHostConfig.js",
    raw_url:
      "https://github.com/facebook/react/raw/90fff0651139c055696b5770b7bbc42ce633117b/packages%2Freact-native-renderer%2Fsrc%2FReactNativeHostConfig.js",
    contents_url:
      "https://api.github.com/repos/facebook/react/contents/packages%2Freact-native-renderer%2Fsrc%2FReactNativeHostConfig.js?ref=90fff0651139c055696b5770b7bbc42ce633117b",
    patch:
      "@@ -217,6 +217,11 @@ export function getChildHostContext(\n }\n \n export function getPublicInstance(instance: Instance): * {\n+  // $FlowExpectedError[prop-missing] For compatibility with Fabric\n+  if (instance.canonical) {\n+    return instance.canonical;\n+  }\n+\n   return instance;\n }\n ",
  },
  {
    sha: "6b75be5d07d97e3bd887038879478d05e521397f",
    filename: "packages/react-native-renderer/src/ReactNativeRenderer.js",
    status: "modified",
    additions: 1,
    deletions: 13,
    changes: 14,
    blob_url:
      "https://github.com/facebook/react/blob/90fff0651139c055696b5770b7bbc42ce633117b/packages%2Freact-native-renderer%2Fsrc%2FReactNativeRenderer.js",
    raw_url:
      "https://github.com/facebook/react/raw/90fff0651139c055696b5770b7bbc42ce633117b/packages%2Freact-native-renderer%2Fsrc%2FReactNativeRenderer.js",
    contents_url:
      "https://api.github.com/repos/facebook/react/contents/packages%2Freact-native-renderer%2Fsrc%2FReactNativeRenderer.js?ref=90fff0651139c055696b5770b7bbc42ce633117b",
    patch:
      "@@ -89,15 +89,6 @@ function findHostInstance_DEPRECATED(\n     hostInstance = findHostInstance(componentOrHandle);\n   }\n \n-  if (hostInstance == null) {\n-    return hostInstance;\n-  }\n-  if ((hostInstance: any).canonical) {\n-    // Fabric\n-    return (hostInstance: any).canonical;\n-  }\n-  // $FlowFixMe[incompatible-return]\n-  // $FlowFixMe[incompatible-exact]\n   return hostInstance;\n }\n \n@@ -145,10 +136,7 @@ function findNodeHandle(componentOrHandle: any): ?number {\n   if (hostInstance == null) {\n     return hostInstance;\n   }\n-  if ((hostInstance: any).canonical) {\n-    // Fabric\n-    return (hostInstance: any).canonical._nativeTag;\n-  }\n+\n   return hostInstance._nativeTag;\n }\n ",
  },
  {
    sha: "a6dc47b06615508d28f42665cb6c41c21ac9a05f",
    filename: "packages/react-native-renderer/src/ReactNativeTypes.js",
    status: "modified",
    additions: 8,
    deletions: 8,
    changes: 16,
    blob_url:
      "https://github.com/facebook/react/blob/90fff0651139c055696b5770b7bbc42ce633117b/packages%2Freact-native-renderer%2Fsrc%2FReactNativeTypes.js",
    raw_url:
      "https://github.com/facebook/react/raw/90fff0651139c055696b5770b7bbc42ce633117b/packages%2Freact-native-renderer%2Fsrc%2FReactNativeTypes.js",
    contents_url:
      "https://api.github.com/repos/facebook/react/contents/packages%2Freact-native-renderer%2Fsrc%2FReactNativeTypes.js?ref=90fff0651139c055696b5770b7bbc42ce633117b",
    patch:
      "@@ -95,18 +95,18 @@ export type PartialViewConfig = $ReadOnly<{\n   validAttributes?: PartialAttributeConfiguration,\n }>;\n \n-export type NativeMethods = $ReadOnly<{\n-  blur(): void,\n-  focus(): void,\n-  measure(callback: MeasureOnSuccessCallback): void,\n-  measureInWindow(callback: MeasureInWindowOnSuccessCallback): void,\n+export interface NativeMethods {\n+  blur(): void;\n+  focus(): void;\n+  measure(callback: MeasureOnSuccessCallback): void;\n+  measureInWindow(callback: MeasureInWindowOnSuccessCallback): void;\n   measureLayout(\n     relativeToNativeNode: number | ElementRef<HostComponent<mixed>>,\n     onSuccess: MeasureLayoutOnSuccessCallback,\n     onFail?: () => void,\n-  ): void,\n-  setNativeProps(nativeProps: {...}): void,\n-}>;\n+  ): void;\n+  setNativeProps(nativeProps: {...}): void;\n+}\n \n export type HostComponent<T> = AbstractComponent<T, $ReadOnly<NativeMethods>>;\n ",
  },
  {
    sha: "4842de3bc1ec4fd039d247bd9094eb1edf95bc5f",
    filename: "packages/react-reconciler/src/ReactFiberReconciler.js",
    status: "modified",
    additions: 3,
    deletions: 3,
    changes: 6,
    blob_url:
      "https://github.com/facebook/react/blob/90fff0651139c055696b5770b7bbc42ce633117b/packages%2Freact-reconciler%2Fsrc%2FReactFiberReconciler.js",
    raw_url:
      "https://github.com/facebook/react/raw/90fff0651139c055696b5770b7bbc42ce633117b/packages%2Freact-reconciler%2Fsrc%2FReactFiberReconciler.js",
    contents_url:
      "https://api.github.com/repos/facebook/react/contents/packages%2Freact-reconciler%2Fsrc%2FReactFiberReconciler.js?ref=90fff0651139c055696b5770b7bbc42ce633117b",
    patch:
      "@@ -175,7 +175,7 @@ function findHostInstance(component: Object): PublicInstance | null {\n   if (hostFiber === null) {\n     return null;\n   }\n-  return hostFiber.stateNode;\n+  return getPublicInstance(hostFiber.stateNode);\n }\n \n function findHostInstanceWithWarning(\n@@ -240,7 +240,7 @@ function findHostInstanceWithWarning(\n         }\n       }\n     }\n-    return hostFiber.stateNode;\n+    return getPublicInstance(hostFiber.stateNode);\n   }\n   return findHostInstance(component);\n }\n@@ -524,7 +524,7 @@ export function findHostInstanceWithNoPortals(\n   if (hostFiber === null) {\n     return null;\n   }\n-  return hostFiber.stateNode;\n+  return getPublicInstance(hostFiber.stateNode);\n }\n \n let shouldErrorImpl: Fiber => ?boolean = fiber => null;",
  },
];
