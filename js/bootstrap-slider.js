/*! =======================================================
                      VERSION  4.0.2              
========================================================= */
/*! =========================================================
 * bootstrap-slider.js
 *
 * Maintainers: 
 *    	Kyle Kemp 
 *			- Twitter: @seiyria
 *			- Github:  seiyria
 *		Rohit Kalkur
 *			- Twitter: @Rovolutionary
 *			- Github:  rovolution
 *
 * =========================================================
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * ========================================================= */
! function(a) {
    ! function(a) {
        "use strict";

        function b() {}

        function c(a) {
            function c(b) {
                b.prototype.option || (b.prototype.option = function(b) {
                    a.isPlainObject(b) && (this.options = a.extend(!0, this.options, b))
                })
            }

            function e(b, c) {
                a.fn[b] = function(e) {
                    if ("string" == typeof e) {
                        for (var g = d.call(arguments, 1), h = 0, i = this.length; i > h; h++) {
                            var j = this[h],
                                k = a.data(j, b);
                            if (k)
                                if (a.isFunction(k[e]) && "_" !== e.charAt(0)) {
                                    var l = k[e].apply(k, g);
                                    if (void 0 !== l && l !== k) return l
                                } else f("no such method '" + e + "' for " + b + " instance");
                            else f("cannot call methods on " + b + " prior to initialization; attempted to call '" + e + "'")
                        }
                        return this
                    }
                    var m = this.map(function() {
                        var d = a.data(this, b);
                        return d ? (d.option(e), d._init()) : (d = new c(this, e), a.data(this, b, d)), a(this)
                    });
                    return !m || m.length > 1 ? m : m[0]
                }
            }
            if (a) {
                var f = "undefined" == typeof console ? b : function(a) {
                    console.error(a)
                };
                return a.bridget = function(a, b) {
                    c(b), e(a, b)
                }, a.bridget
            }
        }
        var d = Array.prototype.slice;
        c(a)
    }(a),
    function(a) {
        function b(b, c) {
            function d(a, b) {
                var c = "data-slider-" + b,
                    d = a.getAttribute(c);
                try {
                    return JSON.parse(d)
                } catch (e) {
                    return d
                }
            }
            "string" == typeof b ? this.element = document.querySelector(b) : b instanceof HTMLElement && (this.element = b);
            var e, f, g, h = this.element.style.width,
                i = !1,
                j = this.element.parentNode;
            if (this.sliderElem) i = !0;
            else {
                this.sliderElem = document.createElement("div"), this.sliderElem.className = "slider";
                var k = document.createElement("div");
                k.className = "slider-track", e = document.createElement("div"), e.className = "slider-selection", f = document.createElement("div"), f.className = "slider-handle min-slider-handle", g = document.createElement("div"), g.className = "slider-handle max-slider-handle", k.appendChild(e), k.appendChild(f), k.appendChild(g);
                var l = function(a) {
                        var b = document.createElement("div");
                        b.className = "tooltip-arrow";
                        var c = document.createElement("div");
                        c.className = "tooltip-inner", a.appendChild(b), a.appendChild(c)
                    },
                    m = document.createElement("div");
                m.className = "tooltip tooltip-main", l(m);
                var n = document.createElement("div");
                n.className = "tooltip tooltip-min", l(n);
                var o = document.createElement("div");
                o.className = "tooltip tooltip-max", l(o), this.sliderElem.appendChild(k), this.sliderElem.appendChild(m), this.sliderElem.appendChild(n), this.sliderElem.appendChild(o), j.insertBefore(this.sliderElem, this.element), this.element.style.display = "none"
            }
            a && (this.$element = a(this.element), this.$sliderElem = a(this.sliderElem)), c = c ? c : {};
            for (var p = Object.keys(this.defaultOptions), q = 0; q < p.length; q++) {
                var r = p[q],
                    s = c[r];
                s = "undefined" != typeof s ? s : d(this.element, r), s = null !== s ? s : this.defaultOptions[r], this.options || (this.options = {}), this.options[r] = s
            }
            this.eventToCallbackMap = {}, this.sliderElem.id = this.options.id, this.touchCapable = "ontouchstart" in window || window.DocumentTouch && document instanceof window.DocumentTouch, this.tooltip = this.sliderElem.querySelector(".tooltip-main"), this.tooltipInner = this.tooltip.querySelector(".tooltip-inner"), this.tooltip_min = this.sliderElem.querySelector(".tooltip-min"), this.tooltipInner_min = this.tooltip_min.querySelector(".tooltip-inner"), this.tooltip_max = this.sliderElem.querySelector(".tooltip-max"), this.tooltipInner_max = this.tooltip_max.querySelector(".tooltip-inner"), i === !0 && (this._removeClass(this.sliderElem, "slider-horizontal"), this._removeClass(this.sliderElem, "slider-vertical"), this._removeClass(this.tooltip, "hide"), this._removeClass(this.tooltip_min, "hide"), this._removeClass(this.tooltip_max, "hide"), ["left", "top", "width", "height"].forEach(function(a) {
                this._removeProperty(this.trackSelection, a)
            }, this), [this.handle1, this.handle2].forEach(function(a) {
                this._removeProperty(a, "left"), this._removeProperty(a, "top")
            }, this), [this.tooltip, this.tooltip_min, this.tooltip_max].forEach(function(a) {
                this._removeProperty(a, "left"), this._removeProperty(a, "top"), this._removeProperty(a, "margin-left"), this._removeProperty(a, "margin-top"), this._removeClass(a, "right"), this._removeClass(a, "top")
            }, this)), "vertical" === this.options.orientation ? (this._addClass(this.sliderElem, "slider-vertical"), this.stylePos = "top", this.mousePos = "pageY", this.sizePos = "offsetHeight", this._addClass(this.tooltip, "right"), this.tooltip.style.left = "100%", this._addClass(this.tooltip_min, "right"), this.tooltip_min.style.left = "100%", this._addClass(this.tooltip_max, "right"), this.tooltip_max.style.left = "100%") : (this._addClass(this.sliderElem, "slider-horizontal"), this.sliderElem.style.width = h, this.options.orientation = "horizontal", this.stylePos = "left", this.mousePos = "pageX", this.sizePos = "offsetWidth", this._addClass(this.tooltip, "top"), this.tooltip.style.top = -this.tooltip.outerHeight - 14 + "px", this._addClass(this.tooltip_min, "top"), this.tooltip_min.style.top = -this.tooltip_min.outerHeight - 14 + "px", this._addClass(this.tooltip_max, "top"), this.tooltip_max.style.top = -this.tooltip_max.outerHeight - 14 + "px"), this.options.value instanceof Array ? this.options.range = !0 : this.options.range && (this.options.value = [this.options.value, this.options.max]), this.trackSelection = e || this.trackSelection, "none" === this.options.selection && this._addClass(this.trackSelection, "hide"), this.handle1 = f || this.handle1, this.handle2 = g || this.handle2, i === !0 && (this._removeClass(this.handle1, "round triangle"), this._removeClass(this.handle2, "round triangle hide"));
            var t = ["round", "triangle", "custom"],
                u = -1 !== t.indexOf(this.options.handle);
            u && (this._addClass(this.handle1, this.options.handle), this._addClass(this.handle2, this.options.handle)), this.offset = this._offset(this.sliderElem), this.size = this.sliderElem[this.sizePos], this.setValue(this.options.value), this.handle1Keydown = this._keydown.bind(this, 0), this.handle1.addEventListener("keydown", this.handle1Keydown, !1), this.handle2Keydown = this._keydown.bind(this, 0), this.handle2.addEventListener("keydown", this.handle2Keydown, !1), this.touchCapable ? (this.mousedown = this._mousedown.bind(this), this.sliderElem.addEventListener("touchstart", this.mousedown, !1)) : (this.mousedown = this._mousedown.bind(this), this.sliderElem.addEventListener("mousedown", this.mousedown, !1)), "hide" === this.options.tooltip ? (this._addClass(this.tooltip, "hide"), this._addClass(this.tooltip_min, "hide"), this._addClass(this.tooltip_max, "hide")) : "always" === this.options.tooltip ? (this._showTooltip(), this._alwaysShowTooltip = !0) : (this.showTooltip = this._showTooltip.bind(this), this.hideTooltip = this._hideTooltip.bind(this), this.sliderElem.addEventListener("mouseenter", this.showTooltip, !1), this.sliderElem.addEventListener("mouseleave", this.hideTooltip, !1), this.handle1.addEventListener("focus", this.showTooltip, !1), this.handle1.addEventListener("blur", this.hideTooltip, !1), this.handle2.addEventListener("focus", this.showTooltip, !1), this.handle2.addEventListener("blur", this.hideTooltip, !1)), this.options.enabled ? this.enable() : this.disable()
        }
        var c = {
                formatInvalidInputErrorMsg: function(a) {
                    return "Invalid input value '" + a + "' passed in"
                },
                callingContextNotSliderInstance: "Calling context element does not have instance of Slider bound to it. Check your code to make sure the JQuery object returned from the call to the slider() initializer is calling the method"
            },
            d = function(a, c) {
                return b.call(this, a, c), this
            };
        if (d.prototype = {
                _init: function() {},
                constructor: d,
                defaultOptions: {
                    id: "",
                    min: 0,
                    max: 10,
                    step: 1,
                    precision: 0,
                    orientation: "horizontal",
                    value: 5,
                    range: !1,
                    selection: "before",
                    tooltip: "show",
                    tooltip_split: !1,
                    handle: "round",
                    reversed: !1,
                    enabled: !0,
                    formatter: function(a) {
                        return a instanceof Array ? a[0] + " : " + a[1] : a
                    },
                    natural_arrow_keys: !1
                },
                over: !1,
                inDrag: !1,
                getValue: function() {
                    return this.options.range ? this.options.value : this.options.value[0]
                },
                setValue: function(a, b) {
                    a || (a = 0), this.options.value = this._validateInputValue(a);
                    var c = this._applyPrecision.bind(this);
                    this.options.range ? (this.options.value[0] = c(this.options.value[0]), this.options.value[1] = c(this.options.value[1]), this.options.value[0] = Math.max(this.options.min, Math.min(this.options.max, this.options.value[0])), this.options.value[1] = Math.max(this.options.min, Math.min(this.options.max, this.options.value[1]))) : (this.options.value = c(this.options.value), this.options.value = [Math.max(this.options.min, Math.min(this.options.max, this.options.value))], this._addClass(this.handle2, "hide"), this.options.value[1] = "after" === this.selection ? this.options.max : this.options.min), this.diff = this.options.max - this.options.min, this.percentage = this.diff > 0 ? [100 * (this.options.value[0] - this.options.min) / this.diff, 100 * (this.options.value[1] - this.options.min) / this.diff, 100 * this.options.step / this.diff] : [0, 0, 100], this._layout();
                    var d = this.options.range ? this.options.value : this.options.value[0];
                    return this._setDataVal(d), b === !0 && this._trigger("slide", d), this
                },
                destroy: function() {
                    this._removeSliderEventHandlers(), this.sliderElem.parentNode.removeChild(this.sliderElem), this.element.style.display = "", this._cleanUpEventCallbacksMap(), this.element.removeAttribute("data"), a && (this._unbindJQueryEventHandlers(), this.$element.removeData("slider"))
                },
                disable: function() {
                    return this.options.enabled = !1, this.handle1.removeAttribute("tabindex"), this.handle2.removeAttribute("tabindex"), this._addClass(this.sliderElem, "slider-disabled"), this._trigger("slideDisabled"), this
                },
                enable: function() {
                    return this.options.enabled = !0, this.handle1.setAttribute("tabindex", 0), this.handle2.setAttribute("tabindex", 0), this._removeClass(this.sliderElem, "slider-disabled"), this._trigger("slideEnabled"), this
                },
                toggle: function() {
                    return this.options.enabled ? this.disable() : this.enable(), this
                },
                isEnabled: function() {
                    return this.options.enabled
                },
                on: function(b, c) {
                    return a ? (this.$element.on(b, c), this.$sliderElem.on(b, c)) : this._bindNonQueryEventHandler(b, c), this
                },
                getAttribute: function(a) {
                    return a ? this.options[a] : this.options
                },
                setAttribute: function(a, b) {
                    return this.options[a] = b, this
                },
                refresh: function() {
                    return this._removeSliderEventHandlers(), b.call(this, this.element, this.options), a && a.data(this.element, "slider", this), this
                },
                _removeSliderEventHandlers: function() {
                    this.handle1.removeEventListener("keydown", this.handle1Keydown, !1), this.handle1.removeEventListener("focus", this.showTooltip, !1), this.handle1.removeEventListener("blur", this.hideTooltip, !1), this.handle2.removeEventListener("keydown", this.handle2Keydown, !1), this.handle2.removeEventListener("focus", this.handle2Keydown, !1), this.handle2.removeEventListener("blur", this.handle2Keydown, !1), this.sliderElem.removeEventListener("mouseenter", this.showTooltip, !1), this.sliderElem.removeEventListener("mouseleave", this.hideTooltip, !1), this.sliderElem.removeEventListener("touchstart", this.mousedown, !1), this.sliderElem.removeEventListener("mousedown", this.mousedown, !1)
                },
                _bindNonQueryEventHandler: function(a, b) {
                    var c = this.eventToCallbackMap[a];
                    c ? c.push(b) : this.eventToCallbackMap[a] = []
                },
                _cleanUpEventCallbacksMap: function() {
                    for (var a = Object.keys(this.eventToCallbackMap), b = 0; b < a.length; b++) {
                        var c = a[b];
                        this.eventToCallbackMap[c] = null
                    }
                },
                _showTooltip: function() {
                    this.options.tooltip_split === !1 ? this._addClass(this.tooltip, "in") : (this._addClass(this.tooltip_min, "in"), this._addClass(this.tooltip_max, "in")), this.over = !0
                },
                _hideTooltip: function() {
                    this.inDrag === !1 && this.alwaysShowTooltip !== !0 && (this._removeClass(this.tooltip, "in"), this._removeClass(this.tooltip_min, "in"), this._removeClass(this.tooltip_max, "in")), this.over = !1
                },
                _layout: function() {
                    var a;
                    if (a = this.options.reversed ? [100 - this.percentage[0], this.percentage[1]] : [this.percentage[0], this.percentage[1]], this.handle1.style[this.stylePos] = a[0] + "%", this.handle2.style[this.stylePos] = a[1] + "%", "vertical" === this.options.orientation) this.trackSelection.style.top = Math.min(a[0], a[1]) + "%", this.trackSelection.style.height = Math.abs(a[0] - a[1]) + "%";
                    else {
                        this.trackSelection.style.left = Math.min(a[0], a[1]) + "%", this.trackSelection.style.width = Math.abs(a[0] - a[1]) + "%";
                        var b = this.tooltip_min.getBoundingClientRect(),
                            c = this.tooltip_max.getBoundingClientRect();
                        b.right > c.left ? (this._removeClass(this.tooltip_max, "top"), this._addClass(this.tooltip_max, "bottom"), this.tooltip_max.style.top = "18px") : (this._removeClass(this.tooltip_max, "bottom"), this._addClass(this.tooltip_max, "top"), this.tooltip_max.style.top = "-30px")
                    }
                    var d;
                    if (this.options.range) {
                        d = this.options.formatter(this.options.value), this._setText(this.tooltipInner, d), this.tooltip.style[this.stylePos] = (a[1] + a[0]) / 2 + "%", "vertical" === this.options.orientation ? this._css(this.tooltip, "margin-top", -this.tooltip.offsetHeight / 2 + "px") : this._css(this.tooltip, "margin-left", -this.tooltip.offsetWidth / 2 + "px"), "vertical" === this.options.orientation ? this._css(this.tooltip, "margin-top", -this.tooltip.offsetHeight / 2 + "px") : this._css(this.tooltip, "margin-left", -this.tooltip.offsetWidth / 2 + "px");
                        var e = this.options.formatter(this.options.value[0]);
                        this._setText(this.tooltipInner_min, e);
                        var f = this.options.formatter(this.options.value[1]);
                        this._setText(this.tooltipInner_max, f), this.tooltip_min.style[this.stylePos] = a[0] + "%", "vertical" === this.options.orientation ? this._css(this.tooltip_min, "margin-top", -this.tooltip_min.offsetHeight / 2 + "px") : this._css(this.tooltip_min, "margin-left", -this.tooltip_min.offsetWidth / 2 + "px"), this.tooltip_max.style[this.stylePos] = a[1] + "%", "vertical" === this.options.orientation ? this._css(this.tooltip_max, "margin-top", -this.tooltip_max.offsetHeight / 2 + "px") : this._css(this.tooltip_max, "margin-left", -this.tooltip_max.offsetWidth / 2 + "px")
                    } else d = this.options.formatter(this.options.value[0]), this._setText(this.tooltipInner, d), this.tooltip.style[this.stylePos] = a[0] + "%", "vertical" === this.options.orientation ? this._css(this.tooltip, "margin-top", -this.tooltip.offsetHeight / 2 + "px") : this._css(this.tooltip, "margin-left", -this.tooltip.offsetWidth / 2 + "px")
                },
                _removeProperty: function(a, b) {
                    a.style.removeProperty ? a.style.removeProperty(b) : a.style.removeAttribute(b)
                },
                _mousedown: function(a) {
                    if (!this.options.enabled) return !1;
                    this._triggerFocusOnHandle(), this.offset = this._offset(this.sliderElem), this.size = this.sliderElem[this.sizePos];
                    var b = this._getPercentage(a);
                    if (this.options.range) {
                        var c = Math.abs(this.percentage[0] - b),
                            d = Math.abs(this.percentage[1] - b);
                        this.dragged = d > c ? 0 : 1
                    } else this.dragged = 0;
                    this.percentage[this.dragged] = this.options.reversed ? 100 - b : b, this._layout(), this.mousemove = this._mousemove.bind(this), this.mouseup = this._mouseup.bind(this), this.touchCapable ? (document.addEventListener("touchmove", this.mousemove, !1), document.addEventListener("touchend", this.mouseup, !1)) : (document.addEventListener("mousemove", this.mousemove, !1), document.addEventListener("mouseup", this.mouseup, !1)), this.inDrag = !0;
                    var e = this._calculateValue();
                    return this._trigger("slideStart", e), this._setDataVal(e), this.setValue(e), this._pauseEvent(a), !0
                },
                _triggerFocusOnHandle: function(a) {
                    0 === a && this.handle1.focus(), 1 === a && this.handle2.focus()
                },
                _keydown: function(a, b) {
                    if (!this.options.enabled) return !1;
                    var c;
                    switch (b.keyCode) {
                        case 37:
                        case 40:
                            c = -1;
                            break;
                        case 39:
                        case 38:
                            c = 1
                    }
                    if (c) {
                        if (this.options.natural_arrow_keys) {
                            var d = "vertical" === this.options.orientation && !this.options.reversed,
                                e = "horizontal" === this.options.orientation && this.options.reversed;
                            (d || e) && (c = -1 * c)
                        }
                        var f = c * this.percentage[2],
                            g = this.percentage[a] + f;
                        g > 100 ? g = 100 : 0 > g && (g = 0), this.dragged = a, this._adjustPercentageForRangeSliders(g), this.percentage[this.dragged] = g, this._layout();
                        var h = this._calculateValue();
                        return this._trigger("slideStart", h), this._setDataVal(h), this.setValue(h, !0), this._trigger("slideStop", h), this._setDataVal(h), this._pauseEvent(b), !1
                    }
                },
                _pauseEvent: function(a) {
                    a.stopPropagation && a.stopPropagation(), a.preventDefault && a.preventDefault(), a.cancelBubble = !0, a.returnValue = !1
                },
                _mousemove: function(a) {
                    if (!this.options.enabled) return !1;
                    var b = this._getPercentage(a);
                    this._adjustPercentageForRangeSliders(b), this.percentage[this.dragged] = this.options.reversed ? 100 - b : b, this._layout();
                    var c = this._calculateValue();
                    return this.setValue(c, !0), !1
                },
                _adjustPercentageForRangeSliders: function(a) {
                    this.options.range && (0 === this.dragged && this.percentage[1] < a ? (this.percentage[0] = this.percentage[1], this.dragged = 1) : 1 === this.dragged && this.percentage[0] > a && (this.percentage[1] = this.percentage[0], this.dragged = 0))
                },
                _mouseup: function() {
                    if (!this.options.enabled) return !1;
                    this.touchCapable ? (document.removeEventListener("touchmove", this.mousemove, !1), document.removeEventListener("touchend", this.mouseup, !1)) : (document.removeEventListener("mousemove", this.mousemove, !1), document.removeEventListener("mouseup", this.mouseup, !1)), this.inDrag = !1, this.over === !1 && this._hideTooltip();
                    var a = this._calculateValue();
                    return this._layout(), this._setDataVal(a), this._trigger("slideStop", a), !1
                },
                _calculateValue: function() {
                    var a;
                    return this.options.range ? (a = [this.options.min, this.options.max], 0 !== this.percentage[0] && (a[0] = Math.max(this.options.min, this.options.min + Math.round(this.diff * this.percentage[0] / 100 / this.options.step) * this.options.step), a[0] = this._applyPrecision(a[0])), 100 !== this.percentage[1] && (a[1] = Math.min(this.options.max, this.options.min + Math.round(this.diff * this.percentage[1] / 100 / this.options.step) * this.options.step), a[1] = this._applyPrecision(a[1])), this.options.value = a) : (a = this.options.min + Math.round(this.diff * this.percentage[0] / 100 / this.options.step) * this.options.step, a < this.options.min ? a = this.options.min : a > this.options.max && (a = this.options.max), a = parseFloat(a), a = this._applyPrecision(a), this.options.value = [a, this.options.value[1]]), a
                },
                _applyPrecision: function(a) {
                    var b = this.options.precision || this._getNumDigitsAfterDecimalPlace(this.step);
                    return this._applyToFixedAndParseFloat(a, b)
                },
                _getNumDigitsAfterDecimalPlace: function(a) {
                    var b = ("" + a).match(/(?:\.(\d+))?(?:[eE]([+-]?\d+))?$/);
                    return b ? Math.max(0, (b[1] ? b[1].length : 0) - (b[2] ? +b[2] : 0)) : 0
                },
                _applyToFixedAndParseFloat: function(a, b) {
                    var c = a.toFixed(b);
                    return parseFloat(c)
                },
                _getPercentage: function(a) {
                    !this.touchCapable || "touchstart" !== a.type && "touchmove" !== a.type || (a = a.touches[0]);
                    var b = 100 * (a[this.mousePos] - this.offset[this.stylePos]) / this.size;
                    return b = Math.round(b / this.percentage[2]) * this.percentage[2], Math.max(0, Math.min(100, b))
                },
                _validateInputValue: function(a) {
                    if ("number" == typeof a) return a;
                    if (a instanceof Array) return this._validateArray(a), a;
                    throw new Error(c.formatInvalidInputErrorMsg(a))
                },
                _validateArray: function(a) {
                    for (var b = 0; b < a.length; b++) {
                        var d = a[b];
                        if ("number" != typeof d) throw new Error(c.formatInvalidInputErrorMsg(d))
                    }
                },
                _setDataVal: function(a) {
                    var b = "value: '" + a + "'";
                    this.element.setAttribute("data", b), this.element.setAttribute("value", a)
                },
                _trigger: function(b, c) {
                    c = c || void 0;
                    var d = this.eventToCallbackMap[b];
                    if (d && d.length)
                        for (var e = 0; e < d.length; e++) {
                            var f = d[e];
                            f(c)
                        }
                    a && this._triggerJQueryEvent(b, c)
                },
                _triggerJQueryEvent: function(a, b) {
                    var c = {
                        type: a,
                        value: b
                    };
                    this.$element.trigger(c), this.$sliderElem.trigger(c)
                },
                _unbindJQueryEventHandlers: function() {
                    this.$element.off(), this.$sliderElem.off()
                },
                _setText: function(a, b) {
                    "undefined" != typeof a.innerText ? a.innerText = b : "undefined" != typeof a.textContent && (a.textContent = b)
                },
                _removeClass: function(a, b) {
                    for (var c = b.split(" "), d = a.className, e = 0; e < c.length; e++) {
                        var f = c[e],
                            g = new RegExp("(?:\\s|^)" + f + "(?:\\s|$)");
                        d = d.replace(g, " ")
                    }
                    a.className = d.trim()
                },
                _addClass: function(a, b) {
                    for (var c = b.split(" "), d = a.className, e = 0; e < c.length; e++) {
                        var f = c[e],
                            g = new RegExp("(?:\\s|^)" + f + "(?:\\s|$)"),
                            h = g.test(d);
                        h || (d += " " + f)
                    }
                    a.className = d.trim()
                },
                _offset: function(a) {
                    var b = 0,
                        c = 0;
                    if (a.offsetParent)
                        do b += a.offsetLeft, c += a.offsetTop; while (a = a.offsetParent);
                    return {
                        left: b,
                        top: c
                    }
                },
                _css: function(a, b, c) {
                    a.style[b] = c
                }
            }, a) {
            var e = a.fn.slider ? "bootstrapSlider" : "slider";
            a.bridget(e, d)
        } else window.Slider = d
    }(a)
}(window.jQuery);


$(document).ready(function() {

    $("#bootstrap-slider").slider();
    $("#bootstrap-slider").on("slide", function(slideEvt) {
        $("#sliderValue").text(slideEvt.value);
    });

    $('.slider').on("click", function() {
        var newvalue = $('.tooltip-inner').text();
        $("#sliderValue").text(newvalue);
    });

});