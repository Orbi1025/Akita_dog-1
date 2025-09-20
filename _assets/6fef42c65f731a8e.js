(self["webpackChunk_canva_web"] = self["webpackChunk_canva_web"] || []).push([
  [66905],
  {
    /***/ 975058: function (_, __, __webpack_require__) {
      __webpack_require__.n_x = __webpack_require__.n;
      const __web_req__ = __webpack_require__;
      __web_req__(905716);
      self._5f74ec40302898c5a55451c9fbd04240 =
        self._5f74ec40302898c5a55451c9fbd04240 || {};
      (function (__c) {
        var xCc = function (a) {
            return d8(function (b) {
              return e8("div", {
                className: "gcYy_A",
                children: e8(__c.HB, {
                  w3: "both",
                  children: ({ width: c, height: d }) =>
                    e8(a.Ji, {
                      fill: b.fill,
                      Nb: c,
                      zc: d,
                      ce: void 0,
                      animation: void 0,
                      bE: !1,
                      da: void 0,
                      ha: void 0,
                    }),
                }),
              });
            });
          },
          yCc = function (a) {
            a.FN && (a.FN(), (a.FN = null));
            const b = a.props.fmb;
            b.forEach((c) => {
              window.addEventListener(c, a.yMa);
            });
            a.FN = () => {
              b.forEach((c) => {
                window.removeEventListener(c, a.yMa);
              });
            };
          },
          FCc = function (a) {
            const b = zCc((d) => {
                const e = ACc(() => {
                  a.Ws.o0(d.url);
                }, [d.url]);
                return e8(__c.jv, {
                  url: d.url,
                  store: a.Tw,
                  ep: a.Ws,
                  Cz: a.Cz,
                  Na: a.Na,
                  aS: a.uf > 10,
                  Im: d.Im ?? !1,
                  Bg: e,
                  yv: d.yv,
                  zL: d.zL,
                });
              }),
              c = zCc(function (d) {
                const [{ store: e, Ca: f }] = BCc(() => {
                  const g = new CCc(),
                    h = new DCc(g);
                  return { store: g, Ca: h };
                });
                return e8(ECc, {
                  b7: f.reset,
                  children: e8(__c.cPb, {
                    Wsb: f,
                    Xsb: e,
                    eYa: a.Tw.contains(d.url),
                    children: ({ Im: g }) => e8(b, { ...d, Im: g }),
                  }),
                });
              });
            return zCc((d) =>
              d.Thb && a.Na?.status !== 2 ? e8(c, { ...d }) : e8(b, { ...d })
            );
          },
          HCc = function (a) {
            const b = a.Ra;
            return d8(function (c) {
              var d = c.Ywa,
                e = c.fontWeight;
              const f = c.msa,
                g = c.Fc,
                h = c.Cra,
                k = c.ariaInvalid,
                l = c.className,
                m = c.disabled,
                n = c.id,
                p = c.name,
                q = c.onBlur,
                r = c.onFocus,
                t = c.onChange,
                v = c.placeholder,
                w = c.D3a,
                z = c.type,
                A = c.value;
              var C = c.Oi;
              c = c.borderRadius;
              var B;
              if ((B = d))
                (d = __c.jo(d)), b.Ez([d], { zt: !0 }), (B = __c.Fo(b, d));
              e = {
                color: C,
                borderRadius: c,
                fontFamily: B,
                fontWeight: e && __c.ro(e),
              };
              return e8("div", {
                className: "BHOPhg",
                children: e8("input", {
                  "aria-describedby": g,
                  "aria-errormessage": h,
                  "aria-invalid": k,
                  className: GCc(l, ["_6Yde8g", w && "sR0SUA"]),
                  disabled: m,
                  id: n,
                  name: p,
                  onBlur: q,
                  onFocus: r,
                  onChange: t,
                  placeholder: v,
                  type: z,
                  value: A,
                  style: {
                    ...e,
                    "--srRiKA": w,
                    "--oiOG3Q": f?.default,
                    "--oGOcXA": f?.wG,
                    "--UBd2ow": f?.focus,
                  },
                }),
              });
            });
          },
          ICc = function () {
            return () => e8(__c.sT, { mediaType: "embed", failed: !1 });
          },
          JCc = function (a) {
            return d8(function (b) {
              return e8("div", {
                className: "oUJNhQ",
                children: e8(a.Le, {
                  text: b.text,
                  animation: void 0,
                  Zc: "middle",
                  na: void 0,
                  Za: void 0,
                  Je: [],
                  writingMode: 1,
                }),
              });
            });
          },
          KCc = function (a) {
            const b = a.Ra;
            return d8(function (c) {
              var d = c.Ywa,
                e = c.fontWeight;
              const f = c.msa,
                g = c.Fc,
                h = c.Cra,
                k = c.ariaInvalid,
                l = c.className,
                m = c.disabled,
                n = c.id,
                p = c.name,
                q = c.onBlur,
                r = c.onFocus,
                t = c.onChange,
                v = c.placeholder,
                w = c.D3a,
                z = c.rows,
                A = c.value;
              var C = c.Oi;
              c = c.borderRadius;
              var B;
              if ((B = d))
                (d = __c.jo(d)), b.Ez([d], { zt: !0 }), (B = __c.Fo(b, d));
              e = {
                color: C,
                borderRadius: c,
                fontFamily: B,
                fontWeight: e && __c.ro(e),
              };
              return e8("div", {
                className: "BHOPhg",
                children: e8("textarea", {
                  "aria-describedby": g,
                  "aria-errormessage": h,
                  "aria-invalid": k,
                  className: GCc(l, ["_6Yde8g", w && "sR0SUA"]),
                  disabled: m,
                  id: n,
                  name: p,
                  onBlur: q,
                  onFocus: r,
                  onChange: t,
                  placeholder: v,
                  rows: z,
                  style: {
                    ...e,
                    "--srRiKA": w,
                    "--oiOG3Q": f?.default,
                    "--oGOcXA": f?.wG,
                    "--UBd2ow": f?.focus,
                  },
                  value: A,
                }),
              });
            });
          },
          e8 = __webpack_require__(31968).jsx;
        var f8 = __webpack_require__(845212),
          LCc = f8.Component,
          d8 = f8.memo,
          ACc = f8.useCallback,
          BCc = f8.useState;
        var MCc = __webpack_require__(186901),
          NCc = MCc.sH,
          OCc = MCc.XI;
        var zCc = __webpack_require__(647370).PA;
        var PCc = __webpack_require__,
          QCc = PCc(208463),
          GCc = PCc.n_x(QCc)();
        var RCc = class extends LCc {
          render() {
            const {
              children: a,
              component: b = "div",
              pCb: c,
              Bja: d,
            } = this.props;
            let e = {};
            d &&
              (e = c.reduce((f, g) => {
                f[g] = this.Efb;
                return f;
              }, {}));
            return e8(b, { className: "_kI3Pw", ...e, children: a });
          }
          componentDidMount() {
            this.props.Bja && yCc(this);
          }
          componentDidUpdate() {
            this.props.Bja && yCc(this);
          }
          componentWillUnmount() {
            this.FN && (this.FN(), (this.FN = null));
          }
          constructor(...a) {
            super(...a);
            this.Jqa = this.FN = null;
            this.Efb = (b) => {
              this.Jqa = b.nativeEvent;
            };
            this.yMa = (b) => {
              const c = this.props.Bja,
                d = this.Jqa === b;
              c && !d && c(b);
              this.Jqa = null;
            };
          }
        };
        var ECc = (a) =>
          e8(RCc, {
            pCb: ["onMouseDown", "onTouchStart"],
            fmb: ["mousedown", "touchstart"],
            Bja: a.b7,
            children: a.children,
          });
        var CCc = class {
            static D(a) {
              __c.N(a, { Im: NCc.ref });
            }
            constructor() {
              this.Im = (CCc.D(this), !0);
            }
          },
          DCc = class {
            static D(a) {
              __c.N(a, {
                onDoubleClick: OCc.bound,
                onTouchEnd: OCc.bound,
                reset: OCc.bound,
              });
            }
            onDoubleClick() {
              this.store.Im = !1;
            }
            onTouchEnd(a) {
              a.touches.length > 0 ||
                (this.WS
                  ? (window.clearTimeout(this.WS),
                    (this.WS = void 0),
                    (this.store.Im = !1))
                  : (this.WS = window.setTimeout(
                      () => (this.WS = void 0),
                      300
                    )));
            }
            reset() {
              this.store.Im = !0;
            }
            iV() {
              this.WS && window.clearTimeout(this.WS);
            }
            constructor(a) {
              this.store = a;
              this.WS = (DCc.D(this), void 0);
            }
          };
        __c.aF = {};
        __c.aF.vQb = FCc;
        __c.aF.yQb = ICc;
        __c.aF.Rsb = function (a) {
          const b = FCc({
              uf: a.uf,
              Cz: (h, k) =>
                a.J.error(h, {
                  Qe: "widget: ",
                  extra: new Map(Object.entries(k)),
                }),
              Tw: a.Tw,
              Ws: a.Ws,
              Na: a.Na,
            }),
            c = ICc(),
            d = JCc({ Le: a.Le }),
            e = xCc({ Ji: a.Kf }),
            f = HCc({ Ra: a.Ra }),
            g = KCc({ Ra: a.Ra });
          return { Jpa: b, KMb: c, fg: d, nn: e, yaa: f, eqa: g };
        };
      }.call(self, self._5f74ec40302898c5a55451c9fbd04240));
    },
  },
]);
//# sourceMappingURL=sourcemaps/6fef42c65f731a8e.js.map
