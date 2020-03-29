/******/ (function(modules) { // webpackBootstrap
/******/ 	// eslint-disable-next-line no-unused-vars
/******/ 	function hotDownloadUpdateChunk(chunkId) {
/******/ 		var chunk = require("./" + "" + chunkId + "." + hotCurrentHash + ".hot-update.js");
/******/ 		hotAddUpdateChunk(chunk.id, chunk.modules);
/******/ 	}
/******/
/******/ 	// eslint-disable-next-line no-unused-vars
/******/ 	function hotDownloadManifest() {
/******/ 		try {
/******/ 			var update = require("./" + "" + hotCurrentHash + ".hot-update.json");
/******/ 		} catch (e) {
/******/ 			return Promise.resolve();
/******/ 		}
/******/ 		return Promise.resolve(update);
/******/ 	}
/******/
/******/ 	//eslint-disable-next-line no-unused-vars
/******/ 	function hotDisposeChunk(chunkId) {
/******/ 		delete installedChunks[chunkId];
/******/ 	}
/******/
/******/ 	var hotApplyOnUpdate = true;
/******/ 	// eslint-disable-next-line no-unused-vars
/******/ 	var hotCurrentHash = "43d4d0df9beb5e48aae0";
/******/ 	var hotRequestTimeout = 10000;
/******/ 	var hotCurrentModuleData = {};
/******/ 	var hotCurrentChildModule;
/******/ 	// eslint-disable-next-line no-unused-vars
/******/ 	var hotCurrentParents = [];
/******/ 	// eslint-disable-next-line no-unused-vars
/******/ 	var hotCurrentParentsTemp = [];
/******/
/******/ 	// eslint-disable-next-line no-unused-vars
/******/ 	function hotCreateRequire(moduleId) {
/******/ 		var me = installedModules[moduleId];
/******/ 		if (!me) return __webpack_require__;
/******/ 		var fn = function(request) {
/******/ 			if (me.hot.active) {
/******/ 				if (installedModules[request]) {
/******/ 					if (installedModules[request].parents.indexOf(moduleId) === -1) {
/******/ 						installedModules[request].parents.push(moduleId);
/******/ 					}
/******/ 				} else {
/******/ 					hotCurrentParents = [moduleId];
/******/ 					hotCurrentChildModule = request;
/******/ 				}
/******/ 				if (me.children.indexOf(request) === -1) {
/******/ 					me.children.push(request);
/******/ 				}
/******/ 			} else {
/******/ 				console.warn(
/******/ 					"[HMR] unexpected require(" +
/******/ 						request +
/******/ 						") from disposed module " +
/******/ 						moduleId
/******/ 				);
/******/ 				hotCurrentParents = [];
/******/ 			}
/******/ 			return __webpack_require__(request);
/******/ 		};
/******/ 		var ObjectFactory = function ObjectFactory(name) {
/******/ 			return {
/******/ 				configurable: true,
/******/ 				enumerable: true,
/******/ 				get: function() {
/******/ 					return __webpack_require__[name];
/******/ 				},
/******/ 				set: function(value) {
/******/ 					__webpack_require__[name] = value;
/******/ 				}
/******/ 			};
/******/ 		};
/******/ 		for (var name in __webpack_require__) {
/******/ 			if (
/******/ 				Object.prototype.hasOwnProperty.call(__webpack_require__, name) &&
/******/ 				name !== "e" &&
/******/ 				name !== "t"
/******/ 			) {
/******/ 				Object.defineProperty(fn, name, ObjectFactory(name));
/******/ 			}
/******/ 		}
/******/ 		fn.e = function(chunkId) {
/******/ 			if (hotStatus === "ready") hotSetStatus("prepare");
/******/ 			hotChunksLoading++;
/******/ 			return __webpack_require__.e(chunkId).then(finishChunkLoading, function(err) {
/******/ 				finishChunkLoading();
/******/ 				throw err;
/******/ 			});
/******/
/******/ 			function finishChunkLoading() {
/******/ 				hotChunksLoading--;
/******/ 				if (hotStatus === "prepare") {
/******/ 					if (!hotWaitingFilesMap[chunkId]) {
/******/ 						hotEnsureUpdateChunk(chunkId);
/******/ 					}
/******/ 					if (hotChunksLoading === 0 && hotWaitingFiles === 0) {
/******/ 						hotUpdateDownloaded();
/******/ 					}
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 		fn.t = function(value, mode) {
/******/ 			if (mode & 1) value = fn(value);
/******/ 			return __webpack_require__.t(value, mode & ~1);
/******/ 		};
/******/ 		return fn;
/******/ 	}
/******/
/******/ 	// eslint-disable-next-line no-unused-vars
/******/ 	function hotCreateModule(moduleId) {
/******/ 		var hot = {
/******/ 			// private stuff
/******/ 			_acceptedDependencies: {},
/******/ 			_declinedDependencies: {},
/******/ 			_selfAccepted: false,
/******/ 			_selfDeclined: false,
/******/ 			_disposeHandlers: [],
/******/ 			_main: hotCurrentChildModule !== moduleId,
/******/
/******/ 			// Module API
/******/ 			active: true,
/******/ 			accept: function(dep, callback) {
/******/ 				if (dep === undefined) hot._selfAccepted = true;
/******/ 				else if (typeof dep === "function") hot._selfAccepted = dep;
/******/ 				else if (typeof dep === "object")
/******/ 					for (var i = 0; i < dep.length; i++)
/******/ 						hot._acceptedDependencies[dep[i]] = callback || function() {};
/******/ 				else hot._acceptedDependencies[dep] = callback || function() {};
/******/ 			},
/******/ 			decline: function(dep) {
/******/ 				if (dep === undefined) hot._selfDeclined = true;
/******/ 				else if (typeof dep === "object")
/******/ 					for (var i = 0; i < dep.length; i++)
/******/ 						hot._declinedDependencies[dep[i]] = true;
/******/ 				else hot._declinedDependencies[dep] = true;
/******/ 			},
/******/ 			dispose: function(callback) {
/******/ 				hot._disposeHandlers.push(callback);
/******/ 			},
/******/ 			addDisposeHandler: function(callback) {
/******/ 				hot._disposeHandlers.push(callback);
/******/ 			},
/******/ 			removeDisposeHandler: function(callback) {
/******/ 				var idx = hot._disposeHandlers.indexOf(callback);
/******/ 				if (idx >= 0) hot._disposeHandlers.splice(idx, 1);
/******/ 			},
/******/
/******/ 			// Management API
/******/ 			check: hotCheck,
/******/ 			apply: hotApply,
/******/ 			status: function(l) {
/******/ 				if (!l) return hotStatus;
/******/ 				hotStatusHandlers.push(l);
/******/ 			},
/******/ 			addStatusHandler: function(l) {
/******/ 				hotStatusHandlers.push(l);
/******/ 			},
/******/ 			removeStatusHandler: function(l) {
/******/ 				var idx = hotStatusHandlers.indexOf(l);
/******/ 				if (idx >= 0) hotStatusHandlers.splice(idx, 1);
/******/ 			},
/******/
/******/ 			//inherit from previous dispose call
/******/ 			data: hotCurrentModuleData[moduleId]
/******/ 		};
/******/ 		hotCurrentChildModule = undefined;
/******/ 		return hot;
/******/ 	}
/******/
/******/ 	var hotStatusHandlers = [];
/******/ 	var hotStatus = "idle";
/******/
/******/ 	function hotSetStatus(newStatus) {
/******/ 		hotStatus = newStatus;
/******/ 		for (var i = 0; i < hotStatusHandlers.length; i++)
/******/ 			hotStatusHandlers[i].call(null, newStatus);
/******/ 	}
/******/
/******/ 	// while downloading
/******/ 	var hotWaitingFiles = 0;
/******/ 	var hotChunksLoading = 0;
/******/ 	var hotWaitingFilesMap = {};
/******/ 	var hotRequestedFilesMap = {};
/******/ 	var hotAvailableFilesMap = {};
/******/ 	var hotDeferred;
/******/
/******/ 	// The update info
/******/ 	var hotUpdate, hotUpdateNewHash;
/******/
/******/ 	function toModuleId(id) {
/******/ 		var isNumber = +id + "" === id;
/******/ 		return isNumber ? +id : id;
/******/ 	}
/******/
/******/ 	function hotCheck(apply) {
/******/ 		if (hotStatus !== "idle") {
/******/ 			throw new Error("check() is only allowed in idle status");
/******/ 		}
/******/ 		hotApplyOnUpdate = apply;
/******/ 		hotSetStatus("check");
/******/ 		return hotDownloadManifest(hotRequestTimeout).then(function(update) {
/******/ 			if (!update) {
/******/ 				hotSetStatus("idle");
/******/ 				return null;
/******/ 			}
/******/ 			hotRequestedFilesMap = {};
/******/ 			hotWaitingFilesMap = {};
/******/ 			hotAvailableFilesMap = update.c;
/******/ 			hotUpdateNewHash = update.h;
/******/
/******/ 			hotSetStatus("prepare");
/******/ 			var promise = new Promise(function(resolve, reject) {
/******/ 				hotDeferred = {
/******/ 					resolve: resolve,
/******/ 					reject: reject
/******/ 				};
/******/ 			});
/******/ 			hotUpdate = {};
/******/ 			var chunkId = "main";
/******/ 			// eslint-disable-next-line no-lone-blocks
/******/ 			{
/******/ 				/*globals chunkId */
/******/ 				hotEnsureUpdateChunk(chunkId);
/******/ 			}
/******/ 			if (
/******/ 				hotStatus === "prepare" &&
/******/ 				hotChunksLoading === 0 &&
/******/ 				hotWaitingFiles === 0
/******/ 			) {
/******/ 				hotUpdateDownloaded();
/******/ 			}
/******/ 			return promise;
/******/ 		});
/******/ 	}
/******/
/******/ 	// eslint-disable-next-line no-unused-vars
/******/ 	function hotAddUpdateChunk(chunkId, moreModules) {
/******/ 		if (!hotAvailableFilesMap[chunkId] || !hotRequestedFilesMap[chunkId])
/******/ 			return;
/******/ 		hotRequestedFilesMap[chunkId] = false;
/******/ 		for (var moduleId in moreModules) {
/******/ 			if (Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				hotUpdate[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if (--hotWaitingFiles === 0 && hotChunksLoading === 0) {
/******/ 			hotUpdateDownloaded();
/******/ 		}
/******/ 	}
/******/
/******/ 	function hotEnsureUpdateChunk(chunkId) {
/******/ 		if (!hotAvailableFilesMap[chunkId]) {
/******/ 			hotWaitingFilesMap[chunkId] = true;
/******/ 		} else {
/******/ 			hotRequestedFilesMap[chunkId] = true;
/******/ 			hotWaitingFiles++;
/******/ 			hotDownloadUpdateChunk(chunkId);
/******/ 		}
/******/ 	}
/******/
/******/ 	function hotUpdateDownloaded() {
/******/ 		hotSetStatus("ready");
/******/ 		var deferred = hotDeferred;
/******/ 		hotDeferred = null;
/******/ 		if (!deferred) return;
/******/ 		if (hotApplyOnUpdate) {
/******/ 			// Wrap deferred object in Promise to mark it as a well-handled Promise to
/******/ 			// avoid triggering uncaught exception warning in Chrome.
/******/ 			// See https://bugs.chromium.org/p/chromium/issues/detail?id=465666
/******/ 			Promise.resolve()
/******/ 				.then(function() {
/******/ 					return hotApply(hotApplyOnUpdate);
/******/ 				})
/******/ 				.then(
/******/ 					function(result) {
/******/ 						deferred.resolve(result);
/******/ 					},
/******/ 					function(err) {
/******/ 						deferred.reject(err);
/******/ 					}
/******/ 				);
/******/ 		} else {
/******/ 			var outdatedModules = [];
/******/ 			for (var id in hotUpdate) {
/******/ 				if (Object.prototype.hasOwnProperty.call(hotUpdate, id)) {
/******/ 					outdatedModules.push(toModuleId(id));
/******/ 				}
/******/ 			}
/******/ 			deferred.resolve(outdatedModules);
/******/ 		}
/******/ 	}
/******/
/******/ 	function hotApply(options) {
/******/ 		if (hotStatus !== "ready")
/******/ 			throw new Error("apply() is only allowed in ready status");
/******/ 		options = options || {};
/******/
/******/ 		var cb;
/******/ 		var i;
/******/ 		var j;
/******/ 		var module;
/******/ 		var moduleId;
/******/
/******/ 		function getAffectedStuff(updateModuleId) {
/******/ 			var outdatedModules = [updateModuleId];
/******/ 			var outdatedDependencies = {};
/******/
/******/ 			var queue = outdatedModules.map(function(id) {
/******/ 				return {
/******/ 					chain: [id],
/******/ 					id: id
/******/ 				};
/******/ 			});
/******/ 			while (queue.length > 0) {
/******/ 				var queueItem = queue.pop();
/******/ 				var moduleId = queueItem.id;
/******/ 				var chain = queueItem.chain;
/******/ 				module = installedModules[moduleId];
/******/ 				if (!module || module.hot._selfAccepted) continue;
/******/ 				if (module.hot._selfDeclined) {
/******/ 					return {
/******/ 						type: "self-declined",
/******/ 						chain: chain,
/******/ 						moduleId: moduleId
/******/ 					};
/******/ 				}
/******/ 				if (module.hot._main) {
/******/ 					return {
/******/ 						type: "unaccepted",
/******/ 						chain: chain,
/******/ 						moduleId: moduleId
/******/ 					};
/******/ 				}
/******/ 				for (var i = 0; i < module.parents.length; i++) {
/******/ 					var parentId = module.parents[i];
/******/ 					var parent = installedModules[parentId];
/******/ 					if (!parent) continue;
/******/ 					if (parent.hot._declinedDependencies[moduleId]) {
/******/ 						return {
/******/ 							type: "declined",
/******/ 							chain: chain.concat([parentId]),
/******/ 							moduleId: moduleId,
/******/ 							parentId: parentId
/******/ 						};
/******/ 					}
/******/ 					if (outdatedModules.indexOf(parentId) !== -1) continue;
/******/ 					if (parent.hot._acceptedDependencies[moduleId]) {
/******/ 						if (!outdatedDependencies[parentId])
/******/ 							outdatedDependencies[parentId] = [];
/******/ 						addAllToSet(outdatedDependencies[parentId], [moduleId]);
/******/ 						continue;
/******/ 					}
/******/ 					delete outdatedDependencies[parentId];
/******/ 					outdatedModules.push(parentId);
/******/ 					queue.push({
/******/ 						chain: chain.concat([parentId]),
/******/ 						id: parentId
/******/ 					});
/******/ 				}
/******/ 			}
/******/
/******/ 			return {
/******/ 				type: "accepted",
/******/ 				moduleId: updateModuleId,
/******/ 				outdatedModules: outdatedModules,
/******/ 				outdatedDependencies: outdatedDependencies
/******/ 			};
/******/ 		}
/******/
/******/ 		function addAllToSet(a, b) {
/******/ 			for (var i = 0; i < b.length; i++) {
/******/ 				var item = b[i];
/******/ 				if (a.indexOf(item) === -1) a.push(item);
/******/ 			}
/******/ 		}
/******/
/******/ 		// at begin all updates modules are outdated
/******/ 		// the "outdated" status can propagate to parents if they don't accept the children
/******/ 		var outdatedDependencies = {};
/******/ 		var outdatedModules = [];
/******/ 		var appliedUpdate = {};
/******/
/******/ 		var warnUnexpectedRequire = function warnUnexpectedRequire() {
/******/ 			console.warn(
/******/ 				"[HMR] unexpected require(" + result.moduleId + ") to disposed module"
/******/ 			);
/******/ 		};
/******/
/******/ 		for (var id in hotUpdate) {
/******/ 			if (Object.prototype.hasOwnProperty.call(hotUpdate, id)) {
/******/ 				moduleId = toModuleId(id);
/******/ 				/** @type {TODO} */
/******/ 				var result;
/******/ 				if (hotUpdate[id]) {
/******/ 					result = getAffectedStuff(moduleId);
/******/ 				} else {
/******/ 					result = {
/******/ 						type: "disposed",
/******/ 						moduleId: id
/******/ 					};
/******/ 				}
/******/ 				/** @type {Error|false} */
/******/ 				var abortError = false;
/******/ 				var doApply = false;
/******/ 				var doDispose = false;
/******/ 				var chainInfo = "";
/******/ 				if (result.chain) {
/******/ 					chainInfo = "\nUpdate propagation: " + result.chain.join(" -> ");
/******/ 				}
/******/ 				switch (result.type) {
/******/ 					case "self-declined":
/******/ 						if (options.onDeclined) options.onDeclined(result);
/******/ 						if (!options.ignoreDeclined)
/******/ 							abortError = new Error(
/******/ 								"Aborted because of self decline: " +
/******/ 									result.moduleId +
/******/ 									chainInfo
/******/ 							);
/******/ 						break;
/******/ 					case "declined":
/******/ 						if (options.onDeclined) options.onDeclined(result);
/******/ 						if (!options.ignoreDeclined)
/******/ 							abortError = new Error(
/******/ 								"Aborted because of declined dependency: " +
/******/ 									result.moduleId +
/******/ 									" in " +
/******/ 									result.parentId +
/******/ 									chainInfo
/******/ 							);
/******/ 						break;
/******/ 					case "unaccepted":
/******/ 						if (options.onUnaccepted) options.onUnaccepted(result);
/******/ 						if (!options.ignoreUnaccepted)
/******/ 							abortError = new Error(
/******/ 								"Aborted because " + moduleId + " is not accepted" + chainInfo
/******/ 							);
/******/ 						break;
/******/ 					case "accepted":
/******/ 						if (options.onAccepted) options.onAccepted(result);
/******/ 						doApply = true;
/******/ 						break;
/******/ 					case "disposed":
/******/ 						if (options.onDisposed) options.onDisposed(result);
/******/ 						doDispose = true;
/******/ 						break;
/******/ 					default:
/******/ 						throw new Error("Unexception type " + result.type);
/******/ 				}
/******/ 				if (abortError) {
/******/ 					hotSetStatus("abort");
/******/ 					return Promise.reject(abortError);
/******/ 				}
/******/ 				if (doApply) {
/******/ 					appliedUpdate[moduleId] = hotUpdate[moduleId];
/******/ 					addAllToSet(outdatedModules, result.outdatedModules);
/******/ 					for (moduleId in result.outdatedDependencies) {
/******/ 						if (
/******/ 							Object.prototype.hasOwnProperty.call(
/******/ 								result.outdatedDependencies,
/******/ 								moduleId
/******/ 							)
/******/ 						) {
/******/ 							if (!outdatedDependencies[moduleId])
/******/ 								outdatedDependencies[moduleId] = [];
/******/ 							addAllToSet(
/******/ 								outdatedDependencies[moduleId],
/******/ 								result.outdatedDependencies[moduleId]
/******/ 							);
/******/ 						}
/******/ 					}
/******/ 				}
/******/ 				if (doDispose) {
/******/ 					addAllToSet(outdatedModules, [result.moduleId]);
/******/ 					appliedUpdate[moduleId] = warnUnexpectedRequire;
/******/ 				}
/******/ 			}
/******/ 		}
/******/
/******/ 		// Store self accepted outdated modules to require them later by the module system
/******/ 		var outdatedSelfAcceptedModules = [];
/******/ 		for (i = 0; i < outdatedModules.length; i++) {
/******/ 			moduleId = outdatedModules[i];
/******/ 			if (
/******/ 				installedModules[moduleId] &&
/******/ 				installedModules[moduleId].hot._selfAccepted &&
/******/ 				// removed self-accepted modules should not be required
/******/ 				appliedUpdate[moduleId] !== warnUnexpectedRequire
/******/ 			) {
/******/ 				outdatedSelfAcceptedModules.push({
/******/ 					module: moduleId,
/******/ 					errorHandler: installedModules[moduleId].hot._selfAccepted
/******/ 				});
/******/ 			}
/******/ 		}
/******/
/******/ 		// Now in "dispose" phase
/******/ 		hotSetStatus("dispose");
/******/ 		Object.keys(hotAvailableFilesMap).forEach(function(chunkId) {
/******/ 			if (hotAvailableFilesMap[chunkId] === false) {
/******/ 				hotDisposeChunk(chunkId);
/******/ 			}
/******/ 		});
/******/
/******/ 		var idx;
/******/ 		var queue = outdatedModules.slice();
/******/ 		while (queue.length > 0) {
/******/ 			moduleId = queue.pop();
/******/ 			module = installedModules[moduleId];
/******/ 			if (!module) continue;
/******/
/******/ 			var data = {};
/******/
/******/ 			// Call dispose handlers
/******/ 			var disposeHandlers = module.hot._disposeHandlers;
/******/ 			for (j = 0; j < disposeHandlers.length; j++) {
/******/ 				cb = disposeHandlers[j];
/******/ 				cb(data);
/******/ 			}
/******/ 			hotCurrentModuleData[moduleId] = data;
/******/
/******/ 			// disable module (this disables requires from this module)
/******/ 			module.hot.active = false;
/******/
/******/ 			// remove module from cache
/******/ 			delete installedModules[moduleId];
/******/
/******/ 			// when disposing there is no need to call dispose handler
/******/ 			delete outdatedDependencies[moduleId];
/******/
/******/ 			// remove "parents" references from all children
/******/ 			for (j = 0; j < module.children.length; j++) {
/******/ 				var child = installedModules[module.children[j]];
/******/ 				if (!child) continue;
/******/ 				idx = child.parents.indexOf(moduleId);
/******/ 				if (idx >= 0) {
/******/ 					child.parents.splice(idx, 1);
/******/ 				}
/******/ 			}
/******/ 		}
/******/
/******/ 		// remove outdated dependency from module children
/******/ 		var dependency;
/******/ 		var moduleOutdatedDependencies;
/******/ 		for (moduleId in outdatedDependencies) {
/******/ 			if (
/******/ 				Object.prototype.hasOwnProperty.call(outdatedDependencies, moduleId)
/******/ 			) {
/******/ 				module = installedModules[moduleId];
/******/ 				if (module) {
/******/ 					moduleOutdatedDependencies = outdatedDependencies[moduleId];
/******/ 					for (j = 0; j < moduleOutdatedDependencies.length; j++) {
/******/ 						dependency = moduleOutdatedDependencies[j];
/******/ 						idx = module.children.indexOf(dependency);
/******/ 						if (idx >= 0) module.children.splice(idx, 1);
/******/ 					}
/******/ 				}
/******/ 			}
/******/ 		}
/******/
/******/ 		// Now in "apply" phase
/******/ 		hotSetStatus("apply");
/******/
/******/ 		hotCurrentHash = hotUpdateNewHash;
/******/
/******/ 		// insert new code
/******/ 		for (moduleId in appliedUpdate) {
/******/ 			if (Object.prototype.hasOwnProperty.call(appliedUpdate, moduleId)) {
/******/ 				modules[moduleId] = appliedUpdate[moduleId];
/******/ 			}
/******/ 		}
/******/
/******/ 		// call accept handlers
/******/ 		var error = null;
/******/ 		for (moduleId in outdatedDependencies) {
/******/ 			if (
/******/ 				Object.prototype.hasOwnProperty.call(outdatedDependencies, moduleId)
/******/ 			) {
/******/ 				module = installedModules[moduleId];
/******/ 				if (module) {
/******/ 					moduleOutdatedDependencies = outdatedDependencies[moduleId];
/******/ 					var callbacks = [];
/******/ 					for (i = 0; i < moduleOutdatedDependencies.length; i++) {
/******/ 						dependency = moduleOutdatedDependencies[i];
/******/ 						cb = module.hot._acceptedDependencies[dependency];
/******/ 						if (cb) {
/******/ 							if (callbacks.indexOf(cb) !== -1) continue;
/******/ 							callbacks.push(cb);
/******/ 						}
/******/ 					}
/******/ 					for (i = 0; i < callbacks.length; i++) {
/******/ 						cb = callbacks[i];
/******/ 						try {
/******/ 							cb(moduleOutdatedDependencies);
/******/ 						} catch (err) {
/******/ 							if (options.onErrored) {
/******/ 								options.onErrored({
/******/ 									type: "accept-errored",
/******/ 									moduleId: moduleId,
/******/ 									dependencyId: moduleOutdatedDependencies[i],
/******/ 									error: err
/******/ 								});
/******/ 							}
/******/ 							if (!options.ignoreErrored) {
/******/ 								if (!error) error = err;
/******/ 							}
/******/ 						}
/******/ 					}
/******/ 				}
/******/ 			}
/******/ 		}
/******/
/******/ 		// Load self accepted modules
/******/ 		for (i = 0; i < outdatedSelfAcceptedModules.length; i++) {
/******/ 			var item = outdatedSelfAcceptedModules[i];
/******/ 			moduleId = item.module;
/******/ 			hotCurrentParents = [moduleId];
/******/ 			try {
/******/ 				__webpack_require__(moduleId);
/******/ 			} catch (err) {
/******/ 				if (typeof item.errorHandler === "function") {
/******/ 					try {
/******/ 						item.errorHandler(err);
/******/ 					} catch (err2) {
/******/ 						if (options.onErrored) {
/******/ 							options.onErrored({
/******/ 								type: "self-accept-error-handler-errored",
/******/ 								moduleId: moduleId,
/******/ 								error: err2,
/******/ 								originalError: err
/******/ 							});
/******/ 						}
/******/ 						if (!options.ignoreErrored) {
/******/ 							if (!error) error = err2;
/******/ 						}
/******/ 						if (!error) error = err;
/******/ 					}
/******/ 				} else {
/******/ 					if (options.onErrored) {
/******/ 						options.onErrored({
/******/ 							type: "self-accept-errored",
/******/ 							moduleId: moduleId,
/******/ 							error: err
/******/ 						});
/******/ 					}
/******/ 					if (!options.ignoreErrored) {
/******/ 						if (!error) error = err;
/******/ 					}
/******/ 				}
/******/ 			}
/******/ 		}
/******/
/******/ 		// handle errors in accept handlers and self accepted module load
/******/ 		if (error) {
/******/ 			hotSetStatus("fail");
/******/ 			return Promise.reject(error);
/******/ 		}
/******/
/******/ 		hotSetStatus("idle");
/******/ 		return new Promise(function(resolve) {
/******/ 			resolve(outdatedModules);
/******/ 		});
/******/ 	}
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {},
/******/ 			hot: hotCreateModule(moduleId),
/******/ 			parents: (hotCurrentParentsTemp = hotCurrentParents, hotCurrentParents = [], hotCurrentParentsTemp),
/******/ 			children: []
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, hotCreateRequire(moduleId));
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// __webpack_hash__
/******/ 	__webpack_require__.h = function() { return hotCurrentHash; };
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return hotCreateRequire("./example/server.blop")(__webpack_require__.s = "./example/server.blop");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./example/ComponentState/ComponentStatePage.blop":
/*!********************************************************!*\
  !*** ./example/ComponentState/ComponentStatePage.blop ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const blop = __webpack_require__(/*! ./src/runtime.js */ \"./src/runtime.js\");\nlet Counter, ContextConsumer, Intermediary, Interceptor, ClickCounter, Animation, CounterPage;\nlet { Component } = blop;\n\n\nCounter = (attributes, _children, node) => {let increase, decrease;\n  // copying the React weird hook interface\n  let { value: counter, setState } = node.useState('counter', 0);\n  increase = () =>setState(counter + 1);\n  decrease = () =>setState(counter - 1);\n  const __1c = []; const __1a = {};\n    const __2c = []; const __2a = {}; const __3 = attributes.name; Array.isArray(__3) ? __2c.push(...__3) : __2c.push(__3); const __2 = blop.h('h4', __2a, __2c); __1c.push(__2);\n    const __4c = []; const __4a = {};\n      const __5c = []; const __5a = {}; __5a['class'] = 'btn btn-success'; __5a['on'] = ({ click: increase }); const __6 = 'increase'; Array.isArray(__6) ? __5c.push(...__6) : __5c.push(__6); const __5 = blop.h('button', __5a, __5c); __4c.push(__5);\n      const __7c = []; const __7a = {}; __7a['class'] = 'btn btn-danger'; __7a['on'] = ({ click: decrease }); const __8 = 'decrease'; Array.isArray(__8) ? __7c.push(...__8) : __7c.push(__8); const __7 = blop.h('button', __7a, __7c); __4c.push(__7);\n      const __9c = []; const __9a = {}; __9a['style'] = ({ 'font-size': '20px' }); const __10 = ` ${counter} `; Array.isArray(__10) ? __9c.push(...__10) : __9c.push(__10); const __9 = blop.h('b', __9a, __9c); __4c.push(__9);\n     const __4 = blop.h('label', __4a, __4c); __1c.push(__4);\n    // = children // warning: children will not be re-rendered with setState\n   const __1 = blop.h('div', __1a, __1c); return __1;\n};\n\nContextConsumer = (_attributes, _children, node) => {\n  let { value } = node.useContext('specialNumber');\n  const __11c = []; const __11a = {}; const __12 = value; Array.isArray(__12) ? __11c.push(...__12) : __11c.push(__12); const __11 = blop.h('p', __11a, __11c); return __11;\n};\n\nIntermediary = () =>(() => {const __13c = []; const __13a = {}; const __13 = blop.c(ContextConsumer, __13a, __13c, '__13'); return __13;})();\nInterceptor = (_attributes, _children, node) => {\n  node.useContext('specialNumber', 'specialNumber intercepted');\n  const __14c = []; const __14a = {}; const __14 = blop.c(ContextConsumer, __14a, __14c, '__14'); return __14;\n};\n\nfunction renderClickCounter(value) {\n  const __15c = []; const __15a = {}; const __16 = value; Array.isArray(__16) ? __15c.push(...__16) : __15c.push(__16); const __15 = blop.h('p', __15a, __15c); return __15;\n};\n\nClickCounter = (_attributes, _children, node) => {let increase;\n  let { value: counter, setState, getState } = node.useState('counter', 0);\n  increase = () => {\n    // need to use getState here as counter value\n    // gets captured in increase and never changes\n    setState(getState() + 1);\n  };\n  node.mount((_vnode) => {\n    console.log('mount ClickCounter');\n    document.addEventListener('click', increase);\n  });\n  node.unmount((_vnode) => {\n    document.removeEventListener('click', increase);\n    console.log('unmount ClickCounter');\n  });\n  return renderClickCounter(counter)\n};\n\nfunction Window() {\n  // a window object usable in SSR\n  if (typeof window === 'undefined') {\n    return ({ innerWidth: 960 })\n  }\n  return window\n};\n\n\nfunction useWindowWidth(node) {let w, handleResize;\n  w = Window();\n  let { value: width, setState: setWidth } = node.useState('width', w.innerWidth);\n  handleResize = () =>setWidth(w.innerWidth);\n  node.mount(() => {\n    console.log('mount useWindowWidth');\n    window.addEventListener('resize', handleResize);\n  });\n  node.unmount((_vnode) => {\n    console.log('unmount useWindowWidth');\n    window.removeEventListener('resize', handleResize);\n  });\n  return width\n};\n\nAnimation = (attributes, children, node) => {let w, runAnimation, i, animate, __18;\n  w = Window();\n  let { value: position, setState: setPos } = node.useState('pos', ({ x: 0, y: 0 }));\n  runAnimation = true;\n  i = attributes.initial || 0;\n  animate = () => {\n    i += 0.02\n    position.x = (w.innerWidth / 2) + 120 * Math.cos(i) - 60;\n    position.y = (w.innerHeight / 2) + 120 * Math.sin(i) - 60;\n    setPos(position);\n    runAnimation && window.requestAnimationFrame(animate);\n  };\n  node.mount(() => {\n    console.log('mount Animation');\n    window.requestAnimationFrame(animate);\n  });\n  node.unmount((_vnode) => {\n    console.log('unmount Animation');\n    runAnimation = false;\n  });\n  const __17c = []; const __17a = {}; __17a['style'] = ({ left: `${position.x}px`, top: `${position.y}px`, position: 'absolute' });\n    __18 = children; Array.isArray(__18) ? __17c.push(...__18) : __17c.push(__18); ;\n   const __17 = blop.h('div', __17a, __17c); return __17;\n};\n\nclass ComponentWithClass extends Component {\n  render() {\n    let { text } = this.attributes;\n    const __19c = []; const __19a = {};\n      const __20c = []; const __20a = {}; const __21 = `hello ${text}`; Array.isArray(__21) ? __20c.push(...__21) : __20c.push(__21); const __20 = blop.h('p', __20a, __20c); __19c.push(__20);\n      const __22c = []; const __22a = {}; const __23 = JSON.stringify(this.pos); Array.isArray(__23) ? __22c.push(...__23) : __22c.push(__23); const __22 = blop.h('p', __22a, __22c); __19c.push(__22);\n     const __19 = blop.h('div', __19a, __19c); return __19;\n  }\n\n\n  mouseMove(e) {\n    this.pos = ({ x: e.x, y: e.y });\n    this.refresh();\n  }\n\n\n  onMount() {\n    this.mouseMoveHandler = (e) =>this.mouseMove(e);\n    document.addEventListener('mousemove', this.mouseMoveHandler);\n  }\n\n\n  onUnmount() {\n    document.removeEventListener('mousemove', this.mouseMoveHandler);\n  }\n\n }\n\nCounterPage = (_attributes, _children, node) => {let width, width2, changeValue;\n  width = useWindowWidth(node);\n  width2 = useWindowWidth(node) + 10;\n  let { setContext } = node.useContext('specialNumber', Math.random());\n  changeValue = () =>setContext(Math.random());\n  const __24c = []; const __24a = {};\n    const __25c = []; const __25a = {}; const __26 = 'ClassComponent'; Array.isArray(__26) ? __25c.push(...__26) : __25c.push(__26); const __25 = blop.h('h3', __25a, __25c); __24c.push(__25);\n    const __27c = []; const __27a = {}; const __28 = 'Here is an example of a Class based Component'; Array.isArray(__28) ? __27c.push(...__28) : __27c.push(__28); const __27 = blop.h('p', __27a, __27c); __24c.push(__27);\n    const __29c = []; const __29a = {}; __29a['text'] = 'world'; const __29 = blop.c(ComponentWithClass, __29a, __29c, '__29'); __24c.push(__29);\n    const __30c = []; const __30a = {}; const __31 = 'useState'; Array.isArray(__31) ? __30c.push(...__31) : __30c.push(__31); const __30 = blop.h('h3', __30a, __30c); __24c.push(__30);\n    const __32c = []; const __32a = {}; const __33 = `An example on how you can have state stored inside a component.\n      Setting a state in a component will re-render this component\n      Reloading the page will reset the state.`; Array.isArray(__33) ? __32c.push(...__33) : __32c.push(__33); const __32 = blop.h('p', __32a, __32c); __24c.push(__32);\n    const __34c = []; const __34a = {}; const __35 = 'Animation 0'; Array.isArray(__35) ? __34c.push(...__35) : __34c.push(__35); const __34 = blop.c(Animation, __34a, __34c, '__34'); __24c.push(__34);\n    const __36c = []; const __36a = {}; __36a['initial'] = 1; const __37 = 'Animation 1'; Array.isArray(__37) ? __36c.push(...__37) : __36c.push(__37); const __36 = blop.c(Animation, __36a, __36c, '__36'); __24c.push(__36);\n    const __38c = []; const __38a = {}; __38a['initial'] = 2; const __39 = 'Animation 2'; Array.isArray(__39) ? __38c.push(...__39) : __38c.push(__39); const __38 = blop.c(Animation, __38a, __38c, '__38'); __24c.push(__38);\n    const __40c = []; const __40a = {}; __40a['initial'] = 3; const __41 = 'Animation 3'; Array.isArray(__41) ? __40c.push(...__41) : __40c.push(__41); const __40 = blop.c(Animation, __40a, __40c, '__40'); __24c.push(__40);\n    const __42c = []; const __42a = {}; __42a['initial'] = 4; const __43 = 'Animation 4'; Array.isArray(__43) ? __42c.push(...__43) : __42c.push(__43); const __42 = blop.c(Animation, __42a, __42c, '__42'); __24c.push(__42);\n    const __44c = []; const __44a = {}; __44a['initial'] = 5; const __45 = 'Animation 5'; Array.isArray(__45) ? __44c.push(...__45) : __44c.push(__45); const __44 = blop.c(Animation, __44a, __44c, '__44'); __24c.push(__44);\n    const __46c = []; const __46a = {}; __46a['name'] = 'Counter 1'; const __46 = blop.c(Counter, __46a, __46c, '__46'); __24c.push(__46);\n    const __47c = []; const __47a = {}; __47a['name'] = 'Counter 2'; const __47 = blop.c(Counter, __47a, __47c, '__47'); __24c.push(__47);\n\n    const __48c = []; const __48a = {}; const __49 = 'useContext'; Array.isArray(__49) ? __48c.push(...__49) : __48c.push(__49); const __48 = blop.h('h3', __48a, __48c); __24c.push(__48);\n    const __50c = []; const __50a = {}; const __51 = `useContext allow you to pass values down the tree \n      while still being segregated hierarchically.\n      Changing context in a parent will automatically\n      trigger re-render in the listening children.`; Array.isArray(__51) ? __50c.push(...__51) : __50c.push(__51); const __50 = blop.h('p', __50a, __50c); __24c.push(__50);\n    const __52c = []; const __52a = {}; const __52 = blop.c(Intermediary, __52a, __52c, '__52'); __24c.push(__52);\n    const __53c = []; const __53a = {}; const __53 = blop.c(Interceptor, __53a, __53c, '__53'); __24c.push(__53);\n    const __54c = []; const __54a = {}; __54a['on'] = ({ click: changeValue }); const __55 = 'Change value of the context'; Array.isArray(__55) ? __54c.push(...__55) : __54c.push(__55); const __54 = blop.h('button', __54a, __54c); __24c.push(__54);\n    const __56c = []; const __56a = {}; const __57 = 'lifecycle'; Array.isArray(__57) ? __56c.push(...__57) : __56c.push(__57); const __56 = blop.h('h3', __56a, __56c); __24c.push(__56);\n    const __58c = []; const __58a = {}; const __59 = 'lifecycle gives you access to the snabbdom lifecycle hooks directly from a component.'; Array.isArray(__59) ? __58c.push(...__59) : __58c.push(__59); const __58 = blop.h('p', __58a, __58c); __24c.push(__58);\n    const __60c = []; const __60a = {}; const __60 = blop.c(ClickCounter, __60a, __60c, '__60'); __24c.push(__60);\n    const __61c = []; const __61a = {}; const __62 = 'Famous React hook useWindowWidth'; Array.isArray(__62) ? __61c.push(...__62) : __61c.push(__62); const __61 = blop.h('h3', __61a, __61c); __24c.push(__61);\n    const __63c = []; const __63a = {}; const __64 = `useWindowWidth:${width}`; Array.isArray(__64) ? __63c.push(...__64) : __63c.push(__64); const __63 = blop.h('p', __63a, __63c); __24c.push(__63);\n    const __65c = []; const __65a = {}; const __66 = `useWindowWidth+10:${width2}`; Array.isArray(__66) ? __65c.push(...__66) : __65c.push(__66); const __65 = blop.h('p', __65a, __65c); __24c.push(__65);\n   const __24 = blop.h('div', __24a, __24c); return __24;\n};\n\n\nmodule.exports = { Component, Counter, ContextConsumer, Intermediary, Interceptor, renderClickCounter, ClickCounter, Window, useWindowWidth, Animation, ComponentWithClass, CounterPage };\n\n\n//# sourceURL=webpack:///./example/ComponentState/ComponentStatePage.blop?");

/***/ }),

/***/ "./example/DogPage/DogBreedGame.blop":
/*!*******************************************!*\
  !*** ./example/DogPage/DogBreedGame.blop ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const blop = __webpack_require__(/*! ./src/runtime.js */ \"./src/runtime.js\");\nlet { getNewDog } = __webpack_require__(/*! ./services.blop */ \"./example/DogPage/services.blop\");\n\nfunction DogGame(attributes, children) {let dog, input, percent, __10, __13, __16, __21, __27;\n  let { page, state } = attributes;\n  dog = page.choice;\n\n  input = (() => {const __1c = []; const __1a = {}; __1a['type'] = 'text'; __1a['class'] = 'form-control'; __1a['placeholder'] = 'Breed'; const __1 = blop.h('input', __1a, __1c); return __1;})();\n\n  function check() {let guess;\n    guess = input.elm.value.toLowerCase().replace(' ', '-');\n    input.elm.value = '';\n    page.attempt += 1\n    if ((guess === dog.breed)) {\n      delete page.lastMistake;\n      page.success += 1\n    } else {\n      page.lastMistake = ({ breed: dog.breed, guess });\n    }\n    getNewDog(state);\n  };\n\n  function hint() {\n    input.elm.value = dog.breed.slice(0, 2);\n  };\n\n  const __2c = []; const __2a = {};\n    const __3c = []; const __3a = {}; const __4 = children; Array.isArray(__4) ? __3c.push(...__4) : __3c.push(__4); const __3 = blop.h('h3', __3a, __3c); __2c.push(__3);\n\n    percent = 0;\n    if (page.attempt) {\n      percent = Math.floor(100 * (page.success / page.attempt));\n    }\n    const __5c = []; const __5a = {}; const __6 = `Correct answers: ${page.success} / ${page.attempt} (${percent}%)`; Array.isArray(__6) ? __5c.push(...__6) : __5c.push(__6); const __5 = blop.h('p', __5a, __5c); __2c.push(__5);\n\n    if ((page.lastMistake)) {\n      const __7c = []; const __7a = {};\n        const __8c = []; const __8a = {}; __8a['style'] = ({ color: 'red' }); const __9 = 'Wrong'; Array.isArray(__9) ? __8c.push(...__9) : __8c.push(__9); const __8 = blop.h('span', __8a, __8c); __7c.push(__8);\n        __10 = ' the breed was '; Array.isArray(__10) ? __7c.push(...__10) : __7c.push(__10); ;\n        const __11c = []; const __11a = {}; const __12 = page.lastMistake.breed; Array.isArray(__12) ? __11c.push(...__12) : __11c.push(__12); const __11 = blop.h('b', __11a, __11c); __7c.push(__11);\n        __13 = ' and you guessed \"'; Array.isArray(__13) ? __7c.push(...__13) : __7c.push(__13); ;\n        const __14c = []; const __14a = {}; const __15 = page.lastMistake.guess; Array.isArray(__15) ? __14c.push(...__15) : __14c.push(__15); const __14 = blop.h('b', __14a, __14c); __7c.push(__14);\n        __16 = '\"'; Array.isArray(__16) ? __7c.push(...__16) : __7c.push(__16); ;\n       const __7 = blop.h('p', __7a, __7c); __2c.push(__7);\n    }\n\n    const __17c = []; const __17a = {}; __17a['on'] = ({ submit: (e) => {\n        e.preventDefault();\n        check();\n      }\n    });\n      const __18c = []; const __18a = {}; __18a['class'] = 'form-group';\n        const __19c = []; const __19a = {}; __19a['for'] = 'exampleInputPassword1'; const __20 = 'Your guess on the breed'; Array.isArray(__20) ? __19c.push(...__20) : __19c.push(__20); const __19 = blop.h('label', __19a, __19c); __18c.push(__19);\n        __21 = input; Array.isArray(__21) ? __18c.push(...__21) : __18c.push(__21); ;\n       const __18 = blop.h('div', __18a, __18c); __17c.push(__18);\n      const __22c = []; const __22a = {}; __22a['type'] = 'button'; __22a['on'] = ({ click: check }); __22a['class'] = 'btn btn-primary'; const __23 = 'Check'; Array.isArray(__23) ? __22c.push(...__23) : __22c.push(__23); const __22 = blop.h('button', __22a, __22c); __17c.push(__22);\n      const __24c = []; const __24a = {}; __24a['type'] = 'button'; __24a['on'] = ({ click: hint }); __24a['class'] = 'btn'; const __25 = 'Hint'; Array.isArray(__25) ? __24c.push(...__25) : __24c.push(__25); const __24 = blop.h('button', __24a, __24c); __17c.push(__24);\n     const __17 = blop.h('form', __17a, __17c); __2c.push(__17);\n\n    const __26c = []; const __26a = {}; __26a['style'] = ({ minHeight: '400px' });\n      __27 = dog ? (() => {const __28c = []; const __28a = {}; __28a['src'] = `https://images.dog.ceo/breeds/${dog.breed}/${dog.image}`; __28a['style'] = ({ maxWidth: '400px' }); const __28 = blop.h('img', __28a, __28c); return __28;})() : (() => {const __29c = []; const __29a = {}; const __30 = 'Loading...'; Array.isArray(__30) ? __29c.push(...__30) : __29c.push(__30); const __29 = blop.h('h3', __29a, __29c); return __29;})(); Array.isArray(__27) ? __26c.push(...__27) : __26c.push(__27); ;\n     const __26 = blop.h('div', __26a, __26c); __2c.push(__26);\n\n   const __2 = blop.h('div', __2a, __2c); return __2;\n};\nmodule.exports = { getNewDog, DogGame };\n\n\n//# sourceURL=webpack:///./example/DogPage/DogBreedGame.blop?");

/***/ }),

/***/ "./example/DogPage/DogPage.blop":
/*!**************************************!*\
  !*** ./example/DogPage/DogPage.blop ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const blop = __webpack_require__(/*! ./src/runtime.js */ \"./src/runtime.js\");\nlet { DogGame } = __webpack_require__(/*! ./DogBreedGame.blop */ \"./example/DogPage/DogBreedGame.blop\");\nlet { getNewDog } = __webpack_require__(/*! ./services.blop */ \"./example/DogPage/services.blop\");\n\nfunction DogPage(attributes, _children, node) {let __2;\n  let { state } = attributes;\n  node.mount(async () => {\n    if ((!state.dogPage.choice)) {\n      await getNewDog(state);\n    }\n  });\n\n  const __1c = []; const __1a = {}; __1a['page'] = state.dogPage; __1a['state'] = state; __1a['loading'] = state.loading;\n    __2 = 'Dog breed game'; Array.isArray(__2) ? __1c.push(...__2) : __1c.push(__2); ;\n   const __1 = blop.c(DogGame, __1a, __1c, '__1'); return __1;\n};\nmodule.exports = { DogGame, getNewDog, DogPage };\n\n\n//# sourceURL=webpack:///./example/DogPage/DogPage.blop?");

