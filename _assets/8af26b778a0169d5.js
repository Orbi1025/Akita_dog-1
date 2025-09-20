(self["webpackChunk_canva_web"] = self["webpackChunk_canva_web"] || []).push([
  [36455],
  {
    /***/ 894240: function (_, __, __webpack_require__) {
      __webpack_require__.n_x = __webpack_require__.n;
      const __web_req__ = __webpack_require__;
      __web_req__(905716);
      __web_req__(923332);
      self._5f74ec40302898c5a55451c9fbd04240 =
        self._5f74ec40302898c5a55451c9fbd04240 || {};
      (function (__c) {
        var gI = __c.gI;
        var V = __c.V;
        var H = __c.H;
        var FZ = __c.FZ;
        var zZ = __c.zZ;
        var Ba = __c.Ba;
        var Zsc,
          btc,
          dtc,
          ctc,
          ftc,
          itc,
          htc,
          ktc,
          ntc,
          qtc,
          utc,
          xtc,
          Atc,
          stc,
          Dtc,
          Ftc;
        __c.x6 = function (a) {
          return { type: 1, Component: a };
        };
        __c.y6 = function () {
          return (a) => a;
        };
        __c.z6 = function (...a) {
          return { kind: 11, HSa: { type: void 0 }, jg: a };
        };
        Zsc = function ({ Lla: a }) {
          return { mS: new Ysc(a, []) };
        };
        __c.A6 = function () {
          return (a) => a;
        };
        __c.B6 = function (a) {
          return () => ({ ...$sc, ...a });
        };
        btc = function (a) {
          a.be = setTimeout(() => {
            a.P4a(new atc());
          }, 500);
        };
        dtc = async function (a, b) {
          const c = b.requestId,
            d = b.path;
          b = b.payload;
          const e = a.VY.get(d);
          if (e) {
            a.C6.Y0.send({ type: "ack", requestId: c });
            var f = setInterval(
              () => a.C6.Y0.send({ type: "ack", requestId: c }),
              9e3
            );
            try {
              var g = await e(b);
              clearInterval(f);
              a.C6.Y0.send({ type: "response", requestId: c, payload: g });
            } catch (k) {
              clearInterval(f);
              g = "internal_error";
              b =
                "Something went wrong on our end, if this issue persists please contact us.";
              if (k instanceof C6) {
                var h = k;
                k.code === "internal_error"
                  ? a.J.Ib(k, {
                      Qe: "Internal error in comms handler",
                      tags: new Map([
                        ["type", "request"],
                        ["path", d],
                      ]),
                    })
                  : ((g = k.code), (b = k.oCb));
              } else
                a.cDb
                  ? a.J.Ib(k, {
                      Qe: "Unexpected error type thrown from comms handler",
                      tags: new Map([
                        ["type", "request"],
                        ["path", d],
                      ]),
                    })
                  : a.Clb.error(k);
              g = ctc(a.C6, c, g, b);
              g.ok ||
                a.J.TO(g.error, {
                  Qe: "unable to send error response",
                  tags: new Map([
                    ["type", "request"],
                    ["path", d],
                  ]),
                });
            }
            if (h != null)
              for (const k of a.Knb)
                try {
                  k(h);
                } catch (l) {
                  a.J.EI(l, { Qe: "Error executing errorObserver" });
                }
          } else
            (h = ctc(
              a.C6,
              c,
              "internal_error",
              `No request handler configured for path: "${d}".`
            )),
              h.ok ||
                a.J.TO(h.error, {
                  Qe: "unable to send error response",
                  tags: new Map([
                    ["type", "request"],
                    ["path", d],
                  ]),
                });
        };
        ctc = function (a, b, c, d) {
          return a.Y0.send({
            type: "error",
            requestId: b,
            code: c,
            message: d,
          });
        };
        ftc = function ({ src: a, srcdoc: b, sandbox: c }) {
          if (b.length !== 0 || !c.contains("allow-same-origin")) return etc;
          a = new URL(a).origin;
          return a === "null" ? etc : { LJa: a, p6a: a };
        };
        itc = async function (
          a,
          b,
          c,
          { addEventListener: d, removeEventListener: e } = window
        ) {
          const f = new gtc(6e4),
            g = ftc(c),
            h = c.contentWindow;
          if (!h)
            throw new C6({
              code: "internal_error",
              message: "contentWindow is missing from iFrame",
            });
          c = ({ data: k, source: l, origin: m }) => {
            k?.source?.startsWith("react-") ||
              (m !== g.LJa
                ? htc(m) ||
                  b.info("received message event from an unexpected origin", {
                    extra: new Map([
                      ["expected", g.LJa],
                      ["actual", m],
                    ]),
                  })
                : l !== h
                ? l !== window &&
                  b.info("source and content window do not match", {
                    extra: new Map([["data.source", k?.source]]),
                  })
                : ((l = k
                    ? k.source
                      ? k.source !== "iframe"
                        ? Ba("invalid source")
                        : (0, __c.ya)()
                      : Ba("'source' is missing in MessageEvent data object")
                    : Ba("missing 'data' field in MessageEvent")),
                  l.ok
                    ? (h.postMessage({ source: "parent" }, g.p6a, [a]),
                      f.resolve(void 0))
                    : b.DI(l.error, {
                        extra: new Map([["data.source", k?.source]]),
                      })));
          };
          d("message", c);
          try {
            await f.promise();
          } finally {
            e("message", c);
          }
        };
        htc = function (a) {
          return jtc.some((b) => a.endsWith(b));
        };
        ktc = function (a, b, c, d) {
          a.handle("SET_CONFIG", async (e) => {
            if (e === void 0)
              throw new C6({
                code: "internal_error",
                message: "SET_CONFIG: request cannot be undefined.",
              });
            e = b.xa(e);
            e = await c(e);
            if (d) return d.Ha(e);
          });
        };
        ntc = async function (a, b) {
          a = await a.Nca.request("RENDER_EDIT_PANEL", ltc.Ha(b));
          if (!a.ok)
            throw Error(
              `Encountered an error while sending ${"RENDER_EDIT_PANEL"} request: ${
                a.error
              }`
            );
          if (a.value == null)
            throw Error("RENDER_EDIT_PANEL: Result cannot be empty");
          return mtc.xa(a.value);
        };
        qtc = function (a, b) {
          ktc(a, otc, (c) => b.fya(c), ptc);
        };
        utc = async function (a, b) {
          a = await a.Nca.request("RENDER_ELEMENT", rtc.Ha(b));
          a = stc(a, "RENDER_ELEMENT");
          return ttc.xa(a);
        };
        xtc = async function (a, b) {
          a = await a.Nca.request("SET_CAPABILITY", vtc.Ha(b));
          a = stc(a, "SET_CAPABILITY");
          return wtc.xa(a);
        };
        Atc = function (a, b) {
          ktc(a, ytc, (c) => b.fya(c), ztc);
        };
        stc = function (a, b) {
          if (!a.ok)
            throw Error(
              `Encountered an error while sending ${b} request: ${a.error}`
            );
          if (a.value == null) throw Error(`${b}: Result cannot be empty`);
          return a.value;
        };
        Dtc = async function (a, b, c) {
          const { port1: d, port2: e } = new MessageChannel(),
            f = new Btc(d, b);
          await itc(e, b, a, window);
          a = new Ctc(f);
          c && Atc(f, c);
          return a;
        };
        Ftc = async function (a, b, c) {
          const { port1: d, port2: e } = new MessageChannel(),
            f = new Btc(d, b);
          await itc(e, b, a, window);
          a = new Etc(f);
          qtc(f, c);
          return a;
        };
        __c.eo.prototype.p5a = __c.da(5, function (a) {
          const b = this.Zlb;
          if (b == null)
            throw Error("Blueprint document resources are not supported");
          __c.jna(this, a, async () => {
            const c = await b.Sp(a);
            return __c.mna(
              this,
              c,
              __c.y(c.url),
              c.resources ? __c.co(c.resources) : __c.$R
            );
          });
        });
        __c.Bc.prototype.TO = __c.da(3, function (a, b) {
          this.console.error(...__c.Ac(this, "critical", a, b));
        });
        __c.IH.prototype.TO = __c.da(2, function (a, b) {
          this.Ou.TO(a, b);
          __c.GH(this, a, "critical", b);
        });
        var Gtc = __webpack_require__(186901),
          Htc = Gtc.mJ,
          Itc = Gtc.sH;
        var Jtc = __webpack_require__(31968).jsx;
        var Ysc = class {
          static D(a) {
            __c.N(a, { scenes: Itc.shallow });
          }
          constructor(a, b = []) {
            this.Lla = a;
            this.scenes = (Ysc.D(this), new Map());
            this.pending = new Map();
            for (const c of b) this.scenes.set(c.id, c);
          }
        };
        var Ktc = __c.A6()(() => ({
            mQb({ SU: a, iF: b, version: c }, d) {
              return {
                data: {
                  G: {
                    SU: a,
                    iF: b,
                    type: "instance",
                    domain: "brand",
                    version: c,
                    Zj: void 0,
                  },
                  document: {},
                },
                N: d,
              };
            },
            pQb({ SU: a, iF: b, type: c }, d) {
              return {
                data: {
                  G: {
                    SU: a,
                    iF: b,
                    type: c,
                    domain: "document",
                    version: 1,
                    Zj: void 0,
                  },
                  document: {},
                },
                N: d,
              };
            },
          })),
          Ltc = ({ data: a, T0: b }) => {
            b = b.Cob(a.SU);
            if (!b) throw Error(`Blueprint set ${a.SU} not found`);
            const c = b.Qy.get(a.iF);
            if (!c)
              throw Error(
                `Blueprint ${a.iF} not found in blueprint set ${a.iF}`
              );
            return a.type === "source"
              ? { Ja: c.elements }
              : {
                  Ja: new __c.DZ(() =>
                    c.elements.map((d) => {
                      d = __c.tG.snapshot(d);
                      return __c.tG.create({ ...d, locked: !0, Cg: !0 });
                    })
                  ),
                };
          },
          Mtc = ({ data: a, $N: b }) => {
            const c = Htc(
              () => a.version,
              (d) => {
                b?.p5a({ id: a.iF, version: d });
              },
              { fireImmediately: !0 }
            );
            return {
              Ja: new __c.DZ(() => {
                var d = b?.hVa({ id: a.iF, version: a.version });
                return d?.element
                  ? ((d = d.element),
                    __c.x(d.type === "group", "Expected group element"),
                    d.Ja.filter(__c.nb).map((e) =>
                      __c.tG.create({ ...e, locked: !0, Cg: !0 })
                    ))
                  : [];
              }),
              gm: c,
            };
          },
          Ntc = __c.y6()(({ Kk: { T0: a, $N: b } }) => ({
            G: {
              type: 0,
              hz: ({ G: c }) =>
                c.domain === "brand"
                  ? Mtc({ data: c, $N: b })
                  : Ltc({ data: c, T0: a }),
            },
            exports: {},
          }));
        var $sc = Object.freeze({
          document: Object.freeze({}),
          G: Object.freeze({}),
        });
        var Otc = __c.z6(
          zZ({ type: FZ(1, "anchoring"), value: (0, __c.HZ)(2, 1, 2, 3) }),
          zZ({ type: FZ(1, "boolean"), value: (0, __c.KZ)(2) }),
          zZ({ type: FZ(1, "block_alignment"), value: (0, __c.LZ)(2) }),
          zZ({ type: FZ(1, "non-negative-double"), value: (0, __c.LZ)(2) }),
          zZ({ type: FZ(1, "double"), value: (0, __c.LZ)(2) }),
          zZ({ type: FZ(1, "string"), value: (0, __c.JZ)(2) }),
          zZ({ type: FZ(1, "richtext2"), value: (0, __c.NZ)(2, "Richtext2") }),
          zZ({ type: FZ(1, "text_anchor"), value: (0, __c.HZ)(2, 1, 2, 3) }),
          zZ({ type: FZ(1, "text_effects"), value: (0, __c.JZ)(2) }),
          zZ({ type: FZ(1, "text_flow"), value: (0, __c.JZ)(2) }),
          zZ({ type: FZ(1, "image_fill"), value: (0, __c.NZ)(2, "Fill") }),
          zZ({ type: FZ(1, "video_fill"), value: (0, __c.NZ)(2, "Fill") })
        );
        var Ptc = __c.B6({
          G: __c.BZ({
            SU: (0, __c.GZ)(1),
            iF: (0, __c.GZ)(2),
            type: (0, __c.HZ)(3, "source", "instance"),
            domain: (0, __c.HZ)(4, "document", "brand"),
            version: (0, __c.IZ)(5, { min: 1 }),
            Zj: (0, __c.f8b)(6, Otc),
          }),
        });
        var Qtc = class {};
        var C6 = class extends Error {
          constructor(a) {
            a.code = a.code;
            const b = a.message.endsWith(".") ? "" : ".";
            super(`[${a.code}]:  ${a.message}${b}`.trim());
            this.code = a.code;
            this.name = "CanvaError";
            this.oCb = a.message;
            Object.setPrototypeOf(this, C6.prototype);
          }
        };
        var Rtc = class {
          constructor(a, b, c) {
            this.handler = a;
            this.port = b;
            this.J = c;
            this.send = (d) => {
              try {
                return this.port.postMessage(d), (0, __c.ya)();
              } catch (e) {
                return this.J.Ib(e), Ba(e);
              }
            };
            this.wzb = (d) => {
              this.J.Ib(d);
            };
            this.mCa = ({ data: d }) => {
              if (d)
                try {
                  this.handler.uCb(d);
                } catch (e) {
                  this.J.Ib(e);
                }
              else
                this.J.error(
                  new C6({
                    code: "internal_error",
                    message: "missing data in 'MessageEvent'",
                  })
                );
            };
            this.port.onmessage = this.mCa;
            this.port.onmessageerror = this.wzb;
          }
        };
        var atc = class extends Error {
            constructor() {
              super("[internal_error] Comms promise timed out.");
            }
          },
          gtc = class {
            reset(a) {
              a && (this.timeoutMs = a);
              this.setTimeout();
            }
            resolve(a) {
              clearTimeout(this.be);
              this.nDb(a);
            }
            reject(a) {
              clearTimeout(this.be);
              this.P4a(a);
            }
            promise() {
              return this.p;
            }
            setTimeout() {
              clearTimeout(this.be);
              this.be = setTimeout(() => {
                btc(this);
              }, Math.max(this.timeoutMs - 500, 500));
            }
            constructor(a) {
              this.timeoutMs = a;
              this.p = new Promise((b, c) => {
                this.nDb = b;
                this.P4a = c;
              });
              this.setTimeout();
            }
          };
        var Stc = class {
          request(a, b) {
            const c = this.s3a,
              d = new gtc(5e3),
              e = this.eDb(),
              f = (async function () {
                c.set(e, { path: a, gDb: d });
                try {
                  const g = await d.promise();
                  return (0, __c.ya)(g);
                } catch (g) {
                  return g instanceof atc
                    ? Ba(
                        new C6({
                          code: "internal_error",
                          message: `Comms promise timed out (${a}).`,
                        })
                      )
                    : Ba(g);
                } finally {
                  c.delete(e);
                }
              })();
            b = this.send(e, a, b);
            b.ok ||
              (this.J.Ib(b.error, {
                Qe: "unable to send request",
                tags: new Map([
                  ["type", "request"],
                  ["path", a],
                ]),
              }),
              d.reject(b.error));
            return f;
          }
          constructor(a, b) {
            this.send = a;
            this.J = b;
            this.eDb = __c.fo;
            this.s3a = new Map();
          }
        };
        var Ttc = class {
          handle(a, b) {
            if (this.VY.has(a))
              throw new C6({
                code: "internal_error",
                message: `Handler for '${a}' is already defined.`,
              });
            this.VY.set(a, b);
          }
          constructor(a, b) {
            var c = console;
            this.C6 = a;
            this.J = b;
            this.cDb = !0;
            this.Clb = c;
            this.VY = new Map();
            this.Knb = new Set();
          }
        };
        var Btc = class {
            constructor(a, b) {
              this.request = (c, d) => this.client.request(c, d);
              this.handle = (c, d) => this.VY.handle(c, d);
              a = new Utc(
                (c) => {
                  switch (c.type) {
                    case "ack":
                    case "error":
                    case "response":
                      var d = this.client;
                      const e = c.requestId,
                        f = c.type,
                        { path: g, gDb: h } = d.s3a.get(e) || {};
                      if (h)
                        switch (f) {
                          case "response":
                            h.resolve(c.payload);
                            break;
                          case "ack":
                            h.reset(2e4);
                            break;
                          case "error":
                            d.J.n0({
                              level: "info",
                              category: "sandbox_comms",
                              message: "Error response received",
                              data: { path: g ?? "unknown" },
                            });
                            h.reject(
                              new C6({ code: c.code, message: c.message })
                            );
                            break;
                          default:
                            throw new __c.D(c);
                        }
                      else
                        f !== "ack" &&
                          d.J.error(
                            "request has already been handled and resolved or was not sent from this client",
                            {
                              tags: new Map([
                                ["type", f],
                                ["requestId", `${e}`],
                              ]),
                            }
                          );
                      break;
                    case "request":
                      dtc(this.VY, c);
                      break;
                    default:
                      throw new __c.D(c);
                  }
                },
                a,
                b.kg("bus")
              );
              this.client = new Stc(a.TA, b.kg("client"));
              this.VY = new Ttc(a, b.kg("requestHandler"));
            }
          },
          Utc = class {
            constructor(a, b, c) {
              this.tga = a;
              this.TA = (d, e, f) =>
                this.Y0.send({
                  type: "request",
                  requestId: d,
                  path: e,
                  payload: f,
                });
              this.Hzb = (d) => {
                switch (d.type) {
                  case "ack":
                    this.tga({ type: "ack", requestId: d.requestId });
                    break;
                  case "error":
                    this.tga({
                      type: "error",
                      requestId: d.requestId,
                      code: d.code,
                      message: d.message,
                    });
                    break;
                  case "response":
                    this.tga({
                      type: "response",
                      requestId: d.requestId,
                      payload: d.payload,
                    });
                    break;
                  case "request":
                    this.tga({
                      type: "request",
                      requestId: d.requestId,
                      path: d.path,
                      payload: d.payload,
                    });
                    break;
                  default:
                    throw new __c.D(d);
                }
              };
              this.Y0 = new Rtc({ uCb: this.Hzb }, b, c);
            }
          };
        var etc = { LJa: "null", p6a: "*" };
        var jtc =
          "canva-dev.com canva-dev.cn canva-staging.com canva-staging.cn canva.com canva.cn canva-apps.com canva-apps.cn canva-apps-dev.com canva-apps-dev.cn canva-apps-staging.com canva-apps-staging.cn".split(
            " "
          );
        var ltc = H(() => ({ config: __c.W(1) }));
        var mtc = H(() => ({}));
        var otc = H(() => ({ config: V(1) }));
        var ptc = H(() => ({}));
        var Etc = class {
          constructor(a) {
            this.Nca = a;
          }
        };
        var rtc = H(() => ({ config: __c.W(1) }));
        var D6 = H(() => ({
          type: __c.F("A?", 1, "RECOLORABLE"),
          id: V(1),
          value: V(2),
        }));
        var Vtc = H(() => ({ borderRadius: gI(1), borderWidth: gI(2) }));
        var Wtc = H(() => ({
          type: __c.F("A?", 2, "BORDERABLE"),
          id: V(1),
          value: __c.La(2, Vtc),
        }));
        var ttc = H(() => ({
          config: V(1),
          width: gI(2),
          height: gI(3),
          OY: __c.Ma(4, D6),
          Bhb: __c.Ma(5, Wtc),
        }));
        var vtc = __c.Ya(
          () => ({ type: [1, D6, 2, Wtc] }),
          () => ({})
        );
        var wtc = H(() => ({ config: V(1), width: gI(2), height: gI(3) }));
        var ytc = H(() => ({
          config: V(1),
          width: gI(2),
          height: gI(3),
          OY: __c.Ma(4, D6),
          Bhb: __c.Ma(5, Wtc),
        }));
        var ztc = H(() => ({}));
        var Ctc = class {
          constructor(a) {
            this.Nca = a;
          }
        };
        var Xtc = class {
          async yv(a, b) {
            const c = await Ftc(a, this.J, {
                fya: (e) => {
                  this.config.W2?.vJa(e, b);
                  return new ptc();
                },
              }),
              d = Htc(
                () => b.config,
                async (e) => ntc(c, { config: e })
              );
            this.Ng.set(a, d);
            await ntc(c, { config: b.config });
          }
          zL(a) {
            this.Ng.get(a)?.();
            this.Ng.delete(a);
          }
          constructor(a, b) {
            this.config = a;
            this.J = b;
            this.Ng = new Map();
          }
        };
        var Ytc = class {
          async yv(a, b) {
            const c = (f) => xtc(d, new D6(f)),
              d = await Dtc(a, this.J, {
                fya: (f) => {
                  this.config.W2?.vJa(f, b, c);
                  return new ztc();
                },
              }),
              e = Htc(
                () => b.config,
                async (f) => {
                  const g = await utc(d, { config: f });
                  g.config && g.config !== f && this.config.W2?.vJa(g, b, c);
                }
              );
            this.Ng.set(a, e);
            a = await utc(d, { config: b.config });
            this.config.W2?.vJa(a, b, c);
          }
          zL(a) {
            this.Ng.get(a)?.();
            this.Ng.delete(a);
          }
          constructor(a, b) {
            this.config = a;
            this.J = b;
            this.Ng = new Map();
          }
        };
        var Ztc = __c.B6({
            G: __c.BZ({
              GPa: (0, __c.NZ)(1, "EmbedRef"),
              Rib: (0, __c.Y7b)(35),
              config: (0, __c.JZ)(29),
            }),
          }),
          $tc = __c.A6()(() => ({
            oQb(a, b) {
              return {
                data: {
                  G: {
                    GPa: { type: "embed", id: a, version: 0 },
                    Rib: b,
                    config: void 0,
                  },
                  document: {},
                },
                N: { width: 1366, height: 768 },
              };
            },
          }));
        var auc = __c.y6()(({ sV: a }) => {
          a = a.J;
          const b = new Qtc(),
            c = new Ytc(b, a);
          return {
            G: __c.x6(({ data: { G: d }, Hi: { Jpa: e } }) =>
              Jtc(e, {
                url: d.GPa.id,
                yv: (f) => c.yv(f, d),
                zL: (f) => c.zL(f),
              })
            ),
            exports: { config: b, cSb: new Xtc(b, a) },
          };
        });
        __c.iYa = {
          AWb: function (a) {
            function b({ id: e, Ym: f }, g) {
              return d.Fsb(e, f, g());
            }
            const c = a.qcb,
              d = a.bLb;
            return {
              MV: c.MV
                ? Promise.all([
                    c.MV,
                    __webpack_require__.me(270376).then(() => __c.buc),
                    __webpack_require__.me(309241).then(() => __c.cuc),
                    __webpack_require__.me(726606).then(() => __c.duc),
                    __webpack_require__.me(555219).then(() => __c.euc),
                    __webpack_require__.me(756388).then(() => __c.fuc),
                    __webpack_require__.me(516583).then(() => __c.guc),
                    __webpack_require__.me(93698).then(() => __c.huc),
                    __webpack_require__.me(295247).then(() => __c.iuc),
                    __webpack_require__.me(934200).then(() => __c.juc),
                    __webpack_require__.me(308710).then(() => __c.kuc),
                  ]).then(([e, f, g, h, k, l, m, n, p, q, r]) => ({
                    Ida: b(e.Ida, f.Ni),
                    Kda: b(e.Kda, g.Ni),
                    Lda: b(e.Lda, h.Ni),
                    Mda: b(e.Mda, k.Ni),
                    Nda: b(e.Nda, l.Ni),
                    Oda: b(e.Oda, m.Ni),
                    Pda: b(e.Pda, n.Ni),
                    Qda: b(e.Qda, p.Ni),
                    Rda: b(e.Rda, q.Ni),
                    Jda: b(e.Jda, r.Ni),
                  }))
                : void 0,
              scene: c.scene
                ? Promise.all([
                    c.scene,
                    __webpack_require__.me(666647).then(() => __c.E6),
                  ]).then(([e, f]) => b(e, f.Ni))
                : void 0,
              button: c.button
                ? Promise.all([
                    c.button,
                    __webpack_require__.me(868015).then(() => __c.luc),
                  ]).then(([e, f]) => b(e, f.Ni))
                : void 0,
              Dca: b(c.Dca, $tc),
              Nba: b(c.Nba, Ktc),
              $X: c.$X
                ? Promise.all([
                    c.$X,
                    __webpack_require__.me(870165).then(() => __c.muc),
                  ]).then(([e, f]) => b(e, f.Ni))
                : void 0,
            };
          },
          Psb: function (a) {
            function b({ Kk: h, rq: k, Yd: l, fT: m = "default" }) {
              const n = k.id;
              k = k.Ym;
              h = l({
                sV: { ...f, Xa: e.cv(`widgets.rendering.clients.${m}`) },
                Kk: h,
              });
              h = d.Lsb(n, k, h);
              return { id: n, Ym: k, HEa: h, fT: m };
            }
            const c = a.qcb,
              d = a.faa,
              e = a.dg,
              f = a.sV,
              g = a.Kk;
            return {
              Nba: b({
                Kk: { T0: g.T0, $N: g.$N },
                rq: c.Nba,
                Yd: Ntc,
                fT: "blueprint",
              }),
              MV: c.MV
                ? Promise.all([
                    c.MV,
                    __webpack_require__.me(270376).then(() => __c.buc),
                    __webpack_require__.me(309241).then(() => __c.cuc),
                    __webpack_require__.me(726606).then(() => __c.duc),
                    __webpack_require__.me(555219).then(() => __c.euc),
                    __webpack_require__.me(756388).then(() => __c.fuc),
                    __webpack_require__.me(516583).then(() => __c.guc),
                    __webpack_require__.me(93698).then(() => __c.huc),
                    __webpack_require__.me(295247).then(() => __c.iuc),
                    __webpack_require__.me(934200).then(() => __c.juc),
                    __webpack_require__.me(308710).then(() => __c.kuc),
                  ]).then(([h, k, l, m, n, p, q, r, t, v, w]) => ({
                    Ida: b({ Kk: void 0, rq: h.Ida, Yd: k.Yd }),
                    Kda: b({ Kk: void 0, rq: h.Kda, Yd: l.Yd }),
                    Lda: b({ Kk: void 0, rq: h.Lda, Yd: m.Yd }),
                    Mda: b({ Kk: void 0, rq: h.Mda, Yd: n.Yd }),
                    Nda: b({ Kk: void 0, rq: h.Nda, Yd: p.Yd }),
                    Oda: b({ Kk: void 0, rq: h.Oda, Yd: q.Yd }),
                    Pda: b({ Kk: void 0, rq: h.Pda, Yd: r.Yd }),
                    Qda: b({ Kk: void 0, rq: h.Qda, Yd: t.Yd }),
                    Rda: b({ Kk: void 0, rq: h.Rda, Yd: v.Yd }),
                    Jda: b({ Kk: void 0, rq: h.Jda, Yd: w.Yd }),
                  }))
                : void 0,
              Dca: b({ Kk: void 0, rq: c.Dca, Yd: auc, fT: "codelet" }),
              form: c.form
                ? Promise.all([
                    c.form,
                    __webpack_require__.me(313335).then(() => __c.nuc),
                  ]).then(([h, k]) =>
                    b({
                      Kk: { hxa: g.hxa, UJ: g.UJ },
                      rq: h,
                      Yd: k.Yd,
                      fT: "form",
                    })
                  )
                : void 0,
              $X: c.$X
                ? Promise.all([
                    c.$X,
                    __webpack_require__.me(870165).then(() => __c.muc),
                  ]).then(([h, k]) =>
                    b({ Kk: void 0, rq: h, Yd: k.Yd, fT: "navigationMenu" })
                  )
                : void 0,
              scene: c.scene
                ? Promise.all([
                    c.scene,
                    __webpack_require__.me(666647).then(() => __c.E6),
                    g.eza ? g.eza() : Promise.resolve(void 0),
                  ]).then(([h, k, l]) =>
                    b({
                      Kk: { Lla: l, mS: l ? Zsc({ Lla: l }).mS : void 0 },
                      rq: h,
                      Yd: k.Yd,
                      fT: "scene",
                    })
                  )
                : void 0,
              button: c.button
                ? Promise.all([
                    c.button,
                    __webpack_require__.me(868015).then(() => __c.luc),
                  ]).then(([h, k]) =>
                    b({ Kk: void 0, rq: h, Yd: k.Yd, fT: "button" })
                  )
                : void 0,
            };
          },
          Qsb: function (a) {
            function b(f, g) {
              g = c.Msb(f, g());
              return { id: f, Ym: g };
            }
            const c = a.uKa,
              { vTa: d = __c.uc("c79472f0", !1) } = a,
              e = __c.uc("1d0cd616", !1);
            return {
              Nba: b("w:wnJF5T87v", Ptc),
              MV: a.Qmb
                ? Promise.all([
                    __webpack_require__.me(270376).then(() => __c.buc),
                    __webpack_require__.me(309241).then(() => __c.cuc),
                    __webpack_require__.me(726606).then(() => __c.duc),
                    __webpack_require__.me(555219).then(() => __c.euc),
                    __webpack_require__.me(756388).then(() => __c.fuc),
                    __webpack_require__.me(516583).then(() => __c.guc),
                    __webpack_require__.me(93698).then(() => __c.huc),
                    __webpack_require__.me(295247).then(() => __c.iuc),
                    __webpack_require__.me(934200).then(() => __c.juc),
                    __webpack_require__.me(308710).then(() => __c.kuc),
                  ]).then(([f, g, h, k, l, m, n, p, q, r]) => ({
                    Ida: b("w:cm9wgGptP", f.Wh),
                    Kda: b("w:yLMS4dWnl", g.Wh),
                    Lda: b("w:2flp30CGQ", h.Wh),
                    Mda: b("w:1Nv6K6Dtv", k.Wh),
                    Nda: b("w:5Nv6K6Dtv", l.Wh),
                    Oda: b("w:6Nv6K6Dtv", m.Wh),
                    Pda: b("w:7Nv6K6Dtv", n.Wh),
                    Qda: b("w:8Nv6K6Dtv", p.Wh),
                    Rda: b("w:9Nv6K6Dtv", q.Wh),
                    Jda: b("w:sSrc7m4Q3", r.Wh),
                  }))
                : void 0,
              Dca: b("w:JR4G8hDDg", Ztc),
              form: d
                ? __webpack_require__
                    .me(313335)
                    .then(() => __c.nuc)
                    .then((f) => b("widget:form", f.Wh))
                : void 0,
              $X: a.gnb
                ? __webpack_require__
                    .me(870165)
                    .then(() => __c.muc)
                    .then((f) => b("w:K7mQ9xR3p", f.Wh))
                : void 0,
              scene: a.mnb
                ? __webpack_require__
                    .me(666647)
                    .then(() => __c.E6)
                    .then((f) => b("w:2pbXJMtm1", f.Wh))
                : void 0,
              button: e
                ? __webpack_require__
                    .me(868015)
                    .then(() => __c.luc)
                    .then((f) => b("w:PQccHDsCJ", f.Wh))
                : void 0,
            };
          },
        };
      }.call(self, self._5f74ec40302898c5a55451c9fbd04240));
    },
  },
]);
//# sourceMappingURL=sourcemaps/8af26b778a0169d5.js.map
