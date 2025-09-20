(self["webpackChunk_canva_web"] = self["webpackChunk_canva_web"] || []).push([
  [8241],
  {
    /***/ 923332: function (_, __, __webpack_require__) {
      __webpack_require__.n_x = __webpack_require__.n;
      const __web_req__ = __webpack_require__;
      __web_req__(905716);
      self._5f74ec40302898c5a55451c9fbd04240 =
        self._5f74ec40302898c5a55451c9fbd04240 || {};
      (function (__c) {
        var AZ;
        var CZ;
        var u = __c.u;
        var vZ, P7b, Q7b, yZ, R7b, S7b;
        vZ = function () {
          throw Error("ref not found");
        };
        __c.wZ = function (a) {
          return { kind: 0, cM: a };
        };
        P7b = function () {
          return { kind: 1 };
        };
        __c.xZ = function (a) {
          return { kind: 3, range: a };
        };
        Q7b = function (a) {
          return { kind: 2, range: a };
        };
        yZ = function (...a) {
          return { kind: 4, values: new Set(a) };
        };
        R7b = function (a) {
          return { kind: 5, itemType: a };
        };
        S7b = function (a) {
          return { kind: 7, name: a };
        };
        __c.zZ = function (a) {
          return { kind: 10, fields: a };
        };
        AZ = __c.AZ = function (a, b, c) {
          return (d, ...e) => ({ key: d, DGa: a, HD: b, type: c(...e) });
        };
        __c.BZ = function (a) {
          const b = new Set();
          for (const c of Object.values(a))
            u(!b.has(c.key), "duplicate key: {}", c.key), b.add(c.key);
          return a;
        };
        CZ = __c.CZ = __webpack_require__(186901).EW;
        __c.T7b = Object.freeze({
          empty: !0,
          count() {
            return 0;
          },
          toArray() {
            return [];
          },
          Pk() {
            return new Map();
          },
          first() {},
          last() {},
          next() {
            vZ();
          },
          previous() {
            vZ();
          },
          Fe() {
            vZ();
          },
          hv() {
            vZ();
          },
          has() {
            return !1;
          },
          pr() {
            return this;
          },
          map() {
            return [];
          },
          flatMap() {
            return [];
          },
          filter() {
            return [];
          },
          forEach() {},
          reduce(a, b) {
            return b;
          },
          some() {
            return !1;
          },
          every() {
            return !0;
          },
          [Symbol.iterator]() {
            return [][Symbol.iterator]();
          },
        });
        var U7b;
        U7b = Symbol.iterator;
        __c.DZ = class {
          static D(a) {
            __c.N(a, { Rl: CZ, Yp: CZ });
          }
          get Rl() {
            return this.Igb().map((a) => {
              let b = this.GWa.get(a);
              b == null && ((b = `${this.Prb++}`), this.GWa.set(a, b));
              return { id: b, ref: a };
            });
          }
          get Yp() {
            const a = new Map();
            this.Rl.forEach((b, c) => b && a.set(b.ref, c));
            return a;
          }
          Xj(a) {
            return __c.y(this.Yp.get(a), "ref not found");
          }
          get empty() {
            return !this.Rl.length;
          }
          count() {
            return this.Rl.length;
          }
          toArray() {
            return this.Rl.map((a) => a.ref);
          }
          Pk() {
            return new Map(this.map((a, b) => [b, a]));
          }
          get EP() {
            const a = this.Rl[0];
            return a && a.ref;
          }
          get NQ() {
            const a = this.Rl[this.Rl.length - 1];
            return a && a.ref;
          }
          first(a) {
            if (!a) return this.EP;
            const b = this.Rl.find((c) => a(c.ref));
            return b && b.ref;
          }
          last(a) {
            if (!a) return this.NQ;
            const b = this.Rl;
            for (let c = b.length - 1; c >= 0; c--) {
              const d = b[c];
              if (a(d.ref)) return d.ref;
            }
          }
          next(a, b) {
            const c = this.Rl;
            for (a = this.Xj(a) + 1; a < c.length; a++) {
              const d = c[a];
              if (!b || b(d.ref)) return d.ref;
            }
          }
          previous(a, b) {
            const c = this.Rl;
            for (a = this.Xj(a) - 1; a >= 0; a--) {
              const d = c[a];
              if (!b || b(d.ref)) return d.ref;
            }
          }
          Fe(a, b) {
            a = this.Yp.get(a);
            b = this.Yp.get(b);
            u(a != null);
            u(b != null);
            return a < b ? -1 : a > b ? 1 : 0;
          }
          hv(a) {
            return this.Rl[this.Xj(a)].id;
          }
          has(a) {
            return this.Yp.has(a);
          }
          pr(a) {
            return new __c.DJ(this, a);
          }
          map(a) {
            return this.Rl.map(({ ref: b, id: c }) => a(b, c));
          }
          flatMap(a) {
            return this.Rl.flatMap(({ ref: b, id: c }) => a(b, c));
          }
          filter(a) {
            return this.Rl.filter((b) => a(b.ref, b.id)).map((b) => b.ref);
          }
          forEach(a) {
            this.Rl.forEach((b, c) => a(b.ref, b.id, c));
          }
          reduce(a, b) {
            return this.Rl.reduce((c, d) => a(c, d.ref, d.id), b);
          }
          some(a) {
            return this.Rl.some((b) => a(b.ref, b.id));
          }
          every(a) {
            return this.Rl.every((b) => a(b.ref, b.id));
          }
          [U7b]() {
            return this.toArray()[Symbol.iterator]();
          }
          constructor(a) {
            this.Igb = a;
            this.Prb = (__c.DZ.D(this), 0);
            this.GWa = new WeakMap();
          }
        };
        __c.V7b = Symbol.iterator;
        var W7b,
          X7b = class {
            get value() {
              return this.box.get();
            }
            constructor(a, b) {
              this.id = a;
              this.box = b;
            }
          };
        W7b = Symbol.iterator;
        __c.EZ = class {
          static D(a) {
            __c.N(a, { Yp: CZ, EP: CZ, NQ: CZ });
          }
          get Yp() {
            const a = new Map();
            this.cells.forEach((b, c) => a.set(b.value, c));
            return a;
          }
          Xj(a) {
            return __c.y(this.Yp.get(a), "ref not found");
          }
          get empty() {
            return !this.cells.length;
          }
          count() {
            return this.cells.length;
          }
          toArray() {
            return this.cells.map((a) => a.value);
          }
          Pk() {
            return new Map(this.map((a, b) => [b, a]));
          }
          get EP() {
            const a = this.cells[0];
            return a && a.value;
          }
          get NQ() {
            const a = this.cells[this.cells.length - 1];
            return a && a.value;
          }
          first(a) {
            if (!a) return this.EP;
            const b = this.cells.find((c) => a(c.value));
            return b && b.value;
          }
          last(a) {
            if (!a) return this.NQ;
            const b = this.cells;
            for (let c = b.length - 1; c >= 0; c--) {
              const d = b[c];
              if (a(d.value)) return d.value;
            }
          }
          next(a, b) {
            const c = this.cells;
            for (a = this.Xj(a) + 1; a < c.length; a++) {
              const d = c[a];
              if (d && (!b || b(d.value))) return d.value;
            }
          }
          previous(a, b) {
            const c = this.cells;
            for (a = this.Xj(a) - 1; a >= 0; a--) {
              const d = c[a];
              if (d && (!b || b(d.value))) return d.value;
            }
          }
          Fe(a, b) {
            a = this.Yp.get(a);
            b = this.Yp.get(b);
            u(a != null);
            u(b != null);
            return a < b ? -1 : a > b ? 1 : 0;
          }
          hv(a) {
            return this.cells[this.Xj(a)].id;
          }
          has(a) {
            return this.Yp.has(a);
          }
          pr(a) {
            return new __c.DJ(this, a);
          }
          map(a) {
            return this.cells.map((b) => a(b.value, b.id));
          }
          flatMap(a) {
            return this.cells.flatMap((b) => a(b.value, b.id));
          }
          filter(a) {
            return this.cells
              .filter((b) => a(b.value, b.id))
              .map((b) => b.value);
          }
          forEach(a) {
            this.cells.forEach((b) => a(b.value, b.id));
          }
          reduce(a, b) {
            return this.cells.reduce((c, d) => a(c, d.value, d.id), b);
          }
          some(a) {
            return this.cells.some((b) => a(b.value, b.id));
          }
          every(a) {
            return this.cells.every((b) => a(b.value, b.id));
          }
          [W7b]() {
            return this.toArray()[Symbol.iterator]();
          }
          constructor(a) {
            this.cells = (__c.EZ.D(this), void 0);
            this.cells = a.map((b, c) => new X7b(String(c), b));
          }
        };
        __c.Y7b = AZ(0, 0, __c.wZ);
        __c.Z7b = AZ(0, 0, Q7b);
        __c.FZ = AZ(0, 0, yZ);
        __c.GZ = AZ(1, 0, __c.wZ);
        __c.$7b = AZ(1, 0, P7b);
        __c.HZ = AZ(1, 0, yZ);
        __c.IZ = AZ(1, 0, __c.xZ);
        __c.a8b = AZ(1, 0, R7b);
        __c.JZ = AZ(1, 1, __c.wZ);
        __c.KZ = AZ(1, 1, P7b);
        __c.LZ = AZ(1, 1, Q7b);
        __c.b8b = AZ(1, 1, __c.xZ);
        __c.MZ = AZ(1, 1, yZ);
        __c.c8b = AZ(1, 1, R7b);
        __c.NZ = AZ(0, 0, S7b);
        __c.d8b = AZ(0, 0, function (a) {
          return { kind: 8, itemType: a };
        });
        __c.e8b = AZ(0, 0, __c.zZ);
        __c.f8b = AZ(0, 1, function (a) {
          return { kind: 9, itemType: a };
        });
        __c.g8b = AZ(1, 0, __c.zZ);
        __c.h8b = AZ(1, 1, S7b);
        __c.i8b = __c.BZ({});
      }.call(self, self._5f74ec40302898c5a55451c9fbd04240));
    },
  },
]);
//# sourceMappingURL=sourcemaps/37da37b97c7c653c.js.map
