(self["webpackChunk_canva_web"] = self["webpackChunk_canva_web"] || []).push([
  [75067],
  {
    /***/ 711112: function (_, __, __webpack_require__) {
      __webpack_require__.n_x = __webpack_require__.n;
      const __web_req__ = __webpack_require__;
      __web_req__(905716);
      __web_req__(635048);
      __web_req__(923332);
      self._5f74ec40302898c5a55451c9fbd04240 =
        self._5f74ec40302898c5a55451c9fbd04240 || {};
      (function (__c) {
        var y = __c.y;
        var N = __c.N;
        var gD = __c.gD;
        var Sc = __c.Sc;
        var u = __c.u;
        var ie = __c.ie;
        var D = __c.D;
        var gzc = function (a, b, c) {
            return new fzc(a, b, c);
          },
          hzc = function (a) {
            switch (a.kind) {
              case 0:
              case 1:
              case 2:
              case 3:
              case 4:
              case 5:
              case 6:
                return !1;
              case 7:
              case 8:
              case 9:
              case 10:
              case 11:
                return !0;
              default:
                throw new D(a);
            }
          },
          izc = function (a) {
            var b = { document: void 0, G: void 0 };
            const c = new Map();
            for (const d in b) a[d].xJ.forEach((e, f) => c.set(f, e));
            return {
              xJ: c,
              decode: (d) => {
                const e = new Map(),
                  f = {};
                for (const g in d) {
                  const h = a[g].decode(d[g]);
                  h.eFa.forEach((k, l) => e.set(l, k));
                  f[g] = h.data;
                }
                return { eFa: e, data: f };
              },
              encode: (d) => ie(b, (e, f) => a[f].encode(d[f])),
            };
          },
          jzc = function (a) {
            return () => a;
          },
          kzc = function (a) {
            return a();
          },
          lzc = function (a, b, c) {
            return new y7([a], b, c);
          },
          z7 = function (a, b, c, d) {
            return new y7([a, b], c, d);
          },
          A7 = function (a, b, c, d) {
            return new mzc(a, b, c, d);
          },
          nzc = function (a, b) {
            return b(a);
          },
          B7 = function (a, b) {
            return a === b || b.map((c) => a.mza(ozc(c)));
          },
          qzc = function (a, b) {
            return a.qBa(b).map((c) => new pzc(c, (d) => d.props[b]));
          },
          ozc = function (a) {
            u(a instanceof rzc);
            return a;
          },
          C7 = function (a) {
            const b = new WeakMap();
            return function (c) {
              let d = b.get(c);
              d == null && ((d = a.call(this, c)), b.set(c, d));
              return d;
            };
          },
          uzc = function (a, b) {
            if (a === b) return !0;
            switch (typeof a) {
              case "string":
              case "number":
              case "boolean":
              case "undefined":
                return !1;
              case "object":
                if (typeof b !== "object" || a.kind !== b.kind) return !1;
                switch (a.kind) {
                  case "array":
                    return b.kind === "array" && szc(a.items, b.items);
                  case "set":
                    var c;
                    if ((c = b.kind === "set"))
                      (a = a.items),
                        (b = b.items),
                        (c =
                          a === b
                            ? !0
                            : a.size !== b.size
                            ? !1
                            : szc([...a], [...b]));
                    return c;
                  case "map":
                    if ((c = b.kind === "map"))
                      (a = a.items),
                        (b = b.items),
                        (c =
                          a === b
                            ? !0
                            : a.size !== b.size
                            ? !1
                            : szc(
                                [...a.keys(), ...a.values()],
                                [...b.keys(), ...b.values()]
                              ));
                    return c;
                  case "record":
                    return b.kind === "record" && tzc(a.fields, b.fields);
                  case "instance":
                    return b.kind === "instance" && a.instance === b.instance;
                  default:
                    throw new D(a);
                }
              default:
                throw new D(a);
            }
          },
          szc = function (a, b) {
            if (a === b) return !0;
            if (a.length !== b.length) return !1;
            for (let c = 0; c < a.length; c++) if (!uzc(a[c], b[c])) return !1;
            return !0;
          },
          tzc = function (a, b) {
            if (a === b) return !0;
            const c = Object.keys(a),
              d = Object.keys(b),
              e = new Set([...c, ...d]);
            if (c.length !== e.size || d.length !== e.size) return !1;
            for (const f of e) if (!uzc(a[f], b[f])) return !1;
            return !0;
          },
          D7 = function (a) {
            return typeof a === "string" ? JSON.stringify(a) : String(a);
          },
          wzc = function (a, b) {
            return a.map((c) => b.map((d) => vzc[0](c, d)));
          },
          yzc = function (a, b, c) {
            return b.map((d) => xzc[a](d, c));
          },
          zzc = function (a, b) {
            return new E7(new F7(new Map(b), a.vars), a.e4);
          },
          Bzc = function (a, b, c) {
            for (const [e, f] of c.e4) {
              var d = f.params.map(([g, h]) => [g, a.types.evaluate(h)]);
              d = Azc(b, d, (g) => G7(a, g, f.body));
              b = new E7(b.vars, b.e4.define(e, d));
            }
            return G7(a, b, c.body);
          },
          G7 = function (a, b, c) {
            switch (c.kind) {
              case 1:
                return Czc(c.value);
              case 2:
                const f = c.args.map((q) => G7(a, b, q));
                c = c.name;
                return typeof c === "string"
                  ? b.e4.resolve(c).map((q) => Dzc(q, f))
                  : Ezc[c].map((q) => Fzc(q, f));
              case 3:
                const g = c.args.map((q) =>
                  q.kind !== 13
                    ? new Gzc(G7(a, b, q))
                    : new Hzc(G7(a, b, q.VWb))
                );
                c = c.name;
                switch (c) {
                  case 0:
                  case 1:
                    var d = g.map((q) =>
                      q.Rwa(
                        (r) => r.type,
                        (r) => r.type.JQ()
                      )
                    );
                    return H7.union(...d)
                      .map(Izc[c])
                      .map((q) => Jzc(q, g));
                  default:
                    return Kzc[c].map((q) => Jzc(q, g));
                }
              case 4:
                d = c.name;
                var e = c.param;
                const h = c.body,
                  k = G7(a, b, c.pV);
                c = k.type.JQ();
                const l = Azc(b, [[e, c]], (q) => G7(a, q, h));
                return yzc(d, c, l.resultType).map((q) => Lzc(q, k, l));
              case 5:
                const m = c.entries.map(([q, r]) => [G7(a, b, q), G7(a, b, r)]);
                c = H7.union(...m.map(([q]) => q.type));
                d = H7.union(...m.map(([, q]) => q.type));
                if (!B7(c, H7.primitive))
                  throw Error(`key type is not a primitive: ${c}`);
                return wzc(c, d).map((q) => Mzc(q, m));
              case 6:
                const n = ie(c.fields, (q) => G7(a, b, q));
                c = ie(n, (q) => q.type);
                return (0, Nzc[0])(c).map((q) => Ozc(q, n));
              case 7:
                d = a.types.resolve(c.name);
                if (!d)
                  throw Error(`cannot instantiate unknown type: ${c.name}`);
                const p = G7(a, b, { kind: 6, fields: c.args });
                return d.Wxb.map((q) => Fzc(q, [p], { Ro: !0 }));
              case 8:
                return (d = G7(a, b, c.base)), Pzc(d, c.S3b);
              case 9:
                return Qzc(b, c.name);
              case 10:
                return (
                  (d = Sc(c.defs, (q) => G7(a, b, q))), Rzc(a, b, d, c.body)
                );
              case 11:
                return (
                  (d = G7(a, b, c.test).as(H7.Th)),
                  (e = G7(a, b, c.$Pb)),
                  (c = G7(a, b, c.alternate)),
                  Szc(d, e, c)
                );
              case 12:
                return G7(a, b, c.body).computed();
              default:
                throw new D(c);
            }
          },
          Czc = function (a) {
            switch (typeof a) {
              case "string":
                return I7(H7.string, a);
              case "number":
                return I7(H7.number, a);
              case "boolean":
                return I7(H7.Th, a);
              case "undefined":
                return I7(H7.undefined, a);
              default:
                throw new D(a);
            }
          },
          Pzc = function (a, b) {
            return a.map((c) =>
              qzc(c, b).map(({ type: d, get: e }) =>
                Fzc(new y7([c], d, e), [a])
              )
            );
          },
          Qzc = function (a, b) {
            return a.vars.resolve(b).map((c) => J7.of(c, (d) => d.resolve(b)));
          },
          Rzc = function (a, b, c, d) {
            const e = Sc(c, (g) => g.type),
              f = Sc(c, (g) => g.evaluate);
            return Tzc(G7(a, zzc(b, e), d), (g) => {
              const h = Sc(f, (k) => k(g));
              return new F7(new Map(h), g);
            });
          },
          Szc = function (a, b, c) {
            return b.map((d, e) =>
              c.map((f, g) => {
                f = H7.union(d, f);
                return J7.of(f, (h) => {
                  const k = a(h),
                    l = e(h),
                    m = g(h);
                  return () => (k() ? l() : m());
                });
              })
            );
          },
          K7 = function (a) {
            return (b) => b(a);
          },
          Dzc = function ({ pka: a, resultType: b, evaluate: c }, d) {
            if (d.length !== a.length)
              throw Error(
                `expected ${a.length} arguments, but got ${d.length}`
              );
            const e = Uzc(a, (f, g) => d[g].as(f));
            return J7.of(b, (f) => {
              const g = e.map(K7(f));
              return c(f)(...g);
            });
          },
          Fzc = function ({ pka: a, resultType: b, apply: c }, d, e) {
            if (d.length !== a.length)
              throw Error(
                `expected ${a.length} arguments, but got ${d.length}`
              );
            const f = Uzc(a, (g, h) => d[h].as(g));
            return J7.of(b, (g) => {
              g = f.map(K7(g));
              return Vzc(e?.Ro ? Wzc(c) : c, g);
            });
          },
          Jzc = function ({ fBb: a, resultType: b, apply: c }, d) {
            let e;
            const f = d.map((g) =>
              g.fsa(
                (h) => h.as(a),
                (h) => h.as(e ?? (e = H7.pV(a)))
              )
            );
            return new J7(b, (g) => {
              const h = K7(g),
                k = f.map((l) => l.fsa(h, h));
              return () => {
                const l = [];
                k.forEach((m) => {
                  m.Rwa(
                    (n) => l.push(n()),
                    (n) => l.push(...n())
                  );
                });
                return c(l);
              };
            });
          },
          Lzc = function (
            { itemType: a, Wgb: b, resultType: c, reduce: d },
            e,
            f
          ) {
            const g = f.as([a], b),
              h = e.as(H7.pV(a));
            return new J7(c, (k) => {
              const l = h(k),
                m = g(k),
                n = Wzc((p) => {
                  p = p.map(jzc);
                  return [p, p.map(m)];
                });
              return () => {
                const [p, q] = n(l());
                return d(p, q);
              };
            });
          },
          Mzc = function (
            { keyType: a, valueType: b, resultType: c, apply: d },
            e
          ) {
            const f = e.map(([g, h]) => [g.as(a), h.as(b)]);
            return new J7(c, (g) => {
              const h = f.map(([k, l]) => [k(g), l(g)]);
              return () => d(h.map(([k, l]) => [k(), l()]));
            });
          },
          Ozc = function ({ Dgb: a, resultType: b, apply: c }, d) {
            const e = Object.keys(a).filter((g) => !d.hasOwnProperty(g));
            if (e.length) throw Error(`too few arguments (missing ${e})`);
            const f = Xzc(a, (g, h) => d[h].as(g));
            return new J7(b, (g) => {
              const h = ie(f, K7(g));
              return () => {
                var k = ie(h, kzc);
                return c(k);
              };
            });
          },
          I7 = function (a, b) {
            const c = jzc(b);
            return new J7(a, () => c);
          },
          Tzc = function (a, b) {
            const c = a.evaluate;
            return new J7(a.type, (d) => c(b(d)));
          },
          Azc = function (a, b, c) {
            const d = b.map((f) => f[0]),
              e = b.map((f) => f[1]);
            return nzc(e, (f) =>
              c(zzc(a, new Map(b))).map(
                (g, h) =>
                  new Yzc(f, g, (k) => (...l) => {
                    const m = new Map(d.map((n, p) => [n, l[p]]));
                    return h(new F7(new Map(m), k));
                  })
              )
            );
          },
          Vzc = function (a, b) {
            switch (b.length) {
              case 0:
                return a;
              case 1:
                const [c] = b;
                return () => a(c());
              case 2:
                const [d, e] = b;
                return () => a(d(), e());
              default:
                return () => {
                  var f = b.map(kzc);
                  return a(...f);
                };
            }
          },
          Wzc = function (a) {
            let b;
            return (...c) => {
              if (
                b &&
                b.Ebb.length === c.length &&
                b.Ebb.every((e, f) => L7.mh(e, c[f]))
              )
                return b.v;
              const d = a(...c);
              b = { Ebb: c, v: d };
              return d;
            };
          },
          Xzc = function (a, b) {
            return ie(a, b);
          },
          Uzc = function (a, b) {
            return a.map(b);
          },
          $zc = function (a, b, c) {
            return new Zzc(a, b, c);
          },
          aAc = function (a, b) {
            return [...a].map(b)[Symbol.iterator]();
          },
          M7 = function (a, b, c, d) {
            if (d == null) throw a.error(b.hK(c), "not found");
            return d;
          },
          pAc = function (a) {
            function b(r) {
              return m[r.kind](r);
            }
            const c = a.types,
              d = a.values;
            class e {
              static of(r, t, v, w, z, A) {
                return new e(r, v, w, bAc(z, cAc(t)), dAc(A, cAc(t)));
              }
              map(r) {
                return r(this);
              }
              validate(r) {
                return r
                  ? new e(
                      this.dataType,
                      this.E$,
                      this.d$,
                      eAc(this.decode, r),
                      bAc(this.encode, r)
                    )
                  : this;
              }
              constructor(r, t, v, w, z) {
                this.dataType = r;
                this.E$ = t;
                this.d$ = v;
                this.decode = w;
                this.encode = z;
              }
            }
            const f = e.of(
                { kind: 0 },
                "string",
                c.string,
                (r) => r,
                (r, t, v) => v.value,
                (r, t, v) => ({ type: "string", value: v })
              ),
              g = e.of(
                { kind: 1 },
                "boolean",
                c.Th,
                (r) => r,
                (r, t, v) => v.value,
                (r, t, v) => ({ type: "boolean", value: v })
              ),
              h = e
                .of(
                  { kind: 2 },
                  "double",
                  c.number,
                  (r) => r,
                  (r, t, v) => v.value,
                  (r, t, v) => ({ type: "double", value: v })
                )
                .validate((r, t, v) => {
                  if (!Number.isFinite(v))
                    throw r.error(t, `number is not finite: ${v}`);
                }),
              k = e
                .of(
                  { kind: 3 },
                  "int32",
                  c.number,
                  (r) => r,
                  (r, t, v) => v.value,
                  (r, t, v) => ({ type: "int32", value: v })
                )
                .validate((r, t, v) => {
                  if (!Number.isInteger(v) || v < -2147483648 || v > 2147483647)
                    throw r.error(t, `number is not an int32: ${v}`);
                }),
              l = {
                FontRef: e.of(
                  { kind: 7, name: "FontRef" },
                  "ref",
                  c.instance("FontRef"),
                  (r) => d.instance("FontRef", r),
                  N7("font"),
                  (r, t, v) => ({ type: "ref", value: v })
                ),
                MediaRef: e.of(
                  { kind: 7, name: "MediaRef" },
                  "ref",
                  c.instance("MediaRef"),
                  (r) => d.instance("MediaRef", r),
                  N7("media"),
                  (r, t, v) => ({ type: "ref", value: v })
                ),
                VideoRef: e.of(
                  { kind: 7, name: "VideoRef" },
                  "ref",
                  c.instance("VideoRef"),
                  (r) => d.instance("VideoRef", r),
                  N7("video"),
                  (r, t, v) => ({ type: "ref", value: v })
                ),
                AudioRef: e.of(
                  { kind: 7, name: "AudioRef" },
                  "ref",
                  c.instance("AudioRef"),
                  (r) => d.instance("AudioRef", r),
                  N7("audio"),
                  (r, t, v) => ({ type: "ref", value: v })
                ),
                EmbedRef: e.of(
                  { kind: 7, name: "EmbedRef" },
                  "ref",
                  c.instance("EmbedRef"),
                  (r) => d.instance("EmbedRef", r),
                  N7("embed"),
                  (r, t, v) => ({ type: "ref", value: v })
                ),
                SceneRef: e.of(
                  { kind: 7, name: "SceneRef" },
                  "ref",
                  c.instance("SceneRef"),
                  (r) => d.instance("SceneRef", r),
                  N7("scene"),
                  (r, t, v) => ({ type: "ref", value: v })
                ),
                BlueprintRef: e.of(
                  { kind: 7, name: "BlueprintRef" },
                  "ref",
                  c.instance("BlueprintRef"),
                  (r) => d.instance("BlueprintRef", r),
                  N7("blueprint"),
                  (r, t, v) => ({ type: "ref", value: v })
                ),
                Fill: e.of(
                  { kind: 7, name: "Fill" },
                  "fill",
                  c.instance("Fill"),
                  (r) => d.instance("Fill", r),
                  (r, t, v) => v.value,
                  (r, t, v) => ({ type: "fill", value: v })
                ),
                Stroke: e.of(
                  { kind: 7, name: "Stroke" },
                  "stroke",
                  c.instance("Stroke"),
                  (r) => d.instance("Stroke", r),
                  (r, t, v) => v.value,
                  (r, t, v) => ({ type: "stroke", value: v })
                ),
                Richtext2: e.of(
                  { kind: 7, name: "Richtext2" },
                  "text2",
                  c.instance("Richtext2"),
                  (r) => d.instance("Richtext2", r),
                  (r, t, v) => v.value,
                  (r, t, v) => ({ type: "text2", value: v })
                ),
              },
              m = {
                [0]: (r) => f.validate(fAc(r.cM)),
                [1]: () => g,
                [2]: (r) => h.validate(gAc(r.range)),
                [3]: (r) => k.validate(gAc(r.range)),
                [4]: (r) =>
                  e
                    .of(
                      { kind: 4, values: r.values },
                      hAc,
                      c.primitive,
                      (t) => t,
                      (t, v, w) => w.value,
                      (t, v, w) => {
                        a: switch (typeof w) {
                          case "string":
                            t = { type: "string", value: w };
                            break a;
                          case "boolean":
                            t = { type: "boolean", value: w };
                            break a;
                          case "number":
                            t = { type: "int32", value: w };
                            break a;
                          default:
                            throw new D(w);
                        }
                        return t;
                      }
                    )
                    .validate(iAc(r.values)),
                [5]: (r) => {
                  const {
                    dataType: t,
                    E$: v,
                    d$: w,
                    decode: z,
                    encode: A,
                  } = b(r.itemType);
                  return e.of(
                    { kind: 5, itemType: t },
                    "list",
                    c.array(v),
                    (C) => d.array(C.map(w)),
                    (C, B, E) =>
                      E.value.toArray().map((I, L) => z(C, B.IP(L), I)),
                    (C, B, E) => ({
                      type: "list",
                      value: E.map((I, L) => A(C, B.IP(L), I)),
                    })
                  );
                },
                [6]: (r) => {
                  const {
                    dataType: t,
                    E$: v,
                    d$: w,
                    decode: z,
                    encode: A,
                  } = b(r.itemType);
                  return e.of(
                    { kind: 6, itemType: t },
                    "dict",
                    c.map(c.string, v),
                    (C) => d.map(Sc(C, w)),
                    (C, B, E) => Sc(E.value.Pk(), (I, L) => z(C, B.T3(L), I)),
                    (C, B, E) => ({
                      type: "dict",
                      value: Sc(E, (I, L) => A(C, B.T3(L), I)),
                    })
                  );
                },
                [7]: (r) => l[r.name],
                [8]: (r) => {
                  const { dataType: t, decode: v, encode: w } = b(r.itemType);
                  return e.of(
                    { kind: 8, itemType: t },
                    "list",
                    c.undefined,
                    () => {},
                    (z, A, C) =>
                      gzc(
                        C.value,
                        (B) => w(z, A.IP("*"), B),
                        jAc(v, z, A.IP("*"))
                      ),
                    (z, A, C) => ({
                      type: "list",
                      value: C.map((B, E) => w(z, A.IP(E), B)),
                    })
                  );
                },
                [9]: (r) => {
                  const { dataType: t, decode: v, encode: w } = b(r.itemType);
                  return e.of(
                    { kind: 9, itemType: t },
                    "dict",
                    c.undefined,
                    () => {},
                    (z, A, C) =>
                      $zc(
                        C.value,
                        (B) => w(z, A.T3("*"), B),
                        jAc(v, z, A.IP("*"))
                      ),
                    (z, A, C) => ({
                      type: "dict",
                      value: Sc(C, (B, E) => w(z, A.T3(E), B)),
                    })
                  );
                },
                [10]: (r) => {
                  const { decode: t, encode: v } = p.wZa(r.fields);
                  return e.of(
                    { kind: 10, fields: r.fields },
                    "dict",
                    c.undefined,
                    () => {},
                    t,
                    v
                  );
                },
                [11]: (r) => {
                  function t(I, L, M, O) {
                    M = M.get(O);
                    if (M == null)
                      throw I.error(
                        L,
                        `unknown case for discriminator value: ${O}`
                      );
                    return M;
                  }
                  const v = r.HSa;
                  r = r.jg;
                  var w = Object.keys(v);
                  u(w.length >= 1, "missing discriminator props");
                  u(w.length <= 1, "too many discriminator props: {}", w);
                  const z = w[0];
                  u(r.length >= 1, "discriminated union has no cases");
                  w = new Map();
                  for (const I of r) {
                    const L = I.fields[z].type.values,
                      M = b(I);
                    for (const O of L)
                      u(
                        !w.has(O),
                        "discriminator values are not unique across cases: {}",
                        O
                      ),
                        w.set(O, M);
                  }
                  const { decode: A, encode: C } = b({
                      kind: 4,
                      values: new Set(w.keys()),
                    }),
                    B = Sc(w, (I) => I.decode),
                    E = Sc(w, (I) => I.encode);
                  return e.of(
                    { kind: 11, HSa: v, jg: r },
                    "dict",
                    c.undefined,
                    () => {},
                    (I, L, M) => {
                      var O = M7(I, L, "k", M.value.get("k"));
                      M = M7(I, L, "v", M.value.get("v"));
                      kAc(I, L, "dict", M);
                      O = A(I, L, O);
                      return t(I, L, B, O)(I, L, M);
                    },
                    (I, L, M) => {
                      const O = M[z],
                        R = t(I, L, E, O);
                      return {
                        type: "dict",
                        value: new Map([
                          ["k", C(I, L, O)],
                          ["v", R(I, L, M)],
                        ]),
                      };
                    }
                  );
                },
              },
              n = Symbol("$impl");
            class p {
              static wZa(r) {
                r = ie(r, (w) => q.of(w));
                const t = ie(r, (w) => w.nHb()),
                  v = Object.entries(r);
                return {
                  xJ: new Map(v.map(([, w]) => w.iHb())),
                  oHb: (w) => {
                    const z = w[n];
                    return new Map(v.map(([, A]) => A.pHb(z)));
                  },
                  decode: (w, z, A) => {
                    const C = Object.create(null, t);
                    Object.defineProperty(C, n, {
                      enumerable: !1,
                      writable: !1,
                      value: new p(w, z, A.value),
                    });
                    return C;
                  },
                  encode: (w, z, A) => {
                    const C = v.map(([B, E]) => E.encode(w, z, A[B]));
                    return { type: "dict", value: new Map(C.filter(__c.nb)) };
                  },
                };
              }
              Nxa(r, t) {
                const v = M7(this.e, this.p, t, this.data.get(t));
                return lAc(this.fUa, r.decode, this.e, this.p.hK(t), v);
              }
              Lxa(r, t) {
                const v = this.data.get(t);
                if (v != null)
                  return lAc(this.fUa, r.decode, this.e, this.p.hK(t), v);
              }
              c8a(r, t, v) {
                this.data.set(t, r.encode(this.e, this.p.hK(t), v));
              }
              Y7a(r, t, v) {
                v != null
                  ? this.data.set(t, r.encode(this.e, this.p.hK(t), v))
                  : this.data.delete(t);
              }
              constructor(r, t, v) {
                this.e = r;
                this.p = t;
                this.data = v;
                this.fUa = new WeakMap();
                this.IOa = new Map();
                this.Dqb = mAc(this.IOa, (w, z) => {
                  const A = this;
                  return {
                    get ref() {
                      return A.Nxa(z, w);
                    },
                    set(C) {
                      A.c8a(z, w, C);
                    },
                  };
                });
                this.sqb = mAc(this.IOa, (w, z) => {
                  const A = this;
                  return {
                    get ref() {
                      return A.Lxa(z, w);
                    },
                    set(C) {
                      A.Y7a(z, w, C);
                    },
                  };
                });
              }
            }
            class q {
              static of(r) {
                return new q(r, b(r.type));
              }
              iHb() {
                const r = this.key,
                  t = this.Db,
                  v = this.type;
                switch (t.HD) {
                  case 0:
                    return [r, v.E$];
                  case 1:
                    return [r, c.optional(v.E$)];
                  default:
                    throw new D(t.HD);
                }
              }
              pHb(r) {
                const t = this.key,
                  v = this.Db,
                  w = this.type;
                switch (v.HD) {
                  case 0:
                    return [t, () => w.d$(r.Nxa(w, t))];
                  case 1:
                    return [
                      t,
                      () => {
                        const z = r.Lxa(w, t);
                        return z != null ? w.d$(z) : void 0;
                      },
                    ];
                  default:
                    throw new D(v.HD);
                }
              }
              nHb() {
                const r = this.key;
                var t = this.Db;
                const v = this.type;
                if (hzc(v.dataType) && t.DGa === 1) {
                  switch (t.HD) {
                    case 0:
                      t = function () {
                        return this[n].Dqb(r, v);
                      };
                      break;
                    case 1:
                      t = function () {
                        return this[n].sqb(r, v);
                      };
                      break;
                    default:
                      throw new D(t.HD);
                  }
                  return { enumerable: !0, get: t };
                }
                let w;
                switch (t.HD) {
                  case 0:
                    w = {
                      enumerable: !0,
                      get() {
                        return this[n].Nxa(v, r);
                      },
                      set(z) {
                        this[n].c8a(v, r, z);
                      },
                    };
                    break;
                  case 1:
                    w = {
                      enumerable: !0,
                      get() {
                        return this[n].Lxa(v, r);
                      },
                      set(z) {
                        this[n].Y7a(v, r, z);
                      },
                    };
                    break;
                  default:
                    throw new D(t.HD);
                }
                switch (t.DGa) {
                  case 0:
                    w.set = void 0;
                    break;
                  case 1:
                    break;
                  default:
                    throw new D(t.DGa);
                }
                return w;
              }
              encode(r, t, v) {
                const w = this.key,
                  z = this.Db,
                  A = this.type;
                switch (z.HD) {
                  case 0:
                    return [w, A.encode(r, t.hK(w), M7(r, t, w, v))];
                  case 1:
                    return v != null ? [w, A.encode(r, t.hK(w), v)] : void 0;
                  default:
                    throw new D(z.HD);
                }
              }
              constructor(r, t) {
                this.Db = r;
                this.type = t;
                r = r.key;
                u(r > 0 && Number.isInteger(r));
                if (r <= 52)
                  r = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"[
                    r - 1
                  ];
                else {
                  for (t = ""; r > 0; )
                    r--,
                      (t =
                        "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"[
                          r % 52
                        ] + t),
                      (r = Math.floor(r / 52));
                  r = t;
                }
                this.key = r;
              }
            }
            return (r, t) => {
              const v = new nAc(r),
                w = new oAc(),
                { xJ: z, oHb: A, decode: C, encode: B } = p.wZa(t);
              return {
                xJ: z,
                decode: (E) => {
                  E = C(v, w, { type: "dict", value: E });
                  return { eFa: A(E), data: E };
                },
                encode: (E) => B(v, w, E).value,
              };
            };
          },
          mAc = function (a, b) {
            return (c, ...d) => {
              a.has(c) || a.set(c, b(c, ...d));
              return a.get(c);
            };
          },
          jAc = function (a, b, c) {
            const d = new WeakMap();
            return (e) => lAc(d, a, b, c, e);
          },
          lAc = function (a, b, c, d, e) {
            let f = a.get(e);
            f == null && ((f = b(c, d, e)), a.set(e, f));
            return f;
          },
          bAc = function (a, b) {
            return (c, d, e) => {
              b(c, d, e);
              return a(c, d, e);
            };
          },
          eAc = function (a, b) {
            return (c, d, e) => {
              e = a(c, d, e);
              b(c, d, e);
              return e;
            };
          },
          dAc = function (a, b) {
            var c = qAc();
            return (d, e, f) => {
              f = a(d, e, f);
              b(d, e, f);
              c(d, e, f);
              return f;
            };
          },
          kAc = function (a, b, c, d) {
            if (d.type !== c)
              throw a.error(b, `type error: expected ${c}, was ${d.type}`);
          },
          cAc = function (a) {
            return typeof a === "string"
              ? (b, c, d) => kAc(b, c, a, d)
              : (b, c, d) => {
                  if (!a.has(d.type))
                    throw b.error(
                      c,
                      `type error: expected one of ${[...a].join(
                        " or "
                      )}, was ${d.type}`
                    );
                };
          },
          qAc = function () {
            return (a, b, c) => {
              if (typeof c.value !== rAc[c.type])
                throw a.error(
                  b,
                  `type error: expected ${c.type}, was ${typeof c.value}`
                );
            };
          },
          iAc = function (a) {
            return (b, c, d) => {
              if (!a.has(d))
                throw b.error(
                  c,
                  `expected one of ${[...a].join(" or ")}, was ${d}`
                );
            };
          },
          gAc = function (a) {
            if (a) {
              var b = a.min,
                c = a.max;
              u(b == null || c == null || b <= c);
              return (d, e, f) => {
                if (b != null && f < b)
                  throw d.error(e, `value below min ${b}: ${f}`);
                if (c != null && f > c)
                  throw d.error(e, `value above max ${b}: ${f}`);
              };
            }
          },
          fAc = function (a) {
            if (a)
              return (b, c, d) => {
                if (!a.test(d))
                  throw b.error(c, `value does not match regex ${a}: '${d}'`);
              };
          },
          N7 = function (a) {
            return (b, c, d) => {
              if (d.value.type !== a)
                throw b.error(
                  c,
                  `expected ${sAc[a]} resource type, got ${sAc[d.value.type]}`
                );
              return { ...d.value, type: a };
            };
          },
          O7 = function (a) {
            return typeof a === "function";
          },
          tAc = function (a) {
            a = Object.keys(a);
            __c.x(a.length === 1);
            return a[0];
          },
          vAc = function (a) {
            return { get: () => a, set: uAc };
          },
          wAc = function (...a) {
            const b = new Set(),
              c = new Set();
            for (const d of a)
              for (const e in d) b.has(e) ? c.add(e) : b.add(e);
            if (c.size)
              throw Error(
                `keys not disjoint: ${[...c].map((d) => `'${d}'`).join(", ")}`
              );
          },
          xAc = function (a, b) {
            return () => b(ie(a, (c) => c()));
          },
          zAc = function (a) {
            u(a.length === 1);
            let b;
            return (c) => {
              if (b != null && yAc(b[0], c)) return b[1];
              const d = a(c);
              b = [c, d];
              return d;
            };
          },
          yAc = function (a, b) {
            if (a === b) return !0;
            if (a == null || b == null) return !1;
            const c = Object.keys(a),
              d = Object.keys(b);
            if (c.length !== d.length) return !1;
            for (const e of c) if (a[e] !== b[e]) return !1;
            return !0;
          },
          CAc = function (a) {
            var b = AAc;
            return {
              Fpa: b({
                dr: a.Fpa,
                args: {},
                Zj: {
                  U: { image: void 0, video: void 0, Ua: void 0 },
                  attributes: {
                    Mm: void 0,
                    color: void 0,
                    wa: void 0,
                    locked: void 0,
                    Cg: void 0,
                    Ol: void 0,
                    bd: void 0,
                    flipX: void 0,
                    flipY: void 0,
                  },
                },
              }),
              aqa: b({
                dr: a.aqa,
                args: {},
                Zj: {
                  U: { fill: void 0 },
                  attributes: {
                    weight: void 0,
                    color: void 0,
                    Ic: void 0,
                    ke: void 0,
                  },
                },
              }),
              Tpa: b({
                dr: a.Tpa,
                args: {},
                Zj: {
                  U: { fill: void 0, stroke: void 0 },
                  attributes: { ...BAc, O: void 0 },
                },
              }),
              cqa: b({
                dr: a.cqa,
                args: {},
                Zj: {
                  U: { text: void 0 },
                  attributes: {
                    ...BAc,
                    az: void 0,
                    eh: void 0,
                    Ea: void 0,
                    I: void 0,
                    P: void 0,
                  },
                },
              }),
              iLa: b({
                dr: a.iLa,
                args: { url: void 0, I: void 0, P: void 0 },
                Zj: { U: {}, attributes: BAc },
              }),
            };
          },
          P7 = function (a, b) {
            return (c) => b({ ...a, ...c });
          },
          GAc = function () {
            return CAc({
              Fpa: P7(Q7, (a) => __c.xM.gC(a)),
              aqa: P7(DAc, (a) => __c.Qw.gC(a)),
              Tpa: P7(R7, (a) => __c.Yy.gC({ ...a, id: gD.generate() })),
              cqa: P7(EAc, (a) => __c.$y.gC({ ...a, id: gD.generate() })),
              iLa: P7(FAc, (a) => __c.az.gC({ ...a, id: gD.generate() })),
            });
          },
          LAc = function () {
            return new HAc({})
              .add((a, b) => ({
                FontRef: new a(
                  "FontRef",
                  { id: b.string, version: b.number },
                  (c) => ({ type: "font", id: c.id, version: c.version })
                ),
              }))
              .add((a, b) => ({
                MediaRef: new a(
                  "MediaRef",
                  { id: b.string, version: b.number },
                  (c) => ({ type: "media", id: c.id, version: c.version })
                ),
              }))
              .add((a, b) => ({
                VideoRef: new a("VideoRef", { id: b.string }, (c) => ({
                  type: "video",
                  id: c.id,
                  version: 0,
                })),
              }))
              .add((a, b) => ({
                AudioRef: new a("AudioRef", { id: b.string }, (c) => ({
                  type: "audio",
                  id: c.id,
                  version: 0,
                })),
              }))
              .add((a, b) => ({
                EmbedRef: new a("EmbedRef", { id: b.string }, (c) => ({
                  type: "embed",
                  id: c.id,
                  version: 0,
                })),
              }))
              .add((a, b) => ({
                SceneRef: new a("SceneRef", { id: b.string }, (c) => ({
                  type: "scene",
                  id: c.id,
                  version: 0,
                })),
              }))
              .add((a, b) => ({
                BlueprintRef: new a(
                  "BlueprintRef",
                  { id: b.string, version: b.number },
                  (c) => ({ type: "blueprint", id: c.id, version: c.version })
                ),
              }))
              .add((a, b) => ({
                Fill: new a("Fill", { color: b.string }, (c) =>
                  __c.xM.create({ ...Q7, color: c.color })
                ),
              }))
              .add((a, b) => ({
                Stroke: new a(
                  "Stroke",
                  {
                    color: b.string,
                    weight: b.number,
                    Ic: b.array(b.number),
                    ke: b.Th,
                  },
                  (c) =>
                    __c.Qw.create({
                      ...DAc,
                      color: c.color,
                      weight: c.weight,
                      Ic: c.Ic.items,
                      ke: c.ke,
                    })
                ),
              }))
              .add((a, b) => ({
                Richtext2: new a(
                  "Richtext2",
                  {
                    qpb: b.array(
                      b.Qc({ nb: b.string, attrs: b.map(b.string, b.string) })
                    ),
                  },
                  (c) => {
                    c = c.qpb;
                    const d = __c.Si.wb();
                    c.items.forEach((e) => {
                      const f = e.fields.nb;
                      d.attrs(__c.Kf(e.fields.attrs.items));
                      d.nb(f);
                    });
                    return __c.Si.create(d.build());
                  }
                ),
              }))
              .add((a, b) => ({
                Path: new a(
                  "Path",
                  {
                    d: b.string,
                    fill: b.instance("Fill"),
                    stroke: b.union(b.instance("Stroke"), b.undefined),
                  },
                  (c) => {
                    const d = c.stroke,
                      e = c.fill;
                    c = __c.qQ.create({ ...IAc, d: c.d, fill: Q7 });
                    Object.defineProperties(c, {
                      fill: { value: e.instance },
                      stroke: { value: JAc(d) },
                    });
                    return c;
                  }
                ),
              }))
              .add((a, b) => ({
                RectElement: new a(
                  "RectElement",
                  {
                    top: b.number,
                    left: b.number,
                    width: b.number,
                    height: b.number,
                    rotation: b.union(b.number, b.undefined),
                    fill: b.instance("Fill"),
                    O: b.union(b.array(b.number), b.undefined),
                    stroke: b.union(b.instance("Stroke"), b.undefined),
                  },
                  (c) => {
                    const d = c.stroke,
                      e = __c.Yy.create({
                        ...R7,
                        id: gD.generate(),
                        top: c.top,
                        left: c.left,
                        width: c.width,
                        height: c.height,
                        rotation: c.rotation ?? R7.rotation,
                        fill: Q7,
                        O: c.O?.items ?? R7.O,
                      });
                    Object.defineProperties(e, {
                      fill: { value: c.fill.instance },
                      stroke: { value: JAc(d) },
                    });
                    return e;
                  }
                ),
              }))
              .add((a, b) => ({
                ShapeElement: new a(
                  "ShapeElement",
                  {
                    top: b.number,
                    left: b.number,
                    width: b.number,
                    height: b.number,
                    rotation: b.union(b.number, b.undefined),
                    wa: b.union(b.number, b.undefined),
                    viewBox: b.Qc({
                      top: b.number,
                      left: b.number,
                      width: b.number,
                      height: b.number,
                    }),
                    gb: b.array(b.instance("Path")),
                  },
                  (c) => {
                    const d = __c.Zy.create({
                      ...KAc,
                      id: gD.generate(),
                      top: c.top,
                      left: c.left,
                      width: c.width,
                      height: c.height,
                      rotation: c.rotation ?? KAc.rotation,
                      wa: c.wa ?? KAc.wa,
                      gb: [],
                      viewBox: c.viewBox.fields,
                    });
                    Object.defineProperties(d, {
                      gb: {
                        value: new __c.EZ(
                          c.gb.items.map((e) => S7(() => e.instance))
                        ),
                      },
                    });
                    return d;
                  }
                ),
              }));
          },
          JAc = function (a) {
            return (
              a && {
                ref: a.instance,
                set() {
                  throw Error(
                    "Replacing of stroke on a model unit is not yet supported"
                  );
                },
              }
            );
          },
          MAc = function (a, b, c) {
            return ie(b, (d) => (...e) => {
              const {
                data: f,
                N: { width: g, height: h },
              } = d(...e);
              e = c.G.encode(f.G);
              const k =
                c.document.xJ.size > 0 ? c.document.encode(f.document) : void 0;
              return {
                Lc: { ...__c.Syb, app: { id: a, version: 1 } },
                RRb: k,
                ee: e,
                oh: { width: g, height: h },
              };
            });
          },
          OAc = function (a, b) {
            return class extends NAc {
              componentDidCatch(c) {
                a.error(c);
                this.setState({ hasError: !0 });
              }
              render() {
                return this.state.hasError
                  ? T7(__c.Pt, {
                      background: "criticalLow",
                      width: "full",
                      height: "full",
                      padding: "0.25u",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      role: "alert",
                      children: T7(__c.Mt, {
                        size: "xsmall",
                        alignment: "center",
                        children: __c.K("Q6XSow"),
                      }),
                    })
                  : T7(b, { ...this.props });
              }
              constructor(...c) {
                super(...c);
                this.state = { hasError: !1 };
              }
            };
          },
          SAc = function (a, b, c) {
            const d = c.G,
              e = (c = c.fda) ? new PAc(c) : void 0;
            c = e ? (f) => e.md(f.G.ee) : void 0;
            switch (d.type) {
              case 0:
                a = QAc(a, d, b, c);
                break;
              case 1:
                a = RAc(a, d, b, c);
                break;
              default:
                throw new D(d);
            }
            return { Hnb: a, $K: e };
          },
          QAc = function (a, b, c, d) {
            const e = b.hz,
              { ENa: f, pda: g, Ym: h, f5a: k } = TAc(a, c);
            return typeof e === "object"
              ? ((b = a.XZ.types),
                (b = b.pV(
                  b.union(b.instance("RectElement"), b.instance("ShapeElement"))
                )),
                UAc(
                  a,
                  f,
                  h,
                  b,
                  e,
                  (l) => new __c.DZ(() => l().map((m) => m.instance)),
                  k
                ))
              : {
                  type: 0,
                  hz: (l, m) => {
                    const { document: n, G: p } = h.decode(f(l)).data;
                    m = g(l, m);
                    l = d
                      ? { document: n, G: p, local: d(l) }
                      : { document: n, G: p, local: void 0 };
                    return e(l, m);
                  },
                  A0a: VAc(k),
                  lla: WAc(k),
                };
          },
          RAc = function (a, b, c, d) {
            const e = b.Component,
              { ENa: f, pda: g, Ym: h, f5a: k } = TAc(a, c);
            return {
              type: 1,
              A0a: VAc(k),
              lla: WAc(k),
              Component: OAc(
                a.J,
                XAc(({ model: l, uf: m, UOa: n }) => {
                  n = YAc(a.Hi, n);
                  const [p] = ZAc(() => {
                    const { document: q, G: r } = h.decode(f(l)).data;
                    return d
                      ? { document: q, G: r, local: d(l) }
                      : { document: q, G: r, local: void 0 };
                  });
                  m = g(l, m);
                  return T7(e, { data: p, Hi: n, ni: m });
                })
              ),
            };
          },
          TAc = function (a, b) {
            return {
              ENa: (c) => ({ document: $Ac(a, c), G: c.G.ee }),
              pda: (c, d) => a.aLb.pda(c, d),
              Ym: izc(b),
              f5a: new aBc(),
            };
          },
          UAc = function (a, b, c, d, e, f, g) {
            const h = a.cua(a.XZ, c, d).compile(e);
            return {
              type: 0,
              hz: (k) => ({ Ja: f(h(b(k))) }),
              A0a: VAc(g),
              lla: WAc(g),
            };
          },
          $Ac = function (a, b) {
            return (
              a.ob.pn.first(
                (c) =>
                  c.app.id === b.G.Lc.app.id &&
                  c.app.version === b.G.Lc.app.version
              )?.data ?? __c.FQ.create(new Map())
            );
          },
          VAc = function (a) {
            return (b) => {
              if ((b = a.get(b)) && b.size !== 0)
                return Array.from(b)
                  .map((c) => c.bga())
                  .reduce(
                    (c, d) => ({
                      width: Math.max(c.width, d.width),
                      height: Math.max(c.height, d.height),
                    }),
                    { width: -Infinity, height: -Infinity }
                  );
            };
          },
          WAc = function (a) {
            return (b, c) => {
              a.add(b, c);
              return () => a.remove(b, c);
            };
          },
          cBc = function (a) {
            return { xJ: a.xJ, decode: bBc(a.decode), encode: a.encode };
          },
          bBc = function (a) {
            const b = new WeakMap();
            return (c) => {
              let d = b.get(c);
              d || ((d = a(c)), b.set(c, d));
              return d;
            };
          },
          dBc = class {
            constructor(a) {
              this.ref = a;
            }
          },
          eBc = class {
            get ref() {
              return this.box.get();
            }
            constructor(a) {
              this.box = a;
            }
          },
          fBc = class {
            get ref() {
              return this.box.ref;
            }
            set() {
              throw Error("cannot set unmodifiable box");
            }
            constructor(a) {
              this.box = a;
            }
          },
          fzc = class {
            static D(a) {
              N(a, { n6: __c.CZ });
            }
            get n6() {
              const a = new Map();
              this.base.forEach((b) => a.set(this.$f(b), b));
              return a;
            }
            Et(a) {
              return y(this.n6.get(a));
            }
            RX(a) {
              return a != null ? this.$f(a) : void 0;
            }
            get empty() {
              return this.base.empty;
            }
            count() {
              return this.base.count();
            }
            toArray() {
              return this.base.toArray().map(this.$f);
            }
            Pk() {
              return Sc(this.base.Pk(), this.$f);
            }
            [__c.V7b]() {
              return this.toArray()[Symbol.iterator]();
            }
            first(a) {
              return this.RX(this.base.first(a && ((b) => a(this.$f(b)))));
            }
            last(a) {
              return this.RX(this.base.last(a && ((b) => a(this.$f(b)))));
            }
            next(a, b) {
              return this.RX(
                this.base.next(this.Et(a), b && ((c) => b(this.$f(c))))
              );
            }
            previous(a, b) {
              return this.RX(
                this.base.previous(this.Et(a), b && ((c) => b(this.$f(c))))
              );
            }
            Fe(a, b) {
              return this.base.Fe(this.Et(a), this.Et(b));
            }
            hv(a) {
              return this.base.hv(this.Et(a));
            }
            has(a) {
              return this.base.has(this.Et(a));
            }
            set(a, b) {
              return this.$f(this.base.set(a, this.$G(b)));
            }
            replace(a, b) {
              return this.$f(this.base.replace(this.Et(a), this.$G(b)));
            }
            append(a) {
              return this.$f(this.base.append(this.$G(a)));
            }
            prepend(a) {
              return this.$f(this.base.prepend(this.$G(a)));
            }
            FG(a, b) {
              return this.$f(this.base.FG(a && this.Et(a), this.$G(b)));
            }
            insertBefore(a, b) {
              return this.$f(
                this.base.insertBefore(a && this.Et(a), this.$G(b))
              );
            }
            SC(a, b) {
              return this.base.SC(a && this.Et(a), b.map(this.$G)).map(this.$f);
            }
            delete(a) {
              this.base.delete(this.Et(a));
            }
            mz(a) {
              this.base.mz(a && ((b) => a(this.$f(b))));
            }
            eq(a, b) {
              this.base.eq(a && this.Et(a), this.Et(b));
            }
            pr(a) {
              return new __c.DJ(this, a);
            }
            map(a) {
              return this.base.map((b, c) => a(this.$f(b), c));
            }
            flatMap(a) {
              return this.base.flatMap((b, c) => a(this.$f(b), c));
            }
            filter(a) {
              return this.base.filter((b, c) => a(this.$f(b), c)).map(this.$f);
            }
            forEach(a) {
              this.base.forEach((b, c) => a(this.$f(b), c));
            }
            reduce(a, b) {
              return this.base.reduce((c, d) => a(c, this.$f(d)), b);
            }
            some(a) {
              return this.base.some((b) => a(this.$f(b)));
            }
            every(a) {
              return this.base.every((b) => a(this.$f(b)));
            }
            constructor(a, b, c) {
              this.base = a;
              this.$G = b;
              this.$f = c;
              fzc.D(this);
            }
          },
          gBc = __webpack_require__(186901),
          S7 = gBc.EW,
          hBc = gBc.m3,
          iBc = gBc.sH;
        var U7 = __webpack_require__(536618).iB;
        var T7 = __webpack_require__(31968).jsx;
        var jBc = __webpack_require__(845212),
          XAc = jBc.memo,
          NAc = jBc.PureComponent,
          ZAc = jBc.useState;
        var y7 = class {
            static of(a, b, c) {
              return new y7(a, b, c);
            }
            map(a) {
              return a(this);
            }
            constructor(a, b, c) {
              this.pka = a;
              this.resultType = b;
              this.apply = c;
            }
          },
          lBc = class {
            map(a) {
              return a(this);
            }
            constructor(a, b) {
              var c = kBc;
              this.Dgb = a;
              this.resultType = b;
              this.apply = c;
            }
          },
          V7 = class {
            map(a) {
              return a(this);
            }
            constructor(a, b, c) {
              this.fBb = a;
              this.resultType = b;
              this.apply = c;
            }
          },
          nBc = class {
            map(a) {
              return a(this);
            }
            constructor(a, b, c) {
              var d = mBc;
              this.keyType = a;
              this.valueType = b;
              this.resultType = c;
              this.apply = d;
            }
          },
          mzc = class {
            map(a) {
              return a(this);
            }
            constructor(a, b, c, d) {
              this.itemType = a;
              this.Wgb = b;
              this.resultType = c;
              this.reduce = d;
            }
          };
        var pzc = class {
          map(a) {
            return a(this);
          }
          constructor(a, b) {
            this.type = a;
            this.get = b;
          }
        };
        var oBc = class {},
          Gzc = class extends oBc {
            fsa(a) {
              return new Gzc(a(this.value));
            }
            Rwa(a) {
              return a(this.value);
            }
            constructor(a) {
              super();
              this.value = this.value = a;
            }
          },
          Hzc = class extends oBc {
            fsa(a, b) {
              return new Hzc(b(this.value));
            }
            Rwa(a, b) {
              return b(this.value);
            }
            constructor(a) {
              super();
              this.value = this.value = a;
            }
          };
        var rzc = class {
            map(a) {
              return a(this);
            }
          },
          W7 = class extends rzc {
            mza(a) {
              return this === a || a.bHa((b) => this.s5(b));
            }
            JQ() {
              throw Error(`${this} is not iterable`);
            }
            qBa(a) {
              const b = this.propTypes ?? (this.propTypes = this.via());
              if (!b) throw Error(`${this} is not navigable"`);
              if (!b.hasOwnProperty(a))
                throw Error(`${this} has no navigable property "${a}"`);
              return b[a];
            }
            via() {
              throw Error(`${this} is not navigable`);
            }
            axa(a) {
              a(this);
            }
            bHa(a) {
              return a(this);
            }
            constructor() {
              super();
              this.kind = "simple";
              this.propTypes = void 0;
            }
          },
          X7 = class extends W7 {
            s5(a) {
              return a instanceof X7 && this.name === a.name;
            }
            toString() {
              return this.name;
            }
            constructor(a) {
              super();
              this.name = a;
            }
          },
          pBc = class extends W7 {
            s5(a) {
              return a instanceof pBc && this.dr === a.dr;
            }
            toString() {
              return this.dr.name;
            }
            constructor(a) {
              super();
              this.dr = a;
            }
          },
          qBc = class extends W7 {
            s5(a) {
              return (
                a instanceof qBc && this.dr === a.dr && B7(this.arg, a.arg)
              );
            }
            toString() {
              return `${this.dr}<${this.arg}>`;
            }
            constructor(a, b) {
              super();
              this.dr = a;
              this.arg = b;
            }
          },
          rBc = class extends qBc {
            JQ() {
              return this.arg;
            }
            via() {
              const a = this.arg;
              return {
                size: H7.number,
                empty: H7.Th,
                get first() {
                  return H7.optional(a);
                },
              };
            }
            constructor(a) {
              super("array", a);
            }
          },
          sBc = class extends qBc {
            JQ() {
              return this.arg;
            }
            via() {
              const a = this.arg;
              return {
                size: H7.number,
                empty: H7.Th,
                get first() {
                  return H7.optional(a);
                },
              };
            }
            constructor(a) {
              super("set", a);
            }
          },
          tBc = class extends W7 {
            s5(a) {
              return (
                a instanceof tBc &&
                B7(this.key, a.key) &&
                B7(this.value, a.value)
              );
            }
            toString() {
              return `map<${this.key}, ${this.value}>`;
            }
            constructor(a, b) {
              super();
              this.key = a;
              this.value = b;
            }
          },
          uBc = class extends W7 {
            s5(a) {
              return a instanceof uBc
                ? Object.entries(a.fields).every(
                    ([b, c]) =>
                      this.fields.hasOwnProperty(b) && B7(this.fields[b], c)
                  )
                : !1;
            }
            via() {
              return this.fields;
            }
            toString() {
              const a = Object.entries(this.fields);
              return a.length
                ? `{ ${a.map(([b, c]) => `${b}: ${c}`).join(", ")} }`
                : "{}";
            }
            constructor(a) {
              super();
              this.fields = a;
            }
          },
          Y7 = class extends rzc {
            mza(a) {
              return this === a || this.jg.every((b) => b.mza(a));
            }
            JQ() {
              return H7.union(...this.jg.map((a) => a.JQ()));
            }
            qBa(a) {
              return H7.union(...this.jg.map((b) => b.qBa(a)));
            }
            axa(a) {
              this.jg.forEach((b) => b.axa(a));
            }
            bHa(a) {
              return this.jg.some((b) => b.bHa(a));
            }
            toString() {
              return this.jg.length
                ? this.jg.map((a) => a.toString()).join(" | ")
                : "never";
            }
            constructor(a) {
              super();
              this.jg = a;
              this.kind = "disjunction";
              u(a.length !== 1);
            }
          },
          vBc = new Y7([]),
          wBc = new X7("string"),
          xBc = new X7("number"),
          yBc = new X7("boolean"),
          zBc = new X7("undefined"),
          ABc = new Y7([wBc, xBc, yBc]),
          BBc = class {
            get never() {
              return vBc;
            }
            get string() {
              return wBc;
            }
            get number() {
              return xBc;
            }
            get Th() {
              return yBc;
            }
            get undefined() {
              return zBc;
            }
            get primitive() {
              return ABc;
            }
            optional(a) {
              return H7.union(a, H7.undefined);
            }
            array(a) {
              return new rBc(a);
            }
            set(a) {
              return new sBc(a);
            }
            pV(a) {
              return new Y7([new rBc(a), new sBc(a)]);
            }
            map(a, b) {
              return new tBc(a, b);
            }
            Qc(a) {
              return new uBc({ ...a });
            }
            union(...a) {
              if (a.length === 0) return vBc;
              if (a.length === 1) return a[0];
              const b = new Set();
              for (const d of a) ozc(d).axa((e) => b.add(e));
              a = [...b];
              if (a.length === 0) return vBc;
              if (a.length === 1) return a[0];
              if (a.length === 2) {
                const [d, e] = a;
                return B7(d, e) ? e : B7(e, d) ? d : new Y7(a);
              }
              const c = new Set();
              for (const d of a)
                [...c].some((e) => B7(d, e)) ||
                  (c.forEach((e) => B7(e, d) && c.delete(e)), c.add(d));
              return c.size === 1 ? [...c][0] : new Y7([...c]);
            }
            constructor() {
              this.optional = C7(this.optional);
              this.array = C7(this.array);
              this.set = C7(this.set);
              this.pV = C7(this.pV);
            }
          },
          CBc = class extends BBc {
            instance(a) {
              return new pBc(a);
            }
          },
          H7 = new CBc(),
          DBc = class extends BBc {
            instance(a) {
              return new pBc(y(this.classes[a]));
            }
            constructor(a) {
              super();
              this.classes = a;
            }
          };
        var EBc,
          FBc,
          Z7 = Symbol("value"),
          GBc = class {
            get props() {
              return this.Nfb ?? (this.Nfb = this.Dra());
            }
          },
          HBc = class {
            get size() {
              return this[Z7].length;
            }
            get empty() {
              return this[Z7].length === 0;
            }
            get first() {
              return this[Z7][0];
            }
            constructor(a) {
              this[Z7] = a;
            }
          };
        EBc = Symbol.iterator;
        var IBc = class extends GBc {
            Dra() {
              return new HBc(this.items);
            }
            map(a) {
              return this.items.map(a);
            }
            [EBc]() {
              return this.items[Symbol.iterator]();
            }
            toString() {
              return this.items.length
                ? `[${Array.from(this.items, D7).join(", ")}]`
                : "[]";
            }
            constructor(a) {
              super();
              this.kind = "array";
              this.items = [...a];
            }
          },
          JBc = class {
            get size() {
              return this[Z7].size;
            }
            get empty() {
              return this[Z7].size === 0;
            }
            get first() {
              return this[Z7][Symbol.iterator]().next().value;
            }
            constructor(a) {
              this[Z7] = a;
            }
          };
        FBc = Symbol.iterator;
        var KBc = class extends GBc {
            Dra() {
              return new JBc(this.items);
            }
            map(a) {
              return Array.from(this.items, a);
            }
            [FBc]() {
              return this.items[Symbol.iterator]();
            }
            toString() {
              return this.items.size
                ? `Set [${Array.from(this.items, D7).join(", ")}]`
                : "Set []";
            }
            constructor(a) {
              super();
              this.kind = "set";
              this.items = new Set(a);
            }
          },
          LBc = class {
            toString() {
              return this.items.size
                ? `Map {${Array.from(
                    this.items,
                    ([a, b]) => `[${D7(a)}]: ${D7(b)}`
                  ).join(", ")}}`
                : "Map {}";
            }
            constructor(a) {
              this.items = a;
              this.kind = "map";
            }
          },
          MBc = class extends GBc {
            Dra() {
              return this.fields;
            }
            toString() {
              const a = Object.entries(this.fields);
              return a.length
                ? `{ ${[...a].map(([b, c]) => `${b}: ${D7(c)}`).join(", ")} }`
                : "{}";
            }
            constructor(a) {
              super();
              this.fields = a;
              this.kind = "record";
            }
          },
          NBc = class {
            toString() {
              return `[instance ${this.dr.name}]`;
            }
            constructor(a, b) {
              this.dr = a;
              this.instance = b;
              this.kind = "instance";
            }
          },
          OBc = class {
            array(a) {
              return new IBc(a);
            }
            arrayOf(...a) {
              return new IBc(a);
            }
            set(a) {
              return new KBc(a);
            }
            map(a) {
              return new LBc(new Map(a));
            }
            Qc(a) {
              return new MBc({ ...a });
            }
          },
          PBc = class extends OBc {
            instance(a, b) {
              return new NBc(a, b);
            }
            stringify(a) {
              return D7(a);
            }
            constructor() {
              super();
              this.mh = uzc;
            }
          },
          L7 = new PBc(),
          QBc = class extends OBc {
            instance(a, b) {
              a = y(this.classes[a]);
              return new NBc(a, b);
            }
            constructor(a) {
              super();
              this.classes = a;
            }
          };
        var Ezc = {
            [0]: lzc(H7.number, H7.number, (a) => -a),
            [1]: lzc(H7.string, H7.number, (a) => a.length),
            [2]: lzc(H7.Th, H7.Th, (a) => !a),
            [3]: z7(H7.number, H7.number, H7.number, (a, b) => a + b),
            [4]: z7(H7.number, H7.number, H7.number, (a, b) => a - b),
            [5]: z7(H7.number, H7.number, H7.number, (a, b) => a * b),
            [6]: z7(H7.number, H7.number, H7.number, (a, b) => a / b),
            [7]: z7(H7.number, H7.number, H7.number, (a, b) => a % b),
            [8]: z7(H7.string, H7.string, H7.string, (a, b) => a + b),
            [9]: z7(H7.number, H7.number, H7.Th, (a, b) => a === b),
            [10]: z7(H7.number, H7.number, H7.Th, (a, b) => a !== b),
            [11]: z7(H7.number, H7.number, H7.Th, (a, b) => a < b),
            [12]: z7(H7.number, H7.number, H7.Th, (a, b) => a <= b),
            [13]: z7(H7.number, H7.number, H7.Th, (a, b) => a > b),
            [14]: z7(H7.number, H7.number, H7.Th, (a, b) => a >= b),
            [15]: z7(H7.Th, H7.Th, H7.Th, (a, b) => a && b),
            [16]: z7(H7.Th, H7.Th, H7.Th, (a, b) => a || b),
          },
          Kzc = {
            [2]: new V7(H7.number, H7.number, (a) =>
              a.reduce((b, c) => b + c, 0)
            ),
            [3]: new V7(H7.number, H7.number, (a) =>
              a.reduce((b, c) => b * c, 1)
            ),
            [4]: new V7(H7.number, H7.number, (a) => Math.max(...a)),
            [5]: new V7(H7.number, H7.number, (a) => Math.min(...a)),
            [6]: new V7(H7.string, H7.string, (a) => a.join("")),
          },
          RBc = (a) => L7.array(a),
          SBc = (a) => L7.set(a),
          Izc = {
            [0]: (a) => new V7(a, H7.array(a), RBc),
            [1]: (a) => new V7(a, H7.set(a), SBc),
          },
          mBc = (a) => L7.map(a),
          vzc = { [0]: (a, b) => new nBc(a, b, H7.map(a, b)) },
          kBc = (a) => L7.Qc(a),
          Nzc = { [0]: (a) => new lBc(a, H7.Qc(a)) },
          TBc = (a, b) => L7.array(b.map((c) => c())),
          UBc = (a, b) => L7.array(b.flatMap((c) => c().items)),
          VBc = (a, b) => L7.array(a.filter((c, d) => b[d]()).map((c) => c())),
          WBc = (a, b) => b.some((c) => c()),
          XBc = (a, b) => b.every((c) => c()),
          YBc = (a, b) => a.find((c, d) => b[d]())?.(),
          xzc = {
            [0]: (a, b) => b.map((c) => A7(a, c, H7.array(c), TBc)),
            [1]: (a, b) =>
              b.JQ().map((c) => A7(a, H7.array(c), H7.array(c), UBc)),
            [2]: (a) => A7(a, H7.Th, H7.array(a), VBc),
            [3]: (a) => A7(a, H7.Th, H7.Th, WBc),
            [4]: (a) => A7(a, H7.Th, H7.Th, XBc),
            [5]: (a) => A7(a, H7.Th, H7.optional(a), YBc),
          };
        var F7 = class {
          define(a, b) {
            return new F7(new Map([[a, b]]), this);
          }
          resolve(a) {
            const b = this.defs.get(a);
            if (b) return b;
            if (this.parent) return this.parent.resolve(a);
            throw Error(`undefined symbol: "${a}"`);
          }
          constructor(a, b) {
            this.defs = a;
            this.parent = b;
          }
        };
        var $Bc = (a, b, c) => {
            const d = E7.create(b.xJ),
              e = new ZBc(a);
            return {
              compile: (f) => {
                const g = Bzc(e, d, f).as(c);
                return (h) => {
                  h = new F7(new Map(b.decode(h).eFa));
                  return g(h);
                };
              },
            };
          },
          E7 = class {
            static create(a) {
              return new E7(new F7(new Map(a)), new F7(new Map()));
            }
            constructor(a = new F7(new Map()), b = new F7(new Map())) {
              this.vars = a;
              this.e4 = b;
            }
          },
          ZBc = class {
            constructor(a) {
              this.types = a;
            }
          },
          J7 = class {
            static of(a, b) {
              return new J7(a, b);
            }
            as(a) {
              if (!B7(this.type, a))
                throw Error(
                  `type ${this.type} does not match expected type: ${a}`
                );
              return this.evaluate;
            }
            computed() {
              const a = this.evaluate;
              return new J7(this.type, (b) => {
                const c = S7(a(b), { equals: L7.mh });
                return () => c.get();
              });
            }
            map(a) {
              return a(this.type, this.evaluate);
            }
            constructor(a, b) {
              this.type = a;
              this.evaluate = b;
            }
          },
          Yzc = class {
            as(a, b) {
              const c = this.pka,
                d = this.resultType;
              if (a.length < c.length)
                throw Error(
                  `Target signature provides too few arguments. Expected ${c.length} or more, got ${a.length}.`
                );
              for (let e = 0; e < c.length; e++)
                if (!B7(a[e], c[e]))
                  throw Error(
                    `Types of parameter ${e} are incompatible.  Type ${a[e]} is not assignable to parameter type: ${c[e]}`
                  );
              if (!B7(d, b))
                throw Error(
                  `return type ${d} is not assignable to expected type: ${b}`
                );
              return this.evaluate;
            }
            map(a) {
              return a(this);
            }
            constructor(a, b, c) {
              this.pka = a;
              this.resultType = b;
              this.evaluate = c;
            }
          };
        var HAc = class {
            add(a) {
              a = a(aCc, this.types);
              return new HAc({ ...this.classes, ...a });
            }
            resolve(a) {
              return this.classes[a];
            }
            evaluate(a) {
              const b = this.types;
              switch (a.kind) {
                case 0:
                  switch (a.name) {
                    case "string":
                      return b.string;
                    case "number":
                      return b.number;
                    case "boolean":
                      return b.Th;
                    case "undefined":
                      return b.undefined;
                    default:
                      throw new D(a);
                  }
                case 1:
                  return b.instance(a.name);
                case 4:
                  switch (a.name) {
                    case "array":
                      return b.array(this.evaluate(a.LNa));
                    case "set":
                      return b.set(this.evaluate(a.LNa));
                    default:
                      throw new D(a);
                  }
                case 5:
                  switch (a.name) {
                    case "map":
                      const c = this.evaluate(a.LNa);
                      a = this.evaluate(a.yOb);
                      if (!B7(c, b.primitive))
                        throw Error(`key type is not a primitive: ${c}`);
                      return b.map(c, a);
                    default:
                      throw new D(a);
                  }
                case 3:
                  return b.union(...a.args.map((c) => this.evaluate(c)));
                case 2:
                  return b.Qc(ie(a.args, (c) => this.evaluate(c)));
                default:
                  throw new D(a);
              }
            }
            constructor(a) {
              this.classes = a;
              this.types = new DBc(this.classes);
              this.values = new QBc(this.classes);
            }
          },
          aCc = class {
            constructor(a, b, c) {
              this.name = a;
              this.create = c;
              this.Wxb = new y7([H7.Qc(b)], H7.instance(this), (d) =>
                L7.instance(this, c(d.fields))
              );
            }
          };
        var bCc;
        bCc = Symbol.iterator;
        var Zzc = class {
          static D(a) {
            N(a, { n6: S7 });
          }
          get n6() {
            const a = new Map();
            this.base.forEach((b) => a.set(this.$f(b), b));
            return a;
          }
          Et(a) {
            return y(this.n6.get(a));
          }
          RX(a) {
            return a != null ? this.$f(a) : void 0;
          }
          get size() {
            return this.base.size;
          }
          get(a) {
            a = this.base.get(a);
            return this.RX(a);
          }
          has(a) {
            return this.base.has(a);
          }
          forEach(a) {
            this.base.forEach((b, c) => a(this.$f(b), c));
          }
          map(a) {
            return this.base.map((b, c) => a(this.$f(b), c));
          }
          set(a, b) {
            return this.$f(this.base.set(a, this.$G(b)));
          }
          every(a) {
            return this.base.every((b, c) => a(this.$f(b), c));
          }
          delete(a) {
            this.base.delete(a);
          }
          entries() {
            return aAc(this.base.entries(), ([a, b]) => [a, this.$f(b)]);
          }
          keys() {
            return this.base.keys();
          }
          values() {
            return aAc(this.base.values(), this.$f);
          }
          [bCc]() {
            return this.Pk()[Symbol.iterator]();
          }
          Pk() {
            return Sc(this.base.Pk(), this.$f);
          }
          constructor(a, b, c) {
            this.base = a;
            this.$G = b;
            this.$f = c;
            Zzc.D(this);
          }
        };
        var $7 = class {
            hK(a) {
              return new cCc(this, a);
            }
            T3(a) {
              return new dCc(this, a);
            }
            IP(a) {
              return new eCc(this, a);
            }
            toString() {
              return this.s ?? (this.s = this.o6());
            }
          },
          oAc = class extends $7 {
            hK(a) {
              return new fCc(a);
            }
            T3() {
              throw Error();
            }
            IP() {
              throw Error();
            }
            o6() {
              return "(global)";
            }
          },
          fCc = class extends $7 {
            o6() {
              return this.name;
            }
            constructor(a) {
              super();
              this.name = a;
            }
          },
          cCc = class extends $7 {
            o6() {
              return `${this.parent}.${this.name}`;
            }
            constructor(a, b) {
              super();
              this.parent = a;
              this.name = b;
            }
          },
          dCc = class extends $7 {
            o6() {
              return `${this.parent}["${this.key}"]`;
            }
            constructor(a, b) {
              super();
              this.parent = a;
              this.key = b;
            }
          },
          eCc = class extends $7 {
            o6() {
              return `${this.parent}[${this.index}]`;
            }
            constructor(a, b) {
              super();
              this.parent = a;
              this.index = b;
            }
          },
          nAc = class {
            error(a, b) {
              return Error(
                `widget '${this.dLb}': schema error on key '${a}': ${b}`
              );
            }
            constructor(a) {
              this.dLb = a;
            }
          },
          rAc = {
            string: "string",
            boolean: "boolean",
            double: "number",
            int32: "number",
            list: "object",
            dict: "object",
            ref: "object",
            fill: "object",
            stroke: "object",
            text2: "object",
          },
          hAc = new Set(["string", "boolean", "int32"]),
          sAc = {
            font: "font",
            media: "media",
            video: "video",
            audio: "audio",
            embed: "embed",
            scene: "scene",
            blueprint: "blueprint",
          };
        var a8 = class {
            map(a, b) {
              const c = this.get,
                d = this.set;
              return new a8(
                () => a(c()),
                (e) => d(b(e))
              );
            }
            project({ get: a, set: b }) {
              const c = this.get,
                d = this.set;
              return new a8(
                () => a(c()),
                (e) => d(b(c(), e))
              );
            }
            LWa() {
              const a = this.set;
              return new a8(this.get, (b) => b != null && a(b));
            }
            constructor(a, b) {
              this.get = a;
              this.set = b;
            }
          },
          gCc = class {
            read(a) {
              return O7(a) ? a() : a;
            }
            computed(a) {
              const b = S7(a);
              return () => b.get();
            }
            map(a, b) {
              return O7(a) ? () => b(a()) : b(a);
            }
            V7(a, b) {
              const c = tAc(b);
              u(c in a, "key not found: '{}'", c);
              return new a8(
                () => a[c],
                (d) => (a[c] = d)
              );
            }
            box(a) {
              return new fBc(O7(a) ? new eBc(S7(a)) : new dBc(a));
            }
            list(a) {
              const b = this.map(
                a,
                (c) =>
                  new __c.a9a(
                    new __c.EZ(c.map((d) => (O7(d) ? S7(d) : vAc(d))))
                  )
              );
              return O7(b) ? __c.pe(() => b()) : b;
            }
            constructor() {
              this.classes = GAc();
            }
          },
          AAc = (a) => {
            const b = a.dr,
              c = a.Zj,
              d = c.U,
              e = c.attributes;
            wAc(a.args, d, e);
            return {
              create: function (f, g) {
                const h = {};
                var k;
                const l = g?.U;
                g = g?.attributes;
                if (l)
                  for (const [m, n] of Object.entries(l))
                    u(m in d, "unknown override: '{}'", m),
                      O7(n) ? ((k || (k = {}))[m] = n) : (h[m] = hCc(n));
                if (g)
                  for (const [m, n] of Object.entries(g))
                    u(m in e, "unknown override: '{}'", m),
                      (h[m] =
                        n instanceof a8
                          ? n
                          : O7(n)
                          ? { enumerable: !0, get: n, set: uAc }
                          : iCc(n));
                if (k)
                  return xAc(
                    k,
                    zAc((m) => {
                      const n = b(f);
                      Object.defineProperties(n, { ...h, ...ie(m, hCc) });
                      return n;
                    })
                  );
                k = b(f);
                Object.defineProperties(k, h);
                return k;
              },
            };
          },
          uAc = () => {},
          hCc = (a) => ({ enumerable: !0, writable: !1, value: a }),
          iCc = (a) => ({ enumerable: !0, get: () => a, set: uAc });
        var BAc = {
          top: void 0,
          left: void 0,
          width: void 0,
          height: void 0,
          rotation: void 0,
          locked: void 0,
          Dj: void 0,
        };
        var jCc = new Map(),
          b8 = [],
          Q7 = Object.freeze({
            Mm: void 0,
            image: void 0,
            video: void 0,
            Ua: void 0,
            color: void 0,
            wa: 0,
            locked: !0,
            Cg: !0,
            Ol: void 0,
            bd: void 0,
            M: void 0,
            transition: void 0,
            flipX: !1,
            flipY: !1,
          }),
          IAc = Object.freeze({ fill: Q7, stroke: void 0, O: 0 }),
          DAc = Object.freeze({
            weight: 0,
            color: "#000000",
            fill: Q7,
            Ic: b8,
            ke: !1,
          }),
          c8 = Object.freeze({
            top: 0,
            left: 0,
            width: 0,
            height: 0,
            rotation: 0,
            wa: 0,
            Ai: void 0,
            ia: void 0,
            M: void 0,
            transition: void 0,
            na: b8,
            Tb: b8,
            animation: void 0,
            vf: void 0,
            link: void 0,
            locked: !0,
            Dj: void 0,
            Cg: !0,
            Ol: void 0,
            Qa: void 0,
            wu: void 0,
            mf: b8,
            LD: jCc,
            QA: jCc,
            anchor: void 0,
            Lg: jCc,
          }),
          R7 = Object.freeze({
            ...c8,
            type: "rect",
            fill: Q7,
            stroke: void 0,
            O: b8,
          }),
          KAc = Object.freeze({
            ...c8,
            type: "shape",
            slice: void 0,
            Qj: void 0,
            xb: b8,
            resizeMode: void 0,
          }),
          EAc = Object.freeze({
            ...c8,
            type: "text",
            text: __c.Si.Mw("\n"),
            Ea: Object.freeze({ eb: [] }),
            Ge: void 0,
            placeholder: void 0,
            Lf: 1,
            writingMode: void 0,
            I: void 0,
            P: void 0,
            En: !1,
            az: void 0,
            eh: void 0,
            bd: void 0,
          }),
          FAc = Object.freeze({ ...c8, type: "embed" });
        var mCc = class {
            pda(a, b) {
              const c = __c.Fh(a);
              __c.x(c.type !== "body", "Unexpected body context.");
              switch (c.type) {
                case "fixed-page":
                  return { page: this.fl.tVa(c), N: new kCc(a), uf: b };
                case "concatenated-fixed-page":
                  return { page: this.fl.jVa(c), N: new kCc(a), uf: b };
                case "responsive-page":
                  return { page: this.fl.IVa(c), N: new kCc(a), uf: b };
                default:
                  throw new D(c);
              }
            }
            constructor(a, b) {
              this.Ela = a;
              u(
                b.Xe === "fixed",
                "Responsive documents are not supported in widget rendering."
              );
              this.ob = __c.Lh(b);
              this.fl = new lCc(this.Ela, this.ob);
            }
          },
          kCc = class {
            get width() {
              return this.container.type === "controlled-item"
                ? this.container.G.oh?.width || 0
                : this.container.G.I;
            }
            get height() {
              return this.container.type === "controlled-item"
                ? this.container.G.oh?.height || 0
                : this.container.G.P;
            }
            constructor(a) {
              this.container = a;
            }
          },
          nCc = class {
            getIndex() {
              return this.sK(this.page);
            }
            get id() {
              return this.page.G.id;
            }
            get title() {
              return this.page.G.title;
            }
            get anchor() {
              return this.page.G.anchor;
            }
            get vtb() {
              return this.page.G.Nf;
            }
            constructor(a, b) {
              this.page = a;
              this.sK = b;
            }
          },
          oCc = class extends nCc {
            constructor(a, b, c) {
              super(a, b);
              this.page = a;
              this.container = c;
              this.type = "fixed";
            }
          },
          pCc = class extends nCc {
            constructor(a, b, c) {
              super(a, b);
              this.page = a;
              this.container = c;
              this.type = "concatenated-fixed";
            }
          },
          qCc = class extends nCc {
            constructor(a, b, c) {
              super(a, b);
              this.page = a;
              this.container = c;
              this.type = "responsive";
            }
          },
          rCc = class {
            get id() {
              return this.Ela?.id;
            }
            get extension() {
              return this.Ela?.extension;
            }
            get language() {
              return this.ob.G.language;
            }
            constructor(a, b) {
              this.Ela = a;
              this.ob = b;
            }
          },
          lCc = class extends rCc {
            static D(a) {
              N(a, {
                Z: S7({ equals: hBc.shallow }),
                K0a: S7({ equals: hBc.shallow }),
              });
            }
            get Z() {
              return this.ob.G.Z.map((a) => this.vqb(this.ob.le(a)));
            }
            get K0a() {
              return this.ob.G.Z.toArray();
            }
            constructor(a, b) {
              super(a, b);
              this.jr = a;
              this.ob = b;
              this.type = (lCc.D(this), "fixed");
              this.tVa = U7((c) => new oCc(c, this.sK, this));
              this.jVa = U7((c) => new pCc(c, this.sK, this));
              this.IVa = U7((c) => new qCc(c, this.sK, this));
              this.vqb = U7((c) => {
                switch (c.type) {
                  case "fixed-page":
                    return this.tVa(c);
                  case "concatenated-fixed-page":
                    return this.jVa(c);
                  case "responsive-page":
                    return this.IVa(c);
                  default:
                    throw new D(c);
                }
              });
              this.sK = U7((c) => {
                c = this.ob.G.Z.has(c.G) ? c.G : void 0;
                return c != null ? this.K0a.indexOf(c) : -1;
              });
            }
          };
        var sCc = class {
          Fsb(a, b, c) {
            const d = y(this.lFa.z8.get(a));
            u(d.G === b.G);
            u(!this.UQa.has(a));
            b = MAc(a, c, b);
            this.UQa.set(a, b);
            return b;
          }
          constructor(a) {
            this.lFa = a;
            this.UQa = new Map();
          }
        };
        var aBc = class {
          add(a, b) {
            let c = this.store.get(a);
            c || ((c = new Set()), this.store.set(a, c));
            c.add(b);
          }
          get(a) {
            return this.store.get(a);
          }
          remove(a, b) {
            const c = this.store.get(a);
            c && (c.delete(b), c.size === 0 && this.store.delete(a));
          }
          constructor() {
            this.store = new WeakMap();
          }
        };
        var PAc = class {
          md(a) {
            let b = this.store.get(a);
            b == null && ((b = this.rkb()), this.store.set(a, b));
            return b;
          }
          constructor(a) {
            this.rkb = a;
            this.store = new WeakMap();
          }
        };
        var tCc = new Set(),
          uCc = { hz: () => ({ Ja: __c.T7b }) },
          vCc = class {
            static D(a) {
              N(a, { ula: iBc.shallow });
            }
            Lsb(a, b, c) {
              const d = y(this.lFa.z8.get(a));
              u(d.G === b.G);
              u(!this.ula.has(a));
              tCc.has(a) || (__c.GQ.set(a, uCc), tCc.add(a));
              const { Hnb: e, $K: f } = SAc(this, b, c);
              b = { G: e, exports: c.exports, $K: f };
              this.ula.set(a, b);
              return b;
            }
            vUa(a) {
              return this.ula.get(a)?.G;
            }
            constructor(a, b, c, d, e, f, g) {
              this.ob = a;
              this.lFa = b;
              this.XZ = c;
              this.cua = d;
              this.J = e;
              this.aLb = f;
              this.Hi = g;
              this.ula = (vCc.D(this), new Map());
            }
          },
          YAc = (a, b) => ({
            ...a,
            Jpa: (c) => T7(a.Jpa, { ...c, Thb: b || !1 }),
          });
        var wCc = class {
          static D(a) {
            N(a, { z8: iBc.shallow });
          }
          Msb(a, b) {
            u(!this.z8.has(a));
            b = {
              document: cBc(this.QQa(a, b.document)),
              G: cBc(this.QQa(a, b.G)),
            };
            this.z8.set(a, b);
            return b;
          }
          constructor(a) {
            this.QQa = a;
            this.z8 = (wCc.D(this), new Map());
          }
        };
        __c.hYa = {
          BWb: function (a) {
            a = new sCc(a);
            return { bLb: a, $7b: a };
          },
          Ssb: function (a) {
            var b = a.tKa,
              c = a.eLb;
            const d = a.sua,
              e = a.XZ,
              f = a.J,
              g = a.ob;
            a = new mCc(a.jr, g);
            b = new vCc(g, b, e, d, f, a, c);
            c = new gCc();
            return { faa: b, FI: b, expr: c };
          },
          Tsb: function () {
            var a = { ep: LAc(), cua: $Bc };
            const { ep: b, cua: c } = a;
            a = new wCc(pAc(b));
            return { uKa: a, tKa: a, sua: c, XZ: b };
          },
        };
      }.call(self, self._5f74ec40302898c5a55451c9fbd04240));
    },
  },
]);
//# sourceMappingURL=sourcemaps/b8cb03a07d380c74.js.map