/***/ }),

/***/ "./example/DogPage/services.blop":
/*!***************************************!*\
  !*** ./example/DogPage/services.blop ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const blop = __webpack_require__(/*! ./src/runtime.js */ \"./src/runtime.js\");\nlet { default: fetch } = __webpack_require__(/*! node-fetch */ \"node-fetch\");\n\nasync function getNewDog(state) {let response, message, bits;\n  state.loading = true;\n  try {\n    response = await fetch('https://dog.ceo/api/breeds/image/random');\n  } catch(e) {\n    console.log(e);\n    state.loading = e.message;\n    return \n  }\n  message = (await response.json()).message;\n  bits = message.split('/');\n  state.loading = false;\n\n\n  state.dogPage.choice = ({ url: message, breed: bits[4], image: bits[5] });\n};\nmodule.exports = { fetch, getNewDog };\n\n\n//# sourceURL=webpack:///./example/DogPage/services.blop?");

/***/ }),

/***/ "./example/FetchPage/FetchPage.blop":
/*!******************************************!*\
  !*** ./example/FetchPage/FetchPage.blop ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const blop = __webpack_require__(/*! ./src/runtime.js */ \"./src/runtime.js\");\n\nlet { Component } = blop;\n\nclass FetchPage extends Component {\n\n  render() {\n    const __1c = []; const __1a = {};\n      const __2c = []; const __2a = {}; const __3 = 'Using onMount to fetch data'; Array.isArray(__3) ? __2c.push(...__3) : __2c.push(__3); const __2 = blop.h('p', __2a, __2c); __1c.push(__2);\n      if (this.list) {\n        const __4c = []; const __4a = {};\n          let __6 = this.list; let __7 = Object.keys(__6); let _i__5; for(let __8=0; __8 < __7.length; __8++) { _i__5 = __7[__8]; let item = __6[_i__5];\n            const __9c = []; const __9a = {}; const __10 = item.name; Array.isArray(__10) ? __9c.push(...__10) : __9c.push(__10); const __9 = blop.h('li', __9a, __9c); __4c.push(__9);\n          };\n         const __4 = blop.h('ul', __4a, __4c); __1c.push(__4);\n      }\n     const __1 = blop.h('div', __1a, __1c); return __1;\n  }\n\n\n  async onMount() {let response;\n    response = await fetch('https://swapi.co/api/people/');\n    this.list = (await response.json()).results;\n    this.refresh();\n  }\n\n }\nmodule.exports = { Component, FetchPage };\n\n\n//# sourceURL=webpack:///./example/FetchPage/FetchPage.blop?");

