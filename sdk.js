! function(e) {
    var t = {};

    function n(r) { if (t[r]) return t[r].exports; var o = t[r] = { i: r, l: !1, exports: {} }; return e[r].call(o.exports, o, o.exports, n), o.l = !0, o.exports }
    n.m = e, n.c = t, n.d = function(e, t, r) { n.o(e, t) || Object.defineProperty(e, t, { configurable: !1, enumerable: !0, get: r }) }, n.r = function(e) { Object.defineProperty(e, "__esModule", { value: !0 }) }, n.n = function(e) { var t = e && e.__esModule ? function() { return e.default } : function() { return e }; return n.d(t, "a", t), t }, n.o = function(e, t) { return Object.prototype.hasOwnProperty.call(e, t) }, n.p = "", n(n.s = 108)
}([, function(e, t, n) {
    "use strict";

    function r(e) { return (r = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) { return typeof e } : function(e) { return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e })(e) }
    var o = n(40),
        i = n(80),
        u = Object.prototype.toString;

    function a(e) { return "[object Array]" === u.call(e) }

    function s(e) { return null !== e && "object" === r(e) }

    function f(e) { return "[object Function]" === u.call(e) }

    function c(e, t) {
        if (null !== e && void 0 !== e)
            if ("object" === r(e) || a(e) || (e = [e]), a(e))
                for (var n = 0, o = e.length; n < o; n++) t.call(null, e[n], n, e);
            else
                for (var i in e) Object.prototype.hasOwnProperty.call(e, i) && t.call(null, e[i], i, e)
    }
    e.exports = {
        isArray: a,
        isArrayBuffer: function(e) { return "[object ArrayBuffer]" === u.call(e) },
        isBuffer: i,
        isFormData: function(e) { return "undefined" != typeof FormData && e instanceof FormData },
        isArrayBufferView: function(e) { return "undefined" != typeof ArrayBuffer && ArrayBuffer.isView ? ArrayBuffer.isView(e) : e && e.buffer && e.buffer instanceof ArrayBuffer },
        isString: function(e) { return "string" == typeof e },
        isNumber: function(e) { return "number" == typeof e },
        isObject: s,
        isUndefined: function(e) { return void 0 === e },
        isDate: function(e) { return "[object Date]" === u.call(e) },
        isFile: function(e) { return "[object File]" === u.call(e) },
        isBlob: function(e) { return "[object Blob]" === u.call(e) },
        isFunction: f,
        isStream: function(e) { return s(e) && f(e.pipe) },
        isURLSearchParams: function(e) { return "undefined" != typeof URLSearchParams && e instanceof URLSearchParams },
        isStandardBrowserEnv: function() { return ("undefined" == typeof navigator || "ReactNative" !== navigator.product) && "undefined" != typeof window && "undefined" != typeof document },
        forEach: c,
        merge: function e() {
            var t = {};

            function n(n, o) { "object" === r(t[o]) && "object" === r(n) ? t[o] = e(t[o], n) : t[o] = n }
            for (var o = 0, i = arguments.length; o < i; o++) c(arguments[o], n);
            return t
        },
        extend: function(e, t, n) { return c(t, function(t, r) { e[r] = n && "function" == typeof t ? o(t, n) : t }), e },
        trim: function(e) { return e.replace(/^\s*/, "").replace(/\s*$/, "") }
    }
}, , function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 }), t.default = function(e, t) { var n = new Error(t); return n.code = e, n }
}, , , , , , , , , function(e, t) {
    e.exports = {
        pull: function(e) {
            try {
                var t = JSON.parse(sessionStorage.getItem("liffinfo"));
                e._auth = t._auth, e._features = t._features
            } catch (e) {}
        },
        push: function(e) { try { sessionStorage.setItem("liffinfo", JSON.stringify({ _auth: e._auth, _features: e._features })) } catch (e) { console.log(e) } }
    }
}, , , , , , function(e, t, n) {
    "use strict";
    (function(t) {
        var r = n(1),
            o = n(77),
            i = { "Content-Type": "application/x-www-form-urlencoded" };

        function u(e, t) {!r.isUndefined(e) && r.isUndefined(e["Content-Type"]) && (e["Content-Type"] = t) }
        var a, s = {
            adapter: ("undefined" != typeof XMLHttpRequest ? a = n(39) : void 0 !== t && (a = n(39)), a),
            transformRequest: [function(e, t) { return o(t, "Content-Type"), r.isFormData(e) || r.isArrayBuffer(e) || r.isBuffer(e) || r.isStream(e) || r.isFile(e) || r.isBlob(e) ? e : r.isArrayBufferView(e) ? e.buffer : r.isURLSearchParams(e) ? (u(t, "application/x-www-form-urlencoded;charset=utf-8"), e.toString()) : r.isObject(e) ? (u(t, "application/json;charset=utf-8"), JSON.stringify(e)) : e }],
            transformResponse: [function(e) {
                if ("string" == typeof e) try { e = JSON.parse(e) } catch (e) {}
                return e
            }],
            timeout: 0,
            xsrfCookieName: "XSRF-TOKEN",
            xsrfHeaderName: "X-XSRF-TOKEN",
            maxContentLength: -1,
            validateStatus: function(e) { return e >= 200 && e < 300 }
        };
        s.headers = { common: { Accept: "application/json, text/plain, */*" } }, r.forEach(["delete", "get", "head"], function(e) { s.headers[e] = {} }), r.forEach(["post", "put", "patch"], function(e) { s.headers[e] = r.merge(i) }), e.exports = s
    }).call(this, n(78))
}, function(e, t, n) {
    "use strict";
    var r = n(91)();
    e.exports = function(e) { return e !== r && null !== e }
}, function(e, t) {
    function n(e) { return (n = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) { return typeof e } : function(e) { return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e })(e) }
    var r = ["userId", "type", "groupId", "roomId", "utouId", "squareId", "squareMemberId", "squareChatId", "viewType", "accessTokenHash"];
    t.parse = function(e) {
        for (var t = e.substr(1).split("&"), n = {}, o = 0; o < t.length; o++) {
            var i = t[o].split("=");
            n[i[0]] = decodeURIComponent(i[1])
        }
        var u = null;
        if (n.context_token) {
            u = {};
            for (var a = this.parseContextToken(n.context_token), s = 0; s < r.length; s++) {
                var f = r[s];
                u[f] = a[f]
            }
        }
        var c = { accessToken: n.access_token, featureToken: n.feature_token, context: u };
        return this.valid(c)
    }, t.parseContextToken = function(e) { try { var t = e.split(".")[1]; return JSON.parse(window.atob(t)) } catch (e) { console.error("invalid context_token") } }, t.valid = function(e) { if ("string" != typeof e.accessToken) throw new Error; if ("string" != typeof e.featureToken) throw new Error; return "object" === ("undefined" == typeof context ? "undefined" : n(context)) && r.map(function(t) { if ("string" != typeof e.context[t]) throw new Error }), e }
}, function(e, t, n) {
    var r = n(20),
        o = n(12),
        i = (n(3).default, { _auth: null, _features: [] });
    o.pull(i);
    try {
        var u = r.parse(location.hash);
        delete u.context.accessTokenHash, i._auth = u
    } catch (e) {}
    o.push(i);
    var a, s = [],
        f = !1;
    if (window.addEventListener("liffEvent", function e(t) {
            (f = i._runTasks(s)) && window.removeEventListener("liffEvent", e, !1)
        }, !1), !window.CustomEvent) {
        var c = function(e, t) { var n; return t = t || { bubbles: !1, cancelable: !1, detail: void 0 }, (n = document.createEvent("CustomEvent")).initCustomEvent(e, t.bubbles, t.cancelable, t.detail), n };
        c.prototype = window.Event.prototype, window.CustomEvent = c
    }
    i.postMessage = function(e, t, n, r) {
        var o = n || "";
        try {
            var u = JSON.stringify(r);
            f ? window._liff.postMessage(e, t, o, u) : s.push([e, o, u])
        } catch (e) { i._dispatchErrorEvent(e) }
    }, i._runTasks = function(e) {
        if (window._liff && window._liff.postMessage) {
            for (; e.length > 0;) {
                var t = e.shift();
                window._liff.postMessage(t[0], t[1], t[2])
            }
            return !0
        }
        return !1
    }, i._createNativeMessageEvent = function(e) { return new CustomEvent("liffEvent", { detail: e }) }, i._dispatchEvent = function(e) {
        var t = {};
        try {
            if ("ready" === (t = JSON.parse(e)).type) {
                if (t.language || (t.language = "[object Array]" === Object.prototype.toString.call(navigator.languages) ? navigator.languages[0] : navigator.language), a) return;
                a = !0, t.auth = i._auth
            }
            var n = i._createNativeMessageEvent(t);
            window.dispatchEvent(n)
        } catch (e) { i._dispatchErrorEvent(e) }
    }, i._dispatchErrorEvent = function(e) {
        var t = e + "",
            n = i._createNativeMessageEvent({ type: "error", callbackId: "", data: {}, error: { message: t } });
        window.dispatchEvent(n)
    }, window.liff = i
}, function(e, t, n) {
    "use strict";
    n(21), liff.init = function() { "function" == typeof(arguments.length <= 0 ? void 0 : arguments[0]) && (liff._init = arguments.length <= 0 ? void 0 : arguments[0]), "function" == typeof(arguments.length <= 1 ? void 0 : arguments[1]) && (liff._initErrorHandler = arguments.length <= 1 ? void 0 : arguments[1]), liff._error && liff._initErrorHandler && liff._initErrorHandler(liff._error), liff._init && liff._initData && (liff._init(liff._initData), delete liff._init) }
}, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 }), t.default = function() { var e = window.navigator.userAgent.toLowerCase(); if (/iphone|ipad|ipod/.test(e)) return "ios"; if (/android/.test(e)) return "android"; return "other" }
}, , , , , , , , , , , , , function(e, t, n) {
    "use strict";

    function r(e) { this.message = e }
    r.prototype.toString = function() { return "Cancel" + (this.message ? ": " + this.message : "") }, r.prototype.__CANCEL__ = !0, e.exports = r
}, function(e, t, n) {
    "use strict";
    e.exports = function(e) { return !(!e || !e.__CANCEL__) }
}, function(e, t, n) {
    "use strict";
    var r = n(75);
    e.exports = function(e, t, n, o, i) { var u = new Error(e); return r(u, t, n, o, i) }
}, function(e, t, n) {
    "use strict";
    var r = n(1),
        o = n(76),
        i = n(74),
        u = n(73),
        a = n(72),
        s = n(38),
        f = "undefined" != typeof window && window.btoa && window.btoa.bind(window) || n(71);
    e.exports = function(e) {
        return new Promise(function(t, c) {
            var l = e.data,
                d = e.headers;
            r.isFormData(l) && delete d["Content-Type"];
            var p = new XMLHttpRequest,
                h = "onreadystatechange",
                v = !1;
            if ("undefined" == typeof window || !window.XDomainRequest || "withCredentials" in p || a(e.url) || (p = new window.XDomainRequest, h = "onload", v = !0, p.onprogress = function() {}, p.ontimeout = function() {}), e.auth) {
                var y = e.auth.username || "",
                    _ = e.auth.password || "";
                d.Authorization = "Basic " + f(y + ":" + _)
            }
            if (p.open(e.method.toUpperCase(), i(e.url, e.params, e.paramsSerializer), !0), p.timeout = e.timeout, p[h] = function() {
                    if (p && (4 === p.readyState || v) && (0 !== p.status || p.responseURL && 0 === p.responseURL.indexOf("file:"))) {
                        var n = "getAllResponseHeaders" in p ? u(p.getAllResponseHeaders()) : null,
                            r = { data: e.responseType && "text" !== e.responseType ? p.response : p.responseText, status: 1223 === p.status ? 204 : p.status, statusText: 1223 === p.status ? "No Content" : p.statusText, headers: n, config: e, request: p };
                        o(t, c, r), p = null
                    }
                }, p.onerror = function() { c(s("Network Error", e, null, p)), p = null }, p.ontimeout = function() { c(s("timeout of " + e.timeout + "ms exceeded", e, "ECONNABORTED", p)), p = null }, r.isStandardBrowserEnv()) {
                var m = n(70),
                    g = (e.withCredentials || a(e.url)) && e.xsrfCookieName ? m.read(e.xsrfCookieName) : void 0;
                g && (d[e.xsrfHeaderName] = g)
            }
            if ("setRequestHeader" in p && r.forEach(d, function(e, t) { void 0 === l && "content-type" === t.toLowerCase() ? delete d[t] : p.setRequestHeader(t, e) }), e.withCredentials && (p.withCredentials = !0), e.responseType) try { p.responseType = e.responseType } catch (t) { if ("json" !== e.responseType) throw t }
            "function" == typeof e.onDownloadProgress && p.addEventListener("progress", e.onDownloadProgress), "function" == typeof e.onUploadProgress && p.upload && p.upload.addEventListener("progress", e.onUploadProgress), e.cancelToken && e.cancelToken.promise.then(function(e) { p && (p.abort(), c(e), p = null) }), void 0 === l && (l = null), p.send(l)
        })
    }
}, function(e, t, n) {
    "use strict";
    e.exports = function(e, t) { return function() { for (var n = new Array(arguments.length), r = 0; r < n.length; r++) n[r] = arguments[r]; return e.apply(t, n) } }
}, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 }), t.default = void 0;
    var r = {
        liffVersionMapping: [
            ["1.0.0", "0.0.0", "0.0.0"]
        ],
        JS_BASE: "https://d.line-scdn.net/n/liff"
    };
    t.default = r
}, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 }), t.default = function(e, t, n) {
        var r = document.createElement("script");
        r.src = e, t && (r.onload = t), n && (r.onerror = n), document.getElementsByTagName("head")[0].appendChild(r)
    }
}, , , , , , , , , , , , , , , , function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 }), t.default = function(e) { return liff._xhr.post("/message/v3/share", { messages: e }) }
}, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 }), t.default = function() { return liff._xhr.get("/v2/profile").then(function(e) { return e.data }) }
}, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 }), t.default = function() { return new Promise(function(e, t) { liff._call("getAdvertisingId", null, function(n) { n.detail.error ? t(n.detail.error) : e(n.detail.data.advertisingId) }) }) }
}, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 }), t.default = function() { liff._call("closeWindow") }
}, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 }), t.default = function(e) {
        if (!e || "string" != typeof e.url || void 0 !== e.external && "boolean" != typeof e.external) throw (0, o.default)("INVALID_ARGUMENT", "Invalid parameters for liff.openWindow()");
        liff._call("openWindow", e)
    };
    var r, o = (r = n(3)) && r.__esModule ? r : { default: r }
}, function(e, t, n) {
    "use strict";
    e.exports = function(e) { return function(t) { return e.apply(null, t) } }
}, function(e, t, n) {
    "use strict";
    var r = n(36);

    function o(e) {
        if ("function" != typeof e) throw new TypeError("executor must be a function.");
        var t;
        this.promise = new Promise(function(e) { t = e });
        var n = this;
        e(function(e) { n.reason || (n.reason = new r(e), t(n.reason)) })
    }
    o.prototype.throwIfRequested = function() { if (this.reason) throw this.reason }, o.source = function() { var e; return { token: new o(function(t) { e = t }), cancel: e } }, e.exports = o
}, function(e, t, n) {
    "use strict";
    e.exports = function(e, t) { return t ? e.replace(/\/+$/, "") + "/" + t.replace(/^\/+/, "") : e }
}, function(e, t, n) {
    "use strict";
    e.exports = function(e) { return /^([a-z][a-z\d\+\-\.]*:)?\/\//i.test(e) }
}, function(e, t, n) {
    "use strict";
    var r = n(1);
    e.exports = function(e, t, n) { return r.forEach(n, function(n) { e = n(e, t) }), e }
}, function(e, t, n) {
    "use strict";
    var r = n(1),
        o = n(67),
        i = n(37),
        u = n(18);

    function a(e) { e.cancelToken && e.cancelToken.throwIfRequested() }
    e.exports = function(e) { return a(e), e.headers = e.headers || {}, e.data = o(e.data, e.headers, e.transformRequest), e.headers = r.merge(e.headers.common || {}, e.headers[e.method] || {}, e.headers || {}), r.forEach(["delete", "get", "head", "post", "put", "patch", "common"], function(t) { delete e.headers[t] }), (e.adapter || u.adapter)(e).then(function(t) { return a(e), t.data = o(t.data, t.headers, e.transformResponse), t }, function(t) { return i(t) || (a(e), t && t.response && (t.response.data = o(t.response.data, t.response.headers, e.transformResponse))), Promise.reject(t) }) }
}, function(e, t, n) {
    "use strict";
    var r = n(1);

    function o() { this.handlers = [] }
    o.prototype.use = function(e, t) { return this.handlers.push({ fulfilled: e, rejected: t }), this.handlers.length - 1 }, o.prototype.eject = function(e) { this.handlers[e] && (this.handlers[e] = null) }, o.prototype.forEach = function(e) { r.forEach(this.handlers, function(t) { null !== t && e(t) }) }, e.exports = o
}, function(e, t, n) {
    "use strict";
    var r = n(1);
    e.exports = r.isStandardBrowserEnv() ? {
        write: function(e, t, n, o, i, u) {
            var a = [];
            a.push(e + "=" + encodeURIComponent(t)), r.isNumber(n) && a.push("expires=" + new Date(n).toGMTString()), r.isString(o) && a.push("path=" + o), r.isString(i) && a.push("domain=" + i), !0 === u && a.push("secure"), document.cookie = a.join("; ")
        },
        read: function(e) { var t = document.cookie.match(new RegExp("(^|;\\s*)(" + e + ")=([^;]*)")); return t ? decodeURIComponent(t[3]) : null },
        remove: function(e) { this.write(e, "", Date.now() - 864e5) }
    } : { write: function() {}, read: function() { return null }, remove: function() {} }
}, function(e, t, n) {
    "use strict";
    var r = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";

    function o() { this.message = "String contains an invalid character" }
    o.prototype = new Error, o.prototype.code = 5, o.prototype.name = "InvalidCharacterError", e.exports = function(e) {
        for (var t, n, i = String(e), u = "", a = 0, s = r; i.charAt(0 | a) || (s = "=", a % 1); u += s.charAt(63 & t >> 8 - a % 1 * 8)) {
            if ((n = i.charCodeAt(a += .75)) > 255) throw new o;
            t = t << 8 | n
        }
        return u
    }
}, function(e, t, n) {
    "use strict";
    var r = n(1);
    e.exports = r.isStandardBrowserEnv() ? function() {
        var e, t = /(msie|trident)/i.test(navigator.userAgent),
            n = document.createElement("a");

        function o(e) { var r = e; return t && (n.setAttribute("href", r), r = n.href), n.setAttribute("href", r), { href: n.href, protocol: n.protocol ? n.protocol.replace(/:$/, "") : "", host: n.host, search: n.search ? n.search.replace(/^\?/, "") : "", hash: n.hash ? n.hash.replace(/^#/, "") : "", hostname: n.hostname, port: n.port, pathname: "/" === n.pathname.charAt(0) ? n.pathname : "/" + n.pathname } }
        return e = o(window.location.href),
            function(t) { var n = r.isString(t) ? o(t) : t; return n.protocol === e.protocol && n.host === e.host }
    }() : function() { return !0 }
}, function(e, t, n) {
    "use strict";
    var r = n(1);
    e.exports = function(e) { var t, n, o, i = {}; return e ? (r.forEach(e.split("\n"), function(e) { o = e.indexOf(":"), t = r.trim(e.substr(0, o)).toLowerCase(), n = r.trim(e.substr(o + 1)), t && (i[t] = i[t] ? i[t] + ", " + n : n) }), i) : i }
}, function(e, t, n) {
    "use strict";
    var r = n(1);

    function o(e) { return encodeURIComponent(e).replace(/%40/gi, "@").replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, "+").replace(/%5B/gi, "[").replace(/%5D/gi, "]") }
    e.exports = function(e, t, n) {
        if (!t) return e;
        var i;
        if (n) i = n(t);
        else if (r.isURLSearchParams(t)) i = t.toString();
        else {
            var u = [];
            r.forEach(t, function(e, t) { null !== e && void 0 !== e && (r.isArray(e) && (t += "[]"), r.isArray(e) || (e = [e]), r.forEach(e, function(e) { r.isDate(e) ? e = e.toISOString() : r.isObject(e) && (e = JSON.stringify(e)), u.push(o(t) + "=" + o(e)) })) }), i = u.join("&")
        }
        return i && (e += (-1 === e.indexOf("?") ? "?" : "&") + i), e
    }
}, function(e, t, n) {
    "use strict";
    e.exports = function(e, t, n, r, o) { return e.config = t, n && (e.code = n), e.request = r, e.response = o, e }
}, function(e, t, n) {
    "use strict";
    var r = n(38);
    e.exports = function(e, t, n) {
        var o = n.config.validateStatus;
        n.status && o && !o(n.status) ? t(r("Request failed with status code " + n.status, n.config, null, n.request, n)) : e(n)
    }
}, function(e, t, n) {
    "use strict";
    var r = n(1);
    e.exports = function(e, t) { r.forEach(e, function(n, r) { r !== t && r.toUpperCase() === t.toUpperCase() && (e[t] = n, delete e[r]) }) }
}, function(e, t) {
    var n, r, o = e.exports = {};

    function i() { throw new Error("setTimeout has not been defined") }

    function u() { throw new Error("clearTimeout has not been defined") }

    function a(e) { if (n === setTimeout) return setTimeout(e, 0); if ((n === i || !n) && setTimeout) return n = setTimeout, setTimeout(e, 0); try { return n(e, 0) } catch (t) { try { return n.call(null, e, 0) } catch (t) { return n.call(this, e, 0) } } }! function() { try { n = "function" == typeof setTimeout ? setTimeout : i } catch (e) { n = i } try { r = "function" == typeof clearTimeout ? clearTimeout : u } catch (e) { r = u } }();
    var s, f = [],
        c = !1,
        l = -1;

    function d() { c && s && (c = !1, s.length ? f = s.concat(f) : l = -1, f.length && p()) }

    function p() {
        if (!c) {
            var e = a(d);
            c = !0;
            for (var t = f.length; t;) {
                for (s = f, f = []; ++l < t;) s && s[l].run();
                l = -1, t = f.length
            }
            s = null, c = !1,
                function(e) { if (r === clearTimeout) return clearTimeout(e); if ((r === u || !r) && clearTimeout) return r = clearTimeout, clearTimeout(e); try { r(e) } catch (t) { try { return r.call(null, e) } catch (t) { return r.call(this, e) } } }(e)
        }
    }

    function h(e, t) { this.fun = e, this.array = t }

    function v() {}
    o.nextTick = function(e) {
        var t = new Array(arguments.length - 1);
        if (arguments.length > 1)
            for (var n = 1; n < arguments.length; n++) t[n - 1] = arguments[n];
        f.push(new h(e, t)), 1 !== f.length || c || a(p)
    }, h.prototype.run = function() { this.fun.apply(null, this.array) }, o.title = "browser", o.browser = !0, o.env = {}, o.argv = [], o.version = "", o.versions = {}, o.on = v, o.addListener = v, o.once = v, o.off = v, o.removeListener = v, o.removeAllListeners = v, o.emit = v, o.prependListener = v, o.prependOnceListener = v, o.listeners = function(e) { return [] }, o.binding = function(e) { throw new Error("process.binding is not supported") }, o.cwd = function() { return "/" }, o.chdir = function(e) { throw new Error("process.chdir is not supported") }, o.umask = function() { return 0 }
}, function(e, t, n) {
    "use strict";
    var r = n(18),
        o = n(1),
        i = n(69),
        u = n(68),
        a = n(66),
        s = n(65);

    function f(e) { this.defaults = e, this.interceptors = { request: new i, response: new i } }
    f.prototype.request = function(e) {
        "string" == typeof e && (e = o.merge({ url: arguments[0] }, arguments[1])), (e = o.merge(r, this.defaults, { method: "get" }, e)).method = e.method.toLowerCase(), e.baseURL && !a(e.url) && (e.url = s(e.baseURL, e.url));
        var t = [u, void 0],
            n = Promise.resolve(e);
        for (this.interceptors.request.forEach(function(e) { t.unshift(e.fulfilled, e.rejected) }), this.interceptors.response.forEach(function(e) { t.push(e.fulfilled, e.rejected) }); t.length;) n = n.then(t.shift(), t.shift());
        return n
    }, o.forEach(["delete", "get", "head", "options"], function(e) { f.prototype[e] = function(t, n) { return this.request(o.merge(n || {}, { method: e, url: t })) } }), o.forEach(["post", "put", "patch"], function(e) { f.prototype[e] = function(t, n, r) { return this.request(o.merge(r || {}, { method: e, url: t, data: n })) } }), e.exports = f
}, function(e, t) {
    function n(e) { return !!e.constructor && "function" == typeof e.constructor.isBuffer && e.constructor.isBuffer(e) }
    /*!
     * Determine if an object is a Buffer
     *
     * @author   Feross Aboukhadijeh <https://feross.org>
     * @license  MIT
     */
    e.exports = function(e) { return null != e && (n(e) || function(e) { return "function" == typeof e.readFloatLE && "function" == typeof e.slice && n(e.slice(0, 0)) }(e) || !!e._isBuffer) }
}, function(e, t, n) {
    "use strict";
    var r = n(1),
        o = n(40),
        i = n(79),
        u = n(18);

    function a(e) {
        var t = new i(e),
            n = o(i.prototype.request, t);
        return r.extend(n, i.prototype, t), r.extend(n, t), n
    }
    var s = a(u);
    s.Axios = i, s.create = function(e) { return a(r.merge(u, e)) }, s.Cancel = n(36), s.CancelToken = n(64), s.isCancel = n(37), s.all = function(e) { return Promise.all(e) }, s.spread = n(63), e.exports = s, e.exports.default = s
}, function(e, t, n) { e.exports = n(81) }, function(e, t, n) {
    "use strict";
    var r = l(n(82)),
        o = l(n(3)),
        i = l(n(12)),
        u = l(n(62)),
        a = l(n(61)),
        s = l(n(60)),
        f = l(n(59)),
        c = l(n(58));

    function l(e) { return e && e.__esModule ? e : { default: e } }
    liff._addListener("ready", function(e) {
        liff._xhr = r.default.create({ baseURL: "https://api.line".concat("", ".me/"), headers: { Authorization: "Bearer " + liff._auth.accessToken, "Content-Type": "application/json" } }), liff.getProfile = f.default, liff.sendMessages = c.default, liff.getAccessToken = function() { return (liff._auth || {}).accessToken || null }, liff._features = e.detail.data.features, i.default.push(liff), liff._features.forEach(function(e) {
            switch (e) {
                case "openWindow":
                    liff.openWindow = u.default;
                    break;
                case "closeWindow":
                    liff.closeWindow = a.default;
                    break;
                case "getAdvertisingId":
                    liff.getAdvertisingId = s.default
            }
        });
        var t = e.detail.auth.context;
        liff._initData = { language: e.detail.language, context: t }, liff._init && (liff._init(liff._initData), delete liff._init)
    }), liff._auth || (liff._error = (0, o.default)("INIT_FAILED", "Could not authenticate LIFF app"), liff._initErrorHandler && liff._initErrorHandler(liff._error))
}, function(e, t, n) {
    "use strict";
    e.exports = function(e) { if ("function" != typeof e) throw new TypeError(e + " is not a function"); return e }
}, function(e, t, n) {
    "use strict";
    var r = String.prototype.indexOf;
    e.exports = function(e) { return r.call(this, e, arguments[1]) > -1 }
}, function(e, t, n) {
    "use strict";
    var r = "razdwatrzy";
    e.exports = function() { return "function" == typeof r.contains && (!0 === r.contains("dwa") && !1 === r.contains("foo")) }
}, function(e, t, n) {
    "use strict";
    e.exports = n(86)() ? String.prototype.contains : n(85)
}, function(e, t, n) {
    "use strict";
    e.exports = function(e) { return "function" == typeof e }
}, function(e, t, n) {
    "use strict";
    var r = n(19),
        o = Array.prototype.forEach,
        i = Object.create;
    e.exports = function(e) { var t = i(null); return o.call(arguments, function(e) { r(e) && function(e, t) { var n; for (n in e) t[n] = e[n] }(Object(e), t) }), t }
}, function(e, t, n) {
    "use strict";
    var r = n(19);
    e.exports = function(e) { if (!r(e)) throw new TypeError("Cannot use null or undefined"); return e }
}, function(e, t, n) {
    "use strict";
    e.exports = function() {}
}, function(e, t, n) {
    "use strict";
    var r = n(19),
        o = Object.keys;
    e.exports = function(e) { return o(r(e) ? Object(e) : e) }
}, function(e, t, n) {
    "use strict";
    e.exports = function() { try { return Object.keys("primitive"), !0 } catch (e) { return !1 } }
}, function(e, t, n) {
    "use strict";
    e.exports = n(93)() ? Object.keys : n(92)
}, function(e, t, n) {
    "use strict";
    var r = n(94),
        o = n(90),
        i = Math.max;
    e.exports = function(e, t) { var n, u, a, s = i(arguments.length, 2); for (e = Object(o(e)), a = function(r) { try { e[r] = t[r] } catch (e) { n || (n = e) } }, u = 1; u < s; ++u) t = arguments[u], r(t).forEach(a); if (void 0 !== n) throw n; return e }
}, function(e, t, n) {
    "use strict";
    e.exports = function() { var e, t = Object.assign; return "function" == typeof t && (t(e = { foo: "raz" }, { bar: "dwa" }, { trzy: "trzy" }), e.foo + e.bar + e.trzy === "razdwatrzy") }
}, function(e, t, n) {
    "use strict";
    e.exports = n(96)() ? Object.assign : n(95)
}, function(e, t, n) {
    "use strict";
    var r = n(97),
        o = n(89),
        i = n(88),
        u = n(87);
    (e.exports = function(e, t) { var n, i, a, s, f; return arguments.length < 2 || "string" != typeof e ? (s = t, t = e, e = null) : s = arguments[2], null == e ? (n = a = !0, i = !1) : (n = u.call(e, "c"), i = u.call(e, "e"), a = u.call(e, "w")), f = { value: t, configurable: n, enumerable: i, writable: a }, s ? r(o(s), f) : f }).gs = function(e, t, n) { var a, s, f, c; return "string" != typeof e ? (f = n, n = t, t = e, e = null) : f = arguments[3], null == t ? t = void 0 : i(t) ? null == n ? n = void 0 : i(n) || (f = n, n = void 0) : (f = t, t = n = void 0), null == e ? (a = !0, s = !1) : (a = u.call(e, "c"), s = u.call(e, "e")), c = { get: t, set: n, configurable: a, enumerable: s }, f ? r(o(f), c) : c }
}, function(e, t, n) {
    "use strict";

    function r(e) { return (r = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) { return typeof e } : function(e) { return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e })(e) }
    var o, i, u, a, s, f, c, l = n(98),
        d = n(84),
        p = Function.prototype.apply,
        h = Function.prototype.call,
        v = Object.create,
        y = Object.defineProperty,
        _ = Object.defineProperties,
        m = Object.prototype.hasOwnProperty,
        g = { configurable: !0, enumerable: !1, writable: !0 };
    s = {
        on: o = function(e, t) { var n; return d(t), m.call(this, "__ee__") ? n = this.__ee__ : (n = g.value = v(null), y(this, "__ee__", g), g.value = null), n[e] ? "object" === r(n[e]) ? n[e].push(t) : n[e] = [n[e], t] : n[e] = t, this },
        once: i = function(e, t) { var n, r; return d(t), r = this, o.call(this, e, n = function() { u.call(r, e, n), p.call(t, this, arguments) }), n.__eeOnceListener__ = t, this },
        off: u = function(e, t) {
            var n, o, i, u;
            if (d(t), !m.call(this, "__ee__")) return this;
            if (!(n = this.__ee__)[e]) return this;
            if ("object" === r(o = n[e]))
                for (u = 0; i = o[u]; ++u) i !== t && i.__eeOnceListener__ !== t || (2 === o.length ? n[e] = o[u ? 0 : 1] : o.splice(u, 1));
            else o !== t && o.__eeOnceListener__ !== t || delete n[e];
            return this
        },
        emit: a = function(e) {
            var t, n, o, i, u;
            if (m.call(this, "__ee__") && (i = this.__ee__[e]))
                if ("object" === r(i)) { for (n = arguments.length, u = new Array(n - 1), t = 1; t < n; ++t) u[t - 1] = arguments[t]; for (i = i.slice(), t = 0; o = i[t]; ++t) p.call(o, this, u) } else switch (arguments.length) {
                    case 1:
                        h.call(i, this);
                        break;
                    case 2:
                        h.call(i, this, arguments[1]);
                        break;
                    case 3:
                        h.call(i, this, arguments[1], arguments[2]);
                        break;
                    default:
                        for (n = arguments.length, u = new Array(n - 1), t = 1; t < n; ++t) u[t - 1] = arguments[t];
                        p.call(i, this, u)
                }
        }
    }, f = { on: l(o), once: l(i), off: l(u), emit: l(a) }, c = _({}, f), e.exports = t = function(e) { return null == e ? v(c) : _(Object(e), f) }, t.methods = s
}, function(e, t, n) {
    "use strict";
    var r;
    Object.defineProperty(t, "__esModule", { value: !0 }), t.default = void 0;
    var o = new(((r = n(99)) && r.__esModule ? r : { default: r }).default);
    t.default = o
}, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 }), t.EVENT_PLUGIN_CREATED = void 0;
    t.EVENT_PLUGIN_CREATED = "plugin-created"
}, function(e, t, n) {
    "use strict";
    var r = n(101),
        o = a(n(100)),
        i = a(n(42)),
        u = a(n(41));

    function a(e) { return e && e.__esModule ? e : { default: e } }
    var s = (0, a(n(23)).default)(),
        f = { bluetooth: { featureName: "bluetoothLeFunction", shouldIgnore: !1 }, advertisement: { shouldIgnore: !0 } };
    liff._registerPlugin = function(e, t) { t.then(function(t) { liff[e] = t, o.default.emit(r.EVENT_PLUGIN_CREATED, { name: e, success: !0 }) }).catch(function(t) { o.default.emit(r.EVENT_PLUGIN_CREATED, { name: e, success: !1, error: t }) }) };
    liff.initPlugins = function(e) {
        var t = function(e) { var t = e.filter(function(e) { return !f[e] }); if (t.length > 0) return { code: "UNSUPPORTED_PLUGINS", message: "The following plugins are not supported: ".concat(t.join(",")) }; var n = e.filter(function(e) { return !f[e].shouldIgnore }).filter(function(e) { return -1 === liff._features.indexOf(f[e].featureName) }); return n.length > 0 ? { code: "UNSUPPORTED_PLUGINS", message: "The following plugins are not permitted: ".concat(n.join(",")) } : void 0 }(e);
        return t ? Promise.reject(t) : new Promise(function(t, n) {
            var a = e.length,
                f = [];
            o.default.on(r.EVENT_PLUGIN_CREATED, function e(i) { a -= 1, i.success || f.push(i.error), 0 === a && (f.length ? n(f) : t(), o.default.off(r.EVENT_PLUGIN_CREATED, e)) }), e.forEach(function(e) {
                (0, i.default)("".concat(u.default.JS_BASE, "/").concat(liff._version, "/").concat(s, "/").concat(liff._nativeVersion, "/plugins/").concat(e, "_").concat(liff._revision, ".js"))
            })
        })
    }
}, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 }), t.default = void 0;
    var r = 0,
        o = { get: function() { return ++r }, current: function() { return r } };
    t.default = o
}, function(e, t, n) {
    "use strict";
    var r = i(n(103)),
        o = i(n(3));

    function i(e) { return e && e.__esModule ? e : { default: e } }
    var u = {},
        a = {};
    liff._call = function(e, t, n, o) {
        var i = r.default.get(),
            u = { success: n, error: o };
        return a[i] = u, liff.postMessage(e, liff._auth.featureToken, i, t), i
    }, liff._addListener = function(e, t, n) { if (u[e] || (u[e] = []), n && n.once) { u[e].push(function n(r) { liff._removeListener(e, n), t(r) }) } else u[e].push(t) }, liff._removeListener = function(e, t) {
        var n = u[e].indexOf(t);
        n > -1 && u[e].splice(n, 1)
    }, window.addEventListener("liffEvent", function(e) {
        var t = e.detail.callbackId;
        if (t && a[t]) {
            var n = a[t];
            e.detail.error ? n.error && n.error((0, o.default)(e.detail.error.code, e.detail.error.description)) : n.success && n.success(e)
        }
        var r = e.detail.type;
        r && u[r] && u[r].forEach(function(t) { return t(e) })
    }, !1)
}, function(e, t, n) {
    "use strict";
    n(104), n(102), n(83)
}, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 }), t.default = function(e) {
        var t = (0, o.default)();
        if ("other" === t) return e[e.length - 1][0];
        var n = e.map(function(e) { return e.map(i) }),
            r = n[0][0],
            u = navigator.userAgent.toLowerCase().match(/line\/([\d|\.]+)/);
        if (u)
            for (var a = i(u[1]), s = "ios" === t ? 1 : 2, f = 0, c = n.length; f < c && (a[0] >= n[f][s][0] && a[1] >= n[f][s][1] && a[2] >= n[f][s][2]); f++) r = n[f][0];
        else r = n[n.length - 1][0];
        return r.join(".")
    }, t.parseVersionToArray = void 0;
    var r, o = (r = n(23)) && r.__esModule ? r : { default: r };
    var i = function(e) { for (var t = e.split(".").map(Number); t.length < 3;) t.push(0); return t };
    t.parseVersionToArray = i
}, function(e, t, n) {
    "use strict";
    var r = s(n(42)),
        o = s(n(23)),
        i = s(n(106)),
        u = s(n(41)),
        a = s(n(3));

    function s(e) { return e && e.__esModule ? e : { default: e } }
    n(22), n(105), liff._version = "1.0", liff._nativeVersion = (0, i.default)(u.default.liffVersionMapping);
    liff._revision = 1548816639843;
    "function" != typeof window.Promise && function(e, t, n) {
        var i = (0, o.default)();
        (0, r.default)("".concat(u.default.JS_BASE, "/").concat(liff._version, "/").concat(i, "/").concat(liff._nativeVersion, "/").concat(e, "_").concat(1548816639843, ".js"), t, n)
    }("plugins/promise", null, function() { liff._error = (0, a.default)("INIT_FAILED", "Failed to init LIFF SDK"), liff._initErrorHandler && liff._initErrorHandler(liff._error) })
}, function(e, t, n) { e.exports = n(107) }]);