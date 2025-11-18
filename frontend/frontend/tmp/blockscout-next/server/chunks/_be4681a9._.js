module.exports = {

"[project]/instrumentation.node.ts [instrumentation-edge] (ecmascript, async loader)": ((__turbopack_context__) => {

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.v((parentImport) => {
    return Promise.all([
  "server/chunks/node_modules_@opentelemetry_813c82d3._.js",
  "server/chunks/[root of the server]__00852bc9._.js"
].map((chunk) => __turbopack_context__.l(chunk))).then(() => {
        return parentImport("[project]/instrumentation.node.ts [instrumentation-edge] (ecmascript)");
    });
});
}}),
"[project]/startup.node.ts [instrumentation-edge] (ecmascript, async loader)": ((__turbopack_context__) => {

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.v((parentImport) => {
    return Promise.all([
  "server/chunks/[root of the server]__334ada55._.js"
].map((chunk) => __turbopack_context__.l(chunk))).then(() => {
        return parentImport("[project]/startup.node.ts [instrumentation-edge] (ecmascript)");
    });
});
}}),

};