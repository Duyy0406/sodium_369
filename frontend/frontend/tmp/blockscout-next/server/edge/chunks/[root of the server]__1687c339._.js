(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push(["chunks/[root of the server]__1687c339._.js", {

"[externals]/node:async_hooks [external] (node:async_hooks, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("node:async_hooks", () => require("node:async_hooks"));

module.exports = mod;
}}),
"[externals]/node:buffer [external] (node:buffer, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("node:buffer", () => require("node:buffer"));

module.exports = mod;
}}),
"[project]/toolkit/utils/url.ts [middleware-edge] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "makePrettyLink": (()=>makePrettyLink),
    "stripLeadingSlash": (()=>stripLeadingSlash),
    "stripTrailingSlash": (()=>stripTrailingSlash)
});
const stripTrailingSlash = (str)=>str[str.length - 1] === '/' ? str.slice(0, -1) : str;
const stripLeadingSlash = (str)=>str[0] === '/' ? str.slice(1) : str;
function makePrettyLink(url) {
    try {
        const urlObj = new URL(url ?? '');
        return {
            href: urlObj.href,
            domain: urlObj.hostname
        };
    } catch (error) {}
}
}}),
"[project]/toolkit/utils/isBrowser.ts [middleware-edge] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "isBrowser": (()=>isBrowser)
});
function isBrowser() {
    return "undefined" !== 'undefined';
}
}}),
"[project]/toolkit/utils/regexp.ts [middleware-edge] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "BLOCK_HEIGHT": (()=>BLOCK_HEIGHT),
    "FILE_EXTENSION": (()=>FILE_EXTENSION),
    "HEX_REGEXP": (()=>HEX_REGEXP),
    "HEX_REGEXP_WITH_0X": (()=>HEX_REGEXP_WITH_0X),
    "IPFS_PREFIX": (()=>IPFS_PREFIX),
    "URL_PREFIX": (()=>URL_PREFIX)
});
const URL_PREFIX = /^https?:\/\//i;
const IPFS_PREFIX = /^ipfs:\/\//i;
const HEX_REGEXP = /^(?:0x)?[\da-fA-F]+$/;
const HEX_REGEXP_WITH_0X = /^0x[\da-fA-F]+$/;
const FILE_EXTENSION = /\.([\da-z]+)$/i;
const BLOCK_HEIGHT = /^\d+$/;
}}),
"[project]/configs/app/utils.ts [middleware-edge] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "buildExternalAssetFilePath": (()=>buildExternalAssetFilePath),
    "getEnvValue": (()=>getEnvValue),
    "getExternalAssetFilePath": (()=>getExternalAssetFilePath),
    "parseEnvJson": (()=>parseEnvJson),
    "replaceQuotes": (()=>replaceQuotes)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$toolkit$2f$utils$2f$isBrowser$2e$ts__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/toolkit/utils/isBrowser.ts [middleware-edge] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$toolkit$2f$utils$2f$regexp$2e$ts__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/toolkit/utils/regexp.ts [middleware-edge] (ecmascript)");
