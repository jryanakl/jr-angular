import {
  __commonJS,
  __spreadProps,
  __spreadValues
} from "./chunk-3OV72XIM.js";

// node_modules/highcharts/modules/accessibility.js
var require_accessibility = __commonJS({
  "node_modules/highcharts/modules/accessibility.js"(exports, module) {
    !/**
    * Highcharts JS v11.4.8 (2024-08-29)
    *
    * Accessibility module
    *
    * (c) 2010-2024 Highsoft AS
    * Author: Oystein Moseng
    *
    * License: www.highcharts.com/license
    */
    function(e) {
      "object" == typeof module && module.exports ? (e.default = e, module.exports = e) : "function" == typeof define && define.amd ? define("highcharts/modules/accessibility", ["highcharts"], function(t) {
        return e(t), e.Highcharts = t, e;
      }) : e("undefined" != typeof Highcharts ? Highcharts : void 0);
    }(function(e) {
      "use strict";
      var t = e ? e._modules : {};
      function i(t2, i2, s, n) {
        t2.hasOwnProperty(i2) || (t2[i2] = n.apply(null, s), "function" == typeof CustomEvent && e.win.dispatchEvent(new CustomEvent("HighchartsModuleLoaded", {
          detail: {
            path: i2,
            module: t2[i2]
          }
        })));
      }
      i(t, "Accessibility/Utils/HTMLUtilities.js", [t["Core/Globals.js"], t["Core/Utilities.js"]], function(e2, t2) {
        let {
          doc: i2,
          win: s
        } = e2, {
          css: n
        } = t2, r = s.EventTarget && new s.EventTarget() || "none";
        function o(e3) {
          if ("function" == typeof s.MouseEvent) return new s.MouseEvent(e3.type, e3);
          if (i2.createEvent) {
            let t3 = i2.createEvent("MouseEvent");
            if (t3.initMouseEvent) return t3.initMouseEvent(e3.type, e3.bubbles, e3.cancelable, e3.view || s, e3.detail, e3.screenX, e3.screenY, e3.clientX, e3.clientY, e3.ctrlKey, e3.altKey, e3.shiftKey, e3.metaKey, e3.button, e3.relatedTarget), t3;
          }
          return a(e3.type);
        }
        function a(e3, t3, n2) {
          let o2 = t3 || {
            x: 0,
            y: 0
          };
          if ("function" == typeof s.MouseEvent) return new s.MouseEvent(e3, {
            bubbles: true,
            cancelable: true,
            composed: true,
            button: 0,
            buttons: 1,
            relatedTarget: n2 || r,
            view: s,
            detail: "click" === e3 ? 1 : 0,
            screenX: o2.x,
            screenY: o2.y,
            clientX: o2.x,
            clientY: o2.y
          });
          if (i2.createEvent) {
            let t4 = i2.createEvent("MouseEvent");
            if (t4.initMouseEvent) return t4.initMouseEvent(e3, true, true, s, "click" === e3 ? 1 : 0, o2.x, o2.y, o2.x, o2.y, false, false, false, false, 0, null), t4;
          }
          return {
            type: e3
          };
        }
        return {
          addClass: function(e3, t3) {
            e3.classList ? e3.classList.add(t3) : 0 > e3.className.indexOf(t3) && (e3.className += " " + t3);
          },
          cloneMouseEvent: o,
          cloneTouchEvent: function(e3) {
            let t3 = (e4) => {
              let t4 = [];
              for (let i4 = 0; i4 < e4.length; ++i4) {
                let s2 = e4.item(i4);
                s2 && t4.push(s2);
              }
              return t4;
            };
            if ("function" == typeof s.TouchEvent) {
              let i4 = new s.TouchEvent(e3.type, {
                touches: t3(e3.touches),
                targetTouches: t3(e3.targetTouches),
                changedTouches: t3(e3.changedTouches),
                ctrlKey: e3.ctrlKey,
                shiftKey: e3.shiftKey,
                altKey: e3.altKey,
                metaKey: e3.metaKey,
                bubbles: e3.bubbles,
                cancelable: e3.cancelable,
                composed: e3.composed,
                detail: e3.detail,
                view: e3.view
              });
              return e3.defaultPrevented && i4.preventDefault(), i4;
            }
            let i3 = o(e3);
            return i3.touches = e3.touches, i3.changedTouches = e3.changedTouches, i3.targetTouches = e3.targetTouches, i3;
          },
          escapeStringForHTML: function(e3) {
            return e3.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#x27;").replace(/\//g, "&#x2F;");
          },
          getElement: function(e3) {
            return i2.getElementById(e3);
          },
          getFakeMouseEvent: a,
          getHeadingTagNameForElement: function(e3) {
            let t3 = (e4) => "h" + Math.min(6, parseInt(e4.slice(1), 10) + 1), i3 = (e4) => /^H[1-6]$/i.test(e4), s2 = (e4) => {
              let t4 = e4;
              for (; t4 = t4.previousSibling; ) {
                let e5 = t4.tagName || "";
                if (i3(e5)) return e5;
              }
              return "";
            }, n2 = (e4) => {
              let r2 = s2(e4);
              if (r2) return t3(r2);
              let o2 = e4.parentElement;
              if (!o2) return "p";
              let a2 = o2.tagName;
              return i3(a2) ? t3(a2) : n2(o2);
            };
            return n2(e3);
          },
          removeChildNodes: function(e3) {
            for (; e3.lastChild; ) e3.removeChild(e3.lastChild);
          },
          removeClass: function(e3, t3) {
            e3.classList ? e3.classList.remove(t3) : e3.className = e3.className.replace(RegExp(t3, "g"), "");
          },
          removeElement: function(e3) {
            e3 && e3.parentNode && e3.parentNode.removeChild(e3);
          },
          reverseChildNodes: function(e3) {
            let t3 = e3.childNodes.length;
            for (; t3--; ) e3.appendChild(e3.childNodes[t3]);
          },
          simulatedEventTarget: r,
          stripHTMLTagsFromString: function(e3, t3 = false) {
            return "string" == typeof e3 ? t3 ? e3.replace(/<\/?[^>]+(>|$)/g, "") : e3.replace(/<\/?(?!\s)[^>]+(>|$)/g, "") : e3;
          },
          visuallyHideElement: function(e3) {
            n(e3, {
              position: "absolute",
              width: "1px",
              height: "1px",
              overflow: "hidden",
              whiteSpace: "nowrap",
              clip: "rect(1px, 1px, 1px, 1px)",
              marginTop: "-3px",
              "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=1)",
              filter: "alpha(opacity=1)",
              opacity: 0.01
            });
          }
        };
      }), i(t, "Accessibility/A11yI18n.js", [t["Core/Templating.js"], t["Core/Utilities.js"]], function(e2, t2) {
        var i2;
        let {
          format: s
        } = e2, {
          getNestedProperty: n,
          pick: r
        } = t2;
        return function(e3) {
          function t3(e4, t4, i4) {
            let o = (e5, t5) => {
              let i5 = e5.slice(t5 || 0), s2 = i5.indexOf("{"), n2 = i5.indexOf("}");
              if (s2 > -1 && n2 > s2) return {
                statement: i5.substring(s2 + 1, n2),
                begin: t5 + s2 + 1,
                end: t5 + n2
              };
            }, a = [], l, h, c = 0;
            do
              l = o(e4, c), (h = e4.substring(c, l && l.begin - 1)).length && a.push({
                value: h,
                type: "constant"
              }), l && a.push({
                value: l.statement,
                type: "statement"
              }), c = l ? l.end + 1 : c + 1;
            while (l);
            return a.forEach((e5) => {
              "statement" === e5.type && (e5.value = function(e6, t5) {
                let i5, s2;
                let o2 = e6.indexOf("#each("), a2 = e6.indexOf("#plural("), l2 = e6.indexOf("["), h2 = e6.indexOf("]");
                if (o2 > -1) {
                  let r2 = e6.slice(o2).indexOf(")") + o2, a3 = e6.substring(0, o2), l3 = e6.substring(r2 + 1), h3 = e6.substring(o2 + 6, r2).split(","), c3 = Number(h3[1]), d;
                  if (s2 = "", i5 = n(h3[0], t5)) {
                    d = (c3 = isNaN(c3) ? i5.length : c3) < 0 ? i5.length + c3 : Math.min(c3, i5.length);
                    for (let e7 = 0; e7 < d; ++e7) s2 += a3 + i5[e7] + l3;
                  }
                  return s2.length ? s2 : "";
                }
                if (a2 > -1) {
                  var c2;
                  let i6 = e6.slice(a2).indexOf(")") + a2, o3 = e6.substring(a2 + 8, i6).split(",");
                  switch (Number(n(o3[0], t5))) {
                    case 0:
                      s2 = r(o3[4], o3[1]);
                      break;
                    case 1:
                      s2 = r(o3[2], o3[1]);
                      break;
                    case 2:
                      s2 = r(o3[3], o3[1]);
                      break;
                    default:
                      s2 = o3[1];
                  }
                  return s2 ? (c2 = s2).trim && c2.trim() || c2.replace(/^\s+|\s+$/g, "") : "";
                }
                if (l2 > -1) {
                  let s3;
                  let r2 = e6.substring(0, l2), o3 = Number(e6.substring(l2 + 1, h2));
                  return i5 = n(r2, t5), !isNaN(o3) && i5 && (o3 < 0 ? void 0 === (s3 = i5[i5.length + o3]) && (s3 = i5[0]) : void 0 === (s3 = i5[o3]) && (s3 = i5[i5.length - 1])), void 0 !== s3 ? s3 : "";
                }
                return "{" + e6 + "}";
              }(e5.value, t4));
            }), s(a.reduce((e5, t5) => e5 + t5.value, ""), t4, i4);
          }
          function i3(e4, i4) {
            let s2 = e4.split("."), n2 = this.options.lang, r2 = 0;
            for (; r2 < s2.length; ++r2) n2 = n2 && n2[s2[r2]];
            return "string" == typeof n2 ? t3(n2, i4, this) : "";
          }
          e3.compose = function(e4) {
            let t4 = e4.prototype;
            t4.langFormat || (t4.langFormat = i3);
          }, e3.i18nFormat = t3;
        }(i2 || (i2 = {})), i2;
      }), i(t, "Accessibility/Utils/ChartUtilities.js", [t["Core/Globals.js"], t["Accessibility/Utils/HTMLUtilities.js"], t["Core/Utilities.js"]], function(e2, t2, i2) {
        let {
          doc: s
        } = e2, {
          stripHTMLTagsFromString: n
        } = t2, {
          defined: r,
          find: o,
          fireEvent: a
        } = i2;
        function l(e3) {
          if (e3.points && e3.points.length) {
            let t3 = o(e3.points, (e4) => !!e4.graphic);
            return t3 && t3.graphic && t3.graphic.element;
          }
        }
        function h(e3) {
          let t3 = l(e3);
          return t3 && t3.parentNode || e3.graph && e3.graph.element || e3.group && e3.group.element;
        }
        return {
          fireEventOnWrappedOrUnwrappedElement: function e3(t3, i3) {
            let n2 = i3.type, r2 = t3.hcEvents;
            s.createEvent && (t3.dispatchEvent || t3.fireEvent) ? t3.dispatchEvent ? t3.dispatchEvent(i3) : t3.fireEvent(n2, i3) : r2 && r2[n2] ? a(t3, n2, i3) : t3.element && e3(t3.element, i3);
          },
          getChartTitle: function(e3) {
            return n(e3.options.title.text || e3.langFormat("accessibility.defaultChartTitle", {
              chart: e3
            }), e3.renderer.forExport);
          },
          getAxisDescription: function(e3) {
            return e3 && (e3.options.accessibility?.description || e3.axisTitle?.textStr || e3.options.id || e3.categories && "categories" || e3.dateTime && "Time" || "values");
          },
          getAxisRangeDescription: function(e3) {
            let t3 = e3.options || {};
            return t3.accessibility && void 0 !== t3.accessibility.rangeDescription ? t3.accessibility.rangeDescription : e3.categories ? function(e4) {
              let t4 = e4.chart;
              return e4.dataMax && e4.dataMin ? t4.langFormat("accessibility.axis.rangeCategories", {
                chart: t4,
                axis: e4,
                numCategories: e4.dataMax - e4.dataMin + 1
              }) : "";
            }(e3) : e3.dateTime && (0 === e3.min || 0 === e3.dataMin) ? function(e4) {
              let t4 = e4.chart, i3 = {}, s2 = e4.dataMin || e4.min || 0, n2 = e4.dataMax || e4.max || 0, r2 = "Seconds";
              i3.Seconds = (n2 - s2) / 1e3, i3.Minutes = i3.Seconds / 60, i3.Hours = i3.Minutes / 60, i3.Days = i3.Hours / 24, ["Minutes", "Hours", "Days"].forEach(function(e5) {
                i3[e5] > 2 && (r2 = e5);
              });
              let o2 = i3[r2].toFixed("Seconds" !== r2 && "Minutes" !== r2 ? 1 : 0);
              return t4.langFormat("accessibility.axis.timeRange" + r2, {
                chart: t4,
                axis: e4,
                range: o2.replace(".0", "")
              });
            }(e3) : function(e4) {
              let t4 = e4.chart, i3 = t4.options, s2 = i3 && i3.accessibility && i3.accessibility.screenReaderSection.axisRangeDateFormat || "", n2 = {
                min: e4.dataMin || e4.min || 0,
                max: e4.dataMax || e4.max || 0
              }, r2 = function(i4) {
                return e4.dateTime ? t4.time.dateFormat(s2, n2[i4]) : n2[i4].toString();
              };
              return t4.langFormat("accessibility.axis.rangeFromTo", {
                chart: t4,
                axis: e4,
                rangeFrom: r2("min"),
                rangeTo: r2("max")
              });
            }(e3);
          },
          getPointFromXY: function(e3, t3, i3) {
            let s2 = e3.length, n2;
            for (; s2--; ) if (n2 = o(e3[s2].points || [], function(e4) {
              return e4.x === t3 && e4.y === i3;
            })) return n2;
          },
          getSeriesFirstPointElement: l,
          getSeriesFromName: function(e3, t3) {
            return t3 ? (e3.series || []).filter(function(e4) {
              return e4.name === t3;
            }) : e3.series;
          },
          getSeriesA11yElement: h,
          unhideChartElementFromAT: function e3(t3, i3) {
            i3.setAttribute("aria-hidden", false), i3 !== t3.renderTo && i3.parentNode && i3.parentNode !== s.body && (Array.prototype.forEach.call(i3.parentNode.childNodes, function(e4) {
              e4.hasAttribute("aria-hidden") || e4.setAttribute("aria-hidden", true);
            }), e3(t3, i3.parentNode));
          },
          hideSeriesFromAT: function(e3) {
            let t3 = h(e3);
            t3 && t3.setAttribute("aria-hidden", true);
          },
          scrollAxisToPoint: function(e3) {
            let t3 = e3.series.xAxis, i3 = e3.series.yAxis, s2 = t3 && t3.scrollbar ? t3 : i3, n2 = s2 && s2.scrollbar;
            if (n2 && r(n2.to) && r(n2.from)) {
              let t4 = n2.to - n2.from, i4 = function(e4, t5) {
                if (!r(e4.dataMin) || !r(e4.dataMax)) return 0;
                let i5 = e4.toPixels(e4.dataMin), s3 = e4.toPixels(e4.dataMax), n3 = "xAxis" === e4.coll ? "x" : "y";
                return (e4.toPixels(t5[n3] || 0) - i5) / (s3 - i5);
              }(s2, e3);
              n2.updatePosition(i4 - t4 / 2, i4 + t4 / 2), a(n2, "changed", {
                from: n2.from,
                to: n2.to,
                trigger: "scrollbar",
                DOMEvent: null
              });
            }
          }
        };
      }), i(t, "Accessibility/Utils/DOMElementProvider.js", [t["Core/Globals.js"], t["Accessibility/Utils/HTMLUtilities.js"]], function(e2, t2) {
        let {
          doc: i2
        } = e2, {
          removeElement: s
        } = t2;
        return class {
          constructor() {
            this.elements = [];
          }
          createElement() {
            let e3 = i2.createElement.apply(i2, arguments);
            return this.elements.push(e3), e3;
          }
          removeElement(e3) {
            s(e3), this.elements.splice(this.elements.indexOf(e3), 1);
          }
          destroyCreatedElements() {
            this.elements.forEach(function(e3) {
              s(e3);
            }), this.elements = [];
          }
        };
      }), i(t, "Accessibility/Utils/EventProvider.js", [t["Core/Globals.js"], t["Core/Utilities.js"]], function(e2, t2) {
        let {
          addEvent: i2
        } = t2;
        return class {
          constructor() {
            this.eventRemovers = [];
          }
          addEvent() {
            let t3 = i2.apply(e2, arguments);
            return this.eventRemovers.push({
              element: arguments[0],
              remover: t3
            }), t3;
          }
          removeEvent(e3) {
            let t3 = this.eventRemovers.map((e4) => e4.remover).indexOf(e3);
            this.eventRemovers[t3].remover(), this.eventRemovers.splice(t3, 1);
          }
          removeAddedEvents() {
            this.eventRemovers.map((e3) => e3.remover).forEach((e3) => e3()), this.eventRemovers = [];
          }
        };
      }), i(t, "Accessibility/AccessibilityComponent.js", [t["Accessibility/Utils/ChartUtilities.js"], t["Accessibility/Utils/DOMElementProvider.js"], t["Accessibility/Utils/EventProvider.js"], t["Accessibility/Utils/HTMLUtilities.js"]], function(e2, t2, i2, s) {
        let {
          fireEventOnWrappedOrUnwrappedElement: n
        } = e2, {
          getFakeMouseEvent: r
        } = s;
        return class {
          destroy() {
          }
          getKeyboardNavigation() {
            return [];
          }
          init() {
          }
          onChartRender() {
          }
          onChartUpdate() {
          }
          initBase(e3, s2) {
            this.chart = e3, this.eventProvider = new i2(), this.domElementProvider = new t2(), this.proxyProvider = s2, this.keyCodes = {
              left: 37,
              right: 39,
              up: 38,
              down: 40,
              enter: 13,
              space: 32,
              esc: 27,
              tab: 9,
              pageUp: 33,
              pageDown: 34,
              end: 35,
              home: 36
            };
          }
          addEvent(e3, t3, i3, s2) {
            return this.eventProvider.addEvent(e3, t3, i3, s2);
          }
          createElement(e3, t3) {
            return this.domElementProvider.createElement(e3, t3);
          }
          fakeClickEvent(e3) {
            n(e3, r("click"));
          }
          destroyBase() {
            this.domElementProvider.destroyCreatedElements(), this.eventProvider.removeAddedEvents();
          }
        };
      }), i(t, "Accessibility/KeyboardNavigationHandler.js", [t["Core/Utilities.js"]], function(e2) {
        let {
          find: t2
        } = e2;
        return class {
          constructor(e3, t3) {
            this.chart = e3, this.keyCodeMap = t3.keyCodeMap || [], this.validate = t3.validate, this.init = t3.init, this.terminate = t3.terminate, this.response = {
              success: 1,
              prev: 2,
              next: 3,
              noHandler: 4,
              fail: 5
            };
          }
          run(e3) {
            let i2 = e3.which || e3.keyCode, s = this.response.noHandler, n = t2(this.keyCodeMap, function(e4) {
              return e4[0].indexOf(i2) > -1;
            });
            return n ? s = n[1].call(this, i2, e3) : 9 === i2 && (s = this.response[e3.shiftKey ? "prev" : "next"]), s;
          }
        };
      }), i(t, "Accessibility/Components/ContainerComponent.js", [t["Accessibility/AccessibilityComponent.js"], t["Accessibility/KeyboardNavigationHandler.js"], t["Accessibility/Utils/ChartUtilities.js"], t["Core/Globals.js"], t["Accessibility/Utils/HTMLUtilities.js"]], function(e2, t2, i2, s, n) {
        let {
          unhideChartElementFromAT: r,
          getChartTitle: o
        } = i2, {
          doc: a
        } = s, {
          stripHTMLTagsFromString: l
        } = n;
        return class extends e2 {
          onChartUpdate() {
            this.handleSVGTitleElement(), this.setSVGContainerLabel(), this.setGraphicContainerAttrs(), this.setRenderToAttrs(), this.makeCreditsAccessible();
          }
          handleSVGTitleElement() {
            let e3 = this.chart, t3 = "highcharts-title-" + e3.index, i3 = l(e3.langFormat("accessibility.svgContainerTitle", {
              chartTitle: o(e3)
            }));
            if (i3.length) {
              let s2 = this.svgTitleElement = this.svgTitleElement || a.createElementNS("http://www.w3.org/2000/svg", "title");
              s2.textContent = i3, s2.id = t3, e3.renderTo.insertBefore(s2, e3.renderTo.firstChild);
            }
          }
          setSVGContainerLabel() {
            let e3 = this.chart, t3 = e3.langFormat("accessibility.svgContainerLabel", {
              chartTitle: o(e3)
            });
            e3.renderer.box && t3.length && e3.renderer.box.setAttribute("aria-label", t3);
          }
          setGraphicContainerAttrs() {
            let e3 = this.chart, t3 = e3.langFormat("accessibility.graphicContainerLabel", {
              chartTitle: o(e3)
            });
            t3.length && e3.container.setAttribute("aria-label", t3);
          }
          setRenderToAttrs() {
            let e3 = this.chart, t3 = "disabled" !== e3.options.accessibility.landmarkVerbosity, i3 = e3.langFormat("accessibility.chartContainerLabel", {
              title: o(e3),
              chart: e3
            });
            i3 && (e3.renderTo.setAttribute("role", t3 ? "region" : "group"), e3.renderTo.setAttribute("aria-label", i3));
          }
          makeCreditsAccessible() {
            let e3 = this.chart, t3 = e3.credits;
            t3 && (t3.textStr && t3.element.setAttribute("aria-label", e3.langFormat("accessibility.credits", {
              creditsStr: l(t3.textStr, e3.renderer.forExport)
            })), r(e3, t3.element));
          }
          getKeyboardNavigation() {
            let e3 = this.chart;
            return new t2(e3, {
              keyCodeMap: [],
              validate: function() {
                return true;
              },
              init: function() {
                let t3 = e3.accessibility;
                t3 && t3.keyboardNavigation.tabindexContainer.focus();
              }
            });
          }
          destroy() {
            this.chart.renderTo.setAttribute("aria-hidden", true);
          }
        };
      }), i(t, "Accessibility/FocusBorder.js", [t["Core/Utilities.js"]], function(e2) {
        var t2;
        let {
          addEvent: i2,
          pick: s
        } = e2;
        return function(e3) {
          let t3 = ["x", "y", "transform", "width", "height", "r", "d", "stroke-width"];
          function n() {
            let e4 = this.focusElement, t4 = this.options.accessibility.keyboardNavigation.focusBorder;
            e4 && (e4.removeFocusBorder(), t4.enabled && e4.addFocusBorder(t4.margin, {
              stroke: t4.style.color,
              strokeWidth: t4.style.lineWidth,
              r: t4.style.borderRadius
            }));
          }
          function r(e4, t4) {
            let s2 = this.options.accessibility.keyboardNavigation.focusBorder, n2 = t4 || e4.element;
            n2 && n2.focus && (n2.hcEvents && n2.hcEvents.focusin || i2(n2, "focusin", function() {
            }), n2.focus(), s2.hideBrowserFocusOutline && (n2.style.outline = "none")), this.focusElement && this.focusElement.removeFocusBorder(), this.focusElement = e4, this.renderFocusBorder();
          }
          function o(e4, i3) {
            this.focusBorder && this.removeFocusBorder();
            let n2 = this.getBBox(), r2 = s(e4, 3), o2 = this.parentGroup, a2 = this.scaleX || o2 && o2.scaleX, l = this.scaleY || o2 && o2.scaleY, h = (a2 ? !l : l) ? Math.abs(a2 || l || 1) : (Math.abs(a2 || 1) + Math.abs(l || 1)) / 2;
            n2.x += this.translateX ? this.translateX : 0, n2.y += this.translateY ? this.translateY : 0;
            let c = n2.x - r2, d = n2.y - r2, u = n2.width + 2 * r2, p = n2.height + 2 * r2, g = !!this.text;
            if ("text" === this.element.nodeName || g) {
              let e5, t4;
              let i4 = !!this.rotation, s2 = g ? {
                x: i4 ? 1 : 0,
                y: 0
              } : (e5 = 0, t4 = 0, "middle" === this.attr("text-anchor") ? e5 = t4 = 0.5 : this.rotation ? e5 = 0.25 : t4 = 0.75, {
                x: e5,
                y: t4
              }), o3 = +this.attr("x"), a3 = +this.attr("y");
              if (isNaN(o3) || (c = o3 - n2.width * s2.x - r2), isNaN(a3) || (d = a3 - n2.height * s2.y - r2), g && i4) {
                let e6 = u;
                u = p, p = e6, isNaN(o3) || (c = o3 - n2.height * s2.x - r2), isNaN(a3) || (d = a3 - n2.width * s2.y - r2);
              }
            }
            this.focusBorder = this.renderer.rect(c, d, u, p, parseInt((i3 && i3.r || 0).toString(), 10) / h).addClass("highcharts-focus-border").attr({
              zIndex: 99
            }).add(o2), this.renderer.styledMode || this.focusBorder.attr({
              stroke: i3 && i3.stroke,
              "stroke-width": (i3 && i3.strokeWidth || 0) / h
            }), function(e5, ...i4) {
              e5.focusBorderUpdateHooks || (e5.focusBorderUpdateHooks = {}, t3.forEach((t4) => {
                let s2 = t4 + "Setter", n3 = e5[s2] || e5._defaultSetter;
                e5.focusBorderUpdateHooks[s2] = n3, e5[s2] = function() {
                  let t5 = n3.apply(e5, arguments);
                  return e5.addFocusBorder.apply(e5, i4), t5;
                };
              }));
            }(this, e4, i3), function(e5) {
              if (e5.focusBorderDestroyHook) return;
              let t4 = e5.destroy;
              e5.destroy = function() {
                return e5.focusBorder && e5.focusBorder.destroy && e5.focusBorder.destroy(), t4.apply(e5, arguments);
              }, e5.focusBorderDestroyHook = t4;
            }(this);
          }
          function a() {
            var e4;
            e4 = this, e4.focusBorderUpdateHooks && (Object.keys(e4.focusBorderUpdateHooks).forEach((t4) => {
              let i3 = e4.focusBorderUpdateHooks[t4];
              i3 === e4._defaultSetter ? delete e4[t4] : e4[t4] = i3;
            }), delete e4.focusBorderUpdateHooks), this.focusBorderDestroyHook && (this.destroy = this.focusBorderDestroyHook, delete this.focusBorderDestroyHook), this.focusBorder && (this.focusBorder.destroy(), delete this.focusBorder);
          }
          e3.compose = function(e4, t4) {
            let i3 = e4.prototype, s2 = t4.prototype;
            i3.renderFocusBorder || (i3.renderFocusBorder = n, i3.setFocusToElement = r), s2.addFocusBorder || (s2.addFocusBorder = o, s2.removeFocusBorder = a);
          };
        }(t2 || (t2 = {})), t2;
      }), i(t, "Accessibility/Utils/Announcer.js", [t["Core/Renderer/HTML/AST.js"], t["Accessibility/Utils/DOMElementProvider.js"], t["Core/Globals.js"], t["Accessibility/Utils/HTMLUtilities.js"], t["Core/Utilities.js"]], function(e2, t2, i2, s, n) {
        let {
          doc: r
        } = i2, {
          addClass: o,
          visuallyHideElement: a
        } = s, {
          attr: l
        } = n;
        return class {
          constructor(e3, i3) {
            this.chart = e3, this.domElementProvider = new t2(), this.announceRegion = this.addAnnounceRegion(i3);
          }
          destroy() {
            this.domElementProvider.destroyCreatedElements();
          }
          announce(t3) {
            e2.setElementHTML(this.announceRegion, t3), this.clearAnnouncementRegionTimer && clearTimeout(this.clearAnnouncementRegionTimer), this.clearAnnouncementRegionTimer = setTimeout(() => {
              this.announceRegion.innerHTML = e2.emptyHTML, delete this.clearAnnouncementRegionTimer;
            }, 3e3);
          }
          addAnnounceRegion(e3) {
            let t3 = this.chart.announcerContainer || this.createAnnouncerContainer(), i3 = this.domElementProvider.createElement("div");
            return l(i3, {
              "aria-hidden": false,
              "aria-live": e3,
              "aria-atomic": true
            }), this.chart.styledMode ? o(i3, "highcharts-visually-hidden") : a(i3), t3.appendChild(i3), i3;
          }
          createAnnouncerContainer() {
            let e3 = this.chart, t3 = r.createElement("div");
            return l(t3, {
              "aria-hidden": false,
              class: "highcharts-announcer-container"
            }), t3.style.position = "relative", e3.renderTo.insertBefore(t3, e3.renderTo.firstChild), e3.announcerContainer = t3, t3;
          }
        };
      }), i(t, "Accessibility/Components/AnnotationsA11y.js", [t["Accessibility/Utils/HTMLUtilities.js"]], function(e2) {
        let {
          escapeStringForHTML: t2,
          stripHTMLTagsFromString: i2
        } = e2;
        function s(e3) {
          return (e3.annotations || []).reduce((e4, t3) => (t3.options && false !== t3.options.visible && (e4 = e4.concat(t3.labels)), e4), []);
        }
        function n(e3) {
          return e3.options && e3.options.accessibility && e3.options.accessibility.description || e3.graphic && e3.graphic.text && e3.graphic.text.textStr || "";
        }
        function r(e3) {
          let t3 = e3.options && e3.options.accessibility && e3.options.accessibility.description;
          if (t3) return t3;
          let i3 = e3.chart, s2 = n(e3), r2 = e3.points, o2 = (e4) => e4.graphic && e4.graphic.element && e4.graphic.element.getAttribute("aria-label") || "", a = r2.filter((e4) => !!e4.graphic).map((e4) => {
            let t4 = e4.accessibility && e4.accessibility.valueDescription || o2(e4), i4 = e4 && e4.series.name || "";
            return (i4 ? i4 + ", " : "") + "data point " + t4;
          }).filter((e4) => !!e4), l = a.length, h = l > 1 ? "MultiplePoints" : l ? "SinglePoint" : "NoPoints", c = {
            annotationText: s2,
            annotation: e3,
            numPoints: l,
            annotationPoint: a[0],
            additionalAnnotationPoints: a.slice(1)
          };
          return i3.langFormat("accessibility.screenReaderSection.annotations.description" + h, c);
        }
        function o(e3) {
          return s(e3).map((s2) => {
            let n2 = t2(i2(r(s2), e3.renderer.forExport));
            return n2 ? `<li>${n2}</li>` : "";
          });
        }
        return {
          getAnnotationsInfoHTML: function(e3) {
            let t3 = e3.annotations;
            if (!(t3 && t3.length)) return "";
            let i3 = o(e3);
            return `<ul style="list-style-type: none">${i3.join(" ")}</ul>`;
          },
          getAnnotationLabelDescription: r,
          getAnnotationListItems: o,
          getPointAnnotationTexts: function(e3) {
            let t3 = s(e3.series.chart).filter((t4) => t4.points.indexOf(e3) > -1);
            return t3.length ? t3.map((e4) => `${n(e4)}`) : [];
          }
        };
      }), i(t, "Accessibility/Components/InfoRegionsComponent.js", [t["Accessibility/A11yI18n.js"], t["Accessibility/AccessibilityComponent.js"], t["Accessibility/Utils/Announcer.js"], t["Accessibility/Components/AnnotationsA11y.js"], t["Core/Renderer/HTML/AST.js"], t["Accessibility/Utils/ChartUtilities.js"], t["Core/Templating.js"], t["Core/Globals.js"], t["Accessibility/Utils/HTMLUtilities.js"], t["Core/Utilities.js"]], function(e2, t2, i2, s, n, r, o, a, l, h) {
        let {
          getAnnotationsInfoHTML: c
        } = s, {
          getAxisDescription: d,
          getAxisRangeDescription: u,
          getChartTitle: p,
          unhideChartElementFromAT: g
        } = r, {
          format: m
        } = o, {
          doc: b
        } = a, {
          addClass: y,
          getElement: f,
          getHeadingTagNameForElement: x,
          stripHTMLTagsFromString: v,
          visuallyHideElement: A
        } = l, {
          attr: C,
          pick: w,
          replaceNested: E
        } = h;
        function T(e3) {
          return E(e3, [/<([\w\-.:!]+)\b[^<>]*>\s*<\/\1>/g, ""]);
        }
        return class extends t2 {
          constructor() {
            super(...arguments), this.screenReaderSections = {};
          }
          init() {
            let e3 = this.chart, t3 = this;
            this.initRegionsDefinitions(), this.addEvent(e3, "aftergetTableAST", function(e4) {
              t3.onDataTableCreated(e4);
            }), this.addEvent(e3, "afterViewData", function(e4) {
              e4.wasHidden && (t3.dataTableDiv = e4.element, setTimeout(function() {
                t3.focusDataTable();
              }, 300));
            }), this.addEvent(e3, "afterHideData", function() {
              t3.viewDataTableButton && t3.viewDataTableButton.setAttribute("aria-expanded", "false");
            }), e3.exporting && this.addEvent(e3, "afterPrint", function() {
              t3.updateAllScreenReaderSections();
            }), this.announcer = new i2(e3, "assertive");
          }
          initRegionsDefinitions() {
            let e3 = this, t3 = this.chart.options.accessibility;
            this.screenReaderSections = {
              before: {
                element: null,
                buildContent: function(i3) {
                  let s2 = t3.screenReaderSection.beforeChartFormatter;
                  return s2 ? s2(i3) : e3.defaultBeforeChartFormatter(i3);
                },
                insertIntoDOM: function(e4, t4) {
                  t4.renderTo.insertBefore(e4, t4.renderTo.firstChild);
                },
                afterInserted: function() {
                  void 0 !== e3.sonifyButtonId && e3.initSonifyButton(e3.sonifyButtonId), void 0 !== e3.dataTableButtonId && e3.initDataTableButton(e3.dataTableButtonId);
                }
              },
              after: {
                element: null,
                buildContent: function(i3) {
                  let s2 = t3.screenReaderSection.afterChartFormatter;
                  return s2 ? s2(i3) : e3.defaultAfterChartFormatter();
                },
                insertIntoDOM: function(e4, t4) {
                  t4.renderTo.insertBefore(e4, t4.container.nextSibling);
                },
                afterInserted: function() {
                  e3.chart.accessibility && t3.keyboardNavigation.enabled && e3.chart.accessibility.keyboardNavigation.updateExitAnchor();
                }
              }
            };
          }
          onChartRender() {
            this.linkedDescriptionElement = this.getLinkedDescriptionElement(), this.setLinkedDescriptionAttrs(), this.updateAllScreenReaderSections();
          }
          updateAllScreenReaderSections() {
            let e3 = this;
            Object.keys(this.screenReaderSections).forEach(function(t3) {
              e3.updateScreenReaderSection(t3);
            });
          }
          getLinkedDescriptionElement() {
            let e3 = this.chart.options.accessibility.linkedDescription;
            if (!e3) return;
            if ("string" != typeof e3) return e3;
            let t3 = m(e3, this.chart), i3 = b.querySelectorAll(t3);
            if (1 === i3.length) return i3[0];
          }
          setLinkedDescriptionAttrs() {
            let e3 = this.linkedDescriptionElement;
            e3 && (e3.setAttribute("aria-hidden", "true"), y(e3, "highcharts-linked-description"));
          }
          updateScreenReaderSection(e3) {
            let t3 = this.chart, i3 = this.screenReaderSections[e3], s2 = i3.buildContent(t3), r2 = i3.element = i3.element || this.createElement("div"), o2 = r2.firstChild || this.createElement("div");
            s2 ? (this.setScreenReaderSectionAttribs(r2, e3), n.setElementHTML(o2, s2), r2.appendChild(o2), i3.insertIntoDOM(r2, t3), t3.styledMode ? y(o2, "highcharts-visually-hidden") : A(o2), g(t3, o2), i3.afterInserted && i3.afterInserted()) : (r2.parentNode && r2.parentNode.removeChild(r2), i3.element = null);
          }
          setScreenReaderSectionAttribs(e3, t3) {
            let i3 = this.chart, s2 = i3.langFormat("accessibility.screenReaderSection." + t3 + "RegionLabel", {
              chart: i3,
              chartTitle: p(i3)
            });
            C(e3, {
              id: `highcharts-screen-reader-region-${t3}-${i3.index}`,
              "aria-label": s2 || void 0
            }), e3.style.position = "relative", s2 && e3.setAttribute("role", "all" === i3.options.accessibility.landmarkVerbosity ? "region" : "group");
          }
          defaultBeforeChartFormatter() {
            let t3 = this.chart, i3 = t3.options.accessibility.screenReaderSection.beforeChartFormat;
            if (!i3) return "";
            let s2 = this.getAxesDescription(), n2 = t3.sonify && t3.options.sonification && t3.options.sonification.enabled, r2 = "highcharts-a11y-sonify-data-btn-" + t3.index, o2 = "hc-linkto-highcharts-data-table-" + t3.index, a2 = c(t3), l2 = t3.langFormat("accessibility.screenReaderSection.annotations.heading", {
              chart: t3
            }), h2 = {
              headingTagName: x(t3.renderTo),
              chartTitle: p(t3),
              typeDescription: this.getTypeDescriptionText(),
              chartSubtitle: this.getSubtitleText(),
              chartLongdesc: this.getLongdescText(),
              xAxisDescription: s2.xAxis,
              yAxisDescription: s2.yAxis,
              playAsSoundButton: n2 ? this.getSonifyButtonText(r2) : "",
              viewTableButton: t3.getCSV ? this.getDataTableButtonText(o2) : "",
              annotationsTitle: a2 ? l2 : "",
              annotationsList: a2
            }, d2 = e2.i18nFormat(i3, h2, t3);
            return this.dataTableButtonId = o2, this.sonifyButtonId = r2, T(d2);
          }
          defaultAfterChartFormatter() {
            let t3 = this.chart, i3 = t3.options.accessibility.screenReaderSection.afterChartFormat;
            if (!i3) return "";
            let s2 = {
              endOfChartMarker: this.getEndOfChartMarkerText()
            };
            return T(e2.i18nFormat(i3, s2, t3));
          }
          getLinkedDescription() {
            let e3 = this.linkedDescriptionElement;
            return v(e3 && e3.innerHTML || "", this.chart.renderer.forExport);
          }
          getLongdescText() {
            let e3 = this.chart.options, t3 = e3.caption, i3 = t3 && t3.text, s2 = this.getLinkedDescription();
            return e3.accessibility.description || s2 || i3 || "";
          }
          getTypeDescriptionText() {
            let e3 = this.chart;
            return e3.types ? e3.options.accessibility.typeDescription || function(e4, t3) {
              let i3 = t3[0], s2 = e4.series && e4.series[0] || {}, n2 = e4.mapView && e4.mapView.geoMap && e4.mapView.geoMap.title, r2 = {
                numSeries: e4.series.length,
                numPoints: s2.points && s2.points.length,
                chart: e4,
                mapTitle: n2
              };
              return i3 ? "map" === i3 || "tiledwebmap" === i3 ? r2.mapTitle ? e4.langFormat("accessibility.chartTypes.mapTypeDescription", r2) : e4.langFormat("accessibility.chartTypes.unknownMap", r2) : e4.types.length > 1 ? e4.langFormat("accessibility.chartTypes.combinationChart", r2) : function(e5, t4, i4) {
                let s3 = t4[0], n3 = e5.langFormat("accessibility.seriesTypeDescriptions." + s3, i4), r3 = e5.series && e5.series.length < 2 ? "Single" : "Multiple";
                return (e5.langFormat("accessibility.chartTypes." + s3 + r3, i4) || e5.langFormat("accessibility.chartTypes.default" + r3, i4)) + (n3 ? " " + n3 : "");
              }(e4, t3, r2) : e4.langFormat("accessibility.chartTypes.emptyChart", r2);
            }(e3, e3.types) : "";
          }
          getDataTableButtonText(e3) {
            let t3 = this.chart;
            return '<button id="' + e3 + '">' + t3.langFormat("accessibility.table.viewAsDataTableButtonText", {
              chart: t3,
              chartTitle: p(t3)
            }) + "</button>";
          }
          getSonifyButtonText(e3) {
            let t3 = this.chart;
            return t3.options.sonification && false === t3.options.sonification.enabled ? "" : '<button id="' + e3 + '">' + t3.langFormat("accessibility.sonification.playAsSoundButtonText", {
              chart: t3,
              chartTitle: p(t3)
            }) + "</button>";
          }
          getSubtitleText() {
            let e3 = this.chart.options.subtitle;
            return v(e3 && e3.text || "", this.chart.renderer.forExport);
          }
          getEndOfChartMarkerText() {
            let e3 = f(`highcharts-end-of-chart-marker-${this.chart.index}`);
            if (e3) return e3.outerHTML;
            let t3 = this.chart, i3 = t3.langFormat("accessibility.screenReaderSection.endOfChartMarker", {
              chart: t3
            });
            return '<div id="highcharts-end-of-chart-marker-' + t3.index + '">' + i3 + "</div>";
          }
          onDataTableCreated(e3) {
            let t3 = this.chart;
            if (t3.options.accessibility.enabled) {
              this.viewDataTableButton && this.viewDataTableButton.setAttribute("aria-expanded", "true");
              let i3 = e3.tree.attributes || {};
              i3.tabindex = -1, i3.summary = t3.langFormat("accessibility.table.tableSummary", {
                chart: t3
              }), e3.tree.attributes = i3;
            }
          }
          focusDataTable() {
            let e3 = this.dataTableDiv, t3 = e3 && e3.getElementsByTagName("table")[0];
            t3 && t3.focus && t3.focus();
          }
          initSonifyButton(e3) {
            let t3 = this.sonifyButton = f(e3), i3 = this.chart, s2 = (e4) => {
              t3 && (t3.setAttribute("aria-hidden", "true"), t3.setAttribute("aria-label", "")), e4.preventDefault(), e4.stopPropagation();
              let s3 = i3.langFormat("accessibility.sonification.playAsSoundClickAnnouncement", {
                chart: i3
              });
              this.announcer.announce(s3), setTimeout(() => {
                t3 && (t3.removeAttribute("aria-hidden"), t3.removeAttribute("aria-label")), i3.sonify && i3.sonify();
              }, 1e3);
            };
            t3 && i3 && (t3.setAttribute("tabindex", -1), t3.onclick = function(e4) {
              (i3.options.accessibility && i3.options.accessibility.screenReaderSection.onPlayAsSoundClick || s2).call(this, e4, i3);
            });
          }
          initDataTableButton(e3) {
            let t3 = this.viewDataTableButton = f(e3), i3 = this.chart, s2 = e3.replace("hc-linkto-", "");
            t3 && (C(t3, {
              tabindex: -1,
              "aria-expanded": !!f(s2)
            }), t3.onclick = i3.options.accessibility.screenReaderSection.onViewDataTableClick || function() {
              i3.viewData();
            });
          }
          getAxesDescription() {
            let e3 = this.chart, t3 = function(t4, i4) {
              let s3 = e3[t4];
              return s3.length > 1 || s3[0] && w(s3[0].options.accessibility && s3[0].options.accessibility.enabled, i4);
            }, i3 = !!e3.types && 0 > e3.types.indexOf("map") && 0 > e3.types.indexOf("treemap") && 0 > e3.types.indexOf("tilemap"), s2 = !!e3.hasCartesianSeries, n2 = t3("xAxis", !e3.angular && s2 && i3), r2 = t3("yAxis", s2 && i3), o2 = {};
            return n2 && (o2.xAxis = this.getAxisDescriptionText("xAxis")), r2 && (o2.yAxis = this.getAxisDescriptionText("yAxis")), o2;
          }
          getAxisDescriptionText(e3) {
            let t3 = this.chart, i3 = t3[e3];
            return t3.langFormat("accessibility.axis." + e3 + "Description" + (i3.length > 1 ? "Plural" : "Singular"), {
              chart: t3,
              names: i3.map(function(e4) {
                return d(e4);
              }),
              ranges: i3.map(function(e4) {
                return u(e4);
              }),
              numAxes: i3.length
            });
          }
          destroy() {
            this.announcer && this.announcer.destroy();
          }
        };
      }), i(t, "Accessibility/Components/MenuComponent.js", [t["Core/Utilities.js"], t["Accessibility/AccessibilityComponent.js"], t["Accessibility/KeyboardNavigationHandler.js"], t["Accessibility/Utils/ChartUtilities.js"], t["Accessibility/Utils/HTMLUtilities.js"]], function(e2, t2, i2, s, n) {
        let {
          attr: r
        } = e2, {
          getChartTitle: o,
          unhideChartElementFromAT: a
        } = s, {
          getFakeMouseEvent: l
        } = n;
        function h(e3) {
          return e3.exportSVGElements && e3.exportSVGElements[0];
        }
        class c extends t2 {
          init() {
            let e3 = this.chart, t3 = this;
            this.addEvent(e3, "exportMenuShown", function() {
              t3.onMenuShown();
            }), this.addEvent(e3, "exportMenuHidden", function() {
              t3.onMenuHidden();
            }), this.createProxyGroup();
          }
          onMenuHidden() {
            let e3 = this.chart.exportContextMenu;
            e3 && e3.setAttribute("aria-hidden", "true"), this.setExportButtonExpandedState("false");
          }
          onMenuShown() {
            let e3 = this.chart, t3 = e3.exportContextMenu;
            t3 && (this.addAccessibleContextMenuAttribs(), a(e3, t3)), this.setExportButtonExpandedState("true");
          }
          setExportButtonExpandedState(e3) {
            this.exportButtonProxy && this.exportButtonProxy.innerElement.setAttribute("aria-expanded", e3);
          }
          onChartRender() {
            let e3 = this.chart, t3 = e3.focusElement, i3 = e3.accessibility;
            this.proxyProvider.clearGroup("chartMenu"), this.proxyMenuButton(), this.exportButtonProxy && t3 && t3 === e3.exportingGroup && (t3.focusBorder ? e3.setFocusToElement(t3, this.exportButtonProxy.innerElement) : i3 && i3.keyboardNavigation.tabindexContainer.focus());
          }
          proxyMenuButton() {
            let e3 = this.chart, t3 = this.proxyProvider, i3 = h(e3);
            (function(e4) {
              let t4 = e4.options.exporting, i4 = h(e4);
              return !!(t4 && false !== t4.enabled && t4.accessibility && t4.accessibility.enabled && i4 && i4.element);
            })(e3) && i3 && (this.exportButtonProxy = t3.addProxyElement("chartMenu", {
              click: i3
            }, "button", {
              "aria-label": e3.langFormat("accessibility.exporting.menuButtonLabel", {
                chart: e3,
                chartTitle: o(e3)
              }),
              "aria-expanded": false,
              title: e3.options.lang.contextButtonTitle || null
            }));
          }
          createProxyGroup() {
            this.chart && this.proxyProvider && this.proxyProvider.addGroup("chartMenu");
          }
          addAccessibleContextMenuAttribs() {
            let e3 = this.chart, t3 = e3.exportDivElements;
            if (t3 && t3.length) {
              t3.forEach((e4) => {
                e4 && ("LI" !== e4.tagName || e4.children && e4.children.length ? e4.setAttribute("aria-hidden", "true") : e4.setAttribute("tabindex", -1));
              });
              let i3 = t3[0] && t3[0].parentNode;
              i3 && r(i3, {
                "aria-hidden": void 0,
                "aria-label": e3.langFormat("accessibility.exporting.chartMenuLabel", {
                  chart: e3
                }),
                role: "list"
              });
            }
          }
          getKeyboardNavigation() {
            let e3 = this.keyCodes, t3 = this.chart, s2 = this;
            return new i2(t3, {
              keyCodeMap: [[[e3.left, e3.up], function() {
                return s2.onKbdPrevious(this);
              }], [[e3.right, e3.down], function() {
                return s2.onKbdNext(this);
              }], [[e3.enter, e3.space], function() {
                return s2.onKbdClick(this);
              }]],
              validate: function() {
                return !!t3.exporting && false !== t3.options.exporting.enabled && false !== t3.options.exporting.accessibility.enabled;
              },
              init: function() {
                let e4 = s2.exportButtonProxy, i3 = s2.chart.exportingGroup;
                e4 && i3 && t3.setFocusToElement(i3, e4.innerElement);
              },
              terminate: function() {
                t3.hideExportMenu();
              }
            });
          }
          onKbdPrevious(e3) {
            let t3 = this.chart, i3 = t3.options.accessibility, s2 = e3.response, n2 = t3.highlightedExportItemIx || 0;
            for (; n2--; ) if (t3.highlightExportItem(n2)) return s2.success;
            return i3.keyboardNavigation.wrapAround ? (t3.highlightLastExportItem(), s2.success) : s2.prev;
          }
          onKbdNext(e3) {
            let t3 = this.chart, i3 = t3.options.accessibility, s2 = e3.response;
            for (let e4 = (t3.highlightedExportItemIx || 0) + 1; e4 < t3.exportDivElements.length; ++e4) if (t3.highlightExportItem(e4)) return s2.success;
            return i3.keyboardNavigation.wrapAround ? (t3.highlightExportItem(0), s2.success) : s2.next;
          }
          onKbdClick(e3) {
            let t3 = this.chart, i3 = t3.exportDivElements[t3.highlightedExportItemIx], s2 = h(t3).element;
            return t3.openMenu ? this.fakeClickEvent(i3) : (this.fakeClickEvent(s2), t3.highlightExportItem(0)), e3.response.success;
          }
        }
        return function(e3) {
          function t3() {
            let e4 = h(this);
            if (e4) {
              let t4 = e4.element;
              t4.onclick && t4.onclick(l("click"));
            }
          }
          function i3() {
            let e4 = this.exportDivElements;
            e4 && this.exportContextMenu && this.openMenu && (e4.forEach((e5) => {
              e5 && "highcharts-menu-item" === e5.className && e5.onmouseout && e5.onmouseout(l("mouseout"));
            }), this.highlightedExportItemIx = 0, this.exportContextMenu.hideMenu(), this.container.focus());
          }
          function s2(e4) {
            let t4 = this.exportDivElements && this.exportDivElements[e4], i4 = this.exportDivElements && this.exportDivElements[this.highlightedExportItemIx];
            if (t4 && "LI" === t4.tagName && !(t4.children && t4.children.length)) {
              let s3 = !!(this.renderTo.getElementsByTagName("g")[0] || {}).focus;
              return t4.focus && s3 && t4.focus(), i4 && i4.onmouseout && i4.onmouseout(l("mouseout")), t4.onmouseover && t4.onmouseover(l("mouseover")), this.highlightedExportItemIx = e4, true;
            }
            return false;
          }
          function n2() {
            if (this.exportDivElements) {
              let e4 = this.exportDivElements.length;
              for (; e4--; ) if (this.highlightExportItem(e4)) return true;
            }
            return false;
          }
          e3.compose = function(e4) {
            let r2 = e4.prototype;
            r2.hideExportMenu || (r2.hideExportMenu = i3, r2.highlightExportItem = s2, r2.highlightLastExportItem = n2, r2.showExportMenu = t3);
          };
        }(c || (c = {})), c;
      }), i(t, "Accessibility/KeyboardNavigation.js", [t["Core/Globals.js"], t["Accessibility/Components/MenuComponent.js"], t["Core/Utilities.js"], t["Accessibility/Utils/EventProvider.js"], t["Accessibility/Utils/HTMLUtilities.js"]], function(e2, t2, i2, s, n) {
        let {
          doc: r,
          win: o
        } = e2, {
          addEvent: a,
          defined: l,
          fireEvent: h
        } = i2, {
          getElement: c,
          simulatedEventTarget: d
        } = n;
        class u {
          constructor(e3, t3) {
            this.currentModuleIx = NaN, this.modules = [], this.init(e3, t3);
          }
          init(e3, t3) {
            let i3 = this.eventProvider = new s();
            this.chart = e3, this.components = t3, this.modules = [], this.currentModuleIx = 0, this.update(), i3.addEvent(this.tabindexContainer, "keydown", (e4) => this.onKeydown(e4)), i3.addEvent(this.tabindexContainer, "focus", (e4) => this.onFocus(e4)), ["mouseup", "touchend"].forEach((e4) => i3.addEvent(r, e4, (e5) => this.onMouseUp(e5))), ["mousedown", "touchstart"].forEach((t4) => i3.addEvent(e3.renderTo, t4, () => {
              this.isClickingChart = true;
            }));
          }
          update(e3) {
            let t3 = this.chart.options.accessibility, i3 = t3 && t3.keyboardNavigation, s2 = this.components;
            this.updateContainerTabindex(), i3 && i3.enabled && e3 && e3.length ? (this.modules = e3.reduce(function(e4, t4) {
              let i4 = s2[t4].getKeyboardNavigation();
              return e4.concat(i4);
            }, []), this.updateExitAnchor()) : (this.modules = [], this.currentModuleIx = 0, this.removeExitAnchor());
          }
          updateExitAnchor() {
            let e3 = c(`highcharts-end-of-chart-marker-${this.chart.index}`);
            this.removeExitAnchor(), e3 ? (this.makeElementAnExitAnchor(e3), this.exitAnchor = e3) : this.createExitAnchor();
          }
          move(e3) {
            let t3 = this.modules && this.modules[this.currentModuleIx];
            t3 && t3.terminate && t3.terminate(e3), this.chart.focusElement && this.chart.focusElement.removeFocusBorder(), this.currentModuleIx += e3;
            let i3 = this.modules && this.modules[this.currentModuleIx];
            if (i3) {
              if (i3.validate && !i3.validate()) return this.move(e3);
              if (i3.init) return i3.init(e3), true;
            }
            return this.currentModuleIx = 0, this.exiting = true, e3 > 0 ? this.exitAnchor && this.exitAnchor.focus() : this.tabindexContainer.focus(), false;
          }
          onFocus(e3) {
            let t3 = this.chart, i3 = e3.relatedTarget && t3.container.contains(e3.relatedTarget), s2 = t3.options.accessibility, n2 = s2 && s2.keyboardNavigation;
            if (n2 && n2.enabled && !this.exiting && !this.tabbingInBackwards && !this.isClickingChart && !i3) {
              let e4 = this.getFirstValidModuleIx();
              null !== e4 && (this.currentModuleIx = e4, this.modules[e4].init(1));
            }
            this.keyboardReset = false, this.exiting = false;
          }
          onMouseUp(e3) {
            if (delete this.isClickingChart, !this.keyboardReset && e3.relatedTarget !== d) {
              let t3 = this.chart;
              if (!e3.target || !t3.container.contains(e3.target)) {
                let e4 = this.modules && this.modules[this.currentModuleIx || 0];
                e4 && e4.terminate && e4.terminate(), this.currentModuleIx = 0;
              }
              t3.focusElement && (t3.focusElement.removeFocusBorder(), delete t3.focusElement), this.keyboardReset = true;
            }
          }
          onKeydown(e3) {
            let t3;
            let i3 = e3 || o.event, s2 = this.modules && this.modules.length && this.modules[this.currentModuleIx], n2 = i3.target;
            if ((!n2 || "INPUT" !== n2.nodeName || n2.classList.contains("highcharts-a11y-proxy-element")) && (this.keyboardReset = false, this.exiting = false, s2)) {
              let e4 = s2.run(i3);
              e4 === s2.response.success ? t3 = true : e4 === s2.response.prev ? t3 = this.move(-1) : e4 === s2.response.next && (t3 = this.move(1)), t3 && (i3.preventDefault(), i3.stopPropagation());
            }
          }
          updateContainerTabindex() {
            let e3;
            let t3 = this.chart.options.accessibility, i3 = t3 && t3.keyboardNavigation, s2 = !(i3 && false === i3.enabled), n2 = this.chart, r2 = n2.container;
            n2.renderTo.hasAttribute("tabindex") ? (r2.removeAttribute("tabindex"), e3 = n2.renderTo) : e3 = r2, this.tabindexContainer = e3;
            let o2 = e3.getAttribute("tabindex");
            s2 && !o2 ? e3.setAttribute("tabindex", "0") : s2 || n2.container.removeAttribute("tabindex");
          }
          createExitAnchor() {
            let e3 = this.chart, t3 = this.exitAnchor = r.createElement("div");
            e3.renderTo.appendChild(t3), this.makeElementAnExitAnchor(t3);
          }
          makeElementAnExitAnchor(e3) {
            let t3 = this.tabindexContainer.getAttribute("tabindex") || 0;
            e3.setAttribute("class", "highcharts-exit-anchor"), e3.setAttribute("tabindex", t3), e3.setAttribute("aria-hidden", false), this.addExitAnchorEventsToEl(e3);
          }
          removeExitAnchor() {
            if (this.exitAnchor) {
              let e3 = this.eventProvider.eventRemovers.find((e4) => e4.element === this.exitAnchor);
              e3 && l(e3.remover) && this.eventProvider.removeEvent(e3.remover), this.exitAnchor.parentNode && this.exitAnchor.parentNode.removeChild(this.exitAnchor), delete this.exitAnchor;
            }
          }
          addExitAnchorEventsToEl(e3) {
            let t3 = this.chart, i3 = this;
            this.eventProvider.addEvent(e3, "focus", function(e4) {
              let s2 = e4 || o.event, n2 = !(s2.relatedTarget && t3.container.contains(s2.relatedTarget) || i3.exiting);
              if (t3.focusElement && delete t3.focusElement, n2) {
                if (i3.tabbingInBackwards = true, i3.tabindexContainer.focus(), delete i3.tabbingInBackwards, s2.preventDefault(), i3.modules && i3.modules.length) {
                  i3.currentModuleIx = i3.modules.length - 1;
                  let e5 = i3.modules[i3.currentModuleIx];
                  e5 && e5.validate && !e5.validate() ? i3.move(-1) : e5 && e5.init(-1);
                }
              } else i3.exiting = false;
            });
          }
          getFirstValidModuleIx() {
            let e3 = this.modules.length;
            for (let t3 = 0; t3 < e3; ++t3) {
              let e4 = this.modules[t3];
              if (!e4.validate || e4.validate()) return t3;
            }
            return null;
          }
          destroy() {
            this.removeExitAnchor(), this.eventProvider.removeAddedEvents(), this.chart.container.removeAttribute("tabindex");
          }
        }
        return function(i3) {
          function s2() {
            let e3 = this;
            h(this, "dismissPopupContent", {}, function() {
              e3.tooltip && e3.tooltip.hide(0), e3.hideExportMenu();
            });
          }
          function n2(t3) {
            27 === (t3.which || t3.keyCode) && e2.charts && e2.charts.forEach((e3) => {
              e3 && e3.dismissPopupContent && e3.dismissPopupContent();
            });
          }
          i3.compose = function(e3) {
            t2.compose(e3);
            let i4 = e3.prototype;
            return i4.dismissPopupContent || (i4.dismissPopupContent = s2, a(r, "keydown", n2)), e3;
          };
        }(u || (u = {})), u;
      }), i(t, "Accessibility/Components/LegendComponent.js", [t["Core/Animation/AnimationUtilities.js"], t["Core/Globals.js"], t["Core/Legend/Legend.js"], t["Core/Utilities.js"], t["Accessibility/AccessibilityComponent.js"], t["Accessibility/KeyboardNavigationHandler.js"], t["Accessibility/Utils/ChartUtilities.js"], t["Accessibility/Utils/HTMLUtilities.js"]], function(e2, t2, i2, s, n, r, o, a) {
        let {
          animObject: l
        } = e2, {
          doc: h
        } = t2, {
          addEvent: c,
          fireEvent: d,
          isNumber: u,
          pick: p,
          syncTimeout: g
        } = s, {
          getChartTitle: m
        } = o, {
          stripHTMLTagsFromString: b,
          addClass: y,
          removeClass: f
        } = a;
        function x(e3) {
          let t3 = e3.legend && e3.legend.allItems, i3 = e3.options.legend.accessibility || {}, s2 = e3.colorAxis && e3.colorAxis.some((e4) => !e4.dataClasses || !e4.dataClasses.length);
          return !!(t3 && t3.length && !s2 && false !== i3.enabled);
        }
        function v(e3, t3) {
          let i3 = t3.legendItem || {};
          for (let s2 of (t3.setState(e3 ? "hover" : "", true), ["group", "label", "symbol"])) {
            let t4 = i3[s2], n2 = t4 && t4.element || t4;
            n2 && d(n2, e3 ? "mouseover" : "mouseout");
          }
        }
        class A extends n {
          constructor() {
            super(...arguments), this.highlightedLegendItemIx = NaN, this.proxyGroup = null;
          }
          init() {
            let e3 = this;
            this.recreateProxies(), this.addEvent(i2, "afterScroll", function() {
              this.chart === e3.chart && (e3.proxyProvider.updateGroupProxyElementPositions("legend"), e3.updateLegendItemProxyVisibility(), e3.highlightedLegendItemIx > -1 && this.chart.highlightLegendItem(e3.highlightedLegendItemIx));
            }), this.addEvent(i2, "afterPositionItem", function(t3) {
              this.chart === e3.chart && this.chart.renderer && e3.updateProxyPositionForItem(t3.item);
            }), this.addEvent(i2, "afterRender", function() {
              this.chart === e3.chart && this.chart.renderer && e3.recreateProxies() && g(() => e3.proxyProvider.updateGroupProxyElementPositions("legend"), l(p(this.chart.renderer.globalAnimation, true)).duration);
            });
          }
          updateLegendItemProxyVisibility() {
            let e3;
            let t3 = this.chart, i3 = t3.legend, s2 = i3.allItems || [], n2 = i3.currentPage || 1, r2 = i3.clipHeight || 0;
            s2.forEach((s3) => {
              if (s3.a11yProxyElement) {
                let o2 = i3.pages && i3.pages.length, a2 = s3.a11yProxyElement.element, l2 = false;
                if (e3 = s3.legendItem || {}, o2) {
                  let t4 = e3.pageIx || 0;
                  l2 = (e3.y || 0) + (e3.label ? Math.round(e3.label.getBBox().height) : 0) - i3.pages[t4] > r2 || t4 !== n2 - 1;
                }
                l2 ? t3.styledMode ? y(a2, "highcharts-a11y-invisible") : a2.style.visibility = "hidden" : (f(a2, "highcharts-a11y-invisible"), a2.style.visibility = "");
              }
            });
          }
          onChartRender() {
            x(this.chart) || this.removeProxies();
          }
          highlightAdjacentLegendPage(e3) {
            let t3 = this.chart, i3 = t3.legend, s2 = (i3.currentPage || 1) + e3, n2 = i3.pages || [];
            if (s2 > 0 && s2 <= n2.length) {
              let e4 = 0;
              for (let n3 of i3.allItems) ((n3.legendItem || {}).pageIx || 0) + 1 === s2 && t3.highlightLegendItem(e4) && (this.highlightedLegendItemIx = e4), ++e4;
            }
          }
          updateProxyPositionForItem(e3) {
            e3.a11yProxyElement && e3.a11yProxyElement.refreshPosition();
          }
          recreateProxies() {
            let e3 = h.activeElement, t3 = this.proxyGroup, i3 = e3 && t3 && t3.contains(e3);
            return this.removeProxies(), !!x(this.chart) && (this.addLegendProxyGroup(), this.proxyLegendItems(), this.updateLegendItemProxyVisibility(), this.updateLegendTitle(), i3 && this.chart.highlightLegendItem(this.highlightedLegendItemIx), true);
          }
          removeProxies() {
            this.proxyProvider.removeGroup("legend");
          }
          updateLegendTitle() {
            let e3 = this.chart, t3 = b((e3.legend && e3.legend.options.title && e3.legend.options.title.text || "").replace(/<br ?\/?>/g, " "), e3.renderer.forExport), i3 = e3.langFormat("accessibility.legend.legendLabel" + (t3 ? "" : "NoTitle"), {
              chart: e3,
              legendTitle: t3,
              chartTitle: m(e3)
            });
            this.proxyProvider.updateGroupAttrs("legend", {
              "aria-label": i3
            });
          }
          addLegendProxyGroup() {
            let e3 = "all" === this.chart.options.accessibility.landmarkVerbosity ? "region" : null;
            this.proxyGroup = this.proxyProvider.addGroup("legend", "ul", {
              "aria-label": "_placeholder_",
              role: e3
            });
          }
          proxyLegendItems() {
            let e3;
            let t3 = this;
            ((this.chart.legend || {}).allItems || []).forEach((i3) => {
              (e3 = i3.legendItem || {}).label && e3.label.element && t3.proxyLegendItem(i3);
            });
          }
          proxyLegendItem(e3) {
            let t3 = e3.legendItem || {};
            if (!t3.label || !t3.group) return;
            let i3 = this.chart.langFormat("accessibility.legend.legendItem", {
              chart: this.chart,
              itemName: b(e3.name, this.chart.renderer.forExport),
              item: e3
            }), s2 = {
              tabindex: -1,
              "aria-pressed": e3.visible,
              "aria-label": i3
            }, n2 = t3.group.div ? t3.label : t3.group;
            e3.a11yProxyElement = this.proxyProvider.addProxyElement("legend", {
              click: t3.label,
              visual: n2.element
            }, "button", s2);
          }
          getKeyboardNavigation() {
            let e3 = this.keyCodes, t3 = this, i3 = this.chart;
            return new r(i3, {
              keyCodeMap: [[[e3.left, e3.right, e3.up, e3.down], function(e4) {
                return t3.onKbdArrowKey(this, e4);
              }], [[e3.enter, e3.space], function() {
                return t3.onKbdClick(this);
              }], [[e3.pageDown, e3.pageUp], function(i4) {
                let s2 = i4 === e3.pageDown ? 1 : -1;
                return t3.highlightAdjacentLegendPage(s2), this.response.success;
              }]],
              validate: function() {
                return t3.shouldHaveLegendNavigation();
              },
              init: function() {
                i3.highlightLegendItem(0), t3.highlightedLegendItemIx = 0;
              },
              terminate: function() {
                t3.highlightedLegendItemIx = -1, i3.legend.allItems.forEach((e4) => v(false, e4));
              }
            });
          }
          onKbdArrowKey(e3, t3) {
            let {
              keyCodes: {
                left: i3,
                up: s2
              },
              highlightedLegendItemIx: n2,
              chart: r2
            } = this, o2 = r2.legend.allItems.length, a2 = r2.options.accessibility.keyboardNavigation.wrapAround, l2 = t3 === i3 || t3 === s2 ? -1 : 1;
            return r2.highlightLegendItem(n2 + l2) ? this.highlightedLegendItemIx += l2 : a2 && o2 > 1 && (this.highlightedLegendItemIx = l2 > 0 ? 0 : o2 - 1, r2.highlightLegendItem(this.highlightedLegendItemIx)), e3.response.success;
          }
          onKbdClick(e3) {
            let t3 = this.chart.legend.allItems[this.highlightedLegendItemIx];
            return t3 && t3.a11yProxyElement && t3.a11yProxyElement.click(), e3.response.success;
          }
          shouldHaveLegendNavigation() {
            if (!x(this.chart)) return false;
            let e3 = this.chart, t3 = (e3.options.legend || {}).accessibility || {};
            return !!(e3.legend.display && t3.keyboardNavigation && t3.keyboardNavigation.enabled);
          }
          destroy() {
            this.removeProxies();
          }
        }
        return function(e3) {
          function t3(e4) {
            let t4 = this.legend.allItems, i4 = this.accessibility && this.accessibility.components.legend.highlightedLegendItemIx, s2 = t4[e4], n2 = s2?.legendItem || {};
            if (s2) {
              u(i4) && t4[i4] && v(false, t4[i4]), function(e5, t5) {
                let i5 = (e5.allItems[t5].legendItem || {}).pageIx, s3 = e5.currentPage;
                void 0 !== i5 && i5 + 1 !== s3 && e5.scroll(1 + i5 - s3);
              }(this.legend, e4);
              let r2 = n2.label, o2 = s2.a11yProxyElement && s2.a11yProxyElement.innerElement;
              return r2 && r2.element && o2 && this.setFocusToElement(r2, o2), v(true, s2), true;
            }
            return false;
          }
          function i3(e4) {
            let t4 = this.chart.options.accessibility, i4 = e4.item;
            t4.enabled && i4 && i4.a11yProxyElement && i4.a11yProxyElement.innerElement.setAttribute("aria-pressed", e4.visible ? "true" : "false");
          }
          e3.compose = function(e4, s2) {
            let n2 = e4.prototype;
            n2.highlightLegendItem || (n2.highlightLegendItem = t3, c(s2, "afterColorizeItem", i3));
          };
        }(A || (A = {})), A;
      }), i(t, "Stock/Navigator/ChartNavigatorComposition.js", [t["Core/Globals.js"], t["Core/Utilities.js"]], function(e2, t2) {
        let i2;
        let {
          isTouchDevice: s
        } = e2, {
          addEvent: n,
          merge: r,
          pick: o
        } = t2, a = [];
        function l() {
          this.navigator && this.navigator.setBaseSeries(null, false);
        }
        function h() {
          let e3, t3, i3;
          let s2 = this.legend, n2 = this.navigator;
          if (n2) {
            e3 = s2 && s2.options, t3 = n2.xAxis, i3 = n2.yAxis;
            let {
              scrollbarHeight: r2,
              scrollButtonSize: a2
            } = n2;
            this.inverted ? (n2.left = n2.opposite ? this.chartWidth - r2 - n2.height : this.spacing[3] + r2, n2.top = this.plotTop + a2) : (n2.left = o(t3.left, this.plotLeft + a2), n2.top = n2.navigatorOptions.top || this.chartHeight - n2.height - r2 - (this.scrollbar?.options.margin || 0) - this.spacing[2] - (this.rangeSelector && this.extraBottomMargin ? this.rangeSelector.getHeight() : 0) - (e3 && "bottom" === e3.verticalAlign && "proximate" !== e3.layout && e3.enabled && !e3.floating ? s2.legendHeight + o(e3.margin, 10) : 0) - (this.titleOffset ? this.titleOffset[2] : 0)), t3 && i3 && (this.inverted ? t3.options.left = i3.options.left = n2.left : t3.options.top = i3.options.top = n2.top, t3.setAxisSize(), i3.setAxisSize());
          }
        }
        function c(e3) {
          !this.navigator && !this.scroller && (this.options.navigator.enabled || this.options.scrollbar.enabled) && (this.scroller = this.navigator = new i2(this), o(e3.redraw, true) && this.redraw(e3.animation));
        }
        function d() {
          let e3 = this.options;
          (e3.navigator.enabled || e3.scrollbar.enabled) && (this.scroller = this.navigator = new i2(this));
        }
        function u() {
          let e3 = this.options, t3 = e3.navigator, i3 = e3.rangeSelector;
          if ((t3 && t3.enabled || i3 && i3.enabled) && (!s && "x" === this.zooming.type || s && "x" === this.zooming.pinchType)) return false;
        }
        function p(e3) {
          let t3 = e3.navigator;
          if (t3 && e3.xAxis[0]) {
            let i3 = e3.xAxis[0].getExtremes();
            t3.render(i3.min, i3.max);
          }
        }
        function g(e3) {
          let t3 = e3.options.navigator || {}, i3 = e3.options.scrollbar || {};
          !this.navigator && !this.scroller && (t3.enabled || i3.enabled) && (r(true, this.options.navigator, t3), r(true, this.options.scrollbar, i3), delete e3.options.navigator, delete e3.options.scrollbar);
        }
        return {
          compose: function(e3, s2) {
            if (t2.pushUnique(a, e3)) {
              let t3 = e3.prototype;
              i2 = s2, t3.callbacks.push(p), n(e3, "afterAddSeries", l), n(e3, "afterSetChartSize", h), n(e3, "afterUpdate", c), n(e3, "beforeRender", d), n(e3, "beforeShowResetZoom", u), n(e3, "update", g);
            }
          }
        };
      }), i(t, "Core/Axis/NavigatorAxisComposition.js", [t["Core/Globals.js"], t["Core/Utilities.js"]], function(e2, t2) {
        let {
          isTouchDevice: i2
        } = e2, {
          addEvent: s,
          correctFloat: n,
          defined: r,
          isNumber: o,
          pick: a
        } = t2;
        function l() {
          this.navigatorAxis || (this.navigatorAxis = new c(this));
        }
        function h(e3) {
          let t3;
          let s2 = this.chart, n2 = s2.options, o2 = n2.navigator, a2 = this.navigatorAxis, l2 = s2.zooming.pinchType, h2 = n2.rangeSelector, c2 = s2.zooming.type;
          if (this.isXAxis && (o2?.enabled || h2?.enabled)) {
            if ("y" === c2 && "zoom" === e3.trigger) t3 = false;
            else if (("zoom" === e3.trigger && "xy" === c2 || i2 && "xy" === l2) && this.options.range) {
              let t4 = a2.previousZoom;
              r(e3.min) ? a2.previousZoom = [this.min, this.max] : t4 && (e3.min = t4[0], e3.max = t4[1], a2.previousZoom = void 0);
            }
          }
          void 0 !== t3 && e3.preventDefault();
        }
        class c {
          static compose(e3) {
            e3.keepProps.includes("navigatorAxis") || (e3.keepProps.push("navigatorAxis"), s(e3, "init", l), s(e3, "setExtremes", h));
          }
          constructor(e3) {
            this.axis = e3;
          }
          destroy() {
            this.axis = void 0;
          }
          toFixedRange(e3, t3, i3, s2) {
            let l2 = this.axis, h2 = (l2.pointRange || 0) / 2, c2 = a(i3, l2.translate(e3, true, !l2.horiz)), d = a(s2, l2.translate(t3, true, !l2.horiz));
            return r(i3) || (c2 = n(c2 + h2)), r(s2) || (d = n(d - h2)), o(c2) && o(d) || (c2 = d = void 0), {
              min: c2,
              max: d
            };
          }
        }
        return c;
      }), i(t, "Stock/Navigator/NavigatorDefaults.js", [t["Core/Color/Color.js"], t["Core/Series/SeriesRegistry.js"]], function(e2, t2) {
        let {
          parse: i2
        } = e2, {
          seriesTypes: s
        } = t2;
        return {
          height: 40,
          margin: 25,
          maskInside: true,
          handles: {
            width: 7,
            borderRadius: 0,
            height: 15,
            symbols: ["navigator-handle", "navigator-handle"],
            enabled: true,
            lineWidth: 1,
            backgroundColor: "#f2f2f2",
            borderColor: "#999999"
          },
          maskFill: i2("#667aff").setOpacity(0.3).get(),
          outlineColor: "#999999",
          outlineWidth: 1,
          series: {
            type: void 0 === s.areaspline ? "line" : "areaspline",
            fillOpacity: 0.05,
            lineWidth: 1,
            compare: null,
            sonification: {
              enabled: false
            },
            dataGrouping: {
              approximation: "average",
              enabled: true,
              groupPixelWidth: 2,
              firstAnchor: "firstPoint",
              anchor: "middle",
              lastAnchor: "lastPoint",
              units: [["millisecond", [1, 2, 5, 10, 20, 25, 50, 100, 200, 500]], ["second", [1, 2, 5, 10, 15, 30]], ["minute", [1, 2, 5, 10, 15, 30]], ["hour", [1, 2, 3, 4, 6, 8, 12]], ["day", [1, 2, 3, 4]], ["week", [1, 2, 3]], ["month", [1, 3, 6]], ["year", null]]
            },
            dataLabels: {
              enabled: false,
              zIndex: 2
            },
            id: "highcharts-navigator-series",
            className: "highcharts-navigator-series",
            lineColor: null,
            marker: {
              enabled: false
            },
            threshold: null
          },
          xAxis: {
            className: "highcharts-navigator-xaxis",
            tickLength: 0,
            lineWidth: 0,
            gridLineColor: "#e6e6e6",
            id: "navigator-x-axis",
            gridLineWidth: 1,
            tickPixelInterval: 200,
            labels: {
              align: "left",
              style: {
                color: "#000000",
                fontSize: "0.7em",
                opacity: 0.6,
                textOutline: "2px contrast"
              },
              x: 3,
              y: -4
            },
            crosshair: false
          },
          yAxis: {
            className: "highcharts-navigator-yaxis",
            gridLineWidth: 0,
            startOnTick: false,
            endOnTick: false,
            minPadding: 0.1,
            id: "navigator-y-axis",
            maxPadding: 0.1,
            labels: {
              enabled: false
            },
            crosshair: false,
            title: {
              text: null
            },
            tickLength: 0,
            tickWidth: 0
          }
        };
      }), i(t, "Stock/Navigator/NavigatorSymbols.js", [t["Core/Renderer/SVG/Symbols.js"], t["Core/Utilities.js"]], function(e2, t2) {
        let {
          relativeLength: i2
        } = t2;
        return {
          "navigator-handle": function(t3, s, n, r, o = {}) {
            let a = o.width ? o.width / 2 : n, l = i2(o.borderRadius || 0, Math.min(2 * a, r));
            return [["M", -1.5, (r = o.height || r) / 2 - 3.5], ["L", -1.5, r / 2 + 4.5], ["M", 0.5, r / 2 - 3.5], ["L", 0.5, r / 2 + 4.5], ...e2.rect(-a - 1, 0.5, 2 * a + 1, r, {
              r: l
            })];
          }
        };
      }), i(t, "Stock/Utilities/StockUtilities.js", [t["Core/Utilities.js"]], function(e2) {
        let {
          defined: t2
        } = e2;
        return {
          setFixedRange: function(e3) {
            let i2 = this.xAxis[0];
            t2(i2.dataMax) && t2(i2.dataMin) && e3 ? this.fixedRange = Math.min(e3, i2.dataMax - i2.dataMin) : this.fixedRange = e3;
          }
        };
      }), i(t, "Stock/Navigator/NavigatorComposition.js", [t["Core/Defaults.js"], t["Core/Globals.js"], t["Core/Axis/NavigatorAxisComposition.js"], t["Stock/Navigator/NavigatorDefaults.js"], t["Stock/Navigator/NavigatorSymbols.js"], t["Core/Renderer/RendererRegistry.js"], t["Stock/Utilities/StockUtilities.js"], t["Core/Utilities.js"]], function(e2, t2, i2, s, n, r, o, a) {
        let {
          setOptions: l
        } = e2, {
          composed: h
        } = t2, {
          getRendererType: c
        } = r, {
          setFixedRange: d
        } = o, {
          addEvent: u,
          extend: p,
          pushUnique: g
        } = a;
        function m() {
          this.chart.navigator && !this.options.isInternal && this.chart.navigator.setBaseSeries(null, false);
        }
        return {
          compose: function(e3, t3, r2) {
            i2.compose(t3), g(h, "Navigator") && (e3.prototype.setFixedRange = d, p(c().prototype.symbols, n), u(r2, "afterUpdate", m), l({
              navigator: s
            }));
          }
        };
      }), i(t, "Core/Axis/ScrollbarAxis.js", [t["Core/Globals.js"], t["Core/Utilities.js"]], function(e2, t2) {
        var i2;
        let {
          composed: s
        } = e2, {
          addEvent: n,
          defined: r,
          pick: o,
          pushUnique: a
        } = t2;
        return function(e3) {
          let t3;
          function i3(e4) {
            let t4 = o(e4.options && e4.options.min, e4.min), i4 = o(e4.options && e4.options.max, e4.max);
            return {
              axisMin: t4,
              axisMax: i4,
              scrollMin: r(e4.dataMin) ? Math.min(t4, e4.min, e4.dataMin, o(e4.threshold, 1 / 0)) : t4,
              scrollMax: r(e4.dataMax) ? Math.max(i4, e4.max, e4.dataMax, o(e4.threshold, -1 / 0)) : i4
            };
          }
          function l() {
            let e4 = this.scrollbar, t4 = e4 && !e4.options.opposite, i4 = this.horiz ? 2 : t4 ? 3 : 1;
            e4 && (this.chart.scrollbarsOffsets = [0, 0], this.chart.axisOffset[i4] += e4.size + (e4.options.margin || 0));
          }
          function h() {
            let e4 = this;
            e4.options && e4.options.scrollbar && e4.options.scrollbar.enabled && (e4.options.scrollbar.vertical = !e4.horiz, e4.options.startOnTick = e4.options.endOnTick = false, e4.scrollbar = new t3(e4.chart.renderer, e4.options.scrollbar, e4.chart), n(e4.scrollbar, "changed", function(t4) {
              let s2, n2;
              let {
                axisMin: o2,
                axisMax: a2,
                scrollMin: l2,
                scrollMax: h2
              } = i3(e4), c2 = h2 - l2;
              if (r(o2) && r(a2)) {
                if (e4.horiz && !e4.reversed || !e4.horiz && e4.reversed ? (s2 = l2 + c2 * this.to, n2 = l2 + c2 * this.from) : (s2 = l2 + c2 * (1 - this.from), n2 = l2 + c2 * (1 - this.to)), this.shouldUpdateExtremes(t4.DOMType)) {
                  let i4 = "mousemove" !== t4.DOMType && "touchmove" !== t4.DOMType && void 0;
                  e4.setExtremes(n2, s2, true, i4, t4);
                } else this.setRange(this.from, this.to);
              }
            }));
          }
          function c() {
            let e4, t4, s2;
            let {
              scrollMin: n2,
              scrollMax: o2
            } = i3(this), a2 = this.scrollbar, l2 = this.axisTitleMargin + (this.titleOffset || 0), h2 = this.chart.scrollbarsOffsets, c2 = this.options.margin || 0;
            if (a2 && h2) {
              if (this.horiz) this.opposite || (h2[1] += l2), a2.position(this.left, this.top + this.height + 2 + h2[1] - (this.opposite ? c2 : 0), this.width, this.height), this.opposite || (h2[1] += c2), e4 = 1;
              else {
                let t5;
                this.opposite && (h2[0] += l2), t5 = a2.options.opposite ? this.left + this.width + 2 + h2[0] - (this.opposite ? 0 : c2) : this.opposite ? 0 : c2, a2.position(t5, this.top, this.width, this.height), this.opposite && (h2[0] += c2), e4 = 0;
              }
              if (h2[e4] += a2.size + (a2.options.margin || 0), isNaN(n2) || isNaN(o2) || !r(this.min) || !r(this.max) || this.dataMin === this.dataMax) a2.setRange(0, 1);
              else if (this.min === this.max) {
                let e5 = this.pointRange / (this.dataMax + 1);
                t4 = e5 * this.min, s2 = e5 * (this.max + 1), a2.setRange(t4, s2);
              } else t4 = (this.min - n2) / (o2 - n2), s2 = (this.max - n2) / (o2 - n2), this.horiz && !this.reversed || !this.horiz && this.reversed ? a2.setRange(t4, s2) : a2.setRange(1 - s2, 1 - t4);
            }
          }
          e3.compose = function(e4, i4) {
            a(s, "Axis.Scrollbar") && (t3 = i4, n(e4, "afterGetOffset", l), n(e4, "afterInit", h), n(e4, "afterRender", c));
          };
        }(i2 || (i2 = {})), i2;
      }), i(t, "Stock/Scrollbar/ScrollbarDefaults.js", [], function() {
        return {
          height: 10,
          barBorderRadius: 5,
          buttonBorderRadius: 0,
          buttonsEnabled: false,
          liveRedraw: void 0,
          margin: void 0,
          minWidth: 6,
          opposite: true,
          step: 0.2,
          zIndex: 3,
          barBackgroundColor: "#cccccc",
          barBorderWidth: 0,
          barBorderColor: "#cccccc",
          buttonArrowColor: "#333333",
          buttonBackgroundColor: "#e6e6e6",
          buttonBorderColor: "#cccccc",
          buttonBorderWidth: 1,
          rifleColor: "none",
          trackBackgroundColor: "rgba(255, 255, 255, 0.001)",
          trackBorderColor: "#cccccc",
          trackBorderRadius: 5,
          trackBorderWidth: 1
        };
      }), i(t, "Stock/Scrollbar/Scrollbar.js", [t["Core/Defaults.js"], t["Core/Globals.js"], t["Core/Axis/ScrollbarAxis.js"], t["Stock/Scrollbar/ScrollbarDefaults.js"], t["Core/Utilities.js"]], function(e2, t2, i2, s, n) {
        let {
          defaultOptions: r
        } = e2, {
          addEvent: o,
          correctFloat: a,
          crisp: l,
          defined: h,
          destroyObjectProperties: c,
          fireEvent: d,
          merge: u,
          pick: p,
          removeEvent: g
        } = n;
        class m {
          static compose(e3) {
            i2.compose(e3, m);
          }
          static swapXY(e3, t3) {
            return t3 && e3.forEach((e4) => {
              let t4;
              let i3 = e4.length;
              for (let s2 = 0; s2 < i3; s2 += 2) "number" == typeof (t4 = e4[s2 + 1]) && (e4[s2 + 1] = e4[s2 + 2], e4[s2 + 2] = t4);
            }), e3;
          }
          constructor(e3, t3, i3) {
            this._events = [], this.chartX = 0, this.chartY = 0, this.from = 0, this.scrollbarButtons = [], this.scrollbarLeft = 0, this.scrollbarStrokeWidth = 1, this.scrollbarTop = 0, this.size = 0, this.to = 0, this.trackBorderWidth = 1, this.x = 0, this.y = 0, this.init(e3, t3, i3);
          }
          addEvents() {
            let e3 = this.options.inverted ? [1, 0] : [0, 1], t3 = this.scrollbarButtons, i3 = this.scrollbarGroup.element, s2 = this.track.element, n2 = this.mouseDownHandler.bind(this), r2 = this.mouseMoveHandler.bind(this), a2 = this.mouseUpHandler.bind(this), l2 = [[t3[e3[0]].element, "click", this.buttonToMinClick.bind(this)], [t3[e3[1]].element, "click", this.buttonToMaxClick.bind(this)], [s2, "click", this.trackClick.bind(this)], [i3, "mousedown", n2], [i3.ownerDocument, "mousemove", r2], [i3.ownerDocument, "mouseup", a2], [i3, "touchstart", n2], [i3.ownerDocument, "touchmove", r2], [i3.ownerDocument, "touchend", a2]];
            l2.forEach(function(e4) {
              o.apply(null, e4);
            }), this._events = l2;
          }
          buttonToMaxClick(e3) {
            let t3 = (this.to - this.from) * p(this.options.step, 0.2);
            this.updatePosition(this.from + t3, this.to + t3), d(this, "changed", {
              from: this.from,
              to: this.to,
              trigger: "scrollbar",
              DOMEvent: e3
            });
          }
          buttonToMinClick(e3) {
            let t3 = a(this.to - this.from) * p(this.options.step, 0.2);
            this.updatePosition(a(this.from - t3), a(this.to - t3)), d(this, "changed", {
              from: this.from,
              to: this.to,
              trigger: "scrollbar",
              DOMEvent: e3
            });
          }
          cursorToScrollbarPosition(e3) {
            let t3 = this.options, i3 = t3.minWidth > this.calculatedWidth ? t3.minWidth : 0;
            return {
              chartX: (e3.chartX - this.x - this.xOffset) / (this.barWidth - i3),
              chartY: (e3.chartY - this.y - this.yOffset) / (this.barWidth - i3)
            };
          }
          destroy() {
            let e3 = this, t3 = e3.chart.scroller;
            e3.removeEvents(), ["track", "scrollbarRifles", "scrollbar", "scrollbarGroup", "group"].forEach(function(t4) {
              e3[t4] && e3[t4].destroy && (e3[t4] = e3[t4].destroy());
            }), t3 && e3 === t3.scrollbar && (t3.scrollbar = null, c(t3.scrollbarButtons));
          }
          drawScrollbarButton(e3) {
            let t3 = this.renderer, i3 = this.scrollbarButtons, s2 = this.options, n2 = this.size, r2 = t3.g().add(this.group);
            if (i3.push(r2), s2.buttonsEnabled) {
              let o2 = t3.rect().addClass("highcharts-scrollbar-button").add(r2);
              this.chart.styledMode || o2.attr({
                stroke: s2.buttonBorderColor,
                "stroke-width": s2.buttonBorderWidth,
                fill: s2.buttonBackgroundColor
              }), o2.attr(o2.crisp({
                x: -0.5,
                y: -0.5,
                width: n2,
                height: n2,
                r: s2.buttonBorderRadius
              }, o2.strokeWidth()));
              let a2 = t3.path(m.swapXY([["M", n2 / 2 + (e3 ? -1 : 1), n2 / 2 - 3], ["L", n2 / 2 + (e3 ? -1 : 1), n2 / 2 + 3], ["L", n2 / 2 + (e3 ? 2 : -2), n2 / 2]], s2.vertical)).addClass("highcharts-scrollbar-arrow").add(i3[e3]);
              this.chart.styledMode || a2.attr({
                fill: s2.buttonArrowColor
              });
            }
          }
          init(e3, t3, i3) {
            this.scrollbarButtons = [], this.renderer = e3, this.userOptions = t3, this.options = u(s, r.scrollbar, t3), this.options.margin = p(this.options.margin, 10), this.chart = i3, this.size = p(this.options.size, this.options.height), t3.enabled && (this.render(), this.addEvents());
          }
          mouseDownHandler(e3) {
            let t3 = this.chart.pointer?.normalize(e3) || e3, i3 = this.cursorToScrollbarPosition(t3);
            this.chartX = i3.chartX, this.chartY = i3.chartY, this.initPositions = [this.from, this.to], this.grabbedCenter = true;
          }
          mouseMoveHandler(e3) {
            let t3;
            let i3 = this.chart.pointer?.normalize(e3) || e3, s2 = this.options.vertical ? "chartY" : "chartX", n2 = this.initPositions || [];
            this.grabbedCenter && (!e3.touches || 0 !== e3.touches[0][s2]) && (t3 = this.cursorToScrollbarPosition(i3)[s2] - this[s2], this.hasDragged = true, this.updatePosition(n2[0] + t3, n2[1] + t3), this.hasDragged && d(this, "changed", {
              from: this.from,
              to: this.to,
              trigger: "scrollbar",
              DOMType: e3.type,
              DOMEvent: e3
            }));
          }
          mouseUpHandler(e3) {
            this.hasDragged && d(this, "changed", {
              from: this.from,
              to: this.to,
              trigger: "scrollbar",
              DOMType: e3.type,
              DOMEvent: e3
            }), this.grabbedCenter = this.hasDragged = this.chartX = this.chartY = null;
          }
          position(e3, t3, i3, s2) {
            let {
              buttonsEnabled: n2,
              margin: r2 = 0,
              vertical: o2
            } = this.options, a2 = this.rendered ? "animate" : "attr", l2 = s2, h2 = 0;
            this.group.show(), this.x = e3, this.y = t3 + this.trackBorderWidth, this.width = i3, this.height = s2, this.xOffset = l2, this.yOffset = h2, o2 ? (this.width = this.yOffset = i3 = h2 = this.size, this.xOffset = l2 = 0, this.yOffset = h2 = n2 ? this.size : 0, this.barWidth = s2 - (n2 ? 2 * i3 : 0), this.x = e3 += r2) : (this.height = s2 = this.size, this.xOffset = l2 = n2 ? this.size : 0, this.barWidth = i3 - (n2 ? 2 * s2 : 0), this.y = this.y + r2), this.group[a2]({
              translateX: e3,
              translateY: this.y
            }), this.track[a2]({
              width: i3,
              height: s2
            }), this.scrollbarButtons[1][a2]({
              translateX: o2 ? 0 : i3 - l2,
              translateY: o2 ? s2 - h2 : 0
            });
          }
          removeEvents() {
            this._events.forEach(function(e3) {
              g.apply(null, e3);
            }), this._events.length = 0;
          }
          render() {
            let e3 = this.renderer, t3 = this.options, i3 = this.size, s2 = this.chart.styledMode, n2 = e3.g("scrollbar").attr({
              zIndex: t3.zIndex
            }).hide().add();
            this.group = n2, this.track = e3.rect().addClass("highcharts-scrollbar-track").attr({
              r: t3.trackBorderRadius || 0,
              height: i3,
              width: i3
            }).add(n2), s2 || this.track.attr({
              fill: t3.trackBackgroundColor,
              stroke: t3.trackBorderColor,
              "stroke-width": t3.trackBorderWidth
            });
            let r2 = this.trackBorderWidth = this.track.strokeWidth();
            this.track.attr({
              x: -l(0, r2),
              y: -l(0, r2)
            }), this.scrollbarGroup = e3.g().add(n2), this.scrollbar = e3.rect().addClass("highcharts-scrollbar-thumb").attr({
              height: i3 - r2,
              width: i3 - r2,
              r: t3.barBorderRadius || 0
            }).add(this.scrollbarGroup), this.scrollbarRifles = e3.path(m.swapXY([["M", -3, i3 / 4], ["L", -3, 2 * i3 / 3], ["M", 0, i3 / 4], ["L", 0, 2 * i3 / 3], ["M", 3, i3 / 4], ["L", 3, 2 * i3 / 3]], t3.vertical)).addClass("highcharts-scrollbar-rifles").add(this.scrollbarGroup), s2 || (this.scrollbar.attr({
              fill: t3.barBackgroundColor,
              stroke: t3.barBorderColor,
              "stroke-width": t3.barBorderWidth
            }), this.scrollbarRifles.attr({
              stroke: t3.rifleColor,
              "stroke-width": 1
            })), this.scrollbarStrokeWidth = this.scrollbar.strokeWidth(), this.scrollbarGroup.translate(-l(0, this.scrollbarStrokeWidth), -l(0, this.scrollbarStrokeWidth)), this.drawScrollbarButton(0), this.drawScrollbarButton(1);
          }
          setRange(e3, t3) {
            let i3, s2;
            let n2 = this.options, r2 = n2.vertical, o2 = n2.minWidth, l2 = this.barWidth, c2 = !this.rendered || this.hasDragged || this.chart.navigator && this.chart.navigator.hasDragged ? "attr" : "animate";
            if (!h(l2)) return;
            let d2 = l2 * Math.min(t3, 1);
            i3 = Math.ceil(l2 * (e3 = Math.max(e3, 0))), this.calculatedWidth = s2 = a(d2 - i3), s2 < o2 && (i3 = (l2 - o2 + s2) * e3, s2 = o2);
            let u2 = Math.floor(i3 + this.xOffset + this.yOffset), p2 = s2 / 2 - 0.5;
            this.from = e3, this.to = t3, r2 ? (this.scrollbarGroup[c2]({
              translateY: u2
            }), this.scrollbar[c2]({
              height: s2
            }), this.scrollbarRifles[c2]({
              translateY: p2
            }), this.scrollbarTop = u2, this.scrollbarLeft = 0) : (this.scrollbarGroup[c2]({
              translateX: u2
            }), this.scrollbar[c2]({
              width: s2
            }), this.scrollbarRifles[c2]({
              translateX: p2
            }), this.scrollbarLeft = u2, this.scrollbarTop = 0), s2 <= 12 ? this.scrollbarRifles.hide() : this.scrollbarRifles.show(), false === n2.showFull && (e3 <= 0 && t3 >= 1 ? this.group.hide() : this.group.show()), this.rendered = true;
          }
          shouldUpdateExtremes(e3) {
            return p(this.options.liveRedraw, t2.svg && !t2.isTouchDevice && !this.chart.boosted) || "mouseup" === e3 || "touchend" === e3 || !h(e3);
          }
          trackClick(e3) {
            let t3 = this.chart.pointer?.normalize(e3) || e3, i3 = this.to - this.from, s2 = this.y + this.scrollbarTop, n2 = this.x + this.scrollbarLeft;
            this.options.vertical && t3.chartY > s2 || !this.options.vertical && t3.chartX > n2 ? this.updatePosition(this.from + i3, this.to + i3) : this.updatePosition(this.from - i3, this.to - i3), d(this, "changed", {
              from: this.from,
              to: this.to,
              trigger: "scrollbar",
              DOMEvent: e3
            });
          }
          update(e3) {
            this.destroy(), this.init(this.chart.renderer, u(true, this.options, e3), this.chart);
          }
          updatePosition(e3, t3) {
            t3 > 1 && (e3 = a(1 - a(t3 - e3)), t3 = 1), e3 < 0 && (t3 = a(t3 - e3), e3 = 0), this.from = e3, this.to = t3;
          }
        }
        return m.defaultOptions = s, r.scrollbar = u(true, m.defaultOptions, r.scrollbar), m;
      }), i(t, "Stock/Navigator/Navigator.js", [t["Core/Axis/Axis.js"], t["Stock/Navigator/ChartNavigatorComposition.js"], t["Core/Defaults.js"], t["Core/Globals.js"], t["Core/Axis/NavigatorAxisComposition.js"], t["Stock/Navigator/NavigatorComposition.js"], t["Stock/Scrollbar/Scrollbar.js"], t["Core/Renderer/SVG/SVGRenderer.js"], t["Core/Utilities.js"]], function(e2, t2, i2, s, n, r, o, a, l) {
        let {
          defaultOptions: h
        } = i2, {
          isTouchDevice: c
        } = s, {
          prototype: {
            symbols: d
          }
        } = a, {
          addEvent: u,
          clamp: p,
          correctFloat: g,
          defined: m,
          destroyObjectProperties: b,
          erase: y,
          extend: f,
          find: x,
          fireEvent: v,
          isArray: A,
          isNumber: C,
          merge: w,
          pick: E,
          removeEvent: T,
          splat: M
        } = l;
        function S(e3, ...t3) {
          let i3 = [].filter.call(t3, C);
          if (i3.length) return Math[e3].apply(0, i3);
        }
        class k {
          static compose(e3, i3, s2) {
            t2.compose(e3, k), r.compose(e3, i3, s2);
          }
          constructor(e3) {
            this.isDirty = false, this.scrollbarHeight = 0, this.init(e3);
          }
          drawHandle(e3, t3, i3, s2) {
            let n2 = this.navigatorOptions.handles.height;
            this.handles[t3][s2](i3 ? {
              translateX: Math.round(this.left + this.height / 2),
              translateY: Math.round(this.top + parseInt(e3, 10) + 0.5 - n2)
            } : {
              translateX: Math.round(this.left + parseInt(e3, 10)),
              translateY: Math.round(this.top + this.height / 2 - n2 / 2 - 1)
            });
          }
          drawOutline(e3, t3, i3, s2) {
            let n2 = this.navigatorOptions.maskInside, r2 = this.outline.strokeWidth(), o2 = r2 / 2, a2 = r2 % 2 / 2, l2 = this.scrollButtonSize, h2 = this.size, c2 = this.top, d2 = this.height, u2 = c2 - o2, p2 = c2 + d2, g2 = this.left, m2, b2;
            i3 ? (m2 = c2 + t3 + a2, t3 = c2 + e3 + a2, b2 = [["M", g2 + d2, c2 - l2 - a2], ["L", g2 + d2, m2], ["L", g2, m2], ["M", g2, t3], ["L", g2 + d2, t3], ["L", g2 + d2, c2 + h2 + l2]], n2 && b2.push(["M", g2 + d2, m2 - o2], ["L", g2 + d2, t3 + o2])) : (g2 -= l2, e3 += g2 + l2 - a2, t3 += g2 + l2 - a2, b2 = [["M", g2, u2], ["L", e3, u2], ["L", e3, p2], ["M", t3, p2], ["L", t3, u2], ["L", g2 + h2 + 2 * l2, u2]], n2 && b2.push(["M", e3 - o2, u2], ["L", t3 + o2, u2])), this.outline[s2]({
              d: b2
            });
          }
          drawMasks(e3, t3, i3, s2) {
            let n2, r2, o2, a2;
            let l2 = this.left, h2 = this.top, c2 = this.height;
            i3 ? (o2 = [l2, l2, l2], a2 = [h2, h2 + e3, h2 + t3], r2 = [c2, c2, c2], n2 = [e3, t3 - e3, this.size - t3]) : (o2 = [l2, l2 + e3, l2 + t3], a2 = [h2, h2, h2], r2 = [e3, t3 - e3, this.size - t3], n2 = [c2, c2, c2]), this.shades.forEach((e4, t4) => {
              e4[s2]({
                x: o2[t4],
                y: a2[t4],
                width: r2[t4],
                height: n2[t4]
              });
            });
          }
          renderElements() {
            let e3 = this, t3 = e3.navigatorOptions, i3 = t3.maskInside, s2 = e3.chart, n2 = s2.inverted, r2 = s2.renderer, o2 = {
              cursor: n2 ? "ns-resize" : "ew-resize"
            }, a2 = e3.navigatorGroup ?? (e3.navigatorGroup = r2.g("navigator").attr({
              zIndex: 8,
              visibility: "hidden"
            }).add());
            if ([!i3, i3, !i3].forEach((i4, n3) => {
              let l2 = e3.shades[n3] ?? (e3.shades[n3] = r2.rect().addClass("highcharts-navigator-mask" + (1 === n3 ? "-inside" : "-outside")).add(a2));
              s2.styledMode || (l2.attr({
                fill: i4 ? t3.maskFill : "rgba(0,0,0,0)"
              }), 1 === n3 && l2.css(o2));
            }), e3.outline || (e3.outline = r2.path().addClass("highcharts-navigator-outline").add(a2)), s2.styledMode || e3.outline.attr({
              "stroke-width": t3.outlineWidth,
              stroke: t3.outlineColor
            }), t3.handles?.enabled) {
              let i4 = t3.handles, {
                height: n3,
                width: l2
              } = i4;
              [0, 1].forEach((t4) => {
                let h2 = i4.symbols[t4];
                if (e3.handles[t4] && e3.handles[t4].symbolUrl === h2) {
                  if (!e3.handles[t4].isImg && e3.handles[t4].symbolName !== h2) {
                    let i5 = d[h2].call(d, -l2 / 2 - 1, 0, l2, n3);
                    e3.handles[t4].attr({
                      d: i5
                    }), e3.handles[t4].symbolName = h2;
                  }
                } else e3.handles[t4]?.destroy(), e3.handles[t4] = r2.symbol(h2, -l2 / 2 - 1, 0, l2, n3, i4), e3.handles[t4].attr({
                  zIndex: 7 - t4
                }).addClass("highcharts-navigator-handle highcharts-navigator-handle-" + ["left", "right"][t4]).add(a2), e3.addMouseEvents();
                s2.inverted && e3.handles[t4].attr({
                  rotation: 90,
                  rotationOriginX: Math.floor(-l2 / 2),
                  rotationOriginY: (n3 + l2) / 2
                }), s2.styledMode || e3.handles[t4].attr({
                  fill: i4.backgroundColor,
                  stroke: i4.borderColor,
                  "stroke-width": i4.lineWidth,
                  width: i4.width,
                  height: i4.height,
                  x: -l2 / 2 - 1,
                  y: 0
                }).css(o2);
              });
            }
          }
          update(e3, t3 = false) {
            let i3 = this.chart, s2 = i3.options.chart.inverted !== i3.scrollbar?.options.vertical;
            if (w(true, i3.options.navigator, e3), this.navigatorOptions = i3.options.navigator || {}, this.setOpposite(), m(e3.enabled) || s2) return this.destroy(), this.navigatorEnabled = e3.enabled || this.navigatorEnabled, this.init(i3);
            if (this.navigatorEnabled && (this.isDirty = true, false === e3.adaptToUpdatedData && this.baseSeries.forEach((e4) => {
              T(e4, "updatedData", this.updatedDataHandler);
            }, this), e3.adaptToUpdatedData && this.baseSeries.forEach((e4) => {
              e4.eventsToUnbind.push(u(e4, "updatedData", this.updatedDataHandler));
            }, this), (e3.series || e3.baseSeries) && this.setBaseSeries(void 0, false), e3.height || e3.xAxis || e3.yAxis)) {
              this.height = e3.height ?? this.height;
              let t4 = this.getXAxisOffsets();
              this.xAxis.update(__spreadProps(__spreadValues({}, e3.xAxis), {
                offsets: t4,
                [i3.inverted ? "width" : "height"]: this.height,
                [i3.inverted ? "height" : "width"]: void 0
              }), false), this.yAxis.update(__spreadProps(__spreadValues({}, e3.yAxis), {
                [i3.inverted ? "width" : "height"]: this.height
              }), false);
            }
            t3 && i3.redraw();
          }
          render(e3, t3, i3, s2) {
            let n2 = this.chart, r2 = this.xAxis, o2 = r2.pointRange || 0, a2 = r2.navigatorAxis.fake ? n2.xAxis[0] : r2, l2 = this.navigatorEnabled, h2 = this.rendered, c2 = n2.inverted, d2 = n2.xAxis[0].minRange, u2 = n2.xAxis[0].options.maxRange, b2 = this.scrollButtonSize, y2, f2, x2, A2 = this.scrollbarHeight, w2, T2;
            if (this.hasDragged && !m(i3)) return;
            if (this.isDirty && this.renderElements(), e3 = g(e3 - o2 / 2), t3 = g(t3 + o2 / 2), !C(e3) || !C(t3)) {
              if (!h2) return;
              i3 = 0, s2 = E(r2.width, a2.width);
            }
            this.left = E(r2.left, n2.plotLeft + b2 + (c2 ? n2.plotWidth : 0));
            let M2 = this.size = w2 = E(r2.len, (c2 ? n2.plotHeight : n2.plotWidth) - 2 * b2);
            y2 = c2 ? A2 : w2 + 2 * b2, i3 = E(i3, r2.toPixels(e3, true)), s2 = E(s2, r2.toPixels(t3, true)), C(i3) && Math.abs(i3) !== 1 / 0 || (i3 = 0, s2 = y2);
            let S2 = r2.toValue(i3, true), k2 = r2.toValue(s2, true), P = Math.abs(g(k2 - S2));
            P < d2 ? this.grabbedLeft ? i3 = r2.toPixels(k2 - d2 - o2, true) : this.grabbedRight && (s2 = r2.toPixels(S2 + d2 + o2, true)) : m(u2) && g(P - o2) > u2 && (this.grabbedLeft ? i3 = r2.toPixels(k2 - u2 - o2, true) : this.grabbedRight && (s2 = r2.toPixels(S2 + u2 + o2, true))), this.zoomedMax = p(Math.max(i3, s2), 0, M2), this.zoomedMin = p(this.fixedWidth ? this.zoomedMax - this.fixedWidth : Math.min(i3, s2), 0, M2), this.range = this.zoomedMax - this.zoomedMin, M2 = Math.round(this.zoomedMax);
            let D = Math.round(this.zoomedMin);
            l2 && (this.navigatorGroup.attr({
              visibility: "inherit"
            }), T2 = h2 && !this.hasDragged ? "animate" : "attr", this.drawMasks(D, M2, c2, T2), this.drawOutline(D, M2, c2, T2), this.navigatorOptions.handles.enabled && (this.drawHandle(D, 0, c2, T2), this.drawHandle(M2, 1, c2, T2))), this.scrollbar && (c2 ? (x2 = this.top - b2, f2 = this.left - A2 + (l2 || !a2.opposite ? 0 : (a2.titleOffset || 0) + a2.axisTitleMargin), A2 = w2 + 2 * b2) : (x2 = this.top + (l2 ? this.height : -A2), f2 = this.left - b2), this.scrollbar.position(f2, x2, y2, A2), this.scrollbar.setRange(this.zoomedMin / (w2 || 1), this.zoomedMax / (w2 || 1))), this.rendered = true, this.isDirty = false, v(this, "afterRender");
          }
          addMouseEvents() {
            let e3 = this, t3 = e3.chart, i3 = t3.container, s2 = [], n2, r2;
            e3.mouseMoveHandler = n2 = function(t4) {
              e3.onMouseMove(t4);
            }, e3.mouseUpHandler = r2 = function(t4) {
              e3.onMouseUp(t4);
            }, (s2 = e3.getPartsEvents("mousedown")).push(u(t3.renderTo, "mousemove", n2), u(i3.ownerDocument, "mouseup", r2), u(t3.renderTo, "touchmove", n2), u(i3.ownerDocument, "touchend", r2)), s2.concat(e3.getPartsEvents("touchstart")), e3.eventsToUnbind = s2, e3.series && e3.series[0] && s2.push(u(e3.series[0].xAxis, "foundExtremes", function() {
              t3.navigator.modifyNavigatorAxisExtremes();
            }));
          }
          getPartsEvents(e3) {
            let t3 = this, i3 = [];
            return ["shades", "handles"].forEach(function(s2) {
              t3[s2].forEach(function(n2, r2) {
                i3.push(u(n2.element, e3, function(e4) {
                  t3[s2 + "Mousedown"](e4, r2);
                }));
              });
            }), i3;
          }
          shadesMousedown(e3, t3) {
            e3 = this.chart.pointer?.normalize(e3) || e3;
            let i3 = this.chart, s2 = this.xAxis, n2 = this.zoomedMin, r2 = this.size, o2 = this.range, a2 = this.left, l2 = e3.chartX, h2, c2, d2, u2;
            i3.inverted && (l2 = e3.chartY, a2 = this.top), 1 === t3 ? (this.grabbedCenter = l2, this.fixedWidth = o2, this.dragOffset = l2 - n2) : (u2 = l2 - a2 - o2 / 2, 0 === t3 ? u2 = Math.max(0, u2) : 2 === t3 && u2 + o2 >= r2 && (u2 = r2 - o2, this.reversedExtremes ? (u2 -= o2, c2 = this.getUnionExtremes().dataMin) : h2 = this.getUnionExtremes().dataMax), u2 !== n2 && (this.fixedWidth = o2, m((d2 = s2.navigatorAxis.toFixedRange(u2, u2 + o2, c2, h2)).min) && v(this, "setRange", {
              min: Math.min(d2.min, d2.max),
              max: Math.max(d2.min, d2.max),
              redraw: true,
              eventArguments: {
                trigger: "navigator"
              }
            })));
          }
          handlesMousedown(e3, t3) {
            e3 = this.chart.pointer?.normalize(e3) || e3;
            let i3 = this.chart, s2 = i3.xAxis[0], n2 = this.reversedExtremes;
            0 === t3 ? (this.grabbedLeft = true, this.otherHandlePos = this.zoomedMax, this.fixedExtreme = n2 ? s2.min : s2.max) : (this.grabbedRight = true, this.otherHandlePos = this.zoomedMin, this.fixedExtreme = n2 ? s2.max : s2.min), i3.setFixedRange(void 0);
          }
          onMouseMove(e3) {
            let t3 = this, i3 = t3.chart, s2 = t3.navigatorSize, n2 = t3.range, r2 = t3.dragOffset, o2 = i3.inverted, a2 = t3.left, l2;
            (!e3.touches || 0 !== e3.touches[0].pageX) && (l2 = (e3 = i3.pointer?.normalize(e3) || e3).chartX, o2 && (a2 = t3.top, l2 = e3.chartY), t3.grabbedLeft ? (t3.hasDragged = true, t3.render(0, 0, l2 - a2, t3.otherHandlePos)) : t3.grabbedRight ? (t3.hasDragged = true, t3.render(0, 0, t3.otherHandlePos, l2 - a2)) : t3.grabbedCenter && (t3.hasDragged = true, l2 < r2 ? l2 = r2 : l2 > s2 + r2 - n2 && (l2 = s2 + r2 - n2), t3.render(0, 0, l2 - r2, l2 - r2 + n2)), t3.hasDragged && t3.scrollbar && E(t3.scrollbar.options.liveRedraw, !c && !this.chart.boosted) && (e3.DOMType = e3.type, setTimeout(function() {
              t3.onMouseUp(e3);
            }, 0)));
          }
          onMouseUp(e3) {
            let t3, i3, s2, n2, r2, o2;
            let a2 = this.chart, l2 = this.xAxis, h2 = this.scrollbar, c2 = e3.DOMEvent || e3, d2 = a2.inverted, u2 = this.rendered && !this.hasDragged ? "animate" : "attr";
            (this.hasDragged && (!h2 || !h2.hasDragged) || "scrollbar" === e3.trigger) && (s2 = this.getUnionExtremes(), this.zoomedMin === this.otherHandlePos ? n2 = this.fixedExtreme : this.zoomedMax === this.otherHandlePos && (r2 = this.fixedExtreme), this.zoomedMax === this.size && (r2 = this.reversedExtremes ? s2.dataMin : s2.dataMax), 0 === this.zoomedMin && (n2 = this.reversedExtremes ? s2.dataMax : s2.dataMin), m((o2 = l2.navigatorAxis.toFixedRange(this.zoomedMin, this.zoomedMax, n2, r2)).min) && v(this, "setRange", {
              min: Math.min(o2.min, o2.max),
              max: Math.max(o2.min, o2.max),
              redraw: true,
              animation: !this.hasDragged && null,
              eventArguments: {
                trigger: "navigator",
                triggerOp: "navigator-drag",
                DOMEvent: c2
              }
            })), "mousemove" !== e3.DOMType && "touchmove" !== e3.DOMType && (this.grabbedLeft = this.grabbedRight = this.grabbedCenter = this.fixedWidth = this.fixedExtreme = this.otherHandlePos = this.hasDragged = this.dragOffset = null), this.navigatorEnabled && C(this.zoomedMin) && C(this.zoomedMax) && (i3 = Math.round(this.zoomedMin), t3 = Math.round(this.zoomedMax), this.shades && this.drawMasks(i3, t3, d2, u2), this.outline && this.drawOutline(i3, t3, d2, u2), this.navigatorOptions.handles.enabled && Object.keys(this.handles).length === this.handles.length && (this.drawHandle(i3, 0, d2, u2), this.drawHandle(t3, 1, d2, u2)));
          }
          removeEvents() {
            this.eventsToUnbind && (this.eventsToUnbind.forEach(function(e3) {
              e3();
            }), this.eventsToUnbind = void 0), this.removeBaseSeriesEvents();
          }
          removeBaseSeriesEvents() {
            let e3 = this.baseSeries || [];
            this.navigatorEnabled && e3[0] && (false !== this.navigatorOptions.adaptToUpdatedData && e3.forEach(function(e4) {
              T(e4, "updatedData", this.updatedDataHandler);
            }, this), e3[0].xAxis && T(e3[0].xAxis, "foundExtremes", this.modifyBaseAxisExtremes));
          }
          getXAxisOffsets() {
            return this.chart.inverted ? [this.scrollButtonSize, 0, -this.scrollButtonSize, 0] : [0, -this.scrollButtonSize, 0, this.scrollButtonSize];
          }
          init(t3) {
            let i3 = t3.options, s2 = i3.navigator || {}, r2 = s2.enabled, a2 = i3.scrollbar || {}, l2 = a2.enabled, h2 = r2 && s2.height || 0, c2 = l2 && a2.height || 0, d2 = a2.buttonsEnabled && c2 || 0;
            this.handles = [], this.shades = [], this.chart = t3, this.setBaseSeries(), this.height = h2, this.scrollbarHeight = c2, this.scrollButtonSize = d2, this.scrollbarEnabled = l2, this.navigatorEnabled = r2, this.navigatorOptions = s2, this.scrollbarOptions = a2, this.setOpposite();
            let p2 = this, g2 = p2.baseSeries, m2 = t3.xAxis.length, b2 = t3.yAxis.length, y2 = g2 && g2[0] && g2[0].xAxis || t3.xAxis[0] || {
              options: {}
            };
            if (t3.isDirtyBox = true, p2.navigatorEnabled) {
              let i4 = this.getXAxisOffsets();
              p2.xAxis = new e2(t3, w({
                breaks: y2.options.breaks,
                ordinal: y2.options.ordinal,
                overscroll: y2.options.overscroll
              }, s2.xAxis, {
                type: "datetime",
                yAxis: s2.yAxis?.id,
                index: m2,
                isInternal: true,
                offset: 0,
                keepOrdinalPadding: true,
                startOnTick: false,
                endOnTick: false,
                minPadding: y2.options.ordinal ? 0 : y2.options.minPadding,
                maxPadding: y2.options.ordinal ? 0 : y2.options.maxPadding,
                zoomEnabled: false
              }, t3.inverted ? {
                offsets: i4,
                width: h2
              } : {
                offsets: i4,
                height: h2
              }), "xAxis"), p2.yAxis = new e2(t3, w(s2.yAxis, {
                alignTicks: false,
                offset: 0,
                index: b2,
                isInternal: true,
                reversed: E(s2.yAxis && s2.yAxis.reversed, t3.yAxis[0] && t3.yAxis[0].reversed, false),
                zoomEnabled: false
              }, t3.inverted ? {
                width: h2
              } : {
                height: h2
              }), "yAxis"), g2 || s2.series.data ? p2.updateNavigatorSeries(false) : 0 === t3.series.length && (p2.unbindRedraw = u(t3, "beforeRedraw", function() {
                t3.series.length > 0 && !p2.series && (p2.setBaseSeries(), p2.unbindRedraw());
              })), p2.reversedExtremes = t3.inverted && !p2.xAxis.reversed || !t3.inverted && p2.xAxis.reversed, p2.renderElements(), p2.addMouseEvents();
            } else p2.xAxis = {
              chart: t3,
              navigatorAxis: {
                fake: true
              },
              translate: function(e3, i4) {
                let s3 = t3.xAxis[0], n2 = s3.getExtremes(), r3 = s3.len - 2 * d2, o2 = S("min", s3.options.min, n2.dataMin), a3 = S("max", s3.options.max, n2.dataMax) - o2;
                return i4 ? e3 * a3 / r3 + o2 : r3 * (e3 - o2) / a3;
              },
              toPixels: function(e3) {
                return this.translate(e3);
              },
              toValue: function(e3) {
                return this.translate(e3, true);
              }
            }, p2.xAxis.navigatorAxis.axis = p2.xAxis, p2.xAxis.navigatorAxis.toFixedRange = n.prototype.toFixedRange.bind(p2.xAxis.navigatorAxis);
            if (t3.options.scrollbar.enabled) {
              let e3 = w(t3.options.scrollbar, {
                vertical: t3.inverted
              });
              !C(e3.margin) && p2.navigatorEnabled && (e3.margin = t3.inverted ? -3 : 3), t3.scrollbar = p2.scrollbar = new o(t3.renderer, e3, t3), u(p2.scrollbar, "changed", function(e4) {
                let t4 = p2.size, i4 = t4 * this.to, s3 = t4 * this.from;
                p2.hasDragged = p2.scrollbar.hasDragged, p2.render(0, 0, s3, i4), this.shouldUpdateExtremes(e4.DOMType) && setTimeout(function() {
                  p2.onMouseUp(e4);
                });
              });
            }
            p2.addBaseSeriesEvents(), p2.addChartEvents();
          }
          setOpposite() {
            let e3 = this.navigatorOptions, t3 = this.navigatorEnabled, i3 = this.chart;
            this.opposite = E(e3.opposite, !!(!t3 && i3.inverted));
          }
          getUnionExtremes(e3) {
            let t3;
            let i3 = this.chart.xAxis[0], s2 = this.xAxis, n2 = s2.options, r2 = i3.options;
            return e3 && null === i3.dataMin || (t3 = {
              dataMin: E(n2 && n2.min, S("min", r2.min, i3.dataMin, s2.dataMin, s2.min)),
              dataMax: E(n2 && n2.max, S("max", r2.max, i3.dataMax, s2.dataMax, s2.max))
            }), t3;
          }
          setBaseSeries(e3, t3) {
            let i3 = this.chart, s2 = this.baseSeries = [];
            e3 = e3 || i3.options && i3.options.navigator.baseSeries || (i3.series.length ? x(i3.series, (e4) => !e4.options.isInternal).index : 0), (i3.series || []).forEach((t4, i4) => {
              !t4.options.isInternal && (t4.options.showInNavigator || (i4 === e3 || t4.options.id === e3) && false !== t4.options.showInNavigator) && s2.push(t4);
            }), this.xAxis && !this.xAxis.navigatorAxis.fake && this.updateNavigatorSeries(true, t3);
          }
          updateNavigatorSeries(e3, t3) {
            let i3 = this, s2 = i3.chart, n2 = i3.baseSeries, r2 = {
              enableMouseTracking: false,
              index: null,
              linkedTo: null,
              group: "nav",
              padXAxis: false,
              xAxis: this.navigatorOptions.xAxis?.id,
              yAxis: this.navigatorOptions.yAxis?.id,
              showInLegend: false,
              stacking: void 0,
              isInternal: true,
              states: {
                inactive: {
                  opacity: 1
                }
              }
            }, o2 = i3.series = (i3.series || []).filter((e4) => {
              let t4 = e4.baseSeries;
              return !(0 > n2.indexOf(t4)) || (t4 && (T(t4, "updatedData", i3.updatedDataHandler), delete t4.navigatorSeries), e4.chart && e4.destroy(), false);
            }), a2, l2, c2 = i3.navigatorOptions.series, d2;
            n2 && n2.length && n2.forEach((e4) => {
              let u2 = e4.navigatorSeries, p2 = f({
                color: e4.color,
                visible: e4.visible
              }, A(c2) ? h.navigator.series : c2);
              if (u2 && false === i3.navigatorOptions.adaptToUpdatedData) return;
              r2.name = "Navigator " + n2.length, d2 = (a2 = e4.options || {}).navigatorOptions || {}, p2.dataLabels = M(p2.dataLabels), (l2 = w(a2, r2, p2, d2)).pointRange = E(p2.pointRange, d2.pointRange, h.plotOptions[l2.type || "line"].pointRange);
              let g2 = d2.data || p2.data;
              i3.hasNavigatorData = i3.hasNavigatorData || !!g2, l2.data = g2 || a2.data && a2.data.slice(0), u2 && u2.options ? u2.update(l2, t3) : (e4.navigatorSeries = s2.initSeries(l2), s2.setSortedData(), e4.navigatorSeries.baseSeries = e4, o2.push(e4.navigatorSeries));
            }), (c2.data && !(n2 && n2.length) || A(c2)) && (i3.hasNavigatorData = false, (c2 = M(c2)).forEach((e4, t4) => {
              r2.name = "Navigator " + (o2.length + 1), (l2 = w(h.navigator.series, {
                color: s2.series[t4] && !s2.series[t4].options.isInternal && s2.series[t4].color || s2.options.colors[t4] || s2.options.colors[0]
              }, r2, e4)).data = e4.data, l2.data && (i3.hasNavigatorData = true, o2.push(s2.initSeries(l2)));
            })), e3 && this.addBaseSeriesEvents();
          }
          addBaseSeriesEvents() {
            let e3 = this, t3 = e3.baseSeries || [];
            t3[0] && t3[0].xAxis && t3[0].eventsToUnbind.push(u(t3[0].xAxis, "foundExtremes", this.modifyBaseAxisExtremes)), t3.forEach((i3) => {
              i3.eventsToUnbind.push(u(i3, "show", function() {
                this.navigatorSeries && this.navigatorSeries.setVisible(true, false);
              })), i3.eventsToUnbind.push(u(i3, "hide", function() {
                this.navigatorSeries && this.navigatorSeries.setVisible(false, false);
              })), false !== this.navigatorOptions.adaptToUpdatedData && i3.xAxis && i3.eventsToUnbind.push(u(i3, "updatedData", this.updatedDataHandler)), i3.eventsToUnbind.push(u(i3, "remove", function() {
                t3 && y(t3, i3), this.navigatorSeries && (y(e3.series, this.navigatorSeries), m(this.navigatorSeries.options) && this.navigatorSeries.remove(false), delete this.navigatorSeries);
              }));
            });
          }
          getBaseSeriesMin(e3) {
            return this.baseSeries.reduce(function(e4, t3) {
              return Math.min(e4, t3.xData && t3.xData.length ? t3.xData[0] : e4);
            }, e3);
          }
          modifyNavigatorAxisExtremes() {
            let e3 = this.xAxis;
            if (void 0 !== e3.getExtremes) {
              let t3 = this.getUnionExtremes(true);
              t3 && (t3.dataMin !== e3.min || t3.dataMax !== e3.max) && (e3.min = t3.dataMin, e3.max = t3.dataMax);
            }
          }
          modifyBaseAxisExtremes() {
            let e3, t3;
            let i3 = this.chart.navigator, s2 = this.getExtremes(), n2 = s2.min, r2 = s2.max, o2 = s2.dataMin, a2 = s2.dataMax, l2 = r2 - n2, h2 = i3.stickToMin, c2 = i3.stickToMax, d2 = E(this.ordinal?.convertOverscroll(this.options.overscroll), 0), u2 = i3.series && i3.series[0], p2 = !!this.setExtremes;
            !(this.eventArgs && "rangeSelectorButton" === this.eventArgs.trigger) && (h2 && (e3 = (t3 = o2) + l2), c2 && (e3 = a2 + d2, h2 || (t3 = Math.max(o2, e3 - l2, i3.getBaseSeriesMin(u2 && u2.xData ? u2.xData[0] : -Number.MAX_VALUE)))), p2 && (h2 || c2) && C(t3) && (this.min = this.userMin = t3, this.max = this.userMax = e3)), i3.stickToMin = i3.stickToMax = null;
          }
          updatedDataHandler() {
            let e3 = this.chart.navigator, t3 = this.navigatorSeries, i3 = e3.reversedExtremes ? 0 === Math.round(e3.zoomedMin) : Math.round(e3.zoomedMax) >= Math.round(e3.size);
            e3.stickToMax = E(this.chart.options.navigator && this.chart.options.navigator.stickToMax, i3), e3.stickToMin = e3.shouldStickToMin(this, e3), t3 && !e3.hasNavigatorData && (t3.options.pointStart = this.xData[0], t3.setData(this.options.data, false, null, false));
          }
          shouldStickToMin(e3, t3) {
            let i3 = t3.getBaseSeriesMin(e3.xData[0]), s2 = e3.xAxis, n2 = s2.max, r2 = s2.min, o2 = s2.options.range;
            return !!(C(n2) && C(r2)) && (o2 && n2 - i3 > 0 ? n2 - i3 < o2 : r2 <= i3);
          }
          addChartEvents() {
            this.eventsToUnbind || (this.eventsToUnbind = []), this.eventsToUnbind.push(u(this.chart, "redraw", function() {
              let e3 = this.navigator, t3 = e3 && (e3.baseSeries && e3.baseSeries[0] && e3.baseSeries[0].xAxis || this.xAxis[0]);
              t3 && e3.render(t3.min, t3.max);
            }), u(this.chart, "getMargins", function() {
              let e3 = this.navigator, t3 = e3.opposite ? "plotTop" : "marginBottom";
              this.inverted && (t3 = e3.opposite ? "marginRight" : "plotLeft"), this[t3] = (this[t3] || 0) + (e3.navigatorEnabled || !this.inverted ? e3.height + e3.scrollbarHeight : 0) + e3.navigatorOptions.margin;
            }), u(k, "setRange", function(e3) {
              this.chart.xAxis[0].setExtremes(e3.min, e3.max, e3.redraw, e3.animation, e3.eventArguments);
            }));
          }
          destroy() {
            this.removeEvents(), this.xAxis && (y(this.chart.xAxis, this.xAxis), y(this.chart.axes, this.xAxis)), this.yAxis && (y(this.chart.yAxis, this.yAxis), y(this.chart.axes, this.yAxis)), (this.series || []).forEach((e3) => {
              e3.destroy && e3.destroy();
            }), ["series", "xAxis", "yAxis", "shades", "outline", "scrollbarTrack", "scrollbarRifles", "scrollbarGroup", "scrollbar", "navigatorGroup", "rendered"].forEach((e3) => {
              this[e3] && this[e3].destroy && this[e3].destroy(), this[e3] = null;
            }), [this.handles].forEach((e3) => {
              b(e3);
            }), this.navigatorEnabled = false;
          }
        }
        return k;
      }), i(t, "Accessibility/Components/NavigatorComponent.js", [t["Accessibility/AccessibilityComponent.js"], t["Accessibility/Utils/Announcer.js"], t["Accessibility/KeyboardNavigationHandler.js"], t["Stock/Navigator/Navigator.js"], t["Core/Animation/AnimationUtilities.js"], t["Core/Templating.js"], t["Core/Utilities.js"], t["Accessibility/Utils/HTMLUtilities.js"], t["Accessibility/Utils/ChartUtilities.js"]], function(e2, t2, i2, s, n, r, o, a, l) {
        let {
          animObject: h
        } = n, {
          format: c
        } = r, {
          clamp: d,
          pick: u,
          syncTimeout: p
        } = o, {
          getFakeMouseEvent: g
        } = a, {
          getAxisRangeDescription: m,
          fireEventOnWrappedOrUnwrappedElement: b
        } = l;
        return class extends e2 {
          init() {
            let e3 = this.chart, i3 = this;
            this.announcer = new t2(e3, "polite"), this.addEvent(s, "afterRender", function() {
              this.chart === i3.chart && this.chart.renderer && p(() => {
                i3.proxyProvider.updateGroupProxyElementPositions("navigator"), i3.updateHandleValues();
              }, h(u(this.chart.renderer.globalAnimation, true)).duration);
            });
          }
          onChartUpdate() {
            let e3 = this.chart, t3 = e3.options, i3 = t3.navigator;
            if (i3.enabled && i3.accessibility?.enabled) {
              let i4 = t3.accessibility.landmarkVerbosity, s2 = t3.lang.accessibility?.navigator.groupLabel;
              this.proxyProvider.removeGroup("navigator"), this.proxyProvider.addGroup("navigator", "div", {
                role: "all" === i4 ? "region" : "group",
                "aria-label": c(s2, {
                  chart: e3
                }, e3)
              });
              let n2 = t3.lang.accessibility?.navigator.handleLabel;
              [0, 1].forEach((t4) => {
                let i5 = this.getHandleByIx(t4);
                if (i5) {
                  let s3 = this.proxyProvider.addProxyElement("navigator", {
                    click: i5
                  }, "input", {
                    type: "range",
                    "aria-label": c(n2, {
                      handleIx: t4,
                      chart: e3
                    }, e3)
                  });
                  this[t4 ? "maxHandleProxy" : "minHandleProxy"] = s3.innerElement, s3.innerElement.style.pointerEvents = "none", s3.innerElement.oninput = () => this.updateNavigator();
                }
              }), this.updateHandleValues();
            } else this.proxyProvider.removeGroup("navigator");
          }
          getNavigatorHandleNavigation(e3) {
            let t3 = this, s2 = this.chart, n2 = e3 ? this.maxHandleProxy : this.minHandleProxy, r2 = this.keyCodes;
            return new i2(s2, {
              keyCodeMap: [[[r2.left, r2.right, r2.up, r2.down], function(i3) {
                if (n2) {
                  let o2 = i3 === r2.left || i3 === r2.up ? -1 : 1;
                  n2.value = "" + d(parseFloat(n2.value) + o2, 0, 100), t3.updateNavigator(() => {
                    let i4 = t3.getHandleByIx(e3);
                    i4 && s2.setFocusToElement(i4, n2);
                  });
                }
                return this.response.success;
              }]],
              init: () => {
                s2.setFocusToElement(this.getHandleByIx(e3), n2);
              },
              validate: () => !!(this.getHandleByIx(e3) && n2 && s2.options.navigator.accessibility?.enabled)
            });
          }
          getKeyboardNavigation() {
            return [this.getNavigatorHandleNavigation(0), this.getNavigatorHandleNavigation(1)];
          }
          destroy() {
            this.updateNavigatorThrottleTimer && clearTimeout(this.updateNavigatorThrottleTimer), this.proxyProvider.removeGroup("navigator"), this.announcer && this.announcer.destroy();
          }
          updateHandleValues() {
            let e3 = this.chart.navigator;
            if (e3 && this.minHandleProxy && this.maxHandleProxy) {
              let t3 = e3.size;
              this.minHandleProxy.value = "" + Math.round(e3.zoomedMin / t3 * 100), this.maxHandleProxy.value = "" + Math.round(e3.zoomedMax / t3 * 100);
            }
          }
          getHandleByIx(e3) {
            let t3 = this.chart.navigator;
            return t3 && t3.handles && t3.handles[e3];
          }
          updateNavigator(e3) {
            this.updateNavigatorThrottleTimer && clearTimeout(this.updateNavigatorThrottleTimer), this.updateNavigatorThrottleTimer = setTimeout(((e4) => {
              let t3 = this.chart, {
                navigator: i3,
                pointer: s2
              } = t3;
              if (i3 && s2 && this.minHandleProxy && this.maxHandleProxy) {
                let n2 = s2.getChartPosition(), r2 = parseFloat(this.minHandleProxy.value) / 100 * i3.size, o2 = parseFloat(this.maxHandleProxy.value) / 100 * i3.size;
                [[0, "mousedown", i3.zoomedMin], [0, "mousemove", r2], [0, "mouseup", r2], [1, "mousedown", i3.zoomedMax], [1, "mousemove", o2], [1, "mouseup", o2]].forEach(([e5, t4, s3]) => {
                  let r3 = this.getHandleByIx(e5)?.element;
                  r3 && b(r3, g(t4, {
                    x: n2.left + i3.left + s3,
                    y: n2.top + i3.top
                  }, r3));
                }), e4 && e4();
                let a2 = t3.options.lang.accessibility?.navigator.changeAnnouncement, l2 = m(t3.xAxis[0]);
                this.announcer.announce(c(a2, {
                  axisRangeDescription: l2,
                  chart: t3
                }, t3));
              }
            }).bind(this, e3), 20);
          }
        };
      }), i(t, "Accessibility/Components/SeriesComponent/SeriesDescriber.js", [t["Accessibility/Components/AnnotationsA11y.js"], t["Accessibility/Utils/ChartUtilities.js"], t["Core/Templating.js"], t["Accessibility/Utils/HTMLUtilities.js"], t["Core/Utilities.js"]], function(e2, t2, i2, s, n) {
        let {
          getPointAnnotationTexts: r
        } = e2, {
          getAxisDescription: o,
          getSeriesFirstPointElement: a,
          getSeriesA11yElement: l,
          unhideChartElementFromAT: h
        } = t2, {
          format: c,
          numberFormat: d
        } = i2, {
          reverseChildNodes: u,
          stripHTMLTagsFromString: p
        } = s, {
          find: g,
          isNumber: m,
          isString: b,
          pick: y,
          defined: f
        } = n;
        function x(e3) {
          let t3 = e3.chart.options.accessibility.series.pointDescriptionEnabledThreshold;
          return !!(false !== t3 && e3.points && e3.points.length >= +t3);
        }
        function v(e3, t3) {
          let i3 = e3.series, s2 = i3.chart, n2 = s2.options.accessibility.point || {}, r2 = i3.options.accessibility && i3.options.accessibility.point || {}, o2 = i3.tooltipOptions || {}, a2 = s2.options.lang;
          return m(t3) ? d(t3, r2.valueDecimals || n2.valueDecimals || o2.valueDecimals || -1, a2.decimalPoint, a2.accessibility.thousandsSep || a2.thousandsSep) : t3;
        }
        function A(e3, t3) {
          let i3 = e3[t3];
          return e3.chart.langFormat("accessibility.series." + t3 + "Description", {
            name: o(i3),
            series: e3
          });
        }
        function C(e3) {
          let t3 = e3.series, i3 = t3.chart.series.length > 1 || t3.options.name, s2 = function(e4) {
            let t4 = e4.series, i4 = t4.chart, s3 = t4.options.accessibility, n3 = s3 && s3.point && s3.point.valueDescriptionFormat || i4.options.accessibility.point.valueDescriptionFormat, r2 = y(t4.xAxis && t4.xAxis.options.accessibility && t4.xAxis.options.accessibility.enabled, !i4.angular && "flowmap" !== t4.type), o3 = r2 ? function(e5) {
              let t5 = function(e6) {
                let t6 = e6.series, i6 = t6.chart, s5 = t6.options.accessibility && t6.options.accessibility.point || {}, n5 = i6.options.accessibility.point || {}, r3 = t6.xAxis && t6.xAxis.dateTime;
                if (r3) {
                  let t7 = r3.getXDateFormat(e6.x || 0, i6.options.tooltip.dateTimeLabelFormats), o4 = s5.dateFormatter && s5.dateFormatter(e6) || n5.dateFormatter && n5.dateFormatter(e6) || s5.dateFormat || n5.dateFormat || t7;
                  return i6.time.dateFormat(o4, e6.x || 0, void 0);
                }
              }(e5), i5 = (e5.series.xAxis || {}).categories && f(e5.category) && ("" + e5.category).replace("<br/>", " "), s4 = f(e5.id) && 0 > ("" + e5.id).indexOf("highcharts-"), n4 = "x, " + e5.x;
              return e5.name || t5 || i5 || (s4 ? e5.id : n4);
            }(e4) : "";
            return c(n3, {
              point: e4,
              index: f(e4.index) ? e4.index + 1 : "",
              xDescription: o3,
              value: function(e5) {
                let t5 = e5.series, i5 = t5.chart.options.accessibility.point || {}, s4 = t5.chart.options.accessibility && t5.chart.options.accessibility.point || {}, n4 = t5.tooltipOptions || {}, r3 = s4.valuePrefix || i5.valuePrefix || n4.valuePrefix || "", o4 = s4.valueSuffix || i5.valueSuffix || n4.valueSuffix || "", a3 = void 0 !== e5.value ? "value" : "y", l2 = v(e5, e5[a3]);
                return e5.isNull ? t5.chart.langFormat("accessibility.series.nullPointValue", {
                  point: e5
                }) : t5.pointArrayMap ? function(e6, t6, i6) {
                  let s5 = t6 || "", n5 = i6 || "", r4 = function(t7) {
                    let i7 = v(e6, y(e6[t7], e6.options[t7]));
                    return void 0 !== i7 ? t7 + ": " + s5 + i7 + n5 : i7;
                  };
                  return e6.series.pointArrayMap.reduce(function(e7, t7) {
                    let i7 = r4(t7);
                    return i7 ? e7 + (e7.length ? ", " : "") + i7 : e7;
                  }, "");
                }(e5, r3, o4) : r3 + l2 + o4;
              }(e4),
              separator: r2 ? ", " : ""
            }, i4);
          }(e3), n2 = e3.options && e3.options.accessibility && e3.options.accessibility.description, o2 = i3 ? " " + t3.name + "." : "", a2 = function(e4) {
            let t4 = e4.series.chart, i4 = r(e4);
            return i4.length ? t4.langFormat("accessibility.series.pointAnnotationsDescription", {
              point: e4,
              annotations: i4
            }) : "";
          }(e3);
          return e3.accessibility = e3.accessibility || {}, e3.accessibility.valueDescription = s2, s2 + (n2 ? " " + n2 : "") + o2 + (a2 ? " " + a2 : "");
        }
        function w(e3) {
          let t3 = e3.chart, i3 = t3.types || [], s2 = function(e4) {
            let t4 = (e4.options.accessibility || {}).description;
            return t4 && e4.chart.langFormat("accessibility.series.description", {
              description: t4,
              series: e4
            }) || "";
          }(e3), n2 = function(i4) {
            return t3[i4] && t3[i4].length > 1 && e3[i4];
          }, r2 = e3.index + 1, o2 = A(e3, "xAxis"), a2 = A(e3, "yAxis"), l2 = {
            seriesNumber: r2,
            series: e3,
            chart: t3
          }, h2 = i3.length > 1 ? "Combination" : "", d2 = t3.langFormat("accessibility.series.summary." + e3.type + h2, l2) || t3.langFormat("accessibility.series.summary.default" + h2, l2), u2 = (n2("yAxis") ? " " + a2 + "." : "") + (n2("xAxis") ? " " + o2 + "." : "");
          return c(y(e3.options.accessibility && e3.options.accessibility.descriptionFormat, t3.options.accessibility.series.descriptionFormat, ""), {
            seriesDescription: d2,
            authorDescription: s2 ? " " + s2 : "",
            axisDescription: u2,
            series: e3,
            chart: t3,
            seriesNumber: r2
          }, void 0);
        }
        return {
          defaultPointDescriptionFormatter: C,
          defaultSeriesDescriptionFormatter: w,
          describeSeries: function(e3) {
            let t3 = e3.chart, i3 = a(e3), s2 = l(e3), n2 = t3.is3d && t3.is3d();
            s2 && (s2.lastChild !== i3 || n2 || u(s2), function(e4) {
              let t4 = function(e5) {
                let t5 = e5.options.accessibility || {};
                return !x(e5) && !t5.exposeAsGroupOnly;
              }(e4), i4 = function(e5) {
                let t5 = e5.chart.options.accessibility.keyboardNavigation.seriesNavigation;
                return !!(e5.points && (e5.points.length < +t5.pointNavigationEnabledThreshold || false === t5.pointNavigationEnabledThreshold));
              }(e4), s3 = e4.chart.options.accessibility.point.describeNull;
              (t4 || i4) && e4.points.forEach((i5) => {
                let n3 = i5.graphic && i5.graphic.element || function(e5) {
                  let t5 = e5.series, i6 = t5 && t5.chart, s4 = t5 && t5.is("sunburst"), n4 = e5.isNull, r3 = i6 && i6.options.accessibility.point.describeNull;
                  return n4 && !s4 && r3;
                }(i5) && function(e5) {
                  let t5 = e5.series, i6 = function(e6) {
                    let t6 = e6.index;
                    return e6.series && e6.series.data && f(t6) && g(e6.series.data, function(e7) {
                      return !!(e7 && void 0 !== e7.index && e7.index > t6 && e7.graphic && e7.graphic.element);
                    }) || null;
                  }(e5), s4 = i6 && i6.graphic, n4 = s4 ? s4.parentGroup : t5.graph || t5.group, r3 = i6 ? {
                    x: y(e5.plotX, i6.plotX, 0),
                    y: y(e5.plotY, i6.plotY, 0)
                  } : {
                    x: y(e5.plotX, 0),
                    y: y(e5.plotY, 0)
                  }, o2 = function(e6, t6) {
                    let i7 = e6.series.chart.renderer.rect(t6.x, t6.y, 1, 1);
                    return i7.attr({
                      class: "highcharts-a11y-mock-point",
                      fill: "none",
                      opacity: 0,
                      "fill-opacity": 0,
                      "stroke-opacity": 0
                    }), i7;
                  }(e5, r3);
                  if (n4 && n4.element) return e5.graphic = o2, e5.hasMockGraphic = true, o2.add(n4), n4.element.insertBefore(o2.element, s4 ? s4.element : null), o2.element;
                }(i5), r2 = i5.options && i5.options.accessibility && false === i5.options.accessibility.enabled;
                if (n3) {
                  if (i5.isNull && !s3) {
                    n3.setAttribute("aria-hidden", true);
                    return;
                  }
                  n3.setAttribute("tabindex", "-1"), e4.chart.styledMode || (n3.style.outline = "none"), t4 && !r2 ? function(e5, t5) {
                    let i6 = e5.series, s4 = i6.options.accessibility?.point || {}, n4 = i6.chart.options.accessibility.point || {}, r3 = p(b(s4.descriptionFormat) && c(s4.descriptionFormat, e5, i6.chart) || s4.descriptionFormatter?.(e5) || b(n4.descriptionFormat) && c(n4.descriptionFormat, e5, i6.chart) || n4.descriptionFormatter?.(e5) || C(e5), i6.chart.renderer.forExport);
                    t5.setAttribute("role", "img"), t5.setAttribute("aria-label", r3);
                  }(i5, n3) : n3.setAttribute("aria-hidden", true);
                }
              });
            }(e3), h(t3, s2), function(e4) {
              let t4 = e4.chart, i4 = t4.options.chart, s3 = i4.options3d && i4.options3d.enabled, n3 = t4.series.length > 1, r2 = t4.options.accessibility.series.describeSingleSeries, o2 = (e4.options.accessibility || {}).exposeAsGroupOnly;
              return !(s3 && n3) && (n3 || r2 || o2 || x(e4));
            }(e3) ? function(e4, t4) {
              let i4 = e4.options.accessibility || {}, s3 = e4.chart.options.accessibility, n3 = s3.landmarkVerbosity;
              i4.exposeAsGroupOnly ? t4.setAttribute("role", "img") : "all" === n3 ? t4.setAttribute("role", "region") : t4.setAttribute("role", "group"), t4.setAttribute("tabindex", "-1"), e4.chart.styledMode || (t4.style.outline = "none"), t4.setAttribute("aria-label", p(s3.series.descriptionFormatter && s3.series.descriptionFormatter(e4) || w(e4), e4.chart.renderer.forExport));
            }(e3, s2) : s2.removeAttribute("aria-label"));
          }
        };
      }), i(t, "Accessibility/Components/SeriesComponent/NewDataAnnouncer.js", [t["Core/Globals.js"], t["Core/Utilities.js"], t["Accessibility/Utils/Announcer.js"], t["Accessibility/Utils/ChartUtilities.js"], t["Accessibility/Utils/EventProvider.js"], t["Accessibility/Components/SeriesComponent/SeriesDescriber.js"]], function(e2, t2, i2, s, n, r) {
        let {
          composed: o
        } = e2, {
          addEvent: a,
          defined: l,
          pushUnique: h
        } = t2, {
          getChartTitle: c
        } = s, {
          defaultPointDescriptionFormatter: d,
          defaultSeriesDescriptionFormatter: u
        } = r;
        function p(e3) {
          return !!e3.options.accessibility.announceNewData.enabled;
        }
        class g {
          constructor(e3) {
            this.dirty = {
              allSeries: {}
            }, this.lastAnnouncementTime = 0, this.chart = e3;
          }
          init() {
            let e3 = this.chart, t3 = e3.options.accessibility.announceNewData.interruptUser ? "assertive" : "polite";
            this.lastAnnouncementTime = 0, this.dirty = {
              allSeries: {}
            }, this.eventProvider = new n(), this.announcer = new i2(e3, t3), this.addEventListeners();
          }
          destroy() {
            this.eventProvider.removeAddedEvents(), this.announcer.destroy();
          }
          addEventListeners() {
            let e3 = this, t3 = this.chart, i3 = this.eventProvider;
            i3.addEvent(t3, "afterApplyDrilldown", function() {
              e3.lastAnnouncementTime = 0;
            }), i3.addEvent(t3, "afterAddSeries", function(t4) {
              e3.onSeriesAdded(t4.series);
            }), i3.addEvent(t3, "redraw", function() {
              e3.announceDirtyData();
            });
          }
          onSeriesAdded(e3) {
            p(this.chart) && (this.dirty.hasDirty = true, this.dirty.allSeries[e3.name + e3.index] = e3, this.dirty.newSeries = l(this.dirty.newSeries) ? void 0 : e3);
          }
          announceDirtyData() {
            let e3 = this.chart, t3 = this;
            if (e3.options.accessibility.announceNewData && this.dirty.hasDirty) {
              let e4 = this.dirty.newPoint;
              e4 && (e4 = function(e5) {
                let t4 = e5.series.data.filter((t5) => e5.x === t5.x && e5.y === t5.y);
                return 1 === t4.length ? t4[0] : e5;
              }(e4)), this.queueAnnouncement(Object.keys(this.dirty.allSeries).map((e5) => t3.dirty.allSeries[e5]), this.dirty.newSeries, e4), this.dirty = {
                allSeries: {}
              };
            }
          }
          queueAnnouncement(e3, t3, i3) {
            let s2 = this.chart.options.accessibility.announceNewData;
            if (s2.enabled) {
              let n2 = +/* @__PURE__ */ new Date(), r2 = n2 - this.lastAnnouncementTime, o2 = Math.max(0, s2.minAnnounceInterval - r2), a2 = function(e4, t4) {
                let i4 = (e4 || []).concat(t4 || []).reduce((e5, t5) => (e5[t5.name + t5.index] = t5, e5), {});
                return Object.keys(i4).map((e5) => i4[e5]);
              }(this.queuedAnnouncement && this.queuedAnnouncement.series, e3), l2 = this.buildAnnouncementMessage(a2, t3, i3);
              l2 && (this.queuedAnnouncement && clearTimeout(this.queuedAnnouncementTimer), this.queuedAnnouncement = {
                time: n2,
                message: l2,
                series: a2
              }, this.queuedAnnouncementTimer = setTimeout(() => {
                this && this.announcer && (this.lastAnnouncementTime = +/* @__PURE__ */ new Date(), this.announcer.announce(this.queuedAnnouncement.message), delete this.queuedAnnouncement, delete this.queuedAnnouncementTimer);
              }, o2));
            }
          }
          buildAnnouncementMessage(t3, i3, s2) {
            let n2 = this.chart, r2 = n2.options.accessibility.announceNewData;
            if (r2.announcementFormatter) {
              let e3 = r2.announcementFormatter(t3, i3, s2);
              if (false !== e3) return e3.length ? e3 : null;
            }
            let o2 = e2.charts && e2.charts.length > 1 ? "Multiple" : "Single", a2 = i3 ? "newSeriesAnnounce" + o2 : s2 ? "newPointAnnounce" + o2 : "newDataAnnounce", l2 = c(n2);
            return n2.langFormat("accessibility.announceNewData." + a2, {
              chartTitle: l2,
              seriesDesc: i3 ? u(i3) : null,
              pointDesc: s2 ? d(s2) : null,
              point: s2,
              series: i3
            });
          }
        }
        return function(e3) {
          function t3(e4) {
            let t4 = this.chart, i4 = t4.accessibility?.components.series.newDataAnnouncer;
            i4 && i4.chart === t4 && p(t4) && (i4.dirty.newPoint = l(i4.dirty.newPoint) ? void 0 : e4.point);
          }
          function i3() {
            let e4 = this.chart, t4 = e4.accessibility?.components.series.newDataAnnouncer;
            t4 && t4.chart === e4 && p(e4) && (t4.dirty.hasDirty = true, t4.dirty.allSeries[this.name + this.index] = this);
          }
          e3.compose = function(e4) {
            h(o, "A11y.NDA") && (a(e4, "addPoint", t3), a(e4, "updatedData", i3));
          };
        }(g || (g = {})), g;
      }), i(t, "Accessibility/ProxyElement.js", [t["Core/Globals.js"], t["Core/Utilities.js"], t["Accessibility/Utils/EventProvider.js"], t["Accessibility/Utils/ChartUtilities.js"], t["Accessibility/Utils/HTMLUtilities.js"]], function(e2, t2, i2, s, n) {
        let {
          doc: r
        } = e2, {
          attr: o,
          css: a,
          merge: l
        } = t2, {
          fireEventOnWrappedOrUnwrappedElement: h
        } = s, {
          cloneMouseEvent: c,
          cloneTouchEvent: d,
          getFakeMouseEvent: u,
          removeElement: p
        } = n;
        return class {
          constructor(e3, t3, s2 = "button", n2, o2) {
            this.chart = e3, this.target = t3, this.eventProvider = new i2();
            let a2 = this.innerElement = r.createElement(s2), l2 = this.element = n2 ? r.createElement(n2) : a2;
            e3.styledMode || this.hideElementVisually(a2), n2 && ("li" !== n2 || e3.styledMode || (l2.style.listStyle = "none"), l2.appendChild(a2), this.element = l2), this.updateTarget(t3, o2);
          }
          click() {
            let e3 = this.getTargetPosition();
            e3.x += e3.width / 2, e3.y += e3.height / 2;
            let t3 = u("click", e3);
            h(this.target.click, t3);
          }
          updateTarget(e3, t3) {
            this.target = e3, this.updateCSSClassName();
            let i3 = t3 || {};
            Object.keys(i3).forEach((e4) => {
              null === i3[e4] && delete i3[e4];
            });
            let s2 = this.getTargetAttr(e3.click, "aria-label");
            o(this.innerElement, l(s2 ? {
              "aria-label": s2
            } : {}, i3)), this.eventProvider.removeAddedEvents(), this.addProxyEventsToElement(this.innerElement, e3.click), this.refreshPosition();
          }
          refreshPosition() {
            let e3 = this.getTargetPosition();
            a(this.innerElement, {
              width: (e3.width || 1) + "px",
              height: (e3.height || 1) + "px",
              left: (Math.round(e3.x) || 0) + "px",
              top: (Math.round(e3.y) || 0) + "px"
            });
          }
          remove() {
            this.eventProvider.removeAddedEvents(), p(this.element);
          }
          updateCSSClassName() {
            let e3 = (e4) => e4.indexOf("highcharts-no-tooltip") > -1, t3 = this.chart.legend, i3 = t3.group && t3.group.div, s2 = e3(i3 && i3.className || ""), n2 = e3(this.getTargetAttr(this.target.click, "class") || "");
            this.innerElement.className = s2 || n2 ? "highcharts-a11y-proxy-element highcharts-no-tooltip" : "highcharts-a11y-proxy-element";
          }
          addProxyEventsToElement(e3, t3) {
            ["click", "touchstart", "touchend", "touchcancel", "touchmove", "mouseover", "mouseenter", "mouseleave", "mouseout"].forEach((i3) => {
              let s2 = 0 === i3.indexOf("touch");
              this.eventProvider.addEvent(e3, i3, (e4) => {
                let i4 = s2 ? d(e4) : c(e4);
                t3 && h(t3, i4), e4.stopPropagation(), s2 || e4.preventDefault();
              }, {
                passive: false
              });
            });
          }
          hideElementVisually(e3) {
            a(e3, {
              borderWidth: 0,
              backgroundColor: "transparent",
              cursor: "pointer",
              outline: "none",
              opacity: 1e-3,
              filter: "alpha(opacity=1)",
              zIndex: 999,
              overflow: "hidden",
              padding: 0,
              margin: 0,
              display: "block",
              position: "absolute",
              "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=1)"
            });
          }
          getTargetPosition() {
            let e3 = this.target.click, t3 = e3.element ? e3.element : e3, i3 = this.target.visual || t3, s2 = this.chart.renderTo, n2 = this.chart.pointer;
            if (s2 && i3?.getBoundingClientRect && n2) {
              let e4 = i3.getBoundingClientRect(), t4 = n2.getChartPosition();
              return {
                x: (e4.left - t4.left) / t4.scaleX,
                y: (e4.top - t4.top) / t4.scaleY,
                width: e4.right / t4.scaleX - e4.left / t4.scaleX,
                height: e4.bottom / t4.scaleY - e4.top / t4.scaleY
              };
            }
            return {
              x: 0,
              y: 0,
              width: 1,
              height: 1
            };
          }
          getTargetAttr(e3, t3) {
            return e3.element ? e3.element.getAttribute(t3) : e3.getAttribute(t3);
          }
        };
      }), i(t, "Accessibility/ProxyProvider.js", [t["Core/Globals.js"], t["Core/Utilities.js"], t["Accessibility/Utils/ChartUtilities.js"], t["Accessibility/Utils/DOMElementProvider.js"], t["Accessibility/Utils/HTMLUtilities.js"], t["Accessibility/ProxyElement.js"]], function(e2, t2, i2, s, n, r) {
        let {
          doc: o
        } = e2, {
          attr: a,
          css: l
        } = t2, {
          unhideChartElementFromAT: h
        } = i2, {
          removeChildNodes: c
        } = n;
        return class {
          constructor(e3) {
            this.chart = e3, this.domElementProvider = new s(), this.groups = {}, this.groupOrder = [], this.beforeChartProxyPosContainer = this.createProxyPosContainer("before"), this.afterChartProxyPosContainer = this.createProxyPosContainer("after"), this.update();
          }
          addProxyElement(e3, t3, i3 = "button", s2) {
            let n2 = this.groups[e3];
            if (!n2) throw Error("ProxyProvider.addProxyElement: Invalid group key " + e3);
            let o2 = "ul" === n2.type || "ol" === n2.type ? "li" : void 0, a2 = new r(this.chart, t3, i3, o2, s2);
            return n2.proxyContainerElement.appendChild(a2.element), n2.proxyElements.push(a2), a2;
          }
          addGroup(e3, t3 = "div", i3) {
            let s2;
            let n2 = this.groups[e3];
            if (n2) return n2.groupElement;
            let r2 = this.domElementProvider.createElement(t3);
            return i3 && i3.role && "div" !== t3 ? (s2 = this.domElementProvider.createElement("div")).appendChild(r2) : s2 = r2, s2.className = "highcharts-a11y-proxy-group highcharts-a11y-proxy-group-" + e3.replace(/\W/g, "-"), this.groups[e3] = {
              proxyContainerElement: r2,
              groupElement: s2,
              type: t3,
              proxyElements: []
            }, a(s2, i3 || {}), "ul" === t3 && r2.setAttribute("role", "list"), this.afterChartProxyPosContainer.appendChild(s2), this.updateGroupOrder(this.groupOrder), s2;
          }
          updateGroupAttrs(e3, t3) {
            let i3 = this.groups[e3];
            if (!i3) throw Error("ProxyProvider.updateGroupAttrs: Invalid group key " + e3);
            a(i3.groupElement, t3);
          }
          updateGroupOrder(e3) {
            if (this.groupOrder = e3.slice(), this.isDOMOrderGroupOrder()) return;
            let t3 = e3.indexOf("series"), i3 = t3 > -1 ? e3.slice(0, t3) : e3, s2 = t3 > -1 ? e3.slice(t3 + 1) : [], n2 = o.activeElement;
            ["before", "after"].forEach((e4) => {
              let t4 = this["before" === e4 ? "beforeChartProxyPosContainer" : "afterChartProxyPosContainer"];
              c(t4), ("before" === e4 ? i3 : s2).forEach((e5) => {
                let i4 = this.groups[e5];
                i4 && t4.appendChild(i4.groupElement);
              });
            }), (this.beforeChartProxyPosContainer.contains(n2) || this.afterChartProxyPosContainer.contains(n2)) && n2 && n2.focus && n2.focus();
          }
          clearGroup(e3) {
            let t3 = this.groups[e3];
            if (!t3) throw Error("ProxyProvider.clearGroup: Invalid group key " + e3);
            c(t3.proxyContainerElement);
          }
          removeGroup(e3) {
            let t3 = this.groups[e3];
            t3 && (this.domElementProvider.removeElement(t3.groupElement), t3.groupElement !== t3.proxyContainerElement && this.domElementProvider.removeElement(t3.proxyContainerElement), delete this.groups[e3]);
          }
          update() {
            this.updatePosContainerPositions(), this.updateGroupOrder(this.groupOrder), this.updateProxyElementPositions();
          }
          updateProxyElementPositions() {
            Object.keys(this.groups).forEach(this.updateGroupProxyElementPositions.bind(this));
          }
          updateGroupProxyElementPositions(e3) {
            let t3 = this.groups[e3];
            t3 && t3.proxyElements.forEach((e4) => e4.refreshPosition());
          }
          destroy() {
            this.domElementProvider.destroyCreatedElements();
          }
          createProxyPosContainer(e3) {
            let t3 = this.domElementProvider.createElement("div");
            return t3.setAttribute("aria-hidden", "false"), t3.className = "highcharts-a11y-proxy-container" + (e3 ? "-" + e3 : ""), l(t3, {
              top: "0",
              left: "0"
            }), this.chart.styledMode || (t3.style.whiteSpace = "nowrap", t3.style.position = "absolute"), t3;
          }
          getCurrentGroupOrderInDOM() {
            let e3 = (e4) => {
              let t4 = Object.keys(this.groups), i4 = t4.length;
              for (; i4--; ) {
                let s3 = t4[i4], n2 = this.groups[s3];
                if (n2 && e4 === n2.groupElement) return s3;
              }
            }, t3 = (t4) => {
              let i4 = [], s3 = t4.children;
              for (let t5 = 0; t5 < s3.length; ++t5) {
                let n2 = e3(s3[t5]);
                n2 && i4.push(n2);
              }
              return i4;
            }, i3 = t3(this.beforeChartProxyPosContainer), s2 = t3(this.afterChartProxyPosContainer);
            return i3.push("series"), i3.concat(s2);
          }
          isDOMOrderGroupOrder() {
            let e3 = this.getCurrentGroupOrderInDOM(), t3 = this.groupOrder.filter((e4) => "series" === e4 || !!this.groups[e4]), i3 = e3.length;
            if (i3 !== t3.length) return false;
            for (; i3--; ) if (e3[i3] !== t3[i3]) return false;
            return true;
          }
          updatePosContainerPositions() {
            let e3 = this.chart;
            if (e3.renderer.forExport) return;
            let t3 = e3.renderer.box;
            e3.container.insertBefore(this.afterChartProxyPosContainer, t3.nextSibling), e3.container.insertBefore(this.beforeChartProxyPosContainer, t3), h(this.chart, this.afterChartProxyPosContainer), h(this.chart, this.beforeChartProxyPosContainer);
          }
        };
      }), i(t, "Accessibility/Components/RangeSelectorComponent.js", [t["Accessibility/AccessibilityComponent.js"], t["Accessibility/Utils/Announcer.js"], t["Accessibility/Utils/ChartUtilities.js"], t["Accessibility/KeyboardNavigationHandler.js"], t["Core/Utilities.js"]], function(e2, t2, i2, s, n) {
        let {
          unhideChartElementFromAT: r,
          getAxisRangeDescription: o
        } = i2, {
          addEvent: a,
          attr: l
        } = n;
        class h extends e2 {
          init() {
            let e3 = this.chart;
            this.announcer = new t2(e3, "polite");
          }
          onChartUpdate() {
            let e3 = this.chart, t3 = this, i3 = e3.rangeSelector;
            i3 && (this.updateSelectorVisibility(), this.setDropdownAttrs(), i3.buttons && i3.buttons.length && i3.buttons.forEach((e4) => {
              t3.setRangeButtonAttrs(e4);
            }), i3.maxInput && i3.minInput && ["minInput", "maxInput"].forEach(function(s2, n2) {
              let o2 = i3[s2];
              o2 && (r(e3, o2), t3.setRangeInputAttrs(o2, "accessibility.rangeSelector." + (n2 ? "max" : "min") + "InputLabel"));
            }));
          }
          updateSelectorVisibility() {
            let e3 = this.chart, t3 = e3.rangeSelector, i3 = t3 && t3.dropdown, s2 = t3 && t3.buttons || [], n2 = (e4) => e4.setAttribute("aria-hidden", true);
            t3 && t3.hasVisibleDropdown && i3 ? (r(e3, i3), s2.forEach((e4) => n2(e4.element))) : (i3 && n2(i3), s2.forEach((t4) => r(e3, t4.element)));
          }
          setDropdownAttrs() {
            let e3 = this.chart, t3 = e3.rangeSelector && e3.rangeSelector.dropdown;
            if (t3) {
              let i3 = e3.langFormat("accessibility.rangeSelector.dropdownLabel", {
                rangeTitle: e3.options.lang.rangeSelectorZoom
              });
              t3.setAttribute("aria-label", i3), t3.setAttribute("tabindex", -1);
            }
          }
          setRangeButtonAttrs(e3) {
            l(e3.element, {
              tabindex: -1,
              role: "button"
            });
          }
          setRangeInputAttrs(e3, t3) {
            let i3 = this.chart;
            l(e3, {
              tabindex: -1,
              "aria-label": i3.langFormat(t3, {
                chart: i3
              })
            });
          }
          onButtonNavKbdArrowKey(e3, t3) {
            let i3 = e3.response, s2 = this.keyCodes, n2 = this.chart, r2 = n2.options.accessibility.keyboardNavigation.wrapAround, o2 = t3 === s2.left || t3 === s2.up ? -1 : 1;
            return n2.highlightRangeSelectorButton(n2.highlightedRangeSelectorItemIx + o2) ? i3.success : r2 ? (e3.init(o2), i3.success) : i3[o2 > 0 ? "next" : "prev"];
          }
          onButtonNavKbdClick(e3) {
            let t3 = e3.response, i3 = this.chart;
            return 3 !== i3.oldRangeSelectorItemState && this.fakeClickEvent(i3.rangeSelector.buttons[i3.highlightedRangeSelectorItemIx].element), t3.success;
          }
          onAfterBtnClick() {
            let e3 = this.chart, t3 = o(e3.xAxis[0]), i3 = e3.langFormat("accessibility.rangeSelector.clickButtonAnnouncement", {
              chart: e3,
              axisRangeDescription: t3
            });
            i3 && this.announcer.announce(i3);
          }
          onInputKbdMove(e3) {
            let t3 = this.chart, i3 = t3.rangeSelector, s2 = t3.highlightedInputRangeIx = (t3.highlightedInputRangeIx || 0) + e3;
            if (s2 > 1 || s2 < 0) {
              if (t3.accessibility) return t3.accessibility.keyboardNavigation.exiting = true, t3.accessibility.keyboardNavigation.tabindexContainer.focus(), t3.accessibility.keyboardNavigation.move(e3);
            } else if (i3) {
              let e4 = i3[s2 ? "maxDateBox" : "minDateBox"], n2 = i3[s2 ? "maxInput" : "minInput"];
              e4 && n2 && t3.setFocusToElement(e4, n2);
            }
            return true;
          }
          onInputNavInit(e3) {
            let t3 = this, i3 = this.chart, s2 = e3 > 0 ? 0 : 1, n2 = i3.rangeSelector, r2 = n2 && n2[s2 ? "maxDateBox" : "minDateBox"], o2 = n2 && n2.minInput, l2 = n2 && n2.maxInput;
            if (i3.highlightedInputRangeIx = s2, r2 && o2 && l2) {
              i3.setFocusToElement(r2, s2 ? l2 : o2), this.removeInputKeydownHandler && this.removeInputKeydownHandler();
              let e4 = (e5) => {
                (e5.which || e5.keyCode) === this.keyCodes.tab && t3.onInputKbdMove(e5.shiftKey ? -1 : 1) && (e5.preventDefault(), e5.stopPropagation());
              }, n3 = a(o2, "keydown", e4), h2 = a(l2, "keydown", e4);
              this.removeInputKeydownHandler = () => {
                n3(), h2();
              };
            }
          }
          onInputNavTerminate() {
            let e3 = this.chart.rangeSelector || {};
            e3.maxInput && e3.hideInput("max"), e3.minInput && e3.hideInput("min"), this.removeInputKeydownHandler && (this.removeInputKeydownHandler(), delete this.removeInputKeydownHandler);
          }
          initDropdownNav() {
            let e3 = this.chart, t3 = e3.rangeSelector, i3 = t3 && t3.dropdown;
            t3 && i3 && (e3.setFocusToElement(t3.buttonGroup, i3), this.removeDropdownKeydownHandler && this.removeDropdownKeydownHandler(), this.removeDropdownKeydownHandler = a(i3, "keydown", (t4) => {
              let i4 = (t4.which || t4.keyCode) === this.keyCodes.tab, s2 = e3.accessibility;
              i4 && (t4.preventDefault(), t4.stopPropagation(), s2 && (s2.keyboardNavigation.tabindexContainer.focus(), s2.keyboardNavigation.move(t4.shiftKey ? -1 : 1)));
            }));
          }
          getRangeSelectorButtonNavigation() {
            let e3 = this.chart, t3 = this.keyCodes, i3 = this;
            return new s(e3, {
              keyCodeMap: [[[t3.left, t3.right, t3.up, t3.down], function(e4) {
                return i3.onButtonNavKbdArrowKey(this, e4);
              }], [[t3.enter, t3.space], function() {
                return i3.onButtonNavKbdClick(this);
              }]],
              validate: function() {
                return !!(e3.rangeSelector && e3.rangeSelector.buttons && e3.rangeSelector.buttons.length);
              },
              init: function(t4) {
                let s2 = e3.rangeSelector;
                if (s2 && s2.hasVisibleDropdown) i3.initDropdownNav();
                else if (s2) {
                  let i4 = s2.buttons.length - 1;
                  e3.highlightRangeSelectorButton(t4 > 0 ? 0 : i4);
                }
              },
              terminate: function() {
                i3.removeDropdownKeydownHandler && (i3.removeDropdownKeydownHandler(), delete i3.removeDropdownKeydownHandler);
              }
            });
          }
          getRangeSelectorInputNavigation() {
            let e3 = this.chart, t3 = this;
            return new s(e3, {
              keyCodeMap: [],
              validate: function() {
                return !!(e3.rangeSelector && e3.rangeSelector.inputGroup && "hidden" !== e3.rangeSelector.inputGroup.element.style.visibility && false !== e3.options.rangeSelector.inputEnabled && e3.rangeSelector.minInput && e3.rangeSelector.maxInput);
              },
              init: function(e4) {
                t3.onInputNavInit(e4);
              },
              terminate: function() {
                t3.onInputNavTerminate();
              }
            });
          }
          getKeyboardNavigation() {
            return [this.getRangeSelectorButtonNavigation(), this.getRangeSelectorInputNavigation()];
          }
          destroy() {
            this.removeDropdownKeydownHandler && this.removeDropdownKeydownHandler(), this.removeInputKeydownHandler && this.removeInputKeydownHandler(), this.announcer && this.announcer.destroy();
          }
        }
        return function(e3) {
          function t3(e4) {
            let t4 = this.rangeSelector && this.rangeSelector.buttons || [], i4 = this.highlightedRangeSelectorItemIx, s2 = this.rangeSelector && this.rangeSelector.selected;
            return void 0 !== i4 && t4[i4] && i4 !== s2 && t4[i4].setState(this.oldRangeSelectorItemState || 0), this.highlightedRangeSelectorItemIx = e4, !!t4[e4] && (this.setFocusToElement(t4[e4].box, t4[e4].element), e4 !== s2 && (this.oldRangeSelectorItemState = t4[e4].state, t4[e4].setState(1)), true);
          }
          function i3() {
            let e4 = this.chart.accessibility;
            if (e4 && e4.components.rangeSelector) return e4.components.rangeSelector.onAfterBtnClick();
          }
          e3.compose = function(e4, s2) {
            let n2 = e4.prototype;
            n2.highlightRangeSelectorButton || (n2.highlightRangeSelectorButton = t3, a(s2, "afterBtnClick", i3));
          };
        }(h || (h = {})), h;
      }), i(t, "Accessibility/Components/SeriesComponent/ForcedMarkers.js", [t["Core/Globals.js"], t["Core/Utilities.js"]], function(e2, t2) {
        var i2;
        let {
          composed: s
        } = e2, {
          addEvent: n,
          merge: r,
          pushUnique: o
        } = t2;
        return function(e3) {
          function t3(e4) {
            r(true, e4, {
              marker: {
                enabled: true,
                states: {
                  normal: {
                    opacity: 0
                  }
                }
              }
            });
          }
          function i3(e4) {
            return e4.marker.states && e4.marker.states.normal && e4.marker.states.normal.opacity;
          }
          function a(e4) {
            return !!(e4._hasPointMarkers && e4.points && e4.points.length);
          }
          function l() {
            this.chart.styledMode && (this.markerGroup && this.markerGroup[this.a11yMarkersForced ? "addClass" : "removeClass"]("highcharts-a11y-markers-hidden"), a(this) && this.points.forEach((e4) => {
              e4.graphic && (e4.graphic[e4.hasForcedA11yMarker ? "addClass" : "removeClass"]("highcharts-a11y-marker-hidden"), e4.graphic[false === e4.hasForcedA11yMarker ? "addClass" : "removeClass"]("highcharts-a11y-marker-visible"));
            }));
          }
          function h(e4) {
            this.resetA11yMarkerOptions = r(e4.options.marker || {}, this.userOptions.marker || {});
          }
          function c() {
            let e4 = this.options;
            (function(e5) {
              let t4 = e5.chart.options.accessibility.enabled, i4 = false !== (e5.options.accessibility && e5.options.accessibility.enabled);
              return t4 && i4 && function(e6) {
                let t5 = e6.chart.options.accessibility;
                return e6.points.length < t5.series.pointDescriptionEnabledThreshold || false === t5.series.pointDescriptionEnabledThreshold;
              }(e5);
            })(this) ? (e4.marker && false === e4.marker.enabled && (this.a11yMarkersForced = true, t3(this.options)), a(this) && function(e5) {
              let s2 = e5.points.length;
              for (; s2--; ) {
                let n2 = e5.points[s2], o2 = n2.options, a2 = n2.hasForcedA11yMarker;
                if (delete n2.hasForcedA11yMarker, o2.marker) {
                  let e6 = a2 && 0 === i3(o2);
                  o2.marker.enabled && !e6 ? (r(true, o2.marker, {
                    states: {
                      normal: {
                        opacity: i3(o2) || 1
                      }
                    }
                  }), n2.hasForcedA11yMarker = false) : false === o2.marker.enabled && (t3(o2), n2.hasForcedA11yMarker = true);
                }
              }
            }(this)) : this.a11yMarkersForced && (delete this.a11yMarkersForced, function(e5) {
              let t4 = e5.resetA11yMarkerOptions;
              if (t4) {
                let i4 = t4.states && t4.states.normal && t4.states.normal.opacity;
                e5.userOptions && e5.userOptions.marker && (e5.userOptions.marker.enabled = true), e5.update({
                  marker: {
                    enabled: t4.enabled,
                    states: {
                      normal: {
                        opacity: i4
                      }
                    }
                  }
                });
              }
            }(this), delete this.resetA11yMarkerOptions);
          }
          function d() {
            this.boosted && this.a11yMarkersForced && (r(true, this.options, {
              marker: {
                enabled: false
              }
            }), delete this.a11yMarkersForced);
          }
          e3.compose = function(e4) {
            o(s, "A11y.FM") && (n(e4, "afterSetOptions", h), n(e4, "render", c), n(e4, "afterRender", l), n(e4, "renderCanvas", d));
          };
        }(i2 || (i2 = {})), i2;
      }), i(t, "Accessibility/Components/SeriesComponent/SeriesKeyboardNavigation.js", [t["Core/Series/Point.js"], t["Core/Series/Series.js"], t["Core/Series/SeriesRegistry.js"], t["Core/Globals.js"], t["Core/Utilities.js"], t["Accessibility/KeyboardNavigationHandler.js"], t["Accessibility/Utils/EventProvider.js"], t["Accessibility/Utils/ChartUtilities.js"]], function(e2, t2, i2, s, n, r, o, a) {
        let {
          seriesTypes: l
        } = i2, {
          doc: h
        } = s, {
          defined: c,
          fireEvent: d
        } = n, {
          getPointFromXY: u,
          getSeriesFromName: p,
          scrollAxisToPoint: g
        } = a;
        function m(e3) {
          let t3 = e3.index, i3 = e3.series.points, s2 = i3.length;
          if (i3[t3] === e3) return t3;
          for (; s2--; ) if (i3[s2] === e3) return s2;
        }
        function b(e3) {
          let t3 = e3.chart.options.accessibility.keyboardNavigation.seriesNavigation, i3 = e3.options.accessibility || {}, s2 = i3.keyboardNavigation;
          return s2 && false === s2.enabled || false === i3.enabled || false === e3.options.enableMouseTracking || !e3.visible || t3.pointNavigationEnabledThreshold && +t3.pointNavigationEnabledThreshold <= e3.points.length;
        }
        function y(e3) {
          let t3 = e3.series.chart.options.accessibility, i3 = e3.options.accessibility && false === e3.options.accessibility.enabled;
          return e3.isNull && t3.keyboardNavigation.seriesNavigation.skipNullPoints || false === e3.visible || false === e3.isInside || i3 || b(e3.series);
        }
        function f(e3) {
          let t3 = e3.series || [], i3 = t3.length;
          for (let e4 = 0; e4 < i3; ++e4) if (!b(t3[e4])) {
            let i4 = function(e5) {
              let t4 = e5.points || [], i5 = t4.length;
              for (let e6 = 0; e6 < i5; ++e6) if (!y(t4[e6])) return t4[e6];
              return null;
            }(t3[e4]);
            if (i4) return i4;
          }
          return null;
        }
        function x(e3) {
          let t3 = e3.series.length, i3 = false;
          for (; t3-- && (e3.highlightedPoint = e3.series[t3].points[e3.series[t3].points.length - 1], !(i3 = e3.series[t3].highlightNextValidPoint())); ) ;
          return i3;
        }
        function v(e3) {
          delete e3.highlightedPoint;
          let t3 = f(e3);
          return !!t3 && t3.highlight();
        }
        class A {
          constructor(e3, t3) {
            this.keyCodes = t3, this.chart = e3;
          }
          init() {
            let i3 = this, s2 = this.chart, n2 = this.eventProvider = new o();
            n2.addEvent(t2, "destroy", function() {
              return i3.onSeriesDestroy(this);
            }), n2.addEvent(s2, "afterApplyDrilldown", function() {
              !function(e3) {
                let t3 = f(e3);
                t3 && t3.highlight(false);
              }(this);
            }), n2.addEvent(s2, "drilldown", function(e3) {
              let t3 = e3.point, s3 = t3.series;
              i3.lastDrilledDownPoint = {
                x: t3.x,
                y: t3.y,
                seriesName: s3 ? s3.name : ""
              };
            }), n2.addEvent(s2, "drillupall", function() {
              setTimeout(function() {
                i3.onDrillupAll();
              }, 10);
            }), n2.addEvent(e2, "afterSetState", function() {
              let e3 = this.graphic && this.graphic.element, t3 = h.activeElement, i4 = t3 && t3.getAttribute("class"), n3 = i4 && i4.indexOf("highcharts-a11y-proxy-element") > -1;
              s2.highlightedPoint === this && t3 !== e3 && !n3 && e3 && e3.focus && e3.focus();
            });
          }
          onDrillupAll() {
            let e3;
            let t3 = this.lastDrilledDownPoint, i3 = this.chart, s2 = t3 && p(i3, t3.seriesName);
            t3 && s2 && c(t3.x) && c(t3.y) && (e3 = u(s2, t3.x, t3.y)), e3 = e3 || f(i3), i3.container && i3.container.focus(), e3 && e3.highlight && e3.highlight(false);
          }
          getKeyboardNavigationHandler() {
            let e3 = this, t3 = this.keyCodes, i3 = this.chart, s2 = i3.inverted;
            return new r(i3, {
              keyCodeMap: [[s2 ? [t3.up, t3.down] : [t3.left, t3.right], function(t4) {
                return e3.onKbdSideways(this, t4);
              }], [s2 ? [t3.left, t3.right] : [t3.up, t3.down], function(t4) {
                return e3.onKbdVertical(this, t4);
              }], [[t3.enter, t3.space], function(e4, t4) {
                let s3 = i3.highlightedPoint;
                if (s3) {
                  let {
                    plotLeft: e5,
                    plotTop: i4
                  } = this.chart, {
                    plotX: n2 = 0,
                    plotY: r2 = 0
                  } = s3;
                  t4 = __spreadProps(__spreadValues({}, t4), {
                    chartX: e5 + n2,
                    chartY: i4 + r2,
                    point: s3,
                    target: s3.graphic?.element || t4.target
                  }), d(s3.series, "click", t4), s3.firePointEvent("click", t4);
                }
                return this.response.success;
              }], [[t3.home], function() {
                return v(i3), this.response.success;
              }], [[t3.end], function() {
                return x(i3), this.response.success;
              }], [[t3.pageDown, t3.pageUp], function(e4) {
                return i3.highlightAdjacentSeries(e4 === t3.pageDown), this.response.success;
              }]],
              init: function() {
                return e3.onHandlerInit(this);
              },
              validate: function() {
                return !!f(i3);
              },
              terminate: function() {
                return e3.onHandlerTerminate();
              }
            });
          }
          onKbdSideways(e3, t3) {
            let i3 = this.keyCodes, s2 = t3 === i3.right || t3 === i3.down;
            return this.attemptHighlightAdjacentPoint(e3, s2);
          }
          onHandlerInit(e3) {
            let t3 = this.chart;
            return t3.options.accessibility.keyboardNavigation.seriesNavigation.rememberPointFocus && t3.highlightedPoint ? t3.highlightedPoint.highlight() : v(t3), e3.response.success;
          }
          onKbdVertical(e3, t3) {
            let i3 = this.chart, s2 = this.keyCodes, n2 = t3 === s2.down || t3 === s2.right, r2 = i3.options.accessibility.keyboardNavigation.seriesNavigation;
            if (r2.mode && "serialize" === r2.mode) return this.attemptHighlightAdjacentPoint(e3, n2);
            let o2 = i3.highlightedPoint && i3.highlightedPoint.series.keyboardMoveVertical ? "highlightAdjacentPointVertical" : "highlightAdjacentSeries";
            return i3[o2](n2), e3.response.success;
          }
          onHandlerTerminate() {
            let e3 = this.chart, t3 = e3.options.accessibility.keyboardNavigation;
            e3.tooltip && e3.tooltip.hide(0);
            let i3 = e3.highlightedPoint && e3.highlightedPoint.series;
            i3 && i3.onMouseOut && i3.onMouseOut(), e3.highlightedPoint && e3.highlightedPoint.onMouseOut && e3.highlightedPoint.onMouseOut(), t3.seriesNavigation.rememberPointFocus || delete e3.highlightedPoint;
          }
          attemptHighlightAdjacentPoint(e3, t3) {
            let i3 = this.chart, s2 = i3.options.accessibility.keyboardNavigation.wrapAround;
            return i3.highlightAdjacentPoint(t3) ? e3.response.success : s2 && (t3 ? v(i3) : x(i3)) ? e3.response.success : e3.response[t3 ? "next" : "prev"];
          }
          onSeriesDestroy(e3) {
            let t3 = this.chart;
            t3.highlightedPoint && t3.highlightedPoint.series === e3 && (delete t3.highlightedPoint, t3.focusElement && t3.focusElement.removeFocusBorder());
          }
          destroy() {
            this.eventProvider.removeAddedEvents();
          }
        }
        return function(e3) {
          function t3(e4) {
            let t4, i4;
            let s3 = this.series, n3 = this.highlightedPoint, r3 = n3 && m(n3) || 0, o2 = n3 && n3.series.points || [], a2 = this.series && this.series[this.series.length - 1], l2 = a2 && a2.points && a2.points[a2.points.length - 1];
            if (!s3[0] || !s3[0].points) return false;
            if (n3) {
              if (t4 = s3[n3.series.index + (e4 ? 1 : -1)], (i4 = o2[r3 + (e4 ? 1 : -1)]) || !t4 || (i4 = t4.points[e4 ? 0 : t4.points.length - 1]), !i4) return false;
            } else i4 = e4 ? s3[0].points[0] : l2;
            return y(i4) ? (b(t4 = i4.series) ? this.highlightedPoint = e4 ? t4.points[t4.points.length - 1] : t4.points[0] : this.highlightedPoint = i4, this.highlightAdjacentPoint(e4)) : i4.highlight();
          }
          function i3(e4) {
            let t4 = this.highlightedPoint, i4 = 1 / 0, s3;
            return !!(c(t4.plotX) && c(t4.plotY)) && (this.series.forEach((n3) => {
              b(n3) || n3.points.forEach((r3) => {
                if (!c(r3.plotY) || !c(r3.plotX) || r3 === t4) return;
                let o2 = r3.plotY - t4.plotY, a2 = Math.abs(r3.plotX - t4.plotX), l2 = Math.abs(o2) * Math.abs(o2) + a2 * a2 * 4;
                n3.yAxis && n3.yAxis.reversed && (o2 *= -1), !(o2 <= 0 && e4 || o2 >= 0 && !e4 || l2 < 5 || y(r3)) && l2 < i4 && (i4 = l2, s3 = r3);
              });
            }), !!s3 && s3.highlight());
          }
          function s2(e4) {
            let t4, i4, s3;
            let n3 = this.highlightedPoint, r3 = this.series && this.series[this.series.length - 1], o2 = r3 && r3.points && r3.points[r3.points.length - 1];
            return this.highlightedPoint ? !!((t4 = this.series[n3.series.index + (e4 ? -1 : 1)]) && (i4 = function(e5, t5, i5, s4) {
              let n4 = 1 / 0, r4, o3, a2, l2 = t5.points.length, h2 = (e6) => !(c(e6.plotX) && c(e6.plotY));
              if (!h2(e5)) {
                for (; l2--; ) !h2(r4 = t5.points[l2]) && (a2 = (e5.plotX - r4.plotX) * (e5.plotX - r4.plotX) * 4 + (e5.plotY - r4.plotY) * (e5.plotY - r4.plotY) * 1) < n4 && (n4 = a2, o3 = l2);
                return c(o3) ? t5.points[o3] : void 0;
              }
            }(n3, t4, 0))) && (b(t4) ? (i4.highlight(), s3 = this.highlightAdjacentSeries(e4)) ? s3 : (n3.highlight(), false) : (i4.highlight(), i4.series.highlightNextValidPoint())) : (t4 = e4 ? this.series && this.series[0] : r3, !!(i4 = e4 ? t4 && t4.points && t4.points[0] : o2) && i4.highlight());
          }
          function n2(e4 = true) {
            let t4 = this.series.chart, i4 = t4.tooltip?.label?.element;
            !this.isNull && e4 ? this.onMouseOver() : t4.tooltip && t4.tooltip.hide(0), g(this), this.graphic && (t4.setFocusToElement(this.graphic), !e4 && t4.focusElement && t4.focusElement.removeFocusBorder()), t4.highlightedPoint = this;
            let s3 = i4?.getBoundingClientRect().top;
            if (i4 && s3 && s3 < 0) {
              let e5 = window.scrollY;
              window.scrollTo({
                behavior: "smooth",
                top: e5 + s3
              });
            }
            return this;
          }
          function r2() {
            let e4 = this.chart.highlightedPoint, t4 = (e4 && e4.series) === this ? m(e4) : 0, i4 = this.points, s3 = i4.length;
            if (i4 && s3) {
              for (let e5 = t4; e5 < s3; ++e5) if (!y(i4[e5])) return i4[e5].highlight();
              for (let e5 = t4; e5 >= 0; --e5) if (!y(i4[e5])) return i4[e5].highlight();
            }
            return false;
          }
          e3.compose = function(e4, o2, a2) {
            let h2 = e4.prototype, c2 = o2.prototype, d2 = a2.prototype;
            h2.highlightAdjacentPoint || (h2.highlightAdjacentPoint = t3, h2.highlightAdjacentPointVertical = i3, h2.highlightAdjacentSeries = s2, c2.highlight = n2, d2.keyboardMoveVertical = true, ["column", "gantt", "pie"].forEach((e5) => {
              l[e5] && (l[e5].prototype.keyboardMoveVertical = false);
            }), d2.highlightNextValidPoint = r2);
          };
        }(A || (A = {})), A;
      }), i(t, "Accessibility/Components/SeriesComponent/SeriesComponent.js", [t["Accessibility/AccessibilityComponent.js"], t["Accessibility/Utils/ChartUtilities.js"], t["Accessibility/Components/SeriesComponent/ForcedMarkers.js"], t["Accessibility/Components/SeriesComponent/NewDataAnnouncer.js"], t["Accessibility/Components/SeriesComponent/SeriesDescriber.js"], t["Accessibility/Components/SeriesComponent/SeriesKeyboardNavigation.js"]], function(e2, t2, i2, s, n, r) {
        let {
          hideSeriesFromAT: o
        } = t2, {
          describeSeries: a
        } = n;
        return class extends e2 {
          static compose(e3, t3, n2) {
            s.compose(n2), i2.compose(n2), r.compose(e3, t3, n2);
          }
          init() {
            this.newDataAnnouncer = new s(this.chart), this.newDataAnnouncer.init(), this.keyboardNavigation = new r(this.chart, this.keyCodes), this.keyboardNavigation.init(), this.hideTooltipFromATWhenShown(), this.hideSeriesLabelsFromATWhenShown();
          }
          hideTooltipFromATWhenShown() {
            let e3 = this;
            this.chart.tooltip && this.addEvent(this.chart.tooltip.constructor, "refresh", function() {
              this.chart === e3.chart && this.label && this.label.element && this.label.element.setAttribute("aria-hidden", true);
            });
          }
          hideSeriesLabelsFromATWhenShown() {
            this.addEvent(this.chart, "afterDrawSeriesLabels", function() {
              this.series.forEach(function(e3) {
                e3.labelBySeries && e3.labelBySeries.attr("aria-hidden", true);
              });
            });
          }
          onChartRender() {
            this.chart.series.forEach(function(e3) {
              false !== (e3.options.accessibility && e3.options.accessibility.enabled) && e3.visible && 0 !== e3.getPointsCollection().length ? a(e3) : o(e3);
            });
          }
          getKeyboardNavigation() {
            return this.keyboardNavigation.getKeyboardNavigationHandler();
          }
          destroy() {
            this.newDataAnnouncer.destroy(), this.keyboardNavigation.destroy();
          }
        };
      }), i(t, "Accessibility/Components/ZoomComponent.js", [t["Accessibility/AccessibilityComponent.js"], t["Accessibility/Utils/ChartUtilities.js"], t["Accessibility/Utils/HTMLUtilities.js"], t["Accessibility/KeyboardNavigationHandler.js"], t["Core/Utilities.js"]], function(e2, t2, i2, s, n) {
        let {
          unhideChartElementFromAT: r
        } = t2, {
          getFakeMouseEvent: o
        } = i2, {
          attr: a,
          pick: l
        } = n;
        return class extends e2 {
          constructor() {
            super(...arguments), this.focusedMapNavButtonIx = -1;
          }
          init() {
            let e3 = this, t3 = this.chart;
            this.proxyProvider.addGroup("zoom", "div"), ["afterShowResetZoom", "afterApplyDrilldown", "drillupall"].forEach((i3) => {
              e3.addEvent(t3, i3, function() {
                e3.updateProxyOverlays();
              });
            });
          }
          onChartUpdate() {
            let e3 = this.chart, t3 = this;
            e3.mapNavigation && e3.mapNavigation.navButtons.forEach((i3, s2) => {
              r(e3, i3.element), t3.setMapNavButtonAttrs(i3.element, "accessibility.zoom.mapZoom" + (s2 ? "Out" : "In"));
            });
          }
          setMapNavButtonAttrs(e3, t3) {
            let i3 = this.chart;
            a(e3, {
              tabindex: -1,
              role: "button",
              "aria-label": i3.langFormat(t3, {
                chart: i3
              })
            });
          }
          onChartRender() {
            this.updateProxyOverlays();
          }
          updateProxyOverlays() {
            let e3 = this.chart;
            if (this.proxyProvider.clearGroup("zoom"), e3.resetZoomButton && this.createZoomProxyButton(e3.resetZoomButton, "resetZoomProxyButton", e3.langFormat("accessibility.zoom.resetZoomButton", {
              chart: e3
            })), e3.drillUpButton && e3.breadcrumbs && e3.breadcrumbs.list) {
              let t3 = e3.breadcrumbs.list[e3.breadcrumbs.list.length - 1];
              this.createZoomProxyButton(e3.drillUpButton, "drillUpProxyButton", e3.langFormat("accessibility.drillUpButton", {
                chart: e3,
                buttonText: e3.breadcrumbs.getButtonText(t3)
              }));
            }
          }
          createZoomProxyButton(e3, t3, i3) {
            this[t3] = this.proxyProvider.addProxyElement("zoom", {
              click: e3
            }, "button", {
              "aria-label": i3,
              tabindex: -1
            });
          }
          getMapZoomNavigation() {
            let e3 = this.keyCodes, t3 = this.chart, i3 = this;
            return new s(t3, {
              keyCodeMap: [[[e3.up, e3.down, e3.left, e3.right], function(e4) {
                return i3.onMapKbdArrow(this, e4);
              }], [[e3.tab], function(e4, t4) {
                return i3.onMapKbdTab(this, t4);
              }], [[e3.space, e3.enter], function() {
                return i3.onMapKbdClick(this);
              }]],
              validate: function() {
                return !!(t3.mapView && t3.mapNavigation && t3.mapNavigation.navButtons.length);
              },
              init: function(e4) {
                return i3.onMapNavInit(e4);
              }
            });
          }
          onMapKbdArrow(e3, t3) {
            let i3 = this.chart, s2 = this.keyCodes, n2 = i3.container, r2 = t3 === s2.up || t3 === s2.down, a2 = t3 === s2.left || t3 === s2.up ? 1 : -1, l2 = (r2 ? i3.plotHeight : i3.plotWidth) / 10 * a2, h = 10 * Math.random(), c = {
              x: n2.offsetLeft + i3.plotLeft + i3.plotWidth / 2 + h,
              y: n2.offsetTop + i3.plotTop + i3.plotHeight / 2 + h
            }, d = r2 ? {
              x: c.x,
              y: c.y + l2
            } : {
              x: c.x + l2,
              y: c.y
            };
            return [o("mousedown", c), o("mousemove", d), o("mouseup", d)].forEach((e4) => n2.dispatchEvent(e4)), e3.response.success;
          }
          onMapKbdTab(e3, t3) {
            let i3 = this.chart, s2 = e3.response, n2 = t3.shiftKey, r2 = n2 && !this.focusedMapNavButtonIx || !n2 && this.focusedMapNavButtonIx;
            if (i3.mapNavigation.navButtons[this.focusedMapNavButtonIx].setState(0), r2) return i3.mapView && i3.mapView.zoomBy(), s2[n2 ? "prev" : "next"];
            this.focusedMapNavButtonIx += n2 ? -1 : 1;
            let o2 = i3.mapNavigation.navButtons[this.focusedMapNavButtonIx];
            return i3.setFocusToElement(o2.box, o2.element), o2.setState(2), s2.success;
          }
          onMapKbdClick(e3) {
            let t3 = this.chart.mapNavigation.navButtons[this.focusedMapNavButtonIx].element;
            return this.fakeClickEvent(t3), e3.response.success;
          }
          onMapNavInit(e3) {
            let t3 = this.chart, i3 = t3.mapNavigation.navButtons[0], s2 = t3.mapNavigation.navButtons[1], n2 = e3 > 0 ? i3 : s2;
            t3.setFocusToElement(n2.box, n2.element), n2.setState(2), this.focusedMapNavButtonIx = e3 > 0 ? 0 : 1;
          }
          simpleButtonNavigation(e3, t3, i3) {
            let n2 = this.keyCodes, r2 = this, o2 = this.chart;
            return new s(o2, {
              keyCodeMap: [[[n2.tab, n2.up, n2.down, n2.left, n2.right], function(e4, t4) {
                let i4 = e4 === n2.tab && t4.shiftKey || e4 === n2.left || e4 === n2.up;
                return this.response[i4 ? "prev" : "next"];
              }], [[n2.space, n2.enter], function() {
                return l(i3(this, o2), this.response.success);
              }]],
              validate: function() {
                return o2[e3] && o2[e3].box && r2[t3].innerElement;
              },
              init: function() {
                o2.setFocusToElement(o2[e3].box, r2[t3].innerElement);
              }
            });
          }
          getKeyboardNavigation() {
            return [this.simpleButtonNavigation("resetZoomButton", "resetZoomProxyButton", function(e3, t3) {
              t3.zoomOut();
            }), this.simpleButtonNavigation("drillUpButton", "drillUpProxyButton", function(e3, t3) {
              return t3.drillUp(), e3.response.prev;
            }), this.getMapZoomNavigation()];
          }
        };
      }), i(t, "Accessibility/HighContrastMode.js", [t["Core/Globals.js"]], function(e2) {
        let {
          doc: t2,
          isMS: i2,
          win: s
        } = e2;
        return {
          isHighContrastModeActive: function() {
            let e3 = /(Edg)/.test(s.navigator.userAgent);
            if (s.matchMedia && e3) return s.matchMedia("(-ms-high-contrast: active)").matches;
            if (i2 && s.getComputedStyle) {
              let e4 = t2.createElement("div");
              e4.style.backgroundImage = "url(data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==)", t2.body.appendChild(e4);
              let i3 = (e4.currentStyle || s.getComputedStyle(e4)).backgroundImage;
              return t2.body.removeChild(e4), "none" === i3;
            }
            return s.matchMedia && s.matchMedia("(forced-colors: active)").matches;
          },
          setHighContrastTheme: function(e3) {
            e3.highContrastModeActive = true;
            let t3 = e3.options.accessibility.highContrastTheme;
            e3.update(t3, false);
            let i3 = t3.colors?.length > 1;
            e3.series.forEach(function(e4) {
              let s2 = t3.plotOptions[e4.type] || {}, n = i3 && void 0 !== e4.colorIndex ? t3.colors[e4.colorIndex] : s2.color || "window", r = {
                color: s2.color || "windowText",
                colors: i3 ? t3.colors : [s2.color || "windowText"],
                borderColor: s2.borderColor || "window",
                fillColor: n
              };
              e4.update(r, false), e4.points && e4.points.forEach(function(e5) {
                e5.options && e5.options.color && e5.update({
                  color: s2.color || "windowText",
                  borderColor: s2.borderColor || "window"
                }, false);
              });
            }), e3.redraw();
          }
        };
      }), i(t, "Accessibility/HighContrastTheme.js", [], function() {
        return {
          chart: {
            backgroundColor: "window"
          },
          title: {
            style: {
              color: "windowText"
            }
          },
          subtitle: {
            style: {
              color: "windowText"
            }
          },
          colorAxis: {
            minColor: "windowText",
            maxColor: "windowText",
            stops: [],
            dataClasses: []
          },
          colors: ["windowText"],
          xAxis: {
            gridLineColor: "windowText",
            labels: {
              style: {
                color: "windowText"
              }
            },
            lineColor: "windowText",
            minorGridLineColor: "windowText",
            tickColor: "windowText",
            title: {
              style: {
                color: "windowText"
              }
            }
          },
          yAxis: {
            gridLineColor: "windowText",
            labels: {
              style: {
                color: "windowText"
              }
            },
            lineColor: "windowText",
            minorGridLineColor: "windowText",
            tickColor: "windowText",
            title: {
              style: {
                color: "windowText"
              }
            }
          },
          tooltip: {
            backgroundColor: "window",
            borderColor: "windowText",
            style: {
              color: "windowText"
            }
          },
          plotOptions: {
            series: {
              lineColor: "windowText",
              fillColor: "window",
              borderColor: "windowText",
              edgeColor: "windowText",
              borderWidth: 1,
              dataLabels: {
                connectorColor: "windowText",
                color: "windowText",
                style: {
                  color: "windowText",
                  textOutline: "none"
                }
              },
              marker: {
                lineColor: "windowText",
                fillColor: "windowText"
              }
            },
            pie: {
              color: "window",
              colors: ["window"],
              borderColor: "windowText",
              borderWidth: 1
            },
            boxplot: {
              fillColor: "window"
            },
            candlestick: {
              lineColor: "windowText",
              fillColor: "window"
            },
            errorbar: {
              fillColor: "window"
            }
          },
          legend: {
            backgroundColor: "window",
            itemStyle: {
              color: "windowText"
            },
            itemHoverStyle: {
              color: "windowText"
            },
            itemHiddenStyle: {
              color: "#555"
            },
            title: {
              style: {
                color: "windowText"
              }
            }
          },
          credits: {
            style: {
              color: "windowText"
            }
          },
          drilldown: {
            activeAxisLabelStyle: {
              color: "windowText"
            },
            activeDataLabelStyle: {
              color: "windowText"
            }
          },
          navigation: {
            buttonOptions: {
              symbolStroke: "windowText",
              theme: {
                fill: "window"
              }
            }
          },
          rangeSelector: {
            buttonTheme: {
              fill: "window",
              stroke: "windowText",
              style: {
                color: "windowText"
              },
              states: {
                hover: {
                  fill: "window",
                  stroke: "windowText",
                  style: {
                    color: "windowText"
                  }
                },
                select: {
                  fill: "#444",
                  stroke: "windowText",
                  style: {
                    color: "windowText"
                  }
                }
              }
            },
            inputBoxBorderColor: "windowText",
            inputStyle: {
              backgroundColor: "window",
              color: "windowText"
            },
            labelStyle: {
              color: "windowText"
            }
          },
          navigator: {
            handles: {
              backgroundColor: "window",
              borderColor: "windowText"
            },
            outlineColor: "windowText",
            maskFill: "transparent",
            series: {
              color: "windowText",
              lineColor: "windowText"
            },
            xAxis: {
              gridLineColor: "windowText"
            }
          },
          scrollbar: {
            barBackgroundColor: "#444",
            barBorderColor: "windowText",
            buttonArrowColor: "windowText",
            buttonBackgroundColor: "window",
            buttonBorderColor: "windowText",
            rifleColor: "windowText",
            trackBackgroundColor: "window",
            trackBorderColor: "windowText"
          }
        };
      }), i(t, "Accessibility/Options/A11yDefaults.js", [], function() {
        return {
          accessibility: {
            enabled: true,
            screenReaderSection: {
              beforeChartFormat: "<{headingTagName}>{chartTitle}</{headingTagName}><div>{typeDescription}</div><div>{chartSubtitle}</div><div>{chartLongdesc}</div><div>{playAsSoundButton}</div><div>{viewTableButton}</div><div>{xAxisDescription}</div><div>{yAxisDescription}</div><div>{annotationsTitle}{annotationsList}</div>",
              afterChartFormat: "{endOfChartMarker}",
              axisRangeDateFormat: "%Y-%m-%d %H:%M:%S"
            },
            series: {
              descriptionFormat: "{seriesDescription}{authorDescription}{axisDescription}",
              describeSingleSeries: false,
              pointDescriptionEnabledThreshold: 200
            },
            point: {
              valueDescriptionFormat: "{xDescription}{separator}{value}.",
              describeNull: true
            },
            landmarkVerbosity: "all",
            linkedDescription: '*[data-highcharts-chart="{index}"] + .highcharts-description',
            highContrastMode: "auto",
            keyboardNavigation: {
              enabled: true,
              focusBorder: {
                enabled: true,
                hideBrowserFocusOutline: true,
                style: {
                  color: "#334eff",
                  lineWidth: 2,
                  borderRadius: 3
                },
                margin: 2
              },
              order: ["series", "zoom", "rangeSelector", "navigator", "legend", "chartMenu"],
              wrapAround: true,
              seriesNavigation: {
                skipNullPoints: true,
                pointNavigationEnabledThreshold: false,
                rememberPointFocus: false
              }
            },
            announceNewData: {
              enabled: false,
              minAnnounceInterval: 5e3,
              interruptUser: false
            }
          },
          legend: {
            accessibility: {
              enabled: true,
              keyboardNavigation: {
                enabled: true
              }
            }
          },
          exporting: {
            accessibility: {
              enabled: true
            }
          },
          navigator: {
            accessibility: {
              enabled: true
            }
          }
        };
      }), i(t, "Accessibility/Options/LangDefaults.js", [], function() {
        return {
          accessibility: {
            defaultChartTitle: "Chart",
            chartContainerLabel: "{title}. Highcharts interactive chart.",
            svgContainerLabel: "Interactive chart",
            drillUpButton: "{buttonText}",
            credits: "Chart credits: {creditsStr}",
            thousandsSep: ",",
            svgContainerTitle: "",
            graphicContainerLabel: "",
            screenReaderSection: {
              beforeRegionLabel: "",
              afterRegionLabel: "",
              annotations: {
                heading: "Chart annotations summary",
                descriptionSinglePoint: "{annotationText}. Related to {annotationPoint}",
                descriptionMultiplePoints: "{annotationText}. Related to {annotationPoint}{#each additionalAnnotationPoints}, also related to {this}{/each}",
                descriptionNoPoints: "{annotationText}"
              },
              endOfChartMarker: "End of interactive chart."
            },
            sonification: {
              playAsSoundButtonText: "Play as sound, {chartTitle}",
              playAsSoundClickAnnouncement: "Play"
            },
            legend: {
              legendLabelNoTitle: "Toggle series visibility, {chartTitle}",
              legendLabel: "Chart legend: {legendTitle}",
              legendItem: "Show {itemName}"
            },
            zoom: {
              mapZoomIn: "Zoom chart",
              mapZoomOut: "Zoom out chart",
              resetZoomButton: "Reset zoom"
            },
            rangeSelector: {
              dropdownLabel: "{rangeTitle}",
              minInputLabel: "Select start date.",
              maxInputLabel: "Select end date.",
              clickButtonAnnouncement: "Viewing {axisRangeDescription}"
            },
            navigator: {
              handleLabel: "{#eq handleIx 0}Start, percent{else}End, percent{/eq}",
              groupLabel: "Axis zoom",
              changeAnnouncement: "{axisRangeDescription}"
            },
            table: {
              viewAsDataTableButtonText: "View as data table, {chartTitle}",
              tableSummary: "Table representation of chart."
            },
            announceNewData: {
              newDataAnnounce: "Updated data for chart {chartTitle}",
              newSeriesAnnounceSingle: "New data series: {seriesDesc}",
              newPointAnnounceSingle: "New data point: {pointDesc}",
              newSeriesAnnounceMultiple: "New data series in chart {chartTitle}: {seriesDesc}",
              newPointAnnounceMultiple: "New data point in chart {chartTitle}: {pointDesc}"
            },
            seriesTypeDescriptions: {
              boxplot: "Box plot charts are typically used to display groups of statistical data. Each data point in the chart can have up to 5 values: minimum, lower quartile, median, upper quartile, and maximum.",
              arearange: "Arearange charts are line charts displaying a range between a lower and higher value for each point.",
              areasplinerange: "These charts are line charts displaying a range between a lower and higher value for each point.",
              bubble: "Bubble charts are scatter charts where each data point also has a size value.",
              columnrange: "Columnrange charts are column charts displaying a range between a lower and higher value for each point.",
              errorbar: "Errorbar series are used to display the variability of the data.",
              funnel: "Funnel charts are used to display reduction of data in stages.",
              pyramid: "Pyramid charts consist of a single pyramid with item heights corresponding to each point value.",
              waterfall: "A waterfall chart is a column chart where each column contributes towards a total end value."
            },
            chartTypes: {
              emptyChart: "Empty chart",
              mapTypeDescription: "Map of {mapTitle} with {numSeries} data series.",
              unknownMap: "Map of unspecified region with {numSeries} data series.",
              combinationChart: "Combination chart with {numSeries} data series.",
              defaultSingle: "Chart with {numPoints} data {#eq numPoints 1}point{else}points{/eq}.",
              defaultMultiple: "Chart with {numSeries} data series.",
              splineSingle: "Line chart with {numPoints} data {#eq numPoints 1}point{else}points{/eq}.",
              splineMultiple: "Line chart with {numSeries} lines.",
              lineSingle: "Line chart with {numPoints} data {#eq numPoints 1}point{else}points{/eq}.",
              lineMultiple: "Line chart with {numSeries} lines.",
              columnSingle: "Bar chart with {numPoints} {#eq numPoints 1}bar{else}bars{/eq}.",
              columnMultiple: "Bar chart with {numSeries} data series.",
              barSingle: "Bar chart with {numPoints} {#eq numPoints 1}bar{else}bars{/eq}.",
              barMultiple: "Bar chart with {numSeries} data series.",
              pieSingle: "Pie chart with {numPoints} {#eq numPoints 1}slice{else}slices{/eq}.",
              pieMultiple: "Pie chart with {numSeries} pies.",
              scatterSingle: "Scatter chart with {numPoints} {#eq numPoints 1}point{else}points{/eq}.",
              scatterMultiple: "Scatter chart with {numSeries} data series.",
              boxplotSingle: "Boxplot with {numPoints} {#eq numPoints 1}box{else}boxes{/eq}.",
              boxplotMultiple: "Boxplot with {numSeries} data series.",
              bubbleSingle: "Bubble chart with {numPoints} {#eq numPoints 1}bubbles{else}bubble{/eq}.",
              bubbleMultiple: "Bubble chart with {numSeries} data series."
            },
            axis: {
              xAxisDescriptionSingular: "The chart has 1 X axis displaying {names[0]}. {ranges[0]}",
              xAxisDescriptionPlural: "The chart has {numAxes} X axes displaying {#each names}{#unless @first},{/unless}{#if @last} and{/if} {this}{/each}.",
              yAxisDescriptionSingular: "The chart has 1 Y axis displaying {names[0]}. {ranges[0]}",
              yAxisDescriptionPlural: "The chart has {numAxes} Y axes displaying {#each names}{#unless @first},{/unless}{#if @last} and{/if} {this}{/each}.",
              timeRangeDays: "Data range: {range} days.",
              timeRangeHours: "Data range: {range} hours.",
              timeRangeMinutes: "Data range: {range} minutes.",
              timeRangeSeconds: "Data range: {range} seconds.",
              rangeFromTo: "Data ranges from {rangeFrom} to {rangeTo}.",
              rangeCategories: "Data range: {numCategories} categories."
            },
            exporting: {
              chartMenuLabel: "Chart menu",
              menuButtonLabel: "View chart menu, {chartTitle}"
            },
            series: {
              summary: {
                default: "{series.name}, series {seriesNumber} of {chart.series.length} with {series.points.length} data {#eq series.points.length 1}point{else}points{/eq}.",
                defaultCombination: "{series.name}, series {seriesNumber} of {chart.series.length} with {series.points.length} data {#eq series.points.length 1}point{else}points{/eq}.",
                line: "{series.name}, line {seriesNumber} of {chart.series.length} with {series.points.length} data {#eq series.points.length 1}point{else}points{/eq}.",
                lineCombination: "{series.name}, series {seriesNumber} of {chart.series.length}. Line with {series.points.length} data {#eq series.points.length 1}point{else}points{/eq}.",
                spline: "{series.name}, line {seriesNumber} of {chart.series.length} with {series.points.length} data {#eq series.points.length 1}point{else}points{/eq}.",
                splineCombination: "{series.name}, series {seriesNumber} of {chart.series.length}. Line with {series.points.length} data {#eq series.points.length 1}point{else}points{/eq}.",
                column: "{series.name}, bar series {seriesNumber} of {chart.series.length} with {series.points.length} {#eq series.points.length 1}bar{else}bars{/eq}.",
                columnCombination: "{series.name}, series {seriesNumber} of {chart.series.length}. Bar series with {series.points.length} {#eq series.points.length 1}bar{else}bars{/eq}.",
                bar: "{series.name}, bar series {seriesNumber} of {chart.series.length} with {series.points.length} {#eq series.points.length 1}bar{else}bars{/eq}.",
                barCombination: "{series.name}, series {seriesNumber} of {chart.series.length}. Bar series with {series.points.length} {#eq series.points.length 1}bar{else}bars{/eq}.",
                pie: "{series.name}, pie {seriesNumber} of {chart.series.length} with {series.points.length} {#eq series.points.length 1}slice{else}slices{/eq}.",
                pieCombination: "{series.name}, series {seriesNumber} of {chart.series.length}. Pie with {series.points.length} {#eq series.points.length 1}slice{else}slices{/eq}.",
                scatter: "{series.name}, scatter plot {seriesNumber} of {chart.series.length} with {series.points.length} {#eq series.points.length 1}point{else}points{/eq}.",
                scatterCombination: "{series.name}, series {seriesNumber} of {chart.series.length}, scatter plot with {series.points.length} {#eq series.points.length 1}point{else}points{/eq}.",
                boxplot: "{series.name}, boxplot {seriesNumber} of {chart.series.length} with {series.points.length} {#eq series.points.length 1}box{else}boxes{/eq}.",
                boxplotCombination: "{series.name}, series {seriesNumber} of {chart.series.length}. Boxplot with {series.points.length} {#eq series.points.length 1}box{else}boxes{/eq}.",
                bubble: "{series.name}, bubble series {seriesNumber} of {chart.series.length} with {series.points.length} {#eq series.points.length 1}bubble{else}bubbles{/eq}.",
                bubbleCombination: "{series.name}, series {seriesNumber} of {chart.series.length}. Bubble series with {series.points.length} {#eq series.points.length 1}bubble{else}bubbles{/eq}.",
                map: "{series.name}, map {seriesNumber} of {chart.series.length} with {series.points.length} {#eq series.points.length 1}area{else}areas{/eq}.",
                mapCombination: "{series.name}, series {seriesNumber} of {chart.series.length}. Map with {series.points.length} {#eq series.points.length 1}area{else}areas{/eq}.",
                mapline: "{series.name}, line {seriesNumber} of {chart.series.length} with {series.points.length} data {#eq series.points.length 1}point{else}points{/eq}.",
                maplineCombination: "{series.name}, series {seriesNumber} of {chart.series.length}. Line with {series.points.length} data {#eq series.points.length 1}point{else}points{/eq}.",
                mapbubble: "{series.name}, bubble series {seriesNumber} of {chart.series.length} with {series.points.length} {#eq series.points.length 1}bubble{else}bubbles{/eq}.",
                mapbubbleCombination: "{series.name}, series {seriesNumber} of {chart.series.length}. Bubble series with {series.points.length} {#eq series.points.length 1}bubble{else}bubbles{/eq}."
              },
              description: "{description}",
              xAxisDescription: "X axis, {name}",
              yAxisDescription: "Y axis, {name}",
              nullPointValue: "No value",
              pointAnnotationsDescription: "{#each annotations}Annotation: {this}{/each}"
            }
          }
        };
      }), i(t, "Accessibility/Options/DeprecatedOptions.js", [t["Core/Utilities.js"]], function(e2) {
        let {
          error: t2,
          pick: i2
        } = e2;
        function s(e3, t3, s2) {
          let n2 = e3, r, o = 0;
          for (; o < t3.length - 1; ++o) n2 = n2[r = t3[o]] = i2(n2[r], {});
          n2[t3[t3.length - 1]] = s2;
        }
        function n(e3, i3, n2, r) {
          function o(e4, t3) {
            return t3.reduce(function(e5, t4) {
              return e5[t4];
            }, e4);
          }
          let a = o(e3.options, i3), l = o(e3.options, n2);
          Object.keys(r).forEach(function(o2) {
            let h = a[o2];
            void 0 !== h && (s(l, r[o2], h), t2(32, false, e3, {
              [i3.join(".") + "." + o2]: n2.join(".") + "." + r[o2].join(".")
            }));
          });
        }
        return function(e3) {
          (function(e4) {
            let i3 = e4.options.chart, s2 = e4.options.accessibility || {};
            ["description", "typeDescription"].forEach(function(n2) {
              i3[n2] && (s2[n2] = i3[n2], t2(32, false, e4, {
                [`chart.${n2}`]: `use accessibility.${n2}`
              }));
            });
          })(e3), function(e4) {
            e4.axes.forEach(function(i3) {
              let s2 = i3.options;
              s2 && s2.description && (s2.accessibility = s2.accessibility || {}, s2.accessibility.description = s2.description, t2(32, false, e4, {
                "axis.description": "use axis.accessibility.description"
              }));
            });
          }(e3), e3.series && function(e4) {
            let i3 = {
              description: ["accessibility", "description"],
              exposeElementToA11y: ["accessibility", "exposeAsGroupOnly"],
              pointDescriptionFormatter: ["accessibility", "point", "descriptionFormatter"],
              skipKeyboardNavigation: ["accessibility", "keyboardNavigation", "enabled"],
              "accessibility.pointDescriptionFormatter": ["accessibility", "point", "descriptionFormatter"]
            };
            e4.series.forEach(function(n2) {
              Object.keys(i3).forEach(function(r) {
                let o = n2.options[r];
                "accessibility.pointDescriptionFormatter" === r && (o = n2.options.accessibility && n2.options.accessibility.pointDescriptionFormatter), void 0 !== o && (s(n2.options, i3[r], "skipKeyboardNavigation" === r ? !o : o), t2(32, false, e4, {
                  [`series.${r}`]: "series." + i3[r].join(".")
                }));
              });
            });
          }(e3), n(e3, ["accessibility"], ["accessibility"], {
            pointDateFormat: ["point", "dateFormat"],
            pointDateFormatter: ["point", "dateFormatter"],
            pointDescriptionFormatter: ["point", "descriptionFormatter"],
            pointDescriptionThreshold: ["series", "pointDescriptionEnabledThreshold"],
            pointNavigationThreshold: ["keyboardNavigation", "seriesNavigation", "pointNavigationEnabledThreshold"],
            pointValueDecimals: ["point", "valueDecimals"],
            pointValuePrefix: ["point", "valuePrefix"],
            pointValueSuffix: ["point", "valueSuffix"],
            screenReaderSectionFormatter: ["screenReaderSection", "beforeChartFormatter"],
            describeSingleSeries: ["series", "describeSingleSeries"],
            seriesDescriptionFormatter: ["series", "descriptionFormatter"],
            onTableAnchorClick: ["screenReaderSection", "onViewDataTableClick"],
            axisRangeDateFormat: ["screenReaderSection", "axisRangeDateFormat"]
          }), n(e3, ["accessibility", "keyboardNavigation"], ["accessibility", "keyboardNavigation", "seriesNavigation"], {
            skipNullPoints: ["skipNullPoints"],
            mode: ["mode"]
          }), n(e3, ["lang", "accessibility"], ["lang", "accessibility"], {
            legendItem: ["legend", "legendItem"],
            legendLabel: ["legend", "legendLabel"],
            mapZoomIn: ["zoom", "mapZoomIn"],
            mapZoomOut: ["zoom", "mapZoomOut"],
            resetZoomButton: ["zoom", "resetZoomButton"],
            screenReaderRegionLabel: ["screenReaderSection", "beforeRegionLabel"],
            rangeSelectorButton: ["rangeSelector", "buttonText"],
            rangeSelectorMaxInput: ["rangeSelector", "maxInputLabel"],
            rangeSelectorMinInput: ["rangeSelector", "minInputLabel"],
            svgContainerEnd: ["screenReaderSection", "endOfChartMarker"],
            viewAsDataTable: ["table", "viewAsDataTableButtonText"],
            tableSummary: ["table", "tableSummary"]
          });
        };
      }), i(t, "Accessibility/Accessibility.js", [t["Core/Defaults.js"], t["Core/Globals.js"], t["Core/Utilities.js"], t["Accessibility/Utils/HTMLUtilities.js"], t["Accessibility/A11yI18n.js"], t["Accessibility/Components/ContainerComponent.js"], t["Accessibility/FocusBorder.js"], t["Accessibility/Components/InfoRegionsComponent.js"], t["Accessibility/KeyboardNavigation.js"], t["Accessibility/Components/LegendComponent.js"], t["Accessibility/Components/MenuComponent.js"], t["Accessibility/Components/NavigatorComponent.js"], t["Accessibility/Components/SeriesComponent/NewDataAnnouncer.js"], t["Accessibility/ProxyProvider.js"], t["Accessibility/Components/RangeSelectorComponent.js"], t["Accessibility/Components/SeriesComponent/SeriesComponent.js"], t["Accessibility/Components/ZoomComponent.js"], t["Accessibility/HighContrastMode.js"], t["Accessibility/HighContrastTheme.js"], t["Accessibility/Options/A11yDefaults.js"], t["Accessibility/Options/LangDefaults.js"], t["Accessibility/Options/DeprecatedOptions.js"]], function(e2, t2, i2, s, n, r, o, a, l, h, c, d, u, p, g, m, b, y, f, x, v, A) {
        let {
          defaultOptions: C
        } = e2, {
          doc: w
        } = t2, {
          addEvent: E,
          extend: T,
          fireEvent: M,
          merge: S
        } = i2, {
          removeElement: k
        } = s;
        class P {
          constructor(e3) {
            this.init(e3);
          }
          init(e3) {
            if (this.chart = e3, !w.addEventListener) {
              this.zombie = true, this.components = {}, e3.renderTo.setAttribute("aria-hidden", true);
              return;
            }
            A(e3), this.proxyProvider = new p(this.chart), this.initComponents(), this.keyboardNavigation = new l(e3, this.components);
          }
          initComponents() {
            let e3 = this.chart, t3 = this.proxyProvider, i3 = e3.options.accessibility;
            this.components = {
              container: new r(),
              infoRegions: new a(),
              legend: new h(),
              chartMenu: new c(),
              rangeSelector: new g(),
              series: new m(),
              zoom: new b(),
              navigator: new d()
            }, i3.customComponents && T(this.components, i3.customComponents);
            let s2 = this.components;
            this.getComponentOrder().forEach(function(i4) {
              s2[i4].initBase(e3, t3), s2[i4].init();
            });
          }
          getComponentOrder() {
            return this.components ? this.components.series ? ["series"].concat(Object.keys(this.components).filter((e3) => "series" !== e3)) : Object.keys(this.components) : [];
          }
          update() {
            let e3 = this.components, t3 = this.chart, i3 = t3.options.accessibility;
            M(t3, "beforeA11yUpdate"), t3.types = this.getChartTypes();
            let s2 = i3.keyboardNavigation.order;
            this.proxyProvider.updateGroupOrder(s2), this.getComponentOrder().forEach(function(i4) {
              e3[i4].onChartUpdate(), M(t3, "afterA11yComponentUpdate", {
                name: i4,
                component: e3[i4]
              });
            }), this.keyboardNavigation.update(s2), !t3.highContrastModeActive && false !== i3.highContrastMode && (y.isHighContrastModeActive() || true === i3.highContrastMode) && y.setHighContrastTheme(t3), M(t3, "afterA11yUpdate", {
              accessibility: this
            });
          }
          destroy() {
            let e3 = this.chart || {}, t3 = this.components;
            Object.keys(t3).forEach(function(e4) {
              t3[e4].destroy(), t3[e4].destroyBase();
            }), this.proxyProvider && this.proxyProvider.destroy(), e3.announcerContainer && k(e3.announcerContainer), this.keyboardNavigation && this.keyboardNavigation.destroy(), e3.renderTo && e3.renderTo.setAttribute("aria-hidden", true), e3.focusElement && e3.focusElement.removeFocusBorder();
          }
          getChartTypes() {
            let e3 = {};
            return this.chart.series.forEach(function(t3) {
              e3[t3.type] = 1;
            }), Object.keys(e3);
          }
        }
        return function(e3) {
          function t3() {
            this.accessibility && this.accessibility.destroy();
          }
          function i3() {
            this.a11yDirty && this.renderTo && (delete this.a11yDirty, this.updateA11yEnabled());
            let e4 = this.accessibility;
            e4 && !e4.zombie && (e4.proxyProvider.updateProxyElementPositions(), e4.getComponentOrder().forEach(function(t4) {
              e4.components[t4].onChartRender();
            }));
          }
          function s2(e4) {
            let t4 = e4.options.accessibility;
            t4 && (t4.customComponents && (this.options.accessibility.customComponents = t4.customComponents, delete t4.customComponents), S(true, this.options.accessibility, t4), this.accessibility && this.accessibility.destroy && (this.accessibility.destroy(), delete this.accessibility)), this.a11yDirty = true;
          }
          function r2() {
            let t4 = this.accessibility, i4 = this.options.accessibility, s3 = this.renderer.boxWrapper.element, n2 = this.title;
            if (i4 && i4.enabled) t4 && !t4.zombie ? t4.update() : (this.accessibility = t4 = new e3(this), t4 && !t4.zombie && t4.update(), "img" === s3.getAttribute("role") && s3.removeAttribute("role"));
            else if (t4) t4.destroy && t4.destroy(), delete this.accessibility;
            else {
              this.renderTo.setAttribute("role", "img"), this.renderTo.setAttribute("aria-hidden", false), this.renderTo.setAttribute("aria-label", (n2 && n2.element.textContent || "").replace(/</g, "&lt;")), s3.setAttribute("aria-hidden", true);
              let e4 = document.getElementsByClassName("highcharts-description")[0];
              e4 && (e4.setAttribute("aria-hidden", false), e4.classList.remove("highcharts-linked-description"));
            }
          }
          function a2() {
            this.series.chart.accessibility && (this.series.chart.a11yDirty = true);
          }
          e3.i18nFormat = n.i18nFormat, e3.compose = function(e4, d2, p2, b2, y2, f2) {
            l.compose(e4), u.compose(b2), h.compose(e4, d2), c.compose(e4), m.compose(e4, p2, b2), n.compose(e4), o.compose(e4, y2), f2 && g.compose(e4, f2);
            let x2 = e4.prototype;
            x2.updateA11yEnabled || (x2.updateA11yEnabled = r2, E(e4, "destroy", t3), E(e4, "render", i3), E(e4, "update", s2), ["addSeries", "init"].forEach((t4) => {
              E(e4, t4, function() {
                this.a11yDirty = true;
              });
            }), ["afterApplyDrilldown", "drillupall"].forEach((t4) => {
              E(e4, t4, function() {
                let e5 = this.accessibility;
                e5 && !e5.zombie && e5.update();
              });
            }), E(p2, "update", a2), ["update", "updatedData", "remove"].forEach((e5) => {
              E(b2, e5, function() {
                this.chart.accessibility && (this.chart.a11yDirty = true);
              });
            }));
          };
        }(P || (P = {})), S(true, C, x, {
          accessibility: {
            highContrastTheme: f
          },
          lang: v
        }), P;
      }), i(t, "masters/modules/accessibility.src.js", [t["Core/Globals.js"], t["Accessibility/Accessibility.js"], t["Accessibility/AccessibilityComponent.js"], t["Accessibility/Utils/ChartUtilities.js"], t["Accessibility/Utils/HTMLUtilities.js"], t["Accessibility/KeyboardNavigationHandler.js"], t["Accessibility/Components/SeriesComponent/SeriesDescriber.js"]], function(e2, t2, i2, s, n, r, o) {
        return e2.i18nFormat = t2.i18nFormat, e2.A11yChartUtilities = s, e2.A11yHTMLUtilities = n, e2.AccessibilityComponent = i2, e2.KeyboardNavigationHandler = r, e2.SeriesAccessibilityDescriber = o, t2.compose(e2.Chart, e2.Legend, e2.Point, e2.Series, e2.SVGElement, e2.RangeSelector), e2;
      });
    });
  }
});
export default require_accessibility();
//# sourceMappingURL=highcharts_modules_accessibility.js.map
