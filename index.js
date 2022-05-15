(function() {
    'use strict';

    function _defineProperties(target, props) {
        for (var i = 0; i < props.length; i++) {
            var descriptor = props[i];
            descriptor.enumerable = descriptor.enumerable || false;
            descriptor.configurable = true;
            if ("value" in descriptor) descriptor.writable = true;
            Object.defineProperty(target, descriptor.key, descriptor);
        }
    }

    function _createClass(Constructor, protoProps, staticProps) {
        if (protoProps) _defineProperties(Constructor.prototype, protoProps);
        if (staticProps) _defineProperties(Constructor, staticProps);
        Object.defineProperty(Constructor, "prototype", {
            writable: false
        });
        return Constructor;
    }

    function _extends() {
        _extends = Object.assign || function(target) {
            for (var i = 1; i < arguments.length; i++) {
                var source = arguments[i];
                for (var key in source) {
                    if (Object.prototype.hasOwnProperty.call(source, key)) {
                        target[key] = source[key];
                    }
                }
            }
            return target;
        };
        return _extends.apply(this, arguments);
    }

    function _inheritsLoose(subClass, superClass) {
        subClass.prototype = Object.create(superClass.prototype);
        subClass.prototype.constructor = subClass;
        _setPrototypeOf(subClass, superClass);
    }

    function _setPrototypeOf(o, p) {
        _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
            o.__proto__ = p;
            return o;
        };
        return _setPrototypeOf(o, p);
    }
    /*!
     * Bootstrap v5.1.3 (https://getbootstrap.com/)
     * Copyright 2011-2021 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
     * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
     */
    ! function(t, e) {
        "object" == typeof exports && "undefined" != typeof module ? module.exports = e() : "function" == typeof define && define.amd ? define(e) : (t = "undefined" != typeof globalThis ? globalThis : t || self).bootstrap = e();
    }(undefined, function() {
        var t = "transitionend",
            e = function e(t) {
                var e = t.getAttribute("data-bs-target");
                if (!e || "#" === e) {
                    var _i2 = t.getAttribute("href");
                    if (!_i2 || !_i2.includes("#") && !_i2.startsWith(".")) return null;
                    _i2.includes("#") && !_i2.startsWith("#") && (_i2 = "#" + _i2.split("#")[1]), e = _i2 && "#" !== _i2 ? _i2.trim() : null;
                }
                return e;
            },
            i = function i(t) {
                var i = e(t);
                return i && document.querySelector(i) ? i : null;
            },
            n = function n(t) {
                var i = e(t);
                return i ? document.querySelector(i) : null;
            },
            s = function s(e) {
                e.dispatchEvent(new Event(t));
            },
            o = function o(t) {
                return !(!t || "object" != typeof t) && (void 0 !== t.jquery && (t = t[0]), void 0 !== t.nodeType);
            },
            r = function r(t) {
                return o(t) ? t.jquery ? t[0] : t : "string" == typeof t && t.length > 0 ? document.querySelector(t) : null;
            },
            a = function a(t, e, i) {
                Object.keys(i).forEach(function(n) {
                    var s = i[n],
                        r = e[n],
                        a = r && o(r) ? "element" : null == (l = r) ? "" + l : {}.toString.call(l).match(/\s([a-z]+)/i)[1].toLowerCase();
                    var l;
                    if (!new RegExp(s).test(a)) throw new TypeError(t.toUpperCase() + ": Option \"" + n + "\" provided type \"" + a + "\" but expected type \"" + s + "\".");
                });
            },
            l = function l(t) {
                return !(!o(t) || 0 === t.getClientRects().length) && "visible" === getComputedStyle(t).getPropertyValue("visibility");
            },
            c = function c(t) {
                return !t || t.nodeType !== Node.ELEMENT_NODE || !!t.classList.contains("disabled") || (void 0 !== t.disabled ? t.disabled : t.hasAttribute("disabled") && "false" !== t.getAttribute("disabled"));
            },
            h = function h(t) {
                if (!document.documentElement.attachShadow) return null;
                if ("function" == typeof t.getRootNode) {
                    var _e2 = t.getRootNode();
                    return _e2 instanceof ShadowRoot ? _e2 : null;
                }
                return t instanceof ShadowRoot ? t : t.parentNode ? h(t.parentNode) : null;
            },
            d = function d() {},
            u = function u(t) {
                t.offsetHeight;
            },
            f = function f() {
                var _window = window,
                    t = _window.jQuery;
                return t && !document.body.hasAttribute("data-bs-no-jquery") ? t : null;
            },
            p = [],
            m = function m() {
                return "rtl" === document.documentElement.dir;
            },
            g = function g(t) {
                var e;
                e = function e() {
                    var e = f();
                    if (e) {
                        var _i3 = t.NAME,
                            _n2 = e.fn[_i3];
                        e.fn[_i3] = t.jQueryInterface, e.fn[_i3].Constructor = t, e.fn[_i3].noConflict = function() {
                            return e.fn[_i3] = _n2, t.jQueryInterface;
                        };
                    }
                }, "loading" === document.readyState ? (p.length || document.addEventListener("DOMContentLoaded", function() {
                    p.forEach(function(t) {
                        return t();
                    });
                }), p.push(e)) : e();
            },
            _ = function _(t) {
                "function" == typeof t && t();
            },
            b = function b(e, i, n) {
                if (n === void 0) {
                    n = !0;
                }
                if (!n) return void _(e);
                var o = function(t) {
                    if (!t) return 0;
                    var _window$getComputedSt = window.getComputedStyle(t),
                        e = _window$getComputedSt.transitionDuration,
                        i = _window$getComputedSt.transitionDelay;
                    var n = Number.parseFloat(e),
                        s = Number.parseFloat(i);
                    return n || s ? (e = e.split(",")[0], i = i.split(",")[0], 1e3 * (Number.parseFloat(e) + Number.parseFloat(i))) : 0;
                }(i) + 5;
                var r = !1;
                var a = function a(_ref) {
                    var n = _ref.target;
                    n === i && (r = !0, i.removeEventListener(t, a), _(e));
                };
                i.addEventListener(t, a), setTimeout(function() {
                    r || s(i);
                }, o);
            },
            v = function v(t, e, i, n) {
                var s = t.indexOf(e);
                if (-1 === s) return t[!i && n ? t.length - 1 : 0];
                var o = t.length;
                return s += i ? 1 : -1, n && (s = (s + o) % o), t[Math.max(0, Math.min(s, o - 1))];
            },
            y = /[^.]*(?=\..*)\.|.*/,
            w = /\..*/,
            E = /::\d+$/,
            A = {};
        var T = 1;
        var O = {
                mouseenter: "mouseover",
                mouseleave: "mouseout"
            },
            C = /^(mouseenter|mouseleave)/i,
            k = new Set(["click", "dblclick", "mouseup", "mousedown", "contextmenu", "mousewheel", "DOMMouseScroll", "mouseover", "mouseout", "mousemove", "selectstart", "selectend", "keydown", "keypress", "keyup", "orientationchange", "touchstart", "touchmove", "touchend", "touchcancel", "pointerdown", "pointermove", "pointerup", "pointerleave", "pointercancel", "gesturestart", "gesturechange", "gestureend", "focus", "blur", "change", "reset", "select", "submit", "focusin", "focusout", "load", "unload", "beforeunload", "resize", "move", "DOMContentLoaded", "readystatechange", "error", "abort", "scroll"]);

        function L(t, e) {
            return e && e + "::" + T++ || t.uidEvent || T++;
        }

        function x(t) {
            var e = L(t);
            return t.uidEvent = e, A[e] = A[e] || {}, A[e];
        }

        function D(t, e, i) {
            if (i === void 0) {
                i = null;
            }
            var n = Object.keys(t);
            for (var _s = 0, _o = n.length; _s < _o; _s++) {
                var _o2 = t[n[_s]];
                if (_o2.originalHandler === e && _o2.delegationSelector === i) return _o2;
            }
            return null;
        }

        function S(t, e, i) {
            var n = "string" == typeof e,
                s = n ? i : e;
            var o = P(t);
            return k.has(o) || (o = t), [n, s, o];
        }

        function N(t, e, i, n, s) {
            if ("string" != typeof e || !t) return;
            if (i || (i = n, n = null), C.test(e)) {
                var _t2 = function _t2(t) {
                    return function(e) {
                        if (!e.relatedTarget || e.relatedTarget !== e.delegateTarget && !e.delegateTarget.contains(e.relatedTarget)) return t.call(this, e);
                    };
                };
                n ? n = _t2(n) : i = _t2(i);
            }
            var _S = S(e, i, n),
                o = _S[0],
                r = _S[1],
                a = _S[2],
                l = x(t),
                c = l[a] || (l[a] = {}),
                h = D(c, r, o ? i : null);
            if (h) return void(h.oneOff = h.oneOff && s);
            var d = L(r, e.replace(y, "")),
                u = o ? function(t, e, i) {
                    return function n(s) {
                        var o = t.querySelectorAll(e);
                        for (var _r = s.target; _r && _r !== this; _r = _r.parentNode) {
                            for (var _a = o.length; _a--;) {
                                if (o[_a] === _r) return s.delegateTarget = _r, n.oneOff && j.off(t, s.type, e, i), i.apply(_r, [s]);
                            }
                        }
                        return null;
                    };
                }(t, i, n) : function(t, e) {
                    return function i(n) {
                        return n.delegateTarget = t, i.oneOff && j.off(t, n.type, e), e.apply(t, [n]);
                    };
                }(t, i);
            u.delegationSelector = o ? i : null, u.originalHandler = r, u.oneOff = s, u.uidEvent = d, c[d] = u, t.addEventListener(a, u, o);
        }

        function I(t, e, i, n, s) {
            var o = D(e[i], n, s);
            o && (t.removeEventListener(i, o, Boolean(s)), delete e[i][o.uidEvent]);
        }

        function P(t) {
            return t = t.replace(w, ""), O[t] || t;
        }
        var j = {
                on: function on(t, e, i, n) {
                    N(t, e, i, n, !1);
                },
                one: function one(t, e, i, n) {
                    N(t, e, i, n, !0);
                },
                off: function off(t, e, i, n) {
                    if ("string" != typeof e || !t) return;
                    var _S2 = S(e, i, n),
                        s = _S2[0],
                        o = _S2[1],
                        r = _S2[2],
                        a = r !== e,
                        l = x(t),
                        c = e.startsWith(".");
                    if (void 0 !== o) {
                        if (!l || !l[r]) return;
                        return void I(t, l, r, o, s ? i : null);
                    }
                    c && Object.keys(l).forEach(function(i) {
                        ! function(t, e, i, n) {
                            var s = e[i] || {};
                            Object.keys(s).forEach(function(o) {
                                if (o.includes(n)) {
                                    var _n3 = s[o];
                                    I(t, e, i, _n3.originalHandler, _n3.delegationSelector);
                                }
                            });
                        }(t, l, i, e.slice(1));
                    });
                    var h = l[r] || {};
                    Object.keys(h).forEach(function(i) {
                        var n = i.replace(E, "");
                        if (!a || e.includes(n)) {
                            var _e3 = h[i];
                            I(t, l, r, _e3.originalHandler, _e3.delegationSelector);
                        }
                    });
                },
                trigger: function trigger(t, e, i) {
                    if ("string" != typeof e || !t) return null;
                    var n = f(),
                        s = P(e),
                        o = e !== s,
                        r = k.has(s);
                    var a,
                        l = !0,
                        c = !0,
                        h = !1,
                        d = null;
                    return o && n && (a = n.Event(e, i), n(t).trigger(a), l = !a.isPropagationStopped(), c = !a.isImmediatePropagationStopped(), h = a.isDefaultPrevented()), r ? (d = document.createEvent("HTMLEvents"), d.initEvent(s, l, !0)) : d = new CustomEvent(e, {
                        bubbles: l,
                        cancelable: !0
                    }), void 0 !== i && Object.keys(i).forEach(function(t) {
                        Object.defineProperty(d, t, {
                            get: function get() {
                                return i[t];
                            }
                        });
                    }), h && d.preventDefault(), c && t.dispatchEvent(d), d.defaultPrevented && void 0 !== a && a.preventDefault(), d;
                }
            },
            M = new Map(),
            H = {
                set: function set(t, e, i) {
                    M.has(t) || M.set(t, new Map());
                    var n = M.get(t);
                    n.has(e) || 0 === n.size ? n.set(e, i) : console.error("Bootstrap doesn't allow more than one instance per element. Bound instance: " + Array.from(n.keys())[0] + ".");
                },
                get: function get(t, e) {
                    return M.has(t) && M.get(t).get(e) || null;
                },
                remove: function remove(t, e) {
                    if (!M.has(t)) return;
                    var i = M.get(t);
                    i.delete(e), 0 === i.size && M.delete(t);
                }
            };
        var B = /*#__PURE__*/ function() {
            function B(t) {
                (t = r(t)) && (this._element = t, H.set(this._element, this.constructor.DATA_KEY, this));
            }
            var _proto = B.prototype;
            _proto.dispose = function dispose() {
                var _this = this;
                H.remove(this._element, this.constructor.DATA_KEY), j.off(this._element, this.constructor.EVENT_KEY), Object.getOwnPropertyNames(this).forEach(function(t) {
                    _this[t] = null;
                });
            };
            _proto._queueCallback = function _queueCallback(t, e, i) {
                if (i === void 0) {
                    i = !0;
                }
                b(t, e, i);
            };
            B.getInstance = function getInstance(t) {
                return H.get(r(t), this.DATA_KEY);
            };
            B.getOrCreateInstance = function getOrCreateInstance(t, e) {
                if (e === void 0) {
                    e = {};
                }
                return this.getInstance(t) || new this(t, "object" == typeof e ? e : null);
            };
            _createClass(B, null, [{
                key: "VERSION",
                get: function get() {
                    return "5.1.3";
                }
            }, {
                key: "NAME",
                get: function get() {
                    throw new Error('You have to implement the static method "NAME", for each component!');
                }
            }, {
                key: "DATA_KEY",
                get: function get() {
                    return "bs." + this.NAME;
                }
            }, {
                key: "EVENT_KEY",
                get: function get() {
                    return "." + this.DATA_KEY;
                }
            }]);
            return B;
        }();
        var R = function R(t, e) {
            if (e === void 0) {
                e = "hide";
            }
            var i = "click.dismiss" + t.EVENT_KEY,
                s = t.NAME;
            j.on(document, i, "[data-bs-dismiss=\"" + s + "\"]", function(i) {
                if (["A", "AREA"].includes(this.tagName) && i.preventDefault(), c(this)) return;
                var o = n(this) || this.closest("." + s);
                t.getOrCreateInstance(o)[e]();
            });
        };
        var W = /*#__PURE__*/ function(_B) {
            _inheritsLoose(W, _B);

            function W() {
                return _B.apply(this, arguments) || this;
            }
            var _proto2 = W.prototype;
            _proto2.close = function close() {
                var _this2 = this;
                if (j.trigger(this._element, "close.bs.alert").defaultPrevented) return;
                this._element.classList.remove("show");
                var t = this._element.classList.contains("fade");
                this._queueCallback(function() {
                    return _this2._destroyElement();
                }, this._element, t);
            };
            _proto2._destroyElement = function _destroyElement() {
                this._element.remove(), j.trigger(this._element, "closed.bs.alert"), this.dispose();
            };
            W.jQueryInterface = function jQueryInterface(t) {
                return this.each(function() {
                    var e = W.getOrCreateInstance(this);
                    if ("string" == typeof t) {
                        if (void 0 === e[t] || t.startsWith("_") || "constructor" === t) throw new TypeError("No method named \"" + t + "\"");
                        e[t](this);
                    }
                });
            };
            _createClass(W, null, [{
                key: "NAME",
                get: function get() {
                    return "alert";
                }
            }]);
            return W;
        }(B);
        R(W, "close"), g(W);
        var $ = '[data-bs-toggle="button"]';
        var z = /*#__PURE__*/ function(_B2) {
            _inheritsLoose(z, _B2);

            function z() {
                return _B2.apply(this, arguments) || this;
            }
            var _proto3 = z.prototype;
            _proto3.toggle = function toggle() {
                this._element.setAttribute("aria-pressed", this._element.classList.toggle("active"));
            };
            z.jQueryInterface = function jQueryInterface(t) {
                return this.each(function() {
                    var e = z.getOrCreateInstance(this);
                    "toggle" === t && e[t]();
                });
            };
            _createClass(z, null, [{
                key: "NAME",
                get: function get() {
                    return "button";
                }
            }]);
            return z;
        }(B);

        function q(t) {
            return "true" === t || "false" !== t && (t === Number(t).toString() ? Number(t) : "" === t || "null" === t ? null : t);
        }

        function F(t) {
            return t.replace(/[A-Z]/g, function(t) {
                return "-" + t.toLowerCase();
            });
        }
        j.on(document, "click.bs.button.data-api", $, function(t) {
            t.preventDefault();
            var e = t.target.closest($);
            z.getOrCreateInstance(e).toggle();
        }), g(z);
        var U = {
                setDataAttribute: function setDataAttribute(t, e, i) {
                    t.setAttribute("data-bs-" + F(e), i);
                },
                removeDataAttribute: function removeDataAttribute(t, e) {
                    t.removeAttribute("data-bs-" + F(e));
                },
                getDataAttributes: function getDataAttributes(t) {
                    if (!t) return {};
                    var e = {};
                    return Object.keys(t.dataset).filter(function(t) {
                        return t.startsWith("bs");
                    }).forEach(function(i) {
                        var n = i.replace(/^bs/, "");
                        n = n.charAt(0).toLowerCase() + n.slice(1, n.length), e[n] = q(t.dataset[i]);
                    }), e;
                },
                getDataAttribute: function getDataAttribute(t, e) {
                    return q(t.getAttribute("data-bs-" + F(e)));
                },
                offset: function offset(t) {
                    var e = t.getBoundingClientRect();
                    return {
                        top: e.top + window.pageYOffset,
                        left: e.left + window.pageXOffset
                    };
                },
                position: function position(t) {
                    return {
                        top: t.offsetTop,
                        left: t.offsetLeft
                    };
                }
            },
            V = {
                find: function find(t, e) {
                    var _ref2;
                    if (e === void 0) {
                        e = document.documentElement;
                    }
                    return (_ref2 = []).concat.apply(_ref2, Element.prototype.querySelectorAll.call(e, t));
                },
                findOne: function findOne(t, e) {
                    if (e === void 0) {
                        e = document.documentElement;
                    }
                    return Element.prototype.querySelector.call(e, t);
                },
                children: function children(t, e) {
                    var _ref3;
                    return (_ref3 = []).concat.apply(_ref3, t.children).filter(function(t) {
                        return t.matches(e);
                    });
                },
                parents: function parents(t, e) {
                    var i = [];
                    var n = t.parentNode;
                    for (; n && n.nodeType === Node.ELEMENT_NODE && 3 !== n.nodeType;) {
                        n.matches(e) && i.push(n), n = n.parentNode;
                    }
                    return i;
                },
                prev: function prev(t, e) {
                    var i = t.previousElementSibling;
                    for (; i;) {
                        if (i.matches(e)) return [i];
                        i = i.previousElementSibling;
                    }
                    return [];
                },
                next: function next(t, e) {
                    var i = t.nextElementSibling;
                    for (; i;) {
                        if (i.matches(e)) return [i];
                        i = i.nextElementSibling;
                    }
                    return [];
                },
                focusableChildren: function focusableChildren(t) {
                    var e = ["a", "button", "input", "textarea", "select", "details", "[tabindex]", '[contenteditable="true"]'].map(function(t) {
                        return t + ":not([tabindex^=\"-\"])";
                    }).join(", ");
                    return this.find(e, t).filter(function(t) {
                        return !c(t) && l(t);
                    });
                }
            },
            K = "carousel",
            X = {
                interval: 5e3,
                keyboard: !0,
                slide: !1,
                pause: "hover",
                wrap: !0,
                touch: !0
            },
            Y = {
                interval: "(number|boolean)",
                keyboard: "boolean",
                slide: "(boolean|string)",
                pause: "(string|boolean)",
                wrap: "boolean",
                touch: "boolean"
            },
            Q = "next",
            G = "prev",
            Z = "left",
            J = "right",
            tt = {
                ArrowLeft: J,
                ArrowRight: Z
            },
            et = "slid.bs.carousel",
            it = "active",
            nt = ".active.carousel-item";
        var st = /*#__PURE__*/ function(_B3) {
            _inheritsLoose(st, _B3);

            function st(t, e) {
                var _this3;
                _this3 = _B3.call(this, t) || this, _this3._items = null, _this3._interval = null, _this3._activeElement = null, _this3._isPaused = !1, _this3._isSliding = !1, _this3.touchTimeout = null, _this3.touchStartX = 0, _this3.touchDeltaX = 0, _this3._config = _this3._getConfig(e), _this3._indicatorsElement = V.findOne(".carousel-indicators", _this3._element), _this3._touchSupported = "ontouchstart" in document.documentElement || navigator.maxTouchPoints > 0, _this3._pointerEvent = Boolean(window.PointerEvent), _this3._addEventListeners();
                return _this3;
            }
            var _proto4 = st.prototype;
            _proto4.next = function next() {
                this._slide(Q);
            };
            _proto4.nextWhenVisible = function nextWhenVisible() {
                !document.hidden && l(this._element) && this.next();
            };
            _proto4.prev = function prev() {
                this._slide(G);
            };
            _proto4.pause = function pause(t) {
                t || (this._isPaused = !0), V.findOne(".carousel-item-next, .carousel-item-prev", this._element) && (s(this._element), this.cycle(!0)), clearInterval(this._interval), this._interval = null;
            };
            _proto4.cycle = function cycle(t) {
                t || (this._isPaused = !1), this._interval && (clearInterval(this._interval), this._interval = null), this._config && this._config.interval && !this._isPaused && (this._updateInterval(), this._interval = setInterval((document.visibilityState ? this.nextWhenVisible : this.next).bind(this), this._config.interval));
            };
            _proto4.to = function to(t) {
                var _this4 = this;
                this._activeElement = V.findOne(nt, this._element);
                var e = this._getItemIndex(this._activeElement);
                if (t > this._items.length - 1 || t < 0) return;
                if (this._isSliding) return void j.one(this._element, et, function() {
                    return _this4.to(t);
                });
                if (e === t) return this.pause(), void this.cycle();
                var i = t > e ? Q : G;
                this._slide(i, this._items[t]);
            };
            _proto4._getConfig = function _getConfig(t) {
                return t = _extends({}, X, U.getDataAttributes(this._element), "object" == typeof t ? t : {}), a(K, t, Y), t;
            };
            _proto4._handleSwipe = function _handleSwipe() {
                var t = Math.abs(this.touchDeltaX);
                if (t <= 40) return;
                var e = t / this.touchDeltaX;
                this.touchDeltaX = 0, e && this._slide(e > 0 ? J : Z);
            };
            _proto4._addEventListeners = function _addEventListeners() {
                var _this5 = this;
                this._config.keyboard && j.on(this._element, "keydown.bs.carousel", function(t) {
                    return _this5._keydown(t);
                }), "hover" === this._config.pause && (j.on(this._element, "mouseenter.bs.carousel", function(t) {
                    return _this5.pause(t);
                }), j.on(this._element, "mouseleave.bs.carousel", function(t) {
                    return _this5.cycle(t);
                })), this._config.touch && this._touchSupported && this._addTouchEventListeners();
            };
            _proto4._addTouchEventListeners = function _addTouchEventListeners() {
                var _this6 = this;
                var t = function t(_t3) {
                        return _this6._pointerEvent && ("pen" === _t3.pointerType || "touch" === _t3.pointerType);
                    },
                    e = function e(_e4) {
                        t(_e4) ? _this6.touchStartX = _e4.clientX : _this6._pointerEvent || (_this6.touchStartX = _e4.touches[0].clientX);
                    },
                    i = function i(t) {
                        _this6.touchDeltaX = t.touches && t.touches.length > 1 ? 0 : t.touches[0].clientX - _this6.touchStartX;
                    },
                    n = function n(e) {
                        t(e) && (_this6.touchDeltaX = e.clientX - _this6.touchStartX), _this6._handleSwipe(), "hover" === _this6._config.pause && (_this6.pause(), _this6.touchTimeout && clearTimeout(_this6.touchTimeout), _this6.touchTimeout = setTimeout(function(t) {
                            return _this6.cycle(t);
                        }, 500 + _this6._config.interval));
                    };
                V.find(".carousel-item img", this._element).forEach(function(t) {
                    j.on(t, "dragstart.bs.carousel", function(t) {
                        return t.preventDefault();
                    });
                }), this._pointerEvent ? (j.on(this._element, "pointerdown.bs.carousel", function(t) {
                    return e(t);
                }), j.on(this._element, "pointerup.bs.carousel", function(t) {
                    return n(t);
                }), this._element.classList.add("pointer-event")) : (j.on(this._element, "touchstart.bs.carousel", function(t) {
                    return e(t);
                }), j.on(this._element, "touchmove.bs.carousel", function(t) {
                    return i(t);
                }), j.on(this._element, "touchend.bs.carousel", function(t) {
                    return n(t);
                }));
            };
            _proto4._keydown = function _keydown(t) {
                if (/input|textarea/i.test(t.target.tagName)) return;
                var e = tt[t.key];
                e && (t.preventDefault(), this._slide(e));
            };
            _proto4._getItemIndex = function _getItemIndex(t) {
                return this._items = t && t.parentNode ? V.find(".carousel-item", t.parentNode) : [], this._items.indexOf(t);
            };
            _proto4._getItemByOrder = function _getItemByOrder(t, e) {
                var i = t === Q;
                return v(this._items, e, i, this._config.wrap);
            };
            _proto4._triggerSlideEvent = function _triggerSlideEvent(t, e) {
                var i = this._getItemIndex(t),
                    n = this._getItemIndex(V.findOne(nt, this._element));
                return j.trigger(this._element, "slide.bs.carousel", {
                    relatedTarget: t,
                    direction: e,
                    from: n,
                    to: i
                });
            };
            _proto4._setActiveIndicatorElement = function _setActiveIndicatorElement(t) {
                if (this._indicatorsElement) {
                    var _e5 = V.findOne(".active", this._indicatorsElement);
                    _e5.classList.remove(it), _e5.removeAttribute("aria-current");
                    var _i4 = V.find("[data-bs-target]", this._indicatorsElement);
                    for (var _e6 = 0; _e6 < _i4.length; _e6++) {
                        if (Number.parseInt(_i4[_e6].getAttribute("data-bs-slide-to"), 10) === this._getItemIndex(t)) {
                            _i4[_e6].classList.add(it), _i4[_e6].setAttribute("aria-current", "true");
                            break;
                        }
                    }
                }
            };
            _proto4._updateInterval = function _updateInterval() {
                var t = this._activeElement || V.findOne(nt, this._element);
                if (!t) return;
                var e = Number.parseInt(t.getAttribute("data-bs-interval"), 10);
                e ? (this._config.defaultInterval = this._config.defaultInterval || this._config.interval, this._config.interval = e) : this._config.interval = this._config.defaultInterval || this._config.interval;
            };
            _proto4._slide = function _slide(t, e) {
                var _this7 = this;
                var i = this._directionToOrder(t),
                    n = V.findOne(nt, this._element),
                    s = this._getItemIndex(n),
                    o = e || this._getItemByOrder(i, n),
                    r = this._getItemIndex(o),
                    a = Boolean(this._interval),
                    l = i === Q,
                    c = l ? "carousel-item-start" : "carousel-item-end",
                    h = l ? "carousel-item-next" : "carousel-item-prev",
                    d = this._orderToDirection(i);
                if (o && o.classList.contains(it)) return void(this._isSliding = !1);
                if (this._isSliding) return;
                if (this._triggerSlideEvent(o, d).defaultPrevented) return;
                if (!n || !o) return;
                this._isSliding = !0, a && this.pause(), this._setActiveIndicatorElement(o), this._activeElement = o;
                var f = function f() {
                    j.trigger(_this7._element, et, {
                        relatedTarget: o,
                        direction: d,
                        from: s,
                        to: r
                    });
                };
                if (this._element.classList.contains("slide")) {
                    o.classList.add(h), u(o), n.classList.add(c), o.classList.add(c);
                    var _t4 = function _t4() {
                        o.classList.remove(c, h), o.classList.add(it), n.classList.remove(it, h, c), _this7._isSliding = !1, setTimeout(f, 0);
                    };
                    this._queueCallback(_t4, n, !0);
                } else n.classList.remove(it), o.classList.add(it), this._isSliding = !1, f();
                a && this.cycle();
            };
            _proto4._directionToOrder = function _directionToOrder(t) {
                return [J, Z].includes(t) ? m() ? t === Z ? G : Q : t === Z ? Q : G : t;
            };
            _proto4._orderToDirection = function _orderToDirection(t) {
                return [Q, G].includes(t) ? m() ? t === G ? Z : J : t === G ? J : Z : t;
            };
            st.carouselInterface = function carouselInterface(t, e) {
                var i = st.getOrCreateInstance(t, e);
                var n = i._config;
                "object" == typeof e && (n = _extends({}, n, e));
                var s = "string" == typeof e ? e : n.slide;
                if ("number" == typeof e) i.to(e);
                else if ("string" == typeof s) {
                    if (void 0 === i[s]) throw new TypeError("No method named \"" + s + "\"");
                    i[s]();
                } else n.interval && n.ride && (i.pause(), i.cycle());
            };
            st.jQueryInterface = function jQueryInterface(t) {
                return this.each(function() {
                    st.carouselInterface(this, t);
                });
            };
            st.dataApiClickHandler = function dataApiClickHandler(t) {
                var e = n(this);
                if (!e || !e.classList.contains("carousel")) return;
                var i = _extends({}, U.getDataAttributes(e), U.getDataAttributes(this)),
                    s = this.getAttribute("data-bs-slide-to");
                s && (i.interval = !1), st.carouselInterface(e, i), s && st.getInstance(e).to(s), t.preventDefault();
            };
            _createClass(st, null, [{
                key: "Default",
                get: function get() {
                    return X;
                }
            }, {
                key: "NAME",
                get: function get() {
                    return K;
                }
            }]);
            return st;
        }(B);
        j.on(document, "click.bs.carousel.data-api", "[data-bs-slide], [data-bs-slide-to]", st.dataApiClickHandler), j.on(window, "load.bs.carousel.data-api", function() {
            var t = V.find('[data-bs-ride="carousel"]');
            for (var _e7 = 0, _i5 = t.length; _e7 < _i5; _e7++) {
                st.carouselInterface(t[_e7], st.getInstance(t[_e7]));
            }
        }), g(st);
        var ot = "collapse",
            rt = {
                toggle: !0,
                parent: null
            },
            at = {
                toggle: "boolean",
                parent: "(null|element)"
            },
            lt = "show",
            ct = "collapse",
            ht = "collapsing",
            dt = "collapsed",
            ut = ":scope .collapse .collapse",
            ft = '[data-bs-toggle="collapse"]';
        var pt = /*#__PURE__*/ function(_B4) {
            _inheritsLoose(pt, _B4);

            function pt(t, e) {
                var _this8;
                _this8 = _B4.call(this, t) || this, _this8._isTransitioning = !1, _this8._config = _this8._getConfig(e), _this8._triggerArray = [];
                var n = V.find(ft);
                for (var _t5 = 0, _e8 = n.length; _t5 < _e8; _t5++) {
                    var _e9 = n[_t5],
                        _s2 = i(_e9),
                        _o3 = V.find(_s2).filter(function(t) {
                            return t === _this8._element;
                        });
                    null !== _s2 && _o3.length && (_this8._selector = _s2, _this8._triggerArray.push(_e9));
                }
                _this8._initializeChildren(), _this8._config.parent || _this8._addAriaAndCollapsedClass(_this8._triggerArray, _this8._isShown()), _this8._config.toggle && _this8.toggle();
                return _this8;
            }
            var _proto5 = pt.prototype;
            _proto5.toggle = function toggle() {
                this._isShown() ? this.hide() : this.show();
            };
            _proto5.show = function show() {
                var _this9 = this;
                if (this._isTransitioning || this._isShown()) return;
                var t,
                    e = [];
                if (this._config.parent) {
                    var _t6 = V.find(ut, this._config.parent);
                    e = V.find(".collapse.show, .collapse.collapsing", this._config.parent).filter(function(e) {
                        return !_t6.includes(e);
                    });
                }
                var i = V.findOne(this._selector);
                if (e.length) {
                    var _n4 = e.find(function(t) {
                        return i !== t;
                    });
                    if (t = _n4 ? pt.getInstance(_n4) : null, t && t._isTransitioning) return;
                }
                if (j.trigger(this._element, "show.bs.collapse").defaultPrevented) return;
                e.forEach(function(e) {
                    i !== e && pt.getOrCreateInstance(e, {
                        toggle: !1
                    }).hide(), t || H.set(e, "bs.collapse", null);
                });
                var n = this._getDimension();
                this._element.classList.remove(ct), this._element.classList.add(ht), this._element.style[n] = 0, this._addAriaAndCollapsedClass(this._triggerArray, !0), this._isTransitioning = !0;
                var s = "scroll" + (n[0].toUpperCase() + n.slice(1));
                this._queueCallback(function() {
                    _this9._isTransitioning = !1, _this9._element.classList.remove(ht), _this9._element.classList.add(ct, lt), _this9._element.style[n] = "", j.trigger(_this9._element, "shown.bs.collapse");
                }, this._element, !0), this._element.style[n] = this._element[s] + "px";
            };
            _proto5.hide = function hide() {
                var _this10 = this;
                if (this._isTransitioning || !this._isShown()) return;
                if (j.trigger(this._element, "hide.bs.collapse").defaultPrevented) return;
                var t = this._getDimension();
                this._element.style[t] = this._element.getBoundingClientRect()[t] + "px", u(this._element), this._element.classList.add(ht), this._element.classList.remove(ct, lt);
                var e = this._triggerArray.length;
                for (var _t7 = 0; _t7 < e; _t7++) {
                    var _e10 = this._triggerArray[_t7],
                        _i6 = n(_e10);
                    _i6 && !this._isShown(_i6) && this._addAriaAndCollapsedClass([_e10], !1);
                }
                this._isTransitioning = !0, this._element.style[t] = "", this._queueCallback(function() {
                    _this10._isTransitioning = !1, _this10._element.classList.remove(ht), _this10._element.classList.add(ct), j.trigger(_this10._element, "hidden.bs.collapse");
                }, this._element, !0);
            };
            _proto5._isShown = function _isShown(t) {
                if (t === void 0) {
                    t = this._element;
                }
                return t.classList.contains(lt);
            };
            _proto5._getConfig = function _getConfig(t) {
                return (t = _extends({}, rt, U.getDataAttributes(this._element), t)).toggle = Boolean(t.toggle), t.parent = r(t.parent), a(ot, t, at), t;
            };
            _proto5._getDimension = function _getDimension() {
                return this._element.classList.contains("collapse-horizontal") ? "width" : "height";
            };
            _proto5._initializeChildren = function _initializeChildren() {
                var _this11 = this;
                if (!this._config.parent) return;
                var t = V.find(ut, this._config.parent);
                V.find(ft, this._config.parent).filter(function(e) {
                    return !t.includes(e);
                }).forEach(function(t) {
                    var e = n(t);
                    e && _this11._addAriaAndCollapsedClass([t], _this11._isShown(e));
                });
            };
            _proto5._addAriaAndCollapsedClass = function _addAriaAndCollapsedClass(t, e) {
                t.length && t.forEach(function(t) {
                    e ? t.classList.remove(dt) : t.classList.add(dt), t.setAttribute("aria-expanded", e);
                });
            };
            pt.jQueryInterface = function jQueryInterface(t) {
                return this.each(function() {
                    var e = {};
                    "string" == typeof t && /show|hide/.test(t) && (e.toggle = !1);
                    var i = pt.getOrCreateInstance(this, e);
                    if ("string" == typeof t) {
                        if (void 0 === i[t]) throw new TypeError("No method named \"" + t + "\"");
                        i[t]();
                    }
                });
            };
            _createClass(pt, null, [{
                key: "Default",
                get: function get() {
                    return rt;
                }
            }, {
                key: "NAME",
                get: function get() {
                    return ot;
                }
            }]);
            return pt;
        }(B);
        j.on(document, "click.bs.collapse.data-api", ft, function(t) {
            ("A" === t.target.tagName || t.delegateTarget && "A" === t.delegateTarget.tagName) && t.preventDefault();
            var e = i(this);
            V.find(e).forEach(function(t) {
                pt.getOrCreateInstance(t, {
                    toggle: !1
                }).toggle();
            });
        }), g(pt);
        var mt = "top",
            gt = "bottom",
            _t = "right",
            bt = "left",
            vt = "auto",
            yt = [mt, gt, _t, bt],
            wt = "start",
            Et = "end",
            At = "clippingParents",
            Tt = "viewport",
            Ot = "popper",
            Ct = "reference",
            kt = yt.reduce(function(t, e) {
                return t.concat([e + "-" + wt, e + "-" + Et]);
            }, []),
            Lt = [].concat(yt, [vt]).reduce(function(t, e) {
                return t.concat([e, e + "-" + wt, e + "-" + Et]);
            }, []),
            xt = "beforeRead",
            Dt = "read",
            St = "afterRead",
            Nt = "beforeMain",
            It = "main",
            Pt = "afterMain",
            jt = "beforeWrite",
            Mt = "write",
            Ht = "afterWrite",
            Bt = [xt, Dt, St, Nt, It, Pt, jt, Mt, Ht];

        function Rt(t) {
            return t ? (t.nodeName || "").toLowerCase() : null;
        }

        function Wt(t) {
            if (null == t) return window;
            if ("[object Window]" !== t.toString()) {
                var e = t.ownerDocument;
                return e && e.defaultView || window;
            }
            return t;
        }

        function $t(t) {
            return t instanceof Wt(t).Element || t instanceof Element;
        }

        function zt(t) {
            return t instanceof Wt(t).HTMLElement || t instanceof HTMLElement;
        }

        function qt(t) {
            return "undefined" != typeof ShadowRoot && (t instanceof Wt(t).ShadowRoot || t instanceof ShadowRoot);
        }
        var Ft = {
            name: "applyStyles",
            enabled: !0,
            phase: "write",
            fn: function fn(t) {
                var e = t.state;
                Object.keys(e.elements).forEach(function(t) {
                    var i = e.styles[t] || {},
                        n = e.attributes[t] || {},
                        s = e.elements[t];
                    zt(s) && Rt(s) && (Object.assign(s.style, i), Object.keys(n).forEach(function(t) {
                        var e = n[t];
                        !1 === e ? s.removeAttribute(t) : s.setAttribute(t, !0 === e ? "" : e);
                    }));
                });
            },
            effect: function effect(t) {
                var e = t.state,
                    i = {
                        popper: {
                            position: e.options.strategy,
                            left: "0",
                            top: "0",
                            margin: "0"
                        },
                        arrow: {
                            position: "absolute"
                        },
                        reference: {}
                    };
                return Object.assign(e.elements.popper.style, i.popper), e.styles = i, e.elements.arrow && Object.assign(e.elements.arrow.style, i.arrow),
                    function() {
                        Object.keys(e.elements).forEach(function(t) {
                            var n = e.elements[t],
                                s = e.attributes[t] || {},
                                o = Object.keys(e.styles.hasOwnProperty(t) ? e.styles[t] : i[t]).reduce(function(t, e) {
                                    return t[e] = "", t;
                                }, {});
                            zt(n) && Rt(n) && (Object.assign(n.style, o), Object.keys(s).forEach(function(t) {
                                n.removeAttribute(t);
                            }));
                        });
                    };
            },
            requires: ["computeStyles"]
        };

        function Ut(t) {
            return t.split("-")[0];
        }

        function Vt(t, e) {
            var i = t.getBoundingClientRect();
            return {
                width: i.width / 1,
                height: i.height / 1,
                top: i.top / 1,
                right: i.right / 1,
                bottom: i.bottom / 1,
                left: i.left / 1,
                x: i.left / 1,
                y: i.top / 1
            };
        }

        function Kt(t) {
            var e = Vt(t),
                i = t.offsetWidth,
                n = t.offsetHeight;
            return Math.abs(e.width - i) <= 1 && (i = e.width), Math.abs(e.height - n) <= 1 && (n = e.height), {
                x: t.offsetLeft,
                y: t.offsetTop,
                width: i,
                height: n
            };
        }

        function Xt(t, e) {
            var i = e.getRootNode && e.getRootNode();
            if (t.contains(e)) return !0;
            if (i && qt(i)) {
                var n = e;
                do {
                    if (n && t.isSameNode(n)) return !0;
                    n = n.parentNode || n.host;
                } while (n);
            }
            return !1;
        }

        function Yt(t) {
            return Wt(t).getComputedStyle(t);
        }

        function Qt(t) {
            return ["table", "td", "th"].indexOf(Rt(t)) >= 0;
        }

        function Gt(t) {
            return (($t(t) ? t.ownerDocument : t.document) || window.document).documentElement;
        }

        function Zt(t) {
            return "html" === Rt(t) ? t : t.assignedSlot || t.parentNode || (qt(t) ? t.host : null) || Gt(t);
        }

        function Jt(t) {
            return zt(t) && "fixed" !== Yt(t).position ? t.offsetParent : null;
        }

        function te(t) {
            for (var e = Wt(t), i = Jt(t); i && Qt(i) && "static" === Yt(i).position;) {
                i = Jt(i);
            }
            return i && ("html" === Rt(i) || "body" === Rt(i) && "static" === Yt(i).position) ? e : i || function(t) {
                var e = -1 !== navigator.userAgent.toLowerCase().indexOf("firefox");
                if (-1 !== navigator.userAgent.indexOf("Trident") && zt(t) && "fixed" === Yt(t).position) return null;
                for (var i = Zt(t); zt(i) && ["html", "body"].indexOf(Rt(i)) < 0;) {
                    var n = Yt(i);
                    if ("none" !== n.transform || "none" !== n.perspective || "paint" === n.contain || -1 !== ["transform", "perspective"].indexOf(n.willChange) || e && "filter" === n.willChange || e && n.filter && "none" !== n.filter) return i;
                    i = i.parentNode;
                }
                return null;
            }(t) || e;
        }

        function ee(t) {
            return ["top", "bottom"].indexOf(t) >= 0 ? "x" : "y";
        }
        var ie = Math.max,
            ne = Math.min,
            se = Math.round;

        function oe(t, e, i) {
            return ie(t, ne(e, i));
        }

        function re(t) {
            return Object.assign({}, {
                top: 0,
                right: 0,
                bottom: 0,
                left: 0
            }, t);
        }

        function ae(t, e) {
            return e.reduce(function(e, i) {
                return e[i] = t, e;
            }, {});
        }
        var le = {
            name: "arrow",
            enabled: !0,
            phase: "main",
            fn: function fn(t) {
                var e,
                    i = t.state,
                    n = t.name,
                    s = t.options,
                    o = i.elements.arrow,
                    r = i.modifiersData.popperOffsets,
                    a = Ut(i.placement),
                    l = ee(a),
                    c = [bt, _t].indexOf(a) >= 0 ? "height" : "width";
                if (o && r) {
                    var h = function(t, e) {
                            return re("number" != typeof(t = "function" == typeof t ? t(Object.assign({}, e.rects, {
                                placement: e.placement
                            })) : t) ? t : ae(t, yt));
                        }(s.padding, i),
                        d = Kt(o),
                        u = "y" === l ? mt : bt,
                        f = "y" === l ? gt : _t,
                        p = i.rects.reference[c] + i.rects.reference[l] - r[l] - i.rects.popper[c],
                        m = r[l] - i.rects.reference[l],
                        g = te(o),
                        _ = g ? "y" === l ? g.clientHeight || 0 : g.clientWidth || 0 : 0,
                        b = p / 2 - m / 2,
                        v = h[u],
                        y = _ - d[c] - h[f],
                        w = _ / 2 - d[c] / 2 + b,
                        E = oe(v, w, y),
                        A = l;
                    i.modifiersData[n] = ((e = {})[A] = E, e.centerOffset = E - w, e);
                }
            },
            effect: function effect(t) {
                var e = t.state,
                    i = t.options.element,
                    n = void 0 === i ? "[data-popper-arrow]" : i;
                null != n && ("string" != typeof n || (n = e.elements.popper.querySelector(n))) && Xt(e.elements.popper, n) && (e.elements.arrow = n);
            },
            requires: ["popperOffsets"],
            requiresIfExists: ["preventOverflow"]
        };

        function ce(t) {
            return t.split("-")[1];
        }
        var he = {
            top: "auto",
            right: "auto",
            bottom: "auto",
            left: "auto"
        };

        function de(t) {
            var e,
                i = t.popper,
                n = t.popperRect,
                s = t.placement,
                o = t.variation,
                r = t.offsets,
                a = t.position,
                l = t.gpuAcceleration,
                c = t.adaptive,
                h = t.roundOffsets,
                d = !0 === h ? function(t) {
                    var e = t.x,
                        i = t.y,
                        n = window.devicePixelRatio || 1;
                    return {
                        x: se(se(e * n) / n) || 0,
                        y: se(se(i * n) / n) || 0
                    };
                }(r) : "function" == typeof h ? h(r) : r,
                u = d.x,
                f = void 0 === u ? 0 : u,
                p = d.y,
                m = void 0 === p ? 0 : p,
                g = r.hasOwnProperty("x"),
                _ = r.hasOwnProperty("y"),
                b = bt,
                v = mt,
                y = window;
            if (c) {
                var w = te(i),
                    E = "clientHeight",
                    A = "clientWidth";
                w === Wt(i) && "static" !== Yt(w = Gt(i)).position && "absolute" === a && (E = "scrollHeight", A = "scrollWidth"), w = w, s !== mt && (s !== bt && s !== _t || o !== Et) || (v = gt, m -= w[E] - n.height, m *= l ? 1 : -1), s !== bt && (s !== mt && s !== gt || o !== Et) || (b = _t, f -= w[A] - n.width, f *= l ? 1 : -1);
            }
            var T,
                O = Object.assign({
                    position: a
                }, c && he);
            return l ? Object.assign({}, O, ((T = {})[v] = _ ? "0" : "", T[b] = g ? "0" : "", T.transform = (y.devicePixelRatio || 1) <= 1 ? "translate(" + f + "px, " + m + "px)" : "translate3d(" + f + "px, " + m + "px, 0)", T)) : Object.assign({}, O, ((e = {})[v] = _ ? m + "px" : "", e[b] = g ? f + "px" : "", e.transform = "", e));
        }
        var ue = {
            name: "computeStyles",
            enabled: !0,
            phase: "beforeWrite",
            fn: function fn(t) {
                var e = t.state,
                    i = t.options,
                    n = i.gpuAcceleration,
                    s = void 0 === n || n,
                    o = i.adaptive,
                    r = void 0 === o || o,
                    a = i.roundOffsets,
                    l = void 0 === a || a,
                    c = {
                        placement: Ut(e.placement),
                        variation: ce(e.placement),
                        popper: e.elements.popper,
                        popperRect: e.rects.popper,
                        gpuAcceleration: s
                    };
                null != e.modifiersData.popperOffsets && (e.styles.popper = Object.assign({}, e.styles.popper, de(Object.assign({}, c, {
                    offsets: e.modifiersData.popperOffsets,
                    position: e.options.strategy,
                    adaptive: r,
                    roundOffsets: l
                })))), null != e.modifiersData.arrow && (e.styles.arrow = Object.assign({}, e.styles.arrow, de(Object.assign({}, c, {
                    offsets: e.modifiersData.arrow,
                    position: "absolute",
                    adaptive: !1,
                    roundOffsets: l
                })))), e.attributes.popper = Object.assign({}, e.attributes.popper, {
                    "data-popper-placement": e.placement
                });
            },
            data: {}
        };
        var fe = {
            passive: !0
        };
        var pe = {
            name: "eventListeners",
            enabled: !0,
            phase: "write",
            fn: function fn() {},
            effect: function effect(t) {
                var e = t.state,
                    i = t.instance,
                    n = t.options,
                    s = n.scroll,
                    o = void 0 === s || s,
                    r = n.resize,
                    a = void 0 === r || r,
                    l = Wt(e.elements.popper),
                    c = [].concat(e.scrollParents.reference, e.scrollParents.popper);
                return o && c.forEach(function(t) {
                        t.addEventListener("scroll", i.update, fe);
                    }), a && l.addEventListener("resize", i.update, fe),
                    function() {
                        o && c.forEach(function(t) {
                            t.removeEventListener("scroll", i.update, fe);
                        }), a && l.removeEventListener("resize", i.update, fe);
                    };
            },
            data: {}
        };
        var me = {
            left: "right",
            right: "left",
            bottom: "top",
            top: "bottom"
        };

        function ge(t) {
            return t.replace(/left|right|bottom|top/g, function(t) {
                return me[t];
            });
        }
        var _e = {
            start: "end",
            end: "start"
        };

        function be(t) {
            return t.replace(/start|end/g, function(t) {
                return _e[t];
            });
        }

        function ve(t) {
            var e = Wt(t);
            return {
                scrollLeft: e.pageXOffset,
                scrollTop: e.pageYOffset
            };
        }

        function ye(t) {
            return Vt(Gt(t)).left + ve(t).scrollLeft;
        }

        function we(t) {
            var e = Yt(t),
                i = e.overflow,
                n = e.overflowX,
                s = e.overflowY;
            return /auto|scroll|overlay|hidden/.test(i + s + n);
        }

        function Ee(t) {
            return ["html", "body", "#document"].indexOf(Rt(t)) >= 0 ? t.ownerDocument.body : zt(t) && we(t) ? t : Ee(Zt(t));
        }

        function Ae(t, e) {
            var i;
            void 0 === e && (e = []);
            var n = Ee(t),
                s = n === (null == (i = t.ownerDocument) ? void 0 : i.body),
                o = Wt(n),
                r = s ? [o].concat(o.visualViewport || [], we(n) ? n : []) : n,
                a = e.concat(r);
            return s ? a : a.concat(Ae(Zt(r)));
        }

        function Te(t) {
            return Object.assign({}, t, {
                left: t.x,
                top: t.y,
                right: t.x + t.width,
                bottom: t.y + t.height
            });
        }

        function Oe(t, e) {
            return e === Tt ? Te(function(t) {
                var e = Wt(t),
                    i = Gt(t),
                    n = e.visualViewport,
                    s = i.clientWidth,
                    o = i.clientHeight,
                    r = 0,
                    a = 0;
                return n && (s = n.width, o = n.height, /^((?!chrome|android).)*safari/i.test(navigator.userAgent) || (r = n.offsetLeft, a = n.offsetTop)), {
                    width: s,
                    height: o,
                    x: r + ye(t),
                    y: a
                };
            }(t)) : zt(e) ? function(t) {
                var e = Vt(t);
                return e.top = e.top + t.clientTop, e.left = e.left + t.clientLeft, e.bottom = e.top + t.clientHeight, e.right = e.left + t.clientWidth, e.width = t.clientWidth, e.height = t.clientHeight, e.x = e.left, e.y = e.top, e;
            }(e) : Te(function(t) {
                var e,
                    i = Gt(t),
                    n = ve(t),
                    s = null == (e = t.ownerDocument) ? void 0 : e.body,
                    o = ie(i.scrollWidth, i.clientWidth, s ? s.scrollWidth : 0, s ? s.clientWidth : 0),
                    r = ie(i.scrollHeight, i.clientHeight, s ? s.scrollHeight : 0, s ? s.clientHeight : 0),
                    a = -n.scrollLeft + ye(t),
                    l = -n.scrollTop;
                return "rtl" === Yt(s || i).direction && (a += ie(i.clientWidth, s ? s.clientWidth : 0) - o), {
                    width: o,
                    height: r,
                    x: a,
                    y: l
                };
            }(Gt(t)));
        }

        function Ce(t) {
            var e,
                i = t.reference,
                n = t.element,
                s = t.placement,
                o = s ? Ut(s) : null,
                r = s ? ce(s) : null,
                a = i.x + i.width / 2 - n.width / 2,
                l = i.y + i.height / 2 - n.height / 2;
            switch (o) {
                case mt:
                    e = {
                        x: a,
                        y: i.y - n.height
                    };
                    break;
                case gt:
                    e = {
                        x: a,
                        y: i.y + i.height
                    };
                    break;
                case _t:
                    e = {
                        x: i.x + i.width,
                        y: l
                    };
                    break;
                case bt:
                    e = {
                        x: i.x - n.width,
                        y: l
                    };
                    break;
                default:
                    e = {
                        x: i.x,
                        y: i.y
                    };
            }
            var c = o ? ee(o) : null;
            if (null != c) {
                var h = "y" === c ? "height" : "width";
                switch (r) {
                    case wt:
                        e[c] = e[c] - (i[h] / 2 - n[h] / 2);
                        break;
                    case Et:
                        e[c] = e[c] + (i[h] / 2 - n[h] / 2);
                }
            }
            return e;
        }

        function ke(t, e) {
            void 0 === e && (e = {});
            var i = e,
                n = i.placement,
                s = void 0 === n ? t.placement : n,
                o = i.boundary,
                r = void 0 === o ? At : o,
                a = i.rootBoundary,
                l = void 0 === a ? Tt : a,
                c = i.elementContext,
                h = void 0 === c ? Ot : c,
                d = i.altBoundary,
                u = void 0 !== d && d,
                f = i.padding,
                p = void 0 === f ? 0 : f,
                m = re("number" != typeof p ? p : ae(p, yt)),
                g = h === Ot ? Ct : Ot,
                _ = t.rects.popper,
                b = t.elements[u ? g : h],
                v = function(t, e, i) {
                    var n = "clippingParents" === e ? function(t) {
                            var e = Ae(Zt(t)),
                                i = ["absolute", "fixed"].indexOf(Yt(t).position) >= 0 && zt(t) ? te(t) : t;
                            return $t(i) ? e.filter(function(t) {
                                return $t(t) && Xt(t, i) && "body" !== Rt(t);
                            }) : [];
                        }(t) : [].concat(e),
                        s = [].concat(n, [i]),
                        o = s[0],
                        r = s.reduce(function(e, i) {
                            var n = Oe(t, i);
                            return e.top = ie(n.top, e.top), e.right = ne(n.right, e.right), e.bottom = ne(n.bottom, e.bottom), e.left = ie(n.left, e.left), e;
                        }, Oe(t, o));
                    return r.width = r.right - r.left, r.height = r.bottom - r.top, r.x = r.left, r.y = r.top, r;
                }($t(b) ? b : b.contextElement || Gt(t.elements.popper), r, l),
                y = Vt(t.elements.reference),
                w = Ce({
                    reference: y,
                    element: _,
                    strategy: "absolute",
                    placement: s
                }),
                E = Te(Object.assign({}, _, w)),
                A = h === Ot ? E : y,
                T = {
                    top: v.top - A.top + m.top,
                    bottom: A.bottom - v.bottom + m.bottom,
                    left: v.left - A.left + m.left,
                    right: A.right - v.right + m.right
                },
                O = t.modifiersData.offset;
            if (h === Ot && O) {
                var C = O[s];
                Object.keys(T).forEach(function(t) {
                    var e = [_t, gt].indexOf(t) >= 0 ? 1 : -1,
                        i = [mt, gt].indexOf(t) >= 0 ? "y" : "x";
                    T[t] += C[i] * e;
                });
            }
            return T;
        }

        function Le(t, e) {
            void 0 === e && (e = {});
            var i = e,
                n = i.placement,
                s = i.boundary,
                o = i.rootBoundary,
                r = i.padding,
                a = i.flipVariations,
                l = i.allowedAutoPlacements,
                c = void 0 === l ? Lt : l,
                h = ce(n),
                d = h ? a ? kt : kt.filter(function(t) {
                    return ce(t) === h;
                }) : yt,
                u = d.filter(function(t) {
                    return c.indexOf(t) >= 0;
                });
            0 === u.length && (u = d);
            var f = u.reduce(function(e, i) {
                return e[i] = ke(t, {
                    placement: i,
                    boundary: s,
                    rootBoundary: o,
                    padding: r
                })[Ut(i)], e;
            }, {});
            return Object.keys(f).sort(function(t, e) {
                return f[t] - f[e];
            });
        }
        var xe = {
            name: "flip",
            enabled: !0,
            phase: "main",
            fn: function fn(t) {
                var e = t.state,
                    i = t.options,
                    n = t.name;
                if (!e.modifiersData[n]._skip) {
                    for (var s = i.mainAxis, o = void 0 === s || s, r = i.altAxis, a = void 0 === r || r, l = i.fallbackPlacements, c = i.padding, h = i.boundary, d = i.rootBoundary, u = i.altBoundary, f = i.flipVariations, p = void 0 === f || f, m = i.allowedAutoPlacements, g = e.options.placement, _ = Ut(g), b = l || (_ !== g && p ? function(t) {
                            if (Ut(t) === vt) return [];
                            var e = ge(t);
                            return [be(t), e, be(e)];
                        }(g) : [ge(g)]), v = [g].concat(b).reduce(function(t, i) {
                            return t.concat(Ut(i) === vt ? Le(e, {
                                placement: i,
                                boundary: h,
                                rootBoundary: d,
                                padding: c,
                                flipVariations: p,
                                allowedAutoPlacements: m
                            }) : i);
                        }, []), y = e.rects.reference, w = e.rects.popper, E = new Map(), A = !0, T = v[0], O = 0; O < v.length; O++) {
                        var C = v[O],
                            k = Ut(C),
                            L = ce(C) === wt,
                            x = [mt, gt].indexOf(k) >= 0,
                            D = x ? "width" : "height",
                            S = ke(e, {
                                placement: C,
                                boundary: h,
                                rootBoundary: d,
                                altBoundary: u,
                                padding: c
                            }),
                            N = x ? L ? _t : bt : L ? gt : mt;
                        y[D] > w[D] && (N = ge(N));
                        var I = ge(N),
                            P = [];
                        if (o && P.push(S[k] <= 0), a && P.push(S[N] <= 0, S[I] <= 0), P.every(function(t) {
                                return t;
                            })) {
                            T = C, A = !1;
                            break;
                        }
                        E.set(C, P);
                    }
                    if (A)
                        for (var j = function j(t) {
                                var e = v.find(function(e) {
                                    var i = E.get(e);
                                    if (i) return i.slice(0, t).every(function(t) {
                                        return t;
                                    });
                                });
                                if (e) return T = e, "break";
                            }, M = p ? 3 : 1; M > 0 && "break" !== j(M); M--) {}
                    e.placement !== T && (e.modifiersData[n]._skip = !0, e.placement = T, e.reset = !0);
                }
            },
            requiresIfExists: ["offset"],
            data: {
                _skip: !1
            }
        };

        function De(t, e, i) {
            return void 0 === i && (i = {
                x: 0,
                y: 0
            }), {
                top: t.top - e.height - i.y,
                right: t.right - e.width + i.x,
                bottom: t.bottom - e.height + i.y,
                left: t.left - e.width - i.x
            };
        }

        function Se(t) {
            return [mt, _t, gt, bt].some(function(e) {
                return t[e] >= 0;
            });
        }
        var Ne = {
                name: "hide",
                enabled: !0,
                phase: "main",
                requiresIfExists: ["preventOverflow"],
                fn: function fn(t) {
                    var e = t.state,
                        i = t.name,
                        n = e.rects.reference,
                        s = e.rects.popper,
                        o = e.modifiersData.preventOverflow,
                        r = ke(e, {
                            elementContext: "reference"
                        }),
                        a = ke(e, {
                            altBoundary: !0
                        }),
                        l = De(r, n),
                        c = De(a, s, o),
                        h = Se(l),
                        d = Se(c);
                    e.modifiersData[i] = {
                        referenceClippingOffsets: l,
                        popperEscapeOffsets: c,
                        isReferenceHidden: h,
                        hasPopperEscaped: d
                    }, e.attributes.popper = Object.assign({}, e.attributes.popper, {
                        "data-popper-reference-hidden": h,
                        "data-popper-escaped": d
                    });
                }
            },
            Ie = {
                name: "offset",
                enabled: !0,
                phase: "main",
                requires: ["popperOffsets"],
                fn: function fn(t) {
                    var e = t.state,
                        i = t.options,
                        n = t.name,
                        s = i.offset,
                        o = void 0 === s ? [0, 0] : s,
                        r = Lt.reduce(function(t, i) {
                            return t[i] = function(t, e, i) {
                                var n = Ut(t),
                                    s = [bt, mt].indexOf(n) >= 0 ? -1 : 1,
                                    o = "function" == typeof i ? i(Object.assign({}, e, {
                                        placement: t
                                    })) : i,
                                    r = o[0],
                                    a = o[1];
                                return r = r || 0, a = (a || 0) * s, [bt, _t].indexOf(n) >= 0 ? {
                                    x: a,
                                    y: r
                                } : {
                                    x: r,
                                    y: a
                                };
                            }(i, e.rects, o), t;
                        }, {}),
                        a = r[e.placement],
                        l = a.x,
                        c = a.y;
                    null != e.modifiersData.popperOffsets && (e.modifiersData.popperOffsets.x += l, e.modifiersData.popperOffsets.y += c), e.modifiersData[n] = r;
                }
            },
            Pe = {
                name: "popperOffsets",
                enabled: !0,
                phase: "read",
                fn: function fn(t) {
                    var e = t.state,
                        i = t.name;
                    e.modifiersData[i] = Ce({
                        reference: e.rects.reference,
                        element: e.rects.popper,
                        strategy: "absolute",
                        placement: e.placement
                    });
                },
                data: {}
            },
            je = {
                name: "preventOverflow",
                enabled: !0,
                phase: "main",
                fn: function fn(t) {
                    var e = t.state,
                        i = t.options,
                        n = t.name,
                        s = i.mainAxis,
                        o = void 0 === s || s,
                        r = i.altAxis,
                        a = void 0 !== r && r,
                        l = i.boundary,
                        c = i.rootBoundary,
                        h = i.altBoundary,
                        d = i.padding,
                        u = i.tether,
                        f = void 0 === u || u,
                        p = i.tetherOffset,
                        m = void 0 === p ? 0 : p,
                        g = ke(e, {
                            boundary: l,
                            rootBoundary: c,
                            padding: d,
                            altBoundary: h
                        }),
                        _ = Ut(e.placement),
                        b = ce(e.placement),
                        v = !b,
                        y = ee(_),
                        w = "x" === y ? "y" : "x",
                        E = e.modifiersData.popperOffsets,
                        A = e.rects.reference,
                        T = e.rects.popper,
                        O = "function" == typeof m ? m(Object.assign({}, e.rects, {
                            placement: e.placement
                        })) : m,
                        C = {
                            x: 0,
                            y: 0
                        };
                    if (E) {
                        if (o || a) {
                            var k = "y" === y ? mt : bt,
                                L = "y" === y ? gt : _t,
                                x = "y" === y ? "height" : "width",
                                D = E[y],
                                S = E[y] + g[k],
                                N = E[y] - g[L],
                                I = f ? -T[x] / 2 : 0,
                                P = b === wt ? A[x] : T[x],
                                j = b === wt ? -T[x] : -A[x],
                                M = e.elements.arrow,
                                H = f && M ? Kt(M) : {
                                    width: 0,
                                    height: 0
                                },
                                B = e.modifiersData["arrow#persistent"] ? e.modifiersData["arrow#persistent"].padding : {
                                    top: 0,
                                    right: 0,
                                    bottom: 0,
                                    left: 0
                                },
                                R = B[k],
                                W = B[L],
                                $ = oe(0, A[x], H[x]),
                                z = v ? A[x] / 2 - I - $ - R - O : P - $ - R - O,
                                q = v ? -A[x] / 2 + I + $ + W + O : j + $ + W + O,
                                F = e.elements.arrow && te(e.elements.arrow),
                                U = F ? "y" === y ? F.clientTop || 0 : F.clientLeft || 0 : 0,
                                V = e.modifiersData.offset ? e.modifiersData.offset[e.placement][y] : 0,
                                K = E[y] + z - V - U,
                                X = E[y] + q - V;
                            if (o) {
                                var Y = oe(f ? ne(S, K) : S, D, f ? ie(N, X) : N);
                                E[y] = Y, C[y] = Y - D;
                            }
                            if (a) {
                                var Q = "x" === y ? mt : bt,
                                    G = "x" === y ? gt : _t,
                                    Z = E[w],
                                    J = Z + g[Q],
                                    tt = Z - g[G],
                                    et = oe(f ? ne(J, K) : J, Z, f ? ie(tt, X) : tt);
                                E[w] = et, C[w] = et - Z;
                            }
                        }
                        e.modifiersData[n] = C;
                    }
                },
                requiresIfExists: ["offset"]
            };

        function Me(t, e, i) {
            void 0 === i && (i = !1);
            var n = zt(e);
            zt(e) && function(t) {
                var e = t.getBoundingClientRect();
                e.width, t.offsetWidth, e.height, t.offsetHeight;
            }(e);
            var s,
                o,
                r = Gt(e),
                a = Vt(t),
                l = {
                    scrollLeft: 0,
                    scrollTop: 0
                },
                c = {
                    x: 0,
                    y: 0
                };
            return (n || !n && !i) && (("body" !== Rt(e) || we(r)) && (l = (s = e) !== Wt(s) && zt(s) ? {
                scrollLeft: (o = s).scrollLeft,
                scrollTop: o.scrollTop
            } : ve(s)), zt(e) ? ((c = Vt(e)).x += e.clientLeft, c.y += e.clientTop) : r && (c.x = ye(r))), {
                x: a.left + l.scrollLeft - c.x,
                y: a.top + l.scrollTop - c.y,
                width: a.width,
                height: a.height
            };
        }

        function He(t) {
            var e = new Map(),
                i = new Set(),
                n = [];

            function s(t) {
                i.add(t.name), [].concat(t.requires || [], t.requiresIfExists || []).forEach(function(t) {
                    if (!i.has(t)) {
                        var n = e.get(t);
                        n && s(n);
                    }
                }), n.push(t);
            }
            return t.forEach(function(t) {
                e.set(t.name, t);
            }), t.forEach(function(t) {
                i.has(t.name) || s(t);
            }), n;
        }
        var Be = {
            placement: "bottom",
            modifiers: [],
            strategy: "absolute"
        };

        function Re() {
            for (var t = arguments.length, e = new Array(t), i = 0; i < t; i++) {
                e[i] = arguments[i];
            }
            return !e.some(function(t) {
                return !(t && "function" == typeof t.getBoundingClientRect);
            });
        }

        function We(t) {
            void 0 === t && (t = {});
            var e = t,
                i = e.defaultModifiers,
                n = void 0 === i ? [] : i,
                s = e.defaultOptions,
                o = void 0 === s ? Be : s;
            return function(t, e, i) {
                void 0 === i && (i = o);
                var s,
                    r,
                    a = {
                        placement: "bottom",
                        orderedModifiers: [],
                        options: Object.assign({}, Be, o),
                        modifiersData: {},
                        elements: {
                            reference: t,
                            popper: e
                        },
                        attributes: {},
                        styles: {}
                    },
                    l = [],
                    c = !1,
                    h = {
                        state: a,
                        setOptions: function setOptions(i) {
                            var s = "function" == typeof i ? i(a.options) : i;
                            d(), a.options = Object.assign({}, o, a.options, s), a.scrollParents = {
                                reference: $t(t) ? Ae(t) : t.contextElement ? Ae(t.contextElement) : [],
                                popper: Ae(e)
                            };
                            var r,
                                c,
                                u = function(t) {
                                    var e = He(t);
                                    return Bt.reduce(function(t, i) {
                                        return t.concat(e.filter(function(t) {
                                            return t.phase === i;
                                        }));
                                    }, []);
                                }((r = [].concat(n, a.options.modifiers), c = r.reduce(function(t, e) {
                                    var i = t[e.name];
                                    return t[e.name] = i ? Object.assign({}, i, e, {
                                        options: Object.assign({}, i.options, e.options),
                                        data: Object.assign({}, i.data, e.data)
                                    }) : e, t;
                                }, {}), Object.keys(c).map(function(t) {
                                    return c[t];
                                })));
                            return a.orderedModifiers = u.filter(function(t) {
                                return t.enabled;
                            }), a.orderedModifiers.forEach(function(t) {
                                var e = t.name,
                                    i = t.options,
                                    n = void 0 === i ? {} : i,
                                    s = t.effect;
                                if ("function" == typeof s) {
                                    var o = s({
                                        state: a,
                                        name: e,
                                        instance: h,
                                        options: n
                                    });
                                    l.push(o || function() {});
                                }
                            }), h.update();
                        },
                        forceUpdate: function forceUpdate() {
                            if (!c) {
                                var t = a.elements,
                                    e = t.reference,
                                    i = t.popper;
                                if (Re(e, i)) {
                                    a.rects = {
                                        reference: Me(e, te(i), "fixed" === a.options.strategy),
                                        popper: Kt(i)
                                    }, a.reset = !1, a.placement = a.options.placement, a.orderedModifiers.forEach(function(t) {
                                        return a.modifiersData[t.name] = Object.assign({}, t.data);
                                    });
                                    for (var n = 0; n < a.orderedModifiers.length; n++) {
                                        if (!0 !== a.reset) {
                                            var s = a.orderedModifiers[n],
                                                o = s.fn,
                                                r = s.options,
                                                l = void 0 === r ? {} : r,
                                                d = s.name;
                                            "function" == typeof o && (a = o({
                                                state: a,
                                                options: l,
                                                name: d,
                                                instance: h
                                            }) || a);
                                        } else a.reset = !1, n = -1;
                                    }
                                }
                            }
                        },
                        update: (s = function s() {
                            return new Promise(function(t) {
                                h.forceUpdate(), t(a);
                            });
                        }, function() {
                            return r || (r = new Promise(function(t) {
                                Promise.resolve().then(function() {
                                    r = void 0, t(s());
                                });
                            })), r;
                        }),
                        destroy: function destroy() {
                            d(), c = !0;
                        }
                    };
                if (!Re(t, e)) return h;

                function d() {
                    l.forEach(function(t) {
                        return t();
                    }), l = [];
                }
                return h.setOptions(i).then(function(t) {
                    !c && i.onFirstUpdate && i.onFirstUpdate(t);
                }), h;
            };
        }
        var $e = We(),
            ze = We({
                defaultModifiers: [pe, Pe, ue, Ft]
            }),
            qe = We({
                defaultModifiers: [pe, Pe, ue, Ft, Ie, xe, je, le, Ne]
            });
        var Fe = Object.freeze({
                __proto__: null,
                popperGenerator: We,
                detectOverflow: ke,
                createPopperBase: $e,
                createPopper: qe,
                createPopperLite: ze,
                top: mt,
                bottom: gt,
                right: _t,
                left: bt,
                auto: vt,
                basePlacements: yt,
                start: wt,
                end: Et,
                clippingParents: At,
                viewport: Tt,
                popper: Ot,
                reference: Ct,
                variationPlacements: kt,
                placements: Lt,
                beforeRead: xt,
                read: Dt,
                afterRead: St,
                beforeMain: Nt,
                main: It,
                afterMain: Pt,
                beforeWrite: jt,
                write: Mt,
                afterWrite: Ht,
                modifierPhases: Bt,
                applyStyles: Ft,
                arrow: le,
                computeStyles: ue,
                eventListeners: pe,
                flip: xe,
                hide: Ne,
                offset: Ie,
                popperOffsets: Pe,
                preventOverflow: je
            }),
            Ue = "dropdown",
            Ve = "Escape",
            Ke = "Space",
            Xe = "ArrowUp",
            Ye = "ArrowDown",
            Qe = new RegExp("ArrowUp|ArrowDown|Escape"),
            Ge = "click.bs.dropdown.data-api",
            Ze = "keydown.bs.dropdown.data-api",
            Je = "show",
            ti = '[data-bs-toggle="dropdown"]',
            ei = ".dropdown-menu",
            ii = m() ? "top-end" : "top-start",
            ni = m() ? "top-start" : "top-end",
            si = m() ? "bottom-end" : "bottom-start",
            oi = m() ? "bottom-start" : "bottom-end",
            ri = m() ? "left-start" : "right-start",
            ai = m() ? "right-start" : "left-start",
            li = {
                offset: [0, 2],
                boundary: "clippingParents",
                reference: "toggle",
                display: "dynamic",
                popperConfig: null,
                autoClose: !0
            },
            ci = {
                offset: "(array|string|function)",
                boundary: "(string|element)",
                reference: "(string|element|object)",
                display: "string",
                popperConfig: "(null|object|function)",
                autoClose: "(boolean|string)"
            };
        var hi = /*#__PURE__*/ function(_B5) {
            _inheritsLoose(hi, _B5);

            function hi(t, e) {
                var _this12;
                _this12 = _B5.call(this, t) || this, _this12._popper = null, _this12._config = _this12._getConfig(e), _this12._menu = _this12._getMenuElement(), _this12._inNavbar = _this12._detectNavbar();
                return _this12;
            }
            var _proto6 = hi.prototype;
            _proto6.toggle = function toggle() {
                return this._isShown() ? this.hide() : this.show();
            };
            _proto6.show = function show() {
                var _ref4;
                if (c(this._element) || this._isShown(this._menu)) return;
                var t = {
                    relatedTarget: this._element
                };
                if (j.trigger(this._element, "show.bs.dropdown", t).defaultPrevented) return;
                var e = hi.getParentFromElement(this._element);
                this._inNavbar ? U.setDataAttribute(this._menu, "popper", "none") : this._createPopper(e), "ontouchstart" in document.documentElement && !e.closest(".navbar-nav") && (_ref4 = []).concat.apply(_ref4, document.body.children).forEach(function(t) {
                    return j.on(t, "mouseover", d);
                }), this._element.focus(), this._element.setAttribute("aria-expanded", !0), this._menu.classList.add(Je), this._element.classList.add(Je), j.trigger(this._element, "shown.bs.dropdown", t);
            };
            _proto6.hide = function hide() {
                if (c(this._element) || !this._isShown(this._menu)) return;
                var t = {
                    relatedTarget: this._element
                };
                this._completeHide(t);
            };
            _proto6.dispose = function dispose() {
                this._popper && this._popper.destroy(), _B5.prototype.dispose.call(this);
            };
            _proto6.update = function update() {
                this._inNavbar = this._detectNavbar(), this._popper && this._popper.update();
            };
            _proto6._completeHide = function _completeHide(t) {
                var _ref5;
                j.trigger(this._element, "hide.bs.dropdown", t).defaultPrevented || ("ontouchstart" in document.documentElement && (_ref5 = []).concat.apply(_ref5, document.body.children).forEach(function(t) {
                    return j.off(t, "mouseover", d);
                }), this._popper && this._popper.destroy(), this._menu.classList.remove(Je), this._element.classList.remove(Je), this._element.setAttribute("aria-expanded", "false"), U.removeDataAttribute(this._menu, "popper"), j.trigger(this._element, "hidden.bs.dropdown", t));
            };
            _proto6._getConfig = function _getConfig(t) {
                if (t = _extends({}, this.constructor.Default, U.getDataAttributes(this._element), t), a(Ue, t, this.constructor.DefaultType), "object" == typeof t.reference && !o(t.reference) && "function" != typeof t.reference.getBoundingClientRect) throw new TypeError(Ue.toUpperCase() + ": Option \"reference\" provided type \"object\" without a required \"getBoundingClientRect\" method.");
                return t;
            };
            _proto6._createPopper = function _createPopper(t) {
                if (void 0 === Fe) throw new TypeError("Bootstrap's dropdowns require Popper (https://popper.js.org)");
                var e = this._element;
                "parent" === this._config.reference ? e = t : o(this._config.reference) ? e = r(this._config.reference) : "object" == typeof this._config.reference && (e = this._config.reference);
                var i = this._getPopperConfig(),
                    n = i.modifiers.find(function(t) {
                        return "applyStyles" === t.name && !1 === t.enabled;
                    });
                this._popper = qe(e, this._menu, i), n && U.setDataAttribute(this._menu, "popper", "static");
            };
            _proto6._isShown = function _isShown(t) {
                if (t === void 0) {
                    t = this._element;
                }
                return t.classList.contains(Je);
            };
            _proto6._getMenuElement = function _getMenuElement() {
                return V.next(this._element, ei)[0];
            };
            _proto6._getPlacement = function _getPlacement() {
                var t = this._element.parentNode;
                if (t.classList.contains("dropend")) return ri;
                if (t.classList.contains("dropstart")) return ai;
                var e = "end" === getComputedStyle(this._menu).getPropertyValue("--bs-position").trim();
                return t.classList.contains("dropup") ? e ? ni : ii : e ? oi : si;
            };
            _proto6._detectNavbar = function _detectNavbar() {
                return null !== this._element.closest(".navbar");
            };
            _proto6._getOffset = function _getOffset() {
                var _this13 = this;
                var t = this._config.offset;
                return "string" == typeof t ? t.split(",").map(function(t) {
                    return Number.parseInt(t, 10);
                }) : "function" == typeof t ? function(e) {
                    return t(e, _this13._element);
                } : t;
            };
            _proto6._getPopperConfig = function _getPopperConfig() {
                var t = {
                    placement: this._getPlacement(),
                    modifiers: [{
                        name: "preventOverflow",
                        options: {
                            boundary: this._config.boundary
                        }
                    }, {
                        name: "offset",
                        options: {
                            offset: this._getOffset()
                        }
                    }]
                };
                return "static" === this._config.display && (t.modifiers = [{
                    name: "applyStyles",
                    enabled: !1
                }]), _extends({}, t, "function" == typeof this._config.popperConfig ? this._config.popperConfig(t) : this._config.popperConfig);
            };
            _proto6._selectMenuItem = function _selectMenuItem(_ref6) {
                var t = _ref6.key,
                    e = _ref6.target;
                var i = V.find(".dropdown-menu .dropdown-item:not(.disabled):not(:disabled)", this._menu).filter(l);
                i.length && v(i, e, t === Ye, !i.includes(e)).focus();
            };
            hi.jQueryInterface = function jQueryInterface(t) {
                return this.each(function() {
                    var e = hi.getOrCreateInstance(this, t);
                    if ("string" == typeof t) {
                        if (void 0 === e[t]) throw new TypeError("No method named \"" + t + "\"");
                        e[t]();
                    }
                });
            };
            hi.clearMenus = function clearMenus(t) {
                if (t && (2 === t.button || "keyup" === t.type && "Tab" !== t.key)) return;
                var e = V.find(ti);
                for (var _i7 = 0, _n5 = e.length; _i7 < _n5; _i7++) {
                    var _n6 = hi.getInstance(e[_i7]);
                    if (!_n6 || !1 === _n6._config.autoClose) continue;
                    if (!_n6._isShown()) continue;
                    var _s3 = {
                        relatedTarget: _n6._element
                    };
                    if (t) {
                        var _e11 = t.composedPath(),
                            _i8 = _e11.includes(_n6._menu);
                        if (_e11.includes(_n6._element) || "inside" === _n6._config.autoClose && !_i8 || "outside" === _n6._config.autoClose && _i8) continue;
                        if (_n6._menu.contains(t.target) && ("keyup" === t.type && "Tab" === t.key || /input|select|option|textarea|form/i.test(t.target.tagName))) continue;
                        "click" === t.type && (_s3.clickEvent = t);
                    }
                    _n6._completeHide(_s3);
                }
            };
            hi.getParentFromElement = function getParentFromElement(t) {
                return n(t) || t.parentNode;
            };
            hi.dataApiKeydownHandler = function dataApiKeydownHandler(t) {
                if (/input|textarea/i.test(t.target.tagName) ? t.key === Ke || t.key !== Ve && (t.key !== Ye && t.key !== Xe || t.target.closest(ei)) : !Qe.test(t.key)) return;
                var e = this.classList.contains(Je);
                if (!e && t.key === Ve) return;
                if (t.preventDefault(), t.stopPropagation(), c(this)) return;
                var i = this.matches(ti) ? this : V.prev(this, ti)[0],
                    n = hi.getOrCreateInstance(i);
                if (t.key !== Ve) return t.key === Xe || t.key === Ye ? (e || n.show(), void n._selectMenuItem(t)) : void(e && t.key !== Ke || hi.clearMenus());
                n.hide();
            };
            _createClass(hi, null, [{
                key: "Default",
                get: function get() {
                    return li;
                }
            }, {
                key: "DefaultType",
                get: function get() {
                    return ci;
                }
            }, {
                key: "NAME",
                get: function get() {
                    return Ue;
                }
            }]);
            return hi;
        }(B);
        j.on(document, Ze, ti, hi.dataApiKeydownHandler), j.on(document, Ze, ei, hi.dataApiKeydownHandler), j.on(document, Ge, hi.clearMenus), j.on(document, "keyup.bs.dropdown.data-api", hi.clearMenus), j.on(document, Ge, ti, function(t) {
            t.preventDefault(), hi.getOrCreateInstance(this).toggle();
        }), g(hi);
        var di = ".fixed-top, .fixed-bottom, .is-fixed, .sticky-top",
            ui = ".sticky-top";
        var fi = /*#__PURE__*/ function() {
            function fi() {
                this._element = document.body;
            }
            var _proto7 = fi.prototype;
            _proto7.getWidth = function getWidth() {
                var t = document.documentElement.clientWidth;
                return Math.abs(window.innerWidth - t);
            };
            _proto7.hide = function hide() {
                var t = this.getWidth();
                this._disableOverFlow(), this._setElementAttributes(this._element, "paddingRight", function(e) {
                    return e + t;
                }), this._setElementAttributes(di, "paddingRight", function(e) {
                    return e + t;
                }), this._setElementAttributes(ui, "marginRight", function(e) {
                    return e - t;
                });
            };
            _proto7._disableOverFlow = function _disableOverFlow() {
                this._saveInitialAttribute(this._element, "overflow"), this._element.style.overflow = "hidden";
            };
            _proto7._setElementAttributes = function _setElementAttributes(t, e, i) {
                var _this14 = this;
                var n = this.getWidth();
                this._applyManipulationCallback(t, function(t) {
                    if (t !== _this14._element && window.innerWidth > t.clientWidth + n) return;
                    _this14._saveInitialAttribute(t, e);
                    var s = window.getComputedStyle(t)[e];
                    t.style[e] = i(Number.parseFloat(s)) + "px";
                });
            };
            _proto7.reset = function reset() {
                this._resetElementAttributes(this._element, "overflow"), this._resetElementAttributes(this._element, "paddingRight"), this._resetElementAttributes(di, "paddingRight"), this._resetElementAttributes(ui, "marginRight");
            };
            _proto7._saveInitialAttribute = function _saveInitialAttribute(t, e) {
                var i = t.style[e];
                i && U.setDataAttribute(t, e, i);
            };
            _proto7._resetElementAttributes = function _resetElementAttributes(t, e) {
                this._applyManipulationCallback(t, function(t) {
                    var i = U.getDataAttribute(t, e);
                    void 0 === i ? t.style.removeProperty(e) : (U.removeDataAttribute(t, e), t.style[e] = i);
                });
            };
            _proto7._applyManipulationCallback = function _applyManipulationCallback(t, e) {
                o(t) ? e(t) : V.find(t, this._element).forEach(e);
            };
            _proto7.isOverflowing = function isOverflowing() {
                return this.getWidth() > 0;
            };
            return fi;
        }();
        var pi = {
                className: "modal-backdrop",
                isVisible: !0,
                isAnimated: !1,
                rootElement: "body",
                clickCallback: null
            },
            mi = {
                className: "string",
                isVisible: "boolean",
                isAnimated: "boolean",
                rootElement: "(element|string)",
                clickCallback: "(function|null)"
            },
            gi = "show",
            _i = "mousedown.bs.backdrop";
        var bi = /*#__PURE__*/ function() {
            function bi(t) {
                this._config = this._getConfig(t), this._isAppended = !1, this._element = null;
            }
            var _proto8 = bi.prototype;
            _proto8.show = function show(t) {
                this._config.isVisible ? (this._append(), this._config.isAnimated && u(this._getElement()), this._getElement().classList.add(gi), this._emulateAnimation(function() {
                    _(t);
                })) : _(t);
            };
            _proto8.hide = function hide(t) {
                var _this15 = this;
                this._config.isVisible ? (this._getElement().classList.remove(gi), this._emulateAnimation(function() {
                    _this15.dispose(), _(t);
                })) : _(t);
            };
            _proto8._getElement = function _getElement() {
                if (!this._element) {
                    var _t8 = document.createElement("div");
                    _t8.className = this._config.className, this._config.isAnimated && _t8.classList.add("fade"), this._element = _t8;
                }
                return this._element;
            };
            _proto8._getConfig = function _getConfig(t) {
                return (t = _extends({}, pi, "object" == typeof t ? t : {})).rootElement = r(t.rootElement), a("backdrop", t, mi), t;
            };
            _proto8._append = function _append() {
                var _this16 = this;
                this._isAppended || (this._config.rootElement.append(this._getElement()), j.on(this._getElement(), _i, function() {
                    _(_this16._config.clickCallback);
                }), this._isAppended = !0);
            };
            _proto8.dispose = function dispose() {
                this._isAppended && (j.off(this._element, _i), this._element.remove(), this._isAppended = !1);
            };
            _proto8._emulateAnimation = function _emulateAnimation(t) {
                b(t, this._getElement(), this._config.isAnimated);
            };
            return bi;
        }();
        var vi = {
                trapElement: null,
                autofocus: !0
            },
            yi = {
                trapElement: "element",
                autofocus: "boolean"
            },
            wi = ".bs.focustrap",
            Ei = "backward";
        var Ai = /*#__PURE__*/ function() {
            function Ai(t) {
                this._config = this._getConfig(t), this._isActive = !1, this._lastTabNavDirection = null;
            }
            var _proto9 = Ai.prototype;
            _proto9.activate = function activate() {
                var _this17 = this;
                var _this$_config = this._config,
                    t = _this$_config.trapElement,
                    e = _this$_config.autofocus;
                this._isActive || (e && t.focus(), j.off(document, wi), j.on(document, "focusin.bs.focustrap", function(t) {
                    return _this17._handleFocusin(t);
                }), j.on(document, "keydown.tab.bs.focustrap", function(t) {
                    return _this17._handleKeydown(t);
                }), this._isActive = !0);
            };
            _proto9.deactivate = function deactivate() {
                this._isActive && (this._isActive = !1, j.off(document, wi));
            };
            _proto9._handleFocusin = function _handleFocusin(t) {
                var e = t.target,
                    i = this._config.trapElement;
                if (e === document || e === i || i.contains(e)) return;
                var n = V.focusableChildren(i);
                0 === n.length ? i.focus() : this._lastTabNavDirection === Ei ? n[n.length - 1].focus() : n[0].focus();
            };
            _proto9._handleKeydown = function _handleKeydown(t) {
                "Tab" === t.key && (this._lastTabNavDirection = t.shiftKey ? Ei : "forward");
            };
            _proto9._getConfig = function _getConfig(t) {
                return t = _extends({}, vi, "object" == typeof t ? t : {}), a("focustrap", t, yi), t;
            };
            return Ai;
        }();
        var Ti = "modal",
            Oi = "Escape",
            Ci = {
                backdrop: !0,
                keyboard: !0,
                focus: !0
            },
            ki = {
                backdrop: "(boolean|string)",
                keyboard: "boolean",
                focus: "boolean"
            },
            Li = "hidden.bs.modal",
            xi = "show.bs.modal",
            Di = "resize.bs.modal",
            Si = "click.dismiss.bs.modal",
            Ni = "keydown.dismiss.bs.modal",
            Ii = "mousedown.dismiss.bs.modal",
            Pi = "modal-open",
            ji = "show",
            Mi = "modal-static";
        var Hi = /*#__PURE__*/ function(_B6) {
            _inheritsLoose(Hi, _B6);

            function Hi(t, e) {
                var _this18;
                _this18 = _B6.call(this, t) || this, _this18._config = _this18._getConfig(e), _this18._dialog = V.findOne(".modal-dialog", _this18._element), _this18._backdrop = _this18._initializeBackDrop(), _this18._focustrap = _this18._initializeFocusTrap(), _this18._isShown = !1, _this18._ignoreBackdropClick = !1, _this18._isTransitioning = !1, _this18._scrollBar = new fi();
                return _this18;
            }
            var _proto10 = Hi.prototype;
            _proto10.toggle = function toggle(t) {
                return this._isShown ? this.hide() : this.show(t);
            };
            _proto10.show = function show(t) {
                var _this19 = this;
                this._isShown || this._isTransitioning || j.trigger(this._element, xi, {
                    relatedTarget: t
                }).defaultPrevented || (this._isShown = !0, this._isAnimated() && (this._isTransitioning = !0), this._scrollBar.hide(), document.body.classList.add(Pi), this._adjustDialog(), this._setEscapeEvent(), this._setResizeEvent(), j.on(this._dialog, Ii, function() {
                    j.one(_this19._element, "mouseup.dismiss.bs.modal", function(t) {
                        t.target === _this19._element && (_this19._ignoreBackdropClick = !0);
                    });
                }), this._showBackdrop(function() {
                    return _this19._showElement(t);
                }));
            };
            _proto10.hide = function hide() {
                var _this20 = this;
                if (!this._isShown || this._isTransitioning) return;
                if (j.trigger(this._element, "hide.bs.modal").defaultPrevented) return;
                this._isShown = !1;
                var t = this._isAnimated();
                t && (this._isTransitioning = !0), this._setEscapeEvent(), this._setResizeEvent(), this._focustrap.deactivate(), this._element.classList.remove(ji), j.off(this._element, Si), j.off(this._dialog, Ii), this._queueCallback(function() {
                    return _this20._hideModal();
                }, this._element, t);
            };
            _proto10.dispose = function dispose() {
                [window, this._dialog].forEach(function(t) {
                    return j.off(t, ".bs.modal");
                }), this._backdrop.dispose(), this._focustrap.deactivate(), _B6.prototype.dispose.call(this);
            };
            _proto10.handleUpdate = function handleUpdate() {
                this._adjustDialog();
            };
            _proto10._initializeBackDrop = function _initializeBackDrop() {
                return new bi({
                    isVisible: Boolean(this._config.backdrop),
                    isAnimated: this._isAnimated()
                });
            };
            _proto10._initializeFocusTrap = function _initializeFocusTrap() {
                return new Ai({
                    trapElement: this._element
                });
            };
            _proto10._getConfig = function _getConfig(t) {
                return t = _extends({}, Ci, U.getDataAttributes(this._element), "object" == typeof t ? t : {}), a(Ti, t, ki), t;
            };
            _proto10._showElement = function _showElement(t) {
                var _this21 = this;
                var e = this._isAnimated(),
                    i = V.findOne(".modal-body", this._dialog);
                this._element.parentNode && this._element.parentNode.nodeType === Node.ELEMENT_NODE || document.body.append(this._element), this._element.style.display = "block", this._element.removeAttribute("aria-hidden"), this._element.setAttribute("aria-modal", !0), this._element.setAttribute("role", "dialog"), this._element.scrollTop = 0, i && (i.scrollTop = 0), e && u(this._element), this._element.classList.add(ji), this._queueCallback(function() {
                    _this21._config.focus && _this21._focustrap.activate(), _this21._isTransitioning = !1, j.trigger(_this21._element, "shown.bs.modal", {
                        relatedTarget: t
                    });
                }, this._dialog, e);
            };
            _proto10._setEscapeEvent = function _setEscapeEvent() {
                var _this22 = this;
                this._isShown ? j.on(this._element, Ni, function(t) {
                    _this22._config.keyboard && t.key === Oi ? (t.preventDefault(), _this22.hide()) : _this22._config.keyboard || t.key !== Oi || _this22._triggerBackdropTransition();
                }) : j.off(this._element, Ni);
            };
            _proto10._setResizeEvent = function _setResizeEvent() {
                var _this23 = this;
                this._isShown ? j.on(window, Di, function() {
                    return _this23._adjustDialog();
                }) : j.off(window, Di);
            };
            _proto10._hideModal = function _hideModal() {
                var _this24 = this;
                this._element.style.display = "none", this._element.setAttribute("aria-hidden", !0), this._element.removeAttribute("aria-modal"), this._element.removeAttribute("role"), this._isTransitioning = !1, this._backdrop.hide(function() {
                    document.body.classList.remove(Pi), _this24._resetAdjustments(), _this24._scrollBar.reset(), j.trigger(_this24._element, Li);
                });
            };
            _proto10._showBackdrop = function _showBackdrop(t) {
                var _this25 = this;
                j.on(this._element, Si, function(t) {
                    _this25._ignoreBackdropClick ? _this25._ignoreBackdropClick = !1 : t.target === t.currentTarget && (!0 === _this25._config.backdrop ? _this25.hide() : "static" === _this25._config.backdrop && _this25._triggerBackdropTransition());
                }), this._backdrop.show(t);
            };
            _proto10._isAnimated = function _isAnimated() {
                return this._element.classList.contains("fade");
            };
            _proto10._triggerBackdropTransition = function _triggerBackdropTransition() {
                var _this26 = this;
                if (j.trigger(this._element, "hidePrevented.bs.modal").defaultPrevented) return;
                var _this$_element = this._element,
                    t = _this$_element.classList,
                    e = _this$_element.scrollHeight,
                    i = _this$_element.style,
                    n = e > document.documentElement.clientHeight;
                !n && "hidden" === i.overflowY || t.contains(Mi) || (n || (i.overflowY = "hidden"), t.add(Mi), this._queueCallback(function() {
                    t.remove(Mi), n || _this26._queueCallback(function() {
                        i.overflowY = "";
                    }, _this26._dialog);
                }, this._dialog), this._element.focus());
            };
            _proto10._adjustDialog = function _adjustDialog() {
                var t = this._element.scrollHeight > document.documentElement.clientHeight,
                    e = this._scrollBar.getWidth(),
                    i = e > 0;
                (!i && t && !m() || i && !t && m()) && (this._element.style.paddingLeft = e + "px"), (i && !t && !m() || !i && t && m()) && (this._element.style.paddingRight = e + "px");
            };
            _proto10._resetAdjustments = function _resetAdjustments() {
                this._element.style.paddingLeft = "", this._element.style.paddingRight = "";
            };
            Hi.jQueryInterface = function jQueryInterface(t, e) {
                return this.each(function() {
                    var i = Hi.getOrCreateInstance(this, t);
                    if ("string" == typeof t) {
                        if (void 0 === i[t]) throw new TypeError("No method named \"" + t + "\"");
                        i[t](e);
                    }
                });
            };
            _createClass(Hi, null, [{
                key: "Default",
                get: function get() {
                    return Ci;
                }
            }, {
                key: "NAME",
                get: function get() {
                    return Ti;
                }
            }]);
            return Hi;
        }(B);
        j.on(document, "click.bs.modal.data-api", '[data-bs-toggle="modal"]', function(t) {
            var _this27 = this;
            var e = n(this);
            ["A", "AREA"].includes(this.tagName) && t.preventDefault(), j.one(e, xi, function(t) {
                t.defaultPrevented || j.one(e, Li, function() {
                    l(_this27) && _this27.focus();
                });
            });
            var i = V.findOne(".modal.show");
            i && Hi.getInstance(i).hide(), Hi.getOrCreateInstance(e).toggle(this);
        }), R(Hi), g(Hi);
        var Bi = "offcanvas",
            Ri = {
                backdrop: !0,
                keyboard: !0,
                scroll: !1
            },
            Wi = {
                backdrop: "boolean",
                keyboard: "boolean",
                scroll: "boolean"
            },
            $i = "show",
            zi = ".offcanvas.show",
            qi = "hidden.bs.offcanvas";
        var Fi = /*#__PURE__*/ function(_B7) {
            _inheritsLoose(Fi, _B7);

            function Fi(t, e) {
                var _this28;
                _this28 = _B7.call(this, t) || this, _this28._config = _this28._getConfig(e), _this28._isShown = !1, _this28._backdrop = _this28._initializeBackDrop(), _this28._focustrap = _this28._initializeFocusTrap(), _this28._addEventListeners();
                return _this28;
            }
            var _proto11 = Fi.prototype;
            _proto11.toggle = function toggle(t) {
                return this._isShown ? this.hide() : this.show(t);
            };
            _proto11.show = function show(t) {
                var _this29 = this;
                this._isShown || j.trigger(this._element, "show.bs.offcanvas", {
                    relatedTarget: t
                }).defaultPrevented || (this._isShown = !0, this._element.style.visibility = "visible", this._backdrop.show(), this._config.scroll || new fi().hide(), this._element.removeAttribute("aria-hidden"), this._element.setAttribute("aria-modal", !0), this._element.setAttribute("role", "dialog"), this._element.classList.add($i), this._queueCallback(function() {
                    _this29._config.scroll || _this29._focustrap.activate(), j.trigger(_this29._element, "shown.bs.offcanvas", {
                        relatedTarget: t
                    });
                }, this._element, !0));
            };
            _proto11.hide = function hide() {
                var _this30 = this;
                this._isShown && (j.trigger(this._element, "hide.bs.offcanvas").defaultPrevented || (this._focustrap.deactivate(), this._element.blur(), this._isShown = !1, this._element.classList.remove($i), this._backdrop.hide(), this._queueCallback(function() {
                    _this30._element.setAttribute("aria-hidden", !0), _this30._element.removeAttribute("aria-modal"), _this30._element.removeAttribute("role"), _this30._element.style.visibility = "hidden", _this30._config.scroll || new fi().reset(), j.trigger(_this30._element, qi);
                }, this._element, !0)));
            };
            _proto11.dispose = function dispose() {
                this._backdrop.dispose(), this._focustrap.deactivate(), _B7.prototype.dispose.call(this);
            };
            _proto11._getConfig = function _getConfig(t) {
                return t = _extends({}, Ri, U.getDataAttributes(this._element), "object" == typeof t ? t : {}), a(Bi, t, Wi), t;
            };
            _proto11._initializeBackDrop = function _initializeBackDrop() {
                var _this31 = this;
                return new bi({
                    className: "offcanvas-backdrop",
                    isVisible: this._config.backdrop,
                    isAnimated: !0,
                    rootElement: this._element.parentNode,
                    clickCallback: function clickCallback() {
                        return _this31.hide();
                    }
                });
            };
            _proto11._initializeFocusTrap = function _initializeFocusTrap() {
                return new Ai({
                    trapElement: this._element
                });
            };
            _proto11._addEventListeners = function _addEventListeners() {
                var _this32 = this;
                j.on(this._element, "keydown.dismiss.bs.offcanvas", function(t) {
                    _this32._config.keyboard && "Escape" === t.key && _this32.hide();
                });
            };
            Fi.jQueryInterface = function jQueryInterface(t) {
                return this.each(function() {
                    var e = Fi.getOrCreateInstance(this, t);
                    if ("string" == typeof t) {
                        if (void 0 === e[t] || t.startsWith("_") || "constructor" === t) throw new TypeError("No method named \"" + t + "\"");
                        e[t](this);
                    }
                });
            };
            _createClass(Fi, null, [{
                key: "NAME",
                get: function get() {
                    return Bi;
                }
            }, {
                key: "Default",
                get: function get() {
                    return Ri;
                }
            }]);
            return Fi;
        }(B);
        j.on(document, "click.bs.offcanvas.data-api", '[data-bs-toggle="offcanvas"]', function(t) {
            var _this33 = this;
            var e = n(this);
            if (["A", "AREA"].includes(this.tagName) && t.preventDefault(), c(this)) return;
            j.one(e, qi, function() {
                l(_this33) && _this33.focus();
            });
            var i = V.findOne(zi);
            i && i !== e && Fi.getInstance(i).hide(), Fi.getOrCreateInstance(e).toggle(this);
        }), j.on(window, "load.bs.offcanvas.data-api", function() {
            return V.find(zi).forEach(function(t) {
                return Fi.getOrCreateInstance(t).show();
            });
        }), R(Fi), g(Fi);
        var Ui = new Set(["background", "cite", "href", "itemtype", "longdesc", "poster", "src", "xlink:href"]),
            Vi = /^(?:(?:https?|mailto|ftp|tel|file|sms):|[^#&/:?]*(?:[#/?]|$))/i,
            Ki = /^data:(?:image\/(?:bmp|gif|jpeg|jpg|png|tiff|webp)|video\/(?:mpeg|mp4|ogg|webm)|audio\/(?:mp3|oga|ogg|opus));base64,[\d+/a-z]+=*$/i,
            Xi = function Xi(t, e) {
                var i = t.nodeName.toLowerCase();
                if (e.includes(i)) return !Ui.has(i) || Boolean(Vi.test(t.nodeValue) || Ki.test(t.nodeValue));
                var n = e.filter(function(t) {
                    return t instanceof RegExp;
                });
                for (var _t9 = 0, _e12 = n.length; _t9 < _e12; _t9++) {
                    if (n[_t9].test(i)) return !0;
                }
                return !1;
            };

        function Yi(t, e, i) {
            var _ref7;
            if (!t.length) return t;
            if (i && "function" == typeof i) return i(t);
            var n = new window.DOMParser().parseFromString(t, "text/html"),
                s = (_ref7 = []).concat.apply(_ref7, n.body.querySelectorAll("*"));
            var _loop = function _loop(_t10, _i9) {
                var _ref8;
                var i = s[_t10],
                    n = i.nodeName.toLowerCase();
                if (!Object.keys(e).includes(n)) {
                    i.remove();
                    return "continue";
                }
                var o = (_ref8 = []).concat.apply(_ref8, i.attributes),
                    r = [].concat(e["*"] || [], e[n] || []);
                o.forEach(function(t) {
                    Xi(t, r) || i.removeAttribute(t.nodeName);
                });
            };
            for (var _t10 = 0, _i9 = s.length; _t10 < _i9; _t10++) {
                var _ret = _loop(_t10);
                if (_ret === "continue") continue;
            }
            return n.body.innerHTML;
        }
        var Qi = "tooltip",
            Gi = new Set(["sanitize", "allowList", "sanitizeFn"]),
            Zi = {
                animation: "boolean",
                template: "string",
                title: "(string|element|function)",
                trigger: "string",
                delay: "(number|object)",
                html: "boolean",
                selector: "(string|boolean)",
                placement: "(string|function)",
                offset: "(array|string|function)",
                container: "(string|element|boolean)",
                fallbackPlacements: "array",
                boundary: "(string|element)",
                customClass: "(string|function)",
                sanitize: "boolean",
                sanitizeFn: "(null|function)",
                allowList: "object",
                popperConfig: "(null|object|function)"
            },
            Ji = {
                AUTO: "auto",
                TOP: "top",
                RIGHT: m() ? "left" : "right",
                BOTTOM: "bottom",
                LEFT: m() ? "right" : "left"
            },
            tn = {
                animation: !0,
                template: '<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',
                trigger: "hover focus",
                title: "",
                delay: 0,
                html: !1,
                selector: !1,
                placement: "top",
                offset: [0, 0],
                container: !1,
                fallbackPlacements: ["top", "right", "bottom", "left"],
                boundary: "clippingParents",
                customClass: "",
                sanitize: !0,
                sanitizeFn: null,
                allowList: {
                    "*": ["class", "dir", "id", "lang", "role", /^aria-[\w-]*$/i],
                    a: ["target", "href", "title", "rel"],
                    area: [],
                    b: [],
                    br: [],
                    col: [],
                    code: [],
                    div: [],
                    em: [],
                    hr: [],
                    h1: [],
                    h2: [],
                    h3: [],
                    h4: [],
                    h5: [],
                    h6: [],
                    i: [],
                    img: ["src", "srcset", "alt", "title", "width", "height"],
                    li: [],
                    ol: [],
                    p: [],
                    pre: [],
                    s: [],
                    small: [],
                    span: [],
                    sub: [],
                    sup: [],
                    strong: [],
                    u: [],
                    ul: []
                },
                popperConfig: null
            },
            en = {
                HIDE: "hide.bs.tooltip",
                HIDDEN: "hidden.bs.tooltip",
                SHOW: "show.bs.tooltip",
                SHOWN: "shown.bs.tooltip",
                INSERTED: "inserted.bs.tooltip",
                CLICK: "click.bs.tooltip",
                FOCUSIN: "focusin.bs.tooltip",
                FOCUSOUT: "focusout.bs.tooltip",
                MOUSEENTER: "mouseenter.bs.tooltip",
                MOUSELEAVE: "mouseleave.bs.tooltip"
            },
            nn = "fade",
            sn = "show",
            on = "show",
            rn = "out",
            an = ".tooltip-inner",
            ln = ".modal",
            cn = "hide.bs.modal",
            hn = "hover",
            dn = "focus";
        var un = /*#__PURE__*/ function(_B8) {
            _inheritsLoose(un, _B8);

            function un(t, e) {
                var _this34;
                if (void 0 === Fe) throw new TypeError("Bootstrap's tooltips require Popper (https://popper.js.org)");
                _this34 = _B8.call(this, t) || this, _this34._isEnabled = !0, _this34._timeout = 0, _this34._hoverState = "", _this34._activeTrigger = {}, _this34._popper = null, _this34._config = _this34._getConfig(e), _this34.tip = null, _this34._setListeners();
                return _this34;
            }
            var _proto12 = un.prototype;
            _proto12.enable = function enable() {
                this._isEnabled = !0;
            };
            _proto12.disable = function disable() {
                this._isEnabled = !1;
            };
            _proto12.toggleEnabled = function toggleEnabled() {
                this._isEnabled = !this._isEnabled;
            };
            _proto12.toggle = function toggle(t) {
                if (this._isEnabled)
                    if (t) {
                        var _e13 = this._initializeOnDelegatedTarget(t);
                        _e13._activeTrigger.click = !_e13._activeTrigger.click, _e13._isWithActiveTrigger() ? _e13._enter(null, _e13) : _e13._leave(null, _e13);
                    } else {
                        if (this.getTipElement().classList.contains(sn)) return void this._leave(null, this);
                        this._enter(null, this);
                    }
            };
            _proto12.dispose = function dispose() {
                clearTimeout(this._timeout), j.off(this._element.closest(ln), cn, this._hideModalHandler), this.tip && this.tip.remove(), this._disposePopper(), _B8.prototype.dispose.call(this);
            };
            _proto12.show = function show() {
                var _n$classList,
                    _ref9,
                    _this35 = this;
                if ("none" === this._element.style.display) throw new Error("Please use show on visible elements");
                if (!this.isWithContent() || !this._isEnabled) return;
                var t = j.trigger(this._element, this.constructor.Event.SHOW),
                    e = h(this._element),
                    i = null === e ? this._element.ownerDocument.documentElement.contains(this._element) : e.contains(this._element);
                if (t.defaultPrevented || !i) return;
                "tooltip" === this.constructor.NAME && this.tip && this.getTitle() !== this.tip.querySelector(an).innerHTML && (this._disposePopper(), this.tip.remove(), this.tip = null);
                var n = this.getTipElement(),
                    s = function(t) {
                        do {
                            t += Math.floor(1e6 * Math.random());
                        } while (document.getElementById(t));
                        return t;
                    }(this.constructor.NAME);
                n.setAttribute("id", s), this._element.setAttribute("aria-describedby", s), this._config.animation && n.classList.add(nn);
                var o = "function" == typeof this._config.placement ? this._config.placement.call(this, n, this._element) : this._config.placement,
                    r = this._getAttachment(o);
                this._addAttachmentClass(r);
                var a = this._config.container;
                H.set(n, this.constructor.DATA_KEY, this), this._element.ownerDocument.documentElement.contains(this.tip) || (a.append(n), j.trigger(this._element, this.constructor.Event.INSERTED)), this._popper ? this._popper.update() : this._popper = qe(this._element, n, this._getPopperConfig(r)), n.classList.add(sn);
                var l = this._resolvePossibleFunction(this._config.customClass);
                l && (_n$classList = n.classList).add.apply(_n$classList, l.split(" ")), "ontouchstart" in document.documentElement && (_ref9 = []).concat.apply(_ref9, document.body.children).forEach(function(t) {
                    j.on(t, "mouseover", d);
                });
                var c = this.tip.classList.contains(nn);
                this._queueCallback(function() {
                    var t = _this35._hoverState;
                    _this35._hoverState = null, j.trigger(_this35._element, _this35.constructor.Event.SHOWN), t === rn && _this35._leave(null, _this35);
                }, this.tip, c);
            };
            _proto12.hide = function hide() {
                var _ref10,
                    _this36 = this;
                if (!this._popper) return;
                var t = this.getTipElement();
                if (j.trigger(this._element, this.constructor.Event.HIDE).defaultPrevented) return;
                t.classList.remove(sn), "ontouchstart" in document.documentElement && (_ref10 = []).concat.apply(_ref10, document.body.children).forEach(function(t) {
                    return j.off(t, "mouseover", d);
                }), this._activeTrigger.click = !1, this._activeTrigger.focus = !1, this._activeTrigger.hover = !1;
                var e = this.tip.classList.contains(nn);
                this._queueCallback(function() {
                    _this36._isWithActiveTrigger() || (_this36._hoverState !== on && t.remove(), _this36._cleanTipClass(), _this36._element.removeAttribute("aria-describedby"), j.trigger(_this36._element, _this36.constructor.Event.HIDDEN), _this36._disposePopper());
                }, this.tip, e), this._hoverState = "";
            };
            _proto12.update = function update() {
                null !== this._popper && this._popper.update();
            };
            _proto12.isWithContent = function isWithContent() {
                return Boolean(this.getTitle());
            };
            _proto12.getTipElement = function getTipElement() {
                if (this.tip) return this.tip;
                var t = document.createElement("div");
                t.innerHTML = this._config.template;
                var e = t.children[0];
                return this.setContent(e), e.classList.remove(nn, sn), this.tip = e, this.tip;
            };
            _proto12.setContent = function setContent(t) {
                this._sanitizeAndSetContent(t, this.getTitle(), an);
            };
            _proto12._sanitizeAndSetContent = function _sanitizeAndSetContent(t, e, i) {
                var n = V.findOne(i, t);
                e || !n ? this.setElementContent(n, e) : n.remove();
            };
            _proto12.setElementContent = function setElementContent(t, e) {
                if (null !== t) return o(e) ? (e = r(e), void(this._config.html ? e.parentNode !== t && (t.innerHTML = "", t.append(e)) : t.textContent = e.textContent)) : void(this._config.html ? (this._config.sanitize && (e = Yi(e, this._config.allowList, this._config.sanitizeFn)), t.innerHTML = e) : t.textContent = e);
            };
            _proto12.getTitle = function getTitle() {
                var t = this._element.getAttribute("data-bs-original-title") || this._config.title;
                return this._resolvePossibleFunction(t);
            };
            _proto12.updateAttachment = function updateAttachment(t) {
                return "right" === t ? "end" : "left" === t ? "start" : t;
            };
            _proto12._initializeOnDelegatedTarget = function _initializeOnDelegatedTarget(t, e) {
                return e || this.constructor.getOrCreateInstance(t.delegateTarget, this._getDelegateConfig());
            };
            _proto12._getOffset = function _getOffset() {
                var _this37 = this;
                var t = this._config.offset;
                return "string" == typeof t ? t.split(",").map(function(t) {
                    return Number.parseInt(t, 10);
                }) : "function" == typeof t ? function(e) {
                    return t(e, _this37._element);
                } : t;
            };
            _proto12._resolvePossibleFunction = function _resolvePossibleFunction(t) {
                return "function" == typeof t ? t.call(this._element) : t;
            };
            _proto12._getPopperConfig = function _getPopperConfig(t) {
                var _this38 = this;
                var e = {
                    placement: t,
                    modifiers: [{
                        name: "flip",
                        options: {
                            fallbackPlacements: this._config.fallbackPlacements
                        }
                    }, {
                        name: "offset",
                        options: {
                            offset: this._getOffset()
                        }
                    }, {
                        name: "preventOverflow",
                        options: {
                            boundary: this._config.boundary
                        }
                    }, {
                        name: "arrow",
                        options: {
                            element: "." + this.constructor.NAME + "-arrow"
                        }
                    }, {
                        name: "onChange",
                        enabled: !0,
                        phase: "afterWrite",
                        fn: function fn(t) {
                            return _this38._handlePopperPlacementChange(t);
                        }
                    }],
                    onFirstUpdate: function onFirstUpdate(t) {
                        t.options.placement !== t.placement && _this38._handlePopperPlacementChange(t);
                    }
                };
                return _extends({}, e, "function" == typeof this._config.popperConfig ? this._config.popperConfig(e) : this._config.popperConfig);
            };
            _proto12._addAttachmentClass = function _addAttachmentClass(t) {
                this.getTipElement().classList.add(this._getBasicClassPrefix() + "-" + this.updateAttachment(t));
            };
            _proto12._getAttachment = function _getAttachment(t) {
                return Ji[t.toUpperCase()];
            };
            _proto12._setListeners = function _setListeners() {
                var _this39 = this;
                this._config.trigger.split(" ").forEach(function(t) {
                    if ("click" === t) j.on(_this39._element, _this39.constructor.Event.CLICK, _this39._config.selector, function(t) {
                        return _this39.toggle(t);
                    });
                    else if ("manual" !== t) {
                        var _e14 = t === hn ? _this39.constructor.Event.MOUSEENTER : _this39.constructor.Event.FOCUSIN,
                            _i10 = t === hn ? _this39.constructor.Event.MOUSELEAVE : _this39.constructor.Event.FOCUSOUT;
                        j.on(_this39._element, _e14, _this39._config.selector, function(t) {
                            return _this39._enter(t);
                        }), j.on(_this39._element, _i10, _this39._config.selector, function(t) {
                            return _this39._leave(t);
                        });
                    }
                }), this._hideModalHandler = function() {
                    _this39._element && _this39.hide();
                }, j.on(this._element.closest(ln), cn, this._hideModalHandler), this._config.selector ? this._config = _extends({}, this._config, {
                    trigger: "manual",
                    selector: ""
                }) : this._fixTitle();
            };
            _proto12._fixTitle = function _fixTitle() {
                var t = this._element.getAttribute("title"),
                    e = typeof this._element.getAttribute("data-bs-original-title");
                (t || "string" !== e) && (this._element.setAttribute("data-bs-original-title", t || ""), !t || this._element.getAttribute("aria-label") || this._element.textContent || this._element.setAttribute("aria-label", t), this._element.setAttribute("title", ""));
            };
            _proto12._enter = function _enter(t, e) {
                e = this._initializeOnDelegatedTarget(t, e), t && (e._activeTrigger["focusin" === t.type ? dn : hn] = !0), e.getTipElement().classList.contains(sn) || e._hoverState === on ? e._hoverState = on : (clearTimeout(e._timeout), e._hoverState = on, e._config.delay && e._config.delay.show ? e._timeout = setTimeout(function() {
                    e._hoverState === on && e.show();
                }, e._config.delay.show) : e.show());
            };
            _proto12._leave = function _leave(t, e) {
                e = this._initializeOnDelegatedTarget(t, e), t && (e._activeTrigger["focusout" === t.type ? dn : hn] = e._element.contains(t.relatedTarget)), e._isWithActiveTrigger() || (clearTimeout(e._timeout), e._hoverState = rn, e._config.delay && e._config.delay.hide ? e._timeout = setTimeout(function() {
                    e._hoverState === rn && e.hide();
                }, e._config.delay.hide) : e.hide());
            };
            _proto12._isWithActiveTrigger = function _isWithActiveTrigger() {
                for (var _t11 in this._activeTrigger) {
                    if (this._activeTrigger[_t11]) return !0;
                }
                return !1;
            };
            _proto12._getConfig = function _getConfig(t) {
                var e = U.getDataAttributes(this._element);
                return Object.keys(e).forEach(function(t) {
                    Gi.has(t) && delete e[t];
                }), (t = _extends({}, this.constructor.Default, e, "object" == typeof t && t ? t : {})).container = !1 === t.container ? document.body : r(t.container), "number" == typeof t.delay && (t.delay = {
                    show: t.delay,
                    hide: t.delay
                }), "number" == typeof t.title && (t.title = t.title.toString()), "number" == typeof t.content && (t.content = t.content.toString()), a(Qi, t, this.constructor.DefaultType), t.sanitize && (t.template = Yi(t.template, t.allowList, t.sanitizeFn)), t;
            };
            _proto12._getDelegateConfig = function _getDelegateConfig() {
                var t = {};
                for (var _e15 in this._config) {
                    this.constructor.Default[_e15] !== this._config[_e15] && (t[_e15] = this._config[_e15]);
                }
                return t;
            };
            _proto12._cleanTipClass = function _cleanTipClass() {
                var t = this.getTipElement(),
                    e = new RegExp("(^|\\s)" + this._getBasicClassPrefix() + "\\S+", "g"),
                    i = t.getAttribute("class").match(e);
                null !== i && i.length > 0 && i.map(function(t) {
                    return t.trim();
                }).forEach(function(e) {
                    return t.classList.remove(e);
                });
            };
            _proto12._getBasicClassPrefix = function _getBasicClassPrefix() {
                return "bs-tooltip";
            };
            _proto12._handlePopperPlacementChange = function _handlePopperPlacementChange(t) {
                var e = t.state;
                e && (this.tip = e.elements.popper, this._cleanTipClass(), this._addAttachmentClass(this._getAttachment(e.placement)));
            };
            _proto12._disposePopper = function _disposePopper() {
                this._popper && (this._popper.destroy(), this._popper = null);
            };
            un.jQueryInterface = function jQueryInterface(t) {
                return this.each(function() {
                    var e = un.getOrCreateInstance(this, t);
                    if ("string" == typeof t) {
                        if (void 0 === e[t]) throw new TypeError("No method named \"" + t + "\"");
                        e[t]();
                    }
                });
            };
            _createClass(un, null, [{
                key: "Default",
                get: function get() {
                    return tn;
                }
            }, {
                key: "NAME",
                get: function get() {
                    return Qi;
                }
            }, {
                key: "Event",
                get: function get() {
                    return en;
                }
            }, {
                key: "DefaultType",
                get: function get() {
                    return Zi;
                }
            }]);
            return un;
        }(B);
        g(un);
        var fn = _extends({}, un.Default, {
                placement: "right",
                offset: [0, 8],
                trigger: "click",
                content: "",
                template: '<div class="popover" role="tooltip"><div class="popover-arrow"></div><h3 class="popover-header"></h3><div class="popover-body"></div></div>'
            }),
            pn = _extends({}, un.DefaultType, {
                content: "(string|element|function)"
            }),
            mn = {
                HIDE: "hide.bs.popover",
                HIDDEN: "hidden.bs.popover",
                SHOW: "show.bs.popover",
                SHOWN: "shown.bs.popover",
                INSERTED: "inserted.bs.popover",
                CLICK: "click.bs.popover",
                FOCUSIN: "focusin.bs.popover",
                FOCUSOUT: "focusout.bs.popover",
                MOUSEENTER: "mouseenter.bs.popover",
                MOUSELEAVE: "mouseleave.bs.popover"
            };
        var gn = /*#__PURE__*/ function(_un) {
            _inheritsLoose(gn, _un);

            function gn() {
                return _un.apply(this, arguments) || this;
            }
            var _proto13 = gn.prototype;
            _proto13.isWithContent = function isWithContent() {
                return this.getTitle() || this._getContent();
            };
            _proto13.setContent = function setContent(t) {
                this._sanitizeAndSetContent(t, this.getTitle(), ".popover-header"), this._sanitizeAndSetContent(t, this._getContent(), ".popover-body");
            };
            _proto13._getContent = function _getContent() {
                return this._resolvePossibleFunction(this._config.content);
            };
            _proto13._getBasicClassPrefix = function _getBasicClassPrefix() {
                return "bs-popover";
            };
            gn.jQueryInterface = function jQueryInterface(t) {
                return this.each(function() {
                    var e = gn.getOrCreateInstance(this, t);
                    if ("string" == typeof t) {
                        if (void 0 === e[t]) throw new TypeError("No method named \"" + t + "\"");
                        e[t]();
                    }
                });
            };
            _createClass(gn, null, [{
                key: "Default",
                get: function get() {
                    return fn;
                }
            }, {
                key: "NAME",
                get: function get() {
                    return "popover";
                }
            }, {
                key: "Event",
                get: function get() {
                    return mn;
                }
            }, {
                key: "DefaultType",
                get: function get() {
                    return pn;
                }
            }]);
            return gn;
        }(un);
        g(gn);
        var _n = "scrollspy",
            bn = {
                offset: 10,
                method: "auto",
                target: ""
            },
            vn = {
                offset: "number",
                method: "string",
                target: "(string|element)"
            },
            yn = "active",
            wn = ".nav-link, .list-group-item, .dropdown-item",
            En = "position";
        var An = /*#__PURE__*/ function(_B9) {
            _inheritsLoose(An, _B9);

            function An(t, e) {
                var _this40;
                _this40 = _B9.call(this, t) || this, _this40._scrollElement = "BODY" === _this40._element.tagName ? window : _this40._element, _this40._config = _this40._getConfig(e), _this40._offsets = [], _this40._targets = [], _this40._activeTarget = null, _this40._scrollHeight = 0, j.on(_this40._scrollElement, "scroll.bs.scrollspy", function() {
                    return _this40._process();
                }), _this40.refresh(), _this40._process();
                return _this40;
            }
            var _proto14 = An.prototype;
            _proto14.refresh = function refresh() {
                var _this41 = this;
                var t = this._scrollElement === this._scrollElement.window ? "offset" : En,
                    e = "auto" === this._config.method ? t : this._config.method,
                    n = e === En ? this._getScrollTop() : 0;
                this._offsets = [], this._targets = [], this._scrollHeight = this._getScrollHeight(), V.find(wn, this._config.target).map(function(t) {
                    var s = i(t),
                        o = s ? V.findOne(s) : null;
                    if (o) {
                        var _t12 = o.getBoundingClientRect();
                        if (_t12.width || _t12.height) return [U[e](o).top + n, s];
                    }
                    return null;
                }).filter(function(t) {
                    return t;
                }).sort(function(t, e) {
                    return t[0] - e[0];
                }).forEach(function(t) {
                    _this41._offsets.push(t[0]), _this41._targets.push(t[1]);
                });
            };
            _proto14.dispose = function dispose() {
                j.off(this._scrollElement, ".bs.scrollspy"), _B9.prototype.dispose.call(this);
            };
            _proto14._getConfig = function _getConfig(t) {
                return (t = _extends({}, bn, U.getDataAttributes(this._element), "object" == typeof t && t ? t : {})).target = r(t.target) || document.documentElement, a(_n, t, vn), t;
            };
            _proto14._getScrollTop = function _getScrollTop() {
                return this._scrollElement === window ? this._scrollElement.pageYOffset : this._scrollElement.scrollTop;
            };
            _proto14._getScrollHeight = function _getScrollHeight() {
                return this._scrollElement.scrollHeight || Math.max(document.body.scrollHeight, document.documentElement.scrollHeight);
            };
            _proto14._getOffsetHeight = function _getOffsetHeight() {
                return this._scrollElement === window ? window.innerHeight : this._scrollElement.getBoundingClientRect().height;
            };
            _proto14._process = function _process() {
                var t = this._getScrollTop() + this._config.offset,
                    e = this._getScrollHeight(),
                    i = this._config.offset + e - this._getOffsetHeight();
                if (this._scrollHeight !== e && this.refresh(), t >= i) {
                    var _t13 = this._targets[this._targets.length - 1];
                    this._activeTarget !== _t13 && this._activate(_t13);
                } else {
                    if (this._activeTarget && t < this._offsets[0] && this._offsets[0] > 0) return this._activeTarget = null, void this._clear();
                    for (var _e16 = this._offsets.length; _e16--;) {
                        this._activeTarget !== this._targets[_e16] && t >= this._offsets[_e16] && (void 0 === this._offsets[_e16 + 1] || t < this._offsets[_e16 + 1]) && this._activate(this._targets[_e16]);
                    }
                }
            };
            _proto14._activate = function _activate(t) {
                this._activeTarget = t, this._clear();
                var e = wn.split(",").map(function(e) {
                        return e + "[data-bs-target=\"" + t + "\"]," + e + "[href=\"" + t + "\"]";
                    }),
                    i = V.findOne(e.join(","), this._config.target);
                i.classList.add(yn), i.classList.contains("dropdown-item") ? V.findOne(".dropdown-toggle", i.closest(".dropdown")).classList.add(yn) : V.parents(i, ".nav, .list-group").forEach(function(t) {
                    V.prev(t, ".nav-link, .list-group-item").forEach(function(t) {
                        return t.classList.add(yn);
                    }), V.prev(t, ".nav-item").forEach(function(t) {
                        V.children(t, ".nav-link").forEach(function(t) {
                            return t.classList.add(yn);
                        });
                    });
                }), j.trigger(this._scrollElement, "activate.bs.scrollspy", {
                    relatedTarget: t
                });
            };
            _proto14._clear = function _clear() {
                V.find(wn, this._config.target).filter(function(t) {
                    return t.classList.contains(yn);
                }).forEach(function(t) {
                    return t.classList.remove(yn);
                });
            };
            An.jQueryInterface = function jQueryInterface(t) {
                return this.each(function() {
                    var e = An.getOrCreateInstance(this, t);
                    if ("string" == typeof t) {
                        if (void 0 === e[t]) throw new TypeError("No method named \"" + t + "\"");
                        e[t]();
                    }
                });
            };
            _createClass(An, null, [{
                key: "Default",
                get: function get() {
                    return bn;
                }
            }, {
                key: "NAME",
                get: function get() {
                    return _n;
                }
            }]);
            return An;
        }(B);
        j.on(window, "load.bs.scrollspy.data-api", function() {
            V.find('[data-bs-spy="scroll"]').forEach(function(t) {
                return new An(t);
            });
        }), g(An);
        var Tn = "active",
            On = "fade",
            Cn = "show",
            kn = ".active",
            Ln = ":scope > li > .active";
        var xn = /*#__PURE__*/ function(_B10) {
            _inheritsLoose(xn, _B10);

            function xn() {
                return _B10.apply(this, arguments) || this;
            }
            var _proto15 = xn.prototype;
            _proto15.show = function show() {
                var _this42 = this;
                if (this._element.parentNode && this._element.parentNode.nodeType === Node.ELEMENT_NODE && this._element.classList.contains(Tn)) return;
                var t;
                var e = n(this._element),
                    i = this._element.closest(".nav, .list-group");
                if (i) {
                    var _e17 = "UL" === i.nodeName || "OL" === i.nodeName ? Ln : kn;
                    t = V.find(_e17, i), t = t[t.length - 1];
                }
                var s = t ? j.trigger(t, "hide.bs.tab", {
                    relatedTarget: this._element
                }) : null;
                if (j.trigger(this._element, "show.bs.tab", {
                        relatedTarget: t
                    }).defaultPrevented || null !== s && s.defaultPrevented) return;
                this._activate(this._element, i);
                var o = function o() {
                    j.trigger(t, "hidden.bs.tab", {
                        relatedTarget: _this42._element
                    }), j.trigger(_this42._element, "shown.bs.tab", {
                        relatedTarget: t
                    });
                };
                e ? this._activate(e, e.parentNode, o) : o();
            };
            _proto15._activate = function _activate(t, e, i) {
                var _this43 = this;
                var n = (!e || "UL" !== e.nodeName && "OL" !== e.nodeName ? V.children(e, kn) : V.find(Ln, e))[0],
                    s = i && n && n.classList.contains(On),
                    o = function o() {
                        return _this43._transitionComplete(t, n, i);
                    };
                n && s ? (n.classList.remove(Cn), this._queueCallback(o, t, !0)) : o();
            };
            _proto15._transitionComplete = function _transitionComplete(t, e, i) {
                if (e) {
                    e.classList.remove(Tn);
                    var _t14 = V.findOne(":scope > .dropdown-menu .active", e.parentNode);
                    _t14 && _t14.classList.remove(Tn), "tab" === e.getAttribute("role") && e.setAttribute("aria-selected", !1);
                }
                t.classList.add(Tn), "tab" === t.getAttribute("role") && t.setAttribute("aria-selected", !0), u(t), t.classList.contains(On) && t.classList.add(Cn);
                var n = t.parentNode;
                if (n && "LI" === n.nodeName && (n = n.parentNode), n && n.classList.contains("dropdown-menu")) {
                    var _e18 = t.closest(".dropdown");
                    _e18 && V.find(".dropdown-toggle", _e18).forEach(function(t) {
                        return t.classList.add(Tn);
                    }), t.setAttribute("aria-expanded", !0);
                }
                i && i();
            };
            xn.jQueryInterface = function jQueryInterface(t) {
                return this.each(function() {
                    var e = xn.getOrCreateInstance(this);
                    if ("string" == typeof t) {
                        if (void 0 === e[t]) throw new TypeError("No method named \"" + t + "\"");
                        e[t]();
                    }
                });
            };
            _createClass(xn, null, [{
                key: "NAME",
                get: function get() {
                    return "tab";
                }
            }]);
            return xn;
        }(B);
        j.on(document, "click.bs.tab.data-api", '[data-bs-toggle="tab"], [data-bs-toggle="pill"], [data-bs-toggle="list"]', function(t) {
            ["A", "AREA"].includes(this.tagName) && t.preventDefault(), c(this) || xn.getOrCreateInstance(this).show();
        }), g(xn);
        var Dn = "toast",
            Sn = "hide",
            Nn = "show",
            In = "showing",
            Pn = {
                animation: "boolean",
                autohide: "boolean",
                delay: "number"
            },
            jn = {
                animation: !0,
                autohide: !0,
                delay: 5e3
            };
        var Mn = /*#__PURE__*/ function(_B11) {
            _inheritsLoose(Mn, _B11);

            function Mn(t, e) {
                var _this44;
                _this44 = _B11.call(this, t) || this, _this44._config = _this44._getConfig(e), _this44._timeout = null, _this44._hasMouseInteraction = !1, _this44._hasKeyboardInteraction = !1, _this44._setListeners();
                return _this44;
            }
            var _proto16 = Mn.prototype;
            _proto16.show = function show() {
                var _this45 = this;
                j.trigger(this._element, "show.bs.toast").defaultPrevented || (this._clearTimeout(), this._config.animation && this._element.classList.add("fade"), this._element.classList.remove(Sn), u(this._element), this._element.classList.add(Nn), this._element.classList.add(In), this._queueCallback(function() {
                    _this45._element.classList.remove(In), j.trigger(_this45._element, "shown.bs.toast"), _this45._maybeScheduleHide();
                }, this._element, this._config.animation));
            };
            _proto16.hide = function hide() {
                var _this46 = this;
                this._element.classList.contains(Nn) && (j.trigger(this._element, "hide.bs.toast").defaultPrevented || (this._element.classList.add(In), this._queueCallback(function() {
                    _this46._element.classList.add(Sn), _this46._element.classList.remove(In), _this46._element.classList.remove(Nn), j.trigger(_this46._element, "hidden.bs.toast");
                }, this._element, this._config.animation)));
            };
            _proto16.dispose = function dispose() {
                this._clearTimeout(), this._element.classList.contains(Nn) && this._element.classList.remove(Nn), _B11.prototype.dispose.call(this);
            };
            _proto16._getConfig = function _getConfig(t) {
                return t = _extends({}, jn, U.getDataAttributes(this._element), "object" == typeof t && t ? t : {}), a(Dn, t, this.constructor.DefaultType), t;
            };
            _proto16._maybeScheduleHide = function _maybeScheduleHide() {
                var _this47 = this;
                this._config.autohide && (this._hasMouseInteraction || this._hasKeyboardInteraction || (this._timeout = setTimeout(function() {
                    _this47.hide();
                }, this._config.delay)));
            };
            _proto16._onInteraction = function _onInteraction(t, e) {
                switch (t.type) {
                    case "mouseover":
                    case "mouseout":
                        this._hasMouseInteraction = e;
                        break;
                    case "focusin":
                    case "focusout":
                        this._hasKeyboardInteraction = e;
                }
                if (e) return void this._clearTimeout();
                var i = t.relatedTarget;
                this._element === i || this._element.contains(i) || this._maybeScheduleHide();
            };
            _proto16._setListeners = function _setListeners() {
                var _this48 = this;
                j.on(this._element, "mouseover.bs.toast", function(t) {
                    return _this48._onInteraction(t, !0);
                }), j.on(this._element, "mouseout.bs.toast", function(t) {
                    return _this48._onInteraction(t, !1);
                }), j.on(this._element, "focusin.bs.toast", function(t) {
                    return _this48._onInteraction(t, !0);
                }), j.on(this._element, "focusout.bs.toast", function(t) {
                    return _this48._onInteraction(t, !1);
                });
            };
            _proto16._clearTimeout = function _clearTimeout() {
                clearTimeout(this._timeout), this._timeout = null;
            };
            Mn.jQueryInterface = function jQueryInterface(t) {
                return this.each(function() {
                    var e = Mn.getOrCreateInstance(this, t);
                    if ("string" == typeof t) {
                        if (void 0 === e[t]) throw new TypeError("No method named \"" + t + "\"");
                        e[t](this);
                    }
                });
            };
            _createClass(Mn, null, [{
                key: "DefaultType",
                get: function get() {
                    return Pn;
                }
            }, {
                key: "Default",
                get: function get() {
                    return jn;
                }
            }, {
                key: "NAME",
                get: function get() {
                    return Dn;
                }
            }]);
            return Mn;
        }(B);
        return R(Mn), g(Mn), {
            Alert: W,
            Button: z,
            Carousel: st,
            Collapse: pt,
            Dropdown: hi,
            Modal: Hi,
            Offcanvas: Fi,
            Popover: gn,
            ScrollSpy: An,
            Tab: xn,
            Toast: Mn,
            Tooltip: un
        };
    });
    /*!
     * Start Bootstrap - Clean Blog v6.0.8 (https://startbootstrap.com/theme/clean-blog)
     * Copyright 2013-2022 Start Bootstrap
     * Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-clean-blog/blob/master/LICENSE)
     */
    window.addEventListener('DOMContentLoaded', () => {
        let scrollPos = 0;
        const mainNav = document.getElementById('mainNav');
        const headerHeight = mainNav.clientHeight;
        window.addEventListener('scroll', function() {
            const currentTop = document.body.getBoundingClientRect().top * -1;
            if (currentTop < scrollPos) {
                // Scrolling Up
                if (currentTop > 0 && mainNav.classList.contains('is-fixed')) {
                    mainNav.classList.add('is-visible');
                } else {
                    console.log(123);
                    mainNav.classList.remove('is-visible', 'is-fixed');
                }
            } else {
                // Scrolling Down
                mainNav.classList.remove(['is-visible']);
                if (currentTop > headerHeight && !mainNav.classList.contains('is-fixed')) {
                    mainNav.classList.add('is-fixed');
                }
            }
            scrollPos = currentTop;
        });
    });
})();