/*! For license information please see main.457f66fc.js.LICENSE.txt */
!(function () {
  "use strict";
  var e = {
      463: function (e, t, n) {
        var r = n(791),
          i = n(296);
        function o(e) {
          for (
            var t =
                "https://reactjs.org/docs/error-decoder.html?invariant=" + e,
              n = 1;
            n < arguments.length;
            n++
          )
            t += "&args[]=" + encodeURIComponent(arguments[n]);
          return (
            "Minified React error #" +
            e +
            "; visit " +
            t +
            " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
          );
        }
        var a = new Set(),
          l = {};
        function u(e, t) {
          s(e, t), s(e + "Capture", t);
        }
        function s(e, t) {
          for (l[e] = t, e = 0; e < t.length; e++) a.add(t[e]);
        }
        var c = !(
            "undefined" === typeof window ||
            "undefined" === typeof window.document ||
            "undefined" === typeof window.document.createElement
          ),
          f = Object.prototype.hasOwnProperty,
          d =
            /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
          p = {},
          h = {};
        function v(e, t, n, r, i, o, a) {
          (this.acceptsBooleans = 2 === t || 3 === t || 4 === t),
            (this.attributeName = r),
            (this.attributeNamespace = i),
            (this.mustUseProperty = n),
            (this.propertyName = e),
            (this.type = t),
            (this.sanitizeURL = o),
            (this.removeEmptyString = a);
        }
        var m = {};
        "children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style"
          .split(" ")
          .forEach(function (e) {
            m[e] = new v(e, 0, !1, e, null, !1, !1);
          }),
          [
            ["acceptCharset", "accept-charset"],
            ["className", "class"],
            ["htmlFor", "for"],
            ["httpEquiv", "http-equiv"],
          ].forEach(function (e) {
            var t = e[0];
            m[t] = new v(t, 1, !1, e[1], null, !1, !1);
          }),
          ["contentEditable", "draggable", "spellCheck", "value"].forEach(
            function (e) {
              m[e] = new v(e, 2, !1, e.toLowerCase(), null, !1, !1);
            }
          ),
          [
            "autoReverse",
            "externalResourcesRequired",
            "focusable",
            "preserveAlpha",
          ].forEach(function (e) {
            m[e] = new v(e, 2, !1, e, null, !1, !1);
          }),
          "allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope"
            .split(" ")
            .forEach(function (e) {
              m[e] = new v(e, 3, !1, e.toLowerCase(), null, !1, !1);
            }),
          ["checked", "multiple", "muted", "selected"].forEach(function (e) {
            m[e] = new v(e, 3, !0, e, null, !1, !1);
          }),
          ["capture", "download"].forEach(function (e) {
            m[e] = new v(e, 4, !1, e, null, !1, !1);
          }),
          ["cols", "rows", "size", "span"].forEach(function (e) {
            m[e] = new v(e, 6, !1, e, null, !1, !1);
          }),
          ["rowSpan", "start"].forEach(function (e) {
            m[e] = new v(e, 5, !1, e.toLowerCase(), null, !1, !1);
          });
        var y = /[\-:]([a-z])/g;
        function g(e) {
          return e[1].toUpperCase();
        }
        function b(e, t, n, r) {
          var i = m.hasOwnProperty(t) ? m[t] : null;
          (null !== i
            ? 0 !== i.type
            : r ||
              !(2 < t.length) ||
              ("o" !== t[0] && "O" !== t[0]) ||
              ("n" !== t[1] && "N" !== t[1])) &&
            ((function (e, t, n, r) {
              if (
                null === t ||
                "undefined" === typeof t ||
                (function (e, t, n, r) {
                  if (null !== n && 0 === n.type) return !1;
                  switch (typeof t) {
                    case "function":
                    case "symbol":
                      return !0;
                    case "boolean":
                      return (
                        !r &&
                        (null !== n
                          ? !n.acceptsBooleans
                          : "data-" !== (e = e.toLowerCase().slice(0, 5)) &&
                            "aria-" !== e)
                      );
                    default:
                      return !1;
                  }
                })(e, t, n, r)
              )
                return !0;
              if (r) return !1;
              if (null !== n)
                switch (n.type) {
                  case 3:
                    return !t;
                  case 4:
                    return !1 === t;
                  case 5:
                    return isNaN(t);
                  case 6:
                    return isNaN(t) || 1 > t;
                }
              return !1;
            })(t, n, i, r) && (n = null),
            r || null === i
              ? (function (e) {
                  return (
                    !!f.call(h, e) ||
                    (!f.call(p, e) &&
                      (d.test(e) ? (h[e] = !0) : ((p[e] = !0), !1)))
                  );
                })(t) &&
                (null === n ? e.removeAttribute(t) : e.setAttribute(t, "" + n))
              : i.mustUseProperty
              ? (e[i.propertyName] = null === n ? 3 !== i.type && "" : n)
              : ((t = i.attributeName),
                (r = i.attributeNamespace),
                null === n
                  ? e.removeAttribute(t)
                  : ((n =
                      3 === (i = i.type) || (4 === i && !0 === n)
                        ? ""
                        : "" + n),
                    r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))));
        }
        "accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height"
          .split(" ")
          .forEach(function (e) {
            var t = e.replace(y, g);
            m[t] = new v(t, 1, !1, e, null, !1, !1);
          }),
          "xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type"
            .split(" ")
            .forEach(function (e) {
              var t = e.replace(y, g);
              m[t] = new v(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
            }),
          ["xml:base", "xml:lang", "xml:space"].forEach(function (e) {
            var t = e.replace(y, g);
            m[t] = new v(
              t,
              1,
              !1,
              e,
              "http://www.w3.org/XML/1998/namespace",
              !1,
              !1
            );
          }),
          ["tabIndex", "crossOrigin"].forEach(function (e) {
            m[e] = new v(e, 1, !1, e.toLowerCase(), null, !1, !1);
          }),
          (m.xlinkHref = new v(
            "xlinkHref",
            1,
            !1,
            "xlink:href",
            "http://www.w3.org/1999/xlink",
            !0,
            !1
          )),
          ["src", "href", "action", "formAction"].forEach(function (e) {
            m[e] = new v(e, 1, !1, e.toLowerCase(), null, !0, !0);
          });
        var w = r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
          _ = Symbol.for("react.element"),
          k = Symbol.for("react.portal"),
          S = Symbol.for("react.fragment"),
          x = Symbol.for("react.strict_mode"),
          E = Symbol.for("react.profiler"),
          C = Symbol.for("react.provider"),
          N = Symbol.for("react.context"),
          P = Symbol.for("react.forward_ref"),
          z = Symbol.for("react.suspense"),
          M = Symbol.for("react.suspense_list"),
          T = Symbol.for("react.memo"),
          L = Symbol.for("react.lazy");
        Symbol.for("react.scope"), Symbol.for("react.debug_trace_mode");
        var O = Symbol.for("react.offscreen");
        Symbol.for("react.legacy_hidden"),
          Symbol.for("react.cache"),
          Symbol.for("react.tracing_marker");
        var R = Symbol.iterator;
        function A(e) {
          return null === e || "object" !== typeof e
            ? null
            : "function" === typeof (e = (R && e[R]) || e["@@iterator"])
            ? e
            : null;
        }
        var I,
          F = Object.assign;
        function D(e) {
          if (void 0 === I)
            try {
              throw Error();
            } catch (n) {
              var t = n.stack.trim().match(/\n( *(at )?)/);
              I = (t && t[1]) || "";
            }
          return "\n" + I + e;
        }
        var j = !1;
        function U(e, t) {
          if (!e || j) return "";
          j = !0;
          var n = Error.prepareStackTrace;
          Error.prepareStackTrace = void 0;
          try {
            if (t)
              if (
                ((t = function () {
                  throw Error();
                }),
                Object.defineProperty(t.prototype, "props", {
                  set: function () {
                    throw Error();
                  },
                }),
                "object" === typeof Reflect && Reflect.construct)
              ) {
                try {
                  Reflect.construct(t, []);
                } catch (s) {
                  var r = s;
                }
                Reflect.construct(e, [], t);
              } else {
                try {
                  t.call();
                } catch (s) {
                  r = s;
                }
                e.call(t.prototype);
              }
            else {
              try {
                throw Error();
              } catch (s) {
                r = s;
              }
              e();
            }
          } catch (s) {
            if (s && r && "string" === typeof s.stack) {
              for (
                var i = s.stack.split("\n"),
                  o = r.stack.split("\n"),
                  a = i.length - 1,
                  l = o.length - 1;
                1 <= a && 0 <= l && i[a] !== o[l];

              )
                l--;
              for (; 1 <= a && 0 <= l; a--, l--)
                if (i[a] !== o[l]) {
                  if (1 !== a || 1 !== l)
                    do {
                      if ((a--, 0 > --l || i[a] !== o[l])) {
                        var u = "\n" + i[a].replace(" at new ", " at ");
                        return (
                          e.displayName &&
                            u.includes("<anonymous>") &&
                            (u = u.replace("<anonymous>", e.displayName)),
                          u
                        );
                      }
                    } while (1 <= a && 0 <= l);
                  break;
                }
            }
          } finally {
            (j = !1), (Error.prepareStackTrace = n);
          }
          return (e = e ? e.displayName || e.name : "") ? D(e) : "";
        }
        function V(e) {
          switch (e.tag) {
            case 5:
              return D(e.type);
            case 16:
              return D("Lazy");
            case 13:
              return D("Suspense");
            case 19:
              return D("SuspenseList");
            case 0:
            case 2:
            case 15:
              return (e = U(e.type, !1));
            case 11:
              return (e = U(e.type.render, !1));
            case 1:
              return (e = U(e.type, !0));
            default:
              return "";
          }
        }
        function B(e) {
          if (null == e) return null;
          if ("function" === typeof e) return e.displayName || e.name || null;
          if ("string" === typeof e) return e;
          switch (e) {
            case S:
              return "Fragment";
            case k:
              return "Portal";
            case E:
              return "Profiler";
            case x:
              return "StrictMode";
            case z:
              return "Suspense";
            case M:
              return "SuspenseList";
          }
          if ("object" === typeof e)
            switch (e.$$typeof) {
              case N:
                return (e.displayName || "Context") + ".Consumer";
              case C:
                return (e._context.displayName || "Context") + ".Provider";
              case P:
                var t = e.render;
                return (
                  (e = e.displayName) ||
                    (e =
                      "" !== (e = t.displayName || t.name || "")
                        ? "ForwardRef(" + e + ")"
                        : "ForwardRef"),
                  e
                );
              case T:
                return null !== (t = e.displayName || null)
                  ? t
                  : B(e.type) || "Memo";
              case L:
                (t = e._payload), (e = e._init);
                try {
                  return B(e(t));
                } catch (n) {}
            }
          return null;
        }
        function $(e) {
          var t = e.type;
          switch (e.tag) {
            case 24:
              return "Cache";
            case 9:
              return (t.displayName || "Context") + ".Consumer";
            case 10:
              return (t._context.displayName || "Context") + ".Provider";
            case 18:
              return "DehydratedFragment";
            case 11:
              return (
                (e = (e = t.render).displayName || e.name || ""),
                t.displayName ||
                  ("" !== e ? "ForwardRef(" + e + ")" : "ForwardRef")
              );
            case 7:
              return "Fragment";
            case 5:
              return t;
            case 4:
              return "Portal";
            case 3:
              return "Root";
            case 6:
              return "Text";
            case 16:
              return B(t);
            case 8:
              return t === x ? "StrictMode" : "Mode";
            case 22:
              return "Offscreen";
            case 12:
              return "Profiler";
            case 21:
              return "Scope";
            case 13:
              return "Suspense";
            case 19:
              return "SuspenseList";
            case 25:
              return "TracingMarker";
            case 1:
            case 0:
            case 17:
            case 2:
            case 14:
            case 15:
              if ("function" === typeof t)
                return t.displayName || t.name || null;
              if ("string" === typeof t) return t;
          }
          return null;
        }
        function H(e) {
          switch (typeof e) {
            case "boolean":
            case "number":
            case "string":
            case "undefined":
            case "object":
              return e;
            default:
              return "";
          }
        }
        function W(e) {
          var t = e.type;
          return (
            (e = e.nodeName) &&
            "input" === e.toLowerCase() &&
            ("checkbox" === t || "radio" === t)
          );
        }
        function Q(e) {
          e._valueTracker ||
            (e._valueTracker = (function (e) {
              var t = W(e) ? "checked" : "value",
                n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
                r = "" + e[t];
              if (
                !e.hasOwnProperty(t) &&
                "undefined" !== typeof n &&
                "function" === typeof n.get &&
                "function" === typeof n.set
              ) {
                var i = n.get,
                  o = n.set;
                return (
                  Object.defineProperty(e, t, {
                    configurable: !0,
                    get: function () {
                      return i.call(this);
                    },
                    set: function (e) {
                      (r = "" + e), o.call(this, e);
                    },
                  }),
                  Object.defineProperty(e, t, { enumerable: n.enumerable }),
                  {
                    getValue: function () {
                      return r;
                    },
                    setValue: function (e) {
                      r = "" + e;
                    },
                    stopTracking: function () {
                      (e._valueTracker = null), delete e[t];
                    },
                  }
                );
              }
            })(e));
        }
        function q(e) {
          if (!e) return !1;
          var t = e._valueTracker;
          if (!t) return !0;
          var n = t.getValue(),
            r = "";
          return (
            e && (r = W(e) ? (e.checked ? "true" : "false") : e.value),
            (e = r) !== n && (t.setValue(e), !0)
          );
        }
        function Y(e) {
          if (
            "undefined" ===
            typeof (e =
              e || ("undefined" !== typeof document ? document : void 0))
          )
            return null;
          try {
            return e.activeElement || e.body;
          } catch (t) {
            return e.body;
          }
        }
        function X(e, t) {
          var n = t.checked;
          return F({}, t, {
            defaultChecked: void 0,
            defaultValue: void 0,
            value: void 0,
            checked: null != n ? n : e._wrapperState.initialChecked,
          });
        }
        function K(e, t) {
          var n = null == t.defaultValue ? "" : t.defaultValue,
            r = null != t.checked ? t.checked : t.defaultChecked;
          (n = H(null != t.value ? t.value : n)),
            (e._wrapperState = {
              initialChecked: r,
              initialValue: n,
              controlled:
                "checkbox" === t.type || "radio" === t.type
                  ? null != t.checked
                  : null != t.value,
            });
        }
        function G(e, t) {
          null != (t = t.checked) && b(e, "checked", t, !1);
        }
        function Z(e, t) {
          G(e, t);
          var n = H(t.value),
            r = t.type;
          if (null != n)
            "number" === r
              ? ((0 === n && "" === e.value) || e.value != n) &&
                (e.value = "" + n)
              : e.value !== "" + n && (e.value = "" + n);
          else if ("submit" === r || "reset" === r)
            return void e.removeAttribute("value");
          t.hasOwnProperty("value")
            ? ee(e, t.type, n)
            : t.hasOwnProperty("defaultValue") &&
              ee(e, t.type, H(t.defaultValue)),
            null == t.checked &&
              null != t.defaultChecked &&
              (e.defaultChecked = !!t.defaultChecked);
        }
        function J(e, t, n) {
          if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
            var r = t.type;
            if (
              !(
                ("submit" !== r && "reset" !== r) ||
                (void 0 !== t.value && null !== t.value)
              )
            )
              return;
            (t = "" + e._wrapperState.initialValue),
              n || t === e.value || (e.value = t),
              (e.defaultValue = t);
          }
          "" !== (n = e.name) && (e.name = ""),
            (e.defaultChecked = !!e._wrapperState.initialChecked),
            "" !== n && (e.name = n);
        }
        function ee(e, t, n) {
          ("number" === t && Y(e.ownerDocument) === e) ||
            (null == n
              ? (e.defaultValue = "" + e._wrapperState.initialValue)
              : e.defaultValue !== "" + n && (e.defaultValue = "" + n));
        }
        var te = Array.isArray;
        function ne(e, t, n, r) {
          if (((e = e.options), t)) {
            t = {};
            for (var i = 0; i < n.length; i++) t["$" + n[i]] = !0;
            for (n = 0; n < e.length; n++)
              (i = t.hasOwnProperty("$" + e[n].value)),
                e[n].selected !== i && (e[n].selected = i),
                i && r && (e[n].defaultSelected = !0);
          } else {
            for (n = "" + H(n), t = null, i = 0; i < e.length; i++) {
              if (e[i].value === n)
                return (
                  (e[i].selected = !0), void (r && (e[i].defaultSelected = !0))
                );
              null !== t || e[i].disabled || (t = e[i]);
            }
            null !== t && (t.selected = !0);
          }
        }
        function re(e, t) {
          if (null != t.dangerouslySetInnerHTML) throw Error(o(91));
          return F({}, t, {
            value: void 0,
            defaultValue: void 0,
            children: "" + e._wrapperState.initialValue,
          });
        }
        function ie(e, t) {
          var n = t.value;
          if (null == n) {
            if (((n = t.children), (t = t.defaultValue), null != n)) {
              if (null != t) throw Error(o(92));
              if (te(n)) {
                if (1 < n.length) throw Error(o(93));
                n = n[0];
              }
              t = n;
            }
            null == t && (t = ""), (n = t);
          }
          e._wrapperState = { initialValue: H(n) };
        }
        function oe(e, t) {
          var n = H(t.value),
            r = H(t.defaultValue);
          null != n &&
            ((n = "" + n) !== e.value && (e.value = n),
            null == t.defaultValue &&
              e.defaultValue !== n &&
              (e.defaultValue = n)),
            null != r && (e.defaultValue = "" + r);
        }
        function ae(e) {
          var t = e.textContent;
          t === e._wrapperState.initialValue &&
            "" !== t &&
            null !== t &&
            (e.value = t);
        }
        function le(e) {
          switch (e) {
            case "svg":
              return "http://www.w3.org/2000/svg";
            case "math":
              return "http://www.w3.org/1998/Math/MathML";
            default:
              return "http://www.w3.org/1999/xhtml";
          }
        }
        function ue(e, t) {
          return null == e || "http://www.w3.org/1999/xhtml" === e
            ? le(t)
            : "http://www.w3.org/2000/svg" === e && "foreignObject" === t
            ? "http://www.w3.org/1999/xhtml"
            : e;
        }
        var se,
          ce,
          fe =
            ((ce = function (e, t) {
              if (
                "http://www.w3.org/2000/svg" !== e.namespaceURI ||
                "innerHTML" in e
              )
                e.innerHTML = t;
              else {
                for (
                  (se = se || document.createElement("div")).innerHTML =
                    "<svg>" + t.valueOf().toString() + "</svg>",
                    t = se.firstChild;
                  e.firstChild;

                )
                  e.removeChild(e.firstChild);
                for (; t.firstChild; ) e.appendChild(t.firstChild);
              }
            }),
            "undefined" !== typeof MSApp && MSApp.execUnsafeLocalFunction
              ? function (e, t, n, r) {
                  MSApp.execUnsafeLocalFunction(function () {
                    return ce(e, t);
                  });
                }
              : ce);
        function de(e, t) {
          if (t) {
            var n = e.firstChild;
            if (n && n === e.lastChild && 3 === n.nodeType)
              return void (n.nodeValue = t);
          }
          e.textContent = t;
        }
        var pe = {
            animationIterationCount: !0,
            aspectRatio: !0,
            borderImageOutset: !0,
            borderImageSlice: !0,
            borderImageWidth: !0,
            boxFlex: !0,
            boxFlexGroup: !0,
            boxOrdinalGroup: !0,
            columnCount: !0,
            columns: !0,
            flex: !0,
            flexGrow: !0,
            flexPositive: !0,
            flexShrink: !0,
            flexNegative: !0,
            flexOrder: !0,
            gridArea: !0,
            gridRow: !0,
            gridRowEnd: !0,
            gridRowSpan: !0,
            gridRowStart: !0,
            gridColumn: !0,
            gridColumnEnd: !0,
            gridColumnSpan: !0,
            gridColumnStart: !0,
            fontWeight: !0,
            lineClamp: !0,
            lineHeight: !0,
            opacity: !0,
            order: !0,
            orphans: !0,
            tabSize: !0,
            widows: !0,
            zIndex: !0,
            zoom: !0,
            fillOpacity: !0,
            floodOpacity: !0,
            stopOpacity: !0,
            strokeDasharray: !0,
            strokeDashoffset: !0,
            strokeMiterlimit: !0,
            strokeOpacity: !0,
            strokeWidth: !0,
          },
          he = ["Webkit", "ms", "Moz", "O"];
        function ve(e, t, n) {
          return null == t || "boolean" === typeof t || "" === t
            ? ""
            : n ||
              "number" !== typeof t ||
              0 === t ||
              (pe.hasOwnProperty(e) && pe[e])
            ? ("" + t).trim()
            : t + "px";
        }
        function me(e, t) {
          for (var n in ((e = e.style), t))
            if (t.hasOwnProperty(n)) {
              var r = 0 === n.indexOf("--"),
                i = ve(n, t[n], r);
              "float" === n && (n = "cssFloat"),
                r ? e.setProperty(n, i) : (e[n] = i);
            }
        }
        Object.keys(pe).forEach(function (e) {
          he.forEach(function (t) {
            (t = t + e.charAt(0).toUpperCase() + e.substring(1)),
              (pe[t] = pe[e]);
          });
        });
        var ye = F(
          { menuitem: !0 },
          {
            area: !0,
            base: !0,
            br: !0,
            col: !0,
            embed: !0,
            hr: !0,
            img: !0,
            input: !0,
            keygen: !0,
            link: !0,
            meta: !0,
            param: !0,
            source: !0,
            track: !0,
            wbr: !0,
          }
        );
        function ge(e, t) {
          if (t) {
            if (
              ye[e] &&
              (null != t.children || null != t.dangerouslySetInnerHTML)
            )
              throw Error(o(137, e));
            if (null != t.dangerouslySetInnerHTML) {
              if (null != t.children) throw Error(o(60));
              if (
                "object" !== typeof t.dangerouslySetInnerHTML ||
                !("__html" in t.dangerouslySetInnerHTML)
              )
                throw Error(o(61));
            }
            if (null != t.style && "object" !== typeof t.style)
              throw Error(o(62));
          }
        }
        function be(e, t) {
          if (-1 === e.indexOf("-")) return "string" === typeof t.is;
          switch (e) {
            case "annotation-xml":
            case "color-profile":
            case "font-face":
            case "font-face-src":
            case "font-face-uri":
            case "font-face-format":
            case "font-face-name":
            case "missing-glyph":
              return !1;
            default:
              return !0;
          }
        }
        var we = null;
        function _e(e) {
          return (
            (e = e.target || e.srcElement || window).correspondingUseElement &&
              (e = e.correspondingUseElement),
            3 === e.nodeType ? e.parentNode : e
          );
        }
        var ke = null,
          Se = null,
          xe = null;
        function Ee(e) {
          if ((e = bi(e))) {
            if ("function" !== typeof ke) throw Error(o(280));
            var t = e.stateNode;
            t && ((t = _i(t)), ke(e.stateNode, e.type, t));
          }
        }
        function Ce(e) {
          Se ? (xe ? xe.push(e) : (xe = [e])) : (Se = e);
        }
        function Ne() {
          if (Se) {
            var e = Se,
              t = xe;
            if (((xe = Se = null), Ee(e), t))
              for (e = 0; e < t.length; e++) Ee(t[e]);
          }
        }
        function Pe(e, t) {
          return e(t);
        }
        function ze() {}
        var Me = !1;
        function Te(e, t, n) {
          if (Me) return e(t, n);
          Me = !0;
          try {
            return Pe(e, t, n);
          } finally {
            (Me = !1), (null !== Se || null !== xe) && (ze(), Ne());
          }
        }
        function Le(e, t) {
          var n = e.stateNode;
          if (null === n) return null;
          var r = _i(n);
          if (null === r) return null;
          n = r[t];
          e: switch (t) {
            case "onClick":
            case "onClickCapture":
            case "onDoubleClick":
            case "onDoubleClickCapture":
            case "onMouseDown":
            case "onMouseDownCapture":
            case "onMouseMove":
            case "onMouseMoveCapture":
            case "onMouseUp":
            case "onMouseUpCapture":
            case "onMouseEnter":
              (r = !r.disabled) ||
                (r = !(
                  "button" === (e = e.type) ||
                  "input" === e ||
                  "select" === e ||
                  "textarea" === e
                )),
                (e = !r);
              break e;
            default:
              e = !1;
          }
          if (e) return null;
          if (n && "function" !== typeof n) throw Error(o(231, t, typeof n));
          return n;
        }
        var Oe = !1;
        if (c)
          try {
            var Re = {};
            Object.defineProperty(Re, "passive", {
              get: function () {
                Oe = !0;
              },
            }),
              window.addEventListener("test", Re, Re),
              window.removeEventListener("test", Re, Re);
          } catch (ce) {
            Oe = !1;
          }
        function Ae(e, t, n, r, i, o, a, l, u) {
          var s = Array.prototype.slice.call(arguments, 3);
          try {
            t.apply(n, s);
          } catch (c) {
            this.onError(c);
          }
        }
        var Ie = !1,
          Fe = null,
          De = !1,
          je = null,
          Ue = {
            onError: function (e) {
              (Ie = !0), (Fe = e);
            },
          };
        function Ve(e, t, n, r, i, o, a, l, u) {
          (Ie = !1), (Fe = null), Ae.apply(Ue, arguments);
        }
        function Be(e) {
          var t = e,
            n = e;
          if (e.alternate) for (; t.return; ) t = t.return;
          else {
            e = t;
            do {
              0 !== (4098 & (t = e).flags) && (n = t.return), (e = t.return);
            } while (e);
          }
          return 3 === t.tag ? n : null;
        }
        function $e(e) {
          if (13 === e.tag) {
            var t = e.memoizedState;
            if (
              (null === t &&
                null !== (e = e.alternate) &&
                (t = e.memoizedState),
              null !== t)
            )
              return t.dehydrated;
          }
          return null;
        }
        function He(e) {
          if (Be(e) !== e) throw Error(o(188));
        }
        function We(e) {
          return null !==
            (e = (function (e) {
              var t = e.alternate;
              if (!t) {
                if (null === (t = Be(e))) throw Error(o(188));
                return t !== e ? null : e;
              }
              for (var n = e, r = t; ; ) {
                var i = n.return;
                if (null === i) break;
                var a = i.alternate;
                if (null === a) {
                  if (null !== (r = i.return)) {
                    n = r;
                    continue;
                  }
                  break;
                }
                if (i.child === a.child) {
                  for (a = i.child; a; ) {
                    if (a === n) return He(i), e;
                    if (a === r) return He(i), t;
                    a = a.sibling;
                  }
                  throw Error(o(188));
                }
                if (n.return !== r.return) (n = i), (r = a);
                else {
                  for (var l = !1, u = i.child; u; ) {
                    if (u === n) {
                      (l = !0), (n = i), (r = a);
                      break;
                    }
                    if (u === r) {
                      (l = !0), (r = i), (n = a);
                      break;
                    }
                    u = u.sibling;
                  }
                  if (!l) {
                    for (u = a.child; u; ) {
                      if (u === n) {
                        (l = !0), (n = a), (r = i);
                        break;
                      }
                      if (u === r) {
                        (l = !0), (r = a), (n = i);
                        break;
                      }
                      u = u.sibling;
                    }
                    if (!l) throw Error(o(189));
                  }
                }
                if (n.alternate !== r) throw Error(o(190));
              }
              if (3 !== n.tag) throw Error(o(188));
              return n.stateNode.current === n ? e : t;
            })(e))
            ? Qe(e)
            : null;
        }
        function Qe(e) {
          if (5 === e.tag || 6 === e.tag) return e;
          for (e = e.child; null !== e; ) {
            var t = Qe(e);
            if (null !== t) return t;
            e = e.sibling;
          }
          return null;
        }
        var qe = i.unstable_scheduleCallback,
          Ye = i.unstable_cancelCallback,
          Xe = i.unstable_shouldYield,
          Ke = i.unstable_requestPaint,
          Ge = i.unstable_now,
          Ze = i.unstable_getCurrentPriorityLevel,
          Je = i.unstable_ImmediatePriority,
          et = i.unstable_UserBlockingPriority,
          tt = i.unstable_NormalPriority,
          nt = i.unstable_LowPriority,
          rt = i.unstable_IdlePriority,
          it = null,
          ot = null;
        var at = Math.clz32
            ? Math.clz32
            : function (e) {
                return (e >>>= 0), 0 === e ? 32 : (31 - ((lt(e) / ut) | 0)) | 0;
              },
          lt = Math.log,
          ut = Math.LN2;
        var st = 64,
          ct = 4194304;
        function ft(e) {
          switch (e & -e) {
            case 1:
              return 1;
            case 2:
              return 2;
            case 4:
              return 4;
            case 8:
              return 8;
            case 16:
              return 16;
            case 32:
              return 32;
            case 64:
            case 128:
            case 256:
            case 512:
            case 1024:
            case 2048:
            case 4096:
            case 8192:
            case 16384:
            case 32768:
            case 65536:
            case 131072:
            case 262144:
            case 524288:
            case 1048576:
            case 2097152:
              return 4194240 & e;
            case 4194304:
            case 8388608:
            case 16777216:
            case 33554432:
            case 67108864:
              return 130023424 & e;
            case 134217728:
              return 134217728;
            case 268435456:
              return 268435456;
            case 536870912:
              return 536870912;
            case 1073741824:
              return 1073741824;
            default:
              return e;
          }
        }
        function dt(e, t) {
          var n = e.pendingLanes;
          if (0 === n) return 0;
          var r = 0,
            i = e.suspendedLanes,
            o = e.pingedLanes,
            a = 268435455 & n;
          if (0 !== a) {
            var l = a & ~i;
            0 !== l ? (r = ft(l)) : 0 !== (o &= a) && (r = ft(o));
          } else 0 !== (a = n & ~i) ? (r = ft(a)) : 0 !== o && (r = ft(o));
          if (0 === r) return 0;
          if (
            0 !== t &&
            t !== r &&
            0 === (t & i) &&
            ((i = r & -r) >= (o = t & -t) || (16 === i && 0 !== (4194240 & o)))
          )
            return t;
          if ((0 !== (4 & r) && (r |= 16 & n), 0 !== (t = e.entangledLanes)))
            for (e = e.entanglements, t &= r; 0 < t; )
              (i = 1 << (n = 31 - at(t))), (r |= e[n]), (t &= ~i);
          return r;
        }
        function pt(e, t) {
          switch (e) {
            case 1:
            case 2:
            case 4:
              return t + 250;
            case 8:
            case 16:
            case 32:
            case 64:
            case 128:
            case 256:
            case 512:
            case 1024:
            case 2048:
            case 4096:
            case 8192:
            case 16384:
            case 32768:
            case 65536:
            case 131072:
            case 262144:
            case 524288:
            case 1048576:
            case 2097152:
              return t + 5e3;
            default:
              return -1;
          }
        }
        function ht(e) {
          return 0 !== (e = -1073741825 & e.pendingLanes)
            ? e
            : 1073741824 & e
            ? 1073741824
            : 0;
        }
        function vt() {
          var e = st;
          return 0 === (4194240 & (st <<= 1)) && (st = 64), e;
        }
        function mt(e) {
          for (var t = [], n = 0; 31 > n; n++) t.push(e);
          return t;
        }
        function yt(e, t, n) {
          (e.pendingLanes |= t),
            536870912 !== t && ((e.suspendedLanes = 0), (e.pingedLanes = 0)),
            ((e = e.eventTimes)[(t = 31 - at(t))] = n);
        }
        function gt(e, t) {
          var n = (e.entangledLanes |= t);
          for (e = e.entanglements; n; ) {
            var r = 31 - at(n),
              i = 1 << r;
            (i & t) | (e[r] & t) && (e[r] |= t), (n &= ~i);
          }
        }
        var bt = 0;
        function wt(e) {
          return 1 < (e &= -e)
            ? 4 < e
              ? 0 !== (268435455 & e)
                ? 16
                : 536870912
              : 4
            : 1;
        }
        var _t,
          kt,
          St,
          xt,
          Et,
          Ct = !1,
          Nt = [],
          Pt = null,
          zt = null,
          Mt = null,
          Tt = new Map(),
          Lt = new Map(),
          Ot = [],
          Rt =
            "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(
              " "
            );
        function At(e, t) {
          switch (e) {
            case "focusin":
            case "focusout":
              Pt = null;
              break;
            case "dragenter":
            case "dragleave":
              zt = null;
              break;
            case "mouseover":
            case "mouseout":
              Mt = null;
              break;
            case "pointerover":
            case "pointerout":
              Tt.delete(t.pointerId);
              break;
            case "gotpointercapture":
            case "lostpointercapture":
              Lt.delete(t.pointerId);
          }
        }
        function It(e, t, n, r, i, o) {
          return null === e || e.nativeEvent !== o
            ? ((e = {
                blockedOn: t,
                domEventName: n,
                eventSystemFlags: r,
                nativeEvent: o,
                targetContainers: [i],
              }),
              null !== t && null !== (t = bi(t)) && kt(t),
              e)
            : ((e.eventSystemFlags |= r),
              (t = e.targetContainers),
              null !== i && -1 === t.indexOf(i) && t.push(i),
              e);
        }
        function Ft(e) {
          var t = gi(e.target);
          if (null !== t) {
            var n = Be(t);
            if (null !== n)
              if (13 === (t = n.tag)) {
                if (null !== (t = $e(n)))
                  return (
                    (e.blockedOn = t),
                    void Et(e.priority, function () {
                      St(n);
                    })
                  );
              } else if (
                3 === t &&
                n.stateNode.current.memoizedState.isDehydrated
              )
                return void (e.blockedOn =
                  3 === n.tag ? n.stateNode.containerInfo : null);
          }
          e.blockedOn = null;
        }
        function Dt(e) {
          if (null !== e.blockedOn) return !1;
          for (var t = e.targetContainers; 0 < t.length; ) {
            var n = Xt(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
            if (null !== n)
              return null !== (t = bi(n)) && kt(t), (e.blockedOn = n), !1;
            var r = new (n = e.nativeEvent).constructor(n.type, n);
            (we = r), n.target.dispatchEvent(r), (we = null), t.shift();
          }
          return !0;
        }
        function jt(e, t, n) {
          Dt(e) && n.delete(t);
        }
        function Ut() {
          (Ct = !1),
            null !== Pt && Dt(Pt) && (Pt = null),
            null !== zt && Dt(zt) && (zt = null),
            null !== Mt && Dt(Mt) && (Mt = null),
            Tt.forEach(jt),
            Lt.forEach(jt);
        }
        function Vt(e, t) {
          e.blockedOn === t &&
            ((e.blockedOn = null),
            Ct ||
              ((Ct = !0),
              i.unstable_scheduleCallback(i.unstable_NormalPriority, Ut)));
        }
        function Bt(e) {
          function t(t) {
            return Vt(t, e);
          }
          if (0 < Nt.length) {
            Vt(Nt[0], e);
            for (var n = 1; n < Nt.length; n++) {
              var r = Nt[n];
              r.blockedOn === e && (r.blockedOn = null);
            }
          }
          for (
            null !== Pt && Vt(Pt, e),
              null !== zt && Vt(zt, e),
              null !== Mt && Vt(Mt, e),
              Tt.forEach(t),
              Lt.forEach(t),
              n = 0;
            n < Ot.length;
            n++
          )
            (r = Ot[n]).blockedOn === e && (r.blockedOn = null);
          for (; 0 < Ot.length && null === (n = Ot[0]).blockedOn; )
            Ft(n), null === n.blockedOn && Ot.shift();
        }
        var $t = w.ReactCurrentBatchConfig,
          Ht = !0;
        function Wt(e, t, n, r) {
          var i = bt,
            o = $t.transition;
          $t.transition = null;
          try {
            (bt = 1), qt(e, t, n, r);
          } finally {
            (bt = i), ($t.transition = o);
          }
        }
        function Qt(e, t, n, r) {
          var i = bt,
            o = $t.transition;
          $t.transition = null;
          try {
            (bt = 4), qt(e, t, n, r);
          } finally {
            (bt = i), ($t.transition = o);
          }
        }
        function qt(e, t, n, r) {
          if (Ht) {
            var i = Xt(e, t, n, r);
            if (null === i) Hr(e, t, r, Yt, n), At(e, r);
            else if (
              (function (e, t, n, r, i) {
                switch (t) {
                  case "focusin":
                    return (Pt = It(Pt, e, t, n, r, i)), !0;
                  case "dragenter":
                    return (zt = It(zt, e, t, n, r, i)), !0;
                  case "mouseover":
                    return (Mt = It(Mt, e, t, n, r, i)), !0;
                  case "pointerover":
                    var o = i.pointerId;
                    return Tt.set(o, It(Tt.get(o) || null, e, t, n, r, i)), !0;
                  case "gotpointercapture":
                    return (
                      (o = i.pointerId),
                      Lt.set(o, It(Lt.get(o) || null, e, t, n, r, i)),
                      !0
                    );
                }
                return !1;
              })(i, e, t, n, r)
            )
              r.stopPropagation();
            else if ((At(e, r), 4 & t && -1 < Rt.indexOf(e))) {
              for (; null !== i; ) {
                var o = bi(i);
                if (
                  (null !== o && _t(o),
                  null === (o = Xt(e, t, n, r)) && Hr(e, t, r, Yt, n),
                  o === i)
                )
                  break;
                i = o;
              }
              null !== i && r.stopPropagation();
            } else Hr(e, t, r, null, n);
          }
        }
        var Yt = null;
        function Xt(e, t, n, r) {
          if (((Yt = null), null !== (e = gi((e = _e(r))))))
            if (null === (t = Be(e))) e = null;
            else if (13 === (n = t.tag)) {
              if (null !== (e = $e(t))) return e;
              e = null;
            } else if (3 === n) {
              if (t.stateNode.current.memoizedState.isDehydrated)
                return 3 === t.tag ? t.stateNode.containerInfo : null;
              e = null;
            } else t !== e && (e = null);
          return (Yt = e), null;
        }
        function Kt(e) {
          switch (e) {
            case "cancel":
            case "click":
            case "close":
            case "contextmenu":
            case "copy":
            case "cut":
            case "auxclick":
            case "dblclick":
            case "dragend":
            case "dragstart":
            case "drop":
            case "focusin":
            case "focusout":
            case "input":
            case "invalid":
            case "keydown":
            case "keypress":
            case "keyup":
            case "mousedown":
            case "mouseup":
            case "paste":
            case "pause":
            case "play":
            case "pointercancel":
            case "pointerdown":
            case "pointerup":
            case "ratechange":
            case "reset":
            case "resize":
            case "seeked":
            case "submit":
            case "touchcancel":
            case "touchend":
            case "touchstart":
            case "volumechange":
            case "change":
            case "selectionchange":
            case "textInput":
            case "compositionstart":
            case "compositionend":
            case "compositionupdate":
            case "beforeblur":
            case "afterblur":
            case "beforeinput":
            case "blur":
            case "fullscreenchange":
            case "focus":
            case "hashchange":
            case "popstate":
            case "select":
            case "selectstart":
              return 1;
            case "drag":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "mousemove":
            case "mouseout":
            case "mouseover":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "scroll":
            case "toggle":
            case "touchmove":
            case "wheel":
            case "mouseenter":
            case "mouseleave":
            case "pointerenter":
            case "pointerleave":
              return 4;
            case "message":
              switch (Ze()) {
                case Je:
                  return 1;
                case et:
                  return 4;
                case tt:
                case nt:
                  return 16;
                case rt:
                  return 536870912;
                default:
                  return 16;
              }
            default:
              return 16;
          }
        }
        var Gt = null,
          Zt = null,
          Jt = null;
        function en() {
          if (Jt) return Jt;
          var e,
            t,
            n = Zt,
            r = n.length,
            i = "value" in Gt ? Gt.value : Gt.textContent,
            o = i.length;
          for (e = 0; e < r && n[e] === i[e]; e++);
          var a = r - e;
          for (t = 1; t <= a && n[r - t] === i[o - t]; t++);
          return (Jt = i.slice(e, 1 < t ? 1 - t : void 0));
        }
        function tn(e) {
          var t = e.keyCode;
          return (
            "charCode" in e
              ? 0 === (e = e.charCode) && 13 === t && (e = 13)
              : (e = t),
            10 === e && (e = 13),
            32 <= e || 13 === e ? e : 0
          );
        }
        function nn() {
          return !0;
        }
        function rn() {
          return !1;
        }
        function on(e) {
          function t(t, n, r, i, o) {
            for (var a in ((this._reactName = t),
            (this._targetInst = r),
            (this.type = n),
            (this.nativeEvent = i),
            (this.target = o),
            (this.currentTarget = null),
            e))
              e.hasOwnProperty(a) && ((t = e[a]), (this[a] = t ? t(i) : i[a]));
            return (
              (this.isDefaultPrevented = (
                null != i.defaultPrevented
                  ? i.defaultPrevented
                  : !1 === i.returnValue
              )
                ? nn
                : rn),
              (this.isPropagationStopped = rn),
              this
            );
          }
          return (
            F(t.prototype, {
              preventDefault: function () {
                this.defaultPrevented = !0;
                var e = this.nativeEvent;
                e &&
                  (e.preventDefault
                    ? e.preventDefault()
                    : "unknown" !== typeof e.returnValue &&
                      (e.returnValue = !1),
                  (this.isDefaultPrevented = nn));
              },
              stopPropagation: function () {
                var e = this.nativeEvent;
                e &&
                  (e.stopPropagation
                    ? e.stopPropagation()
                    : "unknown" !== typeof e.cancelBubble &&
                      (e.cancelBubble = !0),
                  (this.isPropagationStopped = nn));
              },
              persist: function () {},
              isPersistent: nn,
            }),
            t
          );
        }
        var an,
          ln,
          un,
          sn = {
            eventPhase: 0,
            bubbles: 0,
            cancelable: 0,
            timeStamp: function (e) {
              return e.timeStamp || Date.now();
            },
            defaultPrevented: 0,
            isTrusted: 0,
          },
          cn = on(sn),
          fn = F({}, sn, { view: 0, detail: 0 }),
          dn = on(fn),
          pn = F({}, fn, {
            screenX: 0,
            screenY: 0,
            clientX: 0,
            clientY: 0,
            pageX: 0,
            pageY: 0,
            ctrlKey: 0,
            shiftKey: 0,
            altKey: 0,
            metaKey: 0,
            getModifierState: En,
            button: 0,
            buttons: 0,
            relatedTarget: function (e) {
              return void 0 === e.relatedTarget
                ? e.fromElement === e.srcElement
                  ? e.toElement
                  : e.fromElement
                : e.relatedTarget;
            },
            movementX: function (e) {
              return "movementX" in e
                ? e.movementX
                : (e !== un &&
                    (un && "mousemove" === e.type
                      ? ((an = e.screenX - un.screenX),
                        (ln = e.screenY - un.screenY))
                      : (ln = an = 0),
                    (un = e)),
                  an);
            },
            movementY: function (e) {
              return "movementY" in e ? e.movementY : ln;
            },
          }),
          hn = on(pn),
          vn = on(F({}, pn, { dataTransfer: 0 })),
          mn = on(F({}, fn, { relatedTarget: 0 })),
          yn = on(
            F({}, sn, { animationName: 0, elapsedTime: 0, pseudoElement: 0 })
          ),
          gn = F({}, sn, {
            clipboardData: function (e) {
              return "clipboardData" in e
                ? e.clipboardData
                : window.clipboardData;
            },
          }),
          bn = on(gn),
          wn = on(F({}, sn, { data: 0 })),
          _n = {
            Esc: "Escape",
            Spacebar: " ",
            Left: "ArrowLeft",
            Up: "ArrowUp",
            Right: "ArrowRight",
            Down: "ArrowDown",
            Del: "Delete",
            Win: "OS",
            Menu: "ContextMenu",
            Apps: "ContextMenu",
            Scroll: "ScrollLock",
            MozPrintableKey: "Unidentified",
          },
          kn = {
            8: "Backspace",
            9: "Tab",
            12: "Clear",
            13: "Enter",
            16: "Shift",
            17: "Control",
            18: "Alt",
            19: "Pause",
            20: "CapsLock",
            27: "Escape",
            32: " ",
            33: "PageUp",
            34: "PageDown",
            35: "End",
            36: "Home",
            37: "ArrowLeft",
            38: "ArrowUp",
            39: "ArrowRight",
            40: "ArrowDown",
            45: "Insert",
            46: "Delete",
            112: "F1",
            113: "F2",
            114: "F3",
            115: "F4",
            116: "F5",
            117: "F6",
            118: "F7",
            119: "F8",
            120: "F9",
            121: "F10",
            122: "F11",
            123: "F12",
            144: "NumLock",
            145: "ScrollLock",
            224: "Meta",
          },
          Sn = {
            Alt: "altKey",
            Control: "ctrlKey",
            Meta: "metaKey",
            Shift: "shiftKey",
          };
        function xn(e) {
          var t = this.nativeEvent;
          return t.getModifierState
            ? t.getModifierState(e)
            : !!(e = Sn[e]) && !!t[e];
        }
        function En() {
          return xn;
        }
        var Cn = F({}, fn, {
            key: function (e) {
              if (e.key) {
                var t = _n[e.key] || e.key;
                if ("Unidentified" !== t) return t;
              }
              return "keypress" === e.type
                ? 13 === (e = tn(e))
                  ? "Enter"
                  : String.fromCharCode(e)
                : "keydown" === e.type || "keyup" === e.type
                ? kn[e.keyCode] || "Unidentified"
                : "";
            },
            code: 0,
            location: 0,
            ctrlKey: 0,
            shiftKey: 0,
            altKey: 0,
            metaKey: 0,
            repeat: 0,
            locale: 0,
            getModifierState: En,
            charCode: function (e) {
              return "keypress" === e.type ? tn(e) : 0;
            },
            keyCode: function (e) {
              return "keydown" === e.type || "keyup" === e.type ? e.keyCode : 0;
            },
            which: function (e) {
              return "keypress" === e.type
                ? tn(e)
                : "keydown" === e.type || "keyup" === e.type
                ? e.keyCode
                : 0;
            },
          }),
          Nn = on(Cn),
          Pn = on(
            F({}, pn, {
              pointerId: 0,
              width: 0,
              height: 0,
              pressure: 0,
              tangentialPressure: 0,
              tiltX: 0,
              tiltY: 0,
              twist: 0,
              pointerType: 0,
              isPrimary: 0,
            })
          ),
          zn = on(
            F({}, fn, {
              touches: 0,
              targetTouches: 0,
              changedTouches: 0,
              altKey: 0,
              metaKey: 0,
              ctrlKey: 0,
              shiftKey: 0,
              getModifierState: En,
            })
          ),
          Mn = on(
            F({}, sn, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 })
          ),
          Tn = F({}, pn, {
            deltaX: function (e) {
              return "deltaX" in e
                ? e.deltaX
                : "wheelDeltaX" in e
                ? -e.wheelDeltaX
                : 0;
            },
            deltaY: function (e) {
              return "deltaY" in e
                ? e.deltaY
                : "wheelDeltaY" in e
                ? -e.wheelDeltaY
                : "wheelDelta" in e
                ? -e.wheelDelta
                : 0;
            },
            deltaZ: 0,
            deltaMode: 0,
          }),
          Ln = on(Tn),
          On = [9, 13, 27, 32],
          Rn = c && "CompositionEvent" in window,
          An = null;
        c && "documentMode" in document && (An = document.documentMode);
        var In = c && "TextEvent" in window && !An,
          Fn = c && (!Rn || (An && 8 < An && 11 >= An)),
          Dn = String.fromCharCode(32),
          jn = !1;
        function Un(e, t) {
          switch (e) {
            case "keyup":
              return -1 !== On.indexOf(t.keyCode);
            case "keydown":
              return 229 !== t.keyCode;
            case "keypress":
            case "mousedown":
            case "focusout":
              return !0;
            default:
              return !1;
          }
        }
        function Vn(e) {
          return "object" === typeof (e = e.detail) && "data" in e
            ? e.data
            : null;
        }
        var Bn = !1;
        var $n = {
          color: !0,
          date: !0,
          datetime: !0,
          "datetime-local": !0,
          email: !0,
          month: !0,
          number: !0,
          password: !0,
          range: !0,
          search: !0,
          tel: !0,
          text: !0,
          time: !0,
          url: !0,
          week: !0,
        };
        function Hn(e) {
          var t = e && e.nodeName && e.nodeName.toLowerCase();
          return "input" === t ? !!$n[e.type] : "textarea" === t;
        }
        function Wn(e, t, n, r) {
          Ce(r),
            0 < (t = Qr(t, "onChange")).length &&
              ((n = new cn("onChange", "change", null, n, r)),
              e.push({ event: n, listeners: t }));
        }
        var Qn = null,
          qn = null;
        function Yn(e) {
          Dr(e, 0);
        }
        function Xn(e) {
          if (q(wi(e))) return e;
        }
        function Kn(e, t) {
          if ("change" === e) return t;
        }
        var Gn = !1;
        if (c) {
          var Zn;
          if (c) {
            var Jn = "oninput" in document;
            if (!Jn) {
              var er = document.createElement("div");
              er.setAttribute("oninput", "return;"),
                (Jn = "function" === typeof er.oninput);
            }
            Zn = Jn;
          } else Zn = !1;
          Gn = Zn && (!document.documentMode || 9 < document.documentMode);
        }
        function tr() {
          Qn && (Qn.detachEvent("onpropertychange", nr), (qn = Qn = null));
        }
        function nr(e) {
          if ("value" === e.propertyName && Xn(qn)) {
            var t = [];
            Wn(t, qn, e, _e(e)), Te(Yn, t);
          }
        }
        function rr(e, t, n) {
          "focusin" === e
            ? (tr(), (qn = n), (Qn = t).attachEvent("onpropertychange", nr))
            : "focusout" === e && tr();
        }
        function ir(e) {
          if ("selectionchange" === e || "keyup" === e || "keydown" === e)
            return Xn(qn);
        }
        function or(e, t) {
          if ("click" === e) return Xn(t);
        }
        function ar(e, t) {
          if ("input" === e || "change" === e) return Xn(t);
        }
        var lr =
          "function" === typeof Object.is
            ? Object.is
            : function (e, t) {
                return (
                  (e === t && (0 !== e || 1 / e === 1 / t)) ||
                  (e !== e && t !== t)
                );
              };
        function ur(e, t) {
          if (lr(e, t)) return !0;
          if (
            "object" !== typeof e ||
            null === e ||
            "object" !== typeof t ||
            null === t
          )
            return !1;
          var n = Object.keys(e),
            r = Object.keys(t);
          if (n.length !== r.length) return !1;
          for (r = 0; r < n.length; r++) {
            var i = n[r];
            if (!f.call(t, i) || !lr(e[i], t[i])) return !1;
          }
          return !0;
        }
        function sr(e) {
          for (; e && e.firstChild; ) e = e.firstChild;
          return e;
        }
        function cr(e, t) {
          var n,
            r = sr(e);
          for (e = 0; r; ) {
            if (3 === r.nodeType) {
              if (((n = e + r.textContent.length), e <= t && n >= t))
                return { node: r, offset: t - e };
              e = n;
            }
            e: {
              for (; r; ) {
                if (r.nextSibling) {
                  r = r.nextSibling;
                  break e;
                }
                r = r.parentNode;
              }
              r = void 0;
            }
            r = sr(r);
          }
        }
        function fr(e, t) {
          return (
            !(!e || !t) &&
            (e === t ||
              ((!e || 3 !== e.nodeType) &&
                (t && 3 === t.nodeType
                  ? fr(e, t.parentNode)
                  : "contains" in e
                  ? e.contains(t)
                  : !!e.compareDocumentPosition &&
                    !!(16 & e.compareDocumentPosition(t)))))
          );
        }
        function dr() {
          for (var e = window, t = Y(); t instanceof e.HTMLIFrameElement; ) {
            try {
              var n = "string" === typeof t.contentWindow.location.href;
            } catch (r) {
              n = !1;
            }
            if (!n) break;
            t = Y((e = t.contentWindow).document);
          }
          return t;
        }
        function pr(e) {
          var t = e && e.nodeName && e.nodeName.toLowerCase();
          return (
            t &&
            (("input" === t &&
              ("text" === e.type ||
                "search" === e.type ||
                "tel" === e.type ||
                "url" === e.type ||
                "password" === e.type)) ||
              "textarea" === t ||
              "true" === e.contentEditable)
          );
        }
        function hr(e) {
          var t = dr(),
            n = e.focusedElem,
            r = e.selectionRange;
          if (
            t !== n &&
            n &&
            n.ownerDocument &&
            fr(n.ownerDocument.documentElement, n)
          ) {
            if (null !== r && pr(n))
              if (
                ((t = r.start),
                void 0 === (e = r.end) && (e = t),
                "selectionStart" in n)
              )
                (n.selectionStart = t),
                  (n.selectionEnd = Math.min(e, n.value.length));
              else if (
                (e =
                  ((t = n.ownerDocument || document) && t.defaultView) ||
                  window).getSelection
              ) {
                e = e.getSelection();
                var i = n.textContent.length,
                  o = Math.min(r.start, i);
                (r = void 0 === r.end ? o : Math.min(r.end, i)),
                  !e.extend && o > r && ((i = r), (r = o), (o = i)),
                  (i = cr(n, o));
                var a = cr(n, r);
                i &&
                  a &&
                  (1 !== e.rangeCount ||
                    e.anchorNode !== i.node ||
                    e.anchorOffset !== i.offset ||
                    e.focusNode !== a.node ||
                    e.focusOffset !== a.offset) &&
                  ((t = t.createRange()).setStart(i.node, i.offset),
                  e.removeAllRanges(),
                  o > r
                    ? (e.addRange(t), e.extend(a.node, a.offset))
                    : (t.setEnd(a.node, a.offset), e.addRange(t)));
              }
            for (t = [], e = n; (e = e.parentNode); )
              1 === e.nodeType &&
                t.push({ element: e, left: e.scrollLeft, top: e.scrollTop });
            for (
              "function" === typeof n.focus && n.focus(), n = 0;
              n < t.length;
              n++
            )
              ((e = t[n]).element.scrollLeft = e.left),
                (e.element.scrollTop = e.top);
          }
        }
        var vr = c && "documentMode" in document && 11 >= document.documentMode,
          mr = null,
          yr = null,
          gr = null,
          br = !1;
        function wr(e, t, n) {
          var r =
            n.window === n
              ? n.document
              : 9 === n.nodeType
              ? n
              : n.ownerDocument;
          br ||
            null == mr ||
            mr !== Y(r) ||
            ("selectionStart" in (r = mr) && pr(r)
              ? (r = { start: r.selectionStart, end: r.selectionEnd })
              : (r = {
                  anchorNode: (r = (
                    (r.ownerDocument && r.ownerDocument.defaultView) ||
                    window
                  ).getSelection()).anchorNode,
                  anchorOffset: r.anchorOffset,
                  focusNode: r.focusNode,
                  focusOffset: r.focusOffset,
                }),
            (gr && ur(gr, r)) ||
              ((gr = r),
              0 < (r = Qr(yr, "onSelect")).length &&
                ((t = new cn("onSelect", "select", null, t, n)),
                e.push({ event: t, listeners: r }),
                (t.target = mr))));
        }
        function _r(e, t) {
          var n = {};
          return (
            (n[e.toLowerCase()] = t.toLowerCase()),
            (n["Webkit" + e] = "webkit" + t),
            (n["Moz" + e] = "moz" + t),
            n
          );
        }
        var kr = {
            animationend: _r("Animation", "AnimationEnd"),
            animationiteration: _r("Animation", "AnimationIteration"),
            animationstart: _r("Animation", "AnimationStart"),
            transitionend: _r("Transition", "TransitionEnd"),
          },
          Sr = {},
          xr = {};
        function Er(e) {
          if (Sr[e]) return Sr[e];
          if (!kr[e]) return e;
          var t,
            n = kr[e];
          for (t in n)
            if (n.hasOwnProperty(t) && t in xr) return (Sr[e] = n[t]);
          return e;
        }
        c &&
          ((xr = document.createElement("div").style),
          "AnimationEvent" in window ||
            (delete kr.animationend.animation,
            delete kr.animationiteration.animation,
            delete kr.animationstart.animation),
          "TransitionEvent" in window || delete kr.transitionend.transition);
        var Cr = Er("animationend"),
          Nr = Er("animationiteration"),
          Pr = Er("animationstart"),
          zr = Er("transitionend"),
          Mr = new Map(),
          Tr =
            "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
              " "
            );
        function Lr(e, t) {
          Mr.set(e, t), u(t, [e]);
        }
        for (var Or = 0; Or < Tr.length; Or++) {
          var Rr = Tr[Or];
          Lr(Rr.toLowerCase(), "on" + (Rr[0].toUpperCase() + Rr.slice(1)));
        }
        Lr(Cr, "onAnimationEnd"),
          Lr(Nr, "onAnimationIteration"),
          Lr(Pr, "onAnimationStart"),
          Lr("dblclick", "onDoubleClick"),
          Lr("focusin", "onFocus"),
          Lr("focusout", "onBlur"),
          Lr(zr, "onTransitionEnd"),
          s("onMouseEnter", ["mouseout", "mouseover"]),
          s("onMouseLeave", ["mouseout", "mouseover"]),
          s("onPointerEnter", ["pointerout", "pointerover"]),
          s("onPointerLeave", ["pointerout", "pointerover"]),
          u(
            "onChange",
            "change click focusin focusout input keydown keyup selectionchange".split(
              " "
            )
          ),
          u(
            "onSelect",
            "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
              " "
            )
          ),
          u("onBeforeInput", [
            "compositionend",
            "keypress",
            "textInput",
            "paste",
          ]),
          u(
            "onCompositionEnd",
            "compositionend focusout keydown keypress keyup mousedown".split(
              " "
            )
          ),
          u(
            "onCompositionStart",
            "compositionstart focusout keydown keypress keyup mousedown".split(
              " "
            )
          ),
          u(
            "onCompositionUpdate",
            "compositionupdate focusout keydown keypress keyup mousedown".split(
              " "
            )
          );
        var Ar =
            "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
              " "
            ),
          Ir = new Set(
            "cancel close invalid load scroll toggle".split(" ").concat(Ar)
          );
        function Fr(e, t, n) {
          var r = e.type || "unknown-event";
          (e.currentTarget = n),
            (function (e, t, n, r, i, a, l, u, s) {
              if ((Ve.apply(this, arguments), Ie)) {
                if (!Ie) throw Error(o(198));
                var c = Fe;
                (Ie = !1), (Fe = null), De || ((De = !0), (je = c));
              }
            })(r, t, void 0, e),
            (e.currentTarget = null);
        }
        function Dr(e, t) {
          t = 0 !== (4 & t);
          for (var n = 0; n < e.length; n++) {
            var r = e[n],
              i = r.event;
            r = r.listeners;
            e: {
              var o = void 0;
              if (t)
                for (var a = r.length - 1; 0 <= a; a--) {
                  var l = r[a],
                    u = l.instance,
                    s = l.currentTarget;
                  if (((l = l.listener), u !== o && i.isPropagationStopped()))
                    break e;
                  Fr(i, l, s), (o = u);
                }
              else
                for (a = 0; a < r.length; a++) {
                  if (
                    ((u = (l = r[a]).instance),
                    (s = l.currentTarget),
                    (l = l.listener),
                    u !== o && i.isPropagationStopped())
                  )
                    break e;
                  Fr(i, l, s), (o = u);
                }
            }
          }
          if (De) throw ((e = je), (De = !1), (je = null), e);
        }
        function jr(e, t) {
          var n = t[vi];
          void 0 === n && (n = t[vi] = new Set());
          var r = e + "__bubble";
          n.has(r) || ($r(t, e, 2, !1), n.add(r));
        }
        function Ur(e, t, n) {
          var r = 0;
          t && (r |= 4), $r(n, e, r, t);
        }
        var Vr = "_reactListening" + Math.random().toString(36).slice(2);
        function Br(e) {
          if (!e[Vr]) {
            (e[Vr] = !0),
              a.forEach(function (t) {
                "selectionchange" !== t &&
                  (Ir.has(t) || Ur(t, !1, e), Ur(t, !0, e));
              });
            var t = 9 === e.nodeType ? e : e.ownerDocument;
            null === t || t[Vr] || ((t[Vr] = !0), Ur("selectionchange", !1, t));
          }
        }
        function $r(e, t, n, r) {
          switch (Kt(t)) {
            case 1:
              var i = Wt;
              break;
            case 4:
              i = Qt;
              break;
            default:
              i = qt;
          }
          (n = i.bind(null, t, n, e)),
            (i = void 0),
            !Oe ||
              ("touchstart" !== t && "touchmove" !== t && "wheel" !== t) ||
              (i = !0),
            r
              ? void 0 !== i
                ? e.addEventListener(t, n, { capture: !0, passive: i })
                : e.addEventListener(t, n, !0)
              : void 0 !== i
              ? e.addEventListener(t, n, { passive: i })
              : e.addEventListener(t, n, !1);
        }
        function Hr(e, t, n, r, i) {
          var o = r;
          if (0 === (1 & t) && 0 === (2 & t) && null !== r)
            e: for (;;) {
              if (null === r) return;
              var a = r.tag;
              if (3 === a || 4 === a) {
                var l = r.stateNode.containerInfo;
                if (l === i || (8 === l.nodeType && l.parentNode === i)) break;
                if (4 === a)
                  for (a = r.return; null !== a; ) {
                    var u = a.tag;
                    if (
                      (3 === u || 4 === u) &&
                      ((u = a.stateNode.containerInfo) === i ||
                        (8 === u.nodeType && u.parentNode === i))
                    )
                      return;
                    a = a.return;
                  }
                for (; null !== l; ) {
                  if (null === (a = gi(l))) return;
                  if (5 === (u = a.tag) || 6 === u) {
                    r = o = a;
                    continue e;
                  }
                  l = l.parentNode;
                }
              }
              r = r.return;
            }
          Te(function () {
            var r = o,
              i = _e(n),
              a = [];
            e: {
              var l = Mr.get(e);
              if (void 0 !== l) {
                var u = cn,
                  s = e;
                switch (e) {
                  case "keypress":
                    if (0 === tn(n)) break e;
                  case "keydown":
                  case "keyup":
                    u = Nn;
                    break;
                  case "focusin":
                    (s = "focus"), (u = mn);
                    break;
                  case "focusout":
                    (s = "blur"), (u = mn);
                    break;
                  case "beforeblur":
                  case "afterblur":
                    u = mn;
                    break;
                  case "click":
                    if (2 === n.button) break e;
                  case "auxclick":
                  case "dblclick":
                  case "mousedown":
                  case "mousemove":
                  case "mouseup":
                  case "mouseout":
                  case "mouseover":
                  case "contextmenu":
                    u = hn;
                    break;
                  case "drag":
                  case "dragend":
                  case "dragenter":
                  case "dragexit":
                  case "dragleave":
                  case "dragover":
                  case "dragstart":
                  case "drop":
                    u = vn;
                    break;
                  case "touchcancel":
                  case "touchend":
                  case "touchmove":
                  case "touchstart":
                    u = zn;
                    break;
                  case Cr:
                  case Nr:
                  case Pr:
                    u = yn;
                    break;
                  case zr:
                    u = Mn;
                    break;
                  case "scroll":
                    u = dn;
                    break;
                  case "wheel":
                    u = Ln;
                    break;
                  case "copy":
                  case "cut":
                  case "paste":
                    u = bn;
                    break;
                  case "gotpointercapture":
                  case "lostpointercapture":
                  case "pointercancel":
                  case "pointerdown":
                  case "pointermove":
                  case "pointerout":
                  case "pointerover":
                  case "pointerup":
                    u = Pn;
                }
                var c = 0 !== (4 & t),
                  f = !c && "scroll" === e,
                  d = c ? (null !== l ? l + "Capture" : null) : l;
                c = [];
                for (var p, h = r; null !== h; ) {
                  var v = (p = h).stateNode;
                  if (
                    (5 === p.tag &&
                      null !== v &&
                      ((p = v),
                      null !== d &&
                        null != (v = Le(h, d)) &&
                        c.push(Wr(h, v, p))),
                    f)
                  )
                    break;
                  h = h.return;
                }
                0 < c.length &&
                  ((l = new u(l, s, null, n, i)),
                  a.push({ event: l, listeners: c }));
              }
            }
            if (0 === (7 & t)) {
              if (
                ((u = "mouseout" === e || "pointerout" === e),
                (!(l = "mouseover" === e || "pointerover" === e) ||
                  n === we ||
                  !(s = n.relatedTarget || n.fromElement) ||
                  (!gi(s) && !s[hi])) &&
                  (u || l) &&
                  ((l =
                    i.window === i
                      ? i
                      : (l = i.ownerDocument)
                      ? l.defaultView || l.parentWindow
                      : window),
                  u
                    ? ((u = r),
                      null !==
                        (s = (s = n.relatedTarget || n.toElement)
                          ? gi(s)
                          : null) &&
                        (s !== (f = Be(s)) || (5 !== s.tag && 6 !== s.tag)) &&
                        (s = null))
                    : ((u = null), (s = r)),
                  u !== s))
              ) {
                if (
                  ((c = hn),
                  (v = "onMouseLeave"),
                  (d = "onMouseEnter"),
                  (h = "mouse"),
                  ("pointerout" !== e && "pointerover" !== e) ||
                    ((c = Pn),
                    (v = "onPointerLeave"),
                    (d = "onPointerEnter"),
                    (h = "pointer")),
                  (f = null == u ? l : wi(u)),
                  (p = null == s ? l : wi(s)),
                  ((l = new c(v, h + "leave", u, n, i)).target = f),
                  (l.relatedTarget = p),
                  (v = null),
                  gi(i) === r &&
                    (((c = new c(d, h + "enter", s, n, i)).target = p),
                    (c.relatedTarget = f),
                    (v = c)),
                  (f = v),
                  u && s)
                )
                  e: {
                    for (d = s, h = 0, p = c = u; p; p = qr(p)) h++;
                    for (p = 0, v = d; v; v = qr(v)) p++;
                    for (; 0 < h - p; ) (c = qr(c)), h--;
                    for (; 0 < p - h; ) (d = qr(d)), p--;
                    for (; h--; ) {
                      if (c === d || (null !== d && c === d.alternate)) break e;
                      (c = qr(c)), (d = qr(d));
                    }
                    c = null;
                  }
                else c = null;
                null !== u && Yr(a, l, u, c, !1),
                  null !== s && null !== f && Yr(a, f, s, c, !0);
              }
              if (
                "select" ===
                  (u =
                    (l = r ? wi(r) : window).nodeName &&
                    l.nodeName.toLowerCase()) ||
                ("input" === u && "file" === l.type)
              )
                var m = Kn;
              else if (Hn(l))
                if (Gn) m = ar;
                else {
                  m = ir;
                  var y = rr;
                }
              else
                (u = l.nodeName) &&
                  "input" === u.toLowerCase() &&
                  ("checkbox" === l.type || "radio" === l.type) &&
                  (m = or);
              switch (
                (m && (m = m(e, r))
                  ? Wn(a, m, n, i)
                  : (y && y(e, l, r),
                    "focusout" === e &&
                      (y = l._wrapperState) &&
                      y.controlled &&
                      "number" === l.type &&
                      ee(l, "number", l.value)),
                (y = r ? wi(r) : window),
                e)
              ) {
                case "focusin":
                  (Hn(y) || "true" === y.contentEditable) &&
                    ((mr = y), (yr = r), (gr = null));
                  break;
                case "focusout":
                  gr = yr = mr = null;
                  break;
                case "mousedown":
                  br = !0;
                  break;
                case "contextmenu":
                case "mouseup":
                case "dragend":
                  (br = !1), wr(a, n, i);
                  break;
                case "selectionchange":
                  if (vr) break;
                case "keydown":
                case "keyup":
                  wr(a, n, i);
              }
              var g;
              if (Rn)
                e: {
                  switch (e) {
                    case "compositionstart":
                      var b = "onCompositionStart";
                      break e;
                    case "compositionend":
                      b = "onCompositionEnd";
                      break e;
                    case "compositionupdate":
                      b = "onCompositionUpdate";
                      break e;
                  }
                  b = void 0;
                }
              else
                Bn
                  ? Un(e, n) && (b = "onCompositionEnd")
                  : "keydown" === e &&
                    229 === n.keyCode &&
                    (b = "onCompositionStart");
              b &&
                (Fn &&
                  "ko" !== n.locale &&
                  (Bn || "onCompositionStart" !== b
                    ? "onCompositionEnd" === b && Bn && (g = en())
                    : ((Zt = "value" in (Gt = i) ? Gt.value : Gt.textContent),
                      (Bn = !0))),
                0 < (y = Qr(r, b)).length &&
                  ((b = new wn(b, e, null, n, i)),
                  a.push({ event: b, listeners: y }),
                  g ? (b.data = g) : null !== (g = Vn(n)) && (b.data = g))),
                (g = In
                  ? (function (e, t) {
                      switch (e) {
                        case "compositionend":
                          return Vn(t);
                        case "keypress":
                          return 32 !== t.which ? null : ((jn = !0), Dn);
                        case "textInput":
                          return (e = t.data) === Dn && jn ? null : e;
                        default:
                          return null;
                      }
                    })(e, n)
                  : (function (e, t) {
                      if (Bn)
                        return "compositionend" === e || (!Rn && Un(e, t))
                          ? ((e = en()), (Jt = Zt = Gt = null), (Bn = !1), e)
                          : null;
                      switch (e) {
                        case "paste":
                        default:
                          return null;
                        case "keypress":
                          if (
                            !(t.ctrlKey || t.altKey || t.metaKey) ||
                            (t.ctrlKey && t.altKey)
                          ) {
                            if (t.char && 1 < t.char.length) return t.char;
                            if (t.which) return String.fromCharCode(t.which);
                          }
                          return null;
                        case "compositionend":
                          return Fn && "ko" !== t.locale ? null : t.data;
                      }
                    })(e, n)) &&
                  0 < (r = Qr(r, "onBeforeInput")).length &&
                  ((i = new wn("onBeforeInput", "beforeinput", null, n, i)),
                  a.push({ event: i, listeners: r }),
                  (i.data = g));
            }
            Dr(a, t);
          });
        }
        function Wr(e, t, n) {
          return { instance: e, listener: t, currentTarget: n };
        }
        function Qr(e, t) {
          for (var n = t + "Capture", r = []; null !== e; ) {
            var i = e,
              o = i.stateNode;
            5 === i.tag &&
              null !== o &&
              ((i = o),
              null != (o = Le(e, n)) && r.unshift(Wr(e, o, i)),
              null != (o = Le(e, t)) && r.push(Wr(e, o, i))),
              (e = e.return);
          }
          return r;
        }
        function qr(e) {
          if (null === e) return null;
          do {
            e = e.return;
          } while (e && 5 !== e.tag);
          return e || null;
        }
        function Yr(e, t, n, r, i) {
          for (var o = t._reactName, a = []; null !== n && n !== r; ) {
            var l = n,
              u = l.alternate,
              s = l.stateNode;
            if (null !== u && u === r) break;
            5 === l.tag &&
              null !== s &&
              ((l = s),
              i
                ? null != (u = Le(n, o)) && a.unshift(Wr(n, u, l))
                : i || (null != (u = Le(n, o)) && a.push(Wr(n, u, l)))),
              (n = n.return);
          }
          0 !== a.length && e.push({ event: t, listeners: a });
        }
        var Xr = /\r\n?/g,
          Kr = /\u0000|\uFFFD/g;
        function Gr(e) {
          return ("string" === typeof e ? e : "" + e)
            .replace(Xr, "\n")
            .replace(Kr, "");
        }
        function Zr(e, t, n) {
          if (((t = Gr(t)), Gr(e) !== t && n)) throw Error(o(425));
        }
        function Jr() {}
        var ei = null,
          ti = null;
        function ni(e, t) {
          return (
            "textarea" === e ||
            "noscript" === e ||
            "string" === typeof t.children ||
            "number" === typeof t.children ||
            ("object" === typeof t.dangerouslySetInnerHTML &&
              null !== t.dangerouslySetInnerHTML &&
              null != t.dangerouslySetInnerHTML.__html)
          );
        }
        var ri = "function" === typeof setTimeout ? setTimeout : void 0,
          ii = "function" === typeof clearTimeout ? clearTimeout : void 0,
          oi = "function" === typeof Promise ? Promise : void 0,
          ai =
            "function" === typeof queueMicrotask
              ? queueMicrotask
              : "undefined" !== typeof oi
              ? function (e) {
                  return oi.resolve(null).then(e).catch(li);
                }
              : ri;
        function li(e) {
          setTimeout(function () {
            throw e;
          });
        }
        function ui(e, t) {
          var n = t,
            r = 0;
          do {
            var i = n.nextSibling;
            if ((e.removeChild(n), i && 8 === i.nodeType))
              if ("/$" === (n = i.data)) {
                if (0 === r) return e.removeChild(i), void Bt(t);
                r--;
              } else ("$" !== n && "$?" !== n && "$!" !== n) || r++;
            n = i;
          } while (n);
          Bt(t);
        }
        function si(e) {
          for (; null != e; e = e.nextSibling) {
            var t = e.nodeType;
            if (1 === t || 3 === t) break;
            if (8 === t) {
              if ("$" === (t = e.data) || "$!" === t || "$?" === t) break;
              if ("/$" === t) return null;
            }
          }
          return e;
        }
        function ci(e) {
          e = e.previousSibling;
          for (var t = 0; e; ) {
            if (8 === e.nodeType) {
              var n = e.data;
              if ("$" === n || "$!" === n || "$?" === n) {
                if (0 === t) return e;
                t--;
              } else "/$" === n && t++;
            }
            e = e.previousSibling;
          }
          return null;
        }
        var fi = Math.random().toString(36).slice(2),
          di = "__reactFiber$" + fi,
          pi = "__reactProps$" + fi,
          hi = "__reactContainer$" + fi,
          vi = "__reactEvents$" + fi,
          mi = "__reactListeners$" + fi,
          yi = "__reactHandles$" + fi;
        function gi(e) {
          var t = e[di];
          if (t) return t;
          for (var n = e.parentNode; n; ) {
            if ((t = n[hi] || n[di])) {
              if (
                ((n = t.alternate),
                null !== t.child || (null !== n && null !== n.child))
              )
                for (e = ci(e); null !== e; ) {
                  if ((n = e[di])) return n;
                  e = ci(e);
                }
              return t;
            }
            n = (e = n).parentNode;
          }
          return null;
        }
        function bi(e) {
          return !(e = e[di] || e[hi]) ||
            (5 !== e.tag && 6 !== e.tag && 13 !== e.tag && 3 !== e.tag)
            ? null
            : e;
        }
        function wi(e) {
          if (5 === e.tag || 6 === e.tag) return e.stateNode;
          throw Error(o(33));
        }
        function _i(e) {
          return e[pi] || null;
        }
        var ki = [],
          Si = -1;
        function xi(e) {
          return { current: e };
        }
        function Ei(e) {
          0 > Si || ((e.current = ki[Si]), (ki[Si] = null), Si--);
        }
        function Ci(e, t) {
          Si++, (ki[Si] = e.current), (e.current = t);
        }
        var Ni = {},
          Pi = xi(Ni),
          zi = xi(!1),
          Mi = Ni;
        function Ti(e, t) {
          var n = e.type.contextTypes;
          if (!n) return Ni;
          var r = e.stateNode;
          if (r && r.__reactInternalMemoizedUnmaskedChildContext === t)
            return r.__reactInternalMemoizedMaskedChildContext;
          var i,
            o = {};
          for (i in n) o[i] = t[i];
          return (
            r &&
              (((e = e.stateNode).__reactInternalMemoizedUnmaskedChildContext =
                t),
              (e.__reactInternalMemoizedMaskedChildContext = o)),
            o
          );
        }
        function Li(e) {
          return null !== (e = e.childContextTypes) && void 0 !== e;
        }
        function Oi() {
          Ei(zi), Ei(Pi);
        }
        function Ri(e, t, n) {
          if (Pi.current !== Ni) throw Error(o(168));
          Ci(Pi, t), Ci(zi, n);
        }
        function Ai(e, t, n) {
          var r = e.stateNode;
          if (
            ((t = t.childContextTypes), "function" !== typeof r.getChildContext)
          )
            return n;
          for (var i in (r = r.getChildContext()))
            if (!(i in t)) throw Error(o(108, $(e) || "Unknown", i));
          return F({}, n, r);
        }
        function Ii(e) {
          return (
            (e =
              ((e = e.stateNode) &&
                e.__reactInternalMemoizedMergedChildContext) ||
              Ni),
            (Mi = Pi.current),
            Ci(Pi, e),
            Ci(zi, zi.current),
            !0
          );
        }
        function Fi(e, t, n) {
          var r = e.stateNode;
          if (!r) throw Error(o(169));
          n
            ? ((e = Ai(e, t, Mi)),
              (r.__reactInternalMemoizedMergedChildContext = e),
              Ei(zi),
              Ei(Pi),
              Ci(Pi, e))
            : Ei(zi),
            Ci(zi, n);
        }
        var Di = null,
          ji = !1,
          Ui = !1;
        function Vi(e) {
          null === Di ? (Di = [e]) : Di.push(e);
        }
        function Bi() {
          if (!Ui && null !== Di) {
            Ui = !0;
            var e = 0,
              t = bt;
            try {
              var n = Di;
              for (bt = 1; e < n.length; e++) {
                var r = n[e];
                do {
                  r = r(!0);
                } while (null !== r);
              }
              (Di = null), (ji = !1);
            } catch (i) {
              throw (null !== Di && (Di = Di.slice(e + 1)), qe(Je, Bi), i);
            } finally {
              (bt = t), (Ui = !1);
            }
          }
          return null;
        }
        var $i = [],
          Hi = 0,
          Wi = null,
          Qi = 0,
          qi = [],
          Yi = 0,
          Xi = null,
          Ki = 1,
          Gi = "";
        function Zi(e, t) {
          ($i[Hi++] = Qi), ($i[Hi++] = Wi), (Wi = e), (Qi = t);
        }
        function Ji(e, t, n) {
          (qi[Yi++] = Ki), (qi[Yi++] = Gi), (qi[Yi++] = Xi), (Xi = e);
          var r = Ki;
          e = Gi;
          var i = 32 - at(r) - 1;
          (r &= ~(1 << i)), (n += 1);
          var o = 32 - at(t) + i;
          if (30 < o) {
            var a = i - (i % 5);
            (o = (r & ((1 << a) - 1)).toString(32)),
              (r >>= a),
              (i -= a),
              (Ki = (1 << (32 - at(t) + i)) | (n << i) | r),
              (Gi = o + e);
          } else (Ki = (1 << o) | (n << i) | r), (Gi = e);
        }
        function eo(e) {
          null !== e.return && (Zi(e, 1), Ji(e, 1, 0));
        }
        function to(e) {
          for (; e === Wi; )
            (Wi = $i[--Hi]), ($i[Hi] = null), (Qi = $i[--Hi]), ($i[Hi] = null);
          for (; e === Xi; )
            (Xi = qi[--Yi]),
              (qi[Yi] = null),
              (Gi = qi[--Yi]),
              (qi[Yi] = null),
              (Ki = qi[--Yi]),
              (qi[Yi] = null);
        }
        var no = null,
          ro = null,
          io = !1,
          oo = null;
        function ao(e, t) {
          var n = Ls(5, null, null, 0);
          (n.elementType = "DELETED"),
            (n.stateNode = t),
            (n.return = e),
            null === (t = e.deletions)
              ? ((e.deletions = [n]), (e.flags |= 16))
              : t.push(n);
        }
        function lo(e, t) {
          switch (e.tag) {
            case 5:
              var n = e.type;
              return (
                null !==
                  (t =
                    1 !== t.nodeType ||
                    n.toLowerCase() !== t.nodeName.toLowerCase()
                      ? null
                      : t) &&
                ((e.stateNode = t), (no = e), (ro = si(t.firstChild)), !0)
              );
            case 6:
              return (
                null !==
                  (t = "" === e.pendingProps || 3 !== t.nodeType ? null : t) &&
                ((e.stateNode = t), (no = e), (ro = null), !0)
              );
            case 13:
              return (
                null !== (t = 8 !== t.nodeType ? null : t) &&
                ((n = null !== Xi ? { id: Ki, overflow: Gi } : null),
                (e.memoizedState = {
                  dehydrated: t,
                  treeContext: n,
                  retryLane: 1073741824,
                }),
                ((n = Ls(18, null, null, 0)).stateNode = t),
                (n.return = e),
                (e.child = n),
                (no = e),
                (ro = null),
                !0)
              );
            default:
              return !1;
          }
        }
        function uo(e) {
          return 0 !== (1 & e.mode) && 0 === (128 & e.flags);
        }
        function so(e) {
          if (io) {
            var t = ro;
            if (t) {
              var n = t;
              if (!lo(e, t)) {
                if (uo(e)) throw Error(o(418));
                t = si(n.nextSibling);
                var r = no;
                t && lo(e, t)
                  ? ao(r, n)
                  : ((e.flags = (-4097 & e.flags) | 2), (io = !1), (no = e));
              }
            } else {
              if (uo(e)) throw Error(o(418));
              (e.flags = (-4097 & e.flags) | 2), (io = !1), (no = e);
            }
          }
        }
        function co(e) {
          for (
            e = e.return;
            null !== e && 5 !== e.tag && 3 !== e.tag && 13 !== e.tag;

          )
            e = e.return;
          no = e;
        }
        function fo(e) {
          if (e !== no) return !1;
          if (!io) return co(e), (io = !0), !1;
          var t;
          if (
            ((t = 3 !== e.tag) &&
              !(t = 5 !== e.tag) &&
              (t =
                "head" !== (t = e.type) &&
                "body" !== t &&
                !ni(e.type, e.memoizedProps)),
            t && (t = ro))
          ) {
            if (uo(e)) throw (po(), Error(o(418)));
            for (; t; ) ao(e, t), (t = si(t.nextSibling));
          }
          if ((co(e), 13 === e.tag)) {
            if (!(e = null !== (e = e.memoizedState) ? e.dehydrated : null))
              throw Error(o(317));
            e: {
              for (e = e.nextSibling, t = 0; e; ) {
                if (8 === e.nodeType) {
                  var n = e.data;
                  if ("/$" === n) {
                    if (0 === t) {
                      ro = si(e.nextSibling);
                      break e;
                    }
                    t--;
                  } else ("$" !== n && "$!" !== n && "$?" !== n) || t++;
                }
                e = e.nextSibling;
              }
              ro = null;
            }
          } else ro = no ? si(e.stateNode.nextSibling) : null;
          return !0;
        }
        function po() {
          for (var e = ro; e; ) e = si(e.nextSibling);
        }
        function ho() {
          (ro = no = null), (io = !1);
        }
        function vo(e) {
          null === oo ? (oo = [e]) : oo.push(e);
        }
        var mo = w.ReactCurrentBatchConfig;
        function yo(e, t) {
          if (e && e.defaultProps) {
            for (var n in ((t = F({}, t)), (e = e.defaultProps)))
              void 0 === t[n] && (t[n] = e[n]);
            return t;
          }
          return t;
        }
        var go = xi(null),
          bo = null,
          wo = null,
          _o = null;
        function ko() {
          _o = wo = bo = null;
        }
        function So(e) {
          var t = go.current;
          Ei(go), (e._currentValue = t);
        }
        function xo(e, t, n) {
          for (; null !== e; ) {
            var r = e.alternate;
            if (
              ((e.childLanes & t) !== t
                ? ((e.childLanes |= t), null !== r && (r.childLanes |= t))
                : null !== r && (r.childLanes & t) !== t && (r.childLanes |= t),
              e === n)
            )
              break;
            e = e.return;
          }
        }
        function Eo(e, t) {
          (bo = e),
            (_o = wo = null),
            null !== (e = e.dependencies) &&
              null !== e.firstContext &&
              (0 !== (e.lanes & t) && (wl = !0), (e.firstContext = null));
        }
        function Co(e) {
          var t = e._currentValue;
          if (_o !== e)
            if (
              ((e = { context: e, memoizedValue: t, next: null }), null === wo)
            ) {
              if (null === bo) throw Error(o(308));
              (wo = e), (bo.dependencies = { lanes: 0, firstContext: e });
            } else wo = wo.next = e;
          return t;
        }
        var No = null;
        function Po(e) {
          null === No ? (No = [e]) : No.push(e);
        }
        function zo(e, t, n, r) {
          var i = t.interleaved;
          return (
            null === i
              ? ((n.next = n), Po(t))
              : ((n.next = i.next), (i.next = n)),
            (t.interleaved = n),
            Mo(e, r)
          );
        }
        function Mo(e, t) {
          e.lanes |= t;
          var n = e.alternate;
          for (null !== n && (n.lanes |= t), n = e, e = e.return; null !== e; )
            (e.childLanes |= t),
              null !== (n = e.alternate) && (n.childLanes |= t),
              (n = e),
              (e = e.return);
          return 3 === n.tag ? n.stateNode : null;
        }
        var To = !1;
        function Lo(e) {
          e.updateQueue = {
            baseState: e.memoizedState,
            firstBaseUpdate: null,
            lastBaseUpdate: null,
            shared: { pending: null, interleaved: null, lanes: 0 },
            effects: null,
          };
        }
        function Oo(e, t) {
          (e = e.updateQueue),
            t.updateQueue === e &&
              (t.updateQueue = {
                baseState: e.baseState,
                firstBaseUpdate: e.firstBaseUpdate,
                lastBaseUpdate: e.lastBaseUpdate,
                shared: e.shared,
                effects: e.effects,
              });
        }
        function Ro(e, t) {
          return {
            eventTime: e,
            lane: t,
            tag: 0,
            payload: null,
            callback: null,
            next: null,
          };
        }
        function Ao(e, t, n) {
          var r = e.updateQueue;
          if (null === r) return null;
          if (((r = r.shared), 0 !== (2 & zu))) {
            var i = r.pending;
            return (
              null === i ? (t.next = t) : ((t.next = i.next), (i.next = t)),
              (r.pending = t),
              Mo(e, n)
            );
          }
          return (
            null === (i = r.interleaved)
              ? ((t.next = t), Po(r))
              : ((t.next = i.next), (i.next = t)),
            (r.interleaved = t),
            Mo(e, n)
          );
        }
        function Io(e, t, n) {
          if (
            null !== (t = t.updateQueue) &&
            ((t = t.shared), 0 !== (4194240 & n))
          ) {
            var r = t.lanes;
            (n |= r &= e.pendingLanes), (t.lanes = n), gt(e, n);
          }
        }
        function Fo(e, t) {
          var n = e.updateQueue,
            r = e.alternate;
          if (null !== r && n === (r = r.updateQueue)) {
            var i = null,
              o = null;
            if (null !== (n = n.firstBaseUpdate)) {
              do {
                var a = {
                  eventTime: n.eventTime,
                  lane: n.lane,
                  tag: n.tag,
                  payload: n.payload,
                  callback: n.callback,
                  next: null,
                };
                null === o ? (i = o = a) : (o = o.next = a), (n = n.next);
              } while (null !== n);
              null === o ? (i = o = t) : (o = o.next = t);
            } else i = o = t;
            return (
              (n = {
                baseState: r.baseState,
                firstBaseUpdate: i,
                lastBaseUpdate: o,
                shared: r.shared,
                effects: r.effects,
              }),
              void (e.updateQueue = n)
            );
          }
          null === (e = n.lastBaseUpdate)
            ? (n.firstBaseUpdate = t)
            : (e.next = t),
            (n.lastBaseUpdate = t);
        }
        function Do(e, t, n, r) {
          var i = e.updateQueue;
          To = !1;
          var o = i.firstBaseUpdate,
            a = i.lastBaseUpdate,
            l = i.shared.pending;
          if (null !== l) {
            i.shared.pending = null;
            var u = l,
              s = u.next;
            (u.next = null), null === a ? (o = s) : (a.next = s), (a = u);
            var c = e.alternate;
            null !== c &&
              (l = (c = c.updateQueue).lastBaseUpdate) !== a &&
              (null === l ? (c.firstBaseUpdate = s) : (l.next = s),
              (c.lastBaseUpdate = u));
          }
          if (null !== o) {
            var f = i.baseState;
            for (a = 0, c = s = u = null, l = o; ; ) {
              var d = l.lane,
                p = l.eventTime;
              if ((r & d) === d) {
                null !== c &&
                  (c = c.next =
                    {
                      eventTime: p,
                      lane: 0,
                      tag: l.tag,
                      payload: l.payload,
                      callback: l.callback,
                      next: null,
                    });
                e: {
                  var h = e,
                    v = l;
                  switch (((d = t), (p = n), v.tag)) {
                    case 1:
                      if ("function" === typeof (h = v.payload)) {
                        f = h.call(p, f, d);
                        break e;
                      }
                      f = h;
                      break e;
                    case 3:
                      h.flags = (-65537 & h.flags) | 128;
                    case 0:
                      if (
                        null ===
                          (d =
                            "function" === typeof (h = v.payload)
                              ? h.call(p, f, d)
                              : h) ||
                        void 0 === d
                      )
                        break e;
                      f = F({}, f, d);
                      break e;
                    case 2:
                      To = !0;
                  }
                }
                null !== l.callback &&
                  0 !== l.lane &&
                  ((e.flags |= 64),
                  null === (d = i.effects) ? (i.effects = [l]) : d.push(l));
              } else
                (p = {
                  eventTime: p,
                  lane: d,
                  tag: l.tag,
                  payload: l.payload,
                  callback: l.callback,
                  next: null,
                }),
                  null === c ? ((s = c = p), (u = f)) : (c = c.next = p),
                  (a |= d);
              if (null === (l = l.next)) {
                if (null === (l = i.shared.pending)) break;
                (l = (d = l).next),
                  (d.next = null),
                  (i.lastBaseUpdate = d),
                  (i.shared.pending = null);
              }
            }
            if (
              (null === c && (u = f),
              (i.baseState = u),
              (i.firstBaseUpdate = s),
              (i.lastBaseUpdate = c),
              null !== (t = i.shared.interleaved))
            ) {
              i = t;
              do {
                (a |= i.lane), (i = i.next);
              } while (i !== t);
            } else null === o && (i.shared.lanes = 0);
            (Fu |= a), (e.lanes = a), (e.memoizedState = f);
          }
        }
        function jo(e, t, n) {
          if (((e = t.effects), (t.effects = null), null !== e))
            for (t = 0; t < e.length; t++) {
              var r = e[t],
                i = r.callback;
              if (null !== i) {
                if (((r.callback = null), (r = n), "function" !== typeof i))
                  throw Error(o(191, i));
                i.call(r);
              }
            }
        }
        var Uo = new r.Component().refs;
        function Vo(e, t, n, r) {
          (n =
            null === (n = n(r, (t = e.memoizedState))) || void 0 === n
              ? t
              : F({}, t, n)),
            (e.memoizedState = n),
            0 === e.lanes && (e.updateQueue.baseState = n);
        }
        var Bo = {
          isMounted: function (e) {
            return !!(e = e._reactInternals) && Be(e) === e;
          },
          enqueueSetState: function (e, t, n) {
            e = e._reactInternals;
            var r = ts(),
              i = ns(e),
              o = Ro(r, i);
            (o.payload = t),
              void 0 !== n && null !== n && (o.callback = n),
              null !== (t = Ao(e, o, i)) && (rs(t, e, i, r), Io(t, e, i));
          },
          enqueueReplaceState: function (e, t, n) {
            e = e._reactInternals;
            var r = ts(),
              i = ns(e),
              o = Ro(r, i);
            (o.tag = 1),
              (o.payload = t),
              void 0 !== n && null !== n && (o.callback = n),
              null !== (t = Ao(e, o, i)) && (rs(t, e, i, r), Io(t, e, i));
          },
          enqueueForceUpdate: function (e, t) {
            e = e._reactInternals;
            var n = ts(),
              r = ns(e),
              i = Ro(n, r);
            (i.tag = 2),
              void 0 !== t && null !== t && (i.callback = t),
              null !== (t = Ao(e, i, r)) && (rs(t, e, r, n), Io(t, e, r));
          },
        };
        function $o(e, t, n, r, i, o, a) {
          return "function" === typeof (e = e.stateNode).shouldComponentUpdate
            ? e.shouldComponentUpdate(r, o, a)
            : !t.prototype ||
                !t.prototype.isPureReactComponent ||
                !ur(n, r) ||
                !ur(i, o);
        }
        function Ho(e, t, n) {
          var r = !1,
            i = Ni,
            o = t.contextType;
          return (
            "object" === typeof o && null !== o
              ? (o = Co(o))
              : ((i = Li(t) ? Mi : Pi.current),
                (o = (r = null !== (r = t.contextTypes) && void 0 !== r)
                  ? Ti(e, i)
                  : Ni)),
            (t = new t(n, o)),
            (e.memoizedState =
              null !== t.state && void 0 !== t.state ? t.state : null),
            (t.updater = Bo),
            (e.stateNode = t),
            (t._reactInternals = e),
            r &&
              (((e = e.stateNode).__reactInternalMemoizedUnmaskedChildContext =
                i),
              (e.__reactInternalMemoizedMaskedChildContext = o)),
            t
          );
        }
        function Wo(e, t, n, r) {
          (e = t.state),
            "function" === typeof t.componentWillReceiveProps &&
              t.componentWillReceiveProps(n, r),
            "function" === typeof t.UNSAFE_componentWillReceiveProps &&
              t.UNSAFE_componentWillReceiveProps(n, r),
            t.state !== e && Bo.enqueueReplaceState(t, t.state, null);
        }
        function Qo(e, t, n, r) {
          var i = e.stateNode;
          (i.props = n), (i.state = e.memoizedState), (i.refs = Uo), Lo(e);
          var o = t.contextType;
          "object" === typeof o && null !== o
            ? (i.context = Co(o))
            : ((o = Li(t) ? Mi : Pi.current), (i.context = Ti(e, o))),
            (i.state = e.memoizedState),
            "function" === typeof (o = t.getDerivedStateFromProps) &&
              (Vo(e, t, o, n), (i.state = e.memoizedState)),
            "function" === typeof t.getDerivedStateFromProps ||
              "function" === typeof i.getSnapshotBeforeUpdate ||
              ("function" !== typeof i.UNSAFE_componentWillMount &&
                "function" !== typeof i.componentWillMount) ||
              ((t = i.state),
              "function" === typeof i.componentWillMount &&
                i.componentWillMount(),
              "function" === typeof i.UNSAFE_componentWillMount &&
                i.UNSAFE_componentWillMount(),
              t !== i.state && Bo.enqueueReplaceState(i, i.state, null),
              Do(e, n, i, r),
              (i.state = e.memoizedState)),
            "function" === typeof i.componentDidMount && (e.flags |= 4194308);
        }
        function qo(e, t, n) {
          if (
            null !== (e = n.ref) &&
            "function" !== typeof e &&
            "object" !== typeof e
          ) {
            if (n._owner) {
              if ((n = n._owner)) {
                if (1 !== n.tag) throw Error(o(309));
                var r = n.stateNode;
              }
              if (!r) throw Error(o(147, e));
              var i = r,
                a = "" + e;
              return null !== t &&
                null !== t.ref &&
                "function" === typeof t.ref &&
                t.ref._stringRef === a
                ? t.ref
                : ((t = function (e) {
                    var t = i.refs;
                    t === Uo && (t = i.refs = {}),
                      null === e ? delete t[a] : (t[a] = e);
                  }),
                  (t._stringRef = a),
                  t);
            }
            if ("string" !== typeof e) throw Error(o(284));
            if (!n._owner) throw Error(o(290, e));
          }
          return e;
        }
        function Yo(e, t) {
          throw (
            ((e = Object.prototype.toString.call(t)),
            Error(
              o(
                31,
                "[object Object]" === e
                  ? "object with keys {" + Object.keys(t).join(", ") + "}"
                  : e
              )
            ))
          );
        }
        function Xo(e) {
          return (0, e._init)(e._payload);
        }
        function Ko(e) {
          function t(t, n) {
            if (e) {
              var r = t.deletions;
              null === r ? ((t.deletions = [n]), (t.flags |= 16)) : r.push(n);
            }
          }
          function n(n, r) {
            if (!e) return null;
            for (; null !== r; ) t(n, r), (r = r.sibling);
            return null;
          }
          function r(e, t) {
            for (e = new Map(); null !== t; )
              null !== t.key ? e.set(t.key, t) : e.set(t.index, t),
                (t = t.sibling);
            return e;
          }
          function i(e, t) {
            return ((e = Rs(e, t)).index = 0), (e.sibling = null), e;
          }
          function a(t, n, r) {
            return (
              (t.index = r),
              e
                ? null !== (r = t.alternate)
                  ? (r = r.index) < n
                    ? ((t.flags |= 2), n)
                    : r
                  : ((t.flags |= 2), n)
                : ((t.flags |= 1048576), n)
            );
          }
          function l(t) {
            return e && null === t.alternate && (t.flags |= 2), t;
          }
          function u(e, t, n, r) {
            return null === t || 6 !== t.tag
              ? (((t = Ds(n, e.mode, r)).return = e), t)
              : (((t = i(t, n)).return = e), t);
          }
          function s(e, t, n, r) {
            var o = n.type;
            return o === S
              ? f(e, t, n.props.children, r, n.key)
              : null !== t &&
                (t.elementType === o ||
                  ("object" === typeof o &&
                    null !== o &&
                    o.$$typeof === L &&
                    Xo(o) === t.type))
              ? (((r = i(t, n.props)).ref = qo(e, t, n)), (r.return = e), r)
              : (((r = As(n.type, n.key, n.props, null, e.mode, r)).ref = qo(
                  e,
                  t,
                  n
                )),
                (r.return = e),
                r);
          }
          function c(e, t, n, r) {
            return null === t ||
              4 !== t.tag ||
              t.stateNode.containerInfo !== n.containerInfo ||
              t.stateNode.implementation !== n.implementation
              ? (((t = js(n, e.mode, r)).return = e), t)
              : (((t = i(t, n.children || [])).return = e), t);
          }
          function f(e, t, n, r, o) {
            return null === t || 7 !== t.tag
              ? (((t = Is(n, e.mode, r, o)).return = e), t)
              : (((t = i(t, n)).return = e), t);
          }
          function d(e, t, n) {
            if (("string" === typeof t && "" !== t) || "number" === typeof t)
              return ((t = Ds("" + t, e.mode, n)).return = e), t;
            if ("object" === typeof t && null !== t) {
              switch (t.$$typeof) {
                case _:
                  return (
                    ((n = As(t.type, t.key, t.props, null, e.mode, n)).ref = qo(
                      e,
                      null,
                      t
                    )),
                    (n.return = e),
                    n
                  );
                case k:
                  return ((t = js(t, e.mode, n)).return = e), t;
                case L:
                  return d(e, (0, t._init)(t._payload), n);
              }
              if (te(t) || A(t))
                return ((t = Is(t, e.mode, n, null)).return = e), t;
              Yo(e, t);
            }
            return null;
          }
          function p(e, t, n, r) {
            var i = null !== t ? t.key : null;
            if (("string" === typeof n && "" !== n) || "number" === typeof n)
              return null !== i ? null : u(e, t, "" + n, r);
            if ("object" === typeof n && null !== n) {
              switch (n.$$typeof) {
                case _:
                  return n.key === i ? s(e, t, n, r) : null;
                case k:
                  return n.key === i ? c(e, t, n, r) : null;
                case L:
                  return p(e, t, (i = n._init)(n._payload), r);
              }
              if (te(n) || A(n)) return null !== i ? null : f(e, t, n, r, null);
              Yo(e, n);
            }
            return null;
          }
          function h(e, t, n, r, i) {
            if (("string" === typeof r && "" !== r) || "number" === typeof r)
              return u(t, (e = e.get(n) || null), "" + r, i);
            if ("object" === typeof r && null !== r) {
              switch (r.$$typeof) {
                case _:
                  return s(
                    t,
                    (e = e.get(null === r.key ? n : r.key) || null),
                    r,
                    i
                  );
                case k:
                  return c(
                    t,
                    (e = e.get(null === r.key ? n : r.key) || null),
                    r,
                    i
                  );
                case L:
                  return h(e, t, n, (0, r._init)(r._payload), i);
              }
              if (te(r) || A(r))
                return f(t, (e = e.get(n) || null), r, i, null);
              Yo(t, r);
            }
            return null;
          }
          function v(i, o, l, u) {
            for (
              var s = null, c = null, f = o, v = (o = 0), m = null;
              null !== f && v < l.length;
              v++
            ) {
              f.index > v ? ((m = f), (f = null)) : (m = f.sibling);
              var y = p(i, f, l[v], u);
              if (null === y) {
                null === f && (f = m);
                break;
              }
              e && f && null === y.alternate && t(i, f),
                (o = a(y, o, v)),
                null === c ? (s = y) : (c.sibling = y),
                (c = y),
                (f = m);
            }
            if (v === l.length) return n(i, f), io && Zi(i, v), s;
            if (null === f) {
              for (; v < l.length; v++)
                null !== (f = d(i, l[v], u)) &&
                  ((o = a(f, o, v)),
                  null === c ? (s = f) : (c.sibling = f),
                  (c = f));
              return io && Zi(i, v), s;
            }
            for (f = r(i, f); v < l.length; v++)
              null !== (m = h(f, i, v, l[v], u)) &&
                (e &&
                  null !== m.alternate &&
                  f.delete(null === m.key ? v : m.key),
                (o = a(m, o, v)),
                null === c ? (s = m) : (c.sibling = m),
                (c = m));
            return (
              e &&
                f.forEach(function (e) {
                  return t(i, e);
                }),
              io && Zi(i, v),
              s
            );
          }
          function m(i, l, u, s) {
            var c = A(u);
            if ("function" !== typeof c) throw Error(o(150));
            if (null == (u = c.call(u))) throw Error(o(151));
            for (
              var f = (c = null), v = l, m = (l = 0), y = null, g = u.next();
              null !== v && !g.done;
              m++, g = u.next()
            ) {
              v.index > m ? ((y = v), (v = null)) : (y = v.sibling);
              var b = p(i, v, g.value, s);
              if (null === b) {
                null === v && (v = y);
                break;
              }
              e && v && null === b.alternate && t(i, v),
                (l = a(b, l, m)),
                null === f ? (c = b) : (f.sibling = b),
                (f = b),
                (v = y);
            }
            if (g.done) return n(i, v), io && Zi(i, m), c;
            if (null === v) {
              for (; !g.done; m++, g = u.next())
                null !== (g = d(i, g.value, s)) &&
                  ((l = a(g, l, m)),
                  null === f ? (c = g) : (f.sibling = g),
                  (f = g));
              return io && Zi(i, m), c;
            }
            for (v = r(i, v); !g.done; m++, g = u.next())
              null !== (g = h(v, i, m, g.value, s)) &&
                (e &&
                  null !== g.alternate &&
                  v.delete(null === g.key ? m : g.key),
                (l = a(g, l, m)),
                null === f ? (c = g) : (f.sibling = g),
                (f = g));
            return (
              e &&
                v.forEach(function (e) {
                  return t(i, e);
                }),
              io && Zi(i, m),
              c
            );
          }
          return function e(r, o, a, u) {
            if (
              ("object" === typeof a &&
                null !== a &&
                a.type === S &&
                null === a.key &&
                (a = a.props.children),
              "object" === typeof a && null !== a)
            ) {
              switch (a.$$typeof) {
                case _:
                  e: {
                    for (var s = a.key, c = o; null !== c; ) {
                      if (c.key === s) {
                        if ((s = a.type) === S) {
                          if (7 === c.tag) {
                            n(r, c.sibling),
                              ((o = i(c, a.props.children)).return = r),
                              (r = o);
                            break e;
                          }
                        } else if (
                          c.elementType === s ||
                          ("object" === typeof s &&
                            null !== s &&
                            s.$$typeof === L &&
                            Xo(s) === c.type)
                        ) {
                          n(r, c.sibling),
                            ((o = i(c, a.props)).ref = qo(r, c, a)),
                            (o.return = r),
                            (r = o);
                          break e;
                        }
                        n(r, c);
                        break;
                      }
                      t(r, c), (c = c.sibling);
                    }
                    a.type === S
                      ? (((o = Is(a.props.children, r.mode, u, a.key)).return =
                          r),
                        (r = o))
                      : (((u = As(
                          a.type,
                          a.key,
                          a.props,
                          null,
                          r.mode,
                          u
                        )).ref = qo(r, o, a)),
                        (u.return = r),
                        (r = u));
                  }
                  return l(r);
                case k:
                  e: {
                    for (c = a.key; null !== o; ) {
                      if (o.key === c) {
                        if (
                          4 === o.tag &&
                          o.stateNode.containerInfo === a.containerInfo &&
                          o.stateNode.implementation === a.implementation
                        ) {
                          n(r, o.sibling),
                            ((o = i(o, a.children || [])).return = r),
                            (r = o);
                          break e;
                        }
                        n(r, o);
                        break;
                      }
                      t(r, o), (o = o.sibling);
                    }
                    ((o = js(a, r.mode, u)).return = r), (r = o);
                  }
                  return l(r);
                case L:
                  return e(r, o, (c = a._init)(a._payload), u);
              }
              if (te(a)) return v(r, o, a, u);
              if (A(a)) return m(r, o, a, u);
              Yo(r, a);
            }
            return ("string" === typeof a && "" !== a) || "number" === typeof a
              ? ((a = "" + a),
                null !== o && 6 === o.tag
                  ? (n(r, o.sibling), ((o = i(o, a)).return = r), (r = o))
                  : (n(r, o), ((o = Ds(a, r.mode, u)).return = r), (r = o)),
                l(r))
              : n(r, o);
          };
        }
        var Go = Ko(!0),
          Zo = Ko(!1),
          Jo = {},
          ea = xi(Jo),
          ta = xi(Jo),
          na = xi(Jo);
        function ra(e) {
          if (e === Jo) throw Error(o(174));
          return e;
        }
        function ia(e, t) {
          switch ((Ci(na, t), Ci(ta, e), Ci(ea, Jo), (e = t.nodeType))) {
            case 9:
            case 11:
              t = (t = t.documentElement) ? t.namespaceURI : ue(null, "");
              break;
            default:
              t = ue(
                (t = (e = 8 === e ? t.parentNode : t).namespaceURI || null),
                (e = e.tagName)
              );
          }
          Ei(ea), Ci(ea, t);
        }
        function oa() {
          Ei(ea), Ei(ta), Ei(na);
        }
        function aa(e) {
          ra(na.current);
          var t = ra(ea.current),
            n = ue(t, e.type);
          t !== n && (Ci(ta, e), Ci(ea, n));
        }
        function la(e) {
          ta.current === e && (Ei(ea), Ei(ta));
        }
        var ua = xi(0);
        function sa(e) {
          for (var t = e; null !== t; ) {
            if (13 === t.tag) {
              var n = t.memoizedState;
              if (
                null !== n &&
                (null === (n = n.dehydrated) ||
                  "$?" === n.data ||
                  "$!" === n.data)
              )
                return t;
            } else if (19 === t.tag && void 0 !== t.memoizedProps.revealOrder) {
              if (0 !== (128 & t.flags)) return t;
            } else if (null !== t.child) {
              (t.child.return = t), (t = t.child);
              continue;
            }
            if (t === e) break;
            for (; null === t.sibling; ) {
              if (null === t.return || t.return === e) return null;
              t = t.return;
            }
            (t.sibling.return = t.return), (t = t.sibling);
          }
          return null;
        }
        var ca = [];
        function fa() {
          for (var e = 0; e < ca.length; e++)
            ca[e]._workInProgressVersionPrimary = null;
          ca.length = 0;
        }
        var da = w.ReactCurrentDispatcher,
          pa = w.ReactCurrentBatchConfig,
          ha = 0,
          va = null,
          ma = null,
          ya = null,
          ga = !1,
          ba = !1,
          wa = 0,
          _a = 0;
        function ka() {
          throw Error(o(321));
        }
        function Sa(e, t) {
          if (null === t) return !1;
          for (var n = 0; n < t.length && n < e.length; n++)
            if (!lr(e[n], t[n])) return !1;
          return !0;
        }
        function xa(e, t, n, r, i, a) {
          if (
            ((ha = a),
            (va = t),
            (t.memoizedState = null),
            (t.updateQueue = null),
            (t.lanes = 0),
            (da.current = null === e || null === e.memoizedState ? ll : ul),
            (e = n(r, i)),
            ba)
          ) {
            a = 0;
            do {
              if (((ba = !1), (wa = 0), 25 <= a)) throw Error(o(301));
              (a += 1),
                (ya = ma = null),
                (t.updateQueue = null),
                (da.current = sl),
                (e = n(r, i));
            } while (ba);
          }
          if (
            ((da.current = al),
            (t = null !== ma && null !== ma.next),
            (ha = 0),
            (ya = ma = va = null),
            (ga = !1),
            t)
          )
            throw Error(o(300));
          return e;
        }
        function Ea() {
          var e = 0 !== wa;
          return (wa = 0), e;
        }
        function Ca() {
          var e = {
            memoizedState: null,
            baseState: null,
            baseQueue: null,
            queue: null,
            next: null,
          };
          return (
            null === ya ? (va.memoizedState = ya = e) : (ya = ya.next = e), ya
          );
        }
        function Na() {
          if (null === ma) {
            var e = va.alternate;
            e = null !== e ? e.memoizedState : null;
          } else e = ma.next;
          var t = null === ya ? va.memoizedState : ya.next;
          if (null !== t) (ya = t), (ma = e);
          else {
            if (null === e) throw Error(o(310));
            (e = {
              memoizedState: (ma = e).memoizedState,
              baseState: ma.baseState,
              baseQueue: ma.baseQueue,
              queue: ma.queue,
              next: null,
            }),
              null === ya ? (va.memoizedState = ya = e) : (ya = ya.next = e);
          }
          return ya;
        }
        function Pa(e, t) {
          return "function" === typeof t ? t(e) : t;
        }
        function za(e) {
          var t = Na(),
            n = t.queue;
          if (null === n) throw Error(o(311));
          n.lastRenderedReducer = e;
          var r = ma,
            i = r.baseQueue,
            a = n.pending;
          if (null !== a) {
            if (null !== i) {
              var l = i.next;
              (i.next = a.next), (a.next = l);
            }
            (r.baseQueue = i = a), (n.pending = null);
          }
          if (null !== i) {
            (a = i.next), (r = r.baseState);
            var u = (l = null),
              s = null,
              c = a;
            do {
              var f = c.lane;
              if ((ha & f) === f)
                null !== s &&
                  (s = s.next =
                    {
                      lane: 0,
                      action: c.action,
                      hasEagerState: c.hasEagerState,
                      eagerState: c.eagerState,
                      next: null,
                    }),
                  (r = c.hasEagerState ? c.eagerState : e(r, c.action));
              else {
                var d = {
                  lane: f,
                  action: c.action,
                  hasEagerState: c.hasEagerState,
                  eagerState: c.eagerState,
                  next: null,
                };
                null === s ? ((u = s = d), (l = r)) : (s = s.next = d),
                  (va.lanes |= f),
                  (Fu |= f);
              }
              c = c.next;
            } while (null !== c && c !== a);
            null === s ? (l = r) : (s.next = u),
              lr(r, t.memoizedState) || (wl = !0),
              (t.memoizedState = r),
              (t.baseState = l),
              (t.baseQueue = s),
              (n.lastRenderedState = r);
          }
          if (null !== (e = n.interleaved)) {
            i = e;
            do {
              (a = i.lane), (va.lanes |= a), (Fu |= a), (i = i.next);
            } while (i !== e);
          } else null === i && (n.lanes = 0);
          return [t.memoizedState, n.dispatch];
        }
        function Ma(e) {
          var t = Na(),
            n = t.queue;
          if (null === n) throw Error(o(311));
          n.lastRenderedReducer = e;
          var r = n.dispatch,
            i = n.pending,
            a = t.memoizedState;
          if (null !== i) {
            n.pending = null;
            var l = (i = i.next);
            do {
              (a = e(a, l.action)), (l = l.next);
            } while (l !== i);
            lr(a, t.memoizedState) || (wl = !0),
              (t.memoizedState = a),
              null === t.baseQueue && (t.baseState = a),
              (n.lastRenderedState = a);
          }
          return [a, r];
        }
        function Ta() {}
        function La(e, t) {
          var n = va,
            r = Na(),
            i = t(),
            a = !lr(r.memoizedState, i);
          if (
            (a && ((r.memoizedState = i), (wl = !0)),
            (r = r.queue),
            Ha(Aa.bind(null, n, r, e), [e]),
            r.getSnapshot !== t ||
              a ||
              (null !== ya && 1 & ya.memoizedState.tag))
          ) {
            if (
              ((n.flags |= 2048),
              ja(9, Ra.bind(null, n, r, i, t), void 0, null),
              null === Mu)
            )
              throw Error(o(349));
            0 !== (30 & ha) || Oa(n, t, i);
          }
          return i;
        }
        function Oa(e, t, n) {
          (e.flags |= 16384),
            (e = { getSnapshot: t, value: n }),
            null === (t = va.updateQueue)
              ? ((t = { lastEffect: null, stores: null }),
                (va.updateQueue = t),
                (t.stores = [e]))
              : null === (n = t.stores)
              ? (t.stores = [e])
              : n.push(e);
        }
        function Ra(e, t, n, r) {
          (t.value = n), (t.getSnapshot = r), Ia(t) && Fa(e);
        }
        function Aa(e, t, n) {
          return n(function () {
            Ia(t) && Fa(e);
          });
        }
        function Ia(e) {
          var t = e.getSnapshot;
          e = e.value;
          try {
            var n = t();
            return !lr(e, n);
          } catch (r) {
            return !0;
          }
        }
        function Fa(e) {
          var t = Mo(e, 1);
          null !== t && rs(t, e, 1, -1);
        }
        function Da(e) {
          var t = Ca();
          return (
            "function" === typeof e && (e = e()),
            (t.memoizedState = t.baseState = e),
            (e = {
              pending: null,
              interleaved: null,
              lanes: 0,
              dispatch: null,
              lastRenderedReducer: Pa,
              lastRenderedState: e,
            }),
            (t.queue = e),
            (e = e.dispatch = nl.bind(null, va, e)),
            [t.memoizedState, e]
          );
        }
        function ja(e, t, n, r) {
          return (
            (e = { tag: e, create: t, destroy: n, deps: r, next: null }),
            null === (t = va.updateQueue)
              ? ((t = { lastEffect: null, stores: null }),
                (va.updateQueue = t),
                (t.lastEffect = e.next = e))
              : null === (n = t.lastEffect)
              ? (t.lastEffect = e.next = e)
              : ((r = n.next), (n.next = e), (e.next = r), (t.lastEffect = e)),
            e
          );
        }
        function Ua() {
          return Na().memoizedState;
        }
        function Va(e, t, n, r) {
          var i = Ca();
          (va.flags |= e),
            (i.memoizedState = ja(1 | t, n, void 0, void 0 === r ? null : r));
        }
        function Ba(e, t, n, r) {
          var i = Na();
          r = void 0 === r ? null : r;
          var o = void 0;
          if (null !== ma) {
            var a = ma.memoizedState;
            if (((o = a.destroy), null !== r && Sa(r, a.deps)))
              return void (i.memoizedState = ja(t, n, o, r));
          }
          (va.flags |= e), (i.memoizedState = ja(1 | t, n, o, r));
        }
        function $a(e, t) {
          return Va(8390656, 8, e, t);
        }
        function Ha(e, t) {
          return Ba(2048, 8, e, t);
        }
        function Wa(e, t) {
          return Ba(4, 2, e, t);
        }
        function Qa(e, t) {
          return Ba(4, 4, e, t);
        }
        function qa(e, t) {
          return "function" === typeof t
            ? ((e = e()),
              t(e),
              function () {
                t(null);
              })
            : null !== t && void 0 !== t
            ? ((e = e()),
              (t.current = e),
              function () {
                t.current = null;
              })
            : void 0;
        }
        function Ya(e, t, n) {
          return (
            (n = null !== n && void 0 !== n ? n.concat([e]) : null),
            Ba(4, 4, qa.bind(null, t, e), n)
          );
        }
        function Xa() {}
        function Ka(e, t) {
          var n = Na();
          t = void 0 === t ? null : t;
          var r = n.memoizedState;
          return null !== r && null !== t && Sa(t, r[1])
            ? r[0]
            : ((n.memoizedState = [e, t]), e);
        }
        function Ga(e, t) {
          var n = Na();
          t = void 0 === t ? null : t;
          var r = n.memoizedState;
          return null !== r && null !== t && Sa(t, r[1])
            ? r[0]
            : ((e = e()), (n.memoizedState = [e, t]), e);
        }
        function Za(e, t, n) {
          return 0 === (21 & ha)
            ? (e.baseState && ((e.baseState = !1), (wl = !0)),
              (e.memoizedState = n))
            : (lr(n, t) ||
                ((n = vt()), (va.lanes |= n), (Fu |= n), (e.baseState = !0)),
              t);
        }
        function Ja(e, t) {
          var n = bt;
          (bt = 0 !== n && 4 > n ? n : 4), e(!0);
          var r = pa.transition;
          pa.transition = {};
          try {
            e(!1), t();
          } finally {
            (bt = n), (pa.transition = r);
          }
        }
        function el() {
          return Na().memoizedState;
        }
        function tl(e, t, n) {
          var r = ns(e);
          if (
            ((n = {
              lane: r,
              action: n,
              hasEagerState: !1,
              eagerState: null,
              next: null,
            }),
            rl(e))
          )
            il(t, n);
          else if (null !== (n = zo(e, t, n, r))) {
            rs(n, e, r, ts()), ol(n, t, r);
          }
        }
        function nl(e, t, n) {
          var r = ns(e),
            i = {
              lane: r,
              action: n,
              hasEagerState: !1,
              eagerState: null,
              next: null,
            };
          if (rl(e)) il(t, i);
          else {
            var o = e.alternate;
            if (
              0 === e.lanes &&
              (null === o || 0 === o.lanes) &&
              null !== (o = t.lastRenderedReducer)
            )
              try {
                var a = t.lastRenderedState,
                  l = o(a, n);
                if (((i.hasEagerState = !0), (i.eagerState = l), lr(l, a))) {
                  var u = t.interleaved;
                  return (
                    null === u
                      ? ((i.next = i), Po(t))
                      : ((i.next = u.next), (u.next = i)),
                    void (t.interleaved = i)
                  );
                }
              } catch (s) {}
            null !== (n = zo(e, t, i, r)) &&
              (rs(n, e, r, (i = ts())), ol(n, t, r));
          }
        }
        function rl(e) {
          var t = e.alternate;
          return e === va || (null !== t && t === va);
        }
        function il(e, t) {
          ba = ga = !0;
          var n = e.pending;
          null === n ? (t.next = t) : ((t.next = n.next), (n.next = t)),
            (e.pending = t);
        }
        function ol(e, t, n) {
          if (0 !== (4194240 & n)) {
            var r = t.lanes;
            (n |= r &= e.pendingLanes), (t.lanes = n), gt(e, n);
          }
        }
        var al = {
            readContext: Co,
            useCallback: ka,
            useContext: ka,
            useEffect: ka,
            useImperativeHandle: ka,
            useInsertionEffect: ka,
            useLayoutEffect: ka,
            useMemo: ka,
            useReducer: ka,
            useRef: ka,
            useState: ka,
            useDebugValue: ka,
            useDeferredValue: ka,
            useTransition: ka,
            useMutableSource: ka,
            useSyncExternalStore: ka,
            useId: ka,
            unstable_isNewReconciler: !1,
          },
          ll = {
            readContext: Co,
            useCallback: function (e, t) {
              return (Ca().memoizedState = [e, void 0 === t ? null : t]), e;
            },
            useContext: Co,
            useEffect: $a,
            useImperativeHandle: function (e, t, n) {
              return (
                (n = null !== n && void 0 !== n ? n.concat([e]) : null),
                Va(4194308, 4, qa.bind(null, t, e), n)
              );
            },
            useLayoutEffect: function (e, t) {
              return Va(4194308, 4, e, t);
            },
            useInsertionEffect: function (e, t) {
              return Va(4, 2, e, t);
            },
            useMemo: function (e, t) {
              var n = Ca();
              return (
                (t = void 0 === t ? null : t),
                (e = e()),
                (n.memoizedState = [e, t]),
                e
              );
            },
            useReducer: function (e, t, n) {
              var r = Ca();
              return (
                (t = void 0 !== n ? n(t) : t),
                (r.memoizedState = r.baseState = t),
                (e = {
                  pending: null,
                  interleaved: null,
                  lanes: 0,
                  dispatch: null,
                  lastRenderedReducer: e,
                  lastRenderedState: t,
                }),
                (r.queue = e),
                (e = e.dispatch = tl.bind(null, va, e)),
                [r.memoizedState, e]
              );
            },
            useRef: function (e) {
              return (e = { current: e }), (Ca().memoizedState = e);
            },
            useState: Da,
            useDebugValue: Xa,
            useDeferredValue: function (e) {
              return (Ca().memoizedState = e);
            },
            useTransition: function () {
              var e = Da(!1),
                t = e[0];
              return (
                (e = Ja.bind(null, e[1])), (Ca().memoizedState = e), [t, e]
              );
            },
            useMutableSource: function () {},
            useSyncExternalStore: function (e, t, n) {
              var r = va,
                i = Ca();
              if (io) {
                if (void 0 === n) throw Error(o(407));
                n = n();
              } else {
                if (((n = t()), null === Mu)) throw Error(o(349));
                0 !== (30 & ha) || Oa(r, t, n);
              }
              i.memoizedState = n;
              var a = { value: n, getSnapshot: t };
              return (
                (i.queue = a),
                $a(Aa.bind(null, r, a, e), [e]),
                (r.flags |= 2048),
                ja(9, Ra.bind(null, r, a, n, t), void 0, null),
                n
              );
            },
            useId: function () {
              var e = Ca(),
                t = Mu.identifierPrefix;
              if (io) {
                var n = Gi;
                (t =
                  ":" +
                  t +
                  "R" +
                  (n = (Ki & ~(1 << (32 - at(Ki) - 1))).toString(32) + n)),
                  0 < (n = wa++) && (t += "H" + n.toString(32)),
                  (t += ":");
              } else t = ":" + t + "r" + (n = _a++).toString(32) + ":";
              return (e.memoizedState = t);
            },
            unstable_isNewReconciler: !1,
          },
          ul = {
            readContext: Co,
            useCallback: Ka,
            useContext: Co,
            useEffect: Ha,
            useImperativeHandle: Ya,
            useInsertionEffect: Wa,
            useLayoutEffect: Qa,
            useMemo: Ga,
            useReducer: za,
            useRef: Ua,
            useState: function () {
              return za(Pa);
            },
            useDebugValue: Xa,
            useDeferredValue: function (e) {
              return Za(Na(), ma.memoizedState, e);
            },
            useTransition: function () {
              return [za(Pa)[0], Na().memoizedState];
            },
            useMutableSource: Ta,
            useSyncExternalStore: La,
            useId: el,
            unstable_isNewReconciler: !1,
          },
          sl = {
            readContext: Co,
            useCallback: Ka,
            useContext: Co,
            useEffect: Ha,
            useImperativeHandle: Ya,
            useInsertionEffect: Wa,
            useLayoutEffect: Qa,
            useMemo: Ga,
            useReducer: Ma,
            useRef: Ua,
            useState: function () {
              return Ma(Pa);
            },
            useDebugValue: Xa,
            useDeferredValue: function (e) {
              var t = Na();
              return null === ma
                ? (t.memoizedState = e)
                : Za(t, ma.memoizedState, e);
            },
            useTransition: function () {
              return [Ma(Pa)[0], Na().memoizedState];
            },
            useMutableSource: Ta,
            useSyncExternalStore: La,
            useId: el,
            unstable_isNewReconciler: !1,
          };
        function cl(e, t) {
          try {
            var n = "",
              r = t;
            do {
              (n += V(r)), (r = r.return);
            } while (r);
            var i = n;
          } catch (o) {
            i = "\nError generating stack: " + o.message + "\n" + o.stack;
          }
          return { value: e, source: t, stack: i, digest: null };
        }
        function fl(e, t, n) {
          return {
            value: e,
            source: null,
            stack: null != n ? n : null,
            digest: null != t ? t : null,
          };
        }
        function dl(e, t) {
          try {
            console.error(t.value);
          } catch (n) {
            setTimeout(function () {
              throw n;
            });
          }
        }
        var pl = "function" === typeof WeakMap ? WeakMap : Map;
        function hl(e, t, n) {
          ((n = Ro(-1, n)).tag = 3), (n.payload = { element: null });
          var r = t.value;
          return (
            (n.callback = function () {
              Wu || ((Wu = !0), (Qu = r)), dl(0, t);
            }),
            n
          );
        }
        function vl(e, t, n) {
          (n = Ro(-1, n)).tag = 3;
          var r = e.type.getDerivedStateFromError;
          if ("function" === typeof r) {
            var i = t.value;
            (n.payload = function () {
              return r(i);
            }),
              (n.callback = function () {
                dl(0, t);
              });
          }
          var o = e.stateNode;
          return (
            null !== o &&
              "function" === typeof o.componentDidCatch &&
              (n.callback = function () {
                dl(0, t),
                  "function" !== typeof r &&
                    (null === qu ? (qu = new Set([this])) : qu.add(this));
                var e = t.stack;
                this.componentDidCatch(t.value, {
                  componentStack: null !== e ? e : "",
                });
              }),
            n
          );
        }
        function ml(e, t, n) {
          var r = e.pingCache;
          if (null === r) {
            r = e.pingCache = new pl();
            var i = new Set();
            r.set(t, i);
          } else void 0 === (i = r.get(t)) && ((i = new Set()), r.set(t, i));
          i.has(n) || (i.add(n), (e = Cs.bind(null, e, t, n)), t.then(e, e));
        }
        function yl(e) {
          do {
            var t;
            if (
              ((t = 13 === e.tag) &&
                (t = null === (t = e.memoizedState) || null !== t.dehydrated),
              t)
            )
              return e;
            e = e.return;
          } while (null !== e);
          return null;
        }
        function gl(e, t, n, r, i) {
          return 0 === (1 & e.mode)
            ? (e === t
                ? (e.flags |= 65536)
                : ((e.flags |= 128),
                  (n.flags |= 131072),
                  (n.flags &= -52805),
                  1 === n.tag &&
                    (null === n.alternate
                      ? (n.tag = 17)
                      : (((t = Ro(-1, 1)).tag = 2), Ao(n, t, 1))),
                  (n.lanes |= 1)),
              e)
            : ((e.flags |= 65536), (e.lanes = i), e);
        }
        var bl = w.ReactCurrentOwner,
          wl = !1;
        function _l(e, t, n, r) {
          t.child = null === e ? Zo(t, null, n, r) : Go(t, e.child, n, r);
        }
        function kl(e, t, n, r, i) {
          n = n.render;
          var o = t.ref;
          return (
            Eo(t, i),
            (r = xa(e, t, n, r, o, i)),
            (n = Ea()),
            null === e || wl
              ? (io && n && eo(t), (t.flags |= 1), _l(e, t, r, i), t.child)
              : ((t.updateQueue = e.updateQueue),
                (t.flags &= -2053),
                (e.lanes &= ~i),
                Wl(e, t, i))
          );
        }
        function Sl(e, t, n, r, i) {
          if (null === e) {
            var o = n.type;
            return "function" !== typeof o ||
              Os(o) ||
              void 0 !== o.defaultProps ||
              null !== n.compare ||
              void 0 !== n.defaultProps
              ? (((e = As(n.type, null, r, t, t.mode, i)).ref = t.ref),
                (e.return = t),
                (t.child = e))
              : ((t.tag = 15), (t.type = o), xl(e, t, o, r, i));
          }
          if (((o = e.child), 0 === (e.lanes & i))) {
            var a = o.memoizedProps;
            if (
              (n = null !== (n = n.compare) ? n : ur)(a, r) &&
              e.ref === t.ref
            )
              return Wl(e, t, i);
          }
          return (
            (t.flags |= 1),
            ((e = Rs(o, r)).ref = t.ref),
            (e.return = t),
            (t.child = e)
          );
        }
        function xl(e, t, n, r, i) {
          if (null !== e) {
            var o = e.memoizedProps;
            if (ur(o, r) && e.ref === t.ref) {
              if (((wl = !1), (t.pendingProps = r = o), 0 === (e.lanes & i)))
                return (t.lanes = e.lanes), Wl(e, t, i);
              0 !== (131072 & e.flags) && (wl = !0);
            }
          }
          return Nl(e, t, n, r, i);
        }
        function El(e, t, n) {
          var r = t.pendingProps,
            i = r.children,
            o = null !== e ? e.memoizedState : null;
          if ("hidden" === r.mode)
            if (0 === (1 & t.mode))
              (t.memoizedState = {
                baseLanes: 0,
                cachePool: null,
                transitions: null,
              }),
                Ci(Ru, Ou),
                (Ou |= n);
            else {
              if (0 === (1073741824 & n))
                return (
                  (e = null !== o ? o.baseLanes | n : n),
                  (t.lanes = t.childLanes = 1073741824),
                  (t.memoizedState = {
                    baseLanes: e,
                    cachePool: null,
                    transitions: null,
                  }),
                  (t.updateQueue = null),
                  Ci(Ru, Ou),
                  (Ou |= e),
                  null
                );
              (t.memoizedState = {
                baseLanes: 0,
                cachePool: null,
                transitions: null,
              }),
                (r = null !== o ? o.baseLanes : n),
                Ci(Ru, Ou),
                (Ou |= r);
            }
          else
            null !== o
              ? ((r = o.baseLanes | n), (t.memoizedState = null))
              : (r = n),
              Ci(Ru, Ou),
              (Ou |= r);
          return _l(e, t, i, n), t.child;
        }
        function Cl(e, t) {
          var n = t.ref;
          ((null === e && null !== n) || (null !== e && e.ref !== n)) &&
            ((t.flags |= 512), (t.flags |= 2097152));
        }
        function Nl(e, t, n, r, i) {
          var o = Li(n) ? Mi : Pi.current;
          return (
            (o = Ti(t, o)),
            Eo(t, i),
            (n = xa(e, t, n, r, o, i)),
            (r = Ea()),
            null === e || wl
              ? (io && r && eo(t), (t.flags |= 1), _l(e, t, n, i), t.child)
              : ((t.updateQueue = e.updateQueue),
                (t.flags &= -2053),
                (e.lanes &= ~i),
                Wl(e, t, i))
          );
        }
        function Pl(e, t, n, r, i) {
          if (Li(n)) {
            var o = !0;
            Ii(t);
          } else o = !1;
          if ((Eo(t, i), null === t.stateNode))
            Hl(e, t), Ho(t, n, r), Qo(t, n, r, i), (r = !0);
          else if (null === e) {
            var a = t.stateNode,
              l = t.memoizedProps;
            a.props = l;
            var u = a.context,
              s = n.contextType;
            "object" === typeof s && null !== s
              ? (s = Co(s))
              : (s = Ti(t, (s = Li(n) ? Mi : Pi.current)));
            var c = n.getDerivedStateFromProps,
              f =
                "function" === typeof c ||
                "function" === typeof a.getSnapshotBeforeUpdate;
            f ||
              ("function" !== typeof a.UNSAFE_componentWillReceiveProps &&
                "function" !== typeof a.componentWillReceiveProps) ||
              ((l !== r || u !== s) && Wo(t, a, r, s)),
              (To = !1);
            var d = t.memoizedState;
            (a.state = d),
              Do(t, r, a, i),
              (u = t.memoizedState),
              l !== r || d !== u || zi.current || To
                ? ("function" === typeof c &&
                    (Vo(t, n, c, r), (u = t.memoizedState)),
                  (l = To || $o(t, n, l, r, d, u, s))
                    ? (f ||
                        ("function" !== typeof a.UNSAFE_componentWillMount &&
                          "function" !== typeof a.componentWillMount) ||
                        ("function" === typeof a.componentWillMount &&
                          a.componentWillMount(),
                        "function" === typeof a.UNSAFE_componentWillMount &&
                          a.UNSAFE_componentWillMount()),
                      "function" === typeof a.componentDidMount &&
                        (t.flags |= 4194308))
                    : ("function" === typeof a.componentDidMount &&
                        (t.flags |= 4194308),
                      (t.memoizedProps = r),
                      (t.memoizedState = u)),
                  (a.props = r),
                  (a.state = u),
                  (a.context = s),
                  (r = l))
                : ("function" === typeof a.componentDidMount &&
                    (t.flags |= 4194308),
                  (r = !1));
          } else {
            (a = t.stateNode),
              Oo(e, t),
              (l = t.memoizedProps),
              (s = t.type === t.elementType ? l : yo(t.type, l)),
              (a.props = s),
              (f = t.pendingProps),
              (d = a.context),
              "object" === typeof (u = n.contextType) && null !== u
                ? (u = Co(u))
                : (u = Ti(t, (u = Li(n) ? Mi : Pi.current)));
            var p = n.getDerivedStateFromProps;
            (c =
              "function" === typeof p ||
              "function" === typeof a.getSnapshotBeforeUpdate) ||
              ("function" !== typeof a.UNSAFE_componentWillReceiveProps &&
                "function" !== typeof a.componentWillReceiveProps) ||
              ((l !== f || d !== u) && Wo(t, a, r, u)),
              (To = !1),
              (d = t.memoizedState),
              (a.state = d),
              Do(t, r, a, i);
            var h = t.memoizedState;
            l !== f || d !== h || zi.current || To
              ? ("function" === typeof p &&
                  (Vo(t, n, p, r), (h = t.memoizedState)),
                (s = To || $o(t, n, s, r, d, h, u) || !1)
                  ? (c ||
                      ("function" !== typeof a.UNSAFE_componentWillUpdate &&
                        "function" !== typeof a.componentWillUpdate) ||
                      ("function" === typeof a.componentWillUpdate &&
                        a.componentWillUpdate(r, h, u),
                      "function" === typeof a.UNSAFE_componentWillUpdate &&
                        a.UNSAFE_componentWillUpdate(r, h, u)),
                    "function" === typeof a.componentDidUpdate &&
                      (t.flags |= 4),
                    "function" === typeof a.getSnapshotBeforeUpdate &&
                      (t.flags |= 1024))
                  : ("function" !== typeof a.componentDidUpdate ||
                      (l === e.memoizedProps && d === e.memoizedState) ||
                      (t.flags |= 4),
                    "function" !== typeof a.getSnapshotBeforeUpdate ||
                      (l === e.memoizedProps && d === e.memoizedState) ||
                      (t.flags |= 1024),
                    (t.memoizedProps = r),
                    (t.memoizedState = h)),
                (a.props = r),
                (a.state = h),
                (a.context = u),
                (r = s))
              : ("function" !== typeof a.componentDidUpdate ||
                  (l === e.memoizedProps && d === e.memoizedState) ||
                  (t.flags |= 4),
                "function" !== typeof a.getSnapshotBeforeUpdate ||
                  (l === e.memoizedProps && d === e.memoizedState) ||
                  (t.flags |= 1024),
                (r = !1));
          }
          return zl(e, t, n, r, o, i);
        }
        function zl(e, t, n, r, i, o) {
          Cl(e, t);
          var a = 0 !== (128 & t.flags);
          if (!r && !a) return i && Fi(t, n, !1), Wl(e, t, o);
          (r = t.stateNode), (bl.current = t);
          var l =
            a && "function" !== typeof n.getDerivedStateFromError
              ? null
              : r.render();
          return (
            (t.flags |= 1),
            null !== e && a
              ? ((t.child = Go(t, e.child, null, o)),
                (t.child = Go(t, null, l, o)))
              : _l(e, t, l, o),
            (t.memoizedState = r.state),
            i && Fi(t, n, !0),
            t.child
          );
        }
        function Ml(e) {
          var t = e.stateNode;
          t.pendingContext
            ? Ri(0, t.pendingContext, t.pendingContext !== t.context)
            : t.context && Ri(0, t.context, !1),
            ia(e, t.containerInfo);
        }
        function Tl(e, t, n, r, i) {
          return ho(), vo(i), (t.flags |= 256), _l(e, t, n, r), t.child;
        }
        var Ll,
          Ol,
          Rl,
          Al,
          Il = { dehydrated: null, treeContext: null, retryLane: 0 };
        function Fl(e) {
          return { baseLanes: e, cachePool: null, transitions: null };
        }
        function Dl(e, t, n) {
          var r,
            i = t.pendingProps,
            a = ua.current,
            l = !1,
            u = 0 !== (128 & t.flags);
          if (
            ((r = u) ||
              (r = (null === e || null !== e.memoizedState) && 0 !== (2 & a)),
            r
              ? ((l = !0), (t.flags &= -129))
              : (null !== e && null === e.memoizedState) || (a |= 1),
            Ci(ua, 1 & a),
            null === e)
          )
            return (
              so(t),
              null !== (e = t.memoizedState) && null !== (e = e.dehydrated)
                ? (0 === (1 & t.mode)
                    ? (t.lanes = 1)
                    : "$!" === e.data
                    ? (t.lanes = 8)
                    : (t.lanes = 1073741824),
                  null)
                : ((u = i.children),
                  (e = i.fallback),
                  l
                    ? ((i = t.mode),
                      (l = t.child),
                      (u = { mode: "hidden", children: u }),
                      0 === (1 & i) && null !== l
                        ? ((l.childLanes = 0), (l.pendingProps = u))
                        : (l = Fs(u, i, 0, null)),
                      (e = Is(e, i, n, null)),
                      (l.return = t),
                      (e.return = t),
                      (l.sibling = e),
                      (t.child = l),
                      (t.child.memoizedState = Fl(n)),
                      (t.memoizedState = Il),
                      e)
                    : jl(t, u))
            );
          if (null !== (a = e.memoizedState) && null !== (r = a.dehydrated))
            return (function (e, t, n, r, i, a, l) {
              if (n)
                return 256 & t.flags
                  ? ((t.flags &= -257), Ul(e, t, l, (r = fl(Error(o(422))))))
                  : null !== t.memoizedState
                  ? ((t.child = e.child), (t.flags |= 128), null)
                  : ((a = r.fallback),
                    (i = t.mode),
                    (r = Fs(
                      { mode: "visible", children: r.children },
                      i,
                      0,
                      null
                    )),
                    ((a = Is(a, i, l, null)).flags |= 2),
                    (r.return = t),
                    (a.return = t),
                    (r.sibling = a),
                    (t.child = r),
                    0 !== (1 & t.mode) && Go(t, e.child, null, l),
                    (t.child.memoizedState = Fl(l)),
                    (t.memoizedState = Il),
                    a);
              if (0 === (1 & t.mode)) return Ul(e, t, l, null);
              if ("$!" === i.data) {
                if ((r = i.nextSibling && i.nextSibling.dataset))
                  var u = r.dgst;
                return (
                  (r = u), Ul(e, t, l, (r = fl((a = Error(o(419))), r, void 0)))
                );
              }
              if (((u = 0 !== (l & e.childLanes)), wl || u)) {
                if (null !== (r = Mu)) {
                  switch (l & -l) {
                    case 4:
                      i = 2;
                      break;
                    case 16:
                      i = 8;
                      break;
                    case 64:
                    case 128:
                    case 256:
                    case 512:
                    case 1024:
                    case 2048:
                    case 4096:
                    case 8192:
                    case 16384:
                    case 32768:
                    case 65536:
                    case 131072:
                    case 262144:
                    case 524288:
                    case 1048576:
                    case 2097152:
                    case 4194304:
                    case 8388608:
                    case 16777216:
                    case 33554432:
                    case 67108864:
                      i = 32;
                      break;
                    case 536870912:
                      i = 268435456;
                      break;
                    default:
                      i = 0;
                  }
                  0 !== (i = 0 !== (i & (r.suspendedLanes | l)) ? 0 : i) &&
                    i !== a.retryLane &&
                    ((a.retryLane = i), Mo(e, i), rs(r, e, i, -1));
                }
                return ms(), Ul(e, t, l, (r = fl(Error(o(421)))));
              }
              return "$?" === i.data
                ? ((t.flags |= 128),
                  (t.child = e.child),
                  (t = Ps.bind(null, e)),
                  (i._reactRetry = t),
                  null)
                : ((e = a.treeContext),
                  (ro = si(i.nextSibling)),
                  (no = t),
                  (io = !0),
                  (oo = null),
                  null !== e &&
                    ((qi[Yi++] = Ki),
                    (qi[Yi++] = Gi),
                    (qi[Yi++] = Xi),
                    (Ki = e.id),
                    (Gi = e.overflow),
                    (Xi = t)),
                  (t = jl(t, r.children)),
                  (t.flags |= 4096),
                  t);
            })(e, t, u, i, r, a, n);
          if (l) {
            (l = i.fallback), (u = t.mode), (r = (a = e.child).sibling);
            var s = { mode: "hidden", children: i.children };
            return (
              0 === (1 & u) && t.child !== a
                ? (((i = t.child).childLanes = 0),
                  (i.pendingProps = s),
                  (t.deletions = null))
                : ((i = Rs(a, s)).subtreeFlags = 14680064 & a.subtreeFlags),
              null !== r
                ? (l = Rs(r, l))
                : ((l = Is(l, u, n, null)).flags |= 2),
              (l.return = t),
              (i.return = t),
              (i.sibling = l),
              (t.child = i),
              (i = l),
              (l = t.child),
              (u =
                null === (u = e.child.memoizedState)
                  ? Fl(n)
                  : {
                      baseLanes: u.baseLanes | n,
                      cachePool: null,
                      transitions: u.transitions,
                    }),
              (l.memoizedState = u),
              (l.childLanes = e.childLanes & ~n),
              (t.memoizedState = Il),
              i
            );
          }
          return (
            (e = (l = e.child).sibling),
            (i = Rs(l, { mode: "visible", children: i.children })),
            0 === (1 & t.mode) && (i.lanes = n),
            (i.return = t),
            (i.sibling = null),
            null !== e &&
              (null === (n = t.deletions)
                ? ((t.deletions = [e]), (t.flags |= 16))
                : n.push(e)),
            (t.child = i),
            (t.memoizedState = null),
            i
          );
        }
        function jl(e, t) {
          return (
            ((t = Fs(
              { mode: "visible", children: t },
              e.mode,
              0,
              null
            )).return = e),
            (e.child = t)
          );
        }
        function Ul(e, t, n, r) {
          return (
            null !== r && vo(r),
            Go(t, e.child, null, n),
            ((e = jl(t, t.pendingProps.children)).flags |= 2),
            (t.memoizedState = null),
            e
          );
        }
        function Vl(e, t, n) {
          e.lanes |= t;
          var r = e.alternate;
          null !== r && (r.lanes |= t), xo(e.return, t, n);
        }
        function Bl(e, t, n, r, i) {
          var o = e.memoizedState;
          null === o
            ? (e.memoizedState = {
                isBackwards: t,
                rendering: null,
                renderingStartTime: 0,
                last: r,
                tail: n,
                tailMode: i,
              })
            : ((o.isBackwards = t),
              (o.rendering = null),
              (o.renderingStartTime = 0),
              (o.last = r),
              (o.tail = n),
              (o.tailMode = i));
        }
        function $l(e, t, n) {
          var r = t.pendingProps,
            i = r.revealOrder,
            o = r.tail;
          if ((_l(e, t, r.children, n), 0 !== (2 & (r = ua.current))))
            (r = (1 & r) | 2), (t.flags |= 128);
          else {
            if (null !== e && 0 !== (128 & e.flags))
              e: for (e = t.child; null !== e; ) {
                if (13 === e.tag) null !== e.memoizedState && Vl(e, n, t);
                else if (19 === e.tag) Vl(e, n, t);
                else if (null !== e.child) {
                  (e.child.return = e), (e = e.child);
                  continue;
                }
                if (e === t) break e;
                for (; null === e.sibling; ) {
                  if (null === e.return || e.return === t) break e;
                  e = e.return;
                }
                (e.sibling.return = e.return), (e = e.sibling);
              }
            r &= 1;
          }
          if ((Ci(ua, r), 0 === (1 & t.mode))) t.memoizedState = null;
          else
            switch (i) {
              case "forwards":
                for (n = t.child, i = null; null !== n; )
                  null !== (e = n.alternate) && null === sa(e) && (i = n),
                    (n = n.sibling);
                null === (n = i)
                  ? ((i = t.child), (t.child = null))
                  : ((i = n.sibling), (n.sibling = null)),
                  Bl(t, !1, i, n, o);
                break;
              case "backwards":
                for (n = null, i = t.child, t.child = null; null !== i; ) {
                  if (null !== (e = i.alternate) && null === sa(e)) {
                    t.child = i;
                    break;
                  }
                  (e = i.sibling), (i.sibling = n), (n = i), (i = e);
                }
                Bl(t, !0, n, null, o);
                break;
              case "together":
                Bl(t, !1, null, null, void 0);
                break;
              default:
                t.memoizedState = null;
            }
          return t.child;
        }
        function Hl(e, t) {
          0 === (1 & t.mode) &&
            null !== e &&
            ((e.alternate = null), (t.alternate = null), (t.flags |= 2));
        }
        function Wl(e, t, n) {
          if (
            (null !== e && (t.dependencies = e.dependencies),
            (Fu |= t.lanes),
            0 === (n & t.childLanes))
          )
            return null;
          if (null !== e && t.child !== e.child) throw Error(o(153));
          if (null !== t.child) {
            for (
              n = Rs((e = t.child), e.pendingProps), t.child = n, n.return = t;
              null !== e.sibling;

            )
              (e = e.sibling),
                ((n = n.sibling = Rs(e, e.pendingProps)).return = t);
            n.sibling = null;
          }
          return t.child;
        }
        function Ql(e, t) {
          if (!io)
            switch (e.tailMode) {
              case "hidden":
                t = e.tail;
                for (var n = null; null !== t; )
                  null !== t.alternate && (n = t), (t = t.sibling);
                null === n ? (e.tail = null) : (n.sibling = null);
                break;
              case "collapsed":
                n = e.tail;
                for (var r = null; null !== n; )
                  null !== n.alternate && (r = n), (n = n.sibling);
                null === r
                  ? t || null === e.tail
                    ? (e.tail = null)
                    : (e.tail.sibling = null)
                  : (r.sibling = null);
            }
        }
        function ql(e) {
          var t = null !== e.alternate && e.alternate.child === e.child,
            n = 0,
            r = 0;
          if (t)
            for (var i = e.child; null !== i; )
              (n |= i.lanes | i.childLanes),
                (r |= 14680064 & i.subtreeFlags),
                (r |= 14680064 & i.flags),
                (i.return = e),
                (i = i.sibling);
          else
            for (i = e.child; null !== i; )
              (n |= i.lanes | i.childLanes),
                (r |= i.subtreeFlags),
                (r |= i.flags),
                (i.return = e),
                (i = i.sibling);
          return (e.subtreeFlags |= r), (e.childLanes = n), t;
        }
        function Yl(e, t, n) {
          var r = t.pendingProps;
          switch ((to(t), t.tag)) {
            case 2:
            case 16:
            case 15:
            case 0:
            case 11:
            case 7:
            case 8:
            case 12:
            case 9:
            case 14:
              return ql(t), null;
            case 1:
            case 17:
              return Li(t.type) && Oi(), ql(t), null;
            case 3:
              return (
                (r = t.stateNode),
                oa(),
                Ei(zi),
                Ei(Pi),
                fa(),
                r.pendingContext &&
                  ((r.context = r.pendingContext), (r.pendingContext = null)),
                (null !== e && null !== e.child) ||
                  (fo(t)
                    ? (t.flags |= 4)
                    : null === e ||
                      (e.memoizedState.isDehydrated && 0 === (256 & t.flags)) ||
                      ((t.flags |= 1024),
                      null !== oo && (ls(oo), (oo = null)))),
                Ol(e, t),
                ql(t),
                null
              );
            case 5:
              la(t);
              var i = ra(na.current);
              if (((n = t.type), null !== e && null != t.stateNode))
                Rl(e, t, n, r, i),
                  e.ref !== t.ref && ((t.flags |= 512), (t.flags |= 2097152));
              else {
                if (!r) {
                  if (null === t.stateNode) throw Error(o(166));
                  return ql(t), null;
                }
                if (((e = ra(ea.current)), fo(t))) {
                  (r = t.stateNode), (n = t.type);
                  var a = t.memoizedProps;
                  switch (
                    ((r[di] = t), (r[pi] = a), (e = 0 !== (1 & t.mode)), n)
                  ) {
                    case "dialog":
                      jr("cancel", r), jr("close", r);
                      break;
                    case "iframe":
                    case "object":
                    case "embed":
                      jr("load", r);
                      break;
                    case "video":
                    case "audio":
                      for (i = 0; i < Ar.length; i++) jr(Ar[i], r);
                      break;
                    case "source":
                      jr("error", r);
                      break;
                    case "img":
                    case "image":
                    case "link":
                      jr("error", r), jr("load", r);
                      break;
                    case "details":
                      jr("toggle", r);
                      break;
                    case "input":
                      K(r, a), jr("invalid", r);
                      break;
                    case "select":
                      (r._wrapperState = { wasMultiple: !!a.multiple }),
                        jr("invalid", r);
                      break;
                    case "textarea":
                      ie(r, a), jr("invalid", r);
                  }
                  for (var u in (ge(n, a), (i = null), a))
                    if (a.hasOwnProperty(u)) {
                      var s = a[u];
                      "children" === u
                        ? "string" === typeof s
                          ? r.textContent !== s &&
                            (!0 !== a.suppressHydrationWarning &&
                              Zr(r.textContent, s, e),
                            (i = ["children", s]))
                          : "number" === typeof s &&
                            r.textContent !== "" + s &&
                            (!0 !== a.suppressHydrationWarning &&
                              Zr(r.textContent, s, e),
                            (i = ["children", "" + s]))
                        : l.hasOwnProperty(u) &&
                          null != s &&
                          "onScroll" === u &&
                          jr("scroll", r);
                    }
                  switch (n) {
                    case "input":
                      Q(r), J(r, a, !0);
                      break;
                    case "textarea":
                      Q(r), ae(r);
                      break;
                    case "select":
                    case "option":
                      break;
                    default:
                      "function" === typeof a.onClick && (r.onclick = Jr);
                  }
                  (r = i), (t.updateQueue = r), null !== r && (t.flags |= 4);
                } else {
                  (u = 9 === i.nodeType ? i : i.ownerDocument),
                    "http://www.w3.org/1999/xhtml" === e && (e = le(n)),
                    "http://www.w3.org/1999/xhtml" === e
                      ? "script" === n
                        ? (((e = u.createElement("div")).innerHTML =
                            "<script></script>"),
                          (e = e.removeChild(e.firstChild)))
                        : "string" === typeof r.is
                        ? (e = u.createElement(n, { is: r.is }))
                        : ((e = u.createElement(n)),
                          "select" === n &&
                            ((u = e),
                            r.multiple
                              ? (u.multiple = !0)
                              : r.size && (u.size = r.size)))
                      : (e = u.createElementNS(e, n)),
                    (e[di] = t),
                    (e[pi] = r),
                    Ll(e, t, !1, !1),
                    (t.stateNode = e);
                  e: {
                    switch (((u = be(n, r)), n)) {
                      case "dialog":
                        jr("cancel", e), jr("close", e), (i = r);
                        break;
                      case "iframe":
                      case "object":
                      case "embed":
                        jr("load", e), (i = r);
                        break;
                      case "video":
                      case "audio":
                        for (i = 0; i < Ar.length; i++) jr(Ar[i], e);
                        i = r;
                        break;
                      case "source":
                        jr("error", e), (i = r);
                        break;
                      case "img":
                      case "image":
                      case "link":
                        jr("error", e), jr("load", e), (i = r);
                        break;
                      case "details":
                        jr("toggle", e), (i = r);
                        break;
                      case "input":
                        K(e, r), (i = X(e, r)), jr("invalid", e);
                        break;
                      case "option":
                      default:
                        i = r;
                        break;
                      case "select":
                        (e._wrapperState = { wasMultiple: !!r.multiple }),
                          (i = F({}, r, { value: void 0 })),
                          jr("invalid", e);
                        break;
                      case "textarea":
                        ie(e, r), (i = re(e, r)), jr("invalid", e);
                    }
                    for (a in (ge(n, i), (s = i)))
                      if (s.hasOwnProperty(a)) {
                        var c = s[a];
                        "style" === a
                          ? me(e, c)
                          : "dangerouslySetInnerHTML" === a
                          ? null != (c = c ? c.__html : void 0) && fe(e, c)
                          : "children" === a
                          ? "string" === typeof c
                            ? ("textarea" !== n || "" !== c) && de(e, c)
                            : "number" === typeof c && de(e, "" + c)
                          : "suppressContentEditableWarning" !== a &&
                            "suppressHydrationWarning" !== a &&
                            "autoFocus" !== a &&
                            (l.hasOwnProperty(a)
                              ? null != c && "onScroll" === a && jr("scroll", e)
                              : null != c && b(e, a, c, u));
                      }
                    switch (n) {
                      case "input":
                        Q(e), J(e, r, !1);
                        break;
                      case "textarea":
                        Q(e), ae(e);
                        break;
                      case "option":
                        null != r.value &&
                          e.setAttribute("value", "" + H(r.value));
                        break;
                      case "select":
                        (e.multiple = !!r.multiple),
                          null != (a = r.value)
                            ? ne(e, !!r.multiple, a, !1)
                            : null != r.defaultValue &&
                              ne(e, !!r.multiple, r.defaultValue, !0);
                        break;
                      default:
                        "function" === typeof i.onClick && (e.onclick = Jr);
                    }
                    switch (n) {
                      case "button":
                      case "input":
                      case "select":
                      case "textarea":
                        r = !!r.autoFocus;
                        break e;
                      case "img":
                        r = !0;
                        break e;
                      default:
                        r = !1;
                    }
                  }
                  r && (t.flags |= 4);
                }
                null !== t.ref && ((t.flags |= 512), (t.flags |= 2097152));
              }
              return ql(t), null;
            case 6:
              if (e && null != t.stateNode) Al(e, t, e.memoizedProps, r);
              else {
                if ("string" !== typeof r && null === t.stateNode)
                  throw Error(o(166));
                if (((n = ra(na.current)), ra(ea.current), fo(t))) {
                  if (
                    ((r = t.stateNode),
                    (n = t.memoizedProps),
                    (r[di] = t),
                    (a = r.nodeValue !== n) && null !== (e = no))
                  )
                    switch (e.tag) {
                      case 3:
                        Zr(r.nodeValue, n, 0 !== (1 & e.mode));
                        break;
                      case 5:
                        !0 !== e.memoizedProps.suppressHydrationWarning &&
                          Zr(r.nodeValue, n, 0 !== (1 & e.mode));
                    }
                  a && (t.flags |= 4);
                } else
                  ((r = (9 === n.nodeType ? n : n.ownerDocument).createTextNode(
                    r
                  ))[di] = t),
                    (t.stateNode = r);
              }
              return ql(t), null;
            case 13:
              if (
                (Ei(ua),
                (r = t.memoizedState),
                null === e ||
                  (null !== e.memoizedState &&
                    null !== e.memoizedState.dehydrated))
              ) {
                if (
                  io &&
                  null !== ro &&
                  0 !== (1 & t.mode) &&
                  0 === (128 & t.flags)
                )
                  po(), ho(), (t.flags |= 98560), (a = !1);
                else if (((a = fo(t)), null !== r && null !== r.dehydrated)) {
                  if (null === e) {
                    if (!a) throw Error(o(318));
                    if (
                      !(a =
                        null !== (a = t.memoizedState) ? a.dehydrated : null)
                    )
                      throw Error(o(317));
                    a[di] = t;
                  } else
                    ho(),
                      0 === (128 & t.flags) && (t.memoizedState = null),
                      (t.flags |= 4);
                  ql(t), (a = !1);
                } else null !== oo && (ls(oo), (oo = null)), (a = !0);
                if (!a) return 65536 & t.flags ? t : null;
              }
              return 0 !== (128 & t.flags)
                ? ((t.lanes = n), t)
                : ((r = null !== r) !==
                    (null !== e && null !== e.memoizedState) &&
                    r &&
                    ((t.child.flags |= 8192),
                    0 !== (1 & t.mode) &&
                      (null === e || 0 !== (1 & ua.current)
                        ? 0 === Au && (Au = 3)
                        : ms())),
                  null !== t.updateQueue && (t.flags |= 4),
                  ql(t),
                  null);
            case 4:
              return (
                oa(),
                Ol(e, t),
                null === e && Br(t.stateNode.containerInfo),
                ql(t),
                null
              );
            case 10:
              return So(t.type._context), ql(t), null;
            case 19:
              if ((Ei(ua), null === (a = t.memoizedState))) return ql(t), null;
              if (((r = 0 !== (128 & t.flags)), null === (u = a.rendering)))
                if (r) Ql(a, !1);
                else {
                  if (0 !== Au || (null !== e && 0 !== (128 & e.flags)))
                    for (e = t.child; null !== e; ) {
                      if (null !== (u = sa(e))) {
                        for (
                          t.flags |= 128,
                            Ql(a, !1),
                            null !== (r = u.updateQueue) &&
                              ((t.updateQueue = r), (t.flags |= 4)),
                            t.subtreeFlags = 0,
                            r = n,
                            n = t.child;
                          null !== n;

                        )
                          (e = r),
                            ((a = n).flags &= 14680066),
                            null === (u = a.alternate)
                              ? ((a.childLanes = 0),
                                (a.lanes = e),
                                (a.child = null),
                                (a.subtreeFlags = 0),
                                (a.memoizedProps = null),
                                (a.memoizedState = null),
                                (a.updateQueue = null),
                                (a.dependencies = null),
                                (a.stateNode = null))
                              : ((a.childLanes = u.childLanes),
                                (a.lanes = u.lanes),
                                (a.child = u.child),
                                (a.subtreeFlags = 0),
                                (a.deletions = null),
                                (a.memoizedProps = u.memoizedProps),
                                (a.memoizedState = u.memoizedState),
                                (a.updateQueue = u.updateQueue),
                                (a.type = u.type),
                                (e = u.dependencies),
                                (a.dependencies =
                                  null === e
                                    ? null
                                    : {
                                        lanes: e.lanes,
                                        firstContext: e.firstContext,
                                      })),
                            (n = n.sibling);
                        return Ci(ua, (1 & ua.current) | 2), t.child;
                      }
                      e = e.sibling;
                    }
                  null !== a.tail &&
                    Ge() > $u &&
                    ((t.flags |= 128),
                    (r = !0),
                    Ql(a, !1),
                    (t.lanes = 4194304));
                }
              else {
                if (!r)
                  if (null !== (e = sa(u))) {
                    if (
                      ((t.flags |= 128),
                      (r = !0),
                      null !== (n = e.updateQueue) &&
                        ((t.updateQueue = n), (t.flags |= 4)),
                      Ql(a, !0),
                      null === a.tail &&
                        "hidden" === a.tailMode &&
                        !u.alternate &&
                        !io)
                    )
                      return ql(t), null;
                  } else
                    2 * Ge() - a.renderingStartTime > $u &&
                      1073741824 !== n &&
                      ((t.flags |= 128),
                      (r = !0),
                      Ql(a, !1),
                      (t.lanes = 4194304));
                a.isBackwards
                  ? ((u.sibling = t.child), (t.child = u))
                  : (null !== (n = a.last) ? (n.sibling = u) : (t.child = u),
                    (a.last = u));
              }
              return null !== a.tail
                ? ((t = a.tail),
                  (a.rendering = t),
                  (a.tail = t.sibling),
                  (a.renderingStartTime = Ge()),
                  (t.sibling = null),
                  (n = ua.current),
                  Ci(ua, r ? (1 & n) | 2 : 1 & n),
                  t)
                : (ql(t), null);
            case 22:
            case 23:
              return (
                ds(),
                (r = null !== t.memoizedState),
                null !== e &&
                  (null !== e.memoizedState) !== r &&
                  (t.flags |= 8192),
                r && 0 !== (1 & t.mode)
                  ? 0 !== (1073741824 & Ou) &&
                    (ql(t), 6 & t.subtreeFlags && (t.flags |= 8192))
                  : ql(t),
                null
              );
            case 24:
            case 25:
              return null;
          }
          throw Error(o(156, t.tag));
        }
        function Xl(e, t) {
          switch ((to(t), t.tag)) {
            case 1:
              return (
                Li(t.type) && Oi(),
                65536 & (e = t.flags)
                  ? ((t.flags = (-65537 & e) | 128), t)
                  : null
              );
            case 3:
              return (
                oa(),
                Ei(zi),
                Ei(Pi),
                fa(),
                0 !== (65536 & (e = t.flags)) && 0 === (128 & e)
                  ? ((t.flags = (-65537 & e) | 128), t)
                  : null
              );
            case 5:
              return la(t), null;
            case 13:
              if (
                (Ei(ua),
                null !== (e = t.memoizedState) && null !== e.dehydrated)
              ) {
                if (null === t.alternate) throw Error(o(340));
                ho();
              }
              return 65536 & (e = t.flags)
                ? ((t.flags = (-65537 & e) | 128), t)
                : null;
            case 19:
              return Ei(ua), null;
            case 4:
              return oa(), null;
            case 10:
              return So(t.type._context), null;
            case 22:
            case 23:
              return ds(), null;
            default:
              return null;
          }
        }
        (Ll = function (e, t) {
          for (var n = t.child; null !== n; ) {
            if (5 === n.tag || 6 === n.tag) e.appendChild(n.stateNode);
            else if (4 !== n.tag && null !== n.child) {
              (n.child.return = n), (n = n.child);
              continue;
            }
            if (n === t) break;
            for (; null === n.sibling; ) {
              if (null === n.return || n.return === t) return;
              n = n.return;
            }
            (n.sibling.return = n.return), (n = n.sibling);
          }
        }),
          (Ol = function () {}),
          (Rl = function (e, t, n, r) {
            var i = e.memoizedProps;
            if (i !== r) {
              (e = t.stateNode), ra(ea.current);
              var o,
                a = null;
              switch (n) {
                case "input":
                  (i = X(e, i)), (r = X(e, r)), (a = []);
                  break;
                case "select":
                  (i = F({}, i, { value: void 0 })),
                    (r = F({}, r, { value: void 0 })),
                    (a = []);
                  break;
                case "textarea":
                  (i = re(e, i)), (r = re(e, r)), (a = []);
                  break;
                default:
                  "function" !== typeof i.onClick &&
                    "function" === typeof r.onClick &&
                    (e.onclick = Jr);
              }
              for (c in (ge(n, r), (n = null), i))
                if (!r.hasOwnProperty(c) && i.hasOwnProperty(c) && null != i[c])
                  if ("style" === c) {
                    var u = i[c];
                    for (o in u)
                      u.hasOwnProperty(o) && (n || (n = {}), (n[o] = ""));
                  } else
                    "dangerouslySetInnerHTML" !== c &&
                      "children" !== c &&
                      "suppressContentEditableWarning" !== c &&
                      "suppressHydrationWarning" !== c &&
                      "autoFocus" !== c &&
                      (l.hasOwnProperty(c)
                        ? a || (a = [])
                        : (a = a || []).push(c, null));
              for (c in r) {
                var s = r[c];
                if (
                  ((u = null != i ? i[c] : void 0),
                  r.hasOwnProperty(c) && s !== u && (null != s || null != u))
                )
                  if ("style" === c)
                    if (u) {
                      for (o in u)
                        !u.hasOwnProperty(o) ||
                          (s && s.hasOwnProperty(o)) ||
                          (n || (n = {}), (n[o] = ""));
                      for (o in s)
                        s.hasOwnProperty(o) &&
                          u[o] !== s[o] &&
                          (n || (n = {}), (n[o] = s[o]));
                    } else n || (a || (a = []), a.push(c, n)), (n = s);
                  else
                    "dangerouslySetInnerHTML" === c
                      ? ((s = s ? s.__html : void 0),
                        (u = u ? u.__html : void 0),
                        null != s && u !== s && (a = a || []).push(c, s))
                      : "children" === c
                      ? ("string" !== typeof s && "number" !== typeof s) ||
                        (a = a || []).push(c, "" + s)
                      : "suppressContentEditableWarning" !== c &&
                        "suppressHydrationWarning" !== c &&
                        (l.hasOwnProperty(c)
                          ? (null != s && "onScroll" === c && jr("scroll", e),
                            a || u === s || (a = []))
                          : (a = a || []).push(c, s));
              }
              n && (a = a || []).push("style", n);
              var c = a;
              (t.updateQueue = c) && (t.flags |= 4);
            }
          }),
          (Al = function (e, t, n, r) {
            n !== r && (t.flags |= 4);
          });
        var Kl = !1,
          Gl = !1,
          Zl = "function" === typeof WeakSet ? WeakSet : Set,
          Jl = null;
        function eu(e, t) {
          var n = e.ref;
          if (null !== n)
            if ("function" === typeof n)
              try {
                n(null);
              } catch (r) {
                Es(e, t, r);
              }
            else n.current = null;
        }
        function tu(e, t, n) {
          try {
            n();
          } catch (r) {
            Es(e, t, r);
          }
        }
        var nu = !1;
        function ru(e, t, n) {
          var r = t.updateQueue;
          if (null !== (r = null !== r ? r.lastEffect : null)) {
            var i = (r = r.next);
            do {
              if ((i.tag & e) === e) {
                var o = i.destroy;
                (i.destroy = void 0), void 0 !== o && tu(t, n, o);
              }
              i = i.next;
            } while (i !== r);
          }
        }
        function iu(e, t) {
          if (
            null !== (t = null !== (t = t.updateQueue) ? t.lastEffect : null)
          ) {
            var n = (t = t.next);
            do {
              if ((n.tag & e) === e) {
                var r = n.create;
                n.destroy = r();
              }
              n = n.next;
            } while (n !== t);
          }
        }
        function ou(e) {
          var t = e.ref;
          if (null !== t) {
            var n = e.stateNode;
            e.tag, (e = n), "function" === typeof t ? t(e) : (t.current = e);
          }
        }
        function au(e) {
          var t = e.alternate;
          null !== t && ((e.alternate = null), au(t)),
            (e.child = null),
            (e.deletions = null),
            (e.sibling = null),
            5 === e.tag &&
              null !== (t = e.stateNode) &&
              (delete t[di],
              delete t[pi],
              delete t[vi],
              delete t[mi],
              delete t[yi]),
            (e.stateNode = null),
            (e.return = null),
            (e.dependencies = null),
            (e.memoizedProps = null),
            (e.memoizedState = null),
            (e.pendingProps = null),
            (e.stateNode = null),
            (e.updateQueue = null);
        }
        function lu(e) {
          return 5 === e.tag || 3 === e.tag || 4 === e.tag;
        }
        function uu(e) {
          e: for (;;) {
            for (; null === e.sibling; ) {
              if (null === e.return || lu(e.return)) return null;
              e = e.return;
            }
            for (
              e.sibling.return = e.return, e = e.sibling;
              5 !== e.tag && 6 !== e.tag && 18 !== e.tag;

            ) {
              if (2 & e.flags) continue e;
              if (null === e.child || 4 === e.tag) continue e;
              (e.child.return = e), (e = e.child);
            }
            if (!(2 & e.flags)) return e.stateNode;
          }
        }
        function su(e, t, n) {
          var r = e.tag;
          if (5 === r || 6 === r)
            (e = e.stateNode),
              t
                ? 8 === n.nodeType
                  ? n.parentNode.insertBefore(e, t)
                  : n.insertBefore(e, t)
                : (8 === n.nodeType
                    ? (t = n.parentNode).insertBefore(e, n)
                    : (t = n).appendChild(e),
                  (null !== (n = n._reactRootContainer) && void 0 !== n) ||
                    null !== t.onclick ||
                    (t.onclick = Jr));
          else if (4 !== r && null !== (e = e.child))
            for (su(e, t, n), e = e.sibling; null !== e; )
              su(e, t, n), (e = e.sibling);
        }
        function cu(e, t, n) {
          var r = e.tag;
          if (5 === r || 6 === r)
            (e = e.stateNode), t ? n.insertBefore(e, t) : n.appendChild(e);
          else if (4 !== r && null !== (e = e.child))
            for (cu(e, t, n), e = e.sibling; null !== e; )
              cu(e, t, n), (e = e.sibling);
        }
        var fu = null,
          du = !1;
        function pu(e, t, n) {
          for (n = n.child; null !== n; ) hu(e, t, n), (n = n.sibling);
        }
        function hu(e, t, n) {
          if (ot && "function" === typeof ot.onCommitFiberUnmount)
            try {
              ot.onCommitFiberUnmount(it, n);
            } catch (l) {}
          switch (n.tag) {
            case 5:
              Gl || eu(n, t);
            case 6:
              var r = fu,
                i = du;
              (fu = null),
                pu(e, t, n),
                (du = i),
                null !== (fu = r) &&
                  (du
                    ? ((e = fu),
                      (n = n.stateNode),
                      8 === e.nodeType
                        ? e.parentNode.removeChild(n)
                        : e.removeChild(n))
                    : fu.removeChild(n.stateNode));
              break;
            case 18:
              null !== fu &&
                (du
                  ? ((e = fu),
                    (n = n.stateNode),
                    8 === e.nodeType
                      ? ui(e.parentNode, n)
                      : 1 === e.nodeType && ui(e, n),
                    Bt(e))
                  : ui(fu, n.stateNode));
              break;
            case 4:
              (r = fu),
                (i = du),
                (fu = n.stateNode.containerInfo),
                (du = !0),
                pu(e, t, n),
                (fu = r),
                (du = i);
              break;
            case 0:
            case 11:
            case 14:
            case 15:
              if (
                !Gl &&
                null !== (r = n.updateQueue) &&
                null !== (r = r.lastEffect)
              ) {
                i = r = r.next;
                do {
                  var o = i,
                    a = o.destroy;
                  (o = o.tag),
                    void 0 !== a &&
                      (0 !== (2 & o) || 0 !== (4 & o)) &&
                      tu(n, t, a),
                    (i = i.next);
                } while (i !== r);
              }
              pu(e, t, n);
              break;
            case 1:
              if (
                !Gl &&
                (eu(n, t),
                "function" === typeof (r = n.stateNode).componentWillUnmount)
              )
                try {
                  (r.props = n.memoizedProps),
                    (r.state = n.memoizedState),
                    r.componentWillUnmount();
                } catch (l) {
                  Es(n, t, l);
                }
              pu(e, t, n);
              break;
            case 21:
              pu(e, t, n);
              break;
            case 22:
              1 & n.mode
                ? ((Gl = (r = Gl) || null !== n.memoizedState),
                  pu(e, t, n),
                  (Gl = r))
                : pu(e, t, n);
              break;
            default:
              pu(e, t, n);
          }
        }
        function vu(e) {
          var t = e.updateQueue;
          if (null !== t) {
            e.updateQueue = null;
            var n = e.stateNode;
            null === n && (n = e.stateNode = new Zl()),
              t.forEach(function (t) {
                var r = zs.bind(null, e, t);
                n.has(t) || (n.add(t), t.then(r, r));
              });
          }
        }
        function mu(e, t) {
          var n = t.deletions;
          if (null !== n)
            for (var r = 0; r < n.length; r++) {
              var i = n[r];
              try {
                var a = e,
                  l = t,
                  u = l;
                e: for (; null !== u; ) {
                  switch (u.tag) {
                    case 5:
                      (fu = u.stateNode), (du = !1);
                      break e;
                    case 3:
                    case 4:
                      (fu = u.stateNode.containerInfo), (du = !0);
                      break e;
                  }
                  u = u.return;
                }
                if (null === fu) throw Error(o(160));
                hu(a, l, i), (fu = null), (du = !1);
                var s = i.alternate;
                null !== s && (s.return = null), (i.return = null);
              } catch (c) {
                Es(i, t, c);
              }
            }
          if (12854 & t.subtreeFlags)
            for (t = t.child; null !== t; ) yu(t, e), (t = t.sibling);
        }
        function yu(e, t) {
          var n = e.alternate,
            r = e.flags;
          switch (e.tag) {
            case 0:
            case 11:
            case 14:
            case 15:
              if ((mu(t, e), gu(e), 4 & r)) {
                try {
                  ru(3, e, e.return), iu(3, e);
                } catch (m) {
                  Es(e, e.return, m);
                }
                try {
                  ru(5, e, e.return);
                } catch (m) {
                  Es(e, e.return, m);
                }
              }
              break;
            case 1:
              mu(t, e), gu(e), 512 & r && null !== n && eu(n, n.return);
              break;
            case 5:
              if (
                (mu(t, e),
                gu(e),
                512 & r && null !== n && eu(n, n.return),
                32 & e.flags)
              ) {
                var i = e.stateNode;
                try {
                  de(i, "");
                } catch (m) {
                  Es(e, e.return, m);
                }
              }
              if (4 & r && null != (i = e.stateNode)) {
                var a = e.memoizedProps,
                  l = null !== n ? n.memoizedProps : a,
                  u = e.type,
                  s = e.updateQueue;
                if (((e.updateQueue = null), null !== s))
                  try {
                    "input" === u &&
                      "radio" === a.type &&
                      null != a.name &&
                      G(i, a),
                      be(u, l);
                    var c = be(u, a);
                    for (l = 0; l < s.length; l += 2) {
                      var f = s[l],
                        d = s[l + 1];
                      "style" === f
                        ? me(i, d)
                        : "dangerouslySetInnerHTML" === f
                        ? fe(i, d)
                        : "children" === f
                        ? de(i, d)
                        : b(i, f, d, c);
                    }
                    switch (u) {
                      case "input":
                        Z(i, a);
                        break;
                      case "textarea":
                        oe(i, a);
                        break;
                      case "select":
                        var p = i._wrapperState.wasMultiple;
                        i._wrapperState.wasMultiple = !!a.multiple;
                        var h = a.value;
                        null != h
                          ? ne(i, !!a.multiple, h, !1)
                          : p !== !!a.multiple &&
                            (null != a.defaultValue
                              ? ne(i, !!a.multiple, a.defaultValue, !0)
                              : ne(i, !!a.multiple, a.multiple ? [] : "", !1));
                    }
                    i[pi] = a;
                  } catch (m) {
                    Es(e, e.return, m);
                  }
              }
              break;
            case 6:
              if ((mu(t, e), gu(e), 4 & r)) {
                if (null === e.stateNode) throw Error(o(162));
                (i = e.stateNode), (a = e.memoizedProps);
                try {
                  i.nodeValue = a;
                } catch (m) {
                  Es(e, e.return, m);
                }
              }
              break;
            case 3:
              if (
                (mu(t, e),
                gu(e),
                4 & r && null !== n && n.memoizedState.isDehydrated)
              )
                try {
                  Bt(t.containerInfo);
                } catch (m) {
                  Es(e, e.return, m);
                }
              break;
            case 4:
            default:
              mu(t, e), gu(e);
              break;
            case 13:
              mu(t, e),
                gu(e),
                8192 & (i = e.child).flags &&
                  ((a = null !== i.memoizedState),
                  (i.stateNode.isHidden = a),
                  !a ||
                    (null !== i.alternate &&
                      null !== i.alternate.memoizedState) ||
                    (Bu = Ge())),
                4 & r && vu(e);
              break;
            case 22:
              if (
                ((f = null !== n && null !== n.memoizedState),
                1 & e.mode
                  ? ((Gl = (c = Gl) || f), mu(t, e), (Gl = c))
                  : mu(t, e),
                gu(e),
                8192 & r)
              ) {
                if (
                  ((c = null !== e.memoizedState),
                  (e.stateNode.isHidden = c) && !f && 0 !== (1 & e.mode))
                )
                  for (Jl = e, f = e.child; null !== f; ) {
                    for (d = Jl = f; null !== Jl; ) {
                      switch (((h = (p = Jl).child), p.tag)) {
                        case 0:
                        case 11:
                        case 14:
                        case 15:
                          ru(4, p, p.return);
                          break;
                        case 1:
                          eu(p, p.return);
                          var v = p.stateNode;
                          if ("function" === typeof v.componentWillUnmount) {
                            (r = p), (n = p.return);
                            try {
                              (t = r),
                                (v.props = t.memoizedProps),
                                (v.state = t.memoizedState),
                                v.componentWillUnmount();
                            } catch (m) {
                              Es(r, n, m);
                            }
                          }
                          break;
                        case 5:
                          eu(p, p.return);
                          break;
                        case 22:
                          if (null !== p.memoizedState) {
                            ku(d);
                            continue;
                          }
                      }
                      null !== h ? ((h.return = p), (Jl = h)) : ku(d);
                    }
                    f = f.sibling;
                  }
                e: for (f = null, d = e; ; ) {
                  if (5 === d.tag) {
                    if (null === f) {
                      f = d;
                      try {
                        (i = d.stateNode),
                          c
                            ? "function" === typeof (a = i.style).setProperty
                              ? a.setProperty("display", "none", "important")
                              : (a.display = "none")
                            : ((u = d.stateNode),
                              (l =
                                void 0 !== (s = d.memoizedProps.style) &&
                                null !== s &&
                                s.hasOwnProperty("display")
                                  ? s.display
                                  : null),
                              (u.style.display = ve("display", l)));
                      } catch (m) {
                        Es(e, e.return, m);
                      }
                    }
                  } else if (6 === d.tag) {
                    if (null === f)
                      try {
                        d.stateNode.nodeValue = c ? "" : d.memoizedProps;
                      } catch (m) {
                        Es(e, e.return, m);
                      }
                  } else if (
                    ((22 !== d.tag && 23 !== d.tag) ||
                      null === d.memoizedState ||
                      d === e) &&
                    null !== d.child
                  ) {
                    (d.child.return = d), (d = d.child);
                    continue;
                  }
                  if (d === e) break e;
                  for (; null === d.sibling; ) {
                    if (null === d.return || d.return === e) break e;
                    f === d && (f = null), (d = d.return);
                  }
                  f === d && (f = null),
                    (d.sibling.return = d.return),
                    (d = d.sibling);
                }
              }
              break;
            case 19:
              mu(t, e), gu(e), 4 & r && vu(e);
            case 21:
          }
        }
        function gu(e) {
          var t = e.flags;
          if (2 & t) {
            try {
              e: {
                for (var n = e.return; null !== n; ) {
                  if (lu(n)) {
                    var r = n;
                    break e;
                  }
                  n = n.return;
                }
                throw Error(o(160));
              }
              switch (r.tag) {
                case 5:
                  var i = r.stateNode;
                  32 & r.flags && (de(i, ""), (r.flags &= -33)),
                    cu(e, uu(e), i);
                  break;
                case 3:
                case 4:
                  var a = r.stateNode.containerInfo;
                  su(e, uu(e), a);
                  break;
                default:
                  throw Error(o(161));
              }
            } catch (l) {
              Es(e, e.return, l);
            }
            e.flags &= -3;
          }
          4096 & t && (e.flags &= -4097);
        }
        function bu(e, t, n) {
          (Jl = e), wu(e, t, n);
        }
        function wu(e, t, n) {
          for (var r = 0 !== (1 & e.mode); null !== Jl; ) {
            var i = Jl,
              o = i.child;
            if (22 === i.tag && r) {
              var a = null !== i.memoizedState || Kl;
              if (!a) {
                var l = i.alternate,
                  u = (null !== l && null !== l.memoizedState) || Gl;
                l = Kl;
                var s = Gl;
                if (((Kl = a), (Gl = u) && !s))
                  for (Jl = i; null !== Jl; )
                    (u = (a = Jl).child),
                      22 === a.tag && null !== a.memoizedState
                        ? Su(i)
                        : null !== u
                        ? ((u.return = a), (Jl = u))
                        : Su(i);
                for (; null !== o; ) (Jl = o), wu(o, t, n), (o = o.sibling);
                (Jl = i), (Kl = l), (Gl = s);
              }
              _u(e);
            } else
              0 !== (8772 & i.subtreeFlags) && null !== o
                ? ((o.return = i), (Jl = o))
                : _u(e);
          }
        }
        function _u(e) {
          for (; null !== Jl; ) {
            var t = Jl;
            if (0 !== (8772 & t.flags)) {
              var n = t.alternate;
              try {
                if (0 !== (8772 & t.flags))
                  switch (t.tag) {
                    case 0:
                    case 11:
                    case 15:
                      Gl || iu(5, t);
                      break;
                    case 1:
                      var r = t.stateNode;
                      if (4 & t.flags && !Gl)
                        if (null === n) r.componentDidMount();
                        else {
                          var i =
                            t.elementType === t.type
                              ? n.memoizedProps
                              : yo(t.type, n.memoizedProps);
                          r.componentDidUpdate(
                            i,
                            n.memoizedState,
                            r.__reactInternalSnapshotBeforeUpdate
                          );
                        }
                      var a = t.updateQueue;
                      null !== a && jo(t, a, r);
                      break;
                    case 3:
                      var l = t.updateQueue;
                      if (null !== l) {
                        if (((n = null), null !== t.child))
                          switch (t.child.tag) {
                            case 5:
                            case 1:
                              n = t.child.stateNode;
                          }
                        jo(t, l, n);
                      }
                      break;
                    case 5:
                      var u = t.stateNode;
                      if (null === n && 4 & t.flags) {
                        n = u;
                        var s = t.memoizedProps;
                        switch (t.type) {
                          case "button":
                          case "input":
                          case "select":
                          case "textarea":
                            s.autoFocus && n.focus();
                            break;
                          case "img":
                            s.src && (n.src = s.src);
                        }
                      }
                      break;
                    case 6:
                    case 4:
                    case 12:
                    case 19:
                    case 17:
                    case 21:
                    case 22:
                    case 23:
                    case 25:
                      break;
                    case 13:
                      if (null === t.memoizedState) {
                        var c = t.alternate;
                        if (null !== c) {
                          var f = c.memoizedState;
                          if (null !== f) {
                            var d = f.dehydrated;
                            null !== d && Bt(d);
                          }
                        }
                      }
                      break;
                    default:
                      throw Error(o(163));
                  }
                Gl || (512 & t.flags && ou(t));
              } catch (p) {
                Es(t, t.return, p);
              }
            }
            if (t === e) {
              Jl = null;
              break;
            }
            if (null !== (n = t.sibling)) {
              (n.return = t.return), (Jl = n);
              break;
            }
            Jl = t.return;
          }
        }
        function ku(e) {
          for (; null !== Jl; ) {
            var t = Jl;
            if (t === e) {
              Jl = null;
              break;
            }
            var n = t.sibling;
            if (null !== n) {
              (n.return = t.return), (Jl = n);
              break;
            }
            Jl = t.return;
          }
        }
        function Su(e) {
          for (; null !== Jl; ) {
            var t = Jl;
            try {
              switch (t.tag) {
                case 0:
                case 11:
                case 15:
                  var n = t.return;
                  try {
                    iu(4, t);
                  } catch (u) {
                    Es(t, n, u);
                  }
                  break;
                case 1:
                  var r = t.stateNode;
                  if ("function" === typeof r.componentDidMount) {
                    var i = t.return;
                    try {
                      r.componentDidMount();
                    } catch (u) {
                      Es(t, i, u);
                    }
                  }
                  var o = t.return;
                  try {
                    ou(t);
                  } catch (u) {
                    Es(t, o, u);
                  }
                  break;
                case 5:
                  var a = t.return;
                  try {
                    ou(t);
                  } catch (u) {
                    Es(t, a, u);
                  }
              }
            } catch (u) {
              Es(t, t.return, u);
            }
            if (t === e) {
              Jl = null;
              break;
            }
            var l = t.sibling;
            if (null !== l) {
              (l.return = t.return), (Jl = l);
              break;
            }
            Jl = t.return;
          }
        }
        var xu,
          Eu = Math.ceil,
          Cu = w.ReactCurrentDispatcher,
          Nu = w.ReactCurrentOwner,
          Pu = w.ReactCurrentBatchConfig,
          zu = 0,
          Mu = null,
          Tu = null,
          Lu = 0,
          Ou = 0,
          Ru = xi(0),
          Au = 0,
          Iu = null,
          Fu = 0,
          Du = 0,
          ju = 0,
          Uu = null,
          Vu = null,
          Bu = 0,
          $u = 1 / 0,
          Hu = null,
          Wu = !1,
          Qu = null,
          qu = null,
          Yu = !1,
          Xu = null,
          Ku = 0,
          Gu = 0,
          Zu = null,
          Ju = -1,
          es = 0;
        function ts() {
          return 0 !== (6 & zu) ? Ge() : -1 !== Ju ? Ju : (Ju = Ge());
        }
        function ns(e) {
          return 0 === (1 & e.mode)
            ? 1
            : 0 !== (2 & zu) && 0 !== Lu
            ? Lu & -Lu
            : null !== mo.transition
            ? (0 === es && (es = vt()), es)
            : 0 !== (e = bt)
            ? e
            : (e = void 0 === (e = window.event) ? 16 : Kt(e.type));
        }
        function rs(e, t, n, r) {
          if (50 < Gu) throw ((Gu = 0), (Zu = null), Error(o(185)));
          yt(e, n, r),
            (0 !== (2 & zu) && e === Mu) ||
              (e === Mu && (0 === (2 & zu) && (Du |= n), 4 === Au && us(e, Lu)),
              is(e, r),
              1 === n &&
                0 === zu &&
                0 === (1 & t.mode) &&
                (($u = Ge() + 500), ji && Bi()));
        }
        function is(e, t) {
          var n = e.callbackNode;
          !(function (e, t) {
            for (
              var n = e.suspendedLanes,
                r = e.pingedLanes,
                i = e.expirationTimes,
                o = e.pendingLanes;
              0 < o;

            ) {
              var a = 31 - at(o),
                l = 1 << a,
                u = i[a];
              -1 === u
                ? (0 !== (l & n) && 0 === (l & r)) || (i[a] = pt(l, t))
                : u <= t && (e.expiredLanes |= l),
                (o &= ~l);
            }
          })(e, t);
          var r = dt(e, e === Mu ? Lu : 0);
          if (0 === r)
            null !== n && Ye(n),
              (e.callbackNode = null),
              (e.callbackPriority = 0);
          else if (((t = r & -r), e.callbackPriority !== t)) {
            if ((null != n && Ye(n), 1 === t))
              0 === e.tag
                ? (function (e) {
                    (ji = !0), Vi(e);
                  })(ss.bind(null, e))
                : Vi(ss.bind(null, e)),
                ai(function () {
                  0 === (6 & zu) && Bi();
                }),
                (n = null);
            else {
              switch (wt(r)) {
                case 1:
                  n = Je;
                  break;
                case 4:
                  n = et;
                  break;
                case 16:
                default:
                  n = tt;
                  break;
                case 536870912:
                  n = rt;
              }
              n = Ms(n, os.bind(null, e));
            }
            (e.callbackPriority = t), (e.callbackNode = n);
          }
        }
        function os(e, t) {
          if (((Ju = -1), (es = 0), 0 !== (6 & zu))) throw Error(o(327));
          var n = e.callbackNode;
          if (Ss() && e.callbackNode !== n) return null;
          var r = dt(e, e === Mu ? Lu : 0);
          if (0 === r) return null;
          if (0 !== (30 & r) || 0 !== (r & e.expiredLanes) || t) t = ys(e, r);
          else {
            t = r;
            var i = zu;
            zu |= 2;
            var a = vs();
            for (
              (Mu === e && Lu === t) ||
              ((Hu = null), ($u = Ge() + 500), ps(e, t));
              ;

            )
              try {
                bs();
                break;
              } catch (u) {
                hs(e, u);
              }
            ko(),
              (Cu.current = a),
              (zu = i),
              null !== Tu ? (t = 0) : ((Mu = null), (Lu = 0), (t = Au));
          }
          if (0 !== t) {
            if (
              (2 === t && 0 !== (i = ht(e)) && ((r = i), (t = as(e, i))),
              1 === t)
            )
              throw ((n = Iu), ps(e, 0), us(e, r), is(e, Ge()), n);
            if (6 === t) us(e, r);
            else {
              if (
                ((i = e.current.alternate),
                0 === (30 & r) &&
                  !(function (e) {
                    for (var t = e; ; ) {
                      if (16384 & t.flags) {
                        var n = t.updateQueue;
                        if (null !== n && null !== (n = n.stores))
                          for (var r = 0; r < n.length; r++) {
                            var i = n[r],
                              o = i.getSnapshot;
                            i = i.value;
                            try {
                              if (!lr(o(), i)) return !1;
                            } catch (l) {
                              return !1;
                            }
                          }
                      }
                      if (((n = t.child), 16384 & t.subtreeFlags && null !== n))
                        (n.return = t), (t = n);
                      else {
                        if (t === e) break;
                        for (; null === t.sibling; ) {
                          if (null === t.return || t.return === e) return !0;
                          t = t.return;
                        }
                        (t.sibling.return = t.return), (t = t.sibling);
                      }
                    }
                    return !0;
                  })(i) &&
                  (2 === (t = ys(e, r)) &&
                    0 !== (a = ht(e)) &&
                    ((r = a), (t = as(e, a))),
                  1 === t))
              )
                throw ((n = Iu), ps(e, 0), us(e, r), is(e, Ge()), n);
              switch (((e.finishedWork = i), (e.finishedLanes = r), t)) {
                case 0:
                case 1:
                  throw Error(o(345));
                case 2:
                case 5:
                  ks(e, Vu, Hu);
                  break;
                case 3:
                  if (
                    (us(e, r),
                    (130023424 & r) === r && 10 < (t = Bu + 500 - Ge()))
                  ) {
                    if (0 !== dt(e, 0)) break;
                    if (((i = e.suspendedLanes) & r) !== r) {
                      ts(), (e.pingedLanes |= e.suspendedLanes & i);
                      break;
                    }
                    e.timeoutHandle = ri(ks.bind(null, e, Vu, Hu), t);
                    break;
                  }
                  ks(e, Vu, Hu);
                  break;
                case 4:
                  if ((us(e, r), (4194240 & r) === r)) break;
                  for (t = e.eventTimes, i = -1; 0 < r; ) {
                    var l = 31 - at(r);
                    (a = 1 << l), (l = t[l]) > i && (i = l), (r &= ~a);
                  }
                  if (
                    ((r = i),
                    10 <
                      (r =
                        (120 > (r = Ge() - r)
                          ? 120
                          : 480 > r
                          ? 480
                          : 1080 > r
                          ? 1080
                          : 1920 > r
                          ? 1920
                          : 3e3 > r
                          ? 3e3
                          : 4320 > r
                          ? 4320
                          : 1960 * Eu(r / 1960)) - r))
                  ) {
                    e.timeoutHandle = ri(ks.bind(null, e, Vu, Hu), r);
                    break;
                  }
                  ks(e, Vu, Hu);
                  break;
                default:
                  throw Error(o(329));
              }
            }
          }
          return is(e, Ge()), e.callbackNode === n ? os.bind(null, e) : null;
        }
        function as(e, t) {
          var n = Uu;
          return (
            e.current.memoizedState.isDehydrated && (ps(e, t).flags |= 256),
            2 !== (e = ys(e, t)) && ((t = Vu), (Vu = n), null !== t && ls(t)),
            e
          );
        }
        function ls(e) {
          null === Vu ? (Vu = e) : Vu.push.apply(Vu, e);
        }
        function us(e, t) {
          for (
            t &= ~ju,
              t &= ~Du,
              e.suspendedLanes |= t,
              e.pingedLanes &= ~t,
              e = e.expirationTimes;
            0 < t;

          ) {
            var n = 31 - at(t),
              r = 1 << n;
            (e[n] = -1), (t &= ~r);
          }
        }
        function ss(e) {
          if (0 !== (6 & zu)) throw Error(o(327));
          Ss();
          var t = dt(e, 0);
          if (0 === (1 & t)) return is(e, Ge()), null;
          var n = ys(e, t);
          if (0 !== e.tag && 2 === n) {
            var r = ht(e);
            0 !== r && ((t = r), (n = as(e, r)));
          }
          if (1 === n) throw ((n = Iu), ps(e, 0), us(e, t), is(e, Ge()), n);
          if (6 === n) throw Error(o(345));
          return (
            (e.finishedWork = e.current.alternate),
            (e.finishedLanes = t),
            ks(e, Vu, Hu),
            is(e, Ge()),
            null
          );
        }
        function cs(e, t) {
          var n = zu;
          zu |= 1;
          try {
            return e(t);
          } finally {
            0 === (zu = n) && (($u = Ge() + 500), ji && Bi());
          }
        }
        function fs(e) {
          null !== Xu && 0 === Xu.tag && 0 === (6 & zu) && Ss();
          var t = zu;
          zu |= 1;
          var n = Pu.transition,
            r = bt;
          try {
            if (((Pu.transition = null), (bt = 1), e)) return e();
          } finally {
            (bt = r), (Pu.transition = n), 0 === (6 & (zu = t)) && Bi();
          }
        }
        function ds() {
          (Ou = Ru.current), Ei(Ru);
        }
        function ps(e, t) {
          (e.finishedWork = null), (e.finishedLanes = 0);
          var n = e.timeoutHandle;
          if ((-1 !== n && ((e.timeoutHandle = -1), ii(n)), null !== Tu))
            for (n = Tu.return; null !== n; ) {
              var r = n;
              switch ((to(r), r.tag)) {
                case 1:
                  null !== (r = r.type.childContextTypes) &&
                    void 0 !== r &&
                    Oi();
                  break;
                case 3:
                  oa(), Ei(zi), Ei(Pi), fa();
                  break;
                case 5:
                  la(r);
                  break;
                case 4:
                  oa();
                  break;
                case 13:
                case 19:
                  Ei(ua);
                  break;
                case 10:
                  So(r.type._context);
                  break;
                case 22:
                case 23:
                  ds();
              }
              n = n.return;
            }
          if (
            ((Mu = e),
            (Tu = e = Rs(e.current, null)),
            (Lu = Ou = t),
            (Au = 0),
            (Iu = null),
            (ju = Du = Fu = 0),
            (Vu = Uu = null),
            null !== No)
          ) {
            for (t = 0; t < No.length; t++)
              if (null !== (r = (n = No[t]).interleaved)) {
                n.interleaved = null;
                var i = r.next,
                  o = n.pending;
                if (null !== o) {
                  var a = o.next;
                  (o.next = i), (r.next = a);
                }
                n.pending = r;
              }
            No = null;
          }
          return e;
        }
        function hs(e, t) {
          for (;;) {
            var n = Tu;
            try {
              if ((ko(), (da.current = al), ga)) {
                for (var r = va.memoizedState; null !== r; ) {
                  var i = r.queue;
                  null !== i && (i.pending = null), (r = r.next);
                }
                ga = !1;
              }
              if (
                ((ha = 0),
                (ya = ma = va = null),
                (ba = !1),
                (wa = 0),
                (Nu.current = null),
                null === n || null === n.return)
              ) {
                (Au = 1), (Iu = t), (Tu = null);
                break;
              }
              e: {
                var a = e,
                  l = n.return,
                  u = n,
                  s = t;
                if (
                  ((t = Lu),
                  (u.flags |= 32768),
                  null !== s &&
                    "object" === typeof s &&
                    "function" === typeof s.then)
                ) {
                  var c = s,
                    f = u,
                    d = f.tag;
                  if (0 === (1 & f.mode) && (0 === d || 11 === d || 15 === d)) {
                    var p = f.alternate;
                    p
                      ? ((f.updateQueue = p.updateQueue),
                        (f.memoizedState = p.memoizedState),
                        (f.lanes = p.lanes))
                      : ((f.updateQueue = null), (f.memoizedState = null));
                  }
                  var h = yl(l);
                  if (null !== h) {
                    (h.flags &= -257),
                      gl(h, l, u, 0, t),
                      1 & h.mode && ml(a, c, t),
                      (s = c);
                    var v = (t = h).updateQueue;
                    if (null === v) {
                      var m = new Set();
                      m.add(s), (t.updateQueue = m);
                    } else v.add(s);
                    break e;
                  }
                  if (0 === (1 & t)) {
                    ml(a, c, t), ms();
                    break e;
                  }
                  s = Error(o(426));
                } else if (io && 1 & u.mode) {
                  var y = yl(l);
                  if (null !== y) {
                    0 === (65536 & y.flags) && (y.flags |= 256),
                      gl(y, l, u, 0, t),
                      vo(cl(s, u));
                    break e;
                  }
                }
                (a = s = cl(s, u)),
                  4 !== Au && (Au = 2),
                  null === Uu ? (Uu = [a]) : Uu.push(a),
                  (a = l);
                do {
                  switch (a.tag) {
                    case 3:
                      (a.flags |= 65536),
                        (t &= -t),
                        (a.lanes |= t),
                        Fo(a, hl(0, s, t));
                      break e;
                    case 1:
                      u = s;
                      var g = a.type,
                        b = a.stateNode;
                      if (
                        0 === (128 & a.flags) &&
                        ("function" === typeof g.getDerivedStateFromError ||
                          (null !== b &&
                            "function" === typeof b.componentDidCatch &&
                            (null === qu || !qu.has(b))))
                      ) {
                        (a.flags |= 65536),
                          (t &= -t),
                          (a.lanes |= t),
                          Fo(a, vl(a, u, t));
                        break e;
                      }
                  }
                  a = a.return;
                } while (null !== a);
              }
              _s(n);
            } catch (w) {
              (t = w), Tu === n && null !== n && (Tu = n = n.return);
              continue;
            }
            break;
          }
        }
        function vs() {
          var e = Cu.current;
          return (Cu.current = al), null === e ? al : e;
        }
        function ms() {
          (0 !== Au && 3 !== Au && 2 !== Au) || (Au = 4),
            null === Mu ||
              (0 === (268435455 & Fu) && 0 === (268435455 & Du)) ||
              us(Mu, Lu);
        }
        function ys(e, t) {
          var n = zu;
          zu |= 2;
          var r = vs();
          for ((Mu === e && Lu === t) || ((Hu = null), ps(e, t)); ; )
            try {
              gs();
              break;
            } catch (i) {
              hs(e, i);
            }
          if ((ko(), (zu = n), (Cu.current = r), null !== Tu))
            throw Error(o(261));
          return (Mu = null), (Lu = 0), Au;
        }
        function gs() {
          for (; null !== Tu; ) ws(Tu);
        }
        function bs() {
          for (; null !== Tu && !Xe(); ) ws(Tu);
        }
        function ws(e) {
          var t = xu(e.alternate, e, Ou);
          (e.memoizedProps = e.pendingProps),
            null === t ? _s(e) : (Tu = t),
            (Nu.current = null);
        }
        function _s(e) {
          var t = e;
          do {
            var n = t.alternate;
            if (((e = t.return), 0 === (32768 & t.flags))) {
              if (null !== (n = Yl(n, t, Ou))) return void (Tu = n);
            } else {
              if (null !== (n = Xl(n, t)))
                return (n.flags &= 32767), void (Tu = n);
              if (null === e) return (Au = 6), void (Tu = null);
              (e.flags |= 32768), (e.subtreeFlags = 0), (e.deletions = null);
            }
            if (null !== (t = t.sibling)) return void (Tu = t);
            Tu = t = e;
          } while (null !== t);
          0 === Au && (Au = 5);
        }
        function ks(e, t, n) {
          var r = bt,
            i = Pu.transition;
          try {
            (Pu.transition = null),
              (bt = 1),
              (function (e, t, n, r) {
                do {
                  Ss();
                } while (null !== Xu);
                if (0 !== (6 & zu)) throw Error(o(327));
                n = e.finishedWork;
                var i = e.finishedLanes;
                if (null === n) return null;
                if (
                  ((e.finishedWork = null),
                  (e.finishedLanes = 0),
                  n === e.current)
                )
                  throw Error(o(177));
                (e.callbackNode = null), (e.callbackPriority = 0);
                var a = n.lanes | n.childLanes;
                if (
                  ((function (e, t) {
                    var n = e.pendingLanes & ~t;
                    (e.pendingLanes = t),
                      (e.suspendedLanes = 0),
                      (e.pingedLanes = 0),
                      (e.expiredLanes &= t),
                      (e.mutableReadLanes &= t),
                      (e.entangledLanes &= t),
                      (t = e.entanglements);
                    var r = e.eventTimes;
                    for (e = e.expirationTimes; 0 < n; ) {
                      var i = 31 - at(n),
                        o = 1 << i;
                      (t[i] = 0), (r[i] = -1), (e[i] = -1), (n &= ~o);
                    }
                  })(e, a),
                  e === Mu && ((Tu = Mu = null), (Lu = 0)),
                  (0 === (2064 & n.subtreeFlags) && 0 === (2064 & n.flags)) ||
                    Yu ||
                    ((Yu = !0),
                    Ms(tt, function () {
                      return Ss(), null;
                    })),
                  (a = 0 !== (15990 & n.flags)),
                  0 !== (15990 & n.subtreeFlags) || a)
                ) {
                  (a = Pu.transition), (Pu.transition = null);
                  var l = bt;
                  bt = 1;
                  var u = zu;
                  (zu |= 4),
                    (Nu.current = null),
                    (function (e, t) {
                      if (((ei = Ht), pr((e = dr())))) {
                        if ("selectionStart" in e)
                          var n = {
                            start: e.selectionStart,
                            end: e.selectionEnd,
                          };
                        else
                          e: {
                            var r =
                              (n =
                                ((n = e.ownerDocument) && n.defaultView) ||
                                window).getSelection && n.getSelection();
                            if (r && 0 !== r.rangeCount) {
                              n = r.anchorNode;
                              var i = r.anchorOffset,
                                a = r.focusNode;
                              r = r.focusOffset;
                              try {
                                n.nodeType, a.nodeType;
                              } catch (_) {
                                n = null;
                                break e;
                              }
                              var l = 0,
                                u = -1,
                                s = -1,
                                c = 0,
                                f = 0,
                                d = e,
                                p = null;
                              t: for (;;) {
                                for (
                                  var h;
                                  d !== n ||
                                    (0 !== i && 3 !== d.nodeType) ||
                                    (u = l + i),
                                    d !== a ||
                                      (0 !== r && 3 !== d.nodeType) ||
                                      (s = l + r),
                                    3 === d.nodeType &&
                                      (l += d.nodeValue.length),
                                    null !== (h = d.firstChild);

                                )
                                  (p = d), (d = h);
                                for (;;) {
                                  if (d === e) break t;
                                  if (
                                    (p === n && ++c === i && (u = l),
                                    p === a && ++f === r && (s = l),
                                    null !== (h = d.nextSibling))
                                  )
                                    break;
                                  p = (d = p).parentNode;
                                }
                                d = h;
                              }
                              n =
                                -1 === u || -1 === s
                                  ? null
                                  : { start: u, end: s };
                            } else n = null;
                          }
                        n = n || { start: 0, end: 0 };
                      } else n = null;
                      for (
                        ti = { focusedElem: e, selectionRange: n },
                          Ht = !1,
                          Jl = t;
                        null !== Jl;

                      )
                        if (
                          ((e = (t = Jl).child),
                          0 !== (1028 & t.subtreeFlags) && null !== e)
                        )
                          (e.return = t), (Jl = e);
                        else
                          for (; null !== Jl; ) {
                            t = Jl;
                            try {
                              var v = t.alternate;
                              if (0 !== (1024 & t.flags))
                                switch (t.tag) {
                                  case 0:
                                  case 11:
                                  case 15:
                                  case 5:
                                  case 6:
                                  case 4:
                                  case 17:
                                    break;
                                  case 1:
                                    if (null !== v) {
                                      var m = v.memoizedProps,
                                        y = v.memoizedState,
                                        g = t.stateNode,
                                        b = g.getSnapshotBeforeUpdate(
                                          t.elementType === t.type
                                            ? m
                                            : yo(t.type, m),
                                          y
                                        );
                                      g.__reactInternalSnapshotBeforeUpdate = b;
                                    }
                                    break;
                                  case 3:
                                    var w = t.stateNode.containerInfo;
                                    1 === w.nodeType
                                      ? (w.textContent = "")
                                      : 9 === w.nodeType &&
                                        w.documentElement &&
                                        w.removeChild(w.documentElement);
                                    break;
                                  default:
                                    throw Error(o(163));
                                }
                            } catch (_) {
                              Es(t, t.return, _);
                            }
                            if (null !== (e = t.sibling)) {
                              (e.return = t.return), (Jl = e);
                              break;
                            }
                            Jl = t.return;
                          }
                      (v = nu), (nu = !1);
                    })(e, n),
                    yu(n, e),
                    hr(ti),
                    (Ht = !!ei),
                    (ti = ei = null),
                    (e.current = n),
                    bu(n, e, i),
                    Ke(),
                    (zu = u),
                    (bt = l),
                    (Pu.transition = a);
                } else e.current = n;
                if (
                  (Yu && ((Yu = !1), (Xu = e), (Ku = i)),
                  (a = e.pendingLanes),
                  0 === a && (qu = null),
                  (function (e) {
                    if (ot && "function" === typeof ot.onCommitFiberRoot)
                      try {
                        ot.onCommitFiberRoot(
                          it,
                          e,
                          void 0,
                          128 === (128 & e.current.flags)
                        );
                      } catch (t) {}
                  })(n.stateNode),
                  is(e, Ge()),
                  null !== t)
                )
                  for (r = e.onRecoverableError, n = 0; n < t.length; n++)
                    (i = t[n]),
                      r(i.value, { componentStack: i.stack, digest: i.digest });
                if (Wu) throw ((Wu = !1), (e = Qu), (Qu = null), e);
                0 !== (1 & Ku) && 0 !== e.tag && Ss(),
                  (a = e.pendingLanes),
                  0 !== (1 & a)
                    ? e === Zu
                      ? Gu++
                      : ((Gu = 0), (Zu = e))
                    : (Gu = 0),
                  Bi();
              })(e, t, n, r);
          } finally {
            (Pu.transition = i), (bt = r);
          }
          return null;
        }
        function Ss() {
          if (null !== Xu) {
            var e = wt(Ku),
              t = Pu.transition,
              n = bt;
            try {
              if (((Pu.transition = null), (bt = 16 > e ? 16 : e), null === Xu))
                var r = !1;
              else {
                if (((e = Xu), (Xu = null), (Ku = 0), 0 !== (6 & zu)))
                  throw Error(o(331));
                var i = zu;
                for (zu |= 4, Jl = e.current; null !== Jl; ) {
                  var a = Jl,
                    l = a.child;
                  if (0 !== (16 & Jl.flags)) {
                    var u = a.deletions;
                    if (null !== u) {
                      for (var s = 0; s < u.length; s++) {
                        var c = u[s];
                        for (Jl = c; null !== Jl; ) {
                          var f = Jl;
                          switch (f.tag) {
                            case 0:
                            case 11:
                            case 15:
                              ru(8, f, a);
                          }
                          var d = f.child;
                          if (null !== d) (d.return = f), (Jl = d);
                          else
                            for (; null !== Jl; ) {
                              var p = (f = Jl).sibling,
                                h = f.return;
                              if ((au(f), f === c)) {
                                Jl = null;
                                break;
                              }
                              if (null !== p) {
                                (p.return = h), (Jl = p);
                                break;
                              }
                              Jl = h;
                            }
                        }
                      }
                      var v = a.alternate;
                      if (null !== v) {
                        var m = v.child;
                        if (null !== m) {
                          v.child = null;
                          do {
                            var y = m.sibling;
                            (m.sibling = null), (m = y);
                          } while (null !== m);
                        }
                      }
                      Jl = a;
                    }
                  }
                  if (0 !== (2064 & a.subtreeFlags) && null !== l)
                    (l.return = a), (Jl = l);
                  else
                    e: for (; null !== Jl; ) {
                      if (0 !== (2048 & (a = Jl).flags))
                        switch (a.tag) {
                          case 0:
                          case 11:
                          case 15:
                            ru(9, a, a.return);
                        }
                      var g = a.sibling;
                      if (null !== g) {
                        (g.return = a.return), (Jl = g);
                        break e;
                      }
                      Jl = a.return;
                    }
                }
                var b = e.current;
                for (Jl = b; null !== Jl; ) {
                  var w = (l = Jl).child;
                  if (0 !== (2064 & l.subtreeFlags) && null !== w)
                    (w.return = l), (Jl = w);
                  else
                    e: for (l = b; null !== Jl; ) {
                      if (0 !== (2048 & (u = Jl).flags))
                        try {
                          switch (u.tag) {
                            case 0:
                            case 11:
                            case 15:
                              iu(9, u);
                          }
                        } catch (k) {
                          Es(u, u.return, k);
                        }
                      if (u === l) {
                        Jl = null;
                        break e;
                      }
                      var _ = u.sibling;
                      if (null !== _) {
                        (_.return = u.return), (Jl = _);
                        break e;
                      }
                      Jl = u.return;
                    }
                }
                if (
                  ((zu = i),
                  Bi(),
                  ot && "function" === typeof ot.onPostCommitFiberRoot)
                )
                  try {
                    ot.onPostCommitFiberRoot(it, e);
                  } catch (k) {}
                r = !0;
              }
              return r;
            } finally {
              (bt = n), (Pu.transition = t);
            }
          }
          return !1;
        }
        function xs(e, t, n) {
          (e = Ao(e, (t = hl(0, (t = cl(n, t)), 1)), 1)),
            (t = ts()),
            null !== e && (yt(e, 1, t), is(e, t));
        }
        function Es(e, t, n) {
          if (3 === e.tag) xs(e, e, n);
          else
            for (; null !== t; ) {
              if (3 === t.tag) {
                xs(t, e, n);
                break;
              }
              if (1 === t.tag) {
                var r = t.stateNode;
                if (
                  "function" === typeof t.type.getDerivedStateFromError ||
                  ("function" === typeof r.componentDidCatch &&
                    (null === qu || !qu.has(r)))
                ) {
                  (t = Ao(t, (e = vl(t, (e = cl(n, e)), 1)), 1)),
                    (e = ts()),
                    null !== t && (yt(t, 1, e), is(t, e));
                  break;
                }
              }
              t = t.return;
            }
        }
        function Cs(e, t, n) {
          var r = e.pingCache;
          null !== r && r.delete(t),
            (t = ts()),
            (e.pingedLanes |= e.suspendedLanes & n),
            Mu === e &&
              (Lu & n) === n &&
              (4 === Au ||
              (3 === Au && (130023424 & Lu) === Lu && 500 > Ge() - Bu)
                ? ps(e, 0)
                : (ju |= n)),
            is(e, t);
        }
        function Ns(e, t) {
          0 === t &&
            (0 === (1 & e.mode)
              ? (t = 1)
              : ((t = ct), 0 === (130023424 & (ct <<= 1)) && (ct = 4194304)));
          var n = ts();
          null !== (e = Mo(e, t)) && (yt(e, t, n), is(e, n));
        }
        function Ps(e) {
          var t = e.memoizedState,
            n = 0;
          null !== t && (n = t.retryLane), Ns(e, n);
        }
        function zs(e, t) {
          var n = 0;
          switch (e.tag) {
            case 13:
              var r = e.stateNode,
                i = e.memoizedState;
              null !== i && (n = i.retryLane);
              break;
            case 19:
              r = e.stateNode;
              break;
            default:
              throw Error(o(314));
          }
          null !== r && r.delete(t), Ns(e, n);
        }
        function Ms(e, t) {
          return qe(e, t);
        }
        function Ts(e, t, n, r) {
          (this.tag = e),
            (this.key = n),
            (this.sibling =
              this.child =
              this.return =
              this.stateNode =
              this.type =
              this.elementType =
                null),
            (this.index = 0),
            (this.ref = null),
            (this.pendingProps = t),
            (this.dependencies =
              this.memoizedState =
              this.updateQueue =
              this.memoizedProps =
                null),
            (this.mode = r),
            (this.subtreeFlags = this.flags = 0),
            (this.deletions = null),
            (this.childLanes = this.lanes = 0),
            (this.alternate = null);
        }
        function Ls(e, t, n, r) {
          return new Ts(e, t, n, r);
        }
        function Os(e) {
          return !(!(e = e.prototype) || !e.isReactComponent);
        }
        function Rs(e, t) {
          var n = e.alternate;
          return (
            null === n
              ? (((n = Ls(e.tag, t, e.key, e.mode)).elementType =
                  e.elementType),
                (n.type = e.type),
                (n.stateNode = e.stateNode),
                (n.alternate = e),
                (e.alternate = n))
              : ((n.pendingProps = t),
                (n.type = e.type),
                (n.flags = 0),
                (n.subtreeFlags = 0),
                (n.deletions = null)),
            (n.flags = 14680064 & e.flags),
            (n.childLanes = e.childLanes),
            (n.lanes = e.lanes),
            (n.child = e.child),
            (n.memoizedProps = e.memoizedProps),
            (n.memoizedState = e.memoizedState),
            (n.updateQueue = e.updateQueue),
            (t = e.dependencies),
            (n.dependencies =
              null === t
                ? null
                : { lanes: t.lanes, firstContext: t.firstContext }),
            (n.sibling = e.sibling),
            (n.index = e.index),
            (n.ref = e.ref),
            n
          );
        }
        function As(e, t, n, r, i, a) {
          var l = 2;
          if (((r = e), "function" === typeof e)) Os(e) && (l = 1);
          else if ("string" === typeof e) l = 5;
          else
            e: switch (e) {
              case S:
                return Is(n.children, i, a, t);
              case x:
                (l = 8), (i |= 8);
                break;
              case E:
                return (
                  ((e = Ls(12, n, t, 2 | i)).elementType = E), (e.lanes = a), e
                );
              case z:
                return (
                  ((e = Ls(13, n, t, i)).elementType = z), (e.lanes = a), e
                );
              case M:
                return (
                  ((e = Ls(19, n, t, i)).elementType = M), (e.lanes = a), e
                );
              case O:
                return Fs(n, i, a, t);
              default:
                if ("object" === typeof e && null !== e)
                  switch (e.$$typeof) {
                    case C:
                      l = 10;
                      break e;
                    case N:
                      l = 9;
                      break e;
                    case P:
                      l = 11;
                      break e;
                    case T:
                      l = 14;
                      break e;
                    case L:
                      (l = 16), (r = null);
                      break e;
                  }
                throw Error(o(130, null == e ? e : typeof e, ""));
            }
          return (
            ((t = Ls(l, n, t, i)).elementType = e),
            (t.type = r),
            (t.lanes = a),
            t
          );
        }
        function Is(e, t, n, r) {
          return ((e = Ls(7, e, r, t)).lanes = n), e;
        }
        function Fs(e, t, n, r) {
          return (
            ((e = Ls(22, e, r, t)).elementType = O),
            (e.lanes = n),
            (e.stateNode = { isHidden: !1 }),
            e
          );
        }
        function Ds(e, t, n) {
          return ((e = Ls(6, e, null, t)).lanes = n), e;
        }
        function js(e, t, n) {
          return (
            ((t = Ls(
              4,
              null !== e.children ? e.children : [],
              e.key,
              t
            )).lanes = n),
            (t.stateNode = {
              containerInfo: e.containerInfo,
              pendingChildren: null,
              implementation: e.implementation,
            }),
            t
          );
        }
        function Us(e, t, n, r, i) {
          (this.tag = t),
            (this.containerInfo = e),
            (this.finishedWork =
              this.pingCache =
              this.current =
              this.pendingChildren =
                null),
            (this.timeoutHandle = -1),
            (this.callbackNode = this.pendingContext = this.context = null),
            (this.callbackPriority = 0),
            (this.eventTimes = mt(0)),
            (this.expirationTimes = mt(-1)),
            (this.entangledLanes =
              this.finishedLanes =
              this.mutableReadLanes =
              this.expiredLanes =
              this.pingedLanes =
              this.suspendedLanes =
              this.pendingLanes =
                0),
            (this.entanglements = mt(0)),
            (this.identifierPrefix = r),
            (this.onRecoverableError = i),
            (this.mutableSourceEagerHydrationData = null);
        }
        function Vs(e, t, n, r, i, o, a, l, u) {
          return (
            (e = new Us(e, t, n, l, u)),
            1 === t ? ((t = 1), !0 === o && (t |= 8)) : (t = 0),
            (o = Ls(3, null, null, t)),
            (e.current = o),
            (o.stateNode = e),
            (o.memoizedState = {
              element: r,
              isDehydrated: n,
              cache: null,
              transitions: null,
              pendingSuspenseBoundaries: null,
            }),
            Lo(o),
            e
          );
        }
        function Bs(e) {
          if (!e) return Ni;
          e: {
            if (Be((e = e._reactInternals)) !== e || 1 !== e.tag)
              throw Error(o(170));
            var t = e;
            do {
              switch (t.tag) {
                case 3:
                  t = t.stateNode.context;
                  break e;
                case 1:
                  if (Li(t.type)) {
                    t = t.stateNode.__reactInternalMemoizedMergedChildContext;
                    break e;
                  }
              }
              t = t.return;
            } while (null !== t);
            throw Error(o(171));
          }
          if (1 === e.tag) {
            var n = e.type;
            if (Li(n)) return Ai(e, n, t);
          }
          return t;
        }
        function $s(e, t, n, r, i, o, a, l, u) {
          return (
            ((e = Vs(n, r, !0, e, 0, o, 0, l, u)).context = Bs(null)),
            (n = e.current),
            ((o = Ro((r = ts()), (i = ns(n)))).callback =
              void 0 !== t && null !== t ? t : null),
            Ao(n, o, i),
            (e.current.lanes = i),
            yt(e, i, r),
            is(e, r),
            e
          );
        }
        function Hs(e, t, n, r) {
          var i = t.current,
            o = ts(),
            a = ns(i);
          return (
            (n = Bs(n)),
            null === t.context ? (t.context = n) : (t.pendingContext = n),
            ((t = Ro(o, a)).payload = { element: e }),
            null !== (r = void 0 === r ? null : r) && (t.callback = r),
            null !== (e = Ao(i, t, a)) && (rs(e, i, a, o), Io(e, i, a)),
            a
          );
        }
        function Ws(e) {
          return (e = e.current).child
            ? (e.child.tag, e.child.stateNode)
            : null;
        }
        function Qs(e, t) {
          if (null !== (e = e.memoizedState) && null !== e.dehydrated) {
            var n = e.retryLane;
            e.retryLane = 0 !== n && n < t ? n : t;
          }
        }
        function qs(e, t) {
          Qs(e, t), (e = e.alternate) && Qs(e, t);
        }
        xu = function (e, t, n) {
          if (null !== e)
            if (e.memoizedProps !== t.pendingProps || zi.current) wl = !0;
            else {
              if (0 === (e.lanes & n) && 0 === (128 & t.flags))
                return (
                  (wl = !1),
                  (function (e, t, n) {
                    switch (t.tag) {
                      case 3:
                        Ml(t), ho();
                        break;
                      case 5:
                        aa(t);
                        break;
                      case 1:
                        Li(t.type) && Ii(t);
                        break;
                      case 4:
                        ia(t, t.stateNode.containerInfo);
                        break;
                      case 10:
                        var r = t.type._context,
                          i = t.memoizedProps.value;
                        Ci(go, r._currentValue), (r._currentValue = i);
                        break;
                      case 13:
                        if (null !== (r = t.memoizedState))
                          return null !== r.dehydrated
                            ? (Ci(ua, 1 & ua.current), (t.flags |= 128), null)
                            : 0 !== (n & t.child.childLanes)
                            ? Dl(e, t, n)
                            : (Ci(ua, 1 & ua.current),
                              null !== (e = Wl(e, t, n)) ? e.sibling : null);
                        Ci(ua, 1 & ua.current);
                        break;
                      case 19:
                        if (
                          ((r = 0 !== (n & t.childLanes)),
                          0 !== (128 & e.flags))
                        ) {
                          if (r) return $l(e, t, n);
                          t.flags |= 128;
                        }
                        if (
                          (null !== (i = t.memoizedState) &&
                            ((i.rendering = null),
                            (i.tail = null),
                            (i.lastEffect = null)),
                          Ci(ua, ua.current),
                          r)
                        )
                          break;
                        return null;
                      case 22:
                      case 23:
                        return (t.lanes = 0), El(e, t, n);
                    }
                    return Wl(e, t, n);
                  })(e, t, n)
                );
              wl = 0 !== (131072 & e.flags);
            }
          else (wl = !1), io && 0 !== (1048576 & t.flags) && Ji(t, Qi, t.index);
          switch (((t.lanes = 0), t.tag)) {
            case 2:
              var r = t.type;
              Hl(e, t), (e = t.pendingProps);
              var i = Ti(t, Pi.current);
              Eo(t, n), (i = xa(null, t, r, e, i, n));
              var a = Ea();
              return (
                (t.flags |= 1),
                "object" === typeof i &&
                null !== i &&
                "function" === typeof i.render &&
                void 0 === i.$$typeof
                  ? ((t.tag = 1),
                    (t.memoizedState = null),
                    (t.updateQueue = null),
                    Li(r) ? ((a = !0), Ii(t)) : (a = !1),
                    (t.memoizedState =
                      null !== i.state && void 0 !== i.state ? i.state : null),
                    Lo(t),
                    (i.updater = Bo),
                    (t.stateNode = i),
                    (i._reactInternals = t),
                    Qo(t, r, e, n),
                    (t = zl(null, t, r, !0, a, n)))
                  : ((t.tag = 0),
                    io && a && eo(t),
                    _l(null, t, i, n),
                    (t = t.child)),
                t
              );
            case 16:
              r = t.elementType;
              e: {
                switch (
                  (Hl(e, t),
                  (e = t.pendingProps),
                  (r = (i = r._init)(r._payload)),
                  (t.type = r),
                  (i = t.tag =
                    (function (e) {
                      if ("function" === typeof e) return Os(e) ? 1 : 0;
                      if (void 0 !== e && null !== e) {
                        if ((e = e.$$typeof) === P) return 11;
                        if (e === T) return 14;
                      }
                      return 2;
                    })(r)),
                  (e = yo(r, e)),
                  i)
                ) {
                  case 0:
                    t = Nl(null, t, r, e, n);
                    break e;
                  case 1:
                    t = Pl(null, t, r, e, n);
                    break e;
                  case 11:
                    t = kl(null, t, r, e, n);
                    break e;
                  case 14:
                    t = Sl(null, t, r, yo(r.type, e), n);
                    break e;
                }
                throw Error(o(306, r, ""));
              }
              return t;
            case 0:
              return (
                (r = t.type),
                (i = t.pendingProps),
                Nl(e, t, r, (i = t.elementType === r ? i : yo(r, i)), n)
              );
            case 1:
              return (
                (r = t.type),
                (i = t.pendingProps),
                Pl(e, t, r, (i = t.elementType === r ? i : yo(r, i)), n)
              );
            case 3:
              e: {
                if ((Ml(t), null === e)) throw Error(o(387));
                (r = t.pendingProps),
                  (i = (a = t.memoizedState).element),
                  Oo(e, t),
                  Do(t, r, null, n);
                var l = t.memoizedState;
                if (((r = l.element), a.isDehydrated)) {
                  if (
                    ((a = {
                      element: r,
                      isDehydrated: !1,
                      cache: l.cache,
                      pendingSuspenseBoundaries: l.pendingSuspenseBoundaries,
                      transitions: l.transitions,
                    }),
                    (t.updateQueue.baseState = a),
                    (t.memoizedState = a),
                    256 & t.flags)
                  ) {
                    t = Tl(e, t, r, n, (i = cl(Error(o(423)), t)));
                    break e;
                  }
                  if (r !== i) {
                    t = Tl(e, t, r, n, (i = cl(Error(o(424)), t)));
                    break e;
                  }
                  for (
                    ro = si(t.stateNode.containerInfo.firstChild),
                      no = t,
                      io = !0,
                      oo = null,
                      n = Zo(t, null, r, n),
                      t.child = n;
                    n;

                  )
                    (n.flags = (-3 & n.flags) | 4096), (n = n.sibling);
                } else {
                  if ((ho(), r === i)) {
                    t = Wl(e, t, n);
                    break e;
                  }
                  _l(e, t, r, n);
                }
                t = t.child;
              }
              return t;
            case 5:
              return (
                aa(t),
                null === e && so(t),
                (r = t.type),
                (i = t.pendingProps),
                (a = null !== e ? e.memoizedProps : null),
                (l = i.children),
                ni(r, i)
                  ? (l = null)
                  : null !== a && ni(r, a) && (t.flags |= 32),
                Cl(e, t),
                _l(e, t, l, n),
                t.child
              );
            case 6:
              return null === e && so(t), null;
            case 13:
              return Dl(e, t, n);
            case 4:
              return (
                ia(t, t.stateNode.containerInfo),
                (r = t.pendingProps),
                null === e ? (t.child = Go(t, null, r, n)) : _l(e, t, r, n),
                t.child
              );
            case 11:
              return (
                (r = t.type),
                (i = t.pendingProps),
                kl(e, t, r, (i = t.elementType === r ? i : yo(r, i)), n)
              );
            case 7:
              return _l(e, t, t.pendingProps, n), t.child;
            case 8:
            case 12:
              return _l(e, t, t.pendingProps.children, n), t.child;
            case 10:
              e: {
                if (
                  ((r = t.type._context),
                  (i = t.pendingProps),
                  (a = t.memoizedProps),
                  (l = i.value),
                  Ci(go, r._currentValue),
                  (r._currentValue = l),
                  null !== a)
                )
                  if (lr(a.value, l)) {
                    if (a.children === i.children && !zi.current) {
                      t = Wl(e, t, n);
                      break e;
                    }
                  } else
                    for (
                      null !== (a = t.child) && (a.return = t);
                      null !== a;

                    ) {
                      var u = a.dependencies;
                      if (null !== u) {
                        l = a.child;
                        for (var s = u.firstContext; null !== s; ) {
                          if (s.context === r) {
                            if (1 === a.tag) {
                              (s = Ro(-1, n & -n)).tag = 2;
                              var c = a.updateQueue;
                              if (null !== c) {
                                var f = (c = c.shared).pending;
                                null === f
                                  ? (s.next = s)
                                  : ((s.next = f.next), (f.next = s)),
                                  (c.pending = s);
                              }
                            }
                            (a.lanes |= n),
                              null !== (s = a.alternate) && (s.lanes |= n),
                              xo(a.return, n, t),
                              (u.lanes |= n);
                            break;
                          }
                          s = s.next;
                        }
                      } else if (10 === a.tag)
                        l = a.type === t.type ? null : a.child;
                      else if (18 === a.tag) {
                        if (null === (l = a.return)) throw Error(o(341));
                        (l.lanes |= n),
                          null !== (u = l.alternate) && (u.lanes |= n),
                          xo(l, n, t),
                          (l = a.sibling);
                      } else l = a.child;
                      if (null !== l) l.return = a;
                      else
                        for (l = a; null !== l; ) {
                          if (l === t) {
                            l = null;
                            break;
                          }
                          if (null !== (a = l.sibling)) {
                            (a.return = l.return), (l = a);
                            break;
                          }
                          l = l.return;
                        }
                      a = l;
                    }
                _l(e, t, i.children, n), (t = t.child);
              }
              return t;
            case 9:
              return (
                (i = t.type),
                (r = t.pendingProps.children),
                Eo(t, n),
                (r = r((i = Co(i)))),
                (t.flags |= 1),
                _l(e, t, r, n),
                t.child
              );
            case 14:
              return (
                (i = yo((r = t.type), t.pendingProps)),
                Sl(e, t, r, (i = yo(r.type, i)), n)
              );
            case 15:
              return xl(e, t, t.type, t.pendingProps, n);
            case 17:
              return (
                (r = t.type),
                (i = t.pendingProps),
                (i = t.elementType === r ? i : yo(r, i)),
                Hl(e, t),
                (t.tag = 1),
                Li(r) ? ((e = !0), Ii(t)) : (e = !1),
                Eo(t, n),
                Ho(t, r, i),
                Qo(t, r, i, n),
                zl(null, t, r, !0, e, n)
              );
            case 19:
              return $l(e, t, n);
            case 22:
              return El(e, t, n);
          }
          throw Error(o(156, t.tag));
        };
        var Ys =
          "function" === typeof reportError
            ? reportError
            : function (e) {
                console.error(e);
              };
        function Xs(e) {
          this._internalRoot = e;
        }
        function Ks(e) {
          this._internalRoot = e;
        }
        function Gs(e) {
          return !(
            !e ||
            (1 !== e.nodeType && 9 !== e.nodeType && 11 !== e.nodeType)
          );
        }
        function Zs(e) {
          return !(
            !e ||
            (1 !== e.nodeType &&
              9 !== e.nodeType &&
              11 !== e.nodeType &&
              (8 !== e.nodeType ||
                " react-mount-point-unstable " !== e.nodeValue))
          );
        }
        function Js() {}
        function ec(e, t, n, r, i) {
          var o = n._reactRootContainer;
          if (o) {
            var a = o;
            if ("function" === typeof i) {
              var l = i;
              i = function () {
                var e = Ws(a);
                l.call(e);
              };
            }
            Hs(t, a, e, i);
          } else
            a = (function (e, t, n, r, i) {
              if (i) {
                if ("function" === typeof r) {
                  var o = r;
                  r = function () {
                    var e = Ws(a);
                    o.call(e);
                  };
                }
                var a = $s(t, r, e, 0, null, !1, 0, "", Js);
                return (
                  (e._reactRootContainer = a),
                  (e[hi] = a.current),
                  Br(8 === e.nodeType ? e.parentNode : e),
                  fs(),
                  a
                );
              }
              for (; (i = e.lastChild); ) e.removeChild(i);
              if ("function" === typeof r) {
                var l = r;
                r = function () {
                  var e = Ws(u);
                  l.call(e);
                };
              }
              var u = Vs(e, 0, !1, null, 0, !1, 0, "", Js);
              return (
                (e._reactRootContainer = u),
                (e[hi] = u.current),
                Br(8 === e.nodeType ? e.parentNode : e),
                fs(function () {
                  Hs(t, u, n, r);
                }),
                u
              );
            })(n, t, e, i, r);
          return Ws(a);
        }
        (Ks.prototype.render = Xs.prototype.render =
          function (e) {
            var t = this._internalRoot;
            if (null === t) throw Error(o(409));
            Hs(e, t, null, null);
          }),
          (Ks.prototype.unmount = Xs.prototype.unmount =
            function () {
              var e = this._internalRoot;
              if (null !== e) {
                this._internalRoot = null;
                var t = e.containerInfo;
                fs(function () {
                  Hs(null, e, null, null);
                }),
                  (t[hi] = null);
              }
            }),
          (Ks.prototype.unstable_scheduleHydration = function (e) {
            if (e) {
              var t = xt();
              e = { blockedOn: null, target: e, priority: t };
              for (
                var n = 0;
                n < Ot.length && 0 !== t && t < Ot[n].priority;
                n++
              );
              Ot.splice(n, 0, e), 0 === n && Ft(e);
            }
          }),
          (_t = function (e) {
            switch (e.tag) {
              case 3:
                var t = e.stateNode;
                if (t.current.memoizedState.isDehydrated) {
                  var n = ft(t.pendingLanes);
                  0 !== n &&
                    (gt(t, 1 | n),
                    is(t, Ge()),
                    0 === (6 & zu) && (($u = Ge() + 500), Bi()));
                }
                break;
              case 13:
                fs(function () {
                  var t = Mo(e, 1);
                  if (null !== t) {
                    var n = ts();
                    rs(t, e, 1, n);
                  }
                }),
                  qs(e, 1);
            }
          }),
          (kt = function (e) {
            if (13 === e.tag) {
              var t = Mo(e, 134217728);
              if (null !== t) rs(t, e, 134217728, ts());
              qs(e, 134217728);
            }
          }),
          (St = function (e) {
            if (13 === e.tag) {
              var t = ns(e),
                n = Mo(e, t);
              if (null !== n) rs(n, e, t, ts());
              qs(e, t);
            }
          }),
          (xt = function () {
            return bt;
          }),
          (Et = function (e, t) {
            var n = bt;
            try {
              return (bt = e), t();
            } finally {
              bt = n;
            }
          }),
          (ke = function (e, t, n) {
            switch (t) {
              case "input":
                if ((Z(e, n), (t = n.name), "radio" === n.type && null != t)) {
                  for (n = e; n.parentNode; ) n = n.parentNode;
                  for (
                    n = n.querySelectorAll(
                      "input[name=" + JSON.stringify("" + t) + '][type="radio"]'
                    ),
                      t = 0;
                    t < n.length;
                    t++
                  ) {
                    var r = n[t];
                    if (r !== e && r.form === e.form) {
                      var i = _i(r);
                      if (!i) throw Error(o(90));
                      q(r), Z(r, i);
                    }
                  }
                }
                break;
              case "textarea":
                oe(e, n);
                break;
              case "select":
                null != (t = n.value) && ne(e, !!n.multiple, t, !1);
            }
          }),
          (Pe = cs),
          (ze = fs);
        var tc = {
            usingClientEntryPoint: !1,
            Events: [bi, wi, _i, Ce, Ne, cs],
          },
          nc = {
            findFiberByHostInstance: gi,
            bundleType: 0,
            version: "18.2.0",
            rendererPackageName: "react-dom",
          },
          rc = {
            bundleType: nc.bundleType,
            version: nc.version,
            rendererPackageName: nc.rendererPackageName,
            rendererConfig: nc.rendererConfig,
            overrideHookState: null,
            overrideHookStateDeletePath: null,
            overrideHookStateRenamePath: null,
            overrideProps: null,
            overridePropsDeletePath: null,
            overridePropsRenamePath: null,
            setErrorHandler: null,
            setSuspenseHandler: null,
            scheduleUpdate: null,
            currentDispatcherRef: w.ReactCurrentDispatcher,
            findHostInstanceByFiber: function (e) {
              return null === (e = We(e)) ? null : e.stateNode;
            },
            findFiberByHostInstance:
              nc.findFiberByHostInstance ||
              function () {
                return null;
              },
            findHostInstancesForRefresh: null,
            scheduleRefresh: null,
            scheduleRoot: null,
            setRefreshHandler: null,
            getCurrentFiber: null,
            reconcilerVersion: "18.2.0-next-9e3b772b8-20220608",
          };
        if ("undefined" !== typeof __REACT_DEVTOOLS_GLOBAL_HOOK__) {
          var ic = __REACT_DEVTOOLS_GLOBAL_HOOK__;
          if (!ic.isDisabled && ic.supportsFiber)
            try {
              (it = ic.inject(rc)), (ot = ic);
            } catch (ce) {}
        }
        (t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = tc),
          (t.createPortal = function (e, t) {
            var n =
              2 < arguments.length && void 0 !== arguments[2]
                ? arguments[2]
                : null;
            if (!Gs(t)) throw Error(o(200));
            return (function (e, t, n) {
              var r =
                3 < arguments.length && void 0 !== arguments[3]
                  ? arguments[3]
                  : null;
              return {
                $$typeof: k,
                key: null == r ? null : "" + r,
                children: e,
                containerInfo: t,
                implementation: n,
              };
            })(e, t, null, n);
          }),
          (t.createRoot = function (e, t) {
            if (!Gs(e)) throw Error(o(299));
            var n = !1,
              r = "",
              i = Ys;
            return (
              null !== t &&
                void 0 !== t &&
                (!0 === t.unstable_strictMode && (n = !0),
                void 0 !== t.identifierPrefix && (r = t.identifierPrefix),
                void 0 !== t.onRecoverableError && (i = t.onRecoverableError)),
              (t = Vs(e, 1, !1, null, 0, n, 0, r, i)),
              (e[hi] = t.current),
              Br(8 === e.nodeType ? e.parentNode : e),
              new Xs(t)
            );
          }),
          (t.findDOMNode = function (e) {
            if (null == e) return null;
            if (1 === e.nodeType) return e;
            var t = e._reactInternals;
            if (void 0 === t) {
              if ("function" === typeof e.render) throw Error(o(188));
              throw ((e = Object.keys(e).join(",")), Error(o(268, e)));
            }
            return (e = null === (e = We(t)) ? null : e.stateNode);
          }),
          (t.flushSync = function (e) {
            return fs(e);
          }),
          (t.hydrate = function (e, t, n) {
            if (!Zs(t)) throw Error(o(200));
            return ec(null, e, t, !0, n);
          }),
          (t.hydrateRoot = function (e, t, n) {
            if (!Gs(e)) throw Error(o(405));
            var r = (null != n && n.hydratedSources) || null,
              i = !1,
              a = "",
              l = Ys;
            if (
              (null !== n &&
                void 0 !== n &&
                (!0 === n.unstable_strictMode && (i = !0),
                void 0 !== n.identifierPrefix && (a = n.identifierPrefix),
                void 0 !== n.onRecoverableError && (l = n.onRecoverableError)),
              (t = $s(t, null, e, 1, null != n ? n : null, i, 0, a, l)),
              (e[hi] = t.current),
              Br(e),
              r)
            )
              for (e = 0; e < r.length; e++)
                (i = (i = (n = r[e])._getVersion)(n._source)),
                  null == t.mutableSourceEagerHydrationData
                    ? (t.mutableSourceEagerHydrationData = [n, i])
                    : t.mutableSourceEagerHydrationData.push(n, i);
            return new Ks(t);
          }),
          (t.render = function (e, t, n) {
            if (!Zs(t)) throw Error(o(200));
            return ec(null, e, t, !1, n);
          }),
          (t.unmountComponentAtNode = function (e) {
            if (!Zs(e)) throw Error(o(40));
            return (
              !!e._reactRootContainer &&
              (fs(function () {
                ec(null, null, e, !1, function () {
                  (e._reactRootContainer = null), (e[hi] = null);
                });
              }),
              !0)
            );
          }),
          (t.unstable_batchedUpdates = cs),
          (t.unstable_renderSubtreeIntoContainer = function (e, t, n, r) {
            if (!Zs(n)) throw Error(o(200));
            if (null == e || void 0 === e._reactInternals) throw Error(o(38));
            return ec(e, t, n, !1, r);
          }),
          (t.version = "18.2.0-next-9e3b772b8-20220608");
      },
      250: function (e, t, n) {
        var r = n(164);
        (t.createRoot = r.createRoot), (t.hydrateRoot = r.hydrateRoot);
      },
      164: function (e, t, n) {
        !(function e() {
          if (
            "undefined" !== typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ &&
            "function" === typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE
          )
            try {
              __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(e);
            } catch (t) {
              console.error(t);
            }
        })(),
          (e.exports = n(463));
      },
      374: function (e, t, n) {
        var r = n(791),
          i = Symbol.for("react.element"),
          o = Symbol.for("react.fragment"),
          a = Object.prototype.hasOwnProperty,
          l =
            r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED
              .ReactCurrentOwner,
          u = { key: !0, ref: !0, __self: !0, __source: !0 };
        function s(e, t, n) {
          var r,
            o = {},
            s = null,
            c = null;
          for (r in (void 0 !== n && (s = "" + n),
          void 0 !== t.key && (s = "" + t.key),
          void 0 !== t.ref && (c = t.ref),
          t))
            a.call(t, r) && !u.hasOwnProperty(r) && (o[r] = t[r]);
          if (e && e.defaultProps)
            for (r in (t = e.defaultProps)) void 0 === o[r] && (o[r] = t[r]);
          return {
            $$typeof: i,
            type: e,
            key: s,
            ref: c,
            props: o,
            _owner: l.current,
          };
        }
        t.jsx = s;
      },
      117: function (e, t) {
        var n = Symbol.for("react.element"),
          r = Symbol.for("react.portal"),
          i = Symbol.for("react.fragment"),
          o = Symbol.for("react.strict_mode"),
          a = Symbol.for("react.profiler"),
          l = Symbol.for("react.provider"),
          u = Symbol.for("react.context"),
          s = Symbol.for("react.forward_ref"),
          c = Symbol.for("react.suspense"),
          f = Symbol.for("react.memo"),
          d = Symbol.for("react.lazy"),
          p = Symbol.iterator;
        var h = {
            isMounted: function () {
              return !1;
            },
            enqueueForceUpdate: function () {},
            enqueueReplaceState: function () {},
            enqueueSetState: function () {},
          },
          v = Object.assign,
          m = {};
        function y(e, t, n) {
          (this.props = e),
            (this.context = t),
            (this.refs = m),
            (this.updater = n || h);
        }
        function g() {}
        function b(e, t, n) {
          (this.props = e),
            (this.context = t),
            (this.refs = m),
            (this.updater = n || h);
        }
        (y.prototype.isReactComponent = {}),
          (y.prototype.setState = function (e, t) {
            if ("object" !== typeof e && "function" !== typeof e && null != e)
              throw Error(
                "setState(...): takes an object of state variables to update or a function which returns an object of state variables."
              );
            this.updater.enqueueSetState(this, e, t, "setState");
          }),
          (y.prototype.forceUpdate = function (e) {
            this.updater.enqueueForceUpdate(this, e, "forceUpdate");
          }),
          (g.prototype = y.prototype);
        var w = (b.prototype = new g());
        (w.constructor = b), v(w, y.prototype), (w.isPureReactComponent = !0);
        var _ = Array.isArray,
          k = Object.prototype.hasOwnProperty,
          S = { current: null },
          x = { key: !0, ref: !0, __self: !0, __source: !0 };
        function E(e, t, r) {
          var i,
            o = {},
            a = null,
            l = null;
          if (null != t)
            for (i in (void 0 !== t.ref && (l = t.ref),
            void 0 !== t.key && (a = "" + t.key),
            t))
              k.call(t, i) && !x.hasOwnProperty(i) && (o[i] = t[i]);
          var u = arguments.length - 2;
          if (1 === u) o.children = r;
          else if (1 < u) {
            for (var s = Array(u), c = 0; c < u; c++) s[c] = arguments[c + 2];
            o.children = s;
          }
          if (e && e.defaultProps)
            for (i in (u = e.defaultProps)) void 0 === o[i] && (o[i] = u[i]);
          return {
            $$typeof: n,
            type: e,
            key: a,
            ref: l,
            props: o,
            _owner: S.current,
          };
        }
        function C(e) {
          return "object" === typeof e && null !== e && e.$$typeof === n;
        }
        var N = /\/+/g;
        function P(e, t) {
          return "object" === typeof e && null !== e && null != e.key
            ? (function (e) {
                var t = { "=": "=0", ":": "=2" };
                return (
                  "$" +
                  e.replace(/[=:]/g, function (e) {
                    return t[e];
                  })
                );
              })("" + e.key)
            : t.toString(36);
        }
        function z(e, t, i, o, a) {
          var l = typeof e;
          ("undefined" !== l && "boolean" !== l) || (e = null);
          var u = !1;
          if (null === e) u = !0;
          else
            switch (l) {
              case "string":
              case "number":
                u = !0;
                break;
              case "object":
                switch (e.$$typeof) {
                  case n:
                  case r:
                    u = !0;
                }
            }
          if (u)
            return (
              (a = a((u = e))),
              (e = "" === o ? "." + P(u, 0) : o),
              _(a)
                ? ((i = ""),
                  null != e && (i = e.replace(N, "$&/") + "/"),
                  z(a, t, i, "", function (e) {
                    return e;
                  }))
                : null != a &&
                  (C(a) &&
                    (a = (function (e, t) {
                      return {
                        $$typeof: n,
                        type: e.type,
                        key: t,
                        ref: e.ref,
                        props: e.props,
                        _owner: e._owner,
                      };
                    })(
                      a,
                      i +
                        (!a.key || (u && u.key === a.key)
                          ? ""
                          : ("" + a.key).replace(N, "$&/") + "/") +
                        e
                    )),
                  t.push(a)),
              1
            );
          if (((u = 0), (o = "" === o ? "." : o + ":"), _(e)))
            for (var s = 0; s < e.length; s++) {
              var c = o + P((l = e[s]), s);
              u += z(l, t, i, c, a);
            }
          else if (
            ((c = (function (e) {
              return null === e || "object" !== typeof e
                ? null
                : "function" === typeof (e = (p && e[p]) || e["@@iterator"])
                ? e
                : null;
            })(e)),
            "function" === typeof c)
          )
            for (e = c.call(e), s = 0; !(l = e.next()).done; )
              u += z((l = l.value), t, i, (c = o + P(l, s++)), a);
          else if ("object" === l)
            throw (
              ((t = String(e)),
              Error(
                "Objects are not valid as a React child (found: " +
                  ("[object Object]" === t
                    ? "object with keys {" + Object.keys(e).join(", ") + "}"
                    : t) +
                  "). If you meant to render a collection of children, use an array instead."
              ))
            );
          return u;
        }
        function M(e, t, n) {
          if (null == e) return e;
          var r = [],
            i = 0;
          return (
            z(e, r, "", "", function (e) {
              return t.call(n, e, i++);
            }),
            r
          );
        }
        function T(e) {
          if (-1 === e._status) {
            var t = e._result;
            (t = t()).then(
              function (t) {
                (0 !== e._status && -1 !== e._status) ||
                  ((e._status = 1), (e._result = t));
              },
              function (t) {
                (0 !== e._status && -1 !== e._status) ||
                  ((e._status = 2), (e._result = t));
              }
            ),
              -1 === e._status && ((e._status = 0), (e._result = t));
          }
          if (1 === e._status) return e._result.default;
          throw e._result;
        }
        var L = { current: null },
          O = { transition: null },
          R = {
            ReactCurrentDispatcher: L,
            ReactCurrentBatchConfig: O,
            ReactCurrentOwner: S,
          };
        (t.Children = {
          map: M,
          forEach: function (e, t, n) {
            M(
              e,
              function () {
                t.apply(this, arguments);
              },
              n
            );
          },
          count: function (e) {
            var t = 0;
            return (
              M(e, function () {
                t++;
              }),
              t
            );
          },
          toArray: function (e) {
            return (
              M(e, function (e) {
                return e;
              }) || []
            );
          },
          only: function (e) {
            if (!C(e))
              throw Error(
                "React.Children.only expected to receive a single React element child."
              );
            return e;
          },
        }),
          (t.Component = y),
          (t.Fragment = i),
          (t.Profiler = a),
          (t.PureComponent = b),
          (t.StrictMode = o),
          (t.Suspense = c),
          (t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = R),
          (t.cloneElement = function (e, t, r) {
            if (null === e || void 0 === e)
              throw Error(
                "React.cloneElement(...): The argument must be a React element, but you passed " +
                  e +
                  "."
              );
            var i = v({}, e.props),
              o = e.key,
              a = e.ref,
              l = e._owner;
            if (null != t) {
              if (
                (void 0 !== t.ref && ((a = t.ref), (l = S.current)),
                void 0 !== t.key && (o = "" + t.key),
                e.type && e.type.defaultProps)
              )
                var u = e.type.defaultProps;
              for (s in t)
                k.call(t, s) &&
                  !x.hasOwnProperty(s) &&
                  (i[s] = void 0 === t[s] && void 0 !== u ? u[s] : t[s]);
            }
            var s = arguments.length - 2;
            if (1 === s) i.children = r;
            else if (1 < s) {
              u = Array(s);
              for (var c = 0; c < s; c++) u[c] = arguments[c + 2];
              i.children = u;
            }
            return {
              $$typeof: n,
              type: e.type,
              key: o,
              ref: a,
              props: i,
              _owner: l,
            };
          }),
          (t.createContext = function (e) {
            return (
              ((e = {
                $$typeof: u,
                _currentValue: e,
                _currentValue2: e,
                _threadCount: 0,
                Provider: null,
                Consumer: null,
                _defaultValue: null,
                _globalName: null,
              }).Provider = { $$typeof: l, _context: e }),
              (e.Consumer = e)
            );
          }),
          (t.createElement = E),
          (t.createFactory = function (e) {
            var t = E.bind(null, e);
            return (t.type = e), t;
          }),
          (t.createRef = function () {
            return { current: null };
          }),
          (t.forwardRef = function (e) {
            return { $$typeof: s, render: e };
          }),
          (t.isValidElement = C),
          (t.lazy = function (e) {
            return {
              $$typeof: d,
              _payload: { _status: -1, _result: e },
              _init: T,
            };
          }),
          (t.memo = function (e, t) {
            return { $$typeof: f, type: e, compare: void 0 === t ? null : t };
          }),
          (t.startTransition = function (e) {
            var t = O.transition;
            O.transition = {};
            try {
              e();
            } finally {
              O.transition = t;
            }
          }),
          (t.unstable_act = function () {
            throw Error(
              "act(...) is not supported in production builds of React."
            );
          }),
          (t.useCallback = function (e, t) {
            return L.current.useCallback(e, t);
          }),
          (t.useContext = function (e) {
            return L.current.useContext(e);
          }),
          (t.useDebugValue = function () {}),
          (t.useDeferredValue = function (e) {
            return L.current.useDeferredValue(e);
          }),
          (t.useEffect = function (e, t) {
            return L.current.useEffect(e, t);
          }),
          (t.useId = function () {
            return L.current.useId();
          }),
          (t.useImperativeHandle = function (e, t, n) {
            return L.current.useImperativeHandle(e, t, n);
          }),
          (t.useInsertionEffect = function (e, t) {
            return L.current.useInsertionEffect(e, t);
          }),
          (t.useLayoutEffect = function (e, t) {
            return L.current.useLayoutEffect(e, t);
          }),
          (t.useMemo = function (e, t) {
            return L.current.useMemo(e, t);
          }),
          (t.useReducer = function (e, t, n) {
            return L.current.useReducer(e, t, n);
          }),
          (t.useRef = function (e) {
            return L.current.useRef(e);
          }),
          (t.useState = function (e) {
            return L.current.useState(e);
          }),
          (t.useSyncExternalStore = function (e, t, n) {
            return L.current.useSyncExternalStore(e, t, n);
          }),
          (t.useTransition = function () {
            return L.current.useTransition();
          }),
          (t.version = "18.2.0");
      },
      791: function (e, t, n) {
        e.exports = n(117);
      },
      184: function (e, t, n) {
        e.exports = n(374);
      },
      813: function (e, t) {
        function n(e, t) {
          var n = e.length;
          e.push(t);
          e: for (; 0 < n; ) {
            var r = (n - 1) >>> 1,
              i = e[r];
            if (!(0 < o(i, t))) break e;
            (e[r] = t), (e[n] = i), (n = r);
          }
        }
        function r(e) {
          return 0 === e.length ? null : e[0];
        }
        function i(e) {
          if (0 === e.length) return null;
          var t = e[0],
            n = e.pop();
          if (n !== t) {
            e[0] = n;
            e: for (var r = 0, i = e.length, a = i >>> 1; r < a; ) {
              var l = 2 * (r + 1) - 1,
                u = e[l],
                s = l + 1,
                c = e[s];
              if (0 > o(u, n))
                s < i && 0 > o(c, u)
                  ? ((e[r] = c), (e[s] = n), (r = s))
                  : ((e[r] = u), (e[l] = n), (r = l));
              else {
                if (!(s < i && 0 > o(c, n))) break e;
                (e[r] = c), (e[s] = n), (r = s);
              }
            }
          }
          return t;
        }
        function o(e, t) {
          var n = e.sortIndex - t.sortIndex;
          return 0 !== n ? n : e.id - t.id;
        }
        if (
          "object" === typeof performance &&
          "function" === typeof performance.now
        ) {
          var a = performance;
          t.unstable_now = function () {
            return a.now();
          };
        } else {
          var l = Date,
            u = l.now();
          t.unstable_now = function () {
            return l.now() - u;
          };
        }
        var s = [],
          c = [],
          f = 1,
          d = null,
          p = 3,
          h = !1,
          v = !1,
          m = !1,
          y = "function" === typeof setTimeout ? setTimeout : null,
          g = "function" === typeof clearTimeout ? clearTimeout : null,
          b = "undefined" !== typeof setImmediate ? setImmediate : null;
        function w(e) {
          for (var t = r(c); null !== t; ) {
            if (null === t.callback) i(c);
            else {
              if (!(t.startTime <= e)) break;
              i(c), (t.sortIndex = t.expirationTime), n(s, t);
            }
            t = r(c);
          }
        }
        function _(e) {
          if (((m = !1), w(e), !v))
            if (null !== r(s)) (v = !0), O(k);
            else {
              var t = r(c);
              null !== t && R(_, t.startTime - e);
            }
        }
        function k(e, n) {
          (v = !1), m && ((m = !1), g(C), (C = -1)), (h = !0);
          var o = p;
          try {
            for (
              w(n), d = r(s);
              null !== d && (!(d.expirationTime > n) || (e && !z()));

            ) {
              var a = d.callback;
              if ("function" === typeof a) {
                (d.callback = null), (p = d.priorityLevel);
                var l = a(d.expirationTime <= n);
                (n = t.unstable_now()),
                  "function" === typeof l
                    ? (d.callback = l)
                    : d === r(s) && i(s),
                  w(n);
              } else i(s);
              d = r(s);
            }
            if (null !== d) var u = !0;
            else {
              var f = r(c);
              null !== f && R(_, f.startTime - n), (u = !1);
            }
            return u;
          } finally {
            (d = null), (p = o), (h = !1);
          }
        }
        "undefined" !== typeof navigator &&
          void 0 !== navigator.scheduling &&
          void 0 !== navigator.scheduling.isInputPending &&
          navigator.scheduling.isInputPending.bind(navigator.scheduling);
        var S,
          x = !1,
          E = null,
          C = -1,
          N = 5,
          P = -1;
        function z() {
          return !(t.unstable_now() - P < N);
        }
        function M() {
          if (null !== E) {
            var e = t.unstable_now();
            P = e;
            var n = !0;
            try {
              n = E(!0, e);
            } finally {
              n ? S() : ((x = !1), (E = null));
            }
          } else x = !1;
        }
        if ("function" === typeof b)
          S = function () {
            b(M);
          };
        else if ("undefined" !== typeof MessageChannel) {
          var T = new MessageChannel(),
            L = T.port2;
          (T.port1.onmessage = M),
            (S = function () {
              L.postMessage(null);
            });
        } else
          S = function () {
            y(M, 0);
          };
        function O(e) {
          (E = e), x || ((x = !0), S());
        }
        function R(e, n) {
          C = y(function () {
            e(t.unstable_now());
          }, n);
        }
        (t.unstable_IdlePriority = 5),
          (t.unstable_ImmediatePriority = 1),
          (t.unstable_LowPriority = 4),
          (t.unstable_NormalPriority = 3),
          (t.unstable_Profiling = null),
          (t.unstable_UserBlockingPriority = 2),
          (t.unstable_cancelCallback = function (e) {
            e.callback = null;
          }),
          (t.unstable_continueExecution = function () {
            v || h || ((v = !0), O(k));
          }),
          (t.unstable_forceFrameRate = function (e) {
            0 > e || 125 < e
              ? console.error(
                  "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
                )
              : (N = 0 < e ? Math.floor(1e3 / e) : 5);
          }),
          (t.unstable_getCurrentPriorityLevel = function () {
            return p;
          }),
          (t.unstable_getFirstCallbackNode = function () {
            return r(s);
          }),
          (t.unstable_next = function (e) {
            switch (p) {
              case 1:
              case 2:
              case 3:
                var t = 3;
                break;
              default:
                t = p;
            }
            var n = p;
            p = t;
            try {
              return e();
            } finally {
              p = n;
            }
          }),
          (t.unstable_pauseExecution = function () {}),
          (t.unstable_requestPaint = function () {}),
          (t.unstable_runWithPriority = function (e, t) {
            switch (e) {
              case 1:
              case 2:
              case 3:
              case 4:
              case 5:
                break;
              default:
                e = 3;
            }
            var n = p;
            p = e;
            try {
              return t();
            } finally {
              p = n;
            }
          }),
          (t.unstable_scheduleCallback = function (e, i, o) {
            var a = t.unstable_now();
            switch (
              ("object" === typeof o && null !== o
                ? (o = "number" === typeof (o = o.delay) && 0 < o ? a + o : a)
                : (o = a),
              e)
            ) {
              case 1:
                var l = -1;
                break;
              case 2:
                l = 250;
                break;
              case 5:
                l = 1073741823;
                break;
              case 4:
                l = 1e4;
                break;
              default:
                l = 5e3;
            }
            return (
              (e = {
                id: f++,
                callback: i,
                priorityLevel: e,
                startTime: o,
                expirationTime: (l = o + l),
                sortIndex: -1,
              }),
              o > a
                ? ((e.sortIndex = o),
                  n(c, e),
                  null === r(s) &&
                    e === r(c) &&
                    (m ? (g(C), (C = -1)) : (m = !0), R(_, o - a)))
                : ((e.sortIndex = l), n(s, e), v || h || ((v = !0), O(k))),
              e
            );
          }),
          (t.unstable_shouldYield = z),
          (t.unstable_wrapCallback = function (e) {
            var t = p;
            return function () {
              var n = p;
              p = t;
              try {
                return e.apply(this, arguments);
              } finally {
                p = n;
              }
            };
          });
      },
      296: function (e, t, n) {
        e.exports = n(813);
      },
    },
    t = {};
  function n(r) {
    var i = t[r];
    if (void 0 !== i) return i.exports;
    var o = (t[r] = { exports: {} });
    return e[r](o, o.exports, n), o.exports;
  }
  (n.m = e),
    (n.d = function (e, t) {
      for (var r in t)
        n.o(t, r) &&
          !n.o(e, r) &&
          Object.defineProperty(e, r, { enumerable: !0, get: t[r] });
    }),
    (n.f = {}),
    (n.e = function (e) {
      return Promise.all(
        Object.keys(n.f).reduce(function (t, r) {
          return n.f[r](e, t), t;
        }, [])
      );
    }),
    (n.u = function (e) {
      return "static/js/" + e + ".5d953ad9.chunk.js";
    }),
    (n.miniCssF = function (e) {}),
    (n.o = function (e, t) {
      return Object.prototype.hasOwnProperty.call(e, t);
    }),
    (function () {
      var e = {},
        t = "india3:";
      n.l = function (r, i, o, a) {
        if (e[r]) e[r].push(i);
        else {
          var l, u;
          if (void 0 !== o)
            for (
              var s = document.getElementsByTagName("script"), c = 0;
              c < s.length;
              c++
            ) {
              var f = s[c];
              if (
                f.getAttribute("src") == r ||
                f.getAttribute("data-webpack") == t + o
              ) {
                l = f;
                break;
              }
            }
          l ||
            ((u = !0),
            ((l = document.createElement("script")).charset = "utf-8"),
            (l.timeout = 120),
            n.nc && l.setAttribute("nonce", n.nc),
            l.setAttribute("data-webpack", t + o),
            (l.src = r)),
            (e[r] = [i]);
          var d = function (t, n) {
              (l.onerror = l.onload = null), clearTimeout(p);
              var i = e[r];
              if (
                (delete e[r],
                l.parentNode && l.parentNode.removeChild(l),
                i &&
                  i.forEach(function (e) {
                    return e(n);
                  }),
                t)
              )
                return t(n);
            },
            p = setTimeout(
              d.bind(null, void 0, { type: "timeout", target: l }),
              12e4
            );
          (l.onerror = d.bind(null, l.onerror)),
            (l.onload = d.bind(null, l.onload)),
            u && document.head.appendChild(l);
        }
      };
    })(),
    (n.r = function (e) {
      "undefined" !== typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }),
        Object.defineProperty(e, "__esModule", { value: !0 });
    }),
    (n.p = "/"),
    (function () {
      var e = { 179: 0 };
      n.f.j = function (t, r) {
        var i = n.o(e, t) ? e[t] : void 0;
        if (0 !== i)
          if (i) r.push(i[2]);
          else {
            var o = new Promise(function (n, r) {
              i = e[t] = [n, r];
            });
            r.push((i[2] = o));
            var a = n.p + n.u(t),
              l = new Error();
            n.l(
              a,
              function (r) {
                if (n.o(e, t) && (0 !== (i = e[t]) && (e[t] = void 0), i)) {
                  var o = r && ("load" === r.type ? "missing" : r.type),
                    a = r && r.target && r.target.src;
                  (l.message =
                    "Loading chunk " + t + " failed.\n(" + o + ": " + a + ")"),
                    (l.name = "ChunkLoadError"),
                    (l.type = o),
                    (l.request = a),
                    i[1](l);
                }
              },
              "chunk-" + t,
              t
            );
          }
      };
      var t = function (t, r) {
          var i,
            o,
            a = r[0],
            l = r[1],
            u = r[2],
            s = 0;
          if (
            a.some(function (t) {
              return 0 !== e[t];
            })
          ) {
            for (i in l) n.o(l, i) && (n.m[i] = l[i]);
            if (u) u(n);
          }
          for (t && t(r); s < a.length; s++)
            (o = a[s]), n.o(e, o) && e[o] && e[o][0](), (e[o] = 0);
        },
        r = (self.webpackChunkindia3 = self.webpackChunkindia3 || []);
      r.forEach(t.bind(null, 0)), (r.push = t.bind(null, r.push.bind(r)));
    })(),
    (function () {
      var e = n(791),
        t = n(250);
      function r(e) {
        return (
          (r =
            "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
              ? function (e) {
                  return typeof e;
                }
              : function (e) {
                  return e &&
                    "function" == typeof Symbol &&
                    e.constructor === Symbol &&
                    e !== Symbol.prototype
                    ? "symbol"
                    : typeof e;
                }),
          r(e)
        );
      }
      function i() {
        i = function () {
          return e;
        };
        var e = {},
          t = Object.prototype,
          n = t.hasOwnProperty,
          o =
            Object.defineProperty ||
            function (e, t, n) {
              e[t] = n.value;
            },
          a = "function" == typeof Symbol ? Symbol : {},
          l = a.iterator || "@@iterator",
          u = a.asyncIterator || "@@asyncIterator",
          s = a.toStringTag || "@@toStringTag";
        function c(e, t, n) {
          return (
            Object.defineProperty(e, t, {
              value: n,
              enumerable: !0,
              configurable: !0,
              writable: !0,
            }),
            e[t]
          );
        }
        try {
          c({}, "");
        } catch (M) {
          c = function (e, t, n) {
            return (e[t] = n);
          };
        }
        function f(e, t, n, r) {
          var i = t && t.prototype instanceof h ? t : h,
            a = Object.create(i.prototype),
            l = new N(r || []);
          return o(a, "_invoke", { value: S(e, n, l) }), a;
        }
        function d(e, t, n) {
          try {
            return { type: "normal", arg: e.call(t, n) };
          } catch (M) {
            return { type: "throw", arg: M };
          }
        }
        e.wrap = f;
        var p = {};
        function h() {}
        function v() {}
        function m() {}
        var y = {};
        c(y, l, function () {
          return this;
        });
        var g = Object.getPrototypeOf,
          b = g && g(g(P([])));
        b && b !== t && n.call(b, l) && (y = b);
        var w = (m.prototype = h.prototype = Object.create(y));
        function _(e) {
          ["next", "throw", "return"].forEach(function (t) {
            c(e, t, function (e) {
              return this._invoke(t, e);
            });
          });
        }
        function k(e, t) {
          function i(o, a, l, u) {
            var s = d(e[o], e, a);
            if ("throw" !== s.type) {
              var c = s.arg,
                f = c.value;
              return f && "object" == r(f) && n.call(f, "__await")
                ? t.resolve(f.__await).then(
                    function (e) {
                      i("next", e, l, u);
                    },
                    function (e) {
                      i("throw", e, l, u);
                    }
                  )
                : t.resolve(f).then(
                    function (e) {
                      (c.value = e), l(c);
                    },
                    function (e) {
                      return i("throw", e, l, u);
                    }
                  );
            }
            u(s.arg);
          }
          var a;
          o(this, "_invoke", {
            value: function (e, n) {
              function r() {
                return new t(function (t, r) {
                  i(e, n, t, r);
                });
              }
              return (a = a ? a.then(r, r) : r());
            },
          });
        }
        function S(e, t, n) {
          var r = "suspendedStart";
          return function (i, o) {
            if ("executing" === r)
              throw new Error("Generator is already running");
            if ("completed" === r) {
              if ("throw" === i) throw o;
              return z();
            }
            for (n.method = i, n.arg = o; ; ) {
              var a = n.delegate;
              if (a) {
                var l = x(a, n);
                if (l) {
                  if (l === p) continue;
                  return l;
                }
              }
              if ("next" === n.method) n.sent = n._sent = n.arg;
              else if ("throw" === n.method) {
                if ("suspendedStart" === r) throw ((r = "completed"), n.arg);
                n.dispatchException(n.arg);
              } else "return" === n.method && n.abrupt("return", n.arg);
              r = "executing";
              var u = d(e, t, n);
              if ("normal" === u.type) {
                if (
                  ((r = n.done ? "completed" : "suspendedYield"), u.arg === p)
                )
                  continue;
                return { value: u.arg, done: n.done };
              }
              "throw" === u.type &&
                ((r = "completed"), (n.method = "throw"), (n.arg = u.arg));
            }
          };
        }
        function x(e, t) {
          var n = t.method,
            r = e.iterator[n];
          if (void 0 === r)
            return (
              (t.delegate = null),
              ("throw" === n &&
                e.iterator.return &&
                ((t.method = "return"),
                (t.arg = void 0),
                x(e, t),
                "throw" === t.method)) ||
                ("return" !== n &&
                  ((t.method = "throw"),
                  (t.arg = new TypeError(
                    "The iterator does not provide a '" + n + "' method"
                  )))),
              p
            );
          var i = d(r, e.iterator, t.arg);
          if ("throw" === i.type)
            return (
              (t.method = "throw"), (t.arg = i.arg), (t.delegate = null), p
            );
          var o = i.arg;
          return o
            ? o.done
              ? ((t[e.resultName] = o.value),
                (t.next = e.nextLoc),
                "return" !== t.method &&
                  ((t.method = "next"), (t.arg = void 0)),
                (t.delegate = null),
                p)
              : o
            : ((t.method = "throw"),
              (t.arg = new TypeError("iterator result is not an object")),
              (t.delegate = null),
              p);
        }
        function E(e) {
          var t = { tryLoc: e[0] };
          1 in e && (t.catchLoc = e[1]),
            2 in e && ((t.finallyLoc = e[2]), (t.afterLoc = e[3])),
            this.tryEntries.push(t);
        }
        function C(e) {
          var t = e.completion || {};
          (t.type = "normal"), delete t.arg, (e.completion = t);
        }
        function N(e) {
          (this.tryEntries = [{ tryLoc: "root" }]),
            e.forEach(E, this),
            this.reset(!0);
        }
        function P(e) {
          if (e) {
            var t = e[l];
            if (t) return t.call(e);
            if ("function" == typeof e.next) return e;
            if (!isNaN(e.length)) {
              var r = -1,
                i = function t() {
                  for (; ++r < e.length; )
                    if (n.call(e, r)) return (t.value = e[r]), (t.done = !1), t;
                  return (t.value = void 0), (t.done = !0), t;
                };
              return (i.next = i);
            }
          }
          return { next: z };
        }
        function z() {
          return { value: void 0, done: !0 };
        }
        return (
          (v.prototype = m),
          o(w, "constructor", { value: m, configurable: !0 }),
          o(m, "constructor", { value: v, configurable: !0 }),
          (v.displayName = c(m, s, "GeneratorFunction")),
          (e.isGeneratorFunction = function (e) {
            var t = "function" == typeof e && e.constructor;
            return (
              !!t &&
              (t === v || "GeneratorFunction" === (t.displayName || t.name))
            );
          }),
          (e.mark = function (e) {
            return (
              Object.setPrototypeOf
                ? Object.setPrototypeOf(e, m)
                : ((e.__proto__ = m), c(e, s, "GeneratorFunction")),
              (e.prototype = Object.create(w)),
              e
            );
          }),
          (e.awrap = function (e) {
            return { __await: e };
          }),
          _(k.prototype),
          c(k.prototype, u, function () {
            return this;
          }),
          (e.AsyncIterator = k),
          (e.async = function (t, n, r, i, o) {
            void 0 === o && (o = Promise);
            var a = new k(f(t, n, r, i), o);
            return e.isGeneratorFunction(n)
              ? a
              : a.next().then(function (e) {
                  return e.done ? e.value : a.next();
                });
          }),
          _(w),
          c(w, s, "Generator"),
          c(w, l, function () {
            return this;
          }),
          c(w, "toString", function () {
            return "[object Generator]";
          }),
          (e.keys = function (e) {
            var t = Object(e),
              n = [];
            for (var r in t) n.push(r);
            return (
              n.reverse(),
              function e() {
                for (; n.length; ) {
                  var r = n.pop();
                  if (r in t) return (e.value = r), (e.done = !1), e;
                }
                return (e.done = !0), e;
              }
            );
          }),
          (e.values = P),
          (N.prototype = {
            constructor: N,
            reset: function (e) {
              if (
                ((this.prev = 0),
                (this.next = 0),
                (this.sent = this._sent = void 0),
                (this.done = !1),
                (this.delegate = null),
                (this.method = "next"),
                (this.arg = void 0),
                this.tryEntries.forEach(C),
                !e)
              )
                for (var t in this)
                  "t" === t.charAt(0) &&
                    n.call(this, t) &&
                    !isNaN(+t.slice(1)) &&
                    (this[t] = void 0);
            },
            stop: function () {
              this.done = !0;
              var e = this.tryEntries[0].completion;
              if ("throw" === e.type) throw e.arg;
              return this.rval;
            },
            dispatchException: function (e) {
              if (this.done) throw e;
              var t = this;
              function r(n, r) {
                return (
                  (a.type = "throw"),
                  (a.arg = e),
                  (t.next = n),
                  r && ((t.method = "next"), (t.arg = void 0)),
                  !!r
                );
              }
              for (var i = this.tryEntries.length - 1; i >= 0; --i) {
                var o = this.tryEntries[i],
                  a = o.completion;
                if ("root" === o.tryLoc) return r("end");
                if (o.tryLoc <= this.prev) {
                  var l = n.call(o, "catchLoc"),
                    u = n.call(o, "finallyLoc");
                  if (l && u) {
                    if (this.prev < o.catchLoc) return r(o.catchLoc, !0);
                    if (this.prev < o.finallyLoc) return r(o.finallyLoc);
                  } else if (l) {
                    if (this.prev < o.catchLoc) return r(o.catchLoc, !0);
                  } else {
                    if (!u)
                      throw new Error("try statement without catch or finally");
                    if (this.prev < o.finallyLoc) return r(o.finallyLoc);
                  }
                }
              }
            },
            abrupt: function (e, t) {
              for (var r = this.tryEntries.length - 1; r >= 0; --r) {
                var i = this.tryEntries[r];
                if (
                  i.tryLoc <= this.prev &&
                  n.call(i, "finallyLoc") &&
                  this.prev < i.finallyLoc
                ) {
                  var o = i;
                  break;
                }
              }
              o &&
                ("break" === e || "continue" === e) &&
                o.tryLoc <= t &&
                t <= o.finallyLoc &&
                (o = null);
              var a = o ? o.completion : {};
              return (
                (a.type = e),
                (a.arg = t),
                o
                  ? ((this.method = "next"), (this.next = o.finallyLoc), p)
                  : this.complete(a)
              );
            },
            complete: function (e, t) {
              if ("throw" === e.type) throw e.arg;
              return (
                "break" === e.type || "continue" === e.type
                  ? (this.next = e.arg)
                  : "return" === e.type
                  ? ((this.rval = this.arg = e.arg),
                    (this.method = "return"),
                    (this.next = "end"))
                  : "normal" === e.type && t && (this.next = t),
                p
              );
            },
            finish: function (e) {
              for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                var n = this.tryEntries[t];
                if (n.finallyLoc === e)
                  return this.complete(n.completion, n.afterLoc), C(n), p;
              }
            },
            catch: function (e) {
              for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                var n = this.tryEntries[t];
                if (n.tryLoc === e) {
                  var r = n.completion;
                  if ("throw" === r.type) {
                    var i = r.arg;
                    C(n);
                  }
                  return i;
                }
              }
              throw new Error("illegal catch attempt");
            },
            delegateYield: function (e, t, n) {
              return (
                (this.delegate = { iterator: P(e), resultName: t, nextLoc: n }),
                "next" === this.method && (this.arg = void 0),
                p
              );
            },
          }),
          e
        );
      }
      function o(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
        return r;
      }
      function a(e, t) {
        if (e) {
          if ("string" === typeof e) return o(e, t);
          var n = Object.prototype.toString.call(e).slice(8, -1);
          return (
            "Object" === n && e.constructor && (n = e.constructor.name),
            "Map" === n || "Set" === n
              ? Array.from(e)
              : "Arguments" === n ||
                /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
              ? o(e, t)
              : void 0
          );
        }
      }
      function l(e, t) {
        return (
          (function (e) {
            if (Array.isArray(e)) return e;
          })(e) ||
          (function (e, t) {
            var n =
              null == e
                ? null
                : ("undefined" != typeof Symbol && e[Symbol.iterator]) ||
                  e["@@iterator"];
            if (null != n) {
              var r,
                i,
                o,
                a,
                l = [],
                u = !0,
                s = !1;
              try {
                if (((o = (n = n.call(e)).next), 0 === t)) {
                  if (Object(n) !== n) return;
                  u = !1;
                } else
                  for (
                    ;
                    !(u = (r = o.call(n)).done) &&
                    (l.push(r.value), l.length !== t);
                    u = !0
                  );
              } catch (c) {
                (s = !0), (i = c);
              } finally {
                try {
                  if (
                    !u &&
                    null != n.return &&
                    ((a = n.return()), Object(a) !== a)
                  )
                    return;
                } finally {
                  if (s) throw i;
                }
              }
              return l;
            }
          })(e, t) ||
          a(e, t) ||
          (function () {
            throw new TypeError(
              "Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
            );
          })()
        );
      }
      function u(e, t, n, r, i, o, a) {
        try {
          var l = e[o](a),
            u = l.value;
        } catch (s) {
          return void n(s);
        }
        l.done ? t(u) : Promise.resolve(u).then(r, i);
      }
      function s(e) {
        var t = (function (e, t) {
          if ("object" !== r(e) || null === e) return e;
          var n = e[Symbol.toPrimitive];
          if (void 0 !== n) {
            var i = n.call(e, t || "default");
            if ("object" !== r(i)) return i;
            throw new TypeError("@@toPrimitive must return a primitive value.");
          }
          return ("string" === t ? String : Number)(e);
        })(e, "string");
        return "symbol" === r(t) ? t : String(t);
      }
      function c(e, t, n) {
        return (
          (t = s(t)) in e
            ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[t] = n),
          e
        );
      }
      function f() {}
      function d(e) {
        return null == e
          ? f
          : function () {
              return this.querySelector(e);
            };
      }
      function p() {
        return [];
      }
      function h(e) {
        return null == e
          ? p
          : function () {
              return this.querySelectorAll(e);
            };
      }
      function v(e) {
        return function () {
          return null == (t = e.apply(this, arguments))
            ? []
            : Array.isArray(t)
            ? t
            : Array.from(t);
          var t;
        };
      }
      function m(e) {
        return function () {
          return this.matches(e);
        };
      }
      function y(e) {
        return function (t) {
          return t.matches(e);
        };
      }
      var g = Array.prototype.find;
      function b() {
        return this.firstElementChild;
      }
      var w = Array.prototype.filter;
      function _() {
        return Array.from(this.children);
      }
      function k(e) {
        return new Array(e.length);
      }
      function S(e, t) {
        (this.ownerDocument = e.ownerDocument),
          (this.namespaceURI = e.namespaceURI),
          (this._next = null),
          (this._parent = e),
          (this.__data__ = t);
      }
      function x(e, t, n, r, i, o) {
        for (var a, l = 0, u = t.length, s = o.length; l < s; ++l)
          (a = t[l])
            ? ((a.__data__ = o[l]), (r[l] = a))
            : (n[l] = new S(e, o[l]));
        for (; l < u; ++l) (a = t[l]) && (i[l] = a);
      }
      function E(e, t, n, r, i, o, a) {
        var l,
          u,
          s,
          c = new Map(),
          f = t.length,
          d = o.length,
          p = new Array(f);
        for (l = 0; l < f; ++l)
          (u = t[l]) &&
            ((p[l] = s = a.call(u, u.__data__, l, t) + ""),
            c.has(s) ? (i[l] = u) : c.set(s, u));
        for (l = 0; l < d; ++l)
          (s = a.call(e, o[l], l, o) + ""),
            (u = c.get(s))
              ? ((r[l] = u), (u.__data__ = o[l]), c.delete(s))
              : (n[l] = new S(e, o[l]));
        for (l = 0; l < f; ++l) (u = t[l]) && c.get(p[l]) === u && (i[l] = u);
      }
      function C(e) {
        return e.__data__;
      }
      function N(e) {
        return "object" === typeof e && "length" in e ? e : Array.from(e);
      }
      function P(e, t) {
        return e < t ? -1 : e > t ? 1 : e >= t ? 0 : NaN;
      }
      function z(e, t) {
        var n =
          ("undefined" !== typeof Symbol && e[Symbol.iterator]) ||
          e["@@iterator"];
        if (!n) {
          if (
            Array.isArray(e) ||
            (n = a(e)) ||
            (t && e && "number" === typeof e.length)
          ) {
            n && (e = n);
            var r = 0,
              i = function () {};
            return {
              s: i,
              n: function () {
                return r >= e.length
                  ? { done: !0 }
                  : { done: !1, value: e[r++] };
              },
              e: function (e) {
                throw e;
              },
              f: i,
            };
          }
          throw new TypeError(
            "Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
          );
        }
        var o,
          l = !0,
          u = !1;
        return {
          s: function () {
            n = n.call(e);
          },
          n: function () {
            var e = n.next();
            return (l = e.done), e;
          },
          e: function (e) {
            (u = !0), (o = e);
          },
          f: function () {
            try {
              l || null == n.return || n.return();
            } finally {
              if (u) throw o;
            }
          },
        };
      }
      S.prototype = {
        constructor: S,
        appendChild: function (e) {
          return this._parent.insertBefore(e, this._next);
        },
        insertBefore: function (e, t) {
          return this._parent.insertBefore(e, t);
        },
        querySelector: function (e) {
          return this._parent.querySelector(e);
        },
        querySelectorAll: function (e) {
          return this._parent.querySelectorAll(e);
        },
      };
      var M = "http://www.w3.org/1999/xhtml",
        T = {
          svg: "http://www.w3.org/2000/svg",
          xhtml: M,
          xlink: "http://www.w3.org/1999/xlink",
          xml: "http://www.w3.org/XML/1998/namespace",
          xmlns: "http://www.w3.org/2000/xmlns/",
        };
      function L(e) {
        var t = (e += ""),
          n = t.indexOf(":");
        return (
          n >= 0 && "xmlns" !== (t = e.slice(0, n)) && (e = e.slice(n + 1)),
          T.hasOwnProperty(t) ? { space: T[t], local: e } : e
        );
      }
      function O(e) {
        return function () {
          this.removeAttribute(e);
        };
      }
      function R(e) {
        return function () {
          this.removeAttributeNS(e.space, e.local);
        };
      }
      function A(e, t) {
        return function () {
          this.setAttribute(e, t);
        };
      }
      function I(e, t) {
        return function () {
          this.setAttributeNS(e.space, e.local, t);
        };
      }
      function F(e, t) {
        return function () {
          var n = t.apply(this, arguments);
          null == n ? this.removeAttribute(e) : this.setAttribute(e, n);
        };
      }
      function D(e, t) {
        return function () {
          var n = t.apply(this, arguments);
          null == n
            ? this.removeAttributeNS(e.space, e.local)
            : this.setAttributeNS(e.space, e.local, n);
        };
      }
      function j(e) {
        return (
          (e.ownerDocument && e.ownerDocument.defaultView) ||
          (e.document && e) ||
          e.defaultView
        );
      }
      function U(e) {
        return function () {
          this.style.removeProperty(e);
        };
      }
      function V(e, t, n) {
        return function () {
          this.style.setProperty(e, t, n);
        };
      }
      function B(e, t, n) {
        return function () {
          var r = t.apply(this, arguments);
          null == r
            ? this.style.removeProperty(e)
            : this.style.setProperty(e, r, n);
        };
      }
      function $(e, t) {
        return (
          e.style.getPropertyValue(t) ||
          j(e).getComputedStyle(e, null).getPropertyValue(t)
        );
      }
      function H(e) {
        return function () {
          delete this[e];
        };
      }
      function W(e, t) {
        return function () {
          this[e] = t;
        };
      }
      function Q(e, t) {
        return function () {
          var n = t.apply(this, arguments);
          null == n ? delete this[e] : (this[e] = n);
        };
      }
      function q(e) {
        return e.trim().split(/^|\s+/);
      }
      function Y(e) {
        return e.classList || new X(e);
      }
      function X(e) {
        (this._node = e), (this._names = q(e.getAttribute("class") || ""));
      }
      function K(e, t) {
        for (var n = Y(e), r = -1, i = t.length; ++r < i; ) n.add(t[r]);
      }
      function G(e, t) {
        for (var n = Y(e), r = -1, i = t.length; ++r < i; ) n.remove(t[r]);
      }
      function Z(e) {
        return function () {
          K(this, e);
        };
      }
      function J(e) {
        return function () {
          G(this, e);
        };
      }
      function ee(e, t) {
        return function () {
          (t.apply(this, arguments) ? K : G)(this, e);
        };
      }
      function te() {
        this.textContent = "";
      }
      function ne(e) {
        return function () {
          this.textContent = e;
        };
      }
      function re(e) {
        return function () {
          var t = e.apply(this, arguments);
          this.textContent = null == t ? "" : t;
        };
      }
      function ie() {
        this.innerHTML = "";
      }
      function oe(e) {
        return function () {
          this.innerHTML = e;
        };
      }
      function ae(e) {
        return function () {
          var t = e.apply(this, arguments);
          this.innerHTML = null == t ? "" : t;
        };
      }
      function le() {
        this.nextSibling && this.parentNode.appendChild(this);
      }
      function ue() {
        this.previousSibling &&
          this.parentNode.insertBefore(this, this.parentNode.firstChild);
      }
      function se(e) {
        return function () {
          var t = this.ownerDocument,
            n = this.namespaceURI;
          return n === M && t.documentElement.namespaceURI === M
            ? t.createElement(e)
            : t.createElementNS(n, e);
        };
      }
      function ce(e) {
        return function () {
          return this.ownerDocument.createElementNS(e.space, e.local);
        };
      }
      function fe(e) {
        var t = L(e);
        return (t.local ? ce : se)(t);
      }
      function de() {
        return null;
      }
      function pe() {
        var e = this.parentNode;
        e && e.removeChild(this);
      }
      function he() {
        var e = this.cloneNode(!1),
          t = this.parentNode;
        return t ? t.insertBefore(e, this.nextSibling) : e;
      }
      function ve() {
        var e = this.cloneNode(!0),
          t = this.parentNode;
        return t ? t.insertBefore(e, this.nextSibling) : e;
      }
      function me(e) {
        return function () {
          var t = this.__on;
          if (t) {
            for (var n, r = 0, i = -1, o = t.length; r < o; ++r)
              (n = t[r]),
                (e.type && n.type !== e.type) || n.name !== e.name
                  ? (t[++i] = n)
                  : this.removeEventListener(n.type, n.listener, n.options);
            ++i ? (t.length = i) : delete this.__on;
          }
        };
      }
      function ye(e, t, n) {
        return function () {
          var r,
            i = this.__on,
            o = (function (e) {
              return function (t) {
                e.call(this, t, this.__data__);
              };
            })(t);
          if (i)
            for (var a = 0, l = i.length; a < l; ++a)
              if ((r = i[a]).type === e.type && r.name === e.name)
                return (
                  this.removeEventListener(r.type, r.listener, r.options),
                  this.addEventListener(
                    r.type,
                    (r.listener = o),
                    (r.options = n)
                  ),
                  void (r.value = t)
                );
          this.addEventListener(e.type, o, n),
            (r = {
              type: e.type,
              name: e.name,
              value: t,
              listener: o,
              options: n,
            }),
            i ? i.push(r) : (this.__on = [r]);
        };
      }
      function ge(e, t, n) {
        var r = j(e),
          i = r.CustomEvent;
        "function" === typeof i
          ? (i = new i(t, n))
          : ((i = r.document.createEvent("Event")),
            n
              ? (i.initEvent(t, n.bubbles, n.cancelable), (i.detail = n.detail))
              : i.initEvent(t, !1, !1)),
          e.dispatchEvent(i);
      }
      function be(e, t) {
        return function () {
          return ge(this, e, t);
        };
      }
      function we(e, t) {
        return function () {
          return ge(this, e, t.apply(this, arguments));
        };
      }
      X.prototype = {
        add: function (e) {
          this._names.indexOf(e) < 0 &&
            (this._names.push(e),
            this._node.setAttribute("class", this._names.join(" ")));
        },
        remove: function (e) {
          var t = this._names.indexOf(e);
          t >= 0 &&
            (this._names.splice(t, 1),
            this._node.setAttribute("class", this._names.join(" ")));
        },
        contains: function (e) {
          return this._names.indexOf(e) >= 0;
        },
      };
      var _e = i().mark(ke);
      function ke() {
        var e, t, n, r, o, a, l;
        return i().wrap(
          function (i) {
            for (;;)
              switch ((i.prev = i.next)) {
                case 0:
                  (e = this._groups), (t = 0), (n = e.length);
                case 1:
                  if (!(t < n)) {
                    i.next = 13;
                    break;
                  }
                  (r = e[t]), (o = 0), (a = r.length);
                case 3:
                  if (!(o < a)) {
                    i.next = 10;
                    break;
                  }
                  if (!(l = r[o])) {
                    i.next = 7;
                    break;
                  }
                  return (i.next = 7), l;
                case 7:
                  ++o, (i.next = 3);
                  break;
                case 10:
                  ++t, (i.next = 1);
                  break;
                case 13:
                case "end":
                  return i.stop();
              }
          },
          _e,
          this
        );
      }
      var Se = [null];
      function xe(e, t) {
        (this._groups = e), (this._parents = t);
      }
      function Ee() {
        return new xe([[document.documentElement]], Se);
      }
      xe.prototype = Ee.prototype = c(
        {
          constructor: xe,
          select: function (e) {
            "function" !== typeof e && (e = d(e));
            for (
              var t = this._groups, n = t.length, r = new Array(n), i = 0;
              i < n;
              ++i
            )
              for (
                var o,
                  a,
                  l = t[i],
                  u = l.length,
                  s = (r[i] = new Array(u)),
                  c = 0;
                c < u;
                ++c
              )
                (o = l[c]) &&
                  (a = e.call(o, o.__data__, c, l)) &&
                  ("__data__" in o && (a.__data__ = o.__data__), (s[c] = a));
            return new xe(r, this._parents);
          },
          selectAll: function (e) {
            e = "function" === typeof e ? v(e) : h(e);
            for (
              var t = this._groups, n = t.length, r = [], i = [], o = 0;
              o < n;
              ++o
            )
              for (var a, l = t[o], u = l.length, s = 0; s < u; ++s)
                (a = l[s]) && (r.push(e.call(a, a.__data__, s, l)), i.push(a));
            return new xe(r, i);
          },
          selectChild: function (e) {
            return this.select(
              null == e
                ? b
                : (function (e) {
                    return function () {
                      return g.call(this.children, e);
                    };
                  })("function" === typeof e ? e : y(e))
            );
          },
          selectChildren: function (e) {
            return this.selectAll(
              null == e
                ? _
                : (function (e) {
                    return function () {
                      return w.call(this.children, e);
                    };
                  })("function" === typeof e ? e : y(e))
            );
          },
          filter: function (e) {
            "function" !== typeof e && (e = m(e));
            for (
              var t = this._groups, n = t.length, r = new Array(n), i = 0;
              i < n;
              ++i
            )
              for (
                var o, a = t[i], l = a.length, u = (r[i] = []), s = 0;
                s < l;
                ++s
              )
                (o = a[s]) && e.call(o, o.__data__, s, a) && u.push(o);
            return new xe(r, this._parents);
          },
          data: function (e, t) {
            if (!arguments.length) return Array.from(this, C);
            var n,
              r = t ? E : x,
              i = this._parents,
              o = this._groups;
            "function" !== typeof e &&
              ((n = e),
              (e = function () {
                return n;
              }));
            for (
              var a = o.length,
                l = new Array(a),
                u = new Array(a),
                s = new Array(a),
                c = 0;
              c < a;
              ++c
            ) {
              var f = i[c],
                d = o[c],
                p = d.length,
                h = N(e.call(f, f && f.__data__, c, i)),
                v = h.length,
                m = (u[c] = new Array(v)),
                y = (l[c] = new Array(v));
              r(f, d, m, y, (s[c] = new Array(p)), h, t);
              for (var g, b, w = 0, _ = 0; w < v; ++w)
                if ((g = m[w])) {
                  for (w >= _ && (_ = w + 1); !(b = y[_]) && ++_ < v; );
                  g._next = b || null;
                }
            }
            return ((l = new xe(l, i))._enter = u), (l._exit = s), l;
          },
          enter: function () {
            return new xe(this._enter || this._groups.map(k), this._parents);
          },
          exit: function () {
            return new xe(this._exit || this._groups.map(k), this._parents);
          },
          join: function (e, t, n) {
            var r = this.enter(),
              i = this,
              o = this.exit();
            return (
              "function" === typeof e
                ? (r = e(r)) && (r = r.selection())
                : (r = r.append(e + "")),
              null != t && (i = t(i)) && (i = i.selection()),
              null == n ? o.remove() : n(o),
              r && i ? r.merge(i).order() : i
            );
          },
          merge: function (e) {
            for (
              var t = e.selection ? e.selection() : e,
                n = this._groups,
                r = t._groups,
                i = n.length,
                o = r.length,
                a = Math.min(i, o),
                l = new Array(i),
                u = 0;
              u < a;
              ++u
            )
              for (
                var s,
                  c = n[u],
                  f = r[u],
                  d = c.length,
                  p = (l[u] = new Array(d)),
                  h = 0;
                h < d;
                ++h
              )
                (s = c[h] || f[h]) && (p[h] = s);
            for (; u < i; ++u) l[u] = n[u];
            return new xe(l, this._parents);
          },
          selection: function () {
            return this;
          },
          order: function () {
            for (var e = this._groups, t = -1, n = e.length; ++t < n; )
              for (var r, i = e[t], o = i.length - 1, a = i[o]; --o >= 0; )
                (r = i[o]) &&
                  (a &&
                    4 ^ r.compareDocumentPosition(a) &&
                    a.parentNode.insertBefore(r, a),
                  (a = r));
            return this;
          },
          sort: function (e) {
            function t(t, n) {
              return t && n ? e(t.__data__, n.__data__) : !t - !n;
            }
            e || (e = P);
            for (
              var n = this._groups, r = n.length, i = new Array(r), o = 0;
              o < r;
              ++o
            ) {
              for (
                var a, l = n[o], u = l.length, s = (i[o] = new Array(u)), c = 0;
                c < u;
                ++c
              )
                (a = l[c]) && (s[c] = a);
              s.sort(t);
            }
            return new xe(i, this._parents).order();
          },
          call: function () {
            var e = arguments[0];
            return (arguments[0] = this), e.apply(null, arguments), this;
          },
          nodes: function () {
            return Array.from(this);
          },
          node: function () {
            for (var e = this._groups, t = 0, n = e.length; t < n; ++t)
              for (var r = e[t], i = 0, o = r.length; i < o; ++i) {
                var a = r[i];
                if (a) return a;
              }
            return null;
          },
          size: function () {
            var e,
              t = 0,
              n = z(this);
            try {
              for (n.s(); !(e = n.n()).done; ) {
                e.value;
                ++t;
              }
            } catch (r) {
              n.e(r);
            } finally {
              n.f();
            }
            return t;
          },
          empty: function () {
            return !this.node();
          },
          each: function (e) {
            for (var t = this._groups, n = 0, r = t.length; n < r; ++n)
              for (var i, o = t[n], a = 0, l = o.length; a < l; ++a)
                (i = o[a]) && e.call(i, i.__data__, a, o);
            return this;
          },
          attr: function (e, t) {
            var n = L(e);
            if (arguments.length < 2) {
              var r = this.node();
              return n.local
                ? r.getAttributeNS(n.space, n.local)
                : r.getAttribute(n);
            }
            return this.each(
              (null == t
                ? n.local
                  ? R
                  : O
                : "function" === typeof t
                ? n.local
                  ? D
                  : F
                : n.local
                ? I
                : A)(n, t)
            );
          },
          style: function (e, t, n) {
            return arguments.length > 1
              ? this.each(
                  (null == t ? U : "function" === typeof t ? B : V)(
                    e,
                    t,
                    null == n ? "" : n
                  )
                )
              : $(this.node(), e);
          },
          property: function (e, t) {
            return arguments.length > 1
              ? this.each(
                  (null == t ? H : "function" === typeof t ? Q : W)(e, t)
                )
              : this.node()[e];
          },
          classed: function (e, t) {
            var n = q(e + "");
            if (arguments.length < 2) {
              for (var r = Y(this.node()), i = -1, o = n.length; ++i < o; )
                if (!r.contains(n[i])) return !1;
              return !0;
            }
            return this.each(("function" === typeof t ? ee : t ? Z : J)(n, t));
          },
          text: function (e) {
            return arguments.length
              ? this.each(
                  null == e ? te : ("function" === typeof e ? re : ne)(e)
                )
              : this.node().textContent;
          },
          html: function (e) {
            return arguments.length
              ? this.each(
                  null == e ? ie : ("function" === typeof e ? ae : oe)(e)
                )
              : this.node().innerHTML;
          },
          raise: function () {
            return this.each(le);
          },
          lower: function () {
            return this.each(ue);
          },
          append: function (e) {
            var t = "function" === typeof e ? e : fe(e);
            return this.select(function () {
              return this.appendChild(t.apply(this, arguments));
            });
          },
          insert: function (e, t) {
            var n = "function" === typeof e ? e : fe(e),
              r = null == t ? de : "function" === typeof t ? t : d(t);
            return this.select(function () {
              return this.insertBefore(
                n.apply(this, arguments),
                r.apply(this, arguments) || null
              );
            });
          },
          remove: function () {
            return this.each(pe);
          },
          clone: function (e) {
            return this.select(e ? ve : he);
          },
          datum: function (e) {
            return arguments.length
              ? this.property("__data__", e)
              : this.node().__data__;
          },
          on: function (e, t, n) {
            var r,
              i,
              o = (function (e) {
                return e
                  .trim()
                  .split(/^|\s+/)
                  .map(function (e) {
                    var t = "",
                      n = e.indexOf(".");
                    return (
                      n >= 0 && ((t = e.slice(n + 1)), (e = e.slice(0, n))),
                      { type: e, name: t }
                    );
                  });
              })(e + ""),
              a = o.length;
            if (!(arguments.length < 2)) {
              for (l = t ? ye : me, r = 0; r < a; ++r) this.each(l(o[r], t, n));
              return this;
            }
            var l = this.node().__on;
            if (l)
              for (var u, s = 0, c = l.length; s < c; ++s)
                for (r = 0, u = l[s]; r < a; ++r)
                  if ((i = o[r]).type === u.type && i.name === u.name)
                    return u.value;
          },
          dispatch: function (e, t) {
            return this.each(("function" === typeof t ? we : be)(e, t));
          },
        },
        Symbol.iterator,
        ke
      );
      var Ce = Ee,
        Ne = { value: function () {} };
      function Pe() {
        for (var e, t = 0, n = arguments.length, r = {}; t < n; ++t) {
          if (!(e = arguments[t] + "") || e in r || /[\s.]/.test(e))
            throw new Error("illegal type: " + e);
          r[e] = [];
        }
        return new ze(r);
      }
      function ze(e) {
        this._ = e;
      }
      function Me(e, t) {
        for (var n, r = 0, i = e.length; r < i; ++r)
          if ((n = e[r]).name === t) return n.value;
      }
      function Te(e, t, n) {
        for (var r = 0, i = e.length; r < i; ++r)
          if (e[r].name === t) {
            (e[r] = Ne), (e = e.slice(0, r).concat(e.slice(r + 1)));
            break;
          }
        return null != n && e.push({ name: t, value: n }), e;
      }
      ze.prototype = Pe.prototype = {
        constructor: ze,
        on: function (e, t) {
          var n,
            r,
            i = this._,
            o =
              ((r = i),
              (e + "")
                .trim()
                .split(/^|\s+/)
                .map(function (e) {
                  var t = "",
                    n = e.indexOf(".");
                  if (
                    (n >= 0 && ((t = e.slice(n + 1)), (e = e.slice(0, n))),
                    e && !r.hasOwnProperty(e))
                  )
                    throw new Error("unknown type: " + e);
                  return { type: e, name: t };
                })),
            a = -1,
            l = o.length;
          if (!(arguments.length < 2)) {
            if (null != t && "function" !== typeof t)
              throw new Error("invalid callback: " + t);
            for (; ++a < l; )
              if ((n = (e = o[a]).type)) i[n] = Te(i[n], e.name, t);
              else if (null == t) for (n in i) i[n] = Te(i[n], e.name, null);
            return this;
          }
          for (; ++a < l; )
            if ((n = (e = o[a]).type) && (n = Me(i[n], e.name))) return n;
        },
        copy: function () {
          var e = {},
            t = this._;
          for (var n in t) e[n] = t[n].slice();
          return new ze(e);
        },
        call: function (e, t) {
          if ((n = arguments.length - 2) > 0)
            for (var n, r, i = new Array(n), o = 0; o < n; ++o)
              i[o] = arguments[o + 2];
          if (!this._.hasOwnProperty(e)) throw new Error("unknown type: " + e);
          for (o = 0, n = (r = this._[e]).length; o < n; ++o)
            r[o].value.apply(t, i);
        },
        apply: function (e, t, n) {
          if (!this._.hasOwnProperty(e)) throw new Error("unknown type: " + e);
          for (var r = this._[e], i = 0, o = r.length; i < o; ++i)
            r[i].value.apply(t, n);
        },
      };
      var Le,
        Oe,
        Re = Pe,
        Ae = 0,
        Ie = 0,
        Fe = 0,
        De = 1e3,
        je = 0,
        Ue = 0,
        Ve = 0,
        Be =
          "object" === typeof performance && performance.now
            ? performance
            : Date,
        $e =
          "object" === typeof window && window.requestAnimationFrame
            ? window.requestAnimationFrame.bind(window)
            : function (e) {
                setTimeout(e, 17);
              };
      function He() {
        return Ue || ($e(We), (Ue = Be.now() + Ve));
      }
      function We() {
        Ue = 0;
      }
      function Qe() {
        this._call = this._time = this._next = null;
      }
      function qe(e, t, n) {
        var r = new Qe();
        return r.restart(e, t, n), r;
      }
      function Ye() {
        (Ue = (je = Be.now()) + Ve), (Ae = Ie = 0);
        try {
          !(function () {
            He(), ++Ae;
            for (var e, t = Le; t; )
              (e = Ue - t._time) >= 0 && t._call.call(void 0, e), (t = t._next);
            --Ae;
          })();
        } finally {
          (Ae = 0),
            (function () {
              var e,
                t,
                n = Le,
                r = 1 / 0;
              for (; n; )
                n._call
                  ? (r > n._time && (r = n._time), (e = n), (n = n._next))
                  : ((t = n._next),
                    (n._next = null),
                    (n = e ? (e._next = t) : (Le = t)));
              (Oe = e), Ke(r);
            })(),
            (Ue = 0);
        }
      }
      function Xe() {
        var e = Be.now(),
          t = e - je;
        t > De && ((Ve -= t), (je = e));
      }
      function Ke(e) {
        Ae ||
          (Ie && (Ie = clearTimeout(Ie)),
          e - Ue > 24
            ? (e < 1 / 0 && (Ie = setTimeout(Ye, e - Be.now() - Ve)),
              Fe && (Fe = clearInterval(Fe)))
            : (Fe || ((je = Be.now()), (Fe = setInterval(Xe, De))),
              (Ae = 1),
              $e(Ye)));
      }
      function Ge(e, t, n) {
        var r = new Qe();
        return (
          (t = null == t ? 0 : +t),
          r.restart(
            function (n) {
              r.stop(), e(n + t);
            },
            t,
            n
          ),
          r
        );
      }
      Qe.prototype = qe.prototype = {
        constructor: Qe,
        restart: function (e, t, n) {
          if ("function" !== typeof e)
            throw new TypeError("callback is not a function");
          (n = (null == n ? He() : +n) + (null == t ? 0 : +t)),
            this._next ||
              Oe === this ||
              (Oe ? (Oe._next = this) : (Le = this), (Oe = this)),
            (this._call = e),
            (this._time = n),
            Ke();
        },
        stop: function () {
          this._call && ((this._call = null), (this._time = 1 / 0), Ke());
        },
      };
      var Ze = Re("start", "end", "cancel", "interrupt"),
        Je = [],
        et = 0,
        tt = 1,
        nt = 2,
        rt = 3,
        it = 4,
        ot = 5,
        at = 6;
      function lt(e, t, n, r, i, o) {
        var a = e.__transition;
        if (a) {
          if (n in a) return;
        } else e.__transition = {};
        !(function (e, t, n) {
          var r,
            i = e.__transition;
          function o(e) {
            (n.state = tt),
              n.timer.restart(a, n.delay, n.time),
              n.delay <= e && a(e - n.delay);
          }
          function a(o) {
            var s, c, f, d;
            if (n.state !== tt) return u();
            for (s in i)
              if ((d = i[s]).name === n.name) {
                if (d.state === rt) return Ge(a);
                d.state === it
                  ? ((d.state = at),
                    d.timer.stop(),
                    d.on.call("interrupt", e, e.__data__, d.index, d.group),
                    delete i[s])
                  : +s < t &&
                    ((d.state = at),
                    d.timer.stop(),
                    d.on.call("cancel", e, e.__data__, d.index, d.group),
                    delete i[s]);
              }
            if (
              (Ge(function () {
                n.state === rt &&
                  ((n.state = it), n.timer.restart(l, n.delay, n.time), l(o));
              }),
              (n.state = nt),
              n.on.call("start", e, e.__data__, n.index, n.group),
              n.state === nt)
            ) {
              for (
                n.state = rt,
                  r = new Array((f = n.tween.length)),
                  s = 0,
                  c = -1;
                s < f;
                ++s
              )
                (d = n.tween[s].value.call(e, e.__data__, n.index, n.group)) &&
                  (r[++c] = d);
              r.length = c + 1;
            }
          }
          function l(t) {
            for (
              var i =
                  t < n.duration
                    ? n.ease.call(null, t / n.duration)
                    : (n.timer.restart(u), (n.state = ot), 1),
                o = -1,
                a = r.length;
              ++o < a;

            )
              r[o].call(e, i);
            n.state === ot &&
              (n.on.call("end", e, e.__data__, n.index, n.group), u());
          }
          function u() {
            for (var r in ((n.state = at), n.timer.stop(), delete i[t], i))
              return;
            delete e.__transition;
          }
          (i[t] = n), (n.timer = qe(o, 0, n.time));
        })(e, n, {
          name: t,
          index: r,
          group: i,
          on: Ze,
          tween: Je,
          time: o.time,
          delay: o.delay,
          duration: o.duration,
          ease: o.ease,
          timer: null,
          state: et,
        });
      }
      function ut(e, t) {
        var n = ct(e, t);
        if (n.state > et) throw new Error("too late; already scheduled");
        return n;
      }
      function st(e, t) {
        var n = ct(e, t);
        if (n.state > rt) throw new Error("too late; already running");
        return n;
      }
      function ct(e, t) {
        var n = e.__transition;
        if (!n || !(n = n[t])) throw new Error("transition not found");
        return n;
      }
      function ft(e, t) {
        var n,
          r,
          i,
          o = e.__transition,
          a = !0;
        if (o) {
          for (i in ((t = null == t ? null : t + ""), o))
            (n = o[i]).name === t
              ? ((r = n.state > nt && n.state < ot),
                (n.state = at),
                n.timer.stop(),
                n.on.call(
                  r ? "interrupt" : "cancel",
                  e,
                  e.__data__,
                  n.index,
                  n.group
                ),
                delete o[i])
              : (a = !1);
          a && delete e.__transition;
        }
      }
      function dt(e, t) {
        return (
          (e = +e),
          (t = +t),
          function (n) {
            return e * (1 - n) + t * n;
          }
        );
      }
      var pt,
        ht = 180 / Math.PI,
        vt = {
          translateX: 0,
          translateY: 0,
          rotate: 0,
          skewX: 0,
          scaleX: 1,
          scaleY: 1,
        };
      function mt(e, t, n, r, i, o) {
        var a, l, u;
        return (
          (a = Math.sqrt(e * e + t * t)) && ((e /= a), (t /= a)),
          (u = e * n + t * r) && ((n -= e * u), (r -= t * u)),
          (l = Math.sqrt(n * n + r * r)) && ((n /= l), (r /= l), (u /= l)),
          e * r < t * n && ((e = -e), (t = -t), (u = -u), (a = -a)),
          {
            translateX: i,
            translateY: o,
            rotate: Math.atan2(t, e) * ht,
            skewX: Math.atan(u) * ht,
            scaleX: a,
            scaleY: l,
          }
        );
      }
      function yt(e, t, n, r) {
        function i(e) {
          return e.length ? e.pop() + " " : "";
        }
        return function (o, a) {
          var l = [],
            u = [];
          return (
            (o = e(o)),
            (a = e(a)),
            (function (e, r, i, o, a, l) {
              if (e !== i || r !== o) {
                var u = a.push("translate(", null, t, null, n);
                l.push({ i: u - 4, x: dt(e, i) }, { i: u - 2, x: dt(r, o) });
              } else (i || o) && a.push("translate(" + i + t + o + n);
            })(o.translateX, o.translateY, a.translateX, a.translateY, l, u),
            (function (e, t, n, o) {
              e !== t
                ? (e - t > 180 ? (t += 360) : t - e > 180 && (e += 360),
                  o.push({
                    i: n.push(i(n) + "rotate(", null, r) - 2,
                    x: dt(e, t),
                  }))
                : t && n.push(i(n) + "rotate(" + t + r);
            })(o.rotate, a.rotate, l, u),
            (function (e, t, n, o) {
              e !== t
                ? o.push({
                    i: n.push(i(n) + "skewX(", null, r) - 2,
                    x: dt(e, t),
                  })
                : t && n.push(i(n) + "skewX(" + t + r);
            })(o.skewX, a.skewX, l, u),
            (function (e, t, n, r, o, a) {
              if (e !== n || t !== r) {
                var l = o.push(i(o) + "scale(", null, ",", null, ")");
                a.push({ i: l - 4, x: dt(e, n) }, { i: l - 2, x: dt(t, r) });
              } else
                (1 === n && 1 === r) ||
                  o.push(i(o) + "scale(" + n + "," + r + ")");
            })(o.scaleX, o.scaleY, a.scaleX, a.scaleY, l, u),
            (o = a = null),
            function (e) {
              for (var t, n = -1, r = u.length; ++n < r; )
                l[(t = u[n]).i] = t.x(e);
              return l.join("");
            }
          );
        };
      }
      var gt = yt(
          function (e) {
            var t = new (
              "function" === typeof DOMMatrix ? DOMMatrix : WebKitCSSMatrix
            )(e + "");
            return t.isIdentity ? vt : mt(t.a, t.b, t.c, t.d, t.e, t.f);
          },
          "px, ",
          "px)",
          "deg)"
        ),
        bt = yt(
          function (e) {
            return null == e
              ? vt
              : (pt ||
                  (pt = document.createElementNS(
                    "http://www.w3.org/2000/svg",
                    "g"
                  )),
                pt.setAttribute("transform", e),
                (e = pt.transform.baseVal.consolidate())
                  ? mt((e = e.matrix).a, e.b, e.c, e.d, e.e, e.f)
                  : vt);
          },
          ", ",
          ")",
          ")"
        );
      function wt(e, t) {
        var n, r;
        return function () {
          var i = st(this, e),
            o = i.tween;
          if (o !== n)
            for (var a = 0, l = (r = n = o).length; a < l; ++a)
              if (r[a].name === t) {
                (r = r.slice()).splice(a, 1);
                break;
              }
          i.tween = r;
        };
      }
      function _t(e, t, n) {
        var r, i;
        if ("function" !== typeof n) throw new Error();
        return function () {
          var o = st(this, e),
            a = o.tween;
          if (a !== r) {
            i = (r = a).slice();
            for (var l = { name: t, value: n }, u = 0, s = i.length; u < s; ++u)
              if (i[u].name === t) {
                i[u] = l;
                break;
              }
            u === s && i.push(l);
          }
          o.tween = i;
        };
      }
      function kt(e, t, n) {
        var r = e._id;
        return (
          e.each(function () {
            var e = st(this, r);
            (e.value || (e.value = {}))[t] = n.apply(this, arguments);
          }),
          function (e) {
            return ct(e, r).value[t];
          }
        );
      }
      function St(e, t, n) {
        (e.prototype = t.prototype = n), (n.constructor = e);
      }
      function xt(e, t) {
        var n = Object.create(e.prototype);
        for (var r in t) n[r] = t[r];
        return n;
      }
      function Et() {}
      var Ct = 0.7,
        Nt = 1 / Ct,
        Pt = "\\s*([+-]?\\d+)\\s*",
        zt = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)\\s*",
        Mt = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)%\\s*",
        Tt = /^#([0-9a-f]{3,8})$/,
        Lt = new RegExp(
          "^rgb\\(".concat(Pt, ",").concat(Pt, ",").concat(Pt, "\\)$")
        ),
        Ot = new RegExp(
          "^rgb\\(".concat(Mt, ",").concat(Mt, ",").concat(Mt, "\\)$")
        ),
        Rt = new RegExp(
          "^rgba\\("
            .concat(Pt, ",")
            .concat(Pt, ",")
            .concat(Pt, ",")
            .concat(zt, "\\)$")
        ),
        At = new RegExp(
          "^rgba\\("
            .concat(Mt, ",")
            .concat(Mt, ",")
            .concat(Mt, ",")
            .concat(zt, "\\)$")
        ),
        It = new RegExp(
          "^hsl\\(".concat(zt, ",").concat(Mt, ",").concat(Mt, "\\)$")
        ),
        Ft = new RegExp(
          "^hsla\\("
            .concat(zt, ",")
            .concat(Mt, ",")
            .concat(Mt, ",")
            .concat(zt, "\\)$")
        ),
        Dt = {
          aliceblue: 15792383,
          antiquewhite: 16444375,
          aqua: 65535,
          aquamarine: 8388564,
          azure: 15794175,
          beige: 16119260,
          bisque: 16770244,
          black: 0,
          blanchedalmond: 16772045,
          blue: 255,
          blueviolet: 9055202,
          brown: 10824234,
          burlywood: 14596231,
          cadetblue: 6266528,
          chartreuse: 8388352,
          chocolate: 13789470,
          coral: 16744272,
          cornflowerblue: 6591981,
          cornsilk: 16775388,
          crimson: 14423100,
          cyan: 65535,
          darkblue: 139,
          darkcyan: 35723,
          darkgoldenrod: 12092939,
          darkgray: 11119017,
          darkgreen: 25600,
          darkgrey: 11119017,
          darkkhaki: 12433259,
          darkmagenta: 9109643,
          darkolivegreen: 5597999,
          darkorange: 16747520,
          darkorchid: 10040012,
          darkred: 9109504,
          darksalmon: 15308410,
          darkseagreen: 9419919,
          darkslateblue: 4734347,
          darkslategray: 3100495,
          darkslategrey: 3100495,
          darkturquoise: 52945,
          darkviolet: 9699539,
          deeppink: 16716947,
          deepskyblue: 49151,
          dimgray: 6908265,
          dimgrey: 6908265,
          dodgerblue: 2003199,
          firebrick: 11674146,
          floralwhite: 16775920,
          forestgreen: 2263842,
          fuchsia: 16711935,
          gainsboro: 14474460,
          ghostwhite: 16316671,
          gold: 16766720,
          goldenrod: 14329120,
          gray: 8421504,
          green: 32768,
          greenyellow: 11403055,
          grey: 8421504,
          honeydew: 15794160,
          hotpink: 16738740,
          indianred: 13458524,
          indigo: 4915330,
          ivory: 16777200,
          khaki: 15787660,
          lavender: 15132410,
          lavenderblush: 16773365,
          lawngreen: 8190976,
          lemonchiffon: 16775885,
          lightblue: 11393254,
          lightcoral: 15761536,
          lightcyan: 14745599,
          lightgoldenrodyellow: 16448210,
          lightgray: 13882323,
          lightgreen: 9498256,
          lightgrey: 13882323,
          lightpink: 16758465,
          lightsalmon: 16752762,
          lightseagreen: 2142890,
          lightskyblue: 8900346,
          lightslategray: 7833753,
          lightslategrey: 7833753,
          lightsteelblue: 11584734,
          lightyellow: 16777184,
          lime: 65280,
          limegreen: 3329330,
          linen: 16445670,
          magenta: 16711935,
          maroon: 8388608,
          mediumaquamarine: 6737322,
          mediumblue: 205,
          mediumorchid: 12211667,
          mediumpurple: 9662683,
          mediumseagreen: 3978097,
          mediumslateblue: 8087790,
          mediumspringgreen: 64154,
          mediumturquoise: 4772300,
          mediumvioletred: 13047173,
          midnightblue: 1644912,
          mintcream: 16121850,
          mistyrose: 16770273,
          moccasin: 16770229,
          navajowhite: 16768685,
          navy: 128,
          oldlace: 16643558,
          olive: 8421376,
          olivedrab: 7048739,
          orange: 16753920,
          orangered: 16729344,
          orchid: 14315734,
          palegoldenrod: 15657130,
          palegreen: 10025880,
          paleturquoise: 11529966,
          palevioletred: 14381203,
          papayawhip: 16773077,
          peachpuff: 16767673,
          peru: 13468991,
          pink: 16761035,
          plum: 14524637,
          powderblue: 11591910,
          purple: 8388736,
          rebeccapurple: 6697881,
          red: 16711680,
          rosybrown: 12357519,
          royalblue: 4286945,
          saddlebrown: 9127187,
          salmon: 16416882,
          sandybrown: 16032864,
          seagreen: 3050327,
          seashell: 16774638,
          sienna: 10506797,
          silver: 12632256,
          skyblue: 8900331,
          slateblue: 6970061,
          slategray: 7372944,
          slategrey: 7372944,
          snow: 16775930,
          springgreen: 65407,
          steelblue: 4620980,
          tan: 13808780,
          teal: 32896,
          thistle: 14204888,
          tomato: 16737095,
          turquoise: 4251856,
          violet: 15631086,
          wheat: 16113331,
          white: 16777215,
          whitesmoke: 16119285,
          yellow: 16776960,
          yellowgreen: 10145074,
        };
      function jt() {
        return this.rgb().formatHex();
      }
      function Ut() {
        return this.rgb().formatRgb();
      }
      function Vt(e) {
        var t, n;
        return (
          (e = (e + "").trim().toLowerCase()),
          (t = Tt.exec(e))
            ? ((n = t[1].length),
              (t = parseInt(t[1], 16)),
              6 === n
                ? Bt(t)
                : 3 === n
                ? new Wt(
                    ((t >> 8) & 15) | ((t >> 4) & 240),
                    ((t >> 4) & 15) | (240 & t),
                    ((15 & t) << 4) | (15 & t),
                    1
                  )
                : 8 === n
                ? $t(
                    (t >> 24) & 255,
                    (t >> 16) & 255,
                    (t >> 8) & 255,
                    (255 & t) / 255
                  )
                : 4 === n
                ? $t(
                    ((t >> 12) & 15) | ((t >> 8) & 240),
                    ((t >> 8) & 15) | ((t >> 4) & 240),
                    ((t >> 4) & 15) | (240 & t),
                    (((15 & t) << 4) | (15 & t)) / 255
                  )
                : null)
            : (t = Lt.exec(e))
            ? new Wt(t[1], t[2], t[3], 1)
            : (t = Ot.exec(e))
            ? new Wt(
                (255 * t[1]) / 100,
                (255 * t[2]) / 100,
                (255 * t[3]) / 100,
                1
              )
            : (t = Rt.exec(e))
            ? $t(t[1], t[2], t[3], t[4])
            : (t = At.exec(e))
            ? $t(
                (255 * t[1]) / 100,
                (255 * t[2]) / 100,
                (255 * t[3]) / 100,
                t[4]
              )
            : (t = It.exec(e))
            ? Gt(t[1], t[2] / 100, t[3] / 100, 1)
            : (t = Ft.exec(e))
            ? Gt(t[1], t[2] / 100, t[3] / 100, t[4])
            : Dt.hasOwnProperty(e)
            ? Bt(Dt[e])
            : "transparent" === e
            ? new Wt(NaN, NaN, NaN, 0)
            : null
        );
      }
      function Bt(e) {
        return new Wt((e >> 16) & 255, (e >> 8) & 255, 255 & e, 1);
      }
      function $t(e, t, n, r) {
        return r <= 0 && (e = t = n = NaN), new Wt(e, t, n, r);
      }
      function Ht(e, t, n, r) {
        return 1 === arguments.length
          ? ((i = e) instanceof Et || (i = Vt(i)),
            i ? new Wt((i = i.rgb()).r, i.g, i.b, i.opacity) : new Wt())
          : new Wt(e, t, n, null == r ? 1 : r);
        var i;
      }
      function Wt(e, t, n, r) {
        (this.r = +e), (this.g = +t), (this.b = +n), (this.opacity = +r);
      }
      function Qt() {
        return "#".concat(Kt(this.r)).concat(Kt(this.g)).concat(Kt(this.b));
      }
      function qt() {
        var e = Yt(this.opacity);
        return ""
          .concat(1 === e ? "rgb(" : "rgba(")
          .concat(Xt(this.r), ", ")
          .concat(Xt(this.g), ", ")
          .concat(Xt(this.b))
          .concat(1 === e ? ")" : ", ".concat(e, ")"));
      }
      function Yt(e) {
        return isNaN(e) ? 1 : Math.max(0, Math.min(1, e));
      }
      function Xt(e) {
        return Math.max(0, Math.min(255, Math.round(e) || 0));
      }
      function Kt(e) {
        return ((e = Xt(e)) < 16 ? "0" : "") + e.toString(16);
      }
      function Gt(e, t, n, r) {
        return (
          r <= 0
            ? (e = t = n = NaN)
            : n <= 0 || n >= 1
            ? (e = t = NaN)
            : t <= 0 && (e = NaN),
          new Jt(e, t, n, r)
        );
      }
      function Zt(e) {
        if (e instanceof Jt) return new Jt(e.h, e.s, e.l, e.opacity);
        if ((e instanceof Et || (e = Vt(e)), !e)) return new Jt();
        if (e instanceof Jt) return e;
        var t = (e = e.rgb()).r / 255,
          n = e.g / 255,
          r = e.b / 255,
          i = Math.min(t, n, r),
          o = Math.max(t, n, r),
          a = NaN,
          l = o - i,
          u = (o + i) / 2;
        return (
          l
            ? ((a =
                t === o
                  ? (n - r) / l + 6 * (n < r)
                  : n === o
                  ? (r - t) / l + 2
                  : (t - n) / l + 4),
              (l /= u < 0.5 ? o + i : 2 - o - i),
              (a *= 60))
            : (l = u > 0 && u < 1 ? 0 : a),
          new Jt(a, l, u, e.opacity)
        );
      }
      function Jt(e, t, n, r) {
        (this.h = +e), (this.s = +t), (this.l = +n), (this.opacity = +r);
      }
      function en(e) {
        return (e = (e || 0) % 360) < 0 ? e + 360 : e;
      }
      function tn(e) {
        return Math.max(0, Math.min(1, e || 0));
      }
      function nn(e, t, n) {
        return (
          255 *
          (e < 60
            ? t + ((n - t) * e) / 60
            : e < 180
            ? n
            : e < 240
            ? t + ((n - t) * (240 - e)) / 60
            : t)
        );
      }
      function rn(e, t, n, r, i) {
        var o = e * e,
          a = o * e;
        return (
          ((1 - 3 * e + 3 * o - a) * t +
            (4 - 6 * o + 3 * a) * n +
            (1 + 3 * e + 3 * o - 3 * a) * r +
            a * i) /
          6
        );
      }
      St(Et, Vt, {
        copy: function (e) {
          return Object.assign(new this.constructor(), this, e);
        },
        displayable: function () {
          return this.rgb().displayable();
        },
        hex: jt,
        formatHex: jt,
        formatHex8: function () {
          return this.rgb().formatHex8();
        },
        formatHsl: function () {
          return Zt(this).formatHsl();
        },
        formatRgb: Ut,
        toString: Ut,
      }),
        St(
          Wt,
          Ht,
          xt(Et, {
            brighter: function (e) {
              return (
                (e = null == e ? Nt : Math.pow(Nt, e)),
                new Wt(this.r * e, this.g * e, this.b * e, this.opacity)
              );
            },
            darker: function (e) {
              return (
                (e = null == e ? Ct : Math.pow(Ct, e)),
                new Wt(this.r * e, this.g * e, this.b * e, this.opacity)
              );
            },
            rgb: function () {
              return this;
            },
            clamp: function () {
              return new Wt(
                Xt(this.r),
                Xt(this.g),
                Xt(this.b),
                Yt(this.opacity)
              );
            },
            displayable: function () {
              return (
                -0.5 <= this.r &&
                this.r < 255.5 &&
                -0.5 <= this.g &&
                this.g < 255.5 &&
                -0.5 <= this.b &&
                this.b < 255.5 &&
                0 <= this.opacity &&
                this.opacity <= 1
              );
            },
            hex: Qt,
            formatHex: Qt,
            formatHex8: function () {
              return "#"
                .concat(Kt(this.r))
                .concat(Kt(this.g))
                .concat(Kt(this.b))
                .concat(Kt(255 * (isNaN(this.opacity) ? 1 : this.opacity)));
            },
            formatRgb: qt,
            toString: qt,
          })
        ),
        St(
          Jt,
          function (e, t, n, r) {
            return 1 === arguments.length
              ? Zt(e)
              : new Jt(e, t, n, null == r ? 1 : r);
          },
          xt(Et, {
            brighter: function (e) {
              return (
                (e = null == e ? Nt : Math.pow(Nt, e)),
                new Jt(this.h, this.s, this.l * e, this.opacity)
              );
            },
            darker: function (e) {
              return (
                (e = null == e ? Ct : Math.pow(Ct, e)),
                new Jt(this.h, this.s, this.l * e, this.opacity)
              );
            },
            rgb: function () {
              var e = (this.h % 360) + 360 * (this.h < 0),
                t = isNaN(e) || isNaN(this.s) ? 0 : this.s,
                n = this.l,
                r = n + (n < 0.5 ? n : 1 - n) * t,
                i = 2 * n - r;
              return new Wt(
                nn(e >= 240 ? e - 240 : e + 120, i, r),
                nn(e, i, r),
                nn(e < 120 ? e + 240 : e - 120, i, r),
                this.opacity
              );
            },
            clamp: function () {
              return new Jt(
                en(this.h),
                tn(this.s),
                tn(this.l),
                Yt(this.opacity)
              );
            },
            displayable: function () {
              return (
                ((0 <= this.s && this.s <= 1) || isNaN(this.s)) &&
                0 <= this.l &&
                this.l <= 1 &&
                0 <= this.opacity &&
                this.opacity <= 1
              );
            },
            formatHsl: function () {
              var e = Yt(this.opacity);
              return ""
                .concat(1 === e ? "hsl(" : "hsla(")
                .concat(en(this.h), ", ")
                .concat(100 * tn(this.s), "%, ")
                .concat(100 * tn(this.l), "%")
                .concat(1 === e ? ")" : ", ".concat(e, ")"));
            },
          })
        );
      var on = function (e) {
        return function () {
          return e;
        };
      };
      function an(e, t) {
        return function (n) {
          return e + n * t;
        };
      }
      function ln(e) {
        return 1 === (e = +e)
          ? un
          : function (t, n) {
              return n - t
                ? (function (e, t, n) {
                    return (
                      (e = Math.pow(e, n)),
                      (t = Math.pow(t, n) - e),
                      (n = 1 / n),
                      function (r) {
                        return Math.pow(e + r * t, n);
                      }
                    );
                  })(t, n, e)
                : on(isNaN(t) ? n : t);
            };
      }
      function un(e, t) {
        var n = t - e;
        return n ? an(e, n) : on(isNaN(e) ? t : e);
      }
      var sn = (function e(t) {
        var n = ln(t);
        function r(e, t) {
          var r = n((e = Ht(e)).r, (t = Ht(t)).r),
            i = n(e.g, t.g),
            o = n(e.b, t.b),
            a = un(e.opacity, t.opacity);
          return function (t) {
            return (
              (e.r = r(t)),
              (e.g = i(t)),
              (e.b = o(t)),
              (e.opacity = a(t)),
              e + ""
            );
          };
        }
        return (r.gamma = e), r;
      })(1);
      function cn(e) {
        return function (t) {
          var n,
            r,
            i = t.length,
            o = new Array(i),
            a = new Array(i),
            l = new Array(i);
          for (n = 0; n < i; ++n)
            (r = Ht(t[n])),
              (o[n] = r.r || 0),
              (a[n] = r.g || 0),
              (l[n] = r.b || 0);
          return (
            (o = e(o)),
            (a = e(a)),
            (l = e(l)),
            (r.opacity = 1),
            function (e) {
              return (r.r = o(e)), (r.g = a(e)), (r.b = l(e)), r + "";
            }
          );
        };
      }
      cn(function (e) {
        var t = e.length - 1;
        return function (n) {
          var r =
              n <= 0 ? (n = 0) : n >= 1 ? ((n = 1), t - 1) : Math.floor(n * t),
            i = e[r],
            o = e[r + 1],
            a = r > 0 ? e[r - 1] : 2 * i - o,
            l = r < t - 1 ? e[r + 2] : 2 * o - i;
          return rn((n - r / t) * t, a, i, o, l);
        };
      }),
        cn(function (e) {
          var t = e.length;
          return function (n) {
            var r = Math.floor(((n %= 1) < 0 ? ++n : n) * t),
              i = e[(r + t - 1) % t],
              o = e[r % t],
              a = e[(r + 1) % t],
              l = e[(r + 2) % t];
            return rn((n - r / t) * t, i, o, a, l);
          };
        });
      var fn = /[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g,
        dn = new RegExp(fn.source, "g");
      function pn(e, t) {
        var n,
          r,
          i,
          o = (fn.lastIndex = dn.lastIndex = 0),
          a = -1,
          l = [],
          u = [];
        for (e += "", t += ""; (n = fn.exec(e)) && (r = dn.exec(t)); )
          (i = r.index) > o &&
            ((i = t.slice(o, i)), l[a] ? (l[a] += i) : (l[++a] = i)),
            (n = n[0]) === (r = r[0])
              ? l[a]
                ? (l[a] += r)
                : (l[++a] = r)
              : ((l[++a] = null), u.push({ i: a, x: dt(n, r) })),
            (o = dn.lastIndex);
        return (
          o < t.length && ((i = t.slice(o)), l[a] ? (l[a] += i) : (l[++a] = i)),
          l.length < 2
            ? u[0]
              ? (function (e) {
                  return function (t) {
                    return e(t) + "";
                  };
                })(u[0].x)
              : (function (e) {
                  return function () {
                    return e;
                  };
                })(t)
            : ((t = u.length),
              function (e) {
                for (var n, r = 0; r < t; ++r) l[(n = u[r]).i] = n.x(e);
                return l.join("");
              })
        );
      }
      function hn(e, t) {
        var n;
        return (
          "number" === typeof t
            ? dt
            : t instanceof Vt
            ? sn
            : (n = Vt(t))
            ? ((t = n), sn)
            : pn
        )(e, t);
      }
      function vn(e) {
        return function () {
          this.removeAttribute(e);
        };
      }
      function mn(e) {
        return function () {
          this.removeAttributeNS(e.space, e.local);
        };
      }
      function yn(e, t, n) {
        var r,
          i,
          o = n + "";
        return function () {
          var a = this.getAttribute(e);
          return a === o ? null : a === r ? i : (i = t((r = a), n));
        };
      }
      function gn(e, t, n) {
        var r,
          i,
          o = n + "";
        return function () {
          var a = this.getAttributeNS(e.space, e.local);
          return a === o ? null : a === r ? i : (i = t((r = a), n));
        };
      }
      function bn(e, t, n) {
        var r, i, o;
        return function () {
          var a,
            l,
            u = n(this);
          if (null != u)
            return (a = this.getAttribute(e)) === (l = u + "")
              ? null
              : a === r && l === i
              ? o
              : ((i = l), (o = t((r = a), u)));
          this.removeAttribute(e);
        };
      }
      function wn(e, t, n) {
        var r, i, o;
        return function () {
          var a,
            l,
            u = n(this);
          if (null != u)
            return (a = this.getAttributeNS(e.space, e.local)) === (l = u + "")
              ? null
              : a === r && l === i
              ? o
              : ((i = l), (o = t((r = a), u)));
          this.removeAttributeNS(e.space, e.local);
        };
      }
      function _n(e, t) {
        var n, r;
        function i() {
          var i = t.apply(this, arguments);
          return (
            i !== r &&
              (n =
                (r = i) &&
                (function (e, t) {
                  return function (n) {
                    this.setAttributeNS(e.space, e.local, t.call(this, n));
                  };
                })(e, i)),
            n
          );
        }
        return (i._value = t), i;
      }
      function kn(e, t) {
        var n, r;
        function i() {
          var i = t.apply(this, arguments);
          return (
            i !== r &&
              (n =
                (r = i) &&
                (function (e, t) {
                  return function (n) {
                    this.setAttribute(e, t.call(this, n));
                  };
                })(e, i)),
            n
          );
        }
        return (i._value = t), i;
      }
      function Sn(e, t) {
        return function () {
          ut(this, e).delay = +t.apply(this, arguments);
        };
      }
      function xn(e, t) {
        return (
          (t = +t),
          function () {
            ut(this, e).delay = t;
          }
        );
      }
      function En(e, t) {
        return function () {
          st(this, e).duration = +t.apply(this, arguments);
        };
      }
      function Cn(e, t) {
        return (
          (t = +t),
          function () {
            st(this, e).duration = t;
          }
        );
      }
      var Nn = Ce.prototype.constructor;
      function Pn(e) {
        return function () {
          this.style.removeProperty(e);
        };
      }
      var zn = 0;
      function Mn(e, t, n, r) {
        (this._groups = e),
          (this._parents = t),
          (this._name = n),
          (this._id = r);
      }
      function Tn() {
        return ++zn;
      }
      var Ln = Ce.prototype;
      Mn.prototype = function (e) {
        return Ce().transition(e);
      }.prototype = c(
        {
          constructor: Mn,
          select: function (e) {
            var t = this._name,
              n = this._id;
            "function" !== typeof e && (e = d(e));
            for (
              var r = this._groups, i = r.length, o = new Array(i), a = 0;
              a < i;
              ++a
            )
              for (
                var l,
                  u,
                  s = r[a],
                  c = s.length,
                  f = (o[a] = new Array(c)),
                  p = 0;
                p < c;
                ++p
              )
                (l = s[p]) &&
                  (u = e.call(l, l.__data__, p, s)) &&
                  ("__data__" in l && (u.__data__ = l.__data__),
                  (f[p] = u),
                  lt(f[p], t, n, p, f, ct(l, n)));
            return new Mn(o, this._parents, t, n);
          },
          selectAll: function (e) {
            var t = this._name,
              n = this._id;
            "function" !== typeof e && (e = h(e));
            for (
              var r = this._groups, i = r.length, o = [], a = [], l = 0;
              l < i;
              ++l
            )
              for (var u, s = r[l], c = s.length, f = 0; f < c; ++f)
                if ((u = s[f])) {
                  for (
                    var d,
                      p = e.call(u, u.__data__, f, s),
                      v = ct(u, n),
                      m = 0,
                      y = p.length;
                    m < y;
                    ++m
                  )
                    (d = p[m]) && lt(d, t, n, m, p, v);
                  o.push(p), a.push(u);
                }
            return new Mn(o, a, t, n);
          },
          selectChild: Ln.selectChild,
          selectChildren: Ln.selectChildren,
          filter: function (e) {
            "function" !== typeof e && (e = m(e));
            for (
              var t = this._groups, n = t.length, r = new Array(n), i = 0;
              i < n;
              ++i
            )
              for (
                var o, a = t[i], l = a.length, u = (r[i] = []), s = 0;
                s < l;
                ++s
              )
                (o = a[s]) && e.call(o, o.__data__, s, a) && u.push(o);
            return new Mn(r, this._parents, this._name, this._id);
          },
          merge: function (e) {
            if (e._id !== this._id) throw new Error();
            for (
              var t = this._groups,
                n = e._groups,
                r = t.length,
                i = n.length,
                o = Math.min(r, i),
                a = new Array(r),
                l = 0;
              l < o;
              ++l
            )
              for (
                var u,
                  s = t[l],
                  c = n[l],
                  f = s.length,
                  d = (a[l] = new Array(f)),
                  p = 0;
                p < f;
                ++p
              )
                (u = s[p] || c[p]) && (d[p] = u);
            for (; l < r; ++l) a[l] = t[l];
            return new Mn(a, this._parents, this._name, this._id);
          },
          selection: function () {
            return new Nn(this._groups, this._parents);
          },
          transition: function () {
            for (
              var e = this._name,
                t = this._id,
                n = Tn(),
                r = this._groups,
                i = r.length,
                o = 0;
              o < i;
              ++o
            )
              for (var a, l = r[o], u = l.length, s = 0; s < u; ++s)
                if ((a = l[s])) {
                  var c = ct(a, t);
                  lt(a, e, n, s, l, {
                    time: c.time + c.delay + c.duration,
                    delay: 0,
                    duration: c.duration,
                    ease: c.ease,
                  });
                }
            return new Mn(r, this._parents, e, n);
          },
          call: Ln.call,
          nodes: Ln.nodes,
          node: Ln.node,
          size: Ln.size,
          empty: Ln.empty,
          each: Ln.each,
          on: function (e, t) {
            var n = this._id;
            return arguments.length < 2
              ? ct(this.node(), n).on.on(e)
              : this.each(
                  (function (e, t, n) {
                    var r,
                      i,
                      o = (function (e) {
                        return (e + "")
                          .trim()
                          .split(/^|\s+/)
                          .every(function (e) {
                            var t = e.indexOf(".");
                            return (
                              t >= 0 && (e = e.slice(0, t)), !e || "start" === e
                            );
                          });
                      })(t)
                        ? ut
                        : st;
                    return function () {
                      var a = o(this, e),
                        l = a.on;
                      l !== r && (i = (r = l).copy()).on(t, n), (a.on = i);
                    };
                  })(n, e, t)
                );
          },
          attr: function (e, t) {
            var n = L(e),
              r = "transform" === n ? bt : hn;
            return this.attrTween(
              e,
              "function" === typeof t
                ? (n.local ? wn : bn)(n, r, kt(this, "attr." + e, t))
                : null == t
                ? (n.local ? mn : vn)(n)
                : (n.local ? gn : yn)(n, r, t)
            );
          },
          attrTween: function (e, t) {
            var n = "attr." + e;
            if (arguments.length < 2) return (n = this.tween(n)) && n._value;
            if (null == t) return this.tween(n, null);
            if ("function" !== typeof t) throw new Error();
            var r = L(e);
            return this.tween(n, (r.local ? _n : kn)(r, t));
          },
          style: function (e, t, n) {
            var r = "transform" === (e += "") ? gt : hn;
            return null == t
              ? this.styleTween(
                  e,
                  (function (e, t) {
                    var n, r, i;
                    return function () {
                      var o = $(this, e),
                        a = (this.style.removeProperty(e), $(this, e));
                      return o === a
                        ? null
                        : o === n && a === r
                        ? i
                        : (i = t((n = o), (r = a)));
                    };
                  })(e, r)
                ).on("end.style." + e, Pn(e))
              : "function" === typeof t
              ? this.styleTween(
                  e,
                  (function (e, t, n) {
                    var r, i, o;
                    return function () {
                      var a = $(this, e),
                        l = n(this),
                        u = l + "";
                      return (
                        null == l &&
                          (this.style.removeProperty(e), (u = l = $(this, e))),
                        a === u
                          ? null
                          : a === r && u === i
                          ? o
                          : ((i = u), (o = t((r = a), l)))
                      );
                    };
                  })(e, r, kt(this, "style." + e, t))
                ).each(
                  (function (e, t) {
                    var n,
                      r,
                      i,
                      o,
                      a = "style." + t,
                      l = "end." + a;
                    return function () {
                      var u = st(this, e),
                        s = u.on,
                        c = null == u.value[a] ? o || (o = Pn(t)) : void 0;
                      (s === n && i === c) ||
                        (r = (n = s).copy()).on(l, (i = c)),
                        (u.on = r);
                    };
                  })(this._id, e)
                )
              : this.styleTween(
                  e,
                  (function (e, t, n) {
                    var r,
                      i,
                      o = n + "";
                    return function () {
                      var a = $(this, e);
                      return a === o ? null : a === r ? i : (i = t((r = a), n));
                    };
                  })(e, r, t),
                  n
                ).on("end.style." + e, null);
          },
          styleTween: function (e, t, n) {
            var r = "style." + (e += "");
            if (arguments.length < 2) return (r = this.tween(r)) && r._value;
            if (null == t) return this.tween(r, null);
            if ("function" !== typeof t) throw new Error();
            return this.tween(
              r,
              (function (e, t, n) {
                var r, i;
                function o() {
                  var o = t.apply(this, arguments);
                  return (
                    o !== i &&
                      (r =
                        (i = o) &&
                        (function (e, t, n) {
                          return function (r) {
                            this.style.setProperty(e, t.call(this, r), n);
                          };
                        })(e, o, n)),
                    r
                  );
                }
                return (o._value = t), o;
              })(e, t, null == n ? "" : n)
            );
          },
          text: function (e) {
            return this.tween(
              "text",
              "function" === typeof e
                ? (function (e) {
                    return function () {
                      var t = e(this);
                      this.textContent = null == t ? "" : t;
                    };
                  })(kt(this, "text", e))
                : (function (e) {
                    return function () {
                      this.textContent = e;
                    };
                  })(null == e ? "" : e + "")
            );
          },
          textTween: function (e) {
            var t = "text";
            if (arguments.length < 1) return (t = this.tween(t)) && t._value;
            if (null == e) return this.tween(t, null);
            if ("function" !== typeof e) throw new Error();
            return this.tween(
              t,
              (function (e) {
                var t, n;
                function r() {
                  var r = e.apply(this, arguments);
                  return (
                    r !== n &&
                      (t =
                        (n = r) &&
                        (function (e) {
                          return function (t) {
                            this.textContent = e.call(this, t);
                          };
                        })(r)),
                    t
                  );
                }
                return (r._value = e), r;
              })(e)
            );
          },
          remove: function () {
            return this.on(
              "end.remove",
              (function (e) {
                return function () {
                  var t = this.parentNode;
                  for (var n in this.__transition) if (+n !== e) return;
                  t && t.removeChild(this);
                };
              })(this._id)
            );
          },
          tween: function (e, t) {
            var n = this._id;
            if (((e += ""), arguments.length < 2)) {
              for (
                var r, i = ct(this.node(), n).tween, o = 0, a = i.length;
                o < a;
                ++o
              )
                if ((r = i[o]).name === e) return r.value;
              return null;
            }
            return this.each((null == t ? wt : _t)(n, e, t));
          },
          delay: function (e) {
            var t = this._id;
            return arguments.length
              ? this.each(("function" === typeof e ? Sn : xn)(t, e))
              : ct(this.node(), t).delay;
          },
          duration: function (e) {
            var t = this._id;
            return arguments.length
              ? this.each(("function" === typeof e ? En : Cn)(t, e))
              : ct(this.node(), t).duration;
          },
          ease: function (e) {
            var t = this._id;
            return arguments.length
              ? this.each(
                  (function (e, t) {
                    if ("function" !== typeof t) throw new Error();
                    return function () {
                      st(this, e).ease = t;
                    };
                  })(t, e)
                )
              : ct(this.node(), t).ease;
          },
          easeVarying: function (e) {
            if ("function" !== typeof e) throw new Error();
            return this.each(
              (function (e, t) {
                return function () {
                  var n = t.apply(this, arguments);
                  if ("function" !== typeof n) throw new Error();
                  st(this, e).ease = n;
                };
              })(this._id, e)
            );
          },
          end: function () {
            var e,
              t,
              n = this,
              r = n._id,
              i = n.size();
            return new Promise(function (o, a) {
              var l = { value: a },
                u = {
                  value: function () {
                    0 === --i && o();
                  },
                };
              n.each(function () {
                var n = st(this, r),
                  i = n.on;
                i !== e &&
                  ((t = (e = i).copy())._.cancel.push(l),
                  t._.interrupt.push(l),
                  t._.end.push(u)),
                  (n.on = t);
              }),
                0 === i && o();
            });
          },
        },
        Symbol.iterator,
        Ln[Symbol.iterator]
      );
      var On = {
        time: null,
        delay: 0,
        duration: 250,
        ease: function (e) {
          return ((e *= 2) <= 1 ? e * e * e : (e -= 2) * e * e + 2) / 2;
        },
      };
      function Rn(e, t) {
        for (var n; !(n = e.__transition) || !(n = n[t]); )
          if (!(e = e.parentNode))
            throw new Error("transition ".concat(t, " not found"));
        return n;
      }
      (Ce.prototype.interrupt = function (e) {
        return this.each(function () {
          ft(this, e);
        });
      }),
        (Ce.prototype.transition = function (e) {
          var t, n;
          e instanceof Mn
            ? ((t = e._id), (e = e._name))
            : ((t = Tn()),
              ((n = On).time = He()),
              (e = null == e ? null : e + ""));
          for (var r = this._groups, i = r.length, o = 0; o < i; ++o)
            for (var a, l = r[o], u = l.length, s = 0; s < u; ++s)
              (a = l[s]) && lt(a, e, t, s, l, n || Rn(a, t));
          return new Mn(r, this._parents, e, t);
        });
      Math.abs, Math.max, Math.min;
      function An(e) {
        return [+e[0], +e[1]];
      }
      function In(e) {
        return [An(e[0]), An(e[1])];
      }
      ["w", "e"].map(Fn),
        ["n", "s"].map(Fn),
        ["n", "w", "e", "s", "nw", "ne", "sw", "se"].map(Fn);
      function Fn(e) {
        return { type: e };
      }
      function Dn(e) {
        if (!e.ok) throw new Error(e.status + " " + e.statusText);
        if (204 !== e.status && 205 !== e.status) return e.json();
      }
      function jn(e, t) {
        return fetch(e, t).then(Dn);
      }
      var Un = function (e) {
        return e;
      };
      function Vn(e, t) {
        e && $n.hasOwnProperty(e.type) && $n[e.type](e, t);
      }
      var Bn = {
          Feature: function (e, t) {
            Vn(e.geometry, t);
          },
          FeatureCollection: function (e, t) {
            for (var n = e.features, r = -1, i = n.length; ++r < i; )
              Vn(n[r].geometry, t);
          },
        },
        $n = {
          Sphere: function (e, t) {
            t.sphere();
          },
          Point: function (e, t) {
            (e = e.coordinates), t.point(e[0], e[1], e[2]);
          },
          MultiPoint: function (e, t) {
            for (var n = e.coordinates, r = -1, i = n.length; ++r < i; )
              (e = n[r]), t.point(e[0], e[1], e[2]);
          },
          LineString: function (e, t) {
            Hn(e.coordinates, t, 0);
          },
          MultiLineString: function (e, t) {
            for (var n = e.coordinates, r = -1, i = n.length; ++r < i; )
              Hn(n[r], t, 0);
          },
          Polygon: function (e, t) {
            Wn(e.coordinates, t);
          },
          MultiPolygon: function (e, t) {
            for (var n = e.coordinates, r = -1, i = n.length; ++r < i; )
              Wn(n[r], t);
          },
          GeometryCollection: function (e, t) {
            for (var n = e.geometries, r = -1, i = n.length; ++r < i; )
              Vn(n[r], t);
          },
        };
      function Hn(e, t, n) {
        var r,
          i = -1,
          o = e.length - n;
        for (t.lineStart(); ++i < o; ) (r = e[i]), t.point(r[0], r[1], r[2]);
        t.lineEnd();
      }
      function Wn(e, t) {
        var n = -1,
          r = e.length;
        for (t.polygonStart(); ++n < r; ) Hn(e[n], t, 1);
        t.polygonEnd();
      }
      function Qn(e, t) {
        e && Bn.hasOwnProperty(e.type) ? Bn[e.type](e, t) : Vn(e, t);
      }
      function qn(e, t) {
        if (!(e instanceof t))
          throw new TypeError("Cannot call a class as a function");
      }
      function Yn(e, t) {
        for (var n = 0; n < t.length; n++) {
          var r = t[n];
          (r.enumerable = r.enumerable || !1),
            (r.configurable = !0),
            "value" in r && (r.writable = !0),
            Object.defineProperty(e, s(r.key), r);
        }
      }
      function Xn(e, t, n) {
        return (
          t && Yn(e.prototype, t),
          n && Yn(e, n),
          Object.defineProperty(e, "prototype", { writable: !1 }),
          e
        );
      }
      var Kn = (function () {
        function e() {
          qn(this, e), (this._partials = new Float64Array(32)), (this._n = 0);
        }
        return (
          Xn(e, [
            {
              key: "add",
              value: function (e) {
                for (
                  var t = this._partials, n = 0, r = 0;
                  r < this._n && r < 32;
                  r++
                ) {
                  var i = t[r],
                    o = e + i,
                    a = Math.abs(e) < Math.abs(i) ? e - (o - i) : i - (o - e);
                  a && (t[n++] = a), (e = o);
                }
                return (t[n] = e), (this._n = n + 1), this;
              },
            },
            {
              key: "valueOf",
              value: function () {
                var e,
                  t,
                  n,
                  r = this._partials,
                  i = this._n,
                  o = 0;
                if (i > 0) {
                  for (
                    o = r[--i];
                    i > 0 && ((e = o), !(n = (t = r[--i]) - ((o = e + t) - e)));

                  );
                  i > 0 &&
                    ((n < 0 && r[i - 1] < 0) || (n > 0 && r[i - 1] > 0)) &&
                    (t = 2 * n) == (e = o + t) - o &&
                    (o = e);
                }
                return o;
              },
            },
          ]),
          e
        );
      })();
      var Gn = 1e-6,
        Zn = 1e-12,
        Jn = Math.PI,
        er = Jn / 2,
        tr = Jn / 4,
        nr = 2 * Jn,
        rr = 180 / Jn,
        ir = Jn / 180,
        or = Math.abs,
        ar = Math.atan,
        lr = Math.atan2,
        ur = Math.cos,
        sr = (Math.ceil, Math.exp),
        cr = (Math.floor, Math.hypot, Math.log),
        fr = (Math.pow, Math.sin),
        dr =
          Math.sign ||
          function (e) {
            return e > 0 ? 1 : e < 0 ? -1 : 0;
          },
        pr = Math.sqrt,
        hr = Math.tan;
      function vr(e) {
        return e > 1 ? er : e < -1 ? -er : Math.asin(e);
      }
      function mr() {}
      var yr,
        gr,
        br,
        wr,
        _r = new Kn(),
        kr = new Kn(),
        Sr = {
          point: mr,
          lineStart: mr,
          lineEnd: mr,
          polygonStart: function () {
            (Sr.lineStart = xr), (Sr.lineEnd = Nr);
          },
          polygonEnd: function () {
            (Sr.lineStart = Sr.lineEnd = Sr.point = mr),
              _r.add(or(kr)),
              (kr = new Kn());
          },
          result: function () {
            var e = _r / 2;
            return (_r = new Kn()), e;
          },
        };
      function xr() {
        Sr.point = Er;
      }
      function Er(e, t) {
        (Sr.point = Cr), (yr = br = e), (gr = wr = t);
      }
      function Cr(e, t) {
        kr.add(wr * e - br * t), (br = e), (wr = t);
      }
      function Nr() {
        Cr(yr, gr);
      }
      var Pr = Sr,
        zr = 1 / 0,
        Mr = zr,
        Tr = -zr,
        Lr = Tr,
        Or = {
          point: function (e, t) {
            e < zr && (zr = e);
            e > Tr && (Tr = e);
            t < Mr && (Mr = t);
            t > Lr && (Lr = t);
          },
          lineStart: mr,
          lineEnd: mr,
          polygonStart: mr,
          polygonEnd: mr,
          result: function () {
            var e = [
              [zr, Mr],
              [Tr, Lr],
            ];
            return (Tr = Lr = -(Mr = zr = 1 / 0)), e;
          },
        };
      var Rr,
        Ar,
        Ir,
        Fr,
        Dr = Or,
        jr = 0,
        Ur = 0,
        Vr = 0,
        Br = 0,
        $r = 0,
        Hr = 0,
        Wr = 0,
        Qr = 0,
        qr = 0,
        Yr = {
          point: Xr,
          lineStart: Kr,
          lineEnd: Jr,
          polygonStart: function () {
            (Yr.lineStart = ei), (Yr.lineEnd = ti);
          },
          polygonEnd: function () {
            (Yr.point = Xr), (Yr.lineStart = Kr), (Yr.lineEnd = Jr);
          },
          result: function () {
            var e = qr
              ? [Wr / qr, Qr / qr]
              : Hr
              ? [Br / Hr, $r / Hr]
              : Vr
              ? [jr / Vr, Ur / Vr]
              : [NaN, NaN];
            return (jr = Ur = Vr = Br = $r = Hr = Wr = Qr = qr = 0), e;
          },
        };
      function Xr(e, t) {
        (jr += e), (Ur += t), ++Vr;
      }
      function Kr() {
        Yr.point = Gr;
      }
      function Gr(e, t) {
        (Yr.point = Zr), Xr((Ir = e), (Fr = t));
      }
      function Zr(e, t) {
        var n = e - Ir,
          r = t - Fr,
          i = pr(n * n + r * r);
        (Br += (i * (Ir + e)) / 2),
          ($r += (i * (Fr + t)) / 2),
          (Hr += i),
          Xr((Ir = e), (Fr = t));
      }
      function Jr() {
        Yr.point = Xr;
      }
      function ei() {
        Yr.point = ni;
      }
      function ti() {
        ri(Rr, Ar);
      }
      function ni(e, t) {
        (Yr.point = ri), Xr((Rr = Ir = e), (Ar = Fr = t));
      }
      function ri(e, t) {
        var n = e - Ir,
          r = t - Fr,
          i = pr(n * n + r * r);
        (Br += (i * (Ir + e)) / 2),
          ($r += (i * (Fr + t)) / 2),
          (Hr += i),
          (Wr += (i = Fr * e - Ir * t) * (Ir + e)),
          (Qr += i * (Fr + t)),
          (qr += 3 * i),
          Xr((Ir = e), (Fr = t));
      }
      var ii = Yr;
      function oi(e) {
        this._context = e;
      }
      oi.prototype = {
        _radius: 4.5,
        pointRadius: function (e) {
          return (this._radius = e), this;
        },
        polygonStart: function () {
          this._line = 0;
        },
        polygonEnd: function () {
          this._line = NaN;
        },
        lineStart: function () {
          this._point = 0;
        },
        lineEnd: function () {
          0 === this._line && this._context.closePath(), (this._point = NaN);
        },
        point: function (e, t) {
          switch (this._point) {
            case 0:
              this._context.moveTo(e, t), (this._point = 1);
              break;
            case 1:
              this._context.lineTo(e, t);
              break;
            default:
              this._context.moveTo(e + this._radius, t),
                this._context.arc(e, t, this._radius, 0, nr);
          }
        },
        result: mr,
      };
      var ai,
        li,
        ui,
        si,
        ci,
        fi = new Kn(),
        di = {
          point: mr,
          lineStart: function () {
            di.point = pi;
          },
          lineEnd: function () {
            ai && hi(li, ui), (di.point = mr);
          },
          polygonStart: function () {
            ai = !0;
          },
          polygonEnd: function () {
            ai = null;
          },
          result: function () {
            var e = +fi;
            return (fi = new Kn()), e;
          },
        };
      function pi(e, t) {
        (di.point = hi), (li = si = e), (ui = ci = t);
      }
      function hi(e, t) {
        (si -= e), (ci -= t), fi.add(pr(si * si + ci * ci)), (si = e), (ci = t);
      }
      var vi,
        mi,
        yi,
        gi,
        bi,
        wi,
        _i,
        ki,
        Si = di;
      function xi(e, t) {
        return (
          t || (t = e.slice(0)),
          Object.freeze(
            Object.defineProperties(e, { raw: { value: Object.freeze(t) } })
          )
        );
      }
      var Ei = (function () {
        function e(t) {
          qn(this, e),
            (this._append =
              null == t
                ? Ci
                : (function (e) {
                    var t = Math.floor(e);
                    if (!(t >= 0))
                      throw new RangeError("invalid digits: ".concat(e));
                    if (t > 15) return Ci;
                    if (t !== bi) {
                      var n = Math.pow(10, t);
                      (bi = t),
                        (wi = function (e) {
                          var t = 1;
                          this._ += e[0];
                          for (var r = e.length; t < r; ++t)
                            this._ += Math.round(arguments[t] * n) / n + e[t];
                        });
                    }
                    return wi;
                  })(t)),
            (this._radius = 4.5),
            (this._ = "");
        }
        return (
          Xn(e, [
            {
              key: "pointRadius",
              value: function (e) {
                return (this._radius = +e), this;
              },
            },
            {
              key: "polygonStart",
              value: function () {
                this._line = 0;
              },
            },
            {
              key: "polygonEnd",
              value: function () {
                this._line = NaN;
              },
            },
            {
              key: "lineStart",
              value: function () {
                this._point = 0;
              },
            },
            {
              key: "lineEnd",
              value: function () {
                0 === this._line && (this._ += "Z"), (this._point = NaN);
              },
            },
            {
              key: "point",
              value: function (e, t) {
                switch (this._point) {
                  case 0:
                    this._append(vi || (vi = xi(["M", ",", ""])), e, t),
                      (this._point = 1);
                    break;
                  case 1:
                    this._append(mi || (mi = xi(["L", ",", ""])), e, t);
                    break;
                  default:
                    if (
                      (this._append(yi || (yi = xi(["M", ",", ""])), e, t),
                      this._radius !== _i || this._append !== wi)
                    ) {
                      var n = this._radius,
                        r = this._;
                      (this._ = ""),
                        this._append(
                          gi ||
                            (gi = xi([
                              "m0,",
                              "a",
                              ",",
                              " 0 1,1 0,",
                              "a",
                              ",",
                              " 0 1,1 0,",
                              "z",
                            ])),
                          n,
                          n,
                          n,
                          -2 * n,
                          n,
                          n,
                          2 * n
                        ),
                        (_i = n),
                        (wi = this._append),
                        (ki = this._),
                        (this._ = r);
                    }
                    this._ += ki;
                }
              },
            },
            {
              key: "result",
              value: function () {
                var e = this._;
                return (this._ = ""), e.length ? e : null;
              },
            },
          ]),
          e
        );
      })();
      function Ci(e) {
        var t = 1;
        this._ += e[0];
        for (var n = e.length; t < n; ++t) this._ += arguments[t] + e[t];
      }
      function Ni(e, t) {
        var n,
          r,
          i = 3,
          o = 4.5;
        function a(e) {
          return (
            e &&
              ("function" === typeof o &&
                r.pointRadius(+o.apply(this, arguments)),
              Qn(e, n(r))),
            r.result()
          );
        }
        return (
          (a.area = function (e) {
            return Qn(e, n(Pr)), Pr.result();
          }),
          (a.measure = function (e) {
            return Qn(e, n(Si)), Si.result();
          }),
          (a.bounds = function (e) {
            return Qn(e, n(Dr)), Dr.result();
          }),
          (a.centroid = function (e) {
            return Qn(e, n(ii)), ii.result();
          }),
          (a.projection = function (t) {
            return arguments.length
              ? ((n = null == t ? ((e = null), Un) : (e = t).stream), a)
              : e;
          }),
          (a.context = function (e) {
            return arguments.length
              ? ((r = null == e ? ((t = null), new Ei(i)) : new oi((t = e))),
                "function" !== typeof o && r.pointRadius(o),
                a)
              : t;
          }),
          (a.pointRadius = function (e) {
            return arguments.length
              ? ((o = "function" === typeof e ? e : (r.pointRadius(+e), +e)), a)
              : o;
          }),
          (a.digits = function (e) {
            if (!arguments.length) return i;
            if (null == e) i = null;
            else {
              var n = Math.floor(e);
              if (!(n >= 0)) throw new RangeError("invalid digits: ".concat(e));
              i = n;
            }
            return null === t && (r = new Ei(i)), a;
          }),
          a.projection(e).digits(i).context(t)
        );
      }
      function Pi(e, t) {
        function n(n, r) {
          return (n = e(n, r)), t(n[0], n[1]);
        }
        return (
          e.invert &&
            t.invert &&
            (n.invert = function (n, r) {
              return (n = t.invert(n, r)) && e.invert(n[0], n[1]);
            }),
          n
        );
      }
      function zi(e, t) {
        return or(e) > Jn && (e -= Math.round(e / nr) * nr), [e, t];
      }
      function Mi(e, t, n) {
        return (e %= nr)
          ? t || n
            ? Pi(Li(e), Oi(t, n))
            : Li(e)
          : t || n
          ? Oi(t, n)
          : zi;
      }
      function Ti(e) {
        return function (t, n) {
          return or((t += e)) > Jn && (t -= Math.round(t / nr) * nr), [t, n];
        };
      }
      function Li(e) {
        var t = Ti(e);
        return (t.invert = Ti(-e)), t;
      }
      function Oi(e, t) {
        var n = ur(e),
          r = fr(e),
          i = ur(t),
          o = fr(t);
        function a(e, t) {
          var a = ur(t),
            l = ur(e) * a,
            u = fr(e) * a,
            s = fr(t),
            c = s * n + l * r;
          return [lr(u * i - c * o, l * n - s * r), vr(c * i + u * o)];
        }
        return (
          (a.invert = function (e, t) {
            var a = ur(t),
              l = ur(e) * a,
              u = fr(e) * a,
              s = fr(t),
              c = s * i - u * o;
            return [lr(u * i + s * o, l * n + c * r), vr(c * n - l * r)];
          }),
          a
        );
      }
      function Ri() {
        var e,
          t = [];
        return {
          point: function (t, n, r) {
            e.push([t, n, r]);
          },
          lineStart: function () {
            t.push((e = []));
          },
          lineEnd: mr,
          rejoin: function () {
            t.length > 1 && t.push(t.pop().concat(t.shift()));
          },
          result: function () {
            var n = t;
            return (t = []), (e = null), n;
          },
        };
      }
      function Ai(e, t) {
        return or(e[0] - t[0]) < Gn && or(e[1] - t[1]) < Gn;
      }
      function Ii(e, t, n, r) {
        (this.x = e),
          (this.z = t),
          (this.o = n),
          (this.e = r),
          (this.v = !1),
          (this.n = this.p = null);
      }
      function Fi(e, t, n, r, i) {
        var o,
          a,
          l = [],
          u = [];
        if (
          (e.forEach(function (e) {
            if (!((t = e.length - 1) <= 0)) {
              var t,
                n,
                r = e[0],
                a = e[t];
              if (Ai(r, a)) {
                if (!r[2] && !a[2]) {
                  for (i.lineStart(), o = 0; o < t; ++o)
                    i.point((r = e[o])[0], r[1]);
                  return void i.lineEnd();
                }
                a[0] += 2 * Gn;
              }
              l.push((n = new Ii(r, e, null, !0))),
                u.push((n.o = new Ii(r, null, n, !1))),
                l.push((n = new Ii(a, e, null, !1))),
                u.push((n.o = new Ii(a, null, n, !0)));
            }
          }),
          l.length)
        ) {
          for (u.sort(t), Di(l), Di(u), o = 0, a = u.length; o < a; ++o)
            u[o].e = n = !n;
          for (var s, c, f = l[0]; ; ) {
            for (var d = f, p = !0; d.v; ) if ((d = d.n) === f) return;
            (s = d.z), i.lineStart();
            do {
              if (((d.v = d.o.v = !0), d.e)) {
                if (p)
                  for (o = 0, a = s.length; o < a; ++o)
                    i.point((c = s[o])[0], c[1]);
                else r(d.x, d.n.x, 1, i);
                d = d.n;
              } else {
                if (p)
                  for (s = d.p.z, o = s.length - 1; o >= 0; --o)
                    i.point((c = s[o])[0], c[1]);
                else r(d.x, d.p.x, -1, i);
                d = d.p;
              }
              (s = (d = d.o).z), (p = !p);
            } while (!d.v);
            i.lineEnd();
          }
        }
      }
      function Di(e) {
        if ((t = e.length)) {
          for (var t, n, r = 0, i = e[0]; ++r < t; )
            (i.n = n = e[r]), (n.p = i), (i = n);
          (i.n = n = e[0]), (n.p = i);
        }
      }
      function ji(e) {
        return [lr(e[1], e[0]), vr(e[2])];
      }
      function Ui(e) {
        var t = e[0],
          n = e[1],
          r = ur(n);
        return [r * ur(t), r * fr(t), fr(n)];
      }
      function Vi(e, t) {
        return e[0] * t[0] + e[1] * t[1] + e[2] * t[2];
      }
      function Bi(e, t) {
        return [
          e[1] * t[2] - e[2] * t[1],
          e[2] * t[0] - e[0] * t[2],
          e[0] * t[1] - e[1] * t[0],
        ];
      }
      function $i(e, t) {
        (e[0] += t[0]), (e[1] += t[1]), (e[2] += t[2]);
      }
      function Hi(e, t) {
        return [e[0] * t, e[1] * t, e[2] * t];
      }
      function Wi(e) {
        var t = pr(e[0] * e[0] + e[1] * e[1] + e[2] * e[2]);
        (e[0] /= t), (e[1] /= t), (e[2] /= t);
      }
      function Qi(e) {
        return or(e[0]) <= Jn ? e[0] : dr(e[0]) * (((or(e[0]) + Jn) % nr) - Jn);
      }
      zi.invert = zi;
      var qi = i().mark(Yi);
      function Yi(e) {
        var t, n, r;
        return i().wrap(
          function (i) {
            for (;;)
              switch ((i.prev = i.next)) {
                case 0:
                  (t = z(e)), (i.prev = 1), t.s();
                case 3:
                  if ((n = t.n()).done) {
                    i.next = 8;
                    break;
                  }
                  return (r = n.value), i.delegateYield(r, "t0", 6);
                case 6:
                  i.next = 3;
                  break;
                case 8:
                  i.next = 13;
                  break;
                case 10:
                  (i.prev = 10), (i.t1 = i.catch(1)), t.e(i.t1);
                case 13:
                  return (i.prev = 13), t.f(), i.finish(13);
                case 16:
                case "end":
                  return i.stop();
              }
          },
          qi,
          null,
          [[1, 10, 13, 16]]
        );
      }
      function Xi(e) {
        return Array.from(Yi(e));
      }
      function Ki(e, t, n, r) {
        return function (i) {
          var o,
            a,
            l,
            u = t(i),
            s = Ri(),
            c = t(s),
            f = !1,
            d = {
              point: p,
              lineStart: v,
              lineEnd: m,
              polygonStart: function () {
                (d.point = y),
                  (d.lineStart = g),
                  (d.lineEnd = b),
                  (a = []),
                  (o = []);
              },
              polygonEnd: function () {
                (d.point = p), (d.lineStart = v), (d.lineEnd = m), (a = Xi(a));
                var e = (function (e, t) {
                  var n = Qi(t),
                    r = t[1],
                    i = fr(r),
                    o = [fr(n), -ur(n), 0],
                    a = 0,
                    l = 0,
                    u = new Kn();
                  1 === i ? (r = er + Gn) : -1 === i && (r = -er - Gn);
                  for (var s = 0, c = e.length; s < c; ++s)
                    if ((d = (f = e[s]).length))
                      for (
                        var f,
                          d,
                          p = f[d - 1],
                          h = Qi(p),
                          v = p[1] / 2 + tr,
                          m = fr(v),
                          y = ur(v),
                          g = 0;
                        g < d;
                        ++g, h = w, m = k, y = S, p = b
                      ) {
                        var b = f[g],
                          w = Qi(b),
                          _ = b[1] / 2 + tr,
                          k = fr(_),
                          S = ur(_),
                          x = w - h,
                          E = x >= 0 ? 1 : -1,
                          C = E * x,
                          N = C > Jn,
                          P = m * k;
                        if (
                          (u.add(lr(P * E * fr(C), y * S + P * ur(C))),
                          (a += N ? x + E * nr : x),
                          N ^ (h >= n) ^ (w >= n))
                        ) {
                          var z = Bi(Ui(p), Ui(b));
                          Wi(z);
                          var M = Bi(o, z);
                          Wi(M);
                          var T = (N ^ (x >= 0) ? -1 : 1) * vr(M[2]);
                          (r > T || (r === T && (z[0] || z[1]))) &&
                            (l += N ^ (x >= 0) ? 1 : -1);
                        }
                      }
                  return (a < -Gn || (a < Gn && u < -Zn)) ^ (1 & l);
                })(o, r);
                a.length
                  ? (f || (i.polygonStart(), (f = !0)), Fi(a, Zi, e, n, i))
                  : e &&
                    (f || (i.polygonStart(), (f = !0)),
                    i.lineStart(),
                    n(null, null, 1, i),
                    i.lineEnd()),
                  f && (i.polygonEnd(), (f = !1)),
                  (a = o = null);
              },
              sphere: function () {
                i.polygonStart(),
                  i.lineStart(),
                  n(null, null, 1, i),
                  i.lineEnd(),
                  i.polygonEnd();
              },
            };
          function p(t, n) {
            e(t, n) && i.point(t, n);
          }
          function h(e, t) {
            u.point(e, t);
          }
          function v() {
            (d.point = h), u.lineStart();
          }
          function m() {
            (d.point = p), u.lineEnd();
          }
          function y(e, t) {
            l.push([e, t]), c.point(e, t);
          }
          function g() {
            c.lineStart(), (l = []);
          }
          function b() {
            y(l[0][0], l[0][1]), c.lineEnd();
            var e,
              t,
              n,
              r,
              u = c.clean(),
              d = s.result(),
              p = d.length;
            if ((l.pop(), o.push(l), (l = null), p))
              if (1 & u) {
                if ((t = (n = d[0]).length - 1) > 0) {
                  for (
                    f || (i.polygonStart(), (f = !0)), i.lineStart(), e = 0;
                    e < t;
                    ++e
                  )
                    i.point((r = n[e])[0], r[1]);
                  i.lineEnd();
                }
              } else
                p > 1 && 2 & u && d.push(d.pop().concat(d.shift())),
                  a.push(d.filter(Gi));
          }
          return d;
        };
      }
      function Gi(e) {
        return e.length > 1;
      }
      function Zi(e, t) {
        return (
          ((e = e.x)[0] < 0 ? e[1] - er - Gn : er - e[1]) -
          ((t = t.x)[0] < 0 ? t[1] - er - Gn : er - t[1])
        );
      }
      var Ji = Ki(
        function () {
          return !0;
        },
        function (e) {
          var t,
            n = NaN,
            r = NaN,
            i = NaN;
          return {
            lineStart: function () {
              e.lineStart(), (t = 1);
            },
            point: function (o, a) {
              var l = o > 0 ? Jn : -Jn,
                u = or(o - n);
              or(u - Jn) < Gn
                ? (e.point(n, (r = (r + a) / 2 > 0 ? er : -er)),
                  e.point(i, r),
                  e.lineEnd(),
                  e.lineStart(),
                  e.point(l, r),
                  e.point(o, r),
                  (t = 0))
                : i !== l &&
                  u >= Jn &&
                  (or(n - i) < Gn && (n -= i * Gn),
                  or(o - l) < Gn && (o -= l * Gn),
                  (r = (function (e, t, n, r) {
                    var i,
                      o,
                      a = fr(e - n);
                    return or(a) > Gn
                      ? ar(
                          (fr(t) * (o = ur(r)) * fr(n) -
                            fr(r) * (i = ur(t)) * fr(e)) /
                            (i * o * a)
                        )
                      : (t + r) / 2;
                  })(n, r, o, a)),
                  e.point(i, r),
                  e.lineEnd(),
                  e.lineStart(),
                  e.point(l, r),
                  (t = 0)),
                e.point((n = o), (r = a)),
                (i = l);
            },
            lineEnd: function () {
              e.lineEnd(), (n = r = NaN);
            },
            clean: function () {
              return 2 - t;
            },
          };
        },
        function (e, t, n, r) {
          var i;
          if (null == e)
            (i = n * er),
              r.point(-Jn, i),
              r.point(0, i),
              r.point(Jn, i),
              r.point(Jn, 0),
              r.point(Jn, -i),
              r.point(0, -i),
              r.point(-Jn, -i),
              r.point(-Jn, 0),
              r.point(-Jn, i);
          else if (or(e[0] - t[0]) > Gn) {
            var o = e[0] < t[0] ? Jn : -Jn;
            (i = (n * o) / 2), r.point(-o, i), r.point(0, i), r.point(o, i);
          } else r.point(t[0], t[1]);
        },
        [-Jn, -er]
      );
      function eo(e, t, n, r, i, o) {
        if (n) {
          var a = ur(t),
            l = fr(t),
            u = r * n;
          null == i
            ? ((i = t + r * nr), (o = t - u / 2))
            : ((i = to(a, i)),
              (o = to(a, o)),
              (r > 0 ? i < o : i > o) && (i += r * nr));
          for (var s, c = i; r > 0 ? c > o : c < o; c -= u)
            (s = ji([a, -l * ur(c), -l * fr(c)])), e.point(s[0], s[1]);
        }
      }
      function to(e, t) {
        ((t = Ui(t))[0] -= e), Wi(t);
        var n,
          r = (n = -t[1]) > 1 ? 0 : n < -1 ? Jn : Math.acos(n);
        return ((-t[2] < 0 ? -r : r) + nr - Gn) % nr;
      }
      var no = 1e9,
        ro = -no;
      function io(e, t, n, r) {
        function i(i, o) {
          return e <= i && i <= n && t <= o && o <= r;
        }
        function o(i, o, l, s) {
          var c = 0,
            f = 0;
          if (
            null == i ||
            (c = a(i, l)) !== (f = a(o, l)) ||
            (u(i, o) < 0) ^ (l > 0)
          )
            do {
              s.point(0 === c || 3 === c ? e : n, c > 1 ? r : t);
            } while ((c = (c + l + 4) % 4) !== f);
          else s.point(o[0], o[1]);
        }
        function a(r, i) {
          return or(r[0] - e) < Gn
            ? i > 0
              ? 0
              : 3
            : or(r[0] - n) < Gn
            ? i > 0
              ? 2
              : 1
            : or(r[1] - t) < Gn
            ? i > 0
              ? 1
              : 0
            : i > 0
            ? 3
            : 2;
        }
        function l(e, t) {
          return u(e.x, t.x);
        }
        function u(e, t) {
          var n = a(e, 1),
            r = a(t, 1);
          return n !== r
            ? n - r
            : 0 === n
            ? t[1] - e[1]
            : 1 === n
            ? e[0] - t[0]
            : 2 === n
            ? e[1] - t[1]
            : t[0] - e[0];
        }
        return function (a) {
          var u,
            s,
            c,
            f,
            d,
            p,
            h,
            v,
            m,
            y,
            g,
            b = a,
            w = Ri(),
            _ = {
              point: k,
              lineStart: function () {
                (_.point = S), s && s.push((c = []));
                (y = !0), (m = !1), (h = v = NaN);
              },
              lineEnd: function () {
                u && (S(f, d), p && m && w.rejoin(), u.push(w.result()));
                (_.point = k), m && b.lineEnd();
              },
              polygonStart: function () {
                (b = w), (u = []), (s = []), (g = !0);
              },
              polygonEnd: function () {
                var t = (function () {
                    for (var t = 0, n = 0, i = s.length; n < i; ++n)
                      for (
                        var o,
                          a,
                          l = s[n],
                          u = 1,
                          c = l.length,
                          f = l[0],
                          d = f[0],
                          p = f[1];
                        u < c;
                        ++u
                      )
                        (o = d),
                          (a = p),
                          (d = (f = l[u])[0]),
                          (p = f[1]),
                          a <= r
                            ? p > r &&
                              (d - o) * (r - a) > (p - a) * (e - o) &&
                              ++t
                            : p <= r &&
                              (d - o) * (r - a) < (p - a) * (e - o) &&
                              --t;
                    return t;
                  })(),
                  n = g && t,
                  i = (u = Xi(u)).length;
                (n || i) &&
                  (a.polygonStart(),
                  n && (a.lineStart(), o(null, null, 1, a), a.lineEnd()),
                  i && Fi(u, l, t, o, a),
                  a.polygonEnd());
                (b = a), (u = s = c = null);
              },
            };
          function k(e, t) {
            i(e, t) && b.point(e, t);
          }
          function S(o, a) {
            var l = i(o, a);
            if ((s && c.push([o, a]), y))
              (f = o),
                (d = a),
                (p = l),
                (y = !1),
                l && (b.lineStart(), b.point(o, a));
            else if (l && m) b.point(o, a);
            else {
              var u = [
                  (h = Math.max(ro, Math.min(no, h))),
                  (v = Math.max(ro, Math.min(no, v))),
                ],
                w = [
                  (o = Math.max(ro, Math.min(no, o))),
                  (a = Math.max(ro, Math.min(no, a))),
                ];
              !(function (e, t, n, r, i, o) {
                var a,
                  l = e[0],
                  u = e[1],
                  s = 0,
                  c = 1,
                  f = t[0] - l,
                  d = t[1] - u;
                if (((a = n - l), f || !(a > 0))) {
                  if (((a /= f), f < 0)) {
                    if (a < s) return;
                    a < c && (c = a);
                  } else if (f > 0) {
                    if (a > c) return;
                    a > s && (s = a);
                  }
                  if (((a = i - l), f || !(a < 0))) {
                    if (((a /= f), f < 0)) {
                      if (a > c) return;
                      a > s && (s = a);
                    } else if (f > 0) {
                      if (a < s) return;
                      a < c && (c = a);
                    }
                    if (((a = r - u), d || !(a > 0))) {
                      if (((a /= d), d < 0)) {
                        if (a < s) return;
                        a < c && (c = a);
                      } else if (d > 0) {
                        if (a > c) return;
                        a > s && (s = a);
                      }
                      if (((a = o - u), d || !(a < 0))) {
                        if (((a /= d), d < 0)) {
                          if (a > c) return;
                          a > s && (s = a);
                        } else if (d > 0) {
                          if (a < s) return;
                          a < c && (c = a);
                        }
                        return (
                          s > 0 && ((e[0] = l + s * f), (e[1] = u + s * d)),
                          c < 1 && ((t[0] = l + c * f), (t[1] = u + c * d)),
                          !0
                        );
                      }
                    }
                  }
                }
              })(u, w, e, t, n, r)
                ? l && (b.lineStart(), b.point(o, a), (g = !1))
                : (m || (b.lineStart(), b.point(u[0], u[1])),
                  b.point(w[0], w[1]),
                  l || b.lineEnd(),
                  (g = !1));
            }
            (h = o), (v = a), (m = l);
          }
          return _;
        };
      }
      function oo(e) {
        return function (t) {
          var n = new ao();
          for (var r in e) n[r] = e[r];
          return (n.stream = t), n;
        };
      }
      function ao() {}
      function lo(e, t, n) {
        var r = e.clipExtent && e.clipExtent();
        return (
          e.scale(150).translate([0, 0]),
          null != r && e.clipExtent(null),
          Qn(n, e.stream(Dr)),
          t(Dr.result()),
          null != r && e.clipExtent(r),
          e
        );
      }
      function uo(e, t, n) {
        return lo(
          e,
          function (n) {
            var r = t[1][0] - t[0][0],
              i = t[1][1] - t[0][1],
              o = Math.min(r / (n[1][0] - n[0][0]), i / (n[1][1] - n[0][1])),
              a = +t[0][0] + (r - o * (n[1][0] + n[0][0])) / 2,
              l = +t[0][1] + (i - o * (n[1][1] + n[0][1])) / 2;
            e.scale(150 * o).translate([a, l]);
          },
          n
        );
      }
      ao.prototype = {
        constructor: ao,
        point: function (e, t) {
          this.stream.point(e, t);
        },
        sphere: function () {
          this.stream.sphere();
        },
        lineStart: function () {
          this.stream.lineStart();
        },
        lineEnd: function () {
          this.stream.lineEnd();
        },
        polygonStart: function () {
          this.stream.polygonStart();
        },
        polygonEnd: function () {
          this.stream.polygonEnd();
        },
      };
      var so = 16,
        co = ur(30 * ir);
      function fo(e, t) {
        return +t
          ? (function (e, t) {
              function n(r, i, o, a, l, u, s, c, f, d, p, h, v, m) {
                var y = s - r,
                  g = c - i,
                  b = y * y + g * g;
                if (b > 4 * t && v--) {
                  var w = a + d,
                    _ = l + p,
                    k = u + h,
                    S = pr(w * w + _ * _ + k * k),
                    x = vr((k /= S)),
                    E =
                      or(or(k) - 1) < Gn || or(o - f) < Gn
                        ? (o + f) / 2
                        : lr(_, w),
                    C = e(E, x),
                    N = C[0],
                    P = C[1],
                    z = N - r,
                    M = P - i,
                    T = g * z - y * M;
                  ((T * T) / b > t ||
                    or((y * z + g * M) / b - 0.5) > 0.3 ||
                    a * d + l * p + u * h < co) &&
                    (n(r, i, o, a, l, u, N, P, E, (w /= S), (_ /= S), k, v, m),
                    m.point(N, P),
                    n(N, P, E, w, _, k, s, c, f, d, p, h, v, m));
                }
              }
              return function (t) {
                var r,
                  i,
                  o,
                  a,
                  l,
                  u,
                  s,
                  c,
                  f,
                  d,
                  p,
                  h,
                  v = {
                    point: m,
                    lineStart: y,
                    lineEnd: b,
                    polygonStart: function () {
                      t.polygonStart(), (v.lineStart = w);
                    },
                    polygonEnd: function () {
                      t.polygonEnd(), (v.lineStart = y);
                    },
                  };
                function m(n, r) {
                  (n = e(n, r)), t.point(n[0], n[1]);
                }
                function y() {
                  (c = NaN), (v.point = g), t.lineStart();
                }
                function g(r, i) {
                  var o = Ui([r, i]),
                    a = e(r, i);
                  n(
                    c,
                    f,
                    s,
                    d,
                    p,
                    h,
                    (c = a[0]),
                    (f = a[1]),
                    (s = r),
                    (d = o[0]),
                    (p = o[1]),
                    (h = o[2]),
                    so,
                    t
                  ),
                    t.point(c, f);
                }
                function b() {
                  (v.point = m), t.lineEnd();
                }
                function w() {
                  y(), (v.point = _), (v.lineEnd = k);
                }
                function _(e, t) {
                  g((r = e), t),
                    (i = c),
                    (o = f),
                    (a = d),
                    (l = p),
                    (u = h),
                    (v.point = g);
                }
                function k() {
                  n(c, f, s, d, p, h, i, o, r, a, l, u, so, t),
                    (v.lineEnd = b),
                    b();
                }
                return v;
              };
            })(e, t)
          : (function (e) {
              return oo({
                point: function (t, n) {
                  (t = e(t, n)), this.stream.point(t[0], t[1]);
                },
              });
            })(e);
      }
      var po = oo({
        point: function (e, t) {
          this.stream.point(e * ir, t * ir);
        },
      });
      function ho(e, t, n, r, i, o) {
        if (!o)
          return (function (e, t, n, r, i) {
            function o(o, a) {
              return [t + e * (o *= r), n - e * (a *= i)];
            }
            return (
              (o.invert = function (o, a) {
                return [((o - t) / e) * r, ((n - a) / e) * i];
              }),
              o
            );
          })(e, t, n, r, i);
        var a = ur(o),
          l = fr(o),
          u = a * e,
          s = l * e,
          c = a / e,
          f = l / e,
          d = (l * n - a * t) / e,
          p = (l * t + a * n) / e;
        function h(e, o) {
          return [u * (e *= r) - s * (o *= i) + t, n - s * e - u * o];
        }
        return (
          (h.invert = function (e, t) {
            return [r * (c * e - f * t + d), i * (p - f * e - c * t)];
          }),
          h
        );
      }
      function vo(e) {
        return (function (e) {
          var t,
            n,
            r,
            i,
            o,
            a,
            l,
            u,
            s,
            c,
            f = 150,
            d = 480,
            p = 250,
            h = 0,
            v = 0,
            m = 0,
            y = 0,
            g = 0,
            b = 0,
            w = 1,
            _ = 1,
            k = null,
            S = Ji,
            x = null,
            E = Un,
            C = 0.5;
          function N(e) {
            return u(e[0] * ir, e[1] * ir);
          }
          function P(e) {
            return (e = u.invert(e[0], e[1])) && [e[0] * rr, e[1] * rr];
          }
          function z() {
            var e = ho(f, 0, 0, w, _, b).apply(null, t(h, v)),
              r = ho(f, d - e[0], p - e[1], w, _, b);
            return (
              (n = Mi(m, y, g)),
              (l = Pi(t, r)),
              (u = Pi(n, l)),
              (a = fo(l, C)),
              M()
            );
          }
          function M() {
            return (s = c = null), N;
          }
          return (
            (N.stream = function (e) {
              return s && c === e
                ? s
                : (s = po(
                    (function (e) {
                      return oo({
                        point: function (t, n) {
                          var r = e(t, n);
                          return this.stream.point(r[0], r[1]);
                        },
                      });
                    })(n)(S(a(E((c = e)))))
                  ));
            }),
            (N.preclip = function (e) {
              return arguments.length ? ((S = e), (k = void 0), M()) : S;
            }),
            (N.postclip = function (e) {
              return arguments.length
                ? ((E = e), (x = r = i = o = null), M())
                : E;
            }),
            (N.clipAngle = function (e) {
              return arguments.length
                ? ((S = +e
                    ? (function (e) {
                        var t = ur(e),
                          n = 6 * ir,
                          r = t > 0,
                          i = or(t) > Gn;
                        function o(e, n) {
                          return ur(e) * ur(n) > t;
                        }
                        function a(e, n, r) {
                          var i = [1, 0, 0],
                            o = Bi(Ui(e), Ui(n)),
                            a = Vi(o, o),
                            l = o[0],
                            u = a - l * l;
                          if (!u) return !r && e;
                          var s = (t * a) / u,
                            c = (-t * l) / u,
                            f = Bi(i, o),
                            d = Hi(i, s);
                          $i(d, Hi(o, c));
                          var p = f,
                            h = Vi(d, p),
                            v = Vi(p, p),
                            m = h * h - v * (Vi(d, d) - 1);
                          if (!(m < 0)) {
                            var y = pr(m),
                              g = Hi(p, (-h - y) / v);
                            if (($i(g, d), (g = ji(g)), !r)) return g;
                            var b,
                              w = e[0],
                              _ = n[0],
                              k = e[1],
                              S = n[1];
                            _ < w && ((b = w), (w = _), (_ = b));
                            var x = _ - w,
                              E = or(x - Jn) < Gn;
                            if (
                              (!E && S < k && ((b = k), (k = S), (S = b)),
                              E || x < Gn
                                ? E
                                  ? (k + S > 0) ^
                                    (g[1] < (or(g[0] - w) < Gn ? k : S))
                                  : k <= g[1] && g[1] <= S
                                : (x > Jn) ^ (w <= g[0] && g[0] <= _))
                            ) {
                              var C = Hi(p, (-h + y) / v);
                              return $i(C, d), [g, ji(C)];
                            }
                          }
                        }
                        function l(t, n) {
                          var i = r ? e : Jn - e,
                            o = 0;
                          return (
                            t < -i ? (o |= 1) : t > i && (o |= 2),
                            n < -i ? (o |= 4) : n > i && (o |= 8),
                            o
                          );
                        }
                        return Ki(
                          o,
                          function (e) {
                            var t, n, u, s, c;
                            return {
                              lineStart: function () {
                                (s = u = !1), (c = 1);
                              },
                              point: function (f, d) {
                                var p,
                                  h = [f, d],
                                  v = o(f, d),
                                  m = r
                                    ? v
                                      ? 0
                                      : l(f, d)
                                    : v
                                    ? l(f + (f < 0 ? Jn : -Jn), d)
                                    : 0;
                                if (
                                  (!t && (s = u = v) && e.lineStart(),
                                  v !== u &&
                                    (!(p = a(t, h)) || Ai(t, p) || Ai(h, p)) &&
                                    (h[2] = 1),
                                  v !== u)
                                )
                                  (c = 0),
                                    v
                                      ? (e.lineStart(),
                                        (p = a(h, t)),
                                        e.point(p[0], p[1]))
                                      : ((p = a(t, h)),
                                        e.point(p[0], p[1], 2),
                                        e.lineEnd()),
                                    (t = p);
                                else if (i && t && r ^ v) {
                                  var y;
                                  m & n ||
                                    !(y = a(h, t, !0)) ||
                                    ((c = 0),
                                    r
                                      ? (e.lineStart(),
                                        e.point(y[0][0], y[0][1]),
                                        e.point(y[1][0], y[1][1]),
                                        e.lineEnd())
                                      : (e.point(y[1][0], y[1][1]),
                                        e.lineEnd(),
                                        e.lineStart(),
                                        e.point(y[0][0], y[0][1], 3)));
                                }
                                !v || (t && Ai(t, h)) || e.point(h[0], h[1]),
                                  (t = h),
                                  (u = v),
                                  (n = m);
                              },
                              lineEnd: function () {
                                u && e.lineEnd(), (t = null);
                              },
                              clean: function () {
                                return c | ((s && u) << 1);
                              },
                            };
                          },
                          function (t, r, i, o) {
                            eo(o, e, n, i, t, r);
                          },
                          r ? [0, -e] : [-Jn, e - Jn]
                        );
                      })((k = e * ir))
                    : ((k = null), Ji)),
                  M())
                : k * rr;
            }),
            (N.clipExtent = function (e) {
              return arguments.length
                ? ((E =
                    null == e
                      ? ((x = r = i = o = null), Un)
                      : io(
                          (x = +e[0][0]),
                          (r = +e[0][1]),
                          (i = +e[1][0]),
                          (o = +e[1][1])
                        )),
                  M())
                : null == x
                ? null
                : [
                    [x, r],
                    [i, o],
                  ];
            }),
            (N.scale = function (e) {
              return arguments.length ? ((f = +e), z()) : f;
            }),
            (N.translate = function (e) {
              return arguments.length
                ? ((d = +e[0]), (p = +e[1]), z())
                : [d, p];
            }),
            (N.center = function (e) {
              return arguments.length
                ? ((h = (e[0] % 360) * ir), (v = (e[1] % 360) * ir), z())
                : [h * rr, v * rr];
            }),
            (N.rotate = function (e) {
              return arguments.length
                ? ((m = (e[0] % 360) * ir),
                  (y = (e[1] % 360) * ir),
                  (g = e.length > 2 ? (e[2] % 360) * ir : 0),
                  z())
                : [m * rr, y * rr, g * rr];
            }),
            (N.angle = function (e) {
              return arguments.length ? ((b = (e % 360) * ir), z()) : b * rr;
            }),
            (N.reflectX = function (e) {
              return arguments.length ? ((w = e ? -1 : 1), z()) : w < 0;
            }),
            (N.reflectY = function (e) {
              return arguments.length ? ((_ = e ? -1 : 1), z()) : _ < 0;
            }),
            (N.precision = function (e) {
              return arguments.length ? ((a = fo(l, (C = e * e))), M()) : pr(C);
            }),
            (N.fitExtent = function (e, t) {
              return uo(N, e, t);
            }),
            (N.fitSize = function (e, t) {
              return (function (e, t, n) {
                return uo(e, [[0, 0], t], n);
              })(N, e, t);
            }),
            (N.fitWidth = function (e, t) {
              return (function (e, t, n) {
                return lo(
                  e,
                  function (n) {
                    var r = +t,
                      i = r / (n[1][0] - n[0][0]),
                      o = (r - i * (n[1][0] + n[0][0])) / 2,
                      a = -i * n[0][1];
                    e.scale(150 * i).translate([o, a]);
                  },
                  n
                );
              })(N, e, t);
            }),
            (N.fitHeight = function (e, t) {
              return (function (e, t, n) {
                return lo(
                  e,
                  function (n) {
                    var r = +t,
                      i = r / (n[1][1] - n[0][1]),
                      o = -i * n[0][0],
                      a = (r - i * (n[1][1] + n[0][1])) / 2;
                    e.scale(150 * i).translate([o, a]);
                  },
                  n
                );
              })(N, e, t);
            }),
            function () {
              return (
                (t = e.apply(this, arguments)), (N.invert = t.invert && P), z()
              );
            }
          );
        })(function () {
          return e;
        })();
      }
      function mo(e, t) {
        return [e, cr(hr((er + t) / 2))];
      }
      function yo() {
        return (function (e) {
          var t,
            n,
            r,
            i = vo(e),
            o = i.center,
            a = i.scale,
            l = i.translate,
            u = i.clipExtent,
            s = null;
          function c() {
            var o = Jn * a(),
              l = i(
                (function (e) {
                  function t(t) {
                    return (
                      ((t = e(t[0] * ir, t[1] * ir))[0] *= rr), (t[1] *= rr), t
                    );
                  }
                  return (
                    (e = Mi(
                      e[0] * ir,
                      e[1] * ir,
                      e.length > 2 ? e[2] * ir : 0
                    )),
                    (t.invert = function (t) {
                      return (
                        ((t = e.invert(t[0] * ir, t[1] * ir))[0] *= rr),
                        (t[1] *= rr),
                        t
                      );
                    }),
                    t
                  );
                })(i.rotate()).invert([0, 0])
              );
            return u(
              null == s
                ? [
                    [l[0] - o, l[1] - o],
                    [l[0] + o, l[1] + o],
                  ]
                : e === mo
                ? [
                    [Math.max(l[0] - o, s), t],
                    [Math.min(l[0] + o, n), r],
                  ]
                : [
                    [s, Math.max(l[1] - o, t)],
                    [n, Math.min(l[1] + o, r)],
                  ]
            );
          }
          return (
            (i.scale = function (e) {
              return arguments.length ? (a(e), c()) : a();
            }),
            (i.translate = function (e) {
              return arguments.length ? (l(e), c()) : l();
            }),
            (i.center = function (e) {
              return arguments.length ? (o(e), c()) : o();
            }),
            (i.clipExtent = function (e) {
              return arguments.length
                ? (null == e
                    ? (s = t = n = r = null)
                    : ((s = +e[0][0]),
                      (t = +e[0][1]),
                      (n = +e[1][0]),
                      (r = +e[1][1])),
                  c())
                : null == s
                ? null
                : [
                    [s, t],
                    [n, r],
                  ];
            }),
            c()
          );
        })(mo).scale(961 / nr);
      }
      function go(e) {
        return "string" === typeof e
          ? new xe([[document.querySelector(e)]], [document.documentElement])
          : new xe([[e]], Se);
      }
      mo.invert = function (e, t) {
        return [e, 2 * ar(sr(t)) - er];
      };
      var bo, wo, _o, ko, So, xo, Eo, Co, No, Po, zo, Mo, To, Lo;
      Array.prototype.slice;
      function Oo(e) {
        return function () {
          return e;
        };
      }
      function Ro(e) {
        this._context = e;
      }
      function Ao(e) {
        return new Ro(e);
      }
      Ro.prototype = {
        areaStart: function () {
          this._line = 0;
        },
        areaEnd: function () {
          this._line = NaN;
        },
        lineStart: function () {
          this._point = 0;
        },
        lineEnd: function () {
          (this._line || (0 !== this._line && 1 === this._point)) &&
            this._context.closePath(),
            (this._line = 1 - this._line);
        },
        point: function (e, t) {
          switch (((e = +e), (t = +t), this._point)) {
            case 0:
              (this._point = 1),
                this._line
                  ? this._context.lineTo(e, t)
                  : this._context.moveTo(e, t);
              break;
            case 1:
              this._point = 2;
            default:
              this._context.lineTo(e, t);
          }
        },
      };
      var Io = Math.PI,
        Fo = 2 * Io,
        Do = 1e-6,
        jo = Fo - Do;
      function Uo(e) {
        this._ += e[0];
        for (var t = 1, n = e.length; t < n; ++t) this._ += arguments[t] + e[t];
      }
      var Vo = (function () {
        function e(t) {
          qn(this, e),
            (this._x0 = this._y0 = this._x1 = this._y1 = null),
            (this._ = ""),
            (this._append =
              null == t
                ? Uo
                : (function (e) {
                    var t = Math.floor(e);
                    if (!(t >= 0))
                      throw new Error("invalid digits: ".concat(e));
                    if (t > 15) return Uo;
                    var n = Math.pow(10, t);
                    return function (e) {
                      this._ += e[0];
                      for (var t = 1, r = e.length; t < r; ++t)
                        this._ += Math.round(arguments[t] * n) / n + e[t];
                    };
                  })(t));
        }
        return (
          Xn(e, [
            {
              key: "moveTo",
              value: function (e, t) {
                this._append(
                  bo || (bo = xi(["M", ",", ""])),
                  (this._x0 = this._x1 = +e),
                  (this._y0 = this._y1 = +t)
                );
              },
            },
            {
              key: "closePath",
              value: function () {
                null !== this._x1 &&
                  ((this._x1 = this._x0),
                  (this._y1 = this._y0),
                  this._append(wo || (wo = xi(["Z"]))));
              },
            },
            {
              key: "lineTo",
              value: function (e, t) {
                this._append(
                  _o || (_o = xi(["L", ",", ""])),
                  (this._x1 = +e),
                  (this._y1 = +t)
                );
              },
            },
            {
              key: "quadraticCurveTo",
              value: function (e, t, n, r) {
                this._append(
                  ko || (ko = xi(["Q", ",", ",", ",", ""])),
                  +e,
                  +t,
                  (this._x1 = +n),
                  (this._y1 = +r)
                );
              },
            },
            {
              key: "bezierCurveTo",
              value: function (e, t, n, r, i, o) {
                this._append(
                  So || (So = xi(["C", ",", ",", ",", ",", ",", ""])),
                  +e,
                  +t,
                  +n,
                  +r,
                  (this._x1 = +i),
                  (this._y1 = +o)
                );
              },
            },
            {
              key: "arcTo",
              value: function (e, t, n, r, i) {
                if (((e = +e), (t = +t), (n = +n), (r = +r), (i = +i) < 0))
                  throw new Error("negative radius: ".concat(i));
                var o = this._x1,
                  a = this._y1,
                  l = n - e,
                  u = r - t,
                  s = o - e,
                  c = a - t,
                  f = s * s + c * c;
                if (null === this._x1)
                  this._append(
                    xo || (xo = xi(["M", ",", ""])),
                    (this._x1 = e),
                    (this._y1 = t)
                  );
                else if (f > Do)
                  if (Math.abs(c * l - u * s) > Do && i) {
                    var d = n - o,
                      p = r - a,
                      h = l * l + u * u,
                      v = d * d + p * p,
                      m = Math.sqrt(h),
                      y = Math.sqrt(f),
                      g =
                        i *
                        Math.tan(
                          (Io - Math.acos((h + f - v) / (2 * m * y))) / 2
                        ),
                      b = g / y,
                      w = g / m;
                    Math.abs(b - 1) > Do &&
                      this._append(
                        Co || (Co = xi(["L", ",", ""])),
                        e + b * s,
                        t + b * c
                      ),
                      this._append(
                        No || (No = xi(["A", ",", ",0,0,", ",", ",", ""])),
                        i,
                        i,
                        +(c * d > s * p),
                        (this._x1 = e + w * l),
                        (this._y1 = t + w * u)
                      );
                  } else
                    this._append(
                      Eo || (Eo = xi(["L", ",", ""])),
                      (this._x1 = e),
                      (this._y1 = t)
                    );
                else;
              },
            },
            {
              key: "arc",
              value: function (e, t, n, r, i, o) {
                if (((e = +e), (t = +t), (o = !!o), (n = +n) < 0))
                  throw new Error("negative radius: ".concat(n));
                var a = n * Math.cos(r),
                  l = n * Math.sin(r),
                  u = e + a,
                  s = t + l,
                  c = 1 ^ o,
                  f = o ? r - i : i - r;
                null === this._x1
                  ? this._append(Po || (Po = xi(["M", ",", ""])), u, s)
                  : (Math.abs(this._x1 - u) > Do ||
                      Math.abs(this._y1 - s) > Do) &&
                    this._append(zo || (zo = xi(["L", ",", ""])), u, s),
                  n &&
                    (f < 0 && (f = (f % Fo) + Fo),
                    f > jo
                      ? this._append(
                          Mo ||
                            (Mo = xi([
                              "A",
                              ",",
                              ",0,1,",
                              ",",
                              ",",
                              "A",
                              ",",
                              ",0,1,",
                              ",",
                              ",",
                              "",
                            ])),
                          n,
                          n,
                          c,
                          e - a,
                          t - l,
                          n,
                          n,
                          c,
                          (this._x1 = u),
                          (this._y1 = s)
                        )
                      : f > Do &&
                        this._append(
                          To || (To = xi(["A", ",", ",0,", ",", ",", ",", ""])),
                          n,
                          n,
                          +(f >= Io),
                          c,
                          (this._x1 = e + n * Math.cos(i)),
                          (this._y1 = t + n * Math.sin(i))
                        ));
              },
            },
            {
              key: "rect",
              value: function (e, t, n, r) {
                this._append(
                  Lo || (Lo = xi(["M", ",", "h", "v", "h", "Z"])),
                  (this._x0 = this._x1 = +e),
                  (this._y0 = this._y1 = +t),
                  (n = +n),
                  +r,
                  -n
                );
              },
            },
            {
              key: "toString",
              value: function () {
                return this._;
              },
            },
          ]),
          e
        );
      })();
      function Bo(e) {
        return e[0];
      }
      function $o(e) {
        return e[1];
      }
      function Ho(e, t) {
        var n = Oo(!0),
          r = null,
          i = Ao,
          o = null,
          a = (function (e) {
            var t = 3;
            return (
              (e.digits = function (n) {
                if (!arguments.length) return t;
                if (null == n) t = null;
                else {
                  var r = Math.floor(n);
                  if (!(r >= 0))
                    throw new RangeError("invalid digits: ".concat(n));
                  t = r;
                }
                return e;
              }),
              function () {
                return new Vo(t);
              }
            );
          })(l);
        function l(l) {
          var u,
            s,
            c,
            f = (l = (function (e) {
              return "object" === typeof e && "length" in e ? e : Array.from(e);
            })(l)).length,
            d = !1;
          for (null == r && (o = i((c = a()))), u = 0; u <= f; ++u)
            !(u < f && n((s = l[u]), u, l)) === d &&
              ((d = !d) ? o.lineStart() : o.lineEnd()),
              d && o.point(+e(s, u, l), +t(s, u, l));
          if (c) return (o = null), c + "" || null;
        }
        return (
          (e = "function" === typeof e ? e : void 0 === e ? Bo : Oo(e)),
          (t = "function" === typeof t ? t : void 0 === t ? $o : Oo(t)),
          (l.x = function (t) {
            return arguments.length
              ? ((e = "function" === typeof t ? t : Oo(+t)), l)
              : e;
          }),
          (l.y = function (e) {
            return arguments.length
              ? ((t = "function" === typeof e ? e : Oo(+e)), l)
              : t;
          }),
          (l.defined = function (e) {
            return arguments.length
              ? ((n = "function" === typeof e ? e : Oo(!!e)), l)
              : n;
          }),
          (l.curve = function (e) {
            return arguments.length ? ((i = e), null != r && (o = i(r)), l) : i;
          }),
          (l.context = function (e) {
            return arguments.length
              ? (null == e ? (r = o = null) : (o = i((r = e))), l)
              : r;
          }),
          l
        );
      }
      function Wo(e, t, n) {
        e._context.bezierCurveTo(
          e._x1 + e._k * (e._x2 - e._x0),
          e._y1 + e._k * (e._y2 - e._y0),
          e._x2 + e._k * (e._x1 - t),
          e._y2 + e._k * (e._y1 - n),
          e._x2,
          e._y2
        );
      }
      function Qo(e, t) {
        (this._context = e), (this._k = (1 - t) / 6);
      }
      Vo.prototype,
        (Qo.prototype = {
          areaStart: function () {
            this._line = 0;
          },
          areaEnd: function () {
            this._line = NaN;
          },
          lineStart: function () {
            (this._x0 =
              this._x1 =
              this._x2 =
              this._y0 =
              this._y1 =
              this._y2 =
                NaN),
              (this._point = 0);
          },
          lineEnd: function () {
            switch (this._point) {
              case 2:
                this._context.lineTo(this._x2, this._y2);
                break;
              case 3:
                Wo(this, this._x1, this._y1);
            }
            (this._line || (0 !== this._line && 1 === this._point)) &&
              this._context.closePath(),
              (this._line = 1 - this._line);
          },
          point: function (e, t) {
            switch (((e = +e), (t = +t), this._point)) {
              case 0:
                (this._point = 1),
                  this._line
                    ? this._context.lineTo(e, t)
                    : this._context.moveTo(e, t);
                break;
              case 1:
                (this._point = 2), (this._x1 = e), (this._y1 = t);
                break;
              case 2:
                this._point = 3;
              default:
                Wo(this, e, t);
            }
            (this._x0 = this._x1),
              (this._x1 = this._x2),
              (this._x2 = e),
              (this._y0 = this._y1),
              (this._y1 = this._y2),
              (this._y2 = t);
          },
        });
      var qo = (function e(t) {
          function n(e) {
            return new Qo(e, t);
          }
          return (
            (n.tension = function (t) {
              return e(+t);
            }),
            n
          );
        })(0),
        Yo = { capture: !0, passive: !1 };
      function Xo(e) {
        e.preventDefault(), e.stopImmediatePropagation();
      }
      function Ko(e) {
        return ((e = Math.exp(e)) + 1 / e) / 2;
      }
      var Go = (function e(t, n, r) {
        function i(e, i) {
          var o,
            a,
            l = e[0],
            u = e[1],
            s = e[2],
            c = i[0],
            f = i[1],
            d = i[2],
            p = c - l,
            h = f - u,
            v = p * p + h * h;
          if (v < 1e-12)
            (a = Math.log(d / s) / t),
              (o = function (e) {
                return [l + e * p, u + e * h, s * Math.exp(t * e * a)];
              });
          else {
            var m = Math.sqrt(v),
              y = (d * d - s * s + r * v) / (2 * s * n * m),
              g = (d * d - s * s - r * v) / (2 * d * n * m),
              b = Math.log(Math.sqrt(y * y + 1) - y),
              w = Math.log(Math.sqrt(g * g + 1) - g);
            (a = (w - b) / t),
              (o = function (e) {
                var r,
                  i = e * a,
                  o = Ko(b),
                  c =
                    (s / (n * m)) *
                    (o *
                      ((r = t * i + b), ((r = Math.exp(2 * r)) - 1) / (r + 1)) -
                      (function (e) {
                        return ((e = Math.exp(e)) - 1 / e) / 2;
                      })(b));
                return [l + c * p, u + c * h, (s * o) / Ko(t * i + b)];
              });
          }
          return (o.duration = (1e3 * a * t) / Math.SQRT2), o;
        }
        return (
          (i.rho = function (t) {
            var n = Math.max(0.001, +t),
              r = n * n;
            return e(n, r, r * r);
          }),
          i
        );
      })(Math.SQRT2, 2, 4);
      function Zo(e, t) {
        if (
          ((e = (function (e) {
            for (var t; (t = e.sourceEvent); ) e = t;
            return e;
          })(e)),
          void 0 === t && (t = e.currentTarget),
          t)
        ) {
          var n = t.ownerSVGElement || t;
          if (n.createSVGPoint) {
            var r = n.createSVGPoint();
            return (
              (r.x = e.clientX),
              (r.y = e.clientY),
              [(r = r.matrixTransform(t.getScreenCTM().inverse())).x, r.y]
            );
          }
          if (t.getBoundingClientRect) {
            var i = t.getBoundingClientRect();
            return [
              e.clientX - i.left - t.clientLeft,
              e.clientY - i.top - t.clientTop,
            ];
          }
        }
        return [e.pageX, e.pageY];
      }
      var Jo = function (e) {
        return function () {
          return e;
        };
      };
      function ea(e, t) {
        var n = t.sourceEvent,
          r = t.target,
          i = t.transform,
          o = t.dispatch;
        Object.defineProperties(this, {
          type: { value: e, enumerable: !0, configurable: !0 },
          sourceEvent: { value: n, enumerable: !0, configurable: !0 },
          target: { value: r, enumerable: !0, configurable: !0 },
          transform: { value: i, enumerable: !0, configurable: !0 },
          _: { value: o },
        });
      }
      function ta(e, t, n) {
        (this.k = e), (this.x = t), (this.y = n);
      }
      ta.prototype = {
        constructor: ta,
        scale: function (e) {
          return 1 === e ? this : new ta(this.k * e, this.x, this.y);
        },
        translate: function (e, t) {
          return (0 === e) & (0 === t)
            ? this
            : new ta(this.k, this.x + this.k * e, this.y + this.k * t);
        },
        apply: function (e) {
          return [e[0] * this.k + this.x, e[1] * this.k + this.y];
        },
        applyX: function (e) {
          return e * this.k + this.x;
        },
        applyY: function (e) {
          return e * this.k + this.y;
        },
        invert: function (e) {
          return [(e[0] - this.x) / this.k, (e[1] - this.y) / this.k];
        },
        invertX: function (e) {
          return (e - this.x) / this.k;
        },
        invertY: function (e) {
          return (e - this.y) / this.k;
        },
        rescaleX: function (e) {
          return e
            .copy()
            .domain(e.range().map(this.invertX, this).map(e.invert, e));
        },
        rescaleY: function (e) {
          return e
            .copy()
            .domain(e.range().map(this.invertY, this).map(e.invert, e));
        },
        toString: function () {
          return (
            "translate(" + this.x + "," + this.y + ") scale(" + this.k + ")"
          );
        },
      };
      var na = new ta(1, 0, 0);
      function ra(e) {
        e.stopImmediatePropagation();
      }
      function ia(e) {
        e.preventDefault(), e.stopImmediatePropagation();
      }
      function oa(e) {
        return (!e.ctrlKey || "wheel" === e.type) && !e.button;
      }
      function aa() {
        var e = this;
        return e instanceof SVGElement
          ? (e = e.ownerSVGElement || e).hasAttribute("viewBox")
            ? [
                [(e = e.viewBox.baseVal).x, e.y],
                [e.x + e.width, e.y + e.height],
              ]
            : [
                [0, 0],
                [e.width.baseVal.value, e.height.baseVal.value],
              ]
          : [
              [0, 0],
              [e.clientWidth, e.clientHeight],
            ];
      }
      function la() {
        return this.__zoom || na;
      }
      function ua(e) {
        return (
          -e.deltaY *
          (1 === e.deltaMode ? 0.05 : e.deltaMode ? 1 : 0.002) *
          (e.ctrlKey ? 10 : 1)
        );
      }
      function sa() {
        return navigator.maxTouchPoints || "ontouchstart" in this;
      }
      function ca(e, t, n) {
        var r = e.invertX(t[0][0]) - n[0][0],
          i = e.invertX(t[1][0]) - n[1][0],
          o = e.invertY(t[0][1]) - n[0][1],
          a = e.invertY(t[1][1]) - n[1][1];
        return e.translate(
          i > r ? (r + i) / 2 : Math.min(0, r) || Math.max(0, i),
          a > o ? (o + a) / 2 : Math.min(0, o) || Math.max(0, a)
        );
      }
      function fa() {
        var e,
          t,
          n,
          r = oa,
          i = aa,
          o = ca,
          a = ua,
          l = sa,
          u = [0, 1 / 0],
          s = [
            [-1 / 0, -1 / 0],
            [1 / 0, 1 / 0],
          ],
          c = 250,
          f = Go,
          d = Re("start", "zoom", "end"),
          p = 500,
          h = 150,
          v = 0,
          m = 10;
        function y(e) {
          e.property("__zoom", la)
            .on("wheel.zoom", x, { passive: !1 })
            .on("mousedown.zoom", E)
            .on("dblclick.zoom", C)
            .filter(l)
            .on("touchstart.zoom", N)
            .on("touchmove.zoom", P)
            .on("touchend.zoom touchcancel.zoom", z)
            .style("-webkit-tap-highlight-color", "rgba(0,0,0,0)");
        }
        function g(e, t) {
          return (t = Math.max(u[0], Math.min(u[1], t))) === e.k
            ? e
            : new ta(t, e.x, e.y);
        }
        function b(e, t, n) {
          var r = t[0] - n[0] * e.k,
            i = t[1] - n[1] * e.k;
          return r === e.x && i === e.y ? e : new ta(e.k, r, i);
        }
        function w(e) {
          return [(+e[0][0] + +e[1][0]) / 2, (+e[0][1] + +e[1][1]) / 2];
        }
        function _(e, t, n, r) {
          e.on("start.zoom", function () {
            k(this, arguments).event(r).start();
          })
            .on("interrupt.zoom end.zoom", function () {
              k(this, arguments).event(r).end();
            })
            .tween("zoom", function () {
              var e = this,
                o = arguments,
                a = k(e, o).event(r),
                l = i.apply(e, o),
                u =
                  null == n
                    ? w(l)
                    : "function" === typeof n
                    ? n.apply(e, o)
                    : n,
                s = Math.max(l[1][0] - l[0][0], l[1][1] - l[0][1]),
                c = e.__zoom,
                d = "function" === typeof t ? t.apply(e, o) : t,
                p = f(c.invert(u).concat(s / c.k), d.invert(u).concat(s / d.k));
              return function (e) {
                if (1 === e) e = d;
                else {
                  var t = p(e),
                    n = s / t[2];
                  e = new ta(n, u[0] - t[0] * n, u[1] - t[1] * n);
                }
                a.zoom(null, e);
              };
            });
        }
        function k(e, t, n) {
          return (!n && e.__zooming) || new S(e, t);
        }
        function S(e, t) {
          (this.that = e),
            (this.args = t),
            (this.active = 0),
            (this.sourceEvent = null),
            (this.extent = i.apply(e, t)),
            (this.taps = 0);
        }
        function x(e) {
          for (
            var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), i = 1;
            i < t;
            i++
          )
            n[i - 1] = arguments[i];
          if (r.apply(this, arguments)) {
            var l = k(this, n).event(e),
              c = this.__zoom,
              f = Math.max(
                u[0],
                Math.min(u[1], c.k * Math.pow(2, a.apply(this, arguments)))
              ),
              d = Zo(e);
            if (l.wheel)
              (l.mouse[0][0] === d[0] && l.mouse[0][1] === d[1]) ||
                (l.mouse[1] = c.invert((l.mouse[0] = d))),
                clearTimeout(l.wheel);
            else {
              if (c.k === f) return;
              (l.mouse = [d, c.invert(d)]), ft(this), l.start();
            }
            ia(e),
              (l.wheel = setTimeout(function () {
                (l.wheel = null), l.end();
              }, h)),
              l.zoom(
                "mouse",
                o(b(g(c, f), l.mouse[0], l.mouse[1]), l.extent, s)
              );
          }
        }
        function E(e) {
          for (
            var t = arguments.length, i = new Array(t > 1 ? t - 1 : 0), a = 1;
            a < t;
            a++
          )
            i[a - 1] = arguments[a];
          if (!n && r.apply(this, arguments)) {
            var l = e.currentTarget,
              u = k(this, i, !0).event(e),
              c = go(e.view)
                .on(
                  "mousemove.zoom",
                  function (e) {
                    if ((ia(e), !u.moved)) {
                      var t = e.clientX - d,
                        n = e.clientY - p;
                      u.moved = t * t + n * n > v;
                    }
                    u.event(e).zoom(
                      "mouse",
                      o(
                        b(u.that.__zoom, (u.mouse[0] = Zo(e, l)), u.mouse[1]),
                        u.extent,
                        s
                      )
                    );
                  },
                  !0
                )
                .on(
                  "mouseup.zoom",
                  function (e) {
                    c.on("mousemove.zoom mouseup.zoom", null),
                      (function (e, t) {
                        var n = e.document.documentElement,
                          r = go(e).on("dragstart.drag", null);
                        t &&
                          (r.on("click.drag", Xo, Yo),
                          setTimeout(function () {
                            r.on("click.drag", null);
                          }, 0)),
                          "onselectstart" in n
                            ? r.on("selectstart.drag", null)
                            : ((n.style.MozUserSelect = n.__noselect),
                              delete n.__noselect);
                      })(e.view, u.moved),
                      ia(e),
                      u.event(e).end();
                  },
                  !0
                ),
              f = Zo(e, l),
              d = e.clientX,
              p = e.clientY;
            !(function (e) {
              var t = e.document.documentElement,
                n = go(e).on("dragstart.drag", Xo, Yo);
              "onselectstart" in t
                ? n.on("selectstart.drag", Xo, Yo)
                : ((t.__noselect = t.style.MozUserSelect),
                  (t.style.MozUserSelect = "none"));
            })(e.view),
              ra(e),
              (u.mouse = [f, this.__zoom.invert(f)]),
              ft(this),
              u.start();
          }
        }
        function C(e) {
          for (
            var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), a = 1;
            a < t;
            a++
          )
            n[a - 1] = arguments[a];
          if (r.apply(this, arguments)) {
            var l = this.__zoom,
              u = Zo(e.changedTouches ? e.changedTouches[0] : e, this),
              f = l.invert(u),
              d = l.k * (e.shiftKey ? 0.5 : 2),
              p = o(b(g(l, d), u, f), i.apply(this, n), s);
            ia(e),
              c > 0
                ? go(this).transition().duration(c).call(_, p, u, e)
                : go(this).call(y.transform, p, u, e);
          }
        }
        function N(n) {
          for (
            var i = arguments.length, o = new Array(i > 1 ? i - 1 : 0), a = 1;
            a < i;
            a++
          )
            o[a - 1] = arguments[a];
          if (r.apply(this, arguments)) {
            var l,
              u,
              s,
              c,
              f = n.touches,
              d = f.length,
              h = k(this, o, n.changedTouches.length === d).event(n);
            for (ra(n), u = 0; u < d; ++u)
              (c = [
                (c = Zo((s = f[u]), this)),
                this.__zoom.invert(c),
                s.identifier,
              ]),
                h.touch0
                  ? h.touch1 ||
                    h.touch0[2] === c[2] ||
                    ((h.touch1 = c), (h.taps = 0))
                  : ((h.touch0 = c), (l = !0), (h.taps = 1 + !!e));
            e && (e = clearTimeout(e)),
              l &&
                (h.taps < 2 &&
                  ((t = c[0]),
                  (e = setTimeout(function () {
                    e = null;
                  }, p))),
                ft(this),
                h.start());
          }
        }
        function P(e) {
          if (this.__zooming) {
            for (
              var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), r = 1;
              r < t;
              r++
            )
              n[r - 1] = arguments[r];
            var i,
              a,
              l,
              u,
              c = k(this, n).event(e),
              f = e.changedTouches,
              d = f.length;
            for (ia(e), i = 0; i < d; ++i)
              (l = Zo((a = f[i]), this)),
                c.touch0 && c.touch0[2] === a.identifier
                  ? (c.touch0[0] = l)
                  : c.touch1 &&
                    c.touch1[2] === a.identifier &&
                    (c.touch1[0] = l);
            if (((a = c.that.__zoom), c.touch1)) {
              var p = c.touch0[0],
                h = c.touch0[1],
                v = c.touch1[0],
                m = c.touch1[1],
                y = (y = v[0] - p[0]) * y + (y = v[1] - p[1]) * y,
                w = (w = m[0] - h[0]) * w + (w = m[1] - h[1]) * w;
              (a = g(a, Math.sqrt(y / w))),
                (l = [(p[0] + v[0]) / 2, (p[1] + v[1]) / 2]),
                (u = [(h[0] + m[0]) / 2, (h[1] + m[1]) / 2]);
            } else {
              if (!c.touch0) return;
              (l = c.touch0[0]), (u = c.touch0[1]);
            }
            c.zoom("touch", o(b(a, l, u), c.extent, s));
          }
        }
        function z(e) {
          for (
            var r = arguments.length, i = new Array(r > 1 ? r - 1 : 0), o = 1;
            o < r;
            o++
          )
            i[o - 1] = arguments[o];
          if (this.__zooming) {
            var a,
              l,
              u = k(this, i).event(e),
              s = e.changedTouches,
              c = s.length;
            for (
              ra(e),
                n && clearTimeout(n),
                n = setTimeout(function () {
                  n = null;
                }, p),
                a = 0;
              a < c;
              ++a
            )
              (l = s[a]),
                u.touch0 && u.touch0[2] === l.identifier
                  ? delete u.touch0
                  : u.touch1 && u.touch1[2] === l.identifier && delete u.touch1;
            if (
              (u.touch1 &&
                !u.touch0 &&
                ((u.touch0 = u.touch1), delete u.touch1),
              u.touch0)
            )
              u.touch0[1] = this.__zoom.invert(u.touch0[0]);
            else if (
              (u.end(),
              2 === u.taps &&
                ((l = Zo(l, this)), Math.hypot(t[0] - l[0], t[1] - l[1]) < m))
            ) {
              var f = go(this).on("dblclick.zoom");
              f && f.apply(this, arguments);
            }
          }
        }
        return (
          (y.transform = function (e, t, n, r) {
            var i = e.selection ? e.selection() : e;
            i.property("__zoom", la),
              e !== i
                ? _(e, t, n, r)
                : i.interrupt().each(function () {
                    k(this, arguments)
                      .event(r)
                      .start()
                      .zoom(
                        null,
                        "function" === typeof t ? t.apply(this, arguments) : t
                      )
                      .end();
                  });
          }),
          (y.scaleBy = function (e, t, n, r) {
            y.scaleTo(
              e,
              function () {
                return (
                  this.__zoom.k *
                  ("function" === typeof t ? t.apply(this, arguments) : t)
                );
              },
              n,
              r
            );
          }),
          (y.scaleTo = function (e, t, n, r) {
            y.transform(
              e,
              function () {
                var e = i.apply(this, arguments),
                  r = this.__zoom,
                  a =
                    null == n
                      ? w(e)
                      : "function" === typeof n
                      ? n.apply(this, arguments)
                      : n,
                  l = r.invert(a),
                  u = "function" === typeof t ? t.apply(this, arguments) : t;
                return o(b(g(r, u), a, l), e, s);
              },
              n,
              r
            );
          }),
          (y.translateBy = function (e, t, n, r) {
            y.transform(
              e,
              function () {
                return o(
                  this.__zoom.translate(
                    "function" === typeof t ? t.apply(this, arguments) : t,
                    "function" === typeof n ? n.apply(this, arguments) : n
                  ),
                  i.apply(this, arguments),
                  s
                );
              },
              null,
              r
            );
          }),
          (y.translateTo = function (e, t, n, r, a) {
            y.transform(
              e,
              function () {
                var e = i.apply(this, arguments),
                  a = this.__zoom,
                  l =
                    null == r
                      ? w(e)
                      : "function" === typeof r
                      ? r.apply(this, arguments)
                      : r;
                return o(
                  na
                    .translate(l[0], l[1])
                    .scale(a.k)
                    .translate(
                      "function" === typeof t ? -t.apply(this, arguments) : -t,
                      "function" === typeof n ? -n.apply(this, arguments) : -n
                    ),
                  e,
                  s
                );
              },
              r,
              a
            );
          }),
          (S.prototype = {
            event: function (e) {
              return e && (this.sourceEvent = e), this;
            },
            start: function () {
              return (
                1 === ++this.active &&
                  ((this.that.__zooming = this), this.emit("start")),
                this
              );
            },
            zoom: function (e, t) {
              return (
                this.mouse &&
                  "mouse" !== e &&
                  (this.mouse[1] = t.invert(this.mouse[0])),
                this.touch0 &&
                  "touch" !== e &&
                  (this.touch0[1] = t.invert(this.touch0[0])),
                this.touch1 &&
                  "touch" !== e &&
                  (this.touch1[1] = t.invert(this.touch1[0])),
                (this.that.__zoom = t),
                this.emit("zoom"),
                this
              );
            },
            end: function () {
              return (
                0 === --this.active &&
                  (delete this.that.__zooming, this.emit("end")),
                this
              );
            },
            emit: function (e) {
              var t = go(this.that).datum();
              d.call(
                e,
                this.that,
                new ea(e, {
                  sourceEvent: this.sourceEvent,
                  target: y,
                  type: e,
                  transform: this.that.__zoom,
                  dispatch: d,
                }),
                t
              );
            },
          }),
          (y.wheelDelta = function (e) {
            return arguments.length
              ? ((a = "function" === typeof e ? e : Jo(+e)), y)
              : a;
          }),
          (y.filter = function (e) {
            return arguments.length
              ? ((r = "function" === typeof e ? e : Jo(!!e)), y)
              : r;
          }),
          (y.touchable = function (e) {
            return arguments.length
              ? ((l = "function" === typeof e ? e : Jo(!!e)), y)
              : l;
          }),
          (y.extent = function (e) {
            return arguments.length
              ? ((i =
                  "function" === typeof e
                    ? e
                    : Jo([
                        [+e[0][0], +e[0][1]],
                        [+e[1][0], +e[1][1]],
                      ])),
                y)
              : i;
          }),
          (y.scaleExtent = function (e) {
            return arguments.length
              ? ((u[0] = +e[0]), (u[1] = +e[1]), y)
              : [u[0], u[1]];
          }),
          (y.translateExtent = function (e) {
            return arguments.length
              ? ((s[0][0] = +e[0][0]),
                (s[1][0] = +e[1][0]),
                (s[0][1] = +e[0][1]),
                (s[1][1] = +e[1][1]),
                y)
              : [
                  [s[0][0], s[0][1]],
                  [s[1][0], s[1][1]],
                ];
          }),
          (y.constrain = function (e) {
            return arguments.length ? ((o = e), y) : o;
          }),
          (y.duration = function (e) {
            return arguments.length ? ((c = +e), y) : c;
          }),
          (y.interpolate = function (e) {
            return arguments.length ? ((f = e), y) : f;
          }),
          (y.on = function () {
            var e = d.on.apply(d, arguments);
            return e === d ? y : e;
          }),
          (y.clickDistance = function (e) {
            return arguments.length ? ((v = (e = +e) * e), y) : Math.sqrt(v);
          }),
          (y.tapDistance = function (e) {
            return arguments.length ? ((m = +e), y) : m;
          }),
          y
        );
      }
      ta.prototype;
      var da = n(164),
        pa = n(184);
      function ha() {
        var t = (0, e.useRef)();
        return (
          (0, e.useEffect)(function () {
            go(".india-without-disputed > svg").remove();
            var e = go(t.current)
                .append("svg")
                .attr("class", "my-canvas")
                .attr("width", 1100)
                .attr("height", 1100),
              n = fa()
                .scaleExtent([1, 10])
                .on("zoom", function (t, n) {
                  e.selectAll("path").attr("transform", t.transform),
                    e
                      .selectAll("circle")
                      .attr("transform", t.transform)
                      .attr("r", function (e) {
                        if (e.properties.mass)
                          return (
                            Math.pow(parseInt(e.properties.mass), 1 / 9) /
                            t.transform.k
                          );
                      });
                });
            e.call(n);
            e.append("g");
            var r = (function () {
              var t,
                n =
                  ((t = i().mark(function t() {
                    var n, r, o, a, u, s, c;
                    return i().wrap(function (t) {
                      for (;;)
                        switch ((t.prev = t.next)) {
                          case 0:
                            return (
                              (t.next = 2),
                              Promise.all([
                                jn(
                                  "https://raw.githubusercontent.com/india-in-data/india_maps/master/india_state_ut_administered.geojson"
                                ),
                                jn(
                                  "https://raw.githubusercontent.com/india-in-data/waterways/master/ind_waterways_named.json"
                                ),
                              ])
                            );
                          case 2:
                            (n = t.sent),
                              (r = l(n, 2)),
                              (o = r[0]),
                              (a = r[1]),
                              (u = yo().fitSize([1100, 1100], o)),
                              (s = Ni().projection(u)),
                              (c = Ho()
                                .x(function (e) {
                                  return u(e)[0];
                                })
                                .y(function (e) {
                                  return u(e)[1];
                                })
                                .curve(qo)),
                              e
                                .selectAll(".map-path")
                                .data(o.features)
                                .enter()
                                .append("path")
                                .attr("class", "map-path")
                                .attr("d", s)
                                .attr("fill", "#bdd7e7")
                                .attr("stroke", "#deebf7")
                                .attr("stroke-width", 0.1),
                              e
                                .selectAll(".river-path")
                                .data(a.features)
                                .enter()
                                .append("path")
                                .attr("class", "river-path")
                                .attr("d", function (e) {
                                  return c(e.geometry.coordinates);
                                })
                                .attr("fill", "none")
                                .attr("stroke", "#1f77b4")
                                .attr("stroke-opacity", 0.7)
                                .attr("stroke-width", 0.7);
                          case 11:
                          case "end":
                            return t.stop();
                        }
                    }, t);
                  })),
                  function () {
                    var e = this,
                      n = arguments;
                    return new Promise(function (r, i) {
                      var o = t.apply(e, n);
                      function a(e) {
                        u(o, r, i, a, l, "next", e);
                      }
                      function l(e) {
                        u(o, r, i, a, l, "throw", e);
                      }
                      a(void 0);
                    });
                  });
              return function () {
                return n.apply(this, arguments);
              };
            })();
            r();
          }, []),
          (0, pa.jsx)("div", { ref: t, className: "india-without-disputed" })
        );
      }
      var va = ha;
      da.render(
        (0, pa.jsx)(ha, {}),
        document.getElementById("react-d3-container")
      );
      var ma = function (e) {
        e &&
          e instanceof Function &&
          n
            .e(787)
            .then(n.bind(n, 787))
            .then(function (t) {
              var n = t.getCLS,
                r = t.getFID,
                i = t.getFCP,
                o = t.getLCP,
                a = t.getTTFB;
              n(e), r(e), i(e), o(e), a(e);
            });
      };
      t
        .createRoot(document.getElementById("root"))
        .render((0, pa.jsx)(e.StrictMode, { children: (0, pa.jsx)(va, {}) })),
        ma();
    })();
})();
//# sourceMappingURL=main.457f66fc.js.map