;
;
const replaceQuotes = (value)=>value?.replaceAll('\'', '"');
const getEnvValue = (envName)=>{
    // eslint-disable-next-line no-restricted-properties
    const envs = ((0, __TURBOPACK__imported__module__$5b$project$5d2f$toolkit$2f$utils$2f$isBrowser$2e$ts__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["isBrowser"])() ? window.__envs : process.env) ?? {};
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$toolkit$2f$utils$2f$isBrowser$2e$ts__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["isBrowser"])() && envs.NEXT_PUBLIC_APP_INSTANCE === 'pw') {
        const storageValue = localStorage.getItem(envName);
        if (typeof storageValue === 'string') {
            return storageValue;
        }
    }
    return replaceQuotes(envs[envName]);
};
const parseEnvJson = (env)=>{
    try {
        return JSON.parse(env || 'null');
    } catch (error) {
        return null;
    }
};
const getExternalAssetFilePath = (envName)=>{
    const parsedValue = getEnvValue(envName);
    if (!parsedValue) {
        return;
    }
    return buildExternalAssetFilePath(envName, parsedValue);
};
const buildExternalAssetFilePath = (name, value)=>{
    try {
        const fileName = name.replace(/^NEXT_PUBLIC_/, '').replace(/_URL$/, '').toLowerCase();
        const fileExtension = getAssetFileExtension(value);
        if (!fileExtension) {
            throw new Error('Cannot get file path');
        }
        return `/assets/configs/${fileName}.${fileExtension}`;
    } catch (error) {
        return;
    }
};
function getAssetFileExtension(value) {
    try {
        const url = new URL(value);
        return url.pathname.match(__TURBOPACK__imported__module__$5b$project$5d2f$toolkit$2f$utils$2f$regexp$2e$ts__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["FILE_EXTENSION"])?.[1];
    } catch (error) {
        return parseEnvJson(value) ? 'json' : undefined;
    }
}
}}),
"[project]/configs/app/apis.ts [middleware-edge] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$toolkit$2f$utils$2f$url$2e$ts__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/toolkit/utils/url.ts [middleware-edge] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$configs$2f$app$2f$utils$2e$ts__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/configs/app/utils.ts [middleware-edge] (ecmascript)");
;
;
const generalApi = (()=>{
    const apiHost = (0, __TURBOPACK__imported__module__$5b$project$5d2f$configs$2f$app$2f$utils$2e$ts__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["getEnvValue"])('NEXT_PUBLIC_API_HOST');
    const apiSchema = (0, __TURBOPACK__imported__module__$5b$project$5d2f$configs$2f$app$2f$utils$2e$ts__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["getEnvValue"])('NEXT_PUBLIC_API_PROTOCOL') || 'https';
    const apiPort = (0, __TURBOPACK__imported__module__$5b$project$5d2f$configs$2f$app$2f$utils$2e$ts__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["getEnvValue"])('NEXT_PUBLIC_API_PORT');
    const apiEndpoint = [
        apiSchema || 'https',
        '://',
        apiHost,
        apiPort && ':' + apiPort
    ].filter(Boolean).join('');
    const socketSchema = (0, __TURBOPACK__imported__module__$5b$project$5d2f$configs$2f$app$2f$utils$2e$ts__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["getEnvValue"])('NEXT_PUBLIC_API_WEBSOCKET_PROTOCOL') || 'wss';
    const socketEndpoint = [
        socketSchema,
        '://',
        apiHost,
        apiPort && ':' + apiPort
    ].filter(Boolean).join('');
    return Object.freeze({
        endpoint: apiEndpoint,
        basePath: (0, __TURBOPACK__imported__module__$5b$project$5d2f$toolkit$2f$utils$2f$url$2e$ts__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["stripTrailingSlash"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$configs$2f$app$2f$utils$2e$ts__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["getEnvValue"])('NEXT_PUBLIC_API_BASE_PATH') || ''),
        socketEndpoint: socketEndpoint,
        host: apiHost ?? '',
        protocol: apiSchema ?? 'https',
        port: apiPort
    });
})();
const adminApi = (()=>{
    const apiHost = (0, __TURBOPACK__imported__module__$5b$project$5d2f$configs$2f$app$2f$utils$2e$ts__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["getEnvValue"])('NEXT_PUBLIC_ADMIN_SERVICE_API_HOST');
    if (!apiHost) {
        return;
    }
    return Object.freeze({
        endpoint: apiHost
    });
})();
const bensApi = (()=>{
    const apiHost = (0, __TURBOPACK__imported__module__$5b$project$5d2f$configs$2f$app$2f$utils$2e$ts__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["getEnvValue"])('NEXT_PUBLIC_NAME_SERVICE_API_HOST');
    if (!apiHost) {
        return;
    }
    return Object.freeze({
        endpoint: apiHost
    });
})();
const contractInfoApi = (()=>{
    const apiHost = (0, __TURBOPACK__imported__module__$5b$project$5d2f$configs$2f$app$2f$utils$2e$ts__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["getEnvValue"])('NEXT_PUBLIC_CONTRACT_INFO_API_HOST');
    if (!apiHost) {
        return;
    }
    return Object.freeze({
        endpoint: apiHost
    });
})();
const metadataApi = (()=>{
    const apiHost = (0, __TURBOPACK__imported__module__$5b$project$5d2f$configs$2f$app$2f$utils$2e$ts__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["getEnvValue"])('NEXT_PUBLIC_METADATA_SERVICE_API_HOST');
    if (!apiHost) {
        return;
    }
    return Object.freeze({
        endpoint: apiHost
    });
})();
const rewardsApi = (()=>{
    const apiHost = (0, __TURBOPACK__imported__module__$5b$project$5d2f$configs$2f$app$2f$utils$2e$ts__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["getEnvValue"])('NEXT_PUBLIC_REWARDS_SERVICE_API_HOST');
    if (!apiHost) {
        return;
    }
    return Object.freeze({
        endpoint: apiHost
    });
})();
const multichainApi = (()=>{
    const apiHost = (0, __TURBOPACK__imported__module__$5b$project$5d2f$configs$2f$app$2f$utils$2e$ts__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["getEnvValue"])('NEXT_PUBLIC_MULTICHAIN_AGGREGATOR_API_HOST');
    if (!apiHost) {
        return;
    }
    try {
        const url = new URL(apiHost);
        return Object.freeze({
            endpoint: apiHost,
            socketEndpoint: `wss://${url.host}`,
            basePath: (0, __TURBOPACK__imported__module__$5b$project$5d2f$toolkit$2f$utils$2f$url$2e$ts__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["stripTrailingSlash"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$configs$2f$app$2f$utils$2e$ts__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["getEnvValue"])('NEXT_PUBLIC_MULTICHAIN_AGGREGATOR_BASE_PATH') || '')
        });
    } catch (error) {
        return;
    }
})();
const statsApi = (()=>{
    const apiHost = (0, __TURBOPACK__imported__module__$5b$project$5d2f$configs$2f$app$2f$utils$2e$ts__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["getEnvValue"])('NEXT_PUBLIC_STATS_API_HOST');
    if (!apiHost) {
        return;
    }
    return Object.freeze({
        endpoint: apiHost,
        basePath: (0, __TURBOPACK__imported__module__$5b$project$5d2f$toolkit$2f$utils$2f$url$2e$ts__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["stripTrailingSlash"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$configs$2f$app$2f$utils$2e$ts__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["getEnvValue"])('NEXT_PUBLIC_STATS_API_BASE_PATH') || '')
    });
})();
const tacApi = (()=>{
    const apiHost = (0, __TURBOPACK__imported__module__$5b$project$5d2f$configs$2f$app$2f$utils$2e$ts__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["getEnvValue"])('NEXT_PUBLIC_TAC_OPERATION_LIFECYCLE_API_HOST');
    if (!apiHost) {
        return;
    }
    return Object.freeze({
        endpoint: apiHost
    });
})();
const userOpsApi = (()=>{
    const apiHost = (0, __TURBOPACK__imported__module__$5b$project$5d2f$configs$2f$app$2f$utils$2e$ts__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["getEnvValue"])('NEXT_PUBLIC_USER_OPS_INDEXER_API_HOST');
    if (!apiHost) {
        return;
    }
    return Object.freeze({
        endpoint: apiHost
    });
})();
const visualizeApi = (()=>{
    const apiHost = (0, __TURBOPACK__imported__module__$5b$project$5d2f$configs$2f$app$2f$utils$2e$ts__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["getEnvValue"])('NEXT_PUBLIC_VISUALIZE_API_HOST');
    if (!apiHost) {
        return;
    }
    return Object.freeze({
        endpoint: apiHost,
        basePath: (0, __TURBOPACK__imported__module__$5b$project$5d2f$toolkit$2f$utils$2f$url$2e$ts__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["stripTrailingSlash"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$configs$2f$app$2f$utils$2e$ts__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["getEnvValue"])('NEXT_PUBLIC_VISUALIZE_API_BASE_PATH') || '')
    });
})();
const apis = Object.freeze({
    general: generalApi,
    admin: adminApi,
    bens: bensApi,
    contractInfo: contractInfoApi,
    metadata: metadataApi,
    multichain: multichainApi,
    rewards: rewardsApi,
    stats: statsApi,
    tac: tacApi,
    userOps: userOpsApi,
    visualize: visualizeApi
});
const __TURBOPACK__default__export__ = apis;
}}),
"[project]/configs/app/app.ts [middleware-edge] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$configs$2f$app$2f$utils$2e$ts__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/configs/app/utils.ts [middleware-edge] (ecmascript)");
;
const appPort = (0, __TURBOPACK__imported__module__$5b$project$5d2f$configs$2f$app$2f$utils$2e$ts__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["getEnvValue"])('NEXT_PUBLIC_APP_PORT');
const appSchema = (0, __TURBOPACK__imported__module__$5b$project$5d2f$configs$2f$app$2f$utils$2e$ts__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["getEnvValue"])('NEXT_PUBLIC_APP_PROTOCOL');
const appHost = (0, __TURBOPACK__imported__module__$5b$project$5d2f$configs$2f$app$2f$utils$2e$ts__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["getEnvValue"])('NEXT_PUBLIC_APP_HOST');
const baseUrl = [
    appSchema || 'https',
    '://',
    appHost,
    appPort && ':' + appPort
].filter(Boolean).join('');
const isDev = (0, __TURBOPACK__imported__module__$5b$project$5d2f$configs$2f$app$2f$utils$2e$ts__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["getEnvValue"])('NEXT_PUBLIC_APP_ENV') === 'development';
const isPw = (0, __TURBOPACK__imported__module__$5b$project$5d2f$configs$2f$app$2f$utils$2e$ts__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["getEnvValue"])('NEXT_PUBLIC_APP_INSTANCE') === 'pw';
const spriteHash = (0, __TURBOPACK__imported__module__$5b$project$5d2f$configs$2f$app$2f$utils$2e$ts__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["getEnvValue"])('NEXT_PUBLIC_ICON_SPRITE_HASH');
const app = Object.freeze({
    isDev,
    isPw,
    protocol: appSchema,
    host: appHost,
    port: appPort,
    baseUrl,
    useProxy: (0, __TURBOPACK__imported__module__$5b$project$5d2f$configs$2f$app$2f$utils$2e$ts__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["getEnvValue"])('NEXT_PUBLIC_USE_NEXT_JS_PROXY') === 'true',
    spriteHash
});
const __TURBOPACK__default__export__ = app;
}}),
"[project]/toolkit/components/forms/validators/url.ts [middleware-edge] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "DOMAIN_REGEXP": (()=>DOMAIN_REGEXP),
    "domainValidator": (()=>domainValidator),
    "urlValidator": (()=>urlValidator)
});
function urlValidator(value) {
    if (!value) {
        return true;
    }
    try {
        new URL(value);
        return true;
    } catch (error) {
        return 'Incorrect URL';
    }
}
const DOMAIN_REGEXP = /(?:[a-z\d](?:[a-z\d-]{0,61}[a-z\d])?\.)+[a-z\d][a-z\d-]{0,61}[a-z\d]/gi;
function domainValidator(value) {
    if (!value) {
        return true;
    }
    const domain = (()=>{
        try {
            const url = new URL(`https://${value}`);
            return url.hostname;
        } catch (error) {
            return;
        }
    })();
    return domain === value.toLowerCase() || 'Incorrect domain';
}
}}),
"[project]/configs/app/chain.ts [middleware-edge] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$toolkit$2f$components$2f$forms$2f$validators$2f$url$2e$ts__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/toolkit/components/forms/validators/url.ts [middleware-edge] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$configs$2f$app$2f$utils$2e$ts__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/configs/app/utils.ts [middleware-edge] (ecmascript)");
;
;
const DEFAULT_CURRENCY_DECIMALS = 18;
const rollupType = (0, __TURBOPACK__imported__module__$5b$project$5d2f$configs$2f$app$2f$utils$2e$ts__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["getEnvValue"])('NEXT_PUBLIC_ROLLUP_TYPE');
const verificationType = (()=>{
    if (rollupType === 'arbitrum') {
        return 'posting';
    }
    if (rollupType === 'zkEvm') {
        return 'sequencing';
    }
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$configs$2f$app$2f$utils$2e$ts__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["getEnvValue"])('NEXT_PUBLIC_NETWORK_VERIFICATION_TYPE') || 'mining';
})();
const rpcUrls = (()=>{
    const envValue = (0, __TURBOPACK__imported__module__$5b$project$5d2f$configs$2f$app$2f$utils$2e$ts__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["getEnvValue"])('NEXT_PUBLIC_NETWORK_RPC_URL');
    const isUrl = (0, __TURBOPACK__imported__module__$5b$project$5d2f$toolkit$2f$components$2f$forms$2f$validators$2f$url$2e$ts__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["urlValidator"])(envValue);
    if (envValue && isUrl === true) {
        return [
            envValue
        ];
    }
    const parsedValue = (0, __TURBOPACK__imported__module__$5b$project$5d2f$configs$2f$app$2f$utils$2e$ts__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["parseEnvJson"])(envValue);
    return Array.isArray(parsedValue) ? parsedValue : [];
})();
const chain = Object.freeze({
    id: (0, __TURBOPACK__imported__module__$5b$project$5d2f$configs$2f$app$2f$utils$2e$ts__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["getEnvValue"])('NEXT_PUBLIC_NETWORK_ID'),
    name: (0, __TURBOPACK__imported__module__$5b$project$5d2f$configs$2f$app$2f$utils$2e$ts__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["getEnvValue"])('NEXT_PUBLIC_NETWORK_NAME'),
    shortName: (0, __TURBOPACK__imported__module__$5b$project$5d2f$configs$2f$app$2f$utils$2e$ts__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["getEnvValue"])('NEXT_PUBLIC_NETWORK_SHORT_NAME'),
    currency: {
        name: (0, __TURBOPACK__imported__module__$5b$project$5d2f$configs$2f$app$2f$utils$2e$ts__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["getEnvValue"])('NEXT_PUBLIC_NETWORK_CURRENCY_NAME'),
        weiName: (0, __TURBOPACK__imported__module__$5b$project$5d2f$configs$2f$app$2f$utils$2e$ts__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["getEnvValue"])('NEXT_PUBLIC_NETWORK_CURRENCY_WEI_NAME'),
        symbol: (0, __TURBOPACK__imported__module__$5b$project$5d2f$configs$2f$app$2f$utils$2e$ts__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["getEnvValue"])('NEXT_PUBLIC_NETWORK_CURRENCY_SYMBOL'),
        decimals: Number((0, __TURBOPACK__imported__module__$5b$project$5d2f$configs$2f$app$2f$utils$2e$ts__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["getEnvValue"])('NEXT_PUBLIC_NETWORK_CURRENCY_DECIMALS')) || DEFAULT_CURRENCY_DECIMALS
    },
    secondaryCoin: {
        symbol: (0, __TURBOPACK__imported__module__$5b$project$5d2f$configs$2f$app$2f$utils$2e$ts__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["getEnvValue"])('NEXT_PUBLIC_NETWORK_SECONDARY_COIN_SYMBOL')
    },
    hasMultipleGasCurrencies: (0, __TURBOPACK__imported__module__$5b$project$5d2f$configs$2f$app$2f$utils$2e$ts__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["getEnvValue"])('NEXT_PUBLIC_NETWORK_MULTIPLE_GAS_CURRENCIES') === 'true',
    tokenStandard: (0, __TURBOPACK__imported__module__$5b$project$5d2f$configs$2f$app$2f$utils$2e$ts__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["getEnvValue"])('NEXT_PUBLIC_NETWORK_TOKEN_STANDARD_NAME') || 'ERC',
    rpcUrls,
    isTestnet: (0, __TURBOPACK__imported__module__$5b$project$5d2f$configs$2f$app$2f$utils$2e$ts__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["getEnvValue"])('NEXT_PUBLIC_IS_TESTNET') === 'true',
    verificationType
});
const __TURBOPACK__default__export__ = chain;
}}),
"[project]/configs/app/features/advancedFilter.ts [middleware-edge] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$configs$2f$app$2f$utils$2e$ts__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/configs/app/utils.ts [middleware-edge] (ecmascript)");
;
const isDisabled = (0, __TURBOPACK__imported__module__$5b$project$5d2f$configs$2f$app$2f$utils$2e$ts__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["getEnvValue"])('NEXT_PUBLIC_ADVANCED_FILTER_ENABLED') === 'false';
const title = 'Advanced filter';
const config = (()=>{
    if (!isDisabled) {
        return Object.freeze({
            title,
            isEnabled: true
        });
    }
    return Object.freeze({
        title,
        isEnabled: false
    });
})();
const __TURBOPACK__default__export__ = config;
}}),
"[project]/configs/app/services.ts [middleware-edge] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$configs$2f$app$2f$utils$2e$ts__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/configs/app/utils.ts [middleware-edge] (ecmascript)");
;
const __TURBOPACK__default__export__ = Object.freeze({
    reCaptchaV2: {
        siteKey: (0, __TURBOPACK__imported__module__$5b$project$5d2f$configs$2f$app$2f$utils$2e$ts__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["getEnvValue"])('NEXT_PUBLIC_RE_CAPTCHA_APP_SITE_KEY')
    }
});
}}),
"[project]/configs/app/features/account.ts [middleware-edge] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$configs$2f$app$2f$services$2e$ts__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/configs/app/services.ts [middleware-edge] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$configs$2f$app$2f$utils$2e$ts__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/configs/app/utils.ts [middleware-edge] (ecmascript)");
;
;
const title = 'My account';
const config = (()=>{
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$configs$2f$app$2f$utils$2e$ts__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["getEnvValue"])('NEXT_PUBLIC_IS_ACCOUNT_SUPPORTED') === 'true' && __TURBOPACK__imported__module__$5b$project$5d2f$configs$2f$app$2f$services$2e$ts__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["default"].reCaptchaV2.siteKey) {
        return Object.freeze({
            title,
            isEnabled: true,
            recaptchaSiteKey: __TURBOPACK__imported__module__$5b$project$5d2f$configs$2f$app$2f$services$2e$ts__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["default"].reCaptchaV2.siteKey
        });
    }
    return Object.freeze({
        title,
        isEnabled: false
    });
})();
const __TURBOPACK__default__export__ = config;
}}),
"[project]/configs/app/features/verifiedTokens.ts [middleware-edge] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$configs$2f$app$2f$apis$2e$ts__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/configs/app/apis.ts [middleware-edge] (ecmascript)");
;
const title = 'Verified tokens info';
const config = (()=>{
    if (__TURBOPACK__imported__module__$5b$project$5d2f$configs$2f$app$2f$apis$2e$ts__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["default"].contractInfo) {
        return Object.freeze({
            title,
            isEnabled: true
        });
    }
    return Object.freeze({
        title,
        isEnabled: false
    });
})();
const __TURBOPACK__default__export__ = config;
}}),
"[project]/configs/app/features/addressVerification.ts [middleware-edge] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$configs$2f$app$2f$apis$2e$ts__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/configs/app/apis.ts [middleware-edge] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$configs$2f$app$2f$features$2f$account$2e$ts__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/configs/app/features/account.ts [middleware-edge] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$configs$2f$app$2f$features$2f$verifiedTokens$2e$ts__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/configs/app/features/verifiedTokens.ts [middleware-edge] (ecmascript)");
;
;
;
const title = 'Address verification in "My account"';
const config = (()=>{
    if (__TURBOPACK__imported__module__$5b$project$5d2f$configs$2f$app$2f$features$2f$account$2e$ts__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["default"].isEnabled && __TURBOPACK__imported__module__$5b$project$5d2f$configs$2f$app$2f$features$2f$verifiedTokens$2e$ts__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["default"].isEnabled && __TURBOPACK__imported__module__$5b$project$5d2f$configs$2f$app$2f$apis$2e$ts__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["default"].admin) {
        return Object.freeze({
            title: 'Address verification in "My account"',
            isEnabled: true
        });
    }
    return Object.freeze({
        title,
        isEnabled: false
    });
})();
const __TURBOPACK__default__export__ = config;
}}),
"[project]/configs/app/features/addressMetadata.ts [middleware-edge] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$configs$2f$app$2f$apis$2e$ts__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/configs/app/apis.ts [middleware-edge] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$configs$2f$app$2f$utils$2e$ts__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/configs/app/utils.ts [middleware-edge] (ecmascript)");
;
;
const title = 'Address metadata';
const config = (()=>{
    if (__TURBOPACK__imported__module__$5b$project$5d2f$configs$2f$app$2f$apis$2e$ts__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["default"].metadata) {
        return Object.freeze({
            title,
            isEnabled: true,
            isAddressTagsUpdateEnabled: (0, __TURBOPACK__imported__module__$5b$project$5d2f$configs$2f$app$2f$utils$2e$ts__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["getEnvValue"])('NEXT_PUBLIC_METADATA_ADDRESS_TAGS_UPDATE_ENABLED') !== 'false'
        });
    }
    return Object.freeze({
        title,
        isEnabled: false
    });
})();
const __TURBOPACK__default__export__ = config;
}}),
"[project]/configs/app/features/address3rdPartyWidgets.ts [middleware-edge] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$configs$2f$app$2f$utils$2e$ts__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/configs/app/utils.ts [middleware-edge] (ecmascript)");
;
// config file will be downloaded at run-time and saved in the public folder
const widgets = (0, __TURBOPACK__imported__module__$5b$project$5d2f$configs$2f$app$2f$utils$2e$ts__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["parseEnvJson"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$configs$2f$app$2f$utils$2e$ts__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["getEnvValue"])('NEXT_PUBLIC_ADDRESS_3RD_PARTY_WIDGETS'));
const configUrl = (0, __TURBOPACK__imported__module__$5b$project$5d2f$configs$2f$app$2f$utils$2e$ts__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["getExternalAssetFilePath"])('NEXT_PUBLIC_ADDRESS_3RD_PARTY_WIDGETS_CONFIG_URL');
const title = 'Address 3rd party widgets';
const config = (()=>{
    if (widgets && widgets.length > 0 && configUrl) {
        return Object.freeze({
            title,
            isEnabled: true,
            widgets,
            configUrl
        });
    }
    return Object.freeze({
        title,
        isEnabled: false
    });
})();
const __TURBOPACK__default__export__ = config;
}}),
"[project]/types/client/adProviders.ts [middleware-edge] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "SUPPORTED_AD_BANNER_ADDITIONAL_PROVIDERS": (()=>SUPPORTED_AD_BANNER_ADDITIONAL_PROVIDERS),
    "SUPPORTED_AD_BANNER_PROVIDERS": (()=>SUPPORTED_AD_BANNER_PROVIDERS),
    "SUPPORTED_AD_TEXT_PROVIDERS": (()=>SUPPORTED_AD_TEXT_PROVIDERS)
});
const SUPPORTED_AD_BANNER_PROVIDERS = [
    'slise',
    'adbutler',
    'coinzilla',
    'hype',
    'none'
];
const SUPPORTED_AD_BANNER_ADDITIONAL_PROVIDERS = [
    'adbutler'
];
const SUPPORTED_AD_TEXT_PROVIDERS = [
    'coinzilla',
    'none'
];
}}),
"[project]/configs/app/features/adsBanner.ts [middleware-edge] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$types$2f$client$2f$adProviders$2e$ts__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/types/client/adProviders.ts [middleware-edge] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$configs$2f$app$2f$utils$2e$ts__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/configs/app/utils.ts [middleware-edge] (ecmascript)");
;
;
const provider = (()=>{
    const envValue = (0, __TURBOPACK__imported__module__$5b$project$5d2f$configs$2f$app$2f$utils$2e$ts__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["getEnvValue"])('NEXT_PUBLIC_AD_BANNER_PROVIDER');
    return envValue && __TURBOPACK__imported__module__$5b$project$5d2f$types$2f$client$2f$adProviders$2e$ts__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["SUPPORTED_AD_BANNER_PROVIDERS"].includes(envValue) ? envValue : 'slise';
})();
const additionalProvider = (0, __TURBOPACK__imported__module__$5b$project$5d2f$configs$2f$app$2f$utils$2e$ts__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["getEnvValue"])('NEXT_PUBLIC_AD_BANNER_ADDITIONAL_PROVIDER');
const title = 'Banner ads';
const config = (()=>{
    if (provider === 'adbutler') {
        const desktopConfig = (0, __TURBOPACK__imported__module__$5b$project$5d2f$configs$2f$app$2f$utils$2e$ts__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["parseEnvJson"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$configs$2f$app$2f$utils$2e$ts__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["getEnvValue"])('NEXT_PUBLIC_AD_ADBUTLER_CONFIG_DESKTOP'));
        const mobileConfig = (0, __TURBOPACK__imported__module__$5b$project$5d2f$configs$2f$app$2f$utils$2e$ts__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["parseEnvJson"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$configs$2f$app$2f$utils$2e$ts__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["getEnvValue"])('NEXT_PUBLIC_AD_ADBUTLER_CONFIG_MOBILE'));
        if (desktopConfig && mobileConfig) {
            return Object.freeze({
                title,
                isEnabled: true,
                provider,
                adButler: {
                    config: {
                        desktop: desktopConfig,
                        mobile: mobileConfig
                    }
                }
            });
        }
    } else if (provider !== 'none') {
        if (additionalProvider === 'adbutler') {
            const desktopConfig = (0, __TURBOPACK__imported__module__$5b$project$5d2f$configs$2f$app$2f$utils$2e$ts__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["parseEnvJson"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$configs$2f$app$2f$utils$2e$ts__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["getEnvValue"])('NEXT_PUBLIC_AD_ADBUTLER_CONFIG_DESKTOP'));
            const mobileConfig = (0, __TURBOPACK__imported__module__$5b$project$5d2f$configs$2f$app$2f$utils$2e$ts__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["parseEnvJson"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$configs$2f$app$2f$utils$2e$ts__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["getEnvValue"])('NEXT_PUBLIC_AD_ADBUTLER_CONFIG_MOBILE'));
            return Object.freeze({
                title,
                isEnabled: true,
                provider,
                additionalProvider,
                adButler: {
                    config: {
                        desktop: desktopConfig,
                        mobile: mobileConfig
                    }
                }
            });
        }
        return Object.freeze({
            title,
            isEnabled: true,
            provider
        });
    }
    return Object.freeze({
        title,
        isEnabled: false
    });
})();
const __TURBOPACK__default__export__ = config;
}}),
"[project]/configs/app/features/adsText.ts [middleware-edge] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$types$2f$client$2f$adProviders$2e$ts__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/types/client/adProviders.ts [middleware-edge] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$configs$2f$app$2f$utils$2e$ts__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/configs/app/utils.ts [middleware-edge] (ecmascript)");
;
;
const provider = (()=>{
    const envValue = (0, __TURBOPACK__imported__module__$5b$project$5d2f$configs$2f$app$2f$utils$2e$ts__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["getEnvValue"])('NEXT_PUBLIC_AD_TEXT_PROVIDER');
    return envValue && __TURBOPACK__imported__module__$5b$project$5d2f$types$2f$client$2f$adProviders$2e$ts__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["SUPPORTED_AD_TEXT_PROVIDERS"].includes(envValue) ? envValue : 'coinzilla';
})();
const title = 'Text ads';
const config = (()=>{
    if (provider !== 'none') {
        return Object.freeze({
            title,
            isEnabled: true,
            provider
        });
    }
    return Object.freeze({
        title,
        isEnabled: false
    });
})();
const __TURBOPACK__default__export__ = config;
}}),
"[project]/types/views/apiDocs.ts [middleware-edge] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "API_DOCS_TABS": (()=>API_DOCS_TABS)
});
const API_DOCS_TABS = [
    'rest_api',
    'eth_rpc_api',
    'rpc_api',
    'graphql_api'
];
}}),
"[project]/configs/app/features/apiDocs.ts [middleware-edge] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$types$2f$views$2f$apiDocs$2e$ts__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/types/views/apiDocs.ts [middleware-edge] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$configs$2f$app$2f$utils$2e$ts__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/configs/app/utils.ts [middleware-edge] (ecmascript)");
;
;
const graphqlDefaultTxnHash = (0, __TURBOPACK__imported__module__$5b$project$5d2f$configs$2f$app$2f$utils$2e$ts__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["getEnvValue"])('NEXT_PUBLIC_GRAPHIQL_TRANSACTION');
const tabs = (()=>{
    const value = ((0, __TURBOPACK__imported__module__$5b$project$5d2f$configs$2f$app$2f$utils$2e$ts__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["parseEnvJson"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$configs$2f$app$2f$utils$2e$ts__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["getEnvValue"])('NEXT_PUBLIC_API_DOCS_TABS')) || __TURBOPACK__imported__module__$5b$project$5d2f$types$2f$views$2f$apiDocs$2e$ts__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["API_DOCS_TABS"]).filter((tab)=>__TURBOPACK__imported__module__$5b$project$5d2f$types$2f$views$2f$apiDocs$2e$ts__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["API_DOCS_TABS"].includes(tab)).filter((tab)=>!graphqlDefaultTxnHash && tab === 'graphql_api' ? false : true);
    return value.length > 0 ? value : undefined;
})();
const title = 'API documentation';
const config = (()=>{
    if (tabs) {
        return Object.freeze({
            title,
            isEnabled: true,
            tabs,
            coreApiSwaggerUrl: (0, __TURBOPACK__imported__module__$5b$project$5d2f$configs$2f$app$2f$utils$2e$ts__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["getEnvValue"])('NEXT_PUBLIC_API_SPEC_URL') || `https://raw.githubusercontent.com/blockscout/blockscout-api-v2-swagger/main/swagger.yaml`,
            graphqlDefaultTxnHash
        });
    }
    return Object.freeze({
        title,
        isEnabled: false
    });
})();
const __TURBOPACK__default__export__ = config;
}}),
"[project]/configs/app/features/beaconChain.ts [middleware-edge] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$configs$2f$app$2f$utils$2e$ts__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/configs/app/utils.ts [middleware-edge] (ecmascript)");
;
const title = 'Beacon chain';
const config = (()=>{
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$configs$2f$app$2f$utils$2e$ts__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["getEnvValue"])('NEXT_PUBLIC_HAS_BEACON_CHAIN') === 'true') {
        const validatorUrlTemplate = (0, __TURBOPACK__imported__module__$5b$project$5d2f$configs$2f$app$2f$utils$2e$ts__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["getEnvValue"])('NEXT_PUBLIC_BEACON_CHAIN_VALIDATOR_URL_TEMPLATE');
        return Object.freeze({
            title,
            isEnabled: true,
            currency: {
                symbol: (0, __TURBOPACK__imported__module__$5b$project$5d2f$configs$2f$app$2f$utils$2e$ts__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["getEnvValue"])('NEXT_PUBLIC_BEACON_CHAIN_CURRENCY_SYMBOL') || (0, __TURBOPACK__imported__module__$5b$project$5d2f$configs$2f$app$2f$utils$2e$ts__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["getEnvValue"])('NEXT_PUBLIC_NETWORK_CURRENCY_SYMBOL') || ''
            },
            validatorUrlTemplate
        });
    }
    return Object.freeze({
        title,
        isEnabled: false
    });
})();
const __TURBOPACK__default__export__ = config;
}}),
"[project]/configs/app/features/bridgedTokens.ts [middleware-edge] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$configs$2f$app$2f$utils$2e$ts__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/configs/app/utils.ts [middleware-edge] (ecmascript)");
;
const title = 'Bridged tokens';
const config = (()=>{
    const chains = (0, __TURBOPACK__imported__module__$5b$project$5d2f$configs$2f$app$2f$utils$2e$ts__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["parseEnvJson"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$configs$2f$app$2f$utils$2e$ts__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["getEnvValue"])('NEXT_PUBLIC_BRIDGED_TOKENS_CHAINS'));
    const bridges = (0, __TURBOPACK__imported__module__$5b$project$5d2f$configs$2f$app$2f$utils$2e$ts__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["parseEnvJson"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$configs$2f$app$2f$utils$2e$ts__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["getEnvValue"])('NEXT_PUBLIC_BRIDGED_TOKENS_BRIDGES'));
    if (chains && chains.length > 0 && bridges && bridges.length > 0) {
        return Object.freeze({
            title,
            isEnabled: true,
            chains,
            bridges
        });
    }
    return Object.freeze({
        title,
        isEnabled: false
    });
})();
const __TURBOPACK__default__export__ = config;
}}),
"[project]/configs/app/features/opSuperchain.ts [middleware-edge] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$configs$2f$app$2f$apis$2e$ts__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/configs/app/apis.ts [middleware-edge] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$configs$2f$app$2f$utils$2e$ts__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/configs/app/utils.ts [middleware-edge] (ecmascript)");
;
;
const isEnabled = (0, __TURBOPACK__imported__module__$5b$project$5d2f$configs$2f$app$2f$utils$2e$ts__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["getEnvValue"])('NEXT_PUBLIC_OP_SUPERCHAIN_ENABLED') === 'true';
const title = 'OP Superchain interop explorer';
const config = (()=>{
    if (__TURBOPACK__imported__module__$5b$project$5d2f$configs$2f$app$2f$apis$2e$ts__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["default"].multichain && isEnabled) {
        return Object.freeze({
            title,
            isEnabled: true
        });
    }
    return Object.freeze({
        title,
        isEnabled: false
    });
})();
const __TURBOPACK__default__export__ = config;
}}),
"[project]/configs/app/features/blockchainInteraction.ts [middleware-edge] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$configs$2f$app$2f$chain$2e$ts__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/configs/app/chain.ts [middleware-edge] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$configs$2f$app$2f$utils$2e$ts__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/configs/app/utils.ts [middleware-edge] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$configs$2f$app$2f$features$2f$opSuperchain$2e$ts__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/configs/app/features/opSuperchain.ts [middleware-edge] (ecmascript)");
;
;
;
const walletConnectProjectId = (0, __TURBOPACK__imported__module__$5b$project$5d2f$configs$2f$app$2f$utils$2e$ts__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["getEnvValue"])('NEXT_PUBLIC_WALLET_CONNECT_PROJECT_ID');
const title = 'Blockchain interaction (writing to contract, etc.)';
const config = (()=>{
    // all chain parameters are required for wagmi provider
    // @wagmi/chains/dist/index.d.ts
    const isSingleChain = Boolean(__TURBOPACK__imported__module__$5b$project$5d2f$configs$2f$app$2f$chain$2e$ts__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["default"].id && __TURBOPACK__imported__module__$5b$project$5d2f$configs$2f$app$2f$chain$2e$ts__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["default"].name && __TURBOPACK__imported__module__$5b$project$5d2f$configs$2f$app$2f$chain$2e$ts__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["default"].currency.name && __TURBOPACK__imported__module__$5b$project$5d2f$configs$2f$app$2f$chain$2e$ts__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["default"].currency.symbol && __TURBOPACK__imported__module__$5b$project$5d2f$configs$2f$app$2f$chain$2e$ts__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["default"].currency.decimals && __TURBOPACK__imported__module__$5b$project$5d2f$configs$2f$app$2f$chain$2e$ts__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["default"].rpcUrls.length > 0);
    const isOpSuperchain = __TURBOPACK__imported__module__$5b$project$5d2f$configs$2f$app$2f$features$2f$opSuperchain$2e$ts__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["default"].isEnabled;
    if ((isSingleChain || isOpSuperchain) && walletConnectProjectId) {
        return Object.freeze({
            title,
            isEnabled: true,
            walletConnect: {
                projectId: walletConnectProjectId
            }
        });
    }
    return Object.freeze({
        title,
        isEnabled: false
    });
})();
const __TURBOPACK__default__export__ = config;
}}),
"[project]/configs/app/features/celo.ts [middleware-edge] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$configs$2f$app$2f$utils$2e$ts__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/configs/app/utils.ts [middleware-edge] (ecmascript)");
;
const title = 'Celo chain';
const config = (()=>{
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$configs$2f$app$2f$utils$2e$ts__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["getEnvValue"])('NEXT_PUBLIC_CELO_ENABLED') === 'true') {
        return Object.freeze({
            title,
            isEnabled: true
        });
    }
    return Object.freeze({
        title,
        isEnabled: false
    });
})();
const __TURBOPACK__default__export__ = config;
}}),
"[project]/configs/app/features/csvExport.ts [middleware-edge] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$configs$2f$app$2f$services$2e$ts__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/configs/app/services.ts [middleware-edge] (ecmascript)");
;
const title = 'Export data to CSV file';
const config = (()=>{
    if (__TURBOPACK__imported__module__$5b$project$5d2f$configs$2f$app$2f$services$2e$ts__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["default"].reCaptchaV2.siteKey) {
        return Object.freeze({
            title,
            isEnabled: true,
            reCaptcha: {
                siteKey: __TURBOPACK__imported__module__$5b$project$5d2f$configs$2f$app$2f$services$2e$ts__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["default"].reCaptchaV2.siteKey
            }
        });
    }
    return Object.freeze({
        title,
        isEnabled: false
    });
})();
const __TURBOPACK__default__export__ = config;
}}),
"[project]/configs/app/features/dataAvailability.ts [middleware-edge] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$configs$2f$app$2f$utils$2e$ts__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/configs/app/utils.ts [middleware-edge] (ecmascript)");
;
const title = 'Data availability';
const config = (()=>{
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$configs$2f$app$2f$utils$2e$ts__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["getEnvValue"])('NEXT_PUBLIC_DATA_AVAILABILITY_ENABLED') === 'true') {
        return Object.freeze({
            title,
            isEnabled: true
        });
    }
    return Object.freeze({
        title,
        isEnabled: false
    });
})();
const __TURBOPACK__default__export__ = config;
}}),
"[project]/configs/app/features/deFiDropdown.ts [middleware-edge] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$configs$2f$app$2f$utils$2e$ts__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/configs/app/utils.ts [middleware-edge] (ecmascript)");
;
const items = (0, __TURBOPACK__imported__module__$5b$project$5d2f$configs$2f$app$2f$utils$2e$ts__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["parseEnvJson"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$configs$2f$app$2f$utils$2e$ts__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["getEnvValue"])('NEXT_PUBLIC_DEFI_DROPDOWN_ITEMS')) || [];
const title = 'DeFi dropdown';
const config = items.length > 0 ? Object.freeze({
    title,
    isEnabled: true,
    items
}) : Object.freeze({
    title,
    isEnabled: false
});
const __TURBOPACK__default__export__ = config;
}}),
"[project]/configs/app/features/easterEggBadge.ts [middleware-edge] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$configs$2f$app$2f$utils$2e$ts__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/configs/app/utils.ts [middleware-edge] (ecmascript)");
;
const badgeClaimLink = (0, __TURBOPACK__imported__module__$5b$project$5d2f$configs$2f$app$2f$utils$2e$ts__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["getEnvValue"])('NEXT_PUBLIC_GAME_BADGE_CLAIM_LINK');
const title = 'Easter egg badge';
const config = (()=>{
    if (badgeClaimLink) {
        return Object.freeze({
            title,
            isEnabled: true,
            badgeClaimLink
        });
    }
    return Object.freeze({
        title,
        isEnabled: false
    });
})();
const __TURBOPACK__default__export__ = config;
}}),
"[project]/configs/app/features/easterEggPuzzleBadge.ts [middleware-edge] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$configs$2f$app$2f$utils$2e$ts__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/configs/app/utils.ts [middleware-edge] (ecmascript)");
;
const badgeClaimLink = (0, __TURBOPACK__imported__module__$5b$project$5d2f$configs$2f$app$2f$utils$2e$ts__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["getEnvValue"])('NEXT_PUBLIC_PUZZLE_GAME_BADGE_CLAIM_LINK');
const title = 'Easter egg puzzle badge';
const config = (()=>{
    if (badgeClaimLink) {
        return Object.freeze({
            title,
            isEnabled: true,
            badgeClaimLink
        });
    }
    return Object.freeze({
        title,
        isEnabled: false
    });
})();
const __TURBOPACK__default__export__ = config;
}}),
"[project]/configs/app/features/externalTxs.ts [middleware-edge] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$configs$2f$app$2f$utils$2e$ts__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/configs/app/utils.ts [middleware-edge] (ecmascript)");
;
const externalTransactionsConfig = (0, __TURBOPACK__imported__module__$5b$project$5d2f$configs$2f$app$2f$utils$2e$ts__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["parseEnvJson"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$configs$2f$app$2f$utils$2e$ts__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["getEnvValue"])('NEXT_PUBLIC_TX_EXTERNAL_TRANSACTIONS_CONFIG'));
const title = 'External transactions';
const config = (()=>{
    if (externalTransactionsConfig) {
        return Object.freeze({
            title,
            isEnabled: true,
            chainName: externalTransactionsConfig.chain_name,
            chainLogoUrl: externalTransactionsConfig.chain_logo_url,
            explorerUrlTemplate: externalTransactionsConfig.explorer_url_template
        });
    }
    return Object.freeze({
        title,
        isEnabled: false
    });
})();
const __TURBOPACK__default__export__ = config;
}}),
"[project]/types/client/rollup.ts [middleware-edge] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "ROLLUP_TYPES": (()=>ROLLUP_TYPES)
});
const ROLLUP_TYPES = [
    'optimistic',
    'arbitrum',
    'shibarium',
    'zkEvm',
    'zkSync',
    'scroll'
];
}}),
"[project]/configs/app/features/rollup.ts [middleware-edge] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$types$2f$client$2f$rollup$2e$ts__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/types/client/rollup.ts [middleware-edge] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$toolkit$2f$utils$2f$url$2e$ts__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/toolkit/utils/url.ts [middleware-edge] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$configs$2f$app$2f$utils$2e$ts__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/configs/app/utils.ts [middleware-edge] (ecmascript)");
;
;
;
const type = (()=>{
    const envValue = (0, __TURBOPACK__imported__module__$5b$project$5d2f$configs$2f$app$2f$utils$2e$ts__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["getEnvValue"])('NEXT_PUBLIC_ROLLUP_TYPE');
    return __TURBOPACK__imported__module__$5b$project$5d2f$types$2f$client$2f$rollup$2e$ts__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["ROLLUP_TYPES"].find((type)=>type === envValue);
})();
const L2WithdrawalUrl = (0, __TURBOPACK__imported__module__$5b$project$5d2f$configs$2f$app$2f$utils$2e$ts__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["getEnvValue"])('NEXT_PUBLIC_ROLLUP_L2_WITHDRAWAL_URL');
const parentChain = (()=>{
    const envValue = (0, __TURBOPACK__imported__module__$5b$project$5d2f$configs$2f$app$2f$utils$2e$ts__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["parseEnvJson"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$configs$2f$app$2f$utils$2e$ts__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["getEnvValue"])('NEXT_PUBLIC_ROLLUP_PARENT_CHAIN'));
    const baseUrl = (0, __TURBOPACK__imported__module__$5b$project$5d2f$toolkit$2f$utils$2f$url$2e$ts__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["stripTrailingSlash"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$configs$2f$app$2f$utils$2e$ts__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["getEnvValue"])('NEXT_PUBLIC_ROLLUP_L1_BASE_URL') || '');
    const chainName = (0, __TURBOPACK__imported__module__$5b$project$5d2f$configs$2f$app$2f$utils$2e$ts__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["getEnvValue"])('NEXT_PUBLIC_ROLLUP_PARENT_CHAIN_NAME');
    if (!baseUrl && !envValue?.baseUrl) {
        return;
    }
    return {
        ...envValue,
        name: chainName ?? envValue?.name,
        baseUrl: baseUrl ?? envValue?.baseUrl
    };
})();
const title = 'Rollup (L2) chain';
const config = (()=>{
    if (type && parentChain) {
        return Object.freeze({
            title,
            isEnabled: true,
            type,
            stageIndex: (0, __TURBOPACK__imported__module__$5b$project$5d2f$configs$2f$app$2f$utils$2e$ts__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["getEnvValue"])('NEXT_PUBLIC_ROLLUP_STAGE_INDEX'),
            L2WithdrawalUrl: type === 'optimistic' ? L2WithdrawalUrl : undefined,
            outputRootsEnabled: type === 'optimistic' && (0, __TURBOPACK__imported__module__$5b$project$5d2f$configs$2f$app$2f$utils$2e$ts__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["getEnvValue"])('NEXT_PUBLIC_ROLLUP_OUTPUT_ROOTS_ENABLED') === 'true',
            interopEnabled: type === 'optimistic' && (0, __TURBOPACK__imported__module__$5b$project$5d2f$configs$2f$app$2f$utils$2e$ts__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["getEnvValue"])('NEXT_PUBLIC_INTEROP_ENABLED') === 'true',
            homepage: {
                showLatestBlocks: (0, __TURBOPACK__imported__module__$5b$project$5d2f$configs$2f$app$2f$utils$2e$ts__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["getEnvValue"])('NEXT_PUBLIC_ROLLUP_HOMEPAGE_SHOW_LATEST_BLOCKS') === 'true'
            },
            parentChain,
            DA: {
                celestia: {
                    namespace: type === 'arbitrum' ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$configs$2f$app$2f$utils$2e$ts__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["getEnvValue"])('NEXT_PUBLIC_ROLLUP_DA_CELESTIA_NAMESPACE') : undefined,
                    celeniumUrl: (0, __TURBOPACK__imported__module__$5b$project$5d2f$configs$2f$app$2f$utils$2e$ts__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["getEnvValue"])('NEXT_PUBLIC_ROLLUP_DA_CELESTIA_CELENIUM_URL')
                }
            }
        });
    }
    return Object.freeze({
        title,
        isEnabled: false
    });
})();
const __TURBOPACK__default__export__ = config;
}}),
"[project]/configs/app/features/faultProofSystem.ts [middleware-edge] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$configs$2f$app$2f$utils$2e$ts__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/configs/app/utils.ts [middleware-edge] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$configs$2f$app$2f$features$2f$rollup$2e$ts__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/configs/app/features/rollup.ts [middleware-edge] (ecmascript)");
;
;
const title = 'Fault proof system';
const config = (()=>{
    if (__TURBOPACK__imported__module__$5b$project$5d2f$configs$2f$app$2f$features$2f$rollup$2e$ts__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["default"].isEnabled && __TURBOPACK__imported__module__$5b$project$5d2f$configs$2f$app$2f$features$2f$rollup$2e$ts__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["default"].type === 'optimistic' && (0, __TURBOPACK__imported__module__$5b$project$5d2f$configs$2f$app$2f$utils$2e$ts__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["getEnvValue"])('NEXT_PUBLIC_FAULT_PROOF_ENABLED') === 'true') {
        return Object.freeze({
            title,
            isEnabled: true
        });
    }
    return Object.freeze({
        title,
        isEnabled: false
    });
})();
const __TURBOPACK__default__export__ = config;
}}),
"[project]/configs/app/features/flashblocks.ts [middleware-edge] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$configs$2f$app$2f$utils$2e$ts__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/configs/app/utils.ts [middleware-edge] (ecmascript)");
;
const title = 'Flashblocks';
const socketUrl = (0, __TURBOPACK__imported__module__$5b$project$5d2f$configs$2f$app$2f$utils$2e$ts__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["getEnvValue"])('NEXT_PUBLIC_FLASHBLOCKS_SOCKET_URL');
const config = (()=>{
    if (socketUrl) {
        return Object.freeze({
            title,
            isEnabled: true,
            socketUrl
        });
    }
    return Object.freeze({
        title,
        isEnabled: false
    });
})();
const __TURBOPACK__default__export__ = config;
}}),
"[project]/types/client/gasTracker.ts [middleware-edge] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "GAS_UNITS": (()=>GAS_UNITS)
});
const GAS_UNITS = [
    'usd',
    'gwei'
];
}}),
"[project]/configs/app/features/gasTracker.ts [middleware-edge] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$types$2f$client$2f$gasTracker$2e$ts__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/types/client/gasTracker.ts [middleware-edge] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$configs$2f$app$2f$chain$2e$ts__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/configs/app/chain.ts [middleware-edge] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$configs$2f$app$2f$utils$2e$ts__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/configs/app/utils.ts [middleware-edge] (ecmascript)");
;
;
;
const isDisabled = (0, __TURBOPACK__imported__module__$5b$project$5d2f$configs$2f$app$2f$utils$2e$ts__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["getEnvValue"])('NEXT_PUBLIC_GAS_TRACKER_ENABLED') === 'false';
const units = (()=>{
    const envValue = (0, __TURBOPACK__imported__module__$5b$project$5d2f$configs$2f$app$2f$utils$2e$ts__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["getEnvValue"])('NEXT_PUBLIC_GAS_TRACKER_UNITS');
    if (!envValue) {
        if (__TURBOPACK__imported__module__$5b$project$5d2f$configs$2f$app$2f$chain$2e$ts__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["default"].isTestnet) {
            return [
                'gwei'
            ];
        }
        return [
            'usd',
            'gwei'
        ];
    }
    const units = (0, __TURBOPACK__imported__module__$5b$project$5d2f$configs$2f$app$2f$utils$2e$ts__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["parseEnvJson"])(envValue)?.filter((type)=>__TURBOPACK__imported__module__$5b$project$5d2f$types$2f$client$2f$gasTracker$2e$ts__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["GAS_UNITS"].includes(type)) || [];
    return units;
})();
const title = 'Gas tracker';
const config = (()=>{
    if (!isDisabled && units.length > 0) {
        return Object.freeze({
            title,
            isEnabled: true,
            units
        });
    }
    return Object.freeze({
        title,
        isEnabled: false
    });
})();
const __TURBOPACK__default__export__ = config;
}}),
"[project]/configs/app/features/marketplace.ts [middleware-edge] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$configs$2f$app$2f$apis$2e$ts__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/configs/app/apis.ts [middleware-edge] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$configs$2f$app$2f$chain$2e$ts__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/configs/app/chain.ts [middleware-edge] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$configs$2f$app$2f$utils$2e$ts__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/configs/app/utils.ts [middleware-edge] (ecmascript)");
;
;
;
// config file will be downloaded at run-time and saved in the public folder
const enabled = (0, __TURBOPACK__imported__module__$5b$project$5d2f$configs$2f$app$2f$utils$2e$ts__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["getEnvValue"])('NEXT_PUBLIC_MARKETPLACE_ENABLED');
const configUrl = (0, __TURBOPACK__imported__module__$5b$project$5d2f$configs$2f$app$2f$utils$2e$ts__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["getExternalAssetFilePath"])('NEXT_PUBLIC_MARKETPLACE_CONFIG_URL');
const submitFormUrl = (0, __TURBOPACK__imported__module__$5b$project$5d2f$configs$2f$app$2f$utils$2e$ts__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["getEnvValue"])('NEXT_PUBLIC_MARKETPLACE_SUBMIT_FORM');
const suggestIdeasFormUrl = (0, __TURBOPACK__imported__module__$5b$project$5d2f$configs$2f$app$2f$utils$2e$ts__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["getEnvValue"])('NEXT_PUBLIC_MARKETPLACE_SUGGEST_IDEAS_FORM');
const categoriesUrl = (0, __TURBOPACK__imported__module__$5b$project$5d2f$configs$2f$app$2f$utils$2e$ts__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["getExternalAssetFilePath"])('NEXT_PUBLIC_MARKETPLACE_CATEGORIES_URL');
const featuredApp = (0, __TURBOPACK__imported__module__$5b$project$5d2f$configs$2f$app$2f$utils$2e$ts__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["getEnvValue"])('NEXT_PUBLIC_MARKETPLACE_FEATURED_APP');
const bannerContentUrl = (0, __TURBOPACK__imported__module__$5b$project$5d2f$configs$2f$app$2f$utils$2e$ts__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["getExternalAssetFilePath"])('NEXT_PUBLIC_MARKETPLACE_BANNER_CONTENT_URL');
const bannerLinkUrl = (0, __TURBOPACK__imported__module__$5b$project$5d2f$configs$2f$app$2f$utils$2e$ts__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["getEnvValue"])('NEXT_PUBLIC_MARKETPLACE_BANNER_LINK_URL');
const graphLinksUrl = (0, __TURBOPACK__imported__module__$5b$project$5d2f$configs$2f$app$2f$utils$2e$ts__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["getExternalAssetFilePath"])('NEXT_PUBLIC_MARKETPLACE_GRAPH_LINKS_URL');
const title = 'Marketplace';
const config = (()=>{
    if (enabled === 'true' && __TURBOPACK__imported__module__$5b$project$5d2f$configs$2f$app$2f$chain$2e$ts__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["default"].rpcUrls.length > 0 && submitFormUrl) {
        const props = {
            submitFormUrl,
            categoriesUrl,
            suggestIdeasFormUrl,
            featuredApp,
            banner: bannerContentUrl && bannerLinkUrl ? {
                contentUrl: bannerContentUrl,
                linkUrl: bannerLinkUrl
            } : undefined,
            graphLinksUrl
        };
        if (configUrl) {
            return Object.freeze({
                title,
                isEnabled: true,
                configUrl,
                ...props
            });
        } else if (__TURBOPACK__imported__module__$5b$project$5d2f$configs$2f$app$2f$apis$2e$ts__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["default"].admin) {
            return Object.freeze({
                title,
                isEnabled: true,
                api: __TURBOPACK__imported__module__$5b$project$5d2f$configs$2f$app$2f$apis$2e$ts__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["default"].admin,
                ...props
            });
        }
    }
    return Object.freeze({
        title,
        isEnabled: false
    });
})();
const __TURBOPACK__default__export__ = config;
}}),
"[project]/configs/app/features/getGasButton.ts [middleware-edge] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$configs$2f$app$2f$chain$2e$ts__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/configs/app/chain.ts [middleware-edge] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$configs$2f$app$2f$utils$2e$ts__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/configs/app/utils.ts [middleware-edge] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$configs$2f$app$2f$features$2f$marketplace$2e$ts__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/configs/app/features/marketplace.ts [middleware-edge] (ecmascript)");
;
;
;
const value = (0, __TURBOPACK__imported__module__$5b$project$5d2f$configs$2f$app$2f$utils$2e$ts__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["parseEnvJson"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$configs$2f$app$2f$utils$2e$ts__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["getEnvValue"])('NEXT_PUBLIC_GAS_REFUEL_PROVIDER_CONFIG'));
const title = 'Get gas button';
const config = (()=>{
    if (value) {
        return Object.freeze({
            title,
            isEnabled: true,
            name: value.name,
            logoUrl: value.logo,
            url: value.url_template.replace('{chainId}', __TURBOPACK__imported__module__$5b$project$5d2f$configs$2f$app$2f$chain$2e$ts__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["default"].id || ''),
            dappId: __TURBOPACK__imported__module__$5b$project$5d2f$configs$2f$app$2f$features$2f$marketplace$2e$ts__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["default"].isEnabled ? value.dapp_id : undefined
        });
    }
    return Object.freeze({
        title,
        isEnabled: false
    });
})();
const __TURBOPACK__default__export__ = config;
}}),
"[project]/configs/app/features/googleAnalytics.ts [middleware-edge] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$configs$2f$app$2f$utils$2e$ts__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/configs/app/utils.ts [middleware-edge] (ecmascript)");
;
const propertyId = (0, __TURBOPACK__imported__module__$5b$project$5d2f$configs$2f$app$2f$utils$2e$ts__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["getEnvValue"])('NEXT_PUBLIC_GOOGLE_ANALYTICS_PROPERTY_ID');
const title = 'Google analytics';
const config = (()=>{
    if (propertyId) {
        return Object.freeze({
            title,
            isEnabled: true,
            propertyId
        });
    }
    return Object.freeze({
        title,
        isEnabled: false
    });
})();
const __TURBOPACK__default__export__ = config;
}}),
"[project]/configs/app/features/growthBook.ts [middleware-edge] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$configs$2f$app$2f$utils$2e$ts__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/configs/app/utils.ts [middleware-edge] (ecmascript)");
;
const clientKey = (0, __TURBOPACK__imported__module__$5b$project$5d2f$configs$2f$app$2f$utils$2e$ts__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["getEnvValue"])('NEXT_PUBLIC_GROWTH_BOOK_CLIENT_KEY');
const title = 'GrowthBook feature flagging and A/B testing';
const config = (()=>{
    if (clientKey) {
        return Object.freeze({
            title,
            isEnabled: true,
            clientKey
        });
    }
    return Object.freeze({
        title,
        isEnabled: false
    });
})();
const __TURBOPACK__default__export__ = config;
}}),
"[project]/configs/app/features/metasuites.ts [middleware-edge] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$configs$2f$app$2f$utils$2e$ts__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/configs/app/utils.ts [middleware-edge] (ecmascript)");
;
const title = 'MetaSuites extension';
const config = (()=>{
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$configs$2f$app$2f$utils$2e$ts__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["getEnvValue"])('NEXT_PUBLIC_METASUITES_ENABLED') === 'true') {
        return Object.freeze({
            title,
            isEnabled: true
        });
    }
    return Object.freeze({
        title,
        isEnabled: false
    });
})();
const __TURBOPACK__default__export__ = config;
}}),
"[project]/configs/app/features/mixpanel.ts [middleware-edge] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$configs$2f$app$2f$utils$2e$ts__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/configs/app/utils.ts [middleware-edge] (ecmascript)");
;
const projectToken = (0, __TURBOPACK__imported__module__$5b$project$5d2f$configs$2f$app$2f$utils$2e$ts__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["getEnvValue"])('NEXT_PUBLIC_MIXPANEL_PROJECT_TOKEN');
const configOverrides = (()=>{
    const value = (0, __TURBOPACK__imported__module__$5b$project$5d2f$configs$2f$app$2f$utils$2e$ts__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["getEnvValue"])('NEXT_PUBLIC_MIXPANEL_CONFIG_OVERRIDES');
    if (!value) {
        return;
    }
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$configs$2f$app$2f$utils$2e$ts__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["parseEnvJson"])(value) || undefined;
})();
const title = 'Mixpanel analytics';
const config = (()=>{
    if (projectToken) {
        return Object.freeze({
            title,
            isEnabled: true,
            projectToken,
            configOverrides
        });
    }
    return Object.freeze({
        title,
        isEnabled: false
    });
})();
const __TURBOPACK__default__export__ = config;
}}),
"[project]/configs/app/features/mudFramework.ts [middleware-edge] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$configs$2f$app$2f$utils$2e$ts__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/configs/app/utils.ts [middleware-edge] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$configs$2f$app$2f$features$2f$rollup$2e$ts__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/configs/app/features/rollup.ts [middleware-edge] (ecmascript)");
;
;
const title = 'MUD framework';
const config = (()=>{
    if (__TURBOPACK__imported__module__$5b$project$5d2f$configs$2f$app$2f$features$2f$rollup$2e$ts__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["default"].isEnabled && __TURBOPACK__imported__module__$5b$project$5d2f$configs$2f$app$2f$features$2f$rollup$2e$ts__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["default"].type === 'optimistic' && (0, __TURBOPACK__imported__module__$5b$project$5d2f$configs$2f$app$2f$utils$2e$ts__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["getEnvValue"])('NEXT_PUBLIC_HAS_MUD_FRAMEWORK') === 'true') {
        return Object.freeze({
            title,
            isEnabled: true
        });
    }
    return Object.freeze({
        title,
        isEnabled: false
    });
})();
const __TURBOPACK__default__export__ = config;
}}),
"[project]/configs/app/features/multichainButton.ts [middleware-edge] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$configs$2f$app$2f$utils$2e$ts__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/configs/app/utils.ts [middleware-edge] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$configs$2f$app$2f$features$2f$marketplace$2e$ts__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/configs/app/features/marketplace.ts [middleware-edge] (ecmascript)");
;
;
const value = (0, __TURBOPACK__imported__module__$5b$project$5d2f$configs$2f$app$2f$utils$2e$ts__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["parseEnvJson"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$configs$2f$app$2f$utils$2e$ts__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["getEnvValue"])('NEXT_PUBLIC_MULTICHAIN_BALANCE_PROVIDER_CONFIG'));
const title = 'Multichain balance';
const config = (()=>{
    if (value) {
        return Object.freeze({
            title,
            isEnabled: true,
            providers: value.map((provider)=>({
                    name: provider.name,
                    logoUrl: provider.logo,
                    urlTemplate: provider.url_template,
                    dappId: __TURBOPACK__imported__module__$5b$project$5d2f$configs$2f$app$2f$features$2f$marketplace$2e$ts__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["default"].isEnabled ? provider.dapp_id : undefined
                }))
        });
    }
    return Object.freeze({
        title,
        isEnabled: false
    });
})();
const __TURBOPACK__default__export__ = config;
}}),
"[project]/configs/app/features/nameService.ts [middleware-edge] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$configs$2f$app$2f$apis$2e$ts__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/configs/app/apis.ts [middleware-edge] (ecmascript)");
;
const title = 'Name service integration';
const config = (()=>{
    if (__TURBOPACK__imported__module__$5b$project$5d2f$configs$2f$app$2f$apis$2e$ts__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["default"].bens) {
        return Object.freeze({
            title,
            isEnabled: true
        });
    }
    return Object.freeze({
        title,
        isEnabled: false
    });
})();
const __TURBOPACK__default__export__ = config;
}}),
"[project]/configs/app/features/pools.ts [middleware-edge] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$configs$2f$app$2f$apis$2e$ts__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/configs/app/apis.ts [middleware-edge] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$configs$2f$app$2f$utils$2e$ts__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/configs/app/utils.ts [middleware-edge] (ecmascript)");
;
;
const dexPoolsEnabled = (0, __TURBOPACK__imported__module__$5b$project$5d2f$configs$2f$app$2f$utils$2e$ts__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["getEnvValue"])('NEXT_PUBLIC_DEX_POOLS_ENABLED') === 'true';
const title = 'DEX Pools';
const config = (()=>{
    if (__TURBOPACK__imported__module__$5b$project$5d2f$configs$2f$app$2f$apis$2e$ts__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["default"].contractInfo && dexPoolsEnabled) {
        return Object.freeze({
            title,
            isEnabled: true
        });
    }
    return Object.freeze({
        title,
        isEnabled: false
    });
})();
const __TURBOPACK__default__export__ = config;
}}),
"[project]/configs/app/features/publicTagsSubmission.ts [middleware-edge] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$configs$2f$app$2f$apis$2e$ts__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/configs/app/apis.ts [middleware-edge] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$configs$2f$app$2f$services$2e$ts__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/configs/app/services.ts [middleware-edge] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$configs$2f$app$2f$features$2f$addressMetadata$2e$ts__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/configs/app/features/addressMetadata.ts [middleware-edge] (ecmascript)");
;
;
;
const title = 'Public tag submission';
const config = (()=>{
    if (__TURBOPACK__imported__module__$5b$project$5d2f$configs$2f$app$2f$services$2e$ts__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["default"].reCaptchaV2.siteKey && __TURBOPACK__imported__module__$5b$project$5d2f$configs$2f$app$2f$features$2f$addressMetadata$2e$ts__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["default"].isEnabled && __TURBOPACK__imported__module__$5b$project$5d2f$configs$2f$app$2f$apis$2e$ts__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["default"].admin) {
        return Object.freeze({
            title,
            isEnabled: true
        });
    }
    return Object.freeze({
        title,
        isEnabled: false
    });
})();
const __TURBOPACK__default__export__ = config;
}}),
"[project]/configs/app/features/rewards.ts [middleware-edge] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$configs$2f$app$2f$apis$2e$ts__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/configs/app/apis.ts [middleware-edge] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$configs$2f$app$2f$features$2f$account$2e$ts__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/configs/app/features/account.ts [middleware-edge] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$configs$2f$app$2f$features$2f$blockchainInteraction$2e$ts__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/configs/app/features/blockchainInteraction.ts [middleware-edge] (ecmascript)");
;
;
;
const title = 'Rewards service integration';
const config = (()=>{
    if (__TURBOPACK__imported__module__$5b$project$5d2f$configs$2f$app$2f$apis$2e$ts__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["default"].rewards && __TURBOPACK__imported__module__$5b$project$5d2f$configs$2f$app$2f$features$2f$account$2e$ts__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["default"].isEnabled && __TURBOPACK__imported__module__$5b$project$5d2f$configs$2f$app$2f$features$2f$blockchainInteraction$2e$ts__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["default"].isEnabled) {
        return Object.freeze({
            title,
            isEnabled: true
        });
    }
    return Object.freeze({
        title,
        isEnabled: false
    });
})();
const __TURBOPACK__default__export__ = config;
}}),
"[project]/configs/app/features/rollbar.ts [middleware-edge] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$configs$2f$app$2f$app$2e$ts__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/configs/app/app.ts [middleware-edge] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$configs$2f$app$2f$utils$2e$ts__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/configs/app/utils.ts [middleware-edge] (ecmascript)");
;
;
const clientToken = (0, __TURBOPACK__imported__module__$5b$project$5d2f$configs$2f$app$2f$utils$2e$ts__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["getEnvValue"])('NEXT_PUBLIC_ROLLBAR_CLIENT_TOKEN');
const instance = (()=>{
    const envValue = (0, __TURBOPACK__imported__module__$5b$project$5d2f$configs$2f$app$2f$utils$2e$ts__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["getEnvValue"])('NEXT_PUBLIC_APP_INSTANCE');
    if (envValue) {
        return envValue;
    }
    return __TURBOPACK__imported__module__$5b$project$5d2f$configs$2f$app$2f$app$2e$ts__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["default"].host?.replace('.blockscout.com', '').replace('.k8s-dev', '').replaceAll('-', '_');
})();
const environment = (0, __TURBOPACK__imported__module__$5b$project$5d2f$configs$2f$app$2f$utils$2e$ts__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["getEnvValue"])('NEXT_PUBLIC_APP_ENV') || 'production';
const codeVersion = (0, __TURBOPACK__imported__module__$5b$project$5d2f$configs$2f$app$2f$utils$2e$ts__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["getEnvValue"])('NEXT_PUBLIC_GIT_TAG') || (0, __TURBOPACK__imported__module__$5b$project$5d2f$configs$2f$app$2f$utils$2e$ts__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["getEnvValue"])('NEXT_PUBLIC_GIT_COMMIT_SHA');
const title = 'Rollbar error monitoring';
const config = (()=>{
    if (clientToken) {
        return Object.freeze({
            title,
            isEnabled: true,
            clientToken,
            environment,
            instance,
            codeVersion
        });
    }
    return Object.freeze({
        title,
        isEnabled: false
    });
})();
const __TURBOPACK__default__export__ = config;
}}),
"[project]/configs/app/features/safe.ts [middleware-edge] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$configs$2f$app$2f$utils$2e$ts__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/configs/app/utils.ts [middleware-edge] (ecmascript)");
;
function getApiUrl() {
    try {
        const envValue = (0, __TURBOPACK__imported__module__$5b$project$5d2f$configs$2f$app$2f$utils$2e$ts__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["getEnvValue"])('NEXT_PUBLIC_SAFE_TX_SERVICE_URL');
        return new URL('/api/v1/safes', envValue).toString();
    } catch (error) {
        return;
    }
}
const title = 'Safe address tags';
const config = (()=>{
    const apiUrl = getApiUrl();
    if (apiUrl) {
        return Object.freeze({
            title,
            isEnabled: true,
            apiUrl
        });
    }
    return Object.freeze({
        title,
        isEnabled: false
    });
})();
const __TURBOPACK__default__export__ = config;
}}),
"[project]/configs/app/features/saveOnGas.ts [middleware-edge] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$configs$2f$app$2f$utils$2e$ts__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/configs/app/utils.ts [middleware-edge] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$configs$2f$app$2f$features$2f$marketplace$2e$ts__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/configs/app/features/marketplace.ts [middleware-edge] (ecmascript)");
;
;
const title = 'Save on gas with GasHawk';
const config = (()=>{
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$configs$2f$app$2f$utils$2e$ts__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["getEnvValue"])('NEXT_PUBLIC_SAVE_ON_GAS_ENABLED') === 'true' && __TURBOPACK__imported__module__$5b$project$5d2f$configs$2f$app$2f$features$2f$marketplace$2e$ts__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["default"].isEnabled) {
        return Object.freeze({
            title,
            isEnabled: true,
            apiUrlTemplate: 'https://core.gashawk.io/apiv2/stats/address/<address>/savingsPotential/0x1'
        });
    }
    return Object.freeze({
        title,
        isEnabled: false
    });
})();
const __TURBOPACK__default__export__ = config;
}}),
"[project]/configs/app/features/sol2uml.ts [middleware-edge] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$configs$2f$app$2f$apis$2e$ts__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/configs/app/apis.ts [middleware-edge] (ecmascript)");
;
const title = 'Solidity to UML diagrams';
const config = (()=>{
    if (__TURBOPACK__imported__module__$5b$project$5d2f$configs$2f$app$2f$apis$2e$ts__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["default"].visualize) {
        return Object.freeze({
            title,
            isEnabled: true
        });
    }
    return Object.freeze({
        title,
        isEnabled: false
    });
})();
const __TURBOPACK__default__export__ = config;
}}),
"[project]/configs/app/features/stats.ts [middleware-edge] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$configs$2f$app$2f$apis$2e$ts__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/configs/app/apis.ts [middleware-edge] (ecmascript)");
;
const title = 'Blockchain statistics';
const config = (()=>{
    if (__TURBOPACK__imported__module__$5b$project$5d2f$configs$2f$app$2f$apis$2e$ts__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["default"].stats) {
        return Object.freeze({
            title,
            isEnabled: true
        });
    }
    return Object.freeze({
        title,
        isEnabled: false
    });
})();
const __TURBOPACK__default__export__ = config;
}}),
"[project]/configs/app/features/suave.ts [middleware-edge] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$configs$2f$app$2f$utils$2e$ts__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/configs/app/utils.ts [middleware-edge] (ecmascript)");
;
const title = 'SUAVE chain';
const config = (()=>{
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$configs$2f$app$2f$utils$2e$ts__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["getEnvValue"])('NEXT_PUBLIC_IS_SUAVE_CHAIN') === 'true') {
        return Object.freeze({
            title,
            isEnabled: true
        });
    }
    return Object.freeze({
        title,
        isEnabled: false
    });
})();
const __TURBOPACK__default__export__ = config;
}}),
"[project]/configs/app/features/tac.ts [middleware-edge] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$configs$2f$app$2f$apis$2e$ts__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/configs/app/apis.ts [middleware-edge] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$configs$2f$app$2f$utils$2e$ts__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/configs/app/utils.ts [middleware-edge] (ecmascript)");
;
;
const title = 'Ton Application Chain (TAC)';
const tonExplorerUrl = (0, __TURBOPACK__imported__module__$5b$project$5d2f$configs$2f$app$2f$utils$2e$ts__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["getEnvValue"])('NEXT_PUBLIC_TAC_TON_EXPLORER_URL');
const config = (()=>{
    if (__TURBOPACK__imported__module__$5b$project$5d2f$configs$2f$app$2f$apis$2e$ts__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["default"].tac && tonExplorerUrl) {
        return Object.freeze({
            title,
            isEnabled: true,
            tonExplorerUrl
        });
    }
    return Object.freeze({
        title,
        isEnabled: false
    });
})();
const __TURBOPACK__default__export__ = config;
}}),
"[project]/types/client/txInterpretation.ts [middleware-edge] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "PROVIDERS": (()=>PROVIDERS)
});
const PROVIDERS = [
    'blockscout',
    'noves',
    'none'
];
}}),
"[project]/configs/app/features/txInterpretation.ts [middleware-edge] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$types$2f$client$2f$txInterpretation$2e$ts__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/types/client/txInterpretation.ts [middleware-edge] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$configs$2f$app$2f$utils$2e$ts__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/configs/app/utils.ts [middleware-edge] (ecmascript)");
;
;
const title = 'Transaction interpretation';
const provider = (()=>{
    const value = (0, __TURBOPACK__imported__module__$5b$project$5d2f$configs$2f$app$2f$utils$2e$ts__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["getEnvValue"])('NEXT_PUBLIC_TRANSACTION_INTERPRETATION_PROVIDER');
    if (value && __TURBOPACK__imported__module__$5b$project$5d2f$types$2f$client$2f$txInterpretation$2e$ts__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["PROVIDERS"].includes(value)) {
        return value;
    }
    return 'none';
})();
const config = (()=>{
    if (provider !== 'none') {
        return Object.freeze({
            title,
            provider,
            isEnabled: true
        });
    }
    return Object.freeze({
        title,
        isEnabled: false
    });
})();
const __TURBOPACK__default__export__ = config;
}}),
"[project]/configs/app/features/userOps.ts [middleware-edge] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$configs$2f$app$2f$utils$2e$ts__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/configs/app/utils.ts [middleware-edge] (ecmascript)");
;
const title = 'User operations';
const config = (()=>{
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$configs$2f$app$2f$utils$2e$ts__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["getEnvValue"])('NEXT_PUBLIC_HAS_USER_OPS') === 'true') {
        return Object.freeze({
            title,
            isEnabled: true
        });
    }
    return Object.freeze({
        title,
        isEnabled: false
    });
})();
const __TURBOPACK__default__export__ = config;
}}),
"[project]/configs/app/features/addressProfileAPI.ts [middleware-edge] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$configs$2f$app$2f$utils$2e$ts__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/configs/app/utils.ts [middleware-edge] (ecmascript)");
;
const value = (0, __TURBOPACK__imported__module__$5b$project$5d2f$configs$2f$app$2f$utils$2e$ts__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["parseEnvJson"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$configs$2f$app$2f$utils$2e$ts__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["getEnvValue"])('NEXT_PUBLIC_ADDRESS_USERNAME_TAG'));
function checkApiUrlTemplate(apiUrlTemplate) {
    try {
        const testUrl = apiUrlTemplate.replace('{address}', '0x0000000000000000000000000000000000000000');
        new URL(testUrl).toString();
        return true;
    } catch (error) {
        return false;
    }
}
const title = 'User profile API';
const config = (()=>{
    if (value && checkApiUrlTemplate(value.api_url_template)) {
        return Object.freeze({
            title,
            isEnabled: true,
            apiUrlTemplate: value.api_url_template,
            tagLinkTemplate: value.tag_link_template,
            tagIcon: value.tag_icon,
            tagBgColor: value.tag_bg_color,
            tagTextColor: value.tag_text_color
        });
    }
    return Object.freeze({
        title,
        isEnabled: false
    });
})();
const __TURBOPACK__default__export__ = config;
}}),
"[project]/types/client/validators.ts [middleware-edge] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "VALIDATORS_CHAIN_TYPE": (()=>VALIDATORS_CHAIN_TYPE)
});
const VALIDATORS_CHAIN_TYPE = [
    'stability',
    'blackfort',
    'zilliqa'
];
}}),
"[project]/configs/app/features/validators.ts [middleware-edge] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$types$2f$client$2f$validators$2e$ts__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/types/client/validators.ts [middleware-edge] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$configs$2f$app$2f$utils$2e$ts__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/configs/app/utils.ts [middleware-edge] (ecmascript)");
;
;
const chainType = (()=>{
    const envValue = (0, __TURBOPACK__imported__module__$5b$project$5d2f$configs$2f$app$2f$utils$2e$ts__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["getEnvValue"])('NEXT_PUBLIC_VALIDATORS_CHAIN_TYPE');
    return envValue && __TURBOPACK__imported__module__$5b$project$5d2f$types$2f$client$2f$validators$2e$ts__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["VALIDATORS_CHAIN_TYPE"].includes(envValue) ? envValue : undefined;
})();
const title = 'Validators list';
const config = (()=>{
    if (chainType) {
        return Object.freeze({
            title,
            isEnabled: true,
            chainType
        });
    }
    return Object.freeze({
        title,
        isEnabled: false
    });
})();
const __TURBOPACK__default__export__ = config;
}}),
"[project]/types/client/wallets.ts [middleware-edge] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "SUPPORTED_WALLETS": (()=>SUPPORTED_WALLETS)
});
const SUPPORTED_WALLETS = [
    'metamask',
    'coinbase',
    'token_pocket'
];
}}),
"[project]/configs/app/features/web3Wallet.ts [middleware-edge] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$types$2f$client$2f$wallets$2e$ts__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/types/client/wallets.ts [middleware-edge] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$configs$2f$app$2f$utils$2e$ts__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/configs/app/utils.ts [middleware-edge] (ecmascript)");
;
;
const wallets = (()=>{
    const envValue = (0, __TURBOPACK__imported__module__$5b$project$5d2f$configs$2f$app$2f$utils$2e$ts__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["getEnvValue"])('NEXT_PUBLIC_WEB3_WALLETS');
    if (envValue === 'none') {
        return;
    }
    const wallets = (0, __TURBOPACK__imported__module__$5b$project$5d2f$configs$2f$app$2f$utils$2e$ts__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["parseEnvJson"])(envValue)?.filter((type)=>__TURBOPACK__imported__module__$5b$project$5d2f$types$2f$client$2f$wallets$2e$ts__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["SUPPORTED_WALLETS"].includes(type));
    if (!wallets || wallets.length === 0) {
        return [
            'metamask'
        ];
    }
    return wallets;
})();
const title = 'Web3 wallet integration (add token or network to the wallet)';
const config = (()=>{
    if (wallets && wallets.length > 0) {
        return Object.freeze({
            title,
            isEnabled: true,
            wallets,
            addToken: {
                isDisabled: (0, __TURBOPACK__imported__module__$5b$project$5d2f$configs$2f$app$2f$utils$2e$ts__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["getEnvValue"])('NEXT_PUBLIC_WEB3_DISABLE_ADD_TOKEN_TO_WALLET') === 'true'
            },
            addNetwork: {}
        });
    }
    return Object.freeze({
        title,
        isEnabled: false
    });
})();
const __TURBOPACK__default__export__ = config;
}}),
"[project]/configs/app/features/xStarScore.ts [middleware-edge] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$configs$2f$app$2f$utils$2e$ts__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/configs/app/utils.ts [middleware-edge] (ecmascript)");
;
const title = 'XStar score';
const url = (0, __TURBOPACK__imported__module__$5b$project$5d2f$configs$2f$app$2f$utils$2e$ts__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["getEnvValue"])('NEXT_PUBLIC_XSTAR_SCORE_URL');
const config = (()=>{
    if (url) {
        return Object.freeze({
            title,
            url,
            isEnabled: true
        });
    }
    return Object.freeze({
        title,
        isEnabled: false
    });
})();
const __TURBOPACK__default__export__ = config;
}}),
"[project]/configs/app/features/index.ts [middleware-edge] (ecmascript) <locals>": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({});
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
}}),
"[project]/configs/app/features/index.ts [middleware-edge] (ecmascript) <module evaluation>": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({});
var __TURBOPACK__imported__module__$5b$project$5d2f$configs$2f$app$2f$features$2f$advancedFilter$2e$ts__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/configs/app/features/advancedFilter.ts [middleware-edge] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$configs$2f$app$2f$features$2f$account$2e$ts__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/configs/app/features/account.ts [middleware-edge] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$configs$2f$app$2f$features$2f$addressVerification$2e$ts__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/configs/app/features/addressVerification.ts [middleware-edge] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$configs$2f$app$2f$features$2f$addressMetadata$2e$ts__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/configs/app/features/addressMetadata.ts [middleware-edge] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$configs$2f$app$2f$features$2f$address3rdPartyWidgets$2e$ts__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/configs/app/features/address3rdPartyWidgets.ts [middleware-edge] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$configs$2f$app$2f$features$2f$adsBanner$2e$ts__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/configs/app/features/adsBanner.ts [middleware-edge] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$configs$2f$app$2f$features$2f$adsText$2e$ts__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/configs/app/features/adsText.ts [middleware-edge] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$configs$2f$app$2f$features$2f$apiDocs$2e$ts__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/configs/app/features/apiDocs.ts [middleware-edge] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$configs$2f$app$2f$features$2f$beaconChain$2e$ts__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/configs/app/features/beaconChain.ts [middleware-edge] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$configs$2f$app$2f$features$2f$bridgedTokens$2e$ts__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/configs/app/features/bridgedTokens.ts [middleware-edge] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$configs$2f$app$2f$features$2f$blockchainInteraction$2e$ts__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/configs/app/features/blockchainInteraction.ts [middleware-edge] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$configs$2f$app$2f$features$2f$celo$2e$ts__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/configs/app/features/celo.ts [middleware-edge] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$configs$2f$app$2f$features$2f$csvExport$2e$ts__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/configs/app/features/csvExport.ts [middleware-edge] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$configs$2f$app$2f$features$2f$dataAvailability$2e$ts__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/configs/app/features/dataAvailability.ts [middleware-edge] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$configs$2f$app$2f$features$2f$deFiDropdown$2e$ts__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/configs/app/features/deFiDropdown.ts [middleware-edge] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$configs$2f$app$2f$features$2f$easterEggBadge$2e$ts__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/configs/app/features/easterEggBadge.ts [middleware-edge] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$configs$2f$app$2f$features$2f$easterEggPuzzleBadge$2e$ts__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/configs/app/features/easterEggPuzzleBadge.ts [middleware-edge] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$configs$2f$app$2f$features$2f$externalTxs$2e$ts__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/configs/app/features/externalTxs.ts [middleware-edge] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$configs$2f$app$2f$features$2f$faultProofSystem$2e$ts__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/configs/app/features/faultProofSystem.ts [middleware-edge] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$configs$2f$app$2f$features$2f$flashblocks$2e$ts__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/configs/app/features/flashblocks.ts [middleware-edge] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$configs$2f$app$2f$features$2f$gasTracker$2e$ts__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/configs/app/features/gasTracker.ts [middleware-edge] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$configs$2f$app$2f$features$2f$getGasButton$2e$ts__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/configs/app/features/getGasButton.ts [middleware-edge] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$configs$2f$app$2f$features$2f$googleAnalytics$2e$ts__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/configs/app/features/googleAnalytics.ts [middleware-edge] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$configs$2f$app$2f$features$2f$growthBook$2e$ts__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/configs/app/features/growthBook.ts [middleware-edge] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$configs$2f$app$2f$features$2f$marketplace$2e$ts__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/configs/app/features/marketplace.ts [middleware-edge] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$configs$2f$app$2f$features$2f$metasuites$2e$ts__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/configs/app/features/metasuites.ts [middleware-edge] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$configs$2f$app$2f$features$2f$mixpanel$2e$ts__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/configs/app/features/mixpanel.ts [middleware-edge] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$configs$2f$app$2f$features$2f$mudFramework$2e$ts__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/configs/app/features/mudFramework.ts [middleware-edge] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$configs$2f$app$2f$features$2f$multichainButton$2e$ts__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/configs/app/features/multichainButton.ts [middleware-edge] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$configs$2f$app$2f$features$2f$nameService$2e$ts__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/configs/app/features/nameService.ts [middleware-edge] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$configs$2f$app$2f$features$2f$opSuperchain$2e$ts__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/configs/app/features/opSuperchain.ts [middleware-edge] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$configs$2f$app$2f$features$2f$pools$2e$ts__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/configs/app/features/pools.ts [middleware-edge] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$configs$2f$app$2f$features$2f$publicTagsSubmission$2e$ts__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/configs/app/features/publicTagsSubmission.ts [middleware-edge] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$configs$2f$app$2f$features$2f$rewards$2e$ts__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/configs/app/features/rewards.ts [middleware-edge] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$configs$2f$app$2f$features$2f$rollbar$2e$ts__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/configs/app/features/rollbar.ts [middleware-edge] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$configs$2f$app$2f$features$2f$rollup$2e$ts__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/configs/app/features/rollup.ts [middleware-edge] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$configs$2f$app$2f$features$2f$safe$2e$ts__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/configs/app/features/safe.ts [middleware-edge] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$configs$2f$app$2f$features$2f$saveOnGas$2e$ts__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/configs/app/features/saveOnGas.ts [middleware-edge] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$configs$2f$app$2f$features$2f$sol2uml$2e$ts__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/configs/app/features/sol2uml.ts [middleware-edge] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$configs$2f$app$2f$features$2f$stats$2e$ts__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/configs/app/features/stats.ts [middleware-edge] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$configs$2f$app$2f$features$2f$suave$2e$ts__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/configs/app/features/suave.ts [middleware-edge] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$configs$2f$app$2f$features$2f$tac$2e$ts__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/configs/app/features/tac.ts [middleware-edge] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$configs$2f$app$2f$features$2f$txInterpretation$2e$ts__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/configs/app/features/txInterpretation.ts [middleware-edge] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$configs$2f$app$2f$features$2f$userOps$2e$ts__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/configs/app/features/userOps.ts [middleware-edge] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$configs$2f$app$2f$features$2f$addressProfileAPI$2e$ts__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/configs/app/features/addressProfileAPI.ts [middleware-edge] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$configs$2f$app$2f$features$2f$validators$2e$ts__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/configs/app/features/validators.ts [middleware-edge] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$configs$2f$app$2f$features$2f$verifiedTokens$2e$ts__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/configs/app/features/verifiedTokens.ts [middleware-edge] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$configs$2f$app$2f$features$2f$web3Wallet$2e$ts__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/configs/app/features/web3Wallet.ts [middleware-edge] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$configs$2f$app$2f$features$2f$xStarScore$2e$ts__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/configs/app/features/xStarScore.ts [middleware-edge] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$configs$2f$app$2f$features$2f$index$2e$ts__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/configs/app/features/index.ts [middleware-edge] (ecmascript) <locals>");
}}),
"[project]/configs/app/features/index.ts [middleware-edge] (ecmascript) <exports>": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "account": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$configs$2f$app$2f$features$2f$account$2e$ts__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["default"]),
    "address3rdPartyWidgets": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$configs$2f$app$2f$features$2f$address3rdPartyWidgets$2e$ts__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["default"]),
    "addressMetadata": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$configs$2f$app$2f$features$2f$addressMetadata$2e$ts__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["default"]),
    "addressProfileAPI": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$configs$2f$app$2f$features$2f$addressProfileAPI$2e$ts__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["default"]),
    "addressVerification": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$configs$2f$app$2f$features$2f$addressVerification$2e$ts__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["default"]),
    "adsBanner": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$configs$2f$app$2f$features$2f$adsBanner$2e$ts__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["default"]),
    "adsText": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$configs$2f$app$2f$features$2f$adsText$2e$ts__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["default"]),
    "advancedFilter": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$configs$2f$app$2f$features$2f$advancedFilter$2e$ts__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["default"]),
    "apiDocs": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$configs$2f$app$2f$features$2f$apiDocs$2e$ts__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["default"]),
    "beaconChain": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$configs$2f$app$2f$features$2f$beaconChain$2e$ts__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["default"]),
    "blockchainInteraction": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$configs$2f$app$2f$features$2f$blockchainInteraction$2e$ts__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["default"]),
    "bridgedTokens": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$configs$2f$app$2f$features$2f$bridgedTokens$2e$ts__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["default"]),
    "celo": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$configs$2f$app$2f$features$2f$celo$2e$ts__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["default"]),
    "csvExport": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$configs$2f$app$2f$features$2f$csvExport$2e$ts__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["default"]),
    "dataAvailability": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$configs$2f$app$2f$features$2f$dataAvailability$2e$ts__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["default"]),
    "deFiDropdown": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$configs$2f$app$2f$features$2f$deFiDropdown$2e$ts__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["default"]),
    "easterEggBadge": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$configs$2f$app$2f$features$2f$easterEggBadge$2e$ts__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["default"]),
    "easterEggPuzzleBadge": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$configs$2f$app$2f$features$2f$easterEggPuzzleBadge$2e$ts__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["default"]),
    "externalTxs": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$configs$2f$app$2f$features$2f$externalTxs$2e$ts__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["default"]),
    "faultProofSystem": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$configs$2f$app$2f$features$2f$faultProofSystem$2e$ts__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["default"]),
    "flashblocks": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$configs$2f$app$2f$features$2f$flashblocks$2e$ts__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["default"]),
    "gasTracker": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$configs$2f$app$2f$features$2f$gasTracker$2e$ts__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["default"]),
    "getGasButton": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$configs$2f$app$2f$features$2f$getGasButton$2e$ts__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["default"]),
    "googleAnalytics": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$configs$2f$app$2f$features$2f$googleAnalytics$2e$ts__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["default"]),
    "growthBook": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$configs$2f$app$2f$features$2f$growthBook$2e$ts__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["default"]),
    "marketplace": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$configs$2f$app$2f$features$2f$marketplace$2e$ts__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["default"]),
    "metasuites": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$configs$2f$app$2f$features$2f$metasuites$2e$ts__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["default"]),
    "mixpanel": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$configs$2f$app$2f$features$2f$mixpanel$2e$ts__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["default"]),
    "mudFramework": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$configs$2f$app$2f$features$2f$mudFramework$2e$ts__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["default"]),
    "multichainButton": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$configs$2f$app$2f$features$2f$multichainButton$2e$ts__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["default"]),
    "nameService": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$configs$2f$app$2f$features$2f$nameService$2e$ts__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["default"]),
    "opSuperchain": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$configs$2f$app$2f$features$2f$opSuperchain$2e$ts__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["default"]),
    "pools": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$configs$2f$app$2f$features$2f$pools$2e$ts__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["default"]),
    "publicTagsSubmission": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$configs$2f$app$2f$features$2f$publicTagsSubmission$2e$ts__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["default"]),
    "rewards": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$configs$2f$app$2f$features$2f$rewards$2e$ts__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["default"]),
    "rollbar": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$configs$2f$app$2f$features$2f$rollbar$2e$ts__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["default"]),
    "rollup": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$configs$2f$app$2f$features$2f$rollup$2e$ts__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["default"]),
    "safe": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$configs$2f$app$2f$features$2f$safe$2e$ts__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["default"]),
    "saveOnGas": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$configs$2f$app$2f$features$2f$saveOnGas$2e$ts__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["default"]),
    "sol2uml": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$configs$2f$app$2f$features$2f$sol2uml$2e$ts__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["default"]),
    "stats": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$configs$2f$app$2f$features$2f$stats$2e$ts__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["default"]),
    "suave": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$configs$2f$app$2f$features$2f$suave$2e$ts__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["default"]),
    "tac": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$configs$2f$app$2f$features$2f$tac$2e$ts__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["default"]),
    "txInterpretation": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$configs$2f$app$2f$features$2f$txInterpretation$2e$ts__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["default"]),
    "userOps": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$configs$2f$app$2f$features$2f$userOps$2e$ts__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["default"]),
    "validators": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$configs$2f$app$2f$features$2f$validators$2e$ts__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["default"]),
    "verifiedTokens": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$configs$2f$app$2f$features$2f$verifiedTokens$2e$ts__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["default"]),
    "web3Wallet": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$configs$2f$app$2f$features$2f$web3Wallet$2e$ts__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["default"]),
    "xStarScore": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$configs$2f$app$2f$features$2f$xStarScore$2e$ts__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["default"])
});
var __TURBOPACK__imported__module__$5b$project$5d2f$configs$2f$app$2f$features$2f$advancedFilter$2e$ts__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/configs/app/features/advancedFilter.ts [middleware-edge] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$configs$2f$app$2f$features$2f$account$2e$ts__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/configs/app/features/account.ts [middleware-edge] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$configs$2f$app$2f$features$2f$addressVerification$2e$ts__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/configs/app/features/addressVerification.ts [middleware-edge] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$configs$2f$app$2f$features$2f$addressMetadata$2e$ts__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/configs/app/features/addressMetadata.ts [middleware-edge] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$configs$2f$app$2f$features$2f$address3rdPartyWidgets$2e$ts__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/configs/app/features/address3rdPartyWidgets.ts [middleware-edge] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$configs$2f$app$2f$features$2f$adsBanner$2e$ts__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/configs/app/features/adsBanner.ts [middleware-edge] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$configs$2f$app$2f$features$2f$adsText$2e$ts__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/configs/app/features/adsText.ts [middleware-edge] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$configs$2f$app$2f$features$2f$apiDocs$2e$ts__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/configs/app/features/apiDocs.ts [middleware-edge] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$configs$2f$app$2f$features$2f$beaconChain$2e$ts__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/configs/app/features/beaconChain.ts [middleware-edge] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$configs$2f$app$2f$features$2f$bridgedTokens$2e$ts__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/configs/app/features/bridgedTokens.ts [middleware-edge] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$configs$2f$app$2f$features$2f$blockchainInteraction$2e$ts__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/configs/app/features/blockchainInteraction.ts [middleware-edge] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$configs$2f$app$2f$features$2f$celo$2e$ts__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/configs/app/features/celo.ts [middleware-edge] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$configs$2f$app$2f$features$2f$csvExport$2e$ts__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/configs/app/features/csvExport.ts [middleware-edge] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$configs$2f$app$2f$features$2f$dataAvailability$2e$ts__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/configs/app/features/dataAvailability.ts [middleware-edge] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$configs$2f$app$2f$features$2f$deFiDropdown$2e$ts__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/configs/app/features/deFiDropdown.ts [middleware-edge] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$configs$2f$app$2f$features$2f$easterEggBadge$2e$ts__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/configs/app/features/easterEggBadge.ts [middleware-edge] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$configs$2f$app$2f$features$2f$easterEggPuzzleBadge$2e$ts__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/configs/app/features/easterEggPuzzleBadge.ts [middleware-edge] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$configs$2f$app$2f$features$2f$externalTxs$2e$ts__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/configs/app/features/externalTxs.ts [middleware-edge] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$configs$2f$app$2f$features$2f$faultProofSystem$2e$ts__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/configs/app/features/faultProofSystem.ts [middleware-edge] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$configs$2f$app$2f$features$2f$flashblocks$2e$ts__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/configs/app/features/flashblocks.ts [middleware-edge] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$configs$2f$app$2f$features$2f$gasTracker$2e$ts__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/configs/app/features/gasTracker.ts [middleware-edge] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$configs$2f$app$2f$features$2f$getGasButton$2e$ts__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/configs/app/features/getGasButton.ts [middleware-edge] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$configs$2f$app$2f$features$2f$googleAnalytics$2e$ts__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/configs/app/features/googleAnalytics.ts [middleware-edge] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$configs$2f$app$2f$features$2f$growthBook$2e$ts__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/configs/app/features/growthBook.ts [middleware-edge] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$configs$2f$app$2f$features$2f$marketplace$2e$ts__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/configs/app/features/marketplace.ts [middleware-edge] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$configs$2f$app$2f$features$2f$metasuites$2e$ts__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/configs/app/features/metasuites.ts [middleware-edge] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$configs$2f$app$2f$features$2f$mixpanel$2e$ts__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/configs/app/features/mixpanel.ts [middleware-edge] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$configs$2f$app$2f$features$2f$mudFramework$2e$ts__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/configs/app/features/mudFramework.ts [middleware-edge] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$configs$2f$app$2f$features$2f$multichainButton$2e$ts__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/configs/app/features/multichainButton.ts [middleware-edge] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$configs$2f$app$2f$features$2f$nameService$2e$ts__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/configs/app/features/nameService.ts [middleware-edge] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$configs$2f$app$2f$features$2f$opSuperchain$2e$ts__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/configs/app/features/opSuperchain.ts [middleware-edge] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$configs$2f$app$2f$features$2f$pools$2e$ts__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/configs/app/features/pools.ts [middleware-edge] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$configs$2f$app$2f$features$2f$publicTagsSubmission$2e$ts__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/configs/app/features/publicTagsSubmission.ts [middleware-edge] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$configs$2f$app$2f$features$2f$rewards$2e$ts__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/configs/app/features/rewards.ts [middleware-edge] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$configs$2f$app$2f$features$2f$rollbar$2e$ts__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/configs/app/features/rollbar.ts [middleware-edge] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$configs$2f$app$2f$features$2f$rollup$2e$ts__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/configs/app/features/rollup.ts [middleware-edge] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$configs$2f$app$2f$features$2f$safe$2e$ts__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/configs/app/features/safe.ts [middleware-edge] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$configs$2f$app$2f$features$2f$saveOnGas$2e$ts__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/configs/app/features/saveOnGas.ts [middleware-edge] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$configs$2f$app$2f$features$2f$sol2uml$2e$ts__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/configs/app/features/sol2uml.ts [middleware-edge] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$configs$2f$app$2f$features$2f$stats$2e$ts__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/configs/app/features/stats.ts [middleware-edge] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$configs$2f$app$2f$features$2f$suave$2e$ts__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/configs/app/features/suave.ts [middleware-edge] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$configs$2f$app$2f$features$2f$tac$2e$ts__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/configs/app/features/tac.ts [middleware-edge] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$configs$2f$app$2f$features$2f$txInterpretation$2e$ts__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/configs/app/features/txInterpretation.ts [middleware-edge] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$configs$2f$app$2f$features$2f$userOps$2e$ts__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/configs/app/features/userOps.ts [middleware-edge] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$configs$2f$app$2f$features$2f$addressProfileAPI$2e$ts__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/configs/app/features/addressProfileAPI.ts [middleware-edge] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$configs$2f$app$2f$features$2f$validators$2e$ts__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/configs/app/features/validators.ts [middleware-edge] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$configs$2f$app$2f$features$2f$verifiedTokens$2e$ts__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/configs/app/features/verifiedTokens.ts [middleware-edge] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$configs$2f$app$2f$features$2f$web3Wallet$2e$ts__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/configs/app/features/web3Wallet.ts [middleware-edge] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$configs$2f$app$2f$features$2f$xStarScore$2e$ts__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/configs/app/features/xStarScore.ts [middleware-edge] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$configs$2f$app$2f$features$2f$index$2e$ts__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/configs/app/features/index.ts [middleware-edge] (ecmascript) <locals>");
}}),
"[project]/configs/app/features/index.ts [middleware-edge] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "account": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$configs$2f$app$2f$features$2f$index$2e$ts__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__$3c$exports$3e$__["account"]),
    "address3rdPartyWidgets": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$configs$2f$app$2f$features$2f$index$2e$ts__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__$3c$exports$3e$__["address3rdPartyWidgets"]),
    "addressMetadata": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$configs$2f$app$2f$features$2f$index$2e$ts__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__$3c$exports$3e$__["addressMetadata"]),
    "addressProfileAPI": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$configs$2f$app$2f$features$2f$index$2e$ts__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__$3c$exports$3e$__["addressProfileAPI"]),
    "addressVerification": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$configs$2f$app$2f$features$2f$index$2e$ts__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__$3c$exports$3e$__["addressVerification"]),
    "adsBanner": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$configs$2f$app$2f$features$2f$index$2e$ts__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__$3c$exports$3e$__["adsBanner"]),
    "adsText": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$configs$2f$app$2f$features$2f$index$2e$ts__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__$3c$exports$3e$__["adsText"]),
    "advancedFilter": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$configs$2f$app$2f$features$2f$index$2e$ts__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__$3c$exports$3e$__["advancedFilter"]),
    "apiDocs": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$configs$2f$app$2f$features$2f$index$2e$ts__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__$3c$exports$3e$__["apiDocs"]),
    "beaconChain": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$configs$2f$app$2f$features$2f$index$2e$ts__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__$3c$exports$3e$__["beaconChain"]),
    "blockchainInteraction": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$configs$2f$app$2f$features$2f$index$2e$ts__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__$3c$exports$3e$__["blockchainInteraction"]),
    "bridgedTokens": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$configs$2f$app$2f$features$2f$index$2e$ts__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__$3c$exports$3e$__["bridgedTokens"]),
    "celo": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$configs$2f$app$2f$features$2f$index$2e$ts__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__$3c$exports$3e$__["celo"]),
    "csvExport": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$configs$2f$app$2f$features$2f$index$2e$ts__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__$3c$exports$3e$__["csvExport"]),
    "dataAvailability": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$configs$2f$app$2f$features$2f$index$2e$ts__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__$3c$exports$3e$__["dataAvailability"]),
    "deFiDropdown": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$configs$2f$app$2f$features$2f$index$2e$ts__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__$3c$exports$3e$__["deFiDropdown"]),
    "easterEggBadge": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$configs$2f$app$2f$features$2f$index$2e$ts__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__$3c$exports$3e$__["easterEggBadge"]),
    "easterEggPuzzleBadge": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$configs$2f$app$2f$features$2f$index$2e$ts__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__$3c$exports$3e$__["easterEggPuzzleBadge"]),
    "externalTxs": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$configs$2f$app$2f$features$2f$index$2e$ts__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__$3c$exports$3e$__["externalTxs"]),
    "faultProofSystem": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$configs$2f$app$2f$features$2f$index$2e$ts__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__$3c$exports$3e$__["faultProofSystem"]),
    "flashblocks": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$configs$2f$app$2f$features$2f$index$2e$ts__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__$3c$exports$3e$__["flashblocks"]),
    "gasTracker": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$configs$2f$app$2f$features$2f$index$2e$ts__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__$3c$exports$3e$__["gasTracker"]),
    "getGasButton": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$configs$2f$app$2f$features$2f$index$2e$ts__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__$3c$exports$3e$__["getGasButton"]),
    "googleAnalytics": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$configs$2f$app$2f$features$2f$index$2e$ts__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__$3c$exports$3e$__["googleAnalytics"]),
    "growthBook": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$configs$2f$app$2f$features$2f$index$2e$ts__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__$3c$exports$3e$__["growthBook"]),
    "marketplace": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$configs$2f$app$2f$features$2f$index$2e$ts__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__$3c$exports$3e$__["marketplace"]),
    "metasuites": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$configs$2f$app$2f$features$2f$index$2e$ts__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__$3c$exports$3e$__["metasuites"]),
    "mixpanel": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$configs$2f$app$2f$features$2f$index$2e$ts__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__$3c$exports$3e$__["mixpanel"]),
    "mudFramework": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$configs$2f$app$2f$features$2f$index$2e$ts__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__$3c$exports$3e$__["mudFramework"]),
    "multichainButton": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$configs$2f$app$2f$features$2f$index$2e$ts__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__$3c$exports$3e$__["multichainButton"]),
    "nameService": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$configs$2f$app$2f$features$2f$index$2e$ts__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__$3c$exports$3e$__["nameService"]),
    "opSuperchain": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$configs$2f$app$2f$features$2f$index$2e$ts__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__$3c$exports$3e$__["opSuperchain"]),
    "pools": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$configs$2f$app$2f$features$2f$index$2e$ts__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__$3c$exports$3e$__["pools"]),
    "publicTagsSubmission": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$configs$2f$app$2f$features$2f$index$2e$ts__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__$3c$exports$3e$__["publicTagsSubmission"]),
    "rewards": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$configs$2f$app$2f$features$2f$index$2e$ts__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__$3c$exports$3e$__["rewards"]),
    "rollbar": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$configs$2f$app$2f$features$2f$index$2e$ts__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__$3c$exports$3e$__["rollbar"]),
    "rollup": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$configs$2f$app$2f$features$2f$index$2e$ts__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__$3c$exports$3e$__["rollup"]),
    "safe": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$configs$2f$app$2f$features$2f$index$2e$ts__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__$3c$exports$3e$__["safe"]),
    "saveOnGas": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$configs$2f$app$2f$features$2f$index$2e$ts__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__$3c$exports$3e$__["saveOnGas"]),
    "sol2uml": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$configs$2f$app$2f$features$2f$index$2e$ts__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__$3c$exports$3e$__["sol2uml"]),
    "stats": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$configs$2f$app$2f$features$2f$index$2e$ts__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__$3c$exports$3e$__["stats"]),
    "suave": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$configs$2f$app$2f$features$2f$index$2e$ts__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__$3c$exports$3e$__["suave"]),
    "tac": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$configs$2f$app$2f$features$2f$index$2e$ts__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__$3c$exports$3e$__["tac"]),
    "txInterpretation": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$configs$2f$app$2f$features$2f$index$2e$ts__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__$3c$exports$3e$__["txInterpretation"]),
    "userOps": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$configs$2f$app$2f$features$2f$index$2e$ts__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__$3c$exports$3e$__["userOps"]),
    "validators": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$configs$2f$app$2f$features$2f$index$2e$ts__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__$3c$exports$3e$__["validators"]),
    "verifiedTokens": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$configs$2f$app$2f$features$2f$index$2e$ts__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__$3c$exports$3e$__["verifiedTokens"]),
    "web3Wallet": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$configs$2f$app$2f$features$2f$index$2e$ts__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__$3c$exports$3e$__["web3Wallet"]),
    "xStarScore": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$configs$2f$app$2f$features$2f$index$2e$ts__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__$3c$exports$3e$__["xStarScore"])
});
var __TURBOPACK__imported__module__$5b$project$5d2f$configs$2f$app$2f$features$2f$index$2e$ts__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/configs/app/features/index.ts [middleware-edge] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$configs$2f$app$2f$features$2f$index$2e$ts__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__$3c$exports$3e$__ = __turbopack_context__.i("[project]/configs/app/features/index.ts [middleware-edge] (ecmascript) <exports>");
}}),
"[project]/configs/app/meta.ts [middleware-edge] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$configs$2f$app$2f$app$2e$ts__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/configs/app/app.ts [middleware-edge] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$configs$2f$app$2f$utils$2e$ts__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/configs/app/utils.ts [middleware-edge] (ecmascript)");
;
;
const defaultImageUrl = '/static/og_image.png';
const meta = Object.freeze({
    promoteBlockscoutInTitle: (0, __TURBOPACK__imported__module__$5b$project$5d2f$configs$2f$app$2f$utils$2e$ts__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["getEnvValue"])('NEXT_PUBLIC_PROMOTE_BLOCKSCOUT_IN_TITLE') === 'false' ? false : true,
    og: {
        description: (0, __TURBOPACK__imported__module__$5b$project$5d2f$configs$2f$app$2f$utils$2e$ts__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["getEnvValue"])('NEXT_PUBLIC_OG_DESCRIPTION') || '',
        imageUrl: __TURBOPACK__imported__module__$5b$project$5d2f$configs$2f$app$2f$app$2e$ts__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["default"].baseUrl + ((0, __TURBOPACK__imported__module__$5b$project$5d2f$configs$2f$app$2f$utils$2e$ts__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["getExternalAssetFilePath"])('NEXT_PUBLIC_OG_IMAGE_URL') || defaultImageUrl),
        enhancedDataEnabled: (0, __TURBOPACK__imported__module__$5b$project$5d2f$configs$2f$app$2f$utils$2e$ts__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["getEnvValue"])('NEXT_PUBLIC_OG_ENHANCED_DATA_ENABLED') === 'true'
    },
    seo: {
        enhancedDataEnabled: (0, __TURBOPACK__imported__module__$5b$project$5d2f$configs$2f$app$2f$utils$2e$ts__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["getEnvValue"])('NEXT_PUBLIC_SEO_ENHANCED_DATA_ENABLED') === 'true'
    }
});
const __TURBOPACK__default__export__ = meta;
}}),
"[project]/types/homepage.ts [middleware-edge] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "CHAIN_INDICATOR_IDS": (()=>CHAIN_INDICATOR_IDS),
    "HOME_STATS_WIDGET_IDS": (()=>HOME_STATS_WIDGET_IDS)
});
const CHAIN_INDICATOR_IDS = [
    'daily_txs',
    'daily_operational_txs',
    'coin_price',
    'secondary_coin_price',
    'market_cap',
    'tvl'
];
const HOME_STATS_WIDGET_IDS = [
    'latest_batch',
    'total_blocks',
    'average_block_time',
    'total_txs',
    'total_operational_txs',
    'latest_l1_state_batch',
    'wallet_addresses',
    'gas_tracker',
    'btc_locked',
    'current_epoch',
    'gpu_supply'
];
}}),
"[project]/lib/settings/colorTheme.ts [middleware-edge] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "COLOR_THEMES": (()=>COLOR_THEMES),
    "getDefaultColorTheme": (()=>getDefaultColorTheme),
    "getThemeHexWithOverrides": (()=>getThemeHexWithOverrides)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$configs$2f$app$2f$index$2e$ts__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/configs/app/index.ts [middleware-edge] (ecmascript)");
