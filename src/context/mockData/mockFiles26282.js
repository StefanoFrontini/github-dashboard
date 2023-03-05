export default [
  {
    sha: "b4a4694045d828782d5cb5d1a650a75954dff86c",
    filename: "packages/react-native-renderer/src/ReactFabricEventEmitter.js",
    status: "modified",
    additions: 2,
    deletions: 2,
    changes: 4,
    blob_url:
      "https://github.com/facebook/react/blob/abab75d3e01482843b527a11a0cdfdddb12ad791/packages%2Freact-native-renderer%2Fsrc%2FReactFabricEventEmitter.js",
    raw_url:
      "https://github.com/facebook/react/raw/abab75d3e01482843b527a11a0cdfdddb12ad791/packages%2Freact-native-renderer%2Fsrc%2FReactFabricEventEmitter.js",
    contents_url:
      "https://api.github.com/repos/facebook/react/contents/packages%2Freact-native-renderer%2Fsrc%2FReactFabricEventEmitter.js?ref=abab75d3e01482843b527a11a0cdfdddb12ad791",
    patch:
      "@@ -25,12 +25,12 @@ import {\n import {batchedUpdates} from './legacy-events/ReactGenericBatching';\n import accumulateInto from './legacy-events/accumulateInto';\n \n-import getListeners from './ReactNativeGetListeners';\n+import getListener from './ReactNativeGetListener';\n import {runEventsInBatch} from './legacy-events/EventBatching';\n \n import {RawEventEmitter} from 'react-native/Libraries/ReactPrivate/ReactNativePrivateInterface';\n \n-export {getListeners, registrationNameModules as registrationNames};\n+export {getListener, registrationNameModules as registrationNames};\n \n /**\n  * Allows registered plugins an opportunity to extract events from top-level",
  },
  {
    sha: "f80d57623b7f7d1c0290db92879207b920df214e",
    filename: "packages/react-native-renderer/src/ReactFabricHostConfig.js",
    status: "modified",
    additions: 0,
    deletions: 122,
    changes: 122,
    blob_url:
      "https://github.com/facebook/react/blob/abab75d3e01482843b527a11a0cdfdddb12ad791/packages%2Freact-native-renderer%2Fsrc%2FReactFabricHostConfig.js",
    raw_url:
      "https://github.com/facebook/react/raw/abab75d3e01482843b527a11a0cdfdddb12ad791/packages%2Freact-native-renderer%2Fsrc%2FReactFabricHostConfig.js",
    contents_url:
      "https://api.github.com/repos/facebook/react/contents/packages%2Freact-native-renderer%2Fsrc%2FReactFabricHostConfig.js?ref=abab75d3e01482843b527a11a0cdfdddb12ad791",
    patch:
      "@@ -99,28 +99,6 @@ export type RendererInspectionConfig = $ReadOnly<{\n   ) => void,\n }>;\n \n-// TODO?: find a better place for this type to live\n-export type EventListenerOptions = $ReadOnly<{\n-  capture?: boolean,\n-  once?: boolean,\n-  passive?: boolean,\n-  signal: mixed, // not yet implemented\n-}>;\n-export type EventListenerRemoveOptions = $ReadOnly<{\n-  capture?: boolean,\n-}>;\n-\n-// TODO?: this will be changed in the future to be w3c-compatible and allow \"EventListener\" objects as well as functions.\n-export type EventListener = Function;\n-\n-type InternalEventListeners = {\n-  [string]: {\n-    listener: EventListener,\n-    options: EventListenerOptions,\n-    invalidated: boolean,\n-  }[],\n-};\n-\n // TODO: Remove this conditional once all changes have propagated.\n if (registerEventHandler) {\n   /**\n@@ -137,7 +115,6 @@ class ReactFabricHostComponent {\n   viewConfig: ViewConfig;\n   currentProps: Props;\n   _internalInstanceHandle: Object;\n-  _eventListeners: ?InternalEventListeners;\n \n   constructor(\n     tag: number,\n@@ -236,105 +213,6 @@ class ReactFabricHostComponent {\n       setNativeProps(stateNode.node, updatePayload);\n     }\n   }\n-\n-  // This API (addEventListener, removeEventListener) attempts to adhere to the\n-  // w3 Level2 Events spec as much as possible, treating HostComponent as a DOM node.\n-  //\n-  // Unless otherwise noted, these methods should \"just work\" and adhere to the W3 specs.\n-  // If they deviate in a way that is not explicitly noted here, you've found a bug!\n-  //\n-  // See:\n-  // * https://www.w3.org/TR/DOM-Level-2-Events/events.html\n-  // * https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener\n-  // * https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/removeEventListener\n-  //\n-  // And notably, not implemented (yet?):\n-  // * https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/dispatchEvent\n-  //\n-  //\n-  // Deviations from spec/TODOs:\n-  // (1) listener must currently be a function, we do not support EventListener objects yet.\n-  // (2) we do not support the `signal` option / AbortSignal yet\n-  addEventListener_unstable(\n-    eventType: string,\n-    listener: EventListener,\n-    options: EventListenerOptions | boolean,\n-    // $FlowFixMe[missing-local-annot]\n-  ) {\n-    if (typeof eventType !== 'string') {\n-      throw new Error('addEventListener_unstable eventType must be a string');\n-    }\n-    if (typeof listener !== 'function') {\n-      throw new Error('addEventListener_unstable listener must be a function');\n-    }\n-\n-    // The third argument is either boolean indicating \"captures\" or an object.\n-    const optionsObj =\n-      typeof options === 'object' && options !== null ? options : {};\n-    const capture =\n-      (typeof options === 'boolean' ? options : optionsObj.capture) || false;\n-    const once = optionsObj.once || false;\n-    const passive = optionsObj.passive || false;\n-    const signal = null; // TODO: implement signal/AbortSignal\n-\n-    /* $FlowFixMe the old version of Flow doesn't have a good way to define an\n-     * empty exact object. */\n-    const eventListeners: InternalEventListeners = this._eventListeners || {};\n-    if (this._eventListeners == null) {\n-      this._eventListeners = eventListeners;\n-    }\n-\n-    const namedEventListeners = eventListeners[eventType] || [];\n-    if (eventListeners[eventType] == null) {\n-      eventListeners[eventType] = namedEventListeners;\n-    }\n-\n-    namedEventListeners.push({\n-      listener: listener,\n-      invalidated: false,\n-      options: {\n-        capture: capture,\n-        once: once,\n-        passive: passive,\n-        signal: signal,\n-      },\n-    });\n-  }\n-\n-  // See https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/removeEventListener\n-  removeEventListener_unstable(\n-    eventType: string,\n-    listener: EventListener,\n-    options: EventListenerRemoveOptions | boolean,\n-  ) {\n-    // eventType and listener must be referentially equal to be removed from the listeners\n-    // data structure, but in \"options\" we only check the `capture` flag, according to spec.\n-    // That means if you add the same function as a listener with capture set to true and false,\n-    // you must also call removeEventListener twice with capture set to true/false.\n-    const optionsObj =\n-      typeof options === 'object' && options !== null ? options : {};\n-    const capture =\n-      (typeof options === 'boolean' ? options : optionsObj.capture) || false;\n-\n-    // If there are no event listeners or named event listeners, we can bail early - our\n-    // job is already done.\n-    const eventListeners = this._eventListeners;\n-    if (!eventListeners) {\n-      return;\n-    }\n-    const namedEventListeners = eventListeners[eventType];\n-    if (!namedEventListeners) {\n-      return;\n-    }\n-\n-    // TODO: optimize this path to make remove cheaper\n-    eventListeners[eventType] = namedEventListeners.filter(listenerObj => {\n-      return !(\n-        listenerObj.listener === listener &&\n-        listenerObj.options.capture === capture\n-      );\n-    });\n-  }\n }\n \n // $FlowFixMe[class-object-subtyping] found when upgrading Flow",
  },
  {
    sha: "85ad0e6120715ca5c1e102e70a0b1d433833183b",
    filename:
      "packages/react-native-renderer/src/ReactNativeBridgeEventPlugin.js",
    status: "modified",
    additions: 20,
    deletions: 37,
    changes: 57,
    blob_url:
      "https://github.com/facebook/react/blob/abab75d3e01482843b527a11a0cdfdddb12ad791/packages%2Freact-native-renderer%2Fsrc%2FReactNativeBridgeEventPlugin.js",
    raw_url:
      "https://github.com/facebook/react/raw/abab75d3e01482843b527a11a0cdfdddb12ad791/packages%2Freact-native-renderer%2Fsrc%2FReactNativeBridgeEventPlugin.js",
    contents_url:
      "https://api.github.com/repos/facebook/react/contents/packages%2Freact-native-renderer%2Fsrc%2FReactNativeBridgeEventPlugin.js?ref=abab75d3e01482843b527a11a0cdfdddb12ad791",
    patch:
      "@@ -13,15 +13,13 @@ import type {\n } from './legacy-events/PluginModuleType';\n import type {TopLevelType} from './legacy-events/TopLevelEventTypes';\n import SyntheticEvent from './legacy-events/SyntheticEvent';\n-import type {PropagationPhases} from './legacy-events/PropagationPhases';\n \n // Module provided by RN:\n import {ReactNativeViewConfigRegistry} from 'react-native/Libraries/ReactPrivate/ReactNativePrivateInterface';\n import accumulateInto from './legacy-events/accumulateInto';\n-import getListeners from './ReactNativeGetListeners';\n+import getListener from './ReactNativeGetListener';\n import forEachAccumulated from './legacy-events/forEachAccumulated';\n import {HostComponent} from 'react-reconciler/src/ReactWorkTags';\n-import isArray from 'shared/isArray';\n \n const {customBubblingEventTypes, customDirectEventTypes} =\n   ReactNativeViewConfigRegistry;\n@@ -30,38 +28,10 @@ const {customBubblingEventTypes, customDirectEventTypes} =\n // EventPropagator.js, as they deviated from ReactDOM's newer\n // implementations.\n // $FlowFixMe[missing-local-annot]\n-function listenersAtPhase(inst, event, propagationPhase: PropagationPhases) {\n+function listenerAtPhase(inst, event, propagationPhase: PropagationPhases) {\n   const registrationName =\n     event.dispatchConfig.phasedRegistrationNames[propagationPhase];\n-  return getListeners(inst, registrationName, propagationPhase, true);\n-}\n-\n-// $FlowFixMe[missing-local-annot]\n-function accumulateListenersAndInstances(inst, event, listeners) {\n-  const listenersLength = listeners\n-    ? isArray(listeners)\n-      ? listeners.length\n-      : 1\n-    : 0;\n-  if (listenersLength > 0) {\n-    event._dispatchListeners = accumulateInto(\n-      event._dispatchListeners,\n-      listeners,\n-    );\n-\n-    // Avoid allocating additional arrays here\n-    if (event._dispatchInstances == null && listenersLength === 1) {\n-      event._dispatchInstances = inst;\n-    } else {\n-      event._dispatchInstances = event._dispatchInstances || [];\n-      if (!isArray(event._dispatchInstances)) {\n-        event._dispatchInstances = [event._dispatchInstances];\n-      }\n-      for (let i = 0; i < listenersLength; i++) {\n-        event._dispatchInstances.push(inst);\n-      }\n-    }\n-  }\n+  return getListener(inst, registrationName);\n }\n \n // $FlowFixMe[missing-local-annot]\n@@ -71,8 +41,14 @@ function accumulateDirectionalDispatches(inst, phase, event) {\n       console.error('Dispatching inst must not be null');\n     }\n   }\n-  const listeners = listenersAtPhase(inst, event, phase);\n-  accumulateListenersAndInstances(inst, event, listeners);\n+  const listener = listenerAtPhase(inst, event, phase);\n+  if (listener) {\n+    event._dispatchListeners = accumulateInto(\n+      event._dispatchListeners,\n+      listener,\n+    );\n+    event._dispatchInstances = accumulateInto(event._dispatchInstances, inst);\n+  }\n }\n \n // $FlowFixMe[missing-local-annot]\n@@ -160,8 +136,14 @@ function accumulateDispatches(\n ): void {\n   if (inst && event && event.dispatchConfig.registrationName) {\n     const registrationName = event.dispatchConfig.registrationName;\n-    const listeners = getListeners(inst, registrationName, 'bubbled', false);\n-    accumulateListenersAndInstances(inst, event, listeners);\n+    const listener = getListener(inst, registrationName);\n+    if (listener) {\n+      event._dispatchListeners = accumulateInto(\n+        event._dispatchListeners,\n+        listener,\n+      );\n+      event._dispatchInstances = accumulateInto(event._dispatchInstances, inst);\n+    }\n   }\n }\n \n@@ -181,6 +163,7 @@ function accumulateDirectDispatches(events: ?(Array<Object> | Object)) {\n }\n \n // End of inline\n+type PropagationPhases = 'bubbled' | 'captured';\n \n const ReactNativeBridgeEventPlugin = {\n   eventTypes: ({}: EventTypes),",
  },
  {
    sha: "c740e085e863d9437b27d3569657897a0873e038",
    filename: "packages/react-native-renderer/src/ReactNativeEventEmitter.js",
    status: "modified",
    additions: 2,
    deletions: 2,
    changes: 4,
    blob_url:
      "https://github.com/facebook/react/blob/abab75d3e01482843b527a11a0cdfdddb12ad791/packages%2Freact-native-renderer%2Fsrc%2FReactNativeEventEmitter.js",
    raw_url:
      "https://github.com/facebook/react/raw/abab75d3e01482843b527a11a0cdfdddb12ad791/packages%2Freact-native-renderer%2Fsrc%2FReactNativeEventEmitter.js",
    contents_url:
      "https://api.github.com/repos/facebook/react/contents/packages%2Freact-native-renderer%2Fsrc%2FReactNativeEventEmitter.js?ref=abab75d3e01482843b527a11a0cdfdddb12ad791",
    patch:
      "@@ -21,12 +21,12 @@ import {\n } from './legacy-events/EventPluginRegistry';\n import {batchedUpdates} from './legacy-events/ReactGenericBatching';\n import {runEventsInBatch} from './legacy-events/EventBatching';\n-import getListeners from './ReactNativeGetListeners';\n+import getListener from './ReactNativeGetListener';\n import accumulateInto from './legacy-events/accumulateInto';\n \n import {getInstanceFromNode} from './ReactNativeComponentTree';\n \n-export {getListeners, registrationNameModules as registrationNames};\n+export {getListener, registrationNameModules as registrationNames};\n \n /**\n  * Version of `ReactBrowserEventEmitter` that works on the receiving side of a",
  },
  {
    sha: "a741ee840a5dba1651a414a07de6d18e706bbd1f",
    filename: "packages/react-native-renderer/src/ReactNativeGetListener.js",
    status: "added",
    additions: 37,
    deletions: 0,
    changes: 37,
    blob_url:
      "https://github.com/facebook/react/blob/abab75d3e01482843b527a11a0cdfdddb12ad791/packages%2Freact-native-renderer%2Fsrc%2FReactNativeGetListener.js",
    raw_url:
      "https://github.com/facebook/react/raw/abab75d3e01482843b527a11a0cdfdddb12ad791/packages%2Freact-native-renderer%2Fsrc%2FReactNativeGetListener.js",
    contents_url:
      "https://api.github.com/repos/facebook/react/contents/packages%2Freact-native-renderer%2Fsrc%2FReactNativeGetListener.js?ref=abab75d3e01482843b527a11a0cdfdddb12ad791",
    patch:
      "@@ -0,0 +1,37 @@\n+/**\n+ * Copyright (c) Meta Platforms, Inc. and affiliates.\n+ *\n+ * This source code is licensed under the MIT license found in the\n+ * LICENSE file in the root directory of this source tree.\n+ *\n+ * @flow\n+ */\n+\n+import type {Fiber} from 'react-reconciler/src/ReactInternalTypes';\n+\n+import {getFiberCurrentPropsFromNode} from './legacy-events/EventPluginUtils';\n+\n+export default function getListener(\n+  inst: Fiber,\n+  registrationName: string,\n+): Function | null {\n+  const stateNode = inst.stateNode;\n+  if (stateNode === null) {\n+    // Work in progress (ex: onload events in incremental mode).\n+    return null;\n+  }\n+  const props = getFiberCurrentPropsFromNode(stateNode);\n+  if (props === null) {\n+    // Work in progress.\n+    return null;\n+  }\n+  const listener = props[registrationName];\n+\n+  if (listener && typeof listener !== 'function') {\n+    throw new Error(\n+      `Expected \\`${registrationName}\\` listener to be a function, instead got a value of \\`${typeof listener}\\` type.`,\n+    );\n+  }\n+\n+  return listener;\n+}",
  },
  {
    sha: "979b19be3389df2e3552344296e455dc75e80b66",
    filename: "packages/react-native-renderer/src/ReactNativeGetListeners.js",
    status: "removed",
    additions: 0,
    deletions: 166,
    changes: 166,
    blob_url:
      "https://github.com/facebook/react/blob/41110021f28100b16c11d6d9a248582c5bb6bc3c/packages%2Freact-native-renderer%2Fsrc%2FReactNativeGetListeners.js",
    raw_url:
      "https://github.com/facebook/react/raw/41110021f28100b16c11d6d9a248582c5bb6bc3c/packages%2Freact-native-renderer%2Fsrc%2FReactNativeGetListeners.js",
    contents_url:
      "https://api.github.com/repos/facebook/react/contents/packages%2Freact-native-renderer%2Fsrc%2FReactNativeGetListeners.js?ref=41110021f28100b16c11d6d9a248582c5bb6bc3c",
    patch:
      "@@ -1,166 +0,0 @@\n-/**\n- * Copyright (c) Meta Platforms, Inc. and affiliates.\n- *\n- * This source code is licensed under the MIT license found in the\n- * LICENSE file in the root directory of this source tree.\n- * @flow\n- */\n-\n-import type {Fiber} from 'react-reconciler/src/ReactInternalTypes';\n-import type {PropagationPhases} from './legacy-events/PropagationPhases';\n-\n-import {getFiberCurrentPropsFromNode} from './legacy-events/EventPluginUtils';\n-import {CustomEvent} from 'react-native/Libraries/ReactPrivate/ReactNativePrivateInterface';\n-\n-/**\n- * Get a list of listeners for a specific event, in-order.\n- * For React Native we treat the props-based function handlers\n- * as the first-class citizens, and they are always executed first\n- * for both capture and bubbling phase.\n- *\n- * We need \"phase\" propagated to this point to support the HostComponent\n- * EventEmitter API, which does not mutate the name of the handler based\n- * on phase (whereas prop handlers are registered as `onMyEvent` and `onMyEvent_Capture`).\n- *\n- * Native system events emitted into React Native\n- * will be emitted both to the prop handler function and to imperative event\n- * listeners.\n- *\n- * This will either return null, a single Function without an array, or\n- * an array of 2+ items.\n- */\n-export default function getListeners(\n-  inst: Fiber,\n-  registrationName: string,\n-  phase: PropagationPhases,\n-  dispatchToImperativeListeners: boolean,\n-): null | Function | Array<Function> {\n-  const stateNode = inst.stateNode;\n-\n-  if (stateNode === null) {\n-    return null;\n-  }\n-\n-  // If null: Work in progress (ex: onload events in incremental mode).\n-  const props = getFiberCurrentPropsFromNode(stateNode);\n-  if (props === null) {\n-    // Work in progress.\n-    return null;\n-  }\n-\n-  const listener = props[registrationName];\n-\n-  if (listener && typeof listener !== 'function') {\n-    throw new Error(\n-      `Expected \\`${registrationName}\\` listener to be a function, instead got a value of \\`${typeof listener}\\` type.`,\n-    );\n-  }\n-\n-  // If there are no imperative listeners, early exit.\n-  if (\n-    !(\n-      dispatchToImperativeListeners &&\n-      stateNode.canonical &&\n-      stateNode.canonical._eventListeners\n-    )\n-  ) {\n-    return listener;\n-  }\n-\n-  // Below this is the de-optimized path.\n-  // If you are using _eventListeners, we do not (yet)\n-  // expect this to be as performant as the props-only path.\n-  // If/when this becomes a bottleneck, it can be refactored\n-  // to avoid unnecessary closures and array allocations.\n-  //\n-  // Previously, there was only one possible listener for an event:\n-  // the onEventName property in props.\n-  // Now, it is also possible to have N listeners\n-  // for a specific event on a node. Thus, we accumulate all of the listeners,\n-  // including the props listener, and return a function that calls them all in\n-  // order, starting with the handler prop and then the listeners in order.\n-  // We return either a non-empty array or null.\n-  const listeners = [];\n-  if (listener) {\n-    listeners.push(listener);\n-  }\n-\n-  // TODO: for now, all of these events get an `rn:` prefix to enforce\n-  // that the user knows they're only getting non-W3C-compliant events\n-  // through this imperative event API.\n-  // Events might not necessarily be noncompliant, but we currently have\n-  // no verification that /any/ events are compliant.\n-  // Thus, we prefix to ensure no collision with W3C event names.\n-  const requestedPhaseIsCapture = phase === 'captured';\n-  const mangledImperativeRegistrationName = requestedPhaseIsCapture\n-    ? 'rn:' + registrationName.replace(/Capture$/, '')\n-    : 'rn:' + registrationName;\n-\n-  // Get imperative event listeners for this event\n-  if (\n-    stateNode.canonical._eventListeners[mangledImperativeRegistrationName] &&\n-    stateNode.canonical._eventListeners[mangledImperativeRegistrationName]\n-      .length > 0\n-  ) {\n-    const eventListeners =\n-      stateNode.canonical._eventListeners[mangledImperativeRegistrationName];\n-\n-    eventListeners.forEach(listenerObj => {\n-      // Make sure phase of listener matches requested phase\n-      const isCaptureEvent =\n-        listenerObj.options.capture != null && listenerObj.options.capture;\n-      if (isCaptureEvent !== requestedPhaseIsCapture) {\n-        return;\n-      }\n-\n-      // For now (this is an area of future optimization) we must wrap\n-      // all imperative event listeners in a function to unwrap the SyntheticEvent\n-      // and pass them an Event.\n-      // When this API is more stable and used more frequently, we can revisit.\n-      // $FlowFixMe[missing-local-annot]\n-      const listenerFnWrapper = function (syntheticEvent, ...args) {\n-        const eventInst = new CustomEvent(mangledImperativeRegistrationName, {\n-          detail: syntheticEvent.nativeEvent,\n-        });\n-        eventInst.isTrusted = true;\n-        eventInst.setSyntheticEvent(syntheticEvent);\n-\n-        listenerObj.listener(eventInst, ...args);\n-      };\n-\n-      // Only call once?\n-      // If so, we ensure that it's only called once by setting a flag\n-      // and by removing it from eventListeners once it is called (but only\n-      // when it's actually been executed).\n-      if (listenerObj.options.once) {\n-        listeners.push(function (...args) {\n-          // Remove from the event listener once it's been called\n-          stateNode.canonical.removeEventListener_unstable(\n-            mangledImperativeRegistrationName,\n-            listenerObj.listener,\n-            listenerObj.capture,\n-          );\n-\n-          // Guard against function being called more than once in\n-          // case there are somehow multiple in-flight references to\n-          // it being processed\n-          if (!listenerObj.invalidated) {\n-            listenerObj.invalidated = true;\n-            listenerObj.listener(...args);\n-          }\n-        });\n-      } else {\n-        listeners.push(listenerFnWrapper);\n-      }\n-    });\n-  }\n-\n-  if (listeners.length === 0) {\n-    return null;\n-  }\n-  if (listeners.length === 1) {\n-    return listeners[0];\n-  }\n-\n-  return listeners;\n-}",
  },
  {
    sha: "6ac6831fb069a7936f91734e8eea0a8d9bd70e82",
    filename:
      "packages/react-native-renderer/src/__mocks__/react-native/Libraries/ReactPrivate/CustomEvent.js",
    status: "removed",
    additions: 0,
    deletions: 14,
    changes: 14,
    blob_url:
      "https://github.com/facebook/react/blob/41110021f28100b16c11d6d9a248582c5bb6bc3c/packages%2Freact-native-renderer%2Fsrc%2F__mocks__%2Freact-native%2FLibraries%2FReactPrivate%2FCustomEvent.js",
    raw_url:
      "https://github.com/facebook/react/raw/41110021f28100b16c11d6d9a248582c5bb6bc3c/packages%2Freact-native-renderer%2Fsrc%2F__mocks__%2Freact-native%2FLibraries%2FReactPrivate%2FCustomEvent.js",
    contents_url:
      "https://api.github.com/repos/facebook/react/contents/packages%2Freact-native-renderer%2Fsrc%2F__mocks__%2Freact-native%2FLibraries%2FReactPrivate%2FCustomEvent.js?ref=41110021f28100b16c11d6d9a248582c5bb6bc3c",
    patch:
      "@@ -1,14 +0,0 @@\n-/**\n- * Copyright (c) Meta Platforms, Inc. and affiliates.\n- *\n- * This source code is licensed under the MIT license found in the\n- * LICENSE file in the root directory of this source tree.\n- */\n-\n-'use strict';\n-\n-// See the react-native repository for a full implementation.\n-// This is just a stub, currently to pass `instanceof` checks.\n-const CustomEvent = jest.fn();\n-\n-module.exports = {default: CustomEvent};",
  },
  {
    sha: "befc3bb617f4f19d0598681f38cd11959cf3766c",
    filename:
      "packages/react-native-renderer/src/__mocks__/react-native/Libraries/ReactPrivate/ReactNativePrivateInterface.js",
    status: "modified",
    additions: 0,
    deletions: 3,
    changes: 3,
    blob_url:
      "https://github.com/facebook/react/blob/abab75d3e01482843b527a11a0cdfdddb12ad791/packages%2Freact-native-renderer%2Fsrc%2F__mocks__%2Freact-native%2FLibraries%2FReactPrivate%2FReactNativePrivateInterface.js",
    raw_url:
      "https://github.com/facebook/react/raw/abab75d3e01482843b527a11a0cdfdddb12ad791/packages%2Freact-native-renderer%2Fsrc%2F__mocks__%2Freact-native%2FLibraries%2FReactPrivate%2FReactNativePrivateInterface.js",
    contents_url:
      "https://api.github.com/repos/facebook/react/contents/packages%2Freact-native-renderer%2Fsrc%2F__mocks__%2Freact-native%2FLibraries%2FReactPrivate%2FReactNativePrivateInterface.js?ref=abab75d3e01482843b527a11a0cdfdddb12ad791",
    patch:
      "@@ -44,7 +44,4 @@ module.exports = {\n   get RawEventEmitter() {\n     return require('./RawEventEmitter').default;\n   },\n-  get CustomEvent() {\n-    return require('./CustomEvent').default;\n-  },\n };",
  },
  {
    sha: "6672ab7687ae8d5fcd1b60eb2345d8b657bd58fe",
    filename:
      "packages/react-native-renderer/src/legacy-events/PropagationPhases.js",
    status: "removed",
    additions: 0,
    deletions: 10,
    changes: 10,
    blob_url:
      "https://github.com/facebook/react/blob/41110021f28100b16c11d6d9a248582c5bb6bc3c/packages%2Freact-native-renderer%2Fsrc%2Flegacy-events%2FPropagationPhases.js",
    raw_url:
      "https://github.com/facebook/react/raw/41110021f28100b16c11d6d9a248582c5bb6bc3c/packages%2Freact-native-renderer%2Fsrc%2Flegacy-events%2FPropagationPhases.js",
    contents_url:
      "https://api.github.com/repos/facebook/react/contents/packages%2Freact-native-renderer%2Fsrc%2Flegacy-events%2FPropagationPhases.js?ref=41110021f28100b16c11d6d9a248582c5bb6bc3c",
    patch:
      "@@ -1,10 +0,0 @@\n-/**\n- * Copyright (c) Meta Platforms, Inc. and affiliates.\n- *\n- * This source code is licensed under the MIT license found in the\n- * LICENSE file in the root directory of this source tree.\n- *\n- * @flow\n- */\n-\n-export type PropagationPhases = 'bubbled' | 'captured';",
  },
  {
    sha: "e3899db44528de067605fa247179e723080d3f86",
    filename: "scripts/flow/react-native-host-hooks.js",
    status: "modified",
    additions: 0,
    deletions: 12,
    changes: 12,
    blob_url:
      "https://github.com/facebook/react/blob/abab75d3e01482843b527a11a0cdfdddb12ad791/scripts%2Fflow%2Freact-native-host-hooks.js",
    raw_url:
      "https://github.com/facebook/react/raw/abab75d3e01482843b527a11a0cdfdddb12ad791/scripts%2Fflow%2Freact-native-host-hooks.js",
    contents_url:
      "https://api.github.com/repos/facebook/react/contents/scripts%2Fflow%2Freact-native-host-hooks.js?ref=abab75d3e01482843b527a11a0cdfdddb12ad791",
    patch:
      "@@ -143,18 +143,6 @@ declare module 'react-native/Libraries/ReactPrivate/ReactNativePrivateInterface'\n     emit: (channel: string, event: RawEventEmitterEvent) => string,\n     ...\n   };\n-  declare export class CustomEvent {\n-    isTrusted: boolean;\n-\n-    constructor(\n-      name: string,\n-      {\n-        detail: any,\n-      },\n-    ): void;\n-\n-    setSyntheticEvent(event: any): void;\n-  }\n }\n \n declare module 'react-native/Libraries/ReactPrivate/ReactNativePrivateInitializeCore' {",
  },
];
