(globalThis["TURBOPACK"] || (globalThis["TURBOPACK"] = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/src/components/ExperienceProvider.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ExperienceProvider",
    ()=>ExperienceProvider,
    "ReserveButton",
    ()=>ReserveButton,
    "useExperience",
    ()=>useExperience
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$minus$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Minus$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/minus.mjs [app-client] (ecmascript) <export default as Minus>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plus$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Plus$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/plus.mjs [app-client] (ecmascript) <export default as Plus>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shopping$2d$bag$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ShoppingBag$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/shopping-bag.mjs [app-client] (ecmascript) <export default as ShoppingBag>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trash$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Trash2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/trash.mjs [app-client] (ecmascript) <export default as Trash2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/arrow-right.mjs [app-client] (ecmascript) <export default as ArrowRight>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Check$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/check.mjs [app-client] (ecmascript) <export default as Check>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$menu$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/data/menu.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Modal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/Modal.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ReservationForm$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ReservationForm.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$FoodImage$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/FoodImage.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature(), _s2 = __turbopack_context__.k.signature();
'use client';
;
;
;
;
;
;
;
const Context = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createContext"])(null);
function useExperience() {
    _s();
    const context = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"])(Context);
    if (!context) throw new Error('ExperienceProvider missing');
    return context;
}
_s(useExperience, "b9L3QQ+jgeyIrH0NfHrJ8nn7VMU=");
function ExperienceProvider({ children }) {
    _s1();
    const [modal, setModal] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [cart, setCart] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [ready, setReady] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [checkout, setCheckout] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ExperienceProvider.useEffect": ()=>{
            let saved = [];
            try {
                const value = JSON.parse(localStorage.getItem('ember-cart') || '[]');
                if (Array.isArray(value)) {
                    const unique = new Map();
                    for (const line of value)if (line && typeof line.id === 'string' && __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$menu$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["menuItems"].some({
                        "ExperienceProvider.useEffect": (item)=>item.id === line.id
                    }["ExperienceProvider.useEffect"]) && Number.isInteger(line.quantity) && line.quantity > 0) unique.set(line.id, {
                        id: line.id,
                        quantity: Math.min(20, line.quantity)
                    });
                    saved = [
                        ...unique.values()
                    ];
                }
            } catch  {
            /* Storage may be unavailable in private browsing. */ }
            queueMicrotask({
                "ExperienceProvider.useEffect": ()=>{
                    setCart(saved);
                    setReady(true);
                }
            }["ExperienceProvider.useEffect"]);
        }
    }["ExperienceProvider.useEffect"], []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ExperienceProvider.useEffect": ()=>{
            if (ready) {
                try {
                    localStorage.setItem('ember-cart', JSON.stringify(cart));
                } catch  {
                /* The current session still works without persistence. */ }
            }
        }
    }["ExperienceProvider.useEffect"], [
        cart,
        ready
    ]);
    const close = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "ExperienceProvider.useCallback[close]": ()=>setModal(null)
    }["ExperienceProvider.useCallback[close]"], []);
    function update(id, quantity) {
        setCheckout(false);
        setCart((current)=>current.map((line)=>line.id === id ? {
                    ...line,
                    quantity: Math.min(20, quantity)
                } : line).filter((line)=>line.quantity > 0));
    }
    function add(id, quantity) {
        setCart((current)=>{
            const found = current.find((line)=>line.id === id);
            return found ? current.map((line)=>line.id === id ? {
                    ...line,
                    quantity: Math.min(20, line.quantity + quantity)
                } : line) : [
                ...current,
                {
                    id,
                    quantity
                }
            ];
        });
        setCheckout(false);
        setModal('cart');
    }
    const subtotal = cart.reduce((total, line)=>total + (__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$menu$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["menuItems"].find((item)=>item.id === line.id)?.price || 0) * line.quantity, 0);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Context.Provider, {
        value: {
            reserve: ()=>setModal('reservation'),
            openCart: ()=>{
                setCheckout(false);
                setModal('cart');
            },
            add,
            count: cart.reduce((sum, line)=>sum + line.quantity, 0)
        },
        children: [
            children,
            modal === 'reservation' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Modal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Modal"], {
                title: "A table for you.",
                onClose: close,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ReservationForm$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ReservationForm"], {}, void 0, false, {
                    fileName: "[project]/src/components/ExperienceProvider.tsx",
                    lineNumber: 105,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/ExperienceProvider.tsx",
                lineNumber: 104,
                columnNumber: 9
            }, this),
            modal === 'cart' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Modal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Modal"], {
                title: "Your order.",
                onClose: close,
                drawer: true,
                children: checkout ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "success-state",
                    role: "status",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "success-icon",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Check$3e$__["Check"], {}, void 0, false, {
                                fileName: "[project]/src/components/ExperienceProvider.tsx",
                                lineNumber: 113,
                                columnNumber: 17
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/ExperienceProvider.tsx",
                            lineNumber: 112,
                            columnNumber: 15
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                            children: "Great taste."
                        }, void 0, false, {
                            fileName: "[project]/src/components/ExperienceProvider.tsx",
                            lineNumber: 115,
                            columnNumber: 15
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            children: "This is a demo checkout. No order was placed and no payment was collected."
                        }, void 0, false, {
                            fileName: "[project]/src/components/ExperienceProvider.tsx",
                            lineNumber: 116,
                            columnNumber: 15
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            className: "button",
                            onClick: close,
                            children: "Keep exploring"
                        }, void 0, false, {
                            fileName: "[project]/src/components/ExperienceProvider.tsx",
                            lineNumber: 117,
                            columnNumber: 15
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/ExperienceProvider.tsx",
                    lineNumber: 111,
                    columnNumber: 13
                }, this) : cart.length ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "micro",
                            children: "A little preview of your next visit • Demo order"
                        }, void 0, false, {
                            fileName: "[project]/src/components/ExperienceProvider.tsx",
                            lineNumber: 123,
                            columnNumber: 15
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "cart-lines",
                            children: cart.map((line)=>{
                                const item = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$menu$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["menuItems"].find((item)=>item.id === line.id);
                                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "cart-line",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "cart-photo",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$FoodImage$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FoodImage"], {
                                                src: item.image,
                                                alt: item.name,
                                                sizes: "90px"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/ExperienceProvider.tsx",
                                                lineNumber: 130,
                                                columnNumber: 25
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/ExperienceProvider.tsx",
                                            lineNumber: 129,
                                            columnNumber: 23
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "cart-line-info",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                    children: item.name
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/ExperienceProvider.tsx",
                                                    lineNumber: 133,
                                                    columnNumber: 25
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "price",
                                                    children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$menu$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["money"])(item.price * line.quantity)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/ExperienceProvider.tsx",
                                                    lineNumber: 134,
                                                    columnNumber: 25
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "quantity compact",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                            "aria-label": `Decrease ${item.name}`,
                                                            onClick: ()=>update(line.id, line.quantity - 1),
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$minus$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Minus$3e$__["Minus"], {
                                                                size: 14
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/ExperienceProvider.tsx",
                                                                lineNumber: 140,
                                                                columnNumber: 29
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/ExperienceProvider.tsx",
                                                            lineNumber: 136,
                                                            columnNumber: 27
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            children: line.quantity
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/ExperienceProvider.tsx",
                                                            lineNumber: 142,
                                                            columnNumber: 27
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                            disabled: line.quantity >= 20,
                                                            "aria-label": `Increase ${item.name}`,
                                                            onClick: ()=>update(line.id, line.quantity + 1),
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plus$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Plus$3e$__["Plus"], {
                                                                size: 14
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/ExperienceProvider.tsx",
                                                                lineNumber: 148,
                                                                columnNumber: 29
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/ExperienceProvider.tsx",
                                                            lineNumber: 143,
                                                            columnNumber: 27
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/ExperienceProvider.tsx",
                                                    lineNumber: 135,
                                                    columnNumber: 25
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/ExperienceProvider.tsx",
                                            lineNumber: 132,
                                            columnNumber: 23
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            className: "icon-button",
                                            "aria-label": `Remove ${item.name}`,
                                            onClick: ()=>update(line.id, 0),
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trash$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Trash2$3e$__["Trash2"], {
                                                size: 17
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/ExperienceProvider.tsx",
                                                lineNumber: 157,
                                                columnNumber: 25
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/ExperienceProvider.tsx",
                                            lineNumber: 152,
                                            columnNumber: 23
                                        }, this)
                                    ]
                                }, line.id, true, {
                                    fileName: "[project]/src/components/ExperienceProvider.tsx",
                                    lineNumber: 128,
                                    columnNumber: 21
                                }, this);
                            })
                        }, void 0, false, {
                            fileName: "[project]/src/components/ExperienceProvider.tsx",
                            lineNumber: 124,
                            columnNumber: 15
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "cart-total",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    children: "Subtotal"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/ExperienceProvider.tsx",
                                    lineNumber: 164,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                    children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$menu$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["money"])(subtotal)
                                }, void 0, false, {
                                    fileName: "[project]/src/components/ExperienceProvider.tsx",
                                    lineNumber: 165,
                                    columnNumber: 17
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/ExperienceProvider.tsx",
                            lineNumber: 163,
                            columnNumber: 15
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "micro",
                            children: "Taxes and gratuity are not included. This is a demo."
                        }, void 0, false, {
                            fileName: "[project]/src/components/ExperienceProvider.tsx",
                            lineNumber: 167,
                            columnNumber: 15
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            className: "button wide",
                            onClick: ()=>{
                                setCheckout(true);
                                setCart([]);
                            },
                            children: [
                                "Demo Checkout ",
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__["ArrowRight"], {
                                    size: 17
                                }, void 0, false, {
                                    fileName: "[project]/src/components/ExperienceProvider.tsx",
                                    lineNumber: 175,
                                    columnNumber: 31
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/ExperienceProvider.tsx",
                            lineNumber: 168,
                            columnNumber: 15
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/ExperienceProvider.tsx",
                    lineNumber: 122,
                    columnNumber: 13
                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "empty-state",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shopping$2d$bag$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ShoppingBag$3e$__["ShoppingBag"], {
                            size: 38
                        }, void 0, false, {
                            fileName: "[project]/src/components/ExperienceProvider.tsx",
                            lineNumber: 180,
                            columnNumber: 15
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                            children: "Your next favorite is waiting."
                        }, void 0, false, {
                            fileName: "[project]/src/components/ExperienceProvider.tsx",
                            lineNumber: 181,
                            columnNumber: 15
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            children: "Add a dish from its menu page to start your demo order."
                        }, void 0, false, {
                            fileName: "[project]/src/components/ExperienceProvider.tsx",
                            lineNumber: 182,
                            columnNumber: 15
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            href: "/menu",
                            className: "button",
                            onClick: close,
                            children: "Explore the Menu"
                        }, void 0, false, {
                            fileName: "[project]/src/components/ExperienceProvider.tsx",
                            lineNumber: 183,
                            columnNumber: 15
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/ExperienceProvider.tsx",
                    lineNumber: 179,
                    columnNumber: 13
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/ExperienceProvider.tsx",
                lineNumber: 109,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/ExperienceProvider.tsx",
        lineNumber: 91,
        columnNumber: 5
    }, this);
}
_s1(ExperienceProvider, "xIYsu+qWS/7JVDbpLoVpPhq/HLQ=");
_c = ExperienceProvider;
function ReserveButton({ children = 'Reserve a Table', className = 'button' }) {
    _s2();
    const { reserve } = useExperience();
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
        className: className,
        onClick: reserve,
        children: children
    }, void 0, false, {
        fileName: "[project]/src/components/ExperienceProvider.tsx",
        lineNumber: 202,
        columnNumber: 5
    }, this);
}
_s2(ReserveButton, "uSSXDS2uIWrMLufplRLv3srIOI8=", false, function() {
    return [
        useExperience
    ];
});
_c1 = ReserveButton;
var _c, _c1;
__turbopack_context__.k.register(_c, "ExperienceProvider");
__turbopack_context__.k.register(_c1, "ReserveButton");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/FoodImage.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "FoodImage",
    ()=>FoodImage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
