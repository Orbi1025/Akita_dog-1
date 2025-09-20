(self["webpackChunk_canva_web"] = self["webpackChunk_canva_web"] || []).push([
  [41990],
  {
    /***/ 796909: function (_, __, __webpack_require__) {
      __webpack_require__.n_x = __webpack_require__.n;
      const __web_req__ = __webpack_require__;
      __web_req__(905716);
      __web_req__(131662);
      self._5f74ec40302898c5a55451c9fbd04240 =
        self._5f74ec40302898c5a55451c9fbd04240 || {};
      (function (__c) {
        var D = __c.D;
        var x = __c.x;
        var hsc = function (a, b) {
            var c = __c.Qm(b);
            a = a.Kc.gda(b);
            b = c.qa;
            const d = c.br;
            c = c.br;
            try {
              a.Kd(b, d, c, !0, !1);
            } finally {
              a.destroy();
            }
          },
          jsc = function (a, b, c, d) {
            c = new isc(c, d);
            x(a.count() === 1, "Only single widget root element is supported");
            a = a.first();
            x(
              a != null && a.type === "layout",
              `Unexpected widget root found: ${a?.type}`
            );
            c.Qoa(a, b);
          },
          lsc = function (a) {
            return {
              ...__c.jzb,
              ...t6,
              top: 0,
              left: 0,
              width: a.width,
              height: a.height,
              viewBox: {
                top: 0,
                left: 0,
                width: a.Loa.width,
                height: a.Loa.height,
              },
              gb: a.gb.map(ksc),
            };
          },
          msc = function (a) {
            switch (a.lE) {
              case 0:
                var b = __c.Si.wb().attrs({
                  "font-size": a.fontSize,
                  leading: a.lineHeight ? a.lineHeight * 1e3 : void 0,
                  "text-align": a.textAlign || "start",
                  "font-weight": a.fontWeight,
                  "font-family": a.fontFamily,
                  "font-kerning": "normal",
                  "font-feature-liga": "on",
                  "font-feature-clig": "on",
                  "font-feature-calt": "on",
                  direction: a.direction,
                });
                a.color && b.Ne("color", a.color);
                b = b
                  .nb(a.text.endsWith("\n") ? a.text : `${a.text}\n`)
                  .build();
                return {
                  ...__c.yG,
                  ...u6,
                  ...t6,
                  wa: a.wa ?? 0,
                  text: b,
                  Lf: 2,
                };
              case 1:
                return (
                  (b = a.text), { ...__c.yG, ...u6, ...t6, text: b, Lf: 2 }
                );
              default:
                throw new D(a);
            }
          },
          rsc = function ({ content: a, fill: b, border: c, O: d }) {
            b = { ...__c.Vyb, fill: nsc(b), border: osc(c), O: psc(d) };
            switch (a.type) {
              case "shape":
                return { ...b, element: lsc(a) };
              case "text":
                return { ...b, element: msc(a) };
              case "layout":
                return { ...b, element: qsc(a) };
              default:
                throw new D(a);
            }
          },
          qsc = function ({
            cells: a,
            border: b,
            fill: c,
            O: d,
            gridTemplateColumns: e,
            gridTemplateRows: f,
            columnGap: g,
            rowGap: h,
          }) {
            return {
              ...__c.Wyb,
              ...u6,
              ...t6,
              I: u6.width,
              P: u6.height,
              fill: nsc(c),
              border: osc(b),
              direction: 1,
              O: psc(d),
              cells: new Map(a.map((k) => [k.id, rsc(k)])),
              behavior: {
                rules: [
                  {
                    nh: void 0,
                    grid: {
                      gridTemplateColumns: e,
                      gridTemplateRows: f,
                      columnGap: g ?? 0,
                      rowGap: h ?? 0,
                      Ch: ssc(a),
                    },
                  },
                ],
              },
              Lc: void 0,
            };
          },
          ssc = function (a) {
            return new Map(a.map((b) => [b.id, tsc(b)]));
          },
          tsc = function (a) {
            const b = a.placement.padding;
            return {
              ...__c.ZCa,
              ...a.placement,
              alignSelf: "center",
              padding: {
                ...__c.KR,
                ...(b != null ? (typeof b === "number" ? { all: b } : b) : {}),
              },
            };
          },
          osc = function (a) {
            const b = a?.color ?? "#000000";
            return {
              ...__c.Pw,
              all: a
                ? { ...__c.zR, weight: a.weight ?? 1, color: b, ke: !0 }
                : void 0,
            };
          },
          psc = function (a) {
            return {
              ...__c.JR,
              ...(a != null ? (typeof a === "number" ? { all: a } : a) : {}),
            };
          },
          ksc = function (a) {
            return {
              ...__c.kzb,
              ...a,
              fill: nsc(a.fill),
              stroke: usc(a.stroke),
            };
          },
          usc = function (a) {
            return a ? { ...__c.zR, color: a.color, weight: a.weight } : void 0;
          },
          nsc = function (a) {
            const b = { ...__c.fD, wa: a?.wa ?? 0 };
            switch (a?.type) {
              case "color":
                return { ...b, color: a.color };
              case "gradient":
                return { ...b, Ua: a.Ua };
              case void 0:
                return b;
              default:
                throw new D(a);
            }
          },
          Bsc = function (a, b) {
            const c = new Map(b.cells.map((d) => [d.id, d]));
            vsc(
              a.cells,
              c,
              (d, e) => {
                let f = !1;
                wsc(d.element, e.content, () => {
                  a.cells.delete(e.id);
                  a.cells.set(e.id, rsc(e));
                  f = !0;
                });
                f ||
                  (xsc(d.fill, e.fill), ysc(d.border, e.border), zsc(d.O, e.O));
              },
              (d) => rsc(d)
            );
            Asc(a.behavior, b, c);
            xsc(a.fill, b.fill);
            zsc(a.O, b.O);
            ysc(a.border, b.border);
            a.wa = b.wa ?? 0;
          },
          Asc = function (a, b, c) {
            Csc(
              a.rules,
              [b],
              (d) => {
                Dsc(d.grid.gridTemplateColumns, b.gridTemplateColumns) ||
                  (d.grid.gridTemplateColumns = b.gridTemplateColumns);
                Dsc(d.grid.gridTemplateRows, b.gridTemplateRows) ||
                  (d.grid.gridTemplateRows = b.gridTemplateRows);
                d.grid.columnGap = b.columnGap ?? 0;
                d.grid.rowGap = b.rowGap ?? 0;
                vsc(
                  d.grid.Ch,
                  c,
                  (e, f) => {
                    const g = f.placement.padding,
                      h = f.placement.gridColumnEnd,
                      k = f.placement.gridRowStart,
                      l = f.placement.gridRowEnd,
                      m = f.placement.alignSelf;
                    e.gridColumnStart = f.placement.gridColumnStart;
                    e.gridColumnEnd = h;
                    e.gridRowStart = k;
                    e.gridRowEnd = l;
                    typeof g === "number" && e.padding.all !== g
                      ? (e.padding.all = g)
                      : typeof g !== "number" &&
                        ((e.padding.ra = g?.ra),
                        (e.padding.Ga = g?.Ga),
                        (e.padding.ta = g?.ta),
                        (e.padding.Ma = g?.Ma));
                    e.alignSelf = m;
                  },
                  (e) => tsc(e)
                );
              },
              (d) => ({
                nh: void 0,
                grid: {
                  gridTemplateColumns: b.gridTemplateColumns,
                  gridTemplateRows: b.gridTemplateRows,
                  columnGap: b.columnGap ?? 0,
                  rowGap: b.rowGap ?? 0,
                  Ch: ssc(d.cells),
                },
              })
            );
          },
          Esc = function (a, b) {
            Csc(
              a.gb,
              b.gb,
              (e, f) => {
                e.d = f.d;
                xsc(e.fill, f.fill);
                e.stroke.ref && f.stroke
                  ? ((e = e.stroke.ref),
                    (f = f.stroke),
                    (e.color = f.color),
                    (e.weight = f.weight))
                  : e.stroke.set(usc(f.stroke));
              },
              (e) => ksc(e)
            );
            const { viewBox: c, width: d } = lsc(b);
            a.width = d;
            __c.Qm(a.viewBox).equals(__c.Qm(c)) || (a.viewBox = c);
          },
          wsc = function (a, b, c) {
            switch (b.type) {
              case "shape":
                a.type === "shape" ? Esc(a, b) : c();
                break;
              case "text":
                (a.type === "text" &&
                  __c.Si.domain.fc(__c.Si.snapshot(a.text), msc(b).text)) ||
                  c();
                break;
              case "layout":
                a.type === "layout" ? Bsc(a, b) : c();
                break;
              default:
                throw new D(b);
            }
          },
          vsc = function (a, b, c, d) {
            const e = new Set(a.keys());
            for (const [f, g] of b)
              (b = a.get(f)) ? (e.delete(f), c(b, g)) : a.set(f, d(g));
            e.forEach((f) => a.delete(f));
          },
          Csc = function (a, b, c, d) {
            const e = a.toArray();
            for (let f = 0; f < Math.max(e.length, b.length); f++)
              if (f < e.length && f < b.length) c(e[f], b[f]);
              else if (f < e.length && f >= b.length) a.delete(e[f]);
              else if (f >= e.length && f < b.length) {
                const g = d(b[f]);
                a.append(g);
              }
          },
          xsc = function (a, b) {
            switch (b?.type) {
              case "color":
                a.color = b.color;
                a.Ua.set(void 0);
                a.wa = b.wa ?? 0;
                break;
              case "gradient":
                if (a.Ua.ref && __c.Ncb.domain.fc(a.Ua.ref, b.Ua)) break;
                a.color = void 0;
                a.Ua.set(b.Ua);
                a.wa = b.wa ?? 0;
                break;
              default:
                (a.color = void 0), a.Ua.set(void 0);
            }
          },
          zsc = function (a, b) {
            b = psc(b);
            a.all = b.all;
            a.QB = b.QB;
            a.OB = b.OB;
            a.PB = b.PB;
            a.NB = b.NB;
          },
          ysc = function (a, b) {
            b = osc(b).all;
            var c;
            if ((c = b))
              (c = a.all.ref),
                (c = !(c && b
                  ? __c.Qw.domain.fc(__c.Qw.snapshot(c), b)
                  : !c && !b));
            c && a.all.set(b);
          },
          Dsc = function (a, b) {
            return a.length === b.length && a.every((c) => b.includes(c));
          },
          Gsc = function (a, b, c, d) {
            let e = a.Y4a.get(b);
            if (e) return e;
            e = {
              kz: new Fsc(c.Ym, b, d, c.Qya),
              FNa: void 0,
              oZa: void 0,
              J0a: __c.tW.mode,
            };
            a.Y4a.set(b, e);
            return e;
          },
          Isc = function (a, b, c, d, e) {
            e = Gsc(a, c, b, e);
            const f = e.kz,
              g = e.oZa,
              h = e.FNa,
              k = e.J0a;
            c = __c.FQ.snapshot(c);
            const l = a.qB.Xxa?.(d) || __c.tW;
            (f.Ck === g && Hsc.structural(c, h) && l.mode === k) ||
              ((e.FNa = c),
              (e.oZa = f.Ck),
              (e.J0a = l.mode),
              (b = b.render(f, l)),
              a.Dxb.update(d, b),
              jsc(
                d,
                b,
                (m, n) => a.vT.hza.set(m, n),
                (m, n, p) => a.vT.refs.set(m, { ref: n, key: p })
              ));
          },
          Lsc = function (a, b) {
            const c = [],
              d = () => c.forEach((e) => e());
            c.push(a.yyb());
            c.push(
              Jsc(
                () => {
                  a: {
                    var e = new Ksc();
                    for (const f of b)
                      if ((e.yT(f), e.Owa)) {
                        e = e.Owa;
                        break a;
                      }
                    e = void 0;
                  }
                  return e && (a.cc.isLoaded(e) || a.hAa.has(e));
                },
                (e) => {
                  if (e) {
                    for (const f of b) x(f.type === "layout"), hsc(a.xl, f);
                    d();
                  }
                }
              )
            );
            return d;
          },
          Msc = function (a, b) {
            return {
              hz: ({ ee: c }) => {
                const { kz: d } = Gsc(a.renderer, c, b, a.$K),
                  e = __c.qub.create([]),
                  f = [];
                f.push(Lsc(a.Wob, e));
                f.push(
                  Jsc(
                    () => [a.qB.Xxa?.(e), __c.FQ.snapshot(c), d.Ck],
                    () => {
                      Isc(a.renderer, b, c, e, a.$K);
                    },
                    { fireImmediately: !0, equals: Hsc.structural }
                  )
                );
                const g = b.TBa?.({ kz: d });
                g && f.push(g);
                return {
                  Ja: e,
                  gm: () => {
                    f.forEach((h) => h());
                  },
                };
              },
            };
          },
          v6 = __webpack_require__(186901),
          Nsc = v6.EW,
          Osc = v6.h5,
          Hsc = v6.m3,
          Jsc = v6.mJ,
          w6 = v6.sH;
        var Psc = class {
          static D(a) {
            __c.N(a, { jAb: w6.ref, qqb: w6.ref });
          }
          constructor() {
            this.Xxa = (Psc.D(this), void 0);
          }
        };
        var Qsc = class {
            constructor() {
              this.sources = new WeakMap();
            }
          },
          Fsc = class {
            static D(a) {
              __c.N(a, { lf: Nsc });
            }
            get pZa() {
              var a = this.$K,
                b = this.ee,
                c = this.Qya;
              let d = a.sources.get(b);
              d || ((d = w6.box(c)), a.sources.set(b, d));
              return d;
            }
            get Ck() {
              return this.pZa.get();
            }
            get lf() {
              return this.Ym.fu({ type: "dict", value: this.ee });
            }
            Zm(a) {
              this.pZa.set(
                a instanceof Function
                  ? { ...this.Ck, ...a() }
                  : { ...this.Ck, ...a }
              );
            }
            constructor(a, b, c, d) {
              this.Ym = a;
              this.ee = b;
              this.$K = c;
              this.Qya = d;
              Fsc.D(this);
            }
          };
        var isc = class {
          caa(a, b) {
            this.M4a(a, b);
            b.ref && this.vEa(a, b.ref, b.key);
          }
          C_(a, b) {
            b.ref && this.vEa(a.text, b.ref, b.key);
          }
          mKa(a, b) {
            switch (b.content.type) {
              case "shape":
                x(a.element.type === "shape");
                this.caa(a.element, b.content);
                break;
              case "text":
                x(a.element.type === "text");
                this.C_(a.element, b.content);
                break;
              case "layout":
                x(a.element.type === "layout");
                this.Qoa(a.element, b.content);
                break;
              default:
                throw new D(b.content);
            }
          }
          Qoa(a, b) {
            this.M4a(a, b);
            b.ref && this.vEa(a, b.ref, b.key);
            for (const [c, d] of a.cells)
              (a = b.cells.find((e) => e.id === c)),
                x(!!d && !!a),
                this.mKa(d, a);
          }
          constructor(a, b) {
            this.M4a = a;
            this.vEa = b;
          }
        };
        var t6 = { locked: !0, Dj: __c.Tyb, Cg: !0 },
          u6 = { top: 0, left: 0, width: 1, height: 1 };
        var Rsc = class {
          constructor(a) {
            this.xl = a;
            this.update = (b, c) => {
              Csc(
                b,
                [c],
                (d, e) => {
                  switch (d.type) {
                    case "layout":
                      Bsc(d, e);
                      break;
                    default:
                      throw Error(`Not supported element type: ${d.type}`);
                  }
                },
                (d) => {
                  a: switch (d.type) {
                    case "layout":
                      d = {
                        ...qsc(d),
                        ...t6,
                        width: d.minWidth,
                        height: d.minHeight,
                        I: d.minWidth,
                        P: d.minHeight,
                      };
                      break a;
                    default:
                      throw new D(d.type);
                  }
                  return d;
                }
              );
              for (const d of b)
                x(d.type === "layout"),
                  (d.width = c.minWidth),
                  (d.height = c.minHeight),
                  (d.I = c.minWidth),
                  (d.P = c.minHeight),
                  c.direction && (d.direction = c.direction),
                  hsc(this.xl, d);
            };
          }
        };
        var Ssc = class {
          constructor(a, b, c) {
            this.Dxb = a;
            this.vT = b;
            this.qB = c;
            this.Y4a = new WeakMap();
          }
        };
        var Tsc = class {
            static D(a) {
              __c.N(a, { hAa: w6.shallow });
            }
            constructor(a, b) {
              this.cc = a;
              this.xl = b;
              this.hAa = (Tsc.D(this), new Set());
              this.$wa = new Set();
              this.yyb = () => {
                this.Bfa ||
                  (this.Bfa = __c.Mna(this.cc).subscribe((d) => {
                    Osc(() => {
                      this.hAa.add(d.id);
                    });
                  }));
                const c = Symbol();
                this.$wa.add(c);
                return () => {
                  this.$wa.delete(c);
                  this.$wa.size <= 0 &&
                    this.Bfa &&
                    (this.Bfa.unsubscribe(), (this.Bfa = void 0));
                };
              };
            }
          },
          Ksc = class extends __c.qp {
            yT(a, b) {
              this.Owa || super.yT(a, b);
            }
            C_(a) {
              this.Owa =
                (a = a.text
                  .zg("font-family")
                  ["font-family"].values()
                  .next().value) && __c.jo(a).id;
            }
          };
        var Usc = !1,
          Vsc = class {
            register(a, b) {
              this.Kw.has(a) ||
                (this.Kw.set(a, b),
                this.gea || Usc || (__c.GQ.set(a, Msc(this, b)), (Usc = !0)));
            }
            get(a) {
              return this.Kw.get(a);
            }
            constructor(a, b, c, d, e, f = __c.uc("f576b13d", !1)) {
              this.renderer = a;
              this.$K = b;
              this.qB = c;
              this.cc = d;
              this.xl = e;
              this.gea = f;
              this.Kw = new Map();
              this.Wob = new Tsc(this.cc, this.xl);
            }
          };
        var Wsc = class {
            constructor() {
              this.hza = new __c.Ny();
              this.refs = new __c.Ny();
            }
          },
          Xsc = class {
            getContext(a) {
              return this.vT.refs.get(a);
            }
            SP(a) {
              return this.vT.hza.get(a);
            }
            constructor(a, b, c) {
              this.vT = a;
              this.$K = b;
              this.renderer = c;
            }
          };
        __c.OQa = {
          Usb: function (a) {
            const b = new Psc(),
              c = new Wsc(),
              d = new Ssc(new Rsc(a.xl), c, b),
              e = new Qsc();
            a = new Vsc(d, e, b, a.cc, a.xl, a.gea);
            return { qB: b, a8b: new Xsc(c, e, d), faa: a, vT: c };
          },
        };
      }.call(self, self._5f74ec40302898c5a55451c9fbd04240));
    },
  },
]);
//# sourceMappingURL=sourcemaps/1d6d18845ce7389c.js.map