/***/ }),

/***/ "./example/MemePage/MemeCard.blop":
/*!****************************************!*\
  !*** ./example/MemePage/MemeCard.blop ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const blop = __webpack_require__(/*! ./src/runtime.js */ \"./src/runtime.js\");\n\nfunction MemeCard(attributes) {\n  let { meme } = attributes;\n  const __1c = []; const __1a = {}; __1a['class'] = 'card mb-4 shadow-sm'; __1a['style'] = ({ minWidth: '200px' });\n    const __2c = []; const __2a = {}; __2a['class'] = 'card-header';\n      const __3c = []; const __3a = {}; __3a['class'] = 'my-0 font-weight-normal'; const __4 = meme.name; Array.isArray(__4) ? __3c.push(...__4) : __3c.push(__4); const __3 = blop.h('h4', __3a, __3c); __2c.push(__3);\n     const __2 = blop.h('div', __2a, __2c); __1c.push(__2);\n    const __5c = []; const __5a = {}; __5a['class'] = 'card-body';\n      const __6c = []; const __6a = {}; __6a['src'] = meme.url; __6a['style'] = ({ width: '100%' }); const __6 = blop.h('img', __6a, __6c); __5c.push(__6);\n     const __5 = blop.h('div', __5a, __5c); __1c.push(__5);\n   const __1 = blop.h('div', __1a, __1c); return __1;\n};\nmodule.exports = { MemeCard };\n\n\n//# sourceURL=webpack:///./example/MemePage/MemeCard.blop?");

/***/ }),

/***/ "./example/MemePage/MemePage.blop":
/*!****************************************!*\
  !*** ./example/MemePage/MemePage.blop ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const blop = __webpack_require__(/*! ./src/runtime.js */ \"./src/runtime.js\");\nlet { MemeCard } = __webpack_require__(/*! ./MemeCard.blop */ \"./example/MemePage/MemeCard.blop\");\nlet { getMemes } = __webpack_require__(/*! ./services.blop */ \"./example/MemePage/services.blop\");\n\nfunction MemePage(attributes, _children, node) {\n  let { state } = attributes;\n  node.mount(async () => {\n    console.log('mount MemePage');\n    await getMemes(state);\n  });\n  const __1c = []; const __1a = {};\n    const __2c = []; const __2a = {}; __2a['class'] = ({ 'card-deck': true, 'mb-3': true, 'text-center': true });\n      let __4 = state.memes; let _i__3=0; for(; _i__3 < __4.length; _i__3++) { let meme = __4[_i__3];\n        const __5c = []; const __5a = {}; __5a['meme'] = meme; const __5 = blop.c(MemeCard, __5a, __5c, '__5'); __2c.push(__5);\n      };\n     const __2 = blop.h('div', __2a, __2c); __1c.push(__2);\n   const __1 = blop.h('div', __1a, __1c); return __1;\n};\nmodule.exports = { MemeCard, getMemes, MemePage };\n\n\n//# sourceURL=webpack:///./example/MemePage/MemePage.blop?");

/***/ }),

/***/ "./example/MemePage/services.blop":
/*!****************************************!*\
  !*** ./example/MemePage/services.blop ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const blop = __webpack_require__(/*! ./src/runtime.js */ \"./src/runtime.js\");\nlet { default: fetch } = __webpack_require__(/*! node-fetch */ \"node-fetch\");\n\nasync function getMemes(state) {let response, message;\n  state.loading = true;\n  try {\n    response = await fetch('https://api.imgflip.com/get_memes');\n  } catch(e) {\n    console.log(e);\n    state.loading = e.message;\n    return \n  }\n  message = await response.json();\n  state.loading = false;\n  state.memes = message.data.memes;\n};\n\nmodule.exports = { fetch, getMemes };\n\n\n//# sourceURL=webpack:///./example/MemePage/services.blop?");

/***/ }),

/***/ "./example/PetStore/index.blop":
/*!*************************************!*\
  !*** ./example/PetStore/index.blop ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const blop = __webpack_require__(/*! ./src/runtime.js */ \"./src/runtime.js\");\nlet pageSize;\nlet { deletePets } = __webpack_require__(/*! ./services.blop */ \"./example/PetStore/services.blop\");\nlet { getPets } = __webpack_require__(/*! ./services.blop */ \"./example/PetStore/services.blop\");\n\nlet classes = __webpack_require__(/*! ./style.scss */ \"./example/PetStore/style.scss\");\n\npageSize = 10;\n\nfunction pagination(petStore) {let pets, pageIndex, nbPage, nextPage, previousPage, __4, __5;\n  pets = petStore.pets;\n  pageIndex = petStore.pageIndex;\n  nbPage = Math.ceil(pets.length / pageSize);\n  nextPage = (e) => {\n    e.preventDefault();\n    petStore.pageIndex += 1\n  };\n  previousPage = (e) => {\n    e.preventDefault();\n    petStore.pageIndex -= 1\n  };\n  const __1c = []; const __1a = {}; __1a['class'] = 'pagination';\n    if (pageIndex > 0) {\n      const __2c = []; const __2a = {}; __2a['href'] = '#'; __2a['class'] = `btn btn-outline-secondary btn-sm ${classes.previous}`; __2a['on'] = ({ click: previousPage }); const __3 = '< Previous page'; Array.isArray(__3) ? __2c.push(...__3) : __2c.push(__3); const __2 = blop.h('a', __2a, __2c); __1c.push(__2);\n      __4 = ' '; Array.isArray(__4) ? __1c.push(...__4) : __1c.push(__4); ;\n    }\n    __5 = `Page ${pageIndex + 1} on ${nbPage} `; Array.isArray(__5) ? __1c.push(...__5) : __1c.push(__5); ;\n    if (pageIndex < pets.length) {\n      const __6c = []; const __6a = {}; __6a['href'] = '#'; __6a['class'] = `btn btn-outline-secondary btn-sm ${classes.next}`; __6a['on'] = ({ click: nextPage }); const __7 = 'Next page >'; Array.isArray(__7) ? __6c.push(...__7) : __6c.push(__7); const __6 = blop.h('a', __6a, __6c); __1c.push(__6);\n    }\n   const __1 = blop.h('p', __1a, __1c); return __1;\n};\n\nfunction PetStore(attributes, _chilren, node) {let petStore, pets, pageIndex, start, page, deletePet, __10, __13, __18, __24, __29;\n  let { state } = attributes;\n  petStore = state.petStore;\n  pets = petStore.pets;\n  pageIndex = petStore.pageIndex;\n  start = pageIndex * pageSize;\n  page = petStore.pets.slice(start, (pageIndex + 1) * pageSize);\n\n  node.mount(() => {\n    console.log('mount PetStore');\n    getPets(state);\n  });\n\n  deletePet = (index, pet) =>() => {\n    deletePets(pet);\n    pets.splice(start + index, 1);\n  };\n  const __8c = []; const __8a = {}; __8a['class'] = classes.petstore;\n    const __9c = []; const __9a = {};\n      __10 = `Using the slow and buggy swagger pet API is a good test. Rendering ${pets.length} pets from `; Array.isArray(__10) ? __9c.push(...__10) : __9c.push(__10); ;\n      const __11c = []; const __11a = {}; __11a['href'] = 'https://petstore.swagger.io/'; const __12 = 'petstore.swagger.io'; Array.isArray(__12) ? __11c.push(...__12) : __11c.push(__12); const __11 = blop.h('a', __11a, __11c); __9c.push(__11);\n     const __9 = blop.h('p', __9a, __9c); __8c.push(__9);\n    if (petStore.pets.length) {\n      __13 = pagination(petStore); Array.isArray(__13) ? __8c.push(...__13) : __8c.push(__13); ;\n      const __14c = []; const __14a = {}; __14a['class'] = 'table';\n        let __15 = page; let key=0; for(; key < __15.length; key++) { let pet = __15[key];\n          // the key can help with the patching speed\n          const __16c = []; const __16a = {}; __16a['key'] = key;\n            const __17c = []; const __17a = {};\n              __18 = pet.name; Array.isArray(__18) ? __17c.push(...__18) : __17c.push(__18); ;\n             const __17 = blop.h('td', __17a, __17c); __16c.push(__17);\n            const __19c = []; const __19a = {};\n              if (pet.photoUrls) {\n                let __21 = pet.photoUrls; let __22 = Object.keys(__21); let _i__20; for(let __23=0; __23 < __22.length; __23++) { _i__20 = __22[__23]; let src = __21[_i__20];\n                  __24 = src.startsWith('http') ? (() => {const __25c = []; const __25a = {}; __25a['src'] = src; __25a['style'] = ({ width: '100px', height: '100px' }); const __25 = blop.h('img', __25a, __25c); return __25;})() : undefined; Array.isArray(__24) ? __19c.push(...__24) : __19c.push(__24); ;\n                };\n              }\n             const __19 = blop.h('td', __19a, __19c); __16c.push(__19);\n            const __26c = []; const __26a = {};\n              const __27c = []; const __27a = {}; __27a['class'] = 'btn btn-outline-danger btn-sm'; __27a['on'] = ({ click: deletePet(key, pet) }); const __28 = 'Delete'; Array.isArray(__28) ? __27c.push(...__28) : __27c.push(__28); const __27 = blop.h('button', __27a, __27c); __26c.push(__27);\n             const __26 = blop.h('td', __26a, __26c); __16c.push(__26);\n           const __16 = blop.h('tr', __16a, __16c); __14c.push(__16);\n        };\n       const __14 = blop.h('table', __14a, __14c); __8c.push(__14);\n      __29 = pagination(petStore); Array.isArray(__29) ? __8c.push(...__29) : __8c.push(__29); ;\n    } else {\n      const __30c = []; const __30a = {}; __30a['class'] = 'spinner-border text-primary'; __30a['role'] = 'status';\n        const __31c = []; const __31a = {}; __31a['class'] = 'sr-only'; const __32 = 'Loading...'; Array.isArray(__32) ? __31c.push(...__32) : __31c.push(__32); const __31 = blop.h('span', __31a, __31c); __30c.push(__31);\n       const __30 = blop.h('div', __30a, __30c); __8c.push(__30);\n    }\n   const __8 = blop.h('div', __8a, __8c); return __8;\n};\n\nmodule.exports = { deletePets, getPets, classes, pageSize, pagination, PetStore };\n\n\n//# sourceURL=webpack:///./example/PetStore/index.blop?");

/***/ }),

/***/ "./example/PetStore/services.blop":
/*!****************************************!*\
  !*** ./example/PetStore/services.blop ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const blop = __webpack_require__(/*! ./src/runtime.js */ \"./src/runtime.js\");\nlet { default: fetch } = __webpack_require__(/*! node-fetch */ \"node-fetch\");\n\nasync function getPets(state) {let response, petList;\n  state.loading = true;\n  try {\n    response = await fetch('https://petstore.swagger.io/v2/pet/findByStatus?status=available');\n  } catch(e) {\n    console.log(e);\n    state.loading = e.message;\n    return \n  }\n  petList = (await response.json());\n  \n  state.loading = false;\n  state.petStore.pets = petList;\n};\n\nasync function deletePets(pet) {\n  try {\n    await fetch(`https://petstore.swagger.io/v2/pet/${pet.id}`, ({\n      method: 'DELETE'\n    }));\n  } catch(e) {\n    console.log(e);\n    return \n  }\n};\nmodule.exports = { fetch, getPets, deletePets };\n\n\n//# sourceURL=webpack:///./example/PetStore/services.blop?");

/***/ }),

/***/ "./example/PetStore/style.scss":
/*!*************************************!*\
  !*** ./example/PetStore/style.scss ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("\n\n//# sourceURL=webpack:///./example/PetStore/style.scss?");

/***/ }),

/***/ "./example/TodoListPage/TodoListItem.blop":
/*!************************************************!*\
  !*** ./example/TodoListPage/TodoListItem.blop ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const blop = __webpack_require__(/*! ./src/runtime.js */ \"./src/runtime.js\");\nlet TodoListItem;\n\nTodoListItem = (attributes, _children) => {let hooks, __6;\n  let { value, changeItem: change, removeItem, editItem, editMode\n  } = attributes;\n\n\n  hooks = ({\n    insert: (vnode) => {\n      vnode.elm.focus();\n      vnode.elm.select();\n    }\n  });\n  const __1c = []; const __1a = {}; __1a['style'] = ({ marginBottom: '5px' });\n    const __2c = []; const __2a = {}; __2a['class'] = 'form-row';\n      const __3c = []; const __3a = {}; __3a['class'] = 'col';\n        if (editMode) {\n          const __4c = []; const __4a = {}; __4a['hooks'] = hooks; __4a['class'] = 'form-control'; __4a['type'] = 'text'; __4a['value'] = value; __4a['on'] = ({ change }); const __4 = blop.h('input', __4a, __4c); __3c.push(__4);\n        } else {\n          const __5c = []; const __5a = {}; __5a['on'] = ({ click: editItem }); __5a['style'] = ({ padding: '10px' });\n            __6 = value; Array.isArray(__6) ? __5c.push(...__6) : __5c.push(__6); ;\n           const __5 = blop.h('div', __5a, __5c); __3c.push(__5);\n        }\n       const __3 = blop.h('div', __3a, __3c); __2c.push(__3);\n      const __7c = []; const __7a = {}; __7a['class'] = 'col';\n        const __8c = []; const __8a = {}; __8a['class'] = 'btn btn-secondary'; __8a['on'] = ({ click: removeItem }); const __9 = 'delete'; Array.isArray(__9) ? __8c.push(...__9) : __8c.push(__9); const __8 = blop.h('button', __8a, __8c); __7c.push(__8);\n       const __7 = blop.h('div', __7a, __7c); __2c.push(__7);\n     const __2 = blop.h('div', __2a, __2c); __1c.push(__2);\n   const __1 = blop.h('li', __1a, __1c); return __1;\n};\n\n\nmodule.exports = { TodoListItem };\n\n\n//# sourceURL=webpack:///./example/TodoListPage/TodoListItem.blop?");

/***/ }),

/***/ "./example/TodoListPage/TodoListPage.blop":
/*!************************************************!*\
  !*** ./example/TodoListPage/TodoListPage.blop ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const blop = __webpack_require__(/*! ./src/runtime.js */ \"./src/runtime.js\");\nlet AutoFocusInput, TodoListPage;\n\nlet { TodoListItem } = __webpack_require__(/*! ./TodoListItem.blop */ \"./example/TodoListPage/TodoListItem.blop\");\n\nAutoFocusInput = (state) => {let hooks;\n  hooks = ({ insert: (vnode) =>vnode.elm.focus() });\n  const __1c = []; const __1a = {}; __1a['hooks'] = hooks; __1a['type'] = 'text'; __1a['value'] = state.value; __1a['class'] = 'form-control'; __1a['on'] = state.on; __1a['autofocus'] = true; __1a['style'] = ({ fontSize: '16px', padding: '0.5em' }); const __1 = blop.h('input', __1a, __1c); return __1;\n};\n\nTodoListPage = (attributes, _children, node) => {let addItem, change, editItem, changeItem, remove;\n  let { todo } = attributes;\n\n  function unselect() {\n    if (todo.editItemIndex !== false) {\n      todo.editItemIndex = false;\n    }\n  };\n\n  node.mount(() => {\n    console.log('mount TodoListPage');\n    document.addEventListener('click', unselect);\n  }).unmount(() => {\n    console.log('unmount TodoListPage');\n    document.removeEventListener('click', unselect);\n  });\n\n  addItem = (e) => {\n    e.preventDefault();\n    if (todo.inputValue) {\n      todo.todoList.push(todo.inputValue);\n      todo.inputValue = '';\n    }\n  };\n  change = (e) => {\n    todo.inputValue = e.target.value;\n  };\n\n  editItem = (index) =>(e) => {\n    e.stopPropagation();\n    todo.editItemIndex = index;\n  };\n  changeItem = (index) =>(e) => {\n    todo.editItemIndex = false;\n    todo.todoList[index] = e.target.value;\n  };\n  remove = (index) =>() => {\n    todo.editItemIndex = false;\n    todo.todoList.splice(index, 1);\n  };\n  const __2c = []; const __2a = {};\n    const __3c = []; const __3a = {}; __3a['on'] = ({ submit: addItem });\n      const __4c = []; const __4a = {}; __4a['class'] = 'form-row';\n        const __5c = []; const __5a = {}; __5a['class'] = 'col';\n          const __6c = []; const __6a = {}; __6a['value'] = todo.inputValue; __6a['on'] = ({ change }); const __6 = blop.c(AutoFocusInput, __6a, __6c, '__6'); __5c.push(__6);\n         const __5 = blop.h('div', __5a, __5c); __4c.push(__5);\n        const __7c = []; const __7a = {}; __7a['class'] = 'col';\n          const __8c = []; const __8a = {}; __8a['type'] = 'button'; __8a['class'] = 'btn btn-primary'; __8a['on'] = ({ click: addItem }); const __9 = 'Add to list'; Array.isArray(__9) ? __8c.push(...__9) : __8c.push(__9); const __8 = blop.h('button', __8a, __8c); __7c.push(__8);\n         const __7 = blop.h('div', __7a, __7c); __4c.push(__7);\n       const __4 = blop.h('div', __4a, __4c); __3c.push(__4);\n     const __3 = blop.h('form', __3a, __3c); __2c.push(__3);\n    const __10c = []; const __10a = {};\n      let __11 = todo.todoList; let __12 = Object.keys(__11); let index; for(let __13=0; __13 < __12.length; __13++) { index = __12[__13]; let value = __11[index];\n        const __14c = []; const __14a = {}; __14a['removeItem'] = remove(index); __14a['editItem'] = editItem(index); __14a['changeItem'] = changeItem(index); __14a['editMode'] = todo.editItemIndex === index; __14a['todo'] = todo; __14a['value'] = value; const __14 = blop.c(TodoListItem, __14a, __14c, '__14'); __10c.push(__14);\n      };\n     const __10 = blop.h('ul', __10a, __10c); __2c.push(__10);\n   const __2 = blop.h('div', __2a, __2c); return __2;\n};\n\nmodule.exports = { TodoListItem, AutoFocusInput, TodoListPage };\n\n\n//# sourceURL=webpack:///./example/TodoListPage/TodoListPage.blop?");

