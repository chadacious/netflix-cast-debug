(function () {
    const _ = window.caf_ = {};
    /*

     Copyright The Closure Library Authors.
     SPDX-License-Identifier: Apache-2.0
    */
    'use strict';
    let ba; let ca; let da; let p; let ha; let ka; let na; let oa; let pa; let qa; let ra; let ua; let sa; let ta; let va; let wa; let xa; let za; let Aa; let Ba; let Ca; let Ea; let La; let Ma; let Oa; let Ra; let Sa; let Ta; let Ua; let Wa; let Ya; let $a; let gb; let fb; let jb; let ib; let mb; let rb; let xb; let Ab; let Eb; let Hb; let Mb; let Nb; let Lb; let Qb; let Wb; let ac; let Yb; let cc; let qc; let rc; let tc; let wc; let xc; let Cc; let Gc; let Hc; let Ic; let Jc; let Kc; let Qc; let Tc; let Yc; let Vc; let Xc; let cd; let dd; let ed; let gd; let hd; let id; let jd; let ld; let md; let od; let qd; let wd; let xd; let yd; let Bd; let Cd; let Ed; let Fd; let Gd; let Hd; let Id; let Nd; let Kd; let Od; let Ud; let Vd; let Xd; let Yd; let $d; let ae; let be; let de; let fe; let he; let ie; let ee; let ge; let Rd; let Zd; let ne; let le; let je; let ke; let oe; let me; let Td; let ce; let se; let re; let te; let ue; let ve; let we; let xe; let ye; let ze; let Ae; let Be; let Ce; let De; let Ee; let Fe; let Ge; let He; let Ie; let Je; let Ke; let Le; let Me; let Ne; let Oe; let Pe; let Qe; let Re; let Se; let Te; let Ue; let Ve; let We; let Ye; let Xe; let Ze; let $e; let cf; let df; let bf; let gf; let hf; let jf; let kf; let lf; let mf; let nf; let J; let of; let pf;
    let qf; let rf; let sf; let Af; let Bf; let Df; let Ef; let K; let Ff; let Hf; let Jf; let Kf; let Gf; let If; let Lf; let Sf; let Tf; let Uf; let Vf; let Of; let Pf; let Rf; let Yf; let $f; let ag; let Xf; let Zf; let cg; let dg; let ig; let jg; let kg; let pg; let qg; let xg; let ug; let vg; let wg; let yg; let zg; let Ag; let Dg; let Cg; let Fg; let Eg; let Gg; let Hg; let Ig; let Jg; let Kg; let Lg; let Mg; let Ng; let Rg; let Og; let Pg; let Qg; let Tg; let Xg; let gh; let jh; let lh; let mh; let kh; let ih; let nh; let oh; let qh; let rh; let sh; let th; let uh; let vh; let Ah; let Bh; let Ch; let Dh; let Wg; let zh; let Jh; let Mh; let Oh; let Qh; let Sh; let Uh; let Wh; let Yh; let $h; let bi; let di; let fi; let ei; let gi; let hi; let Gh; let Ih; let ii; let Nh; let Kh; let Rh; let Th; let Ph; let Hh; let ji; let Zh; let ki; let Vh; let Xh; let ai; let ci; let li; let ri; let mi; let si; let ti; let ui; let xi; let vi; let wi; let yi; let Ai; let Bi; let Ci; let zi; let Ei; let Hi; let Gi; let Fi; let Ki; let Li; let Mi; let Ni; let Oi; let Pi; let Qi; let Ri; let Si; let Ti; let Ui; let Vi; let Wi; let Xi; let Ji; let fj; let gj; let mj; let nj; let oj; let lj; let pj; let qj; let hj; let ij; let rj; let tj; let jj; let uj; let vj; let kj; let wj; let xj; let yj; let zj; let Aj; let Bj; let Cj; let Dj; let Ej;
    let Fj; let Ij; let Hj; let Gj; let Jj; let Mj; let Oj; let Rj; let Nj; let Sj; let Pj; let Tj; let Uj; let Vj; let Wj; let Yj; let Zj; let Qj; let bk; let ak; let ck; let Kj; let Xj; let dk; let fk; let gk; let hk; let ik; let lk; let mk; let nk; let ok; let pk; let qk; let rk; let sk; let tk; let vk; let uk; let wk; let xk; let yk; let kk; let Ek; let Fk; let Gk; let Lk; let Kk; let Nk; let Pk; let Qk; let Jk; let Hk; let zk; let Rk; let Sk; let Tk; let Ik; let Uk; let Vk; let Wk; let Xk; let Zk; let Bk; let bl; let Ok; let cl; let al; let dl; let Mk; let Dk; let $k; let Yk; let Ck; let el; let fl; let gl; let hl; let il; let jl; let kl; let ll; let ml; let nl; let ol; let ql; let rl; let pl; let tl; let ul; let vl; let wl; let zl; let Cl; let Bl; let El; let Fl; let Dl; let Gl; let Hl; let Il; let Jl; let Kl; let Ll; let Ml; let Nl; let Ol; let Ql; let Vl; let Xl; let Yl; let $l; let bm; let cm; let Rl; let Pl; let Wl; let Tl; let Ul; let Zl; let dm; let am; let gm; let em; let fm; let im; let jm; let km; let lm; let rm; let mm; let om; let pm; let qm; let sm; let tm; let um; let vm; let wm; let xm; let ym; let nm; let Em; let Am; let Bm; let Dm; let zm; let Fm; let Cm; let Hm; let Im; let Jm; let Km; let Lm; let Mm; let Pm; let Sm; let Tm; let Um; let Rm; let gn; let kn; let hn; let ln; let pn; let rn; let sn;
    let tn; let Bn; let En; let Fn; let Gn; let Hn; let Jn; let Kn; let On; let Zn; let jo; let ko; let Mn; let fo; let bo; let co; let eo; let mo; let no; let po; let oo; let qo; let ro; let to; let uo; let vo; let wo; let xo; let zo; let Ao; let Bo; let Do; let Go; let Ho; let Io; let Mo; let No; let Po; let Qo; let Ro; let Oo; let So; let To; let Yo; let Zo; let $o; let Wo; let kp; let np; let mp; let lp; let pp; let op; let jp; let fp; let hp; let ep; let ip; let gp; let qp; let yp; let rp; let wp; let tp; let up; let vp; let zp; let xp; let sp; let Dp; let Bp; let Ep; let Cp; let Ap; let Fp; let Gp; let Hp; let Kp; let Lp; let Mp; let Np; let Op; let Pp; let Qp; let Rp; let Xp; let Yp; let Tp; let aq; let bq; let $p; let Wp; let Vp; let Sp; let cq; let eq; let dq; let fq; let iq; let hq; let kq; let mq; let lq; let jq; let oq; let pq; let qq; let tq; let rq; let uq; let vq; let wq; let xq; let yq; let Aq; let Cq; let Dq; let Eq; let Bq; let Hq; let Kq; let Iq; let Rq; let Jq; let Sq; let Mq; let Oq; let Tq; let Uq; let Vq; let N; let Xq; let Yq; let Zq; let ar; let br; let cr; let dr; let er; let fr; let gr; let hr; let ir; let jr; let kr; let lr; let mr; let nr; let or; let pr; let qr; let Wq; let rr; let sr; let tr; let ur; let vr; let wr; let xr; let yr; let zr; let Ar; let Br; let Cr; let $q; let Dr; let Er; let Fr;
    let Gr; let Kr; let Lr; let Mr; let Nr; let Or; let Pr; let Qr; let Rr; let Sr; let Tr; let Ur; let Vr; let Wr; let Xr; let Yr; let Zr; let $r; let as; let bs; let cs; let ds; let es; let fs; let gs; let hs; let is; let js; let ks; let ls; let ns; let os; let ps; let qs; let rs; let ss; let us; let vs; let xs; let ws; let ys; let zs; let Bs; let Cs; let Ds; let Es; let Fs; let Gs; let Is; let Js; let Ks; let Ms; let Ns; let Os; let Ps; let Qs; let Rs; let Ss; let Ts; let Us; let Vs; let Ws; let Xs; let Ys; let Zs; let $s; let at; let bt; let ct; let dt; let et; let ft; let gt; let ht; let it; let jt; let lt; let O; let Kt; let Lt; let Mt; let Ot; let St; let Tt; let Vt; let Ut; let Wt; let Yt; let $t; let bu; let Zt; let au; let cu; let eu; let gu; let hu; let iu; let du; let ju; let ku; let fu; let lu; let mu; let ou; let pu; let qu; let ru; let su; let tu; let uu; let vu; let wu; let Eu; let Du; let Bu; let yu; let zu; let xu; let Hu; let Iu; let Ku; let Lu; let Ju; let Nu; let Ou; let Pu; let Qu; let Ru; let Su; let Tu; let Uu; let Vu; let Wu; let $u; let Xu; let Yu; let Zu; let av; let dv; let bv; let ev; let fv; let gv; let jv; let kv; let mv; let lv; let nv; let pv; let qv; let sv; let tv; let vv; let wv; let xv; let yv; let Av; let Bv; let Cv; let Dv; let Ev; let Hv; let Mv; let Fv; let Gv; let Lv; let Jv; let Kv;
    let Nv; let Ov; let Pv; let Qv; let Rv; let Sv; let Uv; let Vv; let Wv; let Xv; let Zv; let $v; let Yv; let aw; let bw; let cw; let dw; let ew; let fw; let gw; let hw; let iw; let jw; let kw; let lw; let mw; let nw; let ow; let pw; let qw; let rw; let sw; let tw; let uw; let vw; let ww; let zw; let Aw; let Ew; let Fw; let Bw; let Gw; let Dw; let Hw; let Mw; let Iw; let Nw; let Ow; let Pw; let Lw; let Kw; let Rw; let Qw; let Sw; let Tw; let Uw; let P; let Ww; let Zw; let ax; let bx; let cx; let dx; let ex; let fx; let gx; let jx; let kx; let nx; let ox; let px; let qx; let rx; let sx; let tx; let ux; let yx; let zx; let Q; let Ex; let Gx; let Fx; let Hx; let Ix; let Kx; let Ox; let Px; let Nx; let Qx; let Sx; let Tx; let Ux; let Vx; let Wx; let Xx; let Yx; let by; let Zx; let cy; let dy; let iy; let jy; let ky; let ly; let ay; let py; let qy; let wy; let oy; let xy; let fy; let ry; let vy; let hy; let uy; let Ay; let zy; let yy; let sy; let ty; let gy; let ny; let ey; let $x; let Dy; let Ey; let Cy; let Hy; let Iy; let Jy; let Ly; let My; let Yy; let Oy; let Zy; let $y; let az; let bz; let cz; let dz; let ez; let fz; let gz; let hz; let iz; let jz; let kz; let lz; let mz; let nz; let oz; let pz; let qz; let rz; let sz; let tz; let uz; let vz; let wz; let xz; let yz; let zz; let Nz; let Az; let Zp; let Oz; let Pz; let Qz;
    let Rz; let fa; let ea; let Lq; let Ia; let
        Ja;
    ba = function (a) {
        return function () {
            return _.aa[a].apply(this, arguments);
        };
    };
    ca = function (a) {
        let b = 0;
        return function () {
            return b < a.length ? {
                done: !1,
                value: a[b++],
            } : {
                done: !0,
            };
        };
    };
    da = function (a) {
        a = [typeof globalThis === 'object' && globalThis, a, typeof window === 'object' && window, typeof self === 'object' && self, typeof global === 'object' && global];
        for (let b = 0; b < a.length; ++b) {
            const c = a[b];
            if (c && c.Math == Math) return c;
        }
        throw Error('Cannot find global object');
    };
    p = function (a, b) {
        if (b) {
            a: {
                let c = ea; a = a.split('.');
                for (var d = 0; d < a.length - 1; d++) {
                    const e = a[d];
                    if (!(e in c)) break a;
                    c = c[e];
                }
                a = a[a.length - 1]; d = c[a]; b = b(d); b != d && b != null && fa(c, a, {
                    configurable: !0,
                    writable: !0,
                    value: b,
                });
            }
        }
    };
    ha = function (a) {
        a = {
            next: a,
        };
        a[Symbol.iterator] = function () {
            return this;
        };
        return a;
    };
    _.ia = function (a) {
        return a.raw = a;
    };
    _.q = function (a) {
        const b = typeof Symbol !== 'undefined' && Symbol.iterator && a[Symbol.iterator];
        return b ? b.call(a) : {
            next: ca(a),
        };
    };
    _.ja = function (a) {
        if (!(a instanceof Array)) {
            a = _.q(a);
            for (var b, c = []; !(b = a.next()).done;) c.push(b.value);
            a = c;
        }
        return a;
    };
    ka = function (a, b) {
        return Object.prototype.hasOwnProperty.call(a, b);
    };
    _.r = function (a, b) {
        a.prototype = la(b.prototype);
        a.prototype.constructor = a;
        if (ma) ma(a, b);
        else {
            for (const c in b) {
                if (c != 'prototype') {
                    if (Object.defineProperties) {
                        const d = Object.getOwnPropertyDescriptor(b, c);
                        d && Object.defineProperty(a, c, d);
                    } else a[c] = b[c];
                }
            }
        }
        a.yb = b.prototype;
    };
    na = function () {
        this.A = !1;
        this.l = null;
        this.B = void 0;
        this.j = 1;
        this.F = 0;
        this.o = null;
    };
    oa = function (a) {
        if (a.A) throw new TypeError('Generator is already running');
        a.A = !0;
    };
    pa = function (a, b) {
        a.o = {
            Or: b,
            kt: !0,
        };
        a.j = a.F;
    };
    qa = function (a, b, c) {
        a.j = c;
        return {
            value: b,
        };
    };
    ra = function (a) {
        this.j = new na();
        this.l = a;
    };
    ua = function (a, b) {
        oa(a.j);
        const c = a.j.l;
        if (c) {
            return sa(a, 'return' in c ? c.return : function (d) {
                return {
                    value: d,
                    done: !0,
                };
            }, b, a.j.return);
        }
        a.j.return(b);
        return ta(a);
    };
    sa = function (a, b, c, d) {
        try {
            const e = b.call(a.j.l, c);
            if (!(e instanceof Object)) throw new TypeError(`Iterator result ${e} is not an object`);
            if (!e.done) return a.j.A = !1, e;
            var f = e.value;
        } catch (g) {
            return a.j.l = null, pa(a.j, g), ta(a);
        }
        a.j.l = null;
        d.call(a.j, f);
        return ta(a);
    };
    ta = function (a) {
        for (; a.j.j;) {
            try {
                var b = a.l(a.j);
                if (b) {
                    return a.j.A = !1, {
                        value: b.value,
                        done: !1,
                    };
                }
            } catch (c) {
                a.j.B = void 0, pa(a.j, c);
            }
        }
        a.j.A = !1;
        if (a.j.o) {
            b = a.j.o;
            a.j.o = null;
            if (b.kt) throw b.Or;
            return {
                value: b.return,
                done: !0,
            };
        }
        return {
            value: void 0,
            done: !0,
        };
    };
    va = function (a) {
        this.next = function (b) {
            oa(a.j);
            a.j.l ? b = sa(a, a.j.l.next, b, a.j.D) : (a.j.D(b), b = ta(a));
            return b;
        };
        this.throw = function (b) {
            oa(a.j);
            a.j.l ? b = sa(a, a.j.l.throw, b, a.j.D) : (pa(a.j, b), b = ta(a));
            return b;
        };
        this.return = function (b) {
            return ua(a, b);
        };
        this[Symbol.iterator] = function () {
            return this;
        };
    };
    wa = function (a) {
        function b(d) {
            return a.next(d);
        }

        function c(d) {
            return a.throw(d);
        }
        return new Promise(function (d, e) {
            function f(g) {
                g.done ? d(g.value) : Promise.resolve(g.value).then(b, c).then(f, e);
            }
            f(a.next());
        });
    };
    xa = function (a) {
        return wa(new va(new ra(a)));
    };
    _.ya = function () {
        for (var a = Number(this), b = [], c = a; c < arguments.length; c++) b[c - a] = arguments[c];
        return b;
    };
    za = function (a, b, c) {
        if (a == null) throw new TypeError(`The 'this' value for String.prototype.${c} must not be null or undefined`);
        if (b instanceof RegExp) throw new TypeError(`First argument to String.prototype.${c} must not be a regular expression`);
        return `${a}`;
    };
    Aa = function (a, b, c) {
        a instanceof String && (a = String(a));
        for (let d = a.length, e = 0; e < d; e++) {
            const f = a[e];
            if (b.call(c, f, e, a)) {
                return {
                    Yj: e,
                    Mf: f,
                };
            }
        }
        return {
            Yj: -1,
            Mf: void 0,
        };
    };
    Ba = function (a, b) {
        a instanceof String && (a += '');
        let c = 0;
        let d = !1;
        const e = {
            next() {
                if (!d && c < a.length) {
                    const f = c++;
                    return {
                        value: b(f, a[f]),
                        done: !1,
                    };
                }
                d = !0;
                return {
                    done: !0,
                    value: void 0,
                };
            },
        };
        e[Symbol.iterator] = function () {
            return e;
        };
        return e;
    };
    Ca = function (a) {
        return a || Array.prototype.fill;
    };
    _.w = function (a, b, c) {
        a = a.split('.');
        c = c || _.u;
        a[0] in c || typeof c.execScript === 'undefined' || c.execScript(`var ${a[0]}`);
        for (var d; a.length && (d = a.shift());) a.length || void 0 === b ? c[d] && c[d] !== Object.prototype[d] ? c = c[d] : c = c[d] = {} : c[d] = b;
    };
    _.Da = function (a) {
        a = a.split('.');
        for (var b = _.u, c = 0; c < a.length; c++) { if (b = b[a[c]], b == null) return null; }
        return b;
    };
    Ea = function (a) {
        a.pc = void 0;
        a.M = function () {
            return a.pc ? a.pc : a.pc = new a();
        };
    };
    _.Fa = function (a) {
        const b = typeof a;
        return b != 'object' ? b : a ? Array.isArray(a) ? 'array' : b : 'null';
    };
    _.Ga = function (a) {
        const b = _.Fa(a);
        return b == 'array' || b == 'object' && typeof a.length === 'number';
    };
    _.Ha = function (a) {
        const b = typeof a;
        return b == 'object' && a != null || b == 'function';
    };
    _.Ka = function (a) {
        return Object.prototype.hasOwnProperty.call(a, Ia) && a[Ia] || (a[Ia] = ++Ja);
    };
    La = function (a, b, c) {
        return a.call.apply(a.bind, arguments);
    };
    Ma = function (a, b, c) {
        if (!a) throw Error();
        if (arguments.length > 2) {
            const d = Array.prototype.slice.call(arguments, 2);
            return function () {
                const e = Array.prototype.slice.call(arguments);
                Array.prototype.unshift.apply(e, d);
                return a.apply(b, e);
            };
        }
        return function () {
            return a.apply(b, arguments);
        };
    };
    _.Na = function (a, b, c) {
        Function.prototype.bind && Function.prototype.bind.toString().indexOf('native code') != -1 ? _.Na = La : _.Na = Ma;
        return _.Na.apply(null, arguments);
    };
    Oa = function (a, b) {
        const c = Array.prototype.slice.call(arguments, 1);
        return function () {
            const d = c.slice();
            d.push.apply(d, arguments);
            return a.apply(this, d);
        };
    };
    _.Pa = function () {
        return Date.now();
    };
    _.Qa = function (a, b) {
        function c() { }
        c.prototype = b.prototype;
        a.yb = b.prototype;
        a.prototype = new c();
        a.prototype.constructor = a;
        a.Ww = function (d, e, f) {
            for (var g = Array(arguments.length - 2), k = 2; k < arguments.length; k++) g[k - 2] = arguments[k];
            return b.prototype[e].apply(d, g);
        };
    };
    Ra = function (a) {
        return a;
    };
    Sa = function () {
        return !(!cast.__platform__ || !cast.__platform__.metrics);
    };
    Ta = function (a, b) {
        if (Error.captureStackTrace) Error.captureStackTrace(this, Ta);
        else {
            const c = Error().stack;
            c && (this.stack = c);
        }
        a && (this.message = String(a));
        void 0 !== b && (this.cause = b);
    };
    Ua = function (a, b) {
        a = a.split('%s');
        for (var c = '', d = a.length - 1, e = 0; e < d; e++) c += a[e] + (e < b.length ? b[e] : '%s');
        Ta.call(this, c + a[d]);
    };
    _.Va = function (a, b) {
        throw new Ua(`Failure${a ? `: ${a}` : ''}`, Array.prototype.slice.call(arguments, 1));
    };
    Wa = function (a, b, c) {
        if (typeof a !== 'number' || !isFinite(a)) {
            let d = [a];
            let e = 'Assertion failed';
            b ? (e += `: ${b}`, d = Array.prototype.slice.call(arguments, 2)) : e += ': Expected %s to be a finite number but it is not.';
            throw new Ua(`${e}`, d || []);
        }
    };
    _.Xa = function () { };
    Ya = function (a) {
        var b = b || 0;
        return function () {
            return a.apply(this, Array.prototype.slice.call(arguments, 0, b));
        };
    };
    _.Za = function (a) {
        let b = !1;
        let c;
        return function () {
            b || (c = a(), b = !0);
            return c;
        };
    };
    $a = function (a) {
        function b() {
            c = 0;
        }
        var c = 0;
        return function (d) {
            c || (c = _.u.setTimeout(b, 3E15), a.apply(void 0, arguments));
        };
    };
    _.bb = function (a, b) {
        return ab(a, b) >= 0;
    };
    _.db = function (a, b) {
        b = ab(a, b);
        let c;
        (c = b >= 0) && _.cb(a, b);
        return c;
    };
    _.cb = function (a, b) {
        return Array.prototype.splice.call(a, b, 1).length == 1;
    };
    _.eb = function (a) {
        const b = a.length;
        if (b > 0) {
            for (var c = Array(b), d = 0; d < b; d++) c[d] = a[d];
            return c;
        }
        return [];
    };
    gb = function (a, b, c, d) {
        return Array.prototype.splice.apply(a, fb(arguments, 1));
    };
    fb = function (a, b, c) {
        return arguments.length <= 2 ? Array.prototype.slice.call(a, b) : Array.prototype.slice.call(a, b, c);
    };
    jb = function (a, b) {
        if (!_.Ga(a) || !_.Ga(b) || a.length != b.length) return !1;
        for (let c = a.length, d = ib, e = 0; e < c; e++) { if (!d(a[e], b[e])) return !1; }
        return !0;
    };
    ib = function (a, b) {
        return a === b;
    };
    _.kb = function (a, b, c) {
        for (const d in a) b.call(c, a[d], d, a);
    };
    _.lb = function (a) {
        const b = [];
        let c = 0;
        let d;
        for (d in a) b[c++] = d;
        return b;
    };
    mb = function (a, b) {
        let c = _.Ga(b);
        const d = c ? b : arguments;
        for (c = c ? 0 : 1; c < d.length; c++) {
            if (a == null) return;
            a = a[d[c]];
        }
        return a;
    };
    _.nb = function (a, b) {
        return a !== null && b in a;
    };
    _.ob = function (a, b) {
        for (const c in a) { if (a[c] == b) return !0; }
        return !1;
    };
    _.pb = function (a) {
        for (const b in a) return !1;
        return !0;
    };
    _.qb = function (a) {
        const b = {};
        let c;
        for (c in a) b[c] = a[c];
        return b;
    };
    rb = function (a) {
        if (!a || typeof a !== 'object') return a;
        if (typeof a.clone === 'function') return a.clone();
        if (typeof Map !== 'undefined' && a instanceof Map) return new Map(a);
        if (typeof Set !== 'undefined' && a instanceof Set) return new Set(a);
        const b = Array.isArray(a) ? [] : typeof ArrayBuffer !== 'function' || typeof ArrayBuffer.isView !== 'function' || !ArrayBuffer.isView(a) || a instanceof DataView ? {} : new a.constructor(a.length);
        let c;
        for (c in a) b[c] = rb(a[c]);
        return b;
    };
    _.tb = function (a, b) {
        for (var c, d, e = 1; e < arguments.length; e++) {
            d = arguments[e];
            for (c in d) a[c] = d[c];
            for (let f = 0; f < sb.length; f++) c = sb[f], Object.prototype.hasOwnProperty.call(d, c) && (a[c] = d[c]);
        }
    };
    xb = function () {
        if (void 0 === wb) {
            let a = null;
            const b = _.u.trustedTypes;
            if (b && b.createPolicy) {
                try {
                    a = b.createPolicy('goog#html', {
                        createHTML: Ra,
                        createScript: Ra,
                        createScriptURL: Ra,
                    });
                } catch (c) {
                    _.u.console && _.u.console.error(c.message);
                }
                wb = a;
            } else wb = a;
        }
        return wb;
    };
    Ab = function (a, b) {
        this.j = a === yb && b || '';
        this.l = zb;
    };
    _.Bb = function (a) {
        if (a instanceof Ab && a.constructor === Ab && a.l === zb) return a.j;
        _.Va(`expected object of type Const, got '${a}'`);
        return 'type_error:Const';
    };
    _.Cb = function (a) {
        return new Ab(yb, a);
    };
    Eb = function (a, b) {
        this.j = b === Db ? a : '';
        this.Ub = !0;
    };
    Hb = function (a, b) {
        this.j = b === Fb ? a : '';
    };
    _.Ib = function (a) {
        if (a instanceof Hb && a.constructor === Hb) return a.j;
        _.Va(`expected object of type TrustedResourceUrl, got '${a}' of type ${_.Fa(a)}`);
        return 'type_error:TrustedResourceUrl';
    };
    _.Jb = function (a) {
        const b = xb();
        a = b ? b.createScriptURL(a) : a;
        return new Hb(a, Fb);
    };
    _.Kb = function (a, b) {
        return a.lastIndexOf(b, 0) == 0;
    };
    Mb = function (a, b) {
        return Lb(b, a.slice(0, b.length)) == 0;
    };
    Nb = function (a, b) {
        return Lb(b, a.slice(a.length - b.length)) == 0;
    };
    Lb = function (a, b) {
        a = String(a).toLowerCase();
        b = String(b).toLowerCase();
        return a < b ? -1 : a == b ? 0 : 1;
    };
    _.Ob = function (a, b) {
        return a.toLowerCase().indexOf(b.toLowerCase()) != -1;
    };
    _.Rb = function (a, b) {
        let c = 0;
        a = (0, _.Pb)(String(a)).split('.');
        b = (0, _.Pb)(String(b)).split('.');
        for (let d = Math.max(a.length, b.length), e = 0; c == 0 && e < d; e++) {
            let f = a[e] || '';
            let g = b[e] || '';
            do {
                f = /(\d*)(\D*)(.*)/.exec(f) || ['', '', '', ''];
                g = /(\d*)(\D*)(.*)/.exec(g) || ['', '', '', ''];
                if (f[0].length == 0 && g[0].length == 0) break;
                c = Qb(f[1].length == 0 ? 0 : parseInt(f[1], 10), g[1].length == 0 ? 0 : parseInt(g[1], 10)) || Qb(f[2].length == 0, g[2].length == 0) || Qb(f[2], g[2]);
                f = f[3];
                g = g[3];
            } while (c == 0);
        }
        return c;
    };
    Qb = function (a, b) {
        return a < b ? -1 : a > b ? 1 : 0;
    };
    _.Tb = function (a, b) {
        this.j = b === _.Sb ? a : '';
    };
    _.Ub = function (a) {
        if (a instanceof _.Tb && a.constructor === _.Tb) return a.j;
        _.Va(`expected object of type SafeUrl, got '${a}' of type ${_.Fa(a)}`);
        return 'type_error:SafeUrl';
    };
    Wb = function (a, b) {
        this.j = b === Vb ? a : '';
        this.Ub = !0;
    };
    _.Xb = function () {
        let a = _.u.navigator;
        return a && (a = a.userAgent) ? a : '';
    };
    _.y = function (a) {
        return _.Xb().indexOf(a) != -1;
    };
    ac = function () {
        return _.y('Safari') && !(Yb() || _.y('Coast') || _.y('Opera') || _.y('Edge') || _.y('Edg/') || _.y('OPR') || _.y('Firefox') || _.y('FxiOS') || _.y('Silk') || _.y('Android'));
    };
    Yb = function () {
        return (_.y('Chrome') || _.y('CriOS')) && !_.y('Edge') || _.y('Silk');
    };
    cc = function (a, b) {
        this.j = b === bc ? a : '';
        this.Ub = !0;
    };
    _.dc = function (a) {
        if (a instanceof cc && a.constructor === cc) return a.j;
        _.Va(`expected object of type SafeHtml, got '${a}' of type ${_.Fa(a)}`);
        return 'type_error:SafeHtml';
    };
    _.nc = function (a) {
        if (a instanceof cc) return a;
        a = typeof a === 'object' && a.Ub ? a.vb() : String(a);
        ec.test(a) && (a.indexOf('&') != -1 && (a = a.replace(fc, '&amp;')), a.indexOf('<') != -1 && (a = a.replace(hc, '&lt;')), a.indexOf('>') != -1 && (a = a.replace(ic, '&gt;')), a.indexOf('"') != -1 && (a = a.replace(jc, '&quot;')), a.indexOf("'") != -1 && (a = a.replace(kc, '&#39;')), a.indexOf('\x00') != -1 && (a = a.replace(lc, '&#0;')));
        return _.mc(a);
    };
    _.mc = function (a) {
        const b = xb();
        a = b ? b.createHTML(a) : a;
        return new cc(a, bc);
    };
    qc = function (a, b) {
        b = _.mc(_.Bb(b));
        if (a.tagName && oc[a.tagName.toUpperCase()]) throw Error(`goog.dom.safe.setInnerHtml cannot be used to set content of ${a.tagName}.`);
        if (pc()) { for (; a.lastChild;) a.removeChild(a.lastChild); }
        a.innerHTML = _.dc(b);
    };
    rc = function (a) {
        a && typeof a.ea === 'function' && a.ea();
    };
    _.z = function () {
        this.H = this.H;
        this.F = this.F;
    };
    _.sc = function (a, b) {
        b = Oa(rc, b);
        a.H ? b() : (a.F || (a.F = []), a.F.push(b));
    };
    _.A = function (a, b) {
        this.type = a;
        this.j = this.target = b;
        this.defaultPrevented = !1;
    };
    tc = function (a) {
        tc[' '](a);
        return a;
    };
    _.uc = function (a, b) {
        try {
            return tc(a[b]), !0;
        } catch (c) { }
        return !1;
    };
    wc = function (a, b) {
        const c = vc;
        return Object.prototype.hasOwnProperty.call(c, a) ? c[a] : c[a] = b(a);
    };
    xc = function () {
        const a = _.u.document;
        return a ? a.documentMode : void 0;
    };
    _.zc = function (a) {
        return wc(a, function () {
            return _.Rb(yc, a) >= 0;
        });
    };
    Cc = function (a, b) {
        _.A.call(this, a ? a.type : '');
        this.relatedTarget = this.j = this.target = null;
        this.button = this.screenY = this.screenX = this.clientY = this.clientX = 0;
        this.key = '';
        this.keyCode = 0;
        this.metaKey = this.shiftKey = this.altKey = this.ctrlKey = !1;
        this.state = null;
        this.pointerId = 0;
        this.pointerType = '';
        this.o = null;
        if (a) {
            const c = this.type = a.type;
            const d = a.changedTouches && a.changedTouches.length ? a.changedTouches[0] : null;
            this.target = a.target || a.srcElement;
            this.j = b;
            (b = a.relatedTarget) ? Ac && (_.uc(b, 'nodeName') || (b = null)) : c
                == 'mouseover' ? b = a.fromElement : c == 'mouseout' && (b = a.toElement);
            this.relatedTarget = b;
            d ? (this.clientX = void 0 !== d.clientX ? d.clientX : d.pageX, this.clientY = void 0 !== d.clientY ? d.clientY : d.pageY, this.screenX = d.screenX || 0, this.screenY = d.screenY || 0) : (this.clientX = void 0 !== a.clientX ? a.clientX : a.pageX, this.clientY = void 0 !== a.clientY ? a.clientY : a.pageY, this.screenX = a.screenX || 0, this.screenY = a.screenY || 0);
            this.button = a.button;
            this.keyCode = a.keyCode || 0;
            this.key = a.key || '';
            this.ctrlKey = a.ctrlKey;
            this.altKey = a.altKey;
            this.shiftKey = a.shiftKey;
            this.metaKey = a.metaKey;
            this.pointerId = a.pointerId || 0;
            this.pointerType = typeof a.pointerType === 'string' ? a.pointerType : Bc[a.pointerType] || '';
            this.state = a.state;
            this.o = a;
            a.defaultPrevented && Cc.yb.l.call(this);
        }
    };
    _.Ec = function (a) {
        return !(!a || !a[Dc]);
    };
    Gc = function (a, b, c, d, e) {
        this.listener = a;
        this.proxy = null;
        this.src = b;
        this.type = c;
        this.capture = !!d;
        this.Ue = e;
        this.key = ++Fc;
        this.be = this.Be = !1;
    };
    Hc = function (a) {
        a.be = !0;
        a.listener = null;
        a.proxy = null;
        a.src = null;
        a.Ue = null;
    };
    Ic = function (a) {
        this.src = a;
        this.listeners = {};
        this.j = 0;
    };
    Jc = function (a, b) {
        const c = b.type;
        c in a.listeners && _.db(a.listeners[c], b) && (Hc(b), a.listeners[c].length == 0 && (delete a.listeners[c], a.j--));
    };
    Kc = function (a, b, c, d) {
        for (let e = 0; e < a.length; ++e) {
            const f = a[e];
            if (!f.be && f.listener == b && f.capture == !!c && f.Ue == d) return e;
        }
        return -1;
    };
    _.Nc = function (a, b, c, d, e) {
        if (d && d.once) return _.Lc(a, b, c, d, e);
        if (Array.isArray(b)) {
            for (let f = 0; f < b.length; f++) _.Nc(a, b[f], c, d, e);
            return null;
        }
        c = _.Oc(c);
        return _.Ec(a) ? a.listen(b, c, _.Ha(d) ? !!d.capture : !!d, e) : Qc(a, b, c, !1, d, e);
    };
    Qc = function (a, b, c, d, e, f) {
        if (!b) throw Error('Invalid event type');
        const g = _.Ha(e) ? !!e.capture : !!e;
        let k = _.Rc(a);
        k || (a[Sc] = k = new Ic(a));
        c = k.add(b, c, d, g, f);
        if (c.proxy) return c;
        d = Tc();
        c.proxy = d;
        d.src = a;
        d.listener = c;
        if (a.addEventListener) Uc || (e = g), void 0 === e && (e = !1), a.addEventListener(b.toString(), d, e);
        else if (a.attachEvent) a.attachEvent(Vc(b.toString()), d);
        else if (a.addListener && a.removeListener) a.addListener(d);
        else throw Error('addEventListener and attachEvent are unavailable.');
        Wc++;
        return c;
    };
    Tc = function () {
        function a(c) {
            return b.call(a.src, a.listener, c);
        }
        var b = Xc;
        return a;
    };
    _.Lc = function (a, b, c, d, e) {
        if (Array.isArray(b)) {
            for (let f = 0; f < b.length; f++) _.Lc(a, b[f], c, d, e);
            return null;
        }
        c = _.Oc(c);
        return _.Ec(a) ? a.listenOnce(b, c, _.Ha(d) ? !!d.capture : !!d, e) : Qc(a, b, c, !0, d, e);
    };
    Yc = function (a, b, c, d, e) {
        if (Array.isArray(b)) { for (let f = 0; f < b.length; f++) Yc(a, b[f], c, d, e); } else d = _.Ha(d) ? !!d.capture : !!d, c = _.Oc(c), _.Ec(a) ? a.unlisten(b, c, d, e) : a && (a = _.Rc(a)) && (b = a.Ud(b, c, d, e)) && _.Zc(b);
    };
    _.Zc = function (a) {
        if (typeof a !== 'number' && a && !a.be) {
            const b = a.src;
            if (_.Ec(b)) Jc(b.D, a);
            else {
                let c = a.type;
                const d = a.proxy;
                b.removeEventListener ? b.removeEventListener(c, d, a.capture) : b.detachEvent ? b.detachEvent(Vc(c), d) : b.addListener && b.removeListener && b.removeListener(d);
                Wc--;
                (c = _.Rc(b)) ? (Jc(c, a), c.j == 0 && (c.src = null, b[Sc] = null)) : Hc(a);
            }
        }
    };
    Vc = function (a) {
        return a in $c ? $c[a] : $c[a] = `on${a}`;
    };
    Xc = function (a, b) {
        if (a.be) a = !0;
        else {
            b = new Cc(b, this);
            const c = a.listener;
            const d = a.Ue || a.src;
            a.Be && _.Zc(a);
            a = c.call(d, b);
        }
        return a;
    };
    _.Rc = function (a) {
        a = a[Sc];
        return a instanceof Ic ? a : null;
    };
    _.Oc = function (a) {
        if (typeof a === 'function') return a;
        a[ad] || (a[ad] = function (b) {
            return a.handleEvent(b);
        });
        return a[ad];
    };
    _.bd = function () {
        _.z.call(this);
        this.D = new Ic(this);
        this.ia = this;
        this.I = null;
    };
    cd = function (a, b, c, d) {
        b = a.D.listeners[String(b)];
        if (!b) return !0;
        b = b.concat();
        for (var e = !0, f = 0; f < b.length; ++f) {
            const g = b[f];
            if (g && !g.be && g.capture == c) {
                const k = g.listener;
                const l = g.Ue || g.src;
                g.Be && Jc(a.D, g);
                e = !1 !== k.call(l, d) && e;
            }
        }
        return e && !d.defaultPrevented;
    };
    dd = function (a, b) {
        this.name = a;
        this.value = b;
    };
    ed = function () {
        this.clear();
    };
    gd = function (a, b, c) {
        this.j = void 0;
        this.reset(a || fd, b, c, void 0, void 0);
    };
    hd = function (a, b) {
        this.level = null;
        this.j = [];
        this.parent = (void 0 === b ? null : b) || null;
        this.children = [];
        this.tc = {
            j() {
                return a;
            },
        };
    };
    id = function (a) {
        if (a.level) return a.level;
        if (a.parent) return id(a.parent);
        _.Va('Root logger has no level set.');
        return fd;
    };
    jd = function (a, b) {
        for (; a;) {
            a.j.forEach(function (c) {
                c(b);
            }), a = a.parent;
        }
    };
    ld = function () {
        this.entries = {};
        const a = new hd('');
        a.level = kd;
        this.entries[''] = a;
    };
    md = function (a, b) {
        let c = a.entries[b];
        if (c) return c;
        c = md(a, b.slice(0, Math.max(b.lastIndexOf('.'), 0)));
        const d = new hd(b, c);
        a.entries[b] = d;
        c.children.push(d);
        return d;
    };
    od = function () {
        nd || (nd = new ld());
        return nd;
    };
    _.B = function (a) {
        return md(od(), a).tc;
    };
    qd = function (a, b, c, d) {
        let e;
        if (e = a) {
            if (e = a && b) {
                e = b.value;
                const f = a ? id(md(od(), a.j())) : fd;
                e = e >= f.value;
            }
        } e && (b = b || fd, e = md(od(), a.j()), typeof c === 'function' && (c = c()), pd || (pd = new ed()), a = new gd(b, c, a.j()), a.j = d, jd(e, a));
    };
    _.D = function (a, b, c) {
        a && qd(a, rd, b, c);
    };
    _.F = function (a, b, c) {
        a && qd(a, sd, b, c);
    };
    _.G = function (a, b) {
        a && qd(a, td, b);
    };
    _.vd = function (a, b) {
        a && qd(a, ud, b);
    };
    wd = function (a, b) {
        this.o = a;
        this.A = b;
        this.l = 0;
        this.j = null;
    };
    xd = function (a, b) {
        a.A(b);
        a.l < 100 && (a.l++, b.next = a.j, a.j = b);
    };
    yd = function (a, b, c) {
        return a + c * (b - a);
    };
    _.Ad = function (a, b) {
        if (!Number.isFinite(a)) return String(a);
        a = String(a);
        let c = a.indexOf('.'); c === -1 && (c = a.length);
        const d = a[0] === '-' ? '-' : '';
        d && (a = a.substring(1));
        return d + zd('0', Math.max(0, b - c)) + a;
    };
    Bd = function (a) {
        return String(a).replace(/\-([a-z])/g, function (b, c) {
            return c.toUpperCase();
        });
    };
    Cd = function (a) {
        return String(a).replace(/([A-Z])/g, '-$1').toLowerCase();
    };
    _.Dd = function (a, b) {
        b = String(b);
        a.contentType === 'application/xhtml+xml' && (b = b.toLowerCase());
        return a.createElement(b);
    };
    Ed = function (a, b) {
        const c = b.parentNode;
        c && c.replaceChild(a, b);
    };
    Fd = function () {
        let a = _.u.MessageChannel;
        typeof a === 'undefined' && typeof window !== 'undefined' && window.postMessage && window.addEventListener && !_.y('Presto') && (a = function () {
            let e = _.Dd(document, 'IFRAME');
            e.style.display = 'none';
            document.documentElement.appendChild(e);
            const f = e.contentWindow;
            e = f.document;
            e.open();
            e.close();
            const g = `callImmediate${Math.random()}`;
            const k = f.location.protocol == 'file:' ? '*' : `${f.location.protocol}//${f.location.host}`;
            e = (0, _.Na)(function (l) {
                if ((k == '*' || l.origin == k) && l.data == g) this.port1.onmessage();
            },
            this);
            f.addEventListener('message', e, !1);
            this.port1 = {};
            this.port2 = {
                postMessage() {
                    f.postMessage(g, k);
                },
            };
        });
        if (typeof a !== 'undefined' && !_.y('Trident') && !_.y('MSIE')) {
            const b = new a();
            let c = {};
            let d = c;
            b.port1.onmessage = function () {
                if (void 0 !== c.next) {
                    c = c.next;
                    const e = c.xj;
                    c.xj = null;
                    e();
                }
            };
            return function (e) {
                d.next = {
                    xj: e,
                };
                d = d.next;
                b.port2.postMessage(0);
            };
        }
        return function (e) {
            _.u.setTimeout(e, 0);
        };
    };
    Gd = function (a) {
        _.u.setTimeout(function () {
            throw a;
        }, 0);
    };
    Hd = function () {
        this.l = this.j = null;
    };
    Id = function () {
        this.next = this.scope = this.j = null;
    };
    Nd = function (a, b) {
        Jd || Kd();
        Ld || (Jd(), Ld = !0);
        Md.add(a, b);
    };
    Kd = function () {
        if (_.u.Promise && _.u.Promise.resolve) {
            const a = _.u.Promise.resolve(void 0);
            Jd = function () {
                a.then(Od);
            };
        } else {
            Jd = function () {
                const b = Od;
                typeof _.u.setImmediate !== 'function' || _.u.Window && _.u.Window.prototype && !_.y('Edge') && _.u.Window.prototype.setImmediate == _.u.setImmediate ? (Pd || (Pd = Fd()), Pd(b)) : _.u.setImmediate(b);
            };
        }
    };
    Od = function () {
        for (var a; a = Md.remove();) {
            try {
                a.j.call(a.scope);
            } catch (b) {
                Gd(b);
            }
            xd(Qd, a);
        }
        Ld = !1;
    };
    Ud = function (a) {
        this.j = 0;
        this.F = void 0;
        this.A = this.l = this.o = null;
        this.B = this.D = !1;
        if (a != _.Xa) {
            try {
                const b = this;
                a.call(void 0, function (c) {
                    Rd(b, 2, c);
                }, function (c) {
                    if (!(c instanceof Td)) {
                        try {
                            if (c instanceof Error) throw c;
                            throw Error('Promise rejected.');
                        } catch (d) { }
                    }
                    Rd(b, 3, c);
                });
            } catch (c) {
                Rd(this, 3, c);
            }
        }
    };
    Vd = function () {
        this.next = this.context = this.onRejected = this.o = this.j = null;
        this.l = !1;
    };
    Xd = function (a, b, c) {
        const d = Wd.get();
        d.o = a;
        d.onRejected = b;
        d.context = c;
        return d;
    };
    _.H = function (a) {
        if (a instanceof Ud) return a;
        const b = new Ud(_.Xa);
        Rd(b, 2, a);
        return b;
    };
    Yd = function (a) {
        return new Ud(function (b, c) {
            c(a);
        });
    };
    $d = function (a, b, c) {
        Zd(a, b, c, null) || Nd(Oa(b, a));
    };
    ae = function (a) {
        return new Ud(function (b, c) {
            let d = a.length;
            const e = [];
            if (d) {
                for (var f = function (m, n) {
                        d--;
                        e[m] = n;
                        d == 0 && b(e);
                    }, g = function (m) {
                        c(m);
                    }, k = 0, l; k < a.length; k++) l = a[k], $d(l, Oa(f, k), g);
            } else b(e);
        });
    };
    be = function (a) {
        return new Ud(function (b) {
            let c = a.length;
            const d = [];
            if (c) {
                for (var e = function (k, l, m) {
                        c--;
                        d[k] = l ? {
                            Lg: !0,
                            value: m,
                        } : {
                            Lg: !1,
                            reason: m,
                        };
                        c == 0 && b(d);
                    }, f = 0, g; f < a.length; f++) g = a[f], $d(g, Oa(e, f, !0), Oa(e, f, !1));
            } else b(d);
        });
    };
    de = function () {
        let a; let b; const
            c = new Ud(function (d, e) {
                a = d;
                b = e;
            });
        return new ce(c, a, b);
    };
    fe = function (a, b) {
        b = Xd(b, b);
        b.l = !0;
        ee(a, b);
        return a;
    };
    he = function (a, b) {
        return ge(a, null, b);
    };
    ie = function (a, b) {
        if (a.j == 0) {
            if (a.o) {
                const c = a.o;
                if (c.l) {
                    for (var d = 0, e = null, f = null, g = c.l; g && (g.l || (d++, g.j == a && (e = g), !(e && d > 1))); g = g.next) e || (f = g);
                    e && (c.j == 0 && d == 1 ? ie(c, b) : (f ? (d = f, d.next == c.A && (c.A = d), d.next = d.next.next) : je(c), ke(c, e, 3, b)));
                }
                a.o = null;
            } else Rd(a, 3, b);
        }
    };
    ee = function (a, b) {
        a.l || a.j != 2 && a.j != 3 || le(a);
        a.A ? a.A.next = b : a.l = b;
        a.A = b;
    };
    ge = function (a, b, c, d) {
        const e = Xd(null, null, null);
        e.j = new Ud(function (f, g) {
            e.o = b ? function (k) {
                try {
                    const l = b.call(d, k);
                    f(l);
                } catch (m) {
                    g(m);
                }
            } : f;
            e.onRejected = c ? function (k) {
                try {
                    const l = c.call(d, k);
                    void 0 === l && k instanceof Td ? g(k) : f(l);
                } catch (m) {
                    g(m);
                }
            } : g;
        });
        e.j.o = a;
        ee(a, e);
        return e.j;
    };
    Rd = function (a, b, c) {
        a.j == 0 && (a === c && (b = 3, c = new TypeError('Promise cannot resolve to itself')), a.j = 1, Zd(c, a.G, a.I, a) || (a.F = c, a.j = b, a.o = null, le(a), b != 3 || c instanceof Td || me(a, c)));
    };
    Zd = function (a, b, c, d) {
        if (a instanceof Ud) return ee(a, Xd(b || _.Xa, c || null, d)), !0;
        if (a) {
            try {
                var e = !!a.$goog_Thenable;
            } catch (g) {
                e = !1;
            }
        } else e = !1;
        if (e) return a.then(b, c, d), !0;
        if (_.Ha(a)) {
            try {
                const f = a.then;
                if (typeof f === 'function') return ne(a, f, b, c, d), !0;
            } catch (g) {
                return c.call(d, g), !0;
            }
        }
        return !1;
    };
    ne = function (a, b, c, d, e) {
        function f(l) {
            k || (k = !0, d.call(e, l));
        }

        function g(l) {
            k || (k = !0, c.call(e, l));
        }
        var k = !1;
        try {
            b.call(a, g, f);
        } catch (l) {
            f(l);
        }
    };
    le = function (a) {
        a.D || (a.D = !0, Nd(a.H, a));
    };
    je = function (a) {
        let b = null;
        a.l && (b = a.l, a.l = b.next, b.next = null);
        a.l || (a.A = null);
        return b;
    };
    ke = function (a, b, c, d) {
        if (c == 3 && b.onRejected && !b.l) { for (; a && a.B; a = a.o) a.B = !1; }
        if (b.j) b.j.o = null, oe(b, c, d);
        else {
            try {
                b.l ? b.o.call(b.context) : oe(b, c, d);
            } catch (e) {
                pe.call(null, e);
            }
        }
        xd(Wd, b);
    };
    oe = function (a, b, c) {
        b == 2 ? a.o.call(a.context, c) : a.onRejected && a.onRejected.call(a.context, c);
    };
    me = function (a, b) {
        a.B = !0;
        Nd(function () {
            a.B && pe.call(null, b);
        });
    };
    Td = function (a) {
        Ta.call(this, a);
    };
    ce = function (a, b, c) {
        this.promise = a;
        this.resolve = b;
        this.reject = c;
    };
    _.qe = function (a, b, c) {
        if (typeof a === 'function') c && (a = (0, _.Na)(a, c));
        else if (a && typeof a.handleEvent === 'function') a = (0, _.Na)(a.handleEvent, a);
        else throw Error('Invalid listener argument');
        return Number(b) > 2147483647 ? -1 : _.u.setTimeout(a, b || 0);
    };
    se = function (a) {
        _.bd.call(this);
        a || (a = {});
        this.o = a.cr != 0;
        this.l = a.ix || re;
        this.A = a.binaryType || 'blob';
        this.j = this.l(this.ae);
    };
    re = function (a) {
        return Math.min(1E3 * Math.pow(2, a), 6E4);
    };
    te = function (a, b, c) {
        _.A.call(this, 'a');
        this.code = a;
        this.reason = b;
        this.wasClean = c;
    };
    ue = function (a) {
        _.A.call(this, 'c');
        this.message = a;
    };
    ve = function (a) {
        _.A.call(this, 'b');
        this.data = a;
    };
    we = function () {
        this.l = new _.bd();
        this.j = !1;
    };
    xe = function (a, b) {
        b = typeof b === 'string' ? new _.A(b) : b;
        b.target = a;
        a.l.dispatchEvent(b);
    };
    ye = function () {
        this.j = null;
    };
    ze = function (a) {
        a.j = a.j || cast.receiver.platform.Ra('receiver-flags') || null;
        return a.j;
    };
    Ae = function (a, b) {
        a = ze(a);
        return !(!a || !a[b]);
    };
    Be = function () {
        const a = cast.receiver.Kb.M();
        return Ae(a, 'enable_dpad_ui');
    };
    Ce = function () {
        const a = cast.receiver.Kb.M();
        return Ae(a, 'enable_new_media_controls_overlay');
    };
    De = function () {
        const a = cast.receiver.Kb.M();
        return Ae(a, 'enable_media_browse_suggestion_chips');
    };
    Ee = function () {
        const a = cast.receiver.Kb.M();
        return Ae(a, 'reject_duplicate_break_ids');
    };
    Fe = function () {
        const a = cast.receiver.Kb.M();
        return Ae(a, 'fix_timeline_update_logic');
    };
    Ge = function () {
        const a = cast.receiver.Kb.M();
        return Ae(a, 'enable_unpause_playback_on_transfer');
    };
    He = function () {
        let a = cast.receiver.Kb.M();
        return (a = ze(a)) && a.shaka_version_for_t_release || null;
    };
    Ie = function () {
        this.playbackType = 0;
        this.deviceName = '';
    };
    Je = function (a) {
        return Mb(a, 'text/') || a === 'application/ttml+xml';
    };
    Ke = function (a) {
        if (!a) return 100;
        switch (a.code) {
            case MediaError.MEDIA_ERR_ABORTED:
                return 101;
            case MediaError.MEDIA_ERR_NETWORK:
                return 103;
            case MediaError.MEDIA_ERR_DECODE:
                return 102;
            case MediaError.MEDIA_ERR_SRC_NOT_SUPPORTED:
                return 104;
            default:
                return 100;
        }
    };
    Le = function () {
        this.contentId = '';
        this.contentUrl = void 0;
        this.streamType = 'NONE';
        this.mediaCategory = void 0;
        this.contentType = '';
        this.userActionStates = this.vmapAdsRequest = this.hlsVideoSegmentFormat = this.hlsSegmentFormat = this.breakClips = this.breaks = this.customData = this.textTrackStyle = this.tracks = this.startAbsoluteTime = this.duration = this.entity = this.metadata = void 0;
    };
    Me = function () {
        this.repeatMode = this.description = this.name = this.queueType = this.entity = this.id = void 0;
        this.shuffle = !1;
        this.containerMetadata = this.startTime = this.startIndex = this.items = void 0;
    };
    Ne = function (a) {
        this.url = a;
        this.width = this.height = void 0;
    };
    Oe = function () {
        this.muted = this.level = void 0;
    };
    Pe = function (a, b, c) {
        this.width = a;
        this.height = b;
        this.hdrType = c;
    };
    Qe = function (a, b) {
        this.playerState = 'LOADING';
        this.media = a;
        this.mediaSessionId = b;
    };
    Re = function () {
        this.type = 'QUEUE_CHANGE';
        this.sequenceNumber = this.reorderItemIds = this.insertBefore = this.itemIds = this.changeType = this.requestId = void 0;
    };
    Se = function () {
        this.type = 'QUEUE_ITEMS';
        this.sequenceNumber = this.items = this.requestId = void 0;
    };
    Te = function () {
        this.type = 'QUEUE_ITEM_IDS';
        this.sequenceNumber = this.itemIds = this.requestId = void 0;
    };
    Ue = function (a, b) {
        this.currentBreakTime = a;
        this.currentBreakClipTime = b;
        this.whenSkippable = this.breakClipId = this.breakId = void 0;
    };
    Ve = function (a, b, c, d, e) {
        a = new Date(a, b, c);
        e = e || 0;
        return a.valueOf() + 864E5 * (((void 0 !== d ? d : 3) - e + 7) % 7 - ((a.getDay() + 6) % 7 - e + 7) % 7);
    };
    We = function () { };
    Ye = function (a) {
        if (typeof a === 'number') {
            var b = new We();
            b.B = a;
            let c = a;
            if (c == 0) c = 'Etc/GMT';
            else {
                var d = ['Etc/GMT', c < 0 ? '-' : '+'];
                c = Math.abs(c);
                d.push(Math.floor(c / 60) % 100);
                c %= 60;
                c != 0 && d.push(':', _.Ad(c, 2));
                c = d.join('');
            }
            b.o = c;
            c = a;
            c == 0 ? c = 'UTC' : (d = ['UTC', c < 0 ? '+' : '-'], c = Math.abs(c), d.push(Math.floor(c / 60) % 100), c %= 60, c != 0 && d.push(':', c), c = d.join(''));
            a = Xe(a);
            b.A = [c, c];
            b.j = {
                Ow: a,
                dj: a,
            };
            b.l = [];
            return b;
        }
        b = new We();
        b.o = a.id;
        b.B = -a.std_offset;
        b.A = a.names;
        b.j = a.names_ext;
        b.l = a.transitions;
        return b;
    };
    Xe = function (a) {
        const b = ['GMT'];
        b.push(a <= 0 ? '+' : '-');
        a = Math.abs(a);
        b.push(_.Ad(Math.floor(a / 60) % 100, 2), ':', _.Ad(a % 60, 2));
        return b.join('');
    };
    Ze = function (a, b) {
        b = Date.UTC(b.getUTCFullYear(), b.getUTCMonth(), b.getUTCDate(), b.getUTCHours(), b.getUTCMinutes()) / 36E5;
        for (var c = 0; c < a.l.length && b >= a.l[c];) c += 2;
        return c == 0 ? 0 : a.l[c - 1];
    };
    $e = function (a, b) {
        a = a.B - Ze(a, b);
        return a === -1440 ? 0 : a;
    };
    cf = function () {
        this.l = [];
        this.j = af;
        bf(this, 6);
    };
    df = function (a) {
        return a.getHours ? a.getHours() : 0;
    };
    bf = function (a, b) {
        if (b < 4) var c = a.j.Uf[b];
        else if (b < 8) c = a.j.fj[b - 4];
        else if (b < 12) c = a.j.El[b - 8], c = c.replace('{1}', a.j.Uf[b - 8]), c = c.replace('{0}', a.j.fj[b - 8]);
        else if (b === 12) c = a.j.Uf[0].replace(/[^EMd]*yy*[^EMd]*/, '');
        else {
            bf(a, 10);
            return;
        }
        b = c;
        for (ef && (b = b.replace(/\u200f/g, '')); b;) {
            c = b;
            for (let d = 0; d < ff.length; ++d) {
                const e = b.match(ff[d]);
                if (e) {
                    let f = e[0];
                    b = b.substring(f.length);
                    d == 0 && (f == "''" ? f = "'" : (f = f.substring(1, e[1] == "'" ? f.length - 1 : f.length), f = f.replace(/''/g, "'")));
                    a.l.push({
                        text: f,
                        type: d,
                    });
                    break;
                }
            }
            if (c
                === b) throw Error(`Malformed pattern part: ${b}`);
        }
    };
    gf = function (a, b) {
        b = String(b);
        a = a.j || af;
        if (void 0 !== a.Tq) {
            for (var c = [], d = 0; d < b.length; d++) {
                const e = b.charCodeAt(d);
                c.push(e >= 48 && e <= 57 ? String.fromCharCode(a.Tq + e - 48) : b.charAt(d));
            }
            b = c.join('');
        }
        return b;
    };
    hf = function (a) {
        if (!(a.getHours && a.getSeconds && a.getMinutes)) throw Error('The date to format has no time (probably a goog.date.Date). Use Date or goog.date.DateTime, or use a pattern without time fields.');
    };
    jf = function (a, b) {
        hf(b);
        b = df(b);
        return a.j.cl[b >= 12 && b < 24 ? 1 : 0];
    };
    kf = function (a, b, c, d, e, f) {
        let g = b.length;
        switch (b.charAt(0)) {
            case 'G':
                return c = d.getFullYear() > 0 ? 1 : 0, g >= 4 ? a.j.Pl[c] : a.j.Ql[c];
            case 'y':
                return c = d.getFullYear(), c < 0 && (c = -c), g == 2 && (c %= 100), gf(a, _.Ad(c, g));
            case 'Y':
                return c = (new Date(Ve(d.getFullYear(), d.getMonth(), d.getDate(), a.j.oi, a.j.ni))).getFullYear(), c < 0 && (c = -c), g == 2 && (c %= 100), gf(a, _.Ad(c, g));
            case 'M':
                switch (c = d.getMonth(), g) {
                    case 5:
                        g = a.j.Mo[c];
                        break;
                    case 4:
                        g = a.j.co[c];
                        break;
                    case 3:
                        g = a.j.fq[c];
                        break;
                    default:
                        g = gf(a, _.Ad(c + 1, g));
                }
                return g;
            case 'k':
                return hf(e), gf(a, _.Ad(df(e) || 24, g));
            case 'S':
                return gf(a, (e.getMilliseconds() / 1E3).toFixed(Math.min(3, g)).slice(2) + (g > 3 ? _.Ad(0, g - 3) : ''));
            case 'E':
                return c = d.getDay(), g >= 4 ? a.j.Sq[c] : a.j.hq[c];
            case 'a':
                return jf(a, e);
            case 'b':
                return jf(a, e);
            case 'B':
                return jf(a, e);
            case 'h':
                return hf(e), gf(a, _.Ad(df(e) % 12 || 12, g));
            case 'K':
                return hf(e), gf(a, _.Ad(df(e) % 12, g));
            case 'H':
                return hf(e), gf(a, _.Ad(df(e), g));
            case 'c':
                switch (c = d.getDay(), g) {
                    case 5:
                        g = a.j.mq[c];
                        break;
                    case 4:
                        g = a.j.qq[c];
                        break;
                    case 3:
                        g = a.j.oq[c];
                        break;
                    default:
                        g = gf(a, _.Ad(c, 1));
                }
                return g;
            case 'L':
                switch (c = d.getMonth(), g) {
                    case 5:
                        g = a.j.lq[c];
                        break;
                    case 4:
                        g = a.j.kq[c];
                        break;
                    case 3:
                        g = a.j.nq[c];
                        break;
                    default:
                        g = gf(a, _.Ad(c + 1, g));
                }
                return g;
            case 'Q':
                return c = Math.floor(d.getMonth() / 3), g < 4 ? a.j.gq[c] : a.j.tp[c];
            case 'd':
                return gf(a, _.Ad(d.getDate(), g));
            case 'm':
                return hf(e), gf(a, _.Ad(e.getMinutes ? e.getMinutes() : 0, g));
            case 's':
                return hf(e), gf(a, _.Ad(e.getSeconds(), g));
            case 'v':
                return (f || Ye(c.getTimezoneOffset())).o;
            case 'V':
                return a = f || Ye(c.getTimezoneOffset()), g <= 2 ? a.o : Ze(a, c) > 0 ? void 0 !== a.j.Il ? a.j.Il : a.j.DST_GENERIC_LOCATION : void 0 !== a.j.dj ? a.j.dj : a.j.STD_GENERIC_LOCATION;
            case 'w':
                return c = Ve(e.getFullYear(), e.getMonth(), e.getDate(), a.j.oi, a.j.ni), gf(a, _.Ad(Math.floor(Math.round((c - (new Date((new Date(c)).getFullYear(), 0, 1)).valueOf()) / 864E5) / 7) + 1, g));
            case 'z':
                return a = f || Ye(c.getTimezoneOffset()), g < 4 ? a.A[Ze(a, c) > 0 ? 2 : 0] : a.A[Ze(a, c) > 0 ? 3 : 1];
            case 'Z':
                return b = f || Ye(c.getTimezoneOffset()), g < 4 ? (g = -$e(b, c), a = [g < 0 ? '-' : '+'], g = Math.abs(g),
                a.push(_.Ad(Math.floor(g / 60) % 100, 2), _.Ad(g % 60, 2)), g = a.join('')) : g = gf(a, Xe($e(b, c))), g;
            default:
                return '';
        }
    };
    lf = function () {
        return Reflect.construct(HTMLElement, [], this.constructor);
    };
    mf = function () {
        const a = lf.call(this) || this;
        (0, cast.receiver.C.cm)(a.attachShadow ? a.attachShadow({
            mode: 'open',
        }) : a.createShadowRoot());
        a.j = null;
        a.o = a.shadowRoot.getElementById('loading-animation');
        a.l = a.shadowRoot.getElementById('image');
        return a;
    };
    nf = function (a, b) {
        if (b) {
            a.o.classList.add('start-animation');
            const c = cast.receiver.C.aa.Rd(b);
            a.j = c;
            c.then(function (d) {
                c === a.j && (a.o.classList.remove('start-animation'), d = cast.receiver.C.aa.Va(d), a.l.style.backgroundImage = d);
            });
        } else a.l.style.backgroundImage = '', a.j = null;
    };
    J = function (a, b) {
        a.style.display = b ? '' : 'none';
    };
    of = function () {
        const a = lf.call(this) || this;
        const b = a.attachShadow({
            mode: 'open',
        });
        Be() ? (0, cast.receiver.C.ll)(b) : (0, cast.receiver.C.kl)(b);
        a.A = b.getElementById('audio-player-glanceable');
        a.H = b.getElementById('title');
        a.G = b.getElementById('album');
        a.I = b.getElementById('artist');
        a.l = b.getElementById('album-art');
        a.D = b.getElementById('bg-image');
        a.j = b.getElementById('logo');
        a.J = b.getElementById('secondary-image');
        a.B = b.getElementById('shuffle-status');
        a.o = b.getElementById('repeat-status');
        a.F = b.getElementById('image-loader');
        return a;
    };
    pf = function (a, b) {
        if (b) {
            if (b.repeatMode) {
                let c = b.repeatMode;
                c === 'REPEAT_ALL_AND_SHUFFLE' && (c = 'REPEAT_ALL');
                a.o.dataset.state = c;
            } else a.o.dataset.state = 'REPEAT_OFF';
            J(a.B, b.shuffle);
        } else a.o.dataset.state = 'REPEAT_OFF', J(a.B, !1);
    };
    qf = function (a, b, c) {
        window.getComputedStyle(a.j, null).backgroundImage === 'none' && cast.receiver.C.aa.Rd(c).then(function () {
            a.j.textContent = '';
            a.j.style.backgroundImage = cast.receiver.C.aa.Va(c);
            a.j.classList.add('app-icon');
        }).catch(function () {
            a.j.style.backgroundImage = '';
            a.j.classList.remove('app-icon');
            a.j.textContent = b;
        });
    };
    rf = function () {
        this.title = void 0;
        this.items = [];
        this.targetAspectRatio = void 0;
    };
    sf = function (a) {
        this.entity = a;
        this.mediaBadge = this.imageType = this.duration = this.image = this.subtitle = this.title = void 0;
    };
    Af = function (a, b) {
        a: {
            if (b) {
                if (Mb(b, 'video/')) {
                    b = 'Video';
                    break a;
                }
                if (Mb(b, 'audio/')) {
                    b = 'Audio';
                    break a;
                }
            }
            b = void 0;
        }
        if (void 0 !== b) {
            K(`Cast.Shaka.Available${b}Bitrates`, a.length);
            for (let c = 0; c < a.length; c++) K(`Cast.Shaka.Available${b}Bitrate${c}`, a[c]);
        }
    };
    Bf = function (a, b) {
        cast.platform.metrics.logBoolToUma(a, b);
    };
    Df = function (a) {
        const b = cast.framework.common.analytics.K.Ep;
        a.split(',').forEach(function (c) {
            const d = Cf[c];
            K(b, d || (_.Kb(c, 'avc1') ? Cf.avc1 : _.Kb(c, 'mp4a.40') ? Cf['mp4a.40'] : _.Kb(c, 'hev1') ? Cf.hev1 : _.Kb(c, 'dvhe') ? Cf.dvhe : _.Kb(c, 'mhm1') ? Cf.mhm1 : Cf.Oo));
        });
    };
    Ef = function (a) {
        cast.platform.metrics.logEventToUma(a);
    };
    K = function (a, b) {
        cast.platform.metrics.logIntToUma(a, b);
    };
    Ff = function (a) {
        _.bd.call(this);
        this.o = a;
        this.l = 0;
        this.G = this.j = !1;
        this.A = !0;
        this.J = this.B = !1;
    };
    Hf = function (a, b) {
        a.G = b;
        Gf(a);
    };
    Jf = function (a, b) {
        a.A = b;
        a.A && (a.j = !1, If(a));
        Gf(a);
    };
    Kf = function (a) {
        const b = !a.G && !a.A && !a.B;
        return a.J ? b : a.j && b;
    };
    Gf = function (a) {
        Kf(a) || clearTimeout(a.l);
    };
    If = function (a) {
        a.dispatchEvent(new _.A('EXPIRED'));
    };
    Lf = function (a) {
        clearTimeout(a.l);
        a.l = setTimeout(function () {
            Kf(a) && a.dispatchEvent(new _.A('EXPIRED'));
        }, 1000000); //a.o);
    };
    _.Nf = function (a, b) {
        return /-[a-z]/.test(b) ? !1 : Mf && a.dataset ? b in a.dataset : a.hasAttribute ? a.hasAttribute(`data-${Cd(b)}`) : !!a.getAttribute(`data-${Cd(b)}`);
    };
    Sf = function () {
        const a = this;
        this.j = [];
        this.D = function () { };
        this.o = _.u.document;
        this.A = this.l = null;
        this.B = function (b) {
            Of(a, b.target);
        };
        this.F = function (b) {
            Pf(a);
            a.l || (a.D(), _.G(Qf, `Focus lost, ${Rf(b.relatedTarget ? b.relatedTarget : null)}`));
        };
    };
    Tf = function (a, b) {
        a.o && (a.o.removeEventListener('focusin', a.B), a.o.removeEventListener('focusout', a.F));
        a.o = b;
        b.addEventListener('focusin', a.B);
        b.addEventListener('focusout', a.F);
    };
    Uf = function (a, b) {
        if (b) {
            if (Mf && a.dataset) a.dataset.focusable = '';
            else {
                if (/-[a-z]/.test('focusable')) throw Error('"focusable" is not a valid dataset property name.');
                a.setAttribute(`data-${Cd('focusable')}`, '');
            }
            a.setAttribute('tabindex', -1);
        } else !/-[a-z]/.test('focusable') && (Mf && a.dataset ? _.Nf(a, 'focusable') && delete a.dataset.focusable : a.removeAttribute(`data-${Cd('focusable')}`)), a.removeAttribute('tabindex');
    };
    Vf = function (a) {
        return a ? typeof a.vj === 'function' ? a.vj() : a.style.display != 'none' && !a.disabled && a.hasAttribute('tabindex') && _.Nf(a, 'focusable') : !1;
    };
    Of = function (a, b) {
        b.classList.add('focused');
        a.l !== b ? _.F(Qf, `Wrong element focused: ${Rf(a.l)}, ${Rf(b)}`) : a.A = b;
        a.l = null;
        for (var c = []; b;) c.unshift(b), b = b.parentElement && b.parentElement.closest('[data-focusable]') || null;
        Pf(a);
        a.j = c;
        a.j.forEach(function (d) {
            d.classList.add('focused');
        });
    };
    Pf = function (a) {
        a.j.forEach(function (b) {
            b.classList.remove('focused');
        });
        a.j = [];
    };
    Rf = function (a) {
        if (!a) return 'no element';
        let b = a.tagName.toLowerCase();
        a.id && (b = [b, a.id].join('#'));
        (a = [].join.call(a.classList, '.')) && (b = [b, a].join('.'));
        return b;
    };
    Yf = function () {
        this.F = 40;
        this.j = 1;
        this.l = 3;
        this.H = this.o = 0;
        this.T = !1;
        this.O = this.L = '';
        this.G = Wf.Oi;
        this.I = '';
        this.A = 1;
        this.D = !1;
        this.B = [];
        this.J = this.R = !1;
        const a = Wf.Fl;
        a.replace(/ /g, '\u00a0');
        const b = [0];
        this.L = Xf(this, a, b);
        for (var c = b[0], d = -1, e = 0, f = 0, g = 0, k = -1, l = a.length, m = !0; b[0] < l && m; b[0]++) {
            switch (a.charAt(b[0])) {
                case '#':
                    f > 0 ? g++ : e++;
                    k >= 0 && d < 0 && k++;
                    break;
                case '0':
                    if (g > 0) throw Error(`Unexpected "0" in pattern "${a}"`);
                    f++;
                    k >= 0 && d < 0 && k++;
                    break;
                case ',':
                    k > 0 && this.B.push(k);
                    k = 0;
                    break;
                case '.':
                    if (d >= 0) {
                        throw Error(`Multiple decimal separators in pattern "${a}"`);
                    }
                    d = e + f + g;
                    break;
                case 'E':
                    if (this.J) throw Error(`Multiple exponential symbols in pattern "${a}"`);
                    this.J = !0;
                    this.H = 0;
                    b[0] + 1 < l && a.charAt(b[0] + 1) == '+' && (b[0]++, this.T = !0);
                    for (; b[0] + 1 < l && a.charAt(b[0] + 1) == '0';) b[0]++, this.H++;
                    if (e + f < 1 || this.H < 1) throw Error(`Malformed exponential pattern "${a}"`);
                    m = !1;
                    break;
                default:
                    b[0]--, m = !1;
            }
        }
        f == 0 && e > 0 && d >= 0 && (f = d, f == 0 && f++, g = e - f, e = f - 1, f = 1);
        if (d < 0 && g > 0 || d >= 0 && (d < e || d > e + f) || k == 0) throw Error(`Malformed pattern "${a}"`);
        g = e + f + g;
        this.l = d >= 0 ? g - d : 0;
        d >= 0 && (this.o = e
            + f - d, this.o < 0 && (this.o = 0));
        this.j = (d >= 0 ? d : g) - e;
        this.J && (this.F = e + this.j, this.l == 0 && this.j == 0 && (this.j = 1));
        this.B.push(Math.max(0, k));
        this.R = d == 0 || d == g;
        c = b[0] - c;
        this.O = Xf(this, a, b);
        b[0] < a.length && a.charAt(b[0]) == ';' ? (b[0]++, this.A != 1 && (this.D = !0), this.G = Xf(this, a, b), b[0] += c, this.I = Xf(this, a, b)) : (this.G += this.L, this.I += this.O);
    };
    $f = function (a, b, c, d) {
        if (a.o > a.l) throw Error('Min value must be less than max value');
        d || (d = []);
        let e = Zf(b, a.l);
        e = Math.round(e);
        isFinite(e) ? (b = Math.floor(Zf(e, -a.l)), e = Math.floor(e - Zf(b, a.l))) : e = 0;
        let f = b;
        let g = e;
        let k = a.o > 0 || g > 0 || !1;
        e = a.o;
        k && (e = a.o);
        let l = '';
        for (b = f; b > 1E20;) l = `0${l}`, b = Math.round(Zf(b, -1));
        l = b + l;
        let m = Wf.Gl;
        b = Wf.gj.charCodeAt(0);
        let n = l.length;
        let t = 0;
        if (f > 0 || c > 0) {
            for (f = n; f < c; f++) d.push(String.fromCharCode(b));
            if (a.B.length >= 2) { for (c = 1; c < a.B.length; c++) t += a.B[c]; }
            c = n - t;
            if (c > 0) {
                f = a.B;
                t = n = 0;
                for (var v,
                    x = Wf.ri, C = l.length, E = 0; E < C; E++) {
                    if (d.push(String.fromCharCode(b + 1 * Number(l.charAt(E)))), C - E > 1) {
                        if (v = f[t], E < c) {
                            const T = c - E;
                            (v === 1 || v > 0 && T % v === 1) && d.push(x);
                        } else t < f.length && (E === c ? t += 1 : v === E - c - n + 1 && (d.push(x), n += v, t += 1));
                    }
                }
            } else {
                c = l;
                l = a.B;
                f = Wf.ri;
                v = c.length;
                x = [];
                for (n = l.length - 1; n >= 0 && v > 0; n--) {
                    t = l[n];
                    for (C = 0; C < t && v - C - 1 >= 0; C++) x.push(String.fromCharCode(b + 1 * Number(c.charAt(v - C - 1))));
                    v -= t;
                    v > 0 && x.push(f);
                }
                d.push.apply(d, x.reverse());
            }
        } else k || d.push(String.fromCharCode(b));
        (a.R || k) && d.push(m);
        k = String(g);
        g = k.split('e+');
        if (g.length == 2) {
            if (k = parseFloat(g[0])) {
                m = k;
                if (isFinite(m)) {
                    for (c = 0; (m /= 10) >= 1;) c++;
                    m = c;
                } else m = m > 0 ? m : 0;
                m = 0 - m - 1;
                k = m < -1 ? k && isFinite(k) ? Zf(Math.round(Zf(k, -1)), 1) : k : k && isFinite(k) ? Zf(Math.round(Zf(k, m)), -m) : k;
            }
            k = String(k);
            k = k.replace('.', '');
            k += zd('0', parseInt(g[1], 10) - k.length + 1);
        }
        a.l + 1 > k.length && (k = `1${zd('0', a.l - k.length)}${k}`);
        for (a = k.length;
            k.charAt(a - 1) == '0' && a > e + 1;) a--;
        for (e = 1; e < a; e++) d.push(String.fromCharCode(b + 1 * Number(k.charAt(e))));
    };
    ag = function (a, b, c) {
        c.push(Wf.Ul);
        b < 0 ? (b = -b, c.push(Wf.Oi)) : a.T && c.push(Wf.jp);
        b = `${b}`;
        for (let d = Wf.gj, e = b.length; e < a.H; e++) c.push(d);
        c.push(b);
    };
    Xf = function (a, b, c) {
        for (var d = '', e = !1, f = b.length; c[0] < f; c[0]++) {
            let g = b.charAt(c[0]);
            if (g == "'") c[0] + 1 < f && b.charAt(c[0] + 1) == "'" ? (c[0]++, d += "'") : e = !e;
            else if (e) d += g;
            else {
                switch (g) {
                    case '#':
                    case '0':
                    case ',':
                    case '.':
                    case ';':
                        return d;
                    case '\u00a4':
                        c[0] + 1 < f && b.charAt(c[0] + 1) == '\u00a4' ? (c[0]++, d += Wf.ki) : (g = Wf.ki, d += g in bg ? bg[g][1] : g);
                        break;
                    case '%':
                        if (!a.D && a.A != 1) throw Error('Too many percent/permill');
                        if (a.D && a.A != 100) throw Error('Inconsistent use of percent/permill characters');
                        a.A = 100;
                        a.D = !1;
                        d += Wf.ap;
                        break;
                    case '\u2030':
                        if (!a.D && a.A != 1) throw Error('Too many percent/permill');
                        if (a.D && a.A != 1E3) throw Error('Inconsistent use of percent/permill characters');
                        a.A = 1E3;
                        a.D = !1;
                        d += Wf.bp;
                        break;
                    default:
                        d += g;
                }
            }
        }
        return d;
    };
    Zf = function (a, b) {
        if (!a || !isFinite(a) || b == 0) return a;
        a = String(a).split('e');
        return parseFloat(`${a[0]}e${parseInt(a[1] || 0, 10) + b}`);
    };
    cg = function (a) {
        return a % 10 == 1 && a % 100 != 11 ? 'one' : a % 10 == 2 && a % 100 != 12 ? 'two' : a % 10 == 3 && a % 100 != 13 ? 'few' : 'other';
    };
    dg = function (a, b) {
        if (void 0 === b) {
            b = `${a}`;
            var c = b.indexOf('.');
            b = Math.min(c === -1 ? 0 : b.length - c - 1, 3);
        }
        c = Math.pow(10, b);
        b = {
            Mf: b,
            f: (a * c | 0) % c,
        };
        return (a | 0) == 1 && b.Mf == 0 ? 'one' : 'other';
    };
    ig = function (a) {
        this.o = a;
        this.l = this.j = this.B = null;
        a = Wf;
        const b = eg;
        if (fg !== a || gg !== b) fg = a, gg = b, hg = new Yf();
        this.D = hg;
    };
    jg = function (a, b, c, d, e) {
        for (let f = 0; f < b.length; f++) {
            switch (b[f].type) {
                case 4:
                    e.push(b[f].value);
                    break;
                case 3:
                    var g = b[f].value;
                    var k = a;
                    var l = e;
                    var m = c[g];
                    void 0 === m ? l.push(`Undefined parameter - ${g}`) : (k.j.push(m), l.push(k.A(k.j)));
                    break;
                case 2:
                    g = b[f].value;
                    k = a;
                    l = c;
                    m = d;
                    var n = e;
                    var t = g.Ae;
                    void 0 === l[t] ? n.push(`Undefined parameter - ${t}`) : (t = g[l[t]], void 0 === t && (t = g.other), jg(k, t, l, m, n));
                    break;
                case 0:
                    g = b[f].value;
                    kg(a, g, c, lg, d, e);
                    break;
                case 1:
                    g = b[f].value;
                    kg(a, g, c, mg, d, e);
                    break;
                default:
                    _.Va(`Unrecognized block type: ${b[f].type}`);
            }
        }
    };
    kg = function (a, b, c, d, e, f) {
        let g = b.Ae;
        let k = b.sj;
        const l = +c[g];
        isNaN(l) ? f.push(`Undefined or invalid parameter - ${g}`) : (k = l - k, g = b[c[g]], void 0 === g && (d = d(Math.abs(k)), g = b[d], void 0 === g && (g = b.other)), b = [], jg(a, g, c, e, b), c = b.join(''), e ? f.push(c) : (a = a.D.format(k), f.push(c.replace(/#/g, a))));
    };
    pg = function (a, b) {
        const c = a.B;
        const d = (0, _.Na)(a.A, a);
        b = b.replace(ng, function () {
            c.push("'");
            return d(c);
        });
        return b = b.replace(og, function (e, f) {
            c.push(f);
            return d(c);
        });
    };
    qg = function (a) {
        let b = 0;
        const c = [];
        const d = [];
        const e = /[{}]/g;
        e.lastIndex = 0;
        for (var f; f = e.exec(a);) {
            const g = f.index;
            f[0] == '}' ? (c.pop(), c.length == 0 && (f = {
                type: 1,
            }, f.value = a.substring(b, g), d.push(f), b = g + 1)) : (c.length == 0 && (b = a.substring(b, g), b != '' && d.push({
                type: 0,
                value: b,
            }), b = g + 1), c.push('{'));
        }
        b = a.substring(b);
        b != '' && d.push({
            type: 0,
            value: b,
        });
        return d;
    };
    xg = function (a, b) {
        const c = [];
        b = qg(b);
        for (let d = 0; d < b.length; d++) {
            const e = {};
            if (b[d].type == 0) e.type = 4, e.value = b[d].value;
            else if (b[d].type == 1) {
                const f = b[d].value;
                switch (rg.test(f) ? 0 : sg.test(f) ? 1 : tg.test(f) ? 2 : /^\s*\w+\s*/.test(f) ? 3 : 5) {
                    case 2:
                        e.type = 2;
                        e.value = ug(a, b[d].value);
                        break;
                    case 0:
                        e.type = 0;
                        e.value = vg(a, b[d].value);
                        break;
                    case 1:
                        e.type = 1;
                        e.value = wg(a, b[d].value);
                        break;
                    case 3:
                        e.type = 3;
                        e.value = b[d].value;
                        break;
                    default:
                        _.Va(`Unknown block type for pattern: ${b[d].value}`);
                }
            } else _.Va('Unknown part of the pattern.');
            c.push(e);
        }
        return c;
    };
    ug = function (a, b) {
        let c = '';
        b = b.replace(tg, function (k, l) {
            c = l;
            return '';
        });
        const d = {};
        d.Ae = c;
        b = qg(b);
        for (let e = 0; e < b.length;) {
            const f = b[e].value;
            e++;
            var g;
            b[e].type == 1 ? g = xg(a, b[e].value) : _.Va('Expected block type.');
            d[f.replace(/\s/g, '')] = g;
            e++;
        }
        return d;
    };
    vg = function (a, b) {
        let c = '';
        let d = 0;
        b = b.replace(rg, function (l, m, n) {
            c = m;
            n && (d = parseInt(n, 10));
            return '';
        });
        const e = {};
        e.Ae = c;
        e.sj = d;
        b = qg(b);
        for (let f = 0; f < b.length;) {
            const g = b[f].value;
            f++;
            var k;
            b[f].type == 1 ? k = xg(a, b[f].value) : _.Va('Expected block type.');
            e[g.replace(/\s*(?:=)?(\w+)\s*/, '$1')] = k;
            f++;
        }
        return e;
    };
    wg = function (a, b) {
        let c = '';
        b = b.replace(sg, function (k, l) {
            c = l;
            return '';
        });
        const d = {};
        d.Ae = c;
        d.sj = 0;
        b = qg(b);
        for (let e = 0; e < b.length;) {
            const f = b[e].value;
            e++;
            if (b[e].type == 1) var g = xg(a, b[e].value);
            else _.Va('Expected block type.');
            d[f.replace(/\s*(?:=)?(\w+)\s*/, '$1')] = g;
            e++;
        }
        return d;
    };
    yg = function () {
        const a = lf.call(this) || this;
        (0, cast.receiver.C.ml)(a);
        a.O = Sf.M();
        a.H = Ff.M();
        a.o = !1;
        a.B = function () { };
        a.F = 0;
        a.A = a.querySelector('#break-countdown');
        a.J = a.A.querySelector('#break-countdown-text');
        a.D = a.A.querySelector('#break-clip-index-text');
        a.j = a.querySelector('#break-skip-btn');
        a.l = a.querySelector('#break-skip-btn-countdown');
        a.L = a.l.querySelector('#skip-ad-btn-countdown-text');
        a.A.querySelector('#ad-label').textContent = cast.receiver.Y.Ri;
        a.j.querySelector('#skip-ad-btn-text').textContent = cast.receiver.Y.Fo;
        a.j.addEventListener('touchstart', function (b) {
            b.stopPropagation();
        });
        a.j.addEventListener('click', function () {
            cast.receiver.C.X.ya(cast.receiver.C.X.Lb.SKIP_AD);
            a.B();
        });
        Be() && a.j.addEventListener('keydown', function (b) {
            b.key === 'Enter' && (cast.receiver.C.X.ya(cast.receiver.C.X.Lb.SKIP_AD), Lf(a.H), a.B(), b.stopPropagation());
        });
        Uf(a.j, !1);
        J(a, !1);
        J(a.j, !1);
        J(a.l, !1);
        return a;
    };
    zg = function (a) {
        let b = a.I - a.G;
        b < 0 && (b = 0);
        b = cast.receiver.C.aa.Ua(b);
        a.F > 1 && (b = ` (${b})`);
        a.J.textContent = b;
    };
    Ag = function (a, b, c) {
        a.F = c;
        c > 0 ? (a.D.textContent = c > 1 ? cast.receiver.Y.Mj(b, c) : '', zg(a)) : a.D.textContent = '';
    };
    Dg = function () {
        this.j = null;
        cast.__platform__ && cast.__platform__.channel ? (_.G(Bg, 'Opening platform websocket'), Cg(this, new we())) : (_.G(Bg, 'Opening net websocket'), Cg(this, new se({
            cr: !0,
        })));
        this.l = new _.bd();
    };
    Cg = function (a, b) {
        a.j && a.j.ea();
        a.j = b;
        a.j.addEventListener('d', a.wm.bind(a));
        a.j.addEventListener('a', a.sm.bind(a));
        a.j.addEventListener('b', a.tm.bind(a));
        a.j.addEventListener('c', a.vm.bind(a));
    };
    Fg = function (a, b) {
        _.vd(Bg, `IpcChannel ${b}`);
        b = new Eg(cast.receiver.va.ye, cast.receiver.va.hb, JSON.stringify({
            type: b,
        }));
        b.target = a;
        a.l.dispatchEvent(b);
    };
    Eg = function (a, b, c) {
        _.A.call(this, a);
        this.senderId = b;
        this.data = c;
    };
    Gg = function (a, b, c, d) {
        _.z.call(this);
        this.l = a;
        this.D = b;
        this.G = !1;
        this.L = [];
        this.A = d || 'STRING';
        this.B = new _.bd();
        this.o = null;
        this.I = this.Mr;
        this.O = this.lr;
        this.j = {};
        a = _.q(c);
        for (b = a.next(); !b.done; b = a.next()) this.j[b.value] = null;
        this.J = this.ti.bind(this);
        this.D.addEventListener(this.l, this.J);
    };
    Hg = function (a, b, c, d) {
        a.ti(new Eg(b, c, d));
    };
    Ig = function (a, b) {
        a.L.push(b);
    };
    Jg = function (a, b) {
        b.target = a;
        return a.B.dispatchEvent(b);
    };
    Kg = function (a, b, c) {
        _.A.call(this, a);
        this.senderId = b;
        this.data = c;
    };
    Lg = function (a, b) {
        this.j = a[_.u.Symbol.iterator]();
        this.l = b;
    };
    Mg = function (a, b) {
        return new Lg(a, b);
    };
    Ng = function () { };
    Rg = function (a) {
        if (a instanceof Og || a instanceof Pg || a instanceof Qg) return a;
        if (typeof a.next === 'function') {
            return new Og(function () {
                return a;
            });
        }
        if (typeof a[Symbol.iterator] === 'function') {
            return new Og(function () {
                return a[Symbol.iterator]();
            });
        }
        if (typeof a.bd === 'function') {
            return new Og(function () {
                return a.bd();
            });
        }
        throw Error('Not an iterator or iterable.');
    };
    Og = function (a) {
        this.j = a;
    };
    Pg = function (a) {
        this.j = a;
    };
    Qg = function (a) {
        Og.call(this, function () {
            return a;
        });
        this.o = a;
    };
    _.Sg = function (a, b) {
        this.l = {};
        this.j = [];
        this.o = this.size = 0;
        let c = arguments.length;
        if (c > 1) {
            if (c % 2) throw Error('Uneven number of arguments');
            for (var d = 0; d < c; d += 2) this.set(arguments[d], arguments[d + 1]);
        } else if (a) {
            if (a instanceof _.Sg) { for (c = a.Sg(), d = 0; d < c.length; d++) this.set(c[d], a.get(c[d])); } else { for (d in a) this.set(d, a[d]); }
        }
    };
    _.Ug = function (a) {
        if (a.size != a.j.length) {
            for (var b = 0, c = 0; b < a.j.length;) {
                var d = a.j[b];
                Tg(a.l, d) && (a.j[c++] = d);
                b++;
            }
            a.j.length = c;
        }
        if (a.size != a.j.length) {
            const e = {};
            for (c = b = 0; b < a.j.length;) d = a.j[b], Tg(e, d) || (a.j[c++] = d, e[d] = 1), b++;
            a.j.length = c;
        }
    };
    Tg = function (a, b) {
        return Object.prototype.hasOwnProperty.call(a, b);
    };
    Xg = function () {
        this.A = _.Vg.M();
        this.l = null;
        this.D = 0;
        this.o = null;
        this.j = new _.Sg();
        this.H = this.G.bind(this);
        this.B = Wg(this.A, cast.receiver.Kc.fm, 'JSON');
        this.B.o = this.F.bind(this);
        for (let a = _.q([cast.receiver.Pb.cc, cast.receiver.media.ob]), b = a.next(); !b.done; b = a.next())(b = this.A.j[b.value] || null) && Ig(b, this.H);
    };
    gh = function (a, b) {
        let c = 5;
        b && a.l && a.l[b] && a.l[b] > 0 && (c = Math.min(a.l[b], 2E3));
        return c;
    };
    jh = function (a, b, c, d, e, f) {
        _.D(hh, b);
        a.B.send(c, new ih(d, e || 'INJECT_ERROR', void 0 !== f ? JSON.stringify(f) : void 0));
        e == 'WRAPPED_ERROR' ? cast.receiver.gb.oh(f && f.code || '') : cast.receiver.gb.oh('INJECT_ERROR');
    };
    lh = function (a, b, c, d) {
        a.B.send(b, new kh(c, d));
        cast.receiver.gb.oh('SUCCESS');
    };
    mh = function (a, b, c) {
        this.type = a;
        this.requestId = b;
        this.data = c;
    };
    kh = function (a, b) {
        mh.call(this, 'SUCCESS', a, b);
    };
    ih = function (a, b, c) {
        mh.call(this, 'ERROR', a, c);
        this.code = b;
    };
    nh = function () {
        const a = _.u.navigator.userAgent.match(/CrKey\/(\d+)\.(\d+)\.[\d]{6}/);
        return {
            majorVersion: a && parseFloat(a[1]) || -1,
            minorVersion: a && parseFloat(a[2]) || -1,
        };
    };
    oh = function () {
        this.j = _.Pa();
    };
    qh = function (a) {
        this.A = a || '';
        ph || (ph = new oh());
        this.B = ph;
    };
    rh = function (a) {
        return a < 10 ? `0${a}` : String(a);
    };
    sh = function (a) {
        qh.call(this, a);
    };
    th = function (a, b) {
        const c = [];
        c.push(a.A, ' ');
        if (a.l) {
            var d = new Date(b.o);
            c.push('[', `${rh(d.getFullYear() - 2E3) + rh(d.getMonth() + 1) + rh(d.getDate())} ${rh(d.getHours())}:${rh(d.getMinutes())}:${rh(d.getSeconds())}.${rh(Math.floor(d.getMilliseconds() / 10))}`, '] ');
        }
        d = c.push;
        let e = a.B.get();
        e = (b.o - e) / 1E3;
        let f = e.toFixed(3);
        let g = 0;
        if (e < 1) g = 2;
        else { for (; e < 100;) g++, e *= 10; }
        for (; g-- > 0;) f = ` ${f}`;
        d.call(c, '[', f, 's] ');
        c.push('[', b.l, '] ');
        c.push(b.B);
        a.o && (b = b.j, void 0 !== b && c.push('\n', b instanceof Error ? b.message : String(b)));
        a.j && c.push('\n');
        return c.join('');
    };
    uh = function () {
        this.B = (0, _.Na)(this.A, this);
        this.j = new sh();
        this.j.l = !1;
        this.j.o = !1;
        this.o = this.j.j = !1;
        this.l = {};
    };
    vh = function (a, b, c, d) {
        if (a[b]) a[b](c, void 0 === d ? '' : d);
        else a.log(c, void 0 === d ? '' : d);
    };
    _.Vg = function () {
        _.z.call(this);
        wh || (wh = new uh());
        if (wh) {
            var a = wh;
            if (a.o != 1) {
                const b = md(od(), '').tc;
                const c = a.B;
                b && md(od(), b.j()).j.push(c);
                a.o = !0;
            }
        }
        this.l = _.qb(xh);
        this.ca = !1;
        this.R = new Dg();
        this.B = {};
        this.O = new _.bd();
        this.A = new Gg(cast.receiver.va.ye, this.R, _.lb(this.B), 'JSON');
        _.sc(this, this.A);
        this.o = this.J = this.T = null;
        this.qa = !1;
        this.G = this.I = null;
        this.W = !0;
        this.D = 'notstarted';
        this.Ca = null;
        this.wa = 0;
        this.j = {};
        this.da = this.V = this.na = this.ia = this.fa = null;
        this.xa = this.ra = this.ba = !1;
        this.A.addEventListener(cast.receiver.va.hb,
            this.lu.bind(this));
        _.Nc(window, 'unload', this.xh, !1, this);
        _.Nc(document, 'visibilitychange', this.gk, !1, this);
        K(cast.receiver.analytics.K.Lq, Number(cast.receiver.Ni));
        yh && yh(this);
        this.Aa = de();
        this.L = de();
        (a = cast.receiver.platform.Ra('device-capabilities')) && zh(this, a);
    };
    Ah = function (a) {
        const b = a.toLocaleLowerCase();
        return ['com.vizio.vue', 'com.vizio.smartcast'].some(function (c) {
            return b.includes(c);
        });
    };
    Bh = function (a, b, c, d) {
        const e = {
            type: 'ready',
        };
        c && (e.statusText = c);
        d && (e.dialData = d);
        e.activeNamespaces = b;
        e.version = cast.receiver.VERSION;
        e.messagesVersion = cast.receiver.va.on;
        e.sdkCapabilities = {
            show_media_controls_supported: !0,
            group_capabilities_supported: !0,
            playback_device_status_supported: !0,
        };
        a.A.send(cast.receiver.va.hb, e);
    };
    Ch = function (a, b, c) {
        const d = {
            type: 'setappstate',
        };
        void 0 != b && (d.statusText = b);
        void 0 != c && (d.dialData = c);
        a.A.send(cast.receiver.va.hb, d);
    };
    Dh = function (a) {
        Bf(cast.receiver.analytics.K.Hl, !0);
        a.ba = !0;
    };
    Wg = function (a, b, c) {
        if (b == cast.receiver.va.ye) throw Error('Protected namespace');
        if (!_.Kb(b, cast.receiver.va.Md)) throw Error('Invalid namespace prefix');
        if (!a.j[b]) {
            if (a.qa) throw Error('New namespaces can not be requested after start has been called');
            a.j[b] = new Gg(b, a.R, _.lb(a.B), c);
            _.sc(a, a.j[b]);
        }
        if (c && a.j[b].A != c) throw Error('Invalid messageType for the namespace');
        return a.j[b];
    };
    zh = function (a, b) {
        a.o = b ? _.qb(b) : {};
        if (cast.receiver.platform.Wj()) {
            a.o.hasOwnProperty('is_hdr_supported') || (a.o.is_hdr_supported = cast.receiver.platform.canDisplayType('video/mp4; codecs=hev1.2.4.L153.B0; eotf=smpte2084'));
            a.o.hasOwnProperty('is_dv_supported') || (a.o.is_dv_supported = cast.receiver.platform.canDisplayType('video/mp4; codecs=dvhe.04.06'));
            b = !a.o.hasOwnProperty('is_dolby_atmos_supported');
            let c = nh();
            c = c.majorVersion >= Eh && c.minorVersion >= Fh;
            b && c && (a.o.is_dolby_atmos_supported = cast.receiver.platform.canDisplayType('audio/mp4; codecs=ec-3; spatialRendering=true'));
            cast.receiver.platform.Ra('enabled-for-dev') && (a.o.is_device_registered = !0);
            cast.receiver.platform.Ra('enable-hls-sample-aes') && (a.o.is_cbcs_supported = !0);
        }
    };
    Jh = function (a, b) {
        const c = b.launchingSenderId;
        const d = _.lb(a.j);
        a.Z = b.version;
        a.W = !Gh(a);
        zh(a, b.deviceCapabilities);
        a.T = {
            id: b.applicationId,
            name: b.applicationName,
            iconUrl: b.iconUrl,
            sessionId: b.sessionId,
            namespaces: d,
            launchingSenderId: c,
            launchedFrom: b.launchedFrom || 'UNKNOWN',
        };
        a.D = 'ready';
        for (const e in a.j) a.j[e].G = !0;
        a.Aa.resolve(a.T);
        a.ca && (a.ca = !1, Ch(a, a.l.statusText, a.l.dialData));
        _.G(L, 'Dispatching CastReceiverManager system ready event');
        b = new Hh(a.T);
        a.fa && a.fa(b);
        Ih(a, b);
    };
    Mh = function (a, b) {
        if (Ah(b.id)) _.G(L, `Ignored connection from ${b.id}`);
        else {
            _.G(L, `Dispatching CastReceiverManager sender connected event [${b.id}]`);
            _.nb(a.B, b.id) && _.D(L, `Unexpected connected message for already connected sender: ${b.id}`);
            a.B[b.id] = b;
            const c = new Kh(b.id, b.userAgent);
            let d;
            for (d in a.j) {
                const e = a.j[d];
                const f = b.id;
                _.nb(e.j, f) ? _.D(Lh, `Unexpected sender already registered [${e.l}, ${f}]`) : (_.G(Lh, `Registering sender [${e.l}, ${f}]`), e.j[f] = null);
            }
            a.getSenders().length > 1 && !a.xa && (Ef(cast.receiver.analytics.K.Jo),
            a.xa = !0);
            Ih(a, c);
        }
    };
    Oh = function (a, b, c) {
        if (Ah(b)) _.G(L, `Ignored disconnection from ${b}`);
        else {
            switch (c) {
                case 'closed_by_peer':
                    c = 'requested_by_sender';
                    break;
                case 'transport_invalid_message':
                    c = 'error';
                    break;
                default:
                    c = 'unknown';
            }
            _.G(L, `Dispatching sender disconnected event [${b}] Reason: ${c}`);
            if (_.nb(a.B, b)) {
                let d = a.B[b].userAgent;
                delete a.B[b];
                c = new Nh(b, d, c);
                for (const e in a.j) {
                    d = a.j[e];
                    const f = b;
                    _.nb(d.j, f) && (_.G(Lh, `Unregistering sender [${d.l}, ${f}]`), d.j[f] && d.j[f].close(), delete d.j[f]);
                }
                Ih(a, _.qb(c));
                a.ia && a.ia(c);
            } else {
                _.D(L,
                    `Unknown sender disconnected: ${b}`);
            }
        }
    };
    Qh = function (a, b) {
        a.Ca = b;
        _.G(L, `Dispatching system volume changed event [${b.level}, ${b.muted}]`);
        Ih(a, new Ph(b));
    };
    Sh = function (a, b) {
        b == a.I ? _.G(L, `Ignoring visibility changed event, state is already ${b}`) : (_.G(L, `Dispatching visibility changed event ${b}`), a.I = b, b = new Rh(b != 0), a.na && a.na(b), Ih(a, b));
    };
    Uh = function (a, b) {
        b != a.G && (_.G(L, `Dispatching standby changed event ${b}`), a.G = b, Ih(a, new Th(b == 1)));
    };
    Wh = function (a, b) {
        _.G(L, `Dispatching showmediacontrols ${b}`);
        a.wa = b;
        Ih(a, new Vh(b));
    };
    Yh = function (a, b) {
        _.G(L, `Dispatching maxvideoresolutionchanged ${b}`);
        Ih(a, new Xh(b));
    };
    $h = function (a) {
        _.G(L, 'Dispatching feedback started event');
        const b = new Zh();
        a.V ? a.V(b) : a.ce('');
    };
    bi = function (a, b) {
        const c = new ai();
        c.capabilities = b.capabilities;
        Ih(a, c);
    };
    di = function (a, b) {
        const c = new ci();
        c.requestId = b.requestId;
        c.newGroupCapabilities = b.newGroupCapabilities;
        a.A.send(cast.receiver.va.hb, {
            type: 'allowgroupchangeresponse',
            requestId: c.requestId,
            allowChange: !0,
            reason: void 0,
        });
        Ih(a, c);
    };
    fi = function (a, b) {
        a.rc() ? _.D(L, 'initTouchScreenOptimizedApp() method cannot be called after CastReceiverManager.start() has been called') : (void 0 === b && _.D(L, 'setTouchScreenOptimizedApp() has to be called with 1 required argument'), ei(a, b));
    };
    ei = function (a, b) {
        _.G(L, `Touchscreen-optimized app: ${b}`);
        cast.receiver.platform.setTouchInputSupport(b).then(function (c) {
            _.G(L, function () {
                return `Touch supported options: ${JSON.stringify(c)}`;
            });
            b ? a.L.resolve('touch-optimized') : c && c.displayControls ? a.L.resolve('non-touch-optimized') : a.L.resolve('no-controls');
        }, function () {
            _.G(L, 'Touch support is blocked');
            a.L.resolve('no-controls');
        });
        a.ra = !0;
    };
    gi = function (a) {
        const b = de();
        a.Aa.promise.then(function () {
            _.G(L, `Touch input supported: ${a.o}` && a.o.touch_input_supported);
            a.o && a.o.touch_input_supported ? b.resolve(!0) : b.resolve(!1);
        });
        return b.promise;
    };
    hi = function (a) {
        const b = de();
        gi(a).then(function (c) {
            a.L.promise.then(function (d) {
                c || (d = 'no-controls');
                b.resolve(d);
            });
        });
        return b.promise;
    };
    Gh = function (a) {
        if (!a.Z) return _.D(L, 'No System Version'), !1;
        const b = ['1', '11'];
        if (!b.length) return _.D(L, 'Version provided is not valid: 1.11'), !1;
        const c = a.Z.split('.');
        if (!c.length) return _.D(L, `System Version format is not valid ${a.Z}`), !1;
        for (let d = 0; d < b.length; d++) {
            const e = parseInt(b[d], 10);
            if (isNaN(e)) return _.D(L, 'Version is not numeric: 1.11'), !1;
            const f = c.length > d ? parseInt(c[d], 10) : 0;
            if (isNaN(f)) return _.D(L, `System Version is not numeric: ${a.Z}`), !1;
            if (e > f) return !1;
        }
        return !0;
    };
    Ih = function (a, b) {
        b.target = a;
        let c = !1;
        try {
            c = a.O.dispatchEvent(b);
        } catch (d) {
            window.setTimeout(function () {
                throw d;
            }, 0);
        }
        return c;
    };
    ii = function (a, b) {
        _.A.call(this, a);
        this.data = b;
    };
    Nh = function (a, b, c) {
        ii.call(this, 'senderdisconnected', a);
        this.senderId = a;
        this.userAgent = b;
        this.reason = c;
    };
    Kh = function (a, b) {
        ii.call(this, 'senderconnected', a);
        this.senderId = a;
        this.userAgent = b;
    };
    Rh = function (a) {
        ii.call(this, 'visibilitychanged', a);
        this.isVisible = a;
    };
    Th = function (a) {
        ii.call(this, 'standbychanged', null);
        this.isStandby = a;
    };
    Ph = function (a) {
        ii.call(this, 'systemvolumechanged', a);
        this.data = a;
    };
    Hh = function (a) {
        ii.call(this, 'ready', a);
        this.data = a;
    };
    ji = function () {
        ii.call(this, 'shutdown', null);
    };
    Zh = function () {
        ii.call(this, 'feedbackstarted', null);
    };
    ki = function (a) {
        ii.call(this, 'playbackdevicestatus', null);
        this.playbackDeviceStatus = a;
    };
    Vh = function (a) {
        ii.call(this, 'showmediacontrols', null);
        this.mediaControlsState = a;
    };
    Xh = function (a) {
        ii.call(this, 'maxvideoresolutionchanged', null);
        this.height = a;
    };
    ai = function () {
        ii.call(this, 'groupcapabilities', null);
        this.capabilities = void 0;
    };
    ci = function () {
        ii.call(this, 'allowgroupchange', null);
        this.newGroupCapabilities = void 0;
    };
    li = function () {
        this.j = _.Vg.M();
        this.l = Wg(this.j, 'urn:x-cast:com.google.cast.broadcast', 'JSON');
        this.l.o = this.o.bind(this);
    };
    ri = function (a) {
        if (!a) return null;
        const b = new rf();
        b.title = mi(a.title);
        Object.values(ni).includes(a.targetAspectRatio) && (b.targetAspectRatio = a.targetAspectRatio, a.targetAspectRatio === 'PORTRAIT_2_TO_3' && _.F(oi, 'UI for the browse items with portrait orientation is not final and is a subject to change.'));
        if (!Array.isArray(a.items)) return null;
        b.items = a.items.map(function (c) {
            if (!c.entity || typeof c.entity !== 'string') return _.F(oi, 'BrowseItem.entity should be a non-empty string'), null;
            const d = new sf(c.entity);
            typeof c.title === 'string' && (d.title = c.title);
            typeof c.subtitle === 'string' && (d.subtitle = c.subtitle);
            if (!d.title && !d.subtitle) return _.F(oi, 'At least one of the BrowseItem.title or BrowseItem.subtitle should be non-empty strings'), null;
            typeof c.duration === 'number' && (d.duration = c.duration);
            c.image && typeof c.image.url === 'string' && (d.image = new Ne(c.image.url));
            Object.values(pi).includes(c.imageType) && (d.imageType = c.imageType);
            Object.values(qi).includes(c.mediaBadge) && (d.mediaBadge = c.mediaBadge);
            return d;
        }).filter(function (c) {
            return !!c;
        });
        if (b.items.length < 1) return null;
        b.items.length > 30 && (a = b.items.length, b.items = b.items.slice(0, 30), _.D(oi, `BrowseContent.items length is ${a} that exceeds maximum allowed length of 30 elements. BrowseContent.items list is truncated to 30 elements`));
        return b;
    };
    mi = function (a) {
        return typeof a === 'string' ? a : '';
    };
    si = function (a, b) {
        a.element.disabled = b;
        a.element.setAttribute('aria-disabled', String(b));
        Uf(a.element, !b);
    };
    ti = function (a, b, c, d) {
        d = void 0 === d ? null : d;
        const e = document.createElement('img');
        e.setAttribute('role', 'presentation');
        e.classList.add('btn-icon');
        const f = _.Dd(document, 'DIV');
        if (!Be()) {
            const g = document.createElement('goog-ripple');
            g.setAttribute('recenters', '');
            f.appendChild(g);
        }
        f.appendChild(e);
        f.className = 'btn';
        d && f.classList.add(d);
        f.src = '';
        f.title = c;
        f.setAttribute('role', 'button');
        f.addEventListener('click', b);
        Uf(f, !0);
        Be() && f.addEventListener('keydown', function (k) {
            k.key === 'Enter' && (Lf(a.B), b(k), k.stopPropagation());
        });
        return f;
    };
    ui = function (a, b, c) {
        b ? (a.j.textContent = b, J(a.j, !0)) : (a.j.textContent = '', J(a.j, !1));
        c ? a.o.setAttribute('connected', 'true') : a.o.removeAttribute('connected');
    };
    xi = function () {
        cast.receiver.C.bc.call(this, function () {
            a.j ? a.o() : a.A();
        }, '', 'btn-play-pause');
        var a = this;
        this.A = function () { };
        this.o = function () { };
        this.j = !1;
        this.l = !0;
        vi(this);
        this.l = !0;
        wi(this);
    };
    vi = function (a) {
        const b = cast.receiver.Y.Ui;
        a.element.dataset.state = 'paused';
        a.element.title = b;
        a.j = !1;
        wi(a);
    };
    wi = function (a) {
        si(a, a.j && !a.l);
    };
    yi = function (a, b, c) {
        cast.receiver.C.bc.call(this, a, b, c);
    };
    Ai = function () {
        const a = lf.call(this) || this;
        a.D = Ce() && Be();
        a.D ? (0, cast.receiver.C.sl)(a) : (0, cast.receiver.C.tl)(a);
        a.A = null;
        a.I = !1;
        a.G = Ff.M();
        a.V = !0;
        a.W = !1;
        a.J = null;
        a.F = {};
        a.o = {};
        [cast.receiver.C.la.SLOT_PRIMARY_1, cast.receiver.C.la.SLOT_PRIMARY_2, cast.receiver.C.la.SLOT_SECONDARY_1, cast.receiver.C.la.SLOT_SECONDARY_2].forEach(function (b) {
            a.F[b] = a.querySelector(`.slot.${b}`);
        });
        a.L = function () { };
        a.O = function () { };
        a.T = function () { };
        a.R = function () { };
        a.B = Sf.M();
        a.l = null;
        a.j = a.D ? null : new cast.receiver.C.pp();
        a.D
            || (Ed(a.j.element, a.querySelector('play-placeholder')), a.j.o = function () {
                a.L();
            }, a.j.A = function () {
                a.O();
            });
        a.H = new yi(function () {
            a.T();
        }, cast.receiver.Y.Io, 'btn-stop');
        Ed(a.H.element, a.querySelector('stop-placeholder'));
        J(a.H.element, !1);
        Be() && (Uf(a, !0), a.addEventListener('keydown', function (b) {
            b.preventDefault();
            if (b.key === 'ArrowRight') {
                a: {
                    var c = zi(a);
                    for (var d = 0; d < c.length - 1; d++) {
                        if (a.B.isFocused(c[d])) {
                            c = c[d + 1];
                            break a;
                        }
                    } c = null;
                }
                c && (a.l = c, a.B.focus(a.l), Lf(a.G), b.stopPropagation());
            }
            if (b.key === 'ArrowLeft') {
                a: {
                    c = zi(a);
                    for (d = 1; d < c.length; d++) {
                        if (a.B.isFocused(c[d])) {
                            c = c[d - 1];
                            break a;
                        }
                    } c = null;
                }
                c && (a.l = c, a.B.focus(a.l), Lf(a.G), b.stopPropagation());
            }
        }), a.addEventListener('focus', function () {
            if (a.l && Vf(a.l)) a.B.focus(a.l);
            else if (a.j && Vf(a.j.element)) a.B.focus(a.j.element);
            else {
                for (const b in a.o) {
                    if (Vf(a.o[b].element)) {
                        a.B.focus(a.o[b].element);
                        break;
                    }
                }
            }
        }));
        return a;
    };
    Bi = function (a) {
        a.A = new cast.receiver.C.Ll(function () {
            a.R();
        });
        a.querySelector('.device-controller-slot').appendChild(a.A.l);
    };
    Ci = function (a) {
        a.A && J(a.A.l, a.V && (a.I || a.J === cast.receiver.C.Sa.AUDIO || a.W));
    };
    zi = function (a) {
        return Array.from(a.querySelectorAll('[data-focusable]')).filter(function (b) {
            return Vf(b);
        });
    };
    Ei = function () {
        this.I = this.G = this.F = this.H = this.D = this.o = this.A = null;
        this.B = _.Vg.M();
        this.j = Wg(this.B, Di, 'JSON');
        this.j.o = this.J.bind(this);
        this.l = new _.Sg();
    };
    Hi = function (a, b, c, d) {
        _.H().then(function () {
            return d(c);
        }).then(function (e) {
            e = Fi(c, e);
            a.j.send(b, e);
        }, function (e) {
            e && e.type == 'ERROR' ? (e = Fi(c, e), a.j.send(b, e)) : (e = `Got a rejected promise ${JSON.stringify(e)}`, Gi(e, c, 'APP_ERROR'), a.j.send(b, Gi(e, c, 'APP_ERROR')));
        });
    };
    Gi = function (a, b, c) {
        _.D(Ii, a);
        a = new Ji(c);
        a.requestId = b.requestId;
        return a;
    };
    Fi = function (a, b) {
        if (!b) return Gi('No response data', a, 'APP_ERROR');
        switch (b.type) {
            case 'SUCCESS':
            case 'ERROR':
                return b.requestId = a.requestId, b;
        }
        return Gi(`Invalid response data ${JSON.stringify(b)}`, a, 'APP_ERROR');
    };
    Ki = function (a) {
        const b = Ei.M();
        if (a !== null && typeof a !== 'function') throw _.D(Ii, 'Given handler is not a function or null'), Error('Given handler is not a function or null');
        b.I = a;
    };
    Li = function (a, b, c) {
        if (b) {
            const d = a.l.get(b);
            d ? (a.l.delete(b), d(c)) : _.F(Ii, `No matching request for response ${JSON.stringify(c)}`);
        }
    };
    Mi = function (a) {
        this.type = a;
    };
    Ni = function () {
        this.type = 'REFRESH_CREDENTIALS';
    };
    Oi = function (a, b) {
        this.type = 'PLAY_STRING';
        this.stringId = a;
        this.arguments = b;
    };
    Pi = function (a, b) {
        this.title = a;
        this.entity = b;
    };
    Qi = function (a, b) {
        this.listTitle = a || '';
        this.displayItems = b;
    };
    Ri = function (a) {
        this.displayItemLists = a;
    };
    Si = function (a) {
        this.opaqueContext = '';
        this.displayContext = a;
    };
    Ti = function (a) {
        this.type = 'SET_APPLICATION_CONTEXT';
        this.context = JSON.stringify(a || {});
        this.requestId = Date.now();
    };
    Ui = function () {
        this.type = 'USER_ACTION';
    };
    Vi = function () {
        this.type = 'SHOW_REMOTE_CONTROL_OVERLAY';
    };
    Wi = function (a) {
        this.type = a;
    };
    Xi = function (a) {
        this.type = 'SUCCESS';
        this.status = a;
    };
    Ji = function (a, b, c) {
        this.type = 'ERROR';
        this.code = a;
        this.reason = b;
        this.customData = c;
    };
    fj = function (a) {
        if (!Yi.test(a)) throw Error(`'${a}' is not a valid alpha hex color`);
        a.length == 5 && (a = a.replace(Zi, '#$1$1$2$2$3$3$4$4'));
        a = a.toLowerCase();
        return [parseInt(a.slice(1, 3), 16), parseInt(a.slice(3, 5), 16), parseInt(a.slice(5, 7), 16), parseInt(a.slice(7, 9), 16) / 255];
    };
    gj = function (a) {
        const b = a.slice(0);
        b[3] = Math.round(1E3 * a[3]) / 1E3;
        return `rgba(${b.join(',')})`;
    };
    mj = function (a, b, c, d) {
        _.z.call(this);
        this.j = a;
        this.o = this.A = null;
        for (a = this.j; a.parentNode;) a = a.parentNode;
        this.B = a.toString().toLowerCase().indexOf('shadow') < 0 ? document.head : a;
        this.l = [];
        this.G = !1;
        this.D = `cast-captions-${Math.floor(1E6 * Math.random()).toString()}`;
        this.J = `[${this.D}="true"]::cue `;
        this.L = new RegExp(/^[\.'":%,;\s\-0-9a-z]+$/i);
        this.I = void 0;
        hj(this, b);
        ij(this);
        jj(this);
        d && kj(this, d);
        lj(this, c);
    };
    nj = function (a, b) {
        a = _.q(a.l);
        for (let c = a.next(); !c.done; c = a.next()) {
            c = c.value;
            const d = c.track;
            b(c) ? d.mode = 'showing' : (d.mode = 'showing', d.mode = 'disabled');
        }
    };
    oj = function (a) {
        return a.l.map(function (b) {
            return parseInt(b.id, 10);
        });
    };
    lj = function (a, b) {
        nj(a, function (c) {
            return _.bb(b, parseInt(c.id, 10));
        });
    };
    pj = function (a, b) {
        nj(a, function (c) {
            return cast.receiver.vd(b, c.srclang);
        });
    };
    qj = function (a) {
        const b = [];
        a = _.q(a.l);
        for (let c = a.next(); !c.done; c = a.next()) c = c.value, c.track.mode == 'showing' && b.push(parseInt(c.id, 10));
        return b;
    };
    hj = function (a, b) {
        b = _.q(b);
        for (var c = b.next(); !c.done; c = b.next()) {
            c = c.value;
            let d = c.trackContentId;
            if (c.type == 'TEXT' && d) {
                const e = c.trackContentType;
                if (Nb(d, 'vtt') || void 0 !== e && Lb(e, 'text/vtt') == 0) d = document.createElement('track'), d.src = c.trackContentId, d.id = c.trackId, d.label = c.name, d.srclang = c.language, d.kind = (c.subtype || 'CAPTIONS').toLowerCase(), a.l.push(d);
            }
        }
        rj(a);
        a.l.length > 0 && !a.j.getAttribute('crossorigin') && (a.j.setAttribute('crossorigin', 'anonymous'), a.G = !0);
        b = _.q(a.l);
        for (c = b.next(); !c.done; c = b.next()) c = c.value, a.j.contains(c) || a.j.appendChild(c);
    };
    ij = function (a, b) {
        if (void 0 === b ? 0 : b) a.j.removeAttribute(a.D), a.B.contains(a.o) && a.B.removeChild(a.o), a.A = null, a.o = null;
        else if (a.o) { for (b = a.A.cssRules.length - 1; b >= 0; b--) a.A.deleteRule(b); }
    };
    rj = function (a) {
        a.G && (a.j.removeAttribute('crossorigin'), a.G = !1);
    };
    tj = function (a, b, c) {
        c == 1 || a.L.test(b) ? a.A.insertRule(`${a.J}{ ${b} }`, a.A.cssRules.length) : _.F(sj, `Invalid css cue: ${b}`);
    };
    jj = function (a) {
        if (!a.o) {
            let b;
            a.B.getElementById ? b = a.B.getElementById('cue-style') : b = document.getElementById('cue-style');
            b || (b = document.createElement('style'), b.id = 'cue-style', b.type = 'text/css', a.B.appendChild(b), b.appendChild(document.createTextNode('')));
            a.o = b;
            a.A = a.o.sheet;
        }
        tj(a, 'font-size: 4.1vh;');
        tj(a, 'font-family: monospace;');
        tj(a, 'font-style: normal;');
        tj(a, 'font-weight: normal;');
        tj(a, 'background-color: black;');
        tj(a, 'color: white;');
        a.j.setAttribute(a.D, !0);
    };
    uj = function (a, b) {
        try {
            var c = gj(fj(a));
        } catch (d) {
            _.F(sj, `Invalid color: ${a}`);
        }
        if (c) {
            switch (a = `rgba(204, 204, 204, ${parseInt(a.substring(7, 9), 16)})`, b) {
                case 'OUTLINE':
                    return `text-shadow: 0 0 4px ${c}, 0 0 4px ${c}, 0 0 4px ${c}, 0 0 4px ${c};`;
                case 'DROP_SHADOW':
                    return `text-shadow: 0px 2px 3px ${c}, 0px 2px 4px ${c}, 0px 2px 5px ${c};`;
                case 'RAISED':
                    return `text-shadow: 1px 1px ${c}, 2px 2px ${c}, 3px 3px ${c};`;
                case 'DEPRESSED':
                    return `text-shadow: 1px 1px ${a}, 0 1px ${a}, -1px -1px ${c}, 0 -1px ${c};`;
            }
        }
        return '';
    };
    vj = function (a) {
        switch (a) {
            case 'BOLD':
                return 'font-weight: bold;';
            case 'BOLD_ITALIC':
                return 'font-style: italic; font-weight: bold;';
            case 'ITALIC':
                return 'font-style: italic;';
        }
        return 'font-style: normal;';
    };
    kj = function (a, b) {
        a.I = b;
        if (void 0 !== b.foregroundColor) {
            try {
                var c = gj(fj(b.foregroundColor));
                tj(a, `color: ${c};`, !0);
            } catch (k) {
                _.F(sj, `Invalid color: ${b.foregroundColor}`);
            }
        }
        if (void 0 !== b.backgroundColor) {
            try {
                var d = gj(fj(b.backgroundColor));
                tj(a, `background-color: ${d};`, !0);
            } catch (k) {
                _.F(sj, `Invalid color: ${b.backgroundColor}`);
            }
        }
        void 0 !== b.fontScale && tj(a, `font-size: ${100 * b.fontScale}%;`);
        if (void 0 !== b.fontFamily || void 0 !== b.fontGenericFamily) {
            c = b.fontFamily;
            d = b.fontGenericFamily;
            let e = 'font-family: ';
            let f = '';
            void 0 !== c && (e += `"${c}"`, f = ', ');
            if (void 0 !== d) {
                switch (d) {
                    case 'SANS_SERIF':
                        var g = '"Droid Sans", sans-serif';
                        break;
                    case 'MONOSPACED_SANS_SERIF':
                        g = '"Droid Sans Mono", monospace';
                        break;
                    case 'SERIF':
                        g = '"Droid Serif", serif';
                        break;
                    case 'MONOSPACED_SERIF':
                        g = '"Cutive Mono", serif-monospace';
                        break;
                    case 'CASUAL':
                        g = '"Short Stack", casual';
                        break;
                    case 'CURSIVE':
                        g = 'Quintessential, cursive';
                        break;
                    case 'SMALL_CAPITALS':
                        g = '"Alegreya Sans SC", sans-serif-smallcaps';
                }
                e += f + g;
            }
            tj(a, `${e};`);
        }
        void 0 !== b.fontStyle && tj(a,
            vj(b.fontStyle));
        void 0 !== b.edgeType && (g = void 0 !== b.foregroundColor ? b.foregroundColor : '#FFFFFFFF', b = void 0 !== b.edgeColor ? uj(b.edgeColor, b.edgeType) : uj(g, b.edgeType), tj(a, b, !0));
    };
    wj = function (a) {
        this.ha = M;
        this.j = a;
        this.I = function () { };
        this.G = function () { };
        this.J = function () { };
        this.B = 0;
        this.A = this.F = null;
        this.L = 0;
        this.o = this.l = null;
        this.D = !1;
        this.H = !0;
        _.Nc(this.j, 'error', this.xm, !1, this);
        _.Nc(this.j, 'ended', this.ui, !1, this);
        _.Nc(this.j, 'loadedmetadata', this.ym, !1, this);
        _.G(this.ha, 'Using default Player');
    };
    xj = function (a) {
        const b = a.j.duration;
        if (isNaN(b) || a.A == null) return b;
        if (a.F != null) return a.F;
        a.F = a.A >= 0 ? Math.min(a.L + a.A, b) : Math.max(b + a.A, a.B);
        return a.F;
    };
    yj = function (a) {
        a.A != null && (Yc(a.j, 'timeupdate', a.ik, !1, a), a.F = null, a.A = null);
    };
    zj = function (a) {
        if (a.A == null) return !1;
        const b = xj(a);
        return isNaN(b) ? !1 : a.j.currentTime >= b ? (a.ui(), !0) : !1;
    };
    Aj = function (a, b) {
        a.o = b ? b.slice(0) : a.o;
        a.o = a.o || [];
        if (a.l) {
            const c = oj(a.l);
            a.o = a.o.filter(function (d) {
                return !c.includes(d);
            }).concat(qj(a.l));
        }
        a.o.length == 0 && (a.o = null);
    };
    Bj = function (a) {
        this.itemId = a;
        this.customData = this.activeTrackIds = this.preloadTime = this.playbackDuration = this.startTime = this.autoplay = this.media = void 0;
    };
    Cj = function (a) {
        this.j = void 0;
        this.A = 'REPEAT_OFF';
        this.o = 0;
        this.B = this.l = this.D = void 0;
        this.H = a;
        this.G = 1;
        this.F = 0;
    };
    Dj = function (a) {
        a.F = 0;
        a.j.forEach(function (b, c) {
            b.orderId = c;
            a.F++;
        });
    };
    Ej = function (a, b) {
        a.B && (a.B.shuffle = b);
    };
    Fj = function (a) {
        return !(!a.B || !a.B.shuffle);
    };
    Ij = function (a, b) {
        if (a.l) {
            return Promise.resolve(a.l.initialize(b)).then(function (c) {
                c ? (Gj(a, c, !0, !0), Dj(a)) : Hj(a, b);
            });
        }
        Hj(a, b);
    };
    Hj = function (a, b) {
        let c = b.queueData;
        c && c.items ? Gj(a, c) : (c = new Bj(a.H()), c.media = b.media, c.autoplay = b.autoplay, c.activeTrackIds = b.activeTrackIds, c.customData = b.customData, c.itemId = 1, a.j = [c], b.queueData && Jj(a, b.queueData));
        Dj(a);
    };
    Gj = function (a, b, c, d) {
        d = void 0 === d ? !1 : d;
        Kj(a, b, void 0 === c ? !1 : c) || _.F(Lj, `The passed in queueData is not completely valid: ${b}`);
        d && b.items && Mj(b.items);
        a.j = b.items;
        Jj(a, b);
    };
    Jj = function (a, b) {
        a.B = b;
        a.A = b.repeatMode || a.A;
        a.o = b.startIndex || 0;
        a.D = b.startTime || void 0;
    };
    Mj = function (a) {
        a = _.q(a);
        for (let b = a.next(); !b.done; b = a.next()) b = b.value, b.preloadTime = b.preloadTime != null ? b.preloadTime : 0;
    };
    Oj = function (a, b) {
        const c = new Te();
        c.requestId = b;
        c.itemIds = a.Gc().map(function (d) {
            return d.itemId;
        });
        c.sequenceNumber = Nj(a, !1);
        return c;
    };
    Rj = function (a, b) {
        return new Promise(function (c, d) {
            let e = void 0;
            let f = a.o + b;
            f >= 0 && f < a.j.length ? (e = new Re(), e.changeType = 'NO_CHANGE', c(e)) : (f = Pj(a), b == 1 ? e = a.l.nextItems.bind(a.l, f) : b == -1 ? e = a.l.prevItems.bind(a.l, f) : b > 1 ? e = a.l.fetchItems.bind(a.l, f, b, 0) : b < -1 ? e = a.l.fetchItems.bind(a.l, f, 0, -b) : d('Should not be requesting more items on the current item'), Promise.resolve(e()).then(function (g) {
                Mj(g);
                const k = new Re();
                if (g.length > 0) {
                    _.G(Lj, `Fetched more items ${g}`);
                    const l = b >= 0 ? void 0 : a.j[0].itemId;
                    Qj(a, g, l);
                    k.changeType = 'INSERT';
                    k.itemIds = g.map(function (m) {
                        return m.itemId;
                    });
                    k.insertBefore = l;
                    k.sequenceNumber = Nj(a, !0);
                } else k.changeType = 'NO_CHANGE', k.sequenceNumber = Nj(a, !1);
                c(k);
            }, function () {
                return d('Failed to get more items from the queue.');
            }));
        });
    };
    Nj = function (a, b) {
        return b ? a.G++ : a.G - 1;
    };
    Sj = function (a) {
        return void 0 !== a.j;
    };
    Pj = function (a) {
        if (!(a.o < 0) && a.j) return a.j[a.o].itemId;
    };
    Tj = function (a, b) {
        a.A = b;
        a.B && (a.B.repeatMode = b);
    };
    Uj = function (a, b) {
        for (var c = [], d = 0; d < b.length; d++) {
            for (let e = 0; e < a.j.length; e++) {
                if (b[d] == a.j[e].itemId) {
                    c.push(b[d]);
                    break;
                }
            }
        } return c;
    };
    Vj = function (a, b) {
        for (let c = 0; c < a.j.length; c++) { if (b == a.j[c].itemId) return c; }
        return -1;
    };
    Wj = function (a) {
        return a.A == 'REPEAT_ALL_AND_SHUFFLE' || a.A == 'REPEAT_ALL';
    };
    Yj = function (a, b) {
        b = Vj(a, b);
        if (b == -1 || a.o == b) return !1;
        Xj(a, b);
        return !0;
    };
    Zj = function (a, b, c) {
        if (b && b.length != 0) {
            for (var d = a.j[a.o].itemId, e = void 0 !== c ? c : -1, f = a.j.length - b.length, g = [], k = e == -1 ? !0 : !1, l = 0; l < a.j.length; l++) _.bb(b, a.j[l].itemId) ? k || a.j[l].itemId != b[0] || (f = g.length) : (g.push(a.j[l]), e == a.j[l].itemId && (f = g.length - 1, k = !0));
            e = [];
            for (k = 0; k < b.length; k++) {
                a: {
                    for (l = 0; l < a.j.length; l++) {
                        if (b[k] == a.j[l].itemId) {
                            l = a.j[l];
                            break a;
                        }
                    } l = null;
                }
                e.push(l);
            }
            Oa(gb, g, f, 0).apply(null, e);
            a.j = g;
            if (a.l && a.l.onItemsReordered) a.l.onItemsReordered(e, c);
            void 0 !== d && Yj(a, d);
            Fj(a) || Dj(a);
        }
    };
    Qj = function (a, b, c, d) {
        for (var e = _.q(b), f = e.next(); !f.done; f = e.next()) f = f.value, typeof f.itemId !== 'number' && (f.itemId = a.H());
        e = typeof c === 'number' ? Vj(a, c) : a.j.length;
        e = e == -1 ? a.j.length : e;
        Oa(gb, a.j, e, 0).apply(null, b);
        void 0 !== d ? a.o = e + d : a.o >= e && (a.o += b.length);
        if (a.l && a.l.onItemsInserted) a.l.onItemsInserted(b, c);
        Fj(a) ? b.forEach(function (g) {
            g.orderId = a.F;
            a.F++;
        }) : Dj(a);
        return b.map(function (g) {
            return g.itemId;
        });
    };
    bk = function (a, b, c) {
        if (a.o < 0) return 'QUEUE_ENDED';
        b = a.o + b;
        let d = !1;
        b >= a.j.length ? (b = Wj(a) ? b % a.j.length : -1, d = !0) : b < 0 && (b = Wj(a) ? a.j.length + (b + 1) % a.j.length - 1 : 0, d = !0);
        c && Xj(a, b);
        return b == -1 ? 'QUEUE_ENDED' : d ? (a.A === 'REPEAT_ALL_AND_SHUFFLE' && Ej(a, !0), Fj(a) ? (ak(a), 'QUEUE_SHUFFLED') : 'QUEUE_LOOP') : 'QUEUE_ACTIVE';
    };
    ak = function (a) {
        let b = a.j.length;
        if (!(a.j.length < 3)) {
            for (Ej(a, !0); b > 0;) {
                const c = Math.floor(Math.random() * b);
                --b;
                const d = a.j[c];
                a.j[c] = a.j[b];
                a.j[b] = d;
            }
        }
    };
    ck = function (a) {
        a.j.length < 3 || (Ej(a, !1), a.j.sort(function (b, c) {
            return b.orderId - c.orderId;
        }));
    };
    Kj = function (a, b, c) {
        c = void 0 === c ? !1 : c;
        if (void 0 !== b.startIndex && (typeof b.startIndex !== 'number' || b.startIndex < 0)) return _.D(Lj, `Invalid startIndex ${b.startIndex}`), !1;
        let d = (b.startIndex || 0) + 1;
        if (!b.items || b.items.length < d) return _.D(Lj, 'Invalid number of items'), !1;
        if (b.repeatMode && !cast.receiver.media.bk(b.repeatMode)) return _.D(Lj, 'Invalid repeatMode'), !1;
        for (d = 0; d < b.items.length; d++) {
            if (b.items[d].media) {
                if (void 0 === b.items[d].preloadTime || typeof b.items[d].preloadTime === 'number' && !isNaN(b.items[d].preloadTime)) {
                    if (c
                        || void 0 === b.items[d].itemId) b.items[d].itemId = typeof b.items[d].itemId === 'number' ? b.items[d].itemId : a.H();
                    else return _.D(Lj, `ItemId should not be defined, element at index: ${d}`), !1;
                } else return _.D(Lj, `Bad preloadTime (${b.items[d].preloadTime}), in element at index: ${d}`), !1;
            } else return _.D(Lj, `Media is mandatory, missing in element at index: ${d}`), !1;
        }
        return !0;
    };
    Xj = function (a, b) {
        a.o = b;
        if (a.l && a.l.onCurrentItemIdChanged && b >= 0 && b < a.j.length) a.l.onCurrentItemIdChanged(a.j[b].itemId);
    };
    dk = function (a) {
        return a.l && a.j && a.j.length > 0 && a.o == a.j.length - 1 ? Rj(a, 1) : Promise.reject('No need to prefetch more for now.');
    };
    fk = function (a) {
        return a === ek ? 2 : a === '__touch_controls__' ? 3 : a === cast.receiver.Kc.xe ? 4 : a === '__physical_remote__' ? 5 : a === '*:*' ? 6 : 1;
    };
    gk = function (a) {
        return a.j ? a.j.videoWidth : 0;
    };
    hk = function (a) {
        return a.j ? a.j.videoHeight : 0;
    };
    ik = function (a) {
        return !!a && typeof a.then === 'function';
    };
    _.jk = function () {
        this.j = [];
        this.l = [];
    };
    lk = function (a, b, c) {
        const d = this;
        this.ci = _.Vg.M();
        li.M();
        this.W = c || 'local';
        cast.receiver.gb.Fu(this.W);
        this.B = Wg(this.ci, cast.receiver.media.ob, 'JSON');
        this.H = 0;
        this.fa = this.F = null;
        this.D = 1;
        this.Kf = b || 12303;
        this.Zi = this.Ki = this.J = this.I = this.j = this.o = null;
        this.G = !1;
        this.Tf = void 0;
        this.L = this.A = null;
        this.bb = !0;
        this.Ji = null;
        this.l = new Cj(this.Kj.bind(this));
        this.Z = !1;
        this.O = null;
        this.vp = 1;
        this.Cf = -1;
        this.Vf = new _.jk();
        this.Rf = this.T = !1;
        this.R = [];
        this.gi = this.kr;
        this.fi = null;
        this.na = this.xr;
        this.ca = this.Br;
        this.ud = this.Ar;
        this.da = this.Hr;
        this.Ca = null;
        this.Aa = this.Ir;
        this.ba = this.zr;
        this.Pa = this.Lr;
        this.yf = this.Jr;
        this.rd = this.nr;
        this.eb = this.mr;
        this.nf = this.Er;
        this.lf = this.Dr;
        this.wa = this.Cj;
        this.sf = this.Fr;
        this.xf = this.Gr;
        this.ei = null;
        this.Yf = this.yr;
        this.Xf = this.wr;
        this.Wf = this.pr;
        this.af = this.Cr;
        this.onError = this.qr;
        this.qa = function () { };
        this.ra = this.Zf = null;
        this.Li = this.rr;
        this.Vi = this.sr;
        this.Wi = this.ur;
        this.Xi = this.Kr;
        this.ia = null;
        this.sd = this.vr;
        this.xa = this.La = null;
        this.Ma = new cast.receiver.Rq(this.broadcastStatus.bind(this,
            !1));
        this.ci.da = function (e) {
            const f = d.Ma;
            f.l = e;
            f.o();
        };
        this.di = new _.bd();
        this.Qf = this.bg = this.V = !1;
        this.Ib(a);
        this.B.o = this.wh.bind(this);
        kk(this);
    };
    mk = function (a) {
        if (a.j) return a.j.customData || void 0;
    };
    nk = function (a) {
        return a.j ? a.j.activeTrackIds || null : null;
    };
    ok = function (a) {
        return Sj(a.l) ? a.l : null;
    };
    pk = function (a) {
        for (let b = 0; b < a.length; b++) { if (void 0 === a[b].trackId || void 0 === a[b].type) return !1; }
        return !0;
    };
    qk = function (a, b) {
        if (!b || b.length == 0) return !0;
        if (!a || b.length > a.length) return _.D(M, 'Too many track IDs'), !1;
        for (let c = 0, d = 0, e = 0; e < b.length; e++) {
            for (var f = !1, g = 0; g < a.length; g++) {
                if (b[e] == a[g].trackId) {
                    f = !0;
                    break;
                }
            } if (!f) return _.D(M, `Track ID does not exist: ${b[e]}`), !1;
            a[g].type == 'AUDIO' ? d++ : a[g].type == 'VIDEO' && c++;
            if (d > 1 || c > 1) return _.D(M, 'Maximum one active video and one active audio track supported'), !1;
        }
        return !0;
    };
    rk = function (a, b, c) {
        c.mediaSessionId = a.H;
        cast.receiver.gb.ph(c.type, b);
        a.wh(new Kg('message', b, c));
    };
    sk = function (a, b, c, d) {
        b && (_.D(M, `Sending error: ${b.type} ${b.reason}`), a.qa && c == a.W ? (b.requestId = d, a.qa(b)) : a.Ha(c, d, b.type, b.reason));
    };
    tk = function (a) {
        if (!a.j) return 'IDLE';
        const b = a.o.getState();
        return b == 'PLAYING' && !a.bg && a.G ? 'BUFFERING' : b;
    };
    vk = function (a, b, c, d) {
        function e(k) {
            k ? f.status = [k] : f = null;
            return f;
        }
        var f = {
            type: 'MEDIA_STATUS',
        };
        const g = a.A && a.A.message.media || null;
        if (!a.j && !a.I && !g) return f.status = [], f;
        a = uk(a, b, c, void 0 === d ? !1 : d);
        return ik(a) ? a.then(e) : e(a);
    };
    uk = function (a, b, c, d) {
        let e = !1;
        d = void 0 === d ? !1 : d;
        e = void 0 === e ? !1 : e;
        const f = a.A && a.A.message.media || null;
        if (!a.j && !a.I && !f) return Promise.resolve(null);
        const g = {
            mediaSessionId: a.H,
            playbackRate: a.D,
            playerState: tk(a),
            currentTime: a.o.getCurrentTimeSec(),
            supportedMediaCommands: a.Kf,
            volume: a.o.getVolume(),
        };
        a.O && (g.preloadedItemId = a.O);
        let k = gk(a.Ma);
        const l = hk(a.Ma);
        k > 0 && l > 0 && (g.videoInfo = new Pe(k, l, a.Ma.l));
        if (a.j) g.activeTrackIds = a.j.activeTrackIds, b && (g.media = a.Bb() || void 0, g.queueData = wk(a)), g.currentItemId = a.j.itemId;
        else if (a.I && (b && (g.media = a.I.media || void 0), g.currentItemId = a.I.itemId, a.I = null), Sj(a.l) && (k = a.l.jc())) g.loadingItemId = k.itemId;
        g.playerState === 'IDLE' ? (a.L && (g.idleReason = a.L), f && (g.extendedStatus = new Qe(f, a.A.mediaSessionId), g.queueData = wk(a))) : a.L = null;
        c != null && (g.customData = c);
        Sj(a.l) && (d && (g.items = a.l.Gc(b, a.V && !e)), g.repeatMode = a.l.A);
        if (!a.gi) return g;
        b = a.gi(g);
        if (ik(b)) {
            return b.then(function (m) {
                a.Qf = !!g.breakStatus && void 0 !== g.breakStatus.currentBreakClipTime;
                return m;
            });
        }
        a.Qf = !!g.breakStatus
            && void 0 !== g.breakStatus.currentBreakClipTime;
        return b;
    };
    wk = function (a) {
        if (a = a.l.B) a = _.qb(a), a.items = void 0;
        return a;
    };
    xk = function (a) {
        a.fa != null && (_.u.clearTimeout(a.fa), a.fa = null);
    };
    yk = function (a) {
        const b = a.o.getCurrentTimeSec();
        a.J = b;
        a.Ki = b;
        a.Zi = Date.now();
        clearTimeout(a.Ji);
        kk(a);
    };
    kk = function (a) {
        a.Ji = setTimeout(function () {
            kk(a);
            let b = tk(a);
            if (b != 'IDLE' && b != 'PAUSED' && !a.Rf) {
                a.T && b == 'PLAYING' && (_.F(M, 'Triggering load complete, since media is playing.'), zk(a));
                let c = a.J;
                a.J = a.o.getCurrentTimeSec();
                const d = a.G;
                a.G = a.bg ? a.o.getState() === 'BUFFERING' : 1E3 * Math.abs(a.J - c) < 100;
                d != a.G ? (qd(M, Ak, `Buffering state changed, isPlayerBuffering: ${a.G} old time: ${c} current time: ${a.J}`), a.broadcastStatus(!1)) : a.Tf !== b ? (qd(M, Ak, `Player state changed, playerState: ${b} old state: ${a.Tf} current time: ${a.J}`), a.broadcastStatus(!1)) : a.G || a.Qf || (b = 1E3 * (a.J - a.Ki) - a.D * (Date.now() - a.Zi), Math.abs(b) > 1E3 ? (qd(M, Ak, `Time drifted: ${b}`), a.broadcastStatus(!1)) : a.j && Sj(a.l) && (b = a.l, (b = b.o < 0 ? null : b.A == 'REPEAT_SINGLE' ? b.j[b.o] : b.o + 1 >= b.j.length && (b.A == 'REPEAT_ALL_AND_SHUFFLE' || b.A == 'REPEAT_OFF') ? null : b.j[(b.o + 1) % b.j.length]) && typeof b.preloadTime === 'number' && a.j.media && !a.A && a.j.media.streamType != 'LIVE' && Bk(a, b.preloadTime) && a.O != b.itemId && (a.ra ? (c = new Ck(b.itemId), c.requestId = 0, c.mediaSessionId = a.H, c.autoplay = b.autoplay, c.currentTime = b.startTime, c.customData = b.customData || void 0, c.activeTrackIds = b.activeTrackIds, c.media = b.media, c = new Dk('preload', c, ''), a.O = b.itemId, _.G(M, `Sending preload event: ${JSON.stringify(c)}`), a.ra(c) && a.broadcastStatus(!1)) : _.G(M, 'Not sending preload event'))));
            }
        }, 1E33);
    };
    Ek = function (a, b) {
        a.Ha('*:*', void 0, 'ERROR', b && b.reason, b && b.customData, b && b.detailedErrorCode, a.j ? a.j.itemId : void 0);
    };
    Fk = function (a, b) {
        if (a.fi) {
            b = rb(b);
            b.type = 'CLOUD_STATUS';
            try {
                b = a.fi(b);
            } catch (c) {
                _.D(M, `Cloud status handler failed. ${c}`);
                return;
            }
            ik(b) ? b.then(function (c) {
                a.B.send('__cloud__', c);
            }) : a.B.send('__cloud__', b);
        }
    };
    Gk = function (a) {
        a.A = null;
        if (a.T) {
            for (a.T = !1, a.Rf = !1; !a.Vf.isEmpty() && !a.T;) {
                const b = a;
                const c = b.wh;
                var d; const
                    e = d = a.Vf;
                e.j.length === 0 && (e.j = e.l, e.j.reverse(), e.l = []);
                d = d.j.pop();
                c.call(b, d);
            }
        }
    };
    Lk = function (a, b, c, d, e, f) {
        f = void 0 === f ? null : f;
        _.G(M, 'Dispatching MediaManager load event');
        _.G(M, `Load message received:${JSON.stringify(c)}`);
        let g = !1;
        let k = e;
        c.media || c.queueData ? c.media && c.media.tracks && !pk(c.media.tracks) ? (_.D(M, 'Invalid tracks information'), g = !0) : c.activeTrackIds && c.media && !qk(c.media.tracks, c.activeTrackIds) && (g = !0) : (_.D(M, 'Media or QueueData is mandatory'), g = !0);
        e = c.playbackRate;
        if (void 0 !== e && (typeof e !== 'number' || e < 0.5 || e > 2)) {
            return _.D(M, `Bad value for playback rate ${e}`), {
                type: 'INVALID_REQUEST',
                reason: 'INVALID_PARAMS',
            };
        }
        if (g) {
            return k && k(), {
                type: 'INVALID_REQUEST',
                reason: 'INVALID_PARAMS',
            };
        }
        a.A ? Hk(a, 'LOAD_CANCELLED', f && f.customData, f && f.reason, f && f.detailedErrorCode) : a.j && (Ik(a, 'INTERRUPTED', !1), k = a.broadcastStatus.bind(a, !1));
        a.A = {
            senderId: b,
            message: c,
            mediaSessionId: d ? a.H + 1 : a.H,
        };
        Jk(a, c.media, !1);
        k && k();
        a.T = !0;
        if (d && (a.H++, a.L = null, a.Z = void 0 !== c.queueData, d = Ij(a.l, c), ik(d))) {
            return d.then(function () {
                a.Z = !0;
                const l = a.l.jc();
                !l || !l.media || c.media && l.media.contentId == c.media.contentId || (c.media
                    && _.G(M, `Implementation of queueing has provided ${l.media.contentId} as the first item whilethe original media portion of the LOAD provided ${c.media.contentId}`), c.media = l.media, c.autoplay = c.autoplay || l.autoplay, c.currentTime = c.currentTime || l.startTime || a.l.D);
                Kk(a, b, c, k);
            }, function () {
                Hk(a, 'LOAD_FAILED');
            }), null;
        }
        Kk(a, b, c, k);
        return null;
    };
    Kk = function (a, b, c, d) {
        a.j = rb(a.l.jc());
        a.R = [];
        c.media = a.j.media || c.media;
        a.j.activeTrackIds = c.activeTrackIds;
        xk(a);
        a.F = c;
        if (a.bb && a.o.preload) {
            var e = a.l.D;
            a.o.preload(void 0 !== c.autoplay ? c.autoplay : !0, c.currentTime > 0 ? c.currentTime : e > 0 ? e : 0, a.j.playbackDuration, a.j.startTime);
        }
        e = new Dk('load', c, b);
        let f = void 0;
        a.na && (a.D = c.playbackRate ? c.playbackRate : 1, f = a.na(e));
        Mk(a, e);
        d || a.broadcastStatus(!0);
        a.O = null;
        Promise.resolve(f).then(function () {
            Nk(a, b, c);
        }, function () {
            Nk(a, b, c);
        });
    };
    Nk = function (a, b, c) {
        dk(a.l).then(function (d) {
            Ok(a, d, b, c);
        }, function (d) {
            _.G(M, d);
        });
    };
    Pk = function (a, b) {
        a.A && (b.tracks = b.tracks || void 0, b.tracks && !pk(b.tracks) ? _.D(M, 'Invalid tracks information') : b.activeTrackIds && !qk(b.tracks, b.activeTrackIds) ? _.D(M, 'Invalid active tracks') : (a.j && a.j.media && (a.j.activeTrackIds = b.activeTrackIds, a.j.media.tracks = b.tracks, a.j.media.textTrackStyle = b.textTrackStyle), a.o.load('', !1, void 0, b, !0)));
    };
    Qk = function (a, b, c) {
        c = void 0 === c ? !0 : c;
        a.j && a.j.media && (a.j.activeTrackIds = b.activeTrackIds, c && (a.j.media.tracks = b.tracks, a.j.media.textTrackStyle = b.textTrackStyle), a.A || a.broadcastStatus(c));
    };
    Jk = function (a, b, c) {
        b && ((void 0 === c ? 0 : c) && a.o && a.o.getMediaCategory && (c = a.o.getMediaCategory()) && (a.j.media.mediaCategory = c), b.mediaCategory || (a = cast.receiver.aa.getMediaCategory(b), b.mediaCategory = a || void 0));
    };
    Hk = function (a, b, c, d, e) {
        const f = a.j ? a.j.itemId : void 0;
        a.j && Ik(a, 'ERROR', !1);
        a.A ? (b = b || 'LOAD_FAILED', a.A.senderId == a.W ? a.qa && a.qa({
            type: b,
        }) : a.A.senderId != '' && a.Ha(a.A.senderId, a.A.message.requestId, b, d, c, e, f), Gk(a)) : _.D(M, 'Not sending LOAD error as there is no on going LOAD request');
    };
    zk = function (a) {
        if (a.A) {
            const b = a.A.message.requestId;
            a.broadcastStatus(!0, b, void 0, b != 0 || a.V);
            Gk(a);
        } else _.D(M, 'Not sending status as there is no on going LOAD request');
    };
    Rk = function (a, b) {
        let c = !0;
        c = void 0 === c ? !0 : c;
        b = void 0 === b ? null : b;
        const d = a.l.Sd();
        let e;
        if (e = Sj(a.l) && d != -1) e = a.l, e = d < (e.j && e.j.length || 0) - 1;
        e ? (Ek(a, b), a.Wf('ERROR', b)) : (a.A ? Hk(a, 'LOAD_FAILED', b && b.customData, b && b.reason, b && b.detailedErrorCode) : Ek(a, b), Ik(a, 'ERROR', c));
    };
    Sk = function (a, b, c, d, e, f, g, k, l) {
        c = a.ot.bind(a, b, c, d, e, f, g, k, void 0 === l ? null : l);
        d = a.l.l ? !0 : !1;
        d ? Rj(a.l, b).then(c, c) : c();
    };
    Tk = function (a, b) {
        a.D = b;
    };
    Ik = function (a, b, c, d) {
        c = void 0 === c || c;
        if (d && !c) throw Error('customData and requestId should only be provided in broadcast mode');
        a.j ? (a.l.clear(), a.o.reset(b), b && (a.L = b), a.I = a.j, a.j = null, a.R = []) : _.G(M, 'Nothing to reset, Media is already null');
        c && a.broadcastStatus(!1, d, void 0, void 0);
        a.F && (xk(a), a.fa = _.qe(function () {
            a.F = null;
            a.fa = null;
        }, 9E5));
    };
    Uk = function (a, b) {
        let c = a.j && a.j.media && a.j.media.tracks;
        if (!c || c.length == 0) return _.D(M, 'No tracks available'), null;
        c = c.filter(function (f) {
            return f.type == 'TEXT';
        }).map(function (f) {
            return f.trackId;
        });
        if (c.length == 0) return _.D(M, 'No text tracks available'), null;
        const d = a.j.activeTrackIds || [];
        const e = c.filter(function (f) {
            return d.indexOf(f) >= 0;
        });
        if (!b.enableTextTracks) {
            if (e.length > 0) {
                return a.R = e, d.filter(function (f) {
                    return e.indexOf(f) < 0;
                });
            }
        } else if (e.length == 0) {
            return b = d.concat(a.R.length > 0 ? a.R : [c[0]]), a.R = [],
            b;
        }
        return d;
    };
    Vk = function (a) {
        if (a.length < 2) return !0;
        for (let b = 0; b < a.length; b++) {
            for (let c = b + 1; c < a.length; c++) { if (a[b] == a[c]) return _.D(M, `Duplicate itemId: ${a[b]}at positions:${b} ${c}`), !1; }
        }
        return !0;
    };
    Wk = function (a) {
        for (let b = 0; b < a.length; b++) {
            if (typeof a[b].itemId !== 'number') return _.D(M, `Invalid itemId at position: ${b}`), !1;
            for (let c = b + 1; c < a.length; c++) {
                if (typeof a[c].itemId !== 'number') return _.D(M, `Invalid itemId at position: ${c}`), !1;
                if (a[b].itemId == a[c].itemId) return _.D(M, `Duplicate itemId: ${a[b].itemId}at positions:${b} ${c}`), !1;
            }
        }
        return !0;
    };
    Xk = function (a) {
        for (var b = [], c = 0; c < a.length; c++) {
            const d = new Bj(a[c].itemId);
            d.media = a[c].media;
            d.autoplay = a[c].autoplay;
            d.startTime = a[c].startTime;
            d.playbackDuration = a[c].playbackDuration;
            d.preloadTime = a[c].preloadTime;
            d.activeTrackIds = a[c].activeTrackIds;
            d.customData = a[c].customData;
            b.push(d);
        }
        return b;
    };
    Zk = function (a, b, c, d) {
        if (!b) return null;
        const e = new Yk();
        e.requestId = c || 0;
        e.mediaSessionId = a.H;
        e.type = 'LOAD';
        e.autoplay = b.autoplay;
        e.currentTime = void 0 !== d ? d : b.startTime;
        e.activeTrackIds = b.activeTrackIds;
        e.customData = b.customData || void 0;
        e.media = b.media;
        a.F && (e.credentials = a.F.credentials, e.credentialsType = a.F.credentialsType);
        return e;
    };
    Bk = function (a, b) {
        if (a.j.media.duration - a.o.getCurrentTimeSec() <= b || b == 0 && a.o.We && a.o.We()) return !0;
        if (a.O == null) return !1;
        a.O = null;
        if (!a.ia) return !1;
        b = new $k('CANCEL_PRELOAD');
        b.requestId = 0;
        b.mediaSessionId = a.H;
        b = new Dk('cancelpreload', b, '');
        _.G(M, `Sending cancel preload event: ${JSON.stringify(b)}`);
        a.ia(b) && a.broadcastStatus(!1);
        return !1;
    };
    bl = function (a, b, c) {
        _.G(M, 'Dispatching MediaManager queueUpdate event');
        let d = !1;
        Sj(a.l) ? c.items && !Wk(c.items) ? d = !0 : c.repeatMode && !cast.receiver.media.bk(c.repeatMode) ? (_.D(M, 'Invalid repeatMode'), d = !0) : al(a, c) || (d = !0) : (_.D(M, 'Queue does not exist'), d = !0);
        if (d) {
            return {
                type: 'INVALID_REQUEST',
                reason: 'INVALID_PARAMS',
            };
        }
        if (c.items && c.items.length > 0) {
            d = a.l;
            for (var e = c.items, f = [], g = 0; g < e.length; g++) {
                for (let k = 0; k < d.j.length; k++) {
                    if (e[g].itemId == d.j[k].itemId) {
                        f.push(e[g]);
                        break;
                    }
                }
            } c.items = Xk(f);
        }
        b = new Dk('queueupdate',
            c, b);
        a.wa && a.wa(b);
        Mk(a, b);
        return null;
    };
    Ok = function (a, b, c, d) {
        b.changeType === 'NO_CHANGE' && void 0 !== c ? a.B.send(c, b) : (a.B.send('*:*', b), a.V && a.broadcastStatus(!0, d.requestId, d.customData, !0));
    };
    cl = function (a, b, c, d, e) {
        const f = new Re();
        f.changeType = b;
        f.itemIds = c;
        f.sequenceNumber = Nj(a.l, b !== 'NO_CHANGE');
        d != null && (f.insertBefore = d);
        e && (f.reorderItemIds = e);
        a.B.send('*:*', f);
    };
    al = function (a, b) {
        if (!b || !b.sequenceNumber) return !0;
        (a = b.sequenceNumber === Nj(a.l, !1)) || _.D(M, `Invalid Queue Sequence Number ${b.sequenceNumber}`);
        return a;
    };
    dl = function (a, b, c, d, e, f) {
        c && d && cl(a, c, d);
        b ? Sk(a, f.jump || 0, e, f.requestId, f.customData, e, f.currentTime) : a.broadcastStatus(e, f.requestId, f.customData, e);
    };
    Mk = function (a, b) {
        b.target = a;
        return a.di.dispatchEvent(b);
    };
    Dk = function (a, b, c) {
        _.A.call(this, a);
        this.data = b;
        this.senderId = c;
    };
    $k = function (a) {
        this.type = a;
        this.requestId = 0;
        this.sequenceNumber = this.customData = this.mediaSessionId = void 0;
    };
    Yk = function () {
        $k.call(this, 'LOAD');
        this.media = new Le();
        this.autoplay = !1;
        this.loadOptions = this.credentialsType = this.credentials = this.queueData = this.activeTrackIds = this.playbackRate = this.currentTime = void 0;
    };
    Ck = function (a) {
        Yk.call(this);
        this.type = 'PRELOAD';
        this.itemId = a;
    };
    el = function () {
        $k.call(this, 'EDIT_TRACKS_INFO');
        this.enableTextTracks = this.isSuggestedLanguage = this.textTrackStyle = this.language = this.activeTrackIds = void 0;
    };
    fl = function () {
        $k.call(this, 'SEEK');
        this.relativeTime = this.currentTime = this.resumeState = void 0;
    };
    gl = function () {
        $k.call(this, 'QUEUE_UPDATE');
        this.shuffle = this.repeatMode = this.items = this.jump = this.currentTime = this.currentItemId = void 0;
    };
    hl = function (a) {
        $k.call(this, 'SESSION_STATE');
        this.sessionState = a;
    };
    il = function (a) {
        this.j = a;
    };
    jl = function (a) {
        a.j.j(new $k('PLAY'));
    };
    kl = function (a) {
        a.j.j(new $k('PAUSE'));
    };
    ll = function (a, b) {
        const c = new fl();
        c.relativeTime = b;
        a.j.j(c);
    };
    ml = function (a) {
        const b = new gl();
        b.jump = 1;
        a.j.j(b);
    };
    nl = function (a) {
        const b = new gl();
        b.jump = -1;
        a.j.j(b);
    };
    ol = function (a, b, c) {
        const d = new Ui();
        d.userAction = b;
        c && (d.clear = !0);
        a.j.I(d);
    };
    ql = function (a) {
        const b = this;
        this.l = this.o = null;
        this.F = function () { };
        this.B = a;
        this.D = _.Vg.M();
        gi(this.D).then(function () {
            pl(b, b.D);
        });
    };
    rl = function (a, b) {
        if (!a.l) throw Error('Command and control channel is not set');
        a.l.send('system-0', b);
    };
    pl = function (a, b) {
        a.o = b.j[cast.receiver.media.ob] || null;
        a.o ? (Ig(a.o, function (c, d, e) {
            if (e && e.type === 'MEDIA_STATUS') {
                if (d = e.status[0]) a.A = d.mediaSessionId;
                a.F(d);
            }
            return c === a.B;
        }), a.l = b.j[cast.receiver.Pb.cc] || null, a.l && Ig(a.l, function (c) {
            return c === a.B;
        })) : _.F(sl, 'media namespace is not available.');
    };
    tl = function (a, b, c) {
        _.z.call(this);
        this.j = null;
        this.A = !1;
        this.D = a;
        this.B = c;
        this.l = b || window;
        this.o = (0, _.Na)(this.Cm, this);
    };
    ul = function (a) {
        a = a.l;
        return a.requestAnimationFrame || a.webkitRequestAnimationFrame || a.mozRequestAnimationFrame || a.oRequestAnimationFrame || a.msRequestAnimationFrame || null;
    };
    vl = function (a) {
        a = a.l;
        return a.cancelAnimationFrame || a.cancelRequestAnimationFrame || a.webkitCancelRequestAnimationFrame || a.mozCancelRequestAnimationFrame || a.oCancelRequestAnimationFrame || a.msCancelRequestAnimationFrame || null;
    };
    wl = function (a, b, c) {
        _.z.call(this);
        this.j = a;
        this.A = b || 0;
        this.l = c;
        this.o = (0, _.Na)(this.Dm, this);
    };
    zl = function (a) {
        a = _.Ka(a);
        delete xl[a];
        _.pb(xl) && yl && yl.stop();
    };
    Cl = function () {
        yl || (Al ? yl = new tl(function (b) {
            Bl(b);
        }, Al) : yl = new wl(function () {
            Bl(_.Pa());
        }, 20));
        const a = yl;
        a.isActive() || a.start();
    };
    Bl = function (a) {
        _.kb(xl, function (b) {
            Dl(b, a);
        });
        _.pb(xl) || Cl();
    };
    El = function () {
        _.bd.call(this);
        this.j = 0;
        this.endTime = this.startTime = null;
    };
    Fl = function (a, b, c, d) {
        El.call(this);
        if (!Array.isArray(a) || !Array.isArray(b)) throw Error('Start and end parameters must be arrays');
        if (a.length != b.length) throw Error('Start and end points must be the same length');
        this.l = a;
        this.G = b;
        this.duration = c;
        this.A = d;
        this.coords = [];
        this.progress = this.B = 0;
        this.o = null;
    };
    Dl = function (a, b) {
        b < a.startTime && (a.endTime = b + a.endTime - a.startTime, a.startTime = b);
        a.progress = (b - a.startTime) / (a.endTime - a.startTime);
        a.progress > 1 && (a.progress = 1);
        a.B = 1E3 / (b - a.o);
        a.o = b;
        Gl(a, a.progress);
        a.progress == 1 ? (a.j = 0, zl(a), a.sb('finish'), a.sb('end')) : a.j == 1 && a.sb('animate');
    };
    Gl = function (a, b) {
        typeof a.A === 'function' && (b = a.A(b));
        a.coords = Array(a.l.length);
        for (let c = 0; c < a.l.length; c++) a.coords[c] = (a.G[c] - a.l[c]) * b + a.l[c];
    };
    Hl = function (a, b) {
        _.A.call(this, a);
        this.coords = b.coords;
        this.x = b.coords[0];
        this.y = b.coords[1];
        this.z = b.coords[2];
        this.duration = b.duration;
        this.progress = b.progress;
        this.fps = b.B;
        this.state = b.j;
    };
    Il = function (a) {
        return 1 - Math.pow(1 - a, 3);
    };
    Jl = function (a, b, c, d, e, f, g, k) {
        this.j = a;
        this.F = b;
        this.o = c;
        this.B = d;
        this.A = e;
        this.D = f;
        this.l = g;
        this.H = k;
    };
    Kl = function (a, b) {
        if (b == 0) return a.j;
        if (b == 1) return a.l;
        let c = yd(a.j, a.o, b);
        let d = yd(a.o, a.A, b);
        a = yd(a.A, a.l, b);
        c = yd(c, d, b);
        d = yd(d, a, b);
        return yd(c, d, b);
    };
    Ll = function (a, b) {
        let c = (b - a.j) / (a.l - a.j);
        if (c <= 0) return 0;
        if (c >= 1) return 1;
        for (var d = 0, e = 1, f = 0, g = 0; g < 8; g++) {
            f = Kl(a, c);
            const k = (Kl(a, c + 1E-6) - f) / 1E-6;
            if (Math.abs(f - b) < 1E-6) return c;
            if (Math.abs(k) < 1E-6) break;
            else f < b ? d = c : e = c, c -= (f - b) / k;
        }
        for (g = 0; Math.abs(f - b) > 1E-6 && g < 8; g++) f < b ? (d = c, c = (c + e) / 2) : (e = c, c = (c + d) / 2), f = Kl(a, c);
        return c;
    };
    Ml = function () {
        _.bd.call(this);
        this.l = this.j = this.J = null;
        this.o = 0;
        this.A = 'IDLE';
        this.B = null;
        const a = window;
        const b = yl && yl.isActive();
        rc(yl);
        yl = null;
        Al = a;
        b && Cl();
        this.G = !1;
    };
    Nl = function (a) {
        typeof a.j === 'number' && (a.o = a.j);
    };
    Ol = function (a) {
        return a.G && typeof a.j === 'number' && typeof a.l === 'number';
    };
    Ql = function (a, b) {
        a.dispatchEvent(new Pl(b));
    };
    Vl = function (a, b, c) {
        b !== c && Rl(a, b, c, 1E3, Sl, function (d) {
            a.dispatchEvent(new Tl(d));
        }, function (d) {
            a.dispatchEvent(new Tl(d));
            a.dispatchEvent(new Ul(d));
        });
    };
    Xl = function (a, b) {
        b = void 0 === b ? 'SCROLL_UP' : b;
        if (Ol(a) && (Wa(a.j), Wa(a.l), a.A === 'IDLE' && !a.B)) {
            if (b === 'SCROLL_UP') {
                if (a.o === a.l) return;
                b = a.j;
                var c = a.l;
            } else if (b === 'SCROLL_DOWN') {
                if (a.o === a.j) return;
                b = a.l;
                c = a.j;
            } else return;
            Rl(a, b, c, 700, Sl, function (d) {
                Ql(a, d);
            }, function (d) {
                Ql(a, d);
                a.dispatchEvent(new Wl(d));
                a.o = d;
            });
        }
    };
    Yl = function (a) {
        Ol(a) && (Wa(a.j), Wa(a.l), a.B && (a.A = 'ANIMATION_ELIGIBLE', a.B.listenOnce('pause', function (b) {
            a.o = b.coords[0];
        }), a.B.pause()));
    };
    $l = function (a, b, c) {
        Ol(a) && (Wa(a.j), Wa(a.l), a.A !== 'ANIMATION_NOT_ELIGIBLE' && (a.A === 'IDLE' && (a.A = Math.abs(c) > Math.abs(b) ? 'ANIMATION_ELIGIBLE' : 'ANIMATION_NOT_ELIGIBLE'), a.A === 'ANIMATION_ELIGIBLE' && (a.B && (a.B.ea(), a.B = null), a.o -= c, a.J && cancelAnimationFrame(a.J), a.J = requestAnimationFrame(function () {
            Wa(a.j);
            Wa(a.l);
            Ql(a, Zl(a.o, a.j, a.l));
            a.J = null;
        }))));
    };
    bm = function (a, b) {
        if (Ol(a)) {
            if (Wa(a.j), Wa(a.l), a.A !== 'ANIMATION_ELIGIBLE') a.A = 'IDLE';
            else {
                a.A = 'IDLE';
                const c = Zl(a.o, a.j, a.l);
                const d = b < 0 ? a.l : a.j;
                Rl(a, c, d, am(b, c, d), Il, function (e) {
                    Ql(a, e);
                }, function (e) {
                    Ql(a, e);
                    a.dispatchEvent(new Wl(d));
                    a.o = d;
                });
            }
        }
    };
    cm = function (a) {
        if (Ol(a)) {
            if (Wa(a.j), Wa(a.l), a.A !== 'ANIMATION_ELIGIBLE') a.A = 'IDLE';
            else {
                a.A = 'IDLE';
                const b = Zl(a.o, a.j, a.l);
                const c = b > a.l / 2 ? a.l : a.j;
                Rl(a, b, c, 300, Il, function (d) {
                    Ql(a, d);
                }, function (d) {
                    Ql(a, d);
                    a.dispatchEvent(new Wl(c));
                    a.o = c;
                });
            }
        }
    };
    Rl = function (a, b, c, d, e, f, g) {
        b = new Fl([b], [c], d, e);
        b.listen('animate', function (k) {
            f(k.coords[0]);
        });
        b.listen('finish', function (k) {
            g(k.coords[0]);
            a.B && (a.B.ea(), a.B = null);
        });
        b.play();
        a.B = b;
    };
    Pl = function (a) {
        _.A.call(this, 'DRAWER_POSITION_CHANGED');
        this.position = a;
    };
    Wl = function (a) {
        _.A.call(this, 'DRAWER_ANIMATION_FINISHED');
        this.position = a;
    };
    Tl = function (a) {
        _.A.call(this, 'CAROUSEL_SCROLL_CHANGED');
        this.scrollLeft = a;
    };
    Ul = function (a) {
        _.A.call(this, 'CAROUSEL_ANIMATION_FINISHED');
        this.scrollLeft = a;
    };
    Zl = function (a, b, c) {
        a < b ? a = b : a > c && (a = c);
        return a;
    };
    dm = function () {
        const a = new Jl(0, 0, 0.6, 0, 0, 1, 1, 1);
        return function (b) {
            b = Ll(a, b);
            if (b == 0) b = a.F;
            else if (b == 1) b = a.H;
            else {
                let c = yd(a.F, a.B, b);
                let d = yd(a.B, a.D, b);
                const e = yd(a.D, a.H, b);
                c = yd(c, d, b);
                d = yd(d, e, b);
                b = yd(c, d, b);
            }
            return b;
        };
    };
    am = function (a, b, c) {
        a = Math.abs(c - b) / Math.abs(a) * 1E3;
        a > 500 && (a = 500);
        return a;
    };
    gm = function (a) {
        cast.receiver.C.bc.call(this, function () {
            a: {
                switch (b.j) {
                    case 'REPEAT_OFF':
                        var c = 'REPEAT_ALL';
                        break a;
                    case 'REPEAT_ALL':
                    case 'REPEAT_ALL_AND_SHUFFLE':
                        c = b.l ? 'REPEAT_SINGLE' : 'REPEAT_OFF';
                        break a;
                }
                c = 'REPEAT_OFF';
            }
            b.o(c); em(b, c);
        }, '', 'btn-repeat');
        var b = this;
        this.o = a;
        this.l = !0;
        this.j = 'REPEAT_OFF';
        fm(this, this.j);
    };
    em = function (a, b) {
        a.j = b;
        a.j === 'REPEAT_ALL_AND_SHUFFLE' ? fm(a, 'REPEAT_ALL') : fm(a, a.j);
    };
    fm = function (a, b) {
        a.element.dataset.state = hm[b].state;
        a.element.title = hm[b].accessibilityText;
    };
    im = function (a, b, c) {
        cast.receiver.C.bc.call(this, function () {
            d.l(!d.j);
        }, b, c);
        var d = this;
        this.j = !1;
        this.l = a;
        this.element.setAttribute('aria-pressed', String(this.j));
    };
    jm = function (a, b) {
        b !== a.j && (a.j = b, a.element.setAttribute('aria-pressed', String(b)));
    };
    km = function (a, b, c) {
        _.z.call(this);
        this.G = c != null ? a.bind(c) : a;
        this.D = b;
        this.l = null;
        this.o = !1;
        this.B = 0;
        this.j = null;
    };
    lm = function (a) {
        a.j = _.qe(function () {
            a.j = null;
            a.o && !a.B && (a.o = !1, lm(a));
        }, a.D);
        const b = a.l;
        a.l = null;
        a.G.apply(null, b);
    };
    rm = function () {
        const a = lf.call(this) || this;
        a.V = Fe();
        a.eb = Ce() && Be();
        Ce() ? (0, cast.receiver.C.xq)(a) : (0, cast.receiver.C.yq)(a);
        a.F = a.eb ? mm(a) : null;
        a.bb = Sf.M();
        a.wa = 0;
        a.ba = !1;
        a.G = function () { };
        a.H = function () { };
        a.I = a.querySelector('#live-label');
        a.I.textContent = cast.receiver.Y.ig;
        a.o = a.querySelector('#scrubber-layer');
        a.j = a.querySelector('#scrubber');
        a.R = a.o.querySelector('#progress-fill');
        a.B = 0;
        a.qa = a.o.querySelector('#progress-seekable-range');
        a.na = a.o.querySelector('#progress-seekable-played');
        a.O = a.o.querySelector('#progress-breaks');
        a.L = a.o.querySelector('#progress-loading');
        a.xa = a.querySelector('#current-time');
        a.da = a.querySelector('#total-time');
        a.Ma = parseFloat(a.j.min);
        a.ra = parseFloat(a.j.max);
        a.W = 0;
        a.D = 0;
        a.Aa = '';
        a.l = !1;
        a.La = !1;
        a.Ca = !1;
        a.Z = !1;
        a.ca = function () { };
        a.fa = !1;
        a.T = void 0;
        a.J = void 0;
        a.ia = null;
        a.A = Ff.M();
        a.Pa = new km(function (b) {
            const c = parseFloat(b) + a.W;
            a.xa.textContent = a.ia ? cast.receiver.C.aa.Kg(a.ia + c) : cast.receiver.C.aa.Ua(c);
            nm(a, parseFloat(b), a.D);
        }, 100);
        a.j.addEventListener('input', function () {
            om(a, a.j.value);
        });
        a.j.addEventListener('change',
            function () {
                pm(a);
            });
        a.j.addEventListener('click', function () {
            a.l && pm(a);
        });
        a.j.addEventListener('touchend', function () {
            a.l = !1;
        });
        a.j.addEventListener('touchcancel', function () {
            a.l = !1;
        });
        Be() && (Uf(a, !0), a.addEventListener('focus', function () {
            a.bb.focus(a.j);
        }), a.j.addEventListener('keydown', function (b) {
            b.preventDefault();
            b.key === 'ArrowLeft' && (a.l || a.H(), a.j.value = String(parseInt(a.j.value, 10) - 10), om(a, a.j.value), Hf(a.A, !0), b.stopPropagation());
            b.key === 'ArrowRight' && (a.l || a.H(), a.j.value = String(parseInt(a.j.value,
                10) + 10), om(a, a.j.value), Hf(a.A, !0), b.stopPropagation());
            b.key === 'Enter' && (a.l ? (a.ca(parseFloat(a.j.value) + a.W), a.G(), a.l = !1, Hf(a.A, !1), If(a.A)) : (a.ba ? a.H() : a.G(), Lf(a.A)), b.stopPropagation());
        }), a.j.addEventListener('blur', function () {
            a.j.value = a.wa;
            const b = a.j.value;
            typeof a.B === 'number' && qm(a, b);
            a.Pa.A(b);
            a.l && (a.l = !1, a.G(), Hf(a.A, !1), Lf(a.A));
        }));
        return a;
    };
    mm = function (a) {
        const b = _.Dd(document, 'IMG');
        b.setAttribute('role', 'presentation');
        b.classList.add('btn-icon');
        const c = _.Dd(document, 'DIV');
        c.classList.add('play-pause-indicator', 'btn-play-pause');
        c.appendChild(b);
        Ed(c, a.querySelector('play-pause-placeholder'));
        return c;
    };
    om = function (a, b) {
        a.l = !0;
        typeof a.B === 'number' && qm(a, b);
        a.Pa.A(b);
    };
    pm = function (a) {
        a.ca(parseFloat(a.j.value) + a.W);
        a.l = !1;
    };
    qm = function (a, b) {
        let c = a.ra - a.B;
        b -= a.B;
        c = c ? b / c : 0;
        b = (0.5 - c) / 200;
        c > 0 && (c += b);
        a.R.style.transform = `scaleX(${c})`;
        a.R.style.left = `${a.B / a.D * 100}%`;
        a.T ? b = a.T : (a.T = parseInt(window.getComputedStyle(a.o, null).width, 10), b = a.T || void 0);
        if (a.J) var d = a.J;
        else a.J = parseInt(getComputedStyle(a.L).getPropertyValue('--loading-bar-width'), 10), d = a.J || void 0;
        a.L.style.transform = b && d ? `scaleX(${b / d * (1 - c)})` : 'scaleX(0)';
    };
    sm = function (a, b) {
        a.ba = b;
        if (a.F) {
            const c = b ? cast.receiver.Y.so : cast.receiver.Y.qo;
            a.F.dataset.state = b ? 'playing' : 'paused';
            a.F.title = c;
        }
    };
    tm = function (a) {
        return a.fa && !a.Z && a.style.display != 'none';
    };
    um = function (a, b) {
        a.V && b === a.Ma || (a.j.min = String(b), a.Ma = parseFloat(a.j.min));
    };
    vm = function (a, b) {
        a.V && b === a.ra || (a.j.max = String(b), a.ra = parseFloat(a.j.max));
    };
    wm = function (a, b) {
        a.V && a.Aa === b || (a.da.textContent = b, a.Aa = b);
    };
    xm = function (a, b) {
        for (; a.O.firstChild;) a.O.removeChild(a.O.firstChild);
        b && b.forEach(function (c) {
            const d = c.width > 1 ? c.width : 1;
            const e = document.createElement('div');
            e.classList.add('break-mark');
            c.position + d > 100 ? e.style.right = '0' : e.style.left = `${c.position}%`;
            e.style.width = `${d}%`;
            a.O.appendChild(e);
        });
    };
    ym = function (a) {
        const b = a.D <= 0 || !a.Ca || a.Z;
        a.j.disabled = b;
        Be() && Uf(a, !b);
    };
    nm = function (a, b, c) {
        c = void 0 === c ? -1 : c;
        c = !cast.receiver.C.aa.qd(c) || c <= 0 ? cast.receiver.C.aa.Ua(b) : cast.receiver.Y.hc(cast.receiver.Y.io, {
            CURRENT_TIME: cast.receiver.C.aa.Ua(b),
            DURATION: cast.receiver.C.aa.Ua(c),
        });
        a.j.setAttribute('aria-valuenow', b);
        a.j.setAttribute('aria-valuetext', c);
    };
    Em = function (a, b, c) {
        const d = this;
        this.l = a;
        this.j = Sf.M();
        this.F = a.querySelector('goog-timeline');
        this.A = this.l.querySelector('goog-buttons-bar');
        this.D = this.l.querySelector('#break-skip-btn');
        this.L = a.querySelector('#alert-show-controls');
        this.L.textContent = cast.receiver.Y.Qi;
        this.J = a.querySelector('#alert-hide-controls');
        this.J.textContent = cast.receiver.Y.Pi;
        this.H = !1;
        this.G = !0;
        this.I = this.O = this.B = !1;
        this.T = b;
        this.R = c;
        this.o = Ff.M();
        this.o.o = 4500;
        this.o.listen('EXPIRED', function () {
            zm(d);
        });
        this.o.J = !0;
        Uf(this.l, !0);
        this.j.focus(this.l);
        this.j.D = function () {
            const e = d.j.A;
            e && Vf(e) ? d.j.focus(e) : d.B ? Am(d) : Bm(d);
        };
        this.l.addEventListener('keyup', function (e) {
            Cm(e);
        });
        this.l.addEventListener('keypress', function (e) {
            Cm(e);
        });
        this.l.addEventListener('keydown', function (e) {
            Cm(e);
            const f = e.key;
            f !== 'Enter' || d.B || (d.H ? d.T() : d.R());
            f === 'BrowserBack' ? (e.stopPropagation(), d.B && (e.preventDefault(), zm(d))) : (Lf(d.o), d.B ? (f === 'ArrowDown' && d.j.isFocused(d.F) && Vf(d.A) && d.j.focus(d.A), f === 'ArrowUp' && (!d.j.isFocused(d.F) && Vf(d.F)
                ? d.j.focus(d.F) : zm(d)), f === 'ArrowRight' && d.j.isFocused(d.A) && Vf(d.D) && d.j.focus(d.D), f === 'ArrowLeft' && d.j.isFocused(d.D) && d.j.focus(d.A)) : Dm(d));
        });
    };
    Am = function (a) {
        Vf(a.F) ? a.j.focus(a.F) : Vf(a.D) ? a.j.focus(a.D) : Vf(a.A) ? a.j.focus(a.A) : a.j.focus(a.l);
    };
    Bm = function (a) {
        Vf(a.D) ? a.j.focus(a.D) : a.j.focus(a.l);
        a.A.l = null;
    };
    Dm = function (a) {
        a.B = !0;
        Fm(a);
        a.fd();
    };
    zm = function (a) {
        a.B = !1;
        Fm(a);
        a.A.l = null;
        a.fd();
    };
    Fm = function (a) {
        const b = a.B;
        J(a.L, b);
        J(a.J, !b);
        a.l.classList.toggle('active', b);
    };
    Cm = function (a) {
        Gm.includes(a.key) && (a.preventDefault(), a.stopPropagation());
    };
    Hm = function (a) {
        return _.Ub(a);
    };
    Im = function (a) {
        this.isValid = a;
    };
    Jm = function (a) {
        return new Im(function (b) {
            return b.substr(0, a.length + 1).toLowerCase() === `${a}:`;
        });
    };
    Km = function (a) {
        return a && a.Ub ? a.vb() : a;
    };
    Lm = function (a, b) {
        return b;
    };
    Mm = function (a, b) {
        throw Error(void 0 === b ? `unexpected value ${a}!` : b);
    };
    Pm = function (a, b, c) {
        if (Object.hasOwnProperty.call(Nm, a) && (a = Nm[a], Object.hasOwnProperty.call(a, b) && (a = a[b], a instanceof Array))) {
            for (var d = null, e = !1, f = 0, g = a.length; f < g; ++f) {
                const k = a[f];
                let l = k.Ka;
                if (!l) return k.ja;
                d === null && (d = {});
                l = Object.hasOwnProperty.call(d, l) ? d[l] : d[l] = c(l);
                if (l === k.Na) return k.ja;
                l == null && (e = !0);
            }
            if (e) return null;
        }
        b = Om[b];
        return typeof b === 'number' ? b : null;
    };
    Sm = function (a) {
        let b = Qm;
        if (!b) {
            b = Rm();
            const c = {};
            for (d in b) c[b[d]] = d;
            b = Qm = c;
        }
        var d = b[a];
        return typeof d === 'string' ? d : Cd(a);
    };
    Tm = function (a) {
        a = String(a).toLowerCase();
        const b = Rm()[a];
        return typeof b === 'string' ? b : Bd(a);
    };
    Um = function (a) {
        a = a.toLowerCase();
        a = Rm()[a];
        return typeof a === 'string' ? a : null;
    };
    Rm = function () {
        if (!Vm) {
            for (var a = { ...Wm }, b = _.q(Xm), c = b.next(); !c.done; c = b.next()) c = c.value, a[c.toLowerCase()] = c;
            Vm = a;
        }
        return Vm;
    };
    gn = function (a, b) {
        const c = window.customElements;
        return c && c.get(a) || !0 === Ym[a] ? 2 : b.name === 'HTMLUnknownElement' ? 1 : b.name === 'HTMLElement' && bn.test(a) ? 3 : 0;
    };
    kn = function (a, b) {
        switch (b) {
            case 'innerHTML':
                return hn(a) === 1 ? 2 : null;
            case 'textContent':
                return a = hn(a), a === 1 || a === 6 ? 1 : null;
            default:
                var c; var
                    d;
                return (d = (c = jn[a.localName]) == null ? void 0 : c[b]) != null ? d : null;
        }
    };
    hn = function (a) {
        const b = a.localName;
        const c = gn(b, a.constructor);
        switch (c) {
            case 0:
            case 1:
                return ln(b, a);
            case 3:
            case 2:
                return 1;
            default:
                Mm(c, 'got an unknown element classification');
        }
    };
    ln = function (a, b) {
        const c = Object.hasOwnProperty.call(mn, a) ? mn[a] : null;
        return c !== null ? c : Object.hasOwnProperty.call(nn, a) && b instanceof SVGElement ? nn[a] : null;
    };
    pn = function (a) {
        return (a = a.split(on, 2)) ? {
            url: a[0],
            metadata: a[1],
        } : null;
    };
    rn = function (a) {
        let b = String(a.url).replace(qn, encodeURIComponent);
        if (a = a.metadata) {
            qn.lastIndex = 0;
            if (qn.test(a)) return null;
            b += ` ${a}`;
        }
        return b;
    };
    sn = function (a, b, c) {
        a ? console.warn(b, c) : console.log(b);
    };
    tn = function (a, b, c) {
        return c;
    };
    Bn = function (a, b, c) {
        return [, {
            tb(d, e, f) {
                return f;
            },
            ub: void 0,
            Fb: void 0,
            Gb: void 0,
        }, {
            tb: void 0,
            ub: void 0,
            Fb: void 0,
            Gb: 'HTML',
        }, {
            tb: void 0,
            ub: void 0,
            Fb: un,
            Gb: 'URL',
        }, {
            tb: void 0,
            ub: void 0,
            Fb: un,
            Gb: 'RESOURCE_URL',
        }, {
            tb: void 0,
            ub: void 0,
            Fb: vn,
            Gb: 'STYLE',
        }, , {
                tb: void 0,
                ub: void 0,
                Fb: wn,
                Gb: 'JAVASCRIPT',
            }, {
                tb: void 0,
                ub(d, e, f) {
                    f = String(f).toLowerCase();
                    a: {
                        let g = null;
                        (d = xn[d]) && (g = d[e]);
                        if (typeof g !== 'number' && ((d = xn['*']) && (g = d[e]), typeof g !== 'number')) {
                            e = !1;
                            break a;
                        }
                        e = !0 === yn[g][String(f).toLowerCase()];
                    }
                    return e
                        ? f : vn;
                },
                Fb: vn,
                Gb: void 0,
            }, {
                tb: void 0,
                ub: void 0,
                Fb: vn,
                Gb: 'CONSTANT',
            }, {
                tb: void 0,
                ub(d, e, f) {
                    return a.test(f) ? f : vn;
                },
                Fb: vn,
                Gb: 'CONSTANT',
            }, {
                tb(d, e, f, g) {
                    if (typeof f === 'string') var k = (k = f.match(zn)) ? k.map(pn).filter(Boolean) : [];
                    else if (Array.isArray(f)) k = f;
                    else return un;
                    let l = k;
                    k = [];
                    let m = [];
                    const n = {};
                    if (Array.isArray(l)) {
                        for (let t = 0, v = l.length; t < v; ++t) {
                            const x = l[t];
                            const C = x && x.url;
                            if (C) {
                                const E = b(C, 'URL', n);
                                if (E) {
                                    const T = E !== n;
                                    (T ? k : m).push({
                                        url: T ? E : C,
                                        metadata: x.metadata,
                                    });
                                }
                            }
                        }
                    } else m.push(l);
                    l = m.length ? JSON.stringify(m)
                        : null;
                    m = An;
                    if (k.length) {
                        if (!Array.isArray(k)) throw Error();
                        m = k.map(rn).filter(Boolean).join(' , ') || An;
                    }
                    l && c && c(!0, `Failed to sanitize attribute value of <${d}>: <${d} ${e}="${f}">: ${l}`, g);
                    return m === An ? un : m;
                },
                ub: void 0,
                Fb: void 0,
                Gb: void 0,
            }];
    };
    En = function (a, b) {
        if (void 0 !== window.ShadyCSS && (!window.ShadyCSS.nativeShadow || window.ShadyCSS.ApplyShim)) {
            let c; let d; const e = ((c = window.ShadyDOM) == null ? 0 : c.inUse) && !0 === ((d = window.ShadyDOM) == null ? void 0 : d.noPatch) ? window.ShadyDOM.wrap : function (t) {
                return t;
            };
            const f = function (t) {
                let v = Cn.get(t);
                void 0 === v && Cn.set(t, v = []);
                return v;
            };
            const g = new Map();
            const k = a.createElement;
            a.createElement = function (t, v) {
                t = k.call(a, t, v);
                v = v == null ? void 0 : v.scope;
                void 0 !== v && (window.ShadyCSS.nativeShadow || window.ShadyCSS.prepareTemplateDom(t, v), void 0
                    === v || Dn.has(v) || (v = f(v), v.push.apply(v, _.ja(Array.from(t.content.querySelectorAll('style')).map(function (x) {
                    let C;
                    (C = x.parentNode) == null || C.removeChild(x);
                    return x.textContent;
                })))));
                return t;
            };
            const l = document.createDocumentFragment();
            const m = document.createComment('');
            b = b.prototype;
            const n = b.Ob;
            b.Ob = function (t, v) {
                v = void 0 === v ? this : v;
                const x = e(this.ab).parentNode;
                let C; let E = (C = this.options) == null ? void 0 : C.scope;
                let T;
                if ((x instanceof ShadowRoot || x === ((T = this.options) == null ? void 0 : T.zx)) && void 0 !== E && !Dn.has(E)) {
                    C = this.ab;
                    T = this.Nb;
                    l.appendChild(m);
                    this.ab = m;
                    this.Nb = null;
                    n.call(this, t, v);
                    t = (t == null ? 0 : t._$litType$) ? this.ma.ng.Dc : document.createElement('template');
                    v = f(E);
                    const I = v.length !== 0;
                    if (I) {
                        const Y = document.createElement('style');
                        Y.textContent = v.join('\n');
                        t.content.appendChild(Y);
                    }
                    Dn.add(E);
                    Cn.delete(E);
                    window.ShadyCSS.prepareTemplateStyles(t, E);
                    I && window.ShadyCSS.nativeShadow && (E = t.content.querySelector('style'), E !== null && t.content.appendChild(E));
                    l.removeChild(m);
                    let Gb;
                    if ((Gb = window.ShadyCSS) == null ? 0 : Gb.nativeShadow) {
                        Gb = t.content.querySelector('style'), Gb !== null && l.appendChild(Gb.cloneNode(!0));
                    }
                    x.insertBefore(l, T);
                    this.ab = C;
                    this.Nb = T;
                } else n.call(this, t, v);
            };
            b.hj = function (t) {
                let v; let
                    x = (v = this.options) == null ? void 0 : v.scope;
                v = g.get(x);
                void 0 === v && g.set(x, v = new Map());
                x = v.get(t.strings);
                void 0 === x && v.set(t.strings, x = new a(t, this.options));
                return x;
            };
        }
    };
    Fn = function (a) {
        window.j && window.dispatchEvent(new CustomEvent('lit-debug', {
            detail: a,
        }));
    };
    Gn = function (a) {
        return a;
    };
    Hn = function () {
        return Gn;
    };
    Jn = function (a) {
        return a === null || typeof a !== 'object' && typeof a !== 'function' || In(a);
    };
    Kn = function (a) {
        const b = _.ya.apply(1, arguments);
        const c = {};
        return c._$litType$ = 1, c.strings = a, c.values = b, c;
    };
    On = function (a, b) {
        if (b == null) throw new TypeError(`The container to render into may not be ${b}`);
        const c = Ln++;
        let d = b._$litPart$;
        Fn == null || Fn({
            kind: 'begin render',
            id: c,
            value: a,
            container: b,
            options: void 0,
            mk: d,
        });
        void 0 === d && (b._$litPart$ = d = new Mn(b.insertBefore(Nn.createComment(''), null), null, void 0, {}));
        d.Ob(a);
        Fn == null || Fn({
            kind: 'end render',
            id: c,
            value: a,
            container: b,
            options: void 0,
            mk: d,
        });
        return d;
    };
    Zn = function (a, b) {
        const c = a.strings;
        let d = a._$litType$;
        this.parts = [];
        let e = a = 0;
        const f = c.length - 1;
        const g = this.parts;
        let k = c.length - 1;
        let l = [];
        for (var m = d === 2 ? '<svg>' : '', n, t = Pn, v = 0; v < k; v++) {
            for (var x = c[v], C = -1, E = void 0, T = 0, I; T < x.length;) {
                t.lastIndex = T;
                I = t.exec(x);
                if (I === null) break;
                T = t.lastIndex;
                if (t === Pn) {
                    if (I[1] === '!--') t = Qn;
                    else if (void 0 !== I[1]) t = Rn;
                    else if (void 0 !== I[2]) Sn.test(I[2]) && (n = new RegExp(`</${I[2]}`, 'g')), t = Tn;
                    else if (void 0 !== I[3]) throw Error('Bindings in tag names are not supported. Please use static templates instead. See https://lit.dev/docs/templates/expressions/#static-expressions');
                } else t === Tn ? I[0] === '>' ? (C = void 0, t = (C = n) != null ? C : Pn, C = -1) : void 0 === I[1] ? C = -2 : (C = t.lastIndex - I[2].length, E = I[1], t = void 0 === I[3] ? Tn : I[3] === '"' ? Un : Vn) : t === Un || t === Vn ? t = Tn : t === Qn || t === Rn ? t = Pn : (t = Tn, n = void 0);
            }
            console.assert(C === -1 || t === Tn || t === Vn || t === Un, 'unexpected parse state B');
            T = t === Tn && c[v + 1].startsWith('/>') ? ' ' : '';
            m += t === Pn ? x + Wn : C >= 0 ? (l.push(E), `${x.slice(0, C)}$lit$${x.slice(C)}`) + Xn + T : x + Xn + (C === -2 ? (l.push(void 0), v) : T);
        }
        n = m + (c[k] || '<?>') + (d === 2 ? '</svg>' : '');
        if (!Array.isArray(c) || !c.hasOwnProperty('raw')) {
            throw Error("Internal Error: expected template strings to be an array\n          with a 'raw' field. Faking a template strings array by\n          calling html or svg like an ordinary function is effectively\n          the same as calling unsafeHtml and can lead to major security\n          issues, e.g. opening your code up to XSS attacks.\n\n          If you're using the html or svg tagged template functions normally\n          and and still seeing this error, please file a bug at\n          https://github.com/lit/lit/issues/new?template=bug_report.md\n          and include information about your build tooling, if any.".replace(/\n */g,
                '\n'));
        }
        l = [void 0 !== Yn ? Yn.createHTML(n) : n, l];
        l = _.q(l);
        n = l.next().value;
        l = l.next().value;
        this.Dc = Zn.createElement(n, b);
        $n.currentNode = this.Dc.content;
        d === 2 && (b = this.Dc.content, d = b.firstChild, d.remove(), b.append.apply(b, _.ja(d.childNodes)));
        for (; (b = $n.nextNode()) !== null && g.length < f;) {
            if (b.nodeType === 1) {
                d = b.localName;
                if (/^(?:textarea|template)$/i.test(d) && b.innerHTML.includes(Xn)) {
                    n = `Expressions are not supported inside \`${d}\` elements. See https://lit.dev/msg/expression-in-${d} for more information.`;
                    if (d === 'template') throw Error(n);
                    ao('', n);
                }
                if (b.hasAttributes()) {
                    d = [];
                    n = _.q(b.getAttributeNames());
                    for (k = n.next(); !k.done; k = n.next()) {
                        if (m = k.value, m.endsWith('$lit$') || m.startsWith(Xn)) {
                            k = l[e++], d.push(m), void 0 !== k ? (m = b.getAttribute(`${k.toLowerCase()}$lit$`).split(Xn), k = /([.?@])?(.*)/.exec(k), g.push({
                                type: 1,
                                index: a,
                                name: k[2],
                                strings: m,
                                He: k[1] === '.' ? bo : k[1] === '?' ? co : k[1] === '@' ? eo : fo,
                            })) : g.push({
                                type: 6,
                                index: a,
                            });
                        }
                    }
                    d = _.q(d);
                    for (k = d.next(); !k.done; k = d.next()) b.removeAttribute(k.value);
                }
                if (Sn.test(b.tagName)
                    && (d = b.textContent.split(Xn), n = d.length - 1, n > 0)) {
                    b.textContent = go ? go.emptyScript : '';
                    for (k = 0; k < n; k++) {
                        b.append(d[k], Nn.createComment('')), $n.nextNode(), g.push({
                            type: 2,
                            index: ++a,
                        });
                    }
                    b.append(d[n], Nn.createComment(''));
                }
            } else if (b.nodeType === 8) {
                if (b.data === ho) {
                    g.push({
                        type: 2,
                        index: a,
                    });
                } else {
                    for (d = -1; (d = b.data.indexOf(Xn, d + 1)) !== -1;) {
                        g.push({
                            type: 7,
                            index: a,
                        }), d += Xn.length - 1;
                    }
                }
            }
            a++;
        }
        Fn == null || Fn({
            kind: 'template prep',
            template: this,
            Xw: this.Dc,
            parts: this.parts,
            strings: c,
        });
    };
    jo = function (a, b, c, d) {
        c = void 0 === c ? a : c;
        let e;
        if (b === io) return b;
        let f; let
            g = void 0 !== d ? (f = c.ij) == null ? void 0 : f[d] : c.Wq;
        f = Jn(b) ? void 0 : b._$litDirective$;
        let k;
        if (((k = g) == null ? void 0 : k.constructor) !== f) {
            let l; let
                m;
            (l = g) == null || (m = l._$notifyDirectiveConnectionChanged) == null || m.call(l, !1);
            void 0 === f ? g = void 0 : (g = new f(a), g.Uq(a, c, d));
            if (void 0 !== d) {
                let n;
                ((n = (e = c).ij) != null ? n : e.ij = [])[d] = g;
            } else c.Wq = g;
        }
        void 0 !== g && (b = jo(a, g.Vq(a, b.values), g, d));
        return b;
    };
    ko = function (a, b) {
        this.j = [];
        this.lg = void 0;
        this.ng = a;
        this.Oa = b;
    };
    Mn = function (a, b, c, d) {
        this.type = 2;
        this.ma = lo;
        this.lg = void 0;
        this.ab = a;
        this.Nb = b;
        this.Oa = c;
        this.options = d;
        let e;
        this.jj = (e = d == null ? void 0 : d.isConnected) != null ? e : !0;
        this.ed = void 0;
    };
    fo = function (a, b, c, d, e) {
        this.type = 1;
        this.ma = lo;
        this.lg = void 0;
        this.element = a;
        this.name = b;
        this.Oa = d;
        this.options = e;
        c.length > 2 || c[0] !== '' || c[1] !== '' ? (this.ma = Array(c.length - 1).fill(new String()), this.strings = c) : this.ma = lo;
        this.cd = void 0;
    };
    bo = function () {
        fo.apply(this, arguments);
        this.type = 3;
    };
    co = function () {
        fo.apply(this, arguments);
        this.type = 4;
    };
    eo = function (a, b, c, d, e) {
        fo.call(this, a, b, c, d, e);
        this.type = 5;
        if (void 0 !== this.strings) throw Error(`A \`<${a.localName}>\` has a \`@${b}=...\` listener with invalid content. Event listeners in templates must have exactly one expression and no surrounding text.`);
    };
    mo = function (a, b, c) {
        this.element = a;
        this.type = 6;
        this.lg = void 0;
        this.Oa = b;
        this.options = c;
    };
    no = function () {
        const a = this;
        this.promise = new Promise(function (b, c) {
            a.resolve = b;
            a.reject = c;
        });
    };
    po = function () {
        const a = lf.call(this) || this;
        a.G = !1;
        a.H = new no();
        oo(a);
        return a;
    };
    oo = function (a) {
        a.G || (a.G = !0, setTimeout(function () {
            a.G = !1;
            a.F();
            a.H.resolve();
        }, 0));
    };
    qo = function (a, b, c) {
        b = new CustomEvent(b, {
            bubbles: !0,
            composed: !0,
            detail: void 0 === c ? null : c,
        });
        a.dispatchEvent(b);
    };
    ro = function (a) {
        return void 0 !== (a == null ? void 0 : a._$litType$);
    };
    to = function (a, b) {
        const c = so(a.ab).parentNode;
        const d = a.Nb;
        if (void 0 === b) so(c).insertBefore(document.createComment(''), d), so(c).insertBefore(document.createComment(''), d);
        else {
            const e = so(b.Nb).nextSibling;
            const f = b.Oa;
            const g = f !== a;
            if (g) {
                let k;
                (k = b.Uw) == null || k.call(b, a);
                b.Oa = a;
                let l;
                void 0 !== b.mg && (l = a.qb) !== f.qb && b.mg(l);
            }
            if (e !== d || g) { for (a = b.ab; a !== e;) b = so(a).nextSibling, so(c).insertBefore(a, d), a = b; }
        }
    };
    uo = function (a) {
        return function () {
            const b = _.ya.apply(0, arguments);
            const c = {};
            return c._$litDirective$ = a, c.values = b, c;
        };
    };
    vo = function () { };
    wo = function () {
        this.o = new WeakMap();
    };
    xo = function (a) {
        let b;
        if (a.type !== 1 || a.name !== 'class' || ((b = a.strings) == null ? void 0 : b.length) > 2) throw Error('`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.');
    };
    zo = function () {
        this.l = yo;
    };
    Ao = function (a) {
        let b;
        if (a.type !== 1 || a.name !== 'style' || ((b = a.strings) == null ? void 0 : b.length) > 2) throw Error('The `styleMap` directive must be used in the `style` attribute and must be the only part in the attribute.');
    };
    Bo = function () {
        const a = po.call(this) || this;
        a.l = '';
        a.j = !1;
        a.o = !0;
        a.attachShadow({
            mode: 'open',
        });
        return a;
    };
    Do = function (a) {
        return Kn(Co, a.j ? cast.receiver.Y.Ti : cast.receiver.Y.Ui, a.j && !a.o ? 'true' : 'false', function () {
            a.j ? qo(a, 'PAUSE') : qo(a, 'PLAY');
        }, a.j ? 'pause-icon' : 'play-icon');
    };
    Go = function (a) {
        return a.l ? Kn(Eo, cast.receiver.Y.fo, Fo({
            content: cast.receiver.C.aa.Va(a.l),
        }), function () {
            return qo(a, 'ALBUM_ART_CLICK');
        }) : null;
    };
    Ho = function (a) {
        switch (navigator.language.split('-')[0]) {
            case 'ja':
                var b = {
                    PREVIOUS: '\u524d\u306e\u30da\u30fc\u30b8',
                    SHOW_MORE: '\u6b21\u306e\u30da\u30fc\u30b8',
                    PLAY_FIRST: '1\u3064\u76ee\u3092\u518d\u751f\u3057\u3066',
                };
                b.PLAY_TITLE = `${a}\u3092\u518d\u751f\u3057\u3066`;
                return b;
            default:
                return b = {
                    PREVIOUS: 'Previous page',
                    SHOW_MORE: 'Next page',
                    PLAY_FIRST: 'Play the first one',
                }, b.PLAY_TITLE = `Play ${a}`, b;
        }
    };
    Io = function () {
        const a = po.call(this) || this;
        a.attachShadow({
            mode: 'open',
        });
        a.l = null;
        a.o = !1;
        a.D = !1;
        a.B = !1;
        a.A = !1;
        a.j = !0;
        a.I = null;
        a.J = new km(function (b) {
            b.closest('goog-suggestions-bar') || (b = a.shadowRoot.querySelector('.suggestions-bar-root')) && !b.classList.contains('is-hidden') && (Ef(cast.receiver.C.X.K.jn), a.j = !0, oo(a));
        }, 1E3);
        return a;
    };
    Mo = function (a, b) {
        if (!b || b.items.length === 0) return Kn(Jo);
        const c = b.items.find(function (f) {
            return !!f.title && f.title.length <= 14;
        });
        const d = Ho(c ? c.title : '');
        const e = [{
            De: 'play-first-chip',
            Ee() {
                const f = b.items[0];
                K(cast.receiver.C.X.K.ue, 3);
                qo(a, 'PLAY_CHIP_SELECTED', f);
            },
            label: d.PLAY_FIRST,
        }];
        c && e.push({
            De: 'play-title-chip',
            Ee() {
                K(cast.receiver.C.X.K.ue, 4);
                qo(a, 'PLAY_CHIP_SELECTED', c);
            },
            label: d.PLAY_TITLE,
        });
        a.B && e.push({
            De: 'show-more-chip',
            Ee() {
                K(cast.receiver.C.X.K.ue, 2);
                qo(a, 'SCROLL_CHIP_SELECTED',
                    'SCROLL_RIGHT');
            },
            label: d.SHOW_MORE,
        });
        a.D && e.push({
            De: 'previous-chip',
            Ee() {
                K(cast.receiver.C.X.K.ue, 1);
                qo(a, 'SCROLL_CHIP_SELECTED', 'SCROLL_LEFT');
            },
            label: d.PREVIOUS,
        });
        return Kn(Ko, e.map(function (f) {
            return Kn(Lo, 'suggestion-chip', f.De, f.Ee, f.label);
        }));
    };
    No = function (a) {
        return !!a && a.items.length > 0;
    };
    Po = function () {
        const a = po.call(this) || this;
        a.attachShadow({
            mode: 'open',
        });
        a.V = '0';
        a.W = 'hidden';
        a.ba = 'visible';
        a.Z = 'false';
        a.L = 'false';
        a.J = 'scroll';
        a.j = null;
        a.o = null;
        a.D = !0;
        a.B = null;
        a.I = null;
        a.A = new Bo();
        a.l = De() && ['en', 'ja'].includes(navigator.language.split('-')[0]) ? new Io() : null;
        a.l && a.l.addEventListener('PLAY_CHIP_SELECTED', function (b) {
            a.B && a.B(b.detail);
        });
        a.T = 0;
        a.O = !1;
        a.R = !1;
        Oo(a);
        return a;
    };
    Qo = function (a, b) {
        if (!a.j || !b) return !0;
        b = b.items;
        a = a.j.items;
        if (b.length !== a.length) return !0;
        for (let c = 0; c < b.length; c++) { if (b[c].entity !== a[c].entity) return !0; }
        return !1;
    };
    Ro = function (a, b) {
        a.D !== b && (a.D = b, oo(a));
    };
    Oo = function (a) {
        xa(function (b) {
            if (b.j == 1) return qa(b, a.H.promise, 2);
            qo(a, 'INITIAL_BROWSE_RENDER_COMPLETE');
            b.j = 0;
        });
    };
    So = function (a, b) {
        let c; let
            d;
        xa(function (e) {
            if (e.j == 1) return qa(e, a.H.promise, 2);
            c = a.shadowRoot.querySelector('.media-browse-logo');
            d = window.getComputedStyle(c, null);
            d.backgroundImage === 'none' && cast.receiver.C.aa.Rd(b).then(function () {
                a.o !== b && (a.o = b, oo(a));
            }).catch(function () {
                a.o !== '' && (a.o = '', oo(a));
            });
            e.j = 0;
        });
    };
    To = function (a, b) {
        a.I = b;
    };
    Yo = function (a, b) {
        if (!b) {
            return Kn(Uo, Fo({
                overflowX: a.J,
            }));
        }
        const c = b.targetAspectRatio ? b.targetAspectRatio.replace(/_/g, '-').toLowerCase() : '';
        const d = [];
        let e = {};
        b = _.q(b.items);
        for (let f = b.next(); !f.done; e = {
            zc: e.zc,
        }, f = b.next()) {
            e.zc = f.value, e.zc && (f = Kn(Vo, c, function (g) {
                return function () {
                    const k = g.zc;
                    Ef(cast.receiver.C.X.K.fn);
                    a.B && a.B(k);
                };
            }(e), Wo(e.zc), e.zc.title || '', e.zc.subtitle || ''), d.push(f));
        }
        a.T = d.length;
        return Kn(Xo, {
            handleEvent() {
                a.I && a.I();
            },
            passive: !0,
        }, d);
    };
    Zo = function (a) {
        if (!a.R && a.l) {
            a.R = !0;
            const b = a.shadowRoot.querySelector('.media-browse-root');
            ['click', 'touchstart', 'touchmove', 'touchend', 'touchcancel'].forEach(function (c) {
                b.addEventListener(c, function (d) {
                    a.l.J.A(d.target);
                });
            });
        }
    };
    $o = function (a, b, c, d, e, f) {
        f = void 0 === f ? !1 : f;
        if (a.j && a.j.items) {
            if (a.l) {
                const g = a.l;
                g.D = d;
                g.B = e;
                g.A || (g.A = !0);
                oo(g);
            }
            d = [];
            e = a.j.title;
            b = [].concat(_.ja(a.j.items)).slice(b, c + 1);
            b = _.q(b);
            for (c = b.next(); !c.done; c = b.next()) c = c.value, d.push(new Pi(c.title, c.entity));
            d = new Si(new Ri([new Qi(e, d)]));
            f = new Ti(f ? null : d);
            qo(a, 'DISPLAY_CONTEXT_UPDATE', f);
        }
    };
    Wo = function (a) {
        let b = {
            'browse-item-img': !0,
        };
        a.imageType && (b[a.imageType.replace(/_/g, '-').toLowerCase()] = !0);
        let c = {};
        a.image && a.image.url && (c['background-image'] = cast.receiver.C.aa.Va(a.image.url), b['has-image'] = !0);
        b = ap(b);
        c = Fo(c);
        if (cast.receiver.C.aa.qd(a.duration)) {
            var d = cast.receiver.C.aa.Ua(a.duration);
            d = Kn(bp, d);
        } else d = null;
        return Kn(cp, b, c, d, a.mediaBadge !== 'LIVE' ? null : Kn(dp, cast.receiver.Y.ig));
    };
    kp = function (a, b) {
        function c() {
            d.l = d.j.shadowRoot.querySelector('.media-browse-carousel');
            ep(d);
        }
        var d = this;
        this.j = a;
        this.I = b;
        this.o = new Ml();
        this.D = this.B = this.G = this.A = null;
        this.W = this.F = 0;
        this.L = this.J = !1;
        this.R = this.O = -1;
        this.l = null;
        this.H = !0;
        this.T = this.V = !1;
        this.o.listen('DRAWER_POSITION_CHANGED', function (e) {
            fp(d, e.position);
        });
        this.o.listen('DRAWER_ANIMATION_FINISHED', function (e) {
            e = e.position;
            fp(d, e);
            e >= d.D ? (Ef(cast.receiver.C.X.K.hn), gp(d)) : clearTimeout(d.F);
            e === d.B && hp(d);
        });
        this.o.listen('CAROUSEL_SCROLL_CHANGED',
            function (e) {
                e = e.scrollLeft;
                d.J = !0;
                ip(d);
                d.l && (d.l.scrollLeft = e);
            });
        this.j.addEventListener('INITIAL_BROWSE_RENDER_COMPLETE', c);
        this.j.addEventListener('BROWSE_ITEMS_AVAILABLE', c);
        To(this.j, function () {
            d.J || (d.L = !0, ip(d));
        });
        this.j.addEventListener('touchstart', function () {
            clearTimeout(d.F);
        });
        this.j.addEventListener('touchend', function () {
            d.A === 'PLAYING' && gp(d);
        });
        jp(this);
    };
    np = function (a, b) {
        b = void 0 === b ? 'SCROLL_UP' : b;
        let c = !(a.A === 'PLAYING' && a.V);
        c = !(a.L || !a.H) && c;
        switch (b) {
            case 'SCROLL_UP':
            case 'SCROLL_DOWN':
                a.A === 'PLAYING' && Xl(a.o, b);
                break;
            case 'SCROLL_LEFT':
            case 'SCROLL_RIGHT':
                if (c) {
                    a.A === 'PLAYING' ? Ef(cast.receiver.C.X.K.jm) : a.A === 'LANDING' && Ef(cast.receiver.C.X.K.bn);
                    a.l = a.j.shadowRoot.querySelector('.media-browse-carousel');
                    c = lp(a.l, 'scrollLeft');
                    if (a.l) {
                        let d = c;
                        const e = mp(a.l, 'paddingLeft');
                        const f = lp(a.l, 'offsetWidth');
                        const g = lp(a.l, 'scrollWidth');
                        let k = a.l.querySelector('.browse-item');
                        const l = mp(k, 'marginRight');
                        k = mp(k, 'width') + l;
                        switch (b) {
                            case 'SCROLL_RIGHT':
                                d = Math.floor((d + f - e) / k) * k + e - l;
                                d = Math.min(d, g - f);
                                break;
                            case 'SCROLL_LEFT':
                                d = Math.ceil((d - f - e) / k) * k + e - l, d = Math.max(d, 0);
                        }
                        b = d;
                    } else b = 0;
                    Vl(a.o, c, b);
                }
        }
    };
    mp = function (a, b) {
        return a ? (a = getComputedStyle(a)[b]) ? parseInt(a, 10) : 0 : 0;
    };
    lp = function (a, b) {
        return a ? (a = a[b]) ? parseInt(a, 10) : 0 : 0;
    };
    pp = function (a) {
        a.j.j ? a.G === 'LOADING' ? op(a) : a.G && a.G !== 'IDLE' ? a.A !== 'PLAYING' && (hp(a), a.A = 'PLAYING', a.o.G = !0, Nl(a.o), J(a.j, !0), fp(a, a.B), Ro(a.j, !1)) : (clearTimeout(a.F), a.A !== 'LANDING' && (a.A = 'LANDING', ep(a), a.o.G = !1, Nl(a.o), J(a.j, !0), fp(a, a.D), Ro(a.j, !0), Ef(cast.receiver.C.X.K.gn))) : op(a);
    };
    op = function (a) {
        clearTimeout(a.F);
        a.A !== 'DISABLED' && (a.A = 'DISABLED', jp(a));
    };
    jp = function (a) {
        a.o.G = !1;
        Nl(a.o);
        J(a.j, !1);
        fp(a, a.B);
        Ro(a.j, !1);
    };
    fp = function (a, b) {
        if (typeof b !== 'number' || typeof a.B !== 'number' || typeof a.D !== 'number') a.I.style.visibility = 'hidden';
        else {
            const c = (b - a.B) / (a.D - a.B);
            let d = b <= a.B;
            a.V = d;
            const e = b >= a.D;
            a.I.style.opacity = c.toString();
            a.I.style.visibility = d ? 'hidden' : 'visible';
            d ? (a.j.style.transform = '', a.j.style.transition = '', a.j.style.top = '') : e ? (a.j.style.transform = 'none', a.j.style.transition = 'initial', a.j.style.top = '0') : (a.j.style.transform = `translateY(-${b}px)`, a.j.style.transition = 'initial', a.j.style.top = '');
            a = a.j;
            b = c >= 1;
            d = c <= 0;
            a.V = c > 0.5 ? (2 * c - 1).toString() : '0';
            a.W = d ? 'hidden' : 'visible';
            a.L = !a.D && d ? 'true' : 'false';
            a.ba = b ? 'hidden' : 'visible';
            a.Z = b ? 'true' : 'false';
            a.J = b ? 'scroll' : 'hidden';
            oo(a);
        }
    };
    hp = function (a) {
        $o(a.j, 0, 0, !1, !1, !0);
        a.O = -1;
        a.R = -1;
    };
    ep = function (a) {
        a.l = a.j.shadowRoot.querySelector('.media-browse-carousel');
        if (a.l) {
            let b = a.l.querySelector('.browse-item');
            if (b) {
                let c; const d = mp(b, 'width');
                const e = mp(b, 'marginRight');
                const f = b.getBoundingClientRect();
                const g = d + e;
                const k = mp(a.l, 'paddingLeft');
                const l = lp(a.l, 'offsetWidth');
                const m = lp(a.l, 'scrollLeft');
                let n = a.j.j;
                n && (b = function () {
                    const t = e + d / 2;
                    c = Math.max(m - k + e, 0);
                    return c % g <= t ? Math.floor(c / g) : Math.floor(c / g) + 1;
                }(), n = function (t, v) {
                    let x = m + k;
                    const C = x + l;
                    for (t = t.items; v < t.length; v++) { if (x += g, x + g > C) return C - f.x >= d / 2 ? v : v - 1; }
                    return t.length - 1;
                }(n,
                    b), Number.isInteger(b) && Number.isInteger(n) && (a.O === b && a.R === n || $o(a.j, b, n, b > 0, n < a.j.j.items.length - 1), a.O = b, a.R = n));
            }
        }
    };
    ip = function (a) {
        clearTimeout(a.W);
        a.W = setTimeout(function () {
            a.L = !1;
            a.J = !1;
            ep(a);
        }, 200);
    };
    gp = function (a) {
        clearTimeout(a.F);
        a.F = setTimeout(function () {
            a.T || np(a, 'SCROLL_DOWN');
        }, 3E44);
    };
    qp = function (a, b) {
        this.x = a;
        this.y = b;
    };
    yp = function (a) {
        _.bd.call(this);
        const b = this;
        this.l = this.j = null;
        this.O = this.L = 0;
        this.G = !1;
        this.B = this.o = this.J = null;
        a.addEventListener('touchstart', function (c) {
            rp(b, c);
        });
        a.addEventListener('touchmove', function (c) {
            if (b.o) {
                c = sp(c.touches);
                const d = c.x - b.j.x;
                const e = c.y - b.j.y;
                let f = Date.now();
                let g = f - b.A;
                b.L = d / g * 1E3;
                b.O = e / g * 1E3;
                b.A = f;
                b.G || (f = c.x - b.l.x, g = c.y - b.l.y, f * f + g * g > 25 && (b.G = !0, clearTimeout(b.J)));
                b.G && (Math.abs(d) >= 1 || Math.abs(e) >= 1) && (b.dispatchEvent(new tp(d, e)), b.j = new qp(c.x, c.y));
            }
        });
        a.addEventListener('touchend',
            function (c) {
                b.o && (c.touches.length < 1 ? ((Math.abs(b.L) > 20 || Math.abs(b.O) > 20) && Date.now() - b.A <= 100 ? b.dispatchEvent(new up(b.L, b.O)) : b.dispatchEvent(new vp()), wp(b)) : (c = sp(c.touches), b.j = b.l = new qp(c.x, c.y), b.A = Date.now()));
            });
        a.addEventListener('touchcancel', function () {
            b.o && (b.dispatchEvent(new vp()), wp(b));
        });
        a.addEventListener('click', function (c) {
            clearTimeout(b.J);
            b.dispatchEvent(new xp(c.target));
        });
    };
    rp = function (a, b) {
        if (b.touches.length === 1) {
            clearTimeout(a.J);
            a.o = b;
            a.B = b.target;
            a.dispatchEvent(new zp(a.B));
            const c = a.B;
            a.J = setTimeout(function () {
                a.dispatchEvent(new xp(c));
            }, 300);
        }
        b = sp(b.touches);
        a.j = a.l = new qp(b.x, b.y);
        a.A = Date.now();
    };
    wp = function (a) {
        a.o = null;
        a.B = null;
        a.A = void 0;
        a.L = 0;
        a.O = 0;
        a.j = null;
        a.l = null;
        a.G = !1;
    };
    tp = function (a, b) {
        _.A.call(this, 'SCROLL');
        this.deltaX = a;
        this.deltaY = b;
    };
    up = function (a, b) {
        _.A.call(this, 'FLING');
        this.velocityX = a;
        this.velocityY = b;
    };
    vp = function () {
        _.A.call(this, 'NO_FLING_RELEASE');
    };
    zp = function (a) {
        _.A.call(this, 'FIRST_TOUCH');
        this.zh = a;
    };
    xp = function (a) {
        _.A.call(this, 'CONFIRMED_SINGLE_TAP');
        this.zh = a;
    };
    sp = function (a) {
        for (var b = 0, c = 0, d = a.length, e = 0; e < d; e++) b += a[e].clientX, c += a[e].clientY;
        return new qp(b / d, c / d);
    };
    Dp = function (a, b, c) {
        const d = this;
        this.l = a;
        this.G = a.querySelector('#scrubber');
        this.V = a.querySelector('#controls-toggle');
        this.ca = a.querySelector('#controls-layer');
        this.ba = b;
        this.A = c;
        this.R = !1;
        this.L = a.querySelector('#alert-show-controls');
        this.J = a.querySelector('#alert-hide-controls');
        this.o = !1;
        this.O = !0;
        this.W = this.H = this.Z = this.F = this.T = !1;
        this.D = cast.receiver.C.Sa.VIDEO;
        this.I = 4500;
        this.j = Ff.M();
        this.j.o = this.I;
        this.j.listen('EXPIRED', function () {
            d.F = !1;
            Ap(d);
            d.l.classList.remove('scrubbing-ending');
        });
        this.B = new yp(this.l);
        this.L.textContent = cast.receiver.Y.Qi;
        this.J.textContent = cast.receiver.Y.Pi;
        this.ba.addEventListener('click', function (e) {
            np(d.A, 'SCROLL_UP');
            e.stopPropagation();
        });
        this.B.listen('FIRST_TOUCH', function () {
            const e = d.A;
            e.H = !1;
            Yl(e.o);
        });
        this.B.listen('SCROLL', function (e) {
            const f = d.A;
            const g = e.deltaX;
            e = e.deltaY;
            f.H = !1;
            $l(f.o, g, e);
        });
        this.B.listen('FLING', function (e) {
            const f = d.A;
            e = e.velocityY;
            f.H = !0;
            bm(f.o, e);
        });
        this.B.listen('NO_FLING_RELEASE', function () {
            const e = d.A;
            e.H = !0;
            ep(e);
            cm(e.o);
        });
        this.ca.addEventListener('touchstart',
            function (e) {
                e.target === d.G && e.stopPropagation();
            });
        this.B.listen('CONFIRMED_SINGLE_TAP', function (e) {
            e.zh.closest('#controls') && d.l.classList.contains('active') ? Lf(d.j) : e.zh.closest('#controls-layer') && Bp(d);
        });
        this.V.addEventListener('click', function (e) {
            Bp(d);
            e.stopPropagation();
        });
        this.G.addEventListener('input', function () {
            Cp(d, !0);
        });
        this.G.addEventListener('change', function () {
            Cp(d, !1);
            Lf(d.j);
        });
    };
    Bp = function (a) {
        a.D === cast.receiver.C.Sa.VIDEO && a.o && a.W || (a.l.classList.contains('active') ? (Cp(a, !1), If(a.j)) : (Ep(a), Lf(a.j)));
    };
    Ep = function (a) {
        Lf(a.j);
        a.F = !0;
        Ap(a);
    };
    Cp = function (a, b) {
        Hf(a.j, b);
        a.T !== b && (a.T = b, clearTimeout(a.da), a.l.classList.toggle('scrubbing', b), b || (a.l.classList.add('scrubbing-ending'), a.da = setTimeout(function () {
            a.l.classList.remove('scrubbing-ending');
        }, 4E33)));
    };
    Ap = function (a) {
        const b = a.F || a.Z && (a.D === cast.receiver.C.Sa.AUDIO || a.H);
        J(a.L, b);
        J(a.J, !b);
        a.V.setAttribute('aria-label', b ? cast.receiver.Y.ho : cast.receiver.Y.jo);
        a.l.classList.toggle('active', b);
    };
    Fp = function () {
        const a = lf.call(this) || this;
        (0, cast.receiver.C.Oq)(a);
        a.j = a.querySelector('#logo');
        a.o = a.querySelector('#title');
        a.B = a.querySelector('#break-title');
        a.l = a.querySelector('#subtitle');
        a.A = a.querySelector('#top-right-video-overlay-image');
        return a;
    };
    Gp = function (a, b, c) {
        window.getComputedStyle(a.j, null).backgroundImage === 'none' && cast.receiver.C.aa.Rd(c).then(function () {
            const d = cast.receiver.C.aa.Va(c);
            a.j.textContent = '';
            a.j.style.backgroundImage = d;
            a.j.classList.add('app-icon');
        }).catch(function () {
            a.j.style.backgroundImage = '';
            a.j.classList.remove('app-icon');
            a.j.textContent = b;
        });
    };
    Hp = function (a, b) {
        b ? (b = cast.receiver.C.aa.Va(b), a.A.style.content = b) : a.A.style.removeProperty('content');
    };
    Kp = function () {
        const a = lf.call(this) || this;
        const b = a.attachShadow({
            mode: 'open',
        });
        _.G(Ip, '<touch-controls> element is created');
        a.B = document.createElement('div');
        a.B.classList.add('touch-layer');
        a.ba = Ce() && Be();
        a.ba && a.B.classList.add('new-dpad-controls-overlay');
        a.L = Be();
        a.L ? (0, cast.receiver.C.Zm)(a.B) : (0, cast.receiver.C.Aq)(a.B);
        b.appendChild(a.B);
        a.o = b.querySelector('goog-media-browse');
        a.Z = b.querySelector('.media-browse-scrim');
        a.F = new kp(a.o, a.Z);
        a.A = b.querySelector('goog-buttons-bar');
        a.G = b.querySelector('goog-video-metadata');
        a.H = b.querySelector('goog-break-ui');
        a.l = b.querySelector('goog-timeline');
        a.W = Sf.M();
        Tf(a.W, a.shadowRoot);
        a.D = a.L ? new Em(a.B, function () {
            return a.J();
        }, function () {
            return a.I();
        }) : new Dp(a.B, a.o, a.F);
        a.j = null;
        a.I = function () { };
        a.J = function () { };
        a.T = function () { };
        a.O = function () { };
        a.R = function () { };
        a.V = function () { };
        a.A.L = function () {
            cast.receiver.C.X.ya(cast.receiver.C.X.Lb.PAUSE);
            a.I();
        };
        a.A.O = function () {
            cast.receiver.C.X.ya(cast.receiver.C.X.Lb.PLAY);
            a.J();
        };
        a.l.G = function () {
            a.J();
        };
        a.l.H = function () {
            a.I();
        };
        a.A.T = function () {
            cast.receiver.C.X.ya(cast.receiver.C.X.Lb.STOP);
            a.T();
        };
        a.A.R = function () {
            cast.receiver.C.X.ya(cast.receiver.C.X.Lb.iq);
            a.R();
        };
        a.o.addEventListener('PLAY', function () {
            cast.receiver.C.X.ya(cast.receiver.C.X.Lb.bo);
            a.J();
        });
        a.o.addEventListener('PAUSE', function () {
            cast.receiver.C.X.ya(cast.receiver.C.X.Lb.ao);
            a.I();
        });
        a.o.addEventListener('ALBUM_ART_CLICK', function () {
            cast.receiver.C.X.ya(cast.receiver.C.X.Lb.Zn);
            np(a.F, 'SCROLL_DOWN');
        });
        a.o.addEventListener('DISPLAY_CONTEXT_UPDATE', function (c) {
            a.V(c.detail);
        });
        a.o.addEventListener('SCROLL_CHIP_SELECTED', function (c) {
            _.ob(Jp, c.detail) && np(a.F, c.detail);
        });
        a.l.ca = function (c) {
            cast.receiver.C.X.zt(c);
            a.O(c);
        };
        return a;
    };
    Lp = function (a) {
        let b = getComputedStyle(a.o);
        let c = parseInt(b.getPropertyValue('--media-browse-top-padding'), 10);
        b = parseInt(b.getPropertyValue('--media-browse-visible-part-height'), 10);
        a = a.F;
        c = _.u.innerHeight - c;
        a.B = b;
        a.D = c;
        const d = a.o;
        d.j = b;
        d.l = c;
        a.A = null;
        pp(a);
    };
    Mp = function (a) {
        a.j || (a.j = document.createElement('goog-audio-player-compatibility'), Ed(a.j, a.B.querySelector('audio-player-compatibility-placeholder')));
        a.D.vi();
    };
    Np = function (a, b) {
        a.o.B = b;
    };
    Op = function (a, b, c) {
        const d = a.l;
        d.wa = b;
        d.l || (d.j.value = b, d.xa.textContent = c || cast.receiver.C.aa.Ua(b), nm(d, b, d.D), typeof d.B === 'number' && qm(d, d.j.value));
        a = a.H;
        a.G = b;
        a.o && zg(a);
    };
    Pp = function (a, b, c) {
        const d = a.l;
        if (d.V || b !== d.D || c && d.da.textContent !== c) d.D = b, b < 0 || Infinity === b ? (vm(d, 0), wm(d, ''), nm(d, parseFloat(d.j.value))) : (d.fa && d.La || (um(d, 0), vm(d, b), d.j.style.left = '0', d.j.style.width = '100%'), c ? wm(d, c) : wm(d, cast.receiver.C.aa.Ua(b)), nm(d, parseFloat(d.j.value), b)), ym(d);
        a = a.H;
        a.I = b;
        a.o && zg(a);
    };
    Qp = function (a, b) {
        b === 'IDLE' ? (a.j && J(a.j, !1), sm(a.l, !1), a.D.cg(!0)) : (a.j && J(a.j, !0), a.D.cg(!1));
        if (b === 'PLAYING') {
            a.D.zi();
            var c = a.o.A;
            !0 !== c.j && (c.j = !0, oo(c));
            sm(a.l, !0);
        }
        b === 'PAUSED' && (a.D.yi(), c = a.o.A, !1 !== c.j && (c.j = !1, oo(c)), sm(a.l, !1));
        b === 'BUFFERING' || b === 'LOADING' ? (a.D.Qh(!0), c = a.l, J(c.L, !0), qm(c, c.j.value)) : (a.D.Qh(!1), c = a.l, J(c.L, !1), qm(c, c.j.value));
        c = a.A;
        if (c.j) {
            if (b === 'PLAYING') {
                const d = c.j;
                const e = cast.receiver.Y.Ti;
                d.element.dataset.state = 'playing';
                d.element.title = e;
                d.j = !0;
                wi(d);
            }
            b === 'PAUSED'
                && vi(c.j);
        }
        a = a.F;
        a.G = b;
        pp(a);
    };
    Rp = function (a, b) {
        a.H.B = b;
    };
    Xp = function (a) {
        _.z.call(this);
        const b = this;
        this.T = !0;
        this.o = {};
        this.B = {};
        this.fa = this.yj();
        this.A = new il(this.fa);
        this.j = null;
        this.ia = Sp();
        Tp(this);
        _.G(Up, 'About to create <touch-controls> element');
        let c = new cast.receiver.C.Iq();
        document.body.appendChild(c);
        this.j = c;
        a || Mp(this.j);
        this.j.I = function () {
            kl(b.A);
        };
        this.j.J = function () {
            jl(b.A);
        };
        this.j.T = function () {
            b.A.j.j(new $k('SHUTDOWN'));
        };
        this.j.O = function (d) {
            const e = b.A;
            const f = new fl();
            f.currentTime = d;
            e.j.j(f);
        };
        Rp(this.j, function () {
            b.A.j.j(new $k('SKIP_AD'));
        });
        this.j.R = function () {
            const d = b.A;
            let e = _.Vg.M();
            e.isRemoteControl() ? e.A.send(cast.receiver.va.hb, {
                type: 'showremotecontroloverlay',
            }) : (e = new Vi(), e.requestId = 0, rl(d.j, e));
        };
        Np(this.j, function (d) {
            const e = b.A;
            d = d.entity;
            const f = new Yk();
            f.media = new Le();
            f.media.entity = d;
            f.autoplay = !0;
            e.j.j(f);
        });
        this.j.V = function (d) {
            rl(b.A.j, d);
        };
        Vp(this, cast.receiver.C.Sa.VIDEO);
        Qp(this.j, 'IDLE');
        Pp(this.j, 0);
        Op(this.j, 0);
        a = _.Vg.M();
        (c = a.Fc()) && c.remote_control_overlay_supported && Bi(this.j.A);
        this.j.D.dg(a.wa === 1);
        a.addEventListener('showmediacontrols',
            function (d) {
                b.j.D.dg(d.mediaControlsState === 1);
            });
        cast.receiver.platform.getAccessibilitySettings().then(function (d) {
            const e = b.j;
            d = d.isScreenReaderEnabled;
            e.D.Ai(d);
            e.F.T = d;
        });
        a.isRemoteControl() || ((c = a.J) && Wp(this, c), a.addEventListener('playbackdevicestatus', function (d) {
            Wp(b, d.playbackDeviceStatus);
        }));
        Ki(function (d) {
            d.navigationType === 'SCROLL_LEFT' ? np(b.j.F, 'SCROLL_LEFT') : d.navigationType === 'SCROLL_RIGHT' && np(b.j.F, 'SCROLL_RIGHT');
            return new Xi();
        });
    };
    Yp = function (a) {
        a = a.j;
        a.j || (a.j = document.createElement('goog-audio-player-compatibility'), Ed(a.j, a.B.querySelector('audio-player-compatibility-placeholder')));
        a.B.classList.toggle('default-player', !0);
    };
    Tp = function (a) {
        a.o[cast.receiver.C.U.QUEUE_NEXT] = new yi(function () {
            cast.receiver.C.X.ya(cast.receiver.C.U.QUEUE_NEXT);
            ml(a.A);
        }, cast.receiver.Y.to, 'btn-next');
        a.o[cast.receiver.C.U.QUEUE_PREV] = new yi(function () {
            cast.receiver.C.X.ya(cast.receiver.C.U.QUEUE_PREV);
            if (a.l.media && a.l.sectionStartTimeInMedia === null && a.da !== cast.receiver.C.Sa.PHOTO && a.l.currentTime >= 4 && Zp(a, a.l.supportedMediaCommands, cast.framework.N.xc(a.l.media))) {
                const b = a.A;
                const c = new fl();
                c.currentTime = 0;
                b.j.j(c);
            } else nl(a.A);
        }, cast.receiver.Y.uo,
        'btn-back');
        a.o[cast.receiver.C.U.SEEK_FORWARD_10] = new yi(function () {
            cast.receiver.C.X.ya(cast.receiver.C.U.SEEK_FORWARD_10);
            ll(a.A, 10);
        }, cast.receiver.Y.Bo, 'btn-seek-forward-10');
        a.o[cast.receiver.C.U.SEEK_FORWARD_15] = new yi(function () {
            cast.receiver.C.X.ya(cast.receiver.C.U.SEEK_FORWARD_15);
            ll(a.A, 15);
        }, cast.receiver.Y.Co, 'btn-seek-forward-15');
        a.o[cast.receiver.C.U.SEEK_FORWARD_30] = new yi(function () {
            cast.receiver.C.X.ya(cast.receiver.C.U.SEEK_FORWARD_30);
            ll(a.A, 30);
        }, cast.receiver.Y.Do, 'btn-seek-forward-30');
        a.o[cast.receiver.C.U.SEEK_BACKWARD_10] = new yi(function () {
            cast.receiver.C.X.ya(cast.receiver.C.U.SEEK_BACKWARD_10);
            ll(a.A, -10);
        }, cast.receiver.Y.yo, 'btn-seek-backward-10');
        a.o[cast.receiver.C.U.SEEK_BACKWARD_15] = new yi(function () {
            cast.receiver.C.X.ya(cast.receiver.C.U.SEEK_BACKWARD_15);
            ll(a.A, -15);
        }, cast.receiver.Y.zo, 'btn-seek-backward-15');
        a.o[cast.receiver.C.U.SEEK_BACKWARD_30] = new yi(function () {
            cast.receiver.C.X.ya(cast.receiver.C.U.SEEK_BACKWARD_30);
            ll(a.A, -30);
        }, cast.receiver.Y.Ao, 'btn-seek-backward-30');
        a.o[cast.receiver.C.U.REPEAT] = a.O = new gm(function (b) {
            cast.receiver.C.X.ya(cast.receiver.C.U.REPEAT);
            const c = a.A;
            const d = new gl();
            d.repeatMode = b;
            c.j.j(d);
        });
        a.o[cast.receiver.C.U.SHUFFLE] = a.R = new im(function (b) {
            cast.receiver.C.X.ya(cast.receiver.C.U.SHUFFLE);
            const c = a.A;
            const d = new gl();
            d.shuffle = b;
            c.j.j(d);
            jm(a.R, b);
        }, cast.receiver.Y.Eo, 'btn-shuffle');
        a.o[cast.receiver.C.U.CAPTIONS] = a.W = new im(function (b) {
            cast.receiver.C.X.ya(cast.receiver.C.U.CAPTIONS);
            const c = a.A;
            const d = new el();
            b ? d.enableTextTracks = !0 : d.activeTrackIds = [];
            c.j.j(d);
        },
        cast.receiver.Y.lo, 'btn-captions');
        a.o[cast.receiver.C.U.LIKE] = a.I = new im(function (b) {
            cast.receiver.C.X.ya(cast.receiver.C.U.LIKE);
            ol(a.A, 'LIKE', !b);
            jm(a.I, b);
        }, cast.receiver.Y.Si, 'btn-like');
        a.o[cast.receiver.C.U.DISLIKE] = a.G = new im(function (b) {
            cast.receiver.C.X.ya(cast.receiver.C.U.DISLIKE);
            ol(a.A, 'DISLIKE', !b);
            jm(a.G, b);
        }, cast.receiver.Y.oo, 'btn-dislike');
        a.o[cast.receiver.C.U.LIKE_HEART] = a.J = new im(function (b) {
            cast.receiver.C.X.ya(cast.receiver.C.U.LIKE_HEART);
            ol(a.A, 'LIKE', !b);
            jm(a.J, b);
        }, cast.receiver.Y.Si,
        'btn-like-heart');
        a.o[cast.receiver.C.U.LYRICS] = a.L = new im(function (b) {
            cast.receiver.C.X.ya(cast.receiver.C.U.LYRICS);
            ol(a.A, 'LYRICS', !b);
            jm(a.L, b);
        }, cast.receiver.Y.po, 'btn-lyrics');
        a.o[cast.receiver.C.U.SLEEP_TIMER] = new yi(function () {
            cast.receiver.C.X.ya(cast.receiver.C.U.SLEEP_TIMER);
            _.Vg.M().A.send(cast.receiver.va.hb, {
                type: 'showsleeptimeroverlay',
            });
        }, cast.receiver.Y.Ho, 'btn-sleep-timer');
    };
    aq = function (a, b, c) {
        let d = Zp(a, c, b);
        let e = a.j.l;
        d || (e.l = !1);
        e.Ca = d;
        ym(e);
        let f = a.j;
        e = !!(c & 1);
        let g = f.A;
        g.j && (g = g.j, g.l = e, wi(g));
        g = f.l;
        g.F && g.F.classList.toggle('hidden', g.ba && !e);
        f = f.o.A;
        f.o !== e && (f.o = e, oo(f));
        e = a.j.A;
        e.W = !!(c & 262144);
        Ci(e);
        si(a.o[cast.receiver.C.U.QUEUE_NEXT], !(c & 64));
        si(a.o[cast.receiver.C.U.QUEUE_PREV], !(c & 128));
        si(a.o[cast.receiver.C.U.SHUFFLE], !(c & 256));
        si(a.o[cast.receiver.C.U.SEEK_FORWARD_10], !d);
        si(a.o[cast.receiver.C.U.SEEK_FORWARD_15], !d);
        si(a.o[cast.receiver.C.U.SEEK_FORWARD_30],
            !d);
        si(a.o[cast.receiver.C.U.SEEK_BACKWARD_10], !d);
        si(a.o[cast.receiver.C.U.SEEK_BACKWARD_15], !d);
        si(a.o[cast.receiver.C.U.SEEK_BACKWARD_30], !d);
        si(a.O, !(c & 1024));
        a.O.l = !(c & 2048);
        si(a.R, !(c & 256));
        si(a.W, !(c & 4096));
        si(a.I, !(c & 16384));
        si(a.G, !(c & 32768));
        si(a.J, !(c & 16384));
        si(a.L, !(c & 524288));
        d = cast.receiver.C.aa.As(b);
        Vp(a, d);
        d === cast.receiver.C.Sa.VIDEO ? a.T && (d = Zp(a, c, b), e = !!(c & 128), c = !!(c & 64), $p(b) ? a.sa(cast.receiver.C.la.SLOT_SECONDARY_1, cast.receiver.C.U.CAPTIONS) : e && d ? a.sa(cast.receiver.C.la.SLOT_SECONDARY_1,
            cast.receiver.C.U.QUEUE_PREV) : a.sa(cast.receiver.C.la.SLOT_SECONDARY_1, cast.receiver.C.U.NO_BUTTON), d ? a.sa(cast.receiver.C.la.SLOT_PRIMARY_1, cast.receiver.C.U.SEEK_BACKWARD_30) : e ? a.sa(cast.receiver.C.la.SLOT_PRIMARY_1, cast.receiver.C.U.QUEUE_PREV) : a.sa(cast.receiver.C.la.SLOT_PRIMARY_1, cast.receiver.C.U.NO_BUTTON), d ? a.sa(cast.receiver.C.la.SLOT_PRIMARY_2, cast.receiver.C.U.SEEK_FORWARD_30) : c ? a.sa(cast.receiver.C.la.SLOT_PRIMARY_2, cast.receiver.C.U.QUEUE_NEXT) : a.sa(cast.receiver.C.la.SLOT_PRIMARY_2,
            cast.receiver.C.U.NO_BUTTON), d && c ? a.sa(cast.receiver.C.la.SLOT_SECONDARY_2, cast.receiver.C.U.QUEUE_NEXT) : a.sa(cast.receiver.C.la.SLOT_SECONDARY_2, cast.receiver.C.U.NO_BUTTON)) : a.T && (c & 128 ? a.sa(cast.receiver.C.la.SLOT_PRIMARY_1, cast.receiver.C.U.QUEUE_PREV) : a.sa(cast.receiver.C.la.SLOT_PRIMARY_1, cast.receiver.C.U.NO_BUTTON), c & 64 ? a.sa(cast.receiver.C.la.SLOT_PRIMARY_2, cast.receiver.C.U.QUEUE_NEXT) : a.sa(cast.receiver.C.la.SLOT_PRIMARY_2, cast.receiver.C.U.NO_BUTTON), a.sa(cast.receiver.C.la.SLOT_SECONDARY_1,
            cast.receiver.C.U.NO_BUTTON), a.sa(cast.receiver.C.la.SLOT_SECONDARY_2, cast.receiver.C.U.NO_BUTTON));
    };
    bq = function (a, b, c) {
        let d = !1;
        if (c && b) {
            c = _.q(c);
            for (let e = c.next(); !e.done; e = c.next()) {
                e = e.value;
                for (let f = _.q(b), g = f.next(); !g.done; g = f.next()) g = g.value, g.trackId == e && g.type == 'TEXT' && (d = !0);
            }
        }
        jm(a.W, d);
    };
    $p = function (a) {
        return a && a.tracks && a.tracks.some(function (b) {
            return b.type == 'TEXT';
        }) || !1;
    };
    Wp = function (a, b) {
        const c = [3, 2, 4].includes(b.playbackType);
        const d = nh();
        a = a.j.A;
        a.A && ui(a.A, b.playbackType === 3 && d.majorVersion === 1 && d.minorVersion < 44 ? '' : b.deviceName, c);
    };
    Vp = function (a, b) {
        a.da = b;
        a = a.j;
        if (!a.B.classList.contains(b)) {
            for (var c in cast.receiver.C.Sa) cast.receiver.C.Sa.hasOwnProperty(c) && a.B.classList.remove(cast.receiver.C.Sa[c]);
            a.B.classList.add(b);
            a.D.xi(b);
            c = a.A;
            c.J = b;
            Ci(c);
        }
    };
    Sp = function () {
        const a = window.document.createElement('div');
        (0, cast.receiver.C.Zl)(a);
        window.document.body.appendChild(a);
        return a;
    };
    cq = function (a, b) {
        return !!(a || []).find(function (c) {
            return c && c.userAction === b;
        });
    };
    eq = function (a, b) {
        _.z.call(this);
        const c = this;
        this.A = b;
        this.j = new il(this.A);
        this.B = function (d) {
            dq(c, d);
        };
        this.l = null;
        this.A.F = function (d) {
            d && (c.l = d.playerState === 'IDLE' && d.extendedStatus && d.extendedStatus.playerState === 'LOADING' ? 'LOADING' : d.playerState);
        };
        this.o = a;
        this.o.addEventListener('keydown', this.B);
    };
    dq = function (a, b) {
        if (a.l && a.l !== 'IDLE') {
            switch (b.key) {
                case 'MediaPlayPause':
                    fq(a);
                    return;
                case 'MediaRewind':
                    ll(a.j, -10);
                    return;
                case 'MediaFastForward':
                    ll(a.j, 10);
                    return;
                case 'MediaTrackNext':
                    ml(a.j);
                    return;
                case 'MediaTrackPrevious':
                    nl(a.j);
                    return;
                case 'MediaPause':
                    kl(a.j);
                    return;
                case 'MediaPlay':
                    jl(a.j);
                    return;
                case 'MediaStop':
                    a.j.j.j(new $k('STOP'));
                    return;
            }
            switch (b.key) {
                case 'Enter':
                    fq(a);
                    return;
                case 'ArrowLeft':
                    ll(a.j, -10);
                    return;
                case 'ArrowRight':
                    ll(a.j, 10);
                    return;
            }
            _.G(gq, `Unhandled keydown event, key: ${b.key}`);
        }
    };
    fq = function (a) {
        a.l === 'PLAYING' ? kl(a.j) : jl(a.j);
    };
    iq = function (a, b) {
        _.z.call(this);
        const c = this;
        this.I = a;
        this.G = b;
        this.D = _.Vg.M();
        this.j = this.l = this.B = null;
        this.A = new no();
        this.o = new no();
        gi(this.D).then(function (d) {
            hq(c, d);
        });
    };
    hq = function (a, b) {
        if (b) {
            hi(a.D).then(function (d) {
                d === 'touch-optimized' ? (jq(cast.receiver.C.X.Xc.Dq), kq(a, !0), a.A.resolve(!0), a.o.resolve(!0)) : (d === 'non-touch-optimized' ? (kq(a, !1), jq(cast.receiver.C.X.Xc.Bq), a.o.resolve(!0)) : (jq(cast.receiver.C.X.Xc.Cq), a.o.resolve(!1)), a.A.resolve(!1));
            });
        } else {
            b = cast.receiver.platform.Ra('dpad-controls-overlay-disabled');
            const c = Be();
            b ? (jq(cast.receiver.C.X.Xc.Eq), a.o.resolve(!1), a.A.resolve(!1)) : c && !a.D.ba ? (kq(a, !0), a.l = a.j.j, a.o.resolve(!0), a.A.resolve(!0), jq(cast.receiver.C.X.Xc.Fq),
            a.B = a.G(a.l), _.sc(a, a.B), a.l.addEventListener('keyup', function (d) {
                d.preventDefault();
                d.stopPropagation();
            }), a.l.addEventListener('keydown', function (d) {
                d.preventDefault();
                d.stopPropagation();
            }), a.l.addEventListener('keypress', function (d) {
                d.preventDefault();
                d.stopPropagation();
            })) : (a.B = a.G(document), _.sc(a, a.B), a.o.resolve(!1), a.A.resolve(!1), jq(cast.receiver.C.X.Xc.Gq));
        }
    };
    kq = function (a, b) {
        a.j = a.I(b);
        _.sc(a, a.j);
    };
    mq = function (a, b, c) {
        lq(a, function () {
            a.j.sa(b, c, !0);
        });
    };
    lq = function (a, b) {
        xa(function (c) {
            if (c.j == 1) return qa(c, a.A.promise, 2);
            c.B && b.call(a);
            c.j = 0;
        });
    };
    jq = function (a) {
        _.G(nq, `Controls type is: ${a}`);
        K(cast.receiver.C.X.K.xl, a);
    };
    oq = function () {
        const a = _.Vg.M();
        this.L = Wg(a, 'urn:x-cast:com.google.cast.debugoverlay', 'JSON');
        this.L.o = this.J.bind(this);
        this.l = this.j = this.D = this.B = null;
        this.o = [];
        this.A = [];
        this.F = null;
    };
    pq = function (a) {
        a.j || a.l || (a.o.length = 0, a.A.length = 0, a.I(), a.j || (a.l = window.setInterval(a.I.bind(a), 1E3)));
    };
    qq = function (a) {
        if (a.j || a.l) a.B && (document.body.removeChild(a.B.parentElement), a.B = null), a.D && (window.clearInterval(a.D), a.D = null), a.j && (Yc(a.j, 'seeking', a.G, !1, a), a.j = null), a.l && (window.clearInterval(a.l), a.l = null);
    };
    tq = function (a, b) {
        if (rq(b)) {
            _.G(sq, 'found active video');
            a.j = b;
            b = document.createElement('div');
            b.style.cssText = 'position:fixed;box-sizing:border-box;top:0;left:0;max-width:100vw;max-height:100vh;z-index:2000000;color:yellowgreen;text-shadow:1px 1px 2px #000;padding-left:5vw;padding-top:5vh;margin:0;font-size:24px;pointer-events:none;';
            let c = _.Da('cast.framework.VERSION');
            const d = cast.receiver.Ni;
            let e = '';
            c ? e = `CAF: ${c} ` : d && (e += `V2: ${d} `);
            c = document.createTextNode('');
            b.appendChild(c);
            c.textContent = e;
            e = document.createTextNode('');
            b.appendChild(e);
            b.id = '__CAST_DEBUG_OVERLAY__';
            document.body.appendChild(b);
            a.B = e;
            _.Nc(a.j, 'seeking', a.G, !1, a);
            a.l && (window.clearInterval(a.l), a.l = null);
            a.D = window.setInterval(a.H.bind(a), 1E3);
            a.H();
        }
    };
    rq = function (a) {
        return !(!a.src || a.error || a.ended || !(a.readyState >= 1));
    };
    uq = function () {
        _.z.call(this);
        const a = this;
        this.A = 0;
        this.D = (new Date()).getTime();
        this.G = 1;
        this.l = !1;
        this.o = function () { };
        this.I = function () {
            a.l && a.o();
        };
    };
    vq = function (a) {
        return a.j ? a.j.currentTime : a.l ? a.A + (Date.now() - a.D) / 1E3 * a.G : a.A || 0;
    };
    wq = function (a) {
        a.l = !0;
        clearInterval(a.B);
        a.B = setInterval(function () {
            a.j || a.I();
        }, 200);
    };
    xq = function () {
        const a = lf.call(this) || this;
        a.l = null;
        a.j = null;
        a.B = 0;
        a.A = !1;
        a.createdCallback();
        return a;
    };
    yq = function (a, b, c, d, e) {
        const f = document.createElement('div');
        f.classList.add('wave');
        f.style.width = `${b}px`;
        f.style.height = `${b}px`;
        a.A ? f.style.transform = `translate(${c}px, ${d}px) scale(${e})` : (f.style.transform = `scale(${e})`, f.style.left = `${c}px`, f.style.top = `${d}px`);
        a.shadowRoot.appendChild(f);
        setTimeout(function () {
            f.remove();
        }, a.F);
    };
    _.zq = function (a, b) {
        a.src = _.Ib(b);
        let c; let
            d;
        (c = (b = (d = (c = (a.ownerDocument && a.ownerDocument.defaultView || window).document).querySelector) == null ? void 0 : d.call(c, 'script[nonce]')) ? b.nonce || b.getAttribute('nonce') || '' : '') && a.setAttribute('nonce', c);
    };
    Aq = function () { };
    Cq = function (a) {
        let b;
        (b = a.j) || (b = {}, Bq(a) && (b[0] = !0, b[1] = !0), b = a.j = b);
        return b;
    };
    Dq = function () { };
    Eq = function (a) {
        return (a = Bq(a)) ? new ActiveXObject(a) : new XMLHttpRequest();
    };
    Bq = function (a) {
        if (!a.l && typeof XMLHttpRequest === 'undefined' && typeof ActiveXObject !== 'undefined') {
            for (let b = ['MSXML2.XMLHTTP.6.0', 'MSXML2.XMLHTTP.3.0', 'MSXML2.XMLHTTP', 'Microsoft.XMLHTTP'], c = 0; c < b.length; c++) {
                const d = b[c];
                try {
                    return new ActiveXObject(d), a.l = d;
                } catch (e) { }
            }
            throw Error('Could not create ActiveXObject. ActiveX might be disabled, or MSXML might not be installed');
        }
        return a.l;
    };
    _.Fq = function (a) {
        _.bd.call(this);
        this.headers = new Map();
        this.V = a || null;
        this.l = !1;
        this.T = this.j = null;
        this.da = this.O = '';
        this.A = 0;
        this.G = '';
        this.o = this.Z = this.L = this.W = !1;
        this.B = 0;
        this.J = null;
        this.fa = '';
        this.R = this.ca = !1;
        this.ba = null;
    };
    Hq = function (a) {
        return _.Gq && _.zc(9) && typeof a.timeout === 'number' && void 0 !== a.ontimeout;
    };
    Kq = function (a, b) {
        a.l = !1;
        a.j && (a.o = !0, a.j.abort(), a.o = !1);
        a.G = b;
        a.A = 5;
        Iq(a);
        Jq(a);
    };
    Iq = function (a) {
        a.W || (a.W = !0, a.dispatchEvent('complete'), a.dispatchEvent('error'));
    };
    Rq = function (a) {
        if (a.l && typeof Lq !== 'undefined') {
            if (a.T[1] && Mq(a) == 4 && _.Nq(a) == 2) _.vd(a.ha, Oq(a, 'Local request error detected and ignored'));
            else if (a.L && Mq(a) == 4) _.qe(a.lk, 0, a);
            else if (a.dispatchEvent('readystatechange'), a.isComplete()) {
                _.vd(a.ha, Oq(a, 'Request complete'));
                a.l = !1;
                try {
                    const b = _.Nq(a);
                    switch (b) {
                        case 200:
                        case 201:
                        case 202:
                        case 204:
                        case 206:
                        case 304:
                        case 1223:
                            var c = !0;
                            break;
                        default:
                            c = !1;
                    }
                    let d;
                    if (!(d = c)) {
                        let e;
                        if (e = b === 0) {
                            let f = String(a.O).match(_.Pq)[1] || null;
                            !f && _.u.self && _.u.self.location
                                && (f = _.u.self.location.protocol.slice(0, -1));
                            e = !Qq.test(f ? f.toLowerCase() : '');
                        }
                        d = e;
                    }
                    if (d) a.dispatchEvent('complete'), a.dispatchEvent('success');
                    else {
                        a.A = 6;
                        try {
                            var g = Mq(a) > 2 ? a.j.statusText : '';
                        } catch (k) {
                            _.vd(a.ha, `Can not get status: ${k.message}`), g = '';
                        }
                        a.G = `${g} [${_.Nq(a)}]`;
                        Iq(a);
                    }
                } finally {
                    Jq(a);
                }
            }
        }
    };
    Jq = function (a, b) {
        if (a.j) {
            Sq(a);
            const c = a.j;
            const d = a.T[0] ? function () { } : null;
            a.j = null;
            a.T = null;
            b || a.dispatchEvent('ready');
            try {
                c.onreadystatechange = d;
            } catch (e) {
                _.D(a.ha, `Problem encountered resetting onreadystatechange: ${e.message}`);
            }
        }
    };
    Sq = function (a) {
        a.j && a.R && (a.j.ontimeout = null);
        a.J && (_.u.clearTimeout(a.J), a.J = null);
    };
    Mq = function (a) {
        return a.j ? a.j.readyState : 0;
    };
    _.Nq = function (a) {
        try {
            return Mq(a) > 2 ? a.j.status : -1;
        } catch (b) {
            return -1;
        }
    };
    Oq = function (a, b) {
        return `${b} [${a.da} ${a.O} ${_.Nq(a)}]`;
    };
    Tq = function (a) {
        this.type = a;
        this.reason = void 0;
        this.requestId = 0;
        this.customData = this.detailedErrorCode = void 0;
    };
    Uq = function (a, b) {
        this.start = a;
        this.end = b;
    };
    Vq = function (a) {
        this.type = 'CUSTOM_STATE';
        this.state = a;
    };
    N = function (a) {
        this.type = a;
        this.requestId = 0;
        this.sequenceNumber = this.customData = this.mediaSessionId = void 0;
    };
    Xq = function () {
        N.call(this, 'LOAD');
        this.media = new Wq();
        this.autoplay = !1;
        this.loadOptions = this.credentialsType = this.credentials = this.queueData = this.activeTrackIds = this.playbackRate = this.currentTime = void 0;
    };
    Yq = function (a) {
        Xq.call(this);
        this.type = 'PRELOAD';
        this.itemId = a;
    };
    Zq = function (a) {
        Xq.call(this);
        this.type = 'PRECACHE';
        this.precacheData = a;
    };
    ar = function () {
        N.call(this, 'SET_VOLUME');
        this.volume = new $q();
    };
    br = function () {
        N.call(this, 'EDIT_TRACKS_INFO');
        this.enableTextTracks = this.isSuggestedLanguage = this.textTrackStyle = this.language = this.activeTrackIds = void 0;
    };
    cr = function () {
        N.call(this, 'EDIT_AUDIO_TRACKS');
        this.isSuggestedLanguage = this.language = void 0;
    };
    dr = function () {
        N.call(this, 'SEEK');
        this.relativeTime = this.currentTime = this.resumeState = void 0;
    };
    er = function () {
        N.call(this, 'SET_PLAYBACK_RATE');
        this.relativePlaybackRate = this.playbackRate = void 0;
    };
    fr = function () {
        N.call(this, 'GET_STATUS');
        this.options = void 0;
    };
    gr = function (a) {
        N.call(this, 'QUEUE_LOAD');
        this.repeatMode = void 0;
        this.items = a;
        this.currentTime = this.startIndex = void 0;
    };
    hr = function (a) {
        N.call(this, 'QUEUE_INSERT');
        this.currentTime = this.currentItemId = this.currentItemIndex = this.insertBefore = void 0;
        this.items = a;
    };
    ir = function () {
        N.call(this, 'QUEUE_UPDATE');
        this.shuffle = this.repeatMode = this.items = this.jump = this.currentTime = this.currentItemId = void 0;
    };
    jr = function (a) {
        N.call(this, 'QUEUE_REMOVE');
        this.currentTime = this.currentItemId = void 0;
        this.itemIds = a;
    };
    kr = function (a) {
        N.call(this, 'QUEUE_REORDER');
        this.insertBefore = this.currentTime = this.currentItemId = void 0;
        this.itemIds = a;
    };
    lr = function (a, b, c) {
        N.call(this, 'QUEUE_GET_ITEM_RANGE');
        this.itemId = a;
        this.nextCount = b;
        this.prevCount = c;
    };
    mr = function (a) {
        N.call(this, 'QUEUE_GET_ITEMS');
        this.itemIds = a;
    };
    nr = function () {
        this.customData = this.loadRequestData = void 0;
    };
    or = function () {
        N.call(this, 'STORE_SESSION');
    };
    pr = function () {
        N.call(this, 'RESUME_SESSION');
    };
    qr = function (a) {
        N.call(this, 'SESSION_STATE');
        this.sessionState = a;
    };
    Wq = function () {
        this.contentId = '';
        this.contentUrl = void 0;
        this.streamType = 'NONE';
        this.mediaCategory = void 0;
        this.contentType = '';
        this.userActionStates = this.vmapAdsRequest = this.hlsVideoSegmentFormat = this.hlsSegmentFormat = this.breakClips = this.breaks = this.customData = this.textTrackStyle = this.tracks = this.startAbsoluteTime = this.duration = this.entity = this.metadata = void 0;
    };
    rr = function (a, b) {
        this.start = a;
        this.end = b;
    };
    sr = function (a, b, c, d) {
        rr.call(this, a, b);
        this.isMovingWindow = c;
        this.isLiveDone = d;
    };
    tr = function (a, b, c, d, e, f, g) {
        this.id = a;
        this.queueType = this.entity = void 0;
        this.name = b;
        this.description = c;
        this.repeatMode = d;
        this.shuffle = !1;
        this.items = e;
        this.startIndex = f;
        this.startTime = g;
        this.containerMetadata = void 0;
    };
    ur = function (a) {
        this.containerType = void 0 === a ? 0 : a;
        this.containerDuration = this.containerImages = this.sections = this.title = void 0;
    };
    vr = function (a) {
        this.metadataType = a;
        this.queueItemId = this.sectionStartTimeInContainer = this.sectionStartAbsoluteTime = this.sectionStartTimeInMedia = this.sectionDuration = this.posterUrl = void 0;
    };
    wr = function () {
        vr.call(this, 0);
        this.releaseDate = this.releaseYear = this.images = this.subtitle = this.contentRating = this.title = void 0;
    };
    xr = function () {
        vr.call(this, 1);
        this.releaseDate = this.releaseYear = this.images = this.subtitle = this.studio = this.contentRating = this.title = void 0;
    };
    yr = function () {
        vr.call(this, 2);
        this.originalAirdate = this.releaseYear = this.images = this.episode = this.episodeNumber = this.season = this.seasonNumber = this.episodeTitle = this.contentRating = this.title = this.seriesTitle = void 0;
    };
    zr = function () {
        vr.call(this, 3);
        this.releaseDate = this.releaseYear = this.secondaryImage = this.images = this.discNumber = this.trackNumber = this.artistName = this.songName = this.composer = this.artist = this.albumArtist = this.contentRating = this.title = this.albumName = void 0;
    };
    Ar = function () {
        vr.call(this, 4);
        this.creationDateTime = this.height = this.width = this.longitude = this.latitude = this.images = this.location = this.artist = this.contentRating = this.title = void 0;
    };
    Br = function () {
        ur.call(this, 1);
        this.releaseDate = this.publisher = this.narrators = this.authors = void 0;
    };
    Cr = function () {
        vr.call(this, 5);
        this.images = this.subtitle = this.bookTitle = this.chapterNumber = this.contentRating = this.title = this.chapterTitle = void 0;
    };
    $q = function () {
        this.muted = this.level = void 0;
    };
    Dr = function () {
        this.type = 'MEDIA_STATUS';
        this.mediaSessionId = 0;
        this.videoInfo = this.queueData = this.media = void 0;
        this.playbackRate = 1;
        this.playerState = 'IDLE';
        this.idleReason = void 0;
        this.supportedMediaCommands = this.currentTime = 0;
        this.volume = new $q();
        this.disableStreamGrouping = this.liveSeekableRange = this.extendedStatus = this.breakStatus = this.repeatMode = this.items = this.customData = this.preloadedItemId = this.loadingItemId = this.currentItemId = this.activeTrackIds = void 0;
    };
    Er = function () {
        Dr.call(this);
    };
    Fr = function (a, b) {
        this.trackId = a;
        this.trackContentType = this.trackContentId = void 0;
        this.type = b;
        this.roles = this.assocLanguage = this.forced = this.customData = this.isInband = this.subtype = this.language = this.name = void 0;
    };
    Gr = function () {
        this.textTrackStyle = this.language = this.activeTrackIds = this.tracks = void 0;
    };
    _.Hr = function (a, b, c) {
        this.id = a;
        this.breakClipIds = b;
        this.position = c;
        this.duration = void 0;
        this.isWatched = !1;
        this.expanded = this.isEmbedded = void 0;
    };
    _.Ir = function (a) {
        this.id = a;
        this.vastAdsRequest = this.customData = this.hlsSegmentFormat = this.clickThroughUrl = this.posterUrl = this.whenSkippable = this.duration = this.title = this.contentType = this.contentUrl = this.contentId = void 0;
    };
    _.Jr = function () {
        this.adsResponse = this.adTagUrl = void 0;
    };
    Kr = function () {
        N.call(this, 'SET_CREDENTIALS');
    };
    Lr = function () {
        N.call(this, 'LOAD_BY_ENTITY');
    };
    Mr = function () {
        N.call(this, 'CUSTOM_COMMAND');
    };
    Nr = function () {
        N.call(this, 'REFRESH_CREDENTIALS');
    };
    Or = function (a, b) {
        N.call(this, 'PLAY_STRING');
        this.stringId = a;
        this.arguments = b;
    };
    Pr = function (a) {
        N.call(this, 'EXECUTE_ACTION_SCRIPT');
        this.actionScript = JSON.stringify(a);
    };
    Qr = function (a) {
        N.call(this, 'SET_APPLICATION_CONTEXT');
        this.context = JSON.stringify(a || {});
        this.requestId = Date.now();
    };
    Rr = function () {
        N.call(this, 'SCREEN_NAVIGATION');
    };
    Sr = function () {
        N.call(this, 'USER_ACTION');
    };
    Tr = function () {
        N.call(this, 'DISPLAY_STATUS');
    };
    Ur = function () {
        N.call(this, 'SHOW_REMOTE_CONTROL_OVERLAY');
    };
    Vr = function () {
        N.call(this, 'FOCUS_STATE');
    };
    Wr = function (a) {
        this.type = a;
    };
    Xr = function () {
        this.level = 1;
        this.muted = !1;
    };
    Yr = function (a, b, c) {
        this.type = 'senderdisconnected';
        this.senderId = a;
        this.userAgent = b;
        this.reason = c;
    };
    Zr = function (a, b) {
        this.type = 'senderconnected';
        this.senderId = a;
        this.userAgent = b;
    };
    $r = function (a) {
        this.type = 'visibilitychanged';
        this.isVisible = a;
    };
    as = function (a) {
        this.type = 'standbychanged';
        this.isStandby = a;
    };
    bs = function (a) {
        this.type = 'systemvolumechanged';
        this.data = a;
    };
    cs = function (a) {
        this.type = 'ready';
        this.data = a;
    };
    ds = function () {
        this.type = 'shutdown';
    };
    es = function () {
        this.type = 'feedbackstarted';
    };
    fs = function (a) {
        this.type = 'playbackdevicestatus';
        this.playbackDeviceStatus = a;
    };
    gs = function (a) {
        this.type = 'showmediacontrols';
        this.mediaControlsState = a;
    };
    hs = function (a) {
        this.type = 'maxvideoresolutionchanged';
        this.height = a;
    };
    is = function () {
        this.type = 'groupcapabilities';
        this.capabilities = void 0;
    };
    js = function () {
        this.type = 'allowgroupchange';
        this.newGroupCapabilities = void 0;
    };
    ks = function (a, b) {
        return b.filter(function (c) {
            return c.language && (0, cast.receiver.vd)(c.language, a);
        });
    };
    ls = function () { };
    ns = function (a) {
        if (!(a instanceof ls)) throw _.D(ms, 'Proper AudioTracksManager object can be acquried by calling cast.framework.PlayerManager.getAudioTracksManager()'), Error('AudioTracksManager is not created properly.');
        this.j = this.l = null;
    };
    os = function (a) {
        if (!a.j || !a.j.ta()) throw Error('Tracks info is not available.');
    };
    ps = function () {
        this.headers = null;
    };
    qs = function () { };
    rs = function () { };
    ss = function (a) {
        this.Dh = a;
    };
    us = function (a) {
        if (!(a instanceof ss)) throw _.D(ts, 'Proper QueueManager object can be acquried by calling cast.framework.PlayerManager.getQueueManager()'), Error('QueueManager is not created properly.');
        this.j = null;
        this.o = !0;
        this.l = a.Dh;
        this.A = !1;
    };
    vs = function (a, b) {
        a.j = b;
        a.j.V = a.o;
    };
    xs = function (a, b) {
        const c = a.l.Bb();
        let d = ok(a.j);
        if (d && c) {
            if (b && c.metadata) {
                var e = c.metadata;
                if (void 0 === e.sectionStartTimeInMedia || void 0 === e.sectionDuration) return;
                const f = a.l.getCurrentTimeSec();
                if (f >= e.sectionStartTimeInMedia && f <= e.sectionStartTimeInMedia + e.sectionDuration) return;
            }
            e = a.l.getCurrentTimeSec();
            d = ws(a, e, Pj(d));
            b && !d ? a.A || (_.D(ts, `Cannot find section metadata for current time ${e}`), a.A = !0, Ef(cast.framework.common.analytics.K.zp)) : (a.A = !1, d && c.metadata != d && (c.metadata = d, _.G(ts, 'Updating current section metadata'),
            Ef(cast.framework.common.analytics.K.Ap), a.l.xd(c, !0)));
        }
    };
    ws = function (a, b, c) {
        return (a = a.Ng()) && a.sections ? a.sections.find(function (d) {
            return (void 0 === d.queueItemId || d.queueItemId == c) && void 0 !== d.sectionStartTimeInMedia && void 0 !== d.sectionDuration && b >= d.sectionStartTimeInMedia && b <= d.sectionStartTimeInMedia + d.sectionDuration;
        }) || null : null;
    };
    ys = function (a) {
        const b = Pj(ok(a.j));
        const c = a.Ng();
        const d = a.l.getStartAbsoluteTime();
        d && c && c.sections && c.sections.forEach(function (e) {
            void 0 !== e.queueItemId && e.queueItemId !== b || void 0 === e.sectionStartAbsoluteTime || void 0 !== e.sectionStartTimeInMedia || (e.sectionStartTimeInMedia = e.sectionStartAbsoluteTime - d);
        });
    };
    zs = function () { };
    Bs = function (a) {
        if (!(a instanceof zs)) throw _.D(As, 'Proper TextTracksManager object can be acquried by calling cast.framework.PlayerManager.getTextTracksManager()'), Error('TextTracksManager is not created properly.');
        this.j = this.l = null;
    };
    Cs = function (a) {
        if (!a.j || !a.j.ta()) throw Error('Tracks info is not available.');
    };
    Ds = function () {
        this.l = {};
        this.o = {};
        this.A = {};
        this.j = this.B.bind(this);
    };
    Es = function (a, b, c) {
        a.A[b] = c || _.Xa;
    };
    Fs = function (a, b) {
        a = a.l[b];
        return a == _.Xa ? null : a;
    };
    Gs = function (a, b) {
        _.kb(b, function (c, d) {
            a.o[d] = c || _.Xa;
        });
    };
    Is = function (a) {
        _.F(Hs, `${a} is not supported based on supported media commands.`);
    };
    Js = function (a, b) {
        this.handleEvent = a;
        this.scope = b;
    };
    Ks = function () {
        _.z.call(this);
        this.j = {};
        this.l = this.o = null;
    };
    Ms = function (a, b, c) {
        const d = a.j[b];
        d && d.slice().forEach(function (e) {
            try {
                e.handleEvent.call(e.scope, c);
            } catch (f) {
                _.D(Ls, `Handler for ${b} encountered an error.`), a.l && a.l(b, f), window.setTimeout(function () {
                    throw f;
                }, 0);
            }
        });
    };
    Ns = function (a, b) {
        a.l = b;
    };
    Os = function (a) {
        this.type = a;
    };
    Ps = function (a) {
        this.type = 'BITRATE_CHANGED';
        this.totalBitrate = a;
    };
    Qs = function (a) {
        this.type = 'EMSG';
        this.messageData = a.messageData;
        this.schemeIdUri = a.schemeIdUri;
        this.value = a.value;
        this.startTime = a.startTime;
        this.endTime = a.endTime;
        this.timescale = a.timescale;
        this.presentationTimeDelta = a.presentationTimeDelta;
        this.eventDuration = a.eventDuration;
        this.id = a.id;
        this.segmentData = a.segmentData;
    };
    Rs = function (a, b, c) {
        this.type = 'ERROR';
        this.detailedErrorCode = a;
        this.reason = c;
        this.error = b;
    };
    Ss = function (a, b) {
        this.type = 'ID3';
        this.segmentData = a;
        this.timestamp = b;
    };
    Ts = function (a, b) {
        this.type = a;
        this.currentMediaTime = b;
    };
    Us = function (a, b) {
        b = void 0 === b ? !1 : b;
        Ts.call(this, 'PAUSE', a);
        this.ended = b;
    };
    Vs = function (a) {
        this.type = 'MEDIA_STATUS';
        this.mediaStatus = a;
    };
    Ws = function (a) {
        this.type = 'CUSTOM_STATE';
        this.state = a;
    };
    Xs = function (a, b) {
        this.type = 'MEDIA_FINISHED';
        this.currentMediaTime = a;
        this.endedReason = b;
    };
    Ys = function (a, b, c) {
        this.type = a;
        this.requestData = b;
        this.senderId = c;
    };
    Zs = function (a, b) {
        this.type = a;
        this.media = b;
    };
    $s = function (a) {
        Zs.call(this, 'MEDIA_INFORMATION_CHANGED', a);
    };
    at = function (a, b, c, d, e, f, g, k) {
        this.type = a;
        this.currentMediaTime = b;
        this.index = c;
        this.total = d;
        this.whenSkippable = typeof e === 'number' ? e : void 0;
        this.endedReason = f;
        this.breakClipId = g;
        this.breakId = k;
    };
    bt = function (a) {
        this.type = 'BUFFERING';
        this.isBuffering = a;
    };
    ct = function (a, b) {
        this.type = 'CLIP_ENDED';
        this.currentMediaTime = a;
        this.endedReason = b;
    };
    dt = function (a, b) {
        this.type = 'SEGMENT_DOWNLOADED';
        this.downloadTime = a;
        this.size = b;
    };
    et = function (a) {
        this.type = 'CACHE_LOADED';
        this.media = a;
    };
    ft = function (a) {
        this.type = 'INBAND_TRACK_ADDED';
        this.track = a;
    };
    gt = function () {
        this.type = 'TRACKS_CHANGED';
    };
    ht = function (a, b) {
        this.type = a;
        this.url = b;
    };
    it = function (a, b) {
        this.type = a;
        this.liveSeekableRange = b;
    };
    jt = function (a, b) {
        this.type = a;
        this.timedMetadataInfo = b;
    };
    lt = function (a, b, c) {
        c = void 0 === c ? null : c;
        b = b.toLowerCase();
        let d = null;
        typeof a !== 'string' ? d = `Url(${a}) should be string` : typeof b !== 'string' && (d = `mimeType(${b}) should be string`);
        if (d) throw _.D(kt, d), Error(d);
        this.mimeType = b;
        this.url = a;
        this.playbackConfig = c || new rs();
        this.hlsVideoSegmentFormat = this.hlsSegmentFormat = null;
        this.startTime = void 0;
        this.tracksInfo = this.breakClip = this.media = null;
    };
    O = function () { };
    Kt = function (a) {
        this.type = a;
    };
    Lt = function (a, b) {
        this.type = 'BITRATE_CHANGED';
        this.newBitrate = a;
        this.previousBitrate = b;
    };
    Mt = function (a, b) {
        this.type = 'TIME_TO_TARGET_BITRATE';
        this.bitrate = a;
        this.timeToTargetSec = b;
    };
    Ot = function (a, b) {
        const c = _.Dd(document, 'SCRIPT');
        c.type = 'text/javascript';
        _.zq(c, _.Jb(a));
        c.onload = function () {
            _.G(Nt, `library(${a}) is loaded`);
            b.resolve();
        };
        c.onerror = function () {
            _.D(Nt, `library(${a}) cannot be loaded`);
            b.reject();
        };
        document.head.appendChild(c);
    };
    St = function (a) {
        const b = He() || Pt.mi;
        const c = Pt.Qc(b);
        const d = Pt.Qc(a);
        if (d === -1) return _.D(Nt, 'Shaka version format is incorrect. It should be MAJOR.MINOR.PATCH, for example "3.2.1".'), b;
        if (d < Qt) return _.D(Nt, `Shaka version ${a} is not supported. ${b} is loaded instead.`), b;
        if (d < c) return _.D(Nt, `Shaka version ${a} is deprecated.`), K(cast.framework.common.analytics.K.ii, d), a;
        if (d < Rt) return K(cast.framework.common.analytics.K.ii, d), a;
        _.D(Nt, `Shaka version ${a} is not supported yet. ${b} is loaded instead.`);
        return b;
    };
    Tt = function (a, b) {
        _.z.call(this);
        this.O = b;
        a = this.player = a;
        this.ignoreTtmlPositionInfo = a.l.playbackConfig && a.l.playbackConfig.ignoreTtmlPositionInfo ? a.l.playbackConfig.ignoreTtmlPositionInfo : !1;
        this.tracks = [];
        this.G = [];
        this.o = null;
        this.A = [];
        this.J = -1;
        this.L = 1;
        this.j = null;
        b && (this.j = new mj(b, [], [], null), _.sc(this, this.j));
        this.B = null;
    };
    Vt = function (a, b) {
        const c = b.type;
        const d = b.name;
        const e = b.language;
        const f = b.trackContentType;
        const g = b.subtype;
        const k = b.roles;
        return a.tracks.length === 0 ? null : c === 'VIDEO' ? a.tracks.find(function (l) {
            return l.type === c;
        }) || null : a.tracks.find(function (l) {
            return c === l.type && Ut(d, l.name) && Ut(e, l.language) && Ut(f, l.trackContentType) && Ut(g, l.subtype) && (!k && !l.roles || !!k && !!l.roles && jb(k, l.roles));
        }) || null;
    };
    Ut = function (a, b) {
        return !a && !b || !(!a || !b || a !== b);
    };
    Wt = function (a, b) {
        if (b.length !== 0) {
            b.sort(function (d, e) {
                return d.trackId - e.trackId;
            });
            if (b[0].trackId <= a.J) throw Error('track id conflicts');
            for (let c = 1; c < b.length; c++) { if (b[c].trackId == b[c - 1].trackId) throw Error('track id conflicts'); }
            a.tracks = a.tracks.concat(b);
            a.J = b[b.length - 1].trackId;
            a.L = Math.max(a.L, a.J + 1);
            a.j && b.find(function (d) {
                return !a.jh(d);
            }) && hj(a.j, cast.framework.N.Pk(b));
        }
    };
    Yt = function (a, b) {
        a.Wa() ? _.D(Xt, 'Cannot change tracks info in disposed state') : b && (b.activeTrackIds && (a.G = b.activeTrackIds), b.textTrackStyle && a.j && a.j.xb(cast.framework.N.Ok(b.textTrackStyle)), b.tracks && Wt(a, b.tracks));
    };
    $t = function (a, b) {
        if (a.Wa()) _.D(Xt, 'Cannot change tracks in disposed state');
        else {
            for (var c = null, d = _.q(a.tracks), e = d.next(); !e.done; e = d.next()) {
                if (e = e.value, e.type === 'TEXT' && e.language && e.language.toLowerCase() === b.toLowerCase()) {
                    c = e.trackId;
                    break;
                }
            } if (c === null) {
                for (d = _.q(a.tracks), e = d.next(); !e.done; e = d.next()) {
                    if (e = e.value, e.type === 'TEXT' && e.language && cast.receiver.vd(e.language, b)) {
                        c = e.trackId;
                        break;
                    }
                }
            } c === null ? _.F(Xt, 'No matching track.') : Zt(a, [c]);
        }
    };
    bu = function (a, b) {
        if (a.Wa()) _.D(Xt, 'Cannot change tracks in disposed state');
        else {
            for (var c = null, d = a.o != null ? a.o : null, e = _.q(a.tracks), f = e.next(); !f.done; f = e.next()) {
                if (f = f.value, f.type === 'AUDIO' && f.language && b && f.language.toLowerCase() === b.toLowerCase() && !f.trackContentId) {
                    c = f.trackId;
                    break;
                }
            } if (c === null) {
                for (e = _.q(a.tracks), f = e.next(); !f.done; f = e.next()) {
                    if (f = f.value, f.type === 'AUDIO' && f.language && b && cast.receiver.vd(f.language, b) && !f.trackContentId) {
                        c = f.trackId;
                        break;
                    }
                }
            } c === null ? _.F(Xt, 'No matching track.')
                : (au(a, c, a.A), a.yd(d, c));
        }
    };
    Zt = function (a, b, c) {
        c = void 0 === c ? !1 : c;
        if (a.Wa()) _.D(Xt, 'Cannot change tracks in disposed state');
        else {
            for (var d = null, e = null, f = [], g = [], k = null, l = _.q(a.tracks), m = l.next(); !m.done; m = l.next()) {
                m = m.value;
                if (b.includes(m.trackId)) {
                    if (m.type == 'TEXT') {
                        if (a.jh(m)) f.push(m.trackId);
                        else if (m.trackContentId != null && Nb(m.trackContentId, '.ttml') || m.trackContentType != null && Lb(m.trackContentType, 'application/ttml+xml') == 0) {
                            if (k == null) k = m.trackId;
                            else {
                                _.F(Xt, 'Can not sideload more than one TTML text track.');
                                continue;
                            }
                        } else {
                            m.trackContentId
                                != null && Nb(m.trackContentId, '.vtt') || m.trackContentType != null && Lb(m.trackContentType, 'text/vtt') == 0 ? g.push(m.trackId) : _.F(Xt, `unsupported track type ${m.trackContentType}, ${m.trackContentId}`);
                        }
                    } else m.type != 'AUDIO' || m.trackContentId || (d = m.trackId);
                }
                a.o != null && (e = a.o);
            }
            a.j ? lj(a.j, g) : g.length > 0 && _.F(Xt, 'Cannot enable sideloaded tracks without media element.');
            c && (e = d);
            a.vk(e, d, f, k, g);
        }
    };
    au = function (a, b, c) {
        if (b != null || c) b != null && (a.o = b), a.A = c, a.G = a.o != null ? a.A.concat(a.o) : a.A, a.G.sort();
    };
    cu = function (a, b, c) {
        if (a.B || b != null) {
            if (!a.B) {
                if (!a.O) {
                    _.D(Xt, 'Media element is not ready yet.');
                    return;
                }
                c = new cast.player.api.Host({
                    url: '',
                    mediaElement: a.O,
                    ignoreTtmlPositionInfo: c,
                });
                a.B = new cast.player.api.Player(c);
            }
            a.B.enableCaptions(!1, 'ttml');
            b != null && (c = a.tracks.find(function (d) {
                return d.trackId == b;
            }), a.B.enableCaptions(!0, 'ttml', c.trackContentId));
        }
    };
    eu = function (a, b) {
        b = void 0 === b ? null : b;
        this.mediaElement = null;
        this.l = a;
        this.Da = new Ks();
        this.A = 1;
        this.qa = this.da = null;
        this.eb = !1;
        this.bb = b || du;
        this.o = null;
        this.ra = [];
        this.I = !1;
        this.F = null;
        this.D = de();
        this.O = !1;
        this.Ca = null;
        this.V = this.T = void 0;
        this.sd = this.Em.bind(this);
        this.G = this.L = null;
        this.La = 1;
        this.ud = a.media && a.media.mediaCategory ? a.media.mediaCategory : null;
    };
    gu = function (a) {
        if (a.A !== 6) {
            a.o = a.bb(a, a.mediaElement);
            a.o.Bd(a.l);
            const b = a.o;
            b.o = b.Pg();
            Zt(b, b.G);
            a.ad(a.getPlaybackRate());
            a.eb ? fu(a, !0) : a.A = 3;
            a.F && (a.F.resolve(), a.F = null);
        }
    };
    hu = function (a, b) {
        if (!a.o) return null;
        b.textTrackStyle && a.o.xb(b.textTrackStyle);
        b.language ? $t(a.o, b.language) : b.activeTrackIds && Zt(a.o, b.activeTrackIds);
        return a.o.getTracksInfo().activeTrackIds;
    };
    iu = function (a, b) {
        a.Da.dispatchEvent(b);
    };
    du = function (a, b) {
        return new Tt(a, b);
    };
    ju = function (a, b, c, d) {
        _.Nc(b, c, d);
        a.ra.push({
            type: c,
            listener: d,
        });
    };
    ku = function (a, b) {
        for (let c = _.q(a.ra), d = c.next(); !d.done; d = c.next()) d = d.value, Yc(b, d.type, d.listener);
        a.ra.length = 0;
    };
    fu = function (a, b) {
        b = void 0 === b ? !1 : b;
        lu(a);
        a.Ca = a.getCurrentTimeSec();
        b || void 0 !== a.T || void 0 !== a.V || (a.T = a.isLiveDone(), a.V = a.Zc());
        a.L = setTimeout(a.sd, 500);
    };
    lu = function (a) {
        a.L != null && (clearTimeout(a.L), a.L = null);
    };
    mu = function (a, b, c) {
        eu.call(this, b, void 0 === c ? null : c);
        const d = this;
        this.j = a;
        this.B = null;
        this.R = 'IDLE';
        this.J = this.H = null;
        this.j.setEventsListener(function (e) {
            switch (e.type) {
                case 'CLIP_ENDED':
                    d.end('END_OF_STREAM');
                    break;
                case 'ERROR':
                    d.onError(e.detailedErrorCode || 100, e.error || void 0);
                    break;
                case 'STATE_CHANGED':
                    e = d.j.getPlayerState();
                    if (e != d.R) {
                        d.wc(e === 'BUFFERING');
                        switch (e) {
                            case 'PAUSED':
                                lu(d);
                                var f = new Us(d.getCurrentTimeSec(), !1);
                                iu(d, f);
                                break;
                            case 'PLAYING':
                                fu(d), f = new Ts('PLAYING', d.getCurrentTimeSec()),
                                iu(d, f), d.A < 4 && (d.A = 4, iu(d, new Os('CLIP_STARTED')));
                        }
                        d.R = e;
                    }
                    break;
                case 'TIME_UPDATE':
                    iu(d, new Ts('TIME_UPDATE', d.getCurrentTimeSec()));
                    break;
                case 'DURATION_CHANGED':
                    iu(d, new Ts('DURATION_CHANGE', d.getCurrentTimeSec()));
                    break;
                case 'BITRATE_CHANGED':
                    iu(d, e);
                    break;
                case 'RATE_CHANGED':
                    iu(d, new Ts('RATE_CHANGE', d.getCurrentTimeSec()));
                    d.ad(d.getPlaybackRate());
                    break;
                case 'TEXT_TRACKS_CHANGED':
                case 'AUDIO_TRACKS_CHANGED':
                    if (d.o) {
                        e = d.o;
                        if (f = d.j.getTracksInfo()) e.tracks = f.tracks || [], Zt(e, f.activeTrackIds || [], !0);
                        iu(d, new gt());
                    }
                    break;
                case 'BREAK_INFO_CHANGED':
                    d.H && d.H();
                    break;
                case 'BREAK_STATE_CHANGED':
                    d.J && d.J();
            }
        });
    };
    ou = function (a, b, c) {
        a.B = a.B ? a.B.then(function () {
            return c();
        }, function () {
            return c();
        }) : new Ud(function (d) {
            return d(c());
        });
        return a.B.then(function (d) {
            return d;
        }, function (d) {
            _.F(nu, `3P Player ${b} failed ${JSON.stringify(d)}`);
            return Yd(d);
        });
    };
    pu = function (a, b) {
        if (a.j.getPlayerState() !== 'PAUSED') {
            if (b <= 0) return _.D(nu, 'Player is not paused after pause request'), Yd('APP_ERROR');
            _.F(nu, 'Player is not paused after pause, yielding');
            return new Ud(function (c) {
                setTimeout(function () {
                    return c(pu(a, b - 100));
                }, 100);
            });
        }
    };
    qu = function (a, b) {
        Tt.call(this, a, b);
        this.l = a.j;
    };
    ru = function (a) {
        return new Ud(function (b, c) {
            const d = new Image();
            d.onerror = c;
            d.onload = b;
            d.src = a;
        });
    };
    su = function (a) {
        eu.call(this, a);
        this.j = null;
    };
    tu = function (a, b, c) {
        c = void 0 === c ? Infinity : c;
        const d = (a.byteOffset || 0) + a.byteLength;
        b = Math.max(0, Math.min((a.byteOffset || 0) + (void 0 === b ? 0 : b), d));
        return new Uint8Array(a instanceof ArrayBuffer ? a : a.buffer, b, Math.min(b + Math.max(c, 0), d) - b);
    };
    uu = function (a) {
        return document.createElement(a);
    };
    vu = function (a, b, c) {
        eu.call(this, a, void 0 === c ? null : c);
        const d = this;
        this.Pa = a;
        this.J = b;
        this.H = this.ca = this.Z = this.ba = this.W = this.j = null;
        this.R = this.Ma = !1;
        this.ia = void 0;
        this.B = null;
        this.wa = !1;
        this.rd = $a(function () {
            K(cast.framework.common.analytics.K.Ip, d.j.getStats().estimatedBandwidth);
        });
        this.na = new Set();
        this.Aa = [];
        this.xa = !1;
    };
    wu = function (a, b, c) {
        const d = {
            id: c.id,
            startTime: c.startTime,
            endTime: c.endTime,
            dashTimedMetadata: {
                schemeIdUri: c.schemeIdUri,
                value: c.value,
                eventElement: c.eventElement,
            },
        };
        const e = new jt(b, d);
        (b !== 'TIMED_METADATA_CHANGED' || a.A >= 3) && iu(a, e);
        b !== 'TIMED_METADATA_CHANGED' || a.na.has(c) || (a.na.add(c), a.Aa.push(d));
    };
    Eu = function (a) {
        const b = a.Pa.playbackConfig;
        xu(b);
        yu(a, b);
        zu(a, b);
        let c = _.qb(Au);
        typeof b.segmentRequestRetryLimit === 'number' && (c.maxAttempts = b.segmentRequestRetryLimit + 1);
        c = {
            abr: {
                defaultBandwidthEstimate: b.initialBandwidth || 2E6,
            },
            drm: {
                retryParameters: Au,
                servers: Bu(b),
                advanced: {
                    'com.widevine.alpha': {
                        audioRobustness: 'HW_SECURE_CRYPTO',
                        videoRobustness: 'HW_SECURE_ALL',
                    },
                },
            },
            manifest: {
                retryParameters: Au,
            },
            streaming: {
                jumpLargeGaps: !0,
                rebufferingGoal: b.autoResumeDuration || 10,
                retryParameters: c,
                stallThreshold: 5,
            },
            textDisplayFactory() {
                if (b.enableUITextDisplayer && a.mediaElement && a.mediaElement.parentElement) return Bf(cast.framework.common.analytics.K.bj, !0), new shaka.text.UITextDisplayer(a.mediaElement, a.mediaElement.parentElement);
                Bf(cast.framework.common.analytics.K.bj, !1);
                return new shaka.text.SimpleTextDisplayer(a.mediaElement);
            },
        };
        b.shakaConfig && (_.G(Cu, 'Supplying custom Shaka configurations is not recommended. Please use cast.framework.PlaybackConfig instead.'), Du(a, c, b.shakaConfig));
        a.j.configure(c);
    };
    Du = function (a, b, c, d) {
        d = void 0 === d ? '' : d;
        Object.keys(c).forEach(function (e) {
            const f = d ? `${d}.${e}` : e;
            _.Ha(b[e]) && _.Ha(c[e]) ? Du(a, b[e], c[e], f) : (e in b && _.G(Cu, `overriding ${f} Shaka configuration with custom value`), b[e] = c[e]);
        });
    };
    Bu = function (a) {
        const b = {};
        const c = a.licenseUrl;
        a = a.protectionSystem;
        if (!c) return {};
        if (a) {
            if (!_.ob(Fu, a)) return _.F(Cu, `${a} is not a supported protection system by Shaka player.`), {};
            var d = Gu[a];
            if (!d) return {};
            b[d] = c;
            return b;
        }
        for (d in Gu) b[Gu[d]] = c;
        return b;
    };
    yu = function (a, b) {
        (b.manifestRequestHandler || b.segmentRequestHandler || b.licenseRequestHandler) && a.j.getNetworkingEngine().registerRequestFilter(function (c, d) {
            const e = {
                url: d.uris[0],
                headers: d.headers,
                content: d.body,
                withCredentials: d.allowCrossSiteCredentials,
            };
            e.timeoutInterval = d.retryParameters.timeout;
            switch (c) {
                case a.J.net.NetworkingEngine.RequestType.MANIFEST:
                    typeof b.manifestRequestHandler === 'function' && b.manifestRequestHandler(e);
                    break;
                case a.J.net.NetworkingEngine.RequestType.SEGMENT:
                    typeof b.segmentRequestHandler
                        === 'function' && b.segmentRequestHandler(e);
                    break;
                case a.J.net.NetworkingEngine.RequestType.LICENSE:
                    typeof b.licenseRequestHandler === 'function' && b.licenseRequestHandler(e);
            }
            d.uris[0] = e.url;
            d.headers = e.headers;
            d.body = e.content;
            d.allowCrossSiteCredentials = e.withCredentials;
            e.timeoutInterval ? d.retryParameters.timeout = e.timeoutInterval : _.G(Cu, 'NetworkRequestInfo timeoutInterval missing, overriding with default value');
        });
    };
    zu = function (a, b) {
        const c = a.j.getNetworkingEngine();
        const d = a.J.net.NetworkingEngine.RequestType;
        c.registerResponseFilter(function (e, f) {
            const g = f.data;
            let k; const
                l = new ps();
            l.headers = f.headers;
            switch (e) {
                case d.MANIFEST:
                    typeof b.manifestHandler === 'function' && g && (k = Promise.resolve(b.manifestHandler((new TextDecoder()).decode(g), l)).then(function (m) {
                        f.data = (new TextEncoder()).encode(m).buffer;
                    }));
                    break;
                case d.SEGMENT:
                    a.rd();
                    typeof b.segmentHandler === 'function' && (k = Promise.resolve(b.segmentHandler(new Uint8Array(g), l)).then(function (m) {
                        f.data = m.buffer;
                    }));
                    iu(a, new dt(f.timeMs, g.byteLength));
                    break;
                case d.LICENSE:
                    typeof b.licenseHandler === 'function' && g && (k = Promise.resolve(b.licenseHandler(new Uint8Array(g), l)).then(function (m) {
                        f.data = m.buffer;
                    }));
            }
            return k;
        });
    };
    xu = function (a) {
        for (let b = _.q(['autoResumeNumberOfSegments', 'autoPauseDuration', 'licenseCustomData', 'captionsRequestHandler']), c = b.next(); !c.done; c = b.next()) c = c.value, void 0 !== a[c] && _.F(Cu, `${c} is not supported for Shakaplayer. Its value will be ignored.`);
    };
    Hu = function (a, b) {
        if (b && b.code) {
            _.D(Cu, `category: ${b.category} code: ${b.code}`);
            const c = b.code;
            const d = {
                shakaErrorCode: c,
                shakaErrorData: b.data,
            };
            a.onError(cast.framework.media.Ek.Qg(b), d);
            K(cast.framework.common.analytics.K.Mp, c);
        } else _.D(Cu, JSON.stringify(b));
    };
    Iu = function (a, b) {
        ju(a, b, 'loadedmetadata', a.Fm.bind(a, b));
        ju(a, b, 'pause', a.Ci.bind(a));
        ju(a, b, 'play', a.Gm.bind(a));
        ju(a, b, 'playing', a.du.bind(a));
        ju(a, b, 'timeupdate', a.Hm.bind(a));
    };
    Ku = function (a) {
        a.j.addEventListener('error', function (b) {
            Hu(a, b.detail);
        });
        a.j.addEventListener('variantchanged', function () {
            Ju(a);
        });
        a.j.addEventListener('adaptation', function () {
            Ju(a);
            a.Dj();
        });
        a.j.addEventListener('emsg', function (b) {
            iu(a, new Qs(b.detail));
        });
        a.j.addEventListener('timelineregionadded', function (b) {
            wu(a, 'TIMED_METADATA_CHANGED', b.detail);
        });
        a.j.addEventListener('timelineregionenter', function (b) {
            wu(a, 'TIMED_METADATA_ENTER', b.detail);
        });
        a.j.addEventListener('timelineregionexit', function (b) {
            wu(a,
                'TIMED_METADATA_EXIT', b.detail);
        });
        a.j.addEventListener('buffering', function () {
            a.wc(a.j.isBuffering());
        });
        a.j.addEventListener('trackschanged', function () {
            a.R || (a.o.Bd(), iu(a, new gt()));
        });
        a.j.addEventListener('gapjumped', function () {
            Ef(cast.framework.common.analytics.K.Tp);
        });
        a.j.addEventListener('stalldetected', function () {
            const b = a.j.getConfiguration().streaming.stallThreshold;
            void 0 !== b && K(cast.framework.common.analytics.K.Wp, b);
            a.xa = !0;
        });
    };
    Lu = function (a) {
        const b = {};
        a = _.q(a.j.getVariantTracks());
        for (let c = a.next(); !c.done; c = a.next()) {
            c = c.value;
            let d = void 0;
            c.videoId ? d = 'video' : c.audioId && (d = 'audio');
            b[d] || (b[d] = []);
            b[d].push(c.bandwidth);
        }
        b.video && b.video.sort();
        b.audio && b.audio.sort();
        return b;
    };
    Ju = function (a) {
        a.j.getVariantTracks().forEach(function (b) {
            b.active && b.codecs && (b.audioCodec && Df(b.audioCodec), b.videoCodec && Df(b.videoCodec));
            b.active && b.mimeType && K(cast.framework.common.analytics.K.Fp, Mu[b.mimeType] || 0);
        });
    };
    Nu = function (a) {
        let b = !1;
        Ef(cast.framework.common.analytics.K.Rp);
        Bf(cast.framework.common.analytics.K.Qp, a.j.isLive());
        Ju(a);
        a.j.getVariantTracks().forEach(function (f) {
            f.type === 'variant' && (b = f.originalVideoId && f.originalVideoId.includes(',') || f.originalAudioId && f.originalAudioId.includes(',') || b);
        });
        Bf(cast.framework.common.analytics.K.Op, b);
        let c = a.mediaElement.duration;
        a.isLiveStream() && (c = -1, void 0 !== a.l.startTime && (a.wa = !0));
        K(cast.framework.common.analytics.K.Sp, c);
        c = Lu(a);
        for (let d = _.q(['audio',
                'video',
            ]), e = d.next(); !e.done; e = d.next()) e = e.value, c[e] && Af(c[e], `${e}/*`);
        gu(a);
        a.o.I = a.Dj.bind(a);
    };
    Ou = function (a) {
        a = a.j.getStats();
        K(cast.framework.common.analytics.K.Pp, a.licenseTime);
        K(cast.framework.common.analytics.K.aq, a.playTime);
        K(cast.framework.common.analytics.K.Vp, a.pauseTime);
        K(cast.framework.common.analytics.K.Jp, a.bufferingTime);
        void 0 !== a.drmTimeSeconds && K(cast.framework.common.analytics.K.Kp, a.drmTimeSeconds);
    };
    Pu = function (a, b) {
        return cast.framework.common.Oc.Vh.then(function () {
            return new vu(a, shaka, b);
        });
    };
    Qu = function (a) {
        cast.framework.common.Oc.Vh.then(function () {
            cast.framework.media.Fk.it();
            a && shaka.polyfill.installAll();
        });
    };
    Ru = function (a, b) {
        Tt.call(this, a, b);
        this.l = a.j;
        this.D = new Map();
        this.I = null;
    };
    Su = function (a, b) {
        return new Ru(a, b);
    };
    Tu = function (a) {
        for (var b = {}, c = 0; c < a.length; c++) b[a[c].audioId] || (b[a[c].audioId] = a[c].id);
        const d = [];
        let e;
        for (e in b) b.hasOwnProperty(e) && d.push(b[e]);
        return a.filter(function (f) {
            return d.includes(f.id);
        });
    };
    Uu = function (a, b) {
        eu.call(this, a, b);
    };
    Vu = function (a, b) {
        ju(a, b, 'loadedmetadata', a.j.bind(a, b));
        ju(a, b, 'error', function () {
            a.onError(Ke(b.error));
        });
    };
    Wu = function () {
        Tt.apply(this, arguments);
    };
    $u = function () {
        this.j = Xu;
        this.o = Yu;
        this.l = Zu;
    };
    Xu = function (a, b) {
        b = void 0 === b ? {} : b;
        b.url = b.url || a;
        return new cast.player.api.Host(b);
    };
    Yu = function (a, b, c, d) {
        switch (a) {
            case 'application/x-mpegurl':
            case 'application/vnd.apple.mpegurl':
            case 'audio/mpegurl':
            case 'audio/x-mpegurl':
                return cast.player.api.CreateHlsStreamingProtocol(d, cast.framework.media.Wb.ys(b), cast.framework.media.Wb.zs(c));
            case 'application/vnd.ms-sstr+xml':
                return cast.player.api.CreateSmoothStreamingProtocol(d);
            case 'application/dash+xml':
                return cast.player.api.CreateDashStreamingProtocol(d);
            default:
                return _.Va(`Unsupported mimetype: ${a}`), cast.player.api.CreateHlsStreamingProtocol(d);
        }
    };
    Zu = function (a) {
        return new cast.player.api.Player(a);
    };
    av = function (a, b, c) {
        eu.call(this, a, void 0 === c ? null : c);
        this.W = b;
        this.R = new Set();
        this.Z = [];
    };
    dv = function (a) {
        if (!a.H) {
            const b = a.l.playbackConfig;
            const c = b.mplConfig || {};
            b.disableSourceBufferTimeAdjust != null && (c.disableSourceBufferTimeAdjust = b.disableSourceBufferTimeAdjust);
            b.enableSmoothLiveRefresh != null && (c.enableSmoothLiveRefresh = b.enableSmoothLiveRefresh);
            b.ignoreTtmlPositionInfo != null && (c.ignoreTtmlPositionInfo = b.ignoreTtmlPositionInfo);
            b.enableDurationOnLive != null && (c.enableDurationOnLive = b.enableDurationOnLive);
            c.enableSideloadedTextTrackStyling = !!b.enableSideloadedTextTrackStyling;
            a.B = a.W.j(a.l.url,
                c);
            bv(a.B, b);
            a.B.onError = a.Ot.bind(a);
            a.B.processMetadata = function (d, e, f, g) {
                if (d === 'EMSG') {
                    if (void 0 !== g) {
                        for (d = _.q(g), f = d.next(); !f.done; f = d.next()) {
                            f = f.value, iu(a, new Qs({
                                endTime: f.endTime,
                                eventDuration: f.eventDuration,
                                id: f.id,
                                messageData: f.messageData,
                                presentationTimeDelta: f.presentationTimeDelta,
                                schemeIdUri: f.schemeIdUri,
                                segmentData: e,
                                startTime: f.startTime,
                                timescale: f.timescale,
                                value: f.value,
                            }));
                        }
                    }
                } else d === 'ID3' ? iu(a, new Ss(e, f)) : _.F(cv, `MPL metadata event of type ${d} was ignored.`);
            };
            a.B.onTimedMetadata = function (d, e) {
                const f = {
                    id: e.id,
                    startTime: e.startTime,
                    endTime: e.endTime,
                    hlsTimedMetadata: {
                        rangeClass: e.rangeClass,
                        startDate: e.startDate,
                        endDate: e.endDate,
                        duration: e.duration,
                        plannedDuration: e.plannedDuration,
                        scte35Cmd: e.scte35Cmd,
                        scte35Out: e.scte35Out,
                        scte35In: e.scte35In,
                        clientAttributes: e.clientAttributes,
                        endOnNext: e.endOnNext,
                    },
                };
                switch (d) {
                    case cast.player.api.DateRangeEventType.DATE_RANGE_CHANGED:
                        d = new jt('TIMED_METADATA_CHANGED', f);
                        a.A >= 3 && iu(a, d);
                        break;
                    case cast.player.api.DateRangeEventType.DATE_RANGE_ENTER:
                        d = new jt('TIMED_METADATA_ENTER', f);
                        iu(a, d);
                        break;
                    case cast.player.api.DateRangeEventType.DATE_RANGE_EXIT:
                        d = new jt('TIMED_METADATA_EXIT', f), iu(a, d);
                }
                a.R.has(e) || (a.Z.push(f), a.R.add(e));
            };
            a.B.trackBandwidth = a.Jm.bind(a);
            a.B.getQualityLevel = a.Ks.bind(a);
            a.j = a.W.o(a.l.mimeType, a.l.hlsSegmentFormat, a.l.hlsVideoSegmentFormat, a.B);
            a.H = a.W.l(a.B);
        }
    };
    bv = function (a, b) {
        b.initialBandwidth != null && (a.initialBandwidth = b.initialBandwidth);
        b.autoResumeDuration != null && (a.autoResumeDuration = b.autoResumeDuration);
        b.autoResumeNumberOfSegments != null && (a.autoResumeNumberOfSegments = b.autoResumeNumberOfSegments);
        b.autoPauseDuration != null && (a.autoPauseDuration = b.autoPauseDuration);
        b.segmentRequestRetryLimit != null && (a.segmentRequestRetryLimit = b.segmentRequestRetryLimit);
        b.licenseUrl != null && (a.licenseUrl = b.licenseUrl);
        b.protectionSystem != null && (a.protectionSystem = b.protectionSystem);
        b.licenseCustomData != null && (a.licenseCustomData = b.licenseCustomData);
        b.manifestRequestHandler != null && (a.updateManifestRequestInfo = b.manifestRequestHandler);
        b.segmentRequestHandler != null && (a.updateSegmentRequestInfo = function (c) {
            b.segmentRequestHandler(c);
        });
        b.licenseRequestHandler != null && (a.updateLicenseRequestInfo = b.licenseRequestHandler);
        b.captionsRequestHandler != null && (a.updateCaptionsRequestInfo = b.captionsRequestHandler);
        b.manifestHandler != null && (a.processManifest = b.manifestHandler);
        b.segmentHandler != null && (a.processSegment = function (c, d, e) {
            return b.segmentHandler(d, e);
        });
        b.licenseHandler != null && (a.processLicense = b.licenseHandler);
    };
    ev = function (a, b) {
        return cast.framework.common.Oc.qk.then(function () {
            return new av(a, new $u(), b);
        });
    };
    fv = function (a, b) {
        Tt.call(this, a, b);
        this.B = this.l = a.H;
        this.I = a.j;
        this.D = new Map();
    };
    gv = function (a, b) {
        return new fv(a, b);
    };
    jv = function (a, b) {
        a = a.toLowerCase();
        if (_.ob(hv, a)) return a;
        if (a == 'text/mp2t') return 'text/cea608';
        b = b ? b.toLowerCase() : null;
        switch (b) {
            case 'ttml':
                return 'application/ttml+xml';
            case 'webvtt':
                return 'text/vtt';
        }
        _.F(iv, 'cannot guess text mime type. Defaults to VTT');
        return 'text/vtt';
    };
    kv = function () {
        this.j = null;
    };
    mv = function (a, b) {
        return _.H(lv(a, b)).then(function (c) {
            if (!c) {
                a: {
                    c = cast.framework.me.get();
                    let d = cast.receiver.Kb.M(); d = Ae(d, 'use_shaka_for_hls'); d = c && c.useShakaForHls || d;
                    switch (b.mimeType.toLowerCase()) {
                        case 'application/x-mpegurl':
                        case 'application/vnd.apple.mpegurl':
                        case 'audio/mpegurl':
                        case 'audio/x-mpegurl':
                            K(cast.framework.common.analytics.K.kg, 2);
                            break;
                        case 'application/vnd.ms-sstr+xml':
                            K(cast.framework.common.analytics.K.kg, 3);
                            break;
                        case 'application/dash+xml':
                            K(cast.framework.common.analytics.K.kg,
                                1);
                    }
                    c = b.mimeType.toLowerCase();
                    switch (c) {
                        case 'application/x-mpegurl':
                        case 'application/vnd.apple.mpegurl':
                        case 'audio/mpegurl':
                        case 'audio/x-mpegurl':
                            if (d) {
                                Bf(cast.framework.common.analytics.K.Np, !0);
                                c = Pu(b, Su);
                                break a;
                            }
                        case 'application/vnd.ms-sstr+xml':
                        case 'application/dash+xml':
                            d = ev;
                            var e = gv;
                            cast.framework.common.Oc.Sk && c === 'application/dash+xml' && (d = Pu, e = Su);
                            c = d(b, e);
                            break a;
                    }
                    c = c.startsWith('image/') ? cast.framework.media.gh.create(b) : _.H(new Uu(b, cast.framework.media.uq.create));
                }
            }
            return c;
        });
    };
    lv = function (a, b) {
        return a.j ? _.H(a.j(b)).then(function (c) {
            return c && nv(c) ? new mu(c, b, function (d, e) {
                return new cast.framework.media.Dl(d, e);
            }) : null;
        }) : null;
    };
    nv = function (a) {
        if (!a.getPlayerVersion) return _.D(ov, 'Missing implementation of player interface getPlayerVersion method.'), Ef(cast.framework.common.analytics.K.Yi), !1;
        a = a.getPlayerVersion();
        if (!a && typeof a !== 'number') return _.D(ov, 'Player getPlayerVersion should return a number.'), Ef(cast.framework.common.analytics.K.Yi), !1;
        K(cast.framework.common.analytics.K.ip, cast.framework.common.hash.vh(a));
        return !0;
    };
    pv = function (a, b, c) {
        this.seekFrom = a;
        this.seekTo = b;
        this.breaks = c;
    };
    qv = function (a) {
        this.break = a;
    };
    _.rv = function (a, b) {
        this.breaks = a;
        this.breakClips = b;
    };
    sv = function () {
        this.j = null;
        this.H = this.Aj.bind(this);
        this.G = this.Bj.bind(this);
        this.A = !1;
        this.D = this.o = this.B = this.l = null;
        this.F = void 0;
    };
    tv = function (a, b, c) {
        try {
            const d = a(b, c);
            return _.H(d);
        } catch (e) {
            return Yd(e);
        }
    };
    vv = function (a) {
        if (a !== null && typeof a !== 'function') throw _.D(uv, 'Fail to set interceptor since interceptor is not a function'), Error('Fail to set interceptor since interceptor is not a function');
    };
    wv = function (a, b) {
        _.G(uv, 'break seek interceptor is invoked.');
        return tv(a.G, b);
    };
    xv = function (a, b, c) {
        _.G(uv, 'break clip initialize interceptor is invoked. ');
        return tv(a.H, b, c).then(function (d) {
            if (!d) return [];
            d instanceof Array || (d = [d]);
            d = d.map(function (e) {
                return a.l && e.vastAdsRequest && !e.contentId ? a.l.er(e) : [e];
            });
            return be(d).then(function (e) {
                const f = [];
                e.forEach(function (g) {
                    g.Lg ? f.push.apply(f, g.value) : a.j.Da.dispatchEvent(new Rs(901, Error(g.reason)));
                });
                return f;
            });
        });
    };
    yv = function (a) {
        if (a.vmapAdsRequest) return !0;
        if (a.breakClips) {
            a = _.q(a.breakClips);
            for (let b = a.next(); !b.done; b = a.next()) { if (b = b.value, b.vastAdsRequest && !b.contentId) return !0; }
        }
        return !1;
    };
    Av = function (a, b) {
        if (!yv(b)) return _.H();
        a.B || (Ef(cast.framework.common.analytics.K.Mq), a.B = cast.framework.common.Oc.st(), a.B.then(function () {
            a.l = new _.zv(a.o);
            a.o.addEventListener('BREAK_CLIP_LOADING', a.Dt.bind(a));
            a.D && a.l.wk(a.D);
            void 0 !== a.F && a.l.If(a.F);
        }));
        return a.B;
    };
    Bv = function (a, b) {
        return a.l ? a.l.Xm(b) : (_.D(uv, "VastManager hasn't been loaded"), _.H(null));
    };
    Cv = function (a, b, c) {
        this.l = a;
        this.o = b;
        this.j = c;
    };
    Dv = function (a, b) {
        return b !== null && a.l == b.l && a.j == b.j;
    };
    Ev = function (a, b) {
        b.breakId = a.l.id;
        b.breakClipId = a.j.id;
        a = a.j.whenSkippable;
        typeof a === 'number' && (b.whenSkippable = a);
    };
    Hv = function (a, b, c, d) {
        c = void 0 === c ? [] : c;
        d = void 0 === d ? [] : d;
        this.j = [];
        this.o = new Map();
        this.D = new Map();
        this.isEmbedded = a;
        this.B = b;
        this.Da = new Ks();
        this.I = 0;
        this.F = !1;
        Fv(this, d);
        Gv(this, c);
        b = this.getBreakClips();
        a = rb(this.j);
        b = rb(b);
        this.J = new _.rv(a, b);
    };
    Mv = function (a, b, c) {
        const d = [];
        let e = 0;
        c.forEach(function (f) {
            d.includes(f.id) ? _.D(Iv, `Duplicate dynamic break clip id ${JSON.stringify(f)}`) : Jv(a, f) && (d.push(f.id), e += f.duration);
        });
        if (c.length === 0 || c.length !== d.length) return !1;
        b.duration = e;
        b.breakClipIds = d;
        if (!Kv(a, b, !1)) return !1;
        c.forEach(function (f) {
            a.o.set(f.id, f);
        });
        Lv(a, b);
        a.Lf();
        return !0;
    };
    Fv = function (a, b) {
        b.forEach(function (c) {
            Jv(a, c) && a.o.set(c.id, c);
        });
    };
    Gv = function (a, b) {
        b.forEach(function (c) {
            return a.rg(c);
        });
    };
    Lv = function (a, b) {
        if (b.position < 0) a.j.length == 0 || a.j[a.j.length - 1].position >= 0 ? a.j.push(b) : a.j[a.j.length - 1].breakClipIds.push.apply(a.j[a.j.length - 1].breakClipIds, _.ja(b.breakClipIds));
        else {
            for (let c = 0; c < a.j.length; c++) {
                const d = a.j[c];
                if (d.position == b.position) {
                    d.breakClipIds.push.apply(d.breakClipIds, _.ja(b.breakClipIds));
                    return;
                }
                if (d.position > b.position || d.position < 0) {
                    a.j.splice(c, 0, b);
                    return;
                }
            }
            a.j.push(b);
        }
    };
    Jv = function (a, b) {
        return b.id ? a.isEmbedded && (typeof b.duration !== 'number' || b.duration <= 0) ? (_.D(Iv, 'Break Clip with invalid duration is ignored'), !1) : a.o.has(b.id) ? (_.F(Iv, `Duplicate break clip id, ${b.id}, clip is ignored`), !1) : !0 : (_.D(Iv, 'Break Clip with no clip id is ignored'), !1);
    };
    Kv = function (a, b, c) {
        c = void 0 === c ? !0 : c;
        if (!b.id) return _.D(Iv, 'Break with no clip is ignored'), !1;
        if (Ee() && a.j.find(function (e) {
            return e.id === b.id;
        })) return _.D(Iv, `Duplicate break id ${JSON.stringify(b)}`), !1;
        if (a.isEmbedded && !b.isEmbedded) return _.D(Iv, 'Stitched break is ignored in embedded timeline'), !1;
        if (!a.isEmbedded && b.isEmbedded) return _.D(Iv, 'Embedded break is ignored in stitched timeline'), !1;
        if (!a.isEmbedded && b.expanded) return _.D(Iv, 'Expanded break is ignored in stitched timeline'), !1;
        if (typeof b.position
            !== 'number') return _.D(Iv, 'Break with no position is ignored.'), !1;
        if (b.position < 0 && b.isEmbedded) return _.D(Iv, 'Break with negative position is ignored.'), !1;
        if (c) {
            c = b.breakClipIds || [];
            const d = c.filter(function (e) {
                return a.o.has(e);
            });
            d.length < c.length && (_.F(Iv, 'Unknown clip id in break is ignored.'), b.breakClipIds = d);
            if (d.length == 0) return _.D(Iv, 'Break with no break clips is ignored.'), !1;
        }
        return !0;
    };
    Nv = function (a, b, c, d) {
        const e = [];
        d.forEach(function (f) {
            if (!f.id) {
                for (; a.o.has(`GENERATED:${a.I}`);) a.I++;
                f.id = `GENERATED:${a.I}`;
            }
            a.o.has(f.id) ? a.o.get(f.id) !== f && _.F(Iv, `BreakClip with existing id is ignored. BreakClip id = ${f.id}`) : Jv(a, f) && a.o.set(f.id, f);
            e.push(f.id);
        });
        b.breakClipIds.splice.apply(b.breakClipIds, [c, 1].concat(_.ja(e)));
    };
    Ov = function (a, b) {
        const c = [];
        const d = `seek-${Date.now()}`;
        a.D.set(d, b.breaks.slice());
        a = _.q(b.breaks);
        for (let e = a.next(); !e.done; e = a.next()) c.push.apply(c, _.ja(e.value.breakClipIds));
        return new _.Hr(d, c, b.seekTo);
    };
    Pv = function (a, b) {
        b.isWatched || (a.F = !0);
        b.isWatched = !0;
        a.D.has(b.id) && (a.D.get(b.id).forEach(function (c) {
            c.isWatched = !0;
        }), a.D.delete(b.id));
    };
    Qv = function (a, b, c) {
        const d = b > c;
        const e = d ? c : b;
        const f = d ? b : c;
        return a.j.filter(function (g) {
            return g.position > e && g.position <= f;
        });
    };
    Rv = function (a, b, c, d, e) {
        this.Aa = a;
        this.bb = b.contentUrl || b.contentId;
        this.D = c;
        this.eb = e;
        this.Da = new Ks();
        this.j = this.mediaElement = null;
        this.timeline = d;
        this.l = null;
        this.T = this.isPlayingBreak = !1;
        this.fa = function () { };
        this.J = function () { };
        this.ca = function () { };
        this.B = 1;
        this.V = 0;
        this.G = null;
        this.xa = !1;
        this.I = de();
        this.ra = !1;
        this.Z = this.W = this.qa = null;
        this.ba = !1;
        this.Da.addEventListener('BREAK_STARTED', this.gv, this);
        this.Da.addEventListener('BREAK_ENDED', this.fv, this);
        this.Da.addEventListener('CLIP_STARTED',
            this.jv, this);
        this.Da.addEventListener('CLIP_ENDED', this.hv, this);
    };
    Sv = function (a) {
        if (!a.l) return !1;
        const b = a.l.j.whenSkippable;
        if (typeof b !== 'number') return !1;
        a = a.ib();
        return Number(b) <= a;
    };
    Uv = function (a, b, c, d) {
        a.mediaElement = b;
        return a.Ye(c).then(function () {
            a.B < 3 && (a.B = 3);
            a.hk();
            a.fa();
            he(a.setPlaybackRate(d), function () {
                _.F(Tv, 'Set playback rate after load failed');
            });
        }, function (e) {
            a.ba || (a.ba = !0, a.J(e));
            return Promise.reject(e);
        });
    };
    Vv = function (a, b) {
        a.l && (b &= -3, Sv(a) && (b |= 512));
        return b;
    };
    Wv = function (a, b) {
        a.j && a.j.isLiveStream() && (b.metadata ? b.metadata.sectionStartAbsoluteTime ? typeof b.metadata.sectionStartTimeInMedia === 'number' ? (typeof cast.receiver.media.startAbsoluteTime === 'number' && _.F(Tv, 'media.startAbsoluteTime will be updated based on section start absolute time and section start media time.'), b.startAbsoluteTime = b.metadata.sectionStartAbsoluteTime - b.metadata.sectionStartTimeInMedia) : (b.startAbsoluteTime || (b.startAbsoluteTime = a.getStartAbsoluteTime() || void 0), b.startAbsoluteTime
            && (b.metadata.sectionStartTimeInMedia = b.metadata.sectionStartAbsoluteTime - b.startAbsoluteTime)) : b.startAbsoluteTime = void 0 : (typeof b.startAbsoluteTime === 'number' && _.D(Tv, 'media.startAbsoluteTime should not be provided if no metadata'), b.startAbsoluteTime = void 0));
    };
    Xv = function (a, b, c, d, e) {
        const f = b.l;
        const g = b.j;
        b = b.o + 1;
        const k = f.breakClipIds.length;
        const l = g.whenSkippable;
        let m = a.ib() || 0;
        c === 'BREAK_CLIP_ENDED' && (m = void 0 !== e ? e : m);
        a.Da.dispatchEvent(new at(c, m, b, k, l, d, g.id, f.id));
    };
    Zv = function (a) {
        a.B = 4;
        a.getState() == 'PAUSED' && Yv(a, !1);
    };
    $v = function (a, b, c, d, e) {
        c = void 0 === c ? null : c;
        const f = c != a.l;
        let g = !1;
        a.l && f && Xv(a, a.l, 'BREAK_CLIP_ENDED', d, e);
        a.l && b == 'BREAK_ENDED' && (Xv(a, a.l, b, d, e), g = !0, a.isPlayingBreak = !1, a.T = !1);
        if (a.l = c) {
            K(cast.framework.common.analytics.K.Zk, Mu[a.l.j.contentType || ''] || 0), d = a.l.j, e = d.whenSkippable, Bf(cast.framework.common.analytics.K.al, e != null && e < d.duration), a.isPlayingBreak || (Xv(a, c, 'BREAK_STARTED'), a.isPlayingBreak = !0, a.T = Sv(a), d = c.l, Pv(a.timeline, d)), f && b == 'BREAK_CLIP_STARTED' && Xv(a, c, 'BREAK_CLIP_LOADING'), Xv(a,
                c, b), g = !0;
        }
        g && Yv(a, !1);
    };
    Yv = function (a, b) {
        b = b || a.ra || a.timeline.F;
        a.eb(b);
        b && (a.timeline.F = !1, a.ra = !1);
    };
    aw = function (a, b) {
        a.j = null;
        a.da = b.currentMediaTime;
        a.end(b.endedReason);
    };
    bw = function (a, b, c) {
        a.j ? a.j.Da.addEventListener(b, c, a) : _.D(Tv, 'No active player, cannot listen to events');
    };
    cw = function (a, b) {
        a.j ? a.j.Da.removeEventListener('CLIP_ENDED', b) : _.D(Tv, 'No active player, cannot unlisten to events');
    };
    dw = function (a, b) {
        const c = a.getCurrentTimeSec();
        const d = Qv(a.timeline, c, b);
        let e = null;
        d.length > 0 && (e = he(wv(a.Aa, new pv(c, b, d)), function (f) {
            a.Da.dispatchEvent(new Rs(902, Error(f)));
            return null;
        }));
        return _.H(e);
    };
    ew = function (a, b, c) {
        this.o = a;
        this.j = b;
        this.currentIndex = -1;
        this.l = null;
        this.seekTo = c;
    };
    fw = function () {
        this.j = this.l = this.o = null;
    };
    gw = function (a, b) {
        return a.l < b && b < a.j;
    };
    hw = function (a, b, c) {
        b = void 0 === b ? [] : b;
        c = void 0 === c ? [] : c;
        Hv.call(this, !0, a, b, c);
        this.A = [];
        this.G = new Map();
        this.H = new fw();
        this.l = null;
        this.Lf();
    };
    iw = function (a, b) {
        return (a = a.A.slice(0).reverse().find(function (c) {
            return !c.expanded && c.o < b;
        })) ? a.l + (b - a.o) : b;
    };
    jw = function (a, b) {
        return a.A.find(function (c) {
            return c.include(b);
        }) || null;
    };
    kw = function (a, b) {
        if (gw(a.H, b)) return a.H.getBreakStatus();
        let c = null;
        const d = jw(a, b);
        if (d) {
            c = a.j.find(function (g) {
                return g == d.A;
            });
            var e = d.j;
            var f = d.l;
            c = new Cv(c, d.B, d.breakClip);
        } else {
            f = a.A.find(function (g) {
                return g.j > b;
            }), e = b, f = f ? f.j : Infinity, c = null;
        }
        a.H.cache(c, e, f);
        return c;
    };
    lw = function (a) {
        if (a.l.currentIndex === a.l.j.length - 1) return null;
        const b = a.l.j[a.l.currentIndex + 1];
        return new Cv(a.l.o, b.B, b.breakClip);
    };
    mw = function (a, b) {
        a.l.currentIndex++;
        a.l.l = b;
    };
    nw = function (a, b) {
        return a.A.slice(0).reverse().find(function (c) {
            return c.A === b;
        }).l;
    };
    ow = function (a, b, c, d, e, f, g, k) {
        this.A = a;
        this.breakClip = b;
        this.o = c;
        this.D = d;
        this.j = e;
        this.l = f;
        this.B = g;
        this.expanded = k;
    };
    pw = function (a, b, c, d, e) {
        cast.framework.media.Player.call(this, a, b, c, d, e);
        this.F = this.o = this.H = null;
        this.A = !1;
    };
    qw = function (a) {
        const b = a.timeline;
        a.D.startTime && (a.D.startTime = iw(b, a.D.startTime));
        return mv(kv.M(), a.D);
    };
    rw = function (a) {
        let b = a.jb();
        const c = a.timeline;
        let d = null;
        let e = _.H();
        if (a.o) c.l.currentIndex < 0 || !c.l.j[c.l.currentIndex].include(b) ? (d = lw(c)) ? (e = a.j.seek(c.l.j[c.l.currentIndex + 1].j), mw(c, d)) : (c.l = null, a.o.resolve(), a.o = null, e = a.F, a.F = null) : d = c.l.l;
        else if (d = kw(c, b)) b = d.l, a.l || !b.isWatched || c.B.A || (e = a.j.seek(nw(c, b)), d = null);
        return e.then(function () {
            const f = d;
            const g = a.A ? 'SKIPPED' : void 0;
            f ? a.l && Dv(a.l, f) || (a.A = !1, $v(a, 'BREAK_CLIP_STARTED', f, g)) : a.l && (a.A = !1, $v(a, 'BREAK_ENDED', null, g));
        });
    };
    sw = function (a) {
        Hv.call(this, !0, a, [], []);
        this.l = null;
    };
    tw = function (a, b, c) {
        a.reset();
        Fv(a, c || []);
        b && b.forEach(function (d) {
            return d.isEmbedded = !0;
        });
        Gv(a, b || []);
    };
    uw = function (a, b, c, d, e) {
        cast.framework.media.Player.call(this, a, b, c, d, e);
        this.A = d;
        this.o = this.F = null;
    };
    vw = function (a) {
        if (a.o) {
            const b = a.o.getBreaks();
            tw(a.A, b, a.o.getBreakClips());
            b && b.length > 0 && K(cast.framework.common.analytics.K.kp, b.length);
        }
    };
    ww = function (a, b, c, d) {
        d = void 0 === d ? Infinity : d;
        this.j = a;
        this.breakStatus = b;
        this.startTime = void 0 === c ? 0 : c;
        this.endTime = d;
    };
    zw = function (a, b, c, d, e) {
        const f = cast.framework.media.util.Oe(a.toLowerCase());
        b = (b || '').toLowerCase();
        const g = xw[f];
        !_.ob(_.yw, b) && g && _.ob(_.yw, g) && (b = g);
        b = b || cast.framework.media.util.Te(f);
        a = new lt(a, b, c);
        void 0 !== d && (a.hlsSegmentFormat = d);
        void 0 !== e && (a.hlsVideoSegmentFormat = e);
        return a;
    };
    Aw = function (a, b, c) {
        b = void 0 === b ? [] : b;
        c = void 0 === c ? [] : c;
        Hv.call(this, !1, a, b, c);
    };
    Ew = function (a, b, c) {
        return _.H().then(function () {
            const d = a.j.find(function (e) {
                return !(e.isWatched && !a.B.A) && e.position == b;
            });
            return d ? he(Bw(a, d, 0, c), function () {
                _.G(Cw, 'createMediaClipAt: Cannot create a stitching media clip');
                return null;
            }) : null;
        }).then(function (d) {
            return d || new ww(c, null, b, Dw(a, b));
        });
    };
    Fw = function (a, b, c) {
        return _.H().then(function () {
            if (b.isPlayingBreak()) {
                const d = b.breakStatus;
                const e = d.l;
                const f = d.o + 1;
                return _.H().then(function () {
                    if (e.breakClipIds.length > f) {
                        return he(Bw(a, e, f, c), function (k) {
                            if (k instanceof Td) return Yd(k);
                            _.G(Cw, 'createNextMediaClip: Cannot create stitching clip in break.');
                        });
                    }
                    _.G(Cw, 'createNextMediaClip: No more break clip');
                    return null;
                }).then(function (k) {
                    if (k) return k;
                    k = d.getPosition();
                    _.G(Cw, `createNextMediaClip: The current break status position is: ${k}`);
                    return k;
                });
            }
            const g = a.j.find(function (k) {
                return !(k.isWatched && !a.B.A) && (k.position >= b.endTime || k.position < 0);
            });
            if (g) {
                return he(Bw(a, g, 0, c), function (k) {
                    return k instanceof Td ? Yd(k) : null;
                }).then(function (k) {
                    if (k) return k;
                    _.G(Cw, 'createNextMediaClip: next break is skipped.');
                    return g.position;
                });
            }
            _.G(Cw, 'createNextMediaClip: No next break');
            return -1;
        }).then(function (d) {
            return typeof d !== 'number' ? d : d < 0 ? (_.G(Cw, 'createNextMediaClip: No more clip'), null) : new ww(c, null, d, Dw(a, d));
        });
    };
    Bw = function (a, b, c, d) {
        let e = _.H();
        c === 0 && (e = Gw(a, b));
        return e.then(function () {
            for (let f = c; f < b.breakClipIds.length; f++) {
                let g = b;
                const k = f;
                const l = d;
                const m = a.Qb(g.breakClipIds[k]);
                m ? g = new ww(cast.framework.media.util.Os(m, l.playbackConfig), new Cv(g, k, m), 0) : (_.G(Cw, `createStitchingMediaClipAt_:No next clip at ${k}`), g = null);
                if (g) return g;
            }
            _.G(Cw, 'createValidStitchingClip:No more valid break clip in a break');
            return null;
        });
    };
    Gw = function (a, b) {
        if (b.breakClipIds.length === 0) return _.H();
        const c = new qv(b);
        const d = b.breakClipIds.map(function (e) {
            return (e = a.Qb(e)) ? (e = new window.Proxy(e, {
                set(f, g, k) {
                    k !== f[g] && (f[g] = k, a.F = !0);
                    return !0;
                },
            }), xv(a.B, e, c)) : _.H([]);
        });
        return be(d).then(function (e) {
            let f = 0;
            const g = b.breakClipIds.slice();
            e.forEach(function (k) {
                k.Lg ? (Nv(a, b, f, k.value), f += k.value.length) : (a.Da.dispatchEvent(new Rs(901, Error(k.reason))), f++);
            });
            jb(g, b.breakClipIds) || (a.F = !0);
        });
    };
    Dw = function (a, b) {
        const c = a.j.find(function (d) {
            return !(d.isWatched && !a.B.A) && d.position > b;
        });
        return c ? c.position : Infinity;
    };
    Hw = function (a, b, c, d, e) {
        cast.framework.media.Player.call(this, a, b, c, d, e);
        this.F = this.ia = null;
        this.R = this.timeline;
        this.wa = this.H = this.o = this.A = null;
        this.L = this.O = void 0;
        this.na = de();
        this.Ma = 1;
        this.Ca = 0;
        this.La = this.Pa = null;
        this.R.Da.Gf(this.Da);
    };
    Mw = function (a, b, c, d) {
        Iw(a);
        return Bw(a.R, b, 0, a.D).then(function (e) {
            if (!e) return _.G(Jw, 'Fail to create seek clip'), !1;
            Kw(a, e).then(function (f) {
                if (void 0 === d) {
                    var g = !0;
                    a.j && (g = a.j.oe() !== 'PAUSED');
                } else g = d == 'PLAYBACK_START';
                if (a.j) {
                    cw(a, a.fg);
                    var k = a.j.end('STOPPED');
                } else k = _.H();
                a.H = c;
                k.then(function () {
                    Lw(a, f, e, g);
                });
            });
            return !0;
        });
    };
    Iw = function (a) {
        a.o && (a.o.cancel('0'), a.o = null);
        a.F && (a.F.cancel('0'), a.F = null);
    };
    Nw = function (a, b) {
        return Fw(a.R, b, a.D).then(function (c) {
            return c && !b.isPlayingBreak() && !c.isPlayingBreak() && b.j.url === c.j.url && a.jb() < b.endTime ? (b.endTime = c.endTime, Nw(a, b)) : c;
        });
    };
    Ow = function (a, b) {
        a.o = Nw(a, b);
        const c = a.o;
        a.F = he(a.o.then(function (d) {
            return d ? Kw(a, d).then(function (e) {
                a.na.promise.then(function () {
                    _.G(Jw, 'Preloading Next Clip');
                    e.preloadContent();
                });
                return e;
            }) : (_.G(Jw, 'No more clip afterwards'), null);
        }), function (d) {
            d && d.message === '0' && _.G(Jw, 'Next player creation is interrupted by seek.');
        }).then(function (d) {
            if (d) return d;
            c === a.o && (a.o = null);
            _.G(Jw, 'No more player afterwards');
            return null;
        });
    };
    Pw = function (a) {
        _.G(Jw, 'switchPlayerAndCip');
        if (a.o) {
            if (a.F) {
                return he(ae([a.o, a.F]).then(function (b) {
                    let c = _.q(b);
                    b = c.next().value;
                    c = c.next().value;
                    if (!b || !c) return !0;
                    a.o = null;
                    a.F = null;
                    Lw(a, c, b, !0);
                    return !1;
                }), function (b) {
                    if (b && b.message === '0') return _.G(Jw, 'Player switching is interrupted by seek.'), !1;
                    _.D(Jw, `Switch player failed ${b.message}`);
                    return !0;
                });
            }
            _.G(Jw, 'switchPlayerAndClip_: No next player.');
            return _.H(!0);
        }
        _.G(Jw, 'switchPlayerAndClip_: No next clip.');
        return _.H(!0);
    };
    Lw = function (a, b, c, d) {
        _.G(Jw, `loadCurrentPlayerAndCreateNext_: ${c.startTime}`);
        a.j = b;
        a.A = c;
        a.fe();
        bw(a, 'CLIP_STARTED', a.Mm);
        bw(a, 'CLIP_ENDED', a.fg);
        a.A.breakStatus && $v(a, 'BREAK_CLIP_LOADING', a.A.breakStatus, a.O, a.L);
        a.O = void 0;
        a.L = void 0;
        const e = a.mediaElement;
        a.na = de();
        d = b.Jd(e, d).then(function () {
            a.A.breakStatus || (cast.framework.media.Player.prototype.setPlaybackRate.call(a, a.Ma), a.wa = b.o);
        });
        Ow(a, c);
        return d;
    };
    Kw = function (a, b) {
        const c = _.qb(b.j);
        c.startTime = b.startTime;
        b.breakStatus || (c.tracksInfo = a.Pa);
        return mv(kv.M(), c);
    };
    Rw = function (a) {
        return (a.ia || mv(kv.M(), a.D)).then(function (b) {
            b.Da.addEventListener('ERROR', function (c) {
                return cast.framework.media.Player.prototype.rf.call(a, c);
            });
            return b.Jd(a.mediaElement, !1).then(function () {
                Qw(a, b);
                return b.end('STOPPED');
            });
        });
    };
    Qw = function (a, b) {
        a.Ca = b.getDurationSec();
        a.wa = b.o;
        a.La = b.getMediaCategory();
    };
    Sw = function (a) {
        this.j = a;
    };
    Tw = function (a, b, c, d) {
        let e = cast.framework.me.get();
        return e && e.usePlayerBreaks ? (K(cast.framework.common.analytics.K.ke, cast.framework.common.analytics.le.np), e = new cast.framework.timeline.sp(b), _.H(new cast.framework.media.qp(b, c, d, e, a.j))) : Av(b, c).then(function () {
            let f = null;
            c.breaks && c.breaks.length !== 0 || !c.vmapAdsRequest || (f = Bv(b, c.vmapAdsRequest).then(function (g) {
                g && (c.breaks = g.breaks, c.breakClips = g.breakClips);
            }));
            return _.H(f).then(function () {
                if (c.breaks && c.breaks.length > 0 && !c.breaks[0].isEmbedded) {
                    K(cast.framework.common.analytics.K.ke,
                        cast.framework.common.analytics.le.sq);
                    var g = new Aw(b, c.breaks, c.breakClips);
                    var k = new cast.framework.media.wq(b, c, d, g, a.j);
                } else c.breaks && c.breaks.length > 0 ? K(cast.framework.common.analytics.K.ke, cast.framework.common.analytics.le.Ml) : K(cast.framework.common.analytics.K.ke, cast.framework.common.analytics.le.Nl), g = new hw(b, c.breaks, c.breakClips), k = new pw(b, c, d, g, a.j);
                b.j = g;
                return _.H(k);
            });
        });
    };
    Uw = function (a) {
        this.j = a;
    };
    P = function (a) {
        if (!(a instanceof Uw)) throw _.D(Vw, 'Proper Player object can be acquried by calling getPlayer() of cast.framework.Application object'), Error('player is not created properly.');
        this.A = new Ks();
        this.eb = new Sw(this.broadcastStatus.bind(this));
        this.l = new Ds();
        this.F = new Ds();
        this.o = null;
        this.L = de();
        this.B = Ei.M();
        this.j = this.Ca = this.wa = this.D = this.qa = this.xa = this.ra = null;
        this.Pa = _.H();
        this.fa = this.I = null;
        this.V = new ns(new ls());
        this.H = new Bs(new zs());
        this.ca = new us(new ss(this));
        this.O = a.j;
        this.bb = Date.now();
        this.Z = new Map();
        this.J = 0;
        this.W = null;
        this.G = 1;
        this.ba = this.R = null;
        this.da = !1;
        this.La = Date.now();
        this.ia = this.Aa = 0;
        this.na = this.T = !1;
        this.Ma = null;
        Ww(this);
    };
    Ww = function (a) {
        Ns(a.A, function (c, d) {
            c !== 'ERROR' && c !== '*' && a.A.dispatchEvent(new Rs(900, d));
        });
        a.A.addEventListener('MEDIA_FINISHED', a.Nt, a);
        a.A.addEventListener('LIVE_IS_MOVING_WINDOW_CHANGED', a.broadcastStatus, a);
        a.A.addEventListener('LIVE_ENDED', a.broadcastStatus, a);
        a.A.addEventListener('RATE_CHANGE', a.eu, a);
        a.A.addEventListener('ERROR', a.Nm, a);
        a.A.addEventListener('REQUEST_PRECACHE', a.gu, a);
        a.A.addEventListener('BUFFERING', a.Et, a);
        a.A.addEventListener('TIME_UPDATE', function () {
            xs(a.ca, !0);
        });
        a.A.addEventListener('DURATION_CHANGE',
            a.Jt, a);
        a.A.addEventListener('TRACKS_CHANGED', a.ou, a);
        a.B.A = a.ju.bind(a);
        a.B.o = a.Kt.bind(a);
        Es(a.F, 'LOAD_BY_ENTITY', a.B.o.bind(a.B));
        a.B.o = a.F.j;
        Es(a.F, 'SET_CREDENTIALS', a.B.A.bind(a.B));
        a.B.A = a.F.j;
        a.B.D = a.F.j;
        a.B.H = a.F.j;
        a.B.F = a.F.j;
        a.B.G = a.F.j;
        let b = Object.keys(Xw).reduce(function (c, d) {
            c[d] = a.Zg.bind(a);
            return c;
        }, {});
        Gs(a.l, b);
        b = Object.keys(Yw).reduce(function (c, d) {
            c[d] = a.Zg.bind(a);
            return c;
        }, {});
        Gs(a.F, b);
    };
    Zw = function (a) {
        const b = Date.now();
        const c = (b - a.La) / 1E3;
        a.La = b;
        a.T && (a.da ? a.ia += c : a.Aa += c);
    };
    ax = function (a, b, c) {
        K(cast.framework.common.analytics.K.Rl, cast.framework.common.analytics.Pj(b));
        if (!_.ob($w, b)) throw a = `addEventListener(${b}) failed due to invalid event type`, _.D(Vw, a), Error(a);
        a.A.addEventListener(b, c);
    };
    bx = function (a, b, c) {
        K(cast.framework.common.analytics.K.Sl, cast.framework.common.analytics.Pj(b));
        a.A.removeEventListener(b, c);
    };
    cx = function (a, b, c, d, e) {
        a.o.Ha(b.senderId, b.data.requestId, c || (b.data.type == 'LOAD' ? 'LOAD_FAILED' : 'ERROR'), void 0 === d ? 'APP_ERROR' : d, e);
    };
    dx = function (a) {
        return function () {
            const b = Date.now();
            return Promise.resolve(a.apply(null, _.ja(_.ya.apply(0, arguments)))).then(function (c) {
                K(cast.framework.common.analytics.K.Mi, Date.now() - b);
                return c;
            }).catch(function (c) {
                K(cast.framework.common.analytics.K.Mi, Date.now() - b);
                return Promise.reject(c);
            });
        };
    };
    ex = function (a, b) {
        b.requestId || (b.requestId = a.bb++);
        const c = de();
        a.Z.set(b.requestId, c);
        return Promise.resolve(c.promise);
    };
    fx = function (a, b) {
        if (b) {
            a.J = 0;
            const c = a.Z.get(b);
            c && (c.resolve(), a.Z.delete(b));
        }
    };
    gx = function (a, b, c) {
        if (b) {
            a.J = 0;
            const d = a.Z.get(b);
            d && (d.reject(c), a.Z.delete(b));
        }
    };
    jx = function (a, b, c) {
        let d = 'ERROR';
        let e = 'APP_ERROR';
        let f = void 0;
        c && (_.ob(hx, c) ? d = c : _.ob(ix, c) ? e = c : (_.ob(hx, c.type) && (d = c.type), _.ob(ix, c.reason) && (e = c.reason)), f = c.customData);
        cx(a, b, d, e, f);
    };
    kx = function (a) {
        const b = a.H.getTracks().length;
        K(cast.framework.common.analytics.K.No, b);
        a.H.getTracks().forEach(function (c) {
            (c = c.trackContentType) && K(cast.framework.common.analytics.K.tq, Mu[c] || 0);
        });
    };
    nx = function (a) {
        if (a = a.Bb()) {
            let b = 0;
            a.streamType && (b = lx[a.streamType] || 0);
            let c = 0;
            a.mediaCategory && (c = mx[a.mediaCategory] || 0);
            K(cast.framework.common.analytics.K.mn, Mu[a.contentType] || 0);
            K(cast.framework.common.analytics.K.nn, b);
            K(cast.framework.common.analytics.K.ln, c);
        }
    };
    ox = function (a, b) {
        const c = b.media;
        let d = Object.assign(new rs(), a.fa);
        a.ra && (d = a.ra(b, d));
        const e = a.xa ? a.xa(b) : c.contentUrl || c.contentId;
        return _.H(d).then(function (f) {
            return f ? _.H(e).then(function (g) {
                if (!g) return _.D(Vw, 'Load failed, missing content url.'), Yd();
                const k = cast.framework.media.util;
                const l = k.Ps;
                const m = b.currentTime;
                const n = b.activeTrackIds;
                const t = new Gr();
                c.tracks && (t.tracks = c.tracks || []);
                c.textTrackStyle && (t.textTrackStyle = c.textTrackStyle);
                t.activeTrackIds = n;
                g = l.call(k, c, m, f, g, t);
                c.contentType = g.mimeType;
                return Tw(a.eb,
                    a.O, c, g);
            }) : (_.D(Vw, 'Load failed, missing playback config.'), Yd());
        });
    };
    px = function (a) {
        a && a.media && (a.media.vmapAdsRequest = void 0, (a = a.media.breakClips) && a.forEach(function (b) {
            b.vastAdsRequest = void 0;
        }));
    };
    qx = function (a, b) {
        if (a.j && a.j.ta()) {
            const c = a.H;
            let d = c.Nj();
            d.length > 0 ? a.R = d[0].language || null : b && a.R != null ? c.Se(a.R).length > 0 && c.Ef(a.R) : a.R = null;
            (d = c.Hc()) ? a.ba = d : b && a.ba != null && c.xb(a.ba);
        }
    };
    rx = function (a, b) {
        a.o = b;
        a.L.resolve();
        a.V.l = b;
        a.H.l = b;
        b.na = a.Qt.bind(a);
        b.ra = a.Ut.bind(a);
        b.ia = a.Pt.bind(a);
        b.gi = a.It.bind(a);
        b.Yf = function () { };
        b.qa = a.Rt.bind(a);
        b.Ca = a.Xt.bind(a);
        b.da = a.Vt.bind(a);
        b.ca = a.Tt.bind(a);
        b.ba = a.St.bind(a);
        b.Aa = a.Wt.bind(a);
        Es(a.l, 'load', b.na.bind(b));
        b.na = a.l.j;
        Es(a.l, 'preload', b.ra.bind(b));
        b.ra = a.l.j;
        b.Zf = a.l.j;
        Es(a.l, 'cancelpreload', b.ia.bind(b));
        b.ia = a.l.j;
        Es(a.l, 'stop', b.Pa.bind(b));
        b.Pa = a.l.j;
        Es(a.l, 'pause', a.ac.bind(a, b.ba.bind(b)));
        b.ba = a.l.j;
        Es(a.l, 'play', b.ca.bind(b));
        b.ca = a.l.j;
        Es(a.l, 'playagain', b.ud.bind(b));
        b.ud = a.l.j;
        Es(a.l, 'skipad', a.ac.bind(a, b.Ca.bind(b)));
        b.Ca = a.l.j;
        Es(a.l, 'seek', a.ac.bind(a, b.da.bind(b)));
        b.da = a.l.j;
        Es(a.l, 'setplaybackrate', a.ac.bind(a, b.Aa.bind(b)));
        b.Aa = a.l.j;
        Es(a.l, 'setvolume', a.ac.bind(a, b.yf.bind(b)));
        b.yf = a.l.j;
        Es(a.l, 'getstatus', b.sd.bind(b));
        b.sd = a.l.j;
        Es(a.l, 'editaudiotracks', b.eb.bind(b));
        b.eb = a.l.j;
        Es(a.l, 'edittracksinfo', a.ac.bind(a, b.rd.bind(b)));
        b.rd = a.l.j;
        Es(a.l, 'queueload', b.nf.bind(b));
        b.nf = a.l.j;
        Es(a.l, 'queueinsert',
            b.lf.bind(b));
        b.lf = a.l.j;
        Es(a.l, 'queueupdate', a.ac.bind(a, b.wa.bind(b)));
        b.wa = a.l.j;
        Es(a.l, 'queueremove', b.sf.bind(b));
        b.sf = a.l.j;
        Es(a.l, 'queuereorder', b.xf.bind(b));
        b.xf = a.l.j;
        b.bg = !0;
        b.La = a.ku.bind(a);
        Es(a.l, 'storesession', a.ac.bind(a, b.La.bind(b)));
        b.La = a.l.j;
        b.xa = a.hu.bind(a);
        Es(a.l, 'resumesession', a.ac.bind(a, b.xa.bind(b)));
        b.xa = a.l.j;
        vs(a.ca, b);
    };
    sx = function (a, b) {
        cx(a, b, 'ERROR', 'NOT_SUPPORTED');
        Ef(cast.framework.common.analytics.K.Kq);
    };
    tx = function (a, b) {
        this.o = a;
        this.A = b;
        this.j = this.l = null;
    };
    ux = function (a) {
        clearTimeout(a.l);
        a.l = null;
    };
    yx = function (a, b) {
        b == a.j ? _.vd(vx, `state is already set to idle due to ${b}`) : (a.j = b, b = wx[b], ux(a), a.l = setTimeout(function () {
            _.G(vx, 'timer expired');
            cast.framework.common.ne.Ze(xx[this.j || 'no_media']);
            this.A();
        }.bind(a), 6E44 * b));
    };
    zx = function () { };
    Q = function (a) {
        if (!(a instanceof zx)) throw _.D(Ax, 'CastReceiverContext is a singleton.Please call CastReceiverContext.getInstance() instead.'), Error('CastReceiverContext is not created properly.');
        cast.framework.common.analytics.vt();
        cast.ag && Bf(cast.framework.common.analytics.K.km, cast.ag);
        this.l = _.Vg.M();
        this.D = new sv();
        this.o = new P(new Uw(this.D));
        this.D.o = this.o;
        this.j = null;
        this.B = !1;
        this.A = null;
        this.l.addEventListener('shutdown', function () {
            cast.framework.common.ne.Ze(7);
        });
    };
    Ex = function (a, b) {
        if (a.j) throw Error('Cast receiver options already provided');
        a.j = b;
        cast.framework.me.set(a.j);
        for (const c in Bx) void 0 !== b[c] && K(cast.framework.common.analytics.K.rq, Bx[c]);
        void 0 !== b.versionCode && K(cast.framework.common.analytics.K.el, cast.framework.common.hash.vh(b.versionCode));
        a.initialize();
        if (b.playbackConfig) {
            a = b.playbackConfig;
            for (var d in Cx) void 0 !== a[d] && K(cast.framework.common.analytics.K.ep, Cx[d]);
            d = a.mplConfig;
            for (const e in Dx) {
                (void 0 !== a[e] || d && void 0 !== d[e]) && K(cast.framework.common.analytics.K.eo,
                    Dx[e]);
            }
        }
    };
    Gx = function () {
        const a = document.getElementsByTagName('video');
        const b = document.getElementsByTagName('audio');
        let c = Fx();
        if (a.length == 0 && b.length == 0 && !c) return _.F(Ax, 'MediaElement is not created yet'), null;
        if (c) return c.getMediaElement();
        c = _.q(a);
        for (var d = c.next(); !d.done; d = c.next()) { if (d = d.value, d.classList && d.classList.contains('castMediaElement')) return d; }
        c = _.q(b);
        for (d = c.next(); !d.done; d = c.next()) { if (d = d.value, d.classList && d.classList.contains('castMediaElement')) return d; }
        return a.length > 0 ? a[0] : b[0];
    };
    Fx = function () {
        const a = document.getElementsByTagName('cast-media-player');
        return a.length > 0 ? a[0] : null;
    };
    Hx = function (a, b) {
        return Wg(a.l, b, cast.framework.N.Nk(a.j && a.j.customNamespaces && a.j.customNamespaces[b] || 'JSON'));
    };
    Ix = function (a) {
        const b = a.o;
        b.addEventListener('PLAYER_LOADING', a.yu.bind(a));
        b.addEventListener('MEDIA_FINISHED', a.uu.bind(a));
    };
    Kx = function () {
        Jx || (Jx = new Q(new zx()));
        return Jx;
    };
    Ox = function () {
        const a = this;
        this.l = new Ks();
        this.o = new Ks();
        this.j = Kx();
        if (this.A = this.j.isRemoteControl()) {
            qd(Lx, Mx, 'App Running as a Remote Control'), this.D = Hx(this.j, 'urn:x-cast:com.google.cast.remotecontrol'), this.D.addEventListener('send', function (b) {
                a.o.dispatchEvent(b.data);
            }), this.j.qj('urn:x-cast:com.google.cast.remotecontrol', this.B.bind(this)), this.addEventListener('APPLICATION_CHANGED', function () {
                return Nx(a, new fr());
            });
        }
    };
    Px = function (a, b) {
        a.o.addEventListener('SEEK', b);
    };
    Nx = function (a, b) {
        a.j.uk('urn:x-cast:com.google.cast.remotecontrol', 'system-0', b);
    };
    Qx = function () { };
    Sx = function (a) {
        if (!(a instanceof Qx)) throw _.D(Rx, 'SignalCollector is a singleton. Please call cast.framework.pal.SignalCollector.getInstance() instead.'), Error('SignalCollector was not created properly.');
        this.j = Kx();
    };
    Tx = function (a) {
        if (a = a.j.o.j) {
            switch (a.j && a.j.Rb() || 0) {
                case cast.framework.common.analytics.pb.si:
                case cast.framework.common.analytics.pb.cj:
                    return 'HTML Media Player';
                case cast.framework.common.analytics.pb.jg:
                    return 'Shaka Player';
                case cast.framework.common.analytics.pb.ej:
                    return 'MPL';
                case cast.framework.common.analytics.pb.hi:
                    return 'Custom Player';
            }
        }
        return '';
    };
    Ux = function (a) {
        return a.j.rc() ? Promise.resolve() : new Promise(function (b) {
            a.j.addEventListener('ready', function () {
                b();
            });
        });
    };
    Vx = function (a) {
        ql.call(this, a);
        const b = this;
        this.H = Kx().isRemoteControl();
        this.G = cast.framework.we.M();
        this.H && this.G.addEventListener('MEDIA_STATUS', function (c) {
            c && c.status && c.status[0] && (c = c.status[0], b.A = c.mediaSessionId, b.F(c));
        });
    };
    Wx = function (a, b, c, d) {
        this.name = a;
        this.isRemoteControl = void 0 === d ? !1 : d;
        this.iconUrl = b;
        this.groupName = void 0 === c ? '' : c;
    };
    Xx = function () {
        this.applicationData = null;
        this.state = 'launching';
        this.isSeeking = !1;
        this.currentTime = this.duration = 0;
        this.playbackRate = 1;
        this.metadata = null;
        this.mediaSessionId = 0;
        this.queueData = this.media = null;
        this.nextThumbnailUrl = this.nextSubtitle = this.nextTitle = this.secondaryImageUrl = this.thumbnailUrl = this.subtitle = this.title = '';
        this.nextMetadata = null;
        this.preloadingNext = !1;
        this.mediaCategory = this.contentType = null;
        this.supportedMediaCommands = 0;
        this.isAtLiveEdge = this.isLive = !1;
        this.sectionDuration = this.sectionStartTimeInMedia = this.mediaStartAbsoluteTime = this.liveSeekableRange = null;
        this.breakPercentagePositions = [];
        this.isBreakSkippable = this.isPlayingBreak = !1;
        this.whenSkippable = void 0;
        this.currentBreakClipNumber = this.numberBreakClips = 0;
        this.breakTitle = '';
        this.displayStatus = !1;
        this.displayType = 'tv';
        this.dpadUi = !1;
        this.customState = this.presentation = null;
        this.activeTrackIds = [];
    };
    Yx = function (a, b, c) {
        this.type = a;
        this.field = b;
        this.value = c;
    };
    by = function (a) {
        this.o = Kx();
        this.l = this.o.o;
        this.G = cast.framework.we.M();
        this.H = new Ks();
        this.F = void 0;
        this.T = !1;
        this.R = [];
        this.I = 0;
        this.j = Zx(this, a);
        $x(this);
        this.J = this.L = this.O = this.D = this.B = null;
        this.A = new uq();
        ay(this);
    };
    Zx = function (a, b) {
        return new window.Proxy(b, {
            set(c, d, e) {
                if (e === c[d] && typeof e !== 'object') return !0;
                c[d] = e;
                c = new Yx(d + cast.framework.C.ga, d, e);
                a.T ? a.R.push(c) : a.H.dispatchEvent(c);
                return !0;
            },
        });
    };
    cy = function (a, b) {
        return function () {
            let c = _.ya.apply(0, arguments);
            a.T = !0;
            b.apply(null, _.ja(c));
            for (a.T = !1; a.R.length > 0;) c = a.R.shift(), a.H.dispatchEvent(c);
        };
    };
    dy = function (a, b) {
        b && (a.j.applicationData = new Wx(b.name, b.iconUrl));
    };
    iy = function (a, b) {
        b = (a.j.media = b) || new Wq();
        a: {
            switch ((b.contentType || '').toLowerCase().split('/')[0]) {
                case 'image':
                    var c = 'image';
                    break a;
                case 'audio':
                    c = 'audio';
                    break a;
            }
            c = 'video';
        }
        a.j.contentType = c;
        a.j.mediaCategory = b.mediaCategory || cast.receiver.aa.getMediaCategory(cast.framework.N.xc(b)) || 'VIDEO';
        a.j.isLive = b.streamType === 'LIVE';
        a.j.metadata = b.metadata || null;
        c = b.metadata || {};
        a.j.title = c.title || '';
        a.j.subtitle = c.subtitle || '';
        const d = c.images;
        a.j.thumbnailUrl = d && d[0] && d[0].url || '';
        a.j.secondaryImageUrl = c.secondaryImage && c.secondaryImage.url || '';
        a.I = 0;
        ey(a, fy(a));
        gy(a);
        hy(a, b);
    };
    jy = function (a, b) {
        b ? (a.j.preloadingNext = !0, a.j.nextTitle = b.title || '', a.j.nextSubtitle = b.subtitle || '', a.j.nextThumbnailUrl = b.images && b.images[0] && b.images[0].url || '', a.j.nextMetadata = b) : (a.j.preloadingNext = !1, a.j.nextTitle = '', a.j.nextSubtitle = '', a.j.nextThumbnailUrl = '', a.j.nextMetadata = null);
    };
    ky = function (a, b) {
        return !a || typeof b !== 'number' || isNaN(b) || b == 0 ? [] : a.map(function (c) {
            return c.position < 0 ? 100 : Math.min(100, c.position / b * 100);
        });
    };
    ly = function (a) {
        a = a.o.j;
        return !!(a && a.uiConfig && a.uiConfig.useStatusOnlyForUi);
    };
    ay = function (a) {
        const b = a.o.isRemoteControl();
        _.G(my, `Remote control mode enabled: ${b}`);
        b ? (a.A.o = cy(a, function () {
            a.j.currentTime = vq(a.A);
            ny(a);
        }), Px(a.G, cy(a, function () {
            const c = a.A;
            c.l = !1;
            clearInterval(c.B);
            a.j.isSeeking = !0;
        })), a.G.addEventListener('MEDIA_STATUS', cy(a, function (c) {
            c && c.status && c.status[0] && oy(a, c.status[0]);
        })), a.G.addEventListener('APPLICATION_CHANGED', function (c) {
            let d = '';
            let e = c.iconUrl;
            const f = c.deviceName || '';
            if (c = c.application) d = c.displayName, c = c.appImages, e = e || c && c[0] && c[0].url || '';
            a.j.applicationData = new Wx(d, e, f, !0);
        }), a.G.addEventListener('CUSTOM_STATE', function (c) {
            a.j.customState = c.state;
        })) : a.o.rc() ? py(a) : a.o.addEventListener('ready', function () {
            return py(a);
        });
        gi(a.o.l).then(function (c) {
            a.j.displayType = c ? 'touch' : 'tv';
            c = (c = cast.framework.me.get()) && c.uiConfig && c.uiConfig.disableRemoteControlOptimizedUi;
            Be() && !c && (a.j.dpadUi = !0);
        });
    };
    py = function (a) {
        dy(a, a.o.kd());
        qy(a);
        setTimeout(function () {
            a.j.state == 'launching' && ry(a, 'idle');
        }, 1E33);
    };
    qy = function (a) {
        ly(a) ? (a.l.addEventListener('REQUEST_SEEK', cy(a, function () {
            const b = a.A;
            b.l = !1;
            clearInterval(b.B);
            a.j.isSeeking = !0;
        })), a.l.addEventListener('MEDIA_STATUS', cy(a, function (b) {
            b.mediaStatus && oy(a, b.mediaStatus);
        })), a.A.o = cy(a, function () {
            a.j.currentTime = vq(a.A);
            ny(a);
        })) : (a.l.addEventListener('MEDIA_FINISHED', cy(a, function (b) {
            b.endedReason === 'INTERRUPTED' ? ry(a, 'loading') : ry(a, 'idle');
            sy(a);
            jy(a);
        })), a.l.addEventListener('PLAYER_LOADING', cy(a, function (b) {
            jy(a);
            iy(a, b.media);
            a.j.mediaCategory === 'IMAGE'
                ? ry(a, 'playing') : ry(a, 'loading');
        })), a.l.addEventListener('PLAYER_LOAD_COMPLETE', cy(a, function (b) {
            iy(a, b.media);
            a.l.getPlayerState() == 'PAUSED' && ry(a, 'paused');
            ty(a);
            uy(a, b.media, a.l.getLiveSeekableRange());
        })), a.l.addEventListener('MEDIA_INFORMATION_CHANGED', cy(a, function (b) {
            iy(a, b.media);
        })), a.l.addEventListener('PLAYING', cy(a, function () {
            return ry(a, 'playing');
        })), a.l.addEventListener('PAUSE', cy(a, function (b) {
            b.ended ? jy(a) : ry(a, 'paused');
        })), a.l.addEventListener('BUFFERING', cy(a, function (b) {
            b.isBuffering
                ? ry(a, 'buffering') : a.j.state === 'buffering' && ry(a, 'playing');
        })), a.l.addEventListener('SEEKING', cy(a, function () {
            a.j.isSeeking = !0;
            ey(a, fy(a));
            ty(a);
            jy(a);
        })), a.l.addEventListener('SEEKED', cy(a, function () {
            a.j.isSeeking = !1;
            ey(a, fy(a));
            ty(a);
        })), a.l.addEventListener('BREAK_STARTED', cy(a, function (b) {
            return vy(a, b);
        })), a.l.addEventListener('BREAK_ENDED', cy(a, function (b) {
            return vy(a, b);
        })), a.l.addEventListener('BREAK_CLIP_LOADING', cy(a, function (b) {
            return vy(a, b);
        })), a.l.addEventListener('BREAK_CLIP_STARTED', cy(a,
            function (b) {
                return vy(a, b);
            })), a.l.addEventListener('BREAK_CLIP_ENDED', cy(a, function (b) {
            return vy(a, b);
        })), a.l.addEventListener('DURATION_CHANGE', cy(a, function () {
            return ty(a);
        })), a.l.addEventListener('TIME_UPDATE', cy(a, function () {
            return ty(a);
        })), a.l.addEventListener('REQUEST_DISPLAY_STATUS', cy(a, function () {
            a.j.mediaCategory === 'VIDEO' && ey(a, !0);
        })), a.l.addEventListener('REQUEST_PLAY', function () {
            a.j.mediaCategory === 'VIDEO' && a.j.state === 'playing' && ey(a, !0);
        }), a.l.addEventListener('PLAYER_PRELOADING', cy(a,
            function (b) {
                jy(a, b.media.metadata);
            })), a.l.addEventListener('MEDIA_STATUS', cy(a, function (b) {
            b.mediaStatus && wy(a, b.mediaStatus);
        })), a.l.addEventListener('CUSTOM_STATE', function (b) {
            a.j.customState = b.state;
        }));
    };
    wy = function (a, b) {
        b.extendedStatus && (b = _.qb(b), Object.assign(b, b.extendedStatus));
        a.j.mediaSessionId !== b.mediaSessionId ? (a.j.mediaSessionId = b.mediaSessionId, iy(a, b.media), a.j.queueData = b.queueData) : (b.queueData && (a.j.queueData = b.queueData), b.media && iy(a, b.media));
        typeof b.supportedMediaCommands === 'number' && (a.j.supportedMediaCommands = b.supportedMediaCommands);
        if (b.liveSeekableRange) {
            const c = b.liveSeekableRange;
            a.j.isLive && (sy(a), xy(a) ? (a.j.liveSeekableRange = c, yy(a), zy(a)) : a.j.liveSeekableRange = null);
        }
        a.j.activeTrackIds = b.activeTrackIds || [];
        switch (b.playerState) {
            case 'PLAYING':
                ry(a, 'playing');
                break;
            case 'PAUSED':
                ry(a, 'paused');
                break;
            case 'BUFFERING':
                ry(a, 'buffering');
                break;
            case 'IDLE':
                ry(a, 'idle');
                break;
            case 'LOADING':
                ry(a, 'loading');
        }
        Ay(a);
    };
    oy = function (a, b) {
        a.j.isSeeking = !1;
        wy(a, b);
        let c = b.breakStatus;
        let d = a.j.media;
        let e = a.A;
        let f = cast.framework.N.av(b);
        const g = cast.receiver.C.aa.Zj(f.breakStatus);
        let k = g ? f.breakStatus.currentBreakClipTime : f.currentTime;
        k = k || 0;
        cast.receiver.C.aa.qd(k) ? (e.A = Number(k), e.D = Date.now(), e.o()) : e.l && (e.A += (Date.now() - e.D) / 1E3 * e.G, e.D = Date.now(), e.o(), f.playerState !== 'IDLE' && (e.j || _.F(By, 'currentTime was not synchronized from Media Status. Possible incorrect progress bar position')));
        f.playerState === 'PLAYING' ? wq(e) : (e.l = !1, clearInterval(e.B));
        e.G = !g && cast.receiver.C.aa.qd(f.playbackRate) ? f.playbackRate : 1;
        a.j.isPlayingBreak = !!Cy(c);
        e = Dy(c, d);
        f = Ey(c, d);
        a: {
            if (a.j.isPlayingBreak) {
                if (!f) {
                    _.D(my, 'Break clip data is not found for currently playing break.');
                    d = void 0;
                    break a;
                }
                d = f.duration;
            } else {
                if (!d) {
                    d = void 0;
                    break a;
                }
                d = d.duration;
            }
            cast.receiver.C.aa.qd(d) || (_.F(my, `Duration is not a valid number. Duration: ${d}`), d = void 0);
        }
        a.j.isPlayingBreak ? (ey(a, !1, !0), a.j.breakTitle = f && f.title || '') : a.j.breakTitle = '';
        a.j.duration = void 0 === d ? 0 : d;
        gy(a);
        a.F = Cy(c) ? c.whenSkippable
            : void 0;
        ny(a);
        a.j.numberBreakClips = e && Array.isArray(e.breakClipIds) ? e.breakClipIds.length : 0;
        e && f ? (c = e.breakClipIds.indexOf(f.id), c = c < 0 ? 0 : c + 1) : c = 0;
        a.j.currentBreakClipNumber = c;
        b.media && uy(a, b.media, b.liveSeekableRange);
    };
    xy = function (a) {
        return !!(a.j.supportedMediaCommands & 2);
    };
    fy = function (a) {
        if (a.j.isPlayingBreak) return !1;
        if (a.j.mediaCategory === 'AUDIO' || a.j.mediaCategory === 'VIDEO' && a.j.applicationData && a.j.applicationData.isRemoteControl) {
            switch (a.j.state) {
                case 'playing':
                case 'loading':
                case 'buffering':
                case 'paused':
                    return !0;
                default:
                    return !1;
            }
        }
        if (a.j.mediaCategory === 'VIDEO') {
            switch (a.j.state) {
                case 'loading':
                    return !0;
                case 'buffering':
                case 'playing':
                case 'paused':
                    return a.j.isSeeking;
            }
        }
        return !1;
    };
    ry = function (a, b) {
        a.j.state != b && (a.j.state = b, a.j.mediaCategory !== 'VIDEO' || b !== 'paused' || a.j.isPlayingBreak ? ey(a, fy(a)) : ey(a, !0));
    };
    vy = function (a, b) {
        b.type == 'BREAK_STARTED' ? (a.j.isPlayingBreak = !0, ey(a, !1, !0)) : b.type == 'BREAK_ENDED' && (a.j.isPlayingBreak = !1);
        if (a.j.isPlayingBreak) {
            a.j.numberBreakClips = b.total || 0;
            a.j.currentBreakClipNumber = b.index || 0;
            a.F = b.whenSkippable;
            const c = (a.j.media && a.j.media.breakClips || []).find(function (d) {
                return d.id == b.breakClipId;
            });
            a.j.breakTitle = c && c.title || '';
        } else a.F = void 0, a.j.numberBreakClips = 0, a.j.currentBreakClipNumber = 0, a.j.breakTitle = '';
        ty(a);
    };
    hy = function (a, b) {
        a.j.mediaStartAbsoluteTime = b.startAbsoluteTime || null;
        b.metadata ? (a.j.sectionStartTimeInMedia = typeof b.metadata.sectionStartTimeInMedia === 'number' ? b.metadata.sectionStartTimeInMedia : null, a.j.sectionDuration = b.metadata.sectionDuration || null) : (a.j.sectionStartTimeInMedia = null, a.j.sectionDuration = null);
    };
    uy = function (a, b, c) {
        b && (a.j.isLive = b.streamType == 'LIVE', hy(a, b), a.j.isLive && xy(a) && c && typeof c.start === 'number' && typeof c.end === 'number' ? (a.j.liveSeekableRange = c, yy(a), zy(a)) : a.j.liveSeekableRange = null);
    };
    Ay = function (a) {
        a.j.isAtLiveEdge = a.j.isLive ? xy(a) ? typeof a.j.currentTime === 'number' && a.j.liveSeekableRange ? Math.abs(a.j.currentTime - a.j.liveSeekableRange.end) < 10 : !1 : a.l.getPlayerState() === 'PLAYING' : !1;
    };
    zy = function (a) {
        clearTimeout(a.D);
        a.D = null;
        if (a.j.isLive && xy(a) && a.j.liveSeekableRange) {
            const b = Date.now() / 1E3 - a.O;
            a.j.liveSeekableRange.isMovingWindow && (a.j.liveSeekableRange.start = a.L + b);
            a.j.liveSeekableRange.isLiveDone || (a.j.liveSeekableRange.end = a.J + b);
            Ay(a);
            a.H.dispatchEvent(new Yx(Fy, 'liveSeekableRange', a.j.liveSeekableRange));
            a.D = setTimeout(function () {
                zy(a);
            }, 500);
        }
    };
    yy = function (a) {
        a.L = a.j.liveSeekableRange.start;
        a.J = a.j.liveSeekableRange.end;
        a.O = Date.now() / 1E3;
    };
    sy = function (a) {
        a.D != null && (clearTimeout(a.D), a.D = null, a.O = null, a.L = null, a.J = null);
    };
    ty = function (a) {
        if (a.j.isPlayingBreak) {
            a.j.duration = a.l.Ec() || 0;
            const b = a.l.ib();
            b !== null && (a.j.currentTime = b);
        } else a.j.duration = a.l.getDurationSec() || 0, a.j.currentTime = a.l.getCurrentTimeSec() || 0, Ay(a);
        gy(a);
        ny(a);
        zy(a);
    };
    gy = function (a) {
        a.j.isPlayingBreak ? (a.j.breakPercentagePositions = [], a.I = 0) : a.I != a.j.duration && (a.j.breakPercentagePositions = ky(a.j.media && a.j.media.breaks, a.j.duration), a.I = a.j.duration);
    };
    ny = function (a) {
        if (typeof a.F === 'number' && a.F >= 0) {
            const b = a.F - a.j.currentTime;
            b > 0 ? (a.j.whenSkippable = b, a.j.isBreakSkippable = !1) : (a.j.whenSkippable = 0, a.j.isBreakSkippable = !0);
        } else a.j.whenSkippable = void 0, a.j.isBreakSkippable = !1;
    };
    ey = function (a, b, c) {
        if (b || !a.B || (void 0 === c ? 0 : c)) {
            if (a.B !== null && (clearTimeout(a.B), a.B = null), a.j.displayStatus = b) {
                a.B = setTimeout(function () {
                    a.j.displayStatus = fy(a);
                    a.B = null;
                }, 5E33);
            }
        }
    };
    $x = function (a) {
        const b = Gy;
        if (b) {
            const c = a.j;
            Object.keys(b).forEach(function (d) {
                return c[d] = b[d];
            });
        } else a.j.supportedMediaCommands = a.l.lc();
    };
    Dy = function (a, b) {
        return Cy(a) ? (b && b.breaks || []).find(function (c) {
            return c.id === a.breakId;
        }) || null : null;
    };
    Ey = function (a, b) {
        return Cy(a) ? (b && b.breakClips || []).find(function (c) {
            return c.id === a.breakClipId;
        }) || null : null;
    };
    Cy = function (a) {
        return cast.receiver.C.aa.Zj(a);
    };
    Hy = function (a) {
        this.l = a;
        this.G = window.getComputedStyle(this.l);
        this.j = [];
    };
    Iy = function (a) {
        a.H = setTimeout(function () {
            void 0 !== a.A && a.j[a.A].classList.remove('visible');
        }, a.B);
    };
    Jy = function (a) {
        return a.l && a.l.children ? Array.from(a.l.children).filter(function (b) {
            const c = window.getComputedStyle(b).backgroundImage;
            if (c && c !== 'none') return b;
        }) : [];
    };
    Ly = function (a, b) {
        a = a.G.getPropertyValue(b) || '';
        a = a.toLocaleLowerCase().trim();
        const c = parseFloat(a);
        switch (a.replace(/[-+.0-9]/g, '').trim()) {
            case 'ms':
                return c;
            case 's':
                return 1E3 * c;
            default:
                return _.D(Ky, `Cannot parse value ${a} of CSS style ${b}`), 0;
        }
    };
    My = function () {
        this.type = 'changed';
    };
    Yy = function (a) {
        const b = this;
        this.l = new Ks();
        this.j = a;
        Fe() && (this.j.addEventListener(Ny, function () {
            Oy(b);
        }), this.j.addEventListener(Py, function () {
            Oy(b);
        }), this.j.addEventListener(Qy, function () {
            Oy(b);
        }));
        this.j.addEventListener(Ry, function () {
            Oy(b);
        });
        this.j.addEventListener(Sy, function () {
            Oy(b);
        });
        this.j.addEventListener(Ty, function () {
            Oy(b);
        });
        this.j.addEventListener(Uy, function () {
            Oy(b);
        });
        this.j.addEventListener(Vy, function () {
            Oy(b);
        });
        this.j.addEventListener(Wy, function () {
            Oy(b);
        });
        this.j.addEventListener(Fy, function () {
            Oy(b);
        });
        this.j.addEventListener(Xy, function () {
            Oy(b);
        });
    };
    Oy = function (a) {
        a.l.dispatchEvent(new My());
    };
    Zy = function (a) {
        const b = a.j.j;
        a = xy(a.j);
        return b.isPlayingBreak ? 0 : typeof b.sectionStartTimeInMedia === 'number' ? b.sectionStartTimeInMedia : a && b.liveSeekableRange && b.liveSeekableRange.start ? b.liveSeekableRange.start : 0;
    };
    $y = function (a) {
        a = a.j.j;
        return !a.isPlayingBreak && typeof a.mediaStartAbsoluteTime === 'number';
    };
    az = function (a) {
        a = a.j.j.currentTime - Zy(a);
        return a >= 0 ? a : 0;
    };
    bz = function (a) {
        const b = a.j.j;
        const c = $y(a);
        const d = az(a);
        return xy(a.j) && b.isLive && !b.isPlayingBreak && b.liveSeekableRange && typeof b.sectionStartTimeInMedia !== 'number' && !c ? cast.receiver.C.aa.Ua(b.currentTime) : c ? cast.receiver.C.aa.Kg(b.mediaStartAbsoluteTime + b.currentTime) : cast.receiver.C.aa.Ua(d);
    };
    cz = function (a) {
        a = a.j.j;
        return a.duration > 0 || a.state === 'loading' || typeof a.sectionStartTimeInMedia === 'number' && !!a.sectionDuration;
    };
    dz = function (a) {
        const b = a.j.j;
        const c = xy(a.j);
        a = Zy(a);
        return b.isPlayingBreak ? b.duration : typeof b.sectionStartTimeInMedia === 'number' && b.sectionDuration ? b.sectionDuration : c && b.isLive && b.liveSeekableRange && b.liveSeekableRange.end ? b.liveSeekableRange.end - a : b.isLive ? -1 : b.duration - a;
    };
    ez = function (a) {
        if (!cz(a)) return '';
        const b = a.j.j;
        const c = dz(a);
        return $y(a) ? cast.receiver.C.aa.Kg(b.mediaStartAbsoluteTime + b.sectionStartTimeInMedia + b.sectionDuration) : cast.receiver.C.aa.Ua(c);
    };
    fz = function (a) {
        const b = a.j.j;
        a = xy(a.j);
        return b.isPlayingBreak || !b.isLive || (!a || !b.liveSeekableRange) && typeof b.sectionStartTimeInMedia === 'number' && !!b.sectionDuration;
    };
    gz = function (a) {
        if (!fz(a)) return null;
        a = Zy(a);
        return a < 0 ? 0 - a : 0;
    };
    hz = function (a) {
        const b = a.j.j;
        return xy(a.j) && b.isLive && !b.isPlayingBreak && !!b.liveSeekableRange;
    };
    iz = function (a) {
        if (!hz(a)) return null;
        const b = a.j.j;
        const c = Zy(a);
        a = dz(a);
        return new sr(Math.min(Math.max(0, b.liveSeekableRange.start - c), a), Math.min(Math.max(0, b.liveSeekableRange.end - c), a), b.liveSeekableRange.isMovingWindow, b.liveSeekableRange.isLiveDone);
    };
    jz = function (a) {
        const b = iz(a);
        return b ? b.start / dz(a) * 100 : 0;
    };
    kz = function (a) {
        const b = iz(a);
        return b ? (az(a) - b.start) / dz(a) * 100 : 0;
    };
    lz = function (a) {
        const b = iz(a);
        return b ? (b.end - b.start) / dz(a) * 100 : 0;
    };
    mz = function (a) {
        let b = a.j.j;
        if (b.isPlayingBreak) return [];
        const c = Zy(a);
        a = dz(a);
        const d = b.isLive;
        let e = b.liveSeekableRange;
        e = e ? e.end : b.duration;
        const f = [];
        b = _.q(b.media && b.media.breaks || []);
        for (let g = b.next(); !g.done; g = b.next()) {
            g = g.value;
            let k = g.position;
            let l = 0;
            d || k !== -1 || (k = c + a);
            g.expanded && (d && g.duration === -1 && e > k ? l = e - k : g.duration > 0 && (l = g.duration));
            k < 0 || k + l < c || k > c + a || (k < c && (l -= c - k, k = c), k + l > a + c && (l = a + c - k), k -= c, f.push({
                position: Math.min(100, k / a * 100),
                width: Math.min(100, l / a * 100),
            }));
        }
        return f;
    };
    nz = function () {
        const a = lf.call(this) || this;
        window.customElements && window.customElements.define && a.createdCallback();
        return a;
    };
    oz = function (a, b) {
        if (b) {
            const c = a.l.querySelector('.playback-logo');
            window.getComputedStyle(c, null).backgroundImage === 'none' && cast.receiver.C.aa.Rd(b.iconUrl).then(function () {
                c.style.backgroundImage = cast.receiver.C.aa.Va(b.iconUrl);
                c.classList.add('app-icon');
                c.textContent = '';
            }, function () {
                c.textContent = b.name;
                c.style.backgroundImage = '';
                c.classList.remove('app-icon');
            });
        }
    };
    pz = function (a, b) {
        b ? a.style.content = cast.receiver.C.aa.Va(b) : a.style.removeProperty('content');
    };
    qz = function (a) {
        for (var b; b = a.lastChild;) a.removeChild(b);
    };
    rz = function (a, b) {
        if (b) {
            const c = document.createElement('span');
            c.textContent = b;
            a.appendChild(c);
        }
    };
    sz = function (a, b, c) {
        c > 0 ? a.ca.textContent = c > 1 ? cast.receiver.Y.Mj(b, c) : '' : (a.ca.textContent = '', a.da.textContent = '');
    };
    tz = function (a) {
        let b = Math.floor(a.j.duration) - Math.floor(a.j.currentTime);
        b < 0 && (b = 0);
        b = cast.receiver.C.aa.Ua(b);
        a.j.numberBreakClips > 1 && (b = `(${b})`);
        a.da.textContent = b;
        void 0 === a.j.whenSkippable ? (J(a.H, !1), J(a.F, !1)) : a.j.whenSkippable > 0 ? (a.F.textContent = cast.receiver.Y.Jj(cast.receiver.C.aa.Ua(a.j.whenSkippable, !0)), J(a.H, !1), J(a.F, !0)) : (J(a.H, !0), J(a.F, !1));
    };
    uz = function (a) {
        for (var b = mz(a.I), c = _.q(a.J.querySelectorAll('.breakMarker')), d = c.next(); !d.done; d = c.next()) d.value.remove();
        if (b) {
            const e = b.length - 1;
            b.forEach(function (f, g) {
                const k = document.createElement('div');
                k.classList.add('breakMarker');
                k.style.left = `${f.position}%`;
                a.J.appendChild(k);
                f = f.width;
                f > 1 && (k.style.width = `${f}%`);
                g === e && (g = a.J.getBoundingClientRect().right, k.getBoundingClientRect().right >= g && (k.style.left = '', k.style.right = '0'));
            });
        }
    };
    vz = function (a, b, c) {
        a.T.addEventListener(b, c);
        c();
    };
    wz = function (a) {
        Array.prototype.forEach.call(a.l.getElementsByClassName('breakIcon'), function (b) {
            return b.dataset.adLabel = cast.receiver.Y.Ri;
        });
        Array.prototype.forEach.call(a.l.getElementsByClassName('liveLabel'), function (b) {
            return b.dataset.liveLabel = cast.receiver.Y.ig;
        });
        a.H.textContent = cast.framework.Y.Go;
    };
    xz = function (a, b) {
        return a.shadowRoot.getElementById(b);
    };
    yz = function () {
        const a = lf.call(this) || this;
        window.customElements && window.customElements.define && a.createdCallback();
        return a;
    };
    zz = function (a, b, c) {
        a.F.addEventListener(b, c);
        c();
    };
    Nz = function (a) {
        Xp.call(this, a);
        const b = this;
        a = document.querySelector('cast-media-player');
        this.l = new Xx();
        this.V = new by(this.l);
        this.ca = a;
        this.Z = cast.framework.we.M();
        this.ca && Yp(this);
        this.D = new Yy(this.V);
        this.D.addEventListener('changed', function () {
            let c = b.D;
            b.j.l.W = Zy(c);
            b.j.l.ia = b.l.mediaStartAbsoluteTime;
            J(b.j.l.da, cz(c));
            Pp(b.j, dz(c), ez(c));
            let d = hz(c);
            let e = b.j.l;
            e.La = d;
            J(e.qa, d);
            J(e.na, d);
            if (d) {
                d = b.j.l;
                e = cast.framework.N.Lk(iz(c));
                const f = jz(c);
                const g = kz(c);
                const k = lz(c);
                d.l || (um(d, e.start), vm(d, e.end), d.j.style.left = `${f}%`, d.j.style.width = `${k}%`, d.na.style.left = `${f}%`, d.na.style.width = `${g}%`, d.qa.style.left = `${f}%`, d.qa.style.width = `${k}%`);
            }
            d = fz(c);
            J(b.j.l.R, d);
            d && (d = b.j.l, d.B = gz(c), qm(d, d.j.value));
            Op(b.j, az(c) || 0, bz(c));
            b.l.isLive && (c = mz(b.D), xm(b.j.l, c));
        });
        Az(this, Py, function () {
            if (b.l.media) {
                const c = cast.framework.N.xc(b.l.media);
                aq(b, c, b.l.supportedMediaCommands);
                if (c) {
                    let d = cq(c.userActionStates, 'LIKE');
                    jm(b.I, d);
                    jm(b.J, d);
                    d = cq(c.userActionStates, 'DISLIKE');
                    jm(b.G, d);
                    d = cq(c.userActionStates, 'LYRICS');
                    jm(b.L, d);
                } else {
                    jm(b.I,
                        !1), jm(b.G, !1), jm(b.J, !1), jm(b.L, !1);
                }
                bq(b, c.tracks, b.l.activeTrackIds);
            }
        });
        Az(this, Bz, function () {
            if (b.l.queueData) {
                var c = cast.framework.N.cv(b.l.queueData);
                const d = b.j;
                d.j && pf(d.j, c);
                c.repeatMode && em(b.O, c.repeatMode);
                jm(b.R, !!c.shuffle);
            } else c = b.j, c.j && pf(c.j, null), em(b.O, 'REPEAT_OFF'), jm(b.R, !1);
        });
        Az(this, Cz, function () {
            b.l.media && bq(b, b.l.media.tracks ? cast.framework.N.Pk(b.l.media.tracks) : void 0, b.l.activeTrackIds);
        });
        Az(this, Dz, function () {
            b.displayMetadata(b.l.metadata);
        });
        Az(this, Xy, function () {
            b.l.media
                && aq(b, cast.framework.N.xc(b.l.media), b.l.supportedMediaCommands);
        });
        Az(this, Ny, function () {
            Qp(b.j, Ez[b.l.state] || 'IDLE');
        });
        Az(this, Fz, function () {
            const c = b.j;
            const d = b.l.secondaryImageUrl;
            if (c.j) {
                const e = c.j;
                e.J.style.backgroundImage = d ? cast.receiver.C.aa.Va(d) : '';
                e.A.classList.toggle('has-secondary-image', !!d);
            }
            c.B.classList.toggle('has-secondary-image-audio', !!d);
        });
        Az(this, Qy, function () {
            const c = b.j;
            const d = b.l.isPlayingBreak;
            let e = c.A;
            let f;
            for (f in e.o) J(e.o[f].element, !d);
            Ci(e);
            e = c.G;
            J(e.o, !d);
            J(e.l, !d);
            J(e.B, d);
            e = c.H;
            e.o = d;
            J(e, d);
            e.o && zg(e);
            e = c.l;
            e.R.classList.toggle('break', d);
            e.Z = d;
            ym(e);
            J(e.I, tm(e));
            e.o.classList.toggle('live', tm(e));
            c.D.fd();
        });
        Az(this, Gz, function () {
            b.j.G.B.textContent = b.l.breakTitle || '';
        });
        Az(this, Hz, function () {
            if (!b.l.isLive) {
                const c = mz(b.D);
                xm(b.j.l, c);
            }
        });
        Az(this, Ry, function () {
            const c = b.j.l;
            c.fa = b.l.isLive;
            J(c.I, tm(c));
            c.o.classList.toggle('live', tm(c));
        });
        Az(this, Fy, function () {
            b.l.media && aq(b, cast.framework.N.xc(b.l.media), b.l.supportedMediaCommands);
        });
        Az(this, Iz, function () {
            b.j.l.I.classList.toggle('live-edge',
                b.l.isAtLiveEdge);
        });
        Az(this, Jz, function () {
            const c = b.j;
            const d = c.H;
            const e = b.l.whenSkippable;
            void 0 === e ? (Uf(d.j, !1), J(d.j, !1), J(d.l, !1)) : e > 0 ? (Uf(d.j, !1), J(d.j, !1), J(d.l, !0), d.L.textContent = cast.receiver.Y.Jj(cast.receiver.C.aa.Ua(e, !0))) : (Uf(d.j, !0), J(d.j, !0), J(d.l, !1));
            c.D.fd();
        });
        Az(this, Kz, function () {
            if (b.l.applicationData) {
                let c = b.l.applicationData;
                let d = c.name;
                const e = c.iconUrl;
                b.ba = d;
                const f = b.j;
                Gp(f.G, d, e);
                So(f.o, e);
                f.j && qf(f.j, d, e);
                d = b.j;
                c = !!c.isRemoteControl;
                d.B.classList.toggle('remote-controls', !!c);
                d.D.wi(c);
                d = d.A;
                d.I = c;
                Ci(d);
                b.displayMetadata(b.l.metadata);
            }
        });
        Az(this, Lz, function () {
            Ag(b.j.H, b.l.currentBreakClipNumber, b.l.numberBreakClips);
        });
        Az(this, Mz, function () {
            Ag(b.j.H, b.l.currentBreakClipNumber, b.l.numberBreakClips);
        });
        this.Z.addEventListener('APPLICATION_CHANGED', function (c) {
            let d; let
                e = nh();
            c.playbackType === 3 && e.majorVersion === 1 && e.minorVersion < 44 ? d = '' : d = c.deviceName || '';
            e = b.j.A;
            e.A && ui(e.A, d, !0);
            d = b.j;
            c = c.playbackType === 5;
            d.j && d.j.A.classList.toggle('bluetooth', !!c);
            d = d.A;
            d.classList.toggle('bluetooth', !!c);
            J(d.H.element, c);
        });
    };
    Az = function (a, b, c) {
        a.V.addEventListener(b, c);
        c();
    };
    Zp = function (a, b, c) {
        return a.l.isLive ? !!a.l.liveSeekableRange : c ? !!(b & 2) && !isNaN(c.duration) && Infinity !== c.duration && c.duration > 0 : !1;
    };
    Oz = function (a) {
        eq.call(this, a, new Vx('__physical_remote__'));
    };
    Pz = function () {
        this.j = new cast.receiver.C.Cl(function (a) {
            return new Nz(a);
        }, function (a) {
            return new cast.framework.C.an(a);
        });
    };
    Qz = function () {
        this.j = document.querySelector('cast-media-player');
        this.l = document.querySelector('touch-controls');
    };
    Rz = function () { };
    _.aa = [];
    fa = typeof Object.defineProperties === 'function' ? Object.defineProperty : function (a, b, c) {
        if (a == Array.prototype || a == Object.prototype) return a;
        a[b] = c.value;
        return a;
    };
    ea = da(this);
    p('Symbol', function (a) {
        function b(f) {
            if (this instanceof b) throw new TypeError('Symbol is not a constructor');
            return new c(`${d + (f || '')}_${e++}`, f);
        }

        function c(f, g) {
            this.j = f;
            fa(this, 'description', {
                configurable: !0,
                writable: !0,
                value: g,
            });
        }
        if (a) return a;
        c.prototype.toString = function () {
            return this.j;
        };
        var d = `jscomp_symbol_${1E9 * Math.random() >>> 0}_`;
        var e = 0;
        return b;
    });
    p('Symbol.iterator', function (a) {
        if (a) return a;
        a = Symbol('Symbol.iterator');
        for (let b = 'Array Int8Array Uint8Array Uint8ClampedArray Int16Array Uint16Array Int32Array Uint32Array Float32Array Float64Array'.split(' '), c = 0; c < b.length; c++) {
            const d = ea[b[c]];
            typeof d === 'function' && typeof d.prototype[a] !== 'function' && fa(d.prototype, a, {
                configurable: !0,
                writable: !0,
                value() {
                    return ha(ca(this));
                },
            });
        }
        return a;
    });
    const Sz = typeof Object.assign === 'function' ? Object.assign : function (a, b) {
        for (let c = 1; c < arguments.length; c++) {
            const d = arguments[c];
            if (d) { for (const e in d) ka(d, e) && (a[e] = d[e]); }
        }
        return a;
    };
    p('Object.assign', function (a) {
        return a || Sz;
    });
    var la = typeof Object.create === 'function' ? Object.create : function (a) {
        function b() { }
        b.prototype = a;
        return new b();
    };
    const Tz = function () {
        function a() {
            function c() { }
            new c();
            Reflect.construct(c, [], function () { });
            return new c() instanceof c;
        }
        if (typeof Reflect !== 'undefined' && Reflect.construct) {
            if (a()) return Reflect.construct;
            const b = Reflect.construct;
            return function (c, d, e) {
                c = b(c, d);
                e && Reflect.setPrototypeOf(c, e.prototype);
                return c;
            };
        }
        return function (c, d, e) {
            void 0 === e && (e = c);
            e = la(e.prototype || Object.prototype);
            return Function.prototype.apply.call(c,
                e, d) || e;
        };
    }();
    let Uz;
    if (typeof Object.setPrototypeOf === 'function') Uz = Object.setPrototypeOf;
    else {
        let Vz;
        a: {
            const Wz = {
                a: !0,
            };
            const Xz = {};
            try {
                Xz.__proto__ = Wz;
                Vz = Xz.a;
                break a;
            } catch (a) { }
            Vz = !1;
        }
        Uz = Vz ? function (a, b) {
            a.__proto__ = b;
            if (a.__proto__ !== b) throw new TypeError(`${a} is not extensible`);
            return a;
        } : null;
    }
    var ma = Uz;
    na.prototype.D = function (a) {
        this.B = a;
    };
    na.prototype.return = function (a) {
        this.o = {
            return: a,
        };
        this.j = this.F;
    };
    p('Reflect', function (a) {
        return a || {};
    });
    p('Reflect.construct', function () {
        return Tz;
    });
    p('Reflect.setPrototypeOf', function (a) {
        return a || (ma ? function (b, c) {
            try {
                return ma(b, c), !0;
            } catch (d) {
                return !1;
            }
        } : null);
    });
    p('Promise', function (a) {
        function b(g) {
            this.j = 0;
            this.o = void 0;
            this.l = [];
            this.F = !1;
            const k = this.A();
            try {
                g(k.resolve, k.reject);
            } catch (l) {
                k.reject(l);
            }
        }

        function c() {
            this.j = null;
        }

        function d(g) {
            return g instanceof b ? g : new b(function (k) {
                k(g);
            });
        }
        if (a) return a;
        c.prototype.l = function (g) {
            if (this.j == null) {
                this.j = [];
                const k = this;
                this.o(function () {
                    k.B();
                });
            }
            this.j.push(g);
        };
        const e = ea.setTimeout;
        c.prototype.o = function (g) {
            e(g, 0);
        };
        c.prototype.B = function () {
            for (; this.j && this.j.length;) {
                const g = this.j;
                this.j = [];
                for (let k = 0; k < g.length; ++k) {
                    const l = g[k];
                    g[k] = null;
                    try {
                        l();
                    } catch (m) {
                        this.A(m);
                    }
                }
            }
            this.j = null;
        };
        c.prototype.A = function (g) {
            this.o(function () {
                throw g;
            });
        };
        b.prototype.A = function () {
            function g(m) {
                return function (n) {
                    l || (l = !0, m.call(k, n));
                };
            }
            var k = this;
            var l = !1;
            return {
                resolve: g(this.L),
                reject: g(this.B),
            };
        };
        b.prototype.L = function (g) {
            if (g === this) this.B(new TypeError('A Promise cannot resolve to itself'));
            else if (g instanceof b) this.R(g);
            else {
                switch (typeof g) {
                    case 'object':
                        var k = g != null;
                        break;
                    case 'function':
                        k = !0;
                        break;
                    default:
                        k = !1;
                }
                k ? this.J(g) : this.D(g);
            }
        };
        b.prototype.J = function (g) {
            let k = void 0;
            try {
                k = g.then;
            } catch (l) {
                this.B(l);
                return;
            }
            typeof k === 'function' ? this.T(k, g) : this.D(g);
        };
        b.prototype.B = function (g) {
            this.H(2, g);
        };
        b.prototype.D = function (g) {
            this.H(1, g);
        };
        b.prototype.H = function (g, k) {
            if (this.j != 0) throw Error(`Cannot settle(${g}, ${k}): Promise already settled in state${this.j}`);
            this.j = g;
            this.o = k;
            this.j === 2 && this.O();
            this.G();
        };
        b.prototype.O = function () {
            const g = this;
            e(function () {
                if (g.I()) {
                    const k = ea.console;
                    typeof k !== 'undefined' && k.error(g.o);
                }
            }, 1);
        };
        b.prototype.I = function () {
            if (this.F) return !1;
            let g = ea.CustomEvent;
            const k = ea.Event;
            const l = ea.dispatchEvent;
            if (typeof l === 'undefined') return !0;
            typeof g === 'function' ? g = new g('unhandledrejection', {
                cancelable: !0,
            }) : typeof k === 'function' ? g = new k('unhandledrejection', {
                cancelable: !0,
            }) : (g = ea.document.createEvent('CustomEvent'), g.initCustomEvent('unhandledrejection', !1, !0, g));
            g.promise = this;
            g.reason = this.o;
            return l(g);
        };
        b.prototype.G = function () {
            if (this.l != null) {
                for (let g = 0; g < this.l.length; ++g) f.l(this.l[g]);
                this.l = null;
            }
        };
        var f = new c();
        b.prototype.R = function (g) {
            const k = this.A();
            g.Ce(k.resolve, k.reject);
        };
        b.prototype.T = function (g, k) {
            const l = this.A();
            try {
                g.call(k, l.resolve, l.reject);
            } catch (m) {
                l.reject(m);
            }
        };
        b.prototype.then = function (g, k) {
            function l(v, x) {
                return typeof v === 'function' ? function (C) {
                    try {
                        m(v(C));
                    } catch (E) {
                        n(E);
                    }
                } : x;
            }
            let m; let n; const
                t = new b(function (v, x) {
                    m = v;
                    n = x;
                });
            this.Ce(l(g, m), l(k, n));
            return t;
        };
        b.prototype.catch = function (g) {
            return this.then(void 0, g);
        };
        b.prototype.Ce = function (g, k) {
            function l() {
                switch (m.j) {
                    case 1:
                        g(m.o);
                        break;
                    case 2:
                        k(m.o);
                        break;
                    default:
                        throw Error(`Unexpected state: ${m.j}`);
                }
            }
            var m = this;
            this.l == null ? f.l(l) : this.l.push(l);
            this.F = !0;
        };
        b.resolve = d;
        b.reject = function (g) {
            return new b(function (k, l) {
                l(g);
            });
        };
        b.race = function (g) {
            return new b(function (k, l) {
                for (let m = _.q(g), n = m.next(); !n.done; n = m.next()) d(n.value).Ce(k, l);
            });
        };
        b.all = function (g) {
            const k = _.q(g);
            let l = k.next();
            return l.done ? d([]) : new b(function (m, n) {
                function t(C) {
                    return function (E) {
                        v[C] = E;
                        x--;
                        x == 0 && m(v);
                    };
                }
                var v = [];
                var x = 0;
                do v.push(void 0), x++, d(l.value).Ce(t(v.length - 1), n), l = k.next();
                while (!l.done);
            });
        };
        return b;
    });
    p('WeakMap', function (a) {
        function b(l) {
            this.j = (k += Math.random() + 1).toString();
            if (l) {
                l = _.q(l);
                for (var m; !(m = l.next()).done;) m = m.value, this.set(m[0], m[1]);
            }
        }

        function c() { }

        function d(l) {
            const m = typeof l;
            return m === 'object' && l !== null || m === 'function';
        }

        function e(l) {
            if (!ka(l, g)) {
                const m = new c();
                fa(l, g, {
                    value: m,
                });
            }
        }

        function f(l) {
            const m = Object[l];
            m && (Object[l] = function (n) {
                if (n instanceof c) return n;
                Object.isExtensible(n) && e(n);
                return m(n);
            });
        }
        if (function () {
            if (!a || !Object.seal) return !1;
            try {
                const l = Object.seal({});
                const m = Object.seal({});
                const n = new a([
                    [l, 2],
                    [m, 3],
                ]);
                if (n.get(l) != 2 || n.get(m) != 3) return !1;
                n.delete(l);
                n.set(m, 4);
                return !n.has(l) && n.get(m) == 4;
            } catch (t) {
                return !1;
            }
        }()) return a;
        var g = `$jscomp_hidden_${Math.random()}`;
        f('freeze');
        f('preventExtensions');
        f('seal');
        var k = 0;
        b.prototype.set = function (l, m) {
            if (!d(l)) throw Error('Invalid WeakMap key');
            e(l);
            if (!ka(l, g)) throw Error(`WeakMap key fail: ${l}`);
            l[g][this.j] = m;
            return this;
        };
        b.prototype.get = function (l) {
            return d(l) && ka(l, g) ? l[g][this.j] : void 0;
        };
        b.prototype.has = function (l) {
            return d(l) && ka(l,
                g) && ka(l[g], this.j);
        };
        b.prototype.delete = function (l) {
            return d(l) && ka(l, g) && ka(l[g], this.j) ? delete l[g][this.j] : !1;
        };
        return b;
    });
    p('Map', function (a) {
        function b() {
            const k = {};
            return k.Xb = k.next = k.head = k;
        }

        function c(k, l) {
            let m = k.j;
            return ha(function () {
                if (m) {
                    for (; m.head != k.j;) m = m.Xb;
                    for (; m.next != m.head;) {
                        return m = m.next, {
                            done: !1,
                            value: l(m),
                        };
                    }
                    m = null;
                }
                return {
                    done: !0,
                    value: void 0,
                };
            });
        }

        function d(k, l) {
            let m = l && typeof l;
            m == 'object' || m == 'function' ? f.has(l) ? m = f.get(l) : (m = `${++g}`, f.set(l, m)) : m = `p_${l}`;
            const n = k.l[m];
            if (n && ka(k.l, m)) {
                for (k = 0; k < n.length; k++) {
                    const t = n[k];
                    if (l !== l && t.key !== t.key || l === t.key) {
                        return {
                            id: m,
                            list: n,
                            index: k,
                            entry: t,
                        };
                    }
                }
            }
            return {
                id: m,
                list: n,
                index: -1,
                entry: void 0,
            };
        }

        function e(k) {
            this.l = {};
            this.j = b();
            this.size = 0;
            if (k) {
                k = _.q(k);
                for (var l; !(l = k.next()).done;) l = l.value, this.set(l[0], l[1]);
            }
        }
        if (function () {
            if (!a || typeof a !== 'function' || !a.prototype.entries || typeof Object.seal !== 'function') return !1;
            try {
                const k = Object.seal({
                    x: 4,
                });
                const l = new a(_.q([
                    [k, 's'],
                ]));
                if (l.get(k) != 's' || l.size != 1 || l.get({
                    x: 4,
                }) || l.set({
                    x: 4,
                }, 't') != l || l.size != 2) return !1;
                const m = l.entries();
                let n = m.next();
                if (n.done || n.value[0] != k || n.value[1] != 's') return !1;
                n = m.next();
                return n.done || n.value[0].x
                    != 4 || n.value[1] != 't' || !m.next().done ? !1 : !0;
            } catch (t) {
                return !1;
            }
        }()) return a;
        var f = new WeakMap();
        e.prototype.set = function (k, l) {
            k = k === 0 ? 0 : k;
            const m = d(this, k);
            m.list || (m.list = this.l[m.id] = []);
            m.entry ? m.entry.value = l : (m.entry = {
                next: this.j,
                Xb: this.j.Xb,
                head: this.j,
                key: k,
                value: l,
            }, m.list.push(m.entry), this.j.Xb.next = m.entry, this.j.Xb = m.entry, this.size++);
            return this;
        };
        e.prototype.delete = function (k) {
            k = d(this, k);
            return k.entry && k.list ? (k.list.splice(k.index, 1), k.list.length || delete this.l[k.id], k.entry.Xb.next = k.entry.next, k.entry.next.Xb = k.entry.Xb, k.entry.head = null, this.size--, !0) : !1;
        };
        e.prototype.clear = function () {
            this.l = {};
            this.j = this.j.Xb = b();
            this.size = 0;
        };
        e.prototype.has = function (k) {
            return !!d(this, k).entry;
        };
        e.prototype.get = function (k) {
            return (k = d(this, k).entry) && k.value;
        };
        e.prototype.entries = function () {
            return c(this, function (k) {
                return [k.key, k.value];
            });
        };
        e.prototype.keys = function () {
            return c(this, function (k) {
                return k.key;
            });
        };
        e.prototype.values = function () {
            return c(this, function (k) {
                return k.value;
            });
        };
        e.prototype.forEach = function (k, l) {
            for (var m = this.entries(), n; !(n = m.next()).done;) n = n.value, k.call(l, n[1], n[0], this);
        };
        e.prototype[Symbol.iterator] = e.prototype.entries;
        var g = 0;
        return e;
    });
    p('String.prototype.endsWith', function (a) {
        return a || function (b, c) {
            const d = za(this, b, 'endsWith');
            b += '';
            void 0 === c && (c = d.length);
            c = Math.max(0, Math.min(c | 0, d.length));
            for (var e = b.length; e > 0 && c > 0;) { if (d[--c] != b[--e]) return !1; }
            return e <= 0;
        };
    });
    p('Array.prototype.find', function (a) {
        return a || function (b, c) {
            return Aa(this, b, c).Mf;
        };
    });
    p('Array.prototype.entries', function (a) {
        return a || function () {
            return Ba(this, function (b, c) {
                return [b, c];
            });
        };
    });
    p('Array.prototype.keys', function (a) {
        return a || function () {
            return Ba(this, function (b) {
                return b;
            });
        };
    });
    p('String.prototype.startsWith', function (a) {
        return a || function (b, c) {
            const d = za(this, b, 'startsWith');
            b += '';
            const e = d.length;
            const f = b.length;
            c = Math.max(0, Math.min(c | 0, d.length));
            for (var g = 0; g < f && c < e;) { if (d[c++] != b[g++]) return !1; }
            return g >= f;
        };
    });
    p('Number.isFinite', function (a) {
        return a || function (b) {
            return typeof b !== 'number' ? !1 : !isNaN(b) && Infinity !== b && -Infinity !== b;
        };
    });
    p('Object.is', function (a) {
        return a || function (b, c) {
            return b === c ? b !== 0 || 1 / b === 1 / c : b !== b && c !== c;
        };
    });
    p('Array.prototype.includes', function (a) {
        return a || function (b, c) {
            let d = this;
            d instanceof String && (d = String(d));
            const e = d.length;
            c = c || 0;
            for (c < 0 && (c = Math.max(c + e, 0)); c < e; c++) {
                const f = d[c];
                if (f === b || Object.is(f, b)) return !0;
            }
            return !1;
        };
    });
    p('String.prototype.includes', function (a) {
        return a || function (b, c) {
            return za(this, b, 'includes').indexOf(b, c || 0) !== -1;
        };
    });
    p('Object.setPrototypeOf', function (a) {
        return a || ma;
    });
    p('Math.sign', function (a) {
        return a || function (b) {
            b = Number(b);
            return b === 0 || isNaN(b) ? b : b > 0 ? 1 : -1;
        };
    });
    p('Number.isNaN', function (a) {
        return a || function (b) {
            return typeof b === 'number' && isNaN(b);
        };
    });
    p('Number.isInteger', function (a) {
        return a || function (b) {
            return Number.isFinite(b) ? b === Math.floor(b) : !1;
        };
    });
    p('Object.values', function (a) {
        return a || function (b) {
            const c = [];
            let d;
            for (d in b) ka(b, d) && c.push(b[d]);
            return c;
        };
    });
    p('Array.from', function (a) {
        return a || function (b, c, d) {
            c = c != null ? c : function (k) {
                return k;
            };
            const e = [];
            let f = typeof Symbol !== 'undefined' && Symbol.iterator && b[Symbol.iterator];
            if (typeof f === 'function') {
                b = f.call(b);
                for (var g = 0; !(f = b.next()).done;) e.push(c.call(d, f.value, g++));
            } else { for (f = b.length, g = 0; g < f; g++) e.push(c.call(d, b[g], g)); }
            return e;
        };
    });
    p('Set', function (a) {
        function b(c) {
            this.j = new Map();
            if (c) {
                c = _.q(c);
                for (var d; !(d = c.next()).done;) this.add(d.value);
            }
            this.size = this.j.size;
        }
        if (function () {
            if (!a || typeof a !== 'function' || !a.prototype.entries || typeof Object.seal !== 'function') return !1;
            try {
                const c = Object.seal({
                    x: 4,
                });
                const d = new a(_.q([c]));
                if (!d.has(c) || d.size != 1 || d.add(c) != d || d.size != 1 || d.add({
                    x: 4,
                }) != d || d.size != 2) return !1;
                const e = d.entries();
                let f = e.next();
                if (f.done || f.value[0] != c || f.value[1] != c) return !1;
                f = e.next();
                return f.done || f.value[0] == c || f.value[0].x != 4
                    || f.value[1] != f.value[0] ? !1 : e.next().done;
            } catch (g) {
                return !1;
            }
        }()) return a;
        b.prototype.add = function (c) {
            c = c === 0 ? 0 : c;
            this.j.set(c, c);
            this.size = this.j.size;
            return this;
        };
        b.prototype.delete = function (c) {
            c = this.j.delete(c);
            this.size = this.j.size;
            return c;
        };
        b.prototype.clear = function () {
            this.j.clear();
            this.size = 0;
        };
        b.prototype.has = function (c) {
            return this.j.has(c);
        };
        b.prototype.entries = function () {
            return this.j.entries();
        };
        b.prototype.values = function () {
            return this.j.values();
        };
        b.prototype.keys = b.prototype.values;
        b.prototype[Symbol.iterator] = b.prototype.values;
        b.prototype.forEach = function (c, d) {
            const e = this;
            this.j.forEach(function (f) {
                return c.call(d, f, f, e);
            });
        };
        return b;
    });
    p('Array.prototype.values', function (a) {
        return a || function () {
            return Ba(this, function (b, c) {
                return c;
            });
        };
    });
    p('Array.prototype.fill', function (a) {
        return a || function (b, c, d) {
            const e = this.length || 0;
            c < 0 && (c = Math.max(0, e + c));
            if (d == null || d > e) d = e;
            d = Number(d);
            d < 0 && (d = Math.max(0, e + d));
            for (c = Number(c || 0); c < d; c++) this[c] = b;
            return this;
        };
    });
    p('Int8Array.prototype.fill', Ca);
    p('Uint8Array.prototype.fill', Ca);
    p('Uint8ClampedArray.prototype.fill', Ca);
    p('Int16Array.prototype.fill', Ca);
    p('Uint16Array.prototype.fill', Ca);
    p('Int32Array.prototype.fill', Ca);
    p('Uint32Array.prototype.fill', Ca);
    p('Float32Array.prototype.fill', Ca);
    p('Float64Array.prototype.fill', Ca);
    p('Array.prototype.findIndex', function (a) {
        return a || function (b, c) {
            return Aa(this, b, c).Yj;
        };
    });
    p('Math.trunc', function (a) {
        return a || function (b) {
            b = Number(b);
            if (isNaN(b) || Infinity === b || -Infinity === b || b === 0) return b;
            const c = Math.floor(Math.abs(b));
            return b < 0 ? -c : c;
        };
    });
    p('Object.entries', function (a) {
        return a || function (b) {
            const c = [];
            let d;
            for (d in b) ka(b, d) && c.push([d, b[d]]);
            return c;
        };
    });
    Lq = Lq || {};
    _.u = this || self;
    Ia = `closure_uid_${1E9 * Math.random() >>> 0}`;
    Ja = 0;
    _.u.cast = _.u.cast || {};
    cast = _.u.cast;
    cast.ag = !1;
    cast.platform = {};
    cast.platform.metrics = {};
    cast.platform.metrics.logBoolToUma = function (a, b) {
        Sa() && cast.__platform__.metrics.logBoolToUma(a, b);
    };
    cast.platform.metrics.logEventToUma = function (a) {
        Sa() && cast.__platform__.metrics.logEventToUma(a);
    };
    cast.platform.metrics.logHistogramValueToUma = function (a, b, c, d, e) {
        Sa() && cast.__platform__.metrics.logHistogramValueToUma(a, b, c, d, e);
    };
    cast.platform.metrics.logIntToUma = function (a, b) {
        Sa() && cast.__platform__.metrics.logIntToUma(a, b);
    };
    cast.platform.metrics.tx = Sa;
    cast.platform.metrics.setMplVersion = function (a) {
        Sa() && cast.__platform__.metrics.setMplVersion(a);
    };
    cast.receiver = {};
    cast.receiver.analytics = {};
    const Yz = cast.platform.metrics.logEventToUma;
    _.w('cast.receiver.analytics.logEvent', Yz);
    const Zz = cast.platform.metrics.logBoolToUma;
    _.w('cast.receiver.analytics.logBool', Zz);
    const $z = cast.platform.metrics.logIntToUma;
    _.w('cast.receiver.analytics.logInt', $z);
    const aA = cast.platform.metrics.logHistogramValueToUma;
    _.w('cast.receiver.analytics.logHistogramValue', aA);
    cast.receiver.analytics.K = {
        Lq: 'Cast.V2.Version',
        Nq: 'Cast.Receiver.VersionCode',
        Hl: 'Cast.Receiver.disableRemoteControlOptimizedUi',
        Jo: 'Cast.Receiver.MultipleSendersConnected',
        xn: 'Cast.Receiver.Message.LOAD',
        vn: 'Cast.Receiver.Message.GET_STATUS',
        An: 'Cast.Receiver.Message.PAUSE',
        Vn: 'Cast.Receiver.Message.STOP',
        Un: 'Cast.Receiver.Message.SKIP_AD',
        Bn: 'Cast.Receiver.Message.PLAY',
        Cn: 'Cast.Receiver.Message.PLAY_AGAIN',
        Qn: 'Cast.Receiver.Message.SEEK',
        Sn: 'Cast.Receiver.Message.SET_PLAYBACK_RATE',
        Tn: 'Cast.Receiver.Message.SET_VOLUME',
        un: 'Cast.Receiver.Message.EDIT_TRACKS_INFO',
        tn: 'Cast.Receiver.Message.EDIT_AUDIO_TRACKS',
        En: 'Cast.Receiver.Message.PRELOAD',
        pn: 'Cast.Receiver.Message.CANCEL_PRELOAD',
        Dn: 'Cast.Receiver.Message.PRECACHE',
        Jn: 'Cast.Receiver.Message.QUEUE_LOAD',
        In: 'Cast.Receiver.Message.QUEUE_INSERT',
        Pn: 'Cast.Receiver.Message.QUEUE_UPDATE',
        Mn: 'Cast.Receiver.Message.QUEUE_REMOVE',
        Nn: 'Cast.Receiver.Message.QUEUE_REORDER',
        Kn: 'Cast.Receiver.Message.QUEUE_NEXT',
        Ln: 'Cast.Receiver.Message.QUEUE_PREV',
        Hn: 'Cast.Receiver.Message.QUEUE_GET_ITEM_RANGE',
        Fn: 'Cast.Receiver.Message.QUEUE_GET_ITEMS',
        Gn: 'Cast.Receiver.Message.QUEUE_GET_ITEM_IDS',
        On: 'Cast.Receiver.Message.QUEUE_SHUFFLE',
        zn: 'Cast.Receiver.Message.MEDIA_USER_ACTION',
        Rn: 'Cast.Receiver.Message.SET_CREDENTIALS',
        yn: 'Cast.Receiver.Message.LOAD_BY_ENTITY',
        Xn: 'Cast.Receiver.Message.USER_ACTION',
        rn: 'Cast.Receiver.Message.DISPLAY_STATUS',
        qn: 'Cast.Receiver.Message.CUSTOM_COMMAND',
        Wn: 'Cast.Receiver.Message.UNKNOWN',
        Vo: 'Cast.Receiver.OutMessage.MEDIA_STATUS',
        Po: 'Cast.Receiver.OutMessage.CLOUD_STATUS',
        Wo: 'Cast.Receiver.OutMessage.QUEUE_CHANGE',
        Xo: 'Cast.Receiver.OutMessage.QUEUE_ITEMS',
        Yo: 'Cast.Receiver.OutMessage.QUEUE_ITEM_IDS',
        Ro: 'Cast.Receiver.OutMessage.INVALID_PLAYER_STATE',
        Uo: 'Cast.Receiver.OutMessage.LOAD_FAILED',
        To: 'Cast.Receiver.OutMessage.LOAD_CANCELLED',
        So: 'Cast.Receiver.OutMessage.INVALID_REQUEST',
        Qo: 'Cast.Receiver.OutMessage.ERROR',
        Zo: 'Cast.Receiver.OutMessage.UNKNOWN',
        vl: 'Cast.Receiver.CACResponse',
    };
    cast.receiver.analytics.lx = Zz;
    cast.receiver.analytics.mx = Yz;
    cast.receiver.analytics.nx = aA;
    cast.receiver.analytics.ox = $z;
    cast.receiver.C = {};
    cast.receiver.C.kl = function (a) {
        a.innerHTML = "<style>.audio-player-glanceable{width:100vw;height:100vh;position:relative;display:flex;align-items:center;justify-content:center;overflow:hidden}.bg-image,.scrim{position:absolute;width:100%;height:100%}.bg-image{background:#000 center / cover no-repeat;background-image:url('//www.gstatic.com/cast/sdk/assets/touch_no_image_1024_600.jpg');transform:scale(1.25);transform-origin:center;filter:blur(37px)}@media (min-width: 1200px){.bg-image{filter:blur(50px);background-image:url('//www.gstatic.com/cast/sdk/assets/touch_no_image_1280_800.jpg')}}.scrim{background:rgba(0,0,0,0.7)}.secondary-image{display:none}.playback-logo{background-image:var(--playback-logo-image);background-position-x:left;background-repeat:no-repeat;background-size:contain;color:#fff;font-family:'Roboto',Arial,sans-serif;font-weight:500;order:-2;overflow:hidden;font-size:36px;height:40px;line-height:40px}.playback-logo.app-icon{height:68px}.overlay{top:0;left:0;position:absolute;box-sizing:border-box;width:100%;padding:0 var(--cast-controls-horizontal-padding);display:flex;justify-content:space-between;flex-direction:row;height:396px;padding-top:44px}@media (min-width: 1200px){.overlay{height:532px;padding-top:112px}}.metadataPlaceHolder{display:flex;flex-direction:column;justify-content:center;margin-top:0;height:100%;margin-right:5%;min-width:0}.image-placeholder{flex:none;display:flex;flex-direction:column}.secondary-image{flex:none;background-size:contain;background-repeat:no-repeat;background-position:top right;width:200px;height:50px;margin-bottom:56px;align-self:end}.album-art{display:none}.image-loader{display:block;align-self:flex-end;background-size:contain;background-position:top right;background-repeat:no-repeat;height:352px;width:352px}@media (min-width: 1200px){.image-loader{height:420px;width:420px}}.album{font-weight:500;margin-top:auto;text-transform:uppercase;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;color:#dfe1e5;font-size:24px;letter-spacing:1.2px;line-height:24px}.title{display:-webkit-box;-webkit-line-clamp:2;-webkit-box-orient:vertical;overflow:hidden;color:#fff;font-weight:normal;margin-top:18px;font-size:56px;line-height:76px;word-break:break-word}@media (min-width: 1200px){.title{margin-top:32px;font-size:68px;line-height:80px}}.artist{margin-bottom:auto;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;font-weight:normal;color:#dfe1e5;font-size:28px;letter-spacing:1.4px;line-height:30px;margin-top:14px}@media (min-width: 1200px){.artist{font-size:32px;letter-spacing:1.6px;line-height:40px;margin-top:24px}}.has-secondary-image .image-loader{height:246px;width:246px}@media (min-width: 1200px){.has-secondary-image .image-loader{height:314px;width:314px}}.has-secondary-image .secondary-image{display:block}.bluetooth .playback-logo{background-image:none;color:#dfe1e5;display:flex;align-items:center;font-weight:normal;height:50px;font-size:24px}@media (min-width: 1200px){.bluetooth .playback-logo{height:50px;font-size:32px}}.bluetooth .playback-logo:before{display:block;content:'';background:url(\"data:image/svg+xml,%3Csvg%20viewBox=%270%200%2024%2024%27%20version=%271.1%27%20xmlns=%27http://www.w3.org/2000/svg%27%3E%0A%20%20%20%20%3Cg%20stroke=%27none%27%20stroke-width=%271%27%20fill=%27none%27%20fill-rule=%27evenodd%27%3E%0A%20%20%20%20%20%20%20%20%3Cpath%20d=%27M17.71%2C7.71%20L12%2C2%20L11%2C2%20L11%2C9.59%20L6.41%2C5%20L5%2C6.41%20L10.59%2C12%20L5%2C17.59%20L6.41%2C19%20L11%2C14.41%20L11%2C22%20L12%2C22%20L17.71%2C16.29%20L13.41%2C12%20L17.71%2C7.71%20Z%20M13%2C5.83%20L14.88%2C7.71%20L13%2C9.59%20L13%2C5.83%20Z%20M14.88%2C16.29%20L13%2C18.17%20L13%2C14.41%20L14.88%2C16.29%20Z%27%20id=%27Shape%27%20fill=%27%23dfe1e5%27%20fill-rule=%27nonzero%27%3E%3C/path%3E%0A%20%20%20%20%3C/g%3E%0A%3C/svg%3E%0A\") left center no-repeat;padding-right:20px;height:28px;width:28px;background-size:28px}@media (min-width: 1200px){.bluetooth .playback-logo:before{padding-right:20px;height:48px;width:48px;background-size:48px}}.bluetooth .image-loader{display:none}.bluetooth .album-art{opacity:.2;display:block;flex:none;background-image:url(\"data:image/svg+xml,%3Csvg%20viewBox=%270%200%2024%2024%27%20version=%271.1%27%20xmlns=%27http://www.w3.org/2000/svg%27%3E%0A%20%20%20%20%3Cg%20stroke=%27none%27%20stroke-width=%271%27%20fill=%27none%27%20fill-rule=%27evenodd%27%3E%0A%20%20%20%20%20%20%20%20%3Cpath%20d=%27M17.71%2C7.71%20L12%2C2%20L11%2C2%20L11%2C9.59%20L6.41%2C5%20L5%2C6.41%20L10.59%2C12%20L5%2C17.59%20L6.41%2C19%20L11%2C14.41%20L11%2C22%20L12%2C22%20L17.71%2C16.29%20L13.41%2C12%20L17.71%2C7.71%20Z%20M13%2C5.83%20L14.88%2C7.71%20L13%2C9.59%20L13%2C5.83%20Z%20M14.88%2C16.29%20L13%2C18.17%20L13%2C14.41%20L14.88%2C16.29%20Z%27%20id=%27Shape%27%20fill=%27%23000%27%20fill-rule=%27nonzero%27%3E%3C/path%3E%0A%20%20%20%20%3C/g%3E%0A%3C/svg%3E%0A\") !important;height:269px;width:269px}@media (min-width: 1200px){.bluetooth .album-art{height:353px;width:353px}}.bluetooth .bg-image{background-image:url('//www.gstatic.com/cast/sdk/assets/touch_no_image_1024_600.jpg') !important}@media (min-width: 1200px){.bluetooth .bg-image{background-image:url('//www.gstatic.com/cast/sdk/assets/touch_no_image_1280_800.jpg') !important}}.media-browse .overlay{padding-top:44px;height:var(--cast-controls-safe-area-height)}@media (min-width: 1200px){.media-browse .overlay{padding-top:112px}}.media-browse .metadataPlaceHolder{justify-content:initial}@media (max-width: 1199px){.media-browse .title{line-height:64px}}@media (min-width: 1200px){.media-browse .title{margin-top:24px}}@media (max-width: 1199px){.media-browse .album{margin-top:18px}}@media (max-width: 1199px){.media-browse .album{margin-top:38px;font-size:20px;line-height:20px}}@media (min-width: 1200px){.media-browse .album{margin-top:40px}}.media-browse .image-loader{height:269px;width:269px}@media (min-width: 1200px){.media-browse .image-loader{height:353px;width:353px}}.media-browse.has-secondary-image .image-loader{height:190px;width:190px}@media (min-width: 1200px){.media-browse.has-secondary-image .image-loader{height:250px;width:250px}}</style><div class=audio-player-glanceable id=audio-player-glanceable><div class=bg-image id=bg-image></div><div class=scrim></div><div class=overlay><div class=metadataPlaceHolder><div class=playback-logo id=logo></div><div class=album id=album></div><div class=title id=title></div><div class=artist id=artist></div></div><div class=image-placeholder><div class=secondary-image id=secondary-image></div><div class=album-art id=album-art></div><image-loader class=image-loader id=image-loader></image-loader><div class=audio-status-indicators><div class=\"repeat-status queue-status-icon\" id=repeat-status></div><div class=\"shuffle-status queue-status-icon\" id=shuffle-status></div></div></div></div></div>";
    };
    _.Qa(Ta, Error);
    Ta.prototype.name = 'CustomError';
    _.Qa(Ua, Ta);
    Ua.prototype.name = 'AssertionError';
    let ab; let
        bA;
    ab = Array.prototype.indexOf ? function (a, b) {
        return Array.prototype.indexOf.call(a, b, void 0);
    } : function (a, b) {
        if (typeof a === 'string') return typeof b !== 'string' || b.length != 1 ? -1 : a.indexOf(b, 0);
        for (let c = 0; c < a.length; c++) { if (c in a && a[c] === b) return c; }
        return -1;
    };
    bA = Array.prototype.lastIndexOf ? function (a, b) {
        return Array.prototype.lastIndexOf.call(a, b, a.length - 1);
    } : function (a, b) {
        let c = a.length - 1;
        c < 0 && (c = Math.max(0, a.length + c));
        if (typeof a === 'string') return typeof b !== 'string' || b.length != 1 ? -1 : a.lastIndexOf(b, c);
        for (; c >= 0; c--) { if (c in a && a[c] === b) return c; }
        return -1;
    };
    _.cA = Array.prototype.forEach ? function (a, b) {
        Array.prototype.forEach.call(a, b, void 0);
    } : function (a, b) {
        for (let c = a.length, d = typeof a === 'string' ? a.split('') : a, e = 0; e < c; e++) e in d && b.call(void 0, d[e], e, a);
    };
    _.dA = Array.prototype.filter ? function (a, b) {
        return Array.prototype.filter.call(a, b, void 0);
    } : function (a, b) {
        for (var c = a.length, d = [], e = 0, f = typeof a === 'string' ? a.split('') : a, g = 0; g < c; g++) {
            if (g in f) {
                const k = f[g];
                b.call(void 0, k, g, a) && (d[e++] = k);
            }
        } return d;
    };
    _.eA = Array.prototype.map ? function (a, b) {
        return Array.prototype.map.call(a, b, void 0);
    } : function (a, b) {
        for (var c = a.length, d = Array(c), e = typeof a === 'string' ? a.split('') : a, f = 0; f < c; f++) f in e && (d[f] = b.call(void 0, e[f], f, a));
        return d;
    };
    _.fA = Array.prototype.reduce ? function (a, b, c) {
        return Array.prototype.reduce.call(a, b, c);
    } : function (a, b, c) {
        let d = c;
        (0, _.cA)(a, function (e, f) {
            d = b.call(void 0, d, e, f, a);
        });
        return d;
    };
    _.gA = Array.prototype.some ? function (a, b) {
        return Array.prototype.some.call(a, b, void 0);
    } : function (a, b) {
        for (let c = a.length, d = typeof a === 'string' ? a.split('') : a, e = 0; e < c; e++) { if (e in d && b.call(void 0, d[e], e, a)) return !0; }
        return !1;
    };
    _.hA = Array.prototype.every ? function (a, b) {
        return Array.prototype.every.call(a, b, void 0);
    } : function (a, b) {
        for (let c = a.length, d = typeof a === 'string' ? a.split('') : a, e = 0; e < c; e++) { if (e in d && !b.call(void 0, d[e], e, a)) return !1; }
        return !0;
    };
    var sb = 'constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf'.split(' ');
    let wb;
    Ab.prototype.Ub = !0;
    Ab.prototype.vb = function () {
        return this.j;
    };
    Ab.prototype.toString = function () {
        return `Const{${this.j}}`;
    };
    var zb = {};
    var yb = {};
    var Db = {};
    Eb.prototype.toString = function () {
        return this.j.toString();
    };
    Eb.prototype.vb = function () {
        return this.j.toString();
    };
    Hb.prototype.toString = function () {
        return `${this.j}`;
    };
    Hb.prototype.Ub = !0;
    Hb.prototype.vb = function () {
        return this.j.toString();
    };
    var Fb = {};
    let fc; let hc; let ic; let jc; let kc; let lc; let
        ec;
    _.Pb = String.prototype.trim ? function (a) {
        return a.trim();
    } : function (a) {
        return /^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(a)[1];
    };
    fc = /&/g;
    hc = /</g;
    ic = />/g;
    jc = /"/g;
    kc = /'/g;
    lc = /\x00/g;
    ec = /[\x00&<>"']/;
    _.Tb.prototype.toString = function () {
        return this.j.toString();
    };
    _.Tb.prototype.Ub = !0;
    _.Tb.prototype.vb = function () {
        return this.j.toString();
    };
    _.Sb = {};
    _.iA = new _.Tb('about:invalid#zClosurez', _.Sb);
    var Vb = {};
    Wb.prototype.vb = function () {
        return this.j;
    };
    Wb.prototype.toString = function () {
        return this.j.toString();
    };
    var bc = {};
    cc.prototype.vb = function () {
        return this.j.toString();
    };
    cc.prototype.toString = function () {
        return this.j.toString();
    };
    const jA = new cc(_.u.trustedTypes && _.u.trustedTypes.emptyHTML || '', bc);
    var oc = {
        MATH: !0,
        SCRIPT: !0,
        STYLE: !0,
        SVG: !0,
        TEMPLATE: !0,
    };
    var pc = _.Za(function () {
        if (typeof document === 'undefined') return !1;
        const a = document.createElement('div');
        let b = document.createElement('div');
        b.appendChild(document.createElement('div'));
        a.appendChild(b);
        if (!a.firstChild) return !1;
        b = a.firstChild.firstChild;
        a.innerHTML = _.dc(jA);
        return !b.parentElement;
    });
    cast.receiver.C.ll = function (a) {
        qc(a, _.Cb('<style>.audio-player-glanceable{width:100vw;height:100vh;position:relative;display:flex;align-items:center;justify-content:center;overflow:hidden}.bg-image,.scrim{position:absolute;width:100%;height:100%}.bg-image{background:#000 center / cover no-repeat;background-image:var(--album-art-image, url(\'//www.gstatic.com/cast/sdk/assets/touch_no_image_1024_600.jpg\'))}.scrim{background:rgba(0,0,0,0.75)}.overlay{top:0;left:0;position:absolute;box-sizing:border-box;width:100%;display:flex;justify-content:space-between;flex-direction:row;padding-top:2.34375vw;padding-left:5.625vw;padding-right:5.625vw}.playback-logo{background-image:var(--playback-logo-image);background-position-x:left;background-repeat:no-repeat;background-size:contain;color:#fff;font-family:\'Roboto\',Arial,sans-serif;font-weight:500;order:-2;overflow:hidden}.playback-logo{font-size:2.5vw;height:3.75vw;line-height:3.75vw}.playback-logo.app-icon{height:5.625vw}.title,.album,.artist{display:none}.album-art{align-self:flex-end;background-size:contain;background-position:top right;background-repeat:no-repeat;width:25vw;height:25vw;box-shadow:0 .9375vw .9375vw rgba(0,0,0,0.5)}.image-loader{display:none}.metadataPlaceHolder{display:flex;flex-direction:column;justify-content:center;margin-top:0;height:100%;width:100%;margin-right:6.25vw;min-width:0}.image-placeholder{flex:none;display:flex;flex-direction:column}.secondary-image{display:none}.secondary-image{flex:none;background-size:contain;background-repeat:no-repeat;background-position:top right;width:280px;height:60px;margin-bottom:56px;align-self:end}.has-secondary-image .secondary-image{display:block}.audio-status-indicators{flex-direction:row;display:flex;justify-content:flex-end;height:1.875vw;margin-top:1.71875vw}.queue-status-icon{width:24px;height:24px;margin-left:20px}.shuffle-status{background-image:url("data:image/svg+xml,%3Csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20viewBox=%270%200%2048%2048%27%3E%0A%20%20%3Cpath%0A%20%20%20%20%20%20d=%27M37%2C11H29.5a1.5%2C1.5%2C0%2C0%2C1%2C0-3h9A1.5%2C1.5%2C0%2C0%2C1%2C40%2C9.5v9a1.5%2C1.5%2C0%2C0%2C1-3%2C0Z%27%0A%20%20%20%20%20%20fill=%27%23fff%27/%3E%0A%20%20%3Cpath%0A%20%20%20%20%20%20d=%27M8.44%2C10.56a1.5%2C1.5%2C0%2C0%2C1%2C2.12-2.12l27%2C27a1.5%2C1.5%2C0%2C0%2C1-2.12%2C2.12Z%27%0A%20%20%20%20%20%20fill=%27%23fff%27/%3E%0A%20%20%3Cpath%0A%20%20%20%20%20%20d=%27M35.44%2C10.44a1.5%2C1.5%2C0%2C0%2C1%2C2.12%2C2.12l-27%2C27a1.5%2C1.5%2C0%2C0%2C1-2.12-2.12Z%27%0A%20%20%20%20%20%20fill=%27%23fff%27/%3E%0A%20%20%3Cpath%0A%20%20%20%20%20%20d=%27M37%2C37V29.5a1.5%2C1.5%2C0%2C0%2C1%2C3%2C0v9A1.5%2C1.5%2C0%2C0%2C1%2C38.5%2C40h-9a1.5%2C1.5%2C0%2C0%2C1%2C0-3Z%27%0A%20%20%20%20%20%20fill=%27%23fff%27/%3E%0A%3C/svg%3E%0A")}.repeat-status{display:none}.repeat-status[data-state=\'REPEAT_SINGLE\']{background-image:url("data:image/svg+xml,%3Csvg%20viewBox=%270%200%2048%2048%27%20version=%271.1%27%20xmlns=%27http://www.w3.org/2000/svg%27%3E%0A%20%20%3Cpath%0A%20%20%20%20%20%20d=%27M39%2C32H33.5a1.5%2C1.5%2C0%2C0%2C1%2C0-3h9A1.5%2C1.5%2C0%2C0%2C1%2C44%2C30.5h0v9a1.5%2C1.5%2C0%2C0%2C1-3%2C0v-5A20%2C20%2C0%2C0%2C1%2C5.27%2C31a1.5%2C1.5%2C0%2C1%2C1%2C2.8-1A17%2C17%2C0%2C0%2C0%2C39%2C32ZM9%2C16h5.5a1.5%2C1.5%2C0%2C0%2C1%2C0%2C3h-9A1.5%2C1.5%2C0%2C0%2C1%2C4%2C17.5v-9a1.5%2C1.5%2C0%2C0%2C1%2C3%2C0v5A20%2C20%2C0%2C0%2C1%2C42.73%2C17a1.5%2C1.5%2C0%2C0%2C1-2.8%2C1A17%2C17%2C0%2C0%2C0%2C9%2C16Z%27%0A%20%20%20%20%20%20fill=%27%23fff%27/%3E%0A%20%20%3Cpolygon%20fill=%27%23fff%27%20fill-rule=%27nonzero%27%0A%20%20%20%20%20%20points=%2723.8%2029.92%2023.8%2021.25%2021.8%2022.07%2020.87%2019.89%2024.28%2018.29%2026.28%2018.29%2026.28%2029.92%27%3E%3C/polygon%3E%0A%3C/svg%3E%0A");display:block}.repeat-status[data-state=\'REPEAT_ALL\']{background-image:url("data:image/svg+xml,%3Csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20viewBox=%270%200%2048%2048%27%3E%0A%20%20%3Cpath%0A%20%20%20%20%20%20d=%27M39%2C32H33.5a1.5%2C1.5%2C0%2C0%2C1%2C0-3h9A1.5%2C1.5%2C0%2C0%2C1%2C44%2C30.5h0v9a1.5%2C1.5%2C0%2C0%2C1-3%2C0v-5A20%2C20%2C0%2C0%2C1%2C5.27%2C31a1.5%2C1.5%2C0%2C1%2C1%2C2.8-1A17%2C17%2C0%2C0%2C0%2C39%2C32ZM9%2C16h5.5a1.5%2C1.5%2C0%2C0%2C1%2C0%2C3h-9A1.5%2C1.5%2C0%2C0%2C1%2C4%2C17.5v-9a1.5%2C1.5%2C0%2C0%2C1%2C3%2C0v5A20%2C20%2C0%2C0%2C1%2C42.73%2C17a1.5%2C1.5%2C0%2C0%2C1-2.8%2C1A17%2C17%2C0%2C0%2C0%2C9%2C16Z%27%0A%20%20%20%20%20%20fill=%27%23fff%27/%3E%0A%3C/svg%3E%0A");display:block}</style><div class=audio-player-glanceable id=audio-player-glanceable><div class=bg-image id=bg-image></div><div class=scrim></div><div class=overlay><div class=metadataPlaceHolder><div class=playback-logo id=logo></div><div class=album id=album></div><div class=title id=title></div><div class=artist id=artist></div></div><div class=image-placeholder><div class=secondary-image id=secondary-image></div><div class=album-art id=album-art></div><image-loader class=image-loader id=image-loader></image-loader><div class=audio-status-indicators><div class="repeat-status queue-status-icon" id=repeat-status></div><div class="shuffle-status queue-status-icon" id=shuffle-status></div></div></div></div></div>'));
    };
    _.z.prototype.H = !1;
    _.z.prototype.Wa = function () {
        return this.H;
    };
    _.z.prototype.ea = function () {
        this.H || (this.H = !0, this.ka());
    };
    _.z.prototype.ka = function () {
        if (this.F) { for (; this.F.length;) this.F.shift()(); }
    };
    _.A.prototype.l = function () {
        this.defaultPrevented = !0;
    };
    const kA = Object.freeze || function (a) {
        return a;
    };
    var Uc = function () {
        if (!_.u.addEventListener || !Object.defineProperty) return !1;
        let a = !1;
        const b = Object.defineProperty({}, 'passive', {
            get() {
                a = !0;
            },
        });
        try {
            _.u.addEventListener('test', function () { }, b), _.u.removeEventListener('test', function () { }, b);
        } catch (c) { }
        return a;
    }();
    tc[' '] = function () { };
    let lA; let mA; let Ac; let
        oA;
    lA = _.y('Opera');
    _.Gq = _.y('Trident') || _.y('MSIE');
    mA = _.y('Edge');
    Ac = _.y('Gecko') && !(_.Ob(_.Xb(), 'WebKit') && !_.y('Edge')) && !(_.y('Trident') || _.y('MSIE')) && !_.y('Edge');
    _.nA = _.Ob(_.Xb(), 'WebKit') && !_.y('Edge');
    a: {
        let pA = '';
        const qA = function () {
            const a = _.Xb();
            if (Ac) return /rv:([^\);]+)(\)|;)/.exec(a);
            if (mA) return /Edge\/([\d\.]+)/.exec(a);
            if (_.Gq) return /\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(a);
            if (_.nA) return /WebKit\/(\S+)/.exec(a);
            if (lA) return /(?:Version)[ \/]?(\S+)/.exec(a);
        }(); qA && (pA = qA ? qA[1] : '');
        if (_.Gq) {
            const rA = xc();
            if (rA != null && rA > parseFloat(pA)) {
                oA = String(rA);
                break a;
            }
        }
        oA = pA;
    }
    var yc = oA;
    var vc = {};
    let sA;
    if (_.u.document && _.Gq) {
        const tA = xc();
        sA = tA || parseInt(yc, 10) || void 0;
    } else sA = void 0;
    _.uA = sA;
    _.Qa(Cc, _.A);
    var Bc = kA({
        2: 'touch',
        3: 'pen',
        4: 'mouse',
    });
    Cc.prototype.l = function () {
        Cc.yb.l.call(this);
        const a = this.o;
        a.preventDefault ? a.preventDefault() : a.returnValue = !1;
    };
    var Dc = `closure_listenable_${1E6 * Math.random() | 0}`;
    var Fc = 0;
    Ic.prototype.add = function (a, b, c, d, e) {
        const f = a.toString();
        a = this.listeners[f];
        a || (a = this.listeners[f] = [], this.j++);
        const g = Kc(a, b, d, e); g > -1 ? (b = a[g], c || (b.Be = !1)) : (b = new Gc(b, this.src, f, !!d, e), b.Be = c, a.push(b));
        return b;
    };
    Ic.prototype.remove = function (a, b, c, d) {
        a = a.toString();
        if (!(a in this.listeners)) return !1;
        const e = this.listeners[a];
        b = Kc(e, b, c, d);
        return b > -1 ? (Hc(e[b]), _.cb(e, b), e.length == 0 && (delete this.listeners[a], this.j--), !0) : !1;
    };
    Ic.prototype.Ud = function (a, b, c, d) {
        a = this.listeners[a.toString()];
        let e = -1;
        a && (e = Kc(a, b, c, d));
        return e > -1 ? a[e] : null;
    };
    var Sc = `closure_lm_${1E6 * Math.random() | 0}`;
    var $c = {};
    var Wc = 0;
    var ad = `__closure_events_fn_${1E9 * Math.random() >>> 0}`;
    _.Qa(_.bd, _.z);
    _.bd.prototype[Dc] = !0;
    _.h = _.bd.prototype;
    _.h.Gf = function (a) {
        this.I = a;
    };
    _.h.addEventListener = function (a, b, c, d) {
        _.Nc(this, a, b, c, d);
    };
    _.h.removeEventListener = function (a, b, c, d) {
        Yc(this, a, b, c, d);
    };
    _.h.dispatchEvent = function (a) {
        let b; let
            c = this.I;
        if (c) { for (b = []; c; c = c.I) b.push(c); }
        c = this.ia;
        const d = a.type || a;
        if (typeof a === 'string') a = new _.A(a, c);
        else if (a instanceof _.A) a.target = a.target || c;
        else {
            var e = a;
            a = new _.A(d, c);
            _.tb(a, e);
        }
        e = !0;
        if (b) {
            for (var f = b.length - 1; f >= 0; f--) {
                var g = a.j = b[f];
                e = cd(g, d, !0, a) && e;
            }
        }
        g = a.j = c;
        e = cd(g, d, !0, a) && e;
        e = cd(g, d, !1, a) && e;
        if (b) { for (f = 0; f < b.length; f++) g = a.j = b[f], e = cd(g, d, !1, a) && e; }
        return e;
    };
    _.h.ka = function () {
        _.bd.yb.ka.call(this);
        if (this.D) {
            const a = this.D;
            let b = 0;
            let c;
            for (c in a.listeners) {
                for (let d = a.listeners[c], e = 0; e < d.length; e++) ++b, Hc(d[e]);
                delete a.listeners[c];
                a.j--;
            }
        }
        this.I = null;
    };
    _.h.listen = function (a, b, c, d) {
        return this.D.add(String(a), b, !1, c, d);
    };
    _.h.listenOnce = function (a, b, c, d) {
        return this.D.add(String(a), b, !0, c, d);
    };
    _.h.unlisten = function (a, b, c, d) {
        return this.D.remove(String(a), b, c, d);
    };
    _.h.Ud = function (a, b, c, d) {
        return this.D.Ud(String(a), b, c, d);
    };
    dd.prototype.toString = function () {
        return this.name;
    };
    var fd = new dd('OFF', Infinity);
    var Mx = new dd('SHOUT', 1200);
    var rd = new dd('SEVERE', 1E3);
    var sd = new dd('WARNING', 900);
    var td = new dd('INFO', 800);
    var kd = new dd('CONFIG', 700);
    var ud = new dd('FINE', 500);
    var Ak = new dd('FINER', 400);
    const vA = [fd, Mx, rd, sd, td, kd, ud, Ak, new dd('FINEST', 300), new dd('ALL', 0)];
    let wA = null;
    let pd;
    ed.prototype.clear = function () { };
    gd.prototype.reset = function (a, b, c, d) {
        this.o = d || _.Pa();
        this.A = a;
        this.B = b;
        this.l = c;
        this.j = void 0;
    };
    let nd;
    wd.prototype.get = function () {
        if (this.l > 0) {
            this.l--;
            var a = this.j;
            this.j = a.next;
            a.next = null;
        } else a = this.o();
        return a;
    };
    _.xA = _.Gq || _.nA;
    var zd = String.prototype.repeat ? function (a, b) {
        return a.repeat(b);
    } : function (a, b) {
        return Array(b + 1).join(a);
    };
    let Pd;
    Hd.prototype.add = function (a, b) {
        const c = Qd.get();
        c.set(a, b);
        this.l ? this.l.next = c : this.j = c;
        this.l = c;
    };
    Hd.prototype.remove = function () {
        let a = null;
        this.j && (a = this.j, this.j = this.j.next, this.j || (this.l = null), a.next = null);
        return a;
    };
    var Qd = new wd(function () {
        return new Id();
    }, function (a) {
        return a.reset();
    });
    Id.prototype.set = function (a, b) {
        this.j = a;
        this.scope = b;
        this.next = null;
    };
    Id.prototype.reset = function () {
        this.next = this.scope = this.j = null;
    };
    let Jd; var Ld = !1;
    var Md = new Hd();
    Vd.prototype.reset = function () {
        this.context = this.onRejected = this.o = this.j = null;
        this.l = !1;
    };
    var Wd = new wd(function () {
        return new Vd();
    }, function (a) {
        a.reset();
    });
    Ud.prototype.then = function (a, b, c) {
        return ge(this, typeof a === 'function' ? a : null, typeof b === 'function' ? b : null, c);
    };
    Ud.prototype.$goog_Thenable = !0;
    Ud.prototype.cancel = function (a) {
        if (this.j == 0) {
            const b = new Td(a);
            Nd(function () {
                ie(this, b);
            }, this);
        }
    };
    Ud.prototype.G = function (a) {
        this.j = 0;
        Rd(this, 2, a);
    };
    Ud.prototype.I = function (a) {
        this.j = 0;
        Rd(this, 3, a);
    };
    Ud.prototype.H = function () {
        for (var a; a = je(this);) ke(this, a, this.j, this.F);
        this.D = !1;
    };
    var pe = Gd;
    _.Qa(Td, Ta);
    Td.prototype.name = 'cancel';
    _.Qa(se, _.bd);
    _.h = se.prototype;
    _.h.nb = null;
    _.h.Zb = null;
    _.h.Yc = void 0;
    _.h.yg = !1;
    _.h.ae = 0;
    _.h.Sc = null;
    _.h.ha = _.B('goog.net.WebSocket');
    _.h.open = function (a, b) {
        this.Sc != null && _.u.clearTimeout(this.Sc);
        this.Sc = null;
        this.Zb = a;
        (this.Yc = b) ? (_.G(this.ha, `Opening the WebSocket on ${this.Zb} with protocol ${this.Yc}`), this.nb = new WebSocket(this.Zb, this.Yc)) : (_.G(this.ha, `Opening the WebSocket on ${this.Zb}`), this.nb = new WebSocket(this.Zb));
        this.nb.binaryType = this.A;
        this.nb.onopen = (0, _.Na)(this.Yt, this);
        this.nb.onclose = (0, _.Na)(this.Ht, this);
        this.nb.onmessage = (0, _.Na)(this.nm, this);
        this.nb.onerror = (0, _.Na)(this.mm, this);
    };
    _.h.close = function () {
        this.Sc != null && _.u.clearTimeout(this.Sc);
        this.Sc = null;
        this.nb && (_.G(this.ha, 'Closing the WebSocket.'), this.yg = !0, this.nb.close(), this.nb = null);
    };
    _.h.send = function (a) {
        this.nb.send(a);
    };
    _.h.Yt = function () {
        _.G(this.ha, `WebSocket opened on ${this.Zb}`);
        this.dispatchEvent('d');
        this.ae = 0;
        this.j = this.l(this.ae);
    };
    _.h.Ht = function (a) {
        _.G(this.ha, `The WebSocket on ${this.Zb} closed.`);
        this.dispatchEvent(new te(a.code, a.reason, a.wasClean));
        this.nb = null;
        this.yg ? (_.G(this.ha, 'The WebSocket closed normally.'), this.Zb = null, this.Yc = void 0) : (_.D(this.ha, `The WebSocket disconnected unexpectedly: ${a.data}`), this.o && (_.G(this.ha, `Seconds until next reconnect attempt: ${Math.floor(this.j / 1E3)}`), this.Sc = _.qe((0, _.Na)(this.open, this, this.Zb, this.Yc), this.j, this), this.ae++, this.j = this.l(this.ae)));
        this.yg = !1;
    };
    _.h.nm = function (a) {
        this.dispatchEvent(new ue(a.data));
    };
    _.h.mm = function (a) {
        a = a.data;
        _.D(this.ha, `An error occurred: ${a}`);
        this.dispatchEvent(new ve(a));
    };
    _.h.ka = function () {
        se.yb.ka.call(this);
        this.close();
    };
    _.Qa(te, _.A);
    _.Qa(ue, _.A);
    _.Qa(ve, _.A);
    cast.receiver.platform = {};
    cast.receiver.platform.ji = {
        'port-for-web-server': '8008',
    };
    cast.receiver.platform.Wj = function () {
        return !(!cast.__platform__ || !cast.__platform__.canDisplayType);
    };
    cast.receiver.platform.canDisplayType = function (a) {
        return cast.__platform__.canDisplayType(a);
    };
    cast.receiver.platform.setTouchInputSupport = function (a) {
        return cast.__platform__ && typeof cast.__platform__.setTouchInputSupport === 'function' ? cast.__platform__.setTouchInputSupport(a) : Promise.reject();
    };
    cast.receiver.platform.getAccessibilitySettings = function () {
        return cast.__platform__ && cast.__platform__.accessibility && cast.__platform__.accessibility.getAccessibilitySettings ? cast.__platform__.accessibility.getAccessibilitySettings() : Promise.resolve({
            isScreenReaderEnabled: !1,
            isColorInversionEnabled: !1,
        });
    };
    cast.__platform__ && cast.__platform__.canDisplayType || delete window.cast.receiver.platform.canDisplayType;
    cast.receiver.platform.Ra = function (a) {
        if (cast.__platform__ && cast.__platform__.queryPlatformValue) return cast.__platform__.queryPlatformValue(a);
        if (a in cast.receiver.platform.ji) return cast.receiver.platform.ji[a];
    };
    cast.receiver.platform.getHdcpVersion = function () {
        return cast.__platform__ && cast.__platform__.display && cast.__platform__.display.getHdcpVersion ? cast.__platform__.display.getHdcpVersion() : Promise.reject(Error('getHdcpVersion is not available'));
    };
    _.h = we.prototype;
    _.h.open = function () {
        this.j ? _.D(yA, 'PlatformChannel Already open') : cast.__platform__.channel.open((0, _.Na)(this.rm, this), (0, _.Na)(this.qm, this));
    };
    _.h.close = function () {
        this.j ? cast.__platform__.channel.close((0, _.Na)(this.om, this)) : _.D(yA, 'PlatformChannel Cannot close unopened channel');
    };
    _.h.send = function (a) {
        cast.__platform__.channel.send(a);
    };
    _.h.rm = function (a) {
        this.j = a;
        xe(this, a ? 'd' : 'b');
    };
    _.h.om = function () {
        this.j && (this.j = !1, xe(this, 'a'));
    };
    _.h.qm = function (a) {
        xe(this, new ue(a));
    };
    _.h.addEventListener = function (a, b) {
        this.l.listen(a, b);
    };
    _.h.removeEventListener = function (a, b) {
        this.l.unlisten(a, b);
    };
    var yA = _.B('cast.receiver.platform.WebSocket');
    ye.prototype.reset = function () {
        this.j = null;
    };
    Ea(ye);
    cast.receiver.Kb = ye;
    cast.receiver.C.cm = function (a) {
        qc(a, _.Cb('<style>@-webkit-keyframes flashing{0%{background-color:#80868b}50%{background-color:#5f6368}100%{background-color:#80868b}}:host{display:block;position:relative}.image{background-size:contain;background-position:top right;background-repeat:no-repeat;width:100%;height:100%;overflow:hidden}.loading-animation{position:absolute;top:0;left:0;will-change:opacity;height:100%;width:100%;animation:flashing 1.3s infinite linear;animation-play-state:paused;transition:opacity 350ms cubic-bezier(.33, 0, .67, 1);opacity:0}.loading-animation.start-animation{opacity:1;animation-play-state:running}</style><div class=image id=image></div><div class=loading-animation id=loading-animation></div>'));
    };
    cast.receiver.C.Sa = {
        AUDIO: 'audio',
        VIDEO: 'video',
        PHOTO: 'photo',
    };
    cast.receiver.va = {};
    cast.receiver.va.Md = 'urn:x-cast:';
    cast.receiver.va.ye = `${cast.receiver.va.Md}com.google.cast.system`;
    cast.receiver.va.on = '1.0';
    cast.receiver.va.hb = 'SystemSender';
    const zA = RegExp('dv(he|av).[s|d|p][e|t|w][n|r|h|b][a|h]?[e|t|w]?');
    cast.receiver.media = {};
    cast.receiver.media.ob = `${cast.receiver.va.Md}com.google.cast.media`;
    const AA = {
        AUDIO: 'AUDIO',
        VIDEO: 'VIDEO',
        IMAGE: 'IMAGE',
    };
    const BA = {
        INVALID_PLAYER_STATE: 'INVALID_PLAYER_STATE',
        LOAD_FAILED: 'LOAD_FAILED',
        LOAD_CANCELLED: 'LOAD_CANCELLED',
        INVALID_REQUEST: 'INVALID_REQUEST',
        ERROR: 'ERROR',
    };
    _.w('cast.receiver.media.repeatMode', {
        REPEAT_OFF: 'REPEAT_OFF',
        REPEAT_ALL: 'REPEAT_ALL',
        REPEAT_SINGLE: 'REPEAT_SINGLE',
        REPEAT_ALL_AND_SHUFFLE: 'REPEAT_ALL_AND_SHUFFLE',
    });
    cast.receiver.media.bk = function (a) {
        return a == 'REPEAT_OFF' || a == 'REPEAT_ALL' || a == 'REPEAT_SINGLE' || a == 'REPEAT_ALL_AND_SHUFFLE';
    };
    cast.receiver.aa = {};
    cast.receiver.aa.getMediaCategory = function (a) {
        if (!a) return null;
        if (a.metadata) {
            switch (a.metadata.metadataType) {
                case 1:
                    return 'VIDEO';
                case 2:
                    return 'VIDEO';
                case 3:
                    return 'AUDIO';
                case 5:
                    return 'AUDIO';
                case 4:
                    return 'IMAGE';
            }
        }
        a = (a.contentType || '').toUpperCase().split('/')[0];
        return AA[a] ? AA[a] : null;
    };
    const CA = {
        Ql: ['BC', 'AD'],
        Pl: ['Before Christ', 'Anno Domini'],
        Mo: 'JFMAMJJASOND'.split(''),
        lq: 'JFMAMJJASOND'.split(''),
        co: 'January February March April May June July August September October November December'.split(' '),
        kq: 'January February March April May June July August September October November December'.split(' '),
        fq: 'Jan Feb Mar Apr May Jun Jul Aug Sep Oct Nov Dec'.split(' '),
        nq: 'Jan Feb Mar Apr May Jun Jul Aug Sep Oct Nov Dec'.split(' '),
        Sq: 'Sunday Monday Tuesday Wednesday Thursday Friday Saturday'.split(' '),
        qq: 'Sunday Monday Tuesday Wednesday Thursday Friday Saturday'.split(' '),
        hq: 'Sun Mon Tue Wed Thu Fri Sat'.split(' '),
        oq: 'Sun Mon Tue Wed Thu Fri Sat'.split(' '),
        nw: 'SMTWTFS'.split(''),
        mq: 'SMTWTFS'.split(''),
        gq: ['Q1', 'Q2', 'Q3', 'Q4'],
        tp: ['1st quarter', '2nd quarter', '3rd quarter', '4th quarter'],
        cl: ['AM', 'PM'],
        Uf: ['EEEE, MMMM d, y', 'MMMM d, y', 'MMM d, y', 'M/d/yy'],
        fj: ['h:mm:ss a zzzz', 'h:mm:ss a z', 'h:mm:ss a', 'h:mm a'],
        El: ["{1} 'at' {0}", "{1} 'at' {0}", '{1}, {0}', '{1}, {0}'],
        ni: 6,
        Tw: [5, 6],
        oi: 5,
    };
    var af = CA;
    af = CA;
    var ff = [/^'(?:[^']|'')*('|$)/, /^(?:G+|y+|Y+|M+|k+|S+|E+|a+|b+|B+|h+|K+|H+|c+|L+|Q+|d+|m+|s+|v+|V+|w+|z+|Z+)/, /^[^'GyYMkSEabBhKHcLQdmsvVwzZ]+/];
    cf.prototype.format = function (a, b) {
        if (!a) throw Error('The date to format must be non-null.');
        let c = b ? 6E4 * (a.getTimezoneOffset() - $e(b, a)) : 0;
        let d = c ? new Date(a.getTime() + c) : a;
        let e = d;
        b && d.getTimezoneOffset() != a.getTimezoneOffset() && (d = new Date(d.getTime() + 6E4 * (d.getTimezoneOffset() - a.getTimezoneOffset())), e = new Date(a.getTime() + (c + (c > 0 ? -864E5 : 864E5))));
        c = [];
        for (let f = 0; f < this.l.length; ++f) {
            const g = this.l[f].text;
            this.l[f].type == 1 ? c.push(kf(this, g, a, d, e, b)) : c.push(g);
        }
        return c.join('');
    };
    var ef = !1;
    cast.receiver.C.aa = {};
    cast.receiver.C.aa.Kg = function (a) {
        a = new Date(1E3 * a);
        return (new cf()).format(a);
    };
    cast.receiver.C.aa.Zj = function (a) {
        return !!a && void 0 !== a.currentBreakClipTime && void 0 !== a.breakClipId;
    };
    cast.receiver.C.aa.qd = function (a) {
        return typeof a === 'number' && isFinite(a) && !isNaN(a);
    };
    cast.receiver.C.aa.Ua = function (a, b) {
        if (!cast.receiver.C.aa.qd(a)) return '';
        const c = a < 0 ? '-' : '';
        a = Math.abs(a);
        a = (void 0 === b ? 0 : b) ? Math.ceil(a) : Math.floor(a);
        b = Math.floor(a / 3600);
        const d = Math.floor(a / 60) % 60;
        a %= 60;
        return b ? `${c}${String(b)}:${_.Ad(d, 2)}:${_.Ad(a, 2)}` : `${c}${String(d)}:${_.Ad(a, 2)}`;
    };
    cast.receiver.C.aa.Rd = function (a) {
        return new Promise(function (b, c) {
            if (a) {
                const d = new Image();
                d.src = a;
                d.decode().then(function () {
                    b(a);
                }, function () {
                    c(a);
                });
            } else c(a);
        });
    };
    cast.receiver.C.aa.Va = function (a) {
        return `url("${String(a).replace(/"/g, '\\"')}")`;
    };
    cast.receiver.C.aa.As = function (a) {
        if (a = a.mediaCategory || cast.receiver.aa.getMediaCategory(a)) {
            switch (a) {
                case 'AUDIO':
                    return cast.receiver.C.Sa.AUDIO;
                case 'IMAGE':
                    return cast.receiver.C.Sa.PHOTO;
            }
        }
        return cast.receiver.C.Sa.VIDEO;
    };
    lf.prototype = HTMLElement.prototype;
    lf.prototype.constructor = lf;
    Object.setPrototypeOf(lf, HTMLElement);
    _.r(mf, lf);
    window.customElements && window.customElements.define && (customElements.get('image-loader') || window.customElements.define('image-loader', mf));
    cast.receiver.C.jw = mf;
    _.r(of, lf);
    of.prototype.setTitle = function (a) {
        this.H.textContent = a;
    };
    window.customElements && window.customElements.define && (customElements.get('goog-audio-player-compatibility') || window.customElements.define('goog-audio-player-compatibility', of));
    cast.receiver.C.Dv = of;
    cast.receiver.VERSION = '2.0.0';
    cast.receiver.Ni = '0129';
    cast.receiver.vd = function (a, b) {
        a = a.toLowerCase();
        b = b.toLowerCase();
        return a.indexOf(b) == 0 || b.indexOf(a) == 0;
    };
    cast.receiver.C.ml = function (a) {
        a.innerHTML = '<div class=break-countdown id=break-countdown><span class=ad-label id=ad-label></span><span id=break-clip-index-text></span><span id=break-countdown-text></span></div><div class=break-skip id=break-skip-btn role=button><span class=skip-ad-text id=skip-ad-btn-text></span><img alt="" class=skip-ad-icon role=presentation src=""><div class=break-skip-scrim></div><div class=break-skip-highlight></div></div><div class="break-skip break-skip-btn-countdown" id=break-skip-btn-countdown><span class=skip-ad-text id=skip-ad-btn-countdown-text></span><div class=break-skip-scrim></div></div>';
    };
    var pi = {
        MUSIC_TRACK: 'MUSIC_TRACK',
        MUSIC_ALBUM: 'MUSIC_ALBUM',
        ARTIST: 'ARTIST',
        PLAYLIST: 'PLAYLIST',
        EPISODE: 'EPISODE',
        MOVIE: 'MOVIE',
        PHOTO: 'PHOTO',
        PODCAST: 'PODCAST',
        MUSIC_GENRE: 'MUSIC_GENRE',
        AUDIO_BOOK: 'AUDIO_BOOK',
        RADIO_STATION: 'RADIO_STATION',
        MUSIC_MIX: 'MUSIC_MIX',
        VIDEO: 'VIDEO',
        TV_SHOW: 'TV_SHOW',
        NEWS: 'NEWS',
    };
    var ni = {
        SQUARE_1_TO_1: 'SQUARE_1_TO_1',
        PORTRAIT_2_TO_3: 'PORTRAIT_2_TO_3',
        LANDSCAPE_16_TO_9: 'LANDSCAPE_16_TO_9',
    };
    var qi = {
        LIVE: 'LIVE',
    };
    const DA = {
        QUEUE_NEXT: 'queue-next',
        QUEUE_PREV: 'queue-prev',
        SEEK_FORWARD_10: 'seek-forward-10',
        SEEK_FORWARD_15: 'seek-forward-15',
        SEEK_FORWARD_30: 'seek-forward-30',
        SEEK_BACKWARD_10: 'seek-backward-10',
        SEEK_BACKWARD_15: 'seek-backward-15',
        SEEK_BACKWARD_30: 'seek-backward-30',
        CAPTIONS: 'captions',
        REPEAT: 'repeat',
        SHUFFLE: 'shuffle',
        LIKE: 'like',
        LIKE_HEART: 'like-heart',
        DISLIKE: 'dislike',
        LYRICS: 'lyrics',
        SLEEP_TIMER: 'sleep-timer',
        NO_BUTTON: 'no-button',
    };
    _.w('cast.receiver.ui.ControlsButton', DA);
    cast.receiver.C.U = DA;
    const EA = {
        SLOT_1: 'slot-1',
        SLOT_2: 'slot-2',
        SLOT_3: 'slot-3',
        SLOT_4: 'slot-4',
        SLOT_PRIMARY_1: 'slot-primary-1',
        SLOT_PRIMARY_2: 'slot-primary-2',
        SLOT_SECONDARY_1: 'slot-secondary-1',
        SLOT_SECONDARY_2: 'slot-secondary-2',
    };
    _.w('cast.receiver.ui.ControlsSlot', EA);
    cast.receiver.C.la = EA;
    const FA = {};
    var Mu = (FA['application/ttml+xml'] = 1, FA['text/vtt'] = 2, FA['text/mp4'] = 3, FA['audio/mp4'] = 4, FA['video/mp4'] = 5, FA['video/mp2t'] = 6, FA['audio/webm'] = 7, FA['video/webm'] = 8, FA['application/x-mpegurl'] = 9, FA['application/vnd.apple.mpegurl'] = 10, FA['application/dash+xml'] = 11, FA['application/vnd.ms-sstr+xml'] = 12, FA['text/cea608'] = 13, FA['video/ogg'] = 14, FA['audio/aac'] = 15, FA['audio/mp3'] = 16, FA['audio/ogg'] = 17, FA['audio/wav'] = 18, FA['image/gif'] = 19, FA['image/jpg'] = 20, FA['image/png'] = 21, FA['text/mp2t'] = 22, FA['application/mp4'] = 23, FA['audio/mpeg'] = 24, FA);
    const GA = {};
    var Cf = (GA.Oo = 0, GA['mp4a.a6'] = 1, GA['ec-3'] = 2, GA['mp4a.40.2'] = 3, GA['mp4a.40.5'] = 4, GA['mp4a.67'] = 5, GA['avc1.4D40'] = 6, GA['avc1.4D401E'] = 7, GA['mp4a.a5'] = 8, GA['ac-3'] = 9, GA.vorbis = 10, GA.opus = 11, GA.vp8 = 12, GA.vp9 = 13, GA.avc1 = 14, GA['mp4a.40'] = 15, GA.hev1 = 16, GA.dvhe = 17, GA.mhm1 = 18, GA['mp4a.6B'] = 19, GA['mp4a.69'] = 20, GA);
    cast.receiver.C.X = {};
    const HA = {};
    const IA = (HA.SQUARE_1_TO_1 = 1, HA.PORTRAIT_2_TO_3 = 2, HA.LANDSCAPE_16_TO_9 = 3, HA);
    const JA = {};
    const KA = (JA[cast.receiver.C.U.NO_BUTTON] = 1, JA[cast.receiver.C.U.QUEUE_NEXT] = 2, JA[cast.receiver.C.U.QUEUE_PREV] = 3, JA[cast.receiver.C.U.SEEK_FORWARD_10] = 4, JA[cast.receiver.C.U.SEEK_FORWARD_15] = 5, JA[cast.receiver.C.U.SEEK_FORWARD_30] = 6, JA[cast.receiver.C.U.SEEK_BACKWARD_10] = 7, JA[cast.receiver.C.U.SEEK_BACKWARD_15] = 8, JA[cast.receiver.C.U.SEEK_BACKWARD_30] = 9, JA[cast.receiver.C.U.CAPTIONS] = 10, JA[cast.receiver.C.U.REPEAT] = 11,
    JA[cast.receiver.C.U.SHUFFLE] = 12, JA[cast.receiver.C.U.LIKE] = 13, JA[cast.receiver.C.U.DISLIKE] = 14, JA.PLAY = 15, JA.PAUSE = 16, JA.SKIP_AD = 17, JA.STOP = 18, JA.SHOW_DEVICE_CONTROLLER = 19, JA.MINI_PLAYER_PLAY = 21, JA.MINI_PLAYER_PAUSE = 22, JA.MINI_PLAYER_ALBUM_ART = 23, JA[cast.receiver.C.U.SLEEP_TIMER] = 24, JA[cast.receiver.C.U.LIKE_HEART] = 25, JA[cast.receiver.C.U.LYRICS] = 26, JA);
    cast.receiver.C.X.xt = function (a) {
        K('Cast.Controls.MediaBrowseAspectRatio', IA[a.targetAspectRatio] || 0);
    };
    cast.receiver.C.X.ya = function (a) {
        K('Cast.Controls.ButtonClick', KA[a] || 0);
    };
    cast.receiver.C.X.ut = function (a, b) {
        K(`Cast.Controls.ButtonAssignedTo_${a}`, KA[b] || 0);
    };
    cast.receiver.C.X.zt = function (a) {
        K('Cast.Controls.ScrubberPositionChanged', parseInt(a, 10));
    };
    cast.receiver.C.X.Lb = {
        PLAY: 'PLAY',
        PAUSE: 'PAUSE',
        bo: 'MINI_PLAYER_PLAY',
        ao: 'MINI_PLAYER_PAUSE',
        Zn: 'MINI_PLAYER_ALBUM_ART',
        SKIP_AD: 'SKIP_AD',
        STOP: 'STOP',
        iq: 'SHOW_DEVICE_CONTROLLER',
    };
    cast.receiver.C.X.Xc = {
        Dq: 1,
        Bq: 2,
        Cq: 3,
        Fq: 4,
        Gq: 5,
        Eq: 6,
    };
    cast.receiver.C.X.K = {
        xl: 'Cast.Controls.ControlsType',
        Mw: 'Cast.Controls.setMediaElement',
        Yl: 'Cast.Controls.getSafeAreaHeight',
        Dp: 'Cast.Receiver.setScrubberVisibility',
        Bp: 'Cast.Receiver.setDcVisibility',
        Ev: 'Cast.Controls.ButtonClick',
        Jw: 'Cast.Controls.ScrubberPositionChanged',
        en: 'Cast.Controls.MediaBrowseContentSet',
        lw: 'Cast.Controls.MediaBrowseAspectRatio',
        fn: 'Cast.Controls.MediaBrowseItemSelected',
        jm: 'Cast.Controls.InPlayerCarouselScrolling',
        bn: 'Cast.Controls.LandingCarouselScrolling',
        gn: 'Cast.Controls.MediaBrowseLandingActive',
        hn: 'Cast.Controls.MediaBrowsePlayingActive',
        ue: 'Cast.Controls.MediaBrowseSuggestionSelected',
        kn: 'Cast.Controls.MediaBrowseSuggestionsBarShown',
        jn: 'Cast.Controls.MediaBrowseSuggestionsBarHidden',
    };
    _.r(Ff, _.bd);
    Ff.prototype.ea = function () {
        _.bd.prototype.ea.call(this);
        clearTimeout(this.l);
    };
    Ea(Ff);
    _.LA = _.y('Firefox') || _.y('FxiOS');
    !_.y('Android') || Yb();
    Yb();
    ac();
    var Mf = !_.Gq && !ac();
    var Qf = _.B('cast.receiver.ui.FocusService');
    Sf.prototype.focus = function (a) {
        this.l = a;
        a.focus();
    };
    Sf.prototype.isFocused = function (a) {
        return this.j.includes(a);
    };
    Ea(Sf);
    const MA = {
        Kv: {
            1E3: {
                other: '0K',
            },
            1E4: {
                other: '00K',
            },
            1E5: {
                other: '000K',
            },
            1E6: {
                other: '0M',
            },
            1E7: {
                other: '00M',
            },
            1E8: {
                other: '000M',
            },
            1E9: {
                other: '0B',
            },
            1E10: {
                other: '00B',
            },
            1E11: {
                other: '000B',
            },
            1E12: {
                other: '0T',
            },
            1E13: {
                other: '00T',
            },
            1E14: {
                other: '000T',
            },
        },
        Jv: {
            1E3: {
                other: '0 thousand',
            },
            1E4: {
                other: '00 thousand',
            },
            1E5: {
                other: '000 thousand',
            },
            1E6: {
                other: '0 million',
            },
            1E7: {
                other: '00 million',
            },
            1E8: {
                other: '000 million',
            },
            1E9: {
                other: '0 billion',
            },
            1E10: {
                other: '00 billion',
            },
            1E11: {
                other: '000 billion',
            },
            1E12: {
                other: '0 trillion',
            },
            1E13: {
                other: '00 trillion',
            },
            1E14: {
                other: '000 trillion',
            },
        },
    };
    var eg = MA;
    eg = MA;
    var bg = {
        AED: [2, 'dh', '\u062f.\u0625.'],
        ALL: [0, 'Lek', 'Lek'],
        AUD: [2, '$', 'AU$'],
        BDT: [2, '\u09f3', 'Tk'],
        BGN: [2, 'lev', 'lev'],
        BRL: [2, 'R$', 'R$'],
        CAD: [2, '$', 'C$'],
        CDF: [2, 'FrCD', 'CDF'],
        CHF: [2, 'CHF', 'CHF'],
        CLP: [0, '$', 'CL$'],
        CNY: [2, '\u00a5', 'RMB\u00a5'],
        COP: [32, '$', 'COL$'],
        CRC: [0, '\u20a1', 'CR\u20a1'],
        CZK: [50, 'K\u010d', 'K\u010d'],
        DKK: [50, 'kr.', 'kr.'],
        DOP: [2, 'RD$', 'RD$'],
        EGP: [2, '\u00a3', 'LE'],
        ETB: [2, 'Birr', 'Birr'],
        EUR: [2, '\u20ac', '\u20ac'],
        GBP: [2, '\u00a3', 'GB\u00a3'],
        HKD: [2, '$', 'HK$'],
        HRK: [2, 'kn', 'kn'],
        HUF: [34,
            'Ft', 'Ft',
        ],
        IDR: [0, 'Rp', 'Rp'],
        ILS: [34, '\u20aa', 'IL\u20aa'],
        INR: [2, '\u20b9', 'Rs'],
        IRR: [0, 'Rial', 'IRR'],
        ISK: [0, 'kr', 'kr'],
        JMD: [2, '$', 'JA$'],
        JPY: [0, '\u00a5', 'JP\u00a5'],
        KRW: [0, '\u20a9', 'KR\u20a9'],
        LKR: [2, 'Rs', 'SLRs'],
        LTL: [2, 'Lt', 'Lt'],
        MNT: [0, '\u20ae', 'MN\u20ae'],
        MVR: [2, 'Rf', 'MVR'],
        MXN: [2, '$', 'Mex$'],
        MYR: [2, 'RM', 'RM'],
        NOK: [50, 'kr', 'NOkr'],
        PAB: [2, 'B/.', 'B/.'],
        PEN: [2, 'S/.', 'S/.'],
        PHP: [2, '\u20b1', 'PHP'],
        PKR: [0, 'Rs', 'PKRs.'],
        PLN: [50, 'z\u0142', 'z\u0142'],
        RON: [2, 'RON', 'RON'],
        RSD: [0, 'din', 'RSD'],
        RUB: [50, '\u20bd',
            'RUB',
        ],
        SAR: [2, 'SAR', 'SAR'],
        SEK: [50, 'kr', 'kr'],
        SGD: [2, '$', 'S$'],
        THB: [2, '\u0e3f', 'THB'],
        TRY: [2, '\u20ba', 'TRY'],
        TWD: [2, '$', 'NT$'],
        TZS: [0, 'TSh', 'TSh'],
        UAH: [2, '\u0433\u0440\u043d.', 'UAH'],
        USD: [2, '$', 'US$'],
        UYU: [2, '$', '$U'],
        VND: [48, '\u20ab', 'VN\u20ab'],
        YER: [0, 'Rial', 'Rial'],
        ZAR: [2, 'R', 'ZAR'],
    };
    const NA = {
        Gl: '.',
        ri: ',',
        ap: '%',
        gj: '0',
        jp: '+',
        Oi: '-',
        Ul: 'E',
        bp: '\u2030',
        dm: '\u221e',
        Lo: 'NaN',
        Fl: '#,##0.###',
        Fw: '#E0',
        uw: '#,##0%',
        Mv: '\u00a4#,##0.00',
        ki: 'USD',
    };
    var Wf = NA;
    Wf = NA;
    Yf.prototype.format = function (a) {
        if (this.o > this.l) throw Error('Min value must be less than max value');
        if (isNaN(a)) return Wf.Lo;
        const b = [];
        const c = OA;
        a = Zf(a, -c.Nr);
        const d = a < 0 || a == 0 && 1 / a < 0;
        d ? c.ek ? b.push(c.ek) : (b.push(c.prefix), b.push(this.G)) : (b.push(c.prefix), b.push(this.L));
        if (isFinite(a)) {
            if (a *= d ? -1 : 1, a *= this.A, this.J) {
                let e = a;
                if (e == 0) $f(this, e, this.j, b), ag(this, 0, b);
                else {
                    let f = Math.floor(Math.log(e) / Math.log(10) + 2E-15);
                    e = Zf(e, -f);
                    let g = this.j;
                    this.F > 1 && this.F > this.j ? (g = f % this.F, g < 0 && (g = this.F + g), e = Zf(e,
                        g), f -= g, g = 1) : this.j < 1 ? (f++, e = Zf(e, -1)) : (f -= this.j - 1, e = Zf(e, this.j - 1));
                    $f(this, e, g, b);
                    ag(this, f, b);
                }
            } else $f(this, a, this.j, b);
        } else b.push(Wf.dm);
        d ? c.fk ? b.push(c.fk) : (isFinite(a) && b.push(c.Ik), b.push(this.I)) : (isFinite(a) && b.push(c.Ik), b.push(this.O));
        return b.join('');
    };
    var OA = {
        Nr: 0,
        ek: '',
        fk: '',
        prefix: '',
        Ik: '',
    };
    var mg = cg;
    mg = cg;
    var lg = dg;
    lg = dg;
    var fg = null;
    var gg = null;
    var hg = null;
    var og = RegExp("'([{}#].*?)'", 'g');
    var ng = RegExp("''", 'g');
    ig.prototype.format = function (a) {
        if (this.o) {
            this.B = [];
            var b = pg(this, this.o);
            this.l = xg(this, b);
            this.o = null;
        }
        if (this.l && this.l.length != 0) { for (this.j = _.eb(this.B), b = [], jg(this, this.l, a, !1, b), a = b.join(''); this.j.length > 0;) a = a.replace(this.A(this.j), this.j.pop()); } else a = '';
        return a;
    };
    var rg = /^\s*(\w+)\s*,\s*plural\s*,(?:\s*offset:(\d+))?/;
    var sg = /^\s*(\w+)\s*,\s*selectordinal\s*,/;
    var tg = /^\s*(\w+)\s*,\s*select\s*,/;
    ig.prototype.A = function (a) {
        return `\ufddf_${(a.length - 1).toString(10)}_`;
    };
    cast.receiver.Y = {
        ig: 'LIVE',
        Ui: 'Play',
        Ti: 'Pause',
        Io: 'Stop',
        so: 'Playing',
        qo: 'Paused',
        to: 'Next item',
        uo: 'Previous item',
        Bo: 'Seek forward 10 seconds',
        Co: 'Seek forward 15 seconds',
        Do: 'Seek forward 30 seconds',
        yo: 'Seek backward 10 seconds',
        zo: 'Seek backward 15 seconds',
        Ao: 'Seek backward 30 seconds',
        Eo: 'Shuffle',
        lo: 'Captions',
        Si: 'Thumbs up',
        oo: 'Thumbs down',
        wo: 'Repeat. State: Off.',
        vo: 'Repeat. State: All.',
        xo: 'Repeat. State: One.',
        po: 'Lyrics',
        Fo: 'Skip Ad',
        Ri: 'Ad',
        Ho: 'Sleep timer',
        jo: 'Show controls.',
        ho: 'Hide controls.',
        Qi: 'Controls are visible.',
        Pi: 'Controls are hidden.',
        fo: 'Go to playback.',
        ko: 'Show {MEDIA_BROWSE_TITLE}.',
        io: '{CURRENT_TIME} of {DURATION}',
        ro: 'Playing {APP_NAME}',
        no: 'Device Controller',
    };
    cast.receiver.Y.hc = function (a, b) {
        return (new ig(a)).format(b);
    };
    cast.receiver.Y.Lj = function (a) {
        return cast.receiver.Y.hc('Your video will play in {FORMATTED_TIME}', {
            FORMATTED_TIME: a,
        });
    };
    cast.receiver.Y.Jj = function (a) {
        return cast.receiver.Y.hc('Skip in {FORMATTED_TIME}', {
            FORMATTED_TIME: a,
        });
    };
    cast.receiver.Y.Mg = function (a, b) {
        return b ? a ? cast.receiver.Y.hc('Season {SEASON}, Episode {EPISODE}', {
            SEASON: a,
            EPISODE: b,
        }) : cast.receiver.Y.hc('Episode {EPISODE}', {
            EPISODE: b,
        }) : cast.receiver.Y.hc('Season {SEASON}', {
            SEASON: a,
        });
    };
    cast.receiver.Y.Mj = function (a, b) {
        return `${a} of ${b}`;
    };
    _.r(yg, lf);
    window.customElements && window.customElements.define && (customElements.get('goog-break-ui') || window.customElements.define('goog-break-ui', yg));
    cast.receiver.C.Fv = yg;
    _.B('cast.receiver.CastChannel');
    _.h = Dg.prototype;
    _.h.wm = function () {
        Fg(this, 'opened');
    };
    _.h.sm = function () {
        Fg(this, 'closed');
    };
    _.h.tm = function () {
        Fg(this, 'error');
    };
    _.h.vm = function (a) {
        _.vd(Bg, `Received message: ${a.message}`);
        const b = (a = JSON.parse(a.message)) && a.namespace;
        a && b && a.senderId && a.data ? (a = new Eg(b, a.senderId, a.data), a.target = this, this.l.dispatchEvent(a)) : _.D(Bg, 'IpcChannel Message received is invalid');
    };
    _.h.open = function () {
        _.G(Bg, 'Opening message bus websocket');
        this.j.open(`ws://localhost:${cast.receiver.platform.Ra('port-for-web-server')}/v2/ipc`);
    };
    _.h.close = function () {
        _.G(Bg, 'Closing message bus websocket');
        this.j.close();
    };
    _.h.send = function (a, b, c) {
        a = JSON.stringify({
            namespace: a,
            senderId: b,
            data: c,
        });
        _.vd(Bg, `IPC message sent: ${a}`);
        this.j.send(a);
    };
    _.h.addEventListener = function (a, b) {
        this.l.listen(a, b);
    };
    _.h.removeEventListener = function (a, b) {
        this.l.unlisten(a, b);
    };
    var Bg = _.B('cast.receiver.IpcChannel');
    _.r(Eg, _.A);
    _.r(Gg, _.z);
    _.h = Gg.prototype;
    _.h.ti = function (a) {
        qd(Lh, Ak, 'Dispatching CastMessageBus message');
        const b = this.A == 'STRING' ? a.data : this.O(a.data);
        Jg(this, new Kg(a.senderId, a.senderId, b));
        a = new Kg('message', a.senderId, b);
        this.o && this.o(a);
        Jg(this, a);
    };
    _.h.send = function (a, b) {
        this.G || this.l == cast.receiver.va.ye || _.F(Lh, 'Application should not send requests before the system is ready (they will be ignored)');
        Jg(this, new Kg('send', a, b));
        for (let c = _.q(this.L), d = c.next(); !d.done; d = c.next()) { if (d = d.value, d(a, this.l, b)) return; }
        if (this.A == 'STRING') {
            if (typeof b !== 'string') throw Error('Wrong argument, CastMessageBus type is STRING');
            this.D.send(this.l, a, b);
        } else this.D.send(this.l, a, this.I(b));
    };
    _.h.Mr = function (a) {
        if (this.A != 'JSON') throw Error('Unexpected message type for JSON serialization');
        return this.l === cast.receiver.media.ob ? JSON.stringify(a, function (b, c) {
            return c === null ? void 0 : c;
        }) : JSON.stringify(a);
    };
    _.h.lr = function (a) {
        if (this.A != 'JSON') throw Error('Unexpected message type for JSON serialization');
        return JSON.parse(a);
    };
    _.h.ka = function () {
        _.z.prototype.ka.call(this);
        this.D.removeEventListener(this.l, this.J);
        this.B.ea();
        for (const a in this.j) this.j[a] && this.j[a].close();
        this.j = {};
        qd(Lh, Ak, `Disposed CastMessageBus[${this.l}]`);
    };
    _.h.addEventListener = function (a, b) {
        _.Nc(this.B, a, b);
    };
    _.h.removeEventListener = function (a, b) {
        Yc(this.B, a, b);
    };
    _.h.dispatchEvent = function (a) {
        return Jg(this, a);
    };
    var Lh = _.B('cast.receiver.CastMessageBus');
    _.r(Kg, _.A);
    cast.receiver.Pb = {};
    cast.receiver.Pb.cc = `${cast.receiver.va.Md}com.google.cast.cac`;
    cast.receiver.Kc = {};
    cast.receiver.Kc.fm = `${cast.receiver.va.Md}com.google.cast.inject`;
    cast.receiver.Kc.xe = '__inject__';
    Lg.prototype[Symbol.iterator] = function () {
        return this;
    };
    Lg.prototype.next = function () {
        const a = this.j.next();
        return {
            value: a.done ? void 0 : this.l.call(void 0, a.value),
            done: a.done,
        };
    };
    Ng.prototype.next = function () {
        return PA;
    };
    var PA = kA({
        done: !0,
        value: void 0,
    });
    Ng.prototype.bd = function () {
        return this;
    };
    Og.prototype.bd = function () {
        return new Pg(this.j());
    };
    Og.prototype[Symbol.iterator] = function () {
        return new Qg(this.j());
    };
    Og.prototype.l = function () {
        return new Qg(this.j());
    };
    _.r(Pg, Ng);
    Pg.prototype.next = function () {
        return this.j.next();
    };
    Pg.prototype[Symbol.iterator] = function () {
        return new Qg(this.j);
    };
    Pg.prototype.l = function () {
        return new Qg(this.j);
    };
    _.r(Qg, Og);
    Qg.prototype.next = function () {
        return this.o.next();
    };
    _.h = _.Sg.prototype;
    _.h.Jc = ba(1);
    _.h.Sg = function () {
        _.Ug(this);
        return this.j.concat();
    };
    _.h.has = function (a) {
        return Tg(this.l, a);
    };
    _.h.isEmpty = function () {
        return this.size == 0;
    };
    _.h.clear = function () {
        this.l = {};
        this.o = this.size = this.j.length = 0;
    };
    _.h.remove = function (a) {
        return this.delete(a);
    };
    _.h.delete = function (a) {
        return Tg(this.l, a) ? (delete this.l[a], --this.size, this.o++, this.j.length > 2 * this.size && _.Ug(this), !0) : !1;
    };
    _.h.get = function (a, b) {
        return Tg(this.l, a) ? this.l[a] : b;
    };
    _.h.set = function (a, b) {
        Tg(this.l, a) || (this.size += 1, this.j.push(a), this.o++);
        this.l[a] = b;
    };
    _.h.forEach = function (a, b) {
        for (let c = this.Sg(), d = 0; d < c.length; d++) {
            const e = c[d];
            const f = this.get(e);
            a.call(b, f, e, this);
        }
    };
    _.h.clone = function () {
        return new _.Sg(this);
    };
    _.h.keys = function () {
        return Rg(this.bd(!0)).l();
    };
    _.h.values = function () {
        return Rg(this.bd(!1)).l();
    };
    _.h.entries = function () {
        const a = this;
        return Mg(this.keys(), function (b) {
            return [b, a.get(b)];
        });
    };
    _.h.bd = function (a) {
        _.Ug(this);
        let b = 0;
        const c = this.o;
        const d = this;
        const e = new Ng();
        e.next = function () {
            if (c != d.o) throw Error('The map has changed since the iterator was created');
            if (b >= d.j.length) return PA;
            const f = d.j[b++];
            return {
                value: a ? f : d.l[f],
                done: !1,
            };
        };
        return e;
    };
    Xg.prototype.F = function (a) {
        const b = this;
        let c = a.data;
        const d = c.requestId;
        const e = a.senderId;
        if (c.type != 'WRAPPED') jh(this, `Unsupported message type ${c.type}`, e, d);
        else {
            a = JSON.parse(c.data);
            c = a.namespace;
            const f = this.A.j[c] || null;
            if (f) {
                let g = !1;
                let k = null;
                if (c == cast.receiver.Pb.cc) a.data.requestId = d, g = !0;
                else if (c == cast.receiver.media.ob) k = a.data, k.requestId = d, k.mediaSessionId = this.D, k = k.type;
                else {
                    jh(this, `Unsupported namespace ${c}`, e, d);
                    return;
                }
                this.j.set(d, e);
                try {
                    this.o = null, Hg(f, c, cast.receiver.Kc.xe, JSON.stringify(a.data));
                } catch (m) {
                    throw this.j.delete(d),
                    jh(this, `Injecting ${a.data} failed with ${m}`, e, d), m;
                }
                if (!g) {
                    const l = function () {
                        return b.o ? (b.j.delete(d), jh(b, `Error ${JSON.stringify(b.o)}`, e, d, 'WRAPPED_ERROR', b.o), !0) : !1;
                    };
                    l() || setTimeout(function () {
                        !l() && b.j.has(d) && (b.j.delete(d), lh(b, e, d));
                    }, gh(this, k));
                }
            } else {
                jh(this, `Unregistered namespace ${c}`, e, d, 'WRAPPED_ERROR', {
                    type: 'ERROR',
                    code: 'UNREGISTERED_NAMESPACE',
                });
            }
        }
    };
    Xg.prototype.G = function (a, b, c) {
        if (b == cast.receiver.media.ob && (this.A.j[b] || null).A == 'STRING') {
            try {
                c = JSON.parse(c);
            } catch (g) {
                return _.D(hh, `Parse failed: ${c}`), !1;
            }
        }
        let d = c.type;
        b == cast.receiver.media.ob && d == 'MEDIA_STATUS' && c.status && c.status[0] && (this.D = c.status[0].mediaSessionId);
        if (a !== cast.receiver.Kc.xe && a !== '*:*') return !1;
        a = a === '*:*';
        const e = c.requestId;
        const f = this.j.get(e);
        if (void 0 === e) return a || _.F(hh, `No requestId in ${c}`), !a;
        if (b == cast.receiver.media.ob) {
            switch (d) {
                case 'INVALID_REQUEST':
                case 'INVALID_PLAYER_STATE':
                case 'LOAD_CANCELLED':
                case 'LOAD_FAILED':
                case 'ERROR':
                    b = c.reason;
                    this.o = {
                        type: 'ERROR',
                        code: b || d,
                    };
                    break;
                case 'MEDIA_STATUS':
                    f && (this.j.delete(e), lh(this, f, e));
            }
            return !a;
        }
        if (!f) return _.D(hh, `Request not found ${e}`), !a;
        this.j.delete(e);
        if (b != cast.receiver.Pb.cc) return _.D(hh, `Unsupported namespace ${b}`), !a;
        d = c;
        switch (d.type) {
            case 'SUCCESS':
                lh(this, f, e, Object.getOwnPropertyNames(c).some(function (g) {
                    return g != 'type' && g != 'requestId' && void 0 !== c[g];
                }) ? JSON.stringify(c) : void 0);
                break;
            case 'ERROR':
                jh(this, 'Wrapped error', f, e, 'WRAPPED_ERROR', d);
                break;
            default:
                jh(this,
                    `Unknown message type ${c}`, f, e);
        }
        return !a;
    };
    Ea(Xg);
    var hh = _.B('cast.receiver.InjectManager');
    _.r(kh, mh);
    _.r(ih, mh);
    var ph = null;
    oh.prototype.set = function (a) {
        this.j = a;
    };
    oh.prototype.reset = function () {
        this.set(_.Pa());
    };
    oh.prototype.get = function () {
        return this.j;
    };
    qh.prototype.j = !0;
    qh.prototype.l = !0;
    qh.prototype.o = !1;
    _.Qa(sh, qh);
    uh.prototype.A = function (a) {
        function b(f) {
            if (f) {
                if (f.value >= rd.value) return 'error';
                if (f.value >= sd.value) return 'warn';
                if (f.value >= kd.value) return 'log';
            }
            return 'debug';
        }
        if (!this.l[a.l]) {
            const c = th(this.j, a);
            const d = QA;
            if (d) {
                const e = b(a.A);
                vh(d, e, c, a.j);
            }
        }
    };
    uh.prototype.removeFilter = function (a) {
        delete this.l[a];
    };
    var wh = null;
    var QA = _.u.console;
    _.r(_.Vg, _.z);
    _.h = _.Vg.prototype;
    _.h.start = function (a) {
        if (a) {
            if (!a) throw Error('Cannot validate undefined config.');
            if (void 0 != a.maxInactivity && a.maxInactivity < 5) throw Error('config.maxInactivity must be greater than or equal to 5 seconds.');
            _.tb(this.l, a || {});
        }
        this.l.versionCode && this.l.versionCode >= 0 && (Number.isInteger(this.l.versionCode) ? (K(cast.receiver.analytics.K.Nq, this.l.versionCode), _.G(L, `App Version ${this.l.versionCode}`)) : _.D(L, 'Receiver versionCode needs to be an integer'));
        Xg.M();
        this.ra || ei(this, !1);
        this.qa = !0;
        this.R.open();
    };
    _.h.stop = function () {
        this.ea();
        window.close();
    };
    _.h.isRemoteControl = function () {
        return !!cast.receiver.platform.Ra('is-remote-control-mode-enabled');
    };
    _.h.rc = function () {
        return this.D == 'ready';
    };
    _.h.getSenders = function () {
        return _.lb(this.B);
    };
    _.h.Qe = function (a) {
        return this.B[a] ? _.qb(this.B[a]) : null;
    };
    _.h.Yg = function () {
        return this.I == null ? this.G ? 'notvisible' : 'unknown' : this.I ? 'visible' : 'notvisible';
    };
    _.h.Wg = function () {
        return this.G == null ? this.I ? 'notstandby' : 'unknown' : this.G ? 'standby' : 'notstandby';
    };
    _.h.Re = function () {
        this.D == 'notstarted' && (this.D = /[&?]google_cast_bg=true(&|$)/.test(window.location.search) ? 'startinginbackground' : 'starting');
        return this.D;
    };
    _.h.kd = function () {
        return this.T;
    };
    _.h.Fc = function () {
        return this.o;
    };
    _.h.de = function (a) {
        this.rc() ? Ch(this, a) : this.l.statusText != a && (this.l.statusText = a, this.ca = !0);
    };
    _.h.Th = function (a) {
        if (a < 0 || a > 1) throw Error('Invalid level value');
        this.A.send(cast.receiver.va.hb, {
            type: 'setvolume',
            level: a,
        });
    };
    _.h.Uh = function (a) {
        this.A.send(cast.receiver.va.hb, {
            type: 'setvolume',
            muted: a,
        });
    };
    _.h.md = function () {
        return this.Ca;
    };
    _.h.Ff = function (a) {
        this.A.send(cast.receiver.va.hb, {
            type: 'startheartbeat',
            maxInactivity: a,
        });
    };
    _.h.Oh = function (a) {
        this.A.send(cast.receiver.va.hb, {
            type: 'cast2smartdisplaymessage',
            message: a,
            requestId: Math.random(),
        });
    };
    _.h.ce = function (a) {
        this.A.send(cast.receiver.va.hb, {
            type: 'sendfeedbackmessage',
            message: a,
        });
    };
    _.h.lu = function (a) {
        const b = a.data;
        switch (b.type) {
            case 'opened':
                _.G(L, 'Underlying message bus is open');
                Bh(this, _.lb(this.j), this.l.statusText, this.l.dialData);
                this.l.maxInactivity && this.Ff(this.l.maxInactivity);
                break;
            case 'closed':
                this.xh();
                break;
            case 'error':
                Ih(this, new ii('error', null));
                break;
            case 'ready':
                _.G(L, function () {
                    return `System ready event: ${JSON.stringify(b)}`;
                });
                Jh(this, b);
                break;
            case 'senderconnected':
                Mh(this, {
                    id: b.senderId,
                    userAgent: b.userAgent,
                });
                break;
            case 'senderdisconnected':
                Oh(this, b.senderId,
                    b.reason);
                break;
            case 'volumechanged':
                Qh(this, {
                    level: b.level,
                    muted: b.muted,
                });
                break;
            case 'visibilitychanged':
                this.W || (a = b.visible, Sh(this, void 0 !== a ? a : null));
                break;
            case 'standbychanged':
                this.W || (a = b.standby, Uh(this, void 0 !== a ? a : null));
                break;
            case 'maxvideoresolutionchanged':
                Yh(this, b.height);
                break;
            case 'showmediacontrols':
                Wh(this, b.controls);
                break;
            case 'playbackdevicestatus':
                _.G(L, `Dispatching playbackdevicestatus ${b.playbackType}`);
                this.J = new Ie();
                this.J.playbackType = b.playbackType;
                this.J.deviceName = b.deviceName;
                Ih(this, new ki(this.J));
                break;
            case 'hdroutputtypechanged':
                this.da && this.da(b.hdrType);
                break;
            case 'screenresolutionchanged':
                break;
            case 'feedbackstarted':
                $h(this);
                break;
            case 'groupcapabilities':
                bi(this, b);
                break;
            case 'allowgroupchange':
                di(this, b);
                break;
            default:
                _.D(L, `Unexpected system message type: ${b.type}`);
        }
    };
    _.h.canDisplayType = function (a, b, c, d, e) {
        if (!cast.receiver.platform.Wj()) return !0;
        if (!Mb(a, 'video/') && !Mb(a, 'audio/')) return !1;
        b && (a += `; codecs=${b}`);
        c && d && (a += `; width=${c}; height=${d}`);
        e && (a += `; framerate=${e}`);
        if (c = b) {
            for (c = !1, b = b.split(','), d = 0; d < b.length; d++) {
                if (b[d].match(zA)) {
                    c = !1;
                    break;
                }
                b[d].indexOf('hev1.2') === 0 && (c = !0);
            }
        }
        c && (a += '; eotf=smpte2084');
        return cast.receiver.platform.canDisplayType(a);
    };
    _.h.gk = function () {
        this.W && Sh(this, document.visibilityState == 'visible');
    };
    _.h.xh = function () {
        _.G(L, 'Dispatching shutdown event');
        this.Re();
        this.D = this.D == 'startinginbackground' ? 'stoppinginbackground' : 'stopping';
        for (const a in this.j) this.j[a].G = !1;
        Ih(this, new ji());
    };
    _.h.ka = function () {
        this.R.close();
        _.z.prototype.ka.call(this);
        window && Yc(window, 'unload', this.xh, !1, this);
        document && Yc(document, 'visibilitychange', this.gk, !1, this);
        this.O.ea();
        delete _.Vg.pc;
        _.vd(L, 'Disposed CastReceiverManager');
    };
    _.h.addEventListener = function (a, b) {
        _.Nc(this.O, a, b);
    };
    _.h.removeEventListener = function (a, b) {
        Yc(this.O, a, b);
    };
    _.h.dispatchEvent = function (a) {
        return Ih(this, a);
    };
    Ea(_.Vg);
    _.Vg.getInstance = _.Vg.M;
    var yh = null;
    var L = _.B('cast.receiver.CastReceiverManager');
    _.r(ii, _.A);
    _.r(Nh, ii);
    _.r(Kh, ii);
    _.r(Rh, ii);
    _.r(Th, ii);
    _.r(Ph, ii);
    _.r(Hh, ii);
    _.r(ji, ii);
    _.r(Zh, ii);
    _.r(ki, ii);
    _.r(Vh, ii);
    _.r(Xh, ii);
    _.r(ai, ii);
    _.r(ci, ii);
    var xh = {
        maxInactivity: 10,
    };
    var Eh = 1;
    var Fh = 47;
    li.prototype.o = function (a) {
        if (this.j.rc()) _.F(RA, 'Ignoring broadcast request, system is ready.');
        else {
            a = a.data;
            let b = a.type;
            if (b != 'APPLICATION_BROADCAST') _.D(RA, `Ignoring message type: ${b}`);
            else if (b = a.j) {
                const c = this.j.j[b] || null;
                if (c) {
                    switch (b) {
                        case cast.receiver.media.ob:
                            var d = JSON.parse(a.message);
                            if (d.type != 'PRECACHE') {
                                _.D(RA, `Unsupported type for media namespace: ${d.type}`);
                                break;
                            }
                            Hg(c, b, '__broadcast__', a.message);
                            break;
                        default:
                            _.D(RA, `Unsupported namespace: ${a.j}`);
                    }
                } else {
                    _.D(RA, `Invalid message bus for namespace: ${b}`);
                }
            } else _.D(RA, `Missing namespace: ${b}`);
        }
    };
    Ea(li);
    var RA = _.B('cast.receiver.BroadcastManager');
    var oi = _.B('cast.receiver.ui.BrowseContentValidator');
    cast.receiver.C.bc = function (a, b, c) {
        Sf.M();
        this.element = ti(this, a, b, c);
        this.B = Ff.M();
    };
    cast.receiver.C.sl = function (a) {
        qc(a, _.Cb('<div class="slot device-controller-slot"></div><div class=controls-buttons><div class="slot slot-primary-1"></div><div class="slot center"><play-placeholder></play-placeholder><stop-placeholder></stop-placeholder></div><div class="slot slot-primary-2"></div><div class="slot slot-secondary-1"></div><div class="slot slot-secondary-2"></div></div>'));
    };
    cast.receiver.C.tl = function (a) {
        a.innerHTML = '<div class="slot device-controller-slot"></div><div class="slot slot-primary-1"></div><div class="slot center"><play-placeholder></play-placeholder><stop-placeholder></stop-placeholder></div><div class="slot slot-primary-2"></div><div class="slot slot-secondary-1"></div><div class="slot slot-secondary-2"></div>';
    };
    cast.receiver.C.Ll = function (a) {
        const b = document.createElement('img');
        b.classList.add('device-controller-icon');
        b.setAttribute('role', 'presentation');
        const c = document.createElement('span');
        c.classList.add('device-controller-label');
        const d = document.createElement('div');
        d.classList.add('device-controller-btn');
        if (!Be()) {
            d.setAttribute('role', 'button');
            const e = document.createElement('goog-ripple');
            d.appendChild(e);
        }
        d.appendChild(b);
        d.appendChild(c);
        d.title = cast.receiver.Y.no;
        d.addEventListener('click', a);
        J(c,
            !1);
        this.l = d;
        this.j = c;
        this.o = b;
    };
    _.r(xi, cast.receiver.C.bc);
    cast.receiver.C.pp = xi;
    _.r(yi, cast.receiver.C.bc);
    _.r(Ai, lf);
    Ai.prototype.vj = function () {
        if (this.j && Vf(this.j.element)) return !0;
        for (const a in this.o) { if (Vf(this.o[a].element)) return !0; }
        return !1;
    };
    Ai.prototype.sa = function (a, b) {
        if (!this.F.hasOwnProperty(a)) throw Error(`Invalid controls slot name. - ${a}`);
        for (var c = this.F[a]; c.firstChild;) this.D && c.firstElementChild && Uf(c.firstElementChild, !1), c.removeChild(c.firstChild), delete this.o[a];
        b && (c.appendChild(b.element), this.o[a] = b, this.D && Uf(b.element, !0));
        a === cast.receiver.C.la.SLOT_SECONDARY_2 && this.classList.toggle('secondary-2-empty', !b);
    };
    window.customElements && window.customElements.define && (window.customElements.get('goog-buttons-bar') || window.customElements.define('goog-buttons-bar', Ai));
    Ei.prototype.J = function (a) {
        const b = a.data;
        let c = b.type;
        a = a.senderId;
        switch (c) {
            case 'SET_CREDENTIALS':
                Li(this, b.forRequestId, b);
                var d = this.A;
                break;
            case 'LOAD_BY_ENTITY':
                d = this.o;
                break;
            case 'USER_ACTION':
                d = this.D;
                break;
            case 'DISPLAY_STATUS':
                d = this.H;
                break;
            case 'CUSTOM_COMMAND':
                d = this.F;
                break;
            case 'SCREEN_NAVIGATION':
                d = this.I;
                break;
            case 'FOCUS_STATE':
                (d = this.G) && this.B.Fc().focus_state_supported && d(b);
                return;
            case 'SUCCESS':
            case 'ERROR':
                Li(this, b.requestId, b);
                return;
            default:
                c = `Unsupported event ${c}`;
                Gi(c, b,
                    'INVALID_REQUEST');
                this.j.send(a, Gi(c, b, 'INVALID_REQUEST'));
                return;
        }
        d ? Hi(this, a, b, d) : (c = `Handler for ${c} not implemented`, Gi(c, b, 'NOT_SUPPORTED'), this.j.send(a, Gi(c, b, 'NOT_SUPPORTED')));
    };
    Ei.prototype.Ch = function (a, b) {
        const c = this;
        let d = this.B.Fc();
        if (d && !0 === d.display_supported && !d.touch_input_supported) return Promise.resolve(new Ji('NOT_SUPPORTED'));
        d = Date.now();
        if (this.l.has(d)) return Promise.reject(Error('Duplicate request'));
        const e = new Oi(a, b);
        e.requestId = d;
        return new Promise(function (f) {
            c.l.set(e.requestId, f);
            c.j.send('system-0', e);
        });
    };
    Ei.prototype.Jh = function (a, b) {
        const c = this;
        const d = new Ni();
        d.requestId = Date.now();
        d.credentials = a || void 0;
        d.customData = b || void 0;
        return new Promise(function (e) {
            c.l.set(d.requestId, e);
            c.j.send('system-0', d);
        });
    };
    Ea(Ei);
    Ei.getInstance = Ei.M;
    var Di = cast.receiver.Pb.cc;
    var Ii = _.B('cast.receiver.CommandAndControlManager');
    _.r(Ni, Mi);
    _.r(Oi, Mi);
    _.r(Ti, Mi);
    _.r(Ui, Mi);
    _.r(Vi, Mi);
    _.r(Wi, Mi);
    _.r(Xi, Wi);
    _.r(Ji, Wi);
    var Zi = /#(.)(.)(.)(.)/;
    var Yi = /^#(?:[0-9a-f]{4}){1,2}$/i;
    _.r(mj, _.z);
    mj.prototype.Hc = function () {
        return this.I;
    };
    mj.prototype.xb = function (a) {
        ij(this);
        jj(this);
        kj(this, a);
    };
    mj.prototype.ka = function () {
        _.z.prototype.ka.call(this);
        for (let a = _.q(this.l), b = a.next(); !b.done; b = a.next()) this.j.removeChild(b.value);
        this.l.length = 0;
        ij(this, !0);
        rj(this);
        qd(sj, Ak, 'Disposed TextTracksManager');
    };
    var sj = _.B('cast.receiver.TextTracksManager');
    _.h = wj.prototype;
    _.h.preload = function (a, b, c, d) {
        yj(this);
        this.H = a;
        this.B = b;
        this.L = d || 0;
        this.A = c || null;
    };
    _.h.xm = function (a) {
        yj(this);
        this.I(a);
    };
    _.h.ui = function () {
        yj(this);
        this.G();
    };
    _.h.ym = function () {
        this.l && this.o && lj(this.l, this.o);
        this.J();
    };
    _.h.registerErrorCallback = function (a) {
        this.I = a;
    };
    _.h.registerEndedCallback = function (a) {
        this.G = a;
    };
    _.h.registerLoadCallback = function (a) {
        this.J = a;
    };
    _.h.unregisterErrorCallback = function () {
        this.I = function () { };
    };
    _.h.unregisterEndedCallback = function () {
        this.G = function () { };
    };
    _.h.unregisterLoadCallback = function () {
        this.J = function () { };
    };
    _.h.ik = function () {
        zj(this);
    };
    _.h.load = function (a, b, c, d, e, f) {
        this.l && (this.l.ea(), this.l = null);
        this.D = !1;
        d && d.tracks && this.j && (this.l && this.l.ea(), this.l = new mj(this.j, d.tracks, d.activeTrackIds || [], d.textTrackStyle || null), d.language && pj(this.l, d.language));
        this.A != null && _.Nc(this.j, 'timeupdate', this.ik, !1, this);
        e || (this.B = c && c > 0 ? c : 0, _.G(this.ha, `Load - contentId: ${a} autoplay: ${b} time: ${this.B}`), this.j.autoplay = !1, a && (this.j.src = a), this.j.autoplay = b, this.j.load(), void 0 !== f && (this.j.playbackRate = f));
    };
    _.h.reset = function () {
        this.D = !1;
        this.l && (this.l.ea(), this.l = null);
        this.o = null;
        this.j.removeAttribute('src');
        this.B = 0;
        this.j.load();
        yj(this);
    };
    _.h.play = function () {
        this.D = !1;
        this.j.play();
    };
    _.h.seek = function (a, b) {
        this.j.currentTime != a && (this.j.currentTime = a);
        zj(this) || (b == 'PLAYBACK_START' && this.j.paused ? this.j.play() : b != 'PLAYBACK_PAUSE' || this.j.paused || this.j.pause());
    };
    _.h.setPlaybackRate = function (a) {
        return this.j.playbackRate = a;
    };
    _.h.pause = function () {
        this.D = !0;
        this.j.pause();
    };
    _.h.getState = function () {
        this.H == null && (this.H = this.j.autoplay);
        return this.j.paused || isNaN(this.j.duration) ? this.j.duration && (this.j.currentTime || this.j.currentTime == 0) && this.j.currentTime < xj(this) ? this.j.currentTime == this.B && this.H && !this.D ? 'BUFFERING' : 'PAUSED' : 'IDLE' : 'PLAYING';
    };
    _.h.getCurrentTimeSec = function () {
        const a = xj(this);
        return isNaN(a) ? this.j.currentTime : this.j.currentTime < a ? this.j.currentTime : a;
    };
    _.h.getDurationSec = function () {
        return xj(this);
    };
    _.h.getMediaCategory = function () {
        return null;
    };
    _.h.getVolume = function () {
        return {
            level: this.j.volume,
            muted: this.j.muted,
        };
    };
    _.h.setVolume = function (a) {
        void 0 !== a.level && (this.j.volume = a.level);
        void 0 !== a.muted && (this.j.muted = a.muted);
    };
    _.h.editTracksInfo = function (a) {
        this.l && (a.textTrackStyle && this.l.xb(a.textTrackStyle), a.language ? pj(this.l, a.language) : a.activeTrackIds && lj(this.l, a.activeTrackIds));
        Aj(this, a.activeTrackIds);
        return this.o;
    };
    _.h = Cj.prototype;
    _.h.Sh = function (a) {
        this.l = a;
    };
    _.h.fetchItems = function (a, b, c, d) {
        const e = this;
        let f = void 0;
        const g = Vj(this, b);
        this.l ? c > 0 && d > 0 ? f = 'Queue operations only support expanding the front or back.' : g < 0 && (f = 'Reference item id is not in current queue.') : f = 'Fetch items is only supported with an external queue.';
        if (f) return _.F(Lj, f), Promise.reject(f);
        c > 0 ? (f = this.j.length - 1, c -= f - g, b = this.j[f].itemId) : d > 0 && (d -= g, b = this.j[0].itemId);
        const k = new Re();
        k.requestId = a;
        return c <= 0 && d <= 0 ? (k.changeType = 'NO_CHANGE', k.sequenceNumber = Nj(this, !1), Promise.resolve(k)) : Promise.resolve(this.l.fetchItems(b,
            c, d)).then(function (l) {
            if (l && l.length !== 0) {
                const m = c > 0 ? void 0 : b;
                Qj(e, l, m);
                k.changeType = 'INSERT';
                k.itemIds = l.map(function (n) {
                    return n.itemId;
                });
                k.insertBefore = m;
                k.sequenceNumber = Nj(e, !0);
            } else k.changeType = 'NO_CHANGE', k.sequenceNumber = Nj(e, !1);
            return k;
        });
    };
    _.h.clear = function () {
        this.j = void 0;
        this.A = 'REPEAT_OFF';
        this.B = void 0;
        this.D = this.o = 0;
    };
    _.h.Gc = function (a, b) {
        a = void 0 === a ? !0 : a;
        b = void 0 === b ? !1 : b;
        const c = [];
        let d = this.j && this.j.length || 0;
        d = b && this.o < d - 1 ? this.o + 1 : d - 1;
        for (b = b && this.o > 0 ? this.o - 1 : 0; b <= d; b++) {
            const e = c;
            const f = e.push;
            if (a) var g = this.j[b];
            else {
                g = this.j[b];
                const k = a;
                const l = new Bj(g.itemId);
                l.autoplay = g.autoplay;
                l.startTime = g.startTime;
                l.playbackDuration = g.playbackDuration;
                l.preloadTime = g.preloadTime;
                l.activeTrackIds = g.activeTrackIds;
                l.customData = g.customData;
                if (void 0 === k || k) l.media = g.media;
                g = l;
            }
            f.call(e, g);
        }
        return c;
    };
    _.h.jc = function () {
        return !this.j || this.o < 0 ? null : this.j[this.o];
    };
    _.h.Sd = function () {
        return this.o;
    };
    _.h.Zh = function (a) {
        for (let b = 0; b < a.length; b++) { for (let c = 0; c < this.j.length; c++) a[b].itemId == this.j[c].itemId && (this.j[c] = a[b]); }
    };
    _.h.reset = function () {
        this.o = -1;
    };
    _.h.ih = function (a, b, c) {
        return Qj(this, a, b, c);
    };
    _.h.Kh = function (a) {
        for (var b = !1, c = 0; c < a.length; c++) {
            for (let d = 0; d < this.j.length; d++) {
                if (a[c] == this.j[d].itemId) {
                    this.j.splice(d, 1);
                    this.o == d ? b = !0 : this.o > d && this.o--;
                    break;
                }
            }
        } this.o >= this.j.length && (this.o = Wj(this) ? 0 : -1, Fj(this) && this.o == 0 && ak(this));
        if (this.l && this.l.onItemsRemoved) this.l.onItemsRemoved(a);
        return b;
    };
    _.h.shuffle = function () {
        const a = this;
        if (this.l && this.l.shuffle) {
            return Promise.resolve(this.l.shuffle()).then(function (b) {
                b ? (Ej(a, !0), a.j = b) : ak(a);
            });
        }
        ak(this);
        return Promise.resolve();
    };
    _.h.he = function () {
        const a = this;
        if (this.l && this.l.he) {
            return Promise.resolve(this.l.he()).then(function (b) {
                b ? (Ej(a, !1), a.j = b) : ck(a);
            });
        }
        ck(this);
        return Promise.resolve();
    };
    var Lj = _.B('cast.receiver.MediaQueue');
    cast.receiver.gb = {};
    const SA = {};
    const TA = (SA.LOAD = cast.receiver.analytics.K.xn, SA.GET_STATUS = cast.receiver.analytics.K.vn, SA.PAUSE = cast.receiver.analytics.K.An, SA.STOP = cast.receiver.analytics.K.Vn, SA.SKIP_AD = cast.receiver.analytics.K.Un, SA.PLAY = cast.receiver.analytics.K.Bn, SA.PLAY_AGAIN = cast.receiver.analytics.K.Cn, SA.SEEK = cast.receiver.analytics.K.Qn, SA.SET_PLAYBACK_RATE = cast.receiver.analytics.K.Sn, SA.SET_VOLUME = cast.receiver.analytics.K.Tn, SA.EDIT_TRACKS_INFO = cast.receiver.analytics.K.un, SA.EDIT_AUDIO_TRACKS = cast.receiver.analytics.K.tn,
    SA.PRELOAD = cast.receiver.analytics.K.En, SA.CANCEL_PRELOAD = cast.receiver.analytics.K.pn, SA.PRECACHE = cast.receiver.analytics.K.Dn, SA.QUEUE_LOAD = cast.receiver.analytics.K.Jn, SA.QUEUE_INSERT = cast.receiver.analytics.K.In, SA.QUEUE_UPDATE = cast.receiver.analytics.K.Pn, SA.QUEUE_REMOVE = cast.receiver.analytics.K.Mn, SA.QUEUE_REORDER = cast.receiver.analytics.K.Nn, SA.QUEUE_NEXT = cast.receiver.analytics.K.Kn, SA.QUEUE_PREV = cast.receiver.analytics.K.Ln, SA.QUEUE_GET_ITEM_RANGE = cast.receiver.analytics.K.Hn, SA.QUEUE_GET_ITEMS = cast.receiver.analytics.K.Fn, SA.QUEUE_GET_ITEM_IDS = cast.receiver.analytics.K.Gn, SA.QUEUE_SHUFFLE = cast.receiver.analytics.K.On, SA.USER_ACTION = cast.receiver.analytics.K.zn, SA.SET_CREDENTIALS = cast.receiver.analytics.K.Rn, SA.LOAD_BY_ENTITY = cast.receiver.analytics.K.yn, SA.USER_ACTION = cast.receiver.analytics.K.Xn, SA.DISPLAY_STATUS = cast.receiver.analytics.K.rn, SA.CUSTOM_COMMAND = cast.receiver.analytics.K.qn, SA);
    const UA = cast.receiver.analytics.K.Wn;
    const VA = {};
    const WA = (VA.UNKNOWN = 1, VA.SUCCESS = 2, VA.INJECT_ERROR = 3, VA.INVALID_COMMAND = 3, VA.INVALID_PARAMS = 4, VA.INVALID_MEDIA_SESSION_ID = 5, VA.SKIP_LIMIT_REACHED = 6, VA.NOT_SUPPORTED = 7, VA.LANGUAGE_NOT_SUPPORTED = 8, VA.END_OF_QUEUE = 9, VA.DUPLICATE_REQUEST_ID = 10, VA.APP_ERROR = 11, VA.AUTHENTICATION_EXPIRED = 12, VA.PREMIUM_ACCOUNT_REQUIRED = 13, VA.CONCURRENT_STREAM_LIMIT = 14, VA.PARENTAL_CONTROL_RESTRICTED = 15, VA.NOT_AVAILABLE_IN_REGION = 16, VA.CONTENT_ALREADY_PLAYING = 17, VA.INVALID_REQUEST = 18, VA.GENERIC_LOAD_ERROR = 19, VA.VIDEO_DEVICE_REQUIRED = 20, VA.CONTENT_FILTERED = 21, VA);
    const XA = {};
    const YA = (XA.MEDIA_STATUS = cast.receiver.analytics.K.Vo,
    XA.CLOUD_STATUS = cast.receiver.analytics.K.Po, XA.QUEUE_CHANGE = cast.receiver.analytics.K.Wo, XA.QUEUE_ITEMS = cast.receiver.analytics.K.Xo, XA.QUEUE_ITEM_IDS = cast.receiver.analytics.K.Yo, XA.INVALID_PLAYER_STATE = cast.receiver.analytics.K.Ro, XA.LOAD_FAILED = cast.receiver.analytics.K.Uo, XA.LOAD_CANCELLED = cast.receiver.analytics.K.To, XA.INVALID_REQUEST = cast.receiver.analytics.K.So, XA.ERROR = cast.receiver.analytics.K.Qo, XA);
    const ZA = cast.receiver.analytics.K.Zo;
    var ek = 'local';
    cast.receiver.gb.Fu = function (a) {
        ek = a;
    };
    cast.receiver.gb.ph = function (a, b) {
        K(TA[a] || UA, fk(b));
    };
    cast.receiver.gb.kv = function () {
        let a = _.Vg.M();
        const b = a.j[cast.receiver.media.ob] || null;
        b && (b.addEventListener('message', function (c) {
            c.data && c.data.type && cast.receiver.gb.ph(c.data.type, c.senderId);
        }), b.addEventListener('send', function (c) {
            c.data && c.data.type && K(YA[c.data.type] || ZA, fk(c.senderId));
        }));
        (a = a.j[cast.receiver.Pb.cc] || null) && a.addEventListener('message', function (c) {
            c.data && c.data.type && cast.receiver.gb.ph(c.data.type, c.senderId);
        });
    };
    cast.receiver.gb.oh = function (a) {
        K(cast.receiver.analytics.K.vl, WA[a] || 1);
    };
    _.Vg.M().addEventListener('ready', cast.receiver.gb.kv);
    cast.receiver.Rq = function (a) {
        const b = this;
        this.o = a;
        this.j = null;
        this.l = 'sdr';
        this.A = function () {
            b.o();
        };
    };
    _.h = _.jk.prototype;
    _.h.isEmpty = function () {
        return this.j.length === 0 && this.l.length === 0;
    };
    _.h.clear = function () {
        this.j = [];
        this.l = [];
    };
    _.h.contains = function (a) {
        return _.bb(this.j, a) || _.bb(this.l, a);
    };
    _.h.remove = function (a) {
        let b = this.j;
        const c = bA(b, a);
        c >= 0 ? (_.cb(b, c), b = !0) : b = !1;
        return b || _.db(this.l, a);
    };
    _.h.Jc = ba(0);
    _.h = lk.prototype;
    _.h.Kj = function () {
        return this.vp++;
    };
    _.h.Bb = function () {
        return this.j ? this.j.media || null : null;
    };
    _.h.xd = function (a, b, c) {
        b = void 0 === b || b;
        if (c && !b) throw Error('No broadcast call but status customData has been provided');
        this.j && (Jk(this, a, !1), this.j.media = a);
        b && this.broadcastStatus(!0, null, c);
    };
    _.h.lc = function () {
        return this.Kf;
    };
    _.h.ee = function (a, b) {
        this.Kf !== a && (this.Kf = a, (void 0 === b || b) && this.j && this.broadcastStatus(!1));
    };
    _.h.sg = function (a) {
        this.ee(a | this.lc());
    };
    _.h.Lh = function (a) {
        this.ee(~a & this.lc());
    };
    _.h.Hb = function (a) {
        rk(this, this.W, a);
    };
    _.h.wh = function (a) {
        let b = a.data;
        let c = b.type;
        if (c == 'SHUTDOWN') this.ci.stop();
        else if (this.T && c != 'LOAD') _.F(M, 'Load is in progress, media command is being queued.'), this.Vf.l.push(a);
        else {
            a = a.senderId;
            let d = b.type;
            let e = b.requestId;
            if (typeof e !== 'number' || e != Math.floor(e)) _.D(M, `Ignoring request, requestId is not an integer: ${e}`), d = !1;
            else {
                let f = !1;
                void 0 != b.mediaSessionId && b.mediaSessionId != this.H ? (_.D(M, `Invalid media session ID: ${b.mediaSessionId}  does not match the expected ID: ${this.H}`), f = !0)
                    : d != 'LOAD' && d != 'PLAY_AGAIN' && d != 'GET_STATUS' && d != 'QUEUE_LOAD' && d != 'PRECACHE' && d != 'STORE_SESSION' && d != 'RESUME_SESSION' && (void 0 === b.mediaSessionId ? (_.D(M, 'Invalid media session ID, it is undefined'), f = !0) : tk(this) == 'IDLE' && (_.D(M, 'Unexpected command, player is in IDLE state so the media session ID is not valid yet'), f = !0));
                f ? (this.Ha(a, e, 'INVALID_REQUEST', 'INVALID_MEDIA_SESSION_ID'), d = !1) : (qd(M, Ak, 'MediaManager message received'), d = !0);
            }
            if (d) {
                d = b.requestId;
                e = null;
                switch (c) {
                    case 'LOAD':
                        this.Z = !1;
                        e = Lk(this,
                            a, b, !0);
                        break;
                    case 'GET_STATUS':
                        _.G(M, 'Dispatching MediaManager getStatus event');
                        b = new Dk('getstatus', b, a);
                        this.sd && this.sd(b);
                        Mk(this, b);
                        e = null;
                        break;
                    case 'PLAY':
                        _.G(M, 'Dispatching MediaManager play event');
                        b = new Dk('play', b, a);
                        this.ca && this.ca(b);
                        Mk(this, b);
                        e = null;
                        break;
                    case 'PLAY_AGAIN':
                        _.G(M, 'Dispatching MediaManager play again event');
                        b = new Dk('playagain', b, a);
                        this.ud && this.ud(b);
                        Mk(this, b);
                        e = null;
                        break;
                    case 'SEEK':
                        void 0 === b.currentTime && void 0 === b.relativeTime ? (_.D(M, 'currentTime or relativeTime is required'),
                        e = {
                            type: 'INVALID_REQUEST',
                            reason: 'INVALID_PARAMS',
                        }) : (_.G(M, 'Dispatching MediaManager seek event'), b = new Dk('seek', b, a), this.da && this.da(b), Mk(this, b), e = null);
                        break;
                    case 'SET_PLAYBACK_RATE':
                        (e = b.playbackRate) || (e = b.relativePlaybackRate * this.D);
                        typeof e !== 'number' || e < 0.5 || e > 2 ? (_.D(M, `Bad value for playback rate ${e}`), e = {
                            type: 'INVALID_REQUEST',
                            reason: 'INVALID_PARAMS',
                        }) : (_.G(M, 'Dispatching MediaManager playback rate event'), b = new Dk('setplaybackrate', b, a), this.Aa && this.Aa(b), Mk(this, b), e = null);
                        break;
                    case 'STOP':
                        _.G(M,
                            'Dispatching MediaManager stop event');
                        b = new Dk('stop', b, a);
                        this.Pa && this.Pa(b);
                        Mk(this, b);
                        e = null;
                        break;
                    case 'PAUSE':
                        _.G(M, 'Dispatching MediaManager pause event');
                        b = new Dk('pause', b, a);
                        this.ba && this.ba(b);
                        Mk(this, b);
                        e = null;
                        break;
                    case 'SKIP_AD':
                        _.G(M, 'Dispatching MediaManager skip ad event');
                        e = new Dk('skipad', b, a);
                        this.Ca ? this.Ca(e) : this.Ha(a, b.requestId, 'INVALID_REQUEST', 'NOT_SUPPORTED');
                        Mk(this, e);
                        e = null;
                        break;
                    case 'SET_VOLUME':
                        !b.volume || void 0 === b.volume.level && void 0 === b.volume.muted ? (_.D(M, 'volume is invalid'),
                        e = {
                            type: 'INVALID_REQUEST',
                            reason: 'INVALID_PARAMS',
                        }) : void 0 != b.volume.level && b.volume.level < 0 || b.volume.level > 1 ? (_.D(M, 'volume level is invalid'), e = {
                            type: 'INVALID_REQUEST',
                            reason: 'INVALID_PARAMS',
                        }) : (_.G(M, 'Dispatching MediaManager setvolume event'), b = new Dk('setvolume', b, a), this.yf && this.yf(b), Mk(this, b), e = null);
                        break;
                    case 'EDIT_TRACKS_INFO':
                        _.G(M, 'Dispatching MediaManager editTracksInfo event');
                        qk(this.j.media.tracks, b.activeTrackIds) ? (e = new Dk('edittracksinfo', b, a), b.textTrackStyle && (this.j.media.textTrackStyle = b.textTrackStyle), b.activeTrackIds && (this.j.activeTrackIds = b.activeTrackIds), this.rd && this.rd(e), Mk(this, e), e = null) : (_.D(M, 'Invalid track info'), e = {
                            type: 'INVALID_REQUEST',
                            reason: 'INVALID_PARAMS',
                        });
                        break;
                    case 'EDIT_AUDIO_TRACKS':
                        _.G(M, 'Dispatching MediaManager editAudioTracks event');
                        b = new Dk('editaudiotracks', b, a);
                        this.eb && this.eb(b);
                        Mk(this, b);
                        e = null;
                        break;
                    case 'QUEUE_LOAD':
                        this.Z = !0;
                        _.G(M, 'Dispatching MediaManager queueLoad event');
                        Kj(this.l, b) ? (b.items = Xk(b.items), b = new Dk('queueload', b, a), this.nf
                            && this.nf(b), Mk(this, b), e = null) : e = {
                            type: 'INVALID_REQUEST',
                            reason: 'INVALID_PARAMS',
                        };
                        break;
                    case 'QUEUE_INSERT':
                        this.Z = !0;
                        _.G(M, 'Dispatching MediaManager queueInsert event');
                        e = !1;
                        if (Sj(this.l)) {
                            if (b.items && b.items.length != 0) {
                                if (void 0 !== b.currentItemId && void 0 !== b.currentItemIndex) _.D(M, 'Maximum one currentItem must be provided'), e = !0;
                                else if (void 0 !== b.currentItemIndex && (typeof b.currentItemIndex !== 'number' || b.currentItemIndex < 0 || b.currentItemIndex >= b.items.length)) _.D(M, 'Invalid currentItemIndex'), e = !0;
                                else if (void 0 !== b.currentItemId && (typeof b.currentItemId !== 'number' || b.currentItemId < 0)) _.D(M, 'Invalid currentItemId'), e = !0;
                                else {
                                    for (c = 0; c < b.items.length; c++) {
                                        if (typeof b.items[c].itemId === 'number') {
                                            _.D(M, `Item contains an itemId at index: ${c}`);
                                            e = !0;
                                            break;
                                        } else b.items[c].itemId = this.Kj();
                                    }
                                    al(this, b) || (e = !0);
                                }
                            } else _.D(M, 'No items to insert'), e = !0;
                        } else _.D(M, 'Queue does not exist'), e = !0;
                        e ? e = {
                            type: 'INVALID_REQUEST',
                            reason: 'INVALID_PARAMS',
                        } : (b.items = Xk(b.items), b = new Dk('queueinsert', b, a), this.lf && this.lf(b),
                        Mk(this, b), e = null);
                        break;
                    case 'QUEUE_UPDATE':
                        e = bl(this, a, b);
                        break;
                    case 'QUEUE_REMOVE':
                        _.G(M, 'Dispatching MediaManager queueRemove event');
                        e = !1;
                        Sj(this.l) ? b.itemIds && b.itemIds.length != 0 ? Vk(b.itemIds) || (e = !0) : (_.D(M, 'No itemIds to remove'), e = !0) : (_.D(M, 'Queue does not exist'), e = !0);
                        e ? e = {
                            type: 'INVALID_REQUEST',
                            reason: 'INVALID_PARAMS',
                        } : (b.itemIds && (b.itemIds = Uj(this.l, b.itemIds)), b = new Dk('queueremove', b, a), this.sf && this.sf(b), Mk(this, b), e = null);
                        break;
                    case 'QUEUE_REORDER':
                        _.G(M, 'Dispatching MediaManager queueReorder event');
                        e = !1;
                        Sj(this.l) ? b.itemIds && b.itemIds.length != 0 ? Vk(b.itemIds) ? void 0 !== b.insertBefore && _.bb(b.itemIds, b.insertBefore) ? (_.D(M, 'insertBefore can not be one of the reordered items'), e = !0) : al(this, b) || (e = !0) : e = !0 : (_.D(M, 'No itemIds to reorder'), e = !0) : (_.D(M, 'Queue does not exist'), e = !0);
                        e ? e = {
                            type: 'INVALID_REQUEST',
                            reason: 'INVALID_PARAMS',
                        } : (b.itemIds && (b.itemIds = Uj(this.l, b.itemIds)), b = new Dk('queuereorder', b, a), this.xf && this.xf(b), Mk(this, b), e = null);
                        break;
                    case 'PRECACHE':
                        b = new Dk('precache', b, '__broadcast__');
                        this.Zf && this.Zf(b);
                        Mk(this, b);
                        break;
                    case 'QUEUE_NEXT':
                        c = new gl();
                        c.jump = 1;
                        c.requestId = b.requestId;
                        bl(this, a, c);
                        break;
                    case 'QUEUE_PREV':
                        c = new gl();
                        c.jump = -1;
                        c.requestId = b.requestId;
                        bl(this, a, c);
                        break;
                    case 'QUEUE_GET_ITEM_RANGE':
                        b = new Dk('getitemsrange', b, a);
                        this.Li && this.Li(b);
                        Mk(this, b);
                        break;
                    case 'QUEUE_GET_ITEMS':
                        b = new Dk('getitemsinfo', b, a);
                        this.Vi && this.Vi(b);
                        Mk(this, b);
                        break;
                    case 'QUEUE_GET_ITEM_IDS':
                        b = new Dk('getqueueids', b, a);
                        this.Wi && this.Wi(b);
                        Mk(this, b);
                        break;
                    case 'QUEUE_SHUFFLE':
                        b = new Dk('shuffle',
                            b, a);
                        this.Xi && this.Xi(b);
                        Mk(this, b);
                        break;
                    case 'USER_ACTION':
                        c = new Dk('useraction', b, a);
                        this.ei ? this.ei(c) : this.Ha(a, b.requestId, 'INVALID_REQUEST', 'NOT_SUPPORTED');
                        Mk(this, c);
                        break;
                    case 'STORE_SESSION':
                        c = new Dk('storesession', b, a);
                        this.La ? this.La(c) : this.Ha(a, b.requestId, 'INVALID_REQUEST', 'NOT_SUPPORTED');
                        Mk(this, c);
                        break;
                    case 'RESUME_SESSION':
                        c = new Dk('resumesession', b, a);
                        this.xa ? this.xa(c) : this.Ha(a, b.requestId, 'INVALID_REQUEST', 'NOT_SUPPORTED');
                        Mk(this, c);
                        break;
                    default:
                        _.D(M, `Unexpected message type: ${c}`), e = {
                            type: 'INVALID_REQUEST',
                            reason: 'INVALID_COMMAND',
                        };
                }
                sk(this, e, a, d);
            }
        }
    };
    _.h.broadcastStatus = function (a, b, c, d) {
        const e = this;
        if (this.o) {
            qd(M, Ak, 'Sending broadcast status message');
            const f = function (g) {
                g != null && (g.status && _.Ha(g.status[0]) && (e.Tf = g.status[0].playerState), g.requestId = b || 0, e.B.send('*:*', g), yk(e), Fk(e, g));
            };
            a = vk(this, a, c, d);
            ik(a) ? a.then(f) : f(a);
        } else _.D(M, 'Not sending broadcast status message, state is invalid');
    };
    _.h.Rh = function (a) {
        qd(M, Ak, `Setting IDLE reason: ${a}`);
        this.L = a;
    };
    _.h.Ha = function (a, b, c, d, e, f, g) {
        _.G(M, `Sending error message to ${a}`);
        const k = {};
        k.requestId = b;
        k.type = c;
        d && (k.reason = d);
        e && (k.customData = e);
        f && (k.detailedErrorCode = f);
        void 0 !== g && (k.itemId = g);
        this.B.send(a, k);
    };
    _.h.Df = function (a, b, c, d, e) {
        const f = this;
        if (this.o) {
            qd(M, Ak, `Sending status message to ${a}`);
            const g = function (k) {
                k != null && (k.requestId = b, f.B.send(a, k), yk(f));
            };
            c = vk(this, c, d, e);
            ik(c) ? c.then(g) : g(c);
        } else _.D(M, 'State is invalid'), this.Ha(a, b, 'INVALID_PLAYER_STATE', null, d);
    };
    _.h.kr = function (a) {
        return a;
    };
    _.h.load = function (a) {
        a.type = 'LOAD';
        rk(this, this.W, a);
    };
    _.h.xr = function (a) {
        a = a.data;
        if (a.media && (a.media.contentUrl || a.media.contentId)) {
            const b = void 0 !== a.autoplay ? a.autoplay : !0;
            const c = a.media.contentUrl || a.media.contentId;
            a.media.tracks ? this.o.load(c, b, a.currentTime, {
                tracks: a.media.tracks,
                activeTrackIds: a.activeTrackIds,
                textTrackStyle: a.media.textTrackStyle,
            }, void 0, a.playbackRate) : this.o.load(c, b, a.currentTime, void 0, void 0, a.playbackRate);
        }
    };
    _.h.Ib = function (a) {
        if (a != this.o) {
            this.o && (this.o.unregisterErrorCallback(), this.o.unregisterEndedCallback(), this.o.unregisterLoadCallback());
            (this.bb = a.getState ? !1 : !0) ? this.o = new wj(a) : this.o = a;
            this.o.registerErrorCallback(this.Am.bind(this));
            this.o.registerEndedCallback(this.zm.bind(this));
            this.o.registerLoadCallback(this.Bm.bind(this));
            const b = this.Ma;
            b.j && b.j.removeEventListener('resize', b.A);
            let c = null;
            a.tagName && a.tagName.toLowerCase() == 'video' ? c = a : (a = document.getElementsByTagName('video'), a.length
                == 1 && (c = a[0]));
            b.j = c;
            b.j && b.j.addEventListener('resize', b.A);
        }
    };
    _.h.Sh = function (a) {
        this.l.Sh(a);
    };
    _.h.Bm = function () {
        if (this.A) {
            _.G(M, 'Metadata loaded');
            if (this.j && this.j.media) {
                const a = this.o.getDurationSec(); a != -1 && Infinity != a || this.j.media.streamType && this.j.media.streamType != 'NONE' ? a == -1 || Infinity == a || this.j.media.streamType && this.j.media.streamType != 'NONE' || (_.F(M, 'Media streamType is initially set wrong, changed to buffered.'), this.j.media.streamType = 'BUFFERED') : (_.F(M, 'Media streamType is initially set wrong, changed to live.'), this.j.media.streamType = 'LIVE');
                this.j.media.duration = a;
                this.l.jc().media.duration = a;
                Jk(this, this.j.media, !0);
            }
            this.G = !0;
            this.Yf ? this.Yf(this.A) : Gk(this);
        }
    };
    _.h.yr = function (a) {
        this.bb && a.message && void 0 != a.message.currentTime && a.message.currentTime != this.o.getCurrentTimeSec() && this.o.seek(a.message.currentTime);
        zk(this);
    };
    _.h.Am = function (a) {
        if (this.A) _.D(M, `Load metadata error: ${JSON.stringify(a, ['type', 'reason', 'customData', 'detailedErrorCode'], 2)}`), this.Xf ? this.Xf(this.A, a) : Gk(this);
        else if (this.onError) this.onError(a);
    };
    _.h.qr = function (a) {
        Rk(this, a);
    };
    _.h.wr = function (a, b) {
        Rk(this, b);
    };
    _.h.zm = function () {
        this.Wf && this.Wf();
    };
    _.h.pr = function (a, b) {
        if (Sj(this.l)) {
            const c = this.Cf != -1 ? this.Cf : void 0;
            this.Cf = -1;
            Sk(this, this.l.A == 'REPEAT_SINGLE' ? 0 : 1, !1, c, void 0, void 0, void 0, void 0 === a ? 'FINISHED' : a, void 0 === b ? null : b);
        }
    };
    _.h.Cr = function (a, b) {
        Ik(this, a, !0, b);
    };
    _.h.ot = function (a, b, c, d, e, f, g, k) {
        g = g || 'INTERRUPTED';
        if (Sj(this.l) && bk(this.l, a, !1) != 'QUEUE_ENDED') {
            const l = bk(this.l, a, !0);
            _.G(M, `After ${a} jump, transition is: ${l}`);
            (a = Zk(this, this.l.jc(), void 0, f)) ? (this.j && (this.L = g, this.I = this.j, this.j = null, this.Rf = !0, this.R = [], l == 'QUEUE_SHUFFLED' && (e = !0)), b = this.broadcastStatus.bind(this, b, c, d, e), c = '', this.A && (a.requestId = this.A.message.requestId, c = this.A.senderId || c, this.A = null), Lk(this, c, a, !1, b, k)) : this.af && this.af(g, c);
        } else this.af && this.af(g, c);
    };
    _.h.vr = function (a) {
        qd(M, Ak, 'onGetStatus');
        const b = a.data;
        qd(M, Ak, `onGetStatus: ${JSON.stringify(b)}`);
        let c = !0;
        let d = !0;
        b.options && (b.options & 1 && (c = !1), b.options & 1 && (d = !1));
        this.Df(a.senderId, a.data.requestId, c, null, d);
    };
    _.h.Br = function (a) {
        qd(M, Ak, 'onPlay');
        this.o.play();
        this.broadcastStatus(!1, a.data.requestId);
    };
    _.h.Ar = function (a) {
        const b = this;
        qd(M, Ak, 'onPlayAgain');
        this.j ? Promise.resolve(this.o.seek(0)).then(function () {
            return b.o.play();
        }).then(function () {
            return b.broadcastStatus(!1, a.data.requestId);
        }) : this.F && (this.F.type = 'LOAD', this.F.autoplay = !0, rk(this, this.W, this.F));
    };
    _.h.Hr = function (a) {
        a = a.data;
        qd(M, Ak, `onSeek: ${JSON.stringify(a)}`);
        let b = void 0 !== a.relativeTime ? this.o.getCurrentTimeSec() + a.relativeTime : a.currentTime;
        this.o.seek(b, a.resumeState);
        this.o.getState() != 'PAUSED' && (this.G = !0);
        b = this.o.getDurationSec(); b == -1 || Infinity == b || this.o.getCurrentTimeSec() < this.o.getDurationSec() ? this.broadcastStatus(!1, a.requestId) : this.Cf = a.requestId;
    };
    _.h.Ir = function (a) {
        a = a.data;
        qd(M, Ak, `onSetPlaybackRate: ${JSON.stringify(a)}`);
        this.o.setPlaybackRate ? this.D = this.o.setPlaybackRate(Number(a.playbackRate ? a.playbackRate : this.D * a.relativePlaybackRate)) : _.F(M, 'setPlaybackRate is not supported');
        this.broadcastStatus(!1, a.requestId);
    };
    _.h.getPlaybackRate = function () {
        return this.D;
    };
    _.h.Lr = function (a) {
        Ik(this, 'CANCELLED', !0, a.data.requestId);
    };
    _.h.zr = function (a) {
        this.o.pause();
        this.broadcastStatus(!1, a.data.requestId);
    };
    _.h.Jr = function (a) {
        a = a.data;
        this.o.setVolume(a.volume);
        this.broadcastStatus(!1, a.requestId);
    };
    _.h.nr = function (a) {
        const b = a.data;
        let c;
        a: {
            let d = this.j.media.tracks;
            if (c = b.language) {
                if (d) {
                    d = _.q(d);
                    for (let e = d.next(); !e.done; e = d.next()) {
                        if (e = e.value, e.type == 'TEXT' && void 0 !== e.language && cast.receiver.vd(e.language, c)) {
                            c = !0;
                            break a;
                        }
                    }
                }
                c = !1;
            } else c = !0;
        }
        if (c) {
            if (!b.activeTrackIds && !b.language && void 0 !== b.enableTextTracks) {
                if (c = Uk(this, b)) b.activeTrackIds = c;
                else {
                    this.Ha(a.senderId, b.requestId, 'INVALID_REQUEST', 'INVALID_PARAMS');
                    return;
                }
            } a = {
                activeTrackIds: b.activeTrackIds,
                language: b.language,
                textTrackStyle: b.textTrackStyle,
            };
            this.o.editTracksInfo && (this.j.activeTrackIds = this.o.editTracksInfo(a) || void 0);
            this.broadcastStatus(b.textTrackStyle ? !0 : !1, b.requestId);
        } else _.D(M, 'Invalid track language'), this.Ha(a.senderId, b.requestId, 'INVALID_REQUEST', 'LANGUAGE_NOT_SUPPORTED');
    };
    _.h.mr = function (a) {
        const b = a.data;
        let c;
        a: {
            let d = this.j.media.tracks;
            if (c = b.language) {
                if (d) {
                    d = _.q(d);
                    for (let e = d.next(); !e.done; e = d.next()) {
                        if (e = e.value, e.type == 'AUDIO' && void 0 !== e.language && cast.receiver.vd(e.language, c)) {
                            c = !0;
                            break a;
                        }
                    }
                }
                c = !1;
            } else c = !0;
        }
        c ? (this.o.hd && (this.j.activeTrackIds = this.o.hd(b)), this.broadcastStatus(!1, b.requestId)) : (_.D(M, 'Invalid audio track language'), this.Ha(a.senderId, b.requestId, 'INVALID_REQUEST', 'LANGUAGE_NOT_SUPPORTED'));
    };
    _.h.Er = function (a) {
        const b = a.data;
        const c = Zk(this, b.items ? b.items[b.startIndex || 0] : null, b.requestId, b.currentTime);
        const d = new Me();
        d.items = b.items;
        d.startIndex = b.startIndex || 0;
        d.startTime = b.currentTime;
        d.repeatMode = b.repeatMode || 'REPEAT_OFF';
        c.queueData = d;
        c ? Lk(this, a.senderId, c, !0) : _.D(M, 'Queue Load request is invalid');
    };
    _.h.Dr = function (a) {
        a = a.data;
        _.G(M, `Queue insert data: ${JSON.stringify(a)}`);
        let b = !1;
        void 0 !== a.currentItemId && (b = Yj(this.l, a.currentItemId));
        void 0 !== a.currentItemIndex && (b = !0);
        const c = this.l.ih(a.items, a.insertBefore, a.currentItemIndex);
        cl(this, 'INSERT', c, a.insertBefore);
        b ? Sk(this, 0, !0, a.requestId, a.customData, !0, a.currentTime) : this.broadcastStatus(!0, a.requestId, a.customData, !0);
    };
    _.h.rr = function (a) {
        const b = this;
        const c = a.data;
        this.l.fetchItems(c.requestId, c.itemId, c.nextCount, c.prevCount).then(function (d) {
            Ok(b, d, a.senderId, c);
        }, function () {
            sk(b, {
                type: 'INVALID_REQUEST',
                reason: 'INVALID_COMMAND',
            }, a.senderId, c.requestId);
        });
    };
    _.h.sr = function (a) {
        let b = a.data;
        const c = this.B;
        const d = c.send;
        a = a.senderId;
        const e = this.l;
        let f = b.itemIds;
        const g = new Se();
        g.requestId = b.requestId;
        g.items = [];
        if (e.j) {
            for (b = _.q(f), f = b.next(); !f.done; f = b.next()) {
                f = f.value;
                for (let k = _.q(e.j), l = k.next(); !l.done; l = k.next()) {
                    if (l = l.value, l.itemId == f) {
                        g.items.push(l);
                        break;
                    }
                } _.F(Lj, `Unknown item id: ${f}`);
            }
        }
        g.sequenceNumber = Nj(e, !1);
        d.call(c, a, g);
    };
    _.h.ur = function (a) {
        this.B.send(a.senderId, Oj(this.l, a.data.requestId));
    };
    _.h.Kr = function (a) {
        const b = this;
        const c = a.data;
        this.l.shuffle().then(function () {
            b.broadcastStatus(!1, c.requestId, c.customData, !0);
        });
    };
    _.h.Cj = function (a) {
        const b = this;
        const c = a.data;
        if (this.Z) {
            if (_.G(M, `Queue update data: ${JSON.stringify(c)}`), al(this, c)) {
                let d = !1;
                let e = !1;
                typeof c.currentItemId === 'number' && (e = Yj(this.l, c.currentItemId));
                typeof c.jump === 'number' && (e = !0, this.V && (d = !0));
                c.repeatMode && Tj(this.l, c.repeatMode);
                if (c.items && c.items.length > 0) {
                    this.l.Zh(c.items);
                    d = !0;
                    var f = 'ITEMS_CHANGE';
                    var g = c.items.map(function (k) {
                        return k.itemId;
                    });
                }
                void 0 !== c.shuffle ? (c.shuffle ? this.l.shuffle() : this.l.he()).then(function () {
                    e = !0;
                    f = 'UPDATE';
                    g = b.l.Gc().map(function (k) {
                        return k.itemId;
                    });
                    dl(b, e, f, g, d, c);
                }) : dl(this, e, f, g, d, c);
            } else this.Ha(a.senderId, c.requestId, 'INVALID_REQUEST', 'INVALID_PARAMS');
        } else a = a.senderId, c.repeatMode && !c.jump ? (Tj(this.l, c.repeatMode), _.G(M, 'repeatMode set. The rest of QUEUE_UPDATE was ignored.')) : a == cast.receiver.Kc.xe && this.wa == this.Cj ? this.Ha(a, c.requestId, 'INVALID_REQUEST', 'INVALID_COMMAND') : (_.G(M, 'QUEUE_UPDATE request ignored'), this.broadcastStatus(!1, c.requestId));
    };
    _.h.Fr = function (a) {
        a = a.data;
        _.G(M, `Queue remove data: ${JSON.stringify(a)}`);
        let b = !1;
        typeof a.currentItemId === 'number' && (b = Yj(this.l, a.currentItemId));
        a.itemIds && a.itemIds.length != 0 ? (b = b || this.l.Kh(a.itemIds), cl(this, 'REMOVE', a.itemIds), b ? Sk(this, 0, !1, a.requestId, a.customData, !0, a.currentTime) : this.broadcastStatus(!1, a.requestId, a.customData, !0)) : _.D(M, 'No itemIds to remove');
    };
    _.h.Gr = function (a) {
        a = a.data;
        _.G(M, `Queue reorder data: ${JSON.stringify(a)}`);
        let b = !1;
        let c = !1;
        typeof a.currentItemId === 'number' && (c = Yj(this.l, a.currentItemId));
        a.itemIds && a.itemIds.length > 0 && (Zj(this.l, a.itemIds, a.insertBefore), b = !0);
        const d = this.l.Gc().map(function (e) {
            return e.itemId;
        });
        cl(this, 'UPDATE', d, a.insertBefore, a.itemIds);
        c ? Sk(this, 0, !1, a.requestId, a.customData, b, a.currentTime) : this.broadcastStatus(!1, a.requestId, a.customData, b);
    };
    _.h.addEventListener = function (a, b) {
        _.Nc(this.di, a, b);
    };
    _.h.removeEventListener = function (a, b) {
        Yc(this.di, a, b);
    };
    _.h.dispatchEvent = function (a) {
        return Mk(this, a);
    };
    var M = _.B('cast.receiver.MediaManager');
    _.r(Dk, _.A);
    _.r(Yk, $k);
    _.r(Ck, Yk);
    _.r(el, $k);
    _.r(fl, $k);
    _.r(gl, $k);
    _.r(hl, $k);
    const $A = _.B('cast.receiver.ui.ControlsImplementationHelper');
    var sl = _.B('cast.receiver.ui.ControlsMessageHelper');
    Wg(_.Vg.M(), cast.receiver.Pb.cc, 'JSON');
    ql.prototype.j = function (a) {
        if (a.type === 'SHUTDOWN') this.D.stop();
        else {
            if (!this.o) throw Error('Media channel is not set');
            if (!this.A && a.type !== 'LOAD') throw Error('Invalid Media Session Id');
            a.mediaSessionId = this.A;
            Hg(this.o, cast.receiver.media.ob, this.B, this.o.I(a));
        }
    };
    ql.prototype.I = function (a) {
        if (!this.l) throw Error('Command and control channel is not set');
        Hg(this.l, cast.receiver.Pb.cc, this.B, this.l.I(a));
    };
    cast.receiver.C.Zl = function (a) {
        a.innerHTML = "<style>@import url(//fonts.googleapis.com/css?family=Google+Sans:400,500);html{--cast-controls-horizontal-padding:56px;--cast-controls-safe-area-height:calc(100vh - 192px)}@media (min-width: 1200px){html{--cast-controls-horizontal-padding:112px;--cast-controls-safe-area-height:calc(100vh - 240px)}}html[data-cast-extended-controls='true']{--cast-controls-safe-area-height:calc(100vh - 262px)}@media (min-width: 1200px){html[data-cast-extended-controls='true']{--cast-controls-safe-area-height:calc(100vh - 335px)}}body{overflow:hidden !important}</style>";
    };
    _.Qa(tl, _.z);
    _.h = tl.prototype;
    _.h.start = function () {
        this.stop();
        this.A = !1;
        const a = ul(this);
        const b = vl(this);
        a && !b && this.l.mozRequestAnimationFrame ? (this.j = _.Nc(this.l, 'MozBeforePaint', this.o), this.l.mozRequestAnimationFrame(null), this.A = !0) : this.j = a && b ? a.call(this.l, this.o) : this.l.setTimeout(Ya(this.o), 20);
    };
    _.h.stop = function () {
        if (this.isActive()) {
            const a = ul(this);
            const b = vl(this);
            a && !b && this.l.mozRequestAnimationFrame ? _.Zc(this.j) : a && b ? b.call(this.l, this.j) : this.l.clearTimeout(this.j);
        }
        this.j = null;
    };
    _.h.isActive = function () {
        return this.j != null;
    };
    _.h.Cm = function () {
        this.A && this.j && _.Zc(this.j);
        this.j = null;
        this.D.call(this.B, _.Pa());
    };
    _.h.ka = function () {
        this.stop();
        tl.yb.ka.call(this);
    };
    _.Qa(wl, _.z);
    _.h = wl.prototype;
    _.h.Hd = 0;
    _.h.ka = function () {
        wl.yb.ka.call(this);
        this.stop();
        delete this.j;
        delete this.l;
    };
    _.h.start = function (a) {
        this.stop();
        this.Hd = _.qe(this.o, void 0 !== a ? a : this.A);
    };
    _.h.stop = function () {
        this.isActive() && _.u.clearTimeout(this.Hd);
        this.Hd = 0;
    };
    _.h.isActive = function () {
        return this.Hd != 0;
    };
    _.h.Dm = function () {
        this.Hd = 0;
        this.j && this.j.call(this.l);
    };
    var xl = {};
    var Al = null;
    var yl = null;
    _.Qa(El, _.bd);
    El.prototype.sb = function (a) {
        this.dispatchEvent(a);
    };
    _.Qa(Fl, El);
    _.h = Fl.prototype;
    _.h.play = function (a) {
        if (a || this.j == 0) this.progress = 0, this.coords = this.l;
        else if (this.j == 1) return !1;
        zl(this);
        this.startTime = a = _.Pa(); this.j == -1 && (this.startTime -= this.duration * this.progress);
        this.endTime = this.startTime + this.duration;
        this.o = this.startTime;
        this.progress || this.sb('begin');
        this.sb('play'); this.j == -1 && this.sb('resume');
        this.j = 1;
        const b = _.Ka(this);
        b in xl || (xl[b] = this);
        Cl();
        Dl(this, a);
        return !0;
    };
    _.h.stop = function (a) {
        zl(this);
        this.j = 0;
        a && (this.progress = 1);
        Gl(this, this.progress);
        this.sb('stop');
        this.sb('end');
    };
    _.h.pause = function () {
        this.j == 1 && (zl(this), this.j = -1, this.sb('pause'));
    };
    _.h.ka = function () {
        this.j == 0 || this.stop(!1);
        this.sb('destroy');
        Fl.yb.ka.call(this);
    };
    _.h.sb = function (a) {
        this.dispatchEvent(new Hl(a, this));
    };
    _.Qa(Hl, _.A);
    Jl.prototype.clone = function () {
        return new Jl(this.j, this.F, this.o, this.B, this.A, this.D, this.l, this.H);
    };
    var Sl = dm();
    _.r(Ml, _.bd);
    _.r(Pl, _.A);
    _.r(Wl, _.A);
    _.r(Tl, _.A);
    _.r(Ul, _.A);
    var Jp = {
        SCROLL_LEFT: 'SCROLL_LEFT',
        SCROLL_RIGHT: 'SCROLL_RIGHT',
        Iw: 'SCROLL_UP',
        Hw: 'SCROLL_DOWN',
    };
    const aB = {};
    var hm = (aB.REPEAT_OFF = {
        state: 'off',
        accessibilityText: cast.receiver.Y.wo,
    }, aB.REPEAT_ALL = {
        state: 'all',
        accessibilityText: cast.receiver.Y.vo,
    }, aB.REPEAT_SINGLE = {
        state: 'single',
        accessibilityText: cast.receiver.Y.xo,
    }, aB);
    _.r(gm, cast.receiver.C.bc);
    _.r(im, cast.receiver.C.bc);
    cast.receiver.C.Zm = function (a) {
        a.innerHTML = '<style>.break-countdown{position:absolute;bottom:4.6875vw;left:5.72916667vw;z-index:-1;font-size:1.25vw;text-shadow:0 .10416667vw .20833333vw rgba(0,0,0,0.5);color:rgba(255,255,255,0.7)}.break-countdown .ad-label{border-radius:.15625vw;font-weight:bold;padding:.15625vw .3125vw;background-color:#fbbc04;text-shadow:none;color:#fff;margin-right:.41666667vw}.touch-layer.new-dpad-controls-overlay .break-countdown{bottom:3.54166667vw}.break-skip{color:#b8bdbe;background-color:#303134;outline:none;position:absolute;bottom:3.64583333vw;right:5.72916667vw;font-size:1.19791667vw;font-weight:500;padding:0 2.5vw;height:3.33333333vw;display:flex;align-items:center;justify-content:center;flex-direction:row;border-radius:1.66666667vw}.break-skip .break-skip-scrim,.break-skip .break-skip-highlight,.break-skip .skip-ad-icon{display:none}.break-skip.focused{color:#080808;background-color:#e8eaed}.break-skip.break-skip-btn-countdown{min-width:5.72916667vw;color:rgba(255,255,255,0.7);text-shadow:0 .10416667vw .20833333vw rgba(0,0,0,0.5);background-color:transparent}.touch-layer.new-dpad-controls-overlay .break-skip{bottom:2.5vw}.break-skip .skip-ad-text{-webkit-font-smoothing:antialiased}.loading-bar{--loading-bar-width:1000px;height:100%;overflow:hidden;position:relative;transform:translateZ(0);transition:opacity 250ms linear;width:1000px}.loading-bar .rect,.loading-bar .rect-inner{height:100%;position:absolute;width:1000px}.loading-bar .rect{transform-origin:top left}.loading-bar .rect-primary{transform:scaleX(0)}.loading-bar .rect-inner{background-color:#9aa0a6;display:inline-block}.loading-bar .rect-primary{animation:primary-indeterminate-translate 2s infinite linear}.loading-bar .rect-primary>.rect-inner{animation:primary-indeterminate-scale 2s infinite linear}.loading-bar .rect-auxiliary{animation:auxiliary-indeterminate-translate 2s infinite linear}.loading-bar .rect-auxiliary>.rect-inner{animation:auxiliary-indeterminate-scale 2s infinite linear}@keyframes primary-indeterminate-translate{0%{transform:translateX(-1451.66611px)}20%{animation-timing-function:cubic-bezier(.5, 0, .701732, .495819);transform:translateX(-1451.66611px)}59.15%{animation-timing-function:cubic-bezier(.302435, .381352, .55, .956352);transform:translateX(-614.95191px)}100%{transform:translateX(554.44446px)}}@keyframes primary-indeterminate-scale{0%{transform:scaleX(.08)}36.65%{animation-timing-function:cubic-bezier(.334731, .12482, .785844, 1);transform:scaleX(.08)}69.15%{animation-timing-function:cubic-bezier(.06, .11, .6, 1);transform:scaleX(.661479)}100%{transform:scaleX(.08)}}@keyframes auxiliary-indeterminate-translate{0%{animation-timing-function:cubic-bezier(.15, 0, .515058, .409685);transform:translateX(-548.88891px)}25%{animation-timing-function:cubic-bezier(.31033, .284058, .8, .733712);transform:translateX(-172.36978px)}48.35%{animation-timing-function:cubic-bezier(.4, .627035, .6, .902026);transform:translateX(294.97274px)}100%{transform:translateX(1053.88891px)}}@keyframes auxiliary-indeterminate-scale{0%{animation-timing-function:cubic-bezier(.205028, .057051, .57661, .453971);transform:scaleX(.08)}19.15%{animation-timing-function:cubic-bezier(.152313, .196432, .648374, 1.004315);transform:scaleX(.457104)}44.15%{animation-timing-function:cubic-bezier(.257759, .003163, .211762, 1.38179);transform:scaleX(.72796)}100%{transform:scaleX(.08)}}:host{bottom:0;color:#e8eaed;font-family:\'Google Sans\',\'Roboto\',Arial,sans-serif;left:0;position:fixed;right:0;top:0;z-index:1000000}.controls-layer{display:flex;position:relative;flex-direction:column;justify-content:flex-start;height:100%;will-change:transform}.controls-toggle{position:absolute;width:100%;height:100%;top:0;left:0}.accessibility-alert,.controls-toggle{opacity:0;position:absolute;left:-9999px}.controls{box-sizing:border-box;flex:none;display:flex;flex-direction:column;justify-content:flex-end;padding:0 5.625vw 3.38541667vw}.scrim{bottom:0;height:100vh;left:0;position:absolute;width:100vw;z-index:-1}.buffering-scrim{bottom:0;height:100vh;left:0;position:absolute;width:100vw;z-index:-1;visibility:hidden;background:linear-gradient(to bottom, transparent 0, rgba(14,14,15,0.3) 78.7%, #0e0e0f 100%)}goog-video-metadata{display:none}goog-audio-player-compatibility{display:none;position:absolute}.has-secondary-image-audio .title,.has-secondary-image-audio .subtitle{padding-right:320px;width:auto !important}.touch-layer{height:100%;touch-action:manipulation;user-select:none;width:100%}.touch-layer .playback-layer{width:100%;height:100%}.touch-layer .media-browse-scrim{display:none}.touch-layer goog-media-browse{display:none}.touch-layer .scrim{background:linear-gradient(to bottom, rgba(32,33,36,0.3) 0, rgba(14,14,15,0.6) 38.5%, #0e0e0f 60%)}.touch-layer.new-dpad-controls-overlay .scrim{background:linear-gradient(to bottom, rgba(14,14,15,0.3) 0, rgba(32,33,36,0.3) .01%, rgba(14,14,15,0.6) 50%, #0e0e0f 74%)}.touch-layer goog-video-metadata{align-items:flex-start;box-sizing:border-box;display:flex;flex-direction:column;flex-grow:1;text-align:left;padding:6.35416667vw 5.72916667vw 1.45833333vw}.touch-layer.new-dpad-controls-overlay goog-video-metadata{padding-bottom:1.875vw}.touch-layer .logo{display:none}.touch-layer .top-right-video-overlay-image{display:none}.touch-layer .top-images-container{display:flex;flex-direction:row;width:100%}.touch-layer.video:not(.remote-controls) .top-right-video-overlay-image{max-width:280px;max-height:100px;display:block;margin-left:auto}.touch-layer .title{-webkit-line-clamp:2;-webkit-box-orient:vertical;-webkit-box-pack:end;display:-webkit-box;font-weight:500;overflow:hidden;word-break:break-word;width:auto;color:#f8f9fa;margin:0;font-size:3.75vw;line-height:4.375vw}.touch-layer.new-dpad-controls-overlay .title{color:#fff;font-size:2.1875vw;line-height:2.890625vw}.touch-layer.active .title{width:100%}.touch-layer .subtitle{font-weight:normal;margin-top:0;margin-bottom:.20833333vw;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;font-size:2.29166667vw;line-height:2.91666667vw}.touch-layer.new-dpad-controls-overlay .subtitle{color:#e8eaed;font-size:1.25vw;line-height:1.875vw;margin-bottom:.625vw}.touch-layer .subtitle-container{margin-top:auto;max-width:100%}.touch-layer.video:not(.remote-controls) goog-video-metadata,.touch-layer.photo:not(.remote-controls) goog-video-metadata,.touch-layer.audio:not(.default-player) goog-video-metadata,.touch-layer.video:not(.remote-controls) .controls,.touch-layer.photo:not(.remote-controls) .controls,.touch-layer.audio:not(.default-player) .controls{will-change:opacity,transform;opacity:0;transform:translateY(9.47916667vw);transition:transform 350ms cubic-bezier(.2, 0, 0, 1),visibility 0s 150ms,opacity 150ms cubic-bezier(0, 0, 1, 1);visibility:hidden}.touch-layer.video:not(.remote-controls).new-dpad-controls-overlay .controls,.touch-layer.photo:not(.remote-controls).new-dpad-controls-overlay .controls,.touch-layer.audio:not(.default-player).new-dpad-controls-overlay .controls{opacity:0;transform:translateY(6.25vw);transition:transform 350ms cubic-bezier(.2, 0, 0, 1),visibility 0s 150ms,opacity 150ms cubic-bezier(0, 0, 1, 1);visibility:hidden}.touch-layer.video:not(.remote-controls) .time-numbers,.touch-layer.photo:not(.remote-controls) .time-numbers,.touch-layer.audio:not(.default-player) .time-numbers,.touch-layer.video:not(.remote-controls) .play-pause-indicator,.touch-layer.photo:not(.remote-controls) .play-pause-indicator,.touch-layer.audio:not(.default-player) .play-pause-indicator,.touch-layer.video:not(.remote-controls) goog-buttons-bar,.touch-layer.photo:not(.remote-controls) goog-buttons-bar,.touch-layer.audio:not(.default-player) goog-buttons-bar{visibility:hidden}.touch-layer.video:not(.remote-controls) .play-pause-indicator,.touch-layer.photo:not(.remote-controls) .play-pause-indicator,.touch-layer.audio:not(.default-player) .play-pause-indicator{display:none}.touch-layer.video:not(.remote-controls) .scrim,.touch-layer.photo:not(.remote-controls) .scrim,.touch-layer.audio:not(.default-player) .scrim{will-change:opacity;opacity:0;transition:visibility 0s 150ms,opacity 150ms cubic-bezier(0, 0, 1, 1);visibility:hidden}.touch-layer.video:not(.remote-controls).active goog-video-metadata,.touch-layer.photo:not(.remote-controls).active goog-video-metadata,.touch-layer.audio:not(.default-player).active goog-video-metadata,.touch-layer.video:not(.remote-controls).active .controls,.touch-layer.photo:not(.remote-controls).active .controls,.touch-layer.audio:not(.default-player).active .controls{opacity:1;transform:translateY(0);transition:transform 400ms cubic-bezier(.2, 0, 0, 1),opacity 200ms cubic-bezier(0, 0, 1, 1);visibility:visible}.touch-layer.video:not(.remote-controls).active .time-numbers,.touch-layer.photo:not(.remote-controls).active .time-numbers,.touch-layer.audio:not(.default-player).active .time-numbers,.touch-layer.video:not(.remote-controls).active .play-pause-indicator,.touch-layer.photo:not(.remote-controls).active .play-pause-indicator,.touch-layer.audio:not(.default-player).active .play-pause-indicator,.touch-layer.video:not(.remote-controls).active goog-buttons-bar,.touch-layer.photo:not(.remote-controls).active goog-buttons-bar,.touch-layer.audio:not(.default-player).active goog-buttons-bar{visibility:visible}.touch-layer.video:not(.remote-controls).active .play-pause-indicator:not(.hidden),.touch-layer.photo:not(.remote-controls).active .play-pause-indicator:not(.hidden),.touch-layer.audio:not(.default-player).active .play-pause-indicator:not(.hidden){display:inline-block}.touch-layer.video:not(.remote-controls).active .scrim,.touch-layer.photo:not(.remote-controls).active .scrim,.touch-layer.audio:not(.default-player).active .scrim{opacity:1;transition:opacity 200ms cubic-bezier(0, 0, 1, 1);visibility:visible}.touch-layer.video:not(.remote-controls).default-player.buffering .buffering-scrim{visibility:visible}.touch-layer.video:not(.remote-controls).default-player.buffering .buffering-scrim{visibility:visible}.touch-layer.video:not(.remote-controls).default-player.buffering .controls{opacity:1;visibility:visible}.touch-layer.audio.default-player goog-audio-player-compatibility,.touch-layer.remote-controls goog-audio-player-compatibility{display:block}.touch-layer.audio.default-player .scrim,.touch-layer.remote-controls .scrim{display:none}.touch-layer.audio.default-player goog-video-metadata,.touch-layer.remote-controls goog-video-metadata,.touch-layer.audio.default-player goog-timeline,.touch-layer.remote-controls goog-timeline{will-change:transform;transform:translateY(36px);transition:transform 350ms cubic-bezier(.2, 0, 0, 1)}.touch-layer.audio.default-player .time-numbers,.touch-layer.remote-controls .time-numbers,.touch-layer.audio.default-player .slot:not(.device-controller-slot),.touch-layer.remote-controls .slot:not(.device-controller-slot){opacity:0;transition:visibility 0s 200ms,opacity 200ms cubic-bezier(0, 0, 1, 1);visibility:hidden}.touch-layer.audio.default-player.active goog-video-metadata,.touch-layer.remote-controls.active goog-video-metadata,.touch-layer.audio.default-player.active goog-timeline,.touch-layer.remote-controls.active goog-timeline{transform:translateY(var(--media-browse-controls-offset, 0));transition:transform 400ms cubic-bezier(.2, 0, 0, 1)}.touch-layer.audio.default-player.active .time-numbers,.touch-layer.remote-controls.active .time-numbers,.touch-layer.audio.default-player.active .slot:not(.device-controller-slot),.touch-layer.remote-controls.active .slot:not(.device-controller-slot){opacity:1;transition:opacity 200ms cubic-bezier(0, 0, 1, 1);visibility:visible}.touch-layer.audio .break-countdown,.touch-layer.remote-controls .break-countdown{display:none}.touch-layer.photo:not(.remote-controls) .playback-layer,.touch-layer.disabled .playback-layer{display:none !important}goog-buttons-bar{align-items:center;display:grid;grid-column-gap:3.90625vw;grid-template-columns:[dc] 5.208333333333334vw 5.208333333333334vw 1fr [pr1] 5.208333333333334vw [center] 5.208333333333334vw [pr2] 5.208333333333334vw 1fr [sec1] 5.208333333333334vw [sec2] 5.208333333333334vw;flex:none;justify-content:center;margin-top:.78125vw}.touch-layer.new-dpad-controls-overlay goog-buttons-bar{display:flex;justify-content:space-between}.btn{height:5.20833333vw;width:5.20833333vw;border-radius:2.60416667vw;display:flex;justify-content:center;align-items:center;outline:none}.btn.focused{background-color:#e8eaed}.touch-layer.new-dpad-controls-overlay goog-buttons-bar .btn{height:2.91666667vw;margin-left:.67708333vw;width:2.91666667vw;border-radius:50%}.btn-icon{height:3.125vw;width:3.125vw}.touch-layer.new-dpad-controls-overlay goog-buttons-bar .btn-icon{height:2.08333333vw;width:2.08333333vw}.btn[aria-disabled=true]{pointer-events:none}.btn[aria-disabled=true] .btn-icon{opacity:.5}.controls-buttons{align-items:center;display:flex;height:2.08333333vw}.controls-buttons .slot:empty{display:none}.controls-buttons.slot.center{display:none}.slot.center{grid-column:center}.slot.slot-primary-1{grid-column:pr1}.slot.slot-primary-2{grid-column:pr2}.slot.slot-secondary-1{grid-column:sec1}.slot.slot-secondary-2{grid-column:sec2}goog-buttons-bar.secondary-2-empty .slot.slot-secondary-1{grid-column:sec2}goog-buttons-bar.secondary-2-empty .slot.slot-secondary-2{display:none}.btn-play-pause[data-state=\'playing\'] .btn-icon{content:url("data:image/svg+xml,%3Csvg%20width=%2760%27%20height=%2760%27%20xmlns=%27http://www.w3.org/2000/svg%27%3E%3Cpath%20fill=%27%23e8eaed%27%20d=%27M14%2012h10v36H14zm22%200h10v36H36z%27/%3E%3C/svg%3E%0A")}.btn-play-pause[data-state=\'paused\'] .btn-icon{content:url("data:image/svg+xml,%3Csvg%20width=%2760%27%20height=%2760%27%20xmlns=%27http://www.w3.org/2000/svg%27%3E%3Cpath%20fill=%27%23e8eaed%27%20d=%27M20%2012.5v35L47.5%2030z%27/%3E%3C/svg%3E%0A")}.btn-play-pause.focused[data-state=\'playing\'] .btn-icon{content:url("data:image/svg+xml,%3Csvg%20width=%2760%27%20height=%2760%27%20xmlns=%27http://www.w3.org/2000/svg%27%3E%3Cpath%20d=%27M14%2012h10v36H14zm22%200h10v36H36z%27/%3E%3C/svg%3E%0A")}.btn-play-pause.focused[data-state=\'paused\'] .btn-icon{content:url("data:image/svg+xml,%3Csvg%20width=%2760%27%20height=%2760%27%20xmlns=%27http://www.w3.org/2000/svg%27%3E%3Cpath%20d=%27M20%2012.5v35L47.5%2030z%27/%3E%3C/svg%3E%0A")}.device-controller-slot{display:flex;grid-column:dc / span 3;align-items:center;width:auto}.device-controller-btn{display:flex;position:relative;justify-content:center;align-items:center;box-sizing:border-box;padding-right:16px;height:64px}.touch-layer.new-dpad-controls-overlay goog-buttons-bar .device-controller-btn{height:2.08333333vw}.device-controller-label{-webkit-line-clamp:2;-webkit-box-orient:vertical;-webkit-box-pack:end;display:-webkit-box;overflow:hidden;font-size:19px;line-height:24px;margin:0 8px 0 7px;word-break:break-word}.touch-layer.new-dpad-controls-overlay goog-buttons-bar .device-controller-label{font-size:.83333333vw;line-height:auto}.device-controller-icon{content:url("data:image/svg+xml,%3Csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20viewBox=%270%200%2048%2048%27%3E%0A%20%20%3Cpath%0A%20%20%20%20%20%20d=%27M41%2C8H7a3%2C3%2C0%2C0%2C0-3%2C3.06V16.5a1.5%2C1.5%2C0%2C0%2C0%2C3%2C0V11l34%2C.06V36H26.5a1.5%2C1.5%2C0%2C0%2C0%2C0%2C3H41a3%2C3%2C0%2C0%2C0%2C3-3.06V11.06A3%2C3%2C0%2C0%2C0%2C41%2C8Z%27%0A%20%20%20%20%20%20fill=%27%23FFF%27/%3E%0A%20%20%3Cpath%20d=%27M5.5%2C27.5a1.5%2C1.5%2C0%2C0%2C0%2C0%2C3%2C7%2C7%2C0%2C0%2C1%2C7%2C7%2C1.5%2C1.5%2C0%2C0%2C0%2C3%2C0A10%2C10%2C0%2C0%2C0%2C5.5%2C27.5Z%27%0A%20%20%20%20%20%20fill=%27%23FFF%27/%3E%0A%20%20%3Cpath%0A%20%20%20%20%20%20d=%27M5.5%2C21a1.5%2C1.5%2C0%2C0%2C0%2C0%2C3A13.52%2C13.52%2C0%2C0%2C1%2C19%2C37.5a1.5%2C1.5%2C0%2C0%2C0%2C3%2C0A16.52%2C16.52%2C0%2C0%2C0%2C5.5%2C21Z%27%0A%20%20%20%20%20%20fill=%27%23FFF%27/%3E%0A%20%20%3Ccircle%20cx=%276.55%27%20cy=%2736.5%27%20r=%272.5%27%20fill=%27%23FFF%27/%3E%0A%3C/svg%3E%0A");width:26px;height:26px}.device-controller-icon[connected]{content:url("data:image/svg+xml,%3Csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20viewBox=%270%200%2048%2048%27%3E%0A%20%20%3Cpath%0A%20%20%20%20%20%20d=%27M41%2C8H7a3%2C3%2C0%2C0%2C0-3%2C3.06V16.5a1.5%2C1.5%2C0%2C0%2C0%2C3%2C0V11l34%2C.06V36H26.5a1.5%2C1.5%2C0%2C0%2C0%2C0%2C3H41a3%2C3%2C0%2C0%2C0%2C3-3.06V11.06A3%2C3%2C0%2C0%2C0%2C41%2C8Z%27%0A%20%20%20%20%20%20fill=%27%23FFF%27/%3E%0A%20%20%3Cpath%0A%20%20%20%20%20%20d=%27M25.79%2C33H37a1%2C1%2C0%2C0%2C0%2C1-1V15a1%2C1%2C0%2C0%2C0-1-1H11a1%2C1%2C0%2C0%2C0-1%2C1v2.18a1%2C1%2C0%2C0%2C0%2C.8%2C1%2C19.55%2C19.55%2C0%2C0%2C1%2C14%2C14.07A1%2C1%2C0%2C0%2C0%2C25.79%2C33Z%27%0A%20%20%20%20%20%20fill=%27%23FFF%27/%3E%0A%20%20%3Cpath%20d=%27M5.5%2C27.5a1.5%2C1.5%2C0%2C0%2C0%2C0%2C3%2C7%2C7%2C0%2C0%2C1%2C7%2C7%2C1.5%2C1.5%2C0%2C0%2C0%2C3%2C0A10%2C10%2C0%2C0%2C0%2C5.5%2C27.5Z%27%0A%20%20%20%20%20%20fill=%27%23FFF%27/%3E%0A%20%20%3Cpath%0A%20%20%20%20%20%20d=%27M5.5%2C21a1.5%2C1.5%2C0%2C0%2C0%2C0%2C3A13.52%2C13.52%2C0%2C0%2C1%2C19%2C37.5a1.5%2C1.5%2C0%2C0%2C0%2C3%2C0A16.52%2C16.52%2C0%2C0%2C0%2C5.5%2C21Z%27%0A%20%20%20%20%20%20fill=%27%23FFF%27/%3E%0A%20%20%3Ccircle%20cx=%276.55%27%20cy=%2736.5%27%20r=%272.5%27%20fill=%27%23FFF%27/%3E%0A%3C/svg%3E%0A")}.btn-next .btn-icon{content:url("data:image/svg+xml,%3Csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20width=%2760%27%20height=%2760%27%3E%3Cpath%20fill=%27%23e8eaed%27%20d=%27M15%2045l21.25-15L15%2015v30zm25-30v30h5V15h-5z%27/%3E%3C/svg%3E%0A")}.btn-next.focused .btn-icon{content:url("data:image/svg+xml,%3Csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20width=%2760%27%20height=%2760%27%3E%3Cpath%20d=%27M15%2045l21.25-15L15%2015v30zm25-30v30h5V15h-5z%27/%3E%3C/svg%3E%0A")}.btn-back .btn-icon{content:url("data:image/svg+xml,%3Csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20width=%2760%27%20height=%2760%27%3E%3Cpath%20fill=%27%23e8eaed%27%20d=%27M15%2015h5v30h-5zm8.75%2015L45%2045V15z%27/%3E%3C/svg%3E%0A")}.btn-back.focused .btn-icon{content:url("data:image/svg+xml,%3Csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20width=%2760%27%20height=%2760%27%3E%3Cpath%20d=%27M15%2015h5v30h-5zm8.75%2015L45%2045V15z%27/%3E%3C/svg%3E%0A")}.btn-seek-forward-10 .btn-icon{content:url("data:image/svg+xml,%3Csvg%20width=%2760%27%20height=%2760%27%20xmlns=%27http://www.w3.org/2000/svg%27%3E%3Cpath%20d=%27M52.5%2032.5C52.5%2044.925%2042.425%2055%2030%2055S7.5%2044.925%207.5%2032.5%2017.575%2010%2030%2010c.525%200%201.05.05%201.55.1l-4.575-4.575L30.5%202l10.525%2010.5L30.5%2023.025%2026.975%2019.5l4.375-4.375C30.9%2015.075%2030.475%2015%2030%2015c-9.65%200-17.5%207.85-17.5%2017.5S20.35%2050%2030%2050s17.5-7.85%2017.5-17.5h5z%27%20fill=%27%23e8eaed%27/%3E%3Cpath%20d=%27M22.816%2029.74l-2.06%201.5-1.32-2.02%204.02-2.9h1.98V40h-2.62V29.74zm11.912%2010.58c-1.147%200-2.153-.307-3.02-.92-.867-.627-1.54-1.48-2.02-2.56-.467-1.093-.7-2.32-.7-3.68%200-1.36.233-2.58.7-3.66.48-1.093%201.153-1.947%202.02-2.56.867-.627%201.873-.94%203.02-.94s2.153.313%203.02.94c.867.613%201.533%201.467%202%202.56.48%201.08.72%202.3.72%203.66%200%201.36-.24%202.587-.72%203.68-.467%201.08-1.133%201.933-2%202.56-.867.613-1.873.92-3.02.92zm0-2.46c.64%200%201.193-.2%201.66-.6.48-.413.84-.973%201.08-1.68.253-.72.38-1.527.38-2.42%200-1.387-.28-2.513-.84-3.38-.56-.88-1.32-1.32-2.28-1.32-.947%200-1.7.44-2.26%201.32-.56.88-.84%202.007-.84%203.38%200%20.893.12%201.7.36%202.42.253.707.613%201.267%201.08%201.68.48.4%201.033.6%201.66.6z%27%20fill=%27%23e8eaed%27/%3E%3C/svg%3E%0A")}.btn-seek-forward-10.focused .btn-icon{content:url("data:image/svg+xml,%3Csvg%20width=%2760%27%20height=%2760%27%20xmlns=%27http://www.w3.org/2000/svg%27%3E%3Cpath%20d=%27M52.5%2032.5C52.5%2044.925%2042.425%2055%2030%2055S7.5%2044.925%207.5%2032.5%2017.575%2010%2030%2010c.525%200%201.05.05%201.55.1l-4.575-4.575L30.5%202l10.525%2010.5L30.5%2023.025%2026.975%2019.5l4.375-4.375C30.9%2015.075%2030.475%2015%2030%2015c-9.65%200-17.5%207.85-17.5%2017.5S20.35%2050%2030%2050s17.5-7.85%2017.5-17.5h5z%27/%3E%3Cpath%20d=%27M22.816%2029.74l-2.06%201.5-1.32-2.02%204.02-2.9h1.98V40h-2.62V29.74zm11.912%2010.58c-1.147%200-2.153-.307-3.02-.92-.867-.627-1.54-1.48-2.02-2.56-.467-1.093-.7-2.32-.7-3.68%200-1.36.233-2.58.7-3.66.48-1.093%201.153-1.947%202.02-2.56.867-.627%201.873-.94%203.02-.94s2.153.313%203.02.94c.867.613%201.533%201.467%202%202.56.48%201.08.72%202.3.72%203.66%200%201.36-.24%202.587-.72%203.68-.467%201.08-1.133%201.933-2%202.56-.867.613-1.873.92-3.02.92zm0-2.46c.64%200%201.193-.2%201.66-.6.48-.413.84-.973%201.08-1.68.253-.72.38-1.527.38-2.42%200-1.387-.28-2.513-.84-3.38-.56-.88-1.32-1.32-2.28-1.32-.947%200-1.7.44-2.26%201.32-.56.88-.84%202.007-.84%203.38%200%20.893.12%201.7.36%202.42.253.707.613%201.267%201.08%201.68.48.4%201.033.6%201.66.6z%27/%3E%3C/svg%3E%0A")}.btn-seek-forward-15 .btn-icon{content:url("data:image/svg+xml,%3Csvg%20width=%2760%27%20height=%2760%27%20xmlns=%27http://www.w3.org/2000/svg%27%3E%3Cpath%20d=%27M52.5%2032.5C52.5%2044.925%2042.425%2055%2030%2055S7.5%2044.925%207.5%2032.5%2017.575%2010%2030%2010c.525%200%201.05.05%201.55.1l-4.575-4.575L30.5%202l10.525%2010.5L30.5%2023.025%2026.975%2019.5l4.375-4.375C30.9%2015.075%2030.475%2015%2030%2015c-9.65%200-17.5%207.85-17.5%2017.5S20.35%2050%2030%2050s17.5-7.85%2017.5-17.5h5z%27%20fill=%27%23e8eaed%27/%3E%3Cpath%20d=%27M25.643%2040V26H23.62L19.5%2028.969l1.356%202.073%202.125-1.536V40h2.662zm8.682-2.425c-.65%200-1.175-.2-1.6-.6-.425-.4-.725-.925-.875-1.6l-2.35.925c.175.825.525%201.5%201.025%202.05.5.55%201.075.975%201.75%201.25s1.35.4%202.075.4c.925%200%201.775-.2%202.5-.6.725-.4%201.3-.95%201.725-1.65.425-.7.625-1.525.625-2.425%200-.9-.2-1.7-.6-2.4-.4-.7-.925-1.25-1.6-1.625s-1.375-.575-2.125-.575c-.925%200-1.725.275-2.375.825l-.15-.05.5-3.2h5.55V26h-7.725l-.775%206.85L32.45%2034c.225-.275.5-.5.825-.675.325-.175.7-.25%201.1-.25.65%200%201.2.225%201.6.65.425.425.625.975.625%201.6%200%20.65-.225%201.2-.65%201.625-.45.425-1%20.625-1.625.625z%27%20fill=%27%23e8eaed%27/%3E%3C/svg%3E%0A")}.btn-seek-forward-15.focused .btn-icon{content:url("data:image/svg+xml,%3Csvg%20width=%2760%27%20height=%2760%27%20xmlns=%27http://www.w3.org/2000/svg%27%3E%3Cpath%20d=%27M52.5%2032.5C52.5%2044.925%2042.425%2055%2030%2055S7.5%2044.925%207.5%2032.5%2017.575%2010%2030%2010c.525%200%201.05.05%201.55.1l-4.575-4.575L30.5%202l10.525%2010.5L30.5%2023.025%2026.975%2019.5l4.375-4.375C30.9%2015.075%2030.475%2015%2030%2015c-9.65%200-17.5%207.85-17.5%2017.5S20.35%2050%2030%2050s17.5-7.85%2017.5-17.5h5z%27/%3E%3Cpath%20d=%27M25.643%2040V26H23.62L19.5%2028.969l1.356%202.073%202.125-1.536V40h2.662zm8.682-2.425c-.65%200-1.175-.2-1.6-.6-.425-.4-.725-.925-.875-1.6l-2.35.925c.175.825.525%201.5%201.025%202.05.5.55%201.075.975%201.75%201.25s1.35.4%202.075.4c.925%200%201.775-.2%202.5-.6.725-.4%201.3-.95%201.725-1.65.425-.7.625-1.525.625-2.425%200-.9-.2-1.7-.6-2.4-.4-.7-.925-1.25-1.6-1.625s-1.375-.575-2.125-.575c-.925%200-1.725.275-2.375.825l-.15-.05.5-3.2h5.55V26h-7.725l-.775%206.85L32.45%2034c.225-.275.5-.5.825-.675.325-.175.7-.25%201.1-.25.65%200%201.2.225%201.6.65.425.425.625.975.625%201.6%200%20.65-.225%201.2-.65%201.625-.45.425-1%20.625-1.625.625z%27/%3E%3C/svg%3E%0A")}.btn-seek-forward-30 .btn-icon{content:url("data:image/svg+xml,%3Csvg%20width=%2760%27%20height=%2760%27%20fill=%27none%27%20xmlns=%27http://www.w3.org/2000/svg%27%3E%3Cpath%20d=%27M52.5%2032.5C52.5%2044.925%2042.425%2055%2030%2055S7.5%2044.925%207.5%2032.5%2017.575%2010%2030%2010c.525%200%201.05.05%201.55.1l-4.575-4.575L30.5%202l10.525%2010.5L30.5%2023.025%2026.975%2019.5l4.375-4.375C30.9%2015.075%2030.475%2015%2030%2015c-9.65%200-17.5%207.85-17.5%2017.5S20.35%2050%2030%2050s17.5-7.85%2017.5-17.5h5z%27%20fill=%27%23e8eaed%27/%3E%3Cpath%20d=%27M22.349%2040.32c-1.16%200-2.187-.307-3.08-.92-.88-.613-1.487-1.507-1.82-2.68l2.48-.98c.16.653.447%201.16.86%201.52.413.347.933.52%201.56.52.573%200%201.067-.173%201.48-.52.427-.347.64-.787.64-1.32%200-.573-.227-1.027-.68-1.36-.44-.347-1.04-.52-1.8-.52h-1.18v-2.38h1.08c.587%200%201.08-.147%201.48-.44.413-.293.62-.72.62-1.28%200-.453-.167-.827-.5-1.12-.334-.293-.76-.44-1.28-.44-.547%200-.987.147-1.32.44-.334.293-.567.66-.7%201.1l-2.38-.98c.28-.8.793-1.493%201.54-2.08.76-.587%201.72-.88%202.88-.88.853%200%201.613.16%202.28.48.68.32%201.206.76%201.58%201.32a3.22%203.22%200%2001.56%201.86c0%20.733-.174%201.36-.52%201.88-.334.52-.74.9-1.22%201.14v.16a3.606%203.606%200%20011.62%201.26c.413.573.62%201.267.62%202.08%200%20.787-.2%201.493-.6%202.12-.4.627-.967%201.12-1.7%201.48-.72.36-1.553.54-2.5.54zm13.246%200c-1.147%200-2.153-.307-3.02-.92-.867-.627-1.54-1.48-2.02-2.56-.467-1.093-.7-2.32-.7-3.68%200-1.36.233-2.58.7-3.66.48-1.093%201.153-1.947%202.02-2.56.867-.627%201.873-.94%203.02-.94s2.153.313%203.02.94c.867.613%201.533%201.467%202%202.56.48%201.08.72%202.3.72%203.66%200%201.36-.24%202.587-.72%203.68-.467%201.08-1.133%201.933-2%202.56-.867.613-1.873.92-3.02.92zm0-2.46c.64%200%201.193-.2%201.66-.6.48-.413.84-.973%201.08-1.68.253-.72.38-1.527.38-2.42%200-1.387-.28-2.513-.84-3.38-.56-.88-1.32-1.32-2.28-1.32-.947%200-1.7.44-2.26%201.32-.56.88-.84%202.007-.84%203.38%200%20.893.12%201.7.36%202.42.253.707.613%201.267%201.08%201.68.48.4%201.033.6%201.66.6z%27%20fill=%27%23e8eaed%27/%3E%3C/svg%3E%0A")}.btn-seek-forward-30.focused .btn-icon{content:url("data:image/svg+xml,%3Csvg%20width=%2760%27%20height=%2760%27%20fill=%27none%27%20xmlns=%27http://www.w3.org/2000/svg%27%3E%3Cpath%20d=%27M52.5%2032.5C52.5%2044.925%2042.425%2055%2030%2055S7.5%2044.925%207.5%2032.5%2017.575%2010%2030%2010c.525%200%201.05.05%201.55.1l-4.575-4.575L30.5%202l10.525%2010.5L30.5%2023.025%2026.975%2019.5l4.375-4.375C30.9%2015.075%2030.475%2015%2030%2015c-9.65%200-17.5%207.85-17.5%2017.5S20.35%2050%2030%2050s17.5-7.85%2017.5-17.5h5z%27%20fill=%27%23000%27/%3E%3Cpath%20d=%27M22.349%2040.32c-1.16%200-2.187-.307-3.08-.92-.88-.613-1.487-1.507-1.82-2.68l2.48-.98c.16.653.447%201.16.86%201.52.413.347.933.52%201.56.52.573%200%201.067-.173%201.48-.52.427-.347.64-.787.64-1.32%200-.573-.227-1.027-.68-1.36-.44-.347-1.04-.52-1.8-.52h-1.18v-2.38h1.08c.587%200%201.08-.147%201.48-.44.413-.293.62-.72.62-1.28%200-.453-.167-.827-.5-1.12-.334-.293-.76-.44-1.28-.44-.547%200-.987.147-1.32.44-.334.293-.567.66-.7%201.1l-2.38-.98c.28-.8.793-1.493%201.54-2.08.76-.587%201.72-.88%202.88-.88.853%200%201.613.16%202.28.48.68.32%201.206.76%201.58%201.32a3.22%203.22%200%2001.56%201.86c0%20.733-.174%201.36-.52%201.88-.334.52-.74.9-1.22%201.14v.16a3.606%203.606%200%20011.62%201.26c.413.573.62%201.267.62%202.08%200%20.787-.2%201.493-.6%202.12-.4.627-.967%201.12-1.7%201.48-.72.36-1.553.54-2.5.54zm13.246%200c-1.147%200-2.153-.307-3.02-.92-.867-.627-1.54-1.48-2.02-2.56-.467-1.093-.7-2.32-.7-3.68%200-1.36.233-2.58.7-3.66.48-1.093%201.153-1.947%202.02-2.56.867-.627%201.873-.94%203.02-.94s2.153.313%203.02.94c.867.613%201.533%201.467%202%202.56.48%201.08.72%202.3.72%203.66%200%201.36-.24%202.587-.72%203.68-.467%201.08-1.133%201.933-2%202.56-.867.613-1.873.92-3.02.92zm0-2.46c.64%200%201.193-.2%201.66-.6.48-.413.84-.973%201.08-1.68.253-.72.38-1.527.38-2.42%200-1.387-.28-2.513-.84-3.38-.56-.88-1.32-1.32-2.28-1.32-.947%200-1.7.44-2.26%201.32-.56.88-.84%202.007-.84%203.38%200%20.893.12%201.7.36%202.42.253.707.613%201.267%201.08%201.68.48.4%201.033.6%201.66.6z%27%20fill=%27%23000%27/%3E%3C/svg%3E%0A")}.btn-seek-backward-10 .btn-icon{content:url("data:image/svg+xml,%3Csvg%20width=%2760%27%20height=%2760%27%20xmlns=%27http://www.w3.org/2000/svg%27%3E%3Cpath%20d=%27M30%2010c-.525%200-1.05.05-1.55.1l4.575-4.575L29.5%202%2018.975%2012.5%2029.5%2023.025l3.525-3.525-4.375-4.375c.45-.05.875-.125%201.35-.125%209.65%200%2017.5%207.85%2017.5%2017.5S39.65%2050%2030%2050s-17.5-7.85-17.5-17.5h-5C7.5%2044.925%2017.575%2055%2030%2055s22.5-10.075%2022.5-22.5S42.425%2010%2030%2010z%27%20fill=%27%23e8eaed%27/%3E%3Cpath%20d=%27M22.816%2029.74l-2.06%201.5-1.32-2.02%204.02-2.9h1.98V40h-2.62V29.74zm11.912%2010.58c-1.147%200-2.153-.307-3.02-.92-.867-.627-1.54-1.48-2.02-2.56-.467-1.093-.7-2.32-.7-3.68%200-1.36.233-2.58.7-3.66.48-1.093%201.153-1.947%202.02-2.56.867-.627%201.873-.94%203.02-.94s2.153.313%203.02.94c.867.613%201.533%201.467%202%202.56.48%201.08.72%202.3.72%203.66%200%201.36-.24%202.587-.72%203.68-.467%201.08-1.133%201.933-2%202.56-.867.613-1.873.92-3.02.92zm0-2.46c.64%200%201.193-.2%201.66-.6.48-.413.84-.973%201.08-1.68.253-.72.38-1.527.38-2.42%200-1.387-.28-2.513-.84-3.38-.56-.88-1.32-1.32-2.28-1.32-.947%200-1.7.44-2.26%201.32-.56.88-.84%202.007-.84%203.38%200%20.893.12%201.7.36%202.42.253.707.613%201.267%201.08%201.68.48.4%201.033.6%201.66.6z%27%20fill=%27%23e8eaed%27/%3E%3C/svg%3E%0A")}.btn-seek-backward-10.focused .btn-icon{content:url("data:image/svg+xml,%3Csvg%20width=%2760%27%20height=%2760%27%20xmlns=%27http://www.w3.org/2000/svg%27%3E%3Cpath%20d=%27M30%2010c-.525%200-1.05.05-1.55.1l4.575-4.575L29.5%202%2018.975%2012.5%2029.5%2023.025l3.525-3.525-4.375-4.375c.45-.05.875-.125%201.35-.125%209.65%200%2017.5%207.85%2017.5%2017.5S39.65%2050%2030%2050s-17.5-7.85-17.5-17.5h-5C7.5%2044.925%2017.575%2055%2030%2055s22.5-10.075%2022.5-22.5S42.425%2010%2030%2010z%27/%3E%3Cpath%20d=%27M22.816%2029.74l-2.06%201.5-1.32-2.02%204.02-2.9h1.98V40h-2.62V29.74zm11.912%2010.58c-1.147%200-2.153-.307-3.02-.92-.867-.627-1.54-1.48-2.02-2.56-.467-1.093-.7-2.32-.7-3.68%200-1.36.233-2.58.7-3.66.48-1.093%201.153-1.947%202.02-2.56.867-.627%201.873-.94%203.02-.94s2.153.313%203.02.94c.867.613%201.533%201.467%202%202.56.48%201.08.72%202.3.72%203.66%200%201.36-.24%202.587-.72%203.68-.467%201.08-1.133%201.933-2%202.56-.867.613-1.873.92-3.02.92zm0-2.46c.64%200%201.193-.2%201.66-.6.48-.413.84-.973%201.08-1.68.253-.72.38-1.527.38-2.42%200-1.387-.28-2.513-.84-3.38-.56-.88-1.32-1.32-2.28-1.32-.947%200-1.7.44-2.26%201.32-.56.88-.84%202.007-.84%203.38%200%20.893.12%201.7.36%202.42.253.707.613%201.267%201.08%201.68.48.4%201.033.6%201.66.6z%27/%3E%3C/svg%3E%0A")}.btn-seek-backward-15 .btn-icon{content:url("data:image/svg+xml,%3Csvg%20width=%2760%27%20height=%2760%27%20xmlns=%27http://www.w3.org/2000/svg%27%3E%3Cpath%20d=%27M30%2010c-.525%200-1.05.05-1.55.1l4.575-4.575L29.5%202%2018.975%2012.5%2029.5%2023.025l3.525-3.525-4.375-4.375c.45-.05.875-.125%201.35-.125%209.65%200%2017.5%207.85%2017.5%2017.5S39.65%2050%2030%2050s-17.5-7.85-17.5-17.5h-5C7.5%2044.925%2017.575%2055%2030%2055s22.5-10.075%2022.5-22.5S42.425%2010%2030%2010z%27%20fill=%27%23e8eaed%27/%3E%3Cpath%20d=%27M25.643%2040V26H23.62L19.5%2028.969l1.356%202.073%202.125-1.536V40h2.662zm8.682-2.425c-.65%200-1.175-.2-1.6-.6-.425-.4-.725-.925-.875-1.6l-2.35.925c.175.825.525%201.5%201.025%202.05.5.55%201.075.975%201.75%201.25s1.35.4%202.075.4c.925%200%201.775-.2%202.5-.6.725-.4%201.3-.95%201.725-1.65.425-.7.625-1.525.625-2.425%200-.9-.2-1.7-.6-2.4-.4-.7-.925-1.25-1.6-1.625s-1.375-.575-2.125-.575c-.925%200-1.725.275-2.375.825l-.15-.05.5-3.2h5.55V26h-7.725l-.775%206.85L32.45%2034c.225-.275.5-.5.825-.675.325-.175.7-.25%201.1-.25.65%200%201.2.225%201.6.65.425.425.625.975.625%201.6%200%20.65-.225%201.2-.65%201.625-.45.425-1%20.625-1.625.625z%27%20fill=%27%23e8eaed%27/%3E%3C/svg%3E%0A")}.btn-seek-backward-15.focused .btn-icon{content:url("data:image/svg+xml,%3Csvg%20width=%2760%27%20height=%2760%27%20xmlns=%27http://www.w3.org/2000/svg%27%3E%3Cpath%20d=%27M30%2010c-.525%200-1.05.05-1.55.1l4.575-4.575L29.5%202%2018.975%2012.5%2029.5%2023.025l3.525-3.525-4.375-4.375c.45-.05.875-.125%201.35-.125%209.65%200%2017.5%207.85%2017.5%2017.5S39.65%2050%2030%2050s-17.5-7.85-17.5-17.5h-5C7.5%2044.925%2017.575%2055%2030%2055s22.5-10.075%2022.5-22.5S42.425%2010%2030%2010z%27/%3E%3Cpath%20d=%27M25.643%2040V26H23.62L19.5%2028.969l1.356%202.073%202.125-1.536V40h2.662zm8.682-2.425c-.65%200-1.175-.2-1.6-.6-.425-.4-.725-.925-.875-1.6l-2.35.925c.175.825.525%201.5%201.025%202.05.5.55%201.075.975%201.75%201.25s1.35.4%202.075.4c.925%200%201.775-.2%202.5-.6.725-.4%201.3-.95%201.725-1.65.425-.7.625-1.525.625-2.425%200-.9-.2-1.7-.6-2.4-.4-.7-.925-1.25-1.6-1.625s-1.375-.575-2.125-.575c-.925%200-1.725.275-2.375.825l-.15-.05.5-3.2h5.55V26h-7.725l-.775%206.85L32.45%2034c.225-.275.5-.5.825-.675.325-.175.7-.25%201.1-.25.65%200%201.2.225%201.6.65.425.425.625.975.625%201.6%200%20.65-.225%201.2-.65%201.625-.45.425-1%20.625-1.625.625z%27/%3E%3C/svg%3E%0A")}.btn-seek-backward-30 .btn-icon{content:url("data:image/svg+xml,%3Csvg%20width=%2760%27%20height=%2760%27%20xmlns=%27http://www.w3.org/2000/svg%27%3E%3Cpath%20d=%27M30%2010c-.525%200-1.05.05-1.55.1l4.575-4.575L29.5%202%2018.975%2012.5%2029.5%2023.025l3.525-3.525-4.375-4.375c.45-.05.875-.125%201.35-.125%209.65%200%2017.5%207.85%2017.5%2017.5S39.65%2050%2030%2050s-17.5-7.85-17.5-17.5h-5C7.5%2044.925%2017.575%2055%2030%2055s22.5-10.075%2022.5-22.5S42.425%2010%2030%2010z%27%20fill=%27%23e8eaed%27/%3E%3Cpath%20d=%27M22.349%2040.32c-1.16%200-2.187-.307-3.08-.92-.88-.613-1.487-1.507-1.82-2.68l2.48-.98c.16.653.447%201.16.86%201.52.413.347.933.52%201.56.52.573%200%201.067-.173%201.48-.52.427-.347.64-.787.64-1.32%200-.573-.227-1.027-.68-1.36-.44-.347-1.04-.52-1.8-.52h-1.18v-2.38h1.08c.587%200%201.08-.147%201.48-.44.413-.293.62-.72.62-1.28%200-.453-.167-.827-.5-1.12-.334-.293-.76-.44-1.28-.44-.547%200-.987.147-1.32.44-.334.293-.567.66-.7%201.1l-2.38-.98c.28-.8.793-1.493%201.54-2.08.76-.587%201.72-.88%202.88-.88.853%200%201.613.16%202.28.48.68.32%201.206.76%201.58%201.32a3.22%203.22%200%2001.56%201.86c0%20.733-.174%201.36-.52%201.88-.334.52-.74.9-1.22%201.14v.16a3.606%203.606%200%20011.62%201.26c.413.573.62%201.267.62%202.08%200%20.787-.2%201.493-.6%202.12-.4.627-.967%201.12-1.7%201.48-.72.36-1.553.54-2.5.54zm13.246%200c-1.147%200-2.153-.307-3.02-.92-.867-.627-1.54-1.48-2.02-2.56-.467-1.093-.7-2.32-.7-3.68%200-1.36.233-2.58.7-3.66.48-1.093%201.153-1.947%202.02-2.56.867-.627%201.873-.94%203.02-.94s2.153.313%203.02.94c.867.613%201.533%201.467%202%202.56.48%201.08.72%202.3.72%203.66%200%201.36-.24%202.587-.72%203.68-.467%201.08-1.133%201.933-2%202.56-.867.613-1.873.92-3.02.92zm0-2.46c.64%200%201.193-.2%201.66-.6.48-.413.84-.973%201.08-1.68.253-.72.38-1.527.38-2.42%200-1.387-.28-2.513-.84-3.38-.56-.88-1.32-1.32-2.28-1.32-.947%200-1.7.44-2.26%201.32-.56.88-.84%202.007-.84%203.38%200%20.893.12%201.7.36%202.42.253.707.613%201.267%201.08%201.68.48.4%201.033.6%201.66.6z%27%20fill=%27%23e8eaed%27/%3E%3C/svg%3E%0A")}.btn-seek-backward-30.focused .btn-icon{content:url("data:image/svg+xml,%3Csvg%20width=%2760%27%20height=%2760%27%20xmlns=%27http://www.w3.org/2000/svg%27%3E%3Cpath%20d=%27M30%2010c-.525%200-1.05.05-1.55.1l4.575-4.575L29.5%202%2018.975%2012.5%2029.5%2023.025l3.525-3.525-4.375-4.375c.45-.05.875-.125%201.35-.125%209.65%200%2017.5%207.85%2017.5%2017.5S39.65%2050%2030%2050s-17.5-7.85-17.5-17.5h-5C7.5%2044.925%2017.575%2055%2030%2055s22.5-10.075%2022.5-22.5S42.425%2010%2030%2010z%27/%3E%3Cpath%20d=%27M22.349%2040.32c-1.16%200-2.187-.307-3.08-.92-.88-.613-1.487-1.507-1.82-2.68l2.48-.98c.16.653.447%201.16.86%201.52.413.347.933.52%201.56.52.573%200%201.067-.173%201.48-.52.427-.347.64-.787.64-1.32%200-.573-.227-1.027-.68-1.36-.44-.347-1.04-.52-1.8-.52h-1.18v-2.38h1.08c.587%200%201.08-.147%201.48-.44.413-.293.62-.72.62-1.28%200-.453-.167-.827-.5-1.12-.334-.293-.76-.44-1.28-.44-.547%200-.987.147-1.32.44-.334.293-.567.66-.7%201.1l-2.38-.98c.28-.8.793-1.493%201.54-2.08.76-.587%201.72-.88%202.88-.88.853%200%201.613.16%202.28.48.68.32%201.206.76%201.58%201.32a3.22%203.22%200%2001.56%201.86c0%20.733-.174%201.36-.52%201.88-.334.52-.74.9-1.22%201.14v.16a3.606%203.606%200%20011.62%201.26c.413.573.62%201.267.62%202.08%200%20.787-.2%201.493-.6%202.12-.4.627-.967%201.12-1.7%201.48-.72.36-1.553.54-2.5.54zm13.246%200c-1.147%200-2.153-.307-3.02-.92-.867-.627-1.54-1.48-2.02-2.56-.467-1.093-.7-2.32-.7-3.68%200-1.36.233-2.58.7-3.66.48-1.093%201.153-1.947%202.02-2.56.867-.627%201.873-.94%203.02-.94s2.153.313%203.02.94c.867.613%201.533%201.467%202%202.56.48%201.08.72%202.3.72%203.66%200%201.36-.24%202.587-.72%203.68-.467%201.08-1.133%201.933-2%202.56-.867.613-1.873.92-3.02.92zm0-2.46c.64%200%201.193-.2%201.66-.6.48-.413.84-.973%201.08-1.68.253-.72.38-1.527.38-2.42%200-1.387-.28-2.513-.84-3.38-.56-.88-1.32-1.32-2.28-1.32-.947%200-1.7.44-2.26%201.32-.56.88-.84%202.007-.84%203.38%200%20.893.12%201.7.36%202.42.253.707.613%201.267%201.08%201.68.48.4%201.033.6%201.66.6z%27/%3E%3C/svg%3E%0A")}.btn-repeat[data-state=\'off\'] .btn-icon{content:url("data:image/svg+xml,%3Csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20width=%2724%27%20height=%2724%27%20fill=%27%23e8eaed%27%3E%3Cpath%20d=%27M7%207h10v3l4-4-4-4v3H5v6h2V7zm10%2010H7v-3l-4%204%204%204v-3h12v-6h-2v4z%27/%3E%3C/svg%3E%0A")}.btn-repeat[data-state=\'off\'].focused .btn-icon{content:url("data:image/svg+xml,%3Csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20width=%2724%27%20height=%2724%27%3E%3Cpath%20d=%27M7%207h10v3l4-4-4-4v3H5v6h2V7zm10%2010H7v-3l-4%204%204%204v-3h12v-6h-2v4z%27/%3E%3C/svg%3E%0A")}.btn-repeat[data-state=\'all\'] .btn-icon{content:url("data:image/svg+xml,%3Csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20width=%2724%27%20height=%2724%27%20fill=%27%230b83e5%27%3E%3Cpath%20d=%27M7%207h10v3l4-4-4-4v3H5v6h2V7zm10%2010H7v-3l-4%204%204%204v-3h12v-6h-2v4z%27/%3E%3C/svg%3E%0A")}.btn-repeat[data-state=\'single\'] .btn-icon{content:url("data:image/svg+xml,%3Csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20width=%2724%27%20height=%2724%27%20fill=%27%230b83e5%27%3E%3Cpath%20d=%27M7%207h10v3l4-4-4-4v3H5v6h2V7zm10%2010H7v-3l-4%204%204%204v-3h12v-6h-2v4zm-4-2V9h-1l-2%201v1h1.5v4H13z%27/%3E%3C/svg%3E%0A")}.btn-shuffle .btn-icon{content:url("data:image/svg+xml,%3Csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20width=%2724%27%20height=%2724%27%20fill=%27%23e8eaed%27%3E%3Cpath%20d=%27M10.59%209.17L5.41%204%204%205.41l5.17%205.17%201.42-1.41zM14.5%204l2.04%202.04L4%2018.59%205.41%2020%2017.96%207.46%2020%209.5V4h-5.5zm.33%209.41l-1.41%201.41%203.13%203.13L14.5%2020H20v-5.5l-2.04%202.04-3.13-3.13z%27/%3E%3C/svg%3E%0A")}.btn-shuffle.focused .btn-icon{content:url("data:image/svg+xml,%3Csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20width=%2724%27%20height=%2724%27%3E%3Cpath%20d=%27M10.59%209.17L5.41%204%204%205.41l5.17%205.17%201.42-1.41zM14.5%204l2.04%202.04L4%2018.59%205.41%2020%2017.96%207.46%2020%209.5V4h-5.5zm.33%209.41l-1.41%201.41%203.13%203.13L14.5%2020H20v-5.5l-2.04%202.04-3.13-3.13z%27/%3E%3C/svg%3E%0A")}.btn-shuffle[aria-pressed=\'true\'] .btn-icon{content:url("data:image/svg+xml,%3Csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20width=%2724%27%20height=%2724%27%20fill=%27%230b83e5%27%3E%3Cpath%20d=%27M10.59%209.17L5.41%204%204%205.41l5.17%205.17%201.42-1.41zM14.5%204l2.04%202.04L4%2018.59%205.41%2020%2017.96%207.46%2020%209.5V4h-5.5zm.33%209.41l-1.41%201.41%203.13%203.13L14.5%2020H20v-5.5l-2.04%202.04-3.13-3.13z%27/%3E%3C/svg%3E%0A")}.btn-captions .btn-icon{content:url("data:image/svg+xml,%3Csvg%20width=%2760%27%20height=%2760%27%20xmlns=%27http://www.w3.org/2000/svg%27%3E%3Cpath%20fill=%27%23e8eaed%27%20d=%27M47.5%2010h-35c-2.775%200-5%202.25-5%205v30c0%202.75%202.225%205%205%205h35c2.75%200%205-2.25%205-5V15c0-2.75-2.25-5-5-5zm0%2035h-35V15h35v30zm-30-7.5H25c1.375%200%202.5-1.125%202.5-2.5v-2.5h-3.75v1.25h-5v-7.5h5v1.25h3.75V25c0-1.375-1.125-2.5-2.5-2.5h-7.5A2.507%202.507%200%200015%2025v10c0%201.375%201.125%202.5%202.5%202.5zm17.5%200h7.5c1.375%200%202.5-1.125%202.5-2.5v-2.5h-3.75v1.25h-5v-7.5h5v1.25H45V25c0-1.375-1.125-2.5-2.5-2.5H35a2.507%202.507%200%2000-2.5%202.5v10c0%201.375%201.125%202.5%202.5%202.5z%27/%3E%3C/svg%3E%0A")}.btn-captions.focused .btn-icon{content:url("data:image/svg+xml,%3Csvg%20width=%2760%27%20height=%2760%27%20xmlns=%27http://www.w3.org/2000/svg%27%3E%3Cpath%20d=%27M47.5%2010h-35c-2.775%200-5%202.25-5%205v30c0%202.75%202.225%205%205%205h35c2.75%200%205-2.25%205-5V15c0-2.75-2.25-5-5-5zm0%2035h-35V15h35v30zm-30-7.5H25c1.375%200%202.5-1.125%202.5-2.5v-2.5h-3.75v1.25h-5v-7.5h5v1.25h3.75V25c0-1.375-1.125-2.5-2.5-2.5h-7.5A2.507%202.507%200%200015%2025v10c0%201.375%201.125%202.5%202.5%202.5zm17.5%200h7.5c1.375%200%202.5-1.125%202.5-2.5v-2.5h-3.75v1.25h-5v-7.5h5v1.25H45V25c0-1.375-1.125-2.5-2.5-2.5H35a2.507%202.507%200%2000-2.5%202.5v10c0%201.375%201.125%202.5%202.5%202.5z%27/%3E%3C/svg%3E%0A")}.btn-captions[aria-pressed=\'true\'] .btn-icon{content:url("data:image/svg+xml,%3Csvg%20width=%2760%27%20height=%2760%27%20xmlns=%27http://www.w3.org/2000/svg%27%3E%3Cpath%20fill=%27%230b83e5%27%20fill-rule=%27evenodd%27%20clip-rule=%27evenodd%27%20d=%27m%2047.5%2C10%20h%20-35%20c%20-2.775%2C0%20-5%2C2.25%20-5%2C5%20v%2030%20c%200%2C2.75%202.225%2C5%205%2C5%20h%2035%20c%202.75%2C0%205%2C-2.25%205%2C-5%20V%2015%20c%200%2C-2.75%20-2.25%2C-5%20-5%2C-5%20z%20m%20-20%2C17.5%20h%20-3.75%20v%20-1.25%20h%20-5%20v%207.5%20h%205%20V%2032.5%20H%2027.5%20V%2035%20c%200%2C1.375%20-1.125%2C2.5%20-2.5%2C2.5%20H%2017.5%20C%2016.125%2C37.5%2015%2C36.375%2015%2C35%20V%2025%20c%200%2C-1.375%201.125%2C-2.5%202.5%2C-2.5%20H%2025%20c%201.375%2C0%202.5%2C1.125%202.5%2C2.5%20z%20m%2013.75%2C0%20H%2045%20V%2025%20c%200%2C-1.375%20-1.125%2C-2.5%20-2.5%2C-2.5%20H%2035%20c%20-1.375%2C0%20-2.5%2C1.125%20-2.5%2C2.5%20v%2010%20c%200%2C1.375%201.125%2C2.5%202.5%2C2.5%20h%207.5%20c%201.375%2C0%202.5%2C-1.125%202.5%2C-2.5%20v%20-2.5%20h%20-3.75%20v%201.25%20h%20-5%20v%20-7.5%20h%205%20z%27/%3E%3C/svg%3E%0A")}.btn-like .btn-icon{content:url("data:image/svg+xml,%3Csvg%20width=%2760%27%20height=%2760%27%20xmlns=%27http://www.w3.org/2000/svg%27%3E%3Cpath%20fill=%27%23e8eaed%27%20d=%27M8%2048h4.5c1.238%200%202.25-1.025%202.25-2.278v-20.5c0-1.253-1.012-2.278-2.25-2.278H8V48zm44.617-16.218A4.55%204.55%200%200053%2029.96V27.5c0-2.506-2.025-4.556-4.5-4.556H36.125l2.07-10.591a2.308%202.308%200%2000-.18-1.504%2010.932%2010.932%200%2000-1.98-2.778L35%207%2020.578%2021.6a4.598%204.598%200%2000-1.328%203.235v17.858c0%202.915%202.363%205.307%205.265%205.307h18.248a4.52%204.52%200%20003.87-2.21l5.984-14.008z%27/%3E%3C/svg%3E%0A")}.btn-like.focused .btn-icon{content:url("data:image/svg+xml,%3Csvg%20width=%2760%27%20height=%2760%27%20xmlns=%27http://www.w3.org/2000/svg%27%3E%3Cpath%20d=%27M8%2048h4.5c1.238%200%202.25-1.025%202.25-2.278v-20.5c0-1.253-1.012-2.278-2.25-2.278H8V48zm44.617-16.218A4.55%204.55%200%200053%2029.96V27.5c0-2.506-2.025-4.556-4.5-4.556H36.125l2.07-10.591a2.308%202.308%200%2000-.18-1.504%2010.932%2010.932%200%2000-1.98-2.778L35%207%2020.578%2021.6a4.598%204.598%200%2000-1.328%203.235v17.858c0%202.915%202.363%205.307%205.265%205.307h18.248a4.52%204.52%200%20003.87-2.21l5.984-14.008z%27/%3E%3C/svg%3E%0A")}.btn-like[aria-pressed=\'true\'] .btn-icon{content:url("data:image/svg+xml,%3Csvg%20width=%2760%27%20height=%2760%27%20xmlns=%27http://www.w3.org/2000/svg%27%3E%3Cpath%20fill=%27%230b83e5%27%20d=%27M8%2048h4.5c1.238%200%202.25-1.025%202.25-2.278v-20.5c0-1.253-1.012-2.278-2.25-2.278H8V48zm44.617-16.218A4.55%204.55%200%200053%2029.96V27.5c0-2.506-2.025-4.556-4.5-4.556H36.125l2.07-10.591a2.308%202.308%200%2000-.18-1.504%2010.932%2010.932%200%2000-1.98-2.778L35%207%2020.578%2021.6a4.598%204.598%200%2000-1.328%203.235v17.858c0%202.915%202.363%205.307%205.265%205.307h18.248a4.52%204.52%200%20003.87-2.21l5.984-14.008z%27/%3E%3C/svg%3E%0A")}.btn-dislike .btn-icon{content:url("data:image/svg+xml,%3Csvg%20width=%2760%27%20height=%2760%27%20xmlns=%27http://www.w3.org/2000/svg%27%3E%3Cpath%20fill=%27%23e8eaed%27%20d=%27M53%2012h-4.5c-1.237%200-2.25%201.025-2.25%202.278v20.5c0%201.253%201.013%202.278%202.25%202.278H53V12zM8.383%2028.218A4.557%204.557%200%20008%2030.04v2.46c0%202.506%202.025%204.556%204.5%204.556h12.375l-2.07%2010.591a2.308%202.308%200%2000.18%201.504%2010.932%2010.932%200%20001.98%202.778L26%2053l14.422-14.6a4.598%204.598%200%20001.328-3.235V17.33c0-2.938-2.362-5.33-5.265-5.33H18.26c-1.598%200-3.06.843-3.87%202.21L8.382%2028.217z%27/%3E%3C/svg%3E%0A")}.btn-dislike.focused .btn-icon{content:url("data:image/svg+xml,%3Csvg%20width=%2760%27%20height=%2760%27%20xmlns=%27http://www.w3.org/2000/svg%27%3E%3Cpath%20d=%27M53%2012h-4.5c-1.237%200-2.25%201.025-2.25%202.278v20.5c0%201.253%201.013%202.278%202.25%202.278H53V12zM8.383%2028.218A4.557%204.557%200%20008%2030.04v2.46c0%202.506%202.025%204.556%204.5%204.556h12.375l-2.07%2010.591a2.308%202.308%200%2000.18%201.504%2010.932%2010.932%200%20001.98%202.778L26%2053l14.422-14.6a4.598%204.598%200%20001.328-3.235V17.33c0-2.938-2.362-5.33-5.265-5.33H18.26c-1.598%200-3.06.843-3.87%202.21L8.382%2028.217z%27/%3E%3C/svg%3E%0A")}.btn-dislike[aria-pressed=\'true\'] .btn-icon{content:url("data:image/svg+xml,%3Csvg%20width=%2760%27%20height=%2760%27%20xmlns=%27http://www.w3.org/2000/svg%27%3E%3Cpath%20fill=%27%230b83e5%27%20d=%27M53%2012h-4.5c-1.237%200-2.25%201.025-2.25%202.278v20.5c0%201.253%201.013%202.278%202.25%202.278H53V12zM8.383%2028.218A4.557%204.557%200%20008%2030.04v2.46c0%202.506%202.025%204.556%204.5%204.556h12.375l-2.07%2010.591a2.308%202.308%200%2000.18%201.504%2010.932%2010.932%200%20001.98%202.778L26%2053l14.422-14.6a4.598%204.598%200%20001.328-3.235V17.33c0-2.938-2.362-5.33-5.265-5.33H18.26c-1.598%200-3.06.843-3.87%202.21L8.382%2028.217z%27/%3E%3C/svg%3E%0A")}.btn-like-heart .btn-icon{content:url("data:image/svg+xml,%3Csvg%20height=%2760%27%20width=%2760%27%20fill=%27%23e8eaed%27%20xmlns=%27http://www.w3.org/2000/svg%27%3E%0A%20%20%3Cpath%20d=%27M%2029.937%2C54.313%2025.374%2C50.125%20Q%2015.564%2C41.188%209.6885%2C34.687%203.813%2C28.186%203.813%2C20.623%203.813%2C14.251%208.1255%2C9.8755%2012.438%2C5.5%2018.813%2C5.5%20q%203.375%2C0%206.1875%2C1.281%202.8125%2C1.281%204.9365%2C3.282%20Q%2032.064%2C8.062%2034.9065%2C6.781%2037.749%2C5.5%2041.001%2C5.5%20q%206.498%2C0%2010.842%2C4.3755%204.344%2C4.3755%204.344%2C10.7475%200%2C7.563%20-5.937%2C14.064%20-5.937%2C6.501%20-15.813%2C15.438%20z%20M%2030%2C28.687%20q%200%2C0%200%2C0%200%2C0%200%2C0%200%2C0%200%2C0%200%2C0%200%2C0%200%2C0%200%2C0%200%2C0%200%2C0%200%2C0%200%2C0%200%2C0%200%2C0%200%2C0%200%2C0%200%2C0%200%2C0%200%2C0%200%2C0%200%2C0%200%2C0%20z%20m%20-0.063%2C16.374%20q%208.751%2C-7.998%2014.094%2C-13.593%205.343%2C-5.595%205.343%2C-10.845%200%2C-3.561%20-2.3745%2C-5.9055%20-2.3745%2C-2.3445%20-5.9985%2C-2.3445%20-2.688%2C0%20-5.0625%2C1.6575%20Q%2033.564%2C15.688%2032.814%2C18.061%20H%2027.186%20Q%2026.436%2C15.688%2024%2C14.0305%2021.564%2C12.373%2018.813%2C12.373%20q%20-3.501%2C0%20-5.844%2C2.3445%20-2.343%2C2.3445%20-2.343%2C5.9055%200%2C5.25%205.28%2C10.845%205.28%2C5.595%2014.031%2C13.593%20z%27/%3E%0A%3C/svg%3E%0A")}.btn-like-heart.focused .btn-icon{content:url("data:image/svg+xml,%3Csvg%20height=%2760%27%20width=%2760%27%20xmlns=%27http://www.w3.org/2000/svg%27%3E%0A%20%20%3Cpath%20d=%27M%2029.937%2C54.313%2025.374%2C50.125%20Q%2015.564%2C41.188%209.6885%2C34.687%203.813%2C28.186%203.813%2C20.623%203.813%2C14.251%208.1255%2C9.8755%2012.438%2C5.5%2018.813%2C5.5%20q%203.375%2C0%206.1875%2C1.281%202.8125%2C1.281%204.9365%2C3.282%20Q%2032.064%2C8.062%2034.9065%2C6.781%2037.749%2C5.5%2041.001%2C5.5%20q%206.498%2C0%2010.842%2C4.3755%204.344%2C4.3755%204.344%2C10.7475%200%2C7.563%20-5.937%2C14.064%20-5.937%2C6.501%20-15.813%2C15.438%20z%20M%2030%2C28.687%20q%200%2C0%200%2C0%200%2C0%200%2C0%200%2C0%200%2C0%200%2C0%200%2C0%200%2C0%200%2C0%200%2C0%200%2C0%200%2C0%200%2C0%200%2C0%200%2C0%200%2C0%200%2C0%200%2C0%200%2C0%200%2C0%200%2C0%200%2C0%200%2C0%20z%20m%20-0.063%2C16.374%20q%208.751%2C-7.998%2014.094%2C-13.593%205.343%2C-5.595%205.343%2C-10.845%200%2C-3.561%20-2.3745%2C-5.9055%20-2.3745%2C-2.3445%20-5.9985%2C-2.3445%20-2.688%2C0%20-5.0625%2C1.6575%20Q%2033.564%2C15.688%2032.814%2C18.061%20H%2027.186%20Q%2026.436%2C15.688%2024%2C14.0305%2021.564%2C12.373%2018.813%2C12.373%20q%20-3.501%2C0%20-5.844%2C2.3445%20-2.343%2C2.3445%20-2.343%2C5.9055%200%2C5.25%205.28%2C10.845%205.28%2C5.595%2014.031%2C13.593%20z%27/%3E%0A%3C/svg%3E%0A")}.btn-like-heart[aria-pressed=\'true\'] .btn-icon{content:url("data:image/svg+xml,%3Csvg%20height=%2760%27%20width=%2760%27%20fill=%27%230b83e5%27%20xmlns=%27http://www.w3.org/2000/svg%27%3E%0A%20%20%3Cpath%20d=%27M%2029.937%2C54.313%2025.374%2C50.125%20Q%2015.564%2C41.188%209.6885%2C34.687%203.813%2C28.186%203.813%2C20.749%203.813%2C14.188%208.1255%2C9.844%2012.438%2C5.5%2018.687%2C5.5%20q%203.249%2C0%206.1245%2C1.1865%202.8755%2C1.1865%205.1255%2C3.3765%202.25%2C-2.19%205.157%2C-3.3765%20Q%2038.001%2C5.5%2041.124%2C5.5%20q%206.438%2C0%2010.7505%2C4.3755%204.3125%2C4.3755%204.3125%2C10.8735%200%2C7.437%20-5.937%2C13.938%20-5.937%2C6.501%20-15.813%2C15.438%20z%20m%200%2C-9.252%20q%20-8.751%2C-7.938%20-14.031%2C-13.563%20-5.28%2C-5.625%20-5.28%2C-10.935%200%2C-3.501%202.343%2C-5.8455%202.343%2C-2.3445%205.718%2C-2.3445%202.877%2C0%205.313%2C1.6575%202.436%2C1.6575%203.186%2C4.0305%20h%205.628%20q%200.75%2C-2.373%203.1245%2C-4.0305%202.3745%2C-1.6575%205.1855%2C-1.6575%203.501%2C0%205.8755%2C2.3445%202.3745%2C2.3445%202.3745%2C5.8455%200%2C5.31%20-5.343%2C10.935%20-5.343%2C5.625%20-14.094%2C13.563%20z%20m%200%2C0%20q%208.751%2C-7.998%2014.094%2C-13.593%205.343%2C-5.595%205.343%2C-10.905%200%2C-3.501%20-2.3745%2C-5.8455%20-2.3745%2C-2.3445%20-5.8755%2C-2.3445%20-2.811%2C0%20-5.1855%2C1.6575%20Q%2033.564%2C15.688%2032.814%2C18.061%20H%2027.186%20Q%2026.436%2C15.688%2024%2C14.0305%2021.564%2C12.373%2018.687%2C12.373%20q%20-3.375%2C0%20-5.718%2C2.3445%20-2.343%2C2.3445%20-2.343%2C5.8455%200%2C5.31%205.28%2C10.905%205.28%2C5.595%2014.031%2C13.593%20z%27/%3E%0A%3C/svg%3E%0A")}.btn-lyrics .btn-icon{content:url("data:image/svg+xml,%3Csvg%20height=%2760%27%20width=%2760%27%20fill=%27%23e8eaed%27%20xmlns=%27http://www.w3.org/2000/svg%27%3E%0A%20%20%3Cpath%20d=%27m%2037.5%2C28.2%20v%2012.3%20h%20-27%20v%20-30%20h%2027%20v%206.27%20c%201.05%2C-1.92%202.61%2C-3.54%204.5%2C-4.62%20V%2010.5%20C%2042%2C8.01%2039.99%2C6%2037.5%2C6%20h%20-27%20C%208.01%2C6%206%2C8.01%206%2C10.5%20V%2054%20l%209%2C-9%20h%2022.5%20c%202.49%2C0%204.5%2C-2.01%204.5%2C-4.5%20v%20-7.68%20c%20-1.89%2C-1.11%20-3.45%2C-2.7%20-4.5%2C-4.62%20z%27%20/%3E%0A%20%20%3Crect%20height=%274.5%27%20width=%2718%27%20x=%2715%27%20y=%2715%27%20/%3E%0A%20%20%3Crect%20height=%274.5%27%20width=%279%27%20x=%2715%27%20y=%2731.5%27%20/%3E%0A%20%20%3Crect%20height=%274.5%27%20width=%2718%27%20x=%2715%27%20y=%2723.25%27%20/%3E%0A%20%20%3Cpath%20d=%27M%2051%2C15.63%20C%2050.07%2C15.24%2049.08%2C15%2048%2C15%20c%20-4.14%2C0%20-7.5%2C3.36%20-7.5%2C7.5%200%2C4.14%203.36%2C7.5%207.5%2C7.5%204.14%2C0%207.5%2C-3.36%207.5%2C-7.5%20V%207.5%20H%2060%20V%203%20h%20-9%20z%27%20/%3E%0A%3C/svg%3E%0A")}.btn-lyrics.focused .btn-icon{content:url("data:image/svg+xml,%3Csvg%20height=%2760%27%20width=%2760%27%20xmlns=%27http://www.w3.org/2000/svg%27%3E%0A%20%20%3Cpath%20d=%27m%2037.5%2C28.2%20v%2012.3%20h%20-27%20v%20-30%20h%2027%20v%206.27%20c%201.05%2C-1.92%202.61%2C-3.54%204.5%2C-4.62%20V%2010.5%20C%2042%2C8.01%2039.99%2C6%2037.5%2C6%20h%20-27%20C%208.01%2C6%206%2C8.01%206%2C10.5%20V%2054%20l%209%2C-9%20h%2022.5%20c%202.49%2C0%204.5%2C-2.01%204.5%2C-4.5%20v%20-7.68%20c%20-1.89%2C-1.11%20-3.45%2C-2.7%20-4.5%2C-4.62%20z%27%20/%3E%0A%20%20%3Crect%20height=%274.5%27%20width=%2718%27%20x=%2715%27%20y=%2715%27%20/%3E%0A%20%20%3Crect%20height=%274.5%27%20width=%279%27%20x=%2715%27%20y=%2731.5%27%20/%3E%0A%20%20%3Crect%20height=%274.5%27%20width=%2718%27%20x=%2715%27%20y=%2723.25%27%20/%3E%0A%20%20%3Cpath%20d=%27M%2051%2C15.63%20C%2050.07%2C15.24%2049.08%2C15%2048%2C15%20c%20-4.14%2C0%20-7.5%2C3.36%20-7.5%2C7.5%200%2C4.14%203.36%2C7.5%207.5%2C7.5%204.14%2C0%207.5%2C-3.36%207.5%2C-7.5%20V%207.5%20H%2060%20V%203%20h%20-9%20z%27%20/%3E%0A%3C/svg%3E%0A")}.btn-lyrics[aria-pressed=\'true\'] .btn-icon{content:url("data:image/svg+xml,%3Csvg%20height=%2760%27%20width=%2760%27%20fill=%27%230b83e5%27%20xmlns=%27http://www.w3.org/2000/svg%27%3E%0A%20%20%3Cpath%20d=%27m%2036%2C22.5%20c%200%2C-4.44%202.43%2C-8.28%206%2C-10.35%20V%2010.5%20C%2042%2C8.01%2039.99%2C6%2037.5%2C6%20h%20-27%20C%208.01%2C6%206%2C8.01%206%2C10.5%20V%2054%20l%209%2C-9%20H%2037.5%20C%2039.99%2C45%2042%2C42.99%2042%2C40.5%20V%2032.82%20C%2038.43%2C30.75%2036%2C26.91%2036%2C22.5%20Z%20M%2024%2C36%20h%20-9%20v%20-4.5%20h%209%20z%20m%209%2C-8.25%20H%2015%20v%20-4.5%20H%2033%20Z%20M%2033%2C19.5%20H%2015%20V%2015%20h%2018%20z%27%20/%3E%0A%20%20%3Cpath%20d=%27M%2051%2C15.63%20C%2050.07%2C15.24%2049.08%2C15%2048%2C15%20c%20-4.14%2C0%20-7.5%2C3.36%20-7.5%2C7.5%200%2C4.14%203.36%2C7.5%207.5%2C7.5%204.14%2C0%207.5%2C-3.36%207.5%2C-7.5%20V%207.5%20H%2060%20V%203%20h%20-9%20z%27%20/%3E%0A%3C/svg%3E%0A")}goog-timeline{flex:none;outline:none}.touch-layer.new-dpad-controls-overlay goog-timeline{align-items:center;display:flex}.play-pause-indicator{align-self:flex-start;display:inline-block;padding-right:.546875vw;position:relative}.play-pause-indicator.hidden{display:none}.play-pause-indicator .btn-icon{height:1.875vw;width:1.875vw}.time-numbers{font-size:1.35416667vw;line-height:1.5625vw;height:2.34375vw}.time-numbers .left{float:left}.time-numbers .right{float:right}.time-numbers .right .time-indicator{margin-left:16px}.time-numbers:after{clear:both;content:\'\';display:table}.touch-layer.new-dpad-controls-overlay .time-numbers{font-size:1.25vw}.time-indicator,.live-label{display:inline-block;color:#e8eaed;font-weight:500;opacity:.6}.live-label.live-edge{opacity:1}.live-label.live-edge::before{display:inline-block;width:.41666667vw;height:.41666667vw;vertical-align:15%;margin-right:.52083333vw;background-color:#fa5847;content:\'\';border-radius:.41666667vw}.time-bar{width:100%}.scrubber-layer{height:1.66666667vw;position:relative;margin-bottom:.9375vw}.scrubber-layer.live .progress-fill,.scrubber-layer.live .scrubber::-webkit-slider-thumb{background-color:#fa5847}.progress-bar{background-color:rgba(255,255,255,0.1);border-radius:.20833333vw;height:.41666667vw;left:0;overflow:hidden;position:absolute;top:.625vw;width:100%}.progress-fill{background-color:rgba(255,255,255,0.6);height:100%;left:0;position:absolute;top:0;transform:scaleX(0);transform-origin:left center;width:100%;will-change:transform}.progress-fill.break{background-color:#fbbc04}.progress-seekable-range,.progress-seekable-played{height:100%;position:absolute;top:0}.progress-seekable-played{background-color:#fa5847}.progress-seekable-range{background-color:rgba(255,255,255,0.5)}.progress-breaks{height:100%;left:0;position:absolute;top:0;width:100%}.break-mark{position:absolute;height:100%;background-color:#fbbc04}.progress-loading{height:100%;right:0;position:absolute;top:0;transform-origin:right center;will-change:transform}input[type=range].scrubber{-webkit-tap-highlight-color:rgba(255,255,255,0);-webkit-focus-ring-color:rgba(255,255,255,0);-webkit-appearance:none;background-color:transparent;height:1.66666667vw;left:0;margin:0;outline:none;position:absolute;top:0;width:100%;will-change:transform}input[type=range].scrubber::-webkit-slider-thumb{visibility:hidden;-webkit-appearance:none;background:#d8d8d8;border-radius:.83333333vw;height:1.66666667vw;width:1.66666667vw;cursor:pointer}input[type=range].scrubber::-webkit-slider-runnable-track{background:transparent;cursor:pointer;height:1.66666667vw;width:100%}.touch-layer.new-dpad-controls-overlay input[type=range].scrubber::-webkit-slider-runnable-track{height:1.71875vw}input[type=range].scrubber[disabled]::-webkit-slider-thumb{display:none}goog-timeline.focused .progress-bar{border-radius:.3125vw;height:.625vw;top:.52083333vw}goog-timeline.focused input[type=range].scrubber::-webkit-slider-thumb{visibility:visible}</style><div class=playback-layer><audio-player-compatibility-placeholder></audio-player-compatibility-placeholder><div class=scrim></div><div class=buffering-scrim></div><div class=controls-layer id=controls-layer><div class=controls-toggle id=controls-toggle role=button></div><goog-video-metadata></goog-video-metadata><div class=controls id=controls><goog-timeline></goog-timeline><goog-buttons-bar></goog-buttons-bar></div></div><goog-break-ui></goog-break-ui><div aria-live=assertive class=accessibility-alert id=alert-show-controls style="display: none;"></div><div aria-live=assertive class=accessibility-alert id=alert-hide-controls style="display: none;"></div></div><div class=media-browse-scrim></div><goog-media-browse></goog-media-browse>';
    };
    cast.receiver.C.xq = function (a) {
        qc(a, _.Cb('<play-pause-placeholder></play-pause-placeholder><div class=time-bar><div class=scrubber-layer id=scrubber-layer><div class=progress-bar><div class=progress-fill id=progress-fill></div><div class=progress-seekable-range id=progress-seekable-range></div><div class=progress-seekable-played id=progress-seekable-played></div><div class="progress-loading loading-bar" id=progress-loading><div class="rect rect-primary"><span class=rect-inner></span></div><div class="rect rect-auxiliary"><span class=rect-inner></span></div></div><div class=progress-breaks id=progress-breaks></div></div><input class=scrubber id=scrubber max=0 min=0 step=any type=range></div><div class=time-numbers><div aria-hidden=true class="time-indicator left" id=current-time></div><div class=right><div class=live-label id=live-label style="display: none"></div><div aria-hidden=true class=time-indicator id=total-time></div></div></div></div>'));
    };
    cast.receiver.C.yq = function (a) {
        a.innerHTML = '<play-pause-placeholder></play-pause-placeholder><div class=scrubber-layer id=scrubber-layer><div class=progress-bar><div class=progress-fill id=progress-fill></div><div class=progress-seekable-range id=progress-seekable-range></div><div class=progress-seekable-played id=progress-seekable-played></div><div class="progress-loading loading-bar" id=progress-loading><div class="rect rect-primary"><span class=rect-inner></span></div><div class="rect rect-auxiliary"><span class=rect-inner></span></div></div><div class=progress-breaks id=progress-breaks></div></div><input class=scrubber id=scrubber max=0 min=0 step=any type=range></div><div class=time-numbers><div aria-hidden=true class="time-indicator left" id=current-time></div><div class=right><div class=live-label id=live-label style="display: none"></div><div aria-hidden=true class=time-indicator id=total-time></div></div></div>';
    };
    _.r(km, _.z);
    km.prototype.A = function (a) {
        this.l = arguments;
        this.j || this.B ? this.o = !0 : lm(this);
    };
    km.prototype.stop = function () {
        this.j && (_.u.clearTimeout(this.j), this.j = null, this.o = !1, this.l = null);
    };
    km.prototype.pause = function () {
        this.B++;
    };
    km.prototype.ka = function () {
        _.z.prototype.ka.call(this);
        this.stop();
    };
    _.r(rm, lf);
    rm.prototype.Ck = function (a) {
        J(this, a);
    };
    window.customElements && window.customElements.define && (window.customElements.get('goog-timeline') || window.customElements.define('goog-timeline', rm));
    cast.receiver.C.Rw = rm;
    var Gm = ['ArrowUp', 'ArrowRight', 'ArrowDown', 'ArrowLeft', 'Enter'];
    const bB = _.B('cast.receiver.ui.KeyboardLayerController');
    _.h = Em.prototype;
    _.h.fd = function () {
        const a = this;
        this.I || (setTimeout(function () {
            a.I = !1;
            if (a.G) a.j.focus(a.l), a.A.l = null;
            else {
                const b = a.B;
                b ? a.j.isFocused(a.A) || a.j.isFocused(a.D) || a.j.isFocused(a.F) ? a.O !== b && Am(a) : Am(a) : Bm(a);
                a.O = b;
            }
        }, 0), this.I = !0);
    };
    _.h.cg = function (a) {
        this.G !== a && _.G(bB, `<touch-controls> element is ${a ? 'disabled' : 'enabled'}`);
        if (this.G = a) this.H = !1;
        this.fd();
        this.l.classList.toggle('disabled', a);
        Jf(this.o, a);
    };
    _.h.Qh = function (a) {
        this.l.classList.toggle('buffering', a);
    };
    _.h.zi = function () {
        const a = this.o;
        a.j = !0;
        Gf(a);
        this.H && (this.H = !1, Lf(this.o));
    };
    _.h.yi = function () {
        const a = this.o;
        a.j = !1;
        Gf(a);
        this.H || Dm(this);
        this.H = !0;
        Lf(this.o);
    };
    _.h.Ai = function (a) {
        const b = this.o;
        b.B = a;
        Gf(b);
        a && Dm(this);
    };
    _.h.xi = function () { };
    _.h.dg = function () { };
    _.h.wi = function () { };
    _.h.vi = function () { };
    /*

     Copyright 2019 Google LLC
     SPDX-License-Identifier: BSD-3-Clause
    */
    /*

     SPDX-License-Identifier: Apache-2.0
    */
    const cB = [Jm('data'), Jm('http'), Jm('https'), Jm('mailto'), Jm('ftp'), new Im(function (a) {
        return /^[^:]*([/?#]|$)/.test(a);
    })];
    /*

     Copyright 2018 Google LLC
     SPDX-License-Identifier: BSD-3-Clause
    */
    const dB = {
        CONSTANT: {
            Nc(a) {
                return a instanceof Ab;
            },
            Vc: _.Bb,
        },
        JAVASCRIPT: {
            Nc(a) {
                return a instanceof Eb || a instanceof Eb;
            },
            Vc(a) {
                a instanceof Eb && a.constructor === Eb ? a = a.j : (_.Va(`expected object of type SafeScript, got '${a}' of type ${_.Fa(a)}`), a = 'type_error:SafeScript');
                return a;
            },
        },
        HTML: {
            Nc(a) {
                return a instanceof cc || a instanceof cc;
            },
            Vc(a) {
                return _.dc(a);
            },
        },
        RESOURCE_URL: {
            Nc(a) {
                return a instanceof Hb || a instanceof Hb;
            },
            Vc(a) {
                return _.Ib(a);
            },
        },
        STRING: {
            Nc(a) {
                return a
                    instanceof Object;
            },
            Vc: Km,
        },
        STYLE: {
            Nc(a) {
                return a instanceof Wb || a instanceof Wb;
            },
            Vc(a) {
                a instanceof Wb && a.constructor === Wb ? a = a.j : (_.Va(`expected object of type SafeStyle, got '${a}' of type ${_.Fa(a)}`), a = 'type_error:SafeStyle');
                return a;
            },
        },
        URL: {
            Nc(a) {
                return a instanceof _.Tb || a instanceof _.Tb;
            },
            Vc: Hm,
        },
    };
    const eB = {
        CONSTANT: Lm,
        JAVASCRIPT: Lm,
        HTML(a) {
            return _.dc(_.nc(a));
        },
        RESOURCE_URL: Lm,
        STRING: String,
        STYLE: Lm,
        URL(a, b) {
            a: {
                var c = void 0 === c ? cB : c;
                for (let d = 0; d < c.length; ++d) {
                    const e = c[d];
                    if (e instanceof Im && e.isValid(a)) {
                        a = new _.Tb(a, _.Sb);
                        break a;
                    }
                }
                a = void 0;
            }
            return void 0 === a ? b : a.toString();
        },
    };
    /*

     Copyright 2017 Google LLC
     SPDX-License-Identifier: BSD-3-Clause
    */
    const fB = _.B('resin');
    var Om = {
        align: 1,
        alt: 1,
        'aria-activedescendant': 10,
        'aria-atomic': 1,
        'aria-autocomplete': 1,
        'aria-busy': 1,
        'aria-checked': 1,
        'aria-controls': 10,
        'aria-current': 1,
        'aria-disabled': 1,
        'aria-dropeffect': 1,
        'aria-expanded': 1,
        'aria-haspopup': 1,
        'aria-hidden': 1,
        'aria-invalid': 1,
        'aria-label': 1,
        'aria-labelledby': 10,
        'aria-level': 1,
        'aria-live': 1,
        'aria-multiline': 1,
        'aria-multiselectable': 1,
        'aria-orientation': 1,
        'aria-owns': 10,
        'aria-posinset': 1,
        'aria-pressed': 1,
        'aria-readonly': 1,
        'aria-relevant': 1,
        'aria-required': 1,
        'aria-selected': 1,
        'aria-setsize': 1,
        'aria-sort': 1,
        'aria-valuemax': 1,
        'aria-valuemin': 1,
        'aria-valuenow': 1,
        'aria-valuetext': 1,
        async: 8,
        autocapitalize: 1,
        autocomplete: 1,
        autocorrect: 1,
        autofocus: 1,
        autoplay: 1,
        bgcolor: 1,
        border: 1,
        cellpadding: 1,
        cellspacing: 1,
        checked: 1,
        cite: 3,
        class: 1,
        color: 1,
        cols: 1,
        colspan: 1,
        contenteditable: 1,
        controls: 1,
        datetime: 1,
        dir: 8,
        disabled: 1,
        download: 1,
        draggable: 1,
        enctype: 1,
        face: 1,
        for: 10,
        formenctype: 1,
        frameborder: 1,
        height: 1,
        hidden: 1,
        href: 4,
        hreflang: 1,
        id: 10,
        ismap: 1,
        itemid: 1,
        itemprop: 1,
        itemref: 1,
        itemscope: 1,
        itemtype: 1,
        label: 1,
        lang: 1,
        list: 10,
        loading: 8,
        loop: 1,
        max: 1,
        maxlength: 1,
        media: 1,
        min: 1,
        minlength: 1,
        multiple: 1,
        muted: 1,
        name: 10,
        nonce: 1,
        open: 1,
        placeholder: 1,
        poster: 3,
        preload: 1,
        rel: 1,
        required: 1,
        reversed: 1,
        role: 1,
        rows: 1,
        rowspan: 1,
        selected: 1,
        shape: 1,
        size: 1,
        sizes: 1,
        slot: 1,
        span: 1,
        spellcheck: 1,
        src: 4,
        srcset: 11,
        start: 1,
        step: 1,
        style: 5,
        summary: 1,
        tabindex: 1,
        target: 8,
        title: 1,
        translate: 1,
        type: 1,
        valign: 1,
        value: 1,
        width: 1,
        wrap: 1,
    };
    var Nm = {
        a: {
            href: [{
                ja: 3,
            }],
        },
        area: {
            href: [{
                ja: 3,
            }],
        },
        audio: {
            src: [{
                ja: 3,
            }],
        },
        button: {
            formaction: [{
                ja: 3,
            }],
            formmethod: [{
                ja: 1,
            }],
        },
        form: {
            action: [{
                ja: 3,
            }],
            method: [{
                ja: 1,
            }],
        },
        iframe: {
            srcdoc: [{
                ja: 2,
            }],
        },
        img: {
            src: [{
                ja: 3,
            }],
        },
        input: {
            accept: [{
                ja: 1,
            }],
            formaction: [{
                ja: 3,
            }],
            formmethod: [{
                ja: 1,
            }],
            pattern: [{
                ja: 1,
            }],
            readonly: [{
                ja: 1,
            }],
            src: [{
                ja: 3,
            }],
        },
        link: {
            href: [{
                ja: 3,
                Ka: 'rel',
                Na: 'alternate',
            }, {
                ja: 3,
                Ka: 'rel',
                Na: 'author',
            }, {
                ja: 3,
                Ka: 'rel',
                Na: 'bookmark',
            }, {
                ja: 3,
                Ka: 'rel',
                Na: 'canonical',
            }, {
                ja: 3,
                Ka: 'rel',
                Na: 'cite',
            }, {
                ja: 3,
                Ka: 'rel',
                Na: 'help',
            }, {
                ja: 3,
                Ka: 'rel',
                Na: 'icon',
            }, {
                ja: 3,
                Ka: 'rel',
                Na: 'license',
            }, {
                ja: 3,
                Ka: 'rel',
                Na: 'next',
            }, {
                ja: 3,
                Ka: 'rel',
                Na: 'prefetch',
            },
            {
                ja: 3,
                Ka: 'rel',
                Na: 'dns-prefetch',
            }, {
                ja: 3,
                Ka: 'rel',
                Na: 'prerender',
            }, {
                ja: 3,
                Ka: 'rel',
                Na: 'preconnect',
            }, {
                ja: 3,
                Ka: 'rel',
                Na: 'preload',
            }, {
                ja: 3,
                Ka: 'rel',
                Na: 'prev',
            }, {
                ja: 3,
                Ka: 'rel',
                Na: 'search',
            }, {
                ja: 3,
                Ka: 'rel',
                Na: 'subresource',
            },
            ],
        },
        script: {
            defer: [{
                ja: 1,
            }],
        },
        source: {
            src: [{
                ja: 3,
            }],
        },
        textarea: {
            readonly: [{
                ja: 1,
            }],
        },
        video: {
            src: [{
                ja: 3,
            }],
        },
    };
    var mn = {
        a: 1,
        abbr: 1,
        address: 1,
        applet: 4,
        area: 5,
        article: 1,
        aside: 1,
        audio: 1,
        b: 1,
        base: 4,
        bdi: 1,
        bdo: 1,
        blockquote: 1,
        body: 1,
        br: 5,
        button: 1,
        canvas: 1,
        caption: 1,
        center: 1,
        cite: 1,
        code: 1,
        col: 5,
        colgroup: 1,
        command: 1,
        data: 1,
        datalist: 1,
        dd: 1,
        del: 1,
        details: 1,
        dfn: 1,
        dialog: 1,
        div: 1,
        dl: 1,
        dt: 1,
        em: 1,
        embed: 4,
        fieldset: 1,
        figcaption: 1,
        figure: 1,
        font: 1,
        footer: 1,
        form: 1,
        frame: 1,
        frameset: 1,
        h1: 1,
        h2: 1,
        h3: 1,
        h4: 1,
        h5: 1,
        h6: 1,
        head: 1,
        header: 1,
        hr: 5,
        html: 1,
        i: 1,
        iframe: 1,
        img: 5,
        input: 5,
        ins: 1,
        kbd: 1,
        label: 1,
        legend: 1,
        lh: 1,
        li: 1,
        link: 5,
        main: 1,
        map: 1,
        mark: 1,
        math: 4,
        menu: 1,
        meta: 4,
        meter: 1,
        nav: 1,
        noscript: 1,
        object: 4,
        ol: 1,
        optgroup: 1,
        option: 1,
        output: 1,
        p: 1,
        param: 5,
        picture: 1,
        pre: 1,
        progress: 1,
        q: 1,
        rb: 1,
        rp: 1,
        rt: 1,
        rtc: 1,
        ruby: 1,
        s: 1,
        samp: 1,
        script: 3,
        section: 1,
        select: 1,
        slot: 1,
        small: 1,
        source: 5,
        span: 1,
        strong: 1,
        style: 2,
        sub: 1,
        summary: 1,
        sup: 1,
        svg: 4,
        table: 1,
        tbody: 1,
        td: 1,
        template: 4,
        textarea: 6,
        tfoot: 1,
        th: 1,
        thead: 1,
        time: 1,
        title: 6,
        tr: 1,
        track: 5,
        u: 1,
        ul: 1,
        var: 1,
        video: 1,
        wbr: 5,
    };
    var yn = [{
        auto: !0,
        ltr: !0,
        rtl: !0,
    }, {
        async: !0,
    }, {
        eager: !0,
        lazy: !0,
    }, {
        _self: !0,
        _blank: !0,
    }];
    var xn = {
        '*': {
            async: 1,
            dir: 0,
            loading: 2,
            target: 3,
        },
    };
    var Xm = 'aLink accessKey allowFullscreen bgColor cellPadding cellSpacing codeBase codeType contentEditable crossOrigin dateTime dirName formAction formEnctype formMethod formNoValidate formTarget frameBorder innerHTML innerText inputMode isMap longDesc marginHeight marginWidth maxLength mediaGroup minLength noHref noResize noShade noValidate noWrap nodeValue outerHTML outerText readOnly tabIndex textContent trueSpeed useMap vAlign vLink valueAsDate valueAsNumber valueType'.split(' ');
    var Wm = {
        accept_charset: 'acceptCharset',
        char: 'ch',
        charoff: 'chOff',
        checked: 'defaultChecked',
        class: 'className',
        for: 'htmlFor',
        http_equiv: 'httpEquiv',
        muted: 'defaultMuted',
        selected: 'defaultSelected',
        value: 'defaultValue',
    };
    var Vm = null;
    var Qm = null;
    /*

     Copyright 2017 Google LLC
     SPDX-License-Identifier: BSD-3-Clause

    */
    var Ym = {};
    var bn = RegExp('^(?!(?:annotation-xml|color-profile|font-face|font-face(?:-(?:src|uri|format|name))?|missing-glyph)$)[a-z][a-z.0-9_\u00b7\u00c0-\u00d6\u00d8-\u00f6\u00f8-\u037d\u200c\u200d\u203f-\u2040\u2070-\u218f\u2c00-\u2fef\u3001-\udfff\uf900-\ufdcf\ufdf0-\ufffd]*-[\\-a-z.0-9_\u00b7\u00c0-\u00d6\u00d8-\u00f6\u00f8-\u037d\u200c\u200d\u203f-\u2040\u2070-\u218f\u2c00-\u2fef\u3001-\udfff\uf900-\ufdcf\ufdf0-\ufffd]*$');
    /*

     Copyright 2020 Google LLC
     SPDX-License-Identifier: BSD-3-Clause
    */
    var nn = {
        text: 1,
    };
    var jn = {
        audio: {
            currentTime: 1,
            srcObject: 1,
        },
        video: {
            currentTime: 1,
            srcObject: 1,
        },
    };
    var zn = /(?!,)([^\t\n\f\r ]+)(?:[\t\n\f\r ]+([.0-9+\-]+[a-z]?))?/gi;
    var on = /[\t\n\f\r ]+/;
    var qn = /[\t\n\f\r ,]+/g;
    var An = {};
    const gB = function () {
        let a = function () {
            const d = {
                createHTML() {
                    return 'zClosurez';
                },
                createScript() {
                    return ' /*zClosurez*/ ';
                },
                createScriptURL() {
                    return 'about:invalid#zClosurez';
                },
            };
            return typeof trustedTypes !== 'undefined' ? trustedTypes.createPolicy('polymer_resin', d) : d;
        }();
        const b = a.createHTML('');
        const c = a.createScript('');
        a = a.createScriptURL('');
        return {
            hm: b,
            gm: c,
            im: a,
        };
    }();
    var vn = gB.hm;
    var wn = gB.gm;
    var un = gB.im;
    const hB = function (a) {
        function b(m) {
            const n = m.localName;
            if (!m.getAttribute('is') && gn(n, m.constructor) === 2) return l;
            (m = k[n]) || (m = k[n] = document.createElement(n));
            return m;
        }
        let c = a.reportHandler || void 0;
        const d = a.safeTypesBridge || tn;
        let e = /^$/;
        if (a = a.allowedIdentifierPrefixes) {
            a = _.q(a);
            for (let f = a.next(); !f.done; f = a.next()) e = new RegExp(`${e.source}|^${String(f.value).replace(/([-()\[\]{}+?*.$\^|,:#<!\\])/g, '\\$1').replace(/\x08/g, '\\x08')}`);
        }
        void 0 === c && typeof console !== 'undefined' && (c = sn);
        c && c(!1, 'initResin', null);
        const g = Bn(e, d, c);
        var k = {};
        var l = document.createElement('polyresinuncustomized');
        return function (m, n, t) {
            let v = m.nodeType;
            if (v !== Node.ELEMENT_NODE) {
                if (v === Node.TEXT_NODE) {
                    n = m.parentElement;
                    t = !n;
                    if (n && n.nodeType === Node.ELEMENT_NODE) {
                        v = n.localName;
                        var x = gn(v, n.constructor);
                        switch (x) {
                            case 0:
                            case 1:
                                n = ln(v, n);
                                t = n === 1 || n === 6;
                                break;
                            case 3:
                            case 2:
                                t = !0;
                                break;
                            default:
                                Mm(x, 'got an unknown element classification');
                        }
                    }
                    if (t) {
                        return function (I) {
                            return `${d(I, 'STRING', I)}`;
                        };
                    }
                }
                return function (I) {
                    if (!I && I !== document.all) return I;
                    c && c(!0, `Failed to sanitize ${m.parentElement && m.parentElement.nodeName} #text node to value ${I}`, m.parentElement);
                    return vn;
                };
            }
            const C = m.localName;
            v = b(m);
            let E = null;
            switch (t) {
                case 'attribute':
                    if (Tm(n) in v) break;
                    return function (I) {
                        return I;
                    };
                case 'property':
                    if (n in v) {
                        E = kn(v, n);
                        break;
                    }
                    if ((x = Um(n)) && x in v) break;
                    return function (I) {
                        return I;
                    };
                default:
                    Mm(t, "got an unknown resin type, expected either 'property' or 'attribute'");
            }
            const T = t === 'attribute' ? n.toLowerCase() : Sm(n);
            E || (E = Pm(C, T, function (I) {
                const Y = m.getAttribute(I);
                return !Y || /[\[\{]/.test(I)
                    ? null : Y;
            }));
            return function (I) {
                let Y = An;
                let Gb = null;
                if (!I && I !== document.all) return I;
                if (E != null) {
                    const gc = g[E];
                    const Mc = gc.Gb;
                    Gb = gc.Fb;
                    Mc && (Y = d(I, Mc, An));
                    Y === An && (gc.ub ? (Y = String(d(I, 'STRING', I)), Y = gc.ub(C, T, Y)) : gc.tb && (Y = gc.tb(C, T, I, m)), Y === Gb && (Y = An));
                }
                Y === An && (Y = Gb || vn, c && (I = void 0 !== I.vb ? I.vb() : I, c(!0, `Failed to sanitize attribute of <${C}>: <${C} ${T}="${I}">`, m)));
                return Y;
            };
        };
    }({
        allowedIdentifierPrefixes: [''],
        reportHandler(a, b) {
            a && _.F(fB, b);
        },
        safeTypesBridge(a, b, c) {
            let d = dB[b];
            return d.Nc(a)
                && (d = d.Vc(a, c), d !== c) ? d : (0, eB[b])(String(Km(a)), c);
        },
    });
    /*

     Copyright 2021 Google LLC
     SPDX-License-Identifier: BSD-3-Clause
    */
    let iB; var Dn = new Set();
    var Cn = new Map();
    (iB = window).litHtmlPolyfillSupportDevMode != null || (iB.litHtmlPolyfillSupportDevMode = En);
    let jB = '';
    if (window.Symbol) {
        const kB = Symbol();
        typeof kB !== 'symbol' && (jB = Object.keys(kB)[0]);
    }
    const lB = jB !== '';
    var In = lB ? function (a) {
        return a != null && void 0 !== a[jB];
    } : function () {
        return !1;
    };
    if (lB && !window.Symbol.for) {
        const mB = new Map();
        window.Symbol.for = function (a) {
            mB.has(a) || mB.set(a, Symbol(a));
            return mB.get(a);
        };
    }
    let nB; let oB; var Ln = 0;
    let ao;
    (nB = window).litIssuedWarnings != null || (nB.litIssuedWarnings = new Set());
    ao = function (a, b) {
        b += a ? ` See https://lit.dev/msg/${a} for more information.` : '';
        window.litIssuedWarnings.has(b) || (console.warn(b), window.litIssuedWarnings.add(b));
    };
    ao('dev-mode', 'Lit is in dev mode. Not recommended for production!');
    let pB; let qB; let rB; const sB = ((pB = window.ShadyDOM) == null ? 0 : pB.inUse) && (!0 === ((qB = window.ShadyDOM) == null ? void 0 : qB.noPatch) || ((rB = window.ShadyDOM) == null ? void 0 : rB.noPatch) === 'on-demand') ? window.ShadyDOM.wrap : function (a) {
        return a;
    };
    var go = window.trustedTypes;
    var Yn = go ? go.createPolicy('lit-html', {
        createHTML(a) {
            return a;
        },
    }) : void 0;
    var Xn = `lit$${String(Math.random()).slice(9)}$`;
    var ho = `?${Xn}`;
    var Wn = `<${ho}>`;
    var Nn = document;
    const tB = Array.isArray;
    var Pn = /<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g;
    var Qn = /--\x3e/g;
    var Rn = />/g;
    var Tn = RegExp(">|[ \t\n\f\r](?:([^\\s\"'>=/]+)([ \t\n\f\r]*=[ \t\n\f\r]*(?:[^ \t\n\f\r\"'`<>=]|(\"|')|))|$)",
        'g');
    var Vn = /'/g;
    var Un = /"/g;
    var Sn = /^(?:script|style|textarea|title)$/i;
    var io = Symbol.for('lit-noChange');
    var lo = Symbol.for('lit-nothing');
    const uB = new WeakMap();
    var $n = Nn.createTreeWalker(Nn, 129, null, !1);
    Zn.createElement = function (a) {
        const b = Nn.createElement('template');
        b.innerHTML = a;
        return b;
    };
    ko.prototype.o = function (a) {
        let b = this.ng;
        let c = b.Dc.content;
        b = b.parts;
        let d; const
            e = ((d = a == null ? void 0 : a.Zw) != null ? d : Nn).importNode(c, !0);
        $n.currentNode = e;
        c = $n.nextNode();
        for (let f = d = 0, g = b[0]; void 0 !== g;) {
            if (d === g.index) {
                var k = void 0;
                g.type === 2 ? k = new Mn(c, c.nextSibling, this, a) : g.type === 1 ? k = new g.He(c, g.name, g.strings, this, a) : g.type === 6 && (k = new mo(c, this, a));
                this.j.push(k);
                g = b[++f];
            }
            k = void 0;
            d !== ((k = g) == null ? void 0 : k.index) && (c = $n.nextNode(), d++);
        }
        return e;
    };
    ko.prototype.l = function (a) {
        for (let b = 0, c = _.q(this.j), d = c.next(); !d.done; d = c.next()) {
            d = d.value;
            if (void 0 !== d) {
                let e = void 0;
                (e = Fn) == null || e({
                    kind: 'set part',
                    mk: d,
                    value: a[b],
                    valueIndex: b,
                    values: a,
                    Bx: this,
                });
                void 0 !== d.strings ? (d.Ob(a, d, b), b += d.strings.length - 2) : d.Ob(a[b]);
            }
            b++;
        }
    };
    ea.Object.defineProperties(ko.prototype, {
        parentNode: {
            configurable: !0,
            enumerable: !0,
            get() {
                return this.Oa.parentNode;
            },
        },
        qb: {
            configurable: !0,
            enumerable: !0,
            get() {
                return this.Oa.qb;
            },
        },
    });
    _.h = Mn.prototype;
    _.h.Ob = function (a, b) {
        if (this.parentNode === null) throw Error("This `ChildPart` has no `parentNode` and therefore cannot accept a value. This likely means the element containing the part was manipulated in an unsupported way outside of Lit's control such that the part's marker nodes were ejected from DOM. For example, setting the element's `innerHTML` or `textContent` can do this.");
        a = jo(this, a, void 0 === b ? this : b);
        Jn(a) ? a === lo || a == null || a === '' ? (this.ma !== lo && (Fn == null || Fn({
            kind: 'commit nothing to child',
            start: this.ab,
            end: this.Nb,
            parent: this.Oa,
            options: this.options,
        }), this.Nd()), this.ma = lo) : a !== this.ma && a !== io && this.kj(a) : void 0 !== a._$litType$ ? this.Yq(a) : void 0 !== a.nodeType ? this.og(a) : tB(a) || typeof (a == null ? void 0 : a[Symbol.iterator]) === 'function' ? this.Xq(a) : this.kj(a);
    };
    _.h.qg = function (a, b) {
        b = void 0 === b ? this.Nb : b;
        return sB(sB(this.ab).parentNode).insertBefore(a, b);
    };
    _.h.og = function (a) {
        if (this.ma !== a) {
            this.Nd();
            if (hB !== Hn) {
                let b; const
                    c = (b = this.ab.parentNode) == null ? void 0 : b.nodeName;
                if (c === 'STYLE' || c === 'SCRIPT') throw Error(c === 'STYLE' ? 'Lit does not support binding inside style nodes. This is a security risk, as style injection attacks can exfiltrate data and spoof UIs. Consider instead using css`...` literals to compose styles, and make do dynamic styling with css custom properties, ::parts, <slot>s, and by mutating the DOM rather than stylesheets.' : 'Lit does not support binding inside script nodes. This is a security risk, as it could allow arbitrary code execution.');
            }
            Fn == null || Fn({
                kind: 'commit node',
                start: this.ab,
                parent: this.Oa,
                value: a,
                options: this.options,
            });
            this.ma = this.qg(a);
        }
    };
    _.h.kj = function (a) {
        if (this.ma !== lo && Jn(this.ma)) {
            var b = sB(this.ab).nextSibling;
            void 0 === this.ed && (this.ed = hB(b, 'data', 'property'));
            a = this.ed(a);
            Fn == null || Fn({
                kind: 'commit text',
                node: b,
                value: a,
                options: this.options,
            });
            b.data = a;
        } else {
            b = document.createTextNode(''), this.og(b), void 0 === this.ed && (this.ed = hB(b, 'data', 'property')), a = this.ed(a), Fn == null || Fn({
                kind: 'commit text',
                node: b,
                value: a,
                options: this.options,
            }), b.data = a;
        }
        this.ma = a;
    };
    _.h.Yq = function (a) {
        const b = a.values;
        let c = a._$litType$;
        a = typeof c === 'number' ? this.hj(a) : (void 0 === c.Dc && (c.Dc = Zn.createElement(c.h, this.options)), c);
        let d;
        ((d = this.ma) == null ? void 0 : d.ng) === a ? (Fn == null || Fn({
            kind: 'template updating',
            template: a,
            instance: this.ma,
            parts: this.ma.j,
            options: this.options,
            values: b,
        }), this.ma.l(b)) : (d = new ko(a, this), c = d.o(this.options), Fn == null || Fn({
            kind: 'template instantiated',
            template: a,
            instance: d,
            parts: d.j,
            options: this.options,
            Qr: c,
            values: b,
        }), d.l(b), Fn == null || Fn({
            kind: 'template instantiated and updated',
            template: a,
            instance: d,
            parts: d.j,
            options: this.options,
            Qr: c,
            values: b,
        }), this.og(c), this.ma = d);
    };
    _.h.hj = function (a) {
        let b = uB.get(a.strings);
        void 0 === b && uB.set(a.strings, b = new Zn(a));
        return b;
    };
    _.h.Xq = function (a) {
        tB(this.ma) || (this.ma = [], this.Nd());
        const b = this.ma;
        let c = 0;
        let d;
        a = _.q(a);
        for (let e = a.next(); !e.done; e = a.next()) e = e.value, c === b.length ? b.push(d = new Mn(this.qg(Nn.createComment('')), this.qg(Nn.createComment('')), this, this.options)) : d = b[c], d.Ob(e), c++;
        c < b.length && (this.Nd(d && sB(d.Nb).nextSibling, c), b.length = c);
    };
    _.h.Nd = function (a, b) {
        a = void 0 === a ? sB(this.ab).nextSibling : a;
        let c;
        for ((c = this.mg) == null || c.call(this, !1, !0, b); a && a !== this.Nb;) b = sB(a).nextSibling, sB(a).remove(), a = b;
    };
    ea.Object.defineProperties(Mn.prototype, {
        qb: {
            configurable: !0,
            enumerable: !0,
            get() {
                let a; let
                    b;
                return (b = (a = this.Oa) == null ? void 0 : a.qb) != null ? b : this.jj;
            },
        },
        parentNode: {
            configurable: !0,
            enumerable: !0,
            get() {
                let a = sB(this.ab).parentNode;
                const b = this.Oa;
                void 0 !== b && a.nodeType === 11 && (a = b.parentNode);
                return a;
            },
        },
    });
    fo.prototype.Ob = function (a, b, c, d) {
        b = void 0 === b ? this : b;
        const e = this.strings;
        let f = !1;
        if (void 0 === e) {
            if (a = jo(this, a, b, 0), f = !Jn(a) || a !== this.ma && a !== io) this.ma = a;
        } else {
            const g = a;
            a = e[0];
            let k;
            for (k = 0; k < e.length - 1; k++) {
                let l = jo(this, g[c + k], b, k);
                l === io && (l = this.ma[k]);
                f || (f = !Jn(l) || l !== this.ma[k]);
                if (l === lo) a = lo;
                else if (a !== lo) {
                    let m = void 0;
                    a += ((m = l) != null ? m : '') + e[k + 1];
                }
                this.ma[k] = l;
            }
        }
        f && !d && this.pg(a);
    };
    fo.prototype.pg = function (a) {
        if (a === lo) sB(this.element).removeAttribute(this.name);
        else {
            void 0 === this.cd && (this.cd = hB(this.element, this.name, 'attribute'));
            let b;
            a = this.cd((b = a) != null ? b : '');
            Fn == null || Fn({
                kind: 'commit attribute',
                element: this.element,
                name: this.name,
                value: a,
                options: this.options,
            });
            let c;
            sB(this.element).setAttribute(this.name, (c = a) != null ? c : '');
        }
    };
    ea.Object.defineProperties(fo.prototype, {
        tagName: {
            configurable: !0,
            enumerable: !0,
            get() {
                return this.element.tagName;
            },
        },
        qb: {
            configurable: !0,
            enumerable: !0,
            get() {
                return this.Oa.qb;
            },
        },
    });
    _.r(bo, fo);
    bo.prototype.pg = function (a) {
        void 0 === this.cd && (this.cd = hB(this.element, this.name, 'property'));
        a = this.cd(a);
        Fn == null || Fn({
            kind: 'commit property',
            element: this.element,
            name: this.name,
            value: a,
            options: this.options,
        });
        this.element[this.name] = a === lo ? void 0 : a;
    };
    const vB = go ? go.emptyScript : '';
    _.r(co, fo);
    co.prototype.pg = function (a) {
        Fn == null || Fn({
            kind: 'commit boolean attribute',
            element: this.element,
            name: this.name,
            value: !(!a || a === lo),
            options: this.options,
        });
        a && a !== lo ? sB(this.element).setAttribute(this.name, vB) : sB(this.element).removeAttribute(this.name);
    };
    _.r(eo, fo);
    eo.prototype.Ob = function (a, b) {
        let c;
        a = (c = jo(this, a, void 0 === b ? this : b, 0)) != null ? c : lo;
        if (a !== io) {
            b = this.ma;
            c = a === lo && b !== lo || a.capture !== b.capture || a.once !== b.once || a.passive !== b.passive;
            const d = a !== lo && (b === lo || c);
            Fn == null || Fn({
                kind: 'commit event listener',
                element: this.element,
                name: this.name,
                value: a,
                options: this.options,
                removeListener: c,
                addListener: d,
                ux: b,
            });
            c && this.element.removeEventListener(this.name, this, b);
            d && this.element.addEventListener(this.name, this, a);
            this.ma = a;
        }
    };
    eo.prototype.handleEvent = function (a) {
        if (typeof this.ma === 'function') {
            let b; let
                c;
            this.ma.call((c = (b = this.options) == null ? void 0 : b.host) != null ? c : this.element, a);
        } else this.ma.handleEvent(a);
    };
    mo.prototype.Ob = function (a) {
        Fn == null || Fn({
            kind: 'commit to element binding',
            element: this.element,
            value: a,
            options: this.options,
        });
        jo(this, a);
    };
    ea.Object.defineProperties(mo.prototype, {
        qb: {
            configurable: !0,
            enumerable: !0,
            get() {
                return this.Oa.qb;
            },
        },
    });
    let wB;
    (wB = window.litHtmlPolyfillSupportDevMode) == null || wB(Zn, Mn);
    let xB;
    ((xB = (oB = window).litHtmlVersions) != null ? xB : oB.litHtmlVersions = []).push('2.2.6');
    window.litHtmlVersions.length > 1 && ao('multiple-versions', 'Multiple versions of Lit loaded. Loading multiple versions is not recommended.');
    const yB = _.ia(["\n<style>\n:host{font-family:'Google Sans','Roboto',Arial,sans-serif;position:absolute;pointer-events:none;top:0;left:0;display:block;height:100%;width:100%}.media-browse-root{width:100%;height:100%}.media-browse-landing-background{display:none;bottom:0;height:100%;left:0;position:absolute;width:100%;background-image:radial-gradient(circle at top left, #fff 0, #f1f3f4 50%, #f1f3f4 100%)}goog-mini-player{margin-left:auto;pointer-events:initial}.media-browse-root.landing goog-mini-player{display:none}.media-browse-root.landing .media-browse-landing-background{display:block}.media-browse-root.landing .media-browse-content-layer{transform:initial}.media-browse-root.landing .browse-item-img{box-shadow:8px 8px 20px rgba(218,220,224,0.8)}.media-browse-root.landing .browse-item-title{color:#3c4043}.media-browse-root.landing .media-browse-title,.media-browse-root.landing .browse-item-subtitle{color:#80868b}.media-browse-root.landing .media-browse-top-bar{opacity:initial !important;visibility:initial !important}.media-browse-root.landing .media-browse-touch-shield{display:none}.media-browse-root.landing .media-browse-carousel{overflow-x:scroll !important}.media-browse-content-layer{display:flex;width:100%;height:100%;position:absolute;box-sizing:border-box;left:0;top:0;padding:104px 0 0}@media (min-width: 1200px){.media-browse-content-layer{padding:159px 0 0}}.media-browse-carousel{font-size:0;pointer-events:initial;overflow-x:scroll;overflow-y:hidden;width:100%;height:100%;white-space:nowrap;position:relative;box-sizing:border-box;padding:0 0 0 44px}@media (min-width: 1200px){.media-browse-carousel{padding:0 0 0 56px}}.media-browse-touch-shield{pointer-events:initial;width:100%;height:100%;box-sizing:border-box;position:absolute;top:104px;left:0;z-index:1}@media (min-width: 1200px){.media-browse-touch-shield{top:159px}}.browse-item{margin-right:24px;vertical-align:top;display:inline-block;font-size:initial;white-space:initial;width:296px}@media (min-width: 1200px){.browse-item{margin-right:32px}}.browse-item .browse-item-img{width:296px;height:296px}@media (min-width: 1200px){.browse-item{width:360px}.browse-item .browse-item-img{width:360px;height:360px}}.browse-item.portrait-2-to-3{width:240px}.browse-item.portrait-2-to-3 .browse-item-img{width:240px;height:360px}@media (min-width: 1200px){.browse-item.portrait-2-to-3{width:260px}.browse-item.portrait-2-to-3 .browse-item-img{width:260px;height:390px}}@media (min-width: 1200px){.browse-item.portrait-2-to-3 .browse-item-title{font-size:36px;line-height:44px}}.browse-item.portrait-2-to-3 .browse-item-subtitle{-webkit-line-clamp:1}.browse-item.landscape-16-to-9{width:448px}.browse-item.landscape-16-to-9 .browse-item-img{width:448px;height:252px}@media (min-width: 1200px){.browse-item.landscape-16-to-9{width:560px}.browse-item.landscape-16-to-9 .browse-item-img{width:560px;height:315px}}.browse-item-img{position:relative;background-position:center center;background-size:132px 132px;background-color:#dadce0;background-image:url('//www.gstatic.com/cast/sdk/assets/icons/ic_default-image.svg');background-repeat:no-repeat}.browse-item-img.has-image{background-size:contain}.browse-item-img.music-track{background-image:url('//www.gstatic.com/cast/sdk/assets/icons/ic_default-song.svg')}.browse-item-img.music-album{background-image:url('//www.gstatic.com/cast/sdk/assets/icons/ic_default-album.svg')}.browse-item-img.artist{background-image:url('//www.gstatic.com/cast/sdk/assets/icons/ic_guest.svg')}.browse-item-img.playlist,.browse-item-img.music-mix,.browse-item-img.music-genre{background-image:url('//www.gstatic.com/cast/sdk/assets/icons/ic_default-playlist.svg')}.browse-item-img.episode,.browse-item-img.photo{background-image:url('//www.gstatic.com/cast/sdk/assets/icons/ic_default-image.svg')}.browse-item-img.movie{background-image:url('//www.gstatic.com/cast/sdk/assets/icons/ic_default-movie.svg')}.browse-item-img.podcast,.browse-item-img.radio-station{background-image:url('//www.gstatic.com/cast/sdk/assets/icons/ic_default-podcast.svg')}.browse-item-img.audio-book{background-image:url('//www.gstatic.com/cast/sdk/assets/icons/ic_default-audiobook.svg')}.browse-item-img.video{background-image:url('//www.gstatic.com/cast/sdk/assets/icons/ic_media.svg')}.browse-item-img.tv-show{background-image:url('//www.gstatic.com/cast/sdk/assets/icons/ic_default-tv.svg')}.browse-item-img.news{background-image:url('//www.gstatic.com/cast/sdk/assets/icons/ic_default-newspaper.svg')}.duration,.live{position:absolute;bottom:16px;color:#fff;font-size:24px;line-height:24px;font-weight:500;padding:6px;border-radius:8px}.duration{right:16px;background-color:rgba(0,0,0,0.5)}.live{left:16px;background-color:#ea4335}.browse-item-text{margin:16px 4px 0}@media (min-width: 1200px){.browse-item-text{margin:29px 9px 0}}.browse-item-title{font-size:32px;line-height:40px;font-weight:400;margin:0 0 8px;color:#fff;-webkit-line-clamp:2;-webkit-box-orient:vertical;-webkit-box-pack:end;display:-webkit-box;overflow:hidden}@media (min-width: 1200px){.browse-item-title{font-size:40px;line-height:52px}}.browse-item-subtitle{font-size:24px;line-height:32px;font-weight:400;color:#bdc1c6;margin:0;-webkit-line-clamp:2;-webkit-box-orient:vertical;-webkit-box-pack:end;display:-webkit-box;overflow:hidden}@media (min-width: 1200px){.browse-item-subtitle{font-size:32px;line-height:40px}}.media-browse-logo{content:var(--playback-logo-image);background-position-x:left;background-repeat:no-repeat;background-size:contain;height:40px;margin-right:16px}@media (min-width: 1200px){.media-browse-logo{height:56px;margin-right:20px}}.media-browse-top-bar{padding:0 44px;top:0;box-sizing:border-box;width:100%;left:0;align-items:center;position:absolute;display:flex;flex-direction:row;height:104px}@media (min-width: 1200px){.media-browse-top-bar{padding:0 56px}}@media (min-width: 1200px){.media-browse-top-bar{height:159px}}.media-browse-title{font-weight:400;margin:0;font-size:32px;color:#bdc1c6}@media (min-width: 1200px){.media-browse-title{font-size:36px}}@media (prefers-color-scheme:dark){.media-browse-root.landing .media-browse-title,.media-browse-root.landing .browse-item-title{color:#e8eaed}.media-browse-root.landing .browse-item-img{box-shadow:8px 8px 20px rgba(0,0,0,0.8)}.media-browse-root.landing .browse-item-subtitle{color:#9aa0a6}.media-browse-landing-background{background-image:radial-gradient(circle at top left, #202124, #18191a)}}</style>\n"]);
    const zB = Kn(yB);
    const AB = _.ia(['\n<style>\n.mini-player-root{height:72px;border-radius:12px;display:flex;overflow:hidden}@media (min-width: 1200px){.mini-player-root{height:96px;border-radius:16px}}.btn{width:48px;height:48px;padding:12px;background-color:#3c4043}@media (min-width: 1200px){.btn{width:56px;height:56px;padding:20px}}.btn[aria-disabled=true]{pointer-events:none}.btn[aria-disabled=true] .btn-icon{opacity:.5}.btn-icon{width:48px;height:48px}@media (min-width: 1200px){.btn-icon{width:56px;height:56px}}.pause-icon{content:url("data:image/svg+xml,%3Csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20viewBox=%270%200%2048%2048%27%3E%0A%20%20%3Cpath%20d=%27M32%2C9.5v29%27%20fill=%27none%27%20stroke=%27%23fff%27%20stroke-linecap=%27round%27%0A%20%20%20%20%20%20stroke-linejoin=%27round%27%20stroke-width=%273%27/%3E%0A%20%20%3Cpath%20d=%27M16%2C9.5v29%27%20fill=%27none%27%20stroke=%27%23fff%27%20stroke-linecap=%27round%27%0A%20%20%20%20%20%20stroke-linejoin=%27round%27%20stroke-width=%273%27/%3E%0A%3C/svg%3E%0A")}.play-icon{content:url("data:image/svg+xml,%3Csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20viewBox=%270%200%2048%2048%27%3E%0A%20%20%3Cpolygon%20points=%2738.5%2024%2015.5%2038.5%2015.5%209.5%2038.5%2024%27%20fill=%27none%27%0A%20%20%20%20%20%20stroke=%27%23fff%27%20stroke-linecap=%27round%27%20stroke-linejoin=%27round%27%0A%20%20%20%20%20%20stroke-width=%273%27/%3E%0A%3C/svg%3E%0A")}.album-art{height:72px;max-width:300px}@media (min-width: 1200px){.album-art{height:96px}}</style>\n']);
    const BB = Kn(AB);
    _.r(po, lf);
    let CB; let DB; var so = ((CB = window.ShadyDOM) == null ? 0 : CB.inUse) && !0 === ((DB = window.ShadyDOM) == null ? void 0 : DB.noPatch) ? window.ShadyDOM.wrap : function (a) {
        return a;
    };
    const EB = {};
    vo.prototype.Uq = function (a, b, c) {
        this.B = a;
        this.Oa = b;
        this.A = c;
    };
    vo.prototype.Vq = function (a, b) {
        return this.update(a, b);
    };
    vo.prototype.update = function (a, b) {
        return this.j.apply(this, _.ja(b));
    };
    ea.Object.defineProperties(vo.prototype, {
        qb: {
            configurable: !0,
            enumerable: !0,
            get() {
                return this.Oa.qb;
            },
        },
    });
    _.r(wo, vo);
    wo.prototype.j = function (a) {
        return [a];
    };
    wo.prototype.update = function (a, b) {
        b = _.q(b).next().value;
        if (ro(this.l) && (!ro(b) || this.l.strings !== b.strings)) {
            var c = a.ma.pop();
            let d = this.o.get(this.l.strings);
            if (void 0 === d) {
                const e = d = On(lo, document.createDocumentFragment());
                if (void 0 === e.Oa) {
                    e.jj = !1;
                    var f;
                    (f = e.mg) == null || f.call(e, !1);
                } else throw Error('part.setConnected() may only be called on a RootPart returned from render().');
                this.o.set(this.l.strings, d);
            }
            f = [c];
            f = void 0 === f ? EB : f;
            d.ma = f;
            to(d, c);
        }
        ro(b) ? (ro(this.l) && this.l.strings === b.strings || (c = this.o.get(b.strings),
        void 0 !== c && (c = c.ma.pop(), a.Nd(), to(a, c), c = [c], c = void 0 === c ? EB : c, a.ma = c)), this.l = b) : this.l = void 0;
        return this.j(b);
    };
    const FB = uo(wo);
    _.r(xo, vo);
    xo.prototype.j = function (a) {
        return ` ${Object.keys(a).filter(function (b) {
            return a[b];
        }).join(' ')} `;
    };
    xo.prototype.update = function (a, b) {
        const c = this;
        const d = _.q(b).next().value;
        if (void 0 === this.l) {
            this.l = new Set();
            void 0 !== a.strings && (this.o = new Set(a.strings.join(' ').split(/\s/).filter(function (k) {
                return k !== '';
            })));
            for (var e in d) {
                var f = void 0;
                !d[e] || ((f = this.o) == null ? 0 : f.has(e)) || this.l.add(e);
            }
            return this.j(d);
        }
        const g = a.element.classList;
        this.l.forEach(function (k) {
            k in d || (g.remove(k), c.l.delete(k));
        });
        for (f in d) {
            e = !!d[f], a = void 0, e === this.l.has(f) || (a = this.o) != null && a.has(f) || (e ? (g.add(f), this.l.add(f)) : (g.remove(f),
            this.l.delete(f)));
        }
        return io;
    };
    var ap = uo(xo);
    var yo = {};
    _.r(zo, vo);
    zo.prototype.j = function (a, b) {
        return b();
    };
    zo.prototype.update = function (a, b) {
        const c = this;
        let d = _.q(b);
        b = d.next().value;
        d = d.next().value;
        if (Array.isArray(b)) {
            if (Array.isArray(this.l) && this.l.length === b.length && b.every(function (e, f) {
                return e === c.l[f];
            })) return io;
        } else if (this.l === b) return io;
        this.l = Array.isArray(b) ? Array.from(b) : b;
        return this.j(b, d);
    };
    const GB = uo(zo);
    _.r(Ao, vo);
    Ao.prototype.j = function (a) {
        return Object.keys(a).reduce(function (b, c) {
            const d = a[c];
            if (d == null) return b;
            c = c.replace(/(?:^(webkit|moz|ms|o)|)(?=[A-Z])/g, '-$&').toLowerCase();
            return `${b}${c}:${d};`;
        }, '');
    };
    Ao.prototype.update = function (a, b) {
        const c = this;
        const d = _.q(b).next().value;
        const e = a.element.style;
        void 0 === this.l && (this.l = new Set());
        this.l.forEach(function (g) {
            d[g] == null && (c.l.delete(g), g.includes('-') ? e.removeProperty(g) : e[g] = '');
        });
        for (const f in d) a = d[f], a != null && (this.l.add(f), f.includes('-') ? e.setProperty(f, a) : e[f] = a);
        return io;
    };
    var Fo = uo(Ao);
    const HB = _.ia(['\n      ', '\n      <div class="mini-player-root">\n        ', '\n        ', '\n      </div>']);
    var Co = _.ia(['\n      <div role="button" class="btn"\n           title="', '"\n           aria-disabled="', '"\n           @click="', '">\n        <img class="', ' btn-icon" src="" alt="" role="presentation">\n      </div>']);
    var Eo = _.ia(['\n      <div class="album-art" role="button"\n          aria-label="', '"\n          style="', '"\n          @click="', '">\n      </div>']);
    _.r(Bo, po);
    Bo.prototype.F = function () {
        const a = Kn(HB, BB, FB(Do(this)), Go(this));
        On(a, this.shadowRoot);
    };
    window.customElements && window.customElements.define && (window.customElements.get('goog-mini-player') || window.customElements.define('goog-mini-player', Bo));
    const IB = _.ia(["\n<style>\n.suggestions-bar-root{align-items:center;background:rgba(255,255,255,0.96);bottom:0;box-sizing:border-box;display:flex;font-size:0;height:112px;left:0;overflow-x:scroll;overflow-y:hidden;padding:0 44px;pointer-events:auto;position:fixed;white-space:nowrap;width:100%;z-index:1000;will-change:transform,opacity;transition:opacity .15s linear,transform .25s cubic-bezier(0, 0, 0, 1)}.suggestions-bar-root::after{content:'';padding-right:44px}.suggestions-bar-root.is-hidden{opacity:0;pointer-events:none;transform:translateY(100%);transition:opacity .15s linear .05s,transform .3s cubic-bezier(.2, 0, 0, 1)}@media (max-width: 1199px){.suggestions-bar-root{height:96px;padding:0 36px}.suggestions-bar-root::after{padding-right:36px}}@media (prefers-color-scheme:dark){.suggestions-bar-root{background:rgba(60,64,67,0.96)}}.suggestion-chip{background-color:transparent;border:2px solid #dadce0;border-radius:40px;color:#202124;display:inline-flex;flex:0 0 auto;font-size:40px;margin:16px 12px;padding:0 40px;position:relative}@media (max-width: 1199px){.suggestion-chip{border-radius:32px;font-size:32px;margin:16px 8px;padding:0 28px}}@media (prefers-color-scheme:dark){.suggestion-chip{border:2px solid #5f6368;color:#e8eaed}}</style>\n"]);
    const JB = Kn(IB);
    const KB = _.ia(['\n        ', '\n        <div class="', '">\n          ', '\n        </div>']);
    var Jo = _.ia(['']);
    var Lo = _.ia(['\n          <button class="', ' ', '"\n              @click="', '">\n              <goog-ripple theme-responsive></goog-ripple>\n              ', '\n          </button>']);
    var Ko = _.ia(['\n        ', '']);
    _.r(Io, po);
    Io.prototype.Yb = function (a) {
        this.l = a;
        No(a) && !this.o && (this.o = !0);
        this.scrollLeft = 0;
        oo(this);
    };
    Io.prototype.F = function () {
        const a = this;
        let b = {
            'suggestions-bar-root': !0,
        };
        b['is-hidden'] = this.j || !No(this.l);
        b = Kn(KB, JB, ap(b), GB([this.j, this.o, this.A], function () {
            return Mo(a, a.l);
        }));
        On(b, this.shadowRoot);
        this.j && (clearTimeout(this.I), this.I = setTimeout(this.L.bind(this), 4E3));
    };
    Io.prototype.L = function () {
        const a = this.shadowRoot.querySelector('.suggestions-bar-root');
        a && a.classList.contains('is-hidden') && (Ef(cast.receiver.C.X.K.kn), this.j = !1, oo(this));
    };
    window.customElements && window.customElements.define && (window.customElements.get('goog-suggestions-bar') || window.customElements.define('goog-suggestions-bar', Io));
    const LB = _.ia('\n      ;\n      <div class=";">\n        <div class="media-browse-landing-background"></div>\n        <div class="media-browse-touch-shield"\n            role="button" aria-label=";"\n            aria-hidden=";"\n            style=";"></div>\n        <div class="media-browse-content-layer"\n             aria-hidden=";"\n             aria-labelledby="media-browse-title"\n             role="dialog" aria-modal="true">\n          <div class="media-browse-top-bar"\n              style=";">\n            ;\n            <h1 class="media-browse-title" id="media-browse-title">\n              ;\n            </h1>\n            ;\n          </div>\n          ;\n          ;\n        </div>\n      </div>'.split(';'));
    const MB = _.ia(['', '']);
    const NB = _.ia(['', '']);
    const OB = _.ia(['']);
    var Uo = _.ia(['\n      <div class="media-browse-carousel"\n           style="', '"></div>']);
    var Vo = _.ia('\n          <div class="browse-item ;" role="link"\n              @click=";">\n            ;\n            <div class="browse-item-text">\n              <h2 class="browse-item-title">\n                  ;\n              </h2>\n              <h3 class="browse-item-subtitle">\n                  ;\n              </h3>\n            </div>\n          </div>\n        '.split(';'));
    var Xo = _.ia(['\n        <div class="media-browse-carousel" @scroll=', '>\n            ', '\n        </div>']);
    const PB = _.ia(['\n    <div class="media-browse-logo"\n         style="', '" role="presentation"></div>']);
    var bp = _.ia(['<div class="duration">', '</div>']);
    var dp = _.ia(['<div class="live">', '</div>']);
    var cp = _.ia(['\n      <div class="', '"\n        style="', '">\n        ', '\n        ', '\n      </div>']);
    _.r(Po, po);
    Po.prototype.Yb = function (a) {
        const b = Qo(this, a);
        this.j = a;
        this.l && this.l.Yb(a);
        (a = this.shadowRoot.querySelector('.media-browse-carousel')) && b && (a.scrollLeft = 0);
        oo(this);
    };
    Po.prototype.F = function () {
        const a = this;
        const b = Kn(LB, zB, ap({
            'media-browse-root': !0,
            landing: this.D,
        }), this.j ? cast.receiver.Y.hc(cast.receiver.Y.ko, {
            MEDIA_BROWSE_TITLE: this.j.title,
        }) : '', this.Z, Fo({
            visibility: this.ba,
        }), this.L, Fo({
            opacity: this.V,
            visibility: this.W,
        }), GB(this.o, function () {
            const c = a.o;
            const d = {};
            c && (d.content = cast.receiver.C.aa.Va(c));
            return Kn(PB, Fo(d));
        }), this.j ? this.j.title : '', Kn(MB, this.A), GB([this.j], function () {
            return Yo(a, a.j);
        }), this.l ? Kn(NB, this.l) : Kn(OB));
        On(b, this.shadowRoot);
        Zo(this);
        !this.O && this.T
            && (this.O = !0, qo(this, 'BROWSE_ITEMS_AVAILABLE'));
    };
    window.customElements && window.customElements.define && (window.customElements.get('goog-media-browse') || window.customElements.define('goog-media-browse', Po));
    cast.receiver.C.Aq = function (a) {
        a.innerHTML = '<style>goog-video-metadata{align-items:flex-start;box-sizing:border-box;display:flex;flex-direction:column;flex-grow:1;text-align:left;padding:44px 56px 0}@media (min-width: 1200px){goog-video-metadata{padding:112px 112px 0}}.logo{background-image:var(--playback-logo-image);background-position-x:left;background-repeat:no-repeat;background-size:contain;color:rgba(255,255,255,0.7);font-family:\'Roboto\',Arial,sans-serif;font-size:36px;font-weight:500;height:40px;line-height:40px;width:100%}.logo.app-icon{height:68px}.title{-webkit-line-clamp:2;-webkit-box-orient:vertical;-webkit-box-pack:end;display:-webkit-box;font-weight:normal;overflow:hidden;word-break:break-word;width:auto;margin-top:0;margin-bottom:0;font-size:56px;line-height:76px}@media (min-width: 1200px){.title{margin-bottom:4px;font-size:68px;line-height:80px}}.subtitle{font-weight:normal;margin:0;opacity:.7;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;letter-spacing:1.6px;line-height:30px;font-size:28px}@media (min-width: 1200px){.subtitle{letter-spacing:1.4px;line-height:40px;font-size:32px}}.subtitle-container{margin-top:auto;margin-bottom:16px;max-width:100%}.top-right-video-overlay-image{max-width:200px;max-height:50px;display:block;margin-left:auto}.top-images-container{display:flex;flex-direction:row;width:100%}.break-countdown{position:absolute;bottom:65px;left:56px;font-size:24px;text-shadow:0 2px 4px rgba(0,0,0,0.5);color:rgba(255,255,255,0.7)}.break-countdown .ad-label{color:#fff}.break-countdown .ad-label:after{content:\' \u00b7 \'}@media (min-width: 1200px){.break-countdown{bottom:82px;left:112px}}.break-skip{position:absolute;bottom:46px;right:32px;font-size:20px;padding:0 32px;height:64px;display:flex;align-items:center;justify-content:center;flex-direction:row;border-radius:32px}@media (min-width: 1200px){.break-skip{bottom:62px;right:82px}}.break-skip .break-skip-scrim{border:2px solid rgba(255,255,255,0.2);position:absolute;z-index:-1;top:0;left:0;right:0;bottom:0;background-color:rgba(0,0,0,0.5);border-radius:32px}.break-skip .break-skip-highlight{position:absolute;z-index:-1;top:0;left:0;right:0;bottom:0;background-color:transparent;border-radius:32px}.break-skip:active .break-skip-scrim{background-color:rgba(0,0,0,0.3)}.break-skip .skip-ad-text{-webkit-font-smoothing:antialiased}.break-skip .skip-ad-icon{margin-left:10px;margin-right:-8px;width:28px;height:28px}.break-skip-btn-countdown{min-width:110px}.loading-bar{--loading-bar-width:1000px;height:100%;overflow:hidden;position:relative;transform:translateZ(0);transition:opacity 250ms linear;width:1000px}.loading-bar .rect,.loading-bar .rect-inner{height:100%;position:absolute;width:1000px}.loading-bar .rect{transform-origin:top left}.loading-bar .rect-primary{transform:scaleX(0)}.loading-bar .rect-inner{background-color:#9aa0a6;display:inline-block}.loading-bar .rect-primary{animation:primary-indeterminate-translate 2s infinite linear}.loading-bar .rect-primary>.rect-inner{animation:primary-indeterminate-scale 2s infinite linear}.loading-bar .rect-auxiliary{animation:auxiliary-indeterminate-translate 2s infinite linear}.loading-bar .rect-auxiliary>.rect-inner{animation:auxiliary-indeterminate-scale 2s infinite linear}@keyframes primary-indeterminate-translate{0%{transform:translateX(-1451.66611px)}20%{animation-timing-function:cubic-bezier(.5, 0, .701732, .495819);transform:translateX(-1451.66611px)}59.15%{animation-timing-function:cubic-bezier(.302435, .381352, .55, .956352);transform:translateX(-614.95191px)}100%{transform:translateX(554.44446px)}}@keyframes primary-indeterminate-scale{0%{transform:scaleX(.08)}36.65%{animation-timing-function:cubic-bezier(.334731, .12482, .785844, 1);transform:scaleX(.08)}69.15%{animation-timing-function:cubic-bezier(.06, .11, .6, 1);transform:scaleX(.661479)}100%{transform:scaleX(.08)}}@keyframes auxiliary-indeterminate-translate{0%{animation-timing-function:cubic-bezier(.15, 0, .515058, .409685);transform:translateX(-548.88891px)}25%{animation-timing-function:cubic-bezier(.31033, .284058, .8, .733712);transform:translateX(-172.36978px)}48.35%{animation-timing-function:cubic-bezier(.4, .627035, .6, .902026);transform:translateX(294.97274px)}100%{transform:translateX(1053.88891px)}}@keyframes auxiliary-indeterminate-scale{0%{animation-timing-function:cubic-bezier(.205028, .057051, .57661, .453971);transform:scaleX(.08)}19.15%{animation-timing-function:cubic-bezier(.152313, .196432, .648374, 1.004315);transform:scaleX(.457104)}44.15%{animation-timing-function:cubic-bezier(.257759, .003163, .211762, 1.38179);transform:scaleX(.72796)}100%{transform:scaleX(.08)}}:host{bottom:0;color:#fff;font-family:\'Google Sans\',\'Roboto\',Arial,sans-serif;left:0;position:fixed;right:0;top:0;z-index:1000000;--media-browse-top-padding:104px;--media-browse-visible-part-height:70px}@media (min-width: 1200px){:host{--media-browse-top-padding:159px;--media-browse-visible-part-height:85px}}.controls-layer{display:flex;position:relative;flex-direction:column;justify-content:flex-start;height:100%;will-change:transform}.controls-toggle{position:absolute;width:100%;height:100%;top:0;left:0}.accessibility-alert,.controls-toggle{opacity:0;position:absolute;left:-9999px}.controls{box-sizing:border-box;flex:none;display:flex;flex-direction:column;justify-content:flex-end;height:192px;padding:0 56px 14px}@media (min-width: 1200px){.controls{height:240px;padding:0 112px 30px}}goog-audio-player-compatibility{position:absolute;display:none}.scrim,.buffering-scrim{bottom:0;height:100vh;left:0;position:absolute;width:100vw}.buffering-scrim{background-color:rgba(0,0,0,0.6);visibility:hidden}goog-video-metadata{display:none}.touch-layer{height:100%;touch-action:manipulation;user-select:none;width:100%}.touch-layer .playback-layer{width:100%;height:100%}.touch-layer.with-related-content{--media-browse-controls-offset:-70px;--media-browse-peek-offset:-70px}@media (min-width: 1200px){.touch-layer.with-related-content{--media-browse-controls-offset:-95px;--media-browse-peek-offset:-85px}}.touch-layer goog-media-browse{position:absolute;left:0;will-change:transform;pointer-events:none;top:calc(100% - 104px)}@media (min-width: 1200px){.touch-layer goog-media-browse{top:calc(100% - 159px)}}.touch-layer .media-browse-scrim{bottom:0;height:100%;left:0;position:absolute;width:100%;background-color:#202124;opacity:0;will-change:opacity}.touch-layer.video:not(.remote-controls) .scrim{background:linear-gradient(to bottom, rgba(0,0,0,0.5), rgba(0,0,0,0.5) 42.5%, rgba(0,0,0,0.92))}.touch-layer.video:not(.remote-controls).compatibility-mode-scrim .scrim{background:linear-gradient(to bottom, rgba(0,0,0,0.78), #000)}.touch-layer.video:not(.remote-controls) goog-video-metadata{flex-grow:1;display:flex}.touch-layer.video:not(.remote-controls).active .title,.touch-layer.video:not(.remote-controls).buffering .title{width:100%}.touch-layer.video:not(.remote-controls) .scrim{will-change:opacity;opacity:0;transition:visibility 0s 150ms,opacity 150ms cubic-bezier(0, 0, 1, 1);visibility:hidden}.touch-layer.video:not(.remote-controls) .break-countdown,.touch-layer.video:not(.remote-controls) .break-skip .break-skip-scrim{opacity:1;transition:opacity 150ms cubic-bezier(0, 0, 1, 1);visibility:visible}.touch-layer.video:not(.remote-controls) .top-right-video-overlay-image,.touch-layer.video:not(.remote-controls) .logo{will-change:opacity,transform;opacity:0;transform:translateY(32px);transition:transform 350ms cubic-bezier(.2, 0, 0, 1),visibility 0s 150ms,opacity 150ms cubic-bezier(0, 0, 1, 1);visibility:hidden}.touch-layer.video:not(.remote-controls) .subtitle-container,.touch-layer.video:not(.remote-controls) .title{will-change:opacity,transform;opacity:0;transform:translateY(44px);transition:transform 350ms cubic-bezier(.2, 0, 0, 1),visibility 0s 150ms,opacity 150ms cubic-bezier(0, 0, 1, 1);visibility:hidden}.touch-layer.video:not(.remote-controls) .controls,.touch-layer.video:not(.remote-controls) goog-media-browse{will-change:transform;transform:translateY(56px);transition:transform 350ms cubic-bezier(.2, 0, 0, 1)}.touch-layer.video:not(.remote-controls) .scrubber-layer,.touch-layer.video:not(.remote-controls) .time-numbers{will-change:opacity;opacity:0;transition:visibility 0s 150ms,opacity 150ms cubic-bezier(0, 0, 1, 1);visibility:hidden}.touch-layer.video:not(.remote-controls) .slot{opacity:0;transition:visibility 0s 100ms,opacity 100ms cubic-bezier(0, 0, 1, 1);visibility:hidden}.touch-layer.video:not(.remote-controls).active .break-skip[role="button"]:active .break-skip-highlight,.touch-layer.video:not(.remote-controls).buffering .break-skip[role="button"]:active .break-skip-highlight{background-color:rgba(255,255,255,0.1)}.touch-layer.video:not(.remote-controls).active .scrim{opacity:1;transition:opacity 200ms cubic-bezier(0, 0, 1, 1);visibility:visible}.touch-layer.video:not(.remote-controls).active .break-countdown,.touch-layer.video:not(.remote-controls).active .break-skip .break-skip-scrim{opacity:0;transition:visibility 0s 200ms,opacity 200ms cubic-bezier(0, 0, 1, 1);visibility:hidden}.touch-layer.video:not(.remote-controls).active .top-right-video-overlay-image,.touch-layer.video:not(.remote-controls).active .logo{opacity:1;transform:translateY(0);transition:transform 400ms cubic-bezier(.2, 0, 0, 1),opacity 150ms cubic-bezier(0, 0, 1, 1);visibility:visible}.touch-layer.video:not(.remote-controls).active .subtitle-container,.touch-layer.video:not(.remote-controls).active .title{opacity:1;transform:translateY(var(--media-browse-controls-offset, 0));transition:transform 400ms cubic-bezier(.2, 0, 0, 1),opacity 150ms cubic-bezier(0, 0, 1, 1);visibility:visible}.touch-layer.video:not(.remote-controls).active .controls{transform:translateY(var(--media-browse-controls-offset, 0));transition:transform 400ms cubic-bezier(.2, 0, 0, 1)}.touch-layer.video:not(.remote-controls).active goog-media-browse{transform:translateY(var(--media-browse-peek-offset, 0));transition:transform 400ms cubic-bezier(.2, 0, 0, 1)}.touch-layer.video:not(.remote-controls).active .scrubber-layer,.touch-layer.video:not(.remote-controls).active .time-numbers,.touch-layer.video:not(.remote-controls).active .slot{opacity:1;transition:opacity 200ms cubic-bezier(0, 0, 1, 1);visibility:visible}.touch-layer.video:not(.remote-controls).active .slot-primary-1,.touch-layer.video:not(.remote-controls).active .slot-primary-2{transition-delay:50ms}.touch-layer.video:not(.remote-controls).active .slot-secondary-1,.touch-layer.video:not(.remote-controls).active .slot-secondary-2,.touch-layer.video:not(.remote-controls).active .device-controller-slot{transition-delay:100ms}.touch-layer.video:not(.remote-controls).buffering .buffering-scrim{visibility:visible}.touch-layer.video:not(.remote-controls).buffering .scrim,.touch-layer.video:not(.remote-controls).buffering .top-right-video-overlay-image,.touch-layer.video:not(.remote-controls).buffering .logo,.touch-layer.video:not(.remote-controls).buffering .subtitle-container,.touch-layer.video:not(.remote-controls).buffering .title,.touch-layer.video:not(.remote-controls).buffering .controls,.touch-layer.video:not(.remote-controls).buffering .scrubber-layer,.touch-layer.video:not(.remote-controls).buffering .time-numbers,.touch-layer.video:not(.remote-controls).buffering .slot{opacity:1;visibility:visible;transition:none;transform:none}.touch-layer.video:not(.remote-controls).buffering .controls,.touch-layer.video:not(.remote-controls).buffering .subtitle-container,.touch-layer.video:not(.remote-controls).buffering .title{transform:translateY(var(--media-browse-controls-offset, 0))}.touch-layer.video:not(.remote-controls).buffering goog-media-browse{transform:translateY(var(--media-browse-peek-offset, 0))}.touch-layer.video:not(.remote-controls).buffering .break-countdown,.touch-layer.video:not(.remote-controls).buffering .break-skip .break-skip-scrim{opacity:0;transition:none;transform:none;visibility:hidden}.touch-layer.audio goog-audio-player-compatibility,.touch-layer.remote-controls goog-audio-player-compatibility{display:block}.touch-layer.audio .controls,.touch-layer.remote-controls .controls{margin-top:auto}@media (min-width: 1200px){.touch-layer.audio .btn-play-pause .btn-icon,.touch-layer.remote-controls .btn-play-pause .btn-icon,.touch-layer.audio .btn-stop .btn-icon,.touch-layer.remote-controls .btn-stop .btn-icon{width:124px;height:124px}}.touch-layer.audio .scrim,.touch-layer.remote-controls .scrim{background:linear-gradient(to bottom, rgba(0,0,0,0), rgba(0,0,0,0.92));height:192px}@media (min-width: 1200px){.touch-layer.audio .scrim,.touch-layer.remote-controls .scrim{height:240px}}.touch-layer.audio.with-related-content .scrim,.touch-layer.remote-controls.with-related-content .scrim{height:262px}@media (min-width: 1200px){.touch-layer.audio.with-related-content .scrim,.touch-layer.remote-controls.with-related-content .scrim{height:335px}}.touch-layer.audio .break-countdown,.touch-layer.remote-controls .break-countdown{opacity:1;transition:opacity 200ms cubic-bezier(0, 0, 1, 1);visibility:visible}.touch-layer.audio .break-skip,.touch-layer.remote-controls .break-skip{opacity:0;transition:visibility 0s 200ms,opacity 200ms cubic-bezier(0, 0, 1, 1);visibility:hidden}.touch-layer.audio .break-skip-scrim,.touch-layer.remote-controls .break-skip-scrim{display:none}.touch-layer.audio .time-numbers,.touch-layer.remote-controls .time-numbers,.touch-layer.audio .slot,.touch-layer.remote-controls .slot{will-change:opacity;opacity:0;transition:visibility 0s 100ms,opacity 100ms cubic-bezier(0, 0, 1, 1);visibility:hidden}.touch-layer.audio .scrubber::-webkit-slider-thumb,.touch-layer.remote-controls .scrubber::-webkit-slider-thumb{will-change:transform;transform:scaleY(.2);transition:transform 350ms cubic-bezier(.2, 0, 0, 1),visibility 0s 350ms;visibility:hidden}.touch-layer.audio .controls,.touch-layer.remote-controls .controls,.touch-layer.audio goog-media-browse,.touch-layer.remote-controls goog-media-browse{will-change:transform;transform:translateY(56px);transition:transform 350ms cubic-bezier(.2, 0, 0, 1)}.touch-layer.audio.active .time-numbers,.touch-layer.remote-controls.active .time-numbers,.touch-layer.audio.active .slot,.touch-layer.remote-controls.active .slot{opacity:1;transition:opacity 200ms cubic-bezier(0, 0, 1, 1);visibility:visible}.touch-layer.audio.active .break-countdown,.touch-layer.remote-controls.active .break-countdown{opacity:0;transition:visibility 0s 200ms,opacity 200ms cubic-bezier(0, 0, 1, 1);visibility:hidden}.touch-layer.audio.active .break-skip,.touch-layer.remote-controls.active .break-skip{opacity:1;transition:opacity 200ms cubic-bezier(0, 0, 1, 1);visibility:visible}.touch-layer.audio.active .break-skip-scrim,.touch-layer.remote-controls.active .break-skip-scrim{display:none}.touch-layer.audio.active .slot-primary-1,.touch-layer.remote-controls.active .slot-primary-1,.touch-layer.audio.active .slot-primary-2,.touch-layer.remote-controls.active .slot-primary-2{transition-delay:50ms}.touch-layer.audio.active .slot-secondary-1,.touch-layer.remote-controls.active .slot-secondary-1,.touch-layer.audio.active .slot-secondary-2,.touch-layer.remote-controls.active .slot-secondary-2,.touch-layer.audio.active .device-controller-slot,.touch-layer.remote-controls.active .device-controller-slot{transition-delay:100ms}.touch-layer.audio.active .scrubber::-webkit-slider-thumb,.touch-layer.remote-controls.active .scrubber::-webkit-slider-thumb{transform:scaleY(1);transition:transform 400ms cubic-bezier(.2, 0, 0, 1);visibility:visible}.touch-layer.audio.active .controls,.touch-layer.remote-controls.active .controls{transform:translateY(var(--media-browse-controls-offset, 0));transition:transform 400ms cubic-bezier(.2, 0, 0, 1)}.touch-layer.audio.active goog-media-browse,.touch-layer.remote-controls.active goog-media-browse{transform:translateY(var(--media-browse-peek-offset, 0));transition:transform 400ms cubic-bezier(.2, 0, 0, 1)}.touch-layer.audio.scrubbing .scrubber::-webkit-slider-thumb,.touch-layer.remote-controls.scrubbing .scrubber::-webkit-slider-thumb{transform:scaleY(1);transition:transform 400ms cubic-bezier(.2, 0, 0, 1);visibility:visible}.touch-layer.audio.scrubbing .time-numbers,.touch-layer.remote-controls.scrubbing .time-numbers{opacity:1;transition:opacity 200ms cubic-bezier(0, 0, 1, 1);visibility:visible}.touch-layer.audio.scrubbing-ending .time-numbers,.touch-layer.remote-controls.scrubbing-ending .time-numbers{opacity:1;transition:opacity 200ms cubic-bezier(0, 0, 1, 1);visibility:visible}.touch-layer.audio.default-player:not(.with-related-content) .scrim,.touch-layer.remote-controls.default-player:not(.with-related-content) .scrim,.touch-layer.audio.compatibility-mode-scrim .scrim,.touch-layer.remote-controls.compatibility-mode-scrim .scrim{display:none}.touch-layer.photo:not(.remote-controls) .playback-layer,.touch-layer.disabled .playback-layer{display:none !important}goog-buttons-bar{align-items:center;display:grid;grid-template-columns:[dc] 96px 96px 1fr [pr1] 96px [center] auto [pr2] 96px 1fr [sec1] 96px [sec2] 96px;flex:none;margin-top:-8px;justify-content:center}.btn[aria-disabled=true]{pointer-events:none}.btn[aria-disabled=true] .btn-icon{opacity:.5}.slot{height:96px;margin:0;width:96px}.btn{height:96px;width:96px;display:flex;justify-content:center;align-items:center;position:relative}.btn-icon{height:48px;width:48px}@media (min-width: 1200px){.btn-icon{height:56px;width:56px}}.slot.center{height:104px;width:auto;margin:12px 28px;grid-column:center;display:flex;justify-content:space-between}@media (min-width: 1200px){.slot.center{height:128px;margin:0 28px}}goog-buttons-bar.bluetooth .slot.center{margin-left:12px;margin-right:12px}@media (min-width: 1200px){goog-buttons-bar.bluetooth .slot.center{margin-left:24px;margin-right:24px}}.slot.slot-primary-1{grid-column:pr1}.slot.slot-primary-2{grid-column:pr2}.slot.slot-secondary-1{grid-column:sec1;grid-row:1}.slot.slot-secondary-2{justify-self:end;grid-column:sec2;margin-right:-20px}goog-buttons-bar.secondary-2-empty .slot.slot-secondary-1{grid-column:sec2;margin-left:auto;margin-right:-20px}goog-buttons-bar.secondary-2-empty .slot.slot-secondary-2{display:none}@media (max-width: 1199px){.slot-secondary-1,.slot-secondary-2{height:64px;width:64px}.slot-secondary-1 .btn,.slot-secondary-2 .btn{height:64px;width:64px}.slot-secondary-1 .btn-icon,.slot-secondary-2 .btn-icon{height:32px;width:32px}.slot.slot-secondary-1{margin-left:52px}.slot.slot-secondary-2{margin-right:-16px}goog-buttons-bar.secondary-2-empty .slot.slot-secondary-1{margin-right:-16px}}.device-controller-slot{display:flex;grid-column:dc / span 3;align-items:center;font-size:24px;font-weight:400;width:auto}.active  .device-controller-slot,.buffering  .device-controller-slot{width:100%}.device-controller-btn{display:flex;position:relative;justify-content:center;align-items:center;box-sizing:border-box;background-color:rgba(255,255,255,0.1);min-width:80px;max-width:270px;padding:0 16px;height:64px;border-radius:32px;margin-left:-10px}@media (min-width: 1200px){.device-controller-btn{max-width:330px;min-width:120px;height:80px;padding:0 20px;border-radius:40px}}.device-controller-label{-webkit-line-clamp:2;-webkit-box-orient:vertical;-webkit-box-pack:end;display:-webkit-box;overflow:hidden;font-size:20px;line-height:24px;margin:0 8px 0 12px;word-break:break-word}@media (min-width: 1200px){.device-controller-label{margin:0 12px 0 16px;font-size:24px;line-height:28px}}.device-controller-icon{content:url("data:image/svg+xml,%3Csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20viewBox=%270%200%2048%2048%27%3E%0A%20%20%3Cpath%0A%20%20%20%20%20%20d=%27M41%2C8H7a3%2C3%2C0%2C0%2C0-3%2C3.06V16.5a1.5%2C1.5%2C0%2C0%2C0%2C3%2C0V11l34%2C.06V36H26.5a1.5%2C1.5%2C0%2C0%2C0%2C0%2C3H41a3%2C3%2C0%2C0%2C0%2C3-3.06V11.06A3%2C3%2C0%2C0%2C0%2C41%2C8Z%27%0A%20%20%20%20%20%20fill=%27%23FFF%27/%3E%0A%20%20%3Cpath%20d=%27M5.5%2C27.5a1.5%2C1.5%2C0%2C0%2C0%2C0%2C3%2C7%2C7%2C0%2C0%2C1%2C7%2C7%2C1.5%2C1.5%2C0%2C0%2C0%2C3%2C0A10%2C10%2C0%2C0%2C0%2C5.5%2C27.5Z%27%0A%20%20%20%20%20%20fill=%27%23FFF%27/%3E%0A%20%20%3Cpath%0A%20%20%20%20%20%20d=%27M5.5%2C21a1.5%2C1.5%2C0%2C0%2C0%2C0%2C3A13.52%2C13.52%2C0%2C0%2C1%2C19%2C37.5a1.5%2C1.5%2C0%2C0%2C0%2C3%2C0A16.52%2C16.52%2C0%2C0%2C0%2C5.5%2C21Z%27%0A%20%20%20%20%20%20fill=%27%23FFF%27/%3E%0A%20%20%3Ccircle%20cx=%276.55%27%20cy=%2736.5%27%20r=%272.5%27%20fill=%27%23FFF%27/%3E%0A%3C/svg%3E%0A");width:24px;height:24px}@media (min-width: 1200px){.device-controller-icon{width:32px;height:32px}}.device-controller-icon[connected]{content:url("data:image/svg+xml,%3Csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20viewBox=%270%200%2048%2048%27%3E%0A%20%20%3Cpath%0A%20%20%20%20%20%20d=%27M41%2C8H7a3%2C3%2C0%2C0%2C0-3%2C3.06V16.5a1.5%2C1.5%2C0%2C0%2C0%2C3%2C0V11l34%2C.06V36H26.5a1.5%2C1.5%2C0%2C0%2C0%2C0%2C3H41a3%2C3%2C0%2C0%2C0%2C3-3.06V11.06A3%2C3%2C0%2C0%2C0%2C41%2C8Z%27%0A%20%20%20%20%20%20fill=%27%23FFF%27/%3E%0A%20%20%3Cpath%0A%20%20%20%20%20%20d=%27M25.79%2C33H37a1%2C1%2C0%2C0%2C0%2C1-1V15a1%2C1%2C0%2C0%2C0-1-1H11a1%2C1%2C0%2C0%2C0-1%2C1v2.18a1%2C1%2C0%2C0%2C0%2C.8%2C1%2C19.55%2C19.55%2C0%2C0%2C1%2C14%2C14.07A1%2C1%2C0%2C0%2C0%2C25.79%2C33Z%27%0A%20%20%20%20%20%20fill=%27%23FFF%27/%3E%0A%20%20%3Cpath%20d=%27M5.5%2C27.5a1.5%2C1.5%2C0%2C0%2C0%2C0%2C3%2C7%2C7%2C0%2C0%2C1%2C7%2C7%2C1.5%2C1.5%2C0%2C0%2C0%2C3%2C0A10%2C10%2C0%2C0%2C0%2C5.5%2C27.5Z%27%0A%20%20%20%20%20%20fill=%27%23FFF%27/%3E%0A%20%20%3Cpath%0A%20%20%20%20%20%20d=%27M5.5%2C21a1.5%2C1.5%2C0%2C0%2C0%2C0%2C3A13.52%2C13.52%2C0%2C0%2C1%2C19%2C37.5a1.5%2C1.5%2C0%2C0%2C0%2C3%2C0A16.52%2C16.52%2C0%2C0%2C0%2C5.5%2C21Z%27%0A%20%20%20%20%20%20fill=%27%23FFF%27/%3E%0A%20%20%3Ccircle%20cx=%276.55%27%20cy=%2736.5%27%20r=%272.5%27%20fill=%27%23FFF%27/%3E%0A%3C/svg%3E%0A")}.btn-play-pause,.btn-stop{height:104px;width:104px}.btn-play-pause .btn-icon,.btn-stop .btn-icon{height:88px;width:88px}@media (min-width: 1200px){.btn-play-pause,.btn-stop{height:128px;width:128px}.btn-play-pause .btn-icon,.btn-stop .btn-icon{height:112px;width:112px}}.btn-play-pause[data-state=\'playing\'] .btn-icon{content:url("data:image/svg+xml,%3Csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20viewBox=%270%200%2048%2048%27%3E%0A%20%20%3Cpath%20d=%27M32%2C9.5v29%27%20fill=%27none%27%20stroke=%27%23fff%27%20stroke-linecap=%27round%27%0A%20%20%20%20%20%20stroke-linejoin=%27round%27%20vector-effect=%27non-scaling-stroke%27%0A%20%20%20%20%20%20stroke-width=%274%27/%3E%0A%20%20%3Cpath%20d=%27M16%2C9.5v29%27%20fill=%27none%27%20stroke=%27%23fff%27%20stroke-linecap=%27round%27%0A%20%20%20%20%20%20stroke-linejoin=%27round%27%20vector-effect=%27non-scaling-stroke%27%0A%20%20%20%20%20%20stroke-width=%274%27/%3E%0A%3C/svg%3E%0A")}.btn-play-pause[data-state=\'paused\'] .btn-icon{content:url("data:image/svg+xml,%3Csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20viewBox=%270%200%2048%2048%27%3E%0A%20%20%3Cpolygon%20points=%2738.5%2024%2015.5%2038.5%2015.5%209.5%2038.5%2024%27%20fill=%27none%27%0A%20%20%20%20%20%20stroke=%27%23fff%27%20stroke-linecap=%27round%27%20stroke-linejoin=%27round%27%0A%20%20%20%20%20%20stroke-width=%274%27%20vector-effect=%27non-scaling-stroke%27/%3E%0A%3C/svg%3E%0A")}.btn-stop{display:flex;margin-left:10px}@media (min-width: 1200px){.btn-stop{margin-left:12px}}.btn-stop .btn-icon{content:url("data:image/svg+xml,%3Csvg%20viewBox=%270%200%2048%2048%27%20version=%271.1%27%20xmlns=%27http://www.w3.org/2000/svg%27%3E%0A%20%20%3Crect%20id=%27Rectangle%27%20stroke=%27%23FFFFFF%27%20fill=%27none%27%20stroke-width=%274%27%0A%20%20%20%20%20%20vector-effect=%27non-scaling-stroke%27%20fill-rule=%27nonzero%27%20x=%2711.5%27%20y=%2710.5%27%20width=%2726%27%0A%20%20%20%20%20%20height=%2726%27%20rx=%272%27%3E%3C/rect%3E%0A%3C/svg%3E%0A")}.btn-next .btn-icon,.skip-ad-icon{content:url("data:image/svg+xml,%3Csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20viewBox=%270%200%2048%2048%27%3E%0A%20%20%3Cpath%20d=%27M37%2C9.5a1.5%2C1.5%2C0%2C0%2C1%2C3%2C0v29a1.5%2C1.5%2C0%2C0%2C1-3%2C0Z%27%20fill=%27%23fff%27/%3E%0A%20%20%3Cpath%0A%20%20%20%20%20%20d=%27M11%2C12.22V35.78L29.69%2C24ZM33.3%2C25.27l-23%2C14.5A1.5%2C1.5%2C0%2C0%2C1%2C8%2C38.5V9.5a1.5%2C1.5%2C0%2C0%2C1%2C2.3-1.27l23%2C14.5a1.5%2C1.5%2C0%2C0%2C1%2C0%2C2.54Z%27%0A%20%20%20%20%20%20fill=%27%23fff%27/%3E%0A%3C/svg%3E%0A")}.btn-back .btn-icon{content:url("data:image/svg+xml,%3Csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20viewBox=%270%200%2048%2048%27%3E%0A%20%20%3Cpath%20d=%27M8%2C9.5a1.5%2C1.5%2C0%2C0%2C1%2C3%2C0v29a1.5%2C1.5%2C0%2C0%2C1-3%2C0Z%27%20fill=%27%23fff%27/%3E%0A%20%20%3Cpath%0A%20%20%20%20%20%20d=%27M14.7%2C25.27a1.5%2C1.5%2C0%2C0%2C1%2C0-2.54l23-14.5A1.5%2C1.5%2C0%2C0%2C1%2C40%2C9.5v29a1.5%2C1.5%2C0%2C0%2C1-2.3%2C1.27ZM37%2C35.78V12.22L18.31%2C24Z%27%0A%20%20%20%20%20%20fill=%27%23fff%27/%3E%0A%3C/svg%3E%0A")}.btn-seek-forward-10 .btn-icon{content:url("data:image/svg+xml,%3Csvg%20viewBox=%270%200%2048%2048%27%20xmlns=%27http://www.w3.org/2000/svg%27%3E%0A%20%20%3Cpath%0A%20%20%20%20%20%20d=%27M41%2024a1.5%201.5%200%200%201%203%200c0%2011.046-8.954%2020-20%2020S4%2035.046%204%2024%2012.954%204%2024%204h3.5a1.5%201.5%200%200%201%200%203H24C14.611%207%207%2014.611%207%2024s7.611%2017%2017%2017%2017-7.611%2017-17z%27%0A%20%20%20%20%20%20fill=%27%23FFF%27%20fill-rule=%27nonzero%27/%3E%0A%20%20%3Cpath%0A%20%20%20%20%20%20d=%27M24.44%202.56A1.5%201.5%200%200%201%2026.56.44l4%204a1.5%201.5%200%200%201%200%202.12l-4%204a1.5%201.5%200%200%201-2.12-2.12l2.939-2.94-2.94-2.94zM17.82%2030v-8.67l-2%20.82-.89-2.15%203.42-1.6h2V30zM27.65%2030.27A4.48%204.48%200%200%201%2024%2028.54a5.91%205.91%200%200%201-1-1.93%208.59%208.59%200%200%201%200-4.84%205.92%205.92%200%200%201%201-1.93%204.64%204.64%200%200%201%207.28%200%205.93%205.93%200%200%201%201%201.93%208.59%208.59%200%200%201%200%204.84%205.92%205.92%200%200%201-1%201.93%204.51%204.51%200%200%201-3.64%201.73h.01zm0-2.38a1.91%201.91%200%200%200%201-.28%202.44%202.44%200%200%200%20.76-.77%203.78%203.78%200%200%200%20.48-1.17%206.83%206.83%200%200%200%200-3%203.78%203.78%200%200%200-.48-1.17%202.44%202.44%200%200%200-.76-.77%202%202%200%200%200-2.06%200%202.44%202.44%200%200%200-.76.77%203.78%203.78%200%200%200-.48%201.17%206.87%206.87%200%200%200%200%203c.093.414.255.81.48%201.17.193.31.452.573.76.77a1.91%201.91%200%200%200%201.06.28z%27%0A%20%20%20%20%20%20fill=%27%23FFF%27%20fill-rule=%27nonzero%27/%3E%0A%3C/svg%3E%0A")}.btn-seek-forward-15 .btn-icon{content:url("data:image/svg+xml,%3Csvg%20viewBox=%270%200%2048%2048%27%20xmlns=%27http://www.w3.org/2000/svg%27%3E%0A%20%20%3Cpath%0A%20%20%20%20%20%20d=%27M41%2024a1.5%201.5%200%200%201%203%200c0%2011.046-8.954%2020-20%2020S4%2035.046%204%2024%2012.954%204%2024%204h3.5a1.5%201.5%200%200%201%200%203H24C14.611%207%207%2014.611%207%2024s7.611%2017%2017%2017%2017-7.611%2017-17z%27%0A%20%20%20%20%20%20fill=%27%23FFF%27%20fill-rule=%27nonzero%27/%3E%0A%20%20%3Cpath%0A%20%20%20%20%20%20d=%27M24.44%202.56A1.5%201.5%200%200%201%2026.56.44l4%204a1.5%201.5%200%200%201%200%202.12l-4%204a1.5%201.5%200%200%201-2.12-2.12l2.939-2.94-2.94-2.94zM18.51%2030v-8.67l-2%20.82-.89-2.15L19%2018.37h2V30zM27.69%2030.27a5.17%205.17%200%200%201-1.38-.19%204%204%200%200%201-2.25-1.58%203.9%203.9%200%200%201-.61-1.39l2.33-.9c.083.474.31.91.65%201.25a1.75%201.75%200%200%200%201.26.45%201.57%201.57%200%200%200%201.16-.48%201.74%201.74%200%200%200%200-2.38%201.59%201.59%200%200%200-1.18-.48%201.81%201.81%200%200%200-.85.19%202.12%202.12%200%200%200-.61.48l-2.45-1.12.63-5.76h6.78v2.18h-4.65L26.08%2023l.17.05a3.94%203.94%200%200%201%20.81-.48%202.84%202.84%200%200%201%201.18-.22%203.44%203.44%200%200%201%201.37.28c.435.184.83.453%201.16.79.347.358.622.779.81%201.24a4.19%204.19%200%200%201%20.31%201.63%204.25%204.25%200%200%201-.31%201.64%203.6%203.6%200%200%201-.87%201.27%203.94%203.94%200%200%201-1.33.82%204.72%204.72%200%200%201-1.69.25z%27%0A%20%20%20%20%20%20fill=%27%23FFF%27%20fill-rule=%27nonzero%27/%3E%0A%3C/svg%3E%0A")}.btn-seek-forward-30 .btn-icon{content:url("data:image/svg+xml,%3Csvg%20viewBox=%270%200%2048%2048%27%20xmlns=%27http://www.w3.org/2000/svg%27%3E%0A%20%20%3Cpath%0A%20%20%20%20%20%20d=%27M41%2024a1.5%201.5%200%200%201%203%200c0%2011.046-8.954%2020-20%2020S4%2035.046%204%2024%2012.954%204%2024%204h3.5a1.5%201.5%200%200%201%200%203H24C14.611%207%207%2014.611%207%2024s7.611%2017%2017%2017%2017-7.611%2017-17z%27%0A%20%20%20%20%20%20fill=%27%23FFF%27%20fill-rule=%27nonzero%27/%3E%0A%20%20%3Cpath%0A%20%20%20%20%20%20d=%27M24.44%202.56A1.5%201.5%200%200%201%2026.56.44l4%204a1.5%201.5%200%200%201%200%202.12l-4%204a1.5%201.5%200%200%201-2.12-2.12l2.939-2.94-2.94-2.94zM18.31%2030.27a4.67%204.67%200%200%201-2.76-.8A4.15%204.15%200%200%201%2014%2027.14l2.43-1c.1.96.936%201.673%201.9%201.62a1.7%201.7%200%200%200%201.07-.36%201.15%201.15%200%200%200%20.46-1c0-.92-.667-1.38-2-1.38h-1v-2.23h.94c.199%200%20.397-.024.59-.07.184-.04.36-.112.52-.21a1.07%201.07%200%200%200%20.37-.38%201.19%201.19%200%200%200%20.14-.59c0-.294-.12-.575-.33-.78a1.23%201.23%200%200%200-.93-.34%201.45%201.45%200%200%200-1%20.36%201.79%201.79%200%200%200-.52.85l-2.33-1a4.21%204.21%200%200%201%20.48-.92c.22-.315.49-.592.8-.82a4.17%204.17%200%200%201%201.14-.59%204.47%204.47%200%200%201%201.49-.23%204.9%204.9%200%200%201%201.57.24A3.74%203.74%200%200%201%2021%2019c.324.273.583.615.76%201%20.164.364.246.76.24%201.16a3.25%203.25%200%200%201-.46%201.7%202.54%202.54%200%200%201-.46.56%202.11%202.11%200%200%201-.51.35v.17a3%203%200%200%201%201.34%201%203%203%200%200%201%20.53%201.82%203.32%203.32%200%200%201-.29%201.39%203.21%203.21%200%200%201-.82%201.1A3.85%203.85%200%200%201%2020%2030a5.31%205.31%200%200%201-1.69.27zM29%2030.27a4.49%204.49%200%200%201-3.64-1.73%205.9%205.9%200%200%201-1-1.93%208.59%208.59%200%200%201%200-4.84%205.91%205.91%200%200%201%201-1.93%204.64%204.64%200%200%201%207.28%200%205.91%205.91%200%200%201%201%201.93%208.57%208.57%200%200%201%200%204.84%205.9%205.9%200%200%201-1%201.93A4.51%204.51%200%200%201%2029%2030.27zm0-2.38a1.91%201.91%200%200%200%201-.28%202.44%202.44%200%200%200%20.77-.77%203.8%203.8%200%200%200%20.47-1.17%206.83%206.83%200%200%200%200-3%203.81%203.81%200%200%200-.47-1.17%202.44%202.44%200%200%200-.77-.77%202%202%200%200%200-2.06%200%202.44%202.44%200%200%200-.77.77%203.81%203.81%200%200%200-.47%201.17%206.83%206.83%200%200%200%200%203c.09.413.25.809.47%201.17.195.311.459.575.77.77a1.9%201.9%200%200%200%201.06.28z%27%0A%20%20%20%20%20%20fill=%27%23FFF%27%20fill-rule=%27nonzero%27/%3E%0A%3C/svg%3E%0A")}.btn-seek-backward-10 .btn-icon{content:url("data:image/svg+xml,%3Csvg%20viewBox=%270%200%2048%2048%27%20xmlns=%27http://www.w3.org/2000/svg%27%3E%0A%20%20%3Cpath%0A%20%20%20%20%20%20d=%27M4%2024a1.5%201.5%200%200%201%203%200c0%209.389%207.611%2017%2017%2017s17-7.611%2017-17S33.389%207%2024%207h-3.5a1.5%201.5%200%200%201%200-3H24c11.046%200%2020%208.954%2020%2020s-8.954%2020-20%2020S4%2035.046%204%2024z%27%0A%20%20%20%20%20%20fill=%27%23FFF%27%20fill-rule=%27nonzero%27/%3E%0A%20%20%3Cpath%0A%20%20%20%20%20%20d=%27M20.621%205.5l2.94%202.94a1.5%201.5%200%200%201-2.122%202.12l-4-4a1.5%201.5%200%200%201%200-2.12l4-4a1.5%201.5%200%200%201%202.122%202.12L20.62%205.5zM17.82%2030v-8.67l-2%20.82-.89-2.15%203.42-1.6h2V30zm9.83.27A4.48%204.48%200%200%201%2024%2028.54a5.91%205.91%200%200%201-1-1.93%208.59%208.59%200%200%201%200-4.84%205.92%205.92%200%200%201%201-1.93%204.64%204.64%200%200%201%207.28%200%205.93%205.93%200%200%201%201%201.93%208.59%208.59%200%200%201%200%204.84%205.92%205.92%200%200%201-1%201.93%204.51%204.51%200%200%201-3.64%201.73h.01zm0-2.38a1.91%201.91%200%200%200%201-.28%202.44%202.44%200%200%200%20.76-.77%203.78%203.78%200%200%200%20.48-1.17%206.83%206.83%200%200%200%200-3%203.78%203.78%200%200%200-.48-1.17%202.44%202.44%200%200%200-.76-.77%202%202%200%200%200-2.06%200%202.44%202.44%200%200%200-.76.77%203.78%203.78%200%200%200-.48%201.17%206.87%206.87%200%200%200%200%203c.093.414.255.81.48%201.17.193.31.452.573.76.77a1.91%201.91%200%200%200%201.06.28z%27%0A%20%20%20%20%20%20fill=%27%23FFF%27%20fill-rule=%27nonzero%27/%3E%0A%3C/svg%3E%0A")}.btn-seek-backward-15 .btn-icon{content:url("data:image/svg+xml,%3Csvg%20viewBox=%270%200%2048%2048%27%20xmlns=%27http://www.w3.org/2000/svg%27%3E%0A%20%20%3Cpath%0A%20%20%20%20%20%20d=%27M4%2024a1.5%201.5%200%200%201%203%200c0%209.389%207.611%2017%2017%2017s17-7.611%2017-17S33.389%207%2024%207h-3.5a1.5%201.5%200%200%201%200-3H24c11.046%200%2020%208.954%2020%2020s-8.954%2020-20%2020S4%2035.046%204%2024z%27%0A%20%20%20%20%20%20fill=%27%23FFF%27%20fill-rule=%27nonzero%27/%3E%0A%20%20%3Cpath%0A%20%20%20%20%20%20d=%27M20.621%205.5l2.94%202.94a1.5%201.5%200%200%201-2.122%202.12l-4-4a1.5%201.5%200%200%201%200-2.12l4-4a1.5%201.5%200%200%201%202.122%202.12L20.62%205.5zM18.51%2030v-8.67l-2%20.82-.89-2.15L19%2018.37h2V30zM27.69%2030.27a5.17%205.17%200%200%201-1.38-.19%204%204%200%200%201-2.25-1.58%203.9%203.9%200%200%201-.61-1.39l2.33-.9c.083.474.31.91.65%201.25a1.75%201.75%200%200%200%201.26.45%201.57%201.57%200%200%200%201.16-.48%201.74%201.74%200%200%200%200-2.38%201.59%201.59%200%200%200-1.18-.48%201.81%201.81%200%200%200-.85.19%202.12%202.12%200%200%200-.61.48l-2.45-1.12.63-5.76h6.78v2.18h-4.65L26.08%2023l.17.05a3.94%203.94%200%200%201%20.81-.48%202.84%202.84%200%200%201%201.18-.22%203.44%203.44%200%200%201%201.37.28c.435.184.83.453%201.16.79.347.358.622.779.81%201.24a4.19%204.19%200%200%201%20.31%201.63%204.25%204.25%200%200%201-.31%201.64%203.6%203.6%200%200%201-.87%201.27%203.94%203.94%200%200%201-1.33.82%204.72%204.72%200%200%201-1.69.25z%27%0A%20%20%20%20%20%20fill=%27%23FFF%27%20fill-rule=%27nonzero%27/%3E%0A%3C/svg%3E%0A")}.btn-seek-backward-30 .btn-icon{content:url("data:image/svg+xml,%3Csvg%20viewBox=%270%200%2048%2048%27%20xmlns=%27http://www.w3.org/2000/svg%27%3E%0A%20%20%3Cpath%0A%20%20%20%20%20%20d=%27M4%2024a1.5%201.5%200%200%201%203%200c0%209.389%207.611%2017%2017%2017s17-7.611%2017-17S33.389%207%2024%207h-3.5a1.5%201.5%200%200%201%200-3H24c11.046%200%2020%208.954%2020%2020s-8.954%2020-20%2020S4%2035.046%204%2024z%27%0A%20%20%20%20%20%20fill=%27%23FFF%27%20fill-rule=%27nonzero%27/%3E%0A%20%20%3Cpath%0A%20%20%20%20%20%20d=%27M20.621%205.5l2.94%202.94a1.5%201.5%200%200%201-2.122%202.12l-4-4a1.5%201.5%200%200%201%200-2.12l4-4a1.5%201.5%200%200%201%202.122%202.12L20.62%205.5zM18.31%2030.27a4.67%204.67%200%200%201-2.76-.8A4.15%204.15%200%200%201%2014%2027.14l2.43-1c.1.96.936%201.673%201.9%201.62a1.7%201.7%200%200%200%201.07-.36%201.15%201.15%200%200%200%20.46-1c0-.92-.667-1.38-2-1.38h-1v-2.23h.94c.199%200%20.397-.024.59-.07.184-.04.36-.112.52-.21a1.07%201.07%200%200%200%20.37-.38%201.19%201.19%200%200%200%20.14-.59c0-.294-.12-.575-.33-.78a1.23%201.23%200%200%200-.93-.34%201.45%201.45%200%200%200-1%20.36%201.79%201.79%200%200%200-.52.85l-2.33-1a4.21%204.21%200%200%201%20.48-.92c.22-.315.49-.592.8-.82a4.17%204.17%200%200%201%201.14-.59%204.47%204.47%200%200%201%201.49-.23%204.9%204.9%200%200%201%201.57.24A3.74%203.74%200%200%201%2021%2019c.324.273.583.615.76%201%20.164.364.246.76.24%201.16a3.25%203.25%200%200%201-.46%201.7%202.54%202.54%200%200%201-.46.56%202.11%202.11%200%200%201-.51.35v.17a3%203%200%200%201%201.34%201%203%203%200%200%201%20.53%201.82%203.32%203.32%200%200%201-.29%201.39%203.21%203.21%200%200%201-.82%201.1A3.85%203.85%200%200%201%2020%2030a5.31%205.31%200%200%201-1.69.27zM29%2030.27a4.49%204.49%200%200%201-3.64-1.73%205.9%205.9%200%200%201-1-1.93%208.59%208.59%200%200%201%200-4.84%205.91%205.91%200%200%201%201-1.93%204.64%204.64%200%200%201%207.28%200%205.91%205.91%200%200%201%201%201.93%208.57%208.57%200%200%201%200%204.84%205.9%205.9%200%200%201-1%201.93A4.51%204.51%200%200%201%2029%2030.27zm0-2.38a1.91%201.91%200%200%200%201-.28%202.44%202.44%200%200%200%20.77-.77%203.8%203.8%200%200%200%20.47-1.17%206.83%206.83%200%200%200%200-3%203.81%203.81%200%200%200-.47-1.17%202.44%202.44%200%200%200-.77-.77%202%202%200%200%200-2.06%200%202.44%202.44%200%200%200-.77.77%203.81%203.81%200%200%200-.47%201.17%206.83%206.83%200%200%200%200%203c.09.413.25.809.47%201.17.195.311.459.575.77.77a1.9%201.9%200%200%200%201.06.28z%27%0A%20%20%20%20%20%20fill=%27%23FFF%27%20fill-rule=%27nonzero%27/%3E%0A%3C/svg%3E%0A")}.btn-repeat[data-state=\'off\'] .btn-icon{content:url("data:image/svg+xml,%3Csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20viewBox=%270%200%2048%2048%27%3E%0A%20%20%3Cpath%0A%20%20%20%20%20%20d=%27M39%2C32H33.5a1.5%2C1.5%2C0%2C0%2C1%2C0-3h9A1.5%2C1.5%2C0%2C0%2C1%2C44%2C30.5h0v9a1.5%2C1.5%2C0%2C0%2C1-3%2C0v-5A20%2C20%2C0%2C0%2C1%2C5.27%2C31a1.5%2C1.5%2C0%2C1%2C1%2C2.8-1A17%2C17%2C0%2C0%2C0%2C39%2C32ZM9%2C16h5.5a1.5%2C1.5%2C0%2C0%2C1%2C0%2C3h-9A1.5%2C1.5%2C0%2C0%2C1%2C4%2C17.5v-9a1.5%2C1.5%2C0%2C0%2C1%2C3%2C0v5A20%2C20%2C0%2C0%2C1%2C42.73%2C17a1.5%2C1.5%2C0%2C0%2C1-2.8%2C1A17%2C17%2C0%2C0%2C0%2C9%2C16Z%27%0A%20%20%20%20%20%20fill=%27%23fff%27/%3E%0A%3C/svg%3E%0A")}.btn-repeat[data-state=\'all\'] .btn-icon{content:url("data:image/svg+xml,%3Csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20viewBox=%270%200%2048%2048%27%3E%0A%20%20%3Cpath%0A%20%20%20%20%20%20d=%27M39%2C32H33.5a1.5%2C1.5%2C0%2C0%2C1%2C0-3h9A1.5%2C1.5%2C0%2C0%2C1%2C44%2C30.5h0v9a1.5%2C1.5%2C0%2C0%2C1-3%2C0v-5A20%2C20%2C0%2C0%2C1%2C5.27%2C31a1.5%2C1.5%2C0%2C1%2C1%2C2.8-1A17%2C17%2C0%2C0%2C0%2C39%2C32ZM9%2C16h5.5a1.5%2C1.5%2C0%2C0%2C1%2C0%2C3h-9A1.5%2C1.5%2C0%2C0%2C1%2C4%2C17.5v-9a1.5%2C1.5%2C0%2C0%2C1%2C3%2C0v5A20%2C20%2C0%2C0%2C1%2C42.73%2C17a1.5%2C1.5%2C0%2C0%2C1-2.8%2C1A17%2C17%2C0%2C0%2C0%2C9%2C16Z%27%0A%20%20%20%20%20%20fill=%27%234285F4%27/%3E%0A%3C/svg%3E%0A")}.btn-repeat[data-state=\'single\'] .btn-icon{content:url("data:image/svg+xml,%3Csvg%20viewBox=%270%200%2048%2048%27%20version=%271.1%27%20xmlns=%27http://www.w3.org/2000/svg%27%3E%0A%20%20%3Cpath%0A%20%20%20%20%20%20d=%27M39%2C32H33.5a1.5%2C1.5%2C0%2C0%2C1%2C0-3h9A1.5%2C1.5%2C0%2C0%2C1%2C44%2C30.5h0v9a1.5%2C1.5%2C0%2C0%2C1-3%2C0v-5A20%2C20%2C0%2C0%2C1%2C5.27%2C31a1.5%2C1.5%2C0%2C1%2C1%2C2.8-1A17%2C17%2C0%2C0%2C0%2C39%2C32ZM9%2C16h5.5a1.5%2C1.5%2C0%2C0%2C1%2C0%2C3h-9A1.5%2C1.5%2C0%2C0%2C1%2C4%2C17.5v-9a1.5%2C1.5%2C0%2C0%2C1%2C3%2C0v5A20%2C20%2C0%2C0%2C1%2C42.73%2C17a1.5%2C1.5%2C0%2C0%2C1-2.8%2C1A17%2C17%2C0%2C0%2C0%2C9%2C16Z%27%0A%20%20%20%20%20%20fill=%27%234285F4%27/%3E%0A%20%20%3Cpolygon%20fill=%27%234285F4%27%20fill-rule=%27nonzero%27%0A%20%20%20%20%20%20points=%2723.8%2029.92%2023.8%2021.25%2021.8%2022.07%2020.87%2019.89%2024.28%2018.29%2026.28%2018.29%2026.28%2029.92%27%3E%3C/polygon%3E%0A%3C/svg%3E%0A")}.btn-shuffle .btn-icon{content:url("data:image/svg+xml,%3Csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20viewBox=%270%200%2048%2048%27%3E%0A%20%20%3Cpath%0A%20%20%20%20%20%20d=%27M37%2C11H29.5a1.5%2C1.5%2C0%2C0%2C1%2C0-3h9A1.5%2C1.5%2C0%2C0%2C1%2C40%2C9.5v9a1.5%2C1.5%2C0%2C0%2C1-3%2C0Z%27%0A%20%20%20%20%20%20fill=%27%23fff%27/%3E%0A%20%20%3Cpath%0A%20%20%20%20%20%20d=%27M8.44%2C10.56a1.5%2C1.5%2C0%2C0%2C1%2C2.12-2.12l27%2C27a1.5%2C1.5%2C0%2C0%2C1-2.12%2C2.12Z%27%0A%20%20%20%20%20%20fill=%27%23fff%27/%3E%0A%20%20%3Cpath%0A%20%20%20%20%20%20d=%27M35.44%2C10.44a1.5%2C1.5%2C0%2C0%2C1%2C2.12%2C2.12l-27%2C27a1.5%2C1.5%2C0%2C0%2C1-2.12-2.12Z%27%0A%20%20%20%20%20%20fill=%27%23fff%27/%3E%0A%20%20%3Cpath%0A%20%20%20%20%20%20d=%27M37%2C37V29.5a1.5%2C1.5%2C0%2C0%2C1%2C3%2C0v9A1.5%2C1.5%2C0%2C0%2C1%2C38.5%2C40h-9a1.5%2C1.5%2C0%2C0%2C1%2C0-3Z%27%0A%20%20%20%20%20%20fill=%27%23fff%27/%3E%0A%3C/svg%3E%0A")}.btn-shuffle[aria-pressed=\'true\'] .btn-icon{content:url("data:image/svg+xml,%3Csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20viewBox=%270%200%2048%2048%27%3E%0A%20%20%3Cpath%0A%20%20%20%20%20%20d=%27M37%2C11H29.5a1.5%2C1.5%2C0%2C0%2C1%2C0-3h9A1.5%2C1.5%2C0%2C0%2C1%2C40%2C9.5v9a1.5%2C1.5%2C0%2C0%2C1-3%2C0Z%27%0A%20%20%20%20%20%20fill=%27%234285F4%27/%3E%0A%20%20%3Cpath%0A%20%20%20%20%20%20d=%27M8.44%2C10.56a1.5%2C1.5%2C0%2C0%2C1%2C2.12-2.12l27%2C27a1.5%2C1.5%2C0%2C0%2C1-2.12%2C2.12Z%27%0A%20%20%20%20%20%20fill=%27%234285F4%27/%3E%0A%20%20%3Cpath%0A%20%20%20%20%20%20d=%27M35.44%2C10.44a1.5%2C1.5%2C0%2C0%2C1%2C2.12%2C2.12l-27%2C27a1.5%2C1.5%2C0%2C0%2C1-2.12-2.12Z%27%0A%20%20%20%20%20%20fill=%27%234285F4%27/%3E%0A%20%20%3Cpath%0A%20%20%20%20%20%20d=%27M37%2C37V29.5a1.5%2C1.5%2C0%2C0%2C1%2C3%2C0v9A1.5%2C1.5%2C0%2C0%2C1%2C38.5%2C40h-9a1.5%2C1.5%2C0%2C0%2C1%2C0-3Z%27%0A%20%20%20%20%20%20fill=%27%234285F4%27/%3E%0A%3C/svg%3E%0A")}.btn-captions .btn-icon{content:url("data:image/svg+xml,%3Csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20viewBox=%270%200%2048%2048%27%3E%0A%20%20%3Cpath%0A%20%20%20%20%20d=%27M7%208H41C42.65%208%2044%209.35%2044%2011V37C44%2038.65%2042.65%2040%2041%2040H7C5.35%2040%204%2038.65%204%2037V11C4%209.35%205.35%208%207%208ZM7%2037H41V11H7V37ZM16.21%2029.7801C15.43%2029.4501%2014.75%2029%2014.18%2028.43C13.61%2027.8601%2013.16%2027.18%2012.85%2026.4C12.52%2025.63%2012.36%2024.8%2012.36%2023.9C12.36%2023%2012.52%2022.17%2012.85%2021.4C13.18%2020.63%2013.63%2019.96%2014.2%2019.39C14.77%2018.82%2015.45%2018.3701%2016.23%2018.0401C17.01%2017.7101%2017.85%2017.55%2018.76%2017.55C19.75%2017.55%2020.62%2017.72%2021.35%2018.06C21.69%2018.22%2022.02%2018.41%2022.33%2018.64C22.91%2019.06%2022.97%2019.9%2022.46%2020.4L22.25%2020.6C21.85%2020.9901%2021.23%2021.03%2020.78%2020.71C20.759%2020.6965%2020.7377%2020.6828%2020.7163%2020.6689C20.5949%2020.5905%2020.4675%2020.508%2020.34%2020.4401C19.9%2020.1901%2019.37%2020.07%2018.76%2020.07C18.22%2020.07%2017.73%2020.16%2017.27%2020.34C16.81%2020.5201%2016.41%2020.7801%2016.07%2021.1201C15.73%2021.4601%2015.46%2021.87%2015.27%2022.34C15.08%2022.8101%2014.98%2023.33%2014.98%2023.91C14.98%2024.49%2015.08%2025.01%2015.27%2025.48C15.46%2025.95%2015.73%2026.3601%2016.07%2026.7001C16.41%2027.0401%2016.81%2027.3%2017.27%2027.48C17.73%2027.66%2018.23%2027.75%2018.76%2027.75C19.4%2027.75%2019.96%2027.6201%2020.44%2027.3601C20.65%2027.25%2020.86%2027.1101%2021.05%2026.9501C21.49%2026.59%2022.14%2026.6301%2022.55%2027.0201L22.76%2027.22C23.27%2027.69%2023.24%2028.5%2022.7%2028.9401C21.6%2029.83%2020.28%2030.2701%2018.74%2030.2701C17.84%2030.2701%2016.99%2030.1101%2016.21%2029.7801ZM28.86%2029.7801C28.08%2029.4501%2027.4%2029%2026.83%2028.43C26.26%2027.8601%2025.81%2027.18%2025.49%2026.4C25.16%2025.63%2025%2024.8%2025%2023.9C25%2023%2025.16%2022.17%2025.49%2021.4C25.82%2020.63%2026.27%2019.96%2026.84%2019.39C27.41%2018.82%2028.09%2018.3701%2028.87%2018.0401C29.65%2017.7101%2030.49%2017.55%2031.4%2017.55C32.39%2017.55%2033.26%2017.72%2033.99%2018.06C34.29%2018.2%2034.58%2018.37%2034.86%2018.56C35.51%2019%2035.57%2019.94%2035.01%2020.49L34.96%2020.5401C34.53%2020.9601%2033.86%2021%2033.36%2020.66C33.25%2020.58%2033.13%2020.51%2033%2020.4401C32.56%2020.1901%2032.03%2020.07%2031.42%2020.07C30.89%2020.07%2030.39%2020.16%2029.93%2020.34C29.47%2020.5201%2029.07%2020.7801%2028.73%2021.1201C28.39%2021.4601%2028.12%2021.87%2027.93%2022.34C27.74%2022.8101%2027.64%2023.33%2027.64%2023.91C27.64%2024.49%2027.74%2025.01%2027.93%2025.48C28.12%2025.95%2028.39%2026.3601%2028.73%2026.7001C29.07%2027.0401%2029.47%2027.3%2029.93%2027.48C30.39%2027.66%2030.89%2027.75%2031.42%2027.75C32.06%2027.75%2032.62%2027.6201%2033.1%2027.3601C33.28%2027.26%2033.46%2027.14%2033.63%2027.01C34.12%2026.6201%2034.82%2026.65%2035.28%2027.08L35.32%2027.1201C35.89%2027.6601%2035.83%2028.58%2035.21%2029.05C34.14%2029.86%2032.87%2030.2701%2031.39%2030.2701C30.49%2030.2701%2029.64%2030.1101%2028.86%2029.7801Z%27%0A%20%20%20%20%20fill=%27%23FFF%27%20fill-rule=%27evenodd%27/%3E%0A%3C/svg%3E%0A")}.btn-captions[aria-pressed=\'true\'] .btn-icon{content:url("data:image/svg+xml,%3Csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20viewBox=%270%200%2048%2048%27%3E%0A%20%20%3Cpath%0A%20%20%20%20%20d=%27m%2028.86%2C29.7801%20c%200.78%2C0.33%201.63%2C0.49%202.53%2C0.49%201.48%2C0%202.75%2C-0.4101%203.82%2C-1.2201%200.62%2C-0.47%200.68%2C-1.3899%200.11%2C-1.9299%20L%2035.28%2C27.08%20c%20-0.46%2C-0.43%20-1.16%2C-0.4599%20-1.65%2C-0.07%20-0.17%2C0.13%20-0.35%2C0.25%20-0.53%2C0.3501%20-0.48%2C0.26%20-1.04%2C0.3899%20-1.68%2C0.3899%20-0.53%2C0%20-1.03%2C-0.09%20-1.49%2C-0.27%20-0.46%2C-0.18%20-0.86%2C-0.4399%20-1.2%2C-0.7799%20-0.34%2C-0.34%20-0.61%2C-0.7501%20-0.8%2C-1.2201%20-0.19%2C-0.47%20-0.29%2C-0.99%20-0.29%2C-1.57%200%2C-0.58%200.1%2C-1.0999%200.29%2C-1.57%200.19%2C-0.47%200.46%2C-0.8799%200.8%2C-1.2199%200.34%2C-0.34%200.74%2C-0.6%201.2%2C-0.7801%200.46%2C-0.18%200.96%2C-0.27%201.49%2C-0.27%200.61%2C0%201.14%2C0.1201%201.58%2C0.3701%200.13%2C0.0699%200.25%2C0.1399%200.36%2C0.2199%200.5%2C0.34%201.17%2C0.3001%201.6%2C-0.1199%20L%2035.01%2C20.49%20c%200.56%2C-0.55%200.5%2C-1.49%20-0.15%2C-1.93%20-0.28%2C-0.19%20-0.57%2C-0.36%20-0.87%2C-0.5%20-0.73%2C-0.34%20-1.6%2C-0.51%20-2.59%2C-0.51%20-0.91%2C0%20-1.75%2C0.1601%20-2.53%2C0.4901%20-0.78%2C0.33%20-1.46%2C0.7799%20-2.03%2C1.3499%20-0.57%2C0.57%20-1.02%2C1.24%20-1.35%2C2.01%20C%2025.16%2C22.17%2025%2C23%2025%2C23.9%20c%200%2C0.9%200.16%2C1.73%200.49%2C2.5%200.32%2C0.78%200.77%2C1.4601%201.34%2C2.03%200.57%2C0.57%201.25%2C1.0201%202.03%2C1.3501%20z%20m%20-12.65%2C0%20c%200.78%2C0.33%201.63%2C0.49%202.53%2C0.49%201.54%2C0%202.86%2C-0.4401%203.96%2C-1.33%20C%2023.24%2C28.5%2023.27%2C27.69%2022.76%2C27.22%20l%20-0.21%2C-0.1999%20c%20-0.41%2C-0.39%20-1.06%2C-0.4301%20-1.5%2C-0.07%20-0.19%2C0.16%20-0.4%2C0.2999%20-0.61%2C0.41%20-0.48%2C0.26%20-1.04%2C0.3899%20-1.68%2C0.3899%20-0.53%2C0%20-1.03%2C-0.09%20-1.49%2C-0.27%20-0.46%2C-0.18%20-0.86%2C-0.4399%20-1.2%2C-0.7799%20-0.34%2C-0.34%20-0.61%2C-0.7501%20-0.8%2C-1.2201%20-0.19%2C-0.47%20-0.29%2C-0.99%20-0.29%2C-1.57%200%2C-0.58%200.1%2C-1.0999%200.29%2C-1.57%200.19%2C-0.47%200.46%2C-0.8799%200.8%2C-1.2199%200.34%2C-0.34%200.74%2C-0.6%201.2%2C-0.7801%200.46%2C-0.18%200.95%2C-0.27%201.49%2C-0.27%200.61%2C0%201.14%2C0.1201%201.58%2C0.3701%200.1275%2C0.0679%200.2549%2C0.1504%200.3763%2C0.2288%200.0214%2C0.0139%200.0427%2C0.0276%200.0637%2C0.0411%200.45%2C0.32%201.07%2C0.2801%201.47%2C-0.11%20l%200.21%2C-0.2%20c%200.51%2C-0.5%200.45%2C-1.34%20-0.13%2C-1.76%20-0.31%2C-0.23%20-0.64%2C-0.42%20-0.98%2C-0.58%20-0.73%2C-0.34%20-1.6%2C-0.51%20-2.59%2C-0.51%20-0.91%2C0%20-1.75%2C0.1601%20-2.53%2C0.4901%20-0.78%2C0.33%20-1.46%2C0.7799%20-2.03%2C1.3499%20-0.57%2C0.57%20-1.02%2C1.24%20-1.35%2C2.01%20-0.33%2C0.77%20-0.49%2C1.6%20-0.49%2C2.5%200%2C0.9%200.16%2C1.73%200.49%2C2.5%200.31%2C0.78%200.76%2C1.4601%201.33%2C2.03%200.57%2C0.57%201.25%2C1.0201%202.03%2C1.3501%20z%20M%207%2C8%20C%205.35%2C8%204%2C9.35%204%2C11%20v%2026%20c%200%2C1.65%201.35%2C3%203%2C3%20h%2034%20c%201.65%2C0%203%2C-1.35%203%2C-3%20V%2011%20C%2044%2C9.35%2042.65%2C8%2041%2C8%20Z%27%0A%20%20%20%20%20fill=%27%234285F4%27%20fill-rule=%27evenodd%27/%3E%0A%3C/svg%3E%0A")}.btn-like .btn-icon{content:url("data:image/svg+xml,%3Csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20viewBox=%270%200%2048%2048%27%3E%0A%20%20%3Cpath%0A%20%20%20%20%20%20d=%27M7%2C41.5a1.5%2C1.5%2C0%2C0%2C1-3%2C0v-21a1.5%2C1.5%2C0%2C0%2C1%2C3%2C0Zm29.82.21A2.59%2C2.59%2C0%2C0%2C1%2C34.31%2C43H11.5A1.5%2C1.5%2C0%2C0%2C1%2C10%2C41.5v-22a1.5%2C1.5%2C0%2C0%2C1%2C.44-1.06l11-11A11%2C11%2C0%2C0%2C1%2C22.8%2C6.28a7.15%2C7.15%2C0%2C0%2C1%2C2.15-1.12%2C3.31%2C3.31%2C0%2C0%2C1%2C2.89.35%2C5%2C5%2C0%2C0%2C1%2C2%2C2.89%2C7.94%2C7.94%2C0%2C0%2C1%2C.2%2C3c0%2C.18%2C0%2C.33-.06.42a1.5%2C1.5%2C0%2C0%2C1-.07.25l-2.24%2C6H39c2.81%2C0%2C5%2C2.63%2C5%2C5.5v2.94a3.36%2C3.36%2C0%2C0%2C1-.42%2C1.43ZM33.5%2C40h.83L40.9%2C26.5l.05-.1s0-1%2C0-2.9A2.39%2C2.39%2C0%2C0%2C0%2C39%2C21H25.5a1.5%2C1.5%2C0%2C0%2C1-1.4-2L27%2C11.12a5.21%2C5.21%2C0%2C0%2C0-.1-1.93A2%2C2%2C0%2C0%2C0%2C26.16%2C8S26%2C8%2C25.8%2C8a4.37%2C4.37%2C0%2C0%2C0-1.23.67%2C8.89%2C8.89%2C0%2C0%2C0-.73.59l-.28.26L13%2C20.12V40Z%27%0A%20%20%20%20%20%20fill=%27%23fff%27/%3E%0A%3C/svg%3E%0A")}.btn-like[aria-pressed=\'true\'] .btn-icon{content:url("data:image/svg+xml,%3Csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20viewBox=%270%200%2048%2048%27%3E%0A%20%20%3Cpath%0A%20%20%20%20%20%20d=%27M7%2C41.5a1.5%2C1.5%2C0%2C0%2C1-3%2C0v-21a1.5%2C1.5%2C0%2C0%2C1%2C3%2C0Zm29.82.21A2.59%2C2.59%2C0%2C0%2C1%2C34.31%2C43H11.5A1.5%2C1.5%2C0%2C0%2C1%2C10%2C41.5v-22a1.5%2C1.5%2C0%2C0%2C1%2C.44-1.06l11-11A11%2C11%2C0%2C0%2C1%2C22.8%2C6.28a7.15%2C7.15%2C0%2C0%2C1%2C2.15-1.12%2C3.31%2C3.31%2C0%2C0%2C1%2C2.89.35%2C5%2C5%2C0%2C0%2C1%2C2%2C2.89%2C7.94%2C7.94%2C0%2C0%2C1%2C.2%2C3c0%2C.18%2C0%2C.33-.06.42a1.5%2C1.5%2C0%2C0%2C1-.07.25l-2.24%2C6H39c2.81%2C0%2C5%2C2.63%2C5%2C5.5v2.94a3.36%2C3.36%2C0%2C0%2C1-.42%2C1.43ZM33.5%2C40h.83L40.9%2C26.5l.05-.1s0-1%2C0-2.9A2.39%2C2.39%2C0%2C0%2C0%2C39%2C21H25.5a1.5%2C1.5%2C0%2C0%2C1-1.4-2L27%2C11.12a5.21%2C5.21%2C0%2C0%2C0-.1-1.93A2%2C2%2C0%2C0%2C0%2C26.16%2C8S26%2C8%2C25.8%2C8a4.37%2C4.37%2C0%2C0%2C0-1.23.67%2C8.89%2C8.89%2C0%2C0%2C0-.73.59l-.28.26L13%2C20.12V40Z%27%0A%20%20%20%20%20%20fill=%27%234285F4%27/%3E%0A%3C/svg%3E%0A")}.btn-dislike .btn-icon{content:url("data:image/svg+xml,%3Csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20viewBox=%270%200%2048%2048%27%3E%0A%20%20%3Cpath%0A%20%20%20%20%20%20d=%27M41%2C6.5a1.5%2C1.5%2C0%2C0%2C1%2C3%2C0v21a1.5%2C1.5%2C0%2C0%2C1-3%2C0ZM11.18%2C6.29A2.59%2C2.59%2C0%2C0%2C1%2C13.69%2C5H36.5A1.5%2C1.5%2C0%2C0%2C1%2C38%2C6.5v22a1.5%2C1.5%2C0%2C0%2C1-.44%2C1.06l-11%2C11a11%2C11%2C0%2C0%2C1-1.38%2C1.18%2C7.15%2C7.15%2C0%2C0%2C1-2.15%2C1.12%2C3.31%2C3.31%2C0%2C0%2C1-2.89-.35%2C5%2C5%2C0%2C0%2C1-2-2.89%2C7.94%2C7.94%2C0%2C0%2C1-.2-3c0-.18%2C0-.33.06-.42A1.5%2C1.5%2C0%2C0%2C1%2C18.1%2C36l2.24-6H9c-2.81%2C0-5-2.63-5-5.5V21.56a3.36%2C3.36%2C0%2C0%2C1%2C.42-1.43ZM35%2C8H13.67L7.1%2C21.5%2C7%2C21.6s0%2C1%2C0%2C2.9A2.39%2C2.39%2C0%2C0%2C0%2C9%2C27H22.5a1.5%2C1.5%2C0%2C0%2C1%2C1.4%2C2L21%2C36.88a5.21%2C5.21%2C0%2C0%2C0%2C.1%2C1.93%2C2%2C2%2C0%2C0%2C0%2C.78%2C1.2s.12%2C0%2C.36%2C0a4.37%2C4.37%2C0%2C0%2C0%2C1.23-.67%2C8.89%2C8.89%2C0%2C0%2C0%2C.73-.59l.28-.26L35%2C27.88Z%27%0A%20%20%20%20%20%20fill=%27%23fff%27/%3E%0A%3C/svg%3E%0A")}.btn-dislike[aria-pressed=\'true\'] .btn-icon{content:url("data:image/svg+xml,%3Csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20viewBox=%270%200%2048%2048%27%3E%0A%20%20%3Cpath%0A%20%20%20%20%20%20d=%27M41%2C6.5a1.5%2C1.5%2C0%2C0%2C1%2C3%2C0v21a1.5%2C1.5%2C0%2C0%2C1-3%2C0ZM11.18%2C6.29A2.59%2C2.59%2C0%2C0%2C1%2C13.69%2C5H36.5A1.5%2C1.5%2C0%2C0%2C1%2C38%2C6.5v22a1.5%2C1.5%2C0%2C0%2C1-.44%2C1.06l-11%2C11a11%2C11%2C0%2C0%2C1-1.38%2C1.18%2C7.15%2C7.15%2C0%2C0%2C1-2.15%2C1.12%2C3.31%2C3.31%2C0%2C0%2C1-2.89-.35%2C5%2C5%2C0%2C0%2C1-2-2.89%2C7.94%2C7.94%2C0%2C0%2C1-.2-3c0-.18%2C0-.33.06-.42A1.5%2C1.5%2C0%2C0%2C1%2C18.1%2C36l2.24-6H9c-2.81%2C0-5-2.63-5-5.5V21.56a3.36%2C3.36%2C0%2C0%2C1%2C.42-1.43ZM35%2C8H13.67L7.1%2C21.5%2C7%2C21.6s0%2C1%2C0%2C2.9A2.39%2C2.39%2C0%2C0%2C0%2C9%2C27H22.5a1.5%2C1.5%2C0%2C0%2C1%2C1.4%2C2L21%2C36.88a5.21%2C5.21%2C0%2C0%2C0%2C.1%2C1.93%2C2%2C2%2C0%2C0%2C0%2C.78%2C1.2s.12%2C0%2C.36%2C0a4.37%2C4.37%2C0%2C0%2C0%2C1.23-.67%2C8.89%2C8.89%2C0%2C0%2C0%2C.73-.59l.28-.26L35%2C27.88Z%27%0A%20%20%20%20%20%20fill=%27%234285F4%27/%3E%0A%3C/svg%3E%0A")}.btn-like-heart .btn-icon{content:url("data:image/svg+xml,%3Csvg%20viewBox=%270%200%2048%2048%27%20xmlns=%27http://www.w3.org/2000/svg%27%3E%0A%20%20%3Cpath%20d=%27m%2033.0002%2C9%20c%201.66%2C0%203.21%2C0.49%204.62%2C1.45%202%2C1.37%203.29%2C3.74%203.38%2C6.21%200.22%2C6.37%20-6.26%2C12.25%20-16.11%2C21.18%20l%20-0.89%2C0.81%20-0.87%2C-0.79%20-0.08%2C-0.07%20C%2013.2602%2C28.89%206.7902003%2C23.02%207.0202003%2C16.66%20c%200.09%2C-2.46%201.38%2C-4.84%203.3799997%2C-6.21%201.39%2C-0.96%202.94%2C-1.45%204.6%2C-1.45%202.540001%2C0%205.050001%2C1.17%206.720001%2C3.13%20l%202.279999%2C2.68%202.28%2C-2.68%20c%201.67%2C-1.96%204.18%2C-3.13%206.72%2C-3.13%20z%20m%20-18%2C-3%20c%20-2.13%2C0%20-4.31%2C0.61%20-6.3099997%2C1.98%20-2.81%2C1.92%20-4.559996%2C5.17%20-4.679997%2C8.58%20-0.279999%2C7.76%206.5899967%2C13.98%2017.0899977%2C23.52%20l%201.549999%2C1.4%20c%200.38%2C0.34%200.86%2C0.52%201.34%2C0.52%200.48%2C0%200.96%2C-0.17%201.35%2C-0.52%20l%201.56%2C-1.42%20c%2010.5%2C-9.52%2017.37%2C-15.74%2017.09%2C-23.51%20-0.12%2C-3.4%20-1.87%2C-6.65%20-4.68%2C-8.58%20-2%2C-1.36%20-4.18%2C-1.97%20-6.31%2C-1.97%20-3.48%2C0%20-6.82%2C1.62%20-9%2C4.18%20C%2021.820201%2C7.62%2018.480201%2C6%2015.0002%2C6%20Z%27%0A%20%20%20%20%20fill=%27%23fff%27%20/%3E%0A%3C/svg%3E%0A")}.btn-like-heart[aria-pressed=\'true\'] .btn-icon{content:url("data:image/svg+xml,%3Csvg%20viewBox=%270%200%2048%2048%27%20xmlns=%27http://www.w3.org/2000/svg%27%3E%0A%20%20%3Cpath%0A%20%20%20%20%20d=%27m%2015.0002%2C6%20c%20-2.13%2C0%20-4.31%2C0.61%20-6.3099997%2C1.98%20-2.81%2C1.92%20-4.559996%2C5.17%20-4.679997%2C8.58%20-0.279999%2C7.76%206.5899967%2C13.98%2017.0899977%2C23.52%20l%201.549999%2C1.4%20c%200.38%2C0.34%200.86%2C0.52%201.34%2C0.52%200.48%2C0%200.96%2C-0.17%201.35%2C-0.52%20l%201.56%2C-1.42%20c%2010.5%2C-9.52%2017.37%2C-15.74%2017.09%2C-23.51%20-0.12%2C-3.4%20-1.87%2C-6.65%20-4.68%2C-8.58%20-2%2C-1.36%20-4.18%2C-1.97%20-6.31%2C-1.97%20-3.48%2C0%20-6.82%2C1.62%20-9%2C4.18%20C%2021.820201%2C7.62%2018.480201%2C6%2015.0002%2C6%20Z%27%0A%20%20%20%20%20fill=%27%234285F4%27%20/%3E%0A%3C/svg%3E%0A")}.btn-lyrics .btn-icon{content:url("data:image/svg+xml,%3Csvg%20viewBox=%270%200%2048%2048%27%20fill=%27%23fff%27%20xmlns=%27http://www.w3.org/2000/svg%27%3E%0A%20%20%3Cline%20x1=%2715.5%27%20y1=%2722.5%27%20x2=%2722.5%27%20y2=%2722.5%27%20stroke=%27%23fff%27%20stroke-width=%273%27%0A%20%20%20%20%20%20stroke-linecap=%27round%27/%3E%0A%20%20%3Cline%20x1=%2715.5%27%20y1=%2727.5%27%20x2=%2720.5%27%20y2=%2727.5%27%20stroke=%27%23fff%27%20stroke-width=%273%27%0A%20%20%20%20%20%20stroke-linecap=%27round%27/%3E%0A%20%20%3Cline%20x1=%2715.5%27%20y1=%2732.5%27%20x2=%2723.5%27%20y2=%2732.5%27%20stroke=%27%23fff%27%20stroke-width=%273%27%0A%20%20%20%20%20%20stroke-linecap=%27round%27/%3E%0A%20%20%3Cline%20x1=%2715.5%27%20y1=%2717.5%27%20x2=%2723.5%27%20y2=%2717.5%27%20stroke=%27%23fff%27%20stroke-width=%273%27%0A%20%20%20%20%20%20stroke-linecap=%27round%27/%3E%0A%20%20%3Cpath%0A%20%20%20%20%20%20d=%27M%2012%2010%20C%209.809948%2010%208%2011.809948%208%2014%20L%208%2036%20C%208%2038.190052%209.809948%2040%2012%2040%20L%2027%2040%20C%2029.190052%2040%2031%2038.190052%2031%2036%20L%2031%2031.714844%20A%208%208%200%200%201%2028%2030.228516%20L%2028%2036%20C%2028%2036.579945%2027.579945%2037%2027%2037%20L%2012%2037%20C%2011.420055%2037%2011%2036.579945%2011%2036%20L%2011%2014%20C%2011%2013.420055%2011.420055%2013%2012%2013%20L%2027%2013%20C%2027.579945%2013%2028%2013.420055%2028%2014%20L%2028%2017.771484%20A%208%208%200%200%201%2031%2016.285156%20L%2031%2014%20C%2031%2011.809948%2029.190052%2010%2027%2010%20L%2012%2010%20z%20%27/%3E%0A%20%20%3Cpath%20d=%27M8%2044V36L14%2039.5556L8%2044Z%27/%3E%0A%20%20%3Ccircle%20cx=%2733%27%20cy=%2724%27%20r=%275%27/%3E%0A%20%20%3Cline%20x1=%2736%27%20y1=%277%27%20x2=%2736%27%20y2=%2724%27%20stroke=%27%23fff%27%20stroke-width=%274%27%0A%20%20%20%20%20%20stroke-linecap=%27round%27/%3E%0A%20%20%3Cline%20x1=%2736.5%27%20y1=%276.5%27%20x2=%2740.5%27%20y2=%276.5%27%20stroke=%27%23fff%27%20stroke-width=%275%27%0A%20%20%20%20%20%20stroke-linecap=%27round%27/%3E%0A%3C/svg%3E%0A")}.btn-lyrics[aria-pressed=\'true\'] .btn-icon{content:url("data:image/svg+xml,%3Csvg%20viewBox=%270%200%2048%2048%27%20fill=%27%234285f4%27%20xmlns=%27http://www.w3.org/2000/svg%27%3E%0A%20%20%3Cpath%0A%20%20%20%20%20%20d=%27M%2012%2010%20C%209.809948%2010%208%2011.809948%208%2014%20L%208%2036%20C%208%2038.190052%209.809948%2040%2012%2040%20L%2028%2040%20C%2030.190052%2040%2032%2038.190052%2032%2036%20L%2032%2031.744141%20C%2028.558945%2030.850609%2026%2027.710773%2026%2024%20C%2026%2020.289227%2028.558945%2017.149391%2032%2016.255859%20L%2032%2014%20C%2032%2011.809948%2030.190052%2010%2028%2010%20L%2012%2010%20z%20M%2015.5%2016%20L%2023.5%2016%20A%201.5%201.5%200%200%201%2025%2017.5%20A%201.5%201.5%200%200%201%2023.5%2019%20L%2015.5%2019%20A%201.5%201.5%200%200%201%2014%2017.5%20A%201.5%201.5%200%200%201%2015.5%2016%20z%20M%2015.5%2021%20L%2022.5%2021%20A%201.5%201.5%200%200%201%2024%2022.5%20A%201.5%201.5%200%200%201%2022.5%2024%20L%2015.5%2024%20A%201.5%201.5%200%200%201%2014%2022.5%20A%201.5%201.5%200%200%201%2015.5%2021%20z%20M%2015.5%2026%20L%2020.5%2026%20A%201.5%201.5%200%200%201%2022%2027.5%20A%201.5%201.5%200%200%201%2020.5%2029%20L%2015.5%2029%20A%201.5%201.5%200%200%201%2014%2027.5%20A%201.5%201.5%200%200%201%2015.5%2026%20z%20M%2015.5%2031%20L%2023.5%2031%20A%201.5%201.5%200%200%201%2025%2032.5%20A%201.5%201.5%200%200%201%2023.5%2034%20L%2015.5%2034%20A%201.5%201.5%200%200%201%2014%2032.5%20A%201.5%201.5%200%200%201%2015.5%2031%20z%20%27/%3E%0A%20%20%3Cpath%20d=%27M8%2044V36L14%2039.5556L8%2044Z%27/%3E%0A%20%20%3Ccircle%20cx=%2734%27%20cy=%2724%27%20r=%275%27/%3E%0A%20%20%3Cline%20x1=%2737%27%20y1=%277%27%20x2=%2737%27%20y2=%2724%27%20stroke=%27%234285f4%27%20stroke-width=%274%27%0A%20%20%20%20%20%20stroke-linecap=%27round%27/%3E%0A%20%20%3Cline%20x1=%2737.5%27%20y1=%276.5%27%20x2=%2741.5%27%20y2=%276.5%27%20stroke=%27%234285f4%27%20stroke-width=%275%27%0A%20%20%20%20%20%20stroke-linecap=%27round%27/%3E%0A%3C/svg%3E%0A")}.btn-sleep-timer .btn-icon{content:url("data:image/svg+xml,%3Csvg%20viewBox=%270%200%2048%2048%27%20xmlns=%27http://www.w3.org/2000/svg%27%20fill=%27none%27%3E%0A%20%20%20%20%3Cpath%20fill=%27%23fff%27%20d=%27M24%2C8%20C28.44%2C8%2032.48%2C9.62%2035.64%2C12.26%20L35.64%2C12.26%20L37.94%2C9.94%20C38.52%2C9.36%2039.48%2C9.36%2040.06%2C9.94%20C40.64%2C10.52%2040.64%2C11.48%2040.06%2C12.06%20L40.06%2C12.06%20L37.74%2C14.4%20C40.4%2C17.52%2042%2C21.58%2042%2C26%20C42%2C35.94%2033.94%2C44%2024%2C44%20C14.06%2C44%206%2C35.94%206%2C26%20C6%2C16.06%2014.06%2C8%2024%2C8%20Z%20M24%2C11%20C15.72%2C11%209%2C17.72%209%2C26%20C9%2C34.28%2015.72%2C41%2024%2C41%20C32.28%2C41%2039%2C34.28%2039%2C26%20C39%2C17.72%2032.28%2C11%2024%2C11%20Z%20M24%2C14%20C24.82%2C14%2025.5%2C14.68%2025.5%2C15.5%20L25.5%2C15.5%20L25.5%2C26.5%20C25.5%2C27.32%2024.82%2C28%2024%2C28%20C23.18%2C28%2022.5%2C27.32%2022.5%2C26.5%20L22.5%2C26.5%20L22.5%2C15.5%20C22.5%2C14.68%2023.18%2C14%2024%2C14%20Z%20M30.5%2C3%20C31.32%2C3%2032%2C3.68%2032%2C4.5%20C32%2C5.32%2031.32%2C6%2030.5%2C6%20L30.5%2C6%20L17.5%2C6%20C16.68%2C6%2016%2C5.32%2016%2C4.5%20C16%2C3.68%2016.68%2C3%2017.5%2C3%20L17.5%2C3%20Z%27%3E%3C/path%3E%0A%3C/svg%3E%0A")}goog-timeline{flex:none;display:block;margin-bottom:-13px}@media (min-width: 1200px){goog-timeline{margin-bottom:1px}}.time-numbers .left{float:left}.time-numbers .right{float:right;height:24px}.time-numbers .right .time-indicator{margin-left:16px}.time-numbers:after{clear:both;content:"";display:table}.time-indicator,.live-label{display:inline-block;font-size:24px;line-height:24px;opacity:.5}.live-label.live-edge{opacity:1}.live-label.live-edge::before{display:inline-block;width:8px;height:8px;vertical-align:15%;margin-right:10px;background-color:#fa5847;content:\'\';border-radius:8px}.scrubber-layer{margin:-15px 0;height:60px;position:relative}.scrubber-layer.live .progress-fill,.scrubber-layer.live .scrubber::-webkit-slider-thumb{background-color:#fa5847}.progress-bar{background-color:rgba(255,255,255,0.4);border-radius:2px;height:4px;left:0;overflow:hidden;position:absolute;top:28px;width:100%}.progress-fill{background-color:#fff;height:100%;left:0;position:absolute;top:0;transform:scaleX(0);transform-origin:left center;width:100%;will-change:transform}.progress-fill.break{background-color:#fbbc04}.progress-seekable-range,.progress-seekable-played{height:100%;position:absolute;top:0}.progress-seekable-played{background-color:#fa5847}.progress-seekable-range{background-color:rgba(255,255,255,0.5)}.progress-breaks{height:100%;left:0;position:absolute;top:0;width:100%}.break-mark{position:absolute;height:100%;background-color:#fbbc04}.progress-loading{height:100%;right:0;position:absolute;top:0;transform-origin:right center;will-change:transform}input[type=range].scrubber{-webkit-tap-highlight-color:rgba(255,255,255,0);-webkit-focus-ring-color:rgba(255,255,255,0);-webkit-appearance:none;background-color:transparent;height:60px;left:0;margin:0;outline:none;position:absolute;top:0;width:100%;will-change:transform}input[type=range].scrubber::-webkit-slider-thumb{-webkit-appearance:none;background:#fff;border-radius:2px;cursor:pointer;height:24px;margin-top:18px;width:4px}input[type=range].scrubber::-webkit-slider-runnable-track{background:transparent;cursor:pointer;height:60px;width:100%}input[type=range].scrubber[disabled]::-webkit-slider-thumb{display:none}</style><div class=playback-layer><audio-player-compatibility-placeholder></audio-player-compatibility-placeholder><div class=scrim></div><div class=buffering-scrim></div><div class=controls-layer id=controls-layer><div class=controls-toggle id=controls-toggle role=button></div><goog-video-metadata></goog-video-metadata><div class=controls id=controls><goog-timeline></goog-timeline><goog-buttons-bar></goog-buttons-bar></div></div><goog-break-ui></goog-break-ui><div aria-live=assertive class=accessibility-alert id=alert-show-controls style="display: none;"></div><div aria-live=assertive class=accessibility-alert id=alert-hide-controls style="display: none;"></div></div><div class=media-browse-scrim></div><goog-media-browse></goog-media-browse>';
    };
    _.r(yp, _.bd);
    _.r(tp, _.A);
    _.r(up, _.A);
    _.r(vp, _.A);
    _.r(zp, _.A);
    _.r(xp, _.A);
    const QB = _.B('cast.receiver.ui.TouchLayerController');
    _.h = Dp.prototype;
    _.h.vi = function () {
        this.W = !0;
        this.l.classList.add('compatibility-mode-scrim');
    };
    _.h.dg = function (a) {
        this.R || (this.Z = a, Ap(this));
    };
    _.h.xi = function (a) {
        this.D = a;
        this.I = this.D === cast.receiver.C.Sa.AUDIO || this.H ? 8E3 : 4500;
        this.j.o = this.I;
        Ap(this);
    };
    _.h.fd = function () { };
    _.h.cg = function (a) {
        this.O !== a && _.G(QB, `<touch-controls> element is ${a ? 'disabled' : 'enabled'}`);
        this.O = a;
        this.l.classList.toggle('disabled', a);
        Jf(this.j, a);
    };
    _.h.Qh = function (a) {
        this.l.classList.toggle('buffering', a);
    };
    _.h.zi = function () {
        const a = this.j;
        a.j = !0;
        Gf(a);
        this.o && (this.o = !1, Lf(this.j));
    };
    _.h.yi = function () {
        const a = this.j;
        a.j = !1;
        Gf(a);
        this.o || Ep(this);
        this.o = !0;
    };
    _.h.wi = function (a) {
        this.H = a;
        Ap(this);
    };
    _.h.Ai = function (a) {
        this.R = a;
        const b = this.j;
        b.B = a;
        Gf(b);
        a && Ep(this);
    };
    cast.receiver.C.Oq = function (a) {
        a.innerHTML = '<div class=top-images-container><div class=logo id=logo></div><div class=top-right-video-overlay-image id=top-right-video-overlay-image></div></div><div class=subtitle-container><h2 class=subtitle id=subtitle></h2></div><h1 class=title id=title></h1><h1 class=title id=break-title style="display: none"></h1>';
    };
    _.r(Fp, lf);
    Fp.prototype.setTitle = function (a) {
        this.o.textContent = a || '';
    };
    window.customElements && window.customElements.define && (window.customElements.get('goog-video-metadata') || window.customElements.define('goog-video-metadata', Fp));
    var Ip = _.B('cast.receiver.ui.TouchControlsElement');
    _.r(Kp, lf);
    Kp.prototype.connectedCallback = function () {
        const a = this;
        _.G(Ip, '<touch-controls> element is connected to the DOM.');
        _.u.addEventListener('resize', function () {
            return Lp(a);
        });
        Lp(this);
    };
    Kp.prototype.sa = function (a, b) {
        this.A.sa(a, b);
    };
    Kp.prototype.Yb = function (a) {
        this.L || (this.o.Yb(a), pp(this.F), a = !!this.o.j, this.B.classList.toggle('with-related-content', a), this.j && this.j.A.classList.toggle('media-browse', !!a));
    };
    Kp.prototype.setTitle = function (a) {
        this.G.setTitle(a);
        this.j && this.j.setTitle(a);
    };
    window.customElements && window.customElements.define && (window.customElements.get('touch-controls') || window.customElements.define('touch-controls', Kp));
    cast.receiver.C.Iq = Kp;
    var Up = _.B('cast.receiver.ui.ControlsImplementationBase');
    _.r(Xp, _.z);
    _.h = Xp.prototype;
    _.h.yj = function () {
        return new ql('__touch_controls__');
    };
    _.h.sa = function (a, b, c) {
        const d = a;
        let e = {};
        a = (e[cast.receiver.C.la.SLOT_1] = cast.receiver.C.la.SLOT_SECONDARY_1, e[cast.receiver.C.la.SLOT_2] = cast.receiver.C.la.SLOT_PRIMARY_1, e[cast.receiver.C.la.SLOT_3] = cast.receiver.C.la.SLOT_PRIMARY_2, e[cast.receiver.C.la.SLOT_4] = cast.receiver.C.la.SLOT_SECONDARY_2, e)[a] || a;
        if (!Object.values(cast.receiver.C.U).includes(b)) throw Error(`Invalid controls button name '${b}'`);
        if (!Object.values(cast.receiver.C.la).includes(a)) throw Error(`Invalid controls slot name '${a}'`);
        if (!(e = b !== cast.receiver.C.U.SLEEP_TIMER)) {
            e = _.Vg.M().Fc();
            e = !(!e || !e.sleep_timer_overlay_supported);
            let f = cast.receiver.Kb.M();
            f = Ae(f, 'enable_sleep_timer_button');
            e = e && f;
        }
        e ? (c && this.B[a] !== b && cast.receiver.C.X.ut(d, b), b !== cast.receiver.C.U.NO_BUTTON ? this.B[a] !== b && (this.j.sa(a, this.o[b]), this.B[a] = b) : (this.j.sa(a, null), delete this.B[a])) : _.D(Up, 'Sleep timer overlay is not supported on this device');
    };
    _.h.Qd = function () {
        this.sa(cast.receiver.C.la.SLOT_SECONDARY_1, cast.receiver.C.U.NO_BUTTON);
        this.sa(cast.receiver.C.la.SLOT_PRIMARY_1, cast.receiver.C.U.NO_BUTTON);
        this.sa(cast.receiver.C.la.SLOT_PRIMARY_2, cast.receiver.C.U.NO_BUTTON);
        this.sa(cast.receiver.C.la.SLOT_SECONDARY_2, cast.receiver.C.U.NO_BUTTON);
        this.T = !1;
    };
    _.h.displayMetadata = function (a) {
        const b = this.ba;
        let c; let
            d = '';
        let e = c = '';
        let f = [];
        if (a) {
            switch (a.metadataType) {
                case 3:
                    d = a.title;
                    c = a.artist || a.albumArtist || a.composer;
                    e = a.albumName;
                    Be() && (c = [e, c].join(' \u2022 '));
                    f = a.images;
                    break;
                case 5:
                    d = a.chapterTitle || a.title;
                    c = a.bookTitle || a.subtitle;
                    f = a.images;
                    break;
                case 4:
                    d = a.title;
                    c = a.artist;
                    break;
                case 2:
                    d = a.title;
                    if (a.season || a.episode) c = cast.receiver.Y.Mg(a.season, a.episode);
                    f = a.images;
                    break;
                case 1:
                    d = a.title;
                    c = a.subtitle;
                    f = a.images;
                    break;
                case 0:
                    d = a.title;
                    c = a.subtitle;
                    f = a.images;
                    break;
                default:
                    _.D($A, `Unexpected metadata type: ${a.metadataType}`);
            }
        }
        a = d || cast.receiver.Y.hc(cast.receiver.Y.ro, {
            APP_NAME: b || '',
        });
        c = c || '';
        e = e || '';
        (f = f && f[0] && f[0].url || '') && typeof f !== 'string' && (_.D($A, 'Unknown item image url type'), f = '');
        this.j.setTitle(a);
        a = this.j;
        a.G.l.textContent = c || '';
        a.j && (a.j.I.textContent = c);
        a = this.j;
        a.j && (a.j.G.textContent = e);
        a = this.j;
        a.j && (c = a.j, f ? (e = cast.receiver.C.aa.Va(f), c.D.style.backgroundImage = e, c.l.style.backgroundImage = e, c.l.style.visibility = 'visible',
        nf(c.F, f)) : (c.D.style.backgroundImage = '', c.l.style.backgroundImage = '', c.l.style.visibility = 'hidden', nf(c.F, null)));
        a = a.o.A;
        f = f || '';
        a.l !== f && (a.l = f, oo(a));
    };
    _.h.ea = function () {
        _.z.prototype.ea.call(this);
        this.ia.remove();
        this.j.remove();
    };
    var gq = _.B('cast.receiver.ui.KeyEventsHandlerBase');
    _.r(eq, _.z);
    eq.prototype.ea = function () {
        _.z.prototype.ea.call(this);
        this.o && this.o.removeEventListener('keydown', this.B);
    };
    var nq = _.B('cast.receiver.ui.ControlsBase');
    _.r(iq, _.z);
    iq.prototype.Qd = function () {
        const a = this;
        lq(this, function () {
            a.j.Qd();
        });
    };
    iq.prototype.ea = function () {
        _.z.prototype.ea.call(this);
        this.l && this.l.remove();
    };
    iq.prototype.Vg = function () {
        const a = window.document.createElement('div');
        a.style.position = 'absolute';
        a.style.visibility = 'hidden';
        a.style.left = '-1000px';
        a.style.setProperty('height', 'var(--cast-controls-safe-area-height)');
        window.document.body.appendChild(a);
        const b = parseInt(window.getComputedStyle(a, null).height, 10);
        a.remove();
        return b;
    };
    iq.prototype.bh = function () {
        return this.o.promise;
    };
    cast.receiver.C.Cl = iq;
    cast.receiver.crypto = {};
    cast.receiver.cryptokeys = {};
    cast.receiver.crypto.Fd = window.crypto && window.crypto.subtle || {};
    cast.receiver.crypto.ov = !(!cast.__platform__ || !cast.__platform__.cryptokeys);
    cast.receiver.crypto.Cd = !(!cast.__platform__ || !cast.__platform__.crypto);
    cast.receiver.cryptokeys.getKeyByName = cast.receiver.crypto.ov ? cast.__platform__.cryptokeys.getKeyByName : window.cryptokeys && window.cryptokeys.getKeyByName;
    cast.receiver.crypto.decrypt = cast.receiver.crypto.Cd ? cast.__platform__.crypto.decrypt : cast.receiver.crypto.Fd.decrypt;
    cast.receiver.crypto.encrypt = cast.receiver.crypto.Cd ? cast.__platform__.crypto.encrypt : cast.receiver.crypto.Fd.encrypt;
    cast.receiver.crypto.sign = cast.receiver.crypto.Cd ? cast.__platform__.crypto.sign : cast.receiver.crypto.Fd.sign;
    cast.receiver.crypto.unwrapKey = cast.receiver.crypto.Cd ? cast.__platform__.crypto.unwrapKey : cast.receiver.crypto.Fd.unwrapKey;
    cast.receiver.crypto.verify = cast.receiver.crypto.Cd ? cast.__platform__.crypto.verify : cast.receiver.crypto.Fd.verify;
    cast.receiver.crypto.wrapKey = cast.receiver.crypto.Cd ? cast.__platform__.crypto.wrapKey : cast.receiver.crypto.Fd.wrapKey;
    oq.prototype.J = function (a) {
        _.G(sq, `DebugOverlay: ${JSON.stringify(a.data)}`);
        switch (a.data.type) {
            case 'SHOW':
                pq(this);
                break;
            case 'HIDE':
                qq(this);
        }
    };
    oq.prototype.H = function () {
        let a = this.j;
        if (a && rq(a)) {
            let b = a.videoWidth || 0;
            const c = a.videoHeight || 0;
            let d = 0;
            if (a.paused || a.seeking) _.vd(sq, 'not calculating fps because paused or seeking');
            else {
                d = a.webkitDecodedFrameCount;
                a = a.currentTime;
                let e = 0;
                if (this.o.length > 0 && this.A.length > 0) {
                    const f = this.o[0];
                    const g = this.A[0];
                    a > f && d > g && (e = (d - g) / (a - f));
                }
                this.o.push(a);
                this.A.push(d);
                this.o.length >= 5 && this.A.length >= 5 && (this.o.splice(0, this.o.length - 5), this.A.splice(0, this.A.length - 5));
                d = e;
            }
            b = `${b}x${c}(${d > 0 ? Math.round(d).toString()
                : '?'})`;
            _.vd(sq, `video is ${b}`);
            this.B.textContent = b;
        } else if (_.vd(sq, 'video is no longer active, restarting search procedure'), this.j || this.l) qq(this), pq(this);
    };
    oq.prototype.G = function () {
        _.G(sq, 'onSeeking');
        this.o = [this.j.currentTime];
        this.A = [this.j.webkitDecodedFrameCount];
    };
    oq.prototype.I = function () {
        function a(c) {
            for (var d = _.q(c.document.getElementsByTagName('video')), e = d.next(); !e.done; e = d.next()) { if (e = e.value, rq(e)) return e; }
            for (d = 0; d < c.frames.length; ++d) {
                try {
                    const f = a(c.frames[d]);
                    if (f) return f;
                } catch (g) { }
            }
            return null;
        }
        const b = a(window) || this.F;
        b && tq(this, b);
    };
    var sq = _.B('cast.receiver.DebugOverlay');
    const RB = new oq();
    cast.receiver.eme = {};
    cast.receiver.eme.Gv = new Uint8Array([43, 248, 102, 128, 198, 229, 78, 36, 190, 35, 15, 129, 90, 96, 110, 178]);
    cast.receiver.eme.Tv = 2;
    cast.receiver.tc = {};
    cast.receiver.wj = _.B('cast');
    cast.receiver.tc.zk = function (a) {
        if (cast.receiver.wj) {
            const b = cast.receiver.wj;
            a: {
                if (!wA) {
                    wA = {};
                    for (var c = 0, d; d = vA[c]; c++) wA[d.value] = d, wA[d.name] = d;
                }
                if (a in wA) a = wA[a];
                else {
                    for (c = 0; c < vA.length; ++c) {
                        if (d = vA[c], d.value <= a) {
                            a = d;
                            break a;
                        }
                    } a = null;
                }
            }
            b && (md(od(), b.j()).level = a);
        }
    };
    const SB = cast.ag ? 800 : 1E3;
    const TB = parseInt(cast.receiver.platform.Ra('log-level-cast-receiver'), 10);
    cast.receiver.tc.zk(TB || SB);
    var By = _.B('cast.receiver.ui.PlaybackTimeTracker');
    _.r(uq, _.z);
    uq.prototype.Ib = function (a) {
        a !== this.j && (this.j && (this.j.removeEventListener('timeupdate', this.I), this.j = null), a && (this.j = a, this.j.addEventListener('timeupdate', this.I)));
    };
    uq.prototype.ea = function () {
        _.z.prototype.ea.call(this);
        clearInterval(this.B);
        this.Ib(null);
    };
    cast.receiver.C.yp = function (a) {
        a.innerHTML = '<style>:host{display:block;position:absolute;border-radius:inherit;pointer-events:none;width:100%;height:100%;overflow:hidden;top:0;left:0;right:0;bottom:0;--wave-fade-duration:500ms}.highlight,.wave{pointer-events:none;position:absolute;top:0;left:0;background-color:#fff;width:100%;height:100%}@media (prefers-color-scheme:light){:host([theme-responsive]) .highlight,:host([theme-responsive]) .wave{background-color:#000}}:host([recenters]){border-radius:50%}:host([recenters]) .highlight{border-radius:50%}.highlight{opacity:0;transition:opacity 200ms;will-change:opacity;border-radius:inherit}.highlight.active{opacity:.04;transition:none}.wave{border-radius:50%;opacity:0;will-change:transform,opacity;animation:wave-fade-in-out var(--wave-fade-duration) linear,wave-expand 300ms linear forwards}@keyframes wave-fade-in-out{0%{opacity:0}10%{opacity:.07}100%{opacity:0}}@keyframes wave-expand{100%{transform:translate(0, 0) scale(1, 1)}}</style>';
    };
    _.r(xq, lf);
    _.h = xq.prototype;
    _.h.createdCallback = function () {
        const a = this.attachShadow({
            mode: 'open',
        });
        (0, cast.receiver.C.yp)(a);
        this.l = document.createElement('div');
        this.l.classList.add('highlight');
        a.appendChild(this.l);
        this.F = parseInt(this.style.getPropertyValue('--wave-fade-duration'), 10) || 500;
        this.D = this.nu.bind(this);
        this.o = this.mu.bind(this);
    };
    _.h.connectedCallback = function () {
        this.parentNode.nodeType === 11 ? this.j = this.shadowRoot : this.j = this.parentNode;
        this.hasAttribute('recenters') && (this.A = !0);
        this.j.addEventListener('touchstart', this.D);
        this.j.addEventListener('touchend', this.o);
        this.j.addEventListener('touchcancel', this.o);
    };
    _.h.disconnectedCallback = function () {
        this.j.removeEventListener('touchstart', this.D);
        this.j.removeEventListener('touchend', this.o);
        this.j.removeEventListener('touchcancel', this.o);
        this.j = null;
    };
    _.h.mu = function () {
        const a = this;
        const b = this.H + 200 - Date.now();
        b <= 0 ? this.l.classList.remove('active') : this.B = setTimeout(function () {
            a.l.classList.remove('active');
        }, b);
    };
    _.h.nu = function (a) {
        let b = this.getBoundingClientRect();
        let c = a.targetTouches[0];
        a = c.clientX - b.left;
        c = c.clientY - b.top;
        let d = b.width;
        b = b.height;
        if (this.A) {
            b = Math.max(d, b);
            a -= b / 2;
            c -= b / 2;
            const e = Math.sqrt(a * a + c * c);
            d = (d - 50) / 2;
            e > d && (a *= d / e, c *= d / e);
        } else d = Math.max(a, d - a), b = Math.max(c, b - c), b = 2.2 * Math.sqrt(d * d + b * b), a -= b / 2, c -= b / 2;
        yq(this, b, a, c, 50 / b);
        clearTimeout(this.B);
        this.l.classList.add('active');
        this.H = Date.now();
    };
    window.customElements && window.customElements.define && (window.customElements.get('goog-ripple') || window.customElements.define('goog-ripple', xq));
    cast.receiver.C.Ew = xq;
    _.UB = /\uffff/.test('\uffff') ? /[\\"\x00-\x1f\x7f-\uffff]/g : /[\\"\x00-\x1f\x7f-\xff]/g;
    Aq.prototype.j = null;
    let VB;
    _.Qa(Dq, Aq);
    VB = new Dq();
    _.Pq = RegExp('^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$');
    _.Qa(_.Fq, _.bd);
    _.Fq.prototype.ha = _.B('goog.net.XhrIo');
    var Qq = /^https?$/i;
    const WB = ['POST', 'PUT'];
    _.h = _.Fq.prototype;
    _.h.setTrustToken = function (a) {
        this.ba = a;
    };
    _.h.send = function (a, b, c, d) {
        if (this.j) throw Error(`[goog.net.XhrIo] Object is active with another request=${this.O}; newUri=${a}`);
        b = b ? b.toUpperCase() : 'GET';
        this.O = a;
        this.G = '';
        this.A = 0;
        this.da = b;
        this.W = !1;
        this.l = !0;
        this.j = this.V ? Eq(this.V) : Eq(VB);
        this.T = this.V ? Cq(this.V) : Cq(VB);
        this.j.onreadystatechange = (0, _.Na)(this.lk, this);
        try {
            _.vd(this.ha, Oq(this, 'Opening Xhr')), this.Z = !0, this.j.open(b, String(a), !0), this.Z = !1;
        } catch (g) {
            _.vd(this.ha, Oq(this, `Error opening Xhr: ${g.message}`));
            Kq(this, g);
            return;
        }
        a = c
            || '';
        c = new Map(this.headers);
        if (d) {
            if (Object.getPrototypeOf(d) === Object.prototype) { for (var e in d) c.set(e, d[e]); } else if (typeof d.keys === 'function' && typeof d.get === 'function') {
                e = _.q(d.keys());
                for (let f = e.next(); !f.done; f = e.next()) f = f.value, c.set(f, d.get(f));
            } else throw Error(`Unknown input type for opt_headers: ${String(d)}`);
        }
        d = Array.from(c.keys()).find(function (g) {
            return g.toLowerCase() == 'content-type';
        });
        e = _.u.FormData && a instanceof _.u.FormData;
        !_.bb(WB, b) || d || e || c.set('Content-Type', 'application/x-www-form-urlencoded;charset=utf-8');
        b = _.q(c);
        for (d = b.next(); !d.done; d = b.next()) c = _.q(d.value), d = c.next().value, c = c.next().value, this.j.setRequestHeader(d, c);
        this.fa && (this.j.responseType = this.fa);
        'withCredentials' in this.j && this.j.withCredentials !== this.ca && (this.j.withCredentials = this.ca);
        if ('setTrustToken' in this.j && this.ba) {
            try {
                this.j.setTrustToken(this.ba);
            } catch (g) {
                _.vd(this.ha, Oq(this, `Error SetTrustToken: ${g.message}`));
            }
        }
        try {
            Sq(this), this.B > 0 && (this.R = Hq(this.j), _.vd(this.ha, Oq(this, `Will abort after ${this.B}ms if incomplete, xhr2 ${this.R}`)), this.R ? (this.j.timeout = this.B, this.j.ontimeout = (0, _.Na)(this.Bi, this)) : this.J = _.qe(this.Bi, this.B, this)), _.vd(this.ha, Oq(this, 'Sending request')), this.L = !0, this.j.send(a), this.L = !1;
        } catch (g) {
            _.vd(this.ha, Oq(this, `Send error: ${g.message}`)), Kq(this, g);
        }
    };
    _.h.Bi = function () {
        typeof Lq !== 'undefined' && this.j && (this.G = `Timed out after ${this.B}ms, aborting`, this.A = 8, _.vd(this.ha, Oq(this, this.G)), this.dispatchEvent('timeout'), this.abort(8));
    };
    _.h.abort = function (a) {
        this.j && this.l && (_.vd(this.ha, Oq(this, 'Aborting')), this.l = !1, this.o = !0, this.j.abort(), this.o = !1, this.A = a || 7, this.dispatchEvent('complete'), this.dispatchEvent('abort'), Jq(this));
    };
    _.h.ka = function () {
        this.j && (this.l && (this.l = !1, this.o = !0, this.j.abort(), this.o = !1), Jq(this, !0));
        _.Fq.yb.ka.call(this);
    };
    _.h.lk = function () {
        this.Wa() || (this.Z || this.L || this.o ? Rq(this) : this.fu());
    };
    _.h.fu = function () {
        Rq(this);
    };
    _.h.isActive = function () {
        return !!this.j;
    };
    _.h.isComplete = function () {
        return Mq(this) == 4;
    };
    cast.framework = {};
    cast.framework.Bl = function (a) {
        a.innerHTML = "<style>@-webkit-keyframes spin{0%{-webkit-transform:rotate(0deg)}100%{-webkit-transform:rotate(360deg)}}.background{background:var(--background, linear-gradient(to bottom, #000, #000 10%, #1e1e1e));background-color:var(--background-color);background-image:var(--background-image);background-position:center;background-repeat:var(--background-repeat, no-repeat);background-size:var(--background-size, cover)}.splash{background:var(--splash-background);background-color:var(--splash-color);background-image:var(--splash-image);background-repeat:var(--splash-repeat);background-size:var(--splash-size)}.logo{background:var(--logo-background);background-color:var(--logo-color);background-image:var(--logo-image);background-repeat:var(--logo-repeat);background-size:var(--logo-size)}.player{background:#111;color:#f1f1f1;font-family:var(--font-family, ''),'Roboto',Arial,sans-serif;font-weight:300}.player,.background,.foreground,.slideshow,.logo,.splash{bottom:0;left:0;position:absolute;right:0;top:0}.logo,.splash{background-position:center;background-repeat:no-repeat;color:rgba(221,221,221,0.8);display:none;font-size:44px;padding-top:25%;position:absolute;text-align:center}video{background-color:#000;background-position:center;background-repeat:no-repeat;background-size:contain;display:none;height:100%;width:100%;object-fit:contain}.player[data-media-category='IMAGE'] video{display:block}.player[data-media-category='IMAGE'] .background{background-color:#111;background-image:none}.player[data-media-category='VIDEO'][data-state='loading'] video,.player[data-media-category='VIDEO'][data-state='buffering'] video,.player[data-media-category='VIDEO'][data-state='paused'] video,.player[data-media-category='VIDEO'][data-state='playing'] video{display:block}.player[data-state='launching'] .logo{display:block}.player[data-state='launching'] .spinner{background-image:var(--spinner-image, url('data:image/svg+xml,%3Csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20x=%270px%27%20y=%270px%27%20width=%2724px%27%20height=%2724px%27%20viewBox=%270%200%2024%2024%27%20enable-background=%27new%200%200%2024%2024%27%20xml:space=%27preserve%27%20fill=%27%23FFFFFF%27%3E%0A%20%20%20%20%3Cpath%20d=%27M12%2C22C6.49%2C22%2C2%2C17.51%2C2%2C12C2%2C6.49%2C6.49%2C2%2C12%2C2c0.55%2C0%2C1%2C0.45%2C1%2C1s-0.45%2C1-1%2C1c-4.41%2C0-8%2C3.59-8%2C8s3.59%2C8%2C8%2C8s8-3.59%2C8-8c0-0.55%2C0.45-1%2C1-1s1%2C0.45%2C1%2C1C22%2C17.51%2C17.51%2C22%2C12%2C22z%27/%3E%0A%20%20%20%20%3Crect%20fill=%27none%27%20width=%2724%27%20height=%2724%27/%3E%0A%3C/svg%3E%0A'));background-size:cover;bottom:40px;display:block;height:32px;left:50%;margin-left:-16px;position:absolute;-webkit-animation:spin 1s infinite linear;width:32px}.player[data-state='idle'] .splash{display:block}.slideshow{--animation-duration:var(--slideshow-animation-duration, 2s);display:none;--interval-duration:var(--slideshow-interval-duration, 10s)}.slideshow.active{display:block}.slideshow .slide{background-color:#000;background-position:center center;background-repeat:no-repeat;background-size:contain;height:100%;opacity:0;position:absolute;width:100%}.slideshow .slide.visible{opacity:1;-webkit-transition-property:opacity;-webkit-transition-duration:var(--slideshow-animation-duration, 2s)}.slideshow .slide.top{z-index:100}.slideshow .slideshow-image-1{background-image:var(--slideshow-image-1)}.slideshow .slideshow-image-2{background-image:var(--slideshow-image-2)}.slideshow .slideshow-image-3{background-image:var(--slideshow-image-3)}.slideshow .slideshow-image-4{background-image:var(--slideshow-image-4)}.slideshow .slideshow-image-5{background-image:var(--slideshow-image-5)}.slideshow .slideshow-image-6{background-image:var(--slideshow-image-6)}.slideshow .slideshow-image-7{background-image:var(--slideshow-image-7)}.slideshow .slideshow-image-8{background-image:var(--slideshow-image-8)}.slideshow .slideshow-image-9{background-image:var(--slideshow-image-9)}.slideshow .slideshow-image-10{background-image:var(--slideshow-image-10)}</style><div class=player data-state=launching id=castPlayer><div class=background></div><div class=foreground><video aria-hidden=true class=mediaElement id=castMediaElement></video><div class=logo id=logo></div><div class=spinner></div><div class=splash id=splash></div><div class=slideshow id=castSlideshowElement><div class=\"slide slideshow-image-1\"></div><div class=\"slide slideshow-image-2\"></div><div class=\"slide slideshow-image-3\"></div><div class=\"slide slideshow-image-4\"></div><div class=\"slide slideshow-image-5\"></div><div class=\"slide slideshow-image-6\"></div><div class=\"slide slideshow-image-7\"></div><div class=\"slide slideshow-image-8\"></div><div class=\"slide slideshow-image-9\"></div><div class=\"slide slideshow-image-10\"></div></div></div><tv-overlay-placeholder></tv-overlay-placeholder></div>";
    };
    cast.framework.Hq = function (a) {
        qc(a, _.Cb("<style>@-webkit-keyframes spin{0%{-webkit-transform:rotate(0deg)}100%{-webkit-transform:rotate(360deg)}}@-webkit-keyframes loading{0%{margin-left:-100%}100%{margin-left:100%}}.breakIcon{border-radius:2px;color:#fff;display:block;font-weight:bold;padding:2px 4px}.breakIcon:after{content:var(--ad-title, attr(data-ad-label))}.breakMetadata{display:none;overflow:auto;padding-bottom:128px}.breakInfo{float:left}.breakPosition{margin-left:5px}.breakPosition,.breakTime{text-shadow:0 1px 4px #000}.skipBreakMessage,.breakSkippableTime{color:#fff;float:right;font-size:16px;font-weight:400;line-height:24px;text-shadow:0 1px 4px #000}.breakMarker{background-color:#fff;bottom:0;height:100%;opacity:.8;position:absolute;width:2px}.splash{background:var(--splash-background);background-color:var(--splash-color);background-image:var(--splash-image);background-repeat:var(--splash-repeat);background-size:var(--splash-size)}.playback-logo{background-image:var(--playback-logo-image);background-position-x:left;background-repeat:no-repeat;background-size:contain;color:#fff;display:none;font-family:'Roboto',Arial,sans-serif;font-weight:500;order:-2;overflow:hidden}.nextMetadata{display:flex;justify-content:flex-end}.nextMetadataImage{object-fit:contain;max-width:286px;max-height:143px}.nextImagePlaceholder{position:relative;margin-right:40px;min-width:45px}.nextContentRating{margin:0 5px 5px 0;position:absolute;right:0;bottom:0;max-width:40px;max-height:40px}.nextMetadataPlaceHolder{font-weight:bold;margin-right:32px;display:flex;flex-direction:column;align-self:flex-end}.nextMetadataTitle{font-size:48px}.nextMetadataSubtitle,.nextMetadataSubtitle2,.nextMetadataSubtitle3,.nextMetadataCountdown{font-size:20px}.nextOverlay{display:inherit;opacity:0;position:absolute;bottom:0;left:0;right:0;padding:80px 40px}.watermark{background:var(--watermark-background);background-color:var(--watermark-color);background-image:var(--watermark-image);background-position:var(--watermark-position, bottom right);background-repeat:var(--watermark-repeat, no-repeat);background-size:var(--watermark-size);display:none;margin-bottom:128px}.audioPlaybackBackground,.audioPlaybackBackgroundScrim,.gradient{bottom:0;left:0;position:absolute;right:0;top:0}.breakOverlay,.overlay,.watermark{bottom:40px;left:80px;position:absolute;right:80px;top:40px}.overlay{top:auto}[data-display-status=\"false\"] .gradient,[data-display-status=\"false\"] .metadata,[data-display-status=\"false\"] .watermark,[data-display-status=\"false\"] .controlsTimeline,[data-display-status=\"false\"] .audioPlaybackBackground,[data-display-status=\"false\"] .audioPlaybackBackgroundScrim,[data-display-status=\"false\"][data-state='playing'] .controlsPlayPause{opacity:0;visibility:hidden;-webkit-transition:opacity 1s linear,visibility 1s linear}.breakOverlay{display:none;top:auto}.gradient{background:linear-gradient(to top, rgba(0,0,0,0.9), rgba(0,0,0,0) 72%, rgba(0,0,0,0) 100%);display:block;opacity:.9}.metadataPlaceHolder{min-width:0;width:100%}.metadata{padding-bottom:128px}.liveIndicator{display:none}.liveLabel{display:flex;flex-direction:row;align-items:center}.liveLabel:after{content:attr(data-live-label)}.liveLabel.live-edge:before{display:inline-block;background-color:var(--live-progress-color, #d0021b);content:'';border-radius:8px;height:8px;width:8px;margin-right:10px}.metadataTitle{color:rgba(255,255,255,0.8);font-size:48px;font-weight:400;margin:0;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.metadataSubtitle,.metadataSubtitle2{color:rgba(203,203,203,0.8);font-size:20px;font-weight:400;line-height:30px;margin:0;max-height:60px;overflow:hidden}.metadataSubtitle span:not(:first-child):before,.metadataSubtitle2 span:not(:first-child):before{content:'\u00b7';font-weight:bold;padding-left:10px;padding-right:10px}.controls{bottom:0;height:88px;left:0;position:absolute;right:0}.controlsPlayPause{background-size:cover;float:left;height:46px;width:46px}.controlsProgress{background-color:rgba(255,255,255,0.2);height:4px;margin-top:28px;overflow:hidden;position:relative}.controlsProgressInner{height:100%;opacity:.8}.controlsSeekable{background-color:#fff;height:100%;position:absolute;top:0}.controlsSeekablePlayed{background-color:var(--live-progress-color, #d0021b);height:100%;position:absolute;top:0}.controlsTimelineLabels{color:rgba(255,255,255,0.7);font-size:14px;font-weight:400}.controlsCurTime{float:left}.controlsTotalTime{float:right;margin-left:16px}.videoLiveIndicator{float:right}.hidden{display:none}.top-right-video-overlay-image{display:none}.tv-overlay[data-is-live='true'][data-media-category='VIDEO'] .videoLiveIndicator{display:block}.tv-overlay[data-is-live='true'][data-media-category='AUDIO'] .audioLiveIndicator{display:block}.tv-overlay[data-is-live='true'] .controlsProgressInner{background-color:var(--live-progress-color, #d0021b);position:absolute}.tv-overlay[data-state='loading'] .controlsTimelineLabels,.tv-overlay[data-state='loading'] .controlsSeekablePlayed,.tv-overlay[data-state='loading'] .controlsSeekable,.tv-overlay[data-state='loading'] .controlsPlayPause{display:none}.tv-overlay[data-state='loading'] .controlsProgressInner{-webkit-animation:loading 2s infinite linear;width:90% !important}.tv-overlay[data-state='buffering'] .controlsPlayPause{background-image:var(--buffering-image, url('data:image/svg+xml,%3Csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20x=%270px%27%20y=%270px%27%20width=%2724px%27%20height=%2724px%27%20viewBox=%270%200%2024%2024%27%20enable-background=%27new%200%200%2024%2024%27%20xml:space=%27preserve%27%20fill=%27%23FFFFFF%27%3E%0A%20%20%20%20%3Cpath%20d=%27M12%2C22C6.49%2C22%2C2%2C17.51%2C2%2C12C2%2C6.49%2C6.49%2C2%2C12%2C2c0.55%2C0%2C1%2C0.45%2C1%2C1s-0.45%2C1-1%2C1c-4.41%2C0-8%2C3.59-8%2C8s3.59%2C8%2C8%2C8s8-3.59%2C8-8c0-0.55%2C0.45-1%2C1-1s1%2C0.45%2C1%2C1C22%2C17.51%2C17.51%2C22%2C12%2C22z%27/%3E%0A%20%20%20%20%3Crect%20fill=%27none%27%20width=%2724%27%20height=%2724%27/%3E%0A%3C/svg%3E%0A'));-webkit-animation:spin 1s infinite linear}.tv-overlay[data-state='paused'] .controlsPlayPause{background-image:var(--pause-image, url('data:image/svg+xml,%3Csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20width=%2724px%27%20height=%2724px%27%20viewBox=%270%200%2024%2024%27%20fill=%27%23FFFFFF%27%3E%0A%20%20%20%20%3Cpath%20d=%27M6%2019h4V5H6v14zm8-14v14h4V5h-4z%27/%3E%0A%20%20%20%20%3Cpath%20d=%27M0%200h24v24H0z%27%20fill=%27none%27/%3E%0A%3C/svg%3E%0A'))}.tv-overlay[data-state='playing'] .controlsPlayPause{background-image:var(--play-image, none)}.tv-overlay[data-is-playing-break=\"true\"] .breakMetadata{display:block}.tv-overlay[data-is-playing-break=\"true\"] .breakTime{display:inline}.tv-overlay[data-is-playing-break=\"true\"] .breakIcon{display:inline-block}.tv-overlay[data-media-category='IMAGE'] .controls{display:none}.tv-overlay[data-media-category='AUDIO']{--default-progress-color:#fff;overflow:hidden;user-select:none;font-weight:400}.tv-overlay[data-media-category='AUDIO'] .breakOverlay,.tv-overlay[data-media-category='AUDIO'] .nextOverlay{display:none !important}.tv-overlay[data-media-category='AUDIO'] .audioStatusIndicators{flex-direction:row;display:flex;align-items:center;position:absolute;bottom:-3.59375vw;right:0}.tv-overlay[data-media-category='AUDIO'] .audioLiveIndicator{font-weight:500;font-size:1.25vw;line-height:1.25vw;margin-left:20px;text-align:right}.tv-overlay[data-media-category='AUDIO'] .queueStatusIcon{width:24px;height:24px;margin-left:20px}.tv-overlay[data-media-category='AUDIO'] .shuffleStatus{background-image:url(\"data:image/svg+xml,%3Csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20viewBox=%270%200%2048%2048%27%3E%0A%20%20%3Cpath%0A%20%20%20%20%20%20d=%27M37%2C11H29.5a1.5%2C1.5%2C0%2C0%2C1%2C0-3h9A1.5%2C1.5%2C0%2C0%2C1%2C40%2C9.5v9a1.5%2C1.5%2C0%2C0%2C1-3%2C0Z%27%0A%20%20%20%20%20%20fill=%27%23fff%27/%3E%0A%20%20%3Cpath%0A%20%20%20%20%20%20d=%27M8.44%2C10.56a1.5%2C1.5%2C0%2C0%2C1%2C2.12-2.12l27%2C27a1.5%2C1.5%2C0%2C0%2C1-2.12%2C2.12Z%27%0A%20%20%20%20%20%20fill=%27%23fff%27/%3E%0A%20%20%3Cpath%0A%20%20%20%20%20%20d=%27M35.44%2C10.44a1.5%2C1.5%2C0%2C0%2C1%2C2.12%2C2.12l-27%2C27a1.5%2C1.5%2C0%2C0%2C1-2.12-2.12Z%27%0A%20%20%20%20%20%20fill=%27%23fff%27/%3E%0A%20%20%3Cpath%0A%20%20%20%20%20%20d=%27M37%2C37V29.5a1.5%2C1.5%2C0%2C0%2C1%2C3%2C0v9A1.5%2C1.5%2C0%2C0%2C1%2C38.5%2C40h-9a1.5%2C1.5%2C0%2C0%2C1%2C0-3Z%27%0A%20%20%20%20%20%20fill=%27%23fff%27/%3E%0A%3C/svg%3E%0A\")}.tv-overlay[data-media-category='AUDIO'] .repeatStatus{display:none}.tv-overlay[data-media-category='AUDIO'] .repeatStatus[data-state='REPEAT_SINGLE']{background-image:url(\"data:image/svg+xml,%3Csvg%20viewBox=%270%200%2048%2048%27%20version=%271.1%27%20xmlns=%27http://www.w3.org/2000/svg%27%3E%0A%20%20%3Cpath%0A%20%20%20%20%20%20d=%27M39%2C32H33.5a1.5%2C1.5%2C0%2C0%2C1%2C0-3h9A1.5%2C1.5%2C0%2C0%2C1%2C44%2C30.5h0v9a1.5%2C1.5%2C0%2C0%2C1-3%2C0v-5A20%2C20%2C0%2C0%2C1%2C5.27%2C31a1.5%2C1.5%2C0%2C1%2C1%2C2.8-1A17%2C17%2C0%2C0%2C0%2C39%2C32ZM9%2C16h5.5a1.5%2C1.5%2C0%2C0%2C1%2C0%2C3h-9A1.5%2C1.5%2C0%2C0%2C1%2C4%2C17.5v-9a1.5%2C1.5%2C0%2C0%2C1%2C3%2C0v5A20%2C20%2C0%2C0%2C1%2C42.73%2C17a1.5%2C1.5%2C0%2C0%2C1-2.8%2C1A17%2C17%2C0%2C0%2C0%2C9%2C16Z%27%0A%20%20%20%20%20%20fill=%27%23fff%27/%3E%0A%20%20%3Cpolygon%20fill=%27%23fff%27%20fill-rule=%27nonzero%27%0A%20%20%20%20%20%20points=%2723.8%2029.92%2023.8%2021.25%2021.8%2022.07%2020.87%2019.89%2024.28%2018.29%2026.28%2018.29%2026.28%2029.92%27%3E%3C/polygon%3E%0A%3C/svg%3E%0A\");display:block}.tv-overlay[data-media-category='AUDIO'] .repeatStatus[data-state='REPEAT_ALL']{background-image:url(\"data:image/svg+xml,%3Csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20viewBox=%270%200%2048%2048%27%3E%0A%20%20%3Cpath%0A%20%20%20%20%20%20d=%27M39%2C32H33.5a1.5%2C1.5%2C0%2C0%2C1%2C0-3h9A1.5%2C1.5%2C0%2C0%2C1%2C44%2C30.5h0v9a1.5%2C1.5%2C0%2C0%2C1-3%2C0v-5A20%2C20%2C0%2C0%2C1%2C5.27%2C31a1.5%2C1.5%2C0%2C1%2C1%2C2.8-1A17%2C17%2C0%2C0%2C0%2C39%2C32ZM9%2C16h5.5a1.5%2C1.5%2C0%2C0%2C1%2C0%2C3h-9A1.5%2C1.5%2C0%2C0%2C1%2C4%2C17.5v-9a1.5%2C1.5%2C0%2C0%2C1%2C3%2C0v5A20%2C20%2C0%2C0%2C1%2C42.73%2C17a1.5%2C1.5%2C0%2C0%2C1-2.8%2C1A17%2C17%2C0%2C0%2C0%2C9%2C16Z%27%0A%20%20%20%20%20%20fill=%27%23fff%27/%3E%0A%3C/svg%3E%0A\");display:block}.tv-overlay[data-media-category='AUDIO'] .liveLabel.live-edge:before{display:inline-block;background-color:var(--live-progress-color, #d0021b);content:'';border-radius:.625vw;height:.625vw;width:.625vw;margin-right:.78125vw}.tv-overlay[data-media-category='AUDIO'] .audioPlaybackBackground{background:var(--album-art-image, url('//www.gstatic.com/cast/sdk/assets/touch_no_image_1280_800.jpg')) center / cover no-repeat}.tv-overlay[data-media-category='AUDIO'] .audioPlaybackBackgroundScrim{background:rgba(0,0,0,0.9)}.tv-overlay[data-media-category='AUDIO'] .overlay{margin:auto;margin-left:7.8125vw;margin-right:7.8125vw;height:39.0625vw;top:0;left:0;bottom:0;right:0;position:absolute}.tv-overlay[data-media-category='AUDIO'] .metadata{display:flex;flex-direction:row;justify-content:space-between;padding:0}.tv-overlay[data-media-category='AUDIO'] .metadataTitle{display:-webkit-box;-webkit-line-clamp:2;-webkit-box-orient:vertical;overflow:hidden;text-overflow:ellipsis;white-space:initial;word-break:break-word;color:#fff;font-weight:400;font-size:3.75vw;line-height:4.6875vw;margin-top:1.5625vw}.tv-overlay[data-media-category='AUDIO'] .metadataSubtitle{margin-bottom:auto;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;font-weight:400;color:rgba(255,255,255,0.6);font-size:1.5625vw;line-height:1.875vw;margin-top:1.09375vw}.tv-overlay[data-media-category='AUDIO'] .metadataSubtitle2{font-weight:500;order:-1;margin-top:auto;text-transform:uppercase;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;color:rgba(255,255,255,0.6);font-size:1.25vw;line-height:1.25vw;letter-spacing:.0625vw}.tv-overlay[data-media-category='AUDIO'] .metadataPlaceHolder{order:-1;display:flex;flex-direction:column;justify-content:center;margin-top:0;margin-right:6.25vw;width:auto;height:39.0625vw;box-sizing:border-box;padding-bottom:2.8125vw}.tv-overlay[data-media-category='AUDIO'] .metadataImage{content:none !important;background:#000 var(--album-art-image) center / contain no-repeat;width:39.0625vw;height:39.0625vw;flex:none}.tv-overlay[data-media-category='AUDIO'] .metadataImage.has-image{box-shadow:0 .9375vw .9375vw rgba(0,0,0,0.5)}.tv-overlay[data-media-category='AUDIO'] .image-holding-container{display:flex;flex-direction:column;margin-top:0}.tv-overlay[data-media-category='AUDIO'] .top-right-audio-persistent-image{display:none;width:280px;height:60px;object-fit:contain;object-position:right;align-self:flex-end;background-size:contain;background-repeat:no-repeat;background-position:right}.tv-overlay[data-media-category='AUDIO'][data-top-right-audio-persistent-image-element='true'] .metadataImage,.tv-overlay[data-media-category='AUDIO'][data-top-right-audio-persistent-image-element='true'] .controls{width:29.6875vw;height:29.6875vw}.tv-overlay[data-media-category='AUDIO'][data-top-right-audio-persistent-image-element='true'] .metadataImage{margin-top:56px}.tv-overlay[data-media-category='AUDIO'][data-top-right-audio-persistent-image-element='true'] .controls{top:calc(116px)}.tv-overlay[data-media-category='AUDIO'][data-top-right-audio-persistent-image-element='true'] .top-right-audio-persistent-image{display:block}.tv-overlay[data-media-category='AUDIO'] .playback-logo{display:inline-block;font-size:2.5vw;height:2.8125vw;line-height:2.8125vw}.tv-overlay[data-media-category='AUDIO'] .playback-logo.app-icon{height:4.6875vw}.tv-overlay[data-media-category='AUDIO'] .controls{width:39.0625vw;height:39.0625vw;position:absolute;top:0;right:0;left:auto;display:flex;justify-content:center;align-items:center}.tv-overlay[data-media-category='AUDIO'] .controlsProgress{box-shadow:0 -0.078125vw 0 rgba(0,0,0,0.25);background-color:rgba(0,0,0,0.3);height:.3125vw;width:100%;margin:0;position:absolute;bottom:0;left:0}.tv-overlay[data-media-category='AUDIO'] .controlsPlayPause{height:9.6875vw;width:9.6875vw}.tv-overlay[data-media-category='AUDIO'] .controlsCurTime,.tv-overlay[data-media-category='AUDIO'] .controlsTotalTime{position:absolute;bottom:1.40625vw;margin:0;font-size:1.09375vw;line-height:1.25vw;color:rgba(255,255,255,0.7);text-shadow:0 0 .3125vw rgba(0,0,0,0.5)}.tv-overlay[data-media-category='AUDIO'] .controlsCurTime{left:1.09375vw}.tv-overlay[data-media-category='AUDIO'] .controlsTotalTime{right:1.09375vw}.tv-overlay[data-media-category='AUDIO'] .breakMarker{background-color:#fbbc04;width:.78125vw}.tv-overlay[data-media-category='AUDIO'][data-state='loading'] .controlsProgress{display:none}.tv-overlay[data-media-category='AUDIO'][data-state='buffering'] .controlsPlayPause,.tv-overlay[data-media-category='AUDIO'][data-state='loading'] .controlsPlayPause{-webkit-animation:spin 1s infinite linear;display:block;width:5.625vw;height:5.625vw;background-image:var(--buffering-image, url('data:image/svg+xml,%3Csvg%20viewBox=%270%200%2072%2072%27%20xmlns=%27http://www.w3.org/2000/svg%27%3E%0A%20%20%3Cpath%20d=%27M36%2C64%20C20.536027%2C64%208%2C51.463973%208%2C36%20C8%2C28.3421054%2011.0742312%2C21.402236%2016.0558797%2C16.3472055%20L18.9049104%2C19.1548779%20C14.5062491%2C23.6183335%2012.0001567%2C29.6058259%2012%2C35.9992989%20C12%2C49.2547411%2022.7450731%2C60%2036%2C60%20L36%2C64%20Z%20M64%2C36%20C64%2C51.463973%2051.463973%2C64%2036%2C64%20L36%2C60%20C49.254834%2C60%2060%2C49.254834%2060%2C36%20C60%2C28.2977044%2056.3514655%2C21.2105352%2050.2785664%2C16.7073115%20L52.6611093%2C13.4942928%20C59.5409482%2C18.5958848%2064%2C26.7772087%2064%2C36%20Z%27%20fill=%27%23FFFFFF%27%20fill-rule=%27nonzero%27%3E%3C/path%3E%0A%3C/svg%3E%0A'))}.tv-overlay[data-media-category='AUDIO'][data-state='paused'] .controlsPlayPause{filter:drop-shadow(0 0 .3125vw rgba(0,0,0,0.5));background-image:var(--pause-image, url('data:image/svg+xml,%3Csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20viewBox=%270%200%2048%2048%27%3E%0A%20%20%3Cpath%20d=%27M32%2C9.5v29%27%20fill=%27none%27%20stroke=%27%23fff%27%20stroke-linecap=%27round%27%0A%20%20%20%20%20%20stroke-linejoin=%27round%27%20vector-effect=%27non-scaling-stroke%27%0A%20%20%20%20%20%20stroke-width=%274%27/%3E%0A%20%20%3Cpath%20d=%27M16%2C9.5v29%27%20fill=%27none%27%20stroke=%27%23fff%27%20stroke-linecap=%27round%27%0A%20%20%20%20%20%20stroke-linejoin=%27round%27%20vector-effect=%27non-scaling-stroke%27%0A%20%20%20%20%20%20stroke-width=%274%27/%3E%0A%3C/svg%3E%0A'))}.tv-overlay[data-media-category='AUDIO'][data-state='buffering'] .controls,.tv-overlay[data-media-category='AUDIO'][data-state='paused'] .controls{background-color:rgba(0,0,0,0.3);box-shadow:inset 0 -9.375vw 7.03125vw -7.03125vw rgba(0,0,0,0.5)}.tv-overlay[data-media-category='AUDIO'][data-state='playing'] .controlsCurTime,.tv-overlay[data-media-category='AUDIO'][data-state='playing'] .controlsTotalTime{display:none}.tv-overlay[data-media-category=\"VIDEO\"] .metadata{display:flex}.tv-overlay[data-media-category=\"VIDEO\"] .watermark{display:block}.tv-overlay[data-media-category=\"VIDEO\"] .image-holding-container{display:flex}.tv-overlay[data-media-category=\"VIDEO\"] .metadataImage{background-image:none !important;content:var(--album-art-image);align-self:flex-end;height:auto;margin-right:40px;width:88px}.tv-overlay[data-media-category=\"VIDEO\"] .top-right-video-overlay-image{max-width:280px;max-height:100px;position:fixed;top:40px;right:80px;display:block}.tv-overlay[data-media-category=\"VIDEO\"] .metadataPlaceHolder{align-self:flex-end;flex:1}.tv-overlay[data-media-category=\"VIDEO\"][data-state='idle'] .metadata,.tv-overlay[data-media-category=\"VIDEO\"][data-state='idle'] .controlsTimeline,.tv-overlay[data-media-category=\"VIDEO\"][data-state='idle'] .gradient,.tv-overlay[data-media-category=\"VIDEO\"][data-state='idle'] .nextOverlay{display:none}.tv-overlay[data-media-category=\"VIDEO\"][data-state='buffering'] .gradient,.tv-overlay[data-media-category=\"VIDEO\"][data-state='paused'][data-display-status=\"false\"] .gradient{opacity:.1}.tv-overlay[data-media-category=\"VIDEO\"][data-state='playing'].showNextOverlay .gradient,.tv-overlay[data-media-category=\"VIDEO\"][data-state='playing'].showNextOverlay .nextOverlay{opacity:1;visibility:var(--next-preview-visibility, visible);-webkit-transition:opacity 1s linear}.tv-overlay[data-media-category=\"VIDEO\"][data-is-playing-break=\"true\"] .breakOverlay{display:block;visibility:visible}.tv-overlay[data-media-category=\"VIDEO\"][data-is-playing-break=\"true\"] .watermark{display:none}.tv-overlay[data-media-category=\"VIDEO\"] .controlsPlayPause{margin:20px}.tv-overlay[data-media-category=\"VIDEO\"] .controlsTimeline{margin-left:128px;margin-top:16px}.tv-overlay[data-media-category=\"VIDEO\"] .controlsTimelineLabels{margin-top:22px}.progressBar {  background-color: var(--progress-color, var(--default-progress-color, hsl(var(--theme-hue, 42), 95%, 60%)));}.breakIcon {  background-color: var(--break-color, hsl(var(--theme-hue, 42), 100%, 50%));}</style><div class=tv-overlay data-display-status=false data-state=launching id=tv-overlay><div class=gradient></div><div class=watermark></div><div class=audioPlaybackBackground></div><div class=audioPlaybackBackgroundScrim></div><div class=breakOverlay><div class=breakMetadata id=castBreakMetadata><div class=breakInfo><span class=breakIcon></span><span class=breakPosition id=castBreakPosition></span>&nbsp;<span class=breakTime id=castBreakTime></span></div><div class=breakSkippableTime id=castBreakSkippableTime></div><div class=skipBreakMessage id=castSkipBreakMessage></div></div></div><div class=overlay><div class=metadata><div class=image-holding-container id=image-holding-container><div class=top-right-audio-persistent-image id=top-right-audio-persistent-image></div><div class=metadataImage id=castMetadataImage></div></div><div class=top-right-video-overlay-image id=top-right-video-overlay-image></div><div class=metadataPlaceHolder><div class=playback-logo></div><h1 class=metadataTitle id=castMetadataTitle></h1><h2 class=metadataSubtitle id=castMetadataSubtitle></h2><h2 class=metadataSubtitle2 id=castMetadataSubtitle2></h2></div></div><div class=controls><div class=audioStatusIndicators><div class=\"repeatStatus queueStatusIcon\" id=repeatStatus></div><div class=\"shuffleStatus queueStatusIcon\" id=shuffleStatus></div><div class=\"audioLiveIndicator liveIndicator\"><span class=liveLabel></span></div></div><span class=controlsPlayPause></span><div class=controlsTimeline id=castControlsTimeline><div class=controlsProgress id=castControlsProgress><div class=\"controlsProgressInner progressBar\" id=castControlsProgressInner></div><div class=controlsSeekable id=castControlsSeekable></div><div class=controlsSeekablePlayed id=castControlsSeekablePlayed></div></div><div class=controlsTimelineLabels><span class=controlsCurTime id=castControlsCurTime></span><span class=controlsTotalTime id=castControlsTotalTime></span><div class=\"videoLiveIndicator liveIndicator\"><span class=liveLabel></span></div></div></div></div></div><div class=nextOverlay><div class=nextMetadata><div class=nextMetadataPlaceHolder><div class=nextMetadataCountdown id=nextMetadataCountdown></div><div class=nextMetadataTitle id=nextMetadataTitle></div><div class=nextMetadataSubtitle id=nextMetadataSubtitle></div></div><div class=nextImagePlaceholder><div class=nextMetadataImage id=nextMetadataImage></div><div class=nextContentRating id=nextContentRating></div></div></div></div></div>"));
    };
    cast.framework.events = {};
    _.w('cast.framework.events.DetailedErrorCode', {
        MEDIA_UNKNOWN: 100,
        MEDIA_ABORTED: 101,
        MEDIA_DECODE: 102,
        MEDIA_NETWORK: 103,
        MEDIA_SRC_NOT_SUPPORTED: 104,
        SOURCE_BUFFER_FAILURE: 110,
        MEDIAKEYS_UNKNOWN: 200,
        MEDIAKEYS_NETWORK: 201,
        MEDIAKEYS_UNSUPPORTED: 202,
        MEDIAKEYS_WEBCRYPTO: 203,
        NETWORK_UNKNOWN: 300,
        SEGMENT_NETWORK: 301,
        HLS_NETWORK_MASTER_PLAYLIST: 311,
        HLS_NETWORK_PLAYLIST: 312,
        HLS_NETWORK_NO_KEY_RESPONSE: 313,
        HLS_NETWORK_KEY_LOAD: 314,
        HLS_NETWORK_INVALID_SEGMENT: 315,
        HLS_SEGMENT_PARSING: 316,
        DASH_NETWORK: 321,
        DASH_NO_INIT: 322,
        SMOOTH_NETWORK: 331,
        SMOOTH_NO_MEDIA_DATA: 332,
        MANIFEST_UNKNOWN: 400,
        HLS_MANIFEST_MASTER: 411,
        HLS_MANIFEST_PLAYLIST: 412,
        DASH_MANIFEST_UNKNOWN: 420,
        DASH_MANIFEST_NO_PERIODS: 421,
        DASH_MANIFEST_NO_MIMETYPE: 422,
        DASH_INVALID_SEGMENT_INFO: 423,
        SMOOTH_MANIFEST: 431,
        SEGMENT_UNKNOWN: 500,
        TEXT_UNKNOWN: 600,
        APP: 900,
        BREAK_CLIP_LOADING_ERROR: 901,
        BREAK_SEEK_INTERCEPTOR_ERROR: 902,
        IMAGE_ERROR: 903,
        LOAD_INTERRUPTED: 904,
        LOAD_FAILED: 905,
        MEDIA_ERROR_MESSAGE: 906,
        GENERIC: 999,
    });
    cast.framework.messages = {};
    const XB = {
        MEDIA_STATUS: 'MEDIA_STATUS',
        CUSTOM_STATE: 'CUSTOM_STATE',
        CLOUD_STATUS: 'CLOUD_STATUS',
        QUEUE_CHANGE: 'QUEUE_CHANGE',
        QUEUE_ITEMS: 'QUEUE_ITEMS',
        QUEUE_ITEM_IDS: 'QUEUE_ITEM_IDS',
        GET_STATUS: 'GET_STATUS',
        LOAD: 'LOAD',
        PAUSE: 'PAUSE',
        STOP: 'STOP',
        PLAY: 'PLAY',
        SKIP_AD: 'SKIP_AD',
        PLAY_AGAIN: 'PLAY_AGAIN',
        SEEK: 'SEEK',
        SET_PLAYBACK_RATE: 'SET_PLAYBACK_RATE',
        SET_VOLUME: 'SET_VOLUME',
        EDIT_TRACKS_INFO: 'EDIT_TRACKS_INFO',
        EDIT_AUDIO_TRACKS: 'EDIT_AUDIO_TRACKS',
        PRECACHE: 'PRECACHE',
        PRELOAD: 'PRELOAD',
        QUEUE_LOAD: 'QUEUE_LOAD',
        QUEUE_INSERT: 'QUEUE_INSERT',
        QUEUE_UPDATE: 'QUEUE_UPDATE',
        QUEUE_REMOVE: 'QUEUE_REMOVE',
        QUEUE_REORDER: 'QUEUE_REORDER',
        QUEUE_NEXT: 'QUEUE_NEXT',
        QUEUE_PREV: 'QUEUE_PREV',
        QUEUE_GET_ITEM_RANGE: 'QUEUE_GET_ITEM_RANGE',
        QUEUE_GET_ITEMS: 'QUEUE_GET_ITEMS',
        QUEUE_GET_ITEM_IDS: 'QUEUE_GET_ITEM_IDS',
        QUEUE_SHUFFLE: 'QUEUE_SHUFFLE',
        SET_CREDENTIALS: 'SET_CREDENTIALS',
        LOAD_BY_ENTITY: 'LOAD_BY_ENTITY',
        USER_ACTION: 'USER_ACTION',
        DISPLAY_STATUS: 'DISPLAY_STATUS',
        FOCUS_STATE: 'FOCUS_STATE',
        CUSTOM_COMMAND: 'CUSTOM_COMMAND',
        STORE_SESSION: 'STORE_SESSION',
        RESUME_SESSION: 'RESUME_SESSION',
        SESSION_STATE: 'SESSION_STATE',
        REFRESH_CREDENTIALS: 'REFRESH_CREDENTIALS',
        PLAY_STRING: 'PLAY_STRING',
        SHOW_REMOTE_CONTROL_OVERLAY: 'SHOW_REMOTE_CONTROL_OVERLAY',
        EXECUTE_ACTION_SCRIPT: 'EXECUTE_ACTION_SCRIPT',
        APPLICATION_CHANGED: 'APPLICATION_CHANGED',
        Gw: 'SCREEN_NAVIGATION',
        Lw: 'SET_APPLICATION_CONTEXT',
    };
    _.w('cast.framework.messages.MessageType', XB);
    var ix = {
        INVALID_COMMAND: 'INVALID_COMMAND',
        INVALID_PARAMS: 'INVALID_PARAMS',
        INVALID_MEDIA_SESSION_ID: 'INVALID_MEDIA_SESSION_ID',
        SKIP_LIMIT_REACHED: 'SKIP_LIMIT_REACHED',
        NOT_SUPPORTED: 'NOT_SUPPORTED',
        LANGUAGE_NOT_SUPPORTED: 'LANGUAGE_NOT_SUPPORTED',
        END_OF_QUEUE: 'END_OF_QUEUE',
        DUPLICATE_REQUEST_ID: 'DUPLICATE_REQUEST_ID',
        VIDEO_DEVICE_REQUIRED: 'VIDEO_DEVICE_REQUIRED',
        PREMIUM_ACCOUNT_REQUIRED: 'PREMIUM_ACCOUNT_REQUIRED',
        APP_ERROR: 'APP_ERROR',
        AUTHENTICATION_EXPIRED: 'AUTHENTICATION_EXPIRED',
        CONCURRENT_STREAM_LIMIT: 'CONCURRENT_STREAM_LIMIT',
        PARENTAL_CONTROL_RESTRICTED: 'PARENTAL_CONTROL_RESTRICTED',
        CONTENT_FILTERED: 'CONTENT_FILTERED',
        NOT_AVAILABLE_IN_REGION: 'NOT_AVAILABLE_IN_REGION',
        CONTENT_ALREADY_PLAYING: 'CONTENT_ALREADY_PLAYING',
        INVALID_REQUEST: 'INVALID_REQUEST',
        GENERIC_LOAD_ERROR: 'GENERIC_LOAD_ERROR',
    };
    _.w('cast.framework.messages.ErrorReason', ix);
    _.w('cast.framework.messages.ErrorData', Tq);
    _.w('cast.framework.messages.Range', Uq);
    _.w('cast.framework.messages.CustomStateMessage', Vq);
    _.w('cast.framework.messages.RequestData', N);
    _.r(Xq, N);
    _.w('cast.framework.messages.LoadRequestData', Xq);
    _.r(Yq, Xq);
    _.w('cast.framework.messages.PreloadRequestData', Yq);
    _.r(Zq, Xq);
    _.w('cast.framework.messages.PrecacheRequestData', Zq);
    _.r(ar, N);
    _.w('cast.framework.messages.VolumeRequestData', ar);
    _.r(br, N);
    _.w('cast.framework.messages.EditTracksInfoRequestData', br);
    _.r(cr, N);
    _.w('cast.framework.messages.EditAudioTracksRequestData', cr);
    _.r(dr, N);
    _.w('cast.framework.messages.SeekRequestData', dr);
    _.r(er, N);
    _.w('cast.framework.messages.SetPlaybackRateRequestData', er);
    _.r(fr, N);
    _.w('cast.framework.messages.GetStatusRequestData', fr);
    _.r(gr, N);
    _.w('cast.framework.messages.QueueLoadRequestData', gr);
    _.r(hr, N);
    _.w('cast.framework.messages.QueueInsertRequestData', hr);
    _.r(ir, N);
    _.w('cast.framework.messages.QueueUpdateRequestData', ir);
    _.r(jr, N);
    _.w('cast.framework.messages.QueueRemoveRequestData', jr);
    _.r(kr, N);
    _.w('cast.framework.messages.QueueReorderRequestData', kr);
    _.r(lr, N);
    _.w('cast.framework.messages.FetchItemsRequestData', lr);
    _.r(mr, N);
    _.w('cast.framework.messages.GetItemsInfoRequestData', mr);
    _.w('cast.framework.messages.SessionState', nr);
    _.r(or, N);
    _.w('cast.framework.messages.StoreSessionRequestData', or);
    _.r(pr, N);
    _.w('cast.framework.messages.ResumeSessionRequestData', pr);
    _.r(qr, N);
    _.w('cast.framework.messages.StoreSessionResponseData', qr);
    _.w('cast.framework.messages.HlsSegmentFormat', {
        AAC: 'aac',
        AC3: 'ac3',
        MP3: 'mp3',
        TS: 'ts',
        TS_AAC: 'ts_aac',
        TS_HE_AAC: 'ts_he_aac',
        E_AC3: 'e_ac3',
        FMP4: 'fmp4',
    });
    _.w('cast.framework.messages.HlsVideoSegmentFormat', {
        MPEG2_TS: 'mpeg2_ts',
        FMP4: 'fmp4',
    });
    _.w('cast.framework.messages.StreamType', {
        BUFFERED: 'BUFFERED',
        LIVE: 'LIVE',
        NONE: 'NONE',
    });
    _.w('cast.framework.messages.MediaCategory', {
        AUDIO: 'AUDIO',
        VIDEO: 'VIDEO',
        IMAGE: 'IMAGE',
    });
    _.w('cast.framework.messages.HdrType', {
        SDR: 'sdr',
        HDR: 'hdr',
        DV: 'dv',
    });
    var hx = {
        INVALID_PLAYER_STATE: 'INVALID_PLAYER_STATE',
        LOAD_FAILED: 'LOAD_FAILED',
        LOAD_CANCELLED: 'LOAD_CANCELLED',
        INVALID_REQUEST: 'INVALID_REQUEST',
        ERROR: 'ERROR',
    };
    _.w('cast.framework.messages.ErrorType', hx);
    _.w('cast.framework.messages.IdleReason', {
        CANCELLED: 'CANCELLED',
        INTERRUPTED: 'INTERRUPTED',
        FINISHED: 'FINISHED',
        ERROR: 'ERROR',
    });
    _.w('cast.framework.messages.SeekResumeState', {
        PLAYBACK_START: 'PLAYBACK_START',
        PLAYBACK_PAUSE: 'PLAYBACK_PAUSE',
    });
    _.w('cast.framework.messages.PlayerState', {
        IDLE: 'IDLE',
        PLAYING: 'PLAYING',
        PAUSED: 'PAUSED',
        BUFFERING: 'BUFFERING',
    });
    _.w('cast.framework.messages.ExtendedPlayerState', {
        LOADING: 'LOADING',
    });
    _.w('cast.framework.messages.MediaInformation', Wq);
    _.w('cast.framework.messages.SeekableRange', rr);
    _.r(sr, rr);
    _.w('cast.framework.messages.LiveSeekableRange', sr);
    _.w('cast.framework.messages.QueueData', tr);
    _.w('cast.framework.messages.QueueType', {
        ALBUM: 'ALBUM',
        PLAYLIST: 'PLAYLIST',
        AUDIOBOOK: 'AUDIOBOOK',
        RADIO_STATION: 'RADIO_STATION',
        PODCAST_SERIES: 'PODCAST_SERIES',
        TV_SERIES: 'TV_SERIES',
        VIDEO_PLAYLIST: 'VIDEO_PLAYLIST',
        LIVE_TV: 'LIVE_TV',
        MOVIE: 'MOVIE',
    });
    _.w('cast.framework.messages.ContainerType', {
        GENERIC_CONTAINER: 0,
        AUDIOBOOK_CONTAINER: 1,
    });
    _.w('cast.framework.messages.ContainerMetadata', ur);
    _.w('cast.framework.messages.StreamingProtocolType', {
        UNKNOWN: 0,
        MPEG_DASH: 1,
        HLS: 2,
        SMOOTH_STREAMING: 3,
    });
    _.w('cast.framework.messages.MetadataType', {
        GENERIC: 0,
        MOVIE: 1,
        TV_SHOW: 2,
        MUSIC_TRACK: 3,
        PHOTO: 4,
        AUDIOBOOK_CHAPTER: 5,
    });
    _.w('cast.framework.messages.MediaMetadata', vr);
    _.r(wr, vr);
    _.w('cast.framework.messages.GenericMediaMetadata', wr);
    _.r(xr, vr);
    _.w('cast.framework.messages.MovieMediaMetadata', xr);
    _.r(yr, vr);
    _.w('cast.framework.messages.TvShowMediaMetadata', yr);
    _.r(zr, vr);
    _.w('cast.framework.messages.MusicTrackMediaMetadata', zr);
    _.r(Ar, vr);
    _.w('cast.framework.messages.PhotoMediaMetadata', Ar);
    _.r(Br, ur);
    _.w('cast.framework.messages.AudiobookContainerMetadata', Br);
    _.r(Cr, vr);
    _.w('cast.framework.messages.AudiobookChapterMediaMetadata', Cr);
    _.w('cast.framework.messages.ContentRating', function () {
        this.ratingIcon = void 0;
    });
    _.w('cast.framework.messages.Image', function (a) {
        this.url = a;
        this.width = this.height = void 0;
    });
    _.w('cast.framework.messages.Volume', $q);
    _.w('cast.framework.messages.VideoInformation', function (a, b, c) {
        this.width = a;
        this.height = b;
        this.hdrType = c;
    });
    _.w('cast.framework.messages.MediaStatus', Dr);
    _.w('cast.framework.messages.ExtendedMediaStatus', function (a, b, c) {
        this.playerState = a;
        this.media = b;
        this.mediaSessionId = c;
    });
    _.r(Er, Dr);
    _.w('cast.framework.messages.CloudMediaStatus', Er);
    _.w('cast.framework.messages.Command', {
        PAUSE: 1,
        SEEK: 2,
        STREAM_VOLUME: 4,
        STREAM_MUTE: 8,
        ALL_BASIC_MEDIA: 12303,
        QUEUE_NEXT: 64,
        QUEUE_PREV: 128,
        QUEUE_SHUFFLE: 256,
        QUEUE_REPEAT_ALL: 1024,
        QUEUE_REPEAT_ONE: 2048,
        QUEUE_REPEAT: 3072,
        SKIP_AD: 512,
        EDIT_TRACKS: 4096,
        PLAYBACK_RATE: 8192,
        LIKE: 16384,
        DISLIKE: 32768,
        FOLLOW: 65536,
        UNFOLLOW: 131072,
        STREAM_TRANSFER: 262144,
        LYRICS: 524288,
    });
    _.w('cast.framework.messages.TrackType', {
        TEXT: 'TEXT',
        AUDIO: 'AUDIO',
        VIDEO: 'VIDEO',
    });
    var hv = {
        CEA608: 'text/cea608',
        TTML: 'application/ttml+xml',
        VTT: 'text/vtt',
        TTML_MP4: 'application/mp4',
    };
    _.w('cast.framework.messages.CaptionMimeType', hv);
    _.w('cast.framework.messages.TextTrackType', {
        SUBTITLES: 'SUBTITLES',
        CAPTIONS: 'CAPTIONS',
        DESCRIPTIONS: 'DESCRIPTIONS',
        CHAPTERS: 'CHAPTERS',
        METADATA: 'METADATA',
    });
    _.w('cast.framework.messages.TextTrackEdgeType', {
        NONE: 'NONE',
        OUTLINE: 'OUTLINE',
        DROP_SHADOW: 'DROP_SHADOW',
        RAISED: 'RAISED',
        DEPRESSED: 'DEPRESSED',
    });
    _.w('cast.framework.messages.TextTrackWindowType', {
        NONE: 'NONE',
        NORMAL: 'NORMAL',
        ROUNDED_CORNERS: 'ROUNDED_CORNERS',
    });
    _.w('cast.framework.messages.TextTrackFontGenericFamily', {
        SANS_SERIF: 'SANS_SERIF',
        MONOSPACED_SANS_SERIF: 'MONOSPACED_SANS_SERIF',
        SERIF: 'SERIF',
        MONOSPACED_SERIF: 'MONOSPACED_SERIF',
        CASUAL: 'CASUAL',
        CURSIVE: 'CURSIVE',
        SMALL_CAPITALS: 'SMALL_CAPITALS',
    });
    _.w('cast.framework.messages.TextTrackFontStyle', {
        NORMAL: 'NORMAL',
        BOLD: 'BOLD',
        BOLD_ITALIC: 'BOLD_ITALIC',
        ITALIC: 'ITALIC',
    });
    _.w('cast.framework.messages.Track', Fr);
    _.w('cast.framework.messages.TextTrackStyle', function () {
        this.customData = this.fontStyle = this.fontGenericFamily = this.fontFamily = this.windowRoundedCornerRadius = this.windowColor = this.windowType = this.edgeColor = this.edgeType = this.backgroundColor = this.foregroundColor = this.fontScale = void 0;
    });
    _.w('cast.framework.messages.TracksInfo', Gr);
    _.w('cast.framework.messages.RepeatMode', {
        REPEAT_OFF: 'REPEAT_OFF',
        REPEAT_ALL: 'REPEAT_ALL',
        REPEAT_SINGLE: 'REPEAT_SINGLE',
        REPEAT_ALL_AND_SHUFFLE: 'REPEAT_ALL_AND_SHUFFLE',
    });
    _.w('cast.framework.messages.QueueChangeType', {
        INSERT: 'INSERT',
        REMOVE: 'REMOVE',
        ITEMS_CHANGE: 'ITEMS_CHANGE',
        UPDATE: 'UPDATE',
        NO_CHANGE: 'NO_CHANGE',
    });
    _.w('cast.framework.messages.QueueChange', function () {
        this.type = 'QUEUE_CHANGE';
        this.sequenceNumber = this.reorderItemIds = this.insertBefore = this.itemIds = this.changeType = this.requestId = void 0;
    });
    _.w('cast.framework.messages.ItemsInfo', function () {
        this.type = 'QUEUE_ITEMS';
        this.sequenceNumber = this.items = this.requestId = void 0;
    });
    _.w('cast.framework.messages.QueueIds', function () {
        this.type = 'QUEUE_ITEM_IDS';
        this.sequenceNumber = this.itemIds = this.requestId = void 0;
    });
    _.w('cast.framework.messages.GetStatusOptions', {
        NO_METADATA: 1,
        NO_QUEUE_ITEMS: 2,
    });
    _.w('cast.framework.messages.Break', _.Hr);
    _.w('cast.framework.messages.BreakClip', _.Ir);
    _.w('cast.framework.messages.VastAdsRequest', _.Jr);
    _.w('cast.framework.messages.BreakStatus', function (a, b) {
        this.currentBreakTime = a;
        this.currentBreakClipTime = b;
        this.whenSkippable = this.breakClipId = this.breakId = void 0;
    });
    _.w('cast.framework.messages.UserActionState', function (a) {
        this.userAction = a;
        this.customData = void 0;
    });
    _.w('cast.framework.messages.ContentFilteringMode', {
        FILTER_EXPLICIT: 'FILTER_EXPLICIT',
    });
    _.w('cast.framework.messages.LoadOptions', function () {
        this.contentFilteringMode = void 0;
    });
    _.w('cast.framework.messages.PlayStringId', {
        FREE_TRIAL_ABOUT_TO_EXPIRE: 'FREE_TRIAL_ABOUT_TO_EXPIRE',
        SUBSCRIPTION_ABOUT_TO_EXPIRE: 'SUBSCRIPTION_ABOUT_TO_EXPIRE',
        STREAM_HIJACKED: 'STREAM_HIJACKED',
        PLAYING_ALTERNATE_MIX: 'PLAYING_ALTERNATE_MIX',
    });
    _.r(Kr, N);
    _.w('cast.framework.messages.SetCredentialsRequestData', Kr);
    _.r(Lr, N);
    _.w('cast.framework.messages.LoadByEntityRequestData', Lr);
    _.r(Mr, N);
    _.w('cast.framework.messages.CustomCommandRequestData', Mr);
    _.r(Nr, N);
    _.w('cast.framework.messages.RefreshCredentialsRequestData', Nr);
    _.r(Or, N);
    _.w('cast.framework.messages.PlayStringRequestData', Or);
    _.r(Pr, N);
    _.w('cast.framework.messages.ExecuteActionScriptRequestData', Pr);
    _.w('cast.framework.messages.DisplayItem', function (a, b) {
        this.title = a;
        this.entity = b;
    });
    _.w('cast.framework.messages.DisplayItemList', function (a, b) {
        this.listTitle = a || '';
        this.displayItems = b;
    });
    _.w('cast.framework.messages.DisplayContext', function (a) {
        this.displayItemLists = a;
    });
    _.w('cast.framework.messages.Context', function (a) {
        this.opaqueContext = '';
        this.displayContext = a;
    });
    _.r(Qr, N);
    _.w('cast.framework.messages.DisplayContextRequestData', Qr);
    _.r(Rr, N);
    _.w('cast.framework.messages.ScreenNavigationRequestData', Rr);
    _.w('cast.framework.messages.ScriptAction', function (a, b) {
        this.app_id = a;
        this.action = b;
        this.custom_data = void 0;
    });
    _.w('cast.framework.messages.UserAction', {
        LIKE: 'LIKE',
        DISLIKE: 'DISLIKE',
        FOLLOW: 'FOLLOW',
        UNFOLLOW: 'UNFOLLOW',
        FLAG: 'FLAG',
        SKIP_AD: 'SKIP_AD',
        LYRICS: 'LYRICS',
    });
    _.w('cast.framework.messages.UserActionContext', {
        UNKNOWN_CONTEXT: 'UNKNOWN_CONTEXT',
        TRACK: 'TRACK',
        ALBUM: 'ALBUM',
        ARTIST: 'ARTIST',
        PLAYLIST: 'PLAYLIST',
        EPISODE: 'EPISODE',
        SERIES: 'SERIES',
        MOVIE: 'MOVIE',
        CHANNEL: 'CHANNEL',
        TEAM: 'TEAM',
        PLAYER: 'PLAYER',
        COACH: 'COACH',
    });
    _.w('cast.framework.messages.NavigationType', {
        SCROLL_LEFT: 'SCROLL_LEFT',
        SCROLL_RIGHT: 'SCROLL_RIGHT',
    });
    _.r(Sr, N);
    _.w('cast.framework.messages.UserActionRequestData', Sr);
    _.r(Tr, N);
    _.w('cast.framework.messages.DisplayStatusRequestData', Tr);
    _.r(Ur, N);
    _.w('cast.framework.messages.ShowRemoteControlOverlayRequestData', Ur);
    _.r(Vr, N);
    _.w('cast.framework.messages.FocusStateRequestData', Vr);
    _.w('cast.framework.messages.FocusState', {
        IN_FOCUS: 'IN_FOCUS',
        NOT_IN_FOCUS: 'NOT_IN_FOCUS',
    });
    _.w('cast.framework.messages.QueueItem', function (a) {
        this.itemId = a;
        this.customData = this.activeTrackIds = this.preloadTime = this.playbackDuration = this.startTime = this.autoplay = this.media = void 0;
    });
    cast.framework.va = {};
    _.w('cast.framework.system.Event', Wr);
    _.w('cast.framework.system.MessageType', {
        STRING: 'STRING',
        JSON: 'JSON',
    });
    _.w('cast.framework.system.LaunchedFrom', {
        UNKNOWN: 'UNKNOWN',
        DIAL: 'DIAL',
        CAST: 'CAST',
        CLOUD: 'CLOUD',
    });
    _.w('cast.framework.system.ApplicationData', function () {
        this.iconUrl = this.name = this.id = '';
        this.sessionId = 0;
        this.namespaces = [];
        this.launchingSenderId = '';
        this.launchedFrom = 'UNKNOWN';
    });
    _.w('cast.framework.system.PlaybackType', {
        UNKNOWN: 0,
        SINGLE_DEVICE: 1,
        STATIC_GROUP: 2,
        DYNAMIC_GROUP: 3,
        REMOTE: 4,
        BLUETOOTH: 5,
    });
    _.w('cast.framework.system.PlaybackDeviceStatus', function () {
        this.playbackType = 0;
        this.deviceName = '';
    });
    _.w('cast.framework.system.SystemVolumeData', Xr);
    _.w('cast.framework.system.Sender', function () {
        this.userAgent = this.id = '';
        this.largeMessageSupported = void 0;
    });
    _.w('cast.framework.system.VisibilityState', {
        VISIBLE: 'visible',
        NOT_VISIBLE: 'notvisible',
        UNKNOWN: 'unknown',
    });
    _.w('cast.framework.system.StandbyState', {
        STANDBY: 'standby',
        NOT_STANDBY: 'notstandby',
        UNKNOWN: 'unknown',
    });
    _.w('cast.framework.system.MediaControlsState', {
        HIDE: 0,
        SHOW: 1,
    });
    _.w('cast.framework.system.SystemState', {
        NOT_STARTED: 'notstarted',
        STARTING_IN_BACKGROUND: 'startinginbackground',
        STARTING: 'starting',
        READY: 'ready',
        STOPPING_IN_BACKGROUND: 'stoppinginbackground',
        STOPPING: 'stopping',
    });
    _.w('cast.framework.system.DeviceCapabilities', {
        AUDIO_ASSISTANT: 'audio_assistant',
        BLUETOOTH_SUPPORTED: 'bluetooth_supported',
        DISPLAY_SUPPORTED: 'display_supported',
        HI_RES_AUDIO_SUPPORTED: 'hi_res_audio_supported',
        IS_DV_SUPPORTED: 'is_dv_supported',
        IS_HDR_SUPPORTED: 'is_hdr_supported',
        TOUCH_INPUT_SUPPORTED: 'touch_input_supported',
        IS_GROUP: 'is_group',
        REMOTE_CONTROL_OVERLAY_SUPPORTED: 'remote_control_overlay_supported',
        SLEEP_TIMER_OVERLAY_SUPPORTED: 'sleep_timer_overlay_supported',
        APP_FOREGROUND: 'app_foreground',
        IS_DEVICE_REGISTERED: 'is_device_registered',
        IS_CBCS_SUPPORTED: 'is_cbcs_supported',
        IS_DOLBY_ATMOS_SUPPORTED: 'is_dolby_atmos_supported',
    });
    _.w('cast.framework.system.EventType', {
        READY: 'ready',
        SHUTDOWN: 'shutdown',
        SENDER_CONNECTED: 'senderconnected',
        SENDER_DISCONNECTED: 'senderdisconnected',
        ERROR: 'error',
        SYSTEM_VOLUME_CHANGED: 'systemvolumechanged',
        VISIBILITY_CHANGED: 'visibilitychanged',
        STANDBY_CHANGED: 'standbychanged',
        MAX_VIDEO_RESOLUTION_CHANGED: 'maxvideoresolutionchanged',
        SHOW_MEDIA_CONTROLS: 'showmediacontrols',
        FEEDBACK_STARTED: 'feedbackstarted',
        GROUP_CAPABILITIES: 'groupcapabilities',
        ALLOW_GROUP_CHANGE: 'allowgroupchange',
        PLAYBACK_DEVICE_STATUS: 'playbackdevicestatus',
    });
    _.w('cast.framework.system.DisconnectReason', {
        REQUESTED_BY_SENDER: 'requested_by_sender',
        ERROR: 'error',
        UNKNOWN: 'unknown',
    });
    _.r(Yr, Wr);
    _.w('cast.framework.system.SenderDisconnectedEvent', Yr);
    _.r(Zr, Wr);
    _.w('cast.framework.system.SenderConnectedEvent', Zr);
    _.r($r, Wr);
    _.w('cast.framework.system.VisibilityChangedEvent', $r);
    _.r(as, Wr);
    _.w('cast.framework.system.StandbyChangedEvent', as);
    _.r(bs, Wr);
    _.w('cast.framework.system.SystemVolumeChangedEvent', bs);
    _.r(cs, Wr);
    _.w('cast.framework.system.ReadyEvent', cs);
    _.r(ds, Wr);
    _.w('cast.framework.system.ShutdownEvent', ds);
    _.r(es, Wr);
    _.w('cast.framework.system.FeedbackStartedEvent', es);
    _.r(fs, Wr);
    _.w('cast.framework.system.PlaybackDeviceStatusEvent', fs);
    _.r(gs, Wr);
    _.w('cast.framework.system.ShowMediaControlsEvent', gs);
    _.r(hs, Wr);
    _.w('cast.framework.system.MaxVideoResolutionChangedEvent', hs);
    _.r(is, Wr);
    _.w('cast.framework.system.GroupCapabilitiesChangeEvent', is);
    _.r(js, Wr);
    _.w('cast.framework.system.AllowGroupChangeEvent', js);
    cast.ql = 1657749549;
    cast.framework.VERSION = '3.0.0105';
    _.w('cast.framework.VERSION', cast.framework.VERSION);
    console.log(`CAST SDK CAF Version: ${cast.framework.VERSION}`);
    _.yw = {
        HLS: 'application/x-mpegurl',
        dw: 'application/vnd.apple.mpegurl',
        ew: 'audio/mpegurl',
        gw: 'audio/x-mpegurl',
        Pv: 'application/dash+xml',
        Nw: 'application/vnd.ms-sstr+xml',
    };
    cast.framework.Y = {
        Go: 'Skip from your device',
        mo: 'Casting',
        Lj(a) {
            return `Playing in ${a} sec(s)`;
        },
    };
    cast.framework.N = {};
    cast.framework.N.Rr = function (a) {
        return a;
    };
    cast.framework.N.bx = function (a) {
        return a;
    };
    cast.framework.N.Sr = function (a) {
        return a;
    };
    cast.framework.N.ex = function (a) {
        return a;
    };
    cast.framework.N.Tr = function (a) {
        return a;
    };
    cast.framework.N.Ur = function (a) {
        return a;
    };
    cast.framework.N.Vr = function (a) {
        return a;
    };
    cast.framework.N.Wr = function (a) {
        return a;
    };
    cast.framework.N.Xr = function (a) {
        return a;
    };
    cast.framework.N.Yr = function (a) {
        return a;
    };
    cast.framework.N.Zr = function (a) {
        return a;
    };
    cast.framework.N.ds = function (a) {
        return a;
    };
    cast.framework.N.Fj = function (a) {
        return a;
    };
    cast.framework.N.es = function (a) {
        return a;
    };
    cast.framework.N.Gj = function (a) {
        return a;
    };
    cast.framework.N.gs = function (a) {
        return a;
    };
    cast.framework.N.hs = function (a) {
        return a;
    };
    cast.framework.N.js = function (a) {
        return a;
    };
    cast.framework.N.ks = function (a) {
        return a;
    };
    cast.framework.N.Hj = function (a) {
        return a;
    };
    cast.framework.N.gx = function (a) {
        return a;
    };
    cast.framework.N.hx = function (a) {
        return a;
    };
    cast.framework.N.Ij = function (a) {
        return a;
    };
    cast.framework.N.ls = function (a) {
        return a;
    };
    cast.framework.N.Qu = function (a) {
        return a;
    };
    cast.framework.N.Ru = function (a) {
        return a;
    };
    cast.framework.N.Su = function (a) {
        return a;
    };
    cast.framework.N.Tu = function (a) {
        return a;
    };
    cast.framework.N.Uu = function (a) {
        return a;
    };
    cast.framework.N.Vu = function (a) {
        return a;
    };
    cast.framework.N.Wu = function (a) {
        return a;
    };
    cast.framework.N.Xu = function (a) {
        return a;
    };
    cast.framework.N.Yu = function (a) {
        return a;
    };
    cast.framework.N.Lk = function (a) {
        return a;
    };
    cast.framework.N.Zu = function (a) {
        return a;
    };
    cast.framework.N.Mk = function (a) {
        return a;
    };
    cast.framework.N.xc = function (a) {
        return a;
    };
    cast.framework.N.av = function (a) {
        return a;
    };
    cast.framework.N.Cx = function (a) {
        return a;
    };
    cast.framework.N.bv = function (a) {
        return a;
    };
    cast.framework.N.cv = function (a) {
        return a;
    };
    cast.framework.N.Dx = function (a) {
        return a;
    };
    cast.framework.N.dv = function (a) {
        return a;
    };
    cast.framework.N.ev = function (a) {
        return a;
    };
    cast.framework.N.Nk = function (a) {
        return a;
    };
    cast.framework.N.Ok = function (a) {
        return a;
    };
    cast.framework.N.Ex = function (a) {
        return a;
    };
    cast.framework.N.Pk = function (a) {
        return a;
    };
    cast.framework.N.yc = function (a) {
        return a;
    };
    cast.framework.media = {};
    cast.framework.media.Za = {};
    cast.framework.media.Za.Rj = ks;
    cast.framework.media.Za.getTrackById = function (a, b) {
        return b.find(function (c) {
            return c.trackId == a;
        }) || null;
    };
    cast.framework.media.Za.Xj = function (a, b) {
        return ks(a, b).length !== 0;
    };
    cast.framework.media.Za.Uk = function (a, b) {
        if (b.filter(function (c) {
            return a.includes(c.trackId);
        }).length !== a.length) throw Error('Invalid id.');
    };
    cast.framework.media.Za.vv = function (a) {
        if (a.find(function (b) {
            return b.type != 'TEXT';
        })) throw Error('Type is not matching.');
    };
    _.h = ns.prototype;
    _.h.reset = function () {
        this.j = null;
    };
    _.h.getTracks = function () {
        os(this);
        return this.j.ta().getTracks('AUDIO');
    };
    _.h.getTrackById = function (a) {
        os(this);
        if (a < 0) throw Error('Invalid track id.');
        return cast.framework.media.Za.getTrackById(a, this.getTracks());
    };
    _.h.Se = function (a) {
        if (!a) throw Error('Need language as input.');
        return cast.framework.media.Za.Rj(a, this.getTracks());
    };
    _.h.ts = function () {
        os(this);
        const a = this.j.ta().o;
        return a === null ? null : this.getTrackById(a);
    };
    _.h.qs = function () {
        os(this);
        return this.j.ta().o;
    };
    _.h.wu = function (a) {
        os(this);
        if (a === null) _.F(ms, 'No valid id, persist the current behavior.');
        else {
            cast.framework.media.Za.Uk([a], this.getTracks());
            let b = this.j.ta().A.sort();
            b = b.concat(a);
            Zt(this.j.ta(), b);
            this.l && Qk(this.l, cast.framework.N.yc(this.j.ta().getTracksInfo()), !1);
        }
    };
    _.h.Ef = function (a) {
        os(this);
        if (!cast.framework.media.Za.Xj(a, this.getTracks())) throw Error('No matching track.');
        bu(this.j.ta(), a);
        this.l && Qk(this.l, cast.framework.N.yc(this.j.ta().getTracksInfo()), !1);
    };
    _.h.getTracksInfo = function () {
        os(this);
        return this.j.ta().getTracksInfo();
    };
    _.w('cast.framework.AudioTracksManager', ns);
    ns.prototype.setActiveByLanguage = ns.prototype.Ef;
    ns.prototype.setActiveById = ns.prototype.wu;
    ns.prototype.getActiveId = ns.prototype.qs;
    ns.prototype.getActiveTrack = ns.prototype.ts;
    ns.prototype.getTracksByLanguage = ns.prototype.Se;
    ns.prototype.getTrackById = ns.prototype.getTrackById;
    ns.prototype.getTracks = ns.prototype.getTracks;
    var ms = _.B('cast.framework.AudioTracksManager');
    _.w('cast.framework.NetworkRequestInfo', function () {
        this.headers = this.url = null;
        this.withCredentials = !1;
        this.timeoutInterval = this.content = null;
    });
    _.w('cast.framework.NetworkResponseInfo', ps);
    _.w('cast.framework.TimedMetadata', function () { });
    _.w('cast.framework.HlsTimedMetadata', function () { });
    _.w('cast.framework.DashTimedMetadata', function () { });
    cast.framework.C = {};
    _.w('cast.framework.ui.UiConfig', function () { });
    _.w('cast.framework.CastReceiverOptions', qs);
    let YB = null;
    cast.framework.CastReceiverOptions.disableIdleTimeout = true;
    cast.framework.me = {
        set(a) {
            YB = a;
        },
        get() {
            return YB;
        },
    };
    var Fu = {
        NONE: 'none',
        CLEARKEY: 'clearkey',
        PLAYREADY: 'playready',
        WIDEVINE: 'widevine',
        AES_128: 'aes_128',
        AES_128_CKP: 'aes_128_ckp',
    };
    _.w('cast.framework.ContentProtection', Fu);
    _.w('cast.framework.PlaybackConfig', rs);
    _.w('cast.framework.events.EndedReason', {
        END_OF_STREAM: 'END_OF_STREAM',
        ERROR: 'ERROR',
        STOPPED: 'STOPPED',
        INTERRUPTED: 'INTERRUPTED',
        SKIPPED: 'SKIPPED',
        BREAK_SWITCH: 'BREAK_SWITCH',
    });
    var $w = {
        ALL: '*',
        ABORT: 'ABORT',
        CAN_PLAY: 'CAN_PLAY',
        CAN_PLAY_THROUGH: 'CAN_PLAY_THROUGH',
        DURATION_CHANGE: 'DURATION_CHANGE',
        EMPTIED: 'EMPTIED',
        ENDED: 'ENDED',
        LOADED_DATA: 'LOADED_DATA',
        LOADED_METADATA: 'LOADED_METADATA',
        LOAD_START: 'LOAD_START',
        PAUSE: 'PAUSE',
        PLAY: 'PLAY',
        PLAYING: 'PLAYING',
        PROGRESS: 'PROGRESS',
        RATE_CHANGE: 'RATE_CHANGE',
        SEEKED: 'SEEKED',
        SEEKING: 'SEEKING',
        STALLED: 'STALLED',
        TIME_UPDATE: 'TIME_UPDATE',
        SUSPEND: 'SUSPEND',
        WAITING: 'WAITING',
        BITRATE_CHANGED: 'BITRATE_CHANGED',
        BREAK_STARTED: 'BREAK_STARTED',
        BREAK_ENDED: 'BREAK_ENDED',
        BREAK_CLIP_LOADING: 'BREAK_CLIP_LOADING',
        BREAK_CLIP_STARTED: 'BREAK_CLIP_STARTED',
        BREAK_CLIP_ENDED: 'BREAK_CLIP_ENDED',
        BUFFERING: 'BUFFERING',
        CACHE_LOADED: 'CACHE_LOADED',
        CACHE_HIT: 'CACHE_HIT',
        CACHE_INSERTED: 'CACHE_INSERTED',
        CLIP_STARTED: 'CLIP_STARTED',
        CLIP_ENDED: 'CLIP_ENDED',
        EMSG: 'EMSG',
        ERROR: 'ERROR',
        ID3: 'ID3',
        MEDIA_STATUS: 'MEDIA_STATUS',
        CUSTOM_STATE: 'CUSTOM_STATE',
        MEDIA_INFORMATION_CHANGED: 'MEDIA_INFORMATION_CHANGED',
        MEDIA_FINISHED: 'MEDIA_FINISHED',
        PLAYER_PRELOADING: 'PLAYER_PRELOADING',
        PLAYER_PRELOADING_CANCELLED: 'PLAYER_PRELOADING_CANCELLED',
        PLAYER_LOAD_COMPLETE: 'PLAYER_LOAD_COMPLETE',
        PLAYER_LOADING: 'PLAYER_LOADING',
        SEGMENT_DOWNLOADED: 'SEGMENT_DOWNLOADED',
        REQUEST_SEEK: 'REQUEST_SEEK',
        REQUEST_LOAD: 'REQUEST_LOAD',
        REQUEST_STOP: 'REQUEST_STOP',
        REQUEST_PAUSE: 'REQUEST_PAUSE',
        REQUEST_PRECACHE: 'REQUEST_PRECACHE',
        REQUEST_PLAY: 'REQUEST_PLAY',
        REQUEST_SKIP_AD: 'REQUEST_SKIP_AD',
        REQUEST_PLAY_AGAIN: 'REQUEST_PLAY_AGAIN',
        REQUEST_PLAYBACK_RATE_CHANGE: 'REQUEST_PLAYBACK_RATE_CHANGE',
        REQUEST_VOLUME_CHANGE: 'REQUEST_VOLUME_CHANGE',
        REQUEST_EDIT_TRACKS_INFO: 'REQUEST_EDIT_TRACKS_INFO',
        REQUEST_EDIT_AUDIO_TRACKS: 'REQUEST_EDIT_AUDIO_TRACKS',
        REQUEST_SET_CREDENTIALS: 'REQUEST_SET_CREDENTIALS',
        REQUEST_LOAD_BY_ENTITY: 'REQUEST_LOAD_BY_ENTITY',
        REQUEST_USER_ACTION: 'REQUEST_USER_ACTION',
        REQUEST_DISPLAY_STATUS: 'REQUEST_DISPLAY_STATUS',
        REQUEST_CUSTOM_COMMAND: 'REQUEST_CUSTOM_COMMAND',
        REQUEST_FOCUS_STATE: 'REQUEST_FOCUS_STATE',
        REQUEST_QUEUE_LOAD: 'REQUEST_QUEUE_LOAD',
        REQUEST_QUEUE_INSERT: 'REQUEST_QUEUE_INSERT',
        REQUEST_QUEUE_UPDATE: 'REQUEST_QUEUE_UPDATE',
        REQUEST_QUEUE_REMOVE: 'REQUEST_QUEUE_REMOVE',
        REQUEST_QUEUE_REORDER: 'REQUEST_QUEUE_REORDER',
        REQUEST_QUEUE_GET_ITEM_RANGE: 'REQUEST_QUEUE_GET_ITEM_RANGE',
        REQUEST_QUEUE_GET_ITEMS: 'REQUEST_QUEUE_GET_ITEMS',
        REQUEST_QUEUE_GET_ITEM_IDS: 'REQUEST_QUEUE_GET_ITEM_IDS',
        INBAND_TRACK_ADDED: 'INBAND_TRACK_ADDED',
        TRACKS_CHANGED: 'TRACKS_CHANGED',
        LIVE_IS_MOVING_WINDOW_CHANGED: 'LIVE_IS_MOVING_WINDOW_CHANGED',
        LIVE_ENDED: 'LIVE_ENDED',
        REQUEST_STORE_SESSION: 'REQUEST_STORE_SESSION',
        REQUEST_RESUME_SESSION: 'REQUEST_RESUME_SESSION',
        TIMED_METADATA_CHANGED: 'TIMED_METADATA_CHANGED',
        TIMED_METADATA_ENTER: 'TIMED_METADATA_ENTER',
        TIMED_METADATA_EXIT: 'TIMED_METADATA_EXIT',
    };
    _.w('cast.framework.events.EventType', $w);
    cast.framework.common = {};
    cast.framework.common.analytics = {};
    const R = {};
    const ZB = (R['*'] = 1, R.ABORT = 2, R.CAN_PLAY = 3, R.CAN_PLAY_THROUGH = 4, R.DURATION_CHANGE = 5, R.EMPTIED = 6, R.ENDED = 7, R.LOADED_DATA = 8, R.LOADED_METADATA = 9, R.LOAD_START = 10, R.PAUSE = 11, R.PLAY = 12, R.PLAYING = 13, R.PROGRESS = 14, R.RATE_CHANGE = 15, R.SEEKED = 16, R.SEEKING = 17, R.STALLED = 18, R.TIME_UPDATE = 19, R.SUSPEND = 20, R.WAITING = 21, R.BITRATE_CHANGED = 22, R.BREAK_STARTED = 23, R.BREAK_ENDED = 24, R.BREAK_CLIP_LOADING = 25, R.BREAK_CLIP_STARTED = 26, R.BREAK_CLIP_ENDED = 27, R.BUFFERING = 28, R.CACHE_LOADED = 29, R.CACHE_HIT = 30, R.CACHE_INSERTED = 31,
    R.CLIP_STARTED = 32, R.CLIP_ENDED = 33, R.EMSG = 34, R.ERROR = 35, R.ID3 = 36, R.MEDIA_STATUS = 37, R.MEDIA_FINISHED = 38, R.PLAYER_PRELOADING = 39, R.PLAYER_PRELOADING_CANCELLED = 40, R.PLAYER_LOAD_COMPLETE = 41, R.PLAYER_LOADING = 42, R.SEGMENT_DOWNLOADED = 43, R.REQUEST_SEEK = 44, R.REQUEST_LOAD = 45, R.REQUEST_STOP = 46, R.REQUEST_PAUSE = 47, R.REQUEST_PLAY = 48, R.REQUEST_SKIP_AD = 49, R.REQUEST_PLAY_AGAIN = 50, R.REQUEST_PLAYBACK_RATE_CHANGE = 51, R.REQUEST_VOLUME_CHANGE = 52, R.REQUEST_EDIT_TRACKS_INFO = 53, R.REQUEST_EDIT_AUDIO_TRACKS = 54, R.REQUEST_SET_CREDENTIALS = 55, R.REQUEST_LOAD_BY_ENTITY = 56, R.REQUEST_USER_ACTION = 57, R.REQUEST_DISPLAY_STATUS = 58, R.REQUEST_CUSTOM_COMMAND = 59, R.REQUEST_FOCUS_STATE = 60, R.REQUEST_QUEUE_LOAD = 61, R.REQUEST_QUEUE_INSERT = 62, R.REQUEST_QUEUE_UPDATE = 63, R.REQUEST_QUEUE_REMOVE = 64, R.REQUEST_QUEUE_REORDER = 65, R.REQUEST_QUEUE_GET_ITEM_RANGE = 66, R.REQUEST_QUEUE_GET_ITEMS = 67, R.REQUEST_QUEUE_GET_ITEM_IDS = 68, R.INBAND_TRACK_ADDED = 69, R.REQUEST_PRECACHE = 70, R.LIVE_IS_MOVING_WINDOW_CHANGED = 71, R.LIVE_ENDED = 72, R.MEDIA_INFORMATION_CHANGED = 73, R.REQUEST_STORE_SESSION = 74, R.REQUEST_RESUME_SESSION = 75, R.CUSTOM_STATE = 76, R.TIMED_METADATA_CHANGED = 77, R.TIMED_METADATA_ENTER = 78, R.TIMED_METADATA_EXIT = 79, R.TRACKS_CHANGED = 80, R);
    const S = {};
    const $B = (S.MEDIA_STATUS = 1, S.CLOUD_STATUS = 2, S.QUEUE_CHANGE = 3, S.QUEUE_ITEMS = 4, S.QUEUE_ITEM_IDS = 5, S.GET_STATUS = 6, S.LOAD = 7, S.PAUSE = 8, S.STOP = 9, S.PLAY = 10, S.SKIP_AD = 11, S.PLAY_AGAIN = 12, S.SEEK = 13, S.SET_PLAYBACK_RATE = 14, S.SET_VOLUME = 15, S.EDIT_TRACKS_INFO = 16, S.EDIT_AUDIO_TRACKS = 17, S.PRECACHE = 18, S.PRELOAD = 19, S.QUEUE_LOAD = 20, S.QUEUE_INSERT = 21, S.QUEUE_UPDATE = 22,
    S.QUEUE_REMOVE = 23, S.QUEUE_REORDER = 24, S.QUEUE_NEXT = 25, S.QUEUE_PREV = 26, S.QUEUE_GET_ITEM_RANGE = 27, S.QUEUE_GET_ITEMS = 28, S.QUEUE_GET_ITEM_IDS = 29, S.QUEUE_SHUFFLE = 30, S.SET_CREDENTIALS = 31, S.LOAD_BY_ENTITY = 32, S.USER_ACTION = 33, S.DISPLAY_STATUS = 34, S.FOCUS_STATE = 35, S.CUSTOM_COMMAND = 36, S.STORE_SESSION = 37, S.RESUME_SESSION = 38, S.SESSION_STATE = 39, S);
    const aC = {};
    const bC = (aC.INVALID_COMMAND = 0, aC.INVALID_PARAMS = 1, aC.INVALID_MEDIA_SESSION_ID = 2, aC.SKIP_LIMIT_REACHED = 3, aC.NOT_SUPPORTED = 4, aC.LANGUAGE_NOT_SUPPORTED = 5, aC.END_OF_QUEUE = 6, aC.DUPLICATE_REQUEST_ID = 7, aC.APP_ERROR = 8, aC.AUTHENTICATION_EXPIRED = 9, aC.PREMIUM_ACCOUNT_REQUIRED = 10, aC.CONCURRENT_STREAM_LIMIT = 11, aC.PARENTAL_CONTROL_RESTRICTED = 12, aC.NOT_AVAILABLE_IN_REGION = 13, aC.CONTENT_ALREADY_PLAYING = 14, aC.INVALID_REQUEST = 15, aC.GENERIC_LOAD_ERROR = 16, aC.VIDEO_DEVICE_REQUIRED = 17, aC.CONTENT_FILTERED = 18, aC);
    const cC = {};
    const dC = (cC.END_OF_STREAM = 0, cC.ERROR = 1, cC.STOPPED = 2, cC.INTERRUPTED = 3, cC.SKIPPED = 4, cC.BREAK_SWITCH = 5, cC);
    cast.framework.common.analytics.pb = {
        si: 1,
        jg: 2,
        cj: 3,
        ej: 4,
        hi: 5,
    };
    cast.framework.common.analytics.Pj = function (a) {
        return ZB[a];
    };
    cast.framework.common.analytics.Cs = function (a) {
        return $B[a];
    };
    cast.framework.common.analytics.Ns = function (a) {
        return bC[void 0 === a ? 'GENERIC_LOAD_ERROR' : a];
    };
    cast.framework.common.analytics.vt = function () {
        K('Cast.CAF.Version', Number(cast.framework.VERSION.split('.')[2]));
    };
    cast.framework.common.analytics.ck = function (a, b) {
        K('Cast.CAF.PlayerStarted', a);
        b && b.protectionSystem && eC[b.protectionSystem] && K('Cast.CAF.PlayerProtectionSystem', eC[b.protectionSystem]);
    };
    const fC = {};
    var eC = (fC.none = 1, fC.clearkey = 2, fC.playready = 3, fC.widevine = 4, fC.aes_128 = 5, fC.aes_128_ckp = 6, fC);
    const gC = {};
    const hC = (gC['port-for-web-server'] = 1, gC['log-level-cast-receiver'] = 2, gC['max-video-resolution-vpx'] = 3, gC['device-model'] = 4, gC['cast-receiver-version'] = 5, gC['system-version'] = 6, gC['volume-controllable'] = 7, gC['device-capabilities'] = 8, gC['is-remote-control-mode-enabled'] = 9, gC['dpad-controls-overlay-disabled'] = 10, gC['receiver-flags'] = 11, gC['enabled-for-dev'] = 12, gC['enable-hls-sample-aes'] = 13, gC);
    cast.framework.common.analytics.yt = function (a) {
        K('Cast.CAF.PlatformValueKey', hC[a] || 0);
    };
    cast.framework.common.analytics.wt = function (a) {
        K('Cast.CAF.EndedReason', dC[a]);
    };
    cast.framework.common.analytics.dk = function (a) {
        K('Cast.Receiver.SecondaryImage.setImage', a);
    };
    cast.framework.common.analytics.K = {
        VERSION: 'Cast.CAF.Version',
        wl: 'Cast.CAF.CloseReason',
        km: 'Cast.CAF.IsDogfood',
        up: 'Cast.CAF.Queue',
        xw: 'Cast.CAF.PlayerProtectionSystem',
        Cp: 'Cast.CAF.SetLastSenderDisconnectedHandler',
        ep: 'Cast.CAF.PlaybackConfigOption',
        eo: 'Cast.CAF.MplHostOption',
        rq: 'Cast.CAF.StartOption',
        el: 'Cast.CAF.AppVersionCode',
        ww: 'Cast.CAF.PlatformValueKey',
        REQUEST_PRECACHE: 'Cast.CAF.RequestPrecache',
        SHUFFLE: 'Cast.CAF.Shuffle',
        ERROR: 'Cast.CAF.Error',
        Rl: 'Cast.CAF.EventListenerAdded',
        Sl: 'Cast.CAF.EventListenerRemoved',
        wn: 'Cast.CAF.MessageInterceptorSet',
        Mi: 'Cast.CAF.MessageInterceptorDuration',
        Kw: 'Cast.Receiver.SecondaryImage.setImage',
        jq: 'Cast.Receiver.SlideshowUsed',
        Xl: 'Cast.CAF.GetCafSignals',
        QUEUE_ITEMS: 'Cast.CAF.QueueItems',
        cn: 'Cast.CAF.LoadError',
        No: 'Cast.CAF.NumSubtitles',
        tq: 'Cast.CAF.SubtitleType',
        mn: 'Cast.CAF.MediaMimeType',
        nn: 'Cast.CAF.MediaStreamType',
        ln: 'Cast.CAF.MediaCategory',
        kg: 'Cast.CAF.StreamingProtocol',
        Kq: 'Cast.CAF.UnsupportedMediaMessage',
        zp: 'Cast.CAF.SectionMetadataMissing',
        Ap: 'Cast.CAF.SectionMetadataUpdated',
        yw: 'Cast.CAF.PlayerStarted',
        BUFFERING: 'Cast.CAF.Buffering',
        Uv: 'Cast.CAF.EndedReason',
        Pq: 'Cast.CAF.VideoToAdLatency',
        bl: 'Cast.CAF.AdToVideoLatency',
        Zk: 'Cast.CAF.AdMimeType',
        al: 'Cast.CAF.AdSkippable',
        ke: 'Cast.CAF.AdTimelineType',
        Mq: 'Cast.CAF.VastLibRequested',
        Jl: 'Cast.CAF.DynamicBreakAdded',
        Kl: 'Cast.CAF.DynamicBreakRemoved',
        hp: 'Cast.CAF.PlayerProvided',
        Yi: 'Cast.CAF.PlayerCreationFailed',
        ip: 'Cast.CAF.PlayerVersion',
        lp: 'Cast.CAF.3PPBreakInfoChanged',
        mp: 'Cast.CAF.3PPBreakStateChanged',
        kp: 'Cast.CAF.3PPBreaks',
        ii: 'Cast.CAF.CustomShakaVersion',
        Np: 'Cast.CAF.ShakaForHlsEnabled',
        Ip: 'Cast.Shaka.Bandwidth',
        cq: 'Cast.Shaka.ShakaVersion',
        eq: 'Cast.Shaka.ShakaVersionNormalized',
        bj: 'Cast.Shaka.UITextDisplayer',
        Mp: 'Cast.Shaka.Error',
        bq: 'Cast.Shaka.PlayTimeBeforeAutoPause',
        Gp: 'Cast.Shaka.AutoPauseTime',
        Hp: 'Cast.Shaka.AutoplayStartupLatency',
        Zp: 'Cast.Shaka.PlayLatency',
        Ep: 'Cast.Shaka.ActiveCodec',
        Fp: 'Cast.Shaka.ActiveMimeType',
        Rp: 'Cast.Shaka.Load',
        Qp: 'Cast.Shaka.Live',
        Op: 'Cast.Shaka.IsMultiPeriod',
        Sp: 'Cast.Shaka.MediaDuration',
        Up: 'Cast.Shaka.Pause',
        Yp: 'Cast.Shaka.Playing',
        Lp: 'Cast.Shaka.Ended',
        Tp: 'Cast.Shaka.MediaGapJumped',
        Wp: 'Cast.Shaka.PlaybackStallDetected',
        Xp: 'Cast.Shaka.PlaybackStallPrevented',
        Pp: 'Cast.Shaka.LicenseTime',
        aq: 'Cast.Shaka.PlayTime',
        Vp: 'Cast.Shaka.PausedTime',
        Jp: 'Cast.Shaka.BufferingTime',
        Kp: 'Cast.Shaka.DrmTime',
    };
    cast.framework.common.analytics.aj = {
        TOP_RIGHT_VIDEO_OVERLAY: 1,
        zq: 2,
    };
    cast.framework.common.analytics.le = {
        Nl: 1,
        Ml: 2,
        sq: 3,
        np: 4,
    };
    _.h = us.prototype;
    _.h.Ju = function (a) {
        this.o = a;
        this.j && (this.j.V = this.o);
    };
    _.h.Ng = function () {
        let a = ok(this.j);
        return a && (a = a.B) ? cast.framework.N.Sr(a.containerMetadata || null) : null;
    };
    _.h.Bu = function (a) {
        const b = ok(this.j);
        if (b) {
            let c = b.B;
            if (!c) {
                const d = c = new Me();
                d.repeatMode = b.A;
                b.B = d;
            }
            c.containerMetadata = cast.framework.N.Vu(a) || void 0;
            ys(this);
            xs(this, !1);
        } else _.D(ts, 'Cannot set container metadata if no queue available.');
    };
    _.h.Gc = function () {
        let a = [];
        const b = ok(this.j);
        b && (a = b.Gc(!0));
        return cast.framework.N.ds(a);
    };
    _.h.jc = function () {
        let a = null;
        const b = ok(this.j);
        b && (a = b.jc());
        return cast.framework.N.Zr(a);
    };
    _.h.Sd = function () {
        let a = -1;
        const b = ok(this.j);
        b && (a = b.Sd());
        return a;
    };
    _.h.ih = function (a, b) {
        a = new hr(a);
        a.insertBefore = b;
        this.l.Hb(a);
    };
    _.h.Kh = function (a) {
        this.l.Hb(new jr(a));
    };
    _.h.Zh = function (a) {
        const b = new ir();
        b.items = a;
        this.l.Hb(b);
    };
    _.w('cast.framework.QueueManager', us);
    us.prototype.updateItems = us.prototype.Zh;
    us.prototype.removeItems = us.prototype.Kh;
    us.prototype.insertItems = us.prototype.ih;
    us.prototype.getCurrentItemIndex = us.prototype.Sd;
    us.prototype.getCurrentItem = us.prototype.jc;
    us.prototype.getItems = us.prototype.Gc;
    us.prototype.setContainerMetadata = us.prototype.Bu;
    us.prototype.getContainerMetadata = us.prototype.Ng;
    us.prototype.setQueueStatusLimit = us.prototype.Ju;
    var ts = _.B('cast.framework.PlayerManager');
    _.w('cast.framework.Stats', function () { });
    _.h = Bs.prototype;
    _.h.reset = function () {
        this.j = null;
    };
    _.h.getTracks = function () {
        Cs(this);
        return this.j.ta().getTracks('TEXT');
    };
    _.h.getTrackById = function (a) {
        Cs(this);
        if (a < 0) throw Error('Invalid input.');
        return cast.framework.media.Za.getTrackById(a, this.getTracks());
    };
    _.h.Se = function (a) {
        if (!a) throw Error('Need language as input.');
        return cast.framework.media.Za.Rj(a, this.getTracks());
    };
    _.h.Nj = function () {
        let a = this.getTracks();
        const b = this.j.ta().A.sort();
        const c = [];
        a = _.q(a);
        for (let d = a.next(); !d.done; d = a.next()) d = d.value, b.includes(d.trackId) && c.push(d);
        return c;
    };
    _.h.rs = function () {
        Cs(this);
        return this.j.ta().A.sort();
    };
    _.h.gd = function () {
        Cs(this);
        return this.j.ta().gd('TEXT');
    };
    _.h.ar = function (a) {
        Cs(this);
        cast.framework.media.Za.vv(a);
        Wt(this.j.ta(), a);
        this.l && Qk(this.l, cast.framework.N.yc(this.j.ta().getTracksInfo()));
    };
    _.h.xu = function (a) {
        Cs(this);
        const b = this.j.ta();
        if (a === null || a.length === 0) {
            if (b.A.sort().length > 0) Zt(b, []);
            else return;
        } else cast.framework.media.Za.Uk(a, this.getTracks()), Zt(b, a);
        this.l && Qk(this.l, cast.framework.N.yc(b.getTracksInfo()), !1);
    };
    _.h.Ef = function (a) {
        Cs(this);
        if (!cast.framework.media.Za.Xj(a, this.getTracks())) throw Error('No matching track.');
        $t(this.j.ta(), a);
        this.l && Qk(this.l, cast.framework.N.yc(this.j.ta().getTracksInfo()), !1);
    };
    _.h.xb = function (a) {
        Cs(this);
        this.j.ta().xb(a);
        this.l && Qk(this.l, cast.framework.N.yc(this.j.ta().getTracksInfo()));
    };
    _.h.Hc = function () {
        Cs(this);
        return this.j.ta().Hc();
    };
    _.h.getTracksInfo = function () {
        Cs(this);
        return this.j.ta().getTracksInfo();
    };
    _.h.lv = function () {
        Cs(this);
    };
    _.w('cast.framework.TextTracksManager', Bs);
    Bs.prototype.useForcedCaptions = Bs.prototype.lv;
    Bs.prototype.getTextTracksStyle = Bs.prototype.Hc;
    Bs.prototype.setTextTrackStyle = Bs.prototype.xb;
    Bs.prototype.setActiveByLanguage = Bs.prototype.Ef;
    Bs.prototype.setActiveByIds = Bs.prototype.xu;
    Bs.prototype.addTracks = Bs.prototype.ar;
    Bs.prototype.createTrack = Bs.prototype.gd;
    Bs.prototype.getActiveIds = Bs.prototype.rs;
    Bs.prototype.getActiveTracks = Bs.prototype.Nj;
    Bs.prototype.getTracksByLanguage = Bs.prototype.Se;
    Bs.prototype.getTrackById = Bs.prototype.getTrackById;
    Bs.prototype.getTracks = Bs.prototype.getTracks;
    var As = _.B('cast.framework.TextTracksManager');
    Ds.prototype.Tc = function (a, b) {
        this.l[a] = b || _.Xa;
    };
    Ds.prototype.B = function (a) {
        const b = a.type;
        _.G(iC, `onEvent for ${b}`);
        const c = this.l[b];
        const d = this.o[b];
        const e = this.A[b];
        d && d(a);
        c && (a = c(a));
        return Promise.resolve(a).then(function (f) {
            return f && f.type == b && e ? e(f) : f;
        });
    };
    var iC = _.B('cast.framework.common.EventHandler');
    cast.framework.common.Eh = {};
    var Hs = _.B('cast.framework.common.playerManagerUtils');
    const jC = {};
    const kC = (jC.pause = 1, jC.skipad = 512, jC.seek = 2, jC.setplaybackrate = 8192, jC.setvolume = 4, jC.edittracksinfo = 4096, jC.storesession = 262144, jC.resumesession = 262144, jC);
    cast.framework.common.Eh.Tk = function (a, b) {
        let c = a.type;
        if (c === 'queueupdate') {
            if (a.data) {
                c = a.data;
                if ((b & 64) === 0 && c.jump > 0 || (b & 128) === 0 && c.jump < 0) return Is(`QUEUE_UPDATE with Jump = ${c.jump}`), !1;
                if ((b & 256) === 0 && c.shuffle) return Is('QUEUE_UPDATE with Shuffle'), !1;
                if ((b & 1024) === 0 && c.repeatMode === 'REPEAT_ALL') return Is('QUEUE_UPDATE with Repeat_All'), !1;
                if ((b & 2048) === 0 && c.repeatMode === 'REPEAT_SINGLE') return Is('QUEUE_UPDATE with Repeat_One'), !1;
                if ((b & 3072) === 0 && (void 0 !== c.repeatMode || c.repeatMode === 'REPEAT_OFF')) {
                    return Is('QUEUE_UPDATE with Repeat'),
                    !1;
                }
            }
        } else if ((a = kC[c]) && !(b & a)) return Is(c), !1;
        return !0;
    };
    var Ls = _.B('cast.framework.events.EventTarget');
    _.r(Ks, _.z);
    _.h = Ks.prototype;
    _.h.addEventListener = function (a, b, c) {
        if (this.Wa()) _.D(Ls, `Trying to add an event listener for ${a} to a disposed EventTarget`);
        else {
            this.j[a] || (this.j[a] = []);
            for (let d = _.q(this.j[a]), e = d.next(); !e.done; e = d.next()) { if (e.value.handleEvent === b) return; }
            this.j[a].push(new Js(b, c));
        }
    };
    _.h.removeEventListener = function (a, b) {
        if (this.Wa()) _.D(Ls, `Trying to remove an event listener for ${a} from a disposed EventTarget`);
        else if (a = this.j[a]) {
            const c = a.findIndex(function (d) {
                return d.handleEvent === b;
            });
            c >= 0 && a.splice(c, 1);
        }
    };
    _.h.Gf = function (a) {
        this.Wa() ? _.D(Ls, 'Trying to set a parent EventTarget for a disposed EventTarget') : this.o = a;
    };
    _.h.dispatchEvent = function (a) {
        const b = a.type;
        this.Wa() ? _.D(Ls, `Trying to dispatch an event (${a.type}) on a disposed EventTarget`) : (Ms(this, b, a), Ms(this, '*', a), this.o && this.o.dispatchEvent(a));
    };
    _.h.ka = function () {
        this.j = {};
        this.l = this.o = null;
    };
    cast.framework.events.Xv = {};
    _.w('cast.framework.events.Event', Os);
    _.r(Ps, Os);
    _.w('cast.framework.events.BitrateChangedEvent', Ps);
    _.r(Qs, Os);
    _.w('cast.framework.events.EmsgEvent', Qs);
    _.r(Rs, Os);
    _.w('cast.framework.events.ErrorEvent', Rs);
    _.r(Ss, Os);
    _.w('cast.framework.events.Id3Event', Ss);
    _.r(Ts, Os);
    _.w('cast.framework.events.MediaElementEvent', Ts);
    _.r(Us, Ts);
    _.w('cast.framework.events.MediaPauseEvent', Us);
    _.r(Vs, Os);
    _.w('cast.framework.events.MediaStatusEvent', Vs);
    _.r(Ws, Os);
    _.w('cast.framework.events.CustomStateEvent', Ws);
    _.r(Xs, Os);
    _.w('cast.framework.events.MediaFinishedEvent', Xs);
    _.r(Ys, Os);
    _.w('cast.framework.events.RequestEvent', Ys);
    _.r(Zs, Os);
    _.w('cast.framework.events.LoadEvent', Zs);
    _.r($s, Zs);
    _.w('cast.framework.events.MediaInformationChangedEvent', $s);
    _.r(at, Os);
    _.w('cast.framework.events.BreaksEvent', at);
    _.r(bt, Os);
    _.w('cast.framework.events.BufferingEvent', bt);
    _.r(ct, Os);
    _.w('cast.framework.events.ClipEndedEvent', ct);
    _.r(dt, Os);
    _.w('cast.framework.events.SegmentDownloadedEvent', dt);
    _.r(et, Os);
    _.w('cast.framework.events.CacheLoadedEvent', et);
    _.r(ft, Os);
    _.w('cast.framework.events.InbandTrackAddedEvent', ft);
    _.r(gt, Os);
    _.w('cast.framework.events.TracksChangedEvent', gt);
    _.r(ht, Os);
    _.w('cast.framework.events.CacheItemEvent', ht);
    _.r(it, Os);
    _.w('cast.framework.events.LiveStatusEvent', it);
    _.r(jt, Os);
    _.w('cast.framework.events.TimedMetadataEvent', jt);
    _.w('cast.framework.ContentConfig', lt);
    var kt = _.B('cast.framework.ContentConfig');
    _.h = O.prototype;
    _.h.setEventsListener = function () { };
    _.h.getPlayerVersion = function () { };
    _.h.getPlayerState = function () { };
    _.h.getDurationSec = function () { };
    _.h.getCurrentTimeSec = function () { };
    _.h.getMediaCategory = function () { };
    _.h.isLiveStream = function () { };
    _.h.getPlaybackRate = function () { };
    _.h.getLiveSeekableRange = function () { };
    _.h.getStartAbsoluteTime = function () { };
    _.h.getBufferedRanges = function () { };
    _.h.getTracksInfo = function () { };
    _.h.getCurrentBitRate = function () { };
    _.h.getBreakStatus = function () { };
    _.h.getBreaks = function () { };
    _.h.getBreakClips = function () { };
    _.h.skipAd = function () { };
    _.h.preload = function () { };
    _.h.load = function () { };
    _.h.unload = function () { };
    _.h.play = function () { };
    _.h.pause = function () { };
    _.h.seek = function () { };
    _.h.setPlaybackRate = function () { };
    _.h.setActiveAudioTrack = function () { };
    _.h.setActiveTextTracks = function () { };
    _.w('cast.framework.PlayerInterface', O);
    O.prototype.setActiveTextTracks = O.prototype.setActiveTextTracks;
    O.prototype.setActiveAudioTrack = O.prototype.setActiveAudioTrack;
    O.prototype.setPlaybackRate = O.prototype.setPlaybackRate;
    O.prototype.seek = O.prototype.seek;
    O.prototype.pause = O.prototype.pause;
    O.prototype.play = O.prototype.play;
    O.prototype.unload = O.prototype.unload;
    O.prototype.load = O.prototype.load;
    O.prototype.preload = O.prototype.preload;
    O.prototype.skipAd = O.prototype.skipAd;
    O.prototype.getBreakClips = O.prototype.getBreakClips;
    O.prototype.getBreaks = O.prototype.getBreaks;
    O.prototype.getBreakStatus = O.prototype.getBreakStatus;
    O.prototype.getCurrentBitRate = O.prototype.getCurrentBitRate;
    O.prototype.getTracksInfo = O.prototype.getTracksInfo;
    O.prototype.getBufferedRanges = O.prototype.getBufferedRanges;
    O.prototype.getStartAbsoluteTime = O.prototype.getStartAbsoluteTime;
    O.prototype.getLiveSeekableRange = O.prototype.getLiveSeekableRange;
    O.prototype.getPlaybackRate = O.prototype.getPlaybackRate;
    O.prototype.isLiveStream = O.prototype.isLiveStream;
    O.prototype.getMediaCategory = O.prototype.getMediaCategory;
    O.prototype.getCurrentTimeSec = O.prototype.getCurrentTimeSec;
    O.prototype.getDurationSec = O.prototype.getDurationSec;
    O.prototype.getPlayerState = O.prototype.getPlayerState;
    O.prototype.getPlayerVersion = O.prototype.getPlayerVersion;
    O.prototype.setEventsListener = O.prototype.setEventsListener;
    O.EventType = {
        STATE_CHANGED: 'STATE_CHANGED',
        CLIP_ENDED: 'CLIP_ENDED',
        ERROR: 'ERROR',
        TIME_UPDATE: 'TIME_UPDATE',
        DURATION_CHANGED: 'DURATION_CHANGED',
        RATE_CHANGED: 'RATE_CHANGED',
        TEXT_TRACKS_CHANGED: 'TEXT_TRACKS_CHANGED',
        AUDIO_TRACKS_CHANGED: 'AUDIO_TRACKS_CHANGED',
        BITRATE_CHANGED: 'BITRATE_CHANGED',
        TIME_TO_TARGET_BITRATE: 'TIME_TO_TARGET_BITRATE',
        BREAK_INFO_CHANGED: 'BREAK_INFO_CHANGED',
        BREAK_STATE_CHANGED: 'BREAK_STATE_CHANGED',
    };
    O.Event = Kt;
    _.r(Lt, Kt);
    O.BitrateChangedEvent = Lt;
    _.r(Mt, Kt);
    O.TargetBitrateEvent = Mt;
    cast.framework.common.hash = {};
    const lC = _.B('cast.framework.common.hash');
    cast.framework.common.hash.et = function (a) {
        let b = 0;
        let c;
        for (c = 0; c < a.length; c++) {
            const d = a.charCodeAt(c);
            b = (b << 5) - b + d;
            b |= 0;
        }
        return b;
    };
    cast.framework.common.hash.vh = function (a) {
        if (typeof a === 'number' && Number.isInteger(a)) return a;
        typeof a !== 'string' && (a = JSON.stringify(a));
        if (/^\d+$/.test(a)) return parseInt(a, 10);
        const b = cast.framework.common.hash.et(a);
        _.G(lC, `Version ${a} was hashed to ${b}`);
        return b;
    };
    var Nt = _.B('cast.framework.common.libraryloader');
    var Pt = {
        gp: '//www.gstatic.com/cast/sdk/libs/mediaplayer/1.0.0/media_player.js',
        fp: '//www.gstatic.com/cast/sdk/libs/mediaplayer/preview/media_player.js',
        Qc(a, b) {
            a = (void 0 === b ? 0 : b) ? /(\d{1,2})\.(\d{1,2})\.(\d{1,2})/.exec(a) : /^(\d{1,2})\.(\d{1,2})\.(\d{1,2})$/.exec(a);
            if (!a) return -1;
            let c = _.q(a);
            c.next();
            a = c.next().value;
            b = c.next().value;
            c = c.next().value;
            return 1E4 * Number(a) + 100 * Number(b) + Number(c);
        },
        mi: '3.2.2',
    };
    var Qt = Pt.Qc('2.5.6');
    var Rt = Pt.Qc('5.0.0');
    Pt.Sf = document.currentScript.src;
    let mC = new no();
    let nC = new no();
    let oC = new no();
    Pt.qk = mC.promise;
    Pt.Vh = nC.promise;
    Pt.Ct = oC.promise;
    Pt.Sk = !1;
    Pt.load = function (a) {
        let b = void 0 === a ? {} : a;
        a = void 0 === b.useLegacyDashSupport ? !1 : b.useLegacyDashSupport;
        const c = void 0 === b.mplUrl ? void 0 : b.mplUrl;
        const d = void 0 === b.shakaUrl ? void 0 : b.shakaUrl;
        const e = void 0 === b.loadMux ? !1 : b.loadMux;
        const f = void 0 === b.skipMplLoad ? !1 : b.skipMplLoad;
        b = (b = void 0 === b.shakaVersion ? void 0 : b.shakaVersion) ? St(b) : He() || Pt.mi;
        f || Ot(c || (Pt.Sf.includes('/preview/cast_receiver_framework.js') ? Pt.fp : Pt.gp), mC);
        a || (Ot(d || `//ajax.googleapis.com/ajax/libs/shaka-player/${b}/shaka-player.compiled.js`, nC),
        Pt.Sk = !0);
        e && (Pt.Qc(b) >= Pt.Qc('3.1.0') && _.D(Nt, 'Mux.js is not supported for Shaka 3.1.0 and above.'), Ot(`//ajax.googleapis.com/ajax/libs/shaka-player/${b}/mux.min.js`, oC));
    };
    Pt.st = function () {
        const a = Pt.Sf.replace(/cast_receiver_framework(_debug|_dogfood)?\.js/, 'cast_receiver_framework$1_vast_module.js');
        if (a === Pt.Sf) throw Error('Fail to calculate VAST lib URL');
        const b = new no();
        Ot(a, b);
        return b.promise.then(function () {
            if (cast.ql !== cast.rl) return _.D(Nt, 'Wrong version of VAST module is loaded.'), Promise.reject('Wrong version of VAST module is loaded.');
        });
    };
    Pt.reset = function () {
        mC = new no();
        nC = new no();
        oC = new no();
        Pt.qk = mC.promise;
        Pt.Vh = nC.promise;
        Pt.Jx = new no();
        Pt.Ct = oC.promise;
    };
    cast.framework.common.Oc = Pt;
    _.r(Tt, _.z);
    _.h = Tt.prototype;
    _.h.gd = function (a) {
        return new Fr(this.L++, a);
    };
    _.h.getTracks = function (a) {
        return void 0 !== a ? this.tracks.filter(function (b) {
            return b.type == a;
        }) : this.tracks;
    };
    _.h.getTracksInfo = function () {
        const a = new Gr();
        a.tracks = this.tracks;
        a.activeTrackIds = this.G;
        this.j && (a.textTrackStyle = cast.framework.N.Hj(this.j.Hc()));
        return a;
    };
    _.h.Bd = function (a) {
        a && a.tracksInfo && Yt(this, a.tracksInfo);
    };
    _.h.jd = function () { };
    _.h.yd = function () { };
    _.h.Pg = function () {
        return null;
    };
    _.h.jh = function (a) {
        return !a.trackContentId;
    };
    _.h.vk = function (a, b, c, d, e) {
        c.length > 1 && (_.F(Xt, `Cannot enable more than one inband tracks. Will only enable track ${c[0]}.`), c = [c[0]]);
        au(this, b, c.concat(d != null ? d : [], e));
        this.jd(c);
        cu(this, d, this.ignoreTtmlPositionInfo);
        b != null && this.yd(a, b);
    };
    _.h.xb = function (a) {
        this.Wa() ? _.D(Xt, 'Cannot change tracks style in disposed state') : this.j && this.j.xb(cast.framework.N.Ok(a));
    };
    _.h.Hc = function () {
        if (this.j) return cast.framework.N.Hj(this.j.Hc());
    };
    _.h.ka = function () {
        this.B && this.B.unload();
        _.z.prototype.ka.call(this);
    };
    var Xt = _.B('cast.framework.media.TracksManager');
    cast.framework.media.Nv = {};
    _.h = eu.prototype;
    _.h.rj = function (a) {
        const b = this;
        a && (Object.keys(pC).forEach(function (c) {
            ju(b, a, c, function () {
                const d = new Ts(pC[c], b.getCurrentTimeSec());
                iu(b, d);
            });
        }), ju(this, a, 'playing', this.Mt.bind(this)), ju(this, a, 'ended', function () {
            b.end('END_OF_STREAM');
        }), ju(this, a, 'pause', function () {
            const c = new Us(b.getCurrentTimeSec(), a.ended);
            iu(b, c);
        }), ju(this, a, 'ratechange', function () {
            b.ad(a.playbackRate);
        }));
    };
    _.h.Rb = function () {
        return 0;
    };
    _.h.onError = function (a, b, c) {
        this.A !== 6 && (this.A = 5, iu(this, new Rs(a, b, c && c.reason)), this.end('ERROR', c));
    };
    _.h.Mt = function () {
        this.A < 4 && (this.A = 4, iu(this, new Os('CLIP_STARTED')));
    };
    _.h.jk = function () { };
    _.h.eg = function () {
        return {};
    };
    _.h.getPlayerVersion = function () {
        return '';
    };
    _.h.pause = function () {
        this.I = !0;
        lu(this);
        this.wc(!1);
        return this.nk();
    };
    _.h.nk = function () {
        if (!this.mediaElement) return Yd('INVALID_REQUEST');
        this.mediaElement.pause();
        return _.H();
    };
    _.h.play = function () {
        this.I = !1;
        const a = this.pk();
        fu(this);
        return a;
    };
    _.h.pk = function () {
        return _.H(this.mediaElement && this.mediaElement.play());
    };
    _.h.seek = function (a, b) {
        const c = this;
        b = void 0 === b ? null : b;
        if (this.isLiveStream()) {
            const d = this.getLiveSeekableRange();
            if (!d) return _.F(qC, 'No seekable range available, could not seek.'), Yd('INVALID_REQUEST');
            a < d.start ? (_.F(qC, 'Seek time is not available any more, jump to seek start point.'), a = d.start) : a > d.end && (_.F(qC, 'Seek time is not available yet, jump to live edge.'), a = d.end);
        }
        Math.abs(this.getCurrentTimeSec() - a) < 1 ? (_.G(qC, 'ignore seek which tries to jump to too close time'), a = _.H()) : (a = this.qe(a), this.I
            || a.then(function () {
                fu(c);
            }, function () { }));
        return b ? a.then(function () {
            if (c.pe() && b == 'PLAYBACK_START') return c.play();
            if (!c.pe() && b == 'PLAYBACK_PAUSE') return c.pause();
        }) : a;
    };
    _.h.qe = function (a) {
        if (!this.mediaElement) return _.F(qC, 'could not seek while media was not loaded yet'), Yd('INVALID_REQUEST');
        this.mediaElement.currentTime = a;
        return _.H();
    };
    _.h.getMediaCategory = function () {
        return this.ud;
    };
    _.h.oe = function () {
        return this.I && this.pe() ? 'PAUSED' : this.isBuffering() ? 'BUFFERING' : 'PLAYING';
    };
    _.h.pe = function () {
        return !!this.mediaElement && this.mediaElement.paused;
    };
    _.h.isLiveStream = function () {
        return !1;
    };
    _.h.Zc = function () { };
    _.h.isLiveDone = function () { };
    _.h.kb = function () {
        return null;
    };
    _.h.getLiveSeekableRange = function () {
        return null;
    };
    _.h.getStartAbsoluteTime = function () {
        const a = this.getLiveSeekableRange();
        return a ? Date.now() / 1E3 - a.end : null;
    };
    _.h.getCurrentTimeSec = function () {
        return this.da ? this.da : this.mediaElement ? this.mediaElement.currentTime : 0;
    };
    _.h.getDurationSec = function () {
        return this.mediaElement ? this.mediaElement.duration : 0;
    };
    _.h.getPlaybackRate = function () {
        return this.mediaElement ? this.mediaElement.playbackRate : 1;
    };
    _.h.ad = function (a) {
        this.La = a;
        fu(this);
    };
    _.h.getBufferedRanges = function () {
        if (!this.mediaElement) return [];
        for (var a = [], b = this.mediaElement.buffered, c = 0; c < b.length; c++) a.push(new Uq(b.start(c), b.end(c)));
        return a;
    };
    _.h.hd = function (a) {
        if (!this.o) return null;
        bu(this.o, a.language);
        return this.o.getTracksInfo().activeTrackIds;
    };
    _.h.Jd = function (a, b) {
        this.mediaElement = a;
        this.eb = b;
        this.I = !b;
        this.F = de();
        cast.framework.common.analytics.ck(this.Rb(), this.l.playbackConfig);
        this.rj(a);
        this.Xd(a, b);
        return this.F.promise;
    };
    _.h.Xd = function () {
        _.D(qC, 'Load not implemented');
        this.onError(104);
    };
    _.h.preloadContent = function () {
        this.tf();
    };
    _.h.tf = function () { };
    _.h.end = function (a, b) {
        const c = this;
        b = void 0 === b ? null : b;
        lu(this);
        this.wc(!1);
        if (this.A == 6) return this.D.promise;
        this.A = 6;
        this.jk();
        const d = this.getCurrentTimeSec();
        this.da = d;
        this.Id(a);
        this.mediaElement && ku(this, this.mediaElement);
        this.mediaElement = null;
        this.qa = this.o && this.o.getTracksInfo();
        this.o && this.o.ea();
        this.o = null;
        this.F && (a == 'ERROR' ? this.F.reject(b) : this.F.resolve());
        return this.D.promise.then(function () {
            iu(c, new ct(d, a));
            c.Da.ea();
        });
    };
    _.h.isBuffering = function () {
        return this.O;
    };
    _.h.Ic = function () {
        return [];
    };
    _.h.Id = function () {
        const a = this.mediaElement;
        a && (a.removeAttribute('src'), a.load());
        setTimeout(this.D.resolve, 0);
    };
    _.h.wc = function (a) {
        a !== this.O && (this.O = a, iu(this, new bt(this.O)));
        a ? !this.G && this.A >= 4 && (this.G = Date.now()) : this.G && (K(cast.framework.common.analytics.K.BUFFERING, Date.now() - this.G), this.G = null);
    };
    _.h.Em = function () {
        this.wc(1E3 * (this.getCurrentTimeSec() - this.Ca) < 100 * this.La);
        const a = this.getLiveSeekableRange();
        !this.T && this.isLiveDone() && a && (iu(this, new it('LIVE_ENDED', a)), this.T = !0);
        !this.V && this.Zc() && a && (iu(this, new it('LIVE_IS_MOVING_WINDOW_CHANGED', a)), this.V = !0);
        fu(this);
    };
    _.h.setPlaybackRate = function (a) {
        const b = this;
        return this.Bk((void 0 === a ? 1 : a) || 1).then(function () {
            b.ad(b.getPlaybackRate());
        });
    };
    _.h.Bk = function (a) {
        if (!this.mediaElement) return Yd('INVALID_REQUEST');
        this.mediaElement.playbackRate = a;
        return _.H();
    };
    var qC = _.B('cast.framework.media.BasePlayer');
    var pC = {
        abort: 'ABORT',
        canplay: 'CAN_PLAY',
        canplaythrough: 'CAN_PLAY_THROUGH',
        durationchange: 'DURATION_CHANGE',
        ended: 'ENDED',
        emptied: 'EMPTIED',
        loadeddata: 'LOADED_DATA',
        loadedmetadata: 'LOADED_METADATA',
        loadstart: 'LOAD_START',
        play: 'PLAY',
        playing: 'PLAYING',
        progress: 'PROGRESS',
        ratechange: 'RATE_CHANGE',
        seeked: 'SEEKED',
        seeking: 'SEEKING',
        stalled: 'STALLED',
        suspend: 'SUSPEND',
        timeupdate: 'TIME_UPDATE',
        waiting: 'WAITING',
    };
    var nu = _.B('cast.framework.media.CustomPlayer');
    _.r(mu, eu);
    _.h = mu.prototype;
    _.h.Rb = function () {
        return cast.framework.common.analytics.pb.hi;
    };
    _.h.rj = function () { };
    _.h.Xd = function (a, b) {
        const c = this;
        ou(this, 'load', function () {
            return c.j.load(a, b);
        }).then(function () {
            const d = c.getLiveSeekableRange();
            return c.isLiveStream() && void 0 === c.l.startTime && d && d.end && !d.isLiveDone ? c.seek(d.end) : _.H();
        }).then(function () {
            gu(c);
        }, function (d) {
            c.onError(d && d.detailedErrorCode || 900, d && d.error, d);
        });
    };
    _.h.tf = function () {
        if (this.j.preload) {
            try {
                this.j.preload();
            } catch (a) {
                _.D(nu, 'preload failed ', a);
            }
            this.A = 2;
        }
    };
    _.h.Id = function (a) {
        const b = this;
        this.D.resolve(new Ud(function (c) {
            return c(b.j.unload(a));
        }));
    };
    _.h.pk = function () {
        const a = this;
        return ou(this, 'play', function () {
            return a.j.play();
        });
    };
    _.h.nk = function () {
        const a = this;
        return ou(this, 'pause', function () {
            return Promise.resolve(a.j.pause()).then(function () {
                return pu(a, 500);
            });
        });
    };
    _.h.qe = function (a) {
        const b = this;
        if (this.j.seek) {
            return ou(this, 'seek', function () {
                return b.j.seek(a);
            });
        }
        _.F(nu, 'Seek is not supported');
        return Yd('NOT_SUPPORTED');
    };
    _.h.Bk = function (a) {
        const b = this;
        if (this.j.setPlaybackRate) {
            return ou(this, 'setPlaybackRate', function () {
                return b.j.setPlaybackRate(a);
            });
        }
        _.F(nu, 'Set playback rate is not supported');
        return Yd('NOT_SUPPORTED');
    };
    _.h.getDurationSec = function () {
        return this.j.getDurationSec();
    };
    _.h.getCurrentTimeSec = function () {
        return this.j.getCurrentTimeSec();
    };
    _.h.getPlaybackRate = function () {
        return this.j.getPlaybackRate ? this.j.getPlaybackRate() : 1;
    };
    _.h.getBufferedRanges = function () {
        return this.j.getBufferedRanges ? this.j.getBufferedRanges() || [] : [];
    };
    _.h.isLiveStream = function () {
        return !!this.j.isLiveStream && this.j.isLiveStream();
    };
    _.h.getLiveSeekableRange = function () {
        return this.j.getLiveSeekableRange ? this.j.getLiveSeekableRange() : null;
    };
    _.h.kb = function () {
        const a = this.getLiveSeekableRange();
        return a ? new Uq(a.start || 0, a.end || 0) : null;
    };
    _.h.getStartAbsoluteTime = function () {
        if (!this.isLiveStream()) return null;
        let a = null;
        this.j.getStartAbsoluteTime && (a = this.j.getStartAbsoluteTime());
        return a || eu.prototype.getStartAbsoluteTime.call(this);
    };
    _.h.pe = function () {
        return this.j.getPlayerState() == 'PAUSED';
    };
    _.h.oe = function () {
        return this.isBuffering() ? 'BUFFERING' : this.j.getPlayerState();
    };
    _.h.getBreaks = function () {
        return this.j && this.j.getBreaks ? this.j.getBreaks() : null;
    };
    _.h.getBreakClips = function () {
        return this.j && this.j.getBreakClips ? this.j.getBreakClips() : null;
    };
    _.h.getBreakStatus = function () {
        return this.j && this.j.getBreakStatus ? this.j.getBreakStatus() : null;
    };
    _.h.skipAd = function () {
        const a = this;
        if (this.j && this.j.skipAd) {
            return ou(this, 'skipAd', function () {
                return a.j.skipAd();
            });
        }
        _.F(nu, 'skipAd is not supported');
        return Yd('NOT_SUPPORTED');
    };
    _.h.getPlayerVersion = function () {
        return String(this.j.getPlayerVersion()) || eu.prototype.getPlayerVersion.call(this);
    };
    _.r(qu, Tt);
    qu.prototype.Bd = function (a) {
        let b = this.l.getTracksInfo ? this.l.getTracksInfo() : null;
        b = b || a.tracksInfo;
        Yt(this, b);
    };
    qu.prototype.jh = function (a) {
        return a && !!a.isInband;
    };
    qu.prototype.jd = function (a) {
        this.l.setActiveTextTracks(a);
    };
    qu.prototype.yd = function (a, b) {
        this.l.setActiveAudioTrack(b);
    };
    cast.framework.media.Dl = qu;
    cast.framework.media.gh = {};
    const rC = _.B('cast.framework.media.ImagePlayer');
    _.r(su, eu);
    _.h = su.prototype;
    _.h.Jd = function (a) {
        const b = this;
        _.G(rC, 'loadContent');
        this.mediaElement = a;
        cast.framework.common.analytics.ck(this.Rb(), this.l.playbackConfig);
        const c = this.l.url;
        return ru(c).then(function () {
            a.style.backgroundImage = cast.receiver.C.aa.Va(c);
            b.j = a;
            _.G(rC, 'image is set');
            b.o = b.bb(b, a);
        }, function () {
            b.onError(903);
            return Yd();
        });
    };
    _.h.getDurationSec = function () {
        return 0;
    };
    _.h.Rb = function () {
        return cast.framework.common.analytics.pb.si;
    };
    _.h.oe = function () {
        return 'PAUSED';
    };
    _.h.preloadContent = function () {
        _.G(rC, 'ImagePlayer does not handle preload');
    };
    _.h.play = function () {
        _.G(rC, 'ImagePlayer does not support PLAY');
        return Yd('NOT_SUPPORTED');
    };
    _.h.pause = function () {
        _.G(rC, 'ImagePlayer does not support PAUSE');
        return Yd('NOT_SUPPORTED');
    };
    _.h.seek = function () {
        _.G(rC, 'ImagePlayer does not support SEEK');
        return Yd('NOT_SUPPORTED');
    };
    _.h.Id = function () {
        this.j && (this.j.style.backgroundImage = 'none');
        this.D.resolve();
    };
    _.h.wc = function () { };
    cast.framework.media.gh.kw = su;
    cast.framework.media.gh.create = function (a) {
        return _.H(new su(a));
    };
    cast.framework.media.Ek = {};
    cast.framework.media.Ek.Qg = function (a) {
        if (a.code) {
            switch (a.code) {
                case shaka.util.Error.Code.LOAD_INTERRUPTED:
                    return 904;
                case shaka.util.Error.Code.LICENSE_REQUEST_FAILED:
                    return 201;
                case shaka.util.Error.Code.NO_RECOGNIZED_KEY_SYSTEMS:
                case shaka.util.Error.Code.REQUESTED_KEY_SYSTEM_CONFIG_UNAVAILABLE:
                    return 202;
                case shaka.util.Error.Code.DASH_EMPTY_PERIOD:
                    return 421;
            }
        }
        switch (a.category) {
            case shaka.util.Error.Category.NETWORK:
                return 321;
            case shaka.util.Error.Category.TEXT:
                return 600;
            case shaka.util.Error.Category.MEDIA:
                return 100;
            case shaka.util.Error.Category.MANIFEST:
                return 420;
            case shaka.util.Error.Category.DRM:
                return 200;
        }
        return 999;
    };
    cast.framework.media.Fk = {};
    cast.framework.media.Fk.it = function () {
        shaka.util.BufferUtils || (shaka.util.BufferUtils = {});
        shaka.util.BufferUtils.toUint8 || (shaka.util.BufferUtils.toUint8 = tu);
        shaka.util.Dom || (shaka.util.Dom = {});
        shaka.util.Dom.createHTMLElement || (shaka.util.Dom.createHTMLElement = uu);
    };
    _.r(vu, eu);
    _.h = vu.prototype;
    _.h.Rb = function () {
        return cast.framework.common.analytics.pb.jg;
    };
    _.h.Ic = function () {
        return this.Aa;
    };
    _.h.qe = function (a) {
        return eu.prototype.qe.call(this, a + this.B);
    };
    _.h.isLiveStream = function () {
        this.ia || (this.ia = !!this.j && (this.j.isLive() || this.j.isInProgress()));
        return this.ia;
    };
    _.h.Zc = function () {
        return !!this.j && !this.j.isInProgress();
    };
    _.h.isLiveDone = function () {
        return !!this.j && !this.j.isLive() && !this.j.isInProgress();
    };
    _.h.kb = function () {
        const a = this.j.seekRange();
        return a ? new Uq(a.start, a.end) : null;
    };
    _.h.eg = function () {
        const a = this.j.getStats();
        return {
            height: a.height,
            estimatedBandwidth: a.estimatedBandwidth,
            streamBandwidth: a.streamBandwidth,
            width: a.width,
        };
    };
    _.h.getLiveSeekableRange = function () {
        if (!this.isLiveStream()) return null;
        const a = this.kb();
        if (!a || typeof a.start !== 'number' || typeof a.end !== 'number') return null;
        this.B === null && (this.B = a.start);
        const b = this.Zc();
        const c = this.isLiveDone();
        return new sr(a.start - this.B, a.end - this.B, b, c);
    };
    _.h.getStartAbsoluteTime = function () {
        if (!this.isLiveStream()) return null;
        const a = eu.prototype.getStartAbsoluteTime.call(this);
        const b = eu.prototype.getCurrentTimeSec.call(this) - this.getCurrentTimeSec();
        return a && b && Math.abs(a - b) < 1800 ? b : a;
    };
    _.h.getCurrentTimeSec = function () {
        let a = eu.prototype.getCurrentTimeSec.call(this);
        if (this.A != 6 && this.isLiveStream() && a) {
            if (this.B === null) return 0;
            a -= this.B;
        }
        return a;
    };
    _.h.tf = function () {
        _.F(Cu, 'Preload is not yet supported on Shaka Player. Please refer to https://github.com/shaka-project/shaka-player/issues/1936.');
    };
    _.h.Xd = function (a, b) {
        const c = this;
        _.G(Cu, `load: ${this.l.startTime}`);
        if (a.autoplay = b) this.ba = Date.now();
        this.j = new this.J.Player(a);
        shaka.Player.version ? (K(cast.framework.common.analytics.K.cq, cast.framework.common.hash.vh(shaka.Player.version)), K(cast.framework.common.analytics.K.eq, cast.framework.common.Oc.Qc(shaka.Player.version, !0))) : _.D(Cu, 'Shaka version is not available.');
        Ku(this);
        Eu(this);
        this.W = de();
        this.R = !0;
        this.j.load(this.Pa.url, this.l.startTime).then(function () {
            return c.W.promise;
        }).then(function () {
            c.R = !1;
            Nu(c);
        }).catch(function (d) {
            c.R = !1;
            Hu(c, d);
        });
        Iu(this, a);
    };
    _.h.ad = function (a) {
        a && eu.prototype.ad.call(this, a);
    };
    _.h.Dj = function () {
        const a = this.fa;
        this.fa = this.j.getVariantTracks().reduce(function (b, c) {
            return c.active ? b + c.bandwidth : b;
        }, 0);
        a !== this.fa && iu(this, new Ps(this.fa));
    };
    _.h.wc = function (a) {
        eu.prototype.wc.call(this, a);
        this.isBuffering() && this.H ? (this.Ci(), this.Ma || (this.Z = Date.now(), K(cast.framework.common.analytics.K.bq, Date.now() - this.H)), this.H = null) : this.isBuffering() || this.H || (this.Ma = !1, this.H = Date.now(), this.Z && (K(cast.framework.common.analytics.K.Gp, this.H - this.Z), this.Z = null), this.ba && (K(cast.framework.common.analytics.K.Hp, this.H - this.ba), this.ba = null), this.ca && (K(cast.framework.common.analytics.K.Zp, this.H - this.ca), this.ca = null));
    };
    _.h.Fm = function () {
        this.W && this.W.resolve();
    };
    _.h.getDurationSec = function () {
        return this.isLiveStream() ? -1 : eu.prototype.getDurationSec.call(this);
    };
    _.h.Ci = function () {
        Ef(cast.framework.common.analytics.K.Up);
    };
    _.h.Gm = function () {
        this.ca = Date.now();
        this.B === null && (this.B = this.j.seekRange().start);
        if (this.wa) {
            let a = this.l.startTime + this.B;
            const b = this.j.seekRange();
            a < b.start ? (_.F(Cu, 'Start time is out of seek range, jump to the seek start point.'), a = b.start) : a > b.end && (_.F(Cu, 'Start time is out of seek range, jump to live.'), a = b.end);
            this.mediaElement.currentTime = a;
            this.wa = !1;
        }
    };
    _.h.du = function () {
        Ef(cast.framework.common.analytics.K.Yp);
    };
    _.h.Hm = function () {
        this.xa && (Ef(cast.framework.common.analytics.K.Xp), this.xa = !1);
    };
    _.h.jk = function () {
        Ef(cast.framework.common.analytics.K.Lp);
    };
    _.h.Id = function () {
        const a = this;
        this.j ? (Ou(this), this.j.destroy().then(function () {
            a.D.resolve();
        }), this.na.clear(), this.Aa = []) : this.D.resolve();
    };
    _.h.getPlayerVersion = function () {
        return shaka.Player.version || eu.prototype.getPlayerVersion.call(this);
    };
    var Cu = _.B('cast.framework.media.ShakaPlayer');
    var Au = {
        maxAttempts: 4,
        baseDelay: 400,
        backoffFactor: 2,
        timeout: 3E4,
    };
    const sC = {};
    var Gu = (sC.clearkey = 'org.w3.clearkey', sC.playready = 'com.chromecast.playready', sC.widevine = 'com.widevine.alpha', sC);
    _.r(Ru, Tt);
    _.h = Ru.prototype;
    _.h.Bd = function (a) {
        Yt(this, a.tracksInfo);
        a = Tu(this.l.getVariantTracks());
        let b = this.l.getTextTracks();
        let c = [];
        c = c.concat(a);
        c = c.concat(b);
        a = _.q(c);
        for (b = a.next(); !b.done; b = a.next()) {
            b = b.value;
            let d = b.type === 'variant' ? 'AUDIO' : b.type.toUpperCase();
            c = b.type === 'variant' ? b.audioCodec ? b.audioCodec : void 0 : b.mimeType ? b.mimeType : void 0;
            const e = b.kind ? b.kind.toUpperCase() : void 0;
            let f = b.type === 'variant' ? b.audioRoles : b.roles;
            f === null && (f = void 0);
            const g = Vt(this, {
                type: d,
                language: b.language,
                trackContentType: c,
                subtype: e,
                roles: f,
            });
            g ? d = g : (d = this.gd(d), d.language = b.language, d.trackContentType = c, d.subtype = e, d.roles = f, Wt(this, [d]));
            d.type == 'AUDIO' ? this.D.set(d.trackId, b.audioId) : this.D.set(d.trackId, b.id);
        }
    };
    _.h.jd = function (a) {
        const b = this;
        if (a && a.length !== 0) {
            a = a.map(function (e) {
                return b.D.get(e);
            });
            for (let c = _.q(this.l.getTextTracks()), d = c.next(); !d.done; d = c.next()) d = d.value, a.includes(d.id) && this.l.selectTextTrack(d);
            this.l.setTextTrackVisibility(!0);
        } else this.l.setTextTrackVisibility(!1);
    };
    _.h.yd = function (a, b) {
        if (b !== null) {
            let c = null;
            a !== null && (c = this.D.get(a));
            const d = this.D.get(b);
            if (c !== d) {
                const e = this.l.getVariantTracks();
                const f = e.find(function (k) {
                    return k.active;
                }).videoId;
                const g = e.find(function (k) {
                    return k.audioId === d && k.videoId === f;
                });
                g ? (g.language ? (g.language === 'und' && _.F(tC, "switching to matching track with language 'und'"), (a = g.audioRoles && g.audioRoles.find(function (k) {
                    return e.every(function (l) {
                        return l.language === g.language && l.audioId !== g.audioId && l.videoId === g.videoId && l.audioRoles && l.audioRoles.includes(k)
                            ? !1 : !0;
                    });
                })) ? this.l.selectAudioLanguage(g.language, a) : this.l.selectAudioLanguage(g.language)) : (_.F(tC, 'matching track is missing language, selecting variant track and disabling ABR'), this.l.configure({
                    abr: {
                        enabled: !1,
                    },
                }), this.l.selectVariantTrack(g, !0)), this.I && this.I()) : _.D(tC, 'cannot find matching shaka variant track');
            }
        }
    };
    _.h.Pg = function () {
        for (var a = -1, b = _.q(Tu(this.l.getVariantTracks())), c = b.next(); !c.done; c = b.next()) {
            if (c = c.value, c.primary) {
                a = c.audioId;
                break;
            }
        } b = null;
        c = _.q(this.D);
        for (let d = c.next(); !d.done; d = c.next()) {
            d = _.q(d.value);
            const e = d.next().value;
            if (d.next().value === a) {
                b = e;
                break;
            }
        }
        b < 0 && _.D(tC, 'cannot find default shaka audio track');
        return b;
    };
    _.h.ka = function () {
        this.I = null;
        Tt.prototype.ka.call(this);
    };
    var tC = _.B('cast.framework.media.ShakaTracksManager');
    _.r(Uu, eu);
    Uu.prototype.Xd = function (a, b) {
        _.G(uC, `loadContent: autoplay = ${b}, initial_time = ${this.l.startTime}`);
        if (a) Vu(this, a), a.src = this.l.url, a.autoplay = b;
        else this.onError(905);
    };
    Uu.prototype.j = function (a) {
        let b = this.l.startTime || 0;
        b < 0 && (b += a.duration);
        b >= 0 && b != a.currentTime && (a.currentTime = b);
        gu(this);
    };
    Uu.prototype.Rb = function () {
        return cast.framework.common.analytics.pb.cj;
    };
    var uC = _.B('cast.framework.media.SimplePlayer');
    _.r(Wu, Tt);
    Wu.prototype.Bd = function (a) {
        Yt(this, a.tracksInfo);
        a = this.player.getMediaCategory() == 'AUDIO' ? 'AUDIO' : 'VIDEO';
        Vt(this, {
            type: a,
        }) || (a = this.gd(a), Wt(this, [a]));
    };
    cast.framework.media.uq = Wu;
    cast.framework.media.Wb = {};
    cast.framework.media.Wb.fr = function (a) {
        const b = a.getStreamCount();
        let c = 0;
        const d = {};
        return d[Symbol.iterator] = function () {
            return {
                next() {
                    return c < b ? {
                        done: !1,
                        value: a.getStreamInfo(c++),
                    } : {
                        done: !0,
                    };
                },
            };
        }, d;
    };
    cast.framework.media.Wb.Qg = function (a) {
        switch (a) {
            case cast.player.api.ErrorCode.PLAYBACK:
                return 100;
            case cast.player.api.ErrorCode.MEDIAKEYS:
                return 200;
            case cast.player.api.ErrorCode.NETWORK:
                return 300;
            case cast.player.api.ErrorCode.MANIFEST:
                return 400;
            default:
                return _.Va('Cannot reach'), 999;
        }
    };
    cast.framework.media.Wb.ys = function (a) {
        switch (a) {
            case 'aac':
                return cast.player.api.HlsSegmentFormat.MPEG_AUDIO_ES;
            case 'ac3':
                return cast.player.api.HlsSegmentFormat.PACKED_AUDIO_AC3;
            case 'mp3':
                return cast.player.api.HlsSegmentFormat.MPEG_LAYER_3;
            case 'ts':
                return cast.player.api.HlsSegmentFormat.MPEG2_TS;
            case 'ts_aac':
                return cast.player.api.HlsSegmentFormat.TS_AAC;
            case 'ts_he_aac':
                return cast.player.api.HlsSegmentFormat.TS_HE_AAC;
            case 'e_ac3':
                return cast.player.api.HlsSegmentFormat.PACKED_AUDIO_E_AC3;
            case 'fmp4':
                return cast.player.api.HlsSegmentFormat.FMP4;
        }
    };
    cast.framework.media.Wb.zs = function (a) {
        switch (a) {
            case 'mpeg2_ts':
                return cast.player.api.HlsVideoSegmentFormat.MPEG2_TS;
            case 'fmp4':
                return cast.player.api.HlsVideoSegmentFormat.FMP4;
        }
    };
    cast.framework.media.Wb.jx = function (a) {
        switch (a) {
            case 'application/x-mpegurl':
            case 'application/vnd.apple.mpegurl':
                return cast.player.api.StreamingProtocolType.HLS;
            case 'application/vnd.ms-sstr+xml':
                return cast.player.api.StreamingProtocolType.SMOOTH_STREAMING;
            case 'application/dash+xml':
                return cast.player.api.StreamingProtocolType.MPEG_DASH;
            default:
                _.Va(`Not supported mimeType ${a}`);
        }
        return cast.player.api.StreamingProtocolType.UNKNOWN;
    };
    _.r(av, eu);
    _.h = av.prototype;
    _.h.Rb = function () {
        return cast.framework.common.analytics.pb.ej;
    };
    _.h.Xd = function (a, b) {
        _.G(cv, `load: ${this.l.startTime}`);
        dv(this);
        this.B.mediaElement = a;
        a.autoplay = b;
        this.A == 2 ? this.H.load() : this.H.load(this.j, this.l.startTime);
        ju(this, a, 'loadedmetadata', this.Im.bind(this, a));
    };
    _.h.tf = function () {
        dv(this);
        this.H.preload(this.j, this.l.startTime);
        this.A = 2;
    };
    _.h.Ot = function (a, b, c) {
        a = c || cast.framework.media.Wb.Qg(a);
        this.onError(a, {
            requestStatus: b,
        });
    };
    _.h.Ic = function () {
        return this.Z;
    };
    _.h.Jm = function (a, b, c) {
        iu(this, new dt(b, c));
    };
    _.h.eg = function () {
        return {
            streamBandwidth: this.J,
        };
    };
    _.h.Ks = function (a, b, c, d) {
        d = void 0 === d ? [] : d;
        let e = b;
        let f = this.l.playbackConfig.mplConfig || {};
        f.getQualityLevel && (e = f.getQualityLevel(a, b, void 0 === c ? b : c, d));
        b = this.J;
        for (d = c = 0; d < this.j.getStreamCount(); d++) {
            if (this.j.isStreamEnabled(d) && !Je(this.j.getStreamInfo(d).mimeType)) {
                f = d === a ? e : this.j.getQualityLevel(d);
                if (f < 0) return e;
                c += this.j.getStreamInfo(d).bitrates[f];
            }
        } this.J = c;
        b !== this.J && iu(this, new Ps(this.J));
        return e;
    };
    _.h.getDurationSec = function () {
        return this.j ? this.j.getDuration() : 0;
    };
    _.h.isLiveStream = function () {
        return !!(this.j && this.j.isLiveStream && this.j.isLiveStream());
    };
    _.h.Zc = function () {
        return this.j.isLiveSeekableRangeMovingWindow && this.j.isLiveSeekableRangeMovingWindow();
    };
    _.h.isLiveDone = function () {
        return this.j.isLiveDone && this.j.isLiveDone();
    };
    _.h.kb = function () {
        const a = this.H.getState(cast.player.api.Player.State.SEEKABLE);
        return a && a.seekable ? new Uq(a.seekable.start, a.seekable.end) : null;
    };
    _.h.getLiveSeekableRange = function () {
        if (!this.isLiveStream()) return null;
        const a = this.kb();
        const b = this.Zc();
        const c = this.isLiveDone();
        return a ? new sr(a.start, a.end, b, c) : null;
    };
    _.h.Im = function () {
        const a = this;
        let b = _.H();
        if (this.isLiveStream() && void 0 === this.l.startTime) {
            var c = this.kb();
            c && c.end && (b = this.seek(c.end));
        }
        if (this.l.startTime < 0) {
            c = this.l.startTime;
            if (this.isLiveStream()) {
                const d = this.kb();
                d && d.end && (c += d.end);
            } else c += this.getDurationSec();
            c > 0 && Math.abs(c - this.getCurrentTimeSec()) > 1 && (b = this.seek(c));
        }
        b.then(function () {
            return gu(a);
        });
    };
    _.h.Id = function () {
        this.H.unload();
        this.D.resolve();
        this.R.clear();
        this.Z = [];
    };
    var cv = _.B('cast.framework.media.StreamingPlayer');
    _.r(fv, Tt);
    _.h = fv.prototype;
    _.h.Bd = function (a) {
        Yt(this, a.tracksInfo);
        let b = cast.framework.media.Wb.fr(this.I);
        a = 0;
        b = _.q(b);
        for (let c = b.next(); !c.done; c = b.next()) {
            c = c.value;
            let d = c.mimeType;
            if (d) {
                var e;
                let f = d;
                let g = c.codecs;
                f = f.toLowerCase();
                Je(f) || f == 'application/mp4' && g == 'stpp' ? f = 'TEXT' : (!(e = Mb(f, 'audio/')) && (e = g) && (g = g.toLowerCase(), e = !g.includes(',') && !!g.match(/^(mhm|mp4a|[ae]c-3)/)), f = e ? 'AUDIO' : Mb(f, 'video/') ? 'VIDEO' : null);
                f && (f == 'TEXT' && (d = jv(d, c.codecs)), (g = Vt(this, {
                    type: f,
                    name: c.name,
                    language: c.language,
                    trackContentType: d,
                }))
                    ? f = g : (f = this.gd(f), f.name = c.name, f.language = c.language, f.trackContentType = d, c.hlsMediaInfo && (f.forced = c.hlsMediaInfo.forced, f.assocLanguage = c.hlsMediaInfo.assocLanguage), Wt(this, [f])), this.D.set(f.trackId, a), a++);
            }
        }
    };
    _.h.yd = function (a, b) {
        let c = -1;
        let d = -1;
        const e = this.I;
        a == null ? c = e.getDefaultAudioStreamIndex() : a > -1 && (c = this.D.get(a));
        b == null ? d = e.getDefaultAudioStreamIndex() : b > -1 && (d = this.D.get(b));
        c != d && (e.enableStream(c, !1), e.enableStream(d, !0), this.l.onAudioChanged());
    };
    _.h.Pg = function () {
        for (var a = this.I.getDefaultAudioStreamIndex(), b = null, c = _.q(this.D), d = c.next(); !d.done; d = c.next()) {
            d = _.q(d.value);
            const e = d.next().value;
            if (d.next().value === a) {
                b = e;
                break;
            }
        }
        return b;
    };
    _.h.vk = function (a, b, c, d, e) {
        c.length + (d == null ? 0 : 1) > 1 && (_.F(iv, `Can only enable one track. Will enable track ${c[0]}`), c = [c[0]], d = null);
        au(this, b, c.concat(d != null ? d : [], e));
        d == null ? (cu(this, d, this.ignoreTtmlPositionInfo), this.jd(c)) : (this.jd(c), cu(this, d, this.ignoreTtmlPositionInfo));
        b != null && this.yd(a, b);
    };
    _.h.jd = function (a) {
        const b = a.length == 0 ? null : a[0];
        a = b != null ? this.D.get(b) : void 0;
        for (var c = !1, d = this.I, e = d.getStreamCount(), f = void 0 === a, g = 0; g < e; g++) {
            const k = d.getStreamInfo(g).mimeType;
            k && Je(k) && (g == a ? k == 'text/mp2t' ? this.l.enableCaptions(!0, cast.player.api.CaptionsType.CEA608) : (f = !0, d.isStreamEnabled(g) || (d.enableStream(g, !0), c = !0)) : g !== a && d.isStreamEnabled(g) && (d.enableStream(g, !1), c = !0));
        }
        b != null && void 0 == a && this.tracks.find(function (l) {
            return l.trackId == b && l.trackContentType == 'text/cea608';
        }) ? this.l.enableCaptions(!0,
                cast.player.api.CaptionsType.CEA608) : f && this.l.enableCaptions(!1, cast.player.api.CaptionsType.CEA608);
        c && this.l.enableCaptions(!0);
    };
    _.h.xb = function (a) {
        Tt.prototype.xb.call(this, a);
        let b = [];
        void 0 !== a.foregroundColor && b.push('color');
        void 0 !== a.backgroundColor && b.push('background-color');
        void 0 !== a.fontScale && b.push('font-size');
        void 0 === a.fontGenericFamily && void 0 === a.fontFamily || b.push('font-family');
        void 0 !== a.fontStyle && b.push('font-weight');
        void 0 !== a.edgeType && b.push('text-shadow');
        a: {
            const c = vC;
            let d;
            for (d in a) {
                if (!(d in c) || a[d] !== c[d]) {
                    a = !1;
                    break a;
                }
            } for (const e in c) {
                if (!(e in a)) {
                    a = !1;
                    break a;
                }
            } a = !0;
        }
        a && (b = []);
        this.l.setSenderTrackStyles
            && this.l.setSenderTrackStyles(b);
    };
    var vC = {
        foregroundColor: '#FFFFFFFF',
        backgroundColor: '#00000000',
        fontFamily: 'Helvetica',
        fontScale: 1,
        windowColor: '#00000080',
        windowRoundedCornerRadius: 8,
        windowType: 'ROUNDED_CORNERS',
        fontStyle: 'NORMAL',
        fontGenericFamily: 'SANS_SERIF',
        customData: void 0,
        edgeColor: void 0,
        edgeType: void 0,
    };
    var iv = _.B('cast.framework.media.StreamingTracksManager');
    var ov = _.B('cast.framework.media.BasePlayerFactory');
    Ea(kv);
    cast.framework.breaks = {};
    _.w('cast.framework.breaks.BreakSeekData', pv);
    _.w('cast.framework.breaks.BreakClipLoadInterceptorContext', qv);
    _.h = sv.prototype;
    _.h.Ib = function (a) {
        this.D = a;
        this.l && this.l.wk(a);
    };
    _.h.reset = function () {
        this.j = null;
        this.l && this.l.reset();
    };
    _.h.getBreaks = function () {
        return this.j ? this.j.j.slice() : [];
    };
    _.h.Le = function (a) {
        return this.j ? this.j.Le(a) : null;
    };
    _.h.getBreakClips = function () {
        return this.j ? this.j.getBreakClips().slice() : [];
    };
    _.h.Qb = function (a) {
        return this.j ? this.j.Qb(a) : null;
    };
    _.h.rg = function (a, b, c) {
        c = void 0 === c ? !0 : c;
        if (!this.j) return _.D(uv, 'addBreak() can be called only during playback.'), !1;
        if (a.isEmbedded) {
            if (a.expanded) var d = !0;
            else _.D(uv, 'Only expanded breaks can be added dynamically'), d = !1;
        } else _.D(uv, 'Only embedded breaks can be added dynamically'), d = !1;
        if (!d || !Mv(this.j, a, b)) return !1;
        K(cast.framework.common.analytics.K.Jl, a.duration || 0);
        c && this.o.broadcastStatus(!0);
        return !0;
    };
    _.h.Af = function (a) {
        if (!this.j) return _.D(uv, 'removeBreakById() can be called only during playback.'), !1;
        if (!this.j.Af(a)) return !1;
        Ef(cast.framework.common.analytics.K.Kl);
        this.o.broadcastStatus(!0);
        return !0;
    };
    _.h.Ec = function () {
        const a = this.o.j;
        return a ? a.Ec() : null;
    };
    _.h.ib = function () {
        const a = this.o.j;
        return a ? a.ib() : null;
    };
    _.h.Au = function (a) {
        a && vv(a);
        this.G = a || this.Bj.bind(this);
    };
    _.h.Bj = function (a) {
        const b = this;
        const c = a.seekFrom > a.seekTo;
        const d = a.breaks.reverse().find(function (e) {
            return !e.isWatched || b.A;
        });
        a.breaks = c || !d ? [] : [d];
        return a;
    };
    _.h.zu = function (a) {
        a && vv(a);
        this.H = a || this.Aj.bind(this);
    };
    _.h.Aj = function (a) {
        return a;
    };
    _.h.Hf = function (a) {
        this.A = a;
    };
    _.h.Es = function () {
        return this.A;
    };
    _.h.If = function (a) {
        a !== null && typeof a !== 'function' ? _.D(uv, 'setVastTrackingInterceptor failed since handler is not a function') : (this.F = a, this.l && this.l.If(a));
    };
    _.h.Dt = function (a) {
        a = this.Qb(a.breakClipId);
        this.l.mt(a) && this.l.Ym(a);
    };
    _.w('cast.framework.breaks.BreakManager', sv);
    sv.prototype.setVastTrackingInterceptor = sv.prototype.If;
    sv.prototype.getPlayWatchedBreak = sv.prototype.Es;
    sv.prototype.setPlayWatchedBreak = sv.prototype.Hf;
    sv.prototype.setBreakClipLoadInterceptor = sv.prototype.zu;
    sv.prototype.setBreakSeekInterceptor = sv.prototype.Au;
    sv.prototype.getBreakClipCurrentTimeSec = sv.prototype.ib;
    sv.prototype.getBreakClipDurationSec = sv.prototype.Ec;
    sv.prototype.removeBreakById = sv.prototype.Af;
    sv.prototype.addBreak = sv.prototype.rg;
    sv.prototype.getBreakClipById = sv.prototype.Qb;
    sv.prototype.getBreakClips = sv.prototype.getBreakClips;
    sv.prototype.getBreakById = sv.prototype.Le;
    sv.prototype.getBreaks = sv.prototype.getBreaks;
    var uv = _.B('cast.framework.breaks.BreakManager');
    cast.framework.timeline = {};
    Cv.prototype.getPosition = function () {
        return this.l.position;
    };
    var Iv = _.B('cast.framework.timeline.Timeline');
    _.h = Hv.prototype;
    _.h.reset = function () {
        this.j.length = 0;
        this.o.clear();
        this.D.clear();
    };
    _.h.rg = function (a) {
        Kv(this, a) && Lv(this, a);
    };
    _.h.Af = function (a) {
        const b = this.j.find(function (e) {
            return e.id === a && !!e.isEmbedded && !!e.expanded;
        });
        if (!b) return _.D(Iv, `Unknown break id ${a}`), !1;
        if (!b.isEmbedded || !b.expanded) return _.D(Iv, `Only embedded and expanded breaks can be dynamically removed${a}`), !1;
        this.j = this.j.filter(function (e) {
            return a !== e.id;
        });
        for (let c = _.q(this.o.keys()), d = c.next(); !d.done; d = c.next()) d = d.value, b.breakClipIds.includes(this.o.get(d).id) && this.o.delete(d);
        this.Lf();
        return !0;
    };
    _.h.Lf = function () { };
    _.h.Qb = function (a) {
        return this.o.get(a);
    };
    _.h.getBreakClips = function () {
        return Array.from(this.o.values());
    };
    _.h.Le = function (a) {
        return this.j.find(function (b) {
            return a == b.id;
        }) || null;
    };
    _.h.Ge = function () {
        _.Va('Should be implemented');
    };
    _.h.Td = function () {
        _.Va('Should be implemented');
    };
    _.h.Me = function () {
        _.Va('Should be implemented');
    };
    Hv.prototype.removeBreakById = Hv.prototype.Af;
    _.h = Rv.prototype;
    _.h.gv = function () {
        this.qa != null && K(cast.framework.common.analytics.K.Pq, Date.now() - this.qa);
    };
    _.h.fv = function () {
        this.W = Date.now();
    };
    _.h.jv = function () {
        this.W != null && (K(cast.framework.common.analytics.K.bl, Date.now() - this.W), this.W = null);
    };
    _.h.hv = function () {
        this.qa = Date.now();
    };
    _.h.load = function () { };
    _.h.reset = function (a) {
        _.G(Tv, 'reset()');
        this.end(a && wC[a] || 'STOPPED');
    };
    _.h.getVolume = function () {
        const a = new Oe();
        this.mediaElement ? (a.level = this.mediaElement.volume, a.muted = this.mediaElement.muted) : (a.level = 1, a.muted = !1);
        return a;
    };
    _.h.setVolume = function (a) {
        this.mediaElement ? (void 0 !== a.level && (this.mediaElement.volume = a.level), void 0 !== a.muted && (this.mediaElement.muted = a.muted)) : _.F(Tv, 'Cannot set media volume');
    };
    _.h.getDurationSec = function () {
        return this.V;
    };
    _.h.getCurrentTimeSec = function () {
        return this.Ne();
    };
    _.h.editTracksInfo = function (a) {
        return this.j ? hu(this.j, cast.framework.N.Ij(a)) : (_.D(Tv, 'Can not edit tracks info, player is not available'), []);
    };
    _.h.registerErrorCallback = function (a) {
        this.J = a;
    };
    _.h.registerEndedCallback = function (a) {
        this.ca = a;
    };
    _.h.registerLoadCallback = function (a) {
        this.fa = a;
    };
    _.h.unregisterErrorCallback = function () {
        this.J = function () { };
    };
    _.h.unregisterEndedCallback = function () {
        this.ca = function () { };
    };
    _.h.unregisterLoadCallback = function () {
        this.fa = function () { };
    };
    _.h.pause = function () {
        if (!this.j) return _.D(Tv, 'Can not pause, player is not available'), _.H();
        _.vd(Tv, 'pause');
        return this.j.pause();
    };
    _.h.play = function () {
        if (!this.j) return _.D(Tv, 'Can not play, player is not available'), _.H();
        _.vd(Tv, 'play');
        return this.j.play();
    };
    _.h.skipAd = function () {
        if (!this.l) return _.G(Tv, 'skipAd - not playing ad'), Yd('INVALID_COMMAND');
        if (!Sv(this)) return _.G(Tv, 'skipAd - ad cannot be skipped'), Yd('INVALID_COMMAND');
        _.G(Tv, 'skipAd');
        return this.Wh();
    };
    _.h.Wh = function () {
        return Yd('NOT_SUPPORTED');
    };
    _.h.re = function () {
        _.F(Tv, 'Seek Not implemented');
        return Yd('NOT_SUPPORTED');
    };
    _.h.seek = function (a, b) {
        const c = this;
        if (this.isPlayingBreak) return _.F(Tv, 'seek request during break was ignored.'), Yd('INVALID_REQUEST');
        a < 0 && (_.G(Tv, `Invalid seek value - ${a}`), a = 0);
        return this.Z ? (_.F(Tv, 'seek request before previous seek was finished was ignored.'), Yd('INVALID_REQUEST')) : this.Z = fe(this.re(a, b), function () {
            c.Z = null;
        });
    };
    _.h.getState = function () {
        switch (this.B) {
            case 1:
            case 2:
                return 'BUFFERING';
            case 3:
            case 4:
                return this.j ? cast.framework.N.bv(this.j.oe()) : 'PLAYING';
            case 5:
            case 6:
                return 'IDLE';
            default:
                return _.Va(), 'IDLE';
        }
    };
    _.h.isLiveStream = function () {
        return this.j ? this.j.isLiveStream() : !1;
    };
    _.h.getLiveSeekableRange = function () {
        return this.j ? this.j.getLiveSeekableRange() : null;
    };
    _.h.kb = function () {
        return this.j ? this.j.kb() : null;
    };
    _.h.getMediaCategory = function () {
        return this.j ? cast.framework.N.Mk(this.j.getMediaCategory()) : null;
    };
    _.h.preloadContent = function () {
        this.uf();
    };
    _.h.Ec = function () {
        return this.l ? this.l.j.duration || null : null;
    };
    _.h.ib = function () {
        return this.l ? this.timeline.Me(this.jb()) : null;
    };
    _.h.jb = function () {
        return this.j ? this.j.getCurrentTimeSec() : 0;
    };
    _.h.getPlaybackRate = function () {
        return this.j ? this.j.getPlaybackRate() : 1;
    };
    _.h.Ne = function () {
        const a = this.jb();
        return this.timeline.Td(a);
    };
    _.h.Ug = function () {
        return this.j ? this.j.getDurationSec() : 0;
    };
    _.h.Ic = function () {
        return !this.j || this.B < 3 ? [] : this.j.Ic();
    };
    _.h.getStartAbsoluteTime = function () {
        return this.G;
    };
    _.h.We = function () {
        if (!this.j) return !1;
        const a = this.j.getBufferedRanges();
        if (a.length < 1) return !1;
        const b = a.length - 1;
        const c = a[b].end;
        return a[b].start <= this.jb() && c >= this.Ug();
    };
    _.h.bi = function (a) {
        if (a.media) {
            var b = a.media;
            b.breakClips = cast.framework.N.Su(this.timeline.getBreakClips() || void 0);
            b.breaks = cast.framework.N.Ru(this.timeline.j || void 0);
        }
        a.currentTime = this.Ne();
        a.liveSeekableRange = cast.framework.N.Lk(this.getLiveSeekableRange()) || void 0;
        this.l ? ((b = this.l.l) && !b.expanded && (a.playbackRate = 0), a.supportedMediaCommands = Vv(this, a.supportedMediaCommands), b = this.timeline.Ge(this.l, this.jb()), a.breakStatus = b) : this.Aa.getBreaks().length > 0 && (a.breakStatus = new Ue());
    };
    _.h.end = function (a) {
        const b = this;
        if (this.B == 6) return this.I.promise;
        void 0 === this.da && (this.da = this.getCurrentTimeSec());
        const c = this.B;
        this.B = 6;
        this.J = function () { };
        cast.framework.common.analytics.wt(a);
        this.Di(a);
        this.isPlayingBreak && $v(this, 'BREAK_ENDED', null, a);
        return this.I.promise.then(function () {
            a !== 'END_OF_STREAM' && a !== 'SKIPPED' || b.ca();
            c < 5 && b.Da.dispatchEvent(new Xs(b.da, a));
            b.Da.ea();
        });
    };
    _.h.Di = function (a) {
        const b = this;
        _.G(Tv, `endInternal(): ${a}`);
        this.j ? (this.j.end(a).then(function () {
            b.I.resolve();
        }), this.j = null) : this.I.resolve();
    };
    _.h.Ye = function () {
        _.Va('This should be implemented');
        return Yd('INVALID_COMMAND');
    };
    _.h.uf = function () { };
    _.h.fe = function () {
        this.j.Da.Gf(this.Da);
        bw(this, 'ERROR', this.rf);
        bw(this, 'TIME_UPDATE', this.Rc);
        bw(this, 'DURATION_CHANGE', this.hk);
    };
    _.h.rf = function (a) {
        _.G(Tv, 'player event: error');
        this.ba || (this.ba = !0, this.J(a));
    };
    _.h.Rc = function () {
        let a = Sv(this);
        a != this.T && (this.T = a, Yv(this, !1));
        this.xa && (a = this.j.getStartAbsoluteTime(), a != this.G && (this.G = a, _.G(Tv, `Updating startAbsoluteTime ${this.G}`)), this.xa = !1);
    };
    _.h.hk = function () {
        if (!(this.B < 3)) {
            this.V = this.timeline.Td(this.Ug());
            const a = this.timeline;
            const b = this.V;
            if (!a.isEmbedded) {
                for (var c = null, d = a.j.length, e = 0; e < a.j.length; e++) {
                    const f = a.j[e];
                    if (f.position >= b || f.position < 0) c ? c.breakClipIds.push.apply(c.breakClipIds, _.ja(f.breakClipIds)) : (c = f, d = e, c.position = -1);
                }
                d < a.j.length - 1 && a.j.splice(d + 1);
            }
            this.j && (this.G = this.j.getStartAbsoluteTime(), _.G(Tv, `Setting startAbsoluteTime ${this.G}`));
            this.xa = !0;
        }
    };
    _.h.hd = function (a) {
        if (this.j) return this.j.hd(a) || void 0;
        _.D(Tv, 'Can not edit audio track, player is not available');
    };
    _.h.setPlaybackRate = function (a) {
        return this.j ? a !== this.j.getPlaybackRate() ? this.j.setPlaybackRate(a) : _.H() : (_.D(Tv, 'Can not set playback rate, player is not available'), _.H());
    };
    _.h.ta = function () {
        return this.j && this.j.o;
    };
    var Tv = _.B('cast.framework.media.Player');
    const xC = {};
    var wC = (xC.CANCELLED = 'STOPPED', xC.INTERRUPTED = 'INTERRUPTED', xC.FINISHED = 'END_OF_STREAM', xC.ERROR = 'ERROR', xC);
    cast.framework.media.Player = Rv;
    const yC = _.B('cast.framework.timeline.EmbeddedTimeline');
    fw.prototype.cache = function (a, b, c) {
        this.o = a;
        this.l = b;
        this.j = c;
    };
    fw.prototype.getBreakStatus = function () {
        return this.o;
    };
    _.r(hw, Hv);
    hw.prototype.Td = function (a) {
        if (this.l) return this.l.seekTo;
        const b = this.A.slice(0).reverse().find(function (c) {
            return c.j <= a;
        });
        return b ? b.expanded ? b.o + (a - b.j) : a > b.l ? b.o + (a - b.l) : b.o : a;
    };
    hw.prototype.Ge = function (a, b) {
        const c = jw(this, b);
        let d = 0;
        let e = 0;
        c ? (d = b - c.D, e = b - c.j) : _.G(yC, 'No matching break for break status, assuming beginning of break.');
        b = new Ue(d, e);
        Ev(a, b);
        return b;
    };
    hw.prototype.Me = function (a) {
        const b = jw(this, a);
        return b ? a - b.j : null;
    };
    hw.prototype.Lf = function () {
        let a = 0;
        this.A = [];
        this.G = new Map();
        this.H = new fw();
        for (let b = _.q(this.j), c = b.next(); !c.done; c = b.next()) {
            c = c.value;
            for (var d = 0, e = 0; e < c.breakClipIds.length; e++) {
                const f = this.Qb(c.breakClipIds[e]);
                if (f) {
                    let g = c.position + a;
                    const k = g + d;
                    g = new ow(c, f, c.position, g, k, k + f.duration, e, !!c.expanded);
                    this.G.set(`${c.id}___${f.id}`, g);
                    this.A.push(g);
                    d += f.duration;
                }
            }
            c.expanded || (a += d);
        }
    };
    ow.prototype.include = function (a) {
        return this.j - 0.001 <= a && (this.l < 0 || a <= this.l + 0.001);
    };
    _.r(pw, cast.framework.media.Player);
    _.h = pw.prototype;
    _.h.Ye = function (a) {
        const b = this;
        return (this.H || qw(this)).then(function (c) {
            b.j = c;
            b.fe();
            bw(b, 'CLIP_STARTED', b.Lm);
            bw(b, 'CLIP_ENDED', b.Km);
            return c.Jd(b.mediaElement, a);
        });
    };
    _.h.uf = function () {
        this.H = qw(this).then(function (a) {
            a.preloadContent();
            return a;
        });
    };
    _.h.re = function (a, b) {
        function c() {
            return d.j.seek(iw(e, a), b);
        }
        var d = this;
        if (this.o) return _.F(zC, 'Seek is in progress, new seek is ignored.'), _.H();
        _.G(zC, `seek: ${a}`);
        var e = this.timeline;
        return dw(this, a).then(function (f) {
            if (f && (a = f.seekTo, f.breaks && f.breaks.length > 0)) {
                const g = Ov(e, f);
                if (g.breakClipIds.length > 0) {
                    for (var k = [], l = 0, m = _.q(f.breaks), n = m.next(); !n.done; n = m.next()) {
                        n = n.value;
                        for (let t = _.q(n.breakClipIds), v = t.next(); !v.done; v = t.next()) {
                            v = v.value;
                            const x = e.G.get(`${n.id}___${v}`);
                            x ? (k.push(new ow(g,
                                x.breakClip, x.o, x.D, x.j, x.l, l, !1)), l++) : _.D(yC, `Invalid break id and break clip id combination in BreakSeekData. break id = ${n.id}; break clip id = ${v}`);
                        }
                    }
                    e.l = new ew(g, k, f.seekTo);
                    d.o = de();
                    d.F = d.o.promise.then(c);
                    return rw(d);
                }
            }
            _.G(zC, 'No seek break.');
            return c();
        });
    };
    _.h.Wh = function () {
        const a = this.jb();
        let b = this.timeline;
        this.A = !0;
        const c = this.j;
        const d = c.seek;
        b = jw(b, a);
        return d.call(c, b ? b.l : a, 'PLAYBACK_START');
    };
    _.h.Rc = function (a) {
        rw(this);
        cast.framework.media.Player.prototype.Rc.call(this, a);
    };
    _.h.Lm = function () {
        _.G(zC, 'started');
        Zv(this);
    };
    _.h.Km = function (a) {
        _.G(zC, 'ended');
        this.B < 5 && ($v(this, 'BREAK_ENDED', null, a.endedReason), aw(this, a));
    };
    var zC = _.B('cast.framework.media.EmbeddedPlayer');
    const AC = _.B('cast.framework.timeline.EmbeddedTimeline');
    _.r(sw, Hv);
    sw.prototype.getBreakStatus = function () {
        if (!this.l || !this.l.breakId || !this.l.breakClipId) return null;
        const a = this.Le(this.l.breakId);
        const b = this.Qb(this.l.breakClipId);
        return a && b ? new Cv(a, a.breakClipIds.indexOf(this.l.breakClipId) || 0, b) : (_.D(AC, 'Error in break status, unknown break or break clip.'), null);
    };
    sw.prototype.Td = function (a) {
        return a;
    };
    sw.prototype.Me = function () {
        return this.l ? this.l.currentBreakClipTime || 0 : null;
    };
    sw.prototype.Ge = function (a) {
        const b = cast.framework.N.Tu(this.l);
        Ev(a, b);
        return b;
    };
    cast.framework.timeline.sp = sw;
    _.r(uw, cast.framework.media.Player);
    _.h = uw.prototype;
    _.h.uf = function () {
        this.F = mv(kv.M(), this.D).then(function (a) {
            a.preloadContent();
            return a;
        });
    };
    _.h.Ye = function (a) {
        const b = this;
        return (this.F || mv(kv.M(), this.D)).then(function (c) {
            b.j = c;
            c instanceof mu && (b.o = c);
            b.fe();
            return c.Jd(b.mediaElement, a);
        }).then(function (c) {
            vw(b);
            return c;
        });
    };
    _.h.fe = function () {
        const a = this;
        cast.framework.media.Player.prototype.fe.call(this);
        bw(this, 'CLIP_STARTED', function () {
            _.G(BC, 'started');
            Zv(a);
        });
        bw(this, 'CLIP_ENDED', function (b) {
            _.G(BC, 'ended');
            a.B < 5 && ($v(a, 'BREAK_ENDED', null, b.endedReason), aw(a, b));
        });
        this.o && (this.o.H = function () {
            a.o ? (Ef(cast.framework.common.analytics.K.lp), vw(a), Yv(a, !0)) : _.D(BC, 'Error getting breaks info changed for non custom player');
        }, this.o.J = function () {
            if (a.o) {
                Ef(cast.framework.common.analytics.K.mp);
                let b = a.o.getBreakStatus();
                a.A.l = b;
                b = a.A.getBreakStatus();
                a.l && b && Dv(b, a.l) || (a.l && !b ? $v(a, 'BREAK_ENDED', null) : $v(a, 'BREAK_CLIP_STARTED', b));
            } else _.D(BC, 'Error getting break state changed for non custom player');
        });
    };
    _.h.Rc = function (a) {
        if (this.isPlayingBreak) {
            const b = this.o.getBreakStatus();
            this.A.l = b;
        }
        cast.framework.media.Player.prototype.Rc.call(this, a);
    };
    _.h.re = function (a, b) {
        return this.j.seek(a, b);
    };
    _.h.skipAd = function () {
        return this.o ? this.o.skipAd() : Yd('NOT_SUPPORTED');
    };
    var BC = _.B('cast.framework.media.ProxyPlayer');
    cast.framework.media.qp = uw;
    ww.prototype.isPlayingBreak = function () {
        return this.breakStatus != null;
    };
    cast.framework.media.util = {};
    const CC = _.B('cast.framework.media.util');
    var xw = {
        m3u8: 'application/x-mpegurl',
        manifest: 'application/vnd.ms-sstr+xml',
        mpd: 'application/dash+xml',
        ism: 'application/vnd.ms-sstr+xml',
        m4v: 'video/mp4',
        mp4: 'video/mp4',
        ogv: 'video/ogg',
        aac: 'audio/aac',
        m4a: 'audio/mp4',
        mp3: 'audio/mp3',
        oga: 'audio/ogg',
        wav: 'audio/wav',
        jpg: 'image/jpg',
        gif: 'image/gif',
        png: 'image/png',
    };
    cast.framework.media.util.Oe = function (a) {
        a = a.split('?')[0] || '';
        a = a.split('/').pop() || '';
        return a.split('.').pop() || '';
    };
    cast.framework.media.util.Te = function (a, b) {
        b = void 0 === b ? 'video/mp4' : b;
        if (a = xw[a]) return a;
        _.F(CC, `cannot guess mime type from given contenId/Type. Assume that this is ${b}`);
        return b;
    };
    cast.framework.media.util.Ps = function (a, b, c, d, e) {
        c = zw(d || a.contentUrl || a.contentId, a.contentType, c, a.hlsSegmentFormat, a.hlsVideoSegmentFormat);
        c.media = a;
        c.startTime = b;
        e && (c.tracksInfo = e);
        return c;
    };
    cast.framework.media.util.Os = function (a, b) {
        b = zw(String(a.contentUrl || a.contentId), a.contentType, b, a.hlsSegmentFormat);
        b.breakClip = a;
        return b;
    };
    var Cw = _.B('cast.framework.timeline.StitchingTimeline');
    _.r(Aw, Hv);
    Aw.prototype.Ge = function (a, b) {
        for (var c = a.l, d = a.o, e = 0, f = 0; f < d; f++) {
            const g = this.Qb(c.breakClipIds[f]);
            g && g.duration && (e += g.duration);
        }
        b = new Ue(e + b, b);
        Ev(a, b);
        return b;
    };
    Aw.prototype.Me = function (a) {
        return a;
    };
    Aw.prototype.Td = function (a) {
        return a;
    };
    _.r(Hw, cast.framework.media.Player);
    _.h = Hw.prototype;
    _.h.setPlaybackRate = function (a) {
        this.Ma = a || 1;
        return this.A.breakStatus ? _.H() : cast.framework.media.Player.prototype.setPlaybackRate.call(this, a);
    };
    _.h.Di = function (a) {
        const b = this;
        _.G(Jw, 'endInternal()');
        const c = [];
        this.j && ($v(this, 'BREAK_ENDED', null, a), cw(this, this.fg), c.push(this.j.end(a)), this.j = null);
        this.o && (this.o.cancel('Main video ends'), this.o = null);
        this.F && (c.push(this.F.then(function (d) {
            if (d) return d.end(a);
        })), this.F = null);
        be(c).then(function () {
            b.I.resolve();
        });
    };
    _.h.re = function (a, b) {
        const c = this;
        _.G(Jw, `seek: ${a}`);
        return he(dw(this, a).then(function (d) {
            if (d && (a = d.seekTo, d.breaks && d.breaks.length > 0 && (d = Ov(c.timeline, d), d.breakClipIds.length > 0))) return Mw(c, d, a, b);
            _.G(Jw, 'No seek break.');
            return !1;
        }), function () {
            _.G(Jw, 'Fail to create seek clip');
            return !1;
        }).then(function (d) {
            if (!d) {
                d = a;
                if (d >= c.A.endTime || d < c.A.startTime) Iw(c), c.A.endTime = Dw(c.R, d), Ow(c, c.A);
                c.A.startTime = d;
                c.j.seek(d, b);
            }
        });
    };
    _.h.Wh = function () {
        return this.j.end('SKIPPED');
    };
    _.h.uf = function () {
        this.ia = mv(kv.M(), this.D).then(function (a) {
            a.preloadContent();
            return a;
        });
    };
    _.h.Ye = function (a) {
        const b = this;
        const c = this.D.startTime || 0;
        return Ew(this.R, c, this.D).then(function (d) {
            if (d.breakStatus) {
                const e = Rw(b);
                let f; const
                    g = Kw(b, d).then(function (k) {
                        f = k;
                        k.preloadContent();
                    });
                b.H = c;
                ae([e, g]).then(function () {
                    return Lw(b, f, d, a);
                });
                return e;
            }
            return (b.ia || Kw(b, d)).then(function (k) {
                return Lw(b, k, d, a).then(function () {
                    Qw(b, k);
                });
            });
        });
    };
    _.h.ta = function () {
        return this.wa;
    };
    _.h.editTracksInfo = function (a) {
        return this.l || !this.j ? null : hu(this.j, cast.framework.N.Ij(a));
    };
    _.h.hd = function (a) {
        if (!this.l && this.j) return this.j.hd(a) || void 0;
    };
    _.h.Ug = function () {
        return this.Ca;
    };
    _.h.getMediaCategory = function () {
        return cast.framework.N.Mk(this.La);
    };
    _.h.Ne = function () {
        return this.H !== null ? this.H : this.jb();
    };
    _.h.We = function () {
        return this.o ? !1 : cast.framework.media.Player.prototype.We.call(this);
    };
    _.h.Mm = function () {
        _.G(Jw, 'clip started');
        this.B < 4 && Zv(this);
        const a = this.A.breakStatus;
        if (a) {
            const b = this.j.getDurationSec();
            a.j.duration = b;
            this.ra = !0;
            $v(this, 'BREAK_CLIP_STARTED', a);
        } else this.H = null;
    };
    _.h.fg = function (a) {
        const b = this;
        _.G(Jw, 'clip ended');
        this.O = a.endedReason;
        this.L = this.ib() || void 0;
        let c = null;
        this.A.breakStatus ? c = he(_.H(this.o), function () {
            return null;
        }).then(function (d) {
            d && d.breakStatus || (_.G(Jw, `onClipEnded_: ${d ? 'Next clip is not a break clip' : 'No next clip'}`), $v(b, 'BREAK_ENDED', null, b.O, b.L), b.O = void 0, b.L = void 0);
        }) : (this.H = this.j.getCurrentTimeSec(), this.j.qa && (this.Pa = this.j.qa || null));
        _.H(c).then(function () {
            return b.B < 5 ? Pw(b) : !1;
        }).then(function (d) {
            d && (_.G(Jw, 'breakList player ends since there is no more player to switch to'),
            aw(b, a));
        });
    };
    _.h.rf = function (a) {
        this.A.breakStatus ? _.G(Jw, 'player event: break clip error') : cast.framework.media.Player.prototype.rf.call(this, a);
    };
    _.h.Rc = function (a) {
        let b = this.j.getDurationSec();
        cast.framework.media.Player.prototype.Rc.call(this, a);
        a = this.jb();
        const c = this.j.getBufferedRanges();
        if (c.length >= 1) {
            const d = c.length - 1;
            const e = c[d].end;
            b = Math.min(this.A.endTime, b);
            c[d].start <= a && e >= b && this.na.resolve();
        }
        a >= this.A.endTime && this.j.end('BREAK_SWITCH');
    };
    _.h.bi = function (a) {
        cast.framework.media.Player.prototype.bi.call(this, a);
        this.l && (a.currentTime = this.l.getPosition());
    };
    var Jw = _.B('StitchingPlayer');
    cast.framework.media.wq = Hw;
    _.h = P.prototype;
    _.h.Et = function (a) {
        Zw(this);
        this.da = a.isBuffering;
        this.broadcastStatus(!1);
    };
    _.h.getStats = function () {
        Zw(this);
        const a = {};
        a.bufferingTime = this.ia;
        a.playTime = this.Aa;
        if (!this.D) return a;
        let b = Object;
        let c = b.assign;
        let d = this.D.getVideoPlaybackQuality && this.D.getVideoPlaybackQuality();
        c.call(b, a, d ? {
            droppedFrames: d.droppedVideoFrames,
            decodedFrames: d.totalVideoFrames,
            height: this.D.videoHeight,
            width: this.D.videoWidth,
        } : this.D.webkitDecodedFrameCount ? {
            droppedFrames: this.D.webkitDroppedFrameCount,
            decodedFrames: this.D.webkitDecodedFrameCount,
            height: this.D.videoHeight,
            width: this.D.videoWidth,
        } : {});
        if (!this.j) return a;
        b = Object;
        c = b.assign;
        d = this.j;
        d = d.j ? d.j.eg() : {};
        c.call(b, a, d);
        return a;
    };
    _.h.gu = function () {
        Ef(cast.framework.common.analytics.K.REQUEST_PRECACHE);
    };
    _.h.Ak = function (a) {
        this.fa = a;
    };
    _.h.Fs = function () {
        return this.fa;
    };
    _.h.Hs = function () {
        return this.G;
    };
    _.h.Is = function () {
        return this.R;
    };
    _.h.Js = function () {
        return this.ba;
    };
    _.h.us = function () {
        return this.V;
    };
    _.h.Ms = function () {
        return this.H;
    };
    _.h.Ls = function () {
        return this.ca;
    };
    _.h.ws = function () {
        return this.O;
    };
    _.h.Nt = function () {
        Zw(this);
        this.da = !1;
        this.j = null;
        this.T = !1;
        this.V.reset();
        this.H.reset();
        this.O.reset();
    };
    _.h.eu = function () {
        let a = this.j.getPlaybackRate();
        this.ib() === null && this.G !== a && (this.G = a, a = this.j.getPlaybackRate(), this.o.D = a, this.broadcastStatus(!1));
    };
    _.h.Jt = function () {
        if (this.j && this.T) {
            const a = this.Bb();
            const b = this.getDurationSec();
            a.duration !== b && (a.duration = b, this.xd(a, !0));
        }
    };
    _.h.ou = function () {
        if (this.j && this.T) {
            const a = this.H.getTracksInfo();
            a && Qk(this.o, cast.framework.N.yc(a));
        }
    };
    _.h.ju = function (a) {
        this.W = a.credentials;
        return new Xi();
    };
    _.h.Kt = function (a) {
        const b = new Xq();
        b.media = new Wq();
        b.autoplay = !0;
        b.media.entity = a.entity;
        this.W && (b.credentials = this.W, b.credentialsType = 'cloud');
        if (void 0 !== a.shuffle) {
            Bf(cast.framework.common.analytics.K.SHUFFLE, a.shuffle);
            const c = new tr();
            a.shuffle ? (c.repeatMode = 'REPEAT_ALL_AND_SHUFFLE', c.shuffle = !0) : (c.repeatMode = 'REPEAT_OFF', c.shuffle = !1);
            b.queueData = c;
        }
        b.loadOptions = cast.framework.N.Tr(a.loadOptions);
        return this.load(b).then(function () {
            return new Xi();
        }, function (d) {
            let e = 'APP_ERROR';
            d && d.reason && _.ob(BA,
                d.type) && (e = d.reason);
            return new Ji(e);
        });
    };
    _.h.Nm = function (a) {
        K(cast.framework.common.analytics.K.ERROR, a.detailedErrorCode || 0);
    };
    _.h.addEventListener = function (a, b) {
        const c = this;
        if (typeof b !== 'function') throw _.D(Vw, 'addEventListener failed since handler is not a function'), Error('addEventListener failed since handler is not a function');
        Array.isArray(a) ? a.forEach(function (d) {
            ax(c, d, b);
        }) : ax(this, a, b);
    };
    _.h.removeEventListener = function (a, b) {
        const c = this;
        Array.isArray(a) ? a.forEach(function (d) {
            bx(c, d, b);
        }) : bx(this, a, b);
    };
    _.h.Tc = function (a, b) {
        const c = this;
        let d = null;
        _.ob(XB, a) ? b != null && typeof b !== 'function' && (d = `setMessageInterceptor(${a}) failed since handler is not a function`) : d = `setMessageInterceptor(${a}) failed due to invalid request type`;
        if (d) throw _.D(Vw, d), Error(d);
        K(cast.framework.common.analytics.K.wn, cast.framework.common.analytics.Cs(a));
        const e = b && dx(b);
        switch (a) {
            case 'MEDIA_STATUS':
                this.wa = e;
                break;
            case 'CLOUD_STATUS':
                this.L.promise.then(function () {
                    return c.o.fi = e;
                });
                break;
            case 'GET_STATUS':
            case 'LOAD':
            case 'PAUSE':
            case 'STOP':
            case 'PLAY':
            case 'PLAY_AGAIN':
            case 'SEEK':
            case 'SET_PLAYBACK_RATE':
            case 'SET_VOLUME':
            case 'SKIP_AD':
            case 'EDIT_TRACKS_INFO':
            case 'EDIT_AUDIO_TRACKS':
            case 'PRECACHE':
            case 'PRELOAD':
            case 'QUEUE_LOAD':
            case 'QUEUE_INSERT':
            case 'QUEUE_UPDATE':
            case 'QUEUE_REMOVE':
            case 'QUEUE_REORDER':
            case 'QUEUE_GET_ITEM_RANGE':
            case 'QUEUE_GET_ITEMS':
            case 'QUEUE_GET_ITEM_IDS':
            case 'STORE_SESSION':
            case 'RESUME_SESSION':
                b = e && this.yv.bind(this, a, e);
                if (a == 'LOAD') {
                    d = Fs(this.l, DC.LOAD);
                    const f = Fs(this.l, DC.PRELOAD);
                    const g = Fs(this.l, DC.PRECACHE);
                    f && f !== d || this.l.Tc(DC.PRELOAD, b);
                    g && g !== d || this.l.Tc(DC.PRECACHE, b);
                }
                this.l.Tc(DC[a], b);
                break;
            case 'SET_CREDENTIALS':
            case 'LOAD_BY_ENTITY':
            case 'DISPLAY_STATUS':
            case 'FOCUS_STATE':
            case 'CUSTOM_COMMAND':
                this.F.Tc(a, e && this.Xk.bind(this, a, e));
                break;
            case 'SESSION_STATE':
                this.Ca = e;
                break;
            case 'USER_ACTION':
                this.F.Tc(a, e && this.Xk.bind(this, a, e));
                var k = e && this.tv.bind(this, e);
                this.L.promise.then(function () {
                    return c.o.ei = k;
                });
                break;
            default:
                throw d = `Unknown message type - ${a}`, _.D(Vw, d), Error(d);
        }
    };
    _.h.tv = function (a, b) {
        const c = this;
        this.Zg(b);
        let d = null;
        try {
            d = a(cast.framework.N.Fj(b.data));
        } catch (e) {
            throw _.D(Vw, `UserAction Interceptor Exception ${e}`), cx(this, b), e;
        }
        Promise.resolve(d).then(function (e) {
            if (e && _.ob(hx, e.type)) return Promise.reject(e);
            c.broadcastStatus(!0, b.data.requestId);
        }).then(function () { }, function (e) {
            _.D(Vw, `UserAction failed ${e}`);
            cx(c, b);
            if (e instanceof Error) throw e;
        });
    };
    _.h.yv = function (a, b, c) {
        function d(k) {
            a == 'LOAD' ? (e.o.Xf(null, k), e.A.dispatchEvent(new Rs(905, k)), gx(e, c.data.requestId, k)) : cx(e, c, k.type, k.reason, k.customData);
        }
        var e = this;
        if (this.na) {
            var f = this.Og();
            if (!cast.framework.common.Eh.Tk(c, f)) return sx(this, c), Promise.resolve(null);
        }
        f = null;
        const g = c.data && c.data.requestId;
        try {
            f = b(cast.framework.N.Fj(c.data));
        } catch (k) {
            throw d(k), k;
        }
        return Promise.resolve(f).then(function (k) {
            if (!k) return fx(e, c.data.requestId), null;
            if (k && _.ob(hx, k.type)) return d(k), null;
            g && g
                !== k.requestId && (_.F(Vw, `${c.type} Interceptor changed requestId, using original requestId`), k.requestId = g);
            c.data = k;
            return c;
        }).catch(function (k) {
            k && _.ob(hx, k.type) || _.D(Vw, `${a} Interceptor Error ${k}`);
            d(k);
            if (k instanceof Error) throw k;
            return null;
        });
    };
    _.h.Xk = function (a, b, c) {
        function d(f) {
            a === 'LOAD_BY_ENTITY' && e.A.dispatchEvent(new Rs(905, f));
        }
        var e = this;
        b = b(c);
        return Promise.resolve(b).then(function (f) {
            return f ? _.ob(BA, f.type) ? (d(f), new Ji(f.reason || 'APP_ERROR', void 0, f.customData || void 0)) : f : new Xi();
        }, function (f) {
            let g = 'APP_ERROR';
            f && f.reason && _.ob(BA, f.type) && (g = f.reason, d(f));
            return new Ji(g, void 0, f.customData || void 0);
        });
    };
    _.h.Gu = function (a) {
        a != null && typeof a !== 'function' ? _.D(Vw, "setMediaPlaybackInfoHandler() cannot set handler since it's not a function") : this.ra = a;
    };
    _.h.Hu = function (a) {
        a != null && typeof a !== 'function' ? _.D(Vw, "setMediaUrlHandler() cannot set handler since it's not a function") : this.xa = a;
    };
    _.h.Ch = function (a, b) {
        return this.B.Ch(a, b).then(function (c) {
            let d = null;
            c.type == 'ERROR' && (d = new Tq('ERROR'), d.reason = c.code);
            return d;
        });
    };
    _.h.Jh = function () {
        return this.B.Jh().then(function (a) {
            if (a.type == 'ERROR') {
                const b = new Tq('ERROR');
                b.reason = a.code;
                return Promise.reject(b);
            }
        });
    };
    _.h.Ib = function (a) {
        const b = this;
        !this.j && this.o && (this.qa = _.H(a), this.qa.then(function (c) {
            b.D = c;
            b.o.Ib(c);
            b.O.Ib(c);
            try {
                RB.F = c;
            } catch (d) {
                _.D(Vw, 'debug overlay update failed', d);
            }
        }));
    };
    _.h.Bb = function () {
        return this.o ? cast.framework.N.Vr(this.o.Bb()) : null;
    };
    _.h.xd = function (a, b) {
        this.o && (this.j && Wv(this.j, cast.framework.N.xc(a)), this.o.xd(cast.framework.N.xc(a), b), this.A.dispatchEvent(new $s(a)));
    };
    _.h.lc = function () {
        return this.o ? this.o.lc() : (_.D(Vw, 'getSupportedMediaCommands should not be called before CastReceiverContext#start'), 0);
    };
    _.h.Og = function () {
        if (!this.o) return _.D(Vw, 'getCurrentSupportedMediaCommands should not be called before CastReceiverContext#start'), 0;
        let a = this.o.lc();
        this.j && (a = Vv(this.j, a));
        return a;
    };
    _.h.ee = function (a, b) {
        const c = this;
        b = void 0 === b ? !0 : b;
        this.L.promise.then(function () {
            return c.o.ee(a, b);
        });
    };
    _.h.sg = function (a, b) {
        const c = this;
        b = void 0 === b ? !0 : b;
        this.L.promise.then(function () {
            return c.o.sg(a, b);
        });
    };
    _.h.Lh = function (a, b) {
        const c = this;
        b = void 0 === b ? !0 : b;
        this.L.promise.then(function () {
            return c.o.Lh(a, b);
        });
    };
    _.h.broadcastStatus = function (a, b, c, d) {
        this.o && this.o.broadcastStatus(void 0 === a ? !1 : a, b, c, d);
    };
    _.h.Df = function (a, b, c, d, e) {
        this.o && this.o.Df(a, b, void 0 === c ? !1 : c, d, e);
    };
    _.h.vu = function (a) {
        this.o && (this.o.B.send('*:*', new Vq(a)), this.A.dispatchEvent(new Ws(a)));
    };
    _.h.Rh = function (a) {
        this.o && this.o.Rh(cast.framework.N.Yu(a));
    };
    _.h.Ha = function (a, b, c, d, e) {
        this.o && this.o.Ha(a, b, cast.framework.N.Xu(c), cast.framework.N.Wu(void 0 === d ? null : d), void 0 === e ? null : e);
    };
    _.h.getCurrentTimeSec = function () {
        return this.j ? this.j.Ne() : 0;
    };
    _.h.jb = function () {
        return this.j ? this.j.jb() : 0;
    };
    _.h.getStartAbsoluteTime = function () {
        return this.j ? this.j.getStartAbsoluteTime() : null;
    };
    _.h.ns = function (a) {
        const b = this.getStartAbsoluteTime();
        return b === null ? null : a + b;
    };
    _.h.Bs = function (a) {
        const b = this.getStartAbsoluteTime();
        return b === null ? null : a - b;
    };
    _.h.getPlayerState = function () {
        return this.j ? cast.framework.N.Xr(this.j.getState()) : 'IDLE';
    };
    _.h.getDurationSec = function () {
        return this.j ? this.j.V : NaN;
    };
    _.h.ib = function () {
        return this.O.ib();
    };
    _.h.getPlaybackRate = function () {
        return this.o ? this.o.getPlaybackRate() : 1;
    };
    _.h.Ec = function () {
        return this.O.Ec();
    };
    _.h.getBreaks = function () {
        return this.j ? this.j.timeline.j : [];
    };
    _.h.getLiveSeekableRange = function () {
        return this.j ? this.j.getLiveSeekableRange() : null;
    };
    _.h.kb = function () {
        return this.j ? this.j.kb() : null;
    };
    _.h.Ic = function () {
        return this.j ? this.j.Ic() : [];
    };
    _.h.load = function (a) {
        const b = this;
        const c = ex(this, a);
        this.L.promise.then(function () {
            return b.o.load(cast.framework.N.Zu(a));
        });
        return c;
    };
    _.h.pause = function () {
        this.Hb(new N('PAUSE'));
    };
    _.h.play = function () {
        this.Hb(new N('PLAY'));
    };
    _.h.seek = function (a) {
        const b = new dr();
        b.currentTime = a;
        this.Hb(b);
    };
    _.h.stop = function () {
        this.Hb(new N('STOP'));
    };
    _.h.Hb = function (a) {
        const b = this;
        this.L.promise.then(function () {
            return b.o.Hb(cast.framework.N.dv(a));
        });
    };
    _.h.Iu = function (a) {
        const b = kv.M();
        Ef(cast.framework.common.analytics.K.hp);
        b.j = a;
    };
    _.h.Qt = function (a) {
        const b = this;
        _.G(Vw, 'MediaManagerLoad');
        const c = cast.framework.N.Ur(a.data);
        const d = c.media;
        (a = mb(c, 'queueData', 'items')) && K(cast.framework.common.analytics.K.QUEUE_ITEMS, a.length);
        a = this.Pa;
        const e = de();
        this.Pa = e.promise;
        let f; let g = null;
        let k = !1;
        a = a.then(function () {
            if (b.j) {
                Zw(b);
                const m = b.j;
                b.j = null;
                b.V.reset();
                b.H.reset();
                b.da = !1;
                b.T = !1;
                return m.end('INTERRUPTED');
            }
        });
        const l = this.o;
        d != l.Bb() && this.xd(d, !0);
        he(a.then(function () {
            b.J && gx(b, b.J);
            b.J = c.requestId;
            d && (d.contentUrl || d.contentId) ? b.I && b.I.bb
                == (d.contentUrl || d.contentId) ? (f = _.H(b.I), b.I = null) : f = ox(b, c) : (_.D(Vw, 'LoadRequest data was corrupted'), f = Yd());
            return f;
        }).then(function (m) {
            e.resolve();
            g = m;
            l.Ib(m);
            m.Da.Gf(b.A);
            Zw(b);
            b.j = m;
            return b.qa;
        }).then(function (m) {
            const n = void 0 !== c.autoplay ? c.autoplay : !0;
            b.G = c.playbackRate || b.G;
            b.A.dispatchEvent(new Zs('PLAYER_LOADING', d));
            k = !0;
            return Uv(b.j, m, n, b.G);
        }).then(function () {
            if (b.J === c.requestId && b.j === g) {
                b.V.j = b.j;
                b.H.j = b.j;
                const m = b.j.ta();
                m && Pk(l, cast.framework.N.yc(m.getTracksInfo()));
                Tk(l, b.j.getPlaybackRate());
                fx(b, b.J);
                qx(b, !0);
                Wv(b.j, cast.framework.N.xc(d));
                b.T = !0;
                b.A.dispatchEvent(new Zs('PLAYER_LOAD_COMPLETE', d));
                kx(b);
                nx(b);
                Zw(b);
                ys(b.ca);
                xs(b.ca, !1);
                zk(l);
                b.j.Da.addEventListener('ERROR', function (n) {
                    Ek(b.o, n);
                });
            }
        }), function (m) {
            m && m.message && _.D(Vw, `Load failed: ${m.message}`);
            e.resolve();
            k || (Hk(l, 'LOAD_FAILED', m && m.customData, m && m.reason), b.A.dispatchEvent(new Xs(void 0, 'ERROR')));
            K(cast.framework.common.analytics.K.cn, cast.framework.common.analytics.Ns(m && m.reason) || 0);
            b.A.dispatchEvent(new Rs(905, m));
        });
    };
    _.h.Ut = function (a) {
        const b = this;
        const c = cast.framework.N.Yr(a.data);
        const d = c.media;
        if (!d || !d.contentUrl && !d.contentId) return _.D(Vw, 'PreloadRequest data was corrupted'), !1;
        this.I ? (a = this.I.end('STOPPED'), this.I = null) : a = _.H();
        a.then(function () {
            return ox(b, c);
        }).then(function (e) {
            b.A.dispatchEvent(new Zs('PLAYER_PRELOADING', d));
            b.I = e;
            e.preloadContent(c.activeTrackIds || void 0);
        }, function () {
            _.D(Vw, 'Cannot create player on preload');
        });
        return !0;
    };
    _.h.Pt = function () {
        this.A.dispatchEvent(new Zs('PLAYER_PRELOADING_CANCELLED'));
        return !0;
    };
    _.h.Vt = function (a) {
        const b = this;
        if (this.j) {
            const c = a.data;
            const d = void 0 !== c.relativeTime ? this.getCurrentTimeSec() + c.relativeTime : Number(c.currentTime);
            Promise.resolve(this.j.seek(d, c.resumeState)).then(function () {
                b.broadcastStatus(!1, c.requestId);
            }, function (e) {
                jx(b, a, e);
            });
        } else cx(this, a, 'INVALID_PLAYER_STATE');
    };
    _.h.It = function (a) {
        const b = this;
        this.j && this.j.bi(a);
        a && !a.breakStatus && ['PLAYING', 'PAUSED'].includes(a.playerState) && qx(this, !1);
        let c = a;
        this.wa && (c = this.wa(a));
        return Promise.resolve(c).then(function (d) {
            d = rb(d);
            px(d);
            b.A.dispatchEvent(new Vs(cast.framework.N.Wr(d)));
            return d;
        });
    };
    _.h.Xt = function (a) {
        const b = this;
        this.j ? this.j.skipAd().then(function () {
            b.broadcastStatus(!1, a.data.requestId);
        }, function (c) {
            jx(b, a, c);
        }) : cx(this, a, 'INVALID_PLAYER_STATE');
    };
    _.h.Rt = function (a) {
        gx(this, this.J, a);
    };
    _.h.Tt = function (a) {
        const b = this;
        if (this.j) {
            if (this.j.isLiveStream()) {
                const c = this.j.getLiveSeekableRange();
                const d = this.lc();
                const e = this.getCurrentTimeSec();
                let f = e;
                c ? d & 2 ? e < c.start && (_.G(Vw, `seek to seekable range start ${c.start}`), f = c.start) : (_.G(Vw, 'SEEK command is not supported. Jump to live head'), f = Infinity) : (_.G(Vw, 'No seekable range. Jump to live head'), f = Infinity);
                if (f !== e) {
                    this.j.seek(f, 'PLAYBACK_START').then(function () {
                        b.broadcastStatus(!1, a.data.requestId);
                    }, function (g) {
                        jx(b, a, g);
                    });
                    return;
                }
            }
            this.j.play().then(function () {
                b.broadcastStatus(!1,
                    a.data.requestId);
            }, function (g) {
                jx(b, a, g);
            });
        } else cx(this, a, 'INVALID_PLAYER_STATE');
    };
    _.h.St = function (a) {
        const b = this;
        this.j ? this.j.pause().then(function () {
            b.broadcastStatus(!1, a.data.requestId);
        }, function (c) {
            jx(b, a, c);
        }) : cx(this, a, 'INVALID_PLAYER_STATE');
    };
    _.h.Wt = function (a) {
        const b = this;
        if (this.j) {
            let c = a.data;
            c = c.playbackRate ? c.playbackRate : this.j.getPlaybackRate() * c.relativePlaybackRate;
            this.j.setPlaybackRate(Number(c)).then(function () {
                b.G = b.j.getPlaybackRate();
                b.o.D = b.G;
                b.broadcastStatus(!1, a.data.requestId);
            }, function (d) {
                jx(b, a, d);
            });
        } else cx(this, a, 'INVALID_PLAYER_STATE');
    };
    _.h.ku = function (a) {
        const b = this;
        let c = this.Bb();
        if (c) {
            let d = new Xq();
            let e = Ge();
            d.autoplay = e || this.getPlayerState() !== 'PAUSED';
            d.media = c;
            d.media && this.j && (c = this.j.timeline.J, e = _.qb(d.media), e.breaks = c.breaks, e.breakClips = c.breakClips, d.media = e);
            d.playbackRate = this.getPlaybackRate();
            d.currentTime = this.getCurrentTimeSec();
            if (c = this.getLiveSeekableRange()) d.currentTime -= c.end;
            d.activeTrackIds = nk(this.o) || void 0;
            if (c = ok(this.o)) {
                if (e = c.B) { d.queueData = _.qb(e), c = c.Sd(), c >= 0 && (d.queueData.startIndex = c, d.queueData.startTime = d.currentTime); }
            }
            d.customData = mk(this.o);
            c = new nr();
            c.loadRequestData = d;
            d = c;
            this.Ca && (d = this.Ca(c));
            Promise.resolve(d).then(function (f) {
                if (f) {
                    const g = b.o;
                    const k = a.senderId;
                    const l = a.data.requestId;
                    (f = cast.framework.N.ev(f)) ? (qd(M, ud, `Sending SessionState in StoreSessionResponse.\n         SessionState=${JSON.stringify(f)}`), qd(M, Ak, `Sending store session response message to ${k}`), f = new hl(f), f.requestId = l, g.B.send(k, f)) : _.D(M, 'Cannot send store session response. Miss SessionState object.');
                } else cx(b, a, 'ERROR', 'NOT_SUPPORTED');
            },
            function () {
                cx(b, a, 'ERROR', 'APP_ERROR');
            });
        } else _.D(Vw, 'No media is being played on StoreSession'), cx(this, a, 'INVALID_PLAYER_STATE');
    };
    _.h.hu = function (a) {
        const b = cast.framework.N.es(a.data);
        b.sessionState.loadRequestData ? (a = b.sessionState.loadRequestData, a.requestId = b.requestId, this.W && (a.credentials = this.W, a.credentialsType = 'cloud'), this.load(a)) : cx(this, a, 'INVALID_REQUEST');
    };
    _.h.Zg = function (a) {
        let b = a.type;
        b = Xw[a.type] || Yw[b];
        switch (b) {
            case 'REQUEST_LOAD':
            case 'REQUEST_LOAD_BY_ENTITY':
            case 'REQUEST_SKIP_AD':
            case 'REQUEST_SEEK':
            case 'REQUEST_PLAY':
            case 'REQUEST_PAUSE':
            case 'REQUEST_STOP':
            case 'REQUEST_PLAYBACK_RATE_CHANGE':
            case 'REQUEST_PLAY_AGAIN':
            case 'REQUEST_VOLUME_CHANGE':
            case 'REQUEST_QUEUE_LOAD':
            case 'REQUEST_QUEUE_INSERT':
            case 'REQUEST_QUEUE_UPDATE':
            case 'REQUEST_QUEUE_REMOVE':
            case 'REQUEST_QUEUE_REORDER':
            case 'REQUEST_USER_ACTION':
                this.Ma = Date.now();
        }
        this.A.dispatchEvent(new Ys(b,
            _.qb(a.data), a.senderId));
    };
    _.h.Hf = function (a) {
        this.O.Hf(a);
    };
    _.h.ac = function (a, b) {
        if (this.na) {
            const c = this.Og();
            if (!cast.framework.common.Eh.Tk(b, c)) {
                sx(this, b);
                return;
            }
        }
        a(b);
    };
    _.w('cast.framework.PlayerManager', P);
    P.prototype.setPlayerFactory = P.prototype.Iu;
    P.prototype.sendLocalMediaRequest = P.prototype.Hb;
    P.prototype.stop = P.prototype.stop;
    P.prototype.seek = P.prototype.seek;
    P.prototype.play = P.prototype.play;
    P.prototype.pause = P.prototype.pause;
    P.prototype.load = P.prototype.load;
    P.prototype.getTimedMetadata = P.prototype.Ic;
    P.prototype.getRawSeekableRange = P.prototype.kb;
    P.prototype.getLiveSeekableRange = P.prototype.getLiveSeekableRange;
    P.prototype.getBreaks = P.prototype.getBreaks;
    P.prototype.getBreakClipDurationSec = P.prototype.Ec;
    P.prototype.getPlaybackRate = P.prototype.getPlaybackRate;
    P.prototype.getBreakClipCurrentTimeSec = P.prototype.ib;
    P.prototype.getDurationSec = P.prototype.getDurationSec;
    P.prototype.getPlayerState = P.prototype.getPlayerState;
    P.prototype.getMediaTimeForAbsoluteTime = P.prototype.Bs;
    P.prototype.getAbsoluteTimeForMediaTime = P.prototype.ns;
    P.prototype.getStartAbsoluteTime = P.prototype.getStartAbsoluteTime;
    P.prototype.getRawCurrentTimeSec = P.prototype.jb;
    P.prototype.getCurrentTimeSec = P.prototype.getCurrentTimeSec;
    P.prototype.sendError = P.prototype.Ha;
    P.prototype.setIdleReason = P.prototype.Rh;
    P.prototype.sendCustomState = P.prototype.vu;
    P.prototype.sendStatus = P.prototype.Df;
    P.prototype.broadcastStatus = P.prototype.broadcastStatus;
    P.prototype.removeSupportedMediaCommands = P.prototype.Lh;
    P.prototype.addSupportedMediaCommands = P.prototype.sg;
    P.prototype.setSupportedMediaCommands = P.prototype.ee;
    P.prototype.getCurrentSupportedMediaCommands = P.prototype.Og;
    P.prototype.getSupportedMediaCommands = P.prototype.lc;
    P.prototype.setMediaInformation = P.prototype.xd;
    P.prototype.getMediaInformation = P.prototype.Bb;
    P.prototype.setMediaElement = P.prototype.Ib;
    P.prototype.refreshCredentials = P.prototype.Jh;
    P.prototype.playString = P.prototype.Ch;
    P.prototype.setMediaUrlResolver = P.prototype.Hu;
    P.prototype.setMediaPlaybackInfoHandler = P.prototype.Gu;
    P.prototype.setMessageInterceptor = P.prototype.Tc;
    P.prototype.removeEventListener = P.prototype.removeEventListener;
    P.prototype.addEventListener = P.prototype.addEventListener;
    P.prototype.getBreakManager = P.prototype.ws;
    P.prototype.getQueueManager = P.prototype.Ls;
    P.prototype.getTextTracksManager = P.prototype.Ms;
    P.prototype.getAudioTracksManager = P.prototype.us;
    P.prototype.getPreferredTextStyle = P.prototype.Js;
    P.prototype.getPreferredTextLanguage = P.prototype.Is;
    P.prototype.getPreferredPlaybackRate = P.prototype.Hs;
    P.prototype.getPlaybackConfig = P.prototype.Fs;
    P.prototype.setPlaybackConfig = P.prototype.Ak;
    P.prototype.getStats = P.prototype.getStats;
    var Vw = _.B('cast.framework.PlayerManager');
    const EC = {};
    var DC = (EC.GET_STATUS = 'getstatus', EC.LOAD = 'load', EC.PAUSE = 'pause', EC.STOP = 'stop', EC.PLAY = 'play', EC.SKIP_AD = 'skipad', EC.PLAY_AGAIN = 'playagain', EC.SEEK = 'seek', EC.SET_PLAYBACK_RATE = 'setplaybackrate', EC.SET_VOLUME = 'setvolume', EC.EDIT_TRACKS_INFO = 'edittracksinfo', EC.EDIT_AUDIO_TRACKS = 'editaudiotracks', EC.PRECACHE = 'precache', EC.PRELOAD = 'preload', EC.QUEUE_LOAD = 'queueload', EC.QUEUE_INSERT = 'queueinsert', EC.QUEUE_UPDATE = 'queueupdate', EC.QUEUE_REMOVE = 'queueremove',
    EC.QUEUE_REORDER = 'queuereorder', EC.QUEUE_GET_ITEM_RANGE = 'getitemsrange', EC.QUEUE_GET_ITEMS = 'getitemsinfo', EC.QUEUE_GET_ITEM_IDS = 'getqueueids', EC.USER_ACTION = 'useraction', EC.STORE_SESSION = 'storesession', EC.RESUME_SESSION = 'resumesession', EC);
    const FC = {};
    var Xw = (FC.load = 'REQUEST_LOAD', FC.stop = 'REQUEST_STOP', FC.pause = 'REQUEST_PAUSE', FC.precache = 'REQUEST_PRECACHE', FC.play = 'REQUEST_PLAY', FC.skipad = 'REQUEST_SKIP_AD', FC.playagain = 'REQUEST_PLAY_AGAIN', FC.seek = 'REQUEST_SEEK', FC.setplaybackrate = 'REQUEST_PLAYBACK_RATE_CHANGE',
    FC.setvolume = 'REQUEST_VOLUME_CHANGE', FC.edittracksinfo = 'REQUEST_EDIT_TRACKS_INFO', FC.editaudiotracks = 'REQUEST_EDIT_AUDIO_TRACKS', FC.queueload = 'REQUEST_QUEUE_LOAD', FC.queueinsert = 'REQUEST_QUEUE_INSERT', FC.queueupdate = 'REQUEST_QUEUE_UPDATE', FC.queueremove = 'REQUEST_QUEUE_REMOVE', FC.queuereorder = 'REQUEST_QUEUE_REORDER', FC.getitemsrange = 'REQUEST_QUEUE_GET_ITEM_RANGE', FC.getitemsinfo = 'REQUEST_QUEUE_GET_ITEMS', FC.getqueueids = 'REQUEST_QUEUE_GET_ITEM_IDS', FC.useraction = 'REQUEST_USER_ACTION', FC.storesession = 'REQUEST_STORE_SESSION', FC.resumesession = 'REQUEST_RESUME_SESSION', FC);
    const GC = {};
    var Yw = (GC.SET_CREDENTIALS = 'REQUEST_SET_CREDENTIALS', GC.LOAD_BY_ENTITY = 'REQUEST_LOAD_BY_ENTITY', GC.USER_ACTION = 'REQUEST_USER_ACTION', GC.DISPLAY_STATUS = 'REQUEST_DISPLAY_STATUS', GC.CUSTOM_COMMAND = 'REQUEST_CUSTOM_COMMAND', GC.FOCUS_STATE = 'REQUEST_FOCUS_STATE', GC);
    const HC = {};
    var lx = (HC.BUFFERED = 1, HC.LIVE = 2, HC.NONE = 3, HC);
    const IC = {};
    var mx = (IC.VIDEO = 1, IC.AUDIO = 2, IC.IMAGE = 3, IC);
    let JC = null;
    cast.framework.common.ne = {
        Ze(a) {
            JC || (JC = a, K(cast.framework.common.analytics.K.wl, a));
        },
    };
    const KC = {};
    var wx = (KC.no_media = 5, KC.loading = 5, KC.paused = 20, KC);
    const LC = {};
    var xx = (LC.no_media = 2, LC.loading = 4, LC.paused = 3, LC);
    var vx = _.B('IdleTimeoutManager');
    _.h = tx.prototype;
    _.h.start = function () {
        const a = this.o;
        a.addEventListener('ERROR', this.kk.bind(this));
        a.addEventListener('MEDIA_FINISHED', this.kk.bind(this));
        a.addEventListener('PAUSE', this.bu.bind(this));
        a.addEventListener('PLAYER_LOADING', this.au.bind(this));
        a.addEventListener('PLAYER_LOAD_COMPLETE', this.Zt.bind(this));
        a.addEventListener('TIME_UPDATE', this.cu.bind(this));
        yx(this, 'no_media');
    };
    _.h.kk = function () {
        _.vd(vx, 'onPlayerIdle');
        yx(this, 'no_media');
    };
    _.h.bu = function () {
        _.vd(vx, 'onPlayerPaused');
        yx(this, 'paused');
    };
    _.h.au = function () {
        _.vd(vx, 'onPlayerLoading');
        yx(this, 'loading');
    };
    _.h.Zt = function () {
        _.vd(vx, 'onPlayerLoadComplete');
        this.o.getPlayerState() === 'PAUSED' && yx(this, 'paused');
    };
    _.h.cu = function () {
        this.j = null;
        ux(this);
    };
    cast.framework.common.lm = tx;
    cast.framework.C.ha = _.B('cast.framework.ui');
    cast.framework.C.gt = function () {
        if (document.getElementsByTagName('cast-media-player')[0]) {
            const a = document.getElementsByClassName('castSplashScreen')[0];
            cast.framework.C.ht(document.getElementsByClassName('castWelcomeScreen')[0] || a);
        }
    };
    cast.framework.C.ht = function (a) {
        a = void 0 === a ? null : a;
        const b = cast.framework.C.ha;
        a && (_.G(b, 'remove welcome screen'), a.remove());
    };
    _.h = Q.prototype;
    _.h.reset = function () {
        this.j = null;
        this.B = !1;
    };
    _.h.qt = function (a) {
        this.mh(void 0 === a ? !1 : a);
    };
    _.h.mh = function (a, b, c, d, e, f) {
        this.B || (cast.framework.common.Oc.load({
            useLegacyDashSupport: void 0 === a ? !1 : a,
            mplUrl: b,
            shakaUrl: c,
            loadMux: void 0 === d ? !1 : d,
            skipMplLoad: void 0 === e ? !1 : e,
            shakaVersion: f,
        }), this.B = !0);
    };
    _.h.initialize = function () {
        this.j.su && (this.l = this.j.su);
        this.j.Dh && (this.o = this.j.Dh);
        this.j.playbackConfig && this.o.Ak(this.j.playbackConfig);
        this.j.preferredPlaybackRate && (this.o.G = this.j.preferredPlaybackRate);
        this.j.preferredTextLanguage && (this.o.R = this.j.preferredTextLanguage);
        this.j.ru && (this.o.ba = this.j.ru);
        if (this.j.customNamespaces) { for (var a in this.j.customNamespaces) this.j.customNamespaces.hasOwnProperty(a) && Wg(this.l, a, cast.framework.N.Nk(this.j.customNamespaces[a])); }
        this.j.mediaMessageTimeouts
            && (Xg.M().l = this.j.mediaMessageTimeouts);
        this.o.Hf(!!this.j.playWatchedBreak);
        a = this.l;
        a.ia = this.iu.bind(this);
        a.na = this.pu.bind(this);
        a.fa = this.Om.bind(this);
        this.isRemoteControl() || this.j.skipPlayersLoad || (this.mh(this.j.useLegacyDashSupport || this.j.skipShakaLoad, this.j.mplUrl, this.j.shakaUrl, this.j.loadMux, this.j.skipMplLoad, this.j.shakaVersion), Qu(this.j.useShakaPolyfills || void 0 === this.j.useShakaPolyfills));
        this.o.na = !!this.j.enforceSupportedCommands;
    };
    _.h.Gs = function () {
        return this.o;
    };
    _.h.getSenders = function () {
        const a = this;
        return this.l.getSenders().map(function (b) {
            return cast.framework.N.Gj(a.l.Qe(b));
        });
    };
    _.h.Qe = function (a) {
        return cast.framework.N.Gj(this.l.Qe(a));
    };
    _.h.start = function (a) {
        _.G(Ax, 'start');
        a || (a = new qs());
        Ex(this, a);
        let b = {
            addEventListener() { },
            load() { },
            removeAttribute() { },
        };
        a = a.qx || new lk(this.j.mediaElement || b, this.j.supportedCommands || void 0, this.j.localSenderId || void 0);
        void 0 !== this.j.queue && (Ef(cast.framework.common.analytics.K.up), a.Sh(cast.framework.N.Qu(this.j.queue)));
        rx(this.o, a);
        (a = this.j.mediaElement || Gx()) && this.o.Ib(a);
        a = this.j.uiConfig;
        b = Fx();
        fi(this.l, !!(a && a.touchScreenOptimizedApp || this.j.touchScreenOptimizedApp
            || b));
        a && a.disableRemoteControlOptimizedUi && Dh(this.l);
        this.l.start(cast.framework.N.Uu(this.j));
        return this;
    };
    _.h.stop = function () {
        cast.framework.common.ne.Ze(6);
        this.l.stop();
    };
    _.h.isRemoteControl = function () {
        return this.l.isRemoteControl();
    };
    _.h.rc = function () {
        return this.l.rc();
    };
    _.h.Yg = function () {
        return cast.framework.N.ls(this.l.Yg());
    };
    _.h.Wg = function () {
        return cast.framework.N.hs(this.l.Wg());
    };
    _.h.Re = function () {
        return cast.framework.N.js(this.l.Re());
    };
    _.h.kd = function () {
        return cast.framework.N.Rr(this.l.kd());
    };
    _.h.de = function (a) {
        this.l.de(a);
    };
    _.h.Th = function (a) {
        this.l.Th(a);
    };
    _.h.Uh = function (a) {
        this.l.Uh(a);
    };
    _.h.md = function () {
        return cast.framework.N.ks(this.l.md());
    };
    _.h.Ff = function (a) {
        this.l.Ff(a);
    };
    _.h.Eu = function (a) {
        Ef(cast.framework.common.analytics.K.Cp);
        this.A = a;
    };
    _.h.Du = function (a) {
        const b = this;
        a ? this.l.V = function () {
            (new Promise(function (c) {
                c(a());
            })).then(function (c) {
                b.l.ce(c);
            }, function (c) {
                _.D(Ax, `Feedback handler failed ${JSON.stringify(c)}`);
            });
        } : this.l.V = null;
    };
    _.h.ce = function (a) {
        this.l.ce(a);
    };
    _.h.Oh = function (a) {
        this.l.Oh(a);
    };
    _.h.qj = function (a, b) {
        a = Hx(this, a);
        if (typeof b !== 'function') throw Error('listener on custom channel should be a function');
        a.o = b;
    };
    _.h.tu = function (a) {
        Hx(this, a).o = null;
    };
    _.h.uk = function (a, b, c) {
        void 0 === b && (b = '*:*');
        Hx(this, a).send(b, c);
    };
    _.h.iu = function (a) {
        _.G(Ax, 'onSenderDisconnected');
        if (void 0 === a.senderId || void 0 === a.reason) _.G(Ax, 'SenderDisconnectedEvent is corrupted');
        else {
            let b = a.userAgent.split(',');
            const c = this.l.getSenders().length == 0;
            const d = a.reason == 'requested_by_sender';
            const e = b[1];
            b = b[0] == 'iOS CastSDK' && _.Rb(e, '2.2.0') <= 0 && e != '0.0.0';
            c && d && !b && (cast.framework.common.ne.Ze(5), this.A ? this.A(cast.framework.N.gs(a)) : this.stop());
        }
    };
    _.h.pu = function (a) {
        _.G(Ax, 'onVisibilityChanged');
        void 0 === a.isVisible ? _.G(Ax, 'VisibilityChangedEvent is corrupted') : a.isVisible || this.o.getPlayerState() === 'IDLE' || this.o.pause();
    };
    _.h.Om = function () {
        const a = this;
        _.G(Ax, 'onReady');
        this.j.disableIdleTimeout = true;
        this.isRemoteControl() || (this.j.disableIdleTimeout || (new cast.framework.common.lm(this.o, function () {
            return a.stop();
        })).start(), Ix(this));
        cast.framework.C.gt();
    };
    _.h.addEventListener = function (a, b) {
        a === 'feedbackstarted' ? _.F(Ax, 'FEEDBACK_STARTED event is not fired, use setFeedbackHandler instead') : this.l.addEventListener(a, b);
    };
    _.h.removeEventListener = function (a, b) {
        this.l.removeEventListener(a, b);
    };
    _.h.uu = function () {
        this.l.de('');
    };
    _.h.yu = function (a) {
        (a = a.media.metadata) && a.title && this.l.de(`${cast.framework.Y.mo}: ${a.title}`);
    };
    _.h.Fc = function () {
        return this.l.Fc();
    };
    _.h.canDisplayType = function (a, b, c, d, e) {
        return this.l.canDisplayType(a, b, c, d, e);
    };
    _.h.setLoggerLevel = function (a) {
        cast.receiver.tc.zk(a);
    };
    _.h.Ds = function (a) {
        cast.framework.common.analytics.yt(a);
        return cast.receiver.platform.Ra(a);
    };
    _.w('cast.framework.CastReceiverContext', Q);
    Q.getInstance = Kx;
    Q.prototype.getPlatformValue = Q.prototype.Ds;
    Q.prototype.setLoggerLevel = Q.prototype.setLoggerLevel;
    Q.prototype.canDisplayType = Q.prototype.canDisplayType;
    Q.prototype.getDeviceCapabilities = Q.prototype.Fc;
    Q.prototype.removeEventListener = Q.prototype.removeEventListener;
    Q.prototype.addEventListener = Q.prototype.addEventListener;
    Q.prototype.sendCustomMessage = Q.prototype.uk;
    Q.prototype.removeCustomMessageListener = Q.prototype.tu;
    Q.prototype.addCustomMessageListener = Q.prototype.qj;
    Q.prototype.sendSmartDisplayMessage = Q.prototype.Oh;
    Q.prototype.sendFeedbackMessage = Q.prototype.ce;
    Q.prototype.setFeedbackHandler = Q.prototype.Du;
    Q.prototype.setLastSenderDisconnectedHandler = Q.prototype.Eu;
    Q.prototype.setInactivityTimeout = Q.prototype.Ff;
    Q.prototype.getSystemVolume = Q.prototype.md;
    Q.prototype.setSystemVolumeMuted = Q.prototype.Uh;
    Q.prototype.setSystemVolumeLevel = Q.prototype.Th;
    Q.prototype.setApplicationState = Q.prototype.de;
    Q.prototype.getApplicationData = Q.prototype.kd;
    Q.prototype.getSystemState = Q.prototype.Re;
    Q.prototype.getStandbyState = Q.prototype.Wg;
    Q.prototype.getVisibilityState = Q.prototype.Yg;
    Q.prototype.isSystemReady = Q.prototype.rc;
    Q.prototype.isRemoteControl = Q.prototype.isRemoteControl;
    Q.prototype.stop = Q.prototype.stop;
    Q.prototype.start = Q.prototype.start;
    Q.prototype.getSender = Q.prototype.Qe;
    Q.prototype.getSenders = Q.prototype.getSenders;
    Q.prototype.getPlayerManager = Q.prototype.Gs;
    Q.prototype.loadPlayerLibrariesWithOptions = Q.prototype.mh;
    Q.prototype.loadPlayerLibraries = Q.prototype.qt;
    var Jx = null;
    var Ax = _.B('cast.framework.Application');
    var Bx = {
        useLegacyDashSupport: 1,
        loadMux: 2,
        localSenderId: 3,
        mediaElement: 4,
        statusText: 5,
        maxInactivity: 6,
        disableIdleTimeout: 7,
        mplUrl: 8,
        shakaUrl: 9,
        supportedCommands: 10,
        playbackConfig: 11,
        queue: 12,
        customNamespaces: 13,
        versionCode: 14,
        preferredPlaybackRate: 15,
        preferredTextLanguage: 16,
        preferredTextStyle: 17,
        playWatchedBreak: 18,
        uiConfig: 19,
        touchScreenOptimizedApp: 20,
        skipPlayersLoad: 21,
        skipShakaLoad: 22,
        skipMplLoad: 23,
        receiverManager: 24,
        mediaManager: 25,
        playerManager: 26,
        usePlayerBreaks: 27,
        shakaVersion: 28,
        mediaMessageTimeouts: 29,
        enforceSupportedCommands: 30,
        useShakaPolyfills: 31,
        useShakaForHls: 32,
    };
    var Cx = {
        shakaConfig: 1,
        enableUITextDisplayer: 2,
        mplConfig: 3,
    };
    var Dx = {
        initialBandwidth: 1,
        autoResumeDuration: 2,
        autoResumeNumberOfSegments: 3,
        autoPauseDuration: 4,
        segmentRequestRetryLimit: 5,
        mediaElement: 6,
        url: 7,
        licenseUrl: 8,
        decodeContentId: 9,
        protectionSystem: 10,
        licenseCustomData: 11,
        aggressiveStallHandling: 12,
        disableSourceBufferTimeAdjust: 13,
        hlsContentKeyProtection: 14,
        enableSmoothLiveRefresh: 15,
        enableDurationOnLive: 16,
        skipSegmentOnNetworkFailure: 17,
        preferSequenceNumberForPlaylistMatching: 18,
        ignoreTtmlPositionInfo: 19,
        enableSideloadedTextTrackStyling: 20,
        useRelativeCueTimestamps: 21,
        emeServerCertificate: 22,
        useWidevineL3: 23,
        optInRedundantStreams: 24,
        manifestRequestHandler: 25,
        licenseRequestHandler: 26,
        captionsRequestHandler: 27,
        segmentRequestHandler: 28,
        manifestHandler: 29,
        segmentHandler: 30,
        licenseHandler: 31,
    };
    var Lx = _.B('cast.framework.RemoteMedia');
    Ox.prototype.B = function (a) {
        a.data && a.data.type ? this.l.dispatchEvent(a.data) : _.D(Lx, `Bad message on remote control channel${JSON.stringify(a)}`);
    };
    Ox.prototype.addEventListener = function (a, b) {
        this.l.addEventListener(a, b);
    };
    Ox.prototype.removeEventListener = function (a, b) {
        this.l.removeEventListener(a, b);
    };
    const MC = new Ox();
    cast.framework.we = Ox;
    cast.framework.we.M = function () {
        return MC;
    };
    cast.framework.xx = {};
    Sx.prototype.xs = function () {
        const a = this;
        let b; let c; let d; let
            e;
        return xa(function (f) {
            if (f.j == 1) return qa(f, Ux(a), 2);
            if (f.j != 3) {
                b = new Map();
                let g = a.j.kd();
                b.set('castAppId', g ? g.id : '');
                g = a.j.kd();
                b.set('sessionId', String(g ? g.sessionId : 0));
                c = a.j.md() || new Xr();
                b.set('systemAudioVolumeLevel', String(c.level));
                b.set('systemAudioMuteStatus', String(c.muted));
                d = (g = a.j.o.j) ? g.getVolume() : new Oe();
                b.set('mediaAudioVolumeLevel', String(d.level));
                b.set('mediaAudioMuteStatus', String(d.muted));
                b.set('playerType', Tx(a));
                g = b;
                const k = g.set;
                let l;
                a: {
                    if (l = a.j.o.j) {
                        switch (l.j && l.j.Rb() || 0) {
                            case cast.framework.common.analytics.pb.jg:
                                l = l.j && l.j.getPlayerVersion() || '';
                                break a;
                        }
                    }
                    l = '';
                }
                k.call(g, 'playerVersion', l);
                return qa(f, a.j.o.Ma, 3);
            }
            e = f.B;
            b.set('lastUserEngagementTimestamp', String(e));
            Ef(cast.framework.common.analytics.K.Xl);
            return f.return(b);
        });
    };
    _.w('cast.framework.pal.SignalCollector', Sx);
    Sx.getInstance = function () {
        NC || (NC = new Sx(new Qx()));
        return NC;
    };
    Sx.prototype.getCafSignals = Sx.prototype.xs;
    var NC = null;
    var Rx = _.B('cast.framework.SignalCollector');
    cast.framework.events.category = {};
    cast.framework.events.category.wp = 'REQUEST_SEEK REQUEST_LOAD REQUEST_STOP REQUEST_PAUSE REQUEST_PLAY REQUEST_PLAY_AGAIN REQUEST_PLAYBACK_RATE_CHANGE REQUEST_VOLUME_CHANGE REQUEST_EDIT_TRACKS_INFO REQUEST_EDIT_AUDIO_TRACKS REQUEST_SET_CREDENTIALS REQUEST_SKIP_AD REQUEST_LOAD_BY_ENTITY REQUEST_USER_ACTION REQUEST_DISPLAY_STATUS REQUEST_CUSTOM_COMMAND REQUEST_STORE_SESSION REQUEST_RESUME_SESSION REQUEST_FOCUS_STATE REQUEST_PRECACHE REQUEST_QUEUE_LOAD REQUEST_QUEUE_INSERT REQUEST_QUEUE_UPDATE REQUEST_QUEUE_REMOVE REQUEST_QUEUE_REORDER REQUEST_QUEUE_GET_ITEM_RANGE REQUEST_QUEUE_GET_ITEMS REQUEST_QUEUE_GET_ITEM_IDS'.split(' ');
    _.w('cast.framework.events.category.REQUEST', cast.framework.events.category.wp);
    cast.framework.events.category.yl = 'REQUEST_SEEK REQUEST_LOAD REQUEST_STOP REQUEST_PAUSE REQUEST_PLAY REQUEST_PLAY_AGAIN REQUEST_PLAYBACK_RATE_CHANGE REQUEST_PRECACHE REQUEST_SKIP_AD REQUEST_VOLUME_CHANGE REQUEST_EDIT_TRACKS_INFO REQUEST_EDIT_AUDIO_TRACKS REQUEST_SET_CREDENTIALS REQUEST_LOAD_BY_ENTITY REQUEST_USER_ACTION REQUEST_DISPLAY_STATUS REQUEST_CUSTOM_COMMAND REQUEST_STORE_SESSION REQUEST_RESUME_SESSION REQUEST_FOCUS_STATE REQUEST_QUEUE_LOAD REQUEST_QUEUE_INSERT REQUEST_QUEUE_UPDATE REQUEST_QUEUE_REMOVE REQUEST_QUEUE_REORDER REQUEST_QUEUE_GET_ITEM_RANGE REQUEST_QUEUE_GET_ITEMS REQUEST_QUEUE_GET_ITEM_IDS BREAK_ENDED BREAK_STARTED BREAK_CLIP_ENDED BREAK_CLIP_LOADING BREAK_CLIP_STARTED BUFFERING ERROR LIVE_ENDED LIVE_IS_MOVING_WINDOW_CHANGED MEDIA_FINISHED MEDIA_STATUS CUSTOM_STATE MEDIA_INFORMATION_CHANGED PAUSE PLAYER_LOADING PLAYER_LOAD_COMPLETE PLAYER_PRELOADING PLAYER_PRELOADING_CANCELLED PLAYING RATE_CHANGE TRACKS_CHANGED SEEKED SEEKING'.split(' ');
    _.w('cast.framework.events.category.CORE', cast.framework.events.category.yl);
    cast.framework.events.category.DEBUG = 'ABORT BITRATE_CHANGED CAN_PLAY CAN_PLAY_THROUGH CLIP_STARTED CLIP_ENDED CACHE_LOADED CACHE_HIT CACHE_INSERTED DURATION_CHANGE EMPTIED EMSG ENDED ID3 LOADED_DATA LOADED_METADATA LOAD_START PLAY STALLED INBAND_TRACK_ADDED WAITING TIMED_METADATA_CHANGED TIMED_METADATA_ENTER TIMED_METADATA_EXIT'.split(' ');
    _.w('cast.framework.events.category.DEBUG', cast.framework.events.category.DEBUG);
    cast.framework.events.category.Vl = ['SEGMENT_DOWNLOADED', 'PROGRESS', 'SUSPEND', 'TIME_UPDATE'];
    _.w('cast.framework.events.category.FINE', cast.framework.events.category.Vl);
    _.w('cast.framework.ui.BrowseContent', function (a, b) {
        this.title = b;
        this.items = a;
        this.targetAspectRatio = void 0;
    });
    _.w('cast.framework.ui.BrowseItem', function (a, b, c, d) {
        this.entity = a;
        this.title = b;
        this.subtitle = c;
        this.image = d;
        this.mediaBadge = this.imageType = this.duration = void 0;
    });
    _.w('cast.framework.ui.BrowseImageType', {
        MUSIC_TRACK: 'MUSIC_TRACK',
        MUSIC_ALBUM: 'MUSIC_ALBUM',
        ARTIST: 'ARTIST',
        PLAYLIST: 'PLAYLIST',
        EPISODE: 'EPISODE',
        MOVIE: 'MOVIE',
        PHOTO: 'PHOTO',
        PODCAST: 'PODCAST',
        MUSIC_GENRE: 'MUSIC_GENRE',
        AUDIO_BOOK: 'AUDIO_BOOK',
        RADIO_STATION: 'RADIO_STATION',
        MUSIC_MIX: 'MUSIC_MIX',
        VIDEO: 'VIDEO',
        TV_SHOW: 'TV_SHOW',
        NEWS: 'NEWS',
    });
    _.w('cast.framework.ui.BrowseImageAspectRatio', {
        SQUARE_1_TO_1: 'SQUARE_1_TO_1',
        PORTRAIT_2_TO_3: 'PORTRAIT_2_TO_3',
        LANDSCAPE_16_TO_9: 'LANDSCAPE_16_TO_9',
    });
    _.w('cast.framework.ui.BrowseMediaBadge', {
        LIVE: 'LIVE',
    });
    _.r(Vx, ql);
    Vx.prototype.j = function (a) {
        this.H ? (this.A && (a.mediaSessionId = this.A), Nx(this.G, a)) : ql.prototype.j.call(this, a);
    };
    Vx.prototype.I = function (a) {
        this.H ? Nx(this.G, a) : ql.prototype.I.call(this, a);
    };
    _.w('cast.framework.ui.State', {
        LAUNCHING: 'launching',
        IDLE: 'idle',
        LOADING: 'loading',
        BUFFERING: 'buffering',
        PAUSED: 'paused',
        PLAYING: 'playing',
    });
    _.w('cast.framework.ui.ContentType', {
        VIDEO: 'video',
        AUDIO: 'audio',
        IMAGE: 'image',
    });
    _.w('cast.framework.ui.DisplayType', {
        TV: 'tv',
        TOUCH: 'touch',
    });
    _.w('cast.framework.ui.ApplicationData', Wx);
    _.w('cast.framework.ui.PlayerData', Xx);
    cast.framework.C.ga = 'Changed';
    var Kz = `applicationData${cast.framework.C.ga}`;
    var Ny = `state${cast.framework.C.ga}`;
    var Wy = `duration${cast.framework.C.ga}`;
    var Vy = `currentTime${cast.framework.C.ga}`;
    var Dz = `metadata${cast.framework.C.ga}`;
    var Py = `media${cast.framework.C.ga}`;
    var Bz = `queueData${cast.framework.C.ga}`;
    const OC = `thumbnailUrl${cast.framework.C.ga}`;
    var Fz = `secondaryImageUrl${cast.framework.C.ga}`;
    const PC = `nextMetadata${cast.framework.C.ga}`;
    const QC = `mediaCategory${cast.framework.C.ga}`;
    var Xy = `supportedMediaCommands${cast.framework.C.ga}`;
    var Ry = `isLive${cast.framework.C.ga}`;
    var Iz = `isAtLiveEdge${cast.framework.C.ga}`;
    var Hz = `breakPercentagePositions${cast.framework.C.ga}`;
    var Qy = `isPlayingBreak${cast.framework.C.ga}`;
    var Jz = `whenSkippable${cast.framework.C.ga}`;
    var Mz = `numberBreakClips${cast.framework.C.ga}`;
    var Lz = `currentBreakClipNumber${cast.framework.C.ga}`;
    var Gz = `breakTitle${cast.framework.C.ga}`;
    const RC = `displayStatus${cast.framework.C.ga}`;
    var Fy = `liveSeekableRange${cast.framework.C.ga}`;
    var Sy = `mediaStartAbsoluteTime${cast.framework.C.ga}`;
    var Ty = `sectionStartTimeInMedia${cast.framework.C.ga}`;
    var Uy = `sectionDuration${cast.framework.C.ga}`;
    var Cz = `activeTrackIds${cast.framework.C.ga}`;
    _.w('cast.framework.ui.PlayerDataEventType', {
        ANY_CHANGE: '*',
        APPLICATION_DATA_CHANGED: Kz,
        STATE_CHANGED: Ny,
        IS_SEEKING_CHANGED: `isSeeking${cast.framework.C.ga}`,
        DURATION_CHANGED: Wy,
        CURRENT_TIME_CHANGED: Vy,
        PLAYBACK_RATE_CHANGED: `playbackRate${cast.framework.C.ga}`,
        METADATA_CHANGED: Dz,
        MEDIA_SESSION_ID_CHANGED: `mediaSessionId${cast.framework.C.ga}`,
        MEDIA_CHANGED: Py,
        QUEUE_DATA_CHANGED: Bz,
        TITLE_CHANGED: `title${cast.framework.C.ga}`,
        SUBTITLE_CHANGED: `subtitle${cast.framework.C.ga}`,
        THUMBNAIL_URL_CHANGED: OC,
        SECONDARY_IMAGE_URL_CHANGED: Fz,
        NEXT_TITLE_CHANGED: `nextTitle${cast.framework.C.ga}`,
        NEXT_SUBTITLE_CHANGED: `nextSubtitle${cast.framework.C.ga}`,
        NEXT_THUMBNAIL_URL_CHANGED: `nextThumbnailUrl${cast.framework.C.ga}`,
        NEXT_METADATA_CHANGED: PC,
        PRELOADING_NEXT_CHANGED: `preloadingNext${cast.framework.C.ga}`,
        CONTENT_TYPE_CHANGED: `contentType${cast.framework.C.ga}`,
        MEDIA_CATEGORY_CHANGED: QC,
        SUPPORTED_MEDIA_COMMANDS_CHANGED: Xy,
        IS_LIVE_CHANGED: Ry,
        IS_AT_LIVE_EDGE_CHANGED: Iz,
        BREAK_PERCENTAGE_POSITIONS_CHANGED: Hz,
        IS_PLAYING_BREAK_CHANGED: Qy,
        IS_BREAK_SKIPPABLE_CHANGED: `isBreakSkippable${cast.framework.C.ga}`,
        WHEN_SKIPPABLE_CHANGED: Jz,
        NUMBER_BREAK_CLIPS_CHANGED: Mz,
        CURRENT_BREAK_CLIP_NUMBER_CHANGED: Lz,
        BREAK_TITLE_CHANGED: Gz,
        DISPLAY_STATUS_CHANGED: RC,
        DISPLAY_TYPE_CHANGED: `displayType${cast.framework.C.ga}`,
        LIVE_SEEKABLE_RANGE_CHANGED: Fy,
        MEDIA_START_ABSOLUTE_TIME_CHANGED: Sy,
        SECTION_START_TIME_IN_MEDIA_CHANGED: Ty,
        SECTION_DURATION_CHANGED: Uy,
        PRESENTATION_CHANGED: `presentation${cast.framework.C.ga}`,
        CUSTOM_STATE_CHANGED: `customState${cast.framework.C.ga}`,
        ACTIVE_TRACK_IDS_CHANGED: Cz,
    });
    _.w('cast.framework.ui.PlayerDataChangedEvent', Yx);
    by.prototype.addEventListener = function (a, b) {
        this.H.addEventListener(a, b);
    };
    by.prototype.removeEventListener = function (a, b) {
        this.H.removeEventListener(a, b);
    };
    _.w('cast.framework.ui.PlayerDataBinder', by);
    by.prototype.removeEventListener = by.prototype.removeEventListener;
    by.prototype.addEventListener = by.prototype.addEventListener;
    var Gy = new Xx();
    new by(Gy);
    var my = _.B('cast.framework.ui.PlayerDataBinder');
    Hy.prototype.start = function () {
        const a = this;
        this.j = Jy(this);
        this.j.length > 0 && Ef(cast.framework.common.analytics.K.jq);
        this.j.length < 2 || (this.B = Ly(this, '--animation-duration'), this.D = Math.max(Ly(this, '--interval-duration'), this.B), this.D > 0 && (this.F = setInterval(function () {
            return a.next();
        }, this.D)));
    };
    Hy.prototype.stop = function () {
        clearInterval(this.F);
        this.F = void 0;
        clearInterval(this.H);
        this.H = void 0;
        for (let a = _.q(this.j), b = a.next(); !b.done; b = a.next()) b.value.classList.remove('visible', 'top');
        this.o = void 0;
    };
    Hy.prototype.next = function () {
        this.A = this.o;
        this.o = void 0 === this.o ? 0 : (this.o + 1) % this.j.length;
        this.j[this.o].classList.add('top', 'visible');
        void 0 !== this.A && this.j[this.A].classList.remove('top');
        Iy(this);
    };
    var Ky = _.B('cast.framework.ui.SlideshowManager');
    cast.framework.C.vq = Hy;
    Yy.prototype.addEventListener = function (a, b) {
        this.l.addEventListener(a, b);
    };
    Yy.prototype.removeEventListener = function (a, b) {
        this.l.removeEventListener(a, b);
    };
    _.r(nz, lf);
    nz.prototype.createdCallback = function () {
        (0, cast.framework.Hq)(this.attachShadow ? this.attachShadow({
            mode: 'open',
        }) : this.createShadowRoot());
        this.l = xz(this, 'tv-overlay');
        this.xa = xz(this, 'castMetadataTitle');
        this.o = xz(this, 'castMetadataSubtitle');
        this.A = xz(this, 'castMetadataSubtitle2');
        this.D = xz(this, 'castMetadataImage');
        this.J = xz(this, 'castControlsProgress');
        this.L = xz(this, 'castControlsProgressInner');
        this.O = xz(this, 'castControlsSeekable');
        this.R = xz(this, 'castControlsSeekablePlayed');
        this.ba = xz(this,
            'castControlsTotalTime');
        this.Aa = xz(this, 'castControlsCurTime');
        this.ca = xz(this, 'castBreakPosition');
        this.da = xz(this, 'castBreakTime');
        this.G = xz(this, 'repeatStatus');
        this.W = xz(this, 'shuffleStatus');
        this.ia = xz(this, 'nextMetadataCountdown');
        this.ra = xz(this, 'nextMetadataTitle');
        this.na = xz(this, 'nextMetadataSubtitle');
        this.qa = xz(this, 'nextMetadataImage');
        this.fa = xz(this, 'nextContentRating');
        this.F = xz(this, 'castBreakSkippableTime');
        this.H = xz(this, 'castSkipBreakMessage');
        this.Ca = this.shadowRoot.querySelectorAll('.liveLabel');
        this.Z = xz(this, 'top-right-video-overlay-image');
        this.wa = xz(this, 'top-right-audio-persistent-image');
        this.V = null;
        this.B = '';
        this.j = new Xx();
        this.T = new by(this.j);
        this.I = new Yy(this.T);
    };
    nz.prototype.attachedCallback = function () {
        const a = this;
        wz(this);
        this.I.addEventListener('changed', function () {
            const b = a.I;
            a.Aa.textContent = bz(b);
            let c = cz(b);
            a.ba.classList.toggle('hidden', !c);
            c && (a.ba.textContent = ez(b));
            c = fz(b);
            a.L.classList.toggle('hidden', !c);
            c && (c = gz(b), a.L.style.left = `${c ? c / dz(b) * 100 : 0}%`, c = gz(b), a.L.style.width = `${typeof c !== 'number' ? 0 : (az(b) - c) / dz(b) * 100}%`);
            c = hz(b);
            a.R.classList.toggle('hidden', !c);
            a.O.classList.toggle('hidden', !c);
            c && (a.R.style.left = `${jz(b)}%`, a.R.style.width = `${kz(b)
            }%`, a.O.style.left = `${jz(b)}%`, a.O.style.width = `${lz(b)}%`);
            a.j.isLive && uz(a);
        });
        vz(this, Kz, function () {
            oz(a, a.j.applicationData);
        });
        vz(this, OC, function () {
            let b = String(a.j.thumbnailUrl);
            b ? (b = cast.receiver.C.aa.Va(b), a.D.style.backgroundImage = b, a.D.classList.add('has-image'), a.l.style.setProperty('--album-art-image', b)) : (a.l.style.removeProperty('--album-art-image'), a.D.style.removeProperty('background-image'), a.D.classList.remove('has-image'));
        });
        vz(this, Fz, function () {
            const b = String(a.j.secondaryImageUrl);
            b ? (cast.framework.common.analytics.dk(cast.framework.common.analytics.aj.zq), a.wa.style.backgroundImage = cast.receiver.C.aa.Va(b)) : a.wa.style.backgroundImage = '';
            a.l.dataset.topRightAudioPersistentImageElement = String(b ? 'true' : 'false');
        });
        vz(this, Dz, function () {
            let b = a.j.metadata;
            qz(a.o);
            qz(a.A);
            a.B = '';
            if (b) {
                switch (a.B = b.title, b.metadataType) {
                    case 1:
                        rz(a.o, b.subtitle);
                        rz(a.A, b.studio);
                        (b = b.releaseDate) && rz(a.A, b.substr(0, 4));
                        break;
                    case 2:
                        (b.season || b.episode) && rz(a.o, cast.receiver.Y.Mg(b.season, b.episode));
                        var c = b.originalAirdate;
                        c && rz(a.o, c.substr(0, 4));
                        rz(a.A, b.seriesTitle);
                        break;
                    case 3:
                        rz(a.o, b.artist || b.albumArtist || b.composer);
                        rz(a.A, b.albumName);
                        break;
                    case 5:
                        b.chapterTitle && (a.B = b.chapterTitle);
                        rz(a.o, b.bookTitle || b.subtitle);
                        break;
                    default:
                        b.subtitle && (a.o.textContent = b.subtitle);
                }
            }
            a.xa.textContent = a.B ? a.B : '';
        });
        vz(this, Vy, function () {
            a.j.isPlayingBreak && tz(a);
            if (a.j.preloadingNext) {
                const b = cast.receiver.Y.Lj((a.j.duration - a.j.currentTime).toFixed(0));
                a.ia.textContent !== b && (a.ia.textContent = b);
            }
            a.l.classList.toggle('showNextOverlay',
                !a.j.isPlayingBreak && !a.j.isSeeking && a.j.preloadingNext && a.j.duration - a.j.currentTime < 20);
        });
        vz(this, Mz, function () {
            sz(a, a.j.currentBreakClipNumber, a.j.numberBreakClips);
        });
        vz(this, Lz, function () {
            sz(a, a.j.currentBreakClipNumber, a.j.numberBreakClips);
        });
        vz(this, Hz, function () {
            a.j.isLive || uz(a);
        });
        vz(this, Jz, function () {
            tz(a);
        });
        vz(this, Qy, function () {
            tz(a);
            a.l.dataset.isPlayingBreak = String(a.j.isPlayingBreak);
        });
        vz(this, PC, function () {
            let b = a.j.nextMetadata;
            if (b) {
                let c = b.title || '';
                let d = b.subtitle || '';
                const e = b.images
                    && b.images[0] && b.images[0].url || '';
                b.metadataType === 2 ? d = cast.receiver.Y.Mg(b.season, b.episode) || '' : b.metadataType === 3 ? d = b.artist || b.albumArtist || b.composer || '' : b.metadataType === 5 && (c = b.chapterTitle || '', d = b.bookTitle || b.subtitle || '');
                a.ra.textContent = c;
                a.na.textContent = d;
                pz(a.qa, e);
                b = b.contentRating;
                pz(a.fa, b && b.ratingIcon && b.ratingIcon.url || null);
            } else a.ra.textContent = '', a.na.textContent = '', pz(a.qa, ''), pz(a.fa, '');
        });
        vz(this, Bz, function () {
            const b = a.j.queueData;
            if (b) {
                if (b.repeatMode) {
                    let c = b.repeatMode;
                    c === 'REPEAT_ALL_AND_SHUFFLE' && (c = 'REPEAT_ALL');
                    a.G.dataset.state = c;
                } else a.G.dataset.state = 'REPEAT_OFF';
                J(a.W, b.shuffle);
            } else a.G.dataset.state = 'REPEAT_OFF', J(a.W, !1);
        });
        vz(this, Ny, function () {
            if (a.V !== 'loading' || a.j.state !== 'buffering') a.V = a.j.state, a.l.dataset.state = String(a.j.state);
        });
        vz(this, Iz, function () {
            a.Ca.forEach(function (b) {
                b.classList.toggle('live-edge', a.j.isAtLiveEdge);
            });
        });
        vz(this, Ry, function () {
            a.l.dataset.isLive = String(a.j.isLive);
        });
        vz(this, RC, function () {
            a.l.dataset.displayStatus = String(a.j.displayStatus);
        });
        vz(this, QC, function () {
            a.l.dataset.mediaCategory = String(a.j.mediaCategory || 'VIDEO');
        });
    };
    nz.prototype.connectedCallback = function () {
        this.attachedCallback();
    };
    window.customElements && window.customElements.define ? (window.customElements.get('tv-overlay') || window.customElements.define('tv-overlay', nz)) : document.registerElement('tv-overlay', {
        prototype: nz.prototype,
    });
    _.r(yz, lf);
    yz.prototype.createdCallback = function () {
        const a = this;
        (0, cast.framework.Bl)(this.attachShadow ? this.attachShadow({
            mode: 'open',
        }) : this.createShadowRoot());
        this.B = this.shadowRoot.getElementById('castPlayer');
        this.A = this.shadowRoot.getElementById('castMediaElement');
        this.D = this.o = null;
        this.j = new Xx();
        this.F = new by(this.j);
        this.l = null;
        zz(this, Kz, function () {
            const c = a.j.applicationData;
            if (c) {
                const d = a.shadowRoot.getElementById('logo');
                const e = window.getComputedStyle(d, null);
                const f = a.shadowRoot.getElementById('splash');
                const g = window.getComputedStyle(f,
                    null);
                e.backgroundImage === 'none' && (d.textContent = c.name);
                g.backgroundImage === 'none' && (e.backgroundImage === 'none' ? f.textContent = c.name : f.classList.add('logo'));
            }
        });
        zz(this, Dz, function () {
            const c = a.j.metadata && a.j.metadata.posterUrl || '';
            c ? a.A.poster = c : a.A.removeAttribute('poster');
        });
        zz(this, Ny, function () {
            if (a.o) {
                const c = a.o;
                const d = a.j.state;
                c.stop();
                d === 'idle' ? (c.l.classList.add('active'), c.start()) : c.l.classList.remove('active');
            }
            if (a.D !== 'loading' || a.j.state !== 'buffering') a.D = a.j.state, a.B.dataset.state = a.j.state;
        });
        zz(this, QC, function () {
            a.B.dataset.mediaCategory = a.j.mediaCategory || 'VIDEO';
        });
        const b = _.Vg.M();
        gi(b).then(function (c) {
            const d = Be();
            const e = b.ba;
            c || d && !e || (a.l = document.createElement('tv-overlay'), Ed(a.l, a.B.querySelector('tv-overlay-placeholder')));
        });
    };
    yz.prototype.attachedCallback = function () {
        this.hasAttribute('crossorigin') && this.getAttribute('crossorigin') !== '' && this.getMediaElement().setAttribute('crossorigin', this.getAttribute('crossorigin'));
        const a = this.shadowRoot.getElementById('castSlideshowElement');
        this.o = new cast.framework.C.vq(a);
        this.j.state === 'idle' && this.o.start();
    };
    yz.prototype.connectedCallback = function () {
        this.attachedCallback();
    };
    yz.prototype.getMediaElement = function () {
        return this.A;
    };
    yz.prototype.getMediaElement = yz.prototype.getMediaElement;
    window.customElements && window.customElements.define ? (window.customElements.get('cast-media-player') || window.customElements.define('cast-media-player', yz)) : document.registerElement('cast-media-player', {
        prototype: yz.prototype,
    });
    cast.framework.C.Ov = yz;
    const SC = {};
    var Ez = (SC.launching = 'IDLE', SC.idle = 'IDLE', SC.loading = 'LOADING', SC.buffering = 'BUFFERING', SC.paused = 'PAUSED', SC.playing = 'PLAYING', SC);
    _.r(Nz, Xp);
    Nz.prototype.yj = function () {
        return new Vx('__touch_controls__');
    };
    Nz.prototype.Yb = function (a) {
        Bf(cast.receiver.C.X.K.en, !!a);
        a = ri(a || null);
        document.documentElement.dataset.castExtendedControls = a ? 'true' : '';
        a && cast.receiver.C.X.xt(a);
        this.j.Yb(a);
    };
    _.r(Oz, eq);
    cast.framework.C.an = Oz;
    _.h = Pz.prototype;
    _.h.sa = function (a, b) {
        mq(this.j, a, b);
    };
    _.h.Yb = function (a) {
        const b = this;
        lq(this.j, function () {
            b.j.j.Yb(a);
        });
    };
    _.h.Qd = function () {
        this.j.Qd();
    };
    _.h.Ck = function () {
        Ef(cast.receiver.C.X.K.Dp);
    };
    _.h.Cu = function (a) {
        const b = this;
        Bf(cast.receiver.C.X.K.Bp, a);
        lq(this.j, function () {
            const c = b.j.j.j.A;
            c.V = a;
            Ci(c);
        });
    };
    _.h.Vg = function () {
        Ef(cast.receiver.C.X.K.Yl);
        return this.j.Vg();
    };
    _.h.bh = function () {
        return this.j.bh();
    };
    _.h.ea = function () {
        this.j.ea();
    };
    _.w('cast.framework.ui.Controls', Pz);
    Pz.prototype.hasMediaControlsOverlay = Pz.prototype.bh;
    Pz.prototype.getSafeAreaHeight = Pz.prototype.Vg;
    Pz.prototype.setDcVisibility = Pz.prototype.Cu;
    Pz.prototype.setScrubberVisibility = Pz.prototype.Ck;
    Pz.prototype.clearDefaultSlotAssignments = Pz.prototype.Qd;
    Pz.prototype.setBrowseContent = Pz.prototype.Yb;
    Pz.prototype.assignButton = Pz.prototype.sa;
    Ea(Pz);
    Pz.getInstance = Pz.M;
    document.readyState === 'loading' ? document.addEventListener('DOMContentLoaded', function () {
        Pz.M();
    }) : Pz.M();
    _.w('cast.framework.ui.ControlsButton', {
        QUEUE_NEXT: 'queue-next',
        QUEUE_PREV: 'queue-prev',
        SEEK_FORWARD_10: 'seek-forward-10',
        SEEK_FORWARD_15: 'seek-forward-15',
        SEEK_FORWARD_30: 'seek-forward-30',
        SEEK_BACKWARD_10: 'seek-backward-10',
        SEEK_BACKWARD_15: 'seek-backward-15',
        SEEK_BACKWARD_30: 'seek-backward-30',
        CAPTIONS: 'captions',
        NO_BUTTON: 'no-button',
        REPEAT: 'repeat',
        SHUFFLE: 'shuffle',
        LIKE: 'like',
        LIKE_HEART: 'like-heart',
        DISLIKE: 'dislike',
        LYRICS: 'lyrics',
        SLEEP_TIMER: 'sleep-timer',
    });
    _.w('cast.framework.ui.ControlsSlot', {
        SLOT_1: 'slot-1',
        SLOT_2: 'slot-2',
        SLOT_3: 'slot-3',
        SLOT_4: 'slot-4',
        SLOT_PRIMARY_1: 'slot-primary-1',
        SLOT_PRIMARY_2: 'slot-primary-2',
        SLOT_SECONDARY_1: 'slot-secondary-1',
        SLOT_SECONDARY_2: 'slot-secondary-2',
    });
    Qz.prototype.Ku = function (a, b) {
        if (this.l) Hp(this.l.G, null);
        else if (this.j) {
            const c = this.j;
            c.l && pz(c.l.Z, null);
        }
        switch (a) {
            case 'TOP_RIGHT_VIDEO_OVERLAY':
                this.l ? Hp(this.l.G, b) : this.j && (a = this.j, a.l && pz(a.l.Z, b)), cast.framework.common.analytics.dk(cast.framework.common.analytics.aj.TOP_RIGHT_VIDEO_OVERLAY);
        }
    };
    _.w('cast.framework.ui.UiManager', Qz);
    Qz.prototype.setSecondaryImage = Qz.prototype.Ku;
    _.w('cast.framework.ui.SecondaryImagePosition', {
        TOP_RIGHT_VIDEO_OVERLAY: 'TOP_RIGHT_VIDEO_OVERLAY',
    });
    Ea(Qz);
    Qz.getInstance = Qz.M;
    _.w('cast.framework.LoggerLevel', {
        DEBUG: 0,
        VERBOSE: 500,
        INFO: 800,
        WARNING: 900,
        ERROR: 1E3,
        NONE: 1500,
    });
    _.h = Rz.prototype;
    _.h.initialize = function () {
        return null;
    };
    _.h.onCurrentItemIdChanged = function () { };
    _.h.nextItems = function () {
        return [];
    };
    _.h.prevItems = function () {
        return [];
    };
    _.h.fetchItems = function () {
        return [];
    };
    _.h.onItemsInserted = function () { };
    _.h.onItemsRemoved = function () { };
    _.h.onItemsReordered = function () { };
    _.h.shuffle = function () {
        return null;
    };
    _.h.he = function () {
        return null;
    };
    _.w('cast.framework.QueueBase', Rz);
    Rz.prototype.unshuffle = Rz.prototype.he;
    Rz.prototype.shuffle = Rz.prototype.shuffle;
    Rz.prototype.onItemsReordered = Rz.prototype.onItemsReordered;
    Rz.prototype.onItemsRemoved = Rz.prototype.onItemsRemoved;
    Rz.prototype.onItemsInserted = Rz.prototype.onItemsInserted;
    Rz.prototype.fetchItems = Rz.prototype.fetchItems;
    Rz.prototype.prevItems = Rz.prototype.prevItems;
    Rz.prototype.nextItems = Rz.prototype.nextItems;
    Rz.prototype.onCurrentItemIdChanged = Rz.prototype.onCurrentItemIdChanged;
    Rz.prototype.initialize = Rz.prototype.initialize;
})();