;
const getNestedValue = (obj, property)=>{
    const keys = property.split('.');
    let current = obj;
    for (const key of keys){
        const value = current[key];
        if (value === undefined) {
            return undefined;
        }
        if (typeof value === 'object' && value !== null && !Array.isArray(value)) {
            current = value;
        } else {
            return value;
        }
    }
};
function getThemeHexWithOverrides(colorThemeId) {
    const defaultHex = COLOR_THEMES.find((theme)=>theme.id === colorThemeId)?.hex;
    if (!defaultHex) {
        return;
    }
    const overrides = __TURBOPACK__imported__module__$5b$project$5d2f$configs$2f$app$2f$index$2e$ts__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["default"].UI.colorTheme.overrides;
    if (colorThemeId === 'light') {
        const value = getNestedValue(overrides, 'bg.primary._light.value');
        return typeof value === 'string' ? value : defaultHex;
    }
    if (colorThemeId === 'dark') {
        const value = getNestedValue(overrides, 'bg.primary._dark.value');
        return typeof value === 'string' ? value : defaultHex;
    }
    return defaultHex;
}
function getDefaultColorTheme(colorMode) {
    const colorTheme = COLOR_THEMES.filter((theme)=>theme.colorMode === colorMode).slice(-1)[0];
    return colorTheme.id;
}
const COLOR_THEMES = [
    {
        id: 'light',
        label: 'Light',
        colorMode: 'light',
        hex: '#FFFFFF',
        sampleBg: 'linear-gradient(154deg, #EFEFEF 50%, rgba(255, 255, 255, 0.00) 330.86%)'
    },
    {
        id: 'dim',
        label: 'Dim',
        colorMode: 'dark',
        hex: '#232B37',
        sampleBg: 'linear-gradient(152deg, #232B37 50%, rgba(255, 255, 255, 0.00) 290.71%)'
    },
    {
        id: 'midnight',
        label: 'Midnight',
        colorMode: 'dark',
        hex: '#1B2E48',
        sampleBg: 'linear-gradient(148deg, #1B3F71 50%, rgba(255, 255, 255, 0.00) 312.35%)'
    },
    {
        id: 'dark',
        label: 'Dark',
        colorMode: 'dark',
        hex: '#101112',
        sampleBg: 'linear-gradient(161deg, #000 9.37%, #383838 92.52%)'
    }
];
}}),
"[project]/configs/app/features/rollup.ts [middleware-edge] (ecmascript) <export default as rollup>": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "rollup": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$configs$2f$app$2f$features$2f$rollup$2e$ts__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["default"])
});
var __TURBOPACK__imported__module__$5b$project$5d2f$configs$2f$app$2f$features$2f$rollup$2e$ts__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/configs/app/features/rollup.ts [middleware-edge] (ecmascript)");
}}),
"[project]/types/client/contract.ts [middleware-edge] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "SMART_CONTRACT_EXTRA_VERIFICATION_METHODS": (()=>SMART_CONTRACT_EXTRA_VERIFICATION_METHODS),
    "SMART_CONTRACT_LANGUAGE_FILTERS": (()=>SMART_CONTRACT_LANGUAGE_FILTERS)
});
const SMART_CONTRACT_EXTRA_VERIFICATION_METHODS = [
    'solidity-hardhat',
    'solidity-foundry'
];
const SMART_CONTRACT_LANGUAGE_FILTERS = [
    'solidity',
    'vyper',
    'yul',
    'scilla',
    'geas'
];
}}),
"[project]/types/views/address.ts [middleware-edge] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "ADDRESS_3RD_PARTY_WIDGET_PAGES": (()=>ADDRESS_3RD_PARTY_WIDGET_PAGES),
    "ADDRESS_FORMATS": (()=>ADDRESS_FORMATS),
    "ADDRESS_VIEWS_IDS": (()=>ADDRESS_VIEWS_IDS),
    "IDENTICON_TYPES": (()=>IDENTICON_TYPES)
});
const IDENTICON_TYPES = [
    'github',
    'jazzicon',
    'gradient_avatar',
    'blockie',
    'nouns'
];
const ADDRESS_VIEWS_IDS = [
    'top_accounts'
];
const ADDRESS_FORMATS = [
    'base16',
    'bech32'
];
const ADDRESS_3RD_PARTY_WIDGET_PAGES = [
    'eoa',
    'contract',
    'token'
];
}}),
"[project]/configs/app/ui/views/address.ts [middleware-edge] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$types$2f$client$2f$contract$2e$ts__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/types/client/contract.ts [middleware-edge] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$types$2f$views$2f$address$2e$ts__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/types/views/address.ts [middleware-edge] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$configs$2f$app$2f$utils$2e$ts__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/configs/app/utils.ts [middleware-edge] (ecmascript)");
;
;
;
const identiconType = (()=>{
    const value = (0, __TURBOPACK__imported__module__$5b$project$5d2f$configs$2f$app$2f$utils$2e$ts__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["getEnvValue"])('NEXT_PUBLIC_VIEWS_ADDRESS_IDENTICON_TYPE');
    return __TURBOPACK__imported__module__$5b$project$5d2f$types$2f$views$2f$address$2e$ts__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["IDENTICON_TYPES"].find((type)=>value === type) || 'jazzicon';
})();
const formats = (()=>{
    const value = ((0, __TURBOPACK__imported__module__$5b$project$5d2f$configs$2f$app$2f$utils$2e$ts__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["parseEnvJson"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$configs$2f$app$2f$utils$2e$ts__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["getEnvValue"])('NEXT_PUBLIC_VIEWS_ADDRESS_FORMAT')) || []).filter((format)=>__TURBOPACK__imported__module__$5b$project$5d2f$types$2f$views$2f$address$2e$ts__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["ADDRESS_FORMATS"].includes(format));
    if (value.length === 0) {
        return [
            'base16'
        ];
    }
    return value;
})();
const bech32Prefix = (()=>{
    const value = (0, __TURBOPACK__imported__module__$5b$project$5d2f$configs$2f$app$2f$utils$2e$ts__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["getEnvValue"])('NEXT_PUBLIC_VIEWS_ADDRESS_BECH_32_PREFIX');
    if (!value || !formats.includes('bech32')) {
        return undefined;
    }
    // these are the limits of the bech32 prefix - https://github.com/bitcoin/bips/blob/master/bip-0173.mediawiki#bech32
    return value.length >= 1 && value.length <= 83 ? value : undefined;
})();
const hiddenViews = (()=>{
    const parsedValue = (0, __TURBOPACK__imported__module__$5b$project$5d2f$configs$2f$app$2f$utils$2e$ts__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["parseEnvJson"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$configs$2f$app$2f$utils$2e$ts__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["getEnvValue"])('NEXT_PUBLIC_VIEWS_ADDRESS_HIDDEN_VIEWS')) || [];
    if (!Array.isArray(parsedValue)) {
        return undefined;
    }
    const result = __TURBOPACK__imported__module__$5b$project$5d2f$types$2f$views$2f$address$2e$ts__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["ADDRESS_VIEWS_IDS"].reduce((result, item)=>{
        result[item] = parsedValue.includes(item);
        return result;
    }, {});
    return result;
})();
const extraVerificationMethods = (()=>{
    const envValue = (0, __TURBOPACK__imported__module__$5b$project$5d2f$configs$2f$app$2f$utils$2e$ts__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["getEnvValue"])('NEXT_PUBLIC_VIEWS_CONTRACT_EXTRA_VERIFICATION_METHODS');
    if (envValue === 'none') {
        return [];
    }
    if (!envValue) {
        return __TURBOPACK__imported__module__$5b$project$5d2f$types$2f$client$2f$contract$2e$ts__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["SMART_CONTRACT_EXTRA_VERIFICATION_METHODS"];
    }
    const parsedMethods = (0, __TURBOPACK__imported__module__$5b$project$5d2f$configs$2f$app$2f$utils$2e$ts__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["parseEnvJson"])(envValue) || [];
    return parsedMethods.filter((method)=>__TURBOPACK__imported__module__$5b$project$5d2f$types$2f$client$2f$contract$2e$ts__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["SMART_CONTRACT_EXTRA_VERIFICATION_METHODS"].includes(method));
})();
const languageFilters = (()=>{
    const envValue = (0, __TURBOPACK__imported__module__$5b$project$5d2f$configs$2f$app$2f$utils$2e$ts__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["parseEnvJson"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$configs$2f$app$2f$utils$2e$ts__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["getEnvValue"])('NEXT_PUBLIC_VIEWS_CONTRACT_LANGUAGE_FILTERS'));
    if (!envValue) {
        // "Scilla" is chain specific language, so we don't want to show it in default scenario
        const DEFAULT_LANGUAGE_FILTERS = __TURBOPACK__imported__module__$5b$project$5d2f$types$2f$client$2f$contract$2e$ts__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["SMART_CONTRACT_LANGUAGE_FILTERS"].filter((filter)=>filter !== 'scilla');
        return DEFAULT_LANGUAGE_FILTERS;
    }
    return envValue.filter((filter)=>__TURBOPACK__imported__module__$5b$project$5d2f$types$2f$client$2f$contract$2e$ts__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["SMART_CONTRACT_LANGUAGE_FILTERS"].includes(filter));
})();
const config = Object.freeze({
    identiconType,
    hashFormat: {
        availableFormats: formats,
        bech32Prefix
    },
    hiddenViews,
    solidityscanEnabled: (0, __TURBOPACK__imported__module__$5b$project$5d2f$configs$2f$app$2f$utils$2e$ts__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["getEnvValue"])('NEXT_PUBLIC_VIEWS_CONTRACT_SOLIDITYSCAN_ENABLED') === 'true',
    extraVerificationMethods,
    languageFilters,
    decodedBytecodeEnabled: (0, __TURBOPACK__imported__module__$5b$project$5d2f$configs$2f$app$2f$utils$2e$ts__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["getEnvValue"])('NEXT_PUBLIC_VIEWS_CONTRACT_DECODED_BYTECODE_ENABLED') === 'true'
});
const __TURBOPACK__default__export__ = config;
}}),
"[project]/types/views/block.ts [middleware-edge] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "BLOCK_FIELDS_IDS": (()=>BLOCK_FIELDS_IDS)
});
const BLOCK_FIELDS_IDS = [
    'base_fee',
    'burnt_fees',
    'total_reward',
    'nonce',
    'miner',
    'L1_status',
    'batch'
];
}}),
"[project]/configs/app/ui/views/block.ts [middleware-edge] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$types$2f$views$2f$block$2e$ts__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/types/views/block.ts [middleware-edge] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$configs$2f$app$2f$utils$2e$ts__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/configs/app/utils.ts [middleware-edge] (ecmascript)");
;
;
const blockHiddenFields = (()=>{
    const parsedValue = (0, __TURBOPACK__imported__module__$5b$project$5d2f$configs$2f$app$2f$utils$2e$ts__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["parseEnvJson"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$configs$2f$app$2f$utils$2e$ts__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["getEnvValue"])('NEXT_PUBLIC_VIEWS_BLOCK_HIDDEN_FIELDS')) || [];
    if (!Array.isArray(parsedValue)) {
        return undefined;
    }
    const result = __TURBOPACK__imported__module__$5b$project$5d2f$types$2f$views$2f$block$2e$ts__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["BLOCK_FIELDS_IDS"].reduce((result, item)=>{
        result[item] = parsedValue.includes(item);
        return result;
    }, {});
    return result;
})();
const config = Object.freeze({
    hiddenFields: blockHiddenFields
});
const __TURBOPACK__default__export__ = config;
}}),
"[project]/configs/app/ui/views/nft.ts [middleware-edge] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$configs$2f$app$2f$utils$2e$ts__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/configs/app/utils.ts [middleware-edge] (ecmascript)");
;
const marketplaces = (()=>{
    const marketplaces = (0, __TURBOPACK__imported__module__$5b$project$5d2f$configs$2f$app$2f$utils$2e$ts__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["parseEnvJson"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$configs$2f$app$2f$utils$2e$ts__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["getEnvValue"])('NEXT_PUBLIC_VIEWS_NFT_MARKETPLACES')) || [];
    const isValid = marketplaces.every((marketplace)=>marketplace.collection_url || marketplace.instance_url);
    if (!isValid) {
        return [];
    }
    return marketplaces;
})();
const config = Object.freeze({
    marketplaces,
    verifiedFetch: {
        isEnabled: (0, __TURBOPACK__imported__module__$5b$project$5d2f$configs$2f$app$2f$utils$2e$ts__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["getEnvValue"])('NEXT_PUBLIC_HELIA_VERIFIED_FETCH_ENABLED') === 'false' ? false : true
    }
});
const __TURBOPACK__default__export__ = config;
}}),
"[project]/configs/app/ui/views/token.ts [middleware-edge] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$configs$2f$app$2f$utils$2e$ts__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/configs/app/utils.ts [middleware-edge] (ecmascript)");
;
const config = Object.freeze({
    hideScamTokensEnabled: (0, __TURBOPACK__imported__module__$5b$project$5d2f$configs$2f$app$2f$utils$2e$ts__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["getEnvValue"])('NEXT_PUBLIC_VIEWS_TOKEN_SCAM_TOGGLE_ENABLED') === 'true'
});
const __TURBOPACK__default__export__ = config;
}}),
"[project]/types/views/tx.ts [middleware-edge] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "TX_ADDITIONAL_FIELDS_IDS": (()=>TX_ADDITIONAL_FIELDS_IDS),
    "TX_FIELDS_IDS": (()=>TX_FIELDS_IDS)
});
const TX_FIELDS_IDS = [
    'value',
    'fee_currency',
    'gas_price',
    'tx_fee',
    'gas_fees',
    'burnt_fees',
    'L1_status',
    'batch'
];
const TX_ADDITIONAL_FIELDS_IDS = [
    'fee_per_gas'
];
}}),
"[project]/configs/app/ui/views/tx.ts [middleware-edge] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$types$2f$views$2f$tx$2e$ts__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/types/views/tx.ts [middleware-edge] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$configs$2f$app$2f$utils$2e$ts__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/configs/app/utils.ts [middleware-edge] (ecmascript)");
;
;
const hiddenFields = (()=>{
    const parsedValue = (0, __TURBOPACK__imported__module__$5b$project$5d2f$configs$2f$app$2f$utils$2e$ts__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["parseEnvJson"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$configs$2f$app$2f$utils$2e$ts__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["getEnvValue"])('NEXT_PUBLIC_VIEWS_TX_HIDDEN_FIELDS')) || [];
    if (!Array.isArray(parsedValue)) {
        return undefined;
    }
    const result = __TURBOPACK__imported__module__$5b$project$5d2f$types$2f$views$2f$tx$2e$ts__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["TX_FIELDS_IDS"].reduce((result, item)=>{
        result[item] = parsedValue.includes(item);
        return result;
    }, {});
    return result;
})();
const additionalFields = (()=>{
    const parsedValue = (0, __TURBOPACK__imported__module__$5b$project$5d2f$configs$2f$app$2f$utils$2e$ts__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["parseEnvJson"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$configs$2f$app$2f$utils$2e$ts__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["getEnvValue"])('NEXT_PUBLIC_VIEWS_TX_ADDITIONAL_FIELDS')) || [];
    if (!Array.isArray(parsedValue)) {
        return undefined;
    }
    const result = __TURBOPACK__imported__module__$5b$project$5d2f$types$2f$views$2f$tx$2e$ts__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["TX_ADDITIONAL_FIELDS_IDS"].reduce((result, item)=>{
        result[item] = parsedValue.includes(item);
        return result;
    }, {});
    return result;
})();
const config = Object.freeze({
    hiddenFields,
    additionalFields
});
const __TURBOPACK__default__export__ = config;
}}),
"[project]/configs/app/ui/views/index.ts [middleware-edge] (ecmascript) <locals>": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({});
;
;
;
;
;
}}),
"[project]/configs/app/ui/views/index.ts [middleware-edge] (ecmascript) <module evaluation>": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({});
var __TURBOPACK__imported__module__$5b$project$5d2f$configs$2f$app$2f$ui$2f$views$2f$address$2e$ts__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/configs/app/ui/views/address.ts [middleware-edge] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$configs$2f$app$2f$ui$2f$views$2f$block$2e$ts__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/configs/app/ui/views/block.ts [middleware-edge] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$configs$2f$app$2f$ui$2f$views$2f$nft$2e$ts__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/configs/app/ui/views/nft.ts [middleware-edge] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$configs$2f$app$2f$ui$2f$views$2f$token$2e$ts__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/configs/app/ui/views/token.ts [middleware-edge] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$configs$2f$app$2f$ui$2f$views$2f$tx$2e$ts__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/configs/app/ui/views/tx.ts [middleware-edge] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$configs$2f$app$2f$ui$2f$views$2f$index$2e$ts__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/configs/app/ui/views/index.ts [middleware-edge] (ecmascript) <locals>");
}}),
"[project]/configs/app/ui/views/index.ts [middleware-edge] (ecmascript) <exports>": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "address": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$configs$2f$app$2f$ui$2f$views$2f$address$2e$ts__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["default"]),
    "block": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$configs$2f$app$2f$ui$2f$views$2f$block$2e$ts__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["default"]),
    "nft": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$configs$2f$app$2f$ui$2f$views$2f$nft$2e$ts__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["default"]),
    "token": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$configs$2f$app$2f$ui$2f$views$2f$token$2e$ts__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["default"]),
    "tx": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$configs$2f$app$2f$ui$2f$views$2f$tx$2e$ts__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["default"])
});
var __TURBOPACK__imported__module__$5b$project$5d2f$configs$2f$app$2f$ui$2f$views$2f$address$2e$ts__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/configs/app/ui/views/address.ts [middleware-edge] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$configs$2f$app$2f$ui$2f$views$2f$block$2e$ts__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/configs/app/ui/views/block.ts [middleware-edge] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$configs$2f$app$2f$ui$2f$views$2f$nft$2e$ts__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/configs/app/ui/views/nft.ts [middleware-edge] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$configs$2f$app$2f$ui$2f$views$2f$token$2e$ts__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/configs/app/ui/views/token.ts [middleware-edge] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$configs$2f$app$2f$ui$2f$views$2f$tx$2e$ts__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/configs/app/ui/views/tx.ts [middleware-edge] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$configs$2f$app$2f$ui$2f$views$2f$index$2e$ts__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/configs/app/ui/views/index.ts [middleware-edge] (ecmascript) <locals>");
}}),
"[project]/configs/app/ui/views/index.ts [middleware-edge] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "address": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$configs$2f$app$2f$ui$2f$views$2f$index$2e$ts__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__$3c$exports$3e$__["address"]),
    "block": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$configs$2f$app$2f$ui$2f$views$2f$index$2e$ts__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__$3c$exports$3e$__["block"]),
    "nft": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$configs$2f$app$2f$ui$2f$views$2f$index$2e$ts__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__$3c$exports$3e$__["nft"]),
    "token": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$configs$2f$app$2f$ui$2f$views$2f$index$2e$ts__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__$3c$exports$3e$__["token"]),
    "tx": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$configs$2f$app$2f$ui$2f$views$2f$index$2e$ts__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__$3c$exports$3e$__["tx"])
});
var __TURBOPACK__imported__module__$5b$project$5d2f$configs$2f$app$2f$ui$2f$views$2f$index$2e$ts__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/configs/app/ui/views/index.ts [middleware-edge] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$configs$2f$app$2f$ui$2f$views$2f$index$2e$ts__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__$3c$exports$3e$__ = __turbopack_context__.i("[project]/configs/app/ui/views/index.ts [middleware-edge] (ecmascript) <exports>");
}}),
"[project]/configs/app/ui.ts [middleware-edge] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$types$2f$homepage$2e$ts__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/types/homepage.ts [middleware-edge] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$settings$2f$colorTheme$2e$ts__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/settings/colorTheme.ts [middleware-edge] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$configs$2f$app$2f$features$2f$index$2e$ts__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/configs/app/features/index.ts [middleware-edge] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$configs$2f$app$2f$features$2f$rollup$2e$ts__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__$3c$export__default__as__rollup$3e$__ = __turbopack_context__.i("[project]/configs/app/features/rollup.ts [middleware-edge] (ecmascript) <export default as rollup>");
var __TURBOPACK__imported__module__$5b$project$5d2f$configs$2f$app$2f$ui$2f$views$2f$index$2e$ts__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/configs/app/ui/views/index.ts [middleware-edge] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$configs$2f$app$2f$ui$2f$views$2f$index$2e$ts__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/configs/app/ui/views/index.ts [middleware-edge] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$configs$2f$app$2f$utils$2e$ts__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/configs/app/utils.ts [middleware-edge] (ecmascript)");
;
;
;
;
;
const homePageStats = (()=>{
    const parsedValue = (0, __TURBOPACK__imported__module__$5b$project$5d2f$configs$2f$app$2f$utils$2e$ts__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["parseEnvJson"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$configs$2f$app$2f$utils$2e$ts__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["getEnvValue"])('NEXT_PUBLIC_HOMEPAGE_STATS'));
    if (!Array.isArray(parsedValue)) {
        const rollupFeature = __TURBOPACK__imported__module__$5b$project$5d2f$configs$2f$app$2f$features$2f$rollup$2e$ts__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__$3c$export__default__as__rollup$3e$__["rollup"];
        if (rollupFeature.isEnabled && [
            'zkEvm',
            'zkSync',
            'arbitrum'
        ].includes(rollupFeature.type)) {
            return [
                'latest_batch',
                'average_block_time',
                'total_txs',
                'wallet_addresses',
                'gas_tracker'
            ];
        }
        return [
            'total_blocks',
            'average_block_time',
            'total_txs',
            'wallet_addresses',
            'gas_tracker',
            'gpu_supply'
        ];
    }
    return parsedValue.filter((item)=>__TURBOPACK__imported__module__$5b$project$5d2f$types$2f$homepage$2e$ts__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["HOME_STATS_WIDGET_IDS"].includes(item));
})();
const highlightedRoutes = (()=>{
    const parsedValue = (0, __TURBOPACK__imported__module__$5b$project$5d2f$configs$2f$app$2f$utils$2e$ts__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["parseEnvJson"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$configs$2f$app$2f$utils$2e$ts__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["getEnvValue"])('NEXT_PUBLIC_NAVIGATION_HIGHLIGHTED_ROUTES'));
    return Array.isArray(parsedValue) ? parsedValue : [];
})();
const defaultColorTheme = (()=>{
    const envValue = (0, __TURBOPACK__imported__module__$5b$project$5d2f$configs$2f$app$2f$utils$2e$ts__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["getEnvValue"])('NEXT_PUBLIC_COLOR_THEME_DEFAULT');
    return __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$settings$2f$colorTheme$2e$ts__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["COLOR_THEMES"].find((theme)=>theme.id === envValue);
})();
const navigationPromoBanner = (()=>{
    const envValue = (0, __TURBOPACK__imported__module__$5b$project$5d2f$configs$2f$app$2f$utils$2e$ts__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["parseEnvJson"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$configs$2f$app$2f$utils$2e$ts__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["getEnvValue"])('NEXT_PUBLIC_NAVIGATION_PROMO_BANNER_CONFIG'));
    return envValue || undefined;
})();
const UI = Object.freeze({
    navigation: {
        logo: {
            'default': (0, __TURBOPACK__imported__module__$5b$project$5d2f$configs$2f$app$2f$utils$2e$ts__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["getExternalAssetFilePath"])('NEXT_PUBLIC_NETWORK_LOGO'),
            dark: (0, __TURBOPACK__imported__module__$5b$project$5d2f$configs$2f$app$2f$utils$2e$ts__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["getExternalAssetFilePath"])('NEXT_PUBLIC_NETWORK_LOGO_DARK')
        },
        icon: {
            'default': (0, __TURBOPACK__imported__module__$5b$project$5d2f$configs$2f$app$2f$utils$2e$ts__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["getExternalAssetFilePath"])('NEXT_PUBLIC_NETWORK_ICON'),
            dark: (0, __TURBOPACK__imported__module__$5b$project$5d2f$configs$2f$app$2f$utils$2e$ts__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["getExternalAssetFilePath"])('NEXT_PUBLIC_NETWORK_ICON_DARK')
        },
        highlightedRoutes,
        otherLinks: (0, __TURBOPACK__imported__module__$5b$project$5d2f$configs$2f$app$2f$utils$2e$ts__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["parseEnvJson"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$configs$2f$app$2f$utils$2e$ts__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["getEnvValue"])('NEXT_PUBLIC_OTHER_LINKS')) || [],
        layout: (0, __TURBOPACK__imported__module__$5b$project$5d2f$configs$2f$app$2f$utils$2e$ts__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["getEnvValue"])('NEXT_PUBLIC_NAVIGATION_LAYOUT') || 'vertical',
        promoBanner: navigationPromoBanner
    },
    featuredNetworks: {
        items: (0, __TURBOPACK__imported__module__$5b$project$5d2f$configs$2f$app$2f$utils$2e$ts__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["getExternalAssetFilePath"])('NEXT_PUBLIC_FEATURED_NETWORKS'),
        allLink: (0, __TURBOPACK__imported__module__$5b$project$5d2f$configs$2f$app$2f$utils$2e$ts__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["getEnvValue"])('NEXT_PUBLIC_FEATURED_NETWORKS_ALL_LINK')
    },
    footer: {
        links: (0, __TURBOPACK__imported__module__$5b$project$5d2f$configs$2f$app$2f$utils$2e$ts__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["getExternalAssetFilePath"])('NEXT_PUBLIC_FOOTER_LINKS'),
        frontendVersion: (0, __TURBOPACK__imported__module__$5b$project$5d2f$configs$2f$app$2f$utils$2e$ts__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["getEnvValue"])('NEXT_PUBLIC_GIT_TAG'),
        frontendCommit: (0, __TURBOPACK__imported__module__$5b$project$5d2f$configs$2f$app$2f$utils$2e$ts__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["getEnvValue"])('NEXT_PUBLIC_GIT_COMMIT_SHA')
    },
    homepage: {
        charts: (0, __TURBOPACK__imported__module__$5b$project$5d2f$configs$2f$app$2f$utils$2e$ts__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["parseEnvJson"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$configs$2f$app$2f$utils$2e$ts__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["getEnvValue"])('NEXT_PUBLIC_HOMEPAGE_CHARTS')) || [],
        stats: homePageStats,
        heroBanner: (0, __TURBOPACK__imported__module__$5b$project$5d2f$configs$2f$app$2f$utils$2e$ts__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["parseEnvJson"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$configs$2f$app$2f$utils$2e$ts__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["getEnvValue"])('NEXT_PUBLIC_HOMEPAGE_HERO_BANNER_CONFIG')),
        // !!! DEPRECATED !!!
        plate: {
            background: (0, __TURBOPACK__imported__module__$5b$project$5d2f$configs$2f$app$2f$utils$2e$ts__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["getEnvValue"])('NEXT_PUBLIC_HOMEPAGE_PLATE_BACKGROUND'),
            textColor: (0, __TURBOPACK__imported__module__$5b$project$5d2f$configs$2f$app$2f$utils$2e$ts__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["getEnvValue"])('NEXT_PUBLIC_HOMEPAGE_PLATE_TEXT_COLOR')
        }
    },
    views: __TURBOPACK__imported__module__$5b$project$5d2f$configs$2f$app$2f$ui$2f$views$2f$index$2e$ts__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__,
    indexingAlert: {
        blocks: {
            isHidden: (0, __TURBOPACK__imported__module__$5b$project$5d2f$configs$2f$app$2f$utils$2e$ts__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["getEnvValue"])('NEXT_PUBLIC_HIDE_INDEXING_ALERT_BLOCKS') === 'true' ? true : false
        },
        intTxs: {
            isHidden: (0, __TURBOPACK__imported__module__$5b$project$5d2f$configs$2f$app$2f$utils$2e$ts__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["getEnvValue"])('NEXT_PUBLIC_HIDE_INDEXING_ALERT_INT_TXS') === 'true' ? true : false
        }
    },
    maintenanceAlert: {
        message: (0, __TURBOPACK__imported__module__$5b$project$5d2f$configs$2f$app$2f$utils$2e$ts__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["getEnvValue"])('NEXT_PUBLIC_MAINTENANCE_ALERT_MESSAGE')
    },
    explorers: {
        items: (0, __TURBOPACK__imported__module__$5b$project$5d2f$configs$2f$app$2f$utils$2e$ts__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["parseEnvJson"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$configs$2f$app$2f$utils$2e$ts__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["getEnvValue"])('NEXT_PUBLIC_NETWORK_EXPLORERS')) || []
    },
    ides: {
        items: (0, __TURBOPACK__imported__module__$5b$project$5d2f$configs$2f$app$2f$utils$2e$ts__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["parseEnvJson"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$configs$2f$app$2f$utils$2e$ts__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["getEnvValue"])('NEXT_PUBLIC_CONTRACT_CODE_IDES')) || []
    },
    hasContractAuditReports: (0, __TURBOPACK__imported__module__$5b$project$5d2f$configs$2f$app$2f$utils$2e$ts__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["getEnvValue"])('NEXT_PUBLIC_HAS_CONTRACT_AUDIT_REPORTS') === 'true' ? true : false,
    colorTheme: {
        'default': defaultColorTheme,
        overrides: (0, __TURBOPACK__imported__module__$5b$project$5d2f$configs$2f$app$2f$utils$2e$ts__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["parseEnvJson"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$configs$2f$app$2f$utils$2e$ts__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["getEnvValue"])('NEXT_PUBLIC_COLOR_THEME_OVERRIDES')) || {}
    },
    fonts: {
        heading: (0, __TURBOPACK__imported__module__$5b$project$5d2f$configs$2f$app$2f$utils$2e$ts__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["parseEnvJson"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$configs$2f$app$2f$utils$2e$ts__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["getEnvValue"])('NEXT_PUBLIC_FONT_FAMILY_HEADING')),
        body: (0, __TURBOPACK__imported__module__$5b$project$5d2f$configs$2f$app$2f$utils$2e$ts__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["parseEnvJson"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$configs$2f$app$2f$utils$2e$ts__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["getEnvValue"])('NEXT_PUBLIC_FONT_FAMILY_BODY'))
    },
    maxContentWidth: (0, __TURBOPACK__imported__module__$5b$project$5d2f$configs$2f$app$2f$utils$2e$ts__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["getEnvValue"])('NEXT_PUBLIC_MAX_CONTENT_WIDTH_ENABLED') === 'false' ? false : true
});
const __TURBOPACK__default__export__ = UI;
}}),
"[project]/configs/app/index.ts [middleware-edge] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$configs$2f$app$2f$apis$2e$ts__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/configs/app/apis.ts [middleware-edge] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$configs$2f$app$2f$app$2e$ts__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/configs/app/app.ts [middleware-edge] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$configs$2f$app$2f$chain$2e$ts__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/configs/app/chain.ts [middleware-edge] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$configs$2f$app$2f$features$2f$index$2e$ts__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/configs/app/features/index.ts [middleware-edge] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$configs$2f$app$2f$features$2f$index$2e$ts__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/configs/app/features/index.ts [middleware-edge] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$configs$2f$app$2f$meta$2e$ts__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/configs/app/meta.ts [middleware-edge] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$configs$2f$app$2f$services$2e$ts__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/configs/app/services.ts [middleware-edge] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$configs$2f$app$2f$ui$2e$ts__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/configs/app/ui.ts [middleware-edge] (ecmascript)");
;
;
;
;
;
;
;
const config = Object.freeze({
    app: __TURBOPACK__imported__module__$5b$project$5d2f$configs$2f$app$2f$app$2e$ts__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["default"],
    chain: __TURBOPACK__imported__module__$5b$project$5d2f$configs$2f$app$2f$chain$2e$ts__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["default"],
    apis: __TURBOPACK__imported__module__$5b$project$5d2f$configs$2f$app$2f$apis$2e$ts__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["default"],
    UI: __TURBOPACK__imported__module__$5b$project$5d2f$configs$2f$app$2f$ui$2e$ts__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["default"],
    features: __TURBOPACK__imported__module__$5b$project$5d2f$configs$2f$app$2f$features$2f$index$2e$ts__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__,
    services: __TURBOPACK__imported__module__$5b$project$5d2f$configs$2f$app$2f$services$2e$ts__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["default"],
    meta: __TURBOPACK__imported__module__$5b$project$5d2f$configs$2f$app$2f$meta$2e$ts__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["default"]
});
const __TURBOPACK__default__export__ = config;
}}),
"[project]/configs/multichain/config.edge.ts [middleware-edge] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
/* eslint-disable no-restricted-properties */ __turbopack_context__.s({
    "getValue": (()=>getValue),
    "load": (()=>load)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$configs$2f$app$2f$index$2e$ts__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/configs/app/index.ts [middleware-edge] (ecmascript)");
;
function isRunningInDocker() {
    return process.env.HOSTNAME !== undefined;
}
let value = undefined;
async function fetchConfig() {
    if ("TURBOPACK compile-time falsy", 0) {
        "TURBOPACK unreachable";
    }
    // In edge runtime, we need to use absolute URLs
    // When in Docker, use the internal hostname
    const baseUrl = isRunningInDocker() ? `http://${process.env.HOSTNAME}:${__TURBOPACK__imported__module__$5b$project$5d2f$configs$2f$app$2f$index$2e$ts__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["default"].app.port || 3000}` : __TURBOPACK__imported__module__$5b$project$5d2f$configs$2f$app$2f$index$2e$ts__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["default"].app.baseUrl;
    const url = baseUrl + '/assets/multichain/config.json';
    const response = await fetch(url);
    const json = await response.json();
    value = json;
    return value;
}
async function load() {
    if (!value) {
        return new Promise((resolve, reject)=>{
            fetchConfig().then((value)=>{
                resolve(value);
            }).catch((error)=>{
                reject(error);
            });
        });
    }
    return Promise.resolve(value);
}
function getValue() {
    return value;
}
}}),
"[project]/ui/shared/ad/adbutlerScript.ts [middleware-edge] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
/* eslint-disable max-len */ __turbopack_context__.s({
    "ADBUTLER_ACCOUNT": (()=>ADBUTLER_ACCOUNT),
    "connectAdbutler": (()=>connectAdbutler),
    "placeAd": (()=>placeAd)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$configs$2f$app$2f$index$2e$ts__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/configs/app/index.ts [middleware-edge] (ecmascript)");
;
const ADBUTLER_ACCOUNT = 182226;
const connectAdbutler = `if (!window.AdButler){(function(){var s = document.createElement("script"); s.async = true; s.type = "text/javascript";s.src = 'https://servedbyadbutler.com/app.js';var n = document.getElementsByTagName("script")[0]; n.parentNode.insertBefore(s, n);}());}`;
const placeAd = (platform)=>{
    const feature = __TURBOPACK__imported__module__$5b$project$5d2f$configs$2f$app$2f$index$2e$ts__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["default"].features.adsBanner;
    if (!('adButler' in feature)) {
        return;
    }
    if (platform === 'mobile') {
        return `
      var AdButler = AdButler || {}; AdButler.ads = AdButler.ads || [];
      var abkw = window.abkw || '';
      var plc${feature.adButler.config.mobile.id} = window.plc${feature.adButler.config.mobile.id} || 0;
      document.getElementById('ad-banner').innerHTML = '<'+'div id="placement_${feature.adButler.config.mobile.id}_'+plc${feature.adButler.config.mobile.id}+'"></'+'div>';
      AdButler.ads.push({handler: function(opt){ AdButler.register(${ADBUTLER_ACCOUNT}, ${feature.adButler.config.mobile.id}, [${feature.adButler.config.mobile.width},${feature.adButler.config.mobile.height}], 'placement_${feature.adButler.config.mobile.id}_'+opt.place, opt); }, opt: { place: plc${feature.adButler.config.mobile.id}++, keywords: abkw, domain: 'servedbyadbutler.com', click:'CLICK_MACRO_PLACEHOLDER' }});
    `;
    }
    return `
    var AdButler = AdButler || {}; AdButler.ads = AdButler.ads || [];
    var abkw = window.abkw || '';
    const isMobile = window.matchMedia("only screen and (max-width: 1000px)").matches;
    if (isMobile) {
        var plc${feature.adButler.config.mobile.id} = window.plc${feature.adButler.config.mobile.id} || 0;
        document.getElementById('ad-banner').innerHTML = '<'+'div id="placement_${feature.adButler.config.mobile.id}_'+plc${feature.adButler.config.mobile.id}+'"></'+'div>';
        AdButler.ads.push({handler: function(opt){ AdButler.register(${ADBUTLER_ACCOUNT}, ${feature.adButler.config.mobile.id}, [${feature.adButler.config.mobile.width},${feature.adButler.config.mobile.height}], 'placement_${feature.adButler.config.mobile.id}_'+opt.place, opt); }, opt: { place: plc${feature.adButler.config.mobile.id}++, keywords: abkw, domain: 'servedbyadbutler.com', click:'CLICK_MACRO_PLACEHOLDER' }});
    } else {
        var plc${feature.adButler.config.desktop.id} = window.plc${feature.adButler.config.desktop.id} || 0;
        document.getElementById('ad-banner').innerHTML = '<'+'div id="placement_${feature.adButler.config.desktop.id}_'+plc${feature.adButler.config.desktop.id}+'"></'+'div>';
        AdButler.ads.push({handler: function(opt){ AdButler.register(${ADBUTLER_ACCOUNT}, ${feature.adButler.config.desktop.id}, [${feature.adButler.config.desktop.width},${feature.adButler.config.desktop.height}], 'placement_${feature.adButler.config.desktop.id}_'+opt.place, opt); }, opt: { place: plc${feature.adButler.config.desktop.id}++, keywords: abkw, domain: 'servedbyadbutler.com', click:'CLICK_MACRO_PLACEHOLDER' }});
    }
  `;
};
}}),
"[project]/ui/shared/ad/hypeBannerScript.ts [middleware-edge] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "hypeInit": (()=>hypeInit)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$configs$2f$app$2f$index$2e$ts__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/configs/app/index.ts [middleware-edge] (ecmascript)");
;
const PRODUCTION_PROPERTY_SLUG = '127fddd522';
const HYPE_API_URL = 'https://api.hypelab.com';
const hypeInit = (()=>{
    const feature = __TURBOPACK__imported__module__$5b$project$5d2f$configs$2f$app$2f$index$2e$ts__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["default"].features.adsBanner;
    if (!feature.isEnabled || feature.provider !== 'hype') {
        return;
    }
    return `!(function (h, y, p, e, l, a, b) {
    ((l = document.createElement(h)).async = !0),
      (l.src = y),
      (l.onload = function () {
        (a = { URL: p, propertySlug: e, environment: 'production' }), HypeLab.initialize(a);
      }),
      (b = document.getElementsByTagName(h)[0]).parentNode.insertBefore(l, b);
  })('script', 'https://api.hypelab.com/v1/scripts/hp-sdk.js?v=0', '${HYPE_API_URL}', '${PRODUCTION_PROPERTY_SLUG}');`;
})();
}}),
"[project]/nextjs/csp/policies/ad.ts [middleware-edge] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "ad": (()=>ad)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$crypto$2d$js$2f$enc$2d$base64$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/crypto-js/enc-base64.js [middleware-edge] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$crypto$2d$js$2f$sha256$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/crypto-js/sha256.js [middleware-edge] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$ui$2f$shared$2f$ad$2f$adbutlerScript$2e$ts__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/ui/shared/ad/adbutlerScript.ts [middleware-edge] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$ui$2f$shared$2f$ad$2f$hypeBannerScript$2e$ts__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/ui/shared/ad/hypeBannerScript.ts [middleware-edge] (ecmascript)");
;
;
;
;
function ad() {
    return {
        'connect-src': [
            // coinzilla
            'coinzilla.com',
            '*.coinzilla.com',
            'https://request-global.czilladx.com',
            // adbutler
            'servedbyadbutler.com',
            // slise
            '*.slise.xyz',
            // hype
            'api.hypelab.com',
            '*.ixncdn.com',
            '*.cloudfront.net'
        ],
        'frame-src': [
            // coinzilla
            'https://request-global.czilladx.com'
        ],
        'script-src': [
            // coinzilla
            'coinzillatag.com',
            // adbutler
            'servedbyadbutler.com',
            `'sha256-${__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$crypto$2d$js$2f$enc$2d$base64$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["default"].stringify((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$crypto$2d$js$2f$sha256$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["default"])(__TURBOPACK__imported__module__$5b$project$5d2f$ui$2f$shared$2f$ad$2f$adbutlerScript$2e$ts__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["connectAdbutler"]))}'`,
            `'sha256-${__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$crypto$2d$js$2f$enc$2d$base64$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["default"].stringify((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$crypto$2d$js$2f$sha256$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["default"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$ui$2f$shared$2f$ad$2f$adbutlerScript$2e$ts__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["placeAd"])(undefined) ?? ''))}'`,
            `'sha256-${__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$crypto$2d$js$2f$enc$2d$base64$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["default"].stringify((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$crypto$2d$js$2f$sha256$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["default"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$ui$2f$shared$2f$ad$2f$adbutlerScript$2e$ts__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["placeAd"])('mobile') ?? ''))}'`,
            // slise
            '*.slise.xyz',
            //hype
            `'sha256-${__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$crypto$2d$js$2f$enc$2d$base64$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["default"].stringify((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$crypto$2d$js$2f$sha256$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["default"])(__TURBOPACK__imported__module__$5b$project$5d2f$ui$2f$shared$2f$ad$2f$hypeBannerScript$2e$ts__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["hypeInit"] ?? ''))}'`,
            'https://api.hypelab.com',
            'd1q98dzwj6s2rb.cloudfront.net'
        ],
        'img-src': [
            // coinzilla
            'cdn.coinzilla.io',
            // adbutler
            'servedbyadbutler.com'
        ],
        'font-src': [
            // coinzilla
            'https://request-global.czilladx.com'
        ]
    };
}
}}),
"[project]/nextjs/csp/utils.ts [middleware-edge] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "KEY_WORDS": (()=>KEY_WORDS),
    "makePolicyString": (()=>makePolicyString),
    "mergeDescriptors": (()=>mergeDescriptors)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$es$2d$toolkit$2f$dist$2f$array$2f$uniq$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/es-toolkit/dist/array/uniq.mjs [middleware-edge] (ecmascript)");
