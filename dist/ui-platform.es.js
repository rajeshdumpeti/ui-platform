import Re, { createContext as Nt, useRef as xe, useLayoutEffect as zo, useEffect as Cn, useContext as Z, useId as qo, useCallback as Us, useMemo as De, Fragment as $s, createElement as Zo, useInsertionEffect as Jo, forwardRef as Qo, Component as ta } from "react";
const Ws = {
  // Navigation & Layout
  home: "home",
  menu: "menu",
  close: "close",
  expand_more: "expand_more",
  expand_less: "expand_less",
  arrow_back: "arrow_back",
  arrow_forward: "arrow_forward",
  arrow_upward: "arrow_upward",
  arrow_downward: "arrow_downward",
  chevron_left: "chevron_left",
  chevron_right: "chevron_right",
  chevron_up: "chevron_up",
  chevron_down: "chevron_down",
  // Actions
  add: "add",
  remove: "remove",
  create: "create",
  edit: "edit",
  delete: "delete",
  save: "save",
  cancel: "cancel",
  refresh: "refresh",
  download: "download",
  upload: "upload",
  cloud_upload: "cloud_upload",
  cloud_download: "cloud_download",
  print: "print",
  share: "share",
  // Files & Content
  folder: "folder",
  folder_open: "folder_open",
  insert_drive_file: "insert_drive_file",
  description: "description",
  article: "article",
  note: "note",
  list: "list",
  grid_view: "grid_view",
  view_list: "view_list",
  view_module: "view_module",
  // Communication
  mail: "mail",
  mail_outline: "mail_outline",
  mark_email_read: "mark_email_read",
  mark_email_unread: "mark_email_unread",
  chat: "chat",
  chat_bubble: "chat_bubble",
  chat_bubble_outline: "chat_bubble_outline",
  comment: "comment",
  forum: "forum",
  // User & Account
  person: "person",
  person_outline: "person_outline",
  group: "group",
  account_circle: "account_circle",
  login: "login",
  logout: "logout",
  manage_accounts: "manage_accounts",
  // Security & Permissions
  lock: "lock",
  lock_open: "lock_open",
  security: "security",
  verified_user: "verified_user",
  admin_panel_settings: "admin_panel_settings",
  // Notifications & Status
  notifications: "notifications",
  notifications_none: "notifications_none",
  notifications_active: "notifications_active",
  warning: "warning",
  error: "error",
  error_outline: "error_outline",
  info: "info",
  help: "help",
  help_outline: "help_outline",
  // Media
  image: "image",
  photo: "photo",
  photo_library: "photo_library",
  camera_alt: "camera_alt",
  videocam: "videocam",
  mic: "mic",
  headset: "headset",
  // Commerce & Payments
  shopping_cart: "shopping_cart",
  shopping_bag: "shopping_bag",
  payment: "payment",
  credit_card: "credit_card",
  receipt: "receipt",
  attach_money: "attach_money",
  // Time & Date
  schedule: "schedule",
  calendar_today: "calendar_today",
  event: "event",
  event_available: "event_available",
  event_busy: "event_busy",
  access_time: "access_time",
  timer: "timer",
  // Location & Maps
  location_on: "location_on",
  place: "place",
  map: "map",
  navigation: "navigation",
  pin_drop: "pin_drop",
  // Search & Filter
  search: "search",
  filter_list: "filter_list",
  sort: "sort",
  tune: "tune",
  // Settings & Configuration
  settings: "settings",
  build: "build",
  engineering: "engineering",
  // System & Devices
  computer: "computer",
  smartphone: "smartphone",
  tablet: "tablet",
  laptop: "laptop",
  desktop_windows: "desktop_windows",
  // Network & Connectivity
  wifi: "wifi",
  network_wifi: "network_wifi",
  signal_cellular_alt: "signal_cellular_alt",
  bluetooth: "bluetooth",
  // Battery & Power
  battery_std: "battery_std",
  battery_alert: "battery_alert",
  power: "power",
  // Visibility & Display
  visibility: "visibility",
  visibility_off: "visibility_off",
  brightness_auto: "brightness_auto",
  contrast: "contrast",
  // Favorite & Rating
  favorite: "favorite",
  favorite_border: "favorite_border",
  star: "star",
  star_border: "star_border",
  star_half: "star_half",
  grade: "grade",
  // Social & Share
  thumb_up: "thumb_up",
  thumb_down: "thumb_down",
  ios_share: "ios_share",
  // Content Modification
  content_copy: "content_copy",
  content_cut: "content_cut",
  content_paste: "content_paste",
  link: "link",
  link_off: "link_off",
  // Data & Analytics
  analytics: "analytics",
  bar_chart: "bar_chart",
  show_chart: "show_chart",
  timeline: "timeline",
  dashboard: "dashboard",
  // Business & Work
  work: "work",
  business: "business",
  apartment: "apartment",
  store: "store",
  // Transportation
  directions_car: "directions_car",
  flight: "flight",
  train: "train",
  directions_bus: "directions_bus",
  // Weather
  wb_sunny: "wb_sunny",
  cloud: "cloud",
  umbrella: "umbrella",
  // Health & Medical
  local_hospital: "local_hospital",
  medical_services: "medical_services",
  // Education
  school: "school",
  book: "book",
  library_books: "library_books",
  // Household
  kitchen: "kitchen",
  bed: "bed",
  chair: "chair",
  // More & Overflow
  more_vert: "more_vert",
  more_horiz: "more_horiz",
  // Status Indicators
  check: "check",
  check_circle: "check_circle",
  check_circle_outline: "check_circle_outline",
  add_circle: "add_circle",
  remove_circle: "remove_circle",
  radio_button_unchecked: "radio_button_unchecked",
  radio_button_checked: "radio_button_checked",
  circle: "circle",
  // Loading & Progress
  autorenew: "autorenew",
  cached: "cached",
  hourglass_empty: "hourglass_empty",
  hourglass_full: "hourglass_full",
  // Forms & Input
  check_box: "check_box",
  check_box_outline_blank: "check_box_outline_blank",
  indeterminate_check_box: "indeterminate_check_box",
  toggle_on: "toggle_on",
  toggle_off: "toggle_off",
  // Keyboard & Input
  keyboard: "keyboard",
  mouse: "mouse",
  touch_app: "touch_app",
  // Storage
  storage: "storage",
  sd_card: "sd_card",
  usb: "usb",
  // Developer
  code: "code",
  bug_report: "bug_report",
  api: "api"
}, Xf = {
  // Brand colors
  brand: {
    primary: {
      50: "#f0f9ff",
      100: "#e0f2fe",
      200: "#bae6fd",
      300: "#7dd3fc",
      400: "#38bdf8",
      500: "#0ea5e9",
      600: "#0284c7",
      700: "#0369a1",
      800: "#075985",
      900: "#0c4a6e"
    },
    secondary: {
      50: "#f8fafc",
      100: "#f1f5f9",
      200: "#e2e8f0",
      300: "#cbd5e1",
      400: "#94a3b8",
      500: "#64748b",
      600: "#475569",
      700: "#334155",
      800: "#1e293b",
      900: "#0f172a"
    }
  },
  // Semantic colors
  semantic: {
    success: {
      50: "#f0fdf4",
      100: "#dcfce7",
      200: "#bbf7d0",
      300: "#86efac",
      400: "#4ade80",
      500: "#22c55e",
      600: "#16a34a",
      700: "#15803d",
      800: "#166534",
      900: "#14532d"
    },
    warning: {
      50: "#fffbeb",
      100: "#fef3c7",
      200: "#fde68a",
      300: "#fcd34d",
      400: "#fbbf24",
      500: "#f59e0b",
      600: "#d97706",
      700: "#b45309",
      800: "#92400e",
      900: "#78350f"
    },
    error: {
      50: "#fef2f2",
      100: "#fee2e2",
      200: "#fecaca",
      300: "#fca5a5",
      400: "#f87171",
      500: "#ef4444",
      600: "#dc2626",
      700: "#b91c1c",
      800: "#991b1b",
      900: "#7f1d1d"
    },
    info: {
      50: "#f0f9ff",
      100: "#e0f2fe",
      200: "#bae6fd",
      300: "#7dd3fc",
      400: "#38bdf8",
      500: "#0ea5e9",
      600: "#0284c7",
      700: "#0369a1",
      800: "#075985",
      900: "#0c4a6e"
    }
  },
  // Neutral colors
  neutral: {
    white: "#ffffff",
    black: "#000000",
    transparent: "transparent",
    current: "currentColor"
  }
}, zf = {
  fontFamily: {
    sans: [
      "Inter",
      "ui-sans-serif",
      "system-ui",
      "-apple-system",
      "sans-serif"
    ],
    mono: ["JetBrains Mono", "ui-monospace", "SFMono-Regular", "monospace"],
    serif: ["ui-serif", "Georgia", "Cambria", "Times New Roman", "serif"]
  },
  fontSize: {
    xs: "0.75rem",
    // 12px
    sm: "0.875rem",
    // 14px
    base: "1rem",
    // 16px
    lg: "1.125rem",
    // 18px
    xl: "1.25rem",
    // 20px
    "2xl": "1.5rem",
    // 24px
    "3xl": "1.875rem",
    // 30px
    "4xl": "2.25rem",
    // 36px
    "5xl": "3rem",
    // 48px
    "6xl": "3.75rem"
    // 60px
  },
  fontWeight: {
    light: "300",
    normal: "400",
    medium: "500",
    semibold: "600",
    bold: "700",
    extrabold: "800"
  },
  lineHeight: {
    tight: "1.25",
    snug: "1.375",
    normal: "1.5",
    relaxed: "1.625",
    loose: "2"
  },
  letterSpacing: {
    tighter: "-0.05em",
    tight: "-0.025em",
    normal: "0em",
    wide: "0.025em",
    wider: "0.05em",
    widest: "0.1em"
  }
}, qf = {
  0: "0",
  1: "0.125rem",
  // 2px
  2: "0.25rem",
  // 4px
  3: "0.375rem",
  // 6px
  4: "0.5rem",
  // 8px
  5: "0.625rem",
  // 10px
  6: "0.75rem",
  // 12px
  8: "1rem",
  // 16px
  10: "1.25rem",
  // 20px
  12: "1.5rem",
  // 24px
  16: "2rem",
  // 32px
  20: "2.5rem",
  // 40px
  24: "3rem",
  // 48px
  32: "4rem",
  // 64px
  40: "5rem",
  // 80px
  48: "6rem",
  // 96px
  56: "7rem",
  // 112px
  64: "8rem"
  // 128px
}, Zf = {
  radius: {
    none: "0",
    sm: "0.125rem",
    // 2px
    base: "0.25rem",
    // 4px
    md: "0.375rem",
    // 6px
    lg: "0.5rem",
    // 8px
    xl: "0.75rem",
    // 12px
    "2xl": "1rem",
    // 16px
    "3xl": "1.5rem",
    // 24px
    full: "9999px"
  },
  width: {
    0: "0",
    1: "1px",
    2: "2px",
    4: "4px",
    8: "8px"
  },
  shadows: {
    sm: "0 1px 2px 0 rgb(0 0 0 / 0.05)",
    base: "0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1)",
    md: "0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)",
    lg: "0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)",
    xl: "0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)",
    "2xl": "0 25px 50px -12px rgb(0 0 0 / 0.25)",
    inner: "inset 0 2px 4px 0 rgb(0 0 0 / 0.05)"
  }
}, Jf = {
  hide: -1,
  auto: "auto",
  base: 0,
  docked: 10,
  dropdown: 1e3,
  sticky: 1100,
  banner: 1200,
  overlay: 1300,
  modal: 1400,
  popover: 1500,
  skipLink: 1600,
  toast: 1700,
  tooltip: 1800
}, Rt = {
  xs: "320px",
  sm: "640px",
  md: "768px",
  lg: "1024px",
  xl: "1280px",
  "2xl": "1536px"
}, Qf = {
  xs: `(min-width: ${Rt.xs})`,
  sm: `(min-width: ${Rt.sm})`,
  md: `(min-width: ${Rt.md})`,
  lg: `(min-width: ${Rt.lg})`,
  xl: `(min-width: ${Rt.xl})`,
  "2xl": `(min-width: ${Rt["2xl"]})`
}, th = {
  duration: {
    fastest: "75ms",
    faster: "100ms",
    fast: "150ms",
    normal: "200ms",
    slow: "300ms",
    slower: "500ms",
    slowest: "700ms"
  },
  easing: {
    linear: "linear",
    ease: "ease",
    easeIn: "ease-in",
    easeOut: "ease-out",
    easeInOut: "ease-in-out",
    bounce: "cubic-bezier(0.68, -0.55, 0.265, 1.55)"
  },
  keyframes: {
    spin: {
      from: { transform: "rotate(0deg)" },
      to: { transform: "rotate(360deg)" }
    },
    pulse: {
      "0%, 100%": { opacity: "1" },
      "50%": { opacity: "0.5" }
    },
    bounce: {
      "0%, 100%": {
        transform: "translateY(-25%)",
        animationTimingFunction: "cubic-bezier(0.8,0,1,1)"
      },
      "50%": {
        transform: "none",
        animationTimingFunction: "cubic-bezier(0,0,0.2,1)"
      }
    }
  }
};
var ge = { exports: {} }, Ht = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Pi;
function ea() {
  if (Pi) return Ht;
  Pi = 1;
  var t = Re, e = Symbol.for("react.element"), n = Symbol.for("react.fragment"), i = Object.prototype.hasOwnProperty, s = t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, o = { key: !0, ref: !0, __self: !0, __source: !0 };
  function r(a, l, u) {
    var c, h = {}, d = null, m = null;
    u !== void 0 && (d = "" + u), l.key !== void 0 && (d = "" + l.key), l.ref !== void 0 && (m = l.ref);
    for (c in l) i.call(l, c) && !o.hasOwnProperty(c) && (h[c] = l[c]);
    if (a && a.defaultProps) for (c in l = a.defaultProps, l) h[c] === void 0 && (h[c] = l[c]);
    return { $$typeof: e, type: a, key: d, ref: m, props: h, _owner: s.current };
  }
  return Ht.Fragment = n, Ht.jsx = r, Ht.jsxs = r, Ht;
}
var Xt = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var _i;
function na() {
  return _i || (_i = 1, process.env.NODE_ENV !== "production" && (function() {
    var t = Re, e = Symbol.for("react.element"), n = Symbol.for("react.portal"), i = Symbol.for("react.fragment"), s = Symbol.for("react.strict_mode"), o = Symbol.for("react.profiler"), r = Symbol.for("react.provider"), a = Symbol.for("react.context"), l = Symbol.for("react.forward_ref"), u = Symbol.for("react.suspense"), c = Symbol.for("react.suspense_list"), h = Symbol.for("react.memo"), d = Symbol.for("react.lazy"), m = Symbol.for("react.offscreen"), g = Symbol.iterator, v = "@@iterator";
    function T(f) {
      if (f === null || typeof f != "object")
        return null;
      var p = g && f[g] || f[v];
      return typeof p == "function" ? p : null;
    }
    var y = t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function b(f) {
      {
        for (var p = arguments.length, x = new Array(p > 1 ? p - 1 : 0), _ = 1; _ < p; _++)
          x[_ - 1] = arguments[_];
        w("error", f, x);
      }
    }
    function w(f, p, x) {
      {
        var _ = y.ReactDebugCurrentFrame, R = _.getStackAddendum();
        R !== "" && (p += "%s", x = x.concat([R]));
        var M = x.map(function(E) {
          return String(E);
        });
        M.unshift("Warning: " + p), Function.prototype.apply.call(console[f], console, M);
      }
    }
    var C = !1, S = !1, D = !1, j = !1, A = !1, W;
    W = Symbol.for("react.module.reference");
    function z(f) {
      return !!(typeof f == "string" || typeof f == "function" || f === i || f === o || A || f === s || f === u || f === c || j || f === m || C || S || D || typeof f == "object" && f !== null && (f.$$typeof === d || f.$$typeof === h || f.$$typeof === r || f.$$typeof === a || f.$$typeof === l || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      f.$$typeof === W || f.getModuleId !== void 0));
    }
    function pt(f, p, x) {
      var _ = f.displayName;
      if (_)
        return _;
      var R = p.displayName || p.name || "";
      return R !== "" ? x + "(" + R + ")" : x;
    }
    function Yt(f) {
      return f.displayName || "Context";
    }
    function at(f) {
      if (f == null)
        return null;
      if (typeof f.tag == "number" && b("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof f == "function")
        return f.displayName || f.name || null;
      if (typeof f == "string")
        return f;
      switch (f) {
        case i:
          return "Fragment";
        case n:
          return "Portal";
        case o:
          return "Profiler";
        case s:
          return "StrictMode";
        case u:
          return "Suspense";
        case c:
          return "SuspenseList";
      }
      if (typeof f == "object")
        switch (f.$$typeof) {
          case a:
            var p = f;
            return Yt(p) + ".Consumer";
          case r:
            var x = f;
            return Yt(x._context) + ".Provider";
          case l:
            return pt(f, f.render, "ForwardRef");
          case h:
            var _ = f.displayName || null;
            return _ !== null ? _ : at(f.type) || "Memo";
          case d: {
            var R = f, M = R._payload, E = R._init;
            try {
              return at(E(M));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var lt = Object.assign, gt = 0, Le, B, G, ct, ft, fe, ai;
    function li() {
    }
    li.__reactDisabledLog = !0;
    function wo() {
      {
        if (gt === 0) {
          Le = console.log, B = console.info, G = console.warn, ct = console.error, ft = console.group, fe = console.groupCollapsed, ai = console.groupEnd;
          var f = {
            configurable: !0,
            enumerable: !0,
            value: li,
            writable: !0
          };
          Object.defineProperties(console, {
            info: f,
            log: f,
            warn: f,
            error: f,
            group: f,
            groupCollapsed: f,
            groupEnd: f
          });
        }
        gt++;
      }
    }
    function So() {
      {
        if (gt--, gt === 0) {
          var f = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: lt({}, f, {
              value: Le
            }),
            info: lt({}, f, {
              value: B
            }),
            warn: lt({}, f, {
              value: G
            }),
            error: lt({}, f, {
              value: ct
            }),
            group: lt({}, f, {
              value: ft
            }),
            groupCollapsed: lt({}, f, {
              value: fe
            }),
            groupEnd: lt({}, f, {
              value: ai
            })
          });
        }
        gt < 0 && b("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var je = y.ReactCurrentDispatcher, Fe;
    function he(f, p, x) {
      {
        if (Fe === void 0)
          try {
            throw Error();
          } catch (R) {
            var _ = R.stack.trim().match(/\n( *(at )?)/);
            Fe = _ && _[1] || "";
          }
        return `
` + Fe + f;
      }
    }
    var Ie = !1, de;
    {
      var Po = typeof WeakMap == "function" ? WeakMap : Map;
      de = new Po();
    }
    function ci(f, p) {
      if (!f || Ie)
        return "";
      {
        var x = de.get(f);
        if (x !== void 0)
          return x;
      }
      var _;
      Ie = !0;
      var R = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var M;
      M = je.current, je.current = null, wo();
      try {
        if (p) {
          var E = function() {
            throw Error();
          };
          if (Object.defineProperty(E.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(E, []);
            } catch (q) {
              _ = q;
            }
            Reflect.construct(f, [], E);
          } else {
            try {
              E.call();
            } catch (q) {
              _ = q;
            }
            f.call(E.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (q) {
            _ = q;
          }
          f();
        }
      } catch (q) {
        if (q && _ && typeof q.stack == "string") {
          for (var V = q.stack.split(`
`), H = _.stack.split(`
`), F = V.length - 1, N = H.length - 1; F >= 1 && N >= 0 && V[F] !== H[N]; )
            N--;
          for (; F >= 1 && N >= 0; F--, N--)
            if (V[F] !== H[N]) {
              if (F !== 1 || N !== 1)
                do
                  if (F--, N--, N < 0 || V[F] !== H[N]) {
                    var Q = `
` + V[F].replace(" at new ", " at ");
                    return f.displayName && Q.includes("<anonymous>") && (Q = Q.replace("<anonymous>", f.displayName)), typeof f == "function" && de.set(f, Q), Q;
                  }
                while (F >= 1 && N >= 0);
              break;
            }
        }
      } finally {
        Ie = !1, je.current = M, So(), Error.prepareStackTrace = R;
      }
      var Et = f ? f.displayName || f.name : "", Tt = Et ? he(Et) : "";
      return typeof f == "function" && de.set(f, Tt), Tt;
    }
    function _o(f, p, x) {
      return ci(f, !1);
    }
    function Ao(f) {
      var p = f.prototype;
      return !!(p && p.isReactComponent);
    }
    function me(f, p, x) {
      if (f == null)
        return "";
      if (typeof f == "function")
        return ci(f, Ao(f));
      if (typeof f == "string")
        return he(f);
      switch (f) {
        case u:
          return he("Suspense");
        case c:
          return he("SuspenseList");
      }
      if (typeof f == "object")
        switch (f.$$typeof) {
          case l:
            return _o(f.render);
          case h:
            return me(f.type, p, x);
          case d: {
            var _ = f, R = _._payload, M = _._init;
            try {
              return me(M(R), p, x);
            } catch {
            }
          }
        }
      return "";
    }
    var Gt = Object.prototype.hasOwnProperty, ui = {}, fi = y.ReactDebugCurrentFrame;
    function pe(f) {
      if (f) {
        var p = f._owner, x = me(f.type, f._source, p ? p.type : null);
        fi.setExtraStackFrame(x);
      } else
        fi.setExtraStackFrame(null);
    }
    function Vo(f, p, x, _, R) {
      {
        var M = Function.call.bind(Gt);
        for (var E in f)
          if (M(f, E)) {
            var V = void 0;
            try {
              if (typeof f[E] != "function") {
                var H = Error((_ || "React class") + ": " + x + " type `" + E + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof f[E] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw H.name = "Invariant Violation", H;
              }
              V = f[E](p, E, _, x, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (F) {
              V = F;
            }
            V && !(V instanceof Error) && (pe(R), b("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", _ || "React class", x, E, typeof V), pe(null)), V instanceof Error && !(V.message in ui) && (ui[V.message] = !0, pe(R), b("Failed %s type: %s", x, V.message), pe(null));
          }
      }
    }
    var Co = Array.isArray;
    function Be(f) {
      return Co(f);
    }
    function Eo(f) {
      {
        var p = typeof Symbol == "function" && Symbol.toStringTag, x = p && f[Symbol.toStringTag] || f.constructor.name || "Object";
        return x;
      }
    }
    function Ro(f) {
      try {
        return hi(f), !1;
      } catch {
        return !0;
      }
    }
    function hi(f) {
      return "" + f;
    }
    function di(f) {
      if (Ro(f))
        return b("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", Eo(f)), hi(f);
    }
    var mi = y.ReactCurrentOwner, Do = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, pi, gi;
    function Mo(f) {
      if (Gt.call(f, "ref")) {
        var p = Object.getOwnPropertyDescriptor(f, "ref").get;
        if (p && p.isReactWarning)
          return !1;
      }
      return f.ref !== void 0;
    }
    function ko(f) {
      if (Gt.call(f, "key")) {
        var p = Object.getOwnPropertyDescriptor(f, "key").get;
        if (p && p.isReactWarning)
          return !1;
      }
      return f.key !== void 0;
    }
    function Oo(f, p) {
      typeof f.ref == "string" && mi.current;
    }
    function Lo(f, p) {
      {
        var x = function() {
          pi || (pi = !0, b("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", p));
        };
        x.isReactWarning = !0, Object.defineProperty(f, "key", {
          get: x,
          configurable: !0
        });
      }
    }
    function jo(f, p) {
      {
        var x = function() {
          gi || (gi = !0, b("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", p));
        };
        x.isReactWarning = !0, Object.defineProperty(f, "ref", {
          get: x,
          configurable: !0
        });
      }
    }
    var Fo = function(f, p, x, _, R, M, E) {
      var V = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: e,
        // Built-in properties that belong on the element
        type: f,
        key: p,
        ref: x,
        props: E,
        // Record the component responsible for creating this element.
        _owner: M
      };
      return V._store = {}, Object.defineProperty(V._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(V, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: _
      }), Object.defineProperty(V, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: R
      }), Object.freeze && (Object.freeze(V.props), Object.freeze(V)), V;
    };
    function Io(f, p, x, _, R) {
      {
        var M, E = {}, V = null, H = null;
        x !== void 0 && (di(x), V = "" + x), ko(p) && (di(p.key), V = "" + p.key), Mo(p) && (H = p.ref, Oo(p, R));
        for (M in p)
          Gt.call(p, M) && !Do.hasOwnProperty(M) && (E[M] = p[M]);
        if (f && f.defaultProps) {
          var F = f.defaultProps;
          for (M in F)
            E[M] === void 0 && (E[M] = F[M]);
        }
        if (V || H) {
          var N = typeof f == "function" ? f.displayName || f.name || "Unknown" : f;
          V && Lo(E, N), H && jo(E, N);
        }
        return Fo(f, V, H, R, _, mi.current, E);
      }
    }
    var Ne = y.ReactCurrentOwner, yi = y.ReactDebugCurrentFrame;
    function Ct(f) {
      if (f) {
        var p = f._owner, x = me(f.type, f._source, p ? p.type : null);
        yi.setExtraStackFrame(x);
      } else
        yi.setExtraStackFrame(null);
    }
    var Ue;
    Ue = !1;
    function $e(f) {
      return typeof f == "object" && f !== null && f.$$typeof === e;
    }
    function vi() {
      {
        if (Ne.current) {
          var f = at(Ne.current.type);
          if (f)
            return `

Check the render method of \`` + f + "`.";
        }
        return "";
      }
    }
    function Bo(f) {
      return "";
    }
    var bi = {};
    function No(f) {
      {
        var p = vi();
        if (!p) {
          var x = typeof f == "string" ? f : f.displayName || f.name;
          x && (p = `

Check the top-level render call using <` + x + ">.");
        }
        return p;
      }
    }
    function xi(f, p) {
      {
        if (!f._store || f._store.validated || f.key != null)
          return;
        f._store.validated = !0;
        var x = No(p);
        if (bi[x])
          return;
        bi[x] = !0;
        var _ = "";
        f && f._owner && f._owner !== Ne.current && (_ = " It was passed a child from " + at(f._owner.type) + "."), Ct(f), b('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', x, _), Ct(null);
      }
    }
    function Ti(f, p) {
      {
        if (typeof f != "object")
          return;
        if (Be(f))
          for (var x = 0; x < f.length; x++) {
            var _ = f[x];
            $e(_) && xi(_, p);
          }
        else if ($e(f))
          f._store && (f._store.validated = !0);
        else if (f) {
          var R = T(f);
          if (typeof R == "function" && R !== f.entries)
            for (var M = R.call(f), E; !(E = M.next()).done; )
              $e(E.value) && xi(E.value, p);
        }
      }
    }
    function Uo(f) {
      {
        var p = f.type;
        if (p == null || typeof p == "string")
          return;
        var x;
        if (typeof p == "function")
          x = p.propTypes;
        else if (typeof p == "object" && (p.$$typeof === l || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        p.$$typeof === h))
          x = p.propTypes;
        else
          return;
        if (x) {
          var _ = at(p);
          Vo(x, f.props, "prop", _, f);
        } else if (p.PropTypes !== void 0 && !Ue) {
          Ue = !0;
          var R = at(p);
          b("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", R || "Unknown");
        }
        typeof p.getDefaultProps == "function" && !p.getDefaultProps.isReactClassApproved && b("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function $o(f) {
      {
        for (var p = Object.keys(f.props), x = 0; x < p.length; x++) {
          var _ = p[x];
          if (_ !== "children" && _ !== "key") {
            Ct(f), b("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", _), Ct(null);
            break;
          }
        }
        f.ref !== null && (Ct(f), b("Invalid attribute `ref` supplied to `React.Fragment`."), Ct(null));
      }
    }
    var wi = {};
    function Si(f, p, x, _, R, M) {
      {
        var E = z(f);
        if (!E) {
          var V = "";
          (f === void 0 || typeof f == "object" && f !== null && Object.keys(f).length === 0) && (V += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var H = Bo();
          H ? V += H : V += vi();
          var F;
          f === null ? F = "null" : Be(f) ? F = "array" : f !== void 0 && f.$$typeof === e ? (F = "<" + (at(f.type) || "Unknown") + " />", V = " Did you accidentally export a JSX literal instead of a component?") : F = typeof f, b("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", F, V);
        }
        var N = Io(f, p, x, R, M);
        if (N == null)
          return N;
        if (E) {
          var Q = p.children;
          if (Q !== void 0)
            if (_)
              if (Be(Q)) {
                for (var Et = 0; Et < Q.length; Et++)
                  Ti(Q[Et], f);
                Object.freeze && Object.freeze(Q);
              } else
                b("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              Ti(Q, f);
        }
        if (Gt.call(p, "key")) {
          var Tt = at(f), q = Object.keys(p).filter(function(Xo) {
            return Xo !== "key";
          }), We = q.length > 0 ? "{key: someKey, " + q.join(": ..., ") + ": ...}" : "{key: someKey}";
          if (!wi[Tt + We]) {
            var Ho = q.length > 0 ? "{" + q.join(": ..., ") + ": ...}" : "{}";
            b(`A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`, We, Tt, Ho, Tt), wi[Tt + We] = !0;
          }
        }
        return f === i ? $o(N) : Uo(N), N;
      }
    }
    function Wo(f, p, x) {
      return Si(f, p, x, !0);
    }
    function Ko(f, p, x) {
      return Si(f, p, x, !1);
    }
    var Yo = Ko, Go = Wo;
    Xt.Fragment = i, Xt.jsx = Yo, Xt.jsxs = Go;
  })()), Xt;
}
var Ai;
function ia() {
  return Ai || (Ai = 1, process.env.NODE_ENV === "production" ? ge.exports = ea() : ge.exports = na()), ge.exports;
}
var U = ia();
const Ks = Nt({});
function sa(t) {
  const e = xe(null);
  return e.current === null && (e.current = t()), e.current;
}
const En = typeof window < "u", ra = En ? zo : Cn, Rn = /* @__PURE__ */ Nt(null);
function Dn(t, e) {
  t.indexOf(e) === -1 && t.push(e);
}
function Mn(t, e) {
  const n = t.indexOf(e);
  n > -1 && t.splice(n, 1);
}
const ht = (t, e, n) => n > e ? e : n < t ? t : n;
function on(t, e) {
  return e ? `${t}. For more information and steps for solving, visit https://motion.dev/troubleshooting/${e}` : t;
}
let Ut = () => {
}, dt = () => {
};
process.env.NODE_ENV !== "production" && (Ut = (t, e, n) => {
  !t && typeof console < "u" && console.warn(on(e, n));
}, dt = (t, e, n) => {
  if (!t)
    throw new Error(on(e, n));
});
const mt = {}, Ys = (t) => /^-?(?:\d+(?:\.\d+)?|\.\d+)$/u.test(t);
function Gs(t) {
  return typeof t == "object" && t !== null;
}
const Hs = (t) => /^0[^.\s]+$/u.test(t);
// @__NO_SIDE_EFFECTS__
function kn(t) {
  let e;
  return () => (e === void 0 && (e = t()), e);
}
const it = /* @__NO_SIDE_EFFECTS__ */ (t) => t, oa = (t, e) => (n) => e(t(n)), ae = (...t) => t.reduce(oa), ee = /* @__NO_SIDE_EFFECTS__ */ (t, e, n) => {
  const i = e - t;
  return i === 0 ? 1 : (n - t) / i;
};
class On {
  constructor() {
    this.subscriptions = [];
  }
  add(e) {
    return Dn(this.subscriptions, e), () => Mn(this.subscriptions, e);
  }
  notify(e, n, i) {
    const s = this.subscriptions.length;
    if (s)
      if (s === 1)
        this.subscriptions[0](e, n, i);
      else
        for (let o = 0; o < s; o++) {
          const r = this.subscriptions[o];
          r && r(e, n, i);
        }
  }
  getSize() {
    return this.subscriptions.length;
  }
  clear() {
    this.subscriptions.length = 0;
  }
}
const ot = /* @__NO_SIDE_EFFECTS__ */ (t) => t * 1e3, nt = /* @__NO_SIDE_EFFECTS__ */ (t) => t / 1e3;
function Xs(t, e) {
  return e ? t * (1e3 / e) : 0;
}
const Vi = /* @__PURE__ */ new Set();
function Ln(t, e, n) {
  t || Vi.has(e) || (console.warn(on(e, n)), Vi.add(e));
}
const zs = (t, e, n) => (((1 - 3 * n + 3 * e) * t + (3 * n - 6 * e)) * t + 3 * e) * t, aa = 1e-7, la = 12;
function ca(t, e, n, i, s) {
  let o, r, a = 0;
  do
    r = e + (n - e) / 2, o = zs(r, i, s) - t, o > 0 ? n = r : e = r;
  while (Math.abs(o) > aa && ++a < la);
  return r;
}
function le(t, e, n, i) {
  if (t === e && n === i)
    return it;
  const s = (o) => ca(o, 0, 1, t, n);
  return (o) => o === 0 || o === 1 ? o : zs(s(o), e, i);
}
const qs = (t) => (e) => e <= 0.5 ? t(2 * e) / 2 : (2 - t(2 * (1 - e))) / 2, Zs = (t) => (e) => 1 - t(1 - e), Js = /* @__PURE__ */ le(0.33, 1.53, 0.69, 0.99), jn = /* @__PURE__ */ Zs(Js), Qs = /* @__PURE__ */ qs(jn), tr = (t) => (t *= 2) < 1 ? 0.5 * jn(t) : 0.5 * (2 - Math.pow(2, -10 * (t - 1))), Fn = (t) => 1 - Math.sin(Math.acos(t)), er = Zs(Fn), nr = qs(Fn), ua = /* @__PURE__ */ le(0.42, 0, 1, 1), fa = /* @__PURE__ */ le(0, 0, 0.58, 1), ir = /* @__PURE__ */ le(0.42, 0, 0.58, 1), ha = (t) => Array.isArray(t) && typeof t[0] != "number", sr = (t) => Array.isArray(t) && typeof t[0] == "number", Ci = {
  linear: it,
  easeIn: ua,
  easeInOut: ir,
  easeOut: fa,
  circIn: Fn,
  circInOut: nr,
  circOut: er,
  backIn: jn,
  backInOut: Qs,
  backOut: Js,
  anticipate: tr
}, da = (t) => typeof t == "string", Ei = (t) => {
  if (sr(t)) {
    dt(t.length === 4, "Cubic bezier arrays must contain four numerical values.", "cubic-bezier-length");
    const [e, n, i, s] = t;
    return le(e, n, i, s);
  } else if (da(t))
    return dt(Ci[t] !== void 0, `Invalid easing type '${t}'`, "invalid-easing-type"), Ci[t];
  return t;
}, ye = [
  "setup",
  // Compute
  "read",
  // Read
  "resolveKeyframes",
  // Write/Read/Write/Read
  "preUpdate",
  // Compute
  "update",
  // Compute
  "preRender",
  // Compute
  "render",
  // Write
  "postRender"
  // Compute
];
function ma(t, e) {
  let n = /* @__PURE__ */ new Set(), i = /* @__PURE__ */ new Set(), s = !1, o = !1;
  const r = /* @__PURE__ */ new WeakSet();
  let a = {
    delta: 0,
    timestamp: 0,
    isProcessing: !1
  };
  function l(c) {
    r.has(c) && (u.schedule(c), t()), c(a);
  }
  const u = {
    /**
     * Schedule a process to run on the next frame.
     */
    schedule: (c, h = !1, d = !1) => {
      const g = d && s ? n : i;
      return h && r.add(c), g.has(c) || g.add(c), c;
    },
    /**
     * Cancel the provided callback from running on the next frame.
     */
    cancel: (c) => {
      i.delete(c), r.delete(c);
    },
    /**
     * Execute all schedule callbacks.
     */
    process: (c) => {
      if (a = c, s) {
        o = !0;
        return;
      }
      s = !0, [n, i] = [i, n], n.forEach(l), n.clear(), s = !1, o && (o = !1, u.process(c));
    }
  };
  return u;
}
const pa = 40;
function rr(t, e) {
  let n = !1, i = !0;
  const s = {
    delta: 0,
    timestamp: 0,
    isProcessing: !1
  }, o = () => n = !0, r = ye.reduce((w, C) => (w[C] = ma(o), w), {}), { setup: a, read: l, resolveKeyframes: u, preUpdate: c, update: h, preRender: d, render: m, postRender: g } = r, v = () => {
    const w = mt.useManualTiming ? s.timestamp : performance.now();
    n = !1, mt.useManualTiming || (s.delta = i ? 1e3 / 60 : Math.max(Math.min(w - s.timestamp, pa), 1)), s.timestamp = w, s.isProcessing = !0, a.process(s), l.process(s), u.process(s), c.process(s), h.process(s), d.process(s), m.process(s), g.process(s), s.isProcessing = !1, n && e && (i = !1, t(v));
  }, T = () => {
    n = !0, i = !0, s.isProcessing || t(v);
  };
  return { schedule: ye.reduce((w, C) => {
    const S = r[C];
    return w[C] = (D, j = !1, A = !1) => (n || T(), S.schedule(D, j, A)), w;
  }, {}), cancel: (w) => {
    for (let C = 0; C < ye.length; C++)
      r[ye[C]].cancel(w);
  }, state: s, steps: r };
}
const { schedule: k, cancel: vt, state: K, steps: Ke } = /* @__PURE__ */ rr(typeof requestAnimationFrame < "u" ? requestAnimationFrame : it, !0);
let Te;
function ga() {
  Te = void 0;
}
const J = {
  now: () => (Te === void 0 && J.set(K.isProcessing || mt.useManualTiming ? K.timestamp : performance.now()), Te),
  set: (t) => {
    Te = t, queueMicrotask(ga);
  }
}, or = (t) => (e) => typeof e == "string" && e.startsWith(t), In = /* @__PURE__ */ or("--"), ya = /* @__PURE__ */ or("var(--"), Bn = (t) => ya(t) ? va.test(t.split("/*")[0].trim()) : !1, va = /var\(--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)$/iu, $t = {
  test: (t) => typeof t == "number",
  parse: parseFloat,
  transform: (t) => t
}, ne = {
  ...$t,
  transform: (t) => ht(0, 1, t)
}, ve = {
  ...$t,
  default: 1
}, Zt = (t) => Math.round(t * 1e5) / 1e5, Nn = /-?(?:\d+(?:\.\d+)?|\.\d+)/gu;
function ba(t) {
  return t == null;
}
const xa = /^(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))$/iu, Un = (t, e) => (n) => !!(typeof n == "string" && xa.test(n) && n.startsWith(t) || e && !ba(n) && Object.prototype.hasOwnProperty.call(n, e)), ar = (t, e, n) => (i) => {
  if (typeof i != "string")
    return i;
  const [s, o, r, a] = i.match(Nn);
  return {
    [t]: parseFloat(s),
    [e]: parseFloat(o),
    [n]: parseFloat(r),
    alpha: a !== void 0 ? parseFloat(a) : 1
  };
}, Ta = (t) => ht(0, 255, t), Ye = {
  ...$t,
  transform: (t) => Math.round(Ta(t))
}, Pt = {
  test: /* @__PURE__ */ Un("rgb", "red"),
  parse: /* @__PURE__ */ ar("red", "green", "blue"),
  transform: ({ red: t, green: e, blue: n, alpha: i = 1 }) => "rgba(" + Ye.transform(t) + ", " + Ye.transform(e) + ", " + Ye.transform(n) + ", " + Zt(ne.transform(i)) + ")"
};
function wa(t) {
  let e = "", n = "", i = "", s = "";
  return t.length > 5 ? (e = t.substring(1, 3), n = t.substring(3, 5), i = t.substring(5, 7), s = t.substring(7, 9)) : (e = t.substring(1, 2), n = t.substring(2, 3), i = t.substring(3, 4), s = t.substring(4, 5), e += e, n += n, i += i, s += s), {
    red: parseInt(e, 16),
    green: parseInt(n, 16),
    blue: parseInt(i, 16),
    alpha: s ? parseInt(s, 16) / 255 : 1
  };
}
const an = {
  test: /* @__PURE__ */ Un("#"),
  parse: wa,
  transform: Pt.transform
}, ce = /* @__NO_SIDE_EFFECTS__ */ (t) => ({
  test: (e) => typeof e == "string" && e.endsWith(t) && e.split(" ").length === 1,
  parse: parseFloat,
  transform: (e) => `${e}${t}`
}), yt = /* @__PURE__ */ ce("deg"), ut = /* @__PURE__ */ ce("%"), P = /* @__PURE__ */ ce("px"), Sa = /* @__PURE__ */ ce("vh"), Pa = /* @__PURE__ */ ce("vw"), Ri = {
  ...ut,
  parse: (t) => ut.parse(t) / 100,
  transform: (t) => ut.transform(t * 100)
}, Dt = {
  test: /* @__PURE__ */ Un("hsl", "hue"),
  parse: /* @__PURE__ */ ar("hue", "saturation", "lightness"),
  transform: ({ hue: t, saturation: e, lightness: n, alpha: i = 1 }) => "hsla(" + Math.round(t) + ", " + ut.transform(Zt(e)) + ", " + ut.transform(Zt(n)) + ", " + Zt(ne.transform(i)) + ")"
}, $ = {
  test: (t) => Pt.test(t) || an.test(t) || Dt.test(t),
  parse: (t) => Pt.test(t) ? Pt.parse(t) : Dt.test(t) ? Dt.parse(t) : an.parse(t),
  transform: (t) => typeof t == "string" ? t : t.hasOwnProperty("red") ? Pt.transform(t) : Dt.transform(t),
  getAnimatableNone: (t) => {
    const e = $.parse(t);
    return e.alpha = 0, $.transform(e);
  }
}, _a = /(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))/giu;
function Aa(t) {
  var e, n;
  return isNaN(t) && typeof t == "string" && (((e = t.match(Nn)) == null ? void 0 : e.length) || 0) + (((n = t.match(_a)) == null ? void 0 : n.length) || 0) > 0;
}
const lr = "number", cr = "color", Va = "var", Ca = "var(", Di = "${}", Ea = /var\s*\(\s*--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)|#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\)|-?(?:\d+(?:\.\d+)?|\.\d+)/giu;
function ie(t) {
  const e = t.toString(), n = [], i = {
    color: [],
    number: [],
    var: []
  }, s = [];
  let o = 0;
  const a = e.replace(Ea, (l) => ($.test(l) ? (i.color.push(o), s.push(cr), n.push($.parse(l))) : l.startsWith(Ca) ? (i.var.push(o), s.push(Va), n.push(l)) : (i.number.push(o), s.push(lr), n.push(parseFloat(l))), ++o, Di)).split(Di);
  return { values: n, split: a, indexes: i, types: s };
}
function ur(t) {
  return ie(t).values;
}
function fr(t) {
  const { split: e, types: n } = ie(t), i = e.length;
  return (s) => {
    let o = "";
    for (let r = 0; r < i; r++)
      if (o += e[r], s[r] !== void 0) {
        const a = n[r];
        a === lr ? o += Zt(s[r]) : a === cr ? o += $.transform(s[r]) : o += s[r];
      }
    return o;
  };
}
const Ra = (t) => typeof t == "number" ? 0 : $.test(t) ? $.getAnimatableNone(t) : t;
function Da(t) {
  const e = ur(t);
  return fr(t)(e.map(Ra));
}
const bt = {
  test: Aa,
  parse: ur,
  createTransformer: fr,
  getAnimatableNone: Da
};
function Ge(t, e, n) {
  return n < 0 && (n += 1), n > 1 && (n -= 1), n < 1 / 6 ? t + (e - t) * 6 * n : n < 1 / 2 ? e : n < 2 / 3 ? t + (e - t) * (2 / 3 - n) * 6 : t;
}
function Ma({ hue: t, saturation: e, lightness: n, alpha: i }) {
  t /= 360, e /= 100, n /= 100;
  let s = 0, o = 0, r = 0;
  if (!e)
    s = o = r = n;
  else {
    const a = n < 0.5 ? n * (1 + e) : n + e - n * e, l = 2 * n - a;
    s = Ge(l, a, t + 1 / 3), o = Ge(l, a, t), r = Ge(l, a, t - 1 / 3);
  }
  return {
    red: Math.round(s * 255),
    green: Math.round(o * 255),
    blue: Math.round(r * 255),
    alpha: i
  };
}
function _e(t, e) {
  return (n) => n > 0 ? e : t;
}
const L = (t, e, n) => t + (e - t) * n, He = (t, e, n) => {
  const i = t * t, s = n * (e * e - i) + i;
  return s < 0 ? 0 : Math.sqrt(s);
}, ka = [an, Pt, Dt], Oa = (t) => ka.find((e) => e.test(t));
function Mi(t) {
  const e = Oa(t);
  if (Ut(!!e, `'${t}' is not an animatable color. Use the equivalent color code instead.`, "color-not-animatable"), !e)
    return !1;
  let n = e.parse(t);
  return e === Dt && (n = Ma(n)), n;
}
const ki = (t, e) => {
  const n = Mi(t), i = Mi(e);
  if (!n || !i)
    return _e(t, e);
  const s = { ...n };
  return (o) => (s.red = He(n.red, i.red, o), s.green = He(n.green, i.green, o), s.blue = He(n.blue, i.blue, o), s.alpha = L(n.alpha, i.alpha, o), Pt.transform(s));
}, ln = /* @__PURE__ */ new Set(["none", "hidden"]);
function La(t, e) {
  return ln.has(t) ? (n) => n <= 0 ? t : e : (n) => n >= 1 ? e : t;
}
function ja(t, e) {
  return (n) => L(t, e, n);
}
function $n(t) {
  return typeof t == "number" ? ja : typeof t == "string" ? Bn(t) ? _e : $.test(t) ? ki : Ba : Array.isArray(t) ? hr : typeof t == "object" ? $.test(t) ? ki : Fa : _e;
}
function hr(t, e) {
  const n = [...t], i = n.length, s = t.map((o, r) => $n(o)(o, e[r]));
  return (o) => {
    for (let r = 0; r < i; r++)
      n[r] = s[r](o);
    return n;
  };
}
function Fa(t, e) {
  const n = { ...t, ...e }, i = {};
  for (const s in n)
    t[s] !== void 0 && e[s] !== void 0 && (i[s] = $n(t[s])(t[s], e[s]));
  return (s) => {
    for (const o in i)
      n[o] = i[o](s);
    return n;
  };
}
function Ia(t, e) {
  const n = [], i = { color: 0, var: 0, number: 0 };
  for (let s = 0; s < e.values.length; s++) {
    const o = e.types[s], r = t.indexes[o][i[o]], a = t.values[r] ?? 0;
    n[s] = a, i[o]++;
  }
  return n;
}
const Ba = (t, e) => {
  const n = bt.createTransformer(e), i = ie(t), s = ie(e);
  return i.indexes.var.length === s.indexes.var.length && i.indexes.color.length === s.indexes.color.length && i.indexes.number.length >= s.indexes.number.length ? ln.has(t) && !s.values.length || ln.has(e) && !i.values.length ? La(t, e) : ae(hr(Ia(i, s), s.values), n) : (Ut(!0, `Complex values '${t}' and '${e}' too different to mix. Ensure all colors are of the same type, and that each contains the same quantity of number and color values. Falling back to instant transition.`, "complex-values-different"), _e(t, e));
};
function dr(t, e, n) {
  return typeof t == "number" && typeof e == "number" && typeof n == "number" ? L(t, e, n) : $n(t)(t, e);
}
const Na = (t) => {
  const e = ({ timestamp: n }) => t(n);
  return {
    start: (n = !0) => k.update(e, n),
    stop: () => vt(e),
    /**
     * If we're processing this frame we can use the
     * framelocked timestamp to keep things in sync.
     */
    now: () => K.isProcessing ? K.timestamp : J.now()
  };
}, mr = (t, e, n = 10) => {
  let i = "";
  const s = Math.max(Math.round(e / n), 2);
  for (let o = 0; o < s; o++)
    i += Math.round(t(o / (s - 1)) * 1e4) / 1e4 + ", ";
  return `linear(${i.substring(0, i.length - 2)})`;
}, Ae = 2e4;
function Wn(t) {
  let e = 0;
  const n = 50;
  let i = t.next(e);
  for (; !i.done && e < Ae; )
    e += n, i = t.next(e);
  return e >= Ae ? 1 / 0 : e;
}
function Ua(t, e = 100, n) {
  const i = n({ ...t, keyframes: [0, e] }), s = Math.min(Wn(i), Ae);
  return {
    type: "keyframes",
    ease: (o) => i.next(s * o).value / e,
    duration: /* @__PURE__ */ nt(s)
  };
}
const $a = 5;
function pr(t, e, n) {
  const i = Math.max(e - $a, 0);
  return Xs(n - t(i), e - i);
}
const O = {
  // Default spring physics
  stiffness: 100,
  damping: 10,
  mass: 1,
  velocity: 0,
  // Default duration/bounce-based options
  duration: 800,
  // in ms
  bounce: 0.3,
  visualDuration: 0.3,
  // in seconds
  // Rest thresholds
  restSpeed: {
    granular: 0.01,
    default: 2
  },
  restDelta: {
    granular: 5e-3,
    default: 0.5
  },
  // Limits
  minDuration: 0.01,
  // in seconds
  maxDuration: 10,
  // in seconds
  minDamping: 0.05,
  maxDamping: 1
}, Xe = 1e-3;
function Wa({ duration: t = O.duration, bounce: e = O.bounce, velocity: n = O.velocity, mass: i = O.mass }) {
  let s, o;
  Ut(t <= /* @__PURE__ */ ot(O.maxDuration), "Spring duration must be 10 seconds or less", "spring-duration-limit");
  let r = 1 - e;
  r = ht(O.minDamping, O.maxDamping, r), t = ht(O.minDuration, O.maxDuration, /* @__PURE__ */ nt(t)), r < 1 ? (s = (u) => {
    const c = u * r, h = c * t, d = c - n, m = cn(u, r), g = Math.exp(-h);
    return Xe - d / m * g;
  }, o = (u) => {
    const h = u * r * t, d = h * n + n, m = Math.pow(r, 2) * Math.pow(u, 2) * t, g = Math.exp(-h), v = cn(Math.pow(u, 2), r);
    return (-s(u) + Xe > 0 ? -1 : 1) * ((d - m) * g) / v;
  }) : (s = (u) => {
    const c = Math.exp(-u * t), h = (u - n) * t + 1;
    return -Xe + c * h;
  }, o = (u) => {
    const c = Math.exp(-u * t), h = (n - u) * (t * t);
    return c * h;
  });
  const a = 5 / t, l = Ya(s, o, a);
  if (t = /* @__PURE__ */ ot(t), isNaN(l))
    return {
      stiffness: O.stiffness,
      damping: O.damping,
      duration: t
    };
  {
    const u = Math.pow(l, 2) * i;
    return {
      stiffness: u,
      damping: r * 2 * Math.sqrt(i * u),
      duration: t
    };
  }
}
const Ka = 12;
function Ya(t, e, n) {
  let i = n;
  for (let s = 1; s < Ka; s++)
    i = i - t(i) / e(i);
  return i;
}
function cn(t, e) {
  return t * Math.sqrt(1 - e * e);
}
const Ga = ["duration", "bounce"], Ha = ["stiffness", "damping", "mass"];
function Oi(t, e) {
  return e.some((n) => t[n] !== void 0);
}
function Xa(t) {
  let e = {
    velocity: O.velocity,
    stiffness: O.stiffness,
    damping: O.damping,
    mass: O.mass,
    isResolvedFromDuration: !1,
    ...t
  };
  if (!Oi(t, Ha) && Oi(t, Ga))
    if (t.visualDuration) {
      const n = t.visualDuration, i = 2 * Math.PI / (n * 1.2), s = i * i, o = 2 * ht(0.05, 1, 1 - (t.bounce || 0)) * Math.sqrt(s);
      e = {
        ...e,
        mass: O.mass,
        stiffness: s,
        damping: o
      };
    } else {
      const n = Wa(t);
      e = {
        ...e,
        ...n,
        mass: O.mass
      }, e.isResolvedFromDuration = !0;
    }
  return e;
}
function Ve(t = O.visualDuration, e = O.bounce) {
  const n = typeof t != "object" ? {
    visualDuration: t,
    keyframes: [0, 1],
    bounce: e
  } : t;
  let { restSpeed: i, restDelta: s } = n;
  const o = n.keyframes[0], r = n.keyframes[n.keyframes.length - 1], a = { done: !1, value: o }, { stiffness: l, damping: u, mass: c, duration: h, velocity: d, isResolvedFromDuration: m } = Xa({
    ...n,
    velocity: -/* @__PURE__ */ nt(n.velocity || 0)
  }), g = d || 0, v = u / (2 * Math.sqrt(l * c)), T = r - o, y = /* @__PURE__ */ nt(Math.sqrt(l / c)), b = Math.abs(T) < 5;
  i || (i = b ? O.restSpeed.granular : O.restSpeed.default), s || (s = b ? O.restDelta.granular : O.restDelta.default);
  let w;
  if (v < 1) {
    const S = cn(y, v);
    w = (D) => {
      const j = Math.exp(-v * y * D);
      return r - j * ((g + v * y * T) / S * Math.sin(S * D) + T * Math.cos(S * D));
    };
  } else if (v === 1)
    w = (S) => r - Math.exp(-y * S) * (T + (g + y * T) * S);
  else {
    const S = y * Math.sqrt(v * v - 1);
    w = (D) => {
      const j = Math.exp(-v * y * D), A = Math.min(S * D, 300);
      return r - j * ((g + v * y * T) * Math.sinh(A) + S * T * Math.cosh(A)) / S;
    };
  }
  const C = {
    calculatedDuration: m && h || null,
    next: (S) => {
      const D = w(S);
      if (m)
        a.done = S >= h;
      else {
        let j = S === 0 ? g : 0;
        v < 1 && (j = S === 0 ? /* @__PURE__ */ ot(g) : pr(w, S, D));
        const A = Math.abs(j) <= i, W = Math.abs(r - D) <= s;
        a.done = A && W;
      }
      return a.value = a.done ? r : D, a;
    },
    toString: () => {
      const S = Math.min(Wn(C), Ae), D = mr((j) => C.next(S * j).value, S, 30);
      return S + "ms " + D;
    },
    toTransition: () => {
    }
  };
  return C;
}
Ve.applyToOptions = (t) => {
  const e = Ua(t, 100, Ve);
  return t.ease = e.ease, t.duration = /* @__PURE__ */ ot(e.duration), t.type = "keyframes", t;
};
function un({ keyframes: t, velocity: e = 0, power: n = 0.8, timeConstant: i = 325, bounceDamping: s = 10, bounceStiffness: o = 500, modifyTarget: r, min: a, max: l, restDelta: u = 0.5, restSpeed: c }) {
  const h = t[0], d = {
    done: !1,
    value: h
  }, m = (A) => a !== void 0 && A < a || l !== void 0 && A > l, g = (A) => a === void 0 ? l : l === void 0 || Math.abs(a - A) < Math.abs(l - A) ? a : l;
  let v = n * e;
  const T = h + v, y = r === void 0 ? T : r(T);
  y !== T && (v = y - h);
  const b = (A) => -v * Math.exp(-A / i), w = (A) => y + b(A), C = (A) => {
    const W = b(A), z = w(A);
    d.done = Math.abs(W) <= u, d.value = d.done ? y : z;
  };
  let S, D;
  const j = (A) => {
    m(d.value) && (S = A, D = Ve({
      keyframes: [d.value, g(d.value)],
      velocity: pr(w, A, d.value),
      // TODO: This should be passing * 1000
      damping: s,
      stiffness: o,
      restDelta: u,
      restSpeed: c
    }));
  };
  return j(0), {
    calculatedDuration: null,
    next: (A) => {
      let W = !1;
      return !D && S === void 0 && (W = !0, C(A), j(A)), S !== void 0 && A >= S ? D.next(A - S) : (!W && C(A), d);
    }
  };
}
function za(t, e, n) {
  const i = [], s = n || mt.mix || dr, o = t.length - 1;
  for (let r = 0; r < o; r++) {
    let a = s(t[r], t[r + 1]);
    if (e) {
      const l = Array.isArray(e) ? e[r] || it : e;
      a = ae(l, a);
    }
    i.push(a);
  }
  return i;
}
function qa(t, e, { clamp: n = !0, ease: i, mixer: s } = {}) {
  const o = t.length;
  if (dt(o === e.length, "Both input and output ranges must be the same length", "range-length"), o === 1)
    return () => e[0];
  if (o === 2 && e[0] === e[1])
    return () => e[1];
  const r = t[0] === t[1];
  t[0] > t[o - 1] && (t = [...t].reverse(), e = [...e].reverse());
  const a = za(e, i, s), l = a.length, u = (c) => {
    if (r && c < t[0])
      return e[0];
    let h = 0;
    if (l > 1)
      for (; h < t.length - 2 && !(c < t[h + 1]); h++)
        ;
    const d = /* @__PURE__ */ ee(t[h], t[h + 1], c);
    return a[h](d);
  };
  return n ? (c) => u(ht(t[0], t[o - 1], c)) : u;
}
function Za(t, e) {
  const n = t[t.length - 1];
  for (let i = 1; i <= e; i++) {
    const s = /* @__PURE__ */ ee(0, e, i);
    t.push(L(n, 1, s));
  }
}
function Ja(t) {
  const e = [0];
  return Za(e, t.length - 1), e;
}
function Qa(t, e) {
  return t.map((n) => n * e);
}
function tl(t, e) {
  return t.map(() => e || ir).splice(0, t.length - 1);
}
function Mt({ duration: t = 300, keyframes: e, times: n, ease: i = "easeInOut" }) {
  const s = ha(i) ? i.map(Ei) : Ei(i), o = {
    done: !1,
    value: e[0]
  }, r = Qa(
    // Only use the provided offsets if they're the correct length
    // TODO Maybe we should warn here if there's a length mismatch
    n && n.length === e.length ? n : Ja(e),
    t
  ), a = qa(r, e, {
    ease: Array.isArray(s) ? s : tl(e, s)
  });
  return {
    calculatedDuration: t,
    next: (l) => (o.value = a(l), o.done = l >= t, o)
  };
}
const el = (t) => t !== null;
function Kn(t, { repeat: e, repeatType: n = "loop" }, i, s = 1) {
  const o = t.filter(el), a = s < 0 || e && n !== "loop" && e % 2 === 1 ? 0 : o.length - 1;
  return !a || i === void 0 ? o[a] : i;
}
const nl = {
  decay: un,
  inertia: un,
  tween: Mt,
  keyframes: Mt,
  spring: Ve
};
function gr(t) {
  typeof t.type == "string" && (t.type = nl[t.type]);
}
class Yn {
  constructor() {
    this.updateFinished();
  }
  get finished() {
    return this._finished;
  }
  updateFinished() {
    this._finished = new Promise((e) => {
      this.resolve = e;
    });
  }
  notifyFinished() {
    this.resolve();
  }
  /**
   * Allows the animation to be awaited.
   *
   * @deprecated Use `finished` instead.
   */
  then(e, n) {
    return this.finished.then(e, n);
  }
}
const il = (t) => t / 100;
class Gn extends Yn {
  constructor(e) {
    super(), this.state = "idle", this.startTime = null, this.isStopped = !1, this.currentTime = 0, this.holdTime = null, this.playbackSpeed = 1, this.stop = () => {
      var i, s;
      const { motionValue: n } = this.options;
      n && n.updatedAt !== J.now() && this.tick(J.now()), this.isStopped = !0, this.state !== "idle" && (this.teardown(), (s = (i = this.options).onStop) == null || s.call(i));
    }, this.options = e, this.initAnimation(), this.play(), e.autoplay === !1 && this.pause();
  }
  initAnimation() {
    const { options: e } = this;
    gr(e);
    const { type: n = Mt, repeat: i = 0, repeatDelay: s = 0, repeatType: o, velocity: r = 0 } = e;
    let { keyframes: a } = e;
    const l = n || Mt;
    process.env.NODE_ENV !== "production" && l !== Mt && dt(a.length <= 2, `Only two keyframes currently supported with spring and inertia animations. Trying to animate ${a}`, "spring-two-frames"), l !== Mt && typeof a[0] != "number" && (this.mixKeyframes = ae(il, dr(a[0], a[1])), a = [0, 100]);
    const u = l({ ...e, keyframes: a });
    o === "mirror" && (this.mirroredGenerator = l({
      ...e,
      keyframes: [...a].reverse(),
      velocity: -r
    })), u.calculatedDuration === null && (u.calculatedDuration = Wn(u));
    const { calculatedDuration: c } = u;
    this.calculatedDuration = c, this.resolvedDuration = c + s, this.totalDuration = this.resolvedDuration * (i + 1) - s, this.generator = u;
  }
  updateTime(e) {
    const n = Math.round(e - this.startTime) * this.playbackSpeed;
    this.holdTime !== null ? this.currentTime = this.holdTime : this.currentTime = n;
  }
  tick(e, n = !1) {
    const { generator: i, totalDuration: s, mixKeyframes: o, mirroredGenerator: r, resolvedDuration: a, calculatedDuration: l } = this;
    if (this.startTime === null)
      return i.next(0);
    const { delay: u = 0, keyframes: c, repeat: h, repeatType: d, repeatDelay: m, type: g, onUpdate: v, finalKeyframe: T } = this.options;
    this.speed > 0 ? this.startTime = Math.min(this.startTime, e) : this.speed < 0 && (this.startTime = Math.min(e - s / this.speed, this.startTime)), n ? this.currentTime = e : this.updateTime(e);
    const y = this.currentTime - u * (this.playbackSpeed >= 0 ? 1 : -1), b = this.playbackSpeed >= 0 ? y < 0 : y > s;
    this.currentTime = Math.max(y, 0), this.state === "finished" && this.holdTime === null && (this.currentTime = s);
    let w = this.currentTime, C = i;
    if (h) {
      const A = Math.min(this.currentTime, s) / a;
      let W = Math.floor(A), z = A % 1;
      !z && A >= 1 && (z = 1), z === 1 && W--, W = Math.min(W, h + 1), !!(W % 2) && (d === "reverse" ? (z = 1 - z, m && (z -= m / a)) : d === "mirror" && (C = r)), w = ht(0, 1, z) * a;
    }
    const S = b ? { done: !1, value: c[0] } : C.next(w);
    o && (S.value = o(S.value));
    let { done: D } = S;
    !b && l !== null && (D = this.playbackSpeed >= 0 ? this.currentTime >= s : this.currentTime <= 0);
    const j = this.holdTime === null && (this.state === "finished" || this.state === "running" && D);
    return j && g !== un && (S.value = Kn(c, this.options, T, this.speed)), v && v(S.value), j && this.finish(), S;
  }
  /**
   * Allows the returned animation to be awaited or promise-chained. Currently
   * resolves when the animation finishes at all but in a future update could/should
   * reject if its cancels.
   */
  then(e, n) {
    return this.finished.then(e, n);
  }
  get duration() {
    return /* @__PURE__ */ nt(this.calculatedDuration);
  }
  get iterationDuration() {
    const { delay: e = 0 } = this.options || {};
    return this.duration + /* @__PURE__ */ nt(e);
  }
  get time() {
    return /* @__PURE__ */ nt(this.currentTime);
  }
  set time(e) {
    var n;
    e = /* @__PURE__ */ ot(e), this.currentTime = e, this.startTime === null || this.holdTime !== null || this.playbackSpeed === 0 ? this.holdTime = e : this.driver && (this.startTime = this.driver.now() - e / this.playbackSpeed), (n = this.driver) == null || n.start(!1);
  }
  get speed() {
    return this.playbackSpeed;
  }
  set speed(e) {
    this.updateTime(J.now());
    const n = this.playbackSpeed !== e;
    this.playbackSpeed = e, n && (this.time = /* @__PURE__ */ nt(this.currentTime));
  }
  play() {
    var s, o;
    if (this.isStopped)
      return;
    const { driver: e = Na, startTime: n } = this.options;
    this.driver || (this.driver = e((r) => this.tick(r))), (o = (s = this.options).onPlay) == null || o.call(s);
    const i = this.driver.now();
    this.state === "finished" ? (this.updateFinished(), this.startTime = i) : this.holdTime !== null ? this.startTime = i - this.holdTime : this.startTime || (this.startTime = n ?? i), this.state === "finished" && this.speed < 0 && (this.startTime += this.calculatedDuration), this.holdTime = null, this.state = "running", this.driver.start();
  }
  pause() {
    this.state = "paused", this.updateTime(J.now()), this.holdTime = this.currentTime;
  }
  complete() {
    this.state !== "running" && this.play(), this.state = "finished", this.holdTime = null;
  }
  finish() {
    var e, n;
    this.notifyFinished(), this.teardown(), this.state = "finished", (n = (e = this.options).onComplete) == null || n.call(e);
  }
  cancel() {
    var e, n;
    this.holdTime = null, this.startTime = 0, this.tick(0), this.teardown(), (n = (e = this.options).onCancel) == null || n.call(e);
  }
  teardown() {
    this.state = "idle", this.stopDriver(), this.startTime = this.holdTime = null;
  }
  stopDriver() {
    this.driver && (this.driver.stop(), this.driver = void 0);
  }
  sample(e) {
    return this.startTime = 0, this.tick(e, !0);
  }
  attachTimeline(e) {
    var n;
    return this.options.allowFlatten && (this.options.type = "keyframes", this.options.ease = "linear", this.initAnimation()), (n = this.driver) == null || n.stop(), e.observe(this);
  }
}
function sl(t) {
  for (let e = 1; e < t.length; e++)
    t[e] ?? (t[e] = t[e - 1]);
}
const _t = (t) => t * 180 / Math.PI, fn = (t) => {
  const e = _t(Math.atan2(t[1], t[0]));
  return hn(e);
}, rl = {
  x: 4,
  y: 5,
  translateX: 4,
  translateY: 5,
  scaleX: 0,
  scaleY: 3,
  scale: (t) => (Math.abs(t[0]) + Math.abs(t[3])) / 2,
  rotate: fn,
  rotateZ: fn,
  skewX: (t) => _t(Math.atan(t[1])),
  skewY: (t) => _t(Math.atan(t[2])),
  skew: (t) => (Math.abs(t[1]) + Math.abs(t[2])) / 2
}, hn = (t) => (t = t % 360, t < 0 && (t += 360), t), Li = fn, ji = (t) => Math.sqrt(t[0] * t[0] + t[1] * t[1]), Fi = (t) => Math.sqrt(t[4] * t[4] + t[5] * t[5]), ol = {
  x: 12,
  y: 13,
  z: 14,
  translateX: 12,
  translateY: 13,
  translateZ: 14,
  scaleX: ji,
  scaleY: Fi,
  scale: (t) => (ji(t) + Fi(t)) / 2,
  rotateX: (t) => hn(_t(Math.atan2(t[6], t[5]))),
  rotateY: (t) => hn(_t(Math.atan2(-t[2], t[0]))),
  rotateZ: Li,
  rotate: Li,
  skewX: (t) => _t(Math.atan(t[4])),
  skewY: (t) => _t(Math.atan(t[1])),
  skew: (t) => (Math.abs(t[1]) + Math.abs(t[4])) / 2
};
function dn(t) {
  return t.includes("scale") ? 1 : 0;
}
function mn(t, e) {
  if (!t || t === "none")
    return dn(e);
  const n = t.match(/^matrix3d\(([-\d.e\s,]+)\)$/u);
  let i, s;
  if (n)
    i = ol, s = n;
  else {
    const a = t.match(/^matrix\(([-\d.e\s,]+)\)$/u);
    i = rl, s = a;
  }
  if (!s)
    return dn(e);
  const o = i[e], r = s[1].split(",").map(ll);
  return typeof o == "function" ? o(r) : r[o];
}
const al = (t, e) => {
  const { transform: n = "none" } = getComputedStyle(t);
  return mn(n, e);
};
function ll(t) {
  return parseFloat(t.trim());
}
const Wt = [
  "transformPerspective",
  "x",
  "y",
  "z",
  "translateX",
  "translateY",
  "translateZ",
  "scale",
  "scaleX",
  "scaleY",
  "rotate",
  "rotateX",
  "rotateY",
  "rotateZ",
  "skew",
  "skewX",
  "skewY"
], Kt = new Set(Wt), Ii = (t) => t === $t || t === P, cl = /* @__PURE__ */ new Set(["x", "y", "z"]), ul = Wt.filter((t) => !cl.has(t));
function fl(t) {
  const e = [];
  return ul.forEach((n) => {
    const i = t.getValue(n);
    i !== void 0 && (e.push([n, i.get()]), i.set(n.startsWith("scale") ? 1 : 0));
  }), e;
}
const At = {
  // Dimensions
  width: ({ x: t }, { paddingLeft: e = "0", paddingRight: n = "0" }) => t.max - t.min - parseFloat(e) - parseFloat(n),
  height: ({ y: t }, { paddingTop: e = "0", paddingBottom: n = "0" }) => t.max - t.min - parseFloat(e) - parseFloat(n),
  top: (t, { top: e }) => parseFloat(e),
  left: (t, { left: e }) => parseFloat(e),
  bottom: ({ y: t }, { top: e }) => parseFloat(e) + (t.max - t.min),
  right: ({ x: t }, { left: e }) => parseFloat(e) + (t.max - t.min),
  // Transform
  x: (t, { transform: e }) => mn(e, "x"),
  y: (t, { transform: e }) => mn(e, "y")
};
At.translateX = At.x;
At.translateY = At.y;
const Vt = /* @__PURE__ */ new Set();
let pn = !1, gn = !1, yn = !1;
function yr() {
  if (gn) {
    const t = Array.from(Vt).filter((i) => i.needsMeasurement), e = new Set(t.map((i) => i.element)), n = /* @__PURE__ */ new Map();
    e.forEach((i) => {
      const s = fl(i);
      s.length && (n.set(i, s), i.render());
    }), t.forEach((i) => i.measureInitialState()), e.forEach((i) => {
      i.render();
      const s = n.get(i);
      s && s.forEach(([o, r]) => {
        var a;
        (a = i.getValue(o)) == null || a.set(r);
      });
    }), t.forEach((i) => i.measureEndState()), t.forEach((i) => {
      i.suspendedScrollY !== void 0 && window.scrollTo(0, i.suspendedScrollY);
    });
  }
  gn = !1, pn = !1, Vt.forEach((t) => t.complete(yn)), Vt.clear();
}
function vr() {
  Vt.forEach((t) => {
    t.readKeyframes(), t.needsMeasurement && (gn = !0);
  });
}
function hl() {
  yn = !0, vr(), yr(), yn = !1;
}
class Hn {
  constructor(e, n, i, s, o, r = !1) {
    this.state = "pending", this.isAsync = !1, this.needsMeasurement = !1, this.unresolvedKeyframes = [...e], this.onComplete = n, this.name = i, this.motionValue = s, this.element = o, this.isAsync = r;
  }
  scheduleResolve() {
    this.state = "scheduled", this.isAsync ? (Vt.add(this), pn || (pn = !0, k.read(vr), k.resolveKeyframes(yr))) : (this.readKeyframes(), this.complete());
  }
  readKeyframes() {
    const { unresolvedKeyframes: e, name: n, element: i, motionValue: s } = this;
    if (e[0] === null) {
      const o = s == null ? void 0 : s.get(), r = e[e.length - 1];
      if (o !== void 0)
        e[0] = o;
      else if (i && n) {
        const a = i.readValue(n, r);
        a != null && (e[0] = a);
      }
      e[0] === void 0 && (e[0] = r), s && o === void 0 && s.set(e[0]);
    }
    sl(e);
  }
  setFinalKeyframe() {
  }
  measureInitialState() {
  }
  renderEndStyles() {
  }
  measureEndState() {
  }
  complete(e = !1) {
    this.state = "complete", this.onComplete(this.unresolvedKeyframes, this.finalKeyframe, e), Vt.delete(this);
  }
  cancel() {
    this.state === "scheduled" && (Vt.delete(this), this.state = "pending");
  }
  resume() {
    this.state === "pending" && this.scheduleResolve();
  }
}
const dl = (t) => t.startsWith("--");
function ml(t, e, n) {
  dl(e) ? t.style.setProperty(e, n) : t.style[e] = n;
}
const pl = /* @__PURE__ */ kn(() => window.ScrollTimeline !== void 0), gl = {};
function yl(t, e) {
  const n = /* @__PURE__ */ kn(t);
  return () => gl[e] ?? n();
}
const br = /* @__PURE__ */ yl(() => {
  try {
    document.createElement("div").animate({ opacity: 0 }, { easing: "linear(0, 1)" });
  } catch {
    return !1;
  }
  return !0;
}, "linearEasing"), qt = ([t, e, n, i]) => `cubic-bezier(${t}, ${e}, ${n}, ${i})`, Bi = {
  linear: "linear",
  ease: "ease",
  easeIn: "ease-in",
  easeOut: "ease-out",
  easeInOut: "ease-in-out",
  circIn: /* @__PURE__ */ qt([0, 0.65, 0.55, 1]),
  circOut: /* @__PURE__ */ qt([0.55, 0, 1, 0.45]),
  backIn: /* @__PURE__ */ qt([0.31, 0.01, 0.66, -0.59]),
  backOut: /* @__PURE__ */ qt([0.33, 1.53, 0.69, 0.99])
};
function xr(t, e) {
  if (t)
    return typeof t == "function" ? br() ? mr(t, e) : "ease-out" : sr(t) ? qt(t) : Array.isArray(t) ? t.map((n) => xr(n, e) || Bi.easeOut) : Bi[t];
}
function vl(t, e, n, { delay: i = 0, duration: s = 300, repeat: o = 0, repeatType: r = "loop", ease: a = "easeOut", times: l } = {}, u = void 0) {
  const c = {
    [e]: n
  };
  l && (c.offset = l);
  const h = xr(a, s);
  Array.isArray(h) && (c.easing = h);
  const d = {
    delay: i,
    duration: s,
    easing: Array.isArray(h) ? "linear" : h,
    fill: "both",
    iterations: o + 1,
    direction: r === "reverse" ? "alternate" : "normal"
  };
  return u && (d.pseudoElement = u), t.animate(c, d);
}
function Tr(t) {
  return typeof t == "function" && "applyToOptions" in t;
}
function bl({ type: t, ...e }) {
  return Tr(t) && br() ? t.applyToOptions(e) : (e.duration ?? (e.duration = 300), e.ease ?? (e.ease = "easeOut"), e);
}
class xl extends Yn {
  constructor(e) {
    if (super(), this.finishedTime = null, this.isStopped = !1, !e)
      return;
    const { element: n, name: i, keyframes: s, pseudoElement: o, allowFlatten: r = !1, finalKeyframe: a, onComplete: l } = e;
    this.isPseudoElement = !!o, this.allowFlatten = r, this.options = e, dt(typeof e.type != "string", `Mini animate() doesn't support "type" as a string.`, "mini-spring");
    const u = bl(e);
    this.animation = vl(n, i, s, u, o), u.autoplay === !1 && this.animation.pause(), this.animation.onfinish = () => {
      if (this.finishedTime = this.time, !o) {
        const c = Kn(s, this.options, a, this.speed);
        this.updateMotionValue ? this.updateMotionValue(c) : ml(n, i, c), this.animation.cancel();
      }
      l == null || l(), this.notifyFinished();
    };
  }
  play() {
    this.isStopped || (this.animation.play(), this.state === "finished" && this.updateFinished());
  }
  pause() {
    this.animation.pause();
  }
  complete() {
    var e, n;
    (n = (e = this.animation).finish) == null || n.call(e);
  }
  cancel() {
    try {
      this.animation.cancel();
    } catch {
    }
  }
  stop() {
    if (this.isStopped)
      return;
    this.isStopped = !0;
    const { state: e } = this;
    e === "idle" || e === "finished" || (this.updateMotionValue ? this.updateMotionValue() : this.commitStyles(), this.isPseudoElement || this.cancel());
  }
  /**
   * WAAPI doesn't natively have any interruption capabilities.
   *
   * In this method, we commit styles back to the DOM before cancelling
   * the animation.
   *
   * This is designed to be overridden by NativeAnimationExtended, which
   * will create a renderless JS animation and sample it twice to calculate
   * its current value, "previous" value, and therefore allow
   * Motion to also correctly calculate velocity for any subsequent animation
   * while deferring the commit until the next animation frame.
   */
  commitStyles() {
    var e, n;
    this.isPseudoElement || (n = (e = this.animation).commitStyles) == null || n.call(e);
  }
  get duration() {
    var n, i;
    const e = ((i = (n = this.animation.effect) == null ? void 0 : n.getComputedTiming) == null ? void 0 : i.call(n).duration) || 0;
    return /* @__PURE__ */ nt(Number(e));
  }
  get iterationDuration() {
    const { delay: e = 0 } = this.options || {};
    return this.duration + /* @__PURE__ */ nt(e);
  }
  get time() {
    return /* @__PURE__ */ nt(Number(this.animation.currentTime) || 0);
  }
  set time(e) {
    this.finishedTime = null, this.animation.currentTime = /* @__PURE__ */ ot(e);
  }
  /**
   * The playback speed of the animation.
   * 1 = normal speed, 2 = double speed, 0.5 = half speed.
   */
  get speed() {
    return this.animation.playbackRate;
  }
  set speed(e) {
    e < 0 && (this.finishedTime = null), this.animation.playbackRate = e;
  }
  get state() {
    return this.finishedTime !== null ? "finished" : this.animation.playState;
  }
  get startTime() {
    return Number(this.animation.startTime);
  }
  set startTime(e) {
    this.animation.startTime = e;
  }
  /**
   * Attaches a timeline to the animation, for instance the `ScrollTimeline`.
   */
  attachTimeline({ timeline: e, observe: n }) {
    var i;
    return this.allowFlatten && ((i = this.animation.effect) == null || i.updateTiming({ easing: "linear" })), this.animation.onfinish = null, e && pl() ? (this.animation.timeline = e, it) : n(this);
  }
}
const wr = {
  anticipate: tr,
  backInOut: Qs,
  circInOut: nr
};
function Tl(t) {
  return t in wr;
}
function wl(t) {
  typeof t.ease == "string" && Tl(t.ease) && (t.ease = wr[t.ease]);
}
const Ni = 10;
class Sl extends xl {
  constructor(e) {
    wl(e), gr(e), super(e), e.startTime && (this.startTime = e.startTime), this.options = e;
  }
  /**
   * WAAPI doesn't natively have any interruption capabilities.
   *
   * Rather than read commited styles back out of the DOM, we can
   * create a renderless JS animation and sample it twice to calculate
   * its current value, "previous" value, and therefore allow
   * Motion to calculate velocity for any subsequent animation.
   */
  updateMotionValue(e) {
    const { motionValue: n, onUpdate: i, onComplete: s, element: o, ...r } = this.options;
    if (!n)
      return;
    if (e !== void 0) {
      n.set(e);
      return;
    }
    const a = new Gn({
      ...r,
      autoplay: !1
    }), l = /* @__PURE__ */ ot(this.finishedTime ?? this.time);
    n.setWithVelocity(a.sample(l - Ni).value, a.sample(l).value, Ni), a.stop();
  }
}
const Ui = (t, e) => e === "zIndex" ? !1 : !!(typeof t == "number" || Array.isArray(t) || typeof t == "string" && // It's animatable if we have a string
(bt.test(t) || t === "0") && // And it contains numbers and/or colors
!t.startsWith("url("));
function Pl(t) {
  const e = t[0];
  if (t.length === 1)
    return !0;
  for (let n = 0; n < t.length; n++)
    if (t[n] !== e)
      return !0;
}
function _l(t, e, n, i) {
  const s = t[0];
  if (s === null)
    return !1;
  if (e === "display" || e === "visibility")
    return !0;
  const o = t[t.length - 1], r = Ui(s, e), a = Ui(o, e);
  return Ut(r === a, `You are trying to animate ${e} from "${s}" to "${o}". "${r ? o : s}" is not an animatable value.`, "value-not-animatable"), !r || !a ? !1 : Pl(t) || (n === "spring" || Tr(n)) && i;
}
function vn(t) {
  t.duration = 0, t.type = "keyframes";
}
const Al = /* @__PURE__ */ new Set([
  "opacity",
  "clipPath",
  "filter",
  "transform"
  // TODO: Could be re-enabled now we have support for linear() easing
  // "background-color"
]), Vl = /* @__PURE__ */ kn(() => Object.hasOwnProperty.call(Element.prototype, "animate"));
function Cl(t) {
  var c;
  const { motionValue: e, name: n, repeatDelay: i, repeatType: s, damping: o, type: r } = t;
  if (!(((c = e == null ? void 0 : e.owner) == null ? void 0 : c.current) instanceof HTMLElement))
    return !1;
  const { onUpdate: l, transformTemplate: u } = e.owner.getProps();
  return Vl() && n && Al.has(n) && (n !== "transform" || !u) && /**
   * If we're outputting values to onUpdate then we can't use WAAPI as there's
   * no way to read the value from WAAPI every frame.
   */
  !l && !i && s !== "mirror" && o !== 0 && r !== "inertia";
}
const El = 40;
class Rl extends Yn {
  constructor({ autoplay: e = !0, delay: n = 0, type: i = "keyframes", repeat: s = 0, repeatDelay: o = 0, repeatType: r = "loop", keyframes: a, name: l, motionValue: u, element: c, ...h }) {
    var g;
    super(), this.stop = () => {
      var v, T;
      this._animation && (this._animation.stop(), (v = this.stopTimeline) == null || v.call(this)), (T = this.keyframeResolver) == null || T.cancel();
    }, this.createdAt = J.now();
    const d = {
      autoplay: e,
      delay: n,
      type: i,
      repeat: s,
      repeatDelay: o,
      repeatType: r,
      name: l,
      motionValue: u,
      element: c,
      ...h
    }, m = (c == null ? void 0 : c.KeyframeResolver) || Hn;
    this.keyframeResolver = new m(a, (v, T, y) => this.onKeyframesResolved(v, T, d, !y), l, u, c), (g = this.keyframeResolver) == null || g.scheduleResolve();
  }
  onKeyframesResolved(e, n, i, s) {
    this.keyframeResolver = void 0;
    const { name: o, type: r, velocity: a, delay: l, isHandoff: u, onUpdate: c } = i;
    this.resolvedAt = J.now(), _l(e, o, r, a) || ((mt.instantAnimations || !l) && (c == null || c(Kn(e, i, n))), e[0] = e[e.length - 1], vn(i), i.repeat = 0);
    const d = {
      startTime: s ? this.resolvedAt ? this.resolvedAt - this.createdAt > El ? this.resolvedAt : this.createdAt : this.createdAt : void 0,
      finalKeyframe: n,
      ...i,
      keyframes: e
    }, m = !u && Cl(d) ? new Sl({
      ...d,
      element: d.motionValue.owner.current
    }) : new Gn(d);
    m.finished.then(() => this.notifyFinished()).catch(it), this.pendingTimeline && (this.stopTimeline = m.attachTimeline(this.pendingTimeline), this.pendingTimeline = void 0), this._animation = m;
  }
  get finished() {
    return this._animation ? this.animation.finished : this._finished;
  }
  then(e, n) {
    return this.finished.finally(e).then(() => {
    });
  }
  get animation() {
    var e;
    return this._animation || ((e = this.keyframeResolver) == null || e.resume(), hl()), this._animation;
  }
  get duration() {
    return this.animation.duration;
  }
  get iterationDuration() {
    return this.animation.iterationDuration;
  }
  get time() {
    return this.animation.time;
  }
  set time(e) {
    this.animation.time = e;
  }
  get speed() {
    return this.animation.speed;
  }
  get state() {
    return this.animation.state;
  }
  set speed(e) {
    this.animation.speed = e;
  }
  get startTime() {
    return this.animation.startTime;
  }
  attachTimeline(e) {
    return this._animation ? this.stopTimeline = this.animation.attachTimeline(e) : this.pendingTimeline = e, () => this.stop();
  }
  play() {
    this.animation.play();
  }
  pause() {
    this.animation.pause();
  }
  complete() {
    this.animation.complete();
  }
  cancel() {
    var e;
    this._animation && this.animation.cancel(), (e = this.keyframeResolver) == null || e.cancel();
  }
}
const Dl = (
  // eslint-disable-next-line redos-detector/no-unsafe-regex -- false positive, as it can match a lot of words
  /^var\(--(?:([\w-]+)|([\w-]+), ?([a-zA-Z\d ()%#.,-]+))\)/u
);
function Ml(t) {
  const e = Dl.exec(t);
  if (!e)
    return [,];
  const [, n, i, s] = e;
  return [`--${n ?? i}`, s];
}
const kl = 4;
function Sr(t, e, n = 1) {
  dt(n <= kl, `Max CSS variable fallback depth detected in property "${t}". This may indicate a circular fallback dependency.`, "max-css-var-depth");
  const [i, s] = Ml(t);
  if (!i)
    return;
  const o = window.getComputedStyle(e).getPropertyValue(i);
  if (o) {
    const r = o.trim();
    return Ys(r) ? parseFloat(r) : r;
  }
  return Bn(s) ? Sr(s, e, n + 1) : s;
}
function Xn(t, e) {
  return (t == null ? void 0 : t[e]) ?? (t == null ? void 0 : t.default) ?? t;
}
const Pr = /* @__PURE__ */ new Set([
  "width",
  "height",
  "top",
  "left",
  "right",
  "bottom",
  ...Wt
]), Ol = {
  test: (t) => t === "auto",
  parse: (t) => t
}, _r = (t) => (e) => e.test(t), Ar = [$t, P, ut, yt, Pa, Sa, Ol], $i = (t) => Ar.find(_r(t));
function Ll(t) {
  return typeof t == "number" ? t === 0 : t !== null ? t === "none" || t === "0" || Hs(t) : !0;
}
const jl = /* @__PURE__ */ new Set(["brightness", "contrast", "saturate", "opacity"]);
function Fl(t) {
  const [e, n] = t.slice(0, -1).split("(");
  if (e === "drop-shadow")
    return t;
  const [i] = n.match(Nn) || [];
  if (!i)
    return t;
  const s = n.replace(i, "");
  let o = jl.has(e) ? 1 : 0;
  return i !== n && (o *= 100), e + "(" + o + s + ")";
}
const Il = /\b([a-z-]*)\(.*?\)/gu, bn = {
  ...bt,
  getAnimatableNone: (t) => {
    const e = t.match(Il);
    return e ? e.map(Fl).join(" ") : t;
  }
}, Wi = {
  ...$t,
  transform: Math.round
}, Bl = {
  rotate: yt,
  rotateX: yt,
  rotateY: yt,
  rotateZ: yt,
  scale: ve,
  scaleX: ve,
  scaleY: ve,
  scaleZ: ve,
  skew: yt,
  skewX: yt,
  skewY: yt,
  distance: P,
  translateX: P,
  translateY: P,
  translateZ: P,
  x: P,
  y: P,
  z: P,
  perspective: P,
  transformPerspective: P,
  opacity: ne,
  originX: Ri,
  originY: Ri,
  originZ: P
}, zn = {
  // Border props
  borderWidth: P,
  borderTopWidth: P,
  borderRightWidth: P,
  borderBottomWidth: P,
  borderLeftWidth: P,
  borderRadius: P,
  radius: P,
  borderTopLeftRadius: P,
  borderTopRightRadius: P,
  borderBottomRightRadius: P,
  borderBottomLeftRadius: P,
  // Positioning props
  width: P,
  maxWidth: P,
  height: P,
  maxHeight: P,
  top: P,
  right: P,
  bottom: P,
  left: P,
  // Spacing props
  padding: P,
  paddingTop: P,
  paddingRight: P,
  paddingBottom: P,
  paddingLeft: P,
  margin: P,
  marginTop: P,
  marginRight: P,
  marginBottom: P,
  marginLeft: P,
  // Misc
  backgroundPositionX: P,
  backgroundPositionY: P,
  ...Bl,
  zIndex: Wi,
  // SVG
  fillOpacity: ne,
  strokeOpacity: ne,
  numOctaves: Wi
}, Nl = {
  ...zn,
  // Color props
  color: $,
  backgroundColor: $,
  outlineColor: $,
  fill: $,
  stroke: $,
  // Border props
  borderColor: $,
  borderTopColor: $,
  borderRightColor: $,
  borderBottomColor: $,
  borderLeftColor: $,
  filter: bn,
  WebkitFilter: bn
}, Vr = (t) => Nl[t];
function Cr(t, e) {
  let n = Vr(t);
  return n !== bn && (n = bt), n.getAnimatableNone ? n.getAnimatableNone(e) : void 0;
}
const Ul = /* @__PURE__ */ new Set(["auto", "none", "0"]);
function $l(t, e, n) {
  let i = 0, s;
  for (; i < t.length && !s; ) {
    const o = t[i];
    typeof o == "string" && !Ul.has(o) && ie(o).values.length && (s = t[i]), i++;
  }
  if (s && n)
    for (const o of e)
      t[o] = Cr(n, s);
}
class Wl extends Hn {
  constructor(e, n, i, s, o) {
    super(e, n, i, s, o, !0);
  }
  readKeyframes() {
    const { unresolvedKeyframes: e, element: n, name: i } = this;
    if (!n || !n.current)
      return;
    super.readKeyframes();
    for (let l = 0; l < e.length; l++) {
      let u = e[l];
      if (typeof u == "string" && (u = u.trim(), Bn(u))) {
        const c = Sr(u, n.current);
        c !== void 0 && (e[l] = c), l === e.length - 1 && (this.finalKeyframe = u);
      }
    }
    if (this.resolveNoneKeyframes(), !Pr.has(i) || e.length !== 2)
      return;
    const [s, o] = e, r = $i(s), a = $i(o);
    if (r !== a)
      if (Ii(r) && Ii(a))
        for (let l = 0; l < e.length; l++) {
          const u = e[l];
          typeof u == "string" && (e[l] = parseFloat(u));
        }
      else At[i] && (this.needsMeasurement = !0);
  }
  resolveNoneKeyframes() {
    const { unresolvedKeyframes: e, name: n } = this, i = [];
    for (let s = 0; s < e.length; s++)
      (e[s] === null || Ll(e[s])) && i.push(s);
    i.length && $l(e, i, n);
  }
  measureInitialState() {
    const { element: e, unresolvedKeyframes: n, name: i } = this;
    if (!e || !e.current)
      return;
    i === "height" && (this.suspendedScrollY = window.pageYOffset), this.measuredOrigin = At[i](e.measureViewportBox(), window.getComputedStyle(e.current)), n[0] = this.measuredOrigin;
    const s = n[n.length - 1];
    s !== void 0 && e.getValue(i, s).jump(s, !1);
  }
  measureEndState() {
    var a;
    const { element: e, name: n, unresolvedKeyframes: i } = this;
    if (!e || !e.current)
      return;
    const s = e.getValue(n);
    s && s.jump(this.measuredOrigin, !1);
    const o = i.length - 1, r = i[o];
    i[o] = At[n](e.measureViewportBox(), window.getComputedStyle(e.current)), r !== null && this.finalKeyframe === void 0 && (this.finalKeyframe = r), (a = this.removedTransforms) != null && a.length && this.removedTransforms.forEach(([l, u]) => {
      e.getValue(l).set(u);
    }), this.resolveNoneKeyframes();
  }
}
function Kl(t, e, n) {
  if (t instanceof EventTarget)
    return [t];
  if (typeof t == "string") {
    let i = document;
    const s = (n == null ? void 0 : n[t]) ?? i.querySelectorAll(t);
    return s ? Array.from(s) : [];
  }
  return Array.from(t);
}
const Er = (t, e) => e && typeof t == "number" ? e.transform(t) : t;
function Yl(t) {
  return Gs(t) && "offsetHeight" in t;
}
const Ki = 30, Gl = (t) => !isNaN(parseFloat(t));
class Hl {
  /**
   * @param init - The initiating value
   * @param config - Optional configuration options
   *
   * -  `transformer`: A function to transform incoming values with.
   */
  constructor(e, n = {}) {
    this.canTrackVelocity = null, this.events = {}, this.updateAndNotify = (i) => {
      var o;
      const s = J.now();
      if (this.updatedAt !== s && this.setPrevFrameValue(), this.prev = this.current, this.setCurrent(i), this.current !== this.prev && ((o = this.events.change) == null || o.notify(this.current), this.dependents))
        for (const r of this.dependents)
          r.dirty();
    }, this.hasAnimated = !1, this.setCurrent(e), this.owner = n.owner;
  }
  setCurrent(e) {
    this.current = e, this.updatedAt = J.now(), this.canTrackVelocity === null && e !== void 0 && (this.canTrackVelocity = Gl(this.current));
  }
  setPrevFrameValue(e = this.current) {
    this.prevFrameValue = e, this.prevUpdatedAt = this.updatedAt;
  }
  /**
   * Adds a function that will be notified when the `MotionValue` is updated.
   *
   * It returns a function that, when called, will cancel the subscription.
   *
   * When calling `onChange` inside a React component, it should be wrapped with the
   * `useEffect` hook. As it returns an unsubscribe function, this should be returned
   * from the `useEffect` function to ensure you don't add duplicate subscribers..
   *
   * ```jsx
   * export const MyComponent = () => {
   *   const x = useMotionValue(0)
   *   const y = useMotionValue(0)
   *   const opacity = useMotionValue(1)
   *
   *   useEffect(() => {
   *     function updateOpacity() {
   *       const maxXY = Math.max(x.get(), y.get())
   *       const newOpacity = transform(maxXY, [0, 100], [1, 0])
   *       opacity.set(newOpacity)
   *     }
   *
   *     const unsubscribeX = x.on("change", updateOpacity)
   *     const unsubscribeY = y.on("change", updateOpacity)
   *
   *     return () => {
   *       unsubscribeX()
   *       unsubscribeY()
   *     }
   *   }, [])
   *
   *   return <motion.div style={{ x }} />
   * }
   * ```
   *
   * @param subscriber - A function that receives the latest value.
   * @returns A function that, when called, will cancel this subscription.
   *
   * @deprecated
   */
  onChange(e) {
    return process.env.NODE_ENV !== "production" && Ln(!1, 'value.onChange(callback) is deprecated. Switch to value.on("change", callback).'), this.on("change", e);
  }
  on(e, n) {
    this.events[e] || (this.events[e] = new On());
    const i = this.events[e].add(n);
    return e === "change" ? () => {
      i(), k.read(() => {
        this.events.change.getSize() || this.stop();
      });
    } : i;
  }
  clearListeners() {
    for (const e in this.events)
      this.events[e].clear();
  }
  /**
   * Attaches a passive effect to the `MotionValue`.
   */
  attach(e, n) {
    this.passiveEffect = e, this.stopPassiveEffect = n;
  }
  /**
   * Sets the state of the `MotionValue`.
   *
   * @remarks
   *
   * ```jsx
   * const x = useMotionValue(0)
   * x.set(10)
   * ```
   *
   * @param latest - Latest value to set.
   * @param render - Whether to notify render subscribers. Defaults to `true`
   *
   * @public
   */
  set(e) {
    this.passiveEffect ? this.passiveEffect(e, this.updateAndNotify) : this.updateAndNotify(e);
  }
  setWithVelocity(e, n, i) {
    this.set(n), this.prev = void 0, this.prevFrameValue = e, this.prevUpdatedAt = this.updatedAt - i;
  }
  /**
   * Set the state of the `MotionValue`, stopping any active animations,
   * effects, and resets velocity to `0`.
   */
  jump(e, n = !0) {
    this.updateAndNotify(e), this.prev = e, this.prevUpdatedAt = this.prevFrameValue = void 0, n && this.stop(), this.stopPassiveEffect && this.stopPassiveEffect();
  }
  dirty() {
    var e;
    (e = this.events.change) == null || e.notify(this.current);
  }
  addDependent(e) {
    this.dependents || (this.dependents = /* @__PURE__ */ new Set()), this.dependents.add(e);
  }
  removeDependent(e) {
    this.dependents && this.dependents.delete(e);
  }
  /**
   * Returns the latest state of `MotionValue`
   *
   * @returns - The latest state of `MotionValue`
   *
   * @public
   */
  get() {
    return this.current;
  }
  /**
   * @public
   */
  getPrevious() {
    return this.prev;
  }
  /**
   * Returns the latest velocity of `MotionValue`
   *
   * @returns - The latest velocity of `MotionValue`. Returns `0` if the state is non-numerical.
   *
   * @public
   */
  getVelocity() {
    const e = J.now();
    if (!this.canTrackVelocity || this.prevFrameValue === void 0 || e - this.updatedAt > Ki)
      return 0;
    const n = Math.min(this.updatedAt - this.prevUpdatedAt, Ki);
    return Xs(parseFloat(this.current) - parseFloat(this.prevFrameValue), n);
  }
  /**
   * Registers a new animation to control this `MotionValue`. Only one
   * animation can drive a `MotionValue` at one time.
   *
   * ```jsx
   * value.start()
   * ```
   *
   * @param animation - A function that starts the provided animation
   */
  start(e) {
    return this.stop(), new Promise((n) => {
      this.hasAnimated = !0, this.animation = e(n), this.events.animationStart && this.events.animationStart.notify();
    }).then(() => {
      this.events.animationComplete && this.events.animationComplete.notify(), this.clearAnimation();
    });
  }
  /**
   * Stop the currently active animation.
   *
   * @public
   */
  stop() {
    this.animation && (this.animation.stop(), this.events.animationCancel && this.events.animationCancel.notify()), this.clearAnimation();
  }
  /**
   * Returns `true` if this value is currently animating.
   *
   * @public
   */
  isAnimating() {
    return !!this.animation;
  }
  clearAnimation() {
    delete this.animation;
  }
  /**
   * Destroy and clean up subscribers to this `MotionValue`.
   *
   * The `MotionValue` hooks like `useMotionValue` and `useTransform` automatically
   * handle the lifecycle of the returned `MotionValue`, so this method is only necessary if you've manually
   * created a `MotionValue` via the `motionValue` function.
   *
   * @public
   */
  destroy() {
    var e, n;
    (e = this.dependents) == null || e.clear(), (n = this.events.destroy) == null || n.notify(), this.clearListeners(), this.stop(), this.stopPassiveEffect && this.stopPassiveEffect();
  }
}
function It(t, e) {
  return new Hl(t, e);
}
const { schedule: qn } = /* @__PURE__ */ rr(queueMicrotask, !1), st = {
  x: !1,
  y: !1
};
function Rr() {
  return st.x || st.y;
}
function Xl(t) {
  return t === "x" || t === "y" ? st[t] ? null : (st[t] = !0, () => {
    st[t] = !1;
  }) : st.x || st.y ? null : (st.x = st.y = !0, () => {
    st.x = st.y = !1;
  });
}
function Dr(t, e) {
  const n = Kl(t), i = new AbortController(), s = {
    passive: !0,
    ...e,
    signal: i.signal
  };
  return [n, s, () => i.abort()];
}
function Yi(t) {
  return !(t.pointerType === "touch" || Rr());
}
function zl(t, e, n = {}) {
  const [i, s, o] = Dr(t, n), r = (a) => {
    if (!Yi(a))
      return;
    const { target: l } = a, u = e(l, a);
    if (typeof u != "function" || !l)
      return;
    const c = (h) => {
      Yi(h) && (u(h), l.removeEventListener("pointerleave", c));
    };
    l.addEventListener("pointerleave", c, s);
  };
  return i.forEach((a) => {
    a.addEventListener("pointerenter", r, s);
  }), o;
}
const Mr = (t, e) => e ? t === e ? !0 : Mr(t, e.parentElement) : !1, Zn = (t) => t.pointerType === "mouse" ? typeof t.button != "number" || t.button <= 0 : t.isPrimary !== !1, ql = /* @__PURE__ */ new Set([
  "BUTTON",
  "INPUT",
  "SELECT",
  "TEXTAREA",
  "A"
]);
function Zl(t) {
  return ql.has(t.tagName) || t.tabIndex !== -1;
}
const we = /* @__PURE__ */ new WeakSet();
function Gi(t) {
  return (e) => {
    e.key === "Enter" && t(e);
  };
}
function ze(t, e) {
  t.dispatchEvent(new PointerEvent("pointer" + e, { isPrimary: !0, bubbles: !0 }));
}
const Jl = (t, e) => {
  const n = t.currentTarget;
  if (!n)
    return;
  const i = Gi(() => {
    if (we.has(n))
      return;
    ze(n, "down");
    const s = Gi(() => {
      ze(n, "up");
    }), o = () => ze(n, "cancel");
    n.addEventListener("keyup", s, e), n.addEventListener("blur", o, e);
  });
  n.addEventListener("keydown", i, e), n.addEventListener("blur", () => n.removeEventListener("keydown", i), e);
};
function Hi(t) {
  return Zn(t) && !Rr();
}
function Ql(t, e, n = {}) {
  const [i, s, o] = Dr(t, n), r = (a) => {
    const l = a.currentTarget;
    if (!Hi(a))
      return;
    we.add(l);
    const u = e(l, a), c = (m, g) => {
      window.removeEventListener("pointerup", h), window.removeEventListener("pointercancel", d), we.has(l) && we.delete(l), Hi(m) && typeof u == "function" && u(m, { success: g });
    }, h = (m) => {
      c(m, l === window || l === document || n.useGlobalTarget || Mr(l, m.target));
    }, d = (m) => {
      c(m, !1);
    };
    window.addEventListener("pointerup", h, s), window.addEventListener("pointercancel", d, s);
  };
  return i.forEach((a) => {
    (n.useGlobalTarget ? window : a).addEventListener("pointerdown", r, s), Yl(a) && (a.addEventListener("focus", (u) => Jl(u, s)), !Zl(a) && !a.hasAttribute("tabindex") && (a.tabIndex = 0));
  }), o;
}
function kr(t) {
  return Gs(t) && "ownerSVGElement" in t;
}
function tc(t) {
  return kr(t) && t.tagName === "svg";
}
const Y = (t) => !!(t && t.getVelocity), ec = [...Ar, $, bt], nc = (t) => ec.find(_r(t)), Or = Nt({
  transformPagePoint: (t) => t,
  isStatic: !1,
  reducedMotion: "never"
});
function ic(t = !0) {
  const e = Z(Rn);
  if (e === null)
    return [!0, null];
  const { isPresent: n, onExitComplete: i, register: s } = e, o = qo();
  Cn(() => {
    if (t)
      return s(o);
  }, [t]);
  const r = Us(() => t && i && i(o), [o, i, t]);
  return !n && i ? [!1, r] : [!0];
}
const Lr = Nt({ strict: !1 }), Xi = {
  animation: [
    "animate",
    "variants",
    "whileHover",
    "whileTap",
    "exit",
    "whileInView",
    "whileFocus",
    "whileDrag"
  ],
  exit: ["exit"],
  drag: ["drag", "dragControls"],
  focus: ["whileFocus"],
  hover: ["whileHover", "onHoverStart", "onHoverEnd"],
  tap: ["whileTap", "onTap", "onTapStart", "onTapCancel"],
  pan: ["onPan", "onPanStart", "onPanSessionStart", "onPanEnd"],
  inView: ["whileInView", "onViewportEnter", "onViewportLeave"],
  layout: ["layout", "layoutId"]
}, Bt = {};
for (const t in Xi)
  Bt[t] = {
    isEnabled: (e) => Xi[t].some((n) => !!e[n])
  };
function sc(t) {
  for (const e in t)
    Bt[e] = {
      ...Bt[e],
      ...t[e]
    };
}
const rc = /* @__PURE__ */ new Set([
  "animate",
  "exit",
  "variants",
  "initial",
  "style",
  "values",
  "variants",
  "transition",
  "transformTemplate",
  "custom",
  "inherit",
  "onBeforeLayoutMeasure",
  "onAnimationStart",
  "onAnimationComplete",
  "onUpdate",
  "onDragStart",
  "onDrag",
  "onDragEnd",
  "onMeasureDragConstraints",
  "onDirectionLock",
  "onDragTransitionEnd",
  "_dragX",
  "_dragY",
  "onHoverStart",
  "onHoverEnd",
  "onViewportEnter",
  "onViewportLeave",
  "globalTapTarget",
  "ignoreStrict",
  "viewport"
]);
function Ce(t) {
  return t.startsWith("while") || t.startsWith("drag") && t !== "draggable" || t.startsWith("layout") || t.startsWith("onTap") || t.startsWith("onPan") || t.startsWith("onLayout") || rc.has(t);
}
let jr = (t) => !Ce(t);
function oc(t) {
  typeof t == "function" && (jr = (e) => e.startsWith("on") ? !Ce(e) : t(e));
}
try {
  oc(require("@emotion/is-prop-valid").default);
} catch {
}
function ac(t, e, n) {
  const i = {};
  for (const s in t)
    s === "values" && typeof t.values == "object" || (jr(s) || n === !0 && Ce(s) || !e && !Ce(s) || // If trying to use native HTML drag events, forward drag listeners
    t.draggable && s.startsWith("onDrag")) && (i[s] = t[s]);
  return i;
}
const Me = /* @__PURE__ */ Nt({});
function ke(t) {
  return t !== null && typeof t == "object" && typeof t.start == "function";
}
function se(t) {
  return typeof t == "string" || Array.isArray(t);
}
const Jn = [
  "animate",
  "whileInView",
  "whileFocus",
  "whileHover",
  "whileTap",
  "whileDrag",
  "exit"
], Qn = ["initial", ...Jn];
function Oe(t) {
  return ke(t.animate) || Qn.some((e) => se(t[e]));
}
function Fr(t) {
  return !!(Oe(t) || t.variants);
}
function lc(t, e) {
  if (Oe(t)) {
    const { initial: n, animate: i } = t;
    return {
      initial: n === !1 || se(n) ? n : void 0,
      animate: se(i) ? i : void 0
    };
  }
  return t.inherit !== !1 ? e : {};
}
function cc(t) {
  const { initial: e, animate: n } = lc(t, Z(Me));
  return De(() => ({ initial: e, animate: n }), [zi(e), zi(n)]);
}
function zi(t) {
  return Array.isArray(t) ? t.join(" ") : t;
}
const re = {};
function uc(t) {
  for (const e in t)
    re[e] = t[e], In(e) && (re[e].isCSSVariable = !0);
}
function Ir(t, { layout: e, layoutId: n }) {
  return Kt.has(t) || t.startsWith("origin") || (e || n !== void 0) && (!!re[t] || t === "opacity");
}
const fc = {
  x: "translateX",
  y: "translateY",
  z: "translateZ",
  transformPerspective: "perspective"
}, hc = Wt.length;
function dc(t, e, n) {
  let i = "", s = !0;
  for (let o = 0; o < hc; o++) {
    const r = Wt[o], a = t[r];
    if (a === void 0)
      continue;
    let l = !0;
    if (typeof a == "number" ? l = a === (r.startsWith("scale") ? 1 : 0) : l = parseFloat(a) === 0, !l || n) {
      const u = Er(a, zn[r]);
      if (!l) {
        s = !1;
        const c = fc[r] || r;
        i += `${c}(${u}) `;
      }
      n && (e[r] = u);
    }
  }
  return i = i.trim(), n ? i = n(e, s ? "" : i) : s && (i = "none"), i;
}
function ti(t, e, n) {
  const { style: i, vars: s, transformOrigin: o } = t;
  let r = !1, a = !1;
  for (const l in e) {
    const u = e[l];
    if (Kt.has(l)) {
      r = !0;
      continue;
    } else if (In(l)) {
      s[l] = u;
      continue;
    } else {
      const c = Er(u, zn[l]);
      l.startsWith("origin") ? (a = !0, o[l] = c) : i[l] = c;
    }
  }
  if (e.transform || (r || n ? i.transform = dc(e, t.transform, n) : i.transform && (i.transform = "none")), a) {
    const { originX: l = "50%", originY: u = "50%", originZ: c = 0 } = o;
    i.transformOrigin = `${l} ${u} ${c}`;
  }
}
const ei = () => ({
  style: {},
  transform: {},
  transformOrigin: {},
  vars: {}
});
function Br(t, e, n) {
  for (const i in e)
    !Y(e[i]) && !Ir(i, n) && (t[i] = e[i]);
}
function mc({ transformTemplate: t }, e) {
  return De(() => {
    const n = ei();
    return ti(n, e, t), Object.assign({}, n.vars, n.style);
  }, [e]);
}
function pc(t, e) {
  const n = t.style || {}, i = {};
  return Br(i, n, t), Object.assign(i, mc(t, e)), i;
}
function gc(t, e) {
  const n = {}, i = pc(t, e);
  return t.drag && t.dragListener !== !1 && (n.draggable = !1, i.userSelect = i.WebkitUserSelect = i.WebkitTouchCallout = "none", i.touchAction = t.drag === !0 ? "none" : `pan-${t.drag === "x" ? "y" : "x"}`), t.tabIndex === void 0 && (t.onTap || t.onTapStart || t.whileTap) && (n.tabIndex = 0), n.style = i, n;
}
const yc = {
  offset: "stroke-dashoffset",
  array: "stroke-dasharray"
}, vc = {
  offset: "strokeDashoffset",
  array: "strokeDasharray"
};
function bc(t, e, n = 1, i = 0, s = !0) {
  t.pathLength = 1;
  const o = s ? yc : vc;
  t[o.offset] = P.transform(-i);
  const r = P.transform(e), a = P.transform(n);
  t[o.array] = `${r} ${a}`;
}
function Nr(t, {
  attrX: e,
  attrY: n,
  attrScale: i,
  pathLength: s,
  pathSpacing: o = 1,
  pathOffset: r = 0,
  // This is object creation, which we try to avoid per-frame.
  ...a
}, l, u, c) {
  if (ti(t, a, u), l) {
    t.style.viewBox && (t.attrs.viewBox = t.style.viewBox);
    return;
  }
  t.attrs = t.style, t.style = {};
  const { attrs: h, style: d } = t;
  h.transform && (d.transform = h.transform, delete h.transform), (d.transform || h.transformOrigin) && (d.transformOrigin = h.transformOrigin ?? "50% 50%", delete h.transformOrigin), d.transform && (d.transformBox = (c == null ? void 0 : c.transformBox) ?? "fill-box", delete h.transformBox), e !== void 0 && (h.x = e), n !== void 0 && (h.y = n), i !== void 0 && (h.scale = i), s !== void 0 && bc(h, s, o, r, !1);
}
const Ur = () => ({
  ...ei(),
  attrs: {}
}), $r = (t) => typeof t == "string" && t.toLowerCase() === "svg";
function xc(t, e, n, i) {
  const s = De(() => {
    const o = Ur();
    return Nr(o, e, $r(i), t.transformTemplate, t.style), {
      ...o.attrs,
      style: { ...o.style }
    };
  }, [e]);
  if (t.style) {
    const o = {};
    Br(o, t.style, t), s.style = { ...o, ...s.style };
  }
  return s;
}
const Tc = [
  "animate",
  "circle",
  "defs",
  "desc",
  "ellipse",
  "g",
  "image",
  "line",
  "filter",
  "marker",
  "mask",
  "metadata",
  "path",
  "pattern",
  "polygon",
  "polyline",
  "rect",
  "stop",
  "switch",
  "symbol",
  "svg",
  "text",
  "tspan",
  "use",
  "view"
];
function ni(t) {
  return (
    /**
     * If it's not a string, it's a custom React component. Currently we only support
     * HTML custom React components.
     */
    typeof t != "string" || /**
     * If it contains a dash, the element is a custom HTML webcomponent.
     */
    t.includes("-") ? !1 : (
      /**
       * If it's in our list of lowercase SVG tags, it's an SVG component
       */
      !!(Tc.indexOf(t) > -1 || /**
       * If it contains a capital letter, it's an SVG component
       */
      /[A-Z]/u.test(t))
    )
  );
}
function wc(t, e, n, { latestValues: i }, s, o = !1) {
  const a = (ni(t) ? xc : gc)(e, i, s, t), l = ac(e, typeof t == "string", o), u = t !== $s ? { ...l, ...a, ref: n } : {}, { children: c } = e, h = De(() => Y(c) ? c.get() : c, [c]);
  return Zo(t, {
    ...u,
    children: h
  });
}
function qi(t) {
  const e = [{}, {}];
  return t == null || t.values.forEach((n, i) => {
    e[0][i] = n.get(), e[1][i] = n.getVelocity();
  }), e;
}
function ii(t, e, n, i) {
  if (typeof e == "function") {
    const [s, o] = qi(i);
    e = e(n !== void 0 ? n : t.custom, s, o);
  }
  if (typeof e == "string" && (e = t.variants && t.variants[e]), typeof e == "function") {
    const [s, o] = qi(i);
    e = e(n !== void 0 ? n : t.custom, s, o);
  }
  return e;
}
function Se(t) {
  return Y(t) ? t.get() : t;
}
function Sc({ scrapeMotionValuesFromProps: t, createRenderState: e }, n, i, s) {
  return {
    latestValues: Pc(n, i, s, t),
    renderState: e()
  };
}
function Pc(t, e, n, i) {
  const s = {}, o = i(t, {});
  for (const d in o)
    s[d] = Se(o[d]);
  let { initial: r, animate: a } = t;
  const l = Oe(t), u = Fr(t);
  e && u && !l && t.inherit !== !1 && (r === void 0 && (r = e.initial), a === void 0 && (a = e.animate));
  let c = n ? n.initial === !1 : !1;
  c = c || r === !1;
  const h = c ? a : r;
  if (h && typeof h != "boolean" && !ke(h)) {
    const d = Array.isArray(h) ? h : [h];
    for (let m = 0; m < d.length; m++) {
      const g = ii(t, d[m]);
      if (g) {
        const { transitionEnd: v, transition: T, ...y } = g;
        for (const b in y) {
          let w = y[b];
          if (Array.isArray(w)) {
            const C = c ? w.length - 1 : 0;
            w = w[C];
          }
          w !== null && (s[b] = w);
        }
        for (const b in v)
          s[b] = v[b];
      }
    }
  }
  return s;
}
const Wr = (t) => (e, n) => {
  const i = Z(Me), s = Z(Rn), o = () => Sc(t, e, i, s);
  return n ? o() : sa(o);
};
function si(t, e, n) {
  var o;
  const { style: i } = t, s = {};
  for (const r in i)
    (Y(i[r]) || e.style && Y(e.style[r]) || Ir(r, t) || ((o = n == null ? void 0 : n.getValue(r)) == null ? void 0 : o.liveStyle) !== void 0) && (s[r] = i[r]);
  return s;
}
const _c = /* @__PURE__ */ Wr({
  scrapeMotionValuesFromProps: si,
  createRenderState: ei
});
function Kr(t, e, n) {
  const i = si(t, e, n);
  for (const s in t)
    if (Y(t[s]) || Y(e[s])) {
      const o = Wt.indexOf(s) !== -1 ? "attr" + s.charAt(0).toUpperCase() + s.substring(1) : s;
      i[o] = t[s];
    }
  return i;
}
const Ac = /* @__PURE__ */ Wr({
  scrapeMotionValuesFromProps: Kr,
  createRenderState: Ur
}), Vc = Symbol.for("motionComponentSymbol");
function kt(t) {
  return t && typeof t == "object" && Object.prototype.hasOwnProperty.call(t, "current");
}
function Cc(t, e, n) {
  return Us(
    (i) => {
      i && t.onMount && t.onMount(i), e && (i ? e.mount(i) : e.unmount()), n && (typeof n == "function" ? n(i) : kt(n) && (n.current = i));
    },
    /**
     * Include externalRef in dependencies to ensure the callback updates
     * when the ref changes, allowing proper ref forwarding.
     */
    [e]
  );
}
const ri = (t) => t.replace(/([a-z])([A-Z])/gu, "$1-$2").toLowerCase(), Ec = "framerAppearId", Yr = "data-" + ri(Ec), Gr = Nt({});
function Rc(t, e, n, i, s) {
  var v, T;
  const { visualElement: o } = Z(Me), r = Z(Lr), a = Z(Rn), l = Z(Or).reducedMotion, u = xe(null);
  i = i || r.renderer, !u.current && i && (u.current = i(t, {
    visualState: e,
    parent: o,
    props: n,
    presenceContext: a,
    blockInitialAnimation: a ? a.initial === !1 : !1,
    reducedMotionConfig: l
  }));
  const c = u.current, h = Z(Gr);
  c && !c.projection && s && (c.type === "html" || c.type === "svg") && Dc(u.current, n, s, h);
  const d = xe(!1);
  Jo(() => {
    c && d.current && c.update(n, a);
  });
  const m = n[Yr], g = xe(!!m && !((v = window.MotionHandoffIsComplete) != null && v.call(window, m)) && ((T = window.MotionHasOptimisedAnimation) == null ? void 0 : T.call(window, m)));
  return ra(() => {
    c && (d.current = !0, window.MotionIsMounted = !0, c.updateFeatures(), c.scheduleRenderMicrotask(), g.current && c.animationState && c.animationState.animateChanges());
  }), Cn(() => {
    c && (!g.current && c.animationState && c.animationState.animateChanges(), g.current && (queueMicrotask(() => {
      var y;
      (y = window.MotionHandoffMarkAsComplete) == null || y.call(window, m);
    }), g.current = !1), c.enteringChildren = void 0);
  }), c;
}
function Dc(t, e, n, i) {
  const { layoutId: s, layout: o, drag: r, dragConstraints: a, layoutScroll: l, layoutRoot: u, layoutCrossfade: c } = e;
  t.projection = new n(t.latestValues, e["data-framer-portal-id"] ? void 0 : Hr(t.parent)), t.projection.setOptions({
    layoutId: s,
    layout: o,
    alwaysMeasureLayout: !!r || a && kt(a),
    visualElement: t,
    /**
     * TODO: Update options in an effect. This could be tricky as it'll be too late
     * to update by the time layout animations run.
     * We also need to fix this safeToRemove by linking it up to the one returned by usePresence,
     * ensuring it gets called if there's no potential layout animations.
     *
     */
    animationType: typeof o == "string" ? o : "both",
    initialPromotionConfig: i,
    crossfade: c,
    layoutScroll: l,
    layoutRoot: u
  });
}
function Hr(t) {
  if (t)
    return t.options.allowProjection !== !1 ? t.projection : Hr(t.parent);
}
function qe(t, { forwardMotionProps: e = !1 } = {}, n, i) {
  n && sc(n);
  const s = ni(t) ? Ac : _c;
  function o(a, l) {
    let u;
    const c = {
      ...Z(Or),
      ...a,
      layoutId: Mc(a)
    }, { isStatic: h } = c, d = cc(a), m = s(a, h);
    if (!h && En) {
      kc(c, n);
      const g = Oc(c);
      u = g.MeasureLayout, d.visualElement = Rc(t, m, c, i, g.ProjectionNode);
    }
    return U.jsxs(Me.Provider, { value: d, children: [u && d.visualElement ? U.jsx(u, { visualElement: d.visualElement, ...c }) : null, wc(t, a, Cc(m, d.visualElement, l), m, h, e)] });
  }
  o.displayName = `motion.${typeof t == "string" ? t : `create(${t.displayName ?? t.name ?? ""})`}`;
  const r = Qo(o);
  return r[Vc] = t, r;
}
function Mc({ layoutId: t }) {
  const e = Z(Ks).id;
  return e && t !== void 0 ? e + "-" + t : t;
}
function kc(t, e) {
  const n = Z(Lr).strict;
  if (process.env.NODE_ENV !== "production" && e && n) {
    const i = "You have rendered a `motion` component within a `LazyMotion` component. This will break tree shaking. Import and render a `m` component instead.";
    t.ignoreStrict ? Ut(!1, i, "lazy-strict-mode") : dt(!1, i, "lazy-strict-mode");
  }
}
function Oc(t) {
  const { drag: e, layout: n } = Bt;
  if (!e && !n)
    return {};
  const i = { ...e, ...n };
  return {
    MeasureLayout: e != null && e.isEnabled(t) || n != null && n.isEnabled(t) ? i.MeasureLayout : void 0,
    ProjectionNode: i.ProjectionNode
  };
}
function Lc(t, e) {
  if (typeof Proxy > "u")
    return qe;
  const n = /* @__PURE__ */ new Map(), i = (o, r) => qe(o, r, t, e), s = (o, r) => (process.env.NODE_ENV !== "production" && Ln(!1, "motion() is deprecated. Use motion.create() instead."), i(o, r));
  return new Proxy(s, {
    /**
     * Called when `motion` is referenced with a prop: `motion.div`, `motion.input` etc.
     * The prop name is passed through as `key` and we can use that to generate a `motion`
     * DOM component with that name.
     */
    get: (o, r) => r === "create" ? i : (n.has(r) || n.set(r, qe(r, void 0, t, e)), n.get(r))
  });
}
function Xr({ top: t, left: e, right: n, bottom: i }) {
  return {
    x: { min: e, max: n },
    y: { min: t, max: i }
  };
}
function jc({ x: t, y: e }) {
  return { top: e.min, right: t.max, bottom: e.max, left: t.min };
}
function Fc(t, e) {
  if (!e)
    return t;
  const n = e({ x: t.left, y: t.top }), i = e({ x: t.right, y: t.bottom });
  return {
    top: n.y,
    left: n.x,
    bottom: i.y,
    right: i.x
  };
}
function Ze(t) {
  return t === void 0 || t === 1;
}
function xn({ scale: t, scaleX: e, scaleY: n }) {
  return !Ze(t) || !Ze(e) || !Ze(n);
}
function St(t) {
  return xn(t) || zr(t) || t.z || t.rotate || t.rotateX || t.rotateY || t.skewX || t.skewY;
}
function zr(t) {
  return Zi(t.x) || Zi(t.y);
}
function Zi(t) {
  return t && t !== "0%";
}
function Ee(t, e, n) {
  const i = t - n, s = e * i;
  return n + s;
}
function Ji(t, e, n, i, s) {
  return s !== void 0 && (t = Ee(t, s, i)), Ee(t, n, i) + e;
}
function Tn(t, e = 0, n = 1, i, s) {
  t.min = Ji(t.min, e, n, i, s), t.max = Ji(t.max, e, n, i, s);
}
function qr(t, { x: e, y: n }) {
  Tn(t.x, e.translate, e.scale, e.originPoint), Tn(t.y, n.translate, n.scale, n.originPoint);
}
const Qi = 0.999999999999, ts = 1.0000000000001;
function Ic(t, e, n, i = !1) {
  const s = n.length;
  if (!s)
    return;
  e.x = e.y = 1;
  let o, r;
  for (let a = 0; a < s; a++) {
    o = n[a], r = o.projectionDelta;
    const { visualElement: l } = o.options;
    l && l.props.style && l.props.style.display === "contents" || (i && o.options.layoutScroll && o.scroll && o !== o.root && Lt(t, {
      x: -o.scroll.offset.x,
      y: -o.scroll.offset.y
    }), r && (e.x *= r.x.scale, e.y *= r.y.scale, qr(t, r)), i && St(o.latestValues) && Lt(t, o.latestValues));
  }
  e.x < ts && e.x > Qi && (e.x = 1), e.y < ts && e.y > Qi && (e.y = 1);
}
function Ot(t, e) {
  t.min = t.min + e, t.max = t.max + e;
}
function es(t, e, n, i, s = 0.5) {
  const o = L(t.min, t.max, s);
  Tn(t, e, n, o, i);
}
function Lt(t, e) {
  es(t.x, e.x, e.scaleX, e.scale, e.originX), es(t.y, e.y, e.scaleY, e.scale, e.originY);
}
function Zr(t, e) {
  return Xr(Fc(t.getBoundingClientRect(), e));
}
function Bc(t, e, n) {
  const i = Zr(t, n), { scroll: s } = e;
  return s && (Ot(i.x, s.offset.x), Ot(i.y, s.offset.y)), i;
}
const ns = () => ({
  translate: 0,
  scale: 1,
  origin: 0,
  originPoint: 0
}), jt = () => ({
  x: ns(),
  y: ns()
}), is = () => ({ min: 0, max: 0 }), I = () => ({
  x: is(),
  y: is()
}), wn = { current: null }, Jr = { current: !1 };
function Nc() {
  if (Jr.current = !0, !!En)
    if (window.matchMedia) {
      const t = window.matchMedia("(prefers-reduced-motion)"), e = () => wn.current = t.matches;
      t.addEventListener("change", e), e();
    } else
      wn.current = !1;
}
const Uc = /* @__PURE__ */ new WeakMap();
function $c(t, e, n) {
  for (const i in e) {
    const s = e[i], o = n[i];
    if (Y(s))
      t.addValue(i, s);
    else if (Y(o))
      t.addValue(i, It(s, { owner: t }));
    else if (o !== s)
      if (t.hasValue(i)) {
        const r = t.getValue(i);
        r.liveStyle === !0 ? r.jump(s) : r.hasAnimated || r.set(s);
      } else {
        const r = t.getStaticValue(i);
        t.addValue(i, It(r !== void 0 ? r : s, { owner: t }));
      }
  }
  for (const i in n)
    e[i] === void 0 && t.removeValue(i);
  return e;
}
const ss = [
  "AnimationStart",
  "AnimationComplete",
  "Update",
  "BeforeLayoutMeasure",
  "LayoutMeasure",
  "LayoutAnimationStart",
  "LayoutAnimationComplete"
];
class Wc {
  /**
   * This method takes React props and returns found MotionValues. For example, HTML
   * MotionValues will be found within the style prop, whereas for Three.js within attribute arrays.
   *
   * This isn't an abstract method as it needs calling in the constructor, but it is
   * intended to be one.
   */
  scrapeMotionValuesFromProps(e, n, i) {
    return {};
  }
  constructor({ parent: e, props: n, presenceContext: i, reducedMotionConfig: s, blockInitialAnimation: o, visualState: r }, a = {}) {
    this.current = null, this.children = /* @__PURE__ */ new Set(), this.isVariantNode = !1, this.isControllingVariants = !1, this.shouldReduceMotion = null, this.values = /* @__PURE__ */ new Map(), this.KeyframeResolver = Hn, this.features = {}, this.valueSubscriptions = /* @__PURE__ */ new Map(), this.prevMotionValues = {}, this.events = {}, this.propEventSubscriptions = {}, this.notifyUpdate = () => this.notify("Update", this.latestValues), this.render = () => {
      this.current && (this.triggerBuild(), this.renderInstance(this.current, this.renderState, this.props.style, this.projection));
    }, this.renderScheduledAt = 0, this.scheduleRender = () => {
      const d = J.now();
      this.renderScheduledAt < d && (this.renderScheduledAt = d, k.render(this.render, !1, !0));
    };
    const { latestValues: l, renderState: u } = r;
    this.latestValues = l, this.baseTarget = { ...l }, this.initialValues = n.initial ? { ...l } : {}, this.renderState = u, this.parent = e, this.props = n, this.presenceContext = i, this.depth = e ? e.depth + 1 : 0, this.reducedMotionConfig = s, this.options = a, this.blockInitialAnimation = !!o, this.isControllingVariants = Oe(n), this.isVariantNode = Fr(n), this.isVariantNode && (this.variantChildren = /* @__PURE__ */ new Set()), this.manuallyAnimateOnMount = !!(e && e.current);
    const { willChange: c, ...h } = this.scrapeMotionValuesFromProps(n, {}, this);
    for (const d in h) {
      const m = h[d];
      l[d] !== void 0 && Y(m) && m.set(l[d]);
    }
  }
  mount(e) {
    var n;
    this.current = e, Uc.set(e, this), this.projection && !this.projection.instance && this.projection.mount(e), this.parent && this.isVariantNode && !this.isControllingVariants && (this.removeFromVariantTree = this.parent.addVariantChild(this)), this.values.forEach((i, s) => this.bindToMotionValue(s, i)), Jr.current || Nc(), this.shouldReduceMotion = this.reducedMotionConfig === "never" ? !1 : this.reducedMotionConfig === "always" ? !0 : wn.current, process.env.NODE_ENV !== "production" && Ln(this.shouldReduceMotion !== !0, "You have Reduced Motion enabled on your device. Animations may not appear as expected.", "reduced-motion-disabled"), (n = this.parent) == null || n.addChild(this), this.update(this.props, this.presenceContext);
  }
  unmount() {
    var e;
    this.projection && this.projection.unmount(), vt(this.notifyUpdate), vt(this.render), this.valueSubscriptions.forEach((n) => n()), this.valueSubscriptions.clear(), this.removeFromVariantTree && this.removeFromVariantTree(), (e = this.parent) == null || e.removeChild(this);
    for (const n in this.events)
      this.events[n].clear();
    for (const n in this.features) {
      const i = this.features[n];
      i && (i.unmount(), i.isMounted = !1);
    }
    this.current = null;
  }
  addChild(e) {
    this.children.add(e), this.enteringChildren ?? (this.enteringChildren = /* @__PURE__ */ new Set()), this.enteringChildren.add(e);
  }
  removeChild(e) {
    this.children.delete(e), this.enteringChildren && this.enteringChildren.delete(e);
  }
  bindToMotionValue(e, n) {
    this.valueSubscriptions.has(e) && this.valueSubscriptions.get(e)();
    const i = Kt.has(e);
    i && this.onBindTransform && this.onBindTransform();
    const s = n.on("change", (r) => {
      this.latestValues[e] = r, this.props.onUpdate && k.preRender(this.notifyUpdate), i && this.projection && (this.projection.isTransformDirty = !0), this.scheduleRender();
    });
    let o;
    window.MotionCheckAppearSync && (o = window.MotionCheckAppearSync(this, e, n)), this.valueSubscriptions.set(e, () => {
      s(), o && o(), n.owner && n.stop();
    });
  }
  sortNodePosition(e) {
    return !this.current || !this.sortInstanceNodePosition || this.type !== e.type ? 0 : this.sortInstanceNodePosition(this.current, e.current);
  }
  updateFeatures() {
    let e = "animation";
    for (e in Bt) {
      const n = Bt[e];
      if (!n)
        continue;
      const { isEnabled: i, Feature: s } = n;
      if (!this.features[e] && s && i(this.props) && (this.features[e] = new s(this)), this.features[e]) {
        const o = this.features[e];
        o.isMounted ? o.update() : (o.mount(), o.isMounted = !0);
      }
    }
  }
  triggerBuild() {
    this.build(this.renderState, this.latestValues, this.props);
  }
  /**
   * Measure the current viewport box with or without transforms.
   * Only measures axis-aligned boxes, rotate and skew must be manually
   * removed with a re-render to work.
   */
  measureViewportBox() {
    return this.current ? this.measureInstanceViewportBox(this.current, this.props) : I();
  }
  getStaticValue(e) {
    return this.latestValues[e];
  }
  setStaticValue(e, n) {
    this.latestValues[e] = n;
  }
  /**
   * Update the provided props. Ensure any newly-added motion values are
   * added to our map, old ones removed, and listeners updated.
   */
  update(e, n) {
    (e.transformTemplate || this.props.transformTemplate) && this.scheduleRender(), this.prevProps = this.props, this.props = e, this.prevPresenceContext = this.presenceContext, this.presenceContext = n;
    for (let i = 0; i < ss.length; i++) {
      const s = ss[i];
      this.propEventSubscriptions[s] && (this.propEventSubscriptions[s](), delete this.propEventSubscriptions[s]);
      const o = "on" + s, r = e[o];
      r && (this.propEventSubscriptions[s] = this.on(s, r));
    }
    this.prevMotionValues = $c(this, this.scrapeMotionValuesFromProps(e, this.prevProps, this), this.prevMotionValues), this.handleChildMotionValue && this.handleChildMotionValue();
  }
  getProps() {
    return this.props;
  }
  /**
   * Returns the variant definition with a given name.
   */
  getVariant(e) {
    return this.props.variants ? this.props.variants[e] : void 0;
  }
  /**
   * Returns the defined default transition on this component.
   */
  getDefaultTransition() {
    return this.props.transition;
  }
  getTransformPagePoint() {
    return this.props.transformPagePoint;
  }
  getClosestVariantNode() {
    return this.isVariantNode ? this : this.parent ? this.parent.getClosestVariantNode() : void 0;
  }
  /**
   * Add a child visual element to our set of children.
   */
  addVariantChild(e) {
    const n = this.getClosestVariantNode();
    if (n)
      return n.variantChildren && n.variantChildren.add(e), () => n.variantChildren.delete(e);
  }
  /**
   * Add a motion value and bind it to this visual element.
   */
  addValue(e, n) {
    const i = this.values.get(e);
    n !== i && (i && this.removeValue(e), this.bindToMotionValue(e, n), this.values.set(e, n), this.latestValues[e] = n.get());
  }
  /**
   * Remove a motion value and unbind any active subscriptions.
   */
  removeValue(e) {
    this.values.delete(e);
    const n = this.valueSubscriptions.get(e);
    n && (n(), this.valueSubscriptions.delete(e)), delete this.latestValues[e], this.removeValueFromRenderState(e, this.renderState);
  }
  /**
   * Check whether we have a motion value for this key
   */
  hasValue(e) {
    return this.values.has(e);
  }
  getValue(e, n) {
    if (this.props.values && this.props.values[e])
      return this.props.values[e];
    let i = this.values.get(e);
    return i === void 0 && n !== void 0 && (i = It(n === null ? void 0 : n, { owner: this }), this.addValue(e, i)), i;
  }
  /**
   * If we're trying to animate to a previously unencountered value,
   * we need to check for it in our state and as a last resort read it
   * directly from the instance (which might have performance implications).
   */
  readValue(e, n) {
    let i = this.latestValues[e] !== void 0 || !this.current ? this.latestValues[e] : this.getBaseTargetFromProps(this.props, e) ?? this.readValueFromInstance(this.current, e, this.options);
    return i != null && (typeof i == "string" && (Ys(i) || Hs(i)) ? i = parseFloat(i) : !nc(i) && bt.test(n) && (i = Cr(e, n)), this.setBaseTarget(e, Y(i) ? i.get() : i)), Y(i) ? i.get() : i;
  }
  /**
   * Set the base target to later animate back to. This is currently
   * only hydrated on creation and when we first read a value.
   */
  setBaseTarget(e, n) {
    this.baseTarget[e] = n;
  }
  /**
   * Find the base target for a value thats been removed from all animation
   * props.
   */
  getBaseTarget(e) {
    var o;
    const { initial: n } = this.props;
    let i;
    if (typeof n == "string" || typeof n == "object") {
      const r = ii(this.props, n, (o = this.presenceContext) == null ? void 0 : o.custom);
      r && (i = r[e]);
    }
    if (n && i !== void 0)
      return i;
    const s = this.getBaseTargetFromProps(this.props, e);
    return s !== void 0 && !Y(s) ? s : this.initialValues[e] !== void 0 && i === void 0 ? void 0 : this.baseTarget[e];
  }
  on(e, n) {
    return this.events[e] || (this.events[e] = new On()), this.events[e].add(n);
  }
  notify(e, ...n) {
    this.events[e] && this.events[e].notify(...n);
  }
  scheduleRenderMicrotask() {
    qn.render(this.render);
  }
}
class Qr extends Wc {
  constructor() {
    super(...arguments), this.KeyframeResolver = Wl;
  }
  sortInstanceNodePosition(e, n) {
    return e.compareDocumentPosition(n) & 2 ? 1 : -1;
  }
  getBaseTargetFromProps(e, n) {
    return e.style ? e.style[n] : void 0;
  }
  removeValueFromRenderState(e, { vars: n, style: i }) {
    delete n[e], delete i[e];
  }
  handleChildMotionValue() {
    this.childSubscription && (this.childSubscription(), delete this.childSubscription);
    const { children: e } = this.props;
    Y(e) && (this.childSubscription = e.on("change", (n) => {
      this.current && (this.current.textContent = `${n}`);
    }));
  }
}
function to(t, { style: e, vars: n }, i, s) {
  const o = t.style;
  let r;
  for (r in e)
    o[r] = e[r];
  s == null || s.applyProjectionStyles(o, i);
  for (r in n)
    o.setProperty(r, n[r]);
}
function Kc(t) {
  return window.getComputedStyle(t);
}
class Yc extends Qr {
  constructor() {
    super(...arguments), this.type = "html", this.renderInstance = to;
  }
  readValueFromInstance(e, n) {
    var i;
    if (Kt.has(n))
      return (i = this.projection) != null && i.isProjecting ? dn(n) : al(e, n);
    {
      const s = Kc(e), o = (In(n) ? s.getPropertyValue(n) : s[n]) || 0;
      return typeof o == "string" ? o.trim() : o;
    }
  }
  measureInstanceViewportBox(e, { transformPagePoint: n }) {
    return Zr(e, n);
  }
  build(e, n, i) {
    ti(e, n, i.transformTemplate);
  }
  scrapeMotionValuesFromProps(e, n, i) {
    return si(e, n, i);
  }
}
const eo = /* @__PURE__ */ new Set([
  "baseFrequency",
  "diffuseConstant",
  "kernelMatrix",
  "kernelUnitLength",
  "keySplines",
  "keyTimes",
  "limitingConeAngle",
  "markerHeight",
  "markerWidth",
  "numOctaves",
  "targetX",
  "targetY",
  "surfaceScale",
  "specularConstant",
  "specularExponent",
  "stdDeviation",
  "tableValues",
  "viewBox",
  "gradientTransform",
  "pathLength",
  "startOffset",
  "textLength",
  "lengthAdjust"
]);
function Gc(t, e, n, i) {
  to(t, e, void 0, i);
  for (const s in e.attrs)
    t.setAttribute(eo.has(s) ? s : ri(s), e.attrs[s]);
}
class Hc extends Qr {
  constructor() {
    super(...arguments), this.type = "svg", this.isSVGTag = !1, this.measureInstanceViewportBox = I;
  }
  getBaseTargetFromProps(e, n) {
    return e[n];
  }
  readValueFromInstance(e, n) {
    if (Kt.has(n)) {
      const i = Vr(n);
      return i && i.default || 0;
    }
    return n = eo.has(n) ? n : ri(n), e.getAttribute(n);
  }
  scrapeMotionValuesFromProps(e, n, i) {
    return Kr(e, n, i);
  }
  build(e, n, i) {
    Nr(e, n, this.isSVGTag, i.transformTemplate, i.style);
  }
  renderInstance(e, n, i, s) {
    Gc(e, n, i, s);
  }
  mount(e) {
    this.isSVGTag = $r(e.tagName), super.mount(e);
  }
}
const Xc = (t, e) => ni(t) ? new Hc(e) : new Yc(e, {
  allowProjection: t !== $s
});
function Ft(t, e, n) {
  const i = t.getProps();
  return ii(i, e, n !== void 0 ? n : i.custom, t);
}
const Sn = (t) => Array.isArray(t);
function zc(t, e, n) {
  t.hasValue(e) ? t.getValue(e).set(n) : t.addValue(e, It(n));
}
function qc(t) {
  return Sn(t) ? t[t.length - 1] || 0 : t;
}
function Zc(t, e) {
  const n = Ft(t, e);
  let { transitionEnd: i = {}, transition: s = {}, ...o } = n || {};
  o = { ...o, ...i };
  for (const r in o) {
    const a = qc(o[r]);
    zc(t, r, a);
  }
}
function Jc(t) {
  return !!(Y(t) && t.add);
}
function Pn(t, e) {
  const n = t.getValue("willChange");
  if (Jc(n))
    return n.add(e);
  if (!n && mt.WillChange) {
    const i = new mt.WillChange("auto");
    t.addValue("willChange", i), i.add(e);
  }
}
function no(t) {
  return t.props[Yr];
}
const Qc = (t) => t !== null;
function tu(t, { repeat: e, repeatType: n = "loop" }, i) {
  const s = t.filter(Qc), o = e && n !== "loop" && e % 2 === 1 ? 0 : s.length - 1;
  return s[o];
}
const eu = {
  type: "spring",
  stiffness: 500,
  damping: 25,
  restSpeed: 10
}, nu = (t) => ({
  type: "spring",
  stiffness: 550,
  damping: t === 0 ? 2 * Math.sqrt(550) : 30,
  restSpeed: 10
}), iu = {
  type: "keyframes",
  duration: 0.8
}, su = {
  type: "keyframes",
  ease: [0.25, 0.1, 0.35, 1],
  duration: 0.3
}, ru = (t, { keyframes: e }) => e.length > 2 ? iu : Kt.has(t) ? t.startsWith("scale") ? nu(e[1]) : eu : su;
function ou({ when: t, delay: e, delayChildren: n, staggerChildren: i, staggerDirection: s, repeat: o, repeatType: r, repeatDelay: a, from: l, elapsed: u, ...c }) {
  return !!Object.keys(c).length;
}
const oi = (t, e, n, i = {}, s, o) => (r) => {
  const a = Xn(i, t) || {}, l = a.delay || i.delay || 0;
  let { elapsed: u = 0 } = i;
  u = u - /* @__PURE__ */ ot(l);
  const c = {
    keyframes: Array.isArray(n) ? n : [null, n],
    ease: "easeOut",
    velocity: e.getVelocity(),
    ...a,
    delay: -u,
    onUpdate: (d) => {
      e.set(d), a.onUpdate && a.onUpdate(d);
    },
    onComplete: () => {
      r(), a.onComplete && a.onComplete();
    },
    name: t,
    motionValue: e,
    element: o ? void 0 : s
  };
  ou(a) || Object.assign(c, ru(t, c)), c.duration && (c.duration = /* @__PURE__ */ ot(c.duration)), c.repeatDelay && (c.repeatDelay = /* @__PURE__ */ ot(c.repeatDelay)), c.from !== void 0 && (c.keyframes[0] = c.from);
  let h = !1;
  if ((c.type === !1 || c.duration === 0 && !c.repeatDelay) && (vn(c), c.delay === 0 && (h = !0)), (mt.instantAnimations || mt.skipAnimations) && (h = !0, vn(c), c.delay = 0), c.allowFlatten = !a.type && !a.ease, h && !o && e.get() !== void 0) {
    const d = tu(c.keyframes, a);
    if (d !== void 0) {
      k.update(() => {
        c.onUpdate(d), c.onComplete();
      });
      return;
    }
  }
  return a.isSync ? new Gn(c) : new Rl(c);
};
function au({ protectedKeys: t, needsAnimating: e }, n) {
  const i = t.hasOwnProperty(n) && e[n] !== !0;
  return e[n] = !1, i;
}
function io(t, e, { delay: n = 0, transitionOverride: i, type: s } = {}) {
  let { transition: o = t.getDefaultTransition(), transitionEnd: r, ...a } = e;
  i && (o = i);
  const l = [], u = s && t.animationState && t.animationState.getState()[s];
  for (const c in a) {
    const h = t.getValue(c, t.latestValues[c] ?? null), d = a[c];
    if (d === void 0 || u && au(u, c))
      continue;
    const m = {
      delay: n,
      ...Xn(o || {}, c)
    }, g = h.get();
    if (g !== void 0 && !h.isAnimating && !Array.isArray(d) && d === g && !m.velocity)
      continue;
    let v = !1;
    if (window.MotionHandoffAnimation) {
      const y = no(t);
      if (y) {
        const b = window.MotionHandoffAnimation(y, c, k);
        b !== null && (m.startTime = b, v = !0);
      }
    }
    Pn(t, c), h.start(oi(c, h, d, t.shouldReduceMotion && Pr.has(c) ? { type: !1 } : m, t, v));
    const T = h.animation;
    T && l.push(T);
  }
  return r && Promise.all(l).then(() => {
    k.update(() => {
      r && Zc(t, r);
    });
  }), l;
}
function so(t, e, n, i = 0, s = 1) {
  const o = Array.from(t).sort((u, c) => u.sortNodePosition(c)).indexOf(e), r = t.size, a = (r - 1) * i;
  return typeof n == "function" ? n(o, r) : s === 1 ? o * i : a - o * i;
}
function _n(t, e, n = {}) {
  var l;
  const i = Ft(t, e, n.type === "exit" ? (l = t.presenceContext) == null ? void 0 : l.custom : void 0);
  let { transition: s = t.getDefaultTransition() || {} } = i || {};
  n.transitionOverride && (s = n.transitionOverride);
  const o = i ? () => Promise.all(io(t, i, n)) : () => Promise.resolve(), r = t.variantChildren && t.variantChildren.size ? (u = 0) => {
    const { delayChildren: c = 0, staggerChildren: h, staggerDirection: d } = s;
    return lu(t, e, u, c, h, d, n);
  } : () => Promise.resolve(), { when: a } = s;
  if (a) {
    const [u, c] = a === "beforeChildren" ? [o, r] : [r, o];
    return u().then(() => c());
  } else
    return Promise.all([o(), r(n.delay)]);
}
function lu(t, e, n = 0, i = 0, s = 0, o = 1, r) {
  const a = [];
  for (const l of t.variantChildren)
    l.notify("AnimationStart", e), a.push(_n(l, e, {
      ...r,
      delay: n + (typeof i == "function" ? 0 : i) + so(t.variantChildren, l, i, s, o)
    }).then(() => l.notify("AnimationComplete", e)));
  return Promise.all(a);
}
function cu(t, e, n = {}) {
  t.notify("AnimationStart", e);
  let i;
  if (Array.isArray(e)) {
    const s = e.map((o) => _n(t, o, n));
    i = Promise.all(s);
  } else if (typeof e == "string")
    i = _n(t, e, n);
  else {
    const s = typeof e == "function" ? Ft(t, e, n.custom) : e;
    i = Promise.all(io(t, s, n));
  }
  return i.then(() => {
    t.notify("AnimationComplete", e);
  });
}
function ro(t, e) {
  if (!Array.isArray(e))
    return !1;
  const n = e.length;
  if (n !== t.length)
    return !1;
  for (let i = 0; i < n; i++)
    if (e[i] !== t[i])
      return !1;
  return !0;
}
const uu = Qn.length;
function oo(t) {
  if (!t)
    return;
  if (!t.isControllingVariants) {
    const n = t.parent ? oo(t.parent) || {} : {};
    return t.props.initial !== void 0 && (n.initial = t.props.initial), n;
  }
  const e = {};
  for (let n = 0; n < uu; n++) {
    const i = Qn[n], s = t.props[i];
    (se(s) || s === !1) && (e[i] = s);
  }
  return e;
}
const fu = [...Jn].reverse(), hu = Jn.length;
function du(t) {
  return (e) => Promise.all(e.map(({ animation: n, options: i }) => cu(t, n, i)));
}
function mu(t) {
  let e = du(t), n = rs(), i = !0;
  const s = (l) => (u, c) => {
    var d;
    const h = Ft(t, c, l === "exit" ? (d = t.presenceContext) == null ? void 0 : d.custom : void 0);
    if (h) {
      const { transition: m, transitionEnd: g, ...v } = h;
      u = { ...u, ...v, ...g };
    }
    return u;
  };
  function o(l) {
    e = l(t);
  }
  function r(l) {
    const { props: u } = t, c = oo(t.parent) || {}, h = [], d = /* @__PURE__ */ new Set();
    let m = {}, g = 1 / 0;
    for (let T = 0; T < hu; T++) {
      const y = fu[T], b = n[y], w = u[y] !== void 0 ? u[y] : c[y], C = se(w), S = y === l ? b.isActive : null;
      S === !1 && (g = T);
      let D = w === c[y] && w !== u[y] && C;
      if (D && i && t.manuallyAnimateOnMount && (D = !1), b.protectedKeys = { ...m }, // If it isn't active and hasn't *just* been set as inactive
      !b.isActive && S === null || // If we didn't and don't have any defined prop for this animation type
      !w && !b.prevProp || // Or if the prop doesn't define an animation
      ke(w) || typeof w == "boolean")
        continue;
      const j = pu(b.prevProp, w);
      let A = j || // If we're making this variant active, we want to always make it active
      y === l && b.isActive && !D && C || // If we removed a higher-priority variant (i is in reverse order)
      T > g && C, W = !1;
      const z = Array.isArray(w) ? w : [w];
      let pt = z.reduce(s(y), {});
      S === !1 && (pt = {});
      const { prevResolvedValues: Yt = {} } = b, at = {
        ...Yt,
        ...pt
      }, lt = (B) => {
        A = !0, d.has(B) && (W = !0, d.delete(B)), b.needsAnimating[B] = !0;
        const G = t.getValue(B);
        G && (G.liveStyle = !1);
      };
      for (const B in at) {
        const G = pt[B], ct = Yt[B];
        if (m.hasOwnProperty(B))
          continue;
        let ft = !1;
        Sn(G) && Sn(ct) ? ft = !ro(G, ct) : ft = G !== ct, ft ? G != null ? lt(B) : d.add(B) : G !== void 0 && d.has(B) ? lt(B) : b.protectedKeys[B] = !0;
      }
      b.prevProp = w, b.prevResolvedValues = pt, b.isActive && (m = { ...m, ...pt }), i && t.blockInitialAnimation && (A = !1);
      const gt = D && j;
      A && (!gt || W) && h.push(...z.map((B) => {
        const G = { type: y };
        if (typeof B == "string" && i && !gt && t.manuallyAnimateOnMount && t.parent) {
          const { parent: ct } = t, ft = Ft(ct, B);
          if (ct.enteringChildren && ft) {
            const { delayChildren: fe } = ft.transition || {};
            G.delay = so(ct.enteringChildren, t, fe);
          }
        }
        return {
          animation: B,
          options: G
        };
      }));
    }
    if (d.size) {
      const T = {};
      if (typeof u.initial != "boolean") {
        const y = Ft(t, Array.isArray(u.initial) ? u.initial[0] : u.initial);
        y && y.transition && (T.transition = y.transition);
      }
      d.forEach((y) => {
        const b = t.getBaseTarget(y), w = t.getValue(y);
        w && (w.liveStyle = !0), T[y] = b ?? null;
      }), h.push({ animation: T });
    }
    let v = !!h.length;
    return i && (u.initial === !1 || u.initial === u.animate) && !t.manuallyAnimateOnMount && (v = !1), i = !1, v ? e(h) : Promise.resolve();
  }
  function a(l, u) {
    var h;
    if (n[l].isActive === u)
      return Promise.resolve();
    (h = t.variantChildren) == null || h.forEach((d) => {
      var m;
      return (m = d.animationState) == null ? void 0 : m.setActive(l, u);
    }), n[l].isActive = u;
    const c = r(l);
    for (const d in n)
      n[d].protectedKeys = {};
    return c;
  }
  return {
    animateChanges: r,
    setActive: a,
    setAnimateFunction: o,
    getState: () => n,
    reset: () => {
      n = rs();
    }
  };
}
function pu(t, e) {
  return typeof e == "string" ? e !== t : Array.isArray(e) ? !ro(e, t) : !1;
}
function wt(t = !1) {
  return {
    isActive: t,
    protectedKeys: {},
    needsAnimating: {},
    prevResolvedValues: {}
  };
}
function rs() {
  return {
    animate: wt(!0),
    whileInView: wt(),
    whileHover: wt(),
    whileTap: wt(),
    whileDrag: wt(),
    whileFocus: wt(),
    exit: wt()
  };
}
class xt {
  constructor(e) {
    this.isMounted = !1, this.node = e;
  }
  update() {
  }
}
class gu extends xt {
  /**
   * We dynamically generate the AnimationState manager as it contains a reference
   * to the underlying animation library. We only want to load that if we load this,
   * so people can optionally code split it out using the `m` component.
   */
  constructor(e) {
    super(e), e.animationState || (e.animationState = mu(e));
  }
  updateAnimationControlsSubscription() {
    const { animate: e } = this.node.getProps();
    ke(e) && (this.unmountControls = e.subscribe(this.node));
  }
  /**
   * Subscribe any provided AnimationControls to the component's VisualElement
   */
  mount() {
    this.updateAnimationControlsSubscription();
  }
  update() {
    const { animate: e } = this.node.getProps(), { animate: n } = this.node.prevProps || {};
    e !== n && this.updateAnimationControlsSubscription();
  }
  unmount() {
    var e;
    this.node.animationState.reset(), (e = this.unmountControls) == null || e.call(this);
  }
}
let yu = 0;
class vu extends xt {
  constructor() {
    super(...arguments), this.id = yu++;
  }
  update() {
    if (!this.node.presenceContext)
      return;
    const { isPresent: e, onExitComplete: n } = this.node.presenceContext, { isPresent: i } = this.node.prevPresenceContext || {};
    if (!this.node.animationState || e === i)
      return;
    const s = this.node.animationState.setActive("exit", !e);
    n && !e && s.then(() => {
      n(this.id);
    });
  }
  mount() {
    const { register: e, onExitComplete: n } = this.node.presenceContext || {};
    n && n(this.id), e && (this.unmount = e(this.id));
  }
  unmount() {
  }
}
const bu = {
  animation: {
    Feature: gu
  },
  exit: {
    Feature: vu
  }
};
function oe(t, e, n, i = { passive: !0 }) {
  return t.addEventListener(e, n, i), () => t.removeEventListener(e, n);
}
function ue(t) {
  return {
    point: {
      x: t.pageX,
      y: t.pageY
    }
  };
}
const xu = (t) => (e) => Zn(e) && t(e, ue(e));
function Jt(t, e, n, i) {
  return oe(t, e, xu(n), i);
}
const ao = 1e-4, Tu = 1 - ao, wu = 1 + ao, lo = 0.01, Su = 0 - lo, Pu = 0 + lo;
function X(t) {
  return t.max - t.min;
}
function _u(t, e, n) {
  return Math.abs(t - e) <= n;
}
function os(t, e, n, i = 0.5) {
  t.origin = i, t.originPoint = L(e.min, e.max, t.origin), t.scale = X(n) / X(e), t.translate = L(n.min, n.max, t.origin) - t.originPoint, (t.scale >= Tu && t.scale <= wu || isNaN(t.scale)) && (t.scale = 1), (t.translate >= Su && t.translate <= Pu || isNaN(t.translate)) && (t.translate = 0);
}
function Qt(t, e, n, i) {
  os(t.x, e.x, n.x, i ? i.originX : void 0), os(t.y, e.y, n.y, i ? i.originY : void 0);
}
function as(t, e, n) {
  t.min = n.min + e.min, t.max = t.min + X(e);
}
function Au(t, e, n) {
  as(t.x, e.x, n.x), as(t.y, e.y, n.y);
}
function ls(t, e, n) {
  t.min = e.min - n.min, t.max = t.min + X(e);
}
function te(t, e, n) {
  ls(t.x, e.x, n.x), ls(t.y, e.y, n.y);
}
function et(t) {
  return [t("x"), t("y")];
}
const co = ({ current: t }) => t ? t.ownerDocument.defaultView : null, cs = (t, e) => Math.abs(t - e);
function Vu(t, e) {
  const n = cs(t.x, e.x), i = cs(t.y, e.y);
  return Math.sqrt(n ** 2 + i ** 2);
}
class uo {
  constructor(e, n, { transformPagePoint: i, contextWindow: s = window, dragSnapToOrigin: o = !1, distanceThreshold: r = 3 } = {}) {
    if (this.startEvent = null, this.lastMoveEvent = null, this.lastMoveEventInfo = null, this.handlers = {}, this.contextWindow = window, this.updatePoint = () => {
      if (!(this.lastMoveEvent && this.lastMoveEventInfo))
        return;
      const d = Qe(this.lastMoveEventInfo, this.history), m = this.startEvent !== null, g = Vu(d.offset, { x: 0, y: 0 }) >= this.distanceThreshold;
      if (!m && !g)
        return;
      const { point: v } = d, { timestamp: T } = K;
      this.history.push({ ...v, timestamp: T });
      const { onStart: y, onMove: b } = this.handlers;
      m || (y && y(this.lastMoveEvent, d), this.startEvent = this.lastMoveEvent), b && b(this.lastMoveEvent, d);
    }, this.handlePointerMove = (d, m) => {
      this.lastMoveEvent = d, this.lastMoveEventInfo = Je(m, this.transformPagePoint), k.update(this.updatePoint, !0);
    }, this.handlePointerUp = (d, m) => {
      this.end();
      const { onEnd: g, onSessionEnd: v, resumeAnimation: T } = this.handlers;
      if (this.dragSnapToOrigin && T && T(), !(this.lastMoveEvent && this.lastMoveEventInfo))
        return;
      const y = Qe(d.type === "pointercancel" ? this.lastMoveEventInfo : Je(m, this.transformPagePoint), this.history);
      this.startEvent && g && g(d, y), v && v(d, y);
    }, !Zn(e))
      return;
    this.dragSnapToOrigin = o, this.handlers = n, this.transformPagePoint = i, this.distanceThreshold = r, this.contextWindow = s || window;
    const a = ue(e), l = Je(a, this.transformPagePoint), { point: u } = l, { timestamp: c } = K;
    this.history = [{ ...u, timestamp: c }];
    const { onSessionStart: h } = n;
    h && h(e, Qe(l, this.history)), this.removeListeners = ae(Jt(this.contextWindow, "pointermove", this.handlePointerMove), Jt(this.contextWindow, "pointerup", this.handlePointerUp), Jt(this.contextWindow, "pointercancel", this.handlePointerUp));
  }
  updateHandlers(e) {
    this.handlers = e;
  }
  end() {
    this.removeListeners && this.removeListeners(), vt(this.updatePoint);
  }
}
function Je(t, e) {
  return e ? { point: e(t.point) } : t;
}
function us(t, e) {
  return { x: t.x - e.x, y: t.y - e.y };
}
function Qe({ point: t }, e) {
  return {
    point: t,
    delta: us(t, fo(e)),
    offset: us(t, Cu(e)),
    velocity: Eu(e, 0.1)
  };
}
function Cu(t) {
  return t[0];
}
function fo(t) {
  return t[t.length - 1];
}
function Eu(t, e) {
  if (t.length < 2)
    return { x: 0, y: 0 };
  let n = t.length - 1, i = null;
  const s = fo(t);
  for (; n >= 0 && (i = t[n], !(s.timestamp - i.timestamp > /* @__PURE__ */ ot(e))); )
    n--;
  if (!i)
    return { x: 0, y: 0 };
  const o = /* @__PURE__ */ nt(s.timestamp - i.timestamp);
  if (o === 0)
    return { x: 0, y: 0 };
  const r = {
    x: (s.x - i.x) / o,
    y: (s.y - i.y) / o
  };
  return r.x === 1 / 0 && (r.x = 0), r.y === 1 / 0 && (r.y = 0), r;
}
function Ru(t, { min: e, max: n }, i) {
  return e !== void 0 && t < e ? t = i ? L(e, t, i.min) : Math.max(t, e) : n !== void 0 && t > n && (t = i ? L(n, t, i.max) : Math.min(t, n)), t;
}
function fs(t, e, n) {
  return {
    min: e !== void 0 ? t.min + e : void 0,
    max: n !== void 0 ? t.max + n - (t.max - t.min) : void 0
  };
}
function Du(t, { top: e, left: n, bottom: i, right: s }) {
  return {
    x: fs(t.x, n, s),
    y: fs(t.y, e, i)
  };
}
function hs(t, e) {
  let n = e.min - t.min, i = e.max - t.max;
  return e.max - e.min < t.max - t.min && ([n, i] = [i, n]), { min: n, max: i };
}
function Mu(t, e) {
  return {
    x: hs(t.x, e.x),
    y: hs(t.y, e.y)
  };
}
function ku(t, e) {
  let n = 0.5;
  const i = X(t), s = X(e);
  return s > i ? n = /* @__PURE__ */ ee(e.min, e.max - i, t.min) : i > s && (n = /* @__PURE__ */ ee(t.min, t.max - s, e.min)), ht(0, 1, n);
}
function Ou(t, e) {
  const n = {};
  return e.min !== void 0 && (n.min = e.min - t.min), e.max !== void 0 && (n.max = e.max - t.min), n;
}
const An = 0.35;
function Lu(t = An) {
  return t === !1 ? t = 0 : t === !0 && (t = An), {
    x: ds(t, "left", "right"),
    y: ds(t, "top", "bottom")
  };
}
function ds(t, e, n) {
  return {
    min: ms(t, e),
    max: ms(t, n)
  };
}
function ms(t, e) {
  return typeof t == "number" ? t : t[e] || 0;
}
const ju = /* @__PURE__ */ new WeakMap();
class Fu {
  constructor(e) {
    this.openDragLock = null, this.isDragging = !1, this.currentDirection = null, this.originPoint = { x: 0, y: 0 }, this.constraints = !1, this.hasMutatedConstraints = !1, this.elastic = I(), this.latestPointerEvent = null, this.latestPanInfo = null, this.visualElement = e;
  }
  start(e, { snapToCursor: n = !1, distanceThreshold: i } = {}) {
    const { presenceContext: s } = this.visualElement;
    if (s && s.isPresent === !1)
      return;
    const o = (h) => {
      const { dragSnapToOrigin: d } = this.getProps();
      d ? this.pauseAnimation() : this.stopAnimation(), n && this.snapToCursor(ue(h).point);
    }, r = (h, d) => {
      const { drag: m, dragPropagation: g, onDragStart: v } = this.getProps();
      if (m && !g && (this.openDragLock && this.openDragLock(), this.openDragLock = Xl(m), !this.openDragLock))
        return;
      this.latestPointerEvent = h, this.latestPanInfo = d, this.isDragging = !0, this.currentDirection = null, this.resolveConstraints(), this.visualElement.projection && (this.visualElement.projection.isAnimationBlocked = !0, this.visualElement.projection.target = void 0), et((y) => {
        let b = this.getAxisMotionValue(y).get() || 0;
        if (ut.test(b)) {
          const { projection: w } = this.visualElement;
          if (w && w.layout) {
            const C = w.layout.layoutBox[y];
            C && (b = X(C) * (parseFloat(b) / 100));
          }
        }
        this.originPoint[y] = b;
      }), v && k.postRender(() => v(h, d)), Pn(this.visualElement, "transform");
      const { animationState: T } = this.visualElement;
      T && T.setActive("whileDrag", !0);
    }, a = (h, d) => {
      this.latestPointerEvent = h, this.latestPanInfo = d;
      const { dragPropagation: m, dragDirectionLock: g, onDirectionLock: v, onDrag: T } = this.getProps();
      if (!m && !this.openDragLock)
        return;
      const { offset: y } = d;
      if (g && this.currentDirection === null) {
        this.currentDirection = Iu(y), this.currentDirection !== null && v && v(this.currentDirection);
        return;
      }
      this.updateAxis("x", d.point, y), this.updateAxis("y", d.point, y), this.visualElement.render(), T && T(h, d);
    }, l = (h, d) => {
      this.latestPointerEvent = h, this.latestPanInfo = d, this.stop(h, d), this.latestPointerEvent = null, this.latestPanInfo = null;
    }, u = () => et((h) => {
      var d;
      return this.getAnimationState(h) === "paused" && ((d = this.getAxisMotionValue(h).animation) == null ? void 0 : d.play());
    }), { dragSnapToOrigin: c } = this.getProps();
    this.panSession = new uo(e, {
      onSessionStart: o,
      onStart: r,
      onMove: a,
      onSessionEnd: l,
      resumeAnimation: u
    }, {
      transformPagePoint: this.visualElement.getTransformPagePoint(),
      dragSnapToOrigin: c,
      distanceThreshold: i,
      contextWindow: co(this.visualElement)
    });
  }
  /**
   * @internal
   */
  stop(e, n) {
    const i = e || this.latestPointerEvent, s = n || this.latestPanInfo, o = this.isDragging;
    if (this.cancel(), !o || !s || !i)
      return;
    const { velocity: r } = s;
    this.startAnimation(r);
    const { onDragEnd: a } = this.getProps();
    a && k.postRender(() => a(i, s));
  }
  /**
   * @internal
   */
  cancel() {
    this.isDragging = !1;
    const { projection: e, animationState: n } = this.visualElement;
    e && (e.isAnimationBlocked = !1), this.panSession && this.panSession.end(), this.panSession = void 0;
    const { dragPropagation: i } = this.getProps();
    !i && this.openDragLock && (this.openDragLock(), this.openDragLock = null), n && n.setActive("whileDrag", !1);
  }
  updateAxis(e, n, i) {
    const { drag: s } = this.getProps();
    if (!i || !be(e, s, this.currentDirection))
      return;
    const o = this.getAxisMotionValue(e);
    let r = this.originPoint[e] + i[e];
    this.constraints && this.constraints[e] && (r = Ru(r, this.constraints[e], this.elastic[e])), o.set(r);
  }
  resolveConstraints() {
    var o;
    const { dragConstraints: e, dragElastic: n } = this.getProps(), i = this.visualElement.projection && !this.visualElement.projection.layout ? this.visualElement.projection.measure(!1) : (o = this.visualElement.projection) == null ? void 0 : o.layout, s = this.constraints;
    e && kt(e) ? this.constraints || (this.constraints = this.resolveRefConstraints()) : e && i ? this.constraints = Du(i.layoutBox, e) : this.constraints = !1, this.elastic = Lu(n), s !== this.constraints && i && this.constraints && !this.hasMutatedConstraints && et((r) => {
      this.constraints !== !1 && this.getAxisMotionValue(r) && (this.constraints[r] = Ou(i.layoutBox[r], this.constraints[r]));
    });
  }
  resolveRefConstraints() {
    const { dragConstraints: e, onMeasureDragConstraints: n } = this.getProps();
    if (!e || !kt(e))
      return !1;
    const i = e.current;
    dt(i !== null, "If `dragConstraints` is set as a React ref, that ref must be passed to another component's `ref` prop.", "drag-constraints-ref");
    const { projection: s } = this.visualElement;
    if (!s || !s.layout)
      return !1;
    const o = Bc(i, s.root, this.visualElement.getTransformPagePoint());
    let r = Mu(s.layout.layoutBox, o);
    if (n) {
      const a = n(jc(r));
      this.hasMutatedConstraints = !!a, a && (r = Xr(a));
    }
    return r;
  }
  startAnimation(e) {
    const { drag: n, dragMomentum: i, dragElastic: s, dragTransition: o, dragSnapToOrigin: r, onDragTransitionEnd: a } = this.getProps(), l = this.constraints || {}, u = et((c) => {
      if (!be(c, n, this.currentDirection))
        return;
      let h = l && l[c] || {};
      r && (h = { min: 0, max: 0 });
      const d = s ? 200 : 1e6, m = s ? 40 : 1e7, g = {
        type: "inertia",
        velocity: i ? e[c] : 0,
        bounceStiffness: d,
        bounceDamping: m,
        timeConstant: 750,
        restDelta: 1,
        restSpeed: 10,
        ...o,
        ...h
      };
      return this.startAxisValueAnimation(c, g);
    });
    return Promise.all(u).then(a);
  }
  startAxisValueAnimation(e, n) {
    const i = this.getAxisMotionValue(e);
    return Pn(this.visualElement, e), i.start(oi(e, i, 0, n, this.visualElement, !1));
  }
  stopAnimation() {
    et((e) => this.getAxisMotionValue(e).stop());
  }
  pauseAnimation() {
    et((e) => {
      var n;
      return (n = this.getAxisMotionValue(e).animation) == null ? void 0 : n.pause();
    });
  }
  getAnimationState(e) {
    var n;
    return (n = this.getAxisMotionValue(e).animation) == null ? void 0 : n.state;
  }
  /**
   * Drag works differently depending on which props are provided.
   *
   * - If _dragX and _dragY are provided, we output the gesture delta directly to those motion values.
   * - Otherwise, we apply the delta to the x/y motion values.
   */
  getAxisMotionValue(e) {
    const n = `_drag${e.toUpperCase()}`, i = this.visualElement.getProps(), s = i[n];
    return s || this.visualElement.getValue(e, (i.initial ? i.initial[e] : void 0) || 0);
  }
  snapToCursor(e) {
    et((n) => {
      const { drag: i } = this.getProps();
      if (!be(n, i, this.currentDirection))
        return;
      const { projection: s } = this.visualElement, o = this.getAxisMotionValue(n);
      if (s && s.layout) {
        const { min: r, max: a } = s.layout.layoutBox[n];
        o.set(e[n] - L(r, a, 0.5));
      }
    });
  }
  /**
   * When the viewport resizes we want to check if the measured constraints
   * have changed and, if so, reposition the element within those new constraints
   * relative to where it was before the resize.
   */
  scalePositionWithinConstraints() {
    if (!this.visualElement.current)
      return;
    const { drag: e, dragConstraints: n } = this.getProps(), { projection: i } = this.visualElement;
    if (!kt(n) || !i || !this.constraints)
      return;
    this.stopAnimation();
    const s = { x: 0, y: 0 };
    et((r) => {
      const a = this.getAxisMotionValue(r);
      if (a && this.constraints !== !1) {
        const l = a.get();
        s[r] = ku({ min: l, max: l }, this.constraints[r]);
      }
    });
    const { transformTemplate: o } = this.visualElement.getProps();
    this.visualElement.current.style.transform = o ? o({}, "") : "none", i.root && i.root.updateScroll(), i.updateLayout(), this.resolveConstraints(), et((r) => {
      if (!be(r, e, null))
        return;
      const a = this.getAxisMotionValue(r), { min: l, max: u } = this.constraints[r];
      a.set(L(l, u, s[r]));
    });
  }
  addListeners() {
    if (!this.visualElement.current)
      return;
    ju.set(this.visualElement, this);
    const e = this.visualElement.current, n = Jt(e, "pointerdown", (l) => {
      const { drag: u, dragListener: c = !0 } = this.getProps();
      u && c && this.start(l);
    }), i = () => {
      const { dragConstraints: l } = this.getProps();
      kt(l) && l.current && (this.constraints = this.resolveRefConstraints());
    }, { projection: s } = this.visualElement, o = s.addEventListener("measure", i);
    s && !s.layout && (s.root && s.root.updateScroll(), s.updateLayout()), k.read(i);
    const r = oe(window, "resize", () => this.scalePositionWithinConstraints()), a = s.addEventListener("didUpdate", (({ delta: l, hasLayoutChanged: u }) => {
      this.isDragging && u && (et((c) => {
        const h = this.getAxisMotionValue(c);
        h && (this.originPoint[c] += l[c].translate, h.set(h.get() + l[c].translate));
      }), this.visualElement.render());
    }));
    return () => {
      r(), n(), o(), a && a();
    };
  }
  getProps() {
    const e = this.visualElement.getProps(), { drag: n = !1, dragDirectionLock: i = !1, dragPropagation: s = !1, dragConstraints: o = !1, dragElastic: r = An, dragMomentum: a = !0 } = e;
    return {
      ...e,
      drag: n,
      dragDirectionLock: i,
      dragPropagation: s,
      dragConstraints: o,
      dragElastic: r,
      dragMomentum: a
    };
  }
}
function be(t, e, n) {
  return (e === !0 || e === t) && (n === null || n === t);
}
function Iu(t, e = 10) {
  let n = null;
  return Math.abs(t.y) > e ? n = "y" : Math.abs(t.x) > e && (n = "x"), n;
}
class Bu extends xt {
  constructor(e) {
    super(e), this.removeGroupControls = it, this.removeListeners = it, this.controls = new Fu(e);
  }
  mount() {
    const { dragControls: e } = this.node.getProps();
    e && (this.removeGroupControls = e.subscribe(this.controls)), this.removeListeners = this.controls.addListeners() || it;
  }
  unmount() {
    this.removeGroupControls(), this.removeListeners();
  }
}
const ps = (t) => (e, n) => {
  t && k.postRender(() => t(e, n));
};
class Nu extends xt {
  constructor() {
    super(...arguments), this.removePointerDownListener = it;
  }
  onPointerDown(e) {
    this.session = new uo(e, this.createPanHandlers(), {
      transformPagePoint: this.node.getTransformPagePoint(),
      contextWindow: co(this.node)
    });
  }
  createPanHandlers() {
    const { onPanSessionStart: e, onPanStart: n, onPan: i, onPanEnd: s } = this.node.getProps();
    return {
      onSessionStart: ps(e),
      onStart: ps(n),
      onMove: i,
      onEnd: (o, r) => {
        delete this.session, s && k.postRender(() => s(o, r));
      }
    };
  }
  mount() {
    this.removePointerDownListener = Jt(this.node.current, "pointerdown", (e) => this.onPointerDown(e));
  }
  update() {
    this.session && this.session.updateHandlers(this.createPanHandlers());
  }
  unmount() {
    this.removePointerDownListener(), this.session && this.session.end();
  }
}
const Pe = {
  /**
   * Global flag as to whether the tree has animated since the last time
   * we resized the window
   */
  hasAnimatedSinceResize: !0,
  /**
   * We set this to true once, on the first update. Any nodes added to the tree beyond that
   * update will be given a `data-projection-id` attribute.
   */
  hasEverUpdated: !1
};
function gs(t, e) {
  return e.max === e.min ? 0 : t / (e.max - e.min) * 100;
}
const zt = {
  correct: (t, e) => {
    if (!e.target)
      return t;
    if (typeof t == "string")
      if (P.test(t))
        t = parseFloat(t);
      else
        return t;
    const n = gs(t, e.target.x), i = gs(t, e.target.y);
    return `${n}% ${i}%`;
  }
}, Uu = {
  correct: (t, { treeScale: e, projectionDelta: n }) => {
    const i = t, s = bt.parse(t);
    if (s.length > 5)
      return i;
    const o = bt.createTransformer(t), r = typeof s[0] != "number" ? 1 : 0, a = n.x.scale * e.x, l = n.y.scale * e.y;
    s[0 + r] /= a, s[1 + r] /= l;
    const u = L(a, l, 0.5);
    return typeof s[2 + r] == "number" && (s[2 + r] /= u), typeof s[3 + r] == "number" && (s[3 + r] /= u), o(s);
  }
};
let tn = !1;
class $u extends ta {
  /**
   * This only mounts projection nodes for components that
   * need measuring, we might want to do it for all components
   * in order to incorporate transforms
   */
  componentDidMount() {
    const { visualElement: e, layoutGroup: n, switchLayoutGroup: i, layoutId: s } = this.props, { projection: o } = e;
    uc(Wu), o && (n.group && n.group.add(o), i && i.register && s && i.register(o), tn && o.root.didUpdate(), o.addEventListener("animationComplete", () => {
      this.safeToRemove();
    }), o.setOptions({
      ...o.options,
      onExitComplete: () => this.safeToRemove()
    })), Pe.hasEverUpdated = !0;
  }
  getSnapshotBeforeUpdate(e) {
    const { layoutDependency: n, visualElement: i, drag: s, isPresent: o } = this.props, { projection: r } = i;
    return r && (r.isPresent = o, tn = !0, s || e.layoutDependency !== n || n === void 0 || e.isPresent !== o ? r.willUpdate() : this.safeToRemove(), e.isPresent !== o && (o ? r.promote() : r.relegate() || k.postRender(() => {
      const a = r.getStack();
      (!a || !a.members.length) && this.safeToRemove();
    }))), null;
  }
  componentDidUpdate() {
    const { projection: e } = this.props.visualElement;
    e && (e.root.didUpdate(), qn.postRender(() => {
      !e.currentAnimation && e.isLead() && this.safeToRemove();
    }));
  }
  componentWillUnmount() {
    const { visualElement: e, layoutGroup: n, switchLayoutGroup: i } = this.props, { projection: s } = e;
    tn = !0, s && (s.scheduleCheckAfterUnmount(), n && n.group && n.group.remove(s), i && i.deregister && i.deregister(s));
  }
  safeToRemove() {
    const { safeToRemove: e } = this.props;
    e && e();
  }
  render() {
    return null;
  }
}
function ho(t) {
  const [e, n] = ic(), i = Z(Ks);
  return U.jsx($u, { ...t, layoutGroup: i, switchLayoutGroup: Z(Gr), isPresent: e, safeToRemove: n });
}
const Wu = {
  borderRadius: {
    ...zt,
    applyTo: [
      "borderTopLeftRadius",
      "borderTopRightRadius",
      "borderBottomLeftRadius",
      "borderBottomRightRadius"
    ]
  },
  borderTopLeftRadius: zt,
  borderTopRightRadius: zt,
  borderBottomLeftRadius: zt,
  borderBottomRightRadius: zt,
  boxShadow: Uu
};
function Ku(t, e, n) {
  const i = Y(t) ? t : It(t);
  return i.start(oi("", i, e, n)), i.animation;
}
const Yu = (t, e) => t.depth - e.depth;
class Gu {
  constructor() {
    this.children = [], this.isDirty = !1;
  }
  add(e) {
    Dn(this.children, e), this.isDirty = !0;
  }
  remove(e) {
    Mn(this.children, e), this.isDirty = !0;
  }
  forEach(e) {
    this.isDirty && this.children.sort(Yu), this.isDirty = !1, this.children.forEach(e);
  }
}
function Hu(t, e) {
  const n = J.now(), i = ({ timestamp: s }) => {
    const o = s - n;
    o >= e && (vt(i), t(o - e));
  };
  return k.setup(i, !0), () => vt(i);
}
const mo = ["TopLeft", "TopRight", "BottomLeft", "BottomRight"], Xu = mo.length, ys = (t) => typeof t == "string" ? parseFloat(t) : t, vs = (t) => typeof t == "number" || P.test(t);
function zu(t, e, n, i, s, o) {
  s ? (t.opacity = L(0, n.opacity ?? 1, qu(i)), t.opacityExit = L(e.opacity ?? 1, 0, Zu(i))) : o && (t.opacity = L(e.opacity ?? 1, n.opacity ?? 1, i));
  for (let r = 0; r < Xu; r++) {
    const a = `border${mo[r]}Radius`;
    let l = bs(e, a), u = bs(n, a);
    if (l === void 0 && u === void 0)
      continue;
    l || (l = 0), u || (u = 0), l === 0 || u === 0 || vs(l) === vs(u) ? (t[a] = Math.max(L(ys(l), ys(u), i), 0), (ut.test(u) || ut.test(l)) && (t[a] += "%")) : t[a] = u;
  }
  (e.rotate || n.rotate) && (t.rotate = L(e.rotate || 0, n.rotate || 0, i));
}
function bs(t, e) {
  return t[e] !== void 0 ? t[e] : t.borderRadius;
}
const qu = /* @__PURE__ */ po(0, 0.5, er), Zu = /* @__PURE__ */ po(0.5, 0.95, it);
function po(t, e, n) {
  return (i) => i < t ? 0 : i > e ? 1 : n(/* @__PURE__ */ ee(t, e, i));
}
function xs(t, e) {
  t.min = e.min, t.max = e.max;
}
function tt(t, e) {
  xs(t.x, e.x), xs(t.y, e.y);
}
function Ts(t, e) {
  t.translate = e.translate, t.scale = e.scale, t.originPoint = e.originPoint, t.origin = e.origin;
}
function ws(t, e, n, i, s) {
  return t -= e, t = Ee(t, 1 / n, i), s !== void 0 && (t = Ee(t, 1 / s, i)), t;
}
function Ju(t, e = 0, n = 1, i = 0.5, s, o = t, r = t) {
  if (ut.test(e) && (e = parseFloat(e), e = L(r.min, r.max, e / 100) - r.min), typeof e != "number")
    return;
  let a = L(o.min, o.max, i);
  t === o && (a -= e), t.min = ws(t.min, e, n, a, s), t.max = ws(t.max, e, n, a, s);
}
function Ss(t, e, [n, i, s], o, r) {
  Ju(t, e[n], e[i], e[s], e.scale, o, r);
}
const Qu = ["x", "scaleX", "originX"], tf = ["y", "scaleY", "originY"];
function Ps(t, e, n, i) {
  Ss(t.x, e, Qu, n ? n.x : void 0, i ? i.x : void 0), Ss(t.y, e, tf, n ? n.y : void 0, i ? i.y : void 0);
}
function _s(t) {
  return t.translate === 0 && t.scale === 1;
}
function go(t) {
  return _s(t.x) && _s(t.y);
}
function As(t, e) {
  return t.min === e.min && t.max === e.max;
}
function ef(t, e) {
  return As(t.x, e.x) && As(t.y, e.y);
}
function Vs(t, e) {
  return Math.round(t.min) === Math.round(e.min) && Math.round(t.max) === Math.round(e.max);
}
function yo(t, e) {
  return Vs(t.x, e.x) && Vs(t.y, e.y);
}
function Cs(t) {
  return X(t.x) / X(t.y);
}
function Es(t, e) {
  return t.translate === e.translate && t.scale === e.scale && t.originPoint === e.originPoint;
}
class nf {
  constructor() {
    this.members = [];
  }
  add(e) {
    Dn(this.members, e), e.scheduleRender();
  }
  remove(e) {
    if (Mn(this.members, e), e === this.prevLead && (this.prevLead = void 0), e === this.lead) {
      const n = this.members[this.members.length - 1];
      n && this.promote(n);
    }
  }
  relegate(e) {
    const n = this.members.findIndex((s) => e === s);
    if (n === 0)
      return !1;
    let i;
    for (let s = n; s >= 0; s--) {
      const o = this.members[s];
      if (o.isPresent !== !1) {
        i = o;
        break;
      }
    }
    return i ? (this.promote(i), !0) : !1;
  }
  promote(e, n) {
    const i = this.lead;
    if (e !== i && (this.prevLead = i, this.lead = e, e.show(), i)) {
      i.instance && i.scheduleRender(), e.scheduleRender(), e.resumeFrom = i, n && (e.resumeFrom.preserveOpacity = !0), i.snapshot && (e.snapshot = i.snapshot, e.snapshot.latestValues = i.animationValues || i.latestValues), e.root && e.root.isUpdating && (e.isLayoutDirty = !0);
      const { crossfade: s } = e.options;
      s === !1 && i.hide();
    }
  }
  exitAnimationComplete() {
    this.members.forEach((e) => {
      const { options: n, resumingFrom: i } = e;
      n.onExitComplete && n.onExitComplete(), i && i.options.onExitComplete && i.options.onExitComplete();
    });
  }
  scheduleRender() {
    this.members.forEach((e) => {
      e.instance && e.scheduleRender(!1);
    });
  }
  /**
   * Clear any leads that have been removed this render to prevent them from being
   * used in future animations and to prevent memory leaks
   */
  removeLeadSnapshot() {
    this.lead && this.lead.snapshot && (this.lead.snapshot = void 0);
  }
}
function sf(t, e, n) {
  let i = "";
  const s = t.x.translate / e.x, o = t.y.translate / e.y, r = (n == null ? void 0 : n.z) || 0;
  if ((s || o || r) && (i = `translate3d(${s}px, ${o}px, ${r}px) `), (e.x !== 1 || e.y !== 1) && (i += `scale(${1 / e.x}, ${1 / e.y}) `), n) {
    const { transformPerspective: u, rotate: c, rotateX: h, rotateY: d, skewX: m, skewY: g } = n;
    u && (i = `perspective(${u}px) ${i}`), c && (i += `rotate(${c}deg) `), h && (i += `rotateX(${h}deg) `), d && (i += `rotateY(${d}deg) `), m && (i += `skewX(${m}deg) `), g && (i += `skewY(${g}deg) `);
  }
  const a = t.x.scale * e.x, l = t.y.scale * e.y;
  return (a !== 1 || l !== 1) && (i += `scale(${a}, ${l})`), i || "none";
}
const en = ["", "X", "Y", "Z"], rf = 1e3;
let of = 0;
function nn(t, e, n, i) {
  const { latestValues: s } = e;
  s[t] && (n[t] = s[t], e.setStaticValue(t, 0), i && (i[t] = 0));
}
function vo(t) {
  if (t.hasCheckedOptimisedAppear = !0, t.root === t)
    return;
  const { visualElement: e } = t.options;
  if (!e)
    return;
  const n = no(e);
  if (window.MotionHasOptimisedAnimation(n, "transform")) {
    const { layout: s, layoutId: o } = t.options;
    window.MotionCancelOptimisedAnimation(n, "transform", k, !(s || o));
  }
  const { parent: i } = t;
  i && !i.hasCheckedOptimisedAppear && vo(i);
}
function bo({ attachResizeListener: t, defaultParent: e, measureScroll: n, checkIsScrollRoot: i, resetTransform: s }) {
  return class {
    constructor(r = {}, a = e == null ? void 0 : e()) {
      this.id = of++, this.animationId = 0, this.animationCommitId = 0, this.children = /* @__PURE__ */ new Set(), this.options = {}, this.isTreeAnimating = !1, this.isAnimationBlocked = !1, this.isLayoutDirty = !1, this.isProjectionDirty = !1, this.isSharedProjectionDirty = !1, this.isTransformDirty = !1, this.updateManuallyBlocked = !1, this.updateBlockedByResize = !1, this.isUpdating = !1, this.isSVG = !1, this.needsReset = !1, this.shouldResetTransform = !1, this.hasCheckedOptimisedAppear = !1, this.treeScale = { x: 1, y: 1 }, this.eventHandlers = /* @__PURE__ */ new Map(), this.hasTreeAnimated = !1, this.updateScheduled = !1, this.scheduleUpdate = () => this.update(), this.projectionUpdateScheduled = !1, this.checkUpdateFailed = () => {
        this.isUpdating && (this.isUpdating = !1, this.clearAllSnapshots());
      }, this.updateProjection = () => {
        this.projectionUpdateScheduled = !1, this.nodes.forEach(cf), this.nodes.forEach(df), this.nodes.forEach(mf), this.nodes.forEach(uf);
      }, this.resolvedRelativeTargetAt = 0, this.hasProjected = !1, this.isVisible = !0, this.animationProgress = 0, this.sharedNodes = /* @__PURE__ */ new Map(), this.latestValues = r, this.root = a ? a.root || a : this, this.path = a ? [...a.path, a] : [], this.parent = a, this.depth = a ? a.depth + 1 : 0;
      for (let l = 0; l < this.path.length; l++)
        this.path[l].shouldResetTransform = !0;
      this.root === this && (this.nodes = new Gu());
    }
    addEventListener(r, a) {
      return this.eventHandlers.has(r) || this.eventHandlers.set(r, new On()), this.eventHandlers.get(r).add(a);
    }
    notifyListeners(r, ...a) {
      const l = this.eventHandlers.get(r);
      l && l.notify(...a);
    }
    hasListeners(r) {
      return this.eventHandlers.has(r);
    }
    /**
     * Lifecycles
     */
    mount(r) {
      if (this.instance)
        return;
      this.isSVG = kr(r) && !tc(r), this.instance = r;
      const { layoutId: a, layout: l, visualElement: u } = this.options;
      if (u && !u.current && u.mount(r), this.root.nodes.add(this), this.parent && this.parent.children.add(this), this.root.hasTreeAnimated && (l || a) && (this.isLayoutDirty = !0), t) {
        let c, h = 0;
        const d = () => this.root.updateBlockedByResize = !1;
        k.read(() => {
          h = window.innerWidth;
        }), t(r, () => {
          const m = window.innerWidth;
          m !== h && (h = m, this.root.updateBlockedByResize = !0, c && c(), c = Hu(d, 250), Pe.hasAnimatedSinceResize && (Pe.hasAnimatedSinceResize = !1, this.nodes.forEach(Ms)));
        });
      }
      a && this.root.registerSharedNode(a, this), this.options.animate !== !1 && u && (a || l) && this.addEventListener("didUpdate", ({ delta: c, hasLayoutChanged: h, hasRelativeLayoutChanged: d, layout: m }) => {
        if (this.isTreeAnimationBlocked()) {
          this.target = void 0, this.relativeTarget = void 0;
          return;
        }
        const g = this.options.transition || u.getDefaultTransition() || bf, { onLayoutAnimationStart: v, onLayoutAnimationComplete: T } = u.getProps(), y = !this.targetLayout || !yo(this.targetLayout, m), b = !h && d;
        if (this.options.layoutRoot || this.resumeFrom || b || h && (y || !this.currentAnimation)) {
          this.resumeFrom && (this.resumingFrom = this.resumeFrom, this.resumingFrom.resumingFrom = void 0);
          const w = {
            ...Xn(g, "layout"),
            onPlay: v,
            onComplete: T
          };
          (u.shouldReduceMotion || this.options.layoutRoot) && (w.delay = 0, w.type = !1), this.startAnimation(w), this.setAnimationOrigin(c, b);
        } else
          h || Ms(this), this.isLead() && this.options.onExitComplete && this.options.onExitComplete();
        this.targetLayout = m;
      });
    }
    unmount() {
      this.options.layoutId && this.willUpdate(), this.root.nodes.remove(this);
      const r = this.getStack();
      r && r.remove(this), this.parent && this.parent.children.delete(this), this.instance = void 0, this.eventHandlers.clear(), vt(this.updateProjection);
    }
    // only on the root
    blockUpdate() {
      this.updateManuallyBlocked = !0;
    }
    unblockUpdate() {
      this.updateManuallyBlocked = !1;
    }
    isUpdateBlocked() {
      return this.updateManuallyBlocked || this.updateBlockedByResize;
    }
    isTreeAnimationBlocked() {
      return this.isAnimationBlocked || this.parent && this.parent.isTreeAnimationBlocked() || !1;
    }
    // Note: currently only running on root node
    startUpdate() {
      this.isUpdateBlocked() || (this.isUpdating = !0, this.nodes && this.nodes.forEach(pf), this.animationId++);
    }
    getTransformTemplate() {
      const { visualElement: r } = this.options;
      return r && r.getProps().transformTemplate;
    }
    willUpdate(r = !0) {
      if (this.root.hasTreeAnimated = !0, this.root.isUpdateBlocked()) {
        this.options.onExitComplete && this.options.onExitComplete();
        return;
      }
      if (window.MotionCancelOptimisedAnimation && !this.hasCheckedOptimisedAppear && vo(this), !this.root.isUpdating && this.root.startUpdate(), this.isLayoutDirty)
        return;
      this.isLayoutDirty = !0;
      for (let c = 0; c < this.path.length; c++) {
        const h = this.path[c];
        h.shouldResetTransform = !0, h.updateScroll("snapshot"), h.options.layoutRoot && h.willUpdate(!1);
      }
      const { layoutId: a, layout: l } = this.options;
      if (a === void 0 && !l)
        return;
      const u = this.getTransformTemplate();
      this.prevTransformTemplateValue = u ? u(this.latestValues, "") : void 0, this.updateSnapshot(), r && this.notifyListeners("willUpdate");
    }
    update() {
      if (this.updateScheduled = !1, this.isUpdateBlocked()) {
        this.unblockUpdate(), this.clearAllSnapshots(), this.nodes.forEach(Rs);
        return;
      }
      if (this.animationId <= this.animationCommitId) {
        this.nodes.forEach(Ds);
        return;
      }
      this.animationCommitId = this.animationId, this.isUpdating ? (this.isUpdating = !1, this.nodes.forEach(hf), this.nodes.forEach(af), this.nodes.forEach(lf)) : this.nodes.forEach(Ds), this.clearAllSnapshots();
      const a = J.now();
      K.delta = ht(0, 1e3 / 60, a - K.timestamp), K.timestamp = a, K.isProcessing = !0, Ke.update.process(K), Ke.preRender.process(K), Ke.render.process(K), K.isProcessing = !1;
    }
    didUpdate() {
      this.updateScheduled || (this.updateScheduled = !0, qn.read(this.scheduleUpdate));
    }
    clearAllSnapshots() {
      this.nodes.forEach(ff), this.sharedNodes.forEach(gf);
    }
    scheduleUpdateProjection() {
      this.projectionUpdateScheduled || (this.projectionUpdateScheduled = !0, k.preRender(this.updateProjection, !1, !0));
    }
    scheduleCheckAfterUnmount() {
      k.postRender(() => {
        this.isLayoutDirty ? this.root.didUpdate() : this.root.checkUpdateFailed();
      });
    }
    /**
     * Update measurements
     */
    updateSnapshot() {
      this.snapshot || !this.instance || (this.snapshot = this.measure(), this.snapshot && !X(this.snapshot.measuredBox.x) && !X(this.snapshot.measuredBox.y) && (this.snapshot = void 0));
    }
    updateLayout() {
      if (!this.instance || (this.updateScroll(), !(this.options.alwaysMeasureLayout && this.isLead()) && !this.isLayoutDirty))
        return;
      if (this.resumeFrom && !this.resumeFrom.instance)
        for (let l = 0; l < this.path.length; l++)
          this.path[l].updateScroll();
      const r = this.layout;
      this.layout = this.measure(!1), this.layoutCorrected = I(), this.isLayoutDirty = !1, this.projectionDelta = void 0, this.notifyListeners("measure", this.layout.layoutBox);
      const { visualElement: a } = this.options;
      a && a.notify("LayoutMeasure", this.layout.layoutBox, r ? r.layoutBox : void 0);
    }
    updateScroll(r = "measure") {
      let a = !!(this.options.layoutScroll && this.instance);
      if (this.scroll && this.scroll.animationId === this.root.animationId && this.scroll.phase === r && (a = !1), a && this.instance) {
        const l = i(this.instance);
        this.scroll = {
          animationId: this.root.animationId,
          phase: r,
          isRoot: l,
          offset: n(this.instance),
          wasRoot: this.scroll ? this.scroll.isRoot : l
        };
      }
    }
    resetTransform() {
      if (!s)
        return;
      const r = this.isLayoutDirty || this.shouldResetTransform || this.options.alwaysMeasureLayout, a = this.projectionDelta && !go(this.projectionDelta), l = this.getTransformTemplate(), u = l ? l(this.latestValues, "") : void 0, c = u !== this.prevTransformTemplateValue;
      r && this.instance && (a || St(this.latestValues) || c) && (s(this.instance, u), this.shouldResetTransform = !1, this.scheduleRender());
    }
    measure(r = !0) {
      const a = this.measurePageBox();
      let l = this.removeElementScroll(a);
      return r && (l = this.removeTransform(l)), xf(l), {
        animationId: this.root.animationId,
        measuredBox: a,
        layoutBox: l,
        latestValues: {},
        source: this.id
      };
    }
    measurePageBox() {
      var u;
      const { visualElement: r } = this.options;
      if (!r)
        return I();
      const a = r.measureViewportBox();
      if (!(((u = this.scroll) == null ? void 0 : u.wasRoot) || this.path.some(Tf))) {
        const { scroll: c } = this.root;
        c && (Ot(a.x, c.offset.x), Ot(a.y, c.offset.y));
      }
      return a;
    }
    removeElementScroll(r) {
      var l;
      const a = I();
      if (tt(a, r), (l = this.scroll) != null && l.wasRoot)
        return a;
      for (let u = 0; u < this.path.length; u++) {
        const c = this.path[u], { scroll: h, options: d } = c;
        c !== this.root && h && d.layoutScroll && (h.wasRoot && tt(a, r), Ot(a.x, h.offset.x), Ot(a.y, h.offset.y));
      }
      return a;
    }
    applyTransform(r, a = !1) {
      const l = I();
      tt(l, r);
      for (let u = 0; u < this.path.length; u++) {
        const c = this.path[u];
        !a && c.options.layoutScroll && c.scroll && c !== c.root && Lt(l, {
          x: -c.scroll.offset.x,
          y: -c.scroll.offset.y
        }), St(c.latestValues) && Lt(l, c.latestValues);
      }
      return St(this.latestValues) && Lt(l, this.latestValues), l;
    }
    removeTransform(r) {
      const a = I();
      tt(a, r);
      for (let l = 0; l < this.path.length; l++) {
        const u = this.path[l];
        if (!u.instance || !St(u.latestValues))
          continue;
        xn(u.latestValues) && u.updateSnapshot();
        const c = I(), h = u.measurePageBox();
        tt(c, h), Ps(a, u.latestValues, u.snapshot ? u.snapshot.layoutBox : void 0, c);
      }
      return St(this.latestValues) && Ps(a, this.latestValues), a;
    }
    setTargetDelta(r) {
      this.targetDelta = r, this.root.scheduleUpdateProjection(), this.isProjectionDirty = !0;
    }
    setOptions(r) {
      this.options = {
        ...this.options,
        ...r,
        crossfade: r.crossfade !== void 0 ? r.crossfade : !0
      };
    }
    clearMeasurements() {
      this.scroll = void 0, this.layout = void 0, this.snapshot = void 0, this.prevTransformTemplateValue = void 0, this.targetDelta = void 0, this.target = void 0, this.isLayoutDirty = !1;
    }
    forceRelativeParentToResolveTarget() {
      this.relativeParent && this.relativeParent.resolvedRelativeTargetAt !== K.timestamp && this.relativeParent.resolveTargetDelta(!0);
    }
    resolveTargetDelta(r = !1) {
      var d;
      const a = this.getLead();
      this.isProjectionDirty || (this.isProjectionDirty = a.isProjectionDirty), this.isTransformDirty || (this.isTransformDirty = a.isTransformDirty), this.isSharedProjectionDirty || (this.isSharedProjectionDirty = a.isSharedProjectionDirty);
      const l = !!this.resumingFrom || this !== a;
      if (!(r || l && this.isSharedProjectionDirty || this.isProjectionDirty || (d = this.parent) != null && d.isProjectionDirty || this.attemptToResolveRelativeTarget || this.root.updateBlockedByResize))
        return;
      const { layout: c, layoutId: h } = this.options;
      if (!(!this.layout || !(c || h))) {
        if (this.resolvedRelativeTargetAt = K.timestamp, !this.targetDelta && !this.relativeTarget) {
          const m = this.getClosestProjectingParent();
          m && m.layout && this.animationProgress !== 1 ? (this.relativeParent = m, this.forceRelativeParentToResolveTarget(), this.relativeTarget = I(), this.relativeTargetOrigin = I(), te(this.relativeTargetOrigin, this.layout.layoutBox, m.layout.layoutBox), tt(this.relativeTarget, this.relativeTargetOrigin)) : this.relativeParent = this.relativeTarget = void 0;
        }
        if (!(!this.relativeTarget && !this.targetDelta) && (this.target || (this.target = I(), this.targetWithTransforms = I()), this.relativeTarget && this.relativeTargetOrigin && this.relativeParent && this.relativeParent.target ? (this.forceRelativeParentToResolveTarget(), Au(this.target, this.relativeTarget, this.relativeParent.target)) : this.targetDelta ? (this.resumingFrom ? this.target = this.applyTransform(this.layout.layoutBox) : tt(this.target, this.layout.layoutBox), qr(this.target, this.targetDelta)) : tt(this.target, this.layout.layoutBox), this.attemptToResolveRelativeTarget)) {
          this.attemptToResolveRelativeTarget = !1;
          const m = this.getClosestProjectingParent();
          m && !!m.resumingFrom == !!this.resumingFrom && !m.options.layoutScroll && m.target && this.animationProgress !== 1 ? (this.relativeParent = m, this.forceRelativeParentToResolveTarget(), this.relativeTarget = I(), this.relativeTargetOrigin = I(), te(this.relativeTargetOrigin, this.target, m.target), tt(this.relativeTarget, this.relativeTargetOrigin)) : this.relativeParent = this.relativeTarget = void 0;
        }
      }
    }
    getClosestProjectingParent() {
      if (!(!this.parent || xn(this.parent.latestValues) || zr(this.parent.latestValues)))
        return this.parent.isProjecting() ? this.parent : this.parent.getClosestProjectingParent();
    }
    isProjecting() {
      return !!((this.relativeTarget || this.targetDelta || this.options.layoutRoot) && this.layout);
    }
    calcProjection() {
      var g;
      const r = this.getLead(), a = !!this.resumingFrom || this !== r;
      let l = !0;
      if ((this.isProjectionDirty || (g = this.parent) != null && g.isProjectionDirty) && (l = !1), a && (this.isSharedProjectionDirty || this.isTransformDirty) && (l = !1), this.resolvedRelativeTargetAt === K.timestamp && (l = !1), l)
        return;
      const { layout: u, layoutId: c } = this.options;
      if (this.isTreeAnimating = !!(this.parent && this.parent.isTreeAnimating || this.currentAnimation || this.pendingAnimation), this.isTreeAnimating || (this.targetDelta = this.relativeTarget = void 0), !this.layout || !(u || c))
        return;
      tt(this.layoutCorrected, this.layout.layoutBox);
      const h = this.treeScale.x, d = this.treeScale.y;
      Ic(this.layoutCorrected, this.treeScale, this.path, a), r.layout && !r.target && (this.treeScale.x !== 1 || this.treeScale.y !== 1) && (r.target = r.layout.layoutBox, r.targetWithTransforms = I());
      const { target: m } = r;
      if (!m) {
        this.prevProjectionDelta && (this.createProjectionDeltas(), this.scheduleRender());
        return;
      }
      !this.projectionDelta || !this.prevProjectionDelta ? this.createProjectionDeltas() : (Ts(this.prevProjectionDelta.x, this.projectionDelta.x), Ts(this.prevProjectionDelta.y, this.projectionDelta.y)), Qt(this.projectionDelta, this.layoutCorrected, m, this.latestValues), (this.treeScale.x !== h || this.treeScale.y !== d || !Es(this.projectionDelta.x, this.prevProjectionDelta.x) || !Es(this.projectionDelta.y, this.prevProjectionDelta.y)) && (this.hasProjected = !0, this.scheduleRender(), this.notifyListeners("projectionUpdate", m));
    }
    hide() {
      this.isVisible = !1;
    }
    show() {
      this.isVisible = !0;
    }
    scheduleRender(r = !0) {
      var a;
      if ((a = this.options.visualElement) == null || a.scheduleRender(), r) {
        const l = this.getStack();
        l && l.scheduleRender();
      }
      this.resumingFrom && !this.resumingFrom.instance && (this.resumingFrom = void 0);
    }
    createProjectionDeltas() {
      this.prevProjectionDelta = jt(), this.projectionDelta = jt(), this.projectionDeltaWithTransform = jt();
    }
    setAnimationOrigin(r, a = !1) {
      const l = this.snapshot, u = l ? l.latestValues : {}, c = { ...this.latestValues }, h = jt();
      (!this.relativeParent || !this.relativeParent.options.layoutRoot) && (this.relativeTarget = this.relativeTargetOrigin = void 0), this.attemptToResolveRelativeTarget = !a;
      const d = I(), m = l ? l.source : void 0, g = this.layout ? this.layout.source : void 0, v = m !== g, T = this.getStack(), y = !T || T.members.length <= 1, b = !!(v && !y && this.options.crossfade === !0 && !this.path.some(vf));
      this.animationProgress = 0;
      let w;
      this.mixTargetDelta = (C) => {
        const S = C / 1e3;
        ks(h.x, r.x, S), ks(h.y, r.y, S), this.setTargetDelta(h), this.relativeTarget && this.relativeTargetOrigin && this.layout && this.relativeParent && this.relativeParent.layout && (te(d, this.layout.layoutBox, this.relativeParent.layout.layoutBox), yf(this.relativeTarget, this.relativeTargetOrigin, d, S), w && ef(this.relativeTarget, w) && (this.isProjectionDirty = !1), w || (w = I()), tt(w, this.relativeTarget)), v && (this.animationValues = c, zu(c, u, this.latestValues, S, b, y)), this.root.scheduleUpdateProjection(), this.scheduleRender(), this.animationProgress = S;
      }, this.mixTargetDelta(this.options.layoutRoot ? 1e3 : 0);
    }
    startAnimation(r) {
      var a, l, u;
      this.notifyListeners("animationStart"), (a = this.currentAnimation) == null || a.stop(), (u = (l = this.resumingFrom) == null ? void 0 : l.currentAnimation) == null || u.stop(), this.pendingAnimation && (vt(this.pendingAnimation), this.pendingAnimation = void 0), this.pendingAnimation = k.update(() => {
        Pe.hasAnimatedSinceResize = !0, this.motionValue || (this.motionValue = It(0)), this.currentAnimation = Ku(this.motionValue, [0, 1e3], {
          ...r,
          velocity: 0,
          isSync: !0,
          onUpdate: (c) => {
            this.mixTargetDelta(c), r.onUpdate && r.onUpdate(c);
          },
          onStop: () => {
          },
          onComplete: () => {
            r.onComplete && r.onComplete(), this.completeAnimation();
          }
        }), this.resumingFrom && (this.resumingFrom.currentAnimation = this.currentAnimation), this.pendingAnimation = void 0;
      });
    }
    completeAnimation() {
      this.resumingFrom && (this.resumingFrom.currentAnimation = void 0, this.resumingFrom.preserveOpacity = void 0);
      const r = this.getStack();
      r && r.exitAnimationComplete(), this.resumingFrom = this.currentAnimation = this.animationValues = void 0, this.notifyListeners("animationComplete");
    }
    finishAnimation() {
      this.currentAnimation && (this.mixTargetDelta && this.mixTargetDelta(rf), this.currentAnimation.stop()), this.completeAnimation();
    }
    applyTransformsToTarget() {
      const r = this.getLead();
      let { targetWithTransforms: a, target: l, layout: u, latestValues: c } = r;
      if (!(!a || !l || !u)) {
        if (this !== r && this.layout && u && xo(this.options.animationType, this.layout.layoutBox, u.layoutBox)) {
          l = this.target || I();
          const h = X(this.layout.layoutBox.x);
          l.x.min = r.target.x.min, l.x.max = l.x.min + h;
          const d = X(this.layout.layoutBox.y);
          l.y.min = r.target.y.min, l.y.max = l.y.min + d;
        }
        tt(a, l), Lt(a, c), Qt(this.projectionDeltaWithTransform, this.layoutCorrected, a, c);
      }
    }
    registerSharedNode(r, a) {
      this.sharedNodes.has(r) || this.sharedNodes.set(r, new nf()), this.sharedNodes.get(r).add(a);
      const u = a.options.initialPromotionConfig;
      a.promote({
        transition: u ? u.transition : void 0,
        preserveFollowOpacity: u && u.shouldPreserveFollowOpacity ? u.shouldPreserveFollowOpacity(a) : void 0
      });
    }
    isLead() {
      const r = this.getStack();
      return r ? r.lead === this : !0;
    }
    getLead() {
      var a;
      const { layoutId: r } = this.options;
      return r ? ((a = this.getStack()) == null ? void 0 : a.lead) || this : this;
    }
    getPrevLead() {
      var a;
      const { layoutId: r } = this.options;
      return r ? (a = this.getStack()) == null ? void 0 : a.prevLead : void 0;
    }
    getStack() {
      const { layoutId: r } = this.options;
      if (r)
        return this.root.sharedNodes.get(r);
    }
    promote({ needsReset: r, transition: a, preserveFollowOpacity: l } = {}) {
      const u = this.getStack();
      u && u.promote(this, l), r && (this.projectionDelta = void 0, this.needsReset = !0), a && this.setOptions({ transition: a });
    }
    relegate() {
      const r = this.getStack();
      return r ? r.relegate(this) : !1;
    }
    resetSkewAndRotation() {
      const { visualElement: r } = this.options;
      if (!r)
        return;
      let a = !1;
      const { latestValues: l } = r;
      if ((l.z || l.rotate || l.rotateX || l.rotateY || l.rotateZ || l.skewX || l.skewY) && (a = !0), !a)
        return;
      const u = {};
      l.z && nn("z", r, u, this.animationValues);
      for (let c = 0; c < en.length; c++)
        nn(`rotate${en[c]}`, r, u, this.animationValues), nn(`skew${en[c]}`, r, u, this.animationValues);
      r.render();
      for (const c in u)
        r.setStaticValue(c, u[c]), this.animationValues && (this.animationValues[c] = u[c]);
      r.scheduleRender();
    }
    applyProjectionStyles(r, a) {
      if (!this.instance || this.isSVG)
        return;
      if (!this.isVisible) {
        r.visibility = "hidden";
        return;
      }
      const l = this.getTransformTemplate();
      if (this.needsReset) {
        this.needsReset = !1, r.visibility = "", r.opacity = "", r.pointerEvents = Se(a == null ? void 0 : a.pointerEvents) || "", r.transform = l ? l(this.latestValues, "") : "none";
        return;
      }
      const u = this.getLead();
      if (!this.projectionDelta || !this.layout || !u.target) {
        this.options.layoutId && (r.opacity = this.latestValues.opacity !== void 0 ? this.latestValues.opacity : 1, r.pointerEvents = Se(a == null ? void 0 : a.pointerEvents) || ""), this.hasProjected && !St(this.latestValues) && (r.transform = l ? l({}, "") : "none", this.hasProjected = !1);
        return;
      }
      r.visibility = "";
      const c = u.animationValues || u.latestValues;
      this.applyTransformsToTarget();
      let h = sf(this.projectionDeltaWithTransform, this.treeScale, c);
      l && (h = l(c, h)), r.transform = h;
      const { x: d, y: m } = this.projectionDelta;
      r.transformOrigin = `${d.origin * 100}% ${m.origin * 100}% 0`, u.animationValues ? r.opacity = u === this ? c.opacity ?? this.latestValues.opacity ?? 1 : this.preserveOpacity ? this.latestValues.opacity : c.opacityExit : r.opacity = u === this ? c.opacity !== void 0 ? c.opacity : "" : c.opacityExit !== void 0 ? c.opacityExit : 0;
      for (const g in re) {
        if (c[g] === void 0)
          continue;
        const { correct: v, applyTo: T, isCSSVariable: y } = re[g], b = h === "none" ? c[g] : v(c[g], u);
        if (T) {
          const w = T.length;
          for (let C = 0; C < w; C++)
            r[T[C]] = b;
        } else
          y ? this.options.visualElement.renderState.vars[g] = b : r[g] = b;
      }
      this.options.layoutId && (r.pointerEvents = u === this ? Se(a == null ? void 0 : a.pointerEvents) || "" : "none");
    }
    clearSnapshot() {
      this.resumeFrom = this.snapshot = void 0;
    }
    // Only run on root
    resetTree() {
      this.root.nodes.forEach((r) => {
        var a;
        return (a = r.currentAnimation) == null ? void 0 : a.stop();
      }), this.root.nodes.forEach(Rs), this.root.sharedNodes.clear();
    }
  };
}
function af(t) {
  t.updateLayout();
}
function lf(t) {
  var n;
  const e = ((n = t.resumeFrom) == null ? void 0 : n.snapshot) || t.snapshot;
  if (t.isLead() && t.layout && e && t.hasListeners("didUpdate")) {
    const { layoutBox: i, measuredBox: s } = t.layout, { animationType: o } = t.options, r = e.source !== t.layout.source;
    o === "size" ? et((h) => {
      const d = r ? e.measuredBox[h] : e.layoutBox[h], m = X(d);
      d.min = i[h].min, d.max = d.min + m;
    }) : xo(o, e.layoutBox, i) && et((h) => {
      const d = r ? e.measuredBox[h] : e.layoutBox[h], m = X(i[h]);
      d.max = d.min + m, t.relativeTarget && !t.currentAnimation && (t.isProjectionDirty = !0, t.relativeTarget[h].max = t.relativeTarget[h].min + m);
    });
    const a = jt();
    Qt(a, i, e.layoutBox);
    const l = jt();
    r ? Qt(l, t.applyTransform(s, !0), e.measuredBox) : Qt(l, i, e.layoutBox);
    const u = !go(a);
    let c = !1;
    if (!t.resumeFrom) {
      const h = t.getClosestProjectingParent();
      if (h && !h.resumeFrom) {
        const { snapshot: d, layout: m } = h;
        if (d && m) {
          const g = I();
          te(g, e.layoutBox, d.layoutBox);
          const v = I();
          te(v, i, m.layoutBox), yo(g, v) || (c = !0), h.options.layoutRoot && (t.relativeTarget = v, t.relativeTargetOrigin = g, t.relativeParent = h);
        }
      }
    }
    t.notifyListeners("didUpdate", {
      layout: i,
      snapshot: e,
      delta: l,
      layoutDelta: a,
      hasLayoutChanged: u,
      hasRelativeLayoutChanged: c
    });
  } else if (t.isLead()) {
    const { onExitComplete: i } = t.options;
    i && i();
  }
  t.options.transition = void 0;
}
function cf(t) {
  t.parent && (t.isProjecting() || (t.isProjectionDirty = t.parent.isProjectionDirty), t.isSharedProjectionDirty || (t.isSharedProjectionDirty = !!(t.isProjectionDirty || t.parent.isProjectionDirty || t.parent.isSharedProjectionDirty)), t.isTransformDirty || (t.isTransformDirty = t.parent.isTransformDirty));
}
function uf(t) {
  t.isProjectionDirty = t.isSharedProjectionDirty = t.isTransformDirty = !1;
}
function ff(t) {
  t.clearSnapshot();
}
function Rs(t) {
  t.clearMeasurements();
}
function Ds(t) {
  t.isLayoutDirty = !1;
}
function hf(t) {
  const { visualElement: e } = t.options;
  e && e.getProps().onBeforeLayoutMeasure && e.notify("BeforeLayoutMeasure"), t.resetTransform();
}
function Ms(t) {
  t.finishAnimation(), t.targetDelta = t.relativeTarget = t.target = void 0, t.isProjectionDirty = !0;
}
function df(t) {
  t.resolveTargetDelta();
}
function mf(t) {
  t.calcProjection();
}
function pf(t) {
  t.resetSkewAndRotation();
}
function gf(t) {
  t.removeLeadSnapshot();
}
function ks(t, e, n) {
  t.translate = L(e.translate, 0, n), t.scale = L(e.scale, 1, n), t.origin = e.origin, t.originPoint = e.originPoint;
}
function Os(t, e, n, i) {
  t.min = L(e.min, n.min, i), t.max = L(e.max, n.max, i);
}
function yf(t, e, n, i) {
  Os(t.x, e.x, n.x, i), Os(t.y, e.y, n.y, i);
}
function vf(t) {
  return t.animationValues && t.animationValues.opacityExit !== void 0;
}
const bf = {
  duration: 0.45,
  ease: [0.4, 0, 0.1, 1]
}, Ls = (t) => typeof navigator < "u" && navigator.userAgent && navigator.userAgent.toLowerCase().includes(t), js = Ls("applewebkit/") && !Ls("chrome/") ? Math.round : it;
function Fs(t) {
  t.min = js(t.min), t.max = js(t.max);
}
function xf(t) {
  Fs(t.x), Fs(t.y);
}
function xo(t, e, n) {
  return t === "position" || t === "preserve-aspect" && !_u(Cs(e), Cs(n), 0.2);
}
function Tf(t) {
  var e;
  return t !== t.root && ((e = t.scroll) == null ? void 0 : e.wasRoot);
}
const wf = bo({
  attachResizeListener: (t, e) => oe(t, "resize", e),
  measureScroll: () => ({
    x: document.documentElement.scrollLeft || document.body.scrollLeft,
    y: document.documentElement.scrollTop || document.body.scrollTop
  }),
  checkIsScrollRoot: () => !0
}), sn = {
  current: void 0
}, To = bo({
  measureScroll: (t) => ({
    x: t.scrollLeft,
    y: t.scrollTop
  }),
  defaultParent: () => {
    if (!sn.current) {
      const t = new wf({});
      t.mount(window), t.setOptions({ layoutScroll: !0 }), sn.current = t;
    }
    return sn.current;
  },
  resetTransform: (t, e) => {
    t.style.transform = e !== void 0 ? e : "none";
  },
  checkIsScrollRoot: (t) => window.getComputedStyle(t).position === "fixed"
}), Sf = {
  pan: {
    Feature: Nu
  },
  drag: {
    Feature: Bu,
    ProjectionNode: To,
    MeasureLayout: ho
  }
};
function Is(t, e, n) {
  const { props: i } = t;
  t.animationState && i.whileHover && t.animationState.setActive("whileHover", n === "Start");
  const s = "onHover" + n, o = i[s];
  o && k.postRender(() => o(e, ue(e)));
}
class Pf extends xt {
  mount() {
    const { current: e } = this.node;
    e && (this.unmount = zl(e, (n, i) => (Is(this.node, i, "Start"), (s) => Is(this.node, s, "End"))));
  }
  unmount() {
  }
}
class _f extends xt {
  constructor() {
    super(...arguments), this.isActive = !1;
  }
  onFocus() {
    let e = !1;
    try {
      e = this.node.current.matches(":focus-visible");
    } catch {
      e = !0;
    }
    !e || !this.node.animationState || (this.node.animationState.setActive("whileFocus", !0), this.isActive = !0);
  }
  onBlur() {
    !this.isActive || !this.node.animationState || (this.node.animationState.setActive("whileFocus", !1), this.isActive = !1);
  }
  mount() {
    this.unmount = ae(oe(this.node.current, "focus", () => this.onFocus()), oe(this.node.current, "blur", () => this.onBlur()));
  }
  unmount() {
  }
}
function Bs(t, e, n) {
  const { props: i } = t;
  if (t.current instanceof HTMLButtonElement && t.current.disabled)
    return;
  t.animationState && i.whileTap && t.animationState.setActive("whileTap", n === "Start");
  const s = "onTap" + (n === "End" ? "" : n), o = i[s];
  o && k.postRender(() => o(e, ue(e)));
}
class Af extends xt {
  mount() {
    const { current: e } = this.node;
    e && (this.unmount = Ql(e, (n, i) => (Bs(this.node, i, "Start"), (s, { success: o }) => Bs(this.node, s, o ? "End" : "Cancel")), { useGlobalTarget: this.node.props.globalTapTarget }));
  }
  unmount() {
  }
}
const Vn = /* @__PURE__ */ new WeakMap(), rn = /* @__PURE__ */ new WeakMap(), Vf = (t) => {
  const e = Vn.get(t.target);
  e && e(t);
}, Cf = (t) => {
  t.forEach(Vf);
};
function Ef({ root: t, ...e }) {
  const n = t || document;
  rn.has(n) || rn.set(n, {});
  const i = rn.get(n), s = JSON.stringify(e);
  return i[s] || (i[s] = new IntersectionObserver(Cf, { root: t, ...e })), i[s];
}
function Rf(t, e, n) {
  const i = Ef(e);
  return Vn.set(t, n), i.observe(t), () => {
    Vn.delete(t), i.unobserve(t);
  };
}
const Df = {
  some: 0,
  all: 1
};
class Mf extends xt {
  constructor() {
    super(...arguments), this.hasEnteredView = !1, this.isInView = !1;
  }
  startObserver() {
    this.unmount();
    const { viewport: e = {} } = this.node.getProps(), { root: n, margin: i, amount: s = "some", once: o } = e, r = {
      root: n ? n.current : void 0,
      rootMargin: i,
      threshold: typeof s == "number" ? s : Df[s]
    }, a = (l) => {
      const { isIntersecting: u } = l;
      if (this.isInView === u || (this.isInView = u, o && !u && this.hasEnteredView))
        return;
      u && (this.hasEnteredView = !0), this.node.animationState && this.node.animationState.setActive("whileInView", u);
      const { onViewportEnter: c, onViewportLeave: h } = this.node.getProps(), d = u ? c : h;
      d && d(l);
    };
    return Rf(this.node.current, r, a);
  }
  mount() {
    this.startObserver();
  }
  update() {
    if (typeof IntersectionObserver > "u")
      return;
    const { props: e, prevProps: n } = this.node;
    ["amount", "margin", "root"].some(kf(e, n)) && this.startObserver();
  }
  unmount() {
  }
}
function kf({ viewport: t = {} }, { viewport: e = {} } = {}) {
  return (n) => t[n] !== e[n];
}
const Of = {
  inView: {
    Feature: Mf
  },
  tap: {
    Feature: Af
  },
  focus: {
    Feature: _f
  },
  hover: {
    Feature: Pf
  }
}, Lf = {
  layout: {
    ProjectionNode: To,
    MeasureLayout: ho
  }
}, jf = {
  ...bu,
  ...Of,
  ...Sf,
  ...Lf
}, Ff = /* @__PURE__ */ Lc(jf, Xc), If = {
  primary: "bg-primary-600 text-white hover:bg-primary-700 focus:ring-primary-500 shadow-sm hover-lift",
  secondary: "bg-secondary-600 text-white hover:bg-secondary-700 focus:ring-secondary-500 shadow-sm hover-lift",
  ghost: "bg-transparent text-secondary-700 hover:bg-secondary-100 focus:ring-secondary-500 border border-secondary-300",
  link: "bg-transparent text-primary-600 hover:text-primary-700 hover:underline focus:ring-primary-500 p-0",
  danger: "bg-error-600 text-white hover:bg-error-700 focus:ring-error-500 shadow-sm hover-lift",
  success: "bg-success-600 text-white hover:bg-success-700 focus:ring-success-500 shadow-sm hover-lift"
}, Bf = {
  xs: "px-3 py-1.5 text-xs rounded-md",
  sm: "px-4 py-2 text-sm rounded-md",
  md: "px-6 py-3 text-base rounded-lg",
  lg: "px-8 py-4 text-lg rounded-lg",
  xl: "px-10 py-5 text-xl rounded-xl"
}, Nf = {
  xs: "text-xs",
  sm: "text-sm",
  md: "text-base",
  lg: "text-lg",
  xl: "text-xl"
}, Uf = Re.forwardRef(
  ({
    className: t,
    variant: e = "primary",
    size: n = "md",
    isLoading: i = !1,
    leftIcon: s,
    rightIcon: o,
    children: r,
    disabled: a,
    animated: l = !0,
    ...u
  }, c) => {
    const h = "inline-flex items-center justify-center font-semibold rounded-lg transition-all duration-200 focus-ring disabled:opacity-50 disabled:pointer-events-none", d = If[e], m = e === "link" ? Nf[n] : Bf[n], g = rt(
      (i || a) && "cursor-not-allowed",
      i && "opacity-70"
    ), v = rt(
      "animate-spin -ml-1 mr-2",
      n === "xs" && "h-3 w-3",
      (n === "sm" || n === "md") && "h-4 w-4",
      n === "lg" && "h-5 w-5",
      n === "xl" && "h-6 w-6",
      !!r && "mr-2"
    ), T = rt(
      ["xs", "sm", "md"].includes(n) && "mr-2",
      ["lg", "xl"].includes(n) && "mr-3"
    ), y = rt(
      ["xs", "sm", "md"].includes(n) && "ml-2",
      ["lg", "xl"].includes(n) && "ml-3"
    ), b = l ? {
      whileHover: a ? {} : { scale: 1.02 },
      whileTap: a ? {} : { scale: 0.98 }
    } : {};
    return l === !0 ? /* @__PURE__ */ U.jsxs(
      Ff.button,
      {
        ref: c,
        className: rt(
          h,
          d,
          m,
          g,
          t
        ),
        disabled: a || i,
        ...b,
        ...u,
        children: [
          i && /* @__PURE__ */ U.jsxs(
            "svg",
            {
              className: v,
              fill: "none",
              viewBox: "0 0 24 24",
              "aria-hidden": "true",
              children: [
                /* @__PURE__ */ U.jsx(
                  "circle",
                  {
                    className: "opacity-25",
                    cx: "12",
                    cy: "12",
                    r: "10",
                    stroke: "currentColor",
                    strokeWidth: "4"
                  }
                ),
                /* @__PURE__ */ U.jsx(
                  "path",
                  {
                    className: "opacity-75",
                    fill: "currentColor",
                    d: "M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                  }
                )
              ]
            }
          ),
          !i && s && /* @__PURE__ */ U.jsx("span", { className: T, children: s }),
          r,
          !i && o && /* @__PURE__ */ U.jsx("span", { className: y, children: o })
        ]
      }
    ) : /* @__PURE__ */ U.jsxs(
      "button",
      {
        ref: c,
        className: rt(
          h,
          d,
          m,
          g,
          t
        ),
        disabled: a || i,
        ...u,
        children: [
          i && /* @__PURE__ */ U.jsxs(
            "svg",
            {
              className: v,
              fill: "none",
              viewBox: "0 0 24 24",
              "aria-hidden": "true",
              children: [
                /* @__PURE__ */ U.jsx(
                  "circle",
                  {
                    className: "opacity-25",
                    cx: "12",
                    cy: "12",
                    r: "10",
                    stroke: "currentColor",
                    strokeWidth: "4"
                  }
                ),
                /* @__PURE__ */ U.jsx(
                  "path",
                  {
                    className: "opacity-75",
                    fill: "currentColor",
                    d: "M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                  }
                )
              ]
            }
          ),
          !i && s && /* @__PURE__ */ U.jsx("span", { className: T, children: s }),
          r,
          !i && o && /* @__PURE__ */ U.jsx("span", { className: y, children: o })
        ]
      }
    );
  }
);
Uf.displayName = "Button";
const $f = {
  sm: 18,
  md: 24,
  lg: 32
}, nh = ({
  name: t,
  size: e = "md",
  color: n = "currentColor",
  className: i,
  onClick: s,
  disabled: o = !1,
  style: r = {}
}) => {
  const a = Ws[t];
  if (!a)
    return console.warn(`Icon "${t}" not found in icon set`), null;
  const l = typeof e == "string" ? $f[e] : e, u = !!s && !o;
  return /* @__PURE__ */ U.jsx(
    "span",
    {
      className: rt(
        "material-icons",
        "inline-flex items-center justify-center",
        "select-none align-middle leading-none",
        "font-normal normal-case",
        // Flattened clickable classes (ternary to avoid array inference issues)
        u ? "cursor-pointer" : !1,
        u ? "transition-all duration-200" : !1,
        u ? "rounded-md p-1" : !1,
        u ? "hover:bg-gray-100 hover:scale-105" : !1,
        u ? "active:scale-95" : !1,
        u ? "focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2" : !1,
        o && "opacity-50 cursor-not-allowed",
        i
      ),
      style: {
        fontSize: l,
        width: l,
        height: l,
        color: n,
        ...r
      },
      onClick: u ? s : void 0,
      role: u ? "button" : "img",
      "aria-label": t,
      tabIndex: u ? 0 : -1,
      children: a
    }
  );
}, Wf = {
  xs: "px-3 py-1.5 text-sm h-8",
  sm: "px-3 py-2 text-sm h-9",
  md: "px-4 py-2.5 text-base h-10",
  lg: "px-4 py-3 text-lg h-11",
  xl: "px-5 py-3.5 text-xl h-12"
}, Kf = {
  default: "border-gray-300 bg-white text-gray-900 placeholder-gray-500 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20",
  error: "border-red-500 bg-white text-gray-900 placeholder-gray-500 focus:border-red-500 focus:ring-2 focus:ring-red-500/20",
  disabled: "border-gray-200 bg-gray-50 text-gray-500 placeholder-gray-400 cursor-not-allowed",
  readonly: "border-gray-200 bg-gray-50 text-gray-700 placeholder-gray-500 cursor-not-allowed"
}, Yf = Re.forwardRef(
  ({
    className: t,
    size: e = "md",
    state: n = "default",
    leftIcon: i,
    rightIcon: s,
    fullWidth: o = !1,
    disabled: r,
    readOnly: a,
    ...l
  }, u) => {
    const c = r ? "disabled" : a ? "readonly" : n;
    return /* @__PURE__ */ U.jsxs("div", { className: rt("relative", o && "w-full"), children: [
      i && /* @__PURE__ */ U.jsx(
        "div",
        {
          className: rt(
            "absolute inset-y-0 left-0 flex items-center pointer-events-none text-gray-400",
            e === "xs" ? "pl-2" : !1,
            e === "sm" ? "pl-2.5" : !1,
            e === "md" ? "pl-3" : !1,
            e === "lg" ? "pl-3" : !1,
            e === "xl" ? "pl-3.5" : !1
          ),
          children: i
        }
      ),
      /* @__PURE__ */ U.jsx(
        "input",
        {
          ref: u,
          className: rt(
            // Base styles
            "block w-full border rounded-lg transition-all duration-200",
            "focus:outline-none focus:shadow-sm",
            "disabled:cursor-not-allowed",
            // Size and state
            Wf[e],
            Kf[c],
            // Icon padding (use ternary to ensure string | false)
            i && e === "xs" ? "pl-8" : !1,
            i && e === "sm" ? "pl-9" : !1,
            i && e === "md" ? "pl-10" : !1,
            i && e === "lg" ? "pl-11" : !1,
            i && e === "xl" ? "pl-12" : !1,
            s && e === "xs" ? "pr-8" : !1,
            s && e === "sm" ? "pr-9" : !1,
            s && e === "md" ? "pr-10" : !1,
            s && e === "lg" ? "pr-11" : !1,
            s && e === "xl" ? "pr-12" : !1,
            o && "w-full",
            t
          ),
          disabled: r || c === "disabled",
          readOnly: a || c === "readonly",
          ...l
        }
      ),
      s && /* @__PURE__ */ U.jsx(
        "div",
        {
          className: rt(
            "absolute inset-y-0 right-0 flex items-center pointer-events-none text-gray-400",
            e === "xs" ? "pr-2" : !1,
            e === "sm" ? "pr-2.5" : !1,
            e === "md" ? "pr-3" : !1,
            e === "lg" ? "pr-3" : !1,
            e === "xl" ? "pr-3.5" : !1
          ),
          children: s
        }
      )
    ] });
  }
);
Yf.displayName = "Input";
function rt(...t) {
  return t.filter(Boolean).join(" ");
}
const Ns = () => Object.keys(Ws), ih = (t) => typeof t != "string" ? Ns() : Ns().filter(
  (e) => e.toLowerCase().includes(t.toLowerCase())
), Gf = {
  navigation: [
    "home",
    "menu",
    "close",
    "expand_more",
    "expand_less",
    "arrow_back",
    "arrow_forward",
    "arrow_upward",
    "arrow_downward",
    "chevron_left",
    "chevron_right",
    "chevron_up",
    "chevron_down"
  ],
  actions: [
    "add",
    "remove",
    "create",
    "edit",
    "delete",
    "save",
    "cancel",
    "refresh",
    "download",
    "upload",
    "cloud_upload",
    "cloud_download",
    "print",
    "share"
  ],
  communication: [
    "mail",
    "mail_outline",
    "mark_email_read",
    "mark_email_unread",
    "chat",
    "chat_bubble",
    "chat_bubble_outline",
    "comment",
    "forum"
  ],
  user: [
    "person",
    "person_outline",
    "group",
    "account_circle",
    "login",
    "logout",
    "manage_accounts"
  ],
  files: [
    "folder",
    "folder_open",
    "insert_drive_file",
    "description",
    "article",
    "note",
    "list",
    "grid_view",
    "view_list",
    "view_module"
  ],
  status: [
    "check",
    "check_circle",
    "check_circle_outline",
    "cancel",
    "info",
    "help",
    "help_outline",
    "warning",
    "error",
    "error_outline"
  ],
  system: ["settings", "tune", "build", "engineering", "refresh", "autorenew"],
  media: [
    "image",
    "photo",
    "photo_library",
    "camera_alt",
    "videocam",
    "mic",
    "headset"
  ],
  toggle: [
    "visibility",
    "visibility_off",
    "favorite",
    "favorite_border",
    "star",
    "star_border",
    "star_half",
    "grade"
  ],
  commerce: [
    "shopping_cart",
    "shopping_bag",
    "payment",
    "credit_card",
    "receipt",
    "attach_money"
  ],
  time: [
    "schedule",
    "calendar_today",
    "event",
    "event_available",
    "event_busy",
    "access_time",
    "timer"
  ],
  data: ["analytics", "bar_chart", "show_chart", "timeline", "dashboard"],
  security: [
    "lock",
    "lock_open",
    "security",
    "verified_user",
    "admin_panel_settings"
  ]
}, sh = (t) => Gf[t];
export {
  Uf as Button,
  nh as Icon,
  Yf as Input,
  th as animations,
  Zf as borders,
  Rt as breakpoints,
  rt as cn,
  Xf as colors,
  Ns as getAllIconNames,
  sh as getIconsByCategory,
  Gf as iconCategories,
  Qf as mediaQueries,
  Ff as motion,
  ih as searchIcons,
  qf as spacing,
  zf as typography,
  Jf as zIndex
};
