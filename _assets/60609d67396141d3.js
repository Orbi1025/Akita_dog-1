(self["webpackChunk_canva_web"] = self["webpackChunk_canva_web"] || []).push([
  [94260],
  {
    /***/ 519987: function (_, __, __webpack_require__) {
      __webpack_require__.n_x = __webpack_require__.n;
      const __web_req__ = __webpack_require__;
      __web_req__(905716);
      __web_req__(131662);
      __web_req__(775822);
      __web_req__(891548);
      self._5f74ec40302898c5a55451c9fbd04240 =
        self._5f74ec40302898c5a55451c9fbd04240 || {};
      (function (__c) {
        var D = __c.D;
        var K = __c.K;
        var nb = __c.nb;
        var toc = function (a) {
            __c.V9b({ ...a, G: a.span });
          },
          w5 = function (a, b) {
            var c = a.M$a.get(b);
            if (c != null) return c;
            c = { value: a.Ym.ps(b) };
            a.M$a.set(b, c);
            a.E$a.set(c, b);
            return c;
          },
          x5 = function (a, b) {
            a = a.E$a.get(b);
            if (a == null) throw new uoc("ref does not exists");
            return a;
          },
          A5 = function (a) {
            const b = (c, d) => {
              if (c == null && a != null) return a;
              if (c?.type !== "string")
                throw d === "toWidgetData"
                  ? new y5("string", c)
                  : new z5("string", c);
              return c.value;
            };
            return {
              Nk: (c) => ({ type: "string", value: c }),
              qs: (c) => b(c, "toWidgetState"),
              ps: (c) => b(c, "toWidgetData"),
              fu: (c) => b(c, "toWidgetData"),
            };
          },
          C5 = function (a, b) {
            if (a.length === 0)
              throw new B5(
                "At least one value must be provided for literal types."
              );
            const c = new Set(a),
              d = (e, f) => {
                if (e == null) return b;
                if (e?.type !== "string" || !c.has(e.value))
                  throw f === "toWidgetData"
                    ? new y5("literal", e)
                    : new z5("literal", e);
                return e.value;
              };
            return {
              Nk: (e) => ({ type: "string", value: e }),
              qs: (e) => d(e, "toWidgetState"),
              ps: (e) => d(e, "toWidgetData"),
              fu: (e) => d(e, "toWidgetData"),
            };
          },
          woc = function () {
            const a = (b, c) => {
              if (b == null) return 1;
              if (
                b?.type !== "int32" ||
                !Number.isFinite(b.value) ||
                !Number.isInteger(b.value)
              )
                throw c === "toWidgetData"
                  ? new y5("integer", b)
                  : new z5("integer", b);
              return b.value;
            };
            return {
              Nk: (b) => {
                if (!Number.isFinite(b) || !Number.isInteger(b))
                  throw new voc("integer", b);
                return { type: "int32", value: b };
              },
              qs: (b) => a(b, "toWidgetState"),
              ps: (b) => a(b, "toWidgetData"),
              fu: (b) => a(b, "toWidgetData"),
            };
          },
          D5 = function (a) {
            const b = (c, d) => {
              if (c == null && a != null) return a;
              if (c?.type !== "double" || !Number.isFinite(c.value))
                throw d === "toWidgetData"
                  ? new y5("double", c)
                  : new z5("double", c);
              return c.value;
            };
            return {
              Nk: (c) => {
                if (!Number.isFinite(c)) throw new voc("double", c);
                return { type: "double", value: c };
              },
              qs: (c) => b(c, "toWidgetState"),
              ps: (c) => b(c, "toWidgetData"),
              fu: (c) => b(c, "toWidgetData"),
            };
          },
          xoc = function (a) {
            const b = (c, d) => {
              if (c == null && a != null) return a;
              if (c?.type !== "boolean")
                throw d === "toWidgetData"
                  ? new y5("boolean", c)
                  : new z5("boolean", c);
              return c.value;
            };
            return {
              Nk: (c) => ({ type: "boolean", value: c }),
              qs: (c) => b(c, "toWidgetState"),
              ps: (c) => b(c, "toWidgetData"),
              fu: (c) => b(c, "toWidgetData"),
            };
          },
          yoc = function () {
            const a = (b) => {
              if (b?.type !== "fill") throw new y5("fill", b);
              return b.value;
            };
            return {
              Nk: (b) => ({ type: "fill", value: b }),
              qs: (b) => {
                if (b?.type !== "fill") throw new z5("fill", b);
                return b.value;
              },
              ps: a,
              fu: a,
            };
          },
          F5 = function (a) {
            const b = new Set();
            for (const d of Object.keys(a)) {
              const [e] = a[d];
              if (b.has(e))
                throw new B5(
                  `Duplicate serialized keys "${e}" found in record schema.`
                );
              b.add(e);
            }
            const c = (d, e) => {
              if (e?.type !== "dict") throw new y5("record", e);
              const f = {};
              for (const g of Object.keys(a)) {
                const [h, k] = a[g],
                  l = E5(
                    () => {
                      const m = e.value.get(h);
                      return k.ps(m);
                    },
                    { keepAlive: !0 }
                  );
                Object.defineProperty(f, g, {
                  get() {
                    return l.get();
                  },
                  set(m) {
                    d !== "readonly" &&
                      ((m = k.Nk(m)),
                      m == null ? e.value.delete(h) : e.value.set(h, m));
                  },
                  enumerable: !0,
                });
              }
              return f;
            };
            return {
              Nk: (d) => {
                const e = {};
                for (const f of Object.keys(a)) {
                  const [g, h] = a[f],
                    k = h.Nk(d[f]);
                  k != null && (e[g] = k);
                }
                return { type: "dict", value: new Map(Object.entries(e)) };
              },
              qs: (d) => {
                if (d?.type !== "dict") throw new z5("record", d);
                const e = {};
                for (const f of Object.keys(a)) {
                  const [g, h] = a[f],
                    k = h.qs(d.value.get(g));
                  k != null && (e[f] = k);
                }
                return e;
              },
              ps: (d) => c("editable", d),
              fu: (d) => c("readonly", d),
              Ab: (d) => F5({ ...a, ...d }),
            };
          },
          Boc = function (a) {
            return {
              Nk: (b) => ({ type: "list", value: b.map((c) => a.Nk(c)) }),
              qs: (b) => {
                if (b?.type !== "list") throw new z5("list", b);
                return b.value.filter(nb).map((c) => a.qs(c));
              },
              ps: (b) => {
                if (b?.type !== "list") throw new y5("list", b);
                return new zoc(b, a);
              },
              fu: (b) => {
                if (b?.type !== "list") throw new y5("list", b);
                return new Aoc(b, a);
              },
            };
          },
          G5 = function (a) {
            return {
              Nk: (b) => {
                if (b != null) return a.Nk(b);
              },
              qs: (b) => {
                if (b != null) return a.qs(b);
              },
              ps: (b) => {
                if (b != null) return a.ps(b);
              },
              fu: (b) => {
                if (b != null) return a.fu(b);
              },
            };
          },
          H5 = function (a, b) {
            const c = new Set(Object.keys(a)),
              d = (e) => {
                if (e?.type !== "dict") throw new y5("union", e);
                const f = e.value.get("k")?.value,
                  g = e.value.get("v");
                if (
                  f == null ||
                  g == null ||
                  typeof f !== "string" ||
                  !c.has(f)
                )
                  throw new y5("union", e);
                return { gca: a[f], hca: g };
              };
            return {
              Nk: (e) => {
                const f = b(e);
                return {
                  type: "dict",
                  value: new Map([
                    ["k", { type: "string", value: f }],
                    ["v", a[f].Nk(e)],
                  ]),
                };
              },
              qs: (e) => {
                if (e?.type !== "dict") throw new z5("union", e);
                const f = e.value.get("k")?.value,
                  g = e.value.get("v");
                if (
                  f == null ||
                  g == null ||
                  typeof f !== "string" ||
                  !c.has(f)
                )
                  throw new z5("union", e);
                const { gca: h, hca: k } = { gca: a[f], hca: g };
                return h.qs(k);
              },
              ps: (e) => {
                const { gca: f, hca: g } = d(e);
                return f.ps(g);
              },
              fu: (e) => {
                const { gca: f, hca: g } = d(e);
                return f.fu(g);
              },
            };
          },
          Coc = function (a) {
            const b = () => a.Ck.cB.get(a.lf.zj) || I5;
            return {
              OW: function () {
                return a.Ck.zk
                  ? 3
                  : a.Ck.ysb === "checking" || a.Ck.Sc.status === 2
                  ? 1
                  : a.Ck.Sc.status === 3
                  ? 4
                  : a.Ck.vt
                  ? 2
                  : 0;
              },
              Axa: function () {
                const c = a.lf,
                  { bI: d } = b();
                return !(
                  !d ||
                  !c.fields.first(
                    ({ value: e }) =>
                      e.type === "select" &&
                      !!e.options.first(({ value: f }) => f.id === d)
                  )
                );
              },
              rqb: function (c, d) {
                const { results: e } = b();
                c = e.fields.get(c);
                if (!c) return 0;
                d = c.uH.get(d) ?? 0;
                d = c.total > 0 ? (d / c.total) * 100 : 0;
                Number.isInteger(d) || (d = parseFloat(d.toFixed(1)));
                return d;
              },
              Pqb: function (c) {
                if (!a.lf.fields.first(({ value: e }) => e.id === c)) return 0;
                var { results: d } = b();
                return (d = d.fields.get(c)) ? d.total : 0;
              },
              Rxa: b,
              lxb: (c) => {
                const d = new Map(a.Ck.cB);
                d.set(a.lf.zj, { ...b(), ...c });
                return d;
              },
            };
          },
          Goc = function (a, b, c, d, e, f) {
            function g() {
              const v = b.OW(),
                w = q();
              return (p === "poll" || !w) && v === 0;
            }
            async function h() {
              const v = f.zh("submit_response", {
                  hp: { name: "ui.rendering.form.submit_response" },
                }),
                w = {
                  LP: m,
                  QUa: p,
                  wu: "interacted",
                  action: "response_submitted",
                  location: "in_form",
                };
              e && toc({ span: v, ga: e, event: __c.ccc, props: w });
              const { results: z, ye: A, WDa: C } = r();
              if (A != null && g()) {
                var B = a.lf.fields.first(
                  ({ value: O }) =>
                    O.type === "select" &&
                    !!O.options.first(({ value: R }) => R.id === A)?.value
                )?.value;
                if (B) {
                  l("selected_field_found", v);
                  var E = a.Ck,
                    I = z;
                  p === "poll" &&
                    C &&
                    C !== A &&
                    (I = Doc({ dsa: z, Zs: B.id, DL: C }));
                  I = Eoc({ gRa: I, Zs: B.id, DL: A });
                  l("field_results_created", v);
                  J5(() => {
                    a.Zm(() => ({
                      cB: t({ ye: A, bI: A, results: I }),
                      vt: !0,
                    }));
                  });
                  l("submission_set", v);
                  v.nW();
                  var L = await c.Gvb({
                    Zt: a.lf.Zt,
                    zj: n,
                    tra: [
                      {
                        type: 0,
                        Zs: B.id,
                        kl: B.label.text.X.trim(),
                        ye: A,
                        options:
                          B.type === "select"
                            ? B.options.map(({ value: O }) => ({
                                id: O.id,
                                label: O.label.text.X.trim(),
                              }))
                            : [],
                      },
                    ],
                  });
                  if (L.ok)
                    return J5(() => {
                      const O = (R) =>
                        !!L.value.result.iUa
                          .get(B.id)
                          ?.feedback?.Wta?.includes(R);
                      a.Zm(() => ({
                        vt: !1,
                        Sc: { ...a.Ck.Sc, jha: O },
                        cB: t({ WDa: void 0 }),
                      }));
                    });
                  d?.zs({
                    Gt: K("izckBA"),
                    group: Foc,
                    QE: { Fw: K("mQhziQ"), onClick: h },
                  });
                  var M = Doc({ dsa: I, Zs: B.id, DL: A });
                  C && (M = Eoc({ gRa: M, Zs: B.id, DL: C }));
                  J5(() => {
                    a.Zm({
                      ...E,
                      ...(C && { cB: t({ ye: C, bI: C, results: M }) }),
                    });
                  });
                } else v.abort();
              } else v.abort();
            }
            async function k(v) {
              const w = r(),
                z = a.lf.fields.first(
                  ({ value: B }) =>
                    B.type === "select" &&
                    !!B.options.first(({ value: E }) => E.id === v)?.value
                )?.value;
              if (z) {
                var A = a.Ck,
                  C = Doc({ dsa: w.results, Zs: z.id, DL: v });
                J5(() => {
                  a.Zm(() => ({
                    cB: t({ ye: void 0, bI: void 0, results: C }),
                    My: void 0,
                    vt: !0,
                  }));
                });
                (await c.g8({ zj: n })).ok
                  ? J5(() => {
                      a.Zm({ vt: !1 });
                    })
                  : (d?.zs({
                      Gt: K("kgHTHw"),
                      group: Foc,
                      QE: { Fw: K("mQhziQ"), onClick: () => k(v) },
                    }),
                    J5(() => {
                      a.Zm(A);
                    }));
              }
            }
            function l(v, w) {
              w.addEvent(v);
              w.kd().addEvent(v);
            }
            const m = a.lf.id,
              n = a.lf.zj,
              p = a.lf.type,
              q = b.Axa,
              r = b.Rxa,
              t = b.lxb;
            return {
              submit: h,
              jBa: function () {
                a.Zm(() => ({ RS: 1 }));
              },
              kBa: function () {
                a.Zm(() => ({ RS: 0 }));
              },
              iBa: function () {
                a.Zm(() => ({ RS: 2 }));
              },
              lBa: function () {
                a.Zm(() => ({ RS: 1 }));
              },
              Lna: function (v) {
                const w = r(),
                  z = p === "poll" && v === w?.ye && v === w?.bI;
                if (g() && z) k(v);
                else if (
                  g() &&
                  a.lf.fields.some(
                    ({ value: C }) =>
                      C.type === "select" &&
                      C.options.some(({ value: B }) => B.id === v)
                  )
                ) {
                  var A = w?.bI;
                  J5(() => {
                    const C = r();
                    a.Zm(() => ({
                      cB: t({ WDa: A, ye: C.ye === v ? void 0 : v }),
                    }));
                  });
                  p === "poll" && h();
                }
              },
              aja: function (v) {
                g() &&
                  a.lf.fields.some(
                    ({ value: w }) =>
                      w.type === "select" &&
                      w.options.some(({ value: z }) => z.id === v)
                  ) &&
                  a.Zm(() => ({ xG: v }));
              },
              bja: function (v) {
                b.OW() === 0 &&
                  a.lf.fields.some(
                    ({ value: w }) =>
                      w.type === "select" &&
                      w.options.some(({ value: z }) => z.id === v)
                  ) &&
                  a.Ck.xG &&
                  a.Zm(() => ({ xG: void 0 }));
              },
              Zia: function (v) {
                const { bI: w, ye: z } = r();
                b.OW() === 0 &&
                  a.lf.fields.some(
                    ({ value: A }) =>
                      A.type === "select" &&
                      A.options.some(({ value: C }) => C.id === v)
                  ) &&
                  z !== v &&
                  !w &&
                  a.Zm(() => ({ My: v }));
              },
              cja: function (v) {
                b.OW() === 0 &&
                  a.lf.fields.some(
                    ({ value: w }) =>
                      w.type === "select" &&
                      w.options.some(({ value: z }) => z.id === v)
                  ) &&
                  a.Ck.My &&
                  a.Zm(() => ({ My: void 0 }));
              },
            };
          },
          Doc = function ({ dsa: a, Zs: b, DL: c }) {
            const d = a.fields.get(b) ?? { id: b, uH: new Map(), total: 0 },
              e = Math.max(0, (d.uH.get(c) ?? 0) - 1),
              f = new Map(d.uH);
            e > 0 ? f.set(c, e) : f.delete(c);
            return {
              fields: Hoc(a.fields, b, {
                id: b,
                uH: f,
                total: Math.max(0, d.total - 1),
              }),
            };
          },
          Eoc = function ({ gRa: a, Zs: b, DL: c }) {
            const d = a.fields.get(b) ?? { id: b, uH: new Map(), total: 0 },
              e = (d.uH.get(c) ?? 0) + 1;
            return {
              fields: Hoc(a.fields, b, {
                id: b,
                uH: Hoc(d.uH, c, e),
                total: d.total + 1,
              }),
            };
          },
          Hoc = function (a, b, c) {
            return new Map([...a.entries(), [b, c]]);
          },
          K5 = function (a, b) {
            __c.u(b.length > 0, "zero contrast candidates received");
            const c = new Map();
            return __c.oo(b, (d) => {
              const e = c.get(d) ?? __c.fz(d, a);
              c.set(d, e);
              return e;
            });
          },
          Ioc = function (a, b) {
            return __c.acc(a, b) >= 20 ? a : K5(b, L5);
          },
          M5 = function (a) {
            switch (a.type) {
              case "color":
                return a.color;
              case "gradient":
                return a.Ua.Mh[0].color;
              default:
                throw new D(a);
            }
          },
          N5 = function ({
            layout: a,
            direction: b,
            gap: c,
            padding: d,
            background: e,
            border: f,
            O: g,
            cells: h,
            ...k
          }) {
            a = a === "vertical";
            let l = [];
            const m = [],
              n = c && d,
              p = d ? 1 : 0;
            let q = 1;
            for (let r = 0; r < h.length; r++) {
              const t = h[r];
              typeof t.size === "string"
                ? l.push(t.size)
                : l.push(`${t.size}px`);
              m.push({
                ...t,
                id: t.id,
                placement: a
                  ? {
                      gridColumnStart: `${p + 1}`,
                      gridColumnEnd: `${p + 2}`,
                      gridRowStart: `${p + q}`,
                      gridRowEnd: `${p + q + 1}`,
                      padding: t.padding ? Joc(t.padding) : void 0,
                      alignSelf: t.alignSelf,
                    }
                  : {
                      gridColumnStart: `${p + q}`,
                      gridColumnEnd: `${p + q + 1}`,
                      gridRowStart: `${p + 1}`,
                      gridRowEnd: `${p + 2}`,
                      padding: t.padding ? Joc(t.padding) : void 0,
                      alignSelf: t.alignSelf,
                    },
              });
              q += n ? 2 : 1;
            }
            n && (l = l.join(` ${c}px `).split(" "));
            d && (l = [`${d}px`, ...l, `${d}px`]);
            return {
              ...k,
              type: "layout",
              cells: m,
              direction: b,
              fill: e,
              border: f,
              O: g,
              gridTemplateColumns: a
                ? d
                  ? [`${d}px`, "1fr", `${d}px`]
                  : ["1fr"]
                : l,
              gridTemplateRows: a
                ? l
                : d
                ? [`${d}px`, "auto", `${d}px`]
                : ["auto"],
              columnGap: n || a ? void 0 : c,
              rowGap: !n && a ? c : void 0,
            };
          },
          Koc = function ({
            padding: a,
            direction: b,
            background: c,
            O: d,
            wa: e,
            border: f,
            content: g,
            ref: h,
            key: k,
            ...l
          }) {
            return {
              ...l,
              type: "layout",
              direction: b,
              gridTemplateColumns: ["1fr"],
              gridTemplateRows: ["1fr"],
              fill: c,
              O: d,
              wa: e,
              border: f,
              cells: [
                {
                  id: "_",
                  content: g,
                  placement: {
                    gridColumnStart: "1",
                    gridColumnEnd: "2",
                    gridRowStart: "1",
                    gridRowEnd: "2",
                    alignSelf: "center",
                    padding: a,
                  },
                },
              ],
              key: k,
              ref: h,
            };
          },
          Joc = function (a) {
            switch (a.length) {
              case 0:
                break;
              case 1:
                return a[0];
              case 2:
                return { ra: a[0], Ma: a[1], Ga: a[0], ta: a[1] };
              case 4:
                return { ra: a[0], Ma: a[1], Ga: a[2], ta: a[3] };
              default:
                throw Error(`Invalid padding value: ${a}`);
            }
          },
          O5 = function (a, b) {
            a = __c.Si.create(__c.Si.snapshot(a.text));
            b != null && a.setAttributes(b);
            return { type: "text", lE: 1, text: __c.Si.snapshot(a) };
          },
          P5 = function (a) {
            switch (a) {
              case "l":
                return 1;
              case "r":
                return 2;
              default:
                throw new D(a);
            }
          },
          Q5 = function (a) {
            switch (a) {
              case "l":
                return "ltr";
              case "r":
                return "rtl";
              default:
                throw new D(a);
            }
          },
          Loc = function (a) {
            if (a)
              return {
                Lna: a.Lna,
                aja: a.aja,
                bja: a.bja,
                Zia: a.Zia,
                cja: a.cja,
              };
          },
          Moc = function ({ direction: a, text: b, background: c }) {
            return {
              id: "header",
              size: "auto",
              fill: c,
              padding: [20, 20, 16, 20],
              content: O5(b, { direction: Q5(a) }),
            };
          },
          Poc = function ({
            direction: a,
            messages: b,
            UCa: c,
            fontFamily: d,
            yDa: e,
            O: f,
            state: g,
            lm: h,
            Al: k,
          }) {
            var l = h !== k,
              m = K5(k, L5);
            h = l ? h : m;
            m = Ioc("#000000", k);
            var n = Ioc(h, k);
            l = Noc(g, g === 3 && l ? n : m, l);
            b = {
              type: "layout",
              gridTemplateRows: ["10px", "1fr", "10px"],
              gridTemplateColumns: ["10px", "1fr", "2px", "45px", "10px"],
              fill: l,
              cells: [
                {
                  id: "text",
                  placement: {
                    gridColumnStart: "2",
                    gridColumnEnd: "3",
                    gridRowStart: "2",
                    gridRowEnd: "3",
                    alignSelf: "center",
                  },
                  content: O5(c, {
                    direction: Q5(a),
                    ...(g === 3 && { color: K5(h, L5) }),
                  }),
                },
                g === 3 || g === 4 || g === 5
                  ? {
                      id: "percentage",
                      placement: {
                        gridColumnStart: "4",
                        gridColumnEnd: "5",
                        gridRowStart: "2",
                        gridRowEnd: "3",
                        alignSelf: "center",
                      },
                      content: {
                        type: "text",
                        lE: 0,
                        fontFamily: d,
                        fontWeight: "bold",
                        fontSize: Ooc,
                        text: b.u5a(e),
                        textAlign: "end",
                        direction: Q5(a),
                        color: g === 3 ? K5(h, L5) : K5(k, L5),
                      },
                    }
                  : void 0,
              ].filter(nb),
            };
            if (g !== 3 && g !== 4 && g !== 5) return b;
            c = e > 0;
            const p = e < 100;
            n = (k = (c && !p) || (!c && p)) ? 1 : 2;
            e = [c ? `${e}fr` : void 0, p ? `${100 - e}fr` : void 0].filter(nb);
            g = {
              type: "color",
              color: g === 3 ? h : m,
              wa: g === 3 ? 0 : 0.8,
            };
            return k
              ? { ...b, fill: c ? g : l }
              : {
                  type: "layout",
                  direction: P5(a),
                  gridTemplateRows: ["1fr"],
                  gridTemplateColumns: e,
                  fill: l,
                  cells: [
                    {
                      id: "bar",
                      O: f,
                      fill: g,
                      placement: {
                        gridColumnStart: "1",
                        gridColumnEnd: "2",
                        gridRowStart: "1",
                        gridRowEnd: "2",
                      },
                      content: Koc({
                        direction: P5(a),
                        content: {
                          type: "text",
                          lE: 0,
                          text: "",
                          fontFamily: d,
                          fontSize: Ooc,
                          direction: Q5(a),
                        },
                      }),
                    },
                    {
                      id: "optionTextWithPercentage",
                      placement: {
                        gridColumnStart: "1",
                        gridColumnEnd: `${n + 1}`,
                        gridRowStart: "1",
                        gridRowEnd: "2",
                      },
                      content: b,
                    },
                  ],
                };
          },
          Noc = function (a, b, c) {
            switch (a) {
              case 0:
                return { type: "color", color: b, wa: 0.92 };
              case 1:
              case 5:
                return { type: "color", color: b, wa: 0.88 };
              case 2:
                return { type: "color", color: b, wa: 0.74 };
              case 3:
                return { type: "color", color: b, wa: c ? 0.5 : 0.92 };
              case 4:
                return { type: "color", color: b, wa: 0.92 };
              default:
                throw new D(a);
            }
          },
          Qoc = function ({
            lpb: a,
            xQ: b,
            Zs: c,
            direction: d,
            options: e,
            ye: f,
            xG: g,
            My: h,
            TCa: k,
            fontFamily: l,
            h9: m,
            lm: n,
            Al: p,
            messages: q,
            Koa: r,
          }) {
            return {
              id: "field",
              size: "1fr",
              padding: [16, 20],
              alignSelf: "center",
              content: N5({
                layout: "vertical",
                direction: P5(d),
                gap: 8,
                cells: e.map(({ value: t }) => {
                  var v = t.id === f;
                  const w = t.id === g,
                    z = t.id === h;
                  v = m ? (v ? 3 : w ? 5 : 4) : z ? 2 : w ? 1 : 0;
                  return {
                    id: t.id,
                    size: "auto",
                    alignSelf: "center",
                    content: {
                      ref: r.option,
                      key: t.id,
                      O: k,
                      hm: () => b?.Lna?.(t.id),
                      onMouseEnter: () => b?.aja?.(t.id),
                      onMouseLeave: () => b?.bja?.(t.id),
                      onMouseDown: () => b?.Zia?.(t.id),
                      onMouseUp: () => b?.cja?.(t.id),
                      ...Poc({
                        messages: q,
                        UCa: t.label,
                        direction: d,
                        fontFamily: l,
                        yDa: a.rqb(c, t.id),
                        O: k,
                        state: v,
                        lm: n,
                        Al: p,
                      }),
                    },
                  };
                }),
              }),
            };
          },
          Voc = function (a) {
            const b = a.status,
              c = a.direction,
              d = a.backgroundColor,
              e = a.fontSize,
              f = a.fontFamily,
              g = K5(d, L5);
            switch (b) {
              case 0:
                return {
                  type: "text",
                  lE: 1,
                  text: R5(
                    a.statusMessage ?? a.messages.sAa(),
                    c,
                    K5(d, Roc),
                    g,
                    e,
                    f
                  ),
                };
              case 1:
                return {
                  type: "text",
                  lE: 1,
                  text: R5(a.messages.loading(), c, K5(d, Soc), g, e, f),
                };
              case 2:
                return {
                  type: "text",
                  lE: 1,
                  text: R5(a.messages.HHa(), c, K5(d, Soc), g, e, f),
                };
              case 3:
                return {
                  type: "text",
                  lE: 1,
                  text: R5(a.messages.offline(), c, K5(d, Toc), g, e, f),
                };
              case 4:
                return {
                  type: "text",
                  lE: 1,
                  text: R5(a.messages.cHa(), c, K5(d, Uoc), g, e, f),
                };
              default:
                throw new D(b);
            }
          },
          Woc = function ({
            direction: a,
            messages: b,
            tyb: c,
            status: d,
            Sc: e,
            backgroundColor: f,
            fontSize: g,
            fontFamily: h,
          }) {
            e =
              e.status === 1
                ? e.data.SS?.type === "ANON"
                  ? b.cpa()
                  : b.bpa()
                : b.sAa();
            return [
              {
                id: "footer",
                size: "auto",
                padding: [0, 20, 20, 20],
                content: Voc({
                  messages: b,
                  status: d,
                  statusMessage: `${e} | ${b.JBa(c)}`,
                  backgroundColor: f,
                  direction: a,
                  fontSize: g,
                  fontFamily: h,
                }),
              },
            ];
          },
          Xoc = function ({
            width: a,
            height: b,
            fe: c,
            color: d,
            rtb: e,
            backgroundColor: f,
          }) {
            return {
              type: "shape",
              width: a,
              height: b,
              Loa: { width: 16, height: 16 },
              gb: [
                {
                  d: "M 8 16 C 12.4183 16 16 12.4183 16 8 C 16 3.5817 12.4183 0 8 0 C 3.5817 0 0 3.5817 0 8 C 0 12.4183 3.5817 16 8 16 Z",
                  stroke: { weight: c, color: d },
                  fill: { type: "color", color: d },
                },
                {
                  d: e
                    ? "M11.9541 5.09249C11.5708 4.70916 10.9493 4.70916 10.5659 5.09249L6.84653 8.8119L5.44784 7.39414C5.23981 7.18328 4.97538 7.08048 4.70513 7.09454C4.44717 7.10796 4.22126 7.22537 4.05972 7.38474C3.89817 7.54411 3.77772 7.76841 3.76081 8.02616C3.74309 8.2962 3.8423 8.562 4.05032 8.77286L6.14306 10.8941C6.35108 11.105 6.61551 11.2078 6.88577 11.1937C7.14372 11.1803 7.36963 11.0629 7.53118 10.9035L7.53918 10.8955L11.9541 6.48064C12.3374 6.09731 12.3374 5.47582 11.9541 5.09249Z"
                    : "M11.6813 5.85778C12.1063 5.43279 12.1063 4.74374 11.6813 4.31875C11.2564 3.89376 10.5673 3.89376 10.1423 4.31875L8.00005 6.46102L5.85777 4.31874C5.43279 3.89375 4.74374 3.89375 4.31874 4.31874C3.89375 4.74374 3.89375 5.43278 4.31874 5.85778L6.46101 8.00005L4.31883 10.1422C3.89384 10.5672 3.89384 11.2563 4.31883 11.6813C4.74383 12.1063 5.43288 12.1063 5.85786 11.6813L8.00005 9.53908L10.1422 11.6813C10.5672 12.1062 11.2563 12.1062 11.6813 11.6813C12.1062 11.2563 12.1062 10.5672 11.6813 10.1422L9.53908 8.00005L11.6813 5.85778Z",
                  fill: { type: "color", color: f },
                },
              ],
            };
          },
          $oc = function ({ direction: a, UCa: b, Al: c, state: d }) {
            const e = Ioc("#000000", c);
            return {
              type: "layout",
              gridTemplateRows: ["10px", "1fr", "10px"],
              gridTemplateColumns: ["10px", "1fr", "2px", "18px", "10px"],
              fill: Yoc(d, e),
              cells: [
                {
                  id: "text",
                  placement: {
                    alignSelf: "center",
                    gridColumnStart: "2",
                    gridColumnEnd: "3",
                    gridRowStart: "2",
                    gridRowEnd: "3",
                  },
                  content: (() => {
                    switch (d) {
                      case 5:
                        return O5(b, { direction: Q5(a), color: "#00873d" });
                      case 6:
                        return O5(b, { direction: Q5(a), color: "#c8001e" });
                      case 4:
                        return O5(b, { direction: Q5(a), color: K5(c, Zoc) });
                      default:
                        return O5(b, { direction: Q5(a) });
                    }
                  })(),
                },
                d === 5 || d === 6
                  ? {
                      id: "validation",
                      placement: {
                        gridColumnStart: "4",
                        gridColumnEnd: "5",
                        gridRowStart: "2",
                        gridRowEnd: "3",
                        alignSelf: "center",
                      },
                      content: Xoc({
                        width: 18,
                        height: 18,
                        fe: 1.6,
                        rtb: d === 5,
                        color: d === 5 ? "#00873d" : "#c8001e",
                        backgroundColor: "#ffffff",
                      }),
                    }
                  : void 0,
              ].filter(nb),
            };
          },
          Yoc = function (a, b) {
            switch (a) {
              case 0:
                return { type: "color", color: b, wa: 0.92 };
              case 1:
                return { type: "color", color: b, wa: 0.74 };
              case 2:
                return { type: "color", color: b, wa: 0.88 };
              case 3:
                return { type: "color", color: b, wa: 0.74 };
              case 4:
                return { type: "color", color: b, wa: 0.9 };
              case 5:
                return { type: "color", color: "#e3fff0", wa: 0 };
              case 6:
                return { type: "color", color: "#ffd9df", wa: 0 };
              default:
                throw new D(a);
            }
          },
          apc = function ({
            xQ: a,
            direction: b,
            options: c,
            Sc: d,
            ye: e,
            xG: f,
            My: g,
            TCa: h,
            Al: k,
            h9: l,
            Koa: m,
            context: n,
          }) {
            return {
              id: "field",
              size: "1fr",
              padding: [16, 20, 10, 20],
              alignSelf: "center",
              content: N5({
                layout: "vertical",
                direction: P5(b),
                gap: 8,
                cells: c.map(({ value: p }) => {
                  var q = p.id === e;
                  const r = d.status === 1,
                    t = p.id === f,
                    v = p.id === g;
                  q =
                    r && l && n.mode !== "edit"
                      ? d.data.jha(p.id)
                        ? 5
                        : q
                        ? 6
                        : 4
                      : n.mode === "edit"
                      ? r && d.data.jha(p.id)
                        ? 5
                        : 4
                      : q
                      ? 1
                      : v
                      ? 3
                      : t
                      ? 2
                      : 0;
                  return {
                    id: p.id,
                    size: "auto",
                    alignSelf: "center",
                    content: {
                      ref: m.option,
                      key: p.id,
                      O: h,
                      hm: () => a?.Lna?.(p.id),
                      onMouseEnter: () => a?.aja?.(p.id),
                      onMouseLeave: () => a?.bja?.(p.id),
                      onMouseDown: () => a?.Zia?.(p.id),
                      onMouseUp: () => a?.cja?.(p.id),
                      ...$oc({ direction: b, UCa: p.label, Al: k, state: q }),
                    },
                  };
                }),
              }),
            };
          },
          bpc = function ({
            direction: a,
            text: b,
            WU: c,
            XU: d,
            xQ: e,
            fontSize: f,
            fontFamily: g,
            fontWeight: h,
            fontStyle: k,
          }) {
            const l = L5.includes(c),
              { h: m, s: n, la: p } = __c.Fs(c);
            var q = new __c.xs(m, n, p < 10 ? p + 6 : p - 6);
            q = __c.Gs(q);
            var r = new __c.xs(m, n, p < 10 ? p + 10 : p - 10);
            r = __c.Gs(r);
            return {
              id: "submit",
              size: "auto",
              padding: [0, 20],
              content: Koc({
                direction: P5(a),
                hm: e?.submit,
                onMouseEnter: e?.jBa,
                onMouseLeave: e?.kBa,
                onMouseDown: e?.iBa,
                onMouseUp: e?.lBa,
                background: {
                  type: "color",
                  color: d === 2 ? r : d === 1 ? q : c,
                  wa: e?.submit ? (l ? 0.1 : void 0) : 0.6,
                },
                O: 24,
                padding: 12,
                content: O5(b, {
                  direction: Q5(a),
                  "font-size": f,
                  "font-family": g,
                  "font-weight": h,
                  "font-style": k,
                }),
              }),
            };
          },
          cpc = function ({
            xQ: a,
            direction: b,
            messages: c,
            Fw: d,
            lm: e,
            status: f,
            Sc: g,
            ye: h,
            backgroundColor: k,
            h9: l,
            RS: m,
            S3: n,
            fontFamily: p,
            fontWeight: q,
            fontStyle: r,
          }) {
            if (!l || !g || !h)
              return (
                (h = e === k ? K5(e, L5) : e),
                (g =
                  g?.status === 1
                    ? g.data.SS?.type === "ANON"
                      ? c.cpa()
                      : c.bpa()
                    : void 0),
                [
                  bpc({
                    direction: b,
                    text: d,
                    WU: h,
                    XU: m,
                    xQ: a,
                    fontSize: n.label,
                    fontFamily: p,
                    fontWeight: q,
                    fontStyle: r,
                  }),
                  {
                    id: "quiz_status",
                    size: "auto",
                    padding: [8, 20, 10, 20],
                    content: Voc({
                      status: f,
                      statusMessage: g,
                      messages: c,
                      direction: b,
                      backgroundColor: k,
                      fontSize: n.message,
                      fontFamily: p,
                    }),
                  },
                ]
              );
            a = K5(k, L5);
            return [
              {
                id: "quiz_results_footer",
                size: "auto",
                padding: [20, 20, 24, 20],
                content: N5({
                  layout: "vertical",
                  direction: P5(b),
                  cells: [
                    {
                      id: "quiz_result",
                      size: "auto",
                      content: {
                        type: "text",
                        lE: 0,
                        fontFamily: p,
                        text: g.data.jha(h) ? c.DQa() : c.$Wa(),
                        fontSize: n.label,
                        fontWeight: "bold",
                        textAlign: "center",
                        direction: Q5(b),
                        color: a,
                      },
                    },
                    {
                      id: "quiz_message",
                      size: "auto",
                      content: {
                        type: "text",
                        lE: 0,
                        fontFamily: p,
                        text: c.t5a(),
                        fontSize: n.message,
                        wa: 0.2,
                        textAlign: "center",
                        direction: Q5(b),
                        color: a,
                      },
                    },
                  ],
                }),
              },
            ];
          };
        __c.mw.prototype.yDa = __c.da(15, function () {
          return __c.hw(this, () => __c.Uv(this.operators, "%", this.value));
        });
        var dpc = class {
            constructor() {
              this.type = "layout";
            }
          },
          S5 = __webpack_require__(186901),
          E5 = S5.EW,
          J5 = S5.h5,
          epc = S5.mJ,
          fpc = S5.sH,
          gpc = S5.XI;
        var Aoc = class {
            static D(a) {
              __c.N(a, { xSa: E5 });
            }
            get xSa() {
              const a = [];
              for (const b of this.list.value) {
                const c = w5(this, b);
                if (c === void 0)
                  throw new uoc(
                    "undefined value found when deserializing list."
                  );
                a.push(c);
              }
              return a;
            }
            count() {
              return this.list.value.count();
            }
            toArray() {
              return this.xSa.map(({ value: a }) => a);
            }
            first(a) {
              const b = this.list.value.first(
                a ? (c) => a(w5(this, c)) : void 0
              );
              if (b != null) return w5(this, b);
            }
            last(a) {
              const b = this.list.value.last(
                a ? (c) => a(w5(this, c)) : void 0
              );
              if (b != null) return w5(this, b);
            }
            next(a, b) {
              var c = b ? (d) => b(w5(this, d)) : void 0;
              a = x5(this, a);
              c = this.list.value.next(a, c);
              if (c != null) return w5(this, c);
            }
            previous(a, b) {
              var c = b ? (d) => b(w5(this, d)) : void 0;
              a = x5(this, a);
              c = this.list.value.previous(a, c);
              if (c != null) return w5(this, c);
            }
            map(a) {
              return this.list.value.map((b, c) => a(w5(this, b), c));
            }
            filter(a) {
              return this.list.value
                .filter((b, c) => a(w5(this, b), c))
                .map((b) => w5(this, b));
            }
            forEach(a) {
              return this.list.value.forEach((b, c) => a(w5(this, b), c));
            }
            some(a) {
              return this.list.value.some((b) => a(w5(this, b)));
            }
            constructor(a, b) {
              this.Ym = b;
              this.M$a = (Aoc.D(this), new WeakMap());
              this.E$a = new WeakMap();
              __c.x(a.type === "list");
              this.list = a;
            }
          },
          zoc = class extends Aoc {
            replace(a, b) {
              a = x5(this, a);
              b = this.list.value.replace(a, this.Ym.Nk(b));
              return w5(this, b);
            }
            FG(a, b) {
              a = a != null ? x5(this, a) : void 0;
              b = this.list.value.FG(a, this.Ym.Nk(b));
              return w5(this, b);
            }
            SC(a, b) {
              a = a != null ? x5(this, a) : void 0;
              return this.list.value
                .SC(
                  a,
                  b.map((c) => this.Ym.Nk(c))
                )
                .map((c) => w5(this, c));
            }
            insertBefore(a, b) {
              a = a != null ? x5(this, a) : void 0;
              b = this.list.value.insertBefore(a, this.Ym.Nk(b));
              return w5(this, b);
            }
            append(a) {
              a = this.list.value.append(this.Ym.Nk(a));
              return w5(this, a);
            }
            prepend(a) {
              a = this.list.value.prepend(this.Ym.Nk(a));
              return w5(this, a);
            }
            delete(a) {
              a = x5(this, a);
              this.list.value.delete(a);
            }
            mz(a) {
              this.list.value.mz(a ? (b) => a(w5(this, b)) : void 0);
            }
            eq(a, b) {
              a = a == null ? void 0 : x5(this, a);
              b = x5(this, b);
              this.list.value.eq(a, b);
            }
          };
        var B5 = class extends Error {
            constructor(a) {
              super(a);
              this.name = "SchemaError";
            }
          },
          uoc = class extends B5 {
            constructor(a) {
              super(`ListError: ${a}`);
            }
          },
          y5 = class extends B5 {
            constructor(a, b) {
              super(`Error transforming ${b} into type ${a} of widget data`);
            }
          },
          z5 = class extends B5 {
            constructor(a, b) {
              super(`Error transforming ${b} into type ${a} of widget state`);
            }
          },
          voc = class extends B5 {
            constructor(a, b) {
              super(`Error transforming ${b} into type ${a} of document state`);
            }
          };
        var I5 = {
            ye: void 0,
            bI: void 0,
            WDa: void 0,
            results: { fields: new Map() },
          },
          hpc = {
            Sc: { status: 2 },
            cB: new Map(),
            RS: 0,
            xG: void 0,
            My: void 0,
            oya: !1,
            ysb: "unchecked",
            vt: !1,
            zk: !1,
          };
        var ipc = F5({
            type: ["t", C5(["text2"], "text2"), "readonly"],
            text: [
              "te",
              (function () {
                const a = (b) => {
                  if (b?.type !== "text2") throw new y5("text2", b);
                  return b.value;
                };
                return {
                  Nk: (b) => ({ type: "text2", value: b }),
                  qs: (b) => {
                    if (b?.type !== "text2") throw new z5("text2", b);
                    return b.value;
                  },
                  ps: a,
                  fu: a,
                };
              })(),
            ],
          }),
          jpc = H5({ text2: ipc }, (a) => a.type),
          kpc = F5({ id: ["i", A5("")], label: ["l", jpc] }),
          lpc = Boc(kpc),
          mpc = Boc(A5("")),
          npc = F5({
            id: ["i", A5("")],
            label: ["l", jpc],
            Fub: ["tl", C5(["c", "u"], "c")],
            required: ["rq", xoc(!1)],
            O: ["c", D5(0)],
          }),
          opc = F5({ type: ["t", C5(["r"], "r"), "readonly"] }),
          ppc = F5({ type: ["t", C5(["p"], "p"), "readonly"] }),
          qpc = F5({ type: ["t", C5(["q"], "q"), "readonly"] }),
          rpc = H5({ r: opc, p: ppc, q: qpc }, (a) => a.type),
          spc = npc.Ab({
            type: ["t", C5(["select"], "select"), "readonly"],
            variant: ["v", G5(rpc)],
            options: ["o", lpc],
            z6: ["m", G5(woc())],
            $ca: ["co", mpc],
          }),
          tpc = F5({ type: ["t", C5(["e"], "e"), "readonly"] }),
          upc = F5({
            type: ["t", C5(["f"], "f"), "readonly"],
            tR: ["n", woc()],
          }),
          vpc = H5({ e: tpc, f: upc }, (a) => a.type),
          wpc = npc.Ab({
            type: ["t", C5(["text"], "text"), "readonly"],
            placeholder: ["p", A5("")],
            variant: ["v", vpc],
          }),
          xpc = F5({ type: ["t", C5(["a"], "a"), "readonly"] }),
          ypc = F5({ type: ["t", C5(["b"], "b"), "readonly"] }),
          zpc = F5({ type: ["t", C5(["c"], "c"), "readonly"] }),
          Apc = F5({ type: ["t", C5(["d"], "d"), "readonly"] }),
          Bpc = H5({ a: xpc, b: ypc, c: zpc, d: Apc }, (a) => a.type),
          Cpc = npc.Ab({
            type: ["t", C5(["number"], "number"), "readonly"],
            variant: ["v", Bpc],
            min: ["a", G5(D5())],
            max: ["b", G5(D5())],
          }),
          Dpc = H5({ select: spc, text: wpc, number: Cpc }, (a) => a.type),
          Epc = Boc(Dpc),
          Fpc = F5({ label: ["l", jpc] }),
          Gpc = F5({}),
          Hpc = C5(["l", "r"], "l"),
          Ipc = F5({
            minHeight: ["mh", D5(1)],
            minWidth: ["mw", D5(1)],
            type: ["t", C5(["poll", "quiz"], "poll"), "readonly"],
            id: ["i", A5()],
            zj: ["s", A5()],
            Zt: ["a", G5(A5())],
            direction: ["r", Hpc],
            Fda: ["d", A5("")],
            Rt: ["pf", yoc()],
            Vt: ["sf", yoc()],
            border: [
              "b",
              (function () {
                const a = (b) => {
                  if (b?.type !== "stroke") throw new y5("stroke", b);
                  return b.value;
                };
                return {
                  Nk: (b) => ({ type: "stroke", value: b }),
                  qs: (b) => {
                    if (b?.type !== "stroke") throw new z5("stroke", b);
                    return b.value;
                  },
                  ps: a,
                  fu: a,
                };
              })(),
            ],
            O: ["c", D5(0)],
            vG: ["hh", xoc(!1)],
            X8a: ["z", xoc(!0)],
            header: ["h", G5(Gpc)],
            fields: ["f", Epc],
            footer: ["fo", G5(Fpc)],
          }),
          Jpc = H5({ poll: Ipc, quiz: Ipc }, (a) => a.type);
        var Foc = Symbol("UNABLE_TO_SUBMIT");
        var Kpc = {
            resultsPercentage: 0,
            yourNameWillBeShared: 1,
            incorrectLabel: 2,
            responseSaved: 3,
            submitting: 4,
            loading: 5,
            numVotes: 6,
            offline: 7,
            yourNameWontBeShared: 8,
            somethingWentWrong: 9,
            correctLabel: 10,
            live: 11,
          },
          Lpc = class {
            static D(a) {
              __c.N(a, { oI: fpc.ref });
            }
            async Uya(a) {
              const b = await a;
              J5(() => {
                const c = JSON.parse(b),
                  d = new Map();
                for (const e in c) d.set(e, Object.values(c[e]));
                this.oI = d;
              });
            }
            ht(a) {
              return (this.oI?.get(this.document.language || "en") || [])[
                Kpc[a]
              ];
            }
            cHa() {
              return this.ht("somethingWentWrong") || K("ElTceA");
            }
            sAa() {
              return this.ht("live") || K("/iw6+Q");
            }
            DQa() {
              return this.ht("correctLabel") || K("i3mNPA");
            }
            $Wa() {
              return this.ht("incorrectLabel") || K("As1GTA");
            }
            t5a() {
              return this.ht("responseSaved") || K("xSH8Og");
            }
            JBa(a) {
              const b = this.ht("numVotes");
              return b
                ? __c.q1(b, [a], this.document.language)
                : __c.rb("6QpLYA", [a]);
            }
            u5a(a) {
              const b = this.ht("resultsPercentage");
              return b
                ? __c.q1(b, [a], this.document.language)
                : __c.rb("sUWUOA", [a]);
            }
            offline() {
              return this.ht("offline") || K("nFbxIQ");
            }
            loading() {
              return this.ht("loading") || K("2Q9Q+A");
            }
            HHa() {
              return this.ht("submitting") || K("wutQEA");
            }
            cpa() {
              return this.ht("yourNameWontBeShared") || K("Gzs/9g");
            }
            bpa() {
              return this.ht("yourNameWillBeShared") || K("WjcAyg");
            }
            constructor(a, b) {
              this.document = a;
              this.oI = (Lpc.D(this), void 0);
              this.Uya(b);
            }
          };
        var Npc = class extends Lpc {
          constructor(a) {
            const b = __webpack_require__
              .me(282643)
              .then(() => __c.Mpc)
              .then(({ D$: c }) => c);
            super(a, b);
          }
        };
        var Opc = class {
          static D(a) {
            __c.N(a, { border: E5 });
          }
          get border() {
            const a = this.kz.lf;
            a.border.weight &&
              !a.border.color &&
              this.J &&
              this.J.error(
                "Form widget borders cannot have weight without a color"
              );
            return { weight: a.border.weight, color: a.border.color, H5a: a.O };
          }
          constructor(a, b) {
            this.kz = a;
            this.J = b;
            Opc.D(this);
          }
        };
        var Ppc = class {
          static D(a) {
            __c.N(a, { Rt: E5, Vt: E5, lm: E5, Al: E5 });
          }
          get Rt() {
            const a = this.kz.lf.Rt.color,
              b = this.kz.lf.Rt.Ua;
            if (a) return { type: "color", color: a };
            if (b.ref) return { type: "gradient", Ua: b.ref };
          }
          get Vt() {
            const a = this.kz.lf.Vt.color,
              b = this.kz.lf.Vt.Ua;
            if (a) return { type: "color", color: a };
            if (b.ref) return { type: "gradient", Ua: b.ref };
          }
          get lm() {
            if (!this.Rt) return "#000000";
            switch (this.Rt.type) {
              case "color":
                return this.Rt.color;
              case "gradient":
                return this.Rt.Ua.Mh[0].color;
              default:
                throw new D(this.Rt);
            }
          }
          get Al() {
            if (!this.Vt) return "#000000";
            switch (this.Vt.type) {
              case "color":
                return this.Vt.color;
              case "gradient":
                return this.Vt.Ua.Mh[0].color;
              default:
                throw new D(this.Vt);
            }
          }
          constructor(a) {
            this.kz = a;
            Ppc.D(this);
          }
        };
        var L5 = ["#000000", "#ffffff"];
        var Ooc = 9 * __c.dV,
          Zoc = ["#cccccc", "#333333"],
          Roc = ["#00d200", "#00ed00"],
          Soc = ["#ffae00", "#ffc654"],
          Toc = ["#545454", "#c8c8c8"],
          Uoc = ["#e53935", "#ef5350"],
          Qpc = (14 * __c.dV) / 16,
          Rpc = (9 * __c.dV) / 16;
        var R5 = (a, b, c, d, e, f) =>
          __c.Si.wb()
            .attrs({
              "font-family": f,
              "font-size": e,
              leading: void 0,
              "text-align": "center",
              direction: Q5(b),
              color: c,
            })
            .nb("\u25cf ")
            .attrs({
              "font-family": f,
              "font-size": e,
              color: d,
              "font-kerning": "normal",
              "font-feature-liga": "on",
              "font-feature-clig": "on",
              "font-feature-calt": "on",
            })
            .nb(a)
            .To()
            .build();
        var Spc;
        Spc = ({ $xb: a, Nkb: b }) => {
          const c = b.status !== 1 && a.status === 1;
          return (
            (a.status === 1 && b.status === 1 && a.data.Bta !== b.data.Bta) || c
          );
        };
        __c.dBa = {
          mkb: function (a, b, c, d, e, f, g, h, k) {
            g.kg("forms");
            const { mpb: l } = d ?? {},
              m = h.cv("ui.rendering.form"),
              n = { root: new dpc(), option: new dpc() },
              p = new Npc(b);
            return {
              Qya: hpc,
              Ym: Jpc,
              TBa: ({ kz: q }) => {
                if (l && a) {
                  var r,
                    t = epc(
                      () => q.lf.id,
                      () => {
                        const w = q.lf.type,
                          z = l.get({ LP: q.lf.id, Vf: a, x3: c });
                        r?.unsubscribe();
                        w === "poll" &&
                          (r = z
                            .avb({ Mqb: () => q.lf.zj })
                            .subscribe(({ results: A, zj: C }) => {
                              J5(() => {
                                const B = new Map(q.Ck.cB);
                                B.set(C, { ...(B.get(C) ?? I5), results: A });
                                q.Zm({ cB: B });
                              });
                            }));
                        z.getSettings({ zVb: () => q.lf.Zt }).subscribe((A) => {
                          const C = q.Ck.Sc;
                          let B = A;
                          if (
                            A.status === 1 &&
                            !q.lf.Zt &&
                            q.lf.type === "quiz"
                          ) {
                            const E = q.lf.fields.first()?.value,
                              I = E?.type === "select" ? E.$ca.toArray() : [];
                            B = {
                              status: 1,
                              data: {
                                Wta: new Map(
                                  q.lf.fields
                                    .filter(
                                      ({ value: L }) => L.type === "select"
                                    )
                                    .map(({ value: L }) => [
                                      L.id,
                                      L.$ca.toArray(),
                                    ])
                                ),
                                jha: (L) => I.includes(L),
                                Bta: A.data.Bta,
                                SS: A.data.SS,
                              },
                            };
                          }
                          J5(() => {
                            q.Zm({ Sc: B });
                          });
                          Spc({ $xb: B, Nkb: C }) &&
                            z.Eob({ zj: q.lf.zj, Zt: q.lf.Zt }).then(
                              gpc((E) => {
                                const I = q.lf.zj;
                                if (E.ok) {
                                  var L = new Map(q.Ck.cB);
                                  if (E.value) {
                                    E = E.value;
                                    const M =
                                      q.lf.fields.first()?.value.id ?? "";
                                    E = E.tra.get(M);
                                    E = E?.type === 0 ? E.ye : void 0;
                                    L.set(I, {
                                      ...(L.get(I) ?? I5),
                                      ye: E,
                                      bI: E,
                                    });
                                  } else
                                    L.set(I, {
                                      ...(L.get(I) ?? I5),
                                      ye: void 0,
                                      bI: void 0,
                                    });
                                  q.Zm({ cB: L, My: void 0 });
                                }
                              })
                            );
                        });
                      },
                      { fireImmediately: !0 }
                    ),
                    v = epc(
                      () => k?.status === 2,
                      gpc((w) => {
                        q.Zm({ zk: w });
                      }),
                      { fireImmediately: !0 }
                    );
                  return () => {
                    r?.unsubscribe();
                    t();
                    v();
                  };
                }
              },
              render: (q, r) => {
                var t = Coc(q);
                if (l && a) {
                  var v = l.get({ LP: q.lf.id, Vf: a, x3: c });
                  v = Goc(q, t, v, e, f, m);
                }
                a: {
                  var w = q.lf,
                    z = new Ppc(q),
                    A = new Opc(q);
                  switch (w.type) {
                    case "poll":
                      r = q.lf;
                      w = q.Ck;
                      q = z.Rt;
                      z = z.Vt;
                      var C = A.border,
                        B = C.H5a,
                        E = r.direction,
                        I = r.fields.first()?.value;
                      if (I && I.type === "select" && q && z) {
                        A = M5(q);
                        var L = M5(z),
                          M = I.options.first()?.value.label.text,
                          O =
                            M?.zg("font-size")["font-size"]?.values().next()
                              .value || 16,
                          R =
                            M?.zg("font-family")["font-family"].values().next()
                              .value || r.Fda,
                          T =
                            M?.zg("font-weight")["font-weight"].values().next()
                              .value || __c.If.Sb["font-weight"];
                        M =
                          M?.zg("font-style")["font-style"].values().next()
                            .value || __c.If.Sb["font-style"];
                        O *= Rpc;
                        var Y = t.Axa(),
                          Z = t.Rxa();
                        v = {
                          minWidth: r.minWidth,
                          minHeight: r.minHeight,
                          ...N5({
                            layout: "vertical",
                            direction: P5(E),
                            background: z,
                            O: B,
                            border: C,
                            cells: [
                              r.vG
                                ? void 0
                                : Moc({
                                    direction: E,
                                    text: I.label,
                                    background: q,
                                  }),
                              Qoc({
                                lpb: t,
                                xQ: Loc(v),
                                options: I.options,
                                xG: w.xG,
                                My: w.My,
                                ye: Z.ye,
                                TCa: I.O,
                                lm: A,
                                Al: L,
                                fontFamily: R,
                                direction: E,
                                h9: Y,
                                Zs: I.id,
                                messages: p,
                                Koa: n,
                              }),
                              ...Woc({
                                direction: E,
                                messages: p,
                                tyb: t.Pqb(I.id),
                                status: t.OW(),
                                Sc: w.Sc,
                                backgroundColor: L,
                                fontSize: O,
                                fontFamily: R,
                                fontWeight: T,
                                fontStyle: M,
                              }),
                            ].filter(nb),
                          }),
                          ref: n.root,
                        };
                      } else
                        v = {
                          ...N5({
                            layout: "vertical",
                            direction: P5(E),
                            background: { type: "color", color: "#ffffff" },
                            cells: [],
                          }),
                          minWidth: r.minWidth,
                          minHeight: r.minHeight,
                        };
                      break a;
                    case "quiz":
                      w = q.lf;
                      q = q.Ck;
                      var ba = z.Rt;
                      z = z.Vt;
                      I = A.border;
                      M = I.H5a;
                      O = w.direction;
                      var ia = w.fields.first()?.value;
                      if (ia && ia.type === "select" && ba && z) {
                        A = M5(ba);
                        L = M5(z);
                        R = t.OW();
                        T = q.Sc.status === 1 && q.Sc;
                        C = t.Axa() && T && R === 0;
                        Y = ia.options.first()?.value.label.text;
                        var qa =
                          Y?.zg("font-size")["font-size"]?.values().next()
                            .value || 16;
                        B =
                          Y?.zg("font-family")["font-family"].values().next()
                            .value || w.Fda;
                        E =
                          Y?.zg("font-weight")["font-weight"].values().next()
                            .value || __c.If.Sb["font-weight"];
                        Y =
                          Y?.zg("font-style")["font-style"].values().next()
                            .value || __c.If.Sb["font-style"];
                        Z = qa * Qpc;
                        qa *= Rpc;
                        t = t.Rxa();
                        var pa = w.minWidth,
                          la = w.minHeight,
                          za = P5(O);
                        ba = w.vG
                          ? void 0
                          : Moc({
                              direction: O,
                              text: ia.label,
                              background: ba,
                            });
                        ia = apc({
                          xQ: Loc(v),
                          direction: O,
                          options: ia.options,
                          Sc: q.Sc,
                          xG: q.xG,
                          My: q.My,
                          ye: t.ye,
                          TCa: ia.O,
                          Al: L,
                          h9: C,
                          Koa: n,
                          context: r,
                        });
                        v = v
                          ? {
                              submit: v.submit,
                              jBa: v.jBa,
                              kBa: v.kBa,
                              iBa: v.iBa,
                              lBa: v.lBa,
                            }
                          : void 0;
                        v = {
                          minWidth: pa,
                          minHeight: la,
                          ...N5({
                            layout: "vertical",
                            direction: za,
                            background: z,
                            O: M,
                            border: I,
                            cells: [
                              ba,
                              ia,
                              ...cpc({
                                xQ: v,
                                direction: O,
                                messages: p,
                                Fw: w.footer.label,
                                lm: A,
                                status: R,
                                h9: C && r.mode !== "edit",
                                Sc: T ? T : void 0,
                                ye: t.ye,
                                backgroundColor: L,
                                RS: q.RS,
                                S3: { label: Z, message: qa },
                                fontFamily: B,
                                fontWeight: E,
                                fontStyle: Y,
                              }),
                            ].filter(nb),
                          }),
                          ref: n.root,
                        };
                      } else
                        v = {
                          ...N5({
                            layout: "vertical",
                            direction: P5(O),
                            background: { type: "color", color: "#ffffff" },
                            cells: [],
                          }),
                          minWidth: w.minWidth,
                          minHeight: w.minHeight,
                        };
                      break a;
                    default:
                      throw new D(w.type);
                  }
                }
                return v;
              },
              Koa: n,
            };
          },
        };
      }.call(self, self._5f74ec40302898c5a55451c9fbd04240));
    },
  },
]);
//# sourceMappingURL=sourcemaps/60609d67396141d3.js.map