;
const KEY_WORDS = {
    BLOB: 'blob:',
    DATA: 'data:',
    NONE: '\'none\'',
    REPORT_SAMPLE: `'report-sample'`,
    SELF: '\'self\'',
    STRICT_DYNAMIC: `'strict-dynamic'`,
    UNSAFE_INLINE: '\'unsafe-inline\'',
    UNSAFE_EVAL: '\'unsafe-eval\''
};
function mergeDescriptors(...descriptors) {
    return descriptors.reduce((result, item)=>{
        for(const _key in item){
            const key = _key;
            const value = item[key];
            if (!value) {
                continue;
            }
            if (result[key]) {
                result[key]?.push(...value);
            } else {
                result[key] = [
                    ...value
                ];
            }
        }
        return result;
    }, {});
}
function makePolicyString(policyDescriptor) {
    return Object.entries(policyDescriptor).map(([key, value])=>{
        if (!value || value.length === 0) {
            return;
        }
        const uniqueValues = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$es$2d$toolkit$2f$dist$2f$array$2f$uniq$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["uniq"])(value);
        return [
            key,
            uniqueValues.join(' ')
        ].join(' ');
    }).filter(Boolean).join(';');
}
}}),
"[project]/nextjs/csp/policies/app.ts [middleware-edge] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "app": (()=>app)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$configs$2f$app$2f$index$2e$ts__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/configs/app/index.ts [middleware-edge] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$nextjs$2f$csp$2f$utils$2e$ts__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/nextjs/csp/utils.ts [middleware-edge] (ecmascript)");
;
;
const MAIN_DOMAINS = [
    `*.${__TURBOPACK__imported__module__$5b$project$5d2f$configs$2f$app$2f$index$2e$ts__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["default"].app.host}`,
    __TURBOPACK__imported__module__$5b$project$5d2f$configs$2f$app$2f$index$2e$ts__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["default"].app.host
].filter(Boolean);
const externalFontsDomains = (()=>{
    try {
        return [
            __TURBOPACK__imported__module__$5b$project$5d2f$configs$2f$app$2f$index$2e$ts__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["default"].UI.fonts.heading?.url,
            __TURBOPACK__imported__module__$5b$project$5d2f$configs$2f$app$2f$index$2e$ts__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["default"].UI.fonts.body?.url
        ].filter(Boolean).map((urlString)=>new URL(urlString)).map((url)=>url.hostname);
    } catch (error) {}
})();
function app() {
    return {
        'default-src': [
            // KEY_WORDS.NONE,
            // https://bugzilla.mozilla.org/show_bug.cgi?id=1242902
            // need 'self' here to avoid an error with prefetch nextjs chunks in firefox
            __TURBOPACK__imported__module__$5b$project$5d2f$nextjs$2f$csp$2f$utils$2e$ts__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["KEY_WORDS"].SELF
        ],
        'connect-src': [
            __TURBOPACK__imported__module__$5b$project$5d2f$nextjs$2f$csp$2f$utils$2e$ts__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["KEY_WORDS"].SELF,
            ...MAIN_DOMAINS,
            // webpack hmr in safari doesn't recognize localhost as 'self' for some reason
            __TURBOPACK__imported__module__$5b$project$5d2f$configs$2f$app$2f$index$2e$ts__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["default"].app.isDev ? 'ws://localhost:3000/_next/webpack-hmr' : '',
            // APIs
            ...Object.values(__TURBOPACK__imported__module__$5b$project$5d2f$configs$2f$app$2f$index$2e$ts__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["default"].apis).filter(Boolean).map((api)=>api.endpoint),
            ...Object.values(__TURBOPACK__imported__module__$5b$project$5d2f$configs$2f$app$2f$index$2e$ts__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["default"].apis).filter(Boolean).map((api)=>api.socketEndpoint),
            // chain RPC server
            ...__TURBOPACK__imported__module__$5b$project$5d2f$configs$2f$app$2f$index$2e$ts__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["default"].chain.rpcUrls,
            'https://infragrid.v.network',
            // github (spec for api-docs page)
            'raw.githubusercontent.com',
            // github api (used for Stylus contract verification)
            'api.github.com'
        ].filter(Boolean),
        'script-src': [
            __TURBOPACK__imported__module__$5b$project$5d2f$nextjs$2f$csp$2f$utils$2e$ts__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["KEY_WORDS"].SELF,
            ...MAIN_DOMAINS,
            // next.js generates and rebuilds source maps in dev using eval()
            // https://github.com/vercel/next.js/issues/14221#issuecomment-657258278
            __TURBOPACK__imported__module__$5b$project$5d2f$configs$2f$app$2f$index$2e$ts__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["default"].app.isDev ? __TURBOPACK__imported__module__$5b$project$5d2f$nextjs$2f$csp$2f$utils$2e$ts__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["KEY_WORDS"].UNSAFE_EVAL : '',
            // hash of ColorModeScript: system + dark
            '\'sha256-yYJq8IP5/WhJj6zxyTmujEqBFs/MufRufp2QKJFU76M=\'',
            // CapybaraRunner
            '\'sha256-5+YTmTcBwCYdJ8Jetbr6kyjGp0Ry/H7ptpoun6CrSwQ=\''
        ],
        'style-src': [
            __TURBOPACK__imported__module__$5b$project$5d2f$nextjs$2f$csp$2f$utils$2e$ts__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["KEY_WORDS"].SELF,
            ...MAIN_DOMAINS,
            // yes, it is unsafe as it stands, but
            // - we cannot use hashes because all styles are generated dynamically
            // - we cannot use nonces since we are not following along SSR path
            // - and still there is very small damage that can be cause by CSS-based XSS-attacks
            // so we hope we are fine here till the first major incident :)
            __TURBOPACK__imported__module__$5b$project$5d2f$nextjs$2f$csp$2f$utils$2e$ts__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["KEY_WORDS"].UNSAFE_INLINE
        ],
        'img-src': [
            __TURBOPACK__imported__module__$5b$project$5d2f$nextjs$2f$csp$2f$utils$2e$ts__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["KEY_WORDS"].SELF,
            __TURBOPACK__imported__module__$5b$project$5d2f$nextjs$2f$csp$2f$utils$2e$ts__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["KEY_WORDS"].DATA,
            ...MAIN_DOMAINS,
            // we agreed that using wildcard for images is mostly safe
            // why do we have to use it? the main reason is that for NFT and inventory pages we get resources urls from API only on the client
            // so they cannot be added to the policy on the server
            // there could be 3 possible workarounds
            //    a/ use server side rendering approach, that we don't want to do
            //    b/ wrap every image/video in iframe with a source to static page for which we enforce certain img-src rule;
            //        the downsides is page performance slowdown and code complexity (have to manage click on elements, color mode for
            //        embedded page, etc)
            //    c/ use wildcard for img-src directive; this can lead to some security vulnerabilities but we were unable to find evidence
            //        that loose img-src directive alone could cause serious flaws on the site as long as we keep script-src and connect-src strict
            //
            // feel free to propose alternative solution and fix this
            '*'
        ],
        'media-src': [
            __TURBOPACK__imported__module__$5b$project$5d2f$nextjs$2f$csp$2f$utils$2e$ts__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["KEY_WORDS"].BLOB,
            '*'
        ],
        'font-src': [
            __TURBOPACK__imported__module__$5b$project$5d2f$nextjs$2f$csp$2f$utils$2e$ts__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["KEY_WORDS"].DATA,
            __TURBOPACK__imported__module__$5b$project$5d2f$nextjs$2f$csp$2f$utils$2e$ts__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["KEY_WORDS"].SELF,
            ...MAIN_DOMAINS,
            ...externalFontsDomains || []
        ],
        'object-src': [
            __TURBOPACK__imported__module__$5b$project$5d2f$nextjs$2f$csp$2f$utils$2e$ts__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["KEY_WORDS"].NONE
        ],
        'base-uri': [
            __TURBOPACK__imported__module__$5b$project$5d2f$nextjs$2f$csp$2f$utils$2e$ts__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["KEY_WORDS"].NONE
        ],
        'frame-src': [
            // could be a marketplace app or NFT media (html-page)
            '*'
        ],
        'frame-ancestors': [
            __TURBOPACK__imported__module__$5b$project$5d2f$nextjs$2f$csp$2f$utils$2e$ts__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["KEY_WORDS"].SELF,
            // allow remix.ethereum.org to embed our contract page in iframe
            'remix.ethereum.org'
        ]
    };
}
}}),
"[project]/nextjs/csp/policies/cloudFlare.ts [middleware-edge] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "cloudFlare": (()=>cloudFlare)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$nextjs$2f$csp$2f$utils$2e$ts__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/nextjs/csp/utils.ts [middleware-edge] (ecmascript)");
;
function cloudFlare() {
    return {
        'script-src': [
            'static.cloudflareinsights.com'
        ],
        'style-src': [
            __TURBOPACK__imported__module__$5b$project$5d2f$nextjs$2f$csp$2f$utils$2e$ts__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["KEY_WORDS"].DATA
        ]
    };
}
}}),
"[project]/nextjs/csp/policies/flashblocks.ts [middleware-edge] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "flashblocks": (()=>flashblocks)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$configs$2f$app$2f$index$2e$ts__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/configs/app/index.ts [middleware-edge] (ecmascript)");
;
const flashblocksFeature = __TURBOPACK__imported__module__$5b$project$5d2f$configs$2f$app$2f$index$2e$ts__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["default"].features.flashblocks;
function flashblocks() {
    if (!flashblocksFeature.isEnabled) {
        return {};
    }
    return {
        'connect-src': [
            flashblocksFeature.socketUrl
        ]
    };
}
}}),
"[project]/nextjs/csp/policies/gasHawk.ts [middleware-edge] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "gasHawk": (()=>gasHawk)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$configs$2f$app$2f$index$2e$ts__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/configs/app/index.ts [middleware-edge] (ecmascript)");
;
const feature = __TURBOPACK__imported__module__$5b$project$5d2f$configs$2f$app$2f$index$2e$ts__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["default"].features.saveOnGas;
function gasHawk() {
    if (!feature.isEnabled) {
        return {};
    }
    const apiOrigin = (()=>{
        try {
            const url = new URL(feature.apiUrlTemplate);
            return url.origin;
        } catch (error) {
            return '';
        }
    })();
    if (!apiOrigin) {
        return {};
    }
    return {
        'connect-src': [
            apiOrigin
        ]
    };
}
}}),
"[project]/nextjs/csp/policies/googleAnalytics.ts [middleware-edge] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "googleAnalytics": (()=>googleAnalytics)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$configs$2f$app$2f$index$2e$ts__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/configs/app/index.ts [middleware-edge] (ecmascript)");
;
function googleAnalytics() {
    if (!__TURBOPACK__imported__module__$5b$project$5d2f$configs$2f$app$2f$index$2e$ts__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["default"].features.googleAnalytics.isEnabled) {
        return {};
    }
    return {
        'connect-src': [
            '*.google-analytics.com',
            '*.analytics.google.com',
            'https://www.googletagmanager.com',
            'https://stats.g.doubleclick.net'
        ],
        'script-src': [
            // inline script hash, see ui/shared/GoogleAnalytics.tsx
            '\'sha256-WXRwCtfSfMoCPzPUIOUAosSaADdGgct0/Lhmnbm7MCA=\'',
            'https://www.googletagmanager.com',
            '*.google-analytics.com',
            '*.analytics.google.com'
        ],
        'img-src': [
            '*.google-analytics.com',
            '*.analytics.google.com'
        ]
    };
}
}}),
"[project]/nextjs/csp/policies/googleFonts.ts [middleware-edge] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "googleFonts": (()=>googleFonts)
});
function googleFonts() {
    // we use Inter and Poppins in the app
    return {
        'connect-src': [
            'fonts.gstatic.com'
        ],
        'style-src': [
            'fonts.googleapis.com'
        ],
        'font-src': [
            'fonts.gstatic.com',
            'fonts.googleapis.com'
        ]
    };
}
}}),
"[project]/nextjs/csp/policies/googleReCaptcha.ts [middleware-edge] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "googleReCaptcha": (()=>googleReCaptcha)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$configs$2f$app$2f$index$2e$ts__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/configs/app/index.ts [middleware-edge] (ecmascript)");
;
function googleReCaptcha() {
    if (!__TURBOPACK__imported__module__$5b$project$5d2f$configs$2f$app$2f$index$2e$ts__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["default"].services.reCaptchaV2.siteKey) {
        return {};
    }
    return {
        'connect-src': [
            'https://www.google.com/recaptcha/api2/clr'
        ],
        'script-src': [
            'https://www.google.com/recaptcha/api.js',
            'https://www.gstatic.com',
            'https://translate.google.com',
            '\'sha256-FDyPg8CqqIpPAfGVKx1YeKduyLs0ghNYWII21wL+7HM=\''
        ],
        'style-src': [
            'https://www.gstatic.com'
        ],
        'img-src': [
            'https://translate.google.com',
            'https://www.gstatic.com'
        ],
        'frame-src': [
            'https://www.google.com/recaptcha/api2/anchor',
            'https://www.google.com/recaptcha/api2/bframe'
        ]
    };
}
}}),
"[project]/nextjs/csp/policies/growthBook.ts [middleware-edge] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "growthBook": (()=>growthBook)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$configs$2f$app$2f$index$2e$ts__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/configs/app/index.ts [middleware-edge] (ecmascript)");
;
function growthBook() {
    if (!__TURBOPACK__imported__module__$5b$project$5d2f$configs$2f$app$2f$index$2e$ts__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["default"].features.growthBook.isEnabled) {
        return {};
    }
    return {
        'connect-src': [
            'cdn.growthbook.io'
        ]
    };
}
}}),
"[project]/nextjs/csp/policies/helia.ts [middleware-edge] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "helia": (()=>helia)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$configs$2f$app$2f$index$2e$ts__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/configs/app/index.ts [middleware-edge] (ecmascript)");
;
function helia() {
    if (!__TURBOPACK__imported__module__$5b$project$5d2f$configs$2f$app$2f$index$2e$ts__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["default"].UI.views.nft.verifiedFetch.isEnabled) {
        return {};
    }
    return {
        'connect-src': [
            'https://delegated-ipfs.dev',
            'https://trustless-gateway.link'
        ]
    };
}
}}),
"[project]/nextjs/csp/policies/marketplace.ts [middleware-edge] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "marketplace": (()=>marketplace)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$configs$2f$app$2f$index$2e$ts__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/configs/app/index.ts [middleware-edge] (ecmascript)");
;
const feature = __TURBOPACK__imported__module__$5b$project$5d2f$configs$2f$app$2f$index$2e$ts__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["default"].features.marketplace;
function marketplace() {
    if (!feature.isEnabled) {
        return {};
    }
    return {
        'connect-src': [
            'api' in feature ? feature.api.endpoint : ''
        ],
        'frame-src': [
            '*'
        ]
    };
}
}}),
"[project]/nextjs/csp/policies/mixpanel.ts [middleware-edge] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "mixpanel": (()=>mixpanel)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$configs$2f$app$2f$index$2e$ts__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/configs/app/index.ts [middleware-edge] (ecmascript)");
;
function mixpanel() {
    if (!__TURBOPACK__imported__module__$5b$project$5d2f$configs$2f$app$2f$index$2e$ts__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["default"].features.mixpanel.isEnabled) {
        return {};
    }
    return {
        'connect-src': [
            '*.mixpanel.com'
        ]
    };
}
}}),
"[project]/nextjs/csp/policies/monaco.ts [middleware-edge] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "monaco": (()=>monaco)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$nextjs$2f$csp$2f$utils$2e$ts__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/nextjs/csp/utils.ts [middleware-edge] (ecmascript)");
;
function monaco() {
    return {
        'script-src': [
            __TURBOPACK__imported__module__$5b$project$5d2f$nextjs$2f$csp$2f$utils$2e$ts__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["KEY_WORDS"].BLOB,
            'https://cdn.jsdelivr.net/npm/monaco-editor@0.52.2/min/vs/loader.js',
            'https://cdn.jsdelivr.net/npm/monaco-editor@0.52.2/min/vs/editor/editor.main.js',
            'https://cdn.jsdelivr.net/npm/monaco-editor@0.52.2/min/vs/editor/editor.main.nls.js',
            'https://cdn.jsdelivr.net/npm/monaco-editor@0.52.2/min/vs/basic-languages/solidity/solidity.js',
            'https://cdn.jsdelivr.net/npm/monaco-editor@0.52.2/min/vs/basic-languages/elixir/elixir.js',
            'https://cdn.jsdelivr.net/npm/monaco-editor@0.52.2/min/vs/basic-languages/javascript/javascript.js',
            'https://cdn.jsdelivr.net/npm/monaco-editor@0.52.2/min/vs/basic-languages/typescript/typescript.js',
            'https://cdn.jsdelivr.net/npm/monaco-editor@0.52.2/min/vs/basic-languages/rust/rust.js',
            'https://cdn.jsdelivr.net/npm/monaco-editor@0.52.2/min/vs/language/json/jsonMode.js',
            'https://cdn.jsdelivr.net/npm/monaco-editor@0.52.2/min/vs/language/json/jsonWorker.js',
            'https://cdn.jsdelivr.net/npm/monaco-editor@0.52.2/min/vs/language/typescript/tsMode.js',
            'https://cdn.jsdelivr.net/npm/monaco-editor@0.52.2/min/vs/language/typescript/tsWorker.js',
            'https://cdn.jsdelivr.net/npm/monaco-editor@0.52.2/min/vs/base/worker/workerMain.js'
        ],
        'style-src': [
            'https://cdn.jsdelivr.net/npm/monaco-editor@0.52.2/min/vs/editor/editor.main.css'
        ],
        'font-src': [
            'https://cdn.jsdelivr.net/npm/monaco-editor@0.52.2/min/vs/base/browser/ui/codicons/codicon/codicon.ttf'
        ]
    };
}
}}),
"[project]/nextjs/csp/policies/multichain.ts [middleware-edge] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "multichain": (()=>multichain)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$configs$2f$multichain$2f$config$2e$edge$2e$ts__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/configs/multichain/config.edge.ts [middleware-edge] (ecmascript)");
;
function multichain() {
    const value = (0, __TURBOPACK__imported__module__$5b$project$5d2f$configs$2f$multichain$2f$config$2e$edge$2e$ts__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["getValue"])();
    if (!value) {
        return {};
    }
    const apiEndpoints = value.chains.map((chain)=>{
        return [
            ...Object.values(chain.config.apis).filter(Boolean).map((api)=>api.endpoint),
            ...Object.values(chain.config.apis).filter(Boolean).map((api)=>api.socketEndpoint)
        ].filter(Boolean);
    }).flat();
    const rpcEndpoints = value.chains.map(({ config })=>config.chain.rpcUrls).flat();
    return {
        'connect-src': [
            ...apiEndpoints,
            ...rpcEndpoints
        ]
    };
}
}}),
"[project]/nextjs/csp/policies/rollbar.ts [middleware-edge] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "rollbar": (()=>rollbar)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$configs$2f$app$2f$index$2e$ts__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/configs/app/index.ts [middleware-edge] (ecmascript)");
;
function rollbar() {
    if (!__TURBOPACK__imported__module__$5b$project$5d2f$configs$2f$app$2f$index$2e$ts__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["default"].features.rollbar.isEnabled) {
        return {};
    }
    return {
        'connect-src': [
            'api.rollbar.com'
        ]
    };
}
}}),
"[project]/nextjs/csp/policies/rollup.ts [middleware-edge] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "rollup": (()=>rollup)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$configs$2f$app$2f$index$2e$ts__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/configs/app/index.ts [middleware-edge] (ecmascript)");
;
const rollupFeature = __TURBOPACK__imported__module__$5b$project$5d2f$configs$2f$app$2f$index$2e$ts__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["default"].features.rollup;
function rollup() {
    if (!rollupFeature.isEnabled) {
        return {};
    }
    return {
        'connect-src': [
            ...rollupFeature.parentChain.rpcUrls ?? []
        ]
    };
}
}}),
"[project]/nextjs/csp/policies/safe.ts [middleware-edge] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "safe": (()=>safe)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$configs$2f$app$2f$index$2e$ts__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/configs/app/index.ts [middleware-edge] (ecmascript)");
;
function safe() {
    if (!__TURBOPACK__imported__module__$5b$project$5d2f$configs$2f$app$2f$index$2e$ts__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["default"].features.safe.isEnabled) {
        return {};
    }
    return {
        'connect-src': [
            '*.safe.global'
        ]
    };
}
}}),
"[project]/nextjs/csp/policies/usernameApi.ts [middleware-edge] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "usernameApi": (()=>usernameApi)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$configs$2f$app$2f$index$2e$ts__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/configs/app/index.ts [middleware-edge] (ecmascript)");
;
const feature = __TURBOPACK__imported__module__$5b$project$5d2f$configs$2f$app$2f$index$2e$ts__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["default"].features.addressProfileAPI;
function usernameApi() {
    if (!feature.isEnabled) {
        return {};
    }
    const apiOrigin = (()=>{
        try {
            const url = new URL(feature.apiUrlTemplate);
            return url.origin;
        } catch (error) {
            return '';
        }
    })();
    return {
        'connect-src': [
            apiOrigin
        ]
    };
}
}}),
"[project]/nextjs/csp/policies/walletConnect.ts [middleware-edge] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "walletConnect": (()=>walletConnect)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$configs$2f$app$2f$index$2e$ts__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/configs/app/index.ts [middleware-edge] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$nextjs$2f$csp$2f$utils$2e$ts__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/nextjs/csp/utils.ts [middleware-edge] (ecmascript)");
;
;
function walletConnect() {
    if (!__TURBOPACK__imported__module__$5b$project$5d2f$configs$2f$app$2f$index$2e$ts__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["default"].features.blockchainInteraction.isEnabled) {
        return {};
    }
    return {
        'connect-src': [
            '*.web3modal.com',
            '*.web3modal.org',
            '*.walletconnect.com',
            '*.walletconnect.org',
            'wss://relay.walletconnect.com',
            'wss://relay.walletconnect.org',
            'wss://www.walletlink.org'
        ],
        'frame-ancestors': [
            '*.walletconnect.org',
            '*.walletconnect.com'
        ],
        'img-src': [
            __TURBOPACK__imported__module__$5b$project$5d2f$nextjs$2f$csp$2f$utils$2e$ts__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["KEY_WORDS"].BLOB,
            '*.walletconnect.com'
        ]
    };
}
}}),
"[project]/nextjs/csp/policies/index.ts [middleware-edge] (ecmascript) <locals>": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({});
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
}}),
"[project]/nextjs/csp/policies/index.ts [middleware-edge] (ecmascript) <module evaluation>": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({});
var __TURBOPACK__imported__module__$5b$project$5d2f$nextjs$2f$csp$2f$policies$2f$ad$2e$ts__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/nextjs/csp/policies/ad.ts [middleware-edge] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$nextjs$2f$csp$2f$policies$2f$app$2e$ts__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/nextjs/csp/policies/app.ts [middleware-edge] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$nextjs$2f$csp$2f$policies$2f$cloudFlare$2e$ts__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/nextjs/csp/policies/cloudFlare.ts [middleware-edge] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$nextjs$2f$csp$2f$policies$2f$flashblocks$2e$ts__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/nextjs/csp/policies/flashblocks.ts [middleware-edge] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$nextjs$2f$csp$2f$policies$2f$gasHawk$2e$ts__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/nextjs/csp/policies/gasHawk.ts [middleware-edge] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$nextjs$2f$csp$2f$policies$2f$googleAnalytics$2e$ts__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/nextjs/csp/policies/googleAnalytics.ts [middleware-edge] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$nextjs$2f$csp$2f$policies$2f$googleFonts$2e$ts__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/nextjs/csp/policies/googleFonts.ts [middleware-edge] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$nextjs$2f$csp$2f$policies$2f$googleReCaptcha$2e$ts__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/nextjs/csp/policies/googleReCaptcha.ts [middleware-edge] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$nextjs$2f$csp$2f$policies$2f$growthBook$2e$ts__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/nextjs/csp/policies/growthBook.ts [middleware-edge] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$nextjs$2f$csp$2f$policies$2f$helia$2e$ts__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/nextjs/csp/policies/helia.ts [middleware-edge] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$nextjs$2f$csp$2f$policies$2f$marketplace$2e$ts__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/nextjs/csp/policies/marketplace.ts [middleware-edge] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$nextjs$2f$csp$2f$policies$2f$mixpanel$2e$ts__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/nextjs/csp/policies/mixpanel.ts [middleware-edge] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$nextjs$2f$csp$2f$policies$2f$monaco$2e$ts__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/nextjs/csp/policies/monaco.ts [middleware-edge] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$nextjs$2f$csp$2f$policies$2f$multichain$2e$ts__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/nextjs/csp/policies/multichain.ts [middleware-edge] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$nextjs$2f$csp$2f$policies$2f$rollbar$2e$ts__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/nextjs/csp/policies/rollbar.ts [middleware-edge] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$nextjs$2f$csp$2f$policies$2f$rollup$2e$ts__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/nextjs/csp/policies/rollup.ts [middleware-edge] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$nextjs$2f$csp$2f$policies$2f$safe$2e$ts__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/nextjs/csp/policies/safe.ts [middleware-edge] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$nextjs$2f$csp$2f$policies$2f$usernameApi$2e$ts__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/nextjs/csp/policies/usernameApi.ts [middleware-edge] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$nextjs$2f$csp$2f$policies$2f$walletConnect$2e$ts__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/nextjs/csp/policies/walletConnect.ts [middleware-edge] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$nextjs$2f$csp$2f$policies$2f$index$2e$ts__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/nextjs/csp/policies/index.ts [middleware-edge] (ecmascript) <locals>");
}}),
"[project]/nextjs/csp/generateCspPolicy.ts [middleware-edge] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$nextjs$2f$csp$2f$policies$2f$index$2e$ts__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/nextjs/csp/policies/index.ts [middleware-edge] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$nextjs$2f$csp$2f$policies$2f$app$2e$ts__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/nextjs/csp/policies/app.ts [middleware-edge] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$nextjs$2f$csp$2f$policies$2f$ad$2e$ts__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/nextjs/csp/policies/ad.ts [middleware-edge] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$nextjs$2f$csp$2f$policies$2f$cloudFlare$2e$ts__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/nextjs/csp/policies/cloudFlare.ts [middleware-edge] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$nextjs$2f$csp$2f$policies$2f$flashblocks$2e$ts__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/nextjs/csp/policies/flashblocks.ts [middleware-edge] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$nextjs$2f$csp$2f$policies$2f$gasHawk$2e$ts__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/nextjs/csp/policies/gasHawk.ts [middleware-edge] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$nextjs$2f$csp$2f$policies$2f$googleAnalytics$2e$ts__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/nextjs/csp/policies/googleAnalytics.ts [middleware-edge] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$nextjs$2f$csp$2f$policies$2f$googleFonts$2e$ts__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/nextjs/csp/policies/googleFonts.ts [middleware-edge] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$nextjs$2f$csp$2f$policies$2f$googleReCaptcha$2e$ts__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/nextjs/csp/policies/googleReCaptcha.ts [middleware-edge] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$nextjs$2f$csp$2f$policies$2f$growthBook$2e$ts__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/nextjs/csp/policies/growthBook.ts [middleware-edge] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$nextjs$2f$csp$2f$policies$2f$helia$2e$ts__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/nextjs/csp/policies/helia.ts [middleware-edge] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$nextjs$2f$csp$2f$policies$2f$marketplace$2e$ts__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/nextjs/csp/policies/marketplace.ts [middleware-edge] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$nextjs$2f$csp$2f$policies$2f$mixpanel$2e$ts__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/nextjs/csp/policies/mixpanel.ts [middleware-edge] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$nextjs$2f$csp$2f$policies$2f$monaco$2e$ts__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/nextjs/csp/policies/monaco.ts [middleware-edge] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$nextjs$2f$csp$2f$policies$2f$multichain$2e$ts__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/nextjs/csp/policies/multichain.ts [middleware-edge] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$nextjs$2f$csp$2f$policies$2f$rollbar$2e$ts__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/nextjs/csp/policies/rollbar.ts [middleware-edge] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$nextjs$2f$csp$2f$policies$2f$rollup$2e$ts__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/nextjs/csp/policies/rollup.ts [middleware-edge] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$nextjs$2f$csp$2f$policies$2f$safe$2e$ts__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/nextjs/csp/policies/safe.ts [middleware-edge] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$nextjs$2f$csp$2f$policies$2f$usernameApi$2e$ts__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/nextjs/csp/policies/usernameApi.ts [middleware-edge] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$nextjs$2f$csp$2f$policies$2f$walletConnect$2e$ts__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/nextjs/csp/policies/walletConnect.ts [middleware-edge] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$nextjs$2f$csp$2f$utils$2e$ts__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/nextjs/csp/utils.ts [middleware-edge] (ecmascript)");
;
;
function generateCspPolicy() {
    const policyDescriptor = (0, __TURBOPACK__imported__module__$5b$project$5d2f$nextjs$2f$csp$2f$utils$2e$ts__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["mergeDescriptors"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$nextjs$2f$csp$2f$policies$2f$app$2e$ts__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["app"])(), (0, __TURBOPACK__imported__module__$5b$project$5d2f$nextjs$2f$csp$2f$policies$2f$ad$2e$ts__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["ad"])(), (0, __TURBOPACK__imported__module__$5b$project$5d2f$nextjs$2f$csp$2f$policies$2f$cloudFlare$2e$ts__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["cloudFlare"])(), (0, __TURBOPACK__imported__module__$5b$project$5d2f$nextjs$2f$csp$2f$policies$2f$flashblocks$2e$ts__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["flashblocks"])(), (0, __TURBOPACK__imported__module__$5b$project$5d2f$nextjs$2f$csp$2f$policies$2f$gasHawk$2e$ts__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["gasHawk"])(), (0, __TURBOPACK__imported__module__$5b$project$5d2f$nextjs$2f$csp$2f$policies$2f$googleAnalytics$2e$ts__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["googleAnalytics"])(), (0, __TURBOPACK__imported__module__$5b$project$5d2f$nextjs$2f$csp$2f$policies$2f$googleFonts$2e$ts__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["googleFonts"])(), (0, __TURBOPACK__imported__module__$5b$project$5d2f$nextjs$2f$csp$2f$policies$2f$googleReCaptcha$2e$ts__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["googleReCaptcha"])(), (0, __TURBOPACK__imported__module__$5b$project$5d2f$nextjs$2f$csp$2f$policies$2f$growthBook$2e$ts__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["growthBook"])(), (0, __TURBOPACK__imported__module__$5b$project$5d2f$nextjs$2f$csp$2f$policies$2f$helia$2e$ts__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["helia"])(), (0, __TURBOPACK__imported__module__$5b$project$5d2f$nextjs$2f$csp$2f$policies$2f$marketplace$2e$ts__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["marketplace"])(), (0, __TURBOPACK__imported__module__$5b$project$5d2f$nextjs$2f$csp$2f$policies$2f$mixpanel$2e$ts__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["mixpanel"])(), (0, __TURBOPACK__imported__module__$5b$project$5d2f$nextjs$2f$csp$2f$policies$2f$monaco$2e$ts__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["monaco"])(), (0, __TURBOPACK__imported__module__$5b$project$5d2f$nextjs$2f$csp$2f$policies$2f$multichain$2e$ts__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["multichain"])(), (0, __TURBOPACK__imported__module__$5b$project$5d2f$nextjs$2f$csp$2f$policies$2f$rollbar$2e$ts__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["rollbar"])(), (0, __TURBOPACK__imported__module__$5b$project$5d2f$nextjs$2f$csp$2f$policies$2f$rollup$2e$ts__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["rollup"])(), (0, __TURBOPACK__imported__module__$5b$project$5d2f$nextjs$2f$csp$2f$policies$2f$safe$2e$ts__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["safe"])(), (0, __TURBOPACK__imported__module__$5b$project$5d2f$nextjs$2f$csp$2f$policies$2f$usernameApi$2e$ts__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["usernameApi"])(), (0, __TURBOPACK__imported__module__$5b$project$5d2f$nextjs$2f$csp$2f$policies$2f$walletConnect$2e$ts__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["walletConnect"])());
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$nextjs$2f$csp$2f$utils$2e$ts__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["makePolicyString"])(policyDescriptor);
}
const __TURBOPACK__default__export__ = generateCspPolicy;
}}),
"[project]/nextjs/csp/index.ts [middleware-edge] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "get": (()=>get)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$configs$2f$app$2f$index$2e$ts__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/configs/app/index.ts [middleware-edge] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$configs$2f$multichain$2f$config$2e$edge$2e$ts__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/configs/multichain/config.edge.ts [middleware-edge] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$nextjs$2f$csp$2f$generateCspPolicy$2e$ts__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/nextjs/csp/generateCspPolicy.ts [middleware-edge] (ecmascript)");
;
;
;
let cspPolicy = undefined;
async function get() {
    if (!cspPolicy) {
        __TURBOPACK__imported__module__$5b$project$5d2f$configs$2f$app$2f$index$2e$ts__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["default"].features.opSuperchain.isEnabled && await (0, __TURBOPACK__imported__module__$5b$project$5d2f$configs$2f$multichain$2f$config$2e$edge$2e$ts__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["load"])();
        cspPolicy = (0, __TURBOPACK__imported__module__$5b$project$5d2f$nextjs$2f$csp$2f$generateCspPolicy$2e$ts__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["default"])();
    }
    return cspPolicy;
}
}}),
"[project]/lib/cookies.ts [middleware-edge] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "NAMES": (()=>NAMES),
    "get": (()=>get),
    "getFromCookieString": (()=>getFromCookieString),
    "remove": (()=>remove),
    "set": (()=>set)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$js$2d$cookie$2f$dist$2f$js$2e$cookie$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/js-cookie/dist/js.cookie.mjs [middleware-edge] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$toolkit$2f$utils$2f$isBrowser$2e$ts__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/toolkit/utils/isBrowser.ts [middleware-edge] (ecmascript)");
