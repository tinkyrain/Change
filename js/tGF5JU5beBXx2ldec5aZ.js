! function(e) {
    var t = {};

    function n(r) {
        if (t[r]) return t[r].exports;
        var o = t[r] = {
            i: r,
            l: !2,
            exports: {}
        };
        return e[r].call(o.exports, o, o.exports, n), o.l = !0, o.exports
    }
    n.m = e, n.c = t, n.d = function(e, t, r) {
        n.o(e, t) || Object.defineProperty(e, t, {
            enumerable: !0,
            get: r
        })
    }, n.r = function(e) {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
            value: "Module"
        }), Object.defineProperty(e, "__esModule", {
            value: !0
        })
    }, n.t = function(e, t) {
        if (1 & t && (e = n(e)), 8 & t) return e;
        if (4 & t && "object" == typeof e && e && e.__esModule) return e;
        var r = Object.create(null);
        if (n.r(r), Object.defineProperty(r, "default", {
                enumerable: !0,
                value: e
            }), 2 & t && "string" != typeof e)
            for (var o in e) n.d(r, o, function(t) {
                return e[t]
            }.bind(null, o));
        return r
    }, n.n = function(e) {
        var t = e && e.__esModule ? function() {
            return e.default
        } : function() {
            return e
        };
        return n.d(t, "a", t), t
    }, n.o = function(e, t) {
        return Object.prototype.hasOwnProperty.call(e, t)
    }, n.p = "", n(n.s = 20)
}([function(e, t) {
    e.exports = function(e, t) {
        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
    }
}, function(e, t) {
    function n(e, t) {
        for (var n = 0; n < t.length; n++) {
            var r = t[n];
            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
        }
    }
    e.exports = function(e, t, r) {
        return t && n(e.prototype, t), r && n(e, r), e
    }
}, function(e, t, n) {
    var r = n(0),
        o = n(1),
        i = (n(43), n(44)),
        a = function() {
            "use strict";

            function e() {
                r(this, e)
            }
            return o(e, null, [{
                key: "translate",
                value: function(e) {
                    var t = language;
                    return i[e] && i[e][t] ? i[e][t] : e
                }
            }]), e
        }();
    e.exports = a
}, function(e, t) {
    e.exports = function(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n, e
    }
}, function(e, t, n) {
    "use strict";
    var r = n(11),
        o = Object.prototype.toString;

    function i(e) {
        return "[object Array]" === o.call(e)
    }

    function a(e) {
        return void 0 === e
    }

    function s(e) {
        return null !== e && "object" == typeof e
    }

    function u(e) {
        return "[object Function]" === o.call(e)
    }

    function c(e, t) {
        if (null != e)
            if ("object" != typeof e && (e = [e]), i(e))
                for (var n = 0, r = e.length; n < r; n++) t.call(null, e[n], n, e);
            else
                for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && t.call(null, e[o], o, e)
    }
    e.exports = {
        isArray: i,
        isArrayBuffer: function(e) {
            return "[object ArrayBuffer]" === o.call(e)
        },
        isBuffer: function(e) {
            return null !== e && !a(e) && null !== e.constructor && !a(e.constructor) && "function" == typeof e.constructor.isBuffer && e.constructor.isBuffer(e)
        },
        isFormData: function(e) {
            return "undefined" != typeof FormData && e instanceof FormData
        },
        isArrayBufferView: function(e) {
            return "undefined" != typeof ArrayBuffer && ArrayBuffer.isView ? ArrayBuffer.isView(e) : e && e.buffer && e.buffer instanceof ArrayBuffer
        },
        isString: function(e) {
            return "string" == typeof e
        },
        isNumber: function(e) {
            return "number" == typeof e
        },
        isObject: s,
        isUndefined: a,
        isDate: function(e) {
            return "[object Date]" === o.call(e)
        },
        isFile: function(e) {
            return "[object File]" === o.call(e)
        },
        isBlob: function(e) {
            return "[object Blob]" === o.call(e)
        },
        isFunction: u,
        isStream: function(e) {
            return s(e) && u(e.pipe)
        },
        isURLSearchParams: function(e) {
            return "undefined" != typeof URLSearchParams && e instanceof URLSearchParams
        },
        isStandardBrowserEnv: function() {
            return ("undefined" == typeof navigator || "ReactNative" !== navigator.product && "NativeScript" !== navigator.product && "NS" !== navigator.product) && ("undefined" != typeof window && "undefined" != typeof document)
        },
        forEach: c,
        merge: function e() {
            var t = {};

            function n(n, r) {
                "object" == typeof t[r] && "object" == typeof n ? t[r] = e(t[r], n) : t[r] = n
            }
            for (var r = 0, o = arguments.length; r < o; r++) c(arguments[r], n);
            return t
        },
        deepMerge: function e() {
            var t = {};

            function n(n, r) {
                "object" == typeof t[r] && "object" == typeof n ? t[r] = e(t[r], n) : t[r] = "object" == typeof n ? e({}, n) : n
            }
            for (var r = 0, o = arguments.length; r < o; r++) c(arguments[r], n);
            return t
        },
        extend: function(e, t, n) {
            return c(t, (function(t, o) {
                e[o] = n && "function" == typeof t ? r(t, n) : t
            })), e
        },
        trim: function(e) {
            return e.replace(/^\s*/, "").replace(/\s*$/, "")
        }
    }
}, function(e, t, n) {
    var r;
    /*!
     * jQuery JavaScript Library v3.5.1
     * https://jquery.com/
     *
     * Includes Sizzle.js
     * https://sizzlejs.com/
     *
     * Copyright JS Foundation and other contributors
     * Released under the MIT license
     * https://jquery.org/license
     *
     * Date: 2020-05-04T22:49Z
     */
    ! function(t, n) {
        "use strict";
        "object" == typeof e.exports ? e.exports = t.document ? n(t, !0) : function(e) {
            if (!e.document) throw new Error("jQuery requires a window with a document");
            return n(e)
        } : n(t)
    }("undefined" != typeof window ? window : this, (function(n, o) {
        "use strict";
        var i = [],
            a = Object.getPrototypeOf,
            s = i.slice,
            u = i.flat ? function(e) {
                return i.flat.call(e)
            } : function(e) {
                return i.concat.apply([], e)
            },
            c = i.push,
            l = i.indexOf,
            d = {},
            f = d.toString,
            p = d.hasOwnProperty,
            h = p.toString,
            m = h.call(Object),
            v = {},
            g = function(e) {
                return "function" == typeof e && "number" != typeof e.nodeType
            },
            y = function(e) {
                return null != e && e === e.window
            },
            w = n.document,
            b = {
                type: !0,
                src: !0,
                nonce: !0,
                noModule: !0
            };

        function x(e, t, n) {
            var r, o, i = (n = n || w).createElement("script");
            if (i.text = e, t)
                for (r in b)(o = t[r] || t.getAttribute && t.getAttribute(r)) && i.setAttribute(r, o);
            n.head.appendChild(i).parentNode.removeChild(i)
        }

        function k(e) {
            return null == e ? e + "" : "object" == typeof e || "function" == typeof e ? d[f.call(e)] || "object" : typeof e
        }
        var C = function(e, t) {
            return new C.fn.init(e, t)
        };

        function S(e) {
            var t = !!e && "length" in e && e.length,
                n = k(e);
            return !g(e) && !y(e) && ("array" === n || 0 === t || "number" == typeof t && t > 0 && t - 1 in e)
        }
        C.fn = C.prototype = {
            jquery: "3.5.1",
            constructor: C,
            length: 0,
            toArray: function() {
                return s.call(this)
            },
            get: function(e) {
                return null == e ? s.call(this) : e < 0 ? this[e + this.length] : this[e]
            },
            pushStack: function(e) {
                var t = C.merge(this.constructor(), e);
                return t.prevObject = this, t
            },
            each: function(e) {
                return C.each(this, e)
            },
            map: function(e) {
                return this.pushStack(C.map(this, (function(t, n) {
                    return e.call(t, n, t)
                })))
            },
            slice: function() {
                return this.pushStack(s.apply(this, arguments))
            },
            first: function() {
                return this.eq(0)
            },
            last: function() {
                return this.eq(-1)
            },
            even: function() {
                return this.pushStack(C.grep(this, (function(e, t) {
                    return (t + 1) % 2
                })))
            },
            odd: function() {
                return this.pushStack(C.grep(this, (function(e, t) {
                    return t % 2
                })))
            },
            eq: function(e) {
                var t = this.length,
                    n = +e + (e < 0 ? t : 0);
                return this.pushStack(n >= 0 && n < t ? [this[n]] : [])
            },
            end: function() {
                return this.prevObject || this.constructor()
            },
            push: c,
            sort: i.sort,
            splice: i.splice
        }, C.extend = C.fn.extend = function() {
            var e, t, n, r, o, i, a = arguments[0] || {},
                s = 1,
                u = arguments.length,
                c = !1;
            for ("boolean" == typeof a && (c = a, a = arguments[s] || {}, s++), "object" == typeof a || g(a) || (a = {}), s === u && (a = this, s--); s < u; s++)
                if (null != (e = arguments[s]))
                    for (t in e) r = e[t], "__proto__" !== t && a !== r && (c && r && (C.isPlainObject(r) || (o = Array.isArray(r))) ? (n = a[t], i = o && !Array.isArray(n) ? [] : o || C.isPlainObject(n) ? n : {}, o = !1, a[t] = C.extend(c, i, r)) : void 0 !== r && (a[t] = r));
            return a
        }, C.extend({
            expando: "jQuery" + ("3.5.1" + Math.random()).replace(/\D/g, ""),
            isReady: !0,
            error: function(e) {
                throw new Error(e)
            },
            noop: function() {},
            isPlainObject: function(e) {
                var t, n;
                return !(!e || "[object Object]" !== f.call(e)) && (!(t = a(e)) || "function" == typeof(n = p.call(t, "constructor") && t.constructor) && h.call(n) === m)
            },
            isEmptyObject: function(e) {
                var t;
                for (t in e) return !1;
                return !0
            },
            globalEval: function(e, t, n) {
                x(e, {
                    nonce: t && t.nonce
                }, n)
            },
            each: function(e, t) {
                var n, r = 0;
                if (S(e))
                    for (n = e.length; r < n && !1 !== t.call(e[r], r, e[r]); r++);
                else
                    for (r in e)
                        if (!1 === t.call(e[r], r, e[r])) break;
                return e
            },
            makeArray: function(e, t) {
                var n = t || [];
                return null != e && (S(Object(e)) ? C.merge(n, "string" == typeof e ? [e] : e) : c.call(n, e)), n
            },
            inArray: function(e, t, n) {
                return null == t ? -1 : l.call(t, e, n)
            },
            merge: function(e, t) {
                for (var n = +t.length, r = 0, o = e.length; r < n; r++) e[o++] = t[r];
                return e.length = o, e
            },
            grep: function(e, t, n) {
                for (var r = [], o = 0, i = e.length, a = !n; o < i; o++) !t(e[o], o) !== a && r.push(e[o]);
                return r
            },
            map: function(e, t, n) {
                var r, o, i = 0,
                    a = [];
                if (S(e))
                    for (r = e.length; i < r; i++) null != (o = t(e[i], i, n)) && a.push(o);
                else
                    for (i in e) null != (o = t(e[i], i, n)) && a.push(o);
                return u(a)
            },
            guid: 1,
            support: v
        }), "function" == typeof Symbol && (C.fn[Symbol.iterator] = i[Symbol.iterator]), C.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), (function(e, t) {
            d["[object " + t + "]"] = t.toLowerCase()
        }));
        var E =
            /*!
             * Sizzle CSS Selector Engine v2.3.5
             * https://sizzlejs.com/
             *
             * Copyright JS Foundation and other contributors
             * Released under the MIT license
             * https://js.foundation/
             *
             * Date: 2020-03-14
             */
            function(e) {
                var t, n, r, o, i, a, s, u, c, l, d, f, p, h, m, v, g, y, w, b = "sizzle" + 1 * new Date,
                    x = e.document,
                    k = 0,
                    C = 0,
                    S = ue(),
                    E = ue(),
                    T = ue(),
                    j = ue(),
                    _ = function(e, t) {
                        return e === t && (d = !0), 0
                    },
                    P = {}.hasOwnProperty,
                    M = [],
                    L = M.pop,
                    A = M.push,
                    q = M.push,
                    V = M.slice,
                    D = function(e, t) {
                        for (var n = 0, r = e.length; n < r; n++)
                            if (e[n] === t) return n;
                        return -1
                    },
                    N = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
                    R = "[\\x20\\t\\r\\n\\f]",
                    O = "(?:\\\\[\\da-fA-F]{1,6}" + R + "?|\\\\[^\\r\\n\\f]|[\\w-]|[^\0-\\x7f])+",
                    I = "\\[" + R + "*(" + O + ")(?:" + R + "*([*^$|!~]?=)" + R + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + O + "))|)" + R + "*\\]",
                    z = ":(" + O + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + I + ")*)|.*)\\)|)",
                    H = new RegExp(R + "+", "g"),
                    B = new RegExp("^" + R + "+|((?:^|[^\\\\])(?:\\\\.)*)" + R + "+$", "g"),
                    F = new RegExp("^" + R + "*," + R + "*"),
                    U = new RegExp("^" + R + "*([>+~]|" + R + ")" + R + "*"),
                    W = new RegExp(R + "|>"),
                    $ = new RegExp(z),
                    G = new RegExp("^" + O + "$"),
                    X = {
                        ID: new RegExp("^#(" + O + ")"),
                        CLASS: new RegExp("^\\.(" + O + ")"),
                        TAG: new RegExp("^(" + O + "|[*])"),
                        ATTR: new RegExp("^" + I),
                        PSEUDO: new RegExp("^" + z),
                        CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + R + "*(even|odd|(([+-]|)(\\d*)n|)" + R + "*(?:([+-]|)" + R + "*(\\d+)|))" + R + "*\\)|)", "i"),
                        bool: new RegExp("^(?:" + N + ")$", "i"),
                        needsContext: new RegExp("^" + R + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + R + "*((?:-\\d)?\\d*)" + R + "*\\)|)(?=[^-]|$)", "i")
                    },
                    J = /HTML$/i,
                    Y = /^(?:input|select|textarea|button)$/i,
                    Q = /^h\d$/i,
                    Z = /^[^{]+\{\s*\[native \w/,
                    K = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
                    ee = /[+~]/,
                    te = new RegExp("\\\\[\\da-fA-F]{1,6}" + R + "?|\\\\([^\\r\\n\\f])", "g"),
                    ne = function(e, t) {
                        var n = "0x" + e.slice(1) - 65536;
                        return t || (n < 0 ? String.fromCharCode(n + 65536) : String.fromCharCode(n >> 10 | 55296, 1023 & n | 56320))
                    },
                    re = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,
                    oe = function(e, t) {
                        return t ? "\0" === e ? "�" : e.slice(0, -1) + "\\" + e.charCodeAt(e.length - 1).toString(16) + " " : "\\" + e
                    },
                    ie = function() {
                        f()
                    },
                    ae = be((function(e) {
                        return !0 === e.disabled && "fieldset" === e.nodeName.toLowerCase()
                    }), {
                        dir: "parentNode",
                        next: "legend"
                    });
                try {
                    q.apply(M = V.call(x.childNodes), x.childNodes), M[x.childNodes.length].nodeType
                } catch (e) {
                    q = {
                        apply: M.length ? function(e, t) {
                            A.apply(e, V.call(t))
                        } : function(e, t) {
                            for (var n = e.length, r = 0; e[n++] = t[r++];);
                            e.length = n - 1
                        }
                    }
                }

                function se(e, t, r, o) {
                    var i, s, c, l, d, h, g, y = t && t.ownerDocument,
                        x = t ? t.nodeType : 9;
                    if (r = r || [], "string" != typeof e || !e || 1 !== x && 9 !== x && 11 !== x) return r;
                    if (!o && (f(t), t = t || p, m)) {
                        if (11 !== x && (d = K.exec(e)))
                            if (i = d[1]) {
                                if (9 === x) {
                                    if (!(c = t.getElementById(i))) return r;
                                    if (c.id === i) return r.push(c), r
                                } else if (y && (c = y.getElementById(i)) && w(t, c) && c.id === i) return r.push(c), r
                            } else {
                                if (d[2]) return q.apply(r, t.getElementsByTagName(e)), r;
                                if ((i = d[3]) && n.getElementsByClassName && t.getElementsByClassName) return q.apply(r, t.getElementsByClassName(i)), r
                            } if (n.qsa && !j[e + " "] && (!v || !v.test(e)) && (1 !== x || "object" !== t.nodeName.toLowerCase())) {
                            if (g = e, y = t, 1 === x && (W.test(e) || U.test(e))) {
                                for ((y = ee.test(e) && ge(t.parentNode) || t) === t && n.scope || ((l = t.getAttribute("id")) ? l = l.replace(re, oe) : t.setAttribute("id", l = b)), s = (h = a(e)).length; s--;) h[s] = (l ? "#" + l : ":scope") + " " + we(h[s]);
                                g = h.join(",")
                            }
                            try {
                                return q.apply(r, y.querySelectorAll(g)), r
                            } catch (t) {
                                j(e, !0)
                            } finally {
                                l === b && t.removeAttribute("id")
                            }
                        }
                    }
                    return u(e.replace(B, "$1"), t, r, o)
                }

                function ue() {
                    var e = [];
                    return function t(n, o) {
                        return e.push(n + " ") > r.cacheLength && delete t[e.shift()], t[n + " "] = o
                    }
                }

                function ce(e) {
                    return e[b] = !0, e
                }

                function le(e) {
                    var t = p.createElement("fieldset");
                    try {
                        return !!e(t)
                    } catch (e) {
                        return !1
                    } finally {
                        t.parentNode && t.parentNode.removeChild(t), t = null
                    }
                }

                function de(e, t) {
                    for (var n = e.split("|"), o = n.length; o--;) r.attrHandle[n[o]] = t
                }

                function fe(e, t) {
                    var n = t && e,
                        r = n && 1 === e.nodeType && 1 === t.nodeType && e.sourceIndex - t.sourceIndex;
                    if (r) return r;
                    if (n)
                        for (; n = n.nextSibling;)
                            if (n === t) return -1;
                    return e ? 1 : -1
                }

                function pe(e) {
                    return function(t) {
                        return "input" === t.nodeName.toLowerCase() && t.type === e
                    }
                }

                function he(e) {
                    return function(t) {
                        var n = t.nodeName.toLowerCase();
                        return ("input" === n || "button" === n) && t.type === e
                    }
                }

                function me(e) {
                    return function(t) {
                        return "form" in t ? t.parentNode && !1 === t.disabled ? "label" in t ? "label" in t.parentNode ? t.parentNode.disabled === e : t.disabled === e : t.isDisabled === e || t.isDisabled !== !e && ae(t) === e : t.disabled === e : "label" in t && t.disabled === e
                    }
                }

                function ve(e) {
                    return ce((function(t) {
                        return t = +t, ce((function(n, r) {
                            for (var o, i = e([], n.length, t), a = i.length; a--;) n[o = i[a]] && (n[o] = !(r[o] = n[o]))
                        }))
                    }))
                }

                function ge(e) {
                    return e && void 0 !== e.getElementsByTagName && e
                }
                for (t in n = se.support = {}, i = se.isXML = function(e) {
                        var t = e.namespaceURI,
                            n = (e.ownerDocument || e).documentElement;
                        return !J.test(t || n && n.nodeName || "HTML")
                    }, f = se.setDocument = function(e) {
                        var t, o, a = e ? e.ownerDocument || e : x;
                        return a != p && 9 === a.nodeType && a.documentElement ? (h = (p = a).documentElement, m = !i(p), x != p && (o = p.defaultView) && o.top !== o && (o.addEventListener ? o.addEventListener("unload", ie, !1) : o.attachEvent && o.attachEvent("onunload", ie)), n.scope = le((function(e) {
                            return h.appendChild(e).appendChild(p.createElement("div")), void 0 !== e.querySelectorAll && !e.querySelectorAll(":scope fieldset div").length
                        })), n.attributes = le((function(e) {
                            return e.className = "i", !e.getAttribute("className")
                        })), n.getElementsByTagName = le((function(e) {
                            return e.appendChild(p.createComment("")), !e.getElementsByTagName("*").length
                        })), n.getElementsByClassName = Z.test(p.getElementsByClassName), n.getById = le((function(e) {
                            return h.appendChild(e).id = b, !p.getElementsByName || !p.getElementsByName(b).length
                        })), n.getById ? (r.filter.ID = function(e) {
                            var t = e.replace(te, ne);
                            return function(e) {
                                return e.getAttribute("id") === t
                            }
                        }, r.find.ID = function(e, t) {
                            if (void 0 !== t.getElementById && m) {
                                var n = t.getElementById(e);
                                return n ? [n] : []
                            }
                        }) : (r.filter.ID = function(e) {
                            var t = e.replace(te, ne);
                            return function(e) {
                                var n = void 0 !== e.getAttributeNode && e.getAttributeNode("id");
                                return n && n.value === t
                            }
                        }, r.find.ID = function(e, t) {
                            if (void 0 !== t.getElementById && m) {
                                var n, r, o, i = t.getElementById(e);
                                if (i) {
                                    if ((n = i.getAttributeNode("id")) && n.value === e) return [i];
                                    for (o = t.getElementsByName(e), r = 0; i = o[r++];)
                                        if ((n = i.getAttributeNode("id")) && n.value === e) return [i]
                                }
                                return []
                            }
                        }), r.find.TAG = n.getElementsByTagName ? function(e, t) {
                            return void 0 !== t.getElementsByTagName ? t.getElementsByTagName(e) : n.qsa ? t.querySelectorAll(e) : void 0
                        } : function(e, t) {
                            var n, r = [],
                                o = 0,
                                i = t.getElementsByTagName(e);
                            if ("*" === e) {
                                for (; n = i[o++];) 1 === n.nodeType && r.push(n);
                                return r
                            }
                            return i
                        }, r.find.CLASS = n.getElementsByClassName && function(e, t) {
                            if (void 0 !== t.getElementsByClassName && m) return t.getElementsByClassName(e)
                        }, g = [], v = [], (n.qsa = Z.test(p.querySelectorAll)) && (le((function(e) {
                            var t;
                            h.appendChild(e).innerHTML = "<a id='" + b + "'></a><select id='" + b + "-\r\\' msallowcapture=''><option selected=''></option></select>", e.querySelectorAll("[msallowcapture^='']").length && v.push("[*^$]=" + R + "*(?:''|\"\")"), e.querySelectorAll("[selected]").length || v.push("\\[" + R + "*(?:value|" + N + ")"), e.querySelectorAll("[id~=" + b + "-]").length || v.push("~="), (t = p.createElement("input")).setAttribute("name", ""), e.appendChild(t), e.querySelectorAll("[name='']").length || v.push("\\[" + R + "*name" + R + "*=" + R + "*(?:''|\"\")"), e.querySelectorAll(":checked").length || v.push(":checked"), e.querySelectorAll("a#" + b + "+*").length || v.push(".#.+[+~]"), e.querySelectorAll("\\\f"), v.push("[\\r\\n\\f]")
                        })), le((function(e) {
                            e.innerHTML = "<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";
                            var t = p.createElement("input");
                            t.setAttribute("type", "hidden"), e.appendChild(t).setAttribute("name", "D"), e.querySelectorAll("[name=d]").length && v.push("name" + R + "*[*^$|!~]?="), 2 !== e.querySelectorAll(":enabled").length && v.push(":enabled", ":disabled"), h.appendChild(e).disabled = !0, 2 !== e.querySelectorAll(":disabled").length && v.push(":enabled", ":disabled"), e.querySelectorAll("*,:x"), v.push(",.*:")
                        }))), (n.matchesSelector = Z.test(y = h.matches || h.webkitMatchesSelector || h.mozMatchesSelector || h.oMatchesSelector || h.msMatchesSelector)) && le((function(e) {
                            n.disconnectedMatch = y.call(e, "*"), y.call(e, "[s!='']:x"), g.push("!=", z)
                        })), v = v.length && new RegExp(v.join("|")), g = g.length && new RegExp(g.join("|")), t = Z.test(h.compareDocumentPosition), w = t || Z.test(h.contains) ? function(e, t) {
                            var n = 9 === e.nodeType ? e.documentElement : e,
                                r = t && t.parentNode;
                            return e === r || !(!r || 1 !== r.nodeType || !(n.contains ? n.contains(r) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(r)))
                        } : function(e, t) {
                            if (t)
                                for (; t = t.parentNode;)
                                    if (t === e) return !0;
                            return !1
                        }, _ = t ? function(e, t) {
                            if (e === t) return d = !0, 0;
                            var r = !e.compareDocumentPosition - !t.compareDocumentPosition;
                            return r || (1 & (r = (e.ownerDocument || e) == (t.ownerDocument || t) ? e.compareDocumentPosition(t) : 1) || !n.sortDetached && t.compareDocumentPosition(e) === r ? e == p || e.ownerDocument == x && w(x, e) ? -1 : t == p || t.ownerDocument == x && w(x, t) ? 1 : l ? D(l, e) - D(l, t) : 0 : 4 & r ? -1 : 1)
                        } : function(e, t) {
                            if (e === t) return d = !0, 0;
                            var n, r = 0,
                                o = e.parentNode,
                                i = t.parentNode,
                                a = [e],
                                s = [t];
                            if (!o || !i) return e == p ? -1 : t == p ? 1 : o ? -1 : i ? 1 : l ? D(l, e) - D(l, t) : 0;
                            if (o === i) return fe(e, t);
                            for (n = e; n = n.parentNode;) a.unshift(n);
                            for (n = t; n = n.parentNode;) s.unshift(n);
                            for (; a[r] === s[r];) r++;
                            return r ? fe(a[r], s[r]) : a[r] == x ? -1 : s[r] == x ? 1 : 0
                        }, p) : p
                    }, se.matches = function(e, t) {
                        return se(e, null, null, t)
                    }, se.matchesSelector = function(e, t) {
                        if (f(e), n.matchesSelector && m && !j[t + " "] && (!g || !g.test(t)) && (!v || !v.test(t))) try {
                            var r = y.call(e, t);
                            if (r || n.disconnectedMatch || e.document && 11 !== e.document.nodeType) return r
                        } catch (e) {
                            j(t, !0)
                        }
                        return se(t, p, null, [e]).length > 0
                    }, se.contains = function(e, t) {
                        return (e.ownerDocument || e) != p && f(e), w(e, t)
                    }, se.attr = function(e, t) {
                        (e.ownerDocument || e) != p && f(e);
                        var o = r.attrHandle[t.toLowerCase()],
                            i = o && P.call(r.attrHandle, t.toLowerCase()) ? o(e, t, !m) : void 0;
                        return void 0 !== i ? i : n.attributes || !m ? e.getAttribute(t) : (i = e.getAttributeNode(t)) && i.specified ? i.value : null
                    }, se.escape = function(e) {
                        return (e + "").replace(re, oe)
                    }, se.error = function(e) {
                        throw new Error("Syntax error, unrecognized expression: " + e)
                    }, se.uniqueSort = function(e) {
                        var t, r = [],
                            o = 0,
                            i = 0;
                        if (d = !n.detectDuplicates, l = !n.sortStable && e.slice(0), e.sort(_), d) {
                            for (; t = e[i++];) t === e[i] && (o = r.push(i));
                            for (; o--;) e.splice(r[o], 1)
                        }
                        return l = null, e
                    }, o = se.getText = function(e) {
                        var t, n = "",
                            r = 0,
                            i = e.nodeType;
                        if (i) {
                            if (1 === i || 9 === i || 11 === i) {
                                if ("string" == typeof e.textContent) return e.textContent;
                                for (e = e.firstChild; e; e = e.nextSibling) n += o(e)
                            } else if (3 === i || 4 === i) return e.nodeValue
                        } else
                            for (; t = e[r++];) n += o(t);
                        return n
                    }, (r = se.selectors = {
                        cacheLength: 50,
                        createPseudo: ce,
                        match: X,
                        attrHandle: {},
                        find: {},
                        relative: {
                            ">": {
                                dir: "parentNode",
                                first: !0
                            },
                            " ": {
                                dir: "parentNode"
                            },
                            "+": {
                                dir: "previousSibling",
                                first: !0
                            },
                            "~": {
                                dir: "previousSibling"
                            }
                        },
                        preFilter: {
                            ATTR: function(e) {
                                return e[1] = e[1].replace(te, ne), e[3] = (e[3] || e[4] || e[5] || "").replace(te, ne), "~=" === e[2] && (e[3] = " " + e[3] + " "), e.slice(0, 4)
                            },
                            CHILD: function(e) {
                                return e[1] = e[1].toLowerCase(), "nth" === e[1].slice(0, 3) ? (e[3] || se.error(e[0]), e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ("even" === e[3] || "odd" === e[3])), e[5] = +(e[7] + e[8] || "odd" === e[3])) : e[3] && se.error(e[0]), e
                            },
                            PSEUDO: function(e) {
                                var t, n = !e[6] && e[2];
                                return X.CHILD.test(e[0]) ? null : (e[3] ? e[2] = e[4] || e[5] || "" : n && $.test(n) && (t = a(n, !0)) && (t = n.indexOf(")", n.length - t) - n.length) && (e[0] = e[0].slice(0, t), e[2] = n.slice(0, t)), e.slice(0, 3))
                            }
                        },
                        filter: {
                            TAG: function(e) {
                                var t = e.replace(te, ne).toLowerCase();
                                return "*" === e ? function() {
                                    return !0
                                } : function(e) {
                                    return e.nodeName && e.nodeName.toLowerCase() === t
                                }
                            },
                            CLASS: function(e) {
                                var t = S[e + " "];
                                return t || (t = new RegExp("(^|" + R + ")" + e + "(" + R + "|$)")) && S(e, (function(e) {
                                    return t.test("string" == typeof e.className && e.className || void 0 !== e.getAttribute && e.getAttribute("class") || "")
                                }))
                            },
                            ATTR: function(e, t, n) {
                                return function(r) {
                                    var o = se.attr(r, e);
                                    return null == o ? "!=" === t : !t || (o += "", "=" === t ? o === n : "!=" === t ? o !== n : "^=" === t ? n && 0 === o.indexOf(n) : "*=" === t ? n && o.indexOf(n) > -1 : "$=" === t ? n && o.slice(-n.length) === n : "~=" === t ? (" " + o.replace(H, " ") + " ").indexOf(n) > -1 : "|=" === t && (o === n || o.slice(0, n.length + 1) === n + "-"))
                                }
                            },
                            CHILD: function(e, t, n, r, o) {
                                var i = "nth" !== e.slice(0, 3),
                                    a = "last" !== e.slice(-4),
                                    s = "of-type" === t;
                                return 1 === r && 0 === o ? function(e) {
                                    return !!e.parentNode
                                } : function(t, n, u) {
                                    var c, l, d, f, p, h, m = i !== a ? "nextSibling" : "previousSibling",
                                        v = t.parentNode,
                                        g = s && t.nodeName.toLowerCase(),
                                        y = !u && !s,
                                        w = !1;
                                    if (v) {
                                        if (i) {
                                            for (; m;) {
                                                for (f = t; f = f[m];)
                                                    if (s ? f.nodeName.toLowerCase() === g : 1 === f.nodeType) return !1;
                                                h = m = "only" === e && !h && "nextSibling"
                                            }
                                            return !0
                                        }
                                        if (h = [a ? v.firstChild : v.lastChild], a && y) {
                                            for (w = (p = (c = (l = (d = (f = v)[b] || (f[b] = {}))[f.uniqueID] || (d[f.uniqueID] = {}))[e] || [])[0] === k && c[1]) && c[2], f = p && v.childNodes[p]; f = ++p && f && f[m] || (w = p = 0) || h.pop();)
                                                if (1 === f.nodeType && ++w && f === t) {
                                                    l[e] = [k, p, w];
                                                    break
                                                }
                                        } else if (y && (w = p = (c = (l = (d = (f = t)[b] || (f[b] = {}))[f.uniqueID] || (d[f.uniqueID] = {}))[e] || [])[0] === k && c[1]), !1 === w)
                                            for (;
                                                (f = ++p && f && f[m] || (w = p = 0) || h.pop()) && ((s ? f.nodeName.toLowerCase() !== g : 1 !== f.nodeType) || !++w || (y && ((l = (d = f[b] || (f[b] = {}))[f.uniqueID] || (d[f.uniqueID] = {}))[e] = [k, w]), f !== t)););
                                        return (w -= o) === r || w % r == 0 && w / r >= 0
                                    }
                                }
                            },
                            PSEUDO: function(e, t) {
                                var n, o = r.pseudos[e] || r.setFilters[e.toLowerCase()] || se.error("unsupported pseudo: " + e);
                                return o[b] ? o(t) : o.length > 1 ? (n = [e, e, "", t], r.setFilters.hasOwnProperty(e.toLowerCase()) ? ce((function(e, n) {
                                    for (var r, i = o(e, t), a = i.length; a--;) e[r = D(e, i[a])] = !(n[r] = i[a])
                                })) : function(e) {
                                    return o(e, 0, n)
                                }) : o
                            }
                        },
                        pseudos: {
                            not: ce((function(e) {
                                var t = [],
                                    n = [],
                                    r = s(e.replace(B, "$1"));
                                return r[b] ? ce((function(e, t, n, o) {
                                    for (var i, a = r(e, null, o, []), s = e.length; s--;)(i = a[s]) && (e[s] = !(t[s] = i))
                                })) : function(e, o, i) {
                                    return t[0] = e, r(t, null, i, n), t[0] = null, !n.pop()
                                }
                            })),
                            has: ce((function(e) {
                                return function(t) {
                                    return se(e, t).length > 0
                                }
                            })),
                            contains: ce((function(e) {
                                return e = e.replace(te, ne),
                                    function(t) {
                                        return (t.textContent || o(t)).indexOf(e) > -1
                                    }
                            })),
                            lang: ce((function(e) {
                                return G.test(e || "") || se.error("unsupported lang: " + e), e = e.replace(te, ne).toLowerCase(),
                                    function(t) {
                                        var n;
                                        do {
                                            if (n = m ? t.lang : t.getAttribute("xml:lang") || t.getAttribute("lang")) return (n = n.toLowerCase()) === e || 0 === n.indexOf(e + "-")
                                        } while ((t = t.parentNode) && 1 === t.nodeType);
                                        return !1
                                    }
                            })),
                            target: function(t) {
                                var n = e.location && e.location.hash;
                                return n && n.slice(1) === t.id
                            },
                            root: function(e) {
                                return e === h
                            },
                            focus: function(e) {
                                return e === p.activeElement && (!p.hasFocus || p.hasFocus()) && !!(e.type || e.href || ~e.tabIndex)
                            },
                            enabled: me(!1),
                            disabled: me(!0),
                            checked: function(e) {
                                var t = e.nodeName.toLowerCase();
                                return "input" === t && !!e.checked || "option" === t && !!e.selected
                            },
                            selected: function(e) {
                                return e.parentNode && e.parentNode.selectedIndex, !0 === e.selected
                            },
                            empty: function(e) {
                                for (e = e.firstChild; e; e = e.nextSibling)
                                    if (e.nodeType < 6) return !1;
                                return !0
                            },
                            parent: function(e) {
                                return !r.pseudos.empty(e)
                            },
                            header: function(e) {
                                return Q.test(e.nodeName)
                            },
                            input: function(e) {
                                return Y.test(e.nodeName)
                            },
                            button: function(e) {
                                var t = e.nodeName.toLowerCase();
                                return "input" === t && "button" === e.type || "button" === t
                            },
                            text: function(e) {
                                var t;
                                return "input" === e.nodeName.toLowerCase() && "text" === e.type && (null == (t = e.getAttribute("type")) || "text" === t.toLowerCase())
                            },
                            first: ve((function() {
                                return [0]
                            })),
                            last: ve((function(e, t) {
                                return [t - 1]
                            })),
                            eq: ve((function(e, t, n) {
                                return [n < 0 ? n + t : n]
                            })),
                            even: ve((function(e, t) {
                                for (var n = 0; n < t; n += 2) e.push(n);
                                return e
                            })),
                            odd: ve((function(e, t) {
                                for (var n = 1; n < t; n += 2) e.push(n);
                                return e
                            })),
                            lt: ve((function(e, t, n) {
                                for (var r = n < 0 ? n + t : n > t ? t : n; --r >= 0;) e.push(r);
                                return e
                            })),
                            gt: ve((function(e, t, n) {
                                for (var r = n < 0 ? n + t : n; ++r < t;) e.push(r);
                                return e
                            }))
                        }
                    }).pseudos.nth = r.pseudos.eq, {
                        radio: !0,
                        checkbox: !0,
                        file: !0,
                        password: !0,
                        image: !0
                    }) r.pseudos[t] = pe(t);
                for (t in {
                        submit: !0,
                        reset: !0
                    }) r.pseudos[t] = he(t);

                function ye() {}

                function we(e) {
                    for (var t = 0, n = e.length, r = ""; t < n; t++) r += e[t].value;
                    return r
                }

                function be(e, t, n) {
                    var r = t.dir,
                        o = t.next,
                        i = o || r,
                        a = n && "parentNode" === i,
                        s = C++;
                    return t.first ? function(t, n, o) {
                        for (; t = t[r];)
                            if (1 === t.nodeType || a) return e(t, n, o);
                        return !1
                    } : function(t, n, u) {
                        var c, l, d, f = [k, s];
                        if (u) {
                            for (; t = t[r];)
                                if ((1 === t.nodeType || a) && e(t, n, u)) return !0
                        } else
                            for (; t = t[r];)
                                if (1 === t.nodeType || a)
                                    if (l = (d = t[b] || (t[b] = {}))[t.uniqueID] || (d[t.uniqueID] = {}), o && o === t.nodeName.toLowerCase()) t = t[r] || t;
                                    else {
                                        if ((c = l[i]) && c[0] === k && c[1] === s) return f[2] = c[2];
                                        if (l[i] = f, f[2] = e(t, n, u)) return !0
                                    } return !1
                    }
                }

                function xe(e) {
                    return e.length > 1 ? function(t, n, r) {
                        for (var o = e.length; o--;)
                            if (!e[o](t, n, r)) return !1;
                        return !0
                    } : e[0]
                }

                function ke(e, t, n, r, o) {
                    for (var i, a = [], s = 0, u = e.length, c = null != t; s < u; s++)(i = e[s]) && (n && !n(i, r, o) || (a.push(i), c && t.push(s)));
                    return a
                }

                function Ce(e, t, n, r, o, i) {
                    return r && !r[b] && (r = Ce(r)), o && !o[b] && (o = Ce(o, i)), ce((function(i, a, s, u) {
                        var c, l, d, f = [],
                            p = [],
                            h = a.length,
                            m = i || function(e, t, n) {
                                for (var r = 0, o = t.length; r < o; r++) se(e, t[r], n);
                                return n
                            }(t || "*", s.nodeType ? [s] : s, []),
                            v = !e || !i && t ? m : ke(m, f, e, s, u),
                            g = n ? o || (i ? e : h || r) ? [] : a : v;
                        if (n && n(v, g, s, u), r)
                            for (c = ke(g, p), r(c, [], s, u), l = c.length; l--;)(d = c[l]) && (g[p[l]] = !(v[p[l]] = d));
                        if (i) {
                            if (o || e) {
                                if (o) {
                                    for (c = [], l = g.length; l--;)(d = g[l]) && c.push(v[l] = d);
                                    o(null, g = [], c, u)
                                }
                                for (l = g.length; l--;)(d = g[l]) && (c = o ? D(i, d) : f[l]) > -1 && (i[c] = !(a[c] = d))
                            }
                        } else g = ke(g === a ? g.splice(h, g.length) : g), o ? o(null, a, g, u) : q.apply(a, g)
                    }))
                }

                function Se(e) {
                    for (var t, n, o, i = e.length, a = r.relative[e[0].type], s = a || r.relative[" "], u = a ? 1 : 0, l = be((function(e) {
                            return e === t
                        }), s, !0), d = be((function(e) {
                            return D(t, e) > -1
                        }), s, !0), f = [function(e, n, r) {
                            var o = !a && (r || n !== c) || ((t = n).nodeType ? l(e, n, r) : d(e, n, r));
                            return t = null, o
                        }]; u < i; u++)
                        if (n = r.relative[e[u].type]) f = [be(xe(f), n)];
                        else {
                            if ((n = r.filter[e[u].type].apply(null, e[u].matches))[b]) {
                                for (o = ++u; o < i && !r.relative[e[o].type]; o++);
                                return Ce(u > 1 && xe(f), u > 1 && we(e.slice(0, u - 1).concat({
                                    value: " " === e[u - 2].type ? "*" : ""
                                })).replace(B, "$1"), n, u < o && Se(e.slice(u, o)), o < i && Se(e = e.slice(o)), o < i && we(e))
                            }
                            f.push(n)
                        } return xe(f)
                }
                return ye.prototype = r.filters = r.pseudos, r.setFilters = new ye, a = se.tokenize = function(e, t) {
                    var n, o, i, a, s, u, c, l = E[e + " "];
                    if (l) return t ? 0 : l.slice(0);
                    for (s = e, u = [], c = r.preFilter; s;) {
                        for (a in n && !(o = F.exec(s)) || (o && (s = s.slice(o[0].length) || s), u.push(i = [])), n = !1, (o = U.exec(s)) && (n = o.shift(), i.push({
                                value: n,
                                type: o[0].replace(B, " ")
                            }), s = s.slice(n.length)), r.filter) !(o = X[a].exec(s)) || c[a] && !(o = c[a](o)) || (n = o.shift(), i.push({
                            value: n,
                            type: a,
                            matches: o
                        }), s = s.slice(n.length));
                        if (!n) break
                    }
                    return t ? s.length : s ? se.error(e) : E(e, u).slice(0)
                }, s = se.compile = function(e, t) {
                    var n, o = [],
                        i = [],
                        s = T[e + " "];
                    if (!s) {
                        for (t || (t = a(e)), n = t.length; n--;)(s = Se(t[n]))[b] ? o.push(s) : i.push(s);
                        (s = T(e, function(e, t) {
                            var n = t.length > 0,
                                o = e.length > 0,
                                i = function(i, a, s, u, l) {
                                    var d, h, v, g = 0,
                                        y = "0",
                                        w = i && [],
                                        b = [],
                                        x = c,
                                        C = i || o && r.find.TAG("*", l),
                                        S = k += null == x ? 1 : Math.random() || .1,
                                        E = C.length;
                                    for (l && (c = a == p || a || l); y !== E && null != (d = C[y]); y++) {
                                        if (o && d) {
                                            for (h = 0, a || d.ownerDocument == p || (f(d), s = !m); v = e[h++];)
                                                if (v(d, a || p, s)) {
                                                    u.push(d);
                                                    break
                                                } l && (k = S)
                                        }
                                        n && ((d = !v && d) && g--, i && w.push(d))
                                    }
                                    if (g += y, n && y !== g) {
                                        for (h = 0; v = t[h++];) v(w, b, a, s);
                                        if (i) {
                                            if (g > 0)
                                                for (; y--;) w[y] || b[y] || (b[y] = L.call(u));
                                            b = ke(b)
                                        }
                                        q.apply(u, b), l && !i && b.length > 0 && g + t.length > 1 && se.uniqueSort(u)
                                    }
                                    return l && (k = S, c = x), w
                                };
                            return n ? ce(i) : i
                        }(i, o))).selector = e
                    }
                    return s
                }, u = se.select = function(e, t, n, o) {
                    var i, u, c, l, d, f = "function" == typeof e && e,
                        p = !o && a(e = f.selector || e);
                    if (n = n || [], 1 === p.length) {
                        if ((u = p[0] = p[0].slice(0)).length > 2 && "ID" === (c = u[0]).type && 9 === t.nodeType && m && r.relative[u[1].type]) {
                            if (!(t = (r.find.ID(c.matches[0].replace(te, ne), t) || [])[0])) return n;
                            f && (t = t.parentNode), e = e.slice(u.shift().value.length)
                        }
                        for (i = X.needsContext.test(e) ? 0 : u.length; i-- && (c = u[i], !r.relative[l = c.type]);)
                            if ((d = r.find[l]) && (o = d(c.matches[0].replace(te, ne), ee.test(u[0].type) && ge(t.parentNode) || t))) {
                                if (u.splice(i, 1), !(e = o.length && we(u))) return q.apply(n, o), n;
                                break
                            }
                    }
                    return (f || s(e, p))(o, t, !m, n, !t || ee.test(e) && ge(t.parentNode) || t), n
                }, n.sortStable = b.split("").sort(_).join("") === b, n.detectDuplicates = !!d, f(), n.sortDetached = le((function(e) {
                    return 1 & e.compareDocumentPosition(p.createElement("fieldset"))
                })), le((function(e) {
                    return e.innerHTML = "<a href='#'></a>", "#" === e.firstChild.getAttribute("href")
                })) || de("type|href|height|width", (function(e, t, n) {
                    if (!n) return e.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2)
                })), n.attributes && le((function(e) {
                    return e.innerHTML = "<input/>", e.firstChild.setAttribute("value", ""), "" === e.firstChild.getAttribute("value")
                })) || de("value", (function(e, t, n) {
                    if (!n && "input" === e.nodeName.toLowerCase()) return e.defaultValue
                })), le((function(e) {
                    return null == e.getAttribute("disabled")
                })) || de(N, (function(e, t, n) {
                    var r;
                    if (!n) return !0 === e[t] ? t.toLowerCase() : (r = e.getAttributeNode(t)) && r.specified ? r.value : null
                })), se
            }(n);
        C.find = E, C.expr = E.selectors, C.expr[":"] = C.expr.pseudos, C.uniqueSort = C.unique = E.uniqueSort, C.text = E.getText, C.isXMLDoc = E.isXML, C.contains = E.contains, C.escapeSelector = E.escape;
        var T = function(e, t, n) {
                for (var r = [], o = void 0 !== n;
                    (e = e[t]) && 9 !== e.nodeType;)
                    if (1 === e.nodeType) {
                        if (o && C(e).is(n)) break;
                        r.push(e)
                    } return r
            },
            j = function(e, t) {
                for (var n = []; e; e = e.nextSibling) 1 === e.nodeType && e !== t && n.push(e);
                return n
            },
            _ = C.expr.match.needsContext;

        function P(e, t) {
            return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase()
        }
        var M = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;

        function L(e, t, n) {
            return g(t) ? C.grep(e, (function(e, r) {
                return !!t.call(e, r, e) !== n
            })) : t.nodeType ? C.grep(e, (function(e) {
                return e === t !== n
            })) : "string" != typeof t ? C.grep(e, (function(e) {
                return l.call(t, e) > -1 !== n
            })) : C.filter(t, e, n)
        }
        C.filter = function(e, t, n) {
            var r = t[0];
            return n && (e = ":not(" + e + ")"), 1 === t.length && 1 === r.nodeType ? C.find.matchesSelector(r, e) ? [r] : [] : C.find.matches(e, C.grep(t, (function(e) {
                return 1 === e.nodeType
            })))
        }, C.fn.extend({
            find: function(e) {
                var t, n, r = this.length,
                    o = this;
                if ("string" != typeof e) return this.pushStack(C(e).filter((function() {
                    for (t = 0; t < r; t++)
                        if (C.contains(o[t], this)) return !0
                })));
                for (n = this.pushStack([]), t = 0; t < r; t++) C.find(e, o[t], n);
                return r > 1 ? C.uniqueSort(n) : n
            },
            filter: function(e) {
                return this.pushStack(L(this, e || [], !1))
            },
            not: function(e) {
                return this.pushStack(L(this, e || [], !0))
            },
            is: function(e) {
                return !!L(this, "string" == typeof e && _.test(e) ? C(e) : e || [], !1).length
            }
        });
        var A, q = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;
        (C.fn.init = function(e, t, n) {
            var r, o;
            if (!e) return this;
            if (n = n || A, "string" == typeof e) {
                if (!(r = "<" === e[0] && ">" === e[e.length - 1] && e.length >= 3 ? [null, e, null] : q.exec(e)) || !r[1] && t) return !t || t.jquery ? (t || n).find(e) : this.constructor(t).find(e);
                if (r[1]) {
                    if (t = t instanceof C ? t[0] : t, C.merge(this, C.parseHTML(r[1], t && t.nodeType ? t.ownerDocument || t : w, !0)), M.test(r[1]) && C.isPlainObject(t))
                        for (r in t) g(this[r]) ? this[r](t[r]) : this.attr(r, t[r]);
                    return this
                }
                return (o = w.getElementById(r[2])) && (this[0] = o, this.length = 1), this
            }
            return e.nodeType ? (this[0] = e, this.length = 1, this) : g(e) ? void 0 !== n.ready ? n.ready(e) : e(C) : C.makeArray(e, this)
        }).prototype = C.fn, A = C(w);
        var V = /^(?:parents|prev(?:Until|All))/,
            D = {
                children: !0,
                contents: !0,
                next: !0,
                prev: !0
            };

        function N(e, t) {
            for (;
                (e = e[t]) && 1 !== e.nodeType;);
            return e
        }
        C.fn.extend({
            has: function(e) {
                var t = C(e, this),
                    n = t.length;
                return this.filter((function() {
                    for (var e = 0; e < n; e++)
                        if (C.contains(this, t[e])) return !0
                }))
            },
            closest: function(e, t) {
                var n, r = 0,
                    o = this.length,
                    i = [],
                    a = "string" != typeof e && C(e);
                if (!_.test(e))
                    for (; r < o; r++)
                        for (n = this[r]; n && n !== t; n = n.parentNode)
                            if (n.nodeType < 11 && (a ? a.index(n) > -1 : 1 === n.nodeType && C.find.matchesSelector(n, e))) {
                                i.push(n);
                                break
                            } return this.pushStack(i.length > 1 ? C.uniqueSort(i) : i)
            },
            index: function(e) {
                return e ? "string" == typeof e ? l.call(C(e), this[0]) : l.call(this, e.jquery ? e[0] : e) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
            },
            add: function(e, t) {
                return this.pushStack(C.uniqueSort(C.merge(this.get(), C(e, t))))
            },
            addBack: function(e) {
                return this.add(null == e ? this.prevObject : this.prevObject.filter(e))
            }
        }), C.each({
            parent: function(e) {
                var t = e.parentNode;
                return t && 11 !== t.nodeType ? t : null
            },
            parents: function(e) {
                return T(e, "parentNode")
            },
            parentsUntil: function(e, t, n) {
                return T(e, "parentNode", n)
            },
            next: function(e) {
                return N(e, "nextSibling")
            },
            prev: function(e) {
                return N(e, "previousSibling")
            },
            nextAll: function(e) {
                return T(e, "nextSibling")
            },
            prevAll: function(e) {
                return T(e, "previousSibling")
            },
            nextUntil: function(e, t, n) {
                return T(e, "nextSibling", n)
            },
            prevUntil: function(e, t, n) {
                return T(e, "previousSibling", n)
            },
            siblings: function(e) {
                return j((e.parentNode || {}).firstChild, e)
            },
            children: function(e) {
                return j(e.firstChild)
            },
            contents: function(e) {
                return null != e.contentDocument && a(e.contentDocument) ? e.contentDocument : (P(e, "template") && (e = e.content || e), C.merge([], e.childNodes))
            }
        }, (function(e, t) {
            C.fn[e] = function(n, r) {
                var o = C.map(this, t, n);
                return "Until" !== e.slice(-5) && (r = n), r && "string" == typeof r && (o = C.filter(r, o)), this.length > 1 && (D[e] || C.uniqueSort(o), V.test(e) && o.reverse()), this.pushStack(o)
            }
        }));
        var R = /[^\x20\t\r\n\f]+/g;

        function O(e) {
            return e
        }

        function I(e) {
            throw e
        }

        function z(e, t, n, r) {
            var o;
            try {
                e && g(o = e.promise) ? o.call(e).done(t).fail(n) : e && g(o = e.then) ? o.call(e, t, n) : t.apply(void 0, [e].slice(r))
            } catch (e) {
                n.apply(void 0, [e])
            }
        }
        C.Callbacks = function(e) {
            e = "string" == typeof e ? function(e) {
                var t = {};
                return C.each(e.match(R) || [], (function(e, n) {
                    t[n] = !0
                })), t
            }(e) : C.extend({}, e);
            var t, n, r, o, i = [],
                a = [],
                s = -1,
                u = function() {
                    for (o = o || e.once, r = t = !0; a.length; s = -1)
                        for (n = a.shift(); ++s < i.length;) !1 === i[s].apply(n[0], n[1]) && e.stopOnFalse && (s = i.length, n = !1);
                    e.memory || (n = !1), t = !1, o && (i = n ? [] : "")
                },
                c = {
                    add: function() {
                        return i && (n && !t && (s = i.length - 1, a.push(n)), function t(n) {
                            C.each(n, (function(n, r) {
                                g(r) ? e.unique && c.has(r) || i.push(r) : r && r.length && "string" !== k(r) && t(r)
                            }))
                        }(arguments), n && !t && u()), this
                    },
                    remove: function() {
                        return C.each(arguments, (function(e, t) {
                            for (var n;
                                (n = C.inArray(t, i, n)) > -1;) i.splice(n, 1), n <= s && s--
                        })), this
                    },
                    has: function(e) {
                        return e ? C.inArray(e, i) > -1 : i.length > 0
                    },
                    empty: function() {
                        return i && (i = []), this
                    },
                    disable: function() {
                        return o = a = [], i = n = "", this
                    },
                    disabled: function() {
                        return !i
                    },
                    lock: function() {
                        return o = a = [], n || t || (i = n = ""), this
                    },
                    locked: function() {
                        return !!o
                    },
                    fireWith: function(e, n) {
                        return o || (n = [e, (n = n || []).slice ? n.slice() : n], a.push(n), t || u()), this
                    },
                    fire: function() {
                        return c.fireWith(this, arguments), this
                    },
                    fired: function() {
                        return !!r
                    }
                };
            return c
        }, C.extend({
            Deferred: function(e) {
                var t = [
                        ["notify", "progress", C.Callbacks("memory"), C.Callbacks("memory"), 2],
                        ["resolve", "done", C.Callbacks("once memory"), C.Callbacks("once memory"), 0, "resolved"],
                        ["reject", "fail", C.Callbacks("once memory"), C.Callbacks("once memory"), 1, "rejected"]
                    ],
                    r = "pending",
                    o = {
                        state: function() {
                            return r
                        },
                        always: function() {
                            return i.done(arguments).fail(arguments), this
                        },
                        catch: function(e) {
                            return o.then(null, e)
                        },
                        pipe: function() {
                            var e = arguments;
                            return C.Deferred((function(n) {
                                C.each(t, (function(t, r) {
                                    var o = g(e[r[4]]) && e[r[4]];
                                    i[r[1]]((function() {
                                        var e = o && o.apply(this, arguments);
                                        e && g(e.promise) ? e.promise().progress(n.notify).done(n.resolve).fail(n.reject) : n[r[0] + "With"](this, o ? [e] : arguments)
                                    }))
                                })), e = null
                            })).promise()
                        },
                        then: function(e, r, o) {
                            var i = 0;

                            function a(e, t, r, o) {
                                return function() {
                                    var s = this,
                                        u = arguments,
                                        c = function() {
                                            var n, c;
                                            if (!(e < i)) {
                                                if ((n = r.apply(s, u)) === t.promise()) throw new TypeError("Thenable self-resolution");
                                                c = n && ("object" == typeof n || "function" == typeof n) && n.then, g(c) ? o ? c.call(n, a(i, t, O, o), a(i, t, I, o)) : (i++, c.call(n, a(i, t, O, o), a(i, t, I, o), a(i, t, O, t.notifyWith))) : (r !== O && (s = void 0, u = [n]), (o || t.resolveWith)(s, u))
                                            }
                                        },
                                        l = o ? c : function() {
                                            try {
                                                c()
                                            } catch (n) {
                                                C.Deferred.exceptionHook && C.Deferred.exceptionHook(n, l.stackTrace), e + 1 >= i && (r !== I && (s = void 0, u = [n]), t.rejectWith(s, u))
                                            }
                                        };
                                    e ? l() : (C.Deferred.getStackHook && (l.stackTrace = C.Deferred.getStackHook()), n.setTimeout(l))
                                }
                            }
                            return C.Deferred((function(n) {
                                t[0][3].add(a(0, n, g(o) ? o : O, n.notifyWith)), t[1][3].add(a(0, n, g(e) ? e : O)), t[2][3].add(a(0, n, g(r) ? r : I))
                            })).promise()
                        },
                        promise: function(e) {
                            return null != e ? C.extend(e, o) : o
                        }
                    },
                    i = {};
                return C.each(t, (function(e, n) {
                    var a = n[2],
                        s = n[5];
                    o[n[1]] = a.add, s && a.add((function() {
                        r = s
                    }), t[3 - e][2].disable, t[3 - e][3].disable, t[0][2].lock, t[0][3].lock), a.add(n[3].fire), i[n[0]] = function() {
                        return i[n[0] + "With"](this === i ? void 0 : this, arguments), this
                    }, i[n[0] + "With"] = a.fireWith
                })), o.promise(i), e && e.call(i, i), i
            },
            when: function(e) {
                var t = arguments.length,
                    n = t,
                    r = Array(n),
                    o = s.call(arguments),
                    i = C.Deferred(),
                    a = function(e) {
                        return function(n) {
                            r[e] = this, o[e] = arguments.length > 1 ? s.call(arguments) : n, --t || i.resolveWith(r, o)
                        }
                    };
                if (t <= 1 && (z(e, i.done(a(n)).resolve, i.reject, !t), "pending" === i.state() || g(o[n] && o[n].then))) return i.then();
                for (; n--;) z(o[n], a(n), i.reject);
                return i.promise()
            }
        });
        var H = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
        C.Deferred.exceptionHook = function(e, t) {
            n.console && n.console.warn && e && H.test(e.name) && n.console.warn("jQuery.Deferred exception: " + e.message, e.stack, t)
        }, C.readyException = function(e) {
            n.setTimeout((function() {
                throw e
            }))
        };
        var B = C.Deferred();

        function F() {
            w.removeEventListener("DOMContentLoaded", F), n.removeEventListener("load", F), C.ready()
        }
        C.fn.ready = function(e) {
            return B.then(e).catch((function(e) {
                C.readyException(e)
            })), this
        }, C.extend({
            isReady: !1,
            readyWait: 1,
            ready: function(e) {
                (!0 === e ? --C.readyWait : C.isReady) || (C.isReady = !0, !0 !== e && --C.readyWait > 0 || B.resolveWith(w, [C]))
            }
        }), C.ready.then = B.then, "complete" === w.readyState || "loading" !== w.readyState && !w.documentElement.doScroll ? n.setTimeout(C.ready) : (w.addEventListener("DOMContentLoaded", F), n.addEventListener("load", F));
        var U = function(e, t, n, r, o, i, a) {
                var s = 0,
                    u = e.length,
                    c = null == n;
                if ("object" === k(n))
                    for (s in o = !0, n) U(e, t, s, n[s], !0, i, a);
                else if (void 0 !== r && (o = !0, g(r) || (a = !0), c && (a ? (t.call(e, r), t = null) : (c = t, t = function(e, t, n) {
                        return c.call(C(e), n)
                    })), t))
                    for (; s < u; s++) t(e[s], n, a ? r : r.call(e[s], s, t(e[s], n)));
                return o ? e : c ? t.call(e) : u ? t(e[0], n) : i
            },
            W = /^-ms-/,
            $ = /-([a-z])/g;

        function G(e, t) {
            return t.toUpperCase()
        }

        function X(e) {
            return e.replace(W, "ms-").replace($, G)
        }
        var J = function(e) {
            return 1 === e.nodeType || 9 === e.nodeType || !+e.nodeType
        };

        function Y() {
            this.expando = C.expando + Y.uid++
        }
        Y.uid = 1, Y.prototype = {
            cache: function(e) {
                var t = e[this.expando];
                return t || (t = {}, J(e) && (e.nodeType ? e[this.expando] = t : Object.defineProperty(e, this.expando, {
                    value: t,
                    configurable: !0
                }))), t
            },
            set: function(e, t, n) {
                var r, o = this.cache(e);
                if ("string" == typeof t) o[X(t)] = n;
                else
                    for (r in t) o[X(r)] = t[r];
                return o
            },
            get: function(e, t) {
                return void 0 === t ? this.cache(e) : e[this.expando] && e[this.expando][X(t)]
            },
            access: function(e, t, n) {
                return void 0 === t || t && "string" == typeof t && void 0 === n ? this.get(e, t) : (this.set(e, t, n), void 0 !== n ? n : t)
            },
            remove: function(e, t) {
                var n, r = e[this.expando];
                if (void 0 !== r) {
                    if (void 0 !== t) {
                        n = (t = Array.isArray(t) ? t.map(X) : (t = X(t)) in r ? [t] : t.match(R) || []).length;
                        for (; n--;) delete r[t[n]]
                    }(void 0 === t || C.isEmptyObject(r)) && (e.nodeType ? e[this.expando] = void 0 : delete e[this.expando])
                }
            },
            hasData: function(e) {
                var t = e[this.expando];
                return void 0 !== t && !C.isEmptyObject(t)
            }
        };
        var Q = new Y,
            Z = new Y,
            K = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
            ee = /[A-Z]/g;

        function te(e, t, n) {
            var r;
            if (void 0 === n && 1 === e.nodeType)
                if (r = "data-" + t.replace(ee, "-$&").toLowerCase(), "string" == typeof(n = e.getAttribute(r))) {
                    try {
                        n = function(e) {
                            return "true" === e || "false" !== e && ("null" === e ? null : e === +e + "" ? +e : K.test(e) ? JSON.parse(e) : e)
                        }(n)
                    } catch (e) {}
                    Z.set(e, t, n)
                } else n = void 0;
            return n
        }
        C.extend({
            hasData: function(e) {
                return Z.hasData(e) || Q.hasData(e)
            },
            data: function(e, t, n) {
                return Z.access(e, t, n)
            },
            removeData: function(e, t) {
                Z.remove(e, t)
            },
            _data: function(e, t, n) {
                return Q.access(e, t, n)
            },
            _removeData: function(e, t) {
                Q.remove(e, t)
            }
        }), C.fn.extend({
            data: function(e, t) {
                var n, r, o, i = this[0],
                    a = i && i.attributes;
                if (void 0 === e) {
                    if (this.length && (o = Z.get(i), 1 === i.nodeType && !Q.get(i, "hasDataAttrs"))) {
                        for (n = a.length; n--;) a[n] && 0 === (r = a[n].name).indexOf("data-") && (r = X(r.slice(5)), te(i, r, o[r]));
                        Q.set(i, "hasDataAttrs", !0)
                    }
                    return o
                }
                return "object" == typeof e ? this.each((function() {
                    Z.set(this, e)
                })) : U(this, (function(t) {
                    var n;
                    if (i && void 0 === t) return void 0 !== (n = Z.get(i, e)) || void 0 !== (n = te(i, e)) ? n : void 0;
                    this.each((function() {
                        Z.set(this, e, t)
                    }))
                }), null, t, arguments.length > 1, null, !0)
            },
            removeData: function(e) {
                return this.each((function() {
                    Z.remove(this, e)
                }))
            }
        }), C.extend({
            queue: function(e, t, n) {
                var r;
                if (e) return t = (t || "fx") + "queue", r = Q.get(e, t), n && (!r || Array.isArray(n) ? r = Q.access(e, t, C.makeArray(n)) : r.push(n)), r || []
            },
            dequeue: function(e, t) {
                t = t || "fx";
                var n = C.queue(e, t),
                    r = n.length,
                    o = n.shift(),
                    i = C._queueHooks(e, t);
                "inprogress" === o && (o = n.shift(), r--), o && ("fx" === t && n.unshift("inprogress"), delete i.stop, o.call(e, (function() {
                    C.dequeue(e, t)
                }), i)), !r && i && i.empty.fire()
            },
            _queueHooks: function(e, t) {
                var n = t + "queueHooks";
                return Q.get(e, n) || Q.access(e, n, {
                    empty: C.Callbacks("once memory").add((function() {
                        Q.remove(e, [t + "queue", n])
                    }))
                })
            }
        }), C.fn.extend({
            queue: function(e, t) {
                var n = 2;
                return "string" != typeof e && (t = e, e = "fx", n--), arguments.length < n ? C.queue(this[0], e) : void 0 === t ? this : this.each((function() {
                    var n = C.queue(this, e, t);
                    C._queueHooks(this, e), "fx" === e && "inprogress" !== n[0] && C.dequeue(this, e)
                }))
            },
            dequeue: function(e) {
                return this.each((function() {
                    C.dequeue(this, e)
                }))
            },
            clearQueue: function(e) {
                return this.queue(e || "fx", [])
            },
            promise: function(e, t) {
                var n, r = 1,
                    o = C.Deferred(),
                    i = this,
                    a = this.length,
                    s = function() {
                        --r || o.resolveWith(i, [i])
                    };
                for ("string" != typeof e && (t = e, e = void 0), e = e || "fx"; a--;)(n = Q.get(i[a], e + "queueHooks")) && n.empty && (r++, n.empty.add(s));
                return s(), o.promise(t)
            }
        });
        var ne = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
            re = new RegExp("^(?:([+-])=|)(" + ne + ")([a-z%]*)$", "i"),
            oe = ["Top", "Right", "Bottom", "Left"],
            ie = w.documentElement,
            ae = function(e) {
                return C.contains(e.ownerDocument, e)
            },
            se = {
                composed: !0
            };
        ie.getRootNode && (ae = function(e) {
            return C.contains(e.ownerDocument, e) || e.getRootNode(se) === e.ownerDocument
        });
        var ue = function(e, t) {
            return "none" === (e = t || e).style.display || "" === e.style.display && ae(e) && "none" === C.css(e, "display")
        };

        function ce(e, t, n, r) {
            var o, i, a = 20,
                s = r ? function() {
                    return r.cur()
                } : function() {
                    return C.css(e, t, "")
                },
                u = s(),
                c = n && n[3] || (C.cssNumber[t] ? "" : "px"),
                l = e.nodeType && (C.cssNumber[t] || "px" !== c && +u) && re.exec(C.css(e, t));
            if (l && l[3] !== c) {
                for (u /= 2, c = c || l[3], l = +u || 1; a--;) C.style(e, t, l + c), (1 - i) * (1 - (i = s() / u || .5)) <= 0 && (a = 0), l /= i;
                l *= 2, C.style(e, t, l + c), n = n || []
            }
            return n && (l = +l || +u || 0, o = n[1] ? l + (n[1] + 1) * n[2] : +n[2], r && (r.unit = c, r.start = l, r.end = o)), o
        }
        var le = {};

        function de(e) {
            var t, n = e.ownerDocument,
                r = e.nodeName,
                o = le[r];
            return o || (t = n.body.appendChild(n.createElement(r)), o = C.css(t, "display"), t.parentNode.removeChild(t), "none" === o && (o = "block"), le[r] = o, o)
        }

        function fe(e, t) {
            for (var n, r, o = [], i = 0, a = e.length; i < a; i++)(r = e[i]).style && (n = r.style.display, t ? ("none" === n && (o[i] = Q.get(r, "display") || null, o[i] || (r.style.display = "")), "" === r.style.display && ue(r) && (o[i] = de(r))) : "none" !== n && (o[i] = "none", Q.set(r, "display", n)));
            for (i = 0; i < a; i++) null != o[i] && (e[i].style.display = o[i]);
            return e
        }
        C.fn.extend({
            show: function() {
                return fe(this, !0)
            },
            hide: function() {
                return fe(this)
            },
            toggle: function(e) {
                return "boolean" == typeof e ? e ? this.show() : this.hide() : this.each((function() {
                    ue(this) ? C(this).show() : C(this).hide()
                }))
            }
        });
        var pe, he, me = /^(?:checkbox|radio)$/i,
            ve = /<([a-z][^\/\0>\x20\t\r\n\f]*)/i,
            ge = /^$|^module$|\/(?:java|ecma)script/i;
        pe = w.createDocumentFragment().appendChild(w.createElement("div")), (he = w.createElement("input")).setAttribute("type", "radio"), he.setAttribute("checked", "checked"), he.setAttribute("name", "t"), pe.appendChild(he), v.checkClone = pe.cloneNode(!0).cloneNode(!0).lastChild.checked, pe.innerHTML = "<textarea>x</textarea>", v.noCloneChecked = !!pe.cloneNode(!0).lastChild.defaultValue, pe.innerHTML = "<option></option>", v.option = !!pe.lastChild;
        var ye = {
            thead: [1, "<table>", "</table>"],
            col: [2, "<table><colgroup>", "</colgroup></table>"],
            tr: [2, "<table><tbody>", "</tbody></table>"],
            td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
            _default: [0, "", ""]
        };

        function we(e, t) {
            var n;
            return n = void 0 !== e.getElementsByTagName ? e.getElementsByTagName(t || "*") : void 0 !== e.querySelectorAll ? e.querySelectorAll(t || "*") : [], void 0 === t || t && P(e, t) ? C.merge([e], n) : n
        }

        function be(e, t) {
            for (var n = 0, r = e.length; n < r; n++) Q.set(e[n], "globalEval", !t || Q.get(t[n], "globalEval"))
        }
        ye.tbody = ye.tfoot = ye.colgroup = ye.caption = ye.thead, ye.th = ye.td, v.option || (ye.optgroup = ye.option = [1, "<select multiple='multiple'>", "</select>"]);
        var xe = /<|&#?\w+;/;

        function ke(e, t, n, r, o) {
            for (var i, a, s, u, c, l, d = t.createDocumentFragment(), f = [], p = 0, h = e.length; p < h; p++)
                if ((i = e[p]) || 0 === i)
                    if ("object" === k(i)) C.merge(f, i.nodeType ? [i] : i);
                    else if (xe.test(i)) {
                for (a = a || d.appendChild(t.createElement("div")), s = (ve.exec(i) || ["", ""])[1].toLowerCase(), u = ye[s] || ye._default, a.innerHTML = u[1] + C.htmlPrefilter(i) + u[2], l = u[0]; l--;) a = a.lastChild;
                C.merge(f, a.childNodes), (a = d.firstChild).textContent = ""
            } else f.push(t.createTextNode(i));
            for (d.textContent = "", p = 0; i = f[p++];)
                if (r && C.inArray(i, r) > -1) o && o.push(i);
                else if (c = ae(i), a = we(d.appendChild(i), "script"), c && be(a), n)
                for (l = 0; i = a[l++];) ge.test(i.type || "") && n.push(i);
            return d
        }
        var Ce = /^key/,
            Se = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
            Ee = /^([^.]*)(?:\.(.+)|)/;

        function Te() {
            return !0
        }

        function je() {
            return !1
        }

        function _e(e, t) {
            return e === function() {
                try {
                    return w.activeElement
                } catch (e) {}
            }() == ("focus" === t)
        }

        function Pe(e, t, n, r, o, i) {
            var a, s;
            if ("object" == typeof t) {
                for (s in "string" != typeof n && (r = r || n, n = void 0), t) Pe(e, s, n, r, t[s], i);
                return e
            }
            if (null == r && null == o ? (o = n, r = n = void 0) : null == o && ("string" == typeof n ? (o = r, r = void 0) : (o = r, r = n, n = void 0)), !1 === o) o = je;
            else if (!o) return e;
            return 1 === i && (a = o, (o = function(e) {
                return C().off(e), a.apply(this, arguments)
            }).guid = a.guid || (a.guid = C.guid++)), e.each((function() {
                C.event.add(this, t, o, r, n)
            }))
        }

        function Me(e, t, n) {
            n ? (Q.set(e, t, !1), C.event.add(e, t, {
                namespace: !1,
                handler: function(e) {
                    var r, o, i = Q.get(this, t);
                    if (1 & e.isTrigger && this[t]) {
                        if (i.length)(C.event.special[t] || {}).delegateType && e.stopPropagation();
                        else if (i = s.call(arguments), Q.set(this, t, i), r = n(this, t), this[t](), i !== (o = Q.get(this, t)) || r ? Q.set(this, t, !1) : o = {}, i !== o) return e.stopImmediatePropagation(), e.preventDefault(), o.value
                    } else i.length && (Q.set(this, t, {
                        value: C.event.trigger(C.extend(i[0], C.Event.prototype), i.slice(1), this)
                    }), e.stopImmediatePropagation())
                }
            })) : void 0 === Q.get(e, t) && C.event.add(e, t, Te)
        }
        C.event = {
            global: {},
            add: function(e, t, n, r, o) {
                var i, a, s, u, c, l, d, f, p, h, m, v = Q.get(e);
                if (J(e))
                    for (n.handler && (n = (i = n).handler, o = i.selector), o && C.find.matchesSelector(ie, o), n.guid || (n.guid = C.guid++), (u = v.events) || (u = v.events = Object.create(null)), (a = v.handle) || (a = v.handle = function(t) {
                            return void 0 !== C && C.event.triggered !== t.type ? C.event.dispatch.apply(e, arguments) : void 0
                        }), c = (t = (t || "").match(R) || [""]).length; c--;) p = m = (s = Ee.exec(t[c]) || [])[1], h = (s[2] || "").split(".").sort(), p && (d = C.event.special[p] || {}, p = (o ? d.delegateType : d.bindType) || p, d = C.event.special[p] || {}, l = C.extend({
                        type: p,
                        origType: m,
                        data: r,
                        handler: n,
                        guid: n.guid,
                        selector: o,
                        needsContext: o && C.expr.match.needsContext.test(o),
                        namespace: h.join(".")
                    }, i), (f = u[p]) || ((f = u[p] = []).delegateCount = 0, d.setup && !1 !== d.setup.call(e, r, h, a) || e.addEventListener && e.addEventListener(p, a)), d.add && (d.add.call(e, l), l.handler.guid || (l.handler.guid = n.guid)), o ? f.splice(f.delegateCount++, 0, l) : f.push(l), C.event.global[p] = !0)
            },
            remove: function(e, t, n, r, o) {
                var i, a, s, u, c, l, d, f, p, h, m, v = Q.hasData(e) && Q.get(e);
                if (v && (u = v.events)) {
                    for (c = (t = (t || "").match(R) || [""]).length; c--;)
                        if (p = m = (s = Ee.exec(t[c]) || [])[1], h = (s[2] || "").split(".").sort(), p) {
                            for (d = C.event.special[p] || {}, f = u[p = (r ? d.delegateType : d.bindType) || p] || [], s = s[2] && new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)"), a = i = f.length; i--;) l = f[i], !o && m !== l.origType || n && n.guid !== l.guid || s && !s.test(l.namespace) || r && r !== l.selector && ("**" !== r || !l.selector) || (f.splice(i, 1), l.selector && f.delegateCount--, d.remove && d.remove.call(e, l));
                            a && !f.length && (d.teardown && !1 !== d.teardown.call(e, h, v.handle) || C.removeEvent(e, p, v.handle), delete u[p])
                        } else
                            for (p in u) C.event.remove(e, p + t[c], n, r, !0);
                    C.isEmptyObject(u) && Q.remove(e, "handle events")
                }
            },
            dispatch: function(e) {
                var t, n, r, o, i, a, s = new Array(arguments.length),
                    u = C.event.fix(e),
                    c = (Q.get(this, "events") || Object.create(null))[u.type] || [],
                    l = C.event.special[u.type] || {};
                for (s[0] = u, t = 1; t < arguments.length; t++) s[t] = arguments[t];
                if (u.delegateTarget = this, !l.preDispatch || !1 !== l.preDispatch.call(this, u)) {
                    for (a = C.event.handlers.call(this, u, c), t = 0;
                        (o = a[t++]) && !u.isPropagationStopped();)
                        for (u.currentTarget = o.elem, n = 0;
                            (i = o.handlers[n++]) && !u.isImmediatePropagationStopped();) u.rnamespace && !1 !== i.namespace && !u.rnamespace.test(i.namespace) || (u.handleObj = i, u.data = i.data, void 0 !== (r = ((C.event.special[i.origType] || {}).handle || i.handler).apply(o.elem, s)) && !1 === (u.result = r) && (u.preventDefault(), u.stopPropagation()));
                    return l.postDispatch && l.postDispatch.call(this, u), u.result
                }
            },
            handlers: function(e, t) {
                var n, r, o, i, a, s = [],
                    u = t.delegateCount,
                    c = e.target;
                if (u && c.nodeType && !("click" === e.type && e.button >= 1))
                    for (; c !== this; c = c.parentNode || this)
                        if (1 === c.nodeType && ("click" !== e.type || !0 !== c.disabled)) {
                            for (i = [], a = {}, n = 0; n < u; n++) void 0 === a[o = (r = t[n]).selector + " "] && (a[o] = r.needsContext ? C(o, this).index(c) > -1 : C.find(o, this, null, [c]).length), a[o] && i.push(r);
                            i.length && s.push({
                                elem: c,
                                handlers: i
                            })
                        } return c = this, u < t.length && s.push({
                    elem: c,
                    handlers: t.slice(u)
                }), s
            },
            addProp: function(e, t) {
                Object.defineProperty(C.Event.prototype, e, {
                    enumerable: !0,
                    configurable: !0,
                    get: g(t) ? function() {
                        if (this.originalEvent) return t(this.originalEvent)
                    } : function() {
                        if (this.originalEvent) return this.originalEvent[e]
                    },
                    set: function(t) {
                        Object.defineProperty(this, e, {
                            enumerable: !0,
                            configurable: !0,
                            writable: !0,
                            value: t
                        })
                    }
                })
            },
            fix: function(e) {
                return e[C.expando] ? e : new C.Event(e)
            },
            special: {
                load: {
                    noBubble: !0
                },
                click: {
                    setup: function(e) {
                        var t = this || e;
                        return me.test(t.type) && t.click && P(t, "input") && Me(t, "click", Te), !1
                    },
                    trigger: function(e) {
                        var t = this || e;
                        return me.test(t.type) && t.click && P(t, "input") && Me(t, "click"), !0
                    },
                    _default: function(e) {
                        var t = e.target;
                        return me.test(t.type) && t.click && P(t, "input") && Q.get(t, "click") || P(t, "a")
                    }
                },
                beforeunload: {
                    postDispatch: function(e) {
                        void 0 !== e.result && e.originalEvent && (e.originalEvent.returnValue = e.result)
                    }
                }
            }
        }, C.removeEvent = function(e, t, n) {
            e.removeEventListener && e.removeEventListener(t, n)
        }, C.Event = function(e, t) {
            if (!(this instanceof C.Event)) return new C.Event(e, t);
            e && e.type ? (this.originalEvent = e, this.type = e.type, this.isDefaultPrevented = e.defaultPrevented || void 0 === e.defaultPrevented && !1 === e.returnValue ? Te : je, this.target = e.target && 3 === e.target.nodeType ? e.target.parentNode : e.target, this.currentTarget = e.currentTarget, this.relatedTarget = e.relatedTarget) : this.type = e, t && C.extend(this, t), this.timeStamp = e && e.timeStamp || Date.now(), this[C.expando] = !0
        }, C.Event.prototype = {
            constructor: C.Event,
            isDefaultPrevented: je,
            isPropagationStopped: je,
            isImmediatePropagationStopped: je,
            isSimulated: !1,
            preventDefault: function() {
                var e = this.originalEvent;
                this.isDefaultPrevented = Te, e && !this.isSimulated && e.preventDefault()
            },
            stopPropagation: function() {
                var e = this.originalEvent;
                this.isPropagationStopped = Te, e && !this.isSimulated && e.stopPropagation()
            },
            stopImmediatePropagation: function() {
                var e = this.originalEvent;
                this.isImmediatePropagationStopped = Te, e && !this.isSimulated && e.stopImmediatePropagation(), this.stopPropagation()
            }
        }, C.each({
            altKey: !0,
            bubbles: !0,
            cancelable: !0,
            changedTouches: !0,
            ctrlKey: !0,
            detail: !0,
            eventPhase: !0,
            metaKey: !0,
            pageX: !0,
            pageY: !0,
            shiftKey: !0,
            view: !0,
            char: !0,
            code: !0,
            charCode: !0,
            key: !0,
            keyCode: !0,
            button: !0,
            buttons: !0,
            clientX: !0,
            clientY: !0,
            offsetX: !0,
            offsetY: !0,
            pointerId: !0,
            pointerType: !0,
            screenX: !0,
            screenY: !0,
            targetTouches: !0,
            toElement: !0,
            touches: !0,
            which: function(e) {
                var t = e.button;
                return null == e.which && Ce.test(e.type) ? null != e.charCode ? e.charCode : e.keyCode : !e.which && void 0 !== t && Se.test(e.type) ? 1 & t ? 1 : 2 & t ? 3 : 4 & t ? 2 : 0 : e.which
            }
        }, C.event.addProp), C.each({
            focus: "focusin",
            blur: "focusout"
        }, (function(e, t) {
            C.event.special[e] = {
                setup: function() {
                    return Me(this, e, _e), !1
                },
                trigger: function() {
                    return Me(this, e), !0
                },
                delegateType: t
            }
        })), C.each({
            mouseenter: "mouseover",
            mouseleave: "mouseout",
            pointerenter: "pointerover",
            pointerleave: "pointerout"
        }, (function(e, t) {
            C.event.special[e] = {
                delegateType: t,
                bindType: t,
                handle: function(e) {
                    var n, r = this,
                        o = e.relatedTarget,
                        i = e.handleObj;
                    return o && (o === r || C.contains(r, o)) || (e.type = i.origType, n = i.handler.apply(this, arguments), e.type = t), n
                }
            }
        })), C.fn.extend({
            on: function(e, t, n, r) {
                return Pe(this, e, t, n, r)
            },
            one: function(e, t, n, r) {
                return Pe(this, e, t, n, r, 1)
            },
            off: function(e, t, n) {
                var r, o;
                if (e && e.preventDefault && e.handleObj) return r = e.handleObj, C(e.delegateTarget).off(r.namespace ? r.origType + "." + r.namespace : r.origType, r.selector, r.handler), this;
                if ("object" == typeof e) {
                    for (o in e) this.off(o, t, e[o]);
                    return this
                }
                return !1 !== t && "function" != typeof t || (n = t, t = void 0), !1 === n && (n = je), this.each((function() {
                    C.event.remove(this, e, n, t)
                }))
            }
        });
        var Le = /<script|<style|<link/i,
            Ae = /checked\s*(?:[^=]|=\s*.checked.)/i,
            qe = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;

        function Ve(e, t) {
            return P(e, "table") && P(11 !== t.nodeType ? t : t.firstChild, "tr") && C(e).children("tbody")[0] || e
        }

        function De(e) {
            return e.type = (null !== e.getAttribute("type")) + "/" + e.type, e
        }

        function Ne(e) {
            return "true/" === (e.type || "").slice(0, 5) ? e.type = e.type.slice(5) : e.removeAttribute("type"), e
        }

        function Re(e, t) {
            var n, r, o, i, a, s;
            if (1 === t.nodeType) {
                if (Q.hasData(e) && (s = Q.get(e).events))
                    for (o in Q.remove(t, "handle events"), s)
                        for (n = 0, r = s[o].length; n < r; n++) C.event.add(t, o, s[o][n]);
                Z.hasData(e) && (i = Z.access(e), a = C.extend({}, i), Z.set(t, a))
            }
        }

        function Oe(e, t) {
            var n = t.nodeName.toLowerCase();
            "input" === n && me.test(e.type) ? t.checked = e.checked : "input" !== n && "textarea" !== n || (t.defaultValue = e.defaultValue)
        }

        function Ie(e, t, n, r) {
            t = u(t);
            var o, i, a, s, c, l, d = 0,
                f = e.length,
                p = f - 1,
                h = t[0],
                m = g(h);
            if (m || f > 1 && "string" == typeof h && !v.checkClone && Ae.test(h)) return e.each((function(o) {
                var i = e.eq(o);
                m && (t[0] = h.call(this, o, i.html())), Ie(i, t, n, r)
            }));
            if (f && (i = (o = ke(t, e[0].ownerDocument, !1, e, r)).firstChild, 1 === o.childNodes.length && (o = i), i || r)) {
                for (s = (a = C.map(we(o, "script"), De)).length; d < f; d++) c = o, d !== p && (c = C.clone(c, !0, !0), s && C.merge(a, we(c, "script"))), n.call(e[d], c, d);
                if (s)
                    for (l = a[a.length - 1].ownerDocument, C.map(a, Ne), d = 0; d < s; d++) c = a[d], ge.test(c.type || "") && !Q.access(c, "globalEval") && C.contains(l, c) && (c.src && "module" !== (c.type || "").toLowerCase() ? C._evalUrl && !c.noModule && C._evalUrl(c.src, {
                        nonce: c.nonce || c.getAttribute("nonce")
                    }, l) : x(c.textContent.replace(qe, ""), c, l))
            }
            return e
        }

        function ze(e, t, n) {
            for (var r, o = t ? C.filter(t, e) : e, i = 0; null != (r = o[i]); i++) n || 1 !== r.nodeType || C.cleanData(we(r)), r.parentNode && (n && ae(r) && be(we(r, "script")), r.parentNode.removeChild(r));
            return e
        }
        C.extend({
            htmlPrefilter: function(e) {
                return e
            },
            clone: function(e, t, n) {
                var r, o, i, a, s = e.cloneNode(!0),
                    u = ae(e);
                if (!(v.noCloneChecked || 1 !== e.nodeType && 11 !== e.nodeType || C.isXMLDoc(e)))
                    for (a = we(s), r = 0, o = (i = we(e)).length; r < o; r++) Oe(i[r], a[r]);
                if (t)
                    if (n)
                        for (i = i || we(e), a = a || we(s), r = 0, o = i.length; r < o; r++) Re(i[r], a[r]);
                    else Re(e, s);
                return (a = we(s, "script")).length > 0 && be(a, !u && we(e, "script")), s
            },
            cleanData: function(e) {
                for (var t, n, r, o = C.event.special, i = 0; void 0 !== (n = e[i]); i++)
                    if (J(n)) {
                        if (t = n[Q.expando]) {
                            if (t.events)
                                for (r in t.events) o[r] ? C.event.remove(n, r) : C.removeEvent(n, r, t.handle);
                            n[Q.expando] = void 0
                        }
                        n[Z.expando] && (n[Z.expando] = void 0)
                    }
            }
        }), C.fn.extend({
            detach: function(e) {
                return ze(this, e, !0)
            },
            remove: function(e) {
                return ze(this, e)
            },
            text: function(e) {
                return U(this, (function(e) {
                    return void 0 === e ? C.text(this) : this.empty().each((function() {
                        1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || (this.textContent = e)
                    }))
                }), null, e, arguments.length)
            },
            append: function() {
                return Ie(this, arguments, (function(e) {
                    1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || Ve(this, e).appendChild(e)
                }))
            },
            prepend: function() {
                return Ie(this, arguments, (function(e) {
                    if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                        var t = Ve(this, e);
                        t.insertBefore(e, t.firstChild)
                    }
                }))
            },
            before: function() {
                return Ie(this, arguments, (function(e) {
                    this.parentNode && this.parentNode.insertBefore(e, this)
                }))
            },
            after: function() {
                return Ie(this, arguments, (function(e) {
                    this.parentNode && this.parentNode.insertBefore(e, this.nextSibling)
                }))
            },
            empty: function() {
                for (var e, t = 0; null != (e = this[t]); t++) 1 === e.nodeType && (C.cleanData(we(e, !1)), e.textContent = "");
                return this
            },
            clone: function(e, t) {
                return e = null != e && e, t = null == t ? e : t, this.map((function() {
                    return C.clone(this, e, t)
                }))
            },
            html: function(e) {
                return U(this, (function(e) {
                    var t = this[0] || {},
                        n = 0,
                        r = this.length;
                    if (void 0 === e && 1 === t.nodeType) return t.innerHTML;
                    if ("string" == typeof e && !Le.test(e) && !ye[(ve.exec(e) || ["", ""])[1].toLowerCase()]) {
                        e = C.htmlPrefilter(e);
                        try {
                            for (; n < r; n++) 1 === (t = this[n] || {}).nodeType && (C.cleanData(we(t, !1)), t.innerHTML = e);
                            t = 0
                        } catch (e) {}
                    }
                    t && this.empty().append(e)
                }), null, e, arguments.length)
            },
            replaceWith: function() {
                var e = [];
                return Ie(this, arguments, (function(t) {
                    var n = this.parentNode;
                    C.inArray(this, e) < 0 && (C.cleanData(we(this)), n && n.replaceChild(t, this))
                }), e)
            }
        }), C.each({
            appendTo: "append",
            prependTo: "prepend",
            insertBefore: "before",
            insertAfter: "after",
            replaceAll: "replaceWith"
        }, (function(e, t) {
            C.fn[e] = function(e) {
                for (var n, r = [], o = C(e), i = o.length - 1, a = 0; a <= i; a++) n = a === i ? this : this.clone(!0), C(o[a])[t](n), c.apply(r, n.get());
                return this.pushStack(r)
            }
        }));
        var He = new RegExp("^(" + ne + ")(?!px)[a-z%]+$", "i"),
            Be = function(e) {
                var t = e.ownerDocument.defaultView;
                return t && t.opener || (t = n), t.getComputedStyle(e)
            },
            Fe = function(e, t, n) {
                var r, o, i = {};
                for (o in t) i[o] = e.style[o], e.style[o] = t[o];
                for (o in r = n.call(e), t) e.style[o] = i[o];
                return r
            },
            Ue = new RegExp(oe.join("|"), "i");

        function We(e, t, n) {
            var r, o, i, a, s = e.style;
            return (n = n || Be(e)) && ("" !== (a = n.getPropertyValue(t) || n[t]) || ae(e) || (a = C.style(e, t)), !v.pixelBoxStyles() && He.test(a) && Ue.test(t) && (r = s.width, o = s.minWidth, i = s.maxWidth, s.minWidth = s.maxWidth = s.width = a, a = n.width, s.width = r, s.minWidth = o, s.maxWidth = i)), void 0 !== a ? a + "" : a
        }

        function $e(e, t) {
            return {
                get: function() {
                    if (!e()) return (this.get = t).apply(this, arguments);
                    delete this.get
                }
            }
        }! function() {
            function e() {
                if (l) {
                    c.style.cssText = "position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0", l.style.cssText = "position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%", ie.appendChild(c).appendChild(l);
                    var e = n.getComputedStyle(l);
                    r = "1%" !== e.top, u = 12 === t(e.marginLeft), l.style.right = "60%", a = 36 === t(e.right), o = 36 === t(e.width), l.style.position = "absolute", i = 12 === t(l.offsetWidth / 3), ie.removeChild(c), l = null
                }
            }

            function t(e) {
                return Math.round(parseFloat(e))
            }
            var r, o, i, a, s, u, c = w.createElement("div"),
                l = w.createElement("div");
            l.style && (l.style.backgroundClip = "content-box", l.cloneNode(!0).style.backgroundClip = "", v.clearCloneStyle = "content-box" === l.style.backgroundClip, C.extend(v, {
                boxSizingReliable: function() {
                    return e(), o
                },
                pixelBoxStyles: function() {
                    return e(), a
                },
                pixelPosition: function() {
                    return e(), r
                },
                reliableMarginLeft: function() {
                    return e(), u
                },
                scrollboxSize: function() {
                    return e(), i
                },
                reliableTrDimensions: function() {
                    var e, t, r, o;
                    return null == s && (e = w.createElement("table"), t = w.createElement("tr"), r = w.createElement("div"), e.style.cssText = "position:absolute;left:-11111px", t.style.height = "1px", r.style.height = "9px", ie.appendChild(e).appendChild(t).appendChild(r), o = n.getComputedStyle(t), s = parseInt(o.height) > 3, ie.removeChild(e)), s
                }
            }))
        }();
        var Ge = ["Webkit", "Moz", "ms"],
            Xe = w.createElement("div").style,
            Je = {};

        function Ye(e) {
            var t = C.cssProps[e] || Je[e];
            return t || (e in Xe ? e : Je[e] = function(e) {
                for (var t = e[0].toUpperCase() + e.slice(1), n = Ge.length; n--;)
                    if ((e = Ge[n] + t) in Xe) return e
            }(e) || e)
        }
        var Qe = /^(none|table(?!-c[ea]).+)/,
            Ze = /^--/,
            Ke = {
                position: "absolute",
                visibility: "hidden",
                display: "block"
            },
            et = {
                letterSpacing: "0",
                fontWeight: "400"
            };

        function tt(e, t, n) {
            var r = re.exec(t);
            return r ? Math.max(0, r[2] - (n || 0)) + (r[3] || "px") : t
        }

        function nt(e, t, n, r, o, i) {
            var a = "width" === t ? 1 : 0,
                s = 0,
                u = 0;
            if (n === (r ? "border" : "content")) return 0;
            for (; a < 4; a += 2) "margin" === n && (u += C.css(e, n + oe[a], !0, o)), r ? ("content" === n && (u -= C.css(e, "padding" + oe[a], !0, o)), "margin" !== n && (u -= C.css(e, "border" + oe[a] + "Width", !0, o))) : (u += C.css(e, "padding" + oe[a], !0, o), "padding" !== n ? u += C.css(e, "border" + oe[a] + "Width", !0, o) : s += C.css(e, "border" + oe[a] + "Width", !0, o));
            return !r && i >= 0 && (u += Math.max(0, Math.ceil(e["offset" + t[0].toUpperCase() + t.slice(1)] - i - u - s - .5)) || 0), u
        }

        function rt(e, t, n) {
            var r = Be(e),
                o = (!v.boxSizingReliable() || n) && "border-box" === C.css(e, "boxSizing", !1, r),
                i = o,
                a = We(e, t, r),
                s = "offset" + t[0].toUpperCase() + t.slice(1);
            if (He.test(a)) {
                if (!n) return a;
                a = "auto"
            }
            return (!v.boxSizingReliable() && o || !v.reliableTrDimensions() && P(e, "tr") || "auto" === a || !parseFloat(a) && "inline" === C.css(e, "display", !1, r)) && e.getClientRects().length && (o = "border-box" === C.css(e, "boxSizing", !1, r), (i = s in e) && (a = e[s])), (a = parseFloat(a) || 0) + nt(e, t, n || (o ? "border" : "content"), i, r, a) + "px"
        }

        function ot(e, t, n, r, o) {
            return new ot.prototype.init(e, t, n, r, o)
        }
        C.extend({
            cssHooks: {
                opacity: {
                    get: function(e, t) {
                        if (t) {
                            var n = We(e, "opacity");
                            return "" === n ? "1" : n
                        }
                    }
                }
            },
            cssNumber: {
                animationIterationCount: !0,
                columnCount: !0,
                fillOpacity: !0,
                flexGrow: !0,
                flexShrink: !0,
                fontWeight: !0,
                gridArea: !0,
                gridColumn: !0,
                gridColumnEnd: !0,
                gridColumnStart: !0,
                gridRow: !0,
                gridRowEnd: !0,
                gridRowStart: !0,
                lineHeight: !0,
                opacity: !0,
                order: !0,
                orphans: !0,
                widows: !0,
                zIndex: !0,
                zoom: !0
            },
            cssProps: {},
            style: function(e, t, n, r) {
                if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
                    var o, i, a, s = X(t),
                        u = Ze.test(t),
                        c = e.style;
                    if (u || (t = Ye(s)), a = C.cssHooks[t] || C.cssHooks[s], void 0 === n) return a && "get" in a && void 0 !== (o = a.get(e, !1, r)) ? o : c[t];
                    "string" === (i = typeof n) && (o = re.exec(n)) && o[1] && (n = ce(e, t, o), i = "number"), null != n && n == n && ("number" !== i || u || (n += o && o[3] || (C.cssNumber[s] ? "" : "px")), v.clearCloneStyle || "" !== n || 0 !== t.indexOf("background") || (c[t] = "inherit"), a && "set" in a && void 0 === (n = a.set(e, n, r)) || (u ? c.setProperty(t, n) : c[t] = n))
                }
            },
            css: function(e, t, n, r) {
                var o, i, a, s = X(t);
                return Ze.test(t) || (t = Ye(s)), (a = C.cssHooks[t] || C.cssHooks[s]) && "get" in a && (o = a.get(e, !0, n)), void 0 === o && (o = We(e, t, r)), "normal" === o && t in et && (o = et[t]), "" === n || n ? (i = parseFloat(o), !0 === n || isFinite(i) ? i || 0 : o) : o
            }
        }), C.each(["height", "width"], (function(e, t) {
            C.cssHooks[t] = {
                get: function(e, n, r) {
                    if (n) return !Qe.test(C.css(e, "display")) || e.getClientRects().length && e.getBoundingClientRect().width ? rt(e, t, r) : Fe(e, Ke, (function() {
                        return rt(e, t, r)
                    }))
                },
                set: function(e, n, r) {
                    var o, i = Be(e),
                        a = !v.scrollboxSize() && "absolute" === i.position,
                        s = (a || r) && "border-box" === C.css(e, "boxSizing", !1, i),
                        u = r ? nt(e, t, r, s, i) : 0;
                    return s && a && (u -= Math.ceil(e["offset" + t[0].toUpperCase() + t.slice(1)] - parseFloat(i[t]) - nt(e, t, "border", !1, i) - .5)), u && (o = re.exec(n)) && "px" !== (o[3] || "px") && (e.style[t] = n, n = C.css(e, t)), tt(0, n, u)
                }
            }
        })), C.cssHooks.marginLeft = $e(v.reliableMarginLeft, (function(e, t) {
            if (t) return (parseFloat(We(e, "marginLeft")) || e.getBoundingClientRect().left - Fe(e, {
                marginLeft: 0
            }, (function() {
                return e.getBoundingClientRect().left
            }))) + "px"
        })), C.each({
            margin: "",
            padding: "",
            border: "Width"
        }, (function(e, t) {
            C.cssHooks[e + t] = {
                expand: function(n) {
                    for (var r = 0, o = {}, i = "string" == typeof n ? n.split(" ") : [n]; r < 4; r++) o[e + oe[r] + t] = i[r] || i[r - 2] || i[0];
                    return o
                }
            }, "margin" !== e && (C.cssHooks[e + t].set = tt)
        })), C.fn.extend({
            css: function(e, t) {
                return U(this, (function(e, t, n) {
                    var r, o, i = {},
                        a = 0;
                    if (Array.isArray(t)) {
                        for (r = Be(e), o = t.length; a < o; a++) i[t[a]] = C.css(e, t[a], !1, r);
                        return i
                    }
                    return void 0 !== n ? C.style(e, t, n) : C.css(e, t)
                }), e, t, arguments.length > 1)
            }
        }), C.Tween = ot, ot.prototype = {
            constructor: ot,
            init: function(e, t, n, r, o, i) {
                this.elem = e, this.prop = n, this.easing = o || C.easing._default, this.options = t, this.start = this.now = this.cur(), this.end = r, this.unit = i || (C.cssNumber[n] ? "" : "px")
            },
            cur: function() {
                var e = ot.propHooks[this.prop];
                return e && e.get ? e.get(this) : ot.propHooks._default.get(this)
            },
            run: function(e) {
                var t, n = ot.propHooks[this.prop];
                return this.options.duration ? this.pos = t = C.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) : this.pos = t = e, this.now = (this.end - this.start) * t + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), n && n.set ? n.set(this) : ot.propHooks._default.set(this), this
            }
        }, ot.prototype.init.prototype = ot.prototype, ot.propHooks = {
            _default: {
                get: function(e) {
                    var t;
                    return 1 !== e.elem.nodeType || null != e.elem[e.prop] && null == e.elem.style[e.prop] ? e.elem[e.prop] : (t = C.css(e.elem, e.prop, "")) && "auto" !== t ? t : 0
                },
                set: function(e) {
                    C.fx.step[e.prop] ? C.fx.step[e.prop](e) : 1 !== e.elem.nodeType || !C.cssHooks[e.prop] && null == e.elem.style[Ye(e.prop)] ? e.elem[e.prop] = e.now : C.style(e.elem, e.prop, e.now + e.unit)
                }
            }
        }, ot.propHooks.scrollTop = ot.propHooks.scrollLeft = {
            set: function(e) {
                e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now)
            }
        }, C.easing = {
            linear: function(e) {
                return e
            },
            swing: function(e) {
                return .5 - Math.cos(e * Math.PI) / 2
            },
            _default: "swing"
        }, C.fx = ot.prototype.init, C.fx.step = {};
        var it, at, st = /^(?:toggle|show|hide)$/,
            ut = /queueHooks$/;

        function ct() {
            at && (!1 === w.hidden && n.requestAnimationFrame ? n.requestAnimationFrame(ct) : n.setTimeout(ct, C.fx.interval), C.fx.tick())
        }

        function lt() {
            return n.setTimeout((function() {
                it = void 0
            })), it = Date.now()
        }

        function dt(e, t) {
            var n, r = 0,
                o = {
                    height: e
                };
            for (t = t ? 1 : 0; r < 4; r += 2 - t) o["margin" + (n = oe[r])] = o["padding" + n] = e;
            return t && (o.opacity = o.width = e), o
        }

        function ft(e, t, n) {
            for (var r, o = (pt.tweeners[t] || []).concat(pt.tweeners["*"]), i = 0, a = o.length; i < a; i++)
                if (r = o[i].call(n, t, e)) return r
        }

        function pt(e, t, n) {
            var r, o, i = 0,
                a = pt.prefilters.length,
                s = C.Deferred().always((function() {
                    delete u.elem
                })),
                u = function() {
                    if (o) return !1;
                    for (var t = it || lt(), n = Math.max(0, c.startTime + c.duration - t), r = 1 - (n / c.duration || 0), i = 0, a = c.tweens.length; i < a; i++) c.tweens[i].run(r);
                    return s.notifyWith(e, [c, r, n]), r < 1 && a ? n : (a || s.notifyWith(e, [c, 1, 0]), s.resolveWith(e, [c]), !1)
                },
                c = s.promise({
                    elem: e,
                    props: C.extend({}, t),
                    opts: C.extend(!0, {
                        specialEasing: {},
                        easing: C.easing._default
                    }, n),
                    originalProperties: t,
                    originalOptions: n,
                    startTime: it || lt(),
                    duration: n.duration,
                    tweens: [],
                    createTween: function(t, n) {
                        var r = C.Tween(e, c.opts, t, n, c.opts.specialEasing[t] || c.opts.easing);
                        return c.tweens.push(r), r
                    },
                    stop: function(t) {
                        var n = 0,
                            r = t ? c.tweens.length : 0;
                        if (o) return this;
                        for (o = !0; n < r; n++) c.tweens[n].run(1);
                        return t ? (s.notifyWith(e, [c, 1, 0]), s.resolveWith(e, [c, t])) : s.rejectWith(e, [c, t]), this
                    }
                }),
                l = c.props;
            for (! function(e, t) {
                    var n, r, o, i, a;
                    for (n in e)
                        if (o = t[r = X(n)], i = e[n], Array.isArray(i) && (o = i[1], i = e[n] = i[0]), n !== r && (e[r] = i, delete e[n]), (a = C.cssHooks[r]) && "expand" in a)
                            for (n in i = a.expand(i), delete e[r], i) n in e || (e[n] = i[n], t[n] = o);
                        else t[r] = o
                }(l, c.opts.specialEasing); i < a; i++)
                if (r = pt.prefilters[i].call(c, e, l, c.opts)) return g(r.stop) && (C._queueHooks(c.elem, c.opts.queue).stop = r.stop.bind(r)), r;
            return C.map(l, ft, c), g(c.opts.start) && c.opts.start.call(e, c), c.progress(c.opts.progress).done(c.opts.done, c.opts.complete).fail(c.opts.fail).always(c.opts.always), C.fx.timer(C.extend(u, {
                elem: e,
                anim: c,
                queue: c.opts.queue
            })), c
        }
        C.Animation = C.extend(pt, {
                tweeners: {
                    "*": [function(e, t) {
                        var n = this.createTween(e, t);
                        return ce(n.elem, e, re.exec(t), n), n
                    }]
                },
                tweener: function(e, t) {
                    g(e) ? (t = e, e = ["*"]) : e = e.match(R);
                    for (var n, r = 0, o = e.length; r < o; r++) n = e[r], pt.tweeners[n] = pt.tweeners[n] || [], pt.tweeners[n].unshift(t)
                },
                prefilters: [function(e, t, n) {
                    var r, o, i, a, s, u, c, l, d = "width" in t || "height" in t,
                        f = this,
                        p = {},
                        h = e.style,
                        m = e.nodeType && ue(e),
                        v = Q.get(e, "fxshow");
                    for (r in n.queue || (null == (a = C._queueHooks(e, "fx")).unqueued && (a.unqueued = 0, s = a.empty.fire, a.empty.fire = function() {
                            a.unqueued || s()
                        }), a.unqueued++, f.always((function() {
                            f.always((function() {
                                a.unqueued--, C.queue(e, "fx").length || a.empty.fire()
                            }))
                        }))), t)
                        if (o = t[r], st.test(o)) {
                            if (delete t[r], i = i || "toggle" === o, o === (m ? "hide" : "show")) {
                                if ("show" !== o || !v || void 0 === v[r]) continue;
                                m = !0
                            }
                            p[r] = v && v[r] || C.style(e, r)
                        } if ((u = !C.isEmptyObject(t)) || !C.isEmptyObject(p))
                        for (r in d && 1 === e.nodeType && (n.overflow = [h.overflow, h.overflowX, h.overflowY], null == (c = v && v.display) && (c = Q.get(e, "display")), "none" === (l = C.css(e, "display")) && (c ? l = c : (fe([e], !0), c = e.style.display || c, l = C.css(e, "display"), fe([e]))), ("inline" === l || "inline-block" === l && null != c) && "none" === C.css(e, "float") && (u || (f.done((function() {
                                h.display = c
                            })), null == c && (l = h.display, c = "none" === l ? "" : l)), h.display = "inline-block")), n.overflow && (h.overflow = "hidden", f.always((function() {
                                h.overflow = n.overflow[0], h.overflowX = n.overflow[1], h.overflowY = n.overflow[2]
                            }))), u = !1, p) u || (v ? "hidden" in v && (m = v.hidden) : v = Q.access(e, "fxshow", {
                            display: c
                        }), i && (v.hidden = !m), m && fe([e], !0), f.done((function() {
                            for (r in m || fe([e]), Q.remove(e, "fxshow"), p) C.style(e, r, p[r])
                        }))), u = ft(m ? v[r] : 0, r, f), r in v || (v[r] = u.start, m && (u.end = u.start, u.start = 0))
                }],
                prefilter: function(e, t) {
                    t ? pt.prefilters.unshift(e) : pt.prefilters.push(e)
                }
            }), C.speed = function(e, t, n) {
                var r = e && "object" == typeof e ? C.extend({}, e) : {
                    complete: n || !n && t || g(e) && e,
                    duration: e,
                    easing: n && t || t && !g(t) && t
                };
                return C.fx.off ? r.duration = 0 : "number" != typeof r.duration && (r.duration in C.fx.speeds ? r.duration = C.fx.speeds[r.duration] : r.duration = C.fx.speeds._default), null != r.queue && !0 !== r.queue || (r.queue = "fx"), r.old = r.complete, r.complete = function() {
                    g(r.old) && r.old.call(this), r.queue && C.dequeue(this, r.queue)
                }, r
            }, C.fn.extend({
                fadeTo: function(e, t, n, r) {
                    return this.filter(ue).css("opacity", 0).show().end().animate({
                        opacity: t
                    }, e, n, r)
                },
                animate: function(e, t, n, r) {
                    var o = C.isEmptyObject(e),
                        i = C.speed(t, n, r),
                        a = function() {
                            var t = pt(this, C.extend({}, e), i);
                            (o || Q.get(this, "finish")) && t.stop(!0)
                        };
                    return a.finish = a, o || !1 === i.queue ? this.each(a) : this.queue(i.queue, a)
                },
                stop: function(e, t, n) {
                    var r = function(e) {
                        var t = e.stop;
                        delete e.stop, t(n)
                    };
                    return "string" != typeof e && (n = t, t = e, e = void 0), t && this.queue(e || "fx", []), this.each((function() {
                        var t = !0,
                            o = null != e && e + "queueHooks",
                            i = C.timers,
                            a = Q.get(this);
                        if (o) a[o] && a[o].stop && r(a[o]);
                        else
                            for (o in a) a[o] && a[o].stop && ut.test(o) && r(a[o]);
                        for (o = i.length; o--;) i[o].elem !== this || null != e && i[o].queue !== e || (i[o].anim.stop(n), t = !1, i.splice(o, 1));
                        !t && n || C.dequeue(this, e)
                    }))
                },
                finish: function(e) {
                    return !1 !== e && (e = e || "fx"), this.each((function() {
                        var t, n = Q.get(this),
                            r = n[e + "queue"],
                            o = n[e + "queueHooks"],
                            i = C.timers,
                            a = r ? r.length : 0;
                        for (n.finish = !0, C.queue(this, e, []), o && o.stop && o.stop.call(this, !0), t = i.length; t--;) i[t].elem === this && i[t].queue === e && (i[t].anim.stop(!0), i.splice(t, 1));
                        for (t = 0; t < a; t++) r[t] && r[t].finish && r[t].finish.call(this);
                        delete n.finish
                    }))
                }
            }), C.each(["toggle", "show", "hide"], (function(e, t) {
                var n = C.fn[t];
                C.fn[t] = function(e, r, o) {
                    return null == e || "boolean" == typeof e ? n.apply(this, arguments) : this.animate(dt(t, !0), e, r, o)
                }
            })), C.each({
                slideDown: dt("show"),
                slideUp: dt("hide"),
                slideToggle: dt("toggle"),
                fadeIn: {
                    opacity: "show"
                },
                fadeOut: {
                    opacity: "hide"
                },
                fadeToggle: {
                    opacity: "toggle"
                }
            }, (function(e, t) {
                C.fn[e] = function(e, n, r) {
                    return this.animate(t, e, n, r)
                }
            })), C.timers = [], C.fx.tick = function() {
                var e, t = 0,
                    n = C.timers;
                for (it = Date.now(); t < n.length; t++)(e = n[t])() || n[t] !== e || n.splice(t--, 1);
                n.length || C.fx.stop(), it = void 0
            }, C.fx.timer = function(e) {
                C.timers.push(e), C.fx.start()
            }, C.fx.interval = 13, C.fx.start = function() {
                at || (at = !0, ct())
            }, C.fx.stop = function() {
                at = null
            }, C.fx.speeds = {
                slow: 600,
                fast: 200,
                _default: 400
            }, C.fn.delay = function(e, t) {
                return e = C.fx && C.fx.speeds[e] || e, t = t || "fx", this.queue(t, (function(t, r) {
                    var o = n.setTimeout(t, e);
                    r.stop = function() {
                        n.clearTimeout(o)
                    }
                }))
            },
            function() {
                var e = w.createElement("input"),
                    t = w.createElement("select").appendChild(w.createElement("option"));
                e.type = "checkbox", v.checkOn = "" !== e.value, v.optSelected = t.selected, (e = w.createElement("input")).value = "t", e.type = "radio", v.radioValue = "t" === e.value
            }();
        var ht, mt = C.expr.attrHandle;
        C.fn.extend({
            attr: function(e, t) {
                return U(this, C.attr, e, t, arguments.length > 1)
            },
            removeAttr: function(e) {
                return this.each((function() {
                    C.removeAttr(this, e)
                }))
            }
        }), C.extend({
            attr: function(e, t, n) {
                var r, o, i = e.nodeType;
                if (3 !== i && 8 !== i && 2 !== i) return void 0 === e.getAttribute ? C.prop(e, t, n) : (1 === i && C.isXMLDoc(e) || (o = C.attrHooks[t.toLowerCase()] || (C.expr.match.bool.test(t) ? ht : void 0)), void 0 !== n ? null === n ? void C.removeAttr(e, t) : o && "set" in o && void 0 !== (r = o.set(e, n, t)) ? r : (e.setAttribute(t, n + ""), n) : o && "get" in o && null !== (r = o.get(e, t)) ? r : null == (r = C.find.attr(e, t)) ? void 0 : r)
            },
            attrHooks: {
                type: {
                    set: function(e, t) {
                        if (!v.radioValue && "radio" === t && P(e, "input")) {
                            var n = e.value;
                            return e.setAttribute("type", t), n && (e.value = n), t
                        }
                    }
                }
            },
            removeAttr: function(e, t) {
                var n, r = 0,
                    o = t && t.match(R);
                if (o && 1 === e.nodeType)
                    for (; n = o[r++];) e.removeAttribute(n)
            }
        }), ht = {
            set: function(e, t, n) {
                return !1 === t ? C.removeAttr(e, n) : e.setAttribute(n, n), n
            }
        }, C.each(C.expr.match.bool.source.match(/\w+/g), (function(e, t) {
            var n = mt[t] || C.find.attr;
            mt[t] = function(e, t, r) {
                var o, i, a = t.toLowerCase();
                return r || (i = mt[a], mt[a] = o, o = null != n(e, t, r) ? a : null, mt[a] = i), o
            }
        }));
        var vt = /^(?:input|select|textarea|button)$/i,
            gt = /^(?:a|area)$/i;

        function yt(e) {
            return (e.match(R) || []).join(" ")
        }

        function wt(e) {
            return e.getAttribute && e.getAttribute("class") || ""
        }

        function bt(e) {
            return Array.isArray(e) ? e : "string" == typeof e && e.match(R) || []
        }
        C.fn.extend({
            prop: function(e, t) {
                return U(this, C.prop, e, t, arguments.length > 1)
            },
            removeProp: function(e) {
                return this.each((function() {
                    delete this[C.propFix[e] || e]
                }))
            }
        }), C.extend({
            prop: function(e, t, n) {
                var r, o, i = e.nodeType;
                if (3 !== i && 8 !== i && 2 !== i) return 1 === i && C.isXMLDoc(e) || (t = C.propFix[t] || t, o = C.propHooks[t]), void 0 !== n ? o && "set" in o && void 0 !== (r = o.set(e, n, t)) ? r : e[t] = n : o && "get" in o && null !== (r = o.get(e, t)) ? r : e[t]
            },
            propHooks: {
                tabIndex: {
                    get: function(e) {
                        var t = C.find.attr(e, "tabindex");
                        return t ? parseInt(t, 10) : vt.test(e.nodeName) || gt.test(e.nodeName) && e.href ? 0 : -1
                    }
                }
            },
            propFix: {
                for: "htmlFor",
                class: "className"
            }
        }), v.optSelected || (C.propHooks.selected = {
            get: function(e) {
                var t = e.parentNode;
                return t && t.parentNode && t.parentNode.selectedIndex, null
            },
            set: function(e) {
                var t = e.parentNode;
                t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex)
            }
        }), C.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], (function() {
            C.propFix[this.toLowerCase()] = this
        })), C.fn.extend({
            addClass: function(e) {
                var t, n, r, o, i, a, s, u = 0;
                if (g(e)) return this.each((function(t) {
                    C(this).addClass(e.call(this, t, wt(this)))
                }));
                if ((t = bt(e)).length)
                    for (; n = this[u++];)
                        if (o = wt(n), r = 1 === n.nodeType && " " + yt(o) + " ") {
                            for (a = 0; i = t[a++];) r.indexOf(" " + i + " ") < 0 && (r += i + " ");
                            o !== (s = yt(r)) && n.setAttribute("class", s)
                        } return this
            },
            removeClass: function(e) {
                var t, n, r, o, i, a, s, u = 0;
                if (g(e)) return this.each((function(t) {
                    C(this).removeClass(e.call(this, t, wt(this)))
                }));
                if (!arguments.length) return this.attr("class", "");
                if ((t = bt(e)).length)
                    for (; n = this[u++];)
                        if (o = wt(n), r = 1 === n.nodeType && " " + yt(o) + " ") {
                            for (a = 0; i = t[a++];)
                                for (; r.indexOf(" " + i + " ") > -1;) r = r.replace(" " + i + " ", " ");
                            o !== (s = yt(r)) && n.setAttribute("class", s)
                        } return this
            },
            toggleClass: function(e, t) {
                var n = typeof e,
                    r = "string" === n || Array.isArray(e);
                return "boolean" == typeof t && r ? t ? this.addClass(e) : this.removeClass(e) : g(e) ? this.each((function(n) {
                    C(this).toggleClass(e.call(this, n, wt(this), t), t)
                })) : this.each((function() {
                    var t, o, i, a;
                    if (r)
                        for (o = 0, i = C(this), a = bt(e); t = a[o++];) i.hasClass(t) ? i.removeClass(t) : i.addClass(t);
                    else void 0 !== e && "boolean" !== n || ((t = wt(this)) && Q.set(this, "__className__", t), this.setAttribute && this.setAttribute("class", t || !1 === e ? "" : Q.get(this, "__className__") || ""))
                }))
            },
            hasClass: function(e) {
                var t, n, r = 0;
                for (t = " " + e + " "; n = this[r++];)
                    if (1 === n.nodeType && (" " + yt(wt(n)) + " ").indexOf(t) > -1) return !0;
                return !1
            }
        });
        var xt = /\r/g;
        C.fn.extend({
            val: function(e) {
                var t, n, r, o = this[0];
                return arguments.length ? (r = g(e), this.each((function(n) {
                    var o;
                    1 === this.nodeType && (null == (o = r ? e.call(this, n, C(this).val()) : e) ? o = "" : "number" == typeof o ? o += "" : Array.isArray(o) && (o = C.map(o, (function(e) {
                        return null == e ? "" : e + ""
                    }))), (t = C.valHooks[this.type] || C.valHooks[this.nodeName.toLowerCase()]) && "set" in t && void 0 !== t.set(this, o, "value") || (this.value = o))
                }))) : o ? (t = C.valHooks[o.type] || C.valHooks[o.nodeName.toLowerCase()]) && "get" in t && void 0 !== (n = t.get(o, "value")) ? n : "string" == typeof(n = o.value) ? n.replace(xt, "") : null == n ? "" : n : void 0
            }
        }), C.extend({
            valHooks: {
                option: {
                    get: function(e) {
                        var t = C.find.attr(e, "value");
                        return null != t ? t : yt(C.text(e))
                    }
                },
                select: {
                    get: function(e) {
                        var t, n, r, o = e.options,
                            i = e.selectedIndex,
                            a = "select-one" === e.type,
                            s = a ? null : [],
                            u = a ? i + 1 : o.length;
                        for (r = i < 0 ? u : a ? i : 0; r < u; r++)
                            if (((n = o[r]).selected || r === i) && !n.disabled && (!n.parentNode.disabled || !P(n.parentNode, "optgroup"))) {
                                if (t = C(n).val(), a) return t;
                                s.push(t)
                            } return s
                    },
                    set: function(e, t) {
                        for (var n, r, o = e.options, i = C.makeArray(t), a = o.length; a--;)((r = o[a]).selected = C.inArray(C.valHooks.option.get(r), i) > -1) && (n = !0);
                        return n || (e.selectedIndex = -1), i
                    }
                }
            }
        }), C.each(["radio", "checkbox"], (function() {
            C.valHooks[this] = {
                set: function(e, t) {
                    if (Array.isArray(t)) return e.checked = C.inArray(C(e).val(), t) > -1
                }
            }, v.checkOn || (C.valHooks[this].get = function(e) {
                return null === e.getAttribute("value") ? "on" : e.value
            })
        })), v.focusin = "onfocusin" in n;
        var kt = /^(?:focusinfocus|focusoutblur)$/,
            Ct = function(e) {
                e.stopPropagation()
            };
        C.extend(C.event, {
            trigger: function(e, t, r, o) {
                var i, a, s, u, c, l, d, f, h = [r || w],
                    m = p.call(e, "type") ? e.type : e,
                    v = p.call(e, "namespace") ? e.namespace.split(".") : [];
                if (a = f = s = r = r || w, 3 !== r.nodeType && 8 !== r.nodeType && !kt.test(m + C.event.triggered) && (m.indexOf(".") > -1 && (v = m.split("."), m = v.shift(), v.sort()), c = m.indexOf(":") < 0 && "on" + m, (e = e[C.expando] ? e : new C.Event(m, "object" == typeof e && e)).isTrigger = o ? 2 : 3, e.namespace = v.join("."), e.rnamespace = e.namespace ? new RegExp("(^|\\.)" + v.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, e.result = void 0, e.target || (e.target = r), t = null == t ? [e] : C.makeArray(t, [e]), d = C.event.special[m] || {}, o || !d.trigger || !1 !== d.trigger.apply(r, t))) {
                    if (!o && !d.noBubble && !y(r)) {
                        for (u = d.delegateType || m, kt.test(u + m) || (a = a.parentNode); a; a = a.parentNode) h.push(a), s = a;
                        s === (r.ownerDocument || w) && h.push(s.defaultView || s.parentWindow || n)
                    }
                    for (i = 0;
                        (a = h[i++]) && !e.isPropagationStopped();) f = a, e.type = i > 1 ? u : d.bindType || m, (l = (Q.get(a, "events") || Object.create(null))[e.type] && Q.get(a, "handle")) && l.apply(a, t), (l = c && a[c]) && l.apply && J(a) && (e.result = l.apply(a, t), !1 === e.result && e.preventDefault());
                    return e.type = m, o || e.isDefaultPrevented() || d._default && !1 !== d._default.apply(h.pop(), t) || !J(r) || c && g(r[m]) && !y(r) && ((s = r[c]) && (r[c] = null), C.event.triggered = m, e.isPropagationStopped() && f.addEventListener(m, Ct), r[m](), e.isPropagationStopped() && f.removeEventListener(m, Ct), C.event.triggered = void 0, s && (r[c] = s)), e.result
                }
            },
            simulate: function(e, t, n) {
                var r = C.extend(new C.Event, n, {
                    type: e,
                    isSimulated: !0
                });
                C.event.trigger(r, null, t)
            }
        }), C.fn.extend({
            trigger: function(e, t) {
                return this.each((function() {
                    C.event.trigger(e, t, this)
                }))
            },
            triggerHandler: function(e, t) {
                var n = this[0];
                if (n) return C.event.trigger(e, t, n, !0)
            }
        }), v.focusin || C.each({
            focus: "focusin",
            blur: "focusout"
        }, (function(e, t) {
            var n = function(e) {
                C.event.simulate(t, e.target, C.event.fix(e))
            };
            C.event.special[t] = {
                setup: function() {
                    var r = this.ownerDocument || this.document || this,
                        o = Q.access(r, t);
                    o || r.addEventListener(e, n, !0), Q.access(r, t, (o || 0) + 1)
                },
                teardown: function() {
                    var r = this.ownerDocument || this.document || this,
                        o = Q.access(r, t) - 1;
                    o ? Q.access(r, t, o) : (r.removeEventListener(e, n, !0), Q.remove(r, t))
                }
            }
        }));
        var St = n.location,
            Et = {
                guid: Date.now()
            },
            Tt = /\?/;
        C.parseXML = function(e) {
            var t;
            if (!e || "string" != typeof e) return null;
            try {
                t = (new n.DOMParser).parseFromString(e, "text/xml")
            } catch (e) {
                t = void 0
            }
            return t && !t.getElementsByTagName("parsererror").length || C.error("Invalid XML: " + e), t
        };
        var jt = /\[\]$/,
            _t = /\r?\n/g,
            Pt = /^(?:submit|button|image|reset|file)$/i,
            Mt = /^(?:input|select|textarea|keygen)/i;

        function Lt(e, t, n, r) {
            var o;
            if (Array.isArray(t)) C.each(t, (function(t, o) {
                n || jt.test(e) ? r(e, o) : Lt(e + "[" + ("object" == typeof o && null != o ? t : "") + "]", o, n, r)
            }));
            else if (n || "object" !== k(t)) r(e, t);
            else
                for (o in t) Lt(e + "[" + o + "]", t[o], n, r)
        }
        C.param = function(e, t) {
            var n, r = [],
                o = function(e, t) {
                    var n = g(t) ? t() : t;
                    r[r.length] = encodeURIComponent(e) + "=" + encodeURIComponent(null == n ? "" : n)
                };
            if (null == e) return "";
            if (Array.isArray(e) || e.jquery && !C.isPlainObject(e)) C.each(e, (function() {
                o(this.name, this.value)
            }));
            else
                for (n in e) Lt(n, e[n], t, o);
            return r.join("&")
        }, C.fn.extend({
            serialize: function() {
                return C.param(this.serializeArray())
            },
            serializeArray: function() {
                return this.map((function() {
                    var e = C.prop(this, "elements");
                    return e ? C.makeArray(e) : this
                })).filter((function() {
                    var e = this.type;
                    return this.name && !C(this).is(":disabled") && Mt.test(this.nodeName) && !Pt.test(e) && (this.checked || !me.test(e))
                })).map((function(e, t) {
                    var n = C(this).val();
                    return null == n ? null : Array.isArray(n) ? C.map(n, (function(e) {
                        return {
                            name: t.name,
                            value: e.replace(_t, "\r\n")
                        }
                    })) : {
                        name: t.name,
                        value: n.replace(_t, "\r\n")
                    }
                })).get()
            }
        });
        var At = /%20/g,
            qt = /#.*$/,
            Vt = /([?&])_=[^&]*/,
            Dt = /^(.*?):[ \t]*([^\r\n]*)$/gm,
            Nt = /^(?:GET|HEAD)$/,
            Rt = /^\/\//,
            Ot = {},
            It = {},
            zt = "*/".concat("*"),
            Ht = w.createElement("a");

        function Bt(e) {
            return function(t, n) {
                "string" != typeof t && (n = t, t = "*");
                var r, o = 0,
                    i = t.toLowerCase().match(R) || [];
                if (g(n))
                    for (; r = i[o++];) "+" === r[0] ? (r = r.slice(1) || "*", (e[r] = e[r] || []).unshift(n)) : (e[r] = e[r] || []).push(n)
            }
        }

        function Ft(e, t, n, r) {
            var o = {},
                i = e === It;

            function a(s) {
                var u;
                return o[s] = !0, C.each(e[s] || [], (function(e, s) {
                    var c = s(t, n, r);
                    return "string" != typeof c || i || o[c] ? i ? !(u = c) : void 0 : (t.dataTypes.unshift(c), a(c), !1)
                })), u
            }
            return a(t.dataTypes[0]) || !o["*"] && a("*")
        }

        function Ut(e, t) {
            var n, r, o = C.ajaxSettings.flatOptions || {};
            for (n in t) void 0 !== t[n] && ((o[n] ? e : r || (r = {}))[n] = t[n]);
            return r && C.extend(!0, e, r), e
        }
        Ht.href = St.href, C.extend({
            active: 0,
            lastModified: {},
            etag: {},
            ajaxSettings: {
                url: St.href,
                type: "GET",
                isLocal: /^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(St.protocol),
                global: !0,
                processData: !0,
                async: !0,
                contentType: "application/x-www-form-urlencoded; charset=UTF-8",
                accepts: {
                    "*": zt,
                    text: "text/plain",
                    html: "text/html",
                    xml: "application/xml, text/xml",
                    json: "application/json, text/javascript"
                },
                contents: {
                    xml: /\bxml\b/,
                    html: /\bhtml/,
                    json: /\bjson\b/
                },
                responseFields: {
                    xml: "responseXML",
                    text: "responseText",
                    json: "responseJSON"
                },
                converters: {
                    "* text": String,
                    "text html": !0,
                    "text json": JSON.parse,
                    "text xml": C.parseXML
                },
                flatOptions: {
                    url: !0,
                    context: !0
                }
            },
            ajaxSetup: function(e, t) {
                return t ? Ut(Ut(e, C.ajaxSettings), t) : Ut(C.ajaxSettings, e)
            },
            ajaxPrefilter: Bt(Ot),
            ajaxTransport: Bt(It),
            ajax: function(e, t) {
                "object" == typeof e && (t = e, e = void 0), t = t || {};
                var r, o, i, a, s, u, c, l, d, f, p = C.ajaxSetup({}, t),
                    h = p.context || p,
                    m = p.context && (h.nodeType || h.jquery) ? C(h) : C.event,
                    v = C.Deferred(),
                    g = C.Callbacks("once memory"),
                    y = p.statusCode || {},
                    b = {},
                    x = {},
                    k = "canceled",
                    S = {
                        readyState: 0,
                        getResponseHeader: function(e) {
                            var t;
                            if (c) {
                                if (!a)
                                    for (a = {}; t = Dt.exec(i);) a[t[1].toLowerCase() + " "] = (a[t[1].toLowerCase() + " "] || []).concat(t[2]);
                                t = a[e.toLowerCase() + " "]
                            }
                            return null == t ? null : t.join(", ")
                        },
                        getAllResponseHeaders: function() {
                            return c ? i : null
                        },
                        setRequestHeader: function(e, t) {
                            return null == c && (e = x[e.toLowerCase()] = x[e.toLowerCase()] || e, b[e] = t), this
                        },
                        overrideMimeType: function(e) {
                            return null == c && (p.mimeType = e), this
                        },
                        statusCode: function(e) {
                            var t;
                            if (e)
                                if (c) S.always(e[S.status]);
                                else
                                    for (t in e) y[t] = [y[t], e[t]];
                            return this
                        },
                        abort: function(e) {
                            var t = e || k;
                            return r && r.abort(t), E(0, t), this
                        }
                    };
                if (v.promise(S), p.url = ((e || p.url || St.href) + "").replace(Rt, St.protocol + "//"), p.type = t.method || t.type || p.method || p.type, p.dataTypes = (p.dataType || "*").toLowerCase().match(R) || [""], null == p.crossDomain) {
                    u = w.createElement("a");
                    try {
                        u.href = p.url, u.href = u.href, p.crossDomain = Ht.protocol + "//" + Ht.host != u.protocol + "//" + u.host
                    } catch (e) {
                        p.crossDomain = !0
                    }
                }
                if (p.data && p.processData && "string" != typeof p.data && (p.data = C.param(p.data, p.traditional)), Ft(Ot, p, t, S), c) return S;
                for (d in (l = C.event && p.global) && 0 == C.active++ && C.event.trigger("ajaxStart"), p.type = p.type.toUpperCase(), p.hasContent = !Nt.test(p.type), o = p.url.replace(qt, ""), p.hasContent ? p.data && p.processData && 0 === (p.contentType || "").indexOf("application/x-www-form-urlencoded") && (p.data = p.data.replace(At, "+")) : (f = p.url.slice(o.length), p.data && (p.processData || "string" == typeof p.data) && (o += (Tt.test(o) ? "&" : "?") + p.data, delete p.data), !1 === p.cache && (o = o.replace(Vt, "$1"), f = (Tt.test(o) ? "&" : "?") + "_=" + Et.guid++ + f), p.url = o + f), p.ifModified && (C.lastModified[o] && S.setRequestHeader("If-Modified-Since", C.lastModified[o]), C.etag[o] && S.setRequestHeader("If-None-Match", C.etag[o])), (p.data && p.hasContent && !1 !== p.contentType || t.contentType) && S.setRequestHeader("Content-Type", p.contentType), S.setRequestHeader("Accept", p.dataTypes[0] && p.accepts[p.dataTypes[0]] ? p.accepts[p.dataTypes[0]] + ("*" !== p.dataTypes[0] ? ", " + zt + "; q=0.01" : "") : p.accepts["*"]), p.headers) S.setRequestHeader(d, p.headers[d]);
                if (p.beforeSend && (!1 === p.beforeSend.call(h, S, p) || c)) return S.abort();
                if (k = "abort", g.add(p.complete), S.done(p.success), S.fail(p.error), r = Ft(It, p, t, S)) {
                    if (S.readyState = 1, l && m.trigger("ajaxSend", [S, p]), c) return S;
                    p.async && p.timeout > 0 && (s = n.setTimeout((function() {
                        S.abort("timeout")
                    }), p.timeout));
                    try {
                        c = !1, r.send(b, E)
                    } catch (e) {
                        if (c) throw e;
                        E(-1, e)
                    }
                } else E(-1, "No Transport");

                function E(e, t, a, u) {
                    var d, f, w, b, x, k = t;
                    c || (c = !0, s && n.clearTimeout(s), r = void 0, i = u || "", S.readyState = e > 0 ? 4 : 0, d = e >= 200 && e < 300 || 304 === e, a && (b = function(e, t, n) {
                        for (var r, o, i, a, s = e.contents, u = e.dataTypes;
                            "*" === u[0];) u.shift(), void 0 === r && (r = e.mimeType || t.getResponseHeader("Content-Type"));
                        if (r)
                            for (o in s)
                                if (s[o] && s[o].test(r)) {
                                    u.unshift(o);
                                    break
                                } if (u[0] in n) i = u[0];
                        else {
                            for (o in n) {
                                if (!u[0] || e.converters[o + " " + u[0]]) {
                                    i = o;
                                    break
                                }
                                a || (a = o)
                            }
                            i = i || a
                        }
                        if (i) return i !== u[0] && u.unshift(i), n[i]
                    }(p, S, a)), !d && C.inArray("script", p.dataTypes) > -1 && (p.converters["text script"] = function() {}), b = function(e, t, n, r) {
                        var o, i, a, s, u, c = {},
                            l = e.dataTypes.slice();
                        if (l[1])
                            for (a in e.converters) c[a.toLowerCase()] = e.converters[a];
                        for (i = l.shift(); i;)
                            if (e.responseFields[i] && (n[e.responseFields[i]] = t), !u && r && e.dataFilter && (t = e.dataFilter(t, e.dataType)), u = i, i = l.shift())
                                if ("*" === i) i = u;
                                else if ("*" !== u && u !== i) {
                            if (!(a = c[u + " " + i] || c["* " + i]))
                                for (o in c)
                                    if ((s = o.split(" "))[1] === i && (a = c[u + " " + s[0]] || c["* " + s[0]])) {
                                        !0 === a ? a = c[o] : !0 !== c[o] && (i = s[0], l.unshift(s[1]));
                                        break
                                    } if (!0 !== a)
                                if (a && e.throws) t = a(t);
                                else try {
                                    t = a(t)
                                } catch (e) {
                                    return {
                                        state: "parsererror",
                                        error: a ? e : "No conversion from " + u + " to " + i
                                    }
                                }
                        }
                        return {
                            state: "success",
                            data: t
                        }
                    }(p, b, S, d), d ? (p.ifModified && ((x = S.getResponseHeader("Last-Modified")) && (C.lastModified[o] = x), (x = S.getResponseHeader("etag")) && (C.etag[o] = x)), 204 === e || "HEAD" === p.type ? k = "nocontent" : 304 === e ? k = "notmodified" : (k = b.state, f = b.data, d = !(w = b.error))) : (w = k, !e && k || (k = "error", e < 0 && (e = 0))), S.status = e, S.statusText = (t || k) + "", d ? v.resolveWith(h, [f, k, S]) : v.rejectWith(h, [S, k, w]), S.statusCode(y), y = void 0, l && m.trigger(d ? "ajaxSuccess" : "ajaxError", [S, p, d ? f : w]), g.fireWith(h, [S, k]), l && (m.trigger("ajaxComplete", [S, p]), --C.active || C.event.trigger("ajaxStop")))
                }
                return S
            },
            getJSON: function(e, t, n) {
                return C.get(e, t, n, "json")
            },
            getScript: function(e, t) {
                return C.get(e, void 0, t, "script")
            }
        }), C.each(["get", "post"], (function(e, t) {
            C[t] = function(e, n, r, o) {
                return g(n) && (o = o || r, r = n, n = void 0), C.ajax(C.extend({
                    url: e,
                    type: t,
                    dataType: o,
                    data: n,
                    success: r
                }, C.isPlainObject(e) && e))
            }
        })), C.ajaxPrefilter((function(e) {
            var t;
            for (t in e.headers) "content-type" === t.toLowerCase() && (e.contentType = e.headers[t] || "")
        })), C._evalUrl = function(e, t, n) {
            return C.ajax({
                url: e,
                type: "GET",
                dataType: "script",
                cache: !0,
                async: !1,
                global: !1,
                converters: {
                    "text script": function() {}
                },
                dataFilter: function(e) {
                    C.globalEval(e, t, n)
                }
            })
        }, C.fn.extend({
            wrapAll: function(e) {
                var t;
                return this[0] && (g(e) && (e = e.call(this[0])), t = C(e, this[0].ownerDocument).eq(0).clone(!0), this[0].parentNode && t.insertBefore(this[0]), t.map((function() {
                    for (var e = this; e.firstElementChild;) e = e.firstElementChild;
                    return e
                })).append(this)), this
            },
            wrapInner: function(e) {
                return g(e) ? this.each((function(t) {
                    C(this).wrapInner(e.call(this, t))
                })) : this.each((function() {
                    var t = C(this),
                        n = t.contents();
                    n.length ? n.wrapAll(e) : t.append(e)
                }))
            },
            wrap: function(e) {
                var t = g(e);
                return this.each((function(n) {
                    C(this).wrapAll(t ? e.call(this, n) : e)
                }))
            },
            unwrap: function(e) {
                return this.parent(e).not("body").each((function() {
                    C(this).replaceWith(this.childNodes)
                })), this
            }
        }), C.expr.pseudos.hidden = function(e) {
            return !C.expr.pseudos.visible(e)
        }, C.expr.pseudos.visible = function(e) {
            return !!(e.offsetWidth || e.offsetHeight || e.getClientRects().length)
        }, C.ajaxSettings.xhr = function() {
            try {
                return new n.XMLHttpRequest
            } catch (e) {}
        };
        var Wt = {
                0: 200,
                1223: 204
            },
            $t = C.ajaxSettings.xhr();
        v.cors = !!$t && "withCredentials" in $t, v.ajax = $t = !!$t, C.ajaxTransport((function(e) {
            var t, r;
            if (v.cors || $t && !e.crossDomain) return {
                send: function(o, i) {
                    var a, s = e.xhr();
                    if (s.open(e.type, e.url, e.async, e.username, e.password), e.xhrFields)
                        for (a in e.xhrFields) s[a] = e.xhrFields[a];
                    for (a in e.mimeType && s.overrideMimeType && s.overrideMimeType(e.mimeType), e.crossDomain || o["X-Requested-With"] || (o["X-Requested-With"] = "XMLHttpRequest"), o) s.setRequestHeader(a, o[a]);
                    t = function(e) {
                        return function() {
                            t && (t = r = s.onload = s.onerror = s.onabort = s.ontimeout = s.onreadystatechange = null, "abort" === e ? s.abort() : "error" === e ? "number" != typeof s.status ? i(0, "error") : i(s.status, s.statusText) : i(Wt[s.status] || s.status, s.statusText, "text" !== (s.responseType || "text") || "string" != typeof s.responseText ? {
                                binary: s.response
                            } : {
                                text: s.responseText
                            }, s.getAllResponseHeaders()))
                        }
                    }, s.onload = t(), r = s.onerror = s.ontimeout = t("error"), void 0 !== s.onabort ? s.onabort = r : s.onreadystatechange = function() {
                        4 === s.readyState && n.setTimeout((function() {
                            t && r()
                        }))
                    }, t = t("abort");
                    try {
                        s.send(e.hasContent && e.data || null)
                    } catch (e) {
                        if (t) throw e
                    }
                },
                abort: function() {
                    t && t()
                }
            }
        })), C.ajaxPrefilter((function(e) {
            e.crossDomain && (e.contents.script = !1)
        })), C.ajaxSetup({
            accepts: {
                script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
            },
            contents: {
                script: /\b(?:java|ecma)script\b/
            },
            converters: {
                "text script": function(e) {
                    return C.globalEval(e), e
                }
            }
        }), C.ajaxPrefilter("script", (function(e) {
            void 0 === e.cache && (e.cache = !1), e.crossDomain && (e.type = "GET")
        })), C.ajaxTransport("script", (function(e) {
            var t, n;
            if (e.crossDomain || e.scriptAttrs) return {
                send: function(r, o) {
                    t = C("<script>").attr(e.scriptAttrs || {}).prop({
                        charset: e.scriptCharset,
                        src: e.url
                    }).on("load error", n = function(e) {
                        t.remove(), n = null, e && o("error" === e.type ? 404 : 200, e.type)
                    }), w.head.appendChild(t[0])
                },
                abort: function() {
                    n && n()
                }
            }
        }));
        var Gt, Xt = [],
            Jt = /(=)\?(?=&|$)|\?\?/;
        C.ajaxSetup({
            jsonp: "callback",
            jsonpCallback: function() {
                var e = Xt.pop() || C.expando + "_" + Et.guid++;
                return this[e] = !0, e
            }
        }), C.ajaxPrefilter("json jsonp", (function(e, t, r) {
            var o, i, a, s = !1 !== e.jsonp && (Jt.test(e.url) ? "url" : "string" == typeof e.data && 0 === (e.contentType || "").indexOf("application/x-www-form-urlencoded") && Jt.test(e.data) && "data");
            if (s || "jsonp" === e.dataTypes[0]) return o = e.jsonpCallback = g(e.jsonpCallback) ? e.jsonpCallback() : e.jsonpCallback, s ? e[s] = e[s].replace(Jt, "$1" + o) : !1 !== e.jsonp && (e.url += (Tt.test(e.url) ? "&" : "?") + e.jsonp + "=" + o), e.converters["script json"] = function() {
                return a || C.error(o + " was not called"), a[0]
            }, e.dataTypes[0] = "json", i = n[o], n[o] = function() {
                a = arguments
            }, r.always((function() {
                void 0 === i ? C(n).removeProp(o) : n[o] = i, e[o] && (e.jsonpCallback = t.jsonpCallback, Xt.push(o)), a && g(i) && i(a[0]), a = i = void 0
            })), "script"
        })), v.createHTMLDocument = ((Gt = w.implementation.createHTMLDocument("").body).innerHTML = "<form></form><form></form>", 2 === Gt.childNodes.length), C.parseHTML = function(e, t, n) {
            return "string" != typeof e ? [] : ("boolean" == typeof t && (n = t, t = !1), t || (v.createHTMLDocument ? ((r = (t = w.implementation.createHTMLDocument("")).createElement("base")).href = w.location.href, t.head.appendChild(r)) : t = w), i = !n && [], (o = M.exec(e)) ? [t.createElement(o[1])] : (o = ke([e], t, i), i && i.length && C(i).remove(), C.merge([], o.childNodes)));
            var r, o, i
        }, C.fn.load = function(e, t, n) {
            var r, o, i, a = this,
                s = e.indexOf(" ");
            return s > -1 && (r = yt(e.slice(s)), e = e.slice(0, s)), g(t) ? (n = t, t = void 0) : t && "object" == typeof t && (o = "POST"), a.length > 0 && C.ajax({
                url: e,
                type: o || "GET",
                dataType: "html",
                data: t
            }).done((function(e) {
                i = arguments, a.html(r ? C("<div>").append(C.parseHTML(e)).find(r) : e)
            })).always(n && function(e, t) {
                a.each((function() {
                    n.apply(this, i || [e.responseText, t, e])
                }))
            }), this
        }, C.expr.pseudos.animated = function(e) {
            return C.grep(C.timers, (function(t) {
                return e === t.elem
            })).length
        }, C.offset = {
            setOffset: function(e, t, n) {
                var r, o, i, a, s, u, c = C.css(e, "position"),
                    l = C(e),
                    d = {};
                "static" === c && (e.style.position = "relative"), s = l.offset(), i = C.css(e, "top"), u = C.css(e, "left"), ("absolute" === c || "fixed" === c) && (i + u).indexOf("auto") > -1 ? (a = (r = l.position()).top, o = r.left) : (a = parseFloat(i) || 0, o = parseFloat(u) || 0), g(t) && (t = t.call(e, n, C.extend({}, s))), null != t.top && (d.top = t.top - s.top + a), null != t.left && (d.left = t.left - s.left + o), "using" in t ? t.using.call(e, d) : ("number" == typeof d.top && (d.top += "px"), "number" == typeof d.left && (d.left += "px"), l.css(d))
            }
        }, C.fn.extend({
            offset: function(e) {
                if (arguments.length) return void 0 === e ? this : this.each((function(t) {
                    C.offset.setOffset(this, e, t)
                }));
                var t, n, r = this[0];
                return r ? r.getClientRects().length ? (t = r.getBoundingClientRect(), n = r.ownerDocument.defaultView, {
                    top: t.top + n.pageYOffset,
                    left: t.left + n.pageXOffset
                }) : {
                    top: 0,
                    left: 0
                } : void 0
            },
            position: function() {
                if (this[0]) {
                    var e, t, n, r = this[0],
                        o = {
                            top: 0,
                            left: 0
                        };
                    if ("fixed" === C.css(r, "position")) t = r.getBoundingClientRect();
                    else {
                        for (t = this.offset(), n = r.ownerDocument, e = r.offsetParent || n.documentElement; e && (e === n.body || e === n.documentElement) && "static" === C.css(e, "position");) e = e.parentNode;
                        e && e !== r && 1 === e.nodeType && ((o = C(e).offset()).top += C.css(e, "borderTopWidth", !0), o.left += C.css(e, "borderLeftWidth", !0))
                    }
                    return {
                        top: t.top - o.top - C.css(r, "marginTop", !0),
                        left: t.left - o.left - C.css(r, "marginLeft", !0)
                    }
                }
            },
            offsetParent: function() {
                return this.map((function() {
                    for (var e = this.offsetParent; e && "static" === C.css(e, "position");) e = e.offsetParent;
                    return e || ie
                }))
            }
        }), C.each({
            scrollLeft: "pageXOffset",
            scrollTop: "pageYOffset"
        }, (function(e, t) {
            var n = "pageYOffset" === t;
            C.fn[e] = function(r) {
                return U(this, (function(e, r, o) {
                    var i;
                    if (y(e) ? i = e : 9 === e.nodeType && (i = e.defaultView), void 0 === o) return i ? i[t] : e[r];
                    i ? i.scrollTo(n ? i.pageXOffset : o, n ? o : i.pageYOffset) : e[r] = o
                }), e, r, arguments.length)
            }
        })), C.each(["top", "left"], (function(e, t) {
            C.cssHooks[t] = $e(v.pixelPosition, (function(e, n) {
                if (n) return n = We(e, t), He.test(n) ? C(e).position()[t] + "px" : n
            }))
        })), C.each({
            Height: "height",
            Width: "width"
        }, (function(e, t) {
            C.each({
                padding: "inner" + e,
                content: t,
                "": "outer" + e
            }, (function(n, r) {
                C.fn[r] = function(o, i) {
                    var a = arguments.length && (n || "boolean" != typeof o),
                        s = n || (!0 === o || !0 === i ? "margin" : "border");
                    return U(this, (function(t, n, o) {
                        var i;
                        return y(t) ? 0 === r.indexOf("outer") ? t["inner" + e] : t.document.documentElement["client" + e] : 9 === t.nodeType ? (i = t.documentElement, Math.max(t.body["scroll" + e], i["scroll" + e], t.body["offset" + e], i["offset" + e], i["client" + e])) : void 0 === o ? C.css(t, n, s) : C.style(t, n, o, s)
                    }), t, a ? o : void 0, a)
                }
            }))
        })), C.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], (function(e, t) {
            C.fn[t] = function(e) {
                return this.on(t, e)
            }
        })), C.fn.extend({
            bind: function(e, t, n) {
                return this.on(e, null, t, n)
            },
            unbind: function(e, t) {
                return this.off(e, null, t)
            },
            delegate: function(e, t, n, r) {
                return this.on(t, e, n, r)
            },
            undelegate: function(e, t, n) {
                return 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", n)
            },
            hover: function(e, t) {
                return this.mouseenter(e).mouseleave(t || e)
            }
        }), C.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "), (function(e, t) {
            C.fn[t] = function(e, n) {
                return arguments.length > 0 ? this.on(t, null, e, n) : this.trigger(t)
            }
        }));
        var Yt = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;
        C.proxy = function(e, t) {
            var n, r, o;
            if ("string" == typeof t && (n = e[t], t = e, e = n), g(e)) return r = s.call(arguments, 2), (o = function() {
                return e.apply(t || this, r.concat(s.call(arguments)))
            }).guid = e.guid = e.guid || C.guid++, o
        }, C.holdReady = function(e) {
            e ? C.readyWait++ : C.ready(!0)
        }, C.isArray = Array.isArray, C.parseJSON = JSON.parse, C.nodeName = P, C.isFunction = g, C.isWindow = y, C.camelCase = X, C.type = k, C.now = Date.now, C.isNumeric = function(e) {
            var t = C.type(e);
            return ("number" === t || "string" === t) && !isNaN(e - parseFloat(e))
        }, C.trim = function(e) {
            return null == e ? "" : (e + "").replace(Yt, "")
        }, void 0 === (r = function() {
            return C
        }.apply(t, [])) || (e.exports = r);
        var Qt = n.jQuery,
            Zt = n.$;
        return C.noConflict = function(e) {
            return n.$ === C && (n.$ = Zt), e && n.jQuery === C && (n.jQuery = Qt), C
        }, void 0 === o && (n.jQuery = n.$ = C), C
    }))
}, function(e, t, n) {
    var r = n(9),
        o = n(10),
        i = n(0),
        a = n(1),
        s = n(3),
        u = n(25),
        c = function() {
            "use strict";

            function e() {
                i(this, e), s(this, "url", "/api/")
            }
            var t, n, c, l;
            return a(e, [{
                key: "get",
                value: (l = o(r.mark((function e(t, n, o) {
                    return r.wrap((function(e) {
                        for (;;) switch (e.prev = e.next) {
                            case 0:
                                return o = o || {}, (n = n || {}).lang = language, e.abrupt("return", u.get(this.url + t, {
                                    params: n,
                                    headers: o
                                }));
                            case 4:
                            case "end":
                                return e.stop()
                        }
                    }), e, this)
                }))), function(e, t, n) {
                    return l.apply(this, arguments)
                })
            }, {
                key: "post",
                value: (c = o(r.mark((function e(t, n, o, i, a) {
                    return r.wrap((function(e) {
                        for (;;) switch (e.prev = e.next) {
                            case 0:
                                return (o = o || {}).lang = language, (a = a || {})["Content-Type"] = i || "application/json", e.abrupt("return", u.post(this.url + t + "/", n, {
                                    params: o,
                                    headers: a
                                }));
                            case 5:
                            case "end":
                                return e.stop()
                        }
                    }), e, this)
                }))), function(e, t, n, r, o) {
                    return c.apply(this, arguments)
                })
            }, {
                key: "getModel",
                value: (n = o(r.mark((function e(t, n, o) {
                    var i = this;
                    return r.wrap((function(e) {
                        for (;;) switch (e.prev = e.next) {
                            case 0:
                                return e.abrupt("return", new Promise((function(e, r) {
                                    i.get(t, n, o).then((function(t) {
                                        var n = t.data;
                                        "success" === n.status ? e(n.value) : "error" === n.status && r(n.msg)
                                    })).catch((function(e) {
                                        r("Выполнение запроса...")
                                    }))
                                })));
                            case 1:
                            case "end":
                                return e.stop()
                        }
                    }), e)
                }))), function(e, t, r) {
                    return n.apply(this, arguments)
                })
            }, {
                key: "postModel",
                value: (t = o(r.mark((function e(t, n, o, i, a) {
                    var s = this;
                    return r.wrap((function(e) {
                        for (;;) switch (e.prev = e.next) {
                            case 0:
                                return e.abrupt("return", new Promise((function(e, r) {
                                    s.post(t, n, o, i, a).then((function(t) {
                                        var n = t.data;
                                        "success" === n.status ? e(n.value) : "error" === n.status && r(n.msg)
                                    })).catch((function(e) {
                                        r("Выполнение запроса...")
                                    }))
                                })));
                            case 1:
                            case "end":
                                return e.stop()
                        }
                    }), e)
                }))), function(e, n, r, o, i) {
                    return t.apply(this, arguments)
                })
            }]), e
        }();
    e.exports = c
}, function(e, t, n) {
    var r = n(0),
        o = n(1),
        i = function() {
            "use strict";

            function e() {
                r(this, e)
            }
            return o(e, [{
                key: "insertParam",
                value: function(e, t) {
                    e = encodeURI(e), t = encodeURI(t);
                    for (var n, r = document.location.search.substr(1).split("&"), o = r.length; o--;)
                        if ((n = r[o].split("="))[0] == e) {
                            n[1] = t, r[o] = n.join("=");
                            break
                        } o < 0 && (r[r.length] = [e, t].join("="));
                    var i = window.location;
                    window.history.pushState({}, document.title, i.protocol + "//" + i.host + i.pathname + "?" + r.join("&"))
                }
            }, {
                key: "getParam",
                value: function(e) {
                    for (var t = window.location.search.substring(1).split("&"), n = {}, r = 0; r < t.length; r++) {
                        var o = t[r].split("="),
                            i = decodeURIComponent(o[0]),
                            a = decodeURIComponent(o[1]);
                        if (void 0 === n[i]) n[i] = decodeURIComponent(a);
                        else if ("string" == typeof n[i]) {
                            var s = [n[i], decodeURIComponent(a)];
                            n[i] = s
                        } else n[i].push(decodeURIComponent(a))
                    }
                    return n[e]
                }
            }, {
                key: "removeParam",
                value: function(e) {
                    var t = new URL(window.location);
                    new URLSearchParams(t.search.slice(1)).delete(e)
                }
            }]), e
        }();
    e.exports = i
}, function(e, t, n) {
    var r = n(0),
        o = n(1),
        i = function() {
            "use strict";

            function e() {
                r(this, e)
            }
            return o(e, null, [{
                key: "sendEvent",
                value: function(e) {
                    window._paq = window._paq || [], window._paq.push(["trackGoal", e])
                }
            }]), e
        }();
    e.exports = i
}, function(e, t, n) {
    e.exports = n(24)
}, function(e, t) {
    function n(e, t, n, r, o, i, a) {
        try {
            var s = e[i](a),
                u = s.value
        } catch (e) {
            return void n(e)
        }
        s.done ? t(u) : Promise.resolve(u).then(r, o)
    }
    e.exports = function(e) {
        return function() {
            var t = this,
                r = arguments;
            return new Promise((function(o, i) {
                var a = e.apply(t, r);

                function s(e) {
                    n(a, o, i, s, u, "next", e)
                }

                function u(e) {
                    n(a, o, i, s, u, "throw", e)
                }
                s(void 0)
            }))
        }
    }
}, function(e, t, n) {
    "use strict";
    e.exports = function(e, t) {
        return function() {
            for (var n = new Array(arguments.length), r = 0; r < n.length; r++) n[r] = arguments[r];
            return e.apply(t, n)
        }
    }
}, function(e, t, n) {
    "use strict";
    var r = n(4);

    function o(e) {
        return encodeURIComponent(e).replace(/%40/gi, "@").replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, "+").replace(/%5B/gi, "[").replace(/%5D/gi, "]")
    }
    e.exports = function(e, t, n) {
        if (!t) return e;
        var i;
        if (n) i = n(t);
        else if (r.isURLSearchParams(t)) i = t.toString();
        else {
            var a = [];
            r.forEach(t, (function(e, t) {
                null != e && (r.isArray(e) ? t += "[]" : e = [e], r.forEach(e, (function(e) {
                    r.isDate(e) ? e = e.toISOString() : r.isObject(e) && (e = JSON.stringify(e)), a.push(o(t) + "=" + o(e))
                })))
            })), i = a.join("&")
        }
        if (i) {
            var s = e.indexOf("#"); - 1 !== s && (e = e.slice(0, s)), e += (-1 === e.indexOf("?") ? "?" : "&") + i
        }
        return e
    }
}, function(e, t, n) {
    "use strict";
    e.exports = function(e) {
        return !(!e || !e.__CANCEL__)
    }
}, function(e, t, n) {
    "use strict";
    (function(t) {
        var r = n(4),
            o = n(32),
            i = {
                "Content-Type": "application/x-www-form-urlencoded"
            };

        function a(e, t) {
            !r.isUndefined(e) && r.isUndefined(e["Content-Type"]) && (e["Content-Type"] = t)
        }
        var s, u = {
            adapter: (("undefined" != typeof XMLHttpRequest || void 0 !== t && "[object process]" === Object.prototype.toString.call(t)) && (s = n(15)), s),
            transformRequest: [function(e, t) {
                return o(t, "Accept"), o(t, "Content-Type"), r.isFormData(e) || r.isArrayBuffer(e) || r.isBuffer(e) || r.isStream(e) || r.isFile(e) || r.isBlob(e) ? e : r.isArrayBufferView(e) ? e.buffer : r.isURLSearchParams(e) ? (a(t, "application/x-www-form-urlencoded;charset=utf-8"), e.toString()) : r.isObject(e) ? (a(t, "application/json;charset=utf-8"), JSON.stringify(e)) : e
            }],
            transformResponse: [function(e) {
                if ("string" == typeof e) try {
                    e = JSON.parse(e)
                } catch (e) {}
                return e
            }],
            timeout: 0,
            xsrfCookieName: "XSRF-TOKEN",
            xsrfHeaderName: "X-XSRF-TOKEN",
            maxContentLength: -1,
            validateStatus: function(e) {
                return e >= 200 && e < 300
            }
        };
        u.headers = {
            common: {
                Accept: "application/json, text/plain, */*"
            }
        }, r.forEach(["delete", "get", "head"], (function(e) {
            u.headers[e] = {}
        })), r.forEach(["post", "put", "patch"], (function(e) {
            u.headers[e] = r.merge(i)
        })), e.exports = u
    }).call(this, n(31))
}, function(e, t, n) {
    "use strict";
    var r = n(4),
        o = n(33),
        i = n(12),
        a = n(35),
        s = n(38),
        u = n(39),
        c = n(16);
    e.exports = function(e) {
        return new Promise((function(t, l) {
            var d = e.data,
                f = e.headers;
            r.isFormData(d) && delete f["Content-Type"];
            var p = new XMLHttpRequest;
            if (e.auth) {
                var h = e.auth.username || "",
                    m = e.auth.password || "";
                f.Authorization = "Basic " + btoa(h + ":" + m)
            }
            var v = a(e.baseURL, e.url);
            if (p.open(e.method.toUpperCase(), i(v, e.params, e.paramsSerializer), !0), p.timeout = e.timeout, p.onreadystatechange = function() {
                    if (p && 4 === p.readyState && (0 !== p.status || p.responseURL && 0 === p.responseURL.indexOf("file:"))) {
                        var n = "getAllResponseHeaders" in p ? s(p.getAllResponseHeaders()) : null,
                            r = {
                                data: e.responseType && "text" !== e.responseType ? p.response : p.responseText,
                                status: p.status,
                                statusText: p.statusText,
                                headers: n,
                                config: e,
                                request: p
                            };
                        o(t, l, r), p = null
                    }
                }, p.onabort = function() {
                    p && (l(c("Request aborted", e, "ECONNABORTED", p)), p = null)
                }, p.onerror = function() {
                    l(c("Network Error", e, null, p)), p = null
                }, p.ontimeout = function() {
                    var t = "timeout of " + e.timeout + "ms exceeded";
                    e.timeoutErrorMessage && (t = e.timeoutErrorMessage), l(c(t, e, "ECONNABORTED", p)), p = null
                }, r.isStandardBrowserEnv()) {
                var g = n(40),
                    y = (e.withCredentials || u(v)) && e.xsrfCookieName ? g.read(e.xsrfCookieName) : void 0;
                y && (f[e.xsrfHeaderName] = y)
            }
            if ("setRequestHeader" in p && r.forEach(f, (function(e, t) {
                    void 0 === d && "content-type" === t.toLowerCase() ? delete f[t] : p.setRequestHeader(t, e)
                })), r.isUndefined(e.withCredentials) || (p.withCredentials = !!e.withCredentials), e.responseType) try {
                p.responseType = e.responseType
            } catch (t) {
                if ("json" !== e.responseType) throw t
            }
            "function" == typeof e.onDownloadProgress && p.addEventListener("progress", e.onDownloadProgress), "function" == typeof e.onUploadProgress && p.upload && p.upload.addEventListener("progress", e.onUploadProgress), e.cancelToken && e.cancelToken.promise.then((function(e) {
                p && (p.abort(), l(e), p = null)
            })), void 0 === d && (d = null), p.send(d)
        }))
    }
}, function(e, t, n) {
    "use strict";
    var r = n(34);
    e.exports = function(e, t, n, o, i) {
        var a = new Error(e);
        return r(a, t, n, o, i)
    }
}, function(e, t, n) {
    "use strict";
    var r = n(4);
    e.exports = function(e, t) {
        t = t || {};
        var n = {},
            o = ["url", "method", "params", "data"],
            i = ["headers", "auth", "proxy"],
            a = ["baseURL", "url", "transformRequest", "transformResponse", "paramsSerializer", "timeout", "withCredentials", "adapter", "responseType", "xsrfCookieName", "xsrfHeaderName", "onUploadProgress", "onDownloadProgress", "maxContentLength", "validateStatus", "maxRedirects", "httpAgent", "httpsAgent", "cancelToken", "socketPath"];
        r.forEach(o, (function(e) {
            void 0 !== t[e] && (n[e] = t[e])
        })), r.forEach(i, (function(o) {
            r.isObject(t[o]) ? n[o] = r.deepMerge(e[o], t[o]) : void 0 !== t[o] ? n[o] = t[o] : r.isObject(e[o]) ? n[o] = r.deepMerge(e[o]) : void 0 !== e[o] && (n[o] = e[o])
        })), r.forEach(a, (function(r) {
            void 0 !== t[r] ? n[r] = t[r] : void 0 !== e[r] && (n[r] = e[r])
        }));
        var s = o.concat(i).concat(a),
            u = Object.keys(t).filter((function(e) {
                return -1 === s.indexOf(e)
            }));
        return r.forEach(u, (function(r) {
            void 0 !== t[r] ? n[r] = t[r] : void 0 !== e[r] && (n[r] = e[r])
        })), n
    }
}, function(e, t, n) {
    "use strict";

    function r(e) {
        this.message = e
    }
    r.prototype.toString = function() {
        return "Cancel" + (this.message ? ": " + this.message : "")
    }, r.prototype.__CANCEL__ = !0, e.exports = r
}, function(e, t) {
    e.exports = function(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
        return r
    }
}, function(e, t, n) {
    var r = n(0),
        o = n(3),
        i = n(21),
        a = n(22),
        s = n(45),
        u = n(46);
    new function e() {
        "use strict";
        r(this, e), o(this, "appModel", void 0), o(this, "appView", void 0), o(this, "appController", void 0), this.appModel = new a, this.appView = new u, this.appController = new s(this.appModel, this.appView), this.appView.appController = this.appController
    };
    var c = n(47),
        l = n(48),
        d = n(54);
    new function e() {
        "use strict";
        r(this, e), o(this, "calculatorModel", void 0), o(this, "calculatorView", void 0), o(this, "calculatorController", void 0), this.calculatorModel = new c, this.calculatorView = new d, this.calculatorController = new l(this.calculatorModel, this.calculatorView, i), this.calculatorView.calculatorController = this.calculatorController
    };
    var f = n(55),
        p = n(56),
        h = n(57);
    new function e() {
        "use strict";
        r(this, e), o(this, "authModel", void 0), o(this, "authView", void 0), o(this, "authController", void 0), this.authModel = new f, this.authView = new h, this.authController = new p(this.authModel, this.authView), this.authView.authController = this.authController, this.authView.login.authController = this.authController, this.authView.register.authController = this.authController, this.authView.changePassword.authController = this.authController, this.authView.recovery.authController = this.authController
    };
    var m = n(58),
        v = n(59),
        g = n(60);
    new function e() {
        "use strict";
        r(this, e), o(this, "orderModel", void 0), o(this, "orderView", void 0), o(this, "orderController", void 0), this.orderModel = new m, this.orderView = new g, this.orderController = new v(this.orderModel, this.orderView), this.orderView.orderController = this.orderController
    };
    var y = n(61),
        w = n(62),
        b = n(63);
    new function e() {
        "use strict";
        r(this, e), o(this, "userModel", void 0), o(this, "userView", void 0), o(this, "userController", void 0), this.userModel = new y, this.userView = new b, this.userController = new w(this.userModel, this.userView), this.userView.userController = this.userController
    }
}, function(e, t) {
    e.exports = 3
}, function(e, t, n) {
    var r = n(23),
        o = n(0),
        i = n(1),
        a = n(6),
        s = n(2),
        u = function() {
            "use strict";

            function e() {
                o(this, e)
            }
            return i(e, [{
                key: "sendReview",
                value: function(e, t) {
                    return new Promise((function(n, r) {
                        (new a).post("add-review", {
                            name: e,
                            msg: t
                        }).then((function(e) {
                            var t = e.data;
                            "success" === t.status ? n(t.value) : "error" === t.status && r(t.msg)
                        })).catch((function(e) {
                            r(s.translate("Выполнение запроса..."))
                        }))
                    }))
                }
            }, {
                key: "sendContact",
                value: function(e, t, n, o) {
                    return new Promise((function(i, u) {
                        (new a).post("feedback", {
                            email: e,
                            name: t,
                            subject: n,
                            msg: o
                        }).then((function(e) {
                            var t = "object" === r(e.data.value) ? e.data.value : e.data;
                            "success" === t.status ? i(t.value) : "error" === t.status && u(t.msg)
                        })).catch((function(e) {
                            console.log(e), u(s.translate("Выполнение запроса..."))
                        }))
                    }))
                }
            }]), e
        }();
    e.exports = u
}, function(e, t) {
    function n(t) {
        return "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? e.exports = n = function(e) {
            return typeof e
        } : e.exports = n = function(e) {
            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
        }, n(t)
    }
    e.exports = n
}, function(e, t, n) {
    var r = function(e) {
        "use strict";
        var t = Object.prototype,
            n = t.hasOwnProperty,
            r = "function" == typeof Symbol ? Symbol : {},
            o = r.iterator || "@@iterator",
            i = r.asyncIterator || "@@asyncIterator",
            a = r.toStringTag || "@@toStringTag";

        function s(e, t, n, r) {
            var o = t && t.prototype instanceof l ? t : l,
                i = Object.create(o.prototype),
                a = new k(r || []);
            return i._invoke = function(e, t, n) {
                var r = "suspendedStart";
                return function(o, i) {
                    if ("executing" === r) throw new Error("Generator is already running");
                    if ("completed" === r) {
                        if ("throw" === o) throw i;
                        return S()
                    }
                    for (n.method = o, n.arg = i;;) {
                        var a = n.delegate;
                        if (a) {
                            var s = w(a, n);
                            if (s) {
                                if (s === c) continue;
                                return s
                            }
                        }
                        if ("next" === n.method) n.sent = n._sent = n.arg;
                        else if ("throw" === n.method) {
                            if ("suspendedStart" === r) throw r = "completed", n.arg;
                            n.dispatchException(n.arg)
                        } else "return" === n.method && n.abrupt("return", n.arg);
                        r = "executing";
                        var l = u(e, t, n);
                        if ("normal" === l.type) {
                            if (r = n.done ? "completed" : "suspendedYield", l.arg === c) continue;
                            return {
                                value: l.arg,
                                done: n.done
                            }
                        }
                        "throw" === l.type && (r = "completed", n.method = "throw", n.arg = l.arg)
                    }
                }
            }(e, n, a), i
        }

        function u(e, t, n) {
            try {
                return {
                    type: "normal",
                    arg: e.call(t, n)
                }
            } catch (e) {
                return {
                    type: "throw",
                    arg: e
                }
            }
        }
        e.wrap = s;
        var c = {};

        function l() {}

        function d() {}

        function f() {}
        var p = {};
        p[o] = function() {
            return this
        };
        var h = Object.getPrototypeOf,
            m = h && h(h(C([])));
        m && m !== t && n.call(m, o) && (p = m);
        var v = f.prototype = l.prototype = Object.create(p);

        function g(e) {
            ["next", "throw", "return"].forEach((function(t) {
                e[t] = function(e) {
                    return this._invoke(t, e)
                }
            }))
        }

        function y(e, t) {
            var r;
            this._invoke = function(o, i) {
                function a() {
                    return new t((function(r, a) {
                        ! function r(o, i, a, s) {
                            var c = u(e[o], e, i);
                            if ("throw" !== c.type) {
                                var l = c.arg,
                                    d = l.value;
                                return d && "object" == typeof d && n.call(d, "__await") ? t.resolve(d.__await).then((function(e) {
                                    r("next", e, a, s)
                                }), (function(e) {
                                    r("throw", e, a, s)
                                })) : t.resolve(d).then((function(e) {
                                    l.value = e, a(l)
                                }), (function(e) {
                                    return r("throw", e, a, s)
                                }))
                            }
                            s(c.arg)
                        }(o, i, r, a)
                    }))
                }
                return r = r ? r.then(a, a) : a()
            }
        }

        function w(e, t) {
            var n = e.iterator[t.method];
            if (void 0 === n) {
                if (t.delegate = null, "throw" === t.method) {
                    if (e.iterator.return && (t.method = "return", t.arg = void 0, w(e, t), "throw" === t.method)) return c;
                    t.method = "throw", t.arg = new TypeError("The iterator does not provide a 'throw' method")
                }
                return c
            }
            var r = u(n, e.iterator, t.arg);
            if ("throw" === r.type) return t.method = "throw", t.arg = r.arg, t.delegate = null, c;
            var o = r.arg;
            return o ? o.done ? (t[e.resultName] = o.value, t.next = e.nextLoc, "return" !== t.method && (t.method = "next", t.arg = void 0), t.delegate = null, c) : o : (t.method = "throw", t.arg = new TypeError("iterator result is not an object"), t.delegate = null, c)
        }

        function b(e) {
            var t = {
                tryLoc: e[0]
            };
            1 in e && (t.catchLoc = e[1]), 2 in e && (t.finallyLoc = e[2], t.afterLoc = e[3]), this.tryEntries.push(t)
        }

        function x(e) {
            var t = e.completion || {};
            t.type = "normal", delete t.arg, e.completion = t
        }

        function k(e) {
            this.tryEntries = [{
                tryLoc: "root"
            }], e.forEach(b, this), this.reset(!0)
        }

        function C(e) {
            if (e) {
                var t = e[o];
                if (t) return t.call(e);
                if ("function" == typeof e.next) return e;
                if (!isNaN(e.length)) {
                    var r = -1,
                        i = function t() {
                            for (; ++r < e.length;)
                                if (n.call(e, r)) return t.value = e[r], t.done = !1, t;
                            return t.value = void 0, t.done = !0, t
                        };
                    return i.next = i
                }
            }
            return {
                next: S
            }
        }

        function S() {
            return {
                value: void 0,
                done: !0
            }
        }
        return d.prototype = v.constructor = f, f.constructor = d, f[a] = d.displayName = "GeneratorFunction", e.isGeneratorFunction = function(e) {
            var t = "function" == typeof e && e.constructor;
            return !!t && (t === d || "GeneratorFunction" === (t.displayName || t.name))
        }, e.mark = function(e) {
            return Object.setPrototypeOf ? Object.setPrototypeOf(e, f) : (e.__proto__ = f, a in e || (e[a] = "GeneratorFunction")), e.prototype = Object.create(v), e
        }, e.awrap = function(e) {
            return {
                __await: e
            }
        }, g(y.prototype), y.prototype[i] = function() {
            return this
        }, e.AsyncIterator = y, e.async = function(t, n, r, o, i) {
            void 0 === i && (i = Promise);
            var a = new y(s(t, n, r, o), i);
            return e.isGeneratorFunction(n) ? a : a.next().then((function(e) {
                return e.done ? e.value : a.next()
            }))
        }, g(v), v[a] = "Generator", v[o] = function() {
            return this
        }, v.toString = function() {
            return "[object Generator]"
        }, e.keys = function(e) {
            var t = [];
            for (var n in e) t.push(n);
            return t.reverse(),
                function n() {
                    for (; t.length;) {
                        var r = t.pop();
                        if (r in e) return n.value = r, n.done = !1, n
                    }
                    return n.done = !0, n
                }
        }, e.values = C, k.prototype = {
            constructor: k,
            reset: function(e) {
                if (this.prev = 0, this.next = 0, this.sent = this._sent = void 0, this.done = !1, this.delegate = null, this.method = "next", this.arg = void 0, this.tryEntries.forEach(x), !e)
                    for (var t in this) "t" === t.charAt(0) && n.call(this, t) && !isNaN(+t.slice(1)) && (this[t] = void 0)
            },
            stop: function() {
                this.done = !0;
                var e = this.tryEntries[0].completion;
                if ("throw" === e.type) throw e.arg;
                return this.rval
            },
            dispatchException: function(e) {
                if (this.done) throw e;
                var t = this;

                function r(n, r) {
                    return a.type = "throw", a.arg = e, t.next = n, r && (t.method = "next", t.arg = void 0), !!r
                }
                for (var o = this.tryEntries.length - 1; o >= 0; --o) {
                    var i = this.tryEntries[o],
                        a = i.completion;
                    if ("root" === i.tryLoc) return r("end");
                    if (i.tryLoc <= this.prev) {
                        var s = n.call(i, "catchLoc"),
                            u = n.call(i, "finallyLoc");
                        if (s && u) {
                            if (this.prev < i.catchLoc) return r(i.catchLoc, !0);
                            if (this.prev < i.finallyLoc) return r(i.finallyLoc)
                        } else if (s) {
                            if (this.prev < i.catchLoc) return r(i.catchLoc, !0)
                        } else {
                            if (!u) throw new Error("try statement without catch or finally");
                            if (this.prev < i.finallyLoc) return r(i.finallyLoc)
                        }
                    }
                }
            },
            abrupt: function(e, t) {
                for (var r = this.tryEntries.length - 1; r >= 0; --r) {
                    var o = this.tryEntries[r];
                    if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) {
                        var i = o;
                        break
                    }
                }
                i && ("break" === e || "continue" === e) && i.tryLoc <= t && t <= i.finallyLoc && (i = null);
                var a = i ? i.completion : {};
                return a.type = e, a.arg = t, i ? (this.method = "next", this.next = i.finallyLoc, c) : this.complete(a)
            },
            complete: function(e, t) {
                if ("throw" === e.type) throw e.arg;
                return "break" === e.type || "continue" === e.type ? this.next = e.arg : "return" === e.type ? (this.rval = this.arg = e.arg, this.method = "return", this.next = "end") : "normal" === e.type && t && (this.next = t), c
            },
            finish: function(e) {
                for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                    var n = this.tryEntries[t];
                    if (n.finallyLoc === e) return this.complete(n.completion, n.afterLoc), x(n), c
                }
            },
            catch: function(e) {
                for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                    var n = this.tryEntries[t];
                    if (n.tryLoc === e) {
                        var r = n.completion;
                        if ("throw" === r.type) {
                            var o = r.arg;
                            x(n)
                        }
                        return o
                    }
                }
                throw new Error("illegal catch attempt")
            },
            delegateYield: function(e, t, n) {
                return this.delegate = {
                    iterator: C(e),
                    resultName: t,
                    nextLoc: n
                }, "next" === this.method && (this.arg = void 0), c
            }
        }, e
    }(e.exports);
    try {
        regeneratorRuntime = r
    } catch (e) {
        Function("r", "regeneratorRuntime = r")(r)
    }
}, function(e, t, n) {
    e.exports = n(26)
}, function(e, t, n) {
    "use strict";
    var r = n(4),
        o = n(11),
        i = n(27),
        a = n(17);

    function s(e) {
        var t = new i(e),
            n = o(i.prototype.request, t);
        return r.extend(n, i.prototype, t), r.extend(n, t), n
    }
    var u = s(n(14));
    u.Axios = i, u.create = function(e) {
        return s(a(u.defaults, e))
    }, u.Cancel = n(18), u.CancelToken = n(41), u.isCancel = n(13), u.all = function(e) {
        return Promise.all(e)
    }, u.spread = n(42), e.exports = u, e.exports.default = u
}, function(e, t, n) {
    "use strict";
    var r = n(4),
        o = n(12),
        i = n(28),
        a = n(29),
        s = n(17);

    function u(e) {
        this.defaults = e, this.interceptors = {
            request: new i,
            response: new i
        }
    }
    u.prototype.request = function(e) {
        "string" == typeof e ? (e = arguments[1] || {}).url = arguments[0] : e = e || {}, (e = s(this.defaults, e)).method ? e.method = e.method.toLowerCase() : this.defaults.method ? e.method = this.defaults.method.toLowerCase() : e.method = "get";
        var t = [a, void 0],
            n = Promise.resolve(e);
        for (this.interceptors.request.forEach((function(e) {
                t.unshift(e.fulfilled, e.rejected)
            })), this.interceptors.response.forEach((function(e) {
                t.push(e.fulfilled, e.rejected)
            })); t.length;) n = n.then(t.shift(), t.shift());
        return n
    }, u.prototype.getUri = function(e) {
        return e = s(this.defaults, e), o(e.url, e.params, e.paramsSerializer).replace(/^\?/, "")
    }, r.forEach(["delete", "get", "head", "options"], (function(e) {
        u.prototype[e] = function(t, n) {
            return this.request(r.merge(n || {}, {
                method: e,
                url: t
            }))
        }
    })), r.forEach(["post", "put", "patch"], (function(e) {
        u.prototype[e] = function(t, n, o) {
            return this.request(r.merge(o || {}, {
                method: e,
                url: t,
                data: n
            }))
        }
    })), e.exports = u
}, function(e, t, n) {
    "use strict";
    var r = n(4);

    function o() {
        this.handlers = []
    }
    o.prototype.use = function(e, t) {
        return this.handlers.push({
            fulfilled: e,
            rejected: t
        }), this.handlers.length - 1
    }, o.prototype.eject = function(e) {
        this.handlers[e] && (this.handlers[e] = null)
    }, o.prototype.forEach = function(e) {
        r.forEach(this.handlers, (function(t) {
            null !== t && e(t)
        }))
    }, e.exports = o
}, function(e, t, n) {
    "use strict";
    var r = n(4),
        o = n(30),
        i = n(13),
        a = n(14);

    function s(e) {
        e.cancelToken && e.cancelToken.throwIfRequested()
    }
    e.exports = function(e) {
        return s(e), e.headers = e.headers || {}, e.data = o(e.data, e.headers, e.transformRequest), e.headers = r.merge(e.headers.common || {}, e.headers[e.method] || {}, e.headers), r.forEach(["delete", "get", "head", "post", "put", "patch", "common"], (function(t) {
            delete e.headers[t]
        })), (e.adapter || a.adapter)(e).then((function(t) {
            return s(e), t.data = o(t.data, t.headers, e.transformResponse), t
        }), (function(t) {
            return i(t) || (s(e), t && t.response && (t.response.data = o(t.response.data, t.response.headers, e.transformResponse))), Promise.reject(t)
        }))
    }
}, function(e, t, n) {
    "use strict";
    var r = n(4);
    e.exports = function(e, t, n) {
        return r.forEach(n, (function(n) {
            e = n(e, t)
        })), e
    }
}, function(e, t) {
    var n, r, o = e.exports = {};

    function i() {
        throw new Error("setTimeout has not been defined")
    }

    function a() {
        throw new Error("clearTimeout has not been defined")
    }

    function s(e) {
        if (n === setTimeout) return setTimeout(e, 0);
        if ((n === i || !n) && setTimeout) return n = setTimeout, setTimeout(e, 0);
        try {
            return n(e, 0)
        } catch (t) {
            try {
                return n.call(null, e, 0)
            } catch (t) {
                return n.call(this, e, 0)
            }
        }
    }! function() {
        try {
            n = "function" == typeof setTimeout ? setTimeout : i
        } catch (e) {
            n = i
        }
        try {
            r = "function" == typeof clearTimeout ? clearTimeout : a
        } catch (e) {
            r = a
        }
    }();
    var u, c = [],
        l = !1,
        d = -1;

    function f() {
        l && u && (l = !1, u.length ? c = u.concat(c) : d = -1, c.length && p())
    }

    function p() {
        if (!l) {
            var e = s(f);
            l = !0;
            for (var t = c.length; t;) {
                for (u = c, c = []; ++d < t;) u && u[d].run();
                d = -1, t = c.length
            }
            u = null, l = !1,
                function(e) {
                    if (r === clearTimeout) return clearTimeout(e);
                    if ((r === a || !r) && clearTimeout) return r = clearTimeout, clearTimeout(e);
                    try {
                        r(e)
                    } catch (t) {
                        try {
                            return r.call(null, e)
                        } catch (t) {
                            return r.call(this, e)
                        }
                    }
                }(e)
        }
    }

    function h(e, t) {
        this.fun = e, this.array = t
    }

    function m() {}
    o.nextTick = function(e) {
        var t = new Array(arguments.length - 1);
        if (arguments.length > 1)
            for (var n = 1; n < arguments.length; n++) t[n - 1] = arguments[n];
        c.push(new h(e, t)), 1 !== c.length || l || s(p)
    }, h.prototype.run = function() {
        this.fun.apply(null, this.array)
    }, o.title = "browser", o.browser = !0, o.env = {}, o.argv = [], o.version = "", o.versions = {}, o.on = m, o.addListener = m, o.once = m, o.off = m, o.removeListener = m, o.removeAllListeners = m, o.emit = m, o.prependListener = m, o.prependOnceListener = m, o.listeners = function(e) {
        return []
    }, o.binding = function(e) {
        throw new Error("process.binding is not supported")
    }, o.cwd = function() {
        return "/"
    }, o.chdir = function(e) {
        throw new Error("process.chdir is not supported")
    }, o.umask = function() {
        return 0
    }
}, function(e, t, n) {
    "use strict";
    var r = n(4);
    e.exports = function(e, t) {
        r.forEach(e, (function(n, r) {
            r !== t && r.toUpperCase() === t.toUpperCase() && (e[t] = n, delete e[r])
        }))
    }
}, function(e, t, n) {
    "use strict";
    var r = n(16);
    e.exports = function(e, t, n) {
        var o = n.config.validateStatus;
        !o || o(n.status) ? e(n) : t(r("Request failed with status code " + n.status, n.config, null, n.request, n))
    }
}, function(e, t, n) {
    "use strict";
    e.exports = function(e, t, n, r, o) {
        return e.config = t, n && (e.code = n), e.request = r, e.response = o, e.isAxiosError = !0, e.toJSON = function() {
            return {
                message: this.message,
                name: this.name,
                description: this.description,
                number: this.number,
                fileName: this.fileName,
                lineNumber: this.lineNumber,
                columnNumber: this.columnNumber,
                stack: this.stack,
                config: this.config,
                code: this.code
            }
        }, e
    }
}, function(e, t, n) {
    "use strict";
    var r = n(36),
        o = n(37);
    e.exports = function(e, t) {
        return e && !r(t) ? o(e, t) : t
    }
}, function(e, t, n) {
    "use strict";
    e.exports = function(e) {
        return /^([a-z][a-z\d\+\-\.]*:)?\/\//i.test(e)
    }
}, function(e, t, n) {
    "use strict";
    e.exports = function(e, t) {
        return t ? e.replace(/\/+$/, "") + "/" + t.replace(/^\/+/, "") : e
    }
}, function(e, t, n) {
    "use strict";
    var r = n(4),
        o = ["age", "authorization", "content-length", "content-type", "etag", "expires", "from", "host", "if-modified-since", "if-unmodified-since", "last-modified", "location", "max-forwards", "proxy-authorization", "referer", "retry-after", "user-agent"];
    e.exports = function(e) {
        var t, n, i, a = {};
        return e ? (r.forEach(e.split("\n"), (function(e) {
            if (i = e.indexOf(":"), t = r.trim(e.substr(0, i)).toLowerCase(), n = r.trim(e.substr(i + 1)), t) {
                if (a[t] && o.indexOf(t) >= 0) return;
                a[t] = "set-cookie" === t ? (a[t] ? a[t] : []).concat([n]) : a[t] ? a[t] + ", " + n : n
            }
        })), a) : a
    }
}, function(e, t, n) {
    "use strict";
    var r = n(4);
    e.exports = r.isStandardBrowserEnv() ? function() {
        var e, t = /(msie|trident)/i.test(navigator.userAgent),
            n = document.createElement("a");

        function o(e) {
            var r = e;
            return t && (n.setAttribute("href", r), r = n.href), n.setAttribute("href", r), {
                href: n.href,
                protocol: n.protocol ? n.protocol.replace(/:$/, "") : "",
                host: n.host,
                search: n.search ? n.search.replace(/^\?/, "") : "",
                hash: n.hash ? n.hash.replace(/^#/, "") : "",
                hostname: n.hostname,
                port: n.port,
                pathname: "/" === n.pathname.charAt(0) ? n.pathname : "/" + n.pathname
            }
        }
        return e = o(window.location.href),
            function(t) {
                var n = r.isString(t) ? o(t) : t;
                return n.protocol === e.protocol && n.host === e.host
            }
    }() : function() {
        return !0
    }
}, function(e, t, n) {
    "use strict";
    var r = n(4);
    e.exports = r.isStandardBrowserEnv() ? {
        write: function(e, t, n, o, i, a) {
            var s = [];
            s.push(e + "=" + encodeURIComponent(t)), r.isNumber(n) && s.push("expires=" + new Date(n).toGMTString()), r.isString(o) && s.push("path=" + o), r.isString(i) && s.push("domain=" + i), !0 === a && s.push("secure"), document.cookie = s.join("; ")
        },
        read: function(e) {
            var t = document.cookie.match(new RegExp("(^|;\\s*)(" + e + ")=([^;]*)"));
            return t ? decodeURIComponent(t[3]) : null
        },
        remove: function(e) {
            this.write(e, "", Date.now() - 864e5)
        }
    } : {
        write: function() {},
        read: function() {
            return null
        },
        remove: function() {}
    }
}, function(e, t, n) {
    "use strict";
    var r = n(18);

    function o(e) {
        if ("function" != typeof e) throw new TypeError("executor must be a function.");
        var t;
        this.promise = new Promise((function(e) {
            t = e
        }));
        var n = this;
        e((function(e) {
            n.reason || (n.reason = new r(e), t(n.reason))
        }))
    }
    o.prototype.throwIfRequested = function() {
        if (this.reason) throw this.reason
    }, o.source = function() {
        var e;
        return {
            token: new o((function(t) {
                e = t
            })),
            cancel: e
        }
    }, e.exports = o
}, function(e, t, n) {
    "use strict";
    e.exports = function(e) {
        return function(t) {
            return e.apply(null, t)
        }
    }
}, function(e, t, n) {
    var r = n(0),
        o = n(1),
        i = function() {
            "use strict";

            function e() {
                r(this, e)
            }
            return o(e, [{
                key: "removeCookie",
                value: function(e) {
                    document.cookie = e + "=; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT;"
                }
            }, {
                key: "getCookie",
                value: function(e) {
                    var t = document.cookie.split("; ").find((function(t) {
                        return t.split("=")[0] === e
                    }));
                    return t ? t.split("=")[1] : null
                }
            }]), e
        }();
    e.exports = i
}, function(e) {
    e.exports = JSON.parse('{"Заявка":{"ru":"Заявка","en":"Order","et":"Tellimus","zh":"申请单","hi":"","ar":"ترتيب","es":"Solicitud","sr":"","uk":"Заявка","de":"Auftrag","fr":"Demande","ja":"","ko":"요청","bg":"Заявката","tr":"","no":"Forespørsel","vi":"","id":"","pt":"O pedido","lv":"Pieteikums","th":"","sl":"Naročilo","ro":"Cererea","it":"Richiesta"},"ожидает оплаты":{"ru":"ожидает оплаты","en":"awaiting payment","et":"Ootab tasumist","zh":"等待付款","hi":"","ar":"انتظار الدفع","es":"esperando el pago","sr":"","uk":"очікує оплати","de":"erwartet die Bezahlung","fr":"en attente de paiement","ja":"","ko":"결제 대기 중","bg":"очаква плащане","tr":"","no":"venter på betaling","vi":"","id":"","pt":"espera o pagamento","lv":"gaida apmaksu","th":"","sl":"čaka na izplačilo","ro":"în așteptarea plății","it":"In attesa del pagamento"},"удалена":{"ru":"удалена","en":"deleted","et":"eemaldatud","zh":"已删除","hi":"","ar":"تم الحذف","es":"eliminada","sr":"","uk":"видалена","de":"ist gelöscht","fr":"supprimée","ja":"","ko":"삭제됨","bg":"е изтрита","tr":"","no":"fjernet","vi":"","id":"","pt":"foi eliminado","lv":"dzēsts","th":"","sl":"izbrisano","ro":"eliminată","it":"eliminato"},"Обмен":{"ru":"Обмен","en":"Exchange","et":"Vahetada","zh":"交换","hi":"","ar":"الصرف","es":"Cambio","sr":"","uk":"Обмін","de":"Wechsel","fr":"Change","ja":"","ko":"환전","bg":"Обменът","tr":"","no":"Utvekslingsoperasjonen","vi":"","id":"","pt":"A troca","lv":"Apmaiņa","th":"","sl":"Menjava","ro":"Schimb","it":"Scambio"},"не состоялся":{"ru":"не состоялся","en":"canceled","et":"ei toimunud","zh":"没有发生","hi":"","ar":"تم الإلغاء","es":"no se realizó","sr":"","uk":"не відбувся","de":"ist nicht stattgefunden","fr":"échoué","ja":"","ko":"시행되지 않았음","bg":"е неуспешен","tr":"","no":"fjernet","vi":"","id":"","pt":"foi cancelada","lv":"nav notikusi","th":"","sl":"ni uspela","ro":"nu a avut loc","it":"annullato"},"завершен успешно":{"ru":"завершен успешно","en":"completed successfully","et":"edukalt lõpule viidud","zh":"交易完成成功","hi":"","ar":"تم الإنهاء بنجاح","es":"completado exitosamente","sr":"","uk":"завершено успішно","de":"ist erfolgreich beendet","fr":"réussi","ja":"","ko":"완료","bg":"приключи успешно","tr":"","no":"har fullført vellykketlig","vi":"","id":"","pt":"foi finalizada com êxito","lv":"beigusies veiksmīgi","th":"","sl":"je uspešno opravljena","ro":"finalizat cu succes","it":"completato con successo"},"изменила статус":{"ru":"изменила статус","en":"changed status","et":"muutunud olek","zh":"状态改变","hi":"","ar":"تم تغيير الحالة","es":"el estatus ha sido modificado","sr":"","uk":"змінила статус","de":"hat den Status geändert","fr":"a changé de statut","ja":"","ko":"상태를 변경했습니다","bg":"е променила статуса си","tr":"","no":"har endret statusen","vi":"","id":"","pt":"mudou o estado","lv":"mainījusi statusu","th":"","sl":"je spremenila status","ro":"a schimbat starea","it":"stato modificato"},"Заполните все поля":{"ru":"Заполните все поля","en":"Fill in all the fields","et":"Täitke kõik väljad","zh":"填写所有字段","hi":"","ar":"املأ جميع الحقول","es":"Cumplimente todos los campos","sr":"","uk":"Заповніть всі поля","de":"Füllen Sie alle Felder aus","fr":"Remplissez tous les champs","ja":"","ko":"모든 필드를 채우십시오","bg":"Попълнете всички полета","tr":"","no":"Fyll ut alle feltene","vi":"","id":"","pt":"Preencha todos os campos","lv":"Aizpildiet visus lauciņus","th":"","sl":"Izpolnite vsa polja","ro":"Completați toate câmpurile","it":"Compila tutti i campi"},"Выполнение запроса...":{"ru":"Выполнение запроса...","en":"Something went wrong on the server","et":"Midagi läks serveris valesti","zh":"服务器出了点问题","hi":"","ar":"حدث خطأ ما في الخادم","es":"Algo salió mal en el servidor","sr":"","uk":"Щось пішло не так на сервері","de":"Auf dem Server ist etwas schief gelaufen","fr":"Un problème est survenu sur le serveur","ja":"","ko":"서버에 문제가 발생했습니다","bg":"Нещо се е объркало в сървъра","tr":"","no":"Noe gikk galt på serveren","vi":"","id":"","pt":"Algo foi errado no servidor","lv":"Kaut kas nav kārtībā ar serveri","th":"","sl":"Nekaj je šlo narobe pri strežniku","ro":"Ceva nu a mers bine pe server","it":"Qualcosa è andato storto sul server"},"Пароли не совпадают!":{"ru":"Пароли не совпадают!","en":"Passwords do not match!","et":"Paroolid ei kattu!","zh":"密码不匹配！","hi":"","ar":"كلمتا المرور غير متطابقتين!","es":"¡Contraseñas no coinciden!","sr":"","uk":"Паролі не співпадають!","de":"Passwörter stimmen nicht überein!","fr":"Les mots de passe ne correspondent pas !","ja":"","ko":"비밀번호가 일치하지 않습니다!","bg":"Паролите не съвпадат!","tr":"","no":"Passordene er ikke like!","vi":"","id":"","pt":"As senhas não coincidem!","lv":"Paroles nesakrīt!","th":"","sl":"Gesla se ne ujemata!","ro":"Parolele nu se potrivesc!","it":"Password non corrispondono!"},"Подтвердите ваше согласие с правилами!":{"ru":"Подтвердите ваше согласие с правилами!","en":"Please confirm your agreement with the rules!","et":"Palun kinnitage oma nõusolekut reeglitega!","zh":"请确认您对规则的同意！","hi":"","ar":"يرجى تأكيد موافقتك على القواعد!","es":"¡Confirme su consentimiento con los reglamentos!","sr":"","uk":"Підтвердіть вашу згоду з правилами!","de":"Bitte bestätigen Sie Ihr Einverständnis mit den Regeln!","fr":"Veuillez confirmer votre accord avec les règles !","ja":"","ko":"규정에 대한 동의를 확인하십시오!","bg":"Моля, потвърдете съгласието си с правилата!","tr":"","no":"Vennligst bekreft at du er enig med reglene!","vi":"","id":"","pt":"Confirme o seu acordo com a regras!","lv":"Apstipriniet, ka piekrītat noteikumiem!","th":"","sl":"Potrdite svoje soglasje s pravili!","ro":"Confirmați acordul dvs. cu regulile!","it":"Si prega di confermare il suo accordo con le regole!"},"Пароль успешно изменён. Вы будете автоматически перенаправлены на главную страницу через 5 секунд.":{"ru":"Пароль успешно изменён. Вы будете автоматически перенаправлены на главную страницу через 5 секунд.","en":"Password changed successfully. You will be automatically redirected to the home page after 5 seconds.","et":"Parooli muutmine õnnestus. Viie sekundi pärast suunatakse teid automaatselt avalehele.","zh":"密码更换成功。 5秒钟后，您将自动重定向到主页。","hi":"","ar":"تم تغيير كلمة المرور بنجاح. ستتم إعادة توجيهك تلقائيًا إلى الصفحة الرئيسية بعد 5 ثوانٍ.","es":"Contraseña cambiada exitosamente. Usted será trasladado automáticamente a la página principal dentro de 5 segundos.","sr":"","uk":"Пароль успішно змінено. Ви будете автоматично перенаправлені на головну сторінку через 5 секунд.","de":"Passwort ist erfolgreich geändert. Sie werden in 5 Sekunden auf die Startseite automatisch weitergeleitet.","fr":"Le mot de passe a été modifié avec succès. Vous serez automatiquement redirigé à la page d\'accueil dans 5 secondes.","ja":"","ko":"비밀번호가 성공적으로 변경되었습니다. 5초 후에 자동으로 홈페이지로 이동됩니다.","bg":"Паролата е променена успешно. След 5 секунди ще бъдете автоматично пренасочени към началната страница.","tr":"","no":"Passordet ble endret. Du blir automatisk omdirigert til hjemmesiden etter 5 sekunder.","vi":"","id":"","pt":"A senha foi mudada com êxito. Você será redirigido automaticamente à página inicial após 5 segundos.","lv":"Parole veiksmīgi mainīta. Jūs tiksiet automātiski pāradresēts uz galveno lapu pēc 5 sekundēm","th":"","sl":"Geslo je uspešno spremenjeno. Boste samodejno preusmerjeni na domačo stran čez 5 sekund.","ro":"Parola a fost schimbată cu succes. Veți fi redirecționat automat către pagina principală în 5 secunde.","it":"Password è stata modificata con successo. Verrà reindirizzato automaticamente alla pagina principale dopo 5 secondi."},"Вы не можете сделать перевод в таком направлении. Измените платёжную систему на доступную.":{"ru":"Вы не можете сделать перевод в таком направлении. Измените платёжную систему на доступную.","en":"You cannot make an exchange in this direction. Change the payment system to an available one.","et":"Selles suunas ei saa tõlkida. Muutke maksesüsteem olemasolevaks.","zh":"您无法朝这个方向翻译。 将付款系统更改为可用的系统。","hi":"","ar":"لا يمكنك إجراء عملية صرفٍ في هذا الاتجاه. قم بتغيير نظام الدفع إلى نظام متاح.","es":"Usted no puede efectuar transferencia en esta dirección. Cambie el sistema de pagos por uno disponible.","sr":"","uk":"Ви не можете зробити переказ у такому напрямку. Змініть платіжну систему на доступну.","de":"Der Wechsel in solcher Richtung ist unmöglich. Ändern Sie das Zahlungssystem auf ein verfügbares System.","fr":"Vous ne pouvez pas effectuer le change dans cette direction. Remplacez le système de paiement par celui qui convient.","ja":"","ko":"그 방향으로는 환전할 수 없습니다. 결제 시스템을 사용 가능한 시스템으로 변경해주십시오.","bg":"Не можете да извършите обмен в тази посока. Променете системата за плащане с друга налична система.","tr":"","no":"Du kan ikke gjøre en overføring i den retningen. Endre betalingssystemet til en tilgjengelig.","vi":"","id":"","pt":"Você não pode fazer a troca em tal direção. Mude o sistema de pagamento para a disponível.","lv":"Jūs nevarat veikt pārskaitījumu šajā virzienā. Mainiet maksājumu sistēmu uz pieejamu.","th":"","sl":"Nakazilo v tej smeri ni mogoče opraviti. Spremenite plačilni sistem tako, da bo dostopen.","ro":"Nu puteți face un transfer în direcția asta. Schimbați sistemul de plăți la unul disponibil.","it":"Non è possibile effettuare uno scambio in questa direzione. Cambia il sistema di pagamento in uno disponibile."},"Чтобы продолжить обмен, вы должны согласиться с правилами сервиса":{"ru":"Чтобы продолжить обмен, вы должны согласиться с правилами сервиса","en":"To continue the exchange, you must agree to the terms of the service","et":"Vahetuse jätkamiseks peate nõustuma teenuse tingimustega","zh":"要继续交换，您必须同意服务条款","hi":"","ar":"لمواصلة عملية الصرف، يجب أن توافق على شروط الخدمة","es":"Para proseguir con el cambio, debe aceptar los términos de servicio","sr":"","uk":"Щоб продовжити обмін, ви повинні погодитись з правилами сервісу","de":"Um den Wechsel fortzusetzen, müssen Sie die Bedingungen des Dienstes akzeptieren","fr":"Pour continuer le change, vous devez accepter les modalités du service","ja":"","ko":"환전을 계속하려면 서비스 규정에 동의해야 합니다.","bg":"За да продължите обмена, трябва да се съгласите с условията на услугата.","tr":"","no":"For å fortsette utvekslingen må du godta reglene for tjenesten.","vi":"","id":"","pt":"Para prosseguir a troca você deve aceitar os termos do serviço","lv":"Lai turpinātu apmaiņu, jums jāpiekrīt\\nservisa noteikumiem","th":"","sl":"Za nadaljevanje menjave morate sprejeti pravila strežnika","ro":"Pentru a continua schimbul, trebuie să fiți de acord cu regulile serviciului","it":"Per continuare lo scambio, devi accettare i termini del servizio"},"Выберите направление":{"ru":"Выберите направление","en":"Choose direction","et":"Valige suund","zh":"选择方向","hi":"","ar":"اختر الاتجاه","es":"Seleccione la dirección","sr":"","uk":"Виберіть напрямок","de":"Wählen Sie die Richtung aus","fr":"Choisissez la direction","ja":"","ko":"방향 선택","bg":"Изберете посока","tr":"","no":"Velg en retning","vi":"","id":"","pt":"Escolha a direção","lv":"Izvēlieties virzienu","th":"","sl":"Izberite smer","ro":"Alegeți direcția","it":"Scegliere direzione"},"Заполните суммы":{"ru":"Заполните суммы","en":"Fill in the amounts","et":"Sisestage summad","zh":"填写金额","hi":"","ar":"املء المبالغ","es":"Indique los montos","sr":"","uk":"Заповніть суми","de":"Füllen Sie die Beträge aus","fr":"Saisissez les montants","ja":"","ko":"금액 입력","bg":"Попълнете сумите","tr":"","no":"Skriv inn beløpene","vi":"","id":"","pt":"Preencha os montantes","lv":"Aizpildiet summas","th":"","sl":"Izpolnite zneske","ro":"Completați sumele","it":"Compilate gli importi"},"Загрузите фото":{"ru":"Загрузите фото","en":"Upload photo","et":"laadige foto","zh":"上传照片","hi":"","ar":"قم بتحميل الصورة","es":"Cargue la foto","sr":"","uk":"Завантажте фото","de":"Laden Sie ein Foto hoch","fr":"Chargez la photo","ja":"","ko":"사진 업로드","bg":"Качване на снимка","tr":"","no":"Last opp et bilde","vi":"","id":"","pt":"Carregue a foto","lv":"Ielādējiet foto","th":"","sl":"Naložite sliko","ro":"Încărcați o fotografie","it":"Carica una foto"},"Выполнение запроса...\\nЗагрузите файл формата png/jpg/jpeg и размером не более 8 Мб":{"ru":"Выполнение запроса...\\nЗагрузите файл формата png/jpg/jpeg и размером не более 8 Мб","en":"Something went wrong on the server\\nUpload a png/jpg/jpeg file with no more than 8 MB","et":"Midagi läks serveris valesti. Laadige üles png/jpg/jpeg-fail, mille maht ei ületa 8 MB","zh":"服务器上出了点问题上传大小不超过8 MB的png / jpg / jpeg文件","hi":"","ar":"حدث خطأ ما في الخادم\\nقم بتحميل ملف png / jpg / jpeg بحجم لا يزيد عن 8 ميجا بايت","es":"Algo salió mal en el servidor\\nCargue el archivo en el formato png/jpg/jpeg con el tamaño hasta 8 Mb","sr":"","uk":"Щось пішло не так на сервері\\nЗавантажте файл формату png/jpg/jpeg та розміром не більше 8 Мб","de":"Auf dem Server ist etwas schief gelaufen\\nLaden Sie eine png/jpg/jpeg-Datei hoch, die nicht größer als 8 MB ist.","fr":"Un problème est survenu sur le serveur\\nChargez un fichier png/jpg/jpeg ne dépassant pas 8 MB","ja":"","ko":"서버에 문제가 발생했습니다.\\n최대 크기가 8MB인 png/jpg/jpeg 형태로 파일을 업로드하십시오.","bg":"Нещо се е объркало в сървъра\\nКачете png/jpg/jpeg файл с размер не по-голям от 8 MB","tr":"","no":"Noe gikk galt på serveren. Last opp en png/jpg/jpeg-fil til størrelsesgrense på 8 MB","vi":"","id":"","pt":"Algo foi errado em a servidor. Carregue um ficheiro de formato png/jpg/jpeg e um tamanho não superior a 8 MB","lv":"Ielādējiet failu formātā png/jpg/jpeg\\nUn apjomā ne lielāku par 8Mb”","th":"","sl":"Nekaj je narobe s strežnikom. Naložite datoteko v obliki png/jpg/jpeg in velikostjo največ 8 Mb","ro":"Ceva nu a mers bine pe server\\nÎncărcați un fișier png/jpg/jpeg cu o dimensiune maximă de 8 MB","it":"Qualcosa è andato storto sul server \\nCarica un file png/jpg/jpeg con una dimensione massima di 8 MB"},"Вы не можете вывести средства на эту платёжную систему. Измените платёжную систему на доступную.":{"ru":"Вы не можете вывести средства на эту платёжную систему. Измените платёжную систему на доступную.","en":"You cannot withdraw funds to this payment system. Change the payment system to an available one.","et":"Sellesse maksesüsteemi ei saa raha välja võtta. Muutke maksesüsteem olemasolevaks.","zh":"您不能向该付款系统提取资金。 将付款系统更改为可用的系统。","hi":"","ar":"لا يمكنك سحب الأموال إلى نظام الدفع هذا. قم بتغيير نظام الدفع إلى نظام متاح.","es":"Usted no puede transferir los medios a este sistema de pagos. Cambie el sistema de pagos por uno disponible.","sr":"","uk":"Ви не можете вивести гроші на цю платіжну систему. Змініть платіжну систему на доступну.","de":"Sie können nicht Geldmittel auf dieses Zahlungssystem abheben. Ändern Sie das Zahlungssystem auf ein verfügbares System.","fr":"Vous ne pouvez pas retirer des fonds dans ce système de paiement. Remplacez le système de paiement par celui qui convient.","ja":"","ko":"이 결제 시스템으로 자금을 출금할 수 없습니다. 결제 시스템을 사용 가능한 시스템으로 변경하십시오.","bg":"Не можете да теглите средства в тази платежна система. Променете платежната система с друга налична система.","tr":"","no":"Du kan ikke ta ut penger til dette betalingssystemet. Endre betalingssystemet til en tilgjengelig.","vi":"","id":"","pt":"Você não pode retirar fundos para este sistema de pagamento. Mude o sistema de pagamento para o disponível.","lv":"Jūs nevarat izņemt līdzekļus šajā\\nmaksājumu sistēmā. Mainiet maksājumu sistēmu uz pieejamu.","th":"","sl":"Izplačilo za ta plačilni sistem ni mogoče. Spremenite plačilni sistem tako, da bo  dostopen.","ro":"Nu puteți retrage fonduri pe sistemul de plăți acest. Schimbați sistemul de plăți la unul disponibil.","it":"Non può prelevare fondi su questo sistema di pagamento. Cambiare il sistema di pagamento in uno disponibile."},"Код подтверждения выслан на почту":{"ru":"Код подтверждения выслан на почту","en":"Confirmation code sent to the mail","et":"Kinnituskood saadeti meilile","zh":"确认码已发送至邮件","hi":"","ar":"تم إرسال رمز التأكيد إلى البريد الإلكتروني","es":"El código de conformación ha sido enviado a su correo electrónico","sr":"","uk":"Код підтвердження надіслано на пошту","de":"Bestätigungscode per E-Mail gesendet","fr":"Code de confirmation a été envoyé par courriel","ja":"","ko":"확인 코드가 이메일로 전송되었습니다","bg":"Код за потвърждение е изпратен на вашия имейл","tr":"","no":"Bekreftelseskoden er sendt til e-postadresse.","vi":"","id":"","pt":"O código de confirmação foi enviado ao e-mail","lv":"Apstiprinājuma kods nosūtīts uz pastu","th":"","sl":"Potrditvena koda je poslana na pošto","ro":"Codul de confirmare a fost trimis pe poștă","it":"Codice di conferma inviato via e-mail"},"Выберите платёжную систему":{"ru":"Выберите платёжную систему","en":"Choose a payment system","et":"Valige maksesüsteem","zh":"选择付款系统","hi":"","ar":"اختر نظام الدفع","es":"Seleccione el sistema de pagos","sr":"","uk":"Виберіть платіжну систему","de":"Wählen Sie das Zahlungssystem aus","fr":"Choisissez le système de paiement","ja":"","ko":"결제 시스템 선택","bg":"Избор на система за плащане","tr":"","no":"Velg et betalingssystem","vi":"","id":"","pt":"Escolha o sistema de pagamento","lv":"Izvēlieties maksājumu sistēmu","th":"","sl":"Izberite plačilni sistem","ro":"Alegeți un sistem de plată","it":"Scegliere un sistema di pagamento"},"Получите и введите код подтверждения":{"ru":"Получите и введите код подтверждения","en":"Receive and enter a verification code","et":"Saate ja sisestage kinnituskood","zh":"接收并输入验证码","hi":"","ar":"تلقىّ وأدخل رمز التحقق","es":"Reciba e introduzca el código de confirmación","sr":"","uk":"Отримайте та введіть код підтвердження","de":"Erhalten Sie einen Verifizierungscode und geben Sie ihn ein","fr":"Recevez et saisissez le code de vérification","ja":"","ko":"확인 코드를 받고 입력하십시오","bg":"Получаване и въвеждане на код за проверка","tr":"","no":"Motta og skriv inn bekreftelseskoden","vi":"","id":"","pt":"Receba e insira um código de verificação","lv":"Saņemiet un ievadiet apstiprinājuma kodu","th":"","sl":"Sprejmite in vpišite potrditveno kodo.","ro":"Primiți și introduceți codul de confirmare","it":"Ricevere e inserire un codice di verifica"},"Пароль успешно изменён":{"ru":"Пароль успешно изменён","en":"Password changed successfully","et":"Parool on edukalt muudetud","zh":"密码修改成功","hi":"","ar":"تم تغيير كلمة المرور بنجاح","es":"Password modificata con successo","sr":"","uk":"","de":"Passwort ist erfolgreich geändert","fr":"","ja":"","ko":"비밀번호가 성공적으로 변경되었습니다.","bg":"Паролата е успешно променена","tr":"","no":"Passordet ble endret vellykket","vi":"","id":"","pt":"Senha alterada com sucesso","lv":"Parole veiksmīgi izmainīta","th":"","sl":"Geslo je uspešno spremenjeno","ro":"Parola a fost schimbată cu succes"},"Заявка на вывод":{"ru":"Заявка на вывод","en":"Withdrawal request","et":"Väljamaksetaotlus","zh":"提现申请","hi":"","ar":"طلب السحب","es":"Richiesta di prelievo","sr":"","uk":"","de":"Antrag auf Abzug","fr":"","ja":"","ko":"출금 요청","bg":"Поръчка за изтегляне","tr":"","no":"Søknaden på trekker","vi":"","id":"","pt":"Pedido de retirada","lv":"Pieteikums izņemšanai","th":"","sl":"Vloga za izplačilo","ro":"Cererea de retragere"},"создана":{"ru":"создана","en":"created","et":"on loodud","zh":"成功","hi":"","ar":"تم إنشاؤه","es":"creata","sr":"","uk":"","de":"ist erstellt","fr":"","ja":"","ko":"생겅됨","bg":"е създадена","tr":"","no":"er opprettet","vi":"","id":"","pt":"criado","lv":"sastādīts","th":"","sl":"je ustvarjena","ro":"creată"},"Вы можете отслеживать её статус в личном кабинете.":{"ru":"Вы можете отслеживать её статус в личном кабинете.","en":"You can track her status in your personal account.","et":"Selle staatust saate jälgida oma isiklikus kabinetis.","zh":"您可以在个人中心跟踪申请状态。","hi":"","ar":"يمكنك متابعة حالته في حسليك الشخصي","es":"Puoi monitorare lo stato della richiesta nel tuo account personale.","sr":"","uk":"","de":"Sie können den Status im persönlichen Account verfolgen.","fr":"","ja":"","ko":"개인 계정에서 신청의 상태를 확인할 수 있습니다.","bg":"Можете да направите мониторинга на поръчката в личния си акаунт.","tr":"","no":"Du kan spore status for søknaden din på Personlige område.","vi":"","id":"","pt":"Você pode seguir o seu status na sua conta pessoal.","lv":"Jūs varat sekot tā statusam personīgajā kabinetā.","th":"","sl":"Lahko spremljate njen status v svojem uporabniškem računu.","ro":"Puteți urmări starea acesteia în contul dvs. personal."}}')
}, function(e, t, n) {
    var r = n(0),
        o = n(1),
        i = n(3),
        a = (n(7), n(2)),
        s = function() {
            "use strict";

            function e(t, n) {
                var o;
                r(this, e), i(this, "appModel", void 0), i(this, "appView", void 0), this.appModel = t, this.appView = n;
                try {
                    (o = new WebSocket(n.websocket)).addEventListener("open", (function() {
                        console.log("Websocket connection successful")
                    })), o.addEventListener("close", (function() {
                        console.log("Websocket connection closed")
                    })), o.addEventListener("message", (function(e) {
                        var t = JSON.parse(e.data);
                        if (window.location.pathname === "/order/" + t.order_id) window.location.reload();
                        else switch (t.status) {
                            case "frozen":
                                n.showOrderNotification("".concat(a.translate("Заявка"), " ").concat(t.order_id, " ").concat(a.translate("ожидает оплаты")), "/order/".concat(t.order_id));
                                break;
                            case "deleted":
                                n.showOrderNotification("".concat(a.translate("Заявка"), " ").concat(t.order_id, " ").concat(a.translate("удалена")), "/order/".concat(t.order_id));
                                break;
                            case "error":
                                n.showOrderNotification("".concat(a.translate("Обмен"), " ").concat(t.order_id, " ").concat(a.translate("не состоялся")), "/order/".concat(t.order_id));
                                break;
                            case "completed":
                                n.showOrderNotification("".concat(a.translate("Обмен"), " ").concat(t.order_id, " ").concat(a.translate("завершен успешно")), "/order/".concat(t.order_id));
                                break;
                            default:
                                n.showOrderNotification("".concat(a.translate("Заявка"), " ").concat(t.order_id, " ").concat(a.translate("изменила статус")), "/order/".concat(t.order_id))
                        }
                    }))
                } catch (e) {
                    console.log("Websockets not connected")
                }
            }
            return o(e, [{
                key: "sendReview",
                value: function(e, t) {
                    var n = this;
                    "" !== e && "" !== t ? (this.appView.startLoading(), this.appModel.sendReview(e, t).then((function(e) {
                        n.appView.stopLoading(), n.appView.showError(e), n.appView.clearReviewsFields()
                    })).catch((function(e) {
                        n.appView.showError(e), n.appView.stopLoading()
                    }))) : this.appView.showError(a.translate("Заполните все поля"))
                }
            }, {
                key: "sendContact",
                value: function(e, t, n, r) {
                    var o = this;
                    "" !== e && "" !== t && "" !== n && "" !== r ? (this.appView.startLoading(), this.appModel.sendContact(e, t, n, r).then((function(e) {
                        o.appView.stopLoading(), o.appView.showError(e), o.appView.clearContactsFields()
                    })).catch((function(e) {
                        o.appView.showError(e), o.appView.stopLoading()
                    }))) : this.appView.showError(a.translate("Заполните все поля"))
                }
            }, {
                key: "sendUpReserve",
                value: function(e, t, n) {
                    var r = this;
                    if ("" !== e && "" !== t && "" !== n) {
                        var o = "Необходимо ".concat(n, " ").concat(t);
                        this.appView.startLoading(), this.appModel.sendContact(e, "Anonymous", "Увеличение резерва", o).then((function(e) {
                            r.appView.stopLoading(), r.appView.showError(e)
                        })).catch((function(e) {
                            r.appView.showError(e), r.appView.stopLoading()
                        }))
                    } else this.appView.showError(a.translate("Заполните все поля"))
                }
            }, {
                key: "requestAPI",
                value: function(e) {
                    var t = this;
                    if ("" !== e) {
                        this.appView.startLoading(), this.appModel.sendContact(e, "Anonymous", "Запрос API", "Запрос на получение доступа к API для подключения нашего сервиса").then((function(e) {
                            t.appView.stopLoading(), t.appView.showError(e)
                        })).catch((function(e) {
                            t.appView.showError(e), t.appView.stopLoading()
                        }))
                    } else this.appView.showError(a.translate("Заполните Email"))
                }
            }]), e
        }();
    e.exports = s
}, function(e, t, n) {
    var r = n(0),
        o = n(1),
        i = n(3),
        a = n(5),
        s = (n(2), n(8));
    a.fn.sortChildren = function(e) {
        return this.each((function() {
            var t = a(this).children().get();
            t.sort(e), a(this).append(t)
        }))
    };
    var u = function() {
        "use strict";

        function e() {
            var t = this;
            r(this, e), i(this, "websocket", "wss://alfachange.net/ws"), i(this, "appController", void 0), a(".language-switch-item").click((function() {
                var e = a(this).data("code"),
                    t = new URL(window.location.href),
                    n = t.pathname.replace(new RegExp("".concat(language, "/?")), "");
                t.pathname = "ru" != e ? "/" + e + n : n, window.location.href = t.href
            })), a("#reviewsSend").click((function() {
                var e = a("#reviewsName").val(),
                    n = a("#reviewsMsg").val();
                t.appController.sendReview(e, n)
            })), a("#contactsSend").click((function() {
                var e = a("#contactsEmail").val(),
                    n = a("#contactsName").val(),
                    r = a("#contactsSubject").val(),
                    o = a("#contactsMsg").val();
                t.appController.sendContact(e, n, r, o)
            })), a(document).width() < 992 && (a(".reserves_wrap").css("height", "690px"), a(".home-banner__reserv-list").css("height", "600px").css("overflow-y", "auto")), a(".home-banner__reserv-list").sortChildren((function(e, t) {
                try {
                    var n = parseInt(a(e).find(".home-banner__reserv-item-value").text()),
                        r = parseInt(a(t).find(".home-banner__reserv-item-value").text());
                    return "Bitcoin" === a(e).data("name") && 0 !== n ? -1 : 0 === n && 0 !== r ? 1 : 0 !== n && 0 === r ? -1 : 0
                } catch (e) {
                    return 0
                }
            })), a("a[data-tg-bot]").click((function() {
                s.sendEvent(3)
            }))
        }
        return o(e, [{
            key: "startLoading",
            value: function() {
                a(".main-loading").show()
            }
        }, {
            key: "stopLoading",
            value: function() {
                a(".main-loading").hide()
            }
        }, {
            key: "showError",
            value: function(e) {
                openModal(e)
            }
        }, {
            key: "clearReviewsFields",
            value: function() {
                a("#reviewsName").val(""), a("#reviewsMsg").val("")
            }
        }, {
            key: "clearContactsFields",
            value: function() {
                a("#contactsEmail").val(""), a("#contactsName").val(""), a("#contactsSubject").val(""), a("#contactsMsg").val("")
            }
        }, {
            key: "showOrderNotification",
            value: function(e, t) {}
        }]), e
    }();
    e.exports = u
}, function(e, t, n) {
    var r = n(0),
        o = n(1),
        i = n(3),
        a = n(6),
        s = n(2),
        u = n(7),
        c = function() {
            "use strict";

            function e() {
                r(this, e), i(this, "allPaymentSystems", paymentSystems), i(this, "paymentSystems", {
                    in: paymentSystemsIn,
                    out: paymentSystemsOut
                }), i(this, "available", {
                    in: null,
                    out: null
                }), i(this, "paymentSystem", {
                    in: null,
                    out: null
                }), i(this, "defaultPaymentSystem", {
                    in: this.findPaymentSystem("psid", parseInt(direction[0])),
                    out: this.findPaymentSystem("psid", parseInt(direction[1]))
                }), i(this, "currentDirection", null), i(this, "amountIn", ""), i(this, "amountOut", ""), i(this, "discount", {}), i(this, "requisites", []), i(this, "requisitesCodes", []), i(this, "inviter", null), i(this, "calculateDirect", void 0), i(this, "coupon", "")
            }
            return o(e, [{
                key: "isExist",
                value: function(e, t) {
                    return t ? !!this.paymentSystems.in.find((function(t) {
                        return e.id === t.id
                    })) : !!this.paymentSystems.out.find((function(t) {
                        return e.id === t.id
                    }))
                }
            }, {
                key: "isDisabled",
                value: function(e, t) {
                    var n;
                    if (t) {
                        if (!this.available.in) return !1;
                        n = this.available.in.find((function(t) {
                            return t.psid1 === e.psid
                        }))
                    } else {
                        if (!this.available.out) return !1;
                        n = this.available.out.find((function(t) {
                            return t.psid2 === e.psid
                        }))
                    }
                    return !n
                }
            }, {
                key: "findDirection",
                value: function() {
                    var e = this;
                    return this.available.out ? this.available.out.find((function(t) {
                        return t.psid1 === e.paymentSystem.in.psid && t.psid2 === e.paymentSystem.out.psid && 0 === t.direct
                    })) : null
                }
            }, {
                key: "findPaymentSystem",
                value: function(e, t) {
                    return this.allPaymentSystems.find((function(n) {
                        return n[e] === t
                    }))
                }
            }, {
                key: "choosePaymentSystem",
                value: function(e, t) {
                    return t ? this.paymentSystem.in = e : this.paymentSystem.out = e, this.isDisabled(e, t) && (this.requisites = void 0), this.getAvailableDirections(e.psid, t)
                }
            }, {
                key: "getAvailableDirections",
                value: function(e, t) {
                    var n = this;
                    return new Promise((function(r, o) {
                        (new a).get("available", {
                            psid: e,
                            direct: t ? 0 : 1
                        }).then((function(e) {
                            var i = e.data;
                            "success" === i.status ? (i.value = i.value.filter((function(e) {
                                return !Array.isArray(e)
                            })), t ? n.available.out = i.value : n.available.in = i.value, n.currentDirection = n.paymentSystem.in && n.paymentSystem.out ? n.findDirection() : null, r(i.value)) : "error" === i.status && o(i.msg)
                        })).catch((function(e) {
                            o(s.translate("Выполнение запроса..."))
                        }))
                    }))
                }
            }, {
                key: "getDirectionInfo",
                value: function() {
                    var e = this;
                    return new Promise((function(t, n) {
                        (new a).get("info-dir", {
                            psid1: e.paymentSystem.in.psid,
                            psid2: e.paymentSystem.out.psid
                        }).then((function(e) {
                            var r = e.data;
                            "success" === r.status ? t(r.value) : "error" === r.status && n(r.msg)
                        })).catch((function(e) {
                            n(s.translate("Выполнение запроса..."))
                        }))
                    }))
                }
            }, {
                key: "getCouponInfo",
                value: function(e) {
                    return (new a).getModel("coupon-info", {
                        name: e
                    })
                }
            }, {
                key: "calculate",
                value: function(e, t) {
                    var n = this,
                        r = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
                    this.calculateDirect = t ? 0 : 1, this.coupon = e;
                    var o = [(new a).get("calc", {
                        psid1: this.paymentSystem.in.psid,
                        psid2: this.paymentSystem.out.psid,
                        amount: t ? this.amountIn : this.amountOut,
                        direct: this.calculateDirect,
                        coupon: this.coupon ? this.coupon.replace(/[^\da-zA-Z]/g, "") : "",
                        coupon_name: this.coupon ? this.coupon.replace(/[^\da-zA-Z]/g, "") : ""
                    })];
                    return r && o.push(this.getRequisites()), new Promise((function(e, t) {
                        Promise.all(o).then((function(r) {
                            var o = r[0].data;
                            "success" === o.status ? (n.amountIn = o.value.direction.in, n.amountOut = o.value.direction.out, n.discount = o.value.discount, e(o.value)) : "error" === o.status && t(o.msg)
                        })).catch((function(e) {
                            t(s.translate("Выполнение запроса..."))
                        }))
                    }))
                }
            }, {
                key: "getRequisites",
                value: function() {
                    var e = this;
                    return new Promise((function(t, n) {
                        (new a).get("requisites", {
                            psid1: e.paymentSystem.in.psid,
                            psid2: e.paymentSystem.out.psid
                        }).then((function(r) {
                            var o = r.data;
                            if ("success" === o.status) {
                                e.requisites = [], e.requisitesCodes = [], e.requisites = [].concat.apply([], o.value), e.requisites = e.requisites.map((function(t) {
                                    t.data_id = "req_" + l(16), t.isCode = "code" == t.name || "pin" == t.name || "check" == t.name, t.action = null, t.group = null, t.isCode && e.requisitesCodes.push(t);
                                    var n = localStorage.getItem(String(t.id));
                                    !n || "email" === t.name && t.value || (t.value = n);
                                    var r = (new u).getParam("req_".concat(t.name));
                                    return r && (t.value = r), t
                                }));
                                var i = l(16);
                                e.requisitesCodes = e.requisitesCodes.map((function(e) {
                                    return e.group = i, e
                                })), e.requisitesCodes.length > 0 && (e.requisitesCodes[e.requisitesCodes.length - 1].action = "add"), t(e.requisites)
                            } else "error" === o.status && n(o.msg)
                        })).catch((function(e) {
                            n(s.translate("Выполнение запроса..."))
                        }))
                    }))
                }
            }, {
                key: "createOrder",
                value: function(e, t, n) {
                    this.coupon = e;
                    var r = [];
                    this.requisites.forEach((function(e) {
                        "coupon" !== e.name && r.push({
                            name: e.name,
                            value: e.value
                        })
                    }));
                    var o = {
                        Order: {
                            psid1: this.paymentSystem.in.psid,
                            psid2: this.paymentSystem.out.psid,
                            in: parseFloat(this.amountIn),
                            out: parseFloat(this.amountOut),
                            direct: this.calculateDirect,
                            agreement: "yes",
                            props: r,
                            coupon: this.coupon ? this.coupon.replace(/[^\da-zA-Z]/g, "") : "",
                            coupon_name: this.coupon ? this.coupon.replace(/[^\da-zA-Z]/g, "") : "",
                            bonus_use: t ? "on" : "off"
                        },
                        redirect: {
                            success: window.location.protocol + "//" + window.location.host + "/profile/exchanges",
                            error: window.location.protocol + "//" + window.location.host + "/profile/exchanges"
                        }
                    };
                    n && (o.Order.order_balance_email = n);
                    var i = {};
                    return this.inviter && (i.inviter = this.inviter), new Promise((function(e, t) {
                        (new a).post("create", o, i).then((function(n) {
                            var r = n.data;
                            "success" === r.status ? e(r.value) : "error" === r.status && t(r)
                        })).catch((function(e) {
                            t({
                                status: "error",
                                msg: s.translate("Выполнение запроса...")
                            })
                        }))
                    }))
                }
            }]), e
        }();

    function l(e) {
        for (var t = "", n = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789", r = n.length, o = 0; o < e; o++) t += n.charAt(Math.floor(Math.random() * r));
        return t
    }
    e.exports = c
}, function(e, t, n) {
    var r = n(9),
        o = n(10),
        i = n(49),
        a = n(0),
        s = n(1),
        u = n(3),
        c = n(7),
        l = n(2),
        d = function() {
            "use strict";

            function e(t, n, r) {
                if (a(this, e), u(this, "calculatorModel", void 0), u(this, "calculatorView", void 0), u(this, "mode", void 0), u(this, "loading", !1), u(this, "promocode", localStorage.getItem("promocode")), u(this, "favorites", localStorage.getItem("favorites") ? JSON.parse(localStorage.getItem("favorites")) : []), u(this, "filterIn", "crypto"), u(this, "filterOut", "crypto"), u(this, "typingTimer", void 0), this.calculatorModel = t, this.calculatorView = n, this.mode = r, this.calculatorView.hasCalculator()) {
                    var o = (new c).getParam("ref") || localStorage.getItem("ref");
                    o && (localStorage.setItem("ref", o), this.calculatorModel.inviter = o), this.fillDefault()
                }
            }
            var t;
            return s(e, [{
                key: "fillDefault",
                value: function() {
                    var e = this,
                        t = (new c).getParam("cur_from"),
                        n = (new c).getParam("cur_to"),
                        r = localStorage.getItem("cur_from"),
                        o = localStorage.getItem("cur_to"),
                        i = (new c).getParam("amount_from"),
                        a = (new c).getParam("amount_to"),
                        s = function(t, n, r, o, i, a) {
                            var s;
                            if (n && (s = n.toUpperCase() === n ? e.calculatorModel.findPaymentSystem("bci", n) : e.calculatorModel.findPaymentSystem("seo", n)) && e.calculatorModel.isExist(s, a)) return e.choosePaymentSystem(s.psid, a), void(r && e.changeAmount(r, !0));
                            if (o && (s = e.calculatorModel.findPaymentSystem("seo", o)) && e.calculatorModel.isExist(s, a)) e.choosePaymentSystem(s.psid, a);
                            else {
                                if (i) {
                                    var u = i;
                                    if (e.calculatorModel.isExist(u, a)) return void e.choosePaymentSystem(u.psid, a)
                                }
                                e.choosePaymentSystem(t[0].psid, a)
                            }
                        };
                    s(this.calculatorModel.paymentSystems.in, t, i, r, this.calculatorModel.defaultPaymentSystem.in, !0), s(this.calculatorModel.paymentSystems.out, n, a, o, this.calculatorModel.defaultPaymentSystem.out, !1)
                }
            }, {
                key: "findPaymentSystem",
                value: function(e, t) {
                    return this.calculatorModel.findPaymentSystem(e, t)
                }
            }, {
                key: "findRequisite",
                value: function(e) {
                    return this.calculatorModel.requisites.find((function(t) {
                        return t.data_id == e
                    }))
                }
            }, {
                key: "isDisabled",
                value: function(e, t) {
                    return this.calculatorModel.isDisabled(e, t)
                }
            }, {
                key: "useCoupon",
                value: function(e) {
                    var t = this,
                        n = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
                        r = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
                        o = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3];
                    o ? this.calculatorModel.getCouponInfo(e).then((function(o) {
                        "success" == o.status ? (localStorage.setItem("promocode", e), t.promocode = e, n && t.calculatorView.showError(o.msg), t.calculatorView.setCoupon(e), 0 !== t.calculatorModel.amountIn.length ? t.calculate(!0, !1) : 0 !== t.calculatorModel.amountOut.length && t.calculate(!1, !1)) : (n && t.calculatorView.showError(o.msg), r && t.removeCoupon())
                    })).catch((function(e) {
                        t.calculatorView.showError(e)
                    })) : (localStorage.setItem("promocode", e), this.promocode = e, 0 !== this.calculatorModel.amountIn.length ? this.calculate(!0, !1) : 0 !== this.calculatorModel.amountOut.length && this.calculate(!1, !1))
                }
            }, {
                key: "removeCoupon",
                value: function() {
                    localStorage.removeItem("promocode"), this.promocode = null, this.calculatorView.removeCoupon()
                }
            }, {
                key: "changeCategory",
                value: function(e, t) {
                    var n = this;
                    if (t) {
                        if (this.filterIn !== e) {
                            this.filterIn = e;
                            var r = this.calculatorModel.paymentSystems.in.find((function(r) {
                                return r.group === e && !n.calculatorModel.isDisabled(r, t)
                            }));
                            r || (r = this.calculatorModel.paymentSystems.in.find((function(t) {
                                return t.group === e
                            }))), r || (r = this.calculatorModel.paymentSystems.in.find((function(e) {
                                return !0
                            }))), this.choosePaymentSystem(r.psid, t)
                        }
                    } else if (this.filterOut !== e) {
                        this.filterOut = e;
                        var o = this.calculatorModel.paymentSystems.out.find((function(r) {
                            return r.group === e && !n.calculatorModel.isDisabled(r, t)
                        }));
                        o || (o = this.calculatorModel.paymentSystems.out.find((function(t) {
                            return t.group === e
                        }))), o || (o = this.calculatorModel.paymentSystems.out.find((function(e) {
                            return !0
                        }))), this.choosePaymentSystem(o.psid, t)
                    }
                }
            }, {
                key: "choosePaymentSystem",
                value: function(e, t) {
                    var n = this,
                        r = this.calculatorModel.findPaymentSystem("psid", e);
                    if (r) return t ? (this.filterIn = r.group, this.calculatorView.leftGroup(this.filterIn), (new c).insertParam("cur_from", r.seo), this.calculatorView.leftPaymentSystem(r)) : (this.filterOut = r.group, this.calculatorView.rightGroup(this.filterOut), (new c).insertParam("cur_to", r.seo), this.calculatorView.rightPaymentSystem(r)), this.calculatorModel.isDisabled(r, t) ? (this.calculatorView.disabledDirection(!0), this.calculatorView.showError(l.translate("Вы не можете сделать перевод в таком направлении. Измените платёжную систему на доступную."))) : this.calculatorView.disabledDirection(!1), this.loading = !0, this.calculatorView.startLoadingPaymentSystems(), this.calculatorModel.choosePaymentSystem(r, t).then((function(e) {
                        n.loading = !1, n.calculatorView.stopLoadingPaymentSystems(), localStorage.setItem(t ? "cur_from" : "cur_to", r.seo), t ? n.calculatorView.rightDisabledPaymentSystem() : n.calculatorView.leftDisabledPaymentSystem(), n.calculatorView.sortPaymentSystems(), n.calculatorModel.paymentSystem.in && n.calculatorModel.paymentSystem.out && (n.calculatorView.directionInfo(n.calculatorModel.currentDirection), n.getDirectionInfo(), n.getRequisites()), 0 !== n.calculatorModel.amountIn.length ? n.calculate(!0, !1) : 0 !== n.calculatorModel.amountOut.length && n.calculate(!1, !1)
                    })).catch((function(e) {
                        n.calculatorView.showError(e)
                    }))
                }
            }, {
                key: "addFavoritePaymentSystem",
                value: function(e) {
                    this.favorites.push(e), localStorage.setItem("favorites", JSON.stringify(this.favorites))
                }
            }, {
                key: "removeFavoritePaymentSystem",
                value: function(e) {
                    var t = this.favorites.findIndex((function(t) {
                        return t === e
                    }));
                    this.favorites.splice(t, 1), localStorage.setItem("favorites", JSON.stringify(this.favorites))
                }
            }, {
                key: "getDirectionInfo",
                value: function() {
                    var e = this;
                    this.loading = !0, this.calculatorView.startLoadingPaymentSystems(), this.calculatorModel.getDirectionInfo().then((function(t) {
                        e.loading = !1, e.calculatorView.stopLoadingPaymentSystems(), e.calculatorView.addDirectionInfo(t)
                    })).catch((function(t) {
                        e.calculatorView.showError(t), e.loading = !1, e.calculatorView.stopLoadingPaymentSystems()
                    }))
                }
            }, {
                key: "changeAmount",
                value: function(e, t) {
                    var n = this;
                    e = e.replace(/\,/g, "."), t ? e ? (this.calculatorModel.amountIn = e, (new c).insertParam("amount_from", String(parseFloat(this.calculatorModel.amountIn)))) : (new c).removeParam("amount_from") : e ? (this.calculatorModel.amountOut = e, (new c).insertParam("amount_to", String(parseFloat(this.calculatorModel.amountOut)))) : (new c).removeParam("amount_from"), clearTimeout(this.typingTimer), this.typingTimer = setTimeout((function() {
                        n.calculatorModel.requisites ? n.calculate(t, !1) : n.calculate(t)
                    }), 1100)
                }
            }, {
                key: "removeTimer",
                value: function() {
                    clearTimeout(this.typingTimer)
                }
            }, {
                key: "getRequisites",
                value: function() {
                    var e = this;
                    this.loading = !0, this.calculatorView.startLoadingPaymentSystems(), this.calculatorModel.getRequisites().then((function(t) {
                        e.calculatorView.requisites(t, e.calculatorModel.paymentSystem.in, e.calculatorModel.paymentSystem.out), e.loading = !1, e.calculatorView.stopLoadingPaymentSystems()
                    })).catch((function(t) {
                        e.calculatorView.showError(t), e.loading = !1, e.calculatorView.stopLoadingPaymentSystems()
                    }))
                }
            }, {
                key: "addCodes",
                value: function() {
                    var e, t = JSON.parse(JSON.stringify(this.calculatorModel.requisitesCodes)),
                        n = f(16);
                    (t = t.map((function(e) {
                        return e.data_id = f(16), e.value = "", e.group = n, e
                    })))[t.length - 1].action = "remove";
                    var r, o, a, s, u, c = (r = this.calculatorModel.requisites, o = "isCode", a = !0, s = r.slice().reverse().findIndex((function(e) {
                        return e[o] === a
                    })), u = r.length - 1, s >= 0 ? u - s : -1);
                    (e = this.calculatorModel.requisites).splice.apply(e, [c + 1, 0].concat(i(t))), this.calculatorView.requisites(this.calculatorModel.requisites, this.calculatorModel.paymentSystem.in, this.calculatorModel.paymentSystem.out)
                }
            }, {
                key: "removeCodes",
                value: function(e) {
                    var t = this.calculatorModel.requisites.reduce((function(t, n, r) {
                        return n.group == e && t.push(r), t
                    }), []);
                    this.calculatorModel.requisites.splice(t[0], t.length), this.calculatorView.requisites(this.calculatorModel.requisites, this.calculatorModel.paymentSystem.in, this.calculatorModel.paymentSystem.out)
                }
            }, {
                key: "swapPaymentSystems",
                value: function() {
                    var e = this;
                    this.calculatorModel.available.in = this.calculatorModel.available.out = null;
                    var t = this.calculatorModel.paymentSystem.out.psid,
                        n = this.calculatorModel.paymentSystem.in.psid;
                    this.calculatorModel.paymentSystem.in = void 0, this.calculatorModel.paymentSystem.out = void 0, this.choosePaymentSystem(t, !0).then((function() {
                        return e.choosePaymentSystem(n, !1)
                    })).catch((function(t) {
                        e.loading = !1, e.calculatorView.stopLoadingPaymentSystems()
                    }))
                }
            }, {
                key: "validate",
                value: function() {
                    return !(!this.calculatorModel.paymentSystem.in || !this.calculatorModel.paymentSystem.out) && (this.calculatorModel.currentDirection = this.calculatorModel.findDirection(), !!this.calculatorModel.currentDirection)
                }
            }, {
                key: "isInLimit",
                value: function() {
                    var e = parseFloat(this.calculatorModel.amountIn),
                        t = this.calculatorModel.currentDirection.in_valute,
                        n = parseFloat(this.calculatorModel.amountOut),
                        r = this.calculatorModel.currentDirection.out_valute,
                        o = this.calculatorModel.currentDirection.in_min,
                        i = this.calculatorModel.currentDirection.in_max,
                        a = this.calculatorModel.currentDirection.out_min;
                    if (e < o || a > 0 && n < a) {
                        if (0 === a) {
                            if (i < o) return !0;
                            if (e < o) {
                                if (6 === this.mode) return this.calculatorView.showError("Минимальная сумма для обмена составляет ".concat(o, " ").concat(t)), !0;
                                this.calculatorModel.amountIn = String(o), this.calculatorView.leftInput(this.calculatorModel.amountIn), (new c).insertParam("amount_from", String(parseFloat(this.calculatorModel.amountIn))), this.calculate(!0, !1)
                            }
                        } else if (n < a) {
                            if (6 === this.mode) return this.calculatorView.showError("Минимальная сумма для обмена составляет ".concat(a, " ").concat(r)), !0;
                            this.calculatorModel.amountOut = String(a), this.calculatorView.rightInput(this.calculatorModel.amountOut), (new c).insertParam("amount_to", String(parseFloat(this.calculatorModel.amountOut))), this.calculate(!1, !1)
                        }
                        return !1
                    }
                    return !(e > i) || (6 === this.mode ? (this.calculatorView.showError("Максимальная сумма для обмена составляет ".concat(i, " ").concat(t)), !0) : (this.calculatorModel.amountIn = String(i), this.calculatorView.leftInput(this.calculatorModel.amountIn), (new c).insertParam("amount_from", String(parseFloat(this.calculatorModel.amountIn))), this.calculate(!0, !1), !1))
                }
            }, {
                key: "calculate",
                value: (t = o(r.mark((function e(t) {
                    var n, o = this,
                        i = arguments;
                    return r.wrap((function(e) {
                        for (;;) switch (e.prev = e.next) {
                            case 0:
                                if (n = !(i.length > 1 && void 0 !== i[1]) || i[1], this.loading = !0, this.calculatorView.startLoadingPaymentSystems(), this.validate()) {
                                    e.next = 8;
                                    break
                                }
                                return this.loading = !1, this.calculatorView.stopLoadingPaymentSystems(), this.calculatorModel.discount = this.calculatorModel.requisites = void 0, e.abrupt("return");
                            case 8:
                                if (this.isInLimit()) {
                                    e.next = 10;
                                    break
                                }
                                return e.abrupt("return");
                            case 10:
                                this.calculatorModel.calculate(this.promocode, t, n).then((function(e) {
                                    o.loading = !1, o.calculatorView.stopLoadingPaymentSystems(), o.calculatorView.leftInput(o.calculatorModel.amountIn), o.calculatorView.rightInput(o.calculatorModel.amountOut), (new c).insertParam("amount_from", String(parseFloat(o.calculatorModel.amountIn))), (new c).insertParam("amount_to", String(parseFloat(o.calculatorModel.amountOut))), o.calculatorView.discountInfo(o.calculatorModel.discount), e.alert ? o.calculatorView.showError(e.alert) : e.warnings && o.calculatorView.showError(e.warnings), o.isInLimit()
                                })).catch((function(e) {
                                    o.calculatorView.showError(e), o.loading = !1, o.calculatorView.stopLoadingPaymentSystems()
                                }));
                            case 11:
                            case "end":
                                return e.stop()
                        }
                    }), e, this)
                }))), function(e) {
                    return t.apply(this, arguments)
                })
            }, {
                key: "saveRequisites",
                value: function() {
                    this.calculatorModel.requisites.forEach((function(e) {
                        e.value && localStorage.setItem(String(e.id), e.value)
                    }))
                }
            }, {
                key: "createOrder",
                value: function(e) {
                    var t = this;
                    if (this.calculatorView.resetWrongRequisites(), this.calculatorView.isAcceptRules())
                        if (this.calculatorModel.requisites)
                            if (this.calculatorModel.amountIn && this.calculatorModel.amountOut) {
                                var n = this.calculatorView.isUseBonus();
                                this.calculatorView.startLoadingPaymentSystems(), this.calculatorView.startLoadingRequisites(), this.calculatorModel.createOrder(this.promocode, n, e).then((function(n) {
                                    if (n.security) return t.calculatorView.showSecurityCodeInput(n.security.data.action_id), e && n.security.data.error && t.calculatorView.showError(n.security.data.error.msg), t.calculatorView.stopLoadingPaymentSystems(), void t.calculatorView.stopLoadingRequisites();
                                    t.removeCoupon(), t.calculatorView.afterCreate(n.id)
                                })).catch((function(e) {
                                    t.orderLoading = !1, t.loading = !1;
                                    var n = e.msg;
                                    e.value, t.calculatorView.showError(n), t.calculatorView.stopLoadingPaymentSystems(), t.calculatorView.stopLoadingRequisites()
                                }))
                            } else this.calculatorView.showError(l.translate("Заполните суммы"));
                    else this.calculatorView.showError(l.translate("Выберите направление"));
                    else this.calculatorView.showError(l.translate("Чтобы продолжить обмен, вы должны согласиться с правилами сервиса"))
                }
            }]), e
        }();

    function f(e) {
        for (var t = "", n = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789", r = n.length, o = 0; o < e; o++) t += n.charAt(Math.floor(Math.random() * r));
        return t
    }
    e.exports = d
}, function(e, t, n) {
    var r = n(50),
        o = n(51),
        i = n(52),
        a = n(53);
    e.exports = function(e) {
        return r(e) || o(e) || i(e) || a()
    }
}, function(e, t, n) {
    var r = n(19);
    e.exports = function(e) {
        if (Array.isArray(e)) return r(e)
    }
}, function(e, t) {
    e.exports = function(e) {
        if ("undefined" != typeof Symbol && Symbol.iterator in Object(e)) return Array.from(e)
    }
}, function(e, t, n) {
    var r = n(19);
    e.exports = function(e, t) {
        if (e) {
            if ("string" == typeof e) return r(e, t);
            var n = Object.prototype.toString.call(e).slice(8, -1);
            return "Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n ? Array.from(e) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? r(e, t) : void 0
        }
    }
}, function(e, t) {
    e.exports = function() {
        throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
    }
}, function(e, t, n) {
    var r = n(0),
        o = n(1),
        i = n(3),
        a = n(5),
        s = (n(2), n(8));
    a.fn.sortChildren = function(e) {
        return this.each((function() {
            var t = a(this).children().get();
            t.sort(e), a(this).append(t)
        }))
    };
    var u = function() {
        "use strict";

        function e() {
            var t = this;
            r(this, e), i(this, "calculatorController", void 0), i(this, "typingTimer", void 0);
            var n = this;
            this.hasCalculator() && (a(".calculator__search").on("keyup", (function(e) {
                a(t).parent().parent().find(".calculator__list").find(".dropdown-menu__item").each((function(t, n) {
                    var r = a(n).text().trim(),
                        o = a(e.currentTarget).val(); - 1 !== r.toLowerCase().indexOf(o.toLowerCase()) ? a(n).show() : a(n).hide()
                }))
            })), a(".calculator_ps-in .dropdown-menu__item").click((function(e) {
                a(e.currentTarget).closest(".dropdown").removeClass("open"), t.calculatorController.choosePaymentSystem(a(e.currentTarget).data("shortname"), !0)
            })), a(".calculator_ps-in .calculator__group").click((function(e) {
                "all" !== a(e.currentTarget).data("tab") ? t.calculatorController.changeCategory(a(e.currentTarget).data("tab"), !0) : (n.leftGroup("all"), t.calculatorController.filterIn = "all")
            })), a(".calculator_ps-in .calculator__input").on("keyup", (function(e) {
                t.calculatorController.changeAmount(a(e.currentTarget).val(), !0)
            })), a(".calculator_ps-in .calculator__input").on("keydown", (function(e) {
                t.calculatorController.removeTimer()
            })), a(".calculator_ps-out .dropdown-menu__item").click((function(e) {
                a(e.currentTarget).closest(".dropdown").removeClass("open"), t.calculatorController.choosePaymentSystem(a(e.currentTarget).data("shortname"), !1)
            })), a(".calculator_ps-out .calculator__group").click((function(e) {
                "all" !== a(e.currentTarget).data("tab") ? t.calculatorController.changeCategory(a(e.currentTarget).data("tab"), !1) : (n.rightGroup("all"), t.calculatorController.filterOut = "all")
            })), a(".calculator_ps-out .calculator__input").on("keyup", (function(e) {
                t.calculatorController.changeAmount(a(e.currentTarget).val(), !1)
            })), a(".calculator_ps-out .calculator__input").on("keydown", (function(e) {
                t.calculatorController.removeTimer()
            })), a(".calculator__swap").click((function(e) {
                t.calculatorController.swapPaymentSystems()
            })), setTimeout((function() {
                a(".calculator__coupon").val(t.calculatorController.promocode)
            }), 10), a(".calculator__coupon").on("keyup keypress blur change", (function(e) {
                clearTimeout(t.typingTimer), t.typingTimer = setTimeout((function() {
                    var e = a(".calculator__coupon").val();
                    t.calculatorController.useCoupon(e, !1, !1, !1)
                }), 900)
            })), a(".calculator__create-order").click((function(e) {
                s.sendEvent(1), t.calculatorController.createOrder()
            })), a(".securityConfirm").click((function(e) {
                var n = a(".securityCode").val();
                s.sendEvent(1), t.calculatorController.createOrder(n)
            })))
        }
        return o(e, [{
            key: "hasCalculator",
            value: function() {
                return !!a("#calculator").length
            }
        }, {
            key: "showError",
            value: function(e) {
                openModal(e)
            }
        }, {
            key: "showSecurityCodeInput",
            value: function(e) {
                openSecurityModal(e)
            }
        }, {
            key: "startLoadingPaymentSystems",
            value: function() {
                a(".main-loading").show(), a(".main-loading").show()
            }
        }, {
            key: "stopLoadingPaymentSystems",
            value: function() {
                a(".main-loading").hide(), a(".main-loading").hide()
            }
        }, {
            key: "startLoadingRequisites",
            value: function() {
                a(".main-loading").show()
            }
        }, {
            key: "stopLoadingRequisites",
            value: function() {
                a(".main-loading").hide()
            }
        }, {
            key: "startLoadingCoupon",
            value: function() {}
        }, {
            key: "stopLoadingCoupon",
            value: function() {}
        }, {
            key: "setCoupon",
            value: function(e) {}
        }, {
            key: "removeCoupon",
            value: function() {}
        }, {
            key: "sortPaymentSystems",
            value: function() {
                a(".calculator__list").sortChildren((function(e, t) {
                    try {
                        var n = a(e).hasClass("disabled"),
                            r = a(t).hasClass("disabled");
                        return "12" !== a(e).data("shortname") || n ? n && !r ? 1 : !n && r ? -1 : 0 : -1
                    } catch (e) {
                        return 0
                    }
                }))
            }
        }, {
            key: "leftPaymentSystem",
            value: function(e) {
                a(".calculator_ps-in .calculator__currency + .dropdown > .dropdown-btn").css("padding-left", "8px"), a(".calculator_ps-out .calculator__currency + .dropdown > .dropdown-btn").css("padding-left", "8px"), a(".calculator_ps-in [data-shortname]").removeClass("active");
                var t = a(".calculator_ps-in [data-shortname=".concat(e.psid, "]"));
                t.addClass("active");
                var n = t.children("img").attr("src");
                a(".calculator_ps-in .form-icon").attr("src", n), a(".calculator_ps-in .calculator__currency").html(e.valute), a(".calculator_ps-in .calculator__ps-name").html(e.name);
                var r = a(".calculator_ps-in .calculator__currency + .dropdown").width(),
                    o = a(".calculator_ps-out .calculator__currency + .dropdown").width();
                r > o && a(".calculator_ps-out .calculator__currency + .dropdown > .dropdown-btn").css("padding-left", String(r - o + 8) + "px"), r < o && a(".calculator_ps-in .calculator__currency + .dropdown > .dropdown-btn").css("padding-left", String(o - r + 8) + "px")
            }
        }, {
            key: "leftDisabledPaymentSystem",
            value: function() {
                var e = this;
                a(".calculator_ps-in [data-shortname]").each((function(t, n) {
                    var r = a(n).data("shortname");
                    e.calculatorController.isDisabled(e.calculatorController.findPaymentSystem("psid", r), !0) ? a(n).addClass("disabled") : a(n).removeClass("disabled")
                }))
            }
        }, {
            key: "leftInput",
            value: function(e) {
                a(".calculator_ps-in .calculator__input").val(e)
            }
        }, {
            key: "leftGroup",
            value: function(e) {
                a(".calculator_ps-in .calculator__group").removeClass("active");
                var t = a(".calculator_ps-in .calculator__group[data-tab=".concat(e, "]"));
                t.addClass("active"), a(".calculator_ps-in .calculator__list").hide(), a('.calculator_ps-in .calculator__list[id="'.concat(t.data("el"), '"]')).show()
            }
        }, {
            key: "rightPaymentSystem",
            value: function(e) {
                a(".calculator_ps-in .calculator__currency + .dropdown > .dropdown-btn").css("padding-left", "8px"), a(".calculator_ps-out .calculator__currency + .dropdown > .dropdown-btn").css("padding-left", "8px"), a(".calculator_ps-out [data-shortname]").removeClass("active");
                var t = a(".calculator_ps-out [data-shortname=".concat(e.psid, "]"));
                t.addClass("active");
                var n = t.children("img").attr("src");
                a(".calculator_ps-out .form-icon").attr("src", n), a(".calculator_ps-out .calculator__currency").html(e.valute), a(".calculator_ps-out .calculator__ps-name").html(e.name);
                var r = a(".calculator_ps-in .calculator__currency + .dropdown").width(),
                    o = a(".calculator_ps-out .calculator__currency + .dropdown").width();
                r > o && a(".calculator_ps-out .calculator__currency + .dropdown > .dropdown-btn").css("padding-left", String(r - o + 8) + "px"), r < o && a(".calculator_ps-in .calculator__currency + .dropdown > .dropdown-btn").css("padding-left", String(o - r + 8) + "px")
            }
        }, {
            key: "rightDisabledPaymentSystem",
            value: function() {
                var e = this;
                a(".calculator_ps-out [data-shortname]").each((function(t, n) {
                    var r = a(n).data("shortname");
                    e.calculatorController.isDisabled(e.calculatorController.findPaymentSystem("psid", r), !1) ? a(n).addClass("disabled") : a(n).removeClass("disabled")
                }))
            }
        }, {
            key: "rightInput",
            value: function(e) {
                a(".calculator_ps-out .calculator__input").val(e)
            }
        }, {
            key: "rightGroup",
            value: function(e) {
                a(".calculator_ps-out .calculator__group").removeClass("active");
                var t = a(".calculator_ps-out .calculator__group[data-tab=".concat(e, "]"));
                t.addClass("active"), a(".calculator_ps-out .calculator__list").hide(), a('.calculator_ps-out .calculator__list[id="'.concat(t.data("el"), '"]')).show()
            }
        }, {
            key: "directionInfo",
            value: function(e) {
                e && (a(".calculator__course").html("".concat(e.in, " ").concat(e.in_valute, " = ").concat(e.out, " ").concat(e.out_valute)), a(".calculator__discount").html("".concat(e.in_max, " ").concat(e.in_valute)), e.out_min > 0 ? a(".calculator__reserve").html("".concat(e.out_min, " ").concat(e.out_valute)) : a(".calculator__reserve").html("".concat(e.in_min, " ").concat(e.in_valute)))
            }
        }, {
            key: "addDirectionInfo",
            value: function(e) {
                e && (a(".calculator__direction-add-info").html("".concat(e.content)), a("title").html("AlfaChange - " + e.title), a('meta[name="description"]').attr("content", e.description), a('meta[name="keywords"]').attr("content", e.keywords))
            }
        }, {
            key: "discountInfo",
            value: function(e) {}
        }, {
            key: "requisites",
            value: function(e) {
                var t = this,
                    n = "";
                e.forEach((function(e) {
                    if (!e.hidden || 0 === e.hidden)
                        if ("input" === e.tag) n += '\n                        <div class="form-group requisite" '.concat(1 === e.readonly ? 'style="display: none;"' : "", ' data-id="').concat(e.data_id, '">\n                            <label class="font-weight-normal" for="').concat(e.data_id, '">').concat(e.label, '</label>\n                            <div class="form-field">\n                                <input type="text" autocomplete="off" id="').concat(e.data_id, '" data-id="').concat(e.data_id, '" value="').concat(e.value ? e.value : "", '" placeholder="').concat(e.placeholder, '" name="').concat(e.name, '" class="form-control">\n                            </div>\n                        </div>\n                    ');
                        else if ("select" === e.tag) {
                        var t = "";
                        Object.keys(e.options).forEach((function(n) {
                            t += '<option value="'.concat(e.options[n], '" ').concat(e.value === e.options[n] ? 'selected="selected"' : "", ">").concat(n, "</option>")
                        }), ""), n += '\n                        <div class="form-group requisite" data-id="'.concat(e.data_id, '">\n                            <label class="font-weight-normal" for="').concat(e.data_id, '">').concat(e.label, '</label>\n                            <div class="form-field">\n                                <select id="').concat(e.data_id, '" data-id="').concat(e.data_id, '" name="').concat(e.name, '" class="form-control">\n                                    ').concat(t, "\n                                </select>\n                            </div>\n                        </div>\n                    ")
                    }
                })), a(".calculator_requisites").html(n), a(".calculator_requisites .requisite input").on("keyup keypress blur change", (function(e) {
                    var n = a(e.currentTarget).data("id"),
                        r = t.calculatorController.findRequisite(n);
                    r && (r.value = a(e.currentTarget).val())
                })), a(".calculator_requisites .requisite input").on("blur", (function(e) {
                    t.calculatorController.saveRequisites()
                })), document.querySelectorAll(".calculator_requisites .requisite select").forEach((function(e) {
                    NiceSelect.bind(e, {
                        searchable: !0
                    })
                })), a(".calculator_requisites .requisite select").on("change", (function(e) {
                    var n = a(e.currentTarget).data("id"),
                        r = t.calculatorController.findRequisite(n);
                    r && (r.value = a(e.currentTarget).val()), t.calculatorController.saveRequisites()
                })), a(document).width() >= 992 ? (a(".reserves_wrap").css("max-height", a(".calculator_wrap").height() + "px"), a(".reserves_wrap").css("height", a(".calculator_wrap").height() + "px")) : (a(".reserves_wrap").css("height", "690px"), a(".home-banner__reserv-list").css("height", "600px").css("overflow-y", "auto"))
            }
        }, {
            key: "wrongRequisite",
            value: function(e) {
                a('.requisite[data-id="'.concat(e, '"]')).addClass("wrong")
            }
        }, {
            key: "resetWrongRequisites",
            value: function() {
                a(".requisite").removeClass("wrong")
            }
        }, {
            key: "disabledDirection",
            value: function() {}
        }, {
            key: "isAcceptRules",
            value: function() {
                return a("#acceptRules").is(":checked")
            }
        }, {
            key: "isUseBonus",
            value: function() {
                return !!a("#useBonus").length && a("#useBonus").is(":checked")
            }
        }, {
            key: "afterCreate",
            value: function(e) {
                window.location.href = linkPrefix + "/order/".concat(e)
            }
        }]), e
    }();
    e.exports = u
}, function(e, t, n) {
    var r = n(0),
        o = n(1),
        i = n(3),
        a = n(6),
        s = (n(2), function() {
            "use strict";

            function e() {
                r(this, e), i(this, "inviter", null)
            }
            return o(e, [{
                key: "logout",
                value: function() {
                    (new a).post("logout").then((function() {
                        location.reload()
                    })).catch((function(e) {
                        console.log(e)
                    }))
                }
            }, {
                key: "login",
                value: function(e, t, n) {
                    return (new a).postModel("login", {
                        email: e,
                        password: t
                    }, null, null, {
                        "h-captcha-response": n
                    })
                }
            }, {
                key: "register",
                value: function(e, t, n) {
                    var r = {
                        email: e,
                        password: t
                    };
                    return this.inviter && (r.inviter = this.inviter), (new a).postModel("reg", r, null, null, {
                        "h-captcha-response": n
                    })
                }
            }, {
                key: "changePassword",
                value: function(e, t) {
                    return (new a).postModel("change-pass", {
                        old_password: e,
                        new_password: t
                    }, null, null, null)
                }
            }, {
                key: "requestRecoverCode",
                value: function(e) {
                    return (new a).postModel("recovery-code", {
                        email: e
                    }, null, null, null)
                }
            }, {
                key: "recoverPassword",
                value: function(e, t, n) {
                    return (new a).postModel("recovery", {
                        email: e,
                        code: t,
                        password: n
                    }, null, null, null)
                }
            }]), e
        }());
    e.exports = s
}, function(e, t, n) {
    var r = n(0),
        o = n(1),
        i = n(3),
        a = n(7),
        s = n(2),
        u = function() {
            "use strict";

            function e(t, n) {
                r(this, e), i(this, "authModel", void 0), i(this, "authView", void 0), this.authModel = t, this.authView = n;
                var o = (new a).getParam("ref") || localStorage.getItem("ref");
                o && (localStorage.setItem("ref", o), this.authModel.inviter = o)
            }
            return o(e, [{
                key: "logout",
                value: function() {
                    this.authModel.logout()
                }
            }, {
                key: "login",
                value: function(e, t, n) {
                    var r = this;
                    this.authView.login.startLoading(), this.authView.login.removeError(), this.authModel.login(e, t, n).then((function(e) {
                        r.authView.login.stopLoading(), r.authView.login.after()
                    })).catch((function(e) {
                        r.authView.login.showError(e), r.authView.login.resetCaptcha(), r.authView.login.stopLoading()
                    }))
                }
            }, {
                key: "register",
                value: function(e, t, n, r) {
                    var o = this,
                        i = !(arguments.length > 4 && void 0 !== arguments[4]) || arguments[4],
                        a = arguments.length > 5 && void 0 !== arguments[5] && arguments[5];
                    t === n ? i ? (this.authView.register.startLoading(), this.authView.register.removeError(), this.authModel.register(e, t, r).then((function(e) {
                        o.authView.register.stopLoading(), localStorage.setItem("subscribed", a ? "true" : "false"), o.authView.register.after()
                    })).catch((function(e) {
                        o.authView.register.showError(e), o.authView.register.resetCaptcha(), o.authView.register.stopLoading()
                    }))) : this.authView.register.showError(s.translate("Подтвердите ваше согласие с правилами!")) : this.authView.register.showError(s.translate("Пароли не совпадают!"))
                }
            }, {
                key: "changePassword",
                value: function(e, t, n) {
                    var r = this;
                    "" !== e && "" !== t && "" !== n ? t === n ? (this.authView.changePassword.startLoading(), this.authView.changePassword.removeError(), this.authModel.changePassword(e, t).then((function(e) {
                        r.authView.changePassword.stopLoading(), r.authView.changePassword.after()
                    })).catch((function(e) {
                        r.authView.changePassword.showError(e), r.authView.changePassword.stopLoading()
                    }))) : this.authView.changePassword.showError(s.translate("Пароли не совпадают!")) : this.authView.changePassword.showError(s.translate("Заполните все поля"))
                }
            }, {
                key: "requestRecoverCode",
                value: function(e) {
                    var t = this;
                    this.authView.recovery.startLoading(), this.authModel.requestRecoverCode(e).then((function(e) {
                        t.authView.recovery.stopLoading(), t.authView.recovery.afterRequest()
                    })).catch((function(e) {
                        t.authView.recovery.showError(e), t.authView.recovery.stopLoading()
                    }))
                }
            }, {
                key: "recoverPassword",
                value: function(e, t, n) {
                    var r = this;
                    this.authView.recovery.startLoading(), this.authModel.recoverPassword(e, t, n).then((function(e) {
                        r.authView.recovery.stopLoading(), r.authView.recovery.after()
                    })).catch((function(e) {
                        r.authView.recovery.showError(e), r.authView.recovery.stopLoading()
                    }))
                }
            }]), e
        }();
    e.exports = u
}, function(e, t, n) {
    var r = n(0),
        o = n(1),
        i = n(3),
        a = n(5),
        s = n(2),
        u = n(8),
        c = function() {
            "use strict";

            function e() {
                var t = this;
                r(this, e), i(this, "authController", void 0), a("#loginButton").click((function() {
                    var e = a("#loginEmail").val(),
                        n = a("#loginPassword").val(),
                        r = a("#loginCaptcha > iframe").attr("data-hcaptcha-response");
                    t.authController.login(e, n, r)
                }))
            }
            return o(e, [{
                key: "startLoading",
                value: function() {
                    a(".main-loading").show()
                }
            }, {
                key: "stopLoading",
                value: function() {
                    a(".main-loading").hide()
                }
            }, {
                key: "resetCaptcha",
                value: function() {
                    "undefined" != typeof hcaptcha && hcaptcha.reset(a("#loginCaptcha > iframe").attr("data-hcaptcha-widget-id"))
                }
            }, {
                key: "showError",
                value: function(e) {
                    a("#loginError").show().text(e)
                }
            }, {
                key: "removeError",
                value: function() {
                    a("#loginError").hide().text("")
                }
            }, {
                key: "after",
                value: function() {
                    window.location.href = linkPrefix + "/profile"
                }
            }]), e
        }(),
        l = function() {
            "use strict";

            function e() {
                var t = this;
                r(this, e), i(this, "authController", void 0), a("#registerButton").click((function() {
                    var e = a("#registerEmail").val(),
                        n = a("#registerPassword").val(),
                        r = a("#registerRepassword").val(),
                        o = a("#registerRules").is(":checked"),
                        i = a("#registerCaptcha > iframe").attr("data-hcaptcha-response");
                    u.sendEvent(4), t.authController.register(e, n, r, i, o)
                }))
            }
            return o(e, [{
                key: "startLoading",
                value: function() {
                    a(".main-loading").show()
                }
            }, {
                key: "stopLoading",
                value: function() {
                    a(".main-loading").hide()
                }
            }, {
                key: "resetCaptcha",
                value: function() {
                    "undefined" != typeof hcaptcha && hcaptcha.reset(a("#registerCaptcha > iframe").attr("data-hcaptcha-widget-id"))
                }
            }, {
                key: "showError",
                value: function(e) {
                    a("#registerError").show().text(e)
                }
            }, {
                key: "removeError",
                value: function() {
                    a("#registerError").hide().text("")
                }
            }, {
                key: "after",
                value: function() {
                    window.location.href = linkPrefix + "/profile"
                }
            }]), e
        }(),
        d = function() {
            "use strict";

            function e() {
                var t = this;
                r(this, e), i(this, "authController", void 0), a("#changePassSend").click((function() {
                    var e = a("#changePassOld").val(),
                        n = a("#changePassNew").val(),
                        r = a("#changePassNewRepeat").val();
                    t.authController.changePassword(e, n, r)
                }))
            }
            return o(e, [{
                key: "startLoading",
                value: function() {
                    a(".main-loading").show()
                }
            }, {
                key: "stopLoading",
                value: function() {
                    a(".main-loading").hide()
                }
            }, {
                key: "showError",
                value: function(e) {
                    a("#changePassError").show().text(e)
                }
            }, {
                key: "removeError",
                value: function() {
                    a("#changePassError").hide().text("")
                }
            }, {
                key: "after",
                value: function() {
                    openModal(s.translate("Пароль успешно изменён"))
                }
            }]), e
        }(),
        f = function() {
            "use strict";

            function e() {
                var t = this;
                r(this, e), i(this, "authController", void 0), a("#recoveryButton").click((function() {
                    var e = a("#recoveryEmail").val();
                    t.authController.requestRecoverCode(e)
                })), a("#recoveryChangeButton").click((function() {
                    var e = a("#recoveryEmail").val(),
                        n = a("#recoveryPassword").val(),
                        r = a("#recoveryCode").val();
                    t.authController.recoverPassword(e, r, n)
                }))
            }
            return o(e, [{
                key: "startLoading",
                value: function() {
                    a(".main-loading").show()
                }
            }, {
                key: "stopLoading",
                value: function() {
                    a(".main-loading").hide()
                }
            }, {
                key: "showError",
                value: function(e) {
                    openModal(e)
                }
            }, {
                key: "afterRequest",
                value: function() {
                    window.location.href = linkPrefix + "/lostpass?email=" + a("#recoveryEmail").val()
                }
            }, {
                key: "after",
                value: function() {
                    setTimeout((function() {
                        window.location.href = linkPrefix + "/"
                    }), 5e3)
                }
            }]), e
        }();
    e.exports = function e() {
        "use strict";
        var t = this;
        r(this, e), i(this, "authController", void 0), i(this, "login", void 0), i(this, "register", void 0), i(this, "changePassword", void 0), i(this, "recovery", void 0), this.login = new c, this.register = new l, this.changePassword = new d, this.recovery = new f, a(".logout").click((function() {
            t.authController.logout()
        }))
    }
}, function(e, t, n) {
    var r = n(0),
        o = n(1),
        i = n(6),
        a = n(2),
        s = function() {
            "use strict";

            function e() {
                r(this, e)
            }
            return o(e, [{
                key: "confirm",
                value: function(e) {
                    return (new i).getModel("finish", {
                        order_id: e
                    })
                }
            }, {
                key: "cancel",
                value: function(e) {
                    return (new i).getModel("cancel", {
                        order_id: e
                    })
                }
            }, {
                key: "uploadCard",
                value: function(e, t) {
                    return new Promise((function(n, r) {
                        (new i).post("upload-card", t, {
                            order_id: e
                        }, "multipart/form-data").then((function(e) {
                            var t = e.data;
                            "success" === t.status ? n(t.value) : "error" === t.status && r(t.msg)
                        })).catch((function(e) {
                            r(a.translate("Выполнение запроса...\nЗагрузите файл формата png/jpg/jpeg и размером не более 8 Мб"))
                        }))
                    }))
                }
            }, {
                key: "sendOrderReview",
                value: function(e, t, n, r, o) {
                    return new Promise((function(s, u) {
                        (new i).post("review", {
                            order_id: e,
                            text: t,
                            quality: n,
                            speed: r,
                            usability: o
                        }).then((function(e) {
                            var t = e.data;
                            "success" === t.status ? s(t.value) : "error" === t.status && u(t.msg)
                        })).catch((function(e) {
                            u(a.translate("Выполнение запроса..."))
                        }))
                    }))
                }
            }]), e
        }();
    e.exports = s
}, function(e, t, n) {
    var r = n(0),
        o = n(1),
        i = n(3),
        a = n(2),
        s = function() {
            "use strict";

            function e(t, n) {
                r(this, e), i(this, "orderModel", void 0), i(this, "orderView", void 0), this.orderModel = t, this.orderView = n
            }
            return o(e, [{
                key: "confirm",
                value: function(e) {
                    var t = this;
                    this.orderView.startLoading(), this.orderModel.confirm(e).then((function(e) {
                        t.orderView.stopLoading(), t.orderView.after()
                    })).catch((function(e) {
                        t.orderView.showError(e), t.orderView.stopLoading()
                    }))
                }
            }, {
                key: "cancel",
                value: function(e) {
                    var t = this;
                    this.orderView.startLoading(), this.orderModel.cancel(e).then((function(e) {
                        t.orderView.stopLoading(), t.orderView.after()
                    })).catch((function(e) {
                        t.orderView.showError(e), t.orderView.stopLoading()
                    }))
                }
            }, {
                key: "uploadCard",
                value: function(e, t, n) {
                    var r = this;
                    if (n) {
                        this.orderView.startLoading();
                        var o = new FormData;
                        o.append(t, n, t), this.orderModel.uploadCard(e, o).then((function(e) {
                            r.orderView.stopLoading(), r.orderView.after()
                        })).catch((function(e) {
                            r.orderView.showError(e), r.orderView.stopLoading()
                        }))
                    } else this.orderView.showError(a.translate("Загрузите фото"))
                }
            }, {
                key: "sendOrderReview",
                value: function(e, t, n, r, o) {
                    var i = this;
                    this.orderView.startLoading(), this.orderModel.sendOrderReview(e, t, n, r, o).then((function(e) {
                        i.orderView.stopLoading(), i.orderView.showError(e)
                    })).catch((function(e) {
                        i.orderView.showError(e), i.orderView.stopLoading()
                    }))
                }
            }]), e
        }();
    e.exports = s
}, function(e, t, n) {
    var r = n(0),
        o = n(1),
        i = n(3),
        a = n(5),
        s = (n(2), n(8)),
        u = function() {
            "use strict";

            function e() {
                var t = this;
                r(this, e), i(this, "orderController", void 0), a(".confirm-order").click((function(e) {
                    s.sendEvent(2), t.orderController.confirm(a(e.currentTarget).data("order"))
                })), a(".cancel-order").click((function(e) {
                    t.orderController.cancel(a(e.currentTarget).data("order"))
                })), a(".card-upload-btn").click((function() {
                    a("#card-upload").click()
                })), a(".verification-order-document").change((function(e) {
                    t.orderController.uploadCard(a(e.currentTarget).data("order-id"), a(e.currentTarget).attr("name"), e.currentTarget.files[0])
                })), a("#orderReviewSend").click((function(e) {
                    var n = a(e.currentTarget).data("order"),
                        r = a("#orderReviewMsg").val(),
                        o = a('input[name="qualityRating"]:checked').val(),
                        i = a('input[name="usabilityRating"]:checked').val(),
                        s = a('input[name="speedRating"]:checked').val();
                    t.orderController.sendOrderReview(n, r, o, s, i)
                }))
            }
            return o(e, [{
                key: "startLoading",
                value: function() {
                    a(".main-loading").show()
                }
            }, {
                key: "stopLoading",
                value: function() {
                    a(".main-loading").hide()
                }
            }, {
                key: "showError",
                value: function(e) {
                    openModal(e)
                }
            }, {
                key: "after",
                value: function() {
                    window.location.reload(!0)
                }
            }]), e
        }();
    e.exports = u
}, function(e, t, n) {
    var r = n(0),
        o = n(1),
        i = n(3),
        a = n(6),
        s = n(2),
        u = function() {
            "use strict";

            function e() {
                r(this, e), i(this, "referalLink", null), i(this, "acceptRules", "true" === localStorage.getItem("acceptRules") || "false" !== localStorage.getItem("acceptRules") && null), i(this, "subscribed", "true" === localStorage.getItem("subscribed") || "false" !== localStorage.getItem("subscribed") && null), i(this, "info", void 0), i(this, "paymentSystem", void 0), i(this, "requisites", void 0);
                try {
                    this.info = infoRef
                } catch (e) {}
            }
            return o(e, [{
                key: "newTransition",
                value: function(e) {
                    return (new a).getModel("transition", {
                        inviter: e
                    })
                }
            }, {
                key: "findPaymentSystem",
                value: function(e, t) {
                    return this.info.find((function(n) {
                        return n.ps[e] === t
                    })).ps
                }
            }, {
                key: "isDisabled",
                value: function(e) {
                    return "disabled" === this.info.find((function(t) {
                        return e.psid === t.ps.psid
                    })).disabled
                }
            }, {
                key: "choosePaymentSystem",
                value: function(e) {
                    return this.paymentSystem = e, this.isDisabled(e) && (this.requisites = void 0), this.getRequisites()
                }
            }, {
                key: "getRequisites",
                value: function() {
                    var e = this;
                    return new Promise((function(t, n) {
                        var r = e.info.find((function(t) {
                            return e.paymentSystem.psid === t.ps.psid
                        }));
                        r && (e.requisites = r.fields, e.requisites = e.requisites.map((function(e) {
                            var t = localStorage.getItem(String(e.id));
                            return t && (e.value = t), e
                        })), t(r.fields))
                    }))
                }
            }, {
                key: "getPin",
                value: function() {
                    var e = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0],
                        t = arguments.length > 1 ? arguments[1] : void 0;
                    return e ? (new a).getModel("withdraw-pin") : (new a).getModel("send-code", {
                        action_id: t || "refout",
                        provider: "email"
                    })
                }
            }, {
                key: "withdraw",
                value: function(e) {
                    var t = [];
                    this.requisites.forEach((function(e) {
                        t.push({
                            name: e.name,
                            value: e.value
                        })
                    })), t.push({
                        name: "refout_email",
                        value: e
                    });
                    var n = {
                        Refout: {
                            psid: this.paymentSystem.psid,
                            props: t,
                            url: "profile/withdraw/",
                            pin: e
                        }
                    };
                    return new Promise((function(e, t) {
                        (new a).post("withdraw", n, {}).then((function(n) {
                            var r = n.data;
                            "success" === r.status ? e(r.value) : "error" === r.status && t(r.msg)
                        })).catch((function(e) {
                            t(s.translate("Выполнение запроса..."))
                        }))
                    }))
                }
            }, {
                key: "uploadDocument",
                value: function(e, t) {
                    return new Promise((function(n, r) {
                        (new a).post("upload-card", t, {
                            blank_id: e
                        }, "multipart/form-data").then((function(e) {
                            var t = e.data;
                            "success" === t.status ? n(t.value) : "error" === t.status && r(t.msg)
                        })).catch((function(e) {
                            console.log(e), r(s.translate("Выполнение запроса...\nЗагрузите файл формата png/jpg/jpeg и размером не более 8 Мб"))
                        }))
                    }))
                }
            }]), e
        }();
    e.exports = u
}, function(e, t, n) {
    var r = n(0),
        o = n(1),
        i = n(3),
        a = n(7),
        s = n(5),
        u = n(2),
        c = function() {
            "use strict";

            function e(t, n) {
                r(this, e), i(this, "userModel", void 0), i(this, "userView", void 0), this.userModel = t, this.userView = n;
                var o = window.location;
                this.userModel.referalLink = o.protocol + "//" + o.host + "/?ref=" + s("#ref").data("id"), this.userView.setRefLink(this.userModel.referalLink);
                var u = (new a).getParam("ref") || localStorage.getItem("ref");
                u && (localStorage.setItem("ref", u), this.userModel.newTransition(u)), null == this.userModel.acceptRules && (localStorage.setItem("acceptRules", "true"), this.userModel.acceptRules = !0), null == this.userModel.subscribed && (localStorage.setItem("subscribed", "false"), this.userModel.subscribed = !1), this.userView.setAcceptRules(this.userModel.acceptRules), this.userView.setSubscribed(this.userModel.subscribed)
            }
            return o(e, [{
                key: "changeAcceptRules",
                value: function(e) {
                    localStorage.setItem("acceptRules", !!e), this.userModel.acceptRules = !!e
                }
            }, {
                key: "changeSubscribed",
                value: function(e) {
                    localStorage.setItem("subscribed", !!e), this.userModel.subscribed = !!e
                }
            }, {
                key: "findRequisite",
                value: function(e) {
                    return this.userModel.requisites.find((function(t) {
                        return t.id == e
                    }))
                }
            }, {
                key: "choosePaymentSystem",
                value: function(e) {
                    var t = this,
                        n = this.userModel.findPaymentSystem("psid", e);
                    if (n) return this.userModel.isDisabled(n) ? (this.userView.showError(u.translate("Вы не можете вывести средства на эту платёжную систему. Измените платёжную систему на доступную.")), void this.userView.requisites([])) : this.userModel.choosePaymentSystem(n).then((function(e) {
                        t.userView.paymentSystemActive(n), t.userView.requisites(e)
                    })).catch((function(e) {
                        t.userView.showError(e)
                    }))
                }
            }, {
                key: "getPin",
                value: function() {
                    var e = this,
                        t = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0],
                        n = arguments.length > 1 ? arguments[1] : void 0;
                    this.userView.startLoading(), this.userModel.getPin(t, n).then((function(t) {
                        e.userView.showError(u.translate("Код подтверждения выслан на почту")), e.userView.stopLoading()
                    })).catch((function(t) {
                        e.userView.showError(t), e.userView.stopLoading()
                    }))
                }
            }, {
                key: "withdraw",
                value: function(e) {
                    var t = this;
                    this.userModel.paymentSystem ? e ? (this.userModel.requisites.forEach((function(e) {
                        e.value && localStorage.setItem(String(e.id), e.value)
                    })), this.userView.startLoading(), this.userModel.withdraw(e).then((function(e) {
                        t.userView.stopLoading(), t.userView.after(e)
                    })).catch((function(e) {
                        t.userView.showError(e), t.userView.stopLoading()
                    }))) : this.userView.showError(u.translate("Получите и введите код подтверждения")) : this.userView.showError(u.translate("Выберите платёжную систему"))
                }
            }, {
                key: "uploadDocument",
                value: function(e, t, n) {
                    var r = this;
                    if (n) {
                        this.userView.startLoading();
                        var o = new FormData;
                        o.append(t, n, t), this.userModel.uploadDocument(e, o).then((function(e) {
                            r.userView.stopLoading(), r.userView.afterDocument()
                        })).catch((function(e) {
                            r.userView.showError(e), r.userView.stopLoading()
                        }))
                    } else this.userView.showError(u.translate("Загрузите фото"))
                }
            }]), e
        }();
    e.exports = c
}, function(e, t, n) {
    var r = n(0),
        o = n(1),
        i = n(5),
        a = n(2);
    n(64);
    i.fn.sortChildren = function(e) {
        return this.each((function() {
            var t = i(this).children().get();
            t.sort(e), i(this).append(t)
        }))
    };
    var s = function() {
        "use strict";

        function e() {
            var t = this;
            r(this, e), i("#alwaysAcceptRules").change((function(e) {
                t.userController.changeAcceptRules(i(e.currentTarget).is(":checked"))
            })), i("#subscribed").change((function(e) {
                t.userController.changeSubscribed(i(e.currentTarget).is(":checked"))
            })), this.sortPaymentSystems(), setTimeout((function() {
                t.userController.choosePaymentSystem(parseInt(i(".calculator__list .dropdown-menu__item:first-child").data("shortname")))
            }), 1), i(".calculator__list .dropdown-menu__item").click((function(e) {
                t.userController.choosePaymentSystem(parseInt(i(e.currentTarget).data("shortname")))
            })), i("#withdrawPinGet, .securityCodeGet").click((function(e) {
                var n = i(e.currentTarget).data("action");
                t.userController.getPin(!1, n)
            })), i("#withdraw__create").click((function() {
                t.userController.withdraw(i("#withdrawPin").val())
            })), i(".calculator__search").on("keyup", (function(e) {
                i(e.currentTarget).parent().parent().find(".calculator__list").find(".dropdown-menu__item").each((function(t, n) {
                    var r = i(n).text().trim(),
                        o = i(e.currentTarget).val(); - 1 !== r.toLowerCase().indexOf(o.toLowerCase()) ? i(n).show() : i(n).hide()
                }))
            })), i(".verification-lk-document").change((function(e) {
                t.userController.uploadDocument(i(e.currentTarget).data("blank-id"), i(e.currentTarget).attr("name"), e.currentTarget.files[0])
            }))
        }
        return o(e, [{
            key: "setRefLink",
            value: function(e) {
                i("#ref").val(e), i("#ref").attr("data-copy", e), i("#ref-copy").attr("data-copy", e)
            }
        }, {
            key: "setAcceptRules",
            value: function(e) {
                i("#alwaysAcceptRules").prop("checked", e), i("#acceptRules").prop("checked", e)
            }
        }, {
            key: "setSubscribed",
            value: function(e) {
                i("#subscribed").prop("checked", e)
            }
        }, {
            key: "showError",
            value: function(e) {
                openModal(e)
            }
        }, {
            key: "startLoading",
            value: function() {
                i(".main-loading").show()
            }
        }, {
            key: "stopLoading",
            value: function() {
                i(".main-loading").hide()
            }
        }, {
            key: "sortPaymentSystems",
            value: function() {
                i(".calculator__list").sortChildren((function(e, t) {
                    try {
                        var n = i(e).hasClass("disabled"),
                            r = i(t).hasClass("disabled");
                        return "12" !== i(e).data("shortname") || n ? n && !r ? 1 : !n && r ? -1 : 0 : -1
                    } catch (e) {
                        return 0
                    }
                }))
            }
        }, {
            key: "paymentSystemActive",
            value: function(e) {
                i(".calculator__list .dropdown-menu__item").removeClass("active"), i(".calculator__list .dropdown-menu__item[data-shortname=".concat(e.psid, "]")).addClass("active");
                var t = i(".calculator__list .dropdown-menu__item[data-shortname=".concat(e.psid, "]")).children("img").attr("src");
                i(".dropdown-btn .form-icon").attr("src", t), i(".form-currency").html(e.valute)
            }
        }, {
            key: "requisites",
            value: function(e) {
                var t = this,
                    n = "";
                e.forEach((function(e) {
                    e.hidden && 0 !== e.hidden || (n += '\n            <div class="form-group requisite">\n                                <label class="font-weight-normal" for="'.concat(e.id, '">').concat(e.label, '</label>\n                                <div class="form-field">\n                                    <input type="text" id="').concat(e.id, '" data-id="').concat(e.id, '" value="').concat(e.value ? e.value : "", '" placeholder="').concat(e.placeholder, '" name="').concat(e.name, '" ').concat(1 === e.readonly ? "disabled" : "", ' class="form-control">\n                                </div>\n                            </div>\n            '))
                })), i(".withdraw_requisites").html(n), i(".withdraw_requisites input").on("keyup", (function(e) {
                    var n = i(e.currentTarget).data("id"),
                        r = t.userController.findRequisite(n);
                    r && (r.value = i(e.currentTarget).val())
                }))
            }
        }, {
            key: "after",
            value: function(e) {
                openModal("".concat(a.translate("Заявка на вывод"), " ").concat(e.Refout ? e.Refout.id : "", " ").concat(a.translate("создана"), ". ").concat(a.translate("Вы можете отслеживать её статус в личном кабинете.")))
            }
        }, {
            key: "afterDocument",
            value: function() {
                window.location.reload()
            }
        }]), e
    }();
    e.exports = s
}, function(e, t) {
    e.exports = function(e) {
        return new Promise((function(t) {
            if (document.querySelector(e)) return t(document.querySelector(e));
            var n = new MutationObserver((function(r) {
                document.querySelector(e) && (t(document.querySelector(e)), n.disconnect())
            }));
            n.observe(document.body, {
                childList: !0,
                subtree: !0
            })
        }))
    }
}]);