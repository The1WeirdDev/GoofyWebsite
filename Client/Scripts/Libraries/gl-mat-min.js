! function(t, n) {
    "object" == typeof exports && "undefined" != typeof module ? n(exports) : "function" == typeof define && define.amd ? define(["exports"], n) : n((t = t || self).glMatrix = {})
}(this, function(t) {
    "use strict";
    var E = 1e-6,
        d = "undefined" != typeof Float32Array ? Float32Array : Array,
        c = Math.random,
        n = Math.PI / 180;
    Math.hypot || (Math.hypot = function() {
        for (var t = 0, n = arguments.length; n--;) t += arguments[n] * arguments[n];
        return Math.sqrt(t)
    });
    var a = Object.freeze({
        __proto__: null,
        EPSILON: E,
        get ARRAY_TYPE() {
            return d
        },
        RANDOM: c,
        setMatrixArrayType: function(t) {
            d = t
        },
        toRadian: function(t) {
            return t * n
        },
        equals: function(t, n) {
            return Math.abs(t - n) <= E * Math.max(1, Math.abs(t), Math.abs(n))
        }
    });

    function r(t, n, a) {
        var r = n[0],
            u = n[1],
            e = n[2],
            o = n[3],
            i = a[0],
            h = a[1],
            n = a[2],
            a = a[3];
        return t[0] = r * i + e * h, t[1] = u * i + o * h, t[2] = r * n + e * a, t[3] = u * n + o * a, t
    }

    function u(t, n, a) {
        return t[0] = n[0] - a[0], t[1] = n[1] - a[1], t[2] = n[2] - a[2], t[3] = n[3] - a[3], t
    }
    var e = Object.freeze({
        __proto__: null,
        create: function() {
            var t = new d(4);
            return d != Float32Array && (t[1] = 0, t[2] = 0), t[0] = 1, t[3] = 1, t
        },
        clone: function(t) {
            var n = new d(4);
            return n[0] = t[0], n[1] = t[1], n[2] = t[2], n[3] = t[3], n
        },
        copy: function(t, n) {
            return t[0] = n[0], t[1] = n[1], t[2] = n[2], t[3] = n[3], t
        },
        identity: function(t) {
            return t[0] = 1, t[1] = 0, t[2] = 0, t[3] = 1, t
        },
        fromValues: function(t, n, a, r) {
            var u = new d(4);
            return u[0] = t, u[1] = n, u[2] = a, u[3] = r, u
        },
        set: function(t, n, a, r, u) {
            return t[0] = n, t[1] = a, t[2] = r, t[3] = u, t
        },
        transpose: function(t, n) {
            var a;
            return t === n ? (a = n[1], t[1] = n[2], t[2] = a) : (t[0] = n[0], t[1] = n[2], t[2] = n[1], t[3] = n[3]), t
        },
        invert: function(t, n) {
            var a = n[0],
                r = n[1],
                u = n[2],
                e = n[3],
                n = a * e - u * r;
            return n ? (t[0] = e * (n = 1 / n), t[1] = -r * n, t[2] = -u * n, t[3] = a * n, t) : null
        },
        adjoint: function(t, n) {
            var a = n[0];
            return t[0] = n[3], t[1] = -n[1], t[2] = -n[2], t[3] = a, t
        },
        determinant: function(t) {
            return t[0] * t[3] - t[2] * t[1]
        },
        multiply: r,
        rotate: function(t, n, a) {
            var r = n[0],
                u = n[1],
                e = n[2],
                o = n[3],
                n = Math.sin(a),
                a = Math.cos(a);
            return t[0] = r * a + e * n, t[1] = u * a + o * n, t[2] = r * -n + e * a, t[3] = u * -n + o * a, t
        },
        scale: function(t, n, a) {
            var r = n[0],
                u = n[1],
                e = n[2],
                o = n[3],
                n = a[0],
                a = a[1];
            return t[0] = r * n, t[1] = u * n, t[2] = e * a, t[3] = o * a, t
        },
        fromRotation: function(t, n) {
            var a = Math.sin(n),
                n = Math.cos(n);
            return t[0] = n, t[1] = a, t[2] = -a, t[3] = n, t
        },
        fromScaling: function(t, n) {
            return t[0] = n[0], t[1] = 0, t[2] = 0, t[3] = n[1], t
        },
        str: function(t) {
            return "mat2(" + t[0] + ", " + t[1] + ", " + t[2] + ", " + t[3] + ")"
        },
        frob: function(t) {
            return Math.hypot(t[0], t[1], t[2], t[3])
        },
        LDU: function(t, n, a, r) {
            return t[2] = r[2] / r[0], a[0] = r[0], a[1] = r[1], a[3] = r[3] - t[2] * a[1], [t, n, a]
        },
        add: function(t, n, a) {
            return t[0] = n[0] + a[0], t[1] = n[1] + a[1], t[2] = n[2] + a[2], t[3] = n[3] + a[3], t
        },
        subtract: u,
        exactEquals: function(t, n) {
            return t[0] === n[0] && t[1] === n[1] && t[2] === n[2] && t[3] === n[3]
        },
        equals: function(t, n) {
            var a = t[0],
                r = t[1],
                u = t[2],
                e = t[3],
                o = n[0],
                i = n[1],
                t = n[2],
                n = n[3];
            return Math.abs(a - o) <= E * Math.max(1, Math.abs(a), Math.abs(o)) && Math.abs(r - i) <= E * Math.max(1, Math.abs(r), Math.abs(i)) && Math.abs(u - t) <= E * Math.max(1, Math.abs(u), Math.abs(t)) && Math.abs(e - n) <= E * Math.max(1, Math.abs(e), Math.abs(n))
        },
        multiplyScalar: function(t, n, a) {
            return t[0] = n[0] * a, t[1] = n[1] * a, t[2] = n[2] * a, t[3] = n[3] * a, t
        },
        multiplyScalarAndAdd: function(t, n, a, r) {
            return t[0] = n[0] + a[0] * r, t[1] = n[1] + a[1] * r, t[2] = n[2] + a[2] * r, t[3] = n[3] + a[3] * r, t
        },
        mul: r,
        sub: u
    });

    function o(t, n, a) {
        var r = n[0],
            u = n[1],
            e = n[2],
            o = n[3],
            i = n[4],
            h = n[5],
            c = a[0],
            s = a[1],
            M = a[2],
            f = a[3],
            n = a[4],
            a = a[5];
        return t[0] = r * c + e * s, t[1] = u * c + o * s, t[2] = r * M + e * f, t[3] = u * M + o * f, t[4] = r * n + e * a + i, t[5] = u * n + o * a + h, t
    }

    function i(t, n, a) {
        return t[0] = n[0] - a[0], t[1] = n[1] - a[1], t[2] = n[2] - a[2], t[3] = n[3] - a[3], t[4] = n[4] - a[4], t[5] = n[5] - a[5], t
    }
    var h = Object.freeze({
        __proto__: null,
        create: function() {
            var t = new d(6);
            return d != Float32Array && (t[1] = 0, t[2] = 0, t[4] = 0, t[5] = 0), t[0] = 1, t[3] = 1, t
        },
        clone: function(t) {
            var n = new d(6);
            return n[0] = t[0], n[1] = t[1], n[2] = t[2], n[3] = t[3], n[4] = t[4], n[5] = t[5], n
        },
        copy: function(t, n) {
            return t[0] = n[0], t[1] = n[1], t[2] = n[2], t[3] = n[3], t[4] = n[4], t[5] = n[5], t
        },
        identity: function(t) {
            return t[0] = 1, t[1] = 0, t[2] = 0, t[3] = 1, t[4] = 0, t[5] = 0, t
        },
        fromValues: function(t, n, a, r, u, e) {
            var o = new d(6);
            return o[0] = t, o[1] = n, o[2] = a, o[3] = r, o[4] = u, o[5] = e, o
        },
        set: function(t, n, a, r, u, e, o) {
            return t[0] = n, t[1] = a, t[2] = r, t[3] = u, t[4] = e, t[5] = o, t
        },
        invert: function(t, n) {
            var a = n[0],
                r = n[1],
                u = n[2],
                e = n[3],
                o = n[4],
                i = n[5],
                n = a * e - r * u;
            return n ? (t[0] = e * (n = 1 / n), t[1] = -r * n, t[2] = -u * n, t[3] = a * n, t[4] = (u * i - e * o) * n, t[5] = (r * o - a * i) * n, t) : null
        },
        determinant: function(t) {
            return t[0] * t[3] - t[1] * t[2]
        },
        multiply: o,
        rotate: function(t, n, a) {
            var r = n[0],
                u = n[1],
                e = n[2],
                o = n[3],
                i = n[4],
                h = n[5],
                n = Math.sin(a),
                a = Math.cos(a);
            return t[0] = r * a + e * n, t[1] = u * a + o * n, t[2] = r * -n + e * a, t[3] = u * -n + o * a, t[4] = i, t[5] = h, t
        },
        scale: function(t, n, a) {
            var r = n[0],
                u = n[1],
                e = n[2],
                o = n[3],
                i = n[4],
                h = n[5],
                n = a[0],
                a = a[1];
            return t[0] = r * n, t[1] = u * n, t[2] = e * a, t[3] = o * a, t[4] = i, t[5] = h, t
        },
        translate: function(t, n, a) {
            var r = n[0],
                u = n[1],
                e = n[2],
                o = n[3],
                i = n[4],
                h = n[5],
                n = a[0],
                a = a[1];
            return t[0] = r, t[1] = u, t[2] = e, t[3] = o, t[4] = r * n + e * a + i, t[5] = u * n + o * a + h, t
        },
        fromRotation: function(t, n) {
            var a = Math.sin(n),
                n = Math.cos(n);
            return t[0] = n, t[1] = a, t[2] = -a, t[3] = n, t[4] = 0, t[5] = 0, t
        },
        fromScaling: function(t, n) {
            return t[0] = n[0], t[1] = 0, t[2] = 0, t[3] = n[1], t[4] = 0, t[5] = 0, t
        },
        fromTranslation: function(t, n) {
            return t[0] = 1, t[1] = 0, t[2] = 0, t[3] = 1, t[4] = n[0], t[5] = n[1], t
        },
        str: function(t) {
            return "mat2d(" + t[0] + ", " + t[1] + ", " + t[2] + ", " + t[3] + ", " + t[4] + ", " + t[5] + ")"
        },
        frob: function(t) {
            return Math.hypot(t[0], t[1], t[2], t[3], t[4], t[5], 1)
        },
        add: function(t, n, a) {
            return t[0] = n[0] + a[0], t[1] = n[1] + a[1], t[2] = n[2] + a[2], t[3] = n[3] + a[3], t[4] = n[4] + a[4], t[5] = n[5] + a[5], t
        },
        subtract: i,
        multiplyScalar: function(t, n, a) {
            return t[0] = n[0] * a, t[1] = n[1] * a, t[2] = n[2] * a, t[3] = n[3] * a, t[4] = n[4] * a, t[5] = n[5] * a, t
        },
        multiplyScalarAndAdd: function(t, n, a, r) {
            return t[0] = n[0] + a[0] * r, t[1] = n[1] + a[1] * r, t[2] = n[2] + a[2] * r, t[3] = n[3] + a[3] * r, t[4] = n[4] + a[4] * r, t[5] = n[5] + a[5] * r, t
        },
        exactEquals: function(t, n) {
            return t[0] === n[0] && t[1] === n[1] && t[2] === n[2] && t[3] === n[3] && t[4] === n[4] && t[5] === n[5]
        },
        equals: function(t, n) {
            var a = t[0],
                r = t[1],
                u = t[2],
                e = t[3],
                o = t[4],
                i = t[5],
                h = n[0],
                c = n[1],
                s = n[2],
                M = n[3],
                t = n[4],
                n = n[5];
            return Math.abs(a - h) <= E * Math.max(1, Math.abs(a), Math.abs(h)) && Math.abs(r - c) <= E * Math.max(1, Math.abs(r), Math.abs(c)) && Math.abs(u - s) <= E * Math.max(1, Math.abs(u), Math.abs(s)) && Math.abs(e - M) <= E * Math.max(1, Math.abs(e), Math.abs(M)) && Math.abs(o - t) <= E * Math.max(1, Math.abs(o), Math.abs(t)) && Math.abs(i - n) <= E * Math.max(1, Math.abs(i), Math.abs(n))
        },
        mul: o,
        sub: i
    });

    function s() {
        var t = new d(9);
        return d != Float32Array && (t[1] = 0, t[2] = 0, t[3] = 0, t[5] = 0, t[6] = 0, t[7] = 0), t[0] = 1, t[4] = 1, t[8] = 1, t
    }

    function M(t, n, a) {
        var r = n[0],
            u = n[1],
            e = n[2],
            o = n[3],
            i = n[4],
            h = n[5],
            c = n[6],
            s = n[7],
            M = n[8],
            f = a[0],
            l = a[1],
            v = a[2],
            b = a[3],
            m = a[4],
            d = a[5],
            p = a[6],
            n = a[7],
            a = a[8];
        return t[0] = f * r + l * o + v * c, t[1] = f * u + l * i + v * s, t[2] = f * e + l * h + v * M, t[3] = b * r + m * o + d * c, t[4] = b * u + m * i + d * s, t[5] = b * e + m * h + d * M, t[6] = p * r + n * o + a * c, t[7] = p * u + n * i + a * s, t[8] = p * e + n * h + a * M, t
    }

    function f(t, n, a) {
        return t[0] = n[0] - a[0], t[1] = n[1] - a[1], t[2] = n[2] - a[2], t[3] = n[3] - a[3], t[4] = n[4] - a[4], t[5] = n[5] - a[5], t[6] = n[6] - a[6], t[7] = n[7] - a[7], t[8] = n[8] - a[8], t
    }
    var l = Object.freeze({
        __proto__: null,
        create: s,
        fromMat4: function(t, n) {
            return t[0] = n[0], t[1] = n[1], t[2] = n[2], t[3] = n[4], t[4] = n[5], t[5] = n[6], t[6] = n[8], t[7] = n[9], t[8] = n[10], t
        },
        clone: function(t) {
            var n = new d(9);
            return n[0] = t[0], n[1] = t[1], n[2] = t[2], n[3] = t[3], n[4] = t[4], n[5] = t[5], n[6] = t[6], n[7] = t[7], n[8] = t[8], n
        },
        copy: function(t, n) {
            return t[0] = n[0], t[1] = n[1], t[2] = n[2], t[3] = n[3], t[4] = n[4], t[5] = n[5], t[6] = n[6], t[7] = n[7], t[8] = n[8], t
        },
        fromValues: function(t, n, a, r, u, e, o, i, h) {
            var c = new d(9);
            return c[0] = t, c[1] = n, c[2] = a, c[3] = r, c[4] = u, c[5] = e, c[6] = o, c[7] = i, c[8] = h, c
        },
        set: function(t, n, a, r, u, e, o, i, h, c) {
            return t[0] = n, t[1] = a, t[2] = r, t[3] = u, t[4] = e, t[5] = o, t[6] = i, t[7] = h, t[8] = c, t
        },
        identity: function(t) {
            return t[0] = 1, t[1] = 0, t[2] = 0, t[3] = 0, t[4] = 1, t[5] = 0, t[6] = 0, t[7] = 0, t[8] = 1, t
        },
        transpose: function(t, n) {
            var a, r, u;
            return t === n ? (a = n[1], r = n[2], u = n[5], t[1] = n[3], t[2] = n[6], t[3] = a, t[5] = n[7], t[6] = r, t[7] = u) : (t[0] = n[0], t[1] = n[3], t[2] = n[6], t[3] = n[1], t[4] = n[4], t[5] = n[7], t[6] = n[2], t[7] = n[5], t[8] = n[8]), t
        },
        invert: function(t, n) {
            var a = n[0],
                r = n[1],
                u = n[2],
                e = n[3],
                o = n[4],
                i = n[5],
                h = n[6],
                c = n[7],
                s = n[8],
                M = s * o - i * c,
                f = -s * e + i * h,
                l = c * e - o * h,
                n = a * M + r * f + u * l;
            return n ? (t[0] = M * (n = 1 / n), t[1] = (-s * r + u * c) * n, t[2] = (i * r - u * o) * n, t[3] = f * n, t[4] = (s * a - u * h) * n, t[5] = (-i * a + u * e) * n, t[6] = l * n, t[7] = (-c * a + r * h) * n, t[8] = (o * a - r * e) * n, t) : null
        },
        adjoint: function(t, n) {
            var a = n[0],
                r = n[1],
                u = n[2],
                e = n[3],
                o = n[4],
                i = n[5],
                h = n[6],
                c = n[7],
                n = n[8];
            return t[0] = o * n - i * c, t[1] = u * c - r * n, t[2] = r * i - u * o, t[3] = i * h - e * n, t[4] = a * n - u * h, t[5] = u * e - a * i, t[6] = e * c - o * h, t[7] = r * h - a * c, t[8] = a * o - r * e, t
        },
        determinant: function(t) {
            var n = t[0],
                a = t[1],
                r = t[2],
                u = t[3],
                e = t[4],
                o = t[5],
                i = t[6],
                h = t[7],
                t = t[8];
            return n * (t * e - o * h) + a * (-t * u + o * i) + r * (h * u - e * i)
        },
        multiply: M,
        translate: function(t, n, a) {
            var r = n[0],
                u = n[1],
                e = n[2],
                o = n[3],
                i = n[4],
                h = n[5],
                c = n[6],
                s = n[7],
                M = n[8],
                n = a[0],
                a = a[1];
            return t[0] = r, t[1] = u, t[2] = e, t[3] = o, t[4] = i, t[5] = h, t[6] = n * r + a * o + c, t[7] = n * u + a * i + s, t[8] = n * e + a * h + M, t
        },
        rotate: function(t, n, a) {
            var r = n[0],
                u = n[1],
                e = n[2],
                o = n[3],
                i = n[4],
                h = n[5],
                c = n[6],
                s = n[7],
                M = n[8],
                n = Math.sin(a),
                a = Math.cos(a);
            return t[0] = a * r + n * o, t[1] = a * u + n * i, t[2] = a * e + n * h, t[3] = a * o - n * r, t[4] = a * i - n * u, t[5] = a * h - n * e, t[6] = c, t[7] = s, t[8] = M, t
        },
        scale: function(t, n, a) {
            var r = a[0],
                a = a[1];
            return t[0] = r * n[0], t[1] = r * n[1], t[2] = r * n[2], t[3] = a * n[3], t[4] = a * n[4], t[5] = a * n[5], t[6] = n[6], t[7] = n[7], t[8] = n[8], t
        },
        fromTranslation: function(t, n) {
            return t[0] = 1, t[1] = 0, t[2] = 0, t[3] = 0, t[4] = 1, t[5] = 0, t[6] = n[0], t[7] = n[1], t[8] = 1, t
        },
        fromRotation: function(t, n) {
            var a = Math.sin(n),
                n = Math.cos(n);
            return t[0] = n, t[1] = a, t[2] = 0, t[3] = -a, t[4] = n, t[5] = 0, t[6] = 0, t[7] = 0, t[8] = 1, t
        },
        fromScaling: function(t, n) {
            return t[0] = n[0], t[1] = 0, t[2] = 0, t[3] = 0, t[4] = n[1], t[5] = 0, t[6] = 0, t[7] = 0, t[8] = 1, t
        },
        fromMat2d: function(t, n) {
            return t[0] = n[0], t[1] = n[1], t[2] = 0, t[3] = n[2], t[4] = n[3], t[5] = 0, t[6] = n[4], t[7] = n[5], t[8] = 1, t
        },
        fromQuat: function(t, n) {
            var a = n[0],
                r = n[1],
                u = n[2],
                e = n[3],
                o = a + a,
                i = r + r,
                h = u + u,
                c = a * o,
                s = r * o,
                n = r * i,
                a = u * o,
                r = u * i,
                u = u * h,
                o = e * o,
                i = e * i,
                h = e * h;
            return t[0] = 1 - n - u, t[3] = s - h, t[6] = a + i, t[1] = s + h, t[4] = 1 - c - u, t[7] = r - o, t[2] = a - i, t[5] = r + o, t[8] = 1 - c - n, t
        },
        normalFromMat4: function(t, n) {
            var a = n[0],
                r = n[1],
                u = n[2],
                e = n[3],
                o = n[4],
                i = n[5],
                h = n[6],
                c = n[7],
                s = n[8],
                M = n[9],
                f = n[10],
                l = n[11],
                v = n[12],
                b = n[13],
                m = n[14],
                d = n[15],
                p = a * i - r * o,
                x = a * h - u * o,
                y = a * c - e * o,
                q = r * h - u * i,
                g = r * c - e * i,
                _ = u * c - e * h,
                A = s * b - M * v,
                w = s * m - f * v,
                n = s * d - l * v,
                s = M * m - f * b,
                M = M * d - l * b,
                f = f * d - l * m,
                l = p * f - x * M + y * s + q * n - g * w + _ * A;
            return l ? (t[0] = (i * f - h * M + c * s) * (l = 1 / l), t[1] = (h * n - o * f - c * w) * l, t[2] = (o * M - i * n + c * A) * l, t[3] = (u * M - r * f - e * s) * l, t[4] = (a * f - u * n + e * w) * l, t[5] = (r * n - a * M - e * A) * l, t[6] = (b * _ - m * g + d * q) * l, t[7] = (m * y - v * _ - d * x) * l, t[8] = (v * g - b * y + d * p) * l, t) : null
        },
        projection: function(t, n, a) {
            return t[0] = 2 / n, t[1] = 0, t[2] = 0, t[3] = 0, t[4] = -2 / a, t[5] = 0, t[6] = -1, t[7] = 1, t[8] = 1, t
        },
        str: function(t) {
            return "mat3(" + t[0] + ", " + t[1] + ", " + t[2] + ", " + t[3] + ", " + t[4] + ", " + t[5] + ", " + t[6] + ", " + t[7] + ", " + t[8] + ")"
        },
        frob: function(t) {
            return Math.hypot(t[0], t[1], t[2], t[3], t[4], t[5], t[6], t[7], t[8])
        },
        add: function(t, n, a) {
            return t[0] = n[0] + a[0], t[1] = n[1] + a[1], t[2] = n[2] + a[2], t[3] = n[3] + a[3], t[4] = n[4] + a[4], t[5] = n[5] + a[5], t[6] = n[6] + a[6], t[7] = n[7] + a[7], t[8] = n[8] + a[8], t
        },
        subtract: f,
        multiplyScalar: function(t, n, a) {
            return t[0] = n[0] * a, t[1] = n[1] * a, t[2] = n[2] * a, t[3] = n[3] * a, t[4] = n[4] * a, t[5] = n[5] * a, t[6] = n[6] * a, t[7] = n[7] * a, t[8] = n[8] * a, t
        },
        multiplyScalarAndAdd: function(t, n, a, r) {
            return t[0] = n[0] + a[0] * r, t[1] = n[1] + a[1] * r, t[2] = n[2] + a[2] * r, t[3] = n[3] + a[3] * r, t[4] = n[4] + a[4] * r, t[5] = n[5] + a[5] * r, t[6] = n[6] + a[6] * r, t[7] = n[7] + a[7] * r, t[8] = n[8] + a[8] * r, t
        },
        exactEquals: function(t, n) {
            return t[0] === n[0] && t[1] === n[1] && t[2] === n[2] && t[3] === n[3] && t[4] === n[4] && t[5] === n[5] && t[6] === n[6] && t[7] === n[7] && t[8] === n[8]
        },
        equals: function(t, n) {
            var a = t[0],
                r = t[1],
                u = t[2],
                e = t[3],
                o = t[4],
                i = t[5],
                h = t[6],
                c = t[7],
                s = t[8],
                M = n[0],
                f = n[1],
                l = n[2],
                v = n[3],
                b = n[4],
                m = n[5],
                d = n[6],
                t = n[7],
                n = n[8];
            return Math.abs(a - M) <= E * Math.max(1, Math.abs(a), Math.abs(M)) && Math.abs(r - f) <= E * Math.max(1, Math.abs(r), Math.abs(f)) && Math.abs(u - l) <= E * Math.max(1, Math.abs(u), Math.abs(l)) && Math.abs(e - v) <= E * Math.max(1, Math.abs(e), Math.abs(v)) && Math.abs(o - b) <= E * Math.max(1, Math.abs(o), Math.abs(b)) && Math.abs(i - m) <= E * Math.max(1, Math.abs(i), Math.abs(m)) && Math.abs(h - d) <= E * Math.max(1, Math.abs(h), Math.abs(d)) && Math.abs(c - t) <= E * Math.max(1, Math.abs(c), Math.abs(t)) && Math.abs(s - n) <= E * Math.max(1, Math.abs(s), Math.abs(n))
        },
        mul: M,
        sub: f
    });

    function v(t) {
        return t[0] = 1, t[1] = 0, t[2] = 0, t[3] = 0, t[4] = 0, t[5] = 1, t[6] = 0, t[7] = 0, t[8] = 0, t[9] = 0, t[10] = 1, t[11] = 0, t[12] = 0, t[13] = 0, t[14] = 0, t[15] = 1, t
    }

    function b(t, n, a) {
        var r = n[0],
            u = n[1],
            e = n[2],
            o = n[3],
            i = n[4],
            h = n[5],
            c = n[6],
            s = n[7],
            M = n[8],
            f = n[9],
            l = n[10],
            v = n[11],
            b = n[12],
            m = n[13],
            d = n[14],
            p = n[15],
            x = a[0],
            y = a[1],
            q = a[2],
            n = a[3];
        return t[0] = x * r + y * i + q * M + n * b, t[1] = x * u + y * h + q * f + n * m, t[2] = x * e + y * c + q * l + n * d, t[3] = x * o + y * s + q * v + n * p, x = a[4], y = a[5], q = a[6], n = a[7], t[4] = x * r + y * i + q * M + n * b, t[5] = x * u + y * h + q * f + n * m, t[6] = x * e + y * c + q * l + n * d, t[7] = x * o + y * s + q * v + n * p, x = a[8], y = a[9], q = a[10], n = a[11], t[8] = x * r + y * i + q * M + n * b, t[9] = x * u + y * h + q * f + n * m, t[10] = x * e + y * c + q * l + n * d, t[11] = x * o + y * s + q * v + n * p, x = a[12], y = a[13], q = a[14], n = a[15], t[12] = x * r + y * i + q * M + n * b, t[13] = x * u + y * h + q * f + n * m, t[14] = x * e + y * c + q * l + n * d, t[15] = x * o + y * s + q * v + n * p, t
    }

    function m(t, n, a) {
        var r = n[0],
            u = n[1],
            e = n[2],
            o = n[3],
            i = r + r,
            h = u + u,
            c = e + e,
            s = r * i,
            M = r * h,
            n = r * c,
            r = u * h,
            u = u * c,
            e = e * c,
            i = o * i,
            h = o * h,
            c = o * c;
        return t[0] = 1 - (r + e), t[1] = M + c, t[2] = n - h, t[3] = 0, t[4] = M - c, t[5] = 1 - (s + e), t[6] = u + i, t[7] = 0, t[8] = n + h, t[9] = u - i, t[10] = 1 - (s + r), t[11] = 0, t[12] = a[0], t[13] = a[1], t[14] = a[2], t[15] = 1, t
    }

    function p(t, n) {
        return t[0] = n[12], t[1] = n[13], t[2] = n[14], t
    }

    function x(t, n) {
        var a = n[0],
            r = n[1],
            u = n[2],
            e = n[4],
            o = n[5],
            i = n[6],
            h = n[8],
            c = n[9],
            n = n[10];
        return t[0] = Math.hypot(a, r, u), t[1] = Math.hypot(e, o, i), t[2] = Math.hypot(h, c, n), t
    }

    function y(t, n) {
        var a = new d(3);
        x(a, n);
        var r = 1 / a[0],
            u = 1 / a[1],
            e = 1 / a[2],
            o = n[0] * r,
            i = n[1] * u,
            h = n[2] * e,
            c = n[4] * r,
            s = n[5] * u,
            M = n[6] * e,
            a = n[8] * r,
            r = n[9] * u,
            u = n[10] * e,
            n = o + s + u,
            e = 0;
        return 0 < n ? (e = 2 * Math.sqrt(1 + n), t[3] = .25 * e, t[0] = (M - r) / e, t[1] = (a - h) / e, t[2] = (i - c) / e) : s < o && u < o ? (e = 2 * Math.sqrt(1 + o - s - u), t[3] = (M - r) / e, t[0] = .25 * e, t[1] = (i + c) / e, t[2] = (a + h) / e) : u < s ? (e = 2 * Math.sqrt(1 + s - o - u), t[3] = (a - h) / e, t[0] = (i + c) / e, t[1] = .25 * e, t[2] = (M + r) / e) : (e = 2 * Math.sqrt(1 + u - o - s), t[3] = (i - c) / e, t[0] = (a + h) / e, t[1] = (M + r) / e, t[2] = .25 * e), t
    }

    function q(t, n, a, r, u) {
        var n = 1 / Math.tan(n / 2);
        return t[0] = n / a, t[1] = 0, t[2] = 0, t[3] = 0, t[4] = 0, t[5] = n, t[6] = 0, t[7] = 0, t[8] = 0, t[9] = 0, t[11] = -1, t[12] = 0, t[13] = 0, t[15] = 0, null != u && u !== 1 / 0 ? (t[10] = (u + r) * (n = 1 / (r - u)), t[14] = 2 * u * r * n) : (t[10] = -1, t[14] = -2 * r), t
    }

    function g(t, n, a, r, u, e, o) {
        var i = 1 / (n - a),
            h = 1 / (r - u),
            c = 1 / (e - o);
        return t[0] = -2 * i, t[1] = 0, t[2] = 0, t[3] = 0, t[4] = 0, t[5] = -2 * h, t[6] = 0, t[7] = 0, t[8] = 0, t[9] = 0, t[10] = 2 * c, t[11] = 0, t[12] = (n + a) * i, t[13] = (u + r) * h, t[14] = (o + e) * c, t[15] = 1, t
    }

    function _(t, n, a) {
        return t[0] = n[0] - a[0], t[1] = n[1] - a[1], t[2] = n[2] - a[2], t[3] = n[3] - a[3], t[4] = n[4] - a[4], t[5] = n[5] - a[5], t[6] = n[6] - a[6], t[7] = n[7] - a[7], t[8] = n[8] - a[8], t[9] = n[9] - a[9], t[10] = n[10] - a[10], t[11] = n[11] - a[11], t[12] = n[12] - a[12], t[13] = n[13] - a[13], t[14] = n[14] - a[14], t[15] = n[15] - a[15], t
    }
    var A = Object.freeze({
        __proto__: null,
        create: function() {
            var t = new d(16);
            return d != Float32Array && (t[1] = 0, t[2] = 0, t[3] = 0, t[4] = 0, t[6] = 0, t[7] = 0, t[8] = 0, t[9] = 0, t[11] = 0, t[12] = 0, t[13] = 0, t[14] = 0), t[0] = 1, t[5] = 1, t[10] = 1, t[15] = 1, t
        },
        clone: function(t) {
            var n = new d(16);
            return n[0] = t[0], n[1] = t[1], n[2] = t[2], n[3] = t[3], n[4] = t[4], n[5] = t[5], n[6] = t[6], n[7] = t[7], n[8] = t[8], n[9] = t[9], n[10] = t[10], n[11] = t[11], n[12] = t[12], n[13] = t[13], n[14] = t[14], n[15] = t[15], n
        },
        copy: function(t, n) {
            return t[0] = n[0], t[1] = n[1], t[2] = n[2], t[3] = n[3], t[4] = n[4], t[5] = n[5], t[6] = n[6], t[7] = n[7], t[8] = n[8], t[9] = n[9], t[10] = n[10], t[11] = n[11], t[12] = n[12], t[13] = n[13], t[14] = n[14], t[15] = n[15], t
        },
        fromValues: function(t, n, a, r, u, e, o, i, h, c, s, M, f, l, v, b) {
            var m = new d(16);
            return m[0] = t, m[1] = n, m[2] = a, m[3] = r, m[4] = u, m[5] = e, m[6] = o, m[7] = i, m[8] = h, m[9] = c, m[10] = s, m[11] = M, m[12] = f, m[13] = l, m[14] = v, m[15] = b, m
        },
        set: function(t, n, a, r, u, e, o, i, h, c, s, M, f, l, v, b, m) {
            return t[0] = n, t[1] = a, t[2] = r, t[3] = u, t[4] = e, t[5] = o, t[6] = i, t[7] = h, t[8] = c, t[9] = s, t[10] = M, t[11] = f, t[12] = l, t[13] = v, t[14] = b, t[15] = m, t
        },
        identity: v,
        transpose: function(t, n) {
            var a, r, u, e, o, i;
            return t === n ? (a = n[1], r = n[2], u = n[3], e = n[6], o = n[7], i = n[11], t[1] = n[4], t[2] = n[8], t[3] = n[12], t[4] = a, t[6] = n[9], t[7] = n[13], t[8] = r, t[9] = e, t[11] = n[14], t[12] = u, t[13] = o, t[14] = i) : (t[0] = n[0], t[1] = n[4], t[2] = n[8], t[3] = n[12], t[4] = n[1], t[5] = n[5], t[6] = n[9], t[7] = n[13], t[8] = n[2], t[9] = n[6], t[10] = n[10], t[11] = n[14], t[12] = n[3], t[13] = n[7], t[14] = n[11], t[15] = n[15]), t
        },
        invert: function(t, n) {
            var a = n[0],
                r = n[1],
                u = n[2],
                e = n[3],
                o = n[4],
                i = n[5],
                h = n[6],
                c = n[7],
                s = n[8],
                M = n[9],
                f = n[10],
                l = n[11],
                v = n[12],
                b = n[13],
                m = n[14],
                d = n[15],
                p = a * i - r * o,
                x = a * h - u * o,
                y = a * c - e * o,
                q = r * h - u * i,
                g = r * c - e * i,
                _ = u * c - e * h,
                A = s * b - M * v,
                w = s * m - f * v,
                R = s * d - l * v,
                z = M * m - f * b,
                O = M * d - l * b,
                j = f * d - l * m,
                n = p * j - x * O + y * z + q * R - g * w + _ * A;
            return n ? (t[0] = (i * j - h * O + c * z) * (n = 1 / n), t[1] = (u * O - r * j - e * z) * n, t[2] = (b * _ - m * g + d * q) * n, t[3] = (f * g - M * _ - l * q) * n, t[4] = (h * R - o * j - c * w) * n, t[5] = (a * j - u * R + e * w) * n, t[6] = (m * y - v * _ - d * x) * n, t[7] = (s * _ - f * y + l * x) * n, t[8] = (o * O - i * R + c * A) * n, t[9] = (r * R - a * O - e * A) * n, t[10] = (v * g - b * y + d * p) * n, t[11] = (M * y - s * g - l * p) * n, t[12] = (i * w - o * z - h * A) * n, t[13] = (a * z - r * w + u * A) * n, t[14] = (b * x - v * q - m * p) * n, t[15] = (s * q - M * x + f * p) * n, t) : null
        },
        adjoint: function(t, n) {
            var a = n[0],
                r = n[1],
                u = n[2],
                e = n[3],
                o = n[4],
                i = n[5],
                h = n[6],
                c = n[7],
                s = n[8],
                M = n[9],
                f = n[10],
                l = n[11],
                v = n[12],
                b = n[13],
                m = n[14],
                n = n[15];
            return t[0] = i * (f * n - l * m) - M * (h * n - c * m) + b * (h * l - c * f), t[1] = -(r * (f * n - l * m) - M * (u * n - e * m) + b * (u * l - e * f)), t[2] = r * (h * n - c * m) - i * (u * n - e * m) + b * (u * c - e * h), t[3] = -(r * (h * l - c * f) - i * (u * l - e * f) + M * (u * c - e * h)), t[4] = -(o * (f * n - l * m) - s * (h * n - c * m) + v * (h * l - c * f)), t[5] = a * (f * n - l * m) - s * (u * n - e * m) + v * (u * l - e * f), t[6] = -(a * (h * n - c * m) - o * (u * n - e * m) + v * (u * c - e * h)), t[7] = a * (h * l - c * f) - o * (u * l - e * f) + s * (u * c - e * h), t[8] = o * (M * n - l * b) - s * (i * n - c * b) + v * (i * l - c * M), t[9] = -(a * (M * n - l * b) - s * (r * n - e * b) + v * (r * l - e * M)), t[10] = a * (i * n - c * b) - o * (r * n - e * b) + v * (r * c - e * i), t[11] = -(a * (i * l - c * M) - o * (r * l - e * M) + s * (r * c - e * i)), t[12] = -(o * (M * m - f * b) - s * (i * m - h * b) + v * (i * f - h * M)), t[13] = a * (M * m - f * b) - s * (r * m - u * b) + v * (r * f - u * M), t[14] = -(a * (i * m - h * b) - o * (r * m - u * b) + v * (r * h - u * i)), t[15] = a * (i * f - h * M) - o * (r * f - u * M) + s * (r * h - u * i), t
        },
        determinant: function(t) {
            var n = t[0],
                a = t[1],
                r = t[2],
                u = t[3],
                e = t[4],
                o = t[5],
                i = t[6],
                h = t[7],
                c = t[8],
                s = t[9],
                M = t[10],
                f = t[11],
                l = t[12],
                v = t[13],
                b = t[14],
                t = t[15];
            return (n * o - a * e) * (M * t - f * b) - (n * i - r * e) * (s * t - f * v) + (n * h - u * e) * (s * b - M * v) + (a * i - r * o) * (c * t - f * l) - (a * h - u * o) * (c * b - M * l) + (r * h - u * i) * (c * v - s * l)
        },
        multiply: b,
        translate: function(t, n, a) {
            var r, u, e, o, i, h, c, s, M, f, l, v = a[0],
                b = a[1],
                m = a[2];
            return n === t ? (t[12] = n[0] * v + n[4] * b + n[8] * m + n[12], t[13] = n[1] * v + n[5] * b + n[9] * m + n[13], t[14] = n[2] * v + n[6] * b + n[10] * m + n[14], t[15] = n[3] * v + n[7] * b + n[11] * m + n[15]) : (r = n[0], u = n[1], e = n[2], o = n[3], i = n[4], h = n[5], c = n[6], s = n[7], M = n[8], f = n[9], l = n[10], a = n[11], t[0] = r, t[1] = u, t[2] = e, t[3] = o, t[4] = i, t[5] = h, t[6] = c, t[7] = s, t[8] = M, t[9] = f, t[10] = l, t[11] = a, t[12] = r * v + i * b + M * m + n[12], t[13] = u * v + h * b + f * m + n[13], t[14] = e * v + c * b + l * m + n[14], t[15] = o * v + s * b + a * m + n[15]), t
        },
        scale: function(t, n, a) {
            var r = a[0],
                u = a[1],
                a = a[2];
            return t[0] = n[0] * r, t[1] = n[1] * r, t[2] = n[2] * r, t[3] = n[3] * r, t[4] = n[4] * u, t[5] = n[5] * u, t[6] = n[6] * u, t[7] = n[7] * u, t[8] = n[8] * a, t[9] = n[9] * a, t[10] = n[10] * a, t[11] = n[11] * a, t[12] = n[12], t[13] = n[13], t[14] = n[14], t[15] = n[15], t
        },
        rotate: function(t, n, a, r) {
            var u, e, o, i, h, c, s, M, f, l, v, b, m, d, p, x, y, q, g, _ = r[0],
                A = r[1],
                w = r[2],
                R = Math.hypot(_, A, w);
            return R < E ? null : (_ *= R = 1 / R, A *= R, w *= R, p = Math.sin(a), u = 1 - (d = Math.cos(a)), e = n[0], o = n[1], i = n[2], h = n[3], c = n[4], s = n[5], M = n[6], f = n[7], l = n[8], v = n[9], b = n[10], m = n[11], x = _ * A * u - w * p, y = A * A * u + d, q = w * A * u + _ * p, g = _ * w * u + A * p, r = A * w * u - _ * p, R = w * w * u + d, t[0] = e * (a = _ * _ * u + d) + c * (d = A * _ * u + w * p) + l * (p = w * _ * u - A * p), t[1] = o * a + s * d + v * p, t[2] = i * a + M * d + b * p, t[3] = h * a + f * d + m * p, t[4] = e * x + c * y + l * q, t[5] = o * x + s * y + v * q, t[6] = i * x + M * y + b * q, t[7] = h * x + f * y + m * q, t[8] = e * g + c * r + l * R, t[9] = o * g + s * r + v * R, t[10] = i * g + M * r + b * R, t[11] = h * g + f * r + m * R, n !== t && (t[12] = n[12], t[13] = n[13], t[14] = n[14], t[15] = n[15]), t)
        },
        rotateX: function(t, n, a) {
            var r = Math.sin(a),
                u = Math.cos(a),
                e = n[4],
                o = n[5],
                i = n[6],
                h = n[7],
                c = n[8],
                s = n[9],
                M = n[10],
                a = n[11];
            return n !== t && (t[0] = n[0], t[1] = n[1], t[2] = n[2], t[3] = n[3], t[12] = n[12], t[13] = n[13], t[14] = n[14], t[15] = n[15]), t[4] = e * u + c * r, t[5] = o * u + s * r, t[6] = i * u + M * r, t[7] = h * u + a * r, t[8] = c * u - e * r, t[9] = s * u - o * r, t[10] = M * u - i * r, t[11] = a * u - h * r, t
        },
        rotateY: function(t, n, a) {
            var r = Math.sin(a),
                u = Math.cos(a),
                e = n[0],
                o = n[1],
                i = n[2],
                h = n[3],
                c = n[8],
                s = n[9],
                M = n[10],
                a = n[11];
            return n !== t && (t[4] = n[4], t[5] = n[5], t[6] = n[6], t[7] = n[7], t[12] = n[12], t[13] = n[13], t[14] = n[14], t[15] = n[15]), t[0] = e * u - c * r, t[1] = o * u - s * r, t[2] = i * u - M * r, t[3] = h * u - a * r, t[8] = e * r + c * u, t[9] = o * r + s * u, t[10] = i * r + M * u, t[11] = h * r + a * u, t
        },
        rotateZ: function(t, n, a) {
            var r = Math.sin(a),
                u = Math.cos(a),
                e = n[0],
                o = n[1],
                i = n[2],
                h = n[3],
                c = n[4],
                s = n[5],
                M = n[6],
                a = n[7];
            return n !== t && (t[8] = n[8], t[9] = n[9], t[10] = n[10], t[11] = n[11], t[12] = n[12], t[13] = n[13], t[14] = n[14], t[15] = n[15]), t[0] = e * u + c * r, t[1] = o * u + s * r, t[2] = i * u + M * r, t[3] = h * u + a * r, t[4] = c * u - e * r, t[5] = s * u - o * r, t[6] = M * u - i * r, t[7] = a * u - h * r, t
        },
        fromTranslation: function(t, n) {
            return t[0] = 1, t[1] = 0, t[2] = 0, t[3] = 0, t[4] = 0, t[5] = 1, t[6] = 0, t[7] = 0, t[8] = 0, t[9] = 0, t[10] = 1, t[11] = 0, t[12] = n[0], t[13] = n[1], t[14] = n[2], t[15] = 1, t
        },
        fromScaling: function(t, n) {
            return t[0] = n[0], t[1] = 0, t[2] = 0, t[3] = 0, t[4] = 0, t[5] = n[1], t[6] = 0, t[7] = 0, t[8] = 0, t[9] = 0, t[10] = n[2], t[11] = 0, t[12] = 0, t[13] = 0, t[14] = 0, t[15] = 1, t
        },
        fromRotation: function(t, n, a) {
            var r = a[0],
                u = a[1],
                e = a[2],
                o = Math.hypot(r, u, e);
            return o < E ? null : (r *= o = 1 / o, u *= o, e *= o, a = Math.sin(n), n = 1 - (o = Math.cos(n)), t[0] = r * r * n + o, t[1] = u * r * n + e * a, t[2] = e * r * n - u * a, t[3] = 0, t[4] = r * u * n - e * a, t[5] = u * u * n + o, t[6] = e * u * n + r * a, t[7] = 0, t[8] = r * e * n + u * a, t[9] = u * e * n - r * a, t[10] = e * e * n + o, t[11] = 0, t[12] = 0, t[13] = 0, t[14] = 0, t[15] = 1, t)
        },
        fromXRotation: function(t, n) {
            var a = Math.sin(n),
                n = Math.cos(n);
            return t[0] = 1, t[1] = 0, t[2] = 0, t[3] = 0, t[4] = 0, t[5] = n, t[6] = a, t[7] = 0, t[8] = 0, t[9] = -a, t[10] = n, t[11] = 0, t[12] = 0, t[13] = 0, t[14] = 0, t[15] = 1, t
        },
        fromYRotation: function(t, n) {
            var a = Math.sin(n),
                n = Math.cos(n);
            return t[0] = n, t[1] = 0, t[2] = -a, t[3] = 0, t[4] = 0, t[5] = 1, t[6] = 0, t[7] = 0, t[8] = a, t[9] = 0, t[10] = n, t[11] = 0, t[12] = 0, t[13] = 0, t[14] = 0, t[15] = 1, t
        },
        fromZRotation: function(t, n) {
            var a = Math.sin(n),
                n = Math.cos(n);
            return t[0] = n, t[1] = a, t[2] = 0, t[3] = 0, t[4] = -a, t[5] = n, t[6] = 0, t[7] = 0, t[8] = 0, t[9] = 0, t[10] = 1, t[11] = 0, t[12] = 0, t[13] = 0, t[14] = 0, t[15] = 1, t
        },
        fromRotationTranslation: m,
        fromQuat2: function(t, n) {
            var a = new d(3),
                r = -n[0],
                u = -n[1],
                e = -n[2],
                o = n[3],
                i = n[4],
                h = n[5],
                c = n[6],
                s = n[7],
                M = r * r + u * u + e * e + o * o;
            return 0 < M ? (a[0] = 2 * (i * o + s * r + h * e - c * u) / M, a[1] = 2 * (h * o + s * u + c * r - i * e) / M, a[2] = 2 * (c * o + s * e + i * u - h * r) / M) : (a[0] = 2 * (i * o + s * r + h * e - c * u), a[1] = 2 * (h * o + s * u + c * r - i * e), a[2] = 2 * (c * o + s * e + i * u - h * r)), m(t, n, a), t
        },
        getTranslation: p,
        getScaling: x,
        getRotation: y,
        fromRotationTranslationScale: function(t, n, a, r) {
            var u = n[0],
                e = n[1],
                o = n[2],
                i = n[3],
                h = u + u,
                c = e + e,
                s = o + o,
                M = u * h,
                f = u * c,
                l = u * s,
                n = e * c,
                u = e * s,
                e = o * s,
                o = i * h,
                h = i * c,
                c = i * s,
                i = r[0],
                s = r[1],
                r = r[2];
            return t[0] = (1 - (n + e)) * i, t[1] = (f + c) * i, t[2] = (l - h) * i, t[3] = 0, t[4] = (f - c) * s, t[5] = (1 - (M + e)) * s, t[6] = (u + o) * s, t[7] = 0, t[8] = (l + h) * r, t[9] = (u - o) * r, t[10] = (1 - (M + n)) * r, t[11] = 0, t[12] = a[0], t[13] = a[1], t[14] = a[2], t[15] = 1, t
        },
        fromRotationTranslationScaleOrigin: function(t, n, a, r, u) {
            var e = n[0],
                o = n[1],
                i = n[2],
                h = n[3],
                c = e + e,
                s = o + o,
                M = i + i,
                f = e * c,
                l = e * s,
                v = e * M,
                b = o * s,
                m = o * M,
                d = i * M,
                p = h * c,
                n = h * s,
                e = h * M,
                o = r[0],
                i = r[1],
                c = r[2],
                s = u[0],
                h = u[1],
                M = u[2],
                r = (1 - (b + d)) * o,
                u = (l + e) * o,
                o = (v - n) * o,
                e = (l - e) * i,
                d = (1 - (f + d)) * i,
                i = (m + p) * i,
                n = (v + n) * c,
                p = (m - p) * c,
                c = (1 - (f + b)) * c;
            return t[0] = r, t[1] = u, t[2] = o, t[3] = 0, t[4] = e, t[5] = d, t[6] = i, t[7] = 0, t[8] = n, t[9] = p, t[10] = c, t[11] = 0, t[12] = a[0] + s - (r * s + e * h + n * M), t[13] = a[1] + h - (u * s + d * h + p * M), t[14] = a[2] + M - (o * s + i * h + c * M), t[15] = 1, t
        },
        fromQuat: function(t, n) {
            var a = n[0],
                r = n[1],
                u = n[2],
                e = n[3],
                o = a + a,
                i = r + r,
                h = u + u,
                c = a * o,
                s = r * o,
                n = r * i,
                a = u * o,
                r = u * i,
                u = u * h,
                o = e * o,
                i = e * i,
                h = e * h;
            return t[0] = 1 - n - u, t[1] = s + h, t[2] = a - i, t[3] = 0, t[4] = s - h, t[5] = 1 - c - u, t[6] = r + o, t[7] = 0, t[8] = a + i, t[9] = r - o, t[10] = 1 - c - n, t[11] = 0, t[12] = 0, t[13] = 0, t[14] = 0, t[15] = 1, t
        },
        frustum: function(t, n, a, r, u, e, o) {
            var i = 1 / (a - n),
                h = 1 / (u - r),
                c = 1 / (e - o);
            return t[0] = 2 * e * i, t[1] = 0, t[2] = 0, t[3] = 0, t[4] = 0, t[5] = 2 * e * h, t[6] = 0, t[7] = 0, t[8] = (a + n) * i, t[9] = (u + r) * h, t[10] = (o + e) * c, t[11] = -1, t[12] = 0, t[13] = 0, t[14] = o * e * 2 * c, t[15] = 0, t
        },
        perspectiveNO: q,
        perspective: q,
        perspectiveZO: function(t, n, a, r, u) {
            var n = 1 / Math.tan(n / 2);
            return t[0] = n / a, t[1] = 0, t[2] = 0, t[3] = 0, t[4] = 0, t[5] = n, t[6] = 0, t[7] = 0, t[8] = 0, t[9] = 0, t[11] = -1, t[12] = 0, t[13] = 0, t[15] = 0, null != u && u !== 1 / 0 ? (t[10] = u * (n = 1 / (r - u)), t[14] = u * r * n) : (t[10] = -1, t[14] = -r), t
        },
        perspectiveFromFieldOfView: function(t, n, a, r) {
            var u = Math.tan(n.upDegrees * Math.PI / 180),
                e = Math.tan(n.downDegrees * Math.PI / 180),
                o = Math.tan(n.leftDegrees * Math.PI / 180),
                i = Math.tan(n.rightDegrees * Math.PI / 180),
                h = 2 / (o + i),
                n = 2 / (u + e);
            return t[0] = h, t[1] = 0, t[2] = 0, t[3] = 0, t[4] = 0, t[5] = n, t[6] = 0, t[7] = 0, t[8] = -(o - i) * h * .5, t[9] = (u - e) * n * .5, t[10] = r / (a - r), t[11] = -1, t[12] = 0, t[13] = 0, t[14] = r * a / (a - r), t[15] = 0, t
        },
        orthoNO: g,
        ortho: g,
        orthoZO: function(t, n, a, r, u, e, o) {
            var i = 1 / (n - a),
                h = 1 / (r - u),
                o = 1 / (e - o);
            return t[0] = -2 * i, t[1] = 0, t[2] = 0, t[3] = 0, t[4] = 0, t[5] = -2 * h, t[6] = 0, t[7] = 0, t[8] = 0, t[9] = 0, t[10] = o, t[11] = 0, t[12] = (n + a) * i, t[13] = (u + r) * h, t[14] = e * o, t[15] = 1, t
        },
        lookAt: function(t, n, a, r) {
            var u, e = n[0],
                o = n[1],
                i = n[2],
                h = r[0],
                c = r[1],
                s = r[2],
                M = a[0],
                f = a[1],
                l = a[2];
            return Math.abs(e - M) < E && Math.abs(o - f) < E && Math.abs(i - l) < E ? v(t) : (u = e - M, n = o - f, r = i - l, M = c * (r *= a = 1 / Math.hypot(u, n, r)) - s * (n *= a), f = s * (u *= a) - h * r, l = h * n - c * u, (a = Math.hypot(M, f, l)) ? (M *= a = 1 / a, f *= a, l *= a) : l = f = M = 0, s = n * l - r * f, h = r * M - u * l, c = u * f - n * M, (a = Math.hypot(s, h, c)) ? (s *= a = 1 / a, h *= a, c *= a) : c = h = s = 0, t[0] = M, t[1] = s, t[2] = u, t[3] = 0, t[4] = f, t[5] = h, t[6] = n, t[7] = 0, t[8] = l, t[9] = c, t[10] = r, t[11] = 0, t[12] = -(M * e + f * o + l * i), t[13] = -(s * e + h * o + c * i), t[14] = -(u * e + n * o + r * i), t[15] = 1, t)
        },
        targetTo: function(t, n, a, r) {
            var u = n[0],
                e = n[1],
                o = n[2],
                i = r[0],
                h = r[1],
                c = r[2],
                s = u - a[0],
                M = e - a[1],
                n = o - a[2],
                r = s * s + M * M + n * n;
            0 < r && (s *= r = 1 / Math.sqrt(r), M *= r, n *= r);
            a = h * n - c * M, c = c * s - i * n, h = i * M - h * s;
            return 0 < (r = a * a + c * c + h * h) && (a *= r = 1 / Math.sqrt(r), c *= r, h *= r), t[0] = a, t[1] = c, t[2] = h, t[3] = 0, t[4] = M * h - n * c, t[5] = n * a - s * h, t[6] = s * c - M * a, t[7] = 0, t[8] = s, t[9] = M, t[10] = n, t[11] = 0, t[12] = u, t[13] = e, t[14] = o, t[15] = 1, t
        },
        str: function(t) {
            return "mat4(" + t[0] + ", " + t[1] + ", " + t[2] + ", " + t[3] + ", " + t[4] + ", " + t[5] + ", " + t[6] + ", " + t[7] + ", " + t[8] + ", " + t[9] + ", " + t[10] + ", " + t[11] + ", " + t[12] + ", " + t[13] + ", " + t[14] + ", " + t[15] + ")"
        },
        frob: function(t) {
            return Math.hypot(t[0], t[1], t[2], t[3], t[4], t[5], t[6], t[7], t[8], t[9], t[10], t[11], t[12], t[13], t[14], t[15])
        },
        add: function(t, n, a) {
            return t[0] = n[0] + a[0], t[1] = n[1] + a[1], t[2] = n[2] + a[2], t[3] = n[3] + a[3], t[4] = n[4] + a[4], t[5] = n[5] + a[5], t[6] = n[6] + a[6], t[7] = n[7] + a[7], t[8] = n[8] + a[8], t[9] = n[9] + a[9], t[10] = n[10] + a[10], t[11] = n[11] + a[11], t[12] = n[12] + a[12], t[13] = n[13] + a[13], t[14] = n[14] + a[14], t[15] = n[15] + a[15], t
        },
        subtract: _,
        multiplyScalar: function(t, n, a) {
            return t[0] = n[0] * a, t[1] = n[1] * a, t[2] = n[2] * a, t[3] = n[3] * a, t[4] = n[4] * a, t[5] = n[5] * a, t[6] = n[6] * a, t[7] = n[7] * a, t[8] = n[8] * a, t[9] = n[9] * a, t[10] = n[10] * a, t[11] = n[11] * a, t[12] = n[12] * a, t[13] = n[13] * a, t[14] = n[14] * a, t[15] = n[15] * a, t
        },
        multiplyScalarAndAdd: function(t, n, a, r) {
            return t[0] = n[0] + a[0] * r, t[1] = n[1] + a[1] * r, t[2] = n[2] + a[2] * r, t[3] = n[3] + a[3] * r, t[4] = n[4] + a[4] * r, t[5] = n[5] + a[5] * r, t[6] = n[6] + a[6] * r, t[7] = n[7] + a[7] * r, t[8] = n[8] + a[8] * r, t[9] = n[9] + a[9] * r, t[10] = n[10] + a[10] * r, t[11] = n[11] + a[11] * r, t[12] = n[12] + a[12] * r, t[13] = n[13] + a[13] * r, t[14] = n[14] + a[14] * r, t[15] = n[15] + a[15] * r, t
        },
        exactEquals: function(t, n) {
            return t[0] === n[0] && t[1] === n[1] && t[2] === n[2] && t[3] === n[3] && t[4] === n[4] && t[5] === n[5] && t[6] === n[6] && t[7] === n[7] && t[8] === n[8] && t[9] === n[9] && t[10] === n[10] && t[11] === n[11] && t[12] === n[12] && t[13] === n[13] && t[14] === n[14] && t[15] === n[15]
        },
        equals: function(t, n) {
            var a = t[0],
                r = t[1],
                u = t[2],
                e = t[3],
                o = t[4],
                i = t[5],
                h = t[6],
                c = t[7],
                s = t[8],
                M = t[9],
                f = t[10],
                l = t[11],
                v = t[12],
                b = t[13],
                m = t[14],
                d = t[15],
                p = n[0],
                x = n[1],
                y = n[2],
                q = n[3],
                g = n[4],
                _ = n[5],
                A = n[6],
                w = n[7],
                R = n[8],
                z = n[9],
                O = n[10],
                j = n[11],
                P = n[12],
                S = n[13],
                t = n[14],
                n = n[15];
            return Math.abs(a - p) <= E * Math.max(1, Math.abs(a), Math.abs(p)) && Math.abs(r - x) <= E * Math.max(1, Math.abs(r), Math.abs(x)) && Math.abs(u - y) <= E * Math.max(1, Math.abs(u), Math.abs(y)) && Math.abs(e - q) <= E * Math.max(1, Math.abs(e), Math.abs(q)) && Math.abs(o - g) <= E * Math.max(1, Math.abs(o), Math.abs(g)) && Math.abs(i - _) <= E * Math.max(1, Math.abs(i), Math.abs(_)) && Math.abs(h - A) <= E * Math.max(1, Math.abs(h), Math.abs(A)) && Math.abs(c - w) <= E * Math.max(1, Math.abs(c), Math.abs(w)) && Math.abs(s - R) <= E * Math.max(1, Math.abs(s), Math.abs(R)) && Math.abs(M - z) <= E * Math.max(1, Math.abs(M), Math.abs(z)) && Math.abs(f - O) <= E * Math.max(1, Math.abs(f), Math.abs(O)) && Math.abs(l - j) <= E * Math.max(1, Math.abs(l), Math.abs(j)) && Math.abs(v - P) <= E * Math.max(1, Math.abs(v), Math.abs(P)) && Math.abs(b - S) <= E * Math.max(1, Math.abs(b), Math.abs(S)) && Math.abs(m - t) <= E * Math.max(1, Math.abs(m), Math.abs(t)) && Math.abs(d - n) <= E * Math.max(1, Math.abs(d), Math.abs(n))
        },
        mul: b,
        sub: _
    });

    function w() {
        var t = new d(3);
        return d != Float32Array && (t[0] = 0, t[1] = 0, t[2] = 0), t
    }

    function R(t) {
        var n = t[0],
            a = t[1],
            t = t[2];
        return Math.hypot(n, a, t)
    }

    function z(t, n, a) {
        var r = new d(3);
        return r[0] = t, r[1] = n, r[2] = a, r
    }

    function O(t, n, a) {
        return t[0] = n[0] - a[0], t[1] = n[1] - a[1], t[2] = n[2] - a[2], t
    }

    function j(t, n, a) {
        return t[0] = n[0] * a[0], t[1] = n[1] * a[1], t[2] = n[2] * a[2], t
    }

    function P(t, n, a) {
        return t[0] = n[0] / a[0], t[1] = n[1] / a[1], t[2] = n[2] / a[2], t
    }

    function S(t, n) {
        var a = n[0] - t[0],
            r = n[1] - t[1],
            t = n[2] - t[2];
        return Math.hypot(a, r, t)
    }

    function T(t, n) {
        var a = n[0] - t[0],
            r = n[1] - t[1],
            t = n[2] - t[2];
        return a * a + r * r + t * t
    }

    function D(t) {
        var n = t[0],
            a = t[1],
            t = t[2];
        return n * n + a * a + t * t
    }

    function F(t, n) {
        var a = n[0],
            r = n[1],
            u = n[2],
            u = a * a + r * r + u * u;
        return 0 < u && (u = 1 / Math.sqrt(u)), t[0] = n[0] * u, t[1] = n[1] * u, t[2] = n[2] * u, t
    }

    function I(t, n) {
        return t[0] * n[0] + t[1] * n[1] + t[2] * n[2]
    }

    function L(t, n, a) {
        var r = n[0],
            u = n[1],
            e = n[2],
            o = a[0],
            n = a[1],
            a = a[2];
        return t[0] = u * a - e * n, t[1] = e * o - r * a, t[2] = r * n - u * o, t
    }
    var V, Q = O,
        Y = j,
        Z = P,
        X = S,
        N = T,
        B = R,
        k = D,
        U = (V = w(), function(t, n, a, r, u, e) {
            var o, i;
            for (n = n || 3, a = a || 0, i = r ? Math.min(r * n + a, t.length) : t.length, o = a; o < i; o += n) V[0] = t[o], V[1] = t[o + 1], V[2] = t[o + 2], u(V, V, e), t[o] = V[0], t[o + 1] = V[1], t[o + 2] = V[2];
            return t
        }),
        W = Object.freeze({
            __proto__: null,
            create: w,
            clone: function(t) {
                var n = new d(3);
                return n[0] = t[0], n[1] = t[1], n[2] = t[2], n
            },
            length: R,
            fromValues: z,
            copy: function(t, n) {
                return t[0] = n[0], t[1] = n[1], t[2] = n[2], t
            },
            set: function(t, n, a, r) {
                return t[0] = n, t[1] = a, t[2] = r, t
            },
            add: function(t, n, a) {
                return t[0] = n[0] + a[0], t[1] = n[1] + a[1], t[2] = n[2] + a[2], t
            },
            subtract: O,
            multiply: j,
            divide: P,
            ceil: function(t, n) {
                return t[0] = Math.ceil(n[0]), t[1] = Math.ceil(n[1]), t[2] = Math.ceil(n[2]), t
            },
            floor: function(t, n) {
                return t[0] = Math.floor(n[0]), t[1] = Math.floor(n[1]), t[2] = Math.floor(n[2]), t
            },
            min: function(t, n, a) {
                return t[0] = Math.min(n[0], a[0]), t[1] = Math.min(n[1], a[1]), t[2] = Math.min(n[2], a[2]), t
            },
            max: function(t, n, a) {
                return t[0] = Math.max(n[0], a[0]), t[1] = Math.max(n[1], a[1]), t[2] = Math.max(n[2], a[2]), t
            },
            round: function(t, n) {
                return t[0] = Math.round(n[0]), t[1] = Math.round(n[1]), t[2] = Math.round(n[2]), t
            },
            scale: function(t, n, a) {
                return t[0] = n[0] * a, t[1] = n[1] * a, t[2] = n[2] * a, t
            },
            scaleAndAdd: function(t, n, a, r) {
                return t[0] = n[0] + a[0] * r, t[1] = n[1] + a[1] * r, t[2] = n[2] + a[2] * r, t
            },
            distance: S,
            squaredDistance: T,
            squaredLength: D,
            negate: function(t, n) {
                return t[0] = -n[0], t[1] = -n[1], t[2] = -n[2], t
            },
            inverse: function(t, n) {
                return t[0] = 1 / n[0], t[1] = 1 / n[1], t[2] = 1 / n[2], t
            },
            normalize: F,
            dot: I,
            cross: L,
            lerp: function(t, n, a, r) {
                var u = n[0],
                    e = n[1],
                    n = n[2];
                return t[0] = u + r * (a[0] - u), t[1] = e + r * (a[1] - e), t[2] = n + r * (a[2] - n), t
            },
            hermite: function(t, n, a, r, u, e) {
                var o = e * e,
                    i = o * (2 * e - 3) + 1,
                    h = o * (e - 2) + e,
                    c = o * (e - 1),
                    e = o * (3 - 2 * e);
                return t[0] = n[0] * i + a[0] * h + r[0] * c + u[0] * e, t[1] = n[1] * i + a[1] * h + r[1] * c + u[1] * e, t[2] = n[2] * i + a[2] * h + r[2] * c + u[2] * e, t
            },
            bezier: function(t, n, a, r, u, e) {
                var o = 1 - e,
                    i = o * o,
                    h = e * e,
                    c = i * o,
                    i = 3 * e * i,
                    o = 3 * h * o,
                    e = h * e;
                return t[0] = n[0] * c + a[0] * i + r[0] * o + u[0] * e, t[1] = n[1] * c + a[1] * i + r[1] * o + u[1] * e, t[2] = n[2] * c + a[2] * i + r[2] * o + u[2] * e, t
            },
            random: function(t, n) {
                n = n || 1;
                var a = 2 * c() * Math.PI,
                    r = 2 * c() - 1,
                    u = Math.sqrt(1 - r * r) * n;
                return t[0] = Math.cos(a) * u, t[1] = Math.sin(a) * u, t[2] = r * n, t
            },
            transformMat4: function(t, n, a) {
                var r = n[0],
                    u = n[1],
                    e = n[2],
                    n = a[3] * r + a[7] * u + a[11] * e + a[15];
                return t[0] = (a[0] * r + a[4] * u + a[8] * e + a[12]) / (n = n || 1), t[1] = (a[1] * r + a[5] * u + a[9] * e + a[13]) / n, t[2] = (a[2] * r + a[6] * u + a[10] * e + a[14]) / n, t
            },
            transformMat3: function(t, n, a) {
                var r = n[0],
                    u = n[1],
                    n = n[2];
                return t[0] = r * a[0] + u * a[3] + n * a[6], t[1] = r * a[1] + u * a[4] + n * a[7], t[2] = r * a[2] + u * a[5] + n * a[8], t
            },
            transformQuat: function(t, n, a) {
                var r = a[0],
                    u = a[1],
                    e = a[2],
                    o = a[3],
                    i = n[0],
                    h = n[1],
                    c = n[2],
                    s = u * c - e * h,
                    M = e * i - r * c,
                    a = r * h - u * i,
                    n = u * a - e * M,
                    e = e * s - r * a,
                    u = r * M - u * s,
                    o = 2 * o;
                return M *= o, a *= o, e *= 2, u *= 2, t[0] = i + (s *= o) + (n *= 2), t[1] = h + M + e, t[2] = c + a + u, t
            },
            rotateX: function(t, n, a, r) {
                var u = [],
                    e = [];
                return u[0] = n[0] - a[0], u[1] = n[1] - a[1], u[2] = n[2] - a[2], e[0] = u[0], e[1] = u[1] * Math.cos(r) - u[2] * Math.sin(r), e[2] = u[1] * Math.sin(r) + u[2] * Math.cos(r), t[0] = e[0] + a[0], t[1] = e[1] + a[1], t[2] = e[2] + a[2], t
            },
            rotateY: function(t, n, a, r) {
                var u = [],
                    e = [];
                return u[0] = n[0] - a[0], u[1] = n[1] - a[1], u[2] = n[2] - a[2], e[0] = u[2] * Math.sin(r) + u[0] * Math.cos(r), e[1] = u[1], e[2] = u[2] * Math.cos(r) - u[0] * Math.sin(r), t[0] = e[0] + a[0], t[1] = e[1] + a[1], t[2] = e[2] + a[2], t
            },
            rotateZ: function(t, n, a, r) {
                var u = [],
                    e = [];
                return u[0] = n[0] - a[0], u[1] = n[1] - a[1], u[2] = n[2] - a[2], e[0] = u[0] * Math.cos(r) - u[1] * Math.sin(r), e[1] = u[0] * Math.sin(r) + u[1] * Math.cos(r), e[2] = u[2], t[0] = e[0] + a[0], t[1] = e[1] + a[1], t[2] = e[2] + a[2], t
            },
            angle: function(t, n) {
                var a = t[0],
                    r = t[1],
                    u = t[2],
                    e = n[0],
                    o = n[1],
                    i = n[2],
                    i = Math.sqrt(a * a + r * r + u * u) * Math.sqrt(e * e + o * o + i * i),
                    i = i && I(t, n) / i;
                return Math.acos(Math.min(Math.max(i, -1), 1))
            },
            zero: function(t) {
                return t[0] = 0, t[1] = 0, t[2] = 0, t
            },
            str: function(t) {
                return "vec3(" + t[0] + ", " + t[1] + ", " + t[2] + ")"
            },
            exactEquals: function(t, n) {
                return t[0] === n[0] && t[1] === n[1] && t[2] === n[2]
            },
            equals: function(t, n) {
                var a = t[0],
                    r = t[1],
                    u = t[2],
                    e = n[0],
                    t = n[1],
                    n = n[2];
                return Math.abs(a - e) <= E * Math.max(1, Math.abs(a), Math.abs(e)) && Math.abs(r - t) <= E * Math.max(1, Math.abs(r), Math.abs(t)) && Math.abs(u - n) <= E * Math.max(1, Math.abs(u), Math.abs(n))
            },
            sub: Q,
            mul: Y,
            div: Z,
            dist: X,
            sqrDist: N,
            len: B,
            sqrLen: k,
            forEach: U
        });

    function C() {
        var t = new d(4);
        return d != Float32Array && (t[0] = 0, t[1] = 0, t[2] = 0, t[3] = 0), t
    }

    function G(t) {
        var n = new d(4);
        return n[0] = t[0], n[1] = t[1], n[2] = t[2], n[3] = t[3], n
    }

    function H(t, n, a, r) {
        var u = new d(4);
        return u[0] = t, u[1] = n, u[2] = a, u[3] = r, u
    }

    function J(t, n) {
        return t[0] = n[0], t[1] = n[1], t[2] = n[2], t[3] = n[3], t
    }

    function K(t, n, a, r, u) {
        return t[0] = n, t[1] = a, t[2] = r, t[3] = u, t
    }

    function $(t, n, a) {
        return t[0] = n[0] + a[0], t[1] = n[1] + a[1], t[2] = n[2] + a[2], t[3] = n[3] + a[3], t
    }

    function tt(t, n, a) {
        return t[0] = n[0] - a[0], t[1] = n[1] - a[1], t[2] = n[2] - a[2], t[3] = n[3] - a[3], t
    }

    function nt(t, n, a) {
        return t[0] = n[0] * a[0], t[1] = n[1] * a[1], t[2] = n[2] * a[2], t[3] = n[3] * a[3], t
    }

    function at(t, n, a) {
        return t[0] = n[0] / a[0], t[1] = n[1] / a[1], t[2] = n[2] / a[2], t[3] = n[3] / a[3], t
    }

    function rt(t, n, a) {
        return t[0] = n[0] * a, t[1] = n[1] * a, t[2] = n[2] * a, t[3] = n[3] * a, t
    }

    function ut(t, n) {
        var a = n[0] - t[0],
            r = n[1] - t[1],
            u = n[2] - t[2],
            t = n[3] - t[3];
        return Math.hypot(a, r, u, t)
    }

    function et(t, n) {
        var a = n[0] - t[0],
            r = n[1] - t[1],
            u = n[2] - t[2],
            t = n[3] - t[3];
        return a * a + r * r + u * u + t * t
    }

    function ot(t) {
        var n = t[0],
            a = t[1],
            r = t[2],
            t = t[3];
        return Math.hypot(n, a, r, t)
    }

    function it(t) {
        var n = t[0],
            a = t[1],
            r = t[2],
            t = t[3];
        return n * n + a * a + r * r + t * t
    }

    function ht(t, n) {
        var a = n[0],
            r = n[1],
            u = n[2],
            e = n[3],
            n = a * a + r * r + u * u + e * e;
        return 0 < n && (n = 1 / Math.sqrt(n)), t[0] = a * n, t[1] = r * n, t[2] = u * n, t[3] = e * n, t
    }

    function ct(t, n) {
        return t[0] * n[0] + t[1] * n[1] + t[2] * n[2] + t[3] * n[3]
    }

    function st(t, n, a, r) {
        var u = n[0],
            e = n[1],
            o = n[2],
            n = n[3];
        return t[0] = u + r * (a[0] - u), t[1] = e + r * (a[1] - e), t[2] = o + r * (a[2] - o), t[3] = n + r * (a[3] - n), t
    }

    function Mt(t, n) {
        return t[0] === n[0] && t[1] === n[1] && t[2] === n[2] && t[3] === n[3]
    }

    function ft(t, n) {
        var a = t[0],
            r = t[1],
            u = t[2],
            e = t[3],
            o = n[0],
            i = n[1],
            t = n[2],
            n = n[3];
        return Math.abs(a - o) <= E * Math.max(1, Math.abs(a), Math.abs(o)) && Math.abs(r - i) <= E * Math.max(1, Math.abs(r), Math.abs(i)) && Math.abs(u - t) <= E * Math.max(1, Math.abs(u), Math.abs(t)) && Math.abs(e - n) <= E * Math.max(1, Math.abs(e), Math.abs(n))
    }
    var lt, vt = tt,
        bt = nt,
        mt = at,
        dt = ut,
        pt = et,
        xt = ot,
        yt = it,
        qt = (lt = C(), function(t, n, a, r, u, e) {
            var o, i;
            for (n = n || 4, a = a || 0, i = r ? Math.min(r * n + a, t.length) : t.length, o = a; o < i; o += n) lt[0] = t[o], lt[1] = t[o + 1], lt[2] = t[o + 2], lt[3] = t[o + 3], u(lt, lt, e), t[o] = lt[0], t[o + 1] = lt[1], t[o + 2] = lt[2], t[o + 3] = lt[3];
            return t
        }),
        gt = Object.freeze({
            __proto__: null,
            create: C,
            clone: G,
            fromValues: H,
            copy: J,
            set: K,
            add: $,
            subtract: tt,
            multiply: nt,
            divide: at,
            ceil: function(t, n) {
                return t[0] = Math.ceil(n[0]), t[1] = Math.ceil(n[1]), t[2] = Math.ceil(n[2]), t[3] = Math.ceil(n[3]), t
            },
            floor: function(t, n) {
                return t[0] = Math.floor(n[0]), t[1] = Math.floor(n[1]), t[2] = Math.floor(n[2]), t[3] = Math.floor(n[3]), t
            },
            min: function(t, n, a) {
                return t[0] = Math.min(n[0], a[0]), t[1] = Math.min(n[1], a[1]), t[2] = Math.min(n[2], a[2]), t[3] = Math.min(n[3], a[3]), t
            },
            max: function(t, n, a) {
                return t[0] = Math.max(n[0], a[0]), t[1] = Math.max(n[1], a[1]), t[2] = Math.max(n[2], a[2]), t[3] = Math.max(n[3], a[3]), t
            },
            round: function(t, n) {
                return t[0] = Math.round(n[0]), t[1] = Math.round(n[1]), t[2] = Math.round(n[2]), t[3] = Math.round(n[3]), t
            },
            scale: rt,
            scaleAndAdd: function(t, n, a, r) {
                return t[0] = n[0] + a[0] * r, t[1] = n[1] + a[1] * r, t[2] = n[2] + a[2] * r, t[3] = n[3] + a[3] * r, t
            },
            distance: ut,
            squaredDistance: et,
            length: ot,
            squaredLength: it,
            negate: function(t, n) {
                return t[0] = -n[0], t[1] = -n[1], t[2] = -n[2], t[3] = -n[3], t
            },
            inverse: function(t, n) {
                return t[0] = 1 / n[0], t[1] = 1 / n[1], t[2] = 1 / n[2], t[3] = 1 / n[3], t
            },
            normalize: ht,
            dot: ct,
            cross: function(t, n, a, r) {
                var u = a[0] * r[1] - a[1] * r[0],
                    e = a[0] * r[2] - a[2] * r[0],
                    o = a[0] * r[3] - a[3] * r[0],
                    i = a[1] * r[2] - a[2] * r[1],
                    h = a[1] * r[3] - a[3] * r[1],
                    c = a[2] * r[3] - a[3] * r[2],
                    s = n[0],
                    a = n[1],
                    r = n[2],
                    n = n[3];
                return t[0] = a * c - r * h + n * i, t[1] = -s * c + r * o - n * e, t[2] = s * h - a * o + n * u, t[3] = -s * i + a * e - r * u, t
            },
            lerp: st,
            random: function(t, n) {
                var a, r, u, e, o, i;
                for (n = n || 1; 1 <= (o = (a = 2 * c() - 1) * a + (r = 2 * c() - 1) * r););
                for (; 1 <= (i = (u = 2 * c() - 1) * u + (e = 2 * c() - 1) * e););
                var h = Math.sqrt((1 - o) / i);
                return t[0] = n * a, t[1] = n * r, t[2] = n * u * h, t[3] = n * e * h, t
            },
            transformMat4: function(t, n, a) {
                var r = n[0],
                    u = n[1],
                    e = n[2],
                    n = n[3];
                return t[0] = a[0] * r + a[4] * u + a[8] * e + a[12] * n, t[1] = a[1] * r + a[5] * u + a[9] * e + a[13] * n, t[2] = a[2] * r + a[6] * u + a[10] * e + a[14] * n, t[3] = a[3] * r + a[7] * u + a[11] * e + a[15] * n, t
            },
            transformQuat: function(t, n, a) {
                var r = n[0],
                    u = n[1],
                    e = n[2],
                    o = a[0],
                    i = a[1],
                    h = a[2],
                    c = a[3],
                    s = c * r + i * e - h * u,
                    M = c * u + h * r - o * e,
                    a = c * e + o * u - i * r,
                    e = -o * r - i * u - h * e;
                return t[0] = s * c + e * -o + M * -h - a * -i, t[1] = M * c + e * -i + a * -o - s * -h, t[2] = a * c + e * -h + s * -i - M * -o, t[3] = n[3], t
            },
            zero: function(t) {
                return t[0] = 0, t[1] = 0, t[2] = 0, t[3] = 0, t
            },
            str: function(t) {
                return "vec4(" + t[0] + ", " + t[1] + ", " + t[2] + ", " + t[3] + ")"
            },
            exactEquals: Mt,
            equals: ft,
            sub: vt,
            mul: bt,
            div: mt,
            dist: dt,
            sqrDist: pt,
            len: xt,
            sqrLen: yt,
            forEach: qt
        });

    function _t() {
        var t = new d(4);
        return d != Float32Array && (t[0] = 0, t[1] = 0, t[2] = 0), t[3] = 1, t
    }

    function At(t, n, a) {
        a *= .5;
        var r = Math.sin(a);
        return t[0] = r * n[0], t[1] = r * n[1], t[2] = r * n[2], t[3] = Math.cos(a), t
    }

    function wt(t, n, a) {
        var r = n[0],
            u = n[1],
            e = n[2],
            o = n[3],
            i = a[0],
            h = a[1],
            n = a[2],
            a = a[3];
        return t[0] = r * a + o * i + u * n - e * h, t[1] = u * a + o * h + e * i - r * n, t[2] = e * a + o * n + r * h - u * i, t[3] = o * a - r * i - u * h - e * n, t
    }

    function Rt(t, n, a) {
        a *= .5;
        var r = n[0],
            u = n[1],
            e = n[2],
            o = n[3],
            n = Math.sin(a),
            a = Math.cos(a);
        return t[0] = r * a + o * n, t[1] = u * a + e * n, t[2] = e * a - u * n, t[3] = o * a - r * n, t
    }

    function zt(t, n, a) {
        a *= .5;
        var r = n[0],
            u = n[1],
            e = n[2],
            o = n[3],
            n = Math.sin(a),
            a = Math.cos(a);
        return t[0] = r * a - e * n, t[1] = u * a + o * n, t[2] = e * a + r * n, t[3] = o * a - u * n, t
    }

    function Ot(t, n, a) {
        a *= .5;
        var r = n[0],
            u = n[1],
            e = n[2],
            o = n[3],
            n = Math.sin(a),
            a = Math.cos(a);
        return t[0] = r * a + u * n, t[1] = u * a - r * n, t[2] = e * a + o * n, t[3] = o * a - e * n, t
    }

    function jt(t, n) {
        var a = n[0],
            r = n[1],
            u = n[2],
            e = n[3],
            o = Math.sqrt(a * a + r * r + u * u),
            n = Math.exp(e),
            e = 0 < o ? n * Math.sin(o) / o : 0;
        return t[0] = a * e, t[1] = r * e, t[2] = u * e, t[3] = n * Math.cos(o), t
    }

    function Pt(t, n) {
        var a = n[0],
            r = n[1],
            u = n[2],
            e = n[3],
            n = Math.sqrt(a * a + r * r + u * u),
            n = 0 < n ? Math.atan2(n, e) / n : 0;
        return t[0] = a * n, t[1] = r * n, t[2] = u * n, t[3] = .5 * Math.log(a * a + r * r + u * u + e * e), t
    }

    function St(t, n, a, r) {
        var u, e = n[0],
            o = n[1],
            i = n[2],
            h = n[3],
            c = a[0],
            s = a[1],
            M = a[2],
            f = a[3];
        return (n = e * c + o * s + i * M + h * f) < 0 && (n = -n, c = -c, s = -s, M = -M, f = -f), r = E < 1 - n ? (a = Math.acos(n), n = Math.sin(a), u = Math.sin((1 - r) * a) / n, Math.sin(r * a) / n) : (u = 1 - r, r), t[0] = u * e + r * c, t[1] = u * o + r * s, t[2] = u * i + r * M, t[3] = u * h + r * f, t
    }

    function Et(t, n) {
        var a, r, u, e = n[0] + n[4] + n[8];
        return 0 < e ? (u = Math.sqrt(e + 1), t[3] = .5 * u, t[0] = (n[5] - n[7]) * (u = .5 / u), t[1] = (n[6] - n[2]) * u, t[2] = (n[1] - n[3]) * u) : (n[4] > n[a = 0] && (a = 1), r = ((a = n[8] > n[3 * a + a] ? 2 : a) + 1) % 3, e = (a + 2) % 3, u = Math.sqrt(n[3 * a + a] - n[3 * r + r] - n[3 * e + e] + 1), t[a] = .5 * u, t[3] = (n[3 * r + e] - n[3 * e + r]) * (u = .5 / u), t[r] = (n[3 * r + a] + n[3 * a + r]) * u, t[e] = (n[3 * e + a] + n[3 * a + e]) * u), t
    }
    var Tt, Dt, Ft, It, Lt, Vt, Qt = G,
        Q = H,
        Y = J,
        Z = K,
        X = $,
        N = wt,
        Yt = rt,
        Zt = ct,
        k = st,
        U = ot,
        vt = U,
        bt = it,
        mt = bt,
        Xt = ht,
        dt = Mt,
        pt = ft,
        xt = (Tt = w(), Dt = z(1, 0, 0), Ft = z(0, 1, 0), function(t, n, a) {
            var r = I(n, a);
            return r < -.999999 ? (L(Tt, Dt, n), B(Tt) < 1e-6 && L(Tt, Ft, n), F(Tt, Tt), At(t, Tt, Math.PI), t) : .999999 < r ? (t[0] = 0, t[1] = 0, t[2] = 0, t[3] = 1, t) : (L(Tt, n, a), t[0] = Tt[0], t[1] = Tt[1], t[2] = Tt[2], t[3] = 1 + r, Xt(t, t))
        }),
        yt = (It = _t(), Lt = _t(), function(t, n, a, r, u, e) {
            return St(It, n, u, e), St(Lt, a, r, e), St(t, It, Lt, 2 * e * (1 - e)), t
        }),
        qt = (Vt = s(), function(t, n, a, r) {
            return Vt[0] = a[0], Vt[3] = a[1], Vt[6] = a[2], Vt[1] = r[0], Vt[4] = r[1], Vt[7] = r[2], Vt[2] = -n[0], Vt[5] = -n[1], Vt[8] = -n[2], Xt(t, Et(t, Vt))
        }),
        vt = Object.freeze({
            __proto__: null,
            create: _t,
            identity: function(t) {
                return t[0] = 0, t[1] = 0, t[2] = 0, t[3] = 1, t
            },
            setAxisAngle: At,
            getAxisAngle: function(t, n) {
                var a = 2 * Math.acos(n[3]),
                    r = Math.sin(a / 2);
                return E < r ? (t[0] = n[0] / r, t[1] = n[1] / r, t[2] = n[2] / r) : (t[0] = 1, t[1] = 0, t[2] = 0), a
            },
            getAngle: function(t, n) {
                n = Zt(t, n);
                return Math.acos(2 * n * n - 1)
            },
            multiply: wt,
            rotateX: Rt,
            rotateY: zt,
            rotateZ: Ot,
            calculateW: function(t, n) {
                var a = n[0],
                    r = n[1],
                    n = n[2];
                return t[0] = a, t[1] = r, t[2] = n, t[3] = Math.sqrt(Math.abs(1 - a * a - r * r - n * n)), t
            },
            exp: jt,
            ln: Pt,
            pow: function(t, n, a) {
                return Pt(t, n), Yt(t, t, a), jt(t, t), t
            },
            slerp: St,
            random: function(t) {
                var n = c(),
                    a = c(),
                    r = c(),
                    u = Math.sqrt(1 - n),
                    n = Math.sqrt(n);
                return t[0] = u * Math.sin(2 * Math.PI * a), t[1] = u * Math.cos(2 * Math.PI * a), t[2] = n * Math.sin(2 * Math.PI * r), t[3] = n * Math.cos(2 * Math.PI * r), t
            },
            invert: function(t, n) {
                var a = n[0],
                    r = n[1],
                    u = n[2],
                    e = n[3],
                    n = a * a + r * r + u * u + e * e,
                    n = n ? 1 / n : 0;
                return t[0] = -a * n, t[1] = -r * n, t[2] = -u * n, t[3] = e * n, t
            },
            conjugate: function(t, n) {
                return t[0] = -n[0], t[1] = -n[1], t[2] = -n[2], t[3] = n[3], t
            },
            fromMat3: Et,
            fromEuler: function(t, n, a, r) {
                var u = .5 * Math.PI / 180;
                n *= u, a *= u, r *= u;
                var e = Math.sin(n),
                    o = Math.cos(n),
                    u = Math.sin(a),
                    n = Math.cos(a),
                    a = Math.sin(r),
                    r = Math.cos(r);
                return t[0] = e * n * r - o * u * a, t[1] = o * u * r + e * n * a, t[2] = o * n * a - e * u * r, t[3] = o * n * r + e * u * a, t
            },
            str: function(t) {
                return "quat(" + t[0] + ", " + t[1] + ", " + t[2] + ", " + t[3] + ")"
            },
            clone: Qt,
            fromValues: Q,
            copy: Y,
            set: Z,
            add: X,
            mul: N,
            scale: Yt,
            dot: Zt,
            lerp: k,
            length: U,
            len: vt,
            squaredLength: bt,
            sqrLen: mt,
            normalize: Xt,
            exactEquals: dt,
            equals: pt,
            rotationTo: xt,
            sqlerp: yt,
            setAxes: qt
        });

    function Nt(t, n, a) {
        var r = .5 * a[0],
            u = .5 * a[1],
            e = .5 * a[2],
            o = n[0],
            i = n[1],
            a = n[2],
            n = n[3];
        return t[0] = o, t[1] = i, t[2] = a, t[3] = n, t[4] = r * n + u * a - e * i, t[5] = u * n + e * o - r * a, t[6] = e * n + r * i - u * o, t[7] = -r * o - u * i - e * a, t
    }

    function Bt(t, n) {
        return t[0] = n[0], t[1] = n[1], t[2] = n[2], t[3] = n[3], t[4] = n[4], t[5] = n[5], t[6] = n[6], t[7] = n[7], t
    }

    function kt(t, n, a) {
        var r = n[0],
            u = n[1],
            e = n[2],
            o = n[3],
            i = a[4],
            h = a[5],
            c = a[6],
            s = a[7],
            M = n[4],
            f = n[5],
            l = n[6],
            v = n[7],
            b = a[0],
            m = a[1],
            n = a[2],
            a = a[3];
        return t[0] = r * a + o * b + u * n - e * m, t[1] = u * a + o * m + e * b - r * n, t[2] = e * a + o * n + r * m - u * b, t[3] = o * a - r * b - u * m - e * n, t[4] = r * s + o * i + u * c - e * h + M * a + v * b + f * n - l * m, t[5] = u * s + o * h + e * i - r * c + f * a + v * m + l * b - M * n, t[6] = e * s + o * c + r * h - u * i + l * a + v * n + M * m - f * b, t[7] = o * s - r * i - u * h - e * c + v * a - M * b - f * m - l * n, t
    }
    var Ut = Zt,
        Wt = bt,
        mt = Object.freeze({
            __proto__: null,
            create: function() {
                var t = new d(8);
                return d != Float32Array && (t[0] = 0, t[1] = 0, t[2] = 0, t[4] = 0, t[5] = 0, t[6] = 0, t[7] = 0), t[3] = 1, t
            },
            clone: function(t) {
                var n = new d(8);
                return n[0] = t[0], n[1] = t[1], n[2] = t[2], n[3] = t[3], n[4] = t[4], n[5] = t[5], n[6] = t[6], n[7] = t[7], n
            },
            fromValues: function(t, n, a, r, u, e, o, i) {
                var h = new d(8);
                return h[0] = t, h[1] = n, h[2] = a, h[3] = r, h[4] = u, h[5] = e, h[6] = o, h[7] = i, h
            },
            fromRotationTranslationValues: function(t, n, a, r, u, e, o) {
                var i = new d(8);
                i[0] = t, i[1] = n, i[2] = a, i[3] = r;
                u *= .5, e *= .5, o *= .5;
                return i[4] = u * r + e * a - o * n, i[5] = e * r + o * t - u * a, i[6] = o * r + u * n - e * t, i[7] = -u * t - e * n - o * a, i
            },
            fromRotationTranslation: Nt,
            fromTranslation: function(t, n) {
                return t[0] = 0, t[1] = 0, t[2] = 0, t[3] = 1, t[4] = .5 * n[0], t[5] = .5 * n[1], t[6] = .5 * n[2], t[7] = 0, t
            },
            fromRotation: function(t, n) {
                return t[0] = n[0], t[1] = n[1], t[2] = n[2], t[3] = n[3], t[4] = 0, t[5] = 0, t[6] = 0, t[7] = 0, t
            },
            fromMat4: function(t, n) {
                var a = _t();
                y(a, n);
                var r = new d(3);
                return p(r, n), Nt(t, a, r), t
            },
            copy: Bt,
            identity: function(t) {
                return t[0] = 0, t[1] = 0, t[2] = 0, t[3] = 1, t[4] = 0, t[5] = 0, t[6] = 0, t[7] = 0, t
            },
            set: function(t, n, a, r, u, e, o, i, h) {
                return t[0] = n, t[1] = a, t[2] = r, t[3] = u, t[4] = e, t[5] = o, t[6] = i, t[7] = h, t
            },
            getReal: Y,
            getDual: function(t, n) {
                return t[0] = n[4], t[1] = n[5], t[2] = n[6], t[3] = n[7], t
            },
            setReal: Y,
            setDual: function(t, n) {
                return t[4] = n[0], t[5] = n[1], t[6] = n[2], t[7] = n[3], t
            },
            getTranslation: function(t, n) {
                var a = n[4],
                    r = n[5],
                    u = n[6],
                    e = n[7],
                    o = -n[0],
                    i = -n[1],
                    h = -n[2],
                    n = n[3];
                return t[0] = 2 * (a * n + e * o + r * h - u * i), t[1] = 2 * (r * n + e * i + u * o - a * h), t[2] = 2 * (u * n + e * h + a * i - r * o), t
            },
            translate: function(t, n, a) {
                var r = n[0],
                    u = n[1],
                    e = n[2],
                    o = n[3],
                    i = .5 * a[0],
                    h = .5 * a[1],
                    c = .5 * a[2],
                    s = n[4],
                    M = n[5],
                    a = n[6],
                    n = n[7];
                return t[0] = r, t[1] = u, t[2] = e, t[3] = o, t[4] = o * i + u * c - e * h + s, t[5] = o * h + e * i - r * c + M, t[6] = o * c + r * h - u * i + a, t[7] = -r * i - u * h - e * c + n, t
            },
            rotateX: function(t, n, a) {
                var r = -n[0],
                    u = -n[1],
                    e = -n[2],
                    o = n[3],
                    i = n[4],
                    h = n[5],
                    c = n[6],
                    s = n[7],
                    M = i * o + s * r + h * e - c * u,
                    f = h * o + s * u + c * r - i * e,
                    l = c * o + s * e + i * u - h * r,
                    c = s * o - i * r - h * u - c * e;
                return Rt(t, n, a), r = t[0], u = t[1], e = t[2], o = t[3], t[4] = M * o + c * r + f * e - l * u, t[5] = f * o + c * u + l * r - M * e, t[6] = l * o + c * e + M * u - f * r, t[7] = c * o - M * r - f * u - l * e, t
            },
            rotateY: function(t, n, a) {
                var r = -n[0],
                    u = -n[1],
                    e = -n[2],
                    o = n[3],
                    i = n[4],
                    h = n[5],
                    c = n[6],
                    s = n[7],
                    M = i * o + s * r + h * e - c * u,
                    f = h * o + s * u + c * r - i * e,
                    l = c * o + s * e + i * u - h * r,
                    c = s * o - i * r - h * u - c * e;
                return zt(t, n, a), r = t[0], u = t[1], e = t[2], o = t[3], t[4] = M * o + c * r + f * e - l * u, t[5] = f * o + c * u + l * r - M * e, t[6] = l * o + c * e + M * u - f * r, t[7] = c * o - M * r - f * u - l * e, t
            },
            rotateZ: function(t, n, a) {
                var r = -n[0],
                    u = -n[1],
                    e = -n[2],
                    o = n[3],
                    i = n[4],
                    h = n[5],
                    c = n[6],
                    s = n[7],
                    M = i * o + s * r + h * e - c * u,
                    f = h * o + s * u + c * r - i * e,
                    l = c * o + s * e + i * u - h * r,
                    c = s * o - i * r - h * u - c * e;
                return Ot(t, n, a), r = t[0], u = t[1], e = t[2], o = t[3], t[4] = M * o + c * r + f * e - l * u, t[5] = f * o + c * u + l * r - M * e, t[6] = l * o + c * e + M * u - f * r, t[7] = c * o - M * r - f * u - l * e, t
            },
            rotateByQuatAppend: function(t, n, a) {
                var r = a[0],
                    u = a[1],
                    e = a[2],
                    o = a[3],
                    i = n[0],
                    h = n[1],
                    c = n[2],
                    a = n[3];
                return t[0] = i * o + a * r + h * e - c * u, t[1] = h * o + a * u + c * r - i * e, t[2] = c * o + a * e + i * u - h * r, t[3] = a * o - i * r - h * u - c * e, i = n[4], h = n[5], c = n[6], a = n[7], t[4] = i * o + a * r + h * e - c * u, t[5] = h * o + a * u + c * r - i * e, t[6] = c * o + a * e + i * u - h * r, t[7] = a * o - i * r - h * u - c * e, t
            },
            rotateByQuatPrepend: function(t, n, a) {
                var r = n[0],
                    u = n[1],
                    e = n[2],
                    o = n[3],
                    i = a[0],
                    h = a[1],
                    c = a[2],
                    n = a[3];
                return t[0] = r * n + o * i + u * c - e * h, t[1] = u * n + o * h + e * i - r * c, t[2] = e * n + o * c + r * h - u * i, t[3] = o * n - r * i - u * h - e * c, i = a[4], h = a[5], c = a[6], n = a[7], t[4] = r * n + o * i + u * c - e * h, t[5] = u * n + o * h + e * i - r * c, t[6] = e * n + o * c + r * h - u * i, t[7] = o * n - r * i - u * h - e * c, t
            },
            rotateAroundAxis: function(t, n, a, r) {
                if (Math.abs(r) < E) return Bt(t, n);
                var u = Math.hypot(a[0], a[1], a[2]);
                r *= .5;
                var e = Math.sin(r),
                    o = e * a[0] / u,
                    i = e * a[1] / u,
                    h = e * a[2] / u,
                    c = Math.cos(r),
                    e = n[0],
                    a = n[1],
                    u = n[2],
                    r = n[3];
                t[0] = e * c + r * o + a * h - u * i, t[1] = a * c + r * i + u * o - e * h, t[2] = u * c + r * h + e * i - a * o, t[3] = r * c - e * o - a * i - u * h;
                e = n[4], a = n[5], u = n[6], n = n[7];
                return t[4] = e * c + n * o + a * h - u * i, t[5] = a * c + n * i + u * o - e * h, t[6] = u * c + n * h + e * i - a * o, t[7] = n * c - e * o - a * i - u * h, t
            },
            add: function(t, n, a) {
                return t[0] = n[0] + a[0], t[1] = n[1] + a[1], t[2] = n[2] + a[2], t[3] = n[3] + a[3], t[4] = n[4] + a[4], t[5] = n[5] + a[5], t[6] = n[6] + a[6], t[7] = n[7] + a[7], t
            },
            multiply: kt,
            mul: kt,
            scale: function(t, n, a) {
                return t[0] = n[0] * a, t[1] = n[1] * a, t[2] = n[2] * a, t[3] = n[3] * a, t[4] = n[4] * a, t[5] = n[5] * a, t[6] = n[6] * a, t[7] = n[7] * a, t
            },
            dot: Ut,
            lerp: function(t, n, a, r) {
                var u = 1 - r;
                return Ut(n, a) < 0 && (r = -r), t[0] = n[0] * u + a[0] * r, t[1] = n[1] * u + a[1] * r, t[2] = n[2] * u + a[2] * r, t[3] = n[3] * u + a[3] * r, t[4] = n[4] * u + a[4] * r, t[5] = n[5] * u + a[5] * r, t[6] = n[6] * u + a[6] * r, t[7] = n[7] * u + a[7] * r, t
            },
            invert: function(t, n) {
                var a = Wt(n);
                return t[0] = -n[0] / a, t[1] = -n[1] / a, t[2] = -n[2] / a, t[3] = n[3] / a, t[4] = -n[4] / a, t[5] = -n[5] / a, t[6] = -n[6] / a, t[7] = n[7] / a, t
            },
            conjugate: function(t, n) {
                return t[0] = -n[0], t[1] = -n[1], t[2] = -n[2], t[3] = n[3], t[4] = -n[4], t[5] = -n[5], t[6] = -n[6], t[7] = n[7], t
            },
            length: U,
            len: U,
            squaredLength: Wt,
            sqrLen: Wt,
            normalize: function(t, n) {
                var a, r, u, e, o, i, h, c, s = Wt(n);
                return 0 < s && (s = Math.sqrt(s), a = n[0] / s, r = n[1] / s, u = n[2] / s, e = n[3] / s, n = a * (o = n[4]) + r * (i = n[5]) + u * (h = n[6]) + e * (c = n[7]), t[0] = a, t[1] = r, t[2] = u, t[3] = e, t[4] = (o - a * n) / s, t[5] = (i - r * n) / s, t[6] = (h - u * n) / s, t[7] = (c - e * n) / s), t
            },
            str: function(t) {
                return "quat2(" + t[0] + ", " + t[1] + ", " + t[2] + ", " + t[3] + ", " + t[4] + ", " + t[5] + ", " + t[6] + ", " + t[7] + ")"
            },
            exactEquals: function(t, n) {
                return t[0] === n[0] && t[1] === n[1] && t[2] === n[2] && t[3] === n[3] && t[4] === n[4] && t[5] === n[5] && t[6] === n[6] && t[7] === n[7]
            },
            equals: function(t, n) {
                var a = t[0],
                    r = t[1],
                    u = t[2],
                    e = t[3],
                    o = t[4],
                    i = t[5],
                    h = t[6],
                    c = t[7],
                    s = n[0],
                    M = n[1],
                    f = n[2],
                    l = n[3],
                    v = n[4],
                    b = n[5],
                    t = n[6],
                    n = n[7];
                return Math.abs(a - s) <= E * Math.max(1, Math.abs(a), Math.abs(s)) && Math.abs(r - M) <= E * Math.max(1, Math.abs(r), Math.abs(M)) && Math.abs(u - f) <= E * Math.max(1, Math.abs(u), Math.abs(f)) && Math.abs(e - l) <= E * Math.max(1, Math.abs(e), Math.abs(l)) && Math.abs(o - v) <= E * Math.max(1, Math.abs(o), Math.abs(v)) && Math.abs(i - b) <= E * Math.max(1, Math.abs(i), Math.abs(b)) && Math.abs(h - t) <= E * Math.max(1, Math.abs(h), Math.abs(t)) && Math.abs(c - n) <= E * Math.max(1, Math.abs(c), Math.abs(n))
            }
        });

    function Ct() {
        var t = new d(2);
        return d != Float32Array && (t[0] = 0, t[1] = 0), t
    }

    function Gt(t, n, a) {
        return t[0] = n[0] - a[0], t[1] = n[1] - a[1], t
    }

    function Ht(t, n, a) {
        return t[0] = n[0] * a[0], t[1] = n[1] * a[1], t
    }

    function Jt(t, n, a) {
        return t[0] = n[0] / a[0], t[1] = n[1] / a[1], t
    }

    function Kt(t, n) {
        var a = n[0] - t[0],
            t = n[1] - t[1];
        return Math.hypot(a, t)
    }

    function $t(t, n) {
        var a = n[0] - t[0],
            t = n[1] - t[1];
        return a * a + t * t
    }

    function t1(t) {
        var n = t[0],
            t = t[1];
        return Math.hypot(n, t)
    }

    function n1(t) {
        var n = t[0],
            t = t[1];
        return n * n + t * t
    }
    var a1, dt = t1,
        pt = Gt,
        xt = Ht,
        yt = Jt,
        qt = Kt,
        bt = $t,
        Y = n1,
        U = (a1 = Ct(), function(t, n, a, r, u, e) {
            var o, i;
            for (n = n || 2, a = a || 0, i = r ? Math.min(r * n + a, t.length) : t.length, o = a; o < i; o += n) a1[0] = t[o], a1[1] = t[o + 1], u(a1, a1, e), t[o] = a1[0], t[o + 1] = a1[1];
            return t
        }),
        U = Object.freeze({
            __proto__: null,
            create: Ct,
            clone: function(t) {
                var n = new d(2);
                return n[0] = t[0], n[1] = t[1], n
            },
            fromValues: function(t, n) {
                var a = new d(2);
                return a[0] = t, a[1] = n, a
            },
            copy: function(t, n) {
                return t[0] = n[0], t[1] = n[1], t
            },
            set: function(t, n, a) {
                return t[0] = n, t[1] = a, t
            },
            add: function(t, n, a) {
                return t[0] = n[0] + a[0], t[1] = n[1] + a[1], t
            },
            subtract: Gt,
            multiply: Ht,
            divide: Jt,
            ceil: function(t, n) {
                return t[0] = Math.ceil(n[0]), t[1] = Math.ceil(n[1]), t
            },
            floor: function(t, n) {
                return t[0] = Math.floor(n[0]), t[1] = Math.floor(n[1]), t
            },
            min: function(t, n, a) {
                return t[0] = Math.min(n[0], a[0]), t[1] = Math.min(n[1], a[1]), t
            },
            max: function(t, n, a) {
                return t[0] = Math.max(n[0], a[0]), t[1] = Math.max(n[1], a[1]), t
            },
            round: function(t, n) {
                return t[0] = Math.round(n[0]), t[1] = Math.round(n[1]), t
            },
            scale: function(t, n, a) {
                return t[0] = n[0] * a, t[1] = n[1] * a, t
            },
            scaleAndAdd: function(t, n, a, r) {
                return t[0] = n[0] + a[0] * r, t[1] = n[1] + a[1] * r, t
            },
            distance: Kt,
            squaredDistance: $t,
            length: t1,
            squaredLength: n1,
            negate: function(t, n) {
                return t[0] = -n[0], t[1] = -n[1], t
            },
            inverse: function(t, n) {
                return t[0] = 1 / n[0], t[1] = 1 / n[1], t
            },
            normalize: function(t, n) {
                var a = n[0],
                    r = n[1],
                    r = a * a + r * r;
                return 0 < r && (r = 1 / Math.sqrt(r)), t[0] = n[0] * r, t[1] = n[1] * r, t
            },
            dot: function(t, n) {
                return t[0] * n[0] + t[1] * n[1]
            },
            cross: function(t, n, a) {
                a = n[0] * a[1] - n[1] * a[0];
                return t[0] = t[1] = 0, t[2] = a, t
            },
            lerp: function(t, n, a, r) {
                var u = n[0],
                    n = n[1];
                return t[0] = u + r * (a[0] - u), t[1] = n + r * (a[1] - n), t
            },
            random: function(t, n) {
                n = n || 1;
                var a = 2 * c() * Math.PI;
                return t[0] = Math.cos(a) * n, t[1] = Math.sin(a) * n, t
            },
            transformMat2: function(t, n, a) {
                var r = n[0],
                    n = n[1];
                return t[0] = a[0] * r + a[2] * n, t[1] = a[1] * r + a[3] * n, t
            },
            transformMat2d: function(t, n, a) {
                var r = n[0],
                    n = n[1];
                return t[0] = a[0] * r + a[2] * n + a[4], t[1] = a[1] * r + a[3] * n + a[5], t
            },
            transformMat3: function(t, n, a) {
                var r = n[0],
                    n = n[1];
                return t[0] = a[0] * r + a[3] * n + a[6], t[1] = a[1] * r + a[4] * n + a[7], t
            },
            transformMat4: function(t, n, a) {
                var r = n[0],
                    n = n[1];
                return t[0] = a[0] * r + a[4] * n + a[12], t[1] = a[1] * r + a[5] * n + a[13], t
            },
            rotate: function(t, n, a, r) {
                var u = n[0] - a[0],
                    e = n[1] - a[1],
                    n = Math.sin(r),
                    r = Math.cos(r);
                return t[0] = u * r - e * n + a[0], t[1] = u * n + e * r + a[1], t
            },
            angle: function(t, n) {
                var a = t[0],
                    r = t[1],
                    u = n[0],
                    t = n[1],
                    n = Math.sqrt(a * a + r * r) * Math.sqrt(u * u + t * t);
                return Math.acos(Math.min(Math.max(n && (a * u + r * t) / n, -1), 1))
            },
            zero: function(t) {
                return t[0] = 0, t[1] = 0, t
            },
            str: function(t) {
                return "vec2(" + t[0] + ", " + t[1] + ")"
            },
            exactEquals: function(t, n) {
                return t[0] === n[0] && t[1] === n[1]
            },
            equals: function(t, n) {
                var a = t[0],
                    r = t[1],
                    t = n[0],
                    n = n[1];
                return Math.abs(a - t) <= E * Math.max(1, Math.abs(a), Math.abs(t)) && Math.abs(r - n) <= E * Math.max(1, Math.abs(r), Math.abs(n))
            },
            len: dt,
            sub: pt,
            mul: xt,
            div: yt,
            dist: qt,
            sqrDist: bt,
            sqrLen: Y,
            forEach: U
        });
    t.glMatrix = a, t.mat2 = e, t.mat2d = h, t.mat3 = l, t.mat4 = A, t.quat = vt, t.quat2 = mt, t.vec2 = U, t.vec3 = W, t.vec4 = gt, Object.defineProperty(t, "__esModule", {
        value: !0
    })
});
const mat4 = glMatrix.mat4;