! function(g, i, m, f, d, k, e) {
    new(function() {});
    var c = {
            G: m.PI,
            H: m.max,
            s: m.min,
            rb: m.ceil,
            X: m.floor,
            mb: m.abs,
            lb: m.sin,
            ac: m.cos,
            nd: m.tan,
            Qe: m.atan,
            bc: m.sqrt,
            p: m.pow,
            B: m.round
        },
        h = {
            Xe: function(a) {
                return -c.ac(a * c.G) / 2 + .5
            },
            ec: function(a) {
                return a
            },
            mf: function(a) {
                return a * a
            },
            xd: function(a) {
                return -a * (a - 2)
            },
            yf: function(a) {
                return (a *= 2) < 1 ? 1 / 2 * a * a : -1 / 2 * (--a * (a - 2) - 1)
            },
            nf: function(a) {
                return a * a * a
            },
            Jf: function(a) {
                return (a -= 1) * a * a + 1
            },
            If: function(a) {
                return (a *= 2) < 1 ? 1 / 2 * a * a * a : 1 / 2 * ((a -= 2) * a * a + 2)
            },
            Hf: function(a) {
                return a * a * a * a
            },
            tf: function(a) {
                return -((a -= 1) * a * a * a - 1)
            },
            Mf: function(a) {
                return (a *= 2) < 1 ? 1 / 2 * a * a * a * a : -1 / 2 * ((a -= 2) * a * a * a - 2)
            },
            hf: function(a) {
                return a * a * a * a * a
            },
            of: function(a) {
                return (a -= 1) * a * a * a * a + 1
            },
            pf: function(a) {
                return (a *= 2) < 1 ? 1 / 2 * a * a * a * a * a : 1 / 2 * ((a -= 2) * a * a * a * a + 2)
            },
            qf: function(a) {
                return 1 - c.ac(c.G / 2 * a)
            },
            rf: function(a) {
                return c.lb(c.G / 2 * a)
            },
            sf: function(a) {
                return -1 / 2 * (c.ac(c.G * a) - 1)
            },
            uf: function(a) {
                return a == 0 ? 0 : c.p(2, 10 * (a - 1))
            },
            vf: function(a) {
                return a == 1 ? 1 : -c.p(2, -10 * a) + 1
            },
            wf: function(a) {
                return a == 0 || a == 1 ? a : (a *= 2) < 1 ? 1 / 2 * c.p(2, 10 * (a - 1)) : 1 / 2 * (-c.p(2, -10 * --a) + 2)
            },
            xf: function(a) {
                return -(c.bc(1 - a * a) - 1)
            },
            zf: function(a) {
                return c.bc(1 - (a -= 1) * a)
            },
            Kf: function(a) {
                return (a *= 2) < 1 ? -1 / 2 * (c.bc(1 - a * a) - 1) : 1 / 2 * (c.bc(1 - (a -= 2) * a) + 1)
            },
            Af: function(a) {
                if (!a || a == 1) return a;
                var b = .3,
                    d = .075;
                return -(c.p(2, 10 * (a -= 1)) * c.lb((a - d) * 2 * c.G / b))
            },
            Bf: function(a) {
                if (!a || a == 1) return a;
                var b = .3,
                    d = .075;
                return c.p(2, -10 * a) * c.lb((a - d) * 2 * c.G / b) + 1
            },
            Cf: function(a) {
                if (!a || a == 1) return a;
                var b = .45,
                    d = .1125;
                return (a *= 2) < 1 ? -.5 * c.p(2, 10 * (a -= 1)) * c.lb((a - d) * 2 * c.G / b) : c.p(2, -10 * (a -= 1)) * c.lb((a - d) * 2 * c.G / b) * .5 + 1
            },
            Df: function(a) {
                var b = 1.70158;
                return a * a * ((b + 1) * a - b)
            },
            Ef: function(a) {
                var b = 1.70158;
                return (a -= 1) * a * ((b + 1) * a + b) + 1
            },
            Ff: function(a) {
                var b = 1.70158;
                return (a *= 2) < 1 ? 1 / 2 * a * a * (((b *= 1.525) + 1) * a - b) : 1 / 2 * ((a -= 2) * a * (((b *= 1.525) + 1) * a + b) + 2)
            },
            jd: function(a) {
                return 1 - h.Rc(1 - a)
            },
            Rc: function(a) {
                return a < 1 / 2.75 ? 7.5625 * a * a : a < 2 / 2.75 ? 7.5625 * (a -= 1.5 / 2.75) * a + .75 : a < 2.5 / 2.75 ? 7.5625 * (a -= 2.25 / 2.75) * a + .9375 : 7.5625 * (a -= 2.625 / 2.75) * a + .984375
            },
            Gf: function(a) {
                return a < 1 / 2 ? h.jd(a * 2) * .5 : h.Rc(a * 2 - 1) * .5 + .5
            },
            Ne: c.rb,
            Oe: c.X
        };
    var b = new function() {
        var j = this,
            vb = /\S+/g,
            F = 1,
            pb = 2,
            sb = 3,
            rb = 4,
            Z = 5,
            G, r = 0,
            n = 0,
            A = 0,
            H = navigator,
            fb = H.appName,
            p = H.userAgent,
            q = parseFloat;

        function Eb() {
            if (!G) {
                G = {
                    Yc: "ontouchstart" in g || "createTouch" in i
                };
                var a;
                if (H.pointerEnabled || (a = H.msPointerEnabled)) G.Qd = a ? "msTouchAction" : "touchAction"
            }
            return G
        }

        function u(h) {
            if (!r) {
                r = -1;
                if (fb == "Microsoft Internet Explorer" && !!g.attachEvent && !!g.ActiveXObject) {
                    var e = p.indexOf("MSIE");
                    r = F;
                    n = q(p.substring(e + 5, p.indexOf(";", e))); /*@cc_on@*/
                } else if (fb == "Netscape" && !!g.addEventListener) {
                    var d = p.indexOf("Firefox"),
                        b = p.indexOf("Safari"),
                        f = p.indexOf("Chrome"),
                        c = p.indexOf("AppleWebKit");
                    if (d >= 0) {
                        r = pb;
                        n = q(p.substring(d + 8))
                    } else if (b >= 0) {
                        var i = p.substring(0, b).lastIndexOf("/");
                        r = f >= 0 ? rb : sb;
                        n = q(p.substring(i + 1, b))
                    } else {
                        var a = /Trident\/.*rv:([0-9]{1,}[\.0-9]{0,})/i.exec(p);
                        if (a) {
                            r = F;
                            n = q(a[1])
                        }
                    }
                    if (c >= 0) A = q(p.substring(c + 12))
                } else {
                    var a = /(opera)(?:.*version|)[ \/]([\w.]+)/i.exec(p);
                    if (a) {
                        r = Z;
                        n = q(a[2])
                    }
                }
            }
            return h == r
        }

        function v() {
            return u(F)
        }

        function xb() {
            return u(pb)
        }

        function qb() {
            return u(sb)
        }

        function ub() {
            return u(Z)
        }

        function mb() {
            return qb() && A > 534 && A < 535
        }

        function I() {
            u();
            return A > 537 || n > 42 || r == F && n >= 11
        }

        function nb(a) {
            var b, c;
            return function(g) {
                if (!b) {
                    b = d;
                    var f = a.substr(0, 1).toUpperCase() + a.substr(1);
                    l([a].concat(["WebKit", "ms", "Moz", "O", "webkit"]), function(h, d) {
                        var b = a;
                        if (d) b = h + f;
                        if (g.style[b] != e) return c = b
                    })
                }
                return c
            }
        }

        function lb(b) {
            var a;
            return function(c) {
                a = a || nb(b)(c) || b;
                return a
            }
        }
        var L = lb("transform");

        function eb(a) {
            return {}.toString.call(a)
        }
        var bb = {};
        l(["Boolean", "Number", "String", "Function", "Array", "Date", "RegExp", "Object"], function(a) {
            bb["[object " + a + "]"] = a.toLowerCase()
        });

        function l(b, d) {
            var a, c;
            if (eb(b) == "[object Array]") {
                for (a = 0; a < b.length; a++)
                    if (c = d(b[a], a, b)) return c
            } else
                for (a in b)
                    if (c = d(b[a], a, b)) return c
        }

        function E(a) {
            return a == f ? String(a) : bb[eb(a)] || "object"
        }

        function cb(a) {
            for (var b in a) return d
        }

        function B(a) {
            try {
                return E(a) == "object" && !a.nodeType && a != a.window && (!a.constructor || {}.hasOwnProperty.call(a.constructor.prototype, "isPrototypeOf"))
            } catch (b) {}
        }

        function jb(b, a) {
            setTimeout(b, a || 0)
        }

        function ab(b, d, c) {
            var a = !b || b == "inherit" ? "" : b;
            l(d, function(c) {
                var b = c.exec(a);
                if (b) {
                    var d = a.substr(0, b.index),
                        e = a.substr(b.index + b[0].length + 1, a.length - 1);
                    a = d + e
                }
            });
            a && (c += (!a.indexOf(" ") ? "" : " ") + a);
            return c
        }

        function gb(a, b) {
            if (a === e) a = b;
            return a
        }
        j.ad = Eb;
        j.Ld = v;
        j.pg = xb;
        j.qg = qb;
        j.ug = I;
        nb("transform");
        j.Fc = function() {
            return n
        };
        j.jc = jb;
        j.I = gb;
        j.Z = function(a, b) {
            b.call(a);
            return z({}, a)
        };

        function U(a) {
            a.constructor === U.caller && a.q && a.q.apply(a, U.caller.arguments)
        }
        j.q = U;
        j.Hb = function(a) {
            if (j.xg(a)) a = i.getElementById(a);
            return a
        };

        function t(a) {
            return a || g.event
        }
        j.yg = t;
        j.Ib = function(b) {
            b = t(b);
            var a = b.target || b.srcElement || i;
            if (a.nodeType == 3) a = j.sc(a);
            return a
        };
        j.Fd = function(a) {
            a = t(a);
            return a.relatedTarget || a.toElement
        };
        j.Id = function(a) {
            a = t(a);
            return a.which || ([0, 1, 3, 0, 2])[a.button] || a.charCode || a.keyCode
        };
        j.uc = function(a) {
            a = t(a);
            return {
                x: a.clientX || 0,
                y: a.clientY || 0
            }
        };
        j.zg = function(b, a) {
            return b.x >= a.x && b.x <= a.x + a.w && b.y >= a.y && b.y <= a.y + a.h
        };
        j.Md = function(c, e) {
            var a = b.Bg(e),
                d = b.uc(c);
            return j.zg(d, a)
        };

        function w(c, d, a) {
            if (a !== e) c.style[d] = a == e ? "" : a;
            else {
                var b = c.currentStyle || c.style;
                a = b[d];
                if (a == "" && g.getComputedStyle) {
                    b = c.ownerDocument.defaultView.getComputedStyle(c, f);
                    b && (a = b.getPropertyValue(d) || b[d])
                }
                return a
            }
        }

        function X(b, c, a, d) {
            if (a === e) {
                a = q(w(b, c));
                isNaN(a) && (a = f);
                return a
            }
            if (a == f) a = "";
            else d && (a += "px");
            w(b, c, a)
        }

        function m(c, a) {
            var d = a ? X : w,
                b;
            if (a & 4) b = lb(c);
            return function(e, f) {
                return d(e, b ? b(e) : c, f, a & 2)
            }
        }

        function zb(a) {
            return q(a.style.opacity || "1")
        }

        function Bb(b, a) {
            b.style.opacity = a == 1 ? "" : c.B(a * 100) / 100
        }
        var N = {
            W: ["rotate"],
            cb: ["rotateX"],
            jb: ["rotateY"],
            Ub: ["skewX"],
            Sb: ["skewY"]
        };
        if (!I()) N = z(N, {
            T: ["scaleX", 2],
            U: ["scaleY", 2],
            gb: ["translateZ", 1]
        });

        function M(c, a) {
            var b = "";
            if (a) {
                if (v() && n && n < 10) {
                    delete a.cb;
                    delete a.jb;
                    delete a.gb
                }
                l(a, function(d, c) {
                    var a = N[c];
                    if (a) {
                        var e = a[1] || 0;
                        if (O[c] != d) b += " " + a[0] + "(" + d + (["deg", "px", ""])[e] + ")"
                    }
                });
                if (I()) {
                    if (a.ob || a.qb || a.gb != e) b += " translate3d(" + (a.ob || 0) + "px," + (a.qb || 0) + "px," + (a.gb || 0) + "px)";
                    if (a.T == e) a.T = 1;
                    if (a.U == e) a.U = 1;
                    if (a.T != 1 || a.U != 1) b += " scale3d(" + a.T + ", " + a.U + ", 1)"
                }
            }
            c.style[L(c)] = b
        }
        j.Cg = m("transformOrigin", 4);
        j.Dg = m("backfaceVisibility", 4);
        m("transformStyle", 4);
        j.Fg = m("perspective", 6);
        j.ng = m("perspectiveOrigin", 4);
        j.Ag = function(b, a) {
            if (v() && n < 9) b.style.zoom = a == 1 ? "" : a;
            else {
                var c = L(b),
                    f = a == 1 ? "" : "scale(" + a + ")",
                    e = b.style[c],
                    g = new RegExp(/[\s]*scale\(.*?\)/g),
                    d = ab(e, [g], f);
                b.style[c] = d
            }
        };
        j.bb = function(a, d, b, c) {
            a = j.Hb(a);
            if (a.addEventListener) {
                d == "mousewheel" && a.addEventListener("DOMMouseScroll", b, c);
                a.addEventListener(d, b, c)
            } else if (a.attachEvent) {
                a.attachEvent("on" + d, b);
                c && a.setCapture && a.setCapture()
            }
        };
        j.Ab = function(a, c, d, b) {
            a = j.Hb(a);
            if (a.removeEventListener) {
                c == "mousewheel" && a.removeEventListener("DOMMouseScroll", d, b);
                a.removeEventListener(c, d, b)
            } else if (a.detachEvent) {
                a.detachEvent("on" + c, d);
                b && a.releaseCapture && a.releaseCapture()
            }
        };
        j.kc = function(a) {
            a = t(a);
            a.preventDefault && a.preventDefault();
            a.cancel = d;
            a.returnValue = k
        };
        j.Zf = function(a) {
            a = t(a);
            a.stopPropagation && a.stopPropagation();
            a.cancelBubble = d
        };
        j.ab = function(d, c) {
            var a = [].slice.call(arguments, 2),
                b = function() {
                    var b = a.concat([].slice.call(arguments, 0));
                    return c.apply(d, b)
                };
            return b
        };
        j.Of = function(a, b) {
            if (b == e) return a.textContent || a.innerText;
            var c = i.createTextNode(b);
            j.nc(a);
            a.appendChild(c)
        };
        j.Bg = function(b) {
            var a = b.getBoundingClientRect();
            return {
                x: a.left,
                y: a.top,
                w: a.right - a.left,
                h: a.bottom - a.top
            }
        };
        j.vb = function(d, c) {
            for (var b = [], a = d.firstChild; a; a = a.nextSibling)(c || a.nodeType == 1) && b.push(a);
            return b
        };

        function db(a, c, e, b) {
            b = b || "u";
            for (a = a ? a.firstChild : f; a; a = a.nextSibling)
                if (a.nodeType == 1) {
                    if (C(a, b) == c) return a;
                    if (!e) {
                        var d = db(a, c, e, b);
                        if (d) return d
                    }
                }
        }
        j.fe = db;

        function S(a, d, g, b) {
            b = b || "u";
            var c = [];
            for (a = a ? a.firstChild : f; a; a = a.nextSibling)
                if (a.nodeType == 1) {
                    C(a, b) == d && c.push(a);
                    if (!g) {
                        var e = S(a, d, g, b);
                        if (e.length) c = c.concat(e)
                    }
                }
            return c
        }
        j.Vf = function(b, a) {
            return b.getElementsByTagName(a)
        };
        j.ib = function(a, f, d, g) {
            d = d || "u";
            var e;
            do {
                if (a.nodeType == 1) {
                    var c;
                    d && (c = C(a, d));
                    if (c && c == gb(f, c) || g == a.tagName) {
                        e = a;
                        break
                    }
                }
                a = b.sc(a)
            } while (a && a != i.body);
            return e
        };
        j.Wf = function(a) {
            return W(["INPUT", "TEXTAREA", "SELECT"])[a.tagName]
        };

        function z() {
            var f = arguments,
                d, c, b, a, h = 1 & f[0],
                g = 1 + h;
            d = f[g - 1] || {};
            for (; g < f.length; g++)
                if (c = f[g])
                    for (b in c) {
                        a = c[b];
                        if (a !== e) {
                            a = c[b];
                            var i = d[b];
                            d[b] = h && (B(i) || B(a)) ? z(h, {}, i, a) : a
                        }
                    }
            return d
        }
        j.hb = z;

        function V(f, g) {
            var d = {},
                c, a, b;
            for (c in f) {
                a = f[c];
                b = g[c];
                if (a !== b) {
                    var e;
                    if (B(a) && B(b)) {
                        a = V(a, b);
                        e = !cb(a)
                    }!e && (d[c] = a)
                }
            }
            return d
        }
        j.ld = function(a) {
            return E(a) == "function"
        };
        j.Yf = function(a) {
            return E(a) == "array"
        };
        j.xg = function(a) {
            return E(a) == "string"
        };
        j.zc = function(a) {
            return !isNaN(q(a)) && isFinite(a)
        };
        j.c = l;
        j.Ye = B;

        function Q(a) {
            return i.createElement(a)
        }
        j.rc = function() {
            return Q("DIV")
        };
        j.kg = function() {
            return Q("SPAN")
        };
        j.Le = function() {};

        function D(b, c, a) {
            if (a == e) return b.getAttribute(c);
            b.setAttribute(c, a)
        }

        function C(a, b) {
            return D(a, b) || D(a, "data-" + b)
        }
        j.m = D;
        j.L = C;
        j.n = function(d, b, c) {
            var a = j.fd(C(d, b));
            if (isNaN(a)) a = c;
            return a
        };

        function x(b, a) {
            return D(b, "class", a) || ""
        }

        function W(b) {
            var a = {};
            l(b, function(b) {
                if (b != e) a[b] = b
            });
            return a
        }

        function kb(b, a) {
            return b.match(a || vb)
        }

        function P(b, a) {
            return W(kb(b || "", a))
        }
        j.Ad = W;
        j.cg = kb;
        j.dg = function(a) {
            a && (a = a.toLowerCase());
            return a
        };

        function Y(b, c) {
            var a = "";
            l(c, function(c) {
                a && (a += b);
                a += c
            });
            return a
        }

        function J(a, c, b) {
            x(a, Y(" ", z(V(P(x(a)), P(c)), P(b))))
        }
        j.sc = function(a) {
            return a.parentNode
        };
        j.Qb = function(a) {
            j.tb(a, "none")
        };
        j.Db = function(a, b) {
            j.tb(a, b ? "none" : "")
        };
        j.hg = function(b, a) {
            b.removeAttribute(a)
        };
        j.ig = function(d, a) {
            if (a) d.style.clip = "rect(" + c.B(a.i || a.C || 0) + "px " + c.B(a.v) + "px " + c.B(a.u) + "px " + c.B(a.g || a.A || 0) + "px)";
            else if (a !== e) {
                var h = d.style.cssText,
                    g = [new RegExp(/[\s]*clip: rect\(.*?\)[;]?/i), new RegExp(/[\s]*cliptop: .*?[;]?/i), new RegExp(/[\s]*clipright: .*?[;]?/i), new RegExp(/[\s]*clipbottom: .*?[;]?/i), new RegExp(/[\s]*clipleft: .*?[;]?/i)],
                    f = ab(h, g, "");
                b.zd(d, f)
            }
        };
        j.jg = function(b, a) {
            if (a) b.style.backgroundColor = "rgba(" + c.B(a.ud) + "," + c.B(a.rd) + "," + c.B(a.qd) + "," + a.R + ")"
        };
        j.Gb = function() {
            return +new Date
        };
        j.kb = function(b, a) {
            b.appendChild(a)
        };
        j.Zb = function(b, a, c) {
            (c || a.parentNode).insertBefore(b, a)
        };
        j.Fb = function(b, a) {
            a = a || b.parentNode;
            a && a.removeChild(b)
        };
        j.Se = function(a, b) {
            l(a, function(a) {
                j.Fb(a, b)
            })
        };
        j.nc = function(a) {
            j.Se(j.vb(a, d), a)
        };

        function hb() {
            l([].slice.call(arguments, 0), function(a) {
                if (j.Yf(a)) hb.apply(f, a);
                else a && a.l()
            })
        }
        j.l = hb;
        j.kd = function(a, b) {
            var c = j.sc(a);
            if (b & 1) {
                j.Q(a, (j.F(c) - j.F(a)) / 2);
                j.Cd(a, f)
            }
            if (b & 2) {
                j.N(a, (j.E(c) - j.E(a)) / 2);
                j.md(a, f)
            }
        };
        var R = {
            i: f,
            v: f,
            u: f,
            g: f,
            P: f,
            S: f
        };
        j.Ie = function(a) {
            var b = j.rc();
            s(b, {
                sd: "block",
                Lb: j.Mb(a),
                i: 0,
                g: 0,
                P: 0,
                S: 0
            });
            var d = j.od(a, R);
            j.Zb(b, a);
            j.kb(b, a);
            var e = j.od(a, R),
                c = {};
            l(d, function(b, a) {
                if (b == e[a]) c[a] = b
            });
            s(b, R);
            s(b, c);
            s(a, {
                i: 0,
                g: 0
            });
            return c
        };
        j.fd = q;
        j.Kd = function(b, a) {
            var c = i.body;
            while (a && b !== a && c !== a) a = a.parentNode;
            return b === a
        };

        function T(d, c, b) {
            var a = d.cloneNode(!c);
            !b && j.hg(a, "id");
            return a
        }
        j.hc = T;
        j.Ob = function(e, f) {
            var a = new Image;

            function b(e, d) {
                j.Ab(a, "load", b);
                j.Ab(a, "abort", c);
                j.Ab(a, "error", c);
                f && f(a, d)
            }

            function c(a) {
                b(a, d)
            }
            if (ub() && n < 11.6 || !e) b(!e);
            else {
                j.bb(a, "load", b);
                j.bb(a, "abort", c);
                j.bb(a, "error", c);
                a.src = e
            }
        };
        j.ye = function(d, a, e) {
            var c = d.length + 1;

            function b(b) {
                c--;
                if (a && b && b.src == a.src) a = b;
                !c && e && e(a)
            }
            l(d, function(a) {
                j.Ob(a.src, b)
            });
            b()
        };
        j.ve = function(a, g, i, h) {
            if (h) a = T(a);
            var c = S(a, g);
            if (!c.length) c = b.Vf(a, g);
            for (var f = c.length - 1; f > -1; f--) {
                var d = c[f],
                    e = T(i);
                x(e, x(d));
                b.zd(e, d.style.cssText);
                b.Zb(e, d);
                b.Fb(d)
            }
            return a
        };

        function Cb() {
            var a = this;
            b.Z(a, o);
            var d, q = "",
                s = ["av", "pv", "ds", "dn"],
                f = [],
                r, n = 0,
                k = 0,
                h = 0;

            function m() {
                J(d, r, (f[h || k & 2 || k] || "") + " " + (f[n] || ""));
                j.Wb(d, h ? "none" : "")
            }

            function c() {
                n = 0;
                a.K(g, "mouseup", c);
                a.K(i, "mouseup", c);
                a.K(i, "touchend", c);
                a.K(i, "touchcancel", c);
                a.K(g, "blur", c);
                m()
            }

            function p(b) {
                if (h) j.kc(b);
                else {
                    n = 4;
                    m();
                    a.a(g, "mouseup", c);
                    a.a(i, "mouseup", c);
                    a.a(i, "touchend", c);
                    a.a(i, "touchcancel", c);
                    a.a(g, "blur", c)
                }
            }
            a.te = function(a) {
                if (a === e) return k;
                k = a & 2 || a & 1;
                m()
            };
            a.xc = function(a) {
                if (a === e) return !h;
                h = a ? 0 : 3;
                m()
            };
            a.q = function(e) {
                a.O = d = j.Hb(e);
                D(d, "data-jssor-button", "1");
                var c = b.cg(x(d));
                if (c) q = c.shift();
                l(s, function(a) {
                    f.push(q + a)
                });
                r = Y(" ", f);
                f.unshift("");
                a.a(d, "mousedown", p);
                a.a(d, "touchstart", p)
            };
            b.q(a)
        }
        j.tc = function(a) {
            return new Cb(a)
        };
        j.ub = w;
        j.Cc = m("overflow");
        j.Wb = m("pointerEvents");
        j.N = m("top", 2);
        j.Cd = m("right", 2);
        j.md = m("bottom", 2);
        j.Q = m("left", 2);
        j.F = m("width", 2);
        j.E = m("height", 2);
        m("marginLeft", 2);
        m("marginTop", 2);
        j.Mb = m("position");
        j.tb = m("display");
        j.J = m("zIndex", 1);
        j.Fe = function(b, a, c) {
            if (a != e) Bb(b, a, c);
            else return zb(b)
        };
        j.zd = function(a, b) {
            if (b != e) a.style.cssText = b;
            else return a.style.cssText
        };
        j.Ge = function(b, a) {
            if (a === e) {
                a = w(b, "backgroundImage") || "";
                var c = /\burl\s*\(\s*["']?([^"'\r\n,]+)["']?\s*\)/gi.exec(a) || [];
                return c[1]
            }
            w(b, "backgroundImage", a ? "url('" + a + "')" : "")
        };
        var K;
        j.qe = K = {
            R: j.Fe,
            i: j.N,
            v: j.Cd,
            u: j.md,
            g: j.Q,
            P: j.F,
            S: j.E,
            Lb: j.Mb,
            sd: j.tb,
            Kb: j.J
        };
        j.od = function(c, b) {
            var a = {};
            l(b, function(d, b) {
                if (K[b]) a[b] = K[b](c)
            });
            return a
        };

        function s(b, h) {
            var a = I(),
                d = mb(),
                g = L(b);

            function c(l, a) {
                a = a || {};
                var h = a.gb || 0,
                    i = (a.cb || 0) % 360,
                    j = (a.jb || 0) % 360,
                    k = (a.W || 0) % 360,
                    c = a.T,
                    d = a.U,
                    f = a.Ng;
                if (c == e) c = 1;
                if (d == e) d = 1;
                if (f == e) f = 1;
                var b = new yb(a.ob, a.qb, h);
                b.yc(c, d, f);
                b.oe(a.Ub, a.Sb);
                b.cb(i);
                b.jb(j);
                b.je(k);
                b.Tb(a.A, a.C);
                l.style[g] = b.ke()
            }
            s = function(g, b) {
                b = b || {};
                var i = b.A,
                    k = b.C,
                    h;
                l(K, function(a, c) {
                    h = b[c];
                    h !== e && a(g, h)
                });
                j.ig(g, b.f);
                j.jg(g, b.nb);
                if (!a) {
                    i != e && j.Q(g, (b.Dd || 0) + i);
                    k != e && j.N(g, (b.be || 0) + k)
                }
                if (b.me)
                    if (d) jb(j.ab(f, M, g, b));
                    else if (a) c(g, b);
                else M(g, b)
            };
            j.Y = s;
            s(b, h)
        }
        j.ne = M;
        j.Y = s;

        function yb(j, k, n) {
            var d = this,
                b = [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, j || 0, k || 0, n || 0, 1],
                i = c.lb,
                h = c.ac,
                l = c.nd;

            function g(a) {
                return a * c.G / 180
            }

            function m(c, e, l, m, o, r, t, u, w, z, A, C, E, b, f, k, a, g, i, n, p, q, s, v, x, y, B, D, F, d, h, j) {
                return [c * a + e * p + l * x + m * F, c * g + e * q + l * y + m * d, c * i + e * s + l * B + m * h, c * n + e * v + l * D + m * j, o * a + r * p + t * x + u * F, o * g + r * q + t * y + u * d, o * i + r * s + t * B + u * h, o * n + r * v + t * D + u * j, w * a + z * p + A * x + C * F, w * g + z * q + A * y + C * d, w * i + z * s + A * B + C * h, w * n + z * v + A * D + C * j, E * a + b * p + f * x + k * F, E * g + b * q + f * y + k * d, E * i + b * s + f * B + k * h, E * n + b * v + f * D + k * j]
            }

            function e(c, a) {
                return m.apply(f, (a || b).concat(c))
            }
            d.yc = function(a, c, d) {
                if (a != 1 || c != 1 || d != 1) b = e([a, 0, 0, 0, 0, c, 0, 0, 0, 0, d, 0, 0, 0, 0, 1])
            };
            d.Tb = function(a, c, d) {
                b[12] += a || 0;
                b[13] += c || 0;
                b[14] += d || 0
            };
            d.cb = function(c) {
                if (c) {
                    a = g(c);
                    var d = h(a),
                        f = i(a);
                    b = e([1, 0, 0, 0, 0, d, f, 0, 0, -f, d, 0, 0, 0, 0, 1])
                }
            };
            d.jb = function(c) {
                if (c) {
                    a = g(c);
                    var d = h(a),
                        f = i(a);
                    b = e([d, 0, -f, 0, 0, 1, 0, 0, f, 0, d, 0, 0, 0, 0, 1])
                }
            };
            d.je = function(c) {
                if (c) {
                    a = g(c);
                    var d = h(a),
                        f = i(a);
                    b = e([d, f, 0, 0, -f, d, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1])
                }
            };
            d.oe = function(a, c) {
                if (a || c) {
                    j = g(a);
                    k = g(c);
                    b = e([1, l(k), 0, 0, l(j), 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1])
                }
            };
            d.ke = function() {
                return "matrix3d(" + b.join(",") + ")"
            }
        }
        var O = {
            Dd: 0,
            be: 0,
            A: 0,
            C: 0,
            Nb: 1,
            T: 1,
            U: 1,
            W: 0,
            cb: 0,
            jb: 0,
            ob: 0,
            qb: 0,
            gb: 0,
            Ub: 0,
            Sb: 0
        };
        j.Vd = function(c, d) {
            var a = c || {};
            if (c)
                if (b.ld(c)) a = {
                    I: a
                };
                else if (b.ld(c.f)) a.f = {
                I: c.f
            };
            a.I = a.I || d;
            if (a.f) a.f.I = a.f.I || d;
            if (a.nb) a.nb.I = a.nb.I || d;
            return a
        };

        function ib(c, a) {
            var b = {};
            l(c, function(c, d) {
                var f = c;
                if (a[d] != e)
                    if (j.zc(c)) f = c + a[d];
                    else f = ib(c, a[d]);
                b[d] = f
            });
            return b
        }
        j.Je = ib;
        j.re = function(o, j, s, t, E, F, p) {
            var a = j;
            if (o) {
                a = {};
                for (var i in j) {
                    var G = F[i] || 1,
                        B = E[i] || [0, 1],
                        g = (s - B[0]) / B[1];
                    g = c.s(c.H(g, 0), 1);
                    g = g * G;
                    var y = c.X(g);
                    if (g != y) g -= y;
                    var k = t.I || h.ec,
                        m, C = o[i],
                        r = j[i];
                    if (b.zc(r)) {
                        k = t[i] || k;
                        var D = k(g);
                        m = C + r * D
                    } else {
                        m = z({
                            Vb: {}
                        }, o[i]);
                        var A = t[i] || {};
                        l(r.Vb || r, function(d, a) {
                            k = A[a] || A.I || k;
                            var c = k(g),
                                b = d * c;
                            m.Vb[a] = b;
                            m[a] += b
                        })
                    }
                    a[i] = m
                }
                var x = l(j, function(b, a) {
                    return O[a] != e
                });
                x && l(O, function(c, b) {
                    if (a[b] == e && o[b] !== e) a[b] = o[b]
                });
                if (x) {
                    if (a.Nb) a.T = a.U = a.Nb;
                    a.xb = p.xb;
                    a.yb = p.yb;
                    if (v() && n >= 11 && (j.A || j.C) && s != 0 && s != 1) a.W = a.W || 1e-8;
                    a.me = d
                }
            }
            if (j.f && p.Tb) {
                var q = a.f.Vb,
                    w = (q.i || 0) + (q.u || 0),
                    u = (q.g || 0) + (q.v || 0);
                a.g = (a.g || 0) + u;
                a.i = (a.i || 0) + w;
                a.f.g -= u;
                a.f.v -= u;
                a.f.i -= w;
                a.f.u -= w
            }
            if (a.f && !a.f.i && !a.f.g && !a.f.C && !a.f.A && a.f.v == p.xb && a.f.u == p.yb) a.f = f;
            return a
        }
    };

    function o() {
        var a = this,
            f, e = [],
            c = [];

        function k(a, b) {
            e.push({
                zb: a,
                wb: b
            })
        }

        function j(a, c) {
            b.c(e, function(b, d) {
                b.zb == a && b.wb === c && e.splice(d, 1)
            })
        }

        function i() {
            e = []
        }

        function h() {
            b.c(c, function(a) {
                b.Ab(a.Rd, a.zb, a.wb, a.Od)
            });
            c = []
        }
        a.Gc = function() {
            return f
        };
        a.a = function(e, a, d, f) {
            b.bb(e, a, d, f);
            c.push({
                Rd: e,
                zb: a,
                wb: d,
                Od: f
            })
        };
        a.K = function(e, a, d, f) {
            b.c(c, function(g, h) {
                if (g.Rd === e && g.zb == a && g.wb === d && g.Od == f) {
                    b.Ab(e, a, d, f);
                    c.splice(h, 1)
                }
            })
        };
        a.Jd = h;
        a.Kc = a.addEventListener = k;
        a.removeEventListener = j;
        a.j = function(a) {
            var c = [].slice.call(arguments, 1);
            b.c(e, function(b) {
                b.zb == a && b.wb.apply(g, c)
            })
        };
        a.l = function() {
            if (!f) {
                f = d;
                h();
                i()
            }
        }
    }
    var l = function(C, D, i, m, R, Q) {
        C = C || 0;
        var a = this,
            p, n, o, s, F = 0,
            O = 1,
            L, M, K, G, B = 0,
            j = 0,
            r = 0,
            A, l, f, h, q, z, u = [],
            y, I = k,
            J, H = k;

        function T(a) {
            f += a;
            h += a;
            l += a;
            j += a;
            r += a;
            B += a
        }

        function x(x) {
            var k = x;
            if (q)
                if (!z && (k >= h || k < f) || z && k >= f) k = ((k - f) % q + q) % q + f;
            if (!A || s || j != k) {
                var g = c.s(k, h);
                g = c.H(g, f);
                if (i.Lc) g = h - g + f;
                if (!A || s || g != r) {
                    if (Q) {
                        var w = (g - l) / (D || 1),
                            o = b.re(R, Q, w, L, K, M, i);
                        if (y) b.c(o, function(b, a) {
                            y[a] && y[a](m, b)
                        });
                        else b.Y(m, o);
                        var n;
                        if (J) {
                            toDisablePointerEventsByAnimation = g > f && g < h;
                            if (toDisablePointerEventsByAnimation != H) n = H = toDisablePointerEventsByAnimation
                        }
                        if (!n && o.R != e) {
                            var p = o.R < .001;
                            if (p != I) n = I = p
                        }
                        if (n != e) {
                            n && b.Wb(m, "none");
                            !n && b.Wb(m, b.m(m, "data-events"))
                        }
                    }
                    var v = r,
                        t = r = g;
                    b.c(u, function(b, c) {
                        var a = !A && z || k <= j ? u[u.length - c - 1] : b;
                        a.z(g - B)
                    });
                    j = k;
                    A = d;
                    a.Mc(v - l, t - l);
                    a.Bb(v, t)
                }
            }
        }

        function E(a, b, d) {
            b && a.lc(h);
            if (!d) {
                f = c.s(f, a.mc() + B);
                h = c.H(h, a.sb() + B)
            }
            u.push(a)
        }
        var v = g.requestAnimationFrame || g.webkitRequestAnimationFrame || g.mozRequestAnimationFrame || g.msRequestAnimationFrame;
        if (b.qg() && b.Fc() < 7 || !v) v = function(a) {
            b.jc(a, i.Yd)
        };

        function N() {
            if (p) {
                var d = b.Gb(),
                    e = c.s(d - F, i.de),
                    a = j + e * o * O;
                F = d;
                if (a * o >= n * o) a = n;
                x(a);
                if (!s && a * o >= n * o) P(G);
                else v(N)
            }
        }

        function w(e, g, i) {
            if (!p) {
                p = d;
                s = i;
                G = g;
                e = c.H(e, f);
                e = c.s(e, h);
                n = e;
                o = n < j ? -1 : 1;
                a.Qc();
                F = b.Gb();
                v(N)
            }
        }

        function P(b) {
            if (p) {
                s = p = G = k;
                a.Sc();
                b && b()
            }
        }
        a.Zd = function(a, b, c) {
            w(a ? j + a : h, b, c)
        };
        a.oc = w;
        a.Ke = function(a, b) {
            w(h, a, b)
        };
        a.D = P;
        a.Nd = function() {
            return j
        };
        a.Bd = function() {
            return n
        };
        a.k = function() {
            return r
        };
        a.z = x;
        a.se = function() {
            x(h, d)
        };
        a.Dc = function() {
            return p
        };
        a.id = function(a) {
            O = a
        };
        a.lc = T;
        a.M = function(a, b) {
            E(a, 0, b)
        };
        a.Pc = function(a) {
            E(a, 1)
        };
        a.Oc = function(a) {
            h += a
        };
        a.mc = function() {
            return f
        };
        a.sb = function() {
            return h
        };
        a.Bb = a.Qc = a.Sc = a.Mc = b.Le;
        a.Nc = b.Gb();
        i = b.hb({
            Yd: 16,
            de: 50
        }, i);
        m && (J = b.m(m, "data-inactive"));
        q = i.ic;
        z = i.xe;
        y = i.ze;
        f = l = C;
        h = C + D;
        M = i.B || {};
        K = i.Ae || {};
        L = b.Vd(i.eb)
    };
    var n = {
            De: "data-scale",
            Cb: "data-autocenter",
            Jc: "data-nofreeze",
            pd: "data-nodrag"
        },
        q = new function() {
            var a = this;
            a.Ic = function(c, a, e, d) {
                (d || !b.m(c, a)) && b.m(c, a, e)
            };
            a.Hc = function(a) {
                var c = b.n(a, n.Cb);
                b.kd(a, c)
            }
        };
    new(function() {});
    var r = {
            ed: 1
        },
        u = function() {
            var a = this,
                D = b.Z(a, o),
                h, v, C, B, m, l = 0,
                g, s, p, z, A, i, k, u, t, x, j;

            function y(a) {
                j[a] && j[a].te(a == l)
            }

            function w(b) {
                a.j(r.ed, b * s)
            }
            a.Wc = function(a) {
                if (a != m) {
                    var d = l,
                        b = c.X(a / s);
                    l = b;
                    m = a;
                    y(d);
                    y(b)
                }
            };
            a.bd = function(a) {
                b.Db(h, a)
            };
            a.dd = function(I) {
                b.l(j);
                m = e;
                a.Jd();
                x = [];
                j = [];
                b.nc(h);
                v = c.rb(I / s);
                l = 0;
                var H = u + z,
                    y = t + A,
                    r = c.rb(v / p) - 1;
                C = u + H * (!i ? r : p - 1);
                B = t + y * (i ? r : p - 1);
                b.F(h, C);
                b.E(h, B);
                for (var n = 0; n < v; n++) {
                    var D = b.kg();
                    b.Of(D, n + 1);
                    var o = b.ve(k, "numbertemplate", D, d);
                    b.Mb(o, "absolute");
                    var G = n % (r + 1),
                        E = c.X(n / (r + 1)),
                        F = g.cc && !i ? r - G : G;
                    b.Q(o, (!i ? F : E) * H);
                    b.N(o, (i ? F : E) * y);
                    b.kb(h, o);
                    x[n] = o;
                    g.Tc & 1 && a.a(o, "click", b.ab(f, w, n));
                    g.Tc & 2 && a.a(o, "mouseenter", b.ab(f, w, n));
                    j[n] = b.tc(o)
                }
                q.Hc(h)
            };
            a.q = function(d, c) {
                a.O = h = b.Hb(d);
                a.Ec = g = b.hb({
                    yd: 10,
                    vd: 10,
                    Tc: 1
                }, c);
                k = b.fe(h, "prototype");
                u = b.F(k);
                t = b.E(k);
                b.Fb(k, h);
                s = g.td || 1;
                p = g.wd || 1;
                z = g.yd;
                A = g.vd;
                i = g.Ce & 2;
                g.fb && q.Ic(h, n.Cb, g.fb)
            };
            a.l = function() {
                b.l(j, D)
            };
            b.q(a)
        },
        v = function() {
            var a = this,
                v = b.Z(a, o),
                e, c, g, l, s, k, h, m, j, i;

            function p(b) {
                a.j(r.ed, b, d)
            }

            function u(a) {
                b.Db(e, a);
                b.Db(c, a)
            }

            function t() {
                j.xc((g.Pb || !l.we(h)) && k > 1);
                i.xc((g.Pb || !l.ue(h)) && k > 1)
            }
            a.Wc = function(c, a, b) {
                h = a;
                !b && t()
            };
            a.bd = u;
            a.dd = function(g) {
                k = g;
                h = 0;
                if (!s) {
                    a.a(e, "click", b.ab(f, p, -m));
                    a.a(c, "click", b.ab(f, p, m));
                    j = b.tc(e);
                    i = b.tc(c);
                    b.m(e, n.Jc, 1);
                    b.m(c, n.Jc, 1);
                    s = d
                }
            };
            a.q = function(f, d, h, i) {
                a.Ec = g = b.hb({
                    td: 1
                }, h);
                e = f;
                c = d;
                if (g.cc) {
                    e = d;
                    c = f
                }
                m = g.td;
                l = i;
                if (g.fb) {
                    q.Ic(e, n.Cb, g.fb);
                    q.Ic(c, n.Cb, g.fb)
                }
                q.Hc(e);
                q.Hc(c)
            };
            a.l = function() {
                b.l(j, i, v)
            };
            b.q(a)
        };

    function p(e, d, c) {
        var a = this;
        b.Z(a, o);
        l.call(a, 0, c.pb);
        a.fc = 0;
        a.vc = c.pb
    }
    p.wc = 21;
    p.gc = 24;
    var s = function() {
            var a = this,
                gb = b.Z(a, o);
            l.call(a, 0, 0);
            var e, u, fb = [h.ec, h.Xe, h.mf, h.xd, h.yf, h.nf, h.Jf, h.If, h.Hf, h.tf, h.Mf, h.hf, h.of, h.pf, h.qf, h.rf, h.sf, h.uf, h.vf, h.wf, h.xf, h.zf, h.Kf, h.Af, h.Bf, h.Cf, h.Df, h.Ef, h.Ff, h.jd, h.Rc, h.Gf, h.Ne, h.Oe],
                R = {},
                H, E, v = new l(0, 0),
                I = [],
                y = [],
                G, r = 0;

            function K(d, c) {
                var a = {};
                b.c(d, function(d, f) {
                    var e = R[f];
                    if (e) {
                        if (b.Ye(d)) d = K(d, c || f == "e");
                        else if (c)
                            if (b.zc(d)) d = fb[d];
                        a[e] = d
                    }
                });
                return a
            }

            function L(c, f) {
                var e = [],
                    d = b.n(c, "play");
                if (f && d) {
                    var g = new s(c, u, {
                        eg: d
                    });
                    P.push(g);
                    a.a(g, p.wc, Y);
                    a.a(g, p.gc, T)
                } else b.c(b.vb(c), function(a) {
                    e = e.concat(L(a, f + 1))
                });
                if (!f && (!j || j & 16) || f && (!d || !(d & 16))) {
                    var h = H[b.n(c, "t")];
                    h && e.push({
                        O: c,
                        Ac: h
                    })
                }
                return e
            }

            function Q(c, e) {
                var a = I[c];
                if (a == f) {
                    a = I[c] = {
                        db: c,
                        pc: [],
                        hd: []
                    };
                    var d = 0;
                    !b.c(y, function(a, b) {
                        d = b;
                        return a.db > c
                    }) && d++;
                    y.splice(d, 0, a)
                }
                return a
            }

            function cb(o, p, g) {
                var a, e;
                if (E) {
                    var k = E[b.n(o, "c")];
                    if (k) {
                        a = Q(k.r, 0);
                        a.ag = k.e || 0
                    }
                }
                b.c(p, function(h) {
                    var f = b.hb(d, {}, K(h)),
                        i = b.Vd(f.eb);
                    delete f.eb;
                    if (f.g) {
                        f.A = f.g;
                        i.A = i.g;
                        delete f.g
                    }
                    if (f.i) {
                        f.C = f.i;
                        i.C = i.i;
                        delete f.i
                    }
                    var m = {
                            eb: i,
                            xb: g.P,
                            yb: g.S
                        },
                        j = new l(h.b, h.d, m, o, g, f);
                    r = c.H(r, h.b + h.d);
                    if (a) {
                        if (!e) e = new l(h.b, 0);
                        e.M(j)
                    } else {
                        var k = Q(h.b, h.b + h.d);
                        k.pc.push(j)
                    }
                    if (f.nb) g.nb = {
                        ud: 0,
                        rd: 0,
                        qd: 0,
                        R: 0
                    };
                    g = b.Je(g, f)
                });
                if (a && e) {
                    e.se();
                    var h = e,
                        i, j = e.mc(),
                        m = e.sb(),
                        n = c.H(m, a.ag);
                    if (a.db < m) {
                        if (a.db > j) {
                            h = new l(j, a.db - j);
                            h.M(e, d)
                        } else h = f;
                        i = new l(a.db, n - j, {
                            ic: n - a.db,
                            xe: d
                        });
                        i.M(e, d)
                    }
                    h && a.pc.push(h);
                    i && a.hd.push(i)
                }
                return g
            }

            function bb(a) {
                b.c(a, function(d) {
                    var a = d.O,
                        f = b.F(a),
                        e = b.E(a),
                        c = {
                            g: b.Q(a),
                            i: b.N(a),
                            A: 0,
                            C: 0,
                            R: 1,
                            Kb: b.J(a) || 0,
                            W: 0,
                            cb: 0,
                            jb: 0,
                            T: 1,
                            U: 1,
                            ob: 0,
                            qb: 0,
                            gb: 0,
                            Ub: 0,
                            Sb: 0,
                            P: f,
                            S: e,
                            f: {
                                i: 0,
                                v: f,
                                u: e,
                                g: 0
                            }
                        };
                    c.Dd = c.g;
                    c.be = c.i;
                    cb(a, d.Ac, c)
                })
            }

            function eb(f, e, g) {
                var c = f.b - e;
                if (c) {
                    var b = new l(e, c);
                    b.M(v, d);
                    b.lc(g);
                    a.M(b)
                }
                a.Oc(f.d);
                return c
            }

            function db(e) {
                var c = v.mc(),
                    d = 0;
                b.c(e, function(e, f) {
                    e = b.hb({
                        d: 3e3
                    }, e);
                    eb(e, c, d);
                    c = e.b;
                    d += e.d;
                    if (!f || e.t == 2) {
                        a.fc = c;
                        a.vc = c + e.d
                    }
                })
            }

            function D(g, e, d) {
                var f = e.length;
                if (f > 4)
                    for (var j = c.rb(f / 4), a = 0; a < j; a++) {
                        var h = e.slice(a * 4, c.s(a * 4 + 4, f)),
                            i = new l(h[0].db, 0);
                        D(i, h, d);
                        g.M(i)
                    } else b.c(e, function(a) {
                        b.c(d ? a.hd : a.pc, function(a) {
                            d && a.Oc(r - a.sb());
                            g.M(a)
                        })
                    })
            }
            var j, J, w = 0,
                g, B, m, M, C, P = [],
                A = [],
                t, F, n;

            function z(a) {
                return a & 2 || a & 4 && b.ad().Yc
            }

            function Z() {
                if (!C) {
                    g & 8 && a.a(i, "keydown", S);
                    if (g & 32) {
                        a.a(i, "mousedown", x);
                        a.a(i, "touchstart", x)
                    }
                    C = d
                }
            }

            function X() {
                a.K(i, "keydown", S);
                a.K(i, "mousedown", x);
                a.K(i, "touchstart", x);
                C = k
            }

            function N(b) {
                if (!t || b) {
                    t = d;
                    a.D();
                    b && w && a.z(0);
                    a.id(1);
                    a.Ke();
                    Z();
                    a.j(p.wc, a)
                }
            }

            function q() {
                if (!F && (t || a.k())) {
                    F = d;
                    a.D();
                    a.Nd() > a.fc && a.z(a.fc);
                    a.id(m || 1);
                    a.oc(0)
                }
            }

            function U() {
                !n && q()
            }

            function O(c) {
                var b = c;
                if (c < 0 && a.k()) b = 1;
                if (b != w) {
                    w = b;
                    J && a.j(p.gc, a, w)
                }
            }

            function S(a) {
                g & 8 && b.Id(a) == 27 && q()
            }

            function W(a) {
                if (n && b.Fd(a) !== f) {
                    n = k;
                    g & 16 && b.jc(U, 160)
                }
            }

            function x(a) {
                g & 32 && !b.Kd(e, b.Ib(a)) && q()
            }

            function V(a) {
                if (!n) {
                    n = d;
                    if (j & 1) b.Md(a, e) && N()
                }
            }

            function ab(i) {
                var h = b.Ib(i),
                    a = b.ib(h, f, f, "A"),
                    c = a && (b.Wf(a) || a === e || b.Kd(e, a));
                if (t && z(g)) !c && q();
                else if (z(j)) !c && N(d)
            }

            function Y(b) {
                var a = b.Xf();
                childSlideoPlaying = A[a];
                childSlideoPlaying !== b && A[a] && A[a].Uf();
                A[a] = b
            }

            function T(b, c) {
                a.j(p.gc, b, c)
            }
            a.Xf = function() {
                return M || ""
            };
            a.Uf = q;
            a.Qc = function() {
                O(1)
            };
            a.Sc = function() {
                t = k;
                F = k;
                O(-1);
                !a.k() && X()
            };
            a.Bb = function() {
                !n && B && a.Nd() > a.vc && q()
            };
            a.q = function(l, h, f) {
                e = l;
                u = h;
                j = f.eg;
                G = f.Tf;
                H = u.Zc;
                E = u.Jg;
                var k = {
                    i: "y",
                    g: "x",
                    u: "m",
                    v: "t",
                    W: "r",
                    cb: "rX",
                    jb: "rY",
                    T: "sX",
                    U: "sY",
                    ob: "tX",
                    qb: "tY",
                    gb: "tZ",
                    Ub: "kX",
                    Sb: "kY",
                    R: "o",
                    eb: "e",
                    Kb: "i",
                    f: "c",
                    nb: "bc",
                    ud: "re",
                    rd: "gr",
                    qd: "bl"
                };
                b.c(k, function(b, a) {
                    R[b] = a
                });
                bb(L(e, 0));
                D(v, y);
                if (j) {
                    a.M(v);
                    G = d;
                    B = b.n(e, "idle");
                    (z(j) || z(g)) && a.a(e, "click", ab);
                    if ((j & 1 || B) && !b.ad().Yc) {
                        a.a(e, "mouseenter", V);
                        a.a(e, "mouseleave", W)
                    }
                    g = b.n(e, "rollback");
                    m = b.L(e, "speed") || "";
                    if (m.substr(0, 1) == "x") m = m.substr(1);
                    m = b.fd(m);
                    M = b.L(e, "group");
                    J = b.n(e, "pause")
                }
                var i = u.Rf || [],
                    c = i[b.n(e, "b")] || [];
                c = c.concat({
                    b: r,
                    d: c.length ? 0 : f.pb || B || 0
                });
                db(c);
                G && a.Oc(1e8);
                r = a.sb();
                D(a, y, d);
                a.z(-1);
                a.z(b.n(e, "begin") || 0)
            };
            a.l = function() {
                b.l(gb, P);
                a.D();
                a.z(-1)
            };
            b.q(a)
        },
        j = (g.module || {}).exports = function() {
            var a = this,
                vc = b.Z(a, o),
                Kb = "data-jssor-slider",
                Ac = "data-jssor-thumb",
                u, m, R, Hb, eb, sb, Z, M, K, P, Sb, xc = 1,
                oc = 1,
                Ec = 1,
                dc = 1,
                Gc = {},
                x, U, Ub, Yb, Xb, Ib, Gb, Fb, bb, C = [],
                fc, t = -1,
                gc, q, I, H, L, kb, lb, F, J, hb, S, z, W, jb, Y = [],
                jc, lc, Hc, s, rb, Cb, nb, ab, X, ec, Bb, Mb, hc, G, Zb = 0,
                db = 0,
                Q = Number.MAX_VALUE,
                N = Number.MIN_VALUE,
                D, ib, fb, T = 1,
                Rb = 0,
                mb, B, zb, yb, O, wb, xb, A, V, ob, y, Jb, Vb = b.ad(),
                Ab = Vb.Yc,
                w = [],
                E, tb, cb, ac, yc, Fc, ub;

            function Eb() {
                return !T && X & 12
            }

            function zc() {
                return Rb || !T && X & 3
            }

            function Db() {
                return !B && !Eb() && !y.Dc()
            }

            function Qc() {
                return !zc() && Db()
            }

            function Cc() {
                return z || R
            }

            function Jc() {
                return Cc() & 2 ? lb : kb
            }

            function Nb(a, c, d) {
                b.Q(a, c);
                b.N(a, d)
            }

            function tc(c, b) {
                var a = Cc(),
                    d = (kb * b + Zb) * (a & 1),
                    e = (lb * b + Zb) * (a & 2) / 2;
                Nb(c, d, e)
            }

            function qc(b, f) {
                if (B && !(D & 1)) {
                    var e = b,
                        d;
                    if (b < N) {
                        e = N;
                        d = -1
                    }
                    if (b > Q) {
                        e = Q;
                        d = 1
                    }
                    if (d) {
                        var a = b - e;
                        if (f) {
                            a = c.Qe(a) * 2 / c.G;
                            a = c.p(a * d, 1.6)
                        } else {
                            a = c.p(a * d, .625);
                            a = c.nd(a * c.G / 2)
                        }
                        b = e + a * d
                    }
                }
                return b
            }

            function Lc(a) {
                return qc(a, d)
            }

            function dd(a) {
                return qc(a)
            }

            function vb(a, b) {
                if (!(D & 1)) {
                    var c = a - Q + (b || 0),
                        d = N - a + (b || 0);
                    if (c > 0 && c > d) a = Q;
                    else if (d > 0) a = N
                }
                return a
            }

            function mc(a) {
                return !(D & 1) && a - N < .0001
            }

            function kc(a) {
                return !(D & 1) && Q - a < .0001
            }

            function pb(a) {
                return !(D & 1) && (a - N < .0001 || Q - a < .0001)
            }

            function Ob(c, a, d) {
                !ub && b.c(Y, function(b) {
                    b.Wc(c, a, d)
                })
            }

            function sc(b) {
                var a = b,
                    d = pb(b);
                if (d) a = vb(a);
                else {
                    b = v(b);
                    a = b
                }
                a = c.X(a);
                a = c.H(a, 0);
                return a
            }

            function ad(a) {
                if (a != t) {
                    w[t];
                    fc = t;
                    t = a;
                    gc = w[t]
                }
            }

            function Oc() {
                z = 0;
                var b = A.k(),
                    d = sc(b);
                Ob(d, b);
                if (pb(b) || b == c.X(b)) {
                    if (s & 2 && (ab > 0 && d == q - 1 || ab < 0 && !d)) s = 0;
                    ad(d);
                    a.j(j.Pf, t, fc)
                }
            }

            function bc(a, b) {
                if (q && (!b || !y.Dc())) {
                    y.D();
                    y.qc(a, a)
                }
            }

            function qb(a) {
                if (q) {
                    a = v(a);
                    a = vb(a);
                    bc(a)
                } else Ob(0, 0)
            }

            function Tc() {
                var b = j.ce || 0,
                    a = ib;
                j.ce |= a;
                return W = a & ~b
            }

            function Pc() {
                if (W) {
                    j.ce &= ~ib;
                    W = 0
                }
            }

            function Uc() {
                var a = b.rc();
                b.Y(a, bb);
                return a
            }

            function v(b, a) {
                a = a || q || 1;
                return (b % a + a) % a
            }

            function uc(c, a, b) {
                s & 8 && (s = 0);
                Wb(c, Bb, a, b)
            }

            function Pb() {
                b.c(Y, function(a) {
                    a.bd(a.Ec.Kg <= T)
                })
            }

            function cd(c) {
                if (!T && (b.Fd(c) || !b.Md(c, u))) {
                    T = 1;
                    Pb();
                    if (!B) {
                        X & 12 && Bc();
                        w[t] && w[t].Xb()
                    }
                    a.j(j.mg)
                }
            }

            function bd() {
                if (T) {
                    T = 0;
                    Pb();
                    B || !(X & 12) || Dc()
                }
                a.j(j.Eg)
            }

            function Ic() {
                b.c(C, function(a) {
                    b.Y(a, bb);
                    b.Cc(a, "hidden");
                    b.Qb(a)
                });
                b.Y(U, bb)
            }

            function Qb(b, a) {
                Wb(b, a, d)
            }

            function Wb(g, h, l, p) {
                if (q && (!B || m.Ed) && !Eb()) {
                    var f = A.k(),
                        a = g;
                    if (l) {
                        a = f + g;
                        if (D & 2) {
                            if (mc(f) && g < 0) a = Q;
                            if (kc(f) && g > 0) a = N
                        }
                    }
                    if (!(D & 1))
                        if (p) a = v(a);
                        else a = vb(a, .5);
                    if (l && !pb(a)) a = c.B(a);
                    var j = (a - f) % q;
                    a = f + j;
                    if (h == e) h = Bb;
                    var b = c.mb(j),
                        i = 0;
                    if (b) {
                        if (b < 1) b = c.p(b, .5);
                        if (b > 1) {
                            var o = Jc(),
                                n = (R & 1 ? Gb : Fb) / o;
                            b = c.s(b, n * 1.5)
                        }
                        i = h * b
                    }
                    ub = d;
                    y.D();
                    ub = k;
                    y.qc(f, a, i)
                }
            }

            function Mc(e, h, o) {
                var l = this,
                    i = {
                        i: 2,
                        v: 1,
                        u: 2,
                        g: 1
                    },
                    m = {
                        i: "top",
                        v: "right",
                        u: "bottom",
                        g: "left"
                    },
                    g, a, f, j, k = {};
                l.O = e;
                l.Rb = function(q, l, u) {
                    var p, s = q,
                        r = l;
                    if (!f) {
                        f = b.Ie(e);
                        g = e.parentNode;
                        j = {
                            yc: b.n(e, n.De, 1),
                            fb: b.n(e, n.Cb)
                        };
                        b.c(m, function(c, a) {
                            k[a] = b.n(e, "data-scale-" + c, 1)
                        });
                        a = e;
                        if (h) {
                            a = b.hc(g, d);
                            b.Y(a, {
                                i: 0,
                                g: 0
                            });
                            b.kb(a, e);
                            b.kb(g, a)
                        }
                    }
                    if (o) {
                        p = c.H(q, l);
                        if (h)
                            if (u >= 0 && u < 1) {
                                var w = c.s(q, l);
                                p = c.s(p / w, 1 / (1 - u)) * w
                            }
                    } else s = r = p = c.p(K < P ? l : q, j.yc);
                    var x = h ? 1.001 : 1,
                        t = p * x;
                    h && (dc = t);
                    b.Ag(a, t);
                    b.F(g, f.P * s);
                    b.E(g, f.S * r);
                    var v = b.Ld() && b.Fc() < 9 ? t : 1,
                        y = (s - v) * f.P / 2,
                        z = (r - v) * f.S / 2;
                    b.Q(a, y);
                    b.N(a, z);
                    b.c(f, function(d, a) {
                        if (i[a] && d) {
                            var e = (i[a] & 1) * c.p(q, k[a]) * d + (i[a] & 2) * c.p(l, k[a]) * d / 2;
                            b.qe[a](g, e)
                        }
                    });
                    b.kd(g, j.fb)
                }
            }

            function Yc() {
                var a = this;
                l.call(a, 0, 0, {
                    ic: q
                });
                b.c(w, function(b) {
                    a.Pc(b);
                    b.lc(G / F)
                })
            }

            function Xc() {
                var a = this,
                    b = Jb.O;
                l.call(a, -1, 2, {
                    eb: h.ec,
                    ze: {
                        Lb: tc
                    },
                    ic: q,
                    Lc: Cb
                }, b, {
                    Lb: 1
                }, {
                    Lb: -2
                })
            }

            function Zc() {
                var b = this;
                l.call(b, -1e8, 2e8);
                b.Bb = function(e, b) {
                    if (c.mb(b - e) > 1e-5) {
                        var g = b,
                            f = b;
                        if (c.X(b) != b && b > e && (D & 1 || b > db)) f++;
                        var h = sc(f);
                        Ob(h, g, d);
                        a.j(j.Gg, v(g), v(e), b, e)
                    }
                }
            }

            function Nc(o, n) {
                var b = this,
                    g, i, e, c, h;
                l.call(b, -1e8, 2e8, {
                    de: 100
                });
                b.Qc = function() {
                    mb = d;
                    a.j(j.wg, v(A.k()), V.k())
                };
                b.Sc = function() {
                    mb = k;
                    c = k;
                    a.j(j.vg, v(A.k()), V.k());
                    !B && Oc()
                };
                b.Bb = function(f, b) {
                    var a = b;
                    if (c) a = h;
                    else if (e) {
                        var d = b / e;
                        a = m.Xd(d) * (i - g) + g
                    }
                    a = Lc(a);
                    V.z(a)
                };
                b.qc = function(a, c, h, f) {
                    B = k;
                    e = h || 1;
                    g = a;
                    i = c;
                    ub = d;
                    V.z(a);
                    ub = k;
                    b.z(0);
                    b.oc(e, f)
                };
                b.tg = function() {
                    c = d;
                    c && b.Zd(f, f, d)
                };
                b.sg = function(a) {
                    h = a
                };
                V = new Zc;
                V.M(o);
                V.M(n)
            }

            function Kc() {
                var c = this,
                    a = Uc();
                b.J(a, 0);
                c.O = a;
                c.Yb = function() {
                    b.Qb(a);
                    b.nc(a)
                }
            }

            function Wc(n, h) {
                var g = this,
                    hb = b.Z(g, o),
                    x, C = 0,
                    T, ib = n,
                    B = b.n(ib, "data-fillmode", m.rg),
                    F, r, z = [],
                    S, L, P, O, i, u, y, Q;
                l.call(g, -J, J + 1, {
                    ic: D & 1 ? q : e,
                    Lc: Cb
                });

                function G(a) {
                    x && x.l();
                    Rb -= C;
                    C = 0;
                    R(n, a, 0);
                    O = d;
                    x = new eb.V(n, eb, {
                        pb: b.n(n, "idle", ec),
                        Tf: !s
                    });
                    x.Kc(p.gc, X)
                }

                function Y() {
                    x.Nc < eb.Nc && G()
                }

                function X(b, a) {
                    C += a;
                    Rb += a;
                    if (h == t) !C && g.Xb()
                }

                function N(n, p, m) {
                    if (!L) {
                        L = d;
                        if (r && m) {
                            var e = m.width,
                                c = m.height,
                                l = e,
                                i = c;
                            if (e && c && B) {
                                if (B & 3 && (!(B & 4) || e > I || c > H)) {
                                    var f = k,
                                        o = I / H * c / e;
                                    if (B & 1) f = o > 1;
                                    else if (B & 2) f = o < 1;
                                    l = f ? e * H / c : I;
                                    i = f ? H : c * I / e
                                }
                                b.F(r, l);
                                b.E(r, i);
                                b.N(r, (H - i) / 2);
                                b.Q(r, (I - l) / 2)
                            }
                            b.Mb(r, "absolute");
                            a.j(j.og, h)
                        }
                    }
                    p.Td(k);
                    n && n(g)
                }

                function W(f, b, c, e) {
                    if (e == y && t == h && s && Db() && !g.Gc()) {
                        var a = v(f);
                        E.le(a, h, b, g, c, H / I);
                        b.Nf();
                        ob.lc(a - ob.mc() - 1);
                        ob.z(a);
                        bc(a, d)
                    }
                }

                function cb(b) {
                    if (b == y && t == h && Db() && !g.Gc()) {
                        if (!i) {
                            var a = f;
                            if (E)
                                if (E.Eb == h) a = E.pe();
                                else E.Yb();
                            Y();
                            i = new Vc(n, h, a, x);
                            i.lg(u)
                        }!i.Dc() && i.Uc()
                    }
                }

                function K(a, d, k) {
                    if (a == h) {
                        if (a != d) w[d] && w[d].Ud();
                        else !k && i && i.Lf();
                        u && u.xc();
                        y = b.Gb();
                        g.Ob(b.ab(f, cb, y))
                    } else {
                        var j = c.s(h, a),
                            e = c.H(h, a),
                            n = c.s(e - j, j + q - e),
                            l = J + m.lf - 1;
                        (!P || n <= l) && g.Ob()
                    }
                }

                function db() {
                    if (t == h && i) {
                        i.D();
                        u && u.jf();
                        u && u.Me();
                        i.Sd()
                    }
                }

                function gb() {
                    t == h && i && i.D()
                }

                function Z(b) {
                    !fb && a.j(j.gf, h, b)
                }
                g.Td = function(a) {
                    if (Q != a) {
                        Q = a;
                        a && b.kb(n, F);
                        !a && b.Fb(F)
                    }
                };
                g.Ob = function(e, c) {
                    c = c || g;
                    if (z.length && !L) {
                        c.Td(d);
                        if (!S) {
                            S = d;
                            a.j(j.ff, h);
                            b.c(z, function(a) {
                                if (!b.m(a, "src")) {
                                    a.src = b.L(a, "src2") || "";
                                    b.tb(a, b.m(a, "data-display"))
                                }
                            })
                        }
                        b.ye(z, r, b.ab(f, N, e, c))
                    } else N(e, c)
                };
                g.ef = function() {
                    if (Qc())
                        if (q == 1) {
                            g.Ud();
                            K(h, h)
                        } else {
                            var a;
                            if (E) a = E.ie(q);
                            if (a) {
                                y = b.Gb();
                                var c = h + ab,
                                    d = w[v(c)];
                                return d.Ob(b.ab(f, W, c, d, a, y), g)
                            } else(D || !pb(A.k()) || !pb(A.k() + ab)) && Qb(ab)
                        }
                };
                g.Xb = function() {
                    K(h, h, d)
                };
                g.Ud = function() {
                    u && u.jf();
                    u && u.Me();
                    g.Pd();
                    i && i.df();
                    i = f;
                    G()
                };
                g.Nf = function() {
                    b.Qb(n)
                };
                g.Pd = function() {
                    b.Db(n)
                };

                function R(a, h, c) {
                    if (b.m(a, Kb)) return;
                    if (!O) {
                        b.m(a, "data-events", b.Wb(a));
                        b.m(a, "data-display", b.tb(a));
                        b.Cg(a, b.L(a, "data-to"));
                        b.Dg(a, b.L(a, "data-bf"));
                        b.Fg(a, b.n(a, "data-p"));
                        b.ng(a, b.L(a, "po"));
                        if (a.tagName == "IMG") {
                            z.push(a);
                            if (!b.m(a, "src")) {
                                P = d;
                                b.Qb(a)
                            }
                        }
                        var e = b.Ge(a);
                        if (e) {
                            var f = new Image;
                            b.L(f, "src2", e);
                            z.push(f)
                        }
                        c && b.J(a, (b.J(a) || 0) + 1)
                    }
                    var g = b.vb(a);
                    b.c(g, function(d) {
                        if (c < 2 && !r)
                            if (b.L(d, "u") == "image") {
                                r = d;
                                r.border = 0;
                                b.Y(r, bb);
                                b.Y(a, bb)
                            }
                        R(d, h, c + 1)
                    })
                }
                g.Mc = function(c, b) {
                    var a = J - b;
                    tc(T, a)
                };
                g.Eb = h;
                var M = b.fe(n, "thumb", d);
                if (M) {
                    b.hc(M);
                    b.Qb(M)
                }
                b.Db(n);
                F = b.hc(U);
                b.J(F, 1e3);
                g.a(n, "click", Z);
                G(d);
                T = n;
                g.a(a, 203, K);
                g.a(a, 28, gb);
                g.a(a, 24, db);
                g.l = function() {
                    b.l(hb, x, i)
                }
            }

            function Vc(F, h, q, r) {
                var c = this,
                    D = b.Z(c, o),
                    i = 0,
                    u = 0,
                    g, m, f, e, n, x, v, y = w[h];
                l.call(c, 0, 0);

                function A() {
                    c.Uc()
                }

                function C(a) {
                    v = a;
                    c.D();
                    c.Uc()
                }

                function z() {}
                c.Uc = function() {
                    if (!B && !mb && !v && t == h && !c.Gc()) {
                        var k = c.k();
                        if (!k)
                            if (g && !n) {
                                n = d;
                                c.Sd(d);
                                a.j(j.bf, h, u, i, u, g, e)
                            }
                        a.j(j.Hd, h, k, i, m, f, e);
                        if (!Eb()) {
                            var l;
                            if (k == e) s && b.jc(y.ef, 20);
                            else {
                                if (k == f) l = e;
                                else if (!k) l = f;
                                else l = c.Bd();
                                (k != f || !zc()) && c.oc(l, A)
                            }
                        }
                    }
                };
                c.Lf = function() {
                    f == e && f == c.k() && c.z(m)
                };
                c.df = function() {
                    E && E.Eb == h && E.Yb();
                    var b = c.k();
                    b < e && a.j(j.Hd, h, -b - 1, i, m, f, e)
                };
                c.Sd = function(a) {
                    q && b.Cc(S, a && q.Ac.Lg ? "" : "hidden")
                };
                c.Mc = function(c, b) {
                    if (n && b >= g) {
                        n = k;
                        y.Pd();
                        E.Yb();
                        a.j(j.Ze, h, g, i, u, g, e)
                    }
                    a.j(j.kf, h, b, i, m, f, e)
                };
                c.lg = function(a) {
                    if (a && !x) {
                        x = a;
                        a.Kc($JssorPlayer$.Be, C)
                    }
                };
                c.a(r, p.wc, z);
                q && c.Pc(q);
                g = c.sb();
                c.Pc(r);
                m = g + r.fc;
                e = c.sb();
                f = s ? g + r.vc : e;
                c.l = function() {
                    D.l();
                    c.D()
                }
            }

            function cc() {
                ac = mb;
                yc = y.Bd();
                cb = A.k();
                tb = dd(cb)
            }

            function Dc() {
                cc();
                if (B || Eb()) {
                    y.D();
                    a.j(j.We)
                }
            }

            function Bc(f) {
                if (Db()) {
                    var b = A.k(),
                        a = tb,
                        e = 0;
                    if (f && c.mb(O) >= m.ae) {
                        a = b;
                        e = xb
                    }
                    a = c.rb(a);
                    a = vb(a + e, .5);
                    var d = c.mb(a - b);
                    if (d < 1 && m.Xd != h.ec) d = c.p(d, .5);
                    if ((!fb || !f) && ac) y.oc(yc);
                    else if (b == a) gc.Xb();
                    else y.qc(b, a, d * Bb)
                }
            }

            function wc(a) {
                !b.ib(b.Ib(a), e, n.pd) && b.kc(a)
            }

            function nc(b) {
                zb = k;
                B = d;
                Dc();
                if (!ac) z = 0;
                a.j(j.Ve, v(cb), cb, b)
            }

            function Sc(a) {
                rc(a, 1)
            }

            function rc(c, d) {
                O = 0;
                wb = 0;
                xb = 0;
                Ec = dc;
                if (d) {
                    var h = c.touches[0];
                    yb = {
                        x: h.clientX,
                        y: h.clientY
                    }
                } else yb = b.uc(c);
                var f = b.Ib(c),
                    g = b.ib(f, "1", Ac);
                if ((!g || g === u) && !W && (!d || c.touches.length == 1)) {
                    jb = b.ib(f, e, n.pd) || !ib || !Tc();
                    a.a(i, d ? "touchmove" : "mousemove", Tb);
                    zb = !jb && b.ib(f, e, n.Jc);
                    !zb && !jb && nc(c, d)
                }
            }

            function Tb(a) {
                var e, f;
                a = b.yg(a);
                if (a.type != "mousemove")
                    if (a.touches.length == 1) {
                        f = a.touches[0];
                        e = {
                            x: f.clientX,
                            y: f.clientY
                        }
                    } else gb();
                else e = b.uc(a);
                if (e) {
                    var i = e.x - yb.x,
                        j = e.y - yb.y,
                        g = c.mb(i),
                        h = c.mb(j);
                    if (z || g > 1.5 || h > 1.5)
                        if (zb) nc(a, f);
                        else {
                            if (c.X(tb) != tb) z = z || R & W;
                            if ((i || j) && !z) {
                                if (W == 3)
                                    if (h > g) z = 2;
                                    else z = 1;
                                else z = W;
                                if (Ab && z == 1 && h > g * 2.4) jb = d
                            }
                            var l = i,
                                k = kb;
                            if (z == 2) {
                                l = j;
                                k = lb
                            }(O - wb) * nb < -1.5 && (xb = 0);
                            (O - wb) * nb > 1.5 && (xb = -1);
                            wb = O;
                            O = l;
                            Fc = tb - O * nb / k / Ec * m.Ue;
                            if (O && z && !jb) {
                                b.kc(a);
                                y.tg(d);
                                y.sg(Fc)
                            }
                        }
                }
            }

            function gb() {
                Pc();
                a.K(i, "mousemove", Tb);
                a.K(i, "touchmove", Tb);
                fb = O;
                if (B) {
                    fb && s & 8 && (s = 0);
                    y.D();
                    B = k;
                    var b = A.k();
                    a.j(j.Te, v(b), b, v(cb), cb);
                    X & 12 && cc();
                    Bc(d)
                }
            }

            function ed(a) {
                var c = b.Ib(a),
                    f = b.ib(c, "1", Kb);
                if (u === f)
                    if (fb) {
                        b.Zf(a);
                        var d = b.ib(c, e, "data-jssor-button", "A");
                        d && b.kc(a)
                    } else s & 4 && (s = 0)
            }
            a.Jb = function(a) {
                if (a == e) return s;
                if (a != s) {
                    s = a;
                    s && w[t] && w[t].Xb()
                }
            };
            a.xb = function() {
                return K
            };
            a.yb = function() {
                return P
            };
            a.Re = function(b) {
                if (b == e) return Sb || K;
                a.Rb(b, b / K * P)
            };
            a.Rb = function(c, a, d) {
                b.F(u, c);
                b.E(u, a);
                xc = c / K;
                oc = a / P;
                b.c(Gc, function(a) {
                    a.Rb(xc, oc, d)
                });
                if (!Sb) {
                    b.Zb(S, x);
                    b.N(S, 0);
                    b.Q(S, 0)
                }
                Sb = c
            };
            a.we = mc;
            a.ue = kc;
            a.Zd = function() {
                a.Jb(s || 1)
            };

            function Rc() {
                Vb.Qd && b.ub(x, Vb.Qd, ([f, "pan-y", "pan-x", "auto"])[ib] || "");
                a.a(u, "click", ed, d);
                a.a(u, "mouseleave", cd);
                a.a(u, "mouseenter", bd);
                a.a(u, "mousedown", rc);
                a.a(u, "touchstart", Sc);
                a.a(u, "dragstart", wc);
                a.a(u, "selectstart", wc);
                a.a(g, "mouseup", gb);
                a.a(i, "mouseup", gb);
                a.a(i, "touchend", gb);
                a.a(i, "touchcancel", gb);
                a.a(g, "blur", gb);
                m.dc && a.a(i, "keydown", function(c) {
                    var a = b.Id(c);
                    if (a == 37 || a == 39) {
                        s & 8 && (s = 0);
                        uc(m.dc * (a - 38) * nb, d)
                    }
                })
            }

            function ic(f) {
                vc.Jd();
                C = [];
                w = [];
                var g = b.vb(x),
                    j = b.Ad(["DIV", "A", "LI"]);
                b.c(g, function(a) {
                    j[a.tagName.toUpperCase()] && !b.L(a, "u") && b.tb(a) != "none" && C.push(a);
                    b.J(a, (b.J(a) || 0) + 1)
                });
                q = C.length;
                if (q) {
                    var a = R & 1 ? Gb : Fb;
                    Ic();
                    G = m.Pe;
                    if (G == e) G = (a - F + L) / 2;
                    hb = a / F;
                    J = c.s(q, m.Vc || q, c.rb(hb));
                    D = J < q ? m.Pb : 0;
                    if (q * F - L <= a) {
                        hb = q - L / F;
                        G = (a - F + L) / 2;
                        Zb = (a - F * q + L) / 2
                    }
                    if (Hb) {
                        Mb = Hb.V;
                        hc = !G && J == 1 && q > 1 && Mb && (!b.Ld() || b.Fc() >= 9)
                    }
                    if (!(D & 1)) {
                        db = G / F;
                        if (db > q - 1) {
                            db = q - 1;
                            G = db * F
                        }
                        N = db;
                        Q = N + q - hb - L / F
                    }
                    ib = (J > 1 || G ? R : -1) & m.Bc;
                    if (hc) E = new Mb(Jb, I, H, Hb, Ab, Nb);
                    for (var d = 0; d < C.length; d++) {
                        var h = C[d],
                            i = new Wc(h, d);
                        w.push(i)
                    }
                    ob = new Xc;
                    A = new Yc;
                    y = new Nc(A, ob);
                    Rc()
                }
                b.c(Y, function(a) {
                    a.dd(q, w);
                    f && a.Kc(r.ed, uc)
                })
            }
            a.q = function(c, g) {
                a.O = u = b.Hb(c);
                K = b.F(u);
                P = b.E(u);
                m = b.hb({
                    rg: 0,
                    lf: 1,
                    dc: 1,
                    Xc: 0,
                    Jb: 0,
                    Pb: 1,
                    cd: d,
                    Ed: d,
                    af: 1,
                    gd: 3e3,
                    ge: 1,
                    ee: 500,
                    Xd: h.xd,
                    ae: 20,
                    Ue: 1,
                    Wd: 0,
                    cf: 1,
                    he: 1,
                    Bc: 1
                }, g);
                m.cd = m.cd && b.ug();
                if (m.pb != e) m.gd = m.pb;
                if (m.Qf != e) m.Vc = m.Qf;
                if (m.Sf != e) m.Pe = m.Sf;
                s = m.Jb & 63;
                !m.cf;
                ab = m.af;
                X = m.ge;
                X &= Ab ? 10 : 5;
                ec = m.gd;
                Bb = m.ee;
                R = m.he & 3;
                rb = b.dg(b.m(u, "dir")) == "rtl";
                Cb = rb && (R == 1 || m.Bc & 1);
                nb = Cb ? -1 : 1;
                Hb = m.Ig;
                eb = b.hb({
                    V: p
                }, m.bg);
                sb = m.fg;
                Z = m.gg;
                M = m.Mg;
                var f = b.vb(u);
                b.c(f, function(a, d) {
                    var c = b.L(a, "u");
                    if (c == "loading") U = a;
                    else {
                        if (c == "slides") {
                            x = a;
                            b.ub(x, "margin", 0);
                            b.ub(x, "padding", 0)
                        }
                        if (c == "navigator") Ub = a;
                        if (c == "arrowleft") Yb = a;
                        if (c == "arrowright") Xb = a;
                        if (c == "thumbnavigator") Ib = a;
                        if (a.tagName != "STYLE" && a.tagName != "SCRIPT") Gc[c || d] = new Mc(a, c == "slides", b.Ad(["slides", "thumbnavigator"])[c])
                    }
                });
                U && b.Fb(U);
                U = U || b.rc(i);
                Gb = b.F(x);
                Fb = b.E(x);
                I = m.He || Gb;
                H = m.Ee || Fb;
                bb = {
                    P: I,
                    S: H,
                    i: 0,
                    g: 0,
                    sd: "block",
                    Lb: "absolute"
                };
                L = m.Wd;
                kb = I + L;
                lb = H + L;
                F = R & 1 ? kb : lb;
                Jb = new Kc;
                if (m.cd && (!b.pg() || Ab)) Nb = function(a, c, d) {
                    b.ne(a, {
                        ob: c,
                        qb: d
                    })
                };
                b.m(u, Kb, "1");
                b.J(x, b.J(x) || 0);
                b.Mb(x, "absolute");
                S = b.hc(x, d);
                b.ub(S, "pointerEvents", "none");
                b.Zb(S, x);
                b.kb(S, Jb.O);
                b.Cc(x, "hidden");
                if (Ub && sb) {
                    sb.cc = rb;
                    jc = new sb.V(Ub, sb, K, P);
                    Y.push(jc)
                }
                if (Z && Yb && Xb) {
                    Z.cc = rb;
                    Z.Pb = m.Pb;
                    lc = new Z.V(Yb, Xb, Z, a);
                    Y.push(lc)
                }
                if (Ib && M) {
                    M.Xc = m.Xc;
                    M.dc = M.dc || 0;
                    M.cc = rb;
                    Hc = new M.V(Ib, M, U);
                    !M.Hg && b.m(Ib, Ac, "1");
                    Y.push(Hc)
                }
                ic(d);
                a.Rb(K, P);
                Pb();
                qb(v(m.Xc));
                b.ub(u, "visibility", "visible")
            };
            a.l = function() {
                s = 0;
                b.l(w, Y, vc);
                b.nc(u)
            };
            b.q(a)
        };
    j.gf = 21;
    j.Ve = 22;
    j.Te = 23;
    j.wg = 24;
    j.vg = 25;
    j.ff = 26;
    j.og = 27;
    j.We = 28;
    j.Eg = 31;
    j.mg = 32;
    j.Gg = 202;
    j.Pf = 203;
    j.bf = 206;
    j.Ze = 207;
    j.kf = 208;
    j.Hd = 209;
    slider_init = function() {
        var d = [
                [{
                    b: 0,
                    d: 1e3,
                    y: 260,
                    e: {
                        y: 24
                    }
                }],
                [{
                    b: -1,
                    d: 1,
                    o: -1
                }, {
                    b: 0,
                    d: 600,
                    x: -385,
                    o: 1,
                    e: {
                        x: 6
                    }
                }],
                [{
                    b: -1,
                    d: 1,
                    o: -1
                }, {
                    b: 0,
                    d: 600,
                    o: 1,
                    e: {
                        o: 5
                    }
                }],
                [{
                    b: -1,
                    d: 1,
                    o: -1,
                    r: -180
                }, {
                    b: 0,
                    d: 800,
                    o: 1,
                    r: 180,
                    e: {
                        r: 7
                    }
                }],
                [{
                    b: 0,
                    d: 600,
                    x: 178,
                    y: -253,
                    e: {
                        y: 27
                    }
                }],
                [{
                    b: 0,
                    d: 1e3,
                    y: 250,
                    e: {
                        y: 24
                    }
                }],
                [{
                    b: 0,
                    d: 600,
                    x: -515,
                    e: {
                        x: 27
                    }
                }],
                [{
                    b: 0,
                    d: 600,
                    x: 144,
                    y: -238,
                    e: {
                        y: 27
                    }
                }]
            ],
            e = {
                Jb: 1,
                pb: 2e3,
                bg: {
                    V: s,
                    Zc: d,
                    Rf: [
                        [{
                            d: 2e3,
                            b: 1e3
                        }]
                    ]
                },
                gg: {
                    V: v
                },
                fg: {
                    V: u
                }
            },
            c = new j("slider", e),
            f = 980;

        function a() {
            var d = c.O.parentNode,
                b = d.clientWidth;
            if (b) {
                var e = m.min(f || b, b);
                c.Re(e)
            } else g.setTimeout(a, 30)
        }
        a();
        b.bb(g, "load", a);
        b.bb(g, "resize", a);
        b.bb(g, "orientationchange", a)
    }
}(window, document, Math, null, true, false)