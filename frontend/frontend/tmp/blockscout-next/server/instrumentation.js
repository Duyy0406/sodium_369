const CHUNK_PUBLIC_PATH = "server/instrumentation.js";
const runtime = require("./chunks/[turbopack]_runtime.js");
runtime.loadChunk("server/chunks/_be4681a9._.js");
runtime.loadChunk("server/chunks/instrumentation_ts_658412b4._.js");
runtime.getOrInstantiateRuntimeModule("[project]/instrumentation.ts [instrumentation-edge] (ecmascript)", CHUNK_PUBLIC_PATH);
module.exports = runtime.getOrInstantiateRuntimeModule("[project]/instrumentation.ts [instrumentation-edge] (ecmascript)", CHUNK_PUBLIC_PATH).exports;
