import { defineComponent as Ot, h as Q, ref as q, computed as wt, watch as xt, onBeforeMount as ue, onActivated as fe, onDeactivated as pe, onMounted as ge, onUnmounted as me, isRef as Se } from "vue";
const Wt = {
  capture: !1,
  passive: !1
}, kt = /\s+/g;
function nt(o) {
  if (typeof window < "u" && window.navigator)
    return !!/* @__PURE__ */ navigator.userAgent.match(o);
}
const pt = nt(/(?:Trident.*rv[ :]?11\.|msie|iemobile|Windows Phone)/i), Pt = nt(/Edge/i), Et = nt(/safari/i) && !nt(/chrome/i) && !nt(/android/i), Ut = (function() {
  let o = !1;
  return document.addEventListener("checkIfSupportPassive", null, {
    get passive() {
      return o = !0, !0;
    }
  }), o;
})();
function _(o, t, e) {
  window.addEventListener ? o.addEventListener(t, e, Ut || !pt ? Wt : !1) : window.attachEvent ? o.attachEvent("on" + t, e) : o["on" + t] = e;
}
function C(o, t, e) {
  window.removeEventListener ? o.removeEventListener(t, e, Ut || !pt ? Wt : !1) : window.detachEvent ? o.detachEvent("on" + t, e) : o["on" + t] = null;
}
function ye(o, t) {
  if (!o || !o.getBoundingClientRect)
    return ht();
  let e = o;
  do
    if (e.clientWidth < e.scrollWidth || e.clientHeight < e.scrollHeight) {
      let n = m(e);
      if (e.clientWidth < e.scrollWidth && (n.overflowX == "auto" || n.overflowX == "scroll") || e.clientHeight < e.scrollHeight && (n.overflowY == "auto" || n.overflowY == "scroll"))
        return !e.getBoundingClientRect || e === document.body ? ht() : e;
    }
  while (e = e.parentNode);
  return ht();
}
function ht() {
  return document.scrollingElement || document.documentElement;
}
function z(o, t, e) {
  if (!o.getBoundingClientRect && o !== window) return;
  let n, i, s, r, a, d, f;
  if (o !== window && o.parentNode && o !== ht() ? (n = o.getBoundingClientRect(), i = n.top, s = n.left, r = n.bottom, a = n.right, d = n.height, f = n.width) : (i = 0, s = 0, r = window.innerHeight, a = window.innerWidth, d = window.innerHeight, f = window.innerWidth), t && o !== window) {
    e = e || o.parentNode;
    do
      if (e && e.getBoundingClientRect) {
        let S = e.getBoundingClientRect();
        i -= S.top + parseInt(m(e, "border-top-width")), s -= S.left + parseInt(m(e, "border-left-width")), r = i + n.height, a = s + n.width;
        break;
      }
    while (e = e.parentNode);
  }
  return {
    top: i,
    left: s,
    bottom: r,
    right: a,
    width: f,
    height: d
  };
}
function it(o, t, e, n) {
  if (o) {
    e = e || document;
    do {
      if (t != null && (t[0] === ">" ? o.parentNode === e && dt(o, t) : dt(o, t)) || n && o === e)
        return o;
      if (o === e) break;
    } while (o = o.parentNode);
    return null;
  }
}
function It(o, t) {
  if (!o || !t) return !1;
  if (t.compareDocumentPosition)
    return !!(t.compareDocumentPosition(o) & 16);
  if (t.contains && o.nodeType === 1)
    return t.contains(o) && t !== o;
  for (; o = o.parentNode; ) if (o === t) return !0;
  return !1;
}
function At(o, t) {
  let e = o.lastElementChild;
  for (; e && (e === g.ghost || m(e, "display") === "none" || t); )
    e = e.previousElementSibling;
  return e || null;
}
function P(o, t) {
  if (!o || !o.parentNode)
    return -1;
  let e = 0;
  for (; o = o.previousElementSibling; )
    o !== g.ghost && o.nodeName.toUpperCase() !== "TEMPLATE" && m(o, "display") !== "none" && (!t || dt(o, t)) && e++;
  return e;
}
function Ct(o, t, e, n) {
  let i = 0, s = 0, r = o.children;
  for (; i < r.length; ) {
    if (r[i] !== g.ghost && m(r[i], "display") !== "none" && it(r[i], e, o, !1) && r[i] !== g.dragged) {
      if (s === t)
        return r[i];
      s++;
    }
    i++;
  }
  return null;
}
function Yt(o, t) {
  let e = m(o), n = parseInt(e.width) - parseInt(e.paddingLeft) - parseInt(e.paddingRight) - parseInt(e.borderLeftWidth) - parseInt(e.borderRightWidth), i = Ct(o, 0, t), s = Ct(o, 1, t), r = i && m(i), a = s && m(s), d = r && parseInt(r.marginLeft) + parseInt(r.marginRight) + z(i).width, f = a && parseInt(a.marginLeft) + parseInt(a.marginRight) + z(s).width, S = Pt || pt ? "cssFloat" : "float";
  if (e.display === "flex")
    return e.flexDirection === "column" || e.flexDirection === "column-reverse" ? "vertical" : "horizontal";
  if (e.display === "grid")
    return e.gridTemplateColumns.split(" ").length <= 1 ? "vertical" : "horizontal";
  if (i && r.float && r.float !== "none") {
    let v = r.float === "left" ? "left" : "right";
    return s && (a.clear === "both" || a.clear === v) ? "vertical" : "horizontal";
  }
  return i && (r.display === "block" || r.display === "flex" || r.display === "table" || r.display === "grid" || d >= n && e[S] === "none" || s && e[S] === "none" && d + f > n) ? "vertical" : "horizontal";
}
function H(o, t, e) {
  if (o && t)
    if (o.classList)
      o.classList[e ? "add" : "remove"](t);
    else {
      const n = (" " + o.className + " ").replace(kt, " ").replace(" " + t + " ", " ");
      o.className = (n + (e ? " " + t : "")).replace(kt, " ");
    }
}
function dt(o, t) {
  if (t) {
    if (t[0] === ">" && (t = t.substring(1)), o)
      try {
        if (o.matches)
          return o.matches(t);
        if (o.msMatchesSelector)
          return o.msMatchesSelector(t);
        if (o.webkitMatchesSelector)
          return o.webkitMatchesSelector(t);
      } catch {
        return !1;
      }
    return !1;
  }
}
function m(o, t, e) {
  let n = o && o.style;
  if (n) {
    if (e === void 0)
      return document.defaultView && document.defaultView.getComputedStyle ? e = document.defaultView.getComputedStyle(o, "") : o.currentStyle && (e = o.currentStyle), t === void 0 ? e : e[t];
    !(t in n) && t.indexOf("webkit") === -1 && (t = "-webkit-" + t), n[t] = e + (typeof e == "string" ? "" : "px");
  }
}
function ve(o, t) {
  let e = "";
  if (typeof o == "string")
    e = o;
  else
    do {
      let i = m(o, "transform");
      i && i !== "none" && (e = i + " " + e);
    } while (!1);
  const n = window.DOMMatrix || window.WebKitCSSMatrix || window.CSSMatrix || window.MSCSSMatrix;
  return n && new n(e);
}
function Kt(o, t) {
  return Math.round(o.top) === Math.round(t.top) && Math.round(o.left) === Math.round(t.left) && Math.round(o.height) === Math.round(t.height) && Math.round(o.width) === Math.round(t.width);
}
function be(o) {
  return o.offsetWidth;
}
function we(o, t) {
  return o.compareDocumentPosition ? o.compareDocumentPosition(t) : o.contains ? (o != t && o.contains(t) && 16) + (o != t && t.contains(o) && 8) + (o.sourceIndex >= 0 && t.sourceIndex >= 0 ? (o.sourceIndex < t.sourceIndex && 4) + (o.sourceIndex > t.sourceIndex && 2) : 1) : 0;
}
function Tt(o, t) {
  const e = we(o, t);
  return e === 2 ? 1 : e === 4 ? -1 : 0;
}
function at(o) {
  o.preventDefault !== void 0 && o.cancelable && o.preventDefault();
}
function D({ sortable: o, name: t, evt: e }) {
  const n = o.options[t];
  if (typeof n == "function")
    return n(Object.assign({}, e));
}
function ct(o, ...t) {
  return typeof o == "function" ? o(...t) : o;
}
const R = "Sortable" + Date.now();
function Xt(o) {
  this.options = o, this.scrollEl = null, this.autoScrollInterval = null;
}
Xt.prototype = {
  nulling() {
    this.autoScrollInterval && (clearInterval(this.autoScrollInterval), this.autoScrollInterval = null);
  },
  onStarted() {
    this.nulling(), this.autoScrollInterval = setInterval(this.autoScroll.bind(this));
  },
  onMove(o, t, e, n) {
    const i = e ? e[R].options : n;
    if (e && !i.autoScroll) {
      this.scrollEl = null;
      return;
    }
    this.options = i, this.scrollEl = ye(o), this.moveEvent = t;
  },
  autoScroll() {
    let o = this.options, t = this.moveEvent, e = this.scrollEl, n = o.scrollThreshold, i = o.scrollSpeed;
    if (!e || t.clientX === void 0 || t.clientY === void 0) return;
    const s = z(e);
    if (!s) return;
    const { clientX: r, clientY: a } = t, { top: d, right: f, bottom: S, left: v, height: I, width: Z } = s;
    if (a < d || r > f || a > S || r < v) return;
    const { scrollTop: F, scrollLeft: st, scrollHeight: gt, scrollWidth: mt } = e;
    e.scrollLeft += this.getScrollOffset(r, v, f, n, i.x, st, mt, Z), e.scrollTop += this.getScrollOffset(a, d, S, n, i.y, F, gt, I);
  },
  getScrollOffset(o, t, e, n, i, s, r, a) {
    return s > 0 && o >= t && o <= t + n ? Math.max(-1, (o - t) / n - 1) * i : s + a < r && o <= e && o >= e - n ? Math.min(1, (o - e) / n + 1) * i : 0;
  }
};
function qt(o) {
  this.options = o, this.animationStack = [], this.animationCallbackId = null;
}
qt.prototype = {
  collect(o) {
    if (!o) return;
    let t = z(o), e = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth, n = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight, i = Math.min(t.right, e), s = Math.min(t.bottom, n), r = Array.prototype.slice.call(o.children), a = [];
    for (let d = 0, f = r.length; d < f; d++) {
      const S = r[d];
      if (S === g.ghost || m(S, "display") === "none") continue;
      const v = z(S);
      if (!(v.bottom < 0 || v.right < 0)) {
        if (a.length === 0 && S.previousElementSibling) {
          let I = S.previousElementSibling;
          do
            if (I && I !== g.ghost && m(I, "display") !== "none")
              break;
          while (I = I.previousElementSibling);
          I && a.push({ el: I, rect: z(I) });
        }
        if (v.top - v.height > s || v.left - v.width > i) {
          a.push({ el: S, rect: v });
          break;
        }
        a.push({ el: S, rect: v });
      }
    }
    this.animationStack.push(a);
  },
  animate(o) {
    let t = this.animationStack.pop(), e = this.options.animation;
    if (!t || !e) {
      clearTimeout(this.animationCallbackId), typeof o == "function" && o();
      return;
    }
    let n = 0;
    t.forEach((i) => {
      let s = 0, r = i.el, a = z(r), d = i.rect, f = r.prevToRect, S = r.prevFromRect;
      if (r.animating && S && f && Kt(d, a)) {
        const v = ve(r);
        if (v) {
          const I = { top: a.top - v.f, left: a.left - v.e }, Z = Ht(I, a), F = Ht(S, f);
          s = Z / F * e;
        }
      }
      Kt(d, a) || (r.prevFromRect = d, r.prevToRect = a, s || (s = e), this.execute(r, d, a, s)), s && (n = Math.max(n, s));
    }), clearTimeout(this.animationCallbackId), n ? this.animationCallbackId = setTimeout(() => {
      typeof o == "function" && o();
    }, n) : typeof o == "function" && o();
  },
  execute(o, t, e, n) {
    let i = this.options.easing || "", s = t.left - e.left, r = t.top - e.top;
    m(o, "transition", ""), m(o, "transform", `translate3d(${s}px, ${r}px, 0)`), this.repaintDummy = be(o), m(o, "transition", `transform ${n}ms ${i}`), m(o, "transform", "translate3d(0px, 0px, 0px)"), typeof o.animating == "number" && clearTimeout(o.animating), o.animating = setTimeout(() => {
      m(o, "transition", ""), m(o, "transform", ""), o.prevFromRect = null, o.prevToRect = null, o.animating = null;
    }, n);
  }
};
function Ht(o, t) {
  return Math.sqrt(Math.pow(o.left - t.left, 2) + Math.pow(o.top - t.top, 2));
}
let ut = [], L, T, h, p, $, x, c, E, N, w, V, K, ot, j, O, A, G, M, k, W, J;
function $t(o) {
  let t = {}, e = o.group;
  (!e || typeof e != "object") && (e = { name: e, pull: !0, put: !0, revertDrag: !0 }), t.name = e.name, t.pull = e.pull ?? !0, t.put = e.put ?? !0, t.revertDrag = e.revertDrag ?? !0, o.group = t;
}
function xe(o, t) {
  let e;
  return ut.reduce((n, i) => {
    const s = i[R].options.emptyInsertThreshold;
    if (s == null) return;
    const r = z(i), a = o >= r.left - s && o <= r.right + s, d = t >= r.top - s && t <= r.bottom + s;
    return a && d && (!e || e && r.left >= e.left && r.right <= e.right && r.top >= e.top && r.bottom <= e.bottom) && (n = i, e = r), n;
  }, null);
}
function Ee(o) {
  const t = A || O;
  return !(o.clientX !== void 0 && o.clientY !== void 0 && Math.abs(o.clientX - t.clientX) <= 0 && Math.abs(o.clientY - t.clientY) <= 0);
}
function g(o, t) {
  if (!(o && o.nodeType && o.nodeType === 1))
    throw `Sortable-dnd: \`el\` must be an HTMLElement, not ${{}.toString.call(o)}`;
  o[R] = this, this.el = o, this.options = t = Object.assign({}, t);
  const e = {
    store: null,
    group: "",
    handle: null,
    draggable: ">*",
    sortable: !0,
    disabled: !1,
    customGhost: null,
    lockAxis: "",
    direction: "",
    animation: 150,
    easing: "",
    ghostClass: "",
    ghostStyle: {},
    chosenClass: "",
    placeholderClass: "",
    autoScroll: !0,
    scrollThreshold: 55,
    scrollSpeed: { x: 10, y: 10 },
    delay: 0,
    delayOnTouchOnly: !1,
    swapOnDrop: !0,
    removeCloneOnDrop: !0,
    dropOnAnimationEnd: !1,
    appendToBody: !1,
    supportTouch: "ontouchstart" in window,
    touchStartThreshold: (Number.parseInt ? Number : window).parseInt(window.devicePixelRatio, 10) || 1,
    emptyInsertThreshold: -1
  };
  for (let n in e)
    !(n in t) && (t[n] = e[n]);
  $t(t);
  for (let n in this)
    n.charAt(0) === "_" && typeof this[n] == "function" && (this[n] = this[n].bind(this));
  _(o, t.supportTouch ? "touchstart" : "mousedown", this._onDrag), this.autoScroller = new Xt(t), this.animator = new qt(t), ut.push(o);
}
g.prototype = {
  constructor: g,
  _onDrag(o) {
    let t = this.el, e = this.options, n = e.handle, i = o.touches && o.touches[0], s = (i || o).target, r = t.ownerDocument;
    if (h || e.disabled || !e.group.pull || /mousedown|pointerdown/.test(o.type) && o.button !== 0 || Et && s && s.tagName.toUpperCase() === "SELECT") return;
    const a = it(s, e.draggable, t);
    !a || a.animating || (O = {
      event: o,
      clientX: (i || o).clientX,
      clientY: (i || o).clientY
    }, h = a, M = i ? h : document, _(M, "mouseup", this._onDrop), _(M, "touchend", this._onDrop), _(M, "touchcancel", this._onDrop), !(typeof n == "function" && !n(o) || typeof n == "string" && !it(s, n, h)) && (e.delay && (!e.delayOnTouchOnly || i) && !(Pt || pt) ? (_(r, "touchmove", this._delayedMoveHandler), _(r, "mousemove", this._delayedMoveHandler), _(r, "mouseup", this._cancelStart), _(r, "touchend", this._cancelStart), _(r, "touchcancel", this._cancelStart), this._dragStartTimer = setTimeout(() => this._onStart(i, o), e.delay)) : this._onStart(i, o)));
  },
  _delayedMoveHandler(o) {
    const t = o.touches ? o.touches[0] : o;
    Math.max(Math.abs(t.clientX - O.clientX), Math.abs(t.clientY - O.clientY)) >= Math.floor(this.options.touchStartThreshold / (window.devicePixelRatio || 1)) && this._cancelStart();
  },
  _cancelStart() {
    let o = this.el.ownerDocument;
    clearTimeout(this._dragStartTimer), C(o, "touchmove", this._delayedMoveHandler), C(o, "mousemove", this._delayedMoveHandler), C(o, "mouseup", this._cancelStart), C(o, "touchend", this._cancelStart), C(o, "touchcancel", this._cancelStart);
  },
  _onStart(o, t) {
    at(t);
    let e = this.el, n = this.options, i = P(h);
    K = i, ot = i, j = i, L = e, T = e, x = e, N = h, w = h.parentNode, V = n.group.pull, W = h, k = {
      to: e,
      target: h,
      newIndex: i,
      relative: 0
    }, c = h.cloneNode(!0), g.dragged = h, g.clone = c, g.active = this, D({
      sortable: this,
      name: "onChoose",
      evt: this._getEventProperties(t)
    }), H(h, n.chosenClass, !0), _(M, o ? "touchmove" : "mousemove", this._nearestSortable);
    try {
      document.selection ? setTimeout(() => document.selection.empty(), 0) : window.getSelection().removeAllRanges();
    } catch {
    }
    _(document, "selectstart", at), Et && m(document.body, "user-select", "none");
  },
  _onStarted() {
    let o = this.options;
    this.animator.collect(w), this._appendGhost(), H(c, o.chosenClass, !0), H(c, o.placeholderClass, !0), h.parentNode.insertBefore(c, h), m(h, "display", "none"), D({
      sortable: this,
      name: "onDrag",
      evt: this._getEventProperties(O.event)
    }), this.animator.animate(), this.autoScroller.onStarted();
  },
  _appendGhost() {
    if (E) return;
    let o = this.options;
    const t = o.appendToBody ? document.body : this.el;
    E = (ct(o.customGhost, c) || c).cloneNode(!0), H(E, o.ghostClass, !0);
    const n = z(h), i = Object.assign(
      {
        position: "fixed",
        top: n.top,
        left: n.left,
        width: n.width,
        height: n.height,
        margin: 0,
        zIndex: 1e5,
        opacity: "0.8",
        overflow: "hidden",
        boxSizing: "border-box",
        transform: "",
        transition: "",
        pointerEvents: "none"
      },
      o.ghostStyle
    );
    for (let a in i)
      m(E, a, i[a]);
    g.ghost = E, t.appendChild(E);
    const s = (O.clientX - n.left) / parseInt(E.style.width) * 100, r = (O.clientY - n.top) / parseInt(E.style.height) * 100;
    m(E, "transform-origin", `${s}% ${r}%`), m(E, "will-change", "transform");
  },
  _nearestSortable(o) {
    at(o);
    let t = o.touches && o.touches[0], e = t || o;
    if (!h || !Ee(e)) return;
    !A && this._onStarted();
    let n = this.options.lockAxis, i = n === "x" ? O.clientX : e.clientX, s = n === "y" ? O.clientY : e.clientY, r = document.elementFromPoint(i, s), a = i - O.clientX, d = s - O.clientY;
    A = { event: o, clientX: i, clientY: s }, m(E, "transform", `translate3d(${a}px, ${d}px, 0)`);
    const f = xe(i, s);
    f && f[R]._onMove(o, r), this.autoScroller.onMove(r, A, f, this.options);
  },
  _allowPut() {
    let o = this.options.group, t = x[R].options.group;
    return this.el === x ? !0 : o.put ? o.put.join && o.put.indexOf(t.name) > -1 || t.name && o.name && t.name === o.name : !1;
  },
  _getDirection() {
    let o = this.options.draggable, t = this.options.direction;
    return t ? ct(t, A.event, c, this) : Yt(w, o);
  },
  _allowSwap() {
    let o = z(p), t = this._getDirection() === "vertical", e = t ? "top" : "left", n = t ? "bottom" : "right", i = p[t ? "offsetHeight" : "offsetWidth"], s = t ? A.clientY : A.clientX, r = s >= o[e] && s < o[n] - i / 2 ? -1 : 1, a = Ct(w, 0, this.options.draggable), d = At(w), f = z(a), S = z(d);
    if (p === w || It(w, p))
      return c === a && s < f[e] ? ($ = p, !0) : c === d && s > S[n] ? ($ = p.nextSibling, !0) : !1;
    const v = Tt(c, p);
    return $ = v < 0 ? p.nextSibling : p, G !== p ? (J = r, !0) : J !== r ? (J = r, r < 0 ? v > 0 : v < 0) : !1;
  },
  _onMove(o, t) {
    let e = this.el, n = this.options;
    if (!(n.disabled || !this._allowPut())) {
      if (p = it(t, n.draggable, e), D({
        sortable: this,
        name: "onMove",
        evt: this._getEventProperties(o, { target: p })
      }), !n.sortable && e === x) {
        T !== x && (p = G = h, J = 0, this._onInsert(o));
        return;
      }
      if (e !== T && (t === e || !At(e))) {
        p = G = null, this._onInsert(o);
        return;
      }
      if (!(!p || p.animating || It(p, c) || !this._allowSwap())) {
        if (p === c || $ === c) {
          G = p;
          return;
        }
        e !== T ? this._onInsert(o) : p !== h && this._onChange(o), G = p;
      }
    }
  },
  _onInsert(o) {
    let t = this.el, e = p || c, n = V === "clone" && t !== x && T === x, i = V === "clone" && t === x && T !== x, s = It(p, document), r = p === h && !s, a = T[R], d = x[R];
    L = t, K = P(c), N = e, w = s ? p.parentNode : t, a.animator.collect(c.parentNode), this.animator.collect(w), n && (k.target = W, k.newIndex = K, k.relative = W === h ? 0 : Tt(c, W), m(h, "display", ""), d.options.group.revertDrag || c.parentNode.insertBefore(h, c)), i && (K = P(h), m(h, "display", "none")), m(c, "display", r ? "none" : ""), p && s ? w.insertBefore(c, J < 0 ? p : p.nextSibling) : w.appendChild(c), ot = r ? j : P(c), n && d.options.group.revertDrag && (k.target = h, k.newIndex = j, k.relative = 0, D({
      sortable: d,
      name: "onChange",
      evt: this._getEventProperties(o, {
        to: x,
        target: h,
        newIndex: j,
        revertDrag: !0
      })
    })), n || D({
      sortable: a,
      name: "onRemove",
      evt: this._getEventProperties(o, { newIndex: -1 })
    }), i && e !== h && (W = e, D({
      sortable: this,
      name: "onChange",
      evt: this._getEventProperties(o, {
        from: x,
        backToOrigin: !0
      })
    })), i || D({
      sortable: this,
      name: "onAdd",
      evt: this._getEventProperties(o, { oldIndex: -1 })
    }), a.animator.animate(), this.animator.animate(), T = t;
  },
  _onChange(o) {
    let t = this.el;
    this.animator.collect(w), K = P(c), w = p.parentNode, N = p, t === x && (W = p), w.insertBefore(c, $), ot = P(c), D({
      sortable: this,
      name: "onChange",
      evt: this._getEventProperties(o)
    }), D({
      sortable: this,
      name: "onDragChange",
      evt: this._getEventProperties(o)
    }), this.animator.animate(), T = t;
  },
  _onDrop(o) {
    let t = this.options;
    if (this._cancelStart(), C(M, "touchmove", this._nearestSortable), C(M, "mousemove", this._nearestSortable), C(M, "mouseup", this._onDrop), C(M, "touchend", this._onDrop), C(M, "touchcancel", this._onDrop), C(document, "selectstart", at), Et && m(document.body, "user-select", ""), E && E.parentNode && E.parentNode.removeChild(E), x)
      if (T = x, K = j, N === c && (N = h), H(h, t.chosenClass, !1), D({
        sortable: this,
        name: "onUnchoose",
        evt: this._getEventProperties(o)
      }), A) {
        this.animator.collect(w), H(c, t.chosenClass, !1), H(c, t.placeholderClass, !1);
        const e = this._getEventProperties(o);
        !t.dropOnAnimationEnd && this._onEnd(e), this.animator.animate(() => {
          t.dropOnAnimationEnd && this._onEnd(e);
        });
      } else
        this._nulling();
    else
      this._nulling();
  },
  _onEnd(o) {
    let t = this.options, e = V === "clone", n = T === L;
    (!e || n) && ct(t.swapOnDrop, o) && w.insertBefore(h, c), (!e || n) && ct(t.removeCloneOnDrop, o) && c && c.parentNode && c.parentNode.removeChild(c), m(h, "display", ""), T !== L && D({
      sortable: T[R],
      name: "onDrop",
      evt: Object.assign({}, o, e ? k : { newIndex: -1 })
    }), D({
      sortable: L[R],
      name: "onDrop",
      evt: Object.assign({}, o, n ? {} : { oldIndex: -1 })
    }), this._nulling();
  },
  _getEventProperties(o, t = {}) {
    let e = {};
    return e.event = o, e.to = L, e.from = T, e.node = h, e.clone = c, e.target = N, e.oldIndex = K, e.newIndex = ot, e.pullMode = V, Object.assign(e, t), e.relative = N === h ? 0 : Tt(c, N), e;
  },
  _nulling() {
    L = T = h = p = $ = x = c = E = N = w = V = K = ot = j = O = A = G = M = k = W = J = g.clone = g.ghost = g.active = g.dragged = null, this.autoScroller.nulling();
  },
  destroy() {
    this._cancelStart(), this._nulling(), C(this.el, "touchstart", this._onDrag), C(this.el, "mousedown", this._onDrag);
    const o = ut.indexOf(this.el);
    o > -1 && ut.splice(o, 1), this.el[R] = this.animator = this.autoScroller = null;
  },
  option(o, t) {
    if (t === void 0)
      return this.options[o];
    this.options[o] = t, this.animator.options[o] = t, this.autoScroller.options[o] = t, o === "group" && $t(this.options);
  }
};
g.utils = {
  on: _,
  off: C,
  css: m,
  index: P,
  matches: dt,
  closest: it,
  getRect: z,
  toggleClass: H,
  detectDirection: Yt
};
g.get = function(o) {
  return o[R];
};
g.create = function(o, t) {
  return new g(o, t);
};
function ft(o, t) {
  let e;
  const n = function(...i) {
    e || (t <= 0 ? o.apply(this, i) : e = setTimeout(() => {
      e = null, o.apply(this, i);
    }, t));
  };
  return n.cancel = function() {
    e && (clearTimeout(e), e = null);
  }, n;
}
function Ie(o, t) {
  const e = ft(o, t), n = function(...i) {
    e.cancel(), e.apply(this, i);
  };
  return n.cancel = () => {
    e.cancel();
  }, n;
}
function zt(o, t) {
  return o === 0 ? o === t : o == t;
}
function Ft(o, t) {
  return (Array.isArray(t) ? t : t.replace(/\[/g, ".").replace(/\]/g, ".").split(".")).reduce((e, n) => (e || {})[n], o);
}
function Lt(o) {
  return o instanceof Document && o.nodeType === 9 || o instanceof Window;
}
const Dt = [
  "delay",
  "group",
  "handle",
  "lockAxis",
  "disabled",
  "sortable",
  "draggable",
  "animation",
  "autoScroll",
  "ghostClass",
  "ghostStyle",
  "chosenClass",
  "scrollSpeed",
  "fallbackOnBody",
  "scrollThreshold",
  "delayOnTouchOnly",
  "placeholderClass"
];
class Te {
  constructor(t, e) {
    this.el = t, this.options = e, this.rangeChanged = !1, this.installSortable();
  }
  destroy() {
    this.sortable.destroy(), this.rangeChanged = !1;
  }
  option(t, e) {
    this.options[t] = e, Dt.includes(t) && this.sortable.option(t, e);
  }
  installSortable() {
    const t = Dt.reduce((e, n) => (e[n] = this.options[n], e), {});
    this.sortable = new g(this.el, {
      ...t,
      emptyInsertThreshold: 0,
      swapOnDrop: (e) => e.from === e.to,
      removeCloneOnDrop: (e) => e.from === e.to,
      onDrag: (e) => this.onDrag(e),
      onDrop: (e) => this.onDrop(e),
      onDragChange: (e) => this.onDragChange(e),
      onChoose: (e) => this.onChoose(e),
      onUnchoose: (e) => this.onUnchoose(e)
    });
  }
  onChoose(t) {
    this.dispatchEvent("onChoose", t);
  }
  onUnchoose(t) {
    this.dispatchEvent("onUnchoose", t);
  }
  onDrag(t) {
    const e = t.node.getAttribute("data-key"), n = this.getIndex(e), i = this.options.list[n], s = this.options.uniqueKeys[n];
    this.sortable.option("store", { item: i, key: s, index: n, oldIndex: n }), this.dispatchEvent("onDrag", { item: i, key: s, index: n, event: t });
  }
  // 拖拽位置变化
  onDragChange(t) {
    const e = g.get(t.from)?.option("store"), n = e ? e.oldIndex : -1, i = t.target.getAttribute("data-key");
    let s = this.getIndex(i);
    if (i != null && (n < s && t.relative === -1 || n > s && t.relative === 1) && (s += t.relative), n === s)
      return;
    const r = {
      key: i,
      oldIndex: n,
      newIndex: s,
      event: t,
      item: this.options.list[s]
    };
    this.sortable.option("store").oldIndex = s, this.dispatchEvent("onDragChange", r);
  }
  onDrop(t) {
    const { item: e, key: n, index: i } = g.get(t.from)?.option("store"), s = this.options.list, r = {
      key: n,
      item: e,
      list: s,
      event: t,
      changed: !1,
      oldList: [...s],
      oldIndex: i,
      newIndex: i
    };
    t.from === t.to && t.node === t.target || this.handleDropEvent(t, r, i), this.dispatchEvent("onDrop", r), t.from === this.el && this.rangeChanged && g.dragged?.remove(), t.from !== t.to && g.clone?.remove(), this.rangeChanged = !1;
  }
  handleDropEvent(t, e, n) {
    const i = t.target.getAttribute("data-key");
    let s = -1, r = n;
    t.from === t.to ? (r = this.getIndex(e.key), s = this.getIndex(i), (r < s && t.relative === -1 || r > s && t.relative === 1) && (s += t.relative), s !== r && (e.list.splice(r, 1), e.list.splice(s, 0, e.item))) : (t.from === this.el && (r = this.getIndex(e.key), e.list.splice(r, 1)), t.to === this.el && (r = -1, s = this.getIndex(i), t.relative === 0 ? s = e.list.length : t.relative === 1 && (s += t.relative), e.list.splice(s, 0, e.item))), e.changed = t.from !== t.to || s !== r, e.oldIndex = r, e.newIndex = s;
  }
  getIndex(t) {
    if (t == null)
      return -1;
    const { uniqueKeys: e } = this.options;
    for (let n = 0, i = e.length; n < i; n++)
      if (zt(e[n], t))
        return n;
    return -1;
  }
  dispatchEvent(t, e) {
    const n = this.options[t];
    n && n(e);
  }
}
const Ce = [
  "size",
  "keeps",
  "scroller",
  "direction",
  "debounceTime",
  "throttleTime"
];
class ze {
  constructor(t) {
    this.options = t;
    const e = {
      size: 0,
      keeps: 0,
      buffer: 0,
      wrapper: null,
      scroller: null,
      direction: "vertical",
      uniqueKeys: [],
      debounceTime: null,
      throttleTime: null
    };
    for (const n in e)
      !(n in this.options) && (this.options[n] = e[n]);
    this.sizes = /* @__PURE__ */ new Map(), this.sizeType = "INIT", this.fixedSize = 0, this.averageSize = 0, this.range = { start: 0, end: 0, front: 0, behind: 0 }, this.offset = 0, this.direction = "STATIONARY", this.updateScrollElement(), this.updateOnScrollFunction(), this.addScrollEventListener(), this.checkIfUpdate(0, t.keeps - 1);
  }
  isFixed() {
    return this.sizeType === "FIXED";
  }
  isFront() {
    return this.direction === "FRONT";
  }
  isBehind() {
    return this.direction === "BEHIND";
  }
  isHorizontal() {
    return this.options.direction === "horizontal";
  }
  getSize(t) {
    return this.sizes.get(t) || this.getItemSize();
  }
  getOffset() {
    const t = this.isHorizontal() ? "scrollLeft" : "scrollTop";
    return this.scrollEl[t];
  }
  getScrollSize() {
    const t = this.isHorizontal() ? "scrollWidth" : "scrollHeight";
    return this.scrollEl[t];
  }
  getClientSize() {
    const t = this.isHorizontal() ? "offsetWidth" : "offsetHeight";
    return this.scrollEl[t];
  }
  scrollToOffset(t) {
    const e = this.isHorizontal() ? "scrollLeft" : "scrollTop";
    this.scrollEl[e] = t;
  }
  scrollToIndex(t) {
    if (t >= this.options.uniqueKeys.length - 1)
      this.scrollToBottom();
    else {
      const e = this.getOffsetByRange(0, t), n = this.getScrollStartOffset();
      this.scrollToOffset(e + n);
    }
  }
  scrollToBottom() {
    const t = this.getScrollSize();
    this.scrollToOffset(t), setTimeout(() => {
      const e = this.getClientSize(), n = this.getScrollSize();
      this.getOffset() + e + 1 < n && this.scrollToBottom();
    }, 5);
  }
  option(t, e) {
    const n = this.options[t];
    this.options[t] = e, t === "uniqueKeys" && this.sizes.forEach((i, s) => {
      e.includes(s) || this.sizes.delete(s);
    }), t === "scroller" && (n && g.utils.off(n, "scroll", this.onScroll), this.updateScrollElement(), this.addScrollEventListener());
  }
  updateRange(t) {
    if (t) {
      this.handleUpdate(t.start);
      return;
    }
    let e = this.range.start;
    e = Math.max(e, 0), this.handleUpdate(e);
  }
  onItemResized(t, e) {
    !e || this.sizes.get(t) === e || (this.sizes.set(t, e), this.sizeType === "INIT" ? (this.sizeType = "FIXED", this.fixedSize = e) : this.isFixed() && this.fixedSize !== e && (this.sizeType = "DYNAMIC", this.fixedSize = 0), !this.averageSize && this.sizeType === "DYNAMIC" && this.sizes.size === this.options.keeps && this.updateAverageSize());
  }
  updateAverageSize() {
    const t = [...this.sizes.values()].reduce((e, n) => e + n, 0);
    this.averageSize = Math.round(t / this.sizes.size);
  }
  addScrollEventListener() {
    this.options.scroller && g.utils.on(this.options.scroller, "scroll", this.onScroll);
  }
  removeScrollEventListener() {
    this.options.scroller && g.utils.off(this.options.scroller, "scroll", this.onScroll);
  }
  enableScroll(t) {
    const { scroller: e } = this.options, n = t ? g.utils.off : g.utils.on, i = "onwheel" in document.createElement("div") ? "wheel" : "mousewheel";
    n(e, "DOMMouseScroll", this.preventDefault), n(e, i, this.preventDefault), n(e, "touchmove", this.preventDefault), n(e, "keydown", this.preventDefaultForKeyDown);
  }
  preventDefault(t) {
    t.preventDefault();
  }
  preventDefaultForKeyDown(t) {
    if ({ 37: 1, 38: 1, 39: 1, 40: 1 }[t.keyCode])
      return this.preventDefault(t), !1;
  }
  updateScrollElement() {
    const t = this.options.scroller;
    if (Lt(t)) {
      const e = document.scrollingElement || document.documentElement || document.body;
      this.scrollEl = e;
    } else
      this.scrollEl = t;
  }
  updateOnScrollFunction() {
    const { debounceTime: t, throttleTime: e } = this.options;
    t ? this.onScroll = Ie(() => this.handleScroll(), t) : e ? this.onScroll = ft(() => this.handleScroll(), e) : this.onScroll = () => this.handleScroll();
  }
  handleScroll() {
    const t = this.getOffset(), e = this.getClientSize(), n = this.getScrollSize();
    t === this.offset ? this.direction = "STATIONARY" : this.direction = t < this.offset ? "FRONT" : "BEHIND", this.offset = t;
    const i = this.isFront() && t <= 0, s = this.isBehind() && e + t + 1 >= n;
    this.options.onScroll({ top: i, bottom: s, offset: t, direction: this.direction }), this.isFront() ? this.handleScrollFront() : this.isBehind() && this.handleScrollBehind();
  }
  handleScrollFront() {
    const t = this.getScrollItems();
    if (t >= this.range.start)
      return;
    const e = Math.max(t - this.options.buffer, 0);
    this.checkIfUpdate(e, this.getEndByStart(e));
  }
  handleScrollBehind() {
    const t = this.getScrollItems();
    t < this.range.start + this.options.buffer || this.checkIfUpdate(t, this.getEndByStart(t));
  }
  getScrollItems() {
    const t = this.offset - this.getScrollStartOffset();
    if (t <= 0)
      return 0;
    if (this.isFixed())
      return Math.floor(t / this.fixedSize);
    let e = 0, n = this.options.uniqueKeys.length, i = 0, s = 0;
    for (; e <= n; ) {
      if (i = e + Math.floor((n - e) / 2), s = this.getOffsetByRange(0, i), s === t)
        return i;
      s < t ? e = i + 1 : s > t && (n = i - 1);
    }
    return e > 0 ? --e : 0;
  }
  checkIfUpdate(t, e) {
    const n = this.options.keeps;
    this.options.uniqueKeys.length <= n ? t = 0 : e - t < n - 1 && (t = e - n + 1), this.range.start !== t && this.handleUpdate(t);
  }
  handleUpdate(t) {
    this.range.start = t, this.range.end = this.getEndByStart(t), this.range.front = this.getFrontOffset(), this.range.behind = this.getBehindOffset(), this.options.onUpdate({ ...this.range });
  }
  getFrontOffset() {
    return this.isFixed() ? this.fixedSize * this.range.start : this.getOffsetByRange(0, this.range.start);
  }
  getBehindOffset() {
    const t = this.range.end, e = this.getLastIndex();
    return this.isFixed() ? (e - t) * this.fixedSize : (e - t) * this.getItemSize();
  }
  getOffsetByRange(t, e) {
    if (t >= e)
      return 0;
    let n = 0;
    for (let i = t; i < e; i++) {
      const s = this.sizes.get(this.options.uniqueKeys[i]);
      n = n + (typeof s == "number" ? s : this.getItemSize());
    }
    return n;
  }
  getEndByStart(t) {
    return Math.min(t + this.options.keeps - 1, this.getLastIndex());
  }
  getLastIndex() {
    const { uniqueKeys: t, keeps: e } = this.options;
    return t.length > 0 ? t.length - 1 : e - 1;
  }
  getItemSize() {
    return this.isFixed() ? this.fixedSize : this.options.size || this.averageSize;
  }
  getScrollStartOffset() {
    const { wrapper: t, scroller: e } = this.options;
    if (e === t)
      return 0;
    let n = 0;
    if (e && t) {
      const i = this.isHorizontal() ? "left" : "top", s = Lt(e) ? g.utils.getRect(t) : g.utils.getRect(t, !0, e);
      n = this.offset + s[i];
    }
    return n;
  }
}
const De = {
  modelValue: {},
  dataKey: {
    type: String,
    default: "",
    required: !0
  },
  tableMode: {
    type: Boolean,
    default: !1
  },
  draggable: {
    type: String,
    default: '[role="item"]'
  },
  sortable: {
    type: Boolean,
    default: !0
  },
  handle: {
    type: [Function, String],
    default: void 0
  },
  group: {
    type: [Object, String],
    default: void 0
  },
  scroller: {
    type: [Document, HTMLElement],
    default: void 0
  },
  lockAxis: {
    type: String,
    default: ""
  },
  direction: {
    type: String,
    default: "vertical"
  },
  keeps: {
    type: Number,
    default: 30
  },
  size: {
    type: Number,
    default: void 0
  },
  debounceTime: {
    type: Number,
    default: 0
  },
  throttleTime: {
    type: Number,
    default: 0
  },
  animation: {
    type: Number,
    default: 150
  },
  autoScroll: {
    type: Boolean,
    default: !0
  },
  scrollSpeed: {
    type: Object,
    default: () => ({ x: 10, y: 10 })
  },
  scrollThreshold: {
    type: Number,
    default: 55
  },
  keepOffset: {
    type: Boolean,
    default: !1
  },
  disabled: {
    type: Boolean,
    default: !1
  },
  fallbackOnBody: {
    type: Boolean,
    default: !1
  },
  delay: {
    type: Number,
    default: 0
  },
  delayOnTouchOnly: {
    type: Boolean,
    default: !1
  },
  rootTag: {
    type: String,
    default: "div"
  },
  wrapTag: {
    type: String,
    default: "div"
  },
  wrapClass: {
    type: String,
    default: ""
  },
  wrapStyle: {
    type: Object,
    default: () => ({})
  },
  ghostClass: {
    type: String,
    default: ""
  },
  ghostStyle: {
    type: Object,
    default: () => ({})
  },
  chosenClass: {
    type: String,
    default: ""
  },
  placeholderClass: {
    type: String,
    default: ""
  }
}, Oe = {
  dataKey: {
    type: [String, Number],
    default: void 0
  },
  sizeKey: {
    type: String,
    default: "offsetHeight"
  }
}, _e = ({
  mounted: o,
  updated: t,
  unmounted: e
}) => /* @__PURE__ */ Ot({
  props: ["vnode"],
  mounted() {
    o(this.$el);
  },
  onUpdated() {
    t(this.$el);
  },
  onUnmounted() {
    e(this.$el);
  },
  render(n) {
    return n.vnode;
  }
}), Me = /* @__PURE__ */ Ot({
  props: Oe,
  emits: ["resize"],
  setup(o, {
    emit: t,
    slots: e
  }) {
    let n = null;
    const i = (f) => {
      const S = f ? f[o.sizeKey] : 0;
      t("resize", S, o.dataKey);
    }, d = _e({
      mounted: (f) => {
        typeof ResizeObserver < "u" && (n = new ResizeObserver(() => {
          i(f);
        }), f && n.observe(f));
      },
      updated: (f) => {
        i(f);
      },
      unmounted: () => {
        n && (n.disconnect(), n = null);
      }
    });
    return () => {
      const {
        dataKey: f
      } = o, [S] = e.default?.() || [];
      return Q(d, {
        key: f,
        role: "item",
        vnode: S,
        "data-key": f
      }, {
        default: () => e.default?.()
      });
    };
  }
}), Re = (o) => Se(o) ? o.value : o, Ne = /* @__PURE__ */ Ot({
  props: De,
  emits: ["update:modelValue", "top", "bottom", "drag", "dragChange", "drop", "rangeChange"],
  setup(o, {
    emit: t,
    slots: e,
    expose: n
  }) {
    const i = q([]), s = q({
      start: 0,
      end: o.keeps - 1,
      front: 0,
      behind: 0
    }), r = wt(() => o.direction !== "vertical"), a = q(), d = q();
    function f(l) {
      return b.getSize(l);
    }
    function S() {
      return b.getOffset();
    }
    function v() {
      return b.getClientSize();
    }
    function I() {
      return b.getScrollSize();
    }
    function Z(l) {
      const u = U.indexOf(l);
      u > -1 && b.scrollToIndex(u);
    }
    function F(l) {
      b.scrollToOffset(l);
    }
    function st(l) {
      b.scrollToIndex(l);
    }
    function gt() {
      F(0);
    }
    function mt() {
      b.scrollToBottom();
    }
    n({
      getSize: f,
      getOffset: S,
      getClientSize: v,
      getScrollSize: I,
      scrollToTop: gt,
      scrollToBottom: mt,
      scrollToKey: Z,
      scrollToIndex: st,
      scrollToOffset: F
    }), xt(() => [o.modelValue], () => {
      Mt();
    }, {
      deep: !0
    }), ue(() => {
      Mt();
    }), fe(() => {
      b && F(b.offset), b.addScrollEventListener();
    }), pe(() => {
      b.removeScrollEventListener();
    }), ge(() => {
      ee(), ae();
    }), me(() => {
      B?.destroy(), b?.removeScrollEventListener();
    });
    let _t = [], U = [], tt = 0;
    const Mt = () => {
      const l = Re(o.modelValue);
      if (l) {
        if (i.value = l, Vt(), jt(_t, l), B?.option("list", l), tt && o.keepOffset) {
          const u = l.length - tt;
          u > 0 && st(u), tt = 0;
        }
        _t = [...i.value];
      }
    }, Vt = () => {
      U = i.value.map((l) => Ft(l, o.dataKey)), b?.option("uniqueKeys", U), B?.option("uniqueKeys", U);
    }, jt = (l, u) => {
      if (!l.length && !u.length || l.length === u.length)
        return;
      let y = {
        ...s.value
      };
      l.length > o.keeps && u.length > l.length && y.end === l.length - 1 && Gt() && y.start++, b?.updateRange(y);
    }, Gt = () => {
      const l = S(), u = v(), y = I();
      return l + u + 1 >= y;
    };
    let b;
    const rt = q(!1), lt = q(""), Rt = wt(() => Ce.reduce((l, u) => (l[u] = o[u], l), {}));
    xt(Rt, (l, u) => {
      if (b)
        for (let y in l)
          l[y] !== u[y] && b.option(y, l[y]);
    });
    const Jt = ft(() => {
      tt = i.value.length, t("top");
    }, 50), Qt = ft(() => {
      t("bottom");
    }, 50), Zt = (l) => {
      tt = 0, i.value.length && l.top ? Jt() : l.bottom && Qt();
    }, te = (l) => {
      const u = l.start !== s.value.start;
      rt.value && u && B && (B.rangeChanged = !0), s.value = l, u && t("rangeChange", l);
    }, ee = () => {
      b = new ze({
        ...Rt.value,
        buffer: Math.round(o.keeps / 3),
        wrapper: d.value,
        scroller: o.scroller || a.value,
        uniqueKeys: U,
        onScroll: Zt,
        onUpdate: te
      });
    }, oe = (l, u) => {
      if (zt(u, lt.value))
        return;
      const y = b.sizes.size;
      b.onItemResized(u, l), y === o.keeps - 1 && i.value.length > o.keeps && b.updateRange(s.value);
    };
    let B;
    const Bt = wt(() => Dt.reduce((l, u) => (l[u] = o[u], l), {}));
    xt(Bt, (l, u) => {
      if (B)
        for (let y in l)
          l[y] !== u[y] && B.option(y, l[y]);
    });
    const ne = (l) => {
      lt.value = l.node.getAttribute("data-key");
    }, ie = () => {
      lt.value = "";
    }, se = (l) => {
      rt.value = !0, o.sortable || (b.enableScroll(!1), B.option("autoScroll", !1)), t("drag", l);
    }, re = (l) => {
      t("dragChange", l);
    }, le = (l) => {
      rt.value = !1, b.enableScroll(!0), B.option("autoScroll", o.autoScroll), l.changed && t("update:modelValue", l.list), t("drop", l);
    }, ae = () => {
      B = new Te(a.value, {
        ...Bt.value,
        list: i.value,
        uniqueKeys: U,
        onDrag: se,
        onDrop: le,
        onChoose: ne,
        onUnchoose: ie,
        onDragChange: re
      });
    }, Nt = (l) => {
      const u = r.value ? "width" : "height";
      if (o.tableMode) {
        const y = {
          padding: 0,
          border: 0,
          [u]: `${l}px`
        };
        return Q("tr", {}, [Q("td", {
          style: y
        })]);
      }
      return null;
    }, ce = () => {
      const l = [], {
        start: u,
        end: y,
        front: St,
        behind: yt
      } = s.value, vt = r.value ? "offsetWidth" : "offsetHeight";
      l.push(Nt(St));
      for (let Y = u; Y <= y; Y++) {
        const et = i.value[Y];
        if (et) {
          const X = Ft(et, o.dataKey), bt = zt(X, lt.value);
          l.push(e.item ? Q(Me, {
            key: X,
            style: rt.value && bt && {
              display: "none"
            },
            dataKey: X,
            sizeKey: vt,
            onResize: oe
          }, {
            default: () => e.item?.({
              record: et,
              index: Y,
              dataKey: X
            })
          }) : null);
        }
      }
      return l.push(Nt(yt)), l;
    };
    return () => {
      const {
        front: l,
        behind: u
      } = s.value, {
        tableMode: y,
        rootTag: St,
        wrapTag: yt,
        scroller: vt,
        wrapClass: Y,
        wrapStyle: et
      } = o, X = r.value ? "auto hidden" : "hidden auto", bt = r.value ? `0 ${u}px 0 ${l}px` : `${l}px 0 ${u}px`, he = y ? "table" : St, de = y ? "tbody" : yt;
      return Q(he, {
        ref: a,
        style: !vt && !y && {
          overflow: X
        }
      }, {
        default: () => [e.header?.(), Q(de, {
          ref: d,
          class: Y,
          style: {
            ...et,
            padding: !y && bt
          }
        }, {
          default: () => ce()
        }), e.footer?.()]
      });
    };
  }
});
export {
  Ne as VirtualSortable,
  Ne as default
};
