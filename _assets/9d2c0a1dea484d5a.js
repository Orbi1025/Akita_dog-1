(self["webpackChunk_canva_web"] = self["webpackChunk_canva_web"] || []).push([
  [5936],
  {
    /***/ 623741: function (_, __, __webpack_require__) {
      __webpack_require__.n_x = __webpack_require__.n;
      const __web_req__ = __webpack_require__;
      __web_req__(905716);
      self._5f74ec40302898c5a55451c9fbd04240 =
        self._5f74ec40302898c5a55451c9fbd04240 || {};
      (function (__c) {
        var kB = __c.kB;
        var nc = __c.nc;
        var N = __c.N;
        var Qm = __c.Qm;
        var js = __c.js;
        var K = __c.K;
        var rm = __c.rm;
        var y = __c.y;
        var D = __c.D;
        var Zpc = function (a, b) {
            switch (b.reference.type) {
              case 0:
                const c = a.nV(b.reference.Li);
                a = a.ZY(b.reference.Wi);
                return c != null && a != null;
              case 1:
                return a.nV(b.reference.Li) != null;
              case 2:
                return a.ZY(b.reference.Wi) != null;
              case 3:
                return !1;
              default:
                throw new D(b.reference);
            }
          },
          $pc = function (a, b, c) {
            switch (c.type) {
              case "invalid":
                return !1;
              case "canonical":
                if (c.U.length > 0) return !1;
                a = a.yH(c.e1.slice(1).trim());
                return a.result !== "success"
                  ? !1
                  : __c.Ew(new __c.Hw(), a.FJ).filter((d) => {
                      switch (d.type) {
                        case 0:
                          return Zpc(b, d);
                        case 1:
                          return Zpc(b, d.start) && Zpc(b, d.end);
                        default:
                          throw new D(d);
                      }
                    }).length > 0;
              default:
                throw new D(c);
            }
          },
          aqc = function (a, b, c, d) {
            const e = [];
            for (const k of c)
              for (const l of d) {
                c = k.pa;
                var f = l.column,
                  g = a.layout.cells.get(c, f);
                if (
                  !g ||
                  (k.boundary === "start" ? g.span.ec === c : g.span.qd === c)
                )
                  if (
                    ((c = b.get(`${f.id}:${c.id}`)),
                    (c = k.boundary === "start" ? c?.ra : c?.Ga))
                  ) {
                    g = e[e.length - 1];
                    f = (f = a.layout.cols.next(f))
                      ? { column: f, boundary: "start" }
                      : { column: y(a.layout.cols.last()), boundary: "end" };
                    var h;
                    if ((h = g))
                      (h = g.kwa),
                        (h =
                          h.column === l.column && h.boundary === l.boundary);
                    h &&
                      ((h = g.I5a),
                      (h = h.pa === k.pa && h.boundary === k.boundary));
                    h &&
                    g.color === c.color &&
                    g.weight === c.weight &&
                    g.ad === c.ad &&
                    g.ad === 0
                      ? (g.kwa = f)
                      : e.push({
                          I5a: k,
                          UFb: l,
                          kwa: f,
                          color: c.color,
                          weight: c.weight,
                          ad: c.ad,
                        });
                  }
              }
            return e;
          },
          bqc = function (a, b, c, d, e) {
            const f = [];
            for (const l of d)
              for (const m of c) {
                var g = m.pa,
                  h = l.column;
                d = a.layout.cells.get(g, h);
                if (
                  !d ||
                  (l.boundary === "start" ? d.span.$b === h : d.span.Wc === h)
                )
                  if (
                    ((d = b.get(`${h.id}:${g.id}`)),
                    (d = l.boundary === "start" ? d?.ta : d?.Ma) &&
                      (l.boundary !== "start" || e(g, h) !== 1))
                  ) {
                    h = f[f.length - 1];
                    g = (g = a.layout.rows.next(g))
                      ? { pa: g, boundary: "start" }
                      : { pa: y(a.layout.rows.last()), boundary: "end" };
                    var k;
                    if ((k = h))
                      (k = h.JPa),
                        (k =
                          k.column === l.column && k.boundary === l.boundary);
                    k &&
                      ((k = h.qwa),
                      (k = k.pa === m.pa && k.boundary === m.boundary));
                    k &&
                    h.color === d.color &&
                    h.weight === d.weight &&
                    h.ad === d.ad &&
                    h.ad === 0
                      ? (h.qwa = g)
                      : f.push({
                          JPa: l,
                          jGb: m,
                          qwa: g,
                          color: d.color,
                          weight: d.weight,
                          ad: d.ad,
                        });
                  }
              }
            return f;
          },
          cqc = function (a, b, c, d, e) {
            const f = a.s8a.$jb(c, b.layout.rows.last(), b.layout.cols.last());
            a = (q, r) => {
              const t = f.get(q) || 0,
                v = f.get(r) || 0;
              return t <= v ? q : r;
            };
            const g = new Map();
            if (d.length === 0 || e.length === 0) return g;
            var h = [],
              k = b.layout.cols.previous(e[0].column);
            k && h.push({ column: k, boundary: "start" });
            h.push(...e);
            (e = b.layout.cols.next(e[e.length - 1].column)) &&
              h.push({ column: e, boundary: "start" });
            e = [];
            (k = b.layout.rows.previous(d[0].pa)) &&
              e.push({ pa: k, boundary: "start" });
            e.push(...d);
            (d = b.layout.rows.next(d[d.length - 1].pa)) &&
              e.push({ pa: d, boundary: "start" });
            for (const q of h) {
              h = (d = q.boundary === "start" ? q.column : void 0)
                ? b.layout.cols.previous(d)
                : b.layout.cols.last();
              for (const r of e) {
                var l = r.boundary === "start" ? r.pa : void 0;
                k = l ? b.layout.rows.previous(l) : b.layout.rows.last();
                var m = d && l && c.get(`${d.id}:${l.id}`),
                  n = d && k && c.get(`${d.id}:${k.id}`);
                l = h && l && c.get(`${h.id}:${l.id}`);
                var p = h && k && c.get(`${h.id}:${k.id}`);
                k = q.boundary === "end" ? l?.Ma : m?.ta;
                m = r.boundary === "end" ? n?.Ga : m?.ra;
                n = q.boundary === "end" ? p?.Ma : n?.ta;
                l = r.boundary === "end" ? p?.Ga : l?.ra;
                p = __c.Zla({ ra: n, Ga: k, ta: l, Ma: m }, a);
                let t;
                switch (p) {
                  case "blockStart":
                    t = n;
                    break;
                  case "blockEnd":
                    t = k;
                    break;
                  case "inlineStart":
                    t = l;
                    break;
                  case "inlineEnd":
                    t = m;
                    break;
                  default:
                    t = void 0;
                }
                const { height: v, width: w } =
                  t?.ad === 1
                    ? { height: t.weight, width: t.weight }
                    : {
                        height: Math.max(l?.weight || 0, m?.weight || 0),
                        width: Math.max(n?.weight || 0, k?.weight || 0),
                      };
                g.set(T5(q, r), __c.hn(p, v / 2, w / 2));
              }
            }
            return g;
          },
          dqc = function (a, b, c, d, e, f) {
            if (d.length === 0 || e.length === 0) return [];
            const g = aqc(b, c, d, e);
            f = bqc(b, c, d, e, f);
            const h = cqc(a, b, c, d, e),
              k = a.Fqb(b),
              l = a.Rpb(b),
              m = b.direction === "rtl";
            a = g
              .map((n) => {
                var p = n.UFb,
                  q = n.kwa,
                  r = n.I5a;
                const t = n.color,
                  v = n.weight;
                n = n.ad;
                const w = m ? -1 : 1,
                  z = h.get(T5(p, r))?.Ma,
                  A = h.get(T5(q, r))?.ta;
                if (z != null && A != null) {
                  var C = y(k.get(r.pa)),
                    B = y(l.get(p.column));
                  p = y(l.get(q.column));
                  r = r.boundary === "start" ? C.start : C.end;
                  C = B.start;
                  q = q.boundary === "start" ? p.start : p.end;
                  return {
                    color: t,
                    weight: v,
                    ad: n,
                    p1: new rm(C + z * w, r),
                    p2: new rm(q + A * w, r),
                    ...__c.nn((q - C) * w, n * v, z),
                  };
                }
              })
              .filter(__c.nb);
            return [
              ...f
                .map((n) => {
                  var p = n.JPa,
                    q = n.jGb,
                    r = n.qwa;
                  const t = n.color,
                    v = n.weight;
                  n = n.ad;
                  const w = h.get(T5(p, q))?.Ga,
                    z = h.get(T5(p, r))?.ra;
                  if (w != null && z != null) {
                    var A = y(l.get(p.column)),
                      C = y(k.get(q.pa));
                    q = y(k.get(r.pa));
                    p = p.boundary === "start" ? A.start : A.end;
                    A = C.start;
                    r = r.boundary === "start" ? q.start : q.end;
                    return {
                      color: t,
                      weight: v,
                      ad: n,
                      p1: new rm(p, A + w),
                      p2: new rm(p, r + z),
                      ...__c.nn(r - A, n * v, w),
                    };
                  }
                })
                .filter(__c.nb),
              ...a,
            ];
          },
          eqc = function (a) {
            const b = [];
            a = a.filter((c) => c.weight !== 0 && c.color != null);
            a = __c.gn(a, (c) => c.weight);
            a = Array.from(a.entries()).sort(([c], [d]) => c - d);
            for (const [c, d] of a) {
              a = __c.gn(d, (e) => `${e.al}_${e.bl}`);
              for (const [, e] of a) {
                const { bl: f, al: g } = e[0];
                a = __c.gn(e, (h) => h.color);
                for (const [h, k] of a)
                  b.push({ weight: c, color: h, lines: k, al: g, bl: f });
              }
            }
            return b;
          },
          fqc = function (a, b, c, d) {
            var e = __c.kTb;
            const f = b.get().flatMap((k) =>
                a.layout.rows.last() === k
                  ? [
                      { pa: k, boundary: "start" },
                      { pa: k, boundary: "end" },
                    ]
                  : [{ pa: k, boundary: "start" }]
              ),
              g = c.get().flatMap((k) =>
                a.layout.cols.last() === k
                  ? [
                      { column: k, boundary: "start" },
                      { column: k, boundary: "end" },
                    ]
                  : [{ column: k, boundary: "start" }]
              ),
              h = new Map();
            for (const k of b.get())
              for (const l of c.get())
                (b = l && k ? e.s8a.mDb(a, l, k) : void 0),
                  b && h.set(`${l.id}:${k.id}`, b);
            c = dqc(e, a, h, f, g, d);
            return eqc(c);
          },
          gqc = function (a) {
            switch (a) {
              case 2:
                return K("ibdecg");
              case 7:
                return K("446quA");
              case 5:
                return K("j1fbqg");
              case 1:
                return K("O5i4AQ");
              case 6:
                return K("C0VHsg");
              case 4:
                return K("9ND0kg");
              case -1:
                return K("RWqnLA");
              case 9:
                return K("nQR/7w");
              case -2:
                return K("P23rtA");
              case 3:
                return K("+IXmVg");
              default:
                throw new D(a);
            }
          },
          hqc = function () {
            const [a] = (0, __c.hb)(() => js());
            return a;
          },
          iqc = function (a, b, c) {
            const d = [a];
            for (; a != null && a !== b; ) (a = c.next(a)) && d.push(a);
            return d;
          },
          jqc = function (a) {
            const b =
                a.direction === "rtl"
                  ? -(0, __c.nTb)(a) / 2
                  : -(0, __c.lTb)(a) / 2,
              c = -(0, __c.mTb)(a) / 2,
              d = a.width + (0, __c.lTb)(a) / 2 + (0, __c.nTb)(a) / 2;
            a = a.height + (0, __c.mTb)(a) / 2 + (0, __c.oTb)(a) / 2;
            return Qm({
              top: 0,
              left: 0,
              width: d,
              height: a,
              rotation: 0,
            }).translate(b, c);
          },
          kqc = function (a) {
            return (b) => ({ type: "react", node: (0, __c.J)(a, { ...b }) });
          },
          lqc = function (a) {
            const { h: b, s: c, la: d } = __c.Fs(a),
              e = __c.Ds(new __c.xs(b, c * 0.59, d * 0.69)).$n(),
              f = __c.Ds(new __c.xs(b, c * 0.68, d * 0.84)).$n();
            return { vib: a, wib: e, xib: f };
          },
          mqc = function (a) {
            var b = a.UA;
            const c = a.content,
              d = a.context,
              e = a.gq;
            __c.x(c?.Kg?.type === "formula");
            const f = c.mj;
            a = { type: "dom", render: (g) => (g.innerText = "") };
            switch (f.type) {
              case 9:
                b = a;
                break;
              case 6:
                b = b.mqa?.({
                  content: __c.eeb.gC({ ...__c.Xyb, value: f.value }),
                  context: d,
                  gq: e,
                });
                break;
              case 1:
              case 3:
              case 4:
              case 2:
              case 7:
              case 8:
                b = b.pqa?.({ context: d, value: c.EB, valueType: c.mj.type });
                break;
              case 0:
                b = {
                  type: "react",
                  node: U5(__c.bT, {
                    label: gqc(f.error),
                    children: U5(__c.Pt, {
                      width: "full",
                      display: "flex",
                      justifyContent: "center",
                      children: U5(__c.E3b, { tone: "critical" }),
                    }),
                  }),
                };
                break;
              default:
                throw new D(f);
            }
            return b ?? a;
          },
          rqc = function (a) {
            const b = a.UA,
              c = a.Kf,
              d = a.SGb,
              e = a.Za;
            b.pqa = (f) => __c.aOa({ ...f, Za: e });
            b.iMa = (f) => mqc({ ...f, UA: b });
            b.hMa = (f) => nqc({ ...f });
            b.mqa = kqc(oqc({ Kf: c, UT: void 0 }));
            b.kMa = pqc(d, e);
            b.lMa = kqc((f) => U5(qqc, { ...f, Za: e }));
          },
          tqc = function ({
            label: a,
            Va: b,
            width: c,
            height: d,
            scale: e,
            UPa: f,
          }) {
            return U5("div", {
              style: { width: c, height: d, transform: `scale(${e})` },
              className: "bx74uQ",
              children: V5(__c.Mt, {
                className: W5("ivlMMQ", sqc(f)),
                size: "small",
                alignment: "center",
                children: [b && U5(b, { size: "small" }), a],
              }),
            });
          },
          sqc = function (a) {
            return {
              _2BX0vg: a === "primary-default",
              JfW_Cg: a === "primary-low",
              isMgNg: a === "primary-active",
              xwWDeQ: a === "secondary-default",
              w0EyUQ: a === "secondary-low",
              _8p5AIA: a === "secondary-active",
            };
          },
          vqc = function ({
            Qd: a,
            vWa: b,
            scale: c,
            Tp: d,
            onMouseDown: e,
            onTouchStart: f,
            Up: g,
            ucb: h,
            mRa: k,
          }) {
            const l = X5(() => {
                const q = d?.get();
                if (q != null && q.length !== 0) return new __c.Zw(q);
              }, [d]),
              m = g(1),
              n = g(c),
              p = { ssE9Tg: !a, OkifGQ: a };
            return U5(__c.Nt, {
              Wq: "light",
              light: "light",
              Js: "light",
              dark: "light",
              children: (q) =>
                U5("div", {
                  className: W5("ze9QCQ", p, q.className),
                  style: { width: n, height: n },
                  children: U5("div", {
                    style: { width: m, height: m, transform: `scale(${c})` },
                    className: W5("N7J3UA", p),
                    onMouseDown: e,
                    onTouchStart: f,
                    ref: l?.$m,
                    children: U5(__c.fT, {
                      className: W5("m8CFdg", p, {
                        G6wL4w: h,
                        W_E0wA: b,
                        _52RFdg: k === "move",
                      }),
                      ariaLabel: K("ruWN9A"),
                      children: U5(uqc, { size: "tiny" }),
                    }),
                  }),
                }),
            });
          },
          xqc = function () {
            const a = new wqc(),
              b = new __c.JS(),
              c = Y5((f) => {
                const {
                    scale: g = 1,
                    rWa: h,
                    size: k = "small",
                    ucb: l = !0,
                  } = f,
                  m = Z5((n) => a.Up({ scale: n, size: k, dBa: h }), [k, h]);
                return U5(vqc, {
                  ...f,
                  scale: h ? Math.max(g, h) : g,
                  Qd: f.sheet.direction === "rtl",
                  vWa: f.selection != null && a.eub(f.sheet, f.selection),
                  Up: m,
                  ucb: l,
                  mRa: f.mRa,
                  onMouseDown: f.onMouseDown,
                  onTouchStart: f.onTouchStart,
                });
              }),
              d = Y5((f) => {
                const {
                    scale: g = 1,
                    rWa: h,
                    size: k = "small",
                    sheet: l,
                    selection: m,
                    WDb: n,
                  } = f,
                  p = Z5((w) => a.Up({ scale: w, size: k, dBa: h }), [k, h]),
                  q = h ? Math.max(g, h) : g,
                  r = Z5((w) => m != null && a.tFa(m).has(w), [m]),
                  t = Z5((w) => m != null && a.Frb(l, m).has(w), [l, m]),
                  v = Z5(
                    (w) => {
                      const z =
                        n != null &&
                        l.layout.cols.Fe(w, n.$b) >= 0 &&
                        l.layout.cols.Fe(w, n.Wc) <= 0;
                      return r(w)
                        ? z
                          ? "secondary-active"
                          : "primary-active"
                        : t(w)
                        ? z
                          ? "secondary-low"
                          : "primary-low"
                        : z
                        ? "secondary-default"
                        : "primary-default";
                    },
                    [l, n, t, r]
                  );
                return U5($5, { ...f, Cd: g, ae: q, Up: p, mG: v, jH: b });
              }),
              e = Y5((f) => {
                const {
                    scale: g = 1,
                    rWa: h,
                    size: k = "small",
                    sheet: l,
                    selection: m,
                    WDb: n,
                  } = f,
                  p = Z5((w) => a.Up({ scale: w, size: k, dBa: h }), [k, h]),
                  q = h ? Math.max(g, h) : g,
                  r = Z5((w) => m != null && a.vFa(m).has(w), [m]),
                  t = Z5((w) => m != null && a.Grb(l, m).has(w), [l, m]),
                  v = Z5(
                    (w) => {
                      const z =
                        n != null &&
                        l.layout.rows.Fe(w, n.ec) >= 0 &&
                        l.layout.rows.Fe(w, n.qd) <= 0;
                      return r(w)
                        ? z
                          ? "secondary-active"
                          : "primary-active"
                        : t(w)
                        ? z
                          ? "secondary-low"
                          : "primary-low"
                        : z
                        ? "secondary-default"
                        : "primary-default";
                    },
                    [l, n, t, r]
                  );
                return U5(a6, { ...f, Cd: q, ae: g, Up: p, mG: v, jH: b });
              });
            return { Ycb: c, Xcb: d, Zcb: e };
          },
          zqc = function (a) {
            const b = a.Gq,
              c = () => null;
            return __c.ts((d) => U5(yqc, { ...d, Gq: b, ii: c }));
          },
          Aqc = function ({ sheet: a, da: b, range: c, vd: d }) {
            b6(
              () =>
                c6(() => {
                  if (d.current != null) {
                    var e = b?.get() ?? 1,
                      f = a.direction === "rtl",
                      g = c && a.layout.rows.has(c.ec);
                    f =
                      c && a.layout.cols.has(c.$b)
                        ? a.ta(c.$b) * e * (f ? 1 : -1)
                        : 0;
                    g = g ? -a.ra(c.ec) * e : 0;
                    d.current.style.transform = `translate(${f}px, ${g}px)`;
                    d.current.style.width = `${a.width * e}px`;
                    d.current.style.height = `${a.height * e}px`;
                  }
                }),
              [a, c, d, b]
            );
          },
          Dqc = function ({ onScroll: a }) {
            const b = new Bqc(a);
            return {
              VD: b,
              Vpa: Y5((c) =>
                U5(Cqc, { sheet: c.sheet, VD: b, children: c.children })
              ),
            };
          },
          Gqc = function (a) {
            const b = a.Gq,
              c = a.Le,
              d = a.u8a,
              e = ({ children: k }) => k,
              { VD: f, Vpa: g } = Dqc({ onScroll: a.onScroll });
            class h extends Eqc {
              get CN() {
                const k = this.props.ha.qz;
                switch (k) {
                  case "screen":
                    return g;
                  case "print":
                    return e;
                  default:
                    throw new D(k);
                }
              }
              componentDidMount() {
                d.d8a(this.props.item, {
                  Yb: this.props.Yb,
                  ha: this.props.ha,
                });
              }
              componentWillUnmount() {
                d.Eib(this.props.item, {
                  Yb: this.props.Yb,
                  ha: this.props.ha,
                });
              }
              render() {
                d.d8a(this.props.item, {
                  Yb: this.props.Yb,
                  ha: this.props.ha,
                });
                return U5(Fqc, {
                  ...this.props,
                  da: this.da,
                  Gq: b,
                  CN: this.CN,
                  ii: this.ii,
                  u8a: d,
                  VD: f,
                });
              }
              constructor(...k) {
                super(...k);
                this.da = d6(() => {
                  const l = this.props.item;
                  var m = this.props.ha,
                    n = m.qz;
                  m = m.zoom;
                  switch (n) {
                    case "screen":
                      return m;
                    case "print":
                      n = d.Jqb(l);
                      if (!n) return 1;
                      ({ width: n } = new __c.su(l, n.Yb, { zoom: m }));
                      return n / l.config.width;
                    default:
                      throw new D(n);
                  }
                });
                this.ii = Y5((l) =>
                  U5("div", {
                    className: "wKvivQ",
                    children: U5(__c.iOa, { ...this.props, ...l, Le: c }),
                  })
                );
              }
            }
            return { $eb: h, VD: f };
          },
          Hqc = function (a, b) {
            if (
              b != null &&
              b.$b != null &&
              b.ec != null &&
              b.Wc != null &&
              b.qd != null
            ) {
              var c = a.ta(b.$b),
                d = a.ra(b.ec),
                e = a.ta(b.Wc) + b.Wc.width - c;
              a = a.ra(b.qd) + b.qd.height - d;
              return Qm({ top: d, left: c, width: e, height: a });
            }
          },
          Jqc = function (a) {
            const b = a.Gq,
              c = () => null;
            return (d) => U5(Iqc, { ...d, Gq: b, ii: c });
          },
          Nqc = function (a) {
            const b = { transform: "translate(-1000px, -1000px) scale(0)" },
              c = { ePa: b, Hw: b, Oa: {}, SB: {} },
              d = e6(
                () => a.bB.style || c,
                (h) => {
                  Object.assign(a.jca.style, h.ePa);
                  Object.assign(a.qO.style, h.Hw);
                  Object.assign(a.lF.style, h.Oa);
                  Object.assign(a.rF.style, h.SB);
                  h = h?.Oa?.textDecoration;
                  a.lF.classList.toggle("OQx3PQ", h === "underline");
                  a.lF.classList.toggle("_99ezUA", h === "line-through");
                  a.lF.classList.toggle(
                    "kppAqQ",
                    h === "underline line-through"
                  );
                },
                { fireImmediately: !0, equals: Kqc }
              ),
              e = e6(
                () => a.Oza,
                (h) => {
                  a.lF.classList.toggle("_84KvRA", !h);
                  a.jca.classList.toggle("_84KvRA", !h);
                  a.qO.classList.toggle("TL_RLA", !h);
                },
                { fireImmediately: !0 }
              ),
              f = e6(
                () => a.renderer,
                (h) => {
                  a.Yca && h?.type !== "react"
                    ? ((a.Yca = void 0), a.L7.remove())
                    : (a.rF.innerHTML = "");
                  switch (h?.type) {
                    case "react":
                      a.Yca = Lqc(h.node, a.L7);
                      a.rF.appendChild(a.L7);
                      break;
                    case "dom":
                      h.render(a.rF);
                      break;
                    case void 0:
                      break;
                    default:
                      throw new D(h);
                  }
                  a.aCa();
                },
                { fireImmediately: !0 }
              ),
              g = Mqc
                ? e6(
                    () => a.nya,
                    (h) => {
                      a.lF.classList.toggle("qxD1GA", h);
                    },
                    { fireImmediately: !0 }
                  )
                : void 0;
            return () => {
              d();
              e();
              f();
              g?.();
            };
          },
          Kqc = function (a, b) {
            return JSON.stringify(a) === JSON.stringify(b);
          },
          Pqc = function (a) {
            const b = a.VA,
              c = a.Jk,
              d = a.CE,
              e = a.Nbb,
              f = a.Jz,
              g = new Oqc(c),
              h = (k, l) => (f ? $pc(f, k, l) : !1);
            return (k) =>
              U5(f6, {
                ...k,
                DQ: h,
                CE: d,
                Jk: c,
                VA: b,
                kza: g,
                Nbb: e?.get(),
              });
          },
          T5 = (a, b) =>
            `${a.column.id}-${a.boundary}:${b.pa.id}-${b.boundary}`,
          oqc =
            ({ Kf: a, UT: b }) =>
            (c) =>
              (0, __c.J)(__c.qTb, { ...c, Kf: a, UT: b }),
          Qqc = __webpack_require__(31968),
          Rqc = Qqc.Fragment,
          U5 = Qqc.jsx,
          V5 = Qqc.jsxs;
        var Sqc = __webpack_require__,
          Tqc = Sqc(208463),
          W5 = Sqc.n_x(Tqc)();
        var Y5 = __webpack_require__(647370).PA;
        var g6 = __webpack_require__(845212),
          h6 = g6.Component,
          Eqc = g6.PureComponent,
          Z5 = g6.useCallback,
          b6 = g6.useEffect,
          Uqc = g6.useLayoutEffect,
          X5 = g6.useMemo,
          i6 = g6.useRef;
        var j6 = __webpack_require__(186901),
          d6 = j6.EW,
          c6 = j6.fm,
          Vqc = j6.m3,
          e6 = j6.mJ,
          Wqc = j6.MN,
          Xqc = j6.O8,
          k6 = j6.sH,
          l6 = j6.XI;
        var Yqc = __webpack_require__(536618),
          Zqc = Yqc.Aj,
          m6 = Yqc.iB,
          $qc = Yqc.uP;
        var n6 = __webpack_require__(277049)._;
        var o6 = __webpack_require__(269018)._;
        var arc = __webpack_require__(13851).A;
        var Lqc = __webpack_require__(640598).createPortal;
        var brc = class {
            static D(a) {
              N(a, { viewBox: k6.ref });
            }
            constructor() {
              this.viewBox =
                (brc.D(this), Qm({ top: 0, left: 0, height: 0, width: 0 }));
              this.XEb = (a) => {
                this.viewBox.equals(a) || (this.viewBox = a);
              };
            }
          },
          crc = Y5((a) => {
            var b = a.sheet.direction === "rtl";
            b = { H2wykw: !b, UweldA: b };
            const c = i6(new brc()),
              d = l6(() => {
                if (a.Moa) {
                  var f = a.Moa.current;
                  f &&
                    c.current.XEb(
                      Qm({
                        top: f.scrollTop,
                        left: f.scrollLeft,
                        height: f.clientHeight,
                        width: f.clientWidth,
                      })
                    );
                }
              });
            b6(() => {
              d();
              a.Moa.current?.addEventListener("scroll", d);
              window?.addEventListener("resize", d);
              return () => {
                a.Moa.current?.removeEventListener("scroll", d);
                window?.removeEventListener("resize", d);
              };
            }, [a.Moa, d]);
            const e = X5(() => ({ get: () => c.current.viewBox }), []);
            return V5("div", {
              className: W5("nMvVqA", b),
              children: [
                V5("div", {
                  ref: a.vd,
                  className: "_0YOFPg",
                  children: [
                    U5(a.Gq, { ...a, viewport: e }),
                    U5("div", {
                      className: W5("Gdl7fQ", b),
                      children: a.CLa?.get()?.map((f, g) => U5(f, {}, g)),
                    }),
                  ],
                }),
                a.TVb === "visible" &&
                  V5(Rqc, {
                    children: [
                      U5("div", {
                        className: W5("_32sKQw", b),
                        children: U5(a.Xeb, { ...a }),
                      }),
                      U5("div", {
                        className: W5("xdIsTQ", b),
                        children: U5(a.afb, { ...a }),
                      }),
                      U5("div", {
                        className: W5("rsTRSA", b),
                        children: U5(a.Zeb, { ...a }),
                      }),
                    ],
                  }),
              ],
            });
          }),
          drc = Y5((a) => {
            a = a.content;
            __c.u(a.type === "text2" || a.type === "text3");
            switch (a.type) {
              case "text2":
                return a.value.X;
              case "text3":
                return __c.av.snapshot(a.value).cells.X();
              default:
                throw new D(a);
            }
          });
        var erc = 1 / 13.334,
          nqc = __c.jB((a, b) => {
            var c = a.context;
            const d = a.value,
              e = a.onChange;
            __c.x(a.valueType === 3);
            const { fontSize: f, color: g } = __c.mf(__c.Lf, c.attrs);
            c = __c.mt.sha;
            a = document.createElement("label");
            a.className = W5("s5Xvtg", { _0YWo_Q: c, agLBbw: e == null });
            c = document.createElement("div");
            c.className = "nOL94A";
            c.style.setProperty("--V8rdkw", `${Math.round(18 * f * erc)}px`);
            const { vib: h, wib: k, xib: l } = lqc(g);
            c.style.setProperty("--6kHV0A", h);
            c.style.setProperty("--dhlyXQ", k);
            c.style.setProperty("--pMrTCg", l);
            const m = document.createElement("input");
            m.className = "p8DDOg";
            m.type = "checkbox";
            m.checked = d;
            m.addEventListener(
              "change",
              l6((r) => {
                r.target && e?.(d, r.target.checked);
              })
            );
            const n = document.createElement("span");
            n.className = W5("l_S_Ng", { iGjddQ: d });
            n.ariaHidden = "true";
            const p = document.createElementNS(
              "http://www.w3.org/2000/svg",
              "svg"
            );
            p.setAttribute("class", "_8CNofA");
            p.setAttribute("viewBox", "0 0 10 8");
            p.setAttribute("fill", "none");
            p.setAttribute("xmlns", "http://www.w3.org/2000/svg");
            const q = document.createElementNS(
              "http://www.w3.org/2000/svg",
              "path"
            );
            q.setAttribute("d", "M0.750977 4.5L3.25098 7L9.25098 1");
            q.setAttribute("stroke", "white");
            q.setAttribute("stroke-width", "2");
            q.setAttribute("stroke-linecap", "round");
            q.setAttribute("stroke-linejoin", "round");
            p.appendChild(q);
            n.appendChild(p);
            c.appendChild(m);
            c.appendChild(n);
            a.appendChild(c);
            b.appendChild(a);
          });
        var pqc = (a, b) =>
            __c.jB((c, d) => {
              const e = c.content;
              c = c.context;
              if (e.value.isEmpty) for (; d.lastChild; ) d.lastChild.remove();
              else
                ({ Mg: c } = __c.mf(__c.Lf, c.attrs)),
                  c === "wrap" &&
                    ((d = d.appendChild(document.createElement("div"))),
                    (d.className = "dt4Dlg")),
                  a.render({
                    container: d,
                    text: e.value,
                    na: void 0,
                    writingMode: 1,
                    Zc: "start",
                    Je: frc(e, c),
                    Za: b,
                  });
            }),
          frc = m6(
            (a, b) => {
              if (b === "wrap") return [];
              a = a.value.X.split("\n").map((c) => c.length + 1);
              a.pop();
              return a;
            },
            { equals: Vqc.structural }
          );
        var grc, hrc, irc, qqc;
        new ((grc = class extends n6 {
          constructor() {
            super(qqc);
            hrc();
          }
        }),
        (() => {
          class a extends (irc = h6) {
            static D(b) {
              N(b, { Mg: d6 });
            }
            get Mg() {
              return __c.mf(__c.Lf, this.props.context.attrs).Mg;
            }
            render() {
              var b = this.props.content;
              const c = this.props.context;
              if (b.value.isEmpty) return null;
              b = U5(this.props.ii, {
                content: b,
                pa: c.container.pa,
                col: c.container.column,
                Mg: this.Mg,
              });
              return this.Mg === "wrap"
                ? U5("div", { className: "dt4Dlg", children: b })
                : b;
            }
            constructor(...b) {
              super(...b);
              a.D(this);
            }
          }
          ({
            c: [qqc, hrc],
          } = o6(a, [], [nc], irc));
        })(),
        grc)();
        var wqc = class {
          Up({ size: a, scale: b, dBa: c }) {
            b = c ? Math.max(c, b) : b;
            return a === "large" ? __c.HW * b : __c.x2b * b;
          }
          constructor() {
            this.eub = m6((a, b) => {
              b = b.get();
              return (
                b != null &&
                a.layout.rows.count() === (b.rows?.size || 0) &&
                a.layout.cols.count() === (b.columns?.size || 0)
              );
            });
            this.tFa = Zqc((a) => new Set(a.get()?.columns || []), {
              equals: __c.em,
            });
            this.vFa = Zqc((a) => new Set(a.get()?.rows || []), {
              equals: __c.em,
            });
            this.Frb = m6(
              (a, b) => {
                var { cells: c } = b.get() || {};
                if (!c) return new Set();
                if (this.vFa(b).size > 0) return new Set(a.layout.cols);
                b = this.tFa(b);
                const d = new Set();
                for (const e of c) {
                  c = a.layout.cells.get(e.pa, e.column);
                  for (const f of iqc(
                    c ? c.span.$b : e.column,
                    c ? c.span.Wc : e.column,
                    a.layout.cols
                  ))
                    (b.size === 0 || b.has(f)) && d.add(f);
                }
                return d;
              },
              { equals: __c.em }
            );
            this.Grb = m6(
              (a, b) => {
                var { cells: c } = b.get() || {};
                if (!c) return new Set();
                if (this.tFa(b).size > 0) return new Set(a.layout.rows);
                b = this.vFa(b);
                const d = new Set();
                for (const e of c) {
                  c = a.layout.cells.get(e.pa, e.column);
                  for (const f of iqc(
                    c ? c.span.ec : e.pa,
                    c ? c.span.qd : e.pa,
                    a.layout.rows
                  ))
                    (b.size === 0 || b.has(f)) && d.add(f);
                }
                return d;
              },
              { equals: __c.em }
            );
          }
        };
        var jrc,
          krc,
          lrc,
          mrc,
          nrc,
          orc,
          prc = parseInt("4px", 10) || 4,
          qrc = parseInt("0.5px", 10) || 0.5,
          rrc = parseInt("1px", 10) || 1,
          src = parseInt("0.5px", 10) || 0.5,
          trc = parseInt("0.5px", 10) || 0.5,
          urc = parseInt("1px", 10) || 1,
          vrc = parseInt("0.5px", 10) || 0.5,
          $5;
        new ((jrc = class extends n6 {
          constructor() {
            super($5);
            lrc();
          }
        }),
        (() => {
          class a extends (mrc = h6) {
            static D(b) {
              N(b, { Qd: d6, vr: d6, w9: d6 });
            }
            get Qd() {
              return this.props.sheet.direction === "rtl";
            }
            get vr() {
              const b = this.props.Tp?.get();
              if (b != null && b.length !== 0) return new __c.Zw(b);
            }
            get w9() {
              return this.props.Bxa?.()?.get();
            }
            render() {
              return U5(__c.Nt, {
                Wq: "light",
                light: "light",
                Js: "light",
                dark: "light",
                children: this.cjb,
              });
            }
            constructor(...b) {
              super(...b);
              this.onMouseMove =
                ($5.D(this),
                l6((c) => {
                  const { onMouseMove: d, sheet: e, Cd: f = 1 } = this.props;
                  d?.(c, e, "column", f);
                }));
              this.onMouseLeave = l6((c) => {
                this.props.onMouseLeave?.(c);
              });
              this.onMouseDown = l6((c) => {
                this.props.onMouseDown?.(c);
              });
              this.onTouchStart = l6((c) => {
                this.props.onTouchStart?.(c);
              });
              this.W4a = (c, d, e) => {
                const {
                    sheet: f,
                    Up: g,
                    mG: h,
                    cWb: k,
                    Cd: l = 1,
                    ae: m = 1,
                  } = this.props,
                  n = { jNbTIg: !this.Qd, gtA7Dw: this.Qd },
                  p = e?.sticky
                    ? this.Qd
                      ? { right: 0 }
                      : { left: 0 }
                    : void 0;
                let q = -1;
                return V5("div", {
                  style: e?.sticky ? this.w9 ?? p : void 0,
                  className: W5("Vt2_4w", n, { Tn3nUw: e?.sticky }),
                  onMouseMove: this.onMouseMove,
                  onMouseLeave: this.onMouseLeave,
                  children: [
                    f.layout.cols.map((r) => {
                      q++;
                      if (
                        !(
                          (c && f.layout.cols.Fe(r, c) < 0) ||
                          (d && f.layout.cols.Fe(r, d) > 0)
                        )
                      )
                        return U5(
                          wrc,
                          {
                            col: r,
                            label: __c.Pr(q),
                            Va: k?.get()?.get(r),
                            Up: g,
                            mG: h,
                            Cd: l,
                            ae: m,
                          },
                          r.id
                        );
                    }),
                    e?.sticky &&
                      U5("div", {
                        style: { width: prc * l },
                        className: W5("HBvlug", "ru3tFQ", n),
                      }),
                  ],
                });
              };
              this.cjb = (c) => {
                const d = this.props.sheet,
                  e = d.view.freeze.qF
                    ? d.layout.Od.get(d.view.freeze.qF)
                    : void 0;
                return V5("div", {
                  ref: this.vr?.$m,
                  onMouseDown: this.onMouseDown,
                  onTouchStart: this.onTouchStart,
                  className: W5(
                    "xhBZaw",
                    { jNbTIg: !this.Qd, gtA7Dw: this.Qd },
                    c.className
                  ),
                  children: [
                    e && this.W4a(void 0, e, { sticky: !0 }),
                    this.W4a(e ? d.cols.next(e) : void 0),
                  ],
                });
              };
            }
          }
          ({
            c: [$5, lrc],
          } = o6(a, [], [nc], mrc));
        })(),
        jrc)();
        var a6;
        new ((krc = class extends n6 {
          constructor() {
            super(a6);
            nrc();
          }
        }),
        (() => {
          class a extends (orc = h6) {
            static D(b) {
              N(b, { Qd: d6, vr: d6, w9: d6 });
            }
            get Qd() {
              return this.props.sheet.direction === "rtl";
            }
            get vr() {
              const b = this.props.Tp?.get();
              if (b != null && b.length !== 0) return new __c.Zw(b);
            }
            get w9() {
              return this.props.Bxa?.()?.get();
            }
            render() {
              return U5(__c.Nt, {
                Wq: "light",
                light: "light",
                Js: "light",
                dark: "light",
                children: this.EDb,
              });
            }
            constructor(...b) {
              super(...b);
              this.onMouseMove =
                (a6.D(this),
                l6((c) => {
                  const { onMouseMove: d, sheet: e, ae: f = 1 } = this.props;
                  d?.(c, e, "row", f);
                }));
              this.onMouseLeave = l6((c) => {
                this.props.onMouseLeave?.(c);
              });
              this.onMouseDown = l6((c) => {
                this.props.onMouseDown?.(c);
              });
              this.onTouchStart = l6((c) => {
                this.props.onTouchStart?.(c);
              });
              this.b5a = (c, d, e) => {
                const {
                    sheet: f,
                    Up: g,
                    mG: h,
                    Cd: k = 1,
                    ae: l = 1,
                  } = this.props,
                  m = { jNbTIg: !this.Qd, gtA7Dw: this.Qd };
                var n = e?.sticky ? { top: 0 } : void 0;
                n = e?.sticky ? this.w9 ?? n : void 0;
                let p = -1,
                  q = 0;
                const r = f.rows.map((t) => {
                  p++;
                  if (
                    !((c && f.rows.Fe(t, c) < 0) || (d && f.rows.Fe(t, d) > 0))
                  )
                    return (
                      (q += t.height),
                      U5(
                        xrc,
                        {
                          pa: t,
                          label: `${p + 1}`,
                          mG: h,
                          Up: g,
                          Cd: k,
                          ae: l,
                          start: f.ra(t),
                        },
                        t.id
                      )
                    );
                });
                return V5("div", {
                  style: { height: q * l, width: g(k), ...n },
                  className: W5("_93roJg", m, { Tn3nUw: e?.sticky }),
                  onMouseMove: this.onMouseMove,
                  onMouseLeave: this.onMouseLeave,
                  children: [
                    r,
                    e?.sticky &&
                      U5("div", {
                        style: { height: prc * l },
                        className: W5("HBvlug", "koz2Hg"),
                      }),
                  ],
                });
              };
              this.EDb = (c) => {
                const d = this.props.sheet,
                  e = d.view.freeze.kS
                    ? d.layout.Zd.get(d.view.freeze.kS)
                    : void 0;
                return V5("div", {
                  ref: this.vr?.$m,
                  onMouseDown: this.onMouseDown,
                  onTouchStart: this.onTouchStart,
                  className: W5(
                    "An9VeA",
                    { jNbTIg: !this.Qd, gtA7Dw: this.Qd },
                    c.className
                  ),
                  children: [
                    e && this.b5a(void 0, e, { sticky: !0 }),
                    this.b5a(e ? d.rows.next(e) : void 0),
                  ],
                });
              };
            }
          }
          ({
            c: [a6, nrc],
          } = o6(a, [], [nc], orc));
        })(),
        krc)();
        var wrc = Y5((a) => {
            const b = a.label,
              c = a.Va,
              d = a.col,
              e = a.mG,
              f = a.Up,
              g = a.Cd;
            a = a.ae;
            const h = f(a),
              k = $qc(() => e(d));
            return U5("div", {
              className: W5("_83Rssw", "d2uLIA", sqc(k)),
              style: {
                width: d.width * g,
                height: h,
                borderInlineWidth: `${qrc * g}px`,
                borderBlockStartWidth: `${rrc * g}px`,
                borderBlockEndWidth: `${src * g}px`,
              },
              children: U5(tqc, {
                label: b,
                Va: c,
                width: d.width,
                height: f(1),
                scale: a,
                UPa: k,
              }),
            });
          }),
          xrc = Y5((a) => {
            const b = a.label,
              c = a.pa,
              d = a.Up,
              e = a.mG,
              f = a.Cd,
              g = a.ae,
              h = d(f),
              k = $qc(() => e(c));
            return U5("div", {
              className: W5("_83Rssw", "JhBzyw", sqc(k)),
              style: {
                width: h,
                height: c.height * g,
                borderBlockWidth: `${trc * g}px`,
                borderInlineStartWidth: `${urc * g}px`,
                borderInlineEndWidth: `${vrc * g}px`,
                transform: `translateY(${a.start * g}px)`,
              },
              children: U5(tqc, {
                label: b,
                width: d(1),
                height: c.height,
                scale: f,
                UPa: k,
              }),
            });
          });
        var yrc =
          '<svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg"><circle stroke="currentColor" cx="6" cy="6" r="5.5"/></svg>';
        var zrc =
          '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><circle stroke="currentColor" cx="12" cy="12" r="9.25" stroke-width="1.5"/></svg>';
        var uqc = __c.WS({ mp: yrc, medium: zrc });
        var Arc, Brc, Crc, yqc;
        new ((Arc = class extends n6 {
          constructor() {
            super(yqc);
            Brc();
          }
        }),
        (() => {
          class a extends (Crc = h6) {
            static D(b) {
              N(b, { De: d6.struct });
            }
            render() {
              const b = this.props.element;
              return U5(this.props.Gq, {
                sheet: b.G.config,
                container: b,
                Qba: "visible",
                Tp: this.props.Tp,
                Xt: this.props.Xt,
                av: this.props.av,
                bv: this.props.bv,
                da: this.props.da,
                De: this.De,
                ii: this.props.ii,
                QI: void 0,
              });
            }
            get De() {
              return __c.Xr(this.props.element.G.Qa, this.props.kf);
            }
            constructor(...b) {
              super(...b);
              a.D(this);
            }
          }
          ({
            c: [yqc, Brc],
          } = o6(a, [], [nc], Crc));
        })(),
        Arc)();
        var Drc = class {
          constructor() {
            this.rma = new WeakMap();
            this.Jqb = (a) => this.rma.get(a);
            this.d8a = (a, b) => {
              this.rma.set(a, b);
            };
            this.Eib = (a, b) => {
              const c = this.rma.get(a);
              c && c.ha === b.ha && c.Yb === b.Yb && this.rma.delete(a);
            };
          }
        };
        var Erc = parseInt("4px", 10) || 4,
          Frc = Y5(({ sheet: a, da: b, range: c, Ww: d, Xw: e }) => {
            if (c != null && (d || e)) {
              b = b?.get() ?? 1;
              var f = a.direction === "rtl",
                g = { ZJ0G6w: !f, dOI_jA: f };
              if (d && e)
                return (
                  (d = a.ra(c.qd) + c.qd.height),
                  (a = a.ta(c.Wc) + c.Wc.width),
                  U5("div", {
                    style: { top: d * b, width: a * b, height: Erc * b },
                    className: W5("aX8dhQ", "VGcLng"),
                  })
                );
              if (d)
                return (
                  (c = a.ta(c.Wc) + c.Wc.width),
                  U5("div", {
                    style: {
                      width: Erc * b,
                      height: a.height * b,
                      ...(f ? { right: c * b } : { left: c * b }),
                    },
                    className: W5("aX8dhQ", "gl1RPg", g),
                  })
                );
              if (e)
                return (
                  (c = a.ra(c.qd) + c.qd.height),
                  U5("div", {
                    style: { top: c * b, width: a.width * b, height: Erc * b },
                    className: W5("aX8dhQ", "VGcLng"),
                  })
                );
            }
          });
        var p6 = ({ sheet: a, range: b, da: c, children: d }) => {
            const e = hqc();
            Aqc({ sheet: a, da: c, range: b, vd: e });
            return U5("div", {
              ref: e,
              className: W5(
                "nstn2A",
                a.direction === "rtl" ? "NgnL2Q" : "f8jAGQ"
              ),
              children: d,
            });
          },
          Grc = ({ sheet: a, range: b, da: c, children: d }) => {
            const e = hqc();
            Aqc({ sheet: a, da: c, range: b, vd: e });
            a = a.direction === "rtl" ? "NgnL2Q" : "f8jAGQ";
            return U5("div", {
              className: W5("nstn2A", a, "_9sodyg"),
              children: U5("div", {
                ref: e,
                className: W5("nstn2A", a),
                children: d,
              }),
            });
          };
        var Cqc = Y5(({ sheet: a, children: b, VD: c }) => {
            const d = Z5(
                (f) => {
                  c.rGa(a, f);
                },
                [c, a]
              ),
              e = Z5(
                (f) => {
                  f != null ? c.WD.set(a, f) : c.WD.delete(a);
                },
                [c, a]
              );
            return U5(__c.$Xb, {
              direction: a.config.direction === "rtl" ? "rtl" : "ltr",
              onScroll: d,
              Nv: e,
              children: b,
            });
          }),
          Bqc = class {
            rGa(a, b) {
              this.onScroll && this.onScroll(a);
              this.A8.set(a, b);
            }
            constructor(a) {
              this.onScroll = a;
              this.WD = new WeakMap();
              this.A8 = k6.map(new Map(), { deep: !1 });
              this.scrollTo = l6((b, c) => {
                this.WD.get(b)?.scrollTo({ left: Math.floor(c) });
              });
            }
          };
        var Fqc = Y5((a) => {
          const b = a.item,
            c = a.Tp,
            d = a.Xt,
            e = a.ng,
            f = a.measureRef,
            g = a.da,
            h = a.BXa,
            k = a.Yb,
            l = a.av,
            m = a.bv,
            n = a.Gq,
            p = a.CN,
            q = a.ii,
            r = a.kf,
            t = a.VD;
          a = X5(() => __c.Xr(b.Qa, r), [b, r]);
          const v = X5(
              () =>
                Y5(({ sheet: C, range: B, Ww: E, Xw: I }) =>
                  U5(p6, {
                    sheet: C,
                    range: B,
                    da: g,
                    children: U5(Frc, {
                      sheet: C,
                      da: g,
                      range: B,
                      Ww: E,
                      Xw: I,
                    }),
                  })
                ),
              [g]
            ),
            w = jqc(b.config),
            z = g.get(),
            A = Math.min(w.width * z, k.width);
          b6(
            () =>
              c6(() => {
                var C = b.config.view.freeze.qF
                  ? b.config.layout.Od.get(b.config.view.freeze.qF)
                  : void 0;
                if (C != null)
                  if (b.config.ta(C) + C.width > A) {
                    if ((C = t.WD.get(b))) C.style.overflowX = "hidden";
                  } else if ((C = t.WD.get(b))) C.style.overflowX = "scroll";
              }),
            [b, k.width, t, z, A]
          );
          return U5("div", {
            ref: f,
            className: "E8r86A",
            style: { width: A },
            children: U5(p, {
              sheet: b,
              children: U5("div", {
                ref: h,
                className: "cXTiJA",
                style: { width: w.width * z, height: w.height * z },
                children: U5("div", {
                  className: "W1ir5A",
                  children: U5(n, {
                    container: e.oj(b),
                    sheet: b.config,
                    Qba: "visible",
                    Tp: c,
                    Xt: d,
                    da: g,
                    av: l,
                    bv: m,
                    De: a,
                    ii: q,
                    QI: v,
                  }),
                }),
              }),
            }),
          });
        });
        var Hrc = Y5(({ page: a, range: b, ND: c }) => {
          const d = Hqc(a.sheet, b);
          return U5("div", {
            className: "Gi9pfA",
            children: a.elements.map((e, f) =>
              d == null ? c(e, f) : __c.Om(Qm(e)).Zp(d) && c(e, f)
            ),
          });
        });
        var Irc = new __c.JS(),
          Jrc = (a) => __c.HW * a,
          Krc = () => "primary-default",
          Iqc = Y5(
            ({
              container: a,
              Tp: b,
              Xt: c,
              av: d,
              bv: e,
              u4: f,
              da: g,
              viewport: h,
              uFb: k,
              Gq: l,
              ii: m,
              ND: n,
              sla: p,
              INb: q,
              rMb: r,
              qMb: t,
            }) => {
              const v = a.page,
                w = X5(
                  () =>
                    Y5(({ sheet: z, range: A, Ww: C, Xw: B }) =>
                      V5(Rqc, {
                        children: [
                          U5(p6, {
                            sheet: v.sheet,
                            range: A,
                            da: g,
                            children: U5(Frc, {
                              sheet: z,
                              da: g,
                              range: A,
                              Ww: C,
                              Xw: B,
                            }),
                          }),
                          V5(Grc, {
                            sheet: v.sheet,
                            range: A,
                            da: g,
                            children: [
                              q && U5(q, {}),
                              n && U5(Hrc, { page: v, ND: n, range: A }),
                              t && U5(t, {}),
                              p && p(),
                            ],
                          }),
                          r &&
                            A &&
                            U5(p6, {
                              sheet: v.sheet,
                              range: A,
                              da: g,
                              children: U5(r, { range: A }),
                            }),
                        ],
                      })
                    ),
                  [v, g, q, n, t, p, r]
                );
              return k
                ? U5(Lrc, {
                    container: a,
                    viewport: h,
                    da: g,
                    Tp: b,
                    Xt: c,
                    av: d,
                    bv: e,
                    Gq: l,
                    ii: m,
                    QI: w,
                  })
                : U5(l, {
                    sheet: v.sheet,
                    container: a,
                    Qba: "hidden",
                    Tp: b,
                    Xt: c,
                    av: d,
                    bv: e,
                    u4: f,
                    da: g,
                    viewport: h,
                    ii: m,
                    QI: w,
                  });
            }
          ),
          Lrc = Y5((a) => {
            const b = a.container,
              c = a.da,
              d = a.viewport,
              e = a.Tp,
              f = a.Xt,
              g = a.av,
              h = a.bv,
              k = a.Gq,
              l = a.ii;
            a = a.QI;
            const m = b.page,
              n = m.sheet.direction === "rtl",
              p = i6(null),
              q = i6(null),
              r = i6(null);
            b6(() => {
              const A = q6({
                sheet: m.sheet,
                Xma: !0,
                Yma: !0,
                da: c,
                viewport: d,
              });
              return e6(
                () => A?.get(),
                (C) => {
                  const B = p.current;
                  if (C && B) {
                    var E = m.sheet.direction === "rtl";
                    B.style.position = C.position ?? "sticky";
                    B.style.top = C.top ?? "0px";
                    E
                      ? (B.style.right = C.right ?? "0px")
                      : (B.style.left = C.left ?? "0px");
                    B.style.transform = C.transform ?? "";
                  }
                }
              );
            }, [m.sheet, c, d]);
            b6(() => {
              const A = q6({
                sheet: m.sheet,
                Xma: !1,
                Yma: !0,
                da: c,
                viewport: d,
              });
              return e6(
                () => A?.get(),
                (C) => {
                  const B = r.current;
                  C &&
                    B &&
                    ((B.style.position = C.position ?? "sticky"),
                    (B.style.top = C.top ?? "0px"),
                    (B.style.transform = C.transform ?? ""));
                }
              );
            }, [m.sheet, c, d]);
            b6(() => {
              const A = q6({
                sheet: m.sheet,
                Xma: !0,
                Yma: !1,
                da: c,
                viewport: d,
              });
              return e6(
                () => A?.get(),
                (C) => {
                  const B = q.current;
                  if (C && B) {
                    var E = m.sheet.direction === "rtl";
                    B.style.position = C.position ?? "sticky";
                    E
                      ? (B.style.right = C.right ?? "0px")
                      : (B.style.left = C.left ?? "0px");
                    B.style.transform = C.transform ?? "";
                  }
                }
              );
            }, [m.sheet, c, d]);
            const t = Z5(
                (A, C, B) =>
                  q6({ sheet: A, Xma: C, Yma: B, da: c, viewport: d }),
                [c, d]
              ),
              v = X5(
                () => (t ? () => t(m.sheet, !0, !1) : void 0),
                [t, m.sheet]
              ),
              w = X5(
                () => (t ? () => t(m.sheet, !1, !0) : void 0),
                [t, m.sheet]
              ),
              z = c?.get() ?? 1;
            return V5("div", {
              className: W5("OsKKIQ", "cbOp6Q"),
              children: [
                U5("div", {
                  className: "VDFv_A",
                  children: U5(k, {
                    sheet: m.sheet,
                    container: b,
                    Qba: "hidden",
                    Tp: e,
                    Xt: f,
                    av: g,
                    bv: h,
                    u4: t,
                    da: c,
                    viewport: d,
                    ii: l,
                    QI: a,
                  }),
                }),
                U5("div", {
                  ref: p,
                  className: "_688KWg",
                  children: U5(vqc, { Qd: n, vWa: !1, Up: Jrc, scale: z }),
                }),
                U5("div", {
                  ref: r,
                  className: "m0cT1w",
                  children: U5($5, {
                    sheet: m.sheet,
                    Cd: z,
                    ae: z,
                    Up: Jrc,
                    mG: Krc,
                    jH: Irc,
                    Bxa: v,
                  }),
                }),
                U5("div", {
                  ref: q,
                  className: "zm537g",
                  children: U5(a6, {
                    sheet: m.sheet,
                    Cd: z,
                    ae: z,
                    Up: Jrc,
                    mG: Krc,
                    jH: Irc,
                    Bxa: w,
                  }),
                }),
              ],
            });
          }),
          q6 = ({ sheet: a, Xma: b, Yma: c, da: d, viewport: e }) =>
            d6(() => {
              var f = e?.get().pb();
              const g = d?.get() ?? 1;
              if (!f) return {};
              const h = {};
              f = new rm(f.left, f.top);
              const k = a.direction === "rtl";
              h.position = "relative";
              c && (h.top = "0px");
              b && (k ? (h.right = "0px") : (h.left = "0px"));
              h.transform = `translate(${b ? f.x * g : 0}px, ${
                c ? f.y * g : 0
              }px)`;
              return h;
            });
        var Oqc = class {
          constructor(a) {
            this.Jk = a;
            this.oib = __c.TU;
            this.jqb = m6((b, c, d, e) => {
              d = d.get();
              const f = new WeakMap();
              for (let t = 0; t < d.length; t++) {
                var g = d[t],
                  h = this.aqb(b, c, g);
                if (h) {
                  switch (h) {
                    case "start":
                    case "justify":
                      var k = d[t + 1];
                      if (k == null || !kB(b, c, k)) continue;
                      break;
                    case "center":
                      k = d[t + 1];
                      if (k == null || !kB(b, c, k)) continue;
                      k = d[t - 1];
                      if (k == null || !kB(b, c, k)) continue;
                      break;
                    case "end":
                      k = d[t - 1];
                      if (k == null || !kB(b, c, k)) continue;
                      break;
                    default:
                      throw new D(h);
                  }
                  if ((k = e(c, g))) {
                    var l = k.width + (h === "center" ? 0 : this.oib);
                    if (!(g.width > l)) {
                      switch (h) {
                        case "start":
                        case "justify":
                          h = b.ta(g);
                          k = h + l;
                          break;
                        case "center":
                          k = b.ta(g) + g.width / 2;
                          h = k - l / 2;
                          k += l / 2;
                          break;
                        case "end":
                          k = b.ta(g) + g.width;
                          h = k - l;
                          break;
                        default:
                          throw new D(h);
                      }
                      for (l = d.indexOf(g); l >= 0; l--) {
                        var m = d[l],
                          n = l - 1 < 0 || kB(b, c, d[l - 1]),
                          p;
                        if ((p = m === g || kB(b, c, m))) {
                          p = h;
                          var q = k,
                            r = b.ta(m);
                          p = p < r && r < q;
                        }
                        if (p && n) f.set(m, 1);
                        else break;
                      }
                      for (g = d.indexOf(g) + 1; g < d.length; g++) {
                        l = d[g];
                        if ((m = kB(b, c, l)))
                          (m = h), (n = k), (p = b.ta(l)), (m = m < p && p < n);
                        if (m) f.set(l, 1);
                        else break;
                      }
                    }
                  }
                }
              }
              return f;
            });
            this.aqb = (b, c, d) => {
              const e = b.layout.cells.get(c, d);
              if (
                e &&
                (e.ref.content.ref || e.ref.Ba.ref) &&
                e.span.ec === e.span.qd &&
                e.span.$b === e.span.Wc
              ) {
                var f = this.Jk.Pm(b, c, d);
                b = this.Jk.uxa(
                  b,
                  c,
                  d,
                  __c.Of({ Mg: void 0, textAlign: void 0 })
                );
                var { Mg: g, textAlign: h } = __c.mf(__c.Lf, b);
                if (g === "overflow")
                  return __c.ONa(
                    h,
                    e.ref.content.ref?.type,
                    e.ref.Ba.ref?.type,
                    f ? () => f.mj.type : void 0
                  );
              }
            };
          }
        };
        var Mrc = Y5(function (a) {
          const b = a.sheet;
          var c = a.Ph;
          const d = a.MKb,
            e = a.da,
            f = a.kza,
            g = a.Ppb;
          a = a.overflow;
          const h = hqc();
          Uqc(
            () =>
              c6(() => {
                const p = y(h.current),
                  q = e?.get() ?? 1,
                  r = b.height;
                p.style.width = `${b.width * q}px`;
                p.style.height = `${r * q}px`;
              }),
            [h, e, b]
          );
          const k = Z5((p) => f.jqb(b, p, d, g), [f, b, d, g]);
          var l = Z5((p, q) => k(p)?.get(q) ?? 0, [k]);
          c = fqc(b, c, d, l);
          l = b.width;
          const m = b.height,
            n = b.direction === "rtl";
          return U5("svg", {
            ref: h,
            role: "presentation",
            className: W5("c6a1eQ", {
              H_CtIQ: !n,
              _8_56PQ: n,
              _3NnFzw: a === "visible",
              JMH1ng: a === "hidden",
            }),
            viewBox: `0 0 ${l} ${m}`,
            strokeLinecap: "butt",
            strokeLinejoin: "miter",
            children: c.map(({ lines: p, color: q, weight: r, al: t, bl: v }) =>
              U5(
                "path",
                {
                  stroke: q,
                  strokeDasharray: t,
                  strokeDashoffset: v,
                  strokeWidth: r,
                  d: p
                    .map(
                      ({ p1: w, p2: z }) => `M ${w.x} ${w.y} L ${z.x} ${z.y}`
                    )
                    .join(" "),
                },
                `${q}-${r}-${t}-${v}`
              )
            ),
          });
        });
        var Nrc;
        Nrc = Symbol.iterator;
        var Orc = class {
          get size() {
            return this.Gma;
          }
          get([a, b]) {
            return (a = this.SG.get(a)) ? a.get(b) : void 0;
          }
          has([a, b]) {
            a = this.SG.get(a);
            return a == null ? !1 : a.has(b);
          }
          set([a, b], c) {
            let d = this.SG.get(a);
            d == null && ((d = new Map()), this.SG.set(a, d));
            d.set(b, c);
            this.Gma++;
            return this;
          }
          clear() {
            this.SG.clear();
            this.Gma = 0;
          }
          delete([a, b]) {
            const c = this.SG.get(a);
            if (c == null || !c.delete(b)) return !1;
            this.Gma--;
            c.size === 0 && this.SG.delete(a);
            return !0;
          }
          forEach(a) {
            for (const [b, c] of this.SG) for (const [d, e] of c) a([b, d], e);
          }
          *[Nrc]() {
            for (const [a, b] of this.SG)
              for (const [c, d] of b) yield [[a, c], d];
          }
          constructor() {
            this.Gma = 0;
            this.SG = new Map();
          }
        };
        var Prc,
          Qrc,
          Rrc,
          Src,
          Trc,
          Urc,
          Vrc,
          Mqc = __c.uc("285688d5", !1),
          Wrc,
          Xrc = class extends h6 {
            render() {
              const { Ofa: a, ...b } = this.props,
                c = this.props.sheet;
              return V5("div", {
                ref: this.x8a,
                className: W5(
                  "ZTz_iA",
                  c.direction === "ltr" ? "TA4X7w" : "WvuqMw"
                ),
                children: [
                  a?.lOa &&
                    U5(r6, {
                      ...b,
                      sheet: c,
                      range: a.lOa.range,
                      Ww: !0,
                      Xw: !0,
                      className: "_0C8M3w",
                    }),
                  a?.Wbb &&
                    U5(r6, {
                      ...b,
                      sheet: c,
                      range: a.Wbb.range,
                      Ww: !1,
                      Xw: !0,
                      className: "_7n44yg",
                    }),
                  a?.yWa &&
                    U5(r6, {
                      ...b,
                      sheet: c,
                      range: a.yWa.range,
                      Ww: !0,
                      Xw: !1,
                      className: "fF5r6w",
                    }),
                  a?.Qab &&
                    U5(r6, {
                      ...b,
                      sheet: c,
                      range: a.Qab.range,
                      Ww: !1,
                      Xw: !1,
                      className: "llILYw",
                    }),
                ],
              });
            }
            componentDidMount() {
              const a = c6(() => {
                var b = this.props,
                  c = b.da;
                b = b.sheet;
                const d = this.x8a.current;
                d &&
                  ((c = c ? c.get() : 1),
                  (d.style.width = `${b.width * c}px`),
                  (d.style.height = `${b.height * c}px`));
              });
              __c.dc(this, [a]);
            }
            constructor(...a) {
              super(...a);
              this.x8a = js();
            }
          };
        ({
          c: [Wrc, Rrc],
        } = o6(Xrc, [], [nc], h6));
        Rrc();
        var r6;
        new ((Prc = class extends n6 {
          constructor() {
            super(r6);
            Src();
          }
        }),
        (() => {
          class a extends (Trc = h6) {
            static D(b) {
              N(b, { KGa: d6, bounds: d6 });
            }
            get KGa() {
              const b = this.props.viewport,
                c = this.props.Ww,
                d = this.props.Xw;
              return b == null || (!c && !d)
                ? b
                : d6(() => {
                    const e = b.get().pb();
                    return Qm({
                      top: d ? 0 : e.top,
                      left: c ? 0 : e.left,
                      width: e.width,
                      height: e.height,
                    });
                  });
            }
            render() {
              const b = this.props.DQ,
                c = this.props.sheet,
                d = this.props.container,
                e = this.props.range,
                f = this.props.QI,
                g = this.props.Ww,
                h = this.props.Xw;
              return V5("div", {
                ref: this.lDa,
                className: W5("i0YQww", this.props.className),
                children: [
                  U5("div", {
                    ref: this.b3a,
                    className: "vUKoKg",
                    children: U5("div", {
                      ref: this.c3a,
                      children: U5(s6, {
                        DQ: b,
                        sheet: c,
                        container: d,
                        bounds: e,
                        Tp: this.props.Tp,
                        Xt: this.props.Xt,
                        CE: this.props.CE,
                        ii: this.props.ii,
                        R1: this.props.R1,
                        da: this.props.da,
                        Ph: this.Ph,
                        Z$: this.Z$,
                        yV: this.yV,
                      }),
                    }),
                  }),
                  U5(this.Wpa, {}),
                  f && U5(f, { sheet: c, range: e, Ww: g, Xw: h }),
                ],
              });
            }
            componentDidMount() {
              const b = c6(() => {
                  var h = this.props,
                    k = h.da,
                    l = h.sheet,
                    m = this.lDa.current;
                  const n = this.b3a.current;
                  h = this.c3a.current;
                  var p = this.bounds,
                    q = p.$b,
                    r = p.Wc;
                  const t = p.ec;
                  p = p.qd;
                  k = k ? k.get() : 1;
                  r = r && q ? l.ta(r) + r.width - l.ta(q) : l.width;
                  p = p && t ? l.ra(p) + p.height - l.ra(t) : l.height;
                  m &&
                    ((m.style.width = `${r * k}px`),
                    (m.style.height = `${p * k}px`));
                  n &&
                    ((n.style.width = `${r * k}px`),
                    (n.style.height = `${p * k}px`));
                  m = l.direction === "rtl";
                  q = q ? l.ta(q) * k * (m ? 1 : -1) : 0;
                  l = t ? -l.ra(t) * k : 0;
                  h && (h.style.transform = `translate(${q}px, ${l}px)`);
                }),
                c = this.props.sheet;
              var d = this.props.u4;
              const e = this.props.Ww,
                f = this.props.Xw,
                g = e || f ? d?.(c, e, f) : void 0;
              d = c6(() => {
                const h = this.lDa.current;
                if (h != null) {
                  var k = e || f ? "sticky" : "relative",
                    l = f ? "0px" : "unset",
                    m = e ? "0px" : "unset",
                    n = e ? "0px" : "unset",
                    p = c.direction === "rtl";
                  if (g == null)
                    (h.style.position = k),
                      (h.style.top = l),
                      (h.style.left = p ? "unset" : m),
                      (h.style.right = p ? n : "unset");
                  else {
                    const q = g.get();
                    h.style.position = q.position ?? k;
                    h.style.top = q.top ?? l;
                    h.style.left = p ? "unset" : q.left ?? m;
                    h.style.right = p ? q.right ?? n : "unset";
                    h.style.transform = q.transform ?? "unset";
                  }
                }
              });
              __c.dc(this, [b, d]);
            }
            get bounds() {
              const b = this.props.sheet;
              var c = this.props.range;
              if (b.layout.cols.empty || b.layout.rows.empty)
                return { $b: void 0, Wc: void 0, ec: void 0, qd: void 0 };
              const d = c.$b,
                e = c.Wc,
                f = c.ec;
              c = c.qd;
              const g = b.layout.cols.first(),
                h = b.layout.rows.first(),
                k = b.layout.cols.last(),
                l = b.layout.rows.last();
              return {
                $b: d ? (b.layout.cols.has(d) ? d : void 0) : g,
                Wc: e ? (b.layout.cols.has(e) ? e : void 0) : k,
                ec: f ? (b.layout.rows.has(f) ? f : void 0) : h,
                qd: c ? (b.layout.rows.has(c) ? c : void 0) : l,
              };
            }
            constructor(...b) {
              super(...b);
              this.lDa = (r6.D(this), js());
              this.b3a = js();
              this.c3a = js();
              this.yV = new Yrc();
              this.NKb = d6(
                () =>
                  [...this.Ph.get().keys()].sort((c, d) =>
                    this.props.sheet.layout.rows.Fe(c, d)
                  ),
                { equals: __c.fm() }
              );
              this.LKb = d6(
                () =>
                  [...this.Z$.get().keys()].sort((c, d) =>
                    this.props.sheet.layout.cols.Fe(c, d)
                  ),
                { equals: __c.fm() }
              );
              this.Wpa = Y5(() =>
                U5(this.props.Web, {
                  Ph: this.NKb,
                  MKb: this.LKb,
                  Ppb: this.yV.bga,
                  range: this.props.range,
                })
              );
              this.Ph = d6(
                () => {
                  const c = this.props.sheet;
                  var d = this.props.da,
                    e = this.KGa?.get();
                  if (e && (e.height <= 0 || e.width <= 0)) return new Map();
                  const f = this.bounds;
                  d = d.get();
                  var g = 50 * d;
                  const h = e ? e.qa.y - g : f.ec ? c.ra(f.ec) : 0;
                  e = e ? e.br.y + g : f.qd ? c.ra(f.qd) + f.qd.height : 0;
                  g = new Map();
                  for (
                    let k = f.ec;
                    k != null && f.qd != null && c.layout.rows.Fe(k, f.qd) <= 0;
                    k = c.layout.rows.next(k)
                  ) {
                    const l = c.ra(k);
                    if (!(l + k.height < h)) {
                      if (l > e) break;
                      g.set(k, l * d);
                    }
                  }
                  return g;
                },
                { equals: Vqc.shallow }
              );
              this.Z$ = d6(
                () => {
                  const c = this.props.sheet;
                  var d = this.props.da,
                    e = this.KGa?.get();
                  if (e && (e.height <= 0 || e.width <= 0)) return new Map();
                  const f = this.bounds;
                  d = d.get();
                  var g = 50 * d;
                  const h = e ? e.qa.x - g : f.$b ? c.ta(f.$b) : 0;
                  e = e ? e.br.x + g : f.Wc ? c.ta(f.Wc) + f.Wc.width : 0;
                  g = new Map();
                  for (
                    let k = f.$b;
                    k != null && f.Wc != null && c.layout.cols.Fe(k, f.Wc) <= 0;
                    k = c.layout.cols.next(k)
                  ) {
                    const l = c.ta(k);
                    if (!(l + k.width < h)) {
                      if (l > e) break;
                      g.set(k, l * d);
                    }
                  }
                  return g;
                },
                { equals: Vqc.shallow }
              );
            }
          }
          ({
            c: [r6, Src],
          } = o6(a, [], [nc], Trc));
        })(),
        Prc)();
        var Yrc = class {
            constructor() {
              this.cells = new Orc();
              this.uEa = (a, b, c) => {
                let d = this.cells.get([a, b]);
                d == null &&
                  ((d = k6.box(void 0, { deep: !1 })),
                  this.cells.set([a, b], d));
                d.set(c);
                return () => {
                  const e = this.cells.get([a, b]);
                  e === d && (e.set(void 0), this.cells.delete([a, b]));
                };
              };
              this.bga = (a, b) => {
                let c = this.cells.get([a, b]);
                c == null &&
                  ((c = k6.box(void 0, { deep: !1 })),
                  this.cells.set([a, b], c));
                return c.get()?.uQa;
              };
            }
          },
          s6;
        new ((Qrc = class extends n6 {
          constructor() {
            super(s6);
            Urc();
          }
        }),
        (() => {
          class a extends (Vrc = h6) {
            static D(b) {
              N(b, { mN: k6.shallow, vr: d6, MNa: l6, mda: l6.bound });
            }
            get vr() {
              const b = this.props.Tp?.get();
              if (b != null && b.length !== 0) return new __c.Zw(b);
            }
            render() {
              return V5("div", {
                onMouseDown: this.props.Xt?.onMouseDown,
                onTouchStart: this.props.Xt?.onTouchStart,
                ref: arc(this.vd, this.vr?.$m),
                children: [
                  U5("div", { ref: this.Ysa, className: "_5YlOqQ" }),
                  U5("div", { ref: this.$sa, className: "_XCmKw" }),
                  this.mN.map((b) => b.CBb),
                ],
              });
            }
            componentDidMount() {
              const b = e6(
                  () => [
                    this.props.sheet,
                    this.props.Z$.get(),
                    this.props.Ph.get(),
                  ],
                  ([e, f, g], h) => {
                    [h] = h || [];
                    e !== h && this.Fib();
                    this.MNa(f, g);
                  },
                  { fireImmediately: !0 }
                ),
                c = c6(() => {
                  var e = this.props,
                    f = e.da;
                  e = e.sheet;
                  const g = this.vd.current;
                  g &&
                    ((f = f ? f.get() : 1),
                    (g.style.width = `${e.width * f}px`),
                    (g.style.height = `${e.height * f}px`));
                }),
                d = this.mN.map((e) => Nqc(e));
              __c.dc(this, [c, b, ...d]);
            }
            Fib() {
              const b = y(this.Ysa.current),
                c = y(this.$sa.current);
              b.innerHTML = "";
              c.innerHTML = "";
              this.$Ja.length = 0;
              this.mN.length = 0;
            }
            MNa(b, c) {
              const d = y(this.Ysa.current),
                e = y(this.$sa.current),
                f = [],
                g = new Map();
              for (const h of this.$Ja)
                c.has(h.pa) ? g.set(h.pa, h) : f.push(h);
              for (const [h, k] of c)
                (c = g.get(h) || f.pop()),
                  c ||
                    ((c = new Zrc(this.mda, h)),
                    d.appendChild(c.kca),
                    e.appendChild(c.mca),
                    this.$Ja.push(c)),
                  c.update(k, h, b);
              for (const h of f) h.hide();
            }
            mda(b, c) {
              const d = this.props.R1,
                e = this.props.sheet,
                f = this.props.container,
                g = this.props.yV;
              b = new $rc(
                this.props.DQ,
                this.props.CE,
                this.props.ii,
                d(b, c),
                e,
                b,
                c,
                f,
                g.uEa,
                this.hga,
                this.gga
              );
              __c.dc(this, Nqc(b));
              this.mN.push(b);
              return b;
            }
            constructor(...b) {
              super(...b);
              this.vd = (s6.D(this), js());
              this.Ysa = js();
              this.$sa = js();
              this.$Ja = [];
              this.mN = [];
              this.hga = m6((c) => {
                const d = this.props.Ph.get();
                return c === "first"
                  ? d.keys().next().value
                  : [...d.keys()].pop();
              });
              this.gga = m6((c) => {
                const d = this.props.Z$.get();
                return c === "first"
                  ? d.keys().next().value
                  : [...d.keys()].pop();
              });
            }
          }
          ({
            c: [s6, Urc],
          } = o6(a, [], [nc], Vrc));
        })(),
        Qrc)();
        var Zrc = class {
            static D(a) {
              N(a, { update: l6 });
            }
            update(a, b, c) {
              [this.kca, this.mca].forEach((d) => {
                d.style.transform = `translateY(${a}px)`;
                d.classList.add("FPpqvg");
              });
              this.pa = b;
              for (const [d] of c)
                (c = this.mN.get(d)),
                  c ||
                    ((c = this.mda(d, b)),
                    this.mN.set(d, c),
                    this.kca.appendChild(c.jca),
                    this.mca.appendChild(c.qO)),
                  c.update(b);
            }
            hide() {
              [this.kca, this.mca].forEach((a) => {
                a.style.transform = "translate(-1000px, -1000px) scale(0)";
              });
            }
            constructor(a, b) {
              this.mda = a;
              this.pa = b;
              this.kca = (Zrc.D(this), document.createElement("div"));
              this.mca = document.createElement("div");
              this.mN = new Map();
            }
          },
          $rc = class {
            static D(a) {
              N(a, {
                Yca: k6.ref,
                pa: k6.ref,
                nya: d6,
                update: l6,
                Fu: d6,
                attrs: d6.struct,
                Oza: d6,
                Hw: d6,
                renderer: d6,
                uQa: d6.struct,
              });
            }
            get nya() {
              if (!Mqc) return !1;
              const a = this.Fu;
              return a == null ||
                a.content.ref == null ||
                a.content.ref.type !== "formula"
                ? !1
                : this.DQ(this.sheet, a.content.ref.value);
            }
            update(a) {
              a !== this.pa &&
                ((this.pa = a),
                (this.bB.pa = a),
                this.yva && this.yva(),
                (this.yva = this.uEa(this.pa, this.col, this)));
            }
            get CBb() {
              return this.Yca;
            }
            get Fu() {
              const a = this.sheet.layout.cells.get(this.pa, this.col);
              return a ? a.ref : void 0;
            }
            get attrs() {
              const a = this.bB.attrs;
              return {
                Mg: a?.Mg,
                textAlign: a?.textAlign,
                direction: a?.direction,
                link: a?.link,
                fontSize: a?.fontSize,
                color: a?.color,
              };
            }
            get Oza() {
              var a = this.bB.span;
              if (!a) return !1;
              if (a.ec === a.qd && a.$b === a.Wc) return !0;
              var b = this.hga("first");
              const c = this.hga("last"),
                d = this.gga("first"),
                e = this.gga("last");
              if (!(b && c && d && e)) return !1;
              b =
                this.sheet.layout.rows.Fe(a.ec, b) >= 0 &&
                this.sheet.layout.rows.Fe(a.ec, c) <= 0
                  ? a.ec
                  : b;
              a =
                this.sheet.layout.cols.Fe(a.$b, d) >= 0 &&
                this.sheet.layout.cols.Fe(a.$b, e) <= 0
                  ? a.$b
                  : d;
              return b === this.pa && a === this.col;
            }
            get Hw() {
              const a = this.sheet,
                b = this.pa,
                c = this.col;
              if (!this.container)
                return { type: void 0, sheet: a, pa: b, column: c };
              switch (this.container.type) {
                case "fixed-page":
                  return this.container.JP(c, b);
                case "sheet-item":
                  return this.container.JP(c, b);
                case "sheet-element":
                  return this.container.JP(c, b);
                default:
                  throw new D(this.container);
              }
            }
            get renderer() {
              const a = this.Fu;
              if (a && this.Oza && (a.content.ref || a.Ba.ref))
                return this.CE({
                  context: { container: this.Hw, attrs: this.attrs },
                  gq: this.aCa,
                  ii: this.ii,
                });
            }
            get uQa() {
              this.vQa.reportObserved();
              var a = Xqc(() => this.renderer);
              if (
                a &&
                ((a = a.type === "react" ? this.L7 : this.rF),
                a.childNodes.length !== 0 &&
                  ((a = a.childNodes[0]), a instanceof HTMLElement))
              )
                return { width: a.clientWidth, height: a.clientHeight };
            }
            constructor(a, b, c, d, e, f, g, h, k, l, m) {
              this.DQ = a;
              this.CE = b;
              this.bB = d;
              this.sheet = e;
              this.col = f;
              this.container = h;
              this.uEa = k;
              this.hga = l;
              this.gga = m;
              this.jca = ($rc.D(this), document.createElement("div"));
              this.qO = document.createElement("div");
              this.lF = document.createElement("div");
              this.rF = document.createElement("div");
              this.L7 = document.createElement("div");
              this.vQa = Wqc("content size atom");
              this.aCa = l6(() => this.vQa.reportChanged());
              this.pa = g;
              this.jca.className = "_2JFriw";
              this.qO.className = "imy9ug";
              this.lF.className = W5("pDMp7w", {
                _0yZ6Qg: this.Fu?.content.ref?.type !== "text3",
                qhF5uA:
                  this.Fu?.content.ref?.type !== "text3" &&
                  this.Fu?.content.ref?.type !== "text2",
                qxD1GA: this.nya,
              });
              this.rF.className = "_30B9pw";
              this.lF.appendChild(this.rF);
              this.qO.appendChild(this.lF);
              this.L7.className = "G7zH2w";
              this.yva = k(this.pa, this.col, this);
              this.ii = (n) => U5(c, { ...n, gq: this.aCa });
            }
          };
        var asc, bsc, csc, f6;
        new ((asc = class extends n6 {
          constructor() {
            super(f6);
            bsc();
          }
        }),
        (() => {
          class a extends (csc = h6) {
            static D(b) {
              N(b, { Ofa: d6 });
            }
            render() {
              const {
                DQ: b,
                sheet: c,
                container: d,
                Tp: e,
                Xt: f,
                u4: g,
                CE: h,
                De: k,
                ii: l,
                viewport: m,
                QI: n,
                Nbb: p = !1,
              } = this.props;
              if (!c.layout.cols.empty && !c.layout.rows.empty)
                return U5("div", {
                  className: W5(
                    "SNkrHw",
                    c.direction === "ltr" ? "TA4X7w" : "WvuqMw",
                    { RaA0Nw: p }
                  ),
                  ...k,
                  children: U5(Wrc, {
                    DQ: b,
                    CE: h,
                    ii: l,
                    Web: this.Wpa,
                    R1: this.R1,
                    sheet: c,
                    container: d,
                    Tp: e,
                    Xt: f,
                    u4: g,
                    da: this.da,
                    viewport: m,
                    QI: n,
                    Ofa: this.Ofa,
                  }),
                });
            }
            get Ofa() {
              var b = this.props.sheet;
              const c = {},
                d = b.view.freeze.kS
                  ? b.layout.Zd.get(b.view.freeze.kS)
                  : void 0,
                e = b.view.freeze.qF
                  ? b.layout.Od.get(b.view.freeze.qF)
                  : void 0,
                f = b.layout.rows.first(),
                g = b.layout.rows.last(),
                h = b.layout.cols.first(),
                k = b.layout.cols.last();
              if (f != null && g != null && h != null && k != null) {
                var l = e ? b.layout.cols.next(e) : h;
                b = d ? b.layout.rows.next(d) : f;
                d && e && (c.lOa = { range: { $b: h, ec: f, Wc: e, qd: d } });
                d && l && (c.Wbb = { range: { $b: l, ec: f, Wc: k, qd: d } });
                e && b && (c.yWa = { range: { $b: h, ec: b, Wc: e, qd: g } });
                b && l && (c.Qab = { range: { $b: l, ec: b, Wc: k, qd: g } });
                return c;
              }
            }
            get da() {
              return this.props.da ? this.props.da : d6(() => 1);
            }
            constructor(...b) {
              super(...b);
              this.Wpa =
                (f6.D(this),
                Y5((c) => {
                  const {
                    sheet: d,
                    kza: e,
                    da: f,
                    Qba: g = "hidden",
                  } = this.props;
                  return U5(p6, {
                    sheet: d,
                    range: c.range,
                    da: f,
                    children: U5(Mrc, {
                      ...c,
                      sheet: d,
                      da: this.da,
                      kza: e,
                      overflow: g,
                    }),
                  });
                }));
              this.R1 = (c, d) =>
                new __c.gOa(
                  this.props.Jk,
                  this.props.VA,
                  this.props.sheet,
                  c,
                  d,
                  this.da,
                  this.av,
                  this.bv
                );
              this.av = (c, d) => this.props.av?.(this.props.sheet, c, d);
              this.bv = (c, d) => this.props.bv?.(this.props.sheet, c, d);
            }
          }
          ({
            c: [f6, bsc],
          } = o6(a, [], [nc], csc));
        })(),
        asc)();
        __c.nOa = {
          Nsb: function (a) {
            const b = a.et,
              c = a.Gd,
              d = a.Bd,
              e = a.Xm,
              f = a.Jk,
              g = a.VA,
              h = a.V_;
            rqc({ UA: a.UA, Kf: a.Kf, SGb: a.iS, Za: a.Za });
            const k = Pqc({ CE: h, Jk: f, VA: g, Jz: void 0 });
            b.tqa = Jqc({ Gq: k });
            c.Xpa = zqc({ Gq: k });
            ({ $eb: a } = Gqc({ Gq: k, Le: e(), u8a: new Drc() }));
            d.Bp.sqa = a;
            const { Ycb: l, Zcb: m, Xcb: n } = xqc();
            return {
              VLa: Y5((p) =>
                U5(crc, {
                  ...p,
                  container: void 0,
                  Gq: k,
                  Zeb: l,
                  afb: m,
                  Xeb: n,
                  ii: drc,
                })
              ),
            };
          },
        };
      }.call(self, self._5f74ec40302898c5a55451c9fbd04240));
    },
  },
]);
//# sourceMappingURL=sourcemaps/9d2c0a1dea484d5a.js.map
