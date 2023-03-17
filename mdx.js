!function () {
    var mdxExport;
    var MDXJS_PRODUCT_VERSION = "v4.9.35-1216";
    !function g(a, b, c) {
        function d(e, k) {
            if (!b[e]) {
                if (!a[e]) {
                    var i = "function" == typeof require && require;
                    if (!k && i) return i(e, !0);
                    if (f) return f(e, !0);
                    var j = new Error("Cannot find module '" + e + "'");
                    throw j.code = "MODULE_NOT_FOUND", j
                }
                var h = b[e] = {
                    exports: {}
                };
                a[e][0].call(h.exports, function(b) {
                    var c = a[e][1][b];
                    return d(c ? c : b)
                }, h, h.exports, g, a, b, c)
            }
            return b[e].exports
        }
        for (var f = "function" == typeof require && require, e = 0; e < c.length; e++) d(c[e]);
        return d
    }({
        1: [function(c, a, b) {
            (function(c) {
                (function() {
                    function ub(a, b) {
                        if (a !== b) {
                            var f = null === a,
                                g = a === e,
                                c = a === a,
                                h = null === b,
                                i = b === e,
                                d = b === b;
                            if (a > b && !h || !c || f && !i && d || g && d) return 1;
                            if (b > a && !f || !d || h && !g && c || i && c) return -1
                        }
                        return 0
                    }
    
                    function Eb(b, e, c) {
                        for (var d = b.length, a = c ? d : -1; c ? a-- : ++a < d;)
                            if (e(b[a], a, b)) return a;
                        return -1
                    }
    
                    function ta(a, b, d) {
                        if (b !== b) return Sc(a, d);
                        for (var c = d - 1, e = a.length; ++c < e;)
                            if (a[c] === b) return c;
                        return -1
                    }
    
                    function Ya(a) {
                        return null == a ? "" : a + ""
                    }
    
                    function Vc(a, b) {
                        return ub(a.criteria, b.criteria) || a.index - b.index
                    }
    
                    function Sc(b, e, c) {
                        for (var f = b.length, a = e + (c ? 0 : -1); c ? a-- : ++a < f;) {
                            var d = b[a];
                            if (d !== d) return a
                        }
                        return -1
                    }
    
                    function m(a) {
                        return !!a && "object" == typeof a
                    }
    
                    function d(a) {
                        if (m(a) && !h(a) && !(a instanceof R)) {
                            if (a instanceof z) return a;
                            if (i.call(a, "__chain__") && i.call(a, "__wrapped__")) return Nb(a)
                        }
                        return new z(a)
                    }
    
                    function Ca() {}
    
                    function z(a, b, c) {
                        this.__wrapped__ = a, this.__actions__ = c || [], this.__chain__ = !!b
                    }
    
                    function R(a) {
                        this.__wrapped__ = a, this.__actions__ = [], this.__dir__ = 1, this.__filtered__ = !1, this.__iteratees__ = [], this.__takeCount__ = Cc, this.__views__ = []
                    }
    
                    function Ha(a) {
                        var b = a ? a.length : 0;
                        for (this.data = {
                                hash: nb(null),
                                set: new vb
                            }; b--;) this.push(a[b])
                    }
    
                    function Rc(c, a) {
                        var b = c.data,
                            d = "string" == typeof a || j(a) ? b.set.has(a) : b.hash[a];
                        return d ? 0 : -1
                    }
    
                    function Qc(a) {
                        var b = this.data;
                        "string" == typeof a || j(a) ? b.set.add(a) : b.hash[a] = !0
                    }
    
                    function ma(c, a) {
                        var b = -1,
                            d = c.length;
                        for (a || (a = Array(d)); ++b < d;) a[b] = c[b];
                        return a
                    }
    
                    function V(a, c) {
                        for (var b = -1, d = a.length; ++b < d && c(a[b], b, a) !== !1;);
                        return a
                    }
    
                    function Pc(a, e) {
                        for (var b = -1, f = a.length, g = -1, c = []; ++b < f;) {
                            var d = a[b];
                            e(d, b, a) && (c[++g] = d)
                        }
                        return c
                    }
    
                    function Pa(b, e) {
                        for (var a = -1, c = b.length, d = Array(c); ++a < c;) d[a] = e(b[a], a, b);
                        return d
                    }
    
                    function Sa(a, c) {
                        for (var b = -1, d = c.length, e = a.length; ++b < d;) a[e + b] = c[b];
                        return a
                    }
    
                    function Nc(a, e, b, f) {
                        var c = -1,
                            d = a.length;
                        for (f && d && (b = a[++c]); ++c < d;) b = e(b, a[c], c, a);
                        return b
                    }
    
                    function Za(a, c) {
                        for (var b = -1, d = a.length; ++b < d;)
                            if (c(a[b], b, a)) return !0;
                        return !1
                    }
    
                    function Mc(b, a) {
                        return null == a ? b : qb(a, q(a), b)
                    }
    
                    function Lc(a, f) {
                        for (var b = -1, g = null == a, h = !g && t(a), j = h ? a.length : 0, i = f.length, c = Array(i); ++b < i;) {
                            var d = f[b];
                            h ? c[b] = N(d, j) ? a[d] : e : c[b] = g ? e : a[d]
                        }
                        return c
                    }
    
                    function qb(e, b, a) {
                        a || (a = {});
                        for (var c = -1, f = b.length; ++c < f;) {
                            var d = b[c];
                            a[d] = e[d]
                        }
                        return a
                    }
    
                    function sb(a, b, d) {
                        var c = typeof a;
                        return "function" == c ? b === e ? a : E(a, b, d) : null == a ? ja : "object" == c ? cb(a) : b === e ? ob(a) : Gc(a, b)
                    }
    
                    function T(a, k, m, r, f, c, d) {
                        var b;
                        if (m && (b = f ? m(a, r, f) : m(a)), b !== e) return b;
                        if (!j(a)) return a;
                        var p = h(a);
                        if (p) {
                            if (b = Zb(a), !k) return ma(a, b)
                        } else {
                            var i = o.call(a),
                                q = i == L;
                            if (i != l && i != Q && (!q || f)) return g[i] ? Qb(a, i, k) : f ? a : {};
                            if (K(a)) return f ? a : {};
                            if (b = Yb(q ? {} : a), !k) return Mc(b, a)
                        }
                        c || (c = []), d || (d = []);
                        for (var n = c.length; n--;)
                            if (c[n] == a) return d[n];
                        return c.push(a), d.push(b), (p ? V : ya)(a, function(f, e) {
                            b[e] = T(f, k, m, e, a, c, d)
                        }), b
                    }
    
                    function Kc(f, b) {
                        var i = f ? f.length : 0,
                            c = [];
                        if (!i) return c;
                        var g = -1,
                            d = ua(),
                            e = d === ta,
                            h = e && b.length >= jc ? kc(b) : null,
                            k = b.length;
                        h && (d = Rc, e = !1, b = h);
                        a: for (; ++g < i;) {
                            var a = f[g];
                            if (e && a === a) {
                                for (var j = k; j--;)
                                    if (b[j] === a) continue a;
                                c.push(a)
                            } else d(b, a, 0) < 0 && c.push(a)
                        }
                        return c
                    }
    
                    function Jc(b, c) {
                        var a = [];
                        return F(b, function(b, d, e) {
                            c(b, d, e) && a.push(b)
                        }), a
                    }
    
                    function Ja(b, c, d, e) {
                        var a;
                        return d(b, function(b, d, f) {
                            return c(b, d, f) ? (a = e ? d : b, !1) : void 0
                        }), a
                    }
    
                    function Y(d, e, c, a) {
                        a || (a = []);
                        for (var f = -1, g = d.length; ++f < g;) {
                            var b = d[f];
                            m(b) && t(b) && (c || h(b) || w(b)) ? e ? Y(b, e, c, a) : Sa(a, b) : c || (a[a.length] = b)
                        }
                        return a
                    }
    
                    function za(a, b) {
                        return $a(a, b, I)
                    }
    
                    function ya(a, b) {
                        return $a(a, b, q)
                    }
    
                    function Ta(e, a) {
                        for (var b = -1, f = a.length, g = -1, c = []; ++b < f;) {
                            var d = a[b];
                            B(e[d]) && (c[++g] = d)
                        }
                        return c
                    }
    
                    function Ua(a, c, d) {
                        if (null != a) {
                            a = n(a), d !== e && d in a && (c = [d]);
                            for (var b = 0, f = c.length; null != a && f > b;) a = n(a)[c[b++]];
                            return b && b == f ? a : e
                        }
                    }
    
                    function na(a, b, c, d, e, f) {
                        return a === b ? !0 : null == a || null == b || !j(a) && !m(b) ? a !== a && b !== b : Ic(a, b, na, c, d, e, f)
                    }
    
                    function Ic(a, b, m, p, j, c, d) {
                        var g = h(a),
                            q = h(b),
                            e = C,
                            f = C;
                        g || (e = o.call(a), e == Q ? e = l : e != l && (g = M(a))), q || (f = o.call(b), f == Q ? f = l : f != l && (q = M(b)));
                        var n = e == l && !K(a),
                            u = f == l && !K(b),
                            r = e == f;
                        if (r && !g && !n) return ac(a, b, e);
                        if (!j) {
                            var s = n && i.call(a, "__wrapped__"),
                                t = u && i.call(b, "__wrapped__");
                            if (s || t) return m(s ? a.value() : a, t ? b.value() : b, p, j, c, d)
                        }
                        if (!r) return !1;
                        c || (c = []), d || (d = []);
                        for (var k = c.length; k--;)
                            if (c[k] == a) return d[k] == b;
                        c.push(a), d.push(b);
                        var v = (g ? bc : _b)(a, b, m, p, j, c, d);
                        return c.pop(), d.pop(), v
                    }
    
                    function Hc(b, f, d) {
                        var c = f.length,
                            j = c,
                            l = !d;
                        if (null == b) return !j;
                        for (b = n(b); c--;) {
                            var a = f[c];
                            if (l && a[2] ? a[1] !== b[a[0]] : !(a[0] in b)) return !1
                        }
                        for (; ++c < j;) {
                            a = f[c];
                            var g = a[0],
                                h = b[g],
                                k = a[1];
                            if (l && a[2]) {
                                if (h === e && !(g in b)) return !1
                            } else {
                                var i = d ? d(h, k, g) : e;
                                if (!(i === e ? na(k, h, d, !0) : i)) return !1
                            }
                        }
                        return !0
                    }
    
                    function ab(a, c) {
                        var d = -1,
                            b = t(a) ? Array(a.length) : [];
                        return F(a, function(a, e, f) {
                            b[++d] = c(a, e, f)
                        }), b
                    }
    
                    function cb(d) {
                        var a = $b(d);
                        if (1 == a.length && a[0][2]) {
                            var b = a[0][0],
                                c = a[0][1];
                            return function(a) {
                                return null == a ? !1 : (a = n(a), a[b] === c && (c !== e || b in a))
                            }
                        }
                        return function(b) {
                            return Hc(b, a)
                        }
                    }
    
                    function Gc(a, b) {
                        var c = h(a),
                            d = rb(a) && tb(b),
                            f = a + "";
                        return a = Fa(a),
                            function(g) {
                                if (null == g) return !1;
                                var h = f;
                                if (g = n(g), (c || !d) && !(h in g)) {
                                    if (g = 1 == a.length ? g : Ua(g, xa(a, 0, -1)), null == g) return !1;
                                    h = Ka(a), g = n(g)
                                }
                                return g[h] === b ? b !== e || h in g : na(b, g[h], e, !0)
                            }
                    }
    
                    function eb(a, b, c, d, f) {
                        if (!j(a)) return a;
                        var g = t(b) && (h(b) || M(b)),
                            i = g ? e : q(b);
                        return V(i || b, function(k, h) {
                            if (i && (h = k, k = b[h]), m(k)) d || (d = []), f || (f = []), Dc(a, b, h, eb, c, d, f);
                            else {
                                var l = a[h],
                                    j = c ? c(l, k, h, a, b) : e,
                                    n = j === e;
                                n && (j = k), j === e && (!g || h in a) || !n && (j === j ? j === l : l !== l) || (a[h] = j)
                            }
                        }), a
                    }
    
                    function Dc(f, m, d, n, i, g, l) {
                        for (var j = g.length, c = m[d]; j--;)
                            if (g[j] == c) return void(f[d] = l[j]);
                        var a = f[d],
                            b = i ? i(a, c, d, f, m) : e,
                            k = b === e;
                        k && (b = c, t(c) && (h(c) || M(c)) ? b = h(a) ? a : t(a) ? ma(a) : [] : wa(c) || w(c) ? b = w(a) ? gb(a) : wa(a) ? a : {} : k = !1), g.push(c), l.push(b), k ? f[d] = n(b, c, i, g, l) : (b === b ? b !== a : a === a) && (f[d] = b)
                    }
    
                    function hb(a) {
                        return function(b) {
                            return null == b ? e : n(b)[a]
                        }
                    }
    
                    function Ac(a) {
                        var b = a + "";
                        return a = Fa(a),
                            function(c) {
                                return Ua(c, a, b)
                            }
                    }
    
                    function zc(b, c) {
                        for (var d = b ? c.length : 0; d--;) {
                            var a = c[d];
                            if (a != e && N(a)) {
                                var e = a;
                                va.call(b, a, 1)
                            }
                        }
                        return b
                    }
    
                    function wc(c, d, a, b, e) {
                        return e(c, function(c, e, f) {
                            a = b ? (b = !1, c) : d(a, c, e, f)
                        }), a
                    }
    
                    function xa(f, a, b) {
                        var d = -1,
                            c = f.length;
                        a = null == a ? 0 : +a || 0, 0 > a && (a = -a > c ? 0 : c + a), b = b === e || b > c ? c : +b || 0, 0 > b && (b += c), c = a > b ? 0 : b - a >>> 0, a >>>= 0;
                        for (var g = Array(c); ++d < c;) g[d] = f[d + a];
                        return g
                    }
    
                    function vc(b, c) {
                        var a;
                        return F(b, function(b, d, e) {
                            return a = c(b, d, e), !a
                        }), !!a
                    }
    
                    function uc(a, c) {
                        var b = a.length;
                        for (a.sort(c); b--;) a[b] = a[b].value;
                        return a
                    }
    
                    function tc(e, b) {
                        for (var a = -1, c = b.length, d = Array(c); ++a < c;) d[a] = e[b[a]];
                        return d
                    }
    
                    function sc(c, a, g) {
                        var d = 0,
                            b = c ? c.length : d;
                        if ("number" == typeof a && a === a && Fc >= b) {
                            for (; b > d;) {
                                var e = d + b >>> 1,
                                    f = c[e];
                                (g ? a >= f : a > f) && null !== f ? d = e + 1 : b = e
                            }
                            return b
                        }
                        return qc(c, a, ja, g)
                    }
    
                    function qc(f, a, k, c) {
                        a = k(a);
                        for (var g = 0, d = f ? f.length : 0, n = a !== a, o = null === a, m = a === e; d > g;) {
                            var i = xc((g + d) / 2),
                                b = k(f[i]),
                                j = b !== e,
                                h = b === b;
                            if (n) var l = h || c;
                            else l = o ? h && j && (c || null != b) : m ? h && (c || j) : null == b ? !1 : c ? a >= b : a > b;
                            l ? g = i + 1 : d = i
                        }
                        return Bc(d, Ec)
                    }
    
                    function E(a, b, c) {
                        if ("function" != typeof a) return ja;
                        if (b === e) return a;
                        switch (c) {
                            case 1:
                                return function(c) {
                                    return a.call(b, c)
                                };
                            case 3:
                                return function(c, d, e) {
                                    return a.call(b, c, d, e)
                                };
                            case 4:
                                return function(c, d, e, f) {
                                    return a.call(b, c, d, e, f)
                                };
                            case 5:
                                return function(c, d, e, f, g) {
                                    return a.call(b, c, d, e, f, g)
                                }
                        }
                        return function() {
                            return a.apply(b, arguments)
                        }
                    }
    
                    function Ia(a) {
                        var b = new rc(a.byteLength),
                            c = new oa(b);
                        return c.set(new oa(a)), b
                    }
    
                    function pc(a) {
                        return ia(function(f, d) {
                            var h = -1,
                                b = null == f ? 0 : d.length,
                                c = b > 2 ? d[b - 2] : e,
                                i = b > 2 ? d[2] : e,
                                g = b > 1 ? d[b - 1] : e;
                            for ("function" == typeof c ? (c = E(c, g, 5), b -= 2) : (c = "function" == typeof g ? g : e, b -= c ? 1 : 0), i && s(d[0], d[1], i) && (c = 3 > b ? e : c, b = 1); ++h < b;) {
                                var j = d[h];
                                j && a(f, j, c)
                            }
                            return f
                        })
                    }
    
                    function nc(b, a) {
                        return function(c, f) {
                            var e = c ? Aa(c) : 0;
                            if (!u(e)) return b(c, f);
                            for (var d = a ? e : -1, g = n(c);
                                (a ? d-- : ++d < e) && f(g[d], d, g) !== !1;);
                            return c
                        }
                    }
    
                    function mc(a) {
                        return function(b, h, i) {
                            for (var d = n(b), e = i(b), f = e.length, c = a ? f : -1; a ? c-- : ++c < f;) {
                                var g = e[c];
                                if (h(d[g], g, d) === !1) break
                            }
                            return b
                        }
                    }
    
                    function kc(a) {
                        return nb && vb ? new Ha(a) : null
                    }
    
                    function xb(a, b) {
                        return function(c, d, g) {
                            if (d = v(d, g, 3), h(c)) {
                                var f = Eb(c, d, b);
                                return f > -1 ? c[f] : e
                            }
                            return Ja(c, d, a)
                        }
                    }
    
                    function hc(a) {
                        return function(c, b, d) {
                            return b = v(b, d, 3), Ja(c, b, a, !0)
                        }
                    }
    
                    function gc(a, b) {
                        return function(c, d, f) {
                            return "function" == typeof d && f === e && h(c) ? a(c, d) : b(c, E(d, f, 3))
                        }
                    }
    
                    function ec(a, b) {
                        return function(c, d, f, g) {
                            var i = arguments.length < 3;
                            return "function" == typeof d && g === e && h(c) ? a(c, d, f, i) : wc(c, v(d, g, 4), f, i, b)
                        }
                    }
    
                    function bc(l, g, m, c, a, j, i) {
                        var d = -1,
                            h = l.length,
                            k = g.length;
                        if (h != k && !(a && k > h)) return !1;
                        for (; ++d < h;) {
                            var b = l[d],
                                f = g[d],
                                n = c ? c(a ? f : b, a ? b : f, d) : e;
                            if (n !== e) {
                                if (n) continue;
                                return !1
                            }
                            if (a) {
                                if (!Za(g, function(d) {
                                        return b === d || m(b, d, c, a, j, i)
                                    })) return !1
                            } else if (b !== f && !m(b, f, c, a, j, i)) return !1
                        }
                        return !0
                    }
    
                    function ac(a, b, c) {
                        switch (c) {
                            case S:
                            case P:
                                return +a == +b;
                            case y:
                                return a.name == b.name && a.message == b.message;
                            case D:
                                return a != +a ? b != +b : a == +b;
                            case O:
                            case x:
                                return a == b + ""
                        }
                        return !1
                    }
    
                    function _b(d, c, u, o, b, r, t) {
                        var k = q(d),
                            n = k.length,
                            v = q(c),
                            s = v.length;
                        if (n != s && !b) return !1;
                        for (var g = n; g--;) {
                            var a = k[g];
                            if (!(b ? a in c : i.call(c, a))) return !1
                        }
                        for (var j = b; ++g < n;) {
                            a = k[g];
                            var m = d[a],
                                l = c[a],
                                p = o ? o(b ? l : m, b ? m : l, a) : e;
                            if (!(p === e ? u(m, l, o, b, r, t) : p)) return !1;
                            j || (j = "constructor" == a)
                        }
                        if (!j) {
                            var f = d.constructor,
                                h = c.constructor;
                            if (f != h && "constructor" in d && "constructor" in c && !("function" == typeof f && f instanceof f && "function" == typeof h && h instanceof h)) return !1
                        }
                        return !0
                    }
    
                    function v(c, e, b) {
                        var a = d.callback || ka;
                        return a = a === ka ? sb : a, b ? a(c, e, b) : a
                    }
    
                    function ua(b, c, e) {
                        var a = d.indexOf || ra;
                        return a = a === ra ? ta : a, b ? a(b, c, e) : a
                    }
    
                    function $b(c) {
                        for (var a = ib(c), b = a.length; b--;) a[b][2] = tb(a[b][1]);
                        return a
                    }
    
                    function _(a, c) {
                        var b = null == a ? e : a[c];
                        return Da(b) ? b : e
                    }
    
                    function Zb(a) {
                        var c = a.length,
                            b = new a.constructor(c);
                        return c && "string" == typeof a[0] && i.call(a, "index") && (b.index = a.index, b.input = a.input), b
                    }
    
                    function Yb(b) {
                        var a = b.constructor;
                        return "function" == typeof a && a instanceof a || (a = Object), new a
                    }
    
                    function Qb(a, c, f) {
                        var b = a.constructor;
                        switch (c) {
                            case pa:
                                return Ia(a);
                            case S:
                            case P:
                                return new b(+a);
                            case ha:
                            case fa:
                            case ea:
                            case ca:
                            case ba:
                            case aa:
                            case $:
                            case Z:
                            case U:
                                b instanceof b && (b = r[c]);
                                var d = a.buffer;
                                return new b(f ? Ia(d) : d, a.byteOffset, a.length);
                            case D:
                            case x:
                                return new b(a);
                            case O:
                                var e = new b(a.source, Vb.exec(a));
                                e.lastIndex = a.lastIndex
                        }
                        return e
                    }
    
                    function t(a) {
                        return null != a && u(Aa(a))
                    }
    
                    function N(a, b) {
                        return a = "number" == typeof a || Xb.test(a) ? +a : -1, b = null == b ? db : b, a > -1 && a % 1 == 0 && b > a
                    }
    
                    function s(c, b, a) {
                        if (!j(a)) return !1;
                        var e = typeof b;
                        if ("number" == e ? t(a) && N(b, a.length) : "string" == e && b in a) {
                            var d = a[b];
                            return c === c ? c === d : d !== d
                        }
                        return !1
                    }
    
                    function rb(a, b) {
                        var c = typeof a;
                        if ("string" == c && Sb.test(a) || "number" == c) return !0;
                        if (h(a)) return !1;
                        var d = !Rb.test(a);
                        return d || null != b && a in n(b)
                    }
    
                    function u(a) {
                        return "number" == typeof a && a > -1 && a % 1 == 0 && db >= a
                    }
    
                    function tb(a) {
                        return a === a && !j(a)
                    }
    
                    function Pb(a, c) {
                        a = n(a);
                        for (var d = -1, f = c.length, e = {}; ++d < f;) {
                            var b = c[d];
                            b in a && (e[b] = a[b])
                        }
                        return e
                    }
    
                    function Ob(b, c) {
                        var a = {};
                        return za(b, function(b, d, e) {
                            c(b, d, e) && (a[d] = b)
                        }), a
                    }
    
                    function wb(a) {
                        for (var d = I(a), e = d.length, b = e && a.length, j = !!b && u(b) && (h(a) || w(a) || H(a)), f = -1, g = []; ++f < e;) {
                            var c = d[f];
                            (j && N(c, b) || i.call(a, c)) && g.push(c)
                        }
                        return g
                    }
    
                    function n(a) {
                        if (d.support.unindexedChars && H(a)) {
                            for (var b = -1, e = a.length, c = Object(a); ++b < e;) c[b] = a.charAt(b);
                            return c
                        }
                        return j(a) ? a : Object(a)
                    }
    
                    function Fa(a) {
                        if (h(a)) return a;
                        var b = [];
                        return Ya(a).replace(Tb, function(a, c, d, e) {
                            b.push(d ? e.replace(Ub, "$1") : c || a)
                        }), b
                    }
    
                    function Nb(a) {
                        return a instanceof R ? a.clone() : new z(a.__wrapped__, a.__chain__, ma(a.__actions__))
                    }
    
                    function Mb(b, a, c) {
                        var d = b ? b.length : 0;
                        return d ? ((c ? s(b, a, c) : null == a) && (a = 1), xa(b, 0 > a ? 0 : a)) : []
                    }
    
                    function Lb(a, b, c) {
                        var d = a ? a.length : 0;
                        return c && s(a, b, c) && (b = !1), d ? Y(a, b) : []
                    }
    
                    function ra(a, c, b) {
                        var e = a ? a.length : 0;
                        if (!e) return -1;
                        if ("number" == typeof b) b = 0 > b ? X(e + b, 0) : b;
                        else if (b) {
                            var d = sc(a, c);
                            return e > d && (c === c ? c === a[d] : a[d] !== a[d]) ? d : -1
                        }
                        return ta(a, c, b || 0)
                    }
    
                    function Ka(a) {
                        var b = a ? a.length : 0;
                        return b ? a[b - 1] : e
                    }
    
                    function Kb() {
                        var b = arguments,
                            a = b[0];
                        if (!a || !a.length) return a;
                        for (var d = 0, e = ua(), f = b.length; ++d < f;)
                            for (var c = 0, g = b[d];
                                (c = e(a, g, c)) > -1;) va.call(a, c, 1);
                        return a
                    }
    
                    function Jb(b, a, c) {
                        var d = b ? b.length : 0;
                        return d ? ((c ? s(b, a, c) : null == a) && (a = 1), xa(b, 0, 0 > a ? 0 : a)) : []
                    }
    
                    function Na(a, b) {
                        var d = -1,
                            f = a ? a.length : 0,
                            e = {};
                        for (!f || b || h(a[0]) || (b = []); ++d < f;) {
                            var c = a[d];
                            b ? e[c] = b[d] : c && (e[c[0]] = c[1])
                        }
                        return e
                    }
    
                    function Oa(b, a, c) {
                        var d = h(b) ? Pc : Jc;
                        return a = v(a, c, 3), d(b, a)
                    }
    
                    function qa(a, d, b, e) {
                        var c = a ? Aa(a) : 0;
                        return u(c) || (a = jb(a), c = a.length), b = "number" != typeof b || e && s(d, b, e) ? 0 : 0 > b ? X(c + b, 0) : b || 0, "string" == typeof a || !h(a) && H(a) ? c >= b && a.indexOf(d, b) > -1 : !!c && ua(a, d, b) > -1
                    }
    
                    function Qa(b, a, c) {
                        var d = h(b) ? Pa : ab;
                        return a = v(a, c, 3), d(b, a)
                    }
    
                    function Ra(c, a, b) {
                        var d = h(c) ? Za : vc;
                        return b && s(c, a, b) && (a = e), ("function" != typeof a || b !== e) && (a = v(a, b, 3)), d(c, a)
                    }
    
                    function Ib(b, a, c) {
                        if (null == b) return [];
                        c && s(b, a, c) && (a = e);
                        var d = -1;
                        a = v(a, c, 3);
                        var f = ab(b, function(b, c, e) {
                            return {
                                criteria: a(b, c, e),
                                index: ++d,
                                value: b
                            }
                        });
                        return uc(f, Vc)
                    }
    
                    function ia(b, a) {
                        if ("function" != typeof b) throw new TypeError(yb);
                        return a = X(a === e ? b.length - 1 : +a || 0, 0),
                            function() {
                                for (var d = arguments, c = -1, g = X(d.length - a, 0), e = Array(g); ++c < g;) e[c] = d[a + c];
                                switch (a) {
                                    case 0:
                                        return b.call(this, e);
                                    case 1:
                                        return b.call(this, d[0], e);
                                    case 2:
                                        return b.call(this, d[0], d[1], e)
                                }
                                var f = Array(a + 1);
                                for (c = -1; ++c < a;) f[c] = d[c];
                                return f[a] = e, b.apply(this, f)
                            }
                    }
    
                    function Hb(c, a, b, d) {
                        return a && "boolean" != typeof a && s(c, a, b) ? a = !1 : "function" == typeof a && (d = b, b = a, a = !1), "function" == typeof b ? T(c, a, E(b, d, 3)) : T(c, a)
                    }
    
                    function w(a) {
                        return m(a) && t(a) && i.call(a, "callee") && !la.call(a, "callee")
                    }
    
                    function Wa(b, c, a, f) {
                        a = "function" == typeof a ? E(a, f, 3) : e;
                        var d = a ? a(b, c) : e;
                        return d === e ? na(b, c, a) : !!d
                    }
    
                    function Gb(a) {
                        return m(a) && "string" == typeof a.message && o.call(a) == y
                    }
    
                    function B(a) {
                        return j(a) && o.call(a) == L
                    }
    
                    function j(a) {
                        var b = typeof a;
                        return !!a && ("object" == b || "function" == b)
                    }
    
                    function Fb(a) {
                        return bb(a) && a != +a
                    }
    
                    function Da(a) {
                        return null == a ? !1 : B(a) ? Ga.test(Ma.call(a)) : m(a) && (K(a) ? Ga : Wb).test(a)
                    }
    
                    function Db(a) {
                        return null === a
                    }
    
                    function bb(a) {
                        return "number" == typeof a || m(a) && o.call(a) == D
                    }
    
                    function wa(a) {
                        var c;
                        if (!m(a) || o.call(a) != l || K(a) || w(a) || !i.call(a, "constructor") && (c = a.constructor, "function" == typeof c && !(c instanceof c))) return !1;
                        var b;
                        return d.support.ownLast ? (za(a, function(d, a, c) {
                            return b = i.call(c, a), !1
                        }), b !== !1) : (za(a, function(c, a) {
                            b = a
                        }), b === e || i.call(a, b))
                    }
    
                    function H(a) {
                        return "string" == typeof a || m(a) && o.call(a) == x
                    }
    
                    function M(a) {
                        return m(a) && u(a.length) && !!f[o.call(a)]
                    }
    
                    function Cb(a) {
                        return a === e
                    }
    
                    function gb(a) {
                        return qb(a, I(a))
                    }
    
                    function I(a) {
                        if (null == a) return [];
                        j(a) || (a = Object(a));
                        var c = a.length,
                            m = d.support;
                        c = c && u(c) && (h(a) || w(a) || H(a)) && c || 0;
                        for (var n = a.constructor, f = -1, g = B(n) && n.prototype || A, r = g === a, e = Array(c), t = c > 0, z = m.enumErrorProps && (a === W || a instanceof Error), s = m.enumPrototypes && B(a); ++f < c;) e[f] = f + "";
                        for (var b in a) s && "prototype" == b || z && ("message" == b || "name" == b) || t && N(b, c) || "constructor" == b && (r || !i.call(a, b)) || e.push(b);
                        if (m.nonEnumShadows && a !== A) {
                            var p = a === lc ? x : a === W ? y : o.call(a),
                                v = k[p] || k[l];
                            for (p == l && (g = A), c = sa.length; c--;) {
                                b = sa[c];
                                var q = v[b];
                                r && q || (q ? !i.call(a, b) : a[b] === g[b]) || e.push(b)
                            }
                        }
                        return e
                    }
    
                    function ib(a) {
                        a = n(a);
                        for (var b = -1, c = q(a), d = c.length, e = Array(d); ++b < d;) {
                            var f = c[b];
                            e[b] = [f, a[f]]
                        }
                        return e
                    }
    
                    function jb(a) {
                        return tc(a, q(a))
                    }
    
                    function ka(a, b, c) {
                        return c && s(a, b, c) && (b = e), m(a) ? mb(a) : sb(a, b)
                    }
    
                    function ja(a) {
                        return a
                    }
    
                    function mb(a) {
                        return cb(T(a, !0))
                    }
    
                    function Bb(a, b, d) {
                        if (null == d) {
                            var k = j(b),
                                f = k ? q(b) : e,
                                c = f && f.length ? Ta(b, f) : e;
                            (c ? c.length : k) || (c = !1, d = b, b = a, a = this)
                        }
                        c || (c = Ta(b, q(b)));
                        var g = !0,
                            i = -1,
                            m = B(a),
                            n = c.length;
                        d === !1 ? g = !1 : j(d) && "chain" in d && (g = d.chain);
                        for (; ++i < n;) {
                            var h = c[i],
                                l = b[h];
                            a[h] = l, m && (a.prototype[h] = function(b) {
                                return function() {
                                    var d = this.__chain__;
                                    if (g || d) {
                                        var c = a(this.__wrapped__),
                                            e = c.__actions__ = ma(this.__actions__);
                                        return e.push({
                                            func: b,
                                            args: arguments,
                                            thisArg: a
                                        }), c.__chain__ = d, c
                                    }
                                    return b.apply(a, Sa([this.value()], arguments))
                                }
                            }(l))
                        }
                        return a
                    }
    
                    function ob(a) {
                        return rb(a) ? hb(a) : Ac(a)
                    }
    
                    function Ab(a) {
                        var b = ++oc;
                        return Ya(a) + b
                    }
                    var e, zb = "3.10.1",
                        jc = 200,
                        yb = "Expected a function",
                        Q = "[object Arguments]",
                        C = "[object Array]",
                        S = "[object Boolean]",
                        P = "[object Date]",
                        y = "[object Error]",
                        L = "[object Function]",
                        pb = "[object Map]",
                        D = "[object Number]",
                        l = "[object Object]",
                        O = "[object RegExp]",
                        _a = "[object Set]",
                        x = "[object String]",
                        Xa = "[object WeakMap]",
                        pa = "[object ArrayBuffer]",
                        ha = "[object Float32Array]",
                        fa = "[object Float64Array]",
                        ea = "[object Int8Array]",
                        ca = "[object Int16Array]",
                        ba = "[object Int32Array]",
                        aa = "[object Uint8Array]",
                        $ = "[object Uint8ClampedArray]",
                        Z = "[object Uint16Array]",
                        U = "[object Uint32Array]",
                        Rb = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\n\\]|\\.)*?\1)\]/,
                        Sb = /^\w*$/,
                        Tb = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\n\\]|\\.)*?)\2)\]/g,
                        Ub = /\\(\\)?/g,
                        Vb = /\w*$/,
                        Wb = /^\[object .+?Constructor\]$/,
                        Xb = /^\d+$/,
                        sa = ["constructor", "hasOwnProperty", "isPrototypeOf", "propertyIsEnumerable", "toLocaleString", "toString", "valueOf"],
                        f = {};
                    f[ha] = f[fa] = f[ea] = f[ca] = f[ba] = f[aa] = f[$] = f[Z] = f[U] = !0, f[Q] = f[C] = f[pa] = f[S] = f[P] = f[y] = f[L] = f[pb] = f[D] = f[l] = f[O] = f[_a] = f[x] = f[Xa] = !1;
                    var g = {};
                    g[Q] = g[C] = g[pa] = g[S] = g[P] = g[ha] = g[fa] = g[ea] = g[ca] = g[ba] = g[D] = g[l] = g[O] = g[x] = g[aa] = g[$] = g[Z] = g[U] = !0, g[y] = g[L] = g[pb] = g[_a] = g[Xa] = !1;
                    var ga = {
                            function: !0,
                            object: !0
                        },
                        da = ga[typeof b] && b && !b.nodeType && b,
                        J = ga[typeof a] && a && !a.nodeType && a,
                        cc = da && J && "object" == typeof c && c && c.Object && c,
                        dc = ga[typeof self] && self && self.Object && self,
                        Va = ga[typeof window] && window && window.Object && window,
                        fc = J && J.exports === da && da,
                        p = cc || Va !== (this && this.window) && Va || dc || this,
                        K = function() {
                            try {
                                Object({
                                    toString: 0
                                } + "")
                            } catch (a) {
                                return function() {
                                    return !1
                                }
                            }
                            return function(a) {
                                return "function" != typeof a.toString && "string" == typeof(a + "")
                            }
                        }(),
                        ic = Array.prototype,
                        W = Error.prototype,
                        A = Object.prototype,
                        lc = String.prototype,
                        Ma = Function.prototype.toString,
                        i = A.hasOwnProperty,
                        oc = 0,
                        o = A.toString,
                        Ga = RegExp("^" + Ma.call(i).replace(/[\\^$.*+?()[\]{}|]/g, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"),
                        rc = p.ArrayBuffer,
                        la = A.propertyIsEnumerable,
                        vb = _(p, "Set"),
                        va = ic.splice,
                        oa = p.Uint8Array,
                        nb = _(Object, "create"),
                        xc = Math.floor,
                        yc = _(Array, "isArray"),
                        lb = _(Object, "keys"),
                        X = Math.max,
                        Bc = Math.min,
                        Cc = Number.POSITIVE_INFINITY,
                        fb = 4294967295,
                        Ec = fb - 1,
                        Fc = fb >>> 1,
                        db = 9007199254740991,
                        r = {};
                    r[ha] = p.Float32Array, r[fa] = p.Float64Array, r[ea] = p.Int8Array, r[ca] = p.Int16Array, r[ba] = p.Int32Array, r[aa] = oa, r[$] = p.Uint8ClampedArray, r[Z] = p.Uint16Array, r[U] = p.Uint32Array;
                    var k = {};
                    k[C] = k[P] = k[D] = {
                        constructor: !0,
                        toLocaleString: !0,
                        toString: !0,
                        valueOf: !0
                    }, k[S] = k[x] = {
                        constructor: !0,
                        toString: !0,
                        valueOf: !0
                    }, k[y] = k[L] = k[O] = {
                        constructor: !0,
                        toString: !0
                    }, k[l] = {
                        constructor: !0
                    }, V(sa, function(a) {
                        for (var b in k)
                            if (i.call(k, b)) {
                                var c = k[b];
                                c[a] = i.call(c, a)
                            }
                    });
                    var G = d.support = {};
                    ! function(a) {
                        var b = function() {
                                this.x = a
                            },
                            d = {
                                0: a,
                                length: a
                            },
                            c = [];
                        b.prototype = {
                            valueOf: a,
                            y: a
                        };
                        for (var e in new b) c.push(e);
                        G.enumErrorProps = la.call(W, "message") || la.call(W, "name"), G.enumPrototypes = la.call(b, "prototype"), G.nonEnumShadows = !/valueOf/.test(c), G.ownLast = "x" != c[0], G.spliceObjects = (va.call(d, 0, 1), !d[0]), G.unindexedChars = "x" [0] + Object("x")[0] != "xx"
                    }(1, 0);
                    var Ea = function() {
                            function a() {}
                            return function(b) {
                                if (j(b)) {
                                    a.prototype = b;
                                    var c = new a;
                                    a.prototype = e
                                }
                                return c || {}
                            }
                        }(),
                        F = nc(ya),
                        $a = mc(),
                        Aa = hb("length"),
                        Oc = ia(function(b, a) {
                            a = Y(a);
                            var c = Lc(b, a);
                            return zc(b, a.sort(ub)), c
                        }),
                        La = xb(F),
                        kb = gc(V, F),
                        Ba = ec(Nc, F),
                        h = yc || function(a) {
                            return m(a) && u(a.length) && o.call(a) == C
                        },
                        Tc = pc(eb),
                        Uc = hc(ya),
                        q = lb ? function(a) {
                            var b = null == a ? e : a.constructor;
                            return "function" == typeof b && b.prototype === a || ("function" == typeof a ? d.support.enumPrototypes : t(a)) ? wb(a) : j(a) ? lb(a) : []
                        } : wb,
                        Wc = ia(function(b, a) {
                            if (null == b) return {};
                            if ("function" != typeof a[0]) {
                                var a = Pa(Y(a), String);
                                return Pb(b, Kc(I(b), a))
                            }
                            var c = E(a[0], a[1], 3);
                            return Ob(b, function(a, b, d) {
                                return !c(a, b, d)
                            })
                        });
                    d.prototype = Ca.prototype, z.prototype = Ea(Ca.prototype), z.prototype.constructor = z, R.prototype = Ea(Ca.prototype), R.prototype.constructor = R, Ha.prototype.push = Qc, d.callback = ka, d.drop = Mb, d.filter = Oa, d.flatten = Lb, d.forEach = kb, d.keys = q, d.keysIn = I, d.map = Qa, d.matches = mb, d.merge = Tc, d.mixin = Bb, d.omit = Wc, d.pairs = ib, d.property = ob, d.pull = Kb, d.pullAt = Oc, d.restParam = ia, d.sortBy = Ib, d.take = Jb, d.toPlainObject = gb, d.values = jb, d.zipObject = Na, d.collect = Qa, d.each = kb, d.iteratee = ka, d.object = Na, d.select = Oa, d.clone = Hb, d.find = La, d.findKey = Uc, d.identity = ja, d.includes = qa, d.indexOf = ra, d.isArguments = w, d.isArray = h, d.isEqual = Wa, d.isError = Gb, d.isFunction = B, d.isNaN = Fb, d.isNative = Da, d.isNull = Db, d.isNumber = bb, d.isObject = j, d.isPlainObject = wa, d.isString = H, d.isTypedArray = M, d.isUndefined = Cb, d.last = Ka, d.reduce = Ba, d.some = Ra, d.uniqueId = Ab, d.any = Ra, d.contains = qa, d.eq = Wa, d.detect = La, d.foldl = Ba, d.include = qa, d.inject = Ba, d.VERSION = zb, da && J && fc && ((J.exports = d)._ = d)
                }).call(this)
            }).call(this, "undefined" != typeof global ? global : "undefined" != typeof self ? self : "undefined" != typeof window ? window : {})
        }, {}],
        2: [function(p, n, o) {
            function f(d, b, f) {
                for (var a, e = "", c = 0, g = d.length, h = g - 2; h > c;) {
                    if (a = (d[c++] << 16) + (d[c++] << 8) + d[c++], !(a >= 0 && 16777215 >= a)) throw new Error("not bytes");
                    e += b[a >>> 18] + b[a >>> 12 & 63] + b[a >>> 6 & 63] + b[63 & a]
                }
                if (c == h) {
                    if (a = (d[c++] << 8) + d[c++], !(a >= 0 && 65535 >= a)) throw new Error("not bytes");
                    e += b[a >>> 10] + b[a >>> 4 & 63] + b[a << 2 & 63] + f
                } else if (c == g - 1) {
                    if (a = d[c++], !(a >= 0 && 255 >= a)) throw new Error("not bytes");
                    e += b[a >>> 2] + b[a << 4 & 63] + f + f
                }
                return e
            }
    
            function j(f) {
                f = f.replace(k, "");
                var h, i = f.length;
                h = f.charAt(i - 1), ("=" === h || "." === h) && i--, h = f.charAt(i - 1), ("=" === h || "." === h) && i--;
                var n = 3 * (i >> 2),
                    j = 0;
                switch (i % 4) {
                    case 2:
                        j = 1;
                        break;
                    case 3:
                        j = 2;
                        break;
                    case 1:
                        throw new Error("bad base64")
                }
                for (var d, l = new Uint8Array(n + j), g = 0, m = 0; n > m;) {
                    if (d = a[f[g++]] + b[f[g++]] + c[f[g++]] + e[f[g++]], !(d >= 0 && 16777215 >= d)) throw new Error("bad base64");
                    l[m++] = d >>> 16, l[m++] = d >>> 8 & 255, l[m++] = 255 & d
                }
                if (j > 0 && (d = a[f[g++]] + b[f[g++]], l[m++] = d >>> 16, j > 1 && (d += c[f[g++]], l[m++] = d >>> 8 & 255), !(d >= 0 && 16776960 >= d && 0 === (d & (j > 1 ? 255 : 65535))))) throw new Error("bad base64");
                return l
            }
            var g = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",
                l = g + "+/",
                m = g + "-_",
                d = Array.prototype.slice,
                h = d.call(l),
                i = d.call(m),
                a = {},
                b = {},
                c = {},
                e = {},
                k = /\s+/g;
            [h, i].forEach(function(g) {
                for (var f, d = g.length; d--;) f = g[d], a[f] = d << 18, b[f] = d << 12, c[f] = d << 6, e[f] = d
            }), n.exports = {
                encode: function(a) {
                    return f(a, h, "=")
                },
                encodeUrlSafe: function(a) {
                    return f(a, i, "")
                },
                decode: j
            }
        }, {}],
        3: [function(a, b, e) {
            "use strict";
            var c = a("./init"),
                d = a("./versionInfo");
            b.exports = {
                init: c(nrdp, [a("./widget")]),
                versionInfo: d
            }
        }, {
            "./init": 4,
            "./versionInfo": 10,
            "./widget": 22
        }],
        4: [function(b, a, c) {
            "use strict";
            a.exports = function(a, f) {
                function c(d) {
                    for (var e = b, f = e.length, c = 0; f > c; c++) b[c](d, a);
                    b = []
                }
    
                function g() {
                    a.removeEventListener("init", d), a.removeEventListener("fatalerror", h)
                }
    
                function d() {
                    g(), e = !0;
                    var d = void 0;
                    try {
                        for (var h = f.length, b = 0; h > b; b++) f[b](a)
                    } catch (a) {
                        d = new Error("An exception occured while executing init tasks")
                    } finally {
                        c(d)
                    }
                }
    
                function h() {
                    g(), c(new Error("NRDP FatalError"))
                }
                var e = !1,
                    i = !1,
                    b = [];
                return function(f) {
                    if (e && (b = [f], c()), b.push(f), !i) {
                        i = !0;
                        try {
                            a.isReady ? d() : (a.addEventListener("init", d), a.addEventListener("fatalerror", h), "function" == typeof a.hookInit && a.hookInit(null), a.init())
                        } catch (a) {
                            c(a), e = !0
                        }
                    }
                }
            }
        }, {}],
        5: [function(c, b, d) {
            "use strict";
    
            function a(a) {
                var b = a.split("-");
                a = b.shift();
                var c = void 0;
                c = 0 === a.indexOf("P") ? -1 / a.substr(1) : "." + a;
                var d = parseFloat(c, 10);
                return {
                    value: d,
                    additionalSegments: b
                }
            }
            b.exports = function(b) {
                return function(k) {
                    var i = b.device.SDKVersion;
                    if (i) {
                        var j = i.version,
                            c = k.split("."),
                            f = void 0;
                        if (c[0] > 2e3) f = j;
                        else {
                            if (!(c[0] > 11)) throw new Error("4.x version comparison is not available right now");
                            f = j.slice(2)
                        }
                        for (var e = f.split("."), d = 0; d < Math.max(e.length, c.length) && !(e.length <= d || c.length <= d); d++) {
                            var g = a(e[d]);
                            e = e.concat(g.additionalSegments);
                            var h = a(c[d]);
                            if (c = c.concat(h.additionalSegments), g.value > h.value) return 1;
                            if (g.value < h.value) return -1
                        }
                        return 0
                    }
                }
            }
        }, {}],
        6: [function(a, b, d) {
            "use strict";
            var c = a("./compare");
            b.exports = function(a) {
                var b = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : c(a);
                return function(a) {
                    return 0 === b(a)
                }
            }
        }, {
            "./compare": 5
        }],
        7: [function(a, b, d) {
            "use strict";
            var c = a("./compare");
            b.exports = function(a) {
                var b = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : c(a);
                return function(a) {
                    return b(a) > 0
                }
            }
        }, {
            "./compare": 5
        }],
        8: [function(a, b, d) {
            "use strict";
            var c = a("./compare");
            b.exports = function(a) {
                var b = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : c(a);
                return function(a) {
                    return b(a) < 0
                }
            }
        }, {
            "./compare": 5
        }],
        9: [function(a, b, c) {
            "use strict";
            b.exports = function(m) {
                var d = "",
                    g = m.device.SDKVersion;
                if (g) {
                    var f = g.components,
                        b = f.platform,
                        k = a("./isGreaterThan");
                    if (b && k("14.2")) {
                        var c = ["platformType", "platformVersion", "platformBuildNum"],
                            h = [];
                        for (var l in c) {
                            var i = c[l];
                            b[i] && h.push(b[i])
                        }
                        var j = [h.join(":")];
                        for (var e in b) - 1 === c.indexOf(e) && j.push(e + " " + b[e]);
                        d = j.join(" / ")
                    } else d = f.sdk;
                    return d
                }
            }
        }, {
            "./isGreaterThan": 7
        }],
        10: [function(a, b, c) {
            "use strict";
            b.exports = a("./versionInfo")(nrdp)
        }, {
            "./versionInfo": 11
        }],
        11: [function(a, b, c) {
            "use strict";
            b.exports = function(b) {
                return {
                    versionString: a("./helpers/versionString")(b),
                    isGreaterThan: a("./helpers/isGreaterThan")(b),
                    isLessThan: a("./helpers/isLessThan")(b),
                    isEqual: a("./helpers/isEqual")(b)
                }
            }
        }, {
            "./helpers/isEqual": 6,
            "./helpers/isGreaterThan": 7,
            "./helpers/isLessThan": 8,
            "./helpers/versionString": 9
        }],
        12: [function(c, a, d) {
            "use strict";
    
            function b(d, e) {
                var a = d.gibbon,
                    b = a.Widget,
                    c = a.Widget.prototype,
                    f = b._default || b._defaults,
                    g = e.isLessThan("2016.2");
                g && c._pull && (c._pull = function(a) {
                    return void 0 !== this._syncData[a] ? this._syncData[a] : f[a]
                })
            }
            a.exports = b
        }, {}],
        13: [function(c, a, d) {
            "use strict";
    
            function b(b, e) {
                var a = b.gibbon,
                    c = a.Widget,
                    d = a.Widget.prototype,
                    f = e.isLessThan("2016.2");
                if (f && d._push) {
                    var g = "parent",
                        h = "clone";
                    d._push = function(d, e) {
                        return this._syncData[d] = e, !this._created || a._needPendingSync() ? (this.__push || (a._addPendingSync(this), this.__push = {}), this.__push[d] = e, !1) : (this._pushed[d] = e, (d === g || d === h) && (e = e._id), c.push_warnedPendingSync || (c.push_warnedPendingSync = !0, console.warn("gibbon widget property set without pending sync")), b._setProperty(this, d, e), !0)
                    }
                }
            }
            a.exports = b
        }, {}],
        14: [function(c, a, d) {
            "use strict";
    
            function b(a, b) {
                var c = b.isLessThan("2016.2");
                if (c) {
                    var d = b.isLessThan("2015.1");
                    a._setProperty && (a._setProperty = function(b, e, l, k) {
                        a._backchannel || console.info("unhandled _setProperty " + b + " " + e, "NRDP_SCRIPT");
                        var c = void 0,
                            h = void 0;
                        if (b instanceof Object && b && b._path) c = b, h = b._path;
                        else {
                            var i = b ? "nrdp." + b : "nrdp";
                            if (c = a._findObject(i), !c) return void a.log.error("could not find object " + i + " to set property " + e + " on", "NRDP_SCRIPT");
                            h = b
                        }
                        var j = c,
                            f = j._setProperty_current,
                            g = j._setProperty_pending;
                        if (!k && f && f[e]) return g || (c._setProperty_pending = g = {}), void(g[e] = {
                            object: c._path ? c : b,
                            property: e,
                            value: l
                        });
                        var m = a._backchannel.setProperty(h, e, l);
                        !k && (m || d && !f) && (f = c._setProperty_current = {}, f[e] = !0)
                    })
                }
            }
            a.exports = b
        }, {}],
        15: [function(c, a, d) {
            "use strict";
    
            function b(b) {
                var c = b.gibbon,
                    a = c.Widget.prototype;
                "undefined" == typeof a.addBackgroundImage && (a.addBackgroundImage = function(a) {
                    for (var b in a) this.backgroundImage[b] = a[b]
                })
            }
            a.exports = b
        }, {}],
        16: [function(c, a, d) {
            "use strict";
    
            function b(b) {
                var c = b.gibbon,
                    a = c.Widget.prototype;
                "undefined" == typeof a.addForegroundImage && (a.addForegroundImage = function(a) {
                    for (var b in a) this.image[b] = a[b]
                })
            }
            a.exports = b
        }, {}],
        17: [function(d, a, e) {
            "use strict";
    
            function b(b, d) {
                function e() {
                    var e = a._queuedAnimations,
                        f = e.length;
                    if (f) {
                        for (var d = 0; f > d; d++) {
                            var b = c(e[d], 8),
                                g = b[0],
                                i = b[1],
                                o = b[2],
                                k = b[3],
                                l = b[4],
                                m = b[5],
                                n = b[6],
                                j = b[7];
                            h.call(g, i, o, k, l, m, n, j)
                        }
                        a._queuedAnimations = []
                    }
                }
                var a = b.gibbon,
                    f = a.Widget.prototype,
                    g = d.isEqual("2013.2"),
                    h = f.startAnimation;
                g && (a.startBatching = function() {
                    a._batchCreates = !0, a._deferredCreates = a._deferredCreates || [], a._queuedAnimations = a._queuedAnimations || []
                }, a.endBatching = function() {
                    var f = a._queuedAnimations,
                        b = a._deferredCreates;
                    f && f.length && a.setTimeout(e, 0, !0);
                    var g = b && b.length;
                    if (g) {
                        for (var c = 0; g > c; c++) {
                            var d = b[c];
                            d && d._createWidget && d._createWidget()
                        }
                        a._deferredCreates = []
                    }
                    a._batchCreates = !1
                })
            }
            var c = function() {
                function a(h, d) {
                    var a = [],
                        b = !0,
                        e = !1,
                        f = void 0;
                    try {
                        for (var g, c = h[Symbol.iterator](); !(b = (g = c.next()).done) && (a.push(g.value), !d || a.length !== d); b = !0);
                    } catch (a) {
                        e = !0, f = a
                    } finally {
                        try {
                            !b && c.return && c.return()
                        } finally {
                            if (e) throw f
                        }
                    }
                    return a
                }
                return function(b, c) {
                    if (Array.isArray(b)) return b;
                    if (Symbol.iterator in Object(b)) return a(b, c);
                    throw new TypeError("Invalid attempt to destructure non-iterable instance")
                }
            }();
            a.exports = b
        }, {}],
        18: [function(c, a, d) {
            "use strict";
    
            function b(c) {
                var d = c.gibbon,
                    a = d.Widget.prototype,
                    b = Object.getOwnPropertyDescriptor(a, "children"),
                    e = b && b.get;
                "undefined" == typeof e && Object.defineProperty(a, "children", {
                    get: function() {
                        return this._children
                    }
                })
            }
            a.exports = b
        }, {}],
        19: [function(c, a, d) {
            "use strict";
            var b = {
                zh: !0,
                ja: !0,
                ko: !0
            };
            a.exports = function(a) {
                if (!a || !a.device) return !1;
                var d = a.device.UILanguages,
                    c = void 0 === d ? ["en-US", "en"] : d,
                    e = c && c[0] && c[0].substring(0, 2);
                return !!b[e]
            }
        }, {}],
        20: [function(b, a, c) {
            "use strict";
            a.exports = function() {
                return {
                    weight: "normal",
                    padding: [-1, 0]
                }
            }
        }, {}],
        21: [function(d, b, e) {
            "use strict";
    
            function c(d) {
                var e = d.gibbon,
                    b = e.Widget.prototype;
                if ("undefined" == typeof b.id) {
                    var c = Object.getOwnPropertyDescriptor(b, a),
                        f = c && c.get;
                    f || Object.defineProperty(b, a, {
                        get: function() {
                            return this._id
                        }
                    })
                }
            }
            var a = "id";
            b.exports = c
        }, {}],
        22: [function(a, c, d) {
            "use strict";
            var b = a("../versionInfo");
            c.exports = function(c) {
                a("./parent")(c, b), a("./batching")(c, b), a("./startAnimation")(c, b), a("./removeImage")(c, b), a("./addForegroundImage")(c, b), a("./addBackgroundImage")(c, b), a("./text")(c, b), a("./textStyle")(c, b), a("./layout")(c, b), a("./id")(c, b), a("./name")(c, b), a("./children")(c, b), a("./mirror")(c, b), a("./makeWidget")(c, b), a("./_push")(c, b), a("./_pull")(c, b), a("./_setProperty")(c, b), a("./propertyGetters")(c, b)
            }
        }, {
            "../versionInfo": 10,
            "./_pull": 12,
            "./_push": 13,
            "./_setProperty": 14,
            "./addBackgroundImage": 15,
            "./addForegroundImage": 16,
            "./batching": 17,
            "./children": 18,
            "./id": 21,
            "./layout": 23,
            "./makeWidget": 24,
            "./mirror": 25,
            "./name": 26,
            "./parent": 27,
            "./propertyGetters": 28,
            "./removeImage": 29,
            "./startAnimation": 30,
            "./text": 31,
            "./textStyle": 32
        }],
        23: [function(d, b, e) {
            "use strict";
    
            function c(b, c) {
                var d = b.gibbon,
                    e = d.Widget.prototype,
                    f = c.isLessThan("2014.2"),
                    g = c.isLessThan("2014.1");
                if (f) {
                    var h = function(a) {
                            if (a instanceof Object) {
                                if (this.layout instanceof Object && a.align === this.layout.align && a.layout === this.layout.layout) return;
                                a = {
                                    layout: a.layout,
                                    align: a.align
                                }, a.align instanceof Array && (a.align = a.align.slice(0))
                            } else if (a === this.layout) return;
                            this._push("layout", a)
                        },
                        i = function(c) {
                            if (c instanceof Object) {
                                if (this.layout instanceof Object && a(c.align) === a(this.layout.align) && c.layout === this.layout.layout) {
                                    if (c.align instanceof Array && c.align.join(" ") === this.layout.align.join(" ")) return;
                                    if (c.align === this.layout.align) return
                                }
                                c = {
                                    layout: c.layout,
                                    align: c.align
                                }, c.align instanceof Array && (c.align = c.align.slice(0))
                            } else if (c === this.layout) return;
                            this._push("layout", c), void 0 !== b.gibbon._breaks && this._maybeBreak(d.DEBUGGER_ATTRIBUTE_MODIFIED)
                        };
                    Object.defineProperty(e, "layout", {
                        set: g ? h : i
                    })
                }
            }
            var a = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(a) {
                return typeof a
            } : function(a) {
                return a && "function" == typeof Symbol && a.constructor === Symbol && a !== Symbol.prototype ? "symbol" : typeof a
            };
            b.exports = c
        }, {}],
        24: [function(c, a, d) {
            "use strict";
    
            function b(c, d) {
                var a = c.gibbon,
                    b = a.Widget,
                    e = b._default || b._defaults,
                    f = d.isLessThan("2016.2");
                if (f) {
                    var g = a.makeWidget;
                    a.makeWidget = function(f) {
                        var c = void 0;
                        if (f) c = g(f);
                        else {
                            var d = a._nextWidgetId++;
                            d > a.INT_MAX && (d = 1, a._nextWidgetId = 2), c = new b(d)
                        }
                        return c._syncData.__proto__ = e, c
                    }
                }
            }
            a.exports = b
        }, {}],
        25: [function(d, b, e) {
            "use strict";
    
            function c(d, c) {
                var e = d.gibbon,
                    b = e.Widget.prototype,
                    f = c.isLessThan("2015.2"),
                    g = c.isLessThan("2017");
                if (!f) {
                    var h = Object.getOwnPropertyDescriptor(b, a);
                    Object.defineProperty(b, "explicitIsMirrored", {
                        set: function(a) {
                            var b = this.mirror;
                            g ? (this._syncData.mirror = a, this._object.setSyncProperty(this._properties.mirror, a)) : h.set.call(this, a), this._explicitIsMirrored = a, this._handleIsMirroredChange(this.mirror, b)
                        }
                    }), Object.defineProperty(b, "implicitIsMirrored", {
                        set: function(a) {
                            var b = this.mirror;
                            this._implicitIsMirrored = a, this._handleIsMirroredChange(this.mirror, b)
                        }
                    }), Object.defineProperty(b, a, {
                        get: function() {
                            return !!(void 0 !== this._explicitIsMirrored ? this._explicitIsMirrored : this._implicitIsMirrored)
                        },
                        set: function(a) {
                            this.explicitIsMirrored = a
                        }
                    }), b._handleIsMirroredChange = function(a, b) {
                        a !== b && this._children.forEach(function(b) {
                            b.implicitIsMirrored = a
                        })
                    }
                }
            }
            var a = "mirror";
            b.exports = c
        }, {}],
        26: [function(g, b, h) {
            "use strict";
    
            function c(c, g) {
                var h = c.gibbon,
                    b = h.Widget.prototype,
                    i = g.isLessThan("2014.2"),
                    j = Object.getOwnPropertyDescriptor(b, "name"),
                    k = j.get;
                i && Object.defineProperty(b, a, {
                    get: function() {
                        return String(k.call(this))
                    },
                    set: function(b) {
                        ("undefined" == typeof b ? "undefined" : d(b)) !== e && (b = f + b), this._push(a, b)
                    }
                })
            }
            var d = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(a) {
                    return typeof a
                } : function(a) {
                    return a && "function" == typeof Symbol && a.constructor === Symbol && a !== Symbol.prototype ? "symbol" : typeof a
                },
                a = "name",
                e = "string",
                f = "";
            b.exports = c
        }, {}],
        27: [function(d, b, e) {
            "use strict";
    
            function c(d, g) {
                var b = d.gibbon,
                    c = b.Widget.prototype,
                    h = g.isEqual("2013.2"),
                    e = Object.getOwnPropertyDescriptor(c, a),
                    f = e.get;
                if (h) nrdp.log.info("apply parent polyfill"), Object.defineProperty(c, a, {
                    get: function() {
                        return this._parent || f.call(this)
                    },
                    set: function(c) {
                        (c || this.parent) && (c && this.parent && c._id === this.parent._id || (this.parent && this.parent._removeChild(this), c ? (c._addChild(this), !this._push(a, c) && this.parent._created && (nrdp.log.info("parent setter " + b._batchCreates), b._batchCreates ? b._deferredCreates.push(this) : this._createWidget()), this.implicitIsMirrored = c.mirror) : (this._syncData.parent = void 0, this._created && (d._setProperty(this._path, a, 0), this._destroyWidget())), this._parent = c))
                    }
                });
                else {
                    var i = e.set;
                    Object.defineProperty(c, a, {
                        get: function() {
                            return this._parent || f.call(this)
                        },
                        set: function(a) {
                            i.apply(this, arguments), this._parent = a, a && (this.implicitIsMirrored = a.mirror)
                        }
                    })
                }
            }
            var a = "parent";
            b.exports = c
        }, {}],
        28: [function(c, a, d) {
            "use strict";
    
            function b(j, l) {
                var c = j.gibbon,
                    d = c.Widget,
                    a = c.Widget.prototype,
                    k = d._default || d._defaults,
                    u = l.isLessThan("2016.2");
                if (u) {
                    var h = Object.getOwnPropertyDescriptor(a, "x");
                    Object.defineProperty(a, "x", {
                        get: function() {
                            var a = this._syncData.x;
                            return a && a instanceof Object ? a.value : a
                        },
                        set: h.set
                    });
                    var i = Object.getOwnPropertyDescriptor(a, "y");
                    Object.defineProperty(a, "y", {
                        get: function() {
                            var a = this._syncData.y;
                            return a && a instanceof Object ? a.value : a
                        },
                        set: i.set
                    });
                    var e = Object.getOwnPropertyDescriptor(a, "scrollX");
                    e && Object.defineProperty(a, "scrollX", {
                        get: function() {
                            var a = this._syncData.scrollX;
                            return a && a instanceof Object ? a.value : a
                        },
                        set: e.set
                    });
                    var f = Object.getOwnPropertyDescriptor(a, "scrollY");
                    f && Object.defineProperty(a, "scrollY", {
                        get: function() {
                            var a = this._syncData.scrollY;
                            return a && a instanceof Object ? a.value : a
                        },
                        set: f.set
                    });
                    var g = Object.getOwnPropertyDescriptor(a, "width");
                    Object.defineProperty(a, "width", {
                        get: function() {
                            var a = this._syncData.width;
                            return a && a instanceof Object ? a.value : a
                        },
                        set: g.set
                    });
                    var m = Object.getOwnPropertyDescriptor(a, "height");
                    Object.defineProperty(a, "height", {
                        get: function() {
                            var a = this._syncData.height;
                            return a && a instanceof Object ? a.value : a
                        },
                        set: m.set
                    });
                    var n = Object.getOwnPropertyDescriptor(a, "opacity");
                    Object.defineProperty(a, "opacity", {
                        get: function() {
                            var a = this._syncData.opacity;
                            return a && a instanceof Object ? a.value : a
                        },
                        set: n.set
                    });
                    var o = Object.getOwnPropertyDescriptor(a, "scale");
                    Object.defineProperty(a, "scale", {
                        get: function() {
                            var a = this._syncData.scale;
                            if (void 0 === a) {
                                var b = this.scaleX,
                                    c = this.scaleY;
                                return b === c ? b : void 0
                            }
                            return a instanceof Object ? a.value : a
                        },
                        set: o.set
                    });
                    var p = Object.getOwnPropertyDescriptor(a, "maxWidth");
                    Object.defineProperty(a, "maxWidth", {
                        get: function() {
                            return this._syncData.maxWidth
                        },
                        set: p.set
                    });
                    var q = Object.getOwnPropertyDescriptor(a, "maxHeight");
                    Object.defineProperty(a, "maxHeight", {
                        get: function() {
                            return this._syncData.maxHeight
                        },
                        set: q.set
                    });
                    var r = Object.getOwnPropertyDescriptor(a, "minWidth");
                    Object.defineProperty(a, "minWidth", {
                        get: function() {
                            return this._syncData.minWidth
                        },
                        set: r.set
                    });
                    var s = Object.getOwnPropertyDescriptor(a, "minHeight");
                    Object.defineProperty(a, "minHeight", {
                        get: function() {
                            return this._syncData.minHeight
                        },
                        set: s.set
                    });
                    var t = Object.getOwnPropertyDescriptor(a, "drawOrder");
                    Object.defineProperty(a, "drawOrder", {
                        get: function() {
                            return this._syncData.drawOrder
                        },
                        set: t.set
                    });
                    var b = Object.getOwnPropertyDescriptor(a, "backgroundColor");
                    b || (b = Object.getOwnPropertyDescriptor(a, "color")), Object.defineProperty(a, "color", {
                        get: function() {
                            return this._syncData.backgroundColor || k.backgroundColor
                        },
                        set: b.set
                    });
                    var v = Object.getOwnPropertyDescriptor(a, "padding");
                    Object.defineProperty(a, "padding", {
                        get: function() {
                            return this._syncData.padding
                        },
                        set: v.set
                    });
                    var w = Object.getOwnPropertyDescriptor(a, "visible");
                    Object.defineProperty(a, "visible", {
                        get: function() {
                            return this._syncData.visible
                        },
                        set: w.set
                    })
                }
            }
            a.exports = b
        }, {}],
        29: [function(c, a, d) {
            "use strict";
    
            function b(b) {
                var c = b.gibbon,
                    a = c.Widget.prototype;
                "undefined" == typeof a.removeImage && (a.removeImage = function(a) {
                    a === this.backgroundImage ? this.backgroundImage.url = void 0 : a === this.image && (this.image.url = void 0)
                })
            }
            a.exports = b
        }, {}],
        30: [function(c, a, d) {
            "use strict";
    
            function b(c, d) {
                var a = c.gibbon,
                    b = a.Widget.prototype,
                    e = d.isEqual("2013.2");
                if (e) {
                    var f = b.startAnimation;
                    b.startAnimation = function(b, c, d, e, g, h, i) {
                        var k = this._created,
                            l = a._batchCreates;
                        if (k || !l) f.call(this, b, c, d, e, g, h, i);
                        else {
                            var j = a._queuedAnimations;
                            j[j.length] = [this, b, c, d, e, g, h, i]
                        }
                    }
                }
            }
            a.exports = b
        }, {}],
        31: [function(e, b, f) {
            "use strict";
    
            function c(f, g) {
                var b = f.gibbon,
                    c = b.Widget.prototype,
                    h = g.isLessThan("2014.2");
                if (h) {
                    var e = Object.getOwnPropertyDescriptor(c, a);
                    Object.defineProperty(c, a, {
                        get: function() {
                            var a = this;
                            return {
                                contents: e.get.call(this),
                                toString: function() {
                                    return e.get.call(a)
                                }
                            }
                        },
                        set: function(c) {
                            (null === c || void 0 === c) && (c = d), c != this.text.contents && (this._push(a, c), void 0 !== b._breaks && this._maybeBreak(b.DEBUGGER_ATTRIBUTE_MODIFIED))
                        }
                    })
                }
            }
            var a = "text",
                d = "";
            b.exports = c
        }, {}],
        32: [function(a, b, g) {
            "use strict";
    
            function c(b, c) {
                var h = b.gibbon,
                    g = h.Widget.prototype,
                    i = c.isEqual("2014.1"),
                    j = c.isEqual("2014.2"),
                    a = Object.getOwnPropertyDescriptor(g, "textStyle"),
                    k = a && a.set,
                    l = a && a.get;
                Object.defineProperty(g, "textStyle", {
                    get: l,
                    set: function(c) {
                        var a = d();
                        for (var g in c) a[g] = c[g];
                        (i || j) && a.truncation && a.truncation.position === f && e(b) && (a.wrap = !0), k.call(this, a)
                    }
                })
            }
            var d = a("./helpers/textStyleDefaults"),
                e = a("./helpers/isLogoGraphic"),
                f = "end";
            b.exports = c
        }, {
            "./helpers/isLogoGraphic": 19,
            "./helpers/textStyleDefaults": 20
        }],
        33: [function(b, a, c) {
            a.exports = {
                encode: function(a) {
                    var h, l, k, j, i, g, n, b, d = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",
                        c = 0,
                        o = 0,
                        e = "",
                        m = [];
                    if (!a) return a;
                    do h = a.charCodeAt(c++), l = a.charCodeAt(c++), k = a.charCodeAt(c++), b = h << 16 | l << 8 | k, j = b >> 18 & 63, i = b >> 12 & 63, g = b >> 6 & 63, n = 63 & b, m[o++] = d.charAt(j) + d.charAt(i) + d.charAt(g) + d.charAt(n); while (c < a.length);
                    e = m.join("");
                    var f = a.length % 3;
                    return (f ? e.slice(0, f - 3) : e) + "===".slice(f || 3)
                },
                decode: function(a) {
                    var f, h, m, l, k, g, j, e, d = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",
                        b = 0,
                        i = 0,
                        n = "",
                        c = [];
                    if (!a) return a;
                    a += "";
                    do l = d.indexOf(a.charAt(b++)), k = d.indexOf(a.charAt(b++)), g = d.indexOf(a.charAt(b++)), j = d.indexOf(a.charAt(b++)), e = l << 18 | k << 12 | g << 6 | j, f = e >> 16 & 255, h = e >> 8 & 255, m = 255 & e, 64 === g ? c[i++] = String.fromCharCode(f) : 64 === j ? c[i++] = String.fromCharCode(f, h) : c[i++] = String.fromCharCode(f, h, m); while (b < a.length);
                    return n = c.join("")
                }
            }
        }, {}],
        34: [function(b, a, c) {
            a.exports = {
                encode: function(h) {
                    if (null === h || "undefined" == typeof h) return "";
                    var c, d, e = h + "",
                        g = "",
                        i = 0;
                    c = d = 0, i = e.length;
                    for (var b = 0; i > b; b++) {
                        var a = e.charCodeAt(b),
                            f = null;
                        if (128 > a) d++;
                        else if (a > 127 && 2048 > a) f = String.fromCharCode(a >> 6 | 192, 63 & a | 128);
                        else if (a & !0) f = String.fromCharCode(a >> 12 | 224, a >> 6 & 63 | 128, 63 & a | 128);
                        else {
                            if (a & !0) throw new RangeError("Unmatched trail surrogate at " + b);
                            var j = e.charCodeAt(++b);
                            if (j & !0) throw new RangeError("Unmatched lead surrogate at " + (b - 1));
                            a = ((1023 & a) << 10) + (1023 & j) + 65536, f = String.fromCharCode(a >> 18 | 240, a >> 12 & 63 | 128, a >> 6 & 63 | 128, 63 & a | 128)
                        }
                        null !== f && (d > c && (g += e.slice(c, d)), g += f, c = d = b + 1)
                    }
                    return d > c && (g += e.slice(c, i)), g
                },
                decode: function(c) {
                    var d = [],
                        a = 0,
                        f = 0,
                        b = 0,
                        e = 0,
                        g = 0;
                    for (c += ""; a < c.length;) b = c.charCodeAt(a), 128 > b ? (d[f++] = String.fromCharCode(b), a++) : b > 191 && 224 > b ? (e = c.charCodeAt(a + 1), d[f++] = String.fromCharCode((31 & b) << 6 | 63 & e), a += 2) : (e = c.charCodeAt(a + 1), g = c.charCodeAt(a + 2), d[f++] = String.fromCharCode((15 & b) << 12 | (63 & e) << 6 | 63 & g), a += 3);
                    return d.join("")
                }
            }
        }, {}],
        35: [function(d, a, e) {
            function b(b) {
                for (var a, c = 0, e = b.length, d = ""; e > c;) {
                    if (a = b[c++], !(a >= 0 && 255 >= a)) throw new Error("bad utf8");
                    if (128 & a)
                        if (192 === (224 & a)) a = ((31 & a) << 6) + (63 & b[c++]);
                        else {
                            if (224 !== (240 & a)) throw new Error("unsupported utf8 character");
                            a = ((15 & a) << 12) + ((63 & b[c++]) << 6) + (63 & b[c++])
                        } d += String.fromCharCode(a)
                }
                return d
            }
    
            function c(e) {
                var b, c, a, f = e.length,
                    g = 0,
                    d = 0;
                if (!(f >= 0)) throw new Error("bad string");
                for (c = f; c--;) a = e.charCodeAt(c), 128 > a ? g++ : g += 2048 > a ? 2 : 3;
                for (b = new Uint8Array(g), c = 0; f > c; c++) a = e.charCodeAt(c), 128 > a ? b[d++] = a : 2048 > a ? (b[d++] = 192 | a >>> 6, b[d++] = 128 | 63 & a) : (b[d++] = 224 | a >>> 12, b[d++] = 128 | a >>> 6 & 63, b[d++] = 128 | 63 & a);
                return b
            }
            a.exports = {
                encode: c,
                decode: b
            }
        }, {}],
        36: [function(r, n, q) {
            function i() {
                throw new Error("setTimeout has not been defined")
            }
    
            function j() {
                throw new Error("clearTimeout has not been defined")
            }
    
            function k(a) {
                if (d === setTimeout) return setTimeout(a, 0);
                if ((d === i || !d) && setTimeout) return d = setTimeout, setTimeout(a, 0);
                try {
                    return d(a, 0)
                } catch (b) {
                    try {
                        return d.call(null, a, 0)
                    } catch (b) {
                        return d.call(this, a, 0)
                    }
                }
            }
    
            function p(a) {
                if (e === clearTimeout) return clearTimeout(a);
                if ((e === j || !e) && clearTimeout) return e = clearTimeout, clearTimeout(a);
                try {
                    return e(a)
                } catch (b) {
                    try {
                        return e.call(null, a)
                    } catch (b) {
                        return e.call(this, a)
                    }
                }
            }
    
            function o() {
                g && f && (g = !1, f.length ? b = f.concat(b) : h = -1, b.length && l())
            }
    
            function l() {
                if (!g) {
                    var c = k(o);
                    g = !0;
                    for (var a = b.length; a;) {
                        for (f = b, b = []; ++h < a;) f && f[h].run();
                        h = -1, a = b.length
                    }
                    f = null, g = !1, p(c)
                }
            }
    
            function m(a, b) {
                this.fun = a, this.array = b
            }
    
            function c() {}
            var d, e, a = n.exports = {};
            ! function() {
                try {
                    d = "function" == typeof setTimeout ? setTimeout : i
                } catch (a) {
                    d = i
                }
                try {
                    e = "function" == typeof clearTimeout ? clearTimeout : j
                } catch (a) {
                    e = j
                }
            }();
            var f, b = [],
                g = !1,
                h = -1;
            a.nextTick = function(d) {
                var c = new Array(arguments.length - 1);
                if (arguments.length > 1)
                    for (var a = 1; a < arguments.length; a++) c[a - 1] = arguments[a];
                b.push(new m(d, c)), 1 !== b.length || g || k(l)
            }, m.prototype.run = function() {
                this.fun.apply(null, this.array)
            }, a.title = "browser", a.browser = !0, a.env = {}, a.argv = [], a.version = "", a.versions = {}, a.on = c, a.addListener = c, a.once = c, a.off = c, a.removeListener = c, a.removeAllListeners = c, a.emit = c, a.prependListener = c, a.prependOnceListener = c, a.listeners = function(a) {
                return []
            }, a.binding = function(a) {
                throw new Error("process.binding is not supported")
            }, a.cwd = function() {
                return "/"
            }, a.chdir = function(a) {
                throw new Error("process.chdir is not supported")
            }, a.umask = function() {
                return 0
            }
        }, {}],
        37: [function(b, a, c) {
            (function(b) {
                ! function(b) {
                    "use strict";
                    if ("function" == typeof bootstrap) bootstrap("promise", b);
                    else if ("object" == typeof c && "object" == typeof a) a.exports = b();
                    else if ("function" == typeof define && define.amd) define(b);
                    else if ("undefined" != typeof ses) {
                        if (!ses.ok()) return;
                        ses.makeQ = b
                    } else {
                        if ("undefined" == typeof window && "undefined" == typeof self) throw new Error("This environment was not anticipated by Q. Please file a bug.");
                        var d = "undefined" != typeof window ? window : self,
                            e = d.Q;
                        d.Q = b(), d.Q.noConflict = function() {
                            return d.Q = e, this
                        }
                    }
                }(function() {
                    "use strict";
    
                    function k(a) {
                        return function() {
                            return W.apply(a, arguments)
                        }
                    }
    
                    function ga(a) {
                        return a === Object(a)
                    }
    
                    function ja(a) {
                        return "[object StopIteration]" === da(a) || a instanceof r
                    }
    
                    function y(a, d) {
                        if (p && d.stack && "object" == typeof a && null !== a && a.stack) {
                            for (var c = [], b = d; b; b = b.source) b.stack && (!a.__minimumStackCounter__ || a.__minimumStackCounter__ > b.stackCounter) && (G(a, "__minimumStackCounter__", {
                                value: b.stackCounter,
                                configurable: !0
                            }), c.unshift(b.stack));
                            c.unshift(a.stack);
                            var e = c.join("\n" + ea + "\n"),
                                f = $(e);
                            G(a, "stack", {
                                value: f,
                                configurable: !0
                            })
                        }
                    }
    
                    function $(e) {
                        for (var c = e.split("\n"), d = [], b = 0; b < c.length; ++b) {
                            var a = c[b];
                            R(a) || ia(a) || !a || d.push(a)
                        }
                        return d.join("\n")
                    }
    
                    function ia(a) {
                        return -1 !== a.indexOf("(module.js:") || -1 !== a.indexOf("(node.js:")
                    }
    
                    function H(a) {
                        var b = /at .+ \((.+):(\d+):(?:\d+)\)$/.exec(a);
                        if (b) return [b[1], Number(b[2])];
                        var c = /at ([^ ]+):(\d+):(?:\d+)$/.exec(a);
                        if (c) return [c[1], Number(c[2])];
                        var d = /.*@(.+):(\d+)$/.exec(a);
                        return d ? [d[1], Number(d[2])] : void 0
                    }
    
                    function R(c) {
                        var a = H(c);
                        if (!a) return !1;
                        var d = a[0],
                            b = a[1];
                        return d === A && b >= T && V >= b
                    }
    
                    function B() {
                        if (p) try {
                            throw new Error
                        } catch (d) {
                            var a = d.stack.split("\n"),
                                c = a[0].indexOf("@") > 0 ? a[1] : a[2],
                                b = H(c);
                            if (!b) return;
                            return A = b[0], b[1]
                        }
                    }
    
                    function X(a, b, c) {
                        return function() {
                            return "undefined" != typeof console && "function" == typeof console.warn && console.warn(b + " is deprecated, use " + c + " instead.", new Error("").stack), a.apply(a, arguments)
                        }
                    }
    
                    function a(a) {
                        return a instanceof c ? a : z(a) ? Y(a) : x(a)
                    }
    
                    function e() {
                        function k(c) {
                            b = c, a.longStackSupport && p && (g.source = c), o(j, function(d, b) {
                                a.nextTick(function() {
                                    c.promiseDispatch.apply(c, b)
                                })
                            }, void 0), j = void 0, l = void 0
                        }
                        var b, j = [],
                            l = [],
                            h = s(e.prototype),
                            g = s(c.prototype);
                        if (g.promiseDispatch = function(g, f, c) {
                                var e = d(arguments);
                                j ? (j.push(e), "when" === f && c[1] && l.push(c[1])) : a.nextTick(function() {
                                    b.promiseDispatch.apply(b, e)
                                })
                            }, g.valueOf = function() {
                                if (j) return g;
                                var a = K(b);
                                return i(a) && (b = a), a
                            }, g.inspect = function() {
                                return b ? b.inspect() : {
                                    state: "pending"
                                }
                            }, a.longStackSupport && p) try {
                            throw new Error
                        } catch (a) {
                            g.stack = a.stack.substring(a.stack.indexOf("\n") + 1), g.stackCounter = fa++
                        }
                        return h.promise = g, h.resolve = function(c) {
                            b || k(a(c))
                        }, h.fulfill = function(a) {
                            b || k(x(a))
                        }, h.reject = function(a) {
                            b || k(f(a))
                        }, h.notify = function(c) {
                            b || o(l, function(d, b) {
                                a.nextTick(function() {
                                    b(c)
                                })
                            }, void 0)
                        }, h
                    }
    
                    function h(b) {
                        if ("function" != typeof b) throw new TypeError("resolver must be a function.");
                        var a = e();
                        try {
                            b(a.resolve, a.reject, a.notify)
                        } catch (b) {
                            a.reject(b)
                        }
                        return a.promise
                    }
    
                    function J(b) {
                        return h(function(d, e) {
                            for (var c = 0, f = b.length; f > c; c++) a(b[c]).then(d, e)
                        })
                    }
    
                    function c(e, d, b) {
                        void 0 === d && (d = function(a) {
                            return f(new Error("Promise does not support operation: " + a))
                        }), void 0 === b && (b = function() {
                            return {
                                state: "unknown"
                            }
                        });
                        var a = s(c.prototype);
                        if (a.promiseDispatch = function(g, b, h) {
                                var c;
                                try {
                                    c = e[b] ? e[b].apply(a, h) : d.call(a, b, h)
                                } catch (a) {
                                    c = f(a)
                                }
                                g && g(c)
                            }, a.inspect = b, b) {
                            var g = b();
                            "rejected" === g.state && (a.exception = g.reason), a.valueOf = function() {
                                var c = b();
                                return "pending" === c.state || "rejected" === c.state ? a : c.value
                            }
                        }
                        return a
                    }
    
                    function g(b, c, d, e) {
                        return a(b).then(c, d, e)
                    }
    
                    function K(a) {
                        if (i(a)) {
                            var b = a.inspect();
                            if ("fulfilled" === b.state) return b.value
                        }
                        return a
                    }
    
                    function i(a) {
                        return a instanceof c
                    }
    
                    function z(a) {
                        return ga(a) && "function" == typeof a.then
                    }
    
                    function L(a) {
                        return i(a) && "pending" === a.inspect().state
                    }
    
                    function M(a) {
                        return !i(a) || "fulfilled" === a.inspect().state
                    }
    
                    function Q(a) {
                        return i(a) && "rejected" === a.inspect().state
                    }
    
                    function v() {
                        l.length = 0, n.length = 0, m || (m = !0)
                    }
    
                    function S(d, c) {
                        m && ("object" == typeof b && "function" == typeof b.emit && a.nextTick.runAfter(function() {
                            -1 !== u(n, d) && (b.emit("unhandledRejection", c, d), w.push(d))
                        }), n.push(d), c && "undefined" != typeof c.stack ? l.push(c.stack) : l.push("(no stack) " + c))
                    }
    
                    function U(d) {
                        if (m) {
                            var c = u(n, d); - 1 !== c && ("object" == typeof b && "function" == typeof b.emit && a.nextTick.runAfter(function() {
                                var a = u(w, d); - 1 !== a && (b.emit("rejectionHandled", l[c], d), w.splice(a, 1))
                            }), n.splice(c, 1), l.splice(c, 1))
                        }
                    }
    
                    function f(a) {
                        var b = c({
                            when: function(b) {
                                return b && U(this), b ? b(a) : this
                            }
                        }, function() {
                            return this
                        }, function() {
                            return {
                                state: "rejected",
                                reason: a
                            }
                        });
                        return S(b, a), b
                    }
    
                    function x(a) {
                        return c({
                            when: function() {
                                return a
                            },
                            get: function(b) {
                                return a[b]
                            },
                            set: function(b, c) {
                                a[b] = c
                            },
                            delete: function(b) {
                                delete a[b]
                            },
                            post: function(b, c) {
                                return null === b || void 0 === b ? a.apply(void 0, c) : a[b].apply(a, c)
                            },
                            apply: function(b, c) {
                                return a.apply(b, c)
                            },
                            keys: function() {
                                return ca(a)
                            }
                        }, void 0, function() {
                            return {
                                state: "fulfilled",
                                value: a
                            }
                        })
                    }
    
                    function Y(c) {
                        var b = e();
                        return a.nextTick(function() {
                            try {
                                c.then(b.resolve, b.reject, b.notify)
                            } catch (a) {
                                b.reject(a)
                            }
                        }), b.promise
                    }
    
                    function Z(b) {
                        return c({
                            isDef: function() {}
                        }, function(a, c) {
                            return F(b, a, c)
                        }, function() {
                            return a(b).inspect()
                        })
                    }
    
                    function I(b, c, d) {
                        return a(b).spread(c, d)
                    }
    
                    function _(b) {
                        return function() {
                            function c(c, i) {
                                var b;
                                if ("undefined" == typeof StopIteration) {
                                    try {
                                        b = e[c](i)
                                    } catch (a) {
                                        return f(a)
                                    }
                                    return b.done ? a(b.value) : g(b.value, d, h)
                                }
                                try {
                                    b = e[c](i)
                                } catch (b) {
                                    return ja(b) ? a(b.value) : f(b)
                                }
                                return g(b, d, h)
                            }
                            var e = b.apply(this, arguments),
                                d = c.bind(c, "next"),
                                h = c.bind(c, "throw");
                            return d()
                        }
                    }
    
                    function aa(b) {
                        a.done(a.async(b)())
                    }
    
                    function ka(a) {
                        throw new r(a)
                    }
    
                    function ha(a) {
                        return function() {
                            return I([this, j(arguments)], function(b, c) {
                                return a.apply(b, c)
                            })
                        }
                    }
    
                    function F(b, c, d) {
                        return a(b).dispatch(c, d)
                    }
    
                    function j(a) {
                        return g(a, function(a) {
                            var c = 0,
                                b = e();
                            return o(a, function(h, d, e) {
                                var f;
                                i(d) && "fulfilled" === (f = d.inspect()).state ? a[e] = f.value : (++c, g(d, function(d) {
                                    a[e] = d, 0 === --c && b.resolve(a)
                                }, b.reject, function(a) {
                                    b.notify({
                                        index: e,
                                        value: a
                                    })
                                }))
                            }, void 0), 0 === c && b.resolve(a), b.promise
                        })
                    }
    
                    function D(c) {
                        if (0 === c.length) return a.resolve();
                        var b = a.defer(),
                            d = 0;
                        return o(c, function(j, k, a) {
                            function e(a) {
                                b.resolve(a)
                            }
    
                            function f(c) {
                                if (d--, 0 === d) {
                                    var a = c || new Error("" + c);
                                    a.message = "Q can't get fulfillment value from any promise, all promises were rejected. Last error message: " + a.message, b.reject(a)
                                }
                            }
    
                            function h(c) {
                                b.notify({
                                    index: a,
                                    value: c
                                })
                            }
                            var i = c[a];
                            d++, g(i, e, f, h)
                        }, void 0), b.promise
                    }
    
                    function C(b) {
                        return g(b, function(b) {
                            return b = t(b, a), g(j(t(b, function(a) {
                                return g(a, E, E)
                            })), function() {
                                return b
                            })
                        })
                    }
    
                    function N(b) {
                        return a(b).allSettled()
                    }
    
                    function O(b, c) {
                        return a(b).then(void 0, void 0, c)
                    }
    
                    function P(b, c) {
                        return a(b).nodeify(c)
                    }
                    var p = !1;
                    try {
                        throw new Error
                    } catch (a) {
                        p = !!a.stack
                    }
                    var A, r, T = B(),
                        E = function() {},
                        q = function() {
                            function a() {
                                for (var a, b; c.next;) c = c.next, a = c.task, c.task = void 0, b = c.domain, b && (c.domain = void 0, b.enter()), i(a, b);
                                for (; g.length;) a = g.pop(), i(a);
                                e = !1
                            }
    
                            function i(c, b) {
                                try {
                                    c()
                                } catch (c) {
                                    if (f) throw b && b.exit(), setTimeout(a, 0), b && b.enter(), c;
                                    setTimeout(function() {
                                        throw c
                                    }, 0)
                                }
                                b && b.exit()
                            }
                            var c = {
                                    task: void 0,
                                    next: null
                                },
                                j = c,
                                e = !1,
                                d = void 0,
                                f = !1,
                                g = [];
                            if (q = function(a) {
                                    j = j.next = {
                                        task: a,
                                        domain: f && b.domain,
                                        next: null
                                    }, e || (e = !0, d())
                                }, "object" == typeof b && "[object process]" === b.toString() && b.nextTick) f = !0, d = function() {
                                b.nextTick(a)
                            };
                            else if ("function" == typeof setImmediate) d = "undefined" != typeof window ? setImmediate.bind(window, a) : function() {
                                setImmediate(a)
                            };
                            else if ("undefined" != typeof MessageChannel) {
                                var h = new MessageChannel;
                                h.port1.onmessage = function() {
                                    d = k, h.port1.onmessage = a, a()
                                };
                                var k = function() {
                                    h.port2.postMessage(0)
                                };
                                d = function() {
                                    setTimeout(a, 0), k()
                                }
                            } else d = function() {
                                setTimeout(a, 0)
                            };
                            return q.runAfter = function(a) {
                                g.push(a), e || (e = !0, d())
                            }, q
                        }(),
                        W = Function.call,
                        d = k(Array.prototype.slice),
                        o = k(Array.prototype.reduce || function(d, b) {
                            var a = 0,
                                c = this.length;
                            if (1 === arguments.length)
                                for (;;) {
                                    if (a in this) {
                                        b = this[a++];
                                        break
                                    }
                                    if (++a >= c) throw new TypeError
                                }
                            for (; c > a; a++) a in this && (b = d(b, this[a], a));
                            return b
                        }),
                        u = k(Array.prototype.indexOf || function(b) {
                            for (var a = 0; a < this.length; a++)
                                if (this[a] === b) return a;
                            return -1
                        }),
                        t = k(Array.prototype.map || function(c, d) {
                            var a = this,
                                b = [];
                            return o(a, function(g, e, f) {
                                b.push(c.call(d, e, f, a))
                            }, void 0), b
                        }),
                        s = Object.create || function(b) {
                            function a() {}
                            return a.prototype = b, new a
                        },
                        G = Object.defineProperty || function(a, b, c) {
                            return a[b] = c.value, a
                        },
                        ba = k(Object.prototype.hasOwnProperty),
                        ca = Object.keys || function(a) {
                            var b = [];
                            for (var c in a) ba(a, c) && b.push(c);
                            return b
                        },
                        da = k(Object.prototype.toString);
                    r = "undefined" != typeof ReturnValue ? ReturnValue : function(a) {
                        this.value = a
                    };
                    var ea = "From previous event:";
                    a.resolve = a, a.nextTick = q, a.longStackSupport = !1;
                    var fa = 1;
                    "object" == typeof b && b && b.env && b.env.Q_DEBUG && (a.longStackSupport = !0), a.defer = e, e.prototype.makeNodeResolver = function() {
                        var a = this;
                        return function(b, c) {
                            b ? a.reject(b) : arguments.length > 2 ? a.resolve(d(arguments, 1)) : a.resolve(c)
                        }
                    }, a.Promise = h, a.promise = h, h.race = J, h.all = j, h.reject = f, h.resolve = a, a.passByCopy = function(a) {
                        return a
                    }, c.prototype.passByCopy = function() {
                        return this
                    }, a.join = function(b, c) {
                        return a(b).join(c)
                    }, c.prototype.join = function(b) {
                        return a([this, b]).spread(function(a, b) {
                            if (a === b) return a;
                            throw new Error("Q can't join: not the same: " + a + " " + b)
                        })
                    }, a.race = J, c.prototype.race = function() {
                        return this.then(a.race)
                    }, a.makePromise = c, c.prototype.toString = function() {
                        return "[object Promise]"
                    }, c.prototype.then = function(g, h, i) {
                        function j(a) {
                            try {
                                return "function" == typeof g ? g(a) : a
                            } catch (a) {
                                return f(a)
                            }
                        }
    
                        function k(a) {
                            if ("function" == typeof h) {
                                y(a, d);
                                try {
                                    return h(a)
                                } catch (a) {
                                    return f(a)
                                }
                            }
                            return f(a)
                        }
    
                        function l(a) {
                            return "function" == typeof i ? i(a) : a
                        }
                        var d = this,
                            b = e(),
                            c = !1;
                        return a.nextTick(function() {
                            d.promiseDispatch(function(a) {
                                c || (c = !0, b.resolve(j(a)))
                            }, "when", [function(a) {
                                c || (c = !0, b.resolve(k(a)))
                            }])
                        }), d.promiseDispatch(void 0, "when", [void 0, function(e) {
                            var c, d = !1;
                            try {
                                c = l(e)
                            } catch (b) {
                                if (d = !0, !a.onerror) throw b;
                                a.onerror(b)
                            }
                            d || b.notify(c)
                        }]), b.promise
                    }, a.tap = function(b, c) {
                        return a(b).tap(c)
                    }, c.prototype.tap = function(b) {
                        return b = a(b), this.then(function(a) {
                            return b.fcall(a).thenResolve(a)
                        })
                    }, a.when = g, c.prototype.thenResolve = function(a) {
                        return this.then(function() {
                            return a
                        })
                    }, a.thenResolve = function(b, c) {
                        return a(b).thenResolve(c)
                    }, c.prototype.thenReject = function(a) {
                        return this.then(function() {
                            throw a
                        })
                    }, a.thenReject = function(b, c) {
                        return a(b).thenReject(c)
                    }, a.nearer = K, a.isPromise = i, a.isPromiseAlike = z, a.isPending = L, c.prototype.isPending = function() {
                        return "pending" === this.inspect().state
                    }, a.isFulfilled = M, c.prototype.isFulfilled = function() {
                        return "fulfilled" === this.inspect().state
                    }, a.isRejected = Q, c.prototype.isRejected = function() {
                        return "rejected" === this.inspect().state
                    };
                    var l = [],
                        n = [],
                        w = [],
                        m = !0;
                    a.resetUnhandledRejections = v, a.getUnhandledReasons = function() {
                        return l.slice()
                    }, a.stopUnhandledRejectionTracking = function() {
                        v(), m = !1
                    }, v(), a.reject = f, a.fulfill = x, a.master = Z, a.spread = I, c.prototype.spread = function(a, b) {
                        return this.all().then(function(b) {
                            return a.apply(void 0, b)
                        }, b)
                    }, a.async = _, a.spawn = aa, a.return = ka, a.promised = ha, a.dispatch = F, c.prototype.dispatch = function(c, d) {
                        var f = this,
                            b = e();
                        return a.nextTick(function() {
                            f.promiseDispatch(b.resolve, c, d)
                        }), b.promise
                    }, a.get = function(b, c) {
                        return a(b).dispatch("get", [c])
                    }, c.prototype.get = function(a) {
                        return this.dispatch("get", [a])
                    }, a.set = function(b, c, d) {
                        return a(b).dispatch("set", [c, d])
                    }, c.prototype.set = function(a, b) {
                        return this.dispatch("set", [a, b])
                    }, a.del = a.delete = function(b, c) {
                        return a(b).dispatch("delete", [c])
                    }, c.prototype.del = c.prototype.delete = function(a) {
                        return this.dispatch("delete", [a])
                    }, a.mapply = a.post = function(b, c, d) {
                        return a(b).dispatch("post", [c, d])
                    }, c.prototype.mapply = c.prototype.post = function(a, b) {
                        return this.dispatch("post", [a, b])
                    }, a.send = a.mcall = a.invoke = function(b, c) {
                        return a(b).dispatch("post", [c, d(arguments, 2)])
                    }, c.prototype.send = c.prototype.mcall = c.prototype.invoke = function(a) {
                        return this.dispatch("post", [a, d(arguments, 1)])
                    }, a.fapply = function(b, c) {
                        return a(b).dispatch("apply", [void 0, c])
                    }, c.prototype.fapply = function(a) {
                        return this.dispatch("apply", [void 0, a])
                    }, a.try = a.fcall = function(b) {
                        return a(b).dispatch("apply", [void 0, d(arguments, 1)])
                    }, c.prototype.fcall = function() {
                        return this.dispatch("apply", [void 0, d(arguments)])
                    }, a.fbind = function(b) {
                        var c = a(b),
                            e = d(arguments, 1);
                        return function() {
                            return c.dispatch("apply", [this, e.concat(d(arguments))])
                        }
                    }, c.prototype.fbind = function() {
                        var a = this,
                            b = d(arguments);
                        return function() {
                            return a.dispatch("apply", [this, b.concat(d(arguments))])
                        }
                    }, a.keys = function(b) {
                        return a(b).dispatch("keys", [])
                    }, c.prototype.keys = function() {
                        return this.dispatch("keys", [])
                    }, a.all = j, c.prototype.all = function() {
                        return j(this)
                    }, a.any = D, c.prototype.any = function() {
                        return D(this)
                    }, a.allResolved = X(C, "allResolved", "allSettled"), c.prototype.allResolved = function() {
                        return C(this)
                    }, a.allSettled = N, c.prototype.allSettled = function() {
                        return this.then(function(b) {
                            return j(t(b, function(b) {
                                function c() {
                                    return b.inspect()
                                }
                                return b = a(b), b.then(c, c)
                            }))
                        })
                    }, a.fail = a.catch = function(b, c) {
                        return a(b).then(void 0, c)
                    }, c.prototype.fail = c.prototype.catch = function(a) {
                        return this.then(void 0, a)
                    }, a.progress = O, c.prototype.progress = function(a) {
                        return this.then(void 0, void 0, a)
                    }, a.fin = a.finally = function(b, c) {
                        return a(b).finally(c)
                    }, c.prototype.fin = c.prototype.finally = function(b) {
                        if (!b || "function" != typeof b.apply) throw new Error("Q can't apply finally callback");
                        return b = a(b), this.then(function(a) {
                            return b.fcall().then(function() {
                                return a
                            })
                        }, function(a) {
                            return b.fcall().then(function() {
                                throw a
                            })
                        })
                    }, a.done = function(b, c, d, e) {
                        return a(b).done(c, d, e)
                    }, c.prototype.done = function(d, e, f) {
                        var c = function(b) {
                                a.nextTick(function() {
                                    if (y(b, g), !a.onerror) throw b;
                                    a.onerror(b)
                                })
                            },
                            g = d || e || f ? this.then(d, e, f) : this;
                        "object" == typeof b && b && b.domain && (c = b.domain.bind(c)), g.then(void 0, c)
                    }, a.timeout = function(b, c, d) {
                        return a(b).timeout(c, d)
                    }, c.prototype.timeout = function(c, a) {
                        var b = e(),
                            d = setTimeout(function() {
                                a && "string" != typeof a || (a = new Error(a || "Timed out after " + c + " ms"), a.code = "ETIMEDOUT"), b.reject(a)
                            }, c);
                        return this.then(function(a) {
                            clearTimeout(d), b.resolve(a)
                        }, function(a) {
                            clearTimeout(d), b.reject(a)
                        }, b.notify), b.promise
                    }, a.delay = function(b, c) {
                        return void 0 === c && (c = b, b = void 0), a(b).delay(c)
                    }, c.prototype.delay = function(a) {
                        return this.then(function(c) {
                            var b = e();
                            return setTimeout(function() {
                                b.resolve(c)
                            }, a), b.promise
                        })
                    }, a.nfapply = function(b, c) {
                        return a(b).nfapply(c)
                    }, c.prototype.nfapply = function(c) {
                        var a = e(),
                            b = d(c);
                        return b.push(a.makeNodeResolver()), this.fapply(b).fail(a.reject), a.promise
                    }, a.nfcall = function(b) {
                        var c = d(arguments, 1);
                        return a(b).nfapply(c)
                    }, c.prototype.nfcall = function() {
                        var b = d(arguments),
                            a = e();
                        return b.push(a.makeNodeResolver()), this.fapply(b).fail(a.reject), a.promise
                    }, a.nfbind = a.denodeify = function(b) {
                        if (void 0 === b) throw new Error("Q can't wrap an undefined function");
                        var c = d(arguments, 1);
                        return function() {
                            var g = c.concat(d(arguments)),
                                f = e();
                            return g.push(f.makeNodeResolver()), a(b).fapply(g).fail(f.reject), f.promise
                        }
                    }, c.prototype.nfbind = c.prototype.denodeify = function() {
                        var b = d(arguments);
                        return b.unshift(this), a.denodeify.apply(void 0, b)
                    }, a.nbind = function(b, c) {
                        var f = d(arguments, 2);
                        return function() {
                            function i() {
                                return b.apply(c, arguments)
                            }
                            var h = f.concat(d(arguments)),
                                g = e();
                            return h.push(g.makeNodeResolver()), a(i).fapply(h).fail(g.reject), g.promise
                        }
                    }, c.prototype.nbind = function() {
                        var b = d(arguments, 0);
                        return b.unshift(this), a.nbind.apply(void 0, b)
                    }, a.nmapply = a.npost = function(b, c, d) {
                        return a(b).npost(c, d)
                    }, c.prototype.nmapply = c.prototype.npost = function(c, f) {
                        var b = d(f || []),
                            a = e();
                        return b.push(a.makeNodeResolver()), this.dispatch("post", [c, b]).fail(a.reject), a.promise
                    }, a.nsend = a.nmcall = a.ninvoke = function(f, g) {
                        var c = d(arguments, 2),
                            b = e();
                        return c.push(b.makeNodeResolver()), a(f).dispatch("post", [g, c]).fail(b.reject), b.promise
                    }, c.prototype.nsend = c.prototype.nmcall = c.prototype.ninvoke = function(c) {
                        var b = d(arguments, 1),
                            a = e();
                        return b.push(a.makeNodeResolver()), this.dispatch("post", [c, b]).fail(a.reject), a.promise
                    }, a.nodeify = P, c.prototype.nodeify = function(b) {
                        return b ? void this.then(function(c) {
                            a.nextTick(function() {
                                b(null, c)
                            })
                        }, function(c) {
                            a.nextTick(function() {
                                b(c)
                            })
                        }) : this
                    }, a.noConflict = function() {
                        throw new Error("Q.noConflict only works when Q is used as a global")
                    };
                    var V = B();
                    return a
                })
            }).call(this, b("_process"))
        }, {
            _process: 36
        }],
        38: [function(e, c, f) {
            function d(a, e) {
                var c = e || 0,
                    d = b;
                return [d[a[c++]], d[a[c++]], d[a[c++]], d[a[c++]], "-", d[a[c++]], d[a[c++]], "-", d[a[c++]], d[a[c++]], "-", d[a[c++]], d[a[c++]], "-", d[a[c++]], d[a[c++]], d[a[c++]], d[a[c++]], d[a[c++]], d[a[c++]]].join("")
            }
            for (var b = [], a = 0; 256 > a; ++a) b[a] = (a + 256).toString(16).substr(1);
            c.exports = d
        }, {}],
        39: [function(e, a, f) {
            var b = "undefined" != typeof crypto && crypto.getRandomValues && crypto.getRandomValues.bind(crypto) || "undefined" != typeof msCrypto && "function" == typeof window.msCrypto.getRandomValues && msCrypto.getRandomValues.bind(msCrypto);
            if (b) {
                var c = new Uint8Array(16);
                a.exports = function() {
                    return b(c), c
                }
            } else {
                var d = new Array(16);
                a.exports = function() {
                    for (var b, a = 0; 16 > a; a++) 0 === (3 & a) && (b = 4294967296 * Math.random()), d[a] = b >>> ((3 & a) << 3) & 255;
                    return d
                }
            }
        }, {}],
        40: [function(a, b, f) {
            function c(a, c, g) {
                var h = c && g || 0;
                "string" == typeof a && (c = "binary" === a ? new Array(16) : null, a = null), a = a || {};
                var b = a.random || (a.rng || d)();
                if (b[6] = 15 & b[6] | 64, b[8] = 63 & b[8] | 128, c)
                    for (var f = 0; 16 > f; ++f) c[h + f] = b[f];
                return c || e(b)
            }
            var d = a("./lib/rng"),
                e = a("./lib/bytesToUuid");
            b.exports = c
        }, {
            "./lib/bytesToUuid": 38,
            "./lib/rng": 39
        }],
        41: [function(b, a, c) {
            a.exports = Object.freeze({
                STARTED_STATE_CHANGED: "startedStateChanged",
                DEVICE_AVAILABLE: "deviceAvailable",
                AVAILABLE_DEVICE_COUNT_CHANGED: "availableDeviceCountChanged",
                SHOW_MDX_PIN: "showMdxPin",
                RETRIEVE_MDX_PIN: "retrieveMdxPin",
                SWITCH_CREDENTIALS: "switchCredentials",
                MDX_REMOTE_LOGIN_DEVICE_AVAILABLE: "mdxRemoteLoginDeviceAvailable",
                MDX_DEVICES_AVAILABLE: "mdxDevicesAvailable",
                START_CONNECTING: "startConnecting",
                START_DISCONNECTING: "startDisconnecting"
            })
        }, {}],
        42: [function(a, b, c) {
            (function(x) {
                var e = a("../builds/ld.js"),
                    c = a("./enums.js"),
                    f = a("./logging/logger.js"),
                    i = a("./profiling/mdxProfiler.js"),
                    u = a("./schedulerFactory.js"),
                    n = a("./storageFactory.js"),
                    l = a("./session/securityFactory.js"),
                    t = a("./discovery/discoveryUtils.js"),
                    j = a("./mdxError.js"),
                    m = a("./versionInfo.js"),
                    h = function() {},
                    g = null,
                    p = function(c, a, b) {
                        f.logLevel = b, a.logLevel = f.logLevel
                    },
                    q = function(f, a, b) {
                        if (a.platform.role !== c.roles.TARGET) throw new j(j.ERRORS.INVALID_CONFIG, "Registration mode is not a valid config option for " + a.platform.role);
                        var d = e.findKey(c.registrationModes, function(a) {
                            return a === b
                        });
                        if (!d) throw new j(j.ERRORS.INVALID_ARG, "Registration mode: " + b);
                        a.registrationMode = b
                    },
                    r = function(c, a, b) {
                        i.mode = b, a.profiler.mode = i.mode
                    },
                    s = function(c, b, a) {
                        e.isUndefined(g.profileId) ? g.storage.getProfileId().then(function(c) {
                            c !== a && (b.profileId = a)
                        }).fail(h).done() : b.profileId = a
                    },
                    d = function(d, a, b, c) {
                        a[c] = b
                    },
                    k = function(d, b, a, c) {
                        b[c] = "boolean" == typeof a && a
                    },
                    v = {
                        logLevel: p,
                        registrationMode: q,
                        profilerMode: r,
                        mdxContractVersion: d,
                        volumeControl: d,
                        volumeStep: d,
                        profileId: s,
                        playerStateFn: d,
                        castGuestModeEnabled: k,
                        castSessionRequestTimeout: d,
                        castAutoJoinPolicy: d,
                        castDefaultActionPolicy: d,
                        defaultFriendlyName: d,
                        ignoreDeviceFlapping: k,
                        suspendDiscoveryOnBackground: k
                    },
                    w = !1,
                    o = function() {
                        var b, q, d, s, j, p, o, r = new m(MDXJS_PRODUCT_VERSION),
                            g = null,
                            v = !1,
                            k = !1;
                        return Object.defineProperty(this, "versionInfo", {
                            enumerable: !1,
                            get: function() {
                                return r
                            }
                        }), Object.defineProperties(this, {
                            isLegacyDevice: {
                                enumerable: !0,
                                get: function() {
                                    var b, c = "undefined" != typeof nrdp && "undefined" != typeof nrdp.device && "undefined" != typeof nrdp.device.SDKVersion && "undefined" != typeof nrdp.device.SDKVersion.components;
                                    return c ? (b = a("nf-bridge-adapter").versionInfo, b.isLessThan("2014.1")) : !1
                                }
                            },
                            consolidatedLogger: {
                                enumerable: !1,
                                get: function() {
                                    var a = "undefined" != typeof nrdjs && null !== nrdjs && "function" == typeof nrdjs.getConsolidatedLogger;
                                    return a ? nrdjs.getConsolidatedLogger() : void f.warn("consolidated logging is not available")
                                }
                            },
                            isNrdjsEdgePaasRegPairEndpointAvailable: {
                                enumerable: !0,
                                get: function() {
                                    var a = b && b.id === c.platforms.NRDP_TARGET.id && "undefined" != typeof nrdjs && null !== nrdjs && nrdjs.mdx && "function" == typeof nrdjs.mdx.pair && "function" == typeof nrdjs.mdx.regpair;
                                    return a
                                }
                            },
                            isRemoteLoginSupported: {
                                enumerable: !0,
                                get: function() {
                                    var a = !1;
                                    return b && b.id === c.platforms.NRDP_TARGET.id && (a = "undefined" != typeof nrdjs && null !== nrdjs && nrdjs.config && Boolean(nrdjs.config.mdxRemoteLoginSupported), a = a && !(this.isNrdjsEdgePaasRegPairEndpointAvailable ? nrdjs.mdx.registered : nrdp.registration.registered), a = a && (e.includes(this.uiVersion, "aui") || e.includes(this.uiVersion, "signupwizard"))), a
                                }
                            },
                            isRemoteLoginRequestedByWitcher: {
                                enumerable: !0,
                                get: function() {
                                    return k
                                },
                                set: function(a) {
                                    k = Boolean(a)
                                }
                            },
                            witcherRemoteLoginSessionUuid: {
                                enumerable: !0,
                                get: function() {
                                    return o
                                },
                                set: function(a) {
                                    o = a
                                }
                            },
                            isRegPairPinConfirmationRequired: {
                                enumerable: !0,
                                get: function() {
                                    return v || k
                                },
                                set: function(a) {
                                    v = Boolean(a)
                                }
                            },
                            utf8: {
                                enumerable: !1,
                                get: function() {
                                    return a(this.isLegacyDevice ? "nf-legacy-utf8" : "nf-utf8")
                                }
                            },
                            base64: {
                                enumerable: !1,
                                get: function() {
                                    return a(this.isLegacyDevice ? "nf-legacy-base64" : "nf-base64")
                                }
                            },
                            version: {
                                enumerable: !0,
                                get: function() {
                                    return r.toString()
                                }
                            },
                            nativeVersion: {
                                enumerable: !0,
                                get: function() {
                                    var a = "";
                                    if (b) switch (b.id) {
                                        case c.platforms.CAST_TARGET.id:
                                            a = cast && cast.framework && cast.framework.VERSION || cast && cast.receiver.VERSION || a;
                                            break;
                                        case c.platforms.NRDP_TARGET.id:
                                            a = nrdp && nrdp.mdx && nrdp.mdx.nativeVersion || a;
                                    }
                                    return a
                                }
                            },
                            uiVersion: {
                                enumerable: !0,
                                get: function() {
                                    var a = "";
                                    if (b) switch (b.id) {
                                        case c.platforms.CAST_TARGET.id:
                                        case c.platforms.NRDP_TARGET.id:
                                            a = nrdp && nrdp.device && nrdp.device.UIVersion || a
                                    }
                                    return a
                                }
                            },
                            platform: {
                                enumerable: !0,
                                get: function() {
                                    return b
                                },
                                set: function(c) {
                                    var a = this;
                                    b = c, q = u.createScheduler(b), d = n.createStorageProvider(b), d && d.getProfileId().then(function(b) {
                                        a.profileId = b
                                    }).fail(h).done(), d && d.getMdxId().then(function(b) {
                                        a.currentMdxId = b
                                    }).fail(h).done()
                                }
                            },
                            mdxUuid: {
                                enumerable: !0,
                                get: function() {
                                    if (!g && (g = "", b)) switch (b.id) {
                                        case c.platforms.NRDP_TARGET.id:
                                            g = nrdp.device.ESN;
                                            break;
                                        case c.platforms.CADMIUM_CONTROLLER.id:
                                            g = l.platformCrypto ? l.platformCrypto.getEsn() : g
                                    }
                                    return g
                                },
                                set: function(a) {
                                    g = a
                                }
                            },
                            profileId: {
                                enumerable: !0,
                                get: function() {
                                    return p
                                },
                                set: function(b) {
                                    if (d && p !== b) {
                                        var c = !e.isUndefined(p);
                                        p = b, d.setProfileId(b), c && a("./session/pairing.js").clearAllPairings()
                                    }
                                }
                            },
                            isStarted: {
                                enumerable: !0,
                                writable: !0,
                                value: !1
                            },
                            logLevel: {
                                enumerable: !0,
                                writable: !0,
                                value: f.logLevel
                            },
                            registrationMode: {
                                enumerable: !0,
                                writable: !0,
                                value: c.registrationModes.DISABLED
                            },
                            pairingPin: {
                                enumerable: !0,
                                writable: !0,
                                value: "00000"
                            },
                            mdxContractVersion: {
                                enumerable: !0,
                                writable: !0,
                                value: 1
                            },
                            volumeControl: {
                                enumerable: !0,
                                writable: !0,
                                value: !1
                            },
                            volumeStep: {
                                enumerable: !0,
                                writable: !0,
                                value: ""
                            },
                            currentMdxId: {
                                enumerable: !0,
                                get: function() {
                                    return j || d.getMdxId().then(function(a) {
                                        j = a
                                    }).fail(h).done(), j
                                },
                                set: function(a) {
                                    d && j !== a && (d.setMdxId(a), j = a)
                                }
                            },
                            profiler: {
                                enumerable: !0,
                                writable: !0,
                                value: {
                                    mode: i.mode,
                                    getData: function() {
                                        return i.getData.apply(null, arguments)
                                    }
                                }
                            },
                            discoveryManagerTimeout: {
                                enumerable: !0,
                                writable: !0,
                                value: 3e4
                            },
                            discoveryComponentRetryAttempts: {
                                enumerable: !0,
                                writable: !0,
                                value: 10
                            },
                            castGuestModeEnabled: {
                                enumerable: !0,
                                writable: !0,
                                value: !1
                            },
                            castSessionRequestTimeout: {
                                enumerable: !0,
                                writable: !0,
                                value: 2e4
                            },
                            castAutoJoinPolicy: {
                                enumerable: !0,
                                writable: !0,
                                value: null
                            },
                            castDefaultActionPolicy: {
                                enumerable: !0,
                                writable: !0,
                                value: null
                            },
                            defaultFriendlyName: {
                                enumerable: !0,
                                writable: !0,
                                value: "Netflix Device"
                            },
                            scheduler: {
                                enumerable: !1,
                                get: function() {
                                    return q
                                }
                            },
                            dscMgr: {
                                enumerable: !1,
                                get: function() {
                                    return s
                                },
                                set: function(a) {
                                    s = a
                                }
                            },
                            storage: {
                                enumerable: !1,
                                get: function() {
                                    return d
                                }
                            },
                            testConfig: {
                                enumerable: w,
                                writable: !0,
                                value: null
                            },
                            localMdxPort: {
                                enumerable: !1,
                                writable: !0,
                                value: "9080"
                            },
                            playerStateFn: {
                                enumerable: !1,
                                writable: !0,
                                value: null
                            },
                            responseHeaders: {
                                enumerable: !1,
                                get: function() {
                                    var d = t.headers,
                                        a = {},
                                        f = !1;
                                    return b && (f = b.id === c.platforms.NRDP_TARGET.id && this.isNrdjsEdgePaasRegPairEndpointAvailable ? nrdjs.mdx.registered : nrdp.registration.registered), a[d.regMode] = this.registrationMode, a[d.msl] = e.isUndefined(nrdp.ntba) ? 1 : 0, a[d.caps] = "", a[d.registered] = f ? 1 : 0, a[d.mdxRemoteLoginSupported] = this.isRemoteLoginSupported ? 1 : 0, a[d.mdxRemoteLoginRequestedByWitcher] = this.isRemoteLoginSupported && k ? 1 : 0, o && (a[d.mdxRemoteLoginWitcherSessionUuid] = o), a
                                }
                            },
                            isMessageReplayAttackDetectionEnabled: {
                                enumerable: !1,
                                get: function() {
                                    var a = !1;
                                    return "undefined" != typeof nrdjs && null !== nrdjs && nrdjs.config && (a = Boolean(nrdjs.config.mdxMessageReplayAttackDetectionEnabled)), a
                                }
                            },
                            nonceTimeDeltaMilliseconds: {
                                enumerable: !1,
                                get: function() {
                                    var a = 1e4;
                                    return "undefined" != typeof nrdjs && null !== nrdjs && nrdjs.config && (a = nrdjs.config.mdxNonceTimeDeltaMilliseconds || a), a
                                }
                            },
                            nonceCacheLimit: {
                                enumerable: !1,
                                get: function() {
                                    var a = 100;
                                    return "undefined" != typeof nrdjs && null !== nrdjs && nrdjs.config && (a = nrdjs.config.mdxNonceCacheLimit || a), a
                                }
                            }
                        }), this
                    };
                b.exports = {
                    get current() {
                        return g || (g = new o)
                    },
                    reset: function() {
                        g = null
                    },
                    process: function(a, b, c) {
                        e.forEach(c, function(e, c) {
                            var d = v[c];
                            return d ? void d(a, b, e, c) : void f.error("Invalid configuration value specified: " + c)
                        })
                    }
                }
            }).call(this, "undefined" != typeof global ? global : "undefined" != typeof self ? self : "undefined" != typeof window ? window : {})
        }, {
            "../builds/ld.js": 1,
            "./discovery/discoveryUtils.js": 57,
            "./enums.js": 59,
            "./logging/logger.js": 64,
            "./mdxError.js": 70,
            "./profiling/mdxProfiler.js": 71,
            "./schedulerFactory.js": 74,
            "./session/pairing.js": 86,
            "./session/securityFactory.js": 89,
            "./storageFactory.js": 91,
            "./versionInfo.js": 99,
            "nf-base64": 2,
            "nf-bridge-adapter": 3,
            "nf-legacy-base64": 33,
            "nf-legacy-utf8": 34,
            "nf-utf8": 35
        }],
        43: [function(b, a, c) {
            a.exports = Object.freeze({
                DISCOVERY_STATE_CHANGED: "discoveryStateChanged",
                LAUNCH_STATE_CHANGED: "launchStateChanged",
                PROPERTY_CHANGED: "propertyChanged",
                NEW_APP_MESSAGE: "newAppMessage",
                APP_CONNECTION_ENDED: "appConnectionEnded"
            })
        }, {}],
        44: [function(c, b, d) {
            var a = /[https?|wss?]:\/\/([0-2][0-9]{0,2}\.[0-9]{1,3}.[0-9]{1,3}.[0-9]{1,3}):?([0-9]{0,5})?/;
            b.exports = {
                ipAddressFromLocation: function(c) {
                    var b = a.exec(c);
                    return b ? b[1] : ""
                },
                ipAddressAndPortFromLocation: function(c) {
                    var b = a.exec(c);
                    return b ? b[1] + ":" + b[2] : ""
                }
            }
        }, {}],
        45: [function(c, d, e) {
            var b = c("./mdxController.js"),
                a = function(a, c, d) {
                    return b.call(this, a, c, d), Object.defineProperties(this, {
                        wasLaunchingController: {
                            enumerable: !0,
                            value: a && a.wasLaunchingController || !1
                        }
                    }), this
                };
            a.prototype = Object.create(b.prototype), a.prototype.persistentType = "CastController", a.prototype.shouldShutDownOnUnavailable = function() {
                return this.wasExplicitLastDisconnect
            }, d.exports = a
        }, {
            "./mdxController.js": 47
        }],
        46: [function(b, e, g) {
            var c = b("../enums.js"),
                f = b("../session/castTargetSessionChrome.js"),
                d = b("./mdxTarget.js"),
                a = function(e, b, g) {
                    var a = this;
                    return d.call(a, e, b), a.session = new f(g, b.config.mdxNamespace), a.discoveryState = c.discoveryStates.AVAILABLE, a.launchState = c.launchStates.LAUNCHED, a
                };
            a.prototype = Object.create(d.prototype), a.prototype.persistentType = "CastTarget", a.prototype.stopApp = function() {
                return this.session.stop()
            }, e.exports = a
        }, {
            "../enums.js": 59,
            "../session/castTargetSessionChrome.js": 79,
            "./mdxTarget.js": 50
        }],
        47: [function(b, f, j) {
            var a = (b("../logging/logger.js"), b("../enums.js")),
                d = b("../discovery/discoveryEvents.js"),
                e = b("./mdxDevice.js"),
                g = b("./deviceUtils.js"),
                h = function(b) {
                    b.device === this && (this.discoveryState = a.discoveryStates.AVAILABLE)
                },
                i = function(b) {
                    b.device === this && (this.discoveryState = a.discoveryStates.UNAVAILABLE)
                },
                c = function(b, c, j) {
                    e.call(this, b, c, j), Object.defineProperties(this, {
                        controllerType: {
                            enumerable: !0,
                            value: b && b.controllerType || a.controllerTypes.MDX
                        },
                        mdxInfo: {
                            enumerable: !0,
                            writable: !0,
                            value: {
                                location: b.location,
                                isAvailable: !0,
                                capabilities: [],
                                ipAddressAndPort: g.ipAddressAndPortFromLocation(b.location)
                            }
                        },
                        ipAddress: {
                            enumerable: !1,
                            writable: !0,
                            value: ""
                        }
                    });
                    var f = [];
                    return f.push({
                        name: d.DEVICE_REFOUND,
                        handler: c.addEventListener(d.DEVICE_REFOUND, h.bind(this))
                    }), f.push({
                        name: d.DEVICE_GONE,
                        handler: c.addEventListener(d.DEVICE_GONE, i.bind(this))
                    }), this.discoveryState = a.discoveryStates.AVAILABLE, this.disposeInternal = function() {
                        for (; f.length;) {
                            var a = f.pop();
                            c.removeEventListener(a.name, a.handler)
                        }
                    }, this
                };
            c.prototype = Object.create(e.prototype), c.prototype.CONTROLLER_TYPES = a.controllerTypes, c.prototype.getPersistentData = function() {
                return this.controllerType !== a.controllerTypes.MDX ? null : e.prototype.getPersistentData.call(this)
            }, c.prototype.dispose = function() {
                return this.disposeInternal(), e.prototype.dispose.call(this)
            }, f.exports = c
        }, {
            "../discovery/discoveryEvents.js": 55,
            "../enums.js": 59,
            "../logging/logger.js": 64,
            "./deviceUtils.js": 44,
            "./mdxDevice.js": 48
        }],
        48: [function(b, l, n) {
            var g = b("q"),
                j = b("../../builds/ld.js"),
                d = b("../logging/logger.js"),
                c = b("../enums.js"),
                e = b("./deviceEvents.js"),
                h = b("../profiling/mdxProfiler.js"),
                i = b("../eventManager.js"),
                f = b("../mdxError.js"),
                m = b("./mdxMsgStreamBinding.js"),
                k = b("../utils"),
                a = function(a, r, q) {
                    var l, g = this,
                        b = c.discoveryStates.UNKNOWN,
                        h = new i,
                        m = new i,
                        n = a && a.mdxUuid,
                        o = a && a.currentMdxId,
                        p = a && a.sharedSecret,
                        f = q;
                    return f && (f.device = this, f.messageNonceCache = a && a.messageNonceCache), Object.defineProperties(this, {
                        id: {
                            enumerable: !0,
                            get: function() {
                                if (l) return l;
                                var b = a && a.id,
                                    c = k.getEpochTime();
                                return l = b || parseInt(j.uniqueId(c)).toString(16)
                            }
                        },
                        lastSeen: {
                            enumerable: !0,
                            writable: !0,
                            value: k.getEpochTime()
                        },
                        evtMgr: {
                            enumerable: !1,
                            get: function() {
                                return h
                            }
                        },
                        msgMgr: {
                            enumerable: !1,
                            get: function() {
                                return m
                            }
                        },
                        discoveryComponent: {
                            enumerable: !1,
                            get: function() {
                                return r
                            }
                        },
                        discoveryState: {
                            enumerable: !0,
                            get: function() {
                                return b
                            },
                            set: function(a) {
                                if (b !== a) {
                                    b = a, g.onDiscoveryStateUpdated && g.onDiscoveryStateUpdated.call(g, b);
                                    var f = {
                                        device: g,
                                        state: b
                                    };
                                    b === c.discoveryStates.UNAVAILABLE && g.shouldShutDownOnUnavailable() && (f.shouldShutDown = !0);
                                    try {
                                        h.fireEvent(e.DISCOVERY_STATE_CHANGED, f)
                                    } catch (a) {
                                        d.warn("Event handler exception", a)
                                    }
                                }
                            }
                        },
                        isAvailable: {
                            enumerable: !0,
                            get: function() {
                                var a = c.discoveryStates;
                                return b === a.AVAILABLE || b === a.PENDING
                            }
                        },
                        mdxUuid: {
                            enumerable: !0,
                            get: function() {
                                return n
                            },
                            set: function(a) {
                                n = a
                            }
                        },
                        currentMdxId: {
                            enumerable: !0,
                            get: function() {
                                return o
                            },
                            set: function(a) {
                                o = a
                            }
                        },
                        sharedSecret: {
                            enumerable: !0,
                            get: function() {
                                return p
                            },
                            set: function(a) {
                                p = a
                            }
                        },
                        session: {
                            enumerable: !1,
                            get: function() {
                                return f
                            },
                            set: function(a) {
                                f = a, f && (f.device = this)
                            }
                        }
                    }), this.addEventListener = h.addEventListener.bind(this), this.removeEventListener = h.removeEventListener.bind(this), this.addMessageListener = m.addEventListener.bind(this), this.removeMessageListener = m.removeEventListener.bind(this), this
                };
            a.prototype.EVENTS = e, a.prototype.DISCOVERY_STATES = c.discoveryStates, a.prototype.LAUNCH_STATES = c.launchStates, a.prototype.shouldShutDownOnUnavailable = function() {
                return !1
            }, a.prototype.onAppMessage = function(a) {
                try {
                    var b = this;
                    if (h.currentIntent && ("PLAYER_STATE_CHANGED" === a.type ? h.currentIntent.processStateChange(a.payload) : "AUDIO_SUBTITLES_CHANGED" === a.type && h.currentIntent.processAudioSubtitlesChanged(a.payload)), b.launchState === c.launchStates.UNKNOWN || b.launchState === c.launchStates.NOT_LAUNCHED) return void d.warn("Dropping app message because the device is not launched. Launch State: " + b.launchState, a);
                    var f = j.merge({
                        device: b
                    }, a);
                    b.msgMgr.fireEvent(a.type, f), f.name = f.type, b.evtMgr.fireEvent(e.NEW_APP_MESSAGE, f)
                } catch (a) {
                    d.warn("Msg handler exception", a)
                }
            }, a.prototype.sendAppMessage = function(c, d) {
                var a, b = this.session;
                return b ? b.errMsgCount > 2 ? (a = "Dropping message to device due to session error message threshold exceeded", g.reject(new f(f.ERRORS.MESSAGING_ERROR), a)) : b.sendAppMessage(c, d) : (a = "Device " + this.id + " has no active session. Dropping message", g.reject(new f(f.ERRORS.NOT_CONNECTED), a))
            }, a.prototype.getPersistentData = function() {
                var a = this,
                    b = {
                        type: a.persistentType,
                        id: a.id,
                        mdxUuid: a.mdxUuid,
                        currentMdxId: a.currentMdxId,
                        sharedSecret: a.sharedSecret,
                        lastSeen: a.lastSeen
                    };
                return a.session && (b.messageNonceCache = a.session.messageNonceCache), b
            }, a.prototype.clearPairing = function() {
                var a = this;
                a.session && a.session.end(!!a.session.mdxSessionId, !0), a.sharedSecret = null, a.currentMdxId = null
            }, a.prototype.blacklist = function(a) {
                d.error("Device was blacklisted: " + a), this.discoveryState = c.discoveryStates.ERROR
            }, a.prototype.disconnectFromApp = function() {
                var b = this,
                    a = b.session;
                if (a) {
                    var d = b.launchState === c.launchStates.LAUNCHED && null !== a.mdxSessionId;
                    return a.end(d, !0)
                }
                return g.resolve()
            }, a.prototype.dispose = function() {
                var a = this;
                return a.session && (a.session.end(!1), a.session = null), g.resolve()
            }, a.prototype.onAppConnectionEnded = function() {
                try {
                    this.evtMgr.fireEvent(e.APP_CONNECTION_ENDED, {
                        device: this
                    })
                } catch (a) {
                    d.error("UI exception handling APP_CONNECTION_ENDED", a, a.stack)
                }
            }, a.prototype.bindMsgStream = function(a, b, c, d) {
                return new m(this, a, b, c, d)
            }, l.exports = a
        }, {
            "../../builds/ld.js": 1,
            "../enums.js": 59,
            "../eventManager.js": 60,
            "../logging/logger.js": 64,
            "../mdxError.js": 70,
            "../profiling/mdxProfiler.js": 71,
            "../utils": 98,
            "./deviceEvents.js": 43,
            "./mdxMsgStreamBinding.js": 49,
            q: 37
        }],
        49: [function(a, g, i) {
            var b = a("../../builds/ld.js"),
                c = a("../configuration.js"),
                d = a("../mdxError.js"),
                h = function(b) {
                    var a = this;
                    a.listener && a.listener.call(a, b.type, b.payload, a)
                },
                e = function(d) {
                    var a = this;
                    a.delayId && c.current.scheduler.cancelDelay(a.delayId), b.forEach(a.msgNames, function(b) {
                        a.device.removeMessageListener(b, a.onStreamMessage)
                    }), a.onStopped && a.onStopped(d), a.onStopped = null, a.listener = null, a.msgNames = null
                },
                f = function(f, g, i, l, j) {
                    var a = this,
                        k = "function" == typeof j ? j : null;
                    Object.defineProperties(a, {
                        device: {
                            enumerable: !1,
                            writable: !1,
                            value: f
                        },
                        msgNames: {
                            enumerable: !1,
                            writable: !1,
                            value: g
                        },
                        listener: {
                            enumerable: !0,
                            writable: !0,
                            value: l
                        },
                        onStopped: {
                            enumerable: !0,
                            get: function() {
                                return k
                            },
                            set: function(a) {
                                if (null != a && "function" != typeof a) throw new d(d.ERRORS.INVALID_ARG, "MdxMsgStreamBinding.onStopped must be a function");
                                k = a
                            }
                        },
                        onStreamMessage: {
                            enumerable: !1,
                            writable: !1,
                            value: h.bind(a)
                        },
                        delayId: {
                            enumerable: !1,
                            writable: !0,
                            value: null
                        }
                    }), b.forEach(g, function(b) {
                        f.addMessageListener(b, a.onStreamMessage)
                    });
                    var m = parseInt(i);
                    return m > 0 && (a.delayId = c.current.scheduler.delay(e.bind(a, !0), i)), this
                };
            f.prototype.stop = function() {
                e.call(this, !1)
            }, g.exports = f
        }, {
            "../../builds/ld.js": 1,
            "../configuration.js": 42,
            "../mdxError.js": 70
        }],
        50: [function(h, q, s) {
            var k = h("q"),
                c = h("../../builds/ld.js"),
                j = h("../logging/logger.js"),
                l = h("./deviceEvents.js"),
                b = h("../enums.js"),
                p = h("../configuration.js"),
                d = h("../profiling/mdxProfiler.js"),
                m = h("../discovery/discoveryUtils.js"),
                i = h("./mdxDevice.js"),
                g = h("../mdxError.js"),
                r = 12e4,
                o = [g.ERRORS.USER_MISMATCH.code, g.ERRORS.REGISTRATION_NOT_SUPPORTED.code, g.ERRORS.APP_NOT_RUNNING.code, g.ERRORS.CANCELLED.code],
                n = function(a, b) {
                    return a && a.headers ? a.headers[b] || a.headers[b.toLowerCase()] : void 0
                },
                a = function(d, h) {
                    i.call(this, d, h);
                    var a = b.launchStates.UNKNOWN,
                        e = d && d.friendlyName || "Device " + this.id,
                        f = n.bind(this, d),
                        k = "1" === f(m.headers.msl),
                        g = "1" === f(m.headers.registered);
                    return Object.defineProperties(this, {
                        friendlyName: {
                            enumerable: !0,
                            get: function() {
                                return e
                            },
                            set: function(a) {
                                if (e !== a) {
                                    var b = {
                                        device: this,
                                        property: "friendlyName",
                                        oldValue: e,
                                        newValue: a
                                    };
                                    e = a;
                                    try {
                                        this.evtMgr.fireEvent(l.PROPERTY_CHANGED, b)
                                    } catch (a) {
                                        j.warn("Event handler exception", a)
                                    }
                                }
                            }
                        },
                        launchState: {
                            enumerable: !0,
                            get: function() {
                                return a
                            },
                            set: function(d) {
                                d = c.find(b.launchStates, function(a) {
                                    return d === a
                                }), a !== d && (a = d || b.launchStates.UNKNOWN, a === b.launchStates.NOT_LAUNCHED && this.session && this.session.end(!1, !0), this.evtMgr.fireEvent(l.LAUNCH_STATE_CHANGED, {
                                    device: this,
                                    launchState: a
                                }))
                            }
                        },
                        isRegistered: {
                            enumerable: !0,
                            get: function() {
                                return g
                            },
                            set: function(a) {
                                g = Boolean(a)
                            }
                        },
                        isMsl: {
                            enumerable: !0,
                            get: function() {
                                return k
                            },
                            set: function(a) {
                                return Boolean(a)
                            }
                        },
                        targetType: {
                            enumerable: !0,
                            get: function() {
                                return this.persistentType
                            }
                        }
                    }), this
                };
            a.prototype = Object.create(i.prototype), a.getMdxDiscoveryHeader = n, a.prototype.onDiscoveryStateUpdated = function(a) {
                switch (a) {
                    case b.discoveryStates.UNAVAILABLE:
                    case b.discoveryStates.ERROR:
                        this.launchState = b.launchStates.NOT_LAUNCHED;
                        break;
                    case b.discoveryStates.PENDING:
                        this.launchState = b.launchStates.PENDING
                }
            }, a.prototype.getPersistentData = function() {
                var a = i.prototype.getPersistentData.call(this);
                return c.merge(a, {
                    friendlyName: this.friendlyName
                })
            }, a.prototype.CONNECT_INTENTS = b.connectIntents, a.prototype.connectToApp = function(c, e) {
                var a = this,
                    f = a.id,
                    h = a.session,
                    m = d.newEvent(d.EVENTS.CONNECT, a.id),
                    i = b.connectIntents;
                if (c !== i.JOIN && c !== i.LAUNCH && c !== i.LAUNCH_AND_CONTROL) return k.reject(new g(g.ERRORS.INVALID_ARG, "Invalid connect intent specified"));
                if (e = e || h.device.discoveryComponent.config.defaultLaunchArgs, j.info("Attempting to connect to target " + f + " with intent " + c + " and payload " + e), !a.isAvailable) return k.reject(new g(g.ERRORS.CONNECT_FAILED, "Cannot connect to a device that isn't available"));
                var l = k.defer();
                return h.connectToTarget(c, e, m).timeout(r, "Timed out waiting for the target connection to complete").then(function() {
                    j.info("Connection successfully established to " + f), l.resolve()
                }, function(c) {
                    c && -1 === o.indexOf(c.code) && (j.error("Failed to connect to " + f, c), h.end(!1)), a.launchState === b.launchStates.PENDING && (a.launchState = b.launchStates.NOT_LAUNCHED), l.reject(c || new g(g.ERRORS.CONNECT_FAILED, c && c.message))
                }).finally(function() {
                    m.complete()
                }), l.promise
            }, a.prototype.cancelPendingConnections = function() {
                this.session && this.session.cancelPendingConnections()
            }, a.prototype.disconnectFromApp = function(d) {
                var a, b = this,
                    c = b.session;
                return c && (c.cancelPendingConnections(), c.disconnectDeferred && (a = c.disconnectDeferred.promise)), a = a || i.prototype.disconnectFromApp.call(b), d && "function" == typeof b.stopApp && (a = a.then(b.stopApp.bind(b)).timeout(2e3, "Timed out trying to stop the target application")), a
            };
            var e = function(a) {
                    a.failed("Failed ack")
                },
                f = function(a, b) {
                    return a.ack(), b.toString()
                };
            a.prototype.play = function(g, h, i) {
                var a = this,
                    b = d.registerUserIntent("PLAY", a),
                    j = {
                        catalogId: g,
                        trackId: h,
                        esn: p.current.mdxUuid
                    },
                    k = c.merge(j, i || {});
                return a.sendAppMessage("PLAYER_PLAY", k).then(f.bind(a, b), e.bind(a, b))
            }, a.prototype.pause = function(b, h) {
                var a = this,
                    g = d.registerUserIntent("PAUSE", a, b),
                    i = c.merge({
                        xid: b
                    }, h || {});
                return a.sendAppMessage("PLAYER_PAUSE", i).then(f.bind(a, g), e.bind(a, g))
            }, a.prototype.resume = function(b, h) {
                var a = this,
                    g = d.registerUserIntent("RESUME", a, b),
                    i = c.merge({
                        xid: b
                    }, h || {});
                return a.sendAppMessage("PLAYER_RESUME", i).then(f.bind(a, g), e.bind(a, g))
            }, a.prototype.stop = function(b, h) {
                var a = this,
                    g = d.registerUserIntent("STOP", a, b),
                    i = c.merge({
                        xid: b
                    }, h || {});
                return a.sendAppMessage("PLAYER_STOP", i).then(f.bind(a, g), e.bind(a, g))
            }, a.prototype.skip = function(b, h, i) {
                var a = this,
                    g = d.registerUserIntent("SKIP", a, b),
                    j = c.merge({
                        xid: b,
                        seconds: h
                    }, i || {});
                return a.sendAppMessage("PLAYER_SKIP", j).then(f.bind(a, g), e.bind(a, g))
            }, a.prototype.skipIntro = function(b, h, i) {
                var a = this,
                    g = d.registerUserIntent("SKIP_SEGMENT", a, b, {
                        invoc_src: h
                    }),
                    j = c.merge({
                        xid: b
                    }, i || {});
                return a.sendAppMessage("PLAYER_SKIP_INTRO", j).then(f.bind(a, g), e.bind(a, g))
            }, a.prototype.setTime = function(b, h, i) {
                var a = this,
                    g = d.registerUserIntent("SET_TIME", a, b),
                    j = c.merge({
                        xid: b,
                        time: h
                    }, i || {});
                return a.sendAppMessage("PLAYER_SET_CURRENT_TIME", j).then(f.bind(a, g), e.bind(a, g))
            }, a.prototype.autoAdvance = function(b, h, i) {
                var a = this,
                    g = d.registerUserIntent("AUTO_ADVANCE", a, b),
                    j = c.merge({
                        xid: b,
                        autoAdvanceMaxIncrement: h
                    }, i || {});
                return a.sendAppMessage("PLAYER_SET_AUTO_ADVANCE", j).then(f.bind(a, g), e.bind(a, g))
            }, a.prototype.setVolume = function(b, h, i) {
                var a = this,
                    g = d.registerUserIntent("SET_VOLUME", a, b),
                    j = c.merge({
                        xid: b,
                        volume: h
                    }, i || {});
                return a.sendAppMessage("PLAYER_SET_VOLUME", j).then(f.bind(a, g), e.bind(a, g))
            }, a.prototype.getPlayerState = function(a) {
                return this.sendAppMessage("PLAYER_GET_CURRENT_STATE", a || {})
            }, a.prototype.getCapabilities = function(a) {
                return this.sendAppMessage("PLAYER_GET_CAPABILITIES", a || {})
            }, a.prototype.getAudioSubtitles = function(a, b) {
                var d = c.merge({
                    xid: a
                }, b || {});
                return this.sendAppMessage("GET_AUDIO_SUBTITLES", d)
            }, a.prototype.setAudioSubtitles = function(i, j, b) {
                var a = this,
                    g = "SET_AUDIO_SUBTITLES",
                    h = d.registerUserIntent(g, a, b && b.xid),
                    k = c.merge({
                        audio_track_id: i,
                        timed_text_track_id: j
                    }, b || {});
                return a.sendAppMessage(g, k).then(f.bind(a, h), e.bind(a, h))
            }, a.prototype.dismissPostPlay = function(b, h) {
                var a = this,
                    g = d.registerUserIntent("DISMISS_POSTPLAY", a, b),
                    i = c.merge({
                        xid: b
                    }, h || {});
                return a.sendAppMessage("POSTPLAY_STOP", i).then(f.bind(a, g), e.bind(a, g))
            }, a.prototype.suspendDiscovery = function(a) {
                this.isAvailable && (this.discoveryState = a ? b.discoveryStates.PENDING : b.discoveryStates.UNAVAILABLE)
            }, q.exports = a
        }, {
            "../../builds/ld.js": 1,
            "../configuration.js": 42,
            "../discovery/discoveryUtils.js": 57,
            "../enums.js": 59,
            "../logging/logger.js": 64,
            "../mdxError.js": 70,
            "../profiling/mdxProfiler.js": 71,
            "./deviceEvents.js": 43,
            "./mdxDevice.js": 48,
            q: 37
        }],
        51: [function(a, o, t) {
            var e = a("q"),
                k = a("../../builds/ld.js"),
                f = a("../logging/logger.js"),
                c = a("../configuration.js"),
                d = a("./discoveryEvents.js"),
                h = a("../profiling/mdxProfiler.js"),
                g = a("./discoveryUtils.js"),
                n = a("../enums.js"),
                l = a("./discoveryComponent.js"),
                i = a("../devices/mdxCastTargetChrome.js"),
                b = a("../mdxError.js"),
                p = function(a) {
                    this.evtMgr.fireEvent(d.MDX_DEVICES_AVAILABLE, {
                        available: a === chrome.cast.ReceiverAvailability.AVAILABLE
                    })
                },
                q = {
                    mdxUuid: g.nonEmptyString,
                    friendlyName: g.nonEmptyString,
                    ipAddress: g.nonEmptyString
                },
                m = function(j, e) {
                    var l = this,
                        f = j.receiver,
                        m = f.label ? f.label.substr(5) : "",
                        b = {
                            mdxUuid: m,
                            friendlyName: f.friendlyName,
                            ipAddress: f.ipAddress || "0.0.0.0"
                        };
                    if (g.isValidDeviceInfo(b, q)) {
                        var a = c.current.dscMgr.getDeviceByMdxUuid(m);
                        return a ? (a.discoveryState = n.discoveryStates.AVAILABLE, a.launchState = n.launchStates.LAUNCHED, a.session.castSession = j, l.evtMgr.fireEvent(d.DEVICE_REFOUND, {
                            device: a,
                            deviceInfo: b
                        }), void(e && e.resolve(a))) : void c.current.storage.retrieveDeviceMapData().then(function(f) {
                            var g = i.prototype.persistentType,
                                c = k.find(f, function(a) {
                                    return a.type === g && a.mdxUuid === b.mdxUuid
                                });
                            c && (b = k.merge(c, b)), a = new i(b, l, j), h.addDevice(a.id, {
                                name: a.id
                            }), h.newMarker(h.EVENTS.DEVICE_FOUND, a.id), l.evtMgr.fireEvent(d.DEVICE_FOUND, {
                                device: a
                            }), e && e.resolve(a)
                        }).fail(function() {}).done()
                    }
                },
                r = function(a) {
                    m.call(this, a)
                },
                s = function(b, a) {
                    try {
                        "cast" === a ? this.evtMgr.fireEvent(d.START_CONNECTING, {}) : "stop" === a && this.evtMgr.fireEvent(d.START_DISCONNECTING, {})
                    } catch (a) {
                        f.warn("castReceiverConnectionListener exception", a)
                    }
                },
                j = function(d) {
                    var a = this;
                    return l.call(a, d, "CAST-CHROME", "cast"), a.targetInstanceType = i, a.start = function() {
                        if (!chrome || !chrome.cast || !chrome.cast.isAvailable) return e.reject(new b(b.ERRORS.START_ERROR, "CAST SDK is not available"));
                        var d = e.defer(),
                            g = this.config.appId;
                        f.info.always("Initializing Cast SDK - Version: " + chrome.cast.VERSION.join(".") + " - AppId: " + g), chrome.cast.timeout.requestSession = c.current.castSessionRequestTimeout;
                        var h = new chrome.cast.SessionRequest(g),
                            i = new chrome.cast.ApiConfig(h, r.bind(this), p.bind(this), c.current.castAutoJoinPolicy || chrome.cast.AutoJoinPolicy.ORIGIN_SCOPED, c.current.castDefaultActionPolicy || chrome.cast.DefaultActionPolicy.CREATE_SESSION);
                        return chrome.cast.initialize(i, function() {
                            a.isStarted = !0, chrome.cast.addReceiverActionListener(s.bind(a)), d.resolve()
                        }, function(a) {
                            f.error("CAST SDK initialization failure!", a), d.reject(new b(b.ERRORS.START_ERROR, "CAST SDK Initialization failed. Code: " + (a && a.code) + " - Description: " + (a && a.description)))
                        }), d.promise
                    }, a.stop = function() {
                        return e.reject(new b(b.ERRORS.PLATFORM_SUPPORT_ERROR))
                    }, a.requestMdxDevice = function() {
                        var c = e.defer(),
                            d = function(a) {
                                try {
                                    var b = a && a.friendlyName || "";
                                    c.notify({
                                        friendlyName: b
                                    })
                                } catch (a) {}
                            };
                        return chrome.cast.addReceiverActionListener(d), chrome.cast.requestSession(function(b) {
                            chrome.cast.removeReceiverActionListener(d), m.call(a, b, c)
                        }, function(a) {
                            var d;
                            switch (a.code) {
                                case chrome.cast.ErrorCode.CANCEL:
                                    d = new b(b.ERRORS.CANCELLED);
                                    break;
                                default:
                                    var e = "CAST SDK session request failed. Code: " + (a && a.code) + " - Description: " + (a && a.description);
                                    f.error(e), d = new b(b.ERRORS.CONNECT_FAILED, e)
                            }
                            c.reject(d)
                        }), c.promise
                    }, this
                };
            j.prototype = Object.create(l.prototype), o.exports = j
        }, {
            "../../builds/ld.js": 1,
            "../configuration.js": 42,
            "../devices/mdxCastTargetChrome.js": 46,
            "../enums.js": 59,
            "../logging/logger.js": 64,
            "../mdxError.js": 70,
            "../profiling/mdxProfiler.js": 71,
            "./discoveryComponent.js": 53,
            "./discoveryEvents.js": 55,
            "./discoveryUtils.js": 57,
            q: 37
        }],
        52: [function(c, u, B) {
            var d, m, o, j = c("q"),
                h = c("../../builds/ld.js"),
                f = c("../logging/logger.js"),
                e = c("../profiling/mdxProfiler.js"),
                x = c("../enums.js"),
                l = c("./discoveryEvents.js"),
                b = c("../configuration.js"),
                k = c("./discoveryComponent.js"),
                A = c("../session/castControllerSession.js"),
                g = c("../devices/mdxCastController.js"),
                y = c("../versionInfo.js"),
                z = c("../eventManager.js"),
                s = 2e3,
                a = {
                    mediaManager: null,
                    mdxMessageBus: null,
                    mediaMessageBus: null,
                    sessions: {},
                    pendingConnections: {}
                },
                n = function(b, d, g) {
                    var f = a.sessions,
                        c = f[b.session.senderId];
                    d !== c.senderId && (f[d] = c, delete f[c.senderId], c.senderId = d), b.lastSeen = (new Date).valueOf(), this.evtMgr.fireEvent(l.DEVICE_REFOUND, {
                        device: b
                    }), e.newMarker(e.EVENTS.DEVICE_REFOUND, b.id, g)
                },
                v = function(j, f, q, r) {
                    var i = this,
                        p = f.controlleruuid,
                        c = h.find(b.current.dscMgr.devices, function(a) {
                            return a instanceof g && a.mdxUuid === p
                        }),
                        s = new y(f.controllerMdxVersion);
                    b.current.mdxUuid = f.uuid;
                    var t = f.opts || {};
                    if (c) n.call(i, c, j, q), c.session.processMdxMessage(f, new Date), e.newEvent(e.EVENTS.CAST_HANDSHAKE, c.id, r, new Date);
                    else {
                        var o = {
                                mdxUuid: p,
                                wasLaunchingController: j === m,
                                controllerType: x.controllerTypes.MDX
                            },
                            k = new A(s, j, a.mdxMessageBus, t);
                        a.sessions[j] = k, b.current.storage.retrieveDeviceMapData().then(function(m) {
                            var n = g.prototype.persistentType,
                                j = h.find(m, function(a) {
                                    return a.type === n && a.mdxUuid === p
                                });
                            if (j && (o = h.merge(j, o)), c = new g(o, i, k), k.sendHandshakeResponse.call(k), d) {
                                var a = d,
                                    r = f.payload || i.config.defaultLaunchArgs;
                                i.isStarted = !0, a.profilerEvent.complete(), b.current.scheduler.cancelDelay(a.defaultLaunchArgsTimeout), a.resolve(r)
                            }
                            i.evtMgr.fireEvent.call(i, l.DEVICE_FOUND, {
                                device: c
                            });
                            var s = e.EVENTS.DEVICE_FOUND;
                            e.addDevice(c.id, {
                                name: c.id
                            }), e.newMarker(s, c.id, q)
                        }).fail(function() {}).done()
                    }
                },
                w = function(b) {
                    f.warn("New sender connected but did not receive the cast handshake, so requesting it");
                    try {
                        a.mdxMessageBus.send(b, {
                            type: "castHandShakeRequest"
                        })
                    } catch (a) {
                        f.error("Unexpected failure to send cast handshake request to the controller", a)
                    }
                },
                p = function(d) {
                    var e = new Date,
                        c = d.senderId,
                        f = c.substr(c.indexOf(":") + 1);
                    if (f) {
                        var i = h.find(b.current.dscMgr.devices, function(a) {
                            return a instanceof g && a.session.senderGuid === f
                        });
                        if (i) return void n.call(this, i, c, e)
                    }
                    var j = {
                        delayId: b.current.scheduler.delay(w.bind(this, c), s),
                        foundTime: e
                    };
                    a.pendingConnections[d.senderId] = j
                },
                q = function(c) {
                    var a = h.find(b.current.dscMgr.devices, function(a) {
                        return a instanceof g && a.session.senderId === c.senderId
                    });
                    if (a) {
                        var d = h.isString(c.reason) && "requested_by_sender" === c.reason.toLowerCase() || !1;
                        a.wasExplicitLastDisconnect = d, e.newMarker(e.EVENTS.DEVICE_GONE, a.id), this.evtMgr.fireEvent(l.DEVICE_GONE, {
                            device: a
                        })
                    }
                },
                r = function(c) {
                    var g = new Date,
                        d = c.senderId,
                        h = a.sessions[d],
                        e = a.pendingConnections[d];
                    if (h) h.processMdxMessage(c.data, g);
                    else if (e) {
                        b.current.scheduler.cancelDelay(e.delayId);
                        var i = c.data;
                        if ("castHandShake" !== i.type) return void f.error("Initial message for pending connection was not a handshake", c);
                        v.call(this, d, i, e.foundTime, g), delete a.pendingConnections[d]
                    } else f.warn("Received an unexpected message on the cast message bus", c)
                },
                t = function(e) {
                    var a = e,
                        d = new z,
                        b = {
                            READY: "ready",
                            SENDER_CONNECTED: "senderConnected",
                            SENDER_DISCONNECTED: "senderDisconnected",
                            SHUTDOWN: "shutdown",
                            STANDBY_CHANGED: "standbyChanged",
                            VISIBILITY_CHANGED: "visibilityChanged"
                        };
                    Object.defineProperties(this, {
                        systemVolume: {
                            enumerable: !1,
                            writable: !0,
                            value: {
                                level: 1,
                                muted: !1
                            }
                        }
                    });
                    var c = function(a, b) {
                        try {
                            d.fireEvent(a, b)
                        } catch (a) {
                            f.error("Exception when handling CAST receiver event", a, a.stack)
                        }
                    };
                    return a.onReady = c.bind(null, b.READY), a.onSenderConnected = c.bind(null, b.SENDER_CONNECTED), a.onSenderDisconnected = c.bind(null, b.SENDER_DISCONNECTED), a.onShutdown = c.bind(null, b.SHUTDOWN), a.onStandbyChanged = c.bind(null, b.STANDBY_CHANGED), a.onVisibilityChanged = c.bind(null, b.VISIBILITY_CHANGED), this.EVENTS = b, this.addEventListener = d.addEventListener, this.removeEventListener = d.removeEventListener, this.dispose = function() {
                        a.onReady = null, a.onSenderConnected = null, a.onSenderDisconnected = null, a.onShutdown = null, a.onStandbyChanged = null, a.onVisibilityChanged = null, a = null
                    }, this
                },
                i = function(h) {
                    k.call(this, h, "CAST-TARGET", "cast");
                    var c = this;
                    return this.targetInstanceType = g, this.start = function(x, w) {
                        var g, l, k, s = w.newSubEvent(e.EVENTS.START_CAST_DISC);
                        if (cast.framework) {
                            d = j.defer(), d.profilerEvent = s;
                            var i = cast.framework.CastReceiverContext.getInstance();
                            return g = cast.framework.system.EventType, i.addEventListener(g.SENDER_CONNECTED, p.bind(c)), i.addEventListener(g.SENDER_DISCONNECTED, q.bind(c)), i.addCustomMessageListener(c.config.mdxNamespace, r.bind(c)), a.mdxMessageBus = {
                                send: function(a, b) {
                                    i.sendCustomMessage(c.config.mdxNamespace, a, b)
                                }
                            }, l = function b(a) {
                                f.trace("Cast Receiver Manager: onReady", a), i.removeEventListener(g.READY, b), m = a.data.launchingSenderId, o = a.data.sessionId
                            }, i.addEventListener(g.READY, l), k = new cast.framework.CastReceiverOptions, k.disableIdleTimeout = true, k.skipPlayersLoad = !0, d.defaultLaunchArgsTimeout = b.current.scheduler.delay(function() {
                                c.isStarted = !0, d.resolve(c.config.defaultLaunchArgs)
                            }, 2e3), i.start(k), d.promise
                        }
                        d = j.defer(), d.profilerEvent = s;
                        var n = cast.receiver.CastReceiverManager.getInstance(),
                            h = new t(n);
                        g = h.EVENTS, h.addEventListener(g.SENDER_CONNECTED, p.bind(c)), h.addEventListener(g.SENDER_DISCONNECTED, q.bind(c)), b.current.castReceiver = h;
                        var u = n.getCastMessageBus(c.config.mdxNamespace, cast.receiver.CastMessageBus.MessageType.JSON);
                        u.onMessage = r.bind(c), a.mdxMessageBus = u;
                        var v = n.getCastMessageBus(cast.receiver.media.MEDIA_NAMESPACE, cast.receiver.CastMessageBus.MessageType.JSON);
                        return a.mediaMessageBus = v, l = function b(a) {
                            f.trace("Cast Receiver Manager: onReady", a), h.removeEventListener(h.EVENTS.READY, b), m = a.data.launchingSenderId, o = a.data.sessionId
                        }, h.addEventListener(h.EVENTS.READY, l), d.defaultLaunchArgsTimeout = b.current.scheduler.delay(function() {
                            c.isStarted = !0, d.resolve(c.config.defaultLaunchArgs)
                        }, 2e3), n.start(k), d.promise
                    }, this.stop = function(d) {
                        var f = d.newSubEvent(e.EVENTS.STOP_CAST_DISC);
                        return b.current.castReceiver.dispose(), b.current.castReceiver = null, a.mdxMessageBus.onMessage = null, a.mdxMessageBus = null, a.mediaMessageBus = null, a.mediaManager = null, c.isStarted = !1, f.complete(), j.resolve()
                    }, this
                };
            i.prototype = Object.create(k.prototype), i.prototype.dispose = function() {
                return this.disposeInternal(), k.prototype.dispose.call(this)
            }, u.exports = i
        }, {
            "../../builds/ld.js": 1,
            "../configuration.js": 42,
            "../devices/mdxCastController.js": 45,
            "../enums.js": 59,
            "../eventManager.js": 60,
            "../logging/logger.js": 64,
            "../profiling/mdxProfiler.js": 71,
            "../session/castControllerSession.js": 77,
            "../versionInfo.js": 99,
            "./discoveryComponent.js": 53,
            "./discoveryEvents.js": 55,
            q: 37
        }],
        53: [function(a, g, m) {
            var h = a("q"),
                c = a("../../builds/ld.js"),
                i = a("./discoveryConfig.js"),
                f = a("./discoveryEvents.js"),
                e = a("./discoveryUtils.js"),
                d = (a("../logging/logger.js"), a("../configuration.js")),
                j = a("../enums.js"),
                k = a("../eventManager.js"),
                l = function(b, d) {
                    var a = i.defaults[d];
                    return c.merge(c.merge({}, a[b.role]), a.both)
                },
                b = function(c, d, e) {
                    var g = this,
                        h = d,
                        i = l(c, e),
                        a = !1,
                        b = new k;
                    return Object.defineProperties(this, {
                        evtMgr: {
                            enumerable: !0,
                            get: function() {
                                return b
                            }
                        },
                        isStarted: {
                            enumerable: !0,
                            get: function() {
                                return a
                            },
                            set: function(c) {
                                a !== c && (a = c, b.fireEvent(f.STARTED_STATE_CHANGED, {
                                    component: g,
                                    isStarted: a
                                }))
                            }
                        },
                        name: {
                            enumerable: !0,
                            get: function() {
                                return h
                            }
                        },
                        config: {
                            enumerable: !0,
                            get: function() {
                                return i
                            }
                        },
                        isSuspended: {
                            enumerable: !1,
                            writable: !0,
                            value: !1
                        },
                        networkId: {
                            enumerable: !1,
                            writable: !0,
                            value: null
                        }
                    }), this.addEventListener = b.addEventListener, this.removeEventListener = b.removeEventListener, this
                };
            b.prototype.dispose = function() {
                return h.resolve()
            }, b.prototype.suspendDiscovery = function(b) {
                var a = this;
                a.isSuspended = !0, c.forEach(d.current.dscMgr.devices, function(c) {
                    c instanceof a.targetInstanceType && (c.suspendDiscovery(b), c.cancelPendingConnections())
                })
            }, b.prototype.resumeDiscovery = function() {
                var a = this;
                a.isSuspended = !1, a.networkId && d.current.scheduler.delay(function() {
                    c.forEach(d.current.dscMgr.devices, function(b) {
                        b instanceof a.targetInstanceType && b.discoveryState === j.discoveryStates.PENDING && b.refresh(b.session && b.session.mdxSessionId)
                    })
                }, 500)
            }, b.prototype.processNetworkStatus = function(c) {
                var a = this,
                    d = e.processIflist(c.iflist),
                    b = e.networkIdFromInterface(d);
                b && a.networkId && b !== a.networkId ? (a.suspendDiscovery(!1), a.resumeDiscovery()) : b ? a.resumeDiscovery() : a.suspendDiscovery(!1), a.networkId = b
            }, b.EVENTS = f, g.exports = b
        }, {
            "../../builds/ld.js": 1,
            "../configuration.js": 42,
            "../enums.js": 59,
            "../eventManager.js": 60,
            "../logging/logger.js": 64,
            "./discoveryConfig.js": 54,
            "./discoveryEvents.js": 55,
            "./discoveryUtils.js": 57,
            q: 37
        }],
        54: [function(b, c, e) {
            var a = b("../enums.js"),
                d = {
                    defaults: {
                        dial: {
                            controller: {
                                searchVersions: {
                                    MDX: 0,
                                    DIAL: 1
                                },
                                mx: 1,
                                searchCount: 1
                            },
                            target: {
                                registrationMode: a.registrationModes.DISABLED,
                                mdxServiceType: "mdx-netflix-com:service:target:2",
                                dialAdditionalDataUrl: ""
                            },
                            both: {
                                mdxPort: 9080,
                                ssdpPort: 1900,
                                defaultLaunchArgs: "intent=sync"
                            }
                        },
                        mdx: {
                            controller: {
                                searchVersions: {
                                    MDX: 0,
                                    DIAL: 1
                                },
                                mx: 1,
                                searchCount: 1
                            },
                            target: {
                                registrationMode: a.registrationModes.DARWIN_XPROFILE_V1,
                                mdxServiceType: "mdx-netflix-com:service:target:2",
                                dialAdditionalDataUrl: ""
                            },
                            both: {
                                mdxPort: 9080,
                                ssdpPort: 1900,
                                defaultLaunchArgs: "intent=sync"
                            }
                        },
                        cast: {
                            controller: {
                                appId: "BB8F8D30"
                            },
                            target: {},
                            both: {
                                mdxNamespace: "urn:x-cast:mdx-netflix-com:service:target:2",
                                defaultLaunchArgs: "intent=sync"
                            }
                        }
                    },
                    config: {}
                };
            c.exports = d
        }, {
            "../enums.js": 59
        }],
        55: [function(b, a, c) {
            a.exports = Object.freeze({
                STARTED_STATE_CHANGED: "startedStateChanged",
                DEVICE_FOUND: "deviceFound",
                DEVICE_REFOUND: "deviceRefound",
                DEVICE_GONE: "deviceGone",
                MDX_DEVICES_AVAILABLE: "mdxDevicesAvailable",
                START_CONNECTING: "startConnecting",
                START_DISCONNECTING: "startDisconnecting"
            })
        }, {}],
        56: [function(a, r, x) {
            var c = a("q"),
                b = a("../../builds/ld.js"),
                d = a("../logging/logger.js"),
                j = a("./discoveryEvents.js"),
                l = a("./discoveryConfig.js"),
                e = a("../configuration.js"),
                g = a("../enums.js"),
                v = a("../utils.js"),
                h = a("../mdxError.js"),
                w = a("../eventManager.js"),
                n = a("./discoveryComponent.js"),
                o = a("./castTargetDiscoveryComponent.js"),
                p = a("./castControllerDiscoveryComponent.js"),
                q = a("./nrdpTargetDiscoveryComponent.js"),
                f = {};
            f[g.platforms.NRDP_TARGET.id] = [q], f[g.platforms.CAST_TARGET.id] = [o], f[g.platforms.CADMIUM_CONTROLLER.id] = [p];
            var s = function(a, d) {
                    var c = {},
                        e = b.zipObject(b.map(this.discoveryComponents, function(b) {
                            return [b.name, b[a]]
                        }));
                    c[a] = e, this.evtMgr.fireEvent(j[d], c)
                },
                t = function(a) {
                    s.call(this, "isStarted", "STARTED_STATE_CHANGED")
                },
                u = function(c) {
                    var b = this,
                        a = c.device;
                    b.devices[a.id] = a, b.evtMgr.fireEvent(j.DEVICE_FOUND, {
                        device: a
                    }), e.current.storage.storeDeviceMap(e.current.dscMgr.devices)
                },
                k = function(a) {
                    this.evtMgr.fireEvent(a.type, a)
                },
                m = {
                    STARTED_STATE_CHANGED: t,
                    DEVICE_FOUND: u,
                    MDX_DEVICES_AVAILABLE: k,
                    START_CONNECTING: k,
                    START_DISCONNECTING: k
                },
                i = function(j) {
                    var a = [],
                        i = {},
                        p = {},
                        k = new w;
                    Object.defineProperties(this, {
                        config: {
                            enumerable: !0,
                            get: function() {
                                return l.config
                            }
                        },
                        evtMgr: {
                            enumerable: !0,
                            get: function() {
                                return k
                            }
                        },
                        discoveryComponents: {
                            enumerable: !0,
                            get: function() {
                                return a
                            }
                        },
                        devices: {
                            enumerable: !0,
                            get: function() {
                                return i
                            }
                        },
                        availableDevices: {
                            enumerable: !0,
                            get: function() {
                                return b.filter(i, function(a) {
                                    return a.isAvailable
                                })
                            }
                        },
                        blacklistedUsns: {
                            enumerable: !0,
                            get: function() {
                                return p
                            }
                        }
                    }), this.start = function(h, i) {
                        var f = c.defer(),
                            j = e.current.discoveryManagerTimeout,
                            g = e.current.discoveryComponentRetryAttempts,
                            k = j / g,
                            l = b.map(a, function(a) {
                                d.info("Starting " + a.name + " discovery component");
                                var b = function() {
                                    return a.start.call(a, h, i)
                                };
                                return v.retryPromise(b, g, k).tap(function() {
                                    d.info.always("Discovery component " + a.name + " reported a successful start")
                                }).catch(function(b) {
                                    d.error.always("Discovery component " + a.name + " failed start", b)
                                })
                            });
                        return c.allSettled(l).done(function(a) {
                            var b = a && 1 === a.length ? a[0].value : a.map(function(a) {
                                return a.value
                            });
                            f.resolve(b)
                        }, f.reject), f.promise
                    }, this.stop = function(f) {
                        if (a && a.length) {
                            var e = b.map(a, function(a) {
                                return d.info("Stopping " + a.name + " discovery component"), a.stop.call(a, f).finally(a.dispose)
                            });
                            return e.push(this.clearDevices()), c.allSettled(e)
                        }
                        return c.resolve()
                    }, this.clearDevices = function() {
                        var a = b.map(i, function(a) {
                            return a.discoveryState = g.discoveryStates.UNAVAILABLE, a.dispose()
                        });
                        return i = {}, c.allSettled(a)
                    }, this.refreshDevices = function() {
                        a && a.length && (b.forEach(a, function(a) {
                            a.refreshDevices && a.refreshDevices.call(a)
                        }), b.forEach(i, function(a) {
                            a.refresh && a.refresh()
                        }))
                    }, this.addEventListener = k.addEventListener, this.removeEventListener = k.removeEventListener, this.requestMdxDevice = function() {
                        if (!a || !a.length) return c.reject();
                        var d = b.find(a, function(a) {
                            return "function" == typeof a.requestMdxDevice
                        });
                        return d ? d.requestMdxDevice() : c.reject(new h(h.ERRORS.NOT_SUPPORTED))
                    };
                    var q = this,
                        o = f[j.id];
                    if (b.isUndefined(o)) throw new h(h.ERRORS.START_ERROR, "Cannot start discovery manager for platform " + j.name);
                    o.length ? a = b.map(o, function(c) {
                        var d = n.EVENTS,
                            a = new c(j);
                        return l.config[a.name] = a.config, b.forEach(m, function(b, c) {
                            b = b.bind(q), m[c] = b, a.addEventListener(d[c], b)
                        }), a
                    }) : d.warn(j.name + " does not support discovery")
                };
            i.prototype.EVENTS = j, i.prototype.getDeviceByMdxUuid = function(a) {
                return b.find(e.current.dscMgr.devices, function(b) {
                    return b.mdxUuid === a
                })
            }, r.exports = i
        }, {
            "../../builds/ld.js": 1,
            "../configuration.js": 42,
            "../enums.js": 59,
            "../eventManager.js": 60,
            "../logging/logger.js": 64,
            "../mdxError.js": 70,
            "../test/mockDiscoveryComponent.js": 93,
            "../utils.js": 98,
            "./castControllerDiscoveryComponent.js": 51,
            "./castTargetDiscoveryComponent.js": 52,
            "./discoveryComponent.js": 53,
            "./discoveryConfig.js": 54,
            "./discoveryEvents.js": 55,
            "./nrdpTargetDiscoveryComponent.js": 58,
            q: 37
        }],
        57: [function(a, e, i) {
            var c, b = a("../../builds/ld.js"),
                f = a("../enums.js"),
                g = a("./discoveryConfig.js"),
                h = a("../logging/logger.js"),
                d = "0.0.0.0";
            e.exports = {
                isDeviceBlacklisted: function(a, c) {
                    return !b.isUndefined(b.find(g.config.blacklist, {
                        manufacturer: a,
                        model: c
                    }))
                },
                isValidDeviceInfo: function(c, d) {
                    var a = [];
                    return b.forEach(d, function(e, b) {
                        var d = c[b];
                        e(d) || a.push([b, d])
                    }), a.length ? (h.warn("Discovered device has invalid properties and will be ignored.", "Device Info:", c, "Invalid Properties:", a), !1) : !0
                },
                nonEmptyString: function(a) {
                    return b.isString(a) && a.length
                },
                headers: {
                    regMode: "X-Accepts-Registration",
                    caps: "X-MDX-Caps",
                    msl: "X-MSL",
                    id: "X-MDX-ID",
                    registered: "X-MDX-Registered",
                    mdxVersion: "X-MDX-Version",
                    mdxRemoteLoginSupported: "X-MDX-Remote-Login-Supported",
                    mdxRemoteLoginRequestedByWitcher: "X-MDX-Remote-Login-Requested-By-Witcher",
                    mdxRemoteLoginWitcherSessionUuid: "X-MDX-Remote-Login-Witcher-Session-Uuid"
                },
                processIflist: function(a) {
                    return a ? b.find(a, function(a) {
                        return "wifi" === a.physicalLayerType && a.isDefault && a.ipAddress
                    }) : null
                },
                get unknownIpAddress() {
                    return d
                },
                getLocalIpAddress: function() {
                    switch (c || (c = a("../configuration.js")), c.current.platform.id) {
                        case f.platforms.NRDP_TARGET.id:
                            return nrdp.mdx.localIPAddress || d;
                        default:
                            return d
                    }
                },
                networkIdFromInterface: function(a) {
                    return a ? (a.ssid || "") + (a.ipAddress || "") : ""
                }
            }
        }, {
            "../../builds/ld.js": 1,
            "../configuration.js": 42,
            "../enums.js": 59,
            "../logging/logger.js": 64,
            "./discoveryConfig.js": 54
        }],
        58: [function(b, w, H) {
            var f = b("q"),
                a = b("../logging/logger.js"),
                c = b("../configuration.js"),
                d = b("../../builds/ld.js"),
                g = b("../mdxError.js"),
                r = b("./discoveryComponent.js"),
                h = b("../devices/mdxController.js"),
                D = b("../devices/deviceUtils.js"),
                l = b("../session/mdxControllerSession.js"),
                C = b("../versionInfo.js"),
                n = b("./discoveryEvents.js"),
                B = b("../enums.js"),
                z = b("../utils"),
                x = b("../session/validation.js"),
                t = b("../session/msgBusFactory.js"),
                A = 1e4,
                u = 5e3,
                e = "statechanged",
                v = 400,
                j = {
                    sessions: {}
                },
                q = function() {
                    var e = [],
                        b = c.current.responseHeaders;
                    if (nrdp.mdx.SetDeviceReplyHeaders) {
                        a.trace("applyDeviceReplyHeaders headers=", b);
                        for (var d in b) b.hasOwnProperty(d) && e.push(d + ": " + b[d]);
                        nrdp.mdx.SetDeviceReplyHeaders(e)
                    }
                },
                y = function(c, d) {
                    var e = j.sessions,
                        b = e[c.session.senderId];
                    return b ? (d !== b.senderId && (e[d] = b, delete e[b.senderId], b.senderId = d), c.lastSeen = z.getEpochTime(), void this.evtMgr.fireEvent(n.DEVICE_REFOUND, {
                        device: c
                    })) : void a.error("NrdpTargetDiscoveryComponent.processRefoundController session does not exist")
                },
                p = function(b) {
                    a.error("MDXLIB encountered an error: ", b)
                },
                G = function(f) {
                    if (!f) return void a.trace("onMdxLibIncomingMessage: no message to process");
                    if (f.headers && f.headers.hasOwnProperty("Origin")) return void a.trace("onMdxLibIncomingMessage: dropping message sent from web script");
                    var o = x.parseAndValidateMsg(f.body);
                    if (!o.success && !o.parsed) return void a.error("onMdxLibIncomingMessage: invalid message body");
                    var i, g = o.parsed,
                        r = g.fromuuid,
                        m = this,
                        e = g.controlleruuid || r,
                        k = g.fromurl || g.controllerurl,
                        b = d.find(c.current.dscMgr.devices, function(a) {
                            return a instanceof h && a.mdxUuid === e
                        }),
                        p = new C(g.version),
                        q = g.opts || {};
                    b ? (k && (b.mdxInfo = {
                        location: k,
                        isAvailable: !0,
                        ipAddressAndPort: D.ipAddressAndPortFromLocation(k)
                    }), y.call(m, b, e, new Date), a.trace("onMdxLibIncomingMessage.controller", b), b.session ? (a.trace("onMdxLibIncomingMessage.controller session found", e), b.session.processMdxMessage(f, new Date)) : t.createMsgBus(b).catch(function(b) {
                        a.error("onMdxLibIncomingMessage.msgBus creation failed:", b)
                    }).then(function(a) {
                        b.session = new l(p, e, a, q), j.sessions[e] = b.session, b.session.processMdxMessage(f, new Date)
                    })) : (i = {
                        id: e,
                        mdxUuid: e,
                        wasLaunchingController: !1,
                        controllerType: B.controllerTypes.MDX,
                        location: k
                    }, a.trace("NrdpTargetDiscoveryComponent.retrieveDeviceMapData"), c.current.storage.retrieveDeviceMapData().catch(function(b) {
                        a.error("onMdxLibIncomingMessage. retrieveDeviceMapData failed:", b)
                    }).then(function(c) {
                        if (c) {
                            var k = h.prototype.persistentType,
                                g = d.find(c, function(a) {
                                    return a.type === k && a.mdxUuid === e
                                });
                            g && (a.trace("NrdpTargetDiscoveryComponent. found persisted device for:", e), i = d.merge(g, i))
                        }
                        return a.trace("NrdpTargetDiscoveryComponent.retrieveDeviceMapData - new controller"), b = new h(i, m), t.createMsgBus(b).catch(function(b) {
                            a.error("onMdxLibIncomingMessage. MsgBus creation failed:", b)
                        }).then(function(c) {
                            a.trace("NrdpTargetDiscoveryComponent.retrieveDeviceMapData - new controller session"), b.session = new l(p, e, c, q), j.sessions[e] = b.session, m.evtMgr.fireEvent.call(m, n.DEVICE_FOUND, {
                                device: b
                            }), b.session.processMdxMessage(f, new Date)
                        })
                    }).catch(a.warn).done())
                },
                o = function(b) {
                    if (b) {
                        a.info("onMdxPinDisplayedByWitcher", b);
                        var e = c.current.uiVersion,
                            f = d.includes(e, "aui") || d.includes(e, "signupwizard");
                        f && b.mdx && (c.current.witcherRemoteLoginSessionUuid = b.mdx.sessionUuid, c.current.isRemoteLoginRequestedByWitcher = Boolean(b.mdx.isPinDisplayed), q())
                    }
                },
                m = [{
                    name: "error",
                    handler: p
                }, {
                    name: "incomingmessage",
                    handler: G
                }],
                i = function() {
                    d.forEach(m, function(a) {
                        a.boundhandler && (nrdp.mdx.removeEventListener(a.name, a.boundhandler), a.boundhandler = void 0)
                    })
                },
                E = function(a) {
                    i(), d.forEach(m, function(b) {
                        b.boundhandler = b.handler.bind(a), nrdp.mdx.addEventListener(b.name, b.boundhandler)
                    })
                },
                s = function() {
                    var b = f.defer(),
                        a = this,
                        d = function a(c) {
                            c.state === nrdp.mdx.NOT_INITIALIZED && (nrdp.mdx.removeEventListener(e, a), b.resolve())
                        };
                    return nrdp.mdx.addEventListener(e, d), nrdp.mdx.MdxDeinit(), b.promise.timeout(u).tap(function() {
                        if (a.isStarted = !1, c.current.isRegPairPinConfirmationRequired = !1, i(), a.uiMdxOptions && a.uiMdxOptions.eventEmitter) {
                            var b = a.uiMdxOptions.eventEmitter,
                                d = b.EVENT_TYPES.mdxPinIsDisplayed;
                            d && b.removeEventListener(d, o)
                        }
                    }).catch(function(a) {
                        if (nrdp.mdx.state === nrdp.mdx.INITIALIZED) throw a
                    })
                },
                F = function(k) {
                    var d = f.defer(),
                        b = this,
                        h = !1,
                        r = b.config,
                        l = nrdp.device.ESN,
                        m = r && r.mdxPort;
                    c.current.localMdxPort = m, a.trace("initializeMdxLib componentConfig:", b.config);
                    var n = function(c) {
                            a.trace("handleInitResult: ", c), c.errorcode && 0 !== c.errorcode && (c.errorcode !== v || b.networkId ? (a.error("MDXLIB Initialization failure", c), d.reject(c)) : (a.warn("MDXLIB returned MdxError_NoConnection but we don't have one so initialization is complete"), d.resolve()))
                        },
                        i = function c(b) {
                            return "undefined" == typeof nrdp ? p() : h ? (nrdp.mdx.removeEventListener(e, c), nrdp.mdx.removeEventListener("error", t), void(b.state === nrdp.mdx.NOT_INITIALIZED ? (a.error("MDXLIB initialization failed unexpectedly", b), d.reject(new g(g.ERRORS.START_ERROR, "MDXLIB_NOT_READY"))) : d.resolve())) : void(b.state === nrdp.mdx.NOT_INITIALIZED && (a.trace("External service holding MDX is no longer initialized; attempting init now"), h = !0, nrdp.mdx.MdxInit(nrdp.mdx.localIPAddress, void 0, "urn:mdx-netflix-com:service:target:3", l, !0, !1, n)))
                        },
                        t = function a() {
                            nrdp.mdx.removeEventListener("error", a), nrdp.mdx.removeEventListener(e, i), d.reject(new g(g.ERRORS.START_ERROR, "MDXLIB_ERROR"))
                        };
                    nrdp.mdx.addEventListener(e, i), nrdp.mdx.addEventListener("error", t), a.trace("Initializing MDXLIB host: " + nrdp.mdx.localIPAddress + ", port: " + m + ", serviceType: undefined, esn: " + l + ", asyncHttpRequests: true, isWebsocketServer: false");
                    var j;
                    return nrdp.mdx.INITIALIZED !== nrdp.mdx.state ? (h = !0, nrdp.mdx.MdxInit(nrdp.mdx.localIPAddress, void 0, "urn:mdx-netflix-com:service:target:3", l, !0, !1, n)) : "undefined" != typeof nrdjs && null !== nrdjs && nrdjs.mdxSelfDiscovery && !nrdjs.mdxSelfDiscovery.initialized ? j = setInterval(function() {
                        if (h && clearInterval(j), nrdjs.mdxSelfDiscovery.state === nrdjs.mdxSelfDiscovery.STATES.INITIALIZING || nrdjs.mdxSelfDiscovery.state === nrdjs.mdxSelfDiscovery.STATES.SCANNING) i({
                            state: nrdp.mdx.state
                        });
                        else if (nrdjs.mdxSelfDiscovery.state === nrdjs.mdxSelfDiscovery.STATES.DISABLED) {
                            if (nrdp.mdx.state === nrdp.mdx.NOT_INITIALIZED) return void i({
                                state: nrdp.mdx.state
                            });
                            h || (clearInterval(j), a.info("MDX is initialized by another service.  De-initializing immediately."), s.call(this).then(function() {}))
                        }
                    }, 10) : a.trace("MDX is initialized by nrdjs. Waiting for De-init."), d.promise.timeout(A).tap(function() {
                        if (b.isStarted = !0, b.uiMdxOptions = k && k.uiOptions && k.uiOptions.mdx, E(b), b.uiMdxOptions && b.uiMdxOptions.eventEmitter) {
                            var c = b.uiMdxOptions.eventEmitter,
                                d = c.EVENT_TYPES.mdxPinIsDisplayed;
                            d && c.addEventListener(d, o)
                        }
                        var e = !1,
                            f = function() {
                                a.trace("mdx : RevealTargetPresence callback"), e || (e = !0, a.trace("mdx : RevealTargetPresence cb applying"), q())
                            };
                        a.trace("mdx : RevealTargetPresence "), nrdp.mdx.RevealTargetPresence(f), setTimeout(f, 350)
                    }).finally(function() {
                        nrdp.mdx.removeEventListener(e, i), clearInterval(j)
                    })
                },
                k = function(a) {
                    if (!a) return this;
                    r.call(this, a, "MDX-NRDP", "mdx");
                    var b = this,
                        c = function a() {
                            nrdp.removeEventListener("shutdown", a), b.isStarted && (nrdp.mdx.state === nrdp.mdx.INITIALIZED && (nrdp.mdx.MdxDeinit(), i()), b.isStarted = !1)
                        };
                    return this.targetInstanceType = h, this.start = function(a) {
                        return this.isStarted && nrdp.mdx.state === nrdp.mdx.INITIALIZED ? f.resolve() : F.call(this, a).then(function() {
                            nrdp.addEventListener("shutdown", c)
                        })
                    }, this.stop = function() {
                        return this.isStarted || nrdp.mdx.state !== nrdp.mdx.NOT_INITIALIZED ? s.call(this).then(function() {
                            nrdp.removeEventListener("shutdown", c)
                        }) : f.resolve()
                    }, this
                };
            k.prototype = Object.create(r.prototype), w.exports = k
        }, {
            "../../builds/ld.js": 1,
            "../configuration.js": 42,
            "../devices/deviceUtils.js": 44,
            "../devices/mdxController.js": 47,
            "../enums.js": 59,
            "../logging/logger.js": 64,
            "../mdxError.js": 70,
            "../session/mdxControllerSession.js": 81,
            "../session/msgBusFactory.js": 84,
            "../session/validation.js": 90,
            "../utils": 98,
            "../versionInfo.js": 99,
            "./discoveryComponent.js": 53,
            "./discoveryEvents.js": 55,
            q: 37
        }],
        59: [function(d, e, f) {
            var b = d("../builds/ld.js"),
                a = Object.freeze({
                    CONTROLLER: "controller",
                    TARGET: "target"
                }),
                c = Object.freeze({
                    NRDP_TARGET: {
                        id: 2,
                        name: "NRDP_TARGET",
                        role: a.TARGET
                    },
                    CAST_TARGET: {
                        id: 3,
                        name: "CAST_TARGET",
                        role: a.TARGET
                    },
                    CADMIUM_CONTROLLER: {
                        id: 4,
                        name: "CADMIUM_CONTROLLER",
                        role: a.CONTROLLER
                    }
                });
            e.exports = Object.freeze({
                logLevels: Object.freeze({
                    NONE: 0,
                    ERROR: 1,
                    WARN: 2,
                    INFO: 3,
                    TRACE: 4
                }),
                roles: a,
                platforms: c,
                registrationModes: Object.freeze({
                    DISABLED: "0",
                    ENABLED: "1",
                    DEFAULT_PIN: "2",
                    DARWIN_XPROFILE_V1: "3"
                }),
                serviceTypes: Object.freeze({
                    MDX: "urn:mdx-netflix-com:service:target",
                    DIAL: "urn:dial-multiscreen-org:service:dial",
                    CAST: "urn:cast-multiscreen-org:service:cast"
                }),
                discoveryStates: Object.freeze({
                    UNKNOWN: 0,
                    PENDING: 1,
                    AVAILABLE: 2,
                    UNAVAILABLE: 3,
                    ERROR: 4
                }),
                launchStates: Object.freeze({
                    UNKNOWN: 0,
                    NOT_LAUNCHED: 1,
                    PENDING: 2,
                    LAUNCHED: 3
                }),
                controllerTypes: Object.freeze({
                    UNKNOWN: 0,
                    MDX: 1,
                    REMOTE: 2
                }),
                profilerModes: Object.freeze({
                    OFF: 0,
                    KEY_EVENTS: 1,
                    FULL: 2
                }),
                errors: {
                    PAIRING_UNKNOWN_VERSION: {
                        code: 1,
                        desc: "UNSUPPORTED PAIRING VERSION"
                    },
                    PAIRING_MESSAGE_REPLAY: {
                        code: 4,
                        desc: "INVALID OR DUPLICATE NONCE"
                    },
                    PAIRING_INVALID_CONTROLLER_REQUEST: {
                        code: 10,
                        desc: "INVALID CONTROLLER REQUEST"
                    },
                    PAIRING_SERVER_ERROR: {
                        code: 11,
                        desc: "SERVER ERROR"
                    },
                    PAIRING_TARGET_ERROR: {
                        code: 12,
                        desc: "TARGET INTERNAL ERROR"
                    },
                    PAIRING_SERVER_NOT_REACHABLE: {
                        code: 13,
                        desc: "SERVER UNAVAILABLE OR TIMEOUT"
                    },
                    PAIRING_CONTROLLER_HMAC_FAILURE: {
                        code: 20,
                        desc: "CONTROLLER REQUEST HMAC_FAILURE"
                    },
                    PAIRING_CONTROLLER_CTICKET_EXPIRED: {
                        code: 21,
                        desc: "CONTROLLER CTICKET EXPIRED"
                    },
                    PAIRING_CONTROLLER_CTICKET_CORRUPTED: {
                        code: 22,
                        desc: "CONTROLLER CTICKET CORRUPTED"
                    },
                    PAIRING_NO_CTICKET: {
                        code: 23,
                        desc: "NO CTICKET"
                    },
                    PAIRING_NOT_PAIRING: {
                        code: 30,
                        desc: "TARGET NOT IN PAIRING MODE"
                    },
                    PAIRING_ALREADY_PAIRED: {
                        code: 31,
                        desc: "TARGET ALREADY PAIRED"
                    },
                    PAIRING_ABORTED: {
                        code: 32,
                        desc: "PAIRING ABORTED"
                    },
                    PAIRING_USER_MISMATCH: {
                        code: 33,
                        desc: "USER MISMATCH"
                    },
                    REGISTRATION_NOT_REGISTERING: {
                        code: 40,
                        desc: "TARGET NOT IN REGISTERING MODE"
                    },
                    REGISTRATION_ALREADY_REGISTERED: {
                        code: 41,
                        desc: "TARGET ALREADY REGISTERED"
                    },
                    REGISTRATION_PAIRING_IN_PROGRESS: {
                        code: 42,
                        desc: "REG PAIRING IN PROGRESS"
                    },
                    REGISTRATION_PIN_MISMATCH: {
                        code: 43,
                        desc: "PIN MISMATCH"
                    },
                    REGISTRATION_PIN_UNAVAILABLE: {
                        code: 44,
                        desc: "PIN UNAVAILABLE"
                    },
                    REGISTRATION_REMOTE_LOGIN_IN_PROGRESS: {
                        code: 88,
                        desc: "Remote login is in progress"
                    },
                    REGISTRATION_REMOTE_LOGIN_DISABLED: {
                        code: 89,
                        desc: "Remote login is disabled"
                    },
                    REGISTRATION_PROFILE_MISMATCH: {
                        code: 97,
                        desc: "Regpair is only allowed between profiles of the same account"
                    },
                    PAIRING_UNKNOWN_ERROR: {
                        code: 98,
                        desc: "UNKNOWN ERROR"
                    },
                    PAIRING_NETWORK_ERROR: {
                        code: 99,
                        desc: "NETWORK ERROR"
                    },
                    PAIRING_PROTO_ERROR: {
                        code: 100,
                        desc: "UNEXPECTED PROTOCOL RESPONSE"
                    },
                    SESSION_UNKNOWN_VERSION: {
                        code: 1,
                        desc: "UNSUPPORTED SESSION VERSION"
                    },
                    SESSION_UNKNOWN_SENDER: {
                        code: 2,
                        desc: "UNKNOWN SESSION SENDER"
                    },
                    SESSION_UNKNOWN_RECEIVER: {
                        code: 3,
                        desc: "UNKNOWN SESSION RECEIVER"
                    },
                    SESSION_INVALID_NONCE: {
                        code: 4,
                        desc: "INVALID SESSION NONCE"
                    },
                    SESSION_INVALID_HMAC: {
                        code: 5,
                        desc: "MDX SESSION INVALID HMAC"
                    },
                    SESSION_DECRYPTION_FAILED: {
                        code: 6,
                        desc: "MDX SESSION DECRYPTION FAILED"
                    },
                    SESSION_MALFORMED_MESSAGE: {
                        code: 7,
                        desc: "MDX SESSION MALFORMED MESSAGE"
                    },
                    SESSION_UNKNOWN_SENDER_USERID: {
                        code: 8,
                        desc: "MDX SESSION UNKNOWN SENDER USERID"
                    },
                    SESSION_UNKNOWN_RECEIVER_USERID: {
                        code: 9,
                        desc: "MDX SESSION UNKNOWN RECEIVER USERID"
                    },
                    SESSION_NETWORK_ERROR: {
                        code: 10,
                        desc: "NETWORK ERROR"
                    },
                    SESSION_INVALID_SID: {
                        code: 11,
                        desc: "MDX SESSION INVALID SID"
                    },
                    SESSION_NOT_READY: {
                        code: 12,
                        desc: "SESSION NOT READY"
                    },
                    SESSION_START_SESSION_TIMEOUT: {
                        code: 13,
                        desc: "START SESSION TIMEOUT"
                    }
                },
                loginPolicies: Object.freeze({
                    LOGIN_DISABLED: {
                        code: 0,
                        description: "LOGIN_DISABLED"
                    },
                    LOGIN_AND_PAIR: {
                        code: 1,
                        description: "LOGIN_AND_PAIR"
                    },
                    LOGIN_ONLY: {
                        code: 2,
                        description: "LOGIN_ONLY"
                    },
                    LOGIN_ONLY_REQUESTED_BY_TARGET: {
                        code: 3,
                        description: "LOGIN_ONLY_REQUESTED_BY_TARGET"
                    },
                    LOGIN_AND_PAIR_REQUESTED_BY_TARGET: {
                        code: 4,
                        description: "LOGIN_AND_PAIR_REQUESTED_BY_TARGET"
                    }
                }),
                connectIntents: Object.freeze({
                    INVALID: 0,
                    JOIN: 1,
                    LAUNCH: 2,
                    LAUNCH_AND_CONTROL: 3
                }),
                messageActionNames: Object.freeze({
                    PAIRING_REQUEST: "pairingrequest",
                    PAIRING_RESPONSE: "pairingresponse",
                    REGPAIR_REQUEST: "regpairrequest",
                    REGPAIR_REPLY: "regpairreply",
                    REGPAIR_ERROR: "regpairerror",
                    PING_SEARCH: "pingsearch",
                    PING_RESPONSE: "pingresponse",
                    SESSION: "session",
                    BROADCAST: "broadcast",
                    ERROR: "error"
                }),
                isValidPlatform: function(a) {
                    return b.find(c, b.isEqual.bind(void 0, a))
                }
            })
        }, {
            "../builds/ld.js": 1
        }],
        60: [function(b, c, j) {
            var a = b("../builds/ld.js"),
                d = b("./logging/logger.js"),
                e = function(b, c, e) {
                    if (!b) return null;
                    var f = a.isFunction(c) || "function" == typeof c;
                    return f ? (e[b] || (e[b] = []), a.includes(e[b], c) ? d.warn("Duplicate event listener registered for event '" + b + "' was ignored") : e[b].push(c), c) : null
                },
                f = function(b, e, c) {
                    if (c[b]) {
                        var d = c[b];
                        a.pull(d, e), d.length || delete c[b]
                    }
                },
                g = function(d, c, e) {
                    c = a.merge(c || {}, {
                        type: d
                    });
                    var b = e[d];
                    b && b.length && (b = b.slice(), a.forEach(b, function(a) {
                        a(c)
                    }))
                },
                h = function(a, c) {
                    if (!a) return !1;
                    var d = c || {},
                        b = d[a];
                    return b && b.length > 0
                },
                i = function() {
                    var a = {};
                    this.addEventListener = function(b, c) {
                        return e(b, c, a)
                    }, this.removeEventListener = function(b, c) {
                        f(b, c, a)
                    }, this.fireEvent = function(b, c) {
                        g(b, c, a)
                    }, this.isListenerRegistered = function(b) {
                        return h(b, a)
                    }
                };
            c.exports = i
        }, {
            "../builds/ld.js": 1,
            "./logging/logger.js": 64
        }],
        61: [function(a, i, m) {
            var g, d = a("q"),
                h = a("../builds/ld.js"),
                l = a("./logging/logger.js"),
                c = a("./mdxError.js"),
                e = a("./enums.js"),
                f = 5,
                j = function() {
                    var a = {},
                        g = 0,
                        b = {
                            POST: 0,
                            GET: 1
                        },
                        i = function(b) {
                            var d = a[b.xid];
                            if (d) {
                                var e = parseInt(b.code);
                                if (b.code && 200 !== e && 201 !== e || !h.isUndefined(b.body) && -1 !== b.body.indexOf("error")) {
                                    var f = new c(c.ERRORS.MESSAGING_ERROR, "HTTP request failed - code: " + b.code + " - body: " + b.body);
                                    f.httpCode = e, d.reject(f)
                                } else d.resolve(b.body)
                            } else l.warn("MDXLIB http response received without a handler", b)
                        },
                        e = function(c, e, h, b) {
                            var i = 1e3 * f + 200;
                            return d.Promise(function(j, l) {
                                var i = ++g,
                                    k = function() {
                                        return a[i] = d.defer(), b ? nrdp.mdx.SendSessionMessage(c, h, i, f, b.securityContext, "", e, b.canonicalMessage, b.plaintext) : nrdp.mdx.SendMdxHttpRequest(c, h, i, f, "", e), a[i].promise
                                    };
                                k().done(j, function(a) {
                                    0 === a.httpCode && d.delay(1500).then(function() {
                                        k().done(j, l)
                                    })
                                })
                            }).timeout(i, "Timed out waiting for http response ack from NRDP for " + c)
                        };
                    return this.get = function(a, c) {
                        return e(a, c, b.GET)
                    }, this.post = function(a, c, d) {
                        return e(a, c, b.POST, d)
                    }, nrdp.mdx.addEventListener("httpresponse", i), this
                },
                k = function() {
                    return g || (g = new j)
                },
                b = {};
            b[e.platforms.CAST_TARGET.id] = null, b[e.platforms.NRDP_TARGET.id] = k, b[e.platforms.CADMIUM_CONTROLLER.id] = null, i.exports = {
                createHttpClient: function(a) {
                    var d = b[a.id];
                    if (d) return d();
                    throw new c(c.ERRORS.PLATFORM_SUPPORT_ERROR, "Cannot create http client for platform: " + a.name)
                }
            }
        }, {
            "../builds/ld.js": 1,
            "./enums.js": 59,
            "./logging/logger.js": 64,
            "./mdxError.js": 70,
            q: 37
        }],
        62: [function(d, b, e) {
            var a = function(d, e, a, b) {
                    var c = d + e;
                    if (a && 1 === a.readyState) try {
                        a.send(c)
                    } catch (a) {} else b && b.push(c)
                },
                c = function() {
                    var b, d = !0,
                        c = [];
                    Object.defineProperties(this, {
                        shouldBuffer: {
                            enumerable: !0,
                            get: function() {
                                return d
                            },
                            set: function(a) {
                                d = a
                            }
                        },
                        ws: {
                            enumerable: !0,
                            get: function() {
                                return b
                            },
                            set: function(a) {
                                b = a
                            }
                        }
                    }), this.flush = function() {
                        if (b && 1 === b.readyState)
                            for (; c.length;) b.send(c.shift());
                        c = []
                    }, this.trace = function(e) {
                        a("TRACE: ", e, b, d ? c : void 0)
                    }, this.info = function(e) {
                        a("INFO: ", e, b, d ? c : void 0)
                    }, this.warn = function(e) {
                        a("WARN: ", e, b, d ? c : void 0)
                    }, this.error = function(e) {
                        a("ERROR: ", e, b, d ? c : void 0)
                    }, this.mdxIntent = function(e) {
                        a("MDX_INTENT: ", e, b, d ? c : void 0)
                    }
                };
            b.exports = c
        }, {}],
        63: [function(e, b, f) {
            var a = "[MDXJS] ",
                c = "[INTENT] ",
                d = function() {
                    this.trace = function(b) {
                        return console.log(a + b)
                    }, this.info = function(b) {
                        return console.info(a + b)
                    }, this.warn = function(b) {
                        return console.warn(a + b)
                    }, this.error = function(b) {
                        return console.error(a + b)
                    }, this.mdxIntent = function(b) {
                        return console.info(a + c + b)
                    }
                };
            b.exports = d
        }, {}],
        64: [function(d, h, n) {
            var a = d("../../builds/ld.js"),
                b = d("../enums.js"),
                e = d("../mdxError.js"),
                g = d("./nrdpLogSink.js"),
                m = d("./nrdpNccpLogSink.js"),
                i = d("./netflixPlayerLogSink.js"),
                j = d("./consoleLogSink.js"),
                k = function(b) {
                    return "object" == typeof b && a.isFunction(b.trace) && a.isFunction(b.info) && a.isFunction(b.warn) && a.isFunction(b.error)
                },
                c = function(b, c, d, e, f, g) {
                    if (d || c >= b) {
                        var h = a.reduce(g, function(c, b) {
                            if (a.isString(b) || a.isFunction(b) || a.isError(b)) b = b.toString();
                            else try {
                                b = JSON.stringify(b)
                            } catch (a) {
                                b = b.toString()
                            }
                            return c = c.length ? c + ", " + b : b
                        }, "");
                        a.forEach(f, function(a) {
                            try {
                                a[e](h)
                            } catch (a) {}
                        })
                    }
                },
                f = {};
            f[b.platforms.NRDP_TARGET.id] = [g], f[b.platforms.CAST_TARGET.id] = [m, j], f[b.platforms.CADMIUM_CONTROLLER.id] = [i];
            var l = function() {
                var i = this,
                    g = b.logLevels.NONE,
                    h = !1,
                    d = [];
                Object.defineProperties(this, {
                    logLevel: {
                        enumerable: !0,
                        get: function() {
                            return g
                        },
                        set: function(c) {
                            var d = a.findKey(b.logLevels, function(a) {
                                return a === c
                            });
                            if (!d) throw new e(e.ERRORS.INVALID_ARG, "log level: " + c);
                            g = c
                        }
                    },
                    enableAlwaysLog: {
                        enumerable: !1,
                        get: function() {
                            return h
                        },
                        set: function(a) {
                            h = a
                        }
                    }
                }), this.addLogSink = function(b) {
                    if (!k(b)) throw new e(e.ERRORS.INVALID_ARG, "log sink");
                    a.includes(d, b) || d.push(b)
                }, this.removeLogSink = function(b) {
                    a.pull(d, b)
                }, this.removeAllLogSinks = function() {
                    d = []
                }, this.trace = function() {
                    c(b.logLevels.TRACE, g, !1, "trace", d, arguments)
                }, this.trace.always = function() {
                    c(b.logLevels.TRACE, g, h, "trace", d, arguments)
                }, this.info = function() {
                    c(b.logLevels.INFO, g, !1, "info", d, arguments)
                }, this.info.always = function() {
                    c(b.logLevels.INFO, g, h, "info", d, arguments)
                }, this.warn = function() {
                    c(b.logLevels.WARN, g, !1, "warn", d, arguments)
                }, this.warn.always = function() {
                    c(b.logLevels.WARN, g, h, "warn", d, arguments)
                }, this.error = function() {
                    c(b.logLevels.ERROR, g, !1, "error", d, arguments)
                }, this.error.always = function() {
                    c(b.logLevels.ERROR, g, h, "error", d, arguments)
                }, this.mdxIntent = function() {
                    c(b.logLevels.INFO, g, h, "mdxIntent", d, arguments)
                }, this.addDefaultPlatformLogSinks = function(b) {
                    var c = f[b.id];
                    if (a.isUndefined(c)) throw new e(e.ERRORS.PLATFORM_SUPPORT_ERROR, "Cannot add default log sinks for platform " + b.name);
                    a.forEach(c, function(a) {
                        i.addLogSink(new a)
                    })
                }
            };
            h.exports = new l
        }, {
            "../../builds/ld.js": 1,
            "../enums.js": 59,
            "../mdxError.js": 70,
            "./consoleLogSink.js": 63,
            "./netflixPlayerLogSink.js": 65,
            "./nrdpLogSink.js": 66,
            "./nrdpNccpLogSink.js": 67
        }],
        65: [function(c, a, d) {
            var b = function() {
                this.trace = function(a) {
                    netflix.player.log.trace(a)
                }, this.info = function(a) {
                    netflix.player.log.info(a)
                }, this.warn = function(a) {
                    netflix.player.log.warn(a)
                }, this.error = function(a) {
                    netflix.player.log.error(a)
                }
            };
            a.exports = b
        }, {}],
        66: [function(d, b, e) {
            var a = function(a, b, c) {
                    return a.call(this, b, "MDX", c || "mdx", {
                        xid: -1
                    })
                },
                c = function() {
                    this.trace = function(b) {
                        return a.call(nrdp.log, nrdp.log.trace, b)
                    }, this.info = function(b) {
                        return a.call(nrdp.log, nrdp.log.info, b)
                    }, this.warn = function(b) {
                        return a.call(nrdp.log, nrdp.log.warn, b)
                    }, this.error = function(b) {
                        return a.call(nrdp.log, nrdp.log.error, b)
                    }, this.mdxIntent = function(b) {
                        return a.call(nrdp.log, nrdp.log.info, b, "mdxintent")
                    }
                };
            b.exports = c
        }, {}],
        67: [function(d, b, e) {
            var a = "mdx",
                c = function() {
                    this.trace = function(b) {
                        return nrdp.log.toNCCP(a, "trace", {
                            msg: b
                        })
                    }, this.info = function(b) {
                        return nrdp.log.toNCCP(a, "info", {
                            msg: b
                        })
                    }, this.warn = function(b) {
                        return nrdp.log.toNCCP(a, "warn", {
                            msg: b
                        })
                    }, this.error = function(b) {
                        return nrdp.log.toNCCP(a, "error", {
                            msg: b
                        })
                    }, this.mdxIntent = function(a) {
                        return nrdp.log.toNCCP("mdxintent", "info", {
                            msg: a
                        })
                    }
                };
            b.exports = c
        }, {}],
        68: [function(a, b, c) {
            mdxExport = a("./mdxApi.js")
        }, {
            "./mdxApi.js": 69
        }],
        69: [function(d, p, E) {
            var j = d("q"),
                h = d("../builds/ld.js"),
                g = d("./enums.js"),
                a = d("./configuration.js"),
                f = d("./logging/logger.js"),
                i = d("./profiling/mdxProfiler.js"),
                b = d("./apiEvents.js"),
                v = d("./session/msgBusFactory.js"),
                r = d("./session/securityFactory.js"),
                c = d("./mdxError.js"),
                z = d("./discovery/discoveryManager.js"),
                A = d("./eventManager.js"),
                m = (d("./versionInfo.js"), 0),
                e = function(b, a, c) {
                    try {
                        b.fireEvent(a, c)
                    } catch (b) {
                        f.warn("Event handler exception for " + a, b)
                    }
                },
                n = function(d) {
                    if (a.current.isStarted) {
                        var c = this.availableDevices.length;
                        c !== m && (m = c, e(d, b.AVAILABLE_DEVICE_COUNT_CHANGED, {
                            count: c
                        }))
                    }
                },
                s = function(b, c, a) {
                    f.info.always("Discovery manager started state changed", a)
                },
                t = function(a, c) {
                    e(a, b.MDX_DEVICES_AVAILABLE, {
                        available: c.available
                    })
                },
                u = function(a, c) {
                    n.call(this, a), c.state === g.discoveryStates.AVAILABLE && e(a, b.DEVICE_AVAILABLE, {
                        device: c.device
                    })
                },
                D = function(a, c) {
                    e(a, b.SWITCH_CREDENTIALS, c)
                },
                w = function(a, c) {
                    e(a, b.SHOW_MDX_PIN, c)
                },
                x = function(a, c) {
                    e(a, b.RETRIEVE_MDX_PIN, c)
                },
                y = function(a, c) {
                    e(a, b.MDX_REMOTE_LOGIN_DEVICE_AVAILABLE, c)
                },
                l = {},
                o = function(d, c) {
                    a.current.isStarted && (l[c.device.id] || (l[c.device.id] = !0, c.device.addEventListener(c.device.EVENTS.DISCOVERY_STATE_CHANGED, u.bind(this, d)), c.device.addEventListener(b.SWITCH_CREDENTIALS, D.bind(this, d)), c.device.addEventListener(b.SHOW_MDX_PIN, w.bind(this, d)), c.device.addEventListener(b.RETRIEVE_MDX_PIN, x.bind(this, d)), c.device.addEventListener(b.MDX_REMOTE_LOGIN_DEVICE_AVAILABLE, y.bind(this, d))), n.call(this, d), e(d, b.DEVICE_AVAILABLE, {
                        device: c.device
                    }))
                },
                B = function(a) {
                    e(a, b.START_CONNECTING)
                },
                C = function(a) {
                    e(a, b.START_DISCONNECTING)
                },
                q = function(a) {
                    a && (r.platformCrypto = a.platformMdxLib)
                },
                k = function(p, y) {
                    var r = {
                            initStart: new Date
                        },
                        x = h.find(k.PLATFORMS, function(a) {
                            return h.isEqual(a, p)
                        });
                    if (!x) throw new c(c.ERRORS.INVALID_ARG, "Invalid platform specified when constructing the MdxApi instance: " + (p ? p.name : "undefined"));
                    a.reset(), a.current.platform = p;
                    var n = new A,
                        d = new z(p),
                        u = d.EVENTS;
                    a.current.dscMgr = d, a.current.discovery = d.config, d.addEventListener(u.STARTED_STATE_CHANGED, s.bind(this, a.current, n)), d.addEventListener(u.DEVICE_FOUND, o.bind(this, n)), d.addEventListener(u.MDX_DEVICES_AVAILABLE, t.bind(this, n)), d.addEventListener(u.START_CONNECTING, B.bind(this, n)), d.addEventListener(u.START_DISCONNECTING, C.bind(this, n)), v.configureProtocolsForPlatform(p), Object.defineProperties(this, {
                        config: {
                            enumerable: !0,
                            get: function() {
                                return h.clone(a.current, !0)
                            }
                        },
                        availableDevices: {
                            enumerable: !0,
                            get: function() {
                                return d.availableDevices
                            }
                        }
                    });
                    var w;
                    this.start = function(m) {
                        if (a.current.isStarted) return j.reject(new c(c.ERRORS.ALREADY_STARTED));
                        if (r && r.initStart) {
                            var p = r.initStart;
                            i.setBaseTime(p), i.newEvent(i.EVENTS.INIT, void 0, p, r.initComplete), r = null
                        }
                        var s = this,
                            t = i.newEvent(i.EVENTS.START),
                            k = j.defer(),
                            u = a.current.discoveryManagerTimeout;
                        return d.start.call(d, m, t).timeout(u).then(function() {
                            if (d.discoveryComponents.length) {
                                var i = h.find(d.discoveryComponents, function(a) {
                                    return a.isStarted
                                });
                                if (!i) throw f.error.always("MDX failed to start as there wasn't a single discovery component that reported a successful start!"), new c(c.ERRORS.START_ERROR, "No discovery components could start")
                            }
                            q.call(s, m), t.complete(), a.current.isStarted = !0, e(n, b.STARTED_STATE_CHANGED, {
                                isStarted: !0
                            }), f.info("MDX Started. Launch args: ", arguments[0]), a.current.scheduler.async(function() {
                                h.forEach(d.devices, function(a) {
                                    l[a.id] || o.call(s, n, {
                                        device: a
                                    })
                                })
                            });
                            a.current.platform.role === g.roles.CONTROLLER ? k.resolve() : k.resolve.apply(null, arguments)
                        }).done(void 0, k.reject), k.promise.tap(function() {
                            var b = a.current.version,
                                c = a.current.consolidatedLogger;
                            c && b && (w = c.addContext("MdxJs", {
                                jsVersion: b
                            }))
                        })
                    }, this.stop = function() {
                        if (!a.current.isStarted) return j.reject(new c(c.ERRORS.ALREADY_STOPPED));
                        f.trace("Stopping MDX");
                        var h = i.newEvent(i.EVENTS.STOP),
                            g = j.defer();
                        return a.current.storage.storeDeviceMap(a.current.dscMgr.devices).finally(function() {
                            d.stop.call(d, h).timeout(1e4).finally(function() {
                                h.complete()
                            }).done(function() {
                                l = {}, m = 0, a.current.isStarted = !1, e(n, b.STARTED_STATE_CHANGED, {
                                    isStarted: !1
                                }), g.resolve()
                            }, function(a) {
                                var b = a ? a.toString() : "";
                                g.reject(new c(c.ERRORS.STOP_ERROR, b))
                            })
                        }), g.promise.tap(function() {
                            var b = a.current.consolidatedLogger;
                            b && w && (b.removeContext(w), w = null)
                        })
                    }, this.reset = function() {
                        return f.info.always("Resetting all MDX state"), a.current.storage.reset().then(d.clearDevices)
                    }, this.refreshDevices = function() {
                        if (a.current.platform.role !== g.roles.CONTROLLER) throw new c(c.ERRORS.NOT_SUPPORTED, "MdxApi.refreshDevices is only supported on controller platforms");
                        d.refreshDevices.call(d)
                    }, this.addEventListener = n.addEventListener, this.removeEventListener = n.removeEventListener, this.requestMdxDevice = d.requestMdxDevice, f.removeAllLogSinks(), f.addDefaultPlatformLogSinks(p);
                    return f.info.always("MDX Initialized - version: " + k.version + ", flavor: RELEASE, platform: " + p.name + ", role: " + p.role), r.initComplete = new Date, this
                };
            Object.defineProperties(k, {
                version: {
                    get: function() {
                        return a.current.version
                    }
                },
                PLATFORMS: {
                    get: function() {
                        return g.platforms
                    }
                },
                ROLES: {
                    get: function() {
                        return g.roles
                    }
                },
                EVENTS: {
                    get: function() {
                        return b
                    }
                },
                LOG_LEVELS: {
                    get: function() {
                        return g.logLevels
                    }
                },
                REGISTRATION_MODES: {
                    get: function() {
                        return g.registrationModes
                    }
                },
                PROFILER_MODES: {
                    get: function() {
                        return g.profilerModes
                    }
                },
                ERRORS: {
                    get: function() {
                        return c.ERRORS
                    }
                },
                LOGIN_POLICIES: {
                    get: function() {
                        return g.loginPolicies
                    }
                }
            }), k.prototype.configure = function(b) {
                h.isUndefined(b) || (f.info("MDX configuration options", b), a.process(this, a.current, b))
            }, k.prototype.broadcastAppMessage = function(e, i) {
                if (a.current.platform.role !== g.roles.TARGET) throw new c(c.ERRORS.NOT_SUPPORTED, "MdxApi.broadcastAppMessage is only supported on target platforms");
                var b, d = [];
                return h.forEach(this.availableDevices, function(a) {
                    b = a.sendAppMessage(e, i).fail(function() {
                        f.error("broadcastAppMessage promise FAILED")
                    }), d.push(b)
                }), j.all(d)
            }, j.stopUnhandledRejectionTracking(), p.exports = k
        }, {
            "../builds/ld.js": 1,
            "./apiEvents.js": 41,
            "./configuration.js": 42,
            "./discovery/discoveryManager.js": 56,
            "./enums.js": 59,
            "./eventManager.js": 60,
            "./logging/logger.js": 64,
            "./mdxError.js": 70,
            "./profiling/mdxProfiler.js": 71,
            "./session/msgBusFactory.js": 84,
            "./session/securityFactory.js": 89,
            "./test/mockDeviceHelper.js": 92,
            "./test/testConfiguration.js": 96,
            "./versionInfo.js": 99,
            q: 37
        }],
        70: [function(e, d, f) {
            var c = {
                    code: 0,
                    message: "There was an unknown error encountered"
                },
                b = {},
                a = function(a, b) {
                    a = a || c, b = b ? ": " + b : "", this.name = "MdxError", this.code = a.code, this.message = a.message + b, this.stack = (new Error).stack
                };
            a.prototype = Object.create(Error), a.prototype.toString = function() {
                return this.code + " : " + this.message
            }, Object.defineProperty(a, "ERRORS", {
                enumerable: !0,
                value: b
            }), a.prototype.ERRORS = b, a.prototype.isEqual = function(b) {
                return b instanceof a && this.code === b.code
            }, b.UNKNOWN = new a(c), b.INVALID_ARG = new a({
                code: 1,
                message: "Invalid argument value"
            }), b.PLATFORM_SUPPORT_ERROR = new a({
                code: 2,
                message: "Platform does not support operation"
            }), b.NOT_SUPPORTED = new a({
                code: 3,
                message: "Operation not supported"
            }), b.CANCELLED = new a({
                code: 4,
                message: "Operation cancelled"
            }), b.NOT_IMPLEMENTED = new a({
                code: 9999,
                message: "NOT IMPLEMENTED"
            }), b.INVALID_CONFIG = new a({
                code: 100,
                message: "Invalid configuration value specified"
            }), b.START_ERROR = new a({
                code: 101,
                message: "MDX Start failure"
            }), b.STOP_ERROR = new a({
                code: 102,
                message: "MDX Stop failure"
            }), b.ALREADY_STARTED = new a({
                code: 103,
                message: "MDX already started"
            }), b.ALREADY_STOPPED = new a({
                code: 104,
                message: "MDX already stopped"
            }), b.PROTOCOL_ERROR = new a({
                code: 200,
                message: "Protocol error"
            }), b.USER_MISMATCH = new a({
                code: 201,
                message: "Pairing user mismatch"
            }), b.REGISTRATION_NOT_SUPPORTED = new a({
                code: 202,
                message: "Registration not supported"
            }), b.CONNECT_FAILED = new a({
                code: 203,
                message: "Failed to connect with the device"
            }), b.INVALID_CTICKET = new a({
                code: 204,
                message: "Invalid CTICKET"
            }), b.NOT_CONNECTED = new a({
                code: 205,
                message: "Not connected to the Netflix app on the device"
            }), b.APP_NOT_RUNNING = new a({
                code: 206,
                message: "Netflix app not running"
            }), b.CRYPTO_ERROR = new a({
                code: 300,
                message: "There was a crypto error encountered"
            }), b.MESSAGING_ERROR = new a({
                code: 301,
                message: "Message sending failed"
            }), Object.freeze(b), d.exports = a
        }, {}],
        71: [function(c, o, s) {
            var d, e = c("../../builds/ld.js"),
                g = c("../enums.js"),
                r = c("./profilerEvents.js"),
                m = c("./profileFormats.js"),
                p = c("../logging/logger.js"),
                f = c("../mdxError.js"),
                a = null,
                n = "",
                i = {
                    name: "local",
                    events: [],
                    markers: []
                },
                h = {
                    newSubEvent: function() {
                        return h
                    },
                    complete: function() {}
                },
                j = function(a, b, c, d, e) {
                    this.id = a, this.deviceId = b || n, this.start = d, this.end = null, this.events = [], this.parent = e || null, c ? this.newSubEvent = function(c, d, a) {
                        var b = l(c, this.deviceId, !0, d, this);
                        return a && b.complete(a), b
                    } : this.newSubEvent = function() {
                        return h
                    }
                };
            j.prototype.complete = function(g) {
                if (null === this.end && (this.end = g || new Date, !this.parent)) {
                    var c = a.devices[this.deviceId];
                    if (c) {
                        var b = c.events,
                            d = [],
                            f = function(a) {
                                d.push(a), a.complete(), e.forEach(a.events, f)
                            };
                        f(this), e.forEach(d, function(c) {
                            b.push(c.id), b.push(c.start);
                            var d = c.end.valueOf() - a.baseTime.valueOf();
                            b.push(d)
                        })
                    }
                }
            };
            var l = function(c, d, e, b) {
                    var f = (b ? b.valueOf() : (new Date).valueOf()) - a.baseTime.valueOf();
                    return new j(c, d, e, f)
                },
                q = 0,
                b = function(e, f, g, h, i) {
                    var a = this,
                        b = g.session;
                    a.index = q++, a.profiler = e, a.intent = f, a.result = a.RESULTS.FAILED, a.error = "", a.preemptedBy = "", a.targetVersion = b.mdxVersion.toString(), a.xid = h || null, a.targetUi = b.uiVersion || null, a.targetPlatform = b.platformVersion || null, a.targetFw = b.fwVersion || null, a.targetPlayer = b.playerVersion || null, a.targetShell = b.shellVersion || null, a.extraInfo = i || {}, a.startTime = new Date, a.ackTime = a.firstImpTime = a.completedTime = null, d || (d = c("../configuration.js")), a.failTimer = d.current.scheduler.delay(function() {
                        a.failed("Timed out")
                    }, 45e3)
                };
            b.prototype.RESULTS = {
                FAILED: "FAILED",
                SUCCESS: "SUCCESS",
                PREEMPTED: "PRE-EMPTED"
            }, b.prototype.send = function() {
                var a = this;
                a.failTimer && d.current.scheduler.cancelDelay(a.failTimer);
                var b = d.current,
                    c = a.startTime;
                p.mdxIntent(JSON.stringify({
                    index: a.index,
                    controllerMdx: b.version,
                    targetMdx: a.targetVersion,
                    controllerUi: b.uiVersion,
                    targetUi: a.targetUi,
                    controllerNative: b.platformVersion,
                    targetNative: a.targetPlatform,
                    targetFirmware: a.targetFw,
                    targetPlayer: a.targetPlayer,
                    targetShell: a.targetShell,
                    intent: a.intent,
                    xid: a.xid,
                    result: a.result,
                    ackTime: a.ackTime ? a.ackTime - c : null,
                    firstImpressionTime: a.firstImpTime ? a.firstImpTime - c : null,
                    completedTime: a.completedTime ? a.completedTime - c : null,
                    preemptedBy: a.preemptedBy,
                    errorText: a.error,
                    extraInfo: a.extraInfo
                })), a.profiler.currentIntent = null
            }, b.prototype.success = function() {
                var a = this;
                a.result = a.RESULTS.SUCCESS, a.send.call(this)
            }, b.prototype.failed = function(b) {
                var a = this;
                a.error = b || "", a.result = a.RESULTS.FAILED, a.send.call(this)
            }, b.prototype.preEmpted = function(b) {
                var a = this;
                a.preemptedBy = b, a.result = a.RESULTS.PREEMPTED, a.send.call(this)
            }, b.prototype.ack = function() {
                var a = this;
                a.ackTime = new Date, ("SET_VOLUME" === a.intent || "DISMISS_POSTPLAY" === a.intent) && a.success()
            }, b.prototype.processStateChange = function(c) {
                var a = this,
                    b = c.currentState,
                    d = new Date;
                if (b) {
                    var e = function() {
                            a.firstImpTime = a.firstImpTime || d, "PLAYING" === b && (a.completedTime = d, a.success())
                        },
                        f = function() {
                            a.firstImpTime = a.completedTime = new Date, a.success()
                        };
                    switch (a.intent) {
                        case "PLAY":
                            if ("END_PLAYBACK" === b) return;
                            e();
                            break;
                        case "SKIP_SEGMENT":
                        case "SKIP":
                        case "SET_TIME":
                            e();
                            break;
                        case "PAUSE":
                        case "RESUME":
                        case "STOP":
                        case "AUTO_ADVANCE":
                            f()
                    }
                    a.xid = a.xid || c.xid || null
                }
            }, b.prototype.processAudioSubtitlesChanged = function() {
                var a = this;
                if ("SET_AUDIO_SUBTITLES" === a.intent) {
                    var b = new Date;
                    a.firstImpTime = a.completedTime = b, a.success()
                }
            };
            var k = function() {
                var c = g.profilerModes.OFF;
                Object.defineProperties(this, {
                    mode: {
                        enumerable: !0,
                        get: function() {
                            return c
                        },
                        set: function(d) {
                            var b = g.profilerModes,
                                h = e.findKey(b, function(a) {
                                    return a === d
                                });
                            if (!h) throw new f(f.ERRORS.INVALID_CONFIG, "profiler mode:" + d);
                            switch (c = d) {
                                case b.OFF:
                                    a = null;
                                    break;
                                case b.KEY_EVENTS:
                                case b.FULL:
                                    a || (a = {
                                        baseTime: new Date,
                                        devices: {
                                            "": i
                                        }
                                    })
                            }
                        }
                    },
                    currentIntent: {
                        enumerable: !0,
                        writable: !0,
                        value: null
                    }
                }), this.setBaseTime = function(b) {
                    a && (a.baseTime = b)
                }, this.addDevice = function(b, c) {
                    if (a) {
                        var d = a.devices;
                        if (d[b]) throw new f(f.ERRORS.INVALID_ARG, "Device already added to the mdx profile: " + b + " - " + JSON.stringify(c));
                        d[b] = e.merge({
                            events: [],
                            markers: []
                        }, c)
                    }
                }, this.newEvent = function(e, f, i, b) {
                    if (!a) return h;
                    var d = l(e, f, c === g.profilerModes.FULL, i);
                    return b && d.complete(b), d
                }, this.newMarker = function(b, c, d) {
                    if (a && b) {
                        var f = (d ? d.valueOf() : (new Date).valueOf()) - a.baseTime.valueOf(),
                            g = c && a.devices[c] || i,
                            e = g.markers;
                        e.push(b), e.push(f)
                    }
                }, this.getData = function(b) {
                    switch (b) {
                        case "csv":
                            return m.asCsv(a);
                        default:
                            return e.clone(a, !0)
                    }
                }, this.registerUserIntent = function(d, e, f, g) {
                    var a = this,
                        c = a.currentIntent;
                    if (c && c.intent === d) {
                        if (!(new Date - c.startTime > 100)) return c;
                        a.currentIntent.preEmpted(d)
                    }
                    return a.currentIntent = new b(a, d, e, f, g), a.currentIntent
                }
            };
            k.prototype.EVENTS = r, o.exports = new k
        }, {
            "../../builds/ld.js": 1,
            "../configuration.js": 42,
            "../enums.js": 59,
            "../logging/logger.js": 64,
            "../mdxError.js": 70,
            "./profileFormats.js": 72,
            "./profilerEvents.js": 73
        }],
        72: [function(a, b, e) {
            var c = a("../../builds/ld.js"),
                d = function(b) {
                    var a = [];
                    return c.forEach(b.devices, function(d, f) {
                        for (var c = ",", b = d.events, e = f || "local"; b.length;) a.push([e, b.shift(), b.shift(), b.shift()].join(c));
                        for (b = d.markers; b.length;) a.push([e, b.shift(), b.shift()].join(c) + c);
                        return a
                    }), ["device,event,start,end"].concat(a)
                };
            b.exports = {
                asCsv: d
            }
        }, {
            "../../builds/ld.js": 1
        }],
        73: [function(b, a, c) {
            a.exports = {
                INVALID: 0,
                INIT: 1,
                START: 2,
                START_CAST_DISC: 3,
                START_DIAL_DISC: 4,
                DEVICE_FOUND: 5,
                DEVICE_GONE: 6,
                DEVICE_REFOUND: 7,
                STOP: 8,
                STOP_CAST_DISC: 9,
                STOP_DIAL_DISC: 10,
                CONNECT: 11,
                DROPPED: 100,
                VALIDATE_MSG: 101,
                DISPATCH_FAILED: 102,
                PAIRIFY: 103,
                DISPATCH_MSG: 104,
                QUEUED: 105,
                CREATE_CTX: 106,
                HMAC: 107,
                DECRYPT: 108,
                ENCRYPT: 109,
                CANONICAL: 110,
                UNKNOWN_MSG: 120,
                PAIRINGREQUEST: 121,
                ERROR: 122,
                PAIRINGREJECTED: 123,
                PAIRINGRESPONSE: 124,
                START_SESSION: 125,
                END_SESSION: 126,
                SESSION_ERR_MSG: 127,
                REGPAIRREQUEST: 128,
                PINGREQUEST: 129,
                PINGRESPONSE: 130,
                PAIRING_ERROR_RESPONSE: 131,
                REGPAIRRESPONSE: 132,
                REGPAIR_ERROR_RESPONSE: 133,
                HANDSHAKE: 150,
                PLAYER_PLAY: 151,
                PLAYER_PAUSE: 152,
                PLAYER_RESUME: 153,
                PLAYER_STOP: 154,
                PLAYER_SKIP: 155,
                PLAYER_SET_CURRENT_TIME: 156,
                PLAYER_SET_AUTO_ADVANCE: 157,
                PLAYER_SET_VOLUME: 158,
                PLAYER_GET_CURRENT_STATE: 159,
                PLAYER_GET_CAPABILITIES: 160,
                MESSAGE_IGNORED: 161,
                HANDSHAKE_ACCEPTED: 162,
                PLAYER_CURRENT_STATE: 163,
                PLAYER_STATE_CHANGED: 164,
                PLAYER_CAPABILITIES: 165,
                DIALOG_SHOW: 166,
                DIALOG_CANCEL: 167,
                DIALOG_RESPONSE: 168,
                GET_AUDIO_SUBTITLES: 169,
                SET_AUDIO_SUBTITLES: 170,
                AUDIO_SUBTITLES_SETTINGS: 171,
                AUDIO_SUBTITLES_CHANGED: 172,
                PIN_VERIFICATION_SHOW: 173,
                PIN_VERIFICATION_NOT_REQUIRED: 174,
                PIN_VERIFICATION_CANCEL: 175,
                PIN_VERIFICATION_RESPONSE: 176,
                META_DATA_CHANGED: 177,
                SKIP_SEGMENT: 178,
                CAST_HANDSHAKE: 200,
                CAST_RESUME: 201,
                CAST_PAUSE: 202,
                CAST_DEVICE_CONNECT: 203,
                CAST_APP_CONNECT: 204,
                CAST_STOP: 205,
                SERVER_PAIR: 300,
                DIAL_LAUNCH: 400
            }
        }, {}],
        74: [function(f, u, w) {
            var s, r, d = f("q"),
                g = f("../builds/ld.js"),
                e = f("./mdxError.js"),
                j = f("./enums.js"),
                q = function() {},
                k = function() {
                    var b = arguments[0],
                        a = arguments[1];
                    if (a) {
                        var c = g.drop(arguments, 2);
                        b(function() {
                            a.apply(this, c)
                        }, 0)
                    }
                },
                p = function() {
                    var c = arguments[0],
                        b = arguments[1];
                    if (!b) return d.reject(new e(e.ERRORS.INVALID_ARG, "Invalid fn value for asyncResolve"));
                    var a = d.defer(),
                        f = {
                            resolve: a.resolve,
                            reject: a.reject,
                            notify: a.notify
                        },
                        h = [f].concat(g.drop(arguments, 2));
                    return c(function() {
                        b.apply(this, h)
                    }, 0), a.promise
                },
                m = function() {
                    var b = arguments[0],
                        a = arguments[1];
                    if (!a) return void 0;
                    var c = arguments[2],
                        d = g.drop(arguments, 3);
                    return b(function() {
                        a.apply(this, d)
                    }, c)
                },
                n = function(a, b) {
                    a.call(this, b)
                },
                o = function() {
                    var e = arguments[0],
                        f = arguments[1],
                        a = arguments[2];
                    if (!a) return void 0;
                    var h = arguments[3],
                        i = arguments[4],
                        c = g.drop(arguments, 5),
                        d = f(function() {
                            a.apply(this, c)
                        }, h);
                    if (i) {
                        var b = new q;
                        return b.intervalId = d, b.timeoutId = e(function() {
                            a.apply(this, c)
                        }, 0), b
                    }
                    return d
                },
                i = function(c, b, a) {
                    a instanceof q ? (c.call(this, a.timeoutId), b.call(this, a.intervalId)) : b.call(this, a)
                },
                l = function(h, c, i, a, j) {
                    if (!c) return d.reject(new e(e.ERRORS.INVALID_ARG, "Invalid fn value for retry"));
                    a = parseInt(a) || 1;
                    var b = d.defer(),
                        f = function(c) {
                            c >= a ? b.reject(j || "Operation failed after " + a + " attempts") : h(function() {
                                g(++c)
                            }, i)
                        },
                        g = function(a) {
                            var e = d(c());
                            if (e.isPending()) e.done(b.resolve, function() {
                                f(a)
                            });
                            else {
                                var g = e.inspect().value;
                                if (g) {
                                    if (1 === a) return d.resolve(g);
                                    b.resolve(g)
                                } else f(a)
                            }
                            return null
                        };
                    return g(1) || b.promise
                },
                b = function() {};
            b.prototype.async = function() {
                var a = [nrdp.gibbon.setTimeout].concat(Array.prototype.slice.call(arguments));
                return k.apply(void 0, a)
            }, b.prototype.asyncResolve = function() {
                var a = [nrdp.gibbon.setTimeout].concat(Array.prototype.slice.call(arguments));
                return p.apply(void 0, a)
            }, b.prototype.delay = function() {
                var a = [nrdp.gibbon.setTimeout].concat(Array.prototype.slice.call(arguments));
                return m.apply(nrdp.gibbon, a)
            }, b.prototype.cancelDelay = function() {
                var a = [nrdp.gibbon.clearTimeout].concat(Array.prototype.slice.call(arguments));
                return n.apply(nrdp.gibbon, a)
            }, b.prototype.repeat = function() {
                var a = [nrdp.gibbon.setTimeout, function() {
                    var a = Array.prototype.slice.call(arguments);
                    return a.splice(2, 0, !1), nrdp.gibbon.setTimeout.apply(nrdp.gibbon, a)
                }].concat(Array.prototype.slice.call(arguments));
                return o.apply(nrdp.gibbon, a)
            }, b.prototype.cancelRepeat = function() {
                var a = [nrdp.gibbon.clearTimeout, nrdp.gibbon.clearTimeout].concat(Array.prototype.slice.call(arguments));
                return i.apply(void 0, a)
            }, b.prototype.retry = function() {
                var a = [nrdp.gibbon.setTimeout].concat(Array.prototype.slice.call(arguments));
                return l.apply(void 0, a)
            };
            var a = function() {};
            a.prototype.async = function() {
                var a = [window.setTimeout].concat(Array.prototype.slice.call(arguments));
                return k.apply(void 0, a)
            }, a.prototype.asyncResolve = function() {
                var a = [window.setTimeout].concat(Array.prototype.slice.call(arguments));
                return p.apply(void 0, a)
            }, a.prototype.delay = function() {
                var a = [window.setTimeout].concat(Array.prototype.slice.call(arguments));
                return m.apply(window, a)
            }, a.prototype.cancelDelay = function() {
                var a = [window.clearTimeout].concat(Array.prototype.slice.call(arguments));
                return n.apply(window, a)
            }, a.prototype.repeat = function() {
                var a = [window.setTimeout, window.setInterval].concat(Array.prototype.slice.call(arguments));
                return o.apply(window, a)
            }, a.prototype.cancelRepeat = function() {
                var a = [window.clearTimeout, window.clearInterval].concat(Array.prototype.slice.call(arguments));
                return i.apply(void 0, a)
            }, a.prototype.retry = function() {
                var a = [window.setTimeout].concat(Array.prototype.slice.call(arguments));
                return l.apply(void 0, a)
            };
            var c = function() {};
            c.prototype.async = function() {
                var a = [setTimeout].concat(Array.prototype.slice.call(arguments));
                return k.apply(null, a)
            }, c.prototype.asyncResolve = function() {
                var a = [setTimeout].concat(Array.prototype.slice.call(arguments));
                return p.apply(null, a)
            }, c.prototype.delay = function() {
                var a = [setTimeout].concat(Array.prototype.slice.call(arguments));
                return m.apply(null, a)
            }, c.prototype.cancelDelay = function() {
                var a = [clearTimeout].concat(Array.prototype.slice.call(arguments));
                return n.apply(null, a)
            }, c.prototype.repeat = function() {
                var a = [setTimeout, setInterval].concat(Array.prototype.slice.call(arguments));
                return o.apply(null, a)
            }, c.prototype.cancelRepeat = function() {
                var a = [clearTimeout, clearInterval].concat(Array.prototype.slice.call(arguments));
                return i.apply(null, a)
            }, c.prototype.retry = function() {
                var a = [setTimeout].concat(Array.prototype.slice.call(arguments));
                return l.apply(null, a)
            };
            var t = function() {
                    return r || (r = new a)
                },
                v = function() {
                    return s || (s = new b)
                },
                h = {};
            h[j.platforms.CAST_TARGET.id] = t, h[j.platforms.NRDP_TARGET.id] = v, h[j.platforms.CADMIUM_CONTROLLER.id] = t, u.exports = {
                createScheduler: function(a) {
                    var b = h[a.id];
                    if (b) return b();
                    throw new e(e.ERRORS.PLATFORM_SUPPORT_ERROR, "Cannot create scheduler for platform: " + a.name)
                }
            }
        }, {
            "../builds/ld.js": 1,
            "./enums.js": 59,
            "./mdxError.js": 70,
            q: 37
        }],
        75: [function(a, o, C) {
            var b = a("q"),
                g = a("../logging/logger.js"),
                r = a("./validation.js"),
                c = a("./msgFactory.js"),
                d = a("../profiling/mdxProfiler.js"),
                h = a("../enums.js"),
                j = a("../configuration.js"),
                l = a("./error.js"),
                i = a("../mdxError.js"),
                s = a("../eventManager.js"),
                k = 8e3,
                B = 13e3,
                p = 0,
                f = {},
                e = new s,
                m = {
                    endSessionAck: "endSessionAck"
                },
                t = function(h, f, g) {
                    g.id = d.EVENTS.START_SESSION;
                    var a = f.session,
                        e = ++p;
                    return a.sendSessionMessage(c.startSessionResponse(e)).finally(function() {
                        a.mdxSessionId = e
                    }), b.resolve()
                },
                u = function(a, c, b) {
                    return b.id = d.EVENTS.END_SESSION, this.end(!1, !0, "true" === a.ack)
                },
                v = function(a) {
                    return e.fireEvent(m.endSessionAck, {
                        session: this,
                        msg: a
                    }), b.resolve()
                },
                w = function(a, c, i) {
                    i.id = d.EVENTS.START_SESSION, c.session.mdxSessionId = a.sessionId, c.session.supportsEndAck = "true" === a.supportsEndAck;
                    var e = f[c.id],
                        h = e && e.deferred;
                    return h ? h.resolve() : g.warn("Start session response was unexpected or too late", a), b.resolve()
                },
                x = function(a, f, g, e) {
                    return b.Promise(function(j, l) {
                        var i;
                        try {
                            var b = f.session,
                                k = d.EVENTS[a.appAction],
                                m = function(a) {
                                    return b.sendMdxMessage(c.error(e, f, a), "session"), j()
                                };
                            if (k && g && (g.id = k), b.isMessageReplay(e) ? i = {
                                    code: h.errors.SESSION_INVALID_NONCE,
                                    desc: "session message rejected because message replay attack was detected"
                                } : parseInt(a.sessionId) !== parseInt(b.mdxSessionId) && (i = {
                                    code: h.errors.SESSION_INVALID_SID,
                                    desc: "session message rejected because invalid session ID was detected"
                                }), i) return m(i);
                            if ("HANDSHAKE" === a.appAction) return b.sendSessionMessage(c.handshakeAccepted(b.mdxSessionId, a.appBody.contractVersion)), j();
                            j({
                                type: a.appAction,
                                payload: a.appBody,
                                transactionId: e
                            })
                        } catch (a) {
                            l(a)
                        }
                    })
                },
                y = {
                    createSession: t,
                    endSession: u,
                    endSessionAck: v,
                    startSessionResponse: w,
                    appMessage: x
                },
                z = function(c, a, e) {
                    return g.warn("Processing session error message from device", a.id, c), e.id = d.EVENTS.SESSION_ERR_MSG, a.session.errMsgCount++, j.current.platform.role === h.roles.CONTROLLER, b.resolve()
                },
                A = function(a) {
                    return "session" === a.action
                },
                q = function(d, e, f) {
                    var a = this;
                    return "error" === d.action ? z.call(a, d) : (a.errMsgCount = 0, b.Promise(function(k, b) {
                        a.processEncryptedMessage(d, f).done(function(l) {
                            var c = r.parsePairedPayload(l),
                                h = c.sessionAction,
                                i = y[h];
                            if (i) i.call(a, c, e, f, d.nonce).done(k, b);
                            else {
                                var j = "Unknown Session Message Action: " + h;
                                g.error(j), b(j)
                            }
                        }, function(f) {
                            a.mdxSessionId || f.code === i.ERRORS.CRYPTO_ERROR.code ? (j.current.scheduler.async(function() {
                                a.sendMdxMessage(c.error(d.nonce, e, h.errors.SESSION_INVALID_HMAC), "session").finally(function() {
                                    return i.ERRORS.CRYPTO_ERROR.isEqual(f) ? e.clearPairing() : (a.mdxSessionId = null, void e.disconnectFromApp())
                                }).catch(g.warn)
                            }), b(new i(i.ERRORS.MESSAGING_ERROR, "Application session message failed to decrypt: " + JSON.stringify(f)))) : k()
                        })
                    }))
                },
                n = function(a) {
                    var g = this,
                        d = a.id,
                        e = j.current.scheduler,
                        h = b.defer();
                    f[d] = {
                        deferred: h
                    };
                    var i = b.defer();
                    return a.mdxSessionId = 0, g.sendSessionMessage(c.startSessionRequest()).then(function(j) {
                        var m = function h(b) {
                            b && "ETIMEDOUT" === b.code && 0 === a.mdxSessionId && e.async(function() {
                                g.sendSessionMessage(c.startSessionRequest()).then(function() {
                                    var a = f[d];
                                    a && (a.retryTimeout && e.cancelDelay(a.retryTimeout), e.delay(h, k))
                                })
                            }), i.reject(b)
                        };
                        h.promise.timeout(k).then(i.resolve, m).finally(function() {
                            var b = function b() {
                                    l.clearErrorHandler(j), a.removeEventListener(a.EVENTS.LAUNCH_STATE_CHANGED, b)
                                },
                                a = g.device;
                            a.addEventListener(a.EVENTS.LAUNCH_STATE_CHANGED, b)
                        }), l.registerErrorHandler(j, function(a) {
                            return h.reject(a), b.resolve()
                        })
                    }).fail(function() {}).done(), i.promise.timeout(B, "Timed out trying to start session with target " + a.id).finally(function() {
                        var a = f[d];
                        a && a.retryTimeout && e.cancelDelay(a.retryTimeout), delete f[d]
                    })
                };
            o.exports = {
                canHandle: A,
                handleMsg: q,
                startSession: n,
                addMessageListener: e.addEventListener.bind(e),
                removeMessageListener: e.removeEventListener.bind(e),
                events: m
            }
        }, {
            "../configuration.js": 42,
            "../enums.js": 59,
            "../eventManager.js": 60,
            "../logging/logger.js": 64,
            "../mdxError.js": 70,
            "../profiling/mdxProfiler.js": 71,
            "./error.js": 80,
            "./msgFactory.js": 85,
            "./validation.js": 90,
            q: 37
        }],
        76: [function(b, c, h) {
            var d = b("q"),
                e = (b("../logging/logger.js"), b("../eventManager.js")),
                a = new e,
                f = function(a) {
                    return "broadcast" === a.action
                },
                g = function(b, c) {
                    var e = {
                        device: c,
                        payload: b.payload
                    };
                    return a.fireEvent(b.messageType, e), d.resolve()
                };
            c.exports = {
                canHandle: f,
                handleMsg: g,
                addMessageListener: a.addEventListener.bind(a),
                removeMessageListener: a.removeEventListener.bind(a)
            }
        }, {
            "../eventManager.js": 60,
            "../logging/logger.js": 64,
            q: 37
        }],
        77: [function(a, l, o) {
            var e, g = a("q"),
                i = a("../../builds/ld.js"),
                f = a("../logging/logger.js"),
                j = a("../profiling/mdxProfiler.js"),
                k = a("../enums.js"),
                n = a("./regPairFactory.js"),
                b = a("../configuration.js"),
                d = a("./mdxSession.js"),
                h = a("../mdxError.js"),
                m = a("../versionInfo.js"),
                c = function(f, g, b, c) {
                    d.call(this, f, c);
                    var a = g;
                    return Object.defineProperties(this, {
                        protocol: {
                            enumerable: !1,
                            value: "cast://"
                        },
                        senderId: {
                            enumerable: !0,
                            get: function() {
                                return a
                            },
                            set: function(b) {
                                a = b
                            }
                        },
                        senderGuid: {
                            enumerable: !1,
                            get: function() {
                                return a.substr(a.indexOf(":") + 1)
                            }
                        },
                        opts: {
                            enumerable: !1,
                            value: c || {}
                        }
                    }), b && (e = b), this
                };
            c.prototype = Object.create(d.prototype), c.prototype.sendHandshakeResponse = function() {
                var a = this,
                    h = n.createProvider(b.current.platform),
                    c = {
                        type: "castHandShakeAck",
                        registered: h.isRegistered,
                        msl: !0
                    };
                if (a.mdxVersion.matches(0, 0, 0)) i.merge(c, {
                    registrationAcceptance: k.registrationModes.DEFAULT_PIN
                });
                else {
                    if (!a.mdxVersion.isGreaterThanOrEqual(4, 0, 0)) return void f.error("Cannot send cast handshake response for unexpected controller version", a.mdxVersion.toString());
                    var j = navigator.appVersion || "",
                        g = /CrKey\/(\d+.\d+.\d+)/.exec(j),
                        l = new m(g ? g[1] : ""),
                        d = (nrdp.device.softwareVersion || "").split("|"),
                        o = d[0],
                        p = d.length && d[1],
                        q = a.opts.handshake && a.opts.handshake.mdxContractVersion || b.current.mdxContractVersion;
                    i.merge(c, {
                        registrationAcceptance: b.current.registrationMode,
                        version: b.current.version,
                        handshake: {
                            accepted: b.current.mdxContractVersion === q,
                            contractVersion: b.current.mdxContractVersion,
                            volumeControl: b.current.volumeControl === !0,
                            volumeStep: b.current.volumeStep
                        },
                        uiVersion: b.current.uiVersion,
                        platformVersion: b.current.nativeVersion,
                        fwVersion: l,
                        playerVersion: p,
                        shellVersion: o
                    })
                }
                e.send(a.senderId, c)
            }, c.prototype.processMdxMessage = function(a, c) {
                try {
                    var b = this;
                    a.type && "castHandShake" === a.type ? b.sendHandshakeResponse.call(b) : d.prototype.processMdxMessage.call(b, a, c)
                } catch (a) {
                    f.error("CastControllerSession.processMdxMessage - Message  handling failed", a, a.stack)
                }
            }, c.prototype.processMediaMessage = function(b, c) {
                try {
                    var a = this.device,
                        d = "CAST_" + b;
                    j.newMarker(j.EVENTS[d], a.id, c);
                    var e = {
                        device: a,
                        payload: {},
                        xid: 0,
                        type: "PLAYER_" + b
                    };
                    a.onAppMessage(e)
                } catch (a) {
                    f.error("CastControllerSession.processMediaMessage - Message handling failed", a, a.stack)
                }
            }, c.prototype.dispatchMessage = function(a) {
                a.url = "cast://" + nrdp.device.ESN + a.url;
                try {
                    return e.send(this.senderId, a), g.resolve()
                } catch (a) {
                    return g.reject(a)
                }
            }, c.fromExisting = function(a, b) {
                return new c(a.mdxVersion, b, a.mdxUuid, null, a.controllerOps)
            }, c.prototype.sendAppMessage = function(a, b) {
                return this.opts.incomingOnly ? g.reject(new h(h.ERRORS.MESSAGING_ERROR), "Dropping message to device - this session only supports incoming messages") : d.prototype.sendAppMessage.call(this, a, b)
            }, l.exports = c
        }, {
            "../../builds/ld.js": 1,
            "../configuration.js": 42,
            "../enums.js": 59,
            "../logging/logger.js": 64,
            "../mdxError.js": 70,
            "../profiling/mdxProfiler.js": 71,
            "../versionInfo.js": 99,
            "./mdxSession.js": 82,
            "./regPairFactory.js": 88,
            q: 37
        }],
        78: [function(b, k, o) {
            var e = b("q"),
                m = b("../../builds/ld.js"),
                h = b("../logging/logger.js"),
                j = b("../profiling/mdxProfiler.js"),
                f = b("../configuration.js"),
                d = b("../enums.js"),
                g = b("./mdxTargetSession.js"),
                l = b("../versionInfo.js"),
                c = b("../mdxError.js"),
                n = 3e4,
                i = {},
                a = function() {
                    g.call(this);
                    var a;
                    return Object.defineProperties(this, {
                        sessionId: {
                            enumerable: !0,
                            get: function() {
                                return a
                            },
                            set: function(b) {
                                a = b
                            }
                        },
                        protocol: {
                            enumerable: !1,
                            value: "cast://"
                        }
                    }), this
                };
            a.prototype = Object.create(g.prototype), a.prototype.appConnectionTimeout = 2e4, a.prototype.deviceConnectionTimeout = 1e4, a.prototype.guestModeDeviceConnectionTimeout = 9e4, a.prototype.sendCastHandshake = function(k, b) {
                var a = this,
                    d = a.device,
                    l = d.mdxUuid,
                    g = b && b.newSubEvent(j.EVENTS.CAST_HANDSHAKE),
                    h = e.defer(),
                    m = {
                        type: "castHandShake",
                        uuid: l,
                        friendlyName: d.friendlyName,
                        controlleruuid: f.current.mdxUuid,
                        payload: k,
                        controllerMdxVersion: f.current.version,
                        opts: {
                            handshake: {
                                mdxContractVersion: f.current.mdxContractVersion
                            }
                        }
                    },
                    o = f.current.scheduler.retry(function() {
                        var b = e.defer();
                        return i[a.sessionId] = h, a.sendCastMessage.call(a, m).done(function() {
                            g && g.complete(), b.resolve()
                        }, function() {
                            return a.cleanupCastConnection(!0).then(a.createDeviceConnection.bind(a)).then(a.createAppConnection.bind(a)).finally(b.reject)
                        }), b.promise
                    }, 500, 2, "Failed to send the cast handshake to the target after max retries");
                return o.then(function() {
                    return h.promise
                }, function() {
                    return e.reject(new c(c.ERRORS.CONNECT_FAILED, "Failed to send the cast handshake"))
                }).timeout(n, "Timed out waiting for a cast handshake response from the target")
            }, a.prototype.processCastHandshakeAck = function(a) {
                var b = this,
                    e = i[b.sessionId];
                if (!e) return void h.warn("Received an unexpected cast handshake ack", a);
                var c = b.device;
                c.isRegistered = a.registered, c.isMsl = !0;
                var f = m.find(d.registrationModes, function(b) {
                    return b === a.registrationAcceptance
                }) || d.registrationModes.DISABLED;
                c.registrationMode = f, b.mdxVersion = new l(a.version ? a.version : "4.0.0"), b.uiVersion = a.uiVersion || null, b.platformVersion = a.platformVersion, b.fwVersion = a.fwVersion || null, b.playerVersion = a.playerVersion || null, b.shellVersion = a.shellVersion || null, e.resolve()
            }, a.prototype.processMdxMessage = function(b, d) {
                var a = this;
                try {
                    var c = b.type;
                    c ? "castHandShakeAck" === c ? a.processCastHandshakeAck.call(a, b) : "castHandShakeRequest" === c && a.sendCastHandshake.call(a, a.device.discoveryComponent.config.defaultLaunchArgs) : g.prototype.processMdxMessage.call(a, b, d)
                } catch (a) {
                    h.error("CastTargetSessionBase.processMdxMessage - Message  handling failed", a, a.stack)
                }
            }, a.prototype.dispatchMessage = function(a) {
                return this.sendCastMessage.call(this, a)
            }, a.prototype.handleTargetConnection = function(h, m, j, n, l) {
                var a = this,
                    b = a.device,
                    g = e.defer(),
                    i = d.connectIntents,
                    o = h === i.LAUNCH || h === i.LAUNCH_AND_CONTROL,
                    p = h === i.LAUNCH_AND_CONTROL;
                if (b.launchState === d.launchStates.LAUNCHED || l || (b.launchState = d.launchStates.PENDING), b.isGuestMode && h === i.JOIN && !b.canJoinInGuestMode) f.current.scheduler.async(g.reject.bind(g, new c(c.ERRORS.CANCELLED, "Cast target is in guest mode - join not permitted")));
                else {
                    var k;
                    k = a.createDeviceConnection ? a.createDeviceConnection.call(a, j).then(a.createAppConnection.bind(a, o, j)) : e.resolve({
                        launched: !0
                    }), k.done(function(e) {
                        e.launched ? a.sendCastHandshake.call(a, m, j).then(a.startSession.bind(a, p, n)).then(function() {
                            b.isGuestMode && (b.canJoinInGuestMode = !0)
                        }).done(g.resolve, g.reject) : (b.launchState = d.launchStates.NOT_LAUNCHED, g.reject(new c(c.ERRORS.APP_NOT_RUNNING)))
                    }, function(a) {
                        a && "ETIMEDOUT" === a.code && (a = new c(c.ERRORS.CONNECT_FAILED, a.message)), g.reject(a)
                    })
                }
                return g
            }, a.prototype.dispose = function() {
                var a = this;
                return a.sessionId && (a.sessionId = null), e.resolve()
            }, k.exports = a
        }, {
            "../../builds/ld.js": 1,
            "../configuration.js": 42,
            "../enums.js": 59,
            "../logging/logger.js": 64,
            "../mdxError.js": 70,
            "../profiling/mdxProfiler.js": 71,
            "../versionInfo.js": 99,
            "./mdxTargetSession.js": 83,
            q: 37
        }],
        79: [function(a, g, j) {
            var d = a("q"),
                b = (a("../logging/logger.js"), a("../enums.js")),
                e = a("./castTargetSessionBase.js"),
                f = a("../mdxError.js"),
                h = function(f) {
                    var a = this,
                        c = a.device,
                        d = b.discoveryStates.UNAVAILABLE,
                        e = b.launchStates.NOT_LAUNCHED;
                    a.castSession.status === chrome.cast.SessionStatus.CONNECTED ? (d = b.discoveryStates.AVAILABLE, e = b.launchStates.LAUNCHED) : (a.end(!1, !0), a.castSession = null), c.discoveryState = d, c.launchState = e
                },
                i = function(a, b) {
                    if (a === this.namespace) try {
                        var c = new Date,
                            d = JSON.parse(b);
                        this.processMdxMessage(d, c)
                    } catch (a) {}
                },
                c = function(f, g) {
                    var b = this;
                    e.call(b);
                    var a, c = h.bind(b),
                        d = i.bind(b);
                    return Object.defineProperties(b, {
                        namespace: {
                            enumerable: !1,
                            writable: !1,
                            value: g
                        },
                        castSession: {
                            enumerable: !1,
                            get: function() {
                                return a
                            },
                            set: function(e) {
                                e !== a && (a && (a.removeUpdateListener(c), a.removeMessageListener(b.namespace, d)), a = e, a && (a.addUpdateListener(c), a.addMessageListener(b.namespace, d)))
                            }
                        }
                    }), b.castSession = f, b
                };
            c.prototype = Object.create(e.prototype), c.prototype.sendCastMessage = function(c) {
                var a = d.defer(),
                    b = this;
                return b.castSession.sendMessage(b.namespace, c, function() {
                    a.resolve()
                }, function(b) {
                    a.reject(new f(f.ERRORS.MESSAGING_ERROR, "Failed to send payload on cast channel. Error: " + b))
                }), a.promise
            }, c.prototype.stop = function() {
                var a = d.defer();
                return this.castSession ? (this.castSession.stop(a.resolve, a.reject), a.promise) : d.reject()
            }, g.exports = c
        }, {
            "../enums.js": 59,
            "../logging/logger.js": 64,
            "../mdxError.js": 70,
            "./castTargetSessionBase.js": 78,
            q: 37
        }],
        80: [function(a, g, l) {
            var d = a("../../builds/ld.js"),
                e = a("../logging/logger.js"),
                f = a("../enums.js"),
                k = a("../profiling/mdxProfiler.js"),
                b = {},
                i = function(a) {
                    return "error" === a.action
                },
                j = function(a, c, g) {
                    g && (g.id = k.EVENTS.ERROR);
                    var h = parseInt(a.errorcode),
                        i = d.find(f.errors, function(a) {
                            return h === a.code
                        });
                    return b[a.nonce] ? b[a.nonce](i) : (e.warn("Remote device reported an error", c.id, a), c.disconnectFromApp())
                },
                c = function(a, c) {
                    b[a] = c
                },
                h = function(a) {
                    delete b[a]
                };
            g.exports = {
                canHandle: i,
                handleMsg: j,
                registerErrorHandler: c,
                clearErrorHandler: h
            }
        }, {
            "../../builds/ld.js": 1,
            "../enums.js": 59,
            "../logging/logger.js": 64,
            "../profiling/mdxProfiler.js": 71
        }],
        81: [function(b, g, h) {
            var d = b("q"),
                e = b("../logging/logger.js"),
                c = b("./mdxSession.js"),
                f = b("../mdxError.js"),
                a = function(e, f, b, d) {
                    c.call(this, e, d);
                    var a = f;
                    return Object.defineProperties(this, {
                        protocol: {
                            enumerable: !1,
                            value: "http://"
                        },
                        senderId: {
                            enumerable: !0,
                            get: function() {
                                return a
                            },
                            set: function(b) {
                                a = b
                            }
                        },
                        senderGuid: {
                            enumerable: !1,
                            get: function() {
                                return a.substr(a.indexOf(":") + 1)
                            }
                        },
                        opts: {
                            enumerable: !1,
                            value: d || {}
                        }
                    }), b && (this.messageBus = b), this
                };
            a.prototype = Object.create(c.prototype), a.prototype.processMdxMessage = function(a, b) {
                try {
                    c.prototype.processMdxMessage.call(this, a, b)
                } catch (a) {
                    e.error("MdxControllerSession.processMdxMessage - Message  handling failed", a, a.stack)
                }
            }, a.prototype.dispatchMessage = function(a) {
                e.trace("MdxControllerSession.dispatchMessage", a);
                try {
                    return this.messageBus.send(a)
                } catch (a) {
                    return d.reject(a)
                }
            }, a.fromExisting = function(b, c) {
                return new a(b.mdxVersion, c, b.mdxUuid, null, b.controllerOps)
            }, a.prototype.sendAppMessage = function(a, b) {
                return this.opts.incomingOnly ? d.reject(new f(f.ERRORS.MESSAGING_ERROR), "Dropping message to device - this session only supports incoming messages") : c.prototype.sendAppMessage.call(this, a, b)
            }, g.exports = a
        }, {
            "../logging/logger.js": 64,
            "../mdxError.js": 70,
            "./mdxSession.js": 82,
            q: 37
        }],
        82: [function(c, G, K) {
            var f = c("q"),
                l = c("../utils"),
                y = c("../../builds/ld.js"),
                d = c("../logging/logger.js"),
                a = c("../profiling/mdxProfiler.js"),
                p = c("./validation.js"),
                r = c("./pairing.js"),
                j = c("./appMessage.js"),
                E = c("./broadcast.js"),
                n = c("./ping.js"),
                B = c("./error.js"),
                b = c("../configuration.js"),
                s = c("./securityFactory.js"),
                h = c("./msgFactory.js"),
                g = c("../enums.js"),
                A = c("../discovery/discoveryUtils.js"),
                k = c("../mdxError.js"),
                u = g.messageActionNames,
                J = 6100,
                F = 3e4,
                m = 1e4,
                I = 50,
                z = "1.0",
                o = "session",
                q = 1,
                C = [j, r, E, n, B],
                D = function(k, h, e, f, g) {
                    var c = this,
                        i = c.device,
                        j = f.newSubEvent(a.EVENTS.DISPATCH_MSG);
                    c.dispatchMessage.call(c, h).tap(function() {
                        j.complete()
                    }).timeout(J).tap(function() {
                        f.complete(), b.current.scheduler.async(v.bind(c))
                    }).done(function() {
                        g.resolve(e)
                    }, function(b) {
                        d.warn("Failed to dispatch message. Error: " + b, e), a.newMarker(a.EVENTS.DROPPED, i.id), g.reject(b)
                    })
                },
                v = function r() {
                    var c = this,
                        f = c.device,
                        i = c.sendQueue;
                    if (i.processTimeout && (b.current.scheduler.cancelDelay(i.processTimeout), i.processTimeout = null), !i.length) return void(i.isProcessing = null);
                    i.processTimeout = b.current.scheduler.delay(function() {
                        d.error("Outgoing message queue stalled", f.id, f.friendlyName), r.call(c)
                    }, m);
                    var j = i.shift();
                    f && f.session || r.call(c);
                    var e = j.msgData,
                        t = e.body,
                        x = n.canHandle(t) ? t.id : t.nonce,
                        q = x || c.createMsgNonce(),
                        l = j.profilerEvent,
                        u = function(f, b) {
                            var e, d = {
                                url: "/" + f
                            };
                            b && b.legacyMessageEncryption && (d.legacyMessageEncryption = b.legacyMessageEncryption, delete b.legacyMessageEncryption), e = l.newSubEvent(a.EVENTS.PAIRIFY), d.body = p.processOutgoingMessage(b), e.complete(), D.call(c, i, d, q, l, j.deferred)
                        };
                    if (j.isSessionMsg) {
                        var y = p.processOutgoingMessage(e.body);
                        e.body = h.sessionMsgEnv(q, f, z, y);
                        var v = function() {
                            c.context.processOutgoingSessionMsg(e.body, l).done(function(a) {
                                u.call(c, e.cmd, a)
                            }, function(a) {
                                k.ERRORS.CRYPTO_ERROR.isEqual(a) && c.device.clearPairing(), j.deferred.reject()
                            })
                        };
                        if (c.context) v();
                        else if (f.sharedSecret) {
                            var A = l.newSubEvent(a.EVENTS.CREATE_CTX),
                                B = s.createSecurityProvider(b.current.platform),
                                w = "Failed to create session context when processing outgoing message. Message will be dropped";
                            B.beginContext(f.sharedSecret).finally(function() {
                                A.complete()
                            }).done(function(a) {
                                a || d.warn(w, e), c.context = a, v()
                            }, function(a) {
                                d.warn(w, a, e)
                            })
                        } else c.sendMdxMessage(h.error(q, f, g.errors.SESSION_INVALID_HMAC), o), b.current.scheduler.async(r.bind(c))
                    } else u.call(c, e.cmd, e.body)
                },
                w = function(b, c, g, e, h, i) {
                    if (b.length > I) return d.error(i + "queue overflow. Dropping msg"), a.newMarker(a.EVENTS.DROPPED, e.id), void h.complete();
                    b.push(c);
                    var f = new Date - b.isProcessing;
                    if (b.isProcessing) {
                        if (b.length > 1 || m > f) return;
                        1 === b.length && f > m && d.error("Stale queue.isProcessing flag detected", c)
                    }
                    b.isProcessing = new Date, g.call(e.session)
                },
                x = function(b, h) {
                    var c = this,
                        i = c.device,
                        e = f.defer(),
                        j = b.cmd.toUpperCase(),
                        k = a.EVENTS[j] || a.EVENTS.UNKNOWN,
                        g = a.newEvent(k),
                        l = {
                            msgData: b,
                            profilerEvent: g,
                            deferred: e,
                            isSessionMsg: h
                        };
                    return w(c.sendQueue, l, v, i, g, "receive"), e.promise.catch(d.warn)
                },
                H = function g() {
                    var c = this,
                        f = c.device,
                        e = c.receiveQueue;
                    if (e.processTimeout && (b.current.scheduler.cancelDelay(e.processTimeout), e.processTimeout = null), !e.length) return void(e.isProcessing = null);
                    e.processTimeout = b.current.scheduler.delay(function() {
                        d.error("Receive message queue stalled", f.id, f.friendlyName), g.call(c)
                    }, m);
                    var i = e.shift(),
                        h = i.msg,
                        j = i.profilerEvent,
                        k = i.queueStart;
                    if (j.newSubEvent(a.EVENTS.QUEUED, k).complete(), l.getEpochTime() - k > F) return d.error("Dropping msg. Queue timeout", h), a.newMarker(a.EVENTS.DROPPED, f.id), void b.current.scheduler.async(g.bind(c));
                    var n = function(a) {
                        d.error("Exception when handling incoming message", h, a, a.stack), b.current.scheduler.async(g.bind(c))
                    };
                    try {
                        var o = y.any(C, function(a) {
                            if (a.canHandle(h)) {
                                try {
                                    a.handleMsg.call(c, h, f, j).then(function(a) {
                                        a && f.onAppMessage(a)
                                    }).catch(function(a) {
                                        d.warn("MdxSession.processReceivedQueue - Message handling failed", h, a, a.stack)
                                    }).finally(function() {
                                        j.complete(), b.current.scheduler.async(g.bind(c))
                                    })
                                } catch (a) {
                                    n(a)
                                }
                                return !0
                            }
                            return !1
                        });
                        o || (a.newMarker(a.EVENTS.DROPPED, f.id), b.current.scheduler.async(g.bind(c)))
                    } catch (a) {
                        n(a)
                    }
                },
                i = [],
                t = function(h) {
                    var j = b.current.isMessageReplayAttackDetectionEnabled;
                    if (j) {
                        var c = l.getEpochTime(),
                            a = parseInt(h, 10),
                            k = b.current.nonceCacheLimit,
                            e = b.current.nonceTimeDeltaMilliseconds;
                        if (isNaN(a) || 0 >= a) return d.error("Invalid nonce detected: " + a), !0;
                        if (i.length > 0) {
                            var f = i[0],
                                m = Math.min(f, c - e);
                            if (m > a) return d.error("Replayed nonce detected: " + a + " older than " + f), !0;
                            var n = i.some(function(b) {
                                return a === b
                            });
                            if (n) return d.error("Replayed nonce detected: " + a), !0
                        }
                        var g = Math.abs(c - a);
                        if (g > e) return d.error("Replayed nonce detected: " + a + " is too old or too far in the future. time = " + c + "; delta = " + g / 1e3 + " seconds"), !0;
                        i.length > k && i.shift(), i.push(a), i.sort(function(a, b) {
                            return a - b
                        })
                    }
                    return !1
                },
                e = function(e, f) {
                    var c = this,
                        d = null,
                        a = null;
                    return Object.defineProperties(c, {
                        receiveQueue: {
                            enumerable: !1,
                            writable: !1,
                            value: []
                        },
                        sendQueue: {
                            enumerable: !1,
                            writable: !1,
                            value: []
                        },
                        mdxVersion: {
                            enumerable: !0,
                            writable: !0,
                            value: e
                        },
                        mdxSessionId: {
                            enumerable: !0,
                            writable: !0,
                            value: null
                        },
                        device: {
                            enumerable: !1,
                            get: function() {
                                return d
                            },
                            set: function(a) {
                                d = a
                            }
                        },
                        extendedOpts: {
                            enumerable: !0,
                            value: f
                        },
                        errMsgCount: {
                            enumerable: !1,
                            writable: !0,
                            value: 0
                        },
                        fromUrl: {
                            enumerable: !1,
                            get: function() {
                                return a || (a = c.protocol + A.getLocalIpAddress() + ":" + b.current.localMdxPort), a
                            },
                            set: function(b) {
                                a = b
                            }
                        },
                        messageNonceCache: {
                            enumerable: !1,
                            get: function() {
                                return i
                            },
                            set: function(a) {
                                Array.isArray(a) && a.forEach(t);
                            }
                        }
                    }), c
                };
            e.prototype.isMessageReplay = function(a) {
                return t(a)
            }, e.prototype.createMsgNonce = function() {
                var a = l.getEpochTime();
                return q >= a && (a = q + 1), q = a, a
            }, e.prototype.processMdxMessage = function(s, k) {
                try {
                    var f = this,
                        b = f.device,
                        i = a.newEvent(a.EVENTS.UNKNOWN_MSG, b.id, k),
                        m = i.newSubEvent(a.EVENTS.VALIDATE_MSG),
                        c = p.parseAndValidateMsg(s.body);
                    if (b.lastSeen = l.getEpochTime(), !c.success) {
                        if (c.parsed) {
                            var e, q = "1.0",
                                r = "2.0",
                                j = n.canHandle(c.parsed) ? c.parsed.id : c.parsed.nonce;
                            switch (c.parsed.action) {
                                case u.PAIRING_REQUEST:
                                    e = h.pairingError(j, b, g.errors.PAIRING_INVALID_CONTROLLER_REQUEST, q);
                                    break;
                                case u.REGPAIR_REQUEST:
                                    e = h.regPairingError(j, b, g.errors.PAIRING_INVALID_CONTROLLER_REQUEST, r);
                                    break;
                                default:
                                    e = h.error(j, b, g.errors.SESSION_MALFORMED_MESSAGE)
                            }
                            f.sendMdxMessage(e, o)
                        } else a.newMarker(a.EVENTS.DROPPED, b.id, k);
                        return
                    }
                    m.complete();
                    var t = {
                        msg: c.parsed,
                        device: b,
                        profilerEvent: i,
                        queueStart: l.getEpochTime()
                    };
                    w(f.receiveQueue, t, H, b, i, "send")
                } catch (a) {
                    d.error("MdxSession.processMdxMessage - Message handling failed", a, a.stack)
                }
            }, e.prototype.sendMdxMessage = function(a, c) {
                var b = this,
                    d = (b.device, c || a.action);
                return x.call(b, {
                    cmd: d,
                    body: a
                }, !1)
            }, e.prototype.sendSessionMessage = function(a) {
                return x.call(this, {
                    cmd: o,
                    body: a
                }, !0)
            }, e.prototype.sendAppMessage = function(b, c) {
                var a = this;
                a.device;
                if (!a.mdxSessionId || a.disconnectDeferred) {
                    var d = "Dropping message for this session as we don't have a valid session id or are in the process of disconnecting";
                    return f.reject(new k(k.ERRORS.NOT_CONNECTED, d))
                }
                return a.sendSessionMessage(h.customAppMsg(a.mdxSessionId, b, c))
            }, e.prototype.processEncryptedMessage = function(c, j) {
                var e = f.defer(),
                    i = this,
                    l = i.device,
                    m = i.context;
                if (m) return m.processEncryptedMessage(c, j);
                if (!l.sharedSecret) {
                    if (b.current.platform.role === g.roles.TARGET) {
                        d.warn("We don't have a pairing context to support message decryption");
                        var p = n.canHandle(c) ? c.id : c.nonce;
                        i.sendMdxMessage(h.error(p, l, g.errors.SESSION_INVALID_HMAC), o)
                    } else a.newMarker(a.EVENTS.DROPPED);
                    return f.reject(new k(k.ERRORS.MESSAGING_ERROR, "No shared secret"))
                }
                var q = j.newSubEvent(a.EVENTS.CREATE_CTX),
                    r = s.createSecurityProvider(b.current.platform);
                return r.beginContext(l.sharedSecret).finally(function() {
                    q.complete()
                }).done(function(a) {
                    a || e.reject(new k(k.ERRORS.MESSAGING_ERROR, "beginContext failed")), i.context = a, i.processEncryptedMessage(c, j).done(e.resolve, e.reject)
                }, e.reject), e.promise
            }, e.prototype.clearMsgQueues = function() {
                y.forEach([this.sendQueue, this.receiveQueue], function(a) {
                    for (a.processTimeout && (b.current.scheduler.cancelDelay(a.processTimeout), a.processTimeout = null); a.length;) a.pop();
                    a.isProcessing = null
                })
            }, e.prototype.end = function(e, g, i) {
                var a = this,
                    b = f.defer(),
                    k = g && null !== a.mdxSessionId && "undefined" != typeof a.mdxSessionId,
                    c = function() {
                        return a.clearMsgQueues(), i ? a.sendSessionMessage(h.endSessionAck(a.mdxSessionId)) : f.resolve()
                    },
                    d = function() {
                        a.mdxSessionId = null, a.context && (a.context.end(), delete a.context, a.errMsgCount = 0), a.fromUrl = null, k && a.device.onAppConnectionEnded(), a.disconnectDeferred && (a.disconnectDeferred = null), b.resolve()
                    },
                    l = function() {
                        var b = f.defer(),
                            c = function(c) {
                                c.session === a && c.msg.sessionId === a.mdxSessionId && b.resolve()
                            };
                        return a.supportsEndAck ? (j.addMessageListener(j.events.endSessionAck, c), b.promise.timeout(5e3).tap(j.removeMessageListener.bind(j, j.events.endSessionAck, c))) : f.resolve()
                    };
                return e ? (a.disconnectDeferred = b, a.sendSessionMessage(h.endSession(a.mdxSessionId)).then(l).tap(c).finally(d)) : c().finally(d), b.promise
            }, e.prototype.startSession = function(e, h) {
                var a = this,
                    d = a.device,
                    c = f.defer(),
                    i = function(b) {
                        return b.code === g.errors.SESSION_INVALID_HMAC.code || b.code === g.errors.SESSION_UNKNOWN_SENDER.code ? (a.device.clearPairing(), a.startSession(e, h)) : f.reject(b)
                    };
                return d.sharedSecret && b.current.currentMdxId ? j.startSession.call(a, d).fail(i).done(c.resolve, c.reject) : r.pairWithTarget.call(a, d, e, h).then(a.handleCrossProfileRegpairSupport.bind(a)).then(j.startSession.bind(a, d)).fail(i).done(c.resolve, c.reject), c.promise
            }, G.exports = e
        }, {
            "../../builds/ld.js": 1,
            "../configuration.js": 42,
            "../discovery/discoveryUtils.js": 57,
            "../enums.js": 59,
            "../logging/logger.js": 64,
            "../mdxError.js": 70,
            "../profiling/mdxProfiler.js": 71,
            "../utils": 98,
            "./appMessage.js": 75,
            "./broadcast.js": 76,
            "./error.js": 80,
            "./msgFactory.js": 85,
            "./pairing.js": 86,
            "./ping.js": 87,
            "./securityFactory.js": 89,
            "./validation.js": 90,
            q: 37
        }],
        83: [function(a, h, j) {
            var e = a("q"),
                f = (a("../../builds/ld.js"), a("../logging/logger.js"), a("../enums.js")),
                g = a("./mdxSession.js"),
                i = a("../versionInfo.js"),
                b = a("../mdxError.js"),
                c = {},
                d = function() {
                    return g.call(this, new i), this
                };
            d.prototype = Object.create(g.prototype), d.prototype.connectToTarget = function(g, i, j, k) {
                var a = this,
                    m = a.device;
                if (a.mdxSessionId && !a.disconnectDeferred) return e.resolve();
                var l = c[m.id];
                if (l) {
                    var d = e.defer();
                    return l.deferred.promise.done(function() {
                        a.mdxSessionId ? d.resolve() : a.connectToTarget.call(a, g, i, j, k).done(d.resolve, d.reject)
                    }, function(c) {
                        if (c)
                            if (b.ERRORS.CANCELLED.isEqual(c)) d.reject(new b(b.ERRORS.CANCELLED, "Pending connection cancelled"));
                            else if ("ETIMEDOUT" === c.code) return void a.connectToTarget.call(a, g, i, j, k).done(d.resolve, d.reject);
                        l.intent >= g ? d.reject(c) : l.intent === f.connectIntents.JOIN ? a.connectToTarget.call(a, g, i, j, k).done(d.resolve, d.reject) : l.intent === f.connectIntents.LAUNCH && b.ERRORS.USER_MISMATCH.isEqual(c) ? a.connectToTarget.call(a, g, i, j, !0).done(d.resolve, d.reject) : a.connectToTarget.call(a, g, i, j, k).done(d.resolve, d.reject)
                    }), d.promise
                }
                var h;
                return a.disconnectDeferred ? (h = e.defer(), a.disconnectDeferred.promise.then(function() {
                    if (h.promise.isPending()) {
                        var b = a.handleTargetConnection(g, i, j, k);
                        c[m.id].deferred = b, b.promise.done(h.resolve, h.reject)
                    }
                })) : h = a.handleTargetConnection.apply(a, arguments), h.promise.finally(function() {
                    delete c[m.id]
                }), c[m.id] = {
                    deferred: h,
                    intent: g
                }, h.promise
            }, d.prototype.cancelPendingConnections = function() {
                var a = this,
                    d = c[a.device.id];
                d && (d.deferred.reject(new b(b.ERRORS.CANCELLED, "Pending connection cancelled by MDX")), a.dispose && a.dispose())
            }, h.exports = d
        }, {
            "../../builds/ld.js": 1,
            "../enums.js": 59,
            "../logging/logger.js": 64,
            "../mdxError.js": 70,
            "../versionInfo.js": 99,
            "./mdxSession.js": 82,
            q: 37
        }],
        84: [function(a, l, w) {
            var b = a("q"),
                c = a("../../builds/ld.js"),
                g = a("../logging/logger.js"),
                f = a("../configuration.js"),
                o = a("../webSocketFactory.js"),
                s = a("../httpFactory.js"),
                d = a("../enums.js"),
                e = a("../mdxError.js"),
                v = a("../devices/mdxTarget.js"),
                m = 3e3,
                n = 1,
                h = 6e3,
                p = /v=(.*)\r\npath=(.*)\r\nxid=(.*)\r\n/,
                q = 1,
                r = function() {
                    return q++
                },
                i = function() {
                    Object.defineProperties(this, {
                        protocol: {
                            enumerable: !1,
                            writable: !0,
                            value: "unknown://"
                        }
                    })
                },
                t = function(g) {
                    i.call(this);
                    var a = this,
                        c = g,
                        e = {};
                    a.protocol = "ws://", c.onmessage = function(g) {
                        var b, c = p.exec(g);
                        if (c && (b = {
                                version: c[1],
                                path: c[2],
                                xid: c[3],
                                body: g.substr(g.indexOf("body=") + 5)
                            }), "response" === b.path) {
                            var h = e[b.xid];
                            if (h) {
                                var j = -1 !== b.body.indexOf("error");
                                j ? h.reject(b) : h.resolve()
                            }
                        } else if (b) {
                            var i = "status=ok";
                            f.current.platform.role === d.roles.controller && (i = "body=" + i), a.send({
                                url: "response",
                                body: i,
                                reqId: b.xid
                            }), a.onMessage && a.onMessage(b)
                        }
                    }, this.send = function(d) {
                        try {
                            var a = d.url;
                            a && -1 !== a.lastIndexOf("/", 0) && (a = a.substr(1));
                            var g = d.reqId || r(),
                                i = ["v=" + n, "path=" + a, "xid=" + g, "body=" + d.body].join("\r\n"),
                                f = b.defer();
                            return e[g] = f, b(c.send(i)).fail(f.reject), f.promise.timeout(h)
                        } catch (a) {
                            return b.reject(a)
                        }
                    }
                },
                u = {
                    enabled: !0,
                    isCompatible: function(b) {
                        var a = b.mdxInfo.capabilities;
                        return -1 !== a.indexOf("websocket") && -1 !== a.indexOf("websocketclient")
                    },
                    createMsgBus: function(d) {
                        var c = b.defer(),
                            e = "ws://" + d.mdxInfo.ipAddressAndPort,
                            a = o.createWebSocket(f.current.platform, e, !0),
                            g = function() {
                                a.onopen = null, c.resolve(new t(a))
                            },
                            h = function(b) {
                                a.onerror = null, c.reject(b)
                            };
                        return a.onopen = g, a.onError = h, c.promise
                    }
                },
                k = function(c) {
                    i.call(this);
                    var a = this,
                        d = s.createHttpClient(f.current.platform);
                    if (a.protocol = "http://", c instanceof v) {
                        g.info("HttpMsgBus target is instance of target");
                        var e = function(b) {
                            b && a.onMessage && a.onMessage(b)
                        };
                        nrdp.mdx.addEventListener("incomingmessage", e)
                    }
                    this.send = function(a) {
                        var e = "http://" + c.mdxInfo.ipAddressAndPort;
                        try {
                            return d.post(e + a.url, a.body, a.legacyMessageEncryption).timeout(h)
                        } catch (a) {
                            return b.reject(a)
                        }
                    }
                },
                j = {
                    enabled: !0,
                    isCompatible: function(a) {
                        return -1 !== a.mdxInfo.capabilities.indexOf("http")
                    },
                    createMsgBus: function(a) {
                        var c = new k(a);
                        return b.resolve(c)
                    }
                };
            l.exports = {
                protocols: {
                    ws: u,
                    http: j
                },
                configureProtocolsForPlatform: function(b) {
                    var a = this.protocols;
                    switch (b.id) {
                        case d.platforms.NRDP_TARGET.id:
                            a.ws.enabled = !c.isUndefined(nrdp.mdx && nrdp.mdx.SendWebSocketMessage) && !c.isUndefined(nrdp.websocket);
                            break;
                        case d.platforms.CAST_TARGET.id:
                            a.ws.enabled = !1;
                            break;
                        case d.platforms.CADMIUM_CONTROLLER.id:
                            a.http.enabled = !1;
                            break;
                        default:
                            throw new e(e.ERRORS.PLATFORM_SUPPORT_ERROR, "Cannot configure msg bus protocols for platform: " + b)
                    }
                },
                createMsgBus: function(a) {
                    var d = this.protocols,
                        f = c.find(d, function(b) {
                            return b.enabled && b.isCompatible(a) ? b : null
                        });
                    if (!f) {
                        if (a.mdxInfo.isAvailable) {
                            var h = c.reduce(d, function(a, b, c) {
                                return b.enabled ? a + c + "|" : a
                            }, "");
                            h = "^(" + h.substr(0, h.length - 1) + ")";
                            var k = new RegExp(h),
                                i = k.exec(a.mdxInfo.location);
                            i && d[i[1]] && (f = d[i[1]])
                        }
                        if (!f) {
                            var j = "No compatible protocol found";
                            return g.error(j, d, a, a.mdxInfo), b.reject(new e(e.ERRORS.PROTOCOL_ERROR, j))
                        }
                    }
                    return f.createMsgBus(a).timeout(m)
                }
            }
        }, {
            "../../builds/ld.js": 1,
            "../configuration.js": 42,
            "../devices/mdxTarget.js": 50,
            "../enums.js": 59,
            "../httpFactory.js": 61,
            "../logging/logger.js": 64,
            "../mdxError.js": 70,
            "../webSocketFactory.js": 100,
            q: 37
        }],
        85: [function(e, m, y) {
            var c, d, i = e("../enums"),
                a = e("../configuration.js"),
                b = i.messageActionNames,
                f = "appMessage",
                j = function(d, e, c) {
                    return {
                        action: b.ERROR,
                        nonce: d,
                        fromuuid: a.current.mdxUuid,
                        touuid: e.mdxUuid,
                        errorcode: c.code,
                        errorstring: c.desc
                    }
                },
                k = function(f, g, h, i, j, d, e) {
                    var c = {
                        action: b.PAIRING_REQUEST,
                        version: f,
                        controllerurl: g,
                        nonce: h,
                        controlleruuid: a.current.mdxUuid,
                        pairdatahmac: i,
                        cticket: j
                    };
                    return "boolean" == typeof d && (c.loginsupported = d.toString()), "boolean" == typeof e && (c.regpinconfirmation = e.toString()), c
                },
                l = function(i, j, d, k, e, f, g) {
                    var h = a.current.mdxUuid,
                        c = {
                            action: b.PAIRING_RESPONSE,
                            version: k,
                            nonce: i,
                            targetuuid: h,
                            errorcode: d.code,
                            errorstring: d.desc,
                            targetuserid: e ? j.mdxIdPairs[e] : h
                        };
                    return "boolean" == typeof f && (c.loginsupported = f.toString()), "boolean" == typeof g && (c.regpinconfirmation = g.toString()), c
                },
                x = function(d, e, f, g, h, i, j) {
                    var c = a.current.mdxUuid;
                    return {
                        action: b.PAIRING_RESPONSE,
                        version: f,
                        controllersharedsecret: g,
                        nonce: d,
                        controlleruuid: e.mdxUuid,
                        targetuuid: c,
                        controlleruserid: h,
                        targetuserid: i || c,
                        grantdatahmac: j
                    }
                },
                n = function(e, f, g, h, i, j, c) {
                    var d = {
                        action: b.REGPAIR_REQUEST,
                        version: e,
                        controllerurl: f,
                        nonce: g,
                        controlleruuid: a.current.mdxUuid,
                        hmac: h,
                        cticket: i,
                        pin: j
                    };
                    return c && (d.pairdatahmac = c), d
                },
                o = function(f, h, d, g, c) {
                    var e = {
                        action: b.REGPAIR_ERROR,
                        version: g,
                        nonce: f,
                        targetuuid: a.current.mdxUuid,
                        errorcode: d.code,
                        errorstring: d.desc
                    };
                    return "undefined" != typeof c && null !== c && (e.loginpolicy = c), e
                },
                p = function(e, f, g, h, i, c) {
                    var d = {
                        action: b.REGPAIR_REPLY,
                        version: f,
                        controllersharedsecret: g,
                        nonce: e,
                        targetuuid: a.current.mdxUuid,
                        userid: h,
                        grantdatahmac: i
                    };
                    return "undefined" != typeof c && null !== c && (d.loginpolicy = c), d
                },
                q = function(d, c, e, f) {
                    var g = a.current.mdxUuid;
                    return {
                        action: b.SESSION,
                        version: e,
                        fromurl: c.session.fromUrl,
                        fromuuid: g,
                        fromuserid: a.current.currentMdxId,
                        touuid: c.mdxUuid,
                        touserid: c.currentMdxId || "",
                        nonce: d,
                        plaintext: f
                    }
                },
                r = function() {
                    return {
                        sessionAction: "createSession"
                    }
                },
                s = function(a) {
                    return {
                        sessionAction: "startSessionResponse",
                        sessionId: a,
                        supportsEndAck: !0
                    }
                },
                t = function(a) {
                    return {
                        sessionAction: "endSession",
                        sessionId: a,
                        ack: !0
                    }
                },
                u = function(a) {
                    return {
                        sessionAction: "endSessionAck",
                        sessionId: a
                    }
                },
                v = function(b, c) {
                    return {
                        sessionAction: f,
                        sessionId: b,
                        appAction: "HANDSHAKE_ACCEPTED",
                        appBody: {
                            accepted: a.current.mdxContractVersion == c,
                            contractVersion: a.current.mdxContractVersion,
                            volumeControl: a.current.volumeControl === !0,
                            volumeStep: a.current.volumeStep
                        }
                    }
                },
                w = function(a, b, c) {
                    return {
                        sessionAction: f,
                        sessionId: a,
                        appAction: b,
                        appBody: c
                    }
                },
                h = function(c, d, e) {
                    return {
                        action: b.PING_SEARCH,
                        fromuuid: a.current.mdxUuid,
                        fromurl: d,
                        servicetype: e,
                        id: c
                    }
                },
                g = function(f, e, g, h) {
                    return d = d || a.current.base64, c = c || a.current.utf8, {
                        action: b.PING_RESPONSE,
                        touuid: e.mdxUuid,
                        fromuuid: a.current.mdxUuid,
                        fromurl: g,
                        responseheaders: a.current.responseHeaders,
                        friendlyname: d.encode(c.encode(e.friendlyName || "")),
                        servicetype: h,
                        id: f
                    }
                };
            m.exports = {
                error: j,
                pairingRequest: k,
                pairingError: l,
                pairingSuccess: x,
                regPairRequest: n,
                regPairingError: o,
                regPairingSuccess: p,
                sessionMsgEnv: q,
                startSessionRequest: r,
                startSessionResponse: s,
                endSession: t,
                endSessionAck: u,
                handshakeAccepted: v,
                customAppMsg: w,
                pingRequest: h,
                pingResponse: g
            }
        }, {
            "../configuration.js": 42,
            "../enums": 59
        }],
        86: [function(f, y, L) {
            var d = f("q"),
                D = f("uuid/v4"),
                m = f("../../builds/ld.js"),
                c = f("../logging/logger.js"),
                e = f("../profiling/mdxProfiler.js"),
                j = f("./msgFactory.js"),
                i = f("../enums.js"),
                b = f("../configuration.js"),
                s = f("./regPairFactory.js"),
                k = f("../apiEvents.js"),
                q = f("./securityFactory.js"),
                a = f("../mdxError.js"),
                A = function() {},
                n = "1.0",
                l = "2.0",
                o = 15e3,
                K = 3e4,
                p = "00000",
                g = null,
                r = {},
                h = {},
                t = function() {
                    return d.Promise(function(a) {
                        return m.forEach(b.current.dscMgr.devices, function(a) {
                            return a.clearPairing()
                        }), b.current.storage.clearPairings().finally(a)
                    })
                },
                z = function(a, f, p) {
                    var h = this,
                        l = i.errors;
                    if (p && (p.id = e.EVENTS.PAIRINGREQUEST), h && h.end(!!h.mdxSessionId).catch(c.warn), a.version !== n) return e.newMarker(e.EVENTS.MDX_PAIRINGREJECTED), c.error("Incorrect pairing request version. Expected " + n + " but got " + a.version), h.sendMdxMessage(j.error(a.nonce, f, l.PAIRING_UNKNOWN_VERSION)).catch(c.warn);
                    var m, u = s.createProvider(b.current.platform);
                    h.isMessageReplay(a.nonce) ? m = {
                        code: i.errors.PAIRING_MESSAGE_REPLAY.code,
                        desc: "pair rejected because message replay attack was detected"
                    } : u.isRegistered ? g && (m = {
                        code: l.REGISTRATION_PAIRING_IN_PROGRESS.code,
                        desc: "pair rejected because another MDX controller is in progress"
                    }) : m = {
                        code: i.errors.PAIRING_NOT_PAIRING.code,
                        desc: "pair rejected because device is not registered"
                    };
                    var w = "USER_MISMATCH",
                        t = function(m) {
                            var g, i;
                            return "undefined" != typeof a.loginsupported && null !== a.loginsupported && (g = "true" === a.loginsupported && m.code === l.PAIRING_NOT_PAIRING.code, g = g && b.current.isRemoteLoginSupported, g && !f.evtMgr.isListenerRegistered(k.SWITCH_CREDENTIALS) && (c.warn("no listeners are registered for '" + k.SWITCH_CREDENTIALS + "' event in order to support MDX remote login"), g = !1), g && (i = "undefined" != typeof a.regpinconfirmation && null !== a.regpinconfirmation, i = i && "true" === a.regpinconfirmation, i = i && b.current.isRegPairPinConfirmationRequired)), m.desc && c.warn(m.desc), d.Promise(function(a, b) {
                                return i ? void f.evtMgr.fireEvent(k.SHOW_MDX_PIN, {
                                    device: f,
                                    resolve: a,
                                    reject: b
                                }) : a()
                            }).catch(function(a) {
                                i = void 0, m = {
                                    code: l.REGISTRATION_PIN_UNAVAILABLE.code,
                                    desc: "regpair pin is unavailable"
                                }
                            }).then(function() {
                                return e.newMarker(e.EVENTS.MDX_PAIRINGREJECTED), g && f.evtMgr.fireEvent(k.MDX_REMOTE_LOGIN_DEVICE_AVAILABLE, {
                                    device: {
                                        esn: a.controlleruuid
                                    }
                                }), h.sendMdxMessage(j.pairingError(a.nonce, f, m, n, void 0, g, i))
                            })
                        };
                    if (m) return t(m).catch(c.warn);
                    var v = r[f.id];
                    v && v.deferred.reject(l.PAIRING_ABORTED);
                    var q = d.defer();
                    r[f.id] = {
                        device: f,
                        deferred: q
                    };
                    var x = p.newSubEvent(e.EVENTS.SERVER_PAIR),
                        y = u.pair(a.cticket, a.controlleruuid, a.pairdatahmac, a.nonce, b.current.mdxUuid);
                    return y.timeout(o).finally(function() {
                        x.complete()
                    }).catch(function(b) {
                        var a = b;
                        throw a && "ETIMEDOUT" === a.code && (a = {
                            code: l.PAIRING_NETWORK_ERROR,
                            desc: "pair request timed out: " + b.toString()
                        }), t(a), b
                    }).then(function(c) {
                        var d = c.targetMdxId && c.controllerMdxId && c.controllerMdxId === c.targetMdxId && c.controllerSharedSecret && c.targetSharedSecret;
                        return d ? (b.current.currentMdxId = c.targetMdxId, f.currentMdxId = c.controllerMdxId, f.sharedSecret = c.targetSharedSecret, h.sendMdxMessage(j.pairingSuccess(a.nonce, f, n, c.controllerSharedSecret, c.controllerMdxId, c.targetMdxId, c.hmac))) : t({
                            code: w,
                            desc: "User mismatch between target & controller"
                        })
                    }).finally(q.resolve).catch(c.warn), q.promise
                },
                u = function(e, g, i, j) {
                    var f = d.defer(),
                        h = i.deferred;
                    return i.context.hmac(j).then(function(d) {
                        if (e.grantdatahmac !== d) {
                            var j = "Invalid hmac string in pairing response calculated: " + d + " received: " + e.grantdatahmac;
                            return c.error(j), g.clearPairing(), h.resolve({
                                isPaired: !1,
                                retry: !0,
                                error: new a(a.ERRORS.CRYPTO_ERROR)
                            }), void f.resolve()
                        }
                        i.context.decrypt(e.controllersharedsecret).done(function(a) {
                            g.sharedSecret = a, g.isRegistered = !0, g.currentMdxId = e.targetuserid || e.userid, b.current.currentMdxId = e.controlleruserid || e.userid, h.resolve({
                                isPaired: !0,
                                wasRegPair: "regpairreply" === e.action
                            }), f.resolve()
                        }, function() {
                            h.reject(), f.resolve()
                        })
                    }, function(a) {
                        h.reject(a), f.resolve()
                    }), f.promise
                },
                B = function(b, j, g) {
                    g && (g.id = e.EVENTS.PAIRINGRESPONSE);
                    var f = h[b.nonce];
                    if (!f) return c.error("Unexpected pairing response", b), d.resolve();
                    var k = f.deferred;
                    if (b.version !== n) {
                        var i = "Incorrect pairing response version. Expected " + n + " but got " + b.version;
                        return c.error(i), k.reject(new a(a.ERRORS.CANNOT_PAIR, i)), d.resolve()
                    }
                    var l = "controllersharedsecret=" + encodeURIComponent(b.controllersharedsecret) + "&controlleruserid=" + encodeURIComponent(b.controlleruserid) + "&controlleruuid=" + encodeURIComponent(b.controlleruuid) + "&nonce=" + encodeURIComponent(b.nonce) + "&targetuserid=" + encodeURIComponent(b.targetuserid) + "&targetuuid=" + encodeURIComponent(b.targetuuid);
                    return u(b, j, f, l)
                },
                v = function(g, k) {
                    var e = this,
                        i = d.defer(),
                        f = e.createMsgNonce();
                    return g.encrypt(p).done(function(d) {
                        var m = "action=regpairrequest&nonce=" + encodeURIComponent(f) + "&pin=" + encodeURIComponent(d);
                        g.hmac(m).then(function(c) {
                            var a = function(a) {
                                return h[f] = {
                                    deferred: i,
                                    context: g
                                }, e.sendMdxMessage(j.regPairRequest(l, e.fromUrl, f, c, k, d, a))
                            };
                            if (e.device.isMsl) {
                                var m = "controlleruuid=" + encodeURIComponent(b.current.mdxUuid) + "&nonce=" + encodeURIComponent(f);
                                return g.hmac(m).then(a)
                            }
                            return a()
                        }).done(A, function() {
                            c.error("Failed to hmac sign the regpair payload"), e.device.clearPairing(), i.reject(new a(a.ERRORS.CRYPTO_ERROR))
                        })
                    }, function() {
                        c.error("Failed to encrypt the regpair pin"), e.device.clearPairing(), i.reject(new a(a.ERRORS.CRYPTO_ERROR))
                    }), i.promise.timeout(o).finally(function() {
                        delete h[f]
                    })
                },
                w = function(e, h, j, k) {
                    var l = this,
                        c = i.errors;
                    "USER_MISMATCH" === e.errorcode ? e.errorcode = c.PAIRING_USER_MISMATCH.code : "PROFILE_MISMATCH" === e.errorcode ? e.errorcode = c.REGISTRATION_PROFILE_MISMATCH.code : e.errorcode = parseInt(e.errorcode);
                    var g, f = j.deferred;
                    switch (e.errorcode) {
                        case c.PAIRING_UNKNOWN_VERSION.code:
                            g = "Pair failed with PAIRING_UNKNOWN_VERSION", h.blacklist(g), f.reject(new a(a.ERRORS.CANNOT_PAIR, g));
                            break;
                        case c.PAIRING_SERVER_ERROR.code:
                        case c.PAIRING_TARGET_ERROR.code:
                        case c.PAIRING_SERVER_NOT_REACHABLE.code:
                        case c.PAIRING_CONTROLLER_HMAC_FAILURE.code:
                            f.resolve({
                                isPaired: !1,
                                retry: !0
                            });
                            break;
                        case c.PAIRING_CONTROLLER_CTICKET_EXPIRED.code:
                        case c.PAIRING_CONTROLLER_CTICKET_CORRUPTED.code:
                        case c.PAIRING_NO_CTICKET.code:
                            g = "CTICKET issue with pairing: " + e.errorstring, f.reject(new a(a.ERRORS.INVALID_CTICKET));
                            break;
                        case c.PAIRING_NOT_PAIRING.code:
                        case c.PAIRING_USER_MISMATCH.code:
                            k ? f.reject(new a(a.ERRORS.CANNOT_PAIR, e.errorcode + " - " + e.errorstring)) : j.activate && h.registrationMode !== i.registrationModes.DISABLED ? q.createSecurityProvider(b.current.platform).getCTicket().then(function(b) {
                                return b ? void v.call(l, j.context, b).done(f.resolve, f.reject) : void f.reject(new a(a.ERRORS.INVALID_CTICKET))
                            }) : f.resolve({
                                isPaired: !1,
                                retry: !1,
                                canActivate: h.registrationMode !== i.registrationModes.DISABLED
                            });
                            break;
                        case c.REGISTRATION_PROFILE_MISMATCH.code:
                            f.resolve({
                                isPaired: !1,
                                retry: !1,
                                canActivate: !1
                            });
                            break;
                        default:
                            f.reject(new a(a.ERRORS.CANNOT_PAIR, e.errorcode + " - " + e.errorstring))
                    }
                    return d.resolve()
                },
                E = function(a, g, b) {
                    b && (b.id = e.EVENTS.PAIRING_ERROR_RESPONSE);
                    var f = h[a.nonce];
                    return f ? w.call(this, a, g, f, !1) : (c.error("Unexpected pairing response", a), d.resolve())
                },
                F = function(a, f, F) {
                    var v = this,
                        q = i.errors;
                    if (F && (F.id = e.EVENTS.REGPAIRREQUEST), v && v.end(!!v.mdxSessionId).catch(c.warn), a.version !== l) return e.newMarker(e.EVENTS.MDX_PAIRINGREJECTED), c.error("Incorrect reg pairing request version. Expected " + l + " but got " + a.version), v.sendMdxMessage(j.error(a.nonce, f, q.PAIRING_UNKNOWN_VERSION)).catch(c.warn);
                    var h, u, w, n, H, r = b.current.consolidatedLogger,
                        A = r && m.includes(b.current.uiVersion, "signupwizard"),
                        I = function(b, c) {
                            if (r && b) {
                                var a = {
                                    name: b,
                                    metadata: m.merge({}, c)
                                };
                                return a.id = r.startSession(a.name, a.metadata), a
                            }
                        },
                        J = function(a) {
                            return a ? {
                                code: "" + (a.code || a.name),
                                debug: {
                                    name: a.name,
                                    stack: a.stack,
                                    message: a.message || a.desc
                                }
                            } : void 0
                        },
                        B = function(a, d) {
                            if (r && a && a.id) {
                                var b = J(d),
                                    c = {
                                        type: "ActionFailed",
                                        error: b
                                    };
                                A && (c = {
                                    completionReason: "failed",
                                    error: b && JSON.stringify(b)
                                }), r.endSession(a.id, m.merge(c, a.metadata || {})), r.flush()
                            }
                        },
                        C = i.registrationModes,
                        y = b.current.registrationMode,
                        G = s.createProvider(b.current.platform),
                        x = i.loginPolicies,
                        z = function(d) {
                            var b = d || q.PAIRING_NETWORK_ERROR;
                            return b.desc && c.warn(b.desc), e.newMarker(e.EVENTS.MDX_PAIRINGREJECTED), v.sendMdxMessage(j.regPairingError(a.nonce, f, b, l, w ? w.code.toString() : void 0))
                        };
                    if ("undefined" != typeof a.loginpolicy && null !== a.loginpolicy && (w = m.find(x, function(b) {
                            return b.code === Number(a.loginpolicy)
                        }), n = b.current.isRemoteLoginSupported && "undefined" != typeof w && w.code !== x.LOGIN_DISABLED.code, H = b.current.isRemoteLoginRequestedByWitcher && n && (w.code === x.LOGIN_ONLY_REQUESTED_BY_TARGET.code || w.code === x.LOGIN_AND_PAIR_REQUESTED_BY_TARGET.code)), n) {
                        var E = D();
                        "undefined" != typeof a.loginclid && null !== a.loginclid && (E = a.loginclid || E), h = I(A ? "tvuiSignInWithMdx" : "tvui.SignInWithMdx", {
                            sharedUuid: E,
                            controllerEsn: a.controlleruuid,
                            loginPolicy: w.code
                        })
                    }
                    return v.isMessageReplay(a.nonce) ? u = {
                        code: i.errors.PAIRING_MESSAGE_REPLAY.code,
                        desc: "regpair rejected because message replay attack was detected"
                    } : y !== C.ENABLED && y !== C.DEFAULT_PIN && y !== C.DARWIN_XPROFILE_V1 ? u = {
                        code: q.REGISTRATION_NOT_REGISTERING.code,
                        desc: "regpair rejected because registration mode is " + y
                    } : g && g.device.id !== f.id ? u = {
                        code: q.REGISTRATION_PAIRING_IN_PROGRESS.code,
                        desc: "regpair rejected because another MDX controller is in progress"
                    } : y !== C.DARWIN_XPROFILE_V1 || G.isRegistered || n ? g && g.isRemoteLoginInProgress ? u = {
                        code: q.REGISTRATION_REMOTE_LOGIN_IN_PROGRESS.code,
                        desc: "regpair aborted because MDX sign-in is in progress"
                    } : f.evtMgr.isListenerRegistered(k.SWITCH_CREDENTIALS) || (u = {
                        code: q.PAIRING_ABORTED.code,
                        desc: "regpair aborted because no listeners are registered for '" + k.SWITCH_CREDENTIALS + "' event"
                    }) : u = {
                        code: q.REGISTRATION_NOT_REGISTERING.code,
                        desc: "regpair rejected because registration mode is DARWIN_XPROFILE_V1 and MDX target is not registered"
                    }, u ? (B(h, u), z(u).catch(c.warn)) : d.Promise(function(a, c) {
                        return b.current.isRegPairPinConfirmationRequired && H ? void f.evtMgr.fireEvent(k.RETRIEVE_MDX_PIN, {
                            device: f,
                            resolve: a,
                            reject: c
                        }) : void a(p)
                    }).catch(function(a) {
                        var b = {
                            code: q.REGISTRATION_PIN_UNAVAILABLE,
                            desc: a.toString()
                        };
                        throw B(h, b), z(b), a
                    }).then(function(p) {
                        var i = d.defer();
                        g && (g.consolidatedLoggingSessions.forEach(function(a) {
                            if (a && r) {
                                var b = {
                                    type: "SessionCanceled"
                                };
                                A && (b = m.merge({
                                    completionReason: "canceled"
                                }, a.metadata || {})), r.endSession(a.id, b)
                            }
                        }), g.consolidatedLoggingSessions.length > 0 && r.flush(), g.deferred.reject(q.PAIRING_ABORTED)), g = {
                            device: f,
                            deferred: i,
                            consolidatedLoggingSessions: [],
                            isRemoteLoginInProgress: n
                        }, h && g.consolidatedLoggingSessions.push(h);
                        var s = F.newSubEvent(e.EVENTS.SERVER_NFLXID),
                            u = G.regpair(b.current.mdxUuid, a.cticket, a.nonce, a.pin, p, a.controlleruuid, a.hmac, a.pairdatahmac, n);
                        return u.timeout(o).finally(function() {
                            s.complete()
                        }).catch(function(b) {
                            var a = b;
                            throw a && "ETIMEDOUT" === a.code && (a = {
                                code: q.PAIRING_NETWORK_ERROR,
                                desc: "regpair request timed out: " + b.toString()
                            }), B(h, a), z(a), b
                        }).then(function(e) {
                            var g = d.defer(),
                                i = {
                                    device: f,
                                    guid: e.guid,
                                    cookies: e.cookies,
                                    resolve: g.resolve,
                                    reject: g.reject
                                };
                            return f.evtMgr.fireEvent(k.SWITCH_CREDENTIALS, i), g.promise.finally(function() {
                                return t.call(v)
                            }).then(function(i) {
                                if (!i) throw new Error("UI returned a invalid profile data: " + i);
                                var k = function(b, a) {
                                        a && "function" == typeof a.resolve && a.resolve()
                                    },
                                    o = i;
                                n && (o = e.guid, k = i.navigateToMember || k);
                                var g = {},
                                    p = d.Promise(function(a, b) {
                                        g.resolve = a, g.reject = b, g.getPromise = function() {
                                            return p
                                        }
                                    }).then(function() {
                                        return c.info("Sending regpair response to controller", f.id, f.friendlyName), "boolean" == typeof n ? d.resolve().then(function() {
                                            if (h) {
                                                var a = {
                                                    type: "SessionEnded"
                                                };
                                                A && (a = m.merge({
                                                    completionReason: "success"
                                                }, h.metadata || {})), r.endSession(h.id, a), r.flush()
                                            }
                                        }).then(function() {
                                            return v.sendMdxMessage(j.regPairingSuccess(a.nonce, l, e.controllerSharedSecret, e.controllerMdxId, e.hmac, n ? a.loginpolicy : x.LOGIN_DISABLED.code.toString()))
                                        }) : (b.current.profileId = o, f.currentMdxId = e.controllerMdxId, f.sharedSecret = e.targetSharedSecret, b.current.currentMdxId = e.targetMdxId, b.current.storage.storeDeviceMap(b.current.dscMgr.devices).then(function() {
                                            return v.sendMdxMessage(j.regPairingSuccess(a.nonce, l, e.controllerSharedSecret, e.controllerMdxId, e.hmac))
                                        }))
                                    }),
                                    q = {},
                                    s = n && w.code === x.LOGIN_AND_PAIR.code;
                                h && (q.authclid = h.metadata.sharedUuid);
                                try {
                                    k({
                                        skipProfilesGate: s,
                                        queryStringOverrides: q
                                    }, g)
                                } catch (a) {
                                    g.reject(a)
                                }
                                return p
                            }).catch(function(a) {
                                throw c.error("UI rejected " + (n ? "MDX sign-in" : "credential switch") + " or failed to handle it", a), B(h, a), z(q.PAIRING_ABORTED), a
                            })
                        }).finally(function() {
                            g = null, h = null, i.resolve()
                        }), i.promise
                    }).catch(c.warn)
                },
                G = function(f, i, j) {
                    j && (j.id = e.EVENTS.REGPAIRRESPONSE);
                    var g = h[f.nonce];
                    if (!g) return c.error("Unexpected pairing response", f), d.resolve();
                    if (f.version !== l) {
                        var k = "Incorrect regppair response version. Expected " + l + " but got " + f.version;
                        return c.error(k), g.deferred.reject(new a(a.ERRORS.CANNOT_PAIR, k)), d.resolve()
                    }
                    var m;
                    return m = i.isMsl ? "controllersharedsecret=" + encodeURIComponent(f.controllersharedsecret) + "&controlleruserid=" + encodeURIComponent(f.userid) + "&controlleruuid=" + encodeURIComponent(b.current.mdxUuid) + "&nonce=" + encodeURIComponent(f.nonce) + "&targetuserid=" + encodeURIComponent(f.userid) + "&targetuuid=" + encodeURIComponent(f.targetuuid) : "action=regpairreply&controllersharedsecret=" + encodeURIComponent(f.controllersharedsecret) + "&nonce=" + encodeURIComponent(f.nonce) + "&userid=" + encodeURIComponent(f.userid), u(f, i, g, m)
                },
                H = function(a, g, b) {
                    b && (b.id = e.EVENTS.REGPAIR_ERROR_RESPONSE);
                    var f = h[a.nonce];
                    return f ? w.call(this, a, g, f, !0) : (c.error("Unexpected pairing response", a), d.resolve())
                },
                x = {
                    pairingrequest: z,
                    pairingresponse: B,
                    pairingresponseError: E,
                    regpairrequest: F,
                    regpairreply: G,
                    regpairerror: H
                },
                J = function(a) {
                    return x.hasOwnProperty(a.action)
                },
                I = function(a, c, d) {
                    return x[a.action].call(this, a, c, d).finally(function() {
                        b.current.storage.storeDeviceMap(b.current.dscMgr.devices)
                    })
                },
                C = function m(g, i, o) {
                    g.sharedSecret && g.clearPairing();
                    var k = function(a) {
                            if (h[a]) {
                                var b = h[a].context;
                                b && b.end()
                            }
                            delete h[a]
                        },
                        c = d.defer(),
                        e = this,
                        f = e.createMsgNonce(),
                        l = q.createSecurityProvider(b.current.platform);
                    return l.getCTicket().then(function(p) {
                        return p ? void l.beginContext().done(function(l) {
                            if (o) v.call(e, l, p).done(c.resolve, c.reject);
                            else {
                                var q = "controlleruuid=" + encodeURIComponent(b.current.mdxUuid) + "&nonce=" + encodeURIComponent(f);
                                l.hmac(q).then(function(o) {
                                    var b = d.defer();
                                    return h[f] = {
                                        deferred: b,
                                        activate: i,
                                        context: l,
                                        cticket: p
                                    }, b.promise.fail(function(a) {
                                        c.reject(a)
                                    }), b.promise.done(function(b) {
                                        b.isPaired && !b.isError ? c.resolve({
                                            wasRegPair: b.wasRegPair
                                        }) : b.error ? c.reject(b.error) : b.retry ? (k(f), m.call(e, g, i).done(c.resolve, c.reject)) : b.canActivate ? c.reject(new a(a.ERRORS.USER_MISMATCH)) : c.reject(new a(a.ERRORS.REGISTRATION_NOT_SUPPORTED))
                                    }), e.sendMdxMessage(j.pairingRequest(n, e.fromUrl, f, o, p))
                                })
                            }
                        }).fail(function() {
                            c.reject(new a(a.ERRORS.CONNECT_FAILED, "Failed to create the encryption context"))
                        }) : void c.reject(new a(a.ERRORS.INVALID_CTICKET))
                    }, function() {
                        c.reject(new a(a.ERRORS.INVALID_CTICKET))
                    }), c.promise.timeout(K, "Timed out waiting for pairing response").fail(function(b) {
                        return "ETIMEDOUT" === b.code ? d.reject(new a(a.ERRORS.CONNECT_FAILED, "Pair response timeout")) : d.reject(b)
                    }).finally(k.bind(null, f))
                };
            y.exports = {
                canHandle: J,
                handleMsg: I,
                clearAllPairings: t,
                pairWithTarget: C
            }
        }, {
            "../../builds/ld.js": 1,
            "../apiEvents.js": 41,
            "../configuration.js": 42,
            "../enums.js": 59,
            "../logging/logger.js": 64,
            "../mdxError.js": 70,
            "../profiling/mdxProfiler.js": 71,
            "./msgFactory.js": 85,
            "./regPairFactory.js": 88,
            "./securityFactory.js": 89,
            q: 37,
            "uuid/v4": 40
        }],
        87: [function(a, j, r) {
            var c = a("q"),
                d = (a("../logging/logger.js"), a("./msgFactory.js")),
                e = a("../profiling/mdxProfiler.js"),
                f = "mdxping",
                b = {},
                g = "urn:mdx-netflix-com:service:target",
                q = g + ":2",
                h = "pingsearch",
                l = "pingresponse",
                m = 3e3,
                n = function(c, g, a) {
                    a && (a.id = e.EVENTS.PINGREQUEST);
                    var b = this;
                    return b.sendMdxMessage(d.pingResponse(c.id, g, b.fromUrl, q), f)
                },
                o = function(f, g, a) {
                    a && (a.id = e.EVENTS.PINGRESPONSE);
                    var d = b[f.id];
                    return d && d.resolve(), c.resolve()
                },
                p = function(a) {
                    return a && a.action && (a.action === h || a.action === l)
                },
                i = function(a, b, c) {
                    return a.action === h ? n.call(this, a, b, c) : o.call(this, a, b, c)
                },
                k = function(i) {
                    var h = c.defer(),
                        a = this,
                        e = a.createMsgNonce();
                    return a.sendMdxMessage(d.pingRequest(e, a.fromUrl, g), f), b[e] = h, h.promise.timeout(m).finally(function() {
                        delete b[e]
                    })
                };
            j.exports = {
                canHandle: p,
                handleMsg: i,
                pingTarget: k
            }
        }, {
            "../logging/logger.js": 64,
            "../profiling/mdxProfiler.js": 71,
            "./msgFactory.js": 85,
            q: 37
        }],
        88: [function(c, l, p) {
            var b, e = c("q"),
                k = c("../../builds/ld.js"),
                a = (c("../logging/logger.js"), c("../enums.js")),
                j = c("../mdxError.js"),
                d = {},
                h = function(e, i, g, h) {
                    for (var c; h.length;) {
                        var d = h.pop();
                        if (d.data && d.data.controlleruuid) {
                            c = d.data, c.guid = c.guid || d.guid;
                            break
                        }(k.isUndefined(c) || c.result !== nrdp.NETWORK_ERROR) && d.actionID || d.errorcode ? c = d : d.result === nrdp.NETWORK_ERROR && (c = d)
                    }
                    if (g && g(i), !c || c.result === nrdp.NETWORK_ERROR) return void e.reject(a.errors.PAIRING_SERVER_NOT_REACHABLE);
                    if (c.actionID || c.errorcode) {
                        var f = k.find(a.errors, function(d) {
                            if (b.current.isNrdjsEdgePaasRegPairEndpointAvailable) switch (c.errorcode) {
                                case nrdjs.mdx.PAIR_ERRORS.NOT_SIGNED_IN:
                                    return d.code === a.errors.REGISTRATION_REMOTE_LOGIN_DISABLED.code;
                                case nrdjs.mdx.PAIR_ERRORS.PIN_MISMATCH:
                                    return d.code === a.errors.REGISTRATION_PIN_MISMATCH.code;
                                case nrdjs.mdx.PAIR_ERRORS.PROFILE_MISMATCH:
                                case nrdjs.mdx.PAIR_ERRORS.ACCOUNT_MISMATCH:
                                    return d.code === a.errors.PAIRING_USER_MISMATCH.code;
                                default:
                                    return d.code === a.errors.PAIRING_UNKNOWN_ERROR.code
                            }
                            return d.code === c.errorcode
                        });
                        return void e.reject(f || a.errors.PAIRING_UNKNOWN_ERROR)
                    }
                    if (!c.grantdatahmac) return f = a.errors.PAIRING_PROTO_ERROR, void e.reject(f);
                    var j = {
                        pairingContext: c.grantdatahmac || "",
                        hmac: c.grantdatahmac,
                        controllerMdxId: c.controlleruserid,
                        controllerSharedSecret: c.controllersharedsecret,
                        targetSharedSecret: c.targetsharedsecret,
                        targetMdxId: c.targetuserid,
                        guid: c.guid,
                        cookies: c.cookies
                    };
                    e.resolve(j)
                },
                m = function() {
                    return b && "undefined" != typeof b.current.platform && b.current.platform.id === a.platforms.NRDP_TARGET.id && b.current.isLegacyDevice
                },
                f = function() {};
            Object.defineProperties(f.prototype, {
                isRegistered: {
                    enumerable: !0,
                    get: function() {
                        return b.current.isNrdjsEdgePaasRegPairEndpointAvailable ? nrdjs.mdx.registered : nrdp.registration.registered
                    }
                },
                currentDeviceAccount: {
                    enumerable: !0,
                    get: function() {
                        return b.current.isNrdjsEdgePaasRegPairEndpointAvailable ? nrdjs.mdx.currentDeviceAccount : nrdp.registration.currentDeviceAccount
                    }
                }
            }), f.prototype.pair = function(c, a, d, f, g) {
                var i = e.Promise(function(j, e) {
                    var k = {
                            resolve: j,
                            reject: e
                        },
                        i = [c, a, d, f, g, h.bind(void 0, k, a, void 0)];
                    try {
                        if (b.current.isNrdjsEdgePaasRegPairEndpointAvailable) return void nrdjs.mdx.pair.apply(nrdjs.mdx, i);
                        nrdp.mdxnccp.pair.apply(nrdp.mdxnccp, i)
                    } catch (a) {
                        e(a)
                    }
                });
                return i.finally(function() {
                    b.current.isNrdjsEdgePaasRegPairEndpointAvailable || nrdp.mdxnccp.finish(a)
                })
            }, f.prototype.regpair = function(f, g, i, j, k, c, l, n, d) {
                var o = e.Promise(function(p, o) {
                    var e, q = {
                            resolve: p,
                            reject: o
                        },
                        a = [f, g, i, j, k, c, l];
                    try {
                        if (e = m(), e || (a.push(n), "boolean" == typeof d && a.push(d)), a.push(h.bind(void 0, q, c, void 0)), b.current.isNrdjsEdgePaasRegPairEndpointAvailable) return void nrdjs.mdx.regpair.apply(nrdjs.mdx, a);
                        if (e) return void nrdp.registration.mdxActivate.apply(nrdp.registration, a);
                        nrdp.registration.mdxMslActivate.apply(nrdp.registration, a)
                    } catch (a) {
                        o(a)
                    }
                });
                return o.catch(function(b) {
                    if (b.code === a.errors.PAIRING_USER_MISMATCH.code) throw a.errors.REGISTRATION_PROFILE_MISMATCH;
                    throw b
                }).finally(function() {
                    b.current.isNrdjsEdgePaasRegPairEndpointAvailable || nrdp.registration.mdxActivateFinish(c)
                })
            };
            var g = function() {};
            Object.defineProperties(g.prototype, {
                isRegistered: {
                    enumerable: !0,
                    get: function() {
                        return nrdp.registration.registered
                    }
                },
                currentDeviceAccount: {
                    enumerable: !0,
                    get: function() {
                        return nrdp.registration.currentDeviceAccount
                    }
                }
            }), g.prototype.pair = function(b, a, c, d, f) {
                return e.Promise(function(g, e) {
                    var i = {
                            resolve: g,
                            reject: e
                        },
                        j = [b, a, c, d, f, h.bind(void 0, i, a, void 0)];
                    try {
                        nrdp.mdxnccp.pair.apply(nrdp.mdxnccp, j)
                    } catch (a) {
                        e(a)
                    }
                })
            }, g.prototype.regpair = function(b, c, d, f, g, a, i, j) {
                return e.Promise(function(k, e) {
                    var l = {
                            resolve: k,
                            reject: e
                        },
                        m = [b, c, d, f, g, a, i, j, h.bind(void 0, l, a, void 0)];
                    try {
                        nrdp.registration.mdxMslActivate.apply(nrdp.registration, m)
                    } catch (a) {
                        e(a)
                    }
                })
            };
            var n = function() {
                    var c = a.platforms.CAST_TARGET.id,
                        b = d[c];
                    return b ? b : (b = new g, d[c] = b, b)
                },
                o = function() {
                    var c = a.platforms.NRDP_TARGET.id,
                        b = d[c];
                    return b ? b : (b = new f, d[c] = b, b)
                },
                i = {};
            i[a.platforms.CAST_TARGET.id] = n, i[a.platforms.NRDP_TARGET.id] = o, l.exports = {
                createProvider: function(a) {
                    var d = i[a.id];
                    if (b = b || c("../configuration.js"), d) return d();
                    throw new j(j.ERRORS.PLATFORM_SUPPORT_ERROR, "Cannot create registration provider for platform: " + a.name)
                }
            }
        }, {
            "../../builds/ld.js": 1,
            "../configuration.js": 42,
            "../enums.js": 59,
            "../logging/logger.js": 64,
            "../mdxError.js": 70,
            q: 37
        }],
        89: [function(g, G, K) {
            var m, f, h, b = g("q"),
                k = g("../../builds/ld.js"),
                n = g("../enums.js"),
                i = g("../profiling/mdxProfiler.js"),
                r = g("./validation.js"),
                a = g("../mdxError.js"),
                w = 32766,
                E = 43717,
                u = 32767,
                q = "AES-CBC",
                A = "SHA-256",
                F = "Invalid shared secret",
                c = "Invalid security context",
                o = "Unknown failure",
                d = null,
                s = function(f) {
                    for (var c = "", a = f instanceof ArrayBuffer ? new Uint8Array(f) : f, g = a.length, b = 0; g > b;) {
                        var d = a[b++],
                            e = d >> 4;
                        if (8 > e) c += String.fromCharCode(d);
                        else if (e >= 12 && 13 >= e) {
                            var h = a[b++];
                            c += String.fromCharCode((31 & d) << 6 | 63 & h)
                        } else if (14 === e) {
                            var i = a[b++],
                                j = a[b++];
                            c += String.fromCharCode((15 & d) << 12 | (63 & i) << 6 | (63 & j) << 0)
                        }
                    }
                    return c
                },
                l = function(d) {
                    if (d instanceof Uint8Array || d instanceof ArrayBuffer) return d;
                    for (var f = new ArrayBuffer(3 * d.length), b = new Uint8Array(f), c = 0, g = d.length, e = 0; g > e; e++) {
                        var a = d.charCodeAt(e);
                        a >= 1 && 127 >= a ? b[c++] = a : a > 2047 ? (b[c++] = 224 | a >> 12 & 15, b[c++] = 128 | a >> 6 & 63, b[c++] = 128 | a >> 0 & 63) : (b[c++] = 192 | a >> 6 & 31, b[c++] = 128 | a >> 0 & 63)
                    }
                    return b.subarray(0, c)
                },
                j = function() {
                    var a = "undefined" != typeof h.current.platform && h.current.platform.id === n.platforms.NRDP_TARGET.id && h.current.isLegacyDevice && "undefined" != typeof nrdp.ntba.hmac && "undefined" != typeof nrdp.ntba.encrypt && "undefined" != typeof nrdp.ntba.decrypt;
                    return a
                },
                e = function() {
                    var a = 1;
                    Object.defineProperties(this, {
                        contexts: {
                            enumerable: !0,
                            writable: !1,
                            value: {}
                        },
                        nextContextId: {
                            enumerable: !0,
                            get: function() {
                                return a++
                            }
                        }
                    })
                };
            e.prototype.processEncryptedMessage = function(e, d, f) {
                var g = this,
                    h = function(a) {
                        var b = k.omit(a, "hmac"),
                            c = f.newSubEvent(i.EVENTS.CANONICAL),
                            d = r.canonicalForm(b);
                        return c.complete(), d
                    },
                    l = function(c) {
                        return function(d) {
                            return b.Promise(function(b, e) {
                                return c !== d ? e(new a(a.ERRORS.CRYPTO_ERROR, "HMAC validation failed")) : void b(c)
                            })
                        }
                    };
                return b.Promise(function(k, m) {
                    var n = l(d.hmac),
                        o = function(c) {
                            return b.Promise(function(b, d) {
                                return c ? void b(c) : d(new a(a.ERRORS.CRYPTO_ERROR, "Decryption failed"))
                            })
                        },
                        p = h(d);
                    if (j()) return b.Promise(function(f, h) {
                        var b = g.contexts[e];
                        return b ? void nrdp.mdx.ProcessSessionMessage(b.context, d.nonce, p, d.hmac, d.ciphertext, f) : h(new a(a.ERRORS.CRYPTO_ERROR, c))
                    }).then(function(a) {
                        return n(a.hmac).then(function() {
                            return o(a.plaintext)
                        })
                    }).done(k, m);
                    var q = f.newSubEvent(i.EVENTS.HMAC);
                    g.hmac(e, p).finally(q.complete.bind(q)).then(n).then(function() {
                        var a = f.newSubEvent(i.EVENTS.DECRYPT);
                        return g.decrypt(e, d.ciphertext).finally(a.complete.bind(a)).then(o)
                    }).done(k, m)
                })
            }, e.prototype.processOutgoingSessionMsg = function(h, d, f) {
                if (!d.plaintext) return b.reject(new a(a.ERRORS.CRYPTO_ERROR, "plaintext missing or empty"));
                var e, g, k = this,
                    l = d.plaintext;
                return delete d.plaintext, j() ? b.Promise(function(j, m) {
                    var b = k.contexts[h];
                    return b ? (d.ciphertext = "ciphertext", e = f.newSubEvent(i.EVENTS.CANONICAL), g = r.canonicalForm(d), e.complete(), d.legacyMessageEncryption = {
                        securityContext: b.context,
                        plaintext: l,
                        canonicalMessage: g
                    }, void j(d)) : m(new a(a.ERRORS.CRYPTO_ERROR, c))
                }) : b.Promise(function(b, c) {
                    e = f.newSubEvent(i.EVENTS.ENCRYPT), k.encrypt(h, l).finally(e.complete.bind(e)).then(function(b) {
                        if (!b) throw new a(a.ERRORS.CRYPTO_ERROR, "Encryption failed");
                        return d.ciphertext = b, e = f.newSubEvent(i.EVENTS.CANONICAL), g = r.canonicalForm(d), e.complete(), e = f.newSubEvent(i.EVENTS.HMAC), k.hmac(h, g).finally(e.complete.bind(e))
                    }).then(function(b) {
                        if (!b) throw new a(a.ERRORS.CRYPTO_ERROR, "HMAC signing failed");
                        return d.hmac = b, d
                    }).done(b, c)
                })
            };
            var z = function() {
                e.call(this);
                var h, d = this,
                    g = {},
                    i = function(j) {
                        var c, d, e;
                        "undefined" != typeof nrdjs && (c = nrdjs.mslClient.getMslStore(), d = c.getMasterToken(), e = c.getUserIdToken(nrdp.registration.currentDeviceAccount), h = c.getCryptoContext(d));
                        var i = "",
                            k = f.encode;
                        if (!d || !e) return void j({
                            success: !1,
                            cTicket: i
                        });
                        try {
                            i = ["1", k(l(JSON.stringify(d.toJSON()))), k(l(JSON.stringify(e.toJSON())))].join(",")
                        } catch (b) {
                            throw new a(a.ERRORS.CRYPTO_ERROR, JSON.stringify(b))
                        }
                        g.hmac = function(c) {
                            return b.Promise(function(d, b) {
                                h.sign(l(c), {
                                    result: function(c) {
                                        return c ? d(f.encode(c)) : void b(new a(a.ERRORS.CRYPTO_ERROR, "msl hmac error"))
                                    },
                                    error: function(c) {
                                        b(new a(a.ERRORS.CRYPTO_ERROR, JSON.stringify(c)))
                                    }
                                })
                            })
                        }, g.end = function() {}, g.decrypt = function(c) {
                            return b.Promise(function(d, b) {
                                try {
                                    h.decrypt(l(f.decode(c)), {
                                        result: function(a) {
                                            var b = s(a);
                                            d(b)
                                        },
                                        error: function(c) {
                                            b(new a(a.ERRORS.CRYPTO_ERROR, c || "msl decrypt error"))
                                        }
                                    })
                                } catch (c) {
                                    b(new a(a.ERRORS.CRYPTO_ERROR, c || "msl decrypt exception"))
                                }
                            })
                        }, j({
                            success: !0,
                            cTicket: i,
                            mslCryptoContext: g
                        })
                    };
                return this.getCTicket = function() {
                    return b.Promise(function(b, c) {
                        i(function(d) {
                            return d.success ? b(d.cTicket) : void c(new a(a.ERRORS.INVALID_CTICKET))
                        })
                    })
                }, this.beginContext = function(e) {
                    return e ? b.Promise(function(g, h) {
                        var b = d.nextContextId++,
                            f = {
                                encrypt: d.encrypt.bind(d, b),
                                decrypt: d.decrypt.bind(d, b),
                                hmac: d.hmac.bind(d, b),
                                end: d.endContext.bind(d, b),
                                processEncryptedMessage: d.processEncryptedMessage.bind(d, b),
                                processOutgoingSessionMsg: d.processOutgoingSessionMsg.bind(d, b)
                            },
                            i = "string" == typeof e ? e : m.decode(e);
                        nrdp.mdx.beginContext(i, null, function(e) {
                            return e && e.context ? (f.context = e.context, d.contexts[b] = f, g(f)) : void h(new a(a.ERRORS.CRYPTO_ERROR, c))
                        })
                    }) : b.Promise(function(b, d) {
                        i(function(e) {
                            return e.success ? b(e.mslCryptoContext) : void d(new a(a.ERRORS.CRYPTO_ERROR, c))
                        })
                    })
                }, this.encrypt = function(f, e) {
                    return b.Promise(function(h, b) {
                        if (!e || e.length > w) return b(new a(a.ERRORS.CRYPTO_ERROR, "Invalid data to encrypt"));
                        var g = d.contexts[f];
                        if (!g || !g.context) return b(new a(a.ERRORS.CRYPTO_ERROR, c));
                        try {
                            nrdp.mdx.encrypt(g.context, e, function(c) {
                                return k.isString(c) ? c ? h(c) : b(new a(a.ERRORS.CRYPTO_ERROR)) : c && c.encrypted ? void h(c.data) : b(new a(a.ERRORS.CRYPTO_ERROR))
                            })
                        } catch (a) {
                            return b(a)
                        }
                    })
                }, this.decrypt = function(e, f) {
                    return b.Promise(function(h, g) {
                        var b = d.contexts[e];
                        if (!b || !b.context) return g(new a(a.ERRORS.CRYPTO_ERROR, c));
                        var i = b.context;
                        try {
                            nrdp.mdx.decrypt(i, f, h)
                        } catch (a) {
                            return g(a)
                        }
                    })
                }, this.hmac = function(f, e) {
                    return b.Promise(function(h, b) {
                        var g = d.contexts[f];
                        if (!g || !g.context) return b(new a(a.ERRORS.CRYPTO_ERROR, c));
                        var i = g.context,
                            j = "string" == typeof e ? m.encode(e) : e;
                        try {
                            nrdp.mdx.hmac(i, j, function(c) {
                                return c ? h(c) : void b(new a(a.ERRORS.CRYPTO_ERROR, "msl hmac error"))
                            })
                        } catch (a) {
                            b(a)
                        }
                    })
                }, this.endContext = function(a) {
                    return delete d.contexts[a], b.resolve()
                }, this
            };
            z.prototype = Object.create(e.prototype);
            var D = function() {
                e.call(this);
                var g = this,
                    h = 16;
                if (window.nfNewCrypto) d = window.nfNewCrypto;
                else {
                    if (!window.crypto) throw new a(a.ERRORS.PLATFORM_SUPPORT_ERROR, "Failed to create Cast Target security provider. No crypto provider");
                    d = window.crypto
                }
                return this.getCTicket = function() {
                    throw new a(a.ERRORS.NOT_SUPPORTED)
                }, this.beginContext = function(i) {
                    var c = f.decode(i);
                    if (48 !== c.length) return b.reject(new a(a.ERRORS.CRYPTO_ERROR, F));
                    var e, h;
                    return b.Promise(function(a, b) {
                        d.subtle.importKey("raw", c.subarray(32), {
                            name: q
                        }, !1, ["encrypt", "decrypt"]).then(function(a) {
                            if (!a) throw new Error("Import crypto keys failed");
                            return e = a, d.subtle.importKey("raw", c.subarray(0, 32), {
                                name: "HMAC",
                                hash: {
                                    name: A
                                }
                            }, !1, ["sign"])
                        }).then(function(b) {
                            if (!b) throw new Error("Import hmac keys failed");
                            h = b;
                            var a = g.nextContextId;
                            return g.contexts[a] = {
                                hmacKey: h,
                                encryptionKey: e
                            }, {
                                encrypt: g.encrypt.bind(g, a),
                                decrypt: g.decrypt.bind(g, a),
                                hmac: g.hmac.bind(g, a),
                                end: g.endContext.bind(g, a),
                                processEncryptedMessage: g.processEncryptedMessage.bind(g, a),
                                processOutgoingSessionMsg: g.processOutgoingSessionMsg.bind(g, a)
                            }
                        }).catch(function(a) {
                            throw a = a || new Error(o)
                        }).then(a, b)
                    })
                }, this.encrypt = function(j, e) {
                    if (!e || e.length > w) return b.reject(new a(a.ERRORS.CRYPTO_ERROR, "Invalid data to encrypt"));
                    var i = g.contexts[j];
                    return i && i.encryptionKey ? b.Promise(function(b, c) {
                        var a = d.getRandomValues(new Uint8Array(h));
                        d.subtle.encrypt({
                            name: q,
                            iv: a
                        }, i.encryptionKey, l(e)).then(function(d) {
                            if (!d || d.byteLength > 32767) throw new Error("Encryption failure" + JSON.stringify(d));
                            var h = function(a) {
                                    return 127 >= a ? 1 : 32767 >= a ? 2 : -1
                                },
                                e = new Uint8Array(d),
                                b = new Uint8Array(18 + h(e.length) + e.length);
                            b[0] = 2;
                            var c = 1,
                                g = function(d) {
                                    var a = d.length;
                                    if (127 >= a) b[c++] = a;
                                    else {
                                        if (!(32767 >= a)) return !1;
                                        b[c++] = 128 | a >> 8, b[c++] = 255 & a
                                    }
                                    return b.set(d, c), c += a, !0
                                };
                            if (!g(a) || !g(e)) throw new Error("Octet write failure");
                            return f.encode(b)
                        }).catch(function(a) {
                            throw a = a || new Error(o)
                        }).then(b, c)
                    }) : b.reject(new a(a.ERRORS.CRYPTO_ERROR, c))
                }, this.decrypt = function(n, e) {
                    var l = g.contexts[n];
                    if (!l || !l.encryptionKey) return b.reject(new a(a.ERRORS.CRYPTO_ERROR, c));
                    var m = "Invalid decryption data";
                    if (!k.isString(e) || e.length > E) return b.reject(new a(a.ERRORS.CRYPTO_ERROR, m));
                    if (e = f.decode(e), e.size < 35 || 2 !== e[0] || e[1] !== h) return b.reject(new a(a.ERRORS.CRYPTO_ERROR, m));
                    var j, i = h + 2;
                    if (e[i] <= 127) j = e[i], ++i;
                    else {
                        if (e.size < i + 1) return b.reject(new a(a.ERRORS.CRYPTO_ERROR, m));
                        j = (127 & e[i]) << 8 | 255 & e[i + 1], i += 2
                    }
                    return j % h ? b.reject(new a(a.ERRORS.CRYPTO_ERROR, "Invalid ciphertext length " + j + " not multiple of " + h)) : j + i !== e.length ? b.reject(new a(a.ERRORS.CRYPTO_ERROR, "Unexpected Ciphertext Length " + j + " " + e.length + ", Not Aligned With the End Of Envelope")) : b.Promise(function(a, b) {
                        d.subtle.decrypt({
                            name: q,
                            iv: e.subarray(2, h + 2)
                        }, l.encryptionKey, e.subarray(i)).then(function(a) {
                            if (!a || a.byteLength > u) throw new Error("Decryption error - payload too large");
                            return s(a)
                        }).catch(function(a) {
                            throw a = a || new Error(o)
                        }).then(a, b)
                    })
                }, this.hmac = function(h, i) {
                    var e = g.contexts[h];
                    return e && e.encryptionKey ? b.Promise(function(a, b) {
                        return d.subtle.sign({
                            name: "HMAC",
                            hash: {
                                name: A
                            }
                        }, e.hmacKey, m.encode(i)).then(function(a) {
                            if (!a || a.byteLength > u) throw new Error("Invalid result", a ? a.byteLength : -1);
                            return f.encode(new Uint8Array(a))
                        }).catch(function(a) {
                            throw a = a || new Error(o)
                        }).then(a, b)
                    }) : b.reject(new a(a.ERRORS.CRYPTO_ERROR, c))
                }, this.endContext = function(a) {
                    return delete g.contexts[a], b.resolve()
                }, this
            };
            D.prototype = Object.create(e.prototype);
            var B = function() {
                if (!d) throw new a(a.ERRORS.PLATFORM_SUPPORT_ERROR, "No crypto provider provided during start");
                e.call(this);
                var f = this;
                return this.getCTicket = function() {
                    return b.Promise(function(b, c) {
                        try {
                            d.createCryptoContext(function(c) {
                                if (c.success && c.cryptoContext) return b(c.cryptoContext.cTicket);
                                throw new a(a.ERRORS.INVALID_CTICKET)
                            })
                        } catch (a) {
                            return c(a)
                        }
                    })
                }, this.beginContext = function(e) {
                    return b.Promise(function(b, g) {
                        var h = e ? d.createCryptoContextFromSharedSecret.bind(null, e) : d.createCryptoContext;
                        h(function(e) {
                            if (e.success && e.cryptoContext) {
                                var d = f.nextContextId++,
                                    h = {
                                        encrypt: f.encrypt.bind(f, d),
                                        decrypt: f.decrypt.bind(f, d),
                                        hmac: f.hmac.bind(f, d),
                                        end: f.endContext.bind(f, d),
                                        processEncryptedMessage: f.processEncryptedMessage.bind(f, d),
                                        processOutgoingSessionMsg: f.processOutgoingSessionMsg.bind(f, d)
                                    };
                                return f.contexts[d] = e.cryptoContext, b(h)
                            }
                            g(new a(a.ERRORS.CRYPTO_ERROR, c))
                        })
                    })
                }, this.encrypt = function(d, e) {
                    return b.Promise(function(h, b) {
                        var g = f.contexts[d];
                        if (!g) return b(new a(a.ERRORS.CRYPTO_ERROR, c));
                        try {
                            g.encrypt(e, function(c) {
                                return c.success ? h(c.encryptedDataAsn1Base64 || c.mslEncryptionEnvelopeBase64) : void b(new a(a.ERRORS.CRYPTO_ERROR, "Encryption failed"))
                            })
                        } catch (a) {
                            b(a)
                        }
                    })
                }, this.decrypt = function(d, e) {
                    return b.Promise(function(h, b) {
                        var g = f.contexts[d];
                        if (!g) return b(new a(a.ERRORS.CRYPTO_ERROR, c));
                        try {
                            g.decrypt(e, function(c) {
                                return c.success ? h(c.text) : void b(new a(a.ERRORS.CRYPTO_ERROR, "Decryption failed"))
                            })
                        } catch (a) {
                            b(a)
                        }
                    })
                }, this.hmac = function(d, e) {
                    return b.Promise(function(h, b) {
                        var g = f.contexts[d];
                        if (!g) return b(new a(a.ERRORS.CRYPTO_ERROR, c));
                        try {
                            g.hmac(e, function(c) {
                                return c.success ? h(c.hmacBase64) : void b(new a(a.ERRORS.CRYPTO_ERROR, "HMAC failed"))
                            })
                        } catch (a) {
                            b(a)
                        }
                    })
                }, this.endContext = function(a) {
                    return delete f.contexts[a], b.resolve()
                }, this
            };
            B.prototype = Object.create(e.prototype);
            var t = function() {
                e.call(this);
                var d = this;
                return this.getCTicket = function() {
                    return b.Promise(function(a, b) {
                        try {
                            nrdp.ntba.getCticket(function(b) {
                                a(b.cticket)
                            })
                        } catch (a) {
                            return b(a)
                        }
                    })
                }, this.beginContext = function(a) {
                    return b.Promise(function(e, g) {
                        var c, b = d.nextContextId++,
                            f = {
                                encrypt: d.encrypt.bind(d, b),
                                decrypt: d.decrypt.bind(d, b),
                                hmac: d.hmac.bind(d, b),
                                end: d.endContext.bind(d, b),
                                processEncryptedMessage: d.processEncryptedMessage.bind(d, b),
                                processOutgoingSessionMsg: d.processOutgoingSessionMsg.bind(d, b)
                            };
                        try {
                            if (a) {
                                var h = k.isString(a) ? a : s(a);
                                nrdp.mdx.beginContext(h, null, function(a) {
                                    c = {
                                        context: a.context,
                                        scope: nrdp.mdx,
                                        encryptImpl: nrdp.mdx.encrypt,
                                        decryptImpl: nrdp.mdx.decrypt,
                                        hmacImpl: nrdp.mdx.hmac,
                                        endImpl: nrdp.mdx.endContext
                                    }, d.contexts[b] = c, e(f)
                                })
                            } else nrdp.ntba.beginTransaction(nrdp.registration.currentDeviceAccount, "read", function(a) {
                                c = {
                                    context: a,
                                    scope: nrdp.ntba,
                                    encryptImpl: nrdp.ntba.encrypt,
                                    decryptImpl: nrdp.ntba.decrypt,
                                    hmacImpl: nrdp.ntba.hmac,
                                    endImpl: nrdp.ntba.endTransaction
                                }, d.contexts[b] = c, e(f)
                            })
                        } catch (a) {
                            g(a)
                        }
                    })
                }, this.encrypt = function(e, f) {
                    return j() ? b.resolve() : b.Promise(function(h, b) {
                        var g = d.contexts[e];
                        if (!g) return b(new a(a.ERRORS.CRYPTO_ERROR, c));
                        try {
                            g.encryptImpl.call(g.scope, g.context, f, function(c) {
                                if (k.isString(c)) {
                                    if (!c) return b(new a(a.ERRORS.CRYPTO_ERROR));
                                    h(c)
                                } else {
                                    if (!c.encrypted) return b(new a(a.ERRORS.CRYPTO_ERROR));
                                    h(c.data)
                                }
                            })
                        } catch (a) {
                            b(a)
                        }
                    })
                }, this.decrypt = function(e, f) {
                    return j() ? b.resolve() : b.Promise(function(h, g) {
                        var b = d.contexts[e];
                        if (!b) return g(new a(a.ERRORS.CRYPTO_ERROR, c));
                        try {
                            b.decryptImpl.call(b.scope, b.context, f, h)
                        } catch (a) {
                            g(a)
                        }
                    })
                }, this.hmac = function(e, f) {
                    return j() ? b.resolve() : b.Promise(function(h, g) {
                        var b = d.contexts[e];
                        if (!b) return g(new a(a.ERRORS.CRYPTO_ERROR, c));
                        try {
                            b.hmacImpl.call(b.scope, b.context, f, h)
                        } catch (a) {
                            g(a)
                        }
                    })
                }, this.endContext = function(a) {
                    return b.Promise(function(c, e) {
                        var b = d.contexts[a];
                        if (!b) return c();
                        try {
                            b.endImpl.call(b.scope, b.context, c)
                        } catch (a) {
                            e(a)
                        }
                    }).then(function() {
                        delete d.contexts[a]
                    })
                }, this
            };
            t.prototype = Object.create(e.prototype);
            var C, y, x, v, H = function() {
                    return j() ? x || (x = new t) : v || (v = new z)
                },
                I = function() {
                    return C || (C = new D)
                },
                J = function() {
                    return y || (y = new B)
                },
                p = {};
            p[n.platforms.NRDP_TARGET.id] = H, p[n.platforms.CAST_TARGET.id] = I, p[n.platforms.CADMIUM_CONTROLLER.id] = J, G.exports = {
                get platformCrypto() {
                    return d
                },
                set platformCrypto(a) {
                    d = a
                },
                createSecurityProvider: function(b) {
                    var c = p[b.id];
                    if (h = h || g("../configuration.js"), f = f || h.current.base64, m = m || h.current.utf8, c) return c();
                    throw new a(a.ERRORS.PLATFORM_SUPPORT_ERROR, "Cannot create security provider for platform: " + b.name)
                }
            }
        }, {
            "../../builds/ld.js": 1,
            "../configuration.js": 42,
            "../enums.js": 59,
            "../mdxError.js": 70,
            "../profiling/mdxProfiler.js": 71,
            "./validation.js": 90,
            q: 37
        }],
        90: [function(m, g, u) {
            var b = m("../../builds/ld.js"),
                i = m("../logging/logger.js"),
                l = 5,
                h = "\r\n",
                e = function(a) {
                    var b = /^(?:[0-9])+.(?:[0-9])+$/;
                    return null !== b.exec(a)
                },
                c = function(a) {
                    var b = /^-?\d{1,}$/;
                    return null !== b.exec(a)
                },
                f = function(b) {
                    var h = /^cast:\/\/.*$/i;
                    if (h.test(b)) return !0;
                    var c = /^(https?|wss?):\/\/(.*\@.*)?([a-z0-9]+[a-z0-9\.]*|\[[a-f0-9]{0,4}\:[a-f0-9]{0,4}\:[a-f0-9]{0,4}\:[a-f0-9]{0,4}\:[a-f0-9]{0,4}\:[a-f0-9]{0,4}\:[a-f0-9]{0,4}\:[a-f0-9]{0,4}\])(\:([^$\/]+))?(\/[a-z0-9\/\.\_\-\~\%]*)?(\#.*)?(\?.*)?/i,
                        d = /\.\.+/,
                        a = c.exec(b) || [],
                        f = a[1],
                        g = a[2],
                        n = a[3],
                        i = a[4],
                        j = a[5],
                        k = a[6],
                        l = a[7],
                        m = a[8],
                        e = !i || isFinite(j);
                    return f && !g && n && e && !l && !m && !d.test(k)
                },
                a = function(a) {
                    var b = /[^\ -~]/;
                    return !b.test(a)
                },
                d = function(a) {
                    var b = /[^A-Za-z0-9\+\/\=]/;
                    return !b.test(a)
                },
                k = function(a) {
                    var b = /[^A-Za-z0-9\+\/\=,]/;
                    return !b.test(a)
                },
                j = function(a) {
                    var b = /^(true|false)$/i;
                    return b.test(a)
                },
                o = {
                    pairingrequest: {
                        fields: {
                            action: a,
                            version: e,
                            nonce: c,
                            controllerurl: f,
                            controlleruuid: a,
                            pairdatahmac: d,
                            cticket: k,
                            loginsupported: {
                                optional: !0,
                                validator: j
                            },
                            regpinconfirmation: {
                                optional: !0,
                                validator: j
                            }
                        },
                        isResponse: !1
                    },
                    pairingresponse: {
                        fields: {
                            action: a,
                            version: e,
                            nonce: c,
                            controllersharedsecret: a,
                            targetuuid: a,
                            targetuserid: a,
                            controlleruuid: a,
                            controlleruserid: a,
                            grantdatahmac: d
                        },
                        isResponse: !0
                    },
                    regpairrequest: {
                        fields: {
                            action: a,
                            nonce: c,
                            pin: d,
                            cticket: k,
                            hmac: d,
                            version: e,
                            controlleruuid: a,
                            controllerurl: f,
                            pairdatahmac: {
                                optional: !0,
                                validator: d
                            },
                            loginclid: {
                                optional: !0,
                                validator: a
                            },
                            loginpolicy: {
                                optional: !0,
                                validator: c
                            }
                        },
                        isResponse: !1
                    },
                    regpairreply: {
                        fields: {
                            action: a,
                            nonce: c,
                            userid: a,
                            controllersharedsecret: a,
                            grantdatahmac: d,
                            version: e,
                            targetuuid: a,
                            loginpolicy: {
                                optional: !0,
                                validator: c
                            }
                        },
                        isResponse: !0
                    },
                    regpairerror: {
                        fields: {
                            action: a,
                            nonce: c,
                            version: e,
                            targetuuid: a,
                            errorcode: a,
                            errorstring: a
                        },
                        isResponse: !0
                    },
                    pairingresponseError: {
                        fields: {
                            action: a,
                            version: e,
                            nonce: c,
                            targetuuid: a,
                            targetuserid: a,
                            errorcode: a,
                            errorstring: a,
                            loginsupported: {
                                optional: !0,
                                validator: j
                            },
                            regpinconfirmation: {
                                optional: !0,
                                validator: j
                            }
                        },
                        isResponse: !0
                    },
                    session: {
                        fields: {
                            action: a,
                            version: e,
                            nonce: c,
                            fromurl: f,
                            fromuuid: a,
                            fromuserid: a,
                            touuid: a,
                            touserid: a,
                            hmac: d,
                            plaintext: {
                                optional: !0,
                                validator: a
                            },
                            ciphertext: {
                                optional: !0,
                                validator: d
                            }
                        },
                        isResponse: !1
                    },
                    pingsearch: {
                        fields: {
                            action: a,
                            fromuuid: a,
                            fromurl: f,
                            servicetype: a,
                            id: a
                        },
                        isResponse: !1
                    },
                    pingresponse: {
                        fields: {
                            action: a,
                            friendlyname: d,
                            fromurl: f,
                            fromuuid: a,
                            responseheaders: a,
                            servicetype: a,
                            touuid: a,
                            id: a
                        },
                        isResponse: !0
                    },
                    error: {
                        fields: {
                            action: a,
                            nonce: c,
                            fromuuid: a,
                            touuid: a,
                            errorcode: a,
                            errorstring: a
                        },
                        isResponse: !0
                    },
                    broadcast: {
                        fields: {
                            action: a,
                            nonce: c,
                            fromuuid: a,
                            fromurl: f,
                            messageType: a,
                            payload: {
                                optional: !0,
                                validator: a
                            }
                        },
                        isResponse: !1
                    }
                },
                p = function h(a, c, g) {
                    var e, f;
                    b.isString(c) ? (e = c.indexOf("."), f = c.indexOf("[")) : (e = -1, f = -1);
                    var d;
                    if (e >= 0 && (0 > f || f > e)) return e > 0 ? (d = c.substring(0, e), a.hasOwnProperty(d) || (a[d] = {}), a[d] = h(a[d], c.slice(e + 1), g), a) : (a || (a = {}), a = h(a, c.slice(e + 1), g));
                    if (!(f > 0)) return c && (a[c] = g), a;
                    var j = c.indexOf("]");
                    if (j > 0) {
                        d = c.substring(0, f);
                        var i = parseInt(c.substr(f + 1, j - 1), 10);
                        if (a.hasOwnProperty(d) || (a[d] = []), !isNaN(i)) {
                            var k = c.slice(j + 1);
                            "" !== k ? a[d][i] = h(a[d][i], k, g) : a[d] = h(a[d], i.toString(), g)
                        }
                        return a
                    }
                    return null
                },
                n = function(a) {
                    var c = b.map(a.split(h), function(a) {
                        var b = a.indexOf("=");
                        return b >= 0 ? [a.substr(0, b), a.substr(b + 1)] : null
                    });
                    return b.reduce(c, function(b, a) {
                        return a ? p(b, a[0], a[1]) : b
                    }, {})
                },
                q = function(d) {
                    var a = {
                        success: !1
                    };
                    if (!d) return i.warn("No message payload to parse and validate"), a;
                    var c = a.parsed = n(d),
                        f = b.zipObject(b.map(c, function(b, a) {
                            return [a, !0]
                        })),
                        e = c.action;
                    if ("pairingresponse" === e && (c.hasOwnProperty("errorstring") || c.hasOwnProperty("errorcode")) && (c.action = e = "pairingresponseError"), !o[e]) return i.warn("Unknown command received. Message dropped", d), a;
                    var g = b.findKey(o[e].fields, function(a, e) {
                        if (!c.hasOwnProperty(e) && !a.optional) return !0;
                        var g, h = c[e];
                        if (delete f[e], b.isFunction(a)) g = a(h);
                        else {
                            var i = d.hasOwnProperty(e);
                            g = i ? a.validator(h) : a.optional
                        }
                        return !g
                    });
                    return g ? (i.warn("Message failed validation due to invalid field or missing field: " + g, d), a) : b.isEqual(f, {}) ? (a.success = !0, a) : (i.warn("Message failed validation due to unexpected fields", b.keys(f)), a)
                },
                r = function j(d, a, e) {
                    var f, g, c, i = !1;
                    return b.isArray(d) ? (l > e && (b.forEach(d, function(d, b) {
                        f = a ? [a, "[", b, "]"].join("") : b, g = j(d, f, e + 1), c = [c, g].join(""), i = !0
                    }), i || (c = a ? [a, "[]=", h].join("") : null)), c) : b.isNull(d) || "object" != typeof d ? [a, "=", d, h].join("") : (l > e && (b.forEach(d, function(d, b) {
                        f = a ? [a, b].join(".") : b, g = j(d, f, e + 1), c = [c, g].join(""), i = !0
                    }), i || (c = a ? [a, ".=", h].join("") : null)), c)
                },
                s = function(a) {
                    return r(a, null, 0)
                },
                t = function(a) {
                    var c = b.map(a, function(a, b) {
                            return b + "=" + encodeURIComponent(a)
                        }),
                        d = b.sortBy(c, function(a) {
                            return a
                        });
                    return d.join("&")
                };
            g.exports = {
                parsePairedPayload: n,
                parseAndValidateMsg: q,
                processOutgoingMessage: s,
                canonicalForm: t
            }, g.exports.versionValidator = e, g.exports.numberValidator = c, g.exports.urlValidator = f, g.exports.asciiValidator = a, g.exports.base64Validator = d, g.exports.cticketValidator = k
        }, {
            "../../builds/ld.js": 1,
            "../logging/logger.js": 64
        }],
        91: [function(c, s, t) {
            var f, b = c("q"),
                d = c("../builds/ld.js"),
                n = (c("./logging/logger.js"), c("./mdxError.js")),
                h = c("./enums.js"),
                i = "MDX_USERID",
                j = "MDX_PROFILEID",
                g = "MDX_REMOTE_DEVICE_MAP",
                q = 32,
                a = function() {};
            a.prototype.setMdxId = function(a) {
                return this.setItem(i, a || "")
            }, a.prototype.getMdxId = function() {
                return this.getItem(i)
            }, a.prototype.setProfileId = function(a) {
                return this.setItem(j, a || "")
            }, a.prototype.getProfileId = function() {
                return this.getItem(j)
            }, a.prototype.storeDeviceMap = function(a) {
                var c = this,
                    e = Array.isArray(a) ? a : [];
                return b.Promise(function(a, b) {
                    return 0 === e.length ? a() : void c.retrieveDeviceMapData().done(function(f) {
                        try {
                            var h = d.chain(e).map(function(b) {
                                d.isPlainObject(f) || (f = {});
                                var a = b.getPersistentData();
                                return a && a.id ? f[a.id] ? d.merge({}, f[a.id], a) : a : void 0
                            }).compact().sortBy(function(a) {
                                return -a.lastSeen
                            }).take(q).reduce(function(a, b) {
                                return a[b.id] = b, a
                            }, {}).value();
                            c.setItem(g, JSON.stringify(h)).done(a, b)
                        } catch (b) {
                            a()
                        }
                    }, b)
                })
            }, a.prototype.clearPairings = function() {
                var a = this;
                return b.Promise(function(c, b) {
                    a.retrieveDeviceMapData().done(function(e) {
                        try {
                            d.isPlainObject(e) || (e = {}), d.forEach(e, function(a) {
                                a.sharedSecret = null, a.currentMdxId = null
                            }), a.setItem(g, JSON.stringify(e)).done(c, b)
                        } catch (a) {
                            b(a)
                        }
                    }, b)
                })
            }, a.prototype.retrieveDeviceMapData = function() {
                var a = this;
                return b.Promise(function(b) {
                    try {
                        a.getItem(g).done(function(a) {
                            try {
                                b(a ? JSON.parse(a) : {})
                            } catch (a) {
                                b({})
                            }
                        }, b.bind(void 0, {}))
                    } catch (a) {
                        b({})
                    }
                })
            }, a.prototype.reset = function() {
                var a = this;
                return a.setItem(g, JSON.stringify({})).then(a.setMdxId).then(a.setProfileId)
            };
            var p = function() {
                a.call(this);
                var c = d.isUndefined(localStorage) ? null : localStorage;
                this.setItem = function(a, d) {
                    return b.Promise(function(b) {
                        try {
                            if (a) {
                                var e = {
                                        id: f.current.profileId,
                                        data: d
                                    },
                                    g = e ? JSON.stringify(e) : "";
                                c[a] = g
                            }
                            b()
                        } catch (a) {
                            b()
                        }
                    })
                }, this.getItem = function(a) {
                    return b.Promise(function(b) {
                        try {
                            if (a) {
                                var d = c[a];
                                if (d) {
                                    var e = JSON.parse(d);
                                    if (e.id === f.current.profileId) return b(e.data)
                                }
                            }
                            return b()
                        } catch (a) {
                            return b()
                        }
                    })
                }
            };
            p.prototype = Object.create(a.prototype);
            var o = function() {
                this.setItem = function(a, c) {
                    return b.Promise(function(b) {
                        try {
                            var d = nrdp.registration.currentDeviceAccount;
                            return d ? b(nrdp.storage.setItem(d, a, c)) : b()
                        } catch (a) {
                            return b()
                        }
                    })
                }, this.getItem = function(a) {
                    return b.Promise(function(b) {
                        try {
                            var c = nrdp.registration.currentDeviceAccount;
                            return c ? b(nrdp.storage.getItem(c, a)) : b()
                        } catch (a) {
                            return b()
                        }
                    })
                }
            };
            o.prototype = Object.create(a.prototype);
            var m, l, r = function() {
                    return m || (m = new p)
                },
                k = function() {
                    return l || (l = new o)
                },
                e = {};
            e[h.platforms.CAST_TARGET.id] = k, e[h.platforms.NRDP_TARGET.id] = k, e[h.platforms.CADMIUM_CONTROLLER.id] = r, s.exports = {
                createStorageProvider: function(a) {
                    var b = e[a.id];
                    if (f = f || c("./configuration.js"), b) return b();
                    throw new n(n.ERRORS.PLATFORM_SUPPORT_ERROR, "Cannot create storage provider for platform: " + a.name)
                }
            }
        }, {
            "../builds/ld.js": 1,
            "./configuration.js": 42,
            "./enums.js": 59,
            "./logging/logger.js": 64,
            "./mdxError.js": 70,
            q: 37
        }],
        92: [function(c, a, d) {
            var b = function(a) {};
            a.exports = b
        }, {}],
        93: [function(b, a, c) {
            a.exports = {}
        }, {
            "../discovery/discoveryComponent.js": 53,
            "../test/mockMdxTarget.js": 94,
            q: 37
        }],
        94: [function(a, d, f) {
            var b = a("../test/mockMdxTarget.js"),
                e = a("./mockTargetSession.js"),
                c = function(c, d) {
                    var a = this;
                    return b.call(a, c, d, e), a
                };
            c.prototype = Object.create(b.prototype), d.exports = c
        }, {
            "../test/mockMdxTarget.js": 94,
            "./mockTargetSession.js": 95
        }],
        95: [function(a, d, f) {
            var b = a("../session/mdxTargetSession.js"),
                e = a("../versionInfo.js"),
                c = function() {
                    return b.call(this, new e), this
                };
            c.prototype = Object.create(b.prototype), d.exports = c
        }, {
            "../session/mdxTargetSession.js": 83,
            "../versionInfo.js": 99
        }],
        96: [function(require, module, exports) {
            var ld = require("../../builds/ld.js"),
                enums = require("../enums.js"),
                logger = require("../logging/logger.js"),
                discoveryConfig = require("../discovery/discoveryConfig.js"),
                configuration = require("../configuration.js"),
                MdxError = require("../mdxError.js"),
                WebSocketTestChannel = require("./webSocketTestChannel.js"),
                ConsoleLogSink = require("../logging/consoleLogSink.js"),
                testConfigHandlerMap = {
                    mdxlogserver: {
                        sortKey: 10,
                        translate: function(a) {
                            return {
                                url: decodeURIComponent(a)
                            }
                        },
                        handle: function(c, b, a) {
                            a.ws = new WebSocketTestChannel(b.platform, a.url, !0), a.ws.open().done(function() {}, function() {})
                        }
                    },
                    mdxdebuglogging: {
                        sortKey: 20,
                        translate: function(a) {
                            return a = a.toString(), "true" === a || "1" === a
                        },
                        handle: function(a, c, b) {
                            b && (logger.addLogSink(new ConsoleLogSink), a.configure({
                                logLevel: enums.logLevels.TRACE
                            }))
                        }
                    },
                    wstestchannel: {
                        sortKey: 30,
                        translate: function(a) {
                            return {
                                url: decodeURIComponent(a)
                            }
                        },
                        handle: function(c, b, a) {
                            a.ws = new WebSocketTestChannel(b.platform, a.url), a.ws.open().done(function() {}, function() {})
                        }
                    },
                    mdxloglevel: {
                        sortKey: 40,
                        translate: function(a) {
                            if (ld.isUndefined(a)) return a;
                            var b = parseInt(a),
                                c = enums.logLevels;
                            return b = ld.isNaN(b) ? c[a.toUpperCase()] || void 0 : ld.includes(c, b) ? b : void 0
                        },
                        handle: function(a, c, b) {
                            a.configure({
                                logLevel: b
                            })
                        }
                    },
                    castapplicationid: {
                        sortKey: 50,
                        translate: function(a) {
                            return a
                        },
                        handle: function(d, b, c) {
                            var a;
                            b.platform.id === enums.platforms.CADMIUM_CONTROLLER.id && (a = discoveryConfig.config["CAST-CHROME"], a.appId = c)
                        }
                    },
                    mdxprofilermode: {
                        sortKey: 60,
                        translate: function(a) {
                            if (ld.isUndefined(a)) return a;
                            var b = parseInt(a),
                                c = enums.profilerModes;
                            return b = ld.isNaN(b) ? c[a.toUpperCase()] || void 0 : ld.includes(c, b) ? b : void 0
                        },
                        handle: function(a, c, b) {
                            a.configure({
                                profilerMode: b
                            })
                        }
                    },
                    mockmdx: {
                        sortKey: 70,
                        translate: function(value) {
                            return "object" != typeof value ? null : (ld.isString(value.script) ? (eval(value.script), "function" == typeof mockMdxScript ? value.script = mockMdxScript : value.script = null) : ld.isFunction(value.script) || (value.script = null), value)
                        },
                        handle: function(b, c, a) {
                            a && a.script && "OFFLINE" === a.mode && (configuration.current.mockMdx = a)
                        }
                    }
                },
                processConfigMap = function(a) {
                    return "object" != typeof a ? {} : ld.zipObject(ld.map(a, function(d, a) {
                        a = a.toLowerCase();
                        var b = testConfigHandlerMap[a];
                        if (b) {
                            var c = b.translate(d);
                            return ld.isUndefined(c) ? null : [a, c]
                        }
                        return null
                    }).filter(function(a) {
                        return null !== a
                    }))
                },
                getWindowUrl = function() {
                    return "undefined" != typeof window && window.location && window.location.href ? window.location.href : ""
                },
                getNrdpUrl = function() {
                    return "undefined" != typeof nrdp && nrdp.gibbon && nrdp.gibbon.location ? nrdp.gibbon.location : ""
                },
                urlFuncMap = {};
            urlFuncMap[enums.platforms.NRDP_TARGET.id] = getNrdpUrl, urlFuncMap[enums.platforms.CAST_TARGET.id] = getWindowUrl, urlFuncMap[enums.platforms.CADMIUM_CONTROLLER.id] = getWindowUrl;
            var getUrl = function(a) {
                    var b = urlFuncMap[a.id];
                    if (b) return b();
                    throw new MdxError(MdxError.ERRORS.PLATFORM_SUPPORT_ERROR, "Cannot parse query params for platform: " + a.name)
                },
                processQueryParamConfig = function(d) {
                    var a = getUrl(d),
                        b = a.indexOf("?"),
                        c = b > -1 ? a.substr(b + 1) : "";
                    return c ? processConfigMap(ld.zipObject(ld.map(c.split("&"), function(a) {
                        return a.split("=")
                    }))) : {}
                };
            module.exports = {
                getLogger: function() {
                    return logger
                },
                parseTestConfigForPlatform: function(a, b) {
                    return {}
                },
                processTestConfig: function(a, b, c) {}
            }
        }, {
            "../../builds/ld.js": 1,
            "../configuration.js": 42,
            "../discovery/discoveryConfig.js": 54,
            "../enums.js": 59,
            "../logging/consoleLogSink.js": 63,
            "../logging/logger.js": 64,
            "../mdxError.js": 70,
            "./webSocketTestChannel.js": 97
        }],
        97: [function(a, b, c) {}, {
            "../../builds/ld.js": 1,
            "../enums.js": 59,
            "../logging/bufferedWebSocketLogSink.js": 62,
            "../logging/logger.js": 64,
            "../mdxError.js": 70,
            "../schedulerFactory.js": 74,
            "../webSocketFactory.js": 100
        }],
        98: [function(a, b, g) {
            var c = a("../builds/ld.js"),
                d = a("q"),
                e = 3,
                f = 250;
            b.exports = {
                getEpochTime: function() {
                    return "undefined" != typeof nrdp && c.isFunction(nrdp.now) ? nrdp.now() : (new Date).valueOf()
                },
                retryPromise: function g(c, a, b) {
                    return a = "number" == typeof a ? a : e, b = "number" == typeof b ? b : f, d.Promise(function(d, e) {
                        c().then(d).catch(function(f) {
                            return 1 === a ? void e(f) : void setTimeout(function() {
                                g(c, a - 1, b).then(d, e)
                            }, b)
                        })
                    })
                }
            }
        }, {
            "../builds/ld.js": 1,
            q: 37
        }],
        99: [function(c, d, f) {
            var b = c("../builds/ld.js"),
                e = /^v?([0-9]+)(?:\.([0-9]+))?(?:\.([0-9]+))?(?:-([\w\.]+))*$/,
                a = function(a) {
                    var d = 0,
                        f = 0,
                        g = 0,
                        c = "",
                        h = "";
                    if (b.isString(a)) {
                        var i = e.exec(a);
                        i && (h = a, d = parseInt(i[1]) || d, f = parseInt(i[2]) || f, g = parseInt(i[3]) || g, c = i[4] || c)
                    } else b.isPlainObject(a) && (d = a.major || 0, f = a.minor || 0, g = a.revision || 0, c = a.build || "");
                    return h || (h = d + "." + f + "." + g, c && (h += "-" + c)), Object.defineProperties(this, {
                        major: {
                            enumerable: !0,
                            value: d
                        },
                        minor: {
                            enumerable: !0,
                            value: f
                        },
                        revision: {
                            enumerable: !0,
                            value: g
                        },
                        build: {
                            enumerable: !0,
                            value: c
                        },
                        version: {
                            enumerable: !0,
                            value: h
                        }
                    }), this
                };
            a.prototype.toString = function() {
                return this.version
            }, a.prototype.matches = function(c, d, e, a) {
                return this.major === c && this.minor === d && this.revision === e && b.isUndefined(a) || this.build === a
            }, a.prototype.isGreaterThan = function(a, b, c) {
                return this.major > a || this.major === a && this.minor > b || this.major === a && this.minor === b && this.revision > c
            }, a.prototype.isGreaterThanOrEqual = function(a, b, c) {
                return this.matches(a, b, c) || this.isGreaterThan(a, b, c)
            }, d.exports = a
        }, {
            "../builds/ld.js": 1
        }],
        100: [function(d, g, i) {
            var a = d("./mdxError.js"),
                c = d("./enums.js"),
                e = "mdx",
                f = function(a, b) {
                    try {
                        return b ? new window.WebSocket(a, e) : new window.WebSocket(a)
                    } catch (a) {
                        return void 0
                    }
                },
                h = function(a, b) {
                    try {
                        return b ? new nrdp.WebSocket(a, e) : new nrdp.WebSocket(a)
                    } catch (a) {
                        return void 0
                    }
                },
                b = {};
            b[c.platforms.CAST_TARGET.id] = f, b[c.platforms.NRDP_TARGET.id] = h, b[c.platforms.CADMIUM_CONTROLLER.id] = f, g.exports = {
                createWebSocket: function(c, d, f) {
                    if (!d) throw new a(a.ERRORS.INVALID_ARG, "Invalid url for createWebSocket");
                    var e = b[c.id];
                    if (e) return e(d, f);
                    throw new a(a.ERRORS.PLATFORM_SUPPORT_ERROR, "Cannot create a websocket connection for platform: " + c.name)
                }
            }
        }, {
            "./enums.js": 59,
            "./mdxError.js": 70
        }]
    }, {}, [68]), "undefined" != typeof onMdxjsLoaded && onMdxjsLoaded instanceof Function && onMdxjsLoaded(mdxExport)
}();