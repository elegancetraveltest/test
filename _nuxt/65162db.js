/*! For license information please see LICENSES */
(window.webpackJsonp = window.webpackJsonp || []).push([
    [27], {
        1: function(t, e, n) {
            "use strict";
            n.d(e, "k", (function() {
                return x
            })), n.d(e, "m", (function() {
                return w
            })), n.d(e, "l", (function() {
                return _
            })), n.d(e, "e", (function() {
                return O
            })), n.d(e, "b", (function() {
                return j
            })), n.d(e, "s", (function() {
                return C
            })), n.d(e, "g", (function() {
                return $
            })), n.d(e, "h", (function() {
                return k
            })), n.d(e, "d", (function() {
                return S
            })), n.d(e, "r", (function() {
                return E
            })), n.d(e, "j", (function() {
                return P
            })), n.d(e, "t", (function() {
                return R
            })), n.d(e, "o", (function() {
                return D
            })), n.d(e, "q", (function() {
                return N
            })), n.d(e, "f", (function() {
                return L
            })), n.d(e, "c", (function() {
                return M
            })), n.d(e, "i", (function() {
                return I
            })), n.d(e, "p", (function() {
                return B
            })), n.d(e, "a", (function() {
                return J
            })), n.d(e, "v", (function() {
                return X
            })), n.d(e, "n", (function() {
                return Q
            })), n.d(e, "u", (function() {
                return V
            }));
            n(50), n(31), n(52), n(53), n(79), n(39), n(82);
            var r = n(24),
                o = n(13),
                c = n(36),
                f = n(21),
                l = (n(47), n(14), n(44), n(188), n(38), n(106), n(45), n(48), n(26), n(27), n(51), n(25), n(74), n(138), n(145), n(186), n(108), n(136), n(245), n(77), n(78), n(2)),
                d = n(28);

            function h(object, t) {
                var e = Object.keys(object);
                if (Object.getOwnPropertySymbols) {
                    var n = Object.getOwnPropertySymbols(object);
                    t && (n = n.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(object, t).enumerable
                    }))), e.push.apply(e, n)
                }
                return e
            }

            function m(t) {
                for (var i = 1; i < arguments.length; i++) {
                    var source = null != arguments[i] ? arguments[i] : {};
                    i % 2 ? h(Object(source), !0).forEach((function(e) {
                        Object(c.a)(t, e, source[e])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(source)) : h(Object(source)).forEach((function(e) {
                        Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(source, e))
                    }))
                }
                return t
            }

            function v(t, e) {
                var n = "undefined" != typeof Symbol && t[Symbol.iterator] || t["@@iterator"];
                if (!n) {
                    if (Array.isArray(t) || (n = function(t, e) {
                            if (!t) return;
                            if ("string" == typeof t) return y(t, e);
                            var n = Object.prototype.toString.call(t).slice(8, -1);
                            "Object" === n && t.constructor && (n = t.constructor.name);
                            if ("Map" === n || "Set" === n) return Array.from(t);
                            if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return y(t, e)
                        }(t)) || e && t && "number" == typeof t.length) {
                        n && (t = n);
                        var i = 0,
                            r = function() {};
                        return {
                            s: r,
                            n: function() {
                                return i >= t.length ? {
                                    done: !0
                                } : {
                                    done: !1,
                                    value: t[i++]
                                }
                            },
                            e: function(t) {
                                throw t
                            },
                            f: r
                        }
                    }
                    throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }
                var o, c = !0,
                    f = !1;
                return {
                    s: function() {
                        n = n.call(t)
                    },
                    n: function() {
                        var t = n.next();
                        return c = t.done, t
                    },
                    e: function(t) {
                        f = !0, o = t
                    },
                    f: function() {
                        try {
                            c || null == n.return || n.return()
                        } finally {
                            if (f) throw o
                        }
                    }
                }
            }

            function y(t, e) {
                (null == e || e > t.length) && (e = t.length);
                for (var i = 0, n = new Array(e); i < e; i++) n[i] = t[i];
                return n
            }

            function x(t) {
                l.default.config.errorHandler && l.default.config.errorHandler(t)
            }

            function w(t) {
                return t.then((function(t) {
                    return t.default || t
                }))
            }

            function _(t) {
                return t.$options && "function" == typeof t.$options.fetch && !t.$options.fetch.length
            }

            function O(t) {
                var e, n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [],
                    r = t.$children || [],
                    o = v(r);
                try {
                    for (o.s(); !(e = o.n()).done;) {
                        var c = e.value;
                        c.$fetch ? n.push(c) : c.$children && O(c, n)
                    }
                } catch (t) {
                    o.e(t)
                } finally {
                    o.f()
                }
                return n
            }

            function j(t, e) {
                if (e || !t.options.__hasNuxtData) {
                    var n = t.options._originDataFn || t.options.data || function() {
                        return {}
                    };
                    t.options._originDataFn = n, t.options.data = function() {
                        var data = n.call(this, this);
                        return this.$ssrContext && (e = this.$ssrContext.asyncData[t.cid]), m(m({}, data), e)
                    }, t.options.__hasNuxtData = !0, t._Ctor && t._Ctor.options && (t._Ctor.options.data = t.options.data)
                }
            }

            function C(t) {
                return t.options && t._Ctor === t || (t.options ? (t._Ctor = t, t.extendOptions = t.options) : (t = l.default.extend(t))._Ctor = t, !t.options.name && t.options.__file && (t.options.name = t.options.__file)), t
            }

            function $(t) {
                var e = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                    n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "components";
                return Array.prototype.concat.apply([], t.matched.map((function(t, r) {
                    return Object.keys(t[n]).map((function(o) {
                        return e && e.push(r), t[n][o]
                    }))
                })))
            }

            function k(t) {
                var e = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                return $(t, e, "instances")
            }

            function S(t, e) {
                return Array.prototype.concat.apply([], t.matched.map((function(t, n) {
                    return Object.keys(t.components).reduce((function(r, o) {
                        return t.components[o] ? r.push(e(t.components[o], t.instances[o], t, o, n)) : delete t.components[o], r
                    }), [])
                })))
            }

            function E(t, e) {
                return Promise.all(S(t, function() {
                    var t = Object(o.a)(regeneratorRuntime.mark((function t(n, r, o, c) {
                        var f, l;
                        return regeneratorRuntime.wrap((function(t) {
                            for (;;) switch (t.prev = t.next) {
                                case 0:
                                    if ("function" != typeof n || n.options) {
                                        t.next = 11;
                                        break
                                    }
                                    return t.prev = 1, t.next = 4, n();
                                case 4:
                                    n = t.sent, t.next = 11;
                                    break;
                                case 7:
                                    throw t.prev = 7, t.t0 = t.catch(1), t.t0 && "ChunkLoadError" === t.t0.name && "undefined" != typeof window && window.sessionStorage && (f = Date.now(), (!(l = parseInt(window.sessionStorage.getItem("nuxt-reload"))) || l + 6e4 < f) && (window.sessionStorage.setItem("nuxt-reload", f), window.location.reload(!0))), t.t0;
                                case 11:
                                    return o.components[c] = n = C(n), t.abrupt("return", "function" == typeof e ? e(n, r, o, c) : n);
                                case 13:
                                case "end":
                                    return t.stop()
                            }
                        }), t, null, [
                            [1, 7]
                        ])
                    })));
                    return function(e, n, r, o) {
                        return t.apply(this, arguments)
                    }
                }()))
            }

            function P(t) {
                return A.apply(this, arguments)
            }

            function A() {
                return (A = Object(o.a)(regeneratorRuntime.mark((function t(e) {
                    return regeneratorRuntime.wrap((function(t) {
                        for (;;) switch (t.prev = t.next) {
                            case 0:
                                if (e) {
                                    t.next = 2;
                                    break
                                }
                                return t.abrupt("return");
                            case 2:
                                return t.next = 4, E(e);
                            case 4:
                                return t.abrupt("return", m(m({}, e), {}, {
                                    meta: $(e).map((function(t, n) {
                                        return m(m({}, t.options.meta), (e.matched[n] || {}).meta)
                                    }))
                                }));
                            case 5:
                            case "end":
                                return t.stop()
                        }
                    }), t)
                })))).apply(this, arguments)
            }

            function R(t, e) {
                return T.apply(this, arguments)
            }

            function T() {
                return (T = Object(o.a)(regeneratorRuntime.mark((function t(e, n) {
                    var o, c, l, h;
                    return regeneratorRuntime.wrap((function(t) {
                        for (;;) switch (t.prev = t.next) {
                            case 0:
                                return e.context || (e.context = {
                                    isStatic: !0,
                                    isDev: !1,
                                    isHMR: !1,
                                    app: e,
                                    store: e.store,
                                    payload: n.payload,
                                    error: n.error,
                                    base: e.router.options.base,
                                    env: {}
                                }, n.req && (e.context.req = n.req), n.res && (e.context.res = n.res), n.ssrContext && (e.context.ssrContext = n.ssrContext), e.context.redirect = function(t, path, n) {
                                    if (t) {
                                        e.context._redirected = !0;
                                        var o = Object(r.a)(path);
                                        if ("number" == typeof t || "undefined" !== o && "object" !== o || (n = path || {}, path = t, o = Object(r.a)(path), t = 302), "object" === o && (path = e.router.resolve(path).route.fullPath), !/(^[.]{1,2}\/)|(^\/(?!\/))/.test(path)) throw path = Object(d.d)(path, n), window.location.replace(path), new Error("ERR_REDIRECT");
                                        e.context.next({
                                            path: path,
                                            query: n,
                                            status: t
                                        })
                                    }
                                }, e.context.nuxtState = window.__NUXT__), t.next = 3, Promise.all([P(n.route), P(n.from)]);
                            case 3:
                                o = t.sent, c = Object(f.a)(o, 2), l = c[0], h = c[1], n.route && (e.context.route = l), n.from && (e.context.from = h), e.context.next = n.next, e.context._redirected = !1, e.context._errored = !1, e.context.isHMR = !1, e.context.params = e.context.route.params || {}, e.context.query = e.context.route.query || {};
                            case 15:
                            case "end":
                                return t.stop()
                        }
                    }), t)
                })))).apply(this, arguments)
            }

            function D(t, e) {
                return !t.length || e._redirected || e._errored ? Promise.resolve() : N(t[0], e).then((function() {
                    return D(t.slice(1), e)
                }))
            }

            function N(t, e) {
                var n;
                return (n = 2 === t.length ? new Promise((function(n) {
                    t(e, (function(t, data) {
                        t && e.error(t), n(data = data || {})
                    }))
                })) : t(e)) && n instanceof Promise && "function" == typeof n.then ? n : Promise.resolve(n)
            }

            function L(base, t) {
                if ("hash" === t) return window.location.hash.replace(/^#\//, "");
                base = decodeURI(base).slice(0, -1);
                var path = decodeURI(window.location.pathname);
                base && path.startsWith(base) && (path = path.slice(base.length));
                var e = (path || "/") + window.location.search + window.location.hash;
                return Object(d.c)(e)
            }

            function M(t, e) {
                return function(t, e) {
                    for (var n = new Array(t.length), i = 0; i < t.length; i++) "object" === Object(r.a)(t[i]) && (n[i] = new RegExp("^(?:" + t[i].pattern + ")$", G(e)));
                    return function(e, r) {
                        for (var path = "", data = e || {}, o = (r || {}).pretty ? z : encodeURIComponent, c = 0; c < t.length; c++) {
                            var f = t[c];
                            if ("string" != typeof f) {
                                var l = data[f.name || "pathMatch"],
                                    d = void 0;
                                if (null == l) {
                                    if (f.optional) {
                                        f.partial && (path += f.prefix);
                                        continue
                                    }
                                    throw new TypeError('Expected "' + f.name + '" to be defined')
                                }
                                if (Array.isArray(l)) {
                                    if (!f.repeat) throw new TypeError('Expected "' + f.name + '" to not repeat, but received `' + JSON.stringify(l) + "`");
                                    if (0 === l.length) {
                                        if (f.optional) continue;
                                        throw new TypeError('Expected "' + f.name + '" to not be empty')
                                    }
                                    for (var h = 0; h < l.length; h++) {
                                        if (d = o(l[h]), !n[c].test(d)) throw new TypeError('Expected all "' + f.name + '" to match "' + f.pattern + '", but received `' + JSON.stringify(d) + "`");
                                        path += (0 === h ? f.prefix : f.delimiter) + d
                                    }
                                } else {
                                    if (d = f.asterisk ? F(l) : o(l), !n[c].test(d)) throw new TypeError('Expected "' + f.name + '" to match "' + f.pattern + '", but received "' + d + '"');
                                    path += f.prefix + d
                                }
                            } else path += f
                        }
                        return path
                    }
                }(function(t, e) {
                    var n, r = [],
                        o = 0,
                        c = 0,
                        path = "",
                        f = e && e.delimiter || "/";
                    for (; null != (n = U.exec(t));) {
                        var l = n[0],
                            d = n[1],
                            h = n.index;
                        if (path += t.slice(c, h), c = h + l.length, d) path += d[1];
                        else {
                            var m = t[c],
                                v = n[2],
                                y = n[3],
                                x = n[4],
                                w = n[5],
                                _ = n[6],
                                O = n[7];
                            path && (r.push(path), path = "");
                            var j = null != v && null != m && m !== v,
                                C = "+" === _ || "*" === _,
                                $ = "?" === _ || "*" === _,
                                k = n[2] || f,
                                pattern = x || w;
                            r.push({
                                name: y || o++,
                                prefix: v || "",
                                delimiter: k,
                                optional: $,
                                repeat: C,
                                partial: j,
                                asterisk: Boolean(O),
                                pattern: pattern ? K(pattern) : O ? ".*" : "[^" + H(k) + "]+?"
                            })
                        }
                    }
                    c < t.length && (path += t.substr(c));
                    path && r.push(path);
                    return r
                }(t, e), e)
            }

            function I(t, e) {
                var n = {},
                    r = m(m({}, t), e);
                for (var o in r) String(t[o]) !== String(e[o]) && (n[o] = !0);
                return n
            }

            function B(t) {
                var e;
                if (t.message || "string" == typeof t) e = t.message || t;
                else try {
                    e = JSON.stringify(t, null, 2)
                } catch (n) {
                    e = "[".concat(t.constructor.name, "]")
                }
                return m(m({}, t), {}, {
                    message: e,
                    statusCode: t.statusCode || t.status || t.response && t.response.status || 500
                })
            }
            window.onNuxtReadyCbs = [], window.onNuxtReady = function(t) {
                window.onNuxtReadyCbs.push(t)
            };
            var U = new RegExp(["(\\\\.)", "([\\/.])?(?:(?:\\:(\\w+)(?:\\(((?:\\\\.|[^\\\\()])+)\\))?|\\(((?:\\\\.|[^\\\\()])+)\\))([+*?])?|(\\*))"].join("|"), "g");

            function z(t, e) {
                var n = e ? /[?#]/g : /[/?#]/g;
                return encodeURI(t).replace(n, (function(t) {
                    return "%" + t.charCodeAt(0).toString(16).toUpperCase()
                }))
            }

            function F(t) {
                return z(t, !0)
            }

            function H(t) {
                return t.replace(/([.+*?=^!:${}()[\]|/\\])/g, "\\$1")
            }

            function K(t) {
                return t.replace(/([=!:$/()])/g, "\\$1")
            }

            function G(t) {
                return t && t.sensitive ? "" : "i"
            }

            function J(t, e, n) {
                t.$options[e] || (t.$options[e] = []), t.$options[e].includes(n) || t.$options[e].push(n)
            }
            var X = d.b,
                Q = (d.e, d.a);

            function V(t) {
                try {
                    window.history.scrollRestoration = t
                } catch (t) {}
            }
        },
        103: function(t, e, n) {
            "use strict";
            n(109), n(14), n(39), n(77), n(78), n(45), n(44), n(51), n(38), n(50), n(26), n(25), n(31), n(52), n(53), n(27);
            var r = n(2);

            function o(t, e) {
                var n = "undefined" != typeof Symbol && t[Symbol.iterator] || t["@@iterator"];
                if (!n) {
                    if (Array.isArray(t) || (n = function(t, e) {
                            if (!t) return;
                            if ("string" == typeof t) return c(t, e);
                            var n = Object.prototype.toString.call(t).slice(8, -1);
                            "Object" === n && t.constructor && (n = t.constructor.name);
                            if ("Map" === n || "Set" === n) return Array.from(t);
                            if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return c(t, e)
                        }(t)) || e && t && "number" == typeof t.length) {
                        n && (t = n);
                        var i = 0,
                            r = function() {};
                        return {
                            s: r,
                            n: function() {
                                return i >= t.length ? {
                                    done: !0
                                } : {
                                    done: !1,
                                    value: t[i++]
                                }
                            },
                            e: function(t) {
                                throw t
                            },
                            f: r
                        }
                    }
                    throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }
                var o, f = !0,
                    l = !1;
                return {
                    s: function() {
                        n = n.call(t)
                    },
                    n: function() {
                        var t = n.next();
                        return f = t.done, t
                    },
                    e: function(t) {
                        l = !0, o = t
                    },
                    f: function() {
                        try {
                            f || null == n.return || n.return()
                        } finally {
                            if (l) throw o
                        }
                    }
                }
            }

            function c(t, e) {
                (null == e || e > t.length) && (e = t.length);
                for (var i = 0, n = new Array(e); i < e; i++) n[i] = t[i];
                return n
            }
            var f = window.requestIdleCallback || function(t) {
                    var e = Date.now();
                    return setTimeout((function() {
                        t({
                            didTimeout: !1,
                            timeRemaining: function() {
                                return Math.max(0, 50 - (Date.now() - e))
                            }
                        })
                    }), 1)
                },
                l = window.cancelIdleCallback || function(t) {
                    clearTimeout(t)
                },
                d = window.IntersectionObserver && new window.IntersectionObserver((function(t) {
                    t.forEach((function(t) {
                        var e = t.intersectionRatio,
                            link = t.target;
                        e <= 0 || !link.__prefetch || link.__prefetch()
                    }))
                }));
            e.a = {
                name: "NuxtLink",
                extends: r.default.component("RouterLink"),
                props: {
                    prefetch: {
                        type: Boolean,
                        default: !0
                    },
                    noPrefetch: {
                        type: Boolean,
                        default: !1
                    }
                },
                mounted: function() {
                    this.prefetch && !this.noPrefetch && (this.handleId = f(this.observe, {
                        timeout: 2e3
                    }))
                },
                beforeDestroy: function() {
                    l(this.handleId), this.__observed && (d.unobserve(this.$el), delete this.$el.__prefetch)
                },
                methods: {
                    observe: function() {
                        d && this.shouldPrefetch() && (this.$el.__prefetch = this.prefetchLink.bind(this), d.observe(this.$el), this.__observed = !0)
                    },
                    shouldPrefetch: function() {
                        return this.getPrefetchComponents().length > 0
                    },
                    canPrefetch: function() {
                        var t = navigator.connection;
                        return !(this.$nuxt.isOffline || t && ((t.effectiveType || "").includes("2g") || t.saveData))
                    },
                    getPrefetchComponents: function() {
                        return this.$router.resolve(this.to, this.$route, this.append).resolved.matched.map((function(t) {
                            return t.components.default
                        })).filter((function(t) {
                            return "function" == typeof t && !t.options && !t.__prefetched
                        }))
                    },
                    prefetchLink: function() {
                        if (this.canPrefetch()) {
                            d.unobserve(this.$el);
                            var t, e = o(this.getPrefetchComponents());
                            try {
                                for (e.s(); !(t = e.n()).done;) {
                                    var n = t.value,
                                        r = n();
                                    r instanceof Promise && r.catch((function() {})), n.__prefetched = !0
                                }
                            } catch (t) {
                                e.e(t)
                            } finally {
                                e.f()
                            }
                        }
                    }
                }
            }
        },
        104: function(t, e, n) {
            "use strict";
            t.exports = function(t) {
                var e = [];
                return e.toString = function() {
                    return this.map((function(e) {
                        var content = t(e);
                        return e[2] ? "@media ".concat(e[2], " {").concat(content, "}") : content
                    })).join("")
                }, e.i = function(t, n, r) {
                    "string" == typeof t && (t = [
                        [null, t, ""]
                    ]);
                    var o = {};
                    if (r)
                        for (var i = 0; i < this.length; i++) {
                            var c = this[i][0];
                            null != c && (o[c] = !0)
                        }
                    for (var f = 0; f < t.length; f++) {
                        var l = [].concat(t[f]);
                        r && o[l[0]] || (n && (l[2] ? l[2] = "".concat(n, " and ").concat(l[2]) : l[2] = n), e.push(l))
                    }
                }, e
            }
        },
        105: function(t, e, n) {
            "use strict";

            function r(t, e) {
                for (var n = [], r = {}, i = 0; i < e.length; i++) {
                    var o = e[i],
                        c = o[0],
                        f = {
                            id: t + ":" + i,
                            css: o[1],
                            media: o[2],
                            sourceMap: o[3]
                        };
                    r[c] ? r[c].parts.push(f) : n.push(r[c] = {
                        id: c,
                        parts: [f]
                    })
                }
                return n
            }
            n.r(e), n.d(e, "default", (function() {
                return x
            }));
            var o = "undefined" != typeof document;
            if ("undefined" != typeof DEBUG && DEBUG && !o) throw new Error("vue-style-loader cannot be used in a non-browser environment. Use { target: 'node' } in your Webpack config to indicate a server-rendering environment.");
            var c = {},
                head = o && (document.head || document.getElementsByTagName("head")[0]),
                f = null,
                l = 0,
                d = !1,
                h = function() {},
                m = null,
                v = "data-vue-ssr-id",
                y = "undefined" != typeof navigator && /msie [6-9]\b/.test(navigator.userAgent.toLowerCase());

            function x(t, e, n, o) {
                d = n, m = o || {};
                var f = r(t, e);
                return w(f),
                    function(e) {
                        for (var n = [], i = 0; i < f.length; i++) {
                            var o = f[i];
                            (l = c[o.id]).refs--, n.push(l)
                        }
                        e ? w(f = r(t, e)) : f = [];
                        for (i = 0; i < n.length; i++) {
                            var l;
                            if (0 === (l = n[i]).refs) {
                                for (var d = 0; d < l.parts.length; d++) l.parts[d]();
                                delete c[l.id]
                            }
                        }
                    }
            }

            function w(t) {
                for (var i = 0; i < t.length; i++) {
                    var e = t[i],
                        n = c[e.id];
                    if (n) {
                        n.refs++;
                        for (var r = 0; r < n.parts.length; r++) n.parts[r](e.parts[r]);
                        for (; r < e.parts.length; r++) n.parts.push(O(e.parts[r]));
                        n.parts.length > e.parts.length && (n.parts.length = e.parts.length)
                    } else {
                        var o = [];
                        for (r = 0; r < e.parts.length; r++) o.push(O(e.parts[r]));
                        c[e.id] = {
                            id: e.id,
                            refs: 1,
                            parts: o
                        }
                    }
                }
            }

            function _() {
                var t = document.createElement("style");
                return t.type = "text/css", head.appendChild(t), t
            }

            function O(t) {
                var e, n, r = document.querySelector("style[" + v + '~="' + t.id + '"]');
                if (r) {
                    if (d) return h;
                    r.parentNode.removeChild(r)
                }
                if (y) {
                    var o = l++;
                    r = f || (f = _()), e = $.bind(null, r, o, !1), n = $.bind(null, r, o, !0)
                } else r = _(), e = k.bind(null, r), n = function() {
                    r.parentNode.removeChild(r)
                };
                return e(t),
                    function(r) {
                        if (r) {
                            if (r.css === t.css && r.media === t.media && r.sourceMap === t.sourceMap) return;
                            e(t = r)
                        } else n()
                    }
            }
            var j, C = (j = [], function(t, e) {
                return j[t] = e, j.filter(Boolean).join("\n")
            });

            function $(t, e, n, r) {
                var o = n ? "" : r.css;
                if (t.styleSheet) t.styleSheet.cssText = C(e, o);
                else {
                    var c = document.createTextNode(o),
                        f = t.childNodes;
                    f[e] && t.removeChild(f[e]), f.length ? t.insertBefore(c, f[e]) : t.appendChild(c)
                }
            }

            function k(t, e) {
                var n = e.css,
                    r = e.media,
                    o = e.sourceMap;
                if (r && t.setAttribute("media", r), m.ssrId && t.setAttribute(v, e.id), o && (n += "\n/*# sourceURL=" + o.sources[0] + " */", n += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(o)))) + " */"), t.styleSheet) t.styleSheet.cssText = n;
                else {
                    for (; t.firstChild;) t.removeChild(t.firstChild);
                    t.appendChild(document.createTextNode(n))
                }
            }
        },
        131: function(t, e, n) {
            "use strict";
            e.a = {}
        },
        132: function(t, e, n) {
            "use strict";
            var r = {
                name: "ClientOnly",
                functional: !0,
                props: {
                    placeholder: String,
                    placeholderTag: {
                        type: String,
                        default: "div"
                    }
                },
                render: function(t, e) {
                    var n = e.parent,
                        r = e.slots,
                        o = e.props,
                        c = r(),
                        f = c.default;
                    void 0 === f && (f = []);
                    var l = c.placeholder;
                    return n._isMounted ? f : (n.$once("hook:mounted", (function() {
                        n.$forceUpdate()
                    })), o.placeholderTag && (o.placeholder || l) ? t(o.placeholderTag, {
                        class: ["client-only-placeholder"]
                    }, o.placeholder || l) : f.length > 0 ? f.map((function() {
                        return t(!1)
                    })) : t(!1))
                }
            };
            t.exports = r
        },
        134: function(t, e, n) {
            var r = n(191);

            function o() {
                return (o = r(regeneratorRuntime.mark((function t() {
                    var e, r, o;
                    return regeneratorRuntime.wrap((function(t) {
                        for (;;) switch (t.prev = t.next) {
                            case 0:
                                if (!(!1 in navigator)) {
                                    t.next = 2;
                                    break
                                }
                                throw new Error("serviceWorker is not supported in current browser!");
                            case 2:
                                return t.next = 4, n.e(29).then(n.bind(null, 257));
                            case 4:
                                return e = t.sent, r = e.Workbox, o = new r("/sw.js", {
                                    scope: "/"
                                }), t.next = 9, o.register();
                            case 9:
                                return t.abrupt("return", o);
                            case 10:
                            case "end":
                                return t.stop()
                        }
                    }), t)
                })))).apply(this, arguments)
            }
            n(47), n(14), n(26), n(27), window.$workbox = function() {
                return o.apply(this, arguments)
            }().catch((function(t) {}))
        },
        174: function(t, e, n) {
            var content = n(248);
            content.__esModule && (content = content.default), "string" == typeof content && (content = [
                [t.i, content, ""]
            ]), content.locals && (t.exports = content.locals);
            (0, n(105).default)("3c219fab", content, !0, {
                sourceMap: !1
            })
        },
        176: function(t, e, n) {
            "use strict";
            e.a = function(t, e) {
                return e = e || {}, new Promise((function(n, r) {
                    var s = new XMLHttpRequest,
                        o = [],
                        u = [],
                        i = {},
                        a = function() {
                            return {
                                ok: 2 == (s.status / 100 | 0),
                                statusText: s.statusText,
                                status: s.status,
                                url: s.responseURL,
                                text: function() {
                                    return Promise.resolve(s.responseText)
                                },
                                json: function() {
                                    return Promise.resolve(s.responseText).then(JSON.parse)
                                },
                                blob: function() {
                                    return Promise.resolve(new Blob([s.response]))
                                },
                                clone: a,
                                headers: {
                                    keys: function() {
                                        return o
                                    },
                                    entries: function() {
                                        return u
                                    },
                                    get: function(t) {
                                        return i[t.toLowerCase()]
                                    },
                                    has: function(t) {
                                        return t.toLowerCase() in i
                                    }
                                }
                            }
                        };
                    for (var c in s.open(e.method || "get", t, !0), s.onload = function() {
                            s.getAllResponseHeaders().replace(/^(.*?):[^\S\n]*([\s\S]*?)$/gm, (function(t, e, n) {
                                o.push(e = e.toLowerCase()), u.push([e, n]), i[e] = i[e] ? i[e] + "," + n : n
                            })), n(a())
                        }, s.onerror = r, s.withCredentials = "include" == e.credentials, e.headers) s.setRequestHeader(c, e.headers[c]);
                    s.send(e.body || null)
                }))
            }
        },
        178: function(t, e, n) {
            "use strict";
            var r = function(t) {
                return function(t) {
                    return !!t && "object" == typeof t
                }(t) && ! function(t) {
                    var e = Object.prototype.toString.call(t);
                    return "[object RegExp]" === e || "[object Date]" === e || function(t) {
                        return t.$$typeof === o
                    }(t)
                }(t)
            };
            var o = "function" == typeof Symbol && Symbol.for ? Symbol.for("react.element") : 60103;

            function c(t, e) {
                return !1 !== e.clone && e.isMergeableObject(t) ? m((n = t, Array.isArray(n) ? [] : {}), t, e) : t;
                var n
            }

            function f(t, source, e) {
                return t.concat(source).map((function(element) {
                    return c(element, e)
                }))
            }

            function l(t) {
                return Object.keys(t).concat(function(t) {
                    return Object.getOwnPropertySymbols ? Object.getOwnPropertySymbols(t).filter((function(symbol) {
                        return t.propertyIsEnumerable(symbol)
                    })) : []
                }(t))
            }

            function d(object, t) {
                try {
                    return t in object
                } catch (t) {
                    return !1
                }
            }

            function h(t, source, e) {
                var n = {};
                return e.isMergeableObject(t) && l(t).forEach((function(r) {
                    n[r] = c(t[r], e)
                })), l(source).forEach((function(r) {
                    (function(t, e) {
                        return d(t, e) && !(Object.hasOwnProperty.call(t, e) && Object.propertyIsEnumerable.call(t, e))
                    })(t, r) || (d(t, r) && e.isMergeableObject(source[r]) ? n[r] = function(t, e) {
                        if (!e.customMerge) return m;
                        var n = e.customMerge(t);
                        return "function" == typeof n ? n : m
                    }(r, e)(t[r], source[r], e) : n[r] = c(source[r], e))
                })), n
            }

            function m(t, source, e) {
                (e = e || {}).arrayMerge = e.arrayMerge || f, e.isMergeableObject = e.isMergeableObject || r, e.cloneUnlessOtherwiseSpecified = c;
                var n = Array.isArray(source);
                return n === Array.isArray(t) ? n ? e.arrayMerge(t, source, e) : h(t, source, e) : c(source, e)
            }
            m.all = function(t, e) {
                if (!Array.isArray(t)) throw new Error("first argument should be an array");
                return t.reduce((function(t, n) {
                    return m(t, n, e)
                }), {})
            };
            var v = m;
            t.exports = v
        },
        179: function(t) {
            t.exports = JSON.parse('{"title":"Neon vCARD","meta":[{"hid":"charset","charset":"utf-8"},{"hid":"viewport","name":"viewport","content":"width=device-width, initial-scale=1"},{"hid":"mobile-web-app-capable","name":"mobile-web-app-capable","content":"yes"},{"hid":"apple-mobile-web-app-title","name":"apple-mobile-web-app-title","content":"Neon vCARD"},{"hid":"author","name":"author","content":"Neon Design Studio"},{"hid":"theme-color","name":"theme-color","content":"#111827"},{"hid":"og:type","name":"og:type","property":"og:type","content":"website"},{"hid":"og:title","name":"og:title","property":"og:title","content":"Neon vCARD"},{"hid":"og:site_name","name":"og:site_name","property":"og:site_name","content":"Neon vCARD"},{"hid":"og:description","name":"og:description","property":"og:description","content":"Neon vCARD helps you create beautiful, responsive HTML-based digital business cards"}],"link":[{"hid":"shortcut-icon","rel":"shortcut icon","href":"/icon_64.png"},{"hid":"apple-touch-icon","rel":"apple-touch-icon","href":"/maskable_512.png","sizes":"512x512"},{"rel":"manifest","href":"/_nuxt/manifest.7583e8d8.json","hid":"manifest"}],"htmlAttrs":{"lang":"en"}}')
        },
        180: function(t, e, n) {
            "use strict";
            var r = n(13),
                o = (n(47), n(14), n(109), n(2)),
                c = n(1),
                f = window.__NUXT__;

            function l() {
                if (!this._hydrated) return this.$fetch()
            }

            function d() {
                if ((t = this).$vnode && t.$vnode.elm && t.$vnode.elm.dataset && t.$vnode.elm.dataset.fetchKey) {
                    var t;
                    this._hydrated = !0, this._fetchKey = this.$vnode.elm.dataset.fetchKey;
                    var data = f.fetch[this._fetchKey];
                    if (data && data._error) this.$fetchState.error = data._error;
                    else
                        for (var e in data) o.default.set(this.$data, e, data[e])
                }
            }

            function h() {
                var t = this;
                return this._fetchPromise || (this._fetchPromise = m.call(this).then((function() {
                    delete t._fetchPromise
                }))), this._fetchPromise
            }

            function m() {
                return v.apply(this, arguments)
            }

            function v() {
                return (v = Object(r.a)(regeneratorRuntime.mark((function t() {
                    var e, n, r, o = this;
                    return regeneratorRuntime.wrap((function(t) {
                        for (;;) switch (t.prev = t.next) {
                            case 0:
                                return this.$nuxt.nbFetching++, this.$fetchState.pending = !0, this.$fetchState.error = null, this._hydrated = !1, e = null, n = Date.now(), t.prev = 6, t.next = 9, this.$options.fetch.call(this);
                            case 9:
                                t.next = 15;
                                break;
                            case 11:
                                t.prev = 11, t.t0 = t.catch(6), e = Object(c.p)(t.t0);
                            case 15:
                                if (!((r = this._fetchDelay - (Date.now() - n)) > 0)) {
                                    t.next = 19;
                                    break
                                }
                                return t.next = 19, new Promise((function(t) {
                                    return setTimeout(t, r)
                                }));
                            case 19:
                                this.$fetchState.error = e, this.$fetchState.pending = !1, this.$fetchState.timestamp = Date.now(), this.$nextTick((function() {
                                    return o.$nuxt.nbFetching--
                                }));
                            case 23:
                            case "end":
                                return t.stop()
                        }
                    }), t, this, [
                        [6, 11]
                    ])
                })))).apply(this, arguments)
            }
            e.a = {
                beforeCreate: function() {
                    Object(c.l)(this) && (this._fetchDelay = "number" == typeof this.$options.fetchDelay ? this.$options.fetchDelay : 200, o.default.util.defineReactive(this, "$fetchState", {
                        pending: !1,
                        error: null,
                        timestamp: Date.now()
                    }), this.$fetch = h.bind(this), Object(c.a)(this, "created", d), Object(c.a)(this, "beforeMount", l))
                }
            }
        },
        210: function(t, e, n) {
            (function(t) {
                t.installComponents = function(component, t) {
                    var n = "function" == typeof component.exports ? component.exports.extendOptions : component.options;
                    for (var i in "function" == typeof component.exports && (n.components = component.exports.options.components), n.components = n.components || {}, t) n.components[i] = n.components[i] || t[i];
                    n.functional && function(component, t) {
                        if (component.exports[e]) return;
                        component.exports[e] = !0;
                        var n = component.exports.render;
                        component.exports.render = function(e, r) {
                            return n(e, Object.assign({}, r, {
                                _c: function(e, a, b) {
                                    return r._c(t[e] || e, a, b)
                                }
                            }))
                        }
                    }(component, n.components)
                };
                var e = "_functionalComponents"
            }).call(this, n(32))
        },
        211: function(t, e, n) {
            "use strict";
            n.r(e),
                function(t) {
                    n(51), n(50), n(31), n(52), n(53);
                    var e = n(24),
                        r = n(13),
                        o = (n(116), n(224), n(237), n(238), n(47), n(38), n(14), n(39), n(44), n(48), n(77), n(78), n(106), n(45), n(25), n(26), n(27), n(109), n(2)),
                        c = n(176),
                        f = n(131),
                        l = n(1),
                        d = n(29),
                        h = n(180),
                        m = n(103);

                    function v(t, e) {
                        var n = "undefined" != typeof Symbol && t[Symbol.iterator] || t["@@iterator"];
                        if (!n) {
                            if (Array.isArray(t) || (n = function(t, e) {
                                    if (!t) return;
                                    if ("string" == typeof t) return y(t, e);
                                    var n = Object.prototype.toString.call(t).slice(8, -1);
                                    "Object" === n && t.constructor && (n = t.constructor.name);
                                    if ("Map" === n || "Set" === n) return Array.from(t);
                                    if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return y(t, e)
                                }(t)) || e && t && "number" == typeof t.length) {
                                n && (t = n);
                                var i = 0,
                                    r = function() {};
                                return {
                                    s: r,
                                    n: function() {
                                        return i >= t.length ? {
                                            done: !0
                                        } : {
                                            done: !1,
                                            value: t[i++]
                                        }
                                    },
                                    e: function(t) {
                                        throw t
                                    },
                                    f: r
                                }
                            }
                            throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                        }
                        var o, c = !0,
                            f = !1;
                        return {
                            s: function() {
                                n = n.call(t)
                            },
                            n: function() {
                                var t = n.next();
                                return c = t.done, t
                            },
                            e: function(t) {
                                f = !0, o = t
                            },
                            f: function() {
                                try {
                                    c || null == n.return || n.return()
                                } finally {
                                    if (f) throw o
                                }
                            }
                        }
                    }

                    function y(t, e) {
                        (null == e || e > t.length) && (e = t.length);
                        for (var i = 0, n = new Array(e); i < e; i++) n[i] = t[i];
                        return n
                    }
                    o.default.__nuxt__fetch__mixin__ || (o.default.mixin(h.a), o.default.__nuxt__fetch__mixin__ = !0), o.default.component(m.a.name, m.a), o.default.component("NLink", m.a), t.fetch || (t.fetch = c.a);
                    var x, w, _ = [],
                        O = window.__NUXT__ || {},
                        j = O.config || {};
                    j._app && (n.p = Object(l.v)(j._app.cdnURL, j._app.assetsPath)), Object.assign(o.default.config, {
                        silent: !0,
                        performance: !1
                    });
                    var C = o.default.config.errorHandler || console.error;

                    function $(t, e, n) {
                        for (var r = function(component) {
                                var t = function(component, t) {
                                    if (!component || !component.options || !component.options[t]) return {};
                                    var option = component.options[t];
                                    if ("function" == typeof option) {
                                        for (var e = arguments.length, n = new Array(e > 2 ? e - 2 : 0), r = 2; r < e; r++) n[r - 2] = arguments[r];
                                        return option.apply(void 0, n)
                                    }
                                    return option
                                }(component, "transition", e, n) || {};
                                return "string" == typeof t ? {
                                    name: t
                                } : t
                            }, o = n ? Object(l.g)(n) : [], c = Math.max(t.length, o.length), f = [], d = function(i) {
                                var e = Object.assign({}, r(t[i])),
                                    n = Object.assign({}, r(o[i]));
                                Object.keys(e).filter((function(t) {
                                    return void 0 !== e[t] && !t.toLowerCase().includes("leave")
                                })).forEach((function(t) {
                                    n[t] = e[t]
                                })), f.push(n)
                            }, i = 0; i < c; i++) d(i);
                        return f
                    }

                    function k(t, e, n) {
                        return S.apply(this, arguments)
                    }

                    function S() {
                        return (S = Object(r.a)(regeneratorRuntime.mark((function t(e, n, r) {
                            var o, c, f, d, h = this;
                            return regeneratorRuntime.wrap((function(t) {
                                for (;;) switch (t.prev = t.next) {
                                    case 0:
                                        if (this._routeChanged = Boolean(x.nuxt.err) || n.name !== e.name, this._paramChanged = !this._routeChanged && n.path !== e.path, this._queryChanged = !this._paramChanged && n.fullPath !== e.fullPath, this._diffQuery = this._queryChanged ? Object(l.i)(e.query, n.query) : [], t.prev = 4, !this._queryChanged) {
                                            t.next = 10;
                                            break
                                        }
                                        return t.next = 8, Object(l.r)(e, (function(t, e) {
                                            return {
                                                Component: t,
                                                instance: e
                                            }
                                        }));
                                    case 8:
                                        o = t.sent, o.some((function(t) {
                                            var r = t.Component,
                                                o = t.instance,
                                                c = r.options.watchQuery;
                                            return !0 === c || (Array.isArray(c) ? c.some((function(t) {
                                                return h._diffQuery[t]
                                            })) : "function" == typeof c && c.apply(o, [e.query, n.query]))
                                        }));
                                    case 10:
                                        r(), t.next = 24;
                                        break;
                                    case 13:
                                        if (t.prev = 13, t.t0 = t.catch(4), c = t.t0 || {}, f = c.statusCode || c.status || c.response && c.response.status || 500, d = c.message || "", !/^Loading( CSS)? chunk (\d)+ failed\./.test(d)) {
                                            t.next = 21;
                                            break
                                        }
                                        return window.location.reload(!0), t.abrupt("return");
                                    case 21:
                                        this.error({
                                            statusCode: f,
                                            message: d
                                        }), this.$nuxt.$emit("routeChanged", e, n, c), r();
                                    case 24:
                                    case "end":
                                        return t.stop()
                                }
                            }), t, this, [
                                [4, 13]
                            ])
                        })))).apply(this, arguments)
                    }

                    function E(t, e) {
                        return O.serverRendered && e && Object(l.b)(t, e), t._Ctor = t, t
                    }

                    function P(t) {
                        return Object(l.d)(t, function() {
                            var t = Object(r.a)(regeneratorRuntime.mark((function t(e, n, r, o, c) {
                                var f;
                                return regeneratorRuntime.wrap((function(t) {
                                    for (;;) switch (t.prev = t.next) {
                                        case 0:
                                            if ("function" != typeof e || e.options) {
                                                t.next = 4;
                                                break
                                            }
                                            return t.next = 3, e();
                                        case 3:
                                            e = t.sent;
                                        case 4:
                                            return f = E(Object(l.s)(e), O.data ? O.data[c] : null), r.components[o] = f, t.abrupt("return", f);
                                        case 7:
                                        case "end":
                                            return t.stop()
                                    }
                                }), t)
                            })));
                            return function(e, n, r, o, c) {
                                return t.apply(this, arguments)
                            }
                        }())
                    }

                    function A(t, e, n) {
                        var r = this,
                            o = [],
                            c = !1;
                        if (void 0 !== n && (o = [], (n = Object(l.s)(n)).options.middleware && (o = o.concat(n.options.middleware)), t.forEach((function(t) {
                                t.options.middleware && (o = o.concat(t.options.middleware))
                            }))), o = o.map((function(t) {
                                return "function" == typeof t ? t : ("function" != typeof f.a[t] && (c = !0, r.error({
                                    statusCode: 500,
                                    message: "Unknown middleware " + t
                                })), f.a[t])
                            })), !c) return Object(l.o)(o, e)
                    }

                    function R(t, e, n) {
                        return T.apply(this, arguments)
                    }

                    function T() {
                        return T = Object(r.a)(regeneratorRuntime.mark((function t(e, n, o) {
                            var c, f, h, m, y, w, O, j, C, k, S, E, P, R, T, D = this;
                            return regeneratorRuntime.wrap((function(t) {
                                for (;;) switch (t.prev = t.next) {
                                    case 0:
                                        if (!1 !== this._routeChanged || !1 !== this._paramChanged || !1 !== this._queryChanged) {
                                            t.next = 2;
                                            break
                                        }
                                        return t.abrupt("return", o());
                                    case 2:
                                        return !1, e === n ? (_ = [], !0) : (c = [], _ = Object(l.g)(n, c).map((function(t, i) {
                                            return Object(l.c)(n.matched[c[i]].path)(n.params)
                                        }))), f = !1, h = function(path) {
                                            f || (f = !0, o(path))
                                        }, t.next = 8, Object(l.t)(x, {
                                            route: e,
                                            from: n,
                                            next: h.bind(this)
                                        });
                                    case 8:
                                        if (this._dateLastError = x.nuxt.dateErr, this._hadError = Boolean(x.nuxt.err), m = [], (y = Object(l.g)(e, m)).length) {
                                            t.next = 27;
                                            break
                                        }
                                        return t.next = 15, A.call(this, y, x.context);
                                    case 15:
                                        if (!f) {
                                            t.next = 17;
                                            break
                                        }
                                        return t.abrupt("return");
                                    case 17:
                                        return w = (d.a.options || d.a).layout, t.next = 20, this.loadLayout("function" == typeof w ? w.call(d.a, x.context) : w);
                                    case 20:
                                        return O = t.sent, t.next = 23, A.call(this, y, x.context, O);
                                    case 23:
                                        if (!f) {
                                            t.next = 25;
                                            break
                                        }
                                        return t.abrupt("return");
                                    case 25:
                                        return x.context.error({
                                            statusCode: 404,
                                            message: "This page could not be found"
                                        }), t.abrupt("return", o());
                                    case 27:
                                        return y.forEach((function(t) {
                                            t._Ctor && t._Ctor.options && (t.options.asyncData = t._Ctor.options.asyncData, t.options.fetch = t._Ctor.options.fetch)
                                        })), this.setTransitions($(y, e, n)), t.prev = 29, t.next = 32, A.call(this, y, x.context);
                                    case 32:
                                        if (!f) {
                                            t.next = 34;
                                            break
                                        }
                                        return t.abrupt("return");
                                    case 34:
                                        if (!x.context._errored) {
                                            t.next = 36;
                                            break
                                        }
                                        return t.abrupt("return", o());
                                    case 36:
                                        return "function" == typeof(j = y[0].options.layout) && (j = j(x.context)), t.next = 40, this.loadLayout(j);
                                    case 40:
                                        return j = t.sent, t.next = 43, A.call(this, y, x.context, j);
                                    case 43:
                                        if (!f) {
                                            t.next = 45;
                                            break
                                        }
                                        return t.abrupt("return");
                                    case 45:
                                        if (!x.context._errored) {
                                            t.next = 47;
                                            break
                                        }
                                        return t.abrupt("return", o());
                                    case 47:
                                        C = !0, t.prev = 48, k = v(y), t.prev = 50, k.s();
                                    case 52:
                                        if ((S = k.n()).done) {
                                            t.next = 63;
                                            break
                                        }
                                        if ("function" == typeof(E = S.value).options.validate) {
                                            t.next = 56;
                                            break
                                        }
                                        return t.abrupt("continue", 61);
                                    case 56:
                                        return t.next = 58, E.options.validate(x.context);
                                    case 58:
                                        if (C = t.sent) {
                                            t.next = 61;
                                            break
                                        }
                                        return t.abrupt("break", 63);
                                    case 61:
                                        t.next = 52;
                                        break;
                                    case 63:
                                        t.next = 68;
                                        break;
                                    case 65:
                                        t.prev = 65, t.t0 = t.catch(50), k.e(t.t0);
                                    case 68:
                                        return t.prev = 68, k.f(), t.finish(68);
                                    case 71:
                                        t.next = 77;
                                        break;
                                    case 73:
                                        return t.prev = 73, t.t1 = t.catch(48), this.error({
                                            statusCode: t.t1.statusCode || "500",
                                            message: t.t1.message
                                        }), t.abrupt("return", o());
                                    case 77:
                                        if (C) {
                                            t.next = 80;
                                            break
                                        }
                                        return this.error({
                                            statusCode: 404,
                                            message: "This page could not be found"
                                        }), t.abrupt("return", o());
                                    case 80:
                                        return t.next = 82, Promise.all(y.map(function() {
                                            var t = Object(r.a)(regeneratorRuntime.mark((function t(r, i) {
                                                var o, c, f, d, h, v, y, p;
                                                return regeneratorRuntime.wrap((function(t) {
                                                    for (;;) switch (t.prev = t.next) {
                                                        case 0:
                                                            if (r._path = Object(l.c)(e.matched[m[i]].path)(e.params), r._dataRefresh = !1, o = r._path !== _[i], D._routeChanged && o ? r._dataRefresh = !0 : D._paramChanged && o ? (c = r.options.watchParam, r._dataRefresh = !1 !== c) : D._queryChanged && (!0 === (f = r.options.watchQuery) ? r._dataRefresh = !0 : Array.isArray(f) ? r._dataRefresh = f.some((function(t) {
                                                                    return D._diffQuery[t]
                                                                })) : "function" == typeof f && (P || (P = Object(l.h)(e)), r._dataRefresh = f.apply(P[i], [e.query, n.query]))), D._hadError || !D._isMounted || r._dataRefresh) {
                                                                t.next = 6;
                                                                break
                                                            }
                                                            return t.abrupt("return");
                                                        case 6:
                                                            return d = [], h = r.options.asyncData && "function" == typeof r.options.asyncData, v = Boolean(r.options.fetch) && r.options.fetch.length, h && ((y = Object(l.q)(r.options.asyncData, x.context)).then((function(t) {
                                                                Object(l.b)(r, t)
                                                            })), d.push(y)), D.$loading.manual = !1 === r.options.loading, v && ((p = r.options.fetch(x.context)) && (p instanceof Promise || "function" == typeof p.then) || (p = Promise.resolve(p)), p.then((function(t) {})), d.push(p)), t.abrupt("return", Promise.all(d));
                                                        case 13:
                                                        case "end":
                                                            return t.stop()
                                                    }
                                                }), t)
                                            })));
                                            return function(e, n) {
                                                return t.apply(this, arguments)
                                            }
                                        }()));
                                    case 82:
                                        f || o(), t.next = 99;
                                        break;
                                    case 85:
                                        if (t.prev = 85, t.t2 = t.catch(29), "ERR_REDIRECT" !== (R = t.t2 || {}).message) {
                                            t.next = 90;
                                            break
                                        }
                                        return t.abrupt("return", this.$nuxt.$emit("routeChanged", e, n, R));
                                    case 90:
                                        return _ = [], Object(l.k)(R), "function" == typeof(T = (d.a.options || d.a).layout) && (T = T(x.context)), t.next = 96, this.loadLayout(T);
                                    case 96:
                                        this.error(R), this.$nuxt.$emit("routeChanged", e, n, R), o();
                                    case 99:
                                    case "end":
                                        return t.stop()
                                }
                            }), t, this, [
                                [29, 85],
                                [48, 73],
                                [50, 65, 68, 71]
                            ])
                        }))), T.apply(this, arguments)
                    }

                    function D(t, n) {
                        Object(l.d)(t, (function(t, n, r, c) {
                            return "object" !== Object(e.a)(t) || t.options || ((t = o.default.extend(t))._Ctor = t, r.components[c] = t), t
                        }))
                    }

                    function N(t) {
                        var e = Boolean(this.$options.nuxt.err);
                        this._hadError && this._dateLastError === this.$options.nuxt.dateErr && (e = !1);
                        var n = e ? (d.a.options || d.a).layout : t.matched[0].components.default.options.layout;
                        "function" == typeof n && (n = n(x.context)), this.setLayout(n)
                    }

                    function L(t) {
                        t._hadError && t._dateLastError === t.$options.nuxt.dateErr && t.error()
                    }

                    function M(t, e) {
                        var n = this;
                        if (!1 !== this._routeChanged || !1 !== this._paramChanged || !1 !== this._queryChanged) {
                            var r = Object(l.h)(t),
                                c = Object(l.g)(t),
                                f = !1;
                            o.default.nextTick((function() {
                                r.forEach((function(t, i) {
                                    if (t && !t._isDestroyed && t.constructor._dataRefresh && c[i] === t.constructor && !0 !== t.$vnode.data.keepAlive && "function" == typeof t.constructor.options.data) {
                                        var e = t.constructor.options.data.call(t);
                                        for (var n in e) o.default.set(t.$data, n, e[n]);
                                        f = !0
                                    }
                                })), f && window.$nuxt.$nextTick((function() {
                                    window.$nuxt.$emit("triggerScroll")
                                })), L(n)
                            }))
                        }
                    }

                    function I(t) {
                        window.onNuxtReadyCbs.forEach((function(e) {
                            "function" == typeof e && e(t)
                        })), "function" == typeof window._onNuxtLoaded && window._onNuxtLoaded(t), w.afterEach((function(e, n) {
                            o.default.nextTick((function() {
                                return t.$nuxt.$emit("routeChanged", e, n)
                            }))
                        }))
                    }

                    function B() {
                        return (B = Object(r.a)(regeneratorRuntime.mark((function t(e) {
                            var n, r, c, f;
                            return regeneratorRuntime.wrap((function(t) {
                                for (;;) switch (t.prev = t.next) {
                                    case 0:
                                        return x = e.app, w = e.router, e.store, n = new o.default(x), r = function() {
                                            n.$mount("#__nuxt"), w.afterEach(D), w.afterEach(N.bind(n)), w.afterEach(M.bind(n)), o.default.nextTick((function() {
                                                I(n)
                                            }))
                                        }, t.next = 7, Promise.all(P(x.context.route));
                                    case 7:
                                        if (c = t.sent, n.setTransitions = n.$options.nuxt.setTransitions.bind(n), c.length && (n.setTransitions($(c, w.currentRoute)), _ = w.currentRoute.matched.map((function(t) {
                                                return Object(l.c)(t.path)(w.currentRoute.params)
                                            }))), n.$loading = {}, O.error && n.error(O.error), w.beforeEach(k.bind(n)), w.beforeEach(R.bind(n)), !O.serverRendered || !Object(l.n)(O.routePath, n.context.route.path)) {
                                            t.next = 16;
                                            break
                                        }
                                        return t.abrupt("return", r());
                                    case 16:
                                        return f = function() {
                                            D(w.currentRoute, w.currentRoute), N.call(n, w.currentRoute), L(n), r()
                                        }, t.next = 19, new Promise((function(t) {
                                            return setTimeout(t, 0)
                                        }));
                                    case 19:
                                        R.call(n, w.currentRoute, w.currentRoute, (function(path) {
                                            if (path) {
                                                var t = w.afterEach((function(e, n) {
                                                    t(), f()
                                                }));
                                                w.push(path, void 0, (function(t) {
                                                    t && C(t)
                                                }))
                                            } else f()
                                        }));
                                    case 20:
                                    case "end":
                                        return t.stop()
                                }
                            }), t)
                        })))).apply(this, arguments)
                    }
                    Object(d.b)(null, O.config).then((function(t) {
                        return B.apply(this, arguments)
                    })).catch(C)
                }.call(this, n(32))
        },
        247: function(t, e, n) {
            "use strict";
            n(174)
        },
        248: function(t, e, n) {
            var r = n(104)((function(i) {
                return i[1]
            }));
            r.push([t.i, ".__nuxt-error-page{padding:1rem;background:#f7f8fb;color:#47494e;text-align:center;display:flex;justify-content:center;align-items:center;flex-direction:column;font-family:sans-serif;font-weight:100!important;-ms-text-size-adjust:100%;-webkit-text-size-adjust:100%;-webkit-font-smoothing:antialiased;position:absolute;top:0;left:0;right:0;bottom:0}.__nuxt-error-page .error{max-width:450px}.__nuxt-error-page .title{font-size:1.5rem;margin-top:15px;color:#47494e;margin-bottom:8px}.__nuxt-error-page .description{color:#7f828b;line-height:21px;margin-bottom:10px}.__nuxt-error-page a{color:#7f828b!important;text-decoration:none}.__nuxt-error-page .logo{position:fixed;left:12px;bottom:12px}", ""]), r.locals = {}, t.exports = r
        },
        253: function(t, e, n) {
            "use strict";
            t.exports = function(t, e) {
                return e || (e = {}), "string" != typeof(t = t && t.__esModule ? t.default : t) ? t : (/^['"].*['"]$/.test(t) && (t = t.slice(1, -1)), e.hash && (t += e.hash), /["'() \t\n]/.test(t) || e.needQuotes ? '"'.concat(t.replace(/"/g, '\\"').replace(/\n/g, "\\n"), '"') : t)
            }
        },
        29: function(t, e, n) {
            "use strict";
            n.d(e, "b", (function() {
                return xt
            })), n.d(e, "a", (function() {
                return T
            }));
            var r = {};
            n.r(r), n.d(r, "Action", (function() {
                return H
            })), n.d(r, "Attachment", (function() {
                return K
            })), n.d(r, "Check", (function() {
                return G
            })), n.d(r, "Colour", (function() {
                return J
            })), n.d(r, "Cropper", (function() {
                return X
            })), n.d(r, "DocumentDownloader", (function() {
                return Q
            })), n.d(r, "Download", (function() {
                return V
            })), n.d(r, "Featured", (function() {
                return W
            })), n.d(r, "Footer", (function() {
                return Y
            })), n.d(r, "Help", (function() {
                return Z
            })), n.d(r, "MediaPlayer", (function() {
                return tt
            })), n.d(r, "Modal", (function() {
                return et
            })), n.d(r, "Preview", (function() {
                return nt
            })), n.d(r, "ProductCard", (function() {
                return ot
            })), n.d(r, "ProductShowcase", (function() {
                return it
            })), n.d(r, "Vcard", (function() {
                return at
            }));
            n(48), n(31), n(44), n(79), n(39), n(82);
            var o = n(13),
                c = n(36),
                f = (n(47), n(38), n(14), n(45), n(25), n(74), n(2)),
                l = n(72),
                d = n(177),
                h = n(132),
                m = n.n(h),
                v = n(60),
                y = n.n(v),
                x = (n(26), n(27), n(133)),
                w = n(28),
                _ = n(1);
            "scrollRestoration" in window.history && (Object(_.u)("manual"), window.addEventListener("beforeunload", (function() {
                Object(_.u)("auto")
            })), window.addEventListener("load", (function() {
                Object(_.u)("manual")
            })));

            function O(object, t) {
                var e = Object.keys(object);
                if (Object.getOwnPropertySymbols) {
                    var n = Object.getOwnPropertySymbols(object);
                    t && (n = n.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(object, t).enumerable
                    }))), e.push.apply(e, n)
                }
                return e
            }

            function j(t) {
                for (var i = 1; i < arguments.length; i++) {
                    var source = null != arguments[i] ? arguments[i] : {};
                    i % 2 ? O(Object(source), !0).forEach((function(e) {
                        Object(c.a)(t, e, source[e])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(source)) : O(Object(source)).forEach((function(e) {
                        Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(source, e))
                    }))
                }
                return t
            }
            var C = function() {};
            f.default.use(x.a);
            var $ = {
                mode: "history",
                base: "/",
                linkActiveClass: "nuxt-link-active",
                linkExactActiveClass: "nuxt-link-exact-active",
                scrollBehavior: function(t, e, n) {
                    var r = !1,
                        o = t !== e;
                    n ? r = n : o && function(t) {
                        var e = Object(_.g)(t);
                        if (1 === e.length) {
                            var n = e[0].options;
                            return !1 !== (void 0 === n ? {} : n).scrollToTop
                        }
                        return e.some((function(t) {
                            var e = t.options;
                            return e && e.scrollToTop
                        }))
                    }(t) && (r = {
                        x: 0,
                        y: 0
                    });
                    var c = window.$nuxt;
                    return (!o || t.path === e.path && t.hash !== e.hash) && c.$nextTick((function() {
                        return c.$emit("triggerScroll")
                    })), new Promise((function(e) {
                        c.$once("triggerScroll", (function() {
                            if (t.hash) {
                                var n = t.hash;
                                void 0 !== window.CSS && void 0 !== window.CSS.escape && (n = "#" + window.CSS.escape(n.substr(1)));
                                try {
                                    document.querySelector(n) && (r = {
                                        selector: n
                                    })
                                } catch (t) {
                                    console.warn("Failed to save scroll position. Please add CSS.escape() polyfill (https://github.com/mathiasbynens/CSS.escape).")
                                }
                            }
                            e(r)
                        }))
                    }))
                },
                routes: [{
                    path: "/hosting-guide",
                    component: function() {
                        return Object(_.m)(n.e(24).then(n.bind(null, 597)))
                    },
                    name: "hosting-guide"
                }, {
                    path: "/",
                    component: function() {
                        return Object(_.m)(Promise.all([n.e(0), n.e(3), n.e(2), n.e(5), n.e(25)]).then(n.bind(null, 596)))
                    },
                    name: "index"
                }],
                fallback: !1
            };

            function k(t, e) {
                var base = e._app && e._app.basePath || $.base,
                    n = new x.a(j(j({}, $), {}, {
                        base: base
                    })),
                    r = n.push;
                n.push = function(t) {
                    var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : C,
                        n = arguments.length > 2 ? arguments[2] : void 0;
                    return r.call(this, t, e, n)
                };
                var o = n.resolve.bind(n);
                return n.resolve = function(t, e, n) {
                    return "string" == typeof t && (t = Object(w.c)(t)), o(t, e, n)
                }, n
            }
            var S = {
                    name: "NuxtChild",
                    functional: !0,
                    props: {
                        nuxtChildKey: {
                            type: String,
                            default: ""
                        },
                        keepAlive: Boolean,
                        keepAliveProps: {
                            type: Object,
                            default: void 0
                        }
                    },
                    render: function(t, e) {
                        var n = e.parent,
                            data = e.data,
                            r = e.props,
                            o = n.$createElement;
                        data.nuxtChild = !0;
                        for (var c = n, f = n.$nuxt.nuxt.transitions, l = n.$nuxt.nuxt.defaultTransition, d = 0; n;) n.$vnode && n.$vnode.data.nuxtChild && d++, n = n.$parent;
                        data.nuxtChildDepth = d;
                        var h = f[d] || l,
                            m = {};
                        E.forEach((function(t) {
                            void 0 !== h[t] && (m[t] = h[t])
                        }));
                        var v = {};
                        P.forEach((function(t) {
                            "function" == typeof h[t] && (v[t] = h[t].bind(c))
                        }));
                        var y = v.beforeEnter;
                        if (v.beforeEnter = function(t) {
                                if (window.$nuxt.$nextTick((function() {
                                        window.$nuxt.$emit("triggerScroll")
                                    })), y) return y.call(c, t)
                            }, !1 === h.css) {
                            var x = v.leave;
                            (!x || x.length < 2) && (v.leave = function(t, e) {
                                x && x.call(c, t), c.$nextTick(e)
                            })
                        }
                        var w = o("routerView", data);
                        return r.keepAlive && (w = o("keep-alive", {
                            props: r.keepAliveProps
                        }, [w])), o("transition", {
                            props: m,
                            on: v
                        }, [w])
                    }
                },
                E = ["name", "mode", "appear", "css", "type", "duration", "enterClass", "leaveClass", "appearClass", "enterActiveClass", "enterActiveClass", "leaveActiveClass", "appearActiveClass", "enterToClass", "leaveToClass", "appearToClass"],
                P = ["beforeEnter", "enter", "afterEnter", "enterCancelled", "beforeLeave", "leave", "afterLeave", "leaveCancelled", "beforeAppear", "appear", "afterAppear", "appearCancelled"],
                A = {
                    name: "NuxtError",
                    props: {
                        error: {
                            type: Object,
                            default: null
                        }
                    },
                    computed: {
                        statusCode: function() {
                            return this.error && this.error.statusCode || 500
                        },
                        message: function() {
                            return this.error.message || "Error"
                        }
                    },
                    head: function() {
                        return {
                            title: this.message,
                            meta: [{
                                name: "viewport",
                                content: "width=device-width,initial-scale=1.0,minimum-scale=1.0"
                            }]
                        }
                    }
                },
                R = (n(247), n(73)),
                T = Object(R.a)(A, (function() {
                    var t = this,
                        e = t.$createElement,
                        n = t._self._c || e;
                    return n("div", {
                        staticClass: "__nuxt-error-page"
                    }, [n("div", {
                        staticClass: "error"
                    }, [n("svg", {
                        attrs: {
                            xmlns: "http://www.w3.org/2000/svg",
                            width: "90",
                            height: "90",
                            fill: "#DBE1EC",
                            viewBox: "0 0 48 48"
                        }
                    }, [n("path", {
                        attrs: {
                            d: "M22 30h4v4h-4zm0-16h4v12h-4zm1.99-10C12.94 4 4 12.95 4 24s8.94 20 19.99 20S44 35.05 44 24 35.04 4 23.99 4zM24 40c-8.84 0-16-7.16-16-16S15.16 8 24 8s16 7.16 16 16-7.16 16-16 16z"
                        }
                    })]), t._v(" "), n("div", {
                        staticClass: "title"
                    }, [t._v(t._s(t.message))]), t._v(" "), 404 === t.statusCode ? n("p", {
                        staticClass: "description"
                    }, [void 0 === t.$route ? n("a", {
                        staticClass: "error-link",
                        attrs: {
                            href: "/"
                        }
                    }) : n("NuxtLink", {
                        staticClass: "error-link",
                        attrs: {
                            to: "/"
                        }
                    }, [t._v("Back to the home page")])], 1) : t._e(), t._v(" "), t._m(0)])])
                }), [function() {
                    var t = this,
                        e = t.$createElement,
                        n = t._self._c || e;
                    return n("div", {
                        staticClass: "logo"
                    }, [n("a", {
                        attrs: {
                            href: "https://nuxtjs.org",
                            target: "_blank",
                            rel: "noopener"
                        }
                    }, [t._v("Nuxt")])])
                }], !1, null, null, null).exports,
                D = n(21),
                N = (n(108), {
                    name: "Nuxt",
                    components: {
                        NuxtChild: S,
                        NuxtError: T
                    },
                    props: {
                        nuxtChildKey: {
                            type: String,
                            default: void 0
                        },
                        keepAlive: Boolean,
                        keepAliveProps: {
                            type: Object,
                            default: void 0
                        },
                        name: {
                            type: String,
                            default: "default"
                        }
                    },
                    errorCaptured: function(t) {
                        this.displayingNuxtError && (this.errorFromNuxtError = t, this.$forceUpdate())
                    },
                    computed: {
                        routerViewKey: function() {
                            if (void 0 !== this.nuxtChildKey || this.$route.matched.length > 1) return this.nuxtChildKey || Object(_.c)(this.$route.matched[0].path)(this.$route.params);
                            var t = Object(D.a)(this.$route.matched, 1)[0];
                            if (!t) return this.$route.path;
                            var e = t.components.default;
                            if (e && e.options) {
                                var n = e.options;
                                if (n.key) return "function" == typeof n.key ? n.key(this.$route) : n.key
                            }
                            return /\/$/.test(t.path) ? this.$route.path : this.$route.path.replace(/\/$/, "")
                        }
                    },
                    beforeCreate: function() {
                        f.default.util.defineReactive(this, "nuxt", this.$root.$options.nuxt)
                    },
                    render: function(t) {
                        var e = this;
                        return this.nuxt.err ? this.errorFromNuxtError ? (this.$nextTick((function() {
                            return e.errorFromNuxtError = !1
                        })), t("div", {}, [t("h2", "An error occurred while showing the error page"), t("p", "Unfortunately an error occurred and while showing the error page another error occurred"), t("p", "Error details: ".concat(this.errorFromNuxtError.toString())), t("nuxt-link", {
                            props: {
                                to: "/"
                            }
                        }, "Go back to home")])) : (this.displayingNuxtError = !0, this.$nextTick((function() {
                            return e.displayingNuxtError = !1
                        })), t(T, {
                            props: {
                                error: this.nuxt.err
                            }
                        })) : t("NuxtChild", {
                            key: this.routerViewKey,
                            props: this.$props
                        })
                    }
                }),
                L = (n(51), n(50), n(52), n(53), n(249), n(181));

            function M(t, e) {
                var n = "undefined" != typeof Symbol && t[Symbol.iterator] || t["@@iterator"];
                if (!n) {
                    if (Array.isArray(t) || (n = function(t, e) {
                            if (!t) return;
                            if ("string" == typeof t) return I(t, e);
                            var n = Object.prototype.toString.call(t).slice(8, -1);
                            "Object" === n && t.constructor && (n = t.constructor.name);
                            if ("Map" === n || "Set" === n) return Array.from(t);
                            if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return I(t, e)
                        }(t)) || e && t && "number" == typeof t.length) {
                        n && (t = n);
                        var i = 0,
                            r = function() {};
                        return {
                            s: r,
                            n: function() {
                                return i >= t.length ? {
                                    done: !0
                                } : {
                                    done: !1,
                                    value: t[i++]
                                }
                            },
                            e: function(t) {
                                throw t
                            },
                            f: r
                        }
                    }
                    throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }
                var o, c = !0,
                    f = !1;
                return {
                    s: function() {
                        n = n.call(t)
                    },
                    n: function() {
                        var t = n.next();
                        return c = t.done, t
                    },
                    e: function(t) {
                        f = !0, o = t
                    },
                    f: function() {
                        try {
                            c || null == n.return || n.return()
                        } finally {
                            if (f) throw o
                        }
                    }
                }
            }

            function I(t, e) {
                (null == e || e > t.length) && (e = t.length);
                for (var i = 0, n = new Array(e); i < e; i++) n[i] = t[i];
                return n
            }
            var B = {
                    _default: Object(_.s)(L.a)
                },
                U = {
                    render: function(t, e) {
                        var n = t(this.layout || "nuxt"),
                            r = t("div", {
                                domProps: {
                                    id: "__layout"
                                },
                                key: this.layoutName
                            }, [n]),
                            o = t("transition", {
                                props: {
                                    name: "layout",
                                    mode: "out-in"
                                },
                                on: {
                                    beforeEnter: function(t) {
                                        window.$nuxt.$nextTick((function() {
                                            window.$nuxt.$emit("triggerScroll")
                                        }))
                                    }
                                }
                            }, [r]);
                        return t("div", {
                            domProps: {
                                id: "__nuxt"
                            }
                        }, [o])
                    },
                    data: function() {
                        return {
                            isOnline: !0,
                            layout: null,
                            layoutName: "",
                            nbFetching: 0
                        }
                    },
                    beforeCreate: function() {
                        f.default.util.defineReactive(this, "nuxt", this.$options.nuxt)
                    },
                    created: function() {
                        this.$root.$options.$nuxt = this, window.$nuxt = this, this.refreshOnlineStatus(), window.addEventListener("online", this.refreshOnlineStatus), window.addEventListener("offline", this.refreshOnlineStatus), this.error = this.nuxt.error, this.context = this.$options.context
                    },
                    watch: {
                        "nuxt.err": "errorChanged"
                    },
                    computed: {
                        isOffline: function() {
                            return !this.isOnline
                        },
                        isFetching: function() {
                            return this.nbFetching > 0
                        },
                        isPreview: function() {
                            return Boolean(this.$options.previewData)
                        }
                    },
                    methods: {
                        refreshOnlineStatus: function() {
                            void 0 === window.navigator.onLine ? this.isOnline = !0 : this.isOnline = window.navigator.onLine
                        },
                        refresh: function() {
                            var t = this;
                            return Object(o.a)(regeneratorRuntime.mark((function e() {
                                var n, r;
                                return regeneratorRuntime.wrap((function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            if ((n = Object(_.h)(t.$route)).length) {
                                                e.next = 3;
                                                break
                                            }
                                            return e.abrupt("return");
                                        case 3:
                                            return r = n.map((function(e) {
                                                var p = [];
                                                if (e.$options.fetch && e.$options.fetch.length && p.push(Object(_.q)(e.$options.fetch, t.context)), e.$fetch) p.push(e.$fetch());
                                                else {
                                                    var n, r = M(Object(_.e)(e.$vnode.componentInstance));
                                                    try {
                                                        for (r.s(); !(n = r.n()).done;) {
                                                            var component = n.value;
                                                            p.push(component.$fetch())
                                                        }
                                                    } catch (t) {
                                                        r.e(t)
                                                    } finally {
                                                        r.f()
                                                    }
                                                }
                                                return e.$options.asyncData && p.push(Object(_.q)(e.$options.asyncData, t.context).then((function(t) {
                                                    for (var n in t) f.default.set(e.$data, n, t[n])
                                                }))), Promise.all(p)
                                            })), e.prev = 4, e.next = 7, Promise.all(r);
                                        case 7:
                                            e.next = 13;
                                            break;
                                        case 9:
                                            e.prev = 9, e.t0 = e.catch(4), Object(_.k)(e.t0), t.error(e.t0);
                                        case 13:
                                        case "end":
                                            return e.stop()
                                    }
                                }), e, null, [
                                    [4, 9]
                                ])
                            })))()
                        },
                        errorChanged: function() {
                            if (this.nuxt.err) {
                                var t = (T.options || T).layout;
                                "function" == typeof t && (t = t(this.context)), this.setLayout(t)
                            }
                        },
                        setLayout: function(t) {
                            return t && B["_" + t] || (t = "default"), this.layoutName = t, this.layout = B["_" + t], this.layout
                        },
                        loadLayout: function(t) {
                            return t && B["_" + t] || (t = "default"), Promise.resolve(B["_" + t])
                        }
                    }
                };
            f.default.use(l.a);
            var z = {};
            (z = function(t, e) {
                if ((t = t.default || t).commit) throw new Error("[nuxt] ".concat(e, " should export a method that returns a Vuex instance."));
                return "function" != typeof t && (t = Object.assign({}, t)),
                    function(t, e) {
                        if (t.state && "function" != typeof t.state) {
                            console.warn("'state' should be a method that returns an object in ".concat(e));
                            var n = Object.assign({}, t.state);
                            t = Object.assign({}, t, {
                                state: function() {
                                    return n
                                }
                            })
                        }
                        return t
                    }(t, e)
            }(n(256), "store/index.js")).modules = z.modules || {};
            var F = z instanceof Function ? z : function() {
                return new l.a.Store(Object.assign({
                    strict: !1
                }, z))
            };
            n(77), n(78);
            var H = function() {
                    return Promise.all([n.e(1), n.e(8)]).then(n.bind(null, 504)).then((function(t) {
                        return ut(t.default || t)
                    }))
                },
                K = function() {
                    return Promise.all([n.e(2), n.e(9)]).then(n.bind(null, 503)).then((function(t) {
                        return ut(t.default || t)
                    }))
                },
                G = function() {
                    return n.e(10).then(n.bind(null, 309)).then((function(t) {
                        return ut(t.default || t)
                    }))
                },
                J = function() {
                    return Promise.all([n.e(0), n.e(28), n.e(1), n.e(4), n.e(11)]).then(n.bind(null, 506)).then((function(t) {
                        return ut(t.default || t)
                    }))
                },
                X = function() {
                    return Promise.all([n.e(2), n.e(12)]).then(n.bind(null, 336)).then((function(t) {
                        return ut(t.default || t)
                    }))
                },
                Q = function() {
                    return Promise.all([n.e(0), n.e(13)]).then(n.bind(null, 307)).then((function(t) {
                        return ut(t.default || t)
                    }))
                },
                V = function() {
                    return n.e(14).then(n.bind(null, 507)).then((function(t) {
                        return ut(t.default || t)
                    }))
                },
                W = function() {
                    return Promise.all([n.e(0), n.e(3), n.e(5), n.e(15)]).then(n.bind(null, 505)).then((function(t) {
                        return ut(t.default || t)
                    }))
                },
                Y = function() {
                    return n.e(16).then(n.bind(null, 262)).then((function(t) {
                        return ut(t.default || t)
                    }))
                },
                Z = function() {
                    return n.e(17).then(n.bind(null, 310)).then((function(t) {
                        return ut(t.default || t)
                    }))
                },
                tt = function() {
                    return n.e(18).then(n.bind(null, 306)).then((function(t) {
                        return ut(t.default || t)
                    }))
                },
                et = function() {
                    return n.e(19).then(n.bind(null, 502)).then((function(t) {
                        return ut(t.default || t)
                    }))
                },
                nt = function() {
                    return Promise.all([n.e(0), n.e(1), n.e(4), n.e(20)]).then(n.bind(null, 337)).then((function(t) {
                        return ut(t.default || t)
                    }))
                },
                ot = function() {
                    return n.e(21).then(n.bind(null, 305)).then((function(t) {
                        return ut(t.default || t)
                    }))
                },
                it = function() {
                    return n.e(22).then(n.bind(null, 308)).then((function(t) {
                        return ut(t.default || t)
                    }))
                },
                at = function() {
                    return n.e(23).then(n.bind(null, 508)).then((function(t) {
                        return ut(t.default || t)
                    }))
                };

            function ut(t) {
                if (!t || !t.functional) return t;
                var e = Array.isArray(t.props) ? t.props : Object.keys(t.props || {});
                return {
                    render: function(n) {
                        var r = {},
                            o = {};
                        for (var c in this.$attrs) e.includes(c) ? o[c] = this.$attrs[c] : r[c] = this.$attrs[c];
                        return n(t, {
                            on: this.$listeners,
                            attrs: r,
                            props: o,
                            scopedSlots: this.$scopedSlots
                        }, this.$slots.default)
                    }
                }
            }
            for (var ct in r) f.default.component(ct, r[ct]), f.default.component("Lazy" + ct, r[ct]);
            var st = n(134),
                ft = n.n(st),
                lt = n(24);
            n(198);

            function pt(t, e) {
                var n = "undefined" != typeof Symbol && t[Symbol.iterator] || t["@@iterator"];
                if (!n) {
                    if (Array.isArray(t) || (n = function(t, e) {
                            if (!t) return;
                            if ("string" == typeof t) return ht(t, e);
                            var n = Object.prototype.toString.call(t).slice(8, -1);
                            "Object" === n && t.constructor && (n = t.constructor.name);
                            if ("Map" === n || "Set" === n) return Array.from(t);
                            if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return ht(t, e)
                        }(t)) || e && t && "number" == typeof t.length) {
                        n && (t = n);
                        var i = 0,
                            r = function() {};
                        return {
                            s: r,
                            n: function() {
                                return i >= t.length ? {
                                    done: !0
                                } : {
                                    done: !1,
                                    value: t[i++]
                                }
                            },
                            e: function(t) {
                                throw t
                            },
                            f: r
                        }
                    }
                    throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }
                var o, c = !0,
                    f = !1;
                return {
                    s: function() {
                        n = n.call(t)
                    },
                    n: function() {
                        var t = n.next();
                        return c = t.done, t
                    },
                    e: function(t) {
                        f = !0, o = t
                    },
                    f: function() {
                        try {
                            c || null == n.return || n.return()
                        } finally {
                            if (f) throw o
                        }
                    }
                }
            }

            function ht(t, e) {
                (null == e || e > t.length) && (e = t.length);
                for (var i = 0, n = new Array(e); i < e; i++) n[i] = t[i];
                return n
            }

            function mt(t, e, n) {
                return t.find((function(t) {
                    return n ? t[e] === n : t[e]
                }))
            }
            var meta = n(179),
                vt = function(t) {
                    ! function(t, e) {
                        if ("function" != typeof t)
                            for (var n in e) {
                                var r = e[n];
                                if (Array.isArray(r)) {
                                    t[n] = t[n] || [];
                                    var o, c = pt(r);
                                    try {
                                        for (c.s(); !(o = c.n()).done;) {
                                            var f = o.value;
                                            f.hid && mt(t[n], "hid", f.hid) || f.name && mt(t[n], "name", f.name) || t[n].push(f)
                                        }
                                    } catch (t) {
                                        c.e(t)
                                    } finally {
                                        c.f()
                                    }
                                } else if ("object" === Object(lt.a)(r))
                                    for (var l in t[n] = t[n] || {}, r) t[n][l] = r[l];
                                else void 0 === t[n] && (t[n] = r)
                            } else console.warn("Cannot merge meta. Avoid using head as a function!")
                    }(t.app.head, meta)
                };

            function bt(object, t) {
                var e = Object.keys(object);
                if (Object.getOwnPropertySymbols) {
                    var n = Object.getOwnPropertySymbols(object);
                    t && (n = n.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(object, t).enumerable
                    }))), e.push.apply(e, n)
                }
                return e
            }

            function yt(t) {
                for (var i = 1; i < arguments.length; i++) {
                    var source = null != arguments[i] ? arguments[i] : {};
                    i % 2 ? bt(Object(source), !0).forEach((function(e) {
                        Object(c.a)(t, e, source[e])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(source)) : bt(Object(source)).forEach((function(e) {
                        Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(source, e))
                    }))
                }
                return t
            }
            f.default.component(m.a.name, m.a), f.default.component(y.a.name, yt(yt({}, y.a), {}, {
                render: function(t, e) {
                    return y.a._warned || (y.a._warned = !0, console.warn("<no-ssr> has been deprecated and will be removed in Nuxt 3, please use <client-only> instead")), y.a.render(t, e)
                }
            })), f.default.component(S.name, S), f.default.component("NChild", S), f.default.component(N.name, N), Object.defineProperty(f.default.prototype, "$nuxt", {
                get: function() {
                    var t = this.$root.$options.$nuxt;
                    return t || "undefined" == typeof window ? t : window.$nuxt
                },
                configurable: !0
            }), f.default.use(d.a, {
                keyName: "head",
                attribute: "data-n-head",
                ssrAttribute: "data-n-head-ssr",
                tagIDKeyName: "hid"
            });
            var gt = {
                name: "page",
                mode: "out-in",
                appear: !0,
                appearClass: "appear",
                appearActiveClass: "appear-active",
                appearToClass: "appear-to"
            };
            l.a.Store.prototype.registerModule;

            function xt(t) {
                return wt.apply(this, arguments)
            }

            function wt() {
                return wt = Object(o.a)(regeneratorRuntime.mark((function t(e) {
                    var n, r, c, l, d, h, path, m, v = arguments;
                    return regeneratorRuntime.wrap((function(t) {
                        for (;;) switch (t.prev = t.next) {
                            case 0:
                                return m = function(t, e) {
                                    if (!t) throw new Error("inject(key, value) has no key provided");
                                    if (void 0 === e) throw new Error("inject('".concat(t, "', value) has no value provided"));
                                    l[t = "$" + t] = e, l.context[t] || (l.context[t] = e), c[t] = l[t];
                                    var n = "__nuxt_" + t + "_installed__";
                                    f.default[n] || (f.default[n] = !0, f.default.use((function() {
                                        Object.prototype.hasOwnProperty.call(f.default.prototype, t) || Object.defineProperty(f.default.prototype, t, {
                                            get: function() {
                                                return this.$root.$options[t]
                                            }
                                        })
                                    })))
                                }, n = v.length > 1 && void 0 !== v[1] ? v[1] : {}, t.next = 4, k(0, n);
                            case 4:
                                return r = t.sent, (c = F(e)).$router = r, l = yt({
                                    head: {
                                        title: "Neon vCARD",
                                        meta: [{
                                            charset: "utf-8"
                                        }, {
                                            name: "viewport",
                                            content: "width=device-width, initial-scale=1"
                                        }, {
                                            hid: "description",
                                            name: "description",
                                            content: "Neon vCARD helps you create beautiful, responsive HTML-based digital business cards."
                                        }, {
                                            hid: "msapplication-TileColor",
                                            name: "msapplication-TileColor",
                                            property: "msapplication-TileColor",
                                            content: "#111827"
                                        }, {
                                            hid: "msapplication-TileImage",
                                            name: "msapplication-TileImage",
                                            property: "msapplication-TileImage",
                                            content: "/mstile-150x150.png"
                                        }],
                                        link: [{
                                            rel: "icon",
                                            type: "image/x-icon",
                                            href: "/favicon.ico?v=2"
                                        }, {
                                            rel: "icon",
                                            type: "image/png",
                                            href: "/favicon-16x16.png"
                                        }, {
                                            rel: "icon",
                                            type: "image/png",
                                            href: "/favicon-32x32.png"
                                        }, {
                                            rel: "apple-touch-icon",
                                            sizes: "180x180",
                                            href: "/apple-touch-icon.png"
                                        }, {
                                            rel: "mask-icon",
                                            color: "#111827",
                                            href: "/safari-pinned-tab.svg"
                                        }],
                                        script: [{
                                            src: "/qrcode.min.js"
                                        }],
                                        style: []
                                    },
                                    store: c,
                                    router: r,
                                    nuxt: {
                                        defaultTransition: gt,
                                        transitions: [gt],
                                        setTransitions: function(t) {
                                            return Array.isArray(t) || (t = [t]), t = t.map((function(t) {
                                                return t = t ? "string" == typeof t ? Object.assign({}, gt, {
                                                    name: t
                                                }) : Object.assign({}, gt, t) : gt
                                            })), this.$options.nuxt.transitions = t, t
                                        },
                                        err: null,
                                        dateErr: null,
                                        error: function(t) {
                                            t = t || null, l.context._errored = Boolean(t), t = t ? Object(_.p)(t) : null;
                                            var n = l.nuxt;
                                            return this && (n = this.nuxt || this.$options.nuxt), n.dateErr = Date.now(), n.err = t, e && (e.nuxt.error = t), t
                                        }
                                    }
                                }, U), c.app = l, d = e ? e.next : function(t) {
                                    return l.router.push(t)
                                }, e ? h = r.resolve(e.url).route : (path = Object(_.f)(r.options.base, r.options.mode), h = r.resolve(path).route), t.next = 13, Object(_.t)(l, {
                                    store: c,
                                    route: h,
                                    next: d,
                                    error: l.nuxt.error.bind(l),
                                    payload: e ? e.payload : void 0,
                                    req: e ? e.req : void 0,
                                    res: e ? e.res : void 0,
                                    beforeRenderFns: e ? e.beforeRenderFns : void 0,
                                    ssrContext: e
                                });
                            case 13:
                                m("config", n), window.__NUXT__ && window.__NUXT__.state && c.replaceState(window.__NUXT__.state), l.context.enablePreview = function() {
                                    var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                                    l.previewData = Object.assign({}, t), m("preview", t)
                                }, t.next = 19;
                                break;
                            case 19:
                                if ("function" != typeof ft.a) {
                                    t.next = 22;
                                    break
                                }
                                return t.next = 22, ft()(l.context, m);
                            case 22:
                                return t.next = 25, vt(l.context);
                            case 25:
                                return l.context.enablePreview = function() {
                                    console.warn("You cannot call enablePreview() outside a plugin.")
                                }, t.next = 28, new Promise((function(t, e) {
                                    if (!r.resolve(l.context.route.fullPath).route.matched.length) return t();
                                    r.replace(l.context.route.fullPath, t, (function(n) {
                                        if (!n._isRouter) return e(n);
                                        if (2 !== n.type) return t();
                                        var c = r.afterEach(function() {
                                            var e = Object(o.a)(regeneratorRuntime.mark((function e(n, r) {
                                                return regeneratorRuntime.wrap((function(e) {
                                                    for (;;) switch (e.prev = e.next) {
                                                        case 0:
                                                            return e.next = 3, Object(_.j)(n);
                                                        case 3:
                                                            l.context.route = e.sent, l.context.params = n.params || {}, l.context.query = n.query || {}, c(), t();
                                                        case 8:
                                                        case "end":
                                                            return e.stop()
                                                    }
                                                }), e)
                                            })));
                                            return function(t, n) {
                                                return e.apply(this, arguments)
                                            }
                                        }())
                                    }))
                                }));
                            case 28:
                                return t.abrupt("return", {
                                    store: c,
                                    app: l,
                                    router: r
                                });
                            case 29:
                            case "end":
                                return t.stop()
                        }
                    }), t)
                }))), wt.apply(this, arguments)
            }
        },
        60: function(t, e, n) {
            "use strict";
            var r = {
                name: "NoSsr",
                functional: !0,
                props: {
                    placeholder: String,
                    placeholderTag: {
                        type: String,
                        default: "div"
                    }
                },
                render: function(t, e) {
                    var n = e.parent,
                        r = e.slots,
                        o = e.props,
                        c = r(),
                        f = c.default;
                    void 0 === f && (f = []);
                    var l = c.placeholder;
                    return n._isMounted ? f : (n.$once("hook:mounted", (function() {
                        n.$forceUpdate()
                    })), o.placeholderTag && (o.placeholder || l) ? t(o.placeholderTag, {
                        class: ["no-ssr-placeholder"]
                    }, o.placeholder || l) : f.length > 0 ? f.map((function() {
                        return t(!1)
                    })) : t(!1))
                }
            };
            t.exports = r
        }
    }
]);