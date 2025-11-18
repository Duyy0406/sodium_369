module.exports = {

"[project]/instrumentation.ts [instrumentation-edge] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "register": (()=>register)
});
async function register() {
    if ("TURBOPACK compile-time truthy", 1) {
        if (process.env.NEXT_OPEN_TELEMETRY_ENABLED === 'true') {
            await __turbopack_context__.r("[project]/instrumentation.node.ts [instrumentation-edge] (ecmascript, async loader)")(__turbopack_context__.i);
        }
        await __turbopack_context__.r("[project]/startup.node.ts [instrumentation-edge] (ecmascript, async loader)")(__turbopack_context__.i);
    }
}
}}),

};

//# sourceMappingURL=instrumentation_ts_658412b4._.js.map