function FoodImage({ src, alt, className = '', priority = false, sizes = '(max-width: 600px) 100vw, (max-width: 1000px) 50vw, 25vw' }) {
    _s();
    const [failed, setFailed] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
        src: failed ? '/images/fallback.svg' : src,
        alt: alt,
        fill: true,
        sizes: sizes,
        priority: priority,
        className: `food-image ${className}`,
        onError: ()=>setFailed(true)
    }, void 0, false, {
        fileName: "[project]/src/components/FoodImage.tsx",
        lineNumber: 20,
        columnNumber: 5
    }, this);
}
_s(FoodImage, "BFa/7w0IiJnSoWJxZHxuU4kOwF4=");
_c = FoodImage;
var _c;
__turbopack_context__.k.register(_c, "FoodImage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/Modal.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Modal",
    ()=>Modal
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/x.mjs [app-client] (ecmascript) <export default as X>");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
function Modal({ title, onClose, children, drawer = false }) {
    _s();
    const ref = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Modal.useEffect": ()=>{
            const dialog = ref.current;
            const previous = document.activeElement instanceof HTMLElement ? document.activeElement : null;
            dialog?.showModal();
            const overflow = document.body.style.overflow;
            document.body.style.overflow = 'hidden';
            // Keep Tab inside the dialog even when a success state replaces the focused form.
            const containFocus = {
                "Modal.useEffect.containFocus": (event)=>{
                    if (event.key !== 'Tab' || !dialog?.open) return;
                    const controls = Array.from(dialog.querySelectorAll('button:not([disabled]), a[href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex="0"]')).filter({
                        "Modal.useEffect.containFocus.controls": (element)=>element.getClientRects().length > 0
                    }["Modal.useEffect.containFocus.controls"]);
                    const first = controls[0];
                    const last = controls[controls.length - 1];
                    const active = document.activeElement;
                    if (!dialog.contains(active) || event.shiftKey && active === first || !event.shiftKey && active === last) {
                        event.preventDefault();
                        (event.shiftKey ? last : first)?.focus();
                    }
                }
            }["Modal.useEffect.containFocus"];
            document.addEventListener('keydown', containFocus, true);
            return ({
                "Modal.useEffect": ()=>{
                    document.removeEventListener('keydown', containFocus, true);
                    dialog?.close();
                    document.body.style.overflow = overflow;
                    previous?.focus();
                }
            })["Modal.useEffect"];
        }
    }["Modal.useEffect"], []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("dialog", {
        ref: ref,
        className: `modal ${drawer ? 'drawer' : ''}`,
        "aria-labelledby": "dialog-title",
        onCancel: (event)=>{
            event.preventDefault();
            onClose();
        },
        onClick: (event)=>{
            if (event.target === event.currentTarget) {
                const box = event.currentTarget.getBoundingClientRect();
                if (event.clientX < box.left || event.clientX > box.right || event.clientY < box.top || event.clientY > box.bottom) onClose();
            }
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "modal-header",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "eyebrow",
                        children: "Ember & Oak"
                    }, void 0, false, {
                        fileName: "[project]/src/components/Modal.tsx",
                        lineNumber: 73,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        className: "icon-button",
                        onClick: onClose,
                        "aria-label": "Close dialog",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                            size: 22
                        }, void 0, false, {
                            fileName: "[project]/src/components/Modal.tsx",
                            lineNumber: 75,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/Modal.tsx",
                        lineNumber: 74,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/Modal.tsx",
                lineNumber: 72,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                id: "dialog-title",
                children: title
            }, void 0, false, {
                fileName: "[project]/src/components/Modal.tsx",
                lineNumber: 78,
                columnNumber: 7
            }, this),
            children
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/Modal.tsx",
        lineNumber: 51,
        columnNumber: 5
    }, this);
}
_s(Modal, "8uVE59eA/r6b92xF80p7sH8rXLk=");
_c = Modal;
var _c;
__turbopack_context__.k.register(_c, "Modal");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/Navbar.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Logo",
    ()=>Logo,
    "Navbar",
    ()=>Navbar,
    "links",
    ()=>links
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$flame$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Flame$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/flame.mjs [app-client] (ecmascript) <export default as Flame>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$menu$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Menu$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/menu.mjs [app-client] (ecmascript) <export default as Menu>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shopping$2d$bag$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ShoppingBag$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/shopping-bag.mjs [app-client] (ecmascript) <export default as ShoppingBag>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$up$2d$right$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowUpRight$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/arrow-up-right.mjs [app-client] (ecmascript) <export default as ArrowUpRight>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ExperienceProvider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ExperienceProvider.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Modal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/Modal.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
;
;
const links = [
    [
        '/',
        'Home'
    ],
    [
        '/menu',
        'Menu'
    ],
    [
        '/about',
        'Our Story'
    ],
    [
        '/gallery',
        'Gallery'
    ],
    [
        '/contact',
        'Contact'
    ]
];
function Logo() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
        href: "/",
        className: "logo",
        "aria-label": "Ember and Oak home",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$flame$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Flame$3e$__["Flame"], {
                size: 24,
                strokeWidth: 1.4
            }, void 0, false, {
                fileName: "[project]/src/components/Navbar.tsx",
                lineNumber: 18,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                children: [
                    "EMBER ",
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "logo-amp",
                        children: "&"
                    }, void 0, false, {
                        fileName: "[project]/src/components/Navbar.tsx",
                        lineNumber: 20,
                        columnNumber: 15
                    }, this),
                    " OAK",
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("small", {
                        children: "MODERN GRILL & KITCHEN"
                    }, void 0, false, {
                        fileName: "[project]/src/components/Navbar.tsx",
                        lineNumber: 20,
                        columnNumber: 54
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/Navbar.tsx",
                lineNumber: 19,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/Navbar.tsx",
        lineNumber: 17,
        columnNumber: 5
    }, this);
}
_c = Logo;
function Navbar() {
    _s();
    const path = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePathname"])();
    const [scrolled, setScrolled] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [mobile, setMobile] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const { count, openCart, reserve } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ExperienceProvider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useExperience"])();
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Navbar.useEffect": ()=>{
            const scroll = {
                "Navbar.useEffect.scroll": ()=>setScrolled(window.scrollY > 20)
            }["Navbar.useEffect.scroll"];
            scroll();
            window.addEventListener('scroll', scroll, {
                passive: true
            });
            return ({
                "Navbar.useEffect": ()=>window.removeEventListener('scroll', scroll)
            })["Navbar.useEffect"];
        }
    }["Navbar.useEffect"], []);
    const nav = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: links.map(([href, label])=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                href: href,
                onClick: ()=>setMobile(false),
                "aria-current": path === href || href !== '/' && path.startsWith(href) ? 'page' : undefined,
                children: label
            }, href, false, {
                fileName: "[project]/src/components/Navbar.tsx",
                lineNumber: 39,
                columnNumber: 9
            }, this))
    }, void 0, false, {
        fileName: "[project]/src/components/Navbar.tsx",
        lineNumber: 37,
        columnNumber: 5
    }, this);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
                className: `navbar ${scrolled || path !== '/' ? 'solid' : ''}`,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "nav-inner",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Logo, {}, void 0, false, {
                            fileName: "[project]/src/components/Navbar.tsx",
                            lineNumber: 56,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
                            className: "desktop-nav",
                            "aria-label": "Main navigation",
                            children: nav
                        }, void 0, false, {
                            fileName: "[project]/src/components/Navbar.tsx",
                            lineNumber: 57,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "nav-actions",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    className: "icon-button cart-button",
                                    "aria-label": `Open cart, ${count} items`,
                                    onClick: openCart,
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shopping$2d$bag$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ShoppingBag$3e$__["ShoppingBag"], {
                                            size: 20
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/Navbar.tsx",
                                            lineNumber: 66,
                                            columnNumber: 15
                                        }, this),
                                        count > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            children: count
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/Navbar.tsx",
                                            lineNumber: 67,
                                            columnNumber: 29
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/Navbar.tsx",
                                    lineNumber: 61,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ExperienceProvider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ReserveButton"], {
                                    className: "button nav-reserve",
                                    children: [
                                        "Reserve a Table ",
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$up$2d$right$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowUpRight$3e$__["ArrowUpRight"], {
                                            size: 15
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/Navbar.tsx",
                                            lineNumber: 70,
                                            columnNumber: 31
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/Navbar.tsx",
                                    lineNumber: 69,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    className: "icon-button hamburger",
                                    onClick: ()=>setMobile(true),
                                    "aria-label": "Open navigation",
                                    "aria-expanded": mobile,
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$menu$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Menu$3e$__["Menu"], {
                                        size: 24
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/Navbar.tsx",
                                        lineNumber: 78,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/components/Navbar.tsx",
                                    lineNumber: 72,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/Navbar.tsx",
                            lineNumber: 60,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/Navbar.tsx",
                    lineNumber: 55,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/Navbar.tsx",
                lineNumber: 54,
                columnNumber: 7
            }, this),
            mobile && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Modal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Modal"], {
                title: "Make yourself at home.",
                onClose: ()=>setMobile(false),
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
                        className: "mobile-nav",
                        "aria-label": "Mobile navigation",
                        children: nav
                    }, void 0, false, {
                        fileName: "[project]/src/components/Navbar.tsx",
                        lineNumber: 85,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        className: "button wide",
                        onClick: ()=>{
                            setMobile(false);
                            reserve();
                        },
                        children: [
                            "Reserve a Table ",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$up$2d$right$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowUpRight$3e$__["ArrowUpRight"], {
                                size: 17
                            }, void 0, false, {
                                fileName: "[project]/src/components/Navbar.tsx",
                                lineNumber: 95,
                                columnNumber: 29
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/Navbar.tsx",
                        lineNumber: 88,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/Navbar.tsx",
                lineNumber: 84,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/Navbar.tsx",
        lineNumber: 53,
        columnNumber: 5
    }, this);
}
_s(Navbar, "DAu02kgcjxpj2UxHVKEKuDzpeUs=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePathname"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ExperienceProvider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useExperience"]
    ];
});
_c1 = Navbar;
var _c, _c1;
__turbopack_context__.k.register(_c, "Logo");
__turbopack_context__.k.register(_c1, "Navbar");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/ReservationForm.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ReservationForm",
    ()=>ReservationForm
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Check$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/check.mjs [app-client] (ecmascript) <export default as Check>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/arrow-right.mjs [app-client] (ecmascript) <export default as ArrowRight>");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
function austinNow() {
    const parts = new Intl.DateTimeFormat('en-CA', {
        timeZone: 'America/Chicago',
        year: 'numeric',
        month: '2-digit',
        day: '2-digit',
        hour: '2-digit',
        minute: '2-digit',
        hourCycle: 'h23'
    }).formatToParts(new Date());
    const value = (type)=>parts.find((part)=>part.type === type)?.value || '';
    return {
        date: `${value('year')}-${value('month')}-${value('day')}`,
        time: `${value('hour')}:${value('minute')}`
    };
}
function localDate() {
    return austinNow().date;
}
function hours(date) {
    const day = new Date(`${date}T12:00:00`).getDay();
    return {
        start: day === 0 ? 12 : 11,
        end: day === 0 ? 20 : day === 5 || day === 6 ? 22 : 21
    };
}
function ReservationForm() {
    _s();
    const [date, setDate] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(localDate);
    const [success, setSuccess] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [error, setError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const available = hours(date || localDate());
    const times = Array.from({
        length: (available.end - available.start) * 2 + 1
    }, (_, index)=>{
        const hour = available.start + Math.floor(index / 2);
        return `${String(hour).padStart(2, '0')}:${index % 2 ? '30' : '00'}`;
    });
    function submit(event) {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        const now = austinNow();
        const when = `${date}T${data.get('time')}`;
        if (!String(data.get('name')).trim() || when <= `${now.date}T${now.time}`) {
            setError('Please enter your name and choose a future date and time.');
            return;
        }
        // Integration boundary: send the validated FormData to your reservation API here.
        setError('');
        setSuccess(true);
    }
    if (success) return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "success-state",
        role: "status",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "success-icon",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Check$3e$__["Check"], {}, void 0, false, {
                    fileName: "[project]/src/components/ReservationForm.tsx",
                    lineNumber: 53,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/ReservationForm.tsx",
                lineNumber: 52,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                children: "A little taste of what’s next."
            }, void 0, false, {
                fileName: "[project]/src/components/ReservationForm.tsx",
                lineNumber: 55,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                children: "Your demo reservation request is complete. No table has been booked and no email will be sent."
            }, void 0, false, {
                fileName: "[project]/src/components/ReservationForm.tsx",
                lineNumber: 56,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                className: "button outline",
                onClick: ()=>setSuccess(false),
                children: "Make another request"
            }, void 0, false, {
                fileName: "[project]/src/components/ReservationForm.tsx",
                lineNumber: 60,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/ReservationForm.tsx",
        lineNumber: 51,
        columnNumber: 7
    }, this);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "muted modal-intro",
                children: "Good food tastes better with good company. Let’s find your table."
            }, void 0, false, {
                fileName: "[project]/src/components/ReservationForm.tsx",
                lineNumber: 67,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                className: "form-grid",
                onSubmit: submit,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                        children: [
                            "Name",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                name: "name",
                                autoComplete: "name",
                                required: true,
                                maxLength: 100,
                                placeholder: "Your full name"
                            }, void 0, false, {
                                fileName: "[project]/src/components/ReservationForm.tsx",
                                lineNumber: 73,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/ReservationForm.tsx",
                        lineNumber: 71,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                        children: [
                            "Email",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                name: "email",
                                type: "email",
                                autoComplete: "email",
                                required: true,
                                placeholder: "you@example.com"
                            }, void 0, false, {
                                fileName: "[project]/src/components/ReservationForm.tsx",
                                lineNumber: 83,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/ReservationForm.tsx",
                        lineNumber: 81,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                        className: "full",
                        children: [
                            "Phone",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                name: "phone",
                                type: "tel",
                                autoComplete: "tel",
                                required: true,
                                pattern: "[+0-9\\(\\) .\\-]{7,20}",
                                placeholder: "(512) 555-0123"
                            }, void 0, false, {
                                fileName: "[project]/src/components/ReservationForm.tsx",
                                lineNumber: 93,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/ReservationForm.tsx",
                        lineNumber: 91,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                        children: [
                            "Date",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                name: "date",
                                type: "date",
                                required: true,
                                min: localDate(),
                                value: date,
                                onChange: (event)=>setDate(event.target.value)
                            }, void 0, false, {
                                fileName: "[project]/src/components/ReservationForm.tsx",
                                lineNumber: 104,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/ReservationForm.tsx",
                        lineNumber: 102,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                        children: [
                            "Time",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                name: "time",
                                required: true,
                                children: times.map((time)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                        value: time,
                                        children: [
                                            Number(time.slice(0, 2)) % 12 || 12,
                                            ":",
                                            time.slice(3),
                                            ' ',
                                            Number(time.slice(0, 2)) >= 12 ? 'PM' : 'AM'
                                        ]
                                    }, time, true, {
                                        fileName: "[project]/src/components/ReservationForm.tsx",
                                        lineNumber: 117,
                                        columnNumber: 15
                                    }, this))
                            }, date, false, {
                                fileName: "[project]/src/components/ReservationForm.tsx",
                                lineNumber: 115,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/ReservationForm.tsx",
                        lineNumber: 113,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                        className: "full",
                        children: [
                            "Guests",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                name: "guests",
                                defaultValue: "2",
                                children: Array.from({
                                    length: 8
                                }, (_, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                        value: index + 1,
                                        children: [
                                            index + 1,
                                            " ",
                                            index === 0 ? 'guest' : 'guests'
                                        ]
                                    }, index, true, {
                                        fileName: "[project]/src/components/ReservationForm.tsx",
                                        lineNumber: 128,
                                        columnNumber: 15
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/src/components/ReservationForm.tsx",
                                lineNumber: 126,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/ReservationForm.tsx",
                        lineNumber: 124,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                        className: "full",
                        children: [
                            "Special request ",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "muted",
                                children: "(optional)"
                            }, void 0, false, {
                                fileName: "[project]/src/components/ReservationForm.tsx",
                                lineNumber: 135,
                                columnNumber: 27
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                                name: "request",
                                rows: 2,
                                maxLength: 1000,
                                placeholder: "A celebration, dietary preferences, or anything else…"
                            }, void 0, false, {
                                fileName: "[project]/src/components/ReservationForm.tsx",
                                lineNumber: 136,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/ReservationForm.tsx",
                        lineNumber: 134,
                        columnNumber: 9
                    }, this),
                    error && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "form-error full",
                        role: "alert",
                        children: error
                    }, void 0, false, {
                        fileName: "[project]/src/components/ReservationForm.tsx",
                        lineNumber: 144,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        className: "button full",
                        type: "submit",
                        children: [
                            "Request Reservation ",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__["ArrowRight"], {
                                size: 17
                            }, void 0, false, {
                                fileName: "[project]/src/components/ReservationForm.tsx",
                                lineNumber: 149,
                                columnNumber: 31
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/ReservationForm.tsx",
                        lineNumber: 148,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "micro full",
                        children: "All times are Austin time (CT). Portfolio demo — no real table is booked."
                    }, void 0, false, {
                        fileName: "[project]/src/components/ReservationForm.tsx",
                        lineNumber: 151,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/ReservationForm.tsx",
                lineNumber: 70,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/ReservationForm.tsx",
        lineNumber: 66,
        columnNumber: 5
    }, this);
}
_s(ReservationForm, "4+BQAFlE9ZDNaQUKBedpcUFTmeY=");
_c = ReservationForm;
var _c;
__turbopack_context__.k.register(_c, "ReservationForm");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/data/images.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/** Local sample photography; source URLs are recorded in public/images/sources.json. */ __turbopack_context__.s([
    "images",
    ()=>images
]);
const images = {
    feast: '/images/feast.jpg',
    burger: '/images/burger.jpg',
    steak: '/images/steak.jpg',
    pizza: '/images/pizza.jpg',
    pasta: '/images/pasta.jpg',
    chicken: '/images/chicken.jpg',
    wings: '/images/wings.jpg',
    salmon: '/images/salmon.jpg',
    salad: '/images/salad.jpg',
    fries: '/images/fries.jpg',
    dessert: '/images/dessert.jpg',
    coffee: '/images/coffee.jpg',
    drink: '/images/drink.jpg',
    interior: '/images/interior.jpg',
    chef: '/images/chef.jpg',
    grill: '/images/grill.jpg',
    sandwich: '/images/sandwich.jpg'
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/data/menu.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "categories",
    ()=>categories,
    "featuredItems",
    ()=>featuredItems,
    "menuItems",
    ()=>menuItems,
    "money",
    ()=>money
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$images$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/data/images.ts [app-client] (ecmascript)");
;
const categories = [
    'All',
    'Appetizers',
    'Burgers',
    'Sandwiches',
    'Steaks',
    'Chicken',
    'BBQ & Grill',
    'Pizza',
    'Pasta',
    'Seafood',
    'Salads',
    'Bowls',
    'Sides',
    'Kids',
    'Desserts',
    'Soft Drinks',
    'Coffee & Tea',
    'Mocktails'
];
const groups = [
    {
        category: 'Appetizers',
        image: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$images$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["images"].wings,
        items: [
            [
                'Fire Roasted Wings',
                14,
                'Oak-fired wings, smoky house glaze and cool buttermilk ranch.',
                'Chicken wings, smoked paprika, house BBQ glaze, buttermilk ranch',
                '',
                1
            ],
            [
                'Crispy Calamari',
                15,
                'Lightly battered calamari with fried lemon and a bright chili aioli.',
                'Calamari, flour, lemon, chili aioli',
                '',
                1
            ],
            [
                'Loaded Nachos',
                13,
                'Warm tortilla chips layered with queso, black beans and fresh pico.',
                'Corn chips, queso, black beans, tomato, jalapeño',
                'Vegetarian',
                1
            ],
            [
                'Mozzarella Sticks',
                10,
                'Golden panko-crusted mozzarella with slow-simmered marinara.',
                'Mozzarella, panko, egg, tomato, basil',
                'Vegetarian'
            ],
            [
                'Spinach Artichoke Dip',
                12,
                'A bubbling skillet of creamy spinach and artichoke, with toasted sourdough.',
                'Spinach, artichoke, cream cheese, Parmesan, sourdough',
                'Vegetarian'
            ]
        ]
    },
    {
        category: 'Burgers',
        image: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$images$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["images"].burger,
        items: [
            [
                'Ember Classic',
                16,
                'Two smashed patties, American cheese, house pickles and Ember sauce on toasted brioche.',
                'Beef, American cheese, brioche, pickles, onion, Ember sauce'
            ],
            [
                'Smokehouse BBQ Burger',
                19,
                'Flame-grilled beef, smoked bacon, sharp cheddar and a tangle of crispy onions.',
                'Beef, bacon, cheddar, crispy onions, BBQ sauce, brioche'
            ],
            [
                'Inferno Burger',
                18,
                'A fiery beef burger with pepper jack, charred jalapeños and house hot sauce.',
                'Beef, pepper jack, jalapeño, hot sauce, brioche',
                '',
                3
            ],
            [
                'Mushroom Swiss Burger',
                18,
                'Seared beef with buttery woodland mushrooms, Swiss cheese and garlic aioli.',
                'Beef, mushrooms, Swiss cheese, garlic aioli, brioche'
            ],
            [
                'Bacon Double Smash',
                20,
                'Lacy-edged double beef patties with thick-cut bacon and melted American cheese.',
                'Beef, bacon, American cheese, onion, brioche'
            ],
            [
                'Nashville Hot Chicken Burger',
                17,
                'Crispy cayenne-brushed chicken with pickle slaw and cooling ranch.',
                'Chicken, cayenne, cabbage, pickles, ranch, brioche',
                '',
                3
            ]
        ]
    },
    {
        category: 'Sandwiches',
        image: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$images$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["images"].sandwich,
        items: [
            [
                'Philly Cheesesteak',
                17,
                'Thinly sliced ribeye, sweet onions and provolone on a toasted hoagie.',
                'Ribeye, onion, provolone, hoagie roll'
            ],
            [
                'Grilled Chicken Club',
                16,
                'Herb-grilled chicken, crisp bacon, ripe tomato and avocado.',
                'Chicken, bacon, tomato, avocado, sourdough'
            ],
            [
                'BBQ Brisket Sandwich',
                19,
                'Low-and-slow brisket with tangy slaw and our oak-smoked BBQ sauce.',
                'Brisket, cabbage, BBQ sauce, potato roll'
            ],
            [
                'Crispy Chicken Sandwich',
                16,
                'Buttermilk-fried chicken with shredded lettuce and lemon-pepper mayo.',
                'Chicken, buttermilk, lettuce, lemon mayo, brioche'
            ]
        ]
    },
    {
        category: 'Steaks',
        image: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$images$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["images"].steak,
        items: [
            [
                'Oak-Fired Ribeye',
                38,
                'A beautifully marbled 12 oz ribeye, kissed by oak fire and finished with herb butter.',
                '12 oz beef ribeye, rosemary, garlic, butter, sea salt',
                'Gluten-friendly'
            ],
            [
                'New York Strip',
                36,
                'A bold 12 oz strip steak with a peppercorn crust and red wine jus.',
                '12 oz strip steak, black pepper, red wine jus, butter',
                'Gluten-friendly'
            ],
            [
                'Filet Mignon',
                44,
                'Tender 8 oz center-cut filet served with silky potato purée and shallot butter.',
                '8 oz beef tenderloin, potato, shallot, butter',
                'Gluten-friendly'
            ],
            [
                'Steak Frites',
                29,
                'Sliced hanger steak, crisp golden fries and our signature green peppercorn sauce.',
                'Hanger steak, potatoes, peppercorns, cream'
            ],
            [
                'Garlic Butter Sirloin',
                28,
                'A 10 oz sirloin with roasted garlic butter and seasonal grilled vegetables.',
                '10 oz sirloin, garlic, butter, seasonal vegetables',
                'Gluten-friendly'
            ]
        ]
    },
    {
        category: 'Chicken',
        image: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$images$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["images"].chicken,
        items: [
            [
                'Herb Grilled Chicken',
                23,
                'Juicy chicken breast with garden herbs, charred lemon and roasted potatoes.',
                'Chicken, rosemary, thyme, lemon, potatoes',
                'Gluten-friendly'
            ],
            [
                'Nashville Hot Chicken',
                24,
                'Crispy hot chicken over white bread, with pickles and creamy slaw.',
                'Chicken, cayenne, white bread, cabbage, pickles',
                '',
                3
            ],
            [
                'Chicken Parmesan',
                25,
                'Golden chicken cutlet baked with mozzarella, basil and house marinara.',
                'Chicken, breadcrumbs, mozzarella, tomato, basil'
            ],
            [
                'BBQ Half Chicken',
                26,
                'Oak-roasted half chicken lacquered with sweet, smoky barbecue sauce.',
                'Half chicken, BBQ sauce, corn, cabbage'
            ]
        ]
    },
    {
        category: 'BBQ & Grill',
        image: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$images$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["images"].grill,
        items: [
            [
                'Smoked Beef Brisket',
                29,
                'Fourteen-hour smoked brisket with a dark pepper bark and house pickles.',
                'Beef brisket, black pepper, oak smoke, pickles',
                'Gluten-friendly'
            ],
            [
                'BBQ Pork Ribs',
                32,
                'Fall-apart pork ribs glazed with molasses barbecue sauce and served with slaw.',
                'Pork ribs, molasses, BBQ sauce, cabbage'
            ],
            [
                'Mixed Grill',
                39,
                'The best of the fire: steak, chicken and sausage with chimichurri.',
                'Steak, chicken, sausage, parsley, garlic, olive oil'
            ],
            [
                'Grilled Lamb Chops',
                37,
                'Rosemary-marinated lamb chops with minted yogurt and grilled greens.',
                'Lamb, rosemary, mint, yogurt, seasonal greens',
                'Gluten-friendly'
            ],
            [
                'Smoked BBQ Feast',
                24.99,
                'Our weekend favorite: a BBQ burger, four wings, loaded fries and house lemonade.',
                'Beef, brioche, chicken wings, potatoes, cheddar, lemon',
                '',
                1
            ]
        ]
    },
    {
        category: 'Pizza',
        image: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$images$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["images"].pizza,
        items: [
            [
                'Wood-Fired Margherita',
                17,
                'Blistered crust, San Marzano tomatoes, fresh mozzarella and fragrant basil.',
                'Pizza dough, San Marzano tomato, mozzarella, basil, olive oil',
                'Vegetarian'
            ],
            [
                'Classic Pepperoni',
                19,
                'Crisp-edged pepperoni over mozzarella and our slow-cooked tomato sauce.',
                'Pizza dough, pepperoni, mozzarella, tomato'
            ],
            [
                'BBQ Chicken Pizza',
                21,
                'Smoked chicken, red onion and cilantro over a sweet barbecue base.',
                'Pizza dough, chicken, red onion, cilantro, BBQ sauce, mozzarella'
            ],
            [
                'Meat Lovers',
                23,
                'Pepperoni, Italian sausage and smoked bacon on a rich tomato base.',
                'Pizza dough, pepperoni, sausage, bacon, tomato, mozzarella'
            ],
            [
                'Wild Mushroom Pizza',
                21,
                'Roasted woodland mushrooms, creamy ricotta and fresh thyme.',
                'Pizza dough, mushrooms, ricotta, mozzarella, thyme',
                'Vegetarian'
            ],
            [
                'Hot Honey Pepperoni',
                21,
                'Our classic pepperoni finished with chili-infused honey and fresh oregano.',
                'Pizza dough, pepperoni, mozzarella, chili honey, oregano',
                '',
                2
            ]
        ]
    },
    {
        category: 'Pasta',
        image: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$images$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["images"].pasta,
        items: [
            [
                'Fettuccine Alfredo',
                20,
                'Ribbon pasta tossed in a silky Parmesan cream with cracked black pepper.',
                'Fettuccine, Parmesan, cream, butter, black pepper',
                'Vegetarian'
            ],
            [
                'Spicy Penne Arrabbiata',
                19,
                'Penne with slow-cooked tomatoes, roasted garlic and a generous chili kick.',
                'Penne, tomato, garlic, chili, parsley',
                'Vegan',
                2
            ],
            [
                'Shrimp Linguine',
                26,
                'Sautéed shrimp and linguine in a bright white wine, garlic and lemon sauce.',
                'Shrimp, linguine, white wine, garlic, lemon, butter'
            ],
            [
                'Chicken Parmesan Pasta',
                25,
                'Crisp Parmesan chicken over spaghetti with basil-rich tomato sauce.',
                'Chicken, spaghetti, Parmesan, mozzarella, tomato, basil'
            ],
            [
                'Truffle Mushroom Pasta',
                24,
                'Tender pasta with woodland mushrooms, Parmesan and a touch of truffle.',
                'Pasta, mushrooms, cream, Parmesan, truffle oil',
                'Vegetarian'
            ]
        ]
    },
    {
        category: 'Seafood',
        image: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$images$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["images"].salmon,
        items: [
            [
                'Grilled Atlantic Salmon',
                29,
                'Flame-grilled salmon with lemon butter, seasonal greens and wild rice.',
                'Salmon, lemon, butter, seasonal greens, wild rice',
                'Gluten-friendly'
            ],
            [
                'Garlic Butter Shrimp',
                27,
                'Skillet-seared shrimp in garlic butter, with warm bread for every last drop.',
                'Shrimp, garlic, butter, parsley, sourdough'
            ],
            [
                'Fish & Chips',
                23,
                'Crisp beer-battered cod, hand-cut fries and house-made tartar sauce.',
                'Cod, beer batter, potatoes, tartar sauce, lemon'
            ],
            [
                'Blackened Mahi Mahi',
                28,
                'Cajun-spiced mahi mahi with sweet corn relish and cilantro rice.',
                'Mahi mahi, Cajun spices, corn, cilantro, rice',
                'Gluten-friendly',
                2
            ]
        ]
    },
    {
        category: 'Salads',
        image: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$images$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["images"].salad,
        items: [
            [
                'Caesar Salad',
                13,
                'Crisp romaine, shaved Parmesan and sourdough croutons with classic Caesar dressing.',
                'Romaine, Parmesan, sourdough, anchovy dressing'
            ],
            [
                'Grilled Chicken Caesar',
                18,
                'Our classic Caesar topped with warm herb-grilled chicken.',
                'Chicken, romaine, Parmesan, sourdough, anchovy dressing'
            ],
            [
                'Southwest Salad',
                16,
                'Crunchy greens, black beans, roasted corn and avocado with lime dressing.',
                'Greens, black beans, corn, avocado, lime',
                'Vegan'
            ],
            [
                'Steakhouse Wedge',
                15,
                'Iceberg lettuce with blue cheese, crisp bacon and cherry tomatoes.',
                'Iceberg lettuce, blue cheese, bacon, tomato',
                'Gluten-friendly'
            ],
            [
                'Harvest Salad',
                16,
                'Seasonal greens, roasted squash, apple and toasted pecans in maple vinaigrette.',
                'Greens, squash, apple, pecans, maple vinaigrette',
                'Vegan'
            ]
        ]
    },
    {
        category: 'Bowls',
        image: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$images$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["images"].salad,
        items: [
            [
                'Grilled Chicken Bowl',
                19,
                'Herb-grilled chicken, brown rice, roasted vegetables and lemon tahini.',
                'Chicken, brown rice, seasonal vegetables, sesame, lemon'
            ],
            [
                'Steak Power Bowl',
                23,
                'Sliced steak over quinoa with avocado, greens and chimichurri.',
                'Steak, quinoa, avocado, greens, chimichurri',
                'Gluten-friendly'
            ],
            [
                'Teriyaki Salmon Bowl',
                24,
                'Glazed salmon with steamed rice, edamame, cucumber and sesame.',
                'Salmon, rice, edamame, cucumber, soy sauce, sesame'
            ]
        ]
    },
    {
        category: 'Sides',
        image: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$images$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["images"].fries,
        items: [
            [
                'Truffle Fries',
                8,
                'Golden fries tossed with truffle oil, Parmesan and parsley.',
                'Potatoes, truffle oil, Parmesan, parsley',
                'Vegetarian'
            ],
            [
                'Sweet Potato Fries',
                7,
                'Crisp sweet potato fries with a smoky chipotle dipping sauce.',
                'Sweet potatoes, chipotle, mayonnaise',
                'Vegetarian',
                1
            ],
            [
                'Onion Rings',
                7,
                'Thick-cut sweet onions in a light, crunchy beer batter.',
                'Onion, flour, beer, sea salt',
                'Vegan'
            ],
            [
                'Mac & Cheese',
                8,
                'Tender macaroni in a three-cheese sauce with toasted breadcrumbs.',
                'Macaroni, cheddar, Gruyère, Parmesan, breadcrumbs',
                'Vegetarian'
            ],
            [
                'Garlic Mashed Potatoes',
                7,
                'Buttery Yukon Gold potatoes whipped with slow-roasted garlic.',
                'Yukon Gold potatoes, garlic, butter, cream',
                'Vegetarian'
            ],
            [
                'Grilled Vegetables',
                7,
                'Seasonal vegetables straight from the grill, with olive oil and sea salt.',
                'Zucchini, peppers, broccoli, olive oil, sea salt',
                'Vegan'
            ]
        ]
    },
    {
        category: 'Kids',
        image: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$images$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["images"].burger,
        items: [
            [
                'Kids Cheeseburger',
                9,
                'A little grilled beef burger with American cheese and a side of fries.',
                'Beef, American cheese, bun, potatoes'
            ],
            [
                'Chicken Tenders',
                9,
                'Crispy chicken strips with fries and honey mustard for dipping.',
                'Chicken, breadcrumbs, potatoes, honey mustard'
            ],
            [
                'Kids Mac & Cheese',
                8,
                'A small bowl of creamy cheddar macaroni, made for little appetites.',
                'Macaroni, cheddar, milk, butter',
                'Vegetarian'
            ]
        ]
    },
    {
        category: 'Desserts',
        image: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$images$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["images"].dessert,
        items: [
            [
                'New York Cheesecake',
                10,
                'Classic baked vanilla cheesecake with a buttery biscuit crust and berry compote.',
                'Cream cheese, vanilla, eggs, biscuit, berries',
                'Vegetarian'
            ],
            [
                'Chocolate Lava Cake',
                11,
                'Warm dark chocolate cake with a molten center and vanilla bean ice cream.',
                'Dark chocolate, butter, eggs, flour, vanilla ice cream',
                'Vegetarian'
            ],
            [
                'Tiramisu',
                10,
                'Espresso-soaked ladyfingers layered with mascarpone and dusted with cocoa.',
                'Espresso, ladyfingers, mascarpone, egg, cocoa',
                'Vegetarian'
            ],
            [
                'Skillet Cookie',
                11,
                'A warm chocolate chunk cookie baked in cast iron, with vanilla ice cream.',
                'Flour, butter, egg, chocolate, vanilla ice cream',
                'Vegetarian'
            ],
            [
                'Vanilla Bean Ice Cream',
                6,
                'Two scoops of real vanilla bean ice cream with caramel sauce.',
                'Cream, milk, vanilla, sugar, caramel',
                'Vegetarian'
            ]
        ]
    },
    {
        category: 'Soft Drinks',
        image: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$images$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["images"].drink,
        items: [
            [
                'House Lemonade',
                5,
                'Fresh-squeezed lemons and just enough sweetness, served over ice.',
                'Lemon, cane sugar, water',
                'Vegan'
            ],
            [
                'Craft Cola',
                4,
                'Classic cane-sugar cola served ice cold with a slice of lime.',
                'Cola, lime',
                'Vegan'
            ],
            [
                'Sparkling Water',
                4,
                'Chilled sparkling mineral water with a fresh citrus twist.',
                'Mineral water, lemon',
                'Vegan'
            ]
        ]
    },
    {
        category: 'Coffee & Tea',
        image: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$images$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["images"].coffee,
        items: [
            [
                'Oak House Coffee',
                4,
                'Freshly brewed medium-roast coffee with notes of chocolate and toasted nuts.',
                'Arabica coffee, water',
                'Vegan'
            ],
            [
                'Flat White',
                5,
                'A double espresso with velvety steamed milk and fine microfoam.',
                'Espresso, milk',
                'Vegetarian'
            ],
            [
                'Peach Iced Tea',
                5,
                'Slow-steeped black tea with peach nectar and fresh mint.',
                'Black tea, peach, mint, cane sugar',
                'Vegan'
            ]
        ]
    },
    {
        category: 'Mocktails',
        image: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$images$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["images"].drink,
        items: [
            [
                'Smoked Citrus Spritz',
                9,
                'Charred orange, rosemary syrup and sparkling water over plenty of ice.',
                'Orange, rosemary, cane sugar, sparkling water',
                'Vegan'
            ],
            [
                'Blackberry Mule',
                9,
                'Muddled blackberries, fresh lime and spicy ginger beer. Zero proof, full character.',
                'Blackberry, lime, ginger beer',
                'Vegan'
            ],
            [
                'Garden Cooler',
                8,
                'Cucumber, mint and lime topped with tonic for a crisp, refreshing finish.',
                'Cucumber, mint, lime, tonic',
                'Vegan'
            ]
        ]
    }
];
const featuredNames = [
    'Ember Classic',
    'Oak-Fired Ribeye',
    'Wood-Fired Margherita',
    'Truffle Mushroom Pasta'
];
const menuItems = groups.flatMap((group)=>group.items.map(([name, price, description, ingredients, tags = '', spice = 0])=>{
        const slug = name.toLowerCase().replace(/&/g, 'and').replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
        return {
            id: slug,
            slug,
            name,
            price,
            description,
            category: group.category,
            image: name === 'Smoked BBQ Feast' ? __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$images$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["images"].feast : group.image,
            ingredients: ingredients.split(', '),
            dietaryTags: tags ? [
                tags
            ] : [],
            spicyLevel: spice,
            featured: featuredNames.includes(name),
            popular: [
                'Ember Classic',
                'Fire Roasted Wings',
                'Smokehouse BBQ Burger',
                'Chocolate Lava Cake'
            ].includes(name)
        };
    }));
const featuredItems = menuItems.filter((item)=>item.featured);
const money = (value)=>new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
        minimumFractionDigits: 2
    }).format(value);
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=src_1y1fhgw._.js.map