/***/ }),

/***/ "./example/index.blop":
/*!****************************!*\
  !*** ./example/index.blop ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const blop = __webpack_require__(/*! ./src/runtime.js */ \"./src/runtime.js\");\nlet Index;\nlet { MemePage } = __webpack_require__(/*! ./MemePage/MemePage.blop */ \"./example/MemePage/MemePage.blop\");\nlet { DogPage } = __webpack_require__(/*! ./DogPage/DogPage.blop */ \"./example/DogPage/DogPage.blop\");\nlet { PetStore } = __webpack_require__(/*! ./PetStore/index.blop */ \"./example/PetStore/index.blop\");\nlet { TodoListPage } = __webpack_require__(/*! ./TodoListPage/TodoListPage.blop */ \"./example/TodoListPage/TodoListPage.blop\");\nlet { CounterPage } = __webpack_require__(/*! ./ComponentState/ComponentStatePage.blop */ \"./example/ComponentState/ComponentStatePage.blop\");\nlet { FetchPage } = __webpack_require__(/*! ./FetchPage/FetchPage.blop */ \"./example/FetchPage/FetchPage.blop\");\nlet { saveState } = __webpack_require__(/*! ./services.blop */ \"./example/services.blop\");\nlet style = __webpack_require__(/*! ./style.css */ \"./example/style.css\");\n\nfunction navigationLinks(state) {\n  function memePage(e) {\n    state.$.router.go('/meme');\n    e.preventDefault();\n  };\n  function dogPage(e) {\n    state.$.router.go('/dogs');\n    e.preventDefault();\n  };\n  function todoPage(e) {\n    state.$.router.go('/todo');\n    e.preventDefault();\n  };\n  function petStorePage(e) {\n    state.$.router.go('/petstore');\n    e.preventDefault();\n  };\n  function statePage(e) {\n    state.$.router.go('/state');\n    e.preventDefault();\n  };\n  function fetchPage(e) {\n    state.$.router.go('/fetch');\n    e.preventDefault();\n  };\n  return ({ memePage, dogPage, todoPage, petStorePage, statePage, fetchPage })\n};\n\nfunction linkList(state) {let links;\n  links = navigationLinks(state);\n  const __1c = []; const __1a = {};\n    const __2c = []; const __2a = {};\n      const __3c = []; const __3a = {}; __3a['href'] = '/dog'; __3a['on'] = ({ click: links.dogPage }); const __4 = 'Dog breed guessing game'; Array.isArray(__4) ? __3c.push(...__4) : __3c.push(__4); const __3 = blop.h('a', __3a, __3c); __2c.push(__3);\n     const __2 = blop.h('p', __2a, __2c); __1c.push(__2);\n    const __5c = []; const __5a = {};\n      const __6c = []; const __6a = {}; __6a['href'] = '/petstore'; __6a['on'] = ({ click: links.petStorePage }); const __7 = 'A pet store'; Array.isArray(__7) ? __6c.push(...__7) : __6c.push(__7); const __6 = blop.h('a', __6a, __6c); __5c.push(__6);\n     const __5 = blop.h('p', __5a, __5c); __1c.push(__5);\n    const __8c = []; const __8a = {};\n      const __9c = []; const __9a = {}; __9a['href'] = '/meme'; __9a['on'] = ({ click: links.memePage }); const __10 = 'Blank meme page'; Array.isArray(__10) ? __9c.push(...__10) : __9c.push(__10); const __9 = blop.h('a', __9a, __9c); __8c.push(__9);\n     const __8 = blop.h('p', __8a, __8c); __1c.push(__8);\n    const __11c = []; const __11a = {};\n      const __12c = []; const __12a = {}; __12a['href'] = '/todo'; __12a['on'] = ({ click: links.todoPage }); const __13 = 'A basic todo app'; Array.isArray(__13) ? __12c.push(...__13) : __12c.push(__13); const __12 = blop.h('a', __12a, __12c); __11c.push(__12);\n     const __11 = blop.h('p', __11a, __11c); __1c.push(__11);\n    const __14c = []; const __14a = {};\n      const __15c = []; const __15a = {}; __15a['href'] = '/state'; __15a['on'] = ({ click: links.statePage }); const __16 = 'Component state'; Array.isArray(__16) ? __15c.push(...__16) : __15c.push(__16); const __15 = blop.h('a', __15a, __15c); __14c.push(__15);\n     const __14 = blop.h('p', __14a, __14c); __1c.push(__14);\n    const __17c = []; const __17a = {};\n      const __18c = []; const __18a = {}; __18a['href'] = '/fetch'; __18a['on'] = ({ click: links.fetchPage }); const __19 = 'Fetch state'; Array.isArray(__19) ? __18c.push(...__19) : __18c.push(__19); const __18 = blop.h('a', __18a, __18c); __17c.push(__18);\n     const __17 = blop.h('p', __17a, __17c); __1c.push(__17);\n   const __1 = blop.h('div', __1a, __1c); return __1;\n};\n\nfunction navigation(state) {let links, __26, __31, __32, __33, __34, __35, __36, __41, __45, __47;\n  links = navigationLinks(state);\n\n  function saveStateEvent(e) {\n    saveState(state);\n    e.preventDefault();\n  };\n\n  function navItem(type, go, name) {let classes, __22;\n    classes = 'nav-item';\n    if (state.page === type) {\n      classes = `${classes} active`;\n    }\n    const __20c = []; const __20a = {}; __20a['class'] = classes;\n      const __21c = []; const __21a = {}; __21a['href'] = `/${type}`; __21a['class'] = 'nav-link'; __21a['on'] = ({ click: go });\n        __22 = name; Array.isArray(__22) ? __21c.push(...__22) : __21c.push(__22); ;\n       const __21 = blop.h('a', __21a, __21c); __20c.push(__21);\n     const __20 = blop.h('li', __20a, __20c); return __20;\n  };\n\n  const __23c = []; const __23a = {}; __23a['class'] = 'navbar navbar-expand-lg navbar-light bg-light';\n    const __24c = []; const __24a = {}; __24a['class'] = 'navbar-brand'; __24a['href'] = '/';\n      const __25c = []; const __25a = {}; __25a['src'] = '/blop/favicon.ico'; __25a['width'] = '38'; __25a['height'] = '30'; __25a['class'] = 'd-inline-block align-top'; __25a['alt'] = ''; const __25 = blop.h('img', __25a, __25c); __24c.push(__25);\n      __26 = ' Blop'; Array.isArray(__26) ? __24c.push(...__26) : __24c.push(__26); ;\n     const __24 = blop.h('a', __24a, __24c); __23c.push(__24);\n    const __27c = []; const __27a = {}; __27a['class'] = 'navbar-toggler'; __27a['type'] = 'button'; __27a['data-toggle'] = 'collapse'; __27a['data-target'] = '#navbarSupportedContent'; __27a['aria-controls'] = 'navbarSupportedContent'; __27a['aria-expanded'] = 'false'; __27a['aria-label'] = 'Toggle navigation';\n      const __28c = []; const __28a = {}; __28a['class'] = 'navbar-toggler-icon'; const __28 = blop.h('span', __28a, __28c); __27c.push(__28);\n     const __27 = blop.h('button', __27a, __27c); __23c.push(__27);\n    const __29c = []; const __29a = {}; __29a['class'] = 'collapse navbar-collapse'; __29a['id'] = 'navbarSupportedContent';\n      const __30c = []; const __30a = {}; __30a['class'] = 'navbar-nav mr-auto';\n        __31 = navItem('dog', links.dogPage, 'Breed game'); Array.isArray(__31) ? __30c.push(...__31) : __30c.push(__31); ;\n        __32 = navItem('petstore', links.petStorePage, 'Pet store'); Array.isArray(__32) ? __30c.push(...__32) : __30c.push(__32); ;\n        __33 = navItem('meme', links.memePage, 'Memes'); Array.isArray(__33) ? __30c.push(...__33) : __30c.push(__33); ;\n        __34 = navItem('todo', links.todoPage, 'A basic todo app'); Array.isArray(__34) ? __30c.push(...__34) : __30c.push(__34); ;\n        __35 = navItem('state', links.statePage, 'Components and state'); Array.isArray(__35) ? __30c.push(...__35) : __30c.push(__35); ;\n        __36 = navItem('fetch', links.fetchPage, 'Fetch component'); Array.isArray(__36) ? __30c.push(...__36) : __30c.push(__36); ;\n       const __30 = blop.h('ul', __30a, __30c); __29c.push(__30);\n      const __37c = []; const __37a = {}; __37a['class'] = 'right-buttons';\n        if ((state.loading)) {\n          const __38c = []; const __38a = {}; __38a['class'] = 'spinner-border text-primary'; __38a['role'] = 'status'; __38a['style'] = ({ marginRight: '1em' });\n            const __39c = []; const __39a = {}; __39a['class'] = 'sr-only'; const __40 = 'Loading...'; Array.isArray(__40) ? __39c.push(...__40) : __39c.push(__40); const __39 = blop.h('span', __39a, __39c); __38c.push(__39);\n           const __38 = blop.h('div', __38a, __38c); __37c.push(__38);\n        }\n        __41 = state.error ? (() => {const __42c = []; const __42a = {}; const __43 = `Error ${state.error}`; Array.isArray(__43) ? __42c.push(...__43) : __42c.push(__43); const __42 = blop.h('p', __42a, __42c); return __42;})() : undefined; Array.isArray(__41) ? __37c.push(...__41) : __37c.push(__41); ;\n        const __44c = []; const __44a = {}; __44a['href'] = 'https://github.com/batiste/blop-language'; __44a['class'] = 'btn btn-secondary';\n          __45 = 'Blop on github'; Array.isArray(__45) ? __44c.push(...__45) : __44c.push(__45); ;\n         const __44 = blop.h('a', __44a, __44c); __37c.push(__44);\n        const __46c = []; const __46a = {}; __46a['on'] = ({ click: saveStateEvent }); __46a['class'] = 'btn btn-secondary';\n          __47 = 'Save locale state on server'; Array.isArray(__47) ? __46c.push(...__47) : __46c.push(__47); ;\n         const __46 = blop.h('button', __46a, __46c); __37c.push(__46);\n       const __37 = blop.h('div', __37a, __37c); __29c.push(__37);\n     const __29 = blop.h('div', __29a, __29c); __23c.push(__29);\n   const __23 = blop.h('nav', __23a, __23c); return __23;\n};\n\nIndex = (state) => {let __49, __60;\n  function indexPage(e) {\n    state.$.router.go('/');\n    e.preventDefault();\n  };\n  const __48c = []; const __48a = {};\n    __49 = navigation(state); Array.isArray(__49) ? __48c.push(...__49) : __48c.push(__49); ;\n    const __50c = []; const __50a = {}; __50a['class'] = `${style.container} container`;\n      const __51c = []; const __51a = {};\n        const __52c = []; const __52a = {}; const __53 = state.page; Array.isArray(__53) ? __52c.push(...__53) : __52c.push(__53); const __52 = blop.h('b', __52a, __52c); __51c.push(__52);\n       const __51 = blop.h('h1', __51a, __51c); __50c.push(__51);\n      if (state.page === 'dog') {\n        const __54c = []; const __54a = {}; __54a['state'] = state; const __54 = blop.c(DogPage, __54a, __54c, '__54'); __50c.push(__54);\n      } else if (state.page === 'meme') {\n        const __55c = []; const __55a = {}; __55a['state'] = state; const __55 = blop.c(MemePage, __55a, __55c, '__55'); __50c.push(__55);\n      } else if (state.page === 'todo') {\n        const __56c = []; const __56a = {}; __56a['todo'] = state; const __56 = blop.c(TodoListPage, __56a, __56c, '__56'); __50c.push(__56);\n      } else if (state.page === 'petstore') {\n        const __57c = []; const __57a = {}; __57a['state'] = state; const __57 = blop.c(PetStore, __57a, __57c, '__57'); __50c.push(__57);\n      } else if (state.page === 'state') {\n        const __58c = []; const __58a = {}; __58a['state'] = state; const __58 = blop.c(CounterPage, __58a, __58c, '__58'); __50c.push(__58);\n      } else if (state.page === 'fetch') {\n        const __59c = []; const __59a = {}; __59a['state'] = state; const __59 = blop.c(FetchPage, __59a, __59c, '__59'); __50c.push(__59);\n      } else {\n        __60 = linkList(state); Array.isArray(__60) ? __50c.push(...__60) : __50c.push(__60); ;\n      }\n     const __50 = blop.h('div', __50a, __50c); __48c.push(__50);\n   const __48 = blop.h('div', __48a, __48c); return __48;\n};\nmodule.exports = { MemePage, DogPage, PetStore, TodoListPage, CounterPage, FetchPage, saveState, style, navigationLinks, linkList, navigation, Index };\n\n\n//# sourceURL=webpack:///./example/index.blop?");

/***/ }),

/***/ "./example/lib/router.blop":
/*!*********************************!*\
  !*** ./example/lib/router.blop ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const blop = __webpack_require__(/*! ./src/runtime.js */ \"./src/runtime.js\");\nlet mockWindow;\n\nfunction escapeRegExp(str) {\n  return str.replace(/[.*+?^${}()|[\\]\\\\\\/]/g, '\\\\$&')\n};\n\nfunction createRegExp(str) {let escapedStr, names;\n  escapedStr = escapeRegExp(str);\n  names = [];\n  escapedStr = escapedStr.replace(/\\:(\\w+)/g, (_a, b) => {\n    names.push(b);\n    return '([\\\\w\\\\.\\\\-\\\\_]+)'\n  });\n  return ({ regexp: `^${escapedStr}`, names })\n};\n\nmockWindow = ({\n  addEventListener: () => {},\n  location: ({ pathname: '/' }),\n  history: ({ pushState: () => {} })\n});\n\nclass Router {\n  constructor(initial, state, global=mockWindow) {\n    this.routes = [];\n    this.state = state;\n    this.state.$.router = this;\n    this.global = global;\n    global.addEventListener('popstate', (e) => {let matchedRoute;\n      if (e.state === null) {\n        initial && initial();\n      } else {\n        matchedRoute = this.routes.find(\n          (route) =>route.path === e.state.path);\n        matchedRoute && matchedRoute.handler(e.state.params, this.state);\n      }\n    });\n  }\n\n  init() {\n    this.go(this.global.location.pathname, true);\n  }\n\n  add(route) {\n    let { regexp, names } = createRegExp(route.path);\n    route.reg = new RegExp(regexp);\n    route.params = names;\n    this.routes.push(route);\n  }\n\n  match(path) {let m, params, matchedRoute;\n    m = null;\n    params = ({});\n    matchedRoute = this.routes.find((route) => {\n      m = path.match(route.reg);\n      if (m) {\n        if (route.params) {\n          let __1 = route.params; let index=0; for(; index < __1.length; index++) { let value = __1[index];\n            params[value] = m[1 + index];\n          };\n        }\n        return true\n      }\n    });\n    if (matchedRoute) {\n      return ({ route: matchedRoute, params: params })\n    }\n  }\n\n  async go(path, push=true) {let m;\n    m = this.match(path);\n    if (!m) {\n      console.log(`No route for path ${path}`);\n      return \n    }\n    if (push) {\n      this.global.history.pushState(({\n          name: m.route.name,\n          path: m.route.path,\n          params: m.params\n        }),\n        m.route.name, path);\n    }\n    if (m.route.handler) {\n      await m.route.handler(m.params, this.state);\n    }\n  }\n\n }\n\nmodule.exports = { escapeRegExp, createRegExp, mockWindow, Router };\n\n\n//# sourceURL=webpack:///./example/lib/router.blop?");

/***/ }),

/***/ "./example/lib/state.blop":
/*!********************************!*\
  !*** ./example/lib/state.blop ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const blop = __webpack_require__(/*! ./src/runtime.js */ \"./src/runtime.js\");\nfunction isObject(value) {\n  if (value === null || value === undefined) {\n    return false\n  }\n  return value.constructor === Object || typeof value === 'object'\n};\n\nfunction create(state, options=({ readOnly: false })) {let modifications, callbacks, hasBeenFlushed, root;\n  modifications = [];\n  callbacks = [];\n  let { readOnly } = options;\n  hasBeenFlushed = false;\n  function flush() {\n    modifications.splice(0, modifications.length); // retain the ref. on the array\n    hasBeenFlushed = true;\n  };\n  function listen(callback) {\n    callbacks.push(callback);\n  };\n  function trigger(path) {\n    callbacks.forEach((fct) =>fct(path));\n  };\n  root = ({\n    flush,\n    listen,\n    trigger,\n    modifications,\n    raw: state\n  });\n  function handler(currentState, path='') {\n    function hasChanged(extrapath='') {let completePath;\n      // just to return true on the first time\n      if (!hasBeenFlushed) {\n        return true\n      }\n      completePath = `${path}${extrapath}`;\n      return !!modifications.find(\n        (modification) =>modification.path.startsWith(completePath))\n    };\n    return ({\n      get: (function (obj, prop) {\n        if (prop === '$') {\n          return root\n        }\n        if (prop === 'hasChanged') {\n          return hasChanged\n        }\n        // be sure to not double wrap a Proxy\n        if (isObject(obj[prop]) && !obj[prop].$) {\n          return new Proxy(\n            currentState[prop],\n            handler(currentState[prop],\n            `${path}.${prop}`, currentState))\n        }\n        return obj[prop]\n      }),\n      set: (function (obj, prop, value) {\n        if (readOnly) {\n          throw new Error(`${obj}.${prop} is read only`)\n        }\n        if (prop === '$') {\n          throw new Error('You cannot redefine the $ property in a proxied state')\n        }\n\n        modifications.push(({ path: `${path}.${prop}`, action: 'set', value }));\n        obj[prop] = value;\n        trigger(`${path}.${prop}`);\n        return true\n      }),\n      deleteProperty: (function (target, prop) {\n        if (readOnly) {\n          throw new Error(`target.${prop} is read only`)\n        }\n\n        if (target.hasOwnProperty(prop)) {\n          modifications.push(({ path: `${path}.${prop}`, action: 'delete' }));\n          delete target[prop];\n        } else {\n          return false\n        }\n        trigger(`${path}.${prop}`);\n        return true\n      })\n    })\n  };\n  return new Proxy(state, handler(state))\n};\n\nmodule.exports = { isObject, create };\n\n\n//# sourceURL=webpack:///./example/lib/state.blop?");

/***/ }),

/***/ "./example/routing.blop":
/*!******************************!*\
  !*** ./example/routing.blop ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const blop = __webpack_require__(/*! ./src/runtime.js */ \"./src/runtime.js\");\nlet { Router } = __webpack_require__(/*! ./lib/router.blop */ \"./example/lib/router.blop\");\n\nasync function indexHandler(_params, state) {\n  state.page = 'index';\n  console.log('indexHandler called');\n};\n\nasync function dogPageIndexHandler(params, state) {\n  state.page = 'dog';\n  console.log('doggyIndexHandler called with', params);\n};\n\nfunction dogPageHandler(params, state) {\n  state.page = 'dog';\n  console.log('doggyHanlder called with', params);\n  state.dogPage.choice = ({ breed: params.breed, image: params.image });\n};\n\nasync function memePageHandler(params, state) {\n  state.page = 'meme';\n  console.log('memePageHandler called with', params);\n};\n\nfunction todoPageHandler(params, state) {\n  state.page = 'todo';\n  console.log('todoIndexHandler called with', params);\n};\n\nfunction statePageHandler(params, state) {\n  state.page = 'state';\n  console.log('statePageHandler called with', params);\n};\n\nasync function petStorePageIndexHandler(params, state) {\n  state.page = 'petstore';\n  console.log('petStorePageIndexHandler called with', params);\n};\n\nfunction createRouter(state, global) {let router;\n  router = new Router(null, state, global);\n\n  router.add(({ path: '/todo', name: 'todo', handler: todoPageHandler }));\n  router.add(({ path: '/meme', name: 'meme', handler: memePageHandler }));\n  router.add(({ path: '/dogs/:breed/:image', name: 'doggy', handler: dogPageHandler }));\n  router.add(({ path: '/dogs', name: 'dog', handler: dogPageIndexHandler }));\n  router.add(({ path: '/petstore', name: 'petstore', handler: petStorePageIndexHandler }));\n  router.add(({ path: '/state', name: 'componentstate', handler: statePageHandler }));\n  router.add(({ path: '/fetch', name: 'fetch', handler: () => {\n    state.page = 'fetch';\n    console.log('fetch called');\n  } }));\n  router.add(({ path: '/', name: 'root', handler: indexHandler }));\n\n  router.init();\n  return router\n};\nmodule.exports = { Router, indexHandler, dogPageIndexHandler, dogPageHandler, memePageHandler, todoPageHandler, statePageHandler, petStorePageIndexHandler, createRouter };\n\n\n//# sourceURL=webpack:///./example/routing.blop?");

/***/ }),