;
;
var NAMES = /*#__PURE__*/ function(NAMES) {
    NAMES["NAV_BAR_COLLAPSED"] = "nav_bar_collapsed";
    NAMES["API_TOKEN"] = "_explorer_key";
    NAMES["REWARDS_API_TOKEN"] = "rewards_api_token";
    NAMES["REWARDS_REFERRAL_CODE"] = "rewards_ref_code";
    NAMES["TXS_SORT"] = "txs_sort";
    NAMES["COLOR_MODE"] = "chakra-ui-color-mode";
    NAMES["COLOR_THEME"] = "chakra-ui-color-theme";
    NAMES["ADDRESS_IDENTICON_TYPE"] = "address_identicon_type";
    NAMES["ADDRESS_FORMAT"] = "address_format";
    NAMES["TIME_FORMAT"] = "time_format";
    NAMES["INDEXING_ALERT"] = "indexing_alert";
    NAMES["ADBLOCK_DETECTED"] = "adblock_detected";
    NAMES["MIXPANEL_DEBUG"] = "_mixpanel_debug";
    NAMES["ADDRESS_NFT_DISPLAY_TYPE"] = "address_nft_display_type";
    NAMES["UUID"] = "uuid";
    NAMES["SHOW_SCAM_TOKENS"] = "show_scam_tokens";
    return NAMES;
}({});
function get(name, serverCookie) {
    if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$toolkit$2f$utils$2f$isBrowser$2e$ts__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["isBrowser"])()) {
        return serverCookie ? getFromCookieString(serverCookie, name) : undefined;
    }
    if (name) {
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$js$2d$cookie$2f$dist$2f$js$2e$cookie$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["default"].get(name);
    }
}
function set(name, value, attributes = {}) {
    attributes.path = '/';
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$js$2d$cookie$2f$dist$2f$js$2e$cookie$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["default"].set(name, value, attributes);
}
function remove(name, attributes = {}) {
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$js$2d$cookie$2f$dist$2f$js$2e$cookie$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["default"].remove(name, attributes);
}
function getFromCookieString(cookieString, name) {
    return cookieString.split(`${name}=`)[1]?.split(';')[0];
}
}}),
"[project]/nextjs/middlewares/account.ts [middleware-edge] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "account": (()=>account)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$api$2f$server$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/node_modules/next/dist/esm/api/server.js [middleware-edge] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$web$2f$spec$2d$extension$2f$response$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/esm/server/web/spec-extension/response.js [middleware-edge] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$configs$2f$app$2f$index$2e$ts__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/configs/app/index.ts [middleware-edge] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$cookies$2e$ts__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/cookies.ts [middleware-edge] (ecmascript)");
;
;
;
function account(req) {
    const feature = __TURBOPACK__imported__module__$5b$project$5d2f$configs$2f$app$2f$index$2e$ts__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["default"].features.account;
    if (!feature.isEnabled) {
        return;
    }
    const apiTokenCookie = req.cookies.get(__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$cookies$2e$ts__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["NAMES"].API_TOKEN);
    // if user doesn't have api token cookie and he is trying to access account page
    // do redirect to auth page
    if (!apiTokenCookie) {
        // we don't have any info from router here, so just do straight forward sub-string search (sorry)
        const isAccountRoute = req.nextUrl.pathname.includes('/account/') || req.nextUrl.pathname === '/txs' && req.nextUrl.searchParams.get('tab') === 'watchlist';
        const isProfileRoute = req.nextUrl.pathname.includes('/auth/profile');
        if (isAccountRoute || isProfileRoute) {
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$web$2f$spec$2d$extension$2f$response$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["NextResponse"].redirect(__TURBOPACK__imported__module__$5b$project$5d2f$configs$2f$app$2f$index$2e$ts__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["default"].app.baseUrl);
        }
    }
}
}}),
"[project]/nextjs/middlewares/colorTheme.ts [middleware-edge] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>colorThemeMiddleware)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$configs$2f$app$2f$index$2e$ts__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/configs/app/index.ts [middleware-edge] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$cookies$2e$ts__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/cookies.ts [middleware-edge] (ecmascript)");
;
;
function colorThemeMiddleware(req, res) {
    const colorModeCookie = req.cookies.get(__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$cookies$2e$ts__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["NAMES"].COLOR_MODE);
    if (!colorModeCookie) {
        if (__TURBOPACK__imported__module__$5b$project$5d2f$configs$2f$app$2f$index$2e$ts__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["default"].UI.colorTheme.default) {
            res.cookies.set(__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$cookies$2e$ts__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["NAMES"].COLOR_MODE, __TURBOPACK__imported__module__$5b$project$5d2f$configs$2f$app$2f$index$2e$ts__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["default"].UI.colorTheme.default.colorMode, {
                path: '/'
            });
            res.cookies.set(__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$cookies$2e$ts__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["NAMES"].COLOR_THEME, __TURBOPACK__imported__module__$5b$project$5d2f$configs$2f$app$2f$index$2e$ts__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["default"].UI.colorTheme.default.id, {
                path: '/'
            });
        }
    }
}
}}),
"[project]/nextjs/middlewares/addressFormat.ts [middleware-edge] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>addressFormatMiddleware)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$configs$2f$app$2f$index$2e$ts__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/configs/app/index.ts [middleware-edge] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$cookies$2e$ts__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/cookies.ts [middleware-edge] (ecmascript)");
;
;
function addressFormatMiddleware(req, res) {
    const addressFormatCookie = req.cookies.get(__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$cookies$2e$ts__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["NAMES"].ADDRESS_FORMAT);
    const defaultFormat = __TURBOPACK__imported__module__$5b$project$5d2f$configs$2f$app$2f$index$2e$ts__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["default"].UI.views.address.hashFormat.availableFormats[0];
    if (addressFormatCookie) {
        const isValidCookie = __TURBOPACK__imported__module__$5b$project$5d2f$configs$2f$app$2f$index$2e$ts__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["default"].UI.views.address.hashFormat.availableFormats.includes(addressFormatCookie.value);
        if (!isValidCookie) {
            res.cookies.set(__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$cookies$2e$ts__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["NAMES"].ADDRESS_FORMAT, defaultFormat, {
                path: '/'
            });
        }
    } else {
        res.cookies.set(__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$cookies$2e$ts__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["NAMES"].ADDRESS_FORMAT, defaultFormat, {
            path: '/'
        });
    }
}
}}),
"[project]/nextjs/middlewares/scamTokens.ts [middleware-edge] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>scamTokensMiddleware)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$configs$2f$app$2f$index$2e$ts__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/configs/app/index.ts [middleware-edge] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$cookies$2e$ts__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/cookies.ts [middleware-edge] (ecmascript)");
;
;
function scamTokensMiddleware(req, res) {
    if (__TURBOPACK__imported__module__$5b$project$5d2f$configs$2f$app$2f$index$2e$ts__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["default"].UI.views.token.hideScamTokensEnabled) {
        const showScamTokensCookie = req.cookies.get(__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$cookies$2e$ts__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["NAMES"].SHOW_SCAM_TOKENS);
        if (!showScamTokensCookie) {
            res.cookies.set(__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$cookies$2e$ts__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["NAMES"].SHOW_SCAM_TOKENS, 'false', {
                path: '/'
            });
        }
    }
}
}}),
"[project]/nextjs/middlewares/index.ts [middleware-edge] (ecmascript) <locals>": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({});
;
;
;
;
}}),
"[project]/nextjs/middlewares/index.ts [middleware-edge] (ecmascript) <module evaluation>": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({});
var __TURBOPACK__imported__module__$5b$project$5d2f$nextjs$2f$middlewares$2f$account$2e$ts__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/nextjs/middlewares/account.ts [middleware-edge] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$nextjs$2f$middlewares$2f$colorTheme$2e$ts__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/nextjs/middlewares/colorTheme.ts [middleware-edge] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$nextjs$2f$middlewares$2f$addressFormat$2e$ts__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/nextjs/middlewares/addressFormat.ts [middleware-edge] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$nextjs$2f$middlewares$2f$scamTokens$2e$ts__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/nextjs/middlewares/scamTokens.ts [middleware-edge] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$nextjs$2f$middlewares$2f$index$2e$ts__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/nextjs/middlewares/index.ts [middleware-edge] (ecmascript) <locals>");
}}),
"[project]/nextjs/middlewares/colorTheme.ts [middleware-edge] (ecmascript) <export default as colorTheme>": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "colorTheme": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$nextjs$2f$middlewares$2f$colorTheme$2e$ts__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["default"])
});
var __TURBOPACK__imported__module__$5b$project$5d2f$nextjs$2f$middlewares$2f$colorTheme$2e$ts__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/nextjs/middlewares/colorTheme.ts [middleware-edge] (ecmascript)");
}}),
"[project]/nextjs/middlewares/addressFormat.ts [middleware-edge] (ecmascript) <export default as addressFormat>": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "addressFormat": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$nextjs$2f$middlewares$2f$addressFormat$2e$ts__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["default"])
});
var __TURBOPACK__imported__module__$5b$project$5d2f$nextjs$2f$middlewares$2f$addressFormat$2e$ts__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/nextjs/middlewares/addressFormat.ts [middleware-edge] (ecmascript)");
}}),
"[project]/nextjs/middlewares/scamTokens.ts [middleware-edge] (ecmascript) <export default as scamTokens>": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "scamTokens": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$nextjs$2f$middlewares$2f$scamTokens$2e$ts__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["default"])
});
var __TURBOPACK__imported__module__$5b$project$5d2f$nextjs$2f$middlewares$2f$scamTokens$2e$ts__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/nextjs/middlewares/scamTokens.ts [middleware-edge] (ecmascript)");
}}),
"[project]/middleware.ts [middleware-edge] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "config": (()=>config),
    "middleware": (()=>middleware)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$api$2f$server$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/node_modules/next/dist/esm/api/server.js [middleware-edge] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$web$2f$spec$2d$extension$2f$response$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/esm/server/web/spec-extension/response.js [middleware-edge] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$nextjs$2f$csp$2f$index$2e$ts__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/nextjs/csp/index.ts [middleware-edge] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$nextjs$2f$middlewares$2f$index$2e$ts__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/nextjs/middlewares/index.ts [middleware-edge] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$nextjs$2f$middlewares$2f$account$2e$ts__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/nextjs/middlewares/account.ts [middleware-edge] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$nextjs$2f$middlewares$2f$colorTheme$2e$ts__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__$3c$export__default__as__colorTheme$3e$__ = __turbopack_context__.i("[project]/nextjs/middlewares/colorTheme.ts [middleware-edge] (ecmascript) <export default as colorTheme>");
