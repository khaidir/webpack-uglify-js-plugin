webpackJsonp([20], [function(e, t, n) {
    (function(e) { "use strict";

        function t(e) {
            return e && e.__esModule ? e : { default: e } }
        var r = n(512),
            i = t(r),
            a = n(197),
            o = t(a),
            s = n(837),
            c = t(s);
        n(342);
        var u = n(843),
            l = t(u),
            d = n(844),
            p = t(d);
        n(706);
        var f = function() { e("*", i.default.common.checkNewVersion, i.default.common.setPageType), e("/desktop", i.default.list.render), e.exit("/desktop", i.default.common.exit), e("/recent", i.default.list.render), e.exit("/recent", i.default.common.exit), e("/favorites", i.default.list.render), e.exit("/favorites", i.default.common.exit), e("/folder/:guid", i.default.list.render), e.exit("/folder/:guid", i.default.common.exit), e("/team/:guid/files", i.default.list.render), e.exit("/team/:guid/files", i.default.common.exit), e("/doc/:guid", i.default.doc.init), e.exit("/doc/:guid", i.default.common.exit), e("/spreadsheet/:guid/:sheetId?", i.default.spreadsheet.init), e.exit("/spreadsheet/:guid/:sheetId?", i.default.common.exit), e() },
            h = function() { o.default.init(), f() };
        c.default.start(), h(), (0, l.default)(), p.default.sync() }).call(t, n(240)) }, , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , function(e, t) { "use strict";

    function n(e) {
        if (!e) return {};
        var t = "string" == typeof e ? e : "",
            n = t.split("&"),
            r = {},
            i = void 0,
            a = void 0,
            o = void 0;
        for (i = 0, a = n.length; i < a; i++) o = n[i].split("="), r[o[0]] = o[1] || "";
        return r }

    function r() {
        var e = window.location.search.slice(1);
        return n(e) }

    function i() {
        var e = arguments.length <= 0 || void 0 === arguments[0] ? {} : arguments[0],
            t = Object.keys(e).map(function(t) {
                return void 0 !== e[t] && a(t) + "=" + a(e[t]) }).filter(function(e) {
                return e }).join("&");
        return t ? "?" + t : "" }
    Object.defineProperty(t, "__esModule", { value: !0 });
    var a = encodeURIComponent;
    t.default = { getQueryParams: r, queryEncode: i }, e.exports = t.default }, function(e, t, n) {
    (function(n) { "use strict";

        function r() {
            var e = void 0;
            return e = window.XMLHttpRequest ? new XMLHttpRequest : new ActiveXObject("Microsoft.XMLHTTP") }

        function i(e) {
            var t = r();
            return t.open("GET", e, !0), t.send(), new n(function(e, n) { t.onreadystatechange = function() { 4 === t.readyState && (200 === t.status ? e(JSON.parse(t.responseText)) : n(t.responseText)) } }) }

        function a(e, t) {
            var i = r();
            i.open("POST", e), i.setRequestHeader("Content-Type", "application/x-www-form-urlencoded"), window.cow._csrf && i.setRequestHeader("X-CSRF-Token", window.cow._csrf);
            var a = "";
            return Object.keys(t).forEach(function(e) { a += e + "=" + t[e] + "&" }), i.send(a), new n(function(e, t) { i.onreadystatechange = function() {
                    if (4 === i.readyState)
                        if (200 === i.status) {
                            var n = void 0;
                            try { n = JSON.parse(i.responseText) } catch (e) { n = i.responseText }
                            e(n) } else t(i.responseText) } }) }

        function o(e) {
            var t = r();
            return t.open("DELETE", e), t.setRequestHeader("Content-Type", "application/x-www-form-urlencoded"), t.send(), new n(function(e, n) { t.onreadystatechange = function() {
                    if (4 === t.readyState)
                        if (200 === t.status) {
                            var r = JSON.parse(t.responseText);
                            0 === r.code ? e(r) : n(new Error(r.message)) } else n(new Error(t.responseText)) } }) }
        Object.defineProperty(t, "__esModule", { value: !0 }), t.default = { ajaxGet: i, ajaxPost: a, ajaxDelete: o }, e.exports = t.default }).call(t, n(198)) }, function(e, t) {! function(n) {
        if ("object" == typeof t && "undefined" != typeof e) e.exports = n();
        else if ("function" == typeof define && define.amd) define([], n);
        else {
            var r; "undefined" != typeof window ? r = window : "undefined" != typeof global ? r = global : "undefined" != typeof self && (r = self), r.page = n() } }(function() {
        return function e(t, n, r) {
            function i(o, s) {
                if (!n[o]) {
                    if (!t[o]) {
                        var c = "function" == typeof require && require;
                        if (!s && c) return c(o, !0);
                        if (a) return a(o, !0);
                        var u = new Error("Cannot find module '" + o + "'");
                        throw u.code = "MODULE_NOT_FOUND", u }
                    var l = n[o] = { exports: {} };
                    t[o][0].call(l.exports, function(e) {
                        var n = t[o][1][e];
                        return i(n ? n : e) }, l, l.exports, e, t, n, r) }
                return n[o].exports }
            for (var a = "function" == typeof require && require, o = 0; o < r.length; o++) i(r[o]);
            return i }({ 1: [function(e, t, n) {
                (function(n) { "use strict";

                    function r(e, t) {
                        if ("function" == typeof e) return r("*", e);
                        if ("function" == typeof t)
                            for (var n = new s(e), i = 1; i < arguments.length; ++i) r.callbacks.push(n.middleware(arguments[i]));
                        else "string" == typeof e ? r["string" == typeof t ? "redirect" : "show"](e, t) : r.start(e) }

                    function i(e) {
                        if (!e.handled) {
                            var t;
                            t = y ? w + m.hash.replace("#!", "") : m.pathname + m.search, t !== e.canonicalPath && (r.stop(), e.handled = !1, m.href = e.canonicalPath) } }

                    function a(e) {
                        return "string" != typeof e ? e : g ? decodeURIComponent(e.replace(/\+/g, " ")) : e }

                    function o(e, t) { "/" === e[0] && 0 !== e.indexOf(w) && (e = w + (y ? "#!" : "") + e);
                        var n = e.indexOf("?");
                        if (this.canonicalPath = e, this.path = e.replace(w, "") || "/", y && (this.path = this.path.replace("#!", "") || "/"), this.title = document.title, this.state = t || {}, this.state.path = e, this.querystring = ~n ? a(e.slice(n + 1)) : "", this.pathname = a(~n ? e.slice(0, n) : e), this.params = {}, this.hash = "", !y) {
                            if (!~this.path.indexOf("#")) return;
                            var r = this.path.split("#");
                            this.path = r[0], this.hash = a(r[1]) || "", this.querystring = this.querystring.split("#")[0] } }

                    function s(e, t) { t = t || {}, this.path = "*" === e ? "(.*)" : e, this.method = "GET", this.regexp = d(this.path, this.keys = [], t) }

                    function c(e) {
                        if (1 === u(e) && !(e.metaKey || e.ctrlKey || e.shiftKey || e.defaultPrevented)) {
                            for (var t = e.path ? e.path[0] : e.target; t && "A" !== t.nodeName;) t = t.parentNode;
                            if (t && "A" === t.nodeName && !t.hasAttribute("download") && "external" !== t.getAttribute("rel")) {
                                var i = t.getAttribute("href");
                                if ((y || t.pathname !== m.pathname || !t.hash && "#" !== i) && !(i && i.indexOf("mailto:") > -1) && !t.target && l(t.href)) {
                                    var a = t.pathname + t.search + (t.hash || ""); "undefined" != typeof n && a.match(/^\/[a-zA-Z]:\//) && (a = a.replace(/^\/[a-zA-Z]:\//, "/"));
                                    var o = a;
                                    0 === a.indexOf(w) && (a = a.substr(w.length)), y && (a = a.replace("#!", "")), w && o === a || (e.preventDefault(), r.show(o)) } } } }

                    function u(e) {
                        return e = e || window.event, null === e.which ? e.button : e.which }

                    function l(e) {
                        var t = m.protocol + "//" + m.hostname;
                        return m.port && (t += ":" + m.port), e && 0 === e.indexOf(t) }
                    var d = e("path-to-regexp");
                    t.exports = r;
                    var p, f, h = "undefined" != typeof document && document.ontouchstart ? "touchstart" : "click",
                        m = "undefined" != typeof window && (window.history.location || window.location),
                        v = !0,
                        g = !0,
                        w = "",
                        y = !1;
                    r.callbacks = [], r.exits = [], r.current = "", r.len = 0, r.base = function(e) {
                        return 0 === arguments.length ? w : void(w = e) }, r.start = function(e) {
                        if (e = e || {}, !p && (p = !0, !1 === e.dispatch && (v = !1), !1 === e.decodeURLComponents && (g = !1), !1 !== e.popstate && window.addEventListener("popstate", b, !1), !1 !== e.click && document.addEventListener(h, c, !1), !0 === e.hashbang && (y = !0), v)) {
                            var t = y && ~m.hash.indexOf("#!") ? m.hash.substr(2) + m.search : m.pathname + m.search + m.hash;
                            r.replace(t, null, !0, v) } }, r.stop = function() { p && (r.current = "", r.len = 0, p = !1, document.removeEventListener(h, c, !1), window.removeEventListener("popstate", b, !1)) }, r.show = function(e, t, n, i) {
                        var a = new o(e, t);
                        return r.current = a.path, !1 !== n && r.dispatch(a), !1 !== a.handled && !1 !== i && a.pushState(), a }, r.back = function(e, t) { r.len > 0 ? (history.back(), r.len--) : e ? setTimeout(function() { r.show(e, t) }) : setTimeout(function() { r.show(w, t) }) }, r.redirect = function(e, t) { "string" == typeof e && "string" == typeof t && r(e, function(e) { setTimeout(function() { r.replace(t) }, 0) }), "string" == typeof e && "undefined" == typeof t && setTimeout(function() { r.replace(e) }, 0) }, r.replace = function(e, t, n, i) {
                        var a = new o(e, t);
                        return r.current = a.path, a.init = n, a.save(), !1 !== i && r.dispatch(a), a }, r.dispatch = function(e) {
                        function t() {
                            var e = r.exits[s++];
                            return e ? void e(a, t) : n() }

                        function n() {
                            var t = r.callbacks[o++];
                            return e.path !== r.current ? void(e.handled = !1) : t ? void t(e, n) : i(e) }
                        var a = f,
                            o = 0,
                            s = 0;
                        f = e, a ? t() : n() }, r.exit = function(e, t) {
                        if ("function" == typeof e) return r.exit("*", e);
                        for (var n = new s(e), i = 1; i < arguments.length; ++i) r.exits.push(n.middleware(arguments[i])) }, r.Context = o, o.prototype.pushState = function() { r.len++, history.pushState(this.state, this.title, y && "/" !== this.path ? "#!" + this.path : this.canonicalPath) }, o.prototype.save = function() { history.replaceState(this.state, this.title, y && "/" !== this.path ? "#!" + this.path : this.canonicalPath) }, r.Route = s, s.prototype.middleware = function(e) {
                        var t = this;
                        return function(n, r) {
                            return t.match(n.path, n.params) ? e(n, r) : void r() } }, s.prototype.match = function(e, t) {
                        var n = this.keys,
                            r = e.indexOf("?"),
                            i = ~r ? e.slice(0, r) : e,
                            o = this.regexp.exec(decodeURIComponent(i));
                        if (!o) return !1;
                        for (var s = 1, c = o.length; s < c; ++s) {
                            var u = n[s - 1],
                                l = a(o[s]);
                            void 0 === l && hasOwnProperty.call(t, u.name) || (t[u.name] = l) }
                        return !0 };
                    var b = function() {
                        var e = !1;
                        if ("undefined" != typeof window) return "complete" === document.readyState ? e = !0 : window.addEventListener("load", function() { setTimeout(function() { e = !0 }, 0) }),
                            function(t) {
                                if (e)
                                    if (t.state) {
                                        var n = t.state.path;
                                        r.replace(n, t.state) } else r.show(m.pathname + m.hash, void 0, void 0, !1) } }();
                    r.sameOrigin = l }).call(this, e("_process")) }, { _process: 2, "path-to-regexp": 3 }], 2: [function(e, t, n) {
                function r() {}
                var i = t.exports = {};
                i.nextTick = function() {
                    var e = "undefined" != typeof window && window.setImmediate,
                        t = "undefined" != typeof window && window.MutationObserver,
                        n = "undefined" != typeof window && window.postMessage && window.addEventListener;
                    if (e) return function(e) {
                        return window.setImmediate(e) };
                    var r = [];
                    if (t) {
                        var i = document.createElement("div"),
                            a = new MutationObserver(function() {
                                var e = r.slice();
                                r.length = 0, e.forEach(function(e) { e() }) });
                        return a.observe(i, { attributes: !0 }),
                            function(e) { r.length || i.setAttribute("yes", "no"), r.push(e) } }
                    return n ? (window.addEventListener("message", function(e) {
                        var t = e.source;
                        if ((t === window || null === t) && "process-tick" === e.data && (e.stopPropagation(), r.length > 0)) {
                            var n = r.shift();
                            n() } }, !0), function(e) { r.push(e), window.postMessage("process-tick", "*") }) : function(e) { setTimeout(e, 0) } }(), i.title = "browser", i.browser = !0, i.env = {}, i.argv = [], i.on = r, i.addListener = r, i.once = r, i.off = r, i.removeListener = r, i.removeAllListeners = r, i.emit = r, i.binding = function(e) {
                    throw new Error("process.binding is not supported") }, i.cwd = function() {
                    return "/" }, i.chdir = function(e) {
                    throw new Error("process.chdir is not supported") } }, {}], 3: [function(e, t, n) {
                function r(e) {
                    for (var t, n = [], r = 0, i = 0, a = ""; null != (t = v.exec(e));) {
                        var o = t[0],
                            c = t[1],
                            u = t.index;
                        if (a += e.slice(i, u), i = u + o.length, c) a += c[1];
                        else { a && (n.push(a), a = "");
                            var l = t[2],
                                d = t[3],
                                p = t[4],
                                f = t[5],
                                h = t[6],
                                m = t[7],
                                g = "+" === h || "*" === h,
                                w = "?" === h || "*" === h,
                                y = l || "/",
                                b = p || f || (m ? ".*" : "[^" + y + "]+?");
                            n.push({ name: d || r++, prefix: l || "", delimiter: y, optional: w, repeat: g, pattern: s(b) }) } }
                    return i < e.length && (a += e.substr(i)), a && n.push(a), n }

                function i(e) {
                    return a(r(e)) }

                function a(e) {
                    for (var t = new Array(e.length), n = 0; n < e.length; n++) "object" == typeof e[n] && (t[n] = new RegExp("^" + e[n].pattern + "$"));
                    return function(n) {
                        for (var r = "", i = n || {}, a = 0; a < e.length; a++) {
                            var o = e[a];
                            if ("string" != typeof o) {
                                var s, c = i[o.name];
                                if (null == c) {
                                    if (o.optional) continue;
                                    throw new TypeError('Expected "' + o.name + '" to be defined') }
                                if (m(c)) {
                                    if (!o.repeat) throw new TypeError('Expected "' + o.name + '" to not repeat, but received "' + c + '"');
                                    if (0 === c.length) {
                                        if (o.optional) continue;
                                        throw new TypeError('Expected "' + o.name + '" to not be empty') }
                                    for (var u = 0; u < c.length; u++) {
                                        if (s = encodeURIComponent(c[u]), !t[a].test(s)) throw new TypeError('Expected all "' + o.name + '" to match "' + o.pattern + '", but received "' + s + '"');
                                        r += (0 === u ? o.prefix : o.delimiter) + s } } else {
                                    if (s = encodeURIComponent(c), !t[a].test(s)) throw new TypeError('Expected "' + o.name + '" to match "' + o.pattern + '", but received "' + s + '"');
                                    r += o.prefix + s } } else r += o }
                        return r } }

                function o(e) {
                    return e.replace(/([.+*?=^!:${}()[\]|\/])/g, "\\$1") }

                function s(e) {
                    return e.replace(/([=!:$\/()])/g, "\\$1") }

                function c(e, t) {
                    return e.keys = t, e }

                function u(e) {
                    return e.sensitive ? "" : "i" }

                function l(e, t) {
                    var n = e.source.match(/\((?!\?)/g);
                    if (n)
                        for (var r = 0; r < n.length; r++) t.push({ name: r, prefix: null, delimiter: null, optional: !1, repeat: !1, pattern: null });
                    return c(e, t) }

                function d(e, t, n) {
                    for (var r = [], i = 0; i < e.length; i++) r.push(h(e[i], t, n).source);
                    var a = new RegExp("(?:" + r.join("|") + ")", u(n));
                    return c(a, t) }

                function p(e, t, n) {
                    for (var i = r(e), a = f(i, n), o = 0; o < i.length; o++) "string" != typeof i[o] && t.push(i[o]);
                    return c(a, t) }

                function f(e, t) { t = t || {};
                    for (var n = t.strict, r = t.end !== !1, i = "", a = e[e.length - 1], s = "string" == typeof a && /\/$/.test(a), c = 0; c < e.length; c++) {
                        var l = e[c];
                        if ("string" == typeof l) i += o(l);
                        else {
                            var d = o(l.prefix),
                                p = l.pattern;
                            l.repeat && (p += "(?:" + d + p + ")*"), p = l.optional ? d ? "(?:" + d + "(" + p + "))?" : "(" + p + ")?" : d + "(" + p + ")", i += p } }
                    return n || (i = (s ? i.slice(0, -2) : i) + "(?:\\/(?=$))?"), i += r ? "$" : n && s ? "" : "(?=\\/|$)", new RegExp("^" + i, u(t)) }

                function h(e, t, n) {
                    return t = t || [], m(t) ? n || (n = {}) : (n = t, t = []), e instanceof RegExp ? l(e, t, n) : m(e) ? d(e, t, n) : p(e, t, n) }
                var m = e("isarray");
                t.exports = h, t.exports.parse = r, t.exports.compile = i, t.exports.tokensToFunction = a, t.exports.tokensToRegExp = f;
                var v = new RegExp(["(\\\\.)", "([\\/.])?(?:(?:\\:(\\w+)(?:\\(((?:\\\\.|[^()])+)\\))?|\\(((?:\\\\.|[^()])+)\\))([+*?])?|(\\*))"].join("|"), "g") }, { isarray: 4 }], 4: [function(e, t, n) { t.exports = Array.isArray || function(e) {
                    return "[object Array]" == Object.prototype.toString.call(e) } }, {}] }, {}, [1])(1) }) }, , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , function(e, t, n) {
    var r;
    (function(i) { r = function() {
            var e, t;
            return e = function(e) {
                if (403 === e.code) return window.location.href = "/login" }, t = function(t) {
                var n, r;
                return n = i.Deferred(), r = "/api/file/external_link/" + t, i.get(r).done(function(r) {
                    return 0 === r.code ? t !== window.cow.currentFile.guid ? n.reject("not current guid") : n.resolve(r.data) : (e(r), n.reject("api error")) }), n.promise() }, { getShareStatusByGuid: t } }.call(t, n, t, e), !(void 0 !== r && (e.exports = r)) }).call(t, n(1)) }, , , , , , , , , , , , , , , , , , , , , , , function(e, t, n) {
    (function(n) { "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 });
        var r = function(e) { 403 === e.code && (window.location.href = "/login") },
            i = function(e, t) {
                var i = n.Deferred(),
                    a = window.cow.currentListByGuid;
                if (e === window.cow.tempCurrentFile.guid && void 0 === window.cow.tempCurrentFile.authorized) window.cow.tempCurrentFile.authorized = window.cow.authorized, i.resolve(window.cow.tempCurrentFile);
                else if (a && a[e] && !t) i.resolve(a[e]);
                else {
                    var o = "/-/" + e;
                    n.get(o).done(function(e) {
                        if (0 === e.code) {
                            var t = e.data,
                                n = t.file;
                            n.authorized = t.authorized, i.resolve(n) } else i.reject(e) }).fail(function(e) { r(e), i.reject(e) }) }
                return i.promise() };
        t.default = { getDocByGuid: i }, e.exports = t.default }).call(t, n(1)) }, , , function(e, t, n) {
    var r, i;! function(a) { r = [n(1)], i = function(e) {
            return a(e) }.apply(t, r), !(void 0 !== i && (e.exports = i)) }(function(e) { "use strict";

        function t(e) { void 0 === e && (e = window.navigator.userAgent), e = e.toLowerCase();
            var t = /(edge)\/([\w.]+)/.exec(e) || /(opr)[\/]([\w.]+)/.exec(e) || /(chrome)[ \/]([\w.]+)/.exec(e) || /(version)(applewebkit)[ \/]([\w.]+).*(safari)[ \/]([\w.]+)/.exec(e) || /(webkit)[ \/]([\w.]+).*(version)[ \/]([\w.]+).*(safari)[ \/]([\w.]+)/.exec(e) || /(webkit)[ \/]([\w.]+)/.exec(e) || /(opera)(?:.*version|)[ \/]([\w.]+)/.exec(e) || /(msie) ([\w.]+)/.exec(e) || e.indexOf("trident") >= 0 && /(rv)(?::| )([\w.]+)/.exec(e) || e.indexOf("compatible") < 0 && /(mozilla)(?:.*? rv:([\w.]+)|)/.exec(e) || [],
                n = /(ipad)/.exec(e) || /(ipod)/.exec(e) || /(iphone)/.exec(e) || /(kindle)/.exec(e) || /(silk)/.exec(e) || /(android)/.exec(e) || /(windows phone)/.exec(e) || /(win)/.exec(e) || /(mac)/.exec(e) || /(linux)/.exec(e) || /(cros)/.exec(e) || /(playbook)/.exec(e) || /(bb)/.exec(e) || /(blackberry)/.exec(e) || [],
                r = {},
                i = { browser: t[5] || t[3] || t[1] || "", version: t[2] || t[4] || "0", versionNumber: t[4] || t[2] || "0", platform: n[0] || "" };
            if (i.browser && (r[i.browser] = !0, r.version = i.version, r.versionNumber = parseInt(i.versionNumber, 10)), i.platform && (r[i.platform] = !0), (r.android || r.bb || r.blackberry || r.ipad || r.iphone || r.ipod || r.kindle || r.playbook || r.silk || r["windows phone"]) && (r.mobile = !0), (r.cros || r.mac || r.linux || r.win) && (r.desktop = !0), (r.chrome || r.opr || r.safari) && (r.webkit = !0), r.rv || r.edge) {
                var a = "msie";
                i.browser = a, r[a] = !0 }
            if (r.safari && r.blackberry) {
                var o = "blackberry";
                i.browser = o, r[o] = !0 }
            if (r.safari && r.playbook) {
                var s = "playbook";
                i.browser = s, r[s] = !0 }
            if (r.bb) {
                var c = "blackberry";
                i.browser = c, r[c] = !0 }
            if (r.opr) {
                var u = "opera";
                i.browser = u, r[u] = !0 }
            if (r.safari && r.android) {
                var l = "android";
                i.browser = l, r[l] = !0 }
            if (r.safari && r.kindle) {
                var d = "kindle";
                i.browser = d, r[d] = !0 }
            if (r.safari && r.silk) {
                var p = "silk";
                i.browser = p, r[p] = !0 }
            return r.name = i.browser, r.platform = i.platform, r }
        return window.jQBrowser = t(window.navigator.userAgent), window.jQBrowser.uaMatch = t, e && (e.browser = window.jQBrowser), window.jQBrowser }) }, function(e, t, n) {
    var r, i;
    (function(a) {
        var o = function(e, t) {
                function n() { this.constructor = e }
                for (var r in t) s.call(t, r) && (e[r] = t[r]);
                return n.prototype = t.prototype, e.prototype = new n, e.__super__ = t.prototype, e },
            s = {}.hasOwnProperty;
        r = [n(189)], i = function(e) {
            var t;
            return new(t = function(e) {
                function t() {
                    return t.__super__.constructor.apply(this, arguments) }
                return o(t, e), t.prototype.eventMap = { "click .btn-ok": "clickOK", "click .btn-cancel": "clickCancel", "click .dialog": "clickSelf", "click .confirm-close": "close", "click .confirm-checkbox": "changeCheckBox", click: "click" }, t.prototype.init = function() {
                    return this.$view = a("#confirm"), this.$head = this.$(".dialog-head"), this.$headSpan = this.$(".header-text"), this.$body = this.$(".dialog-body"), this.$foot = this.$(".dialog-foot"), this.$okBtn = this.$(".btn-ok"), this.$cancelBtn = this.$(".btn-cancel"), this.buttons = ["ok", "cancel"], this.modal = !1, this.reset() }, t.prototype.domEvents = { clickOK: function(e) {
                        if (!a(e.target).hasClass("custom-confirm-btn")) return "function" == typeof this.okCallback && this.okCallback({ checkBoxValue: this.checkBoxValue }), this.hide(), e.stopPropagation() }, clickCancel: function(e) {
                        if (!a(e.target).hasClass("custom-confirm-btn")) return "function" == typeof this.cancelCallback && this.cancelCallback(), this.hide(), e.stopPropagation() }, click: function(e) {
                        if (!this.modal) return "function" == typeof this.cancelCallback && this.cancelCallback(), this.hide(), e.stopPropagation() }, clickSelf: function(e) {
                        return e.stopPropagation() }, changeCheckBox: function(e) {
                        return this.checkBoxValue = !this.checkBoxValue, a(".confirm-checkbox").toggleClass("active") }, close: function(e) {
                        return this.hide() } }, t.prototype.reset = function() {
                    return this.headText = "确认", this.bodyText = "确认吗？", this.okText = "确认", this.cancelText = "取消", this.externalClass = "", this.okCallback = null, this.cancelCallback = null, this.checkBox = null, this.checkBoxValue = !1 }, t.prototype.show = function(e) {
                    var t;
                    return this.$foot.empty(), this.okCallback = e.okCallback, this.cancelCallback = e.cancelCallback, this.headText = e.headText || this.headText, this.bodyText = e.bodyText || this.bodyText, this.okText = e.okText || this.okText, this.cancelText = e.cancelText || this.cancelText, this.externalClass = e.externalClass || this.externalClass, this.modal = e.modal || !1, this.buttons = e.buttons || ["ok", "cancel"], e.checkBox && (this.checkBox = e.checkBox, this.checkBoxValue = e.checkBoxValue || !1), "object" == typeof this.buttons[0] ? (this.$okBtn.hide(), this.$cancelBtn.hide(), this.createFoot()) : (this.$foot.append('<div class="btn btn-ok">确认</div><div class="btn btn-cancel">取消</div>'), this.$okBtn = this.$(".btn-ok"), this.$cancelBtn = this.$(".btn-cancel"), this.buttons.indexOf("ok") === -1 ? this.$okBtn.hide() : this.$okBtn.show(), this.buttons.indexOf("cancel") === -1 ? this.$cancelBtn.hide() : this.$cancelBtn.show(), this.$okBtn.text(this.okText), this.$cancelBtn.text(this.cancelText)), this.$headSpan.text(this.headText), this.$body.html(this.bodyText), this.checkBox && (t = this.checkBoxValue ? "active" : "", this.$body.append('<div class="confirm-checkbox ' + t + '">' + this.checkBox + "</div>")), this.$view.addClass(this.externalClass).show() }, t.prototype.createFoot = function() {
                    var e, t, n, r, i, o, s, c, u, l, d, p, f, h;
                    for (p = this, t = a(), d = this.buttons, c = 0, u = d.length; c < u; c++) n = d[c], h = n.type || "button", f = n.target || "_blank", s = n.href || "", o = "custom-confirm-btn " + (n.customClass || ""), r = n.label || n.buttonLabel || "", i = !!n.closeAfterClick, l = "function" == typeof n.onClick ? n.onClick : function() {}, e = a(), "button" === h ? e = a(document.createElement("div")) : "link-button" === h && (e = a(document.createElement("a")), e.attr({ href: s, target: f })), e.addClass(n.class || o), e.text(r), e.on("click", function(e) {
                        if (l(e), i) return p.hide(), e.stopPropagation() }), t.push(e[0]);
                    if (t.length > 0) return this.$foot.append(t) }, t.prototype.hide = function() {
                    return this.$view.removeClass(this.externalClass).hide(), this.reset() }, t }(e.DomModule))("#confirm") }.apply(t, r), !(void 0 !== i && (e.exports = i)) }).call(t, n(1)) }, , , , , , , , , , , , , , , function(e, t, n) {
    var r, i;
    (function(a, o) { r = [n(183), n(315), n(316)], i = function(e, t, n) {
            var r;
            return new(r = function() {
                function r() {
                    var e;
                    e = this, this.isReady = !1, this.guideDocTitle = "欢迎使用石墨文档", this.$tipContainter = a("body"), this.sheetSplashName = "spread_sheet_splash", this.needToGuide() && (window.cow.guideStatus ? this.guideStatus = window.cow.guideStatus : this.getGuideInfo()), this.accountTypeStatus = "" }
                return r.prototype.needToGuide = function() {
                    return (["payment", "home", "folder"].indexOf(window.cow.pageType) >= 0 || this.isGuideDoc()) && !cow.isMobile && !cow.readonly && cow.currentUser.id > 0 }, r.prototype.checkIsReady = function() {
                    var e, t;
                    return t = this, e = a.Deferred(), t.isReady ? e.resolve(t.guideStatus) : t.getGuideInfo().then(function() {
                        return t.isReady = !0, e.resolve(t.guideStatus) }).fail(function() {
                        return e.reject() }), e.promise() }, r.prototype.getGuideInfo = function() {
                    var t, n;
                    return n = this, t = a.Deferred(), e.get("/api/user_guide_info", { guide_type: "web" }, function(e) {
                        return 0 === e.code ? (window.cow.guideStatus = e.data.status, n.guideStatus = window.cow.guideStatus, window.cow.guideStatus.tips = [], n.isReady = !0, t.resolve()) : t.reject() }, function() {
                        return t.reject() }), t.promise() }, r.prototype.getMembershipInfo = function() {
                    var t, n;
                    return n = this, t = a.Deferred(), e.get("/api/get_membership_info", {}, function(e) {
                        return 0 === e.code ? (n.shouldNotifyRenewal = e.data.shouldNotifyRenewal, n.shouldNotifyExpiration = e.data.shouldNotifyExpiration, cow.currentUser.accountTypeExpiredAt = e.data.accountTypeExpiredAt, t.resolve()) : t.reject() }, function() {
                        return t.reject() }), t.promise() }, r.prototype.removeMembershipTip = function() {
                    return e.post("/flash_messages/read", { message_name: "membership_" + this.accountTypeStatus }) }, r.prototype.removeTipAjax = function(t) {
                    var n, r;
                    return r = this, n = a.Deferred(), e.post("/api/update_user_guide_info", { guide_type: "web", type: t }).then(function() {
                        return window.cow.guideStatus[t] = r.guideStatus[t] = !0, n.resolve() }).fail(function() {
                        return n.reject() }), n.promise() }, r.prototype.checkAvaliable = function(e) {
                    var t, n, r;
                    return r = this, t = a.Deferred(), n = this.keyMap[e], "undefined" != typeof this.guideStatus && null !== this.guideStatus ? this.guideStatus[n] ? t.reject() : t.resolve() : this.getGuideInfo().then(function() {
                        return r.guideStatus[n] ? t.reject() : t.resolve() }), t.promise() }, r.prototype.isGuideDoc = function() {
                    return "doc" === window.cow.pageType && window.cow.currentFile.name === this.guideDocTitle }, r.prototype.keyMap = { "guide-open-doc": "desktop_open_doc", "guide-share-doc": "desktop_share_doc", "guide-show-more": "doc_show_more", "guide-open-share": "doc_open_share", "guide-share-users": "doc_share_users", "guide-change-permission": "doc_change_permission" }, r.prototype.tips = [{ name: "guide-open-doc", target: ".ob-ul>.guide-doc", offset: "49,32" }, { name: "guide-share-doc", target: ".list-share-box:visible", offset: "14,0" }, { name: "guide-show-more", target: "#innerdocbody", offset: "0,0" }, { name: "guide-open-share", target: ".doc-share-open:visible", offset: "15,-5" }, { name: "guide-share-users", target: ".doc-contact-icon:visible", offset: "-307,-3" }, { name: "guide-change-permission", target: ".doc-link-change:visible", offset: "-1,-8" }], r.prototype.onWindowResizeHandle = function(e, t) {
                    return a(".guide-tip-container:visible").each(function() {
                        var e, t;
                        return e = a(this).attr("class"), t = e.match(/ (guide-.+-.?)/) }) }, r.prototype.createTipDom = function(e) {
                    var n, r, i;
                    if (e) return i = o.find(this.tips, { name: e }), i ? (n = this.getTipPosition(i), r = { name: i.name, position: n }, o.template(t)(r)) : null }, r.prototype.getTipPosition = function(e) {
                    var t, n, r, i, o, s;
                    return t = a(e.target), r = t.offset(), n = e.offset.split(",").map(function(e) {
                        return parseInt(e, 10) }), s = r.top + n[1], o = r.left + n[0], "guide-show-more" === e.name ? (o = o + a(e.target).width() - 120, i = (a(window).height() - 200) / 2 - 50, "bottom:" + i + "px;left:" + o + "px") : "top:" + s + "px;left:" + o + "px" }, r.prototype.updateTip = function(e) {
                    return this.removeTip(e), this.addTip(e) }, r.prototype.addTip = function(t) {
                    var n, r;
                    if (this.needToGuide() && (n = this, r = o.find(this.tips, { name: t }), r && 0 !== a(r.target).length)) return this.checkAvaliable(t).then(function() {
                        var r, i;
                        if (n.$tipContainter.find("." + t).remove(), i = n.createTipDom(t), a("body").append(i), window.cow.guideStatus.tips.push(t), setTimeout(function() {
                                return a("." + t).css("opacity", "1") }, 200), "guide-open-doc" === t) return n.listenWindowResize(), r = n.keyMap["guide-open-doc"], e.post("/api/update_user_guide_info", { guide_type: "web", type: r }, function(e) {
                            return 0 === e.code ? n.guideStatus[r] = !0 : console.log("新手引导 guide-open-doc 没有正常完成") }, function(e) {
                            return console.log("新手引导 guide-open-doc 没有正常完成") }) }) }, r.prototype.hasDone = function(e) {
                    var t;
                    return t = this.keyMap[e], !!this.guideStatus && (t ? this.guideStatus[t] : (console.log("并没有记录" + e + "的相关状态"), null)) }, r.prototype.hideTip = function(e) {
                    return a("." + e).hide() }, r.prototype.hideAllTip = function() {
                    return a(".guide-tip-container").hide() }, r.prototype.hideAllTipExclude = function(e) {
                    var t, n, r, i;
                    if (e) {
                        for (t = "", n = 0, r = e.length; n < r; n++) i = e[n], t || (t += ","), t += "." + i;
                        return t ? a(".guide-tip-container").not(t).hide() : this.hideAllTip() } }, r.prototype.removeAllTip = function() {
                    return a(".guide-tip-container").css("opacity", "0"), a(".guide-tip-container").remove(), window.cow.guideStatus.tips.length = 0 }, r.prototype.removeTip = function(t, n) {
                    var r;
                    if (null == n && (n = !1), a("." + t).remove(), r = this.keyMap[t], window.cow.guideStatus && window.cow.guideStatus.tips && o.remove(window.cow.guideStatus.tips, function(e) {
                            return e === t }), n && this.guideStatus && !this.guideStatus[r] && (this.guideStatus[r] = !0, e.post("/api/update_user_guide_info", { guide_type: "web", type: r }, function(e) {
                            if (0 !== e.code) return console.log("新手引导 " + t + " 没有正常完成") }, function(e) {
                            return console.log("新手引导 " + t + " 没有正常完成") })), "guide-open-doc" === t) return this.unListenWindowResize() }, r.prototype.onResize = function() {
                    var e;
                    if (e = this, window.cow.guideStatus && window.cow.guideStatus.tips) return o.each(window.cow.guideStatus.tips, function(t) {
                        return e.updateTip(t) }) }, r.prototype.listenWindowResize = function() {
                    return this.onResizeFunction = o.bind(this.onResize, this), a(window).on("resize", this.onResizeFunction) }, r.prototype.unListenWindowResize = function() {
                    if ("function" == typeof this.onResizeFunction) return a(window).off("resize", this.onResizeFunction) }, r.prototype.needShowSheetSplash = function() {
                    var e, t, n;
                    return t = a.Deferred(), n = this, e = function() {
                        return n.guideStatus.hasOwnProperty(n.sheetSplashName) ? n.guideStatus[n.sheetSplashName] ? t.reject() : t.resolve() : t.reject() }, "undefined" == typeof this.guideStatus || null === this.guideStatus ? this.getGuideInfo().then(function() {
                        return e() }).fail(function() {
                        return t.reject() }) : e(), t.promise() }, r.prototype.showSheetSplash = function(e) {
                    return e.append(o.template(n)()) }, r.prototype.removeSheetSplash = function() {
                    var e, t;
                    return t = this, e = a.Deferred(), a(".sheet-splash-wrap").remove(), this.removeTipAjax(t.sheetSplashName).then(function() {
                        return e.resolve() }).fail(function() {
                        return e.reject() }), e.promise() }, r }()) }.apply(t, r), !(void 0 !== i && (e.exports = i)) }).call(t, n(1), n(4)) }, function(e, t) { e.exports = '<% if(name === \'guide-open-doc\') { %>\n<div class="guide-tip-container <%= name %>" style="<%= position %>">\n    <span class="guide-icon guide-open-doc-icon"></span>\n    <span class="guide-tip guide-open-doc-tip">无从下手？从这里开始</span>\n</div>\n<% } else if (name === \'guide-share-doc\') { %>\n<div class="guide-tip-container <%= name %>" style="<%= position %>">\n    <span class="guide-icon guide-share-doc-icon"></span>\n    <span class="guide-tip guide-share-tip">多人编辑从这里开始</span>\n</div>\n<% } else if (name === \'guide-show-more\') { %>\n<div class="guide-tip-container <%= name %>" style="<%= position %>">\n    <div class="guide-icon-container">\n        <span class="guide-show-more-icon guide-icon"></span>\n    </div>\n    <span class="guide-tip guide-show-more-tip">滑动查看更多使用方法</span>\n</div>\n<% } else if (name == \'guide-open-share\'){ %>\n<div class="guide-tip-container <%= name %>" style="<%= position %>">\n    <span class="guide-icon guide-open-share-icon"></span>\n    <div class="guide-tip guide-open-share-tip">\n        <span class="guide-tip-title">轻松协作：</span>\n        <span class="guide-tip-info">开启链接，其他人可以通过链接访问或编辑文档。你也可以关闭链接</span>\n    </div>\n</div>\n<% } else if (name == \'guide-share-users\'){ %>\n<div class="guide-tip-container <%= name %>" style="<%= position %>">\n    <span class="guide-icon guide-share-users-icon"></span>\n    <div class="guide-tip guide-share-users-tip">\n        <span class="guide-tip-title">文档成员：</span>\n        <span class="guide-tip-info">添加成员邮箱或微信，文档会出现在他们的石墨桌面上，并可以随时编辑（即使链接关闭）</span>\n    </div>\n</div>\n<% } else if (name == \'guide-change-permission\'){ %>\n<div class="guide-tip-container <%= name %>" style="<%= position %>">\n    <span class="guide-icon guide-change-permission-icon"></span>\n    <span class="guide-tip guide-change-permission-tip">选择访问权限，文档安全尽在掌握</span>\n</div>\n<% } %>\n\n' }, function(e, t) { e.exports = '<div class="modal-wrap sheet-splash-wrap">\n    <div class="modal-container sheet-splash-container">\n        <div class="sheet-splash-title"></div>\n        <div class="sheet-splash-img"></div>\n        <div class="sheet-splash-actions">\n            <a href="javascript:void(0);" class="sheet-splash-confirm">立即体验</a>\n            <a href="javascript:void(0);" class="sheet-splash-ignore">跳过</a>\n        </div>\n    </div>\n</div>\n' }, , , , , function(e, t, n) {
    var r, i;
    r = [n(322)], i = function(e) {
        var t = {};
        return t.error = function(e) {
            var t = new Error(e);
            throw t.easysync = !0, t }, t.assert = function(e, n) {
            if (!e) {
                var r = Array.prototype.slice.call(arguments, 1).join("");
                t.error("Failed assertion: " + r) } }, t.parseNum = function(e) {
            return parseInt(e, 36) }, t.numToString = function(e) {
            return e.toString(36).toLowerCase() }, t.toBaseTen = function(e) {
            var n = e.indexOf("$"),
                r = e.substring(0, n),
                i = e.substring(n);
            return r.replace(/[0-9a-z]+/g, function(e) {
                return String(t.parseNum(e)) }) + i }, t.oldLen = function(e) {
            return t.unpack(e).oldLen }, t.newLen = function(e) {
            return t.unpack(e).newLen }, t.opIterator = function(e, n) {
            function r() { l = u;
                var n;
                return s.lastIndex = u, n = s.exec(e), u = s.lastIndex, "?" == n[0] && t.error("Hit error opcode in op stream"), n }

            function i(e) {
                var n = e || p;
                return d[0] ? (n.attribs = d[1], n.lines = t.parseNum(d[2] || 0), n.opcode = d[3], n.chars = t.parseNum(d[4]), d = r()) : t.clearOp(n), n }

            function a() {
                return !!d[0] }

            function o() {
                return l }
            var s = /((?:\*[0-9a-z]+)*)(?:\|([0-9a-z]+))?([-+=])([0-9a-z]+)|\?|/g,
                c = n || 0,
                u = c,
                l = u,
                d = r(),
                p = t.newOp();
            return { next: i, hasNext: a, lastIndex: o } }, t.clearOp = function(e) { e.opcode = "", e.chars = 0, e.lines = 0, e.attribs = "" }, t.newOp = function(e) {
            return { opcode: e || "", chars: 0, lines: 0, attribs: "" } }, t.cloneOp = function(e) {
            return { opcode: e.opcode, chars: e.chars, lines: e.lines, attribs: e.attribs } }, t.copyOp = function(e, t) { t.opcode = e.opcode, t.chars = e.chars, t.lines = e.lines, t.attribs = e.attribs }, t.opString = function(e) {
            if (!e.opcode) return "null";
            var n = t.opAssembler();
            return n.append(e), n.toString() }, t.stringOp = function(e) {
            return t.opIterator(e).next() }, t.checkRep = function(e) {
            for (var n = t.unpack(e), r = n.oldLen, i = n.newLen, a = n.ops, o = n.charBank, s = t.smartOpAssembler(), c = 0, u = 0, l = 0, d = t.opIterator(a); d.hasNext();) {
                var p = d.next();
                switch (p.opcode) {
                    case "=":
                        c += p.chars, u += p.chars;
                        break;
                    case "-":
                        c += p.chars, t.assert(c < r, c, " >= ", r, " in ", e);
                        break;
                    case "+":
                        u += p.chars, l += p.chars, t.assert(u < i, u, " >= ", i, " in ", e) }
                s.append(p) }
            for (u += r - c, o = o.substring(0, l); o.length < l;) o += "?";
            s.endDocument();
            var f = t.pack(r, u, s.toString(), o);
            return t.assert(f == e, "Invalid changeset (checkRep failed)"), e }, t.smartOpAssembler = function() {
            function e() { p.append(d.toString()), d.clear() }

            function n() { p.append(u.toString()), u.clear(), p.append(l.toString()), l.clear() }

            function r(t) { t.opcode && t.chars && ("-" == t.opcode ? ("=" == f && e(), u.append(t), h -= t.chars) : "+" == t.opcode ? ("=" == f && e(), l.append(t), h += t.chars) : "=" == t.opcode && ("=" != f && n(), d.append(t)), f = t.opcode) }

            function i(e, n, i, a) {
                var o = t.newOp(e);
                o.attribs = t.makeAttribsString(e, i, a);
                var s = n.lastIndexOf("\n");
                s < 0 ? (o.chars = n.length, o.lines = 0, r(o)) : (o.chars = s + 1, o.lines = n.match(/\n/g).length, r(o), o.chars = n.length - (s + 1), o.lines = 0, r(o)) }

            function a() {
                return n(), e(), p.toString() }

            function o() { u.clear(), l.clear(), d.clear(), p.clear(), h = 0 }

            function s() { d.endDocument() }

            function c() {
                return h }
            var u = t.mergingOpAssembler(),
                l = t.mergingOpAssembler(),
                d = t.mergingOpAssembler(),
                p = t.stringAssembler(),
                f = "",
                h = 0;
            return { append: r, toString: a, clear: o, endDocument: s, appendOpWithText: i, getLengthChange: c } }, t.mergingOpAssembler = function() {
            function e(e) { s.opcode && (e && "=" == s.opcode && !s.attribs || (o.append(s), c && (s.chars = c, s.lines = 0, o.append(s), c = 0)), s.opcode = "") }

            function n(n) { n.chars > 0 && (s.opcode == n.opcode && s.attribs == n.attribs ? n.lines > 0 ? (s.chars += c + n.chars, s.lines += n.lines, c = 0) : 0 == s.lines ? s.chars += n.chars : c += n.chars : (e(), t.copyOp(n, s))) }

            function r() { e(!0) }

            function i() {
                return e(), o.toString() }

            function a() { o.clear(), t.clearOp(s) }
            var o = t.opAssembler(),
                s = t.newOp(),
                c = 0;
            return { append: n, toString: i, clear: a, endDocument: r }
        }, t.opAssembler = function() {
            function e(e) { i.push(e.attribs), e.lines && i.push("|", t.numToString(e.lines)), i.push(e.opcode), i.push(t.numToString(e.chars)) }

            function n() {
                return i.join("") }

            function r() { i.length = 0 }
            var i = [];
            return { append: e, toString: n, clear: r } }, t.stringIterator = function(e) {
            function n(e) { t.assert(e <= o(), "!(", e, " <= ", o(), ")") }

            function r(t) { n(t);
                var r = e.substr(c, t);
                return c += t, r }

            function i(t) { n(t);
                var r = e.substr(c, t);
                return r }

            function a(e) { n(e), c += e }

            function o() {
                return e.length - c }

            function s() {
                return c }
            var c = 0;
            return { take: r, skip: a, remaining: o, peek: i, currentIndex: s } }, t.stringAssembler = function() {
            function e(e) {
                var t = String(e);
                a.push(t), o += t.length }

            function t() {
                var e = a.pop();
                return o -= e.length, e }

            function n() {
                return a[a.length - 1] }

            function r() {
                return a.join("") }

            function i() {
                return o }
            var a = [],
                o = 0;
            return { append: e, pop: t, last: n, toString: r, length: i } }, t.textLinesMutator = function(e) {
            function n(t) { e.splice.apply(e, t) }

            function r(t) {
                return e.get ? e.get(t) : e[t] }

            function i(t, n) {
                return e.slice ? e.slice(t, n) : [] }

            function a() {
                return "number" == typeof e.length ? e.length : e.length() }

            function o() { g[0] = y, g[1] = 0, b > 0 && u(), w = !0 }

            function s() { n(g), g.length = 2, g[0] = g[1] = 0, w = !1 }

            function c() {
                return y - g[0] < g.length - 2 }

            function u() {
                return c() || (g.push(r(g[0] + g[1])), g[1]++), 2 + y - g[0] }

            function l(e, t) {
                if (e)
                    if (t) { w || o();
                        for (var n = 0; n < e; n++) b = 0, u(), y++ } else w && (e > 1 ? s() : u()), y += e, b = 0 }

            function d(e, t, n) { e && (t ? l(t, n) : (n && !w && o(), w && u(), b += e)) }

            function p(e) {
                function t(e) {
                    var t = g[0] + g[1];
                    return i(t, t + e).join("") }
                var n = "";
                if (e)
                    if (w || o(), c())
                        if (0 == b) n = g[g.length - 1], g.length--, n += t(e - 1), g[1] += e - 1;
                        else { n = t(e - 1), g[1] += e - 1;
                            var a = g.length - 1;
                            n = g[a].substring(b) + n, g[a] = g[a].substring(0, b) + r(g[0] + g[1]), g[1] += 1 }
                else n = t(e), g[1] += e;
                return n }

            function f(e, t) {
                var n = "";
                if (e) {
                    if (t) return p(t);
                    w || o();
                    var r = u();
                    n = g[r].substring(b, b + e), g[r] = g[r].substring(0, b) + g[r].substring(b + e) }
                return n }

            function h(e, n) {
                if (e)
                    if (w || o(), n) {
                        var r = t.splitTextLines(e);
                        if (c()) {
                            var i = g.length - 1,
                                a = g[i],
                                s = b;
                            g[i] = a.substring(0, s) + r[0], y++, r.splice(0, 1), Array.prototype.push.apply(g, r), y += r.length, g.push(a.substring(s)), b = 0 } else Array.prototype.push.apply(g, r), y += r.length } else {
                        var i = u();
                        g[i] = g[i].substring(0, b) + e + g[i].substring(b), b += e.length } }

            function m() {
                var e = a();
                return w && (e += g.length - 2 - g[1]), y < e }

            function v() { w && s() }
            var g = [0, 0],
                w = !1,
                y = 0,
                b = 0,
                k = { skip: d, remove: f, insert: h, close: v, hasMore: m, removeLines: p, skipLines: l };
            return k }, t.applyZip = function(e, n, r, i, a) {
            for (var o = t.opIterator(e, n), s = t.opIterator(r, i), c = t.smartOpAssembler(), u = t.newOp(), l = t.newOp(), d = t.newOp(); u.opcode || o.hasNext() || l.opcode || s.hasNext();) !u.opcode && o.hasNext() && o.next(u), !l.opcode && s.hasNext() && s.next(l), a(u, l, d), d.opcode && (c.append(d), d.opcode = "");
            return c.endDocument(), c.toString() }, t.unpack = function(e) {
            var n = /Z:([0-9a-z]+)([><])([0-9a-z]+)|/,
                r = n.exec(e);
            r && r[0] || t.error("Not a exports: " + e);
            var i = t.parseNum(r[1]),
                a = ">" == r[2] ? 1 : -1,
                o = t.parseNum(r[3]),
                s = i + a * o,
                c = r[0].length,
                u = e.indexOf("$");
            return u < 0 && (u = e.length), { oldLen: i, newLen: s, ops: e.substring(c, u), charBank: e.substring(u + 1) } }, t.pack = function(e, n, r, i) {
            var a = n - e,
                o = a >= 0 ? ">" + t.numToString(a) : "<" + t.numToString(-a),
                s = [];
            return s.push("Z:", t.numToString(e), o, r, "$", i), s.join("") }, t.applyToText = function(e, n) {
            var r = t.unpack(e);
            t.assert(n.length == r.oldLen, "mismatched apply: ", n.length, " / ", r.oldLen);
            for (var i = t.opIterator(r.ops), a = t.stringIterator(r.charBank), o = t.stringIterator(n), s = t.stringAssembler(); i.hasNext();) {
                var c = i.next();
                switch (c.opcode) {
                    case "+":
                        if (c.lines != a.peek(c.chars).split("\n").length - 1) throw new Error("newline count is wrong in op +; cs:" + e + " and text:" + n);
                        s.append(a.take(c.chars));
                        break;
                    case "-":
                        if (c.lines != o.peek(c.chars).split("\n").length - 1) throw new Error("newline count is wrong in op -; cs:" + e + " and text:" + n);
                        o.skip(c.chars);
                        break;
                    case "=":
                        if (c.lines != o.peek(c.chars).split("\n").length - 1) throw new Error("newline count is wrong in op =; cs:" + e + " and text:" + n);
                        s.append(o.take(c.chars)) } }
            return s.append(o.take(o.remaining())), s.toString() }, t.mutateTextLines = function(e, n) {
            for (var r = t.unpack(e), i = t.opIterator(r.ops), a = t.stringIterator(r.charBank), o = t.textLinesMutator(n); i.hasNext();) {
                var s = i.next();
                switch (s.opcode) {
                    case "+":
                        o.insert(a.take(s.chars), s.lines);
                        break;
                    case "-":
                        o.remove(s.chars, s.lines);
                        break;
                    case "=":
                        o.skip(s.chars, s.lines, !!s.attribs) } }
            o.close() }, t.composeAttributes = function(e, n, r, i) {
            if (!e && r) return n;
            if (!n) return e;
            var a = [];
            e.replace(/\*([0-9a-z]+)/g, function(e, n) {
                return a.push(i.getAttrib(t.parseNum(n))), "" }), n.replace(/\*([0-9a-z]+)/g, function(e, n) {
                for (var o = i.getAttrib(t.parseNum(n)), s = !1, c = 0; c < a.length; c++) {
                    var u = a[c];
                    if (u[0] == o[0]) { o[1] || r ? u[1] = o[1] : a.splice(c, 1), s = !0;
                        break } }
                return s || !o[1] && !r || a.push(o), "" }), a.sort();
            for (var o = t.stringAssembler(), s = 0; s < a.length; s++) o.append("*"), o.append(t.numToString(i.putAttrib(a[s])));
            return o.toString() }, t._slicerZipperFunc = function(e, n, r, i) {
            if ("-" == e.opcode) t.copyOp(e, r), e.opcode = "";
            else if (e.opcode) switch (n.opcode) {
                case "-":
                    n.chars <= e.chars ? ("=" == e.opcode && (r.opcode = "-", r.chars = n.chars, r.lines = n.lines, r.attribs = ""), e.chars -= n.chars, e.lines -= n.lines, n.opcode = "", e.chars || (e.opcode = "")) : ("=" == e.opcode && (r.opcode = "-", r.chars = e.chars, r.lines = e.lines, r.attribs = ""), n.chars -= e.chars, n.lines -= e.lines, e.opcode = "");
                    break;
                case "+":
                    t.copyOp(n, r), n.opcode = "";
                    break;
                case "=":
                    n.chars <= e.chars ? (r.opcode = e.opcode, r.chars = n.chars, r.lines = n.lines, r.attribs = t.composeAttributes(e.attribs, n.attribs, "=" == e.opcode, i), n.opcode = "", e.chars -= n.chars, e.lines -= n.lines, e.chars || (e.opcode = "")) : (r.opcode = e.opcode, r.chars = e.chars, r.lines = e.lines, r.attribs = t.composeAttributes(e.attribs, n.attribs, "=" == e.opcode, i), e.opcode = "", n.chars -= e.chars, n.lines -= e.lines);
                    break;
                case "":
                    t.copyOp(e, r), e.opcode = "" } else t.copyOp(n, r), n.opcode = "" }, t.applyToAttribution = function(e, n, r) {
            var i = t.unpack(e);
            return t.applyZip(n, 0, i.ops, 0, function(e, n, i) {
                return t._slicerZipperFunc(e, n, i, r) }) }, t.mutateAttributionLines = function(e, n, r) {
            function i() {
                return p && p.hasNext() || d.hasMore() }

            function a(e) {
                if ((!p || !p.hasNext()) && d.hasMore()) {
                    var n = d.removeLines(1);
                    p = t.opIterator(n) }
                p && p.hasNext() ? p.next(e) : e.opcode = "" }

            function o(e) { f || (f = t.mergingOpAssembler()), f.append(e), e.lines > 0 && (t.assert(1 == e.lines, "Can't have op.lines of ", e.lines, " in attribution lines"), d.insert(f.toString(), 1), f = null) }
            for (var s = t.unpack(e), c = t.opIterator(s.ops), u = s.charBank, l = 0, d = t.textLinesMutator(n), p = null, f = null, h = t.newOp(), m = t.newOp(), v = t.newOp();
                (h.opcode || c.hasNext() || m.opcode || i()) && (!h.opcode && c.hasNext() && c.next(h), h.opcode || m.opcode || f || p && p.hasNext());)
                if (!("=" == h.opcode && h.lines > 0) || h.attribs || m.opcode || f || p && p.hasNext())
                    if ("+" == h.opcode) {
                        if (h.lines > 1) {
                            var g = u.indexOf("\n", l) + 1 - l;
                            t.copyOp(h, v), h.chars -= g, h.lines--, v.lines = 1, v.chars = g } else t.copyOp(h, v), h.opcode = "";
                        o(v), l += v.chars, v.opcode = "" } else !m.opcode && i() && a(m), t._slicerZipperFunc(m, h, v, r), v.opcode && (o(v), v.opcode = "");
            else d.skipLines(h.lines), h.opcode = "";
            t.assert(!f, "line assembler not finished"), d.close() }, t.joinAttributionLines = function(e) {
            for (var n = t.mergingOpAssembler(), r = 0; r < e.length; r++)
                for (var i = e[r], a = t.opIterator(i); a.hasNext();) n.append(a.next());
            return n.toString() }, t.splitAttributionLines = function(e, n) {
            function r(e) { a.append(e), e.lines > 0 && (o.push(a.toString()), a.clear()), s += e.chars }
            for (var i = t.opIterator(e), a = t.mergingOpAssembler(), o = [], s = 0; i.hasNext();) {
                for (var c = i.next(), u = c.chars, l = c.lines; l > 1;) {
                    var d = n.indexOf("\n", s) + 1;
                    t.assert(d > 0, "newlineEnd <= 0 in splitAttributionLines"), c.chars = d - s, c.lines = 1, r(c), u -= c.chars, l -= c.lines }
                1 == l && (c.chars = u, c.lines = 1), r(c) }
            return o }, t.splitTextLines = function(e) {
            return e.match(/[^\n]*(?:\n|[^\n]$)/g) }, t.compose = function(e, n, r) {
            var i = t.unpack(e),
                a = t.unpack(n),
                o = i.oldLen,
                s = i.newLen;
            t.assert(s == a.oldLen, "mismatched composition of two changesets");
            var c = a.newLen,
                u = t.stringIterator(i.charBank),
                l = t.stringIterator(a.charBank),
                d = t.stringAssembler(),
                p = t.applyZip(i.ops, 0, a.ops, 0, function(e, n, i) {
                    var a = e.opcode,
                        o = n.opcode; "+" == a && "-" == o && u.skip(Math.min(e.chars, n.chars)), t._slicerZipperFunc(e, n, i, r), "+" == i.opcode && ("+" == o ? d.append(l.take(i.chars)) : d.append(u.take(i.chars))) });
            return t.pack(o, c, p, d.toString()) }, t.attributeTester = function(e, n) {
            function r(e) {
                return !1 }
            if (!n) return r;
            var i = n.putAttrib(e, !0);
            if (i < 0) return r;
            var a = new RegExp("\\*" + t.numToString(i) + "(?!\\w)");
            return function(e) {
                return a.test(e) } }, t.identity = function(e) {
            return t.pack(e, e, "", "") }, t.makeSplice = function(e, n, r, i, a, o) {
            var s = e.length;
            n >= s && (n = s - 1), r > e.length - n - 1 && (r = e.length - n - 1);
            var c = e.substring(n, n + r),
                u = s + i.length - c.length,
                l = t.smartOpAssembler();
            return l.appendOpWithText("=", e.substring(0, n)), l.appendOpWithText("-", c), l.appendOpWithText("+", i, a, o), l.endDocument(), t.pack(s, u, l.toString(), i) }, t.toSplices = function(e) {
            for (var n = t.unpack(e), r = [], i = 0, a = t.opIterator(n.ops), o = t.stringIterator(n.charBank), s = !1; a.hasNext();) {
                var c = a.next(); "=" == c.opcode ? (i += c.chars, s = !1) : (s || (r.push([i, i, ""]), s = !0), "-" == c.opcode ? (i += c.chars, r[r.length - 1][1] += c.chars) : "+" == c.opcode && (r[r.length - 1][2] += o.take(c.chars))) }
            return r }, t.characterRangeFollow = function(e, n, r, i) {
            for (var a = n, o = r, s = t.toSplices(e), c = 0, u = 0; u < s.length; u++) {
                var l = s[u],
                    d = l[0] + c,
                    p = l[1] + c,
                    f = l[2].length,
                    h = f - (p - d);
                d <= a && p >= o ? a = o = i ? d : d + f : p <= a ? (a += h, o += h) : d >= o || (d >= a && p <= o ? o += h : p < o ? (a = d + f, o += h) : o = d), c += h }
            return [a, o] }, t.moveOpsToNewPool = function(e, n, r) {
            var i = e.indexOf("$");
            i < 0 && (i = e.length);
            var a = e.substring(0, i),
                o = e.substring(i);
            return a.replace(/\*([0-9a-z]+)/g, function(e, i) {
                var a = t.parseNum(i),
                    o = n.getAttrib(a);
                o || t.error("Can't copy unknown attrib (reference attrib string to non-existant pool entry). Inconsistent attrib state!");
                var s = r.putAttrib(o);
                return "*" + t.numToString(s) }) + o }, t.makeAttribution = function(e) {
            var n = t.smartOpAssembler();
            return n.appendOpWithText("+", e), n.toString() }, t.eachAttribNumber = function(e, n) {
            var r = e.indexOf("$");
            r < 0 && (r = e.length);
            var i = e.substring(0, r);
            i.replace(/\*([0-9a-z]+)/g, function(e, r) {
                return n(t.parseNum(r)), "" }) }, t.filterAttribNumbers = function(e, n) {
            return t.mapAttribNumbers(e, n) }, t.mapAttribNumbers = function(e, n) {
            var r = e.indexOf("$");
            r < 0 && (r = e.length);
            var i = e.substring(0, r),
                a = i.replace(/\*([0-9a-z]+)/g, function(e, r) {
                    var i = n(t.parseNum(r));
                    return i === !0 ? e : "number" == typeof i ? "*" + t.numToString(i) : "" });
            return a + e.substring(r) }, t.makeAText = function(e, n) {
            return { text: e, attribs: n || t.makeAttribution(e) } }, t.applyToAText = function(e, n, r) {
            return { text: t.applyToText(e, n.text), attribs: t.applyToAttribution(e, n.attribs, r) } }, t.cloneAText = function(e) {
            return { text: e.text, attribs: e.attribs } }, t.copyAText = function(e, t) { t.text = e.text, t.attribs = e.attribs }, t.appendATextToAssembler = function(e, n) {
            for (var r = t.opIterator(e.attribs), i = t.newOp(); r.hasNext();)
                if (r.next(i), r.hasNext()) n.append(i);
                else if (i.lines <= 1) i.lines = 0, i.chars--, i.chars && n.append(i);
            else {
                var a = e.text.lastIndexOf("\n", e.text.length - 2) + 1,
                    o = e.text.length - a - 1;
                i.lines--, i.chars -= o + 1, n.append(i), i.lines = 0, i.chars = o, i.chars && n.append(i) } }, t.prepareForWire = function(n, r) {
            var i = new e,
                a = t.moveOpsToNewPool(n, r, i);
            return { translated: a, pool: i } }, t.isIdentity = function(e) {
            var n = t.unpack(e);
            return "" == n.ops && n.oldLen == n.newLen }, t.opAttributeValue = function(e, n, r) {
            return t.attribsAttributeValue(e.attribs, n, r) }, t.attribsAttributeValue = function(e, n, r) {
            var i = "";
            return e && t.eachAttribNumber(e, function(e) { r.getAttribKey(e) == n && (i = r.getAttribValue(e)) }), i }, t.builder = function(e) {
            var n = t.smartOpAssembler(),
                r = t.newOp(),
                i = t.stringAssembler(),
                a = { keep: function(e, i, o, s) {
                        return r.opcode = "=", r.attribs = o && t.makeAttribsString("=", o, s) || "", r.chars = e, r.lines = i || 0, n.append(r), a }, keepText: function(e, t, r) {
                        return n.appendOpWithText("=", e, t, r), a }, insert: function(e, t, r) {
                        return n.appendOpWithText("+", e, t, r), i.append(e), a }, remove: function(e, t) {
                        return r.opcode = "-", r.attribs = "", r.chars = e, r.lines = t || 0, n.append(r), a }, toString: function() { n.endDocument();
                        var r = e + n.getLengthChange();
                        return t.pack(e, r, n.toString(), i.toString()) } };
            return a }, t.makeAttribsString = function(e, n, r) {
            if (!n) return "";
            if ("string" == typeof n) return n;
            if (r && n && n.length) { n.length > 1 && (n = n.slice(), n.sort());
                for (var i = [], a = 0; a < n.length; a++) {
                    var o = n[a];
                    ("=" == e || "+" == e && o[1]) && i.push("*" + t.numToString(r.putAttrib(o))) }
                return i.join("") } }, t.subattribution = function(e, n, r) {
            function i() {
                if (c.chars)
                    for (; c.opcode && (s.opcode || a.hasNext());) s.opcode || a.next(s), c.opcode && s.opcode && c.chars >= s.chars && s.lines > 0 && c.lines <= 0 && c.lines++, t._slicerZipperFunc(s, c, u, null), u.opcode && (o.append(u), u.opcode = "") }
            var a = t.opIterator(e, 0),
                o = t.smartOpAssembler(),
                s = t.newOp(),
                c = t.newOp(),
                u = t.newOp();
            if (c.opcode = "-", c.chars = n, i(), void 0 === r)
                for (s.opcode && o.append(s); a.hasNext();) a.next(s), o.append(s);
            else c.opcode = "=", c.chars = r - n, i();
            return o.toString() }, t.inverse = function(e, n, r, i) {
            function a(e) {
                return n.get ? n.get(e) : n[e] }

            function o(e) {
                return r.get ? r.get(e) : r[e] }

            function s(e, n) {
                if (!h || d != p) { h = t.opIterator(o(p)), d = p;
                    for (var r = 0, i = !1; !i && h.hasNext();) h.next(m), r + m.chars >= f ? (m.chars -= f - r, i = !0) : r += m.chars }
                for (; e > 0;) { m.chars || h.hasNext() || (p++, f = 0, d = p, m.chars = 0, h = t.opIterator(o(p))), m.chars || h.next(m);
                    var a = Math.min(e, m.chars);
                    n(a, m.attribs, a == m.chars && m.lines > 0), e -= a, m.chars -= a, f += a }
                m.chars || h.hasNext() || (p++, f = 0) }

            function c(e, t) { t ? (p += t, f = 0) : h && d == p ? s(e, function() {}) : f += e }

            function u(e) {
                var n = 0,
                    r = t.stringAssembler(),
                    i = a(p).substring(f);
                n += i.length, r.append(i);
                for (var o = p + 1; n < e;) {
                    var s = a(o);
                    n += s.length, r.append(s), o++ }
                return r.toString().substring(0, e) }

            function l(e) {
                var t = {};
                return function(n) {
                    return t[n] || (t[n] = e(n)), t[n] } }
            for (var d, p = 0, f = 0, h = null, m = t.newOp("+"), v = t.unpack(e), g = t.opIterator(v.ops), w = t.builder(v.newLen), y = [], b = []; g.hasNext();) {
                var k = g.next();
                if ("=" == k.opcode)
                    if (k.attribs) { y.length = 0, b.length = 0, t.eachAttribNumber(k.attribs, function(e) { y.push(i.getAttribKey(e)), b.push(i.getAttribValue(e)) });
                        var x = l(function(e) {
                            for (var n = [], r = 0; r < y.length; r++) {
                                var a = y[r],
                                    o = b[r],
                                    s = t.attribsAttributeValue(e, a, i);
                                o != s && n.push([a, s]) }
                            return t.makeAttribsString("=", n, i) });
                        s(k.chars, function(e, t, n) { w.keep(e, n ? 1 : 0, x(t)) }) } else c(k.chars, k.lines), w.keep(k.chars, k.lines);
                else if ("+" == k.opcode) w.remove(k.chars, k.lines);
                else if ("-" == k.opcode) {
                    var A = u(k.chars),
                        C = 0;
                    s(k.chars, function(e, t, n) { w.insert(A.substr(C, e), t), C += e }) } }
            return t.checkRep(w.toString()) }, t.follow = function(e, n, r, i) {
            var a = t.unpack(e),
                o = t.unpack(n),
                s = a.oldLen,
                c = o.oldLen;
            t.assert(s == c, "mismatched follow - cannot transform cs1 on top of cs2");
            var u = t.stringIterator(a.charBank),
                l = t.stringIterator(o.charBank),
                d = a.newLen,
                p = 0,
                f = 0,
                h = t.attributeTester(["insertorder", "first"], i),
                m = t.applyZip(a.ops, 0, o.ops, 0, function(e, n, a) {
                    if ("+" == e.opcode || "+" == n.opcode) {
                        var o;
                        if ("+" != n.opcode) o = 1;
                        else if ("+" != e.opcode) o = 2;
                        else {
                            var s = u.peek(1),
                                c = l.peek(1),
                                d = h(e.attribs),
                                m = h(n.attribs);
                            o = d && !m ? 1 : m && !d ? 2 : "\n" == s && "\n" != c ? 2 : "\n" != s && "\n" == c ? 1 : r ? 2 : 1 }
                        1 == o ? (u.skip(e.chars), a.opcode = "=", a.lines = e.lines, a.chars = e.chars, a.attribs = "", e.opcode = "") : (l.skip(n.chars), t.copyOp(n, a), n.opcode = "") } else "-" == e.opcode ? n.opcode ? e.chars <= n.chars ? (n.chars -= e.chars, n.lines -= e.lines, e.opcode = "", n.chars || (n.opcode = "")) : (e.chars -= n.chars, e.lines -= n.lines, n.opcode = "") : e.opcode = "" : "-" == n.opcode ? (t.copyOp(n, a), e.opcode ? n.chars <= e.chars ? (e.chars -= n.chars, e.lines -= n.lines, n.opcode = "", e.chars || (e.opcode = "")) : (a.lines = e.lines, a.chars = e.chars, n.lines -= e.lines, n.chars -= e.chars, e.opcode = "") : n.opcode = "") : e.opcode ? n.opcode ? (a.opcode = "=", a.attribs = t.followAttributes(e.attribs, n.attribs, i), e.chars <= n.chars ? (a.chars = e.chars, a.lines = e.lines, n.chars -= e.chars, n.lines -= e.lines, e.opcode = "", n.chars || (n.opcode = "")) : (a.chars = n.chars, a.lines = n.lines, e.chars -= n.chars, e.lines -= n.lines, n.opcode = "")) : e.opcode = "" : (t.copyOp(n, a), n.opcode = "");
                    switch (a.opcode) {
                        case "=":
                            p += a.chars, f += a.chars;
                            break;
                        case "-":
                            p += a.chars;
                            break;
                        case "+":
                            f += a.chars } });
            return f += d - p, t.pack(d, f, m, o.charBank) }, t.followAttributes = function(e, n, r) {
            if (!n || !r) return "";
            if (!e) return n;
            var i = [];
            n.replace(/\*([0-9a-z]+)/g, function(e, n) {
                return i.push(r.getAttrib(t.parseNum(n))), "" }), e.replace(/\*([0-9a-z]+)/g, function(e, n) {
                for (var a = r.getAttrib(t.parseNum(n)), o = 0; o < i.length; o++) {
                    var s = i[o];
                    if (a[0] == s[0]) { a[1] <= s[1] && i.splice(o, 1);
                        break } }
                return "" });
            for (var a = t.stringAssembler(), o = 0; o < i.length; o++) a.append("*"), a.append(t.numToString(r.putAttrib(i[o])));
            return a.toString() }, t.composeWithDeletions = function(e, n, r) {
            var i = t.unpack(e),
                a = t.unpack(n),
                o = i.oldLen,
                s = i.newLen;
            t.assert(s == a.oldLen, "mismatched composition of two changesets");
            var c = a.newLen,
                u = t.stringIterator(i.charBank),
                l = t.stringIterator(a.charBank),
                d = t.stringAssembler(),
                p = t.applyZip(i.ops, 0, a.ops, 0, function(e, n, i) {
                    var a = e.opcode,
                        o = n.opcode; "+" == a && "-" == o && u.skip(Math.min(e.chars, n.chars)), t._slicerZipperFuncWithDeletions(e, n, i, r), "+" == i.opcode && ("+" == o ? d.append(l.take(i.chars)) : d.append(u.take(i.chars))) });
            return t.pack(o, c, p, d.toString()) }, t._slicerZipperFuncWithDeletions = function(e, n, r, i) {
            if ("-" == e.opcode) t.copyOp(e, r), e.opcode = "";
            else if (e.opcode) switch (n.opcode) {
                case "-":
                    n.chars <= e.chars ? ("=" == e.opcode && (r.opcode = "-", r.chars = n.chars, r.lines = n.lines, r.attribs = n.attribs), e.chars -= n.chars, e.lines -= n.lines, n.opcode = "", e.chars || (e.opcode = "")) : ("=" == e.opcode && (r.opcode = "-", r.chars = e.chars, r.lines = e.lines, r.attribs = n.attribs), n.chars -= e.chars, n.lines -= e.lines, e.opcode = "");
                    break;
                case "+":
                    t.copyOp(n, r), n.opcode = "";
                    break;
                case "=":
                    n.chars <= e.chars ? (r.opcode = e.opcode, r.chars = n.chars, r.lines = n.lines, r.attribs = t.composeAttributes(e.attribs, n.attribs, "=" == e.opcode, i), n.opcode = "", e.chars -= n.chars, e.lines -= n.lines, e.chars || (e.opcode = "")) : (r.opcode = e.opcode, r.chars = e.chars, r.lines = e.lines, r.attribs = t.composeAttributes(e.attribs, n.attribs, "=" == e.opcode, i), e.opcode = "", n.chars -= e.chars, n.lines -= e.lines);
                    break;
                case "":
                    t.copyOp(e, r), e.opcode = "" } else t.copyOp(n, r), n.opcode = "" }, t
    }.apply(t, r), !(void 0 !== i && (e.exports = i))
}, function(e, t, n) {
    var r;
    r = function() {
        var e = function() { this.numToAttrib = {}, this.attribToNum = {}, this.nextNum = 0 };
        return e.prototype.putAttrib = function(e, t) {
            var n = String(e);
            if (n in this.attribToNum) return this.attribToNum[n];
            if (t) return -1;
            var r = this.nextNum++;
            return this.attribToNum[n] = r, this.numToAttrib[r] = [String(e[0] || ""), String(e[1] || "")], r }, e.prototype.getAttrib = function(e) {
            var t = this.numToAttrib[e];
            return t ? [t[0], t[1]] : t }, e.prototype.getAttribKey = function(e) {
            var t = this.numToAttrib[e];
            return t ? t[0] : "" }, e.prototype.getAttribValue = function(e) {
            var t = this.numToAttrib[e];
            return t ? t[1] : "" }, e.prototype.eachAttrib = function(e) {
            for (var t in this.numToAttrib) {
                var n = this.numToAttrib[t];
                e(n[0], n[1]) } }, e.prototype.toJsonable = function() {
            return { numToAttrib: this.numToAttrib, nextNum: this.nextNum } }, e.prototype.fromJsonable = function(e) { this.numToAttrib = e.numToAttrib, this.nextNum = e.nextNum, this.attribToNum = {};
            for (var t in this.numToAttrib) this.attribToNum[String(this.numToAttrib[t])] = Number(t);
            return this }, e }.call(t, n, t, e), !(void 0 !== r && (e.exports = r)) }, , , , , , , , , , , , , , , , , , , , function(e, t) {
    function n() {
        const e = { fileSize: 10485760, attachmentCount: 1 / 0, teamworkerCount: 5 },
            t = cow.currentUser;
        if (!t || !t.accountType) return e;
        const n = t.accountType;
        return "personal_free" === n ? e : ("personal_premium" === n ? (e.fileSize = 524288e3, e.attachmentCount = 1 / 0) : "enterprise_dingding" === n ? e.teamworkerCount = 1 / 0 : "enterprise_standard" === n && (e.fileSize = 524288e3, e.attachmentCount = 1 / 0, e.teamworkerCount = 1 / 0), e) }
    e.exports = { initLimition: n } }, , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , function(e, t, n) {
    var r, i;
    (function(a, o) { r = [n(186), n(384)], i = function(e, t) {
            var n, r, i, s, c, u, l, d, p, f, h, m, v, g;
            return c = window.cow, s = [], r = "#5292F7", n = ["#A69ACA", "#EC6E79", "#F39801", "#00A496", "#FFD900", "#674599", "#83D4E7", "#AF7C4F", "#B8D200", "#9D5B8B", "#F15B1C", "#41464B", "#CD9F00", "#47885E", "#D7003B", "#436EC9", "#F897C7", "#9C4109", "#6E7A56", "#83D4E7", "#83609C", "#F8DCDB", "#E7C39C", "#87B151", "#9E0038", "#B09FC9", "#7DCFC8", "#BEE7F0", "#CD9F00", "#CBAAC2", "#F5C5C9", "#CD8C28", "#1A5A52", "#9EB4E1", "#406619", "#CAB738", "#F6C751", "#8D699D", "#613A14", "#189DEC"], l = function(e) {
                return +e === c.currentUser.id ? r : c.shareObj && c.shareObj[e] ? n[c.shareObj[e].index % 40] : "#41464B" }, f = function(e) {
                return a.get("/api/getUserInfo", { email: e }) }, p = function(e) {
                var t;
                return c.shareList = [], c.shareObj = {}, t = a.Deferred(), ["doc", "spreadsheet"].indexOf(c.pageType) < 0 || c.authorized ? e.team_id ? a.get("/smapi/teams/mine/members", { team_id: e.team_id }).done(function(n) {
                    return 0 === n.code ? (c.shareList = n.data, t.resolve(e)) : t.reject() }).fail(function() {
                    return t.reject() }) : a.get("/api/share/" + e.guid).done(function(n) {
                    var r, i;
                    return 0 === n.code ? (console.dir(n.data), r = n.data.grand, i = [], o.forEach(r, function(e) {
                        return o.forEach(e.users, function(t) {
                            return t.isGrand = !0, +e.user_id === +t.id && (t.isOwner = !0), i.push(t) }) }), c.shareList = i.concat(n.data.current), t.resolve(e)) : t.reject() }).fail(function() {
                    return t.reject() }) : a.get("/api/" + e.guid + "/user_list").done(function(n) {
                    return 0 === n.code ? (c.shareList = n.data, t.resolve(e)) : t.reject() }).fail(function() {
                    return t.reject() }), t.promise() }, d = function() {
                var e;
                return e = a.Deferred(), a.get("/api/share/recent_contact").done(function(t) {
                    return e.resolve(t.data) }).fail(function() {
                    return e.reject() }), e }, h = function(e, t) {
                if (!o.find(c.shareList, { id: e.id })) return t.push(e), o.delay(function() {
                    return window.pad && window.pad.padeditor && window.pad.padeditor.ace.setAuthorInfo(e.id, { name: e.name, bgcolor: l(e.id) }) }, 0) }, g = function() {
                return m(s), s = [] }, v = function(e, t) {
                if (!c.readonly) switch (o.isArray(e) || (e = [e]), e = e.map(function(e) {
                    return o.defaults(e, window.cow.defaultAnonymousUser) }), t) {
                    case "USER_ENTER":
                        return i(e);
                    case "USER_LEAVE":
                        return m(e);
                    case "RECONNECT_READY":
                        if (e.length > 0) return i(e) } }, i = function(n) {
                var r, i;
                return r = a(".header-avatar-wrap"), i = s.length, o.forEach(n, function(n) {
                    var u;
                    if (n.id !== c.currentUser.id) return u = !1, o.forEach(s, function(e) {
                        if (n.id === e.id) return e.count++, u = !0 }), u ? void 0 : (n.color = l(n.id), n.count = 1, n.index = ++i, n.avatar = a(o.template(t)(n)), r.append(n.avatar), o.delay(function() {
                        return n.avatar.css({ right: 28 * n.index }) }, 50), s.push(n), e.notify("avatar:add", n)) }) }, m = function(e) {
                var t, n;
                return t = a(".header-avatar-wrap"), n = s.length, e === s ? o.forEach(s, function(e) {
                    return u(e) }) : o.forEach(e, function(e) {
                    var t;
                    if (e.id !== c.currentUser.id) return t = -1, o.forEach(s, function(n, r) {
                        return n.id === e.id && --n.count <= 0 ? (t = r, u(n)) : t >= 0 && r > t ? (n.index--, n.avatar.css({ right: 28 * n.index })) : void 0 }), t >= 0 ? s.splice(t, 1) : void 0 }) }, u = function(t) {
                if (t.avatar) return t.avatar.css({ opacity: 0 }), o.delay(function() {
                    return t.avatar.remove() }, 300), e.notify("avatar:remove", t) }, e.on("socket:invite", function(t) {
                var n, r;
                return "create" === t.db_event ? (r = this, n = [], o.isArray(t.data) ? o.forEach(t.data, function(e) {
                    return h(e, n) }) : h(t.data, n), c.shareList = c.shareList.concat(n)) : "delete" === t.db_event && (c.shareList = o.remove(c.shareList, function(e) {
                    var n;
                    return n = !0, o.forEach(t.data, function(t) {
                        if (e.id === t.id) return n = !1, window.pad && window.pad.padeditor && window.pad.padeditor.ace.setAuthorInfo(e.id) }), n })), e.notify("socket:afterInvite") }), { CURRENT_COLOR: r, reset: g, getColor: l, getShareUsers: p, getRecentMember: d, renderAvatar: v, getUserInfo: f } }.apply(t, r), !(void 0 !== i && (e.exports = i)) }).call(t, n(1), n(4)) }, function(e, t) { e.exports = '<div class="header-avatar" style="z-index: <%= 110 - index %>" data-user-id="<%= id %>">\n\t<div class="avatar-wrap">\n\t\t<img src="<%= avatar %>" alt="<%= name %>" />\n\t</div>\n\t<span class="header-avatar-color" style="background-color:<%= color %>;"></span>\n\t<span class="tooltip header-avatar-tooltip s-tooltip"><%= name %></span>\n</div>' }, , , , , , , , , , , , , function(e, t, n) { "use strict";

    function r(e, t) {
        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function") }
    var i = function() {
            function e(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var r = t[n];
                    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r) } }
            return function(t, n, r) {
                return n && e(t.prototype, n), r && e(t, r), t } }(),
        a = n(4),
        o = function() {
            function e(t) { r(this, e), this.key = "shimo-offline-data", this.userId = t.userId, t.localStorage || "undefined" == typeof localStorage || (t.localStorage = localStorage), this.store = t.localStorage;
                try { this.store.setItem("test", "test") } catch (e) {
                    throw new Error("localStorage is not working") } }
            return i(e, [{ key: "_getAll", value: function() {
                    return JSON.parse(this.store.getItem(this.key)) || {} } }, { key: "getAll", value: function() {
                    return this._getAll()[this.userId] || {} } }, { key: "get", value: function(e) {
                    return a.get(this._getAll(), this.userId + "." + e) } }, { key: "remove", value: function(e) {
                    var t = this._getAll();
                    a.get(t, this.userId + "." + e) && delete t[this.userId][e], this.store.setItem(this.key, JSON.stringify(t)) } }, { key: "set", value: function(e, t) {
                    var n = this._getAll(),
                        r = this.userId;
                    n[r] = n[r] || {}, n[r][e] = a.assign({ guid: e }, t), this.store.setItem(this.key, JSON.stringify(n)) } }]), e }();
    e.exports = o }, function(e, t, n) {
    var r, i;
    r = [n(399)], i = function(e) {
        return e.configure({ minimum: .6, easing: "linear", positionUsing: "", speed: 250, trickle: !0, trickleRate: .01, trickleSpeed: 150, showSpinner: !1, barSelector: '[role="bar"]', parent: "body", template: '<div class="bar" role="bar"><div class="peg"></div></div></div></div>' }), e }.apply(t, r), !(void 0 !== i && (e.exports = i)) }, function(e, t, n) {
    var r, i;! function(a, o) { r = o, i = "function" == typeof r ? r.call(t, n, t, e) : r, !(void 0 !== i && (e.exports = i)) }(this, function() {
        function e(e, t, n) {
            return e < t ? t : e > n ? n : e }

        function t(e) {
            return 100 * (-1 + e) }

        function n(e, n, r) {
            var i;
            return i = "translate3d" === u.positionUsing ? { transform: "translate3d(" + t(e) + "%,0,0)" } : "translate" === u.positionUsing ? { transform: "translate(" + t(e) + "%,0)" } : { "margin-left": t(e) + "%" }, i.transition = "all " + n + "ms " + r, i }

        function r(e, t) {
            var n = "string" == typeof e ? e : o(e);
            return n.indexOf(" " + t + " ") >= 0 }

        function i(e, t) {
            var n = o(e),
                i = n + t;
            r(n, t) || (e.className = i.substring(1)) }

        function a(e, t) {
            var n, i = o(e);
            r(e, t) && (n = i.replace(" " + t + " ", " "), e.className = n.substring(1, n.length - 1)) }

        function o(e) {
            return (" " + (e.className || "") + " ").replace(/\s+/gi, " ") }

        function s(e) { e && e.parentNode && e.parentNode.removeChild(e) }
        var c = {};
        c.version = "0.2.0";
        var u = c.settings = { minimum: .08, easing: "ease", positionUsing: "", speed: 200, trickle: !0, trickleRate: .02, trickleSpeed: 800, showSpinner: !0, barSelector: '[role="bar"]', spinnerSelector: '[role="spinner"]', parent: "body", template: '<div class="bar" role="bar"><div class="peg"></div></div><div class="spinner" role="spinner"><div class="spinner-icon"></div></div>' };
        c.configure = function(e) {
                var t, n;
                for (t in e) n = e[t], void 0 !== n && e.hasOwnProperty(t) && (u[t] = n);
                return this }, c.status = null, c.set = function(t) {
                var r = c.isStarted();
                t = e(t, u.minimum, 1), c.status = 1 === t ? null : t;
                var i = c.render(!r),
                    a = i.querySelector(u.barSelector),
                    o = u.speed,
                    s = u.easing;
                return i.offsetWidth, l(function(e) { "" === u.positionUsing && (u.positionUsing = c.getPositioningCSS()), d(a, n(t, o, s)), 1 === t ? (d(i, { transition: "none", opacity: 1 }), i.offsetWidth, setTimeout(function() { d(i, { transition: "all " + o + "ms linear", opacity: 0 }), setTimeout(function() { c.remove(), e() }, o) }, o)) : setTimeout(e, o) }), this }, c.isStarted = function() {
                return "number" == typeof c.status }, c.start = function() { c.status || c.set(0);
                var e = function() { setTimeout(function() { c.status && (c.trickle(), e()) }, u.trickleSpeed) };
                return u.trickle && e(), this }, c.done = function(e) {
                return e || c.status ? c.inc(.3 + .5 * Math.random()).set(1) : this }, c.inc = function(t) {
                var n = c.status;
                return n ? ("number" != typeof t && (t = (1 - n) * e(Math.random() * n, .1, .95)), n = e(n + t, 0, .994), c.set(n)) : c.start() }, c.trickle = function() {
                return c.inc(Math.random() * u.trickleRate) },
            function() {
                var e = 0,
                    t = 0;
                c.promise = function(n) {
                    return n && "resolved" !== n.state() ? (0 === t && c.start(), e++, t++, n.always(function() { t--, 0 === t ? (e = 0, c.done()) : c.set((e - t) / e) }), this) : this } }(), c.render = function(e) {
                if (c.isRendered()) return document.getElementById("nprogress");
                i(document.documentElement, "nprogress-busy");
                var n = document.createElement("div");
                n.id = "nprogress", n.innerHTML = u.template;
                var r, a = n.querySelector(u.barSelector),
                    o = e ? "-100" : t(c.status || 0),
                    l = document.querySelector(u.parent);
                return d(a, { transition: "all 0 linear", transform: "translate3d(" + o + "%,0,0)" }), u.showSpinner || (r = n.querySelector(u.spinnerSelector), r && s(r)), l != document.body && i(l, "nprogress-custom-parent"), l.appendChild(n), n }, c.remove = function() { a(document.documentElement, "nprogress-busy"), a(document.querySelector(u.parent), "nprogress-custom-parent");
                var e = document.getElementById("nprogress");
                e && s(e) }, c.isRendered = function() {
                return !!document.getElementById("nprogress") }, c.getPositioningCSS = function() {
                var e = document.body.style,
                    t = "WebkitTransform" in e ? "Webkit" : "MozTransform" in e ? "Moz" : "msTransform" in e ? "ms" : "OTransform" in e ? "O" : "";
                return t + "Perspective" in e ? "translate3d" : t + "Transform" in e ? "translate" : "margin" };
        var l = function() {
                function e() {
                    var n = t.shift();
                    n && n(e) }
                var t = [];
                return function(n) { t.push(n), 1 == t.length && e() } }(),
            d = function() {
                function e(e) {
                    return e.replace(/^-ms-/, "ms-").replace(/-([\da-z])/gi, function(e, t) {
                        return t.toUpperCase() }) }

                function t(e) {
                    var t = document.body.style;
                    if (e in t) return e;
                    for (var n, r = i.length, a = e.charAt(0).toUpperCase() + e.slice(1); r--;)
                        if (n = i[r] + a, n in t) return n;
                    return e }

                function n(n) {
                    return n = e(n), a[n] || (a[n] = t(n)) }

                function r(e, t, r) { t = n(t), e.style[t] = r }
                var i = ["Webkit", "O", "Moz", "ms"],
                    a = {};
                return function(e, t) {
                    var n, i, a = arguments;
                    if (2 == a.length)
                        for (n in t) i = t[n], void 0 !== i && t.hasOwnProperty(n) && r(e, n, i);
                    else r(e, a[1], a[2]) } }();
        return c }) }, , , , , , , , , , , , , , , , , , , , , , , , , , function(e, t, n) {
    (function(t) {
        function n(e, t) { window.socket && window.socket.emit(e, t) }

        function r(e, n) {
            if (!window.cow.idx) {
                var r = window.cow.store.spreadsheet,
                    i = r && r.getState().msg.revision || 0,
                    a = { component: "pad", type: "ready" === e ? "CLIENT_READY" : "CLIENT_QUIT", padId: window.cow.currentSheetGuid, reconnect: !0, client_rev: i, sessionID: t("sessionID"), token: t("token"), protocolVersion: 2 };
                this.send("message", a) } }
        e.exports = { send: n, sendClientStatus: r } }).call(t, n(205)) }, , , , , , , , , , , , function(e, t, n) {
    (function(t) { e.exports = t.ZeroClipboard = n(438) }).call(t, function() {
        return this }()) }, function(e, t, n) {
    var r;
    ! function(i, a) {
        "use strict";
        var o, s, c, u = i,
            l = u.document,
            d = u.navigator,
            p = u.setTimeout,
            f = u.clearTimeout,
            h = u.setInterval,
            m = u.clearInterval,
            v = u.getComputedStyle,
            g = u.encodeURIComponent,
            w = u.ActiveXObject,
            y = u.Error,
            b = u.Number.parseInt || u.parseInt,
            k = u.Number.parseFloat || u.parseFloat,
            x = u.Number.isNaN || u.isNaN,
            A = u.Date.now,
            C = u.Object.keys,
            T = u.Object.defineProperty,
            _ = u.Object.prototype.hasOwnProperty,
            E = u.Array.prototype.slice,
            S = function() {
                var e = function(e) {
                    return e };
                if ("function" == typeof u.wrap && "function" == typeof u.unwrap) try {
                    var t = l.createElement("div"),
                        n = u.unwrap(t);
                    1 === t.nodeType && n && 1 === n.nodeType && (e = u.unwrap) } catch (e) {}
                return e }(),
            O = function(e) {
                return E.call(e, 0) },
            I = function() {
                var e, t, n, r, i, o, s = O(arguments),
                    c = s[0] || {};
                for (e = 1, t = s.length; e < t; e++)
                    if (null != (n = s[e]))
                        for (r in n) _.call(n, r) && (i = c[r], o = n[r], c !== o && o !== a && (c[r] = o));
                return c },
            j = function(e) {
                var t, n, r, i;
                if ("object" != typeof e || null == e || "number" == typeof e.nodeType) t = e;
                else if ("number" == typeof e.length)
                    for (t = [], n = 0, r = e.length; n < r; n++) _.call(e, n) && (t[n] = j(e[n]));
                else { t = {};
                    for (i in e) _.call(e, i) && (t[i] = j(e[i])) }
                return t },
            L = function(e, t) {
                for (var n = {}, r = 0, i = t.length; r < i; r++) t[r] in e && (n[t[r]] = e[t[r]]);
                return n },
            N = function(e, t) {
                var n = {};
                for (var r in e) t.indexOf(r) === -1 && (n[r] = e[r]);
                return n },
            D = function(e) {
                if (e)
                    for (var t in e) _.call(e, t) && delete e[t];
                return e },
            M = function(e, t) {
                if (e && 1 === e.nodeType && e.ownerDocument && t && (1 === t.nodeType && t.ownerDocument && t.ownerDocument === e.ownerDocument || 9 === t.nodeType && !t.ownerDocument && t === e.ownerDocument))
                    do {
                        if (e === t) return !0;
                        e = e.parentNode } while (e);
                return !1 },
            P = function(e) {
                var t;
                return "string" == typeof e && e && (t = e.split("#")[0].split("?")[0], t = e.slice(0, e.lastIndexOf("/") + 1)), t },
            $ = function(e) {
                var t, n;
                return "string" == typeof e && e && (n = e.match(/^(?:|[^:@]*@|.+\)@(?=http[s]?|file)|.+?\s+(?: at |@)(?:[^:\(]+ )*[\(]?)((?:http[s]?|file):\/\/[\/]?.+?\/[^:\)]*?)(?::\d+)(?::\d+)?/), n && n[1] ? t = n[1] : (n = e.match(/\)@((?:http[s]?|file):\/\/[\/]?.+?\/[^:\)]*?)(?::\d+)(?::\d+)?/), n && n[1] && (t = n[1]))), t },
            U = function() {
                var e, t;
                try {
                    throw new y } catch (e) { t = e }
                return t && (e = t.sourceURL || t.fileName || $(t.stack)),
                    e
            },
            B = function() {
                var e, t, n;
                if (l.currentScript && (e = l.currentScript.src)) return e;
                if (t = l.getElementsByTagName("script"), 1 === t.length) return t[0].src || a;
                if ("readyState" in t[0])
                    for (n = t.length; n--;)
                        if ("interactive" === t[n].readyState && (e = t[n].src)) return e;
                return "loading" === l.readyState && (e = t[t.length - 1].src) ? e : (e = U()) ? e : a },
            F = function() {
                var e, t, n, r = l.getElementsByTagName("script");
                for (e = r.length; e--;) {
                    if (!(n = r[e].src)) { t = null;
                        break }
                    if (n = P(n), null == t) t = n;
                    else if (t !== n) { t = null;
                        break } }
                return t || a },
            R = function() {
                var e = P(B()) || F() || "";
                return e + "ZeroClipboard.swf" },
            z = function() {
                return null == i.opener && (!!i.top && i != i.top || !!i.parent && i != i.parent) }(),
            q = { bridge: null, version: "0.0.0", pluginType: "unknown", disabled: null, outdated: null, sandboxed: null, unavailable: null, degraded: null, deactivated: null, overdue: null, ready: null },
            K = "11.0.0",
            W = {},
            V = {},
            Q = null,
            G = 0,
            H = 0,
            Y = { ready: "Flash communication is established", error: { "flash-disabled": "Flash is disabled or not installed. May also be attempting to run Flash in a sandboxed iframe, which is impossible.", "flash-outdated": "Flash is too outdated to support ZeroClipboard", "flash-sandboxed": "Attempting to run Flash in a sandboxed iframe, which is impossible", "flash-unavailable": "Flash is unable to communicate bidirectionally with JavaScript", "flash-degraded": "Flash is unable to preserve data fidelity when communicating with JavaScript", "flash-deactivated": "Flash is too outdated for your browser and/or is configured as click-to-activate.\nThis may also mean that the ZeroClipboard SWF object could not be loaded, so please check your `swfPath` configuration and/or network connectivity.\nMay also be attempting to run Flash in a sandboxed iframe, which is impossible.", "flash-overdue": "Flash communication was established but NOT within the acceptable time limit", "version-mismatch": "ZeroClipboard JS version number does not match ZeroClipboard SWF version number", "clipboard-error": "At least one error was thrown while ZeroClipboard was attempting to inject your data into the clipboard", "config-mismatch": "ZeroClipboard configuration does not match Flash's reality", "swf-not-found": "The ZeroClipboard SWF object could not be loaded, so please check your `swfPath` configuration and/or network connectivity" } },
            Z = ["flash-unavailable", "flash-degraded", "flash-overdue", "version-mismatch", "config-mismatch", "clipboard-error"],
            J = ["flash-disabled", "flash-outdated", "flash-sandboxed", "flash-unavailable", "flash-degraded", "flash-deactivated", "flash-overdue"],
            X = new RegExp("^flash-(" + J.map(function(e) {
                return e.replace(/^flash-/, "") }).join("|") + ")$"),
            ee = new RegExp("^flash-(" + J.slice(1).map(function(e) {
                return e.replace(/^flash-/, "") }).join("|") + ")$"),
            te = { swfPath: R(), trustedDomains: i.location.host ? [i.location.host] : [], cacheBust: !0, forceEnhancedClipboard: !1, flashLoadTimeout: 3e4, autoActivate: !0, bubbleEvents: !0, containerId: "global-zeroclipboard-html-bridge", containerClass: "global-zeroclipboard-container", swfObjectId: "global-zeroclipboard-flash-bridge", hoverClass: "zeroclipboard-is-hover", activeClass: "zeroclipboard-is-active", forceHandCursor: !1, title: null, zIndex: 999999999 },
            ne = function(e) {
                if ("object" == typeof e && null !== e)
                    for (var t in e)
                        if (_.call(e, t))
                            if (/^(?:forceHandCursor|title|zIndex|bubbleEvents)$/.test(t)) te[t] = e[t];
                            else if (null == q.bridge)
                    if ("containerId" === t || "swfObjectId" === t) {
                        if (!ge(e[t])) throw new Error("The specified `" + t + "` value is not valid as an HTML4 Element ID");
                        te[t] = e[t] } else te[t] = e[t]; {
                        if ("string" != typeof e || !e) return j(te);
                        if (_.call(te, e)) return te[e] } },
            re = function() {
                return He(), { browser: L(d, ["userAgent", "platform", "appName"]), flash: N(q, ["bridge"]), zeroclipboard: { version: Ze.version, config: Ze.config() } } },
            ie = function() {
                return !!(q.disabled || q.outdated || q.sandboxed || q.unavailable || q.degraded || q.deactivated) },
            ae = function(e, t) {
                var n, r, i, s = {};
                if ("string" == typeof e && e) i = e.toLowerCase().split(/\s+/);
                else if ("object" == typeof e && e && "undefined" == typeof t)
                    for (n in e) _.call(e, n) && "string" == typeof n && n && "function" == typeof e[n] && Ze.on(n, e[n]);
                if (i && i.length) {
                    for (n = 0, r = i.length; n < r; n++) e = i[n].replace(/^on/, ""), s[e] = !0, W[e] || (W[e] = []), W[e].push(t);
                    if (s.ready && q.ready && Ze.emit({ type: "ready" }), s.error) {
                        for (n = 0, r = J.length; n < r; n++)
                            if (q[J[n].replace(/^flash-/, "")] === !0) { Ze.emit({ type: "error", name: J[n] });
                                break }
                        o !== a && Ze.version !== o && Ze.emit({ type: "error", name: "version-mismatch", jsVersion: Ze.version, swfVersion: o }) } }
                return Ze },
            oe = function(e, t) {
                var n, r, i, a, o;
                if (0 === arguments.length) a = C(W);
                else if ("string" == typeof e && e) a = e.split(/\s+/);
                else if ("object" == typeof e && e && "undefined" == typeof t)
                    for (n in e) _.call(e, n) && "string" == typeof n && n && "function" == typeof e[n] && Ze.off(n, e[n]);
                if (a && a.length)
                    for (n = 0, r = a.length; n < r; n++)
                        if (e = a[n].toLowerCase().replace(/^on/, ""), o = W[e], o && o.length)
                            if (t)
                                for (i = o.indexOf(t); i !== -1;) o.splice(i, 1), i = o.indexOf(t, i);
                            else o.length = 0;
                return Ze },
            se = function(e) {
                var t;
                return t = "string" == typeof e && e ? j(W[e]) || null : j(W) },
            ce = function(e) {
                var t, n, r;
                if (e = we(e), e && !Te(e)) return "ready" === e.type && q.overdue === !0 ? Ze.emit({ type: "error", name: "flash-overdue" }) : (t = I({}, e), Ae.call(this, t), "copy" === e.type && (r = Ne(V), n = r.data, Q = r.formatMap), n) },
            ue = function() {
                var e = q.sandboxed;
                if (He(), "boolean" != typeof q.ready && (q.ready = !1), q.sandboxed !== e && q.sandboxed === !0) q.ready = !1, Ze.emit({ type: "error", name: "flash-sandboxed" });
                else if (!Ze.isFlashUnusable() && null === q.bridge) {
                    var t = te.flashLoadTimeout; "number" == typeof t && t >= 0 && (G = p(function() { "boolean" != typeof q.deactivated && (q.deactivated = !0), q.deactivated === !0 && Ze.emit({ type: "error", name: "flash-deactivated" }) }, t)), q.overdue = !1, je() } },
            le = function() { Ze.clearData(), Ze.blur(), Ze.emit("destroy"), Le(), Ze.off() },
            de = function(e, t) {
                var n;
                if ("object" == typeof e && e && "undefined" == typeof t) n = e, Ze.clearData();
                else {
                    if ("string" != typeof e || !e) return;
                    n = {}, n[e] = t }
                for (var r in n) "string" == typeof r && r && _.call(n, r) && "string" == typeof n[r] && n[r] && (V[r] = n[r]) },
            pe = function(e) { "undefined" == typeof e ? (D(V), Q = null) : "string" == typeof e && _.call(V, e) && delete V[e] },
            fe = function(e) {
                return "undefined" == typeof e ? j(V) : "string" == typeof e && _.call(V, e) ? V[e] : void 0 },
            he = function(e) {
                if (e && 1 === e.nodeType) { s && (Re(s, te.activeClass), s !== e && Re(s, te.hoverClass)), s = e, Fe(e, te.hoverClass);
                    var t = e.getAttribute("title") || te.title;
                    if ("string" == typeof t && t) {
                        var n = Ie(q.bridge);
                        n && n.setAttribute("title", t) }
                    var r = te.forceHandCursor === !0 || "pointer" === ze(e, "cursor");
                    Qe(r), Ve() } },
            me = function() {
                var e = Ie(q.bridge);
                e && (e.removeAttribute("title"), e.style.left = "0px", e.style.top = "-9999px", e.style.width = "1px", e.style.height = "1px"), s && (Re(s, te.hoverClass), Re(s, te.activeClass), s = null) },
            ve = function() {
                return s || null },
            ge = function(e) {
                return "string" == typeof e && e && /^[A-Za-z][A-Za-z0-9_:\-\.]*$/.test(e) },
            we = function(e) {
                var t;
                if ("string" == typeof e && e ? (t = e, e = {}) : "object" == typeof e && e && "string" == typeof e.type && e.type && (t = e.type), t) { t = t.toLowerCase(), !e.target && (/^(copy|aftercopy|_click)$/.test(t) || "error" === t && "clipboard-error" === e.name) && (e.target = c), I(e, { type: t, target: e.target || s || null, relatedTarget: e.relatedTarget || null, currentTarget: q && q.bridge || null, timeStamp: e.timeStamp || A() || null });
                    var n = Y[e.type];
                    return "error" === e.type && e.name && n && (n = n[e.name]), n && (e.message = n), "ready" === e.type && I(e, { target: null, version: q.version }), "error" === e.type && (X.test(e.name) && I(e, { target: null, minimumVersion: K }), ee.test(e.name) && I(e, { version: q.version })), "copy" === e.type && (e.clipboardData = { setData: Ze.setData, clearData: Ze.clearData }), "aftercopy" === e.type && (e = De(e, Q)), e.target && !e.relatedTarget && (e.relatedTarget = ye(e.target)), be(e) } },
            ye = function(e) {
                var t = e && e.getAttribute && e.getAttribute("data-clipboard-target");
                return t ? l.getElementById(t) : null },
            be = function(e) {
                if (e && /^_(?:click|mouse(?:over|out|down|up|move))$/.test(e.type)) {
                    var t = e.target,
                        n = "_mouseover" === e.type && e.relatedTarget ? e.relatedTarget : a,
                        r = "_mouseout" === e.type && e.relatedTarget ? e.relatedTarget : a,
                        i = qe(t),
                        o = u.screenLeft || u.screenX || 0,
                        s = u.screenTop || u.screenY || 0,
                        c = l.body.scrollLeft + l.documentElement.scrollLeft,
                        d = l.body.scrollTop + l.documentElement.scrollTop,
                        p = i.left + ("number" == typeof e._stageX ? e._stageX : 0),
                        f = i.top + ("number" == typeof e._stageY ? e._stageY : 0),
                        h = p - c,
                        m = f - d,
                        v = o + h,
                        g = s + m,
                        w = "number" == typeof e.movementX ? e.movementX : 0,
                        y = "number" == typeof e.movementY ? e.movementY : 0;
                    delete e._stageX, delete e._stageY, I(e, { srcElement: t, fromElement: n, toElement: r, screenX: v, screenY: g, pageX: p, pageY: f, clientX: h, clientY: m, x: h, y: m, movementX: w, movementY: y, offsetX: 0, offsetY: 0, layerX: 0, layerY: 0 }) }
                return e },
            ke = function(e) {
                var t = e && "string" == typeof e.type && e.type || "";
                return !/^(?:(?:before)?copy|destroy)$/.test(t) },
            xe = function(e, t, n, r) { r ? p(function() { e.apply(t, n) }, 0) : e.apply(t, n) },
            Ae = function(e) {
                if ("object" == typeof e && e && e.type) {
                    var t = ke(e),
                        n = W["*"] || [],
                        r = W[e.type] || [],
                        i = n.concat(r);
                    if (i && i.length) {
                        var a, o, s, c, l, d = this;
                        for (a = 0, o = i.length; a < o; a++) s = i[a], c = d, "string" == typeof s && "function" == typeof u[s] && (s = u[s]), "object" == typeof s && s && "function" == typeof s.handleEvent && (c = s, s = s.handleEvent), "function" == typeof s && (l = I({}, e), xe(s, c, [l], t)) }
                    return this } },
            Ce = function(e) {
                var t = null;
                return (z === !1 || e && "error" === e.type && e.name && Z.indexOf(e.name) !== -1) && (t = !1), t },
            Te = function(e) {
                var t = e.target || s || null,
                    n = "swf" === e._source;
                switch (delete e._source, e.type) {
                    case "error":
                        var r = "flash-sandboxed" === e.name || Ce(e); "boolean" == typeof r && (q.sandboxed = r), J.indexOf(e.name) !== -1 ? I(q, { disabled: "flash-disabled" === e.name, outdated: "flash-outdated" === e.name, unavailable: "flash-unavailable" === e.name, degraded: "flash-degraded" === e.name, deactivated: "flash-deactivated" === e.name, overdue: "flash-overdue" === e.name, ready: !1 }) : "version-mismatch" === e.name && (o = e.swfVersion, I(q, { disabled: !1, outdated: !1, unavailable: !1, degraded: !1, deactivated: !1, overdue: !1, ready: !1 })), We();
                        break;
                    case "ready":
                        o = e.swfVersion;
                        var i = q.deactivated === !0;
                        I(q, { disabled: !1, outdated: !1, sandboxed: !1, unavailable: !1, degraded: !1, deactivated: !1, overdue: i, ready: !i }), We();
                        break;
                    case "beforecopy":
                        c = t;
                        break;
                    case "copy":
                        var a, u, l = e.relatedTarget;!V["text/html"] && !V["text/plain"] && l && (u = l.value || l.outerHTML || l.innerHTML) && (a = l.value || l.textContent || l.innerText) ? (e.clipboardData.clearData(), e.clipboardData.setData("text/plain", a), u !== a && e.clipboardData.setData("text/html", u)) : !V["text/plain"] && e.target && (a = e.target.getAttribute("data-clipboard-text")) && (e.clipboardData.clearData(), e.clipboardData.setData("text/plain", a));
                        break;
                    case "aftercopy":
                        _e(e), Ze.clearData(), t && t !== Be() && t.focus && t.focus();
                        break;
                    case "_mouseover":
                        Ze.focus(t), te.bubbleEvents === !0 && n && (t && t !== e.relatedTarget && !M(e.relatedTarget, t) && Ee(I({}, e, { type: "mouseenter", bubbles: !1, cancelable: !1 })), Ee(I({}, e, { type: "mouseover" })));
                        break;
                    case "_mouseout":
                        Ze.blur(), te.bubbleEvents === !0 && n && (t && t !== e.relatedTarget && !M(e.relatedTarget, t) && Ee(I({}, e, { type: "mouseleave", bubbles: !1, cancelable: !1 })), Ee(I({}, e, { type: "mouseout" })));
                        break;
                    case "_mousedown":
                        Fe(t, te.activeClass), te.bubbleEvents === !0 && n && Ee(I({}, e, { type: e.type.slice(1) }));
                        break;
                    case "_mouseup":
                        Re(t, te.activeClass), te.bubbleEvents === !0 && n && Ee(I({}, e, { type: e.type.slice(1) }));
                        break;
                    case "_click":
                        c = null, te.bubbleEvents === !0 && n && Ee(I({}, e, { type: e.type.slice(1) }));
                        break;
                    case "_mousemove":
                        te.bubbleEvents === !0 && n && Ee(I({}, e, { type: e.type.slice(1) })) }
                if (/^_(?:click|mouse(?:over|out|down|up|move))$/.test(e.type)) return !0 },
            _e = function(e) {
                if (e.errors && e.errors.length > 0) {
                    var t = j(e);
                    I(t, { type: "error", name: "clipboard-error" }), delete t.success, p(function() { Ze.emit(t) }, 0) } },
            Ee = function(e) {
                if (e && "string" == typeof e.type && e) {
                    var t, n = e.target || null,
                        r = n && n.ownerDocument || l,
                        i = { view: r.defaultView || u, canBubble: !0, cancelable: !0, detail: "click" === e.type ? 1 : 0, button: "number" == typeof e.which ? e.which - 1 : "number" == typeof e.button ? e.button : r.createEvent ? 0 : 1 },
                        a = I(i, e);
                    n && r.createEvent && n.dispatchEvent && (a = [a.type, a.canBubble, a.cancelable, a.view, a.detail, a.screenX, a.screenY, a.clientX, a.clientY, a.ctrlKey, a.altKey, a.shiftKey, a.metaKey, a.button, a.relatedTarget], t = r.createEvent("MouseEvents"), t.initMouseEvent && (t.initMouseEvent.apply(t, a), t._source = "js", n.dispatchEvent(t))) } },
            Se = function() {
                var e = te.flashLoadTimeout;
                if ("number" == typeof e && e >= 0) {
                    var t = Math.min(1e3, e / 10),
                        n = te.swfObjectId + "_fallbackContent";
                    H = h(function() {
                        var e = l.getElementById(n);
                        Ke(e) && (We(), q.deactivated = null, Ze.emit({ type: "error", name: "swf-not-found" })) }, t) } },
            Oe = function() {
                var e = l.createElement("div");
                return e.id = te.containerId, e.className = te.containerClass, e.style.position = "absolute", e.style.left = "0px", e.style.top = "-9999px", e.style.width = "1px", e.style.height = "1px", e.style.zIndex = "" + Ge(te.zIndex), e },
            Ie = function(e) {
                for (var t = e && e.parentNode; t && "OBJECT" === t.nodeName && t.parentNode;) t = t.parentNode;
                return t || null },
            je = function() {
                var e, t = q.bridge,
                    n = Ie(t);
                if (!t) {
                    var r = Ue(u.location.host, te),
                        i = "never" === r ? "none" : "all",
                        a = Pe(I({ jsVersion: Ze.version }, te)),
                        o = te.swfPath + Me(te.swfPath, te);
                    n = Oe();
                    var s = l.createElement("div");
                    n.appendChild(s), l.body.appendChild(n);
                    var c = l.createElement("div"),
                        d = "activex" === q.pluginType;
                    c.innerHTML = '<object id="' + te.swfObjectId + '" name="' + te.swfObjectId + '" width="100%" height="100%" ' + (d ? 'classid="clsid:d27cdb6e-ae6d-11cf-96b8-444553540000"' : 'type="application/x-shockwave-flash" data="' + o + '"') + ">" + (d ? '<param name="movie" value="' + o + '"/>' : "") + '<param name="allowScriptAccess" value="' + r + '"/><param name="allowNetworking" value="' + i + '"/><param name="menu" value="false"/><param name="wmode" value="transparent"/><param name="flashvars" value="' + a + '"/><div id="' + te.swfObjectId + '_fallbackContent">&nbsp;</div></object>', t = c.firstChild, c = null, S(t).ZeroClipboard = Ze, n.replaceChild(t, s), Se() }
                return t || (t = l[te.swfObjectId], t && (e = t.length) && (t = t[e - 1]), !t && n && (t = n.firstChild)), q.bridge = t || null, t },
            Le = function() {
                var e = q.bridge;
                if (e) {
                    var t = Ie(e);
                    t && ("activex" === q.pluginType && "readyState" in e ? (e.style.display = "none", function n() {
                        if (4 === e.readyState) {
                            for (var r in e) "function" == typeof e[r] && (e[r] = null);
                            e.parentNode && e.parentNode.removeChild(e), t.parentNode && t.parentNode.removeChild(t) } else p(n, 10) }()) : (e.parentNode && e.parentNode.removeChild(e), t.parentNode && t.parentNode.removeChild(t))), We(), q.ready = null, q.bridge = null, q.deactivated = null, o = a } },
            Ne = function(e) {
                var t = {},
                    n = {};
                if ("object" == typeof e && e) {
                    for (var r in e)
                        if (r && _.call(e, r) && "string" == typeof e[r] && e[r]) switch (r.toLowerCase()) {
                            case "text/plain":
                            case "text":
                            case "air:text":
                            case "flash:text":
                                t.text = e[r], n.text = r;
                                break;
                            case "text/html":
                            case "html":
                            case "air:html":
                            case "flash:html":
                                t.html = e[r], n.html = r;
                                break;
                            case "application/rtf":
                            case "text/rtf":
                            case "rtf":
                            case "richtext":
                            case "air:rtf":
                            case "flash:rtf":
                                t.rtf = e[r], n.rtf = r }
                        return { data: t, formatMap: n } } },
            De = function(e, t) {
                if ("object" != typeof e || !e || "object" != typeof t || !t) return e;
                var n = {};
                for (var r in e)
                    if (_.call(e, r))
                        if ("errors" === r) { n[r] = e[r] ? e[r].slice() : [];
                            for (var i = 0, a = n[r].length; i < a; i++) n[r][i].format = t[n[r][i].format] } else if ("success" !== r && "data" !== r) n[r] = e[r];
                else { n[r] = {};
                    var o = e[r];
                    for (var s in o) s && _.call(o, s) && _.call(t, s) && (n[r][t[s]] = o[s]) }
                return n },
            Me = function(e, t) {
                var n = null == t || t && t.cacheBust === !0;
                return n ? (e.indexOf("?") === -1 ? "?" : "&") + "noCache=" + A() : "" },
            Pe = function(e) {
                var t, n, r, i, a = "",
                    o = [];
                if (e.trustedDomains && ("string" == typeof e.trustedDomains ? i = [e.trustedDomains] : "object" == typeof e.trustedDomains && "length" in e.trustedDomains && (i = e.trustedDomains)), i && i.length)
                    for (t = 0, n = i.length; t < n; t++)
                        if (_.call(i, t) && i[t] && "string" == typeof i[t]) {
                            if (r = $e(i[t]), !r) continue;
                            if ("*" === r) { o.length = 0, o.push(r);
                                break }
                            o.push.apply(o, [r, "//" + r, u.location.protocol + "//" + r]) }
                return o.length && (a += "trustedOrigins=" + g(o.join(","))), e.forceEnhancedClipboard === !0 && (a += (a ? "&" : "") + "forceEnhancedClipboard=true"), "string" == typeof e.swfObjectId && e.swfObjectId && (a += (a ? "&" : "") + "swfObjectId=" + g(e.swfObjectId)), "string" == typeof e.jsVersion && e.jsVersion && (a += (a ? "&" : "") + "jsVersion=" + g(e.jsVersion)), a },
            $e = function(e) {
                if (null == e || "" === e) return null;
                if (e = e.replace(/^\s+|\s+$/g, ""), "" === e) return null;
                var t = e.indexOf("//");
                e = t === -1 ? e : e.slice(t + 2);
                var n = e.indexOf("/");
                return e = n === -1 ? e : t === -1 || 0 === n ? null : e.slice(0, n), e && ".swf" === e.slice(-4).toLowerCase() ? null : e || null },
            Ue = function() {
                var e = function(e) {
                    var t, n, r, i = [];
                    if ("string" == typeof e && (e = [e]), "object" != typeof e || !e || "number" != typeof e.length) return i;
                    for (t = 0, n = e.length; t < n; t++)
                        if (_.call(e, t) && (r = $e(e[t]))) {
                            if ("*" === r) { i.length = 0, i.push("*");
                                break }
                            i.indexOf(r) === -1 && i.push(r) }
                    return i };
                return function(t, n) {
                    var r = $e(n.swfPath);
                    null === r && (r = t);
                    var i = e(n.trustedDomains),
                        a = i.length;
                    if (a > 0) {
                        if (1 === a && "*" === i[0]) return "always";
                        if (i.indexOf(t) !== -1) return 1 === a && t === r ? "sameDomain" : "always" }
                    return "never" } }(),
            Be = function() {
                try {
                    return l.activeElement } catch (e) {
                    return null } },
            Fe = function(e, t) {
                var n, r, i, a = [];
                if ("string" == typeof t && t && (a = t.split(/\s+/)), e && 1 === e.nodeType && a.length > 0)
                    if (e.classList)
                        for (n = 0, r = a.length; n < r; n++) e.classList.add(a[n]);
                    else if (e.hasOwnProperty("className")) {
                    for (i = " " + e.className + " ", n = 0, r = a.length; n < r; n++) i.indexOf(" " + a[n] + " ") === -1 && (i += a[n] + " ");
                    e.className = i.replace(/^\s+|\s+$/g, "") }
                return e },
            Re = function(e, t) {
                var n, r, i, a = [];
                if ("string" == typeof t && t && (a = t.split(/\s+/)), e && 1 === e.nodeType && a.length > 0)
                    if (e.classList && e.classList.length > 0)
                        for (n = 0, r = a.length; n < r; n++) e.classList.remove(a[n]);
                    else if (e.className) {
                    for (i = (" " + e.className + " ").replace(/[\r\n\t]/g, " "), n = 0, r = a.length; n < r; n++) i = i.replace(" " + a[n] + " ", " ");
                    e.className = i.replace(/^\s+|\s+$/g, "") }
                return e },
            ze = function(e, t) {
                var n = v(e, null).getPropertyValue(t);
                return "cursor" !== t || n && "auto" !== n || "A" !== e.nodeName ? n : "pointer" },
            qe = function(e) {
                var t = { left: 0, top: 0, width: 0, height: 0 };
                if (e.getBoundingClientRect) {
                    var n = e.getBoundingClientRect(),
                        r = u.pageXOffset,
                        i = u.pageYOffset,
                        a = l.documentElement.clientLeft || 0,
                        o = l.documentElement.clientTop || 0,
                        s = 0,
                        c = 0;
                    if ("relative" === ze(l.body, "position")) {
                        var d = l.body.getBoundingClientRect(),
                            p = l.documentElement.getBoundingClientRect();
                        s = d.left - p.left || 0, c = d.top - p.top || 0 }
                    t.left = n.left + r - a - s, t.top = n.top + i - o - c, t.width = "width" in n ? n.width : n.right - n.left, t.height = "height" in n ? n.height : n.bottom - n.top }
                return t },
            Ke = function(e) {
                if (!e) return !1;
                var t = v(e, null),
                    n = k(t.height) > 0,
                    r = k(t.width) > 0,
                    i = k(t.top) >= 0,
                    a = k(t.left) >= 0,
                    o = n && r && i && a,
                    s = o ? null : qe(e),
                    c = "none" !== t.display && "collapse" !== t.visibility && (o || !!s && (n || s.height > 0) && (r || s.width > 0) && (i || s.top >= 0) && (a || s.left >= 0));
                return c },
            We = function() { f(G), G = 0, m(H), H = 0 },
            Ve = function() {
                var e;
                if (s && (e = Ie(q.bridge))) {
                    var t = qe(s);
                    I(e.style, { width: t.width + "px", height: t.height + "px", top: t.top + "px", left: t.left + "px", zIndex: "" + Ge(te.zIndex) }) } },
            Qe = function(e) { q.ready === !0 && (q.bridge && "function" == typeof q.bridge.setHandCursor ? q.bridge.setHandCursor(e) : q.ready = !1) },
            Ge = function(e) {
                if (/^(?:auto|inherit)$/.test(e)) return e;
                var t;
                return "number" != typeof e || x(e) ? "string" == typeof e && (t = Ge(b(e, 10))) : t = e, "number" == typeof t ? t : "auto" },
            He = function(e) {
                var t, n, r, a = q.sandboxed,
                    o = null;
                if (e = e === !0, z === !1) o = !1;
                else {
                    try { n = i.frameElement || null } catch (e) { r = { name: e.name, message: e.message } }
                    if (n && 1 === n.nodeType && "IFRAME" === n.nodeName) try { o = n.hasAttribute("sandbox") } catch (e) { o = null } else {
                        try { t = document.domain || null } catch (e) { t = null }(null === t || r && "SecurityError" === r.name && /(^|[\s\(\[@])sandbox(es|ed|ing|[\s\.,!\)\]@]|$)/.test(r.message.toLowerCase())) && (o = !0) } }
                return q.sandboxed = o, a === o || e || Ye(w), o },
            Ye = function(e) {
                function t(e) {
                    var t = e.match(/[\d]+/g);
                    return t.length = 3, t.join(".") }

                function n(e) {
                    return !!e && (e = e.toLowerCase()) && (/^(pepflashplayer\.dll|libpepflashplayer\.so|pepperflashplayer\.plugin)$/.test(e) || "chrome.plugin" === e.slice(-13)) }

                function r(e) { e && (s = !0, e.version && (l = t(e.version)), !l && e.description && (l = t(e.description)), e.filename && (u = n(e.filename))) }
                var i, a, o, s = !1,
                    c = !1,
                    u = !1,
                    l = "";
                if (d.plugins && d.plugins.length) i = d.plugins["Shockwave Flash"], r(i), d.plugins["Shockwave Flash 2.0"] && (s = !0, l = "2.0.0.11");
                else if (d.mimeTypes && d.mimeTypes.length) o = d.mimeTypes["application/x-shockwave-flash"], i = o && o.enabledPlugin, r(i);
                else if ("undefined" != typeof e) { c = !0;
                    try { a = new e("ShockwaveFlash.ShockwaveFlash.7"), s = !0, l = t(a.GetVariable("$version")) } catch (n) {
                        try { a = new e("ShockwaveFlash.ShockwaveFlash.6"), s = !0, l = "6.0.21" } catch (n) {
                            try { a = new e("ShockwaveFlash.ShockwaveFlash"), s = !0, l = t(a.GetVariable("$version")) } catch (e) { c = !1 } } } }
                q.disabled = s !== !0, q.outdated = l && k(l) < k(K), q.version = l || "0.0.0", q.pluginType = u ? "pepper" : c ? "activex" : s ? "netscape" : "unknown" };
        Ye(w), He(!0);
        var Ze = function() {
            return this instanceof Ze ? void("function" == typeof Ze._createClient && Ze._createClient.apply(this, O(arguments))) : new Ze };
        T(Ze, "version", { value: "2.2.0", writable: !1, configurable: !0, enumerable: !0 }), Ze.config = function() {
            return ne.apply(this, O(arguments)) }, Ze.state = function() {
            return re.apply(this, O(arguments)) }, Ze.isFlashUnusable = function() {
            return ie.apply(this, O(arguments)) }, Ze.on = function() {
            return ae.apply(this, O(arguments)) }, Ze.off = function() {
            return oe.apply(this, O(arguments)) }, Ze.handlers = function() {
            return se.apply(this, O(arguments)) }, Ze.emit = function() {
            return ce.apply(this, O(arguments)) }, Ze.create = function() {
            return ue.apply(this, O(arguments)) }, Ze.destroy = function() {
            return le.apply(this, O(arguments)) }, Ze.setData = function() {
            return de.apply(this, O(arguments)) }, Ze.clearData = function() {
            return pe.apply(this, O(arguments)) }, Ze.getData = function() {
            return fe.apply(this, O(arguments)) }, Ze.focus = Ze.activate = function() {
            return he.apply(this, O(arguments)) }, Ze.blur = Ze.deactivate = function() {
            return me.apply(this, O(arguments)) }, Ze.activeElement = function() {
            return ve.apply(this, O(arguments)) };
        var Je = 0,
            Xe = {},
            et = 0,
            tt = {},
            nt = {};
        I(te, { autoActivate: !0 });
        var rt = function(e) {
                var t = this;
                t.id = "" + Je++, Xe[t.id] = { instance: t, elements: [], handlers: {} }, e && t.clip(e), Ze.on("*", function(e) {
                    return t.emit(e) }), Ze.on("destroy", function() { t.destroy() }), Ze.create() },
            it = function(e, t) {
                var n, r, i, s = {},
                    c = Xe[this.id],
                    u = c && c.handlers;
                if (!c) throw new Error("Attempted to add new listener(s) to a destroyed ZeroClipboard client instance");
                if ("string" == typeof e && e) i = e.toLowerCase().split(/\s+/);
                else if ("object" == typeof e && e && "undefined" == typeof t)
                    for (n in e) _.call(e, n) && "string" == typeof n && n && "function" == typeof e[n] && this.on(n, e[n]);
                if (i && i.length) {
                    for (n = 0, r = i.length; n < r; n++) e = i[n].replace(/^on/, ""), s[e] = !0, u[e] || (u[e] = []), u[e].push(t);
                    if (s.ready && q.ready && this.emit({ type: "ready", client: this }), s.error) {
                        for (n = 0, r = J.length; n < r; n++)
                            if (q[J[n].replace(/^flash-/, "")]) { this.emit({ type: "error", name: J[n], client: this });
                                break }
                        o !== a && Ze.version !== o && this.emit({ type: "error", name: "version-mismatch", jsVersion: Ze.version, swfVersion: o }) } }
                return this },
            at = function(e, t) {
                var n, r, i, a, o, s = Xe[this.id],
                    c = s && s.handlers;
                if (!c) return this;
                if (0 === arguments.length) a = C(c);
                else if ("string" == typeof e && e) a = e.split(/\s+/);
                else if ("object" == typeof e && e && "undefined" == typeof t)
                    for (n in e) _.call(e, n) && "string" == typeof n && n && "function" == typeof e[n] && this.off(n, e[n]);
                if (a && a.length)
                    for (n = 0, r = a.length; n < r; n++)
                        if (e = a[n].toLowerCase().replace(/^on/, ""), o = c[e], o && o.length)
                            if (t)
                                for (i = o.indexOf(t); i !== -1;) o.splice(i, 1), i = o.indexOf(t, i);
                            else o.length = 0;
                return this },
            ot = function(e) {
                var t = null,
                    n = Xe[this.id] && Xe[this.id].handlers;
                return n && (t = "string" == typeof e && e ? n[e] ? n[e].slice(0) : [] : j(n)), t },
            st = function(e) {
                if (pt.call(this, e)) { "object" == typeof e && e && "string" == typeof e.type && e.type && (e = I({}, e));
                    var t = I({}, we(e), { client: this });
                    ft.call(this, t) }
                return this },
            ct = function(e) {
                if (!Xe[this.id]) throw new Error("Attempted to clip element(s) to a destroyed ZeroClipboard client instance");
                e = ht(e);
                for (var t = 0; t < e.length; t++)
                    if (_.call(e, t) && e[t] && 1 === e[t].nodeType) { e[t].zcClippingId ? tt[e[t].zcClippingId].indexOf(this.id) === -1 && tt[e[t].zcClippingId].push(this.id) : (e[t].zcClippingId = "zcClippingId_" + et++, tt[e[t].zcClippingId] = [this.id], te.autoActivate === !0 && mt(e[t]));
                        var n = Xe[this.id] && Xe[this.id].elements;
                        n.indexOf(e[t]) === -1 && n.push(e[t]) }
                return this },
            ut = function(e) {
                var t = Xe[this.id];
                if (!t) return this;
                var n, r = t.elements;
                e = "undefined" == typeof e ? r.slice(0) : ht(e);
                for (var i = e.length; i--;)
                    if (_.call(e, i) && e[i] && 1 === e[i].nodeType) {
                        for (n = 0;
                            (n = r.indexOf(e[i], n)) !== -1;) r.splice(n, 1);
                        var a = tt[e[i].zcClippingId];
                        if (a) {
                            for (n = 0;
                                (n = a.indexOf(this.id, n)) !== -1;) a.splice(n, 1);
                            0 === a.length && (te.autoActivate === !0 && vt(e[i]), delete e[i].zcClippingId) } }
                return this },
            lt = function() {
                var e = Xe[this.id];
                return e && e.elements ? e.elements.slice(0) : [] },
            dt = function() { Xe[this.id] && (this.unclip(), this.off(), delete Xe[this.id]) },
            pt = function(e) {
                if (!e || !e.type) return !1;
                if (e.client && e.client !== this) return !1;
                var t = Xe[this.id],
                    n = t && t.elements,
                    r = !!n && n.length > 0,
                    i = !e.target || r && n.indexOf(e.target) !== -1,
                    a = e.relatedTarget && r && n.indexOf(e.relatedTarget) !== -1,
                    o = e.client && e.client === this;
                return !(!t || !(i || a || o)) },
            ft = function(e) {
                var t = Xe[this.id];
                if ("object" == typeof e && e && e.type && t) {
                    var n = ke(e),
                        r = t && t.handlers["*"] || [],
                        i = t && t.handlers[e.type] || [],
                        a = r.concat(i);
                    if (a && a.length) {
                        var o, s, c, l, d, p = this;
                        for (o = 0, s = a.length; o < s; o++) c = a[o], l = p, "string" == typeof c && "function" == typeof u[c] && (c = u[c]), "object" == typeof c && c && "function" == typeof c.handleEvent && (l = c, c = c.handleEvent), "function" == typeof c && (d = I({}, e), xe(c, l, [d], n)) } } },
            ht = function(e) {
                return "string" == typeof e && (e = []), "number" != typeof e.length ? [e] : e },
            mt = function(e) {
                if (e && 1 === e.nodeType) {
                    var t = function(e) {
                            (e || (e = u.event)) && ("js" !== e._source && (e.stopImmediatePropagation(), e.preventDefault()), delete e._source) },
                        n = function(n) {
                            (n || (n = u.event)) && (t(n), Ze.focus(e)) };
                    e.addEventListener("mouseover", n, !1), e.addEventListener("mouseout", t, !1), e.addEventListener("mouseenter", t, !1), e.addEventListener("mouseleave", t, !1), e.addEventListener("mousemove", t, !1), nt[e.zcClippingId] = { mouseover: n, mouseout: t, mouseenter: t, mouseleave: t, mousemove: t } } },
            vt = function(e) {
                if (e && 1 === e.nodeType) {
                    var t = nt[e.zcClippingId];
                    if ("object" == typeof t && t) {
                        for (var n, r, i = ["move", "leave", "enter", "out", "over"], a = 0, o = i.length; a < o; a++) n = "mouse" + i[a], r = t[n], "function" == typeof r && e.removeEventListener(n, r, !1);
                        delete nt[e.zcClippingId] } } };
        Ze._createClient = function() { rt.apply(this, O(arguments)) }, Ze.prototype.on = function() {
            return it.apply(this, O(arguments)) }, Ze.prototype.off = function() {
            return at.apply(this, O(arguments)) }, Ze.prototype.handlers = function() {
            return ot.apply(this, O(arguments)) }, Ze.prototype.emit = function() {
            return st.apply(this, O(arguments)) }, Ze.prototype.clip = function() {
            return ct.apply(this, O(arguments)) }, Ze.prototype.unclip = function() {
            return ut.apply(this, O(arguments)) }, Ze.prototype.elements = function() {
            return lt.apply(this, O(arguments)) }, Ze.prototype.destroy = function() {
            return dt.apply(this, O(arguments)) }, Ze.prototype.setText = function(e) {
            if (!Xe[this.id]) throw new Error("Attempted to set pending clipboard data from a destroyed ZeroClipboard client instance");
            return Ze.setData("text/plain", e), this }, Ze.prototype.setHtml = function(e) {
            if (!Xe[this.id]) throw new Error("Attempted to set pending clipboard data from a destroyed ZeroClipboard client instance");
            return Ze.setData("text/html", e), this }, Ze.prototype.setRichText = function(e) {
            if (!Xe[this.id]) throw new Error("Attempted to set pending clipboard data from a destroyed ZeroClipboard client instance");
            return Ze.setData("application/rtf", e), this }, Ze.prototype.setData = function() {
            if (!Xe[this.id]) throw new Error("Attempted to set pending clipboard data from a destroyed ZeroClipboard client instance");
            return Ze.setData.apply(this, O(arguments)), this }, Ze.prototype.clearData = function() {
            if (!Xe[this.id]) throw new Error("Attempted to clear pending clipboard data from a destroyed ZeroClipboard client instance");
            return Ze.clearData.apply(this, O(arguments)), this }, Ze.prototype.getData = function() {
            if (!Xe[this.id]) throw new Error("Attempted to get pending clipboard data from a destroyed ZeroClipboard client instance");
            return Ze.getData.apply(this, O(arguments)) }, r = function() {
            return Ze }.call(t, n, t, e), !(r !== a && (e.exports = r))
    }(function() {
        return this || window }())
}, , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , function(e, t) { "use strict";

    function n() {
        return /firefox/.test(i) }

    function r() {
        return window.devicePixelRatio >= 2 }
    Object.defineProperty(t, "__esModule", { value: !0 });
    var i = window.navigator.userAgent.toLowerCase();
    t.default = { isFireFox: n, isRetina: r }, e.exports = t.default }, , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , function(e, t, n) {
    var r;
    ! function(i, a, o) {
        function s(e, t, n) {
            return e.addEventListener ? void e.addEventListener(t, n, !1) : void e.attachEvent("on" + t, n) }

        function c(e) {
            if ("keypress" == e.type) {
                var t = String.fromCharCode(e.which);
                return e.shiftKey || (t = t.toLowerCase()), t }
            return k[e.which] ? k[e.which] : x[e.which] ? x[e.which] : String.fromCharCode(e.which).toLowerCase() }

        function u(e, t) {
            return e.sort().join(",") === t.sort().join(",") }

        function l(e) {
            var t = [];
            return e.shiftKey && t.push("shift"), e.altKey && t.push("alt"), e.ctrlKey && t.push("ctrl"), e.metaKey && t.push("meta"), t }

        function d(e) {
            return e.preventDefault ? void e.preventDefault() : void(e.returnValue = !1) }

        function p(e) {
            return e.stopPropagation ? void e.stopPropagation() : void(e.cancelBubble = !0) }

        function f(e) {
            return "shift" == e || "ctrl" == e || "alt" == e || "meta" == e }

        function h() {
            if (!b) { b = {};
                for (var e in k) e > 95 && e < 112 || k.hasOwnProperty(e) && (b[k[e]] = e) }
            return b }

        function m(e, t, n) {
            return n || (n = h()[e] ? "keydown" : "keypress"), "keypress" == n && t.length && (n = "keydown"), n }

        function v(e) {
            return "+" === e ? ["+"] : (e = e.replace(/\+{2}/g, "+plus"), e.split("+")) }

        function g(e, t) {
            var n, r, i, a = [];
            for (n = v(e), i = 0; i < n.length; ++i) r = n[i], C[r] && (r = C[r]), t && "keypress" != t && A[r] && (r = A[r], a.push("shift")), f(r) && a.push(r);
            return t = m(r, a, t), { key: r, modifiers: a, action: t } }

        function w(e, t) {
            return null !== e && e !== a && (e === t || w(e.parentNode, t)) }

        function y(e) {
            function t(e) { e = e || {};
                var t, n = !1;
                for (t in b) e[t] ? n = !0 : b[t] = 0;
                n || (A = !1) }

            function n(e, t, n, r, i, a) {
                var o, s, c = [],
                    l = n.type;
                if (!v._callbacks[e]) return [];
                for ("keyup" == l && f(e) && (t = [e]), o = 0; o < v._callbacks[e].length; ++o)
                    if (s = v._callbacks[e][o], (r || !s.seq || b[s.seq] == s.level) && l == s.action && ("keypress" == l && !n.metaKey && !n.ctrlKey || u(t, s.modifiers))) {
                        var d = !r && s.combo == i,
                            p = r && s.seq == r && s.level == a;
                        (d || p) && v._callbacks[e].splice(o, 1), c.push(s) }
                return c }

            function r(e, t, n, r) { v.stopCallback(t, t.target || t.srcElement, n, r) || e(t, n) === !1 && (d(t), p(t)) }

            function i(e) { "number" != typeof e.which && (e.which = e.keyCode);
                var t = c(e);
                if (t) return "keyup" == e.type && k === t ? void(k = !1) : void v.handleKey(t, l(e), e) }

            function o() { clearTimeout(w), w = setTimeout(t, 1e3) }

            function h(e, n, i, a) {
                function s(t) {
                    return function() { A = t, ++b[e], o() } }

                function u(n) { r(i, n, e), "keyup" !== a && (k = c(n)), setTimeout(t, 10) }
                b[e] = 0;
                for (var l = 0; l < n.length; ++l) {
                    var d = l + 1 === n.length,
                        p = d ? u : s(a || g(n[l + 1]).action);
                    m(n[l], p, a, e, l) } }

            function m(e, t, r, i, a) { v._directMap[e + ":" + r] = t, e = e.replace(/\s+/g, " ");
                var o, s = e.split(" ");
                return s.length > 1 ? void h(e, s, t, r) : (o = g(e, r), v._callbacks[o.key] = v._callbacks[o.key] || [], n(o.key, o.modifiers, { type: o.action }, i, e, a), void v._callbacks[o.key][i ? "unshift" : "push"]({ callback: t, modifiers: o.modifiers, action: o.action, seq: i, level: a, combo: e })) }
            var v = this;
            if (e = e || a, !(v instanceof y)) return new y(e);
            v.target = e, v._callbacks = {}, v._directMap = {};
            var w, b = {},
                k = !1,
                x = !1,
                A = !1;
            v._handleKey = function(e, i, a) {
                var o, s = n(e, i, a),
                    c = {},
                    u = 0,
                    l = !1;
                for (o = 0; o < s.length; ++o) s[o].seq && (u = Math.max(u, s[o].level));
                for (o = 0; o < s.length; ++o)
                    if (s[o].seq) {
                        if (s[o].level != u) continue;
                        l = !0, c[s[o].seq] = 1, r(s[o].callback, a, s[o].combo, s[o].seq) } else l || r(s[o].callback, a, s[o].combo);
                var d = "keypress" == a.type && x;
                a.type != A || f(e) || d || t(c), x = l && "keydown" == a.type }, v._bindMultiple = function(e, t, n) {
                for (var r = 0; r < e.length; ++r) m(e[r], t, n) }, s(e, "keypress", i), s(e, "keydown", i), s(e, "keyup", i) }
        if (i) {
            for (var b, k = { 8: "backspace", 9: "tab", 13: "enter", 16: "shift", 17: "ctrl", 18: "alt", 20: "capslock", 27: "esc", 32: "space", 33: "pageup", 34: "pagedown", 35: "end", 36: "home", 37: "left", 38: "up", 39: "right", 40: "down", 45: "ins", 46: "del", 91: "meta", 93: "meta", 224: "meta" }, x = { 106: "*", 107: "+", 109: "-", 110: ".", 111: "/", 186: ";", 187: "=", 188: ",", 189: "-", 190: ".", 191: "/", 192: "`", 219: "[", 220: "\\", 221: "]", 222: "'" }, A = { "~": "`", "!": "1", "@": "2", "#": "3", $: "4", "%": "5", "^": "6", "&": "7", "*": "8", "(": "9", ")": "0", _: "-", "+": "=", ":": ";", '"': "'", "<": ",", ">": ".", "?": "/", "|": "\\" }, C = { option: "alt", command: "meta", return: "enter", escape: "esc", plus: "+", mod: /Mac|iPod|iPhone|iPad/.test(navigator.platform) ? "meta" : "ctrl" }, T = 1; T < 20; ++T) k[111 + T] = "f" + T;
            for (T = 0; T <= 9; ++T) k[T + 96] = T;
            y.prototype.bind = function(e, t, n) {
                    var r = this;
                    return e = e instanceof Array ? e : [e], r._bindMultiple.call(r, e, t, n), r }, y.prototype.unbind = function(e, t) {
                    var n = this;
                    return n.bind.call(n, e, function() {}, t) }, y.prototype.trigger = function(e, t) {
                    var n = this;
                    return n._directMap[e + ":" + t] && n._directMap[e + ":" + t]({}, e), n },
                y.prototype.reset = function() {
                    var e = this;
                    return e._callbacks = {}, e._directMap = {}, e }, y.prototype.stopCallback = function(e, t) {
                    var n = this;
                    return !((" " + t.className + " ").indexOf(" mousetrap ") > -1) && (!w(t, n.target) && ("INPUT" == t.tagName || "SELECT" == t.tagName || "TEXTAREA" == t.tagName || t.isContentEditable)) }, y.prototype.handleKey = function() {
                    var e = this;
                    return e._handleKey.apply(e, arguments) }, y.addKeycodes = function(e) {
                    for (var t in e) e.hasOwnProperty(t) && (k[t] = e[t]);
                    b = null }, y.init = function() {
                    var e = y(a);
                    for (var t in e) "_" !== t.charAt(0) && (y[t] = function(t) {
                        return function() {
                            return e[t].apply(e, arguments) } }(t)) }, y.init(), i.Mousetrap = y, "undefined" != typeof e && e.exports && (e.exports = y), r = function() {
                    return y }.call(t, n, t, e), !(r !== o && (e.exports = r))
        }
    }("undefined" != typeof window ? window : null, "undefined" != typeof window ? document : null)
}, , , , function(e, t, n) {
    (function(r, i, a) { "use strict";

        function o(e) {
            return e && e.__esModule ? e : { default: e } }

        function s(e) {
            var t = window.cow.favicons,
                n = S.faviconNode,
                r = t.default;
            if (n.length > 0) switch (e = e || window.cow.pageType) {
                case "home":
                    r = t.default;
                    break;
                case "folder":
                    r = t.folder;
                    break;
                case "doc":
                    r = t.doc;
                    break;
                case "spreadsheet":
                    r = t.sheet }
            var i = n.attr("href");
            if (i !== r) {
                if (a.msie) return;
                n.attr("href", r) } }
        Object.defineProperty(t, "__esModule", { value: !0 });
        var c = n(186),
            u = o(c),
            l = n(189),
            d = o(l),
            p = n(513),
            f = o(p),
            h = n(664),
            m = o(h),
            v = n(691),
            g = o(v),
            w = n(206),
            y = o(w),
            b = n(695),
            k = o(b),
            x = n(425),
            A = o(x),
            C = n(314),
            T = o(C),
            _ = n(398),
            E = o(_);
        n(696);
        var S = { headerWrap: r("#header-wrap"), listViewWrap: r("#list-view-wrap"), docViewWrap: r("#doc-view"), padViewWrap: r("#pad-view"), spreadsheetViewWrap: r("#spreadsheet-view"), feedback: r(".meiqia-feedback"), galleryBox: r("#gallery-box"), faviconNode: r("#favicon-link"), headNode: r("head") },
            O = null,
            I = !1,
            j = { checkNewVersion: function(e, t) { window.cow._needReload && (window.location.href = e.path), t() }, setPageType: function(e, t) {
                    var n = e.path,
                        r = /^\/(desktop|recent|favorites)/,
                        i = /^\/folder\/*/,
                        a = /^\/doc\/\/*/,
                        o = /^\/spreadsheet\/*/,
                        s = !0,
                        c = "";
                    switch (r.test(n) ? c = "home" : i.test(n) ? c = "folder" : a.test(n) ? c = "doc" : o.test(n) ? c = "spreadsheet" : s = !1, e.path) {
                        case "/recent":
                            window.cow.listType = "recent";
                            break;
                        case "/favorites":
                            window.cow.listType = "favorites";
                            break;
                        default:
                            window.cow.listType = "list" }
                    s && (window.cow.pageType = c), e.init || window._czc.push(["_trackPageview", e.path]), t() }, renderHeader: function() { S.headerWrap.length > 0 && (O = f.default.getInstance("#header-wrap"), O.render()), s() }, hideLast: function() { j.renderHeader(), "doc" === window.cow.lastType ? N.hide() : "spreadsheet" === window.cow.lastType ? D.hide() : window.cow.lastType && L.hide(), window.cow.loading = !1 }, exit: function(e, t) { E.default.start(), window.cow.lastType = window.cow.pageType, window.cow.loading = !0, t() } },
            L = { show: function() { j.hideLast(), S.listViewWrap.removeClass("hide"), S.spreadsheetViewWrap.addClass("hide"), S.padViewWrap.addClass("hide"), r("div.import").show() }, render: function(e) {
                    var t = e.params.guid || "",
                        n = !0;
                    e.init && (y.default.load(), n = !1), (0, m.default)({ guid: t, isAjaxForce: n }) }, hide: function() { r(".guide-open-doc-tip").length > 0 && T.default.removeTip("guide-open-doc") } },
            N = { show: function() { j.hideLast(), S.listViewWrap.addClass("hide"), S.spreadsheetViewWrap.addClass("hide"), S.padViewWrap.removeClass("hide"), S.feedback.removeClass("hide") }, init: function(e) {
                    var t = e.params.guid;
                    y.default.load(t), window.cow.currentUser.id < 0 && i.stop(), I = !1, window.cow.directory = { firstOpen: !1, isOpened: !1, isRunTimer: null }, window.cow.doceditor = {}, (0, g.default)(t, !0) }, hide: function() { r(".image-resize-bar").removeClass("active"), S.docViewWrap.scrollTop(0), r("#doc-title-input").blur(), r("#doc-container").css("opacity", 0), S.padViewWrap.removeClass("selection-unfold edit-mode"), r(".sidebar-body").removeClass("start-s-comment s-comment"), r("#doc-directory").children("ul").html('<li class="dir-not-found">添加标题后会在这里自动生成目录。</li>'), r("#display-selection .display-item").removeClass("pressed"), S.galleryBox.removeClass("modal"), r("#tempImageResizeStyle").remove(), r("#tempAttachmentStyle").remove(), d.default.clearDropdown(), u.default.notify("pad:dispose"), u.default.notify("pad:sendClientStatus", "quit"), u.default.detach("pad:collabClientReady"), u.default.detach("caret:change"), u.default.notify("doc:goback") } },
            D = { show: function() { j.hideLast(), S.listViewWrap.addClass("hide"), S.padViewWrap.addClass("hide"), S.feedback.addClass("hide"), S.spreadsheetViewWrap.removeClass("hide") }, init: function(e) {
                    var t = e.params.guid,
                        n = e.params.sheetId;
                    y.default.load(t), (0, k.default)(t, n) }, hide: function() { S.spreadsheetViewWrap.removeClass("ready"), A.default.sendClientStatus("quit"), S.feedback.removeClass("hide"), window.tableInst && window.tableInst.table && window.tableInst.destroy(), window.cow.tempCurrentFile && (window.cow.tempCurrentFile.content = null), u.default.notify("spreadsheet:exit"), u.default.notify("accept:success") } },
            M = function() {
                if (!I) {
                    var e = i.current.replace("/doc/", ""),
                        t = history.state.isAjaxForce || !1;
                    y.default.load(e), window.cow.currentUser.id < 0 && i.stop(), (0, g.default)(e, t) } },
            P = function(e) { I = e };
        u.default.attach("socket:reconnected", function() {
            if ("doc" === window.cow.pageType) { u.default.notify("pad:sendClientStatus", "ready", !0);
                var e = /^\/doc\/*/,
                    t = i.current;
                e.test(t) && M() } else "spreadsheet" === window.cow.pageType && A.default.sendClientStatus("ready", !0) }), t.default = { common: j, list: L, doc: N, spreadsheet: D, setDocInit: P }, e.exports = t.default }).call(t, n(1), n(240), n(298)) }, function(e, t, n) {
    var r, i;
    (function(a, o, s) {
        var c = function(e, t) {
                function n() { this.constructor = e }
                for (var r in t) u.call(t, r) && (e[r] = t[r]);
                return n.prototype = t.prototype, e.prototype = new n, e.__super__ = t.prototype, e },
            u = {}.hasOwnProperty;
        r = [n(189), n(197), n(514), n(206), n(195), n(383), n(523), n(314), n(526), n(527), n(186), n(299), n(528), n(529), n(7), n(163), n(515), n(530), n(663)], i = function(e, t, n, r, i, u, l, d, p, f, h, m, v, g, w, y, b, k, x) {
            var A, C, T;
            return T = "#message-box-for-react", A = function(n) {
                function b() {
                    return b.__super__.constructor.apply(this, arguments) }
                return c(b, n), b.prototype.init = function() {
                    var e;
                    return e = this, this.cow = window.cow, this.$accountSettingDropDown = this.$view.find(".config-box .dropdown"), this.startPush(), x(), this }, b.prototype.eventMap = { "click .dropdown-btn": "dropClick", "click .dropdown": "stopPropagation", "click .header-add-item": "addObject", "click .import-file": "importFile", "click .personal-edit": "personaJump", "click .team-try-close": "closeUpgradeProLink", "click .team-manage": "openTeamManage", "click .open-trash": "openTrash", "click .header-star-btn": "markStar", "click .download-app": "downloadApp", "click div.header-avatar": "pokeUser" }, b.prototype.domEvents = { importFile: function(t, n) {
                        var r, i;
                        if (i = this, r = function() {
                                var t, n;
                                return t = a("#ajax-upload"), 0 === t.length && (n = o.values(v.supportedTypes).join(","), t = a("<form style='display: none;' enctype='multipart/form-data' method='post' action='javascript:;' role='form' id='ajax-upload'><input type='file' id='import-file' name='files' accept='" + n + "'/></form>"), a("body").append(t)), a("input#import-file").trigger("click"), a("input#import-file").on("change", function(t) {
                                    var n, r, i, a, o, s;
                                    return r = t.target.files[0], i = r.size, n = (null != (o = window.cow) && null != (s = o.currentUser) ? s.accountType : void 0) || "", a = ["personal_premium", "enterprise_standard"].indexOf(n) > -1 ? 100 : 20, i > 1024 * a * 1024 ? (t.target.form.reset(), e.alert({ title: "不能上传超过 " + a + "M 的文件", type: "error" })) : v.import(r) }) }, d.needToGuide()) return d.checkIsReady().then(function() {
                            var e;
                            return e = !cow.guideStatus.first_time_import_file, e ? (m.show({ buttons: ["ok"], okCallback: o.bind(r, i), bodyText: '目前支持上传.docx/.doc/.xlsx/.xls文档，后续将开放更多格式，请关注微信公众号"石墨文档"获取新功能消息推送。', headText: "欢迎使用导入功能" }), d.removeTipAjax("first_time_import_file")) : r() }) }, dropClick: function(e, t) {
                        var n, r;
                        return n = a(t), r = n.hasClass("active"), i.clearDropdown(), r || n.addClass("active").next(".dropdown").addClass("active"), e.stopPropagation() }, stopPropagation: function(e) {
                        return e.stopPropagation() }, userInputFocus: function(e, t) {
                        return a(t).removeClass("normal") }, userInputBlur: function(e, t) {
                        var n, r, i;
                        return a(t).addClass("normal"), r = a(t).val(), n = a(t).attr("current-data"), 0 === r.length ? void a(t).val(n) : (i = a(t).attr("data-type"), n !== r ? this.updateUser(i, r, e) : void 0) }, userInputKeyup: function(t, n) {
                        if (t.keyCode === e.keyCodes.ENTER) return a(n).blur() }, addObject: function(t, n) {
                        var r, i, o, c;
                        if (o = this, e.clearDropdown(), c = a(n).attr("action-type"), r = { color: "blue" }, "folder" === c) {
                            if (["favorites", "recent"].indexOf(this.cow.listType) >= 0) return;
                            r.name = "新建文件夹", r.type = 1 } else "doc" === c ? (r.name = "无标题", r.type = 0, i = { guid: this.cow.currentFile.guid || "" }) : "spreadsheet" === c && (r.name = "无标题", r.type = -1, i = { guid: this.cow.currentFile.guid || "" });
                        return r.parent_id = this.cow.currentFile.id, this.ajax.post("/api/file/create", r, function(e) {
                            var t;
                            if (r = e.data, c = Number(r.type), 1 !== c) return r.authorized = !0, r.parent = i, window.cow.currentListByGuid[r.guid] = r, t = "", 0 === c ? t = "/doc/" + r.guid : c === -1 && (t = "/spreadsheet/" + r.guid), s(t) }) }, backParent: function(e, t) {
                        var n, r;
                        return s.len > 0 ? s.back() : (n = window.cow.currentFile, r = window.cow.authorized ? n.parent && n.parent.guid ? "/folder/" + n.parent.guid : n.team_id ? "/team/" + n.team_id + "/files" : "/desktop" : "/login", s(r)) }, personaJump: function() {
                        var e;
                        if (e = window.location.href, "profile" !== window.cow.pageType) return window.location.href = "/profile" }, closeUpgradeProLink: function(e, t) {
                        return this.$view.find(".header-try-wrap").remove(), ["renewal", "expiration"].indexOf(d.accountTypeStatus) > -1 ? d.removeMembershipTip() : d.removeTipAjax("upgrade_pro") }, createTeam: function(t, n) {
                        var r;
                        return i.clearDropdown(), r = cow.currentUser.email, "undefined" != typeof r && null !== r && "" !== r ? cow.teams.length < 1 ? this.teamCreator = new TeamCreator(".common-modal-wrap") : e.alert({ title: "最多拥有一个团队", type: "error" }) : m.show({ headText: "团队设置", bodyText: "创建团队前请先设置邮箱", buttons: [{ label: "去设置", class: "btn btn-ok", onClick: function() {
                                    return window.location.href = "/profile" } }, { label: "取消", class: "btn btn-cancel" }] }) }, openTeamManage: function() {
                        return s("/enterprise") }, openTrash: function(e, t) {
                        var n;
                        return n = w.createElement(g), y.render(n, a("#trash-container")[0]), h.notify("trash:show") }, markStar: function() {
                        var t, n, r, i;
                        return r = this, this.cow.currentFile.tags || (this.cow.currentFile.tags = []), n = this.cow.currentFile.tags.indexOf("favorites"), i = n >= 0 ? "/favorites/destroy" : "/favorites/create", t = { guid: this.cow.currentFile.guid }, a.post(i, t, function(t) {
                            if (0 !== t.code) return e.alert({ title: "标星操作失败", type: "error" }) }) }, downloadApp: function() {
                        return i.clearDropdown(), a(".common-modal-wrap").empty().append(f) }, pokeUser: function(e, t) {
                        return a.post("/poke", { user_id: a(t).attr("data-user-id") }, function(e) {}) } }, b.prototype.targetedPaidUsersSurvey = function() {
                    var e;
                    if (d.needToGuide()) return (null != (e = this.cow) ? e.survey : void 0) ? (this.cow.survey = null, m.show({ buttons: [], externalClass: "paid-survey-modal", headText: "", bodyText: "<span id='survey-letter'></span> <span id='survey-computer'></span> <div>石墨文档 @ 你：</div> <br> <div>感谢您参与本次用户调研，我们已将「石墨文档高级版」<b>2 个月免费</b> 使用机会冲入您的账户。如未收到，请联系我们的客服人员。</div> <div>我们还要偷偷告诉您：「石墨文档企业版」即将上线，如您的团队有需求，请联系邮箱 <a href='mailto:wangxi@shimo.im'>wangxi@shimo.im</a> , 我们同样会奉上 <b>专属折扣</b>。</div>" })) : void 0 }, b.prototype.render = function() {
                    var e, t;
                    if ("spreadsheet" !== this.cow.pageType && "doc" !== this.cow.pageType || (u.reset(), t = !0), this.cow.currentUser.color = u.CURRENT_COLOR, e = { user: this.cow.currentUser, pageType: this.cow.pageType, listType: this.cow.listType, options: { hideMessage: t } }, k.unmount(T), this.$view.html(o.template(p)(e)), k.mount(T), new l(this.$view.find(".header-search-wrap")), this.targetedPaidUsersSurvey(), "enterprise_dingtalk" !== this.cow.currentUser.accountType) return d.needToGuide() ? d.checkIsReady().then(function() {
                        var e, t;
                        return t = a(".header-try-wrap"), e = t.find(".header-try-link"), d.getMembershipInfo().then(function() {
                            var n, r, i;
                            if (cow.currentUser.accountTypeExpiredAt) {
                                if (n = new Date(cow.currentUser.accountTypeExpiredAt), i = new Date, n < i) return void(d.shouldNotifyExpiration && (d.accountTypeStatus = "expiration", e.text("石墨高级版已到期，点此升级"), t.addClass("active")));
                                if (r = Math.ceil((n - i) / 864e5), r <= 10) return void(d.shouldNotifyRenewal && (d.accountTypeStatus = "renewal", "personal_premium" === cow.currentUser.accountType ? (e.text("石墨个人高级版剩余" + r + "天，点此续费"), t.addClass("active")) : "enterprise_standard" === cow.currentUser.accountType && ["creator", "admin"].indexOf(cow.currentUser.team_role) > -1 && (e.text("石墨企业版剩余" + r + "天，点此续费"), t.addClass("active")))) }
                            return cow.guideStatus.upgrade_pro ? t.remove() : "personal_free" !== cow.currentUser.accountType ? (t.remove(), d.removeTipAjax("upgrade_pro")) : t.addClass("active") }) }) : void 0 }, b.prototype.resizeMessageBox = function(e) {
                    var t, n, r, i;
                    return i = 300, r = a(window).height() - 200, n = 600, t = Math.min(Math.max(i, r), n), e.find(".message-content").css("max-height", t) }, b.prototype.startPush = function() {
                    var e;
                    return e = this, t.bind("File", function(e) {
                        var t, n;
                        if (t = e.data, window.cow.readonly && a("#doc-title-input").html(t.name), n = window.cow.currentFile && window.cow.currentFile.id, t.id === n) return t.is_delete >= 1 ? window.location.href = "/desktop" : void 0 }), t.bind("Share", function(e) {
                        var t, n;
                        if (n = e.data, 1 === n.is_delete && (t = window.cow.currentFile && window.cow.currentFile.id, n.file_id === t && 1 === n.is_delete)) return window.location.href = "/desktop" }), t.bind("Contact", function(e) {
                        var t, n, i, a, s;
                        for (o.isArray(e.data) || (e.data = [e.data]), a = e.data, s = [], t = 0, i = a.length; t < i; t++) n = a[t], s.push(r.push(n));
                        return s }), t.bind("Unsubscribe", function(e) {
                        var t;
                        if (t = e.data, "desktop" === t.channel) return window.cow.desktopNotification = t.is_delete }), h.attach("tagFile:header", function(t) {
                        var n, r;
                        if (r = t.data.is_delete ? +t.data.file_id : t.data.file.id, r === this.cow.currentFile.id) return this.cow.currentFile.tags || (this.cow.currentFile.tags = []), n = this.cow.currentFile.tags.indexOf("favorites"), n >= 0 ? e.cow.currentFile.tags.splice(n, 1) : e.cow.currentFile.tags.push("favorites"), a(".header-star-btn").toggleClass("active") }) }, b }(e.DomModule), C = null, { getInstance: function(e, t) {
                    return C || (C = new A(e, t)), C } } }.apply(t, r), !(void 0 !== i && (e.exports = i)) }).call(t, n(1), n(4), n(240)) }, function(e, t, n) {
    var r, i;
    (function(a, o) {
        var s = function(e, t) {
                function n() { this.constructor = e }
                for (var r in t) c.call(t, r) && (e[r] = t[r]);
                return n.prototype = t.prototype, e.prototype = new n, e.__super__ = t.prototype, e },
            c = {}.hasOwnProperty;
        r = [n(189), n(515), n(299), n(197), n(272), n(437), n(522), n(314)], i = function(e, t, n, r, i, c, u) {
            var l;
            return l = function(n) {
                function l() {
                    return l.__super__.constructor.apply(this, arguments) }
                return s(l, n), l.prototype.phrases = { private: { showSelect: !1, switch: "off", showQr: !1, action: "私人", tip: "设置成功", text: "私有文档", viewType: "1" }, readonly: { showSelect: !0, switch: "on", showQr: !0, action: "只读", tip: "设置成功", text: "此文档已分享", viewType: "2" }, editable: { showSelect: !0, switch: "on", showQr: !0, action: "可写", tip: "设置成功", text: "此文档已分享", viewType: "2" } }, l.prototype.init = function() {
                    var e, t;
                    t = this, this.cow = window.cow, e = this.cow.currentFile.guid, c.config({ swfPath: "//dn-shimo-assets.qbox.me/assets/res/ZeroClipboard.swf" }), i.getShareStatusByGuid(e).then(function(e) {
                        var n;
                        return t.cow.shareStatus = e, n = e.mode, t.$view.html(a.template(u)({})), t.$weixinShare = t.$view.find(".weixin-share"), t.$shareTitle = t.$view.find(".doc-share-header-text"), t.$shareTypeText = t.$view.find(".doc-link-info-text"), t.$shareDrop = t.$view.find(".doc-share-dropdown"), t.$shareLink = t.$view.find(".doc-link-input"), t.$shareUsers = t.$view.find(".doc-share-users"), t.$shareIcon = t.$view.find(".doc-share-header-icon"), t.$inputBox = t.$view.find(".doc-link-input-box"), t.$openBtn = t.$view.find(".doc-share-open"), t.$changeTypeBtn = t.$view.find(".doc-link-change"), t.$shareArrow = t.$view.find(".doc-contact-icon"), t.$view.find(".doc-qr-img").attr("src", t.getQrImage()), o('.permission-item[data-mode="' + n + '"]').addClass("active"), t.$shareLink.val(location.href), t.resetView(), t.initPush(), t.initCopy() }), this.setShareLinkAutoSelect() }, l.prototype.initCopy = function() {
                    var t, n;
                    return n = this, t = new c(o(".doc-share-copy")), t.on("ready", function(r) {
                        return t.on("copy", function(r) {
                            var i;
                            return e.alert({ title: "复制成功！", delay: 1500 }), i = r.clipboardData, t.setText(n.$shareLink.val()) }) }), t.on("error", function(e) {
                        return n.$inputBox.addClass("unable") }) }, l.prototype.resetView = function() {
                    var e;
                    return e = "private" === this.cow.shareStatus.mode ? "1" : "2", this.$shareDrop.attr("state", e), this.changeDropText(this.cow.shareStatus.mode), this.$shareLink.val(location.href), this.$view.find(".doc-qr-img").attr("src", this.getQrImage()) }, l.prototype.changeDropText = function(e) {
                    var t, n, r;
                    return this.cow.shareList.length > 1 ? (r = "，有" + this.cow.shareList.length + "位成员参与协作", this.$shareUsers.addClass("active"), this.$shareUsers.find(".doc-share-number").text("成员(" + this.cow.shareList.length + ")"), t = this.$shareUsers.find(".doc-share-userlist").empty(), a.each(this.cow.shareList, function(e, n) {
                        if (!(n > 9)) return t.append("<img class='doc-users-item' src='" + e.avatar + "' alt='头像' />") }), this.$shareArrow.removeClass("lower")) : (r = "", this.$shareUsers.removeClass("active"), this.$shareArrow.addClass("lower")), "private" === e && (r = "，只有成员可以访问"), n = this.phrases[e].text + r, this.$shareTitle.text(n), this.$shareTypeText.text(this.phrases[e].action), o(".permission-item").removeClass("active"), o(".permission-item[data-mode='" + e + "']").addClass("active"), "private" === e ? (this.$shareIcon.removeClass("active"), this.$openBtn.text("点击开启")) : (this.$shareIcon.addClass("active"), this.$openBtn.text("点击关闭")), this.changeStatusBtnText() }, l.prototype.changeStatusBtnText = function() {
                    var e;
                    return e = this.$shareDrop.attr("state"), "21" === e ? this.$changeTypeBtn.text("收起") : this.$changeTypeBtn.text("更改") }, l.prototype.changShareStatus = function(e) {
                    var t;
                    return t = this, t.changShareStatusAjax(e, function(n, r) {
                        if (n && e !== t.cow.shareStatus.mode) return t.cow.shareStatus = r, t.changShareStatusView(e) }) }, l.prototype.changShareStatusAjax = function(t, n) {
                    var r, i;
                    return i = this, r = this.cow.currentFile.guid, e.post("/external_link/" + r, { mode: t }).then(function(e) {
                        return e.data ? n(!0, e.data) : n(!1) }).fail(function() {
                        return e.alert({ type: "error", title: "设置失败" }), n(!1) }) }, l.prototype.changShareStatusView = function(t, n, r) {
                    if (null == n && (n = !0), this.changeState(r || this.phrases[t].viewType), this.changeDropText(t), n) return e.alert({ title: this.phrases[t].tip }) }, l.prototype.changeState = function(e) {
                    return o(".doc-share-dropdown").attr("state", e) }, l.prototype.getQrImage = function(t) {
                    return e.getQrImageUrl(114, window.location.href) }, l.prototype.openShareListDialog = function() {
                    return this.teamworker = new t("#teamworker-setting", { shareList: !0 }) }, l.prototype.openTeamworkerDialog = function() {
                    return this.teamworker = new t("#teamworker-setting") }, l.prototype.eventMap = { "click .teamworker-manage": "openTeamworkerDialog", "change li.share select": "changeMode", "click .doc-share-open": "openShareClick", "click .doc-link-change": "changeShareClick", "click .doc-link-qr": "qrClick", "click .doc-link-wb": "wbClick", "click .doc-share-users": "userListClick", "click .permission-item": "permissionItemClick" }, l.prototype.domEvents = { permissionItemClick: function(e, t) {
                        var n, r;
                        if (n = o(t), !n.hasClass("active")) return r = n.attr("data-mode"), this.changShareStatus(r) }, openShareClick: function() {
                        var e;
                        return e = this.$shareDrop.attr("state"), "1" === e ? this.changShareStatus("readonly") : this.changShareStatus("private") }, changeShareClick: function() {
                        var e;
                        return e = this.$shareDrop.attr("state"), this.changeState("21" === e ? "2" : "21"), this.changeStatusBtnText() }, qrClick: function(e, t) {
                        var n;
                        return n = this.$shareDrop.attr("state"), this.changeState("22" === n ? "2" : "22"), this.changeStatusBtnText() }, wbClick: function(e, t) {
                        var n, r, i;
                        return r = encodeURIComponent(location.href), n = document.title + "（@石墨文档）", i = "http://service.weibo.com/share/share.php?url=" + r + "&title=" + n + "&type=button&language=zh_cn&style=number", window.open(i, "_blank", "width=615,height=505") }, userListClick: function(e) {
                        var t;
                        return t = this, this.cow.shareList.length > 1 ? this.openShareListDialog() : this.openTeamworkerDialog(), this.close(), this.$view.parents(".share-box").find(".dropdown-btn").addClass("active"), e.stopPropagation() }, changeMode: function() {
                        var e, t;
                        return t = this, e = this.$modeSelect.val(), t.changShareStatus(e) } }, l.prototype.initPush = function() {
                    var e;
                    return e = this, r.bind("ExternalLink", function(t) {
                        var n, r;
                        return e.cow.shareStatus = t.data, n = e.$shareDrop.attr("state"), "private" !== t.data.mode && "1" !== n && (r = n), e.changShareStatusView(t.data.mode, !1, r) }) }, l.prototype.setShareLinkAutoSelect = function() {
                    var e, t;
                    return e = this.$view.find(".share-link>input"), t = function(n) {
                        return o(n.target).select(), e.off("mouseup", t) }, e.on("mouseup", t), e.on("blur", function(n) {
                        return e.on("mouseup", t) }) }, l.prototype.reload = function() {
                    var e, t;
                    return t = this, e = this.cow.currentFile.guid, i.getShareStatusByGuid(e).then(function(e) {
                        return t.cow.shareStatus = e, t.changShareStatusView(e.mode, !1) }) }, l }(e.DomModule), e.dropdownable(l) }.apply(t, r), !(void 0 !== i && (e.exports = i)) }).call(t, n(4), n(1)) }, function(e, t, n) {
    var r, i;
    (function(a, o, s) {
        var c = function(e, t) {
                function n() { this.constructor = e }
                for (var r in t) u.call(t, r) && (e[r] = t[r]);
                return n.prototype = t.prototype, e.prototype = new n, e.__super__ = t.prototype, e },
            u = {}.hasOwnProperty;
        r = [n(189), n(521), n(516), n(517), n(518), n(519), n(520), n(206), n(196), n(299), n(195), n(383), n(342)], i = function(e, t, n, r, i, u, l, d, p, f, h, m, v) {
            var g;
            return g = function(g) {
                function w() {
                    return w.__super__.constructor.apply(this, arguments) }
                return c(w, g), w.prototype.inited = !1, w.prototype.init = function(t, n) {
                    var r;
                    window.cow.authorized !== !1 && (r = this, this.cow = window.cow, this.defaultAvatar = "/static/dist/assets/images/invited-829002c507.png", this.option = this.option = a.extend({ file: window.cow.currentFile, isTeamCreator: this.isTeamCreator }, n), this.teamId = this.option.teamId, this.isTeamCreator = this.option.isTeamCreator, this.readOnly = this.option.readOnly = this.option.readOnly || !1, this.isMobile = e.isMobile, this.maxTeamworkerCount = v.initLimition().teamworkerCount, this.modal = void 0 === this.option.modal || this.option.modal, this.teamId ? (this.memberList = [], this.membersObj = {}) : this.file = this.option.file, this.option.shareList ? this.renderShareList() : this.renderTeamworker(), this.sharedUserlist = { current: [], grand: [] }, this.show(), this.$view.click(function(e) {
                        if (o(e.target).is(r.$view) && r.modal) return r.hide() })) }, w.prototype.renderTeamworker = function() {
                    return this.$view.html(a.template(t)(this.option)), this.$shareMenu = this.$view.find(".share-menu"), this.$emailInput = this.$shareMenu.find(".teamworker-input"), this.$searchList = this.$shareMenu.find(".search-user-list"), this.$userList = this.$shareMenu.find(".teamworker-user-list"), this.$delBtn = this.$view.find(".teamworker-input-clear"), this.$listItem = this.$view.closest(".ob-li"), this.$notFound = this.$view.find(".user-not-found"), this.$teamworkerRight = o(".teamworker-content-right"), this.$teamworkerShadow = o(".teamworker-list-shadow"), this.$inviteBtn = o(".invite-users"), this.$inviteLinkPopup = this.$view.find(".invite-link-popup"), this.$inviteLinkBtn = this.$view.find("a.btn.invite-link"), this.$inviteLinkQr = this.$inviteLinkPopup.find("img"), this.showShareMenu(), this.waitingInvited = [] }, w.prototype.renderShareList = function() {
                    return this.$view.html(a.template(n)(this.option)), this.$userList = this.$view.find(".teamworker-content"), this.$shareNumber = this.$view.find(".teamworker-number"), this.$teamworkerShadow = o(".sharelist-content-shadow"), this.showShareList() }, w.prototype.showShareList = function() {
                    return this.teamId ? this.getTeamMembers("", !0) : this.getUserList("", !0) }, w.prototype.renderTeamworkerInner = function() {
                    return this.$userList.find("ul").html(""), this.renderRecentlyContacts() }, w.prototype.renderRecentlyContacts = function() {
                    var t;
                    return t = this, e.get("/api/share/recent_contact", {}, function(e) {
                        var n, r, i;
                        return t.recentContacts = i = e.data, t.teamId ? a.forEach(i, function(e) { t.membersObj[e.id] ? e.shareClass = "is-shared" : e.shareClass = "" }) : a.forEach(i, function(e) { window.cow.shareObj[e.id] ? e.shareClass = "is-shared" : e.shareClass = "" }), r = { userList: i.filter(function(e) {
                                return e.status > -1 }), title: "最近" }, this.recentlyObject = r, n = a.template(l)({ contactsList: [r] }), t.$userList.find("ul").prepend(n) }) }, w.prototype.renderContacts = function() {
                    var e, t, n, r, i, o;
                    return o = this, t = d.contacts, i = {}, a.forIn(t, function(e, t) {
                        var n;
                        if (e.status !== -1) return n = e.name_pinyin.substr(0, 1), o.teamId ? o.membersObj[e.id] ? e.shareClass = "is-shared" : e.shareClass = "" : window.cow.shareObj[e.id] ? e.shareClass = "is-shared" : e.shareClass = "", n.match(/[a-zA-Z]/) || (n = "#"), i[n] ? i[n].userList.push(e) : i[n] = { title: n.toUpperCase(), userList: [e] } }), r = a.values(i), r.sort(function(e, t) {
                        return e.title > t.title ? 1 : -1 }), r[0] && "#" === r[0].title && (n = r.shift(), r.push(n)), e = a.template(l)({ contactsList: r }), this.$userList.find("ul").append(e) }, w.prototype.renderSearchList = function() {
                    var e, t;
                    return t = this, this.$searchList.find("ul").html(""), a.forEach(this.searchUsers, function(e) {
                        var n, r;
                        r = !1, a.each(t.waitingInvited, function(t) {
                            if (r = e.id ? e.id === t.id : e.email === t.email) return r }), n = t.teamId ? t.membersObj : window.cow.shareObj, n[e.id] ? e.shareClass = "is-shared" : r ? e.shareClass = "is-checked" : e.shareClass = "" }), e = { userList: this.searchUsers, title: "" }, u = a.template(l)({ contactsList: [e] }), this.$searchList.find("ul").append(u) }, w.prototype.renderInvitedUser = function() {
                    var e, t, n;
                    return n = "待添加成员" + (this.waitingInvited.length ? "(" + this.waitingInvited.length + ")" : ""), e = { userList: this.waitingInvited, title: n, titleClass: "invite-title" }, t = a.template(l)({ contactsList: [e] }), this.$teamworkerRight.find("ul").html(t), this.waitingInvited.length ? this.$inviteBtn.removeClass("disable") : this.$inviteBtn.addClass("disable") }, w.prototype.changeListShadow = function() {
                    return this.$userList.find("ul").height() > this.$userList.height() ? this.$teamworkerShadow.show() : this.$teamworkerShadow.hide() }, w.prototype.eventMap = { "click .dropdown-btn": "dropClick", "click .dropdown": "stopPropagation", "click .search-list li": "shareClick", "click .user-input .input-group-addon": "handlerUserInput", "click .share-ob ": "showShareMenu", "click .share-ob": "onlineStatusWatch", "mouseover .search-list li": "searchHover", "click .icon-close:first": "close", "click .add-share": "openAddShare", "keyup .teamworker-input": "emailInputKeyup", "keydown .teamworker-input": "emailInputKeydown", "click .teamworker-input-clear": "clearInput", "click .invite-users": "inviteUsers", "click .cancel-invite": "closeInvite", "click .share-user-remove": "cancelShare", "click .share-menu-content .share-user-li": "pickUser", "click .invite-link": "inviteLinks", "click *": "hideInviteLinkPopup", "click .team-role-item": "roleItemClick" }, w.prototype.domEvents = { dropClick: function(e, t) {
                        var n, r, i, a, s, c, u, l, d, p;
                        r = o(t), c = r.hasClass("active"), h.clearDropdown(), this.$view.find(".is-dropup").removeClass("is-dropup"), this.$view.find(".has-drop").removeClass("has-drop"), a = this.$view.find(".user-list>.share-user-li"), c || (i = o(t).closest(".user-li"), d = this.$view.find(".sharelist-content").scrollTop(), s = i.find(".role-dropdown-wrap").height() + 20 + 10, p = a.index(i), u = 36 * (p + 1) - d, l = this.$view.find(".sharelist-content").height() - u, i.addClass("has-drop"), n = r.addClass("active").next(".dropdown").addClass("active"), l < s && n.addClass("is-dropup")), e.stopPropagation() }, stopPropagation: function(e, t) {
                        return e.stopPropagation(), e.preventDefault(), !1 }, closeInvite: function() {
                        return "sharelist" === this.option.pre ? this.renderShareList() : (o(".teamworker-close").click(), this.isTeamCreator ? this.gotoCurrentTeam() : void 0) }, inviteUsers: function() {
                        if (!this.$inviteBtn.hasClass("disable")) return this.$inviteBtn.addClass("disable").text("请求中..."), this.invite() }, pickUser: function(e, t) {
                        var n, r, i, s, c, u, l, p, f, h, v, g, w, y;
                        if (p = o.Deferred(), p.then(function(e) {
                                return function(t) {
                                    if (t) return e.waitingInvited.push(t) } }(this)), p.then(function(e) {
                                return function() {
                                    return e.renderInvitedUser() } }(this)), n = o(t), r = n.find(".operation-icon"), !r.hasClass("is-shared")) return h = r.hasClass("is-checked"), v = r.hasClass("is-remove"), y = n.attr("data-user-id"), f = n.attr("data-user-email"), y ? (i = this.$view.find(".teamworker-user-li[data-user-id=" + y + "] .operation-icon"), s = "id", c = y) : (i = this.$view.find(".teamworker-user-li[data-user-email='" + f + "'] .operation-icon"), s = "email", c = f), this.waitingInvited = a.remove(this.waitingInvited, function(e) {
                            return e[s] + "" != c + "" }), h || v ? (i.removeClass("is-checked"), p.resolve()) : (i.addClass("is-checked"), y ? (w = d.contacts[y], w ? (w.shareClass = "is-remove", l = o.extend(!0, {}, w), p.resolve(l)) : (g = n.find(".share-user-name").text(), u = n.find(".share-user-avatar img").attr("src"), l = { name: g, email: f, id: y, avatar: u, shareClass: "is-remove" }, p.resolve(l))) : (l = { name: "邮件邀请", email: f, avatar: this.defaultAvatar, shareClass: "is-remove" }, m.getUserInfo(f).done(function(e) {
                            return function(e) {
                                return 0 === e.code && (l.name = e.data.name, l.avatar = e.data.avatar), p.resolve(l) } }(this)))) }, openAddShare: function() {
                        return this.maxTeamworkerCount !== 1 / 0 && cow.shareList.length >= this.maxTeamworkerCount && !this.isTeamCreator ? void this.showOutCountWarning() : this.readOnly ? o(".teamworker-close").click() : (this.renderTeamworker(), this.option.pre = "sharelist") }, cancelShare: function(t) {
                        var n, r, i, a, s, c, u;
                        return a = this, u = o(t.target).parents(".user-li"), c = +u.attr("data-user-id"), r = u.hasClass("verified"), c === window.cow.currentUser.id ? n = "确认要删除对你自己的共享吗？<br />删除后你将无权限访问该文件" : (s = d.get(c), i = r ? s.email : s.name, n = '确认要删除对<span class="blue">' + i + "</span>的共享吗？<br />删除后该成员将无权限访问该文件"), a.tempHide(), f.show({ okCallback: function() {
                                return a.tempShow(), a.showCancelInviteStatus(u), e.post("/api/share/delete", { guid: a.file.guid, user_id: c }, function() {
                                    return c === window.cow.currentUser.id ? (a.hide(), e.alert({ title: "已删除对你自己的共享" })) : (a.getUserList(!0, !0), e.alert({ title: "已删除<span class='blue'>" + d.get(c).name + "</span>" })) }, function() {
                                    return e.alert({ title: "删除失败", type: "error" }), a.showCancelInviteStatus(u, "confirm") }) }, cancelCallback: function() {
                                return a.tempShow() }, headText: "删除共享", bodyText: n }) }, shareClick: function(e, t) {}, handlerUserInput: function() {
                        return this.handlerUserInput.apply(this, arguments) }, onlineStatusWatch: function() {
                        return p.watch("shareMenu", this.$shareMenu, function(e) {
                            return this.find("ul li[data-user-id=" + e + "]") }) }, emailInputKeydown: function(t) {
                        var n;
                        (n = t.keyCode) === e.keyCodes.UP || n === e.keyCodes.DOWN ? t.preventDefault() : t.keyCode === e.keyCodes.ENTER && this.handlerUserInput(t) }, emailInputKeyup: function(t) {
                        var n;
                        return t.keyCode === e.keyCodes.ESC && this.hide(), n = this.$emailInput.val().trim(), n ? this.showSearchList() : this.hideSearchList(), t.keyCode === e.keyCodes.UP ? (this.selectSearchItem("up"), this.scrollSearch()) : t.keyCode === e.keyCodes.DOWN ? (this.selectSearchItem("down"), this.scrollSearch()) : (this.$emailInput.parents(".user-input").removeClass("has-error"), this.search(t.target.value)) }, searchHover: function(e, t) {
                        var n;
                        if (n = o(t), !n.hasClass("active")) return this.$searchList.find("li").removeClass("active"), n.addClass("active") }, close: function() {
                        return this.hide() }, clearInput: function(e) {
                        return this.$emailInput.val("").focus(), this.hideSearchList(), this.$notFound.hide() }, inviteLinks: function() {
                        var t;
                        return t = this, this.$inviteLinkPopup.toggleClass("hide"), this.$inviteLinkPopup.hasClass("hide") || this.$inviteLinkQr.prop("src", ""), e.get("/api/file/" + this.file.guid + "/invite_link").then(function(t) {
                            return function(n) {
                                var r;
                                return r = e.getQrImageUrl(114, n.data.link), t.$inviteLinkQr.prop("src", r) } }(this)) }, hideInviteLinkPopup: function(e) {
                        var t;
                        if (this.modal) {
                            if (t = o(e.target), 0 === this.$view.find(".invite-link-popup").length) return;!t.is(this.$inviteLinkPopup.find("*")) && !t.is(this.$inviteLinkBtn) && !this.$inviteLinkPopup.hasClass("hide") && this.$inviteLinkPopup.addClass("hide") } }, roleItemClick: function(e, t) {
                        var n, r, i, s, c, u;
                        if (s = this, n = o(t), i = o(t).attr("action-type"), r = o(t).closest(".user-li"), h.clearDropdown(), r.length > 0) {
                            if (c = r.attr("data-user-id"), u = s.membersObj[c], "undefined" == typeof c) return;
                            if ("delete" === i || "cancel-invite" === i) return f.show({ okCallback: function() {
                                    return s.removeTeamMember(c).then(function() {
                                        return r.remove(), a.remove(s.memberList, function(e) {
                                            return +e.id === +c }), delete s.membersObj[c] }).fail(function() {}) }, headText: "移除成员", bodyText: "<div>确定要移除 " + u.name + " 吗？</div><div>移除后该成员将无权限访问该文件夹</div>" });
                            if (a.includes(["admin", "member", "visitor"], i)) return this.changeMemberRole(c, i).then(function(e) {
                                return r.find(".role-title").text(e), r.find(".team-role-list li").removeClass("checked"), n.addClass("checked") }).fail(function() {}) } } }, w.prototype.getMobileShareList = function() {
                    var e, t, n;
                    return t = this.sharedUserlist, n = [], e = "", a.forEach(t.current, function(e) {
                        return n.push(e.name) }), a.forEach(t.grand, function(e) {
                        return a.forEach(e.users, function(e) {
                            if (n.length < 4) return n.push(e.name);
                        })
                    }), e = n.length <= 3 ? n.toString() + '<span class="m-icon">' : n.slice(0, 3).toString() + '...<span class="m-icon">'
                }, w.prototype.showCancelInviteStatus = function(e, t) {
                    return null == t && (t = "loading"), "loading" === t ? (t = "userlist-" + t, e.find(".status").hide(), e.find(".status." + t).show()) : e.find(".status").attr("style", "") }, w.prototype.showShareMenu = function(e, t) {
                    return this.teamId ? this.getTeamMembers() : this.getUserList() }, w.prototype.showSearchList = function() {
                    return this.$delBtn.show(), this.$emailInput.addClass("search-result-shown"), this.$searchList.show(), this.$userList.hide() }, w.prototype.hideSearchList = function() {
                    return this.$emailInput.val("").removeClass("search-result-shown"), this.$delBtn.hide(), this.$searchList.hide(), this.$userList.show() }, w.prototype.selectSearchItem = function(e) {
                    var t, n, r;
                    return n = this.$searchList.find("li"), "undefined" == typeof e ? n.removeClass("active").first().addClass("active") : (t = this.$searchList.find("li.active"), 0 !== t.length ? (r = t.attr("data-index"), "up" === e && r > 0 && t.prev().length > 0 && t.removeClass("active").prev().addClass("active"), "down" === e && r < n.length - 1 && t.next().length > 0 ? t.removeClass("active").next().addClass("active") : void 0) : void 0) }, w.prototype.updateAttr = function(t, n) {
                    return e.post("/api/file/" + n, t, function() {}) }, w.prototype.showInviteStatus = function(e) {
                    return this.$activeSearchLi.find("span.icon-add,span.icon-loading,span.icon-remind").hide(), this.$activeSearchLi.find("span.icon-" + e).show() }, w.prototype.invite = function() {
                    var t, n, r, i, o;
                    if (i = this, this.waitingInvited.length) return o = "", n = {}, i.teamId ? (n = { team_id: this.teamId, users: [] }, o = "/team_members/invite") : (n = { file_id: this.file.id, users: [] }, o = "/api/invite"), r = !1, this.maxTeamworkerCount === 1 / 0 || this.isTeamCreator || (t = this.maxTeamworkerCount - cow.shareList.length, t <= 0 ? r = !0 : this.waitingInvited.length > t && (r = !0)), r ? (i.$inviteBtn.removeClass("disable").text("确定"), void i.showOutCountWarning()) : (a.forEach(this.waitingInvited, function(e) {
                        var t;
                        return t = e.id ? e.id : e.email, n.users.push(t) }), n.users.length > 0 ? e.post(o, n).then(function(t) {
                        return 0 === t.code && t.data.success ? (e.alert({ title: "邀请成功！" }), i.renderShareList()) : (e.alert({ title: "添加失败", type: "error" }), i.$inviteBtn.removeClass("disable").text("确定")) }).fail(function() {
                        return e.alert({ title: "添加失败", type: "error" }), i.$inviteBtn.removeClass("disable").text("确定") }) : void 0) }, w.prototype.showOutCountWarning = function() {
                    var e;
                    return e = this.maxTeamworkerCount, f.show({ headText: "到达上限", bodyText: "最多添加" + e + "个协作者，升级<b>石墨高级版</b>无此限制", buttons: [{ type: "link-button", buttonLabel: "了解详情", href: "/payment", target: "_blank", customClass: "btn btn-ok", closeAfterClick: !0 }, { type: "button", buttonLabel: "取消", customClass: "btn btn-cancel", closeAfterClick: !0 }] }) }, w.prototype.setTplClassName = function(e) {
                    return e.isOwner ? (e.tplClassName = "user-admin", e.tplTitle = "管理员") : "verified" !== e.status && "verified" !== e._status ? (e.tplClassName = "user-wait-confirm", e.tplTitle = "成员") : (e.tplTitle = "成员", e.tplClassName = "user-normal", +e.id === window.cow.currentUser.id ? e.tplClassName = "user-self" : void 0) }, w.prototype.getTeamMembers = function(t, n) {
                    var r, o, s;
                    return null == t && (t = !0), s = this, o = function() {
                        var e, t;
                        return n ? (e = s.membersObj[cow.currentUser.id].team_role, t = a.template(i)({ myRole: e, userList: s.memberList, readOnly: s.readOnly }), s.$userList.find("ul").html(t), s.memberList && s.$shareNumber.text("团队成员(" + s.memberList.length + ")")) : s.renderTeamworkerInner(), s.changeListShadow() }, t || n ? (r = function(e) {
                        var t;
                        return t = e.data, t.map(function(e) {
                            switch (+e.id === window.cow.currentUser.id && (e.isSelf = !0), e.team_role) {
                                case "creator":
                                    e.roleTitle = "创建者";
                                    break;
                                case "admin":
                                    e.roleTitle = "管理员";
                                    break;
                                case "member":
                                    e.roleTitle = "成员" }
                            return s.membersObj[e.id] = e }), t = t.sort(function(e, t) {
                            return ("admin" === t.team_role) - ("admin" === e.team_role) }).sort(function(e, t) {
                            return ("creator" === t.team_role) - ("creator" === e.team_role) }), s.memberList = t }, e.get("/smapi/teams/mine/members").then(function(e) {
                        if (0 === e.code) return r(e), o() })) : o() }, w.prototype.getUserList = function(t, n) {
                    var i, o, s;
                    return null == t && (t = !0), s = this, o = function() {
                        var e;
                        return n ? (e = a.template(r)(s.sharedUserlist), s.$userList.find("ul").html(e), window.shareList && s.$shareNumber.text("成员(" + window.shareList.length + ")")) : (s.renderTeamworkerInner(), s.$emailInput.focus()), s.changeListShadow() }, t || n ? (i = function(e) {
                        var t;
                        return t = e.data, t.grandUsers = [], t.grand.map(function(e) {
                            return e.users = [], e.user_ids.split(",").forEach(function(t) {
                                var n;
                                if (d.exists(t)) return n = d.get(t), n._status = "verified", n.isOwner = +e.user_id === +t, +n.id === window.cow.currentUser.id && (n.isSelf = !0), s.setTplClassName(n), e.users.push(n) }), t.grandUsers = t.grandUsers.concat(e.users), e }), t.grandUsers = t.grandUsers.sort(function(e, t) {
                            return t.status - e.status }).sort(function(e, t) {
                            return !!t.isSelf - !!e.isSelf }).sort(function(e, t) {
                            return t.isOwner - e.isOwner }), t.current.map(function(e) {
                            return e.online = p.isOnline(e.id), +e.id === window.cow.currentUser.id && (e.isSelf = !0), s.setTplClassName(e), e }), t.current = t.current.sort(function(e, t) {
                            return t.status - e.status }).sort(function(e, t) {
                            return !!t.isSelf - !!e.isSelf }).sort(function(e, t) {
                            return t.isOwner - e.isOwner }), s.sharedUserlist = t, window.shareList = t.grandUsers.concat(e.data.current), cow.shareList = window.shareList }, e.post("/api/share/" + s.file.guid, {}, function(e) {
                        if (0 === e.code) return i(e), o() }, function(t) {
                        if ("err_shortcut_inside" === t.message) return e.alert({ title: "文件夹中有他人分享的文档/文件夹，无法添加共享人", type: "error" }), s.hide() })) : o() }, w.prototype.search = function(t) {
                    var n;
                    return n = this, this.searchUsers = d.search(t, n.recentContacts || []).filter(function(e) {
                        return +e.id !== +window.cow.currentUser.id && e.status > -1 }).map(function(e, t) {
                        return e.index = t, e }), 0 === this.searchUsers.length && t ? e.regs.email.test(t) ? (this.searchUsers.push({ name: "邮件邀请", email: t, avatar: this.defaultAvatar }), this.$notFound.hide()) : this.$notFound.text("无搜索结果").show() : this.$notFound.hide(), this.renderSearchList() }, w.prototype.scrollSearch = function() {
                    var e, t, n, r, i;
                    if (n = this.$searchList.find(".active").index(), r = this.$searchList.scrollTop(), e = 50, t = 150, i = e * n, i - r > e - e || i < r) return this.$searchList.scrollTop(i) }, w.prototype.handlerUserInput = function(e) {
                    var t;
                    this.$searchLi = this.$searchList.find(".share-user-li"), t = this.$searchLi.find(".operation-icon"), 1 !== this.$searchLi.length || t.hasClass("is-shared") || t.hasClass("is-checked") || (this.$searchLi.click(), this.$delBtn.click()) }, w.prototype.toggleOverflow = function(e) {
                    return e ? o("body,html").addClass("overflow-hidden") : o("body,html").removeClass("overflow-hidden") }, w.prototype.show = function() {
                    return this.$view.removeClass("hide").click(), this.toggleOverflow(!0) }, w.prototype.tempHide = function() {
                    return this.$view.addClass("hide"), this.toggleOverflow(!1) }, w.prototype.tempShow = function() {
                    return this.$view.removeClass("hide"), o("body").click(), this.toggleOverflow(!0) }, w.prototype.hide = function() {
                    if (this.$view.hasClass("show") ? this.$view.removeClass("show") : (this.$view.off(), this.$view.addClass("hide")), o("body").click(), this.toggleOverflow(!1), this.isTeamCreator) return this.gotoCurrentTeam() }, w.prototype.gotoCurrentTeam = function() {
                    return this.cow.currentTeam = this.teamId, s("/team/" + this.teamId + "/files") }, w.prototype.removeTeamMember = function(t) {
                    var n, r, i, a, s;
                    return i = o.Deferred(), a = this, n = "/team_members/delete", s = this.membersObj[t], r = { team_id: a.teamId, user_id: t }, e.post(n, r).then(function(t) {
                        if (0 === t.code) return e.alert({ title: "已删除<span class='blue'>" + s.name + "</span>" }), i.resolve() }).fail(function(t) {
                        return e.alert({ title: "删除<span class='blue'>" + s.name + "</span>失败", type: "error" }), i.reject() }), i.promise() }, w.prototype.changeMemberRole = function(t, n) {
                    var r, i, a, s, c;
                    return a = o.Deferred(), s = this, r = "/team_members/change_role", c = this.membersObj[t], i = { team_id: s.teamId, user_id: t, role: n }, e.post(r, i).then(function(t) {
                        var r;
                        if (0 === t.code) {
                            switch (r = "", n) {
                                case "admin":
                                    r = "管理员";
                                    break;
                                case "member":
                                    r = "成员";
                                    break;
                                case "visitor":
                                    r = "访客" }
                            return e.alert({ title: "已将<span class='blue'>" + c.name + "</span>修改为" + r }), a.resolve(r) }
                        return e.alert({ title: "更新<span class='blue'>" + c.name + "</span>角色失败" }), a.reject() }).fail(function(t) {
                        return e.alert({ title: "更新<span class='blue'>" + c.name + "</span>角色失败" }), a.reject() }), a.promise() }, w
            }(e.DomModule)
        }.apply(t, r), !(void 0 !== i && (e.exports = i))
    }).call(t, n(4), n(1), n(240))
}, function(e, t) { e.exports = '<div class="sharelist-dialog teamworker-inner">\n    <div class="share-title teamworker-title">\n        <span class="teamworker-number">成员</span>\n        <span class="hicon icon-close teamworker-close"></span>\n    </div>\n\n    <div class="teamworker-content sharelist-content">\n        <ul class="user-list"></ul>\n    </div>\n    <div class="sharelist-content-shadow"></div>\n    <div class="teamworker-footer">\n        \n        <a href="javascript:void(0);" class="teamworker-btn add-share btn btn-ok"><% if (readOnly) {print(\'完成\')} else {print(\'添加成员\')}%></a>\n    </div>\n</div>' }, function(e, t) { e.exports = '<% if (grandUsers.length > 0) { %>\n    <li class="share-li-title user-li-title">共享文件夹</li>\n<% } %>\n<% _.each(grandUsers, function (user) {   %>\n    <li class="grand-li share-user-li user-li <%= user.online?\'online\':\'\' %> <%= user.status || \'\' %>" data-share-id="<%= user.share_id %>" data-user-id="<%= user.id %>" data-user-email="<%= user.email %>">\n        <span class="share-user-avatar">\n            <img src="<%= user.avatar%>">\n            <span class="online-circle"></span>\n        </span>\n        <span class="share-user-name ellipsis"><%= user.name %></span>\n        <span class="share-user-email ellipsis"><%= user.email || \'石墨用户\' %></span>\n        <span class="share-status share-user-identity <%= user.tplClassName %>"><%= user.tplTitle %></span>\n    </li>\n<% }) %>\n\n<% if (current.length > 0) { %>\n    <li class="share-li-title user-li-title <% if (grandUsers.length == 0) {%>no-grand<%}%>">与<%= grandUsers.length > 0 ? \'另\' : \'\' %><%= current.length %>人分享</li>\n<% } %>\n<% _.each(current, function (user) {   %>\n    <li class="share-user-li user-li <%= user.online?\'online\':\'\' %> <%= user.status || \'\' %>" data-share-id="<%= user.share_id %>" data-user-id="<%= user.id %>" data-user-email="<%= user.email %>">\n        <span class="share-user-avatar">\n            <img src="<%= user.avatar%>">\n            <span class="online-circle"></span>\n        </span>\n        <span class="share-user-name ellipsis"><%= user.name %></span>\n        <span class="share-user-email ellipsis"><%= user.email || \'石墨用户\' %></span>\n        <span class="share-status share-user-identity <%= user.tplClassName %>"><%= user.tplTitle %></span>\n        <% if (user.tplClassName != \'user-admin\') { %>\n        <span class="share-status share-user-remove doc-share-icon"></span>\n        <% } %>\n        <span class="share-status share-user-loading"><img src="/static/dist/assets/images/loading-b67e5a67dc.gif" /></span>\n    </li>\n<% }) %>\n\n<% if (!grandUsers.length && !current.length) {%>\n    <li class="no-contact">暂无共享者</li>\n<% } %>\n' }, function(e, t) { e.exports = '<% _.each(userList, function (user, index) {   %>\n    <li class="share-user-li user-li <%= user.online?\'online\':\'\' %> <%= user.status || \'\' %>" data-share-id="<%= user.share_id %>" data-user-id="<%= user.id %>" data-user-email="<%= user.email %>">\n        <span class="share-user-avatar">\n            <img src="<%= user.avatar%>">\n            <span class="online-circle"></span>\n        </span>\n        <span class="share-user-name ellipsis"><%= user.name %></span>\n        <span class="share-user-email ellipsis team-user-email"><%= user.email || \'\' %></span>\n        <div class="team-role-select">\n            <!-- 不修改自己的角色，不是管理员没权限，但是可以取消邀请自己邀请的用户, 访客没任何权限 -->\n            <% if (!readOnly && (!user.isSelf && myRole==\'admin\')) { %>\n            <a class="role-select-btn dropdown-btn" href="javascript:void(0);">\n                <span class="team-sprite select-btn-icon"></span>\n            <% } else { %>\n            <a class="role-select-btn" href="javascript:void(0);">\n            <% } %>\n                <span class="role-title"><%=user.roleTitle%></span>\n            </a>\n            <div class="role-dropdown-wrap dropdown">\n                <div class="trangle">\n                    <span class="top"></span>\n                    <span class="down"></span>\n                </div>\n                <ul class="team-role-list">\n                    <li action-type="admin" class="team-role-item <%= (user.role == \'admin\') ? \'checked\' : \'\' %>">\n                        <span>管理员</span>\n                        <span class="select-role-icon team-sprite"></span>\n                    </li>\n                    <li action-type="member" class="team-role-item <%= (user.role == \'member\') ? \'checked\' : \'\' %>">\n                        <span>成员</span>\n                        <span class="select-role-icon team-sprite"></span>\n                    </li>\n                    <li class="team-role-separator"></li>\n                    <li action-type="delete" class="team-role-item">\n                        <span>移除成员</span>\n                    </li>\n                </ul>\n            </div>\n        </div>\n    </li>\n<% }) %>\n' }, function(e, t) { e.exports = '<% if (users.length) { %>\n  <% _.each(users, function (user) { %>\n    <li class="user-li search-li <% if (user.selected) {print(\'active\')} %> " data-user-id="<%= user.id %>" data-user-name="${user.name}" data-email="${user.email}" data-index="${user.index}">\n      <span class="icon">\n        <img src="<%= user.avatar%>">\n        <span class="online-circle"></span>\n      </span>\n      <span class="account-span">\n        <span class="account-name"><%= user.name %></span>\n        <span class="account-email"><%= user.email %></span>\n      </span>\n      <span class="hicon icon-add"></span>\n      <span class="icon-loading"><img src="/static/dist/assets/images/loading-b67e5a67dc.gif" /></span>\n      <span class="hicon icon-remind"></span>\n    </li>\n  <% }) %>\n<% } else { %>\n  <li class="user-not-found">无搜索结果</li>\n<% } %>' }, function(e, t) { e.exports = '<% _.each(contactsList, function(userObject) { %>\n    <% if (userObject.userList.length && userObject.title || userObject.titleClass === "invite-title") {%>\n        <li class="share-li-title teamworker-li-title <%= userObject.titleClass %>"><%= userObject.title %></li>\n    <% } %>\n    <% _.each(userObject.userList, function (user) { %>\n        <li class="share-user-li teamworker-user-li <%= user.online?\'online\':\'\' %> <%= user.status || \'\' %>" data-share-id="<%= user.share_id %>" data-user-id="<%= user.id %>" data-user-email="<%= user.email %>">\n            <span class="share-user-avatar">\n                <img src="<%= user.avatar%>">\n                <span class="online-circle"></span>\n            </span>\n            <span class="share-user-name ellipsis teamworker-user-name"><%= user.name %></span>\n            <span class="share-user-email ellipsis teamworker-user-email"><%= user.email || \'石墨用户\'%></span>\n            <span class="operation-icon doc-share-icon <%= user.shareClass%>"></span>\n        </li>\n    <% }) %>\n<% }) %>\n\n\n\n' }, function(e, t) { e.exports = '<div class="share-menu teamworker-inner">\n    <div class="share-title teamworker-title">\n        <span class="teamworker-number">添加成员</span>\n        <span class="hicon icon-close teamworker-close <%= (typeof isTeamCreator != \'undefined\' && !isTeamCreator)? \'hide\' : \'\' %>"></span>\n    </div>\n    <div class="teamworker-content share-menu-content">\n        <div class="teamworker-content-left">\n            <div class="teamworker-input-box">\n                <input class="form-control teamworker-input" type="text" autocomplete="off" placeholder="输入邮箱、搜索姓名进行添加" />\n                <a class="teamworker-input-clear" href="javascript:void(0);"><span class="hicon icon-delete"></span></a>\n                <ul class="search-list"></ul>\n            </div>\n            \n            <div class="teamworker-user-list">\n                <div class="teamworker-nobody-info hide">\n                    <span class="teamworker-nobody-text">还没有联系人</span>\n                    <span class="teamworker-nobody-text">你可以在上方<strong>输入对方邮箱</strong>直接添加</span>\n                    <% if(typeof teamId == \'undefined\' || !teamId) { %>\n                    <span class="teamworker-nobody-text">或点击下方「<strong>添加微信好友</strong>」按钮</span>\n                    <% } %>\n                </div>\n                <ul></ul>\n            </div>\n\n            <div class="search-user-list">\n                <ul></ul>\n            </div>\n\n            <div class="user-not-found"></div>\n            \n        </div>\n        <div class="teamworker-content-right">\n            <ul>\n                <li class="share-li-title teamworker-li-title invite-title">待添加成员</li>\n            </ul>\n        </div>\n    </div>\n    <div class="teamworker-list-shadow"></div>\n    <div class="invite-link-popup hide">\n        <p>微信扫一扫</p>\n        <img src="" />\n        <p>把文档发送给好友<br />邀请好友加入</p>\n        <div class="arrow-down" style="display: block;">\n          <span class="top"></span>\n          <span class="down"></span>\n        </div>\n    </div>\n    <div class="teamworker-footer">\n        <% if(typeof teamId == \'undefined\' || !teamId) { %>\n          <a href="javascript:void(0);" class="btn teamworker-btn invite-link">添加微信好友</a>\n        <% } %>\n        <a href="javascript:void(0);" class="btn btn-ok teamworker-btn invite-users disable">确定</a>\n        <!-- 团队创建最后的添加成员比较特殊，可以跳过，所以按钮上处理不太一样 -->\n        <a href="javascript:void(0);" class="btn teamworker-btn cancel-invite"><%= (typeof isTeamCreator != \'undefined\' && isTeamCreator)? "跳过" : "取消"%></a>\n    </div>\n</div>\n' }, function(e, t) { e.exports = '<div class="trangle">\n    <span class="top doc-share-trangle-item"></span>\n    <span class="down doc-share-trangle-item"></span>\n</div>\n\n<div class="doc-share-dropdown" state="1">\n    <div class="doc-share-header">\n        <span class="doc-share-header-icon doc-share-icon"></span>\n        <span class="doc-share-header-text">私有文档，只有成员可以访问</span>\n    </div>\n    <div class="doc-share-link">\n        <div class="doc-share-item-title">分享链接<span class="doc-share-open">点击开启</span></div>\n        <div class="doc-link-input-box">\n            <input class="doc-link-input" readonly="true"/>\n            <span class="doc-share-copy">复制链接</span>\n            <div class="doc-link-qr btn">\n                <span class="doc-qr-icon doc-share-social-icon"></span>\n            </div>\n        </div>\n        <div class="doc-link-info">链接权限：<span class="doc-link-info-text">只读</span><span class="doc-link-change">更改</span></div>\n        <div class="doc-permission-list">\n            <div class="permission-item" data-mode="readonly">\n                <span class="permission-check-item doc-share-icon"></span>\n                <span class="permission-item-1">只读</span>\n                <span class="permission-item-2">获得链接的人可以查看</span>\n            </div>\n            <div class="permission-item" data-mode="editable">\n                <span class="permission-check-item doc-share-icon"></span>\n                <span class="permission-item-1">可写</span>\n                <span class="permission-item-2">获得链接的人可以查看和编辑</span>\n            </div>\n        </div>\n\n        <div class="doc-qr-box">\n            <img class="doc-qr-img" alt="微信二维码" src="" />\n            <div class="doc-qr-info">微信扫一扫</div>\n            <div class="doc-qr-info">分享此文档给好友</div>\n        </div>\n    </div>\n    <div class="doc-share-users">\n        <div class="doc-share-number">成员</div>\n        <div class="doc-share-userlist"></div>\n        <div class="doc-share-contact">添加成员</div>\n        <div class="doc-contact-icon doc-share-icon"></div>\n    </div>\n</div>\n\n' }, function(e, t, n) {
    var r, i;
    (function(a, o, s) {
        var c = function(e, t) {
                function n() { this.constructor = e }
                for (var r in t) u.call(t, r) && (e[r] = t[r]);
                return n.prototype = t.prototype, e.prototype = new n, e.__super__ = t.prototype, e },
            u = {}.hasOwnProperty;
        r = [n(189), n(524), n(525)], i = function(e, t, n) {
            var r;
            return r = function(r) {
                function i() {
                    return i.__super__.constructor.apply(this, arguments) }
                return c(i, r), i.prototype.searchUrl = "/api/file/search/", i.prototype.timeout = void 0, i.prototype.hovering = !1, i.prototype.keyword = "", i.prototype.liHeight = 50, i.prototype.pageSize = 10, i.prototype.pageCount = 1, i.prototype.page = 0, i.prototype.maxHeight = 391, i.prototype.init = function() {
                    var e, n;
                    e = this, this.$view.html(a.template(t)), this.$button = this.$view.find(">.header-item-search-btn"), this.$input = this.$view.find(">.search-input-wrap"), this.$keyword = this.$input.find(".header-search-input"), this.$delBtn = this.$input.find(".search-clear-keywords"), this.$result = this.$view.find(">.search-result-wrap"), this.$resultUl = this.$result.find(">.search-result-list"), this.$noResult = this.$result.find(">.search-no-result"), this.$searching = this.$result.find(">.search-loading"), this.resultPadding = 10, n = function() {
                        var t;
                        return t = a.min([o(window).height() - 300, e.maxHeight]), t = t + 46 - t % 46, t % 46 === 0 && (t += 23), e.$resultUl.css("maxHeight", t) }, o(window).resize(n), n(), this.$view.hover(function() {
                        return e.hovering = !0 }, function() {
                        return e.hovering = !1 }), this.$resultUl.scroll(function(t) {
                        return e.$resultUl.prop("scrollHeight") - e.$resultUl.scrollTop() - e.$resultUl.height() <= 0 && e.search(e.keyword, e.page + 1), t.stopPropagation(), t.preventDefault() }) }, i.prototype.eventMap = { "click .header-item-search-btn": "active", "blur .header-search-input": "disactive", "keyup .header-search-input": "keyup", "keydown .header-search-input": "keydown", "mouseover .search-result-item": "listItemHover", "click .search-result-item": "liClick", "click .search-result-list": "scrollUl", hover: "viewHover", "click .search-clear-keywords": "clearInput", "click .search-input-icon": "directDisactive" }, i.prototype.select = function(e) {
                    var t, n, r, i, a, o;
                    n = this.$result.find("li"), "undefined" == typeof e && n.removeClass("active").first().addClass("active"), t = this.$result.find("li.active:first"), r = n.index(t), "up" === e && r > 0 && (t = t.removeClass("active").prev().addClass("active")), "down" === e && r < n.length - 1 && (t = t.removeClass("active").next().addClass("active")), a = this.$resultUl.scrollTop(), i = n.index(t) * this.liHeight, o = this.$resultUl.height(), i - a - o >= 0 && this.$resultUl.scrollTop(i - o + this.liHeight), i - a <= 0 && this.$resultUl.scrollTop(i) }, i.prototype.search = function(t, r) {
                    var i;
                    if (i = this, this.currentKeyword = t, this.page = r || 0, !(this.page > this.pageCount - 1)) return i.$result.show(), 0 === this.page && i.$resultUl.hide(), i.$searching.show(), i.$noResult.hide(), this.timeout && window.clearTimeout(this.timeout), this.timeout = window.setTimeout(function() {
                        return e.post(i.searchUrl, { keyword: t, type: "file_search", page: r }).then(function(r) {
                            var o;
                            if (i.currentKeyword === t) return i.$searching.hide(), !(r.code > 0) && r.data && r.data.results && r.data.results.length || 0 !== i.page ? (o = "", i.pageCount = r.data.pageCount, r.data.results.forEach(function(t, r) {
                                return t.last_update = e.DateTime.format(t.updated_at), o += a.template(n)(t) }), i.$noResult.hide(), i.$resultUl[0 === i.page ? "html" : "append"](o).show(), 0 === i.page ? i.select() : i.select("down")) : void i.$noResult.show() }) }, 150) }, i.prototype.jump = function() {
                    var e, t, n, r, i;
                    if (n = this, t = this.$resultUl.find("li.active"), 0 !== t.length) return e = t.attr("data-guid"), r = t.attr("data-type"), i = "/" + r.trim() + "/", s(i + e), this.disactive(!0) }, i.prototype.disactive = function(e) {
                    var t;
                    if (t = this, !this.hovering || e) return t.$keyword.val(""), t.$result.hide(), t.$input.removeClass("active"), setTimeout(function() {
                        return t.$input.addClass("transparent"), t.$button.show(), t.$delBtn.hide() }, 150) }, i.prototype.domEvents = { active: function(e) {
                        var t;
                        return t = this, this.$button.hide(), this.$input.show(), t.$input.removeClass("transparent"), t.$input.addClass("active"), setTimeout(function() {
                            return t.$keyword.focus() }, 150) }, disactive: function(e) {
                        return this.disactive() }, directDisactive: function(e) {
                        return this.disactive(!0) }, keyup: function(t) {
                        var n, r, i;
                        if (r = this, (n = t.keyCode) !== e.keyCodes.UP && n !== e.keyCodes.DOWN && n !== e.keyCodes.ENTER) {
                            if (i = this.$keyword.val().trim(), !i) return this.$delBtn.hide(), void this.$result.hide();
                            this.$delBtn.show(), this.search(this.keyword = i) } }, keydown: function(t) {
                        var n, r;
                        if (r = this, (n = t.keyCode) !== e.keyCodes.UP && n !== e.keyCodes.DOWN || (r.select(t.keyCode === e.keyCodes.UP ? "up" : "down"), t.preventDefault()), t.keyCode === e.keyCodes.ENTER) return r.jump(), t.preventDefault() }, listItemHover: function(e, t) {
                        return this.$result.find("li").removeClass("active"), o(t).addClass("active") }, liClick: function() {
                        return this.jump() }, clearInput: function() {
                        return this.$delBtn.hide(), this.$result.hide(), this.$keyword.val("").focus() } }, i }(e.DomModule) }.apply(t, r), !(void 0 !== i && (e.exports = i)) }).call(t, n(4), n(1), n(240)) }, function(e, t) { e.exports = '<a href="javascript:void(0);" class="header-item-btn header-item-search-btn">\n    <span class="team-sprite header-item-icon team-icon-search"></span>\n    <span class="label">搜索</span>\n</a>\n<div class="search-input-wrap transparent">\n    <span class="team-sprite team-icon-search search-input-icon"></span>\n    <input type="text" class="form-control header-search-input" />\n    <a class="search-clear-keywords" href="javascript:void(0);">\n        <span class="team-sprite team-icon-delete search-clear-icon"></span>\n    </a>\n</div>\n<div class="search-result-wrap">\n    <div class="search-no-result"><span>无搜索结果</span></div>\n    <ul class="scrollable search-result-list">\n    </ul>\n    <div class="search-loading">\n        <img class="search-loading-img" src="/static/dist/assets/images/loading-b67e5a67dc.gif" />\n    </div>\n</div>\n' }, function(e, t) { e.exports = '<li class="search-result-item" data-guid="<%=  guid %>" data-type=" <%= type === 1 ? \'folder\' : type === -1 ? \'spreadsheet\' : \'doc\' %>">\n    <% if(type === 1) { %>\n      <span class="search-list-icon team-sprite folder"></span>\n    <% } else if(type === 0) {%>\n      <span class="search-list-icon team-sprite doc"></span>\n    <% } else { %>\n      <span class="search-list-icon team-sprite spreadsheet"></span>\n    <% } %>\n    <div class="search-result-info">\n        <span class="search-result-title"><%= name %></span>\n        <span class="search-result-time"><%= last_update %>更新</span>\n    </div>\n</li>\n' }, function(e, t) {
    e.exports = '<div id="header" class="header <% if (pageType == \'doc\'){ %>doc-header<%} else if (pageType == \'spreadsheet\') { %>spreadsheet-header<% } %>">\n    <% if (user.id < 0) { %>\n    <div class="h-container anonymous-header">\n    <% } else { %>\n    <div class="h-container">\n    <% } %>\n        <div class="header-left-box list-header">\n            <div id="react-header"></div>\n        </div>\n        <div class="header-right-box">\n            <% if([\'home\', \'folder\'].indexOf(pageType) >= 0) { %>\n                <div class="header-item-wrap header-try-wrap">\n                    <a class="header-try-link" target="_blank" href="/payment">升级石墨帐号</a>\n                    <span class="team-sprite header-item-icon team-try-close"></span>\n                </div>\n                <div class="header-search-wrap header-item-wrap"></div>\n                <div class="header-item-wrap header-item-add-wrap">\n                    <a href="javascript:;" class="dropdown-btn header-item-btn">\n                        <span class="team-sprite header-item-icon team-icon-add"></span>\n                        <span>新建</span>\n                    </a>\n                    <div class="header-dropdown-wrap dropdown add-dropdown-wrap">\n                        <div class="trangle">\n                            <span class="top"></span>\n                            <span class="down"></span>\n                        </div>\n                        <ul class="header-dropdown-list">\n                            <li action-type="doc" class="header-dropdown-item header-add-item">\n                                <span class="dropdown-item-icon add-item-doc team-sprite"></span>\n                                <span class="dropdown-item-text">文档</span>\n                            </li>\n                            <li action-type="spreadsheet" class="header-dropdown-item header-add-item">\n                                <span class="dropdown-item-icon add-item-sheet team-sprite"></span>\n                                <span class="dropdown-item-text">表格</span>\n                            </li>\n\n                            <li action-type="folder" class="header-dropdown-item header-add-item\n                            <% if([\'recent\', \'favorites\'].indexOf(listType) >= 0){ %>\n                              disabled\n                            <% } %>\n                            ">\n                                <span class="dropdown-item-icon add-item-folder team-sprite"></span>\n                                <span class="dropdown-item-text">文件夹</span>\n                            </li>\n\n                            <% if([\'home\', \'folder\'].indexOf(pageType) >= 0){ %>\n                                <hr>\n                                <li class="header-dropdown-item import-file">\n                                    <span class="dropdown-item-icon import-icon"></span>\n                                    <span class="dropdown-item-text">导入</span>\n                                </li>\n                            <% } %>\n\n                        </ul>\n                    </div>\n                </div>\n            <%}%>\n            <% if (user.id > 0) { %>\n                <% if (!options.hideMessage) {%>\n                <div id="message-box-for-react" style="position: relative; display: inline-block"></div>\n                <div class="config-box header-dropdown-box">\n                    <span class="config-avatar dropdown-btn account-setting-btn">\n                        <img src="<%= user.avatar %>" />\n                    </span>\n                <% } else { %>\n                <div class="config-box header-dropdown-box header-avatar-wrap">\n                    <span class="config-avatar dropdown-btn account-setting-btn header-avatar">\n                        <div class="avatar-wrap">\n                            <img src="<%= user.avatar %>" />\n                        </div>\n                        <span class="header-avatar-color" style="background-color:<%= user.color %>;"></span>\n                    </span>\n                <% } %>\n\n                    <div class="dropdown config-dropdown account-setting">\n                        <div class="trangle">\n                            <span class="top"></span>\n                            <span class="down"></span>\n                        </div>\n                        <div class="config-content">\n                            <div class="user-avatar">\n                                <img class="config-avatar-inner personal-img" src="<%= user.avatar%>" />\n                            </div>\n                            <div class="config-user-item config-user-name">\n                                <%= user.name%>\n                            </div>\n                            <div class="config-user-item config-user-email user-email">\n                            <%  if (user.email) {%>\n                                <%= user.email%>\n                            <% } else { %>\n                                <a href="/profile#setting-email" class="no-email">设置登录邮箱</a>\n                            <% } %>\n                            </div>\n                            <div class="config-user-item config-user-pro">\n                            <% if (user.accountType && user.accountType === \'enterprise_dingding\') { %>\n                                企业免费版\n                            <% } else if (user.accountType === \'enterprise_standard\') { %>\n                                企业版\n                            <% } else if (user.accountType === \'personal_premium\') { %>\n                                个人高级版\n                            <% } else if (user.accountType === \'personal_free\') { %>\n                                <span class="config-pro-label">个人免费版</span><a class="config-payment" href="/payment">升级</a>\n                            <% } %>\n                            </div>\n                        </div>\n                        <div class="config-box-item personal-edit">帐号设置</div>\n                        <% if(window.cow.currentUser.team_id) { %>\n                        <div class="config-box-item team-manage">企业管理</div>\n                        <% } %>\n                        <div class="config-box-item open-trash">回收站</div>\n                        <div class="config-box-item download-app">下载iOS <span class="team-sprite"></span></div>\n                        <a class="config-box-item help" href="https://shimo.im/doc/JhguDOf2h4esBPw4" target="_blank">使用帮助</a>\n                        <a class="config-box-item log-out" href="/logout">退出登录</a>\n                    </div>\n                </div>\n            <% } %>\n            <% if (user.id < 0) { %>\n            <div class="anonymous-info header-avatar-wrap">\n                <div class="header-avatar anonymous-avatar">\n                    <img src="<%= user.avatar %>" alt="<%= user.name %>">\n                    <span class="header-avatar-color" style="background-color:<%= user.color %>;"></span>\n                    <!--<a class="anonymous-item" href="/login">保存到我的石墨</a>-->\n                </div>\n            </div>\n            <% } %>\n        </div>\n    </div>\n</div>\n';
}, function(e, t) { e.exports = '<div class="modal-wrap download-app-wrap">\n    <div class="modal-container download-app-container">\n        <a href="javascript:void(0);" class="modal-close-btn download-app-close" onclick="this.parentNode.parentNode.remove()">\n            <span class="team-sprite modal-close-icon"></span>\n        </a>\n        <div class="download-app-qrcode"></div>\n        <div class="download-app-text">扫描二维码或</div>\n        <div class="download-app-text">在AppStore里搜索『石墨文档』</div>\n    </div>\n</div>\n' }, function(e, t, n) {
    var r, i;
    (function(a, o, s) { r = [n(189)], i = function(e) {
            var t;
            return t = {}, t.supportedTypes = { docx: "application/vnd.openxmlformats-officedocument.wordprocessingml.document", doc: "application/msword", xlsx: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet", xls: "application/vnd.ms-excel" }, t.import = function(r) {
                var i, c, u, l;
                return l = "", i = function() {
                    var e;
                    return e = a("input#import-file"), e.replaceWith(e = e.val("").clone()) }, c = new FormData, c.append("files", r), c.append("parent", cow.currentFile.id || 0), e.alert({ title: "正在导入…" }), u = r.name.split(".").pop(), o.includes(["xls", "xlsx"], u) ? a.ajax({ url: "/import/spreadsheet", type: "POST", data: c, cache: !1, contentType: !1, processData: !1, success: function(t) {
                        return e.hide(), s("/spreadsheet/" + t.guid), i() } }) : n.e(7, function() {
                    (function(a, o) {
                        var s, u, d, p, f, h, m;
                        return d = n(374), u = n(321), s = n(322), p = function(e, t) {
                            var n, r, i, a, o, s;
                            for (n = u.opIterator(e), s = 0, i = 0, r = l.length; n.hasNext();) o = n.next(), a = s + o.chars, a <= i || s >= r || t(Math.max(i, s), Math.min(r, a), o.attribs), s = a }, m = function(e) {
                            var t, n;
                            return n = document.createElement("iframe"), n.style.display = "none", document.body.appendChild(n), n.contentDocument.open(), n.contentDocument.write(e), n.contentDocument.close(), t = n.contentDocument.body, document.body.removeChild(n), t }, h = function(e) {
                            var n, r, i, a, o;
                            return n = new s, n.putAttrib(["addition", !0]), n.putAttrib(["deletion", !0]), i = d.makeContentCollector(!0, null, n), a = m(e), i.collectContent(a), t.apool = n, e = i.finish(), l = e.lines.join("\n"), o = e.lineAttribs.join("|1+1") + "|1+1", r = u.builder(1), p(o, function(e, t, n) {
                                return r.insert(l.substring(e, t), n) }), r.toString() }, f = function(e) {
                            return e ? e.replace(/\.docx?$/, "") : "导入 Word 文档" }, a.ajax({ url: "/import/doc", type: "POST", data: c, cache: !1, contentType: !1, processData: !1, success: function(n) {
                                return 500 === n.code ? (e.alert({ title: "导入出错，请重试。", type: "error" }), i()) : a.ajax({ url: "/import/doc", data: { changeset: h(n), apool: JSON.stringify(t.apool), title: f(r.name), parent: cow.currentFile.id || 0 }, type: "POST", success: function(t) {
                                        return e.hide(), o("/doc/" + t.guid), i() } }) } }) }).call(this, n(1), n(240)) }) }, t }.apply(t, r), !(void 0 !== i && (e.exports = i)) }).call(t, n(1), n(4), n(240)) }, function(e, t, n) {
    (function(r, i) { "use strict";

        function a(e) {
            return e && e.__esModule ? e : { default: e } }

        function o(e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function") }

        function s(e, t) {
            if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
            e.prototype = Object.create(t && t.prototype, { constructor: { value: e, enumerable: !1, writable: !0, configurable: !0 } }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t) }
        Object.defineProperty(t, "__esModule", { value: !0 });
        var c = function() {
                function e(e, t) {
                    for (var n = 0; n < t.length; n++) {
                        var r = t[n];
                        r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r) } }
                return function(t, n, r) {
                    return n && e(t.prototype, n), r && e(t, r), t } }(),
            u = function(e, t, n) {
                for (var r = !0; r;) {
                    var i = e,
                        a = t,
                        o = n;
                    r = !1, null === i && (i = Function.prototype);
                    var s = Object.getOwnPropertyDescriptor(i, a);
                    if (void 0 !== s) {
                        if ("value" in s) return s.value;
                        var c = s.get;
                        if (void 0 === c) return;
                        return c.call(o) }
                    var u = Object.getPrototypeOf(i);
                    if (null === u) return;
                    e = u, t = a, n = o, r = !0, s = u = void 0 } },
            l = n(7),
            d = a(l),
            p = n(189),
            f = a(p),
            h = n(186),
            m = a(h),
            v = n(299),
            g = a(v),
            w = function(e) {
                function t(e) {
                    var n = this;
                    o(this, t), u(Object.getPrototypeOf(t.prototype), "constructor", this).call(this, e), this.state = { files: [], selected: [], show: !0 }, m.default.on("trash:show", function() { n.setState({ show: !0 }), n._load() }), r(window).keydown(this._shortcut.bind(this)) }
                return s(t, e), c(t, [{ key: "_load", value: function() {
                        var e = this;
                        f.default.get("/api/trash", function(t) { e.setState({ files: t.data }) }, function() { f.default.alert({ title: "获取回收站数据时出现问题", type: "error" }) }) } }, { key: "_isMetaKeyPressed", value: function(e) {
                        return f.default.isMac() && e.metaKey || !f.default.isMac() && e.ctrlKey } }, { key: "_shortcut", value: function(e) { this.state.show && (this._isMetaKeyPressed(e) && 65 === e.keyCode ? (e.preventDefault(), this._selectAll()) : 27 === e.keyCode && this._unselectAll()) } }, { key: "_unselectAll", value: function() { i.each(this.state.selected, function(e) { e.selected = !1 }), this.state.selected = [], this.setState(this.state) } }, { key: "_selectAll", value: function() {
                        var e = i.map(this.state.files, function(e) {
                            return e.selected = !0, e });
                        this.setState({ selected: e }) } }, { key: "_hide", value: function(e) { e.target === e.currentTarget && (this._unselectAll(), this.setState({ show: !1 })) } }, { key: "_delete", value: function() {
                        var e = this;
                        if (this.state.selected.length) {
                            var t = i.map(this.state.selected, "id");
                            g.default.show({ headText: "彻底删除文件", bodyText: "即将彻底删除 " + t.length + " 个文件。删除后将无法恢复，请谨慎操作！", okText: "彻底删除", okCallback: function() { f.default.post("/api/trash/remove", { files: t }, function() { e._clearSelectedFile(t), f.default.alert({ title: "成功彻底删除 " + t.length + " 个文件" }) }, function() { f.default.alert({ title: "删除失败", type: "error" }) }) } }) } } }, { key: "_clearSelectedFile", value: function(e) { i.remove(this.state.files, function(t) {
                            return e.indexOf(t.id) !== -1 }), this.state.selected = [], this.setState(this.state) } }, { key: "_tip", value: function() {
                        var e = void 0,
                            t = this.state.selected.length;
                        return t ? (e = "已选择 " + t + " 个文件", e = d.default.createElement("span", { className: "t-tip active" }, e)) : (e = "Shift或Ctrl复选，Ctrl+A全选。", f.default.isMac() && (e = e.replace(/Ctrl/g, "Cmd")), e = d.default.createElement("span", { className: "t-tip" }, e)), e } }, { key: "_recover", value: function() {
                        var e = this;
                        if (this.state.selected.length) {
                            var t = i.map(this.state.selected, "id");
                            f.default.post("/api/trash/restore", { files: t }, function() { e._clearSelectedFile(t), f.default.alert({ title: "已成功恢复至我的桌面" }) }, function() { f.default.alert({ title: "恢复失败，请重试，或者联系我们的技术人员", type: "error" }) }) } } }, { key: "_renderFiles", value: function() {
                        var e = this,
                            t = { "-1": "spreadsheet", 0: "doc", 1: "folder" };
                        return this.state.files.length > 0 ? this.state.files.map(function(n) {
                            var r = f.default.DateTime.format(n.updated_at) + "更新",
                                i = n.selected ? "t-item selected" : "t-item",
                                a = n.name.length < 30 ? n.name : n.name.substring(0, 30) + "...",
                                o = "icon file-folder-sprite " + t[n.type];
                            return d.default.createElement("div", { key: n.id, className: i, onClick: e._select.bind(e, n) }, d.default.createElement("div", { className: o }), d.default.createElement("div", null, d.default.createElement("div", { className: "t-filename" }, a), d.default.createElement("div", { className: "t-update-time" }, r))) }) : d.default.createElement("div", { className: "list-empty" }, d.default.createElement("div", { className: "list-empty-icon" }), d.default.createElement("div", { className: "list-empty-text" }, "你一定有洁癖")) } }, { key: "_select", value: function(e, t) {
                        var n = this,
                            r = this.state.selected,
                            a = void 0,
                            o = void 0;
                        if (t.shiftKey && (a = 0, r.length && (a = i.indexOf(this.state.files, r[r.length - 1])), o = i.indexOf(this.state.files, e), a > o)) {
                            var s = [o, a];
                            a = s[0], o = s[1] }!t.shiftKey && this._isMetaKeyPressed(t) || this._unselectAll(), t.shiftKey ? i.each(this.state.files, function(e, t) { t >= a && t <= o && n._selectFile(e) }) : this._selectFile(e), this.setState({ selected: this.state.selected }) } }, { key: "_selectFile", value: function(e) { e.selected = !e.selected, e.selected ? this.state.selected.push(e) : i.remove(this.state.selected, function(t) {
                            return t.id === e.id }) } }, { key: "render", value: function() {
                        if (!this.state.show) return null;
                        var e = "btn btn-ok t-recover";
                        e += this.state.selected.length ? "" : " disable";
                        var t = "btn-clear ";
                        return t += this.state.selected.length ? "disable" : "", d.default.createElement("div", { id: "trash", onClick: this._hide.bind(this) }, d.default.createElement("div", { className: "t-inner" }, d.default.createElement("div", { className: "t-header" }, d.default.createElement("span", { className: "t-title" }, "回收站"), d.default.createElement("div", { className: "s-tip" }, d.default.createElement("span", { className: "team-sprite help-icon" }), d.default.createElement("div", { className: "s-tooltip" }, "空文档/表格/文件夹会被彻底删除，不会进入回收站")), d.default.createElement("span", { className: "hicon icon-close t-close", onClick: this._hide.bind(this) })), d.default.createElement("div", { className: "t-body" }, this._renderFiles()), d.default.createElement("div", { className: "t-footer" }, this._tip(), d.default.createElement("span", { className: t, onClick: this._delete.bind(this) }, "彻底删除"), d.default.createElement("button", { className: e, onClick: this._recover.bind(this) }, "恢复")))) } }]), t }(d.default.Component);
        t.default = w, e.exports = t.default }).call(t, n(1), n(4)) }, function(e, t, n) { "use strict";

    function r(e) {
        return e && e.__esModule ? e : { default: e } }

    function i(e) {
        var t = (0, u.qsa)(e)[0];
        t && (0, c.render)(s.default.createElement(h, { onlyUnread: !0 }), t) }

    function a(e) {
        var t = (0, u.qsa)(e)[0];
        t && (0, c.unmountComponentAtNode)(t) }
    Object.defineProperty(t, "__esModule", { value: !0 }), t.mount = i, t.unmount = a;
    var o = n(7),
        s = r(o),
        c = n(163),
        u = n(202),
        l = n(531),
        d = r(l),
        p = n(654),
        f = r(p),
        h = (0, d.default)(f.default);
    t.default = h }, function(e, t, n) {
    (function(r, i) { "use strict";

        function a(e) {
            return e && e.__esModule ? e : { default: e } }

        function o(e) {
            if (Array.isArray(e)) {
                for (var t = 0, n = Array(e.length); t < e.length; t++) n[t] = e[t];
                return n }
            return Array.from(e) }

        function s(e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function") }

        function c(e, t) {
            if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
            e.prototype = Object.create(t && t.prototype, { constructor: { value: e, enumerable: !1, writable: !0, configurable: !0 } }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t) }
        Object.defineProperty(t, "__esModule", { value: !0 });
        var u = Object.assign || function(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = arguments[t];
                    for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]) }
                return e },
            l = function() {
                function e(e, t) {
                    for (var n = 0; n < t.length; n++) {
                        var r = t[n];
                        r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r) } }
                return function(t, n, r) {
                    return n && e(t.prototype, n), r && e(t, r), t } }(),
            d = function(e, t, n) {
                for (var r = !0; r;) {
                    var i = e,
                        a = t,
                        o = n;
                    r = !1, null === i && (i = Function.prototype);
                    var s = Object.getOwnPropertyDescriptor(i, a);
                    if (void 0 !== s) {
                        if ("value" in s) return s.value;
                        var c = s.get;
                        if (void 0 === c) return;
                        return c.call(o) }
                    var u = Object.getPrototypeOf(i);
                    if (null === u) return;
                    e = u, t = a, n = o, r = !0, s = u = void 0 } },
            p = n(7),
            f = a(p),
            h = n(532),
            m = a(h),
            v = n(637),
            g = a(v),
            w = n(186),
            y = a(w),
            b = n(189),
            k = a(b),
            x = n(206),
            A = a(x),
            C = n(295),
            T = a(C),
            _ = n(639),
            E = n(651),
            S = n(652),
            O = n(653),
            I = 30,
            j = void 0;
        t.default = function(e) {
            return function(t) {
                function n(e) { s(this, n), d(Object.getPrototypeOf(n.prototype), "constructor", this).call(this, e);
                    var t = window.cow.currentUser.team;
                    this.currentPage = 0, this.state = { joinTeamId: t && t.id, messages: [] } }
                return c(n, t), l(n, null, [{ key: "propTypes", get: function() {
                        return { onlyUnread: p.PropTypes.bool } } }]), l(n, [{ key: "componentWillMount", value: function() { this._initData(), this._watchPush(), this._watchBroadcast() } }, { key: "componentDidMount", value: function() { k.default.DateTime.autoRefresh("li.m-li") } }, { key: "componentWillUnmount", value: function() { y.default.detach("contact:loaded", j), (0, _.unsubscribePush)("userOnline"), (0, _.unsubscribePush)("Notification_v2"), (0, _.unsubscribePush)("reconnect") } }, { key: "_initData", value: function() {
                        var e = this;
                        this.currentPage = 0, this.props.onlyUnread ? (0, E.fetchAllUnreadMessages)().then(function(t) {
                            return e.setState({ messages: t.slice(0, I).map(S.handleMessageData) }) }) : this._loadMore(), (0, E.fetchUserTeam)().then(function(t) {
                            return e.setState({ joinTeamId: t.id }) }) } }, { key: "_watchPush", value: function() {
                        var e = this;
                        (0, _.subscribePush)("userOnline", function(e) {
                            var t = e.userID,
                                n = e.online;
                            A.default.exists(t) && (A.default.get(t).online = n) }), (0, _.subscribePush)("Notification_v2", function(t) {
                            var n = t.data,
                                r = e.state.messages;
                            e.setState({ messages: (0, S.appendMessage)(r, (0, S.handleMessageData)(n)) }) }), (0, _.subscribePush)("reconnect", function() {
                            return e._initData() }) } }, { key: "_watchBroadcast", value: function() {
                        var e = this;
                        j = function() {
                            return e.setState({ messages: (0, S.refreshAuthor)(e.state.messages) }) }, y.default.attach("contact:loaded", j) } }, { key: "_loadMore", value: function() {
                        var e = this,
                            t = this.currentPage;
                        return (0, E.fetchMessages)(t, I).then(function(t) {
                            return e.currentPage += 1, t.length ? t.map(S.handleMessageData) : r.reject(new Error("已经是最后一页了。")) }).then(function(t) {
                            return e.setState({ messages: [].concat(o(e.state.messages), o(t)) }) }) } }, { key: "_readAndJump", value: function(e) {
                        var t = arguments.length <= 1 || void 0 === arguments[1] ? null : arguments[1];
                        if (window.cow.loading) return !1;
                        if (null === t && (t = this._getJumpUrl(this._getMsgById(e)), !t)) return !1;
                        var n = t.match(/[a-zA-Z0-9]{16}/)[0],
                            r = window.cow.childWindows[n];!r || r.closed || k.default.isIE() || k.default.isFireFox() ? this._setRead(e).then(function() { T.default.getDocByGuid(n, !0).then(function() {
                                return i(t, { url: t, isAjaxForce: !0 }) }, function(e) {
                                return k.default.alert({ title: e.message }) }) }) : (this._setRead(e), r.focus()) } }, { key: "_getJumpUrl", value: function(e) {
                        var t = e.notification,
                            n = t.file.type,
                            r = t.link,
                            i = void 0;
                        return i = n === O.FILE_TYPE_DOCUMENT ? "/doc" + r : n === O.FILE_TYPE_SHEET ? "/spreadsheet" + r : r } }, { key: "_setRead", value: function(e) {
                        var t = this;
                        return (0, E.readMessage)(e).then(function(n) {
                            if (n.success) {
                                var r = t.state.messages,
                                    i = (0, m.default)(r, function(t) {
                                        return e === t.id }),
                                    a = (0, S.setMessageRead)(r[i]);
                                t.setState({ messages: (0, S.replaceItem)(r, i, a) }) } }) } }, { key: "_setReadAll", value: function() {
                        var e = this,
                            t = this.state.messages;
                        t.length && (0, E.readAllMessage)().then(function() { e.setState({ messages: t.map(S.setMessageRead) }) }) } }, { key: "_acceptInvation", value: function(e, t) {
                        var n = this,
                            r = function() {
                                return n._setRead(t) };
                        return (0, E.acceptTeamInvitation)(e).then(r, function(e) {
                            return 400 === e.code && r() }) } }, { key: "_getMsgById", value: function(e) {
                        var t = this.state.messages;
                        return (0, g.default)(t, function(t) {
                            return e === t.id }) } }, { key: "render", value: function() {
                        var t = this,
                            n = u({}, this.state, { loadMoreMessages: function() {
                                    return t._loadMore(!1) }, clickMsg: function(e) {
                                    return t._readAndJump(e) }, clickCheck: function(e) {
                                    return t._setRead(e) }, clickReadAll: function() {
                                    return t._setReadAll() }, clickAccept: function() {
                                    return t._acceptInvation.apply(t, arguments) } });
                        return f.default.createElement(e, n) } }]), n }(p.Component) }, e.exports = t.default }).call(t, n(198), n(240)) }, function(e, t, n) {
    function r(e, t, n) {
        var r = e ? e.length : 0;
        if (!r) return -1;
        var c = null == n ? 0 : o(n);
        return c < 0 && (c = s(r + c, 0)), i(e, a(t, 3), c) }
    var i = n(533),
        a = n(534),
        o = n(634),
        s = Math.max;
    e.exports = r }, function(e, t) {
    function n(e, t, n, r) {
        for (var i = e.length, a = n + (r ? 1 : -1); r ? a-- : ++a < i;)
            if (t(e[a], a, e)) return a;
        return -1 }
    e.exports = n }, function(e, t, n) {
    function r(e) {
        return "function" == typeof e ? e : null == e ? o : "object" == typeof e ? s(e) ? a(e[0], e[1]) : i(e) : c(e) }
    var i = n(535),
        a = n(617),
        o = n(631),
        s = n(604),
        c = n(632);
    e.exports = r }, function(e, t, n) {
    function r(e) {
        var t = a(e);
        return 1 == t.length && t[0][2] ? o(t[0][0], t[0][1]) : function(n) {
            return n === e || i(n, e, t) } }
    var i = n(536),
        a = n(614),
        o = n(616);
    e.exports = r }, function(e, t, n) {
    function r(e, t, n, r) {
        var c = n.length,
            u = c,
            l = !r;
        if (null == e) return !u;
        for (e = Object(e); c--;) {
            var d = n[c];
            if (l && d[2] ? d[1] !== e[d[0]] : !(d[0] in e)) return !1 }
        for (; ++c < u;) { d = n[c];
            var p = d[0],
                f = e[p],
                h = d[1];
            if (l && d[2]) {
                if (void 0 === f && !(p in e)) return !1 } else {
                var m = new i;
                if (r) var v = r(f, h, p, e, t, m);
                if (!(void 0 === v ? a(h, f, r, o | s, m) : v)) return !1 } }
        return !0 }
    var i = n(537),
        a = n(578),
        o = 1,
        s = 2;
    e.exports = r }, function(e, t, n) {
    function r(e) { this.__data__ = new i(e) }
    var i = n(538),
        a = n(546),
        o = n(547),
        s = n(548),
        c = n(549),
        u = n(550);
    r.prototype.clear = a, r.prototype.delete = o, r.prototype.get = s, r.prototype.has = c, r.prototype.set = u, e.exports = r }, function(e, t, n) {
    function r(e) {
        var t = -1,
            n = e ? e.length : 0;
        for (this.clear(); ++t < n;) {
            var r = e[t];
            this.set(r[0], r[1]) } }
    var i = n(539),
        a = n(540),
        o = n(543),
        s = n(544),
        c = n(545);
    r.prototype.clear = i, r.prototype.delete = a, r.prototype.get = o, r.prototype.has = s, r.prototype.set = c, e.exports = r }, function(e, t) {
    function n() { this.__data__ = [] }
    e.exports = n }, function(e, t, n) {
    function r(e) {
        var t = this.__data__,
            n = i(t, e);
        if (n < 0) return !1;
        var r = t.length - 1;
        return n == r ? t.pop() : o.call(t, n, 1), !0 }
    var i = n(541),
        a = Array.prototype,
        o = a.splice;
    e.exports = r }, function(e, t, n) {
    function r(e, t) {
        for (var n = e.length; n--;)
            if (i(e[n][0], t)) return n;
        return -1 }
    var i = n(542);
    e.exports = r }, function(e, t) {
    function n(e, t) {
        return e === t || e !== e && t !== t }
    e.exports = n }, function(e, t, n) {
    function r(e) {
        var t = this.__data__,
            n = i(t, e);
        return n < 0 ? void 0 : t[n][1] }
    var i = n(541);
    e.exports = r }, function(e, t, n) {
    function r(e) {
        return i(this.__data__, e) > -1 }
    var i = n(541);
    e.exports = r }, function(e, t, n) {
    function r(e, t) {
        var n = this.__data__,
            r = i(n, e);
        return r < 0 ? n.push([e, t]) : n[r][1] = t, this }
    var i = n(541);
    e.exports = r }, function(e, t, n) {
    function r() { this.__data__ = new i }
    var i = n(538);
    e.exports = r }, function(e, t) {
    function n(e) {
        return this.__data__.delete(e) }
    e.exports = n }, function(e, t) {
    function n(e) {
        return this.__data__.get(e) }
    e.exports = n }, function(e, t) {
    function n(e) {
        return this.__data__.has(e) }
    e.exports = n }, function(e, t, n) {
    function r(e, t) {
        var n = this.__data__;
        return n instanceof i && n.__data__.length == o && (n = this.__data__ = new a(n.__data__)), n.set(e, t), this }
    var i = n(538),
        a = n(551),
        o = 200;
    e.exports = r }, function(e, t, n) {
    function r(e) {
        var t = -1,
            n = e ? e.length : 0;
        for (this.clear(); ++t < n;) {
            var r = e[t];
            this.set(r[0], r[1]) } }
    var i = n(552),
        a = n(572),
        o = n(575),
        s = n(576),
        c = n(577);
    r.prototype.clear = i, r.prototype.delete = a, r.prototype.get = o, r.prototype.has = s, r.prototype.set = c, e.exports = r }, function(e, t, n) {
    function r() { this.__data__ = { hash: new i, map: new(o || a), string: new i } }
    var i = n(553),
        a = n(538),
        o = n(571);
    e.exports = r }, function(e, t, n) {
    function r(e) {
        var t = -1,
            n = e ? e.length : 0;
        for (this.clear(); ++t < n;) {
            var r = e[t];
            this.set(r[0], r[1]) } }
    var i = n(554),
        a = n(567),
        o = n(568),
        s = n(569),
        c = n(570);
    r.prototype.clear = i, r.prototype.delete = a, r.prototype.get = o, r.prototype.has = s, r.prototype.set = c, e.exports = r }, function(e, t, n) {
    function r() { this.__data__ = i ? i(null) : {} }
    var i = n(555);
    e.exports = r }, function(e, t, n) {
    var r = n(556),
        i = r(Object, "create");
    e.exports = i }, function(e, t, n) {
    function r(e, t) {
        var n = a(e, t);
        return i(n) ? n : void 0 }
    var i = n(557),
        a = n(566);
    e.exports = r }, function(e, t, n) {
    function r(e) {
        if (!s(e) || o(e)) return !1;
        var t = i(e) || a(e) ? h : l;
        return t.test(c(e)) }
    var i = n(558),
        a = n(560),
        o = n(561),
        s = n(559),
        c = n(565),
        u = /[\\^$.*+?()[\]{}|]/g,
        l = /^\[object .+?Constructor\]$/,
        d = Object.prototype,
        p = Function.prototype.toString,
        f = d.hasOwnProperty,
        h = RegExp("^" + p.call(f).replace(u, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$");
    e.exports = r }, function(e, t, n) {
    function r(e) {
        var t = i(e) ? c.call(e) : "";
        return t == a || t == o }
    var i = n(559),
        a = "[object Function]",
        o = "[object GeneratorFunction]",
        s = Object.prototype,
        c = s.toString;
    e.exports = r }, function(e, t) {
    function n(e) {
        var t = typeof e;
        return !!e && ("object" == t || "function" == t) }
    e.exports = n }, function(e, t) {
    function n(e) {
        var t = !1;
        if (null != e && "function" != typeof e.toString) try { t = !!(e + "") } catch (e) {}
        return t }
    e.exports = n }, function(e, t, n) {
    function r(e) {
        return !!a && a in e }
    var i = n(562),
        a = function() {
            var e = /[^.]+$/.exec(i && i.keys && i.keys.IE_PROTO || "");
            return e ? "Symbol(src)_1." + e : "" }();
    e.exports = r }, function(e, t, n) {
    var r = n(563),
        i = r["__core-js_shared__"];
    e.exports = i }, function(e, t, n) {
    (function(t) {
        var r = n(564),
            i = r("object" == typeof t && t),
            a = r("object" == typeof self && self),
            o = r("object" == typeof this && this),
            s = i || a || o || Function("return this")();
        e.exports = s }).call(t, function() {
        return this }()) }, function(e, t) {
    function n(e) {
        return e && e.Object === Object ? e : null }
    e.exports = n }, function(e, t) {
    function n(e) {
        if (null != e) {
            try {
                return r.call(e) } catch (e) {}
            try {
                return e + "" } catch (e) {} }
        return "" }
    var r = Function.prototype.toString;
    e.exports = n }, function(e, t) {
    function n(e, t) {
        return null == e ? void 0 : e[t] }
    e.exports = n }, function(e, t) {
    function n(e) {
        return this.has(e) && delete this.__data__[e] }
    e.exports = n }, function(e, t, n) {
    function r(e) {
        var t = this.__data__;
        if (i) {
            var n = t[e];
            return n === a ? void 0 : n }
        return s.call(t, e) ? t[e] : void 0 }
    var i = n(555),
        a = "__lodash_hash_undefined__",
        o = Object.prototype,
        s = o.hasOwnProperty;
    e.exports = r }, function(e, t, n) {
    function r(e) {
        var t = this.__data__;
        return i ? void 0 !== t[e] : o.call(t, e) }
    var i = n(555),
        a = Object.prototype,
        o = a.hasOwnProperty;
    e.exports = r }, function(e, t, n) {
    function r(e, t) {
        var n = this.__data__;
        return n[e] = i && void 0 === t ? a : t, this }
    var i = n(555),
        a = "__lodash_hash_undefined__";
    e.exports = r }, function(e, t, n) {
    var r = n(556),
        i = n(563),
        a = r(i, "Map");
    e.exports = a }, function(e, t, n) {
    function r(e) {
        return i(this, e).delete(e) }
    var i = n(573);
    e.exports = r }, function(e, t, n) {
    function r(e, t) {
        var n = e.__data__;
        return i(t) ? n["string" == typeof t ? "string" : "hash"] : n.map }
    var i = n(574);
    e.exports = r }, function(e, t) {
    function n(e) {
        var t = typeof e;
        return "string" == t || "number" == t || "symbol" == t || "boolean" == t ? "__proto__" !== e : null === e }
    e.exports = n }, function(e, t, n) {
    function r(e) {
        return i(this, e).get(e) }
    var i = n(573);
    e.exports = r }, function(e, t, n) {
    function r(e) {
        return i(this, e).has(e) }
    var i = n(573);
    e.exports = r }, function(e, t, n) {
    function r(e, t) {
        return i(this, e).set(e, t), this }
    var i = n(573);
    e.exports = r }, function(e, t, n) {
    function r(e, t, n, s, c) {
        return e === t || (null == e || null == t || !a(e) && !o(t) ? e !== e && t !== t : i(e, t, r, n, s, c)) }
    var i = n(579),
        a = n(559),
        o = n(603);
    e.exports = r }, function(e, t, n) {
    function r(e, t, n, r, v, w) {
        var y = u(e),
            b = u(t),
            k = h,
            x = h;
        y || (k = c(e), k = k == f ? m : k), b || (x = c(t), x = x == f ? m : x);
        var A = k == m && !l(e),
            C = x == m && !l(t),
            T = k == x;
        if (T && !A) return w || (w = new i), y || d(e) ? a(e, t, n, r, v, w) : o(e, t, k, n, r, v, w);
        if (!(v & p)) {
            var _ = A && g.call(e, "__wrapped__"),
                E = C && g.call(t, "__wrapped__");
            if (_ || E) {
                var S = _ ? e.value() : e,
                    O = E ? t.value() : t;
                return w || (w = new i), n(S, O, r, v, w) } }
        return !!T && (w || (w = new i), s(e, t, n, r, v, w)) }
    var i = n(537),
        a = n(580),
        o = n(585),
        s = n(590),
        c = n(608),
        u = n(604),
        l = n(560),
        d = n(613),
        p = 2,
        f = "[object Arguments]",
        h = "[object Array]",
        m = "[object Object]",
        v = Object.prototype,
        g = v.hasOwnProperty;
    e.exports = r }, function(e, t, n) {
    function r(e, t, n, r, c, u) {
        var l = c & s,
            d = e.length,
            p = t.length;
        if (d != p && !(l && p > d)) return !1;
        var f = u.get(e);
        if (f) return f == t;
        var h = -1,
            m = !0,
            v = c & o ? new i : void 0;
        for (u.set(e, t); ++h < d;) {
            var g = e[h],
                w = t[h];
            if (r) var y = l ? r(w, g, h, t, e, u) : r(g, w, h, e, t, u);
            if (void 0 !== y) {
                if (y) continue;
                m = !1;
                break }
            if (v) {
                if (!a(t, function(e, t) {
                        if (!v.has(t) && (g === e || n(g, e, r, c, u))) return v.add(t) })) { m = !1;
                    break } } else if (g !== w && !n(g, w, r, c, u)) { m = !1;
                break } }
        return u.delete(e), m }
    var i = n(581),
        a = n(584),
        o = 1,
        s = 2;
    e.exports = r }, function(e, t, n) {
    function r(e) {
        var t = -1,
            n = e ? e.length : 0;
        for (this.__data__ = new i; ++t < n;) this.add(e[t]) }
    var i = n(551),
        a = n(582),
        o = n(583);
    r.prototype.add = r.prototype.push = a, r.prototype.has = o, e.exports = r }, function(e, t) {
    function n(e) {
        return this.__data__.set(e, r), this }
    var r = "__lodash_hash_undefined__";
    e.exports = n }, function(e, t) {
    function n(e) {
        return this.__data__.has(e) }
    e.exports = n }, function(e, t) {
    function n(e, t) {
        for (var n = -1, r = e ? e.length : 0; ++n < r;)
            if (t(e[n], n, e)) return !0;
        return !1 }
    e.exports = n }, function(e, t, n) {
    function r(e, t, n, r, i, x, C) {
        switch (n) {
            case k:
                if (e.byteLength != t.byteLength || e.byteOffset != t.byteOffset) return !1;
                e = e.buffer, t = t.buffer;
            case b:
                return !(e.byteLength != t.byteLength || !r(new a(e), new a(t)));
            case d:
            case p:
                return +e == +t;
            case f:
                return e.name == t.name && e.message == t.message;
            case m:
                return e != +e ? t != +t : e == +t;
            case v:
            case w:
                return e == t + "";
            case h:
                var T = s;
            case g:
                var _ = x & l;
                if (T || (T = c), e.size != t.size && !_) return !1;
                var E = C.get(e);
                return E ? E == t : (x |= u, C.set(e, t), o(T(e), T(t), r, i, x, C));
            case y:
                if (A) return A.call(e) == A.call(t) }
        return !1 }
    var i = n(586),
        a = n(587),
        o = n(580),
        s = n(588),
        c = n(589),
        u = 1,
        l = 2,
        d = "[object Boolean]",
        p = "[object Date]",
        f = "[object Error]",
        h = "[object Map]",
        m = "[object Number]",
        v = "[object RegExp]",
        g = "[object Set]",
        w = "[object String]",
        y = "[object Symbol]",
        b = "[object ArrayBuffer]",
        k = "[object DataView]",
        x = i ? i.prototype : void 0,
        A = x ? x.valueOf : void 0;
    e.exports = r }, function(e, t, n) {
    var r = n(563),
        i = r.Symbol;
    e.exports = i }, function(e, t, n) {
    var r = n(563),
        i = r.Uint8Array;
    e.exports = i }, function(e, t) {
    function n(e) {
        var t = -1,
            n = Array(e.size);
        return e.forEach(function(e, r) { n[++t] = [r, e] }), n }
    e.exports = n }, function(e, t) {
    function n(e) {
        var t = -1,
            n = Array(e.size);
        return e.forEach(function(e) { n[++t] = e }), n }
    e.exports = n }, function(e, t, n) {
    function r(e, t, n, r, s, c) {
        var u = s & o,
            l = a(e),
            d = l.length,
            p = a(t),
            f = p.length;
        if (d != f && !u) return !1;
        for (var h = d; h--;) {
            var m = l[h];
            if (!(u ? m in t : i(t, m))) return !1 }
        var v = c.get(e);
        if (v) return v == t;
        var g = !0;
        c.set(e, t);
        for (var w = u; ++h < d;) { m = l[h];
            var y = e[m],
                b = t[m];
            if (r) var k = u ? r(b, y, m, t, e, c) : r(y, b, m, e, t, c);
            if (!(void 0 === k ? y === b || n(y, b, r, s, c) : k)) { g = !1;
                break }
            w || (w = "constructor" == m) }
        if (g && !w) {
            var x = e.constructor,
                A = t.constructor;
            x != A && "constructor" in e && "constructor" in t && !("function" == typeof x && x instanceof x && "function" == typeof A && A instanceof A) && (g = !1) }
        return c.delete(e), g }
    var i = n(591),
        a = n(593),
        o = 2;
    e.exports = r }, function(e, t, n) {
    function r(e, t) {
        return null != e && (o.call(e, t) || "object" == typeof e && t in e && null === i(e)) }
    var i = n(592),
        a = Object.prototype,
        o = a.hasOwnProperty;
    e.exports = r }, function(e, t) {
    function n(e) {
        return r(Object(e)) }
    var r = Object.getPrototypeOf;
    e.exports = n }, function(e, t, n) {
    function r(e) {
        var t = u(e);
        if (!t && !s(e)) return a(e);
        var n = o(e),
            r = !!n,
            l = n || [],
            d = l.length;
        for (var p in e) !i(e, p) || r && ("length" == p || c(p, d)) || t && "constructor" == p || l.push(p);
        return l }
    var i = n(591),
        a = n(594),
        o = n(595),
        s = n(599),
        c = n(606),
        u = n(607);
    e.exports = r }, function(e, t) {
    function n(e) {
        return r(Object(e)) }
    var r = Object.keys;
    e.exports = n }, function(e, t, n) {
    function r(e) {
        var t = e ? e.length : void 0;
        return s(t) && (o(e) || c(e) || a(e)) ? i(t, String) : null }
    var i = n(596),
        a = n(597),
        o = n(604),
        s = n(602),
        c = n(605);
    e.exports = r }, function(e, t) {
    function n(e, t) {
        for (var n = -1, r = Array(e); ++n < e;) r[n] = t(n);
        return r }
    e.exports = n }, function(e, t, n) {
    function r(e) {
        return i(e) && s.call(e, "callee") && (!u.call(e, "callee") || c.call(e) == a) }
    var i = n(598),
        a = "[object Arguments]",
        o = Object.prototype,
        s = o.hasOwnProperty,
        c = o.toString,
        u = o.propertyIsEnumerable;
    e.exports = r }, function(e, t, n) {
    function r(e) {
        return a(e) && i(e) }
    var i = n(599),
        a = n(603);
    e.exports = r }, function(e, t, n) {
    function r(e) {
        return null != e && o(i(e)) && !a(e) }
    var i = n(600),
        a = n(558),
        o = n(602);
    e.exports = r }, function(e, t, n) {
    var r = n(601),
        i = r("length");
    e.exports = i }, function(e, t) {
    function n(e) {
        return function(t) {
            return null == t ? void 0 : t[e] } }
    e.exports = n }, function(e, t) {
    function n(e) {
        return "number" == typeof e && e > -1 && e % 1 == 0 && e <= r }
    var r = 9007199254740991;
    e.exports = n }, function(e, t) {
    function n(e) {
        return !!e && "object" == typeof e }
    e.exports = n }, function(e, t) {
    var n = Array.isArray;
    e.exports = n }, function(e, t, n) {
    function r(e) {
        return "string" == typeof e || !i(e) && a(e) && c.call(e) == o }
    var i = n(604),
        a = n(603),
        o = "[object String]",
        s = Object.prototype,
        c = s.toString;
    e.exports = r }, function(e, t) {
    function n(e, t) {
        return t = null == t ? r : t, !!t && ("number" == typeof e || i.test(e)) && e > -1 && e % 1 == 0 && e < t }
    var r = 9007199254740991,
        i = /^(?:0|[1-9]\d*)$/;
    e.exports = n }, function(e, t) {
    function n(e) {
        var t = e && e.constructor,
            n = "function" == typeof t && t.prototype || r;
        return e === n }
    var r = Object.prototype;
    e.exports = n }, function(e, t, n) {
    function r(e) {
        return g.call(e) }
    var i = n(609),
        a = n(571),
        o = n(610),
        s = n(611),
        c = n(612),
        u = n(565),
        l = "[object Map]",
        d = "[object Object]",
        p = "[object Promise]",
        f = "[object Set]",
        h = "[object WeakMap]",
        m = "[object DataView]",
        v = Object.prototype,
        g = v.toString,
        w = u(i),
        y = u(a),
        b = u(o),
        k = u(s),
        x = u(c);
    (i && r(new i(new ArrayBuffer(1))) != m || a && r(new a) != l || o && r(o.resolve()) != p || s && r(new s) != f || c && r(new c) != h) && (r = function(e) {
        var t = g.call(e),
            n = t == d ? e.constructor : void 0,
            r = n ? u(n) : void 0;
        if (r) switch (r) {
            case w:
                return m;
            case y:
                return l;
            case b:
                return p;
            case k:
                return f;
            case x:
                return h }
        return t }), e.exports = r }, function(e, t, n) {
    var r = n(556),
        i = n(563),
        a = r(i, "DataView");
    e.exports = a }, function(e, t, n) {
    var r = n(556),
        i = n(563),
        a = r(i, "Promise");
    e.exports = a }, function(e, t, n) {
    var r = n(556),
        i = n(563),
        a = r(i, "Set");
    e.exports = a }, function(e, t, n) {
    var r = n(556),
        i = n(563),
        a = r(i, "WeakMap");
    e.exports = a }, function(e, t, n) {
    function r(e) {
        return a(e) && i(e.length) && !!I[L.call(e)] }
    var i = n(602),
        a = n(603),
        o = "[object Arguments]",
        s = "[object Array]",
        c = "[object Boolean]",
        u = "[object Date]",
        l = "[object Error]",
        d = "[object Function]",
        p = "[object Map]",
        f = "[object Number]",
        h = "[object Object]",
        m = "[object RegExp]",
        v = "[object Set]",
        g = "[object String]",
        w = "[object WeakMap]",
        y = "[object ArrayBuffer]",
        b = "[object DataView]",
        k = "[object Float32Array]",
        x = "[object Float64Array]",
        A = "[object Int8Array]",
        C = "[object Int16Array]",
        T = "[object Int32Array]",
        _ = "[object Uint8Array]",
        E = "[object Uint8ClampedArray]",
        S = "[object Uint16Array]",
        O = "[object Uint32Array]",
        I = {};
    I[k] = I[x] = I[A] = I[C] = I[T] = I[_] = I[E] = I[S] = I[O] = !0, I[o] = I[s] = I[y] = I[c] = I[b] = I[u] = I[l] = I[d] = I[p] = I[f] = I[h] = I[m] = I[v] = I[g] = I[w] = !1;
    var j = Object.prototype,
        L = j.toString;
    e.exports = r }, function(e, t, n) {
    function r(e) {
        for (var t = a(e), n = t.length; n--;) {
            var r = t[n],
                o = e[r];
            t[n] = [r, o, i(o)] }
        return t }
    var i = n(615),
        a = n(593);
    e.exports = r }, function(e, t, n) {
    function r(e) {
        return e === e && !i(e) }
    var i = n(559);
    e.exports = r }, function(e, t) {
    function n(e, t) {
        return function(n) {
            return null != n && (n[e] === t && (void 0 !== t || e in Object(n))) } }
    e.exports = n }, function(e, t, n) {
    function r(e, t) {
        return s(e) && c(t) ? u(l(e), t) : function(n) {
            var r = a(n, e);
            return void 0 === r && r === t ? o(n, e) : i(t, r, void 0, d | p) } }
    var i = n(578),
        a = n(618),
        o = n(628),
        s = n(626),
        c = n(615),
        u = n(616),
        l = n(627),
        d = 1,
        p = 2;
    e.exports = r }, function(e, t, n) {
    function r(e, t, n) {
        var r = null == e ? void 0 : i(e, t);
        return void 0 === r ? n : r }
    var i = n(619);
    e.exports = r }, function(e, t, n) {
    function r(e, t) { t = a(t, e) ? [t] : i(t);
        for (var n = 0, r = t.length; null != e && n < r;) e = e[o(t[n++])];
        return n && n == r ? e : void 0 }
    var i = n(620),
        a = n(626),
        o = n(627);
    e.exports = r }, function(e, t, n) {
    function r(e) {
        return i(e) ? e : a(e) }
    var i = n(604),
        a = n(621);
    e.exports = r }, function(e, t, n) {
    var r = n(622),
        i = n(623),
        a = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(\.|\[\])(?:\4|$))/g,
        o = /\\(\\)?/g,
        s = r(function(e) {
            var t = [];
            return i(e).replace(a, function(e, n, r, i) { t.push(r ? i.replace(o, "$1") : n || e) }), t });
    e.exports = s }, function(e, t, n) {
    function r(e, t) {
        if ("function" != typeof e || t && "function" != typeof t) throw new TypeError(a);
        var n = function() {
            var r = arguments,
                i = t ? t.apply(this, r) : r[0],
                a = n.cache;
            if (a.has(i)) return a.get(i);
            var o = e.apply(this, r);
            return n.cache = a.set(i, o), o };
        return n.cache = new(r.Cache || i), n }
    var i = n(551),
        a = "Expected a function";
    r.Cache = i, e.exports = r }, function(e, t, n) {
    function r(e) {
        return null == e ? "" : i(e) }
    var i = n(624);
    e.exports = r }, function(e, t, n) {
    function r(e) {
        if ("string" == typeof e) return e;
        if (a(e)) return c ? c.call(e) : "";
        var t = e + "";
        return "0" == t && 1 / e == -o ? "-0" : t }
    var i = n(586),
        a = n(625),
        o = 1 / 0,
        s = i ? i.prototype : void 0,
        c = s ? s.toString : void 0;
    e.exports = r }, function(e, t, n) {
    function r(e) {
        return "symbol" == typeof e || i(e) && s.call(e) == a }
    var i = n(603),
        a = "[object Symbol]",
        o = Object.prototype,
        s = o.toString;
    e.exports = r }, function(e, t, n) {
    function r(e, t) {
        if (i(e)) return !1;
        var n = typeof e;
        return !("number" != n && "symbol" != n && "boolean" != n && null != e && !a(e)) || (s.test(e) || !o.test(e) || null != t && e in Object(t)) }
    var i = n(604),
        a = n(625),
        o = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
        s = /^\w*$/;
    e.exports = r }, function(e, t, n) {
    function r(e) {
        if ("string" == typeof e || i(e)) return e;
        var t = e + "";
        return "0" == t && 1 / e == -a ? "-0" : t }
    var i = n(625),
        a = 1 / 0;
    e.exports = r }, function(e, t, n) {
    function r(e, t) {
        return null != e && a(e, t, i) }
    var i = n(629),
        a = n(630);
    e.exports = r }, function(e, t) {
    function n(e, t) {
        return null != e && t in Object(e) }
    e.exports = n }, function(e, t, n) {
    function r(e, t, n) { t = c(t, e) ? [t] : i(t);
        for (var r, p = -1, f = t.length; ++p < f;) {
            var h = d(t[p]);
            if (!(r = null != e && n(e, h))) break;
            e = e[h] }
        if (r) return r;
        var f = e ? e.length : 0;
        return !!f && u(f) && s(h, f) && (o(e) || l(e) || a(e)) }
    var i = n(620),
        a = n(597),
        o = n(604),
        s = n(606),
        c = n(626),
        u = n(602),
        l = n(605),
        d = n(627);
    e.exports = r }, function(e, t) {
    function n(e) {
        return e }
    e.exports = n }, function(e, t, n) {
    function r(e) {
        return o(e) ? i(s(e)) : a(e) }
    var i = n(601),
        a = n(633),
        o = n(626),
        s = n(627);
    e.exports = r }, function(e, t, n) {
    function r(e) {
        return function(t) {
            return i(t, e) } }
    var i = n(619);
    e.exports = r }, function(e, t, n) {
    function r(e) {
        var t = i(e),
            n = t % 1;
        return t === t ? n ? t - n : t : 0 }
    var i = n(635);
    e.exports = r }, function(e, t, n) {
    function r(e) {
        if (!e) return 0 === e ? e : 0;
        if (e = i(e), e === a || e === -a) {
            var t = e < 0 ? -1 : 1;
            return t * o }
        return e === e ? e : 0 }
    var i = n(636),
        a = 1 / 0,
        o = 1.7976931348623157e308;
    e.exports = r }, function(e, t, n) {
    function r(e) {
        if ("number" == typeof e) return e;
        if (o(e)) return s;
        if (a(e)) {
            var t = i(e.valueOf) ? e.valueOf() : e;
            e = a(t) ? t + "" : t }
        if ("string" != typeof e) return 0 === e ? e : +e;
        e = e.replace(c, "");
        var n = l.test(e);
        return n || d.test(e) ? p(e.slice(2), n ? 2 : 8) : u.test(e) ? s : +e }
    var i = n(558),
        a = n(559),
        o = n(625),
        s = NaN,
        c = /^\s+|\s+$/g,
        u = /^[-+]0x[0-9a-f]+$/i,
        l = /^0b[01]+$/i,
        d = /^0o[0-7]+$/i,
        p = parseInt;
    e.exports = r
}, function(e, t, n) {
    var r = n(638),
        i = n(532),
        a = r(i);
    e.exports = a }, function(e, t, n) {
    function r(e) {
        return function(t, n, r) {
            var s = Object(t);
            if (n = i(n, 3), !a(t)) var c = o(t);
            var u = e(c || t, function(e, t) {
                return c && (t = e, e = s[t]), n(e, t, s) }, r);
            return u > -1 ? t[c ? c[u] : u] : void 0 } }
    var i = n(534),
        a = n(599),
        o = n(593);
    e.exports = r }, function(e, t, n) { "use strict";

    function r(e) {
        return e && e.__esModule ? e : { default: e } }

    function i(e, t) { l.hasOwnProperty(e) || u.default.bind(e, d(e)), l[e] = t }

    function a(e) { l[e] = null }

    function o(e) {
        return (0, s.isRetina)() && (e += "@2x"), n(640)("./" + e + ".png") }
    Object.defineProperty(t, "__esModule", { value: !0 }), t.subscribePush = i, t.unsubscribePush = a, t.getIcon = o;
    var s = n(476),
        c = n(197),
        u = r(c),
        l = {},
        d = function(e) {
            return function(t) {
                return l[e] && l[e].call(null, t) } } }, function(e, t, n) {
    function r(e) {
        return n(i(e)) }

    function i(e) {
        return a[e] || function() {
            throw new Error("Cannot find module '" + e + "'.") }() }
    var a = { "./check.png": 641, "./check@2x.png": 642, "./document.png": 643, "./document@2x.png": 644, "./folder.png": 645, "./folder@2x.png": 646, "./sheet.png": 647, "./sheet@2x.png": 648, "./team.png": 649, "./team@2x.png": 650 };
    r.keys = function() {
        return Object.keys(a) }, r.resolve = i, e.exports = r, r.id = 640 }, function(e, t) { e.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAOCAYAAAAfSC3RAAAABGdBTUEAALGPC/xhBQAAAYxJREFUKBWtkj1Iw1AUhZu/JiJaGrQOIg7+gIOrm6OLDhWEThEsXZSAgxYpLnaxLs5isVMIqcYpUDsJ7i6CSwIOgjhlaFUyxKRNPK8lUtShioHXd5N3v3NObxKL/fGifsNpmjbGMMwCRVHXbL+grusiADkej6+4rjvK9AMCSoRhuAW3bawpz/NeaAIqijJYr9f5n0QMwxjC8xzHcQQa8X3/Fs4XFFELgmADh02aps8zmYwXCRBBnudzAPZYlh1vtVp37Xb7AD01GsWSIAh5KBYQZ7VcLnMEhOAAoHU83yEQ+u6xDk3TvIJjyEKN9AXY57Dvi6L4rqrqDQ7XAOSRYhKJTEQ8sizLKBaLAQGYdDr9DCcPDfNYM1CdhkgCNRnGLKAHDKOE+0tZln0CkavzHuEwjFibaNyFSArNTdRJ1I+oS47jqNls1u0i3d/OVCVJeoPqGdxO0PyK/5VE1CdAx41GQ/sKfTpGSphiCs4FDGsZQqe2bVcQz4nOe/dvn1y1Wp1AzEWANZKkt/lf6g9wPbVswKvbrwAAAABJRU5ErkJggg==" }, function(e, t) { e.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAcCAYAAAByDd+UAAAABGdBTUEAALGPC/xhBQAAArtJREFUSA3tls+LUlEUx8f3MEXQMK1NrRsFo127hKChgSBa+PzFMBZlMgy0GWedsy3bWDAYJimCP55RDBHRDCRMu9pEIP4LBS10UTr4tO8R73Dfm1u6eNFm3ubcc8+Pzzn3ly4sHH8mr4DF5Hy6dJVK5ZzVai30er1EMpn8RkZJ52GiUiwWTwO2Z7FYrrlcrt18Pu+l9P+kw0KhcMrpdLYAu8B6GI1Gn7vd7lXTgejkpNvtfg/QJQZjcjwevzUVCJgDsHcAXGYQJgH7iS6XTdvDTCZzArDXIhjmDjRNuxmLxfZNARLM7/erSLzEOuLkAcZKPB7fpblDIAVVq9VMLpezcc4zh4qiyD6fr4wDckPgjMa01XA4vMNsMg0oKBgM1mVZXnM4HBcDgcDLVqulMac/SewLnYHngK0IfMbD4fAuOqvwNplgqOAFgiJkgFz0er2LkK/a7faYd+bHBGs0Gk/gd4+fZ2MckPvYs2dMZ1IKhULbCNZViCRhFFKYdsB8dRKwh/Bb101OFSzjZjQafSqySajkCwyiTm5RByKoqqoPAEuLEgK2hc6yIhvNTe4hDksa+/dI5ARgNhKJbDJbvV7fAEyYEMU/RmfCQlj85JRSRVQZm+QldUId0VytVluDLiwMsG2+MD4HP9a9NEiYlSRpg3dgYyRUYQtB18WQHatQwsG7jWJEW8NSTOThPSSNKqRKdR5TBTAFwyMwKqTZbN6ZB0apdEAKAnSdKp5yZok3nU5nBUs+886yRDogTRKUKga0wZxEEp3t4Z4qeKHo6Zr7m7w0Rm+68HhtdjwezzIKOGu0o5iP+G27nk6nfxlts/Qje8IHlEolj91u/wAo/0P6CbClVCrV5X3nHf8VSEnK5fIZm822D+h5dPa13+9fSSQSP+YFGP1mAimA/RkaDAar+L4bkxzr/3UFfgOKbxNQFaUmqAAAAABJRU5ErkJggg==" }, function(e, t) { e.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAOCAYAAAAfSC3RAAAABGdBTUEAALGPC/xhBQAAAVtJREFUKBWFk09Kw1AQxl/+NpvskugJCm70BEJu4Kq68DCll9BLeIhA1kLAhRsxuElIwaSUIk1NjN/36ASVYgfCezNvft+8mSSGgmVZNt3tdteGYVzQF4OvvmB93z92XfdQluUbzqzZbNbZTNput2dhGF5FUXRu27ZJYBgGtQeH1Wp1WVXVKXLu4jh+XSwWSoNQVI7jqMlkAs42pSKK6S0ETyzLuoWQk6bp/Xw+fx7BfRIKDboaCQrSp1gQBCFCNxAokyQpNIj7a2UmifGapmmquq7Vcrlk2MC5u16v/aZp3LGiwAJShLDv+7oN7gH0AD89zxtGUIC/K/pm71qkbVvluq7abDZKD0J6+XlVEWBM4pyDDGwECR8zCkhL4+hF9Rj8q6KoHINEfOyRAINy8J+AVNRThcN3ZHLl2PkcMuQYuJ3FMw1iLfM8fyqKwjkEMEZhQO/4GV7wJX18A0ho2RM42LeqAAAAAElFTkSuQmCC" }, function(e, t) { e.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAcCAYAAAByDd+UAAAABGdBTUEAALGPC/xhBQAAAgpJREFUSA3llc1KAlEUgO/ogL/hJJZkadFAgkoIiT2CL9OmZU9Q6yBoUc/gM7g3nI2uhCDKpeFGGH/Gzhm8w7nTnRydIqgDF8+cv++ec++MCiPSbrf1xWJxBaYqMa9UIce0LMsYjUY3jUbjjSQo3W43VS6X38G2QHuIONkmMMyPx+OaoijnmqbdtlqtfTBhcb4wxBHV0UCBXdqd1ev1M2r/SodNMoCxV5DBYMCi0egdTOqiVqu9YF4ymbQ74zXcHWKX3Ofrdzab2XEHIPl8Pgf5ObDdA7QgK+AJRPB8PncWFpat8Xjs1N0D0XW9ALm70+n0AcZ75DiXiifQHYhjw+UW3iG3ZzKZnWKxeAzQtKqqj8Ph8JD78FcAUoeX7gWm8dsglUrlBGypyWRySX0CkI+QBnjpsm5p7BZIqVTSwXZK7cItxXNbR3i3nU6HwTtop4ZCIZZIJFg6nWa9Xu85FotZtGYgIBaCc8Krb58v3zDa8GxN01QikQjlMQEI76Hg9POABbPZrA3AeISGw2GGnfb7fWs5emd0ApDv0A+Ix2A3uKggDEHwEfjUgRC5CZCC3Lqs3u8CNzlDd1f0WVbv73cofGnoOH5KF0Yqm3kQsKyeAJRd4yBAWb2/D/znlwY/wkFkrUuz6h/dz0b8AA0AVZvN5pOfgn5iAGrQOGFmMMJrDMCdfdMysCYFfgCXqFFS+Z1bxAAAAABJRU5ErkJggg==" }, function(e, t) { e.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAOCAYAAAAfSC3RAAAABGdBTUEAALGPC/xhBQAAAVxJREFUKBWdUrtKA1EQnZm9m8dGfGCC+gOCpY2F32C9+Dn5AxvBRrTTRrSzFf0FIUWQVInEYBFX0c3eO3ecDUpg8xAcuFzm7DkzZ/cswD8Lc93J5e0uEe1TYMCza61h8hDHMS+aic1mkza3907DsHzgxaN3tiUk1yiBKwopNMDZqN3fiu7w6v4x/krejhGxId6DBwFCei2K8l45+dWuVKILI84d1pZX1p21OTguQqwr7bed3AqpuK4LGvpS8m4oIA8TIYgoOT+FUojCEJxnNmqtIzrdFzjz2iDnsrwY732XhUH8jA1z1Ag4MGr72aaZyvRbji3OYf/AXpnqtG/YpgOhUqo5RiJ/G2a2wIg946pBH1P+QIFIbS9ep08zq/Gy7RnsvQ/tUvlTjBHmqcynBmnK6ou7ptMpjTZ2sjPdVtffbYpYBJzGVLL8NE756PxmVWpVgiQp8mb2Sbc1/AbarKmkdx5XUQAAAABJRU5ErkJggg==" }, function(e, t) { e.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAcCAYAAAByDd+UAAAABGdBTUEAALGPC/xhBQAAAYJJREFUSA3tVc1KAzEQzmRTa6VSRPBZfAahh1566t2LN99F9CYi9CJ46EHw4BN48BHS7l4KIlj6s7W7GSeB7C5SWNJt9mRgSTI/37czmUkY+x97zgBYvLvR6Ajn4pH2PSujWQHDm5Ngft3v938K8p2X3HpuIdMqjgyuvtLje2tXdc4ivB2+YAnYN+k7JTbb1M/QTgaX3e5SK7MIt1n+ke1CpiF6bBE8WCx4evuY0ubMCjzPMwGIknJZF2FERcGk56iK8JFgyMaYlU5R52GNSIRMjVldjIihUMglg7KO2E+0wHkkeABSpfUQKlShaBzMJ/GqtZ8QSlAAIDTlMnx9/6TFaYl9ZXWSJB0qGkZHaHrRN+FscHE+M1cb6tagY/T7QaSDMxHSYUq98TxyQjSE3rs/J0wRJpyuHM8j1PgmpVxtpHJ6qdx/jQozJ1yuYtlsHrqjOHgg5znhur2Jg7jh4O5uyuni1l4mpel03VqI1B3FwQMgMIQOLtVMEet6kqr9Z3XvX+03sZUQC+wmAAAAAElFTkSuQmCC" }, function(e, t) { e.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAOCAYAAAAfSC3RAAAABGdBTUEAALGPC/xhBQAAAZRJREFUKBVtUs1qwmAQ3C8mpigBUaPtKwg9ee1L9FDora/ia7SPIPTm3av02lNPoYcUieIvWDSJ6czqFwS7sH5/OzuzY4wgJpNJz/O8pzzP740xBe8Y2MvxeMR1/rHb7d4dx4mDIDCj0Sh3TyXSazabj2EY9iqVCuqNFMUJD2CxXC4f5vN5uF6v3/r9/jeAYoGF67qmWq1icc25Gdl02+1273D/gmb+eDx+HQwGXwqEFMuAt8IgFWDvMYbTbrdvIfUZ+TMcDuMSyKLLoFzmarWSJEn4ZKDgZrvdBrVazVNglmWlLAsmK7oLzBAw6jVmzdAo5cHOqA9Woh7OP77vC5Ps+/1e4IPApBPwcDjojLPZTGWlaapnFjPYEAYJDCqVlTPSQQLq9brACIEsPXc6Hd3z/XKkUiq7koEyCGIhc7PZCI1jM85MMKNkJJDZaDSk1WqpmxyBjHSWwUY2rhhZtFgs/mW8mhH0DtgM5eCzU2bb2a78S6bTqQPZDu+UEaCfKIo+4zjWOWzx5YoaB+Yl+NgjjPD7B1WxGkrbBwbDAAAAAElFTkSuQmCC" }, function(e, t) { e.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAcCAYAAAByDd+UAAAABGdBTUEAALGPC/xhBQAAAldJREFUSA3NVc1qIkEQ7lHB3xBXTCTZ6IYdWEElBCLmJB59mb3scZ9gcw4E9rD7DD6DeDXoRU9CIOx6NHgR/BtTNaSG6t7uzGgSNgVNl19XfV9V9cxoCWbdbtfebDbfATpnsK8LOXPHcfrT6fSq2Wz+ZQnWYDDYL5fLD4BtEA+xQ7GLGOYnEom0ZVmX6XT6ut1ufwQIyWlhiGcRzwMHqnQ7q9VqFxx/zociBYiJP2Dj8VjEYrEbmNTXarV6j3mpVMrtjDjUDrFLOgu0r1YrN+4ELJ/PH0P+MWA/QbSgIzAKovB6vfYWEuvWbDbzeI/AbNsuQO7hcrn8BeM99Q6fHKOgGohjw6UadUh4Nps9KBaLn0E0E4lEfk8mk090hrskyA9MvkmYx38Aq1QqXwDbXywW3/iZJEgj5AEmX9ctj90DK5VKNmBnHJeeUry3bYy67fV6At5BNzUUColkMikymYwYDod38Xjc4ZwvEkQiuCd89N37pYIRw7udz+dWNBrlekIShPdQOgzyAwlzuZwrgPEoGg6HBXY6Go2cp9F7o5MEqcIgQhSD3eDihmIoBB+BfzqQIncR5EKqr+P7v4LqHXY6HbXoQL8bjYYbp/Ih+L46pHbq9Tq57k6dm3AK1nUofWko8C13aaS6ilCcOlILMeEUp+OTBHWPMSXvsuv4Agma7sqEU3E7CxLBtruvoInQdFcm3MSDuDRS3SU/l+x3puOTBNUR0BfDj9h0rvJhnFHQ7x/dJMLxIIJ9EDpvtVq3PPElPoj2eb70pYH/sR8YgJW90uojJxd8BIdaajWzP1e6AAAAAElFTkSuQmCC" }, function(e, t) { e.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAOCAYAAAAfSC3RAAAABGdBTUEAALGPC/xhBQAAAWVJREFUKBWdkk9Lw0AQxbObjUkoaPs19KCFFgU9KX5t6UXwUGkOUorfoSdb2+avv7cmbRVPDgwz++a9mdlNguCfZjpd0zR2Pp9fVlU1Bos63FobUKvxLM/z6Wg0KlRzLcFMJhM7GAzunHMPYIu6rnPVaBQaYy4Q9rfb7RuQF5osy4YcNCWmeE/sQ3wh35FrmoTXxJL4RFzTPHN0vKX+CJgCjola81waPOCs66hm8QTflGV5JmFM4Z16SLwh9ij2vvkgrbF6SboIw/ADYSShOq9wB7kWD6HCbwNu1jRYwasciQhah7PxohbbC4XLEBpqRtEVRSFFILKevhPvVUeJOKzqm/uJnbCLdDyi+1U8WXjnXsgkrbCf9pew68SbWPJKj2MRXXGIyU+I6H5ObEX6HEOGfHKeauKMFU8B9AMsAHX5lnsIuga2g6/P8uqSJHmO43i2XC5tFEX+iQ/0Q6ZmPKRN07TZYF9NhvQQ9GZwdQAAAABJRU5ErkJggg==" }, function(e, t) { e.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAcCAYAAAByDd+UAAAABGdBTUEAALGPC/xhBQAAAMNJREFUSA3tlVEKwyAQRE3peRTEO3hm7yCCHkhLthXWUFcbbT8a85NsVp8zE4mMrWtyAhvFCyEkql/rcc6r3Ftt0rfe3ylwSk+DQoiqYjzfe99MpGtBDKWes0BqDCh3zjWVUZDenpRyA4c9ynqhrXHFgkopcGytneL4HQ8WjDEWwo510TxRYF7hMLNmR4x5y2FOeei+viHDu2ooy9dkzLvILsWW9xSO9WismPf/fxo4HYwxU06HVvRa69+fhy1Rq/9xAg8mbJ6RNEDp7AAAAABJRU5ErkJggg==" }, function(e, t, n) { "use strict";

    function r(e) {
        return e && e.__esModule ? e : { default: e } }

    function i(e) {
        if (0 === e.code) return e.data;
        if (403 === e.code) {
            var t = encodeURIComponent(window.location.href);
            window.location.href = "/login?redirect_url=" + t }
        throw h.default.error(e), e }

    function a() {
        var e = arguments.length <= 0 || void 0 === arguments[0] ? 0 : arguments[0],
            t = arguments.length <= 1 || void 0 === arguments[1] ? 20 : arguments[1];
        return m("/api/v2/notification", { all: !0, page_index: e, page_size: t }).then(function(e) {
            return e.notifications }) }

    function o() {
        return m("/api/v2/notification") }

    function s(e) {
        return m("/api/v2/notification/" + e) }

    function c() {
        return m("/api/notification/all") }

    function u(e) {
        return v("/smapi/users/me/action/join_team_by_invitation", { teamId: e }) }

    function l() {
        return m("/smapi/users/me").then(function(e) {
            return e.team || {} }) }
    Object.defineProperty(t, "__esModule", { value: !0 }), t.fetchMessages = a, t.fetchAllUnreadMessages = o, t.readMessage = s, t.readAllMessage = c, t.acceptTeamInvitation = u, t.fetchUserTeam = l;
    var d = n(239),
        p = n(238),
        f = n(184),
        h = r(f),
        m = function(e, t) {
            return (0, d.ajaxGet)(e + (0, p.queryEncode)(t)).then(i) },
        v = function(e, t) {
            return (0, d.ajaxPost)(e, t).then(i) } }, function(e, t, n) { "use strict";

    function r(e) {
        return e && e.__esModule ? e : { default: e } }

    function i(e) {
        if (Array.isArray(e)) {
            for (var t = 0, n = Array(e.length); t < e.length; t++) n[t] = e[t];
            return n }
        return Array.from(e) }

    function a(e, t, n) {
        return [].concat(i(e.slice(0, t)), [n], i(e.slice(t + 1))) }

    function o(e) {
        var t = e.notification,
            n = t.user.team;
        null === t.file ? t.file = { id: t.target_id, shortName: n && n.name, type: y.FILE_TYPE_TEAM, canChoice: t.type === y.NOTIFICATION_TYPE_TEAM_INVITATION } : t.file.shortName = v.default.cutName(t.file.name, 27);
        var r = t.msg.replace("<a", "@<a");
        return t.shortMessage = v.default.cutLength(r, 76), t.user || (t.user = cow.defaultAnonymousUser), t.user.online = h.default.isOnline(e.user_id), e.formattedTime = v.default.DateTime.format(e.created_at), e }

    function s(e, t) {
        var n = function(e) {
                return e.notification.link && e.notification.link.split("#")[0] },
            r = n(t),
            o = r ? (0, p.default)(e, function(e) {
                return r === n(e) }) : -1;
        return o > -1 && e.length ? a(e, o, t) : [t].concat(i(e)) }

    function c(e) {
        return e.map(function(e) {
            var t = e.notification.user,
                n = w.default.get(t.id);
            return n && t.name !== n.name && (t.name = n.name), e }) }

    function u(e) {
        return l({}, e, { is_read: !0 }) }
    Object.defineProperty(t, "__esModule", { value: !0 });
    var l = Object.assign || function(e) {
        for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]) }
        return e };
    t.replaceItem = a, t.handleMessageData = o, t.appendMessage = s, t.refreshAuthor = c, t.setMessageRead = u;
    var d = n(532),
        p = r(d),
        f = n(196),
        h = r(f),
        m = n(189),
        v = r(m),
        g = n(206),
        w = r(g),
        y = n(653) }, function(e, t) { "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 });
    var n = 4;
    t.NOTIFICATION_TYPE_TEAM_INVITATION = n;
    var r = 3;
    t.NOTIFICATION_TYPE_TEAM = r;
    var i = 2;
    t.NOTIFICATION_TYPE_INVITATION = i;
    var a = 1;
    t.NOTIFICATION_TYPE_MENTION = a;
    var o = 0;
    t.NOTIFICATION_TYPE_COMMENT = o;
    var s = -1;
    t.FILE_TYPE_SHEET = s;
    var c = 0;
    t.FILE_TYPE_DOCUMENT = c;
    var u = 1;
    t.FILE_TYPE_FOLDER = u;
    var l = 1024;
    t.FILE_TYPE_TEAM = l }, function(e, t, n) { "use strict";

    function r(e) {
        return e && e.__esModule ? e : { default: e } }

    function i(e, t) {
        var n = {};
        for (var r in e) t.indexOf(r) >= 0 || Object.prototype.hasOwnProperty.call(e, r) && (n[r] = e[r]);
        return n }

    function a(e, t) {
        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function") }

    function o(e, t) {
        if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
        e.prototype = Object.create(t && t.prototype, { constructor: { value: e, enumerable: !1, writable: !0, configurable: !0 } }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t) }
    Object.defineProperty(t, "__esModule", { value: !0 });
    var s = Object.assign || function(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]) }
            return e },
        c = function() {
            function e(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var r = t[n];
                    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r) } }
            return function(t, n, r) {
                return n && e(t.prototype, n), r && e(t, r), t } }(),
        u = function(e, t, n) {
            for (var r = !0; r;) {
                var i = e,
                    a = t,
                    o = n;
                r = !1, null === i && (i = Function.prototype);
                var s = Object.getOwnPropertyDescriptor(i, a);
                if (void 0 !== s) {
                    if ("value" in s) return s.value;
                    var c = s.get;
                    if (void 0 === c) return;
                    return c.call(o) }
                var u = Object.getPrototypeOf(i);
                if (null === u) return;
                e = u, t = a, n = o, r = !0, s = u = void 0 } },
        l = n(7),
        d = r(l),
        p = n(655),
        f = r(p),
        h = n(163),
        m = n(661),
        v = n(201),
        g = r(v),
        w = n(639),
        y = n(662),
        b = r(y),
        k = void 0,
        x = (0, w.getIcon)("check"),
        A = function(e) {
            function t(e) { a(this, t), u(Object.getPrototypeOf(t.prototype), "constructor", this).call(this, e), this.state = { maxHeight: 0, showDropdown: !1 } }
            return o(t, e), c(t, [{ key: "componentWillMount", value: function() { this._resetMaxHeight() } }, { key: "componentDidMount", value: function() {
                    var e = this,
                        t = (0, h.findDOMNode)(this);
                    k = function(n) {
                        return !t.contains(n.target) && e.hideDropdown() }, g.default.on(document.body, "click", k) } }, { key: "componentWillUnmount", value: function() { g.default.off(document.body, "click", k) } }, { key: "_resetMaxHeight", value: function() {
                    var e = window.innerHeight,
                        t = 600,
                        n = 300,
                        r = Math.max(Math.min(e - 200, t), n);
                    this.setState({ maxHeight: r }) } }, { key: "showDropdown", value: function() { this.setState({ showDropdown: !0 }) } }, { key: "hideDropdown", value: function() { this.setState({ showDropdown: !1 }) } }, { key: "render", value: function() {
                    var e = this,
                        t = this.props,
                        n = t.messages,
                        r = t.clickReadAll,
                        a = i(t, ["messages", "clickReadAll"]),
                        o = this.state,
                        c = o.maxHeight,
                        u = o.showDropdown,
                        l = n.filter(function(e) {
                            return !e.is_read });
                    return d.default.createElement("div", { className: "message-box header-dropdown-box" }, d.default.createElement("span", { className: "message-icon-wrap", onClick: function() {
                            return e.showDropdown() } }, d.default.createElement("span", { className: "message-icon team-sprite" }), d.default.createElement("span", { className: (0, m.className)({ messageNumber: 1, active: l.length }) }, l.length)), d.default.createElement("div", { className: (0, m.className)({ messageDropdown: 1, active: u }) }, d.default.createElement("div", { className: "trangle" }, d.default.createElement("span", { className: "top" }), d.default.createElement("span", { className: "down" })), d.default.createElement("div", { className: "message-header" }, d.default.createElement("span", { className: "header-text" }, "消息通知"), d.default.createElement("span", { className: (0, m.className)({ messageReadAll: 1, tooltip: 1, active: l.length }), onClick: r, "data-tooltip": "全部已读" }, d.default.createElement("img", { className: "m-icon", src: x })), d.default.createElement("a", { className: "message-config tooltip hicon icon-config", "data-tooltip": "消息设置", href: "/profile?tab=notification" })), d.default.createElement("div", { className: "message-content" }, d.default.createElement("div", { className: (0, m.className)({ noMessage: 1, messageContentNull: 1, active: 0 === l.length }) }, "没有新通知"), d.default.createElement("ul", { style: { maxHeight: c } }, d.default.createElement(f.default, { transitionName: "message-fade", transitionEnterTimeout: 1, transitionLeaveTimeout: 300 }, l.map(function(e) {
                        return d.default.createElement(b.default, s({ key: e.id, message: e }, a)) })))), d.default.createElement("div", { className: "message-footer" }, d.default.createElement("a", { href: "/notifications" }, "查看全部")))) } }]), t }(l.Component);
    t.default = A, A.propTypes = { messages: l.PropTypes.array.isRequired, clickReadAll: l.PropTypes.func.isRequired }, e.exports = t.default }, function(e, t, n) { "use strict";

    function r(e) {
        var t = "transition" + e + "Timeout",
            n = "transition" + e;
        return function(e) {
            if (e[n]) {
                if (null == e[t]) return new Error(t + " wasn't supplied to ReactCSSTransitionGroup: this can cause unreliable animations and won't be supported in a future version of React. See https://fb.me/react-animation-transition-group-timeout for more information.");
                if ("number" != typeof e[t]) return new Error(t + " must be a number (in milliseconds)") } } }
    var i = n(8),
        a = n(44),
        o = n(656),
        s = n(658),
        c = i.createClass({ displayName: "ReactCSSTransitionGroup", propTypes: { transitionName: s.propTypes.name, transitionAppear: i.PropTypes.bool, transitionEnter: i.PropTypes.bool, transitionLeave: i.PropTypes.bool, transitionAppearTimeout: r("Appear"), transitionEnterTimeout: r("Enter"), transitionLeaveTimeout: r("Leave") }, getDefaultProps: function() {
                return { transitionAppear: !1, transitionEnter: !0, transitionLeave: !0 } }, _wrapChild: function(e) {
                return i.createElement(s, { name: this.props.transitionName, appear: this.props.transitionAppear, enter: this.props.transitionEnter, leave: this.props.transitionLeave, appearTimeout: this.props.transitionAppearTimeout, enterTimeout: this.props.transitionEnterTimeout, leaveTimeout: this.props.transitionLeaveTimeout }, e) }, render: function() {
                return i.createElement(o, a({}, this.props, { childFactory: this._wrapChild })) } });
    e.exports = c }, function(e, t, n) { "use strict";
    var r = n(8),
        i = n(657),
        a = n(44),
        o = n(20),
        s = r.createClass({ displayName: "ReactTransitionGroup", propTypes: { component: r.PropTypes.any, childFactory: r.PropTypes.func }, getDefaultProps: function() {
                return { component: "span", childFactory: o.thatReturnsArgument } }, getInitialState: function() {
                return { children: i.getChildMapping(this.props.children) } }, componentWillMount: function() { this.currentlyTransitioningKeys = {}, this.keysToEnter = [], this.keysToLeave = [] }, componentDidMount: function() {
                var e = this.state.children;
                for (var t in e) e[t] && this.performAppear(t) }, componentWillReceiveProps: function(e) {
                var t = i.getChildMapping(e.children),
                    n = this.state.children;
                this.setState({ children: i.mergeChildMappings(n, t) });
                var r;
                for (r in t) {
                    var a = n && n.hasOwnProperty(r);!t[r] || a || this.currentlyTransitioningKeys[r] || this.keysToEnter.push(r) }
                for (r in n) {
                    var o = t && t.hasOwnProperty(r);!n[r] || o || this.currentlyTransitioningKeys[r] || this.keysToLeave.push(r) } }, componentDidUpdate: function() {
                var e = this.keysToEnter;
                this.keysToEnter = [], e.forEach(this.performEnter);
                var t = this.keysToLeave;
                this.keysToLeave = [], t.forEach(this.performLeave) }, performAppear: function(e) { this.currentlyTransitioningKeys[e] = !0;
                var t = this.refs[e];
                t.componentWillAppear ? t.componentWillAppear(this._handleDoneAppearing.bind(this, e)) : this._handleDoneAppearing(e) }, _handleDoneAppearing: function(e) {
                var t = this.refs[e];
                t.componentDidAppear && t.componentDidAppear(), delete this.currentlyTransitioningKeys[e];
                var n = i.getChildMapping(this.props.children);
                n && n.hasOwnProperty(e) || this.performLeave(e) }, performEnter: function(e) { this.currentlyTransitioningKeys[e] = !0;
                var t = this.refs[e];
                t.componentWillEnter ? t.componentWillEnter(this._handleDoneEntering.bind(this, e)) : this._handleDoneEntering(e) }, _handleDoneEntering: function(e) {
                var t = this.refs[e];
                t.componentDidEnter && t.componentDidEnter(), delete this.currentlyTransitioningKeys[e];
                var n = i.getChildMapping(this.props.children);
                n && n.hasOwnProperty(e) || this.performLeave(e) }, performLeave: function(e) { this.currentlyTransitioningKeys[e] = !0;
                var t = this.refs[e];
                t.componentWillLeave ? t.componentWillLeave(this._handleDoneLeaving.bind(this, e)) : this._handleDoneLeaving(e) }, _handleDoneLeaving: function(e) {
                var t = this.refs[e];
                t.componentDidLeave && t.componentDidLeave(), delete this.currentlyTransitioningKeys[e];
                var n = i.getChildMapping(this.props.children);
                n && n.hasOwnProperty(e) ? this.performEnter(e) : this.setState(function(t) {
                    var n = a({}, t.children);
                    return delete n[e], { children: n } }) }, render: function() {
                var e = [];
                for (var t in this.state.children) {
                    var n = this.state.children[t];
                    n && e.push(r.cloneElement(this.props.childFactory(n), { ref: t, key: t })) }
                return r.createElement(this.props.component, this.props, e) } });
    e.exports = s }, function(e, t, n) { "use strict";
    var r = n(121),
        i = { getChildMapping: function(e) {
                return e ? r(e) : e }, mergeChildMappings: function(e, t) {
                function n(n) {
                    return t.hasOwnProperty(n) ? t[n] : e[n] }
                e = e || {}, t = t || {};
                var r = {},
                    i = [];
                for (var a in e) t.hasOwnProperty(a) ? i.length && (r[a] = i, i = []) : i.push(a);
                var o, s = {};
                for (var c in t) {
                    if (r.hasOwnProperty(c))
                        for (o = 0; o < r[c].length; o++) {
                            var u = r[c][o];
                            s[r[c][o]] = n(u) }
                    s[c] = n(c) }
                for (o = 0; o < i.length; o++) s[i[o]] = n(i[o]);
                return s } };
    e.exports = i }, function(e, t, n) { "use strict";
    var r = n(8),
        i = n(9),
        a = n(659),
        o = n(660),
        s = n(157),
        c = 17,
        u = r.createClass({ displayName: "ReactCSSTransitionGroupChild", propTypes: { name: r.PropTypes.oneOfType([r.PropTypes.string, r.PropTypes.shape({ enter: r.PropTypes.string, leave: r.PropTypes.string, active: r.PropTypes.string }), r.PropTypes.shape({ enter: r.PropTypes.string, enterActive: r.PropTypes.string, leave: r.PropTypes.string, leaveActive: r.PropTypes.string, appear: r.PropTypes.string, appearActive: r.PropTypes.string })]).isRequired, appear: r.PropTypes.bool, enter: r.PropTypes.bool, leave: r.PropTypes.bool, appearTimeout: r.PropTypes.number, enterTimeout: r.PropTypes.number, leaveTimeout: r.PropTypes.number }, transition: function(e, t, n) {
                var r = i.findDOMNode(this);
                if (!r) return void(t && t());
                var s = this.props.name[e] || this.props.name + "-" + e,
                    c = this.props.name[e + "Active"] || s + "-active",
                    u = null,
                    l = function(e) { e && e.target !== r || (clearTimeout(u), a.removeClass(r, s), a.removeClass(r, c), o.removeEndEventListener(r, l), t && t()) };
                a.addClass(r, s), this.queueClass(c), n ? (u = setTimeout(l, n), this.transitionTimeouts.push(u)) : o.addEndEventListener(r, l) }, queueClass: function(e) { this.classNameQueue.push(e), this.timeout || (this.timeout = setTimeout(this.flushClassNameQueue, c)) }, flushClassNameQueue: function() { this.isMounted() && this.classNameQueue.forEach(a.addClass.bind(a, i.findDOMNode(this))), this.classNameQueue.length = 0, this.timeout = null }, componentWillMount: function() { this.classNameQueue = [], this.transitionTimeouts = [] }, componentWillUnmount: function() { this.timeout && clearTimeout(this.timeout), this.transitionTimeouts.forEach(function(e) { clearTimeout(e) }) }, componentWillAppear: function(e) { this.props.appear ? this.transition("appear", e, this.props.appearTimeout) : e() }, componentWillEnter: function(e) { this.props.enter ? this.transition("enter", e, this.props.enterTimeout) : e() }, componentWillLeave: function(e) { this.props.leave ? this.transition("leave", e, this.props.leaveTimeout) : e() }, render: function() {
                return s(this.props.children) } });
    e.exports = u }, function(e, t, n) { "use strict";
    var r = n(18),
        i = { addClass: function(e, t) {
                return /\s/.test(t) ? r(!1) : void 0, t && (e.classList ? e.classList.add(t) : i.hasClass(e, t) || (e.className = e.className + " " + t)), e }, removeClass: function(e, t) {
                return /\s/.test(t) ? r(!1) : void 0, t && (e.classList ? e.classList.remove(t) : i.hasClass(e, t) && (e.className = e.className.replace(new RegExp("(^|\\s)" + t + "(?:\\s|$)", "g"), "$1").replace(/\s+/g, " ").replace(/^\s*|\s*$/g, ""))), e }, conditionClass: function(e, t, n) {
                return (n ? i.addClass : i.removeClass)(e, t) }, hasClass: function(e, t) {
                return /\s/.test(t) ? r(!1) : void 0, e.classList ? !!t && e.classList.contains(t) : (" " + e.className + " ").indexOf(" " + t + " ") > -1 } };
    e.exports = i }, function(e, t, n) { "use strict";

    function r() {
        var e = document.createElement("div"),
            t = e.style; "AnimationEvent" in window || delete s.animationend.animation, "TransitionEvent" in window || delete s.transitionend.transition;
        for (var n in s) {
            var r = s[n];
            for (var i in r)
                if (i in t) { c.push(r[i]);
                    break } } }

    function i(e, t, n) { e.addEventListener(t, n, !1) }

    function a(e, t, n) { e.removeEventListener(t, n, !1) }
    var o = n(14),
        s = { transitionend: { transition: "transitionend", WebkitTransition: "webkitTransitionEnd", MozTransition: "mozTransitionEnd", OTransition: "oTransitionEnd", msTransition: "MSTransitionEnd" }, animationend: { animation: "animationend", WebkitAnimation: "webkitAnimationEnd", MozAnimation: "mozAnimationEnd", OAnimation: "oAnimationEnd", msAnimation: "MSAnimationEnd" } },
        c = [];
    o.canUseDOM && r();
    var u = { addEndEventListener: function(e, t) {
            return 0 === c.length ? void window.setTimeout(t, 0) : void c.forEach(function(n) { i(e, n, t) }) }, removeEndEventListener: function(e, t) { 0 !== c.length && c.forEach(function(n) { a(e, n, t) }) } };
    e.exports = u }, function(e, t) { "use strict";

    function n(e) {
        var t = Object.keys(e).map(function(t) {
            return e[t] ? r(t) : null }).filter(function(e) {
            return e });
        return t.join(" ") }

    function r(e) {
        return e.replace(i, "$1-$2").toLowerCase() }
    Object.defineProperty(t, "__esModule", { value: !0 }), t.className = n;
    var i = /([a-z\d])([A-Z])/g }, function(e, t, n) { "use strict";

    function r(e) {
        return e && e.__esModule ? e : { default: e } }

    function i(e, t, n) {
        return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e }

    function a(e) {
        var t, n = (t = {}, i(t, h.FILE_TYPE_SHEET, "sheet"), i(t, h.FILE_TYPE_DOCUMENT, "document"), i(t, h.FILE_TYPE_FOLDER, "folder"), i(t, h.FILE_TYPE_TEAM, "team"), t)[e];
        return (0, f.getIcon)(n) }

    function o(e, t) {
        return [l.default.createElement("button", { key: "0", className: "m-action btn", onClick: e }, "忽略"), l.default.createElement("button", { key: "1", className: "m-action btn btn-ok", onClick: t }, "确认加入")] }

    function s(e) {
        return l.default.createElement("button", { className: "m-action btn", disabled: !0 }, e ? "已加入" : "已忽略") }

    function c(e) {
        var t = e.clickMsg,
            n = e.clickCheck,
            r = e.message,
            i = e.joinTeamId,
            c = e.clickAccept,
            u = r.notification,
            h = r.formattedTime,
            m = r.id,
            v = r.is_read,
            g = u.file,
            w = u.user;
        return l.default.createElement("li", { className: (0, d.className)({ mLi: 1, isRead: v }), onClick: function() {
                return t(m) }, title: g.name }, l.default.createElement("img", { src: w.avatar, className: "m-avatar" }), l.default.createElement("div", { className: "m-main" }, l.default.createElement("div", { className: "m-content" }, l.default.createElement("strong", null, w.name + " "), l.default.createElement("span", null, u.shortMessage)), l.default.createElement("div", { className: "m-file m-weak-text" }, l.default.createElement("span", null, l.default.createElement("img", { className: "m-icon", src: a(g.type) })), l.default.createElement("span", null, g.shortName))), g.canChoice ? l.default.createElement("div", { onClick: p.stop }, v ? s(g.id === i) : o(function() {
            return n(m) }, function() {
            return c(g.id, m) })) : l.default.createElement("div", { className: "m-datetime" }, l.default.createElement("span", { className: "m-weak-text" }, h), l.default.createElement("p", null), !v && l.default.createElement("img", { className: "m-check", src: (0, f.getIcon)("check"), onClick: function(e) {
                return (0, p.stop)(e) && n(m) }, title: "标记为已读" }))) }
    Object.defineProperty(t, "__esModule", { value: !0 }), t.default = c;
    var u = n(7),
        l = r(u),
        d = n(661),
        p = n(201),
        f = n(639),
        h = n(653);
    c.propTypes = { message: u.PropTypes.object.isRequired, clickMsg: u.PropTypes.func.isRequired, clickCheck: u.PropTypes.func.isRequired, clickAccept: u.PropTypes.func.isRequired, joinTeamId: u.PropTypes.number }, e.exports = t.default }, function(e, t, n) { "use strict";

    function r(e) {
        return e && e.__esModule ? e : { default: e } }

    function i(e) {
        var t = e.data,
            n = e.desktopNotification,
            r = window.cow,
            i = r.desktopNotification,
            o = r.currentUser,
            s = r.pageType,
            c = r.currentFile,
            u = i && n && t.notification.user.id !== o.id && "doc" === s && c.id === t.notification.file_id;
        u && a(t.notification.file.name, t.notification.user.name + " " + t.notification.msg, { icon: t.notification.user.avatar }) }

    function a(e, t, n, r) {
        var i = window.Notification;
        if (void 0 === i) return !1;
        var a = function() {
            var a = new i(e, o({ body: t.replace("<a", "@<a") }, n));
            a.onclick = r, setTimeout(function() {
                return a.close() }, 6e3) }; "granted" === i.permission ? a() : i.requestPermission().then(function(e) {
            return "granted" === e && a() }) }
    Object.defineProperty(t, "__esModule", { value: !0 });
    var o = Object.assign || function(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]) }
            return e },
        s = n(197),
        c = r(s),
        u = n(186);
    r(u);
    t.default = function() { c.default.bind("Notification_v2", i) }, e.exports = t.default }, function(e, t, n) { "use strict";

    function r(e) {
        return e && e.__esModule ? e : { default: e } }
    Object.defineProperty(t, "__esModule", { value: !0 });
    var i = n(512),
        a = r(i);
    t.default = function(e) {
        var t = e.guid,
            r = e.isAjaxForce;
        n.e(8, function() {
            var e = n(665).ListContainer,
                i = n(686);
            a.default.list.show(), i({ guid: t, ListContainer: e, isAjaxForce: r }) }) }, e.exports = t.default }, , , , , , , , , , , , , , , , , , , , , , , , , , , function(e, t, n) { "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 }), t.default = function(e, t) { n.e(9, function() {
            var r = n(692).initDoc;
            r(e, t) }) }, e.exports = t.default }, , , , function(e, t, n) { "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 }), t.default = function(e, t) { n.e(5, function(r) {
            var i = n(383),
                a = n(402).SpreadsheetContainer,
                o = n(509);
            n(189);
            n(400), o({ isReadonly: !1, Cooperation: i, SpreadsheetContainer: a, guid: e, sheetId: t }) }) }, e.exports = t.default }, function(e, t, n) {
    var r, i;
    (function(a) {
        var o = function(e, t) {
                function n() { this.constructor = e }
                for (var r in t) s.call(t, r) && (e[r] = t[r]);
                return n.prototype = t.prototype, e.prototype = new n, e.__super__ = t.prototype, e },
            s = {}.hasOwnProperty;
        r = [n(189), n(508), n(515)], i = function(e, t, n) {
            var r;
            return new(r = function(t) {
                function r() {
                    return r.__super__.constructor.apply(this, arguments) }
                return o(r, t), r.prototype.init = function() {
                    return this.$editor = a("#innerdocbody"), this.$pad = a("#pad-view"), this.initConfig(), this.initBinding() }, r.prototype.initConfig = function() {
                    return this.metaKey = e.isMac() ? "command" : "ctrl", this.baseConfig = "shift+" + this.metaKey + "+", this.docConfig = { up: "handleFontUp", down: "handleFontDown", p: "handleComment", k: "handleTitle", u: 'li[data-key="insertorderedlist"]', i: 'li[data-key="insertunorderedlist"]', y: 'li[data-key="checklist"]', l: "handleHistory", o: "handleDirectory", x: "handleAddShare" }, this.listConfig = {}, this.commonConfig = { e: "handleNewHome" }, this.inDoc = "k u i y up down" }, r.prototype.initBinding = function() {
                    var e, t, n, r, i, o, s, c, u;
                    u = this, i = this.docConfig, e = function() {
                        var e, t;
                        return e = n, t = r, Mousetrap.bind(u.baseConfig + e, function(n) {
                            if (0 === u.$pad.length && (u.$pad = a("#pad-view")), 0 === u.$editor.length && (u.$editor = a("#innerdocbody")), n.preventDefault ? n.preventDefault() : n.returnValue = !1, !u.$pad.hasClass("hide") && (!u.inDoc.match(new RegExp("\\b" + e + "\\b")) || u.$editor.is(":focus")) && ("p" !== e || u.$editor.is(":focus") || a(".selection-comment-input").is(":focus"))) return "function" == typeof u[t] ? u[t]() : a(t).click(), !1 }) };
                    for (n in i) r = i[n], e();
                    o = this.listConfig, t = function() {
                        var e, t;
                        return e = n, t = r, Mousetrap.bind(e, function(e) {
                            var n;
                            if (n = window.cow.pageType, "home" === n || "folder" === n) return a(t).click(), e.preventDefault ? e.preventDefault() : e.returnValue = !1 }) };
                    for (n in o) r = o[n], t();
                    s = this.commonConfig, c = [];
                    for (n in s) r = s[n], c.push(function() {
                        var e, t;
                        return e = n, t = r, Mousetrap.bind(u.baseConfig + e, function(e) {
                            return u[t](), e.preventDefault ? e.preventDefault() : e.returnValue = !1 }) }());
                    return c }, r.prototype.handleFontUp = function() {
                    return this.handleFontChange("up") }, r.prototype.handleFontDown = function() {
                    return this.handleFontChange("down") }, r.prototype.handleComment = function() {
                    var e, t, n;
                    return n = a("#select-comment"), t = a(".close-temp"), e = a(".temp-list"), "none" === window.getComputedStyle(e[0]).getPropertyValue("display") ? n.click() : t.click() }, r.prototype.handleFontChange = function(e) {
                    var t, n, r;
                    if (window.getSelection().toString().length && (r = { 9: 1, 10: 2, 11: 3, 12: 4, 14: 5, 18: 6, 24: 7, 30: 8, 36: 9 }, t = a(".size-txt").text())) return n = r[t], "up" === e ? n++ : n--, n = Math.min(Math.max(n, 1), 9), a("#size-list [data-value='" + n + "']").trigger("click", [!0]) }, r.prototype.handleTitle = function() {
                    var e, t, n;
                    return e = { "普通": -1, "小标题": 1, "中标题": 2, "大标题": 3 }, t = a(".type-txt").text(), n = e[t], 3 === n ? n = -1 : n === -1 ? n = 1 : n++, a(".font-type-item [data-value='" + n + "']").trigger("click", [!0]) }, r.prototype.handleHistory = function() {
                    var e, t, n, r;
                    return t = a("#doc-history"), r = a(".history-btn"), n = a("#doc-history .doc-sidebar-close"), e = a("#display-toolbar-btn"), t.hasClass("hide") ? (r.click(), e.removeClass("active")) : n.click() }, r.prototype.handleDirectory = function() {
                    var e, t, n, r;
                    return e = a("#doc-directory"), n = a(".directory-btn"), t = a("#doc-directory .doc-sidebar-close"), r = a("#display-toolbar-btn"), e.hasClass("hide") ? (n.click(), r.removeClass("active")) : t.click() }, r.prototype.handleAddShare = function() {
                    var e, t, r;
                    return r = a("#teamworker-setting"), t = a(".teamworker-inner"), e = a(".teamworker-close"), !r.hasClass("hide") && t.hasClass("share-menu") ? e.click() : new n("#teamworker-setting") }, r.prototype.handleNewHome = function() {
                    return window.open("http:///shimo.im/desktop") }, r }(e.DomModule))("body") }.apply(t, r), !(void 0 !== i && (e.exports = i)) }).call(t, n(1)) }, , , , , , , , , , function(e, t, n) {
    var r, i;
    (function(a) {
        r = [n(197), n(186)], i = function(e, t) {
            var n, r;
            return Object.defineProperty(window.cow, "currentFile", { get: function() {
                        return this._currentFile || {} }, set: function(e) {
                        return this._currentFile = e, e } }),
                Object.defineProperty(window.cow, "shareList", { get: function() {
                        return this._currentShareList || [] }, set: function(e) {
                        var t;
                        return this._currentShareList = e, t = {}, a.forEach(e, function(e, n) {
                            return e.index = n, t[e.id] = e }), cow.shareObj = t, e } }), window.cow.setCurrentFile = function(e, t) {
                    var n;
                    return t ? (n = window.cow.currentFile, n[t] = e, window.cow.currentFile = n) : window.cow.currentFile = e }, window.cow.updateDocCurrentFile = function(e) {
                    var t, n, r;
                    t = window.cow.currentFile.guid;
                    for (n in e) r = e[n], window.cow.currentFile[n] = r;
                    return window.cow.currentListByGuid[t] = window.cow.currentFile }, window.cow.appendCurrentFileAttribute = function(e, t) {
                    var n;
                    if (n = window.cow.currentFile, a.isArray(n[t])) return n[t].push(e), window.cow.currentFile = n }, n = !0, r = function() {
                    return n ? (window.cow.currentFile = window.cow.tempCurrentFile, n = !1) : window.cow.currentFile = window.cow.currentFile }, t.on("socket:connected", r), t.on("socket:reconnected", r)
        }.apply(t, r), !(void 0 !== i && (e.exports = i))
    }).call(t, n(4))
}, , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , function(e, t, n) {
    var r, i;
    (function(a, o) { r = [n(197)], i = function(e) {
            function t() {
                var e = localStorage.getItem(l);
                e !== i.text && (c.html(o.template(s)(i)).removeClass("hide"), u.addClass("maintenance")) }

            function n() { c.html("").addClass("hide"), u.removeClass("maintenance"), localStorage.setItem(l, i.text) }

            function r() { c.on("click", "a", function() { n() }), e.bind("Maintenance", function(e) { e.active ? (i = e, t(e)) : n() }) }
            var i, s = '<span>${text}</span><a href="javascript:void(0);" class="hicon icon-delete"></a>',
                c = a("#list-view-wrap>.maintenance"),
                u = a("body"),
                l = "maintenance_close";
            return { start: r } }.apply(t, r), !(void 0 !== i && (e.exports = i)) }).call(t, n(1), n(4)) }, , , , , , function(e, t, n) {
    (function(n) { "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }), t.default = function() {
            function e() { v.cacheDom = { feedbackWrap: n(".meiqia-feedback"), feedbackBtn: n(".meiqia-btn-show"), meiqiaPanel: n(), unreadMsgCount: n(".meiqia-msg-count") }, v.meiqiaInited = !1, v.meiqiaIsReady = !1, v.hasLoadedMeiqia = !1, v.wantShowMe = !1, v.veryMuchWantShowMe = !1, v.unreadMsgCount = 0, v.clickedBtn = !1 }

            function t() { v.cacheDom.feedbackBtn.on("click", function() { v.clickedBtn = !0, s() }) }

            function r() { t();
                var e = 12e4;
                a() && (e = 1e4), v.meiqiaLoadTimerId = setTimeout(function() { i() && o() }, e) }

            function i() {
                return v.cacheDom.feedbackWrap.length > 0 }

            function a() {
                var e = window.localStorage.getItem("shimo_last_feedback_time");
                if (e) { e = +e;
                    var t = (new Date).getTime(),
                        n = t - e,
                        r = 864e5;
                    if (n < r) return !0 }
                return !1 }

            function o() {! function(e, t, n, r, i, a, o) { e[i] = e[i] || function() {
                        (e[i].a = e[i].a || []).push(arguments) }, a = t.createElement(n), o = t.getElementsByTagName(n)[0], a.async = !0, a.src = r, o.parentNode.insertBefore(a, o) }(window, document, "script", "//eco-api.meiqia.com/dist/meiqia.js", "_MEIQIA"), window._MEIQIA("entId", "12319"), window._MEIQIA("manualInit", !0), window._MEIQIA("withoutBtn", !0), window._MEIQIA("allSet", d), window._MEIQIA("getUnreadMsg", p), window._MEIQIA("getPanelVisibility", f);
                var e = setInterval(function() { "function" == typeof window._MEIQIA._INIT && (window._MEIQIA._INIT(), v.meiqiaInited = !0, clearInterval(e)) }, 200);
                v.hasLoadedMeiqia = !0 }

            function s() { v.hasLoadedMeiqia ? v.meiqiaInited || (window._MEIQIA._INIT(), v.wantShowMe = !0, v.meiqiaInited = !0) : (clearTimeout(v.meiqiaLoadTimerId), o(), v.veryMuchWantShowMe = !0), v.meiqiaIsReady && (window._MEIQIA._SHOWPANEL(), h(), u(), v.cacheDom.meiqiaPanel = n("#MEIQIA-PANEL-HOLDER")), window.localStorage.setItem("shimo_last_feedback_time", (new Date).getTime()) }

            function c() { window._MEIQIA._HIDEPANEL() }

            function u() { v.cacheDom.feedbackWrap.removeClass("active") }

            function l() { v.cacheDom.feedbackWrap.addClass("active") }

            function d() { v.meiqiaIsReady = !0, m(), (v.wantShowMe || v.veryMuchWantShowMe) && (v.wantShowMe = !1, v.veryMuchWantShowMe = !1, s()) }

            function p(e) { "object" == typeof e && e.length > 0 ? (v.unreadMsgCount += e.length, v.unreadMsgCount > 0 && v.cacheDom.unreadMsgCount.removeClass("hide").text(v.unreadMsgCount)) : "string" == typeof e && "hasBeenRead" === e && (v.cacheDom.unreadMsgCount.addClass("hide").text(v.unreadMsgCount), v.unreadMsgCount = 0) }

            function f(e) { "invisible" === e ? (l(), v.cacheDom.meiqiaPanel.removeClass("active")) : v.clickedBtn ? v.cacheDom.meiqiaPanel.addClass("active") : window._MEIQIA._HIDEPANEL() }

            function h() { 0 === v.cacheDom.meiqiaPanel.length && (v.cacheDom.meiqiaPanel = n("#MEIQIA-PANEL-HOLDER"));
                var e = v.cacheDom.meiqiaPanel,
                    t = e.find("iframe").filter(function() {
                        return n(this).hasClass("meiqia-iframe-hidebtn") });
                if (0 === t.length) {
                    var r = document.createElement("iframe");
                    r.className = "meiqia-iframe-hidebtn", e.append(r), e.on("click", ".meiqia-iframe-hidebtn", function() { e.removeClass("active"), setTimeout(function() { c() }, 300) }) } }

            function m() {
                var e = new Date(window.cow.currentUser.created_at),
                    t = "",
                    n = cow.currentUser.accountType; "personal_free" === n ? t = "基础免费" : "personal_premium" === n ? t = "个人高级" : "enterprise_dingding" === n ? t = "钉钉" : "enterprise_standard" === n && (t = "企业"), window._MEIQIA._SENDMETADATA({ avatar: window.cow.currentUser.avatar, email: window.cow.currentUser.email, name: window.cow.currentUser.name, "用户名": window.cow.currentUser.name, "邮箱": window.cow.currentUser.email, "注册时间": e.getFullYear() + "-" + (e.getMonth() + 1) + "-" + e.getDate(), "用户类型": t }) }
            var v = {};
            e(), r() }, e.exports = t.default }).call(t, n(1)) }, function(e, t, n) {
    var r, i;
    (function(a, o) { r = [n(183), n(184), n(186), n(321), n(299), n(189), n(397)], i = function(e, t, n, r, i, s, c) {
            var u;
            return u = { guid: s.genGuid(), sync: function() {
                    var e, n, r, i, a, o, u;
                    if (u = null != (i = window.cow) && null != (a = i.currentUser) ? a.id : void 0, u > 0) {
                        try { this.store = o = new c({ userId: u }) } catch (e) {
                            return n = e, void s.alert({ type: "error", title: "您的浏览器不支持离线编辑" }) }
                        if (e = o.getAll(), r = Object.keys(e), r.length > 0) return t.log("有" + r.length + "个文档需要同步"), this.syncOne(e[r[0]]) } }, syncOne: function(n) {
                    return n = a.pick(n, ["guid", "rev", "changeset", "apool"]), n.apool = JSON.stringify(n.apool), e.post("/api/file/" + n.guid + "/sync", n, function(e) {
                        return function(r) {
                            return t.log("offline sync success"), e.store.remove(n.guid) } }(this), function(e) {
                        return function(t) {
                            var a, s;
                            return s = r.unpack(n.changeset).charBank.trim(), s.length > 0 && (a = '文档离线同步出现错误，同步失败内容的纯文本为：<br /><span style="color:black;font-size: 13px;">' + s + "</span><br />你可以复制该文本，在文档打开后粘贴到文档。", i.show({ okCallback: function() {
                                    return window.location.href = "/doc/" + n.guid }, modal: !0, okText: "前往文档", headText: "非常抱歉", bodyText: a }), o.post("/api/log/sockets", { guid: n.guid, sockets: JSON.stringify(n.changeset) }, function() {})), e.store.remove(n.guid) } }(this)) } } }.apply(t, r), !(void 0 !== i && (e.exports = i)) }).call(t, n(4), n(1)) }]);
