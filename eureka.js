/* eslint-disable prefer-const */
/* eslint-disable prefer-promise-reject-errors */
/* eslint-disable no-useless-escape */
/* eslint-disable radix */
/* eslint-disable no-proto */
/* eslint-disable no-unsafe-negation */
/* eslint-disable getter-return */
/* eslint-disable indent */
/* eslint-disable no-empty */
/* eslint-disable no-useless-catch */
/* eslint-disable default-case */
/* eslint-disable no-prototype-builtins */
/* eslint-disable no-control-regex */
/* eslint-disable no-caller */
/* eslint-disable no-inner-declarations */
/* eslint-disable no-dupe-keys */
/* eslint-disable valid-typeof */
/* eslint-disable no-continue */
/* eslint-disable no-new-func */
/* eslint-disable no-restricted-globals */
/* eslint-disable no-throw-literal */
/* eslint-disable eqeqeq */
/* eslint-disable consistent-return */
/* eslint-disable block-scoped-var */
/* eslint-disable no-new-object */
/* eslint-disable new-cap */
/* eslint-disable prefer-spread */
/* eslint-disable no-extend-native */
/* eslint-disable no-restricted-properties */
/* eslint-disable no-global-assign */
/* eslint-disable no-cond-assign */
/* eslint-disable no-void */
/* eslint-disable prefer-rest-params */
/* eslint-disable max-len */
/* eslint-disable no-undef */
/* eslint-disable no-use-before-define */
/* eslint-disable no-unreachable */
/* eslint-disable no-shadow */
/* eslint-disable no-plusplus */
/* eslint-disable vars-on-top */
/* eslint-disable no-loop-func */
/* eslint-disable guard-for-in */
/* eslint-disable no-restricted-syntax */
/* eslint-disable no-var */
/* eslint-disable no-underscore-dangle */
/* eslint-disable no-sequences */
/* eslint-disable no-multi-assign */
/* eslint-disable no-unused-expressions */
/* eslint-disable no-mixed-operators */
/* eslint-disable no-return-assign */

!function () {
    var e222 = {};
    typeof nrdp !== 'undefined' && nrdp !== null || (nrdp = {
        isReady: !1,
        addEventListener(t, i) {
            var n = e222[t];
            n || (e222[t] = n = []),
                n.indexOf(i) >= 0 || e222[t].push(i);
        },
        removeEventListener(t, i) {
            var n = e222[t];
            var r = -1;
            n && (r = n.indexOf(i)) >= 0 && n.splice(r, 1);
        },
        device: {
            capability: {},
            get language() {
                return 'en-US';
            },
            SDKVersion: {},
            setUIVersion(e) {
                this._uiVersion = e;
            },
            getUIVersion() {
                return this._uiVersion;
            },
        },
        registration: {
            deviceAccounts: [],
            createDeviceAccount() { },
        },
        log: {
            addLogSink() { },
        },
        exit() {
            window.close();
        },
        init() {
            var t = this;
            var i = window.nrdpJsRequestState;
            var n = e222 && e222.fatalerror;
            var r = function (e) {
                var t = {
                    type: 'fatalerror',
                    cadmiumError: {
                        errorDetails: `NRDP Load Failure: ${e}`,
                        errorCode: 7001,
                    },
                };
                n.forEach(function (e) {
                    e.call(this, t);
                });
            };
            var s = function () {
                var i; var
                    n = window.nrdpJsRequestState;
                switch (window.removeEventListener('nrdpJsRequestStateChanged', s),
                n) {
                    case window.nrdpRequestStates.ERROR:
                        r('The nrdpjs file failed to load after the UI JS had been executed');
                        break;
                    case window.nrdpRequestStates.LOADED:
                        // eslint-disable-next-line no-undef
                        if (t !== nrdp) {
                            for (i in e222) {
                                e222[i].forEach(function (e) {
                                    // eslint-disable-next-line no-undef
                                    nrdp.addEventListener(i, e);
                                });
                            }
                            // eslint-disable-next-line no-unused-expressions
                            e222 = null,
                                nrdp.init();
                        } else r('The nrdpjs file was downloaded successfully, but the nrdp object was not instantiated');
                        break;
                    default:
                        r(`Unexpected nrdpjs request state=${n}`);
                }
            };
            // eslint-disable-next-line no-unused-expressions
            i === window.nrdpRequestStates.ERROR || i === window.nrdpRequestStates.LOADED ? r(`Request state=${i}`) : window.addEventListener('nrdpJsRequestStateChanged', s, !1);
        },
    });
}(),
    config = typeof config === 'undefined' ? {} : config,
    global = typeof global === 'undefined' ? {} : global,
    util = typeof util === 'undefined' ? {} : util;
var e = function () { };
var t = {};
util.isObjectLiteral = function (e) {
    return e !== null && typeof e === 'object' && e.constructor === Object;
}
    ,
    util.extendDeep = function () {
        var e; var t; var i; var n; var r = arguments[0]; var s = 1; var a = arguments.length; let
            o = !1;
        for (typeof r === 'boolean' && (o = r,
            r = arguments[1],
            s = 2); s < a; s++) {
            if ((e = arguments[s]) != null) {
                for (t in e) {
                    o && t in r || r !== (n = e[t]) && void 0 !== n && (i = r[t],
                        r[t] = i !== null && n !== null && typeof i === 'object' && typeof n === 'object' ? util.extendDeep(o, {}, i, n) : n);
                }
            }
        }
        return r;
    }
    ,
    function () {
        var e = {};
        var t = {
            actions: !0,
        };
        function i(e, t) {
            return function () {
                var i; var
                    n = e.base;
                return e.base = t,
                    i = e.apply(this, arguments),
                    e.base = n,
                    i;
            };
        }
        function n(e, n, r) {
            var s; var a; var o; var l; var u; let
                c;
            for (s in c = !!(r = r || t).extendAll,
                n) {
                a = n.__lookupGetter__(s),
                    o = n.__lookupSetter__(s),
                    a || o ? (a && e.__defineGetter__(s, a),
                        o && e.__defineSetter__(s, o)) : (l = n[s],
                            u = e[s],
                            typeof l === 'function' && typeof u === 'function' && l !== u ? (l.base !== Function.prototype.base && (l = i(l, u)),
                                l.base = u) : (c || r[s]) && util.isObjectLiteral(l) && util.isObjectLiteral(u) && (l = util.extendDeep({}, u, l)),
                            e[s] = l);
            }
        }
        function r() {
            var e = Array.prototype.slice;
            var t = e.call(arguments, 1);
            return this.extend({
                init: function i() {
                    var n = e.call(arguments, 0);
                    i.base.apply(this, t.concat(n));
                },
            });
        }
        function s(t, i) {
            var r = new this(e);
            return n(r, t, i),
                o(r);
        }
        function a(e, t) {
            return n(this.prototype, e, t),
                this;
        }
        function o(t) {
            var i = function () {
                var t = this.init;
                t && arguments[0] !== e && t.apply(this, arguments);
            };
            return t && (i.prototype = t),
                i.prototype.constructor = i,
                i.extend = s,
                i.bind = r,
                i.mixin = a,
                i;
        }
        Function.prototype.base = function () { }
            ,
            util.Class = {
                create: o,
                mixin: n,
                extend(e, t) {
                    var i = o();
                    return i.prototype = new e(),
                        i.extend(t);
                },
            },
            util.mixin = function () {
                n.apply(null, arguments);
            };
    }(),
    util.NameValuePairParser = util.Class.create({
        init(e, t, i, n) {
            this.delimiters = [t, e],
                this._encode = i,
                this._decode = n;
        },
        get(e, t, i) {
            var n; var r; var s; var a; let
                o = this.indexOf(e, t);
            return o !== -1 ? (r = this.delimiters,
                s = this._decode,
                o += t.length + r[1].length,
                n = e.indexOf(r[0], o),
                a = e.substring(o, n !== -1 ? n : e.length),
                s && (a = s(a))) : a = void 0 !== i ? i : null,
                a;
        },
        has(e, t) {
            return this.indexOf(e, t) !== -1;
        },
        indexOf(e, t) {
            var i; var n; var r; var s; var a; let
                o;
            if (e) {
                for (s = (r = (n = this.delimiters)[0]).length,
                    i = e.indexOf(t + n[1]); i > 0 && !o;) {
                    for (o = !0,
                        a = 1; a <= s; a++) {
                        if (e[i - a] !== r[s - a]) {
                            i = e.indexOf(t + n[1], i + 1),
                                o = !1;
                            break;
                        }
                    }
                }
            } else i = -1;
            return i;
        },
        add(e, t, i) {
            var n = this.delimiters;
            var r = this._encode;
            return r && (i = r(i)),
                e && (e += n[0]),
                e + t + n[1] + i;
        },
        remove(e, t) {
            var i; var n; var r; var s; var
                a = this.indexOf(e, t);
            return a !== -1 && (i = this.delimiters[0],
                n = e.indexOf(i, a),
                a > 0 ? (r = e.substr(0, a - 1),
                    s = 0) : (r = '',
                        s = i.length),
                n !== -1 && (r += e.substring(n + s)),
                e = r),
                e;
        },
        getMap(e) {
            var t; var i; var n; var r; var s; var a; var o; var
                l = {};
            if (e) {
                for (t = this.delimiters,
                    e = e.split(t[0]),
                    r = t[1],
                    i = this._decode,
                    n = Boolean(i),
                    s = 0,
                    a = e.length; s < a; s++) l[(o = e[s].split(r))[0]] = o.length > 1 ? n ? i(o[1]) : o[1] : '';
            }
            return l;
        },
    }),
    util.NameValuePair = util.Class.create({
        init(e, t, i, n, r, s) {
            this._parser = new util.NameValuePairParser(e, t, r, s),
                this._allowDuplicates = n || !1,
                this.pairs = i || '';
        },
        toString() {
            return this.pairs;
        },
        has(e) {
            return this._parser.indexOf(this.pairs, e) !== -1;
        },
        get(e, t) {
            return this._parser.get(this.pairs, e, t);
        },
        add(e, t) {
            return this._allowDuplicates || this.remove(e),
                this.pairs = this._parser.add(this.pairs, e, t),
                this;
        },
        addAll(e) {
            for (var t in e) this.add(t, e[t]);
            return this;
        },
        remove(e) {
            return this.pairs = this._parser.remove(this.pairs, e),
                this;
        },
        getMap() {
            return this._parser.getMap(this.pairs);
        },
    }),
    util.UrlParams = util.NameValuePair.extend({
        init: function e(t, i, n) {
            t && !n && (t.indexOf('#') !== -1 && (t = t.split('#'),
                this._hash = t[1],
                t = t[0]),
                t.indexOf('?') !== -1 ? (t = t.split('?'),
                    this.baseUrl = t.shift(),
                    t = t.join('?')) : t.indexOf('=') === -1 && (this.baseUrl = t,
                        t = null)),
                e.base.call(this, '=', '&', t, i, function (e) {
                    return encodeURIComponent(e);
                }, function (e) {
                    return decodeURIComponent(e);
                });
        },
        getParams() {
            return this.pairs;
        },
        toString: function e() {
            var t = e.base.call(this);
            var i = this.baseUrl || '';
            var n = this._hash;
            return t && (i && (i += '?'),
                i += t),
                n && (i += `#${n}`),
                i;
        },
    }),
    util.Class.mixin(util, {
        get location() {
            return window.location;
        },
        set location(e) {
            window.location = e;
        },
    }),
    util.CurrentUrlParams = new util.UrlParams(util.location.href),
    config.environment = {},
    function () {
        var e = config.environment;
        e.type = 'prod',
            e.urlProtocol = 'http',
            e.cookieNetflixId = 'NetflixId',
            e.cookieNetflixIdSecure = 'SecureNetflixId',
            // e.webapiHost = 'cast.prod.cloud.netflix.com/nq/mdx/eureka/^1.0.0',
            // e.customer_events_host = 'cast.prod.cloud.netflix.com';
            e.webapiHost = '192.168.119.195:4012',
            e.customer_events_host = '';
    }(),
    util.extend = function () {
        var e; var t; var i; var n = arguments; var r = n[0]; var s = n.length; var a = typeof r === 'boolean' && r; let
            o = 1;
        for (a && (r = n[1],
            o = 2); o < s; o++) { if ((e = n[o]) != null) for (t in e) a && t in r || void 0 !== (i = e[t]) && i !== r && (r[t] = i); }
        return r;
    }
    ,
    function () {
        var e = config.environment;
        var t = util.CurrentUrlParams;
        config.isDebugBuild = !1,
            config.nrdpVersion = 'cadmium.core',
            config.urlProtocol = e.urlProtocol,
            config.urlGetLimit = 2e3,
            // config.uiBootUrl = 'https://cast-uiboot.prod.cloud.netflix.com/nq/mdx/eureka/^1.0.0/bootloader',
            config.uiBootUrl = 'chromecast-redirector.html',
            config.ntsUser = t.get('ntsUser'),
            config.appRefreshThreshold = 6e4,
            config.screensaverTimeout = 12e5,
            config.rapidKeyDelay = 275,
            config.determinatePressHoldTime = 80,
            config.rapidOffAxisThreshold = 150,
            config.stuckKeyDelay = 100,
            config.uiCardShowDelay = parseInt('500', 10),
            config.uiVersion = 'release-20150831_490',
            config.uiBestResolution = '720p',
            config.uiName = 'eureka',
            config.uiAppName = 'htmltvui',
            config.startupDone = !1;
    }(),
    config.storage = {
        session: {
            always: ['startupProfiler', 'fullUIReloadCount'],
            startup: ['loginCount', 'DebugInfo', 'appRefresh'],
        },
        local: {
            always: ['mdxPromptDuration'],
            startup: ['nrdpRequestErrors'],
        },
    },
    config.playback = {
        skipSeconds: 10,
        skipFuzziness: 3e3,
        subtitlesCheckInterval: 250,
    },
    config.idleReloadTimeoutDurationMs = 6e5,
    config.idleReloadTimeoutDurationMsPreloaded = 36e5,
    config.playback.pauseTimeoutMs = 18e5,
    config.nqVersion = '^1.0.0',
    config.binding = {},
    function (e, t) {
        var i; var n = function () { }; var r = function () {
            return (new Date()).getTime();
        }; var s = function (e, t) {
            return e === t;
        }; var a = function (e) {
            return e;
        }; var o = function (e) {
            return e.toString();
        }; var l = Object.prototype.hasOwnProperty; var u = function (e, t) {
            for (var i in t) i !== 'prototype' && l.call(t, i) && (e[i] = t[i]);
            function n() {
                this.constructor = e;
            }
            return n.prototype = t.prototype,
                e.prototype = new n(),
                e.base = t.prototype,
                e;
        }; var c = function (e, t) {
            for (var i in t) i !== 'prototype' && l.call(t, i) && (e[i] = t[i]);
        }; var d = Array.prototype.slice; var h = 'Argument out of range'; var
            p = 'Object has been disposed';
        (i = e.Rx = {
            Internals: {},
        }).VERSION = '2.0.20327';
        var f = function (e, t) {
            return function () {
                return e[t].apply(e, arguments);
            };
        };
        var _ = function (e, t, i) {
            return ge(function (n) {
                var r = new k();
                var s = new k();
                var a = i(n, r, s);
                return r.disposable(e.materialize().select(function (e) {
                    return {
                        switchValue(t) {
                            return t(e);
                        },
                    };
                }).subscribe(a)),
                    s.disposable(t.materialize().select(function (e) {
                        return {
                            switchValue(t, i) {
                                return i(e);
                            },
                        };
                    }).subscribe(a)),
                    new C(r, s);
            });
        };
        var v = function (e) {
            for (var t = new Object(this), i = 0, n = t.length >>> 0; i < n; i++) { if (!e.call(arguments[1], t[i], i, t)) return !1; }
            return !0;
        };
        var m = function (e) {
            for (var t, i = [], n = new Object(this), r = 0, s = n.length >>> 0; r < s; r++) {
                t = n[r],
                    e.call(arguments[1], t, r, n) && i.push(t);
            }
            return i;
        };
        var b = function (e, t) {
            return e.length === 1 && e[t] instanceof Array ? e[t] : d.call(e);
        };
        var g = i.Internals.List = function () {
            function e(e) {
                this.comparer = e || s,
                    this.length = 0,
                    this.items = [];
            }
            return e.fromArray = function (t, i) {
                var n = new e(i);
                return n.items = t.slice(),
                    n.length = t.length,
                    n;
            }
                ,
                e.prototype.add = function (e) {
                    this.items[this.length++] = e;
                }
                ,
                e.prototype.removeAt = function (e) {
                    if (e < 0 || e >= this.length) { throw new Error(h); }
                    this.items.splice(e, 1),
                        this.length--;
                }
                ,
                e.prototype.indexOf = function (e) {
                    for (var t = 0, i = this.items.length; t < i; t++) { if (this.comparer(e, this.items[t])) return t; }
                    return -1;
                }
                ,
                e.prototype.remove = function (e) {
                    var t = this.indexOf(e);
                    return t !== -1 && (this.removeAt(t),
                        !0);
                }
                ,
                e.prototype.clear = function () {
                    this.items = [],
                        this.length = 0;
                }
                ,
                e.prototype.item = function (e, i) {
                    if (e < 0 || e >= count) { throw new Error(h); }
                    if (i === t) { return this.items[e]; }
                    this.items[e] = i;
                }
                ,
                e.prototype.toArray = function () {
                    return this.items.slice(0);
                }
                ,
                e.prototype.contains = function (e) {
                    for (var t = 0, i = this.items.length; t < i; t++) { if (this.comparer(e, this.items[t])) return !0; }
                    return !1;
                }
                ,
                e;
        }();
        var y = function (e, t, i, n, r) {
            for (var s = r; s > 0;) {
                i[s + n - 1] = e[s + t - 1],
                    s--;
            }
        };
        var E = function () {
            function e(e, t) {
                this.id = e,
                    this.value = t;
            }
            return e.prototype.compareTo = function (e) {
                var t = this.value.compareTo(e.value);
                return t === 0 && (t = this.id - e.id),
                    t;
            }
                ,
                e;
        }();
        var T = function () {
            function e(e) {
                this.items = new Array(e),
                    this.length = 0;
            }
            return e.prototype.isHigherPriority = function (e, t) {
                return this.items[e].compareTo(this.items[t]) < 0;
            }
                ,
                e.prototype.percolate = function (e) {
                    var t; let
                        i;
                    e >= this.length || e < 0 || (t = e - 1 >> 1) < 0 || t === e || this.isHigherPriority(e, t) && (i = this.items[e],
                        this.items[e] = this.items[t],
                        this.items[t] = i,
                        this.percolate(t));
                }
                ,
                e.prototype.heapify = function (e) {
                    var i; var n; var r; let
                        s;
                    e === t && (e = 0),
                        e >= this.length || e < 0 || (r = 2 * e + 2,
                            i = e,
                            (n = 2 * e + 1) < this.length && this.isHigherPriority(n, i) && (i = n),
                            r < this.length && this.isHigherPriority(r, i) && (i = r),
                            i !== e && (s = this.items[e],
                                this.items[e] = this.items[i],
                                this.items[i] = s,
                                this.heapify(i)));
                }
                ,
                e.prototype.peek = function () {
                    return this.items[0].value;
                }
                ,
                e.prototype.removeAt = function (e) {
                    var t;
                    this.items[e] = this.items[--this.length],
                        delete this.items[this.length],
                        this.heapify(),
                        this.length < this.items.length >> 2 && (t = this.items,
                            this.items = new Array(this.items.length >> 1),
                            y(t, 0, this.items, 0, this.length));
                }
                ,
                e.prototype.dequeue = function () {
                    var e = this.peek();
                    return this.removeAt(0),
                        e;
                }
                ,
                e.prototype.enqueue = function (t) {
                    var i; let
                        n;
                    this.length >= this.items.length && (n = this.items,
                        this.items = new Array(2 * this.items.length),
                        y(n, 0, this.items, 0, n.length)),
                        i = this.length++,
                        this.items[i] = new E(e.count++, t),
                        this.percolate(i);
                }
                ,
                e.prototype.remove = function (e) {
                    for (var t = 0; t < this.length; t++) {
                        if (this.items[t].value === e) {
                            return this.removeAt(t),
                                !0;
                        }
                    }
                    return !1;
                }
                ,
                e.count = 0,
                e;
        }();
        var C = i.CompositeDisposable = function () {
            function e() {
                var e = b(arguments, 0);
                this.disposables = g.fromArray(e),
                    this.isDisposed = !1,
                    this.length = this.disposables.length;
            }
            return e.prototype.add = function (e) {
                this.isDisposed ? e.dispose() : (this.disposables.add(e),
                    this.length++);
            }
                ,
                e.prototype.remove = function (e) {
                    var t = !1;
                    return this.isDisposed || (t = this.disposables.remove(e),
                        this.length--),
                        t && e.dispose(),
                        t;
                }
                ,
                e.prototype.dispose = function () {
                    var e;
                    if (this.isDisposed || (this.isDisposed = !0,
                        e = this.disposables.toArray(),
                        this.disposables.clear(),
                        this.length = 0),
                        e) { for (var t = 0, i = e.length; t < i; t++) e[t].dispose(); }
                }
                ,
                e.prototype.clear = function () {
                    var e = this.disposables.toArray();
                    this.disposables.clear(),
                        this.length = 0;
                    for (var t = 0, i = e.length; t < i; t++) { e[t].dispose(); }
                }
                ,
                e.prototype.contains = function (e) {
                    return this.disposables.contains(e);
                }
                ,
                e.prototype.toArray = function () {
                    return this.disposables.toArray();
                }
                ,
                e;
        }();
        var S = i.Disposable = function () {
            function e(e) {
                this.isDisposed = !1,
                    this.action = e;
            }
            return e.prototype.dispose = function () {
                this.isDisposed || (this.action(),
                    this.isDisposed = !0);
            }
                ,
                e;
        }();
        var P = S.create = function (e) {
            return new S(e);
        };
        var A = S.empty = new S(function () { });
        var k = i.SingleAssignmentDisposable = function () {
            function e() {
                this.isDisposed = !1,
                    this.current = null;
            }
            return e.prototype.disposable = function (e) {
                return e ? this.setDisposable(e) : this.getDisposable();
            }
                ,
                e.prototype.getDisposable = function () {
                    return this.current;
                }
                ,
                e.prototype.setDisposable = function (e) {
                    if (this.current !== null) { throw new Error('Disposable has already been assigned'); }
                    var t = this.isDisposed;
                    t || (this.current = e),
                        t && e !== null && e.dispose();
                }
                ,
                e.prototype.dispose = function () {
                    var e = null;
                    this.isDisposed || (this.isDisposed = !0,
                        e = this.current,
                        this.current = null),
                        e !== null && e.dispose();
                }
                ,
                e;
        }();
        var x = i.SerialDisposable = function () {
            function e() {
                this.isDisposed = !1,
                    this.current = null;
            }
            return e.prototype.getDisposable = function () {
                return this.current;
            }
                ,
                e.prototype.setDisposable = function (e) {
                    var t = this.isDisposed;
                    var i = null;
                    t || (i = this.current,
                        this.current = e),
                        i !== null && i.dispose(),
                        t && e !== null && e.dispose();
                }
                ,
                e.prototype.disposable = function (e) {
                    if (!e) { return this.getDisposable(); }
                    this.setDisposable(e);
                }
                ,
                e.prototype.dispose = function () {
                    var e = null;
                    this.isDisposed || (this.isDisposed = !0,
                        e = this.current,
                        this.current = null),
                        e !== null && e.dispose();
                }
                ,
                e;
        }();
        var w = i.RefCountDisposable = function () {
            function e(e) {
                this.underlyingDisposable = e,
                    this.isDisposed = !1,
                    this.isPrimaryDisposed = !1,
                    this.count = 0;
            }
            e.prototype.dispose = function () {
                this.isDisposed || this.isPrimaryDisposed || (this.isPrimaryDisposed = !0,
                    this.count === 0 && (this.isDisposed = !0,
                        this.underlyingDisposable.dispose()));
            }
                ,
                e.prototype.getDisposable = function () {
                    return this.isDisposed ? A : new t(this);
                };
            var t = function () {
                function e(e) {
                    this.disposable = e,
                        this.disposable.count++,
                        this.isInnerDisposed = !1;
                }
                return e.prototype.dispose = function () {
                    this.disposable.isDisposed || this.isInnerDisposed || (this.isInnerDisposed = !0,
                        this.disposable.count--,
                        this.disposable.count === 0 && this.disposable.isPrimaryDisposed && (this.disposable.isDisposed = !0,
                            this.disposable.underlyingDisposable.dispose()));
                }
                    ,
                    e;
            }();
            return e;
        }();
        var I = function () {
            function e(e, t) {
                this.scheduler = e,
                    this.disposable = t,
                    this.isDisposed = !1;
            }
            return e.prototype.dispose = function () {
                var e = this;
                this.scheduler.schedule(function () {
                    e.isDisposed || (e.isDisposed = !0,
                        e.disposable.dispose());
                });
            }
                ,
                e;
        }();
        var M = function () {
            function e(e, t, i, n, r) {
                this.scheduler = e,
                    this.state = t,
                    this.action = i,
                    this.dueTime = n,
                    this.comparer = r || function (e, t) {
                        return e - t;
                    }
                    ,
                    this.disposable = new k();
            }
            return e.prototype.invoke = function () {
                return this.disposable.disposable(this.invokeCore());
            }
                ,
                e.prototype.compareTo = function (e) {
                    return this.comparer(this.dueTime, e.dueTime);
                }
                ,
                e.prototype.isCancelled = function () {
                    return this.disposable.isDisposed;
                }
                ,
                e.prototype.invokeCore = function () {
                    return this.action(this.scheduler, this.state);
                }
                ,
                e;
        }();
        var L = i.Scheduler = function () {
            function e(e, t, i, n) {
                this.now = e,
                    this._schedule = t,
                    this._scheduleRelative = i,
                    this._scheduleAbsolute = n;
            }
            var t = function (e, t) {
                return t(),
                    A;
            };
            return e.prototype.schedule = function (e) {
                return this._schedule(e, t);
            }
                ,
                e.prototype.scheduleWithState = function (e, t) {
                    return this._schedule(e, t);
                }
                ,
                e.prototype.scheduleWithRelative = function (e, i) {
                    return this._scheduleRelative(i, e, t);
                }
                ,
                e.prototype.scheduleWithRelativeAndState = function (e, t, i) {
                    return this._scheduleRelative(e, t, i);
                }
                ,
                e.prototype.scheduleWithAbsolute = function (e, i) {
                    return this._scheduleAbsolute(i, e, t);
                }
                ,
                e.prototype.scheduleWithAbsoluteAndState = function (e, t, i) {
                    return this._scheduleAbsolute(e, t, i);
                }
                ,
                e.prototype.scheduleRecursive = function (e) {
                    return this.scheduleRecursiveWithState(e, function (e, t) {
                        e(function () {
                            t(e);
                        });
                    });
                }
                ,
                e.prototype.scheduleRecursiveWithState = function (e, t) {
                    return this.scheduleWithState({
                        first: e,
                        second: t,
                    }, function (e, t) {
                        var i; var n; var r; var s; var a; var o;
                        return i = e,
                            r = (n = t).first,
                            s = n.second,
                            a = new C(),
                            (o = function (e) {
                                s(e, function (e) {
                                    var t = !1;
                                    var n = !1;
                                    var r = i.scheduleWithState(e, function (e, i) {
                                        return t ? a.remove(r) : n = !0,
                                            o(i),
                                            A;
                                    });
                                    n || (a.add(r),
                                        t = !0);
                                });
                            }
                            )(r),
                            a;
                    });
                }
                ,
                e.prototype.scheduleRecursiveWithRelative = function (e, t) {
                    return this.scheduleRecursiveWithRelativeAndState(t, e, function (e, t) {
                        e(function (i) {
                            t(e, i);
                        });
                    });
                }
                ,
                e.prototype.scheduleRecursiveWithRelativeAndState = function (e, t, i) {
                    return this._scheduleRelative({
                        first: e,
                        second: i,
                    }, t, function (e, t) {
                        return i = e,
                            r = (n = t).first,
                            s = n.second,
                            a = new C(),
                            (o = function (e) {
                                s(e, function (e, t) {
                                    var n; var r; let
                                        s;
                                    r = !1,
                                        s = !1,
                                        n = i.scheduleWithRelativeAndState(e, t, function (e, t) {
                                            return r ? a.remove(n) : s = !0,
                                                o(t),
                                                A;
                                        }),
                                        s || (a.add(n),
                                            r = !0);
                                });
                            }
                            )(r),
                            a;
                        var i; var n; var r; var s; var a; var o;
                    });
                }
                ,
                e.prototype.scheduleRecursiveWithAbsolute = function (e, t) {
                    return this.scheduleRecursiveWithAbsoluteAndState(t, e, function (e, t) {
                        e(function (i) {
                            t(e, i);
                        });
                    });
                }
                ,
                e.prototype.scheduleRecursiveWithAbsoluteAndState = function (e, t, i) {
                    return this._scheduleAbsolute({
                        first: e,
                        second: i,
                    }, t, function (e, t) {
                        return i = e,
                            r = (n = t).first,
                            s = n.second,
                            a = new C(),
                            (o = function (e) {
                                s(e, function (e, t) {
                                    var n = !1;
                                    var r = !1;
                                    var s = i.scheduleWithAbsoluteAndState(e, t, function (e, t) {
                                        return n ? a.remove(s) : r = !0,
                                            o(t),
                                            A;
                                    });
                                    r || (a.add(s),
                                        n = !0);
                                });
                            }
                            )(r),
                            a;
                        var i; var n; var r; var s; var a; var o;
                    });
                }
                ,
                e.now = r,
                e.normalize = function (e) {
                    return e < 0 && (e = 0),
                        e;
                }
                ,
                e;
        }();
        var N = function () {
            function e() {
                var t = this;
                e.base.constructor.call(this, r, function (e, i) {
                    return i(t, e);
                }, function (e, i, n) {
                    for (; L.normalize(i) > 0;);
                    return n(t, e);
                }, function (e, i, n) {
                    return t.scheduleWithRelativeAndState(e, i - t.now(), n);
                });
            }
            return u(e, L),
                e;
        }();
        var R = L.Immediate = new N();
        var D = function () {
            function e() {
                O.queue = new T(4);
            }
            return e.prototype.dispose = function () {
                O.queue = null;
            }
                ,
                e.prototype.run = function () {
                    for (var e, t = O.queue; t.length > 0;) {
                        if (!(e = t.dequeue()).isCancelled()) {
                            for (; e.dueTime - L.now() > 0;);
                            e.isCancelled() || e.invoke();
                        }
                    }
                }
                ,
                e;
        }();
        var O = function () {
            function e() {
                var t = this;
                e.base.constructor.call(this, r, function (e, i) {
                    return t.scheduleWithRelativeAndState(e, 0, i);
                }, function (i, n, r) {
                    var s; var a = t.now() + L.normalize(n); var o = e.queue; var
                        l = new M(t, i, r, a);
                    if (o === null) {
                        s = new D();
                        try {
                            e.queue.enqueue(l),
                                s.run();
                        } finally {
                            s.dispose();
                        }
                    } else { o.enqueue(l); }
                    return l.disposable;
                }, function (e, i, n) {
                    return t.scheduleWithRelativeAndState(e, i - t.now(), n);
                });
            }
            return u(e, L),
                e.prototype.scheduleRequired = function () {
                    return e.queue === null;
                }
                ,
                e.prototype.ensureTrampoline = function (e) {
                    return this.scheduleRequired() ? this.schedule(e) : e();
                }
                ,
                e.queue = null,
                e;
        }();
        var V = L.CurrentThread = new O();
        i.VirtualTimeScheduler = function () {
            function e(t, i) {
                var n = this;
                this.clock = t,
                    this.comparer = i,
                    this.isEnabled = !1,
                    e.base.constructor.call(this, function () {
                        return n.toDateTimeOffset(n.clock);
                    }, function (e, t) {
                        return n.scheduleAbsolute(e, n.clock, t);
                    }, function (e, t, i) {
                        return n.scheduleRelative(e, n.toRelative(t), i);
                    }, function (e, t, i) {
                        return n.scheduleRelative(e, n.toRelative(t - n.now()), i);
                    }),
                    this.queue = new T(1024);
            }
            return u(e, L),
                e.prototype.scheduleRelative = function (e, t, i) {
                    var n = this.add(this.clock, t);
                    return this.scheduleAbsolute(e, n, i);
                }
                ,
                e.prototype.start = function () {
                    var e;
                    if (!this.isEnabled) {
                        this.isEnabled = !0;
                        do {
                            (e = this.getNext()) !== null ? (this.comparer(e.dueTime, this.clock) > 0 && (this.clock = e.dueTime),
                                e.invoke()) : this.isEnabled = !1;
                        } while (this.isEnabled);
                    }
                }
                ,
                e.prototype.stop = function () {
                    return this.isEnabled = !1;
                }
                ,
                e.prototype.advanceTo = function (e) {
                    var t;
                    if (this.comparer(this.clock, e) >= 0) { throw new Error(h); }
                    if (!this.isEnabled) {
                        this.isEnabled = !0;
                        do {
                            (t = this.getNext()) !== null && this.comparer(t.dueTime, e) <= 0 ? (this.comparer(t.dueTime, this.clock) > 0 && (this.clock = t.dueTime),
                                t.invoke()) : this.isEnabled = !1;
                        } while (this.isEnabled);
                        return this.clock = e;
                    }
                }
                ,
                e.prototype.advanceBy = function (e) {
                    var t = this.add(this.clock, e);
                    if (this.comparer(this.clock, t) >= 0) { throw new Error(h); }
                    return this.advanceTo(t);
                }
                ,
                e.prototype.getNext = function () {
                    for (var e; this.queue.length > 0;) {
                        if (!(e = this.queue.peek()).isCancelled()) { return e; }
                        this.queue.dequeue();
                    }
                    return null;
                }
                ,
                e.prototype.scheduleAbsolute = function (e, t, i) {
                    var n = this;
                    var r = new M(n, e, function (e, t) {
                        return n.queue.remove(r),
                            i(e, t);
                    },
                        t, n.comparer);
                    return n.queue.enqueue(r),
                        r.disposable;
                }
                ,
                e;
        }();
        var F = function () {
            function t(i) {
                var n = this;
                t.base.constructor.call(this, r, function (t, r) {
                    var s = new k();
                    var a = e.setTimeout(function () {
                        s.setDisposable(r(n, t));
                    }, i || 0);
                    return new C(s, P(function () {
                        e.clearTimeout(a);
                    }));
                }, function (t, i, r) {
                    var s = new k();
                    var a = L.normalize(i);
                    var o = e.setTimeout(function () {
                        s.setDisposable(r(n, t));
                    }, a);
                    return new C(s, P(function () {
                        e.clearTimeout(o);
                    }));
                }, function (e, t, i) {
                    return n.scheduleWithRelativeAndState(e, t - n.now(), i);
                });
            }
            return u(t, L),
                t;
        }();
        var B = L.Timeout = new F();
        i.TimeoutScheduler = F;
        var U = i.Notification = function () {
            function e() { }
            return e.prototype.accept = function (e, t, i) {
                return arguments.length > 1 || typeof e === 'function' ? this._accept(e, t, i) : this._acceptObservable(e);
            }
                ,
                e.prototype.toObservable = function (e) {
                    var t = this;
                    return e = e || L.Immediate,
                        ge(function (i) {
                            return e.schedule(function () {
                                t._acceptObservable(i),
                                    t.kind === 'N' && i.onCompleted();
                            });
                        });
                }
                ,
                e.prototype.hasValue = !1,
                e.prototype.equals = function (e) {
                    var i = e === t || e === null ? '' : e.toString();
                    return this.toString() === i;
                }
                ,
                e;
        }();
        U.createOnNext = function (e) {
            var t = new U();
            return t.value = e,
                t.hasValue = !0,
                t.kind = 'N',
                t._accept = function (e) {
                    return e(this.value);
                }
                ,
                t._acceptObservable = function (e) {
                    return e.onNext(this.value);
                }
                ,
                t.toString = function () {
                    return `OnNext(${this.value})`;
                }
                ,
                t;
        }
            ,
            U.createOnError = function (e) {
                var t = new U();
                return t.exception = e,
                    t.kind = 'E',
                    t._accept = function (e, t) {
                        return t(this.exception);
                    }
                    ,
                    t._acceptObservable = function (e) {
                        return e.onError(this.exception);
                    }
                    ,
                    t.toString = function () {
                        return `OnError(${this.exception})`;
                    }
                    ,
                    t;
            }
            ,
            U.createOnCompleted = function () {
                var e = new U();
                return e.kind = 'C',
                    e._accept = function (e, t, i) {
                        return i();
                    }
                    ,
                    e._acceptObservable = function (e) {
                        return e.onCompleted();
                    }
                    ,
                    e.toString = function () {
                        return 'OnCompleted()';
                    }
                    ,
                    e;
            };
        var H = i.Internals.Enumerator = function (e, t, i) {
            this.moveNext = e,
                this.getCurrent = t,
                this.dispose = i;
        };
        var G = H.create = function (e, t, i) {
            var r = !1;
            return i || (i = n),
                new H(function () {
                    if (r) { return !1; }
                    var t = e();
                    return t || (r = !0,
                        i()),
                        t;
                },
                    function () {
                        return t();
                    },
                    function () {
                        r || (i(),
                            r = !0);
                    });
        };
        var z = i.Internals.Enumerable = function (e) {
            this.getEnumerator = e;
        };
        var Y = z.prototype;
        Y.concat = function () {
            var e = this;
            return ge(function (t) {
                var i; var n = e.getEnumerator(); var r = !1; var
                    s = new x();
                return i = R.scheduleRecursive(function (e) {
                    var i; var a; var o; let
                        l = !1;
                    if (!r) {
                        try {
                            (l = n.moveNext()) ? i = n.getCurrent() : n.dispose();
                        } catch (e) {
                            o = e,
                                n.dispose();
                        }
                        o ? t.onError(o) : l ? (a = new k(),
                            s.disposable(a),
                            a.disposable(i.subscribe(function (e) {
                                t.onNext(e);
                            }, function (e) {
                                t.onError(e);
                            }, function () {
                                e();
                            }))) : t.onCompleted();
                    }
                }),
                    new C(s, i, P(function () {
                        r = !0,
                            n.dispose();
                    }));
            });
        }
            ,
            Y.catchException = function () {
                var e = this;
                return ge(function (t) {
                    var i; var n; var r; var s = e.getEnumerator(); let
                        a = !1;
                    return n = new x(),
                        i = R.scheduleRecursive(function (e) {
                            var i; var o; var l; let
                                u;
                            if (u = !1,
                                !a) {
                                try {
                                    (u = s.moveNext()) && (i = s.getCurrent());
                                } catch (e) {
                                    l = e;
                                }
                                l ? t.onError(l) : u ? (o = new k(),
                                    n.disposable(o),
                                    o.disposable(i.subscribe(function (e) {
                                        t.onNext(e);
                                    }, function (t) {
                                        r = t,
                                            e();
                                    }, function () {
                                        t.onCompleted();
                                    }))) : r ? t.onError(r) : t.onCompleted();
                            }
                        }),
                        new C(n, i, P(function () {
                            a = !0;
                        }));
                });
            };
        var W = z.repeat = function (e, i) {
            return i === t && (i = -1),
                new z(function () {
                    var t; let
                        n = i;
                    return G(function () {
                        return n !== 0 && (n > 0 && n--,
                            t = e,
                            !0);
                    }, function () {
                        return t;
                    });
                });
        };
        var q = z.forEach = function (e, t) {
            return t || (t = a),
                new z(function () {
                    var i; let
                        n = -1;
                    return G(function () {
                        return ++n < e.length && (i = t(e[n], n),
                            !0);
                    }, function () {
                        return i;
                    });
                });
        };
        var K = i.Observer = function () { };
        var j = i.Internals.AbstractObserver = function () {
            function e() {
                this.isStopped = !1;
            }
            return u(e, K),
                e.prototype.onNext = function (e) {
                    this.isStopped || this.next(e);
                }
                ,
                e.prototype.onError = function (e) {
                    this.isStopped || (this.isStopped = !0,
                        this.error(e));
                }
                ,
                e.prototype.onCompleted = function () {
                    this.isStopped || (this.isStopped = !0,
                        this.completed());
                }
                ,
                e.prototype.dispose = function () {
                    this.isStopped = !0;
                }
                ,
                e;
        }();
        var Z = function () {
            function e(t, i, n) {
                e.base.constructor.call(this),
                    this._onNext = t,
                    this._onError = i,
                    this._onCompleted = n;
            }
            return u(e, j),
                e.prototype.next = function (e) {
                    this._onNext(e);
                }
                ,
                e.prototype.error = function (e) {
                    this._onError(e);
                }
                ,
                e.prototype.completed = function () {
                    this._onCompleted();
                }
                ,
                e;
        }();
        var X = i.Internals.BinaryObserver = function () {
            function e(e, t) {
                typeof e === 'function' && typeof t === 'function' ? (this.leftObserver = J(e),
                    this.rightObserver = J(t)) : (this.leftObserver = e,
                        this.rightObserver = t);
            }
            return u(e, K),
                e.prototype.onNext = function (e) {
                    var t = this;
                    return e.switchValue(function (e) {
                        return e.accept(t.leftObserver);
                    }, function (e) {
                        return e.accept(t.rightObserver);
                    });
                }
                ,
                e.prototype.onError = function () { }
                ,
                e.prototype.onCompleted = function () { }
                ,
                e;
        }();
        var Q = function () {
            function e(e, t) {
                this.scheduler = e,
                    this.observer = t,
                    this.isAcquired = !1,
                    this.hasFaulted = !1,
                    this.queue = [],
                    this.disposable = new x();
            }
            return u(e, j),
                e.prototype.ensureActive = function () {
                    var e = !1;
                    var t = this;
                    !this.hasFaulted && this.queue.length > 0 && (e = !this.isAcquired,
                        this.isAcquired = !0),
                        e && this.disposable.disposable(this.scheduler.scheduleRecursive(function (e) {
                            var i;
                            if (t.queue.length > 0) {
                                i = t.queue.shift();
                                try {
                                    i();
                                } catch (e) {
                                    throw t.queue = [],
                                    t.hasFaulted = !0,
                                    e;
                                }
                                e();
                            } else { t.isAcquired = !1; }
                        }));
                }
                ,
                e.prototype.next = function (e) {
                    var t = this;
                    this.queue.push(function () {
                        t.observer.onNext(e);
                    });
                }
                ,
                e.prototype.error = function (e) {
                    var t = this;
                    this.queue.push(function () {
                        t.observer.onError(e);
                    });
                }
                ,
                e.prototype.completed = function () {
                    var e = this;
                    this.queue.push(function () {
                        e.observer.onCompleted();
                    });
                }
                ,
                e.prototype.dispose = function () {
                    e.base.dispose.call(this),
                        this.disposable.dispose();
                }
                ,
                e;
        }();
        var $ = K.create = function (e, t, i) {
            return e || (e = n),
                t || (t = function (e) {
                    throw e;
                }
                ),
                i || (i = n),
                new Z(e, t, i);
        };
        var J = (K.fromNotifier = function (e) {
            return new Z(function (t) {
                return e(U.createOnNext(t));
            },
                function (t) {
                    return e(U.createOnError(t));
                },
                function () {
                    return e(U.createOnCompleted());
                });
        }
            ,
            function (e) {
                return new Z(function (t) {
                    e(U.createOnNext(t));
                },
                    function (t) {
                        e(U.createOnError(t));
                    },
                    function () {
                        e(U.createOnCompleted());
                    });
            }
        );
        K.prototype.toNotifier = function () {
            var e = this;
            return function (t) {
                return t.accept(e);
            };
        }
            ,
            K.prototype.asObserver = function () {
                var e = this;
                return new Z(function (t) {
                    return e.onNext(t);
                },
                    function (t) {
                        return e.onError(t);
                    },
                    function () {
                        return e.onCompleted();
                    });
            };
        var ee = i.Observable = function () {
            function e() { }
            return e.prototype.subscribe = function (e, t, i) {
                var n;
                return n = arguments.length === 0 || arguments.length > 1 || typeof e === 'function' ? $(e, t, i) : e,
                    this._subscribe(n);
            }
                ,
                e;
        }();
        var te = ee.prototype;
        var ie = function () {
            function e(t) {
                e.base.constructor.call(this),
                    this._subscribe = function (e) {
                        var i = new ne(e);
                        return V.scheduleRequired() ? V.schedule(function () {
                            i.disposable(t(i));
                        }) : i.disposable(t(i)),
                            i;
                    };
            }
            return u(e, ee),
                e.prototype._subscribe = function (e) {
                    return this._subscribe(e);
                }
                ,
                e;
        }();
        var ne = function () {
            function e(t) {
                e.base.constructor.call(this),
                    this.observer = t,
                    this.m = new k();
            }
            return u(e, j),
                e.prototype.disposable = function (e) {
                    return this.m.disposable(e);
                }
                ,
                e.prototype.next = function (e) {
                    this.observer.onNext(e);
                }
                ,
                e.prototype.error = function (e) {
                    this.observer.onError(e),
                        this.m.dispose();
                }
                ,
                e.prototype.completed = function () {
                    this.observer.onCompleted(),
                        this.m.dispose();
                }
                ,
                e.prototype.dispose = function () {
                    e.base.dispose.call(this),
                        this.m.dispose();
                }
                ,
                e;
        }();
        var re = function () {
            function e(t, i, n) {
                e.base.constructor.call(this),
                    this.key = t,
                    this.underlyingObservable = n ? ge(function (e) {
                        return new C(n.getDisposable(), i.subscribe(e));
                    }) : i;
            }
            return u(e, ee),
                e.prototype._subscribe = function (e) {
                    return this.underlyingObservable.subscribe(e);
                }
                ,
                e;
        }();
        var se = i.ConnectableObservable = function () {
            function e(e, t) {
                var i = {
                    subject: t,
                    source: e.asObservable(),
                    hasSubscription: !1,
                    subscription: null,
                };
                this.connect = function () {
                    return i.hasSubscription || (i.hasSubscription = !0,
                        i.subscription = new C(i.source.subscribe(i.subject), P(function () {
                            i.hasSubscription = !1;
                        }))),
                        i.subscription;
                }
                    ,
                    this._subscribe = function (e) {
                        return i.subject.subscribe(e);
                    };
            }
            return u(e, ee),
                e.prototype.connect = function () {
                    return this.connect();
                }
                ,
                e.prototype.refCount = function () {
                    var e = null;
                    var t = 0;
                    var i = this;
                    return ge(function (n) {
                        var r; let
                            s;
                        return r = ++t === 1,
                            s = i.subscribe(n),
                            r && (e = i.connect()),
                            P(function () {
                                s.dispose(),
                                    --t === 0 && e.dispose();
                            });
                    });
                }
                ,
                e.prototype._subscribe = function (e) {
                    return this._subscribe(e);
                }
                ,
                e;
        }();
        var ae = function () {
            function e(e, t) {
                this.subject = e,
                    this.observer = t;
            }
            return e.prototype.dispose = function () {
                this.subject.isDisposed || this.observer === null || (this.subject.observers.remove(this.observer),
                    this.observer = null);
            }
                ,
                e;
        }();
        var oe = i.Subject = function () {
            function e() {
                e.base.constructor.call(this),
                    this.isDisposed = !1,
                    this.isStopped = !1,
                    this.observers = new g();
            }
            u(e, ee),
                c(e, K);
            var t = function () {
                if (this.isDisposed) { throw new Error(p); }
            };
            return e.prototype.onCompleted = function () {
                var e;
                if (t.call(this),
                    this.isStopped || (e = this.observers.toArray(),
                        this.observers = new g(),
                        this.isStopped = !0),
                    e) { for (var i = 0, n = e.length; i < n; i++) e[i].onCompleted(); }
            }
                ,
                e.prototype.onError = function (e) {
                    var i;
                    if (t.call(this),
                        this.isStopped || (i = this.observers.toArray(),
                            this.observers = new g(),
                            this.isStopped = !0,
                            this.exception = e),
                        i) { for (var n = 0, r = i.length; n < r; n++) i[n].onError(e); }
                }
                ,
                e.prototype.onNext = function (e) {
                    var i;
                    if (t.call(this),
                        this.isStopped || (i = this.observers.toArray()),
                        i) { for (var n = 0, r = i.length; n < r; n++) i[n].onNext(e); }
                }
                ,
                e.prototype._subscribe = function (e) {
                    return t.call(this),
                        this.isStopped ? this.exception ? (e.onError(this.exception),
                            A) : (e.onCompleted(),
                                A) : (this.observers.add(e),
                                    new ae(this, e));
                }
                ,
                e.prototype.dispose = function () {
                    this.isDisposed = !0,
                        this.observers = null;
                }
                ,
                e.create = function (e, t) {
                    return new de(e, t);
                }
                ,
                e;
        }();
        var le = i.AsyncSubject = function () {
            function e() {
                e.base.constructor.call(this),
                    this.isDisposed = !1,
                    this.isStopped = !1,
                    this.value = null,
                    this.hasValue = !1,
                    this.observers = new g(),
                    this.exception = null;
            }
            u(e, ee),
                c(e, K);
            var t = function () {
                if (this.isDisposed) { throw new Error(p); }
            };
            return e.prototype.onCompleted = function () {
                var e; var i; var n; var r; var s; let
                    a = !1;
                if (t.call(this),
                    this.isStopped || (i = this.observers.toArray(),
                        this.observers = new g(),
                        this.isStopped = !0,
                        n = this.value,
                        a = this.hasValue),
                    i) {
                    if (a) {
                        for (r = 0,
                            s = i.length; r < s; r++) {
                            (e = i[r]).onNext(n),
                                e.onCompleted();
                        }
                    } else {
                        for (r = 0,
                            s = i.length; r < s; r++) i[r].onCompleted();
                    }
                }
            }
                ,
                e.prototype.onError = function (e) {
                    var i;
                    if (t.call(this),
                        this.isStopped || (i = this.observers.toArray(),
                            this.observers = new g(),
                            this.isStopped = !0,
                            this.exception = e),
                        i) { for (var n = 0, r = i.length; n < r; n++) i[n].onError(e); }
                }
                ,
                e.prototype.onNext = function (e) {
                    t.call(this),
                        this.isStopped || (this.value = e,
                            this.hasValue = !0);
                }
                ,
                e.prototype._subscribe = function (e) {
                    var i; var n; let
                        r;
                    return t.call(this),
                        this.isStopped ? (i = this.exception,
                            n = this.hasValue,
                            r = this.value,
                            i ? e.onError(i) : n ? (e.onNext(r),
                                e.onCompleted()) : e.onCompleted(),
                            A) : (this.observers.add(e),
                                new ae(this, e));
                }
                ,
                e.prototype.dispose = function () {
                    this.isDisposed = !0,
                        this.observers = null,
                        this.exception = null,
                        this.value = null;
                }
                ,
                e;
        }();
        var ue = i.BehaviorSubject = function () {
            function e(t) {
                e.base.constructor.call(this),
                    this.value = t,
                    this.observers = new g(),
                    this.isDisposed = !1,
                    this.isStopped = !1,
                    this.exception = null;
            }
            u(e, ee),
                c(e, K);
            var t = function () {
                if (this.isDisposed) { throw new Error(p); }
            };
            return e.prototype.onCompleted = function () {
                var e;
                if (t.call(this),
                    this.isStopped || (e = this.observers.toArray(),
                        this.observers = new g(),
                        this.isStopped = !0),
                    e) { for (var i = 0, n = e.length; i < n; i++) e[i].onCompleted(); }
            }
                ,
                e.prototype.onError = function (e) {
                    var i;
                    if (t.call(this),
                        this.isStopped || (i = this.observers.toArray(),
                            this.observers = new g(),
                            this.isStopped = !0,
                            this.exception = e),
                        i) { for (var n = 0, r = i.length; n < r; n++) i[n].onError(e); }
                }
                ,
                e.prototype.onNext = function (e) {
                    var i;
                    if (t.call(this),
                        this.isStopped || (this.value = e,
                            i = this.observers.toArray()),
                        i) { for (var n = 0, r = i.length; n < r; n++) i[n].onNext(e); }
                }
                ,
                e.prototype._subscribe = function (e) {
                    var i;
                    return t.call(this),
                        this.isStopped ? ((i = this.exception) ? e.onError(i) : e.onCompleted(),
                            A) : (this.observers.add(e),
                                e.onNext(this.value),
                                new ae(this, e));
                }
                ,
                e.prototype.dispose = function () {
                    this.isDisposed = !0,
                        this.observers = null,
                        this.value = null,
                        this.exception = null;
                }
                ,
                e;
        }();
        var ce = i.ReplaySubject = function () {
            function e(e, i, n) {
                this.bufferSize = e === t ? Number.MAX_VALUE : e,
                    this.window = i === t ? Number.MAX_VALUE : i,
                    this.scheduler = n || V,
                    this.q = [],
                    this.observers = new g(),
                    this.isStopped = !1,
                    this.isDisposed = !1;
            }
            u(e, ee),
                c(e, ee);
            var i = function () {
                if (this.isDisposed) { throw new Error(p); }
            };
            e.prototype._trim = function (e) {
                var t = this.isStopped ? 1 : 0;
                var i = t + this.bufferSize;
                for (i < this.bufferSize && (i = this.bufferSize); this.q.length > i;) { this.q.shift(); }
                for (; this.q.length > t && e - this.q[0].timestamp > this.window;) { this.q.shift(); }
            }
                ,
                e.prototype._enqueue = function (e) {
                    var t = this.scheduler.now();
                    var i = {
                        value: e,
                        timestamp: t,
                    };
                    this.q.push(i),
                        this._trim(t);
                }
                ,
                e.prototype.onNext = function (e) {
                    var t; var n; let
                        r;
                    if (i.call(this),
                        !this.isStopped) {
                        for (t = this.observers.toArray(),
                            this._enqueue(U.createOnNext(e)),
                            n = 0,
                            r = t.length; n < r; n++) t[n].onNext(e);
                    }
                    if (t) {
                        for (n = 0,
                            r = t.length; n < r; n++) t[n].ensureActive();
                    }
                }
                ,
                e.prototype.onError = function (e) {
                    var t; var n; let
                        r;
                    if (i.call(this),
                        !this.isStopped) {
                        for (this.isStopped = !0,
                            this._enqueue(U.createOnError(e)),
                            n = 0,
                            r = (t = this.observers.toArray()).length; n < r; n++) { t[n].onError(e); }
                        this.observers = new g();
                    }
                    if (t) {
                        for (n = 0,
                            r = t.length; n < r; n++) t[n].ensureActive();
                    }
                }
                ,
                e.prototype.onCompleted = function () {
                    var e; var t; let
                        n;
                    if (i.call(this),
                        !this.isStopped) {
                        for (this.isStopped = !0,
                            this._enqueue(U.createOnCompleted()),
                            t = 0,
                            n = (e = this.observers.toArray()).length; t < n; t++) { e[t].onCompleted(); }
                        this.observers = new g();
                    }
                    if (e) {
                        for (t = 0,
                            n = e.length; t < n; t++) e[t].ensureActive();
                    }
                }
                ,
                e.prototype._subscribe = function (e) {
                    var t = new Q(this.scheduler, e);
                    var r = new n(this, t);
                    i.call(this),
                        this._trim(this.scheduler.now()),
                        this.observers.add(t);
                    for (var s = 0, a = this.q.length; s < a; s++) { this.q[s].value.accept(t); }
                    return t.ensureActive(),
                        r;
                }
                ,
                e.prototype.dispose = function () {
                    this.isDisposed = !0,
                        this.observers = null;
                };
            var n = function () {
                function e(e, t) {
                    this.subject = e,
                        this.observer = t;
                }
                return e.prototype.dispose = function () {
                    this.observer.dispose(),
                        this.subject.isDisposed || this.subject.observers.remove(this.observer);
                }
                    ,
                    e;
            }();
            return e;
        }();
        var de = function () {
            function e(e, t) {
                this.observer = e,
                    this.observable = t;
            }
            return u(e, ee),
                c(e, K),
                e.prototype.onCompleted = function () {
                    return this.observer.onCompleted();
                }
                ,
                e.prototype.onError = function (e) {
                    return this.observer.onError(e);
                }
                ,
                e.prototype.onNext = function (e) {
                    return this.observer.onNext(e);
                }
                ,
                e.prototype._subscribe = function (e) {
                    return this.observable.subscribe(e);
                }
                ,
                e;
        }();
        ee.start = function (e, t, i, n) {
            return i || (i = []),
                he(e, n).apply(t, i);
        };
        var he = ee.toAsync = function (e, t) {
            return t || (t = B),
                function () {
                    var i = new le();
                    var n = d.call(arguments);
                    var r = this;
                    return t.schedule(function () {
                        (function () {
                            var t;
                            try {
                                t = e.apply(this, arguments);
                            } catch (e) {
                                return void i.onError(e);
                            }
                            i.onNext(t),
                                i.onCompleted();
                        }
                        ).apply(r, n);
                    }),
                        i;
                };
        };
        te.multicast = function (e, t) {
            var i = this;
            return typeof e === 'function' ? ge(function (n) {
                var r = i.multicast(e());
                return new C(t(r).subscribe(n), r.connect());
            }) : new se(i, e);
        }
            ,
            te.publish = function (e) {
                return e ? this.multicast(function () {
                    return new oe();
                }, e) : this.multicast(new oe());
            }
            ,
            te.publishLast = function (e) {
                return e ? this.multicast(function () {
                    return new le();
                }, e) : this.multicast(new le());
            }
            ,
            te.replay = function (e, t, i, n) {
                return e && e !== null ? this.multicast(function () {
                    return new ce(t, i, n);
                }, e) : this.multicast(new ce(t, i, n));
            }
            ,
            te.publishValue = function (e, t) {
                return typeof e === 'function' ? this.multicast(function () {
                    return new ue(t);
                }, e) : this.multicast(new ue(e));
            };
        var pe = ee.never = function () {
            return ge(function () {
                return A;
            });
        };
        var fe = ee.empty = function (e) {
            return e || (e = R),
                ge(function (t) {
                    return e.schedule(function () {
                        t.onCompleted();
                    });
                });
        };
        var _e = ee.returnValue = function (e, t) {
            return t || (t = R),
                ge(function (i) {
                    return t.schedule(function () {
                        i.onNext(e),
                            i.onCompleted();
                    });
                });
        };
        var ve = ee.throwException = function (e, t) {
            return t || (t = R),
                ge(function (i) {
                    return t.schedule(function () {
                        i.onError(e);
                    });
                });
        };
        ee.generate = function (e, t, i, n, r) {
            return r || (r = V),
                ge(function (s) {
                    var a = !0;
                    var o = e;
                    return r.scheduleRecursive(function (e) {
                        var r; let
                            l;
                        try {
                            a ? a = !1 : o = i(o),
                                (r = t(o)) && (l = n(o));
                        } catch (e) {
                            return void s.onError(e);
                        }
                        r ? (s.onNext(l),
                            e()) : s.onCompleted();
                    });
                });
        };
        var me = ee.defer = function (e) {
            return ge(function (t) {
                var i;
                try {
                    i = e();
                } catch (e) {
                    return ve(e).subscribe(t);
                }
                return i.subscribe(t);
            });
        };
        ee.using = function (e, t) {
            return ge(function (i) {
                var n; var r; let
                    s = A;
                try {
                    (n = e()) !== null && (s = n),
                        r = t(n);
                } catch (e) {
                    return new C(ve(e).subscribe(i), s);
                }
                return new C(r.subscribe(i), s);
            });
        };
        var be = ee.fromArray = function (e, t) {
            return t || (t = V),
                ge(function (i) {
                    var n = 0;
                    return t.scheduleRecursive(function (t) {
                        n < e.length ? (i.onNext(e[n++]),
                            t()) : i.onCompleted();
                    });
                });
        };
        var ge = ee.createWithDisposable = function (e) {
            return new ie(e);
        };
        ee.create = function (e) {
            return ge(function (t) {
                return P(e(t));
            });
        }
            ,
            ee.range = function (e, t, i) {
                return i || (i = V),
                    ge(function (n) {
                        return i.scheduleRecursiveWithState(0, function (i, r) {
                            i < t ? (n.onNext(e + i),
                                r(i + 1)) : n.onCompleted();
                        });
                    });
            }
            ,
            te.repeat = function (e) {
                return W(this, e).concat();
            }
            ,
            te.retry = function (e) {
                return W(this, e).catchException();
            }
            ,
            ee.repeat = function (e, i, n) {
                return n || (n = V),
                    i === t && (i = -1),
                    _e(e, n).repeat(i);
            }
            ,
            te.select = function (e) {
                var t = this;
                return ge(function (i) {
                    var n = 0;
                    return t.subscribe(function (t) {
                        var r;
                        try {
                            r = e(t, n++);
                        } catch (e) {
                            return void i.onError(e);
                        }
                        i.onNext(r);
                    }, f(i, 'onError'), f(i, 'onCompleted'));
                });
            }
            ,
            te.where = function (e) {
                var t = this;
                return ge(function (i) {
                    var n = 0;
                    return t.subscribe(function (t) {
                        var r;
                        try {
                            r = e(t, n++);
                        } catch (e) {
                            return void i.onError(e);
                        }
                        r && i.onNext(t);
                    }, f(i, 'onError'), f(i, 'onCompleted'));
                });
            }
            ,
            te.groupByUntil = function (e, i, n, r) {
                var s = this;
                return i || (i = a),
                    r || (r = o),
                    ge(function (a) {
                        var o = {};
                        var l = new C();
                        var u = new w(l);
                        return l.add(s.subscribe(function (s) {
                            var c; var d; var h; var p; var f; var _; var v; var m; var b; var g; let
                                y;
                            try {
                                v = e(s),
                                    m = r(v);
                            } catch (e) {
                                for (y in o) { o[y].onError(e); }
                                return void a.onError(e);
                            }
                            f = !1;
                            try {
                                (g = o[m]) || (g = new oe(),
                                    o[m] = g,
                                    f = !0);
                            } catch (e) {
                                for (y in o) { o[y].onError(e); }
                                return void a.onError(e);
                            }
                            if (f) {
                                _ = new re(v, g, u),
                                    d = new re(v, g);
                                try {
                                    c = n(d);
                                } catch (e) {
                                    for (y in o) { o[y].onError(e); }
                                    return void a.onError(e);
                                }
                                a.onNext(_),
                                    b = new k(),
                                    l.add(b),
                                    p = function () {
                                        o[m] !== t && (delete o[m],
                                            g.onCompleted()),
                                            l.remove(b);
                                    }
                                    ,
                                    b.disposable(c.take(1).subscribe(function () { }, function (e) {
                                        for (y in o) { o[y].onError(e); }
                                        a.onError(e);
                                    }, function () {
                                        p();
                                    }));
                            }
                            try {
                                h = i(s);
                            } catch (e) {
                                for (y in o) { o[y].onError(e); }
                                return void a.onError(e);
                            }
                            g.onNext(h);
                        }, function (e) {
                            for (var t in o) { o[t].onError(e); }
                            a.onError(e);
                        }, function () {
                            for (var e in o) { o[e].onCompleted(); }
                            a.onCompleted();
                        })),
                            u;
                    });
            }
            ,
            te.groupBy = function (e, t, i) {
                return this.groupByUntil(e, t, function () {
                    return pe();
                }, i);
            }
            ,
            te.take = function (e, t) {
                if (e < 0) { throw new Error(h); }
                if (e === 0) { return fe(t); }
                var i = this;
                return ge(function (t) {
                    var n = e;
                    return i.subscribe(function (e) {
                        n > 0 && (n--,
                            t.onNext(e),
                            n === 0 && t.onCompleted());
                    }, f(t, 'onError'), f(t, 'onCompleted'));
                });
            }
            ,
            te.skip = function (e) {
                if (e < 0) { throw new Error(h); }
                var t = this;
                return ge(function (i) {
                    var n = e;
                    return t.subscribe(function (e) {
                        n <= 0 ? i.onNext(e) : n--;
                    }, f(i, 'onError'), f(i, 'onCompleted'));
                });
            }
            ,
            te.takeWhile = function (e) {
                var t = this;
                return ge(function (i) {
                    var n = 0;
                    var r = !0;
                    return t.subscribe(function (t) {
                        if (r) {
                            try {
                                r = e(t, n++);
                            } catch (e) {
                                return void i.onError(e);
                            }
                            r ? i.onNext(t) : i.onCompleted();
                        }
                    }, f(i, 'onError'), f(i, 'onCompleted'));
                });
            }
            ,
            te.skipWhile = function (e) {
                var t = this;
                return ge(function (i) {
                    var n = 0;
                    var r = !1;
                    return t.subscribe(function (t) {
                        if (!r) {
                            try {
                                r = !e(t, n++);
                            } catch (e) {
                                return void i.onError(e);
                            }
                        }
                        r && i.onNext(t);
                    }, f(i, 'onError'), f(i, 'onCompleted'));
                });
            }
            ,
            te.selectMany = function (e, t) {
                return t ? this.selectMany(function (i) {
                    return e(i).select(function (e) {
                        return t(i, e);
                    });
                }) : typeof e === 'function' ? ye.call(this, e) : ye.call(this, function () {
                    return e;
                });
            };
        var ye = function (e) {
            return this.select(e).mergeObservable();
        };
        te.finalValue = function () {
            var e = this;
            return ge(function (t) {
                var i; let
                    n = !1;
                return e.subscribe(function (e) {
                    n = !0,
                        i = e;
                }, function (e) {
                    t.onError(e);
                }, function () {
                    n ? (t.onNext(i),
                        t.onCompleted()) : t.onError(new Error('Sequence contains no elements.'));
                });
            });
        }
            ,
            te.toArray = function () {
                return this.scan([], function (e, t) {
                    return e.push(t),
                        e;
                }).startWith([]).finalValue();
            }
            ,
            te.materialize = function () {
                var e = this;
                return ge(function (t) {
                    return e.subscribe(function (e) {
                        t.onNext(U.createOnNext(e));
                    }, function (e) {
                        t.onNext(U.createOnError(e)),
                            t.onCompleted();
                    }, function () {
                        t.onNext(U.createOnCompleted()),
                            t.onCompleted();
                    });
                });
            }
            ,
            te.dematerialize = function () {
                var e = this;
                return ge(function (t) {
                    return e.subscribe(function (e) {
                        return e.accept(t);
                    }, f(t, 'onError'), f(t, 'onCompleted'));
                });
            }
            ,
            te.asObservable = function () {
                var e = this;
                return ge(function (t) {
                    return e.subscribe(t);
                });
            }
            ,
            te.windowWithCount = function (e, i) {
                var n = this;
                if (e <= 0) { throw new Error(h); }
                if (i === t && (i = e),
                    i <= 0) { throw new Error(h); }
                return ge(function (t) {
                    var r = new k();
                    var s = new w(r);
                    var a = 0;
                    var o = [];
                    var l = function () {
                        var e2; var i; var
                            n = new oe();
                        o.push(n),
                            t.onNext((e2 = n,
                                i = s,
                                ge(function (t) {
                                    return new C(i.getDisposable(), e2.subscribe(t));
                                })));
                    };
                    return l(),
                        r.disposable(n.subscribe(function (t) {
                            var n; let
                                r;
                            for (r = 0; r < o.length; r++) { o[r].onNext(t); }
                            (n = a - e + 1) >= 0 && n % i == 0 && o.shift().onCompleted(),
                                ++a % i == 0 && l();
                        }, function (e) {
                            for (; o.length > 0;) { o.shift().onError(e); }
                            t.onError(e);
                        }, function () {
                            for (; o.length > 0;) { o.shift().onCompleted(); }
                            t.onCompleted();
                        })),
                        s;
                });
            }
            ,
            te.bufferWithCount = function (e, i) {
                return i === t && (i = e),
                    this.windowWithCount(e, i).selectMany(function (e) {
                        return e.toArray();
                    }).where(function (e) {
                        return e.length > 0;
                    });
            }
            ,
            te.startWith = function () {
                var e; var t; let
                    i = 0;
                return arguments.length > 0 && arguments[0] !== null && void 0 !== arguments[0].now ? (t = arguments[0],
                    i = 1) : t = R,
                    e = d.call(arguments, i),
                    q([be(e, t), this]).concat();
            }
            ,
            te.scan = function () {
                var e; var t; let
                    i = !1;
                arguments.length === 2 ? (e = arguments[0],
                    t = arguments[1],
                    i = !0) : t = arguments[0];
                var n = this;
                return me(function () {
                    var r; let
                        s = !1;
                    return n.select(function (n) {
                        return s ? r = t(r, n) : (r = i ? t(e, n) : n,
                            s = !0),
                            r;
                    });
                });
            }
            ,
            te.distinctUntilChanged = function (e, t) {
                var i = this;
                return e || (e = a),
                    t || (t = s),
                    ge(function (n) {
                        var r; let
                            s = !1;
                        return i.subscribe(function (i) {
                            var a; let
                                o = !1;
                            try {
                                a = e(i);
                            } catch (e) {
                                return void n.onError(e);
                            }
                            if (s) {
                                try {
                                    o = t(r, a);
                                } catch (e) {
                                    return void n.onError(e);
                                }
                            }
                            s && o || (s = !0,
                                r = a,
                                n.onNext(i));
                        }, f(n, 'onError'), f(n, 'onCompleted'));
                    });
            }
            ,
            te.finallyAction = function (e) {
                var t = this;
                return ge(function (i) {
                    var n = t.subscribe(i);
                    return P(function () {
                        try {
                            n.dispose();
                        } finally {
                            e();
                        }
                    });
                });
            }
            ,
            te.doAction = function (e, t, i) {
                var n; var
                    r = this;
                return typeof e === 'function' ? n = e : (n = function (t) {
                    e.onNext(t);
                }
                    ,
                    t = function (t) {
                        e.onError(t);
                    }
                    ,
                    i = function () {
                        e.onCompleted();
                    }
                ),
                    ge(function (e) {
                        return r.subscribe(function (t) {
                            try {
                                n(t);
                            } catch (t) {
                                e.onError(t);
                            }
                            e.onNext(t);
                        }, function (i) {
                            if (t) {
                                try {
                                    t(i);
                                } catch (t) {
                                    e.onError(t);
                                }
                                e.onError(i);
                            } else { e.onError(i); }
                        }, function () {
                            if (i) {
                                try {
                                    i();
                                } catch (t) {
                                    e.onError(t);
                                }
                                e.onCompleted();
                            } else { e.onCompleted(); }
                        });
                    });
            }
            ,
            te.skipLast = function (e) {
                var t = this;
                return ge(function (i) {
                    var n = [];
                    return t.subscribe(function (t) {
                        n.push(t),
                            n.length > e && i.onNext(n.shift());
                    }, f(i, 'onError'), f(i, 'onCompleted'));
                });
            }
            ,
            te.takeLast = function (e) {
                var t = this;
                return ge(function (i) {
                    var n = [];
                    return t.subscribe(function (t) {
                        n.push(t),
                            n.length > e && n.shift();
                    }, f(i, 'onError'), function () {
                        for (; n.length > 0;) { i.onNext(n.shift()); }
                        i.onCompleted();
                    });
                });
            }
            ,
            te.ignoreElements = function () {
                var e = this;
                return ge(function (t) {
                    return e.subscribe(n, f(t, 'onError'), f(t, 'onCompleted'));
                });
            }
            ,
            te.elementAt = function (e) {
                if (e < 0) { throw new Error(h); }
                var t = this;
                return ge(function (i) {
                    var n = e;
                    return t.subscribe(function (e) {
                        n === 0 && (i.onNext(e),
                            i.onCompleted()),
                            n--;
                    }, f(i, 'onError'), function () {
                        i.onError(new Error(h));
                    });
                });
            }
            ,
            te.elementAtOrDefault = function (e, i) {
                var n = this;
                if (e < 0) { throw new Error(h); }
                return i === t && (i = null),
                    ge(function (t) {
                        var r = e;
                        return n.subscribe(function (e) {
                            r === 0 && (t.onNext(e),
                                t.onCompleted()),
                                r--;
                        }, f(t, 'onError'), function () {
                            t.onNext(i),
                                t.onCompleted();
                        });
                    });
            }
            ,
            te.defaultIfEmpty = function (e) {
                var i = this;
                return e === t && (e = null),
                    ge(function (t) {
                        var n = !1;
                        return i.subscribe(function (e) {
                            n = !0,
                                t.onNext(e);
                        }, f(t, 'onError'), function () {
                            n || t.onNext(e),
                                t.onCompleted();
                        });
                    });
            }
            ,
            te.distinct = function (e, t) {
                var i = this;
                return e || (e = a),
                    t || (t = o),
                    ge(function (n) {
                        var r = {};
                        return i.subscribe(function (i) {
                            var s; var a; var o; let
                                l = !1;
                            try {
                                s = e(i),
                                    a = t(s);
                            } catch (e) {
                                return void n.onError(e);
                            }
                            for (o in r) {
                                if (a === o) {
                                    l = !0;
                                    break;
                                }
                            }
                            l || (r[a] = null,
                                n.onNext(i));
                        }, f(n, 'onError'), f(n, 'onCompleted'));
                    });
            }
            ,
            te.mergeObservable = function () {
                var e = this;
                return ge(function (t) {
                    var i = new C();
                    var n = !1;
                    var r = new k();
                    return i.add(r),
                        r.disposable(e.subscribe(function (e) {
                            var r = new k();
                            i.add(r),
                                r.disposable(e.subscribe(function (e) {
                                    t.onNext(e);
                                }, function (e) {
                                    t.onError(e);
                                }, function () {
                                    i.remove(r),
                                        n && i.length === 1 && t.onCompleted();
                                }));
                        }, function (e) {
                            t.onError(e);
                        }, function () {
                            n = !0,
                                i.length === 1 && t.onCompleted();
                        })),
                        i;
                });
            }
            ,
            te.merge = function (e) {
                if (typeof e !== 'number') { return ee.merge(this, e); }
                var t = this;
                return ge(function (i) {
                    var n = 0;
                    var r = new C();
                    var s = !1;
                    var a = [];
                    var o = function (e) {
                        var t = new k();
                        r.add(t),
                            t.disposable(e.subscribe(function (e) {
                                i.onNext(e);
                            }, function (e) {
                                i.onError(e);
                            }, function () {
                                var e2;
                                r.remove(t),
                                    a.length > 0 ? (e2 = a.shift(),
                                        o(e2)) : (n--,
                                            s && n === 0 && i.onCompleted());
                            }));
                    };
                    return r.add(t.subscribe(function (t) {
                        n < e ? (n++,
                            o(t)) : a.push(t);
                    }, f(i, 'onError'), function () {
                        s = !0,
                            n === 0 && i.onCompleted();
                    })),
                        r;
                });
            }
            ,
            te.switchLatest = function () {
                var e = this;
                return ge(function (t) {
                    var i = !1;
                    var n = new x();
                    var r = !1;
                    var s = 0;
                    var a = e.subscribe(function (e) {
                        var a = new k();
                        var o = ++s;
                        return i = !0,
                            n.disposable(a),
                            a.disposable(e.subscribe(function (e) {
                                s === o && t.onNext(e);
                            }, function (e) {
                                s === o && t.onError(e);
                            }, function () {
                                s === o && (i = !1,
                                    r && t.onCompleted());
                            }));
                    }, f(t, 'onError'), function () {
                        r = !0,
                            i || t.onCompleted();
                    });
                    return new C(a, n);
                });
            }
            ,
            ee.merge = function () {
                var e; let
                    t;
                return arguments[0] ? arguments[0].now ? (e = arguments[0],
                    t = d.call(arguments, 1)) : (e = R,
                        t = d.call(arguments, 0)) : (e = R,
                            t = d.call(arguments, 1)),
                    t[0] instanceof Array && (t = t[0]),
                    be(t, e).mergeObservable();
            };
        te.concat = function () {
            var e; var t; var i; let
                n;
            return e = this,
                t = Ee,
                i = arguments,
                (n = d.call(i, 0)).unshift(e),
                t.apply(e, n);
        }
            ,
            te.concatObservable = function () {
                return this.merge(1);
            };
        var Ee = ee.concat = function () {
            var e = b(arguments, 0);
            return q(e).concat();
        };
        te.catchException = function (e) {
            return typeof e === 'function' ? Te(this, e) : Ce([this, e]);
        };
        var Te = function (e, t) {
            return ge(function (i) {
                var n = new k();
                var r = new x();
                return n.disposable(e.subscribe(f(i, 'onNext'), function (e) {
                    var n; let
                        s;
                    try {
                        s = t(e);
                    } catch (e) {
                        return void i.onError(e);
                    }
                    n = new k(),
                        r.disposable(n),
                        n.disposable(s.subscribe(i));
                }, f(i, 'onCompleted'))),
                    r;
            });
        };
        var Ce = ee.catchException = function () {
            var e = b(arguments, 0);
            return q(e).catchException();
        };
        te.onErrorResumeNext = function (e) {
            if (!e) { throw new Error('Second observable is required'); }
            return Se([this, e]);
        };
        var Se = ee.onErrorResumeNext = function () {
            var e = b(arguments, 0);
            return ge(function (t) {
                var i = 0;
                var n = new x();
                var r = R.scheduleRecursive(function (r) {
                    var s; let
                        a;
                    i < e.length ? (s = e[i++],
                        a = new k(),
                        n.disposable(a),
                        a.disposable(s.subscribe(f(t, 'onNext'), function () {
                            r();
                        }, function () {
                            r();
                        }))) : t.onCompleted();
                });
                return new C(n, r);
            });
        };
        te.combineLatest = function () {
            var e = this;
            var t = d.call(arguments);
            var i = t.pop();
            return t.unshift(this),
                ge(function (n) {
                    for (var r = t.length, s = new Array(r), o = !1, l = new Array(r), u = new Array(r), c = function (t) {
                        var r;
                        if (s[t] = !0,
                            o || (o = v.call(s, a))) {
                            try {
                                r = i.apply(e, u);
                            } catch (e) {
                                return void n.onError(e);
                            }
                            n.onNext(r);
                        } else {
                            v.call(m.call(l, function (e, i) {
                                return i !== t;
                            }), a) && n.onCompleted();
                        }
                    }, d = function (e) {
                        l[e] = !0,
                            v.call(l, a) && n.onCompleted();
                    }, h = new Array(r), p = 0; p < r; p++) {
                        !function (e) {
                            h[e] = new k(),
                                h[e].setDisposable(t[e].subscribe(function (t) {
                                    u[e] = t,
                                        c(e);
                                }, f(n, 'onError'), function () {
                                    d(e);
                                }));
                        }(p);
                    }
                    return new C(h);
                });
        }
            ,
            te.zip = function () {
                var e = this;
                var t = d.call(arguments);
                var i = t.pop();
                return t.unshift(e),
                    ge(function (n) {
                        for (var r = t.length, s = new Array(r), o = new Array(r), l = function (t) {
                            var r; let
                                l;
                            if (v.call(s, function (e) {
                                return e && e.length > 0;
                            })) {
                                try {
                                    l = function (e) {
                                        for (var t = [], i = new Object(this), n = 0, r = i.length >>> 0; n < r; n++) { t.push(e.call(arguments[1], i[n], n, i)); }
                                        return t;
                                    }
                                        .call(s, function (e) {
                                            return e.shift();
                                        }),
                                        r = i.apply(e, l);
                                } catch (e) {
                                    return void n.onError(e);
                                }
                                n.onNext(r);
                            } else {
                                v.call(m.call(o, function (e, i) {
                                    return i !== t;
                                }), a) && n.onCompleted();
                            }
                        }, u = function (e) {
                            o[e] = !0,
                                v.call(o, a) && n.onCompleted();
                        }, c = new Array(r), d = 0; d < r; d++) {
                            !function (e) {
                                c[e] = new k(),
                                    c[e].setDisposable(t[e].subscribe(function (t) {
                                        s[e] || (s[e] = []),
                                            s[e].push(t),
                                            l(e);
                                    }, f(n, 'onError'), function () {
                                        u(e);
                                    }));
                            }(d);
                        }
                        var h = new C(c);
                        return h.add(P(function () {
                            for (var e = 0; e < r; e++) { s[e] = null; }
                        })),
                            h;
                    });
            }
            ,
            te.takeUntil = function (e) {
                return _(e, this, function (e, t) {
                    var i = !1;
                    var n = !1;
                    return new X(function (t) {
                        n || i || (t.kind === 'C' ? i = !0 : t.kind === 'E' ? (i = !0,
                            n = !0,
                            e.onError(t.exception)) : (n = !0,
                                e.onCompleted()));
                    },
                        function (i) {
                            n || (i.accept(e),
                                (n = i.kind !== 'N') && t.dispose());
                        });
                });
            }
            ,
            te.skipUntil = function (e) {
                return _(this, e, function (e, t, i) {
                    var n = !1;
                    var r = !1;
                    return new X(function (t) {
                        t.kind == 'E' ? e.onError(t.exception) : n && t.accept(e);
                    },
                        function (t) {
                            r || (t.kind === 'N' ? n = !0 : t.kind === 'E' && e.onError(t.exception),
                                r = !0,
                                i.dispose());
                        });
                });
            }
            ,
            ee.amb = function () {
                var e; var t; var i; var n; var r = pe(); var
                    s = b(arguments, 0);
                for (e = 0,
                    t = s.length; e < t; e++) {
                    i = r,
                        n = s[e],
                        r = i.amb(n);
                }
                return r;
            }
            ,
            te.amb = function (e) {
                return _(this, e, function (e, t, i) {
                    var n = 'N';
                    return new X(function (t) {
                        n === 'N' && (n = 'L',
                            i.dispose()),
                            n === 'L' && t.accept(e);
                    },
                        function (i) {
                            n === 'N' && (n = 'R',
                                t.dispose()),
                                n === 'R' && i.accept(e);
                        });
                });
            };
        var Pe = function (e) {
            function t() {
                t.base.constructor.apply(this, arguments);
            }
            return u(t, Q),
                t.prototype.next = function (e) {
                    t.base.next.call(this, e),
                        this.ensureActive();
                }
                ,
                t.prototype.error = function (e) {
                    t.base.error.call(this, e),
                        this.ensureActive();
                }
                ,
                t.prototype.completed = function () {
                    t.base.completed.call(this),
                        this.ensureActive();
                }
                ,
                t;
        }();
        te.observeOn = function (e) {
            var t = this;
            return ge(function (i) {
                return t.subscribe(new Pe(e, i));
            });
        }
            ,
            te.subscribeOn = function (e) {
                var t = this;
                return ge(function (i) {
                    var n = new k();
                    var r = new x();
                    return r.setDisposable(n),
                        n.setDisposable(e.schedule(function () {
                            r.setDisposable(new I(e, t.subscribe(i)));
                        })),
                        r;
                });
            };
    }(this),
    Rx = this.Rx,
    function (e, t) {
        var i; var n = (i = void 0 !== e.module && void 0 !== e.module.exports ? e.require('./rx.min.js') : e.Rx).Observable; var r = n.prototype; var s = n.createWithDisposable; var a = n.defer; var o = (n.fromArray,
            n.throwException); var l = i.Scheduler.Timeout; var u = i.SingleAssignmentDisposable; var c = i.SerialDisposable; var d = i.CompositeDisposable; var h = i.RefCountDisposable; var p = i.Subject; var f = i.Internals.BinaryObserver; var _ = function (e, t) {
                return s(function (i) {
                    return new d(t.getDisposable(), e.subscribe(i));
                });
            }; var v = function (e) {
                return e < 0 ? 0 : e;
            }; var m = function (e, t, i) {
                var n = v(t);
                return s(function (t) {
                    var r = 0;
                    var s = e;
                    return i.scheduleRecursiveWithAbsolute(s, function (e) {
                        var a;
                        n > 0 && (a = i.now(),
                            (s += n) <= a && (s = a + n)),
                            t.onNext(r++),
                            e(s);
                    });
                });
            }; var b = function (e, t, i) {
                return a(function () {
                    return m(i.now() + e, t, i);
                });
            }; var
                g = n.interval = function (e, t) {
                    return t || (t = l),
                        b(e, e, t);
                };
        n.timer = function (e, t, i) {
            var n;
            return i || (i = l),
                void 0 !== t && typeof t === 'number' ? n = t : void 0 !== t && typeof t === 'object' && (i = t),
                e instanceof Date && void 0 === n ? function (e, t) {
                    return s(function (i) {
                        return t.scheduleWithAbsolute(e, function () {
                            i.onNext(0),
                                i.onCompleted();
                        });
                    });
                }(e.getTime(), i) : e instanceof Date && void 0 !== n ? (n = t,
                    m(e.getTime(), n, i)) : void 0 === n ? function (e, t) {
                        var i = v(e);
                        return s(function (e) {
                            return t.scheduleWithRelative(i, function () {
                                e.onNext(0),
                                    e.onCompleted();
                            });
                        });
                    }(e, i) : b(e, n, i);
        };
        var y = function (e, t, i) {
            return s(function (n) {
                var r; var s = !1; var a = new c(); var o = null; var l = []; let
                    h = !1;
                return r = e.materialize().timestamp(i).subscribe(function (e) {
                    var r; let
                        c;
                    e.value.kind === 'E' ? ((l = []).push(e),
                        o = e.value.exception,
                        c = !h) : (l.push({
                            value: e.value,
                            timestamp: e.timestamp + t,
                        }),
                            c = !s,
                            s = !0),
                        c && (o !== null ? n.onError(o) : (r = new u(),
                            a.disposable(r),
                            r.disposable(i.scheduleRecursiveWithRelative(t, function (e) {
                                var t; var r; var a; let
                                    u;
                                if (o === null) {
                                    h = !0;
                                    do {
                                        a = null,
                                            l.length > 0 && l[0].timestamp - i.now() <= 0 && (a = l.shift().value),
                                            a !== null && a.accept(n);
                                    } while (a !== null);
                                    u = !1,
                                        r = 0,
                                        l.length > 0 ? (u = !0,
                                            r = Math.max(0, l[0].timestamp - i.now())) : s = !1,
                                        h = !1,
                                        (t = o) !== null ? n.onError(t) : u && e(r);
                                }
                            }))));
                }),
                    new d(r, a);
            });
        };
        r.delay = function (e, t) {
            return t || (t = l),
                e instanceof Date ? function (e, t, i) {
                    return a(function () {
                        var e2 = t - i.now();
                        return y(e2, i);
                    });
                }(0, e.getTime(), t) : y(this, e, t);
        }
            ,
            r.throttle = function (e, t) {
                t || (t = l);
                var i = this;
                return s(function (n) {
                    var r; var s = new c(); var a = !1; var o = 0; let
                        l = null;
                    return r = i.subscribe(function (i) {
                        var r; let
                            c;
                        a = !0,
                            l = i,
                            r = ++o,
                            c = new u(),
                            s.disposable(c),
                            c.disposable(t.scheduleWithRelative(e, function () {
                                a && o === r && n.onNext(l),
                                    a = !1;
                            }));
                    }, function (e) {
                        s.dispose(),
                            n.onError(e),
                            a = !1,
                            o++;
                    }, function () {
                        s.dispose(),
                            a && n.onNext(l),
                            n.onCompleted(),
                            a = !1,
                            o++;
                    }),
                        new d(r, s);
                });
            }
            ,
            r.windowWithTime = function (e, t, i) {
                var n; var
                    r = this;
                return void 0 === t && (n = e),
                    void 0 === i && (i = l),
                    typeof t === 'number' ? n = t : typeof t === 'object' && (n = e,
                        i = t),
                    s(function (t) {
                        var s; var a; var o; var l = n; var f = e; var v = []; var m = new c(); let
                            b = 0;
                        return a = new d(m),
                            o = new h(a),
                            s = function () {
                                var e; var r; var a; var c; let
                                    d;
                                a = new u(),
                                    m.disposable(a),
                                    r = !1,
                                    e = !1,
                                    f === l ? (r = !0,
                                        e = !0) : f < l ? r = !0 : e = !0,
                                    d = (c = r ? f : l) - b,
                                    b = c,
                                    r && (f += n),
                                    e && (l += n),
                                    a.disposable(i.scheduleWithRelative(d, function () {
                                        var i;
                                        e && (i = new p(),
                                            v.push(i),
                                            t.onNext(_(i, o))),
                                            r && (i = v.shift()).onCompleted(),
                                            s();
                                    }));
                            }
                            ,
                            v.push(new p()),
                            t.onNext(_(v[0], o)),
                            s(),
                            a.add(r.subscribe(function (e) {
                                var t;
                                for (t = 0; t < v.length; t++) { v[t].onNext(e); }
                            }, function (e) {
                                var i;
                                for (i = 0; i < v.length; i++) { v[i].onError(e); }
                                t.onError(e);
                            }, function () {
                                var e;
                                for (e = 0; e < v.length; e++) { v[e].onCompleted(); }
                                t.onCompleted();
                            })),
                            o;
                    });
            }
            ,
            r.windowWithTimeOrCount = function (e, t, i) {
                var n = this;
                return i || (i = l),
                    s(function (r) {
                        var s; var a; var o; var l; var f = 0; var v = new c(); let
                            m = 0;
                        return a = new d(v),
                            o = new h(a),
                            s = function (t) {
                                var n = new u();
                                v.disposable(n),
                                    n.disposable(i.scheduleWithRelative(e, function () {
                                        var e;
                                        t === m && (f = 0,
                                            e = ++m,
                                            l.onCompleted(),
                                            l = new p(),
                                            r.onNext(_(l, o)),
                                            s(e));
                                    }));
                            }
                            ,
                            l = new p(),
                            r.onNext(_(l, o)),
                            s(0),
                            a.add(n.subscribe(function (e) {
                                var i = 0;
                                var n = !1;
                                l.onNext(e),
                                    ++f === t && (n = !0,
                                        f = 0,
                                        i = ++m,
                                        l.onCompleted(),
                                        l = new p(),
                                        r.onNext(_(l, o))),
                                    n && s(i);
                            }, function (e) {
                                l.onError(e),
                                    r.onError(e);
                            }, function () {
                                l.onCompleted(),
                                    r.onCompleted();
                            })),
                            o;
                    });
            }
            ,
            r.bufferWithTime = function (e, t, i) {
                var n;
                return void 0 === t && (n = e),
                    i || (i = l),
                    typeof t === 'number' ? n = t : typeof t === 'object' && (n = e,
                        i = t),
                    this.windowWithTime(e, n, i).selectMany(function (e) {
                        return e.toArray();
                    });
            }
            ,
            r.bufferWithTimeOrCount = function (e, t, i) {
                return i || (i = l),
                    this.windowWithTimeOrCount(e, t, i).selectMany(function (e) {
                        return e.toArray();
                    });
            }
            ,
            r.timeInterval = function (e) {
                var t = this;
                return e || (e = l),
                    a(function () {
                        var i = e.now();
                        return t.select(function (t) {
                            var n = e.now();
                            var r = n - i;
                            return i = n,
                            {
                                value: t,
                                interval: r,
                            };
                        });
                    });
            }
            ,
            r.timestamp = function (e) {
                return e || (e = l),
                    this.select(function (t) {
                        return {
                            value: t,
                            timestamp: e.now(),
                        };
                    });
            };
        var E = function (e, t) {
            return i = e,
                n = t,
                r = function (e) {
                    var t; let
                        i = !1;
                    return new f(function (n) {
                        n.kind === 'N' && (t = n),
                            n.kind === 'E' && n.accept(e),
                            n.kind === 'C' && (i = !0);
                    },
                        function () {
                            var n = t;
                            t = void 0,
                                void 0 !== n && n.accept(e),
                                i && e.onCompleted();
                        });
                }
                ,
                s(function (e) {
                    var t = new u();
                    var s = new u();
                    var a = r(e, t, s);
                    return t.disposable(i.materialize().select(function (e) {
                        return {
                            switchValue(t) {
                                return t(e);
                            },
                        };
                    }).subscribe(a)),
                        s.disposable(n.materialize().select(function (e) {
                            return {
                                switchValue(t, i) {
                                    return i(e);
                                },
                            };
                        }).subscribe(a)),
                        new d(t, s);
                });
            var i; var n; let
                r;
        };
        r.sample = function (e, t) {
            return t || (t = l),
                E(this, typeof e === 'number' ? g(e, t) : e);
        }
            ,
            r.timeout = function (e, t, i) {
                var n; var
                    r = this;
                return void 0 === t && (t = o(new Error('Timeout'))),
                    i || (i = l),
                    n = e instanceof Date ? function (e, t) {
                        i.scheduleWithAbsolute(e, t);
                    }
                        : function (e, t) {
                            i.scheduleWithRelative(e, t);
                        }
                    ,
                    s(function (i) {
                        var s; var a = 0; var o = new u(); var l = new c(); var h = !1; var
                            p = new c();
                        return l.disposable(o),
                            (s = function () {
                                var r = a;
                                p.disposable(n(e, function () {
                                    (h = a === r) && l.disposable(t.subscribe(i));
                                }));
                            }
                            )(),
                            o.disposable(r.subscribe(function (e) {
                                !h && (a++,
                                    i.onNext(e),
                                    s());
                            }, function (e) {
                                !h && (a++,
                                    i.onError(e));
                            }, function () {
                                !h && (a++,
                                    i.onCompleted());
                            })),
                            new d(l, p);
                    });
            }
            ,
            n.generateWithAbsoluteTime = function (e, t, i, n, r, a) {
                return a || (a = l),
                    s(function (s) {
                        var o; var l; var u = !0; var c = !1; let
                            d = e;
                        return a.scheduleRecursiveWithAbsolute(a.now(), function (e) {
                            c && s.onNext(o);
                            try {
                                u ? u = !1 : d = i(d),
                                    (c = t(d)) && (o = n(d),
                                        l = r(d));
                            } catch (e) {
                                return void s.onError(e);
                            }
                            c ? e(l) : s.onCompleted();
                        });
                    });
            }
            ,
            n.generateWithRelativeTime = function (e, t, i, n, r, a) {
                return a || (a = l),
                    s(function (s) {
                        var o; var l; var u = !0; var c = !1; let
                            d = e;
                        return a.scheduleRecursiveWithRelative(0, function (e) {
                            c && s.onNext(o);
                            try {
                                u ? u = !1 : d = i(d),
                                    (c = t(d)) && (o = n(d),
                                        l = r(d));
                            } catch (e) {
                                return void s.onError(e);
                            }
                            c ? e(l) : s.onCompleted();
                        });
                    });
            };
    }(this),
    function () {
        var e = Rx.Observer.create(function (e) {
            var t; var i; let
                n;
            this.hasItem = !0,
                t || (t = this.unsubscribe,
                    i = this.obsOrFunc,
                    void 0 !== (n = this.outerSubscription) ? (n.dispose(),
                        this.outerSubscription = void 0) : this.unsubscribe = !0,
                    i instanceof Function ? this.subscription = i(e).subscribe(this.observer) : this.subscription = i.subscribe(this.observer));
        }, function (e) {
            this.unsubscribe || this.observer.onError(e);
        }, function () {
            this.unsubscribe || this.hasItem || this.observer.onCompleted();
        });
        var t = Rx.Disposable.create(function () {
            var e = this.observableSubscription;
            var t = this.observer.subscription;
            void 0 !== e ? (e.dispose(),
                this.observableSubscription = void 0) : void 0 !== t && (t.dispose(),
                    this.observerSubscription = void 0);
        });
        var i = Object.create(new Rx.Observable(), {
            _subscribe: {
                value(i) {
                    var n; var r = Object.create(e, {
                        obsOrFunc: {
                            value: this.obsOrFunc,
                        },
                        observer: {
                            value: i,
                        },
                    }); var
                        s = this.source.subscribe(r);
                    return r.outerSubscription = s,
                        n = Object.create(t, {
                            observableSubscription: {
                                value: s,
                            },
                            observer: {
                                value: r,
                            },
                        }),
                        r.unsubscribe && s.dispose(),
                        n;
                },
            },
        });
        Rx.Observable.prototype.then = function (e) {
            return Object.create(i, {
                source: {
                    value: this,
                },
                obsOrFunc: {
                    value: e,
                },
            });
        };
    }(),
    function () {
        var e = new Rx.Observable();
        e.subscribe = function (e, t, i) {
            return typeof e === 'function' ? (e(this.value),
                i && i()) : (e.onNext(this.value),
                    e.onCompleted()),
                Rx.Disposable.empty;
        }
            ,
            Rx.Observable.fastReturnValue = function (t) {
                return Object.create(e, {
                    value: {
                        value: t,
                    },
                });
            };
    }(),
    function () {
        var e = Rx.Observer.create(function (e) {
            var t; var i; var n = this.projection(e); var
                r = this.observer;
            for (i = 0,
                t = n.length; i < t; i++) { r.onNext(n[i]); }
        }, function (e) {
            this.observer.onError(e);
        }, function () {
            this.observer.onCompleted();
        });
        Rx.Observable.prototype.selectManyArrays = function (t) {
            var i = this;
            return Rx.Observable.fastCreateWithDisposable(function (n) {
                return i.subscribe(Object.create(e, {
                    observer: {
                        value: n,
                    },
                    projection: {
                        value: t,
                    },
                }));
            });
        };
    }(),
    Rx.Observable.prototype.subscribeIgnoreErrors = function (e, t, i) {
        return typeof e !== 'function' ? (void 0 === e.onError && (e.onError = function () { }
        ),
            this.subscribe(e)) : (void 0 === t && (t = function () { }
            ),
                this.subscribe(e, t, i));
    }
    ,
    Rx.Observable.prototype.windowWithTime = function (e) {
        var t = this;
        return Rx.Observable.createWithDisposable(function (i) {
            var n; var r = []; var
                s = function () {
                    i.onNext(r.slice()),
                        r.length = 0;
                };
            return t.subscribe(function (t) {
                r.push(t),
                    n == null && (n = setTimeout(s, e));
            }, function (e) {
                n != null && clearTimeout(n),
                    r.length > 0 && i.onNext(r),
                    i.onError(e);
            }, function () {
                n != null && clearTimeout(n),
                    r.length > 0 && i.onNext(r),
                    i.onCompleted();
            });
        });
    }
    ,
    Rx.EventDisposable = function (e, t) {
        this.observers = e,
            this.observer = t;
    }
    ,
    Rx.EventDisposable.prototype = new Rx.Disposable(),
    Rx.EventDisposable.prototype.dispose = function () {
        for (var e = this.observers, t = this.observer, i = e.length; i--;) {
            if (e[i] === t) {
                e.splice(i, 1);
                break;
            }
        }
    }
    ,
    Rx.Event = function () {
        this.observers = [];
    }
    ,
    Rx.Event.prototype = new Rx.Observable(),
    Rx.Event.prototype.subscribe = function (e) {
        var t = this.observers;
        return e = typeof e === 'function' ? {
            onNext: e,
        } : e,
            this.observers[t.length] = e,
            new Rx.EventDisposable(t, e);
    }
    ,
    Rx.Event.prototype.onNext = function (e) {
        for (var t, i = this.observers, n = 0; n < i.length;) {
            (t = i[n]).onNext(e),
                t === i[n] && n++;
        }
    }
    ,
    Rx.Observable.combineLatest = function () {
        var e = function (e, t) {
            this.value = e,
                this.next = t;
        };
        return e.prototype.toArray = function () {
            for (var e = this, t = []; e;) {
                t.push(e.value),
                    e = e.next;
            }
            return t;
        }
            ,
            function (t, i) {
                var n; let
                    r = t.length - 1;
                if (t.length > 1) {
                    for (n = t[r].select(function (t) {
                        return new e(t);
                    }),
                        r = t.length - 2; r >= 0; r--) {
                        n = n.combineLatest(t[r], function (t, i) {
                            return new e(i, t);
                        });
                    }
                    return n.select(function (e) {
                        return i.apply(null, e.toArray());
                    });
                }
                return t.length == 1 ? t[0].select(i) : Rx.Observable.empty();
            };
    }(),
    Rx.Observable.zip = function () {
        var e = function (e, t) {
            this.value = e,
                this.next = t;
        };
        return e.prototype.toArray = function () {
            for (var e = this, t = []; e;) {
                t.push(e.value),
                    e = e.next;
            }
            return t;
        }
            ,
            function (t, i) {
                var n; let
                    r = t.length - 1;
                if (t.length > 1) {
                    for (n = t[r].select(function (t) {
                        return new e(t);
                    }),
                        r = t.length - 2; r >= 0; r--) {
                        n = n.zip(t[r], function (t, i) {
                            return new e(i, t);
                        });
                    }
                    return n.select(function (e) {
                        return i.apply(null, e.toArray());
                    });
                }
                return t.length == 1 ? t[0].select(i) : Rx.Observable.empty();
            };
    }(),
    Rx.Observable.prototype.withPrevious = function (e) {
        var t = this;
        var i = arguments;
        return Rx.Observable.createWithDisposable(function (n) {
            return i.length === 1 && n.onNext({
                current: e,
                previous: void 0,
            }),
                t.subscribe(function (t) {
                    n.onNext({
                        current: t,
                        previous: e,
                    }),
                        e = t;
                }, function (e) {
                    n.onError(ex);
                }, function () {
                    n.onCompleted();
                });
        });
    }
    ,
    Rx.Observable.prototype.toMap = function (e, t) {
        var i = this;
        return Rx.Observable.createWithDisposable(function (n) {
            var r = {};
            return i.subscribe(function (i) {
                var n = e(i);
                t && (i = t(i)),
                    r[n] = i;
            }, function (e) {
                n.onError(e);
            }, function () {
                n.onNext(r),
                    n.onCompleted();
            });
        });
    }
    ,
    Rx.Observable.fastCreateWithDisposable = function (e) {
        var t = new Rx.Observable();
        return t._subscribe = e,
            t;
    }
    ,
    Rx.Observable.prototype.time = function (e) {
        var t = this;
        return Rx.Observable.fastCreateWithDisposable(function (i) {
            var n = !1;
            var r = util.log;
            return r.time(e),
                r.time(`${e}-untilFirstOnNext`),
                t.subscribe(function (t) {
                    n || (r.timeEnd(`${e}-untilFirstOnNext`),
                        r.time(`${e}-fromFirstOnNextUntilCompletedOrError`),
                        n = !0),
                        i.onNext(t);
                }, function (t) {
                    r.timeEnd(`${e}-untilFirstOnNext`),
                        r.timeEnd(`${e}-fromFirstOnNextUntilCompletedOrError`),
                        r.timeEnd(e),
                        i.onError(t);
                }, function () {
                    r.timeEnd(`${e}-untilFirstOnNext`),
                        r.timeEnd(`${e}-fromFirstOnNextUntilCompletedOrError`),
                        r.timeEnd(e),
                        i.onCompleted();
                });
        });
    }
    ,
    Rx.Observable.prototype.buffer = function (e) {
        var t = this;
        return Rx.Observable.createWithDisposable(function (i) {
            var n; var r; var s; let
                a = [];
            return t.subscribe(function (t) {
                a.push(t),
                    void 0 === s && (s = setTimeout(function () {
                        s = void 0,
                            i.onNext(a),
                            a = [],
                            n ? i.onError(n) : r && i.onCompleted();
                    }, e));
            }, function (e) {
                void 0 === s ? i.onError(e) : n = e;
            }, function () {
                void 0 === s ? i.onCompleted() : r = !0;
            });
        });
    }
    ,
    Rx.Observable.prototype.last = function () {
        var e = this;
        return Rx.Observable.fastCreateWithDisposable(function (t) {
            var i; let
                n = !1;
            return e.subscribe(function (e) {
                i = e,
                    n = !0;
            }, function (e) {
                n && t.onNext(i),
                    t.onError(e);
            }, function () {
                n && t.onNext(i),
                    t.onCompleted();
            });
        });
    }
    ,
    Rx.Observable.fromArrayFast = function (e) {
        return Rx.Observable.fastCreateWithDisposable(function (t) {
            for (var i = 0, n = e.length; i < n; i++) { t.onNext(e[i]); }
            t.onCompleted();
        });
    }
    ,
    Rx.Observable.prototype.toArrayFast = function () {
        var e = this;
        return Rx.Observable.fastCreateWithDisposable(function (t) {
            var i = [];
            return e.subscribe(function (e) {
                i.push(e);
            }, function (e) {
                t.onError(e);
            }, function () {
                t.onNext(i),
                    t.onCompleted();
            });
        });
    }
    ,
    Rx.Observable.prototype.finalValueFast = function () {
        var e = this;
        return Rx.Observable.fastCreateWithDisposable(function (t) {
            var i; let
                n = !1;
            return e.subscribe(function (e) {
                n = !0,
                    i = e;
            }, function (e) {
                t.onError(e);
            }, function () {
                n && t.onNext(i),
                    t.onCompleted();
            });
        });
    }
    ,
    Rx.Observable.prototype.or = function (e) {
        return this.selectMany(function (t) {
            return t ? Rx.Observable.returnValue(t) : e;
        });
    }
    ,
    Rx.Observable.or = function () {
        for (var e = Array.prototype.slice.call(arguments), t = e[0], i = 1; i < e.length; i += 1) { t = t.or(e[i]); }
        return t;
    }
    ,
    function (e) {
        var t = function (t) {
            return this._hasValue && t.onNext(this._value),
                e.Subject.prototype._subscribe.call(this, t);
        };
        e.ReplayLastSubject = function (i) {
            e.Subject.call(this),
                this._value = i,
                this._hasValue = arguments.length > 0,
                this._subscribe = t;
        }
            ,
            e.ReplayLastSubject.prototype = new e.Subject(),
            e.ReplayLastSubject.prototype.constructor = e.ReplayLastSubject,
            e.ReplayLastSubject.prototype.onNext = function (t) {
                this._hasValue && t === this._value || (this._value = t,
                    this._hasValue = !0,
                    e.Subject.prototype.onNext.call(this, t));
            }
            ,
            e.Observable.prototype.replayLast = function () {
                var t = new e.ReplayLastSubject();
                return this.subscribe(t),
                    t;
            };
    }(Rx);
var n = this.netflix = this.netflix || {};
n.falcor = {},
    function (e) {
        var t = {};
        function i() {
            var e = Array.prototype.slice.call(arguments, 1);
            return this.extend({
                init: function t() {
                    var i = Array.prototype.slice.call(arguments, 0);
                    t.base.apply(this, e.concat(i));
                },
            });
        }
        function n(e) {
            var i; var n; var s; var a; var o; var
                l = new this(t);
            for (i in e) {
                e.__lookupGetter__ && (n = e.__lookupGetter__(i),
                    s = e.__lookupSetter__(i)),
                    n || s ? (n && l.__defineGetter__(i, n),
                        s && l.__defineSetter__(i, s)) : (a = e[i],
                            o = l[i],
                            typeof a === 'function' && typeof o === 'function' && a !== o && (a.base = o),
                            l[i] = a);
            }
            return r(l);
        }
        function r(e) {
            var r = function () {
                var e = this.init;
                e && arguments[0] !== t && e.apply(this, arguments);
            };
            return e && (r.prototype = e),
                r.constructor = r,
                r.extend = n,
                r.bind = i,
                r;
        }
        Function.prototype.base = function () { }
            ,
            e.Class = {
                create: r,
            };
    }(n),
    function () {
        var e = function () { };
        typeof console === 'undefined' && (console = {
            log: e,
            info: e,
            warn: e,
            debug: e,
            error: e,
        }),
            console.log.bind ? n.console = {
                log() {
                    console.log(arguments);
                },
                info() {
                    console.info(arguments);
                },
                warn() {
                    console.warn(arguments);
                },
                debug() {
                    console.debug(arguments);
                },
                error() {
                    console.error(arguments);
                },
            } : n.console = {
                log() {
                    console.log(Array.prototype.slice(arguments));
                },
                info() {
                    console.info(Array.prototype.slice(arguments));
                },
                warn() {
                    console.warn(Array.prototype.slice(arguments));
                },
                debug() {
                    console.debug(Array.prototype.slice(arguments));
                },
            };
    }(),
    function (e) {
        e.PathBoundError = function (e, t) {
            this.path = e,
                this.message = t,
                this._error = !0,
                this.size = 1;
        }
            ,
            e.PathBoundError.prototype = new Error();
    }(n.falcor),
    function (e) {
        var t = {
            equals(e, t) {
                var i;
                if (e instanceof Array || (e = [e]),
                    t instanceof Array || (t = [t]),
                    e.length !== t.length) return !1;
                for (i = e.length - 1; i >= 0; i--) if (e[i] != t[i]) return !1;
                return !0;
            },
        };
        n.falcor.Path = t;
    }(),
    function (e) {
        n.falcor.Path;
        var t = function () { };
        var i = n.Class.create({
            init(e) {
                this.root = this,
                    void 0 !== e && (this.path = e);
            },
            path: [],
            bind(e) {
                return Object.create(this, {
                    path: {
                        value: this.path.concat(e),
                    },
                });
            },
            _emptyPath: Rx.Observable.returnValue([]),
            _equalityComparer(e, t) {
                return e === t || JSON.stringify(e) === JSON.stringify(t);
            },
            getValue(e) {
                return this.get(e).select(function (e) {
                    return e.value;
                }).finalValueFast();
            },
            _propagate(t) {
                return Rx.Observable.fastCreateWithDisposable(function (i) {
                    return t.subscribe(function (t) {
                        var n; var
                            r = t.evaluatedPath;
                        void 0 !== r ? (n = t.value) instanceof Array || (n === null && (n = void 0),
                            e.PathEvaluator.explode([t.path.concat(r.slice(t.absolutePath.length))], function (e) {
                                i.onNext({
                                    path: e.slice(),
                                    value: n,
                                });
                            })) : i.onNext(t);
                    }, function (e) {
                        i.onError(e);
                    }, function () {
                        i.onCompleted();
                    });
                });
            },
            get(e) {
                return e instanceof Rx.Observable || (e = Rx.Observable.fromArrayFast(Array.prototype.slice.call(arguments))),
                    this._propagate(this.getData(e));
            },
            del(e) {
                return e instanceof Rx.Observable || (e = Rx.Observable.fromArrayFast(Array.prototype.slice.call(arguments))),
                    this._propagate(this.deleteData(e));
            },
            set(e) {
                return e instanceof Rx.Observable || (e = Rx.Observable.fromArrayFast(Array.prototype.slice.call(arguments))),
                    this._propagate(this.setData(e));
            },
            call(e, t, i, n) {
                return this._propagate(this.callData(e, t, i, n).where(function (e) {
                    return !e.invalidated;
                }));
            },
        });
        i.explode = function (e, t) {
            var i; var n; var r; var s; var a; var o; var l; var u; var c; var d; var h; var p = e.length; var f = 0; var _ = []; var v = []; var m = []; var
                b = [];
            for (f = 0; f < p; f++) {
                if (u = 0,
                    void 0 !== (i = e[f]).path ? (a = i.path,
                        n = i.value) : (a = i,
                            n = void 0),
                    a instanceof Array || (a = [a]),
                    a.length !== 0) {
                    for (_.length = a.length,
                        v.length = a.length,
                        m.length = a.length,
                        o = 0,
                        l = a.length - 1; o <= l; o++) {
                        r = a[o],
                            v[o] = 0,
                            m[o] = null,
                            b[o] = r instanceof Array ? r.length - 1 : 0;
                    }
                    do {
                        for (; ;) {
                            for (o = u; o <= l;) {
                                if ((r = a[o]) instanceof Array && (r = r[v[o]]),
                                    void 0 !== (d = r.to)) {
                                    if (c = r.from || 0,
                                        parseInt(c, 10) !== c || parseInt(d, 10) !== d || isNaN(d) || isNaN(c) || d < c) throw `Invalid range in path.  { from: ${c}, to: ${d} }`;
                                    m[o] == null && (m[o] = c),
                                        _[o] = m[o];
                                } else _[o] = r;
                                o++;
                            }
                            if ((h = t(_, n, u)) === -1) {
                                u = -1;
                                break;
                            }
                            if ((r = a[u = void 0 !== h ? h : l]) instanceof Array && (r = r[v[u]]),
                                m[u] != null ? (m[u]++,
                                    m[u] > r.to && (m[u] = null,
                                        v[u]++)) : v[u]++,
                                v[u] > b[u]) {
                                v[u] = b[u];
                                break;
                            }
                        }
                        for (; u >= 0 && (o = v[u],
                            s = (r = a[u]) instanceof Array ? r[v[u]] : r,
                            o === b[u] && (m[u] == null || m[u] === s.to));) {
                            v[u] = 0,
                                s = (r = a[u]) instanceof Array ? r[v[u]] : r,
                                m[u] = s.to != null ? s.from || 0 : null,
                                u--;
                        }
                        u >= 0 && ((s = (r = a[u]) instanceof Array ? r[v[u]] : r).to != null && (m[u] = m[u] == null ? s.from || 0 : m[u]),
                            m[u] != null && s.to !== m[u] ? m[u]++ : (m[u] = null,
                                v[u]++));
                    } while (u >= 0);
                } else t(a, n, 0);
            }
        }
            ,
            i.explodeAsObservable = function (e) {
                return Rx.Observable.create(function (n) {
                    return i.explode(e, function (e) {
                        n.onNext(e.slice());
                    }),
                        n.onCompleted(),
                        t;
                });
            }
            ,
            i.segmentsEqual = function (e, t) {
                var n; var
                    r = i.segmentsEqual;
                if (e == t) { return !0; }
                if (e.to != null && e.to === t.to && (e.from || 0) === (t.from || 0)) { return !0; }
                if (e instanceof Array && t instanceof Array && e.length === t.length) {
                    for (n = e.length - 1; n >= 0 && r(e[n], t[n]); n--);
                    if (n < 0) { return !0; }
                }
                return !1;
            }
            ,
            i.comparePaths = function (e, t) {
                var i; var n; var r; var s; var a; var o; var l; var u; var c; var d; var h; var p; var f; var _; var v; var m = e.length; var b = t.length; var g = m - b; let
                    y = e.comparisonIndices;
                if (g !== 0) { return g; }
                for (y = e.comparisonIndices,
                    _ = 0; _ < m; _++) {
                    if (i = e[f = y[_]],
                        o = t[f],
                        i instanceof Array && (r = i.length),
                        o instanceof Array && (u = o.length),
                        r !== 1 || u || (i = i[0]),
                        u !== 1 || r || (o = o[0]),
                        u && r) {
                        if ((p = r - u) !== 0) { return p; }
                        for (v = 0; v < r; v++) {
                            if (s = i[v],
                                c = o[v],
                                s.to && (s = s.from || 0),
                                c.to && (c = c.from || 0),
                                a = parseFloat(s, 10),
                                d = parseFloat(c, 10),
                                isNaN(a) || isNaN(d) || a === d) {
                                if (s > c) return 1;
                                if (s < c) return -1;
                            } else if ((h = a - d) !== 0) return h;
                        }
                        return 0;
                    }
                    if (i.to && (i = i.from || 0),
                        o.to && (o = o.from || 0),
                        n = parseFloat(i, 10),
                        l = parseFloat(o, 10),
                        !isNaN(n) && !isNaN(l) && n !== l) { return n - l; }
                    if (i > o) { return 1; }
                    if (o > i) { return -1; }
                }
                return m > b ? 1 : b > m ? -1 : 0;
            }
            ,
            i.collapse = function (e) {
                var t; var n; var r; var s; var a; var o; var l; var u; var c; var d; var h; var p; var f; var _; var v; var m; var b; var g = e.length; var y = !0; var E = !1; var
                    T = [];
                if (!(e.length < 2)) {
                    for (t = 0; t < g; t++) {
                        if (void 0 === (_ = T[n = (a = e[t]).length])) {
                            for (_ = [],
                                v = [],
                                m = 0; m < n; m++) typeof a[m] === 'string' ? _.push(m) : v.push(m);
                            _.push.apply(_, v),
                                T[n] = _;
                        }
                        a.comparisonIndices = _;
                    }
                    for (e.sort(i.comparePaths); y;) {
                        for (y = !1,
                            f = 0,
                            t = 0,
                            b = 1,
                            p = -1; b < g;) {
                            if (d = void 0,
                                a = e[t],
                                o = e[b],
                                d = 100,
                                a.length === o.length && a.length > 1) {
                                for (d = 0,
                                    s = a.length - 1; s >= 0 && d <= 1; s--) {
                                    r = a[s],
                                        l = o[s],
                                        i.segmentsEqual(r, l) || (d++,
                                            p = s);
                                }
                            }
                            d === 1 ? (a.copied || (_ = a.comparisonIndices,
                                (a = a.slice()).comparisonIndices = _,
                                a.copied = !0,
                                e[t] = a),
                                (h = a[p]) instanceof Array ? h.copied || ((h = h.slice()).copied = !0,
                                    a[p] = h) : ((h = [h]).copied = !0,
                                        a[p] = h),
                                u = h[h.length - 1],
                                c = o[p],
                                u.to != null && typeof c === 'number' && u.to === c - 1 ? u.copied ? u.to++ : (u = {
                                    from: u.from,
                                    to: u.to + 1,
                                    copied: !0,
                                },
                                    h[h.length - 1] = u) : typeof u === 'number' && u === c - 1 ? h[h.length - 1] = {
                                        from: u,
                                        to: c,
                                    } : h.push(o[p]),
                                y = !0,
                                E = !0,
                                b++) : d === 0 ? (y = !0,
                                    E = !0,
                                    b++) : (E = !1,
                                        p = -1,
                                        t = b,
                                        b++,
                                        e[f] = a,
                                        f++);
                        }
                        !1 === E ? e[f] = o : y && (e[f] = a),
                            g = ++f;
                    }
                    e.length = g;
                }
            }
            ,
            i.updateRelativeCache = function (e, t) {
                var i; var n; var r; var s; var a; var o; var l; var u; var c; var d; var h; var p; var f; var _; var v; var m; var b; var g; var y; var E = Array.isArray; var T = e.paths; var C = T.length; var
                    S = [];
                for (n = 0; n < C; n++) {
                    for (r = T[n],
                        S.length = 1,
                        S[0] = {
                            context: e.value,
                            cacheContext: t,
                        },
                        p = 0,
                        i = r.length; p < i && void 0 !== (y = S[0]); p++) {
                        if (S.length--,
                            f = r[p],
                            s = y.context,
                            o = y.cacheContext,
                            void 0 !== (g = f.to)) {
                            for (b = f.from || 0,
                                m = g; m >= b; m--) {
                                d = s[m],
                                    h = o[m],
                                    void 0 !== d && (void 0 !== h ? S[S.length] = {
                                        context: d,
                                        cacheContext: h,
                                    } : o[m] = d);
                            }
                        } else if (E(f)) {
                            for (v = f.length - 1; v >= 0; v--) {
                                if (void 0 !== (g = (_ = f[v]).to)) {
                                    for (b = _.from || 0,
                                        m = g; m >= b; m--) {
                                        d = s[m],
                                            h = o[m],
                                            void 0 !== d && (void 0 !== h ? S[S.length] = {
                                                context: d,
                                                cacheContext: h,
                                            } : o[m] = d);
                                    }
                                } else {
                                    if (u = s[_],
                                        c = o[_],
                                        void 0 === u) continue;
                                    if (void 0 === c) {
                                        o[_] = u;
                                        continue;
                                    }
                                    S[S.length] = {
                                        context: u,
                                        cacheContext: c,
                                    };
                                }
                            }
                        } else {
                            if (l = o,
                                void 0 === (a = s) || a === null) break;
                            if (s = a[f],
                                o = l[f],
                                void 0 === s) break;
                            if (void 0 === o) {
                                l[f] = s;
                                break;
                            }
                            S[S.length] = {
                                context: s,
                                cacheContext: o,
                            };
                        }
                    }
                }
            }
            ,
            e.PathEvaluator = i;
    }(n.falcor),
    function (e) {
        var t; var n; var r; var s; var a; var o; var l = /_onNext/gi; var u = /_onError/gi; var c = /_onCompleted/gi; var d = /return /gi; var h = /___([$A-Z_][0-9A-Z_$]*)/gi; var p = /arguments\[([0-9]+)\]/gi; var f = [/arguments\[0\]/gi, /arguments\[1\]/gi, /arguments\[2\]/gi, /arguments\[3\]/gi, /arguments\[4\]/gi, /arguments\[5\]/gi]; var
            _ = {};
        (t = function (e) {
            var t = Array.prototype.slice.call(arguments, 1);
            this.body = typeof e === 'string' ? this._getFunctionBody(e) : this._getFunctionBody(e.toString()),
                this.args = t,
                this.args = t,
                this.hashCode = function (e) {
                    var t = 0;
                    if (e.length == 0) { return t; }
                    for (i = 0; i < e.length; i++) {
                        t = (t << 5) - t + e.charCodeAt(i),
                            t &= t;
                    }
                    return t;
                }(this.body);
        }
        ).prototype = {
            _getFunctionBody(e) {
                var t = e.indexOf('{') + 1;
                var i = e.lastIndexOf('}');
                return e.substring(t, i);
            },
            bind() {
                var e = Object.create(this);
                var t = Object.create(this.args);
                return t.push.apply(t, arguments),
                    e.args = t,
                    e;
            },
        },
            ((n = function (e, t, i) {
                this.observable = e,
                    this.operations = t,
                    this.args = i;
            }
            ).prototype = new e.Observable()).cachedFactories = {},
            n.prototype._subscribe = function (e) {
                return this.compile()(this.args).subscribe(e);
            }
            ,
            n.createOperator = function (e, t) {
                return t.name = e,
                    function () {
                        var e = Object.create(this.operations);
                        var i = Object.create(this.args);
                        return e.push(t),
                            i.push(Array.prototype.slice.call(arguments)),
                            new n(this.observable, e, i);
                    };
            }
            ,
            e.CompiledQuery = n,
            e.Observable.prototype.toCompiledQuery = function () {
                return new n(this, [], [[this]]);
            }
            ,
            e.InlineClosure = t,
            n.cachedCompositeOperators = _,
            r = n.createOperator('select', {
                onNext: '_onNext(arguments[0](value));$$$',
            }),
            s = {
                onNext: 'var ___value; %1; _onNext(___value);$$$',
            },
            n.prototype.select = function (e) {
                var t; let
                    i;
                return void 0 !== e.args ? (t = `select_${e.hashCode}`,
                    void 0 === (i = _[t]) && (i = n.createOperator(t, {
                        onNext: s.onNext.replace('%1', e.body).replace(d, '___value = '),
                    }),
                        _[t] = i),
                    i.apply(this, e.args)) : r.call(this, e);
            }
            ,
            selectManyArraysOperation = n.createOperator('selectManyArrays', {
                onNext: 'var ___arr, ___length, ___counter; ___arr = arguments[0](value); \nfor(___counter = 0, ___length = ___arr.length; ___counter < ___length; ___counter++) {\n _onNext(___arr[___counter]);$$$ \n}',
            }),
            inlineSelectManyArraysOperation = {
                onNext: 'var ___arr, ___length, ___counter; %1; for(___counter = 0, ___length = ___arr.length; ___counter < ___length; ___counter++) { ___counter < ___arr.length; ___counter++) { _onNext(___arr[___counter]);$$$ }',
            },
            n.prototype.selectManyArrays = function (e) {
                var t; let
                    i;
                return void 0 !== e.args ? (t = `selectManyArrays_${e.hashCode}`,
                    void 0 === (i = _[t]) && (i = n.createOperator(t, {
                        onNext: inlineSelectManyArraysOperation.onNext.replace('%1', e.body).replace(d, '___arr = '),
                    }),
                        _[t] = i),
                    i.apply(this, e.args)) : selectManyArraysOperation.call(this, e);
            }
            ,
            a = n.createOperator('where', {
                onNext: 'if (arguments[0](value)) {     \n                _onNext(value);$$$                  \n            }',
            }),
            o = {
                onNext: 'var ___value; %1; if (___value) { _onNext(value); $$$ }',
            },
            n.prototype.where = function (e) {
                var t; let
                    i;
                return void 0 !== e.args ? (t = `where_${e.hashCode}`,
                    void 0 === (i = _[t]) && (i = n.createOperator(t, {
                        onNext: o.onNext.replace('%1', e.body).replace(d, '___value = '),
                    }),
                        _[t] = i),
                    i.apply(this, e.args)) : a.call(this, e);
            }
            ,
            n.prototype.compile = function () {
                var e; var t; var i; var n; var r; var s; var a; var o; var d; var
                    _ = [];
                for (t = 0; t < this.operations.length; t++) { _.push(this.operations[t].name); }
                if (void 0 !== (a = this.cachedFactories[_])) { return a; }
                for (e = (t = this.operations.length - 1) + 1,
                    s = this.operations[t],
                    i = `_${e}_$1`,
                    n = `args_${e}_0`,
                    `args_${e}_0`,
                    f.length,
                    'args_',
                    r = {
                        outerScope: void 0 !== s.outerScope ? s.outerScope.replace(p, `args_${e}_$1`) : '',
                        innerScope: void 0 !== s.innerScope ? (void 0).replace(p, `args_${e}_$1`) : '',
                        onNext: void 0 !== s.onNext ? s.onNext.replace(p, `args_${e}_$1`).replace(l, 'observer.onNext').replace(h, i).replace('$$$', '') : 'observer.onNext(value)',
                        onError: void 0 !== s.onError ? s.onError.replace(p, `args_${e}_$1]`).replace(u, 'observer.onError').replace(h, i) : 'observer.onError(error);',
                        onCompleted: void 0 !== s.onCompleted ? (void 0).replace(p, `args_${e}_$1]`).replace(c, 'observer.onCompleted').replace(h, i) : 'observer.onCompleted()',
                    },
                    t = this.operations.length - 2; t >= 0; t--) {
                    e = t + 1,
                        s = this.operations[t],
                        i = `_${e}_$1`,
                        n = `args_${e}_$1`,
                        r.outerScope = (s.outerScope || '') + r.outerScope,
                        r.innerScope = (s.innerScope || '') + r.innerScope,
                        r.onNext = void 0 !== s.onNext ? s.onNext.replace(p, n).replace(l, 'value = ').replace(h, i).replace('$$$', r.onNext) : r.onError = void 0 !== s.onError ? s.onError.replace(p, n).replace(u, 'observer.onError').replace(h, i) : r.onError,
                        r.onCompleted = void 0 !== s.onCompleted ? s.onCompleted.replace(p, n).replace(c, '').replace(h, i) : 'observer.onCompleted()';
                }
                for (o = '\n',
                    t = this.args.length - 1; t >= 0; t--) {
                    for (o += `var args_${t} = args[${t}]\n`,
                        d = this.args[t].length - 1; d >= 0; d--) o += `var args_${t}_${d} = args_${t}[${d}]\n`;
                }
                var v = `${r.outerScope}\nreturn Rx.Observable.createWithDisposable(function(observer) {                  ${o}${r.innerScope}\nvar subscription = args_0_0.subscribe(\n   function(value) {\n\n     try {\n${r.onNext}\n     }\n     catch(error) {\n\n        if (subscription !== undefined) { subscription.dispose(); }\n        observer.onError(error);\n     }\n   },\n   function(error) {\n${r.onError}\n   },\n   function() {\n${r.onCompleted}\n   });\nreturn subscription;\n})`;
                return a = new Function('args', v),
                    this.cachedFactories[_] = a,
                    a;
            };
    }(Rx),
    n.falcor.Sentinel = function (e) {
        this.value = e,
            this._sentinel = !0,
            this.size = typeof e === 'string' ? e.length : 1;
    }
    ,
    function (e) {
        var t = n.falcor.PathEvaluator.extend({
            init: function e(t, i, n) {
                e.base.call(this, n),
                    this.context = t,
                    this.root = this;
            },
            getData(e) {
                var t = this;
                return e.selectManyArrays(function (e) {
                    return t._getPQL(e);
                });
            },
            _objectTypeString: 'object',
            _getPQL(e) {
                var t; var i; var n; var r; var s; var a; var o; var l; var u; var c; var d; var h; var p; var f; var _; var v; var m; var b; var g; var y; var E; var T; var C = this.context; var S = new Array(1); var P = 0; var A = []; var k = 1; var x = this._objectTypeString; var
                    w = this._onGetting;
                for (e instanceof Array ? (i = (t = this.path).concat(e),
                    o = t.length,
                    l = []) : void 0 !== (i = e.evaluatedPath) ? (i = (u = e.absolutePath).concat(i.slice(u.length)),
                        o = e.pathOffset,
                        l = e.path.slice()) : (t = e.path,
                            i = e.absolutePath,
                            o = this.path.length + t.length,
                            l = t.slice()),
                    A[0] = {
                        evaluatedPath: i,
                        value: C,
                        previousContexts: [],
                        offset: -1,
                        pathOffset: o,
                        path: l,
                        absolutePath: [],
                    }; k > 0;) {
                    if (n = (i = (c = A[--k]).evaluatedPath).length - 1,
                        r = c.value,
                        s = c.previousContexts,
                        a = c.offset,
                        o = c.pathOffset,
                        l = c.path,
                        u = c.absolutePath,
                        a < n) {
                        if (r === null || typeof r !== x) {
                            void 0 !== w && w.call(this, u, s, r),
                                S[P] = c,
                                P++;
                            continue;
                        }
                        if (r instanceof Array) {
                            for (void 0 !== w && w.call(this, u, s, r),
                                b = {
                                    value: r,
                                    evaluatedPath: i,
                                },
                                E = l.length,
                                g = new Array(E); E--;) g[E] = l[E];
                            for (b.path = g,
                                E = u.length,
                                g = new Array(E); E--;) g[E] = u[E];
                            for (b.absolutePath = g,
                                S[P] = b,
                                P++,
                                u.length = 0,
                                s.length = 1,
                                s[0] = C,
                                m = r,
                                r = C,
                                y = (o = m.length) + ((f = i.length) - (a + 1)),
                                g = new Array(y),
                                E = 0; E < o; E++) g[E] = m[E];
                            for (T = a + 1; T < f; T++) {
                                g[E] = i[T],
                                    E++;
                            }
                            i = g,
                                n = y - 1,
                                a = -1;
                        } else {
                            if (r._error) {
                                void 0 !== w && w.call(this, u, s, r),
                                    S[P] = c,
                                    P++;
                                continue;
                            }
                            if (r._sentinel) {
                                void 0 !== w && w.call(this, u, s, r),
                                    c.value = r,
                                    S[P] = c,
                                    P++;
                                continue;
                            }
                            s[s.length] = r;
                        }
                    }
                    for (a += 1; a <= n; a++) {
                        if ((d = i[a]) instanceof Array) {
                            if (a >= o) {
                                for (o += 1,
                                    h = d.length - 1; h >= 0; h--) {
                                    if (void 0 !== (v = d[h]).to) {
                                        for (p = v.from || 0,
                                            _ = f = v.to; _ >= p; _--) {
                                            for (b = {
                                                evaluatedPath: i,
                                                value: r[_],
                                                offset: a,
                                                pathOffset: o,
                                            },
                                                E = s.length,
                                                g = new Array(E); E--;) g[E] = s[E];
                                            for (b.previousContexts = g,
                                                E = l.length,
                                                (g = new Array(E + 1))[E] = _; E--;) g[E] = l[E];
                                            for (b.path = g,
                                                E = u.length,
                                                (g = new Array(E + 1))[E] = _; E--;) g[E] = u[E];
                                            b.absolutePath = g,
                                                A[k] = b,
                                                k++;
                                        }
                                    } else {
                                        for (b = {
                                            evaluatedPath: i,
                                            value: r[v],
                                            offset: a,
                                            pathOffset: o,
                                        },
                                            E = s.length,
                                            g = new Array(E); E--;) g[E] = s[E];
                                        for (b.previousContexts = g,
                                            E = l.length,
                                            (g = new Array(E + 1))[E] = v; E--;) g[E] = l[E];
                                        for (b.path = g,
                                            E = u.length,
                                            (g = new Array(E + 1))[E] = v; E--;) g[E] = u[E];
                                        b.absolutePath = g,
                                            A[k] = b,
                                            k++;
                                    }
                                }
                            } else {
                                for (h = d.length - 1; h >= 0; h--) {
                                    if (void 0 !== (v = d[h]).to) {
                                        for (p = v.from || 0,
                                            _ = f = v.to; _ >= p; _--) {
                                            for (b = {
                                                evaluatedPath: i,
                                                value: r[_],
                                                offset: a,
                                                pathOffset: o,
                                            },
                                                E = s.length,
                                                g = new Array(E); E--;) g[E] = s[E];
                                            for (b.previousContexts = g,
                                                E = l.length,
                                                g = new Array(E); E--;) g[E] = l[E];
                                            for (b.path = g,
                                                E = u.length,
                                                (g = new Array(E + 1))[E] = _; E--;) g[E] = u[E];
                                            b.absolutePath = g,
                                                A[k] = b,
                                                k++;
                                        }
                                    } else {
                                        for (b = {
                                            evaluatedPath: i,
                                            value: r[v],
                                            offset: a,
                                            pathOffset: o,
                                        },
                                            E = s.length,
                                            g = new Array(E); E--;) g[E] = s[E];
                                        for (b.previousContexts = g,
                                            E = l.length,
                                            g = new Array(E); E--;) g[E] = l[E];
                                        for (b.path = g,
                                            E = u.length,
                                            (g = new Array(E + 1))[E] = v; E--;) g[E] = u[E];
                                        b.absolutePath = g,
                                            A[k] = b,
                                            k++;
                                    }
                                }
                            }
                            a = void 0;
                            break;
                        }
                        if (void 0 !== d.to) {
                            if (a >= o) {
                                for (o += 1,
                                    p = d.from || 0,
                                    _ = f = d.to; _ >= p; _--) {
                                    for (b = {
                                        evaluatedPath: i,
                                        value: r[_],
                                        offset: a,
                                        pathOffset: o,
                                    },
                                        E = s.length,
                                        g = new Array(E); E--;) g[E] = s[E];
                                    for (b.previousContexts = g,
                                        E = l.length,
                                        (g = new Array(E + 1))[E] = _; E--;) g[E] = l[E];
                                    for (b.path = g,
                                        E = u.length,
                                        (g = new Array(E + 1))[E] = _; E--;) g[E] = u[E];
                                    b.absolutePath = g,
                                        A[k] = b,
                                        k++;
                                }
                            } else {
                                for (p = d.from || 0,
                                    _ = f = d.to; _ >= p; _--) {
                                    for (b = {
                                        evaluatedPath: i,
                                        value: r[_],
                                        offset: a,
                                        pathOffset: o,
                                    },
                                        E = s.length,
                                        g = new Array(E); E--;) g[E] = s[E];
                                    for (b.previousContexts = g,
                                        E = l.length,
                                        g = new Array(E); E--;) g[E] = l[E];
                                    for (b.path = g,
                                        E = u.length,
                                        (g = new Array(E + 1))[E] = _; E--;) g[E] = u[E];
                                    b.absolutePath = g,
                                        A[k] = b,
                                        k++;
                                }
                            }
                            a = void 0;
                            break;
                        }
                        if (r = r[v = d],
                            a >= o && (l[l.length] = v,
                                o += 1),
                            u[u.length] = v,
                            a < n) {
                            if (r === null || typeof r !== x) {
                                void 0 !== w && w.call(this, u, s, r),
                                    c.value = r,
                                    c.evaluatedPath = i,
                                    c.pathOffset = o,
                                    S[P] = c,
                                    P++,
                                    a = void 0;
                                break;
                            }
                            if (r instanceof Array) {
                                for (void 0 !== w && w.call(this, u, s, r),
                                    b = {
                                        value: r,
                                        evaluatedPath: i,
                                    },
                                    E = l.length,
                                    g = new Array(E); E--;) g[E] = l[E];
                                for (b.path = g,
                                    E = u.length,
                                    g = new Array(E); E--;) g[E] = u[E];
                                for (b.absolutePath = g,
                                    S[P] = b,
                                    P++,
                                    u.length = 0,
                                    s.length = 1,
                                    m = r,
                                    r = C,
                                    y = (o = m.length) + ((f = i.length) - (a + 1)),
                                    g = new Array(y),
                                    E = 0; E < o; E++) g[E] = m[E];
                                for (T = a + 1; T < f; T++) {
                                    g[E] = i[T],
                                        E++;
                                }
                                i = g,
                                    n = y - 1,
                                    a = -1;
                            } else {
                                if (r._error) {
                                    void 0 !== w && w.call(this, u, s, r),
                                        c.value = r,
                                        c.evaluatedPath = i,
                                        c.pathOffset = o,
                                        S[P] = c,
                                        P++,
                                        a = void 0;
                                    break;
                                }
                                if (r._sentinel) {
                                    void 0 !== w && w.call(this, u, s, r),
                                        c.value = r,
                                        c.evaluatedPath = i,
                                        c.pathOffset = o,
                                        S[P] = c,
                                        P++,
                                        a = void 0;
                                    break;
                                }
                                s[s.length] = r;
                            }
                        }
                    }
                    void 0 !== a && (void 0 !== w && w.call(this, u, s, r),
                        c.evaluatedPath = void 0,
                        c.value = r,
                        S[P] = c,
                        P++);
                }
                return S;
            },
            deleteData(e) {
                var t = this;
                return Rx.Observable.fastCreateWithDisposable(function (i) {
                    var n = t.path;
                    var r = n.length;
                    return e.subscribe(function (e) {
                        return t._deletePQL(n.concat(e), t.context, [], -1, r, [], [], i);
                    }, function (e) {
                        i.onError(e);
                    }, function () {
                        i.onCompleted();
                    });
                });
            },
            _deletePQL(t, i, n, r, s, a, o, l) {
                var u; var c; var d; var h; var p; var f; var _; var v; var m; var b = e.Sentinel; let
                    g = t.length - 1;
                if (r === g) {
                    return this._onDeleting && this._onDeleting(o, n, i),
                        delete n[n.length - 1][t[r]],
                        void l.onNext({
                            path: a,
                            value: void 0,
                            absolutePath: o,
                        });
                }
                if (void 0 === i || i === null) {
                    return void 0 !== this._onSetting && this._onSetting(o, n, new b(i)),
                        void l.onNext({
                            path: a,
                            value: i,
                            absolutePath: o,
                            evaluatedPath: t,
                        });
                }
                if (i._sentinel) {
                    return i.path = o,
                        void 0 !== this._onGetting && this._onGetting(o, n, i),
                        void l.onNext({
                            path: a,
                            value: i.value,
                            absolutePath: o,
                            evaluatedPath: t,
                        });
                }
                if (i._error) {
                    return i.path = o,
                        void 0 !== this._onGetting && this._onGetting(o, n, i),
                        void l.onNext({
                            path: a,
                            value: i,
                            absolutePath: o,
                            evaluatedPath: t,
                        });
                }
                for (i instanceof Array ? (void 0 === (u = i.path) && (u = o.slice(),
                    i.path = u),
                    void 0 !== this._onGetting && this._onGetting(o, n, i),
                    l.onNext({
                        path: a.slice(),
                        value: i,
                        absolutePath: u,
                        evaluatedPath: t,
                    }),
                    o.length = 0,
                    n.length = 1,
                    n[0] = this.context,
                    m = i,
                    i = this.context,
                    s = m.length,
                    g = (t = m.concat(t.slice(r + 1))).length - 1,
                    r = -1) : n.push(i),
                    r += 1; r <= g; r++) {
                    if ((c = t[r]) instanceof Array) {
                        for (h = 0,
                            d = c.length; h < d; h++) {
                            if (void 0 !== (v = c[h]).to) {
                                for (p = v.from || 0,
                                    f = v.to,
                                    _ = p; _ <= f; _++) this._deletePQL(t, i[_], n.slice(), r, s, a.concat(_), o.concat(_), l);
                            } else this._deletePQL(t, i[v], n.slice(), r, s, a.concat(v), o.concat(v), l);
                        }
                        return;
                    }
                    if (void 0 !== c.to) {
                        for (p = c.from || 0,
                            f = c.to,
                            _ = p; _ <= f; _++) this._deletePQL(t, i[_], n.slice(), r, s, a.concat(_), o.concat(_), l);
                        return;
                    }
                    if (i = i[v = c],
                        r >= s && a.push(v),
                        o.push(v),
                        r === g) break;
                    if (void 0 === i || i === null) {
                        return void 0 !== this._onSetting && this._onSetting(o, n, new b(i)),
                            void l.onNext({
                                path: a,
                                value: i,
                                absolutePath: o,
                                evaluatedPath: t,
                            });
                    }
                    if (i._sentinel) {
                        return i.path = o,
                            void 0 !== this._onGetting && this._onGetting(o, n, i),
                            void l.onNext({
                                path: a,
                                value: i.value,
                                absolutePath: o,
                                evaluatedPath: t,
                            });
                    }
                    if (i._error) {
                        return i.path = o,
                            void 0 !== this._onGetting && this._onGetting(o, n, i),
                            void l.onNext({
                                path: a,
                                value: i,
                                absolutePath: o,
                                evaluatedPath: t,
                            });
                    }
                    i instanceof Array ? (void 0 === (u = i.path) && (u = o.slice(),
                        i.path = u),
                        void 0 !== this._onGetting && this._onGetting(o, n, i),
                        l.onNext({
                            path: a.slice(),
                            value: i,
                            absolutePath: u,
                            evaluatedPath: t,
                        }),
                        o.length = 0,
                        n.length = 1,
                        n[0] = this.context,
                        m = i,
                        i = this.context,
                        s = m.length,
                        g = (t = m.concat(t.slice(r + 1))).length - 1,
                        r = -1) : n.push(i);
                }
                this._onDeleting && this._onDeleting(o, n, i),
                    delete n[n.length - 1][v],
                    l.onNext({
                        path: a,
                        value: void 0,
                        absolutePath: o,
                    });
            },
            setData(e) {
                var t = this;
                return e.selectManyArrays(function (e) {
                    return t._setPBV(e);
                });
            },
            _setPBV(e) {
                var t; var i; var n; var r; var s; var a; var o; var l; var u; var c; var d; var h; var p; var f; var _; var v; var m; var b; var g; var y; var E; var T; var C = this.path; var S = this._onClearing; var P = this._onSetting; var A = []; let
                    k = 0;
                if (i = e.absolutePath,
                    n = e.value,
                    e.invalidated) {
                    return this._deletePQL(C.concat(i || e.path), this.context, [], -1, C.length, [], [], {
                        onNext() { },
                    }),
                        A[0] = e,
                        A;
                }
                if (void 0 === i && (i = C.concat(e.path),
                    e = void 0),
                    r = this.context,
                    s = [],
                    a = -1,
                    o = C.length,
                    l = [],
                    u = [],
                    void 0 !== e && void 0 !== (u = e.absolutePath)) {
                    for (v = u.length,
                        s.length = v,
                        v--,
                        c = 0; c < v; c++) {
                        y = u[c],
                            T = r,
                            s[c] = T,
                            void 0 === (r = r[y]) || r === null ? (r = {},
                                T[y] = r) : (r._sentinel || r._error) && (s.length = c + 1,
                                    void 0 !== S && S.call(this, s, r),
                                    r = {},
                                    T[y] = r);
                    }
                    y = u[v],
                        T = r,
                        s[v] = T,
                        void 0 !== P ? P.call(this, u, s, n, T[y]) : T[y] = n,
                        A[k] = e,
                        k += 1;
                } else {
                    for (t = this._onGetting,
                        d = [{
                            evaluatedPath: i,
                            newValue: n,
                            value: r,
                            previousContexts: s,
                            offset: a,
                            pathOffset: o,
                            path: l,
                            absolutePath: u,
                        }]; d.length > 0;) {
                        if (f = (i = (h = d.pop()).evaluatedPath).length - 1,
                            n = h.newValue,
                            p = this.context,
                            r = h.value,
                            s = h.previousContexts,
                            a = h.offset,
                            o = h.pathOffset,
                            l = h.path,
                            u = h.absolutePath,
                            a === f) {
                            this._onSetting ? this._onSetting(u, s, n, r) : s[s.length - 1][i[a]] = n,
                                h.previousContexts = void 0,
                                h.offset = void 0,
                                h.value = n,
                                h.newValue = void 0,
                                h.pathOffset = void 0,
                                h.evaluatedPath = void 0,
                                A[k] = h,
                                k += 1;
                            break;
                        }
                        for (void 0 === r || r === null ? (r = {},
                            (T = s[s.length - 1])[u[u.length - 1]] = r,
                            s.push(r),
                            a += 1) : r._sentinel || r._error ? (void 0 !== S && S.call(this, s, r),
                                r = {},
                                (T = s[s.length - 1])[u[u.length - 1]] = r,
                                s.push(r),
                                a += 1) : r instanceof Array ? (void 0 !== t && t.call(this, u, s, r),
                                    e = void 0,
                                    A[k] = {
                                        path: l.slice(),
                                        value: r,
                                        absolutePath: u.slice(),
                                        evaluatedPath: i,
                                    },
                                    k += 1,
                                    u.length = 0,
                                    s.length = 1,
                                    s[0] = p,
                                    E = r,
                                    r = p,
                                    o = E.length,
                                    f = (i = E.concat(i.slice(a + 1))).length - 1,
                                    a = 0) : (s.push(r),
                                        a += 1); a <= f; a++) {
                            if ((_ = i[a]) instanceof Array) {
                                if (a >= o) {
                                    for (o += 1,
                                        m = _.length - 1; m >= 0; m--) {
                                        if (void 0 !== (y = _[m]).to) {
                                            for (b = y.from || 0,
                                                g = y.to; g >= b; g--) {
                                                d.push({
                                                    value: void 0,
                                                    evaluatedPath: i,
                                                    newValue: n,
                                                    value: r[g],
                                                    previousContexts: s.slice(),
                                                    offset: a,
                                                    pathOffset: o,
                                                    path: l.concat(g),
                                                    absolutePath: u.concat(g),
                                                });
                                            }
                                        } else {
                                            d.push({
                                                value: void 0,
                                                evaluatedPath: i,
                                                newValue: n,
                                                value: r[y],
                                                previousContexts: s.slice(),
                                                offset: a,
                                                pathOffset: o,
                                                path: l.concat(y),
                                                absolutePath: u.concat(y),
                                            });
                                        }
                                    }
                                } else {
                                    for (m = _.length - 1; m >= 0; m--) {
                                        if (void 0 !== (y = _[m]).to) {
                                            for (b = y.from || 0,
                                                g = y.to; g >= b; g--) {
                                                d.push({
                                                    value: void 0,
                                                    evaluatedPath: i,
                                                    newValue: n,
                                                    value: r[g],
                                                    previousContexts: s.slice(),
                                                    offset: a,
                                                    pathOffset: o,
                                                    path: l.slice(),
                                                    absolutePath: u.concat(g),
                                                });
                                            }
                                        } else {
                                            d.push({
                                                value: void 0,
                                                evaluatedPath: i,
                                                newValue: n,
                                                value: r[y],
                                                previousContexts: s.slice(),
                                                offset: a,
                                                pathOffset: o,
                                                path: l.slice(),
                                                absolutePath: u.concat(y),
                                            });
                                        }
                                    }
                                }
                                a = void 0;
                                break;
                            }
                            if (void 0 !== _.to) {
                                if (a >= o) {
                                    for (o += 1,
                                        b = _.from || 0,
                                        g = _.to; g >= b; g--) {
                                        d.push({
                                            value: void 0,
                                            evaluatedPath: i,
                                            newValue: n,
                                            value: r[g],
                                            previousContexts: s.slice(),
                                            offset: a,
                                            pathOffset: o,
                                            path: l.concat(g),
                                            absolutePath: u.concat(g),
                                        });
                                    }
                                } else {
                                    for (b = _.from || 0,
                                        g = _.to; g >= b; g--) {
                                        d.push({
                                            value: void 0,
                                            evaluatedPath: i,
                                            newValue: n,
                                            value: r[g],
                                            previousContexts: s.slice(),
                                            offset: a,
                                            pathOffset: o,
                                            path: l.slice(),
                                            absolutePath: u.concat(g),
                                        });
                                    }
                                }
                                a = void 0;
                                break;
                            }
                            if (T = r,
                                r = r[y = _],
                                a >= o && (l.push(y),
                                    o += 1),
                                u.push(y),
                                a === f) break;
                            void 0 === r || r === null ? (r = {},
                                T[y] = r,
                                s.push(r)) : r._sentinel || r._error ? (void 0 !== S && S.call(this, s, r),
                                    r = {},
                                    T[y] = r,
                                    s.push(r)) : r instanceof Array ? (e = void 0,
                                        A[k] = {
                                            path: l.slice(),
                                            value: r,
                                            absolutePath: u.slice(),
                                            evaluatedPath: i,
                                        },
                                        k += 1,
                                        u.length = 0,
                                        s.length = 1,
                                        s[0] = p,
                                        E = r,
                                        r = p,
                                        o = E.length,
                                        f = (i = E.concat(i.slice(a + 1))).length - 1,
                                        a = -1) : s.push(r);
                        }
                        void 0 !== a && (P ? P.call(this, u, s, n, r) : T[y] = n,
                            void 0 !== e ? (A[k] = e,
                                k += 1) : (h.previousContexts = void 0,
                                    h.offset = void 0,
                                    h.value = n,
                                    h.newValue = void 0,
                                    h.pathOffset = void 0,
                                    h.evaluatedPath = void 0,
                                    A[k] = h,
                                    k += 1));
                    }
                }
                return A;
            },
            callData(e, t, i) {
                return this.getData(this.getData(Rx.Observable.returnValue(e)).selectMany(function (e) {
                    return e.apply(null, t).selectMany(function (e) {
                        return Rx.Observable.fromArray(i).select(function (t) {
                            return e.path.concat(t);
                        });
                    });
                }).concat(Rx.Observable.fromArray(Array.prototype.slice.call(argments, 3))));
            },
        });
        t.makeArrayAnObject = function (e) {
            var t; var i; var
                n = {};
            for (t = 0,
                i = e.length; t < i; t++) { n[t] = e[t]; }
            return n.length = i,
                n;
        }
            ,
            t.prototype._getPQLInlineClosure = new Rx.InlineClosure(t.prototype._getPQL.toString().replace(/this/gi, 'arguments[0]')),
            e.JSONGPathEvaluator = t;
    }(n.falcor),
    function (e) {
        var t; var
            i = 'falcor.RemotePathEvaluator';
        t = e.PathEvaluator.extend({
            init: function e(i, n, r, s, a, o) {
                i instanceof t ? e.base.call(this, n) : (e.base.call(this, s),
                    this._address = n,
                    this._requestQueue = i,
                    this._params = r || {},
                    this.root = this);
            },
            createPSBVFromMessage(e) {
                var t = e.error;
                if (void 0 !== t && t.statusCode && (n.console.error && n.console.error({
                    area: i,
                    message: 'HTTP response exception',
                    error: t,
                }),
                    t.statusCode !== 401)) throw t;
                return e;
            },
            getRelativeObject(e, t) {
                return this._getPaths(e, t).select(this.createPSBVFromMessage);
            },
            callRelativeObject(e, t, i, n, r) {
                return this._callPaths(e, t, i, n, r).select(this.createPSBVFromMessage);
            },
            getObject() {
                var e = Array.prototype.slice.call(arguments);
                return this._getPaths(e).select(function (e) {
                    var t = e.error;
                    if (void 0 !== t && t.statusCode) {
                        throw n.console.error && n.console.error({
                            area: i,
                            message: 'HTTP response exception',
                            error: t,
                        }),
                        t;
                    }
                    return e;
                });
            },
            getData(t) {
                var r = this;
                return Rx.Observable.create(function (s) {
                    var a;
                    return a = t.toArrayFast().subscribe(function (t) {
                        var o; var l; var u; var
                            c = [];
                        for (u = t.length; u--;) {
                            void 0 === (l = t[u]).length ? (o = void 0 !== (o = l.evaluatedPath) ? l.absolutePath.concat(o.slice(l.absolutePath.length)) : l.absolutePath,
                                c.push(o || r.path.concat(l.path))) : c.push(r.path.concat(l));
                        }
                        e.PathEvaluator.collapse(c),
                            c.length > 0 ? a = r._getPaths(c).subscribe(function (o) {
                                var l;
                                void 0 !== o.error && o.error.statusCode ? (l = o.error,
                                    n.console.error && n.console.error({
                                        area: i,
                                        message: 'HTTP response exception',
                                        error: l,
                                    }),
                                    s.onError(l)) : a = new e.JSONGPathEvaluator(o.value).bind(r.path).getData(Rx.Observable.fromArrayFast(t)).subscribe(s);
                            }, function (i) {
                                e.PathEvaluator.explode(t, function (e) {
                                    var t = e.slice();
                                    s.onNext({
                                        path: t,
                                        value: Object.create(i, {
                                            path: {
                                                value: {
                                                    path: t,
                                                },
                                            },
                                        }),
                                    });
                                }),
                                    s.onCompleted();
                            }) : s.onCompleted();
                    }, function (e) {
                        s.onError(e);
                    }),
                        function () {
                            void 0 !== a && (a.dispose(),
                                a = void 0);
                        };
                });
            },
            callData(t, i, n, r) {
                var s = this;
                return this.callRelativeObject(t, i, n, r, {}).selectMany(function (t) {
                    var i = t.invalidated;
                    var n = new e.JSONGPathEvaluator(t.value).bind(s.path).getData(Rx.Observable.fromArrayFast(r));
                    return void 0 !== i && (n = Rx.Observable.fromArrayFast(i).select(function (e) {
                        return {
                            path: e,
                            invalidated: !0,
                        };
                    }).concat(n)),
                        n;
                });
            },
            _getPaths(t, r) {
                var s; var a; var o; var l; var u = this; var c = this._params; let
                    d = '';
                if (void 0 !== r) {
                    for (l in c = Object.create(c),
                        r) c[l] = r[l];
                }
                if (t.length === 0) return Rx.Observable.empty();
                for (o in c) d += `&${o}=${encodeURIComponent(c[o])}`;
                for (s = t.length - 1; s >= 0; s--) {
                    a = t[s],
                        d += `&path=${encodeURIComponent(JSON.stringify(a))}`;
                }
                return d = `${u._address || ''}?method=get${d}`,
                    Rx.Observable.createWithDisposable(function (r) {
                        var s = function (s) {
                            var a; var o; var l; var u; var c; var
                                h = s.error;
                            if (void 0 !== h) {
                                for (e.PathBoundError,
                                    n.console.error && n.console.error({
                                        area: i,
                                        error: h,
                                        url: d,
                                    }),
                                    s.value !== null && void 0 !== s.value || (s.value = {}),
                                    a = new e.JSONGPathEvaluator(s.value),
                                    o = [h]; o.length > 0;) {
                                    if (void 0 !== (u = (l = o.pop()).innerErrors)) for (c = u.length - 1; c >= 0; c--) o.push(u[c]);
                                    else {
                                        void 0 !== l.pql ? a.setData(e.PathEvaluator.explodeAsObservable([l.pql]).select(function (t) {
                                            return {
                                                path: t,
                                                value: new e.PathBoundError(t),
                                            };
                                        })).subscribe() : l && l.statusCode !== 401 && a.setData(e.PathEvaluator.explodeAsObservable(t).select(function (t) {
                                            return {
                                                path: t,
                                                value: new e.PathBoundError(t),
                                            };
                                        })).subscribe();
                                    }
                                }
                            }
                            r.onNext(s);
                        };
                        return u._requestQueue.load(d).subscribe(s, function (e) {
                            s({
                                paths: t,
                                error: e,
                            }),
                                r.onCompleted();
                        }, function () {
                            r.onCompleted();
                        });
                    });
            },
            _callPaths(t, r, s, a, o) {
                var l; var u; var c; var d; var h; var p = this; var f = this._params; let
                    _ = '';
                if (void 0 !== o) {
                    for (d in f = Object.create(f),
                        o) f[d] = o[d];
                }
                for (c in f) _ += `&${c}=${encodeURIComponent(f[c])}`;
                for (l = 0; l < r.length; l++) _ += `&param=${encodeURIComponent(JSON.stringify(r[l]))}`;
                for (u = 0; u < s.length; u++) _ += `&pathSuffix=${encodeURIComponent(JSON.stringify(s[u]))}`;
                for (h = 0; h < a.length; h++) _ += `&path=${encodeURIComponent(JSON.stringify(a[h]))}`;
                return _ = `${p._address || ''}?method=call${_}&callPath=${JSON.stringify(t)}`,
                    Rx.Observable.createWithDisposable(function (t) {
                        var r = function (r) {
                            var s; var a; var o; var l; var u; var c; var d = r.error; var
                                h = r.paths;
                            if (void 0 !== d) {
                                for (s = e.PathBoundError,
                                    n.console.error && n.console.error({
                                        area: i,
                                        error: d,
                                        url: _,
                                    }),
                                    r.value !== null && void 0 !== r.value || (r.value = {}),
                                    a = new e.JSONGPathEvaluator(r.value),
                                    o = [d]; o.length > 0;) {
                                    if (void 0 !== (u = (l = o.pop()).innerErrors)) for (c = u.length - 1; c >= 0; c--) o.push(u[c]);
                                    else {
                                        void 0 !== l.pql ? a.setData(e.PathEvaluator.explodeAsObservable([l.pql]).doAction(function (e) {
                                            h.push(e);
                                        }).select(function (e) {
                                            return {
                                                path: e,
                                                value: new s(e, l.message),
                                            };
                                        })).subscribe() : a.setData(e.PathEvaluator.explodeAsObservable(h).select(function (t) {
                                            return {
                                                path: t,
                                                value: new e.PathBoundError(t),
                                            };
                                        })).subscribe();
                                    }
                                }
                            }
                            t.onNext(r);
                        };
                        return p._requestQueue.load(_).subscribe(r, function (e) {
                            r({
                                paths: a,
                                error: e,
                            }),
                                t.onCompleted();
                        }, function () {
                            t.onCompleted();
                        });
                    });
            },
        }),
            e.RemotePathEvaluator = t;
    }(n.falcor),
    n.DoubleLinkedList = n.Class.create({
        init() {
            this._head = void 0,
                this._tail = void 0,
                this._listId = n.DoubleLinkedList.listCount++;
        },
        addToHead(e) {
            var t = this._head;
            var i = this._tail;
            var n = e.listId === this._listId ? e : {
                obj: e,
                listId: this._listId,
            };
            return n.next = t,
                n.prev = void 0,
                t && (t.prev = n),
                i || (this._tail = n),
                this._head = n,
                n;
        },
        addToTail(e) {
            var t = this._head;
            var i = this._tail;
            var n = e.listId === this._listId ? e : {
                obj: e,
                listId: this._listId,
            };
            return n.prev = i,
                n.next = void 0,
                i && (i.next = n),
                t || (this._head = n),
                this._tail = n,
                n;
        },
        popFromHead() {
            var e; let
                t = this._head;
            if (t) {
                return t === this._tail ? (this._head = this._tail = void 0,
                    t.obj) : (e = t,
                        this._head = t = t.next,
                        t.prev = void 0,
                        e.obj);
            }
        },
        popFromTail() {
            var e; let
                t = this._tail;
            if (t) {
                return t === this._head ? (this._tail = this._head = void 0,
                    t.obj) : (e = t,
                        this._tail = t = t.prev,
                        t.next = void 0,
                        e.obj);
            }
        },
        remove(e) {
            var t = this._head;
            var i = this._tail;
            return void 0 !== e && e.listId === this._listId && (e.prev && (e.prev.next = e.next),
                e.next && (e.next.prev = e.prev),
                e === t && (this._head = e.next),
                e === i && (this._tail = e.prev),
                !0);
        },
        get head() {
            return this._head;
        },
        get tail() {
            return this._tail;
        },
        toJSON() {
            for (var e = this._head, t = []; e;) {
                t.push(e.obj),
                    e = e.next;
            }
            return t;
        },
        toString() {
            return JSON.stringify(this.toJSON());
        },
    }),
    n.DoubleLinkedList.listCount = 0,
    n.falcor.RelativeCache = n.Class.create({
        init(e, t) {
            this._maxSize = t,
                this._root = void 0 === e ? {} : e,
                this._lruList = new n.DoubleLinkedList(),
                this._lruPaths = {},
                this.collections = new Rx.Subject();
        },
        get lru() {
            for (var e = [], t = this._lruList._head; void 0 !== t;) {
                e.push(t.obj),
                    t = t.next;
            }
            return e;
        },
        get size() {
            return this._root.size;
        },
        get root() {
            return this._root;
        },
        del() {
            var e; var t; var i; var r; var s; var a; var o; var l; var u; var c; var d = arguments.length; var h = arguments; var p = 0; var
                f = [];
            for (f[-1] = this._root,
                e = 0; e < d; e++) {
                t = arguments[e],
                    i = JSON.stringify(t),
                    void 0 !== (u = this._lruPaths[i]) && (this._lruList.remove(u),
                        delete this._lruPaths[i]);
            }
            n.falcor.PathEvaluator.explode(h, function (e, t, i) {
                for (r = f[i - 1],
                    s = r[e[i]],
                    f[i] = s,
                    p = i + 1; p < e.length && void 0 !== s; p++) {
                    s = (r = s)[e[p]],
                        f[p] = s;
                }
                if (p !== e.length) return p - 1;
                if (void 0 !== s) {
                    for (l = s.size || 1,
                        c = !1,
                        p = e.length - 1; p >= -1; p--) {
                        s = f[p],
                            o = (s.size || 1) - l,
                            s.size = o,
                            c || (s._locks ? c = !0 : o === 0 && (a = f[p - 1],
                                p >= 0 && delete a[e[p]]));
                    }
                }
            });
        },
        touch(e) {
            var t = JSON.stringify(e);
            var i = this._lruPaths[t];
            void 0 !== i ? (this._lruList.remove(i),
                this._lruList.addToTail(i)) : this._lruPaths[t] = this._lruList.addToTail(e);
        },
        _onMaxSizeExceeded() {
            var e = this._lruList.popFromHead();
            var t = this._root;
            var i = 0.75 * this._maxSize;
            if (void 0 !== e) {
                for (delete this._lruPaths[JSON.stringify(e)],
                    n.console.log('_onMaxSizeExceeded(): del()', e),
                    this.del(e); void 0 !== e && t.size > i;) {
                    void 0 !== (e = this._lruList.popFromHead()) && (delete this._lruPaths[JSON.stringify(e)],
                        n.console.log('_onMaxSizeExceeded(): del()', e),
                        this.del(e));
                }
            }
        },
        updateCache(e, t, i) {
            var r; var s; var a; var o; var l; var u; var c; var d; var h; var p; var f; var _; var v; var m; var b; var g; var y; var E; var T; var C; var S; var P; var A; var k; var x = this; var w = Array.isArray; var I = e.length; var M = []; let
                L = [];
            for (i = void 0 !== i ? i : this._root,
                a = 0; a < I; a++) {
                for (o = e[a],
                    A = 0,
                    M[0] = {
                        context: t,
                        cacheContext: i,
                    },
                    P = 1,
                    m = 0,
                    u = (l = o.length) - 1; m < l && P > 0; m++) {
                    for (A = P,
                        k = L,
                        L = M,
                        M = k,
                        P = 0; A > 0;) {
                        if (S = L[A - 1],
                            A--,
                            b = o[m],
                            c = S.context,
                            d = S.cacheContext,
                            void 0 !== (C = b.to)) {
                            for (T = b.from || 0,
                                E = C; E >= T; E--) {
                                if (_ = c[E],
                                    v = d[E],
                                    void 0 !== _) {
                                    if (void 0 !== v) {
                                        if (a !== u) {
                                            v._parent = d,
                                                M[P] = {
                                                    context: _,
                                                    cacheContext: v,
                                                },
                                                P++;
                                        } else {
                                            for (s = (_.size || 1) - (v.size || 1),
                                                d[E] = _,
                                                v = d; void 0 !== v;) {
                                                r = v.size || 0,
                                                    v.size = s + r,
                                                    v = v._parent;
                                            }
                                        }
                                    } else {
                                        for (s = _.size || 1,
                                            d[E] = _,
                                            v = d; void 0 !== v;) {
                                            r = v.size || 0,
                                                v.size = s + r,
                                                v = v._parent;
                                        }
                                    }
                                }
                            }
                        } else if (w(b)) {
                            for (y = b.length - 1; y >= 0; y--) {
                                if (void 0 !== (C = (g = b[y]).to)) {
                                    for (T = g.from || 0,
                                        E = C; E >= T; E--) {
                                        if (_ = c[E],
                                            v = d[E],
                                            void 0 !== _) {
                                            if (void 0 !== v) {
                                                if (a !== u) {
                                                    v._parent = d,
                                                        M[P] = {
                                                            context: _,
                                                            cacheContext: v,
                                                        },
                                                        P++;
                                                } else {
                                                    for (s = (_.size || 1) - (v.size || 1),
                                                        d[E] = _,
                                                        v = d; void 0 !== v;) {
                                                        r = v.size || 0,
                                                            v.size = s + r,
                                                            v = v._parent;
                                                    }
                                                }
                                            } else {
                                                for (s = _.size || 1,
                                                    d[E] = _,
                                                    v = d; void 0 !== v;) {
                                                    r = v.size || 0,
                                                        v.size = s + r,
                                                        v = v._parent;
                                                }
                                            }
                                        }
                                    }
                                } else {
                                    if (p = c[g],
                                        f = d[g],
                                        void 0 === p) continue;
                                    if (void 0 === f) {
                                        for (s = p.size || 1,
                                            d[g] = p,
                                            f = d; void 0 !== f;) {
                                            r = f.size || 0,
                                                f.size = s + r,
                                                f = f._parent;
                                        }
                                        continue;
                                    }
                                    if (a === u) {
                                        for (s = (p.size || 1) - (f.size || 1),
                                            d[g] = p,
                                            f = d; void 0 !== f;) {
                                            r = f.size || 0,
                                                f.size = s + r,
                                                f = f._parent;
                                        }
                                        continue;
                                    }
                                    f._parent = d,
                                        M[P] = {
                                            context: p,
                                            cacheContext: f,
                                        },
                                        P++;
                                }
                            }
                        } else {
                            if (h = d,
                                c = c[b],
                                d = h[b],
                                void 0 === c) break;
                            if (void 0 === d) {
                                for (s = c.size || 1,
                                    h[b] = c,
                                    f = h; void 0 !== f;) {
                                    r = f.size || 0,
                                        f.size = s + r,
                                        f = f._parent;
                                }
                                continue;
                            }
                            if (a === u) {
                                for (s = (c.size || 1) - (d.size || 1),
                                    h[b] = c,
                                    f = h; void 0 !== f;) {
                                    r = f.size || 0,
                                        f.size = s + r,
                                        f = f._parent;
                                }
                                continue;
                            }
                            d._parent = h,
                                M[P] = {
                                    context: c,
                                    cacheContext: d,
                                },
                                P++;
                        }
                    }
                }
                void 0 !== x._maxSize && x._root.size > x._maxSize && (n.console.log(`RelativeCache size: ${x._root.size} of ${x._maxSize}`),
                    this._isCollecting || (this._isCollecting = !0,
                        setTimeout(function () {
                            try {
                                x._onMaxSizeExceeded.call(x),
                                    x.collections.onNext();
                            } finally {
                                x._isCollecting = !1;
                            }
                        }, 0)));
            }
        },
    }),
    function (e) {
        var t = Object.create(new Rx.Observer(), {
            onNext: {
                value(e) {
                    var t; var i; var n; var r; var s; var a = e.paths; var o = e.invalidated; var l = this.pathEvaluator._cache; var u = this.pathEvaluator; var c = this.reversePathMap; var d = this.pathPrefix; var h = e.value; var p = this.basePath.length; var
                        f = new Array(1);
                    for (void 0 !== o && u.delCache.apply(u, o),
                        i = 0,
                        r = a.length; i < r; i++) {
                        f[0] = a[i],
                            u._updateTranslatedPaths(f, h, c);
                    }
                    if (void 0 !== d) {
                        for (s = this.pathPrefixOffset,
                            n = a.length; n--;) {
                            t = d.concat(a[n].slice(s)),
                                l.touch(t),
                                p > 0 && (t = t.slice(p)),
                                a[n] = t;
                        }
                    } else {
                        for (r = (a = this.jsonPaths).length,
                            n = 0; n < r; n++) {
                            t = a[n],
                                l.touch(t);
                        }
                    }
                    e.paths = a,
                        e.value = u._getPath(this.basePath, l._root),
                        this.observer.onNext(e);
                },
            },
            onError: {
                value(e) {
                    var t; var i = this.jsonPaths; var n = this.jsonPaths.length; var
                        r = this.pathEvaluator._cache;
                    for (t = 0; t < n; t++) r.touch(i[t]);
                    void 0 !== this.reversePathMap && this.pathEvaluator._unlock(this.reversePathMap),
                        this.observer.onError(e);
                },
            },
            onCompleted: {
                value() {
                    this.observer.onCompleted();
                },
            },
        });
        var i = n.Class.create({
            init(e, t, i) {
                this.source = e,
                    this._cache = t,
                    this._root = this,
                    this._pathTranslationOptions = i || 0;
            },
            path: [],
            bind(e) {
                var t = Object.create(this);
                return t.path = this.path.concat(e),
                    t._root = this,
                    t;
            },
            get cache() {
                var e; var t = this._root._cache.root; var i = this.path; var
                    n = i.length;
                for (e = 0; e < n && void 0 !== t; e++) { t = t[i[e]]; }
                return t;
            },
            delCache() {
                var e; var t = this.path; var i = arguments.length; var
                    n = this._root._cache;
                for (e = 0,
                    e = i - 1; e >= 0; e--) n.del(t.concat(arguments[e]));
            },
            _getPath(e, t) {
                var i; var n; var
                    r = e.length;
                for (i = 0; i < r && void 0 !== t && t; i++) {
                    (n = e[i]) instanceof Array && (n = n[0]),
                        void 0 !== n.to && (n = n.from || 0),
                        t = t[n];
                }
                return t;
            },
            getPath(e) {
                var t = this.path;
                var i = t.length > 0 ? this._getPath(t) : this._root.cache.root;
                return this._getPath(e, i);
            },
            _opts: {
                pathFormat: 'hierarchical',
            },
            getOptimized() {
                var e = Object.create(this, this._optimizedPropertyDescriptor);
                return e.get.apply(e, arguments);
            },
            _unlock(e) {
                var t; var i; var n; let
                    r;
                if (Array.isArray(e)) {
                    for (n = e.length,
                        i = 0; i < n; i++) (r = e[i])._locks && r._locks--;
                } else for (t in e) this._unlock(e[t]);
            },
            _optimizePaths(t, i, n) {
                var r; var s; var a; var o; var l; var u; var c; var d; var h; var p; var f; var _; var v; var m; var b; var g; var y; var E; var T; var C; var S; var P = this._cache; var A = this._root._cache.root; var k = t.length; var x = {}; var w = []; var I = []; var
                    M = new Array(1);
                for (w[-1] = A,
                    s = 0; s < k; s++) {
                    a = t[s],
                        o = a.length,
                        void 0 !== this._getPath(a, A) && (P.touch(a),
                            n) || (M[0] = a,
                                e.PathEvaluator.explode(M, function (e, t, s) {
                                    for (_ = w[s - 1],
                                        r = s; void 0 !== _ && r < o; r++) {
                                        if (l = e[r],
                                            _ = _[l],
                                            w[r] = _,
                                            r === o - 1 || void 0 === _ || i && (S = (C = a[r]) instanceof Array || void 0 !== C.to)) {
                                            for ((S || void 0 === _) && r--,
                                                v = w[r],
                                                y = r; void 0 !== v && void 0 === (m = v.path) && y >= s; y--) v = v._parent;
                                            if (void 0 !== m) {
                                                for (n || (c = m.length,
                                                    u = a.slice(0, r + 1)),
                                                    b = new Array(o - (y + 1) + m.length),
                                                    p = x,
                                                    E = 0,
                                                    T = m.length; E < T - 1; E++) {
                                                    h = m[E],
                                                        b[E] = h,
                                                        void 0 === (p = (d = p)[h]) && (p = {},
                                                            d[h] = p);
                                                }
                                                h = m[E],
                                                    b[E] = h,
                                                    p = (d = p)[h],
                                                    (f = w[y])._locks = (f._locks || 0) + 1,
                                                    p instanceof Array ? p[p.length] = f : (p = [f],
                                                        d[h] = p),
                                                    g = E + 1,
                                                    y++;
                                            } else {
                                                y = 0,
                                                    g = (b = []).length;
                                            }
                                            for (; y <= r; y++) {
                                                b[g] = e[y],
                                                    g++;
                                            }
                                            for (; y < o; y++) {
                                                b[g] = a[y],
                                                    g++;
                                            }
                                            return I[I.length] = b,
                                                r;
                                        }
                                        _._parent = w[r - 1];
                                    }
                                }));
                }
                return {
                    reversePathMap: x,
                    translatedPaths: I,
                    pathPrefixOffset: c,
                    pathPrefix: u,
                };
            },
            call(e, i, n, r) {
                var s; var a; var o; var l; var u = this; var c = []; var
                    d = this.path;
                return c.push(this.path.concat(e)),
                    o = this._optimizePaths(c, !0, !1),
                    a = o.reversePathMap,
                    s = o.translatedPaths,
                    Rx.Observable.fastCreateWithDisposable(function (e) {
                        return (l = Object.create(t)).pathEvaluator = u,
                            l.reversePathMap = a,
                            l.jsonPaths = c,
                            l.observer = e,
                            l.basePath = d,
                            l.pathPrefix = o.pathPrefix,
                            l.pathPrefixOffset = o.pathPrefixOffset,
                            u.source.callRelativeObject(s[0], i || [], n || [], r || [], u._opts).subscribe(l);
                    });
            },
            get() {
                var n; var r; var s; var a; var o; var l = this; var u = Object.create(l._opts); var c = this.path; var d = arguments; var
                    h = arguments.length;
                if (c.length > 0) {
                    for (d = new Array(h),
                        s = 0; s < h; s++) d[s] = c.concat(arguments[s]);
                }
                return n = this._optimizePaths(d, (this._pathTranslationOptions & i.OPTIMIZE_PATHS) !== i.OPTIMIZE_PATHS, !0),
                    a = n.reversePathMap,
                    r = n.translatedPaths,
                    (l._pathTranslationOptions & i.COLLAPSE_PATHS) === i.COLLAPSE_PATHS ? e.PathEvaluator.collapse(r) : (l._pathTranslationOptions & i.OPTIMIZE_PATHS) === i.OPTIMIZE_PATHS && (u.collapsePaths = !0),
                    r.length === 0 ? Rx.Observable.fastReturnValue({
                        paths: Array.prototype.slice.call(arguments),
                        value: l.cache,
                    }) : Rx.Observable.fastCreateWithDisposable(function (e) {
                        return (o = Object.create(t)).pathEvaluator = l,
                            o.reversePathMap = a,
                            o.jsonPaths = d,
                            o.observer = e,
                            o.basePath = c,
                            l.source.getRelativeObject(r, u).subscribe(o);
                    });
            },
            _updateTranslatedPaths(e, t, i) {
                var n; var r; var s; var a; var o; var l; var u; var c; var d; var h; var p; var f; var _; var v; var m; var b; var g; var y; var E; var T; var C; var S; var P; var A; var k = this._cache; var x = Array.isArray; var w = e.length; var I = []; let
                    M = [];
                for (a = 0; a < w; a++) {
                    for (o = e[a],
                        P = 0,
                        I[0] = {
                            context: t,
                            reversePathMapContext: i,
                        },
                        S = 1,
                        v = 0,
                        (l = o.length) - 1; v < l && S > 0; v++) {
                        for (P = S,
                            A = M,
                            M = I,
                            I = A,
                            S = 0; P > 0;) {
                            if (C = M[P - 1],
                                P--,
                                m = o[v],
                                u = C.context,
                                c = C.reversePathMapContext,
                                void 0 !== (T = m.to)) {
                                for (E = m.from || 0,
                                    y = T; y >= E; y--) {
                                    if (f = u[y],
                                        void 0 !== (_ = c[y]) && void 0 !== f) {
                                        if (_ instanceof Array) {
                                            for (r = _.length,
                                                s = [o.slice(v)]; r--;) {
                                                (n = _[r])._locks && n._locks--,
                                                    k.updateCache(s, f, n);
                                            }
                                        } else {
                                            _._parent = c,
                                                I[S] = {
                                                    context: f,
                                                    reversePathMapContext: _,
                                                },
                                                S++;
                                        }
                                    } else k.updateCache([o], t);
                                }
                            } else if (x(m)) {
                                for (g = m.length - 1; g >= 0; g--) {
                                    if (void 0 !== (T = (b = m[g]).to)) {
                                        for (E = b.from || 0,
                                            y = T; y >= E; y--) {
                                            if (f = u[y],
                                                void 0 !== (_ = c[y]) && void 0 !== f) {
                                                if (_ instanceof Array) {
                                                    for (r = _.length,
                                                        s = [o.slice(v + 1)]; r--;) {
                                                        (n = _[r])._locks && n._locks--,
                                                            k.updateCache(s, f, n);
                                                    }
                                                } else {
                                                    _._parent = c,
                                                        I[S] = {
                                                            context: f,
                                                            reversePathMapContext: _,
                                                        },
                                                        S++;
                                                }
                                            } else k.updateCache([o], t);
                                        }
                                    } else {
                                        if (h = u[b],
                                            p = c[b],
                                            void 0 === h || void 0 === p) {
                                            k.updateCache([o], t);
                                            continue;
                                        }
                                        if (p instanceof Array) {
                                            for (r = p.length,
                                                s = [o.slice(v + 1)]; r--;) {
                                                (n = p[r])._locks && n._locks--,
                                                    k.updateCache(s, h, n);
                                            }
                                            continue;
                                        }
                                        p._parent = c,
                                            I[S] = {
                                                context: h,
                                                reversePathMapContext: p,
                                            },
                                            S++;
                                    }
                                }
                            } else {
                                if (d = c,
                                    u = u[m],
                                    void 0 === (c = d[m]) || void 0 === u) {
                                    k.updateCache([o], t);
                                    continue;
                                }
                                if (c instanceof Array) {
                                    for (r = c.length,
                                        s = [o.slice(v + 1)]; r--;) {
                                        (n = c[r])._locks && n._locks--,
                                            k.updateCache(s, u, n);
                                    }
                                    continue;
                                }
                                c._parent = d,
                                    I[S] = {
                                        context: u,
                                        reversePathMapContext: c,
                                    },
                                    S++;
                            }
                        }
                    }
                }
            },
        });
        i.OPTIMIZE_PATHS = 1,
            i.COLLAPSE_PATHS = 2,
            i.prototype._optimizedPropertyDescriptor = {
                _pathTranslationOptions: {
                    value: i.OPTIMIZE_PATHS | i.COLLAPSE_PATHS,
                },
            },
            e.RelativePathEvaluator = i;
    }(n.falcor);
var r = {};
util.makeEnum = function () {
    for (var e, t = {}, i = 0, n = arguments.length; i < n; i++) { t[e = arguments[i]] = e; }
    return t;
}
    ,
    function () {
        var e = typeof nrdp === 'object' && nrdp.now;
        util.Date = function () {
            var t = e ? nrdp.now() : Date.now();
            return new Date(t);
        }
            ,
            util.Date.now = function () {
                return e ? nrdp.now() : Date.now();
            };
    }(),
    util.TimeService = {
        now() {
            var e = model.AppConfig;
            var t = e && e.timeOffset || 0;
            return util.Date.now() + t;
        },
    },
    r.DcrRequest = function (e) {
        var t; var i; var n; var r = new this._Params(e.url); var s = e.data; var a = e.type; var o = a === 'POST'; var
            l = this._METHODS;
        if (l[a] || (e.type = l.GET),
            e.withCredentials = !0,
            s) { for (t in s) r.has(t) || r.add(t, s[t]); }
        i = r.toString(),
            !o && i.length > this._GET_LIMIT && (o = !0,
                e.type = 'POST',
                r.has('method') || r.add('method', 'GET')),
            n = r.baseUrl,
            e.url = n,
            e.unsignedUrl = i,
            this.request = e,
            this.baseUrl = e.url,
            this.parameters = r.getParams(),
            this.unsignedUrl = i;
    }
    ,
    r.DcrRequest.prototype = {
        sign() {
            var e = this.request;
            var t = `${util.TimeService.now()}r${1e3 * Math.random()}e${s.Adapter.device.ESN || 'NA'}`;
            return e.data = `${this.parameters}&uuid=${t}`,
                this._newHost && (e.url = util.getAbsoluteUrl(e.url, this._newHost, !0),
                    delete this._newHost),
                e;
        },
        setHost(e) {
            this._newHost = e;
        },
        _Params: util.UrlParams,
        _METHODS: util.makeEnum('GET', 'POST'),
        _GET_LIMIT: config.urlGetLimit,
    },
    model = typeof model === 'undefined' ? {} : model;
var s = {
    Adapter: {},
};
config.debugCodes = {
    startup: {
        configService: 'ui-100',
        uiLanguageText: 'ui-103',
        nrdp: 'ui-104',
        geoRejected: 'ui-105',
        geoComingSoon: 'ui-106',
        serverRequest: 'ui-108',
        languages: 'ui-109',
        geolocation: 'ui-110',
        uiExperience: 'ui-111',
        browse: 'ui-112',
        noConnectNoDiagnosis: 'ui-113',
        appConfig: 'ui-114',
        onBoot404: 'ui-115',
        onBoot500: 'ui-116',
        onBootBadJS: 'ui-117',
    },
    appBoot: {
        standard: 'ui-800-',
        actionId: 'ui-801-',
    },
    authentication: {
        currentUser: 'ui-200',
        loginMaxRetries: 'ui-201',
        secureNetflixIdMissing: 'ui-202',
        missingTarget: 'ui-203',
    },
    payment: {
        noCreditCardEncryptionKeys: 'ui-300',
        paymentError: 'ui-301',
    },
    registration: {
        maxAccounts: 'ui-500',
        network: 'ui-501',
        bind: 'ui-502',
        activate: 'ui-503',
        rendezvous: 'ui-504',
        unsupportedVersion: 'ui-505',
    },
    merch: {
        topList: 'ui-400',
    },
    account: {
        paymentHold: 'ui-600',
    },
    player: {
        NFErr_MC_NCCP_NonRecoverableError: 'aip-701',
        NFErr_MC_NCCP_PotentiallyRecoverableError: 'aip-702',
        NFErr_MC_NCCP_CustomError: 'aip-703',
        NFErr_MC_NCCP_RegistrationRequired: 'aip-704',
        NFErr_MC_NCCP_CTicketRenewalRequired: 'aip-705',
        NFErr_MC_NCCP_MTicketRenewalRequired: 'aip-706',
        NFErr_MC_NCCP_ImpossibleImpossibility: 'aip-707',
        NFErr_MC_NCCP_GetNewCredentials: 'aip-708',
        NFErr_MC_NCCP_UnsupportedVersion: 'aip-709',
        NFErr_MC_NCCP_CustomerCredentialsRenewalRequired: 'aip-710a',
        NFErr_MC_NCCP_CannotObtainNpTicket: 'aip-710b',
        NFErr_MC_NCCP_SecondaryCredentialsRenewalRequired: 'aip-710c',
        NFErr_MC_NCCP_AbortPlayback: 'aip-711',
        NFErr_MC_NCCP_StaleCredentials: 'aip-712',
        NFErr_MC_NCCP_ResetRequired: 'aip-713',
        NFErr_MC_AuthFailure: 'tvp-801',
        NFErr_MC_InitStreamFailure: 'tvp-802',
        NFErr_MC_StreamSetIncomplete: 'tvp-803',
        NFErr_MC_ContentNotAvailable: 'tvp-804',
        NFErr_MC_OpenDeviceFailure: 'tvp-805',
        NFErr_MC_AcquireLicenseFailure: 'tvp-806',
        NFErr_MC_RefuseToPlayNonDrmed: 'tvp-810',
        NFErr_MC_EncodingError: 'tvp-811',
        NFErr_MC_ConnectionFailure: 'tvp-830',
        NFErr_MC_HttpServerError: 'tvp-831',
        NFErr_MC_HttpClientError: 'tvp-832',
        NFErr_MC_NCCP_Exception: 'tvp-850',
        NFErr_MC_DevicePlaybackError: 'tvp-851',
        NFErr_MC_DeviceDecryptionError: 'tvp-852',
        NFErr_MC_SubtitleFailure: 'tvp-860',
        NFErr_MalformedData: 'nf-900',
    },
},
    util.Error = util.Class.extend(Error, {
        init(e, t, i, n) {
            e && (this.message = e),
                t && (this.debugCode = t),
                i && (this.innerError = i),
                n && (this.userMessage = n);
            console.log(this);
        },
    }),
    function (e) {
        var t = new Rx.ReplaySubject();
        function i() {
            t.onNext(),
                t.onCompleted();
        }
        if (typeof nrdp !== 'undefined' && nrdp.init) {
            function n(e) {
                nrdp.removeEventListener('fatalerror', n);
                console.log('nrdp fatalerror encountered');
                t.onError(new util.Error('NRDP init fatalerror', config.debugCodes.startup.nrdp, e));
            }
            if (nrdp.isReady) {
                console.log('checking for nrdp.js', nrdp.js);
                if (nrdp.js) {
                    console.log('initing NRDP...');
                    nrdp.js.init(i);
                 } else {
                    i();
                 }
            } else {
                nrdp.addEventListener('fatalerror', n);
                nrdp.addEventListener('init', function () {
                    nrdp.removeEventListener('init', arguments.callee);
                    console.log('NRDP inited...');
                    nrdp.removeEventListener('fatalerror', n);
                    nrdp.js ? nrdp.js.init(i) : i();
                });
                nrdp.init();
            }
        } else { i(); }
        e.nrdpInited = t;
    }(s),
    model.AppConfig = {
        loaded: new Rx.ReplaySubject(),
        setModel(e) {
            if (e && e.clockTime) {
                var t = Boolean(e.user);
                var i = e.clockTime;
                var n = i ? 1e3 * i - util.Date.now() : 0;
                this.timeOffset = n,
                    this.fromUser = t,
                    this.loaded.onNext(this),
                    this.loaded.onCompleted();
            } else this.error();
        },
        error(e) {
            this.loaded.onError(new util.Error('App config model empty', config.debugCodes.startup.appConfig, e));
        },
    },
    state = typeof state === 'undefined' ? {} : state,
    util.describeObject = function (e) {
        var t; var i; var n = []; var
            r = arguments.callee;
        for (t in e) {
            i = e[t],
                n.push(`${t}: ${typeof i === 'object' ? r(i) : i}`);
        }
        return `{ ${n.join(', ')} }`;
    }
    ,
    state.Context = {
        _PROPERTIES: ['uiContext', 'movieIndex', 'listIndex', 'trackId', 'trackUrl', 'playData', 'uiContextData'],
        get listIndices() {
            return this._getAllOccurrences(state.activeState.parentState, 'listIndex', !0, []);
        },
        get uiContext() {
            return this._getTopOccurrence(state.rootState, 'uiContext', !0);
        },
        get movieIndex() {
            return this._getTopOccurrence(state.rootState, 'movieIndex', !0);
        },
        get videoId() {
            return this._getTopOccurrence(state.rootState, 'videoId', !0);
        },
        get listIndex() {
            return this._getTopOccurrence(state.rootState, 'listIndex', !0);
        },
        get trackId() {
            return this._getTopOccurrence(state.rootState, 'trackId', !0);
        },
        get trackUrl() {
            return this._getTopOccurrence(state.rootState, 'trackUrl', !0);
        },
        get playData() {
            return this._getTopOccurrence(state.rootState, 'playData', !0);
        },
        get uiContextData() {
            return this._getTopOccurrence(state.rootState, 'uiContextData', !0);
        },
        get apiRequestId() {
            return this._getTopOccurrence(state.rootState, 'apiRequestId', !0);
        },
        get uiContextPath() {
            return this._getPathOfOccurances(state.rootState, 'uiContext', []).join('/');
        },
        toString() {
            var e; var t; var i; var n = this._PROPERTIES; var
                r = [];
            for (e = 0,
                t = n.length; e < t; e++) {
                i = n[e],
                    r.push(`${i} = ${this[i]}`);
            }
            return r.join(', ');
        },
        _getTopOccurrence(e, t) {
            if (e) {
                var i; var n; var r; var
                    s = e.stack;
                for (i = s.length - 1; i >= 0; i--) {
                    if ((r = s[i]) instanceof state.ICompoundState && void 0 !== (n = this._getTopOccurrence(r, t))) return n;
                    if (r.providesContext && void 0 !== (n = r[t])) return n;
                }
            }
        },
        _getAllOccurrences(e, t, i, n) {
            for (var r = e; !r.isRoot && i;) r = r.parentState;
            var s; var a; var o; var l = r.stack; var
                u = l.length;
            for (s = 0; s < u; s++) {
                (o = l[s]) instanceof state.ICompoundState && this._getAllOccurrences(o, t, !1, n),
                    o.providesContext && void 0 != (a = o[t]) && n.push(a);
            }
            return r.providesContext && i && void 0 != (a = r[t]) && n.push(a),
                n;
        },
        _getPathOfOccurances(e, t, i) {
            var n; var r; var s; let
                a;
            if (e.providesContext && (r = e[t]) && r != null && i.push(r),
                e instanceof state.ICompoundState && (a = (n = e.stack).length)) for (s = 0; s < a; s++) this._getPathOfOccurances(n[s], t, i);
            return i;
        },
    },
    function () {
        var e;
        Array.slice || (e = Array.prototype.slice,
            Array.slice = function (t, i, n) {
                return n == null ? e.call(t, i) : e.call(t, i, n);
            }
        ),
            Array.without || (Array.without = function (e, t) {
                for (var i, n = e.length, r = [], s = 0; s < n; s++) { (i = e[s]) !== t && r.push(i); }
                return r;
            }
            );
    }(),
    typeof Function.prototype.bind !== 'function' && Object.defineProperty(Function.prototype, 'bind', {
        enumerable: !1,
        value(e) {
            var t = Array.prototype.slice;
            var i = t.call(arguments, 1);
            var n = this;
            return function () {
                return n.apply(e, i.concat(t.call(arguments)));
            };
        },
    }),
    function (t) {
        if (!t.log) {
            var i; var n = 'debug'; var r = 'time'; var a = 'timeEnd'; var o = [r, a, 'group', 'groupEnd']; var l = [n].concat(o, ['info', 'warn', 'error', 'fatal']); var u = 'error'; var c = l.indexOf(u); var d = ['url', 'nrdp', 'config', 'code']; var h = 'ui-'; var p = util.CurrentUrlParams; var f = {
                local: {
                    code: 'error',
                    url: p.get('logLevel'),
                },
                remote: {
                    code: 'error',
                    url: p.get('remoteLogLevel'),
                },
            }; var
                _ = {};
            console && (m(console, _),
                o.forEach(function (t) {
                    var i = console[t];
                    i && (i = i.bind(console)),
                        _[t] = i || e;
                })),
                console && console[r] && console[a] || b(_, _, n),
                y(),
                s.nrdpInited.subscribe(function () {
                    var e; var
                        t = window.nrdp && nrdp.log;
                    t && ((e = t && t.traceAreas) && e.indexOf('UI_SCRIPT') !== -1 && (f.local.nrdp = n),
                        m(t, _),
                        b(_, _, n),
                        i = g,
                        y());
                }, e);
        }
        function v(e) {
            var t;
            try {
                t = JSON.stringify(e);
            } catch (i) {
                t = e.toString ? e.toString() : 'Unknown object';
            }
            return t;
        }
        function m(e, t) {
            l.forEach(function (i, n) {
                var r; var s; let
                    a;
                o.indexOf(i) === -1 && (e[i] ? t[i] = function () {
                    for (r = 0,
                        s = arguments.length; r < s; r++) {
                        typeof (a = arguments[r]) === 'object' && (a = v(a)),
                            e[i](a);
                    }
                }
                    : t[i] = t[l[n - 1]]);
            });
        }
        function b(e, t, i) {
            var n = {};
            t[r] = function (e) {
                n[e] || (n[e] = Date.now());
            }
                ,
                t[a] = function (t) {
                    var r = n[t];
                    r && (delete n[t],
                        r = Date.now() - r,
                        e[i](`${t}: ${r}ms`));
                };
        }
        function g(e) {
            var t = h + e;
            var i = l.indexOf(e) < c ? u : e;
            return function () {
                var e; var n; var r; var a = s && s.Adapter; var o = a && a.device; var l = o.SDKVersion && o.SDKVersion.version; var
                    u = o && o.getUIVersion();
                for (e = 0,
                    n = arguments.length; e < n; e++) {
                    typeof (r = arguments[e]) === 'string' && (r = {
                        message: r,
                    }),
                        r = util.extend({
                            event: t,
                            sdk_version: l,
                            ui_version: u,
                            ui_context: state.Context.uiContext,
                        }, r),
                        nrdp.log[i](v(r));
                }
            };
        }
        function y() {
            var r; var s; var u; var c = {}; var h = !!i; var
                p = {};
            function v(e) {
                var t = f[e];
                return function (i) {
                    var n = t[i];
                    return n && (p[e] = n.toLowerCase()),
                        n;
                };
            }
            d.some(v('local')),
                d.some(v('remote')),
                r = p.local,
                s = l.indexOf(r),
                u = l.indexOf(p.remote),
                l.forEach(function (t, r) {
                    var l; let
                        d;
                    r >= s && (h && r >= u ? ((d = t === a) || o.indexOf(t) === -1) && (l = i(t),
                        d && (b({
                            debug: l,
                        }, _, n),
                            l = _[t])) : l = _[t]),
                        c[t] = l || e;
                }),
                t.log = c;
        }
    }(util),
    n.console.log = util.log.debug,
    ['error', 'warn', 'info'].forEach(function (e) {
        n.console[e] = util.log[e];
    }),
    util.performPolyFills = function (e, t) {
        var i; var n; var r; var s; var a; var o; var
            l = function (t, i) {
                i.__get__ || i.__set__ ? Object.defineProperty(e, t, {
                    get: i.__get__ || void 0,
                    set: i.__set__ || void 0,
                    configurable: !0,
                }) : e[t] = i;
            };
        if (e) {
            for (i in t) {
                if (r = t[i],
                    !(n = void 0 !== e[i]) && r.notPresent && l(i, r.notPresent),
                    r.replace && l(i, r.replace),
                    s = r.selectAvailable) {
                    for (a = 0,
                        o = s.length; a < o; a++) {
                        if (s[a]) {
                            l(i, s[a]);
                            break;
                        }
                    }
                }
                r.action && r.action(n, e);
            }
        }
    }
    ,
    window.nrdp && (s.adapterLoaded = new Rx.ReplaySubject(),
        s.nrdpInited.subscribeIgnoreErrors(function () {
            var t; var
                i = s.Adapter;
            i.device = nrdp.device,
                t = i.device,
                i.hasNrdp = !0,
                i.useBCP47 = !0,
                util.performPolyFills(i, {
                    getMonotonicTime: {
                        replace() {
                            var e = nrdp.mono && nrdp.mono();
                            return void 0 == e && (e = util.Date.now()),
                                e;
                        },
                    },
                    garbageCollect: {
                        selectAvailable: [nrdp.garbageCollect, e],
                    },
                }),
                util.performPolyFills(t, {
                    _origSetUIVersion: {
                        replace: t.setUIVersion,
                    },
                    setUIVersion: {
                        replace(e) {
                            this._uiVersion = e,
                                this._origSetUIVersion(e);
                        },
                    },
                    getUIVersion: {
                        replace() {
                            return this._uiVersion;
                        },
                    },
                }),
                util.performPolyFills(t.capability, {
                    unavailableAudioProfiles: {
                        notPresent: {
                            __get__() {
                                return [];
                            },
                        },
                    },
                }),
                i.registration = {
                    get registered() {
                        return nrdp.registration && nrdp.registration.registered;
                    },
                    deactivate(e) {
                        nrdp.device.factoryReset ? nrdp.device.factoryReset(e) : nrdp.registration.deactivateAll(e);
                    },
                },
                nrdp.registration && Object.defineProperties(i.registration, {
                    UILanguages: {
                        get() {
                            return nrdp.registration.UILanguages;
                        },
                        set(e) {
                            nrdp.registration.UILanguages = e;
                        },
                    },
                }),
                s.adapterLoaded.onNext(s.Adapter),
                s.adapterLoaded.onCompleted();
        }, function (e) {
            s.adapterLoaded.onError(new util.Error('devicebridge.Adapter failed to load', null, e));
        })),
    window.nrdp || (s.Adapter = {
        hasNrdp: !1,
        device: {
            capability: {},
            get language() {
                return 'en-US';
            },
            SDKVersion: {},
            setUIVersion(e) {
                this._uiVersion = e;
            },
            getUIVersion() {
                return this._uiVersion;
            },
        },
        registration: {
            registered: !0,
            deactivate(e) {
                e();
            },
        },
        video: {},
        media: {
            addEventListener: e,
            removeEventListener: e,
            transitionPlaybackType: e,
            setVideoWindow: e,
            bringToFront: e,
            sendToBack: e,
            initializeMediaControl: e,
            swim: e,
            getBufferRange: e,
        },
        getVideoUri: e,
    },
        s.adapterLoaded = new Rx.ReplaySubject(),
        s.adapterLoaded.onNext(s.Adapter),
        s.adapterLoaded.onCompleted(),
        s.mediaAdapterLoaded = new Rx.ReplaySubject(),
        s.mediaAdapterLoaded.onNext(s.Adapter.media),
        s.mediaAdapterLoaded.onCompleted());
var a = this.application = {};
a.MdxLoaded = {
    loaded: new Rx.ReplaySubject(),
    STATES: {
        LOADED: 1,
        READY: 2,
    },
},
    s.mediaAdapterLoaded = new Rx.ReplaySubject(),
    s.adapterLoaded.subscribe(function () {
        var t = s.Adapter;
        var i = t.device.capability;
        t.media = nrdp.media,
            util.performPolyFills(t, {
                convertPlaybackTypeToOriginator: {
                    notPresent(e) {
                        return e === t.media.BROWSE_PLAYBACK ? 'BROWSE' : 'USER';
                    },
                },
                convertOriginatorToPlaybackType: {
                    notPresent(e) {
                        return e === 'BROWSE' ? t.media.BROWSE_PLAYBACK : t.media.STANDARD_PLAYBACK;
                    },
                },
            }),
            util.performPolyFills(t.media, {
                swim: {
                    notPresent: e,
                    action(e) {
                        t.supportSwim = e;
                    },
                },
                openAndPlay: {
                    notPresent(e) {
                        nrdp.media.open(e.movieId, e.trackerId, e.params, e.playbackType, e.videoType);
                    },
                    action(e) {
                        s.Adapter.supportOpenAndPlay = e;
                    },
                },
                throttled: {
                    notPresent: {
                        __get__() {
                            return nrdp._syncData.media.throttled;
                        },
                        __set__(e) {
                            nrdp._setProperty('media', 'throttled', e);
                        },
                    },
                },
                errorCodes: {
                    notPresent: {
                        __get__() {
                            return nrdp.log.errorCodes ? nrdp.log.errorCodes : nrdp._syncData.media && nrdp._syncData.media.errorCodes ? nrdp._syncData.media.errorCodes : void 0;
                        },
                    },
                },
                setAudioSubtitleTracks: {
                    notPresent(e, i) {
                        var n; var r; var
                            s = t.media;
                        return typeof s.selectTracks === 'function' ? (n = i ? i.id : '',
                            r = e ? e.id : '',
                            s.selectTracks(r, n)) : (e && (s.currentAudioTrack = `${e.index}`),
                                i && (s.currentSubtitleTrack = `${i.index}`),
                                Promise.resolve());
                    },
                },
            }),
            t.supportsHD = Boolean(i.supportHD),
            t.is3dCapable = Boolean(i.support3D),
            t.is3dEnabled = !1,
            t.isDeviceUltraHDCapable = Boolean(i.supportUltraHD),
            t.isDeviceDVHDRCapable = Boolean(i.supportDV_HDR),
            t.isDeviceUHDAHDRCapable = Boolean(i.supportUHDA_HDR),
            s.mediaAdapterLoaded.onNext(s.Adapter.media),
            s.mediaAdapterLoaded.onCompleted();
    }, function (e) {
        s.mediaAdapterLoaded.onError(new util.Error('devicebridge.Adapter.media failed to load', null, e));
    }),
    function (t) {
        a.MdxLoaded.loaded.where(function (e) {
            return e && e.state === a.MdxLoaded.STATES.READY;
        }).take(1).subscribeIgnoreErrors(function (e) {
            var i = e && e.volumeLevel;
            (i >= 0 || i <= 1) && (t.Adapter.device.volume = 100 * i);
        }, e);
    }(s),
    util.localization = {},
    util.localization.setFontFamily = function (e, t) {
        var i;
        e && (i = nrdpPartner.Fonts[e.fontGroup],
            t.fontFamily = `${i ? `${i}, ` : ''}Arial`);
    }
    ,
    function () {
        var e = Object.prototype.hasOwnProperty;
        function t(t) {
            var i; var n; var r; var s; var
                a = Array.prototype.slice.call(arguments, 1);
            for (i = 0,
                n = a.length; i < n; i += 1) { if (r = a[i]) for (s in r) e.call(r, s) && (t[s] = r[s]); }
            return t;
        }
        var i = function () {
            try {
                return !!Object.defineProperty({}, 'a', {});
            } catch (e) {
                return !1;
            }
        }();
        var n = (!i && Object.prototype.__defineGetter__,
            i ? Object.defineProperty : function (t, i, n) {
                'get' in n && t.__defineGetter__ ? t.__defineGetter__(i, n.get) : (!e.call(t, i) || 'value' in n) && (t[i] = n.value);
            }
        );
        var r = Object.create || function (t, i) {
            var r; let
                s;
            function a() { }
            for (s in a.prototype = t,
                r = new a(),
                i) { e.call(i, s) && n(r, s, i[s]); }
            return r;
        };
        var s = a;
        function a(e, t, i) {
            this.locales = e,
                this.formats = t,
                this.pluralFn = i;
        }
        function o(e) {
            this.id = e;
        }
        function l(e, t, i, n, r) {
            this.id = e,
                this.useOrdinal = t,
                this.offset = i,
                this.options = n,
                this.pluralFn = r;
        }
        function u(e, t, i, n) {
            this.id = e,
                this.offset = t,
                this.numberFormat = i,
                this.string = n;
        }
        function c(e, t) {
            this.id = e,
                this.options = t;
        }
        a.prototype.compile = function (e) {
            return this.pluralStack = [],
                this.currentPlural = null,
                this.pluralNumberFormat = null,
                this.compileMessage(e);
        }
            ,
            a.prototype.compileMessage = function (e) {
                if (!e || e.type !== 'messageFormatPattern') { throw new Error('Message AST is not of type: "messageFormatPattern"'); }
                var t; var i; var n; var r = e.elements; var
                    s = [];
                for (t = 0,
                    i = r.length; t < i; t += 1) {
                    switch ((n = r[t]).type) {
                        case 'messageTextElement':
                            s.push(this.compileMessageText(n));
                            break;
                        case 'argumentElement':
                            s.push(this.compileArgument(n));
                            break;
                        default:
                            throw new Error('Message element does not have a valid type');
                    }
                }
                return s;
            }
            ,
            a.prototype.compileMessageText = function (e) {
                return this.currentPlural && /(^|[^\\])#/g.test(e.value) ? (this.pluralNumberFormat || (this.pluralNumberFormat = new Intl.NumberFormat(this.locales)),
                    new u(this.currentPlural.id, this.currentPlural.format.offset, this.pluralNumberFormat, e.value)) : e.value.replace(/\\#/g, '#');
            }
            ,
            a.prototype.compileArgument = function (e) {
                var t = e.format;
                if (!t) { return new o(e.id); }
                var i; var n = this.formats; var r = this.locales; var
                    s = this.pluralFn;
                switch (t.type) {
                    case 'numberFormat':
                        return i = n.number[t.style],
                        {
                            id: e.id,
                            format: new Intl.NumberFormat(r, i).format,
                        };
                    case 'dateFormat':
                        return i = n.date[t.style],
                        {
                            id: e.id,
                            format: new Intl.DateTimeFormat(r, i).format,
                        };
                    case 'timeFormat':
                        return i = n.time[t.style],
                        {
                            id: e.id,
                            format: new Intl.DateTimeFormat(r, i).format,
                        };
                    case 'pluralFormat':
                        return i = this.compileOptions(e),
                            new l(e.id, t.ordinal, t.offset, i, s);
                    case 'selectFormat':
                        return i = this.compileOptions(e),
                            new c(e.id, i);
                    default:
                        throw new Error('Message element does not have a valid format type');
                }
            }
            ,
            a.prototype.compileOptions = function (e) {
                var t; var i; var n; var r = e.format; var s = r.options; var
                    a = {};
                for (this.pluralStack.push(this.currentPlural),
                    this.currentPlural = r.type === 'pluralFormat' ? e : null,
                    t = 0,
                    i = s.length; t < i; t += 1) { a[(n = s[t]).selector] = this.compileMessage(n.value); }
                return this.currentPlural = this.pluralStack.pop(),
                    a;
            }
            ,
            o.prototype.format = function (e) {
                return e ? typeof e === 'string' ? e : String(e) : '';
            }
            ,
            l.prototype.getOption = function (e) {
                var t = this.options;
                return t[`=${e}`] || t[this.pluralFn(e - this.offset, this.useOrdinal)] || t.other;
            }
            ,
            u.prototype.format = function (e) {
                var t = this.numberFormat.format(e - this.offset);
                return this.string.replace(/(^|[^\\])#/g, `$1${t}`).replace(/\\#/g, '#');
            }
            ,
            c.prototype.getOption = function (e) {
                var t = this.options;
                return t[e] || t.other;
            };
        var d = function () {
            function e(e, t, i, n, r, s) {
                this.message = e,
                    this.expected = t,
                    this.found = i,
                    this.offset = n,
                    this.line = r,
                    this.column = s,
                    this.name = 'SyntaxError';
            }
            return function (e, t) {
                function i() {
                    this.constructor = e;
                }
                i.prototype = t.prototype,
                    e.prototype = new i();
            }(e, Error),
            {
                SyntaxError: e,
                parse(t) {
                    var i; var n = arguments.length > 1 ? arguments[1] : {}; var r = {}; var s = {
                        start: ke,
                    }; var a = ke; var o = function (e) {
                        return {
                            type: 'messageFormatPattern',
                            elements: e,
                        };
                    }; var l = r; var u = function (e) {
                        var t; var i; var n; var r; var s; let
                            a = '';
                        for (t = 0,
                            n = e.length; t < n; t += 1) {
                            for (i = 0,
                                s = (r = e[t]).length; i < s; i += 1) a += r[i];
                        }
                        return a;
                    }; var c = function (e) {
                        return {
                            type: 'messageTextElement',
                            value: e,
                        };
                    }; var d = /^[^ \t\n\r,.+={}#]/; var h = {
                        type: 'class',
                        value: '[^ \\t\\n\\r,.+={}#]',
                        description: '[^ \\t\\n\\r,.+={}#]',
                    }; var p = '{'; var f = {
                        type: 'literal',
                        value: '{',
                        description: '"{"',
                    }; var _ = null; var v = ','; var m = {
                        type: 'literal',
                        value: ',',
                        description: '","',
                    }; var b = '}'; var g = {
                        type: 'literal',
                        value: '}',
                        description: '"}"',
                    }; var y = function (e, t) {
                        return {
                            type: 'argumentElement',
                            id: e,
                            format: t && t[2],
                        };
                    }; var E = 'number'; var T = {
                        type: 'literal',
                        value: 'number',
                        description: '"number"',
                    }; var C = 'date'; var S = {
                        type: 'literal',
                        value: 'date',
                        description: '"date"',
                    }; var P = 'time'; var A = {
                        type: 'literal',
                        value: 'time',
                        description: '"time"',
                    }; var k = function (e, t) {
                        return {
                            type: `${e}Format`,
                            style: t && t[2],
                        };
                    }; var x = 'plural'; var w = {
                        type: 'literal',
                        value: 'plural',
                        description: '"plural"',
                    }; var I = function (e) {
                        return {
                            type: e.type,
                            ordinal: !1,
                            offset: e.offset || 0,
                            options: e.options,
                        };
                    }; var M = 'selectordinal'; var L = {
                        type: 'literal',
                        value: 'selectordinal',
                        description: '"selectordinal"',
                    }; var N = function (e) {
                        return {
                            type: e.type,
                            ordinal: !0,
                            offset: e.offset || 0,
                            options: e.options,
                        };
                    }; var R = 'select'; var D = {
                        type: 'literal',
                        value: 'select',
                        description: '"select"',
                    }; var O = function (e) {
                        return {
                            type: 'selectFormat',
                            options: e,
                        };
                    }; var V = '='; var F = {
                        type: 'literal',
                        value: '=',
                        description: '"="',
                    }; var B = function (e, t) {
                        return {
                            type: 'optionalFormatPattern',
                            selector: e,
                            value: t,
                        };
                    }; var U = 'offset:'; var H = {
                        type: 'literal',
                        value: 'offset:',
                        description: '"offset:"',
                    }; var G = function (e) {
                        return e;
                    }; var z = function (e, t) {
                        return {
                            type: 'pluralFormat',
                            offset: e,
                            options: t,
                        };
                    }; var Y = {
                        type: 'other',
                        description: 'whitespace',
                    }; var W = /^[ \t\n\r]/; var q = {
                        type: 'class',
                        value: '[ \\t\\n\\r]',
                        description: '[ \\t\\n\\r]',
                    }; var K = {
                        type: 'other',
                        description: 'optionalWhitespace',
                    }; var j = /^[0-9]/; var Z = {
                        type: 'class',
                        value: '[0-9]',
                        description: '[0-9]',
                    }; var X = /^[0-9a-f]/i; var Q = {
                        type: 'class',
                        value: '[0-9a-f]i',
                        description: '[0-9a-f]i',
                    }; var $ = '0'; var J = {
                        type: 'literal',
                        value: '0',
                        description: '"0"',
                    }; var ee = /^[1-9]/; var te = {
                        type: 'class',
                        value: '[1-9]',
                        description: '[1-9]',
                    }; var ie = function (e) {
                        return parseInt(e, 10);
                    }; var ne = /^[^{}\\\0-\x1F \t\n\r]/; var re = {
                        type: 'class',
                        value: '[^{}\\\\\\0-\\x1F \\t\\n\\r]',
                        description: '[^{}\\\\\\0-\\x1F \\t\\n\\r]',
                    }; var se = '\\#'; var ae = {
                        type: 'literal',
                        value: '\\#',
                        description: '"\\\\#"',
                    }; var oe = function () {
                        return '\\#';
                    }; var le = '\\{'; var ue = {
                        type: 'literal',
                        value: '\\{',
                        description: '"\\\\{"',
                    }; var ce = function () {
                        return '{';
                    }; var de = '\\}'; var he = {
                        type: 'literal',
                        value: '\\}',
                        description: '"\\\\}"',
                    }; var pe = function () {
                        return '}';
                    }; var fe = '\\u'; var _e = {
                        type: 'literal',
                        value: '\\u',
                        description: '"\\\\u"',
                    }; var ve = function (e) {
                        return String.fromCharCode(parseInt(e, 16));
                    }; var me = function (e) {
                        return e.join('');
                    }; var be = 0; var ge = 0; var ye = {
                        line: 1,
                        column: 1,
                        seenCR: !1,
                    }; var Ee = 0; var Te = []; let
                        Ce = 0;
                    if ('startRule' in n) {
                        if (!(n.startRule in s)) throw new Error(`Can't start parsing from rule "${n.startRule}".`);
                        a = s[n.startRule];
                    }
                    function Se(e) {
                        return ge !== e && (ge > e && (ge = 0,
                            ye = {
                                line: 1,
                                column: 1,
                                seenCR: !1,
                            }),
                            function (e, i, n) {
                                var r; let
                                    s;
                                for (r = i; r < n; r++) {
                                    (s = t.charAt(r)) === '\n' ? (e.seenCR || e.line++,
                                        e.column = 1,
                                        e.seenCR = !1) : s === '\r' || s === '\u2028' || s === '\u2029' ? (e.line++,
                                            e.column = 1,
                                            e.seenCR = !0) : (e.column++,
                                                e.seenCR = !1);
                                }
                            }(ye, ge, e),
                            ge = e),
                            ye;
                    }
                    function Pe(e) {
                        be < Ee || (be > Ee && (Ee = be,
                            Te = []),
                            Te.push(e));
                    }
                    function Ae(i, n, r) {
                        var s = Se(r);
                        var a = r < t.length ? t.charAt(r) : null;
                        return n !== null && function (e) {
                            var t = 1;
                            for (e.sort(function (e, t) {
                                return e.description < t.description ? -1 : e.description > t.description ? 1 : 0;
                            }); t < e.length;) e[t - 1] === e[t] ? e.splice(t, 1) : t++;
                        }(n),
                            new e(i !== null ? i : function (e, t) {
                                var i; var
                                    n = new Array(e.length);
                                for (i = 0; i < e.length; i++) n[i] = e[i].description;
                                return `Expected ${e.length > 1 ? `${n.slice(0, -1).join(', ')} or ${n[e.length - 1]}` : n[0]} but ${t ? `"${function (e) {
                                    function t(e) {
                                        return e.charCodeAt(0).toString(16).toUpperCase();
                                    }
                                    return e.replace(/\\/g, '\\\\').replace(/"/g, '\\"').replace(/\x08/g, '\\b').replace(/\t/g, '\\t')
                                        .replace(/\n/g, '\\n')
                                        .replace(/\f/g, '\\f')
                                        .replace(/\r/g, '\\r')
                                        .replace(/[\x00-\x07\x0B\x0E\x0F]/g, function (e) {
                                            return `\\x0${t(e)}`;
                                        })
                                        .replace(/[\x10-\x1F\x80-\xFF]/g, function (e) {
                                            return `\\x${t(e)}`;
                                        })
                                        .replace(/[\u0180-\u0FFF]/g, function (e) {
                                            return `\\u0${t(e)}`;
                                        })
                                        .replace(/[\u1080-\uFFFF]/g, function (e) {
                                            return `\\u${t(e)}`;
                                        });
                                }(t)}"` : 'end of input'} found.`;
                            }(n, a), n, a, r, s.line, s.column);
                    }
                    function ke() {
                        return xe();
                    }
                    function xe() {
                        var e; let
                            t;
                        for (be,
                            e = [],
                            t = we(); t !== r;) {
                            e.push(t),
                                t = we();
                        }
                        return e !== r && (e = o(e)),
                            e;
                    }
                    function we() {
                        console.log('inside we');
                        var e; let
                            i;
                        return (i = function () {
                            var e; var i; var n; var s; var a; let
                                o;
                            if (e = be,
                                i = [],
                                n = be,
                                (s = Ne()) !== r && (a = Fe()) !== r && (o = Ne()) !== r ? n = s = [s, a, o] : (be = n,
                                    n = l),
                                n !== r) {
                                for (; n !== r;) {
                                    i.push(n),
                                        n = be,
                                        (s = Ne()) !== r && (a = Fe()) !== r && (o = Ne()) !== r ? n = s = [s, a, o] : (be = n,
                                            n = l);
                                }
                            } else i = l;
                            return i !== r && (i = u(i)),
                                (e = i) === r && (e = be,
                                    (i = Le()) !== r && (i = t.substring(e, be)),
                                    e = i),
                                e;
                        }()) !== r && (i = c(i)),
                            (e = i) === r && (e = function () {
                                var e; var i; var n; var s; var a; var o; let
                                    u;
                                return e = be,
                                    t.charCodeAt(be) === 123 ? (i = p,
                                        be++) : (i = r,
                                            Ce === 0 && Pe(f)),
                                    i !== r && Ne() !== r && (n = function () {
                                        var e; var i; let
                                            n;
                                        if ((e = Oe()) === r) {
                                            if (e = be,
                                                i = [],
                                                d.test(t.charAt(be)) ? (n = t.charAt(be),
                                                    be++) : (n = r,
                                                        Ce === 0 && Pe(h)),
                                                n !== r) {
                                                for (; n !== r;) {
                                                    i.push(n),
                                                        d.test(t.charAt(be)) ? (n = t.charAt(be),
                                                            be++) : (n = r,
                                                                Ce === 0 && Pe(h));
                                                }
                                            } else i = l;
                                            i !== r && (i = t.substring(e, be)),
                                                e = i;
                                        }
                                        return e;
                                    }()) !== r && Ne() !== r ? (s = be,
                                        t.charCodeAt(be) === 44 ? (a = v,
                                            be++) : (a = r,
                                                Ce === 0 && Pe(m)),
                                        a !== r && (o = Ne()) !== r && (u = function () {
                                            var e;
                                            return (e = function () {
                                                var e; var i; var n; var s; var a; let
                                                    o;
                                                return e = be,
                                                    t.substr(be, 6) === E ? (i = E,
                                                        be += 6) : (i = r,
                                                            Ce === 0 && Pe(T)),
                                                    i === r && (t.substr(be, 4) === C ? (i = C,
                                                        be += 4) : (i = r,
                                                            Ce === 0 && Pe(S)),
                                                        i === r && (t.substr(be, 4) === P ? (i = P,
                                                            be += 4) : (i = r,
                                                                Ce === 0 && Pe(A)))),
                                                    i !== r && Ne() !== r ? (n = be,
                                                        t.charCodeAt(be) === 44 ? (s = v,
                                                            be++) : (s = r,
                                                                Ce === 0 && Pe(m)),
                                                        s !== r && (a = Ne()) !== r && (o = Fe()) !== r ? n = s = [s, a, o] : (be = n,
                                                            n = l),
                                                        n === r && (n = _),
                                                        n !== r ? (i = k(i, n),
                                                            e = i) : (be = e,
                                                                e = l)) : (be = e,
                                                                    e = l),
                                                    e;
                                            }()) === r && (e = function () {
                                                var e; var i; var n; let
                                                    s;
                                                return e = be,
                                                    t.substr(be, 6) === x ? (i = x,
                                                        be += 6) : (i = r,
                                                            Ce === 0 && Pe(w)),
                                                    i !== r && Ne() !== r ? (t.charCodeAt(be) === 44 ? (n = v,
                                                        be++) : (n = r,
                                                            Ce === 0 && Pe(m)),
                                                        n !== r && Ne() !== r && (s = Me()) !== r ? (i = I(s),
                                                            e = i) : (be = e,
                                                                e = l)) : (be = e,
                                                                    e = l),
                                                    e;
                                            }()) === r && (e = function () {
                                                var e; var i; var n; let
                                                    s;
                                                return e = be,
                                                    t.substr(be, 13) === M ? (i = M,
                                                        be += 13) : (i = r,
                                                            Ce === 0 && Pe(L)),
                                                    i !== r && Ne() !== r ? (t.charCodeAt(be) === 44 ? (n = v,
                                                        be++) : (n = r,
                                                            Ce === 0 && Pe(m)),
                                                        n !== r && Ne() !== r && (s = Me()) !== r ? (i = N(s),
                                                            e = i) : (be = e,
                                                                e = l)) : (be = e,
                                                                    e = l),
                                                    e;
                                            }()) === r && (e = function () {
                                                var e; var i; var n; var s; let
                                                    a;
                                                if (e = be,
                                                    t.substr(be, 6) === R ? (i = R,
                                                        be += 6) : (i = r,
                                                            Ce === 0 && Pe(D)),
                                                    i !== r) {
                                                    if (Ne() !== r) {
                                                        if (t.charCodeAt(be) === 44 ? (n = v,
                                                            be++) : (n = r,
                                                                Ce === 0 && Pe(m)),
                                                            n !== r) {
                                                            if (Ne() !== r) {
                                                                if (s = [],
                                                                    (a = Ie()) !== r) {
                                                                    for (; a !== r;) {
                                                                        s.push(a),
                                                                            a = Ie();
                                                                    }
                                                                } else s = l;
                                                                s !== r ? (i = O(s),
                                                                    e = i) : (be = e,
                                                                        e = l);
                                                            } else {
                                                                be = e,
                                                                    e = l;
                                                            }
                                                        } else {
                                                            be = e,
                                                                e = l;
                                                        }
                                                    } else {
                                                        be = e,
                                                            e = l;
                                                    }
                                                } else {
                                                    be = e,
                                                        e = l;
                                                }
                                                return e;
                                            }()),
                                                e;
                                        }()) !== r ? s = a = [a, o, u] : (be = s,
                                            s = l),
                                        s === r && (s = _),
                                        s !== r && (a = Ne()) !== r ? (t.charCodeAt(be) === 125 ? (o = b,
                                            be++) : (o = r,
                                                Ce === 0 && Pe(g)),
                                            o !== r ? (i = y(n, s),
                                                e = i) : (be = e,
                                                    e = l)) : (be = e,
                                                        e = l)) : (be = e,
                                                            e = l),
                                    e;
                            }()),
                            e;
                    }
                    function Ie() {
                        var e; var i; var n; var s; let
                            a;
                        return e = be,
                            Ne() !== r && (i = function () {
                                var e; var i; var n; let
                                    s;
                                return e = be,
                                    i = be,
                                    t.charCodeAt(be) === 61 ? (n = V,
                                        be++) : (n = r,
                                            Ce === 0 && Pe(F)),
                                    n !== r && (s = Oe()) !== r ? i = n = [n, s] : (be = i,
                                        i = l),
                                    i !== r && (i = t.substring(e, be)),
                                    (e = i) === r && (e = Fe()),
                                    e;
                            }()) !== r && Ne() !== r ? (t.charCodeAt(be) === 123 ? (n = p,
                                be++) : (n = r,
                                    Ce === 0 && Pe(f)),
                                n !== r && Ne() !== r && (s = xe()) !== r && Ne() !== r ? (t.charCodeAt(be) === 125 ? (a = b,
                                    be++) : (a = r,
                                        Ce === 0 && Pe(g)),
                                    a !== r ? e = B(i, s) : (be = e,
                                        e = l)) : (be = e,
                                            e = l)) : (be = e,
                                                e = l),
                            e;
                    }
                    function Me() {
                        var e; var i; var n; let
                            s;
                        if (e = be,
                            (i = function () {
                                var e; var i; let
                                    n;
                                return e = be,
                                    t.substr(be, 7) === U ? (i = U,
                                        be += 7) : (i = r,
                                            Ce === 0 && Pe(H)),
                                    i !== r && Ne() !== r && (n = Oe()) !== r ? e = i = G(n) : (be = e,
                                        e = l),
                                    e;
                            }()) === r && (i = _),
                            i !== r) {
                            if (Ne() !== r) {
                                if (n = [],
                                    (s = Ie()) !== r) {
                                    for (; s !== r;) {
                                        n.push(s),
                                            s = Ie();
                                    }
                                } else n = l;
                                n !== r ? e = i = z(i, n) : (be = e,
                                    e = l);
                            } else {
                                be = e,
                                    e = l;
                            }
                        } else {
                            be = e,
                                e = l;
                        }
                        return e;
                    }
                    function Le() {
                        var e; let
                            i;
                        if (Ce++,
                            e = [],
                            W.test(t.charAt(be)) ? (i = t.charAt(be),
                                be++) : (i = r,
                                    Ce === 0 && Pe(q)),
                            i !== r) {
                            for (; i !== r;) {
                                e.push(i),
                                    W.test(t.charAt(be)) ? (i = t.charAt(be),
                                        be++) : (i = r,
                                            Ce === 0 && Pe(q));
                            }
                        } else e = l;
                        return Ce--,
                            e === r && (i = r,
                                Ce === 0 && Pe(Y)),
                            e;
                    }
                    function Ne() {
                        var e; var i; let
                            n;
                        for (Ce++,
                            e = be,
                            i = [],
                            n = Le(); n !== r;) {
                            i.push(n),
                                n = Le();
                        }
                        return i !== r && (i = t.substring(e, be)),
                            Ce--,
                            (e = i) === r && (i = r,
                                Ce === 0 && Pe(K)),
                            e;
                    }
                    function Re() {
                        var e;
                        return j.test(t.charAt(be)) ? (e = t.charAt(be),
                            be++) : (e = r,
                                Ce === 0 && Pe(Z)),
                            e;
                    }
                    function De() {
                        var e;
                        return X.test(t.charAt(be)) ? (e = t.charAt(be),
                            be++) : (e = r,
                                Ce === 0 && Pe(Q)),
                            e;
                    }
                    function Oe() {
                        var e; var i; var n; var s; let
                            a;
                        if (be,
                            t.charCodeAt(be) === 48 ? (e = $,
                                be++) : (e = r,
                                    Ce === 0 && Pe(J)),
                            e === r) {
                            if (e = be,
                                i = be,
                                ee.test(t.charAt(be)) ? (n = t.charAt(be),
                                    be++) : (n = r,
                                        Ce === 0 && Pe(te)),
                                n !== r) {
                                for (s = [],
                                    a = Re(); a !== r;) {
                                    s.push(a),
                                        a = Re();
                                }
                                s !== r ? i = n = [n, s] : (be = i,
                                    i = l);
                            } else {
                                be = i,
                                    i = l;
                            }
                            i !== r && (i = t.substring(e, be)),
                                e = i;
                        }
                        return e !== r && (e = ie(e)),
                            e;
                    }
                    function Ve() {
                        var e; var i; var n; var s; var a; var o; var u; let
                            c;
                        return ne.test(t.charAt(be)) ? (e = t.charAt(be),
                            be++) : (e = r,
                                Ce === 0 && Pe(re)),
                            e === r && (e = be,
                                t.substr(be, 2) === se ? (i = se,
                                    be += 2) : (i = r,
                                        Ce === 0 && Pe(ae)),
                                i !== r && (i = oe()),
                                (e = i) === r && (e = be,
                                    t.substr(be, 2) === le ? (i = le,
                                        be += 2) : (i = r,
                                            Ce === 0 && Pe(ue)),
                                    i !== r && (i = ce()),
                                    (e = i) === r && (e = be,
                                        t.substr(be, 2) === de ? (i = de,
                                            be += 2) : (i = r,
                                                Ce === 0 && Pe(he)),
                                        i !== r && (i = pe()),
                                        (e = i) === r && (e = be,
                                            t.substr(be, 2) === fe ? (i = fe,
                                                be += 2) : (i = r,
                                                    Ce === 0 && Pe(_e)),
                                            i !== r ? (n = be,
                                                s = be,
                                                (a = De()) !== r && (o = De()) !== r && (u = De()) !== r && (c = De()) !== r ? s = a = [a, o, u, c] : (be = s,
                                                    s = l),
                                                s !== r && (s = t.substring(n, be)),
                                                (n = s) !== r ? e = i = ve(n) : (be = e,
                                                    e = l)) : (be = e,
                                                        e = l))))),
                            e;
                    }
                    function Fe() {
                        var e; let
                            t;
                        if (be,
                            e = [],
                            (t = Ve()) !== r) {
                            for (; t !== r;) {
                                e.push(t),
                                    t = Ve();
                            }
                        } else e = l;
                        return e !== r && (e = me(e)),
                            e;
                    }
                    if ((i = a()) !== r && be === t.length) return i;
                    throw i !== r && be < t.length && Pe({
                        type: 'end',
                        description: 'end of input',
                    }),
                    Ae(null, Te, Ee);
                },
            };
        }();
        var h = p;
        function p(e, t, i) {
            var r = typeof e === 'string' ? p.__parse(e) : e;
            if (!r || r.type !== 'messageFormatPattern') { throw new TypeError('A message must be provided as a String or AST.'); }
            i = this._mergeFormats(p.formats, i),
                n(this, '_locale', {
                    value: this._resolveLocale(t),
                });
            var s = this._findPluralRuleFunction(this._locale);
            var a = this._compilePattern(r, t, i, s);
            var o = this;
            this.format = function (e) {
                return o._format(a, e);
            };
        }
        n(p, 'formats', {
            enumerable: !0,
            value: {
                number: {
                    currency: {
                        style: 'currency',
                    },
                    percent: {
                        style: 'percent',
                    },
                },
                date: {
                    short: {
                        month: 'numeric',
                        day: 'numeric',
                        year: '2-digit',
                    },
                    medium: {
                        month: 'short',
                        day: 'numeric',
                        year: 'numeric',
                    },
                    long: {
                        month: 'long',
                        day: 'numeric',
                        year: 'numeric',
                    },
                    full: {
                        weekday: 'long',
                        month: 'long',
                        day: 'numeric',
                        year: 'numeric',
                    },
                },
                time: {
                    short: {
                        hour: 'numeric',
                        minute: 'numeric',
                    },
                    medium: {
                        hour: 'numeric',
                        minute: 'numeric',
                        second: 'numeric',
                    },
                    long: {
                        hour: 'numeric',
                        minute: 'numeric',
                        second: 'numeric',
                        timeZoneName: 'short',
                    },
                    full: {
                        hour: 'numeric',
                        minute: 'numeric',
                        second: 'numeric',
                        timeZoneName: 'short',
                    },
                },
            },
        }),
            n(p, '__localeData__', {
                value: r(null),
            }),
            n(p, '__addLocaleData', {
                value(e) {
                    if (!e || !e.locale) throw new Error('Locale data provided to IntlMessageFormat is missing a `locale` property');
                    p.__localeData__[e.locale.toLowerCase()] = e;
                },
            }),
            n(p, '__parse', {
                value: d.parse,
            }),
            n(p, 'defaultLocale', {
                enumerable: !0,
                writable: !0,
                value: void 0,
            }),
            p.prototype.resolvedOptions = function () {
                return {
                    locale: this._locale,
                };
            }
            ,
            p.prototype._compilePattern = function (e, t, i, n) {
                return new s(t, i, n).compile(e);
            }
            ,
            p.prototype._findPluralRuleFunction = function (e) {
                for (var t = p.__localeData__, i = t[e.toLowerCase()]; i;) {
                    if (i.pluralRuleFunction) { return i.pluralRuleFunction; }
                    i = i.parentLocale && t[i.parentLocale.toLowerCase()];
                }
                throw new Error(`Locale data added to IntlMessageFormat is missing a \`pluralRuleFunction\` for :${e}`);
            }
            ,
            p.prototype._format = function (t, i) {
                var n; var r; var s; var a; var o; let
                    l = '';
                for (n = 0,
                    r = t.length; n < r; n += 1) {
                    if (typeof (s = t[n]) !== 'string') {
                        if (a = s.id,
                            !i || !e.call(i, a)) throw new Error(`A value must be provided for: ${a}`);
                        o = i[a],
                            s.options ? l += this._format(s.getOption(o), i) : l += s.format(o);
                    } else l += s;
                }
                return l;
            }
            ,
            p.prototype._mergeFormats = function (i, n) {
                var s; var a; var
                    o = {};
                for (s in i) {
                    e.call(i, s) && (o[s] = a = r(i[s]),
                        n && e.call(n, s) && t(a, n[s]));
                }
                return o;
            }
            ,
            p.prototype._resolveLocale = function (e) {
                typeof e === 'string' && (e = [e]),
                    e = (e || []).concat(p.defaultLocale);
                var t; var i; var n; var r; var
                    s = p.__localeData__;
                for (t = 0,
                    i = e.length; t < i; t += 1) {
                    for (n = e[t].toLowerCase().split('-'); n.length;) {
                        if (r = s[n.join('-')]) return r.locale;
                        n.pop();
                    }
                }
                var a = e.pop();
                throw new Error(`No locale data has been added to IntlMessageFormat for: ${e.join(', ')}, or the default locale: ${a}`);
            };
        var f = {
            locale: 'en',
            pluralRuleFunction(e, t) {
                var i = String(e).split('.');
                var n = !i[1];
                var r = Number(i[0]) == e;
                var s = r && i[0].slice(-1);
                var a = r && i[0].slice(-2);
                return t ? s == 1 && a != 11 ? 'one' : s == 2 && a != 12 ? 'two' : s == 3 && a != 13 ? 'few' : 'other' : e == 1 && n ? 'one' : 'other';
            },
        };
        h.__addLocaleData(f),
            h.defaultLocale = 'en';
        var _ = h;
        this.IntlMessageFormat = _;
    }
        .call(util),
    function (e) {
        var t = {
            p1(e, t) {
                return 'other';
            },
            p2(e, t) {
                return t ? 'other' : e == 1 ? 'one' : 'other';
            },
            p3(e, t) {
                return t ? 'other' : e == 0 || e == 1 ? 'one' : 'other';
            },
            p4(e, t) {
                return t ? 'other' : e >= 0 && e <= 1 ? 'one' : 'other';
            },
            p5(e, t) {
                var i = String(e).split('.');
                var n = Number(i[0]) == e && i[0].slice(-2);
                return t ? 'other' : e == 0 ? 'zero' : e == 1 ? 'one' : e == 2 ? 'two' : n >= 3 && n <= 10 ? 'few' : n >= 11 && n <= 99 ? 'many' : 'other';
            },
            p6(e, t) {
                var i = !String(e).split('.')[1];
                return t ? 'other' : e == 1 && i ? 'one' : 'other';
            },
            p7(e, t) {
                var i = String(e).split('.')[0];
                var n = i.slice(-1);
                var r = i.slice(-2);
                var s = i.slice(-3);
                return t ? n == 1 || n == 2 || n == 5 || n == 7 || n == 8 || r == 20 || r == 50 || r == 70 || r == 80 ? 'one' : n == 3 || n == 4 || s == 100 || s == 200 || s == 300 || s == 400 || s == 500 || s == 600 || s == 700 || s == 800 || s == 900 ? 'few' : i == 0 || n == 6 || r == 40 || r == 60 || r == 90 ? 'many' : 'other' : e == 1 ? 'one' : 'other';
            },
            p8(e, t) {
                var i = String(e).split('.');
                var n = Number(i[0]) == e;
                var r = n && i[0].slice(-1);
                var s = n && i[0].slice(-2);
                return t ? 'other' : r == 1 && s != 11 ? 'one' : r >= 2 && r <= 4 && (s < 12 || s > 14) ? 'few' : n && r == 0 || r >= 5 && r <= 9 || s >= 11 && s <= 14 ? 'many' : 'other';
            },
            p9(e, t) {
                return t ? e == 1 || e == 5 || e == 7 || e == 8 || e == 9 || e == 10 ? 'one' : e == 2 || e == 3 ? 'two' : e == 4 ? 'few' : e == 6 ? 'many' : 'other' : e >= 0 && e <= 1 ? 'one' : 'other';
            },
            p10(e, t) {
                var i = String(e).split('.');
                var n = Number(i[0]) == e;
                var r = n && i[0].slice(-1);
                var s = n && i[0].slice(-2);
                var a = n && i[0].slice(-6);
                return t ? 'other' : r == 1 && s != 11 && s != 71 && s != 91 ? 'one' : r == 2 && s != 12 && s != 72 && s != 92 ? 'two' : (r == 3 || r == 4 || r == 9) && (s < 10 || s > 19) && (s < 70 || s > 79) && (s < 90 || s > 99) ? 'few' : e != 0 && n && a == 0 ? 'many' : 'other';
            },
            p11(e, t) {
                var i = String(e).split('.');
                var n = i[0];
                var r = i[1] || '';
                var s = !i[1];
                var a = n.slice(-1);
                var o = n.slice(-2);
                var l = r.slice(-1);
                var u = r.slice(-2);
                return t ? 'other' : s && a == 1 && o != 11 || l == 1 && u != 11 ? 'one' : s && a >= 2 && a <= 4 && (o < 12 || o > 14) || l >= 2 && l <= 4 && (u < 12 || u > 14) ? 'few' : 'other';
            },
            p12(e, t) {
                var i = !String(e).split('.')[1];
                return t ? e == 1 || e == 3 ? 'one' : e == 2 ? 'two' : e == 4 ? 'few' : 'other' : e == 1 && i ? 'one' : 'other';
            },
            p13(e, t) {
                var i = String(e).split('.');
                var n = i[0];
                var r = !i[1];
                return t ? 'other' : e == 1 && r ? 'one' : n >= 2 && n <= 4 && r ? 'few' : r ? 'other' : 'many';
            },
            p14(e, t) {
                return t ? e == 0 || e == 7 || e == 8 || e == 9 ? 'zero' : e == 1 ? 'one' : e == 2 ? 'two' : e == 3 || e == 4 ? 'few' : e == 5 || e == 6 ? 'many' : 'other' : e == 0 ? 'zero' : e == 1 ? 'one' : e == 2 ? 'two' : e == 3 ? 'few' : e == 6 ? 'many' : 'other';
            },
            p15(e, t) {
                var i = String(e).split('.');
                var n = i[0];
                var r = Number(i[0]) == e;
                return t ? 'other' : e != 1 && (r || n != 0 && n != 1) ? 'other' : 'one';
            },
            p16(e, t) {
                var i = String(e).split('.');
                var n = i[0];
                var r = i[1] || '';
                var s = !i[1];
                var a = n.slice(-2);
                var o = r.slice(-2);
                return t ? 'other' : s && a == 1 || o == 1 ? 'one' : s && a == 2 || o == 2 ? 'two' : s && (a == 3 || a == 4) || o == 3 || o == 4 ? 'few' : 'other';
            },
            p17(e, t) {
                var i = String(e).split('.');
                var n = !i[1];
                var r = Number(i[0]) == e;
                var s = r && i[0].slice(-1);
                var a = r && i[0].slice(-2);
                return t ? s == 1 && a != 11 ? 'one' : s == 2 && a != 12 ? 'two' : s == 3 && a != 13 ? 'few' : 'other' : e == 1 && n ? 'one' : 'other';
            },
            p18(e, t) {
                return t ? 'other' : e >= 0 && e < 2 ? 'one' : 'other';
            },
            p19(e, t) {
                var i = String(e).split('.');
                var n = i[0];
                var r = i[1] || '';
                var s = !i[1];
                var a = n.slice(-1);
                var o = r.slice(-1);
                return t ? e == 1 ? 'one' : 'other' : s && (n == 1 || n == 2 || n == 3) || s && a != 4 && a != 6 && a != 9 || !s && o != 4 && o != 6 && o != 9 ? 'one' : 'other';
            },
            p20(e, t) {
                return t ? e == 1 ? 'one' : 'other' : e >= 0 && e < 2 ? 'one' : 'other';
            },
            p21(e, t) {
                var i = String(e).split('.');
                var n = Number(i[0]) == e;
                return t ? 'other' : e == 1 ? 'one' : e == 2 ? 'two' : n && e >= 3 && e <= 6 ? 'few' : n && e >= 7 && e <= 10 ? 'many' : 'other';
            },
            p22(e, t) {
                var i = String(e).split('.');
                var n = Number(i[0]) == e;
                return t ? 'other' : e == 1 || e == 11 ? 'one' : e == 2 || e == 12 ? 'two' : n && e >= 3 && e <= 10 || n && e >= 13 && e <= 19 ? 'few' : 'other';
            },
            p23(e, t) {
                return t ? e == 1 ? 'one' : e == 2 || e == 3 ? 'two' : e == 4 ? 'few' : e == 6 ? 'many' : 'other' : e >= 0 && e <= 1 ? 'one' : 'other';
            },
            p24(e, t) {
                var i = String(e).split('.');
                var n = i[0];
                var r = !i[1];
                var s = n.slice(-1);
                var a = n.slice(-2);
                return t ? 'other' : r && s == 1 ? 'one' : r && s == 2 ? 'two' : !r || a != 0 && a != 20 && a != 40 && a != 60 && a != 80 ? r ? 'other' : 'many' : 'few';
            },
            p25(e, t) {
                var i = String(e).split('.');
                var n = i[0];
                var r = !i[1];
                var s = Number(i[0]) == e;
                var a = s && i[0].slice(-1);
                return t ? 'other' : e == 1 && r ? 'one' : n == 2 && r ? 'two' : r && (e < 0 || e > 10) && s && a == 0 ? 'many' : 'other';
            },
            p26(e, t) {
                return t ? e == 1 || e == 5 ? 'one' : 'other' : e == 1 ? 'one' : 'other';
            },
            p27(e, t) {
                var i = String(e).split('.');
                var n = i[0];
                var r = Number(i[0]) == e;
                var s = n.slice(-1);
                var a = n.slice(-2);
                return t ? 'other' : r && s == 1 && a != 11 || !r ? 'one' : 'other';
            },
            p28(e, t) {
                var i = !String(e).split('.')[1];
                return t ? e == 11 || e == 8 || e == 80 || e == 800 ? 'many' : 'other' : e == 1 && i ? 'one' : 'other';
            },
            p29(e, t) {
                return t ? 'other' : e == 1 ? 'one' : e == 2 ? 'two' : 'other';
            },
            p30(e, t) {
                var i = String(e).split('.')[0];
                var n = i.slice(-2);
                return t ? i == 1 ? 'one' : i == 0 || n >= 2 && n <= 20 || n == 40 || n == 60 || n == 80 ? 'many' : 'other' : e == 1 ? 'one' : 'other';
            },
            p31(e, t) {
                var i = String(e).split('.');
                var n = Number(i[0]) == e;
                var r = n && i[0].slice(-1);
                return t ? r == 6 || r == 9 || n && r == 0 && e != 0 ? 'many' : 'other' : e == 1 ? 'one' : 'other';
            },
            p32(e, t) {
                return t ? 'other' : e == 0 ? 'zero' : e == 1 ? 'one' : 'other';
            },
            p33(e, t) {
                var i = String(e).split('.')[0];
                return t ? 'other' : e == 0 ? 'zero' : i != 0 && i != 1 || e == 0 ? 'other' : 'one';
            },
            p34(e, t) {
                return t && e == 1 ? 'one' : 'other';
            },
            p35(e, t) {
                var i = String(e).split('.');
                var n = i[1] || '';
                var r = Number(i[0]) == e;
                var s = r && i[0].slice(-1);
                var a = r && i[0].slice(-2);
                return t ? 'other' : s == 1 && (a < 11 || a > 19) ? 'one' : s >= 2 && s <= 9 && (a < 11 || a > 19) ? 'few' : n != 0 ? 'many' : 'other';
            },
            p36(e, t) {
                var i = String(e).split('.');
                var n = i[1] || '';
                var r = n.length;
                var s = Number(i[0]) == e;
                var a = s && i[0].slice(-1);
                var o = s && i[0].slice(-2);
                var l = n.slice(-2);
                var u = n.slice(-1);
                return t ? 'other' : s && a == 0 || o >= 11 && o <= 19 || r == 2 && l >= 11 && l <= 19 ? 'zero' : a == 1 && o != 11 || r == 2 && u == 1 && l != 11 || r != 2 && u == 1 ? 'one' : 'other';
            },
            p37(e, t) {
                var i = String(e).split('.');
                var n = i[1] || '';
                var r = Number(i[0]) == e;
                var s = r && i[0].slice(-1);
                var a = r && i[0].slice(-2);
                return t ? 'other' : s == 1 && (a < 11 || a > 19) ? 'one' : s >= 2 && s <= 9 && (a < 11 || a > 19) ? 'few' : n != 0 ? 'many' : 'other';
            },
            p38(e, t) {
                var i = String(e).split('.');
                var n = i[0];
                var r = i[1] || '';
                var s = !i[1];
                var a = n.slice(-1);
                var o = n.slice(-2);
                var l = r.slice(-1);
                return t ? a == 1 && o != 11 ? 'one' : a == 2 && o != 12 ? 'two' : a != 7 && a != 8 || o == 17 || o == 18 ? 'other' : 'many' : s && a == 1 || l == 1 ? 'one' : 'other';
            },
            p39(e, t) {
                var i = String(e).split('.');
                var n = !i[1];
                var r = Number(i[0]) == e && i[0].slice(-2);
                return t ? e == 1 ? 'one' : 'other' : e == 1 && n ? 'one' : !n || e == 0 || e != 1 && r >= 1 && r <= 19 ? 'few' : 'other';
            },
            p40(e, t) {
                return t ? e == 1 ? 'one' : e == 2 || e == 3 ? 'two' : e == 4 ? 'few' : 'other' : e >= 0 && e <= 1 ? 'one' : 'other';
            },
            p41(e, t) {
                var i = String(e).split('.');
                var n = Number(i[0]) == e && i[0].slice(-2);
                return t ? 'other' : e == 1 ? 'one' : e == 0 || n >= 2 && n <= 10 ? 'few' : n >= 11 && n <= 19 ? 'many' : 'other';
            },
            p42(e, t) {
                var i = String(e).split('.');
                var n = Number(i[0]) == e;
                return t ? n && e >= 1 && e <= 4 ? 'one' : 'other' : e == 1 ? 'one' : 'other';
            },
            p43(e, t) {
                var i = String(e).split('.');
                var n = i[0];
                var r = !i[1];
                var s = n.slice(-1);
                var a = n.slice(-2);
                return t ? 'other' : e == 1 && r ? 'one' : r && s >= 2 && s <= 4 && (a < 12 || a > 14) ? 'few' : r && n != 1 && (s == 0 || s == 1) || r && s >= 5 && s <= 9 || r && a >= 12 && a <= 14 ? 'many' : 'other';
            },
            p44(e, t) {
                var i = String(e).split('.');
                var n = Number(i[0]) == e;
                return t ? 'other' : n && e >= 0 && e <= 2 && e != 2 ? 'one' : 'other';
            },
            p45(e, t) {
                var i = String(e).split('.');
                var n = i[0];
                var r = !i[1];
                var s = n.slice(-1);
                var a = n.slice(-2);
                return t ? 'other' : r && s == 1 && a != 11 ? 'one' : r && s >= 2 && s <= 4 && (a < 12 || a > 14) ? 'few' : r && s == 0 || r && s >= 5 && s <= 9 || r && a >= 11 && a <= 14 ? 'many' : 'other';
            },
            p46(e, t) {
                var i = String(e).split('.');
                var n = Number(i[0]) == e;
                return t ? 'other' : e >= 0 && e <= 1 ? 'one' : n && e >= 2 && e <= 10 ? 'few' : 'other';
            },
            p47(e, t) {
                var i = String(e).split('.');
                var n = i[0];
                var r = i[1] || '';
                return t ? 'other' : e == 0 || e == 1 || n == 0 && r == 1 ? 'one' : 'other';
            },
            p48(e, t) {
                var i = String(e).split('.');
                var n = i[0];
                var r = !i[1];
                var s = n.slice(-2);
                return t ? 'other' : r && s == 1 ? 'one' : r && s == 2 ? 'two' : r && (s == 3 || s == 4) || !r ? 'few' : 'other';
            },
            p49(e, t) {
                var i = String(e).split('.');
                var n = Number(i[0]) == e;
                var r = n && i[0].slice(-1);
                var s = n && i[0].slice(-2);
                return t ? e == 1 ? 'one' : r == 4 && s != 14 ? 'many' : 'other' : e == 1 ? 'one' : 'other';
            },
            p50(e, t) {
                var i = String(e).split('.');
                var n = !i[1];
                var r = Number(i[0]) == e;
                var s = r && i[0].slice(-1);
                var a = r && i[0].slice(-2);
                return t ? s != 1 && s != 2 || a == 11 || a == 12 ? 'other' : 'one' : e == 1 && n ? 'one' : 'other';
            },
            p51(e, t) {
                var i = String(e).split('.');
                var n = Number(i[0]) == e;
                return t ? 'other' : e == 0 || e == 1 || n && e >= 11 && e <= 99 ? 'one' : 'other';
            },
            p52(e, t) {
                var i = String(e).split('.');
                var n = i[0];
                var r = !i[1];
                var s = Number(i[0]) == e;
                var a = s && i[0].slice(-1);
                var o = s && i[0].slice(-2);
                var l = n.slice(-1);
                var u = n.slice(-2);
                return t ? a == 3 && o != 13 ? 'few' : 'other' : r && l == 1 && u != 11 ? 'one' : r && l >= 2 && l <= 4 && (u < 12 || u > 14) ? 'few' : r && l == 0 || r && l >= 5 && l <= 9 || r && u >= 11 && u <= 14 ? 'many' : 'other';
            },
        };
        util.localization.pluralFunctions = t;
    }(),
    function (e) {
        e.addLocaleData = function (t) {
            var i = {
                locale: t.name,
            };
            t.hasOwnProperty('pluralRuleFunction') && (i.pluralRuleFunction = e.pluralFunctions[t.pluralRuleFunction]),
                util.IntlMessageFormat.__addLocaleData(i);
        };
    }(util.localization),
    model.languages = {
        preferred: ['en'],
        loaded: new Rx.ReplaySubject(),
        changed: new Rx.Subject(),
        isLoaded: !1,
        isRTL: !1,
        setModel(e) {
            if (e && e.strings && e.resolvedLocale) {
                var t = e.strings;
                var i = e.resolvedLocale;
                util.log.debug(`Preferred language '${i.name}' locked & loaded`),
                    this.resolvedLanguage = i.language,
                    this.resolvedLanguageWithExtensions = this.resolvedLanguage,
                    i.extensions && (this.resolvedLanguageWithExtensions += `-u-${i.extensions}`),
                    this.isRTL = !!i.isRTL,
                    this.preferredLanguages = [this.resolvedLanguage].concat(this.preferred),
                    this.resolvedLanguageBundle = t,
                    util.localization.addLocaleData(i),
                    this.isLoaded = !0,
                    document.documentElement && document.documentElement.style && util.localization.setFontFamily(i, document.documentElement.style),
                    this.loaded.onNext(this),
                    this.loaded.onCompleted(),
                    this.changed.onNext(this);
            } else this.error();
        },
        error(e) {
            this.loaded.onError(new util.Error('Languages model empty', config.debugCodes.startup.languages, e));
        },
    },
    s.adapterLoaded.subscribe(function () {
        var e = model.languages.preferred;
        model.languages.isLoaded || e.unshift(s.Adapter.device.language);
    }, e),
    model.geolocation = {
        policy: null,
        country: null,
        loaded: new Rx.ReplaySubject(),
        setModel(e) {
            var t = e && e.policy;
            var i = e && e.country;
            t && i ? (this.policy = t,
                this.country = i,
                this.loaded.onNext(this),
                this.loaded.onCompleted()) : this.error();
        },
        error(e) {
            this.loaded.onError(new util.Error('Geolocation model empty', config.debugCodes.startup.geolocation, e));
        },
    },
    config.webapi = {
        session: {
            dataType: 'json',
            logging: {
                application_name: config.uiAppName,
                application_v: config.uiVersion,
            },
            data: {
                v: '2.0',
                output: 'json',
                engine: 'html',
            },
        },
        requestLoader: {
            abortDelay: 10,
            queueTime: 1250,
            maxQueued: 40,
            minSpacing: 0,
            maxRetry: 2,
            retryDelay: 1e3,
            maxConcurrent: 20,
            excludeAuthRefresh: ['/oauth/request_token', '/oauth/login', '/oauth/access_token'],
            excludeFromRetry: ['/users/presentationtracking', '/users/customerevents', '/nm/tracking', '/account/refresh', '/ecapi/offers', '/ecapi/getvisitorid'],
            responseTextMaxSize: 4e3,
            excludeStartupRequest: 'isStartup=true',
            statusCodes: {
                401: {
                    maxRetry: 1,
                    refreshAuth: !0,
                },
                403: {},
                410: {
                    updateApiEndpoint: !0,
                },
                500: {},
                503: {},
            },
        },
    },
    a.languagesLoaded = function () {
        model.languages.loaded.subscribe(function (e) {
            config.webapi.session.data.languages = e.preferredLanguages;
        }, e);
    }
    ,
    a.languagesLoaded(),
    a.geolocationLoaded = function () {
        model.geolocation.loaded.subscribe(function (e) {
            config.webapi.session.data.country = e.country;
        }, e);
    }
    ,
    a.geolocationLoaded(),
    function (t) {
        util.CurrentUrlParams.get('esn'),
            util.CurrentUrlParams.get('device_type');
        window.nrdp && s.adapterLoaded.subscribe(function (e) {
            var i = e.device;
            var n = t.data;
            var r = t.logging;
            n.device_type = i.ESNPrefix,
                n.certification_version = i.certificationVersion,
                r.esn = i.ESN;
                console.log('ESN data i:', JSON.stringify(i));
                console.log('ESN data n:', JSON.stringify(n));
                console.log('ESN data r:', JSON.stringify(r));
            }, e);
    }(config.webapi.session),
    util.Timeout = util.Class.create({
        init(e, t, i) {
            this._callback = e,
                this._delayMs = t,
                this._scope = i,
                this._runDone = this._runDone.bind(this),
                this.active = !1;
        },
        run(e) {
            var t = arguments;
            return this.active && this.clear(),
                this.active = !0,
                this._data = t.length > 1 ? Array.slice(t, 1) : void 0,
                this._id = setTimeout(this._runDone, e != null ? e : this._delayMs),
                this;
        },
        clear() {
            return this.active && (clearTimeout(this._id),
                this._id = null,
                this.active = !1,
                delete this._data),
                this;
        },
        finish() {
            return this.active && (clearTimeout(this._id),
                this._runDone()),
                this;
        },
        _runDone() {
            var e = this._scope;
            var t = this._callback;
            var i = this._data;
            this.active = !1,
                delete this._id,
                delete this._data,
                t.apply(e, i);
        },
    }),
    util.mathBound = function (e, t, i) {
        return e < t ? t : e > i ? i : e;
    }
    ,
    util.ensureUuid = function (e) {
        return e.uuid || (e.uuid = util._uuid++);
    }
    ,
    util.uuid = function () {
        return util._uuid++;
    }
    ,
    util._uuid = 1,
    util.ExecutionDeferrer = new (util.Timeout.extend({
        init: function e() {
            e.base.call(this, this._doTasks, this._DELAY, this);
        },
        LOW: 0,
        MEDIUM: 50,
        HIGH: 100,
        _DELAY: 10,
        add(e, t, i) {
            var n = [e, t, i || 0];
            this._tasks ? this._tasks.push(n) : this._tasks = [n],
                this.active || this.run();
        },
        remove(e, t) {
            var i; var n; var r; var
                s = this._tasks;
            for (i = 0,
                n = s.length; i < n; i++) if (e === (r = s[i])[0] && (!t || t === r[1])) return void s.splice(i, 1);
        },
        _doTasks() {
            var e; var t; var i; var n; var r; var
                s = this._tasks;
            if (void 0 !== s) {
                for (delete this._tasks,
                    s.sort(this._sort),
                    e = 0,
                    t = s.length; e < t; e++) {
                    n = (i = s[e])[0],
                        r = i[1];
                    try {
                        r ? n.call(r) : n();
                    } catch (e) {
                        if (config.isDebugBuild) throw e;
                    }
                }
            } else util.log.error('Bug? util.ExecutionDeferrer this._tasks === undefined, _doTasks called twice?');
        },
        _sort(e, t) {
            return e[2] - t[2];
        },
    }))(),
    util.clearMap = function (e) {
        for (var t in e) { delete e[t]; }
    }
    ,
    util.Observable = util.Class.create({
        init(e) {
            e && e.deferNotify && (this._deferNotify = e.deferNotify);
        },
        _deferNotify: !1,
        _observersCount: 0,
        get hasObservers() {
            return this._observersCount > 0;
        },
        hasObserver(e) {
            var t; var
                i = this._observers;
            return Boolean(i && (t = e.uuid) && t in i);
        },
        subscribe(e, t) {
            var i; var n = this._observers || (this._observers = {}); var r = e.uuid; var
                s = !(r && r in n);
            return s && (r || (r = util.ensureUuid(e)),
                i = typeof e === 'function',
                n[r] = i || !t ? e : [e, t],
                this._observersCount++),
                s;
        },
        unsubscribe(e) {
            var t; var
                i = e.uuid;
            return !!(i && this._observersCount && i in (t = this._observers)) && (delete t[i],
                this._observersCount--,
                !0);
        },
        unsubscribeAll() {
            var e = this._observers;
            e && (util.clearMap(e),
                this._observersCount = 0);
        },
        notify() {
            this._observersCount && (this._deferNotify ? this._notifying || (this._notifying = !0,
                this._notifyArgs = arguments,
                util.ExecutionDeferrer.add(function () {
                    var e = this._notifyArgs;
                    delete this._notifyArgs,
                        delete this._notifying,
                        this._observersCount && this._doNotify.apply(this, e);
                }, this)) : this._doNotify.apply(this, arguments));
        },
        _doNotify() {
            var e; var t; var
                i = this._observers;
            for (e in i) typeof (t = i[e]) === 'function' ? t.apply(t, arguments) : t instanceof Array ? t[1].apply(t[0], arguments) : t.update.apply(t, arguments);
        },
    }),
    util.Observable.mixin({
        toRxObs() {
            var e = this;
            return Rx.Observable.create(function (t) {
                var i = function (e) {
                    t.onNext(e);
                };
                return e.subscribe(i),
                    function () {
                        e.unsubscribe(i);
                    };
            });
        },
    }),
    util.KeyedObservable = util.Class.create({
        _Observable: util.Observable,
        _observablesCount: 0,
        retainObservables: !1,
        get hasObservers() {
            return this._observablesCount > 0;
        },
        hasObserversForKey(e) {
            if (!this.hasObservers) return !1;
            var t = this._getObservable(e);
            return t && t.hasObservers;
        },
        hasObserver(e, t) {
            if (!this.hasObservers) return !1;
            var i = this._getObservable(e);
            return i && i.hasObserver(t);
        },
        subscribe(e, t, i) {
            this._getObservable(e, !0).subscribe(t, i);
        },
        getRxObs(e) {
            return this._getObservable(e, !0).toRxObs();
        },
        unsubscribe(e, t) {
            var i = this._getObservable(e);
            i && i.hasObservers && (i.unsubscribe(t),
                i.hasObservers || this._removeObservable(e));
        },
        unsubscribeAll(e) {
            var t = this._getObservable(e);
            t && t.hasObservers && (t.unsubscribeAll(),
                this._removeObservable(e));
        },
        unsubscribeAllKeys() {
            var e; var t = this._observables; var
                i = !this.retainObservables;
            for (e in t) {
                t[e].unsubscribeAll(),
                    i && delete t[e];
            }
            i || (this._observablesCount = 0);
        },
        notify(e) {
            if (this.hasObservers) {
                var t = this._getObservable(e);
                t && t.notify.apply(t, Array.slice(arguments, 1));
            }
        },
        _removeObservable(e) {
            var t = this._observables;
            t && e in t && (this.retainObservables || (delete t[e],
                --this._observablesCount));
        },
        _getObservable(e, t) {
            var i = this._observables;
            var n = i && i[e];
            return t && !n && (i || (i = this._observables = {}),
                n = i[e] = new this._Observable(),
                this._observablesCount += 1),
                n;
        },
    }),
    util.Http = function (t, i, n) {
        var r = {
            url: i,
            type: 'GET',
            contentType: 'application/x-www-form-urlencoded',
            processData: !0,
            async: !0,
            timeout: 15e3,
        };
        var s = {
            html: 'text/html',
            json: 'application/json, text/javascript',
            text: 'text/plain',
            _default: '*/*',
        };
        var a = /\?/;
        var o = /(\?|&)_=.*?(&|$)/;
        var l = /%20/g;
        var u = function (e, t, i, n) {
            e.error && e.error.call(e.context || e, t, i, n);
        };
        var c = function (e, t, i) {
            if (t instanceof Array) {
                t.forEach(function (t, n) {
                    c(`${e}[${typeof t === 'object' || t instanceof Array ? n : ''}]`, t, i);
                });
            } else if (t != null && typeof t === 'object') {
                var n;
                for (n in t) { c(`${e}[${n}]`, t[n], i); }
            } else { i(e, t); }
        };
        return {
            legacyRequest(i) {
                var l; var c; var d; var h; var p; var f; var _; var v = util.extend({}, r, i); var m = i && i.context || v; var b = v.type.toUpperCase(); var g = v.profile; var
                    y = v.requestHeaders;
                if (l = v.success ? function () {
                    v.success.call(m, h, d, _);
                }
                    : e,
                    v.data && v.processData && typeof v.data !== 'string' && (v.data = this.param(v.data)),
                    !1 === v.cache && b === 'GET' && (p = util.Date.now(),
                        f = v.url.replace(o, `$1_=${p}$2`),
                        v.url = f + (f === v.url ? `${a.test(v.url) ? '&' : '?'}_=${p}` : '')),
                    v.data) {
                    switch (b) {
                        case 'GET':
                        case 'HEAD':
                            v.url += (a.test(v.url) ? '&' : '?') + v.data;
                            break;
                        case 'POST':
                            var E = v.data.match('[?&]requestRouting=([^&]+)');
                            E && (v.url += `${a.test(v.url) ? '&' : '?'}requestRouting=${E[1]}`);
                    }
                }
                if ((_ = t()).open(b, v.url, v.async),
                    _.withCredentials = !!v.withCredentials,
                    (v.data || i && i.contentType) && _.setRequestHeader('Content-Type', v.contentType),
                    _.supportsUserSpecifiedHeaders && y) for (c in y) _.setRequestHeader(c, y[c]);
                return _.setRequestHeader('Accept', v.dataType && s[v.dataType] ? `${s[v.dataType]}, */*` : s._default),
                    v.beforeSend && !1 === v.beforeSend.call(m, _, v) ? (_.abort(),
                        !1) : (_.onLoad = function () {
                            var e;
                            if (_.requestDone) {
                                if (g && n.timeEnd(`${g}: xhr request`),
                                    (d = _.hasNoContent ? 'nocontent' : _.isSuccessful ? 'success' : 'error') === 'success') {
                                    try {
                                        h = function (e, t, i) {
                                            var r = e.getResponseHeader('content-type') || '';
                                            var s = e.responseText;
                                            var a = i.profile;
                                            return (t === 'json' || !t && r.indexOf('json') >= 0) && (a && (a += ': JSON parse',
                                                n.time(a)),
                                                s = s ? JSON.parse(s) : null,
                                                a && n.timeEnd(a)),
                                                i && i.dataFilter && (s = i.dataFilter(s, t)),
                                                s;
                                        }(_, v.dataType, v);
                                    } catch (t) {
                                        d = 'parsererror',
                                            e = t;
                                    }
                                }
                                d === 'nocontent' || d === 'success' || d === 'notmodified' ? l() : u(v, _, d, e);
                            }
                        }
                            ,
                            _.onAbort = function (e) {
                                e && u(v, _, 'timeout');
                            }
                            ,
                            _.onComplete = function () {
                                v.complete && v.complete.call(m, _, d);
                            }
                            ,
                            v.async && (_.timeout = v.timeout),
                            n && n.time(`${g}: xhr request`),
                            _.send(v.data),
                            _);
            },
            param(e) {
                var t; var i = []; var
                    n = function (e, t) {
                        i.push(function (e, t) {
                            return t = typeof t === 'function' ? t() : t,
                                `${encodeURIComponent(e)}=${encodeURIComponent(t)}`;
                        }(e, t));
                    };
                if (e instanceof Array) {
                    e.forEach(function (e) {
                        n(e.name, e.value);
                    });
                } else for (t in e) c(t, e[t], n);
                return i.join('&').replace(l, '+');
            },
            request(e) {
                var t = this;
                return Rx.Observable.create(function (i) {
                    var n; var r = util.extend({}, e); var s = !0; let
                        a = !1;
                    return r.success = function (e, t, n) {
                        s && (a = !0,
                            i.onNext({
                                data: e,
                                status: t,
                                dhr: n,
                            }),
                            i.onCompleted());
                    }
                        ,
                        r.error = function (e, t, n) {
                            s && (a = !0,
                                i.onError({
                                    status: t,
                                    message: n,
                                    dhr: e,
                                }));
                        }
                        ,
                        n = t.legacyRequest(r),
                        t = null,
                        function () {
                            s = !1,
                                a || n.abort(),
                                n = r = null;
                        };
                });
            },
        };
    }
    ,
    util.ADataHttpRequest = util.Class.create({
        requestDone: !1,
        responseType: '',
        supportsUserSpecifiedHeaders: !1,
        withCredentials: !1,
        method: 'GET',
        onLoad: e,
        onAbort: e,
        onComplete: e,
        abort(e) {
            try {
                this._onRequestEnd(),
                    this._abortRequest(),
                    this.onAbort(e),
                    this.onComplete();
            } catch (e) {
                throw e;
            } finally {
                this._detachHandlers();
            }
        },
        get isSuccessful() {
            var e = this.status;
            return e >= 200 && e < 300 || e === 304 || e === 1223;
        },
        get hasNoContent() {
            var e = this.status;
            return e === 202 || e === 204;
        },
        get isNotModified() {
            return this.status === 304;
        },
        send(e) {
            if (isFinite(this.timeout) && this.timeout > 0) {
                var t = this;
                this._timeOutId = setTimeout(function () {
                    t.abort(!0),
                        t = null;
                }, this.timeout);
            }
            this._doSend(e);
        },
        _handleOnLoad(e) {
            if (!this.requestDone) {
                try {
                    this._onRequestEnd(),
                        this._updateRequestState(e),
                        this.onLoad(),
                        this.onComplete();
                } catch (e) {
                    throw e;
                } finally {
                    this._detachHandlers();
                }
            }
        },
        _onRequestEnd() {
            this.requestDone = !0,
                clearTimeout(this._timeOutId);
        },
        _detachHandlers() {
            this.onLoad = this.onAbort = this.onComplete = e;
        },
    }),
    util.DataHttpRequest = util.ADataHttpRequest.extend({
        init: function t(i) {
            t.base.call(this),
                i = i || this._defaultXhrFactory,
                this.xhr = i();
            var n = this;
            this.xhr.onload = function (t) {
                n._handleOnLoad(t),
                    n.xhr.onload = e;
            };
        },
        getAllResponseHeaders() {
            return this.xhr.getAllResponseHeaders();
        },
        getResponseHeader(e) {
            return this.xhr.getResponseHeader(e);
        },
        open(e, t, i) {
            this.method = e,
                i = !1 !== i,
                this.xhr.open(e, t, i);
        },
        setRequestHeader(e, t) {
            this.xhr.setRequestHeader(e, t);
        },
        get withCredentials() {
            return this.xhr.withCredentials;
        },
        set withCredentials(e) {
            this.xhr.withCredentials = e;
        },
        _abortRequest() {
            this.xhr.abort();
        },
        _doSend(e) {
            switch (this.method.toUpperCase()) {
                case 'POST':
                case 'PUT':
                case 'DELETE':
                    break;
                default:
                    e = null;
            }
            this.xhr.send(e);
        },
        _defaultXhrFactory() {
            return new XMLHttpRequest();
        },
        _updateRequestState() {
            try {
                var e = this.xhr;
                this.status = e.status,
                    this.statusText = e.statusText,
                    this.responseText = e.responseText,
                    this.responseType = e.responseType,
                    this.response = e.response;
            } catch (e) { }
        },
    }),
    util.storage = {
        getJSON(e, t, i) {
            var n = e.getItem(t);
            if (n != null) {
                try {
                    return JSON.parse(n);
                } catch (e) { }
            }
            return i;
        },
        setJSON(e, t, i) {
            return this.setItem(e, t, JSON.stringify(i));
        },
        setItem(e, t, i) {
            try {
                e.getItem(t) !== i && e.setItem(t, i);
            } catch (e) {
                return e;
            }
        },
        getItems(e, t) {
            var i; var n; var r; var s; var
                a = {};
            for (i = 0,
                n = t.length; i < n; i++) {
                r = t[i],
                    (s = e.getItem(r)) != null && (a[r] = s);
            }
            return a;
        },
        setItems(e, t) {
            for (var i in t) this.setItem(e, i, t[i]);
        },
        prune(e, t) {
            var i; var n; var r; var
                s = [];
            for (i = 0,
                n = e.length; i < n && t; i++) {
                r = e.key(i),
                    t.indexOf(r) === -1 && s.push(r);
            }
            for (i = 0,
                n = s.length; i < n; i++) e.removeItem(s[i]);
        },
    },
    this.StartupTiming ? (util.startupProfiler = {
        _DATA: {
            event: 'ui-startup-time',
            version: '2.0',
            appRun: 0,
            start: null,
            end: null,
            elapsed: null,
            profiles: {},
            bootURL: config.uiBootUrl,
        },
        time(e) {
            var t = this._data.profiles;
            var i = t[e];
            i || (i = {},
                t[e] = i),
                i.start || (i.start = util.Date.now());
        },
        timeEnd(e) {
            var t; var i; var n = this._data; var
                r = n.profiles[e];
            r && r.start && (t = util.Date.now(),
                i = (r.calls || 0) + 1,
                r.elapsed = (r.elapsed || 0) + (t - r.start),
                r.offset = t - n.start,
                r.calls = i,
                delete r.start,
                util.log.debug(`${e}: ${JSON.stringify(r)}`));
        },
        jsScriptLoaded() {
            var e = 'jsScriptLoaded';
            this.time(e),
                this._data.profiles[e].start = StartupTiming.SP_SCRIPT_DOWNLOAD_START,
                this.timeEnd(e);
        },
        report(e) {
            var t = this._data;
            var i = t.start;
            var n = util.Date.now();
            t.success = e,
                t.end = n,
                t.elapsed = n - i,
                cast.framework.CastReceiverContext.getInstance().getSystemState() !== cast.framework.system.SystemState.READY ? t.isInBackground = !0 : t.isInBackground = !1,
                util.log.error(t),
                nrdp.log.flush(),
                this._done = !0,
                util.storage.setJSON(sessionStorage, 'startupProfiler', {
                    appRun: t.appRun,
                });
        },
    },
        function (e) {
            var t = util.storage.getJSON(sessionStorage, 'startupProfiler');
            (t = util.extend({}, e._DATA, t)).appRun++,
                t.start || (t.start = StartupTiming.SP_START),
                e._data = t;
        }(util.startupProfiler),
        window.addEventListener('beforeunload', function () {
            var e = util.startupProfiler;
            e._done || util.storage.setJSON(sessionStorage, 'startupProfiler', e._data);
        })) : util.startupProfiler = {
            time: e,
            timeEnd: e,
            jsScriptLoaded: e,
            report: e,
        },
    util.http = util.Http(function () {
        return new util.DataHttpRequest();
    }, util.location, util.startupProfiler),
    r.RequestLoader = {
        _CONFIG: config.webapi.requestLoader,
        _http: util.http,
        _extend: util.extend,
        _requestId: 1,
        _urlToIds: {},
        _idToRequest: {},
        _loadCnt: 0,
        _xhrs: {},
        _retryCnts: {},
        _aborts: [],
        _queue: [],
        _queueSlots: [],
        load(e) {
            var t = e.requestId || (e.requestId = this._requestId++);
            var i = e.unsignedUrl;
            var n = this._urlToIds;
            var r = n[i];
            return this._idToRequest[t] = e,
                r ? r.push(t) : (n[i] = [t],
                    this._queue.push(i)),
                this._check(),
                t;
        },
        abort(e) {
            var t; var i; var n; var r; var s; var a; var o = this._idToRequest; var
                l = o[e];
            l && ((t = l.unsignedUrl) in this._xhrs ? (this._aborts.push(e),
                !(i = this._abortWait).active && i.run()) : ((r = (n = this._urlToIds)[t]).length === 1 ? (delete n[t],
                    (a = (s = this._queue).indexOf(t)) !== -1 && s.splice(a, 1)) : (a = r.indexOf(e)) !== -1 && r.splice(a, 1),
                    delete o[e]));
        },
        _check() {
            var e; var t; var i; var n; var r; var s; var a; var o; var l; var config = this._CONFIG; var u = this._queue; var c = u.length; var
                d = Math.min(u.length, config.maxConcurrent - this._loadCnt);
            if (d < 1) c > 0 && !this._checkWait.active && this._checkWait.run(config.minSpacing);
            else if (e = util.Date.now(),
                t = util.mathBound(config.maxQueued - this._freeSlots(e), 0, d),
                i = this._checkWait,
                t) {
                if (n = config.minSpacing) {
                    if ((r = this._lastTime) && r + n >= e) return void (i.active || i.run(n));
                    t > 1 && (t = 1,
                        s = !0);
                }
                for (i.clear(),
                    a = u.splice(0, t),
                    o = this._queueSlots,
                    l = 0; l < t; l++) {
                    o.push(e),
                        this._loadByUrl(a[l]);
                }
                this._lastTime = e,
                    s && i.run(n),
                    u.length > 0 && i.run(n);
            } else i.run(this._queueSlots[0] + config.queueTime - e);
        },
        _loadByUrl(e) {
            var t; var
                i = this;
            this._loadCnt++,
                t = this._idToRequest[this._urlToIds[e][0]].sign(),
                this._xhrs[e] = this._http.legacyRequest(this._extend({}, t, {
                    success(n, r, a) {
                        var o; var l; var u; var c; var d; var h; var p; let
                            f;
                        if (!n && r !== 'nocontent' || !t.isApiNext && n && n.error) {
                            return o = n && n.status,
                                a || (a = {}),
                                o && (l = o.status_code) && (a.status = l),
                                i._onError(e, a, 'error', o ? o.message : null);
                        }
                        if (n && n.errorMessage) return i._clear(e, !0, a, r, n);
                        for (u = i._urlToIds[e],
                            c = i._idToRequest,
                            f = [],
                            d = 0,
                            h = u.length; d < h; d++) (p = c[u[d]].request.success) && f.push(p);
                        for (i._clear(e),
                            i._loadCnt--,
                            d = 0,
                            h = f.length; d < h; d++) f[d](n, r, a);
                        s.updateActivationTokens && s.updateActivationTokens('webapi.RequestLoader', !0);
                    },
                    error(t, n, r) {
                        i._onError(e, t || {}, n, r);
                    },
                }));
        },
        _doAborts() {
            var e; var t; var i; var n; var r; var s; var a; var o; var l = this._aborts; var u = this._idToRequest; var
                c = this._urlToIds;
            for (e = 0,
                t = l.length; e < t; e++) {
                (r = u[i = l[e]]) && ((s = c[n = r.unsignedUrl]) && (s.length === 1 ? ((o = (a = this._queue).indexOf(n)) !== -1 && a.splice(o, 1),
                    this._xhrs[n].abort(),
                    this._clear(n),
                    this._loadCnt--) : (o = s.indexOf(i)) !== -1 && s.splice(o, 1)),
                    delete u[i]);
            }
            this._aborts = [];
        },
        _onError(e, t, i, n, a) {
            var o; var l; var u = i === 'timeout' ? 504 : t.status; var c = this._CONFIG; var d = this._idToRequest[this._urlToIds[e]]; var h = d && d.request; var p = t.responseText; var f = p ? p.length : 0; var _ = c.responseTextMaxSize / 2; var
                v = h && h.errorConfig || c.statusCodes[u] || {};
            if (o = f < c.responseTextMaxSize ? p : `${p.slice(0, _)}...snip...${p.slice(-_)}`,
                util.log.error({
                    name: 'RequestLoader',
                    desc: i,
                    code: u,
                    url: e,
                    responseText: o,
                }),
                v.updateApiEndpoint) {
                if (p = t.responseText) {
                    try {
                        l = JSON.parse(p);
                    } catch (e) {
                        util.log.error({
                            name: 'RequestLoader',
                            desc: 'Failed to JSON.parse dhr.responseText for API routing',
                            exception: e,
                        });
                    }
                    l && l.host ? (util.log.error({
                        name: 'RequestLoader',
                        desc: `Received 410 response. Changing host from ${h && h.host} to ${l.host}.`,
                        code: u,
                        url: e,
                    }),
                        d.setHost(l.host)) : util.log.error({
                            name: 'RequestLoader',
                            desc: 'Received 410 response but did not get a host',
                        }),
                        this._retry(e, c, v) || this._clear(e, !0, t, i, n);
                }
            } else {
                u === 401 && s && s.EventContext && s.EventContext.inPlayback ? this._clear(e, !0, t, i, n) : a != null || (this._loadCnt--,
                    !v.refreshAuth || this._excludeFromRefresh(e)) ? !1 !== a && this._retry(e, c, v) || this._clear(e, !0, t, i, n) : r.ApiSession.refresh();
            }
        },
        _retry(e, config, t) {
            var i; var n; let
                r;
            return (i = t.maxRetry) == null && (i = config.maxRetry),
                !this._excludeFromRetry(e) && (i > (n = this._retryCnts[e] || 0) && (this._retryCnts[e] = ++n,
                    (r = t.retryDelay) == null && (r = config.retryDelay),
                    delete this._xhrs[e],
                    (this._retries || (this._retries = [])).push(e),
                    this._retriesWait.run(r || 0),
                    !0));
        },
        _doRetries() {
            var e; var t; var
                i = this._retries;
            for (e = 0,
                t = i.length; e < t; e++) this._loadByUrl(i[e]);
            delete this._retries;
        },
        _clear(e, t, i, n, r) {
            var s; var a; var o; var l; var u; var c; var d = this._urlToIds; var
                h = d[e];
            if (h) {
                for (delete d[e],
                    delete this._xhrs[e],
                    delete this._retryCnts[e],
                    s = this._idToRequest,
                    a = 0,
                    o = h.length; a < o; a++) {
                    u = s[l = h[a]],
                        delete s[l],
                        t && (c = u.request.error) && c(i, n, r);
                }
            }
        },
        _freeSlots(e) {
            var t; var i = this._queueSlots; var n = this._CONFIG.queueTime; var r = i.length; let
                s = 0;
            for (t = 0; t < r && i[t] + n <= e; t++) s++;
            return s && i.splice(0, s),
                i.length;
        },
        _excludeFromRefresh(e) {
            var t; var i; var
                n = this._CONFIG.excludeAuthRefresh;
            if (s && s.EventContext && s.EventContext.inPlayback) return !0;
            if (e.indexOf(this._CONFIG.excludeStartupRequest) !== -1) return !0;
            for (t = 0,
                i = n.length; t < i; t++) if (e.indexOf(n[t]) !== -1) return !0;
            return !1;
        },
        _excludeFromRetry(e) {
            var t; var i; var
                n = this._CONFIG.excludeFromRetry;
            for (t = 0,
                i = n.length; t < i; t++) if (e.indexOf(n[t]) !== -1) return !0;
            return !1;
        },
    },
    function (e) {
        e._checkWait = new util.Timeout(e._check, null, e),
            e._retriesWait = new util.Timeout(e._doRetries, null, e),
            e._abortWait = new util.Timeout(e._doAborts, e._CONFIG.abortDelay, e);
    }(r.RequestLoader),
    util.LoginRequiredError = util.Error.extend({
        type: 'LoginRequired',
    }),
    view = typeof view === 'undefined' ? {} : view,
    config.textTemplate = {
        cacheSize: 30,
    },
    config.__defineGetter__('text', function () {
        return model.languages.resolvedLanguageBundle;
    }),
    view.Profile = {
        touchEventListener: null,
        showProfileHelpTimeout: null,
        renderProfile(e, t) {
            var i = config.text;
            document.getElementById('mp-title').innerHTML = i && e ? util.textFormat(i.eureka.connectedTo, {
                name: e,
            }) : '',
                document.getElementById('mp-avatar').style['background-image'] = t ? `url(${t})` : '',
                document.getElementById('profile-help-message').innerText = i ? i.eureka.changeProfileHelp : '';
            var n = document.getElementById('profile');
            this.touchEventListener && n.removeEventListener('touchend', this.touchEventListener),
                a.touchControlsSupported && a.EurekaMdxDevice.didAuthUsingSSO && (this.touchEventListener = this.onProfileTouch.bind(this),
                    n.addEventListener('touchend', this.touchEventListener, !1));
        },
        onProfileTouch() {
            var e = document.getElementById('profile-help');
            e.classList.add('show'),
                clearTimeout(this.showProfileHelpTimeout),
                this.showProfileHelpTimeout = setTimeout(function () {
                    e.classList.remove('show');
                }, 1e4);
        },
    },
    model.CurrentUser = {
        loaded: new Rx.ReplaySubject(),
        setModel(e) {
            e && e.profileGuid ? (this.profileGuid = e.profileGuid,
                this.profileName = e.profileName,
                this.avatarImage = e.avatarImage,
                this.isAutoStartEnabled = e.isAutoStartEnabled,
                this.isTestAccount = e.isTestAccount,
                view.Profile.renderProfile(this.profileName, this.avatarImage),
                this.loaded.onNext(this),
                this.loaded.onCompleted()) : this.error();
        },
        error(e) {
            view.Profile.renderProfile(null, null),
                this.loaded.onError(new util.LoginRequiredError('CurrentUser model empty', config.debugCodes.authentication.currentUser, e));
        },
    },
    util.Cookies = {
        EXPIRE_NEVER: 'Sat, 01 Feb 2025 08:00:00 GMT',
        EXPIRE_PAST: 'Thu, 01 Feb 1990 08:00:00 GMT',
        _parser: new util.NameValuePairParser('=', '; '),
        get(e, t) {
            return this._parser.get(document.cookie, e, t);
        },
        set(e, t, i, n, r, s) {
            var a = new util.NameValuePair('=', '; ');
            a.add(e, t),
                i && a.add('Expires', i instanceof Date ? i.toGMTString() : i),
                a.add('Domain', r || '.netflix.com'),
                a.add('Path', s || '/'),
                a = a.toString(),
                n && (a += '; Secure'),
                document.cookie = a;
        },
        remove(e, t, i, n) {
            this.set(e, '', this.EXPIRE_PAST, t, i, n);
        },
        removeAll(e, t, i) {
            var n; var r = this._parser.getMap(document.cookie); var
                s = this.EXPIRE_PAST;
            for (n in r) this.set(n, '', s, e, t, i);
        },
    },
    a.deactivate = function (e) {
        return Rx.Observable.createWithDisposable(function (t) {
            util.log.error({
                name: 'application.deactivate',
                source: e,
            });
            var i; var n; var a = util.storage; var
                o = config.storage;
            return r.ApiSession.deauthenticate(),
                util.Cookies.removeAll(),
                i = a.getItems(sessionStorage, o.session.always),
                n = a.getItems(localStorage, o.local.always),
                sessionStorage.clear(),
                localStorage.clear(),
                s.adapterLoaded.delay(0).subscribe(function () {
                    s.Adapter.registration.deactivate(function () {
                        a.setItems(sessionStorage, i),
                            a.setItems(localStorage, n),
                            t.onNext(),
                            t.onCompleted();
                    });
                }, function (e) {
                    t.onError(e);
                });
        });
    }
    ,
    util.MessageBus = new util.KeyedObservable(),
    util.MessageBus.EVENTS = {},
    util.MessageBus.EVENTS.CONTROLLER_DISCONNECTED = 'CONTROLLER_DISCONNECTED',
    util.MessageBus.EVENTS.CONTROLLER_CONNECTED = 'CONTROLLER_CONNECTED',
    util.MessageBus.EVENTS.USER_ERROR_MESSAGE = 'USER_ERROR_MESSAGE',
    util.MessageBus.EVENTS.BEFORE_CHANGE_LOCATION = 'BEFORE_CHANGE_LOCATION',
    util.MessageBus.EVENTS.PIN_VERIFICATION_CANCEL = 'PIN_VERIFICATION_CANCEL',
    util.changeLocation = function (e, t) {
        var i; var n = util.MessageBus; var
            r = !(config.isDebugBuild && util.CurrentUrlParams.has('disableChangeLocation'));
        return util.log.error({
            area: 'util.changeLocation',
            url: e,
            enabled: r,
        }),
            n.notify(n.EVENTS.BEFORE_CHANGE_LOCATION),
            r && (i = function () {
                util.location.href = e;
            }
                ,
                t ? setTimeout(i, t) : i()),
            r;
    }
    ,
    a.reactivate = function (e) {
        a.deactivate(e).subscribe(function () {
            util.changeLocation(config.uiBootUrl);
        });
    }
    ,
    a.MessagePriority = {
        NONE: 10,
        LOW: 25,
        MODERATE: 50,
        HIGH: 75,
        CRITICAL: 100,
        ULTIMATE: 125,
    },
    model.MenuModel = util.Class.create({
        init(e, t) {
            this.id = e,
                this.items = [],
                t && this.add(t);
        },
        get length() {
            return this.items.length;
        },
        add(e, t) {
            e instanceof Array || (e = [e]);
            var i = this.items;
            this.items = t === 0 ? e.concat(i) : void 0 !== t ? i.slice(0, t).concat(e, i.slice(t)) : i.concat(e);
        },
        remove(e) {
            this.items.splice(e, 1);
        },
        get(e) {
            return this.items[e];
        },
        indexOf(e) {
            return this.items.indexOf(e);
        },
    }),
    model.MenuItemModel = util.Class.create({
        init(e, t) {
            this.label = e,
                t && util.extend(this, t);
        },
        confirm: e,
        focus: e,
        blur: e,
        enterInto: e,
    }),
    a.reactivateDialog = function (t, i) {
        util.log.error({
            name: 'application.reactivateDialog',
            source: i,
            desc: t,
        }),
            model.languages.loaded.subscribe(function () {
                var e; var n = util.MessageBus; var
                    r = config.text;
                (e = new model.MenuModel('ReactivateDialog')).add(new model.MenuItemModel(r.responses.reactivate, {
                    confirm() {
                        a.reactivate(i);
                    },
                })),
                    n.notify(n.EVENTS.USER_ERROR_MESSAGE, {
                        source: i || 'ReactivateDialog',
                        message: t || r.reactivate.getNewCredentialsError,
                        options: {
                            buttons: e,
                            priority: a.MessagePriority.HIGH,
                        },
                    });
            }, e);
    }
    ,
    util.relativePath = function (e, t) {
        var i; var n; let
            r;
        for (n = (e = e.split('?')).length > 1 ? e[1] : '',
            e = (e = e[0]).split('/'),
            r = (t = t.split('?')).length > 1 ? t[1] : '',
            t = (t = t[0]).split('/'),
            e.pop(); i = t.shift();) i === '..' && e.pop() || i !== '.' && e.push(i);
        return (e = new util.UrlParams(e.join('/'))).addAll(new util.UrlParams(n).getMap()),
            e.addAll(new util.UrlParams(r).getMap()),
            e.toString();
    }
    ,
    util.getAbsoluteUrl = function (e, t, i) {
        var n; var r; var s = arguments.callee; var a = `${config.urlProtocol}://`; let
            o = !0;
        return e[0] !== '/' && s._HOST.test(e) || (n = !0),
            n ? (e = t + e,
                r = !0,
                i = !1) : r = !s._PROTO.test(e),
            r && (e = a + e,
                o = !1),
            i ? e = e.replace(s._HOST, `${(o ? a : '$1') + t}$2`) : o && (e = e.replace(s._PROTO, a)),
            e;
    }
    ,
    util.getAbsoluteUrl._PROTO = /^.*?:\/\//,
    util.getAbsoluteUrl._HOST = /(^.*?:\/\/)(?:.*?\..*?)(\/|$)/,
    r.ApiSession = {
        _CONFIG: config.webapi.session,
        _Loader: r.RequestLoader,
        _Request: r.DcrRequest,
        authenticated: new Rx.ReplaySubject(),
        isAuthenticated: !1,
        get userId() {
            return this._userId;
        },
        refresh() {
            a.reactivateDialog(null, 'ApiSession.refresh');
        },
        deauthenticate() {
            util.log.error({
                name: 'ApiSession',
                desc: 'deauthenticate()',
            }),
                delete this._userId,
                this._isAuthenticated = !1;
        },
        resource(e) {
            var t; var i = e.url; var n = this._userId; var
                r = this._CONFIG;
            return t = this._extend({}, r.data, r.logging, e.data),
                n && (t.user_id = n),
                e.data = t,
                e.url = util.getAbsoluteUrl(i, e.host),
                this._Loader.load(new this._Request(e));
        },
        getResource(e) {
            var t = this;
            return new Rx.Observable.create(function (i) {
                var n = Object.create(e);
                var r = !1;
                return n.success = function (e, t, n) {
                    r || (i.onNext({
                        data: e,
                        textStatus: t,
                        xhr: n,
                    }),
                        i.onCompleted());
                }
                    ,
                    n.error = function (e, t, n) {
                        r || i.onError(n);
                    }
                    ,
                    t.resource(n),
                    function () {
                        r = !0;
                    };
            });
        },
        abort(e) {
            return this._Loader.abort(e);
        },
        _extend: util.extend,
    },
    r.ApiSession.initSession = function (e) {
        var t;
        t = function (t) {
            e.isAuthenticated = !1,
                e.authenticated.onError(new util.Error('User ID missing', null, t));
        }
            ,
            model.CurrentUser.loaded.subscribe(function (i) {
                var n; var
                    r = i && i.profileGuid;
                r ? (e._userId = r,
                    e.isAuthenticated = !0,
                    (n = e.authenticated).onNext(),
                    n.onCompleted()) : t();
            }, t);
    }
    ,
    r.ApiSession.initSession(r.ApiSession),
    r.ApiSessionRequestQueue = {
        load(e) {
            console.log('ApiSessionRequestQueue:', e, config.environment.webapiHost);
            return Rx.Observable.create(function (t) {
                var i; var n; let
                    s = !0;
                return i = {
                    isApiNext: !0,
                    url: e,
                    host: config.environment.webapiHost,
                    success(e) {
                        s && (t.onNext(e),
                            t.onCompleted());
                    },
                    error(e, i, n) {
                        s && (n || (n = new Error()),
                            n.textStatus = i,
                            t.onError(n));
                    },
                },
                    n = r.ApiSession.resource(i),
                    function () {
                        s = !1,
                            r.ApiSession.abort(n);
                    };
            });
        },
    },
    function (e) {
        var t = parseInt(util.CurrentUrlParams.get('treeCacheSize'), 10) || 5e6;
        e.BROWSE_ROOT_PATH_EVALUATOR_FACTORY = {
            value() {
                return function (e) {
                    (e = e || {}).withSize = !0;
                    var i = new n.falcor.RemotePathEvaluator(r.ApiSessionRequestQueue, '/pathEvaluator', e);
                    var s = new n.falcor.RelativeCache({}, t);
                    return new n.falcor.RelativePathEvaluator(i, s);
                };
            },
        };
    }(config.binding),
    util.ObservableValue = util.Class.create({
        _value: void 0,
        _watchDisposable: void 0,
        get value() {
            return this._value;
        },
        set value(e) {
            var t = this._value;
            e !== t && (this._value = e,
                this._values && this._values.onNext(e),
                this._differences && this._differences.onNext({
                    current: e,
                    previous: t,
                }));
        },
        get values() {
            var e = new Rx.BehaviorSubject(this._value);
            return Object.defineProperty(this, 'values', {
                value: e,
                enumerable: !0,
                configurable: !0,
            }),
                this._values = e,
                e;
        },
        get changes() {
            var e = this.values.skip(1);
            return Object.defineProperty(this, 'changes', {
                value: e,
                enumerable: !0,
                configurable: !0,
            }),
                this._changes = e,
                e;
        },
        get differences() {
            var e = new Rx.Subject();
            return Object.defineProperty(this, 'differences', {
                value: e,
                enumerable: !0,
                configurable: !0,
            }),
                this._differences = e,
                e;
        },
        init(e) {
            this._value = e;
        },
        set(e) {
            this.value = e;
        },
        destroy() {
            var e; var t; var i = ['values', 'differences']; var
                n = i.length;
            for (this.unwatch(),
                t = 0; t < n; t++) {
                this.hasOwnProperty(i[t]) && (this[e = i[t]].onCompleted(),
                    delete this[e],
                    delete this[`_${e}`]);
            }
            this._value = void 0;
        },
        link(e) {
            return this.watch(e);
        },
        unlink() {
            return this.unwatch();
        },
        watch(t) {
            var i = this;
            var n = this._watchDisposable;
            n && n.dispose(),
                this._watchDisposable = t.values.subscribe(function (e) {
                    i.value = e;
                }, e, e);
        },
        unwatch() {
            var e = this._watchDisposable;
            e && (e.dispose(),
                this.value = void 0);
        },
    }),
    a.uiInfoOverlay = {
        active: new util.ObservableValue(!1),
        toggle() {
            var e = this.active;
            e.value = !e.value;
        },
    },
    util.dom = {},
    util.css = {
        add(e, t) {
            e && !this.has(e, t) && (e.className += e.className ? ` ${t}` : t);
        },
        addAll(e, t) {
            var i; let
                n;
            if (e) {
                if (t.length === 1) return this.add(e, t[0]);
                i = e.className,
                    (n = this._addAll(i, t)) !== i && (e.className = n);
            }
        },
        swap(e, t, i) {
            var n = e.className;
            var r = this._remove(n, i);
            r !== n ? e.className = this._add(r, t) : this.add(e, t);
        },
        swapAll(e, t, i) {
            if (t.length === 1 && i.length === 1) return this.swap(e, t[0], i[0]);
            var n; var
                r = n = e.className;
            n && (n = this._removeAll(n, i)),
                (n = this._addAll(n, t)) !== r && (e.className = n);
        },
        swapCond(e, t, i) {
            i ? this.add(e, t) : this.remove(e, t);
        },
        remove(e, t) {
            var i = e ? e.className : null;
            i && (t = this._remove(i, t)) !== i && (e.className = t);
        },
        removeAll(e, t) {
            var i; var
                n = e ? e.className : null;
            n && (i = this._removeAll(n, t)) !== n && (e.className = i);
        },
        has(e, t) {
            return this._has(e.className, t);
        },
        _add(e, t) {
            return this._has(e, t) ? e : e + (e ? ` ${t}` : t);
        },
        _addAll(e, t) {
            if (!e) return t.join(' ');
            for (var i, n = [e], r = 0, s = t.length; r < s; r++) {
                i = t[r],
                    this._has(e, i) || n.push(i);
            }
            return n.join(' ');
        },
        _removeAll(e, t) {
            for (var i = 0, n = t.length; i < n; i++) e = this._remove(e, t[i]);
            return e;
        },
        _remove(e, t) {
            var i = e.replace(this._regExp(t), '$1');
            var n = i.length - 1;
            return i[n] === ' ' ? i.substr(0, n) : i;
        },
        _has(e, t) {
            return this._regExp(t).test(e);
        },
        _regExp(e) {
            return new RegExp(`(^|\\s+)${e}(?:$|\\s+)`, 'g');
        },
    },
    a.uiInfoOverlay.active.differences.subscribe(function (e) {
        var t = e.current;
        t !== e.previous && util.css.swapCond(document.body, 'ui-metadata-shown', t);
    }),
    a.uiIsRTL = {
        active: new util.ObservableValue(!1),
        setRTL(e) {
            this.active.value = e;
        },
    },
    a.uiIsRTL.active.differences.subscribe(function (e) {
        var t = e.current;
        t !== e.previous && util.css.swapCond(document.body, 'rtl', t);
    }),
    util.arrayToMapSelector = function (e, t, i) {
        for (var n, r = {}, s = 0, a = e.length; s < a; s++) {
            n = e[s],
                r[t ? t(n) : n] = i ? i(n) : n;
        }
        return r;
    }
    ,
    a.BindingsContainer = util.Class.create({
        Type: util.makeEnum('CLASS', 'FACTORY', 'POOL', 'SINGLETON'),
        init(e) {
            this.bindings = e;
        },
        setIfUnique(e, t) {
            var i = !(e in this.bindings);
            return i && this.set(e, t),
                i;
        },
        set(e, t) {
            this.bindings[e] = t;
        },
        get(e) {
            var t; var i; var n; var r; var s = this.bindings; var
                a = this;
            if (s && (t = s[e]) && (i = t.value)) {
                switch (n = Array.slice(arguments, 1),
                r = this.Type,
                t.type) {
                    case void 0:
                        return t._cachedValue || (t._cachedValue = i(util.arrayToMapSelector(t.dependsOn || [], null, function (e) {
                            return a.get(e);
                        })));
                    case r.CLASS:
                        return this._applyCtor(i, n);
                    case r.FACTORY:
                        return i.make.apply(i, n);
                    case r.POOL:
                        return n.unshift(null),
                            i.borrow.apply(i, n);
                    case r.SINGLETON:
                        return i;
                    default:
                        return null;
                }
            }
            return null;
        },
        release(e, t) {
            var i; var
                n = this.bindings;
            n && (i = n[e]) && i.type === this.Type.POOL && i.value.release(t);
        },
        _applyCtor: function () {
            var e = function () { };
            return function (t, i) {
                e.prototype = t.prototype;
                var n = new e();
                return t.apply(n, i),
                    n;
            };
        }(),
    }),
    a.Binding = new a.BindingsContainer(config.binding),
    function () {
        var t = 'http://api.netflix.com/catalog/titles/';
        var i = function (e) {
            return `${t}series/${e}`;
        };
        var n = function (e) {
            return `${t}programs/${e}/${e}`;
        };
        var r = function (t, i, n) {
            return a.Binding.get('BROWSE_ROOT_PATH_EVALUATOR_FACTORY')().get(t).subscribe((e) => {
                e.error ? n(e.error) : i(e.value);
            },
                n, e);
        };
        model.ContentLoader = {
            titleStates(e, s, a, o) {
                var l = function (e) {
                    if (e && e.bookmark) {
                        var t = e.bookmark.position;
                        var i;
                        if (void 0 !== e.bookmark.lastModified) {
                            try {
                                i = Math.round(parseInt(lastModified, 10) / 1e3);
                            } catch (e) {
                                i = 0;
                            }
                        }
                        return {
                            Instant: {
                                playback_bookmark: t,
                                watched_date: i,
                                state: [],
                            },
                        };
                    }
                };
                var u = function (e) {
                    if (e && e.details && typeof e.details.runtime === 'number') {
                        return {
                            instant: {
                                runtime: e.details.runtime,
                            },
                        };
                    }
                    throw Error('Runtime is mandatory');
                };
                var c = function (e) {
                    if (e && e.details) {
                        return {
                            type1: [{
                                offset: e.details.logicalStartOffset,
                                stills: {},
                            }],
                            type3: [{
                                offset: e.details.logicalEndOffset,
                                stills: {},
                            }],
                        };
                    }
                };
                var d = function (e) {
                    var i = l(e);
                    var n = u(e);
                    var r = c(e);
                    var s = {
                        title: {
                            regular: e && e.summary && e.summary.title || '',
                            title_short: e && e.summary && e.summary.shortTitle || '',
                        },
                        type: e && e.summary && e.summary.kind || 'movie',
                        id: (a = e.summary.videoId,
                            `${t}movies/${a}`),
                        pinProtected: e && e.details && e.details.isR21PinProtected || !1,
                    };
                    var a;
                    return i && (s.formats = i),
                        n && (s.delivery_formats = n),
                        r && (s.interesting_moments = r),
                        s;
                };
                var h = function (e) {
                    if (!e.summary.seasonId && !e.summary.showId) throw new Error('Missing mandatory fields');
                    return {
                        episode_count: e && e.summary && e.summary.showEpisodeCount || 0,
                        title: {
                            regular: e && e.summary && e.summary.showTitle || '',
                            title_short: e && e.summary && e.summary.showShortTitle || '',
                        },
                        type: 'show',
                        current_episode: p(e),
                        catalog_titles: [],
                        id: i(e.summary.showId),
                        season_count: e && e.summary && e.summary.showSeasonCount || 0,
                        formats: {
                            Instant: {
                                state: [],
                            },
                        },
                        delivery_formats: {
                            instant: {},
                        },
                    };
                };
                var p = function (e) {
                    if (!e.summary.seasonId && !e.summary.showId) throw new Error('Missing mandatory fields');
                    var r = l(e);
                    var s = u(e);
                    var a = c(e);
                    var o = {
                        title_series: {
                            id: i(e.summary.showId),
                            title: e && e.summary && e.summary.showTitle || '',
                        },
                        show_id: e.summary.showId,
                        season_number: e && e.summary && e.summary.seasonNumber || 0,
                        season_episode_count: e && e.summary && e.summary.seasonEpisodeCount || 0,
                        seasonLabelLong: e && e.summary && e.summary.seasonLabelLong || '',
                        title: {
                            regular: e && e.summary && e.summary.title || '',
                            title_short: e && e.summary && e.summary.shortTitle || '',
                            episode_short: e && e.summary && e.summary.episodeShortTitle || '',
                            episode_short_raw: e && e.summary && e.summary.title || '',
                        },
                        type: e && e.summary && e.summary.kind || 'episode',
                        title_season: {
                            id: (d = e.summary.showId,
                                h = e.summary.seasonId,
                                `${t}series/${d}/seasons/${h}`),
                            title: e && e.summary && e.summary.seasonTitle || '',
                        },
                        id: n(e.summary.videoId),
                        pinProtected: e && e.details && e.details.isR21PinProtected || !1,
                        sequence: e && e.summary && e.summary.episodeNumber || 0,
                        intro_offsets: {
                            startCreditOffset: e && e.details && e.details.startCreditOffset || 0,
                            endCreditOffset: e && e.details && e.details.endCreditOffset || 0,
                            startRecapOffset: e && e.details && e.details.startRecapOffset || 0,
                            endRecapOffset: e && e.details && e.details.endRecapOffset || 0,
                        },
                    };
                    var d; let
                        h;
                    return r && (o.formats = r),
                        s && (o.delivery_formats = s),
                        a && (o.interesting_moments = a),
                        o;
                };
                var f = function (t) {
                    var i;
                    try {
                        i = e.map(function (e) {
                            return function (e, t) {
                                var i = function (e, t) {
                                    var i = t && t.videos && t.videos[e];
                                    if (i && i.current && i.current.value) return i.current.value[1];
                                }(e, t);
                                var n = e !== i || s;
                                var r = function (e, t) {
                                    var i = t && e && t.videos && t.videos[e];
                                    if (i) {
                                        var e2 = {};
                                        return i.summary && i.summary.value && (e2.summary = i.summary.value),
                                            i.details && i.details.value && (e2.details = i.details.value),
                                            i.bookmark && i.bookmark.value && (e2.bookmark = i.bookmark.value),
                                            e2;
                                    }
                                }(i, t);
                                if (r && r.summary && r.summary.kind) {
                                    switch (r.summary.kind) {
                                        case 'show':
                                            return h(r);
                                        case 'episode':
                                            return n ? h(r) : p(r);
                                        case 'movie':
                                        case 'supplemental':
                                            return d(r);
                                    }
                                }
                            }(e, t);
                        });
                    } catch (e) {
                        return void o(e);
                    }
                    a({
                        title_states: i,
                    });
                };
                try {
                    return r(['videos', e, 'current', ['summary', 'details', 'bookmark']], f, o);
                } catch (e) {
                    o(e);
                }
            },
            episodes: (e, t, i) => {
                var s = (r) => {
                    var s = [];
                    try {
                        var t = function (t) {
                            var i = t && t.videos && t.videos[e];
                            if (i && i.siblings && i.siblings.value) { return i.siblings.value; }
                            throw new Error('Episode siblings request failed');
                        }(r);
                        t.previousEpisode && s.push({
                            id: n(t.previousEpisode),
                        }),
                            s.push({
                                id: n(e),
                            }),
                            t.nextEpisode && s.push({
                                id: n(t.nextEpisode),
                            });
                    } catch (e) {
                        return void i(e);
                    }
                    t({
                        episodes: s,
                    });
                };
                try {
                    return r(['videos', [e], 'siblings'], s, i);
                } catch (e) {
                    i(e);
                }
            },
        };
    }(),
    model.MovieUtils = {},
    model.MovieUtils.isEpisodic = function (e) {
        var t = typeof e === 'string' ? e : e && e.id;
        return t && t.indexOf('catalog/titles/programs') > -1;
    }
    ,
    util.getIdFromUri = function (e) {
        if (e) {
            var t = e.indexOf('?');
            var i = e.lastIndexOf('/');
            return parseInt(e.substring(i + 1, t > -1 ? t : void 0), 10);
        }
        return NaN;
    }
    ,
    model.MovieUtils.movieId = util.getIdFromUri,
    util.arrayObjsToMap = function (e, t, i) {
        var n; var r; var s; var a = {}; var
            o = !!i;
        for (n = 0,
            r = e.length; n < r; n++) {
            (s = e[n]) && (o && (s = i(s)),
                a[s[t]] = s);
        }
        return a;
    }
    ,
    model.SubtitleNarratives = util.makeEnum('PRIMARY', 'ASSISTIVE', 'FORCEDNARRATIVE'),
    model.MovieUtils.getDeliveryFormat = function (e, t) {
        var i = e && e.delivery_formats;
        return i ? i[t || 'instant'] : null;
    }
    ,
    util.sumDecimalPlaces = function (e) {
        var t; var i; var n = String(e).split('.'); let
            r = 0;
        for (t = 0,
            i = n.length; t < i; t++) { r += parseInt(n[t], 10); }
        return r;
    }
    ,
    model.AudioProfiles = {
        _SUPPORTED_CHANNELS_DEFAULT: {
            2: !0,
        },
        _SUPPORTED_CHANNELS_ARR_DEFAULT: [2],
        _supportedChannels: void 0,
        _supportedChannelsArr: [],
        _unavailableChannels: void 0,
        getChannelCountPreference() {
            if (!this._supportedChannels) {
                var e = this._parseAudioProfiles(s.Adapter.device.capability.audioProfiles, this._SUPPORTED_CHANNELS_DEFAULT, this._SUPPORTED_CHANNELS_ARR_DEFAULT);
                this._supportedChannels = e.map,
                    this._supportedChannelsArr = e.arr,
                    delete this._SUPPORTED_CHANNELS_DEFAULT,
                    delete this._SUPPORTED_CHANNELS_ARR_DEFAULT;
            }
            return this._supportedChannels;
        },
        getChannelCountUnavailable() {
            if (!this._unavailableChannels) {
                var e = this._parseAudioProfiles(s.Adapter.device.capability.unavailableAudioProfiles);
                this._unavailableChannels = e.map;
            }
            return this._unavailableChannels;
        },
        _parseAudioProfiles(e, t, i) {
            var n; var r; var a; var o = this._parseChannelCount; var l = {}; let
                u = [];
            if (t = t || {},
                s.Adapter.hasNrdp) {
                for (n = 0,
                    r = e.length; n < r; n++) {
                    !(a = o(e[n])) || a in l || (u.push(a),
                        l[a] = !0);
                }
                u.length ? u.sort().reverse() : (l = t,
                    u = i);
            } else {
                l = t,
                    u = i;
            }
            return {
                map: l,
                arr: u,
            };
        },
        isChannelCountSupported(e) {
            return e in this.getChannelCountPreference();
        },
        isChannelCountUnavailable(e) {
            return e in this.getChannelCountUnavailable();
        },
        getChannelCountPreferenceArray() {
            return this._supportedChannels || this.getChannelCountPreference(),
                this._supportedChannelsArr;
        },
        _parseChannelCount(e) {
            var t = e.split('-');
            var i = t.length;
            return i > 2 ? util.sumDecimalPlaces(t[i - 2]) : void 0;
        },
    },
    model.AudioNarratives = util.makeEnum('PRIMARY', 'COMMENTARY', 'ASSISTIVE'),
    util.LanguageMatcher = {
        _W3C_LANG_DELIMITER: '-',
        matches(e, t) {
            if (!e || !t) return !1;
            if (e === t) return !0;
            var i = e.split(this._W3C_LANG_DELIMITER);
            var n = t.split(this._W3C_LANG_DELIMITER);
            var r = i[1];
            return i[0] === n[0] || r && r === n[1];
        },
    },
    util.makeMap = function () {
        for (var e = 0, t = arguments.length, i = {}; e < t; e += 2) { i[arguments[e]] = e + 1 < t ? arguments[e + 1] : null; }
        return i;
    }
    ,
    model.TracksSort = {
        _AUDIO_NARRATIVE_SORT_ORDER: util.makeMap(model.AudioNarratives.PRIMARY, 0, model.AudioNarratives.ASSISTIVE, 1, model.AudioNarratives.COMMENTARY, 2),
        _AUDIO_NARRATIVE_SORT_ORDER_DEFAULT: 100,
        _getAudioNarrativeSortOrder(e) {
            var t = e.narrative;
            var i = this._AUDIO_NARRATIVE_SORT_ORDER_DEFAULT;
            var n = i;
            return t && void 0 == (n = this._AUDIO_NARRATIVE_SORT_ORDER[t.toUpperCase()]) && (n = i),
                n;
        },
        audioTrackDisplay(e, t) {
            var i; var n; var r; var s; var a; var o; var l; var u = e.isNativeLanguage; var
                c = t.isNativeLanguage;
            return u && !c ? -1 : !u && c ? 1 : (n = e.languageDescription) !== (r = t.languageDescription) ? n < r ? -1 : 1 : (s = (i = model.TracksSort)._getAudioNarrativeSortOrder(e)) < (a = i._getAudioNarrativeSortOrder(t)) ? -1 : a < s ? 1 : (o = e.channelsAsInt) > (l = t.channelsAsInt) ? 1 : l > o ? -1 : 0;
        },
        audioTrackDefault(e, t) {
            var i; var n; var r; var s; var a; var o; var l; var u = e.isNativeLanguage; var
                c = t.isNativeLanguage;
            return u && !c ? -1 : c && !u ? 1 : (l = model.AudioNarratives.PRIMARY,
                i = e.narrative.toUpperCase() === l,
                n = t.narrative.toUpperCase() === l,
                i && !n ? -1 : !i && n ? 1 : (r = e.isSupported,
                    s = t.isSupported,
                    r && !s ? -1 : s && !r ? 1 : (a = e.channelsAsInt) > (o = t.channelsAsInt) ? -1 : o > a ? 1 : 0));
        },
        timedTextDisplay(e, t) {
            var i; var n; var r; var s; var a; var o; var l = e.isNativeLanguage; var
                u = t.isNativeLanguage;
            return a = e.narrative && e.narrative.toUpperCase() === model.SubtitleNarratives.FORCEDNARRATIVE,
                o = t.narrative && t.narrative.toUpperCase() === model.SubtitleNarratives.FORCEDNARRATIVE,
                a && !o ? -1 : !a && o ? 1 : l && !u ? -1 : !l && u ? 1 : (i = e.languageDescription) !== (n = t.languageDescription) ? i < n ? -1 : 1 : (r = e.narrative && e.narrative.toUpperCase() === model.SubtitleNarratives.ASSISTIVE,
                    s = t.narrative && t.narrative.toUpperCase() === model.SubtitleNarratives.ASSISTIVE,
                    r && !s ? 1 : !r && s ? -1 : 0);
        },
    },
    util.localization.MessageFormats = {
        number: {
            runtime: {
                style: 'decimal',
                useGrouping: !1,
                minimumIntegerDigits: 2,
            },
        },
    },
    util.Cache = util.KeyedObservable.extend({
        init: function e(t, i) {
            e.base.call(this),
                this.id = t,
                this._cache = {},
                this._cachePolicy = i,
                this._debug && (this._hits = 0,
                    this._misses = 0,
                    this._trims = 0,
                    this._trimmed = 0,
                    this._totalAtTrim = 0);
        },
        Status: util.makeEnum('ADDED', 'PROMOTED', 'REMOVED'),
        _debug: util.CurrentUrlParams.get('debugCaches') === 'true',
        get maxSize() {
            return this._cachePolicy.maxSize;
        },
        set maxSize(e) {
            this._cachePolicy.maxSize = e,
                this._trim();
        },
        get(e) {
            var t = this._cache[e];
            var i = this._debug;
            return void 0 !== t ? (i && this._hits++,
                this._changed(this.Status.PROMOTED, e, t)) : i && this._misses++,
                t;
        },
        has(e) {
            return e in this._cache;
        },
        getAll() {
            return this._cache;
        },
        getKeys() {
            return this._cachePolicy.getKeys();
        },
        put(e, t) {
            var i = this._cache;
            var n = this.Status;
            var r = e in i ? n.PROMOTED : n.ADDED;
            i[e] = t,
                this._changed(r, e, t),
                this._trim();
        },
        remove(e) {
            var t; var
                i = this._cache;
            e in i && (t = i[e],
                delete i[e],
                this._changed(this.Status.REMOVED, e, t));
        },
        flush() {
            for (var e, t = this.getKeys(); e = t[0];) this.remove(e);
        },
        report() { },
        _trim() {
            var e = this._cachePolicy.trim();
            e && (this._removeTrimmed(e),
                this.report());
        },
        _changed(e, t, i) {
            var n = this._cachePolicy;
            switch (e) {
                case 'PROMOTED':
                    n.touch(t, i);
                    break;
                case 'REMOVED':
                    n.remove(t);
                    break;
                case 'ADDED':
                    n.add(t, i);
            }
            this.hasObserversForKey(e) && this.notify(e, t, i);
        },
        _removeTrimmed(e) {
            var t; var i; var n; var r; var s; var a; var
                o = e && e.length;
            if (o) {
                for (this._debug && (this._trims++,
                    this._trimmed += o,
                    this._totalAtTrim += this._cachePolicy.getKeys().length + o),
                    t = this._cache,
                    n = this.Status.REMOVED,
                    i = this.hasObserversForKey(n),
                    r = 0; r < o; r++) {
                    a = t[s = e[r]],
                        delete t[s],
                        i && this.notify(n, s, a);
                }
            }
        },
    }),
    util.LRUCachePolicy = util.Class.create({
        init(e, t) {
            this._maxSize = e,
                this._trimPercent = t,
                this._keys = [];
        },
        get maxSize() {
            return this._maxSize;
        },
        set maxSize(e) {
            this._maxSize = e;
        },
        get totalSize() {
            return this._keys.length;
        },
        getKeys() {
            return this._keys;
        },
        add(e, t) {
            this._keys.push(e);
        },
        touch(e, t) {
            var i = this._keys;
            i[i.length - 1] !== e && (i.splice(i.indexOf(e), 1),
                i.push(e));
        },
        remove(e) {
            var t = this._keys;
            var i = t.indexOf(e);
            i !== -1 && t.splice(i, 1);
        },
        trim() {
            var e = this._maxSize;
            var t = this.totalSize - e;
            if (t > 0) {
                return t += Math.floor(e * this._trimPercent),
                    this.trimBy(t);
            }
        },
        trimBy(e) {
            var t; var
                i = this._keys;
            if (e > 0) {
                return e > (t = i.length) && (e = t),
                    i.splice(0, e);
            }
        },
    }),
    util.LRUCache = util.Cache.extend({
        init: function e(t, i, n) {
            e.base.call(this, `LRUCache.${t}`, new util.LRUCachePolicy(i != null ? i : 10, n || 0));
        },
        trimBy(e) {
            this._removeTrimmed(this._cachePolicy.trimBy(e));
        },
    }),
    function () {
        var e = new util.LRUCache('TextTemplateCache', config.textTemplate.cacheSize);
        util.makeTextTemplate = function (t, i) {
            var n = `${t}:${i}`;
            var r = e.get(n);
            if (!r) {
                try {
                    (r = new util.IntlMessageFormat('have {num, plural, one {1 screen} other {# screens}}', i)).format({
                        num: 5,
                    });
                } catch (e) {
                    util.log.error(`Unable to create IntlMessageFormat for locale ${i}, falling back to en`),
                        i = 'en';
                }
                r = new util.IntlMessageFormat(t, i, util.localization.MessageFormats),
                    e.put(n, r);
            }
            return r;
        };
    }(),
    util.textFormat = function (e, t) {
        var i = model.languages.resolvedLanguageWithExtensions;
        return util.makeTextTemplate(e, i).format(t);
    }
    ,
    model.AudioTracks = {
        NONE_ID: 'default',
        _EMPTY_DISALLOW_SUBTITLES: [],
        _NARRATIVE_DEFAULT: model.AudioNarratives.PRIMARY,
        _FIVE_DOT_ONE_CHANNELS: 6,
        getFailureTrack() {
            var e = config.text.mdp.audioAndTimedText;
            return this._failTrack || (this._failTrack = new model.AudioTrackDescriptor(this.NONE_ID, e.audioDefault, '2.0', null, e.audioDefaultDescription, this._NARRATIVE_DEFAULT, !0)),
                this._failTrack;
        },
        buildDescriptors(e) {
            var t; var i; var n; var r; var a; var o; var l; var u; var c; var d; var h; var p; var f; var _; var v; var m; var b; var g; var y = s.Adapter.useBCP47; var E = this._EMPTY_DISALLOW_SUBTITLES; var T = util.sumDecimalPlaces; var C = this._NARRATIVE_DEFAULT; var S = model.AudioTrackDescriptor; var P = []; var A = this._FIVE_DOT_ONE_CHANNELS; let
                k = !1;
            for (t in e) {
                if (n = void 0 !== (i = e[t]).name ? i.name : t,
                    r = i[y ? 'bcp47_code' : 'term'],
                    (a = !0 === i.is_native) && (m = r,
                        b = t),
                    u = i.audio) {
                    for (_ = 0,
                        v = u.length; _ < v; _++) {
                        l = (c = u[_]).id,
                            h = T(d = c.channels),
                            o = c.disallowed_subtitles || E,
                            f = new S(l, n, d, h, r, c.label, p = (p = c.narrative) ? p.toUpperCase() : C, a, o),
                            k = k || (f.isSupported || f.isUnavailable) && f.channelsAsInt == A,
                            P.push(f);
                    }
                }
            }
            return P.length ? P.sort(model.TracksSort.audioTrackDisplay) : (g = this.getFailureTrack(),
                P.push(g)),
            {
                fiveDotOne: k,
                nativeLanguageTag: m,
                nativeLanguageDescription: b,
                descriptors: P,
            };
        },
    },
    model.AudioTrackDescriptor = function (e, t, i, n, r, s, a, o, l) {
        this.id = e,
            this.languageDescription = t,
            this.channels = i,
            this.channelsAsInt = n,
            this.languageTag = r,
            this.description = s,
            this.narrative = a,
            this.isNativeLanguage = o,
            this.disallowedSubtitles = l;
    }
    ,
    model.AudioTrackDescriptor.prototype = {
        get label() {
            if (!this._label) {
                var e = config.text.mdp.audioAndTimedText;
                var t = this.channels;
                var i = this._getDescriptionLabel();
                this._label = util.textFormat(e.audioLabel, {
                    language: this.languageDescription,
                    narrative: this._getNarrativeLabel(),
                    descriptionPhrase: i || t ? util.textFormat(this._getDescriptionTemplate(e), {
                        description: i,
                        channels: t,
                    }) : '',
                });
            }
            return this._label;
        },
        get isSupported() {
            return model.AudioProfiles.isChannelCountSupported(this.channelsAsInt);
        },
        get isUnavailable() {
            return model.AudioProfiles.isChannelCountUnavailable(this.channelsAsInt);
        },
        timedTextTrackIsAllowed(e) {
            var t = this.disallowedSubtitles;
            return !t || !t.length || (!(!this.requireNoneTrack || e !== model.TimedTextTracks.getNoneTrack()) || t.indexOf(e.id) < 0);
        },
        filterTimedTextTracks(e) {
            var t = this.disallowedSubtitles;
            return t && t.length ? e.filter(function (e) {
                return this.timedTextTrackIsAllowed(e);
            }
                .bind(this)) : e;
        },
        toString() {
            return this.label;
        },
        _getNarrativeLabel() {
            var e = model.AudioNarratives;
            var t = config.text.mdp.audioAndTimedText;
            var i = this.narrative;
            return i === e.COMMENTARY ? t.commentarySuffix : i === e.ASSISTIVE ? t.assistiveSuffix : '';
        },
        _getDescriptionLabel() {
            var e = this.description;
            return config.text.mdp.audioAndTimedText.audioChannelLabels[e] || e;
        },
        _getDescriptionTemplate(e) {
            return this.channelsAsInt > 2 ? e.audioLabelDescriptionPhraseWithChannels : e.audioLabelDescriptionPhrase;
        },
        cloneWithVariedChannels(e) {
            return new model.AudioTrackDescriptor(this.id, this.languageDescription, this.channels, e, this.languageTag, this.description, this.narrative, this.isNativeLanguage, this.disallowedSubtitles);
        },
    },
    model.TimedTextTracks = {
        NONE_ID: 'none',
        _NARRATIVE_DEFAULT: 'PRIMARY',
        _NARRATIVE_CONVERSIONS: {
            FORCED: 'FORCEDNARRATIVE',
        },
        getNoneTrack() {
            return this._noneTrack || (this._noneTrack = new model.TimedTextTrackDescriptor(this.NONE_ID, config.text.mdp.audioAndTimedText.timedTextNone, this.NONE_ID, null, !0)),
                this._noneTrack;
        },
        buildDescriptors(e, t, i) {
            var n; var r; var a; var o; var l; var u; var c; var d; var h; var p; var f; var _; var v = s.Adapter.useBCP47; var m = this._NARRATIVE_DEFAULT; var b = model.TimedTextTrackDescriptor; var g = []; var y = util.LanguageMatcher; var E = this.getNoneTrack(); var
                T = config.text.mdp.audioAndTimedText;
            for (r in e) {
                if (o = void 0 !== (a = e[r]).name ? a.name : r,
                    l = a[v ? 'bcp47_code' : 'term'],
                    u = a.subtitle_text) {
                    for (h = 0,
                        p = u.length; h < p; h++) {
                        d = ((c = u[h]).narrative || m).toUpperCase(),
                            n = c.id,
                            this._NARRATIVE_CONVERSIONS[d] && (d = this._NARRATIVE_CONVERSIONS[d]),
                            d === model.SubtitleNarratives.FORCEDNARRATIVE && (o = T.timedTextNone),
                            f = new b(n, o, l, d, y.matches(l, t) || i && r === i.toLowerCase()),
                            g.push(f);
                    }
                }
            }
            return (_ = g.sort(model.TracksSort.timedTextDisplay)).unshift(E),
            {
                descriptors: _,
            };
        },
    },
    model.TimedTextTrackDescriptor = function (e, t, i, n, r) {
        this.id = e,
            this.languageDescription = t,
            this.languageTag = i,
            this.narrative = n,
            this.isNativeLanguage = r;
    }
    ,
    model.TimedTextTrackDescriptor.prototype = {
        get label() {
            var e = config.text.mdp.audioAndTimedText;
            var t = this.narrative && this.narrative.toUpperCase() === model.SubtitleNarratives.ASSISTIVE;
            return util.textFormat(e.timedTextLabel, {
                language: this.languageDescription,
                narrative: t ? e.closedCaptionsSuffix : '',
            });
        },
        isSupported: !0,
        cloneWithVariedNarrative(e) {
            return new model.TimedTextTrackDescriptor(this.id, this.languageDescription, this.languageTag, e, this.isNativeLanguage);
        },
        toString() {
            return this.label;
        },
    },
    util.findInArray = function (e, t, i) {
        var n; var r; var
            s = e ? e.length : 0;
        i = i || null;
        for (n = 0; n < s; n++) { if (t(r = e[n])) return r; }
        return i;
    }
    ,
    model.AudioSubtitlesSelector = function (e, t, i) {
        this._apiAudioTracks = e,
            this._apiSubtitleTracks = t,
            this._apiDefaultTrackPairs = i,
            this._defaultTrackPair = this._selectDefaultInitialTracks();
    }
    ,
    model.AudioSubtitlesSelector.prototype = {
        _NARRATIVE_DEFAULT: 'PRIMARY',
        NARRATIVE_MAPPINGS: {
            PRIMARY: ['ASSISTIVE'],
            ASSISTIVE: ['PRIMARY'],
            FORCEDNARRATIVE: ['PRIMARY'],
        },
        NRDP_AUDIO_FAILURE_TRACK: {
            id: model.AudioTracks.NONE_ID,
            url: 'netflix://audioTrack/index=-1',
        },
        NRDP_SUBTITLES_NONE_TRACK: {
            id: model.TimedTextTracks.NONE_ID,
            url: 'netflix://timedText/index=-1',
        },
        get defaultInitialTracks() {
            return this._defaultTrackPair;
        },
        selectNewAudioTrack(e, t) {
            var i; var n; var r; var s = t && t.subtitles; var
                a = e.id;
            return s && e.timedTextTrackIsAllowed(s) ? this._createAudioSubtitlePair(e, s) : (i = util.findInArray(this._apiDefaultTrackPairs, function (e) {
                return e.audio.id === a;
            })) && e.timedTextTrackIsAllowed(i.subtitles) ? this._createAudioSubtitlePair(e, i.subtitles) : (n = e.filterTimedTextTracks(this._apiSubtitleTracks)) && n.length > 0 ? this._createAudioSubtitlePair(e, n[0]) : (r = this._getFallbackApiSubtitleTrack(e.languageTag),
                util.log.error({
                    name: 'AudioSubtitlesSelector',
                    context: 'selectNewAudioTrack',
                    desc: 'Using Subtitle Fallback',
                    newTrack: this._displayApiTrack(e),
                    resultTrack: this._displayApiTrack(r),
                }),
                this._createAudioSubtitlePair(e, r));
        },
        selectNewSubtitleTrack(e, t) {
            var i; var n; var
                r = t && t.audio;
            return r ? r.timedTextTrackIsAllowed(e) ? this._createAudioSubtitlePair(r, e) : (i = util.findInArray(this._apiSubtitleTracks, function (e) {
                return r.timedTextTrackIsAllowed(e);
            })) ? this._createAudioSubtitlePair(r, i) : (n = this._getFallbackApiSubtitleTrack(r.languageTag),
                util.log.error({
                    name: 'AudioSubtitlesSelector',
                    context: 'selectNewSubtitleTrack',
                    desc: 'Using Subtitle Fallback',
                    newTrack: this._displayApiTrack(e),
                    resultTrack: this._displayApiTrack(n),
                }),
                this._createAudioSubtitlePair(r, n)) : (util.log.error(`AudioSubtitlesSelector did not find an audio track when the subtitle track changed to ${this._displayApiTrack(e)}`),
                    this._createAudioSubtitlePair(null, e));
        },
        selectMatchingNccpTracks(e, t, i, n) {
            var r; var s; let
                a;
            if (this._displayNccpTracks(i),
                this._displayNccpTracks(n),
                r = this.findBestNccpAudioTrack(e, i, {
                    allowClones: !0,
                }),
                (a = this.selectNewAudioTrack(r.apiTrack, this._createAudioSubtitlePair(e, t))).audio !== r.apiTrack) throw 'API_NCCP_Matching_Algorithm_Failure';
            return (s = this.findBestNccpSubtitleTrack(a.audio, a.subtitles, n, {
                allowClones: !0,
            })) ? this._createTrackInfo(r.nccpTrack, s.nccpTrack, i, n) : this._createTrackInfo(r.nccpTrack, null, i, n);
        },
        findClosestMatchingApiAudioTrack(e) {
            var t; var i; var n; var r; var s = model.AudioProfiles.getChannelCountPreferenceArray(); var a = model.AudioTracks.getFailureTrack(); var o = this._apiAudioTracks; var l = this._apiDefaultTrackPairs; var u = e.id; var
                c = this;
            if (u === a.id) return a;
            if (n = util.findInArray(o, function (e) {
                return e.id === u;
            })) return n;
            for (i = s.length,
                t = 0; t < i; t++) {
                if (r = s[t],
                    n = util.findInArray(o, function (t) {
                        return t.channels === r && c._matchApiAudioTracksSansChannels(e, t);
                    })) return n;
            }
            return l.length > 0 ? l[0].audio : this._getFallbackApiAudioTrack();
        },
        findBestNccpAudioTrack(e, t, i) {
            var n; var r; var s; var a; var o; var l = i && i.allowClones; var u = model.AudioProfiles.getChannelCountPreferenceArray(); var c = model.AudioTracks.getFailureTrack(); var d = this._apiDefaultTrackPairs; var
                h = this;
            if (e.id === c.id) return this._createApiNccpPair(e, this.NRDP_AUDIO_FAILURE_TRACK);
            if (!t || t.length <= 0) {
                return util.log.error({
                    name: 'AudioSubtitlesSelector',
                    context: 'findBestNccpAudioTrack',
                    desc: 'Missing NCCP Audio Tracks',
                    apiTrack: this._displayApiTrack(e),
                    nccpTrack: 'null',
                }),
                    this._createApiNccpPair(null, null);
            }
            if (e.isSupported && !e.isUnavailable && (n = this._matchAudioTrack(e, t))) return this._createApiNccpPair(e, n);
            for (s = u.length,
                r = 0; r < s; r++) {
                if (o = u[r],
                    (a = l ? e.cloneWithVariedChannels(o) : util.findInArray(this._apiAudioTracks, function (t) {
                        return t.channelsAsInt === o && h._matchApiAudioTracksSansChannels(e, t);
                    })) && (n = this._matchAudioTrack(a, t))) {
                    return util.log.error({
                        name: 'AudioSubtitlesSelector',
                        context: 'findBestNccpAudioTrack',
                        desc: 'NCCP/API match failed, matched alternate channel',
                        apiTrack: this._displayApiTrack(e),
                        nccpTrack: this._displayNCCPTrack(n),
                    }),
                        this._createApiNccpPair(a, n);
                }
            }
            for (s = d && d.length,
                r = 0; r < s; r++) {
                if (a = d[r].audio,
                    n = this._matchAudioTrack(a, t)) {
                    return util.log.error({
                        name: 'AudioSubtitlesSelector',
                        context: 'findBestNccpAudioTrack',
                        desc: 'NCCP/API match failed, selecting default track',
                        apiTrack: this._displayApiTrack(e),
                        nccpTrack: this._displayNCCPTrack(n),
                    }),
                        this._createApiNccpPair(a, n);
                }
            }
            return a = this._getFallbackApiAudioTrack(),
                (n = this._matchAudioTrack(a, t)) ? (util.log.error({
                    name: 'AudioSubtitlesSelector',
                    context: 'findBestNccpAudioTrack',
                    desc: 'NCCP/API match failed, selecting fallback track',
                    apiTrack: this._displayApiTrack(e),
                    nccpTrack: this._displayNCCPTrack(n),
                }),
                    this._createApiNccpPair(a, n)) : (util.log.error({
                        name: 'AudioSubtitlesSelector',
                        context: 'findBestNccpAudioTrack',
                        desc: 'NCCP/API match failed, selecting failure track',
                        apiTrack: this._displayApiTrack(e),
                        nccpTrack: this._displayNCCPTrack(this.NRDP_AUDIO_FAILURE_TRACK),
                    }),
                        this._createApiNccpPair(c, this.NRDP_AUDIO_FAILURE_TRACK));
        },
        _matchAudioTrack(e, t) {
            var i; var n = e.id; var r = String(e.languageTag); var s = String(e.narrative); let
                a = Number(e.channels);
            return (i = util.findInArray(t, function (e) {
                return e.id === n;
            })) ? i : (r = r && r.toLowerCase(),
                s = s && s.toLowerCase(),
                a = a && Math.ceil(a),
                (i = util.findInArray(t, function (e) {
                    var t = String(e.language);
                    var i = String(e.trackType);
                    var n = Number(e.channels);
                    return t = t && t.toLowerCase(),
                        i = i && i.toLowerCase(),
                        n = n && Math.ceil(n),
                        !(r && (!t || t !== r)) && (!(s && (!i || i !== s)) && !(a && (!n || n !== a)));
                })) || null);
        },
        _matchApiAudioTracksSansChannels(e, t) {
            return e.languageDescription === t.languageDescription && e.languageTag === t.languageTag && e.narrative === t.narrative && e.isNativeLanguage === t.isNativeLanguage;
        },
        findClosestMatchingApiSubtitleTrack(e, t) {
            var i; var n; var r; var s; var a; var o = model.TimedTextTracks.getNoneTrack(); var l = t.narrative; var u = this._apiSubtitleTracks; var c = t.id; var d = this; var
                h = function () {
                    return e.timedTextTrackIsAllowed(o) ? o : (i = util.findInArray(u, function (t) {
                        return t.narrative && t.narrative.toUpperCase() === model.SubtitleNarratives.FORCEDNARRATIVE && e.timedTextTrackIsAllowed(t);
                    })) ? i : null;
                };
            if (c === o.id && (i = h())) return i;
            if ((i = util.findInArray(u, function (e) {
                return e.id === c;
            })) && e.timedTextTrackIsAllowed(i)) return i;
            if (t.narrative.toUpperCase() === model.SubtitleNarratives.FORCEDNARRATIVE && (i = h())) return i;
            for (a = (n = this.NARRATIVE_MAPPINGS[l]).length,
                s = 0; s < a; s++) {
                if (r = n[s],
                    i = util.findInArray(u, function (i) {
                        return i.narrative && i.narrative.toUpperCase() === r && d._matchApiSubtitleTrackSansNarrative(t, i) && e.timedTextTrackIsAllowed(i);
                    })) return i;
            }
            return this.selectNewAudioTrack(e, {
                audio: e,
                subtitles: t,
            }).subtitles;
        },
        findBestNccpSubtitleTrack(e, t, i, n) {
            var r; var s; var
                a = model.TimedTextTracks.getNoneTrack();
            return t.id === a.id ? this._createApiNccpPair(t, this.NRDP_SUBTITLES_NONE_TRACK) : !i || i.length <= 0 ? (util.log.error({
                name: 'AudioSubtitlesSelector',
                context: 'findBestNccpSubtitleTrack',
                desc: 'Missing NCCP Subtitle Tracks',
                apiTrack: this._displayApiTrack(t),
                nccpTrack: 'null',
            }),
                this._createApiNccpPair(null, null)) : (r = this._matchSubtitleTrack(t, i)) ? this._createApiNccpPair(t, r) : (s = this._matchSubtitleTrackWithAlternateTrack(t, i, n)) && s.nccpTrack ? (util.log.error({
                    name: 'AudioSubtitlesSelector',
                    context: 'findBestNccpSubtitleTrack',
                    desc: 'NCCP/API match failed, selecting alternate narrative',
                    apiTrack: this._displayApiTrack(t),
                    nccpTrack: this._displayNCCPTrack(s.nccpTrack),
                }),
                    s) : t.narrative.toUpperCase() === model.SubtitleNarratives.FORCEDNARRATIVE ? (util.log.error({
                        name: 'AudioSubtitlesSelector',
                        context: 'findBestNccpSubtitleTrack',
                        desc: 'NCCP/API match failed for forced narrative track, selecting none track',
                        apiTrack: this._displayApiTrack(t),
                        nccpTrack: this._displayNCCPTrack(r),
                    }),
                        this._createApiNccpPair(model.TimedTextTracks.getNoneTrack(), this.NRDP_SUBTITLES_NONE_TRACK)) : (util.log.error({
                            name: 'AudioSubtitlesSelector',
                            context: 'findBestNccpSubtitleTrack',
                            desc: 'NCCP/API match failed, selecting nothing',
                            apiTrack: this._displayApiTrack(t),
                            nccpTrack: 'null',
                        }),
                            null);
        },
        _matchSubtitleTrack(e, t) {
            var i; var n = e.id; var r = String(e.languageTag); let
                s = String(e.narrative);
            return (i = util.findInArray(t, function (e) {
                return e.id === n;
            })) ? i : (r = r && r.toLowerCase(),
                s = s && s.toLowerCase(),
                (i = util.findInArray(t, function (e) {
                    var t = String(e.language);
                    var i = String(e.trackType);
                    return t = t && t.toLowerCase(),
                        i = i && i.toLowerCase(),
                        !(r && (!t || t !== r)) && !(s && (!i || i !== s));
                })) || null);
        },
        _matchSubtitleTrackWithAlternateTrack(e, t, i) {
            var n; var r; var s; var a; var o; var l = e.narrative; var u = this.NARRATIVE_MAPPINGS[l]; var c = u ? u.length : 0; var d = i && i.allowClones; var
                h = this;
            for (n = 0; n < c; n++) {
                if (r = u[n],
                    d ? (o = e.cloneWithVariedNarrative(r),
                        a = this._matchSubtitleTrack(o, t)) : ((s = util.findInArray(this._apiSubtitleTracks, function (t) {
                            return t.narrative && t.narrative.toUpperCase() === r && h._matchApiSubtitleTrackSansNarrative(e, t);
                        })) || (s = e.cloneWithVariedNarrative(r),
                            o = e),
                            a = this._matchSubtitleTrack(s, t)),
                    a) return this._createApiNccpPair(o, a);
            }
            return null;
        },
        _matchApiSubtitleTrackSansNarrative(e, t) {
            return e.languageTag === t.languageTag && e.isNativeLanguage === t.isNativeLanguage;
        },
        _selectDefaultInitialTracks() {
            var e; let
                t;
            return (e = util.findInArray(this._apiDefaultTrackPairs, function (e) {
                var t = e.audio;
                return t.isSupported && !t.isUnavailable;
            })) ? this.selectNewAudioTrack(e.audio) : (t = this._getFallbackApiAudioTrack(),
                this.selectNewAudioTrack(t));
        },
        _getFallbackApiAudioTrack() {
            var e; var t; var i = this._NARRATIVE_DEFAULT; var
                n = this._apiAudioTracks;
            return n && n.length !== 0 ? (t = n.slice(0).sort(model.TracksSort.audioTrackDisplay),
                e = n.slice(0).sort(model.TracksSort.audioTrackDefault),
                util.findInArray(e, function (e) {
                    return !e || !e.narrative || String(e.narrative).toUpperCase() === i;
                }, t[0])) : model.AudioTracks.getFailureTrack();
        },
        _getFallbackApiSubtitleTrack(e) {
            var t; var i = this._NARRATIVE_DEFAULT; var n = s.Adapter.device.language; var r = util.LanguageMatcher.matches; var a = model.TimedTextTracks.getNoneTrack(); var
                o = this._defaultTrackPair;
            return (t = o ? o.audio.languageTag : e) && !util.LanguageMatcher.matches(n, t) ? util.findInArray(this._apiSubtitleTracks, function (e) {
                return (e.narrative || i).toUpperCase() === i && r(n, e.languageTag);
            }, a) : a;
        },
        _createTrackInfo(e, t, i, n) {
            var r = {
                id: e ? e.id : null,
                url: e ? e.url : null,
                index: i ? i.indexOf(e) : -1,
                rawTrack: e,
            };
            var s = {
                id: t ? t.id : null,
                url: t ? t.url : null,
                index: n ? n.indexOf(t) : -1,
                rawTrack: t,
            };
            return this._createAudioSubtitlePair(r, s);
        },
        _displayResults(e) {
            var t = e.audio;
            var i = e.subtitles;
            var n = '';
            return n += '\nType: Audio|Subtitle\n',
                n += `index: ${t.index}|${i.index}\n`,
                n += `url: ${t.url}|${i.url}\n`,
                n += `id: ${t.id}|${i.id}\n`;
        },
        _createAudioSubtitlePair(e, t) {
            return {
                audio: e,
                subtitles: t,
            };
        },
        _createApiNccpPair(e, t) {
            return {
                apiTrack: e,
                nccpTrack: t,
            };
        },
        _displayNCCPTrack(e) {
            var t;
            return e ? (t = `${e.languageDescription}:${e.url}@@${e.language}/${e.trackType}`,
                void 0 !== e.channels && (t += `/${e.channels}`)) : t = 'null track',
                t;
        },
        _displayApiTrack(e) {
            var t = `${e.label}:${e.languageDescription}@@${e.languageTag}/${e.narrative}`;
            return void 0 !== e.channelsAsInt && (t += `/${e.channelsAsInt}`),
                t;
        },
        _displayNccpTracks(e) {
            !e || e.length <= 0 ? util.log.error('AudioSubtitlesSelector: Missing NCCP Tracks!') : e[0].channels;
        },
    },
    model.ContentAudioSubtitlesMetadata = util.KeyedObservable.extend({
        EVENTS: util.makeEnum('AUDIO_TRACK_CHANGED', 'SUBTITLE_TRACK_CHANGED', 'METADATA_CHANGED'),
        init: function e() {
            e.base.call(this),
                this._slaves = [];
        },
        setMetadata(e) {
            var t; var i; var n; var r; var
                s = model.MovieUtils.getDeliveryFormat(e);
            !this._inited && s && (t = this._audioInfo = model.AudioTracks.buildDescriptors(s.languages_and_audio),
                i = this._timedTextInfo = model.TimedTextTracks.buildDescriptors(s.subtitle_languages, t.nativeLanguageTag, t.nativeLanguageDescription),
                n = this._defaultAudioSubtitleTracks = this._mapDefaultDescriptors(s.default_audio_subtitles),
                r = (this._trackSelector = new model.AudioSubtitlesSelector(t.descriptors, i.descriptors, n)).defaultInitialTracks,
                this._audioTrackSelectionContext = null,
                this._timedTextTrackSelectionContext = null,
                this._updateTracks(r),
                this._inited = !0,
                this.notify(this.EVENTS.METADATA_CHANGED));
        },
        setParentMetadata(e) {
            var t = this.EVENTS;
            var i = this._trackSelector;
            this._parentMetadata && this.unlinkParentMetadata(),
                this._parentMetadata = e,
                e._slaves.push(this),
                e.subscribe(t.AUDIO_TRACK_CHANGED, this, function (e) {
                    this._selectedAudioTrack = i.findClosestMatchingApiAudioTrack(e),
                        this._audioTrackSelectionContext = null,
                        this.notify(t.AUDIO_TRACK_CHANGED, this._selectedAudioTrack);
                }),
                e.subscribe(t.SUBTITLE_TRACK_CHANGED, this, function (e) {
                    this._selectedTimedText = i.findClosestMatchingApiSubtitleTrack(this._selectedAudioTrack, e),
                        this._timedTextTrackSelectionContext = null,
                        this.notify(t.SUBTITLE_TRACK_CHANGED, this._selectedTimedText);
                }),
                this._selectedAudioTrack = i.findClosestMatchingApiAudioTrack(e._selectedAudioTrack),
                this._selectedTimedText = i.findClosestMatchingApiSubtitleTrack(this._selectedAudioTrack, e._selectedTimedText);
        },
        unlinkParentMetadata() {
            var e = this.EVENTS;
            var t = this._parentMetadata;
            t && (this._parentMetadata = null,
                t.unsubscribe(e.AUDIO_TRACK_CHANGED, this),
                t.unsubscribe(e.SUBTITLE_TRACK_CHANGED, this),
                t._slaves.remove(this));
        },
        destroy: function e() {
            e.base.call(this);
            var t; var i = this._slaves; var
                n = i.length;
            for (this._slaves = [],
                t = 0; t < n; t++) { i[t].destroy(); }
            this.unlinkParentMetadata();
        },
        cycleTimedTextTrack() {
            var e; var t; var i; var n; var r = this.selectedAudioTrack; var s = this.selectedTimedTextTrack; var
                a = this.timedTextTracks;
            for (n = a.length,
                i = t = a.indexOf(s); n;) {
                if (e = a[i = ++i >= n ? 0 : i],
                    r.timedTextTrackIsAllowed(e)) {
                    this.selectedTimedTextTrack = e,
                        this._timedTextTrackSelectionContext = null;
                    break;
                }
                if (i === t) break;
            }
        },
        cycleAudioTrack() {
            var e; var t; var i; var n = this.selectedAudioTrack; var
                r = this.supportedAudioTracks;
            i = r.length,
                t = r.indexOf(n),
                e = r[++t >= i ? 0 : t],
                this.selectedAudioTrack = e,
                this._audioTrackSelectionContext = null;
        },
        get audioTracks() {
            return this._audioTracks;
        },
        get availableAudioTracks() {
            return this._audioTracks.filter(this._filterUnavailableAudioTrack);
        },
        get supportedAudioTracks() {
            return this._audioTracks.filter(this._filterUnsupportedAudioTrack);
        },
        get availableOrSupportedAudioTracks() {
            return this._audioTracks.filter(this._filterUnsupportedAndAvailableAudioTrack);
        },
        get availableAndSupportedAudioTracks() {
            return this._audioTracks.filter(this._filterUnsupportedOrUnavailableAudioTrack);
        },
        get selectedAudioTrack() {
            return this._selectedAudioTrack;
        },
        set selectedAudioTrack(e) {
            var t = this._trackSelector.selectNewAudioTrack(e, this.selectedTracks);
            this._updateTracksAndNotifyParent(t),
                this._audioTrackSelectionContext = state.Context.uiContext;
        },
        get hasFiveDotOneAudioTrack() {
            return Boolean(this._audioInfo && this._audioInfo.fiveDotOne);
        },
        get timedTextTracks() {
            var e = this._selectedAudioTrack;
            var t = this._timedTextTracks;
            return e ? e.filterTimedTextTracks(t) : t;
        },
        get unfilteredTimedTextTracks() {
            return this._timedTextTracks;
        },
        get selectedTimedTextTrack() {
            return this._selectedTimedText;
        },
        set selectedTimedTextTrack(e) {
            var t = this._trackSelector.selectNewSubtitleTrack(e, this.selectedTracks);
            this._updateTracksAndNotifyParent(t),
                this._timedTextTrackSelectionContext = state.Context.uiContext;
        },
        get defaultAudioSubtitles() {
            return this._defaultAudioSubtitleTracks;
        },
        get selectedTracks() {
            return {
                audio: this.selectedAudioTrack,
                subtitles: this.selectedTimedTextTrack,
            };
        },
        get trackSelector() {
            return this._trackSelector;
        },
        get audioTrackSelectionContext() {
            return this._audioTrackSelectionContext;
        },
        get timedTextTrackSelectionContext() {
            return this._timedTextTrackSelectionContext;
        },
        _EMPTY_TRACK_LIST: [],
        get _audioTracks() {
            var e = this._audioInfo;
            var t = this._EMPTY_TRACK_LIST;
            var i = this._nccpFilteredAudioData;
            var n = i && i.tracks;
            return e && (t = e.descriptors),
                n && (t = n),
                t;
        },
        get _timedTextTracks() {
            var e = this._timedTextInfo;
            var t = this._EMPTY_TRACK_LIST;
            var i = this._nccpFilteredSubtitleData;
            var n = i && i.tracks;
            return e && (t = e.descriptors),
                n && (t = n),
                t;
        },
        _filterUnavailableAudioTrack(e) {
            return !e.isUnavailable;
        },
        _filterUnsupportedAudioTrack(e) {
            return e.isSupported;
        },
        _filterUnsupportedOrUnavailableAudioTrack(e) {
            return e.isSupported && !e.isUnavailable;
        },
        _filterUnsupportedAndAvailableAudioTrack(e) {
            return e.isSupported || e.isUnavailable;
        },
        _updateTracksAndNotifyParent(e) {
            var t; var i; var n; var r = this._selectedAudioTrack; var s = this._selectedTimedText; var
                a = this._parentMetadata && this._parentMetadata.trackSelector;
            this._updateTracks(e),
                i = this._selectedAudioTrack,
                n = this._selectedTimedText,
                (!r || i && i.id !== r.id) && a && (t = a.findClosestMatchingApiAudioTrack(i)),
                (!s || n && n.id !== s.id) && a && (this._parentMetadata.selectedTimedTextTrack = a.findClosestMatchingApiSubtitleTrack(t || this._parentMetadata.selectedAudioTrack, n)),
                t && (this._parentMetadata.selectedAudioTrack = t);
        },
        _updateTracks(e) {
            var t = e && e.audio;
            var i = e && e.subtitles;
            var n = this._selectedAudioTrack;
            var r = this._selectedTimedText;
            (!n || t && t.id !== n.id) && (this._selectedAudioTrack = t,
                this.notify(this.EVENTS.AUDIO_TRACK_CHANGED, t)),
                (!r || i && i.id !== r.id) && (this._selectedTimedText = i,
                    this.notify(this.EVENTS.SUBTITLE_TRACK_CHANGED, i));
        },
        _mapDefaultDescriptors(e) {
            var t; var i; var n; var r; var s; var a; var o; var l; var u = this._audioTracks; var c = this._timedTextTracks; var
                d = util.arrayObjsToMap;
            if (i = d(u, 'id'),
                n = d(c, 'id'),
                r = [],
                e && e.length) {
                for (o = 0,
                    l = e.length; o < l; o++) {
                    if (s = i[(t = e[o]).audio_id],
                        a = n[t.subtitle_id],
                        !s || !a) return void (r = []);
                    r.push({
                        audio: s,
                        subtitles: a,
                    });
                }
            }
            return r;
        },
    }),
    model.ContentMetadata = util.KeyedObservable.extend({
        EVENT_TYPE: util.makeEnum('METADATA'),
        retainObservables: !0,
        init: function e(t, i) {
            e.base.call(this),
                this.loaded = !1,
                this.movieUri = t,
                this.isEpisodic = model.MovieUtils.isEpisodic(t),
                this.audioSubtitles = new model.ContentAudioSubtitlesMetadata(),
                i && (this._metadata = i.catalogTitle,
                    i.episodeInfo && i.episodeInfo.current_episode_ref && (this._curEpisodeOverride = i.episodeInfo.current_episode_ref));
        },
        load() {
            var e = this;
            model.ContentLoader.titleStates([this._getTitleId()], !!this._curEpisodeOverride, function (t) {
                if (t && t.title_states && t.title_states.length !== 0 && t.title_states[0]) {
                    var i = t.title_states[0];
                    e._metadata = i,
                        e.isEpisodic = model.MovieUtils.isEpisodic(i),
                        setTimeout(function () {
                            e._processMetadata(),
                                e.loaded = !0,
                                e.notify(e.EVENT_TYPE.METADATA, e, !1, !1);
                        }, 1);
                } else e.notify(e.EVENT_TYPE.METADATA, e, !1, !0);
            }, function () {
                e.notify(e.EVENT_TYPE.METADATA, e, !1, !0);
            });
        },
        loadStubbedResponse(e) {
            var t = this;
            var i = {
                title_states: [{
                    maturity_level: 110,
                    title_series: {
                        id: e,
                        title: 'QC PLAYER',
                    },
                    season_number: 1,
                    average_rating: 3,
                    title: {
                        regular: 'QC PLAYER',
                        title_short: 'QC PLAYER',
                        episode_short: 'QC PLAYER',
                        episode_short_raw: 'QC PLAYER',
                    },
                    type: 'episode',
                    interesting_moments: {
                        type1: [{
                            offset: 5,
                            stills: {},
                        }],
                        type2: [{
                            offset: 0,
                            stills: {
                                '853pix_w': {
                                    sequence: 1,
                                    width: 853,
                                    link: 'https://art-s.nflximg.net/5c976/999745724ffd574d96e0a049996577b748b5c976.jpg',
                                    height: 480,
                                },
                            },
                        }],
                        type3: [{
                            offset: 1643,
                            stills: {},
                        }],
                    },
                    sequence: 1,
                    id: e,
                    box_art: {},
                    formats: {
                        Instant: {
                            playback_bookmark: -1,
                            watched_date: 0,
                            state: [],
                        },
                    },
                    delivery_formats: {
                        instant: {
                            runtime: 1770,
                        },
                    },
                    intro_offsets: {},
                    release_year: '2017',
                }],
            }.title_states[0];
            t._metadata = i,
                t.isEpisodic = !1,
                setTimeout(function () {
                    t._processMetadata(),
                        t.loaded = !0,
                        t.notify(t.EVENT_TYPE.METADATA, t, !1, !1);
                }, 1);
        },
        _getTitleId() {
            var e = model.MovieUtils.movieId(this._curEpisodeOverride || this.movieUri);
            return isNaN(e) && util.log.error({
                name: 'content-metadata-error',
                videoId: this.movieUri,
                error: 'movieUri is not a valid ID URI',
            }),
                e;
        },
        _processMetadata() {
            var e = this._metadata;
            var t = e.episode_count;
            var i = e.season_count;
            this.episodeCount = t,
                this.hasEpisodes = t > 0,
                this.seasonCount = i,
                this.hasSeasons = i > 0,
                this.audioSubtitles.setMetadata(this._metadata);
        },
        get movie() {
            return this._metadata;
        },
        get playbackMovie() {
            var e = this._metadata;
            if (e) { return this.hasEpisodes ? e.current_episode : e; }
        },
        get isStreaming() {
            var e = this._isStreaming;
            var t = this.playbackMovie;
            return void 0 === e && t && (e = this._isStreaming = model.MovieUtils.isStreaming(t)),
                e;
        },
        get currentEpisode() {
            return this._metadata ? this._metadata.current_episode : void 0;
        },
    }),
    config.binding.CONTENT_METADATA = {
        type: a.Binding.Type.CLASS,
        value: model.ContentMetadata,
    },
    view2 = typeof view2 === 'undefined' ? {} : view2,
    view2.AView = function () { }
    ,
    config.playbackErrors = function () {
        var e = {
            action: 'nonNetworkPlaybackError',
        };
        var t = {
            action: 'handleConnectionError',
        };
        var i = {
            ignoreIfPlaying: !0,
            action: 'notifyGenericErrorAndCallback',
        };
        var n = {
            ignoreIfPlaying: !0,
            action: 'nonNetworkPlaybackError',
        };
        var r = {
            ignoreIfPlaying: !0,
            action: 'notifyGenericError',
        };
        var s = {
            alwaysIgnore: !0,
        };
        return {
            actionTypes: {
                nonNetworkPlaybackError: 'nonNetworkPlaybackError',
                handleSubtitleError: 'handleSubtitleError',
                handleConnectionError: 'handleConnectionError',
                notifyGenericErrorAndCallback: 'notifyGenericErrorAndCallback',
                notifyGenericError: 'notifyGenericError',
                handleSecondaryCredentialsError: 'handleSecondaryCredentialsError',
            },
            exception: n,
            actionIds: {
                1: {
                    id: -1,
                    key: 'NFErr_MC_NCCP_NonRecoverableError',
                    actionBlock: i,
                },
                2: {
                    id: -2,
                    key: 'NFErr_MC_NCCP_PotentiallyRecoverableError',
                    actionBlock: n,
                },
                3: {
                    id: -3,
                    key: 'NFErr_MC_NCCP_CustomError',
                    actionBlock: n,
                },
                4: {
                    id: -4,
                    key: 'NFErr_MC_NCCP_RegistrationRequired',
                    actionBlock: i,
                },
                5: {
                    id: -5,
                    key: 'NFErr_MC_NCCP_CTicketRenewalRequired',
                    actionBlock: i,
                },
                6: {
                    id: -6,
                    key: 'NFErr_MC_NCCP_MTicketRenewalRequired',
                    actionBlock: n,
                },
                7: {
                    id: -7,
                    key: 'NFErr_MC_NCCP_ImpossibleImpossibility',
                    actionBlock: n,
                },
                8: {
                    id: -8,
                    key: 'NFErr_MC_NCCP_GetNewCredentials',
                    actionBlock: r,
                },
                9: {
                    id: -9,
                    key: 'NFErr_MC_NCCP_UnsupportedVersion',
                    actionBlock: r,
                },
                10: {
                    id: -10,
                    key: 'NFErr_MC_NCCP_SecondaryCredentialsRenewalRequired',
                    actionBlock: {
                        ignoreIfPlaying: !0,
                        action: 'handleSecondaryCredentialsError',
                    },
                },
                11: {
                    id: -11,
                    key: 'NFErr_MC_NCCP_AbortPlayback',
                    actionBlock: e,
                },
                12: {
                    id: -12,
                    key: 'NFErr_MC_NCCP_StaleCredentials',
                    actionBlock: i,
                },
                13: {
                    id: -13,
                    key: 'NFErr_MC_NCCP_ResetRequired',
                    actionBlock: r,
                },
            },
            errors: {
                NFErr_InvalidStateTransition: s,
                NFErr_MalformedData: e,
                NFErr_MC_SubtitleFailure: {
                    action: 'handleSubtitleError',
                },
                NFErr_MC_ConnectionFailure: t,
                NFErr_MC_AuthFailure: e,
                NFErr_MC_InitStreamFailure: e,
                NFErr_MC_StreamSetIncomplete: e,
                NFErr_MC_OpenDeviceFailure: e,
                NFErr_MC_AcquireLicenseFailure: e,
                NFErr_MC_RefuseToPlayNonDrmed: e,
                NFErr_MC_DevicePlaybackError: e,
                NFErr_MC_DeviceDecryptionError: e,
                NFErr_MC_HttpServerError: e,
                NFErr_MC_HttpClientError: e,
                NFErr_MC_ContentNotAvailable: e,
                NFErr_MC_EncodingError: e,
                NFErr_MC_NCCP_RegistrationRequired: i,
                NFErr_NotAllowed: s,
            },
            videoErrors: {
                MEDIA_ERR_ABORTED: e,
                MEDIA_ERR_NETWORK: t,
                MEDIA_ERR_DECODE: e,
                MEDIA_ERR_SRC_NOT_SUPPORTED: e,
            },
            reasonCodes: {
                CONCURRENT_STREAM_LIMIT_REACHED: 102,
            },
            stackHandlingRules: {
                alwaysHandle: {
                    NFErr_NCCP_RegistrationRequired: {
                        priority: 1,
                        convertTo: 'NFErr_MC_NCCP_RegistrationRequired',
                    },
                },
                ignoreErrors: [/^NFErr_NCCP.*/],
            },
        };
    }(),
    function (e) {
        var t = new Rx.ReplaySubject();
        var i = function () {
            t.onNext(),
                t.onCompleted();
        };
        var n = document;
        n.readyState === 'complete' || n.readyState === 'loaded' || n.readyState === 'interactive' ? i() : document.addEventListener('DOMContentLoaded', function () {
            document.removeEventListener('DOMContentLoaded', arguments.callee, !1),
                i();
        }, !1),
            e.domLoaded = t;
    }(util),
    a.adapterAndDOMLoaded = s.adapterLoaded.zip(s.mediaAdapterLoaded, e).zip(util.domLoaded, e).replay().refCount();
var o = {};
util.extend(util.MessageBus.EVENTS, util.makeEnum('APP_STARTUP_SUCCESS', 'APP_STARTUP_ERROR', 'ADAPTER_READY')),
    util.predicates = {},
    util.predicates.isTrue = function (e) {
        return !0 === e;
    }
    ,
    util.math = {
        clamp(e, t, i) {
            return e < t ? t : e > i ? i : e;
        },
        nearestEven(e) {
            var t; var
                i = Math.ceil(e);
            return i % 2 == 0 ? t = i : (t = Math.floor(e)) % 2 == 1 && (t -= 1),
                t;
        },
        wrapBumper(e, t, i) {
            return e < t ? i : e > i ? t : e;
        },
        wrap(e, t, i) {
            return (e = (e - t) % (i - t + 1)) < 0 ? i + 1 + e : t + e;
        },
        segment(e, t, i) {
            var n = Math.floor(e / t);
            var r = n * t;
            return {
                index: n,
                from: r,
                to: Math.min(r + t, i) - 1,
            };
        },
    },
    util.DebugInfo = {
        _MAX_CODES: 5,
        _MAX_MSGS: 1,
        init() {
            var e; var t; var i; var n; var r; var s; var a = util.storage.getJSON(sessionStorage, 'DebugInfo'); var
                o = new util.LRUCache('DebugInfo', this._MAX_CODES);
            if (a && (e = a.messages,
                t = a.codes,
                i = a.codesInfo,
                t)) {
                for (r = 0,
                    s = t.length; r < s; r++) {
                    n = t[r],
                        o.put(n, i[n]);
                }
            }
            e || (e = []),
                this.messages = e,
                this._codesCache = o;
        },
        get lastMessage() {
            var e = this.messages;
            return e[e.length - 1];
        },
        get codes() {
            return this._codesCache.getKeys();
        },
        get codesInfo() {
            return this._codesCache.getAll();
        },
        getCodesSince(e) {
            var t; var i; var n; var r = this._codesCache; var s = r.getKeys(); var a = r.getAll(); var
                o = [];
            for (t = 0,
                i = s.length; t < i; t++) a[n = s[t]] >= e && o.push(n);
        },
        addMessage(e) {
            var t = this.messages;
            t.push(e);
            var i = t.length - this._MAX_MSGS;
            i > 0 && t.splice(0, i),
                this._store();
        },
        addCode(e) {
            this._codesCache.put(e, util.Date.now()),
                this._store();
        },
        removeCode(e) {
            this._codesCache.remove(e),
                this._store();
        },
        removeCodes() {
            this._codesCache.flush(),
                this._store();
        },
        _store() {
            util.storage.setJSON(sessionStorage, 'DebugInfo', {
                codes: this.codes,
                codesInfo: this.codesInfo,
                messages: this.messages,
            });
        },
    },
    util.DebugInfo.init();
var l; var
    u = util.CurrentUrlParams;
if ((l = u.get('dar')) != null) {
    switch (l) {
        case '4_3':
            config.viewport = {
                width: 640,
                height: 480,
            };
            break;
        default:
            config.viewport = {
                width: 1280,
                height: 720,
            };
    }
}
s.hasNrdp = Boolean(window.nrdp),
    config.viewport == null && (config.viewport = {
        width: s.hasNrdp && window.innerWidth ? window.innerWidth : 1280,
        height: s.hasNrdp && window.innerHeight ? window.innerHeight : 720,
    }),
    config.viewport.uiWidth = 1280,
    config.viewport.uiHeight = 720,
    state.raiseEvent = function (e) {
        var t = state.activeState;
        if (t) {
            return typeof e === 'string' && (e = {
                name: e,
            }),
                e.activeState = t,
                e.bubbling = !1,
                t.handleEvent(e, Array.slice(arguments, 1));
        }
    }
    ,
    state.raiseEvent.subscribe = function (e) {
        state.activeState = e,
            e.isRoot && (state.rootState = e);
    };
var c = {};
!function (e) {
    e.pruneMapValues = function e(t, i, n) {
        var r; var s; var a; var o; var l; var u; var c = Array.isArray(t); var
            d = Array.isArray(i);
        for (n = void 0 !== n && n,
            s = (r = c ? t : Object.keys(t)).length; s--;) {
            a = r[s],
                o = c ? a : t[a],
                l = d ? i.indexOf(o) >= 0 : o === i,
                u = n && typeof o === 'object',
                l ? c ? t.splice(s, 1) : delete t[a] : u && e(o, i, !0);
        }
        return t;
    };
}(typeof window !== 'undefined' ? util : exports),
    util.proxy = function (e, t) {
        return t || (t = this),
            function () {
                return e.apply(t, arguments);
            };
    }
    ,
    config.customerEvents = {
        enabled: util.CurrentUrlParams.get('ceBsEnabled') === 'true',
        beaconHost: config.environment.customer_events_host,
        apiPath: '/events',
        beaconPath: '/customerevents/users/customerevents',
        requestMethod: 'POST',
        errorConfig: {
            maxRetry: 0,
            updateApiEndpoint: !1,
            refreshAuth: !1,
        },
    },
    console.log('config.customerEvents', config.customerEvents),
    model.AppConfig.loaded.subscribe(function () {
        model.AppConfig.fromUser && (config.customerEvents.enabled = !0);
    }, e),
    model.AppConfig.loaded.subscribe(function () {
        var e; var t = r.ApiSession; var i = config.customerEvents; var n = i.enabled && i.beaconHost; var s = i.requestMethod; var
            a = i.errorConfig;
        e = n ? function (e, r, o) {
            t.resource({
                url: i.beaconPath,
                host: n,
                type: s,
                data: {
                    data: JSON.stringify(e),
                },
                success: r,
                error: o,
                errorConfig: a,
            });
        }
            : function (e, t, i) {
                t();
            }
            ,
            c.CustomerEventsRequest = e;
    }, e),
    c.CustomerEvents = {
        _START_TIME: util.Date.now(),
        _EVENT_QUEUE_MAX_LENGTH: 3,
        _eventQueue: [],
        _eventFnQueue: [],
        _timeout: null,
        types: {
            APP_START: 'HTML TV UI application start',
            APP_REFRESH: 'HTML TV UI Application Refresh',
            PLAY: 'HTML TV UI play',
            HOTKEY: 'HTML TV UI hotkey',
            INPUT_TYPE: 'HTML TV UI input type',
            SURVEY_COMPLETED: 'Completed Taste Survey (PS3)',
            RIGEL_SILENT_UPDATE_ERROR: 'Rigel Silent Update returned error or timed out',
            SEARCH_INTERACTION: 'HTML TV UI Search Interaction',
            PAYMENT_HOLD_MESSAGE: 'HTML TV UI Payment Hold Message',
            WIIU_PLAYBACK_OUTPUT_TARGET: 'Wii U Playback Output Target',
            WII_ODP_IMPRESSION: 'ODP Wii Impression',
            FORMER_MEMBER_OPEN_SITE: 'HTML TV UI PS3 Former Member Open Site',
            FORMER_MEMBER_CONTROL: 'HTML TV UI PS3 Former Member Control',
            FORMER_MEMBER_OPEN_SITE_OPEN_OVERLAY: 'HTML TV UI PS3 Former Open Site Open Overlay',
            FORMER_MEMBER_OPEN_SITE_OVERLAY_BUTTON: 'HTML TV UI PS3 Former Open Site Click Rejoin Button',
            AUDIO_SUBTITLES_SELECTION: 'Audio / Subtitle Interaction (PS3 PlayMode Lite Test)',
            PLAYBACK_EXIT: 'HTML TV UI Playback Exit',
            USER_PROFILES_GATE_SHOWN: 'HTML TV UI User Profiles Gate Shown',
            USER_PROFILES_SWITCH: 'HTML TV UI User Profiles Switched',
            USER_PROFILES_CREATED: 'HTML TV UI User Profiles Created',
        },
        logPlaybackExit(e) {
            this.log(this.types.PLAYBACK_EXIT, {
                Reason: e || 'unknown',
            });
        },
        logHotkey(e, t, i) {
            e && t && i ? this.log(this.types.HOTKEY, {
                Action: e,
                Key: t,
                KeyCode: i,
            }) : util.log.info(`CustomerEvents.logHotkey: Failed because of empty value: ${e}, ${t}, ${i}`);
        },
        logRx(t, i, n) {
            return Rx.Observable.create(function (r) {
                var s = function () {
                    r.onNext(),
                        r.onCompleted();
                };
                return c.CustomerEvents.log(t, i, {
                    onSuccess: s,
                    onError: s,
                }, n),
                    e;
            });
        },
        log(e, t, i, n) {
            var r; var a; var o; var l = state.Context; var u = s.Adapter.device; var c = this._eventQueue; var d = this._eventFnQueue; var h = this._timeout; var p = typeof e === 'number'; var f = util.CurrentUrlParams; var _ = f.get('playSourceType'); var v = util.pruneMapValues({
                EventName: p ? null : e,
                EventId: p ? e : null,
                Esn: u.ESN,
                EventTime: util.TimeService.now(),
                TrackId: l.trackId,
                data: util.extend({
                    Elapsed: util.Date.now() - this._START_TIME,
                    UIBuild: u.getUIVersion(),
                    UIContext: l.uiContext,
                    UIContextPath: l.uiContextPath,
                    CadmiumBuild: s.Adapter.device.softwareVersion,
                }, l.uiContextData, t),
            }, [null, void 0, '']); var m = typeof window !== 'undefined' && (window.nrdp && nrdp.log) && v.EventName === this.types.PLAY; var
                b = this._nccpPlayEventProps;
            m ? (r = {},
                a = v.data,
                Object.keys(b).forEach(function (e) {
                    r[b[e]] = a[e];
                }),
                _ && (r.source_type = _,
                    f.remove('playSourceType')),
                o = JSON.stringify(r),
                nrdp.log.info(o, null, 'uiplaycontext'),
                i && this._onPostResponse('onSuccess', [i])) : (util.log.info(`CustomerEvents.log: ${util.describeObject(v)}`),
                    c.push(v),
                    i && d.push(i),
                    c.length >= this._EVENT_QUEUE_MAX_LENGTH || n ? this._postEvents() : h.active || h.run());
        },
        _nccpPlayEventProps: util.makeMap('ApiRequestId', 'request_id', 'XID', 'xid', 'ListIndex', 'row', 'MovieIndex', 'rank', 'UIContextPath', 'location', 'mdxesn', 'mdxesn', 'origin', 'origin', 'isMdxPlay', 'isMdxPlay', 'isDevice3dEnabled', 'isDevice3dEnabled', 'isUser3dEnabled', 'isUser3dEnabled', 'fastStartData', 'fastStartData'),
        _onTimeout() {
            this._postEvents();
        },
        _onPostResponse(e, t) {
            var i; var n; var r; let
                s;
            for (i = 0,
                n = t.length; i < n; i++) (r = t[i]) && (s = r[e]) && s();
        },
        _postEvents() {
            var e = this._postFunction;
            var t = this._eventQueue.splice(0);
            var i = this._eventFnQueue.splice(0);
            this._timeout.clear(),
                t.length && (e = e || (this._postFunction = c.CustomerEventsRequest))(t, this._onPostResponse.bind(this, 'onSuccess', i), this._onPostResponse.bind(this, 'onError', i));
        },
    },
    c.CustomerEvents._timeout = new util.Timeout(c.CustomerEvents._onTimeout, 2e3, c.CustomerEvents),
    c.PlayCustomerEvent = {
        _EVENT_TYPE: c.CustomerEvents.types.PLAY,
        _xid: null,
        _playbackType: null,
        log(e, t, i, n) {
            if (e && (i !== this._xid || t !== this._playbackType)) {
                var r = state.Context;
                var a = r.listIndices;
                var o = {
                    MovieId: e,
                    PlaybackType: t,
                    PlaybackOriginator: s.Adapter.convertPlaybackTypeToOriginator(t),
                    ListIndex: r.listIndex,
                    ListDepth: a.length,
                    ListIndices: a.join(','),
                    MovieIndex: r.movieIndex,
                    ApiRequestId: r.apiRequestId,
                    XID: i,
                };
                var l = r.playData;
                l && util.extend(o, l),
                    n && util.extend(o, n),
                    this._xid = i,
                    this._playbackType = t,
                    c.CustomerEvents.log(this._EVENT_TYPE, o);
            }
        },
    },
    util.BatchedValueObservable = util.Observable.extend({
        init() {
            this._propertyValues = {},
                this._curUpdate = 1,
                this._updatedAt = {},
                this._watchedProperties = [],
                this._observerUpdatedAt = {};
        },
        _observableSubscribe: util.Observable.prototype.subscribe,
        addWatchedProperty(e, t) {
            var i = this._watchedProperties;
            i.indexOf(e) >= 0 || (this._propertyValues[e] = t,
                this.__defineGetter__(e, function () {
                    return this._propertyValues[e];
                }),
                this.__defineSetter__(e, function (t) {
                    this._updateValue(e, t);
                }),
                i.push(e));
        },
        removeWatchedProperty(e) {
            var t; var
                i = this._watchedProperties;
            (t = i.indexOf(e)) < 0 || (i.splice(t, 1),
                delete this[e]);
        },
        unsubscribe: function e(t) {
            t.uuid && delete this._updatedAt[t.uuid],
                e.base.apply(this, arguments);
        },
        subscribe(e, t) {
            this._observableSubscribe.apply(this, arguments),
                this._observerUpdatedAt[e.uuid] = this._curUpdate;
        },
        subscribeAndNotify(e, t) {
            this._observableSubscribe.apply(this, arguments),
                this._observerUpdatedAt[e.uuid] = 0,
                this._queueNotification();
        },
        _updateValue(e, t) {
            this._updatedValues;
            var i = this._updatedAt;
            this._queueNotification(),
                i[e] = this._curUpdate,
                this._propertyValues[e] = t;
        },
        _queueNotification() {
            this._curTimeout || (this._curUpdate++,
                this._curTimeout = setTimeout(this._notifyUpdates.bind(this), 50));
        },
        _getUpdatedSince(e) {
            var t; var i; var n; var r = {}; var s = []; var a = this._updatedAt; var o = this._propertyValues; var
                l = this._watchedProperties;
            for (i = 0,
                n = l.length; i < n; i++) {
                a[t = l[i]] > e && (s.push(t),
                    r[t] = o[t]);
            }
            return {
                values: r,
                properties: s,
            };
        },
        _doNotify() {
            var e; var t; var i; var n; var r = this._curUpdate; var s = this._observers; var a = []; var
                o = this._observerUpdatedAt;
            for (i in s) {
                n = s[i],
                    (t = a[e = o[i] || 0] || (a[e] = this._getUpdatedSince(e))).properties.length != 0 && (o[i] = r,
                        typeof n === 'function' ? n.call(n, t) : n instanceof Array ? n[1].call(n[0], t) : n.update.call(n, t));
            }
        },
        _notifyUpdates() {
            delete this._curTimeout,
                this.notify();
        },
    }),
    o.MediaConfig = util.BatchedValueObservable.extend({
        _OPTIONS_DEFINITION: [{
            name: 'viewableId',
            required: !0,
            changesPlayback: !0,
        }, {
            name: 'qcPackageId',
            changesPlayback: !0,
        }, {
            name: 'qcVideoProfiles',
            changePlayback: !0,
        }, {
            name: 'trackingId',
            required: !0,
            defaultValue: 0,
            changesPlayback: !0,
        }, {
            name: 'authParams',
            defaultValue: {},
        }, {
            name: 'licenseParams',
            defaultValue: {},
        }, {
            name: 'enable3D',
            defaultValue: !1,
            changesPlayback: !0,
        }, {
            name: 'playbackType',
            writable: !0,
            defaultValue: s.Adapter.STANDARD_PLAYBACK,
        }, {
            name: 'audioTrack',
            writable: !0,
        }, {
            name: 'timedTextTrack',
            writable: !0,
        }, {
            name: 'trackSelector',
        }, {
            name: 'playData',
        }, {
            name: 'playContext',
        }, {
            name: 'expectedDuration',
        }, {
            name: 'uiPlayStartTime',
        }, {
            name: 'uiLabel',
        }, {
            name: 'vuiCommand',
        }],
        init: function e(t) {
            e.base.call(this),
                t ? this._processOptions(t) : util.log.fatal('Media Config missing options.');
        },
        comparePlayback(e) {
            var t; var i; var n; var r = this._OPTIONS_DEFINITION; var s = r.length; let
                a = !0;
            if (!e) return !1;
            for (t = 0; t < s; t++) {
                n = (i = r[t]).name,
                    i.changesPlayback && (a = a && this[n] === e[n]);
            }
            return a;
        },
        _processOptions(e) {
            var t; var i; var n; var r; var s = this._OPTIONS_DEFINITION; var
                a = s.length;
            for (t = 0; t < a; t++) {
                (r = e[n = (i = s[t]).name]) !== null && void 0 !== r || (i.required && util.log.fatal(`ERROR: Missing required playback parameter: ${n}`),
                    r = i.defaultValue),
                    i.writable ? this.addWatchedProperty(n, r) : Object.defineProperty(this, n, {
                        value: r,
                    });
            }
        },
    }),
    o.PlayerClass = util.Class.create({
        FULL_SCREEN_LAYOUT: {
            name: 'FULL_SCREEN',
            left: 0,
            top: 0,
            width: 0,
            height: 0,
            z: 'sendToBack',
        },
        _CURRENT_TIME_METADATA_KEY: 'currentTime',
        _AUDIO_SUBTITLES_METADATA_KEY: 'audioAndSubtitles',
        init(e) {
            this._pendingLoadedMetadata = {},
                this._mediaConfigUpdatedBound = this._mediaConfigUpdated.bind(this),
                this._handleWindowUnloadBound = this._handleWindowUnload.bind(this),
                this._configPlaybackErrors = e,
                this._currentLayout = this.FULL_SCREEN_LAYOUT,
                this.adapterAttached = new Rx.ReplaySubject(),
                this._addObservableValues(),
                this._initErrorActionHandlers(),
                this._pauseTimeout = new util.Timeout(function () {
                    this._pauseTimedOut = !0,
                        this.stop();
                }
                    .bind(this), config.playback.pauseTimeoutMs);
        },
        attachAdapter(e) {
            var t; let
                i;
            e && (t = this._media = e.media,
                this._adapter = e,
                this._playbackStateManager = i = e.playbackStateManager,
                this._subtitleEngineAdapter = e.subtitleEngineAdapter,
                i.isInPlayback && i.close(),
                this._attachedPlaybackStateHandlers = [],
                this._attachedHandlers = [],
                this._attachedSubtitleEventHandlers = [],
                this._attachHandlers(t, this._handlers, this._attachedHandlers),
                this._attachHandlers(i, this._playbackStateHandlers, this._attachedPlaybackStateHandlers),
                this._attachHandlers(this._subtitleEngineAdapter, this._subtitleEventHandlers, this._attachedSubtitleEventHandlers),
                this._initErrorMaps(),
                this._playbackTypes = {
                    STANDARD_PLAYBACK: t.STANDARD_PLAYBACK,
                    BROWSE_PLAYBACK: t.BROWSE_PLAYBACK,
                },
                window.addEventListener('beforeunload', this._handleWindowUnloadBound, !1),
                this._logBufferPoolSize()),
                this.adapterAttached.onNext(this),
                this.adapterAttached.onCompleted();
        },
        _handleWindowUnload() {
            this._endPlayback();
        },
        setMovieAndPlay(e, t) {
            var i = this._playbackStateManager;
            var n = this._media;
            var r = this._mediaConfig;
            var s = this;
            var a = this.playbackStates;
            var o = this.playbackState;
            if (this._initialStartTime = t,
                this._subtitleEngineAdapter.reset(),
                n != null) {
                return e ? void (r !== e && (e.comparePlayback(r) ? (this._attachMediaConfig(e),
                    this.setCurrentTime(t),
                    this.play()) : this._stop(this.playbackStates.LOADING_METADATA, function () {
                        i.open(e, 1e3 * t),
                            s._attachMediaConfig(e),
                            s.play(),
                            o.set(a.EMPTY);
                    }))) : (util.log.error('PlayerClass: ERROR: Player did not receive a media configuration to start playback.'),
                        void this._stop(this.playbackStates.NO_SOURCE));
            }
        },
        restartPlayback() {
            var e = this;
            var t = this._mediaConfig;
            var i = this._playbackStateManager.currentTime / 1e3;
            this._restartingPlayback = !0,
                this._stop(this.playbackStates.STOPPED, function () {
                    util.ExecutionDeferrer.add(function () {
                        e.setMovieAndPlay(t, i);
                    });
                });
        },
        stop(e) {
            this._restartingPlayback = !1,
                this._stop(this.playbackStates.STOPPED, e);
        },
        _stop(e, t) {
            var i = !1;
            var n = function () {
                i && this.paused.unsubscribe(n),
                    this._endPlayback(e || this.playbackStates.STOPPED),
                    t && t(),
                    this.progress.set(0);
            }
                .bind(this);
            var r = this._mediaConfig;
            r && r.viewableId;
            delete this._playPending,
                this._endPlaybackPending || (this.isPlaying && e !== this.playbackStates.ERROR ? (i = !0,
                    this.paused.subscribe(n),
                    this.playbackState.set(this.playbackStates.ENDING),
                    this._pausingForStop = !0,
                    this._playbackStateManager.pause(),
                    this._endPlaybackPending = !0) : n());
        },
        play() {
            var e = this._playbackStateManager;
            this.hasLoadedMetadata ? (this.playbackState.set(this.playbackStates.PLAYREQUESTED),
                e.play()) : this._playPending = !0;
        },
        pause(e) {
            var t = this._playbackStateManager;
            var i = this.playbackStates;
            var n = this.playbackState;
            (e || n.value === i.PLAYING) && (n.set(i.PAUSEPENDING),
                this._pausingForStop = !1,
                t.pause());
        },
        unpause() {
            this.isPaused && this.play();
        },
        togglePause() {
            this.playbackState.value === this.playbackStates.PLAYING ? this.pause() : this.unpause();
        },
        setCurrentTime(e) {
            var t = this._playbackStateManager;
            var i = 1e3 * e;
            var n = this._media.duration;
            var r = this;
            this._setPendingMetadata(this._CURRENT_TIME_METADATA_KEY, function () {
                return r.hasLoadedMetadata ? t.currentTime = Math.max(0, Math.min(n, i)) : t.currentTime = Math.max(0, i),
                    !0;
            });
        },
        skipPlayback(e) {
            var t = this._playbackStateManager;
            t.swimming ? (t.pause(),
                this.skipPlaybackFailed.notify()) : t.skipPlayback(1e3 * e);
        },
        _endPlayback(e) {
            var t = this._mediaConfig;
            var i = this._playbackStateManager;
            var n = (this._media,
                t && t.viewableId);
            var r = i ? i.currentTime : 0;
            this._pauseTimeout.clear(),
                this.hasStartedPlaying.set(!1),
                t && this.playbackEnded.notify({
                    movieId: n,
                    trackId: t.trackingId,
                    currentTime: r / 1e3,
                    playbackType: t.playbackType,
                    targetState: e,
                    error: this._endPlaybackError,
                    pauseTimedOut: this._pauseTimedOut,
                    restartingPlayback: this._restartingPlayback,
                }),
                i.hasSomethingToPlayback && (this._pendingLoadedMetadata = {},
                    this._endPlaybackPending = !1,
                    this._endPlaybackError = null,
                    this._pauseTimedOut = !1,
                    this.setLayout(this.FULL_SCREEN_LAYOUT),
                    this._pendingLayout = null,
                    this._subtitleEngineAdapter.reset(),
                    i.close(),
                    this._detachMediaConfig(),
                    this.playbackState.set(e || this.playbackStates.NO_SOURCE));
        },
        _attemptToSetAudioSubtitleSettings(e) {
            var t; var i; var n; var r; var s = this._mediaConfig; var a = this._media; var o = this.audioTrackList; var l = this.subtitleTrackList; var
                u = a.currentAudioTrack;
            return !(!a || !s) && (!(!e && this._restartingPlayback) && (u >= 0 && (t = o[u]),
                n = (i = s.trackSelector.selectMatchingNccpTracks(s.audioTrack, s.timedTextTrack, o, l)).audio,
                r = i.subtitles,
                e || this._allowOnTheFlyTrackChange(n, t) ? (a.setAudioSubtitleTracks(n, r),
                    n !== null && r !== null) : (this.restartPlayback(),
                        !0)));
        },
        setAudioSubtitleSettings(e, t) {
            return this._media.setAudioSubtitleTracks({
                id: e,
            }, {
                id: t,
            });
        },
        _allowOnTheFlyTrackChange(e, t) {
            return !e || !t || (e.rawTrack === t || !!this._adapter.device.capability.supportOnTheFlyAudioSwitch && t.channels === e.rawTrack.channels);
        },
        _mediaConfigUpdated(t) {
            var i = this._media;
            var n = t.values;
            var r = this;
            var s = this._playbackTypes;
            i && ((n.hasOwnProperty('audioTrack') || n.hasOwnProperty('timedTextTrack')) && this._setPendingMetadata(this._AUDIO_SUBTITLES_METADATA_KEY, function () {
                return r._attemptToSetAudioSubtitleSettings();
            }),
                n.hasOwnProperty('playbackType') && (this._previousPlaybackType === s.BROWSE_PLAYBACK && n.playbackType === s.STANDARD_PLAYBACK && this.hasStartedPlaying.changes.where(util.predicates.isTrue).take(1).subscribe(function () {
                    r._logPlayEvent(),
                        i.transitionPlaybackType();
                }, e, e),
                    this._previousPlaybackType = n.playbackType));
        },
        _attachMediaConfig(e) {
            var t = this._mediaConfig;
            if (t) {
                if (t === e) return !1;
                this._detachMediaConfig(t);
            }
            return this._mediaConfig = e,
                this._currentStreamInfo = null,
                this._currentBitRateEvent = null,
                e && (this._pendingLoadedMetadata = {},
                    e.subscribe(this._mediaConfigUpdatedBound)),
                !0;
        },
        _detachMediaConfig() {
            var e = this._mediaConfig;
            return !!e && (e.unsubscribe(this._mediaConfigUpdatedBound),
                delete this._mediaConfig,
                delete this._previousPlaybackType,
                !0);
        },
        setLayout(e) {
            e !== this._pendingLayout && e !== this._currentLayout && (this._pendingLayout = e,
                this._currentStreamInfo && this._applyPendingLayout());
        },
        _applyPendingLayout() {
            var e; var t; var i; var n; var r; var s; var a = this._pendingLayout; var o = this._media; var l = a && a.z; var u = config.viewport; var c = window && window.nrdp && nrdp.device && nrdp.device.videoOutput; var d = 1; var h = 1; var p = this._adapter.device.skipPlayerLayoutScaling; var
                f = this._currentStreamInfo;
            a && (a.height === 'auto' && f ? (t = f.frameWidth / f.frameHeight,
                e = Math.ceil(a.width / t)) : e = a.height,
                !p && c && (d = c.width / u.uiWidth,
                    h = c.height / u.uiHeight),
                i = util.math.nearestEven(a.left * d),
                n = Math.round(a.top * h),
                r = util.math.nearestEven(a.width * d),
                s = Math.round(e * h),
                o.setVideoWindow(i, n, r, s, 0),
                l && o[l] && o[l](),
                this._currentLayout = a);
        },
        get currentLayout() {
            return this._currentLayout;
        },
        get _TEXT() {
            return config.text.playback;
        },
        get isAdapterAttached() {
            return !!this._adapter;
        },
        get isPaused() {
            var e = this._playbackStateManager;
            return e && this.isVideoValid ? e.paused : null;
        },
        get currentTime() {
            var e = this._playbackStateManager;
            return e && this.isVideoValid ? e.currentTime / 1e3 : null;
        },
        get duration() {
            var e; var t = this._media; var
                i = this._mediaConfig && this._mediaConfig.expectedDuration;
            return this.isVideoValid && t && t.duration ? (e = t.duration / 1e3,
                Math.abs(120 - e) < 2 && i && i - e > 60 ? i : e) : 0;
        },
        get isSeeking() {
            var e = this._playbackStateManager;
            return this.isVideoValid && e.seeking;
        },
        get targetBitRate() {
            var e = this._currentStreamInfo;
            return e ? e.bitsPerSecond : 0;
        },
        get instantBitRate() {
            var e = this._currentBitRateEvent;
            return e ? e.bitsPerSecond : 0;
        },
        get isHighDefinition() {
            var e = this._currentStreamInfo;
            return !!e && e.isHighDefinition;
        },
        get isSuperHighDefinition() {
            var e = this._currentStreamInfo;
            return !!e && e.isSuperHighDefinition;
        },
        get videoWidth() {
            var e = this._currentStreamInfo;
            return e ? e.frameWidth : 0;
        },
        get videoHeight() {
            var e = this._currentStreamInfo;
            return e ? e.frameHeight : 0;
        },
        get supported() {
            return !!this._media;
        },
        get playbackType() {
            var e = this._mediaConfig;
            return e && e.playbackType;
        },
        requestBufferRange() {
            this._media.getBufferRange();
        },
        get hasLoadedMetadata() {
            var e = this._playbackStateManager;
            return this.isVideoValid && e.hasMetadata;
        },
        get isVideoValid() {
            var e = this._playbackStateManager;
            return !!e && e.hasSomethingToPlayback && !this._endPlaybackPending;
        },
        get isPlaying() {
            var e = this._playbackStateManager;
            return e && e.isPlaying;
        },
        get isLoading() {
            var e = this._playbackStateManager;
            return e && e.isLoading;
        },
        get isStopped() {
            var e = this._playbackStateManager;
            return !e || !this.isPlaying && !e.hasSomethingToPlayback;
        },
        set overrideNativeSubtitles(e) {
            var t = this._media;
            t && (t.overrideNativeSubtitles = e);
        },
        get subtitleTrackList() {
            var e = this._media;
            var t = e && e.subtitleTrackList;
            return t && t.length && t.length > 0 && (t = Array.prototype.slice.call(t)),
                t;
        },
        get timedTextTrackList() {
            var e = this._media;
            var t = [];
            return e && e.timedTextTrackList && (t = e.timedTextTrackList),
                t.length && t.length > 0 && (t = Array.prototype.slice.call(t)),
                t;
        },
        get audioTrackList() {
            var e = this._media;
            var t = e && e.audioTrackList;
            return t && t.length && t.length > 0 && (t = Array.prototype.slice.call(t)),
                t;
        },
        get currentAudioTrack() {
            var e = this._media;
            return this.audioTrackList[e.currentAudioTrack];
        },
        get currentSubtitleTrack() {
            var e = this._media;
            return this.subtitleTrackList[e.currentSubtitleTrack];
        },
        get currentTimedTextTrack() {
            var e = this._media;
            if (e) { return this.timedTextTrackList[e.currentTimedTextTrackIndex]; }
        },
        get isPreleaseContent() {
            return !!this._media.isPreleaseContent;
        },
        get preReleaseWatermarkInfo() {
            return this.isPreleaseContent ? this._media.prereleaseWatermarkInfo : null;
        },
        _addObservableValues() {
            var e = util.ObservableValue;
            this.hasStartedPlaying = new e(!1),
                this.playbackState = new e(this.playbackStates.EMPTY),
                this.progress = new e(0);
        },
        _playbackStateHandlers: {
            progress(e) {
                this.progress.set(e.loaded / e.total),
                    this.progressChanged.notify.apply(this.progressChanged, arguments);
            },
            loadedmetadata(e) {
                var t = this;
                var i = e && e.rawEvent && e.rawEvent.playing;
                this.playbackState.set(this.playbackStates.BUFFERING),
                    i || (this._setPendingMetadata(this._AUDIO_SUBTITLES_METADATA_KEY, function () {
                        return t._attemptToSetAudioSubtitleSettings(!0);
                    }),
                        this.setCurrentTime(this._initialStartTime)),
                    this._applyPendingMetadata(),
                    this._playPending && !i && (this.play(),
                        delete this._playPending),
                    this._logPlayEvent(),
                    this.loadedMetadata.notify.apply(this.loadedMetadata, arguments);
            },
            stalled() {
                this.playbackState.set(this.playbackStates.REBUFFERING),
                    this.stalled.notify.apply(this.stalled, arguments);
            },
            play() {
                this.attemptingStreamDownload.notify.apply(this.attemptingStreamDownload, arguments);
            },
            playing(e) {
                this._restartingPlayback = !1,
                    this.hasStartedPlaying.set(!0),
                    this._pauseTimeout.clear(),
                    this.playbackState.set(this.playbackStates.PLAYING),
                    this.playbackStarted.notify(e);
            },
            pause(e) {
                this._pausingForStop && (e.pausingForStop = !0,
                    this._pausingForStop = !1),
                    this.playbackState.set(this.playbackStates.PAUSED),
                    this._pauseTimeout.run(),
                    this.paused.notify(e);
            },
            ended() {
                this._endPlayback(this.playbackStates.ENDED);
            },
            seeking() {
                this.playbackState.set(this.playbackStates.SEEKING),
                    this.seeking.notify.apply(this.seeking, arguments);
            },
            buffering() {
                this.buffering.notify.apply(this.buffering, arguments);
            },
            rebuffering() {
                this.rebuffering.notify.apply(this.rebuffering, arguments);
            },
            swimfail() {
                this.skipPlaybackFailed.notify.apply(this.skipPlaybackFailed, arguments);
            },
            playbackStateError(e) {
                var t; var
                    i = e.nfErr;
                t = {
                    id: i,
                    key: 'NFErr_MalformedData',
                    actionBlock: this._configPlaybackErrors.errors.NFErr_MalformedData,
                },
                    util.log.error({
                        name: 'PlayerClass',
                        desc: 'playback state generated error',
                        nfErr: i,
                        nfErrKey: 'NFErr_MalformedData',
                        rawError: e,
                    }),
                    this._handleErrorAction(t, e);
            },
        },
        _subtitleEventHandlers: {
            showsubtitle(e) {
                this.showsubtitle.notify(e);
            },
            removesubtitle(e) {
                this.removesubtitle.notify(e);
            },
        },
        _handlers: {
            updatepts(e) {
                this.updatepts.notify.apply(this.updatepts, arguments);
            },
            swim(e) {
                this.swim.notify.apply(this.swim, arguments);
            },
            audiotrackchanged(e) {
                var t;
                t = util.extend({
                    audioTrackInfo: this.audioTrackList[e.trackIndex],
                }, e),
                    this.audioTrackChanged.notify(t);
            },
            restartPlayback() {
                this.restartPlayback();
            },
            subtitletrackchanged(e) {
                var t;
                t = util.extend({
                    timedTextTrackInfo: this.subtitleTrackList[e.trackIndex],
                }, e),
                    this.subtitletrackchanged.notify(t);
            },
            bufferrange() {
                this.bufferRange.notify.apply(this.bufferRange, arguments);
            },
            updatevideobitrate(e) {
                this._currentBitRateEvent = e;
            },
            streamselected(e) {
                var t = e.streamInfo;
                t.streamType === this._media.VIDEO_STREAM && (this._currentStreamInfo = t,
                    this.streamSelected.notify.apply(this.streamSelected, arguments));
            },
            newstream(e) {
                var t = e.streamInfo;
                t.streamType === this._media.VIDEO_STREAM && (this._currentStreamInfo = t,
                    this._pendingLayout && this._applyPendingLayout(),
                    this.newStream.notify.apply(this.newStream, arguments));
            },
            error(e) {
                var t = this._identifyError(e);
                var i = t && t.key;
                var n = t && t.id;
                var r = !1;
                this._playbackStateManager.hasSomethingToPlayback && (t && (util.log.error({
                    name: 'PlayerClass',
                    desc: `Media Error: ${e.message}`,
                    nfErr: n,
                    nfErrKey: i,
                    rawError: e,
                }),
                    t && (t.type = 'error'),
                    r = this._handleErrorAction(t, e)),
                    r || (util.log.error({
                        name: 'PlayerClass',
                        desc: 'onerror: No error code found. Using default error handler.',
                    }),
                        this._nonNetworkPlaybackError()));
            },
            nccperror(e) {
                var t = this._playbackStateManager;
                var i = this._configPlaybackErrors.actionIds[e.actionId];
                var n = i && i.key;
                var r = i && i.id;
                var s = !1;
                t.hasSomethingToPlayback && (i && (util.log.error({
                    name: 'PlayerClass',
                    desc: `NCCP Error: ${e.message}`,
                    nfErr: r,
                    nfErrKey: n,
                    rawError: e,
                }),
                    i && (i.type = 'nccperror'),
                    s = this._handleErrorAction(i, e)),
                    s || util.log.error('PlayerClass: Received unknown action id error. Doing nothing.'));
            },
            exception(e) {
                var t = {
                    id: -100,
                    key: 'exception',
                    type: 'exception',
                    actionBlock: this._configPlaybackErrors.exception,
                };
                util.log.error({
                    name: 'PlayerClass',
                    desc: `Media Exception: ${e.exception}`,
                    nfErr: t.id,
                    nfErrKey: t.key,
                    rawError: e,
                }),
                    this._handleErrorAction(t, e);
            },
            warning(e) {
                util.log.warn({
                    name: 'PlayerClass',
                    message: 'Received warning from nrdp',
                    error: e.error,
                    rawError: e,
                });
            },
            manifestselected() {
                this._applyPendingMetadata(),
                    this.manifestSelected.notify.apply(this.manifestSelected, arguments);
            },
        },
        _attachHandlers(e, t, i) {
            var n; let
                r;
            for (r in t) {
                t.hasOwnProperty(r) && (n = t[r].bind(this),
                    i.push({
                        eventName: r,
                        handler: n,
                    }),
                    e.addEventListener(r, n));
            }
        },
        _logPlayEvent() {
            var e = this._mediaConfig;
            e && c.PlayCustomerEvent.log(e.viewableId, e.playbackType, this._media.xid, e.playData);
        },
        _initErrorActionHandlers() {
            this._errorActions = Object.keys(this._configPlaybackErrors.actionTypes).map((e) => this._configPlaybackErrors.actionTypes[e]).reduce((e, t) => {
                if (t && typeof t === 'string') {
                    var i = this[`_${t}`];
                    typeof i === 'function' && (e[t] = i);
                }
                return e;
            },
                {});
        },
        _initErrorMaps() {
            var e; var t; var i = this._media.errorCodes; var
                n = this._configPlaybackErrors;
            for (e in t = {},
                n.errors) t[i[e]] = e;
            this._nfErrorValueToKey = t;
        },
        _stackContainsIgnorableError(e) {
            var t = this._configPlaybackErrors.stackHandlingRules;
            var i = t.ignoreErrors;
            var n = Object.keys(t.alwaysHandle);
            return i.forEach(function (t) {
                if (e.some(function (e, i, r) {
                    var s = e.errorcode;
                    return n.indexOf(s) < 0 && s.match(t) !== null;
                })) return !0;
            }),
                !1;
        },
        _shouldIgnoreError(e, t) {
            var i = e && e.actionBlock;
            var n = e && e.key;
            var r = e && e.type;
            var s = t && t.stack;
            var a = t && t.transaction;
            var o = this._playbackStateManager;
            if (r === 'error') {
                if (n === 'NFErr_MC_AuthFailureNCCP' || n === 'NFErr_MC_AcquireLicenseFailureNCCP') return !0;
                if (s && this._stackContainsIgnorableError(s)) return !0;
            } else if (r === 'nccperror') {
                if (t.actionId === 1 && o.ignoreActionId1) return !0;
                if (a) return a === 'heartbeat';
            }
            return !!(i && i.ignoreIfPlaying && this.hasStartedPlaying.value) || !(!i || !i.alwaysIgnore);
        },
        _handleErrorAction(e, t) {
            var i = e && e.key;
            var n = e && e.id;
            var r = e && e.actionBlock;
            var s = r && this._errorActions[r.action];
            var a = i && config.debugCodes.player[i];
            var o = t && t.cadmiumError && t.cadmiumError.display.code;
            return a && util.DebugInfo.addCode(a),
                o && util.DebugInfo.addCode(o),
                this._shouldIgnoreError(e, t) ? (util.log.warn({
                    name: 'PlayerClass',
                    desc: `Error ${i} ignored`,
                    code: n,
                    ignored: !0,
                    rawError: t,
                }),
                    !0) : !!s && (s.call(this, e, t),
                        !0);
        },
        _getErrorKeyFromStack(e) {
            var t; var i; var n; var r; var
                s = this._configPlaybackErrors.stackHandlingRules.alwaysHandle;
            return e.forEach(function (e) {
                t = e.errorcode,
                    r = s[t] || {
                        priority: 0,
                    },
                    (!n || r.priority >= n.priority) && (i = t,
                        n = r);
            }),
                n && n.convertTo ? n.convertTo : i;
        },
        _identifyError(e) {
            var t; var i; var n = e && e.error; var r = e && e.stack; var
                s = this._configPlaybackErrors;
            return (t = r ? this._getErrorKeyFromStack(r) : this._nfErrorValueToKey[n]) && (i = {
                id: n,
                key: t,
                actionBlock: s.errors[t],
            }),
                i;
        },
        _nonNetworkPlaybackError(e, t) {
            var i = t && t.message || this._TEXT.nonNetworkError;
            util.log.fatal({
                name: 'PlayerClass',
                desc: `_handleNonNetworkPlaybackError: ${i}`,
                code: e && e.id,
            }),
                this._endPlaybackWithError(i, e, t);
        },
        _handleSubtitleError(e, t) {
            util.log.error({
                name: 'PlayerClass',
                internalErrorMessage: `_handleSubtitleError: ${t.message}`,
                code: e && e.id,
            });
        },
        _handleConnectionError(e, t) {
            var i = t && t.message || this._TEXT.connectionError;
            util.log.fatal({
                name: 'PlayerClass',
                desc: `_handleConnectionError: ${i}`,
                code: e && e.id,
            }),
                this._endPlaybackWithError(i, e, t);
        },
        _notifyGenericErrorAndCallback(e, t) {
            var i = t && t.message;
            util.log.error({
                name: 'PlayerClass',
                desc: `_notifyGenericErrorAndCallback: ${i}`,
                code: e && e.id,
            }),
                this.genericError.notify({
                    desc: e && e.key,
                    userMessage: i,
                    callback: this._handleGenericErrorCallback,
                    scope: this,
                    event: t,
                });
        },
        _notifyGenericError(e, t) {
            var i = t && t.message;
            util.log.fatal({
                name: 'PlayerClass',
                desc: `_notifyGenericError: ${i}`,
            }),
                this._endPlayback(this.playbackStates.ERROR),
                this.genericError.notify({
                    desc: e && e.key,
                    userMessage: i,
                    event: t,
                });
        },
        _handleSecondaryCredentialsError(e, t) {
            var i = t && t.message || this._TEXT.secondaryCredentialsError;
            util.log.fatal({
                name: 'PlayerClass',
                desc: `_handleSecondaryCredentialsError: ${i}`,
                code: e && e.id,
            }),
                this._endPlaybackWithError(i, e, t);
        },
        _handleGenericErrorCallback(e) {
            if (e) this._nonNetworkPlaybackError();
            else {
                var t = this;
                var i = this._mediaConfig;
                this._stop(this.playbackStates.LOADING_METADATA, function () {
                    t.setMovieAndPlay(i, this._initialStartTime);
                });
            }
        },
        _buildErrorInfoString(e, t) {
            return [t && (t.key || t.id), e].join(' / ');
        },
        _endPlaybackWithError(e, t, i) {
            this._restartingPlayback = !1,
                this._endPlaybackError = {
                    info: t,
                    event: i,
                    userMessage: e,
                    errorInformation: this._buildErrorInfoString(e, t),
                },
                this._stop(this.playbackStates.ERROR);
        },
        get playbackEnded() {
            return this._getGenerateEvent('playbackEnded', !0);
        },
        get loadedMetadata() {
            return this._getGenerateEvent('loadedMetadata', !1);
        },
        get manifestSelected() {
            return this._getGenerateEvent('manifestSelected', !1);
        },
        get progressChanged() {
            return this._getGenerateEvent('progressChanged', !1);
        },
        get attemptingStreamDownload() {
            return this._getGenerateEvent('attemptingStreamDownload', !1);
        },
        get playbackStarted() {
            return this._getGenerateEvent('playbackStarted', !1);
        },
        get updatepts() {
            return this._getGenerateEvent('updatepts', !1);
        },
        get swim() {
            return this._getGenerateEvent('swim', !1);
        },
        get paused() {
            return this._getGenerateEvent('paused', !1);
        },
        get seeking() {
            return this._getGenerateEvent('seeking', !1);
        },
        get seeked() {
            return this._getGenerateEvent('seeked', !1);
        },
        get showsubtitle() {
            return this._getGenerateEvent('showsubtitle', !1);
        },
        get removesubtitle() {
            return this._getGenerateEvent('removesubtitle', !1);
        },
        get subtitletrackchanged() {
            return this._getGenerateEvent('subtitletrackchanged', !1);
        },
        get audioTrackChanged() {
            return this._getGenerateEvent('audioTrackChanged', !1);
        },
        get bufferRange() {
            return this._getGenerateEvent('bufferRange', !1);
        },
        get stalled() {
            return this._getGenerateEvent('stalled', !1);
        },
        get buffering() {
            return this._getGenerateEvent('buffering', !1);
        },
        get rebuffering() {
            return this._getGenerateEvent('rebuffering', !1);
        },
        get skipPlaybackFailed() {
            return this._getGenerateEvent('skipPlaybackFailed', !1);
        },
        get stopped() {
            return this._getGenerateEvent('stopped', !1);
        },
        get newStream() {
            return this._getGenerateEvent('newStream', !1);
        },
        get streamSelected() {
            return this._getGenerateEvent('streamSelected', !1);
        },
        get genericError() {
            return this._getGenerateEvent('genericError', !1);
        },
        _getGenerateEvent(e, t) {
            var i; let
                n = this._events;
            return n || (n = this._events = {}),
                (i = n[e]) || (i = new util.Observable({
                    deferNotify: t,
                }),
                    n[e] = i),
                i;
        },
        _setPendingMetadata(e, t) {
            var i = this._pendingLoadedMetadata;
            i || (i = this._pendingLoadedMetadata = {}),
                i[e] = t,
                this.hasLoadedMetadata && t() && this._clearPendingMetadata(e);
        },
        _clearPendingMetadata(e) {
            delete this._pendingLoadedMetadata[e];
        },
        _applyPendingMetadata() {
            var e; var t = this._media; var
                i = this._pendingLoadedMetadata;
            if (t && i) {
                for (e in i) {
                    i.hasOwnProperty(e) && (0,
                        i[e])() && this._clearPendingMetadata(e);
                }
            }
        },
        _logBufferPoolSize() {
            var e = this._media.bufferPoolSize;
            var t = {
                bufferPoolSize: {},
            };
            e && void 0 !== e.video && (t.bufferPoolSize.video = e.video),
                e && void 0 !== e.audio && (t.bufferPoolSize.audio = e.audio),
                nrdp.log.info(t);
        },
        get PLAYBACK_TYPES() {
            return this._playbackTypes;
        },
        playbackStates: util.makeEnum('NO_SOURCE', 'LOADING_METADATA', 'BUFFERING', 'PLAYREQUESTED', 'CHANGING_AUDIO_TRACK', 'PLAYING', 'PAUSEPENDING', 'PAUSED', 'SEEK_PENDING', 'SEEKING', 'REBUFFERING', 'ENDING', 'EMPTY', 'WARMING', 'STOPPED', 'ENDED', 'ERROR'),
    }),
    controller = typeof controller === 'undefined' ? {} : controller,
    state.handleEvent = function (e, t) {
        var i; var n; var r; var
            s = this.actions;
        return (n = s && (i = s[e.name]) && i.apply(this, t)) ? n : (e.bubbling || (e.bubbling = !0),
            e.cancelBubble ? void 0 : (r = this.parentState) && r.handleEvent(e, t));
    }
    ,
    controller.ABaseUiCard = util.Class.create({
        _hasFocus: !1,
        _onStack: !1,
        view() {
            return this._view || (this._view = this._initView());
        },
        toString() {
            return this.id;
        },
        handleEvent: state.handleEvent,
        canEnter() {
            return !0;
        },
        onEnter(e, t, i) {
            this._hasFocus = !0,
                this._onStack = !0,
                this.view().focus();
        },
        onExit(e, t, i) {
            delete this._hasFocus,
                e && delete this._onStack,
                this._onExit(e);
        },
        _onExit(e) {
            var t = this._view;
            t && (e ? t.hide() : t.blur());
        },
    }),
    controller.AUiCard = controller.ABaseUiCard.extend({
        _showing: !1,
        show() {
            this._showing = !0,
                this.view().show();
        },
        hide() {
            delete this._showing,
                this._onExit(!0);
        },
        _onExit(e) {
            var t = this._view;
            t && (e && !this._showing ? t.hide() : t.blur());
        },
    }),
    controller.APlaybackCard = controller.AUiCard.extend({
        id: 'PlaybackCard',
        init: function e(t) {
            e.base.call(this),
                this._viewFactory = t;
        },
        _initView() {
            return this._viewFactory();
        },
    }),
    controller.PlaybackCard = controller.APlaybackCard.extend({}),
    view.AView = util.Class.create({
        init(e) {
            this.id = e;
        },
        _skipShowInFocus: !1,
        get _cssSubject() {
            return document.body;
        },
        visible: !1,
        focused: !1,
        show() {
            this.visible = !0;
            var e = this._visibleClassName;
            e && util.css.add(this._cssSubject, e),
                this._render();
        },
        hide() {
            var e = this._visibleClassName;
            this.visible = !1,
                this.blur(),
                e && util.css.remove(this._cssSubject, e);
        },
        focus() {
            var e = this._focusClassName;
            this.focused = !0,
                this._skipShowInFocus || this.show(),
                e && util.css.add(this._cssSubject, e),
                this._hasUpdateLegend && this._updateLegend();
        },
        blur() {
            var e = this._focusClassName;
            this.focused = !1,
                e && util.css.remove(this._cssSubject, e);
        },
        destroy: e,
        toString() {
            return this.id;
        },
        _hasUpdateLegend: !1,
    }),
    view.APlaybackView = view.AView.extend({
        init: function e() {
            e.base.call(this, 'PlaybackView');
        },
        _render() { },
    }),
    view.PlaybackView = view.APlaybackView.extend({
        _visibleClassName: 'playing-focus',
    }),
    controller.BufferingCard = controller.AUiCard.extend({
        id: 'BufferingCard',
        handlesRebuffer: !0,
        init: function e(t) {
            e.base.call(this),
                this._viewFactory = t;
        },
        _initView() {
            return this._viewFactory();
        },
        onEnter: function e(t, i) {
            var n = this.view();
            t && (this._currentProgress = 0,
                this._doNotReloadLoadingBar = i && i.doNotReloadLoadingBar,
                n.setDoNotReload(this._doNotReloadLoadingBar)),
                e.base.call(this, t, i),
                t && n.onBufferProgress(0);
        },
        onExit: function e(t, i) {
            t && (this._doNotReloadLoadingBar = i && i.doNotReloadLoadingBar,
                this.view().setDoNotReload(this._doNotReloadLoadingBar)),
                e.base.call(this, t, i);
        },
        reset() {
            var e = this.view();
            e instanceof view2.AView || e.reset();
        },
        actions: {
            'key.down': function () {
                return !0;
            },
            'key.left': function () {
                return !0;
            },
            'key.right': function () {
                return !0;
            },
            'key.rewind': function () {
                return !0;
            },
            'key.fastfwd': function () {
                return !0;
            },
            'key.enter': function () {
                return !0;
            },
            'key.play': function () {
                return !0;
            },
            'key.pause': function () {
                return !0;
            },
            'key.start': function () {
                return !0;
            },
            'key.skip_back': function () {
                return !0;
            },
            'key.skip_forward': function () {
                return !0;
            },
            'player.progress': function (e) {
                var t = Math.max(this._currentProgress, e.loaded / e.total);
                return this._currentProgress = t,
                    this.view().onBufferProgress(t);
            },
        },
    }),
    controller.APrePlaybackCard = controller.BufferingCard.extend({
        id: 'PrePlaybackCard',
        handlesRebuffer: !0,
        _minimumDisplayDuration: 0,
        setMetadata(e, t) {
            var i = this.view();
            this._hidePreplaybackText || (i.showHeader(this._prePlaybackHeader),
                i.setMetadata(e, t)),
                this._startDisplayTime = util.Date.now();
        },
        getRemainingWaitTime() {
            var e = util.Date.now();
            var t = this._startDisplayTime;
            var i = t ? e - t : 0;
            return this._minimumDisplayDuration - i;
        },
        init: function e(t) {
            e.base.call(this),
                this._viewFactory = t;
        },
        _initView() {
            return this._viewFactory();
        },
        onEnter: function e(t, i) {
            t && (this._hidePreplaybackText = i && i.hidePreplaybackText,
                this._prePlaybackHeader = i && i.prePlaybackHeader,
                this._minimumDisplayDuration = i && i.minimumDisplayDuration || 0),
                e.base.call(this, t, i);
        },
    }),
    controller.PrePlaybackCard = controller.APrePlaybackCard.extend({}),
    controller.TextOverlay = util.Class.create({
        notificationTypes: util.makeEnum('SUBTITLE_TRACK_CHANGE'),
        _view: null,
        init(e, t) {
            this._view = t(),
                this.observable = new util.KeyedObservable(),
                e && (e.subtitletrackchanged.subscribe(this, this._onSubtitleTrackChange),
                    e.showsubtitle.subscribe(this, this._showSubtitle),
                    e.removesubtitle.subscribe(this, this._removeSubtitle));
        },
        view() {
            return this._view;
        },
        reset() {
            this._view.reset();
        },
        _onSubtitleTrackChange(e) {
            this._view.reset();
        },
        _showSubtitle(e) {
            this._view.showSubtitle(e);
        },
        _removeSubtitle(e) {
            this._view.removeSubtitle(e);
        },
    }),
    view.TextOverlayView = util.Class.create({
        init() {
            this._wrapperEl = document.getElementById('playback-text'),
                this._activeElements = {};
        },
        showSubtitle(e) {
            var t; var
                i = e.id;
            this._activeElements[`${i}`] || (t = this._createSubtitleElement(e)) && (this._activeElements[`${i}`] = `subtitle_${i}`,
                this._wrapperEl.appendChild(t));
        },
        removeSubtitle(e) {
            var t; var i; var
                n = e && e.id;
            void 0 !== n && (t = this._activeElements[`${n}`]) && (i = document.getElementById(t)) && (this._wrapperEl.removeChild(i),
                delete this._activeElements[`${n}`]);
        },
        reset() {
            for (; this._wrapperEl.firstChild;) this._wrapperEl.removeChild(this._wrapperEl.firstChild);
            this._activeElements = {};
        },
        _createSubtitleElement(e) {
            var t; var i = document.createElement('div'); var n = (e = e || {},
                window.innerWidth); var r = window.innerHeight; var s = (e.rootContainerExtentY || r) / r; var a = (e.rootContainerExtentX || n) / n; var o = (e.originX || 0) / a; var l = (e.originY || 0) / s; var u = (e.sizeX || 0) / a; var
                    c = (e.sizeY || 0) / s;
            if (e.imageData) {
                return t = `data:image/png;base64,${btoa(String.fromCharCode.apply(null, e.imageData))}`,
                    i.className = 'playback-subtitle',
                    i.style.top = `${l}px`,
                    i.style.left = `${o}px`,
                    i.style.width = `${u}px`,
                    i.style.height = `${c}px`,
                    i.setAttribute('id', `subtitle_${e.id}`),
                    i.style.backgroundImage = `url(${t})`,
                    i;
            }
        },
    }),
    controller.Watermark = util.Class.create({
        _view: null,
        init(e) {
            this._view = e();
        },
        view() {
            return this._view;
        },
        reset() {
            this._view.reset();
        },
        updateWatermark(e) {
            e && typeof e.id === 'string' ? this._view.showWatermark(e) : this._view.removeWatermark();
        },
    }),
    view.WatermarkView = util.Class.create({
        init() {
            this._watermarkEl = document.getElementById('playback-watermark');
        },
        showWatermark(e) {
            var t = e.id;
            var i = e.opacity;
            var n = e.anchor;
            if (this._watermarkEl.innerHTML = t,
                typeof i === 'number' && i > 0 && i <= 100) {
                var r = 0.01 * (i + 0.1 * (100 - i));
                this._watermarkEl.style.opacity = r;
            }
            switch (n) {
                default:
                case 'top_center':
                    util.css.add(this._watermarkEl, 'playback-watermark-top-align'),
                        util.css.remove(this._watermarkEl, 'playback-watermark-bottom-align');
                    break;
                case 'bottom_center':
                    util.css.remove(this._watermarkEl, 'playback-watermark-top-align'),
                        util.css.add(this._watermarkEl, 'playback-watermark-bottom-align');
            }
        },
        removeWatermark() {
            this._watermarkEl.innerHTML = '';
        },
        reset() {
            this.removeWatermark();
        },
    }),
    config.playerView = {
        bufferBar: {
            start: -256,
            total: 256,
            dummy: {
                fraction: 0.25,
                duration: 5e3,
                fps: 4,
            },
        },
        scrubBar: {
            progressBar: {
                start: -392,
                total: 392,
            },
            currentTimeMarker: {
                start: 126,
                total: 392,
            },
            seekTimeMarker: {
                start: 109,
                total: 392,
            },
        },
    },
    model.MovieUtils.getShortTitle = function (e) {
        var t;
        return e && (t = e && e.title_series ? e.title_series : e.title) && (t.title_short || t.short || t.title || typeof t === 'string' && t) || '';
    }
    ,
    model.MovieUtils.getEpisodeTitle = function (e, t, i) {
        var n = e && e.title;
        var r = n.episode_short || '';
        i = i || config.text.episode.shortTitle;
        return t ? n.episode_short_raw : (n && e && e.season_number && e.sequence && (r = util.textFormat(i, {
            season: e.season_number,
            episode: e.sequence,
            title: n.episode_short_raw,
        })),
            r);
    }
    ,
    model.MovieUtils.getEpisodeCount = function (e) {
        return e && e.episode_count;
    }
    ,
    util.formatPercent = function (e) {
        return Math.floor(100 * e);
    }
    ,
    util.formatTitle = function (e) {
        return `‎${e}‎`;
    }
    ,
    view.EurekaMetadataPrePlaybackView = view.AView.extend({
        _visibleClassName: 'metadataPrePlayback-focus',
        titleDivId: 'mppb-title-text',
        episodeDivId: 'mppb-title-episode',
        dolbyVisionDivId: 'mppb-dv-label',
        vidQualLevelDivId: 'mppb-vidqual-label',
        titleLoadedClassName: 'mppb-title-loaded',
        cssClassShow: 'show',
        cssClassHide: 'hide',
        init: function e() {
            e.base.call(this, 'MetadataPrePlaybackView'),
                this.setMetadata(null, null);
        },
        setMetadata(e, t) {
            var i; var n = model.MovieUtils; var r = ''; let
                s = '';
            e && (i = e.movie,
                r = n.getShortTitle(i),
                s = (s = t ? n.getEpisodeTitle(t) : '') || n.getEpisodeTitle(i)),
                document.getElementById(this.titleDivId).textContent = util.formatTitle(r),
                document.getElementById(this.episodeDivId).textContent = util.formatTitle(s),
                util.css.swapCond(document.getElementById(this.episodeDivId), this.cssClassHide, s === ''),
                util.css.add(document.body, this.titleLoadedClassName);
        },
        onBufferProgress(e) {
            var t = s.Adapter.media.videoQualityTier === 'DV';
            var i = s.Adapter.media.videoQualityTier === 'UHDA-HDR';
            var n = s.Adapter.media.videoQualityTier === 'UHD';
            if (document.getElementById('mppb-loading-label').innerHTML = util.textFormat(config.text.playback.loadingPercentage, {
                number: util.formatPercent(e),
            }),
                t) util.css.swapCond(document.getElementById(this.dolbyVisionDivId), this.cssClassShow, t);
            else if (s.Adapter.media.showDebugBadging && (i || n)) {
                var r = i ? 'HDR10' : '4K';
                var a = document.getElementById(this.vidQualLevelDivId);
                a.innerHTML = r,
                    util.css.swapCond(a, this.cssClassShow, !0);
            }
        },
        setDoNotReload: e,
        _render: e,
        reset() {
            document.getElementById(this.titleDivId).textContent = document.getElementById(this.episodeDivId).textContent = '',
                util.css.remove(document.body, this.titleLoadedClassName),
                util.css.remove(document.getElementById(this.episodeDivId), this.cssClassHide),
                util.css.remove(document.getElementById(this.dolbyVisionDivId), this.cssClassShow),
                util.css.remove(document.getElementById(this.vidQualLevelDivId), this.cssClassShow);
        },
        setTitles: e,
        showHeader: e,
        hide: function e() {
            e.base.call(this),
                util.css.removeAll(document.body, ['app-startup', this.titleLoadedClassName, 'mdx-prompt-focus', 'metadataPrePlayback-focus']);
        },
    }),
    view.EurekaPrePlaybackView = view.AView.extend({
        _visibleClassName: 'prePlayback-focus',
        setMetadata: e,
        onBufferProgress(e) {
            document.getElementById('ppb-loading-label').innerHTML = util.textFormat(config.text.playback.bidiProgressPercentage, {
                number: util.formatPercent(e),
            });
        },
        setDoNotReload: e,
        _render: e,
        reset: e,
        setTitles: e,
        showHeader: e,
    }),
    state.ICompoundState = util.Class.create(),
    state.ACompoundState = state.ICompoundState.extend({
        id: 'ACompoundState',
        raiseEvent: state.raiseEvent,
        _simpleHandleEvent: state.handleEvent,
        _onStack: !1,
        _hasFocus: !1,
        get stack() {
            var e = this._getCurrentState();
            return e ? [e] : [];
        },
        _updateActiveState(e, t, i, n, r) {
            var s;
            return e.canEnter() ? (e !== this && (e.parentState = this),
                this.raiseEvent.subscribe(e),
                !i || !n && r && r.skipExit || i.onExit(n, r, e),
                e.onEnter(t, r, i),
                s = !0) : s = !1,
                s;
        },
        canEnter() {
            return !0;
        },
        onEnter(e, t, i) {
            var n = this._getCurrentState();
            this._onStack = !0,
                this._hasFocus = !0,
                n && n !== this && (n.parentState = this),
                this.raiseEvent.subscribe(n || this),
                n && n.onEnter(e, t, i);
        },
        onExit(e, t, i) {
            var n = this._getCurrentState();
            e && (this._onStack = !1),
                this._hasFocus = !1,
                n && n.onExit(e, t, i);
        },
        handleEvent(e, t) {
            var i; var
                n = this._getCurrentState();
            return !e.bubbling && n && (i = n.handleEvent(e, t)),
                i || (i = this._simpleHandleEvent(e, t)),
                i;
        },
        toDescription() {
            var e = this._getCurrentState();
            var t = this.id;
            return e && e !== this && (t += `: [${e instanceof state.ICompoundState ? e.toDescription() : e.toString()}]`),
                t;
        },
    }),
    controller.ACompoundUiCard = state.ACompoundState.extend(controller.AUiCard.prototype).extend({
        id: 'ACompoundUiCard',
        onEnter: function e(t, i, n) {
            e.base.call(this, t, i, n),
                state.ACompoundState.prototype.onEnter.call(this, t, i, n);
        },
        onExit: function e(t, i, n) {
            e.base.call(this, t, i, n),
                state.ACompoundState.prototype.onExit.call(this, t, i, n);
        },
    }),
    view.DomViewFactory = util.Class.create({
        _count: 0,
        _template: null,
        init(e, t) {
            this._templateId = e,
                this._baseId = t;
        },
        make() {
            var e = this._template || (this._template = document.getElementById(this._templateId));
            return (e = e.cloneNode(!0)).id = this._getId(),
                e;
        },
        destroy(e) {
            var t = e.parentNode;
            t && t.removeChild(e);
        },
        _getId() {
            var e = this._count++;
            return this._baseId ? this._baseId + e : null;
        },
    }),
    view.SmokedGlass = {
        _DOM_ID: 'smoked-glass',
        _count: 0,
        _requestors: {},
        show(e) {
            this._count || util.css.add(document.getElementById(this._DOM_ID), 'visible'),
                !e in this._requestors && (this._requestors[e] = !0,
                    this._count++);
        },
        hide(e) {
            e in this._requestors && (delete this._requestors[e],
                this._count--),
                this._count || util.css.remove(document.getElementById(this._DOM_ID), 'visible');
        },
    },
    util.dom = {
        prev(e) {
            for (; e = e.previousSibling;) if (e.nodeType === 1) return e;
            return null;
        },
        next(e) {
            for (; e = e.nextSibling;) if (e.nodeType === 1) return e;
            return null;
        },
        nthOfType(e, t, i) {
            return e.querySelector(`${t}:nth-of-type(${i + 1})`);
        },
    },
    view.DialogView = view.AView.extend({
        _visibleClassName: 'dialog-visible',
        _focusClassName: 'dialog-focus',
        _id: 'DialogView',
        init: function e(t) {
            e.base.call(this, this._id),
                this._model = t;
        },
        get _POS_CENTER() {
            return this.__POS_CENTER || (this.__POS_CENTER = config.viewport.height / 2),
                this.__POS_CENTER;
        },
        set _POS_CENTER(e) {
            this.__POS_CENTER = e;
        },
        _Factory: new view.DomViewFactory('template-dialog', 'dialog'),
        _numButtons: 0,
        _index: 0,
        _dirty: !0,
        get index() {
            return this._index;
        },
        setModel(e) {
            var t = e.buttons;
            this._model && this._reset(),
                this._model = e,
                this._index = 0,
                this._numButtons = t ? t.items.length : 0,
                this.visible && this.show();
        },
        show: function e() {
            e.base.call(this);
            var t = this._model;
            var i = this._getDomView();
            t && t.smokedGlass && view.SmokedGlass.show(this),
                util.css.add(i, 'visible'),
                i.style.top = `${this._POS_CENTER - i.clientHeight / 2}px`;
        },
        hide: function e() {
            e.base.call(this);
            var t = this._model;
            t && t.smokedGlass && view.SmokedGlass.hide(this),
                util.css.remove(this._getDomView(), 'visible');
        },
        move(e) {
            var t; var i; var
                n = this._numButtons;
            return !!n && (t = this._index,
                i = util.mathBound(t + (e === 'next' ? 1 : -1), 0, n - 1),
                this.setIndex(i));
        },
        setIndex(e) {
            var t; var i; var n = this._index; var r = util.css; var
                s = this._domView;
            return e !== n && ((i = (t = s.getElementsByClassName('button'))[n]) && r.remove(i, 'focus'),
                this._index = e,
                e !== null && void 0 !== e && r.add(t[e], 'focus'),
                !0);
        },
        destroy() {
            var e; var
                t = this._domView;
            t && ((e = t.parentNode) && e.removeChild(t),
                delete this._domView);
        },
        _render() {
            if (this._dirty) {
                var e = this._getDomView();
                var t = this._model;
                var i = t.buttons;
                var n = t.code;
                var r = e.getElementsByClassName('message')[0];
                var s = e.getElementsByClassName('code')[0];
                var a = t.dialogClass;
                var o = util.css;
                var l = t.htmlElement;
                a && o.add(e, a),
                    l ? r.appendChild(l) : r.innerHTML = t.message,
                    n && (s.textContent = n),
                    o.swapCond(s, 'invisible', !n),
                    i && i.length ? this._renderButtons() : o.add(e.getElementsByClassName('buttons')[0], 'invisible'),
                    e.parentNode || document.body.appendChild(e),
                    this._dirty = !1;
            }
        },
        _reset() {
            var e = this._model.dialogClass;
            this._dirty = !0,
                e && util.css.remove(this._getDomView(), e);
        },
        _renderButtons() {
            var e; var t; var i; var n = this._domView.getElementsByClassName('button'); var r = n.length; var s = this._model.buttons.items; var a = s.length; var o = util.css; var
                l = a > r ? a : r;
            for (e = 0; e < l; e++) {
                i = s[e],
                    t = n[e],
                    i ? (t || (t = n[0].cloneNode(!0),
                        n[0].parentNode.appendChild(t)),
                        o.removeAll(t, ['hide', 'focus']),
                        t.getElementsByClassName('button-label')[0].textContent = i.label) : t && o.add(t, 'hide');
            }
            util.css.add(n[this._index], 'focus'),
                this._numButtons = a;
        },
        _getDomView() {
            var e = this._domView;
            return e || (e = this._domView = this._Factory.make()),
                e;
        },
    }),
    util.AIndexManager = util.KeyedObservable.extend({
        init(e, t) {
            this._length = e,
                t != null && (this._defaultIdx = t);
        },
        _idx: null,
        _length: null,
        _defaultIdx: 0,
        setLength(e) {
            return this.updateLength(e),
                this.setIndex(this._idx);
        },
        updateLength(e) {
            var t = e !== this._length;
            return t && (this._length = e),
                t;
        },
        get index() {
            var e = this._idx;
            return e !== null ? e : this._defaultIdx;
        },
        get length() {
            return this._length || 0;
        },
        get hasValidIndex() {
            var e = this._idx;
            return e != null && !isNaN(e);
        },
        get hasValidLength() {
            var e = this._length;
            return e != null && !isNaN(e);
        },
        setIndex(e) {
            var t; var
                i = this._idx;
            return typeof e === 'number' && this._length ? (t = this._bound(e)) === null ? null : (this.lastSetIndexBounded = e !== t,
                i !== t && (this._idx = t,
                    this.notify('idx_changed', t, i),
                    !0)) : null;
        },
        increment() {
            this.setIndex(this._idx + 1);
        },
        decrement() {
            this.setIndex(this._idx - 1);
        },
        _bound(e) {
            return e >= 0 && e < this._length ? e : null;
        },
        invalidateIndex() {
            delete this._idx;
        },
        reset() {
            delete this._length,
                delete this._idx;
        },
    }),
    util.BoundedLinearIndexManager = util.AIndexManager.extend({
        _bound(e) {
            return util.mathBound(e, 0, this._length - 1);
        },
    }),
    controller.DialogCard = controller.AUiCard.extend({
        notificationTypes: {
            SHOW: 'DIALOG_SHOW',
            HIDE: 'DIALOG_HIDE',
        },
        _direction: 'vertical',
        _viewClass: view.DialogView,
        active: !1,
        _keyMap: {
            horizontal: {
                next: 'key.right',
                prev: 'key.left',
            },
            vertical: {
                next: 'key.down',
                prev: 'key.up',
            },
        },
        init(e, t, i) {
            var n = t && t.buttons;
            this.id = `DialogCard-${e}`,
                this._viewClass = i || this._viewClass,
                this._model = t,
                t && t.direction && (this._direction = t.direction),
                this._indexMgr = new util.BoundedLinearIndexManager(n ? n.length : 0),
                this.observable = new util.KeyedObservable(),
                this._associateKeyActions();
        },
        setModel(e) {
            var t; var i = e.buttons; var
                n = this._indexMgr;
            n.setLength(i ? i.length : 0),
                e && e.direction && (this._direction = e.direction,
                    this._associateKeyActions()),
                this._model = e,
                this._view ? this._view.setModel(e) : this._initView(),
                t = n.index,
                n.invalidateIndex(),
                this.setIndex(t);
        },
        setIndex(e) {
            var t = this._indexMgr;
            t.setIndex(e) && this.view().setIndex(t.index);
        },
        destroy() {
            delete this._model,
                delete this.observable,
                this.destroyView();
        },
        destroyView() {
            var e = this._view;
            e && e.destroy();
        },
        onClobbered() {
            var e; var
                t = this._model;
            t && (e = t.onClobbered) && e();
        },
        _initView() {
            return new (0,
                this._viewClass)(this._model);
        },
        onEnter: function e(t, i) {
            e.base.call(this, t, i),
                t && (this.active = !0,
                    util.MessageBus.notify(this.notificationTypes.SHOW, {
                        id: this.id,
                        title: this._title,
                        model: this._model,
                    })),
                this.observable.notify('enter', t);
        },
        onExit: function e(t, i) {
            e.base.call(this, t, i),
                t ? (this.active = !1,
                    util.MessageBus.notify(this.notificationTypes.HIDE, {
                        id: this.id,
                    })) : this._view && this._view.hide(),
                this.observable && this.observable.notify('exit', t);
        },
        actions: {
            'key.enter': function () {
                return this._enterHandler();
            },
            'key.top_menu': function () {
                return !0;
            },
            'dialog.select': function (e) {
                var t = this._model.buttons;
                var i = t && t.get(e);
                return !!i && this._pushButton(i);
            },
        },
        _associateKeyActions() {
            var e = this._keyMap[this._direction];
            var t = e.next;
            var i = e.prev;
            this.actions = util.extend(this.actions, util.makeMap(t, function () {
                return this.setIndex(this._indexMgr.index + 1);
            }, i, function () {
                return this.setIndex(this._indexMgr.index - 1);
            }));
        },
        _enterHandler() {
            var e = this._getSelectedButton();
            if (e) return this._pushButton(e);
        },
        _pushButton(e) {
            var t;
            return e.dontDismissOnConfirm || (t = state.raiseEvent('state.exit')),
                e.confirm(),
                t;
        },
        _getSelectedButton() {
            var e = this._model.buttons;
            return e && e.get(this._indexMgr.index);
        },
    }),
    a.AppDialog = {
        _priority: -1,
        showDialog(e, t) {
            var i; var
                n = this._priority;
            return void 0 === t && (t = 0),
                t < n || ((i = this._getDialogCard()).active && i.onClobbered(),
                    i.setModel(e),
                    this._priority = t,
                    i.active || state.raiseEvent('state.enter', i, {
                        skipExit: !0,
                    })),
                i;
        },
        hide() {
            var e = this._dialogCard;
            e && e.onExit();
        },
        _getDialogCard() {
            var e; let
                t = this._dialogCard;
            return t || (t = new controller.DialogCard('AppDialog'),
                e = this,
                t.observable.subscribe('exit', function (i) {
                    i && (e._priority = -1,
                        t.destroyView());
                })),
                t;
        },
    },
    util.MultiLock = util.Observable.extend({
        _lockCnt: 0,
        lock(e) {
            var t = e.uuid;
            var i = this._locked || (this._locked = {});
            t && t in i || (t || (t = util.ensureUuid(e)),
                i[t] = !0,
                this._lockCnt++ || this.notify(!0));
        },
        unlock(e) {
            var t; var i = e.uuid; let
                n = this._lockCnt;
            i && n && (t = this._locked) && i in t && (delete t[i],
                (n = --this._lockCnt) || this.notify(!1));
        },
    }),
    a.AppLock = new util.MultiLock(),
    util.MessageBus.NRDP_EVENT_RESET_REQUIRED = 'NRDP_EVENT_NFErr_MC_NCCP_ResetRequired',
    util.MessageBus.NRDP_EVENT_GET_NEW_CREDENTIALS = 'NRDP_EVENT_NFErr_MC_NCCP_GetNewCredentials',
    util.MessageBus.NRDP_EVENT_UNSUPPORTED_VERSION = 'NRDP_EVENT_NFErr_MC_NCCP_UnsupportedVersion',
    util.MessageBus.NRDP_EVENT_STALE_CREDENTIALS = 'NRDP_EVENT_NFErr_MC_NCCP_StaleCredentials',
    util.MessageBus.NRDP_EVENT_CONTEXT_PLAYBACK = 'NRDP_EVENT_CONTEXT_PLAYBACK',
    util.MessageBus.NRDP_ADAPTER_READY = 'NRDP_ADAPTER_READY',
    model.LocalDataCache = function (e) {
        this.cacheName = e,
            this._data = {};
    }
    ,
    model.LocalDataCache.prototype = {
        get(e, t) {
            var i = this._data;
            return e in i ? i[e] : t;
        },
        set(e, t) {
            this._data[e] = t;
        },
        reset() {
            this._data = {};
        },
    },
    model.LocalBookmarksCache = new model.LocalDataCache('LocalBookmarksCache'),
    model.LocalBookmarksCache.update = function (e, t) {
        var i = this.get(e);
        return i && (t.playback_bookmark = i.playback_bookmark,
            t.watched_date = i.watched_date / 1e3),
            t;
    }
    ,
    model.MovieUtils.getRuntime = function (e, t) {
        var i = this.getDeliveryFormat(e, t);
        var n = i && i.runtime;
        return n == null && (n = e.runtime),
            n || '';
    }
    ,
    config.models = {
        bookmark: {
            validSeconds: 30,
            watchedToEndPercent: 0.95,
        },
    },
    model.MovieUtils.isValidBookmark = function (e) {
        return e > config.models.bookmark.validSeconds;
    }
    ,
    model.MovieUtils.getBookmark = function (e) {
        var t; var i; let
            n;
        return (n = model.LocalBookmarksCache.get(e.id, !1)) ? n = n.playback_bookmark : (t = e.formats) && (i = t.Instant) && (n = i.playback_bookmark),
            this.isValidBookmark(n) ? n : 0;
    }
    ,
    model.MovieUtils.watchedToEnd = function (e, t) {
        return e && t >= e * config.models.bookmark.watchedToEndPercent;
    }
    ,
    model.MovieUtils.canResume = function (e) {
        var t; let
            i;
        return i = this.getRuntime(e),
            t = this.getBookmark(e),
            Boolean(i && t && !this.watchedToEnd(i, t));
    }
    ,
    model.MovieUtils.isStreaming = function (e) {
        var t; var i; var n; var
            r = this.getDeliveryFormat(e, 'instant');
        return !!r && (t = util.TimeService.now() / 1e3,
            i = r.available_from,
            n = r.available_until,
            i ? i <= t && (!n || n > t) : !n || n > t);
    }
    ,
    model.MovieUtils.inferNextEpisode = function (e, t) {
        return model.MovieUtils.inferEpisodes(e, t).next;
    }
    ,
    model.MovieUtils.inferPreviousEpisode = function (e, t) {
        return model.MovieUtils.inferEpisodes(e, t).previous;
    }
    ,
    model.MovieUtils.inferEpisodes = function (e, t) {
        var i; var n; var r; var s; var a; var o = model.MovieUtils; var
            l = t.episodes;
        if (e == null || !l) { return {}; }
        for (e = t.getEpisode(e.id),
            s = l.length,
            i = (a = e.overall_sequence - 1) - 1; i > -1;) {
            if (o.isStreaming(l[i])) {
                n = l[i];
                break;
            }
            i--;
        }
        for (i = a + 1; i < s;) {
            if (o.isStreaming(l[i])) {
                r = l[i];
                break;
            }
            i++;
        }
        return {
            next: r,
            previous: n,
        };
    };
var d = function (e) {
    var t = /\w+(?:\/[0-9]+)?\/([0-9]+)/;
    if (e) {
        var i = e.match(t);
        return i && i[1];
    }
};
var h = function (e, t) {
    return Object.keys(e).find((e) => {
        var i = d(t);
        return e.indexOf(i) >= 0;
    }) || t;
};
var p = function (e) {
    if (this._loading) { return; }
    var t;
    (t = (t = this._episodes.length == 0 || !0 === this._refreshing) && !!this.contentMetadata && !!this.contentMetadata._metadata) ? model.ContentLoader.episodes(model.MovieUtils.movieId(e.current_episode_ref), (e) => {
        var t = e.episodes.reduce((e, t) => {
            var i = h(this._episodesMap, t.id);
            return i && !this._episodesMap[i] && e.push(i),
                e;
        },
            []);
        this._fetchTitleStates(t);
    },
        () => this.notify(this.EVENT_TYPE.ERROR, this)) : this._fetchTitleStates(Object.keys(this._episodesMap));
};
model.Episodes = util.KeyedObservable.extend({
    EVENT_TYPE: util.makeEnum('LOADED', 'REFRESHED', 'ERROR'),
    init: function e(t, i, n) {
        e.base.call(this),
            this._episodes = [],
            this._episodesMap = {},
            this.contentMetadata = i,
            this.uri = t,
            this.loadedOV = new util.ObservableValue(!1),
            this.refreshedOV = new util.ObservableValue(!1),
            n ? (this._episodeIds = n.map(function (e) {
                return e.id;
            }),
                this._processTitleStates(n),
                this.loaded = !0,
                this.loadedOV.set(!0)) : this.loaded = !1;
    },
    refresh(e) {
        var t;
        var i = this.find(e);
        var n = this._episodes.length;
        if (t = n > 2 && i > 0 && i < n - 1) {
            if (function (e, t, i) {
                if (e.season_number === t.season_number && e.season_number === i.season_number) return t.sequence === e.sequence + 1 && i.sequence === e.sequence - 1;
                var n = t.season_number === e.season_number + 1 || i.season_number === e.season_number - 1;
                return !!n && (n = t.sequence === e.sequence + 1 || i.sequence === e.sequence - 1,
                    e.season_number < t.season_number ? n && t.sequence === 1 && e.sequence === e.season_episode_count : n && i.sequence === i.season_episode_count && e.sequence === 1);
            }(this._episodes[i], this._episodes[i + 1], this._episodes[i - 1])) return void this.notify(this.EVENT_TYPE.REFRESHED, this);
        }
        this._refreshing = !0,
            p.call(this, {
                current_episode_ref: i >= 0 ? this._episodes[i].id : e,
            });
    },
    load() {
        this.loaded ? (this._loading = !1,
            this.notify(this.EVENT_TYPE.LOADED, this)) : p.call(this, {
                current_episode_ref: this.contentMetadata.currentEpisode.id,
            });
    },
    find(e) {
        if (!this.loaded) return -1;
        var t = e;
        return typeof t === 'string' && (t = h(this._episodesMap, t),
            t = this._episodesMap[t]),
            this._episodes.indexOf(t);
    },
    getEpisode(e) {
        var t; let
            i = e;
        if (typeof i === 'string' ? (t = this._episodesMap,
            i = h(this._episodesMap, i)) : t = this._episodes,
            t) return t[i];
    },
    _fetchTitleStates(e) {
        if (e.length == 0) {
            return this.loaded = !0,
                this.loadedOV.set(this.loaded),
                this._refreshing && (this._refreshing = !1,
                    this.refreshedOV.set(!0),
                    this.notify(this.EVENT_TYPE.REFRESHED, this)),
                void this.notify(this.EVENT_TYPE.LOADED, this);
        }
        this._loading = !0,
            model.ContentLoader.titleStates(e.map((e) => model.MovieUtils.movieId(e)), !1, (e) => {
                var t = this._episodes.length;
                var i = e.title_states;
                this._processTitleStates(i),
                    this._loading = !1,
                    this.loadedOV.set(this.loaded = this._episodes.length >= t),
                    this._refreshing && (this._refreshing = !1,
                        this.refreshedOV.set(this._episodes.length >= t),
                        this.notify(this.EVENT_TYPE.REFRESHED, this)),
                    this.notify(this.EVENT_TYPE.LOADED, this);
            },
                () => {
                    this._loading = !1,
                        this._refreshing = !1,
                        this.notify(this.EVENT_TYPE.ERROR, this);
                });
    },
    _processTitleStates(e) {
        var t = this._episodesMap;
        e.filter((e) => !!e && /episode/i.test(e.type)).reduce((e, i) => {
            var n = i.id;
            return t[n] = i,
                e.push(i),
                e;
        },
            this._episodes),
            this._episodes.sort((e, t) => (e.season_number !== t.season_number ? e.season_number - t.season_number : e.sequence !== t.sequence ? e.sequence - t.sequence : 0)).forEach((e, t) => {
                e.overall_sequence = t + 1;
            });
    },
    get episodes() {
        return this._episodes;
    },
    get seasonLabel() {
        var e = this._seasonLabel;
        return !e && this.loaded && (e = this._episodes[0].season_number),
            e;
    },
    set seasonLabel(e) {
        this._seasonLabel = e;
    },
}),
    state.BlackholeState = util.Class.create({
        id: 'BlackholeState',
        blocking: !1,
        canEnter() {
            return !0;
        },
        view() {
            return null;
        },
        onEnter: e,
        onExit: e,
        handleEvent(e, t) {
            return !!this.blocking || state.handleEvent.apply(this, arguments);
        },
        toString() {
            return this.id;
        },
    }),
    util.MessageBus.EVENTS.Player = {
        PLAYER_CARD_ENTERED: 'PLAYER_CARD_ENTERED',
        PLAYER_CARD_EXITED: 'PLAYER_CARD_EXITED',
        PLAYBACK_ACTIVE: 'PLAYBACK_ACTIVE',
        PLAYBACK_INACTIVE: 'PLAYBACK_INACTIVE',
        PLAY_REQUEST: 'PLAY_REQUEST',
        POST_PLAY_ENTERED: 'POST_PLAY_ENTERED',
        POST_PLAY_EXITED: 'POST_PLAY_EXITED',
        POST_PLAY_COUNTDOWN: 'POST_PLAY_COUNTDOWN',
        POST_PLAY_PROMPT: 'POST_PLAY_PROMPT',
    },
    util.isObjectOrArray = function (e) {
        return e && typeof e === 'object';
    }
    ,
    util.makeShallowCopy = function (e) {
        var t;
        if (Array.isArray(e)) {
            for (var i in t = [],
                e) { t[i] = e[i]; }
            t.length = e.length;
        } else if (e && typeof e === 'object') {
            for (var i2 in t = Object.create(e.__proto__),
                e) t[i2] = e[i2];
        } else { t = e; }
        return t;
    }
    ,
    function (e) {
        if (!e.removeCycles) {
            var t = util.makeShallowCopy;
            var i = util.isObjectOrArray;
            var n = '';
            var r = {
                enumerable: !1,
                configurable: !0,
                value: !0,
            };
            var s = function () { };
            e.removeCycles = function (e, o, l) {
                var u; var
                    c = {
                        arrAncestorObjects: [],
                        iterationCount: 0,
                        valueToReplaceCyclesWith: o,
                        maxIterationCount: typeof l === 'number' ? l : 1e4,
                    };
                try {
                    return function e(a, o) {
                        var l; var u; var c; var d; var h; var p; var f = o.arrAncestorObjects; var _ = o.valueToReplaceCyclesWith; var
                            v = o.maxIterationCount;
                        if (!i(a)) { return a; }
                        if (a instanceof s) {
                            return {
                                type: 'Widget',
                                id: a._id,
                                name: a._name,
                                path: a._path,
                            };
                        }
                        if (a[n]) { return _; }
                        for (c in l = a,
                            u = !1,
                            f.push(a),
                            Object.defineProperty(a, n, r),
                            a) {
                            if (++o.iterationCount,
                                o.iterationCount > v) { throw `Exceeded max iteration count of ${v}`; }
                            d = a[c],
                                i(d) && (d[n] ? (h = _,
                                    p = !0) : p = d !== (h = e(d, o)),
                                    p && (u || (l = t(a),
                                        u = !0),
                                        l[c] = h));
                        }
                        return delete a[n],
                            f.pop(),
                            l;
                    }(e, c);
                } catch (t) {
                    for (var d = c.arrAncestorObjects; d.length;) { delete d.pop()[n]; }
                    throw u = a(t, e),
                    util.log.error(u.message),
                    u;
                }
            };
        }
        function a(e, t) {
            var i = function (e, t) {
                var i; var n; var r = Array.isArray(e) ? [] : {}; let
                    s = 0;
                for (i in t = t || 100,
                    e) {
                    if (++s > t) { break; }
                    n = e[i],
                        Array.isArray(n) ? r[i] = '(Array)' : r[i] = n && typeof n === 'object' ? '(Object)' : n;
                }
                return r;
            }(t);
            var n = JSON.stringify(i);
            return new Error(`util.removeCycles: ${e} for object: ${n}`);
        }
    }(util),
    function (e) {
        e.stringify || (e.stringify = function (e, t, i, n) {
            return typeof t === 'function' || t instanceof Array || (n = i,
                i = t,
                t = null),
                JSON.stringify(util.removeCycles(e, void 0, n), t, i);
        }
        );
    }(util),
    view.BufferingView = view.AView.extend({
        _visibleClassName: 'buffering-focus',
        setMetadata: e,
        onBufferProgress: e,
        setDoNotReload: e,
        _render: e,
        reset: e,
        setTitles: e,
        showHeader: e,
    }),
    controller.BufferingCard = controller.AUiCard.extend({
        id: 'BufferingCard',
        _initView() {
            return new view.BufferingView();
        },
    }),
    view.RebufferingView = view.AView.extend({
        _visibleClassName: 'rebuffering-focus',
        _BUFFER_CONFIG: config.playerView.bufferBar,
        setMetadata: e,
        onBufferProgress(e) {
            document.querySelector('#rebuffering .text').innerHTML = util.textFormat(config.text.playback.loadingPercentage, {
                number: util.formatPercent(e),
            });
        },
        setDoNotReload: e,
        _render: e,
        reset: e,
        setTitles: e,
        showHeader: e,
    }),
    controller.RebufferingCard = controller.AUiCard.extend({
        id: 'RebufferingCard',
        _initView() {
            return new view.RebufferingView();
        },
        actions: {
            'player.progress': function (e) {
                var t = Math.max(this._currentProgress, e.loaded / e.total);
                return this._currentProgress = t,
                    this.view().onBufferProgress(t);
            },
        },
        onEnter: function e(t, i) {
            var n = this.view();
            t && (this._currentProgress = 0),
                e.base.call(this, t, i),
                t && n.onBufferProgress(0);
        },
        onExit: function e(t, i) {
            e.base.call(this, t, i);
        },
    }),
    controller.APlayerCompoundCard = controller.ACompoundUiCard.extend({
        _needsEpisodeModel: !0,
        notificationTypes: util.MessageBus.EVENTS.Player,
        id: 'PlayerCard',
        init: function e(t) {
            e.base.call(this, t);
            var i = util.CurrentUrlParams.get('playPct');
            i && (this._debugPlayPercent = parseInt(i, 10) / 100,
                this._debugPlayPercent = Math.min(this._debugPlayPercent, 0.99),
                this._debugPlayPercent = Math.max(0, this._debugPlayPercent)),
                this.audioSubtitlesMetadata = new util.ObservableValue(),
                this._prePlaybackCard = t.prePlaybackCard,
                this._rebufferCard = t.rebufferCard || t.prePlaybackCard,
                this._playbackCard = t.playbackCard,
                this._playerViewFactory = t.viewFactory,
                this._player = t.player,
                this._textOverlay = t.textOverlay,
                this._watermark = t.watermark,
                this._metadataReadyFlow = [this._checkAvailability, this._checkTrackId],
                this.playbackState = new Rx.Subject();
        },
        _initView() {
            return this._playerViewFactory(this);
        },
        playMovie(t) {
            var i = this._player;
            var n = this;
            var r = t && (t.forceTrackId || state.Context.trackId);
            a.checkPaymentHold && a.checkPaymentHold(t.movieUri, r, t.fromMdp) || i.adapterAttached.take(1).subscribe(function () {
                n._onStack || state.raiseEvent('state.enter', n),
                    n._exitIfUnsupported() || (t.suppressPrePlayback || n._enterCard(n._prePlaybackCard, t.prePlaybackSettings),
                        n._shutdownPlaybackWithCallback(function () {
                            t.preserveSettings && this._preserveSettings(t),
                                n._cleanupPlayback(),
                                n._playbackSettings = util.extend({}, t),
                                n._loadContentMetadata(),
                                n._registerActivePlayback();
                        }));
            }, e, e);
        },
        onEnter: function e(t, i, n) {
            var r = util.MessageBus;
            e.base.call(this, t, i, n),
                t ? (this._lazyInit(),
                    this._addPlayerHandlers(),
                    r.subscribe(r.EVENTS.CUSTOMER_SERVICE_ACTIVE, this, this._onCsActive),
                    r.notify(this.notificationTypes.PLAYER_CARD_ENTERED)) : this._dialogCardActivated && this._exitAfterDialog && (this._exitAfterDialog = !1,
                        this._dialogCardActivated = !1,
                        this._logPlaybackExit('dialog'),
                        this._shutdownPlaybackAndExitPlayer());
        },
        _onContentMetadataLoaded(e) {
            var t; var i; var n = this._contentMetadata; var r = n.playbackMovie; var s = this._playbackSettings; var
                a = s.episode;
            s.movieUri === e && (n.isEpisodic ? (s.episode = n.playbackMovie,
                s.movieUri = n.playbackMovie.title_series.id,
                this._contentMetadata = null,
                this.playbackMovie = null) : n.hasEpisodes ? (s.episodeId === r.id ? (t = r,
                    'settings.episodeId/metadataPlaybackMovie') : a ? a.id === r.id ? (t = r,
                        'settingsEpisode.id/metadataPlaybackMovie') : (t = a,
                            'settingsEpisode') : (t = r,
                                'metadataPlaybackMovie'),
                    this.playbackMovie = t) : this.playbackMovie = n.movie,
                this.playbackMovie ? ((i = new model.ContentAudioSubtitlesMetadata()).setMetadata(this.playbackMovie),
                    i.setParentMetadata(n.audioSubtitles),
                    this.audioSubtitlesMetadata.value = i,
                    this._handleContentMetadataReady()) : this._loadContentMetadata());
        },
        _handleContentMetadataReady() {
            var e = this._metadataReadyFlow;
            var t = e.length;
            var i = -1;
            var n = this;
            var r = function () {
                ++i >= t ? n._startPlayback() : e[i].call(n, r);
            };
            r();
        },
        onExit: function e(t, i, n) {
            var r = util.MessageBus;
            var s = this._contentMetadata && this._contentMetadata.movieUri;
            e.base.call(this, t, i, n),
                t && (this.reset(),
                    r.notify(this.notificationTypes.PLAYER_CARD_EXITED),
                    r.unsubscribe(r.EVENTS.CUSTOMER_SERVICE_ACTIVE, this),
                    this._changeBookmarks(s));
        },
        _changeBookmarks(e) {
            state.raiseEvent({
                name: 'bookmarks.changed',
                tryAll: !0,
            }, this._playbackMovieUri, e);
        },
        reset() {
            this._currentState && (this._currentState.onExit(!0),
                this._currentState = null),
                this._infoOverlayListener && (this._infoOverlayListener.dispose(),
                    this._infoOverlayListener = null),
                this._endVideoTimer(),
                this._cleanupPlayback(),
                this._garbageCollectionTimeout && (this._garbageCollectionTimeout = null,
                    clearTimeout(this._garbageCollectionTimeout)),
                this._dialogCardActivated = !1,
                this._exitAfterDialog = !1,
                this._exitingPlayback = !1,
                this._episodeModel = null,
                this._removePlayerHandlers(),
                this._player.stop();
        },
        _cleanupPlayback() {
            this._waitToPlayTimeout && (this._waitToPlayTimeout.clear(),
                delete this._waitToPlayTimeout),
                this._forceGarbageCollection(),
                this._playbackStarted = !1,
                this._prePlaybackCard.reset(),
                this._rebufferCard.reset(),
                this._textOverlay && this._textOverlay.reset(),
                this._watermark.reset(),
                this._unregisterForAudioSubtitlesChanges(),
                this._stopListeningToContentMetadataChanges(),
                this._clearOverlays(),
                this._playbackSettings = null,
                this._movieId = null,
                this._contentMetadata = null,
                this._onEndPlaybackCallback = null,
                this.playbackMovie = null,
                this.audioSubtitlesMetadata.value = null;
        },
        actions: {
            'key.up': function () {
                return this._logPlaybackExit('key.up'),
                    this._shutdownPlaybackAndExitPlayer();
            },
            'key.back': function () {
                return this._logPlaybackExit('key.back'),
                    this._shutdownPlaybackAndExitPlayer();
            },
            'key.left': function () {
                return !0;
            },
            'key.right': function () {
                return !0;
            },
            'key.rewind': function () {
                return !0;
            },
            'key.fastfwd': function () {
                return !0;
            },
            'key.enter': function () {
                return this._togglePause(),
                    !0;
            },
            'key.play': function () {
                return this._togglePause(),
                    !0;
            },
            'key.start': function () {
                return this._togglePause(),
                    !0;
            },
            'key.pause': function () {
                return this._togglePause(),
                    !0;
            },
            'key.stop': function (e) {
                return this._logPlaybackExit('key.stop'),
                    this._shutdownPlaybackAndExitPlayer(e);
            },
            'key.subtitle': function () {
                return this._cycleTimedTextTrack(),
                    !0;
            },
            'key.audio': function () {
                return this._cycleAudioTrack(),
                    !0;
            },
            'key.track_prev': function () {
                return this.skipRew(),
                    !0;
            },
            'key.track_next': function () {
                return this.skipFwd(),
                    !0;
            },
            'key.skip_back': function () {
                return this.skipRew(),
                    !0;
            },
            'key.skip_forward': function () {
                return this.skipFwd(),
                    !0;
            },
            'trickplay.play': function (e) {
                var t = e.currentTime;
                var i = this._player;
                return void 0 != t && i.setCurrentTime(t),
                    i.unpause(),
                    !0;
            },
            'player.playMovie': function (e) {
                return this.playMovie(e),
                    !0;
            },
            'player.restartPlayback': function () {
                var e = this._player;
                return e.isStopped ? this._playbackSettings && this.playMovie(this._playbackSettings) : e.restartPlayback(),
                    !0;
            },
            'player.trickplay': function () {
                return !0;
            },
            'player.skipBack': function () {
                return this.skipPlayback(-config.playback.skipSeconds),
                    !0;
            },
            'player.skipForward': function () {
                return this.skipPlayback(config.playback.skipSeconds),
                    !0;
            },
            'player.seek': function (e) {
                return this.setCurrentTimeAndPlay(e),
                    this.view().hideTouchControls(),
                    !0;
            },
            'player.stop': function (e) {
                return this._shutdownPlaybackAndExitPlayer(e),
                    !0;
            },
            'player.togglePause': function () {
                return this._togglePause(),
                    !0;
            },
            'player.pauseMovie': function () {
                return this._pauseMovie(),
                    !0;
            },
            'player.skipIntro': function () {
                return this.skipIntro(),
                    this.view().hideTouchControls(),
                    !0;
            },
            'player.toggleSubtitles': function () {
                return this._toggleSubtitles(),
                    !0;
            },
            'app.exitRequested': function (e) {
                return this._logPlaybackExit('app.exit'),
                    this._endPlaybackAndRaiseExitEvent(e);
            },
            'state.exit': function (e) {
                return this._exitingPlayback ? !this._player.isStopped : (this._exitCurrentChildCard(e),
                    !0);
            },
        },
        skipFwd(e) {
            return !1;
        },
        skipRew(e) {
            return !1;
        },
        skipPlayback(e) {
            return this._player.skipPlayback(e),
                !0;
        },
        setCurrentTimeAndPlay(e) {
            var t = this._player;
            var { duration: i } = t;
            this._enterRebufferCard(),
                this.view().showPauseOverlay(e, i),
                t.setCurrentTime(e);
        },
        playPreviousEpisode() {
            return this._skipEpisode(!1);
        },
        playNextEpisode() {
            return this._skipEpisode(!0);
        },
        setPrePlaybackCard(e) {
            this._prePlaybackCard = e;
        },
        preparePlayerCard(e) {
            return Rx.Observable.returnValue(null);
        },
        _exitCurrentChildCard(e) {
            var t; var i = this._getPlayerExitCards(); var n = i.length; var
                r = this._currentState;
            for (t = 0; t < n; t++) if (r === i[t]) return void this._shutdownPlaybackAndExitPlayer(e);
            this._enterCard(this._getDefaultCard());
        },
        _getPlayerExitCards() {
            return [this._playbackCard];
        },
        _getDefaultCard() {
            return this._playbackCard;
        },
        _skipEpisode(e) {
            var t = this._retrieveAdjacentEpisode(e);
            return t && this.playMovie({
                movieUri: this._contentMetadata.movieUri,
                episode: t,
                contentMetadata: this._contentMetadata,
            }),
                !!t;
        },
        _endPlaybackAndRaiseExitEvent(e) {
            var t = this.notificationTypes.PLAYER_CARD_EXITED;
            var i = function () {
                util.MessageBus.unsubscribe(t, i),
                    setTimeout(function () {
                        state.raiseEvent('app.exitRequested', e);
                    }, 0);
            };
            return util.MessageBus.subscribe(t, i),
                this._shutdownPlaybackAndExitPlayer(),
                !0;
        },
        _lazyInit() {
            this._lazyInitComplete || (this._lazyInitComplete = !0,
                this._initTextOverlayHandlers());
        },
        _exitIfUnsupported() {
            if (!this._player.supported) {
                var e = config.text.playback.videoSupportError;
                return util.DebugInfo.addMessage(e),
                    this._simpleDialog(e),
                    !0;
            }
            return !1;
        },
        _shutdownPlaybackAndExitPlayer(e) {
            return !(!this._onStack || this._exitingPlayback) && (this._exitingPlayback = !0,
                this._textOverlay && this._textOverlay.reset(),
                this._watermark.reset(),
                this._shutdownPlaybackWithCallback(this._standardOnExitCallback, e),
                !0);
        },
        _standardOnExitCallback(e) {
            var t = e && e.afterPlayerCardExitCallback;
            state.raiseEvent('state.exit', e),
                t && t();
        },
        _shutdownPlaybackWithCallback(e, t) {
            var i; var n = this._player; var
                r = this;
            this._waitingForPlaybackToStop || (n.isStopped ? (this._waitingForPlaybackToStop = !1,
                e.call(this, t)) : (state.raiseEvent('state.enter', i = new state.BlackholeState()),
                    i.blocking = !0,
                    this._waitingForPlaybackToStop = !0,
                    this._onEndPlaybackCallback = e.bind(this, t),
                    n.stop(function () {
                        i.blocking = !1,
                            state.raiseEvent('state.exit'),
                            r._waitingForPlaybackToStop = !1;
                    })));
        },
        _loadContentMetadata() {
            var e; var t; var i = this._playbackSettings; var n = i.movieUri; var r = i.episodeId; var s = i.episode; var o = i.contentMetadata; var l = (this._prePlaybackCard,
                this); var u = function () {
                    util.log.error('PlayerCard: Error loading content metadata for playback'),
                        l._contentMetadata = null,
                        l._simpleDialog(config.text.playback.metadataError);
                }; var
                    c = i.qcPackageId;
            if (!n) {
                if (s) n = s.title_series.id;
                else {
                    if (!r) return void u();
                    i.movieUri = r,
                        n = r;
                }
            }
            r && !s && n ? ((t = util.extend({}, i)).episodeInfo = {
                current_episode_ref: r,
            },
                e = a.Binding.get('CONTENT_METADATA', n, t)) : e = o && o.movieUri === n ? o : a.Binding.get('CONTENT_METADATA', n, i),
                this._contentMetadata = e;
            var d = function (e, t) {
                var i; var n = l._episodeModel; var a = model.Episodes.prototype.EVENT_TYPE.ERROR; var
                    o = model.Episodes.prototype.EVENT_TYPE.REFRESHED;
                n && n.loaded && n.contentMetadata.movieUri === l._contentMetadata.movieUri ? (i = (i = s ? s.id : r) || this.playbackMovie.id,
                    n.subscribe(o, l, function () {
                        n.unsubscribe(a, l),
                            n.unsubscribe(o, l),
                            e && e();
                    }),
                    n.subscribe(a, l, function () {
                        n.unsubscribe(a, l),
                            n.unsubscribe(o, l),
                            t && t.apply(void 0, arguments);
                    }),
                    n.refresh(i)) : e && e();
            };
            l._contentMetadata.playbackMovie ? util.ExecutionDeferrer.add(function () {
                d(function () {
                    l._onContentMetadataLoaded(n);
                }, u);
            }) : (this._onMetadataLoaded = function () {
                l._stopListeningToContentMetadataChanges();
                var { playbackMovie: t } = e;
                if (t) {
                    if (t.pinProtected && !a.pinSession.isActive) return void l._enterCard(l._pinPromptCard, t);
                    l._onContentMetadataLoaded(n),
                        l._needsEpisodeModel && l._loadAdjacentEpisodes(d, u);
                } else u();
            }
                ,
                e.subscribe(e.EVENT_TYPE.METADATA, this._onMetadataLoaded),
                c ? e.loadStubbedResponse(n) : e.load());
        },
        _stopListeningToContentMetadataChanges() {
            var e = this._contentMetadata;
            var t = this._onMetadataLoaded;
            e && t && (e.unsubscribe(e.EVENT_TYPE.METADATA, t),
                this._onMetadataLoaded = null);
        },
        _startPlayback() {
            var e; var t = model.MovieUtils; var i = this.playbackMovie.id; var n = t.movieId(i); var
                r = this._getBookmarkForPlayback();
            this._movieId = n,
                this._playbackMovieUri = i,
                this._prePlaybackCard.setMetadata(this._contentMetadata, this.playbackMovie),
                this._updateTimedTextInfoOverlay(),
                e = new o.MediaConfig(this._buildMediaConfigOptions(r)),
                this._registerForAudioSubtitlesChanges(),
                this._mediaConfig = e,
                this._player.setMovieAndPlay(e, r);
        },
        _buildMediaConfigOptions(e) {
            var t = this.audioSubtitlesMetadata.value;
            var i = state.Context;
            var n = this._playbackSettings;
            var r = n.playData;
            return {
                viewableId: this._movieId,
                trackingId: this._trackIdForPlayback,
                qcPackageId: n.qcPackageId,
                qcVideoProfiles: n.qcVideoProfiles,
                playbackType: n.playbackType,
                playData: n.playData,
                audioTrack: t.selectedAudioTrack,
                timedTextTrack: t.selectedTimedTextTrack,
                trackSelector: t.trackSelector,
                expectedDuration: model.MovieUtils.getRuntime(this.playbackMovie),
                licenseParams: {
                    mdxesn: r && r.mdxesn,
                    origin: r && r.origin,
                    isMdxPlay: r && r.isMdxPlay,
                    request_id: i.apiRequestId,
                    rank: i.movieIndex,
                    row: i.listIndex,
                    location: i.uiContextPath,
                    pin: n.prereleasePin,
                    uiplaycontext: util.stringify({
                        request_id: i.apiRequestId,
                        rank: i.movieIndex,
                        row: i.listIndex,
                        location: i.uiContextPath,
                    }),
                    controllerUiVer: r && r.controllerUiVer,
                    controllerGroupNames: r && r.controllerGroupNames,
                },
                uiPlayStartTime: n.uiPlayStartTime,
                uiLabel: n.uiLabel,
                vuiCommand: n.vuiCommand,
            };
        },
        _preserveSettings(e) {
            var t = this._playbackSettings;
            var i = t && t.playData || {};
            e && (e.playData || (e.playData = {}),
                e.playData.mdxesn = i.mdxesn,
                e.playData.controllerGroupNames = i.controllerGroupNames,
                e.playData.controllerUiVer = i.controllerUiVer);
        },
        _getBookmarkForPlayback() {
            var e = this._playbackSettings.forceBookmark;
            var t = model.MovieUtils;
            var i = this.playbackMovie;
            return void 0 == e && (e = t.canResume(i) ? t.getBookmark(i) : 0),
                this._debugPlayPercent && (e = this._getDebugBookmark(i, e)),
                e = t.isValidBookmark(e) ? e : 0;
        },
        _getDebugBookmark(e, t) {
            var i = e.interesting_moments;
            var n = 0;
            var r = model.MovieUtils.getRuntime(e);
            return i && i.type1 && i.type1[0] && (n = i.type1[0].offset),
                t && t > n ? t : this._debugPlayPercent * r;
        },
        _registerForAudioSubtitlesChanges() {
            var e = this.audioSubtitlesMetadata.value;
            var t = model.ContentAudioSubtitlesMetadata.prototype.EVENTS;
            e && (e.subscribe(t.SUBTITLE_TRACK_CHANGED, this, this._onSubtitlesChanged),
                e.subscribe(t.AUDIO_TRACK_CHANGED, this, this._onAudioTrackChanged));
        },
        _unregisterForAudioSubtitlesChanges() {
            var e = this.audioSubtitlesMetadata.value;
            var t = model.ContentAudioSubtitlesMetadata.prototype.EVENTS;
            e && (e.unsubscribe(t.SUBTITLE_TRACK_CHANGED, this),
                e.unsubscribe(t.AUDIO_TRACK_CHANGED, this));
        },
        _onSubtitlesChanged() {
            var e = this._mediaConfig;
            var t = this.audioSubtitlesMetadata.value;
            var i = t && t.selectedTimedTextTrack;
            e && (e.timedTextTrack = i);
        },
        _onAudioTrackChanged() {
            var e = this._mediaConfig;
            var t = this.audioSubtitlesMetadata.value;
            var i = t && t.selectedAudioTrack;
            e && i && (e.audioTrack = i);
        },
        _cycleTimedTextTrack() {
            var e = this.audioSubtitlesMetadata.value;
            e && e.cycleTimedTextTrack();
        },
        _cycleAudioTrack() {
            return !1;
        },
        _onPlayerAudioTrackChange(e) {
            this._updateAudioInfoOverlay(e.audioTrackInfo);
        },
        _onSubtitleTrackChange() {
            this._updateSubtitleButton();
        },
        _updateAudioInfoOverlay(e) {
            this.view().setAudioInfo(e);
        },
        _initTextOverlayHandlers() {
            if (this._textOverlay) {
                var e; var t = this; var i = this._textOverlay; var n = i.notificationTypes; var r = i.observable; var
                    s = util.makeMap(n.SUBTITLE_TRACK_CHANGE, function (e) {
                        t._updateTimedTextInfoOverlay();
                    });
                if (r) for (e in s) r.subscribe(e, s[e]);
            }
        },
        _updateSubtitleButton() {
            var { timedTextTrackList: e = [], currentTimedTextTrackIndex: t } = nrdp.media;
            var i = this._getOffAndDefaultTracks() || {};
            var { offTrack: n } = i;
            (e[t] || {}).id === n.id ? (this._subtitlesOn = !1,
                this.view().subtitlesDisabled()) : (this._subtitlesOn = !0,
                    this.view().subtitlesEnabled());
        },
        _updateTimedTextInfoOverlay() {
            var e = this._contentMetadata;
            var t = this._textOverlay;
            this.view().setTimedTextInfo(e && t && t.isEnabled ? t.getCurrentTrackInfo() : null);
        },
        _logPlaybackExit(e) {
            c.CustomerEvents.logPlaybackExit(e);
        },
        _togglePause() {
            this._player.togglePause();
        },
        _pauseMovie() {
            this._player.pause();
        },
        _getOffAndDefaultTracks() {
            var { timedTextTrackList: e = [] } = nrdp.media;
            var t; let
                i;
            return e.forEach((e, n) => {
                e.isOffTrack() ? i = e : t || (t = e);
            }),
            {
                offTrack: i,
                defaultOnTrack: t,
            };
        },
        _toggleSubtitles() {
            var e = this._getOffAndDefaultTracks() || {};
            var { offTrack: t, defaultOnTrack: i } = e;
            var { audioTrackList: n = [], currentAudioTrack: r } = nrdp.media;
            var s = n[r];
            var a;
            this._subtitlesOn ? (a = t.id,
                this._subtitlesOn = !1,
                this.view().subtitlesDisabled()) : (a = i.id,
                    this._subtitlesOn = !0,
                    this.view().subtitlesEnabled()),
                nrdp.media.selectTracks(s.id, a);
        },
        _onEndPlayback(e) {
            var t = this._player;
            var i = t.playbackStates;
            var n = e.currentTime;
            var r = e.movieId;
            var s = e.playbackType === t.PLAYBACK_TYPES.BROWSE_PLAYBACK;
            var a = e.targetState;
            var o = e.error;
            this._registerInactivePlayback(),
                r && n && !s && model.LocalBookmarksCache.set(this._playbackMovieUri, {
                    playback_bookmark: n,
                    watched_date: util.TimeService.now(),
                }),
                this._textOverlay && this._textOverlay.reset(),
                this._watermark.reset(),
                this._unregisterForAudioSubtitlesChanges(),
                e.restartingPlayback ? this._handlePlaybackRestarting(e) : e.pauseTimedOut ? this._handlePauseTimeout(e) : a === i.ENDED ? this._handlePlaybackReachedEnd(e) : a === i.ERROR && o ? this._handleFatalError(o) : this._handleStandardPlaybackEnded(e),
                this._notifyOnEndPlayback(e);
        },
        _notifyOnEndPlayback(e) {
            this.playbackState.onNext({
                state: 'END_PLAYBACK',
                event: e,
            });
        },
        _onPlaybackStarted(t) {
            var i = this._prePlaybackCard;
            this._playbackStarted ? this._handlePlaybackRestart(t) : this._currentState === i && i.getRemainingWaitTime() > 0 ? this._delayInitialPlaybackStart(t) : this._handleInitialPlaybackStart(t),
                this._forceGarbageCollection(),
                this._playbackStarted = !0,
                this._showVideoInfo(a.uiMetadataOverlayVisible),
                this._infoOverlayListener = a.uiInfoOverlay.active.values.subscribe(util.proxy(this._showVideoInfo, this), e, e),
                this._watermark.updateWatermark(this._player.preReleaseWatermarkInfo),
                this._updateSubtitleButton(),
                this._updateTimedTextInfoOverlay(),
                this._registerForAudioSubtitlesChanges(),
                this._registerActivePlayback(),
                this.playbackState.onNext({
                    state: 'START_PLAYBACK',
                    event: t,
                });
        },
        _delayInitialPlaybackStart(e) {
            var t = this._player;
            var i = this;
            var n = this._prePlaybackCard.getRemainingWaitTime();
            this._waitToPlayTimeout || (t.pause(),
                this._waitToPlayTimeout = new util.Timeout(function () {
                    var n = t && t.supported;
                    var r = !t.isPlaying && t.isPaused;
                    i._onStack && n && r && (t.unpause(),
                        i._handleInitialPlaybackStart(e)),
                        delete i._waitToPlayTimeout;
                },
                    n, this),
                this._waitToPlayTimeout.run());
        },
        _handleInitialPlaybackStart(e) {
            this._player;
            var t; var i = this._contentMetadata; var n = i && i.audioSubtitles; var r = n.audioTrackSelectionContext; var s = n.timedTextTrackSelectionContext; var a = this.audioSubtitlesMetadata.value; var
                o = c.CustomerEvents;
            this._enterPlaybackStartView(),
                util.ExecutionDeferrer.add(function () {
                    t = {
                        interactionType: 'playbackStart',
                        viewableId: i.movieUri,
                        playedAudioTrackId: a.selectedAudioTrack.id,
                        playedTextTrackId: a.selectedTimedTextTrack.id,
                    },
                        r && (t.userSelectedAudioTrackId = n.selectedAudioTrack.id,
                            t.audioTrackSelectionContext = r),
                        s && (t.userSelectedTextTrackId = n.selectedTimedTextTrack.id,
                            t.timedTextTrackSelectionContext = s),
                        o.log(o.types.AUDIO_SUBTITLES_SELECTION, t);
                });
        },
        _handlePlaybackRestart(e) {
            var t = this._currentState;
            t.handlePlaybackRestart && t.handlePlaybackRestart(e) || this._enterCard(this._playbackCard);
        },
        _enterPlaybackStartView() {
            this._enterCard(this._playbackCard);
        },
        _loadAdjacentEpisodes(e, t) {
            var i = this;
            var n = this._contentMetadata;
            var r = model.Episodes.prototype.EVENT_TYPE.ERROR;
            var s = model.Episodes.prototype.EVENT_TYPE.LOADED;
            var a = this._episodeModel;
            a && a.contentMetadata.movieUri === n.movieUri && a.loaded ? e && e.apply(i) : n.hasEpisodes && this._createEpisodesModel && (a = this._createEpisodesModel(n),
                this._episodeModel = a,
                a.subscribe(s, this, function () {
                    a.unsubscribe(r, i),
                        a.unsubscribe(s, i),
                        e && e.apply(i);
                }),
                a.subscribe(r, this, function () {
                    a.unsubscribe(r, i),
                        a.unsubscribe(s, i),
                        t && t.apply(void 0, arguments);
                }),
                a.load());
        },
        _createEpisodesModel(e) {
            return new model.Episodes(e.movieUri, e);
        },
        _retrieveAdjacentEpisode(e) {
            var t = this._episodeModel;
            var i = this.playbackMovie;
            return t && t.contentMetadata.movieUri === this._contentMetadata.movieUri && t.loaded ? model.MovieUtils[e ? 'inferNextEpisode' : 'inferPreviousEpisode'](i, t) : null;
        },
        _onPlayerProgress(e) {
            state.raiseEvent('player.progress', e),
                this.updatedVideoDimensions || (this.view().updateVideoDimensions(),
                    this.updatedVideoDimensions = !0);
        },
        _onPlayerSeeking(e) {
            state.raiseEvent('player.seeking', e);
        },
        _onPlayerBuffering(e) { },
        _onPlayerRebuffering(e) {
            var t = new controller.RebufferingCard();
            this._enterCard(t);
        },
        _onPlayerSkipPlaybackFailed(e) { },
        _onPlayerStalled(e) {
            this._enterRebufferCard();
        },
        _onPlayerNewStream(e) {
            this._updateVideoInfoOverlay();
        },
        _onPlayerPause(e) { },
        _onPlayerLoadedMetadata(e) { },
        _onStreamDownloadAttempted(e) { },
        _onPlayerManifestSelected(e) { },
        _onPlayerUpdatePts(e) {
            this.view().updatePts(e.pts / 1e3);
        },
        _onGenericError(e) {
            var t = `NRDP_EVENT_${e.desc}`;
            util.MessageBus.notify(t, e, 'player');
        },
        _registerActivePlayback() {
            util.MessageBus.notify(this.notificationTypes.PLAYBACK_ACTIVE),
                a.AppLock.lock(this),
                this.updatedVideoDimensions = !1;
        },
        _registerInactivePlayback() {
            util.MessageBus.notify(this.notificationTypes.PLAYBACK_INACTIVE),
                a.AppLock.unlock(this);
        },
        _addPlayerHandlers() {
            var e = this._player;
            e.audioTrackChanged.subscribe(this, this._onPlayerAudioTrackChange),
                e.subtitletrackchanged.subscribe(this, this._onSubtitleTrackChange),
                e.newStream.subscribe(this, this._onPlayerNewStream),
                e.progressChanged.subscribe(this, this._onPlayerProgress),
                e.playbackEnded.subscribe(this, this._onEndPlayback),
                e.playbackStarted.subscribe(this, this._onPlaybackStarted),
                e.paused.subscribe(this, this._onPlayerPause),
                e.attemptingStreamDownload.subscribe(this, this._onStreamDownloadAttempted),
                e.seeking.subscribe(this, this._onPlayerSeeking),
                e.buffering.subscribe(this, this._onPlayerBuffering),
                e.rebuffering.subscribe(this, this._onPlayerRebuffering),
                e.skipPlaybackFailed.subscribe(this, this._onPlayerSkipPlaybackFailed),
                e.genericError.subscribe(this, this._onGenericError),
                e.stalled.subscribe(this, this._onPlayerStalled),
                e.loadedMetadata.subscribe(this, this._onPlayerLoadedMetadata),
                e.manifestSelected.subscribe(this, this._onPlayerManifestSelected),
                e.updatepts.subscribe(this, this._onPlayerUpdatePts);
        },
        _removePlayerHandlers() {
            var e = this._player;
            e.audioTrackChanged.unsubscribe(this, this._onPlayerAudioTrackChange),
                e.subtitletrackchanged.unsubscribe(this, this._onSubtitleTrackChange),
                e.newStream.unsubscribe(this, this._onPlayerNewStream),
                e.progressChanged.unsubscribe(this, this._onPlayerProgress),
                e.playbackEnded.unsubscribe(this, this._onEndPlayback),
                e.playbackStarted.unsubscribe(this, this._onPlaybackStarted),
                e.paused.unsubscribe(this, this._onPlayerPause),
                e.attemptingStreamDownload.unsubscribe(this, this._onStreamDownloadAttempted),
                e.seeking.unsubscribe(this, this._onPlayerSeeking),
                e.buffering.unsubscribe(this, this._onPlayerBuffering),
                e.rebuffering.unsubscribe(this, this._onPlayerRebuffering),
                e.skipPlaybackFailed.unsubscribe(this, this._onPlayerSkipPlaybackFailed),
                e.genericError.unsubscribe(this, this._onGenericError),
                e.stalled.unsubscribe(this, this._onPlayerStalled),
                e.loadedMetadata.unsubscribe(this, this._onPlayerLoadedMetadata);
        },
        _handlePlaybackRestarting(e) {
            this._enterRebufferCard();
        },
        _handlePauseTimeout(e) {
            this._logPlaybackExit('pause.timeout'),
                this._shutdownPlaybackAndExitPlayer({
                    afterPlayerCardExitCallback() {
                        a.exit();
                    },
                });
        },
        _handlePlaybackReachedEnd(e) {
            this._logPlaybackExit('stream.end'),
                this._shutdownPlaybackAndExitPlayer();
        },
        _handleStandardPlaybackEnded(e) {
            this._onEndPlaybackCallback && (this._onEndPlaybackCallback(),
                this._onEndPlaybackCallback = null);
        },
        _handleFatalError(e) {
            util.DebugInfo.addMessage(e.errorInformation);
            var t = e.userMessage;
            t ? this._simpleDialog(t, e) : this._standardOnExitCallback();
        },
        _clearOverlays() {
            this.view().setAudioInfo(null),
                this.view().setTimedTextInfo(null),
                this.view().hidePauseOverlay();
        },
        _updateVideoInfoOverlay() {
            var e = this._player;
            this.view().setVideoInfo(e.targetBitRate, e.isHighDefinition, e.isSuperHighDefinition, e.videoWidth, e.videoHeight);
        },
        _showVideoInfo(e) {
            var t = this.view();
            e ? (this._updateVideoInfoOverlay(),
                this._startVideoTimer()) : this._endVideoTimer(),
                t.update && t.update({
                    showVideoInfo: e,
                });
        },
        _startVideoTimer() {
            this._endVideoTimer();
            var e = this.view();
            var t = this._player;
            this._videoTimerInterval = setInterval(function () {
                e.setVideoTimeInfo(t.currentTime, t.duration, t.instantBitRate);
            }, 1e3);
        },
        _endVideoTimer() {
            clearInterval(this._videoTimerInterval),
                delete this._videoTimerInterval,
                this.view().setVideoTimeInfo(null, null);
        },
        _checkAvailability(e) {
            var t = this._contentMetadata;
            t ? t.isStreaming ? e() : (util.log.error({
                name: 'APlayerCompoundCard',
                desc: 'Movie outside availability window',
                movieUri: this._movieUri,
                movieId: this.playbackMovie && this.playbackMovie.id,
                trackId: this._trackIdForPlayback,
            }),
                this._simpleDialog(config.text.playback.unavailableError)) : util.log.warn('Player Card: No content metadata when checking for availability. Something is wrong.');
        },
        _checkTrackId(e) {
            var t = parseInt(this._trackIdForPlayback);
            var i = this.playbackMovie;
            (isNaN(t) || t < 0) && util.log.error({
                name: 'APlayerCompoundCard',
                desc: 'Invalid track id',
                movieUri: this._movieUri,
                movieId: i && i.id,
                trackId: t,
            }),
                e();
        },
        _simpleDialog(t, i) {
            var n = this._player;
            var r = util.MessageBus;
            var s = new model.MenuModel('controller.PlayerCard');
            if (this._onStack) {
                n.isPlaying && n.pause(),
                    this._exitAfterDialog = !0,
                    this._dialogCardActivated = !0,
                    s.add(new model.MenuItemModel(config.text.responses.confirm, {
                        confirm: e,
                    }));
                var o = i && i.event && i.event.cadmiumError || void 0;
                var l = !1;
                if (o && o.messageIdList && o.messageIdList.indexOf('incorrect_pin') !== -1) {
                    var u = a.EurekaMdxDevice;
                    u && (u.sendMessageToAll('PIN_VERIFICATION_INCORRECT_PIN'),
                        l = !0);
                }
                r.notify(r.EVENTS.USER_ERROR_MESSAGE, {
                    source: 'player',
                    message: t,
                    playerError: o,
                    options: {
                        buttons: s,
                        priority: a.MessagePriority.LOW,
                        skipMdx: l,
                    },
                });
            }
        },
        _onCsActive(e) {
            var t; var i = {}; var
                n = this._player;
            e ? (this._layoutBeforeCS = null,
                this._pausedForCS = !1,
                n.isPaused || (n.pause(),
                    this._pausedForCS = !0),
                (t = n.currentLayout).z === 'bringToFront' && (util.Class.mixin(i, t),
                    i.z = 'sendToBack',
                    n.setLayout(i),
                    this._layoutBeforeCS = t)) : ((t = this._layoutBeforeCS) && n.setLayout(t),
                        this._pausedForCS && n.isPaused && n.unpause(),
                        this._layoutBeforeCS = null,
                        this._pausedForCS = !1);
        },
        _enterRebufferCard() {
            this._currentState.handlesRebuffer || this._enterCard(this._rebufferCard);
        },
        _enterCard(e, t) {
            var i = this._currentState;
            var n = e.view && e.view();
            return n && n instanceof view2.AView && this.view().addChild(e.view()),
                this._currentState = e,
                this._updateActiveState(e, !0, i, !0, t);
        },
        _forceGarbageCollection() {
            var e = this;
            this._garbageCollectionTimeout = setTimeout(function () {
                e._garbageCollectionTimeout = null,
                    s.Adapter.garbageCollect();
            }, 1e3);
        },
        get uiContext() {
            var e = this._playbackSettings && this._playbackSettings.forceContext;
            return e && e.uiContext ? e.uiContext : null;
        },
        get trackId() {
            var e = this._playbackSettings && this._playbackSettings.forceContext;
            return e && e.trackId ? e.trackId : null;
        },
        get trackUrl() {
            var e = this._playbackSettings && this._playbackSettings.forceContext;
            return e && e.trackUrl ? e.trackUrl : null;
        },
        get movieIndex() {
            var e = this._playbackSettings && this._playbackSettings.forceContext;
            return e && e.movieIndex ? e.movieIndex : null;
        },
        get providesContext() {
            return (this._playbackSettings && this._playbackSettings.forceContext) != null;
        },
        get _trackIdForPlayback() {
            return this._playbackSettings.forceTrackId || state.Context.trackId;
        },
        get player() {
            return this._player;
        },
        get episode() {
            return this.playbackMovie;
        },
        get movieUri() {
            var e = this._playbackSettings;
            return e && e.movieUri;
        },
        _getCurrentState() {
            return this._currentState;
        },
        _composeExitToMDPCallback(e) {
            var t = this._contentMetadata;
            var i = util.MessageBus;
            var n = util.extend({}, e);
            return n.movieUri || (n.movieUri = t.movieUri,
                n.catalogTitle = t.movie),
            {
                afterPlayerCardExitCallback() {
                    state.raiseEvent('root.collapse'),
                        i.notify(i.EVENTS.OPEN_MDP, n);
                },
            };
        },
        isCurrentlyPlaying(e, t) {
            var i = model.MovieUtils.movieId;
            var n = this.playbackMovie;
            var r = n && n.title_series;
            var s = n && i(n.id);
            var a = r && i(r.id);
            var o = typeof e === 'number' ? e : i(e);
            var l = typeof t === 'number' ? t : i(t);
            return o && l ? l === s && o === a : o ? o === s || o === a : !!l && l === s;
        },
    }),
    controller.PlayerCard = controller.APlayerCompoundCard.extend({
        _onPlayerPause: function e(t) {
            var i = this._player;
            var n = this._currentState;
            t.pausingForStop || n !== this._playbackCard || this.view().showPauseOverlay(i.currentTime, i.duration),
                e.base.call(this);
        },
        _onPlaybackStarted: function e(t) {
            var i = this._player;
            this.view().updateScrubber(i.currentTime, i.duration),
                this.view().hidePauseOverlay(),
                e.base.call(this, t);
        },
    }),
    controller.DirectToPlaybackPlayerMixin = {
        playMovie: function e(t) {
            this._originalPrePlaybackCard = this._prePlaybackCard,
                this._prePlaybackCard = a.Binding.get('DIRECT_PLAY_PREPLAYBACK_CARD'),
                t.prePlaybackSettings = t.prePlaybackSettings || {},
                e.base.call(this, t);
        },
        _handlePlaybackStart: function e() {
            this._setPrePlaybackCardBackToOriginal(),
                e.base.call(this);
        },
        _setPrePlaybackCardBackToOriginal() {
            this._prePlaybackCard = this._originalPrePlaybackCard;
        },
    },
    config.postPlay = {
        interruptDisabled: config.isDebugBuild && util.CurrentUrlParams.get('disableInterrupt') === 'true',
        threshold: {
            postPlay: 0.85,
            interval: 1e3,
        },
        preLoad: {
            interval: 1e3,
            allowance: 120,
        },
        autoPlay: {
            enabled: util.CurrentUrlParams.get('enablePostPlayAutoplay') !== 'false',
            timer: util.CurrentUrlParams.get('postPlayAutoPlayDelay') || 5,
            interval: 1e3,
            interruptThreshold: 120,
            limit: util.CurrentUrlParams.get('postPlayMaxAutoPlays') || 2,
        },
    },
    function (t) {
        var i = function () {
            model.CurrentUser.loaded.subscribe(function (e) {
                var t;
                t = util.CurrentUrlParams.has('enablePostPlayAutoplay') ? util.CurrentUrlParams.get('enablePostPlayAutoplay') === 'true' : e.isAutoStartEnabled,
                    config.postPlay.autoPlay.enabled = t;
            }, e);
        };
        i(),
            t.postPlayConfigInit = i;
    }(model),
    controller.PostPlayPlayerMixin = {
        _shouldShowPostPlay: !1,
        reset: function e() {
            e.base.call(this),
                this._autoPlayCount = 0;
        },
        _cleanupPlayback: function e() {
            e.base.call(this),
                this._playbackHasEnded = !0,
                this._savedBookmark = null,
                this._creditsStartTime = null,
                this._readyToShowPostPlay = !1,
                this._preLoadStarted = !1,
                this._postPlayCardToEnter = null,
                this._hasNextEpisode = !1,
                this._shouldShowPostPlay = !1;
        },
        actions: {
            'key.up': function () {
                return this._onUserExitPlayback('key.up');
            },
            'key.back': function () {
                return this._handleConditionalExit('key.back');
            },
            'key.stop': function (e) {
                return this._handleConditionalExit('key.stop', e);
            },
            'player.expand': function () {
                var e = this._currentState;
                return e && e.isPostPlayCard && (this._readyToShowPostPlay = !1),
                    this._playbackHasEnded ? this._shutdownPlaybackAndExitPlayer() : this._savedBookmark ? this._restorePlaybackPoint() : (this._expandCurrentMovie(),
                        this._rebufferingPlayback && this._enterCard(this._prePlaybackCard)),
                    !0;
            },
            'player.shrink': function (e) {
                return !0;
            },
            'search.enter': function () {
                var e = {
                    afterPlayerCardExitCallback() {
                        state.raiseEvent('root.collapse'),
                            state.raiseEvent('search.enter');
                    },
                };
                return this._logPlaybackExit('search.enter'),
                    this._shutdownPlaybackAndExitPlayer(e),
                    !0;
            },
            'mdp.enter': function (e) {
                var t = this._composeExitToMDPCallback(e);
                return this._logPlaybackExit('mdp.enter'),
                    this._shutdownPlaybackAndExitPlayer(t),
                    !0;
            },
        },
        onEnter: function e(t, i, n) {
            t && (this._autoPlayCount = 0),
                e.base.call(this, t, i, n);
        },
        _startPlayback: function e() {
            var t = this._player;
            this._playbackSettings.isAutoPlay ? this._autoPlayCount++ : this._autoPlayCount = 0,
                this._playbackHasEnded = !1,
                e.base.call(this),
                t.setLayout(t.FULL_SCREEN_LAYOUT);
        },
        _onEndPlayback: function e(t) {
            this._stopCreditRollPolling(),
                this._stopAutoPlayInterruptPolling(),
                this._stopPreLoadPolling(),
                e.base.call(this, t);
        },
        _notifyOnEndPlayback(e) {
            this.playbackState.onNext({
                state: 'END_PLAYBACK',
                event: e,
                shouldShowPostPlay: this._shouldShowPostPlay,
            });
        },
        _handlePlaybackReachedEnd: function e(t) {
            this._playbackHasEnded = !0,
                this._currentState.isPostPlayCard || (this._readyToShowPostPlay ? (this._shouldShowPostPlay = !0,
                    this._enterPostPlay({
                        isTitleStop: !0,
                    })) : (this._hasNextEpisode && util.log.error('PostPlayPlayerMixin._handlePlaybackReachedEnd: Playback ended but could not enter postplay, probably due to missing data.'),
                        e.base.call(this, t)));
        },
        _onPlayerPause: function e(t) {
            if (this._stopCreditRollPolling(),
                !this._playbackSettings || !this._isPostPlayEnabled()) { return e.base.call(this, t); }
            this._isAutoPlayInterrupt ? this._isAutoPlayInterrupt = !1 : (e.base.call(this, t),
                this._registerUserInteraction());
        },
        _onPlaybackStarted: function e(t) {
            this._rebufferingPlayback = !1,
                this._resetCreditRollPolling(),
                this._resetAutoPlayInterruptPolling(),
                this._resetPreLoadPolling(),
                e.base.call(this, t);
        },
        _handlePlaybackRestart: function e(t) {
            this._currentState.isPostPlayCard || e.base.call(this, t);
        },
        _handleInitialPlaybackStart: function e(t) {
            this._currentState.isPostPlayCard || e.base.call(this, t);
        },
        _onPlayerStalled: function e(t) {
            this._hasFocus && (this._rebufferingPlayback = !0,
                this._currentState.isPostPlayCard || e.base.call(this, t));
        },
        _onPlayerLoadedMetadata: function e(t) {
            this._creditsStartTime = this._getCreditsStartTime(),
                e.base.call(this, t);
        },
        _togglePause: function e() {
            e.base.call(this),
                this._autoPlayCount = 0;
        },
        setCurrentTimeAndPlay: function e(t) {
            this._stopCreditRollPolling(),
                e.base.call(this, t),
                this._autoPlayCount = 0;
        },
        _getPostPlayThreshold() {
            var e = this._playbackSettings && this._playbackSettings.postPlayThreshold;
            return void 0 !== e && e !== null ? e : config.postPlay.threshold.postPlay;
        },
        _enterPostPlay(e) {
            var t = {
                player: this._player,
                enableSkipIntro: this._playbackSettings && this._playbackSettings.enableSkipIntro,
            };
            return util.Class.mixin(t, e),
                this._enterCard(this._postPlayCardToEnter, t);
        },
        _handleConditionalExit(e, t) {
            return this._currentState.isPostPlayCard ? (this._logPlaybackExit(e),
                this._shutdownPlaybackAndExitPlayer(),
                !0) : this._onUserExitPlayback(e, t);
        },
        _onUserExitPlayback(e, t) {
            var i = this._player;
            var n = i.duration;
            var r = !1;
            var s = this;
            return !(n > 0) || t && t.disablePostPlay || (r = i.currentTime / n >= this._getPostPlayThreshold()),
                this._readyToShowPostPlay && r ? (i.isStopped || (this._savedBookmark = i.currentTime),
                    this._shouldShowPostPlay = !0,
                    this._shutdownPlaybackWithCallback(function () {
                        s._enterPostPlay({
                            isUserStop: !0,
                            savedBookmark: s._savedBookmark,
                        });
                    })) : r ? (util.log.error('PostPlayPlayerMixin._onUserExitPlayback: We wanted to show postplay, but were unable to do so due to missing data.'),
                        this._shutdownPlaybackAndExitPlayer()) : (this._logPlaybackExit(e),
                            this._shutdownPlaybackAndExitPlayer()),
                !0;
        },
        _restorePlaybackPoint() {
            var e = this._playbackSettings;
            this._savedBookmark && (e.isAutoPlay = !1,
                e.forceBookmark = this._savedBookmark,
                this.playMovie(e));
        },
        _resetPreLoadPolling() {
            var e; var t; var i = this._player; var n = config.postPlay.preLoad; var r = n.interval; var s = n.allowance; var a = this._getPostPlayThreshold(); var o = this._creditsStartTime; var
                l = util.proxy(function () {
                    (t = i.duration || 0) <= 0 || (e = a * t,
                        o && o < e && (e = o),
                        e -= s,
                        i.currentTime >= e && this._currentState !== this._prePlaybackCard && (this._stopPreLoadPolling(),
                            this._preLoadPostPlay()));
                }, this);
            this._stopPreLoadPolling(),
                this._readyToShowPostPlay || this._preLoadStarted || !this._isPostPlayEnabled() || (this._preLoadTimer = setInterval(l, r));
        },
        _stopPreLoadPolling() {
            clearInterval(this._preLoadTimer),
                this._preLoadTimer = null;
        },
        _resetCreditRollPolling() {
            var e = this._creditsStartTime;
            var t = config.postPlay.threshold.interval;
            var i = util.proxy(function () {
                e && this._player.currentTime >= e && this._readyToShowPostPlay && (this._stopCreditRollPolling(),
                    this._enterPostPlay());
            }, this);
            this._stopCreditRollPolling(),
                e && this._player.currentTime < e && this._isPostPlayEnabled() && (this._creditRollTimerInterval = setInterval(i, t));
        },
        _stopCreditRollPolling() {
            clearInterval(this._creditRollTimerInterval),
                delete this._creditRollTimerInterval;
        },
        _resetAutoPlayInterruptPolling() {
            var e; var t = config.postPlay.autoPlay; var i = t.interval; var
                n = util.proxy(function () {
                    this._player.currentTime >= e && (this._stopAutoPlayInterruptPolling(),
                        this._showAutoPlayInterrupt());
                }, this);
            this._stopAutoPlayInterruptPolling(),
                this._autoPlayCount > t.limit && this._isPostPlayEnabled() && !config.postPlay.interruptDisabled && (e = this._player.currentTime + Math.min(t.interruptThreshold, this._player.duration / 2),
                    this._autoPlayInterruptTimerInterval = setInterval(n, i));
        },
        _stopAutoPlayInterruptPolling() {
            clearInterval(this._autoPlayInterruptTimerInterval),
                delete this._autoPlayInterruptTimerInterval;
        },
        _showAutoPlayInterrupt() {
            this._isAutoPlayInterrupt = !0,
                this._autoPlayCount = 0,
                this._player.pause(),
                this._currentState.isPostPlayCard || this._enterCard(this._getAutoPlayInterruptCard(), {
                    title: model.MovieUtils.getShortTitle(this._contentMetadata.movie),
                    movieUri: this._movieUri,
                });
        },
        _preLoadPostPlay() {
            var e = this;
            var t = this._contentMetadata;
            var i = function () {
                var t = e._playbackSettings;
                return t !== null && void 0 !== t && e._onStack;
            };
            var n = {
                contentMetadata: t,
                episode: this.playbackMovie,
            };
            var r = function () {
                i() && (e._readyToShowPostPlay = !0);
            };
            var s = function () {
                var t;
                i() && (t = e._selectPostPlayCard(n)) && (e._postPlayCardToEnter = t,
                    t.preLoadData(n, r));
            };
            t && (this._preLoadStarted = !0,
                i() && (t.hasEpisodes ? e._loadAdjacentEpisodes(s, function () {
                    util.log.warn('PostPlayPlayerMixin._preLoadPostPlay: Postplay preload failed due to an error.');
                }) : s()));
        },
        _selectPostPlayCard(e) {
            var t = this._retrieveAdjacentEpisode(!0);
            return t ? (e.nextEpisode = t,
                this._hasNextEpisode = !0,
                this._getNextTvCard()) : null;
        },
        _createEpisodesModel: function e(t) {
            return e.base.call(this, t);
        },
        _getCreditsStartTime() {
            var e; let
                t;
            return (e = this.playbackMovie ? this.playbackMovie.interesting_moments : this._contentMetadata.playbackMovie.interesting_moments) && e.type3 && e.type3[0] && (t = e.type3[0].offset) ? t : null;
        },
        _expandCurrentMovie() {
            var e = this._player;
            this._registerActivePlayback(),
                this._enterCard(this._playbackCard, {
                    returnToPlayback: !0,
                }),
                e.setLayout(e.FULL_SCREEN_LAYOUT),
                e.isPaused && e.unpause(),
                this._registerUserInteraction();
        },
        _registerUserInteraction() {
            this._stopAutoPlayInterruptPolling();
        },
        _isPostPlayEnabled() {
            var e = this._playbackSettings;
            return !e.playData || !e.playData.isMdxPlay || e.playData.enablePostPlay;
        },
        _getAutoPlayInterruptCard() {
            var e = this._autoPlayInterruptCard;
            return e || (e = this._autoPlayInterruptCard = a.Binding.get('AUTOPLAY_INTERRUPT_CARD')),
                e;
        },
        _getNextTvCard() {
            var e = this._nextTvCard;
            return e || (e = this._nextTvCard = a.Binding.get('NEXT_TV_CARD')),
                e;
        },
    },
    util.getVideoType = function (e) {
        if (e) {
            switch (e.type) {
                case 'show':
                    return 'shows';
                case 'episode':
                    return 'episodes';
                case 'movies':
                    return 'movies';
                default:
                    return e.type;
            }
        }
    }
    ,
    util.PinSession = util.Class.create({
        activeValues: null,
        get isActive() {
            return this._isActive;
        },
        _isActive: !1,
        _logger: null,
        _activeValuesSubject: null,
        init(e) {
            var t = e.Rx;
            this._storeDependencies(e),
                this._isActive = !1,
                this._activeValuesSubject = new t.BehaviorSubject(this._isActive),
                this.activeValues = this._activeValuesSubject.distinctUntilChanged();
        },
        _storeDependencies(e) {
            this._logger = e.logger;
        },
        activate() {
            this._isActive = !0,
                this._activeValuesSubject.onNext(!0);
        },
        deactivate() {
            this._isActive = !1,
                this._activeValuesSubject.onNext(!1);
        },
    }),
    a.pinSession = new util.PinSession({
        logger: util.log,
        Rx,
    }),
    controller.PinProtectionPlayerMixin = {
        init: function e(t) {
            e.base.call(this, t),
                this._pinPromptCard = t.pinPromptCard;
        },
        _handleFatalError: function e(t) {
            var i; var
                n = t && t.event;
            if (n && n.actionId === 3 && n.code === 5068) {
                return i = this._getVideoInfoForPinPromptCard(this.playbackMovie),
                    void this._enterCard(this._pinPromptCard, i);
            }
            e.base.call(this, t);
        },
        _getVideoInfoForPinPromptCard(e) {
            var t = e.title_series;
            var i = e.id;
            return {
                title: model.MovieUtils.getShortTitle(e, !0),
                videoId: i,
                ancestorVideoId: t && util.getIdFromUri(t.id) || void 0,
                ancestorVideoType: util.getVideoType(e),
            };
        },
        _buildMediaConfigOptions: function e(t) {
            var i = e.base.call(this, t);
            return i.authParams = {
                pinCapableClient: this._playbackSettings.pinCapableClient || a.pinSession.isActive,
            },
                i;
        },
    },
    controller.ContentAdvisoryPlayerMixin = {
        init: function e(t) {
            e.base.call(this, t),
                this._contentAdvisoryConfig = t.contentAdvisoryConfig,
                this._contentAdvisoryModel = t.contentAdvisoryModel,
                this.showAdvisory = !0;
        },
        onExit: function e(t, i, n) {
            e.base.call(this, t, i, n),
                this.showAdvisory = !0,
                this._hideContentAdvisory();
        },
        _onPlaybackStarted: function e(t) {
            var i = this.playbackMovie && this.playbackMovie.id;
            e.base.call(this, t),
                i && this._loadAdvisory(model.MovieUtils.movieId(i));
        },
        _loadAdvisory(e) {
            if (this.showAdvisory && e) {
                this.showAdvisory = !1;
                var t = this;
                var i = this._contentAdvisoryModel;
                this._advisoryDataLoadedSub = i.advisoryDataLoaded.take(1).subscribe(function () {
                    var e = i.advisories && i.advisories[0];
                    e && (t._updateContentAdvisoryView(e),
                        t._contentAdvisoryShowTimeout && (clearTimeout(t._contentAdvisoryShowTimeout),
                            t._contentAdvisoryShowTimeout = null),
                        t._contentAdvisoryShowTimeout = setTimeout(function () {
                            t._showContentAdvisory(0);
                        }, t._contentAdvisoryConfig.delayAfterPlaybackStarts));
                }, function () {
                    util.log.error('Error loading Content Advisory Notification');
                }),
                    this._contentAdvisoryModel.setVideoId(e);
            }
        },
        _updateContentAdvisoryView(e) {
            var t = this.view();
            var i = e.contentAdvisory;
            i ? i.boardId === this.KMRB_RATING_BOARD_ID ? t.updateKMRBContentAdvisory(i.maturityLevel, i.icons) : i.boardId === this.BRAZIL_RATING_BOARD_ID ? t.updateBrazilContentAdvisory(i.maturityLevel, i.advisoryText || '') : i.boardId === this.NICAM_RATING_BOARD_ID ? t.updateNICAMContentAdvisory(i.maturityLevel, i.icons) : i.boardId === this.BBFC_RATING_BOARD_ID ? t.updateBBFCContentAdvisory(i.maturityLevel, i.advisoryText || '') : t.updateContentAdvisory(i.ratingText, i.advisoryText || '') : t.updateGenericAdvisory(e.text);
        },
        _showContentAdvisory(e) {
            var t = this;
            var i = this._contentAdvisoryModel.advisories[e];
            if (!i) return;
            var n = 1e3 * i.displayDurationInSeconds || this._contentAdvisoryConfig.visibleDuration;
            this._contentAdvisoryHideTimeout = setTimeout(function () {
                t._hideContentAdvisory(e);
            }, n),
                this.view().showContentAdvisory();
        },
        _hideContentAdvisory(e) {
            var t;
            if (this.view().hideContentAdvisory(),
                typeof e === 'number' && (t = this._contentAdvisoryModel.advisories[e + 1]),
                t) {
                var i = 1e3 * t.displayTimeGapInSeconds;
                this._updateContentAdvisoryView(t),
                    this._contentAdvisoryShowTimeout = setTimeout(() => {
                        this._showContentAdvisory(e + 1);
                    },
                        i);
            } else {
                this._contentAdvisoryModel.reset(),
                    this._contentAdvisoryShowTimeout && (clearTimeout(this._contentAdvisoryShowTimeout),
                        this._contentAdvisoryShowTimeout = null),
                    this._contentAdvisoryHideTimeout && (clearTimeout(this._contentAdvisoryHideTimeout),
                        this._contentAdvisoryHideTimeout = null),
                    this._advisoryDataLoadedSub && this._advisoryDataLoadedSub.dispose();
            }
        },
        KMRB_RATING_BOARD_ID: 79,
        BRAZIL_RATING_BOARD_ID: 14,
        NICAM_RATING_BOARD_ID: 41,
        BBFC_RATING_BOARD_ID: 20,
    },
    controller.SkipIntroPlayerMixin = {
        _skipIntroNotificationDurationMs: 8e3,
        init: function e(t) {
            e.base.call(this, t),
                this._skipIntroCard = t.skipIntroCard,
                this.skipIntroUpdated = new Rx.Subject(),
                this._skipIntroWindow = void 0,
                this._shouldShowSkipIntroButtonOnController = !1,
                this._skipContentModel = t.skipContentModel;
        },
        onExit: function e(t, i, n) {
            e.base.call(this, t, i, n),
                this._skipContentModel.reset(),
                this._skipContentDataLoadedSub && this._skipContentDataLoadedSub.dispose();
        },
        skipIntro() {
            this._skipIntroWindow && (this._player.isPlaying || this._player.isPaused) && (this.setCurrentTimeAndPlay(Math.floor(this._skipIntroWindow.endPts / 1e3)),
                this._shouldShowSkipIntroButtonOnController = !1,
                this._hideSkipIntro());
        },
        _onPlaybackStarted: function e(t) {
            var i = this.playbackMovie && this.playbackMovie.id;
            e.base.call(this, t),
                i && this._loadSkipContent(model.MovieUtils.movieId(i));
        },
        _loadSkipContent(e) {
            if (e) {
                var t = this._skipContentModel;
                this._skipContentDataLoadedSub = t.skipContentLoaded.take(1).subscribe(() => { },
                    () => {
                        util.log.error('Error loading Skip Content');
                    }),
                    t.setVideoId(e);
            }
        },
        get _TEXT() {
            return config.text.playback.skipIntro;
        },
        get shouldShowSkipIntroButtonOnController() {
            return !!this._shouldShowSkipIntroButtonOnController;
        },
        get skipIntroText() {
            if (this._skipIntroWindow) {
                var e = this._TEXT;
                return this._skipIntroWindow.label ? this._skipIntroWindow.label : this._skipIntroWindow.type === 'recap' ? e.skipRecap : e.skipIntro;
            }
        },
        get skipIntroType() {
            if (this._skipIntroWindow) { return this._skipIntroWindow.type === 'recap' ? 'RECAP' : 'INTRO'; }
        },
        _addPlayerHandlers: function e() {
            e.base.call(this),
                this._player.swim.subscribe(this, this._onSwim);
        },
        _onPlayerUpdatePts: function e(t) {
            e.base.call(this, t),
                (this._skipIntroEnabledOnController() || a.touchControlsSupported) && this._updateSkipIntroWindow(t.pts);
        },
        _onSwim(e) {
            this._skipIntroWindow && this._updateSkipIntroWindow(e.currentPts);
        },
        _updateSkipIntroWindow(e) {
            var t = this._skipIntroWindowForPts(e);
            this._skipIntroWindowsDeepEqual(this._skipIntroWindow, t) || (t ? this._enterSkipIntro(t) : this._exitSkipIntro());
        },
        _skipIntroWindowForPts(e) {
            var t = this.playbackMovie;
            var i = (this._skipContentModel || {}).skipSegments || [];
            var n = null;
            if (i.length > 0 && (i.forEach((t) => {
                var { start: i, end: r, type: s, label: a } = t;
                this._isValidSkipIntroOffset(i, r) && this._inSkipIntroWindow(i, r, e) && (n = {
                    type: s,
                    label: a,
                    startPts: i,
                    endPts: r,
                });
            }),
                n)) return n;
            if (t && t.intro_offsets) {
                var r = t.intro_offsets;
                startCreditOffset = r.startCreditOffset,
                    endCreditOffset = r.endCreditOffset,
                    startRecapOffset = r.startRecapOffset,
                    endRecapOffset = r.endRecapOffset;
                var s = this._isValidSkipIntroOffset(startCreditOffset, endCreditOffset) && this._inSkipIntroWindow(startCreditOffset, endCreditOffset, e);
                var a = this._isValidSkipIntroOffset(startRecapOffset, endRecapOffset) && this._inSkipIntroWindow(startRecapOffset, endRecapOffset, e);
                if (s) {
                    return {
                        type: 'credits',
                        startPts: startCreditOffset,
                        endPts: endCreditOffset,
                    };
                }
                if (a) {
                    return {
                        type: 'recap',
                        startPts: startRecapOffset,
                        endPts: endRecapOffset,
                    };
                }
            }
        },
        _isValidSkipIntroOffset(e, t) {
            return typeof e === 'number' && typeof t === 'number' && e >= 0 && t > 0 && e < t;
        },
        _skipIntroEnabledOnController() {
            return this._playbackSettings && this._playbackSettings.enableSkipIntro;
        },
        _inSkipIntroWindow(e, t, i) {
            return typeof i === 'number' && i >= e && i <= t;
        },
        _skipIntroWindowsDeepEqual(e, t) {
            return !e && !t || !(!e || !t) && (e.type === t.type && e.startPts === t.startPts && e.endPts === t.endPts);
        },
        _cleanupPlayback: function e(t, i, n) {
            this._exitSkipIntro(),
                e.base.call(this);
        },
        _enterSkipIntro(e) {
            var t = this._TEXT;
            var i = this._playbackSettings && this._playbackSettings.controllerName;
            var n = t.yourDevice;
            this._skipIntroWindow = e,
                this._shouldShowSkipIntroButtonOnController = !0,
                this.skipIntroUpdated.onNext(e),
                i && (n = util.textFormat(t.onDeviceName, {
                    deviceName: i,
                })),
                this.view().enterSkipIntroWindow({
                    skipText: this.skipIntroText,
                    controllerNameText: n,
                }),
                setTimeout(function () {
                    this._hideSkipIntro();
                }
                    .bind(this), this._skipIntroNotificationDurationMs);
        },
        _exitSkipIntro() {
            this.view().exitSkipIntroWindow(),
                this._skipIntroWindow = void 0,
                this._shouldShowSkipIntroButtonOnController = !1,
                this.skipIntroUpdated.onNext({});
        },
        _hideSkipIntro() {
            this.view().hideSkipIntro();
        },
    },
    controller.PlayerCard.mixin(controller.DirectToPlaybackPlayerMixin).mixin(controller.PostPlayPlayerMixin).mixin(controller.PinProtectionPlayerMixin).mixin(controller.ContentAdvisoryPlayerMixin)
        .mixin(controller.SkipIntroPlayerMixin),
    model.MovieUtils.formatRuntime = function (e, t, i) {
        var n; var r; var s; var a; var o = Math.floor; var
            l = config.text.movie;
        return typeof e === 'number' && (s = o(e - 3600 * (n = o(e / 3600)) - 60 * (r = o(e / 60 - 60 * n))),
            a = 60 * n + r),
            t = t || l.formatRuntime,
            i = i || l.formatTotalMinutes,
            util.textFormat(a > 60 ? t : i, {
                hours: n,
                minutes: r,
                seconds: s,
                totalminutes: a,
                runtime: e,
            });
    }
    ,
    model.MovieUtils.formatRuntimePadded = function (e, t) {
        return t = t || config.text.movie.formatRuntimePadded,
            model.MovieUtils.formatRuntime(e, t, t);
    }
    ,
    util.NumberFormatting = {
        _BITRATE_UNITS: ['bps', 'Kbps', 'Mbps', 'Gbps', 'Tbps', 'Pbps'],
        _BITRATE_BASE: 1024,
        _BITRATE_PIVOTS: [[1075200, 1792e3], [3686400, 4915200]],
        _BITRATE_MAPPING: [['Low', 'Medium', 'High'], ['Medium', 'High', 'X-High']],
        formatBitrate(e) {
            for (var t = 0, i = this._BITRATE_BASE; e > i;) {
                e /= i,
                    t++;
            }
            return `${e.toFixed(1)} ${this._BITRATE_UNITS[t] || ''}`;
        },
        mapBitrateToLevel(e, t) {
            for (var i = t ? 1 : 0, n = this._BITRATE_PIVOTS[i], r = n.length, s = 0, a = 0; a < r && e >= n[a]; a++) s++;
            return this._BITRATE_MAPPING[i][s];
        },
    },
    util.throttle = function (e, t, i) {
        var n;
        return i = i || null,
            function () {
                var r = util.Date.now();
                var s = null;
                return !!n && r - n < t || (n = r,
                    s = e.apply(i, arguments)),
                    s;
            };
    }
    ,
    view.ScrubBarView = util.Class.create({
        _formatRuntime: model.MovieUtils.formatRuntime,
        init(e, config) {
            var t = this._wrapperEl = document.getElementById(e);
            this._config = config,
                this._currentTimeEl = t.querySelector('.playback-scrubber-time-elapsed'),
                this._remainingEl = t.querySelector('.playback-scrubber-time-left'),
                this._startProgressEl = t.querySelector('.playback-progress-bar-inner-start'),
                this._middleProgressEl = t.querySelector('.playback-progress-bar-inner-middle'),
                this._endProgressEl = t.querySelector('.playback-progress-bar-inner-end'),
                this._scrubberEl = t.querySelector('.playback-progress-bar-scrubber'),
                this._boundOnTouchStart = this._onTouchStart.bind(this),
                this._scrubberEl.addEventListener('touchstart', this._boundOnTouchStart),
                this._throttledTouchMove = util.throttle(this._onTouchMove, 10, this),
                document.body.addEventListener('touchmove', this._throttledTouchMove),
                this._boundOnTouchEnd = this._onTouchEnd.bind(this),
                this._scrubberEl.addEventListener('touchend', this._boundOnTouchEnd),
                this.movingScrubber = !1,
                this.seekPercentage = null;
        },
        setDuration(e) {
            this._duration = e;
        },
        setCurrentTime(e) {
            if (!this.movingScrubber) {
                var t = this._duration;
                var i = t ? e / t : 0;
                var n = config.text.playback.scrubBar.formatRuntimeWithSeconds;
                var r = config.text.playback.scrubBar.formatRuntimeLessThenHour;
                var s = Math.round(1e3 * i) / 10;
                var a = 100 - s;
                this._remainingEl.textContent = this._formatRuntime(t - e, n, r),
                    this._startProgressEl.style.width = `${s}%`,
                    this._endProgressEl.style.width = `${a}%`;
            }
        },
        _onTouchStart(e) {
            e.stopPropagation(),
                this.movingScrubber = !0;
        },
        _onTouchMove(e2) {
            if (!this.movingScrubber) return;
            e2.stopPropagation();
            var { touches: t } = e;
            if (t.length === 1) {
                var e = t[0].screenX - this._wrapperEl.offsetLeft;
                (e -= this._scrubberEl.offsetWidth / 2) < 0 && (e = 0);
                var i = this._startProgressEl.offsetWidth + this._endProgressEl.offsetWidth;
                e > i && (e = i),
                    this.seekPercentage = e / i * 100;
                var n = 100 - this.seekPercentage;
                this._startProgressEl.style.width = `${this.seekPercentage}%`,
                    this._endProgressEl.style.width = `${n}%`;
            }
        },
        _onTouchEnd(e) {
            e.stopPropagation(),
                this.movingScrubber = !1;
            var t = this._duration * (this.seekPercentage / 100);
            this.seekPercentage = null,
                state.raiseEvent('player.seek', t);
        },
        destroy() {
            this._scrubberEl.removeEventListener('touchstart', this._boundOnTouchStart),
                document.body.removeEventListener('touchmove', this._throttledTouchMove),
                this._scrubberEl.removeEventListener('touchend', this._boundOnTouchEnd);
        },
    }),
    view.contentAdvisory = {},
    view.contentAdvisory.KMBRAdvisoryMapping = {
        1009: 'harmful-themes',
        1010: 'harmful-themes',
        1011: 'harmful-themes',
        1012: 'harmful-themes',
        1013: 'lewdness',
        1014: 'lewdness',
        1015: 'lewdness',
        1016: 'lewdness',
        1017: 'violence',
        1018: 'violence',
        1019: 'violence',
        1020: 'violence',
        1021: 'profanity',
        1022: 'profanity',
        1023: 'profanity',
        1024: 'profanity',
        1025: 'fear',
        1026: 'fear',
        1027: 'fear',
        1028: 'fear',
        1029: 'drugs',
        1030: 'drugs',
        1031: 'drugs',
        1032: 'drugs',
        1033: 'immatatable-behaviors',
        1034: 'immatatable-behaviors',
        1035: 'immatatable-behaviors',
        1036: 'immatatable-behaviors',
    },
    view.contentAdvisory.NICAMAdvisoryMapping = {
        707: 'violence',
        708: 'fear-anxiety',
        709: 'sex',
        710: 'discrimination',
        711: 'drug-or-alcohol',
        712: 'profanity',
    },
    view.calculateVideoDimensions = function (e, t, i, n) {
        var r = e / t;
        var s; var a = e; var o = t; var l = !1; var u = !1; let
            c = 1;
        n && (i > (s = 1 / n) ? l = !0 : i < s && (u = !0));
        var d = s || i;
        return r > d ? (a = t * i,
            u && s && (a = (o *= c = 1 / i / (1 / s)) * i)) : d > r ? (o = e * (1 / i),
                l && s && (o = (a *= c = i / s) * (1 / i))) : u && s ? a = (o *= c = 1 / i / (1 / s)) * i : l && s && (o = (a *= c = i / s) * (1 / i)),
        {
            zoom: c,
            width: a,
            height: o,
        };
    }
    ,
    view.EurekaPlayerView = view.AView.extend({
        _visibleClassName: 'playback-focus',
        get _TEXT() {
            return config.text.playback.infoDisplay;
        },
        init: function e(t) {
            e.base.call(this, 'EurekaPlayerView'),
                this._videoTimeEl = document.getElementById('playback-info-videoTime'),
                this._videoDebugEls = [document.getElementById('playback-info-video-instant-bitrate'), document.getElementById('playback-info-video-target-bitrate')],
                this._videoInfoEl = document.getElementById('playback-info-video-target-bitrate-mapped'),
                this._scrubBar = new view.ScrubBarView('playback-menu', t),
                this._skipIntroEl = document.getElementById('skip-intro'),
                this._skipIntroActionEl = document.getElementById('skip-intro-action'),
                this._skipIntroTargetEl = document.getElementById('skip-intro-target'),
                this.boundOnTouchPlayPause = this._onTouchPlayPause.bind(this),
                document.getElementById('touch-play-pause').addEventListener('touchend', this.boundOnTouchPlayPause),
                document.getElementById('touch-seek-forward').addEventListener('touchend', this._onTouchSeekForward),
                document.getElementById('touch-seek-forward').addEventListener('touchstart', this._onTouchSeekForwardStart),
                document.getElementById('touch-seek-backwards').addEventListener('touchend', this._onTouchSeekBackwards),
                document.getElementById('touch-seek-backwards').addEventListener('touchstart', this._onTouchSeekBackwardsStart),
                this._subtitlesEl = document.getElementById('mppb-subtitles'),
                this._subtitlesEl.addEventListener('touchend', this._onTouchToggleSubtitles),
                this.boundOnTouch = this._onTouch.bind(this),
                document.addEventListener('touchend', this.boundOnTouch),
                document.getElementById('skip-intro').addEventListener('touchend', this._onTouchSkipIntro),
                this._contentAdvisoryDiv = document.getElementById('contentAdvisory'),
                this.touchControlsTimeout = null;
        },
        updateVideoDimensions() {
            var e = window.innerWidth;
            var t = window.innerHeight;
            var { x: i, y: n } = nrdp.media.displayAspectRatio;
            var r = i / n;
            var s = nrdp.media.croppedAspectRatio;
            var { zoom: a, width: o, height: l } = view.calculateVideoDimensions(e, t, r, s);
            var u = nrdp.media.rootElement;
            var c = nrdp.media.videoElement;
            u && c && (c.style['object-fit'] = 'fill',
                u.style.margin = `-${100 * (a - 1)}%`,
                u.style.width = `${o}px`,
                u.style.height = `${l}px`);
        },
        updatePts(e) {
            (document.body.classList.contains('show-touch-controls') || document.body.classList.contains('player-paused')) && this._scrubBar.setCurrentTime(e);
        },
        updateScrubber(e, t) {
            var i = this._scrubBar;
            i.setDuration(t),
                i.setCurrentTime(e);
        },
        showPauseOverlay(e, t) {
            this.updateScrubber(e, t),
                document.body.classList.add('player-paused');
        },
        hidePauseOverlay() {
            document.body.classList.remove('player-paused');
        },
        enterSkipIntroWindow(e) {
            this._skipIntroActionEl.innerHTML = e.skipText,
                this._skipIntroTargetEl.innerHTML = e.controllerNameText,
                document.body.classList.add('skip-intro-active'),
                document.body.classList.remove('skip-intro-hidden');
        },
        exitSkipIntroWindow() {
            document.body.classList.remove('skip-intro-active'),
                document.body.classList.remove('skip-intro-hidden');
        },
        hideSkipIntro() {
            document.body.classList.contains('skip-intro-active') && document.body.classList.add('skip-intro-hidden');
        },
        hideTouchControls() {
            this._hideTouchControls();
        },
        _onTouch(e) {
            document.body.classList.contains('show-touch-controls') ? this._hideTouchControls() : this._showTouchControls();
        },
        _showTouchControls() {
            document.body.classList.add('show-touch-controls'),
                clearTimeout(this.touchControlsTimeout),
                this.touchControlsTimeout = setTimeout(() => {
                    this._hideTouchControls();
                },
                    7e3);
        },
        _hideTouchControls() {
            this._scrubBar.movingScrubber ? this._showTouchControls() : document.body.classList.remove('show-touch-controls');
        },
        _onTouchPlayPause(e) {
            e.stopPropagation(),
                this._showTouchControls(),
                state.raiseEvent('player.togglePause');
        },
        _onTouchSeekForwardStart(e) {
            document.getElementById('touch-seek-forward').classList.add('touchstart');
        },
        _onTouchSeekForward(e) {
            e.stopPropagation(),
                state.raiseEvent('player.skipForward'),
                document.getElementById('touch-seek-forward').classList.remove('touchstart');
        },
        _onTouchSeekBackwardsStart(e) {
            document.getElementById('touch-seek-backwards').classList.add('touchstart');
        },
        _onTouchSeekBackwards(e) {
            e.stopPropagation(),
                state.raiseEvent('player.skipBack'),
                document.getElementById('touch-seek-backwards').classList.remove('touchstart');
        },
        _onTouchSkipIntro(e) {
            e.stopPropagation(),
                state.raiseEvent('player.skipIntro');
        },
        _onTouchToggleSubtitles(e) {
            e.stopPropagation(),
                state.raiseEvent('player.toggleSubtitles');
        },
        subtitlesDisabled() {
            this._subtitlesEl.classList.remove('enabled');
        },
        subtitlesEnabled() {
            this._subtitlesEl.classList.add('enabled');
        },
        update: e,
        setVideoTimeInfo(e, t, i) {
            var n = this._TEXT;
            var r = this._getPaddedRuntime;
            var s = e ? util.textFormat(n.videoTime, {
                current: r(e),
                total: r(t),
            }) : '';
            var a = i ? util.textFormat(n.videoBitrate, {
                bitrate: util.NumberFormatting.formatBitrate(i),
            }) : '';
            this._videoTimeEl.innerHTML = s,
                this._videoDebugEls[0].innerHTML = a;
        },
        setVideoInfo(e, t, i, n, r) {
            if (!e) {
                return this._videoInfoEl.innerHTML = '',
                    void (this._videoDebugEls[1].innerHTML = '');
            }
            var s = this._TEXT;
            var a = model.CurrentUser.isTestAccount;
            var o = i ? 'superHd' : t ? 'hd' : 'sd';
            var l = util.NumberFormatting.formatBitrate(e);
            var u; let
                c = s.fidelity[o];
            a ? (c = util.textFormat(s.videoResolution, {
                videoWidth: n,
                videoHeight: r,
            }),
                u = util.textFormat(s.videoBitrate, {
                    bitrate: l,
                    fidelity: c,
                })) : u = util.textFormat(s.videoSimpleResolution, {
                    videoHeight: r,
                    fidelity: c,
                }),
                this._videoInfoEl.innerHTML = u;
        },
        setAudioInfo(e) {
            var t = this._TEXT;
            var i; let
                n = '';
            e && (i = e.channels,
                n = util.textFormat(t.audioInfo, {
                    language: e.languageDescription,
                    description: t.channels[i] ? t.channels[i] : util.textFormat(t.channelInfo, {
                        channels: i,
                    }),
                    type: e.trackType,
                })),
                document.getElementById('playback-info-audio').innerHTML = n;
        },
        setTimedTextInfo(e) {
            document.getElementById('playback-info-timedText').innerHTML = e ? util.textFormat(this._TEXT.timedTextInfo, {
                language: e.languageDescription,
                type: e.trackType,
            }) : '';
        },
        clearMetadata() {
            this.setVideoInfo(null),
                this.setVideoTimeInfo(null, null),
                this.setAudioInfo(null),
                this.setTimedTextInfo(null);
        },
        updateGenericAdvisory(e) {
            document.getElementById('rating').innerHTML = '',
                document.getElementById('advisories').innerHTML = '',
                document.getElementById('playback-advisory').innerHTML = e;
        },
        updateContentAdvisory(e, t) {
            var i = document.getElementById('rating');
            i.innerHTML = '';
            var n = document.createElement('span');
            n.classList.add('text'),
                n.innerHTML = e,
                i.appendChild(n),
                document.getElementById('advisories').innerHTML = t,
                document.getElementById('playback-advisory').innerHTML = '';
        },
        updateKMRBContentAdvisory(e, t) {
            var i = document.getElementById('rating');
            i.innerHTML = '',
                document.getElementById('advisories').innerHTML = '',
                i.insertAdjacentHTML('beforeend', this._svgIconTag(`maturity-rating-KR-KMRB-${e}`, 'maturity-rating-kmrb')),
                document.getElementById('playback-advisory').innerHTML = '',
                t.forEach((e) => {
                    var { id: t, level: n } = e;
                    var r = view.contentAdvisory.KMBRAdvisoryMapping[t];
                    var s = document.createElement('span');
                    s.classList.add('advisory-kmrb'),
                        s.insertAdjacentHTML('beforeend', this._svgIconTag(`maturity-advisory-KR-KMRB-${r}`));
                    var a = document.createElement('span');
                    a.classList.add('text'),
                        a.innerText = n,
                        s.appendChild(a),
                        i.appendChild(s);
                });
        },
        updateBrazilContentAdvisory(e, t) {
            document.getElementById('playback-advisory').innerHTML = '',
                document.getElementById('advisories').innerHTML = '';
            var i = document.getElementById('rating');
            i.innerHTML = '';
            var n = document.createElement('span');
            n.classList.add('label'),
                n.innerText = config.text.contentAdvisory.rating,
                i.appendChild(n),
                i.insertAdjacentHTML('beforeend', this._svgIconTag(`maturity-rating-BR-Brasil-${e}`, 'maturity-rating-br'));
            var r = document.createElement('span');
            r.classList.add('advisories'),
                r.innerText = t,
                i.appendChild(r);
        },
        updateNICAMContentAdvisory(e, t) {
            document.getElementById('playback-advisory').innerHTML = '';
            var i = document.getElementById('rating');
            i.innerHTML = '',
                document.getElementById('advisories').innerHTML = '';
            var n = document.createElement('span');
            n.classList.add('label'),
                n.innerText = config.text.contentAdvisory.rating,
                i.appendChild(n),
                i.insertAdjacentHTML('beforeend', this._svgIconTag(`maturity-rating-NICAM-${e}`, 'icon-nicam maturity')),
                t.forEach((e) => {
                    var { id: t } = e;
                    var n = view.contentAdvisory.NICAMAdvisoryMapping[t];
                    i.insertAdjacentHTML('beforeend', this._svgIconTag(`maturity-advisory-NICAM-${n}`, 'icon-nicam'));
                });
        },
        updateBBFCContentAdvisory(e, t) {
            document.getElementById('playback-advisory').innerHTML = '',
                document.getElementById('advisories').innerHTML = '';
            var i = document.getElementById('rating');
            i.innerHTML = '';
            var n = document.createElement('span');
            n.classList.add('label'),
                n.innerText = config.text.contentAdvisory.rating.toUpperCase(),
                i.appendChild(n),
                i.insertAdjacentHTML('beforeend', this._svgIconTag(`maturity-rating-BBFC-${e}`, 'maturity-rating-gb'));
            var r = document.createElement('span');
            r.classList.add('advisories'),
                r.innerText = t,
                i.appendChild(r);
        },
        _svgIconTag(e, t) {
            return `<svg class="svg-icon ${t}" focusable="true"><use filter="" xlink:href="#${e}"></use></svg>`;
        },
        showContentAdvisory() {
            var e = this._contentAdvisoryDiv;
            e && e.style && (e.classList.remove('exit'),
                e.classList.add('enter'));
        },
        hideContentAdvisory() {
            var e = this._contentAdvisoryDiv;
            e && e.style && (e.classList.remove('enter'),
                e.classList.add('exit'));
        },
        _repositionAdvisoryView() {
            var e = document.getElementsByTagName('video');
            var t = e && e.length > 0 && e[0];
            var i = this._contentAdvisoryDiv;
            t && t.parentNode && i && t.parentNode.insertBefore(i, t.nextSibling);
        },
        _render: e,
        _unbindEvents() {
            document.getElementById('touch-play-pause').removeEventListener('touchend', this.boundOnTouchPlayPause),
                document.getElementById('touch-seek-forward').removeEventListener('touchend', this._onTouchSeekForward),
                document.getElementById('touch-seek-backwards').removeEventListener('touchend', this._onTouchSeekBackwards),
                document.getElementById('touch-seek-forward').removeEventListener('touchstart', this._onTouchSeekForwardStart),
                document.getElementById('touch-seek-backwards').removeEventListener('touchstart', this._onTouchSeekBackwardsStart),
                this._subtitlesEl.removeEventListener('touchend', this._onTouchToggleSubtitles),
                document.removeEventListener('touchend', this.boundOnTouch),
                document.getElementById('skip-intro').removeEventListener('touchend', this._onTouchSkipIntro);
        },
        hide: function e() {
            e.base.call(this),
                this.hidePauseOverlay(),
                this.clearMetadata();
        },
        destroy() {
            util.log.debug('PlayerView.destroy'),
                this.clearMetadata(),
                this._unbindEvents(),
                this._scrubBar.destroy();
        },
        _getPaddedRuntime: model.MovieUtils.formatRuntimePadded,
    }),
    config.playbackScrubberView = {
        indicatorPosition: {
            x: 76,
            y: 7,
        },
        progressBar: {
            width: 978,
            height: 4,
            start: 0,
            total: 978,
            elementsMaxSize: {
                start: 7,
                middle: 850,
                end: 7,
            },
        },
        currentTimeMarker: {
            start: 126,
            total: 392,
        },
        seekTimeMarker: {
            start: 109,
            total: 392,
        },
    },
    util.EventObservable = util.Class.create({
        init() {
            this._eventListeners = {};
        },
        addEventListener(e, t) {
            t && (this._eventListeners[e] || (this._eventListeners[e] = []),
                this._eventListeners[e].push(t));
        },
        removeEventListener(e, t) {
            if (t) {
                var i = this._eventListeners[e];
                if (i) {
                    var n = i.indexOf(t);
                    n >= 0 && (i.length == 1 ? delete this._eventListeners[e] : this._eventListeners[e].splice(n, 1));
                }
            }
        },
        hasEventListener(e) {
            return this._eventListeners[e] && this._eventListeners[e].length;
        },
        sendEvent(e, t) {
            if (this._eventListeners[e]) {
                for (var i = this._eventListeners[e].slice(0), n = 0; n < i.length; n++) {
                    var r = i[n];
                    r && r(t);
                }
            }
        },
    }),
    o.PlaybackState = util.Class.create({
        init(e) {
            this._playPending = !1,
                this._pausePending = !1,
                this._closePending = !1,
                this._mediaConfig = null,
                this._attachedHandlers = [],
                this._adapter = e,
                this._media = e.media,
                this._eventObservable = new util.EventObservable(),
                this._attachMediaHandlers(),
                this._synchronizeState();
        },
        open(e, t) {
            this._mediaConfig = e,
                this._seekToTime = t,
                this._state == this._STATES.CLOSED ? this._beginOpening() : this._close();
        },
        play() {
            var e = this._media;
            var t = this._state;
            var i = this._STATES;
            if (e && this._mediaConfig) {
                if (t === i.LOADING || t === i.OPENING || t === i.PAUSING || t === i.CLOSING || t === i.CLOSED || t === i.LOADFAIL) {
                    return this._playPending = !0,
                        void (this._pausePending = !1);
                }
                if (this._playPending = !1,
                    this._pausePending = !1,
                    t !== i.PLAYING && t !== i.SEEKING && t !== i.STOPPING && t !== i.SWIMMING && t !== i.BUFFERING && t !== i.REBUFFERING && t !== i.SWIMBUFFERING) {
                    return t === i.PAUSED ? void 0 === this._seekToTime ? (this._setState(i.SEEKING),
                        void e.unpause()) : (this._setState(i.STOPPING),
                            void e.stop()) : t == i.ENDED ? (void 0 == this._seekToTime && (this._seekToTime = 0),
                                this._setState(i.STOPPING),
                                void e.stop()) : t == i.LOADED ? (this._handlePlayInitiated(),
                                    void e.play(this._currentKnownTime)) : void util.log.error('PlaybackState.play() with unknown playback state!');
                }
            } else this._sendErrorEvent();
        },
        pause() {
            var e = this._state;
            var t = this._STATES;
            this._playPending = !1,
                e === t.OPENING || e === t.PLAYING || e === t.BUFFERING || e === t.REBUFFERING || e === t.SWIMBUFFERING ? (this._currentKnownTime = this.currentTime,
                    this._setState(t.PAUSING),
                    this._pausePending = !1,
                    this._media.pause()) : e !== t.STOPPING && e !== t.SEEKING && e !== t.SWIMMING || (this._pausePending = !0);
        },
        set currentTime(e) {
            this._state;
            this._adapter.supportSwim ? this._attemptAbsoluteSwim(e) : this._stopAndRestartAtNewTime(e);
        },
        skipPlayback(e) {
            var t = this._state;
            var i = this._STATES;
            var n = config.playback;
            t === i.SWIMMING || (!this._adapter.supportSwim || this._closePending || t === i.CLOSED || t === i.CLOSING || t === i.LOADFAIL || t === i.OPENING || t === i.LOADING ? this._sendMediaEvent('swimfail') : (this._currentKnownTime = this.currentTime,
                this._seekToTime = this.currentTime + e,
                this._setState(i.SWIMMING),
                this._media.swim(e, !1, n.skipFuzziness, !0)));
        },
        close() {
            this._mediaConfig = null,
                this._close();
        },
        get currentTime() {
            return this._state === this._STATES.PLAYING ? this._adapter.getMonotonicTime() - this._imaginaryTimeAtPts0 : void 0 != this._seekToTime ? this._seekToTime : this._currentKnownTime;
        },
        get isLoading() {
            var e = this._state;
            var t = this._STATES;
            return e === t.SEEKING || e === t.LOADING || e === t.LOADED || e === t.OPENED || e === t.BUFFERING || e === t.REBUFFERING || e === t.SWIMBUFFERING;
        },
        get seeking() {
            var e = this._state;
            var t = this._STATES;
            return e === t.SEEKING || e === t.STOPPING || e === t.SWIMMING;
        },
        get swimming() {
            return this._state === this._STATES.SWIMMING;
        },
        get paused() {
            var e = this._state;
            var t = this._STATES;
            return e === t.PAUSED || e === t.PAUSING || this._pausePending;
        },
        get ended() {
            return this._state === this._STATES.ENDED;
        },
        get isInPlayback() {
            var e = this._state;
            var t = this._STATES;
            return e === t.PLAYING || e === t.PAUSING || e === t.PAUSED;
        },
        get hasMetadata() {
            var e = this._state;
            var t = this._STATES;
            return !(e === t.CLOSED || e === t.OPENING || e === t.LOADING || e === t.LOADFAIL || e === t.CLOSING);
        },
        get hasSomethingToPlayback() {
            return this._mediaConfig !== null;
        },
        get isPlaying() {
            return !(!this.isInPlayback || this.seeking != 0 || this.paused != 0 || this.ended != 0);
        },
        get ignoreActionId1() {
            return this._state === this._STATES.CLOSING;
        },
        addEventListener(e, t) {
            this._eventObservable.addEventListener(e, t);
        },
        removeEventListener(e, t) {
            this._eventObservable.removeEventListener(e, t);
        },
        _STATES: {
            CLOSED: 'closed',
            OPENING: 'opening',
            LOADING: 'loading',
            LOADFAIL: 'loadfail',
            LOADED: 'loaded',
            STOPPING: 'stopping',
            SEEKING: 'seeking',
            SWIMMING: 'swimming',
            SWIMBUFFERING: 'swimbuffering',
            BUFFERING: 'buffering',
            REBUFFERING: 'rebuffering',
            PLAYING: 'playing',
            PAUSING: 'pausing',
            PAUSED: 'paused',
            ENDED: 'ended',
            CLOSING: 'closing',
        },
        _setState(e) {
            this._state = e;
        },
        _handlePlayInitiated() {
            this._currentKnownTime = this._seekToTime || 0,
                this._seekToTime = void 0,
                this._setState(this._STATES.SEEKING),
                this._sendMediaEvent('seeking');
        },
        _beginOpening() {
            var e = this._state;
            var t = this._STATES;
            var i = this._media;
            var n = this._mediaConfig;
            var r = n && String(n.viewableId);
            var s = n && n.qcPackageId && String(n.qcPackageId);
            var a = n && n.qcVideoProfiles && String(n.qcVideoProfiles);
            var o = n && String(n.trackingId);
            var l = n && n.playbackType || i.STANDARD_PLAYBACK;
            var u = n && n.enable3D ? '3D' : 'default';
            var c = n && n.audioTrack && n.audioTrack.id || 'DEFAULT';
            var d = n && n.timedTextTrack && n.timedTextTrack.id || 'DEFAULT';
            var h = {
                movieId: r,
                trackerId: o,
                params: {
                    movieId: r,
                    trackerId: o,
                    videoType: u,
                    playContext: n && n.playContext,
                },
                authParams: n && n.authParams,
                vuiCommand: n && n.vuiCommand,
                videoType: u,
                playbackType: l,
                pts: this._seekToTime || 0,
                audioTrack: c,
                subtitleTrack: d,
                uiLabel: n && n.uiLabel,
                uiPlayStartTime: n && n.uiPlayStartTime,
            };
            util.Class.mixin(h.params, n && n.licenseParams),
                e !== t.LOADING && e !== t.OPENING && (e !== t.LOADFAIL ? (this._setState(t.OPENING),
                    s && (window.nrdp.setConfigData('cadmium', {
                        qcEnabled: !0,
                        qcPackageId: s,
                    }),
                        a && window.nrdp.setConfigData('cadmium', {
                            videoProfiles: a,
                        })),
                    n && r ? i.openAndPlay(h) : (this._setState(t.CLOSED),
                        this._sendErrorEvent())) : this._close());
        },
        _close() {
            var e = this._state;
            var t = this._STATES;
            e !== t.CLOSED && e !== t.CLOSING && (e != t.OPENING ? (this._setState(t.CLOSING),
                this._currentKnownTime = 0,
                this._pausePending = !1,
                this._playPending = !1,
                this._closePending = !1,
                this._seekToTime = void 0,
                this._media.close()) : this._closePending = !0);
        },
        _startTimeTimer() {
            var e = this;
            this._timerID || (this._timerID = setInterval(function () {
                if (e._state != e._STATES.PLAYING || nrdp._isError) {
                    return clearInterval(e._timerID),
                        e._timerID = void 0,
                        void (e._media.throttled = !1);
                }
            }, 1e3));
        },
        _attemptAbsoluteSwim(e) {
            var t = this._state;
            var i = this._STATES;
            var n = config.playback;
            t === i.SWIMMING || t === i.SWIMBUFFERING ? this._pendingSwim = e : t === i.CLOSED || t === i.CLOSING || t === i.LOADFAIL || t === i.OPENING || t === i.LOADING || this._closePending ? this._seekToTime = e : (this._currentKnownTime = this.currentTime,
                this._pendingSwim = void 0,
                this._seekToTime = e,
                this._setState(i.SWIMMING),
                this._media.swim(e, !0, n.skipFuzziness, !0));
        },
        _stopAndRestartAtNewTime(e) {
            var t = this._state;
            var i = this._STATES;
            this._seekToTime = e,
                t !== i.PLAYING && t !== i.BUFFERING && t !== i.REBUFFERING && t !== i.SWIMBUFFERING || (this._currentKnownTime = this.currentTime,
                    this._setState(i.STOPPING),
                    this._media.stop());
        },
        _mediaEventHandlers: {
            opencomplete(e) {
                var t = this._state;
                var i = this._STATES;
                t != i.CLOSING && (e.playing ? (this._playPending = !1,
                    this._handlePlayInitiated()) : this._setState(i.LOADED),
                    this._sendLoadedMetadataEvent(e),
                    this._playPending && !e.playing && this.play());
            },
            endofstream(e) {
                this._currentKnownTime = this._media.duration,
                    this._setState(this._STATES.ENDED),
                    this._sendMediaEvent('ended');
            },
            underflow(e) {
                this._sendProgressEvent('stalled', 0, 0);
            },
            buffering(e) {
                var t = this._state;
                var i = this._STATES;
                t === i.SWIMMING ? e.percentage < 100 && (this._setState(i.SWIMBUFFERING),
                    this._sendMediaEvent('buffering')) : t === i.SEEKING ? (this._setState(i.BUFFERING),
                        this._sendMediaEvent('buffering'),
                        void 0 != this._seekToTime ? this.currentTime = this._seekToTime : this._pausePending && this.pause()) : t === i.PLAYING && (this._setState(i.REBUFFERING),
                            this._sendMediaEvent('rebuffering')),
                    t !== i.BUFFERING && t !== i.REBUFFERING && t !== i.SWIMBUFFERING || this._sendProgressEvent('progress', e.percentage, 100);
            },
            bufferingcomplete(e) {
                var t = this._state;
                var i = this._STATES;
                this._media.throttled = !1,
                    t !== i.SWIMMING && t !== i.SEEKING && t !== i.BUFFERING && t !== i.SWIMBUFFERING || this._sendMediaEvent('seeked');
            },
            updatepts(e) {
                var t = this._state;
                var i = this._STATES;
                var n = this._media;
                t !== i.PAUSING ? t !== i.STOPPING ? t !== i.CLOSING ? t != i.SEEKING && t != i.SWIMMING && t != i.BUFFERING && t != i.REBUFFERING && t != i.SWIMBUFFERING && t != i.PLAYING || (t !== i.SEEKING && t !== i.SWIMMING || this._sendMediaEvent('seeked'),
                    this._imaginaryTimeAtPts0 = this._adapter.getMonotonicTime() - e.pts,
                    t === i.SWIMMING && this._pausePending ? (this._setState(i.PLAYING),
                        n.throttled = !0) : t !== i.PLAYING && (this._setState(i.PLAYING),
                            this._sendMediaEvent('playing'),
                            n.throttled = !0,
                            this._startTimeTimer()),
                    void 0 != this._seekToTime ? this.currentTime = this._seekToTime : this._pausePending && this.pause()) : n.close() : n.stop() : n.pause();
            },
            nccperror(e) {
                var t = this._state;
                var i = this._STATES;
                e.result != nrdp.ACTION_ID && e.origin != 'handleActionId' && e.origin != 'stopTransaction' || (t != i.CLOSING && (this._playPending = !1,
                    this._pausePending = !1,
                    this._closePending = !1,
                    this._seekToTime = void 0),
                    t !== i.LOADING && t !== i.OPENING || this._setState(i.LOADFAIL));
            },
            error(e) {
                var t = this._state;
                var i = this._STATES;
                var n = this._media.errorCodes;
                e.error != n.NFErr_MC_AuthFailureNCCP && e.error != n.NFErr_MC_AcquireLicenseFailureNCCP && (t != i.CLOSING && (this._playPending = !1,
                    this._pausePending = !1,
                    this._closePending = !1,
                    this._seekToTime = void 0),
                    t !== i.LOADING && t !== i.OPENING || this._setState(i.LOADFAIL));
            },
            exception(e) {
                var t = this._state;
                var i = this._STATES;
                t !== i.CLOSING && (this._playPending = !1,
                    this._pausePending = !1,
                    this._closePending = !1,
                    this._seekToTime = void 0),
                    t !== i.LOADING && t !== i.OPENING || this._setState(i.LOADFAIL);
            },
            swim(e) {
                var t = e.error;
                this._imaginaryTimeAtPts0 = this._adapter.getMonotonicTime() - e.currentPts,
                    t ? (this._synchronizeState(),
                        this._sendMediaEvent('swimfail'),
                        this.pause()) : this._currentKnownTime = this._seekToTime,
                    this._seekToTime = this._pendingSwim,
                    this._pendingSwim = void 0;
            },
            statechanged(e) {
                var t = this._state;
                var i = this._STATES;
                var n = this._media;
                switch (n.throttled = !1,
                e.state) {
                    case n.OPENING:
                        t === i.OPENING && (this._setState(i.LOADING),
                            this._closePending && this._close());
                        break;
                    case n.CLOSED:
                        var r = t === i.CLOSING;
                        this._setState(i.CLOSED),
                            this._currentKnownTime = 0,
                            r && this._mediaConfig ? this._beginOpening() : (this._mediaConfig = null,
                                this._sendMediaEvent('closed'));
                        break;
                    case n.PLAYING:
                        t !== i.SEEKING && t !== i.SWIMMING || this._sendMediaEvent('play');
                        break;
                    case n.PAUSED:
                        t === i.PAUSING && (this._setState(i.PAUSED),
                            this._sendMediaEvent('pause'),
                            this._playPending && this.play());
                        break;
                    case n.STOPPED:
                        t !== i.LOADING && t !== i.OPENING || !this._adapter.supportOpenAndPlay ? t === i.STOPPING ? (this._setState(i.LOADED),
                            this.play()) : t === i.SEEKING ? (this._seekToTime = this._seekToTime || this.currentTime,
                                this._setState(i.LOADED),
                                this.play()) : t === i.SWIMMING || t === i.SWIMBUFFERING || t != i.CLOSING && (this._seekToTime = this._seekToTime || this.currentTime,
                                    this._setState(i.LOADED)) : this._setState(i.LOADED);
                }
            },
        },
        _attachMediaHandlers() {
            var e; var t; var i = this._media; var n = this._mediaEventHandlers; var
                r = this._attachedHandlers;
            for (t in n) {
                n.hasOwnProperty(t) && (e = n[t].bind(this),
                    r.push({
                        eventName: t,
                        handler: e,
                    }),
                    i.addEventListener(t, e));
            }
        },
        _sendLoadedMetadataEvent(e) {
            var t = 'loadedmetadata';
            var i = {
                category: 'media',
                type: t,
                rawEvent: e,
            };
            this._eventObservable.sendEvent(t, i);
        },
        _sendErrorEvent() {
            var e;
            e = {
                category: 'error',
                type: 'playbackStateError',
                nfErr: this._media.errorCodes.NFErr_MalformedData,
                text: '',
                lengthComputable: !1,
                loaded: 0,
                total: 0,
                loadedItems: 0,
                totalItems: 0,
            },
                this._eventObservable.sendEvent('playbackStateError', e);
        },
        _sendMediaEvent(e) {
            var t = {
                category: 'media',
                type: e,
            };
            this._eventObservable.sendEvent(e, t);
        },
        _sendProgressEvent(e, t, i) {
            var n = {
                category: 'progress',
                type: e,
                lengthComputable: !0,
                loaded: t,
                total: i,
                loadedItems: 0,
                totalItems: 0,
            };
            this._eventObservable.sendEvent(e, n);
        },
        _synchronizeState() {
            var e = this._media;
            var t = this._STATES;
            e.state == e.OPENING ? this._setState(t.LOADING) : e.state == e.PLAYING ? this._setState(t.PLAYING) : e.state == e.PAUSED ? this._setState(t.PAUSED) : e.state == e.STOPPED ? this._setState(t.ENDED) : e.state == e.CLOSED && this._setState(t.CLOSED);
        },
    }),
    o.SubtitleEngine = util.Class.create({
        init(e, t) {
            var i = this._media = e.media;
            this._adapter = e,
                this._eventObservable = new util.EventObservable(),
                this._attachedMediaSubtitleEventHandlers = [],
                this._attachHandlers(i, this._mediaSubtitleEventHandlers, this._attachedMediaSubtitleEventHandlers),
                this.reset();
        },
        addEventListener(e, t) {
            this._eventObservable.addEventListener(e, t);
        },
        removeEventListener(e, t) {
            this._eventObservable.removeEventListener(e, t);
        },
        _attachHandlers(e, t, i) {
            var n; let
                r;
            for (r in t) {
                t.hasOwnProperty(r) && (n = t[r].bind(this),
                    i.push({
                        eventName: r,
                        handler: n,
                    }),
                    e.addEventListener(r, n));
            }
        },
        _mediaSubtitleEventHandlers: {
            subtitletrackchanged(e) { },
            showsubtitle(e) {
                this._eventObservable.sendEvent('showsubtitle', e);
            },
            removesubtitle(e) {
                this._eventObservable.sendEvent('removesubtitle', e);
            },
        },
        reset: e,
    }),
    view.PinPromptView = view.AView.extend({
        _visibleClassName: 'pp-pinprompt-visible',
        setTitle(e) {
            this._title = e,
                this._updateTitle();
        },
        _updateTitle() {
            document.getElementById('pp-interrupt-title').textContent = util.textFormat(config.text.pinPrompt.enterPin),
                document.getElementById('pp-interrupt-description').textContent = util.textFormat(config.text.pinPrompt.restrictedRemoteDevice);
        },
        _render() {
            this._rendered || (this._updateTitle(),
                this._rendered = !0);
        },
    }),
    controller.PinPromptCard = controller.AUiCard.extend({
        id: 'controller.PinPromptCard',
        uiModalView: 'pinPrompt',
        _timeoutDuration: 18e6,
        init: function e(t) {
            var i = this;
            e.base.call(this, t),
                this._selfBoundOnPinVerificationCancel = this._onPinVerificationCancel.bind(this),
                this._exitTimeout = new util.Timeout(function () {
                    i._onStack && i._hasFocus && state.raiseEvent('state.exit');
                },
                    this._timeoutDuration);
        },
        _initView() {
            return new view.PinPromptView();
        },
        onEnter: function e(t, i, n) {
            var r = util.MessageBus;
            t && (this._mdxMessage = this._createMdxMessage(i),
                this._showPinPromptOnMdxControllers(this._mdxMessage),
                r.subscribe(r.EVENTS.PIN_VERIFICATION_CANCEL, this._selfBoundOnPinVerificationCancel),
                this._compositeDisposable = new Rx.CompositeDisposable(),
                this._listenForPinSessionActivationToExit(),
                this._listenForMdxMessages(),
                this._exitTimeout.run()),
                e.base.apply(this, arguments);
        },
        _createMdxMessage(e) {
            if (e) {
                return {
                    title: e.title,
                    videoId: e.videoId,
                    ancestorVideoId: e.ancestorVideoId,
                    ancestorVideoType: e.ancestorVideoType,
                };
            }
        },
        _showPinPromptOnMdxControllers(e) {
            var t = a.EurekaMdxDevice;
            t && e && t.sendMessageToAll('PIN_VERIFICATION_SHOW', e);
        },
        onExit: function e(t, i, n) {
            var r = util.MessageBus;
            t && (this._hidePinPromptOnMdxControllers(),
                this._compositeDisposable.dispose(),
                this._exitTimeout.clear(),
                r.unsubscribe(r.EVENTS.PIN_VERIFICATION_CANCEL, this._selfBoundOnPinVerificationCancel)),
                e.base.apply(this, arguments);
        },
        _hidePinPromptOnMdxControllers() {
            var e; var
                t = a.EurekaMdxDevice;
            t && (e = {
                isPinVerified: a.pinSession.isActive,
            },
                t.sendMessageToAll('PIN_VERIFICATION_NOT_REQUIRED', e));
        },
        _listenForMdxMessages() {
            var e = a.EurekaMdxDevice.mdxMessages.where(function (e) {
                return e && e === 'PLAYER_GET_CURRENT_STATE';
            }).subscribe(this._showPinPromptOnMdxControllers.bind(this, this._mdxMessage));
            this._compositeDisposable.add(e);
        },
        _listenForPinSessionActivationToExit() {
            var e;
            e = a.pinSession.activeValues.where(function (e) {
                return e;
            }).subscribe(function () {
                state.raiseEvent('player.restartPlayback');
            }),
                this._compositeDisposable.add(e);
        },
        _onPinVerificationCancel() {
            state.raiseEvent('player.stop');
        },
    }),
    model.ContentAdvisory = util.Class.create({
        rating: !1,
        advisories: [],
        dataLoaded: !1,
        init(e) {
            this._pathEvaluator = e.pathEvaluator,
                this._videoIdSet = new Rx.Subject(),
                this.advisoryDataLoaded = new Rx.Subject(),
                this._data();
        },
        setVideoId(e) {
            this._videoIdSet.onNext(e);
        },
        _data() {
            var t; var i; var
                n = this;
            this._videoIdSet.subscribe(function (r) {
                return i = ['playbackAdvisories'],
                    t = n._pathEvaluator.bind(['videos', r]),
                    n._boundPathEvaluator = t,
                    t.get(i).subscribe(function (e) {
                        var t = e.value && e.value.playbackAdvisories;
                        var i = t && t.advisories || [];
                        n.advisories = i.filter(n.advisoryValid),
                            n.advisoryDataLoaded.onNext();
                    }, function (e) {
                        t.invalidate(i),
                            n.advisoryDataLoaded.onNext();
                    }, e);
            });
        },
        advisoryValid(e) {
            var { contentAdvisory: t, text: i } = e;
            return t || i && i.length > 0;
        },
        reset() {
            this.rating = null,
                this.advisories = [];
        },
    }),
    config.contentAdvisory = {
        delayAfterPlaybackStarts: 2e3,
        visibleDuration: 4e3,
    },
    model.SkipContent = util.Class.create({
        skipSegments: [],
        init(e) {
            this._pathEvaluator = e.pathEvaluator,
                this._videoIdSet = new Rx.Subject(),
                this.skipContentLoaded = new Rx.Subject(),
                this._data();
        },
        setVideoId(e) {
            this._videoIdSet.onNext(e);
        },
        skipContentExists() {
            return this.skipSegments && this.skipSegments.length > 0;
        },
        _data() {
            var t; var i; var
                n = this;
            this._videoIdSet.subscribe(function (r) {
                return i = ['skipContent'],
                    t = n._pathEvaluator.bind(['videos', r]),
                    n._boundPathEvaluator = t,
                    t.get(i).subscribe(function (e) {
                        var t = e.value && e.value.skipContent;
                        n.skipSegments = t && t.skipSegments || [],
                            n.skipContentLoaded.onNext();
                    }, function (e) {
                        t.invalidate(i),
                            n.skipContentLoaded.onNext();
                    }, e);
            });
        },
        reset() {
            this.skipSegments = [];
        },
    }),
    function (t) {
        t.CONFIG_PLAYBACK_ERRORS = {
            value() {
                return config.playbackErrors;
            },
        },
            t.PLAYBACK_STATE_MANAGER = {
                value() {
                    return function (e) {
                        return new o.PlaybackState(e);
                    };
                },
            },
            t.SUBTITLE_ENGINE_ADAPTER = {
                value() {
                    return function (e, t) {
                        return new o.SubtitleEngine(e, t);
                    };
                },
            },
            t.PLAYER = {
                dependsOn: ['CONFIG_PLAYBACK_ERRORS', 'PLAYBACK_STATE_MANAGER', 'SUBTITLE_ENGINE_ADAPTER'],
                value(t) {
                    var i = new o.PlayerClass(t.CONFIG_PLAYBACK_ERRORS);
                    return a.adapterAndDOMLoaded.subscribe(function () {
                        var e;
                        window.nrdp ? (e = t.PLAYBACK_STATE_MANAGER(s.Adapter),
                            s.Adapter.playbackStateManager = e,
                            s.Adapter.subtitleEngineAdapter = t.SUBTITLE_ENGINE_ADAPTER(s.Adapter, e),
                            i.attachAdapter(s.Adapter)) : i.attachAdapter(null);
                    }, e),
                        i;
                },
            },
            t.PLAYBACK_VIEW_FACTORY = {
                value() {
                    return function () {
                        return new view.PlaybackView();
                    };
                },
            },
            t.PLAYBACK_CARD = {
                dependsOn: ['PLAYBACK_VIEW_FACTORY'],
                value(e) {
                    return new controller.PlaybackCard(e.PLAYBACK_VIEW_FACTORY);
                },
            },
            t.PRE_PLAYBACK_VIEW_FACTORY = {
                value() {
                    return function () {
                        return new view.EurekaPrePlaybackView();
                    };
                },
            },
            t.PRE_PLAYBACK_CARD = {
                dependsOn: ['PRE_PLAYBACK_VIEW_FACTORY'],
                value(e) {
                    return new controller.PrePlaybackCard(e.PRE_PLAYBACK_VIEW_FACTORY);
                },
            },
            t.DIRECT_PLAY_PREPLAYBACK_VIEW_FACTORY = {
                value() {
                    return function () {
                        return new view.EurekaMetadataPrePlaybackView();
                    };
                },
            },
            t.DIRECT_PLAY_PREPLAYBACK_CARD = {
                dependsOn: ['DIRECT_PLAY_PREPLAYBACK_VIEW_FACTORY'],
                value(e) {
                    return new controller.PrePlaybackCard(e.DIRECT_PLAY_PREPLAYBACK_VIEW_FACTORY);
                },
            },
            t.TEXT_OVERLAY_VIEW_FACTORY = {
                value() {
                    return function () {
                        return new view.TextOverlayView();
                    };
                },
            },
            t.TEXT_OVERLAY = {
                dependsOn: ['PLAYER', 'TEXT_OVERLAY_VIEW_FACTORY'],
                value(e) {
                    return new controller.TextOverlay(e.PLAYER, e.TEXT_OVERLAY_VIEW_FACTORY);
                },
            },
            t.WATERMARK_VIEW_FACTORY = {
                value() {
                    return function () {
                        return new view.WatermarkView();
                    };
                },
            },
            t.WATERMARK = {
                dependsOn: ['WATERMARK_VIEW_FACTORY'],
                value(e) {
                    return new controller.Watermark(e.WATERMARK_VIEW_FACTORY);
                },
            },
            t.PLAYER_VIEW_FACTORY = {
                dependsOn: ['CONTENT_ADVISORY_MODEL', 'CONTENT_ADVISORY_CONFIG', 'SKIP_CONTENT_MODEL'],
                value(e) {
                    return function () {
                        return new view.EurekaPlayerView(config.playbackScrubberView.progressBar);
                    };
                },
            },
            t.PIN_PROMPT_CARD = {
                value(e) {
                    return new controller.PinPromptCard();
                },
            },
            t.PLAYER_CARD = {
                dependsOn: ['PRE_PLAYBACK_CARD', 'PLAYBACK_CARD', 'PLAYER_VIEW_FACTORY', 'PLAYER', 'PIN_PROMPT_CARD', 'TEXT_OVERLAY', 'WATERMARK', 'CONTENT_ADVISORY_MODEL', 'CONTENT_ADVISORY_CONFIG', 'SKIP_CONTENT_MODEL'],
                value(e) {
                    return new controller.PlayerCard({
                        player: e.PLAYER,
                        viewFactory: e.PLAYER_VIEW_FACTORY,
                        prePlaybackCard: e.PRE_PLAYBACK_CARD,
                        playbackCard: e.PLAYBACK_CARD,
                        pinPromptCard: e.PIN_PROMPT_CARD,
                        textOverlay: e.TEXT_OVERLAY,
                        watermark: e.WATERMARK,
                        contentAdvisoryModel: e.CONTENT_ADVISORY_MODEL,
                        contentAdvisoryConfig: e.CONTENT_ADVISORY_CONFIG,
                        skipContentModel: e.SKIP_CONTENT_MODEL,
                    });
                },
            };
    }(config.binding),
    view.PostPlayInterruptView = view.AView.extend({
        _visibleClassName: 'pp-interrupt-visible',
        setTitle(e) {
            this._title = e,
                this._updateTitle();
        },
        _updateTitle() {
            document.getElementById('pp-interrupt-title').textContent = util.textFormat(config.text.postPlay.interrupter.stillWatchingTitle, {
                title: this._title,
            }),
                document.getElementById('pp-interrupt-description').textContent = config.text.postPlay.interrupter.description,
                document.getElementById('pp-interrupt-next-play-text').textContent = config.text.postPlay.nextEpisode.play;
        },
        _render() {
            this._rendered || (this._updateTitle(),
                this._rendered = !0);
        },
    }),
    controller.PostPlayInterruptCard = controller.AUiCard.extend({
        id: 'PostPlayInterruptCard',
        _NUM_BUTTONS: 2,
        onEnter: function e(t, i, n) {
            this.view().setTitle(i.title),
                e.base.call(this, t, i, n),
                this._boundReturnToPlayback = this._returnToPlayback.bind(this),
                document.getElementById('pp-interrupt-next-play').addEventListener('touchend', this._boundReturnToPlayback);
        },
        onExit: function e() {
            e.base.apply(this, arguments),
                document.getElementById('pp-interrupt-next-play').removeEventListener('touchend', this._boundReturnToPlayback);
        },
        actions: {
            'dialog.select': function (e) {
                switch (e) {
                    case 0:
                        this._returnToPlayback();
                        break;
                    case 1:
                        this._backToBrowse();
                }
                return !0;
            },
        },
        _initView() {
            return new view.PostPlayInterruptView('PostPlayInterruptView');
        },
        _scroll(e) {
            var t = this._index + e;
            t >= 0 && t < this._NUM_BUTTONS && (this._index = t,
                this.view().setIndex(t));
        },
        _handleEnter() {
            switch (this._index) {
                case 0:
                    this._returnToPlayback();
                    break;
                case 1:
                    this._backToBrowse();
            }
        },
        _returnToPlayback() {
            state.raiseEvent('player.expand');
        },
        _backToBrowse() {
            c.CustomerEvents.logPlaybackExit('postplay.interrupt.backToBrowse'),
                state.raiseEvent('player.stop');
        },
    }),
    controller.APostPlayCard = controller.ACompoundUiCard.extend({
        id: 'APostPlayCard',
        uiContext: 'APostPlayCard',
        get trackId() {
            return null;
        },
        get trackUrl() {
            return null;
        },
        get movieIndex() {
            return 0;
        },
        get forcedContext() {
            return {
                trackId: this.trackId,
                trackUrl: this.trackUrl,
                movieIndex: this.movieIndex,
                uiContext: this.uiContext,
            };
        },
        isPostPlayCard: !0,
        _getCurrentState() {
            return null;
        },
        actions: {
            'key.left': function () {
                return !0;
            },
            'key.right': function () {
                return !0;
            },
            'key.enter': function () {
                return !0;
            },
            'key.play': function () {
                return !0;
            },
            'key.up': function () {
                return !0;
            },
            'key.rewind': function () {
                return !0;
            },
            'key.fastfwd': function () {
                return !0;
            },
            'key.start': function () {
                return !0;
            },
            'key.pause': function () {
                return !0;
            },
            'key.subtitle': function () {
                return !0;
            },
            'key.options': function (e, t) {
                return c.CustomerEvents.logHotkey('Search-Enter', e, t),
                    state.raiseEvent('search.enter'),
                    !0;
            },
        },
        onEnter: function e(t, i, n) {
            e.base.call(this, t, i, n),
                i = i || {},
                t && (util.MessageBus.notify(util.MessageBus.EVENTS.Player.POST_PLAY_ENTERED),
                    i.player && (this._player = i.player),
                    this._isUserStop = i.isUserStop,
                    this._addEventListeners());
        },
        onExit: function e(t, i, n) {
            e.base.call(this, t, i, n),
                t && (this._removeEventListeners(),
                    util.MessageBus.notify(util.MessageBus.EVENTS.Player.POST_PLAY_EXITED));
        },
        preLoadData(e, t) {
            t();
        },
        _enterCard(e) {
            var t; var i = this._currentState; var n = e !== this; var
                r = this._currentState !== null && void 0 != e;
            t = i === null ? this : i,
                this._updateActiveState(e, n, t, r, {
                    contentMetadata: this._contentMetadata,
                }) && (this._currentState = e === this ? null : e);
        },
        _addEventListeners() {
            var e = this._player;
            this._isUserStop || e.isStopped || e.playbackEnded.subscribe(this, this._onEndPlayback);
        },
        _removeEventListeners() {
            this._player.playbackEnded.unsubscribe(this, this._onEndPlayback);
        },
        _onEndPlayback(e) {
            this._player.playbackEnded.unsubscribe(this, this._onEndPlayback);
        },
    }),
    controller.APostPlayAutoPlayCard = controller.APostPlayCard.extend({
        _postPlayConfig: config.postPlay,
        init: function e() {
            e.base.call(this),
                this._currentViewable = null,
                this._nextViewable = null,
                this._indexManager = new util.BoundedLinearIndexManager(),
                this._timerStart = this._postPlayConfig.autoPlay.timer;
        },
        actions: util.extend({}, controller.APostPlayCard.prototype.actions, {
            'key.up': function () {
                return !0;
            },
            'key.down': function () {
                return !0;
            },
            'key.left': function () {
                var e = this._indexManager;
                return e.setIndex(e.index - 1),
                    !0;
            },
            'key.right': function () {
                var e = this._indexManager;
                return e.setIndex(e.index + 1),
                    !0;
            },
            'key.enter': function () {
                return this._buttonModel.get(this._indexManager.index).confirm(),
                    !0;
            },
            'key.play': function () {
                this._nextViewable && this._raisePlayVideoEvent(this._getNextVideoInfo(!1));
            },
        }),
        preLoadData(e, t) {
            this._contentMetadata = e.contentMetadata,
                t();
        },
        onEnter: function e(t, i, n) {
            e.base.call(this, t, i, n);
            var r = this._indexManager;
            var s = this.view();
            var a = this._contentMetadata;
            var o = this._nextViewable;
            var l = this._currentViewable;
            t && (this._currentState = null,
                this._subscribeToIndexManager(),
                this.enableSkipIntro = i.enableSkipIntro,
                a && o && l && (s.populate(o, a, i),
                    this._shouldAutoPlay() ? (s.updateTimer(this._timerStart),
                        this._startAutoPlayTimer()) : s.setNoAutoplayText(l, o),
                    this._createButtonModel(i))),
                this._buttonModel && this._buttonModel.get(r.index).focus();
        },
        onExit: function e(t, i, n) {
            e.base.call(this, t, i, n),
                t && (this._unsubscribeFromIndexManager(),
                    this.view().reset(),
                    this._indexManager.reset(),
                    delete this._buttonModel,
                    this._stopAutoPlayTimer()),
                this.view().updateFocus();
        },
        _createButtonModel(e) {
            var t; var i = this._indexManager; var n = this._player.isStopped; var
                r = e && e.isUserStop;
            t = this._buttonModel = new model.MenuModel(),
                !r && n || t.add(this._createRestorePlaybackButton()),
                this._createBottomButtons(),
                i.setLength(t.length),
                !r && n ? i.setIndex(0) : i.setIndex(1);
        },
        _initView() {
            return new view.APostPlayAutoPlayView(this._indexManager);
        },
        _createRestorePlaybackButton() {
            if (!this._restorePlaybackButton) {
                var e = this;
                this._restorePlaybackButton = new model.MenuItemModel(null, {
                    focus() {
                        e.view().updateFocus('current-movie-focus');
                    },
                    confirm() {
                        e._restorePlayback();
                    },
                });
            }
            return this._restorePlaybackButton;
        },
        _restorePlayback() {
            state.raiseEvent('player.expand');
        },
        _getNextVideoInfo(e) {
            return {
                contentMetadata: this._contentMetadata,
                isAutoPlay: e,
                forceBookmark: this._getStartBookmark(this._nextViewable),
                forceContext: this.forcedContext,
                uiPlayStartTime: s.Adapter.getMonotonicTime(),
                uiLabel: 'postplay',
                enableSkipIntro: this.enableSkipIntro,
            };
        },
        _raisePlayVideoEvent(e) {
            state.raiseEvent('player.playMovie', e);
        },
        _getStartBookmark(e) {
            var t = e.interesting_moments;
            return t && t.type1 && t.type1[0] ? t.type1[0].offset : 0;
        },
        _onEndPlayback: function e(t) {
            e.base.call(this, t);
            var i = this._indexManager;
            var n = this._buttonModel;
            this._restorePlaybackButton && (i.index === 0 && i.setIndex(1),
                this._unsubscribeFromIndexManager(),
                n.remove(0),
                this._restorePlaybackButton = null,
                i.setLength(n.length),
                i.setIndex(i.index - 1),
                this._subscribeToIndexManager());
        },
        _shouldAutoPlay() {
            return !0;
        },
        _getStartPlaybackInfo() {
            return null;
        },
        _createBottomButtons() { },
        _startAutoPlayTimer() {
            this._stopAutoPlayTimer(),
                this._intervalId = window.setInterval(util.proxy(function () {
                    --this._timerStart <= 0 ? (this.view().updateTimer(this._timerStart),
                        this._stopAutoPlayTimer(),
                        this._raisePlayVideoEvent(this._getNextVideoInfo(!0))) : this.view().updateTimer(this._timerStart);
                }, this), this._postPlayConfig.autoPlay.interval);
        },
        _stopAutoPlayTimer() {
            window.clearInterval(this._intervalId),
                delete this._intervalId,
                this._timerStart = this._postPlayConfig.autoPlay.timer;
        },
        _subscribeToIndexManager() {
            var e = this._indexManager;
            e.subscribe('idx_changed', this.view()),
                e.subscribe('idx_changed', this, this._onIndexChanged);
        },
        _unsubscribeFromIndexManager() {
            var e = this._indexManager;
            e.unsubscribe('idx_changed', this.view()),
                e.unsubscribe('idx_changed', this);
        },
        _onIndexChanged(e, t) {
            this._buttonModel.get(e).focus();
        },
    }),
    controller.NextTvCard = controller.APostPlayAutoPlayCard.extend({
        id: 'NextTvCard',
        uiContext: 'NextTvCard',
        get trackUrl() {
            return '/HTMLTVUI?#NextTvRecommendations?';
        },
        get trackId() {
            return '3624452';
        },
        onEnter: function e(t, i, n) {
            var r = util.MessageBus;
            var s = this._nextViewable;
            e.base.call(this, t, i, n),
                this._boundPlayNextEpisode = this._playNextEpisode.bind(this),
                document.getElementById('pp-nt-next-play').addEventListener('touchend', this._boundPlayNextEpisode),
                t && (this._shouldAutoPlay() ? r.notify(r.EVENTS.Player.POST_PLAY_COUNTDOWN, s) : r.notify(r.EVENTS.Player.POST_PLAY_PROMPT, s));
        },
        onExit: function e() {
            e.base.apply(this, arguments),
                document.getElementById('pp-nt-next-play').removeEventListener('touchend', this._boundPlayNextEpisode);
        },
        _playNextEpisode(e) {
            e.stopPropagation();
            var t = {
                movieUri: this._nextViewable.title_series.id,
                playData: {
                    mdxesn: void 0,
                    origin: 'PostPlay',
                    isMdxPlay: !1,
                },
            };
            a.Binding.get('PLAYER_CARD').playMovie(t);
        },
        preLoadData: function e(t, i) {
            this._currentViewable = t.episode,
                this._nextViewable = t.nextEpisode,
                e.base.call(this, t, i);
        },
        _shouldAutoPlay() {
            return config.postPlay.autoPlay.enabled;
        },
        _getNextVideoInfo: function e(t) {
            var i = e.base.call(this, t);
            var n = this._nextViewable;
            return i.episode = n,
                i.movieUri = n.title_series.id,
                i.preserveSettings = t,
                i;
        },
        _createBottomButtons() {
            var e = this._buttonModel;
            e.add(this.playNowButton),
                e.add(this.moreEpisodesButton);
        },
        _initView() {
            return a.Binding.get('NEXT_TV_VIEW', this._indexManager);
        },
        get playNowButton() {
            if (!this._playNowButton) {
                var e = this;
                this._playNowButton = new model.MenuItemModel(null, {
                    focus() {
                        e.view().updateFocus('play-now-focus');
                    },
                    confirm() {
                        e._nextViewable && e._raisePlayVideoEvent(e._getNextVideoInfo(!1));
                    },
                });
            }
            return this._playNowButton;
        },
        get moreEpisodesButton() {
            if (!this._moreEpisodesButton) {
                var e = this;
                this._moreEpisodesButton = new model.MenuItemModel(null, {
                    focus() {
                        e.view().updateFocus('more-episodes-focus');
                    },
                    confirm() {
                        state.raiseEvent('mdp.enter', {
                            enterEpisodesCard: !0,
                        });
                    },
                });
            }
            return this._moreEpisodesButton;
        },
    }),
    util.fitWithin = function (e, t, i, n) {
        var r; var
            s = function (e, t, i, n) {
                return Math.floor(e * n / i);
            }(e, 0, i, n);
        return s <= t ? {
            w: e,
            h: s,
            offsetX: 0,
            offsetY: Math.floor((t - s) / 2),
        } : {
            w: r = function (e, t, i, n) {
                return Math.floor(t * i / n);
            }(0, t, i, n),
            h: t,
            offsetX: Math.floor((e - r) / 2),
            offsetY: 0,
        };
    }
    ,
    util.charTruncate = function (e, t, i, n) {
        var r; var s; var a; var o; var l; var u; var c; var
            d = arguments.callee._htmlRegex;
        if (e.length > t) {
            if ((s = Boolean(n)) && (t -= n.length),
                i && (r = (e = e.substr(0, t + i.length)).lastIndexOf(i)),
                void 0 !== r && r !== -1 || (r = t),
                o = e.match(d)) {
                for (l = 0,
                    u = o.length; l < u; l++) {
                    if ((c = e.indexOf(o[l])) + o[l].length > r && c < r) {
                        r = c - 1;
                        break;
                    }
                }
            }
            e = e.substr(0, r),
                (a = arguments.callee._trailRegEx).test(e) && (e = e.replace(a, '$1')),
                s && (e += n);
        }
        return e;
    }
    ,
    util.charTruncate._trailRegEx = new RegExp('(\\S)[^-a-zA-Z0-9]$'),
    util.charTruncate._htmlRegex = /\<\w*\>(?:.[^\<]*)\<\/\w*>/g,
    util.textTruncate = function (e, t) {
        var i; var n; var r; var s; var a; var o; var l; var u; var c; var d; var h = util.charTruncate; var
            p = config.text.textTruncate;
        if (t.baseOnChars) {
            return (n = h(i = e.textContent, t.maxChars, t.breakOnSpace && ' ', t.ellipsis || p.suffix)) !== i && (e.textContent = n,
                !0);
        }
        if (r = t.maxHeight,
            s = t.measureEl || e,
            a = e.style.display,
            e.style.display = t.display || 'block',
            s.clientHeight > r) {
            for (o = l = !0,
                u = t.ellipsis || p.suffix,
                c = t.breakOnSpace && ' ',
                i = e.textContent,
                d = t.maxChars || i.length - 1; l && d > 0 && e.textContent !== u;) {
                i = h(i, d, c, u),
                    e.textContent = i,
                    (l = s.clientHeight > r) && (d = i.length - 1);
            }
        } else { o = !1; }
        return e.style.display = a,
            o;
    }
    ,
    view.APostPlayAutoPlayView = view.AView.extend({
        id: 'APostPlayAutoPlayView',
        _countdownPromptEl: '',
        get _textConfig() {
            return config.text.postPlay;
        },
        _postPlayConfig: config.postPlay,
        init: function e(t) {
            e.base.call(this, this.id),
                this._indexManager = t;
        },
        update: e,
        populate() { },
        updateTimer(e) {
            document.getElementById(this._countdownPromptEl).innerHTML = util.textFormat(this._textConfig.nextEpisode.startsIn, {
                seconds: e,
            });
        },
        updateFocus(e) {
            document.getElementById('postplay').className = `pb-abs ${e}`;
        },
        reset() {
            var e = document;
            setTimeout(() => {
                e.getElementById(this._countdownPromptEl).innerHTML = '';
            },
                1e3);
        },
        setNoAutoplayText(e, t) { },
        _render() { },
    }),
    view.NextTvView = view.APostPlayAutoPlayView.extend({
        _visibleClassName: 'pp-nt-visible',
        _countdownPromptEl: 'pp-nt-next-msg',
        _interestingMomentWidth: 279,
        _interestingMomentHeight: 157,
        get _textConfig() {
            return config.text.postPlay;
        },
        id: 'NextTvView',
        _render: function e() {
            this._rendered || (this._rendered = !0),
                e.base.call(this);
        },
        populate: function e(t, i, n) {
            n = n || {},
                e.base.call(this, t, i, n),
                document.getElementById('pp-nt-msg').textContent = this._textConfig.nextEpisode.nextEpisode,
                document.getElementById('pp-nt-next-play-text').textContent = this._textConfig.nextEpisode.play;
        },
        setNoAutoplayText(e, t) {
            var i; var
                n = this._textConfig.nextEpisode.noAutoplay;
            t.season_number && typeof t.season_number === 'number' && e.season_number && typeof e.season_number === 'number' && e.season_number !== t.season_number ? t.seasonLabelLong && n.nextSeasonLabel ? i = util.textFormat(n.nextSeasonLabel, {
                seasonSequenceLong: t.seasonLabelLong,
            }) : newtText = util.textFormat(n.nextSeason, {
                season: t.season_number,
            }) : i = n.nextEpisode,
                document.getElementById('pp-nt-next-msg').textContent = i;
        },
    }),
    function (e, t) {
        var i = a.Binding.Type.CLASS;
        e.NEXT_TV_CARD = {
            type: i,
            value: controller.NextTvCard,
        },
            e.NEXT_TV_VIEW = {
                type: i,
                value: view.NextTvView,
            },
            e.AUTOPLAY_INTERRUPT_CARD = {
                type: i,
                value: controller.PostPlayInterruptCard,
            };
    }(config.binding),
    function (e) {
        e.CONTENT_ADVISORY_MODEL = {
            dependsOn: ['BROWSE_ROOT_PATH_EVALUATOR_FACTORY'],
            value(e) {
                return new model.ContentAdvisory({
                    pathEvaluator: e.BROWSE_ROOT_PATH_EVALUATOR_FACTORY(),
                });
            },
        },
            e.CONTENT_ADVISORY_CONFIG = {
                value() {
                    return config.contentAdvisory;
                },
            };
    }(config.binding),
    config.binding.SKIP_CONTENT_MODEL = {
        dependsOn: ['BROWSE_ROOT_PATH_EVALUATOR_FACTORY'],
        value(e) {
            return new model.SkipContent({
                pathEvaluator: e.BROWSE_ROOT_PATH_EVALUATOR_FACTORY(),
            });
        },
    },
    a.startup = {},
    window.castReceiverEme = window.castReceiverEme || {};
var f = window.castReceiverEme;
f.receiver = f.receiver || {},
    f.receiver.eme = f.receiver.eme || {},
    f.receiver.eme.EventType = {
        KEYSTATUSESCHANGE: 'keystatuseschange',
        MESSAGE: 'message',
    },
    f.receiver.eme.KeySessionType = {
        PERSISTENT_RELEASE_MESSAGE: 'persistent-release-message',
    },
    f.receiver.eme.CHROMECAST_PLAYREADY_UUID_ = new Uint8Array([43, 248, 102, 128, 198, 229, 78, 36, 190, 35, 15, 129, 90, 96, 110, 178]),
    f.receiver.eme.ENABLE_SECURE_STOP_MESSAGE_TYPE_ = 2,
    f.receiver.eme.KeySession = class {
        constructor(e, t) {
            this.keySessionType_ = t,
                this.keySession_ = e.createSession('persistent-license'),
                this.sessionId = '',
                this.expiration = this.keySession_.expiration,
                this.closed = this.keySession_.closed,
                this.keyStatuses = this.keySession_.keyStatuses;
        }

        static createSession(e, t) {
            return new f.receiver.eme.KeySession(e, f.receiver.eme.KeySession.getSessionTypeFromName_(t));
        }

        static getSessionTypeFromName_(e) {
            for (var t in f.receiver.eme.KeySessionType) { if (f.receiver.eme.KeySessionType[t] == e) return e; }
            throw new Error(`Unknown key session type: ${e}`);
        }

        generateRequest(e, t) {
            if (this.keySessionType_ == f.receiver.eme.KeySessionType.PERSISTENT_RELEASE_MESSAGE) {
                if (e != 'cenc') { throw new Error('Only cenc initDataType is supported for persistent-release-message session type.'); }
                var i = f.receiver.eme.ENABLE_SECURE_STOP_MESSAGE_TYPE_;
                var n = new Uint8Array([0, 0, 0, 0, 112, 115, 115, 104, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0, i]);
                n.set(f.receiver.eme.CHROMECAST_PLAYREADY_UUID_, 12),
                    new DataView(n.buffer).setUint32(0, n.length);
                var r = new Uint8Array(t.byteLength + n.byteLength);
                r.set(new Uint8Array(t), 0),
                    r.set(n, t.byteLength),
                    t = r;
            }
            return this.keySession_.generateRequest(e, t).then(() => {
                this.sessionId = this.keySession_.sessionId;
            });
        }

        load(e) {
            return this.keySession_.load(e);
        }

        update(e) {
            return this.keySession_.update(e);
        }

        close() {
            return this.keySession_.close();
        }

        remove() {
            return this.keySession_.remove();
        }

        addEventListener(e, t) {
            this.keySession_.addEventListener(e, t);
        }

        removeEventListener(e, t) {
            this.keySession_.removeEventListener(e, t);
        }
    }
    ,
    a.startup.svgs = {},
    a.startup.svgs.iconKoreanRatings = ['<symbol id="maturity-rating-KR-KMRB-35" viewBox="442.6 442.6 114.8 114.8"> <path fill="#4FA855" d="M500,557.4c31.7,0,57.4-25.7,57.4-57.4c0-31.7-25.7-57.4-57.4-57.4c-31.7,0-57.4,25.7-57.4,57.4 C442.6,531.7,468.3,557.4,500,557.4"/> <path fill="#252122" d="M491.2,488.1c-1.9-0.7-3.8-2.3-5-3.9c-0.5,1.7-2.9,3.6-5.1,4.6l-1.7-1.7c5.1-2.1,5.6-5.3,5.6-6.6v-0.6h-4.1 V478h10.7v1.9h-4.1v0.6c0,1.2,0.7,4.2,5,5.8L491.2,488.1z M483.2,496v-6.3h2.2v4.4h12.5v1.9H483.2z M495.3,491.1v-7.7h-3.9v-2h3.9 v-4.6h2.2V491h-2.2V491.1z M509.2,492.9c-1.1-0.5-3.3-2.6-3.7-4.1c-0.4,1.8-2.8,3.8-4.2,4.5l-1.7-1.5c2.7-1.4,4.7-3.8,4.7-6.9v-1 h-3.6V482h9.5v1.9h-3.5v1c0,1.5,0.5,4.5,3.9,6.4L509.2,492.9z M502.7,480v-1.8h5.5v1.9h-5.5V480z M512,495.6v-8.3h-3.1v-1.9h3.1 v-8.1h2.2v18.3H512z M516.1,496.5v-19.6h2.2v19.6H516.1z"/> <path fill="#252122" d="M471.5,515.1h-2.6v-1.9h3.8v-4.3h2.2v4.3c1.6,0,6.2-0.3,8.1-0.6v1.8C480.3,514.9,476.4,515.1,471.5,515.1z M480.2,511.3H478c0-0.2,0.7-2.9,0.8-5.1h-8.6v-1.9h11C481.2,505.7,480.8,509.6,480.2,511.3z M472.3,522.4v-5.8h2.2v3.9h12.2v1.9 H472.3L472.3,522.4z M486,511.4v6.3h-2.2v-14.5h2.2v6.3h2.7v1.9L486,511.4L486,511.4z M495.6,514h-5v-5.8h7.5V506h-7.5v-1.8h9.7 v5.8h-7.5v2.1h3.7c1.9,0,4.8-0.3,6.2-0.4v1.8C501.2,513.8,498.1,514,495.6,514z M492.6,522.6v-6.8h13.8v6.8H492.6z M504.1,517.6 h-9.3v3.1h9.3V517.6z M506.3,510.1v4.8h-2.2v-11.7h2.2v4.9h2.8v1.9h-2.8V510.1z M512,519.4l-1.7-1.3c5.9-2.6,8-7.8,8.2-10.8h-7 v-1.9h9.6C521.1,510.1,518.2,516.6,512,519.4z M526.9,503.2v8.1h3v2h-3v9.5h-2.2v-19.6H526.9z"/> </symbol>', '<symbol id="maturity-rating-KR-KMRB-70" viewBox="442.6 442.6 114.8 114.8"> <path fill="#23A5DB" d="M500.5,557.2c31.7,0,57.4-25.7,57.4-57.4c0-31.7-25.7-57.4-57.4-57.4c-31.7,0-57.4,25.7-57.4,57.4 C443,531.5,468.7,557.2,500.5,557.2"/> <path fill="#252122" d="M512.5,492.3c-1.4-1.1-3.5-3.7-3.9-5.4c-0.5,1.9-2.3,4.4-4.1,5.9l-1.8-1.3c3.5-2.3,4.8-6.1,4.8-10.1V478h2.3 v3.3c0,4,1.4,7.3,4.3,9.6L512.5,492.3z M515.3,495.1v-10h-3.1v-2h3.1v-6.3h2.2v18.3H515.3z M519.4,496v-19.6h2.2V496H519.4z"/> <path fill="#252122" d="M472.8,514.7h-2.6v-1.9h3.8v-4.3h2.2v4.3c1.6,0,6.2-0.3,8.1-0.6v1.8C481.6,514.4,477.7,514.7,472.8,514.7z  M481.5,510.8h-2.2c0-0.2,0.7-2.9,0.8-5.1h-8.6v-1.9h11C482.5,505.2,482.1,509.1,481.5,510.8z M473.6,521.9v-5.8h2.2v3.9H488v1.9 H473.6z M487.3,510.9v6.3h-2.2v-14.5h2.2v6.3h2.7v1.9H487.3z M496.9,513.6l-5,0v-5.8h7.5v-2.2h-7.5v-1.9h9.7v5.8h-7.5v2.1l3.7,0 c1.9,0,4.8-0.3,6.2-0.4v1.8C502.5,513.3,499.4,513.5,496.9,513.6z M493.9,522.1v-6.8h13.8v6.8H493.9z M505.4,517.2h-9.3v3.1h9.3 V517.2z M507.6,509.6v4.7h-2.2v-11.6h2.2v4.9h2.8v1.9H507.6z M513.3,519l-1.7-1.3c5.9-2.6,8-7.8,8.2-10.8h-7V505h9.6 C522.4,509.6,519.5,516.1,513.3,519z M528.2,502.7v8.1h3v2h-3v9.5h-2.2v-19.6H528.2z"/> <path fill="#000100" d="M483.3,494.3l0-12h-3.5v-1.8c0.5,0,1-0.1,1.5-0.2c0.5-0.1,0.9-0.3,1.3-0.6c0.3-0.2,0.6-0.5,0.8-0.9 c0.2-0.4,0.4-0.8,0.4-1.3h1.7l0,16.8H483.3z"/> <path fill="#000100" d="M500.4,478.5c0.9,1,1.3,2.2,1.3,3.5c0,1.3-0.4,2.4-1.1,3.3c-0.8,0.8-1.5,1.5-2.2,2l-2.7,1.9 c-0.4,0.3-0.9,0.7-1.4,1.3c-0.5,0.6-0.9,1.1-1,1.8l8.5,0v1.9l-11.2,0c0-1.2,0.3-2.3,0.8-3.4c0.5-1.1,1.5-2.2,3.1-3.3l2.8-1.9 c0.6-0.4,1.1-0.9,1.5-1.5c0.4-0.6,0.6-1.2,0.6-1.9c0-1-0.2-1.7-0.7-2.3c-0.5-0.5-1.2-0.8-2.2-0.8c-1.2,0-2,0.3-2.5,1 c-0.5,0.7-0.7,1.5-0.7,2.3H491c0-1.4,0.5-2.6,1.3-3.7c0.9-1.1,2.2-1.6,4-1.6C498.1,477,499.5,477.5,500.4,478.5z"/> </symbol>', '<symbol id="maturity-rating-KR-KMRB-95" viewBox="442.6 442.6 114.8 114.8"> <path fill="#EF9B3A" d="M500.7,557.2c31.7,0,57.4-25.7,57.4-57.4c0-31.7-25.7-57.4-57.4-57.4c-31.7,0-57.4,25.7-57.4,57.4 C443.2,531.5,469,557.2,500.7,557.2"/> <path fill="#252122" d="M512.7,493.9c-1.4-1.1-3.5-3.7-3.9-5.4c-0.5,1.9-2.3,4.4-4.1,5.9l-1.8-1.3c3.5-2.3,4.8-6.1,4.8-10.2v-3.3h2.3 v3.3c0,4,1.4,7.3,4.3,9.6L512.7,493.9z M515.5,496.8v-10h-3.1v-2h3.1v-6.3h2.2v18.3H515.5z M519.7,497.6V478h2.2v19.6H519.7z"/> <path fill="#252122" d="M473.1,516.3h-2.6v-1.9h3.8v-4.3h2.2v4.3c1.6,0,6.2-0.3,8-0.6v1.8C481.8,516,478,516.3,473.1,516.3z  M481.8,512.4h-2.2c0-0.2,0.7-2.9,0.8-5.1h-8.6v-1.9h11C482.7,506.8,482.4,510.7,481.8,512.4z M473.8,523.5v-5.8h2.2v3.9h12.2v1.9 H473.8z M487.6,512.5v6.3h-2.2v-14.5h2.2v6.3h2.7v1.9H487.6z M497.1,515.2l-5,0v-5.8h7.5v-2.2h-7.5v-1.9h9.7v5.8h-7.5v2.1l3.7,0 c1.9,0,4.8-0.3,6.2-0.4v1.8C502.7,514.9,499.6,515.1,497.1,515.2z M494.1,523.8v-6.8h13.8v6.8H494.1z M505.6,518.8h-9.3v3.1h9.3 V518.8z M507.9,511.2v4.8h-2.2v-11.6h2.2v4.9h2.8v1.9H507.9z M513.5,520.6l-1.7-1.3c5.9-2.6,8-7.8,8.2-10.8h-7v-1.9h9.6 C522.6,511.2,519.7,517.7,513.5,520.6z M528.4,504.4v8.1h3v2h-3v9.5h-2.2v-19.6H528.4z"/> <path fill="#000100" d="M483.5,495.3l0-12H480v-1.8c0.5,0,1-0.1,1.5-0.2c0.5-0.1,0.9-0.3,1.3-0.6c0.3-0.2,0.6-0.5,0.8-0.9 c0.2-0.4,0.4-0.8,0.4-1.3h1.7l0,16.8H483.5z"/> <path fill="#000100" d="M500.4,485.5c1.2,0.9,1.8,2.3,1.8,4.4c0,1.9-0.6,3.3-1.8,4.3c-1.2,1-2.5,1.5-3.8,1.5c-1.7,0-3-0.5-4-1.5 c-1-1-1.5-2.1-1.7-3.3h2.1c0.1,0.7,0.5,1.4,1.1,1.9c0.6,0.6,1.4,0.9,2.4,0.9c1,0,1.7-0.4,2.4-1.1c0.6-0.7,0.9-1.6,0.9-2.7 c0-1.1-0.3-2-0.9-2.7c-0.6-0.7-1.4-1.1-2.4-1.1c-0.8,0-1.4,0.1-1.9,0.4c-0.5,0.3-0.9,0.6-1.2,1l-2.1,0l1.3-8.8h8.9v2h-7l-0.7,4.2 c0.5-0.3,1.1-0.5,1.7-0.7c0.6-0.1,1.2-0.2,1.7-0.1C498.2,484.2,499.2,484.7,500.4,485.5z"/> </symbol>', '<symbol id="maturity-rating-KR-KMRB-124" viewBox="442.6 442.6 114.8 114.8"> <path fill="#CC2E32" d="M500,557.4c31.7,0,57.4-25.7,57.4-57.4c0-31.7-25.7-57.4-57.4-57.4c-31.7,0-57.4,25.7-57.4,57.4 C442.6,531.6,468.3,557.4,500,557.4"/> <path fill="#FFFFFF" d="M482,488.6c-1.6-0.3-4.3-1.9-5.2-3.3c-0.7,1.5-3.5,3.4-5.3,3.8l-1.5-1.7c4.8-1.6,5.5-4.2,5.5-5h-4.1v-1.8h10.7 v1.8h-4.2c0,0.8,1.6,3.6,5.2,4.4L482,488.6z M488.1,493.5c0,2.2-2.5,3.8-7.4,3.8s-7.5-1.6-7.5-3.8c0-2.2,2.6-3.8,7.4-3.8 C485.5,489.7,488.1,491.3,488.1,493.5z M473.7,479.1v-1.8h6.2v1.8H473.7z M480.7,491.4c-3.1,0-4.9,0.8-4.9,2.1 c0,1.2,1.8,2.1,4.9,2.1c3,0,4.8-0.8,4.8-2C485.5,492.2,483.7,491.4,480.7,491.4z M485.8,489.4v-4.7h-3.9v-1.8h3.9v-5.6h2.2v12.1 H485.8z M490.2,494.5v-1.9h8.7v-4.2h2.2v4.2h8.7v1.9H490.2z M492.8,489.1l-1.6-1.6c6.7-2.3,7.6-6.1,7.6-8v-1.6h2.4v1.6 c0,1.9,1.1,5.8,7.6,8l-1.6,1.6c-3-0.9-6.2-3.7-7.2-5.9C499.1,485.6,495.7,488.3,492.8,489.1z M517.1,488.7h-4.9v-10.6h2.2v8.7h2.7 c2.7,0,5.5-0.4,7-0.7v1.8C522.9,488.2,520.1,488.6,517.1,488.7z M514.4,496.5v-5.9h2.2v4.1h12.3v1.9h-14.5V496.5z M526.2,491.5 v-6.7h-5.6V483h5.6v-1.8h-5.6v-1.8h5.6v-2.1h2.2v14.2H526.2z"/> <path fill="#FFFFFF" d="M462.1,515.6h-2.6v-1.9h3.8v-4.3h2.2v4.3c1.6,0,6.2-0.3,8.1-0.6v1.8C470.9,515.3,467,515.6,462.1,515.6z  M470.8,511.7h-2.2c0-0.2,0.7-2.9,0.8-5.1h-8.6v-1.9h11C471.8,506.1,471.4,510,470.8,511.7z M462.9,522.8V517h2.2v3.9h12.2v1.9 L462.9,522.8L462.9,522.8z M476.6,511.8v6.3h-2.2v-14.5h2.2v6.3h2.7v1.9L476.6,511.8L476.6,511.8z M486.2,514.5h-5v-5.8h7.5v-2.2 h-7.5v-1.9h9.7v5.8h-7.5v2.1h3.7c1.9,0,4.8-0.3,6.2-0.4v1.8C491.8,514.2,488.7,514.4,486.2,514.5z M483.2,523.1v-6.8h13.7v6.8 H483.2z M494.7,518.1h-9.3v3.1h9.3V518.1z M496.9,510.5v4.8h-2.2v-11.6h2.2v4.9h2.8v1.9L496.9,510.5L496.9,510.5z M509.1,513.8 h-8.6v-1.7h19.6v1.7h-8.7v1.6h6.1v4.7h-12.2v1.3H518v1.7h-15v-4.6h12.2v-1.3H503v-1.7h6.1L509.1,513.8L509.1,513.8z M503,510.7V504 h2.2v1.8h10.1V504h2.2v6.7H503z M515.3,507.4h-10.1v1.6h10.1V507.4z M523.1,519.9l-1.7-1.3c5.9-2.6,8-7.8,8.2-10.8h-7v-1.9h9.6 C532.2,510.5,529.3,517,523.1,519.9z M538,503.7v8.1h3v2h-3v9.5h-2.2v-19.6L538,503.7L538,503.7z"/> </symbol>', '<symbol id="maturity-advisory-KR-KMRB-harmful-themes" viewBox="0 0 56 50"><style>.st00{clip-path:url(#SVGID_2_);} .st01{clip-path:url(#SVGID_4_);fill:#242424;} .st02{clip-path:url(#SVGID_6_);} .st03{opacity:0.2;clip-path:url(#SVGID_8_);fill:none;stroke:#FFFFFF;stroke-width:2;stroke-miterlimit:10;} .st04{fill:none;stroke:#FFFFFF;stroke-width:2;} .st05{fill:none;stroke:#FFFFFF;stroke-width:4;stroke-linecap:square;} .st06{fill:#FFFFFF;}</style><defs><path id="SVGID_1_" d="M0 6c0-3.3 2.7-6 6-6h44c3.3 0 6 2.7 6 6v38c0 3.3-2.7 6-6 6H6c-3.3 0-6-2.7-6-6V6z"/></defs><clipPath id="SVGID_2_"><use xlink:href="#SVGID_1_" overflow="visible"/></clipPath><g class="st00"><defs><path id="SVGID_3_" d="M0 0h56v50H0z"/></defs><clipPath id="SVGID_4_"><use xlink:href="#SVGID_3_" overflow="visible"/></clipPath><path d="M0 6c0-3.3 2.7-6 6-6h44c3.3 0 6 2.7 6 6v38c0 3.3-2.7 6-6 6H6c-3.3 0-6-2.7-6-6V6z" class="st01"/></g><defs><path id="SVGID_5_" d="M0 6c0-3.3 2.7-6 6-6h44c3.3 0 6 2.7 6 6v38c0 3.3-2.7 6-6 6H6c-3.3 0-6-2.7-6-6V6z"/></defs><clipPath id="SVGID_6_"><use xlink:href="#SVGID_5_" overflow="visible"/></clipPath><g class="st02"><defs><path id="SVGID_7_" d="M0 0h56v50H0z"/></defs><clipPath id="SVGID_8_"><use xlink:href="#SVGID_7_" overflow="visible"/></clipPath><path d="M0 6c0-3.3 2.7-6 6-6h44c3.3 0 6 2.7 6 6v38c0 3.3-2.7 6-6 6H6c-3.3 0-6-2.7-6-6V6z" class="st03"/></g><circle id="path-1_1_" cx="39" cy="17" r="13" class="st04"/><path id="Line" d="M31.5 9.5l15 15" class="st05"/><path id="Shape" d="M9.1 35.6v1.2H7.6V33.2H3.8v-1.4H12.8v1.4H9v2.4h.1zm.1-7.7c.1.3.3.6.5.9s.5.5.8.7.7.3 1 .5c.4.1.7.2 1.1.3-.1.1-.2.2-.2.3-.1.1-.1.2-.2.3-.1.1-.1.2-.2.3-.1.1-.1.2-.2.2-.3-.1-.6-.1-.9-.3-.3-.1-.6-.3-.9-.4l-.9-.6c-.3-.2-.5-.5-.7-.8-.2.2-.4.5-.6.7s-.5.4-.8.6-.6.3-.9.5c-.3.1-.7.2-1 .3-.1-.1-.1-.2-.2-.2-.1-.1-.2-.2-.2-.3-.1-.1-.2-.2-.2-.3-.1-.1-.2-.2-.2-.3.9-.2 1.7-.5 2.3-.9s1-.8 1.2-1.4H5.1v-1.4h7.1V28h-3v-.1z" class="st06"/><path id="Shape_1_" d="M19.9 29.4c0 .5 0 1 .1 1.4s.2.8.3 1.1c.1.3.3.6.6.9.2.3.5.5.9.8l-.5.5c-.1.2-.3.3-.4.5-.1-.1-.3-.2-.4-.4-.2-.1-.3-.3-.5-.5s-.3-.4-.4-.6c-.1-.2-.3-.4-.4-.6l-.3.6c-.1.2-.3.4-.4.6-.2.2-.3.4-.5.6l-.5.5c-.1-.1-.2-.1-.2-.2-.1-.1-.2-.1-.3-.2-.1-.1-.2-.2-.3-.2-.1-.1-.2-.2-.3-.2.4-.3.7-.5 1-.9.3-.3.5-.7.7-1.1.1-.3.2-.7.3-1.1s.1-.9.1-1.4v-1.2H17v-1.4H21.4v1.4h-1.5v1.1zm1.7 1.6h-.8v-1.5h1.3V26.4h1.4v9.8h-1.4V30.9h-.5v.1zm3.8 5v.8H24V26.4h1.4V36z" class="st06"/><path id="Shape_2_" d="M5.7 45.8c-.3-.1-.6-.3-.9-.6s-.5-.7-.6-1.1c-.1-.3-.2-.6-.2-1-.1-.4-.1-.9-.1-1.4 0-.4 0-.8.1-1.2.1-.4.1-.7.2-.9.2-.4.4-.8.6-1.1.3-.3.6-.6.9-.7l.2.4-.6.6c-.2.2-.3.4-.4.7s-.2.6-.2 1-.1.8-.1 1.3v1.1c0 .3.1.6.1.9.1.5.2.9.4 1.2.2.3.4.5.7.7l-.1.1z" class="st06"/><path id="Shape_3_" d="M11.1 44.6v.8h-.9v-2.5H8.7v2.4h-.9V42.9H6.2V42H12.7v.9h-1.6v1.7zm-2.7-3.3c-.3-.1-.6-.2-.8-.4-.2-.2-.4-.3-.5-.6-.1-.2-.2-.4-.2-.7 0-.2.1-.5.2-.7s.3-.4.5-.6c.2-.2.5-.3.8-.4.3-.1.7-.1 1.1-.1s.8 0 1.1.1.6.2.8.4.4.3.5.6c.1.2.2.4.2.7 0 .2-.1.5-.2.7-.1.2-.3.4-.5.6-.2.2-.5.3-.8.4-.3.1-.7.1-1.1.1-.4.1-.7 0-1.1-.1zm-.1-.9c.3.2.7.3 1.2.3s.9-.1 1.2-.3.5-.4.5-.7-.2-.5-.5-.7-.7-.3-1.2-.3-.9.1-1.2.3-.5.4-.5.7.2.6.5.7z" class="st06"/><path id="Shape_4_" d="M14 40.1h-.6v-.8H16.9v.8H14zm-.3 1.5c.1-.2.2-.4.3-.5.1-.2.3-.3.5-.4.2-.1.4-.1.6-.1.2 0 .5 0 .6.1.2.1.4.2.5.4s.2.3.3.5c.1.2.1.4.1.7 0 .5-.1.9-.4 1.2-.3.3-.7.5-1.1.5-.2 0-.5 0-.6-.1-.2-.1-.3-.2-.5-.4-.1-.2-.2-.3-.3-.5s-.1-.4-.1-.7 0-.5.1-.7zm.9-2.7h-.4v-.8H16v.8h-1.4zm1.1 2.7c-.1-.2-.3-.3-.6-.3-.2 0-.4.1-.6.3-.1.2-.2.4-.2.7s.1.5.2.7.3.3.6.3.5-.1.6-.3.2-.4.2-.7-.1-.5-.2-.7zm3-.8v-3h.9v7.6h-.9v-3.8H18V45h-.9V37.8h.9v2.8h.7v.2z" class="st06"/><path id="Shape_5_" d="M22.8 38.9c0 .3 0 .5.1.8.1.2.2.5.4.7.2.2.3.4.5.5s.4.3.6.3c0 0-.1.1-.1.2s-.1.1-.1.2c-.1.1-.1.1-.1.2s-.1.1-.1.2c-.1-.1-.3-.1-.4-.2-.1-.1-.3-.2-.4-.3-.2-.1-.3-.3-.5-.4-.1-.2-.3-.3-.4-.5-.1.2-.1.3-.3.5-.1.2-.2.3-.4.5s-.3.3-.5.4c-.2.1-.3.2-.5.3l-.3-.3c-.1-.1-.3-.2-.4-.3.2-.1.5-.3.7-.4l.6-.6c.2-.2.3-.4.4-.7s.1-.5.1-.8v-.9h1v.4l.1.2zm-1.3 4.5c.1-.2.3-.4.5-.5s.5-.2.8-.3.7-.1 1-.1c.4 0 .7 0 1 .1s.6.2.8.3c.2.1.4.3.5.5s.2.4.2.6-.1.4-.2.6c-.1.2-.3.4-.5.5s-.5.2-.8.3-.7.1-1 .1c-.4 0-.7 0-1-.1s-.6-.2-.8-.3c-.2-.1-.4-.3-.5-.5s-.2-.4-.2-.6.1-.4.2-.6zm.9.9l.3.3c.1.1.3.1.5.2.2 0 .4.1.6.1s.4 0 .6-.1c.2 0 .4-.1.5-.2.1-.1.3-.2.3-.3.1-.1.1-.2.1-.3 0-.3-.2-.5-.5-.6s-.7-.2-1.1-.2c-.2 0-.4 0-.6.1-.2 0-.4.1-.5.2s-.3.2-.3.3c-.1.1-.1.2-.1.3 0 .1.1.1.2.2zm2.1-4.3h-.6v-.9h1.4v-1.4h.9v4.6h-.9v-2.5h-.8v.2z" class="st06"/><path id="Shape_6_" d="M35.4 45.3c.3-.2.5-.4.7-.7s.3-.7.4-1.2c.1-.3.1-.5.1-.9v-1.1c0-.5 0-.9-.1-1.3 0-.4-.1-.7-.2-1-.1-.3-.2-.5-.4-.7l-.6-.6.2-.4c.3.2.7.4.9.7.3.3.5.7.6 1.1.1.2.1.5.2.9s.1.8.1 1.2c0 .5 0 1-.1 1.4s-.1.8-.2 1c-.2.4-.4.8-.7 1.1s-.6.5-.9.5z" class="st06"/><path id="Shape_7_" d="M29.9 41.9h-1.2v-.8H35.2v.8h-5.3zm.1 3.2c-.4-.3-.7-.6-.7-1.1 0-.4.2-.8.7-1.1.4-.3 1.1-.4 1.9-.4.8 0 1.5.1 1.9.4.4.3.7.6.7 1.1 0 .4-.2.8-.7 1.1-.4.3-1.1.4-1.9.4-.8 0-1.5-.2-1.9-.4zm-.5-4.6V38h4.9v.8h-4v1h4.1v.8h-.9l-4.1-.1zm1.2 4c.3.1.7.2 1.2.2s.9-.1 1.2-.2c.3-.1.4-.3.4-.6 0-.2-.1-.4-.4-.6-.3-.1-.7-.2-1.2-.2s-.9.1-1.2.2c-.3.1-.4.3-.4.6s.1.5.4.6z" class="st06"/></symbol>', '<symbol id="maturity-advisory-KR-KMRB-profanity" viewBox="0 0 56 50"><style>.st10{clip-path:url(#SVGID_2_);} .st11{clip-path:url(#SVGID_4_);fill:#242424;} .s1t2{clip-path:url(#SVGID_6_);} .st13{opacity:0.2;clip-path:url(#SVGID_8_);fill:none;stroke:#FFFFFF;stroke-width:2;stroke-miterlimit:10;} .st14{fill:#FFFFFF;}</style><defs><path id="SVGID_1_" d="M0 6c0-3.3 2.7-6 6-6h44c3.3 0 6 2.7 6 6v38c0 3.3-2.7 6-6 6H6c-3.3 0-6-2.7-6-6V6z"/></defs><clipPath id="SVGID_2_"><use xlink:href="#SVGID_1_" overflow="visible"/></clipPath><g class="st10"><defs><path id="SVGID_3_" d="M0 0h56v50H0z"/></defs><clipPath id="SVGID_4_"><use xlink:href="#SVGID_3_" overflow="visible"/></clipPath><path d="M0 6c0-3.3 2.7-6 6-6h44c3.3 0 6 2.7 6 6v38c0 3.3-2.7 6-6 6H6c-3.3 0-6-2.7-6-6V6z" class="st11"/></g><defs><path id="SVGID_5_" d="M0 6c0-3.3 2.7-6 6-6h44c3.3 0 6 2.7 6 6v38c0 3.3-2.7 6-6 6H6c-3.3 0-6-2.7-6-6V6z"/></defs><clipPath id="SVGID_6_"><use xlink:href="#SVGID_5_" overflow="visible"/></clipPath><g class="st12"><defs><path id="SVGID_7_" d="M0 0h56v50H0z"/></defs><clipPath id="SVGID_8_"><use xlink:href="#SVGID_7_" overflow="visible"/></clipPath><path d="M0 6c0-3.3 2.7-6 6-6h44c3.3 0 6 2.7 6 6v38c0 3.3-2.7 6-6 6H6c-3.3 0-6-2.7-6-6V6z" class="st13"/></g><path id="Combined-Shape" d="M44.8 21H48c2.2 0 4-1.8 4-4V8c0-2.2-1.8-4-4-4H22c-2.2 0-4 1.8-4 4v9c0 2.2 1.8 4 4 4h15.5l8.5 6.8-1.2-6.8zm-20-5.1l.2-1.2c-.6 0-.9-.2-.9-.7 0-.2.1-.4.2-.5s.4-.2.6-.2h.3l.4-1.8H25c-.3 0-.5-.1-.6-.2-.2-.1-.2-.3-.2-.5s.1-.4.2-.5.4-.2.6-.2h.9l.3-1.5c0-.2.1-.4.2-.6.1-.1.1-.2.2-.3.1-.1.2-.1.4-.1s.4.1.5.2.2.3.2.5c0 0 0 .3-.1.6l-.3 1.1h1.4l.3-1.4c0-.2.1-.4.1-.5s.1-.2.2-.3c.1-.1.2-.1.4-.1s.4.1.5.2.2.3.2.5V9l-.2 1c.6 0 .9.2.9.7 0 .2-.1.4-.2.5s-.4.2-.6.2H30l-.4 1.8h.7c.3 0 .5.1.6.2.1.1.2.3.2.5s-.1.4-.2.5-.4.2-.6.2h-1l-.3 1.5c0 .2-.1.4-.1.5s-.1.2-.2.3-.2.1-.4.1-.4-.1-.5-.2-.2-.3-.2-.5 0-.4.1-.6l.2-1.2h-1.4l-.3 1.5c-.1.4-.2.6-.2.8-.1.2-.3.2-.5.2s-.4-.1-.5-.2-.2-.3-.2-.5v-.4c-.1.2-.1.1 0 0zm3.7-4.5h-1.4l-.4 1.8h1.4l.4-1.8zm5.6-1.7c0-.4.1-.8.3-1.1s.5-.6.9-.8.9-.3 1.4-.3 1 .1 1.4.3c.4.2.7.5.9.8s.3.7.3 1c0 .5-.2.9-.5 1.2-.3.4-.8.7-1.4 1.1.2.2.4.5.6.7s.4.4.5.6.3.4.5.5c.1-.1.2-.3.3-.7s.3-.6.4-.7c.1-.1.3-.2.5-.2s.4.1.5.2.2.3.2.5-.1.4-.2.8c-.1.3-.3.7-.6 1.1.2.1.4.3.7.6s.6.5.6.6c.1.1.1.2.1.4s-.1.4-.2.6-.3.2-.5.2-.4-.1-.6-.2c-.2-.1-.6-.4-1.2-.9-.3.3-.6.5-.9.6-.3.2-.6.3-.9.4s-.7.1-1.1.1c-.5 0-1-.1-1.4-.2-.4-.2-.8-.4-1.1-.6-.3-.3-.5-.6-.6-.9-.1-.3-.2-.6-.2-1 0-.3.1-.6.2-.9s.2-.5.4-.7.4-.4.7-.6l.9-.6c-.3-.4-.6-.8-.7-1.1s-.2-.5-.2-.8zm1.8 3c-.4.2-.8.5-1 .7s-.3.5-.3.9c0 .2 0 .4.1.6.1.2.2.3.3.5s.3.3.5.3c.2.1.4.1.6.1.2 0 .4 0 .6-.1l.6-.3s.4-.3.6-.5c-.4-.3-.7-.7-1-1-.3-.3-.6-.7-1-1.2zm.6-1.7c.4-.3.7-.5.9-.7s.3-.4.3-.7-.1-.5-.3-.7-.4-.3-.7-.3-.5.2-.7.3-.3.4-.3.6c0 .1 0 .3.1.4.1.1.2.3.3.4.1.3.2.4.4.7zm7.8 2l-.2-3c0-.6-.1-1-.1-1.3 0-.4.1-.6.3-.8s.4-.3.7-.3c.4 0 .6.1.7.4.1.3.2.6.2 1.1v.9l-.3 3c0 .4-.1.7-.2.9-.1.2-.3.3-.5.3s-.4-.1-.5-.3-.1-.5-.1-.9zm.7 4.1c-.3 0-.5-.1-.7-.3-.2-.2-.3-.4-.3-.7 0-.3.1-.5.3-.7s.4-.3.7-.3.5.1.7.3.3.4.3.7c0 .3-.1.5-.3.7s-.5.3-.7.3z" class="st14"/><path id="Shape" d="M6.8 32.5h2.1c.2 0 .4 0 .5-.1.1 0 .3-.1.3-.1v1.3c-.1 0-.3.1-.5.1s-.5.1-.7.1c-.3 0-.5 0-.8.1H5.4V27.2c0-.2 0-.4-.1-.6h4v1.3H7v4.6h-.2zm5.8-3.4v-3.3h1.5V36.2h-1.5V30.5h-1v5.2h-1.5v-9.8h1.5v3.2h1z" class="st14"/><path id="Shape_1_" d="M20 26.8v-.6h1.4v2.5c0 .6.1 1.1.2 1.5.1.5.3.9.5 1.2.2.4.4.7.7 1 .3.3.6.5.9.8l-.3.3-.3.3-.2.2-.2.2c-.1-.1-.3-.2-.5-.4l-.6-.6c-.2-.2-.4-.5-.5-.7-.2-.3-.3-.5-.4-.8-.1.3-.2.5-.3.8-.2.3-.3.5-.5.8-.2.2-.4.5-.6.7l-.5.5-.5-.5s-.4-.3-.6-.5c.4-.3.7-.6 1.1-.9.3-.3.6-.7.8-1.2.2-.4.3-.8.4-1.2.1-.4.1-.9.1-1.4v-1.3c-.1-.3-.1-.5-.1-.7zm5.7 2.9h.8v1.4H25.3v5.2H24V25.9h1.3v3.9l.4-.1z" class="st14"/><path id="Shape_2_" d="M6.8 45.8c-.3-.1-.6-.3-.9-.7-.3-.3-.5-.7-.6-1.1-.1-.3-.2-.6-.2-1.1-.1-.4-.1-.9-.1-1.5 0-.4 0-.8.1-1.2s.1-.7.2-.9c.2-.4.4-.8.6-1.1.3-.3.6-.6.9-.8l.2.4-.6.6c-.1.2-.3.4-.4.7s-.2.6-.2 1-.1.8-.1 1.3v1.1c0 .3.1.6.1.9.1.5.2.9.4 1.2.2.3.4.5.7.7l-.1.5z" class="st14"/><path id="Shape_3_" d="M8.1 39.2h-.6v-.8H11.2v.8H9.8v.7c0 .4 0 .7.1 1l.3.9c.1.3.3.6.6.8.2.3.5.5.8.7l-.3.3-.3.3c-.1-.1-.3-.2-.4-.4-.2-.1-.3-.3-.4-.5-.2-.2-.3-.4-.4-.6l-.3-.6-.3.6s-.2.4-.4.6-.3.4-.5.6c-.2.2-.3.3-.5.4l-.3-.3c-.1-.1-.2-.2-.4-.3.3-.2.6-.4.8-.7s.4-.5.6-.9c.2-.3.3-.6.3-1 .1-.4.1-.7.1-1.2V39h-.8v.2zm3.3 2h-.6v-.9H12.1v-2.5h.9V45.5h-.9v-4.4h-.7v.1z" class="st14"/><path id="Shape_4_" d="M16.2 41.2v-.6h.9v1H19.9v.9H13.5v-.9h2.8l-.1-.4zm1.1-2.2l.6.6c.2.2.5.3.8.4.3.1.6.2.8.2l-.3.3c-.1.1-.2.2-.2.3-.2 0-.4-.1-.6-.2-.2-.1-.5-.2-.7-.4-.2-.1-.4-.3-.6-.5s-.3-.3-.4-.5c-.1.2-.2.4-.4.6-.2.2-.4.3-.6.4-.2.1-.4.3-.7.4-.2.1-.5.2-.7.2-.1-.1-.1-.2-.2-.3l-.3-.3.9-.3c.3-.1.6-.3.8-.5s.4-.4.5-.6c.1-.2.2-.4.2-.7v-.2h1V38.2c-.1.3 0 .6.1.8zm1.7 6.2v.4h-.9V43.9h-3.8V43h4.8V44.7c-.1.2-.1.4-.1.5z" class="st14"/><path id="Shape_5_" d="M22.5 39c0 .3 0 .5.1.8.1.2.2.5.4.7s.3.4.5.5.4.3.6.3c0 0-.1.1-.1.2s-.1.1-.1.2c-.1.1-.1.1-.1.2s-.1.1-.1.2c-.1-.1-.3-.1-.4-.2-.1-.1-.3-.2-.4-.3-.2-.1-.3-.3-.4-.4-.1-.2-.3-.3-.3-.5 0 .2-.1.3-.2.5s-.2.3-.4.5c-.1.2-.3.3-.5.4-.2.1-.3.2-.5.3l-.3-.3c-.1-.1-.2-.2-.4-.3.2-.1.5-.3.7-.5l.6-.6c.2-.2.3-.4.4-.7s.1-.5.1-.8v-.9h.9v.7h-.1zm-1.3 4.5c.1-.2.3-.4.5-.5s.5-.2.8-.3.6-.1 1-.1.7 0 1 .1.6.2.8.3c.2.1.4.3.5.5s.2.4.2.6c0 .2-.1.4-.2.6-.1.2-.3.4-.5.5s-.5.2-.8.3-.6.1-1 .1-.7 0-1-.1-.6-.2-.8-.3c-.2-.1-.4-.3-.5-.5s-.2-.4-.2-.6c.1-.2.1-.4.2-.6zm.9 1l.3.3c.1.1.3.1.5.2.2 0 .4.1.6.1s.4 0 .6-.1c.2 0 .4-.1.5-.2l.3-.3s.1-.2.1-.3c0-.3-.1-.5-.5-.6-.3-.1-.7-.2-1.1-.2-.2 0-.4 0-.6.1-.2 0-.4.1-.5.2l-.3.3s-.1.2-.1.4c.1-.2.1-.1.2.1zm2.1-4.4h-.6v-.8H25v-1.4h.9V42.6H25v-2.5h-.8z" class="st14"/><path id="Shape_6_" d="M34.5 45.4c.3-.2.5-.4.7-.7s.3-.7.4-1.2c.1-.3.1-.6.1-.9v-1.1c0-.5 0-.9-.1-1.3 0-.4-.1-.7-.2-1-.1-.3-.2-.5-.4-.7s-.3-.4-.6-.6l.2-.4c.3.2.6.4.9.8.3.3.5.7.6 1.1.1.2.1.6.2.9.1.4.1.8.1 1.2 0 .5 0 1-.1 1.5-.1.4-.1.8-.2 1.1-.2.4-.4.8-.6 1.1-.3.3-.5.5-.9.7l-.1-.5z" class="st14"/><path id="Shape_7_" d="M29.7 42.3h-1.2v-.8H35v.8h-5.3zm.1 3.1c-.4-.3-.7-.6-.7-1.1 0-.4.2-.8.7-1.1.4-.3 1.1-.4 1.9-.4.8 0 1.5.1 1.9.4.4.3.7.6.7 1.1 0 .4-.2.8-.7 1.1-.4.3-1.1.4-1.9.4-.8 0-1.5-.1-1.9-.4zm-.5-4.6v-2.5h4.9v.8h-4v1h4.1v.8h-.9l-4.1-.1zm1.2 4.1c.3.1.7.2 1.2.2s.9-.1 1.2-.2c.3-.1.4-.3.4-.6 0-.2-.1-.4-.4-.6-.3-.1-.7-.2-1.2-.2s-.9.1-1.2.2c-.3.1-.4.3-.4.6 0 .2.2.4.4.6z" class="st14"/></symbol>', '<symbol id="maturity-advisory-KR-KMRB-violence" viewBox="0 0 56 50"><style>.st20{clip-path:url(#SVGID_2_);} .st21{clip-path:url(#SVGID_4_);fill:#242424;} .st22{clip-path:url(#SVGID_6_);} .st23{opacity:0.2;clip-path:url(#SVGID_8_);fill:none;stroke:#FFFFFF;stroke-width:2;stroke-miterlimit:10;} .st24{fill:#FFFFFF;} .st25{fill:none;stroke:#FFFFFF;} .st26{fill:none;stroke:#FFFFFF;stroke-linecap:round;}</style><defs><path id="SVGID_1_" d="M0 6c0-3.3 2.7-6 6-6h44c3.3 0 6 2.7 6 6v38c0 3.3-2.7 6-6 6H6c-3.3 0-6-2.7-6-6V6z"/></defs><clipPath id="SVGID_2_"><use xlink:href="#SVGID_1_" overflow="visible"/></clipPath><g class="st20"><defs><path id="SVGID_3_" d="M0 0h56v50H0z"/></defs><clipPath id="SVGID_4_"><use xlink:href="#SVGID_3_" overflow="visible"/></clipPath><path d="M0 6c0-3.3 2.7-6 6-6h44c3.3 0 6 2.7 6 6v38c0 3.3-2.7 6-6 6H6c-3.3 0-6-2.7-6-6V6z" class="st21"/></g><defs><path id="SVGID_5_" d="M0 6c0-3.3 2.7-6 6-6h44c3.3 0 6 2.7 6 6v38c0 3.3-2.7 6-6 6H6c-3.3 0-6-2.7-6-6V6z"/></defs><clipPath id="SVGID_6_"><use xlink:href="#SVGID_5_" overflow="visible"/></clipPath><g class="st22"><defs><path id="SVGID_7_" d="M0 0h56v50H0z"/></defs><clipPath id="SVGID_8_"><use xlink:href="#SVGID_7_" overflow="visible"/></clipPath><path d="M0 6c0-3.3 2.7-6 6-6h44c3.3 0 6 2.7 6 6v38c0 3.3-2.7 6-6 6H6c-3.3 0-6-2.7-6-6V6z" class="st23"/></g><path id="Combined-Shape" d="M29.3 38.8l2.6 2.6 3.7 1.7.8.3-1.1 3.6-4.4-4-8.4 3.5.8-8.4-7.8-5.1 7.8-5-2.8-10.1 11 2.1 6.1-8 5.9 8h8l-4 7.4L53 32l-5.7 2.5v-.7l-.9-3.9-1.6-2.7-2-.4h-.4l1.1-.1-2-2.6-2.5-3.2c-.7-.9-2.2-1-3.2-.2-1.1.8-1.3 2.2-.6 3.1l2.2 2.8h-.1l-.5-.5-2.5-2.8c-.8-.9-2.2-.8-3.2.1s-1.2 2.3-.4 3.2l2 2.2-.1.1-1.4-1.4c-.9-1-2.5-1-3.4-.1-1 .9-1 2.5-.1 3.4l1.7 1.8v.1l-.5-.5c-.9-.9-2.5-1-3.4 0-.9.9-.9 2.5 0 3.4l2.5 2.5c.3.4.8.7 1.3.7z" class="st24"/><path id="Rectangle" d="M43.5 26.7l-2-2.6-2.5-3.2c-.7-.9-2.2-1-3.2-.2-1.1.8-1.3 2.2-.6 3.1l2.5 3.2" class="st25"/><path id="Rectangle-Copy" d="M37.7 27.2l-1-1.1-2.5-2.8c-.8-.9-2.2-.8-3.2.1s-1.2 2.3-.4 3.2l2.5 2.8" class="st25"/><path id="Path-4_1_" d="M52 43.9l-4.8-6.5s1.4-5.2-1.8-9.5-12 1.7-12 1.7-.2 3.6 3.5 3.1c1.6-.2 2.6-.8 3.6-1" class="st26"/><path d="M33.4 29.8l-2.3-2.4c-.9-1-2.5-1-3.4-.1-1 .9-1 2.5-.1 3.4l2.5 2.6c.9 1 2.5 1 3.4.1.4-.4.6-.9.7-1.4-.6-.7-.8-1.8-.8-2.2z" class="st26"/><path id="Rectangle-Copy-3" d="M25.4 32.2c-.9.9-.9 2.5 0 3.4l2.5 2.5c.9.9 2.5.9 3.4 0 .9-.9.9-2.5 0-3.4l-2.5-2.5c-.9-.9-2.5-.9-3.4 0z" class="st26"/><path id="Path-5" d="M40.1 46.4l-2.3-2.6s-3.8 0-8.6-4.6" class="st26"/><path id="Shape" d="M11.5 9.6h1.6v1.3H4.3V9.6H8v-.8H5.1V7.5h1.3V6H5.3V4.7h6.9V6h-1.1v1.5h1.3v1.3H9.5v.8h2zm.6 4.8v.5h-1.5v-2H5.1v-1.3H12v2.2c.1.2.1.4.1.6zM7.6 7.6h2.1V6.1H7.6v1.5z" class="st24"/><path id="Shape_1_" d="M15.4 6.2h-1V4.9h4.7v3.4h-3.3v1h1.9c.3 0 .5 0 .8-.1.3 0 .5-.1.8-.1.3 0 .5-.1.7-.1v1.2c-.2 0-.4.1-.7.1-.3 0-.6.1-.9.1s-.7.1-1 .1h-3V7.1h3.3v-1l-2.3.1zm7.2 8.2v.5H21v-2.1H15.2v-1.3h7.4v2.9zm-2.1-7.5h-.8V5.6h1.4v-1h1.5v6.5h-1.4V8.9h-1.5V7.6h1.4v-.8l-.6.1z" class="st24"/><path id="Shape_2_" d="M27.8 7c.1.3.3.6.5.9.2.3.5.5.7.7.3.2.6.3.9.4-.1.1-.1.2-.2.3s-.2.2-.2.3c-.1.1-.2.2-.2.3-.1.1-.1.2-.2.2l-.6-.3s-.4-.3-.6-.5-.4-.3-.6-.5-.3-.4-.4-.6l-.3.6-.6.6-.6.6c-.2.2-.4.3-.6.4l-.5-.5s-.4-.4-.6-.5l.9-.6c.3-.2.6-.5.8-.8.2-.3.4-.6.5-.9s.2-.7.2-1V4.8h1.6V6c-.1.4-.1.7.1 1zm-2.2 5c.2-.3.4-.5.7-.7.3-.2.7-.3 1.1-.5.4-.1.9-.2 1.5-.2.5 0 1 .1 1.5.2.4.1.8.3 1.1.4.3.2.6.4.7.7.2.3.3.5.3.9 0 .3-.1.6-.3.9s-.4.5-.7.7c-.3.2-.7.3-1.1.4-.4.1-.9.2-1.5.2s-1.1-.1-1.5-.2c-.4-.1-.8-.2-1.1-.4-.3-.2-.5-.4-.7-.7s-.3-.5-.3-.9c0-.2.1-.5.3-.8zm1.4 1.3c.1.1.3.2.4.3.2.1.4.2.7.2.3.1.5.1.8.1.6 0 1.1-.1 1.5-.3s.6-.4.6-.7-.2-.6-.6-.8-.9-.3-1.5-.3-1.1.1-1.5.3-.6.4-.6.7c0 .2.1.3.2.5zm2.9-5.7h-.8V6.2h1.8V4.5h1.5V10.7h-1.5V7.5l-1 .1z" class="st24"/></symbol>', '<symbol id="maturity-advisory-KR-KMRB-immatatable-behaviors" viewBox="0 0 56 50"><style>.st30{clip-path:url(#SVGID_2_);} .st31{clip-path:url(#SVGID_4_);fill:#242424;} .st32{clip-path:url(#SVGID_6_);} .st33{opacity:0.2;clip-path:url(#SVGID_8_);fill:none;stroke:#FFFFFF;stroke-width:2;stroke-miterlimit:10;} .st34{fill:#FFFFFF;} .st35{fill:none;stroke:#FFFFFF;stroke-width:2;} .st36{fill:none;stroke:#FFFFFF;stroke-linecap:square;}</style><defs><path id="SVGID_1_" d="M0 6c0-3.3 2.7-6 6-6h44c3.3 0 6 2.7 6 6v38c0 3.3-2.7 6-6 6H6c-3.3 0-6-2.7-6-6V6z"/></defs><clipPath id="SVGID_2_"><use xlink:href="#SVGID_1_" overflow="visible"/></clipPath><g class="st30"><defs><path id="SVGID_3_" d="M0 0h56v50H0z"/></defs><clipPath id="SVGID_4_"><use xlink:href="#SVGID_3_" overflow="visible"/></clipPath><path d="M0 6c0-3.3 2.7-6 6-6h44c3.3 0 6 2.7 6 6v38c0 3.3-2.7 6-6 6H6c-3.3 0-6-2.7-6-6V6z" class="st31"/></g><defs><path id="SVGID_5_" d="M0 6c0-3.3 2.7-6 6-6h44c3.3 0 6 2.7 6 6v38c0 3.3-2.7 6-6 6H6c-3.3 0-6-2.7-6-6V6z"/></defs><clipPath id="SVGID_6_"><use xlink:href="#SVGID_5_" overflow="visible"/></clipPath><g class="st32"><defs><path id="SVGID_7_" d="M0 0h56v50H0z"/></defs><clipPath id="SVGID_8_"><use xlink:href="#SVGID_7_" overflow="visible"/></clipPath><path d="M0 6c0-3.3 2.7-6 6-6h44c3.3 0 6 2.7 6 6v38c0 3.3-2.7 6-6 6H6c-3.3 0-6-2.7-6-6V6z" class="st33"/></g><path id="Shape" d="M12.7 11.9h3.7v1.3H7.6v-1.3h3.7V9.7H8.7V4.5h6.7v5.2h-2.6l-.1 2.2zM14 5.8h-4v2.8h4V5.8z" class="st34"/><path id="Shape_1_" d="M18.2 9.4V4.3h1.5v1.4h2.1V4.3h1.4v5.1h-5zm1.6 1.4c.6-.4 1.5-.6 2.7-.6s2.1.2 2.7.6c.6.4.9.9.9 1.4 0 .6-.3 1.1-.9 1.4-.6.4-1.5.6-2.7.6s-2.1-.2-2.7-.6c-.6-.4-.9-.9-.9-1.4 0-.4.3-1 .9-1.4zm1.8-3.9h-2.1v1.3h2.1V6.9zm2.4 6c.4-.2.6-.4.6-.7s-.2-.5-.6-.7-.9-.2-1.5-.2-1.2.1-1.5.2c-.4.2-.6.4-.6.7s.2.5.6.7.9.2 1.5.2c.6.1 1.1 0 1.5-.2zm2.2-6.7h.8v1.3H25.8V10.3h-1.5V4h1.5v2.2h.4z" class="st34"/><path id="Shape_2_" d="M32.1 13.1v.8h-1.5v-3.2H28V9.4h5c.4 0 .7 0 1.1-.1.4 0 .7-.1.9-.1v1.2c-.4.1-.8.1-1.3.1s-1.1.1-1.6.1v2.5zM29 5.5c.1-.3.3-.5.5-.7s.5-.4.8-.5.7-.2 1.1-.2.8.1 1.1.2.6.3.8.5.4.5.5.7c.1.3.2.6.2.9s-.1.6-.2.9c-.1.3-.3.5-.5.7s-.5.4-.8.5-.7.2-1.1.2-.8-.1-1.1-.2c-.3-.1-.6-.3-.8-.5s-.4-.4-.5-.7c-.1-.3-.2-.6-.2-.9s.1-.6.2-.9zm1.6 1.6c.2.2.5.3.9.3s.7-.1.9-.3c.2-.2.3-.5.3-.8s-.1-.5-.3-.8c-.2-.2-.5-.4-.9-.4s-.7.1-.9.4c-.2.2-.3.5-.3.8 0 .5.1.6.3.8zm6.3 6.3v.7h-1.6V3.9h1.6v9.5z" class="st34"/><path id="Shape_3_" d="M39.6 6.5h-1V5.4h6.3v1.1h-5.3zm-.5 1.3c.1-.2.3-.4.6-.5.2-.1.5-.2.9-.3.3-.1.7-.1 1.1-.1.9 0 1.5.1 2 .4s.8.7.8 1.1c0 .5-.3.8-.8 1.1s-1.2.5-2 .5c-.4 0-.8 0-1.1-.1l-.9-.3c-.2-.1-.4-.3-.6-.5-.1-.2-.2-.4-.2-.6 0-.3.1-.5.2-.7zM40.9 5h-.8V3.9h3.3V5h-2.5zm-.7 9v-3c0-.2 0-.3-.1-.5h7.4V14h-7.3zm.6-5.1c.2.1.6.2 1 .2s.7-.1.9-.2c.2-.1.4-.3.4-.5s-.1-.3-.3-.4-.5-.2-.9-.2-.7.1-1 .2c-.2.1-.4.3-.4.5-.1.1.1.3.3.4zm5.2 2.9h-4.3v1.1H46v-1.1zm-.6-3.5h-.6V7h1.4V3.9h1.5v6.2h-1.4V8.2l-.9.1z" class="st34"/><path id="Combined-Shape" d="M41.9 40v-1H28v1h13.9zm-.1 1c0 .4-.1.7-.1 1H28.2c0-.3-.1-.6-.1-1h13.7zm.2-3v-.6-.4H28v1h14zm-.1-2c0-.4-.1-.7-.1-1H28.2c-.1.3-.1.6-.1 1h13.8zm-3.4-11c.2.3.3.6.4 1h-7.8c.1-.4.2-.7.4-1h7zm-.8-1c-.7-.6-1.6-1-2.7-1s-1.9.4-2.7 1h5.4zm1.3 3c0 .3-.1.7-.1 1h-7.7c-.1-.3-.1-.7-.1-1H39zm-.6 2c-.2.4-.5.7-.9 1h-5.2c-.3-.3-.6-.6-.9-1h7zm.6 2c.6.2 1.1.6 1.5 1h-11c.4-.4.9-.8 1.5-1h8zm2.2 2c.2.3.3.6.4 1H28.4c.1-.4.2-.7.4-1h12.4z" class="st34"/><path id="Combined-Shape_1_" d="M24 33.6c1.5-.7 2.6-2.3 2.6-4.1 0-2.5-2-4.5-4.6-4.5s-4.6 2-4.6 4.5c0 1.8 1.1 3.4 2.6 4.1-3.8.5-6 2.7-6 7.9 0 6 3 5.5 8 5.5s8 .5 8-5.5c0-5.2-2.2-7.4-6-7.9z" class="st34"/><path id="path-1_1_" d="M9 22c0-2.8 2.2-5 5-5h28c2.8 0 5 2.2 5 5v16c0 2.8-2.2 5-5 5H14c-2.8 0-5-2.2-5-5V22z" class="st35"/><path id="Line" d="M22.5 17.5L27 22" class="st36"/><path id="Line-Copy" d="M26.5 17.5L29 20" class="st36"/></symbol>', '<symbol id="maturity-advisory-KR-KMRB-lewdness" viewBox="0 0 56 50"><style>.st40{clip-path:url(#SVGID_2_);} .st41{clip-path:url(#SVGID_4_);fill:#242424;} .st42{clip-path:url(#SVGID_6_);} .st43{opacity:0.2;clip-path:url(#SVGID_8_);fill:none;stroke:#FFFFFF;stroke-width:2;stroke-miterlimit:10;} .st44{fill:#FFFFFF;}</style><defs><path id="SVGID_1_" d="M0 6c0-3.3 2.7-6 6-6h44c3.3 0 6 2.7 6 6v38c0 3.3-2.7 6-6 6H6c-3.3 0-6-2.7-6-6V6z"/></defs><clipPath id="SVGID_2_"><use xlink:href="#SVGID_1_" overflow="visible"/></clipPath><g class="st40"><defs><path id="SVGID_3_" d="M0 0h56v50H0z"/></defs><clipPath id="SVGID_4_"><use xlink:href="#SVGID_3_" overflow="visible"/></clipPath><path d="M0 6c0-3.3 2.7-6 6-6h44c3.3 0 6 2.7 6 6v38c0 3.3-2.7 6-6 6H6c-3.3 0-6-2.7-6-6V6z" class="st41"/></g><defs><path id="SVGID_5_" d="M0 6c0-3.3 2.7-6 6-6h44c3.3 0 6 2.7 6 6v38c0 3.3-2.7 6-6 6H6c-3.3 0-6-2.7-6-6V6z"/></defs><clipPath id="SVGID_6_"><use xlink:href="#SVGID_5_" overflow="visible"/></clipPath><g class="st42"><defs><path id="SVGID_7_" d="M0 0h56v50H0z"/></defs><clipPath id="SVGID_8_"><use xlink:href="#SVGID_7_" overflow="visible"/></clipPath><path d="M0 6c0-3.3 2.7-6 6-6h44c3.3 0 6 2.7 6 6v38c0 3.3-2.7 6-6 6H6c-3.3 0-6-2.7-6-6V6z" class="st43"/></g><g id="Group-3"><g id="Group"><path id="Shape" d="M19.3 13.6c.3.9.9 2.2.7 3.3-.2 1-.5 1.9-.7 2.8l-.2.9s1 0 1.7.3c.7.2 1.5 1.1 1.5 1.9.1.7.2 3.7.1 4.5-.1.9-.3 3.1-.3 3.3 0 0 2.7-.2 3.8 0 1.1.2 2.5.6 3.9 2.7s2.8 4.1 3.5 4.4c.7.3 2.7.3 3.1.3.3 0 2.7.4 3.1.3.5-.2 3.6 1.5 3.9 1.5.4.1 1.1.7 1.1.7s.5-.5 1-.6c.6-.2.9.1 1.1.3.2.2.3.5 1.7.3s1.9.2 2.1.4c.2.2.6.4.7.5.1.1.5.7 0 1 0 0-.5.5-.8.4 0 0-.8-.1-.9-.3-.2-.1-1.3-.3-1.7-.3s-2.2-.1-2.2-.1.3.4-.1.9c0 0 .2.7-.6.6-.7 0-.8-.4-.9-.4-.2 0-1.3-.8-1.3-.8s-7.4.6-8.8.6-3.1 0-3.7.1-2.1.3-2.5.3c-.3 0-2.8.2-3.2-.3-.3-.4-.7-.5-.7-1.5 0 0-.8.3-1.4.3s-5.8 1-6 1.3c-.1.2-.9.3-1.2.3s-1.3-.3-1.5-.1-.4.2-.4-.2c0-.3-1.2.1-1.4.1-.2 0-.6-.1-.4-.3s.4-.3.7-.6c.3-.3.5-.5.8-.9s.5-1 .7-1.4c.2-.3.4-1.1.7-1.5.3-.3 1.9-2.2 1.9-2.2s-.9-2.2-1.3-2.6c-.3-.4-1.8-2.2-2-2.7s-.6 3.9-.6 3.9-.1 2.7-.3 3.7c-.1 1-.8 2.8-.9 3.1 0 .3-.5 1-.7 1.1H9.1c-.3-.1-1.3.3-1.5.3-.1 0-2.1-.1-2.3-.1s-1.2 0-1.3-.1c-.1-.1 1.4-.6 1.7-.8.3-.2.9-.1 1.5-.2h2.2c.3 0 .4-.3.4-.6s-.1-4.1-.1-4.7c-.1-.5-.7-2.2-.2-4 0 0 .3-2.3.3-3s.2-2.1.2-2.3c0 0-.3-.9-.3-1s0-3.3.2-3.7.5-.7 1.4-1.2c.8-.5.7-1 .7-1.2s.5-1.4.6-1.6c.1-.3.3-.4-.1-.8-.4-.5-.2-1.3-.2-2.3s.9-2.8 2.1-3.9c0 0 .7-.4 1.1-.4.4 0 .4.1.8-.1.5-.3.9-.2.9-.2.7.3 1.8 1.6 2.1 2.6z" class="st44"/></g><g id="Group-2"><path id="Shape_1_" d="M26.8 7.9c.1.3.3.6.5.9.2.3.5.5.7.7.3.2.6.3.8.4-.1.1-.2.2-.2.3-.1.1-.2.2-.2.3-.1.1-.2.2-.2.3-.1.1-.1.2-.2.2l-.6-.3c-.2-.1-.4-.3-.6-.5-.2-.2-.4-.3-.6-.5-.2-.2-.3-.4-.4-.6l-.3.6-.6.6-.6.6c-.2.2-.4.3-.6.4l-.2-.2c-.1-.1-.2-.2-.3-.2l-.3-.3-.3-.3c.4-.2.7-.4 1-.7l.9-.9c.2-.2.3-.5.4-.8.1-.3.2-.6.2-1V5.4h1.6V7c-.1.3 0 .6.1.9zm-2.2 5v-.8h1.5V14h5.5v1.3h-6.9v-2.4h-.1zm4.3-4.7h-.8V6.8H30V5.2h1.5V12.6H30V8.3l-1.1-.1z" class="st44"/><path id="Shape_2_" d="M36.5 7.3c0 .3.1.7.2 1 .1.3.3.5.5.7.2.2.5.4.7.6.3.1.5.3.8.3-.2.2-.3.4-.5.6-.2.2-.3.4-.3.5-.1 0-.3-.1-.5-.2s-.4-.3-.6-.4c-.2-.2-.4-.3-.6-.5-.2-.2-.3-.4-.4-.6-.1.2-.2.3-.4.5s-.3.4-.6.6c-.2.2-.4.4-.7.5-.2.2-.4.3-.6.4-.1-.1-.2-.3-.4-.4-.2-.2-.4-.4-.6-.5.3-.1.7-.3 1-.5s.6-.5.8-.7.4-.5.5-.8c.1-.3.2-.6.2-.9v-.4H33.3V5.8H38.1v1.3H36.4l.1.2zm-2 5.3c.2-.3.4-.5.7-.7s.7-.3 1.1-.4c.4-.1.9-.2 1.5-.2.5 0 1 .1 1.5.2.4.1.8.3 1.1.4.3.2.6.4.7.7.2.3.3.5.3.9 0 .3-.1.6-.3.9-.2.3-.4.5-.7.7-.3.2-.7.3-1.1.4-.4.1-.9.2-1.5.2-1.1 0-2-.2-2.6-.6-.6-.4-1-.9-1-1.5.1-.4.2-.7.3-1zm1.5 1.3c.1.1.3.2.4.3.2.1.4.2.7.2s.5.1.8.1c.6 0 1.1-.1 1.5-.3s.6-.4.6-.7-.2-.6-.6-.7c-.4-.2-.9-.3-1.5-.3s-1.1.1-1.5.2c-.4.2-.6.4-.6.7 0 .2 0 .3.2.5zm3-5.2h-.8V7.4H39.9V5.2h1.4V11.4h-1.4V8.7H39z" class="st44"/><path id="Shape_3_" d="M46.4 7.6c.1.3.3.6.5.9s.5.5.7.7c.3.2.6.3.9.4-.1.1-.1.2-.2.3-.1.1-.2.2-.2.3-.1.1-.2.2-.2.3-.1.1-.1.2-.2.2l-.6-.3c-.2-.1-.4-.3-.6-.5s-.4-.3-.6-.5-.3-.4-.4-.6l-.3.6-.6.6-.6.6c-.2.2-.4.3-.6.4l-.5-.5s-.4-.4-.6-.5l.9-.6s.6-.5.8-.8.4-.6.5-.9.2-.7.2-1V5.4h1.6v1.3c-.1.3 0 .6.1.9zm-2.2 5c.2-.3.4-.5.7-.7.3-.2.7-.3 1.1-.5.4-.1.9-.2 1.5-.2.5 0 1 .1 1.5.2.4.1.8.3 1.1.4.3.2.6.4.7.7.2.3.3.5.3.9 0 .3-.1.6-.2.9-.2.3-.4.5-.7.7-.3.2-.7.3-1.1.4-.4.1-.9.2-1.5.2s-1.1-.1-1.5-.2c-.4-.1-.8-.2-1.1-.4s-.5-.4-.7-.7c-.2-.3-.3-.5-.3-.9 0-.2 0-.5.2-.8zm1.4 1.2c.1.1.3.2.4.3.2.1.4.2.7.2.3 0 .5.1.8.1.6 0 1.1-.1 1.5-.3s.6-.4.6-.7-.2-.6-.6-.8c-.4-.2-.9-.3-1.5-.3s-1.1.1-1.5.3-.6.4-.6.7c.1.3.1.4.2.5zm2.9-5.6h-.8V6.8h1.8V5.2H51V11.4h-1.5V8.2h-1z" class="st44"/></g></g></symbol>', '<symbol id="maturity-advisory-KR-KMRB-fear" viewBox="0 0 56 50"><style>.st50{clip-path:url(#SVGID_2_);} .st51{clip-path:url(#SVGID_4_);fill:#242424;} .st52{clip-path:url(#SVGID_6_);} .st53{opacity:0.2;clip-path:url(#SVGID_8_);fill:none;stroke:#FFFFFF;stroke-width:2;stroke-miterlimit:10;} .st54{fill:#FFFFFF;}</style><defs><path id="SVGID_1_" d="M0 6c0-3.3 2.7-6 6-6h44c3.3 0 6 2.7 6 6v38c0 3.3-2.7 6-6 6H6c-3.3 0-6-2.7-6-6V6z"/></defs><clipPath id="SVGID_2_"><use xlink:href="#SVGID_1_" overflow="visible"/></clipPath><g class="st50"><defs><path id="SVGID_3_" d="M0 0h56v50H0z"/></defs><clipPath id="SVGID_4_"><use xlink:href="#SVGID_3_" overflow="visible"/></clipPath><path d="M0 6c0-3.3 2.7-6 6-6h44c3.3 0 6 2.7 6 6v38c0 3.3-2.7 6-6 6H6c-3.3 0-6-2.7-6-6V6z" class="st51"/></g><defs><path id="SVGID_5_" d="M0 6c0-3.3 2.7-6 6-6h44c3.3 0 6 2.7 6 6v38c0 3.3-2.7 6-6 6H6c-3.3 0-6-2.7-6-6V6z"/></defs><clipPath id="SVGID_6_"><use xlink:href="#SVGID_5_" overflow="visible"/></clipPath><g class="st52"><defs><path id="SVGID_7_" d="M0 0h56v50H0z"/></defs><clipPath id="SVGID_8_"><use xlink:href="#SVGID_7_" overflow="visible"/></clipPath><path d="M0 6c0-3.3 2.7-6 6-6h44c3.3 0 6 2.7 6 6v38c0 3.3-2.7 6-6 6H6c-3.3 0-6-2.7-6-6V6z" class="st53"/></g><g><path d="M35.8 17.1c-8.3 0-15.1 6.2-15.1 14.5s6.8 14.5 15.1 14.5 15.1-6.2 15.1-14.5-6.7-14.5-15.1-14.5zm-5.6 6.2c2.7 0 4.9 1.6 4.9 4.3s-2.2 4.9-4.9 4.9-4.9-1.6-4.9-4.3 2.2-4.9 4.9-4.9zm14.2 16.5c-1.3.1-1.9-.4-2.6-1.5v-.1c-.3-.5-.4-.6-.6-.6-.4 0-.4 0-.6.2l-.1.1c-.5.5-1 .7-1.8.8-1.1.1-1.7-.3-2.4-1.2-.2-.3-.2-.3-.3-.3-.2 0-.2 0-.6.4-.7.8-1.2 1.2-2.1 1.2-.8 0-1.3-.2-2-.7-.4-.3-.6-.4-.9-.4-.1 0-.3.1-.7.7-.8 1-1.3 1.5-2.3 1.5-.6 0-1-.4-1-1s.4-1 1-1c.1 0 .3-.1.7-.7.8-1 1.3-1.5 2.3-1.5.8 0 1.3.2 2 .7.4.3.6.4.9.4.2 0 .2 0 .6-.4.7-.8 1.2-1.2 2.1-1.2.9 0 1.4.4 2 1.2.3.4.3.4.6.4.4 0 .5-.1.7-.3l.1-.1c.6-.5 1.1-.7 2-.7 1.1 0 1.6.4 2.3 1.5v.1c.4.6.5.6.8.6.6 0 1 .4 1.1.9s-.7.9-1.2 1zm-3-7.3c-2.7 0-4.9-2.2-4.9-4.9s2.2-4.3 4.9-4.3 4.9 2.2 4.9 4.9-2.2 4.3-4.9 4.3z" class="st54"/><path d="M30.2 30.5c1.6 0 2.9-1.3 2.9-2.9 0-1.4-1.1-2.3-2.9-2.3-1.6 0-2.9 1.3-2.9 2.9.1 1.3 1.2 2.3 2.9 2.3zm0-4c.6 0 1.2.5 1.2 1.2s-.5 1.2-1.2 1.2-1.2-.5-1.2-1.2.6-1.2 1.2-1.2zM41.4 25.3c-1.8 0-2.9.9-2.9 2.3 0 1.6 1.3 2.9 2.9 2.9 1.8 0 2.9-.9 2.9-2.3 0-1.6-1.3-2.9-2.9-2.9zm0 3.5c-.6 0-1.2-.5-1.2-1.2s.5-1.2 1.2-1.2c.6 0 1.2.5 1.2 1.2s-.6 1.2-1.2 1.2z" class="st54"/></g><path id="Shape" d="M7.7 8.1v-.8h1.5V9H13.6v1.3H4.5V9h3.2v-.9zm-1.5 3.4c.6-.4 1.6-.6 2.8-.6s2.1.2 2.8.6c.6.4 1 .9 1 1.5s-.3 1.1-1 1.5c-.6.4-1.6.6-2.8.6s-2.1-.2-2.8-.6c-.6-.4-1-.9-1-1.5.1-.6.4-1.1 1-1.5zM12.8 5c0 .7 0 1.3-.1 1.8s-.1 1-.2 1.6h-1.4c.1-.3.1-.6.1-1s.1-.8.1-1.2H5.4V4.9h1.2l6.2.1zm-5.4 8.8c.4.2.9.2 1.6.2s1.2-.1 1.6-.2c.4-.2.6-.4.6-.8 0-.3-.2-.6-.6-.7-.4-.2-.9-.2-1.6-.2s-1.2.1-1.6.2c-.4.2-.6.4-.6.7.1.4.3.6.6.8z" class="st54"/><path id="Shape_1_" d="M24.9 12.7h1.6v1.4H17.4v-1.4H21.2v-2.1h-3.1V9.4h1.3V6.3h-1V4.9h7.2v1.4h-1.1v3.1h1.3v1.4h-3.2v2.1h2.3v-.2zm-4.1-3.3h2.4V6.3h-2.4v3.1z" class="st54"/></symbol>', '<symbol id="maturity-advisory-KR-KMRB-drugs" viewBox="0 0 56 50"><style>.st60{clip-path:url(#SVGID_2_);} .st61{clip-path:url(#SVGID_4_);fill:#242424;} .st62{clip-path:url(#SVGID_6_);} .st63{opacity:0.2;clip-path:url(#SVGID_8_);fill:none;stroke:#FFFFFF;stroke-width:2;stroke-miterlimit:10;} .st64{fill:#FFFFFF;}</style><defs><path id="SVGID_1_" d="M0 6c0-3.3 2.7-6 6-6h44c3.3 0 6 2.7 6 6v38c0 3.3-2.7 6-6 6H6c-3.3 0-6-2.7-6-6V6z"/></defs><clipPath id="SVGID_2_"><use xlink:href="#SVGID_1_" overflow="visible"/></clipPath><g class="st60"><defs><path id="SVGID_3_" d="M0 0h56v50H0z"/></defs><clipPath id="SVGID_4_"><use xlink:href="#SVGID_3_" overflow="visible"/></clipPath><path d="M0 6c0-3.3 2.7-6 6-6h44c3.3 0 6 2.7 6 6v38c0 3.3-2.7 6-6 6H6c-3.3 0-6-2.7-6-6V6z" class="st61"/></g><defs><path id="SVGID_5_" d="M0 6c0-3.3 2.7-6 6-6h44c3.3 0 6 2.7 6 6v38c0 3.3-2.7 6-6 6H6c-3.3 0-6-2.7-6-6V6z"/></defs><clipPath id="SVGID_6_"><use xlink:href="#SVGID_5_" overflow="visible"/></clipPath><g class="st62"><defs><path id="SVGID_7_" d="M0 0h56v50H0z"/></defs><clipPath id="SVGID_8_"><use xlink:href="#SVGID_7_" overflow="visible"/></clipPath><path d="M0 6c0-3.3 2.7-6 6-6h44c3.3 0 6 2.7 6 6v38c0 3.3-2.7 6-6 6H6c-3.3 0-6-2.7-6-6V6z" class="st63"/></g><path id="Shape" d="M27.1 12.4L12.8 26.7c-.2.2-.3.5-.2.8l1.4 3.7s-8.4 9-8 9.4c.3.3 9.4-8 9.4-8l3.7 1.4c.3.1.6 0 .8-.2l14.3-14.3 1.5 1.5c.3.3 1.6-.9 1.3-1.3l-4.3-4.5 5.1-5.1 2.4 2.4c.3.3 1.6-.9 1.3-1.3l-6-6c-.5-.3-1.8 1-1.5 1.3l2.4 2.4-5.5 5-4.1-4.2c-.3-.3-1.6.9-1.3 1.3l1.6 1.4zm-1.7 13.8l-5.1-5 .9-.9 1.6 1.6c.3.3 1.6-.9 1.3-1.3L22.6 19l.9-.9 2.5 2.4c.3.3 1.6-.9 1.3-1.3l-2.5-2.4.9-.9 1.6 1.6c.3.3 1.6-.9 1.3-1.3L27 14.6l1.3-1.3 5 5-7.9 7.9z" class="st64"/><g id="Group"><path id="Shape_1_" d="M29.3 35.7c.1-.3.3-.6.5-.9.2-.2.5-.4.8-.6.3-.1.7-.2 1-.2.4 0 .7.1 1 .2s.6.3.8.6c.2.2.4.5.6.9.1.3.2.7.2 1 0 .4-.1.7-.2 1.1-.1.3-.3.6-.6.9-.2.2-.5.4-.8.6-.3.1-.7.2-1 .2-.4 0-.7-.1-1-.2-.3-.1-.6-.3-.8-.6-.2-.2-.4-.5-.5-.9-.1-.3-.2-.7-.2-1.1s0-.7.2-1zm7.5 8v.5h-1.4v-2.4H30.1v-1.3h6.7v3.2zm-6-5.9c.2.3.5.4.9.4s.7-.1.9-.4c.2-.3.3-.6.3-1s-.1-.7-.3-1c-.2-.3-.5-.4-.9-.4s-.7.1-.9.4-.3.6-.3 1c-.1.3 0 .7.3 1zm6-.6H38v1.4H36.8v1.6h-1.3V34h1.4v1H38.1v1.3H36.9l-.1.9z" class="st64"/><path id="Shape_2_" d="M49.5 39.8v2.6h-5.2v.6h5.4v1.2h-7v-2.7h5.2v-.6h-5.3v-1.2h2.7V39h-3.7v-1.2H50.4V39h-3.7v.7h2.8v.1zm-6.8-2.5V34h6.9v3.3h-6.9zm5.5-2.1H44v1h4.2v-1z" class="st64"/></g></symbol>'],
    a.startup.svgs.iconBrazilianRatings = ['<symbol id="maturity-rating-BR-Brasil-10" viewBox="0 0 100 100"> <path d="M92.3812886,0 L7.62224184,0 C3.41394528,0 0,3.41211982 0,7.62034209 L0,92.3778927 C0,96.5878802 3.41394528,100 7.62224184,100 L92.3812886,100 C96.5913504,100 100,96.5878802 100,92.3778927 L100,7.62034209 C100,3.41211982 96.5913504,0 92.3812886,0" id="Fill-24" fill="#009C4C"></path><polyline id="Fill-25" fill="#FFFEFD" points="35 71.8571429 35 29 46.7497688 29 46.7497688 63.5757724 65.6122449 63.5757724 65.6122449 71.8571429 35 71.8571429"></polyline></symbol>', '<symbol id="maturity-rating-BR-Brasil-70" viewBox="0 0 100 100"> <path d="M92.3799933,0 L7.62000671,0 C3.40983375,0 0,3.41147996 0,7.61973747 L0,92.3784958 C0,96.58852 3.40983375,100 7.62000671,100 L92.3799933,100 C96.5866327,100 100,96.58852 100,92.3784958 L100,7.61973747 C100,3.41147996 96.5866327,0 92.3799933,0" id="Fill-26" fill="#2E88BD"></path><path d="M30.5342186,26 L38.2857143,26 L38.2857143,72.9387755 L29.444894,72.9387755 L29.444894,38.0387705 C28.6754504,38.8502333 27.8437597,39.5516071 26.9463637,40.1446675 C26.0489677,40.7359523 25.0668465,41.2295774 24,41.6237672 L24,33.2019547 C25.5803852,32.2821785 26.9204274,31.2185762 28.0201266,30.0129235 C29.1198257,28.8072708 29.9584328,27.4684459 30.5342186,26 Z M65.6129737,37.3789851 C65.6129737,35.0603611 65.4442935,33.5263131 65.1086902,32.7785964 C64.7713299,32.0308796 64.1704067,31.6570213 63.3024066,31.6570213 C62.4326494,31.6570213 61.826455,32.0642285 61.4785521,32.8751326 C61.1324063,33.6895471 60.9584549,35.1902461 60.9584549,37.3789851 L60.9584549,62.4819072 C60.9584549,64.8865362 61.125378,66.4434018 61.4627383,67.1472384 C61.8000987,67.8510751 62.4115644,68.203871 63.3024066,68.203871 C64.1493217,68.203871 64.7449736,67.8089502 65.0928765,67.0173534 C65.4390223,66.2257565 65.6129737,64.7145262 65.6129737,62.4819072 L65.6129737,37.3789851 Z M75.0204082,40.8577986 L75.0204082,59.0346873 C75.0204082,64.6706461 74.1576793,68.5671982 72.4322216,70.7243434 C70.7067639,72.8814887 67.6634922,73.9591837 63.3024066,73.9591837 C58.8973939,73.9591837 55.8365513,72.8849991 54.1233932,70.7401402 C52.408478,68.5952814 51.5510204,64.6917086 51.5510204,59.0346873 L51.5510204,40.8577986 C51.5510204,35.2007774 52.408478,31.3094909 54.1233932,29.1856946 C55.8365513,27.0618982 58.8973939,26 63.3024066,26 C67.6845772,26 70.7348772,27.0618982 72.4480353,29.1856946 C74.1629506,31.3094909 75.0204082,35.2007774 75.0204082,40.8577986 Z" id="Shape" fill="#FFFEFD"></path></symbol>', '<symbol id="maturity-rating-BR-Brasil-80" viewBox="0 0 100 100"> <path d="M92.3797924,0 L7.62197275,0 C3.41382475,0 0,3.41218005 0,7.62224184 L0,92.3795234 C0,96.5913504 3.41382475,100 7.62197275,100 L92.3797924,100 C96.5897056,100 100,96.5913504 100,92.3795234 L100,7.62224184 C100,3.41218005 96.5897056,0 92.3797924,0" id="Fill-31" fill="#F7C727"></path><path d="M30.53387,27 L38.2857143,27 L38.2857143,73.9387755 L29.4454676,73.9387755 L29.4454676,39.0389497 C28.6749477,39.8514812 27.8439611,40.5522453 26.9473248,41.1447901 C26.0489608,41.7355609 25.067671,42.2305309 24,42.6243781 L24,34.2027904 C25.580775,33.2820396 26.9196828,32.2193619 28.0201786,31.0129832 C29.1189468,29.8066045 29.956844,28.4689435 30.53387,27 Z M74.2503539,39.5273663 L74.2503539,40.2082963 C74.2503539,42.3436229 73.9430229,44.3340337 73.323181,46.1795287 C72.7050658,48.0250236 71.6587589,50.0049586 70.1859871,52.1193336 L59.8783107,66.9129746 L75.0204082,66.9129746 L75.0204082,73.9387755 L50.5306122,73.9387755 L50.5306122,65.3276298 L61.1905107,49.5946546 C62.4284678,47.8050308 63.3729065,46.1044518 64.0255534,44.4964094 C64.6730205,42.888367 65.0010705,41.4584139 65.0010705,40.2082963 L65.0010705,38.3296278 C65.0010705,36.0214497 64.8335923,34.4937221 64.5038157,33.748191 C64.1723126,33.0044059 63.5697365,32.6325134 62.6960876,32.6325134 C61.8828689,32.6325134 61.3130978,33.0201197 60.9833212,33.7970783 C60.6518181,34.5740369 60.4877931,36.0860507 60.4877931,38.3296278 L60.4877931,40.2082963 L51.2350565,40.2082963 L51.2350565,39.5273663 C51.2350565,34.8010136 52.0793536,31.5308035 53.7644946,29.7184821 C55.4496357,27.9061607 58.4590628,27 62.792776,27 C67.1023171,27 70.0892987,27.8956849 71.7554474,29.6870546 C73.4198695,31.4784243 74.2503539,34.7573642 74.2503539,39.5273663 Z" id="Shape" fill="#000000"></path></symbol>', '<symbol id="maturity-rating-BR-Brasil-90" viewBox="0 0 100 100"> <path d="M92.3796579,0 L7.62387248,0 C3.4174154,0 0,3.41047503 0,7.61884588 L0,92.3776236 C0,96.5877597 3.4174154,100 7.62387248,100 L92.3796579,100 C96.5896454,100 100,96.5877597 100,92.3776236 L100,7.61884588 C100,3.41047503 96.5896454,0 92.3796579,0" id="Fill-36" fill="#E7792B"></path><path d="M29.5939966,27 L37.4133644,27 L37.4133644,73.4693878 L28.4941256,73.4693878 L28.4941256,38.9172543 C27.7184638,39.7216909 26.8765658,40.4154735 25.9719176,41.0021151 C25.0690124,41.5887567 24.0754681,42.0770391 23,42.4669626 L23,34.131032 C24.593157,33.2194543 25.9440286,32.1673636 27.0543579,30.9730036 C28.1646872,29.7786435 29.0118145,28.454309 29.5939966,27 Z M61.932248,33.772724 L55.8048688,56.3408596 L62.000892,56.3408596 L62.5355926,33.772724 L61.932248,33.772724 Z M57.68174,27 L70.7746777,27 L70.7746777,56.3408596 L76.5353535,56.3408596 L76.5353535,63.2769299 L70.7746777,63.2769299 L70.7746777,73.4693878 L61.7010262,73.4693878 L61.7010262,63.2769299 L48.7381507,63.2769299 L48.7381507,55.3309228 L57.68174,27 Z" id="Shape" fill="#FFFEFD"></path></symbol>', '<symbol id="maturity-rating-BR-Brasil-96" viewBox="0 0 100 100"> <path d="M92.0595717,0 L7.5942286,0 C3.39866798,0 0,3.39866798 0,7.59246945 L0,92.0595717 C0,96.2533732 3.39866798,99.6538003 7.5942286,99.6538003 L92.0595717,99.6538003 C96.2586506,99.6538003 99.6538003,96.2533732 99.6538003,92.0595717 L99.6538003,7.59246945 C99.6538003,3.39866798 96.2586506,0 92.0595717,0" id="Fill-41" fill="#D7262D"></path><path d="M30.5962821,27.010101 L38.4242424,27.010101 L38.4242424,73.4747475 L29.4954479,73.4747475 L29.4954479,38.9278956 C28.7225961,39.7322501 27.8817053,40.425962 26.9745202,41.0125437 C26.0673352,41.5991254 25.07641,42.0856018 24,42.4772417 L24,34.1421617 C25.5945522,33.2289207 26.9466069,32.1769374 28.0579085,30.9826992 C29.1692102,29.7902172 30.0135902,28.4660179 30.5962821,27.010101 Z M65.8438336,55.7396387 C65.8438336,53.380397 65.6824956,51.8457615 65.3616122,51.1374682 C65.0425214,50.4291749 64.4581193,50.0750283 63.6173689,50.0750283 C62.7730333,50.0750283 62.1886311,50.4777833 61.8569919,51.2832933 C61.52356,52.0870673 61.3550514,53.5730945 61.3550514,55.7396387 L61.3550514,62.1125424 C61.3550514,64.4735201 61.5163894,66.0081556 61.8390654,66.7147129 C62.1599488,67.4230062 62.7533142,67.7771528 63.6173689,67.7771528 C64.4366075,67.7771528 65.0138391,67.3917579 65.347271,66.6192321 C65.6789103,65.8467064 65.8438336,64.3450551 65.8438336,62.1125424 L65.8438336,55.7396387 Z M75.4488237,37.2649883 L75.4488237,37.7476 L65.8438336,37.7476 L65.8438336,37.2649883 C65.8438336,34.9057467 65.6824956,33.3711112 65.3616122,32.6628179 C65.0425214,31.9545246 64.4581193,31.6003779 63.6173689,31.6003779 C62.7730333,31.6003779 62.1886311,32.008341 61.8569919,32.8225311 C61.52356,33.6401932 61.3550514,35.1192763 61.3550514,37.2649883 L61.3550514,46.566546 C62.199387,45.49369 63.1441107,44.700332 64.1981858,44.1847362 C65.2522609,43.6691403 66.4640887,43.4122104 67.8390471,43.4122104 C70.4975391,43.4122104 72.4407659,44.2333445 73.6723128,45.8738768 C74.902067,47.5161451 75.5151515,50.1392607 75.5151515,53.7449597 L75.5151515,58.7012769 C75.5151515,64.3016548 74.6457189,68.1642837 72.9068535,70.2874276 C71.1661956,72.4123075 68.09181,73.4747475 63.6836968,73.4747475 C59.2504866,73.4747475 56.1671378,72.4175156 54.4264798,70.3047877 C52.6858218,68.1903239 51.8181818,64.3224869 51.8181818,58.7012769 L51.8181818,40.7092381 C51.8181818,35.1088602 52.6858218,31.2566474 54.4264798,29.1543356 C56.1671378,27.0520239 59.2504866,26 63.6836968,26 C68.1366261,26 71.2110117,26.800302 72.9068535,28.397434 C74.6009027,29.9963019 75.4488237,32.9527321 75.4488237,37.2649883 Z" id="Shape" fill="#FFFEFD"></path></symbol>', '<symbol id="maturity-rating-BR-Brasil-124" viewBox="0 0 100 100"> <path d="M92.3793889,0 L7.62061113,0 C3.41047503,0 0,3.41047503 0,7.61708062 L0,92.3793889 C0,96.5877597 3.41047503,100 7.62061113,100 L92.3793889,100 C96.5930555,100 100,96.5877597 100,92.3793889 L100,7.61708062 C100,3.41047503 96.5930555,0 92.3793889,0" id="Fill-46" fill="#131111"></path><path d="M31.4686536,27.010101 L39.1414141,27.010101 L39.1414141,73.4747475 L30.3894044,73.4747475 L30.3894044,38.9278956 C29.6299961,39.7322501 28.8055934,40.425962 27.9161963,41.0125437 C27.0285096,41.5991254 26.0570143,42.0856018 25,42.4772417 L25,34.1421617 C26.5632865,33.2289207 27.8905406,32.1769374 28.9800521,30.9826992 C30.0678532,29.7902172 30.897387,28.4660179 31.4686536,27.010101 Z M60.5767596,37.2649883 L60.5767596,39.5825657 C60.5767596,41.9643755 60.7401349,43.5042191 61.0755758,44.2020963 C61.4092787,44.8982375 62.0123771,45.2471761 62.8952992,45.2471761 C63.7347705,45.2471761 64.3152744,44.8669893 64.636811,44.1048796 C64.9600856,43.3427699 65.1182469,41.8359106 65.1182469,39.5825657 L65.1182469,37.2649883 C65.1182469,34.9699792 64.9531335,33.4509678 64.6194306,32.7114263 C64.2874658,31.9701487 63.6895815,31.6003779 62.8309919,31.6003779 C61.9932587,31.6003779 61.4092787,31.9857728 61.0755758,32.7582986 C60.7401349,33.5325604 60.5767596,35.0342116 60.5767596,37.2649883 Z M60.3838376,57.7030694 L60.3838376,62.1125424 C60.3838376,64.4526879 60.5628553,65.9803794 60.9295808,66.6990887 C61.2928303,67.4195341 61.9480698,67.7771528 62.8952992,67.7771528 C63.8181962,67.7771528 64.4647455,67.3761338 64.829733,66.5706238 C65.1929824,65.7651137 65.3772142,64.2808226 65.3772142,62.1125424 L65.3772142,57.7030694 C65.3772142,55.385492 65.1999346,53.8734247 64.8436372,53.1651314 C64.490816,52.4568381 63.8390526,52.1026914 62.8952992,52.1026914 C61.9480698,52.1026914 61.2928303,52.4846143 60.9295808,53.244988 C60.5628553,54.0070977 60.3838376,55.4931248 60.3838376,57.7030694 Z M57.67424,48.4657442 C55.7432823,47.908484 54.2225011,46.8738203 53.1153723,45.360017 C52.0082436,43.8462136 51.4555482,42.028608 51.4555482,39.9037281 L51.4555482,37.2649883 C51.4555482,33.2947266 52.3523746,30.4250971 54.1477655,28.6543639 C55.9396803,26.8853666 58.8561042,26 62.8952992,26 C66.9118997,26 69.8074672,26.8801586 71.5785256,28.6387398 C73.351322,30.3990569 74.2411963,33.2738945 74.2411963,37.2649883 L74.2411963,39.9037281 C74.2411963,42.028608 73.6971911,43.8531577 72.6109188,45.3756411 C71.5246465,46.8998605 70.0177695,47.9293162 68.0833358,48.4657442 C70.1672406,49.0664047 71.7592813,50.172245 72.8525058,51.781529 C73.9492063,53.3908131 74.4949495,55.4288924 74.4949495,57.8957668 L74.4949495,62.1785109 C74.4949495,66.1470366 73.5720525,69.0218741 71.7245206,70.8030235 C69.8787267,72.5841728 66.9118997,73.4747475 62.8309919,73.4747475 C58.7274896,73.4747475 55.7745669,72.5945889 53.9704859,70.8360077 C52.1646668,69.0756905 51.2626263,66.1904369 51.2626263,62.1785109 L51.2626263,57.8957668 C51.2626263,55.4080602 51.8048934,53.3630369 52.8876896,51.7641689 C53.973962,50.167037 55.5694787,49.0664047 57.67424,48.4657442 Z" id="Combined-Shape" fill="#FFFEFD"></path></symbol>'],
    a.startup.svgs.iconNICAMRatings = ['<symbol id="maturity-rating-NICAM-50" viewBox="0 0 100 100">\n        <path d="M1,51a50,50,0,1,1,50,50A50.018,50.018,0,0,1,1,51Z" fill="#fff"/>\n        <path d="M7.4,51A43.6,43.6,0,1,1,51,94.6,43.51,43.51,0,0,1,7.4,51ZM43.3,78H58.7a2.568,2.568,0,0,0,2-.8l4-4a2.568,2.568,0,0,0,.8-2V52.4a2.438,2.438,0,0,0-.8-2l-4.1-3.9a2.732,2.732,0,0,0-1.9-.8H51.5a2.364,2.364,0,0,0-1.9.8l-2.5,2.2V33.2h7.8v6.9H65.5V30.9a2.973,2.973,0,0,0-.8-2l-4-4.1a2.438,2.438,0,0,0-2-.8H43.2a2.438,2.438,0,0,0-2,.8l-3.9,4.1a2.732,2.732,0,0,0-.8,1.9V71.1a2.973,2.973,0,0,0,.8,2l4,4.1A2.438,2.438,0,0,0,43.3,78Zm3.8-23.3H55V68.9H47.1Z"/>\n    </symbol>', '<symbol id="maturity-rating-NICAM-60" viewBox="0 0 100 100">\n        <path d="M1,51a50,50,0,1,1,50,50A50.018,50.018,0,0,1,1,51Z" fill="#fff"/>\n        <path d="M7.4,51A43.6,43.6,0,1,1,51,94.6,43.638,43.638,0,0,1,7.4,51ZM43.3,78H58.8a2.438,2.438,0,0,0,2-.8l3.9-4.1a2.732,2.732,0,0,0,.8-1.9V30.9a2.973,2.973,0,0,0-.8-2l-4-4.1a2.438,2.438,0,0,0-2-.8H43.3a2.568,2.568,0,0,0-2,.8l-4,4a2.568,2.568,0,0,0-.8,2V49.6a2.438,2.438,0,0,0,.8,2l4.1,3.9a2.732,2.732,0,0,0,1.9.8h7.2a2.364,2.364,0,0,0,1.9-.8l2.5-2.2V68.8H47.1V61.9H36.5v9.2a2.973,2.973,0,0,0,.8,2l4,4.1A2.438,2.438,0,0,0,43.3,78ZM47,33.1h7.9V47.3H47Z"/>\n    </symbol>', '<symbol id="maturity-rating-NICAM-80" viewBox="0 0 100 100">\n        <path d="M1,51a50,50,0,1,1,50,50A50.018,50.018,0,0,1,1,51Z" fill="#fff"/>\n        <path d="M7.4,51A43.6,43.6,0,1,1,51,94.6,43.447,43.447,0,0,1,7.4,51ZM39.8,78V24H32.6a4.216,4.216,0,0,0-1.9.3l-8.3,2.9v5.3h6.8V78Zm37.1,0V68.5H58.5v-5L76.1,49.3a2.358,2.358,0,0,0,.9-2V30.9a2.973,2.973,0,0,0-.8-2l-4-4.1a2.438,2.438,0,0,0-2-.8H54.6a2.438,2.438,0,0,0-2,.8l-4,4.1a2.973,2.973,0,0,0-.8,2v9.5H58.6V33.3h7.8V43.7L48.7,57.8a2.358,2.358,0,0,0-.9,2V78Z"/>\n    </symbol>', '<symbol id="maturity-rating-NICAM-95" viewBox="0 0 100 100">\n        <path d="M1,51a50,50,0,1,1,50,50A50.018,50.018,0,0,1,1,51Z" fill="#fff"/>\n        <path d="M7.4,51A43.6,43.6,0,1,1,51,94.6,43.51,43.51,0,0,1,7.4,51ZM39.8,78V24H32.6a4.216,4.216,0,0,0-1.9.3l-8.3,2.9v5.3h6.8V78Zm34.7,0V66.7h3.3V57.8H74.5V24H60.7a1.8,1.8,0,0,0-1.8,1.3L46.3,57a4.333,4.333,0,0,0-.4,1.9v7.8H64V78ZM64,35V57.7H54.8Z"/>\n    </symbol>', '<symbol id="maturity-rating-NICAM-100" viewBox="0 0 100 100">\n        <path d="M1,51a50,50,0,1,1,50,50A50.018,50.018,0,0,1,1,51Z" fill="#fff"/>\n        <path d="M7.4,51A43.6,43.6,0,1,1,51,94.6,43.51,43.51,0,0,1,7.4,51ZM39.8,78V24H32.6a4.216,4.216,0,0,0-1.9.3l-8.3,2.9v5.3h6.8V78Zm14.6,0H69.8a2.568,2.568,0,0,0,2-.8l4-4a2.568,2.568,0,0,0,.8-2V52.4a2.438,2.438,0,0,0-.8-2l-4-3.9a2.973,2.973,0,0,0-2-.8H62.6a2.732,2.732,0,0,0-1.9.8l-2.5,2.3V33.2H66v6.9H76.6V30.9a2.973,2.973,0,0,0-.8-2l-4-4.1a2.438,2.438,0,0,0-2-.8H54.3a2.438,2.438,0,0,0-2,.8L48.4,29a2.732,2.732,0,0,0-.8,1.9V71.1a2.973,2.973,0,0,0,.8,2l4,4.1A2.438,2.438,0,0,0,54.4,78Zm3.8-23.3h7.9V68.9H58.2Z"/>\n    </symbol>', '<symbol id="maturity-rating-NICAM-1000" viewBox="0 0 100 100">\n        <path d="M1,51a50,50,0,1,1,50,50A50.018,50.018,0,0,1,1,51Z" fill="#fff"/>\n        <path d="M7.4,51A43.6,43.6,0,1,1,51,94.6,43.51,43.51,0,0,1,7.4,51ZM39.8,78V24H32.6a4.216,4.216,0,0,0-1.9.3l-8.3,2.9v5.3h6.8V78Zm14.6,0H69.8a2.568,2.568,0,0,0,2-.8l4-4a2.568,2.568,0,0,0,.8-2V55.8a2.438,2.438,0,0,0-.8-2L72,50.1l3.8-3.7a2.438,2.438,0,0,0,.8-2V30.9a2.973,2.973,0,0,0-.8-2l-4-4.1a2.438,2.438,0,0,0-2-.8H54.3a2.438,2.438,0,0,0-2,.8L48.4,29a2.732,2.732,0,0,0-.8,1.9V44.5a2.438,2.438,0,0,0,.8,2l3.8,3.7-3.8,3.7a2.438,2.438,0,0,0-.8,2V71.3a2.438,2.438,0,0,0,.8,2l4,3.9A2.973,2.973,0,0,0,54.4,78Zm3.8-44.8H66V45.7H58.2Zm0,21.5h7.9V68.9H58.2Z"/>\n    </symbol>', '<symbol id="maturity-rating-NICAM-35" viewBox="0 0 100 100">\n        <path d="M1,51a50,50,0,1,1,50,50A50.018,50.018,0,0,1,1,51Z" fill="#fff"/>\n        <path d="M7.4,51A43.6,43.6,0,1,1,51,94.6,43.51,43.51,0,0,1,7.4,51ZM35.5,78V63.5h6.8V78H52.4V30.8a2.731,2.731,0,0,0-.8-1.9l-4-4.2a2.439,2.439,0,0,0-2-.8H32.3a2.438,2.438,0,0,0-2,.8l-4,4.1a2.973,2.973,0,0,0-.8,2V78Zm0-45h6.8V54.4H35.5ZM77.9,78V69.5h-9V23.9H58.8V78Z"/>\n    </symbol>', '<symbol id="maturity-advisory-NICAM-profanity" viewBox="0 0 100 100">\n        <path d="M1,51a50,50,0,1,1,50,50A50.018,50.018,0,0,1,1,51Z" fill="#fff"/>\n        <path d="M7.4,51A43.6,43.6,0,1,1,51,94.6,43.51,43.51,0,0,1,7.4,51Zm23.1-.3c1.3-.2,9.1,7.4,11.6,6.3,2.6-1.3,3-12.7,4-13.8.6-.8,7.8-2.9,10.5-4.2,1-.6.8-1.8-.4-1.8-3,.4-11,2.1-12.2,3-1.5,1.1-2.4,9.8-3.7,10.7-1.1.6-10.1-8.8-12.8-7.5-3.4,1.6-3.3,15.1-6.8,16.2-6.8,2-3.5,12.1,3.3,8.2C28.7,65.2,28.9,51.1,30.5,50.7ZM46.7,30.1c.9-.1,4.3,1.8,5.7,2.7.7.5,1.5-.2.8-1.1-1.2-1.7-4.6-5-6.2-5-1.7,0-4.6,3.5-6,3.2-1-.2-2.5-6.7-4.3-7.5-2.6-1.1-12.4.4-10.8,6s6.1-1.8,8.9-1.3c1.6.3,2.8,7.4,4.8,8C41.7,35.6,45.6,30.2,46.7,30.1ZM59.3,72.9c2.7-.3,6.1,12.3,8.7,11.5,2-.7-1-9-.8-13.8.3-5.7,2.7-6.8,3.2-10.6.5-4.6-4-3.3-3.1-6.8.5-1.8,3.7-1.7,8.4-7.9,4-5.4,7-16.1,1.5-20.4-5.2-4-12.5-2.7-14.8,3.4,12.7,1.8,11.8,13.6,8.1,17.8-2.9,3.4-7.4,2.2-11.5-3.9-2.4,7.4,4.3,7,2.4,10.1-1.4,2.2-4-.1-7.2,3.2-6.1,6.5-2.3,31.4,2.3,32.6C59.1,88.7,56.5,73.3,59.3,72.9Z"/>\n    </symbol>', '<symbol id="maturity-advisory-NICAM-discrimination" viewBox="0 0 100 100">\n        <path d="M1,51a50,50,0,1,1,50,50A50.018,50.018,0,0,1,1,51Z" fill="#fff"/>\n        <path d="M7.4,51A43.6,43.6,0,1,1,51,94.6,43.51,43.51,0,0,1,7.4,51ZM48.3,65.6c-3.6-6.7,1.5-8.3,1.2-10.4-.1-.9-4.9-1.1-8.3-3.1-3.5-2-3.6-8.8.7-11.4,5.8-3.5,8.9,6.1,10.4,11.3.6,2.3,3.2-2,7.3,1,7.5,5.3,5.7,24.1,2.8,31.5,11.8-3.2,21.9-15.6,22.5-24.7.8-9.3-5.6-6.8-5.2-10.1s10.2-17.9-.5-17.6c-10.2.2-3.9,12.3-3.8,16.5,0,2-2.9,2.2-4.9,2.8a18.669,18.669,0,0,0-.3-7.3c-1-3.6-7.1-2.5-6.7-6.9.4-4.2,10-17.1-1.2-18.2-12.7-1.3-2.6,14-3.5,18.5-.3,1.6-2.4,1.4-4.5,2.6-2.2-7.4-9.3-3.7-9.5-7.7-.2-4.1,6.6-17.1-4.2-16.6-11.7.6-1.2,14.3-.7,17.4s-5.8,1.4-7.3,8.4a45.09,45.09,0,0,0,.2,6.2c-1.7.4-4.9,3.3-5.3,1.5-1-4.4,5-19.4-5.7-17.4C11,34,22.8,45.8,23.4,50.5c.5,3.5-7.2.4-5.3,12.8,1.7,10.8,16.1,21.6,29.1,22.5C48.6,81.8,53,74.2,48.3,65.6Zm10,19.8c.3-3.7.5-10.1-1-9.9-1.3.1-4,6.8-6,10.3A53.742,53.742,0,0,0,58.3,85.4Z"/>\n    </symbol>', '<symbol id="maturity-advisory-NICAM-drug-or-alcohol" viewBox="0 0 100 100">\n        <path d="M1,51a50,50,0,1,1,50,50A50.018,50.018,0,0,1,1,51Z" fill="#fff"/>\n        <path d="M7.4,51A43.6,43.6,0,1,1,51,94.6,43.51,43.51,0,0,1,7.4,51Zm28,21.3a4.516,4.516,0,0,0,5.8-.5c1.3-1.3,3.5,2,7.5-1.3C53,66.8,63.5,52.6,66.4,50.4c3-2.4,11.1,5.8,13.1,3C82,50,67.8,39.2,67.8,37.1c0-1.8,2-3.8,3.1-3.8,2,.1,9.3,4.3,11.2,2.1,3-3.4-16.4-19.1-19.6-16.3-2.3,1.9,3.6,9.4,3.1,10.8a3.92,3.92,0,0,1-3.5,2.7c-1.9,0-15.1-8.8-17.3-7.2-2.4,1.7,5,9.7,4.1,12.1-1,2.6-14.7,16.1-16.4,19.4-2,3.8.2,5.2-1,7.1a5.128,5.128,0,0,0,.3,6.2c-4.1,4.9-6.4,9.7-5.8,10.3C26.4,81,30.8,77.9,35.4,72.3ZM37,58.2c-2-.6-.6-2.1,1.7-2.2,2.9-.2,6.7,1.6,7.6,4.1.7,1.6.1,3.8-1.5,2.5A19.477,19.477,0,0,0,37,58.2Zm7.4-7.5c-4.3-1.2-3.4-3,.8-2.9,7.1.4,10.2,5.2,8.7,7.4C52.5,57.3,49,52.1,44.4,50.7Zm7-7.8c-3.5-1.4-2.4-2.7,1.1-2.4,6.4.5,8,4.2,6.8,6C58.2,48.2,54.6,44.4,51.4,42.9Z"/>\n    </symbol>', '<symbol id="maturity-advisory-NICAM-fear-anxiety" viewBox="0 0 100 100">\n        <path d="M1,51a50,50,0,1,1,50,50A50.018,50.018,0,0,1,1,51Z" fill="#fff"/>\n        <path d="M7.4,51A43.6,43.6,0,1,1,51,94.6,43.51,43.51,0,0,1,7.4,51ZM40.7,75.5c0-1.6-.1-5.4.4-7,.6-1.8,5.3-7.3,6.2-6.8.4.2-.5,5.4,1,5.4,1.3,0,.9-5.5,2.3-5.5s1,5.5,2.3,5.5c1.6,0,.6-5.2,1-5.4.9-.5,5.6,5,6.2,6.8.5,1.6.4,5.4.4,7,0,1-4.7,10.4-3.4,11.1,3.5,1.8,8.8-8.3,8.8-10.4.1-2-1-8.3-2.6-10.3-2-2.4-9.4-6.4-9.2-7.3.1-.6,9.5,2.5,10.8,3.2,1.3.6,6.6,4.3,7,5.2.8,1.5,1.4,12.3,3.4,12.2,4.6-.1,3-11.6,1.1-14.4-1.5-2.1-7.4-5.3-9.3-6s-12.3-2-12.3-3c0-.9,12-.4,14.7-.9,2.1-.4,10.8-4.1,12.5-5.9,2.6-2.7,5-14.4.2-19.4C81,28.3,79,43.7,77.9,45.2c-1.2,1.5-7.7,6.1-9.5,6.4-1.2.2-13.9,2.1-14.2,1.1-.3-.9,11.3-3.7,14-5.2,3.6-2,5.3-13.7,4.7-16.9-.6-4.2-8.7-17.7-14.5-15.6-1.6.5,8.5,14.5,8.9,17,.3,1.4-.1,11.4-1.6,12.4-.6.4-12.4,6.3-12.8,5.7-.5-.9,7.7-6.7,7.7-10,0-6.7-7.1-16.3-10-16.3-2.8,0-10,9.6-10,16.3,0,3.3,8.2,9.1,7.7,10-.4.6-12.2-5.3-12.7-5.7-1.6-1-2-11-1.7-12.4.4-2.5,10.5-16.5,9-17-5.9-2.1-14,11.4-14.6,15.6-.6,3.2,1.1,14.9,4.7,16.9,2.7,1.5,14.2,4.3,14,5.2-.3,1-13-.9-14.1-1.1-1.9-.3-8.4-4.9-9.5-6.4-1.2-1.5-3.1-16.9-4.3-15.6-4.7,5.1-2.5,16.7.1,19.4,1.7,1.8,10.4,5.5,12.5,5.9,2.8.5,14.6,0,14.6.9.1,1-10.2,2.3-12.2,3-1.9.7-7.8,3.9-9.3,6-1.9,2.8-3.5,14.3,1.1,14.4,2.1.1,2.6-10.7,3.4-12.2.4-.9,5.7-4.6,7-5.2,1.3-.7,10.7-3.8,10.8-3.2.1.9-7.2,4.9-9.2,7.3-1.6,2-2.6,8.3-2.6,10.3.1,2.1,5.3,12.2,8.8,10.4C45.5,85.9,40.6,76.5,40.7,75.5Z"/>\n    </symbol>', '<symbol id="maturity-advisory-NICAM-sex" viewBox="0 0 100 100">\n        <path d="M1,51a50,50,0,1,1,50,50A50.018,50.018,0,0,1,1,51Z" fill="#fff"/>\n        <path d="M7.4,51a43.6,43.6,0,0,1,87.2,0C94.4,75.1,74.8,94.6,51,94.6A43.832,43.832,0,0,1,7.4,51Zm8.7-2.6a1.223,1.223,0,0,0,1.8.3c.4-.2.6-1.2.3-2,.4.4,1.3.8,1.8.3.7-.5.8-3.2.2-4.8-1-2.1-3.5-1.3-3.3,1.3-1.2-.9-3,1.2-2,3.1-1.2-.9-2.7,1.5-1.2,3.4.9,1.1,2.1,1,2.5.5A2,2,0,0,0,16.1,48.4ZM34.7,75c-2.6-4-6,.6-10.5-6.4C20,62.4,28.8,56.4,28,51.9c-.5-3.9-3.9-4.2-7-3-2.8,1.2-5.3,4.2-5.1,7.5.3,3.6,1.3,7.1,6.3,14.8,5.1,8.1,8.4,10.4,10.7,9.8C35.6,80.4,36,76.9,34.7,75ZM26.9,38.4a2.68,2.68,0,0,0-5.2.7c-.3,2.4,1,7.1,2.3,7.3C25.6,46.6,28,41.2,26.9,38.4ZM39.1,59.9c-.7-.4-1.6.2-2,1a2.84,2.84,0,0,0-.6-2.6,1.515,1.515,0,0,0-2,.7,2.552,2.552,0,0,0-.3-2.6c-.5-.3-1.9-.2-2.7,1.4-1.4,2.7.4,5.4,1.9,4.1-.8,2.4,1.5,4.7,2.7,3.3.1,3.2,3,3.7,3.8.8C40.4,63.9,40.1,60.4,39.1,59.9Zm8.3-7.8c-.4-5.1-9-8.2-7-16.4,2.8-10.7,6.8-6.4,8.4-11.6.8-2.5-.1-5.9-3.7-6.4-2.6-.4-5.8,5.1-8.8,15.5-3,10.1-3.5,13.9-2.7,17.7.7,3.6,5.1,6.8,8.3,7.1C45.3,58.3,47.9,56.5,47.4,52.1Zm-3.7,8.1c-1.4.2-2.5,6.3-2.1,9,.6,3.4,4.7,4.1,5.9.9C48.7,66.7,45.5,60,43.7,60.2Zm24.8-9.3c.8-3.8.2-7.6-2.7-17.7-3-10.4-6.2-15.9-8.8-15.5-3.7.5-4.4,3.9-3.7,6.4,1.6,5.2,5.5.9,8.3,11.6,2.1,8.2-6.5,11.3-7,16.4-.4,4.4,2.2,6.2,5.6,5.9C63.4,57.7,67.8,54.5,68.5,50.9ZM60.4,69.2c.5-2.7-.6-8.8-2.1-9-1.8-.2-4.9,6.5-3.7,9.9C55.8,73.3,59.8,72.6,60.4,69.2Zm5.5-4c1.2,1.4,3.6-.9,2.7-3.3,1.5,1.3,3.3-1.4,1.9-4.1-.8-1.6-2.2-1.7-2.6-1.4a2.8,2.8,0,0,0-.4,2.6,1.469,1.469,0,0,0-2-.7,3.155,3.155,0,0,0-.6,2.6c-.4-.8-1.3-1.4-1.9-1-1,.5-1.4,4-.9,6.1C62.9,68.9,65.9,68.4,65.9,65.2Zm14,6c4.9-7.7,6-11.2,6.3-14.8.2-3.3-2.4-6.3-5.2-7.5-3.1-1.2-6.3-.9-6.9,3-.8,4.5,7.9,10.5,3.8,16.7-4.6,7-8,2.4-10.6,6.4-1.3,1.9-.8,5.4,1.8,6C71.4,81.6,74.7,79.3,79.9,71.2Zm.4-32.1a2.622,2.622,0,0,0-5.1-.7c-1.2,2.8,1.2,8.2,2.9,8C79.3,46.2,80.6,41.5,80.3,39.1Zm8,10.9c1.5-1.9.1-4.3-1.2-3.4,1.1-1.9-.8-4-2-3.1.3-2.6-2.3-3.4-3.2-1.3-.7,1.6-.6,4.3.2,4.8.5.5,1.3.1,1.7-.3a2.367,2.367,0,0,0,.3,2,1.223,1.223,0,0,0,1.8-.3,1.775,1.775,0,0,0,0,2.1A1.586,1.586,0,0,0,88.3,50Z"/>\n    </symbol>', '<symbol id="maturity-advisory-NICAM-violence" viewBox="0 0 100 100">\n        <path d="M1,51a50,50,0,1,1,50,50A50.018,50.018,0,0,1,1,51Z" fill="#fff"/>\n        <path d="M7.4,51A43.6,43.6,0,1,1,51,94.6,43.51,43.51,0,0,1,7.4,51ZM51,78.4c-2.4.2-6.1-2.5-6.1-5.9a11.179,11.179,0,0,1,1.3-4.8,8.02,8.02,0,0,1-9.1-2.8,8.677,8.677,0,0,1-1.4-5,17.414,17.414,0,0,1-8.8-5.5c-2.7-3.1,1-6.1,1.8-4.9,3.9,5.7,14,9.5,17.9,8.4A3.641,3.641,0,0,0,49,55.8c.9-3-2.6-7.1-10.9-12.7a14.971,14.971,0,0,0-8.6-2.8c-7.9,0-13.2,6.9-13.2,15,0,10.8,10,14.3,15.3,12.5-2.1,3.4-.5,9.7,3.3,12.4C38.4,82.7,47.2,83.8,51,78.4Zm21.7,2.7s-1-8.9-1.4-11.6c6.4-3.4,12.1-6.7,12.1-6.7a3.191,3.191,0,0,0-.3-5.5s-6.5-3.4-13.5-6.8A170.571,170.571,0,0,0,80.7,36.1c1.9-2.6.9-7.1-4.1-6.4L59.8,32.2c-.1-5.8-.7-15-.7-15-.1-1.6-2.4-2.2-3.6-1-2,1.7-7.2,6.4-11.5,10.6-2.4-2.2-9.9-8.9-9.9-8.9a1.893,1.893,0,0,0-2.9,1.7l.1,13.7c0,1.8,2.3,1.2,2.5,0L35,24l7.1,5.8c1.4.8,2.4.7,3.9-.3l8.3-5.9L56,34.4a2.038,2.038,0,0,0,1.9,1.9l15.7-.1L65,49.8a1.829,1.829,0,0,0,.1,2.4l11.7,8.7-7.9,5.5a3.318,3.318,0,0,0-1.6,3l1.6,9.3-8.5-1a.741.741,0,0,0-1,.6c-.2.6,0,1.2.4,1.3l11,3.9C71.7,83.7,73,83,72.7,81.1ZM47.2,36.5c-3.7-4.3-9.2-1.2-13,1.7a27.2,27.2,0,0,1,7,3.1,40.207,40.207,0,0,1,5,4.2C48.8,43,50,39.8,47.2,36.5Zm6.7,23.6c3.9-2.9,8.8-7.7,5.3-12.6-2.7-3.8-6.9-3.8-11-.6,3,3,5,6.7,3.9,9.9A6.22,6.22,0,0,1,48,60.6a16.181,16.181,0,0,1-8.7-.2,4.448,4.448,0,0,0,.9,2C42.3,65.1,46.1,66.1,53.9,60.1Zm6.2,12.2c3-2.3,6.5-5.7,3.8-9.5s-6.4-1.5-9.4.8c-5.5,4.1-6.2,7.5-4.6,9.7C51.1,74.8,55.2,76.3,60.1,72.3Z"/>\n    </symbol>'],
    a.startup.svgs.iconBBFCRatings = ['<symbol id="maturity-rating-BBFC-R18" viewBox="0 0 330 330"><path fill="#fff" d="M252.13,5.23H31.34A26.14,26.14,0,0,0,5.23,31.34V252.13a26.13,26.13,0,0,0,26.11,26.1H252.13a26.13,26.13,0,0,0,26.1-26.1V31.34A26.13,26.13,0,0,0,252.13,5.23Zm13,246.9a13,13,0,0,1-13,13H31.34a13,13,0,0,1-13-13V31.34a13,13,0,0,1,13-13H252.13a13,13,0,0,1,13,13Z" transform="translate(0 0)"/><path d="M252.13,0H31.34A31.38,31.38,0,0,0,0,31.34V252.13a31.37,31.37,0,0,0,31.34,31.33H252.13a31.37,31.37,0,0,0,31.33-31.33V31.34A31.37,31.37,0,0,0,252.13,0Zm26.1,252.13a26.13,26.13,0,0,1-26.1,26.1H31.34a26.13,26.13,0,0,1-26.11-26.1V31.34A26.14,26.14,0,0,1,31.34,5.23H252.13a26.13,26.13,0,0,1,26.1,26.11Z" transform="translate(0 0)"/><path fill="#006ed2" d="M31.34,18.32H252.13a13,13,0,0,1,13,13V252.13a13,13,0,0,1-13,13H31.34a13,13,0,0,1-13-13V31.34a13,13,0,0,1,13-13Z"/><path fill="#fff" d="M54.41,105v32.65h6.8c6.64,0,9.15-.15,12.85-.3,4.28-.15,18.32-.88,18.32-16.1a14.92,14.92,0,0,0-8.28-14C80,105.14,75,105,63.42,105ZM35.06,88.15H68.3c13.89.15,23.19.15,32.35,7.53,6.5,5.32,11.52,13.59,11.52,25.71,0,19.94-14.62,26.88-20.53,28.66l23.19,42.4H92.53L71.84,153.74H54.41v38.71H35.06Z" transform="translate(0 0)"/><path fill="#fff" d="M164.19,87.73V192.44H145.11V132.56c0-9.93,0-12.87-8.53-12.87H119.51v-12h2c9.77-.15,23-.31,27.15-20Z" transform="translate(0 0)"/><path fill="#fff" d="M199.31,117.21c0,4.65,2,13.8,16.13,13.8,12.26,0,15.36-7.91,15.36-13.8,0-11.95-9.46-14.12-15.51-14.12-13.19-.16-16,8.37-16,14.12m-1.71,44.52c0,8.84,6.21,14.89,17.69,14.89,10.08,0,17.53-5.27,17.53-15.05,0-1.86-.31-14.89-17.53-14.89-16.6,0-17.69,11.79-17.69,15m56,.62c0,19.08-16.45,31.49-39.25,31.49-23.89,0-38.63-13.34-38.63-31.49,0-16.45,11.94-22.18,17.22-24.67-11.17-5.27-13.5-16.6-13.5-22.8,0-16.29,13.5-28.86,36-28.86,21.57,0,35.69,11.64,35.69,29.79,0,9.15-3.73,17.06-13.66,21.87,12.1,6,16.14,15,16.14,24.67" transform="translate(0 0)"/></symbol>', '<symbol id="maturity-rating-BBFC-AV" viewBox="0 0 285 285"><path d="M141.73,0A141.73,141.73,0,1,0,283.46,141.73,141.74,141.74,0,0,0,141.73,0Zm0,278.49A136.76,136.76,0,1,1,278.49,141.73,136.76,136.76,0,0,1,141.73,278.49Z"/><path fill="#fff" d="M141.73,5A136.76,136.76,0,1,0,278.49,141.73,136.76,136.76,0,0,0,141.73,5Zm0,261.09A124.33,124.33,0,1,1,266.06,141.73,124.32,124.32,0,0,1,141.73,266.06Z"/><circle fill="#050" cx="141.73" cy="141.73" r="124.33" transform="translate(-58.71 141.73) rotate(-45)"/><path fill="#fff" d="M122.83,169.94H86.08l-5.69,19.14H60.84l33-97.92h20.8l33.42,97.92H128.52ZM118,154l-13.45-45.07L90.93,154Z"/><polygon fill="#fff" points="221.33 91.16 193.45 189.07 168.76 189.07 139.92 91.16 159.2 91.16 181.11 168.42 202.33 91.16 221.33 91.16"/></symbol>', '<symbol id="maturity-rating-BBFC-UC" viewBox="0 0 330 330"><path d="M314.25,238.77,185,14.9a29.79,29.79,0,0,0-51.6,0L4.14,238.78a29.79,29.79,0,0,0,25.8,44.68H288.45a29.79,29.79,0,0,0,25.8-44.69ZM310,266.08a24.57,24.57,0,0,1-21.5,12.41H29.94a24.83,24.83,0,0,1-21.5-37.23L137.7,17.38a24.82,24.82,0,0,1,43,0L310,241.26A24.6,24.6,0,0,1,310,266.08Z" transform="translate(-0.1 0)"/><path fill="#fff" d="M310,241.26,180.69,17.38a24.82,24.82,0,0,0-43,0L8.44,241.26a24.83,24.83,0,0,0,21.5,37.23H288.45A24.82,24.82,0,0,0,310,241.26Zm-21.5,24.8H29.94a12.39,12.39,0,0,1-10.73-18.58L148.47,23.6a12.39,12.39,0,0,1,21.45,0L299.18,247.48A12.39,12.39,0,0,1,288.45,266.06Z" transform="translate(-0.1 0)"/><path fill="#0ac700" d="M169.92,23.6a12.39,12.39,0,0,0-21.45,0L19.21,247.48a12.39,12.39,0,0,0,10.73,18.58H288.45a12.39,12.39,0,0,0,10.73-18.58Z" transform="translate(-0.1 0)"/><path fill="#fff" d="M174.54,136.57V199c-.14,11.23-.14,20.49-10.67,29.47-10.1,8.85-23.16,9.69-29.89,9.69a52.87,52.87,0,0,1-17.55-2.67c-11.79-4.07-18.1-12.63-20.34-20.07-1.27-4.35-1.27-7.44-1.41-19.79V136.57h18.53v60.92c0,4.21-.14,8.28,1.26,12.06,3.79,9.55,14.18,10.67,20.07,10.67,3,0,10.39-.14,15.86-4.91s5.47-10.53,5.47-18.8V136.57Z" transform="translate(-0.1 0)"/><path fill="#fff" d="M235.05,190.33a16.35,16.35,0,0,0-15.86-11.93c-9.68,0-17.4,7.72-17.4,21.75,0,12.63,6.6,21.9,17.69,21.9,10.66,0,14.73-8.14,16.83-13.76l14.46,7.58c-5.47,15.16-19.37,21.9-31.58,21.9-19.5,0-34.8-15-34.8-37.2,0-21.47,15.44-37.19,35.37-37.19,17.68,0,26.66,11.79,30.31,19.93Z" transform="translate(-0.1 0)"/></symbol>', '<symbol id="maturity-rating-BBFC-60" viewBox="0 0 330 330"><path d="M314.25,238.77,185,14.9a29.79,29.79,0,0,0-51.6,0L4.14,238.78a29.79,29.79,0,0,0,25.8,44.68H288.45a29.79,29.79,0,0,0,25.8-44.69ZM310,266.08a24.57,24.57,0,0,1-21.5,12.41H29.94a24.83,24.83,0,0,1-21.5-37.23L137.7,17.38a24.82,24.82,0,0,1,43,0L310,241.26A24.6,24.6,0,0,1,310,266.08Z" transform="translate(-0.1 0)"/><path fill="#fff" d="M310,241.26,180.69,17.38a24.82,24.82,0,0,0-43,0L8.44,241.26a24.83,24.83,0,0,0,21.5,37.23H288.45A24.82,24.82,0,0,0,310,241.26Zm-21.5,24.8H29.94a12.39,12.39,0,0,1-10.73-18.58L148.47,23.6a12.39,12.39,0,0,1,21.45,0L299.18,247.48A12.39,12.39,0,0,1,288.45,266.06Z" transform="translate(-0.1 0)"/><path fill="#fbad00" d="M169.92,23.6a12.39,12.39,0,0,0-21.45,0L19.21,247.48a12.39,12.39,0,0,0,10.73,18.58H288.45a12.39,12.39,0,0,0,10.73-18.58Z" transform="translate(-0.1 0)"/><path fill="#fff" d="M102.16,161.48V194.3h12.73a39.91,39.91,0,0,0,10-.8c11-2.68,11.65-12.73,11.65-16.08,0-7-3.08-10.58-4.68-12.06-4.43-3.75-10.59-3.88-16.35-3.88ZM84.34,146.34h31.89c5.22,0,10.72,0,16.21,1.47,9.24,2.55,22.24,10.85,22.24,30,0,12.6-5.9,26.13-22.77,29.88-5.23,1.21-10.19,1.21-16,1.21h-13.8v32H84.34Z" transform="translate(-0.1 0)"/><path fill="#fff" d="M244.9,189.21v51.71H229.76v-8a35.68,35.68,0,0,1-25.85,10.45c-29.21,0-44.61-23.32-44.61-48.77,0-29.74,19.69-50.64,45.68-50.64,19.7,0,34.16,12.06,39.92,27.86L228,178.63c-1.74-5.23-6.83-18.76-22.91-18.76-17.81,0-26.52,15.54-26.52,34.17,0,20.76,11.39,32.68,26.79,32.68,9.92,0,21.71-5.22,23.31-22H205.11V189.21Z" transform="translate(-0.1 0)"/></symbol>', '<symbol id="maturity-rating-BBFC-90" viewBox="0 0 285 285"><path d="M141.73,0A141.73,141.73,0,1,0,283.46,141.73,141.74,141.74,0,0,0,141.73,0Zm0,278.49A136.76,136.76,0,1,1,278.49,141.73,136.76,136.76,0,0,1,141.73,278.49Z" transform="translate(0 0)"/><path fill="#fff" d="M141.73,5A136.76,136.76,0,1,0,278.49,141.73,136.76,136.76,0,0,0,141.73,5Zm0,261.09A124.33,124.33,0,1,1,266.06,141.73,124.32,124.32,0,0,1,141.73,266.06Z" transform="translate(0 0)"/><circle fill="#ff7d13" cx="141.73" cy="141.73" r="124.33" transform="translate(-58.71 141.73) rotate(-45)"/><path fill="#fff" d="M114,90.43v99.48H95.92V133c0-9.43,0-12.23-8.11-12.23H71.6V109.44h1.91c9.29-.14,21.82-.29,25.8-19Z" transform="translate(0 0)"/><path fill="#fff" d="M198,174.59v15.32H130.38V175.62c12.67-8.7,25.2-20.64,31.09-26.68,5.46-5.6,14.59-15.18,14.59-28.3,0-7.66-3.82-14.88-13.11-14.88-14.59,0-14.15,15.92-14,23l-18.57-1.62c0-14,4.57-23,8.4-27.56,5.45-6.34,14.88-10.76,25.64-10.76,18.87,0,32,12.23,32,31.1,0,16.06-9.87,27.56-20.77,37.43-2.22,1.92-15.48,13.12-21.08,17.25Z" transform="translate(0 0)"/></symbol>', '<symbol id="maturity-rating-BBFC-100" viewBox="0 0 285 285"><path d="M141.73,0A141.73,141.73,0,1,0,283.46,141.73,141.74,141.74,0,0,0,141.73,0Zm0,278.49A136.76,136.76,0,1,1,278.49,141.73,136.76,136.76,0,0,1,141.73,278.49Z" transform="translate(0 0)"/><path fill="#fff" d="M141.73,5A136.76,136.76,0,1,0,278.49,141.73,136.76,136.76,0,0,0,141.73,5Zm0,261.09A124.33,124.33,0,1,1,266.06,141.73,124.32,124.32,0,0,1,141.73,266.06Z" transform="translate(0 0)"/><circle fill="#fb4f93" cx="141.73" cy="141.73" r="124.33" transform="translate(-58.71 141.73) rotate(-45)"/><path fill="#fff" d="M114,90.43v99.48H95.9V133c0-9.43,0-12.23-8.11-12.23H71.57V109.44h1.92c9.29-.15,21.81-.29,25.8-19Z" transform="translate(0 0)"/><path fill="#fff" d="M191.23,106.79H152.46l-3.39,22c4.42-4.42,11.5-7.37,19.16-7.37,17.69,0,30.22,13.11,30.22,33.16,0,20.49-13.41,36.7-37,36.7a41,41,0,0,1-18.87-4.13c-13.86-7.37-14.89-20.19-15.33-25.05l20.64-1.48c.43,10.17,6.77,14.74,14.29,14.74a15.09,15.09,0,0,0,8.7-2.36c4.42-3,7.51-9.87,7.51-17.68,0-12.39-7.66-18.72-16.5-18.72-6.78,0-12.53,3.09-14.89,9.28l-16.66-1,7.08-54.68H192.7Z" transform="translate(0 0)"/></symbol>', '<symbol id="maturity-rating-BBFC-35" viewBox="0 0 330 330"><path d="M314.25,238.77,185,14.9a29.79,29.79,0,0,0-51.6,0L4.14,238.78a29.79,29.79,0,0,0,25.8,44.68H288.45a29.79,29.79,0,0,0,25.8-44.69ZM310,266.08a24.57,24.57,0,0,1-21.5,12.41H29.94a24.83,24.83,0,0,1-21.5-37.23L137.7,17.38a24.82,24.82,0,0,1,43,0L310,241.26A24.6,24.6,0,0,1,310,266.08Z" transform="translate(-0.1 0)"/><path fill="#fff" d="M310,241.26,180.69,17.38a24.82,24.82,0,0,0-43,0L8.44,241.26a24.83,24.83,0,0,0,21.5,37.23H288.45A24.82,24.82,0,0,0,310,241.26Zm-21.5,24.8H29.94a12.39,12.39,0,0,1-10.73-18.58L148.47,23.6a12.39,12.39,0,0,1,21.45,0L299.18,247.48A12.39,12.39,0,0,1,288.45,266.06Z" transform="translate(-0.1 0)"/><path fill="#0ac700" d="M169.92,23.6a12.39,12.39,0,0,0-21.45,0L19.21,247.48a12.39,12.39,0,0,0,10.73,18.58H288.45a12.39,12.39,0,0,0,10.73-18.58Z" transform="translate(-0.1 0)"/><path fill="#fff" d="M199.13,136.57V199c-.14,11.23-.14,20.49-10.67,29.47-10.1,8.85-23.16,9.69-29.89,9.69A52.58,52.58,0,0,1,141,235.52c-11.79-4.07-18.11-12.63-20.35-20.07-1.26-4.35-1.26-7.44-1.41-19.79V136.57h18.53v60.92c0,4.21-.14,8.28,1.27,12.07,3.79,9.54,14.17,10.66,20.07,10.66,3,0,10.38-.13,15.86-4.91s5.47-10.53,5.47-18.81V136.57Z" transform="translate(-0.1 0)"/></symbol>', '<symbol id="maturity-rating-BBFC-12A" viewBox="0 0 285 285"><path d="M141.73,0A141.73,141.73,0,1,0,283.46,141.73,141.74,141.74,0,0,0,141.73,0Zm0,278.49A136.76,136.76,0,1,1,278.49,141.73,136.76,136.76,0,0,1,141.73,278.49Z" transform="translate(0 0)"/><path fill="#fff" d="M141.73,5A136.76,136.76,0,1,0,278.49,141.73,136.76,136.76,0,0,0,141.73,5Zm0,261.09A124.33,124.33,0,1,1,266.06,141.73,124.32,124.32,0,0,1,141.73,266.06Z" transform="translate(0 0)"/><circle fill="#ff7d13" cx="141.73" cy="141.73" r="124.33" transform="translate(-58.71 141.73) rotate(-45)"/><path fill="#fff" d="M71.4,90.43v99.48H53.27V133c0-9.43,0-12.23-8.11-12.23H29V109.44h1.92c9.28-.14,21.81-.29,25.79-19Z" transform="translate(0 0)"/><path fill="#fff" d="M155.38,174.59v15.32H87.73V175.62c12.68-8.7,25.21-20.64,31.1-26.68,5.45-5.6,14.59-15.18,14.59-28.3,0-7.66-3.83-14.89-13.11-14.89-14.6,0-14.15,15.93-14,23l-18.57-1.62c0-14,4.57-23,8.4-27.56,5.46-6.34,14.89-10.76,25.65-10.76,18.86,0,32,12.23,32,31.1,0,16.06-9.87,27.56-20.78,37.43-2.21,1.92-15.47,13.12-21.08,17.25Z" transform="translate(0 0)"/><path fill="#fff" d="M219.23,154.41l-13.62-45.62-13.75,45.62Zm4.91,16.14H187l-5.76,19.37H161.4l33.4-99.1h21.06l33.82,99.1H229.89Z" transform="translate(0 0)"/></symbol>', '<symbol id="maturity-rating-BBFC-124" viewBox="0 0 285 285"><path d="M141.73,0A141.73,141.73,0,1,0,283.46,141.73,141.74,141.74,0,0,0,141.73,0Zm0,278.49A136.76,136.76,0,1,1,278.49,141.73,136.76,136.76,0,0,1,141.73,278.49Z" transform="translate(0 0)"/><path fill="#fff" d="M141.73,5A136.76,136.76,0,1,0,278.49,141.73,136.76,136.76,0,0,0,141.73,5Zm0,261.09A124.33,124.33,0,1,1,266.06,141.73,124.32,124.32,0,0,1,141.73,266.06Z" transform="translate(0 0)"/><circle fill="#dc0a0a" cx="141.73" cy="141.73" r="124.33" transform="translate(-58.71 141.73) rotate(-45)"/><path fill="#fff" d="M114,90.43v99.48H95.9V133c0-9.43,0-12.23-8.11-12.23H71.57V109.44h1.92c9.29-.15,21.82-.29,25.8-19Z" transform="translate(0 0)"/><path fill="#fff" d="M148.63,118.43c0,4.42,1.92,13.12,15.33,13.12,11.65,0,14.59-7.52,14.59-13.12,0-11.35-9-13.41-14.74-13.41-12.52-.15-15.18,8-15.18,13.41M147,160.73c0,8.4,5.9,14.15,16.8,14.15,9.58,0,16.66-5,16.66-14.3,0-1.76-.3-14.15-16.66-14.15-15.77,0-16.8,11.21-16.8,14.3m53.21.59c0,18.13-15.63,29.92-37.29,29.92-22.7,0-36.7-12.67-36.7-29.92,0-15.63,11.35-21.08,16.36-23.43-10.61-5-12.82-15.78-12.82-21.67,0-15.47,12.82-27.42,34.19-27.42,20.49,0,33.9,11.06,33.9,28.3,0,8.7-3.54,16.21-13,20.79,11.49,5.74,15.33,14.29,15.33,23.43" transform="translate(0 0)"/></symbol>'],
    a.startup.svgs.controls = ['<symbol id="play-button" viewBox="0 0 38 38">\n        <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">\n            <rect id="BG" fill-opacity="0" fill="#FFFFFF" x="0" y="0" width="38" height="38"></rect>\n            <polygon id="Play" fill="#FFFFFF" points="8 5 34 19 8 33"></polygon>\n        </g>\n    </symbol>', '<symbol id="play-button-black" viewBox="0 0 38 38">\n        <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">\n            <rect id="BG" fill-opacity="0" fill="#000000" x="0" y="0" width="38" height="38"></rect>\n            <polygon id="Play" fill="#000000" points="8 5 34 19 8 33"></polygon>\n        </g>\n    </symbol>', '<symbol id="pause-button" viewBox="0 0 38 38">\n        <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">\n            <rect id="BG" fill-opacity="0" fill="#FFFFFF" x="0" y="0" width="38" height="38"></rect>\n            <path d="M8,4 L16,4 L16,34 L8,34 L8,4 Z M22,4 L30,4 L30,34 L22,34 L22,4 Z" id="Shape" fill="#FFFFFF"></path>\n        </g>\n    </symbol>', '<symbol id="forward-ten" viewBox="0 0 38 38">\n        <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">\n            <rect id="BG" fill-opacity="0" fill="#FFFFFF" x="0" y="0" width="38" height="38"></rect>\n            <path d="M18.7436932,6.00214563 L16.6863444,3.12185729 L19.1275448,1.37814271 L23.5003,7.5 L19.1275448,13.6218573 L16.6863444,11.8781427 L18.7401914,9.00275685 C12.2327399,9.14098049 7,14.4594043 7,21 C7,27.627417 12.372583,33 19,33 C25.627417,33 31,27.627417 31,21 C31,18.6330238 30.3149578,16.3715711 29.0471678,14.4355899 L31.5569146,12.7920658 C33.1421872,15.2128596 34,18.0446605 34,21 C34,29.2842712 27.2842712,36 19,36 C10.7157288,36 4,29.2842712 4,21 C4,12.8013337 10.5776528,6.13896059 18.7436932,6.00214563 Z M13.84,27 L13.84,18.615 L11.35,19.38 L11.35,17.625 L15.82,16.365 L15.82,27 L13.84,27 Z M22.6,27.225 C21.7599958,27.225 21.0250031,27.0025022 20.395,26.5575 C19.7649969,26.1124978 19.2775017,25.4825041 18.9325,24.6675 C18.5874983,23.8524959 18.415,22.8900055 18.415,21.78 C18.415,20.6799945 18.5874983,19.7200041 18.9325,18.9 C19.2775017,18.0799959 19.7649969,17.4475022 20.395,17.0025 C21.0250031,16.5574978 21.7599958,16.335 22.6,16.335 C23.4400042,16.335 24.1749968,16.5574978 24.805,17.0025 C25.4350032,17.4475022 25.9224983,18.0799959 26.2675,18.9 C26.6125017,19.7200041 26.785,20.6799945 26.785,21.78 C26.785,22.8900055 26.6125017,23.8524959 26.2675,24.6675 C25.9224983,25.4825041 25.4350032,26.1124978 24.805,26.5575 C24.1749968,27.0025022 23.4400042,27.225 22.6,27.225 Z M22.6,25.455 C23.2600033,25.455 23.787498,25.1300033 24.1825,24.48 C24.577502,23.8299968 24.775,22.9300058 24.775,21.78 C24.775,20.6299943 24.577502,19.7300033 24.1825,19.08 C23.787498,18.4299968 23.2600033,18.105 22.6,18.105 C21.9399967,18.105 21.412502,18.4299968 21.0175,19.08 C20.622498,19.7300033 20.425,20.6299943 20.425,21.78 C20.425,22.9300058 20.622498,23.8299968 21.0175,24.48 C21.412502,25.1300033 21.9399967,25.455 22.6,25.455 Z M22.6863444,11.8781427 L25.8135892,7.5 L22.6863444,3.12185729 L25.1275448,1.37814271 L29.5003,7.5 L25.1275448,13.6218573 L22.6863444,11.8781427 Z" id="Shape" fill="#FFFFFF"></path>\n        </g>\n    </symbol>', '<symbol id="back-ten" viewBox="0 0 38 38">\n        <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">\n            <rect id="BG" fill-opacity="0" fill="#FFFFFF" x="0" y="0" width="38" height="38"></rect>\n            <path d="M19.6782448,9.01884513 L21.7206002,11.8781427 L19.2793998,13.6218573 L14.9066446,7.5 L19.2793998,1.37814271 L21.7206002,3.12185729 L19.6547599,6.0140337 C27.6352552,6.3567937 34,12.9351139 34,21 C34,29.2842712 27.2842712,36 19,36 C10.7157288,36 4,29.2842712 4,21 C4,18.0446605 4.85781284,15.2128596 6.44308545,12.7920658 L8.95283218,14.4355899 C7.6850422,16.3715711 7,18.6330238 7,21 C7,27.627417 12.372583,33 19,33 C25.627417,33 31,27.627417 31,21 C31,14.6002004 25.9901203,9.37052082 19.6782448,9.01884513 L19.6782448,9.01884513 Z M13.705,27 L13.705,18.615 L11.215,19.38 L11.215,17.625 L15.685,16.365 L15.685,27 L13.705,27 Z M22.465,27.225 C21.6249958,27.225 20.8900031,27.0025022 20.26,26.5575 C19.6299968,26.1124978 19.1425017,25.4825041 18.7975,24.6675 C18.4524983,23.8524959 18.28,22.8900055 18.28,21.78 C18.28,20.6799945 18.4524983,19.7200041 18.7975,18.9 C19.1425017,18.0799959 19.6299968,17.4475022 20.26,17.0025 C20.8900031,16.5574978 21.6249958,16.335 22.465,16.335 C23.3050042,16.335 24.0399968,16.5574978 24.67,17.0025 C25.3000031,17.4475022 25.7874983,18.0799959 26.1325,18.9 C26.4775017,19.7200041 26.65,20.6799945 26.65,21.78 C26.65,22.8900055 26.4775017,23.8524959 26.1325,24.6675 C25.7874983,25.4825041 25.3000031,26.1124978 24.67,26.5575 C24.0399968,27.0025022 23.3050042,27.225 22.465,27.225 Z M22.465,25.455 C23.1250033,25.455 23.652498,25.1300033 24.0475,24.48 C24.442502,23.8299968 24.64,22.9300058 24.64,21.78 C24.64,20.6299943 24.442502,19.7300033 24.0475,19.08 C23.652498,18.4299968 23.1250033,18.105 22.465,18.105 C21.8049967,18.105 21.277502,18.4299968 20.8825,19.08 C20.487498,19.7300033 20.29,20.6299943 20.29,21.78 C20.29,22.9300058 20.487498,23.8299968 20.8825,24.48 C21.277502,25.1300033 21.8049967,25.455 22.465,25.455 Z M12.5933554,7.5 L15.7206002,11.8781427 L13.2793998,13.6218573 L8.90664459,7.5 L13.2793998,1.37814271 L15.7206002,3.12185729 L12.5933554,7.5 Z" id="Shape" fill="#FFFFFF"></path>\n        </g>\n    </symbol>', '<symbol id="audio-subdubs-off" viewBox="0 0 38 38">\n        <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">\n            <path d="M8,20 L20,20 L20,24 L8,24 L8,20 Z M8,14 L17,14 L17,18 L8,18 L8,14 Z M19,14 L30,14 L30,18 L19,18 L19,14 Z M22,20 L30,20 L30,24 L22,24 L22,20 Z M28,27 L34,27 L34,8 L4,8 L4,27 L22.3366382,27 L28,30.5 L28,27 Z M32,37 L21.2242049,31 L0,31 L0,4 L38,4 L38,31 L32,31 L32,37 Z" id="Shape" fill="#FFFFFF"></path>\n        </g>\n    </symbol>', '<symbol id="audio-subdubs-on" viewBox="0 0 38 33">\n        <g id="audio-subdubs-on" fill="#FFFFFF" fill-rule="nonzero">\n            <path d="M38,0 L38,27 L32,27 L32,33 L21.2242049,27 L0,27 L0,0 L38,0 Z M20,16 L8,16 L8,20 L20,20 L20,16 Z M30,16 L22,16 L22,20 L30,20 L30,16 Z M17,10 L8,10 L8,14 L17,14 L17,10 Z M30,10 L19,10 L19,14 L30,14 L30,10 Z" id="Combined-Shape"></path>\n        </g>\n    </symbol>', '<symbol id="skip-credits" viewBox="0 0 23 13">\n        <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">\n            <g id="Artboard" transform="translate(-1.000000, -6.000000)" fill="#FFFFFF">\n                <g id="icons/skipcredits">  \n                    <path d="M1,6 L11,12.0714286 L1,18.1428571 L1,6 Z M11,6 L21,12 L11,18 L11,6 Z M23,6 L23,18 L21,18 L21,6 L23,6 Z" id="Combined-Shape"></path>\n                </g>\n            </g>\n        </g>\n    </symbol>', '<symbol id="ready-to-cast" viewBox="0 0 26 26">\n        <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">\n            <rect id="BG" fill-opacity="0" fill="#FFFFFF" x="0" y="0" width="26" height="26"></rect>\n            <path d="M22,4 L4,4 C2.9,4 2,4.9 2,6 L2,9 L4,9 L4,6 L22,6 L22,20 L15,20 L15,22 L22,22 C23.1,22 24,21.1 24,20 L24,6 C24,4.9 23.1,4 22,4 L22,4 Z M2,11 L2,13 C6.97,13 11,17.03 11,22 L13,22 C13,15.92 8.07,11 2,11 L2,11 Z M20,8 L6,8 L6,9.63 C9.96,10.91 13.09,14.04 14.37,18 L20,18 L20,8 Z M2,15 L2,17 C4.76,17 7,19.24 7,22 L9,22 C9,18.13 5.87,15 2,15 L2,15 Z M2,19 L2,22 L5,22 C5,20.34 3.66,19 2,19 L2,19 Z" id="shape" fill="#FFFFFF"></path>\n        </g>\n    </symbol>', '<symbol id="netflix-logo" viewBox="0 0 371 100">\n        <title>Brand Elements/Netflix_Logotype</title>\n        <defs>\n            <path d="M50.8335121,93.5419956 L50.8335121,0 L35.2084571,0 L35.2084571,56.771033 L14.8958857,0 L0,0 L0,100.000352 C5.31251868,99.1670154 10.3125363,98.4378462 15.937556,97.812844 L15.937556,43.2293187 L33.7501187,95.6253363 C39.6876396,94.792 45.3126593,94.4794989 50.8335121,93.5419956 Z M81.6669539,36.6667956 L81.6669539,15.6250549 L109.271218,15.6250549 L109.271218,0 L66.0418989,0 L66.0418989,92.2919912 L109.271218,88.8544791 L109.271218,73.8544264 C100.000352,74.1669275 90.8336528,74.8960967 81.6669539,75.5210989 L81.6669539,52.2918506 C87.5003077,51.9793495 95.6253363,51.9793495 102.50036,51.9793495 L102.50036,36.3542945 C96.9795077,36.3542945 87.7086418,36.6667956 81.6669539,36.6667956 Z M167.396422,15.6250549 L167.396422,0 L119.37542,0 L119.37542,15.6250549 L135.52131,15.6250549 L135.52131,87.7086418 C140.625495,87.5003077 145.938013,87.5003077 151.146365,87.5003077 L151.146365,15.6250549 L167.396422,15.6250549 Z M192.813178,35.5209582 L192.813178,15.6250549 L221.146611,15.6250549 L221.146611,0 L177.396457,0 L177.396457,86.6669714 L192.813178,86.6669714 L192.813178,51.1460132 L214.16742,51.1460132 L214.16742,35.5209582 L192.813178,35.5209582 Z M246.4592,72.9169231 L246.4592,0 L230.834145,0 L230.834145,87.7086418 C245.105029,88.0211429 259.063411,88.8544791 273.021793,89.7919824 L273.021793,74.2710945 C264.37593,73.8544264 255.417565,73.1252572 246.4592,72.9169231 Z M286.251007,90.8336528 C291.251024,91.1461539 296.459376,91.3544879 301.56356,91.9794901 L301.56356,0 L286.251007,0 L286.251007,90.8336528 Z M370.001301,0 L352.917908,0 L341.980369,26.2500923 L331.772,0 L314.896941,0 L333.126171,46.9793319 L313.021934,92.8128264 C318.646954,93.5419956 324.167807,93.8544967 329.792826,94.792 L341.2512,68.2294066 L352.397073,97.1878418 C358.334593,98.1253451 364.167947,99.1670154 370.001301,100.000352 L350.209565,47.6043341 L370.001301,0 Z" id="path-1"></path>\n        </defs>\n        <g id="Brand-Elements/Netflix_Logotype" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">\n            <g>\n                <mask id="mask-2" fill="white">\n                    <use xlink:href="#path-1"></use>\n                </mask>\n                <use id="Netflix-Logotype" fill="#E50914" fill-rule="evenodd" xlink:href="#path-1"></use>\n            </g>\n        </g>\n    </symbol>', '<symbol id="dolby-vision-logo" viewBox="0 0 88 22">\n        <title>Dolby Vision</title>\n        <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">\n            <g id="play" transform="translate(1.000000, 1.000000)" fill="#FFFFFF" fill-opacity="0" fill-rule="nonzero">\n                <rect id="BG" x="0" y="0" width="38" height="38"></rect>\n            </g>\n            <g id="pause" transform="translate(0.000000, -1.000000)" fill="#FFFFFF" fill-opacity="0" fill-rule="nonzero">\n                <rect id="BG" x="0" y="0" width="38" height="38"></rect>\n            </g>\n            <g id="Metadata/Video-Quality/Dolby-Vision">\n                <path d="M85.0666667,1 L2.93333333,1 C2.39945808,1 1.91612474,1.2163957 1.56626022,1.56626022 C1.2163957,1.91612474 1,2.39945808 1,2.93333333 L1,19.0666667 C1,19.6005419 1.2163957,20.0838753 1.56626022,20.4337398 C1.91612474,20.7836043 2.39945808,21 2.93333333,21 L85.0666667,21 C85.6005419,21 86.0838753,20.7836043 86.4337398,20.4337398 C86.7836043,20.0838753 87,19.6005419 87,19.0666667 L87,2.93333333 C87,2.39945808 86.7836043,1.91612474 86.4337398,1.56626022 C86.0838753,1.2163957 85.6005419,1 85.0666667,1 Z" id="Frame" stroke="#999999" stroke-width="2" opacity="0.4"></path>\n                <text id="Duration" font-family="NetflixSans-Medium, Netflix Sans" font-size="16" font-weight="400" fill="#B3B3B3">\n                    <tspan x="26.5" y="16.5">VISION</tspan>\n                </text>\n                <path d="M21.4407201,6.57152908 L19.4394576,6.57152908 C17.3670226,6.57152908 15.637295,8.62811048 15.637295,11.0533721 C15.637295,13.5514928 17.3670226,15.5702955 19.4394576,15.5702955 L21.4407201,15.5702955 L21.4407201,6.57152908 Z M13.8600066,11.0533721 C13.8600066,8.62811048 12.1299416,6.57152908 10.0581812,6.57152908 L8.06535148,6.57152908 L8.06535148,15.5702955 L10.0581812,15.5702955 C12.1299416,15.5702955 13.8600066,13.5514928 13.8600066,11.0533721 Z M6,17.1435111 L23.5,17.1435111 L23.5,5 L6,5 L6,17.1435111 Z" id="DAt_Logo_RGB_V_White" fill="#B3B3B3" fill-rule="evenodd"></path>\n            </g>\n        </g>\n    </symbol>', '<symbol id="info-round" viewBox="0 0 26 26">\n        <title>Info</title>\n        <g id="26/@1x/info-round" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">\n            <rect id="BG" fill-opacity="0" fill="#FFFFFF" x="0" y="0" width="26" height="26"></rect>\n            <path d="M23,13 C23,18.5232847 18.5232847,23 13,23 C7.47671525,23 3,18.5232847 3,13 C3,7.47671525 7.47671525,3 13,3 C18.5232847,3 23,7.47671525 23,13 Z M21,13 C21,8.58128475 17.4187153,5 13,5 C8.58128475,5 5,8.58128475 5,13 C5,17.4187153 8.58128475,21 13,21 C17.4187153,21 21,17.4187153 21,13 Z M12,19 L12,12 L14,12 L14,19 L12,19 Z M13.0005,10.25 C12.6625,10.25 12.3695,10.129 12.1225,9.886 C11.8735,9.644 11.7505,9.348 11.7505,9 C11.7505,8.652 11.8735,8.356 12.1225,8.114 C12.3695,7.872 12.6625,7.75 13.0005,7.75 C13.3375,7.75 13.6305,7.872 13.8775,8.114 C14.1265,8.356 14.2505,8.652 14.2505,9 C14.2505,9.348 14.1265,9.644 13.8775,9.886 C13.6305,10.129 13.3375,10.25 13.0005,10.25 Z" id="Shape" fill="#FFFFFF"></path>\n        </g>\n    </symbol>'],
    a.startup.svgs.append = function () {
        var { iconKoreanRatings: e, iconBrazilianRatings: t, iconNICAMRatings: i, iconBBFCRatings: n, controls: r } = a.startup.svgs;
        var s = [];
        s.push(...e, ...t, ...i, ...n, r);
        var o = document.querySelector('#svgs defs');
        s.forEach((e) => {
            o.insertAdjacentHTML('beforeend', e);
        });
    }
    ,
    view.renderBillboard = function (e, t, i) {
        if (!e) { return; }
        var n = document.createElement('div');
        n.classList.add('idle-merch', 'animate');
        var r = document.createElement('div');
        r.classList.add('bg'),
            r.style['background-image'] = `url(${e.billboardImage})`,
            n.appendChild(r);
        var s = document.createElement('div');
        s.classList.add('overlay'),
            r.appendChild(s);
        var a = document.createElement('div');
        a.classList.add('details'),
            n.appendChild(a);
        var o = document.createElement('div');
        o.className = 'billboard-title',
            a.appendChild(o),
            t.src = e.billboardTitle,
            o.appendChild(t);
        var l = document.createElement('div');
        l.className = 'billboard-info',
            a.appendChild(l);
        var u = document.createElement('span');
        if (u.className = 'year',
            u.innerHTML = e.year,
            l.appendChild(u),
            e.rating) {
            var t2 = document.createElement('span');
            t2.className = 'rating',
                t2.innerHTML = e.rating,
                l.appendChild(t2);
        }
        var c = document.createElement('span');
        if (c.className = 'duration',
            e.seasonLabel) { c.innerHTML = e.seasonLabel; } else if (e.runtime) {
                var { hours: t23, minutes: i2 } = e.runtime;
                c.innerHTML = util.textFormat(config.text.movie.formatRuntime, {
                    hours: t2,
                    minutes: i2,
                });
            }
        l.appendChild(c);
        var d = document.createElement('div');
        d.className = 'synopsis',
            d.innerHTML = e.synopsis,
            a.appendChild(d);
        var h = document.createElement('div');
        h.addEventListener('touchend', i),
            h.className = 'play-button',
            a.appendChild(h);
        var p = document.createElement('span');
        p.classList.add('icon'),
            p.innerHTML = '<svg class="svg-icon" focusable="true"><use filter="" xlink:href="#play-button-black"></use></svg>',
            h.appendChild(p);
        var f = document.createElement('span');
        f.innerHTML = config.text.idleMerch.play,
            h.appendChild(f);
        var _ = document.createElement('div');
        _.innerHTML = '<svg class="svg-icon" focusable="true"><use filter="" xlink:href="#ready-to-cast"></use></svg>',
            _.className = 'ready-to-cast',
            n.appendChild(_);
        var v = document.createElement('span');
        return v.className = 'text',
            v.innerHTML = config.text.eureka.readyToCast,
            _.appendChild(v),
            n;
    }
    ,
    view.RotatingBillboardPromptView = view.AView.extend({
        _visibleClassName: 'rotating-billboard-prompt-focus',
        billboardElement: null,
        nextBillboardElement: null,
        init: function e(t) {
            e.base.call(this, 'RotatingBillboardPromptView'),
                this._nextBillboard = t.nextBillboard,
                this._previousBillboard = t.previousBillboard,
                document.body.classList.add('idle-merch-will-load');
        },
        updateBillboard(e, t, i, n) {
            this.nextBillboardElement ? this._loadBillboard(e, t, i, n) : this._loadFirstBillboard(e, t, n);
        },
        unloadBillboards() {
            this.billboardElement = null,
                this.nextBillboardElement = null,
                document.body.classList.remove('idle-merch-loaded'),
                document.body.classList.add('idle-merch-will-load');
            var e = document.getElementsByClassName('idle-merch');
            Array.prototype.forEach.call(e, (e) => {
                e.remove();
            });
        },
        _loadFirstBillboard(e, t, i) {
            this.nextBillboardElement = view.renderBillboard(e, new Image(), t),
                this.nextBillboardElement.classList.add('entering-first'),
                document.getElementById('app-wrapper').appendChild(this.nextBillboardElement),
                this._bindSwipe(this.nextBillboardElement),
                this._preloadImages(e, () => {
                    document.body.classList.add('idle-merch-loaded'),
                        this.nextBillboardElement.classList.add('in'),
                        i(),
                        setTimeout(() => {
                            document.body.classList.remove('idle-merch-will-load');
                        },
                            2e3);
                });
        },
        _bindSwipe(e) {
            this._boundElement && (this._boundElement.removeEventListener('touchstart', this._boundHandleStart),
                this._boundElement.removeEventListener('touchend', this.boundHandleEnd),
                this._boundElement.removeEventListener('touchcancel', this.boundHandleEnd),
                this._boundElement.removeEventListener('touchmove', this._boundHandleMove)),
                this._boundElement = e,
                this._boundHandleStart = this._handleStart.bind(this),
                this.boundHandleEnd = this._handleEnd.bind(this),
                this._boundHandleMove = this._handleMove.bind(this),
                e.addEventListener('touchstart', this._boundHandleStart, {
                    passive: !0,
                }),
                e.addEventListener('touchend', this.boundHandleEnd, {
                    passive: !0,
                }),
                e.addEventListener('touchcancel', this.boundHandleEnd, {
                    passive: !0,
                }),
                e.addEventListener('touchmove', this._boundHandleMove, {
                    passive: !0,
                });
        },
        _handleStart(e) {
            var t = e.changedTouches[0];
            this.swipeStartX = t.screenX,
                this._swiping = !1;
        },
        _handleEnd(e) {
            this.swipeStartX = null,
                this.nextBillboardElement.style.left = 0,
                this._swiping && (this._boundElement.style.transition = 'opacity 666ms linear, transform 967ms ease-out',
                    this._swiping === 'next' ? this._boundElement.style.transform = 'translateX(-140px)' : this._boundElement.style.transform = 'translateX(140px)',
                    this._boundElement.style.opacity = 0),
                this._swiping = !1;
        },
        _handleMove(e) {
            if (!this.swipeStartX) return;
            var t = e.changedTouches[0].screenX - this.swipeStartX;
            if (!this._swiping && t > 50) {
                this._swiping = 'previous',
                    this._previousBillboard();
            } else if (!this._swiping && t < -50) {
                this._swiping = 'next',
                    this._nextBillboard();
            } else {
                this._boundElement.style.left = `${t}px`;
                var e2 = window.innerWidth / 2;
                var i = 1 - Math.abs(t) / e2;
                i < 0 && (i = 0),
                    this._boundElement.style.opacity = i;
            }
        },
        _loadBillboard(e, t, i, n) {
            this.billboardElement && this.billboardElement.remove(),
                this.billboardElement = this.nextBillboardElement,
                this.billboardElement.classList.remove('left'),
                this.billboardElement.classList.remove('entering'),
                this.billboardElement.classList.remove('entering-first'),
                this.billboardElement.classList.add('exiting'),
                this.nextBillboardElement = view.renderBillboard(e, new Image(), t),
                this.nextBillboardElement.classList.add('entering'),
                i === 'left' && (this.billboardElement.classList.add('left'),
                    this.nextBillboardElement.classList.add('left')),
                document.getElementById('app-wrapper').appendChild(this.nextBillboardElement),
                setTimeout(function () {
                    this._bindSwipe(this.nextBillboardElement);
                }
                    .bind(this), 1e3),
                this._preloadImages(e, () => {
                    setTimeout(() => {
                        this.billboardElement.classList.remove('in'),
                            this.billboardElement.classList.add('out'),
                            this.nextBillboardElement.classList.add('in'),
                            n();
                    },
                        200);
                });
        },
        _preloadImages(e, t) {
            var i = new Image();
            var n = !1;
            var r = new Image();
            var s = !1;
            i.onload = function () {
                n = !0,
                    s && t();
            }
                ,
                r.onload = function () {
                    s = !0,
                        n && t();
                }
                ,
                i.src = e.billboardImage,
                r.src = e.billboardTitle;
        },
        _render() { },
    }),
    view.MdxPromptView = view.AView.extend({
        _visibleClassName: 'mdx-prompt-focus',
        init: function e() {
            e.base.call(this, 'MdxPromptView');
        },
        show: function e() {
            e.base.call(this),
                document.body.classList.add('mdx-prompt-will-animate-in'),
                setTimeout(() => {
                    document.body.classList.add('mdx-prompt-animate-in'),
                        setTimeout(() => {
                            document.body.classList.remove('mdx-prompt-will-animate-in'),
                                document.body.classList.remove('mdx-prompt-animate-in');
                        },
                            2e3);
                },
                    100);
        },
        update(e) {
            util.css.swapCond(document.body, 'switching-users', e);
        },
        _render() {
            var e = document.getElementById('mp-ready-to-cast');
            var t = document.getElementById('mp-ready-to-cast-subtext');
            e && (e.textContent = config.text.eureka.readyToCast),
                t && (t.textContent = config.text.eureka.playFromYourDevice);
        },
    }),
    util.MdxPromptTracker = util.Class.create({
        _heartbeatInterval: 1e3,
        _localStorageKey: 'mdxPromptDuration',
        _storage: window.localStorage,
        _startTime: null,
        _context: null,
        init() {
            if (this._storage) {
                var e = this._storage.getItem(this._localStorageKey);
                e && this._logDuration(e);
            }
            this._context = cast.framework.CastReceiverContext.getInstance(),
                this._context.addEventListener(cast.framework.system.EventType.READY, () => {
                    this._startHeartbeat();
                });
        },
        onPromptShown() {
            this._context.getSystemState() === cast.framework.system.SystemState.READY && this._startHeartbeat();
        },
        onPromptHidden() {
            clearInterval(this._promptHeartbeatInterval),
                this._updateUpDuration(),
                this._logDuration(this._upDuration);
        },
        _startHeartbeat() {
            this._startTime = new Date(),
                this._promptHeartbeatInterval = setInterval(this._onPromptHeartbeat.bind(this), this._heartbeatInterval);
        },
        _onPromptHeartbeat() {
            this._updateUpDuration();
        },
        _updateUpDuration() {
            var e = new Date();
            this._upDuration = e - this._startTime,
                this._storage && this._storage.setItem(this._localStorageKey, this._upDuration);
        },
        _logDuration(e) {
            util.log.error({
                event: 'mdx-prompt-duration',
                duration: e,
            }),
                this._storage.removeItem(this._localStorageKey);
        },
    }),
    controller.MdxPrompt = controller.AUiCard.extend({
        id: 'MdxPrompt',
        _tracker: null,
        init(e) {
            this.mdxStates = e.MDX_STATES,
                this.disposable = this.subscribeMdxStateChange(e.mdxState),
                this._tracker = new util.MdxPromptTracker();
        },
        actions: {},
        subscribeMdxStateChange(e) {
            return e.subscribe(function (e) {
                switch (e) {
                    case this.mdxStates.SWITCH_CREDENTIALS_START:
                        this.onSwitchCredentialsStart && this.onSwitchCredentialsStart();
                        break;
                    case this.mdxStates.SWITCH_CREDENTIALS_COMPLETE:
                        this.onSwitchCredentialsComplete && this.onSwitchCredentialsComplete();
                }
            }
                .bind(this));
        },
        _initView() {
            return new view.MdxPromptView();
        },
        onEnter: function e() {
            e.base.call(this),
                this._tracker.onPromptShown();
        },
        onExit: function e(t, i, n) {
            e.base.call(this, t, i, n),
                this._tracker.onPromptHidden();
        },
    }),
    controller.DefaultMdxPrompt = controller.MdxPrompt.extend({
        id: 'DefaultMdxPrompt',
        init: function e(t) {
            var i = this.view();
            e.base.call(this, t),
                i.show();
        },
        _initView() {
            return new view.MdxPromptView();
        },
    }),
    controller.RotatingBillboardPrompt = controller.MdxPrompt.extend({
        id: 'RotatingBillboardPrompt',
        _billboards: [],
        _currentIndex: -1,
        _delay: 2e4,
        _timeout: null,
        _model: {},
        _paused: !1,
        _switchingCredentials: !1,
        init: function e(t) {
            e.base.call(this, t),
                this.loaded = new Rx.ReplaySubject(),
                this.isFirstLoad = !0;
        },
        _loadModel() {
            var t = a.Binding.get('BROWSE_ROOT_PATH_EVALUATOR_FACTORY')();
            return util.startupProfiler.time('loadBillboards'),
                t.get(['idlemerch', 'billboards']).subscribe((e) => {
                    e.error ? this._loadError(e.error) : this._modelLoaded(e.value);
                },
                    this._loadError, e);
        },
        _loadError(e) {
            util.log.error('Failed to load idleMerch billboard ', e),
                mdxPromptCard = new controller.DefaultMdxPrompt(a.EurekaMdxDevice),
                this.onExit(!0),
                state.raiseEvent('state.enter.root', mdxPromptCard),
                this._loadComplete();
        },
        _modelLoaded(e) {
            if (!e) return void this._loadError('Empty response');
            var { idlemerch: t } = e;
            if (!t) return void this._loadError('No idlemerch to display');
            var { billboards: i } = t;
            if (!i) return void this._loadError('No billboards to display');
            var { items: n } = i;
            n ? (this._setBillboards(n),
                this._displayNextTitle(),
                this._loadComplete()) : this._loadError('No billboard items to display');
        },
        _loadComplete() {
            util.startupProfiler.timeEnd('loadBillboards'),
                setTimeout(function () {
                    this._switchingCredentials = !1;
                }
                    .bind(this), 2e3),
                this.isFirstLoad && (this.isFirstLoad = !1,
                    this.loaded.onNext(),
                    this.loaded.onCompleted());
        },
        _setBillboards(e) {
            this.view().unloadBillboards(),
                this._billboards = e,
                this._currentIndex = -1;
        },
        _displayNextTitle() {
            !this._paused && this._billboards.length && (this._currentIndex++,
                this._billboards[this._currentIndex] || (this._currentIndex = 0),
                this._loadTitleAtIndex(this._currentIndex, 'right', () => {
                    this._setNextTitleTimeout();
                }));
        },
        _displayPreviousTitle() {
            !this._paused && this._billboards.length && (this._currentIndex--,
                this._billboards[this._currentIndex] || (this._currentIndex = this._billboards.length - 1),
                this._loadTitleAtIndex(this._currentIndex, 'left', () => {
                    this._setNextTitleTimeout();
                }));
        },
        _loadTitleAtIndex(e, t, i) {
            var n = this._billboards[e];
            this.view().updateBillboard(n, (e) => {
                e.stopPropagation();
                var t = {
                    movieUri: `https://www.netflix.com/watch/${n.videoId}`,
                    playData: {
                        mdxesn: void 0,
                        origin: 'IdleMerch',
                        isMdxPlay: !1,
                    },
                };
                a.Binding.get('PLAYER_CARD').playMovie(t);
            },
                t, i),
                util.log.error({
                    event: 'mdx-show-billboard',
                    videoId: n.videoId,
                });
        },
        _setNextTitleTimeout() {
            clearTimeout(this._timeout),
                this._timeout = setTimeout(this._displayNextTitle.bind(this), this._delay);
        },
        onEnter: function e() {
            e.base.call(this),
                this._paused = !1,
                this._billboards.length > 0 ? this._currentIndex < 0 ? this._displayNextTitle() : this._setNextTitleTimeout() : this._loadModel();
        },
        onExit: function e(t, i, n) {
            e.base.call(this, t, i, n),
                this._paused = !0,
                clearTimeout(this._timeout),
                this._loadComplete();
        },
        onSwitchCredentialsComplete() {
            this._switchingCredentials || (this._switchingCredentials = !0,
                clearTimeout(this._timeout),
                this._paused = !1,
                this._setBillboards([]),
                this._loadModel());
        },
        _initView() {
            return new view.RotatingBillboardPromptView({
                nextBillboard: () => {
                    clearTimeout(this._timeout),
                        this._displayNextTitle();
                },
                previousBillboard: () => {
                    clearTimeout(this._timeout),
                        this._displayPreviousTitle();
                },
            });
        },
    }),
    util.MdxLoadError = util.Error.extend({
        type: 'MdxLoadError',
    }),
    a.AMdxDevice = util.Class.create({
        _CONTRACT_LEVEL: 1,
        devices: {},
        MDX_STATES: util.makeEnum('SWITCH_CREDENTIALS_START', 'SWITCH_CREDENTIALS_COMPLETE'),
        errors: {
            OUT_OF_SYNC: 'OUT_OF_SYNC',
            MESSAGE_IGNORED: 'MESSAGE_IGNORED',
            AUDIO_SUBTITLES_NOT_LOADED: 'AUDIO_SUBTITLES_NOT_LOADED',
        },
        firstMessageReceived: new Rx.ReplaySubject(),
        init() {
            Rx.Observable.zip([a.MdxLoaded.loaded.where((e) => e && e.state === a.MdxLoaded.STATES.LOADED && e.MdxApi), model.CurrentUser.loaded.catchException(() => Rx.Observable.returnValue(null))], function (e, t) {
                return {
                    MdxApi: e.MdxApi,
                    userGUID: t && t.profileGuid,
                };
            }).take(1).subscribeIgnoreErrors((e) => this._configureMdx(e.MdxApi, e.userGUID), (e) => {
                e instanceof util.MdxLoadError && util.log.debug(`MDXDevice: error on loading ${e}`);
            }),
                this.mdxState = new Rx.BehaviorSubject();
        },
        _configureMdx(t, i) {
            var n = window.mdx = new t(t.PLATFORMS.CAST_TARGET);
            n.configure({
                logLevel: t.LOG_LEVELS.NONE,
                registrationMode: t.REGISTRATION_MODES.DEFAULT_PIN,
                mdxContractVersion: this._CONTRACT_LEVEL,
                volumeControl: this._volumeSupport,
                profilerMode: t.PROFILER_MODES.KEY_EVENTS,
                profileId: i,
                playerStateFn: this._getPlayerState.bind(this),
            }),
                n.addEventListener(t.EVENTS.DEVICE_AVAILABLE, this.onMdxDeviceAvailable.bind(this)),
                n.addEventListener(t.EVENTS.SWITCH_CREDENTIALS, this.onMdxSwitchCredentials.bind(this)),
                s.nrdpInited.subscribeIgnoreErrors(() => {
                    n.start().done((e) => {
                        var t; let
                            i;
                        util.log.debug('MDXSTARTED'),
                            e && e.launchArgs ? (i = e.launchArgs,
                                t = e.volumeLevel) : i = e,
                            this._bindEvents(),
                            this._volumeSupport = this._isVolumeSupported(),
                            a.MdxLoaded.loaded.onNext({
                                state: a.MdxLoaded.STATES.READY,
                                launchArgs: i,
                                volumeLevel: t,
                                mdx: n,
                            });
                    },
                        (e) => {
                            util.log.error('MDX UI: configuration failed.'),
                                util.log.error(e),
                                a.MdxLoaded.loaded.onError(new util.MdxLoadError('Mdx configure failed'));
                        });
                },
                    e),
                this.mdx = n;
        },
        onMdxDeviceAvailable(e) {
            var t = e.device;
            var i2 = t.id;
            if (!this.devices.hasOwnProperty(i2)) {
                t.addEventListener(t.EVENTS.CONNECTION_STATE_CHANGED, this.onMdxDeviceConnectionStateChanged);
                for (var e2 in this.actions) {
                    var i = this.actions[e2];
                    t.addMessageListener(e2, (e) => {
                        this.firstMessageReceived.onNext(),
                            this.firstMessageReceived.onCompleted(),
                            this[i](e);
                    });
                }
                this.devices[i2] = t;
            }
        },
        onMdxDeviceConnectionStateChanged() { },
        onMdxSwitchCredentials(e) {
            var t = () => {
                a.TokenActivationLock.lock(this),
                    util.log.error('MDX UI: switching credentials to a new user'),
                    a.resetCurrentUser(e.cookies).catchException(a.startup.onSetUserError).subscribe(() => {
                        e.resolve(model.CurrentUser && model.CurrentUser.profileGuid);
                    },
                        (t) => {
                            e.reject(t);
                        },
                        () => {
                            this.mdxState.onNext(this.MDX_STATES.SWITCH_CREDENTIALS_COMPLETE),
                                a.TokenActivationLock.unlock(this);
                        });
            };
            this.mdxState.onNext(this.MDX_STATES.SWITCH_CREDENTIALS_START),
                this._beforeSwitchingCredentials && typeof this._beforeSwitchingCredentials === 'function' ? this._beforeSwitchingCredentials(t) : t();
        },
        exit() {
            this.mdx.stop(),
                this._devices = {};
        },
        sendMessage(e, t, i) {
            e && e.sendAppMessage(t, i);
        },
        sendMessageToAll(e, t) {
            this.mdx.broadcastAppMessage(e, t);
        },
        _isVolumeSupported() {
            return !!s.Adapter.media.isVolumeControlSupported;
        },
        _bindEvents() { },
        _getPlayerState: e,
    }),
    util.NrdpError = util.Error.extend({
        init(e) {
            util.extend(this, e),
                this.message && (this.userMessage = e.message,
                    delete this.message);
        },
    }),
    s.deactivateDeviceAccount = function (e) {
        return Rx.Observable.create(function (t) {
            var i = !0;
            try {
                nrdp.registration.deactivate(e, function () {
                    i && (t.onNext(),
                        t.onCompleted());
                });
            } catch (e) {
                t.onError(new util.NrdpError(e));
            }
            return function () {
                i = !1;
            };
        });
    }
    ,
    model.UserCredentials = function (e, t) {
        Object.defineProperties(this, {
            NetflixId: {
                value: e,
            },
            SecureNetflixId: {
                value: t,
            },
            hasBoth: {
                value: !(!e || !t),
            },
        });
    }
    ,
    model.UserCredentials.prototype = Object.create(null, {
        hasUser: {
            get() {
                var e = this.bindingType;
                return e === 'usr' || e === 'dbl';
            },
        },
        isDeviceAndUserBound: {
            get() {
                return this.bindingType === 'dbl';
            },
        },
        clientHash: {
            get() {
                this._initParsed();
                var e = this._clientHash;
                return e || (e = null),
                    e;
            },
        },
        bindingType: {
            get() {
                return this._initParsed(),
                    this._bindingType;
            },
        },
        _parser: {
            value: new util.NameValuePairParser('=', '&'),
        },
        _initParsed: {
            value() {
                var e; var t; var i; let
                    n;
                this._inited || ((e = this.NetflixId) && (e = decodeURIComponent(e),
                    i = (t = this._parser).get(e, 'ch'),
                    !(n = t.get(e, 'bt')) && i && (n = 'usr'),
                    this._clientHash = i,
                    this._bindingType = n),
                    this._inited = !0);
            },
        },
    }),
    model.UserCredentials.fromMap = function (e) {
        var t; let
            i;
        return e && (t = e.NetflixId,
            i = e.SecureNetflixId),
            new model.UserCredentials(t, i);
    }
    ,
    model.UserCredentials.fromCookies = function () {
        var e = util.Cookies;
        var t = config.environment;
        var netflixId = 'ct%3DBQAOAAEBEBk7VwscyFdwi-0AyXVuyGyB8EWx_a9KSq_nsz8J3tgD1isSt2OQJmfcT1ZjqWUXapp48wWZZWU6LdLfLOIH2E821pvRsi9LWcBQjRM7c9z_fEcobSVWir1r98rvsaC8ewY3oKL6CFN9Q-q97euoFaCqVUqFirKFHnOtEOsccFqNnbNfTql98veRm8_xdBW_9UvhldKc9nRqQ1oOUQaR4xmnXx0-bfnn6qRaFqbR1kkVDWWXS0N4guoTZPkVXNUFwPR5w6ea0KpEqgq1sE4Luo72Z8CPTdh9pTQNL2WsfncxESqOKtFCUw2vekzwSapKO3sqlPRxYiFHTAj4DETZfzWPRF16zbKhfPCqWBhRM32Iv3xMe3aD_Np0bK3CDYKrPirxDgXp59BKF3NwJWzDj3b86BHumq63pVOf7I8zwQYWh8vx37jdGnvfdGaldEZQZL8dOqy9qgN40PHlQCGl82PfP_fRoRtvgOfW0GfBWVQLjV-uVml5I-mexAxkqWYB9sGkd-cfD7dr7B3OMk4DJeCM6nYNhch1rd2CyKeKrn62iTjW04JfpwZXq4CikwP1rvuywkPLXOe3upWN1pzn-O0Vg6XnyBzSCKbpOK_eYajpqW-ietzBkIOoW0m9-Xodo-0QiHOD2AD7BG7wemeKFY_TgDcaA1FrwdYZbzW4PCOqqBk.%26bt%3Ddbl%26ch%3DAQEAEAABABTjUHdtHSc4K3Ozc6cJ5FGkfvA-wd15DBE.%26v%3D2%26mac%3DAQEAEAABABSFJ7pCkS7vetGin8L_Zj9dSATCQXAyqfE.';
        var secureNetflixId = 'v%3D2%26mac%3DAQEAEQABABQUCPVy5NuRa0AZsT4IvtURaZlB4V-_gtk.%26dt%3D1679009012247';
        return new model.UserCredentials(netflixId, secureNetflixId);
        // return new model.UserCredentials(e.get(t.cookieNetflixId), e.get(t.cookieNetflixIdSecure));
    }
    ,
    model.UserCredentials.writeCookies = function (e, t) {
        var i; var n = util.Cookies; var r = config.environment; var s = r.cookieNetflixId; var
            a = r.cookieNetflixIdSecure;
        e.indexOf(`${s}=`) !== -1 ? (document.cookie = e,
            document.cookie = t) : e === n.get(s) && t === n.get(a) || (i = new Date(util.Date.now() + 31536e6),
                n.set(s, e, i),
                n.set(a, t, i, !0));
    }
    ,
    model.uiExperience = {
        loaded: new Rx.ReplaySubject(),
        setModel(e) {
            e && e.subtitleSettings ? (this.subtitleSettings = e.subtitleSettings,
                this.loaded.onNext(this),
                this.loaded.onCompleted()) : this.error();
        },
        error(e) {
            this.loaded.onError(new util.Error('uiExperience model empty', config.debugCodes.startup.uiExperience, e));
        },
    },
    a.startup.loadServerRequest = function () {
        return Rx.Observable.createWithDisposable(function (t) {
            var i; var n = {}; let
                r = 'WGL';
            nrdpPartner && nrdpPartner.Fonts && (r = Object.keys(nrdpPartner.Fonts).join(','));
            var o = [['resolveLanguages'], ['geolocation'], ['appConfig'], ['profile'], ['uiExperience']];
            var l = function (e) {
                util.startupProfiler.timeEnd('loadServerRequest');
                var r = i || e;
                var s = 0;
                var a = function (e, t) {
                    t && !t._error ? (s++,
                        e.setModel(t)) : e.error(r);
                };
                a(model.languages, n.resolveLanguages),
                    a(model.geolocation, n.geolocation),
                    a(model.AppConfig, n.appConfig),
                    a(model.CurrentUser, n.profile),
                    a(model.uiExperience, n.uiExperience),
                    s ? (r && util.log.error(new util.Error('application.startup.loadServerRequest error', null, r)),
                        t.onNext(),
                        t.onCompleted()) : t.onError(new util.Error('application.startup.loadServerRequest fatal', config.debugCodes.startup.serverRequest, r));
            };
            return Rx.Observable.zip([s.nrdpInited, s.adapterLoaded], e).then(function () {
                var e = {
                    isStartup: !0,
                    deviceFontGroups: r,
                    deviceLangs: s.Adapter.device.language,
                };
                var t = a.Binding.get('BROWSE_ROOT_PATH_EVALUATOR_FACTORY')(e);
                return t.get.apply(t, o);
            }).subscribe(function (e) {
                n = e.value,
                    i = e.error;
            }, l, l);
        });
    }
    ,
    window.nrdp && (a.resetCurrentUser = function (e) {
        var i;
        model.UserCredentials.writeCookies(e[0], e[1]),
            model.CurrentUser.loaded.dispose(),
            model.uiExperience.loaded.dispose(),
            model.AppConfig.loaded.dispose(),
            model.geolocation.loaded.dispose(),
            model.languages.loaded.dispose(),
            s.accountSelected.dispose(),
            r.ApiSession.authenticated.dispose(),
            model.CurrentUser.loaded = new Rx.ReplaySubject(),
            model.uiExperience.loaded = new Rx.ReplaySubject(),
            model.AppConfig.loaded = new Rx.ReplaySubject(),
            model.geolocation.loaded = new Rx.ReplaySubject(),
            model.languages.loaded = new Rx.ReplaySubject(),
            s.accountSelected = new Rx.ReplaySubject(),
            r.ApiSession.authenticated = new Rx.ReplaySubject(),
            model.postPlayConfigInit && model.postPlayConfigInit(),
            model.subtitleSettingsInit && model.subtitleSettingsInit(),
            r.ApiSession.initSession(r.ApiSession),
            config.webapi.session.data.languages = void 0,
            config.webapi.session.data.country = void 0,
            a.languagesLoaded(),
            a.geolocationLoaded(),
            model.LocalBookmarksCache.reset(),
            i = nrdp.registration.currentDeviceAccount ? s.deactivateDeviceAccount(nrdp.registration.currentDeviceAccount) : Rx.Observable.returnValue(t);
        var n = a.startup;
        return i.then(n.loadServerRequest()).then(n.enforceGeolocationPolicy()).then(model.AppConfig.loaded).then(s.selectAndRegisterAccount())
            .then(Rx.Observable.zip([model.CurrentUser.loaded, model.languages.loaded], () => a.uiIsRTL.setRTL(model.languages.isRTL)))
            .then(r.ApiSession.authenticated)
            .finalValue();
    }
    ),
    a.TokenActivationLock = new util.MultiLock(),
    a.CastPlayer = util.Class.create({
        init() {
            this.state_ = cast.framework.messages.PlayerState.IDLE,
                this.tracksInfo_ = null,
                this.seekingTimeSec = void 0,
                this.onEvent_ = ((e) => { }
                ),
                this.onTimeUpdate_ = (() => {
                    this.seekingTimeSec = void 0,
                        this.onEvent_(new cast.framework.PlayerInterface.Event(cast.framework.PlayerInterface.EventType.TIME_UPDATE)),
                        a.touchControlsSupported && this.finishedPausing && this.pause();
                }
                ),
                this.populateTracks_(),
                this.onEvent_(new cast.framework.PlayerInterface.Event(cast.framework.PlayerInterface.EventType.DURATION_CHANGED)),
                this.finishedPausing = null,
                this.finishedPlaying = null,
                this.finishedLoading = null;
        },
        setEventsListener(e) {
            this.onEvent_ = e || ((e) => { }
            );
        },
        getMediaCategory() {
            return cast.framework.messages.MediaCategory.VIDEO;
        },
        getPlayerVersion() {
            return Number(1);
        },
        getPlayerState() {
            return this.state_;
        },
        getDurationSec() {
            var e = nrdp.media.duration;
            return Math.floor(e / 1e3);
        },
        getCurrentTimeSec() {
            return this.seekingTimeSec ? this.seekingTimeSec : nrdp.media.currentPts / 1e3;
        },
        isLiveStream() {
            return !1;
        },
        getPlaybackRate() {
            return 1;
        },
        getLiveSeekableRange() {
            return null;
        },
        getBufferedRanges() {
            return [];
        },
        getTracksInfo() {
            return this.tracksInfo_;
        },
        preload() { },
        load(e, t) {
            return this.finishedLoading && this.finishedLoading(),
                new Promise((e) => {
                    this.registerEvents_(),
                        this.finishedLoading = e;
                });
        },
        unload(e) {
            return this.removeEvents_(),
                Promise.resolve();
        },
        play() {
            return this.finishedPlaying && this.finishedPlaying(),
                this.state_ === cast.framework.messages.PlayerState.PAUSED ? new Promise((e) => {
                    this.finishedPlaying = e,
                        a.EurekaMdxDevice.resume();
                }) : Promise.resolve();
        },
        pause() {
            return this.finishedPausing && this.finishedPausing(),
                this.state_ === cast.framework.messages.PlayerState.PLAYING ? new Promise((e) => {
                    this.finishedPausing = e,
                        a.EurekaMdxDevice.pause();
                }) : Promise.resolve();
        },
        seek(e) {
            return this.seekingTimeSec = e,
                a.EurekaMdxDevice.seek(e),
                Promise.resolve();
        },
        setPlaybackRate(e) {
            return Promise.reject('setting playback rate is not supported');
        },
        getCurrentBitRate() {
            return 0;
        },
        setActiveAudioTrack(e) {
            var { timedTextTrackList: t = [], audioTrackList: i = [], currentTimedTextTrackIndex: n } = nrdp.media;
            var r = e;
            var s = this.tracksInfo_.tracks.find((e) => e.trackId === r);
            var a = t[n].id;
            var o = s.customData.id;
            return nrdp.media.selectTracks(o, a),
                Promise.resolve();
        },
        setActiveTextTracks(e) {
            var t;
            var { timedTextTrackList: i = [], audioTrackList: n = [], currentAudioTrack: r } = nrdp.media;
            if (e.length === 0) {
                var e2 = i.find((e) => e.isOffTrack());
                e2 && (t = e2.id);
            } else {
                var i2 = e[0];
                t = this.tracksInfo_.tracks.find((e) => e.trackId === i2).customData.id;
            }
            var s = n[r].id;
            return nrdp.media.selectTracks(s, t),
                Promise.resolve();
        },
        updateState_(e) {
            var t;
            switch (e.state) {
                case nrdp.media.OPENING:
                    t = cast.framework.messages.PlayerState.BUFFERING;
                    break;
                case nrdp.media.PLAYING:
                    t = cast.framework.messages.PlayerState.PLAYING;
                    break;
                case nrdp.media.PAUSED:
                    t = cast.framework.messages.PlayerState.PAUSED;
                    break;
                case nrdp.media.CLOSED:
                    t = cast.framework.messages.PlayerState.IDLE,
                        this.onEvent_(new cast.framework.PlayerInterface.Event(cast.framework.PlayerInterface.EventType.CLIP_ENDED));
                    break;
                case nrdp.media.STOPPED:
                default:
                    t = cast.framework.messages.PlayerState.IDLE;
            }
            t !== this.state_ && (this.state_ = t,
                this.onEvent_(new cast.framework.PlayerInterface.Event(cast.framework.PlayerInterface.EventType.STATE_CHANGED)),
                t === cast.framework.messages.PlayerState.PAUSED && this.finishedPausing && (console.error('cad paused: resolving'),
                    this.finishedPausing(),
                    this.finishedPausing = null),
                t === cast.framework.messages.PlayerState.PLAYING && this.finishedPlaying && (this.finishedPlaying(),
                    this.finishedPlaying = null),
                t === cast.framework.messages.PlayerState.PLAYING && this.finishedLoading && (this.finishedLoading(),
                    this.finishedLoading = null));
        },
        registerEvents_() {
            this.boundUpdateState_ = this.updateState_.bind(this),
                this.boundOnTimeUpdate_ = this.onTimeUpdate_.bind(this),
                this.boundOnPlaybackError_ = this.onPlaybackError_.bind(this),
                this.boundOnPlaybackError_ = this.onPlaybackError_.bind(this),
                this.boundOnTimedTextTrackChange_ = this.onTimedTextTrackChange_.bind(this),
                nrdp.media.addEventListener('statechanged', this.boundUpdateState_),
                nrdp.media.addEventListener('updatepts', this.boundOnTimeUpdate_),
                nrdp.media.addEventListener('error', this.boundOnPlaybackError_),
                nrdp.media.addEventListener('nccperror', this.boundOnPlaybackError_),
                nrdp.media.addEventListener('subtitletrackchanged', this.boundOnTimedTextTrackChange_);
        },
        onTimedTextTrackChange_() {
            this.populateTracks_(),
                this.onEvent_(new cast.framework.PlayerInterface.Event(cast.framework.PlayerInterface.EventType.TEXT_TRACKS_CHANGED));
        },
        removeEvents_() {
            nrdp.media.removeEventListener('statechanged', this.boundUpdateState_),
                nrdp.media.removeEventListener('updatepts', this.boundOnTimeUpdate_),
                nrdp.media.removeEventListener('error', this.boundOnPlaybackError_),
                nrdp.media.removeEventListener('nccperror', this.boundOnPlaybackError_),
                nrdp.media.removeEventListener('subtitletrackchanged', this.boundOnTimedTextTrackChange_);
        },
        onPlaybackError_() {
            this.loadResolve_ != null && (this.loadResolve_ = null),
                this.onEvent_(new cast.framework.PlayerInterface.Event(cast.framework.PlayerInterface.EventType.ERROR));
        },
        populateTracks_() {
            this.tracksInfo_ = new cast.framework.messages.TracksInfo(),
                this.tracksInfo_.tracks = [];
            var { timedTextTrackList: e = [], audioTrackList: t = [], currentTimedTextTrackIndex: i, currentAudioTrack: n } = nrdp.media;
            var r; var s; var a; let
                o = 0;
            e.forEach((e, t) => {
                if (!e.isOffTrack()) {
                    var n = new cast.framework.messages.Track(o, cast.framework.messages.TrackType.TEXT);
                    o += 1,
                        n.language = e.language,
                        n.isInband = !0,
                        n.customData = {
                            id: e.id,
                        },
                        i === t && (r = n.trackId,
                            s = e),
                        this.tracksInfo_.tracks.push(n);
                }
            });
            var l = t[n];
            a = l.id,
                t.forEach((e) => {
                    if (e.channels === l.channels) {
                        var t = new cast.framework.messages.Track(o, cast.framework.messages.TrackType.AUDIO);
                        o += 1,
                            t.language = e.language,
                            t.isInband = !0,
                            t.customData = {
                                id: e.id,
                            },
                            this.tracksInfo_.tracks.push(t);
                    }
                }),
                !s || s.isOffTrack() ? this.tracksInfo_.activeTrackIds = [a] : this.tracksInfo_.activeTrackIds = [r, a];
        },
    }),
    a.MdxDevice = a.AMdxDevice.extend({
        _PROGRESS_MESSAGE_THRESHOLD: 1e3,
        AUTO_ADVANCE_MAX: 3,
        actions: {
            PLAYER_PLAY: '_playerPlay',
            PLAYER_PAUSE: '_playerPause',
            PLAYER_RESUME: '_playerResume',
            PLAYER_STOP: '_playerStop',
            PLAYER_SKIP: '_playerSkip',
            PLAYER_SKIP_INTRO: '_playerSkipIntro',
            PLAYER_SET_CURRENT_TIME: '_playerSetCurrentTime',
            PLAYER_SET_AUTO_ADVANCE: '_playerSetAutoAdvance',
            PLAYER_GET_CURRENT_STATE: '_playerGetCurrentState',
            PLAYER_GET_CAPABILITIES: '_playerGetCapabilities',
            DIALOG_RESPONSE: '_dialogResponse',
            SET_AUDIO_SUBTITLES: '_setAudioSubtitles',
            GET_AUDIO_SUBTITLES: '_respondWithAudioSubtitles',
            PLAYER_SET_VOLUME: '_playerSetVolume',
            PIN_VERIFICATION_CANCEL: '_onPinVerificationCancel',
            PIN_VERIFICATION_RESPONSE: '_onPinVerificationResponse',
            POSTPLAY_STOP: '_postPlayStop',
        },
        POST_PLAY_STATES: util.makeEnum('INACTIVE', 'POST_PLAY_COUNTDOWN', 'POST_PLAY_PROMPT'),
        _playerNotificationTypes: util.makeEnum('END_PLAYBACK', 'LOADEDMETADATA', 'PAUSE', 'PLAY', 'PLAYING', 'PROGRESS', 'STALLED'),
        mdxMessages: null,
        didAuthUsingSSO: !1,
        set _playerCard(e) {
            this.__playerCard = e;
        },
        get _playerCard() {
            return this.__playerCard || (this._playerCard = a.Binding.get('PLAYER_CARD'));
        },
        get transitioningTitles() {
            return this._transitioningTitles;
        },
        onMdxSwitchCredentials: function e(t) {
            e.base.call(this, t);
        },
        init: function e() {
            e.base.call(this),
                this.mdxMessages = new Rx.BehaviorSubject(),
                this._initCastPlayerManager(),
                this._transitioningTitles = !1;
        },
        _initCastPlayerManager() {
            var e = cast.framework.CastReceiverContext.getInstance().getPlayerManager();
            var t = cast.framework.messages.Command;
            e.setSupportedMediaCommands(t.PAUSE | t.SEEK | t.STREAM_MUTE | t.STREAM_VOLUME | t.QUEUE_NEXT | t.QUEUE_PREV | t.EDIT_TRACKS),
                e.addEventListener(cast.framework.events.EventType.REQUEST_QUEUE_UPDATE, this._onQueueUpdate.bind(this)),
                e.setMessageInterceptor(cast.framework.messages.MessageType.LOAD_BY_ENTITY, this._onLoadByEntity.bind(this)),
                e.setMessageInterceptor(cast.framework.messages.MessageType.SET_CREDENTIALS, this._onSetCredentials.bind(this)),
                e.setMessageInterceptor(cast.framework.messages.MessageType.DISPLAY_STATUS, this._onDisplayStatus.bind(this)),
                e.setMediaElement(document.createElement('media')),
                e.setPlayerFactory(() => Promise.resolve(new a.CastPlayer())),
                this.logCastInteraction = nrdp.media.logCastInteraction || function () { }
                ,
                nrdp.media.addEventListener('opencomplete', () => {
                    var t = new cast.framework.messages.MediaInformation();
                    t.contentId = '1',
                        t.contentType = 'application/x-mpegurl',
                        t.contentUrl = 'http://',
                        t.mediaCategory = cast.framework.messages.MediaCategory.VIDEO;
                    var i = new cast.framework.messages.MovieMediaMetadata();
                    i.title = 'Netflix';
                    var n = new cast.framework.messages.Image('https://cast.netflix.com/crkey/images/logo-300-300.png');
                    n.width = 300,
                        n.height = 300,
                        i.images = [n],
                        t.metadata = i,
                        t.streamType = cast.framework.messages.StreamType.BUFFERED;
                    var r = new cast.framework.messages.LoadRequestData();
                    r.media = t,
                        e.load(r);
                });
        },
        _createTextTrackFromMediaTrack(e) {
            return {
                id: e.id,
                kind: 'subtitles',
                label: '',
                language: e.language.split('-')[0],
                readyState: 2,
                mode: 0,
            };
        },
        _onLoadByEntity(e) {
            if (!e || !e.entity) {
                var e2 = new cast.framework.messages.ErrorData(cast.framework.messages.ErrorType.INVALID_REQUEST);
                return e2.reason = cast.framework.messages.ErrorReason.INVALID_PARAMS,
                    e2;
            }
            var t = {
                movieUri: e.entity,
                playData: {
                    mdxesn: 'GOOGLEASST',
                    origin: 'GoogleAssistant',
                    isMdxPlay: !1,
                },
                vuiCommand: {
                    rawQuery: typeof e.source === 'string' ? e.source.trim() : '',
                },
            };
            return this._playerCard.playMovie(t),
                this._transitioningTitles = !0,
                new Promise((e) => {
                    this.loadByEntityResolve = e;
                });
        },
        _onDisplayStatus(e) {
            return console.log('onDisplayStatus : ', e),
                e;
        },
        _onSetCredentials(e) {
            return this._postPlayStop(),
                this._resetPostPlayState(),
                nrdp.registration.validateSSOTokens ? new Promise((t, i) => {
                    nrdp.registration.ssoActivate(e.credentials, e.profileId, (n) => {
                        if (!n.success || !nrdp.registration.activationTokens) {
                            util.DebugInfo.removeCodes(),
                                util.DebugInfo.addCode(config.debugCodes.registration.activate),
                                n.error && n.error.displaycode && util.DebugInfo.addCode(n.error.displaycode);
                            var e = {
                                priority: a.MessagePriority.HIGH,
                                onClobbered: () => {
                                    util.DebugInfo.removeCodes();
                                },
                            };
                            controller.ErrorCard.enter(config.text.error.googleAssistantAuthenticationError, e);
                            var t = new cast.framework.messages.ErrorData(cast.framework.messages.ErrorType.ERROR);
                            return t.detailedErrorCode = cast.framework.events.DetailedErrorCode.APP,
                                t.reason = cast.framework.messages.ErrorReason.AUTHENTICATION_EXPIRED,
                                void i(t);
                        }
                        this.didAuthUsingSSO = !0;
                        var r = nrdp.registration.activationTokens;
                        this.onMdxSwitchCredentials({
                            cookies: [r.NetflixId, r.SecureNetflixId],
                            resolve: () => {
                                this.SSOToken = e.credentials,
                                    t(e),
                                    setTimeout(() => {
                                        this.firstMessageReceived.onNext(),
                                            this.firstMessageReceived.onCompleted();
                                    },
                                        100);
                            },
                            reject: i,
                        });
                    });
                }) : e;
        },
        _onQueueUpdate(e) {
            var t = e.requestData;
            var i = !1;
            var n = cast.framework.CastReceiverContext.getInstance().getPlayerManager();
            t && typeof t.jump === 'number' && (t.jump > 0 ? (this.logCastInteraction('NEXT_EP'),
                i = this._playerCard.playNextEpisode()) : t.jump < 0 && (this.logCastInteraction('PREV_EP'),
                    i = this._playerCard.playPreviousEpisode())),
                i ? this._transitioningTitles = !0 : t && n.sendError(e.senderId, t.requestId, cast.framework.messages.ErrorType.INVALID_REQUEST, cast.framework.messages.ErrorReason.END_OF_QUEUE);
        },
        _mapPlayerErrorToGoogleHomeError(e) {
            var t = new cast.framework.messages.ErrorData(cast.framework.messages.ErrorType.LOAD_FAILED);
            if (t.detailedErrorCode = cast.framework.events.DetailedErrorCode.LOAD_FAILED,
                e && e.display && e.display.code) {
                var i = e.display.code.split('-');
                switch (i.length && i[0] && i[1] && i[2]) {
                    case '5005':
                        t.reason = cast.framework.messages.ErrorReason.PREMIUM_ACCOUNT_REQUIRED;
                        break;
                    case '5006':
                        t.reason = cast.framework.messages.ErrorReason.CONCURRENT_STREAM_LIMIT;
                        break;
                    case '5033':
                    case 'P18':
                        t.reason = cast.framework.messages.ErrorReason.PARENTAL_CONTROL_RESTRICTED;
                        break;
                    case '5003':
                    case '5059':
                    case '5070':
                    default:
                        t.reason = cast.framework.messages.ErrorReason.PREMIUM_ACCOUNT_REQUIRED;
                }
            }
            return t;
        },
        _playerPlay(e) {
            var t = 'standard';
            var i = s.Adapter.getMonotonicTime();
            util.log.debug(`Device ${e.device.id} issued a PLAYER_PLAY request. uiPlayStartTime:${i}`),
                this.POST_PLAY_STATE !== this.POST_PLAY_STATES.POST_PLAY_COUNTDOWN && this.POST_PLAY_STATE !== this.POST_PLAY_STATES.POST_PLAY_PROMPT || (t = 'postplay');
            var n; var r = e && e.payload; var o = r && r.esn; var l = r && r.catalogId; var u = r && r.episodeId; var c = r && r.qcPackageId; var d = r && r.enableDebugOverlay; var h = r && r.qcVideoProfiles; var p = r && (!0 === r.enablePostPlay || r.enablePostPlay === 'true'); var f = r && (!0 === r.enableSkipIntro || r.enableSkipIntro === 'true'); var _ = r && r.controllerName; var v = r && r.groupNames; var m = r && r.uiVer; var b = Boolean(r && r.isPinVerified); var g = r && r.prereleasePin; var y = this._playerCard; var E = y.player; var T = a.Screensaver; var C = l && y.isCurrentlyPlaying(l, u); var S = E && (E.isPlaying || E.isPaused); var P = 'mdx'; let
                A = r.playbackType;
            if (b && a.pinSession.activate(),
                void 0 !== d && !!d != !!a.uiInfoOverlay.active.value && a.uiInfoOverlay.toggle(),
                A || (A = s.Adapter.convertOriginatorToPlaybackType(r.originator)),
                !r || !0 !== r.isDial && r.isDial !== 'true' || (P += ',dial'),
                !r || !0 !== r.isThirdParty && r.isThirdParty !== 'true' || (P += ',3p'),
                l) {
                if (C && E.isLoading) return;
                if (S) {
                    if (C) return void this._playerResume(e);
                } else this._cleanupState();
                T && T.disable(),
                    n = e.device.id,
                    this._esnFromLastPlay = o;
                var s = {
                    movieUri: l,
                    qcPackageId: c,
                    qcVideoProfiles: h,
                    episodeId: u,
                    forceBookmark: r.startTime,
                    forceTrackId: r.trackId,
                    playbackType: A,
                    prereleasePin: g,
                    pinCapableClient: b,
                    playData: {
                        mdxesn: o,
                        origin: P,
                        isMdxPlay: !0,
                        enablePostPlay: p,
                        isCurrentlyPlaying: S,
                        controllerId: n,
                        controllerGroupNames: v,
                        controllerUiVer: m,
                    },
                    uiPlayStartTime: i,
                    uiLabel: t,
                    enableSkipIntro: f,
                    controllerName: _,
                };
                c && (s.prePlaybackSettings = {
                    hidePreplaybackText: !0,
                }),
                    this._playerMovieUri = null,
                    this._playerEpisode = null,
                    this._logVolumeChange = !0,
                    this._resetPostPlayState(),
                    y.playMovie(s);
            }
        },
        _cleanupState() {
            state.activeState instanceof controller.DialogCard && state.raiseEvent('state.exit');
        },
        pause() {
            state.raiseEvent('player.pauseMovie', this._playerCard);
        },
        _playerPause(e) {
            this._runIfPlayerInSync(e, () => {
                state.raiseEvent('player.pauseMovie', this._playerCard);
            });
        },
        resume() {
            var e = this._playerCard && this._playerCard.player;
            e && e.isPaused && state.raiseEvent('key.play', this._playerCard);
        },
        _playerResume(e) {
            var t = this._playerCard && this._playerCard.player;
            (t && t.isPaused || this._transitioningTitles) && this._runIfPlayerInSync(e, () => {
                state.raiseEvent('key.play', this._playerCard);
            });
        },
        _playerStop(e) {
            this._runIfPlayerInSync(e, () => {
                state.raiseEvent('key.stop', {
                    disablePostPlay: !0,
                });
            });
        },
        _playerSkip(e) {
            var t = e && e.payload;
            var i = parseInt(t.seconds, 10);
            i && this._runIfPlayerInSync(e, () => {
                var e = this._playerCard;
                var t = e && e.player;
                e.setCurrentTimeAndPlay(t.currentTime + i),
                    t.isPlaying || state.raiseEvent('key.play', e);
            });
        },
        _playerSkipIntro(e) {
            this._runIfPlayerInSync(e, () => {
                this._playerCard.skipIntro();
            });
        },
        seek(e) {
            this._playerCard.setCurrentTimeAndPlay(e);
        },
        _playerSetCurrentTime(e) {
            this._runIfPlayerInSync(e, () => {
                var t = e && e.payload;
                var i = parseInt(t.time, 10);
                this._playerCard.setCurrentTimeAndPlay(i);
            });
        },
        _playerSetAutoAdvance(e) {
            var t = this._playerCard;
            var i = t && t.player;
            var n = () => {
                var r = e && e.payload;
                r.autoAdvanceMaxIncrement > 0 ? state.raiseEvent('key.fastfwd', t) : r.autoAdvanceMaxIncrement < 0 && state.raiseEvent('key.rewind', t),
                    i.paused.unsubscribe(this, n);
            };
            this._runIfPlayerInSync(e, () => {
                i.isPaused ? n() : i.paused.subscribe(this, n);
            });
        },
        _playerSetVolume(e) {
            var t = e && e.payload;
            var i = t && t.volume;
            this._volumeSupport && void 0 !== i && (i = util.math.clamp(parseInt(i, 10), 0, 100),
                s.Adapter.device.volume = i,
                this._logVolumeChange && (util.log.error('MDX UI: setting volume for this playback'),
                    this._logVolumeChange = !1));
        },
        _postPlayStop(e) {
            this.isInPostPlay() && this._runIfPlayerInSync(e, () => {
                state.raiseEvent('player.expand');
            });
        },
        _checkVolumeControl() {
            var e = this._isVolumeSupported();
            this._volumeSupport != e && (this._volumeSupport = e,
                this._sendPlayerCapabilitiesToAll());
        },
        _playerGetCurrentState(e) {
            this._sendPlayerCurrentState(e),
                this.mdxMessages.onNext('PLAYER_GET_CURRENT_STATE');
        },
        _playerGetCapabilities(e) {
            this._sendPlayerCapabilities(e);
        },
        _sendPlayerCurrentState(e) {
            return this.sendMessage(e.device, 'PLAYER_CURRENT_STATE', this.getCurrentPlayerState());
        },
        _sendPlayerCapabilities(e) {
            return this.sendMessage(e.device, 'PLAYER_CAPABILITIES', this._getPlayerCapabilities());
        },
        _sendPlayerCapabilitiesToAll() {
            return this.sendMessageToAll('PLAYER_CAPABILITIES', this._getPlayerCapabilities());
        },
        _getPlayerCapabilities() {
            var e = void 0 !== s.Adapter.device.capability.support5dot1Audio ? s.Adapter.device.capability.support5dot1Audio : model.AudioProfiles.isChannelCountSupported(6);
            return {
                isHdSupported: s.Adapter.supportsHD,
                is5dot1Supported: e,
                is3dSupported: s.Adapter.is3dEnabled,
                volumeControl: this._volumeSupport,
                autoAdvanceMax: this.AUTO_ADVANCE_MAX,
                isUltraHdSupported: s.Adapter.isDeviceUltraHDCapable,
                isDVHDRSupported: s.Adapter.isDeviceDVHDRCapable,
                isUHDAHDRSupported: s.Adapter.isDeviceUHDAHDRCapable,
            };
        },
        _sendPlayerStateChange(e) {
            return this.sendMessageToAll('PLAYER_STATE_CHANGED', util.extend(this.getCurrentPlayerState(e), e));
        },
        _bindEvents: function t() {
            t.base.call(this);
            var i = this._playerCard && this._playerCard.player;
            i.attemptingStreamDownload.subscribe(this, () => {
                this.POST_PLAY_STATE = this.POST_PLAY_STATES.INACTIVE,
                    this._onStateChange(this._playerNotificationTypes.PLAY);
            }),
                i.progressChanged.subscribe(this, this._handleProgressStateChanged),
                i.playbackStarted.subscribe(this, () => {
                    this._checkVolumeControl(),
                        this._onStateChange(this._playerNotificationTypes.PLAYING);
                }),
                i.paused.subscribe(this, () => {
                    this._onStateChange(this._playerNotificationTypes.PAUSE);
                }),
                i.stalled.subscribe(this, () => {
                    this._onStateChange(this._playerNotificationTypes.STALLED);
                }),
                this._playerCard.playbackState.subscribe((e) => {
                    e && (e.state === 'START_PLAYBACK' ? (this._playerMovieUri = this._playerCard.movieUri,
                        this._handleAudioSubtitlesChange(),
                        this._playerCard.episode && (this._playerEpisode = this._playerCard.episode)) : e.state !== 'END_PLAYBACK' || !this.isInPostPlay() && e.shouldShowPostPlay || (this._endPlaybackEvent = e,
                            this.currentRequestData = null,
                            this._onEndPlayback(e)));
                }),
                this._playerCard.audioSubtitlesMetadata.values.subscribe(this._onAudioSubtitlesMetadataChanged.bind(this), e, e),
                this._playerCard.skipIntroUpdated && this._playerCard.skipIntroUpdated.subscribe(this._onSkipIntroWindowChanged.bind(this), e, e);
            var n = controller.DialogCard.prototype.notificationTypes;
            util.MessageBus.subscribe(n.SHOW, this, this._handleShowDialog),
                util.MessageBus.subscribe(n.HIDE, this, this._handleHideDialog),
                util.MessageBus.subscribe(util.MessageBus.EVENTS.Player.POST_PLAY_COUNTDOWN, this, this._handlePostPlayCountdown),
                util.MessageBus.subscribe(util.MessageBus.EVENTS.Player.POST_PLAY_PROMPT, this, this._handlePostPlayPrompt),
                util.MessageBus.subscribe(util.MessageBus.EVENTS.Player.POST_PLAY_EXITED, this, this._resetPostPlayState),
                util.MessageBus.subscribe(util.MessageBus.EVENTS.Player.PLAYER_CARD_EXITED, this, this._resetPostPlayState),
                util.MessageBus.subscribe(util.MessageBus.EVENTS.USER_ERROR_MESSAGE, this, this._handleUserErrorMessage),
                s.Adapter.device.addEventListener('volumeChanged', this._onVolumeChanged.bind(this));
        },
        _onVolumeChanged(e) {
            this._sendPlayerStateChange();
        },
        _onSkipIntroWindowChanged() {
            this._sendPlayerStateChange();
        },
        _onEndPlayback(e) {
            var t = this._playerState = this._playerNotificationTypes.END_PLAYBACK;
            e.event.restartingPlayback || this._onStateChange(t, e.event);
        },
        _handlePostPlayCountdown(e) {
            this._transitioningTitles = !0,
                this.POST_PLAY_STATE = this.POST_PLAY_STATES.POST_PLAY_COUNTDOWN,
                this._postPlayNextEpisode = this._createPostPlayNextEpisode(e),
                this._sendPlayerStateChange();
        },
        _handlePostPlayPrompt(e) {
            this._transitioningTitles = !0,
                this.POST_PLAY_STATE = this.POST_PLAY_STATES.POST_PLAY_PROMPT,
                this._postPlayNextEpisode = this._createPostPlayNextEpisode(e),
                this._sendPlayerStateChange();
        },
        _createPostPlayNextEpisode(e) {
            return {
                id: util.getIdFromUri(e.id),
                type: util.getVideoType(e),
                videoId: util.getIdFromUri(e.id),
                ancestorVideoId: util.getIdFromUri(e.title_series.id),
                videoType: util.getVideoType(e),
            };
        },
        _resetPostPlayState() {
            this.POST_PLAY_STATE = this.POST_PLAY_STATES.INACTIVE,
                this._postPlayNextEpisode = void 0,
                this._sendPlayerStateChange();
        },
        _handleUserErrorMessage(e) {
            var t = Boolean(e && e.source === 'player');
            if (this.loadByEntityResolve) {
                var i = this._mapPlayerErrorToGoogleHomeError(e.playerError);
                util.log.debug('MdxDevice:_handleUserErrorMessage Google Assistant Error was :', i),
                    this.loadByEntityResolve(i),
                    this.loadByEntityResolve = null;
            }
            t && (this._playerState = this._playerNotificationTypes.END_PLAYBACK);
        },
        _handleShowDialog(e) {
            var t = e && e.model;
            var i = {
                uid: e && e.id,
                title: e && e.title,
                message: t && t.message,
                options: [],
            };
            var n = t && t.buttons && t.buttons.items;
            var r = n && n.length;
            if (!t || !t.skipMdx) {
                for (var e2 = 0; e2 < r; e2++) {
                    i.options[e2] = {
                        name: n[e2].label,
                        data: e2,
                    };
                }
                this._dialogModel = i,
                    this.sendMessageToAll('DIALOG_SHOW', i);
            }
        },
        _handleHideDialog(e) {
            var t = {
                uid: e.id,
            };
            this._dialogModel = null,
                this.sendMessageToAll('DIALOG_CANCEL', t);
        },
        _dialogResponse(e) {
            var t = e && e.payload;
            var i = t && t.data;
            void 0 !== i && i !== null && state.raiseEvent('dialog.select', i);
        },
        _setAudioSubtitles(e) {
            var t = this._playerCard;
            var i = t && t.player;
            i.currentAudioTrack ? this._runIfPlayerInSync(e, () => {
                var t = e && e.payload;
                var n = t && t.audio_track_id;
                var r = t && t.timed_text_track_id;
                n && (r && (this._doNotUpdateAudioSubtitles = !0),
                    i.setAudioSubtitleSettings(n, void 0).then(() => this._respondWithAudioSubtitles(e)),
                    r && (this._doNotUpdateAudioSubtitles = !1)),
                    r && i.setAudioSubtitleSettings(void 0, r).then(() => this._respondWithAudioSubtitles(e));
            }) : this.sendMessage(e.device, 'MESSAGE_IGNORED', {
                transactionId: e.xid,
                errorCode: this.errors.AUDIO_SUBTITLES_NOT_LOADED,
            }),
                this.mediaManager.broadcastStatus(!1);
        },
        _respondWithAudioSubtitles(e) {
            this.sendMessage(e.device, 'AUDIO_SUBTITLES_SETTINGS', this._audioSubtitlesState()),
                this._sendPlayerCapabilitiesToAll();
        },
        _handleAudioSubtitlesChange() {
            this._doNotUpdateAudioSubtitles || (this.sendMessageToAll('AUDIO_SUBTITLES_CHANGED', this._audioSubtitlesState()),
                this._checkVolumeControl());
        },
        _audioSubtitlesState() {
            var e = this._playerCard.player;
            var t = {};
            return e.currentAudioTrack && e.audioTrackList && e.timedTextTrackList ? (t.audio_tracks = e.audioTrackList.map((t) => {
                var i; let
                    n = t.languageDescription;
                return {
                    label: n = (i = new model.AudioTrackDescriptor(t.id, t.languageDescription, t.format, t.channelsCount, t.language, t.channels, t.rawTrackType, t.isNative, t.disallowedSubtitleTracks)).label,
                    id: t.id,
                    selected: t.id == e.currentAudioTrack.id,
                };
            }),
                t.timed_text_track = e.timedTextTrackList.map((t) => {
                    var i; let
                        n = t.languageDescription;
                    return {
                        label: n = (i = new model.TimedTextTrackDescriptor(t.id, t.languageDescription, t.language, t.trackType, !1)).label,
                        id: t.id,
                        selected: e.currentTimedTextTrack && t.id == e.currentTimedTextTrack.id,
                    };
                }),
                t) : {
                audio_tracks: [],
                timed_text_track: [],
            };
        },
        _onAudioSubtitlesMetadataChanged(e) {
            e !== this._audioSubtitlesMetadata && (this._unsubscribeFromAudioTTUpdates(),
                this._audioSubtitlesMetadata = e,
                this._subscribeToAudioTTUpdates());
        },
        _subscribeToAudioTTUpdates() {
            this._doSubscription(!1);
        },
        _unsubscribeFromAudioTTUpdates() {
            this._doSubscription(!0);
        },
        _doSubscription(e) {
            if (!this._audioSubtitlesMetadata) return;
            var t = model.ContentAudioSubtitlesMetadata.prototype;
            var i = t.EVENTS.AUDIO_TRACK_CHANGED;
            var n = t.EVENTS.SUBTITLE_TRACK_CHANGED;
            var r = this._audioSubtitlesMetadata;
            var s = e ? 'unsubscribe' : 'subscribe';
            r[s](i, this, this._handleAudioSubtitlesChange),
                r[s](n, this, this._handleAudioSubtitlesChange);
        },
        _runIfPlayerInSync(e, t) {
            var i = e && e.xid;
            this._playerCard && this._playerCard.player && (this.isInPostPlay() || !i || i === s.Adapter.media.xid) ? t.call(this) : (this.sendMessage(e.device, 'MESSAGE_IGNORED', {
                transactionId: i,
                errorCode: this.errors.OUT_OF_SYNC,
            }),
                this._sendPlayerCurrentState(e),
                util.log.error({
                    name: 'MdxDevice',
                    desc: 'Target and player are not in sync; ignoring command',
                    code: 'OUT_OF_SYNC',
                }));
        },
        isInPostPlay() {
            return this.POST_PLAY_STATE && this.POST_PLAY_STATE !== this.POST_PLAY_STATES.INACTIVE;
        },
        _onStateChange(e, t) {
            var i = t;
            this._playerState = e,
                e === this._playerNotificationTypes.PLAYING ? this.loadByEntityResolve && (this.loadByEntityResolve(),
                    this.loadByEntityResolve = null) : e === this._playerNotificationTypes.END_PLAYBACK ? !t && this._endPlaybackEvent && (i = this._endPlaybackEvent) : this._endPlaybackEvent = null,
                this._sendPlayerStateChange(i);
        },
        _getPlayerState() {
            var e = this.getCurrentPlayerState();
            return {
                currentState: e.currentState,
                time: e.time,
                duration: e.duration,
            };
        },
        getCurrentPlayerState(e) {
            var t; var i; var n = this._playerState; var r = this._playerCard; var a = r && r.player; var o = r && r.episode; var
                l = s.Adapter.media;
            n === this._playerNotificationTypes.END_PLAYBACK && !e && this._endPlaybackEvent && (e = this._endPlaybackEvent),
                e && e.currentTime ? t = e.currentTime : a && (t = a.currentTime),
                e && e.movieId ? i = e.movieId : r && r.movieUri ? i = r.movieUri : this._playerMovieUri && (i = this._playerMovieUri);
            var u = {
                currentState: n,
                time: t,
                duration: a && a.duration,
                catalogId: i,
                autoAdvanceIncrement: 0,
                xid: l && l.xid,
                isInSkipIntroWindow: r && r.shouldShowSkipIntroButtonOnController,
                skipIntroText: r && r.skipIntroText,
                skipIntroType: r && r.skipIntroType,
            };
            return o && model.MovieUtils.isEpisodic(o) ? u.episodeId = o.id : this._playerEpisode && model.MovieUtils.isEpisodic(this._playerEpisode) && (u.episodeId = this._playerEpisode.id),
                this._volumeSupport && (u.volume = s.Adapter.device.volume),
                this._esnFromLastPlay && (u.esn = this._esnFromLastPlay),
                this.isInPostPlay() && (u.postplayState = {
                    state: this.POST_PLAY_STATE,
                    title: this._postPlayNextEpisode,
                }),
                u;
        },
        _handleProgressStateChanged(e) {
            var t = util.Date.now();
            var i = e.loaded;
            (i < 5 || i > 95) && (!this._lastProgressMessageTime || t - this._lastProgressMessageTime >= this._PROGRESS_MESSAGE_THRESHOLD) && (this._onStateChange(this._playerNotificationTypes.PROGRESS, {
                loaded: i,
                total: e.total,
            }),
                this._transitioningTitles = !1,
                this._lastProgressMessageTime = t);
        },
        _beforeSwitchingCredentials(e) {
            var t = this._playerCard.player;
            var i = t && (t.isPlaying || t.isPaused);
            var n = this._cleanupState;
            var r = function () {
                n(),
                    e();
            };
            i || this.isInPostPlay() ? state.raiseEvent('player.stop', {
                disablePostPlay: !0,
                afterPlayerCardExitCallback: r,
            }) : r();
        },
        _onPinVerificationResponse() {
            a.pinSession.activate();
        },
        _onPinVerificationCancel() {
            util.MessageBus.notify(util.MessageBus.EVENTS.PIN_VERIFICATION_CANCEL);
        },
    }),
    config.errorCard = {
        smokedGlass: !0,
        get confirm() {
            return config.text.responses.confirm;
        },
        defaultPriority: a.MessagePriority.LOW,
    },
    controller.ErrorCard = {
        enter(t, i) {
            var n; var r; var s; var o; var l; var u; var
                c = config.errorCard;
            i && (n = i.disableButtons,
                r = i.buttons,
                s = i.confirmHandler,
                o = i.priority,
                l = i.onClobbered || e,
                u = !!i.skipMdx),
                n ? r = null : void 0 === r && (r = new model.MenuModel('ErrorCard menu')).add(new model.MenuItemModel(c.confirm, {
                    confirm: s,
                })),
                util.DebugInfo.addMessage(t),
                a.AppDialog.showDialog({
                    message: t,
                    code: util.DebugInfo.codes.join(', '),
                    buttons: r,
                    smokedGlass: c.smokedGlass,
                    onClobbered: l,
                    skipMdx: u,
                }, o || c.defaultPriority);
        },
    },
    util.MessageBus.EVENTS.DEVICE_REACTIVATED = 'DEVICE_REACTIVATED',
    a.EurekaMdxDevice = a.MdxDevice.extend({
        AUTO_ADVANCE_MAX: 0,
        _bindEvents: function e() {
            e.base.call(this),
                util.MessageBus.subscribe(util.MessageBus.EVENTS.DEVICE_REACTIVATED, this, this._handleReactivate);
        },
        _handleReactivate(e) {
            e && e.clearSessions && this.mdx.configure({
                profileId: null,
            });
        },
        _cleanupState() {
            state.activeState instanceof controller.MdxPrompt || state.raiseEvent('root.collapse');
        },
    }),
    a.touchControlsSupported = !1,
    a.enableTouchControlsIfSupported = function () {
        var e = cast.framework.CastReceiverContext.getInstance();
        function t() {
            try {
                e.getDeviceCapabilities()[cast.framework.system.DeviceCapabilities.TOUCH_INPUT_SUPPORTED] && (document.body.classList.add('touch-enabled'),
                    a.touchControlsSupported = !0);
            } catch (e) {
                util.log.error('error getting touch capability', e);
            }
            e.removeEventListener(cast.framework.system.EventType.READY, t);
        }
        e.isSystemReady ? t() : e.addEventListener(cast.framework.system.EventType.READY, t);
    }
    ,
    a.startup.logCachedNrdpErrors = function () {
        var e = window.localStorage;
        util.storage.getJSON(e, 'nrdpRequestErrors', []).forEach(function (e) {
            util.log.error(e);
        }),
            e.removeItem('nrdpRequestErrors');
    }
    ,
    a.startup.startEureka = function () {
        return Rx.Observable.create(function (i) {
            var n = config.isDebugBuild;
            return a.EurekaMdxDevice = new a.EurekaMdxDevice(),
                a.enableTouchControlsIfSupported(),
                util.startupProfiler.time('waitingForMdxMessage'),
                a.EurekaMdxDevice.firstMessageReceived.subscribe(() => {
                    util.startupProfiler.timeEnd('waitingForMdxMessage');
                    var e = new controller.RotatingBillboardPrompt(a.EurekaMdxDevice);
                    util.css.swapAll(document.body, ['app-startup-finished'], ['app-startup']),
                        state.raiseEvent('state.enter.root', e),
                        e.loaded.subscribe(() => {
                            i.onNext(t),
                                i.onCompleted();
                        });
                }),
                a.uiMetadataOverlayVisible = n,
                a.startup.logCachedNrdpErrors(),
                a.startup.svgs.append(),
                e;
        });
    }
    ,
    state.StateStack = state.ACompoundState.extend({
        init: function e(t, i) {
            this.id = t,
                this._stack = [],
                i && (this.actions = util.extend({}, this.actions, i)),
                e.base.call(this);
        },
        disallowEmpty: !1,
        enter(e, t) {
            var i; var n = this._getCurrentState(); var r = this._enteringNextState; var s = !r; var a = r; var
                o = this._stack;
            return delete this._enteringNextState,
                this._canEnterState(e, n) ? (r ? o.pop() : o.push(e),
                    this._updateActiveState(e, s, n, a, t),
                    i = !0) : i = !1,
                i;
        },
        exit(e) {
            var t; let
                i;
            return this._canExitState() && (this._enteringNextState = !0,
                t = this._getCurrentState(),
                i = this._getNextState(),
                this.enter(i, e),
                delete t.parentState),
                t;
        },
        _collapse(e) {
            for (var t; t = this._getCurrentState();) {
                if (t instanceof state.StateStack && !t._collapse(e)) return !1;
                if (!this.exit(e)) break;
            }
            return !0;
        },
        _canEnterState(e, t) {
            return e.canEnter() && e !== t;
        },
        _canExitState() {
            return !this.disallowEmpty || this._stack.length > 1;
        },
        actions: {
            'state.enter': function (e, t) {
                return this.enter(e, t);
            },
            'state.exit': function (e) {
                return this.exit(e);
            },
        },
        get stack() {
            return this._stack;
        },
        handleEvent(e, t) {
            var i; var n; var r; var s; let
                a;
            if (e.tryAll) {
                for (i = e.cancelBubble,
                    r = (n = this._stack).length,
                    e.cancelBubble = !0; r--;) if ((s = n[r]) !== e.activeState && (a = s.handleEvent(e, t))) return a;
                i || (e.cancelBubble = !1);
            }
            return this._simpleHandleEvent(e, t);
        },
        toDescription() {
            var e; var t; var i; var n = this._stack; var
                r = [];
            for (t = 0,
                i = n.length; t < i; t++) {
                e = n[t],
                    r.push(e instanceof state.ICompoundState ? e.toDescription() : e.toString());
            }
            return `${this.id}: [${r.join(', ')}]`;
        },
        _getNextState() {
            var e = this._stack;
            return e[e.length - 2] || this;
        },
        _getCurrentState() {
            var e = this._stack;
            return e[e.length - 1];
        },
    }),
    state.RootState = state.StateStack.extend({
        init: function e(t, i) {
            if (state.hasRoot) { throw 'Only one instance of state.Root is allowed'; }
            this.isRoot = !0,
                state.hasRoot = !0,
                e.base.call(this, t, i),
                state.raiseEvent.subscribe(this);
        },
    }),
    view.AppRootView = view.AView.extend({
        id: 'AppRootView',
        init: function e() {
            e.base.call(this, 'AppRowView');
        },
        update: e,
    }),
    a.AppRoot = state.RootState.extend({
        init: function e(t, i) {
            e.base.call(this, t, i),
                this._view = new view.AppRootView();
        },
        actions: {
            'root.collapse': function (e) {
                return this._collapse(e);
            },
            'state.enter.root': function (e, t, i) {
                var n = this._stack;
                t == null && (t = 0),
                    t < n.length ? n.splice(t, 0, e) : this.enter(e, i),
                    this.disallowEmpty = !0;
            },
        },
        enter: function e(t, i) {
            var n = e.base.call(this, t, i);
            return n && t.view && t.view instanceof Function && t.view(),
                n;
        },
        exit: function e(t) {
            var i = e.base.call(this, t);
            return i && i.view && i.view instanceof Function && i.view(),
                i;
        },
    }),
    a.AppRoot = new a.AppRoot('application.AppRoot', {}),
    a.startup.setBuildInfo = function (e) {
        util.domLoaded.subscribeIgnoreErrors(function () {
            var t = document.getElementById('app-build-version-env');
            t && (t.innerHTML = e);
        }),
            a.adapterAndDOMLoaded.subscribeIgnoreErrors(function () {
                if (window.nrdp) {
                    var e = document.getElementById('app-build-version-native');
                    var t = s.Adapter.device.softwareVersion || '';
                    e && (e.innerHTML = t);
                }
                var e2 = document.getElementById('app-build-version-nodequark');
                var t2 = config.nqVersion || '';
                e2 && (e2.innerHTML = t2);
            }),
            a.MdxLoaded.loaded.where(function (e) {
                return e && e.state === a.MdxLoaded.STATES.LOADED;
            }).take(1).subscribeIgnoreErrors(function (e) {
                if (e && e.version) {
                    var t = document.getElementById('app-build-version-mdx');
                    var i = e.version || '';
                    t && (t.innerHTML = i);
                }
            });
    }
    ,
    void 0 == window.nrdpPartner && (window.nrdpPartner = {}),
    nrdpPartner.Keys = {},
    function (t) {
        var i = function () {
            model.uiExperience.loaded.take(1).subscribe(function () {
                var e = model.uiExperience.subtitleSettings;
                e && window.nrdp.setConfigData('cadmium', {
                    timedTextStyleDefaults: e.default,
                    timedTextStyleOverrides: e.user,
                });
            }, e);
        };
        i(),
            t.subtitleSettingsInit = i;
    }(model),
    s.adapterLoaded.subscribe(function () {
        var e = 'UI-release-20150831_490-html-turbo-eureka';
        util.log.info(`nrdp.device.setUIVersion: ${e}`),
            s.Adapter.device.setUIVersion(e);
    }, e),
    void 0 == window.nrdpPartner && (window.nrdpPartner = {}),
    void 0 == nrdpPartner.Fonts && (nrdpPartner.Fonts = {
        WGL: 'Netflix Sans',
        Jpan: 'MotoyaLCedar',
        Hans: 'Droid Sans Fallback',
        Hant: 'Droid Sans Fallback',
        Kore: 'NanumGothic',
        Arab: 'NKufi',
        Thai: 'Noto Sans Thai UI',
        Hindi: 'Noto Sans Devanagari UI',
    }),
    window.nrdp && (s.updateActivationTokens = function (e, t) {
        var i; var n; var r; var s; var a; var o; var l; var u = nrdp.registration; let
            c = !1;
        return u.currentDeviceAccount && (n = (i = model.UserCredentials).fromCookies()).hasUser && (r = n.NetflixId,
            s = n.SecureNetflixId,
            (a = u.activationTokens) && (o = a.NetflixId,
                l = a.SecureNetflixId),
            !r || !s || o && l && (i.fromMap(a).clientHash !== n.clientHash || o === r && l === s) || (c = !0,
                u.activationTokens = {
                    NetflixId: r,
                    SecureNetflixId: s,
                },
                n.isDeviceAndUserBound || util.log.error({
                    name: 'devicebridge.updateActivationTokens',
                    error: `Cookies are not double bound. Binding type is: ${n.bindingType}`,
                })),
            !c && t || util.log.error({
                name: 'devicebridge.updateActivationTokens',
                updated: c,
                source: e,
                softAttempt: t,
                oldNetflixId: o,
                newNetflixId: r,
                isSecureChanged: l !== s,
            })),
            c;
    }
    ),
    util.MessageBus.subscribe(util.MessageBus.NRDP_EVENT_STALE_CREDENTIALS, function (e, t) {
        var i; var n = 'NRDP_EVENT_STALE_CREDENTIALS'; var r = e.userMessage; var a = e.callback; var
            o = e.scope;
        util.log.error({
            name: n,
            desc: r,
            source: t,
            code: 12,
        }),
            t && (n += `: ${t}`),
            i = s.updateActivationTokens(n, !0),
            a && a.call(o || this, !i);
    }),
    s.EventContext = {},
    function () {
        var e = util.MessageBus;
        var t = e.EVENTS.Player;
        var i = s.EventContext;
        i.inPlayback = !1,
            e.subscribe(t.PLAYBACK_ACTIVE, function () {
                i.inPlayback = !0;
            }),
            e.subscribe(t.PLAYBACK_INACTIVE, function () {
                i.inPlayback = !1;
            });
    }(),
    function () {
        var e = util.MessageBus;
        e.subscribe(e.NRDP_EVENT_GET_NEW_CREDENTIALS, function (e, t) {
            var i = e.userMessage;
            util.log.error({
                name: 'NRDP_EVENT_GET_NEW_CREDENTIALS',
                desc: i,
                source: t,
                code: 8,
            }),
                a.reactivateDialog(i, t);
        });
    }(),
    function () {
        var t; var i; var
            n = util.MessageBus;
        i = function () {
            window.nrdp && nrdp.exit();
        }
            ,
            t = function (t, r) {
                var s; let
                    o = t.userMessage;
                util.log.error({
                    name: 'NRDP_EVENT_UNSUPPORTED_VERSION',
                    desc: o,
                    source: r,
                    code: 9,
                }),
                    model.languages.loaded.subscribe(function () {
                        o = o || config.text.error.unsupportedVersionError,
                            (s = new model.MenuModel('UnsupportedVersionEvent')).add(new model.MenuItemModel(config.text.responses.exit, {
                                confirm: i,
                            })),
                            n.notify(n.EVENTS.USER_ERROR_MESSAGE, {
                                source: r || 'UnsupportedVersionEvent',
                                message: o,
                                options: {
                                    buttons: s,
                                    priority: a.MessagePriority.ULTIMATE,
                                    onClobbered: i,
                                },
                            });
                    }, e);
            }
            ,
            n.subscribe(n.NRDP_EVENT_UNSUPPORTED_VERSION, t);
    }(),
    function () {
        var e = util.MessageBus;
        e.subscribe(e.NRDP_EVENT_RESET_REQUIRED, function (e, t) {
            var i = e && e.userMessage;
            util.log.error({
                name: 'NRDP_EVENT_RESET_REQUIRED',
                desc: i,
                source: t,
                code: 13,
            }),
                a.reactivateDialog(i, t);
        });
    }(),
    window.nrdp ? (s.accountSelected = new Rx.ReplaySubject(),
        s.nrdpInited.where(function () {
            return !!nrdp.registration.currentDeviceAccount;
        }).subscribe(function () {
            s.accountSelected.onNext();
        }, e)) : s.accountSelected = Rx.Observable.returnValue(t).replay().refCount(),
    function () {
        function t() {
            var e = model.languages.preferredLanguages;
            var t = e.indexOf('nb');
            t !== -1 && (e = e.slice(0)).splice(t + 1, 0, 'no'),
                s.Adapter.device.UILanguages = e;
        }
        Rx.Observable.zip([s.adapterLoaded, model.languages.loaded], e).subscribe(function () {
            t(),
                model.languages.changed.subscribe(t, e),
                s.accountSelected.subscribe(function () {
                    s.Adapter.registration.UILanguages = model.languages.preferredLanguages;
                }, e);
        }, e);
    }(),
    function () {
        var e; var t = util.MessageBus; var
            i = t.EVENTS.Player.PLAY_REQUEST;
        t.subscribe('TITLE_PLAY', function (e) {
            t.notify(i, e);
        }),
            t.subscribe(i, function () {
                (e = e || a.Binding.get('PLAYER_CARD')).playMovie.apply(e, arguments);
            });
    }(),
    controller.ErrorDirector = function () {
        var e = util.MessageBus.EVENTS.Player;
        var t = util.MessageBus.EVENTS.USER_ERROR_MESSAGE;
        var i = !1;
        util.MessageBus.subscribe(e.PLAYBACK_ACTIVE, () => {
            i = !0;
        }),
            util.MessageBus.subscribe(e.PLAYBACK_INACTIVE, () => {
                i = !1;
            }),
            util.MessageBus.subscribe(t, (e) => {
                if (!i || i && e.source === 'player') {
                    return util.log.error({
                        name: 'ErrorMessage',
                        desc: e.message,
                        source: e.source,
                    }),
                        void controller.ErrorCard.enter(e.message, e.options);
                }
            });
    }(),
    a.startup.startCommon = function (e, i) {
        return Rx.Observable.defer(function () {
            var n = a.startup;
            var r = e.session;
            var s = e.local;
            var o = util.storage;
            return o.prune(sessionStorage, r.always.concat(r.startup)),
                o.prune(localStorage, s.always.concat(s.startup)),
                util.CurrentUrlParams.get('reactivate') === 'true' && a.reactivate('application.Startup: from URL parameter'),
                n.createIdleReloadTimeout().run(),
                n.setBuildInfo(i),
                Rx.Observable.returnValue(t);
        });
    }
    ,
    a.startup.enforceGeolocationPolicy = function () {
        return Rx.Observable.zip([s.adapterLoaded, model.geolocation.loaded], e).select(function () {
            var e; var i; var n; var r; var s; var a = model.geolocation; var o = a.country; let
                l = a.policy;
            switch (o && (o = o.toLowerCase()),
            model.UserCredentials.fromCookies().hasUser || (e = l,
                l = 'ALLOW_LOGIN'),
            i = `Geolocation policy ${l}: ${o}`,
            e && (i += `: server policy ${e}`),
            l) {
                case 'FRIENDS_AND_FAMILY':
                case 'COMING_SOON':
                    n = !1,
                        r = config.debugCodes.startup.geoComingSoon;
                    break;
                case 'REJECT':
                    n = !1,
                        r = config.debugCodes.startup.geoRejected;
                    break;
                case 'ALLOW':
                case 'ALLOW_LOGIN':
                default:
                    n = !0;
            }
            if (!n) {
                throw (s = new util.Error(i, r)).country = o,
                s.reason = void 0,
                s.retryButton = !1,
                s.exitButton = !1,
                s;
            }
            return t;
        });
    }
    ,
    a.startup.setupPlayerBindings = function () {
        return Rx.Observable.returnValue(t);
    }
    ,
    s.selectDeviceAccount = function (e) {
        return Rx.Observable.create(function (t) {
            var i = !0;
            try {
                nrdp.registration.selectDeviceAccount(e, function () {
                    i && (t.onNext(),
                        t.onCompleted()),
                        s.accountSelected.onNext(e);
                });
            } catch (e) {
                t.onError(e);
            }
            return function () {
                i = !1;
            };
        });
    }
    ,
    s.createDeviceAccount = function () {
        return Rx.Observable.create(function (e) {
            var t = !0;
            return nrdp.registration.createDeviceAccount(function (i) {
                if (t) {
                    var n;
                    i.result === nrdp.COMPLETE ? (e.onNext(i.key),
                        e.onCompleted()) : (n = 'nrdp.registration.createDeviceAccount: error',
                            e.onError(new util.Error(n, config.debugCodes.registration.maxAccounts, new util.NrdpError(i))));
                }
            }),
                function () {
                    t = !1;
                };
        });
    }
    ,
    s.reduceToLRUAccount = function (e, t) {
        return e.lastAccessTime < t.lastAccessTime ? e : t;
    }
    ,
    s.selectMatchingDeviceAccount = function () {
        return Rx.Observable.defer(function () {
            var e;
            if (window.nrdp) {
                var i; var n; var r; var a = nrdp.registration; var o = a.currentDeviceAccount; var l = model.UserCredentials; var
                    u = l.fromCookies().clientHash;
                o && ((i = a.activationTokens).NetflixId && i.SecureNetflixId || a.registered ? l.fromMap(i).clientHash === u && (e = Rx.Observable.returnValue(o)) : e = Rx.Observable.returnValue(o)),
                    e || (r = function (e) {
                        return s.selectDeviceAccount(e);
                    }
                        ,
                        (n = a.deviceAccounts).length && (n = n.filter(function (e) {
                            return l.fromMap(e.tokens).clientHash === u;
                        })).length && (e = r(n[0].accountKey)),
                        e || (e = s.createDeviceAccount().catchException(function (e) {
                            var t; var
                                i = nrdp.registration.deviceAccounts;
                            return i.length && (t = i.reduce(s.reduceToLRUAccount)),
                                t ? s.deactivateDeviceAccount(t.accountKey).then(s.createDeviceAccount()) : Rx.Observable.throwException(e);
                        }).then(r)));
            } else { e = Rx.Observable.returnValue(t); }
            return e;
        });
    }
    ,
    s.tokenActivate = function(e) {
        return Rx.Observable.create(function(t) {
            var i;
            var n;
            var r = !0;
            var a = nrdp.registration;
            var o = model.UserCredentials;
            var l = o.fromCookies();
            var u = l.NetflixId;
            var c = l.SecureNetflixId;
            var d = l.hasUser;

            if (u && c && d) {
                return (a.addEventListener('activate', function(l) {
                        if (l.result !== nrdp.COMPLETE) {
                            i = l;
                         } else {
                            a.removeEventListener('activate', arguments.callee);
                            if (i) {
                                (function (i) {
                                    var a = util.MessageBus;
                                    var o = !1;
                                    if (util.log.error(i),
                                        i.result === nrdp.ACTION_ID) {
                                        switch (i.actionID) {
                                            case 4:
                                                n = s.tokenActivate(e).subscribe(t);
                                                break;
                                            case 8:
                                                a.notify(a.NRDP_EVENT_GET_NEW_CREDENTIALS, {
                                                    userMessage: i.message,
                                                }, e);
                                                break;
                                            case 9:
                                                a.notify(a.NRDP_EVENT_UNSUPPORTED_VERSION, {
                                                    userMessage: i.message,
                                                }, e);
                                                break;
                                            case 12:
                                                o = !0,
                                                    a.notify(a.NRDP_EVENT_STALE_CREDENTIALS, {
                                                        userMessage: i.message,
                                                        callback(a) {
                                                            a ? n = s.tokenActivate(e).subscribe(t) : r && t.onError(new util.NrdpError(i));
                                                        },
                                                    }, e);
                                                break;
                                            case 13:
                                                a.notify(a.NRDP_EVENT_RESET_REQUIRED, i.message, e);
                                        }!o && r && t.onError(new util.NrdpError(i));
                                    }
                                })(i);
                             } else {
                                (function (i) {
                                    var n = i.cookies;
                                    o.writeCookies(n[0], n[1]),
                                        s.updateActivationTokens(e),
                                        r && (t.onNext(i),
                                            t.onCompleted());
                                })(l);
                            }
                        }
                    }),
                    a.tokenActivate({
                        NetflixId: u,
                        SecureNetflixId: c,
                    }));
                }
                (i = new util.Error('devicebridge.tokenActivate: Cookies are not in the right state')).NetflixId = u;
                i.hasSecure = !!c;
                i.hasUser = d;
                t.onError(i);
                return function () {
                    r = !1,
                    n && n.dispose();
                };
        });
    }
    ,
    s.registerDeviceAccount = function () {
        return Rx.Observable.create(function (e) {
            var t; var
                i = 'devicebridge.registerDeviceAccount';
            console.log('nrdp.registration.registered', nrdp.registration.registered);
            return nrdp.registration.registered || true ? (s.updateActivationTokens(i, !0),
                e.onNext(),
                e.onCompleted()) : t = s.tokenActivate(i).subscribe(function (t) {
                    e.onNext(t);
                }, function (t) {
                    var i = t && t.result === nrdp.NETWORK_ERROR ? util.Error : util.LoginRequiredError;
                    e.onError(new i('devicebridge.registerDeviceAccount: devicebridge.tokenActivate failed', config.debugCodes.registration.network, t));
                }, function () {
                    e.onCompleted();
                }),
                function () {
                    t && t.dispose();
                };
        });
    }
    ,
    s.selectAndRegisterAccount = function () {
        return window.nrdp ? s.nrdpInited.then(function () {
            return s.selectMatchingDeviceAccount().then(s.registerDeviceAccount());
        }) : Rx.Observable.returnValue(t);
    }
    ,
    a.startup.startApplication = function (i) {
        return Rx.Observable.defer(function () {
            var n = a.startup;
            return util.startupProfiler.time('startApp'),
                n.startCommon(i.storage, i.environment.type).then(Rx.Observable.zip([s.nrdpInited, s.adapterLoaded, s.mediaAdapterLoaded], e)).then(function () {
                    return model.UserCredentials.fromCookies().hasUser ? s.selectMatchingDeviceAccount() : Rx.Observable.returnValue(t);
                }).then(util.domLoaded)
                    .then(n.loadServerRequest())
                    .then(n.enforceGeolocationPolicy())
                    .then(model.AppConfig.loaded)
                    .then(s.selectAndRegisterAccount())
                    .then(Rx.Observable.zip([model.CurrentUser.loaded, model.languages.loaded], () => a.uiIsRTL.setRTL(model.languages.isRTL)))
                    .then(r.ApiSession.authenticated)
                    .then(a.startup.setupPlayerBindings())
                    .then(function () {
                        return s.ping && s.ping(),
                            Rx.Observable.returnValue(t);
                    })
                    .doAction(function () {
                        util.startupProfiler.timeEnd('startApp');
                    })
                    .finalValue();
        });
    }
    ,
    a.startup.onComplete = function () {
        var e = util.MessageBus;
        config.startupDone = !0,
            e.subscribe(e.EVENTS.Player.PLAYER_CARD_ENTERED, function () {
                util.css.removeAll(document.body, ['app-startup', 'app-startup-finished']),
                    e.unsubscribe(e.EVENTS.Player.PLAYER_CARD_ENTERED, arguments.callee);
            });
    }
    ,
    a.MdxLoaded.loaded.where(function (e) {
        return e && e.state === a.MdxLoaded.STATES.READY;
    }).take(1).subscribeIgnoreErrors(function (e) { }),
    a.startup.onSuccess = function () {
        var e = c.CustomerEvents;
        var t = {};
        a.startup.onComplete(),
            sessionStorage.removeItem('loginCount'),
            setTimeout(function () {
                e.log(e.types.APP_START, t);
            }, 20),
            util.startupProfiler.report(!0);
    }
    ,
    a.startupError = function (e, t) {
        var i = config.text;
        e || (e = i.startup.loadError),
            util.css.add(document.body, 'app-error'),
            controller.ErrorCard.enter(e, {
                exitCallback: t,
            });
    }
    ,
    a.startup.onError = function (e) {
        var t; var i; var n; var r; let
            s;
        function o() {
            util.startupProfiler.report(!1);
        }
        function l(e) {
            util.log.fatal({
                message: 'Exiting UI without showing error dialog due to unrecoverable error',
                err: e,
            }),
                o(),
                a.exit();
        }
        if (e) {
            for (t = util.Error,
                i = e; i;) {
                i instanceof t || (i.exception = {
                    name: i.name,
                    message: i.message,
                    type: i.type,
                    stack: i.stack,
                }),
                    r || (r = i.userMessage),
                    s || (s = i.debugCode),
                    (n = i.cadmiumError) && n.display && n.display.code && (s += ` ${n.display.code}`),
                    i = i.innerError;
            }
        }
        util.log.fatal(util.extend({
            name: 'ui-startup-error',
        }, e)),
            e && (s && util.DebugInfo.addCode(s),
                e instanceof util.MdxLoadError ? l(e) : model.languages.loaded.subscribeIgnoreErrors(function () {
                    var e2;
                    a.startup.onComplete(),
                        r || (e2 = config.text.startup,
                            s && (s = s.replace(/^.*-/, '')),
                            r = e2.errors[s] || e2.loadError),
                        a.startupError(r, function () {
                            util.log.error('application.startup.onError: auto-exiting application due to an unrecoverable error'),
                                o(),
                                a.exit();
                        }),
                        o();
                }, l));
    }
    ,
    a.startup.startedObserver = function () {
        var e = a.startup;
        return Rx.Observer.create(e.onSuccess, e.onError);
    }
    ,
    a.reactivate = function (e, t) {
        a.deactivate(e).then(s.selectAndRegisterAccount()).subscribe(t, t);
    }
    ,
    a.reactivateDialog = function (t, i) {
        util.MessageBus;
        util.log.error({
            name: 'application.reactivateDialog',
            source: i,
            desc: t,
        }),
            a.reactivate(i, function (i) {
                state.raiseEvent('player.stop', a.Binding.get('PLAYER_CARD')),
                    model.languages.loaded.subscribe(function () {
                        var i; var n = util.MessageBus; var
                            r = config.text;
                        (i = new model.MenuModel('ReactivateDialog')).add(new model.MenuItemModel(r.responses.confirm, {
                            confirm: e,
                        })),
                            n.notify(n.EVENTS.USER_ERROR_MESSAGE, {
                                source: 'ReactivateDialog',
                                message: t || r.playback.metadataError,
                                options: {
                                    buttons: i,
                                    priority: a.MessagePriority.HIGH,
                                },
                            }),
                            n.notify(n.EVENTS.DEVICE_REACTIVATED, {
                                clearSessions: !0,
                            });
                    }, e);
            });
    }
    ,
    util.KeyIdentifierToCode = {
        Up: 38,
        Down: 40,
        Left: 37,
        Right: 39,
        Enter: 13,
    },
    function () {
        var e; let
            t;
        window.nrdpPartner && nrdpPartner.Keys ? t = nrdpPartner.Keys : (t = {
            13: 'key.enter',
            27: 'key.back',
            35: 'key.options',
            37: 'key.left',
            38: 'key.up',
            39: 'key.right',
            40: 'key.down',
            46: 'key.info',
            48: 'key.0',
            49: 'key.1',
            50: 'key.2',
            51: 'key.3',
            52: 'key.4',
            53: 'key.5',
            54: 'key.6',
            55: 'key.7',
            56: 'key.8',
            57: 'key.9',
            97: 'key.step_prev',
            98: 'key.pause',
            99: 'key.step_next',
            100: 'key.rewind',
            101: 'key.play',
            102: 'key.fastfwd',
            103: 'key.track_prev',
            104: 'key.stop',
            105: 'key.track_next',
            106: 'key.clear',
            109: 'key.time',
            110: 'key.search',
            111: 'key.angle',
            118: 'key.top_menu',
            119: 'key.popup_menu',
            120: 'key.display',
            121: 'key.subtitle',
            122: 'key.audio',
            123: 'key.exit',
            187: 'key.power',
            219: 'key.red',
            220: 'key.green',
            221: 'key.blue',
            222: 'key.yellow',
        },
            (e = !window.nrdp) && (t[192] = 'key.tilde'),
            e && (t[36] = 'key.start',
                t[45] = 'key.back',
                t[46] = 'key.top_menu',
                t[112] = 'key.l1',
                t[113] = 'key.r1',
                t[114] = 'key.l2',
                t[115] = 'key.r2',
                t[116] = 'key.l3',
                t[117] = 'key.r3',
                t[145] = 'key.select')),
            t[8] || (t[8] = 'key.backspace'),
            t[32] || (t[32] = 'key.space'),
            util.Keys = t;
    }(),
    function (e) {
        var t; var i; var n = ['keyup', 'keydown', 'keypress']; var r = ['mouseup', 'mousedown', 'mouseover', 'mousemove']; var
            s = function (e) {
                return Rx.Observable.create(function (t) {
                    var i = t.onNext.bind(t);
                    return document.addEventListener(e, i, !1),
                        function () {
                            document.removeEventListener(e, i),
                                i = null;
                        };
                });
            };
        for (i = 0; i < n.length; i += 1) {
            t = new Rx.Subject(),
                e[n[i]] = t,
                document.addEventListener(n[i], t.onNext.bind(t), !1);
        }
        for (i = 0; i < r.length; i += 1) { e[r[i]] = s(r[i]); }
    }(a),
    util.KeyHistory = function () {
        var e = util.makeEnum('key.left', 'key.right');
        var t = util.makeEnum('key.up', 'key.down');
        return {
            _offAxisKeys: util.makeMap('key.left', t, 'key.right', t, 'key.up', e, 'key.down', e),
            current: {
                key: null,
                time: 0,
                held: !1,
            },
            previous: {
                key: null,
                time: 0,
                held: !1,
            },
            isRapid() {
                var e; var t; let
                    i = this._isRapid;
                return i === null && (e = this.previous,
                    i = (t = this.current).key === e.key && t.time - e.time < this._rapidKeyDelay,
                    this._isRapid = i),
                    i;
            },
            isDeterminatePress() {
                var e = util.Date.now();
                var t = this.current;
                return t.held && e - t.time > this._determinatePressHoldTime;
            },
            onPressBecomesDeterminate(e) {
                var t; var i = util.Date.now(); var
                    n = this.current;
                n.held && !this._determinatePressTimeout && ((t = this._determinatePressHoldTime - (i - n.time)) > 0 ? (this._determinatePressTimeout = new util.Timeout(function () {
                    e(),
                        this._determinatePressTimeout = null;
                },
                    t, this),
                    this._determinatePressTimeout.run()) : e());
            },
            get isHeld() {
                var e = this.previous;
                var t = this.current;
                return t.key !== 'click' && t.held && e.held && e.key === t.key;
            },
            isHeldOrRapid() {
                return this.isHeld || this.isRapid();
            },
            isRapidOffAxis() {
                var e = this.previous;
                var t = this.current;
                var i = t.time - e.time < this._rapidOffAxisThreshold;
                var n = this._offAxisKeys[e.key];
                return n && i && t.key in n;
            },
            isStuckKey() {
                var e; let
                    t = this._isStuck;
                return t === null && (e = this.previous,
                    t = this.current.time - e.time < this._stuckKeyDelay,
                    this._isStuck = t),
                    t;
            },
            isHeldOrStuck() {
                return this.isHeld || this.isStuckKey();
            },
            update(e) {
                var t = this.current;
                var i = this.previous;
                i.key = t.key,
                    i.time = t.time,
                    i.held = t.held,
                    t.key = e,
                    t.time = util.Date.now(),
                    t.held = !0,
                    this._isRapid = null,
                    this._isStuck = null;
            },
            cancelHeld(e) {
                e === this.current.key && (this.current.held = !1,
                    this._determinatePressTimeout && (this._determinatePressTimeout.clear(),
                        this._determinatePressTimeout = null));
            },
            _rapidKeyDelay: config.rapidKeyDelay,
            _determinatePressHoldTime: config.determinatePressHoldTime,
            _rapidOffAxisThreshold: config.rapidOffAxisThreshold,
            _stuckKeyDelay: config.stuckKeyDelay,
        };
    }(),
    util.domLoaded.subscribe(function () {
        var e = util.KeyIdentifierToCode;
        a.keyup.subscribe(function (t) {
            var i; let
                n = t.which;
            n === 0 && (n = e[t.keyIdentifier]),
                (i = util.Keys[n]) && (util.KeyHistory.cancelHeld(i),
                    t.preventDefault());
        });
    }, e),
    util.IdleTimeout = util.Timeout.extend({
        init: function e(t, i, n, r, s) {
            this._onIdle = t,
                this._onWake = i,
                this._onWakeEvent = util.proxy(this._onWakeEvent, this),
                r && (this._idleScope = r),
                s && s instanceof Array && s.length > 0 && (this._wakeEvents = s),
                this._eventSubscriptions = [],
                e.base.call(this, this._onDelay, n, this);
        },
        _wakeEvents: ['keydown'],
        _onDelay() {
            var e; var
                t = util.KeyHistory.current.time + this._delayMs - util.Date.now();
            t > 0 ? this.run(t) : (this._onWake && this._addEventSubscriptions(),
                (e = this._onIdle) && e.call(this._idleScope || this));
        },
        _onWakeEvent() {
            this._removeEventSubscriptions();
            var e = this._onWake;
            e && e.call(this._idleScope || this);
        },
        _addEventSubscriptions() {
            var e; var t; var i = this._wakeEvents; var
                n = this._eventSubscriptions;
            if (!n.length) {
                for (e = 0,
                    t = i.length; e < t; e++) n.push(a[i[e]].subscribe(this._onWakeEvent));
            }
        },
        _removeEventSubscriptions() {
            var e; var t = this._eventSubscriptions; var
                i = t.length;
            if (i) {
                for (e = 0; e < i; e++) t[e].dispose();
                t.length = 0;
            }
        },
    }),
    a.IdleTimeout = util.IdleTimeout.extend({
        init: function e(t, i, n, r, s) {
            e.base.call(this, t, i, n, r, s),
                a.AppLock.subscribe(this, this._lockChanged);
        },
        _lockChanged(e) {
            e ? this.clear() : this.run();
        },
    }),
    a.exit = function () {
        window.nrdp && window.nrdp.log && window.nrdp.log.flush(),
            setTimeout(function () {
                window.nrdp && nrdp.exit();
            }, 5e3);
    }
    ,
    a.startup.createIdleReloadTimeout = function () {
        var t = !1;
        var i = config.idleReloadTimeoutDurationMs;
        var n = config.idleReloadTimeoutDurationMsPreloaded;
        return {
            run() {
                if (!t) {
                    function r() {
                        var t; var r = cast.framework.CastReceiverContext.getInstance(); var
                            o = r.getSystemState();
                        t = o !== cast.framework.system.SystemState.READY ? n : i;
                        var l = new a.IdleTimeout(function () {
                            var e = r.getSystemState();
                            util.storage.setItem(sessionStorage, 'appRefresh', util.TimeService.now()),
                                util.log.error({
                                    event: 'idle-shutdown',
                                    isPreloaded: e !== cast.framework.system.SystemState.READY,
                                }),
                                a.exit();
                        },
                            null, t);
                        l.run(),
                            s.nrdpInited.subscribeIgnoreErrors(function () {
                                util.log.error({
                                    event: 'idle-timeout-started',
                                    timeout: t,
                                });
                            }, e),
                            r.addEventListener(cast.framework.system.EventType.READY, function () {
                                l.run(i),
                                    util.log.error({
                                        event: 'idle-foreground-entered',
                                        idleDurationMs: i,
                                    });
                            });
                    }
                    window.isCastSdkLoaded ? r() : window.addEventListener('castSdkLoaded', r, !1),
                        t = !0;
                }
            },
        };
    }
    ,
    a.startup.onSetUserError = function (e) {
        if (e instanceof util.LoginRequiredError) {
            return util.log.error('setUser: login required, resetting device to deactivated state'),
                a.deactivate('setUser').then(s.selectAndRegisterAccount().catchException(function (e) {
                    return Rx.Observable.returnValue(t);
                })).then(() => model.languages.loaded).finalValue();
        }
        throw e;
    }
    ,
    controller.DialogCard.mixin({
        _timeoutDuration: 6e4,
        init: function e(t, i, n) {
            var r = this;
            e.base.apply(this, arguments),
                this.exitCallback = i && i.exitCallback,
                this._exitTimeout = new util.Timeout(function () {
                    r._onStack && r._hasFocus && state.raiseEvent('state.exit'),
                        r.exitCallback && r.exitCallback();
                },
                    this._timeoutDuration);
        },
        onEnter: function e(t, i) {
            e.base.apply(this, arguments),
                t && this._exitTimeout.run();
        },
        onExit: function e(t, i) {
            e.base.apply(this, arguments),
                t && this._exitTimeout && this._exitTimeout.clear();
        },
    }),
    a.startup.loadMdx = function () {
        return Rx.Observable.create(function (e) {
            var t = !0;
            var i = util.CurrentUrlParams.get('mdxversion');
            var n = util.CurrentUrlParams.get('mdxTestVersion');
            var r = util.CurrentUrlParams.get('mdxDebugVersion');
            var config = (util.CurrentUrlParams.get('mdxurl'),
                {});
            return i ? config.version = i : n ? config.testVersion = n : r && (config.debugVersion = r),
                window.mdxShim ? window.mdxShim.load(config, function (i) {
                    util.log.error({
                        message: 'MDXJS Load Information: SUCCESS',
                    }),
                        a.MdxLoaded.loaded.onNext({
                            state: a.MdxLoaded.STATES.LOADED,
                            version: i.version,
                            MdxApi: i,
                        }),
                        t && (e.onNext(i),
                            e.onCompleted());
                }, function () {
                    var i = new util.MdxLoadError('Failed to load mdx.js');
                    util.log.error({
                        message: 'MDXJS Load Information: FAILED',
                        config: util.stringify(config),
                    }),
                        a.MdxLoaded.loaded.onError(i),
                        t && e.onError(i);
                }) : t && e.onError(new util.MdxLoadError('Failed to load Mdx shim')),
                function () {
                    t = !1;
                };
        });
    }
    ,
    Rx.Observable.zip([a.startup.startApplication(config), a.startup.loadMdx()], e).catchException(function (e) {
        console.log('onSetUserError', e);
        return a.startup.onSetUserError(e).doAction(function () {
            util.startupProfiler.timeEnd('startApp');
        });
    }).then(a.startup.startEureka()).subscribe(a.startup.startedObserver()),
    util.startupProfiler.jsScriptLoaded();