var __TURBOPACK__imported__module__$5b$project$5d2f$nextjs$2f$middlewares$2f$addressFormat$2e$ts__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__$3c$export__default__as__addressFormat$3e$__ = __turbopack_context__.i("[project]/nextjs/middlewares/addressFormat.ts [middleware-edge] (ecmascript) <export default as addressFormat>");
var __TURBOPACK__imported__module__$5b$project$5d2f$nextjs$2f$middlewares$2f$scamTokens$2e$ts__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__$3c$export__default__as__scamTokens$3e$__ = __turbopack_context__.i("[project]/nextjs/middlewares/scamTokens.ts [middleware-edge] (ecmascript) <export default as scamTokens>");
;
;
;
async function middleware(req) {
    const isPageRequest = req.headers.get('accept')?.includes('text/html');
    const start = Date.now();
    if (!isPageRequest) {
        return;
    }
    const accountResponse = (0, __TURBOPACK__imported__module__$5b$project$5d2f$nextjs$2f$middlewares$2f$account$2e$ts__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["account"])(req);
    if (accountResponse) {
        return accountResponse;
    }
    const res = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$web$2f$spec$2d$extension$2f$response$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["NextResponse"].next();
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$nextjs$2f$middlewares$2f$colorTheme$2e$ts__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__$3c$export__default__as__colorTheme$3e$__["colorTheme"])(req, res);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$nextjs$2f$middlewares$2f$addressFormat$2e$ts__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__$3c$export__default__as__addressFormat$3e$__["addressFormat"])(req, res);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$nextjs$2f$middlewares$2f$scamTokens$2e$ts__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__$3c$export__default__as__scamTokens$3e$__["scamTokens"])(req, res);
    const end = Date.now();
    const cspHeader = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$nextjs$2f$csp$2f$index$2e$ts__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["get"])();
    res.headers.append('Content-Security-Policy', cspHeader);
    res.headers.append('Server-Timing', `middleware;dur=${end - start}`);
    res.headers.append('Docker-ID', process.env.HOSTNAME || '');
    return res;
}
const config = {
    matcher: [
        '/',
        '/:notunderscore((?!_next).+)'
    ]
};
}}),
}]);

//# sourceMappingURL=%5Broot%20of%20the%20server%5D__1687c339._.js.map