!function(t, e) {
    "object" == typeof exports && "object" == typeof module ? module.exports = e() : "function" == typeof define && define.amd ? define([], e) : "object" == typeof exports ? exports["Scrollload.js"] = e() : t["Scrollload.js"] = e()
} (this,
function() {
    return function(t) {
        function e(i) {
            if (o[i]) return o[i].exports;
            var n = o[i] = {
                i: i,
                l: !1,
                exports: {}
            };
            return t[i].call(n.exports, n, n.exports, e),
            n.l = !0,
            n.exports
        }
        var o = {};
        return e.m = t,
        e.c = o,
        e.i = function(t) {
            return t
        },
        e.d = function(t, o, i) {
            e.o(t, o) || Object.defineProperty(t, o, {
                configurable: !1,
                enumerable: !0,
                get: i
            })
        },
        e.n = function(t) {
            var o = t && t.__esModule ?
            function() {
                return t.
            default
            }:
            function() {
                return t
            };
            return e.d(o, "a", o),
            o
        },
        e.o = function(t, e) {
            return Object.prototype.hasOwnProperty.call(t, e)
        },
        e.p = "",
        e(e.s = 8)
    } ([function(t, e, o) {
        "use strict";
        function i(t, e) {
            "transform" in e && (e.webkitTransform = e.transform),
            "transition" in e && (e.webkitTransition = e.transition),
            t.forEach(function(t) {
                return t && o.i(r.a)(t.style, e)
            })
        }
        function n(t) {
            var e = document.createElement("style");
            e.appendChild(document.createTextNode(t)),
            document.getElementsByTagName("head")[0].appendChild(e)
        }
        function s() {}
        var r = o(1);
        e.a = i,
        e.b = n,
        e.c = s
    },
    function(t, e, o) {
        "use strict";
        var i = function(t, e) {
            if (null == t) throw new TypeError("Cannot convert undefined or null to object");
            for (var o = Object(t), i = 1; i < arguments.length; i++) {
                var n = arguments[i];
                if (null != n) for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (o[s] = n[s])
            }
            return o
        };
        e.a = i
    },
    function(t, e) {
        t.exports = function() {
            var t = [];
            return t.toString = function() {
                for (var t = [], e = 0; e < this.length; e++) {
                    var o = this[e];
                    o[2] ? t.push("@media " + o[2] + "{" + o[1] + "}") : t.push(o[1])
                }
                return t.join("")
            },
            t.i = function(e, o) {
                "string" == typeof e && (e = [[null, e, ""]]);
                for (var i = {},
                n = 0; n < this.length; n++) {
                    var s = this[n][0];
                    "number" == typeof s && (i[s] = !0)
                }
                for (n = 0; n < e.length; n++) {
                    var r = e[n];
                    "number" == typeof r[0] && i[r[0]] || (o && !r[2] ? r[2] = o: o && (r[2] = "(" + r[2] + ") and (" + o + ")"), t.push(r))
                }
            },
            t
        }
    },
    , ,
    function(t, e, o) {
        "use strict";
        function i(t) {
            return '<div style="text-align: center;font-size: 12px;line-height: 50px;">' + t + "</div>"
        }
        function n(t, e, i) {
            o.i(s.a)([t], {
                transform: "translate3d(-" + 18 * i + "px, 0, 0)"
            }),
            o.i(s.a)([e], {
                transform: "translate3d(" + 18 * i + "px, 0, 0)"
            })
        }
        var s = o(0);
        o.i(s.b)(o(7)[0][1]);
        var r = '\n    <div style="height: 50px;">\n        <div class="sl-ld">\n            <div class="sl-ld-ball"></div>\n            <div class="sl-ld-ball"></div>\n        </div>\n   </div>\n',
        a = '\n    <div style="height: 50px;">\n        <div class="sl-ld">\n            <div class="sl-ld-ball sl-ld-ball-anim"></div>\n            <div class="sl-ld-ball sl-ld-ball-anim"></div>\n        </div>\n   </div>\n',
        l = {
            loadingHtml: a,
            noMoreDataHtml: i("?????????????????????"),
            exceptionHtml: i("??????????????????"),
            notEnoughRefreshPortHtml: r,
            overRefreshPortHtml: r,
            refreshingHtml: a,
            notEnoughRefreshPortHandler: function(t) {
                n(t.ball1, t.ball2, t.distance / t.topContentDomHeight)
            },
            initedHandler: function(t) {
                var e = t.container.querySelectorAll(".sl-ld-ball");
                t.ball1 = e[0],
                t.ball2 = e[1]
            }
        };
        e.a = l
    },
    function(t, e, o) {
        "use strict";
        e.a = function(t, e, o) {
            var i, n, s, r, a = 0;
            o || (o = {});
            var l = function() {
                a = !1 === o.leading ? 0 : Date.now(),
                i = null,
                r = t.apply(n, s),
                i || (n = s = null)
            },
            h = function() {
                var h = Date.now();
                a || !1 !== o.leading || (a = h);
                var c = e - (h - a);
                return n = this,
                s = arguments,
                c <= 0 || c > e ? (i && (clearTimeout(i), i = null), a = h, r = t.apply(n, s), i || (n = s = null)) : i || !1 === o.trailing || (i = setTimeout(l, c)),
                r
            };
            return h.cancel = function() {
                clearTimeout(i),
                a = 0,
                i = n = s = null
            },
            h
        }
    },
    function(t, e, o) {
        e = t.exports = o(2)(),
        e.push([t.i, "@-webkit-keyframes sl-ld-ball-anim1{0%{z-index:1;-webkit-transform:translate3d(-18px,0,0);transform:translate3d(-18px,0,0)}50%{-webkit-transform:translate3d(18px,0,0);transform:translate3d(18px,0,0)}to{z-index:2;-webkit-transform:translate3d(-18px,0,0);transform:translate3d(-18px,0,0)}}@keyframes sl-ld-ball-anim1{0%{z-index:1;-webkit-transform:translate3d(-18px,0,0);transform:translate3d(-18px,0,0)}50%{-webkit-transform:translate3d(18px,0,0);transform:translate3d(18px,0,0)}to{z-index:2;-webkit-transform:translate3d(-18px,0,0);transform:translate3d(-18px,0,0)}}@-webkit-keyframes sl-ld-ball-anim2{0%{z-index:2;-webkit-transform:translate3d(18px,0,0);transform:translate3d(18px,0,0)}50%{-webkit-transform:translate3d(-18px,0,0);transform:translate3d(-18px,0,0)}to{z-index:1;-webkit-transform:translate3d(18px,0,0);transform:translate3d(18px,0,0)}}@keyframes sl-ld-ball-anim2{0%{z-index:2;-webkit-transform:translate3d(18px,0,0);transform:translate3d(18px,0,0)}50%{-webkit-transform:translate3d(-18px,0,0);transform:translate3d(-18px,0,0)}to{z-index:1;-webkit-transform:translate3d(18px,0,0);transform:translate3d(18px,0,0)}}.sl-ld{position:relative;width:0;margin:0 auto;height:50px}.sl-ld-ball{width:16px;height:16px;border-radius:50%;position:absolute;top:17px;left:-8px}.sl-ld-ball:first-of-type{-webkit-transform:translate3d(-18px,0,0);transform:translate3d(-18px,0,0);background:#0462dc;z-index:1}.sl-ld-ball:nth-of-type(2){-webkit-transform:translate3d(18px,0,0);transform:translate3d(18px,0,0);background:#fc0284;z-index:2}.sl-ld-ball-anim:first-of-type{-webkit-animation:sl-ld-ball-anim1 1.2s linear infinite;animation:sl-ld-ball-anim1 1.2s linear infinite}.sl-ld-ball-anim:nth-of-type(2){-webkit-animation:sl-ld-ball-anim2 1.2s linear infinite;animation:sl-ld-ball-anim2 1.2s linear infinite}", ""])
    },
    function(t, e, o) {
        "use strict";
        function i(t, e) {
            if (! (t instanceof e)) throw new TypeError("Cannot call a class as a function")
        }
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var n = o(6),
        s = o(1),
        r = o(0),
        a = o(5),
        l = function() {
            function t(t, e) {
                for (var o = 0; o < e.length; o++) {
                    var i = e[o];
                    i.enumerable = i.enumerable || !1,
                    i.configurable = !0,
                    "value" in i && (i.writable = !0),
                    Object.defineProperty(t, i.key, i)
                }
            }
            return function(e, o, i) {
                return o && t(e.prototype, o),
                i && t(e, i),
                e
            }
        } (),
        h = function() {
            function t() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                i(this, t),
                this._options = o.i(s.a)({},
                t.defaultOptions, e);
                var r = this._options.container || document.querySelector(".scrollload-container");
                if (this.container = r, !(r instanceof HTMLElement)) throw new Error("container must be a HTMLElement instance!");
                if (this.win = this._options.window, this.isGlobalScroll = this.win === window, this.contentDom = this._options.content || this.container.querySelector(".scrollload-content"), !(this.contentDom instanceof HTMLElement)) throw new Error("content must be a HTMLElement instance!");
                this._options.enableLoadMore && (this.windowHeight = window.innerHeight, this.isLock = this._options.isInitLock, this.hasMoreData = !0, this.createBottomDom(), this.scrollListener = this.scrollListener.bind(this), this.resizeListener = this.resizeListener.bind(this), this.scrollListenerWrapThrottle = o.i(n.a)(this.scrollListener, 50), this.resizeListenerWrapThrottle = o.i(n.a)(this.resizeListener, 50), this.attachScrollListener()),
                this._options.enablePullRefresh && (this.createTopDom(), this.startPageY = 0, this.prePageY = 0, this.isMoving = !1, this.isMovingDown = !0, this.isRefreshing = !1, this.distance = 0, this.enterTouchStart = !1, this.touchStart = this.touchStart.bind(this), this.touchMove = this.touchMove.bind(this), this.touchEnd = this.touchEnd.bind(this), this.attachTouchListener()),
                this._options.initedHandler.call(this, this)
            }
            return l(t, [{
                key: "createBottomDom",
                value: function() {
                    this.container.insertAdjacentHTML("beforeend", '<div class="scrollload-bottom">' + this._options.loadingHtml + "</div>"),
                    this.bottomDom = this.container.querySelector(".scrollload-bottom")
                }
            },
            {
                key: "createTopDom",
                value: function() {
                    var t = this._options,
                    e = t.notEnoughRefreshPortHtml,
                    o = t.overRefreshPortHtml,
                    i = t.refreshingHtml;
                    this.container.insertAdjacentHTML("afterbegin", '<div class="scrollload-top" style="position: relative;">\n                <div class="scrollload-top-content" style="position: absolute; left: 0; right: 0;">\n                    <div class="scrollload-notEnoughRefreshPort" style="display: block">' + e + '</div>\n                    <div class="scrollload-overRefreshPort" style="display: none">' + o + '</div>\n                    <div class="scrollload-refreshing" style="display: none">' + i + "</div>\n                </div>\n            </div>");
                    var n = this.container.querySelector(".scrollload-top"),
                    s = n.querySelector(".scrollload-top-content");
                    this.notEnoughRefreshPortDom = s.querySelector(".scrollload-notEnoughRefreshPort"),
                    this.overRefreshPortDom = s.querySelector(".scrollload-overRefreshPort"),
                    this.refreshingDom = s.querySelector(".scrollload-refreshing");
                    var r = s.clientHeight,
                    a = s.clientWidth;
                    n.style.top = "-" + r + "px",
                    s.style.clip = "rect(" + r + "px " + a + "px " + r + "px 0)",
                    this.topContentDomHeight = r,
                    this.topContentDomWidth = a,
                    this.topDom = n,
                    this.topContentDom = s
                }
            },
            {
                key: "showNoMoreDataDom",
                value: function() {
                    this.bottomDom.innerHTML = this._options.noMoreDataHtml
                }
            },
            {
                key: "showLoadingDom",
                value: function() {
                    this.bottomDom.innerHTML = this._options.loadingHtml
                }
            },
            {
                key: "showExceptionDom",
                value: function() {
                    this.bottomDom.innerHTML = this._options.exceptionHtml
                }
            },
            {
                key: "showNotEnoughRefreshPortDom",
                value: function() {
                    o.i(r.a)([this.overRefreshPortDom, this.refreshingDom], {
                        display: "none"
                    }),
                    o.i(r.a)([this.notEnoughRefreshPortDom], {
                        display: "block"
                    })
                }
            },
            {
                key: "showOverRefreshPortDom",
                value: function() {
                    o.i(r.a)([this.notEnoughRefreshPortDom, this.refreshingDom], {
                        display: "none"
                    }),
                    o.i(r.a)([this.overRefreshPortDom], {
                        display: "block"
                    })
                }
            },
            {
                key: "showRefreshingDom",
                value: function() {
                    o.i(r.a)([this.notEnoughRefreshPortDom, this.overRefreshPortDom], {
                        display: "none"
                    }),
                    o.i(r.a)([this.refreshingDom], {
                        display: "block"
                    })
                }
            },
            {
                key: "calMovingDistance",
                value: function(t) {
                    this.distance = this._options.calMovingDistance(t)
                }
            },
            {
                key: "setTopDomClipTop",
                value: function(t) {
                    this.topContentDom.style.clip = "rect(" + t + "px " + this.topContentDomWidth + "px " + this.topContentDomHeight + "px 0)"
                }
            },
            {
                key: "isTop",
                value: function() {
                    return this.isGlobalScroll ? window.pageYOffset <= 0 : this.win.scrollTop <= 1
                }
            },
            {
                key: "refreshComplete",
                value: function() {
                    o.i(r.a)([this.topDom, this.contentDom, this.bottomDom], {
                        transition: "all 300ms",
                        transform: "translate3d(0, 0, 0)"
                    }),
                    o.i(r.a)([this.topContentDom], {
                        transition: "all 300ms"
                    }),
                    this.setTopDomClipTop(this.topContentDomHeight),
                    this.isRefreshing = !1
                }
            },
            {
                key: "movingHandler",
                value: function() {
                    this.isArrivedRefreshPort() && this.arrivedRefreshPortHandler(),
                    this.isOverRefreshPort() ? this.overRefreshPortHandler() : this.notEnoughRefreshPortHandler();
                    var t = Math.max(this.distance, 0);
                    0 === t && (this.isMoving = !1),
                    o.i(r.a)([this.topDom, this.contentDom, this.bottomDom], {
                        transform: "translate3d(0, " + t + "px, 0)"
                    }),
                    this.setTopDomClipTop(Math.max(this.topContentDomHeight - t, 0))
                }
            },
            {
                key: "isOverRefreshPort",
                value: function() {
                    return this.distance >= this.topContentDomHeight
                }
            },
            {
                key: "triggerPullResfresh",
                value: function() {
                    this.showRefreshingDom(),
                    this.isRefreshing = !0,
                    o.i(r.a)([this.topDom, this.contentDom, this.bottomDom], {
                        transition: "all 300ms",
                        transform: "translate3d(0, " + this.topContentDomHeight + "px, 0)"
                    }),
                    this._options.pullRefresh.call(this, this)
                }
            },
            {
                key: "overRefreshPortHandler",
                value: function() {
                    this._options.overRefreshPortHandler.call(this, this)
                }
            },
            {
                key: "notEnoughRefreshPortHandler",
                value: function() {
                    this._options.notEnoughRefreshPortHandler.call(this, this)
                }
            },
            {
                key: "isArrivedRefreshPort",
                value: function() {
                    var t = this._options.calMovingDistance(this.prePageY - this.startPageY);
                    return this.distance >= this.topContentDomHeight && t < this.topContentDomHeight || this.distance <= this.topContentDomHeight && t > this.topContentDomHeight
                }
            },
            {
                key: "arrivedRefreshPortHandler",
                value: function() {
                    this.isMovingDown ? this.showOverRefreshPortDom() : this.showNotEnoughRefreshPortDom(),
                    this._options.arrivedRefreshPortHandler.call(this, this)
                }
            },
            {
                key: "attachTouchListener",
                value: function() {
                    this.container.addEventListener("touchstart", this.touchStart),
                    this.container.addEventListener("touchmove", this.touchMove),
                    this.container.addEventListener("touchend", this.touchEnd)
                }
            },
            {
                key: "touchStart",
                value: function(t) {
                    if (this.isRefreshing) return void(this.enterTouchStart = !1);
                    this.enterTouchStart = !0,
                    this.startPageY = this.prePageY = t.touches[0].pageY,
                    o.i(r.a)([this.topDom, this.contentDom, this.bottomDom, this.topContentDom], {
                        transition: "none"
                    }),
                    this.showNotEnoughRefreshPortDom(),
                    0 === this.topContentDomHeight && (this.topContentDomHeight = this.topContentDom.clientHeight, this.topContentDomWidth = this.topContentDom.clientWidth, this.topDom.style.top = "-" + this.topContentDomHeight + "px"),
                    this._options.touchStart.call(this, this)
                }
            },
            {
                key: "touchMove",
                value: function(t) {
                    if (this.enterTouchStart) {
                        var e = t.touches[0].pageY;
                        this.isMovingDown = e >= this.prePageY,
                        this.isMoving ? (this.calMovingDistance(e - this.startPageY), this.movingHandler(), t.preventDefault()) : this.isTop() && this.isMovingDown && (this.isMoving = !0, t.preventDefault()),
                        this._options.touchMove.call(this, this),
                        this.prePageY = e
                    }
                }
            },
            {
                key: "touchEnd",
                value: function(t) {
                    this.isMoving && (this._options.touchEnd.call(this, this), this.isOverRefreshPort() ? this.triggerPullResfresh() : this.refreshComplete(), this.startPageY = this.prePageY = 0, this.isMoving = !1)
                }
            },
            {
                key: "scrollListener",
                value: function() {
                    this.isLock || this.isBottom() && (this.isLock = !0, this._options.loadMore.call(this, this))
                }
            },
            {
                key: "isBottom",
                value: function() {
                    var t = this.win,
                    e = this.bottomDom,
                    o = this.windowHeight,
                    i = e.getBoundingClientRect().top,
                    n = void 0;
                    if (this.isGlobalScroll) n = o;
                    else {
                        var s = t.getBoundingClientRect(),
                        r = s.height,
                        a = s.top;
                        n = r,
                        i -= a
                    }
                    return i - n <= this._options.threshold
                }
            },
            {
                key: "resizeListener",
                value: function() {
                    this.isGlobalScroll && (this.windowHeight = window.innerHeight),
                    this.scrollListener()
                }
            },
            {
                key: "attachScrollListener",
                value: function() {
                    this.win.addEventListener("scroll", this.scrollListenerWrapThrottle),
                    this.win.addEventListener("resize", this.resizeListenerWrapThrottle),
                    this.scrollListener()
                }
            },
            {
                key: "detachScrollListener",
                value: function() {
                    this.win.removeEventListener("scroll", this.scrollListenerWrapThrottle),
                    this.win.removeEventListener("resize", this.resizeListenerWrapThrottle)
                }
            },
            {
                key: "lock",
                value: function() {
                    this.isLock = !0
                }
            },
            {
                key: "unLock",
                value: function() {
                    this.isLock = !1,
                    this.hasMoreData && this.scrollListener()
                }
            },
            {
                key: "noMoreData",
                value: function() {
                    this.lock(),
                    this.hasMoreData = !1,
                    this.showNoMoreDataDom(),
                    this.detachScrollListener()
                }
            },
            {
                key: "refreshData",
                value: function() {
                    this.showLoadingDom(),
                    this.isLock = !1,
                    this.hasMoreData = !0,
                    this.attachScrollListener()
                }
            },
            {
                key: "throwException",
                value: function() {
                    this.showExceptionDom()
                }
            },
            {
                key: "solveException",
                value: function() {
                    this.hasMoreData ? (this.showLoadingDom(), this.unLock()) : this.showNoMoreDataDom()
                }
            },
            {
                key: "setOptions",
                value: function(t) {
                    o.i(s.a)(this._options, t)
                }
            },
            {
                key: "getOptions",
                value: function() {
                    return o.i(s.a)({},
                    this._options)
                }
            }], [{
                key: "setGlobalOptions",
                value: function(e) {
                    o.i(s.a)(t.defaultOptions, e)
                }
            }]),
            t
        } ();
        h.defaultOptions = {
            enableLoadMore: !0,
            isInitLock: !1,
            threshold: 10,
            window: window,
            loadingHtml: "",
            noMoreDataHtml: "",
            exceptionHtml: "",
            loadMore: r.c,
            enablePullRefresh: !1,
            notEnoughRefreshPortHtml: "",
            overRefreshPortHtml: "",
            refreshingHtml: "",
            pullRefresh: r.c,
            arrivedRefreshPortHandler: r.c,
            touchStart: r.c,
            touchMove: r.c,
            touchEnd: r.c,
            overRefreshPortHandler: r.c,
            notEnoughRefreshPortHandler: r.c,
            calMovingDistance: function(t) {
                return t / 3
            },
            initedHandler: r.c
        },
        e.
    default = h,
        h.setGlobalOptions(a.a),
        window.Scrollload = h
    }])
});