/***/ "./example/server.blop":
/*!*****************************!*\
  !*** ./example/server.blop ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const blop = __webpack_require__(/*! ./src/runtime.js */ \"./src/runtime.js\");\nlet app, compiler, instance, savedState, render;\nlet express = __webpack_require__(/*! express */ \"express\");\nlet { Index } = __webpack_require__(/*! ./index.blop */ \"./example/index.blop\");\nlet { createState } = __webpack_require__(/*! ./state.blop */ \"./example/state.blop\");\nlet { createRouter } = __webpack_require__(/*! ./routing.blop */ \"./example/routing.blop\");\nlet webpack = __webpack_require__(/*! webpack */ \"webpack\");\nlet middleware = __webpack_require__(/*! webpack-dev-middleware */ \"webpack-dev-middleware\");\nlet hotMiddleware = __webpack_require__(/*! webpack-hot-middleware */ \"webpack-hot-middleware\");\nlet toHTML = __webpack_require__(/*! snabbdom-to-html */ \"snabbdom-to-html\");\nlet nodepath = __webpack_require__(/*! path */ \"path\");\nlet webpackClientConf = __webpack_require__(/*! ../webpack.client.js */ \"./webpack.client.js\");\nlet bodyParser = __webpack_require__(/*! body-parser */ \"body-parser\");\n\napp = express();\napp.use(bodyParser.json());\n\n// we only rebuild the client config\ncompiler = webpack(webpackClientConf);\napp.use(hotMiddleware(compiler));\n\ninstance = middleware(compiler, ({\n  noInfo: true,\n  publicPath: '/'\n}));\n\n/* a singleton in memory, should be in a DB\n   and for each user */\nsavedState = null;\n\nrender = async (path) => {let state, router, tree;\n  state = createState(savedState);\n  router = createRouter(state);\n  await router.go(path);\n  tree = Index(state);\n  console.log(`Server render executed for ${path}`);\n  return tree\n};\n\napp.use(instance);\n\napp.get('/blop/favicon.ico', (_req, res) => {\n  res.sendFile(nodepath.resolve('./img/blop.png'));\n});\n\napp.post('/api/saveState', (req, res) => {\n  savedState = req.body;\n  res.send('Application state properly saved on server');\n});\n\nfunction escapeJSON(json) {\n  return JSON.stringify(json).replace(/</gm, '&lt;')\n};\n\napp.use(async (req, res) => {let html, state;\n  html = toHTML(await render(req.path));\n  state = createState(savedState);\n  res.send(`\n    <html>\n      <head>\n        <title>Blop language example</title>\n        <link rel=\"stylesheet\" href=\"https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css\" integrity=\"sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T\" crossorigin=\"anonymous\">\n      </head>\n      <body>\n        <div id=\"app\">\n          ${html}\n        </div>\n      </body>\n      <script>window.INITIAL_STATE = ${escapeJSON(savedState || state)}</script>\n      <script src=\"/client.js\"></script>\n      <script src=\"https://code.jquery.com/jquery-3.3.1.slim.min.js\" integrity=\"sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo\" crossorigin=\"anonymous\"></script>\n      <script src=\"https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js\" integrity=\"sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM\" crossorigin=\"anonymous\"></script>\n    </html>\n  `);\n});\n\nfunction serverReady() {let GREEN, NC;\n  GREEN = '\\x1b[32m';\n  NC = '\\x1B[0m';\n  console.log(`${GREEN}[server]${NC} Running on http://localhost:3000`);\n};\n\napp.listen(3000, serverReady);\ninstance.waitUntilValid(serverReady);\n\nmodule.exports = { express, Index, createState, createRouter, webpack, middleware, hotMiddleware, toHTML, nodepath, webpackClientConf, bodyParser, app, compiler, instance, savedState, render, escapeJSON, serverReady };\n\n\n//# sourceURL=webpack:///./example/server.blop?");

/***/ }),

/***/ "./example/services.blop":
/*!*******************************!*\
  !*** ./example/services.blop ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const blop = __webpack_require__(/*! ./src/runtime.js */ \"./src/runtime.js\");\nlet { default: fetch } = __webpack_require__(/*! node-fetch */ \"node-fetch\");\n\nasync function saveState(state) {let body, response;\n  state.loading = false; // be sure to not save a loading state\n  body = JSON.stringify(state.$.raw);\n  state.loading = true;\n  try {\n    response = await fetch('/api/saveState', ({\n      method: 'POST',\n      headers: ({\n        'Content-Type': 'application/json'\n      }),\n      body\n    }));\n    console.log(await response.text());\n  } catch(e) {\n    state.error = e.message;\n    state.loading = false;\n    throw e\n  }\n  state.loading = false;\n};\nmodule.exports = { fetch, saveState };\n\n\n//# sourceURL=webpack:///./example/services.blop?");

/***/ }),

/***/ "./example/state.blop":
/*!****************************!*\
  !*** ./example/state.blop ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const blop = __webpack_require__(/*! ./src/runtime.js */ \"./src/runtime.js\");\nlet state;\nlet create = __webpack_require__(/*! ./lib/state.blop */ \"./example/lib/state.blop\").create;\n\nstate = ({\n  todoList: [\n    'Buy some milk',\n    'Take out the trash',\n    'Recycle'\n  ],\n  dogPage: ({ score: 0, attempt: 0, success: 0 }),\n  petStore: ({ pets: [], pageIndex: 0 }),\n  page: 'index',\n  memes: [],\n  loading: false\n});\n\n\nfunction createState(initialState) {\n  return create(initialState || state)\n};\n\nmodule.exports = { create, state, createState };\n\n\n//# sourceURL=webpack:///./example/state.blop?");

/***/ }),

/***/ "./example/style.css":
/*!***************************!*\
  !*** ./example/style.css ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("\n\n//# sourceURL=webpack:///./example/style.css?");

/***/ }),

/***/ "./src/runtime.js":
/*!************************!*\
  !*** ./src/runtime.js ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const snabbdom = __webpack_require__(/*! snabbdom */ \"snabbdom\");\nconst attributes = __webpack_require__(/*! snabbdom/modules/attributes */ \"snabbdom/modules/attributes\");\nconst style = __webpack_require__(/*! snabbdom/modules/style */ \"snabbdom/modules/style\");\nconst sclass = __webpack_require__(/*! snabbdom/modules/class */ \"snabbdom/modules/class\");\nconst eventlisteners = __webpack_require__(/*! snabbdom/modules/eventlisteners */ \"snabbdom/modules/eventlisteners\");\nconst snabbdomh = __webpack_require__(/*! snabbdom/h */ \"snabbdom/h\");\nconst toVNode = __webpack_require__(/*! snabbdom/tovnode */ \"snabbdom/tovnode\").default;\n\n// the node being currently rendered\nlet currentNode = null;\n// this is the component state cache\nlet cache = {};\n// this is the next cache that replace cache after a full re-render\nlet nextCache = {};\n\n// eslint-disable-next-line arrow-body-style\nconst componentPath = (name) => {\n  return currentNode\n    ? `${currentNode.path}.${currentNode.componentsChildren.length}.${name}`\n    : name;\n};\n\nclass Component {\n  constructor(ComponentFct, attributes, children, name) {\n    if (ComponentFct === null) {\n      if (!this.render) {\n        throw new Error('Component should implement the render() method');\n      }\n      this.componentFct = this.render;\n    } else {\n      this.componentFct = ComponentFct;\n    }\n    this.attributes = attributes || {};\n    this.children = children || [];\n    this.name = name;\n    if (name === 'root') {\n      this.path = 'root';\n    } else {\n      this.path = componentPath(name);\n    }\n    this.componentsChildren = [];\n    this.listeners = [];\n    this.life = { mount: [], unmount: [] };\n    this.vnode = null;\n    this.parent = currentNode;\n    this.state = {};\n    this.context = {};\n    this.mounted = false;\n    this.destroyed = false;\n    cache[this.path] = this;\n  }\n\n  // called on a partial render\n  partialRender() {\n    const parentNode = currentNode;\n    currentNode = this;\n    this._resetForRender();\n    const newVnode = this.renderComponent();\n    const thunk = patch(this.vnode, newVnode);\n    copyToThunk(thunk, this.vnode);\n    currentNode = parentNode;\n  }\n\n  refresh() {\n    if (this.destroyed) return;\n    scheduleRender(this);\n  }\n\n  renderComponent() {\n    try {\n      return this.componentFct(this.attributes, this.children, this);\n    } catch (e) {\n      console.error(e);\n      return h('span', {}, [e.message]);\n    }\n  }\n\n  onMount() { return this; }\n\n  onUnmount() { return this; }\n\n  mount(func) {\n    if (this.mounted) return this;\n    this.life.mount.push(func);\n    return this;\n  }\n\n  unmount(func) {\n    if (this.mounted) return this;\n    this.life.unmount.push(func);\n    return this;\n  }\n\n  useState(name, initialValue) {\n    this.state[name] = this.state[name] || initialValue;\n    const value = this.state[name];\n    const setState = (newState) => {\n      this.state[name] = newState;\n      scheduleRender(this);\n    };\n    return { value, setState, getState: () => this.state[name] };\n  }\n\n  useContext(name, initialValue) {\n    this.listeners[name] = [];\n    if (initialValue && this.context[name] === undefined) {\n      this.context[name] = initialValue;\n    }\n    const setContext = (value) => {\n      this.context[name] = value;\n      this.listeners[name].forEach((node) => {\n        scheduleRender(node);\n      });\n    };\n    const getContext = () => {\n      let node = this;\n      const requestingNode = currentNode;\n      while (node) {\n        if (node.context[name] !== undefined) {\n          if (!node.listeners[name].includes(requestingNode) && requestingNode !== node) {\n            node.listeners[name].push(requestingNode);\n          }\n          return node.context[name];\n        }\n        node = node.parent;\n      }\n    };\n    const value = initialValue || getContext();\n    return { setContext, getContext, value };\n  }\n\n  _resetForRender() {\n    this.componentsChildren = [];\n    this.listeners = [];\n  }\n\n  _render(attributes, children) {\n    const parentNode = currentNode;\n    this.attributes = attributes;\n    this.children = children;\n    currentNode = this;\n    this._resetForRender();\n    const newVnode = this.renderComponent();\n    if (!this.mounted) {\n      this._mount();\n    }\n    parentNode && parentNode.componentsChildren.push(this);\n    nextCache[this.path] = this;\n    this.vnode = newVnode;\n    currentNode = parentNode;\n    return this.vnode;\n  }\n\n  _unmount() {\n    this.onUnmount();\n    this.life.unmount.forEach(fct => fct());\n    this.mounted = false;\n    this.life.unmount = [];\n  }\n\n  _mount() {\n    // do not mount in node\n    if ((process && process.title === 'node') || this.mounted) {\n      return;\n    }\n    this.onMount();\n    this.life.mount.forEach(fct => fct());\n    this.mounted = true;\n    this.life.mount = [];\n  }\n\n  _destroy() {\n    this.destroyed = true;\n    this._unmount();\n    this.parent = null;\n    this.children = [];\n    this.state = {};\n    // delete cache[this.name];\n    this.context = {};\n    this.componentsChildren = [];\n  }\n}\n\nfunction isClass(v) {\n  return typeof v === 'function' && /^\\s*class\\s+/.test(v.toString());\n}\n\nfunction createComponent(ComponentFct, attributes, children, name) {\n  const path = componentPath(name);\n  if (cache[path]) {\n    return cache[path]._render(attributes, children);\n  }\n  let component;\n  if (isClass(ComponentFct)) {\n    component = new ComponentFct(null, attributes, children, name);\n  } else {\n    component = new Component(ComponentFct, attributes, children, name);\n  }\n\n  return component._render(attributes, children);\n}\n\nfunction copyToThunk(vnode, thunk) {\n  thunk.elm = vnode.elm;\n  (vnode.data).fn = (thunk.data).fn;\n  (vnode.data).args = (thunk.data).args;\n  thunk.data = vnode.data;\n  thunk.children = vnode.children;\n  thunk.text = vnode.text;\n  thunk.elm = vnode.elm;\n}\n\nfunction prepatch(oldVnode, newNode) {\n  if (newNode.data.attrs.needRender === false) {\n    copyToThunk(oldVnode, newNode);\n  }\n}\n\nfunction h(name, attributes, children) {\n  const attrs = {};\n  let on;\n  let style;\n  let sclass;\n  let hook = { prepatch };\n  let key;\n  Object.entries(attributes).forEach((attr) => {\n    const [index, value] = attr;\n    if (index === 'on') {\n      on = value;\n    } else if (index === 'style') {\n      style = value;\n    } else if (index === 'key') {\n      key = value;\n    } else if (index === 'hooks') {\n      hook = { ...hook, ...value };\n    } else if (index === 'class') {\n      if (typeof value === 'string') {\n        attrs[index] = value;\n      } else {\n        sclass = value;\n      }\n    } else {\n      attrs[index] = value;\n    }\n  });\n  return snabbdomh.default(\n    name,\n    {\n      on, style, attrs, hook, class: sclass, key,\n    },\n    children,\n  );\n}\n\nconst patch = snabbdom.init([\n  attributes.default,\n  style.default,\n  eventlisteners.default,\n  sclass.default,\n]);\n\nlet renderPipeline = [];\nlet animationRequest = false;\n\nfunction scheduleRender(node) {\n  renderPipeline.push(node);\n  if (!animationRequest) {\n    animationRequest = true;\n    window.requestAnimationFrame(() => {\n      renderPipeline.forEach(node => node.partialRender());\n      animationRequest = false;\n      renderPipeline = [];\n    });\n  }\n}\n\nfunction destroyUnreferencedComponents() {\n  const keysCache = Object.keys(cache);\n  const keysNextCache = Object.keys(nextCache);\n  const difference = keysCache.filter(x => !keysNextCache.includes(x));\n  difference.forEach(path => cache[path]._destroy());\n}\n\nlet rootNode = new Component(() => {}, {}, [], 'root');\ncurrentNode = rootNode;\n\nconst newRoot = () => {\n  rootNode = new Component(() => {}, {}, [], 'root');\n  currentNode = rootNode;\n};\n\nfunction mount(dom, render) {\n  let vnode; let requested;\n  cache = {};\n  nextCache = {};\n  const target = window.document.createElement('div');\n  dom.innerHTML = '';\n  dom.appendChild(target);\n  function init() {\n    newRoot();\n    vnode = render();\n    vnode = patch(toVNode(target), vnode);\n    requested = false;\n    return vnode;\n  }\n  function refresh(callback) {\n    if (requested) {\n      return;\n    }\n    requested = true;\n    renderPipeline = [];\n    const rerender = () => {\n      let newVnode;\n      nextCache = {};\n      const now = (new Date()).getTime();\n      try {\n        newVnode = render();\n        // nothing to update\n        if (!newVnode) {\n          requested = false;\n          const after = (new Date()).getTime();\n          callback && callback(after - now);\n          return;\n        }\n        newRoot();\n        // error can happen during patching\n        patch(vnode, newVnode);\n      } catch (error) {\n        requested = false;\n        throw error;\n      }\n      const after = (new Date()).getTime();\n      vnode = newVnode;\n      destroyUnreferencedComponents();\n      cache = nextCache;\n      requested = false;\n      callback && callback(after - now);\n    };\n    window.requestAnimationFrame(() => {\n      rerender();\n      renderPipeline = [];\n    });\n  }\n  return { refresh, init };\n}\n\nmodule.exports = {\n  h,\n  patch,\n  mount,\n  c: createComponent,\n  Component,\n};\n\n\n//# sourceURL=webpack:///./src/runtime.js?");

/***/ }),

/***/ "./webpack.client.js":
/*!***************************!*\
  !*** ./webpack.client.js ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("/* WEBPACK VAR INJECTION */(function(__dirname) {const path = __webpack_require__(/*! path */ \"path\");\n/* eslint-disable import/no-extraneous-dependencies */\nconst webpack = __webpack_require__(/*! webpack */ \"webpack\");\nconst HtmlWebpackPlugin = __webpack_require__(/*! html-webpack-plugin */ \"html-webpack-plugin\");\nconst { BundleAnalyzerPlugin } = __webpack_require__(/*! webpack-bundle-analyzer */ \"webpack-bundle-analyzer\");\n/* eslint-enable import/no-extraneous-dependencies */\n\nconst CSSModuleLoader = {\n  loader: 'css-loader',\n  options: {\n    modules: true,\n  },\n};\n\nconst plugins = [\n  new webpack.DefinePlugin({\n    SERVER: false,\n  }),\n  new webpack.HotModuleReplacementPlugin(),\n  new webpack.NoEmitOnErrorsPlugin(),\n  new HtmlWebpackPlugin({\n    template: 'example/index.html',\n  }),\n];\n\nif (process.env.DISTRIBUTE) {\n  plugins.push(new BundleAnalyzerPlugin());\n}\n\nlet devTool = 'source-map';\nif (process.env.SOURCEMAP) {\n  devTool = process.env.SOURCEMAP;\n}\n\nconst entries = ['./example/client.blop'];\n\nif (!process.env.DISTRIBUTE) {\n  entries.push('webpack-hot-middleware/client');\n}\n\nconst clientConfig = {\n  mode: 'development',\n  devtool: devTool,\n  stats: 'normal',\n  target: 'web',\n  entry: entries,\n  output: {\n    path: path.resolve(__dirname, 'dist'),\n    publicPath: './',\n    filename: 'client.js',\n  },\n  module: {\n    rules: [\n      {\n        test: /\\.blop$/,\n        use: [\n          {\n            loader: path.resolve('./src/loader.js'),\n            options: {\n              debug: !!process.env.BLOP_DEBUG,\n              sourceMap: !!process.env.SOURCEMAP,\n              strictness: 'perfect',\n            },\n          },\n        ],\n      },\n      {\n        test: /\\.css$/i,\n        use: ['style-loader', CSSModuleLoader],\n      },\n      {\n        test: /\\.scss$/,\n        use: ['style-loader', CSSModuleLoader, 'sass-loader'],\n      },\n    ],\n  },\n  plugins,\n};\n\nmodule.exports = clientConfig;\n\n/* WEBPACK VAR INJECTION */}.call(this, \"/\"))\n\n//# sourceURL=webpack:///./webpack.client.js?");

/***/ }),

/***/ "body-parser":
/*!******************************!*\
  !*** external "body-parser" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"body-parser\");\n\n//# sourceURL=webpack:///external_%22body-parser%22?");

/***/ }),

/***/ "express":
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"express\");\n\n//# sourceURL=webpack:///external_%22express%22?");

/***/ }),

/***/ "html-webpack-plugin":
/*!**************************************!*\
  !*** external "html-webpack-plugin" ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"html-webpack-plugin\");\n\n//# sourceURL=webpack:///external_%22html-webpack-plugin%22?");

/***/ }),

/***/ "node-fetch":
/*!*****************************!*\
  !*** external "node-fetch" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"node-fetch\");\n\n//# sourceURL=webpack:///external_%22node-fetch%22?");

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"path\");\n\n//# sourceURL=webpack:///external_%22path%22?");

/***/ }),

/***/ "snabbdom":
/*!***************************!*\
  !*** external "snabbdom" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"snabbdom\");\n\n//# sourceURL=webpack:///external_%22snabbdom%22?");

/***/ }),

/***/ "snabbdom-to-html":
/*!***********************************!*\
  !*** external "snabbdom-to-html" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"snabbdom-to-html\");\n\n//# sourceURL=webpack:///external_%22snabbdom-to-html%22?");

/***/ }),

/***/ "snabbdom/h":
/*!*****************************!*\
  !*** external "snabbdom/h" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"snabbdom/h\");\n\n//# sourceURL=webpack:///external_%22snabbdom/h%22?");

/***/ }),

/***/ "snabbdom/modules/attributes":
/*!**********************************************!*\
  !*** external "snabbdom/modules/attributes" ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"snabbdom/modules/attributes\");\n\n//# sourceURL=webpack:///external_%22snabbdom/modules/attributes%22?");

/***/ }),

/***/ "snabbdom/modules/class":
/*!*****************************************!*\
  !*** external "snabbdom/modules/class" ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"snabbdom/modules/class\");\n\n//# sourceURL=webpack:///external_%22snabbdom/modules/class%22?");

/***/ }),

/***/ "snabbdom/modules/eventlisteners":
/*!**************************************************!*\
  !*** external "snabbdom/modules/eventlisteners" ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"snabbdom/modules/eventlisteners\");\n\n//# sourceURL=webpack:///external_%22snabbdom/modules/eventlisteners%22?");

/***/ }),

/***/ "snabbdom/modules/style":
/*!*****************************************!*\
  !*** external "snabbdom/modules/style" ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"snabbdom/modules/style\");\n\n//# sourceURL=webpack:///external_%22snabbdom/modules/style%22?");

/***/ }),

/***/ "snabbdom/tovnode":
/*!***********************************!*\
  !*** external "snabbdom/tovnode" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"snabbdom/tovnode\");\n\n//# sourceURL=webpack:///external_%22snabbdom/tovnode%22?");

/***/ }),

/***/ "webpack":
/*!**************************!*\
  !*** external "webpack" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"webpack\");\n\n//# sourceURL=webpack:///external_%22webpack%22?");

/***/ }),

/***/ "webpack-bundle-analyzer":
/*!******************************************!*\
  !*** external "webpack-bundle-analyzer" ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"webpack-bundle-analyzer\");\n\n//# sourceURL=webpack:///external_%22webpack-bundle-analyzer%22?");

/***/ }),

/***/ "webpack-dev-middleware":
/*!*****************************************!*\
  !*** external "webpack-dev-middleware" ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"webpack-dev-middleware\");\n\n//# sourceURL=webpack:///external_%22webpack-dev-middleware%22?");

/***/ }),

/***/ "webpack-hot-middleware":
/*!*****************************************!*\
  !*** external "webpack-hot-middleware" ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"webpack-hot-middleware\");\n\n//# sourceURL=webpack:///external_%22webpack-hot-middleware%22?");

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtRQUFBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQSxJQUFJO1FBQ0o7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSxNQUFNO1FBQ047UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EsS0FBSztRQUNMO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EsTUFBTTtRQUNOO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSxLQUFLOztRQUVMO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLDZCQUE2QjtRQUM3Qiw2QkFBNkI7UUFDN0I7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EscUJBQXFCLGdCQUFnQjtRQUNyQztRQUNBO1FBQ0EsS0FBSztRQUNMO1FBQ0E7UUFDQTtRQUNBLHFCQUFxQixnQkFBZ0I7UUFDckM7UUFDQTtRQUNBLEtBQUs7UUFDTDtRQUNBO1FBQ0EsS0FBSztRQUNMO1FBQ0E7UUFDQSxLQUFLO1FBQ0w7UUFDQTtRQUNBO1FBQ0EsS0FBSzs7UUFFTDtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSxLQUFLO1FBQ0w7UUFDQTtRQUNBLEtBQUs7UUFDTDtRQUNBO1FBQ0E7UUFDQSxLQUFLOztRQUVMO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQSxrQkFBa0IsOEJBQThCO1FBQ2hEO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EsS0FBSztRQUNMO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLElBQUk7UUFDSjs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLElBQUk7UUFDSjtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLE1BQU07UUFDTjtRQUNBO1FBQ0E7UUFDQSxPQUFPO1FBQ1A7UUFDQTtRQUNBO1FBQ0E7UUFDQSxJQUFJO1FBQ0o7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSxLQUFLO1FBQ0w7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLG9CQUFvQiwyQkFBMkI7UUFDL0M7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLE9BQU87UUFDUDtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0EsbUJBQW1CLGNBQWM7UUFDakM7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLGdCQUFnQixLQUFLO1FBQ3JCO1FBQ0E7UUFDQTtRQUNBLE1BQU07UUFDTjtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EsZ0JBQWdCLFlBQVk7UUFDNUI7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7UUFDQSxjQUFjLDRCQUE0QjtRQUMxQztRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLE1BQU07UUFDTjtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLElBQUk7O1FBRUo7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBOztRQUVBO1FBQ0E7UUFDQSxlQUFlLDRCQUE0QjtRQUMzQztRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBLGVBQWUsNEJBQTRCO1FBQzNDO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSxpQkFBaUIsdUNBQXVDO1FBQ3hEO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EsaUJBQWlCLHVDQUF1QztRQUN4RDtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLGlCQUFpQixzQkFBc0I7UUFDdkM7UUFDQTtRQUNBO1FBQ0EsUUFBUTtRQUNSO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLFVBQVU7UUFDVjtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQSxjQUFjLHdDQUF3QztRQUN0RDtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EsS0FBSztRQUNMO1FBQ0E7UUFDQTtRQUNBLE9BQU87UUFDUDtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSxTQUFTO1FBQ1Q7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EsTUFBTTtRQUNOO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSxRQUFRO1FBQ1I7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSxJQUFJO1FBQ0o7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSxlQUFlO1FBQ2Y7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFFO1FBQ3ZELGlDQUFpQyxlQUFlO1FBQ2hEO1FBQ0E7UUFDQTs7UUFFQTtRQUNBLHNEQUFzRCwrREFBK0Q7O1FBRXJIO1FBQ0E7O1FBRUE7UUFDQSxzQ0FBc0MsdUJBQXVCOzs7UUFHN0Q7UUFDQSIsImZpbGUiOiJzZXJ2ZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW51c2VkLXZhcnNcbiBcdGZ1bmN0aW9uIGhvdERvd25sb2FkVXBkYXRlQ2h1bmsoY2h1bmtJZCkge1xuIFx0XHR2YXIgY2h1bmsgPSByZXF1aXJlKFwiLi9cIiArIFwiXCIgKyBjaHVua0lkICsgXCIuXCIgKyBob3RDdXJyZW50SGFzaCArIFwiLmhvdC11cGRhdGUuanNcIik7XG4gXHRcdGhvdEFkZFVwZGF0ZUNodW5rKGNodW5rLmlkLCBjaHVuay5tb2R1bGVzKTtcbiBcdH1cblxuIFx0Ly8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVudXNlZC12YXJzXG4gXHRmdW5jdGlvbiBob3REb3dubG9hZE1hbmlmZXN0KCkge1xuIFx0XHR0cnkge1xuIFx0XHRcdHZhciB1cGRhdGUgPSByZXF1aXJlKFwiLi9cIiArIFwiXCIgKyBob3RDdXJyZW50SGFzaCArIFwiLmhvdC11cGRhdGUuanNvblwiKTtcbiBcdFx0fSBjYXRjaCAoZSkge1xuIFx0XHRcdHJldHVybiBQcm9taXNlLnJlc29sdmUoKTtcbiBcdFx0fVxuIFx0XHRyZXR1cm4gUHJvbWlzZS5yZXNvbHZlKHVwZGF0ZSk7XG4gXHR9XG5cbiBcdC8vZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVudXNlZC12YXJzXG4gXHRmdW5jdGlvbiBob3REaXNwb3NlQ2h1bmsoY2h1bmtJZCkge1xuIFx0XHRkZWxldGUgaW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdO1xuIFx0fVxuXG4gXHR2YXIgaG90QXBwbHlPblVwZGF0ZSA9IHRydWU7XG4gXHQvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW51c2VkLXZhcnNcbiBcdHZhciBob3RDdXJyZW50SGFzaCA9IFwiNDNkNGQwZGY5YmViNWU0OGFhZTBcIjtcbiBcdHZhciBob3RSZXF1ZXN0VGltZW91dCA9IDEwMDAwO1xuIFx0dmFyIGhvdEN1cnJlbnRNb2R1bGVEYXRhID0ge307XG4gXHR2YXIgaG90Q3VycmVudENoaWxkTW9kdWxlO1xuIFx0Ly8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVudXNlZC12YXJzXG4gXHR2YXIgaG90Q3VycmVudFBhcmVudHMgPSBbXTtcbiBcdC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bnVzZWQtdmFyc1xuIFx0dmFyIGhvdEN1cnJlbnRQYXJlbnRzVGVtcCA9IFtdO1xuXG4gXHQvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW51c2VkLXZhcnNcbiBcdGZ1bmN0aW9uIGhvdENyZWF0ZVJlcXVpcmUobW9kdWxlSWQpIHtcbiBcdFx0dmFyIG1lID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF07XG4gXHRcdGlmICghbWUpIHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fO1xuIFx0XHR2YXIgZm4gPSBmdW5jdGlvbihyZXF1ZXN0KSB7XG4gXHRcdFx0aWYgKG1lLmhvdC5hY3RpdmUpIHtcbiBcdFx0XHRcdGlmIChpbnN0YWxsZWRNb2R1bGVzW3JlcXVlc3RdKSB7XG4gXHRcdFx0XHRcdGlmIChpbnN0YWxsZWRNb2R1bGVzW3JlcXVlc3RdLnBhcmVudHMuaW5kZXhPZihtb2R1bGVJZCkgPT09IC0xKSB7XG4gXHRcdFx0XHRcdFx0aW5zdGFsbGVkTW9kdWxlc1tyZXF1ZXN0XS5wYXJlbnRzLnB1c2gobW9kdWxlSWQpO1xuIFx0XHRcdFx0XHR9XG4gXHRcdFx0XHR9IGVsc2Uge1xuIFx0XHRcdFx0XHRob3RDdXJyZW50UGFyZW50cyA9IFttb2R1bGVJZF07XG4gXHRcdFx0XHRcdGhvdEN1cnJlbnRDaGlsZE1vZHVsZSA9IHJlcXVlc3Q7XG4gXHRcdFx0XHR9XG4gXHRcdFx0XHRpZiAobWUuY2hpbGRyZW4uaW5kZXhPZihyZXF1ZXN0KSA9PT0gLTEpIHtcbiBcdFx0XHRcdFx0bWUuY2hpbGRyZW4ucHVzaChyZXF1ZXN0KTtcbiBcdFx0XHRcdH1cbiBcdFx0XHR9IGVsc2Uge1xuIFx0XHRcdFx0Y29uc29sZS53YXJuKFxuIFx0XHRcdFx0XHRcIltITVJdIHVuZXhwZWN0ZWQgcmVxdWlyZShcIiArXG4gXHRcdFx0XHRcdFx0cmVxdWVzdCArXG4gXHRcdFx0XHRcdFx0XCIpIGZyb20gZGlzcG9zZWQgbW9kdWxlIFwiICtcbiBcdFx0XHRcdFx0XHRtb2R1bGVJZFxuIFx0XHRcdFx0KTtcbiBcdFx0XHRcdGhvdEN1cnJlbnRQYXJlbnRzID0gW107XG4gXHRcdFx0fVxuIFx0XHRcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKHJlcXVlc3QpO1xuIFx0XHR9O1xuIFx0XHR2YXIgT2JqZWN0RmFjdG9yeSA9IGZ1bmN0aW9uIE9iamVjdEZhY3RvcnkobmFtZSkge1xuIFx0XHRcdHJldHVybiB7XG4gXHRcdFx0XHRjb25maWd1cmFibGU6IHRydWUsXG4gXHRcdFx0XHRlbnVtZXJhYmxlOiB0cnVlLFxuIFx0XHRcdFx0Z2V0OiBmdW5jdGlvbigpIHtcbiBcdFx0XHRcdFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX19bbmFtZV07XG4gXHRcdFx0XHR9LFxuIFx0XHRcdFx0c2V0OiBmdW5jdGlvbih2YWx1ZSkge1xuIFx0XHRcdFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fW25hbWVdID0gdmFsdWU7XG4gXHRcdFx0XHR9XG4gXHRcdFx0fTtcbiBcdFx0fTtcbiBcdFx0Zm9yICh2YXIgbmFtZSBpbiBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG4gXHRcdFx0aWYgKFxuIFx0XHRcdFx0T2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKF9fd2VicGFja19yZXF1aXJlX18sIG5hbWUpICYmXG4gXHRcdFx0XHRuYW1lICE9PSBcImVcIiAmJlxuIFx0XHRcdFx0bmFtZSAhPT0gXCJ0XCJcbiBcdFx0XHQpIHtcbiBcdFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShmbiwgbmFtZSwgT2JqZWN0RmFjdG9yeShuYW1lKSk7XG4gXHRcdFx0fVxuIFx0XHR9XG4gXHRcdGZuLmUgPSBmdW5jdGlvbihjaHVua0lkKSB7XG4gXHRcdFx0aWYgKGhvdFN0YXR1cyA9PT0gXCJyZWFkeVwiKSBob3RTZXRTdGF0dXMoXCJwcmVwYXJlXCIpO1xuIFx0XHRcdGhvdENodW5rc0xvYWRpbmcrKztcbiBcdFx0XHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXy5lKGNodW5rSWQpLnRoZW4oZmluaXNoQ2h1bmtMb2FkaW5nLCBmdW5jdGlvbihlcnIpIHtcbiBcdFx0XHRcdGZpbmlzaENodW5rTG9hZGluZygpO1xuIFx0XHRcdFx0dGhyb3cgZXJyO1xuIFx0XHRcdH0pO1xuXG4gXHRcdFx0ZnVuY3Rpb24gZmluaXNoQ2h1bmtMb2FkaW5nKCkge1xuIFx0XHRcdFx0aG90Q2h1bmtzTG9hZGluZy0tO1xuIFx0XHRcdFx0aWYgKGhvdFN0YXR1cyA9PT0gXCJwcmVwYXJlXCIpIHtcbiBcdFx0XHRcdFx0aWYgKCFob3RXYWl0aW5nRmlsZXNNYXBbY2h1bmtJZF0pIHtcbiBcdFx0XHRcdFx0XHRob3RFbnN1cmVVcGRhdGVDaHVuayhjaHVua0lkKTtcbiBcdFx0XHRcdFx0fVxuIFx0XHRcdFx0XHRpZiAoaG90Q2h1bmtzTG9hZGluZyA9PT0gMCAmJiBob3RXYWl0aW5nRmlsZXMgPT09IDApIHtcbiBcdFx0XHRcdFx0XHRob3RVcGRhdGVEb3dubG9hZGVkKCk7XG4gXHRcdFx0XHRcdH1cbiBcdFx0XHRcdH1cbiBcdFx0XHR9XG4gXHRcdH07XG4gXHRcdGZuLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRcdGlmIChtb2RlICYgMSkgdmFsdWUgPSBmbih2YWx1ZSk7XG4gXHRcdFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18udCh2YWx1ZSwgbW9kZSAmIH4xKTtcbiBcdFx0fTtcbiBcdFx0cmV0dXJuIGZuO1xuIFx0fVxuXG4gXHQvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW51c2VkLXZhcnNcbiBcdGZ1bmN0aW9uIGhvdENyZWF0ZU1vZHVsZShtb2R1bGVJZCkge1xuIFx0XHR2YXIgaG90ID0ge1xuIFx0XHRcdC8vIHByaXZhdGUgc3R1ZmZcbiBcdFx0XHRfYWNjZXB0ZWREZXBlbmRlbmNpZXM6IHt9LFxuIFx0XHRcdF9kZWNsaW5lZERlcGVuZGVuY2llczoge30sXG4gXHRcdFx0X3NlbGZBY2NlcHRlZDogZmFsc2UsXG4gXHRcdFx0X3NlbGZEZWNsaW5lZDogZmFsc2UsXG4gXHRcdFx0X2Rpc3Bvc2VIYW5kbGVyczogW10sXG4gXHRcdFx0X21haW46IGhvdEN1cnJlbnRDaGlsZE1vZHVsZSAhPT0gbW9kdWxlSWQsXG5cbiBcdFx0XHQvLyBNb2R1bGUgQVBJXG4gXHRcdFx0YWN0aXZlOiB0cnVlLFxuIFx0XHRcdGFjY2VwdDogZnVuY3Rpb24oZGVwLCBjYWxsYmFjaykge1xuIFx0XHRcdFx0aWYgKGRlcCA9PT0gdW5kZWZpbmVkKSBob3QuX3NlbGZBY2NlcHRlZCA9IHRydWU7XG4gXHRcdFx0XHRlbHNlIGlmICh0eXBlb2YgZGVwID09PSBcImZ1bmN0aW9uXCIpIGhvdC5fc2VsZkFjY2VwdGVkID0gZGVwO1xuIFx0XHRcdFx0ZWxzZSBpZiAodHlwZW9mIGRlcCA9PT0gXCJvYmplY3RcIilcbiBcdFx0XHRcdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCBkZXAubGVuZ3RoOyBpKyspXG4gXHRcdFx0XHRcdFx0aG90Ll9hY2NlcHRlZERlcGVuZGVuY2llc1tkZXBbaV1dID0gY2FsbGJhY2sgfHwgZnVuY3Rpb24oKSB7fTtcbiBcdFx0XHRcdGVsc2UgaG90Ll9hY2NlcHRlZERlcGVuZGVuY2llc1tkZXBdID0gY2FsbGJhY2sgfHwgZnVuY3Rpb24oKSB7fTtcbiBcdFx0XHR9LFxuIFx0XHRcdGRlY2xpbmU6IGZ1bmN0aW9uKGRlcCkge1xuIFx0XHRcdFx0aWYgKGRlcCA9PT0gdW5kZWZpbmVkKSBob3QuX3NlbGZEZWNsaW5lZCA9IHRydWU7XG4gXHRcdFx0XHRlbHNlIGlmICh0eXBlb2YgZGVwID09PSBcIm9iamVjdFwiKVxuIFx0XHRcdFx0XHRmb3IgKHZhciBpID0gMDsgaSA8IGRlcC5sZW5ndGg7IGkrKylcbiBcdFx0XHRcdFx0XHRob3QuX2RlY2xpbmVkRGVwZW5kZW5jaWVzW2RlcFtpXV0gPSB0cnVlO1xuIFx0XHRcdFx0ZWxzZSBob3QuX2RlY2xpbmVkRGVwZW5kZW5jaWVzW2RlcF0gPSB0cnVlO1xuIFx0XHRcdH0sXG4gXHRcdFx0ZGlzcG9zZTogZnVuY3Rpb24oY2FsbGJhY2spIHtcbiBcdFx0XHRcdGhvdC5fZGlzcG9zZUhhbmRsZXJzLnB1c2goY2FsbGJhY2spO1xuIFx0XHRcdH0sXG4gXHRcdFx0YWRkRGlzcG9zZUhhbmRsZXI6IGZ1bmN0aW9uKGNhbGxiYWNrKSB7XG4gXHRcdFx0XHRob3QuX2Rpc3Bvc2VIYW5kbGVycy5wdXNoKGNhbGxiYWNrKTtcbiBcdFx0XHR9LFxuIFx0XHRcdHJlbW92ZURpc3Bvc2VIYW5kbGVyOiBmdW5jdGlvbihjYWxsYmFjaykge1xuIFx0XHRcdFx0dmFyIGlkeCA9IGhvdC5fZGlzcG9zZUhhbmRsZXJzLmluZGV4T2YoY2FsbGJhY2spO1xuIFx0XHRcdFx0aWYgKGlkeCA+PSAwKSBob3QuX2Rpc3Bvc2VIYW5kbGVycy5zcGxpY2UoaWR4LCAxKTtcbiBcdFx0XHR9LFxuXG4gXHRcdFx0Ly8gTWFuYWdlbWVudCBBUElcbiBcdFx0XHRjaGVjazogaG90Q2hlY2ssXG4gXHRcdFx0YXBwbHk6IGhvdEFwcGx5LFxuIFx0XHRcdHN0YXR1czogZnVuY3Rpb24obCkge1xuIFx0XHRcdFx0aWYgKCFsKSByZXR1cm4gaG90U3RhdHVzO1xuIFx0XHRcdFx0aG90U3RhdHVzSGFuZGxlcnMucHVzaChsKTtcbiBcdFx0XHR9LFxuIFx0XHRcdGFkZFN0YXR1c0hhbmRsZXI6IGZ1bmN0aW9uKGwpIHtcbiBcdFx0XHRcdGhvdFN0YXR1c0hhbmRsZXJzLnB1c2gobCk7XG4gXHRcdFx0fSxcbiBcdFx0XHRyZW1vdmVTdGF0dXNIYW5kbGVyOiBmdW5jdGlvbihsKSB7XG4gXHRcdFx0XHR2YXIgaWR4ID0gaG90U3RhdHVzSGFuZGxlcnMuaW5kZXhPZihsKTtcbiBcdFx0XHRcdGlmIChpZHggPj0gMCkgaG90U3RhdHVzSGFuZGxlcnMuc3BsaWNlKGlkeCwgMSk7XG4gXHRcdFx0fSxcblxuIFx0XHRcdC8vaW5oZXJpdCBmcm9tIHByZXZpb3VzIGRpc3Bvc2UgY2FsbFxuIFx0XHRcdGRhdGE6IGhvdEN1cnJlbnRNb2R1bGVEYXRhW21vZHVsZUlkXVxuIFx0XHR9O1xuIFx0XHRob3RDdXJyZW50Q2hpbGRNb2R1bGUgPSB1bmRlZmluZWQ7XG4gXHRcdHJldHVybiBob3Q7XG4gXHR9XG5cbiBcdHZhciBob3RTdGF0dXNIYW5kbGVycyA9IFtdO1xuIFx0dmFyIGhvdFN0YXR1cyA9IFwiaWRsZVwiO1xuXG4gXHRmdW5jdGlvbiBob3RTZXRTdGF0dXMobmV3U3RhdHVzKSB7XG4gXHRcdGhvdFN0YXR1cyA9IG5ld1N0YXR1cztcbiBcdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCBob3RTdGF0dXNIYW5kbGVycy5sZW5ndGg7IGkrKylcbiBcdFx0XHRob3RTdGF0dXNIYW5kbGVyc1tpXS5jYWxsKG51bGwsIG5ld1N0YXR1cyk7XG4gXHR9XG5cbiBcdC8vIHdoaWxlIGRvd25sb2FkaW5nXG4gXHR2YXIgaG90V2FpdGluZ0ZpbGVzID0gMDtcbiBcdHZhciBob3RDaHVua3NMb2FkaW5nID0gMDtcbiBcdHZhciBob3RXYWl0aW5nRmlsZXNNYXAgPSB7fTtcbiBcdHZhciBob3RSZXF1ZXN0ZWRGaWxlc01hcCA9IHt9O1xuIFx0dmFyIGhvdEF2YWlsYWJsZUZpbGVzTWFwID0ge307XG4gXHR2YXIgaG90RGVmZXJyZWQ7XG5cbiBcdC8vIFRoZSB1cGRhdGUgaW5mb1xuIFx0dmFyIGhvdFVwZGF0ZSwgaG90VXBkYXRlTmV3SGFzaDtcblxuIFx0ZnVuY3Rpb24gdG9Nb2R1bGVJZChpZCkge1xuIFx0XHR2YXIgaXNOdW1iZXIgPSAraWQgKyBcIlwiID09PSBpZDtcbiBcdFx0cmV0dXJuIGlzTnVtYmVyID8gK2lkIDogaWQ7XG4gXHR9XG5cbiBcdGZ1bmN0aW9uIGhvdENoZWNrKGFwcGx5KSB7XG4gXHRcdGlmIChob3RTdGF0dXMgIT09IFwiaWRsZVwiKSB7XG4gXHRcdFx0dGhyb3cgbmV3IEVycm9yKFwiY2hlY2soKSBpcyBvbmx5IGFsbG93ZWQgaW4gaWRsZSBzdGF0dXNcIik7XG4gXHRcdH1cbiBcdFx0aG90QXBwbHlPblVwZGF0ZSA9IGFwcGx5O1xuIFx0XHRob3RTZXRTdGF0dXMoXCJjaGVja1wiKTtcbiBcdFx0cmV0dXJuIGhvdERvd25sb2FkTWFuaWZlc3QoaG90UmVxdWVzdFRpbWVvdXQpLnRoZW4oZnVuY3Rpb24odXBkYXRlKSB7XG4gXHRcdFx0aWYgKCF1cGRhdGUpIHtcbiBcdFx0XHRcdGhvdFNldFN0YXR1cyhcImlkbGVcIik7XG4gXHRcdFx0XHRyZXR1cm4gbnVsbDtcbiBcdFx0XHR9XG4gXHRcdFx0aG90UmVxdWVzdGVkRmlsZXNNYXAgPSB7fTtcbiBcdFx0XHRob3RXYWl0aW5nRmlsZXNNYXAgPSB7fTtcbiBcdFx0XHRob3RBdmFpbGFibGVGaWxlc01hcCA9IHVwZGF0ZS5jO1xuIFx0XHRcdGhvdFVwZGF0ZU5ld0hhc2ggPSB1cGRhdGUuaDtcblxuIFx0XHRcdGhvdFNldFN0YXR1cyhcInByZXBhcmVcIik7XG4gXHRcdFx0dmFyIHByb21pc2UgPSBuZXcgUHJvbWlzZShmdW5jdGlvbihyZXNvbHZlLCByZWplY3QpIHtcbiBcdFx0XHRcdGhvdERlZmVycmVkID0ge1xuIFx0XHRcdFx0XHRyZXNvbHZlOiByZXNvbHZlLFxuIFx0XHRcdFx0XHRyZWplY3Q6IHJlamVjdFxuIFx0XHRcdFx0fTtcbiBcdFx0XHR9KTtcbiBcdFx0XHRob3RVcGRhdGUgPSB7fTtcbiBcdFx0XHR2YXIgY2h1bmtJZCA9IFwibWFpblwiO1xuIFx0XHRcdC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1sb25lLWJsb2Nrc1xuIFx0XHRcdHtcbiBcdFx0XHRcdC8qZ2xvYmFscyBjaHVua0lkICovXG4gXHRcdFx0XHRob3RFbnN1cmVVcGRhdGVDaHVuayhjaHVua0lkKTtcbiBcdFx0XHR9XG4gXHRcdFx0aWYgKFxuIFx0XHRcdFx0aG90U3RhdHVzID09PSBcInByZXBhcmVcIiAmJlxuIFx0XHRcdFx0aG90Q2h1bmtzTG9hZGluZyA9PT0gMCAmJlxuIFx0XHRcdFx0aG90V2FpdGluZ0ZpbGVzID09PSAwXG4gXHRcdFx0KSB7XG4gXHRcdFx0XHRob3RVcGRhdGVEb3dubG9hZGVkKCk7XG4gXHRcdFx0fVxuIFx0XHRcdHJldHVybiBwcm9taXNlO1xuIFx0XHR9KTtcbiBcdH1cblxuIFx0Ly8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVudXNlZC12YXJzXG4gXHRmdW5jdGlvbiBob3RBZGRVcGRhdGVDaHVuayhjaHVua0lkLCBtb3JlTW9kdWxlcykge1xuIFx0XHRpZiAoIWhvdEF2YWlsYWJsZUZpbGVzTWFwW2NodW5rSWRdIHx8ICFob3RSZXF1ZXN0ZWRGaWxlc01hcFtjaHVua0lkXSlcbiBcdFx0XHRyZXR1cm47XG4gXHRcdGhvdFJlcXVlc3RlZEZpbGVzTWFwW2NodW5rSWRdID0gZmFsc2U7XG4gXHRcdGZvciAodmFyIG1vZHVsZUlkIGluIG1vcmVNb2R1bGVzKSB7XG4gXHRcdFx0aWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChtb3JlTW9kdWxlcywgbW9kdWxlSWQpKSB7XG4gXHRcdFx0XHRob3RVcGRhdGVbbW9kdWxlSWRdID0gbW9yZU1vZHVsZXNbbW9kdWxlSWRdO1xuIFx0XHRcdH1cbiBcdFx0fVxuIFx0XHRpZiAoLS1ob3RXYWl0aW5nRmlsZXMgPT09IDAgJiYgaG90Q2h1bmtzTG9hZGluZyA9PT0gMCkge1xuIFx0XHRcdGhvdFVwZGF0ZURvd25sb2FkZWQoKTtcbiBcdFx0fVxuIFx0fVxuXG4gXHRmdW5jdGlvbiBob3RFbnN1cmVVcGRhdGVDaHVuayhjaHVua0lkKSB7XG4gXHRcdGlmICghaG90QXZhaWxhYmxlRmlsZXNNYXBbY2h1bmtJZF0pIHtcbiBcdFx0XHRob3RXYWl0aW5nRmlsZXNNYXBbY2h1bmtJZF0gPSB0cnVlO1xuIFx0XHR9IGVsc2Uge1xuIFx0XHRcdGhvdFJlcXVlc3RlZEZpbGVzTWFwW2NodW5rSWRdID0gdHJ1ZTtcbiBcdFx0XHRob3RXYWl0aW5nRmlsZXMrKztcbiBcdFx0XHRob3REb3dubG9hZFVwZGF0ZUNodW5rKGNodW5rSWQpO1xuIFx0XHR9XG4gXHR9XG5cbiBcdGZ1bmN0aW9uIGhvdFVwZGF0ZURvd25sb2FkZWQoKSB7XG4gXHRcdGhvdFNldFN0YXR1cyhcInJlYWR5XCIpO1xuIFx0XHR2YXIgZGVmZXJyZWQgPSBob3REZWZlcnJlZDtcbiBcdFx0aG90RGVmZXJyZWQgPSBudWxsO1xuIFx0XHRpZiAoIWRlZmVycmVkKSByZXR1cm47XG4gXHRcdGlmIChob3RBcHBseU9uVXBkYXRlKSB7XG4gXHRcdFx0Ly8gV3JhcCBkZWZlcnJlZCBvYmplY3QgaW4gUHJvbWlzZSB0byBtYXJrIGl0IGFzIGEgd2VsbC1oYW5kbGVkIFByb21pc2UgdG9cbiBcdFx0XHQvLyBhdm9pZCB0cmlnZ2VyaW5nIHVuY2F1Z2h0IGV4Y2VwdGlvbiB3YXJuaW5nIGluIENocm9tZS5cbiBcdFx0XHQvLyBTZWUgaHR0cHM6Ly9idWdzLmNocm9taXVtLm9yZy9wL2Nocm9taXVtL2lzc3Vlcy9kZXRhaWw/aWQ9NDY1NjY2XG4gXHRcdFx0UHJvbWlzZS5yZXNvbHZlKClcbiBcdFx0XHRcdC50aGVuKGZ1bmN0aW9uKCkge1xuIFx0XHRcdFx0XHRyZXR1cm4gaG90QXBwbHkoaG90QXBwbHlPblVwZGF0ZSk7XG4gXHRcdFx0XHR9KVxuIFx0XHRcdFx0LnRoZW4oXG4gXHRcdFx0XHRcdGZ1bmN0aW9uKHJlc3VsdCkge1xuIFx0XHRcdFx0XHRcdGRlZmVycmVkLnJlc29sdmUocmVzdWx0KTtcbiBcdFx0XHRcdFx0fSxcbiBcdFx0XHRcdFx0ZnVuY3Rpb24oZXJyKSB7XG4gXHRcdFx0XHRcdFx0ZGVmZXJyZWQucmVqZWN0KGVycik7XG4gXHRcdFx0XHRcdH1cbiBcdFx0XHRcdCk7XG4gXHRcdH0gZWxzZSB7XG4gXHRcdFx0dmFyIG91dGRhdGVkTW9kdWxlcyA9IFtdO1xuIFx0XHRcdGZvciAodmFyIGlkIGluIGhvdFVwZGF0ZSkge1xuIFx0XHRcdFx0aWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChob3RVcGRhdGUsIGlkKSkge1xuIFx0XHRcdFx0XHRvdXRkYXRlZE1vZHVsZXMucHVzaCh0b01vZHVsZUlkKGlkKSk7XG4gXHRcdFx0XHR9XG4gXHRcdFx0fVxuIFx0XHRcdGRlZmVycmVkLnJlc29sdmUob3V0ZGF0ZWRNb2R1bGVzKTtcbiBcdFx0fVxuIFx0fVxuXG4gXHRmdW5jdGlvbiBob3RBcHBseShvcHRpb25zKSB7XG4gXHRcdGlmIChob3RTdGF0dXMgIT09IFwicmVhZHlcIilcbiBcdFx0XHR0aHJvdyBuZXcgRXJyb3IoXCJhcHBseSgpIGlzIG9ubHkgYWxsb3dlZCBpbiByZWFkeSBzdGF0dXNcIik7XG4gXHRcdG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuXG4gXHRcdHZhciBjYjtcbiBcdFx0dmFyIGk7XG4gXHRcdHZhciBqO1xuIFx0XHR2YXIgbW9kdWxlO1xuIFx0XHR2YXIgbW9kdWxlSWQ7XG5cbiBcdFx0ZnVuY3Rpb24gZ2V0QWZmZWN0ZWRTdHVmZih1cGRhdGVNb2R1bGVJZCkge1xuIFx0XHRcdHZhciBvdXRkYXRlZE1vZHVsZXMgPSBbdXBkYXRlTW9kdWxlSWRdO1xuIFx0XHRcdHZhciBvdXRkYXRlZERlcGVuZGVuY2llcyA9IHt9O1xuXG4gXHRcdFx0dmFyIHF1ZXVlID0gb3V0ZGF0ZWRNb2R1bGVzLm1hcChmdW5jdGlvbihpZCkge1xuIFx0XHRcdFx0cmV0dXJuIHtcbiBcdFx0XHRcdFx0Y2hhaW46IFtpZF0sXG4gXHRcdFx0XHRcdGlkOiBpZFxuIFx0XHRcdFx0fTtcbiBcdFx0XHR9KTtcbiBcdFx0XHR3aGlsZSAocXVldWUubGVuZ3RoID4gMCkge1xuIFx0XHRcdFx0dmFyIHF1ZXVlSXRlbSA9IHF1ZXVlLnBvcCgpO1xuIFx0XHRcdFx0dmFyIG1vZHVsZUlkID0gcXVldWVJdGVtLmlkO1xuIFx0XHRcdFx0dmFyIGNoYWluID0gcXVldWVJdGVtLmNoYWluO1xuIFx0XHRcdFx0bW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF07XG4gXHRcdFx0XHRpZiAoIW1vZHVsZSB8fCBtb2R1bGUuaG90Ll9zZWxmQWNjZXB0ZWQpIGNvbnRpbnVlO1xuIFx0XHRcdFx0aWYgKG1vZHVsZS5ob3QuX3NlbGZEZWNsaW5lZCkge1xuIFx0XHRcdFx0XHRyZXR1cm4ge1xuIFx0XHRcdFx0XHRcdHR5cGU6IFwic2VsZi1kZWNsaW5lZFwiLFxuIFx0XHRcdFx0XHRcdGNoYWluOiBjaGFpbixcbiBcdFx0XHRcdFx0XHRtb2R1bGVJZDogbW9kdWxlSWRcbiBcdFx0XHRcdFx0fTtcbiBcdFx0XHRcdH1cbiBcdFx0XHRcdGlmIChtb2R1bGUuaG90Ll9tYWluKSB7XG4gXHRcdFx0XHRcdHJldHVybiB7XG4gXHRcdFx0XHRcdFx0dHlwZTogXCJ1bmFjY2VwdGVkXCIsXG4gXHRcdFx0XHRcdFx0Y2hhaW46IGNoYWluLFxuIFx0XHRcdFx0XHRcdG1vZHVsZUlkOiBtb2R1bGVJZFxuIFx0XHRcdFx0XHR9O1xuIFx0XHRcdFx0fVxuIFx0XHRcdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCBtb2R1bGUucGFyZW50cy5sZW5ndGg7IGkrKykge1xuIFx0XHRcdFx0XHR2YXIgcGFyZW50SWQgPSBtb2R1bGUucGFyZW50c1tpXTtcbiBcdFx0XHRcdFx0dmFyIHBhcmVudCA9IGluc3RhbGxlZE1vZHVsZXNbcGFyZW50SWRdO1xuIFx0XHRcdFx0XHRpZiAoIXBhcmVudCkgY29udGludWU7XG4gXHRcdFx0XHRcdGlmIChwYXJlbnQuaG90Ll9kZWNsaW5lZERlcGVuZGVuY2llc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRcdFx0XHRyZXR1cm4ge1xuIFx0XHRcdFx0XHRcdFx0dHlwZTogXCJkZWNsaW5lZFwiLFxuIFx0XHRcdFx0XHRcdFx0Y2hhaW46IGNoYWluLmNvbmNhdChbcGFyZW50SWRdKSxcbiBcdFx0XHRcdFx0XHRcdG1vZHVsZUlkOiBtb2R1bGVJZCxcbiBcdFx0XHRcdFx0XHRcdHBhcmVudElkOiBwYXJlbnRJZFxuIFx0XHRcdFx0XHRcdH07XG4gXHRcdFx0XHRcdH1cbiBcdFx0XHRcdFx0aWYgKG91dGRhdGVkTW9kdWxlcy5pbmRleE9mKHBhcmVudElkKSAhPT0gLTEpIGNvbnRpbnVlO1xuIFx0XHRcdFx0XHRpZiAocGFyZW50LmhvdC5fYWNjZXB0ZWREZXBlbmRlbmNpZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0XHRcdFx0aWYgKCFvdXRkYXRlZERlcGVuZGVuY2llc1twYXJlbnRJZF0pXG4gXHRcdFx0XHRcdFx0XHRvdXRkYXRlZERlcGVuZGVuY2llc1twYXJlbnRJZF0gPSBbXTtcbiBcdFx0XHRcdFx0XHRhZGRBbGxUb1NldChvdXRkYXRlZERlcGVuZGVuY2llc1twYXJlbnRJZF0sIFttb2R1bGVJZF0pO1xuIFx0XHRcdFx0XHRcdGNvbnRpbnVlO1xuIFx0XHRcdFx0XHR9XG4gXHRcdFx0XHRcdGRlbGV0ZSBvdXRkYXRlZERlcGVuZGVuY2llc1twYXJlbnRJZF07XG4gXHRcdFx0XHRcdG91dGRhdGVkTW9kdWxlcy5wdXNoKHBhcmVudElkKTtcbiBcdFx0XHRcdFx0cXVldWUucHVzaCh7XG4gXHRcdFx0XHRcdFx0Y2hhaW46IGNoYWluLmNvbmNhdChbcGFyZW50SWRdKSxcbiBcdFx0XHRcdFx0XHRpZDogcGFyZW50SWRcbiBcdFx0XHRcdFx0fSk7XG4gXHRcdFx0XHR9XG4gXHRcdFx0fVxuXG4gXHRcdFx0cmV0dXJuIHtcbiBcdFx0XHRcdHR5cGU6IFwiYWNjZXB0ZWRcIixcbiBcdFx0XHRcdG1vZHVsZUlkOiB1cGRhdGVNb2R1bGVJZCxcbiBcdFx0XHRcdG91dGRhdGVkTW9kdWxlczogb3V0ZGF0ZWRNb2R1bGVzLFxuIFx0XHRcdFx0b3V0ZGF0ZWREZXBlbmRlbmNpZXM6IG91dGRhdGVkRGVwZW5kZW5jaWVzXG4gXHRcdFx0fTtcbiBcdFx0fVxuXG4gXHRcdGZ1bmN0aW9uIGFkZEFsbFRvU2V0KGEsIGIpIHtcbiBcdFx0XHRmb3IgKHZhciBpID0gMDsgaSA8IGIubGVuZ3RoOyBpKyspIHtcbiBcdFx0XHRcdHZhciBpdGVtID0gYltpXTtcbiBcdFx0XHRcdGlmIChhLmluZGV4T2YoaXRlbSkgPT09IC0xKSBhLnB1c2goaXRlbSk7XG4gXHRcdFx0fVxuIFx0XHR9XG5cbiBcdFx0Ly8gYXQgYmVnaW4gYWxsIHVwZGF0ZXMgbW9kdWxlcyBhcmUgb3V0ZGF0ZWRcbiBcdFx0Ly8gdGhlIFwib3V0ZGF0ZWRcIiBzdGF0dXMgY2FuIHByb3BhZ2F0ZSB0byBwYXJlbnRzIGlmIHRoZXkgZG9uJ3QgYWNjZXB0IHRoZSBjaGlsZHJlblxuIFx0XHR2YXIgb3V0ZGF0ZWREZXBlbmRlbmNpZXMgPSB7fTtcbiBcdFx0dmFyIG91dGRhdGVkTW9kdWxlcyA9IFtdO1xuIFx0XHR2YXIgYXBwbGllZFVwZGF0ZSA9IHt9O1xuXG4gXHRcdHZhciB3YXJuVW5leHBlY3RlZFJlcXVpcmUgPSBmdW5jdGlvbiB3YXJuVW5leHBlY3RlZFJlcXVpcmUoKSB7XG4gXHRcdFx0Y29uc29sZS53YXJuKFxuIFx0XHRcdFx0XCJbSE1SXSB1bmV4cGVjdGVkIHJlcXVpcmUoXCIgKyByZXN1bHQubW9kdWxlSWQgKyBcIikgdG8gZGlzcG9zZWQgbW9kdWxlXCJcbiBcdFx0XHQpO1xuIFx0XHR9O1xuXG4gXHRcdGZvciAodmFyIGlkIGluIGhvdFVwZGF0ZSkge1xuIFx0XHRcdGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoaG90VXBkYXRlLCBpZCkpIHtcbiBcdFx0XHRcdG1vZHVsZUlkID0gdG9Nb2R1bGVJZChpZCk7XG4gXHRcdFx0XHQvKiogQHR5cGUge1RPRE99ICovXG4gXHRcdFx0XHR2YXIgcmVzdWx0O1xuIFx0XHRcdFx0aWYgKGhvdFVwZGF0ZVtpZF0pIHtcbiBcdFx0XHRcdFx0cmVzdWx0ID0gZ2V0QWZmZWN0ZWRTdHVmZihtb2R1bGVJZCk7XG4gXHRcdFx0XHR9IGVsc2Uge1xuIFx0XHRcdFx0XHRyZXN1bHQgPSB7XG4gXHRcdFx0XHRcdFx0dHlwZTogXCJkaXNwb3NlZFwiLFxuIFx0XHRcdFx0XHRcdG1vZHVsZUlkOiBpZFxuIFx0XHRcdFx0XHR9O1xuIFx0XHRcdFx0fVxuIFx0XHRcdFx0LyoqIEB0eXBlIHtFcnJvcnxmYWxzZX0gKi9cbiBcdFx0XHRcdHZhciBhYm9ydEVycm9yID0gZmFsc2U7XG4gXHRcdFx0XHR2YXIgZG9BcHBseSA9IGZhbHNlO1xuIFx0XHRcdFx0dmFyIGRvRGlzcG9zZSA9IGZhbHNlO1xuIFx0XHRcdFx0dmFyIGNoYWluSW5mbyA9IFwiXCI7XG4gXHRcdFx0XHRpZiAocmVzdWx0LmNoYWluKSB7XG4gXHRcdFx0XHRcdGNoYWluSW5mbyA9IFwiXFxuVXBkYXRlIHByb3BhZ2F0aW9uOiBcIiArIHJlc3VsdC5jaGFpbi5qb2luKFwiIC0+IFwiKTtcbiBcdFx0XHRcdH1cbiBcdFx0XHRcdHN3aXRjaCAocmVzdWx0LnR5cGUpIHtcbiBcdFx0XHRcdFx0Y2FzZSBcInNlbGYtZGVjbGluZWRcIjpcbiBcdFx0XHRcdFx0XHRpZiAob3B0aW9ucy5vbkRlY2xpbmVkKSBvcHRpb25zLm9uRGVjbGluZWQocmVzdWx0KTtcbiBcdFx0XHRcdFx0XHRpZiAoIW9wdGlvbnMuaWdub3JlRGVjbGluZWQpXG4gXHRcdFx0XHRcdFx0XHRhYm9ydEVycm9yID0gbmV3IEVycm9yKFxuIFx0XHRcdFx0XHRcdFx0XHRcIkFib3J0ZWQgYmVjYXVzZSBvZiBzZWxmIGRlY2xpbmU6IFwiICtcbiBcdFx0XHRcdFx0XHRcdFx0XHRyZXN1bHQubW9kdWxlSWQgK1xuIFx0XHRcdFx0XHRcdFx0XHRcdGNoYWluSW5mb1xuIFx0XHRcdFx0XHRcdFx0KTtcbiBcdFx0XHRcdFx0XHRicmVhaztcbiBcdFx0XHRcdFx0Y2FzZSBcImRlY2xpbmVkXCI6XG4gXHRcdFx0XHRcdFx0aWYgKG9wdGlvbnMub25EZWNsaW5lZCkgb3B0aW9ucy5vbkRlY2xpbmVkKHJlc3VsdCk7XG4gXHRcdFx0XHRcdFx0aWYgKCFvcHRpb25zLmlnbm9yZURlY2xpbmVkKVxuIFx0XHRcdFx0XHRcdFx0YWJvcnRFcnJvciA9IG5ldyBFcnJvcihcbiBcdFx0XHRcdFx0XHRcdFx0XCJBYm9ydGVkIGJlY2F1c2Ugb2YgZGVjbGluZWQgZGVwZW5kZW5jeTogXCIgK1xuIFx0XHRcdFx0XHRcdFx0XHRcdHJlc3VsdC5tb2R1bGVJZCArXG4gXHRcdFx0XHRcdFx0XHRcdFx0XCIgaW4gXCIgK1xuIFx0XHRcdFx0XHRcdFx0XHRcdHJlc3VsdC5wYXJlbnRJZCArXG4gXHRcdFx0XHRcdFx0XHRcdFx0Y2hhaW5JbmZvXG4gXHRcdFx0XHRcdFx0XHQpO1xuIFx0XHRcdFx0XHRcdGJyZWFrO1xuIFx0XHRcdFx0XHRjYXNlIFwidW5hY2NlcHRlZFwiOlxuIFx0XHRcdFx0XHRcdGlmIChvcHRpb25zLm9uVW5hY2NlcHRlZCkgb3B0aW9ucy5vblVuYWNjZXB0ZWQocmVzdWx0KTtcbiBcdFx0XHRcdFx0XHRpZiAoIW9wdGlvbnMuaWdub3JlVW5hY2NlcHRlZClcbiBcdFx0XHRcdFx0XHRcdGFib3J0RXJyb3IgPSBuZXcgRXJyb3IoXG4gXHRcdFx0XHRcdFx0XHRcdFwiQWJvcnRlZCBiZWNhdXNlIFwiICsgbW9kdWxlSWQgKyBcIiBpcyBub3QgYWNjZXB0ZWRcIiArIGNoYWluSW5mb1xuIFx0XHRcdFx0XHRcdFx0KTtcbiBcdFx0XHRcdFx0XHRicmVhaztcbiBcdFx0XHRcdFx0Y2FzZSBcImFjY2VwdGVkXCI6XG4gXHRcdFx0XHRcdFx0aWYgKG9wdGlvbnMub25BY2NlcHRlZCkgb3B0aW9ucy5vbkFjY2VwdGVkKHJlc3VsdCk7XG4gXHRcdFx0XHRcdFx0ZG9BcHBseSA9IHRydWU7XG4gXHRcdFx0XHRcdFx0YnJlYWs7XG4gXHRcdFx0XHRcdGNhc2UgXCJkaXNwb3NlZFwiOlxuIFx0XHRcdFx0XHRcdGlmIChvcHRpb25zLm9uRGlzcG9zZWQpIG9wdGlvbnMub25EaXNwb3NlZChyZXN1bHQpO1xuIFx0XHRcdFx0XHRcdGRvRGlzcG9zZSA9IHRydWU7XG4gXHRcdFx0XHRcdFx0YnJlYWs7XG4gXHRcdFx0XHRcdGRlZmF1bHQ6XG4gXHRcdFx0XHRcdFx0dGhyb3cgbmV3IEVycm9yKFwiVW5leGNlcHRpb24gdHlwZSBcIiArIHJlc3VsdC50eXBlKTtcbiBcdFx0XHRcdH1cbiBcdFx0XHRcdGlmIChhYm9ydEVycm9yKSB7XG4gXHRcdFx0XHRcdGhvdFNldFN0YXR1cyhcImFib3J0XCIpO1xuIFx0XHRcdFx0XHRyZXR1cm4gUHJvbWlzZS5yZWplY3QoYWJvcnRFcnJvcik7XG4gXHRcdFx0XHR9XG4gXHRcdFx0XHRpZiAoZG9BcHBseSkge1xuIFx0XHRcdFx0XHRhcHBsaWVkVXBkYXRlW21vZHVsZUlkXSA9IGhvdFVwZGF0ZVttb2R1bGVJZF07XG4gXHRcdFx0XHRcdGFkZEFsbFRvU2V0KG91dGRhdGVkTW9kdWxlcywgcmVzdWx0Lm91dGRhdGVkTW9kdWxlcyk7XG4gXHRcdFx0XHRcdGZvciAobW9kdWxlSWQgaW4gcmVzdWx0Lm91dGRhdGVkRGVwZW5kZW5jaWVzKSB7XG4gXHRcdFx0XHRcdFx0aWYgKFxuIFx0XHRcdFx0XHRcdFx0T2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKFxuIFx0XHRcdFx0XHRcdFx0XHRyZXN1bHQub3V0ZGF0ZWREZXBlbmRlbmNpZXMsXG4gXHRcdFx0XHRcdFx0XHRcdG1vZHVsZUlkXG4gXHRcdFx0XHRcdFx0XHQpXG4gXHRcdFx0XHRcdFx0KSB7XG4gXHRcdFx0XHRcdFx0XHRpZiAoIW91dGRhdGVkRGVwZW5kZW5jaWVzW21vZHVsZUlkXSlcbiBcdFx0XHRcdFx0XHRcdFx0b3V0ZGF0ZWREZXBlbmRlbmNpZXNbbW9kdWxlSWRdID0gW107XG4gXHRcdFx0XHRcdFx0XHRhZGRBbGxUb1NldChcbiBcdFx0XHRcdFx0XHRcdFx0b3V0ZGF0ZWREZXBlbmRlbmNpZXNbbW9kdWxlSWRdLFxuIFx0XHRcdFx0XHRcdFx0XHRyZXN1bHQub3V0ZGF0ZWREZXBlbmRlbmNpZXNbbW9kdWxlSWRdXG4gXHRcdFx0XHRcdFx0XHQpO1xuIFx0XHRcdFx0XHRcdH1cbiBcdFx0XHRcdFx0fVxuIFx0XHRcdFx0fVxuIFx0XHRcdFx0aWYgKGRvRGlzcG9zZSkge1xuIFx0XHRcdFx0XHRhZGRBbGxUb1NldChvdXRkYXRlZE1vZHVsZXMsIFtyZXN1bHQubW9kdWxlSWRdKTtcbiBcdFx0XHRcdFx0YXBwbGllZFVwZGF0ZVttb2R1bGVJZF0gPSB3YXJuVW5leHBlY3RlZFJlcXVpcmU7XG4gXHRcdFx0XHR9XG4gXHRcdFx0fVxuIFx0XHR9XG5cbiBcdFx0Ly8gU3RvcmUgc2VsZiBhY2NlcHRlZCBvdXRkYXRlZCBtb2R1bGVzIHRvIHJlcXVpcmUgdGhlbSBsYXRlciBieSB0aGUgbW9kdWxlIHN5c3RlbVxuIFx0XHR2YXIgb3V0ZGF0ZWRTZWxmQWNjZXB0ZWRNb2R1bGVzID0gW107XG4gXHRcdGZvciAoaSA9IDA7IGkgPCBvdXRkYXRlZE1vZHVsZXMubGVuZ3RoOyBpKyspIHtcbiBcdFx0XHRtb2R1bGVJZCA9IG91dGRhdGVkTW9kdWxlc1tpXTtcbiBcdFx0XHRpZiAoXG4gXHRcdFx0XHRpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSAmJlxuIFx0XHRcdFx0aW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uaG90Ll9zZWxmQWNjZXB0ZWQgJiZcbiBcdFx0XHRcdC8vIHJlbW92ZWQgc2VsZi1hY2NlcHRlZCBtb2R1bGVzIHNob3VsZCBub3QgYmUgcmVxdWlyZWRcbiBcdFx0XHRcdGFwcGxpZWRVcGRhdGVbbW9kdWxlSWRdICE9PSB3YXJuVW5leHBlY3RlZFJlcXVpcmVcbiBcdFx0XHQpIHtcbiBcdFx0XHRcdG91dGRhdGVkU2VsZkFjY2VwdGVkTW9kdWxlcy5wdXNoKHtcbiBcdFx0XHRcdFx0bW9kdWxlOiBtb2R1bGVJZCxcbiBcdFx0XHRcdFx0ZXJyb3JIYW5kbGVyOiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5ob3QuX3NlbGZBY2NlcHRlZFxuIFx0XHRcdFx0fSk7XG4gXHRcdFx0fVxuIFx0XHR9XG5cbiBcdFx0Ly8gTm93IGluIFwiZGlzcG9zZVwiIHBoYXNlXG4gXHRcdGhvdFNldFN0YXR1cyhcImRpc3Bvc2VcIik7XG4gXHRcdE9iamVjdC5rZXlzKGhvdEF2YWlsYWJsZUZpbGVzTWFwKS5mb3JFYWNoKGZ1bmN0aW9uKGNodW5rSWQpIHtcbiBcdFx0XHRpZiAoaG90QXZhaWxhYmxlRmlsZXNNYXBbY2h1bmtJZF0gPT09IGZhbHNlKSB7XG4gXHRcdFx0XHRob3REaXNwb3NlQ2h1bmsoY2h1bmtJZCk7XG4gXHRcdFx0fVxuIFx0XHR9KTtcblxuIFx0XHR2YXIgaWR4O1xuIFx0XHR2YXIgcXVldWUgPSBvdXRkYXRlZE1vZHVsZXMuc2xpY2UoKTtcbiBcdFx0d2hpbGUgKHF1ZXVlLmxlbmd0aCA+IDApIHtcbiBcdFx0XHRtb2R1bGVJZCA9IHF1ZXVlLnBvcCgpO1xuIFx0XHRcdG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdO1xuIFx0XHRcdGlmICghbW9kdWxlKSBjb250aW51ZTtcblxuIFx0XHRcdHZhciBkYXRhID0ge307XG5cbiBcdFx0XHQvLyBDYWxsIGRpc3Bvc2UgaGFuZGxlcnNcbiBcdFx0XHR2YXIgZGlzcG9zZUhhbmRsZXJzID0gbW9kdWxlLmhvdC5fZGlzcG9zZUhhbmRsZXJzO1xuIFx0XHRcdGZvciAoaiA9IDA7IGogPCBkaXNwb3NlSGFuZGxlcnMubGVuZ3RoOyBqKyspIHtcbiBcdFx0XHRcdGNiID0gZGlzcG9zZUhhbmRsZXJzW2pdO1xuIFx0XHRcdFx0Y2IoZGF0YSk7XG4gXHRcdFx0fVxuIFx0XHRcdGhvdEN1cnJlbnRNb2R1bGVEYXRhW21vZHVsZUlkXSA9IGRhdGE7XG5cbiBcdFx0XHQvLyBkaXNhYmxlIG1vZHVsZSAodGhpcyBkaXNhYmxlcyByZXF1aXJlcyBmcm9tIHRoaXMgbW9kdWxlKVxuIFx0XHRcdG1vZHVsZS5ob3QuYWN0aXZlID0gZmFsc2U7XG5cbiBcdFx0XHQvLyByZW1vdmUgbW9kdWxlIGZyb20gY2FjaGVcbiBcdFx0XHRkZWxldGUgaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF07XG5cbiBcdFx0XHQvLyB3aGVuIGRpc3Bvc2luZyB0aGVyZSBpcyBubyBuZWVkIHRvIGNhbGwgZGlzcG9zZSBoYW5kbGVyXG4gXHRcdFx0ZGVsZXRlIG91dGRhdGVkRGVwZW5kZW5jaWVzW21vZHVsZUlkXTtcblxuIFx0XHRcdC8vIHJlbW92ZSBcInBhcmVudHNcIiByZWZlcmVuY2VzIGZyb20gYWxsIGNoaWxkcmVuXG4gXHRcdFx0Zm9yIChqID0gMDsgaiA8IG1vZHVsZS5jaGlsZHJlbi5sZW5ndGg7IGorKykge1xuIFx0XHRcdFx0dmFyIGNoaWxkID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGUuY2hpbGRyZW5bal1dO1xuIFx0XHRcdFx0aWYgKCFjaGlsZCkgY29udGludWU7XG4gXHRcdFx0XHRpZHggPSBjaGlsZC5wYXJlbnRzLmluZGV4T2YobW9kdWxlSWQpO1xuIFx0XHRcdFx0aWYgKGlkeCA+PSAwKSB7XG4gXHRcdFx0XHRcdGNoaWxkLnBhcmVudHMuc3BsaWNlKGlkeCwgMSk7XG4gXHRcdFx0XHR9XG4gXHRcdFx0fVxuIFx0XHR9XG5cbiBcdFx0Ly8gcmVtb3ZlIG91dGRhdGVkIGRlcGVuZGVuY3kgZnJvbSBtb2R1bGUgY2hpbGRyZW5cbiBcdFx0dmFyIGRlcGVuZGVuY3k7XG4gXHRcdHZhciBtb2R1bGVPdXRkYXRlZERlcGVuZGVuY2llcztcbiBcdFx0Zm9yIChtb2R1bGVJZCBpbiBvdXRkYXRlZERlcGVuZGVuY2llcykge1xuIFx0XHRcdGlmIChcbiBcdFx0XHRcdE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvdXRkYXRlZERlcGVuZGVuY2llcywgbW9kdWxlSWQpXG4gXHRcdFx0KSB7XG4gXHRcdFx0XHRtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXTtcbiBcdFx0XHRcdGlmIChtb2R1bGUpIHtcbiBcdFx0XHRcdFx0bW9kdWxlT3V0ZGF0ZWREZXBlbmRlbmNpZXMgPSBvdXRkYXRlZERlcGVuZGVuY2llc1ttb2R1bGVJZF07XG4gXHRcdFx0XHRcdGZvciAoaiA9IDA7IGogPCBtb2R1bGVPdXRkYXRlZERlcGVuZGVuY2llcy5sZW5ndGg7IGorKykge1xuIFx0XHRcdFx0XHRcdGRlcGVuZGVuY3kgPSBtb2R1bGVPdXRkYXRlZERlcGVuZGVuY2llc1tqXTtcbiBcdFx0XHRcdFx0XHRpZHggPSBtb2R1bGUuY2hpbGRyZW4uaW5kZXhPZihkZXBlbmRlbmN5KTtcbiBcdFx0XHRcdFx0XHRpZiAoaWR4ID49IDApIG1vZHVsZS5jaGlsZHJlbi5zcGxpY2UoaWR4LCAxKTtcbiBcdFx0XHRcdFx0fVxuIFx0XHRcdFx0fVxuIFx0XHRcdH1cbiBcdFx0fVxuXG4gXHRcdC8vIE5vdyBpbiBcImFwcGx5XCIgcGhhc2VcbiBcdFx0aG90U2V0U3RhdHVzKFwiYXBwbHlcIik7XG5cbiBcdFx0aG90Q3VycmVudEhhc2ggPSBob3RVcGRhdGVOZXdIYXNoO1xuXG4gXHRcdC8vIGluc2VydCBuZXcgY29kZVxuIFx0XHRmb3IgKG1vZHVsZUlkIGluIGFwcGxpZWRVcGRhdGUpIHtcbiBcdFx0XHRpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKGFwcGxpZWRVcGRhdGUsIG1vZHVsZUlkKSkge1xuIFx0XHRcdFx0bW9kdWxlc1ttb2R1bGVJZF0gPSBhcHBsaWVkVXBkYXRlW21vZHVsZUlkXTtcbiBcdFx0XHR9XG4gXHRcdH1cblxuIFx0XHQvLyBjYWxsIGFjY2VwdCBoYW5kbGVyc1xuIFx0XHR2YXIgZXJyb3IgPSBudWxsO1xuIFx0XHRmb3IgKG1vZHVsZUlkIGluIG91dGRhdGVkRGVwZW5kZW5jaWVzKSB7XG4gXHRcdFx0aWYgKFxuIFx0XHRcdFx0T2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG91dGRhdGVkRGVwZW5kZW5jaWVzLCBtb2R1bGVJZClcbiBcdFx0XHQpIHtcbiBcdFx0XHRcdG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdO1xuIFx0XHRcdFx0aWYgKG1vZHVsZSkge1xuIFx0XHRcdFx0XHRtb2R1bGVPdXRkYXRlZERlcGVuZGVuY2llcyA9IG91dGRhdGVkRGVwZW5kZW5jaWVzW21vZHVsZUlkXTtcbiBcdFx0XHRcdFx0dmFyIGNhbGxiYWNrcyA9IFtdO1xuIFx0XHRcdFx0XHRmb3IgKGkgPSAwOyBpIDwgbW9kdWxlT3V0ZGF0ZWREZXBlbmRlbmNpZXMubGVuZ3RoOyBpKyspIHtcbiBcdFx0XHRcdFx0XHRkZXBlbmRlbmN5ID0gbW9kdWxlT3V0ZGF0ZWREZXBlbmRlbmNpZXNbaV07XG4gXHRcdFx0XHRcdFx0Y2IgPSBtb2R1bGUuaG90Ll9hY2NlcHRlZERlcGVuZGVuY2llc1tkZXBlbmRlbmN5XTtcbiBcdFx0XHRcdFx0XHRpZiAoY2IpIHtcbiBcdFx0XHRcdFx0XHRcdGlmIChjYWxsYmFja3MuaW5kZXhPZihjYikgIT09IC0xKSBjb250aW51ZTtcbiBcdFx0XHRcdFx0XHRcdGNhbGxiYWNrcy5wdXNoKGNiKTtcbiBcdFx0XHRcdFx0XHR9XG4gXHRcdFx0XHRcdH1cbiBcdFx0XHRcdFx0Zm9yIChpID0gMDsgaSA8IGNhbGxiYWNrcy5sZW5ndGg7IGkrKykge1xuIFx0XHRcdFx0XHRcdGNiID0gY2FsbGJhY2tzW2ldO1xuIFx0XHRcdFx0XHRcdHRyeSB7XG4gXHRcdFx0XHRcdFx0XHRjYihtb2R1bGVPdXRkYXRlZERlcGVuZGVuY2llcyk7XG4gXHRcdFx0XHRcdFx0fSBjYXRjaCAoZXJyKSB7XG4gXHRcdFx0XHRcdFx0XHRpZiAob3B0aW9ucy5vbkVycm9yZWQpIHtcbiBcdFx0XHRcdFx0XHRcdFx0b3B0aW9ucy5vbkVycm9yZWQoe1xuIFx0XHRcdFx0XHRcdFx0XHRcdHR5cGU6IFwiYWNjZXB0LWVycm9yZWRcIixcbiBcdFx0XHRcdFx0XHRcdFx0XHRtb2R1bGVJZDogbW9kdWxlSWQsXG4gXHRcdFx0XHRcdFx0XHRcdFx0ZGVwZW5kZW5jeUlkOiBtb2R1bGVPdXRkYXRlZERlcGVuZGVuY2llc1tpXSxcbiBcdFx0XHRcdFx0XHRcdFx0XHRlcnJvcjogZXJyXG4gXHRcdFx0XHRcdFx0XHRcdH0pO1xuIFx0XHRcdFx0XHRcdFx0fVxuIFx0XHRcdFx0XHRcdFx0aWYgKCFvcHRpb25zLmlnbm9yZUVycm9yZWQpIHtcbiBcdFx0XHRcdFx0XHRcdFx0aWYgKCFlcnJvcikgZXJyb3IgPSBlcnI7XG4gXHRcdFx0XHRcdFx0XHR9XG4gXHRcdFx0XHRcdFx0fVxuIFx0XHRcdFx0XHR9XG4gXHRcdFx0XHR9XG4gXHRcdFx0fVxuIFx0XHR9XG5cbiBcdFx0Ly8gTG9hZCBzZWxmIGFjY2VwdGVkIG1vZHVsZXNcbiBcdFx0Zm9yIChpID0gMDsgaSA8IG91dGRhdGVkU2VsZkFjY2VwdGVkTW9kdWxlcy5sZW5ndGg7IGkrKykge1xuIFx0XHRcdHZhciBpdGVtID0gb3V0ZGF0ZWRTZWxmQWNjZXB0ZWRNb2R1bGVzW2ldO1xuIFx0XHRcdG1vZHVsZUlkID0gaXRlbS5tb2R1bGU7XG4gXHRcdFx0aG90Q3VycmVudFBhcmVudHMgPSBbbW9kdWxlSWRdO1xuIFx0XHRcdHRyeSB7XG4gXHRcdFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKTtcbiBcdFx0XHR9IGNhdGNoIChlcnIpIHtcbiBcdFx0XHRcdGlmICh0eXBlb2YgaXRlbS5lcnJvckhhbmRsZXIgPT09IFwiZnVuY3Rpb25cIikge1xuIFx0XHRcdFx0XHR0cnkge1xuIFx0XHRcdFx0XHRcdGl0ZW0uZXJyb3JIYW5kbGVyKGVycik7XG4gXHRcdFx0XHRcdH0gY2F0Y2ggKGVycjIpIHtcbiBcdFx0XHRcdFx0XHRpZiAob3B0aW9ucy5vbkVycm9yZWQpIHtcbiBcdFx0XHRcdFx0XHRcdG9wdGlvbnMub25FcnJvcmVkKHtcbiBcdFx0XHRcdFx0XHRcdFx0dHlwZTogXCJzZWxmLWFjY2VwdC1lcnJvci1oYW5kbGVyLWVycm9yZWRcIixcbiBcdFx0XHRcdFx0XHRcdFx0bW9kdWxlSWQ6IG1vZHVsZUlkLFxuIFx0XHRcdFx0XHRcdFx0XHRlcnJvcjogZXJyMixcbiBcdFx0XHRcdFx0XHRcdFx0b3JpZ2luYWxFcnJvcjogZXJyXG4gXHRcdFx0XHRcdFx0XHR9KTtcbiBcdFx0XHRcdFx0XHR9XG4gXHRcdFx0XHRcdFx0aWYgKCFvcHRpb25zLmlnbm9yZUVycm9yZWQpIHtcbiBcdFx0XHRcdFx0XHRcdGlmICghZXJyb3IpIGVycm9yID0gZXJyMjtcbiBcdFx0XHRcdFx0XHR9XG4gXHRcdFx0XHRcdFx0aWYgKCFlcnJvcikgZXJyb3IgPSBlcnI7XG4gXHRcdFx0XHRcdH1cbiBcdFx0XHRcdH0gZWxzZSB7XG4gXHRcdFx0XHRcdGlmIChvcHRpb25zLm9uRXJyb3JlZCkge1xuIFx0XHRcdFx0XHRcdG9wdGlvbnMub25FcnJvcmVkKHtcbiBcdFx0XHRcdFx0XHRcdHR5cGU6IFwic2VsZi1hY2NlcHQtZXJyb3JlZFwiLFxuIFx0XHRcdFx0XHRcdFx0bW9kdWxlSWQ6IG1vZHVsZUlkLFxuIFx0XHRcdFx0XHRcdFx0ZXJyb3I6IGVyclxuIFx0XHRcdFx0XHRcdH0pO1xuIFx0XHRcdFx0XHR9XG4gXHRcdFx0XHRcdGlmICghb3B0aW9ucy5pZ25vcmVFcnJvcmVkKSB7XG4gXHRcdFx0XHRcdFx0aWYgKCFlcnJvcikgZXJyb3IgPSBlcnI7XG4gXHRcdFx0XHRcdH1cbiBcdFx0XHRcdH1cbiBcdFx0XHR9XG4gXHRcdH1cblxuIFx0XHQvLyBoYW5kbGUgZXJyb3JzIGluIGFjY2VwdCBoYW5kbGVycyBhbmQgc2VsZiBhY2NlcHRlZCBtb2R1bGUgbG9hZFxuIFx0XHRpZiAoZXJyb3IpIHtcbiBcdFx0XHRob3RTZXRTdGF0dXMoXCJmYWlsXCIpO1xuIFx0XHRcdHJldHVybiBQcm9taXNlLnJlamVjdChlcnJvcik7XG4gXHRcdH1cblxuIFx0XHRob3RTZXRTdGF0dXMoXCJpZGxlXCIpO1xuIFx0XHRyZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24ocmVzb2x2ZSkge1xuIFx0XHRcdHJlc29sdmUob3V0ZGF0ZWRNb2R1bGVzKTtcbiBcdFx0fSk7XG4gXHR9XG5cbiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9LFxuIFx0XHRcdGhvdDogaG90Q3JlYXRlTW9kdWxlKG1vZHVsZUlkKSxcbiBcdFx0XHRwYXJlbnRzOiAoaG90Q3VycmVudFBhcmVudHNUZW1wID0gaG90Q3VycmVudFBhcmVudHMsIGhvdEN1cnJlbnRQYXJlbnRzID0gW10sIGhvdEN1cnJlbnRQYXJlbnRzVGVtcCksXG4gXHRcdFx0Y2hpbGRyZW46IFtdXG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIGhvdENyZWF0ZVJlcXVpcmUobW9kdWxlSWQpKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG4gXHQvLyBfX3dlYnBhY2tfaGFzaF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmggPSBmdW5jdGlvbigpIHsgcmV0dXJuIGhvdEN1cnJlbnRIYXNoOyB9O1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIGhvdENyZWF0ZVJlcXVpcmUoXCIuL2V4YW1wbGUvc2VydmVyLmJsb3BcIikoX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL2V4YW1wbGUvc2VydmVyLmJsb3BcIik7XG4iXSwic291cmNlUm9vdCI6IiJ9